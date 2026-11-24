/* One voice for the whole site. The server makes the audio (same voice on every device) and the browser plays it.
   Phones block audio that starts after a network request unless the element was unlocked by a tap, so the site
   uses ONE persistent <audio> element: szUnlock() plays a silent clip inside a tap, and every later phrase reuses
   that element. If the server voice is unavailable nothing else is played. */
(function () {
  var cache = {}, unlocked = false, queue = Promise.resolve();
  var SILENT = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
  var A = new Audio();
  A.preload = "auto";
  A.setAttribute("playsinline", "");
  function base() { return window.SZ_API || ""; }
  /* запасной голос: если сервер не отдал аудио (нет адреса Worker, сеть, лимит), говорит встроенный голос браузера */
  function browserSpeak(text) {
    return new Promise(function (res) {
      try {
        var sy = window.speechSynthesis;
        if (!sy || !window.SpeechSynthesisUtterance) { res(); return; }
        var u = new SpeechSynthesisUtterance(text);
        u.lang = "en-GB"; u.rate = 0.95;
        var vs = (sy.getVoices() || []).filter(function (x) { return /^en/i.test(x.lang); });
        var pick = vs.find(function (x) { return /en[-_]GB/i.test(x.lang); }) || vs[0];
        if (pick) u.voice = pick;
        var done = false, fin = function () { if (!done) { done = true; res(); } };
        u.onend = fin; u.onerror = fin;
        setTimeout(fin, Math.min(20000, text.length * 110 + 3000));
        sy.cancel(); sy.speak(u);
      } catch (e) { res(); }
    });
  }
  function playUrl(url) {
    return new Promise(function (res) {
      A.onended = res;
      A.onerror = function () { res(); };
      A.src = url;
      var p = A.play();
      if (p && p.catch) p.catch(function () { res(); });
    });
  }
  window.szSpeak = function (text, opts) {
    text = String(text || "").trim().slice(0, 300);
    if (!text) return Promise.resolve();
    window.szStop();
    /* phrases play one after another, never on top of each other */
    queue = queue.then(function () {
      if (cache[text]) return playUrl(cache[text]);
      return fetch(base() + "/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
      }).then(function (r) {
        if (!r.ok) throw new Error("tts");
        return r.blob();
      }).then(function (blob) {
        var url = URL.createObjectURL(blob);
        cache[text] = url;
        return playUrl(url);
      }).catch(function () { return browserSpeak(text); });
    });
    return queue;
  };
  window.szStop = function () {
    try { A.pause(); A.onended = null; A.onerror = null; } catch (e) {}
    try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
  };
  /* call inside a user tap (button click / tap handler): unlocks the audio element for the whole visit */
  window.szUnlock = function () {
    if (unlocked) return;
    unlocked = true;
    try {
      A.src = SILENT;
      var p = A.play();
      if (p && p.catch) p.catch(function () { unlocked = false; });
    } catch (e) { unlocked = false; }
  };
}());

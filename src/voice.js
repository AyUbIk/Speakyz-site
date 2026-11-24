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
      }).catch(function () { /* server voice unavailable: stay silent */ });
    });
    return queue;
  };
  window.szStop = function () {
    try { A.pause(); A.onended = null; A.onerror = null; } catch (e) {}
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

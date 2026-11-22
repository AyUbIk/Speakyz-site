/* One voice for the whole site: the server makes the audio (same voice on every device), the browser only plays it.
   If the server is unavailable the browser voice is used as a fallback. */
(function () {
  var cache = {}, cur = null, unlocked = false;
  function base() { return window.SZ_API || ""; }
  /* one voice only: if the server voice is unavailable, nothing else is played */
  function fallback(text, opts) { return Promise.resolve(); }
  function play(url, text, opts) {
    return new Promise(function (res) {
      var a = new Audio(url);
      cur = a;
      a.onended = res;
      a.onerror = function () { res(); };
      var p = a.play();
      if (p && p.catch) p.catch(function () { fallback(text, opts).then(res); });
    });
  }
  window.szSpeak = function (text, opts) {
    opts = opts || {};
    text = String(text || "").trim().slice(0, 300);
    if (!text) return Promise.resolve();
    window.szStop();
    if (cache[text]) return play(cache[text], text, opts);
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
      return play(url, text, opts);
    }).catch(function () {
      return fallback(text, opts);
    });
  };
  window.szStop = function () {
    try { if (cur) { cur.pause(); cur = null; } } catch (e) {}
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
  };
  /* call inside a user tap once: lets iOS play audio that starts later */
  window.szUnlock = function () {
    if (unlocked) return;
    unlocked = true;
    try {
      var a = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=");
      var p = a.play(); if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  };
}());

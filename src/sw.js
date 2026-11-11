/* Speakyz service worker: faster repeat visits on slow networks.
   HTML/config: network first (3 s timeout, then cache) so updates always arrive.
   Google Fonts: cache first. Everything else (API, other origins) is left alone. */
var V='sz-v1',FONT=/^https:\/\/fonts\.(googleapis|gstatic)\.com\//;
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
function put(req,res){if(res&&res.ok&&(res.type==='basic'||res.type==='cors')){var c=res.clone();caches.open(V).then(function(ca){ca.put(req,c)})}return res}
self.addEventListener('fetch',function(e){
 var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);
 if(FONT.test(r.url)){e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(x){return put(r,x)})}));return}
 if(u.origin!==location.origin)return;
 var page=r.mode==='navigate'||/\.(html|js)$/.test(u.pathname)||u.pathname.slice(-1)==='/';
 if(!page)return;
 e.respondWith(new Promise(function(ok){
  var done=false,t=setTimeout(function(){caches.match(r).then(function(m){if(m&&!done){done=true;ok(m)}})},3000);
  fetch(r).then(function(x){clearTimeout(t);if(!done){done=true;ok(put(r,x))}else put(r,x)}).catch(function(){clearTimeout(t);caches.match(r).then(function(m){if(!done){done=true;ok(m||Response.error())}})})}))});

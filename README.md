# Speakyz

- `src/` — сайт (index.html, admin/index.html, JS), `scripts/build.py` собирает его в `dist/`.
- `src/config.js` — впишите адрес вашего Cloudflare Worker.
- `src/og.png` — временная картинка для соцсетей, замените своей (1200×630).
- `worker/worker.js` — целиком вставляется в Cloudflare Worker.
- GitHub: Settings → Pages → Source = GitHub Actions; деплой запускается при пуше в `main`.

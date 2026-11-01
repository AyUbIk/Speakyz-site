# Speakyz: сайт на Cloudflare Workers (ИИ: Google Gemini)

Один Worker отдаёт и сайт (`public/index.html`), и AI-эндпоинт `POST /api/chat`. Деплой идёт сам при каждом изменении в GitHub.

## Структура
- `public/index.html`: весь сайт
- `src/worker.js`: ИИ-учитель, проверка Speaking и Writing (Google Gemini), SEO-страницы
- `wrangler.jsonc`: настройки Cloudflare (модель, адрес сайта)
- `.github/workflows/deploy.yml`: автодеплой при изменении `main`

## Первый запуск (всё в браузере)

1. **GitHub.** Создайте новый репозиторий на https://github.com/new (имя `speakyz`, Public или Private). Нажмите **uploading an existing file** и перетащите в окно **содержимое** распакованной папки (все папки и файлы внутри: `.github`, `public`, `src`, `wrangler.jsonc` и остальные). **Commit changes.**
   Если папка `.github` не загрузилась: **Add file → Create new file**, в имени файла напишите `.github/workflows/deploy.yml` и вставьте содержимое файла из архива.
2. **Cloudflare, токен.** https://dash.cloudflare.com/profile/api-tokens → **Create Token** → шаблон **Edit Cloudflare Workers** → Continue to summary → **Create Token**. Скопируйте токен (его показывают один раз).
3. **Cloudflare, Account ID.** https://dash.cloudflare.com → **Workers & Pages**: справа виден **Account ID**. Скопируйте.
4. **GitHub, секреты.** В репозитории: **Settings → Secrets and variables → Actions → New repository secret**. Создайте два секрета: `CLOUDFLARE_API_TOKEN` (токен) и `CLOUDFLARE_ACCOUNT_ID` (ID).
5. **Первый деплой.** Вкладка **Actions** → **Deploy to Cloudflare** → **Run workflow**. Через 1–2 минуты в логе будет зелёная галочка. Сайт: `https://speakyz.<ваш-поддомен>.workers.dev` (ваш поддомен виден в Workers & Pages).
6. **Ключ Gemini.** Создайте ключ на https://aistudio.google.com/apikey. В Cloudflare: **Workers & Pages → speakyz → Settings → Variables and Secrets → Add** → тип **Secret**, имя `GEMINI_API_KEY`, значение: ключ → **Deploy**.
7. **Проверка.** Откройте сайт → **AI Teacher** → напишите сообщение. Должен прийти ответ.

Дальше каждый коммит в `main` (правка файла на GitHub) выкатывается автоматически.

## Что менять
- Telegram-аккаунты: блок `SZ_TG` в `public/index.html`.
- Модели ИИ: переменные в `wrangler.jsonc`:
  - `MODEL`: основная модель (по умолчанию `gemini-3.5-flash`),
  - `FALLBACK_MODEL`: запасная, если основная перегружена или кончился лимит (по умолчанию `gemini-3.1-flash-lite`),
  - `THINKING`: глубина «размышления»: `low` (быстрее), `medium`, `high`; `off` или пусто отключает параметр.
  Названия моделей проверяйте на https://ai.google.dev/gemini-api/docs/models.
- Ключ ИИ меняется только в Cloudflare (Variables and Secrets), в код его не пишут.
- Без ключа ИИ-функции показывают сообщение об ошибке, остальной сайт работает.

## Если ИИ не отвечает
Откройте сайт, F12 → вкладка **Network**, отправьте сообщение и откройте запрос `chat`. В ответе будет `error` и `detail`:
- `not_configured`: нет секрета `GEMINI_API_KEY` (шаг 6).
- `upstream_400` + `API_KEY_INVALID`: ключ вписан неверно.
- `upstream_404` + `NOT_FOUND`: такой модели нет, поправьте `MODEL` и `FALLBACK_MODEL`.
- `upstream_503` + `UNAVAILABLE`: Google перегружен, Worker сам повторит запрос и перейдёт на запасную модель.
- `upstream_429` + `RESOURCE_EXHAUSTED`: кончился лимит бесплатного ключа.
- `upstream_400` + `FAILED_PRECONDITION` (про регион): Google не обслуживает регион, откуда пришёл запрос.
- `forbidden`: запрос пришёл с другого сайта (разрешён только свой адрес).
- `rate`: больше 12 сообщений в минуту с одного адреса.

## Локально
`cp .dev.vars.example .dev.vars`, вставьте ключ, `npm install`, `npm run dev`.

## SEO и домен
- Worker сам отдаёт заголовок, описание, превью для соцсетей (`public/og.png`), canonical и разметку организации для адресов `/`, `/courses`, `/ielts`, `/teachers`, `/schedule`, `/shop`, `/test`, `/university`, `/contact`. Тексты: объект `PAGES` в `src/worker.js`.
- `robots.txt` и `sitemap.xml` строятся автоматически.
- **Когда подключите домен speakyz.uz:** в Cloudflare добавьте его в Workers, speakyz, Settings, Domains and Routes, затем в `wrangler.jsonc` впишите `"SITE_URL": "https://speakyz.uz"` и сохраните коммит. До этого оставьте пустым, адреса возьмутся от текущего.
- После запуска добавьте сайт в Google Search Console и Яндекс Вебмастер и отправьте `https://speakyz.uz/sitemap.xml`.
- Языки RU, UZ и EN переключаются на странице. Для поисковиков основной язык русский.

## Лимиты бесплатного плана
Worker обслуживает все запросы сайта, а бесплатный план Cloudflare даёт 100 000 запросов в день. Для школьного сайта этого хватает с запасом. Бесплатный ключ Gemini тоже имеет лимиты запросов в минуту и в день, они общие для всех посетителей.

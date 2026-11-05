# Speakyz: бесплатная версия

Сайт школы на **GitHub Pages**, ИИ и API на **Cloudflare Worker**, база данных **Firebase Firestore**.
Всё на бесплатных тарифах, платных функций нет. Всё настраивается в браузере, командная строка и Docker не нужны.

```
Посетитель -> GitHub Pages (сайт)
                 |
                 +--> Cloudflare Worker (/api/chat, /api/transcribe -> Gemini)
                                        (/api/leads, /api/reviews, /api/progress -> Firestore)
```

Что где лежит:
- `src/` сайт (`index.html`, `config.js`, `og.png`)
- `scripts/build.py` и `.github/workflows/pages.yml` сборка и публикация (запускается сама)
- `worker/worker.js` код Worker (вставляется в панель Cloudflare)

---

## Шаг 1. Firebase (база данных)

1. Откройте https://console.firebase.google.com, **Create a project**, имя например `speakyz`. Google Analytics можно выключить.
2. Тариф оставьте **Spark** (бесплатный). Карта не нужна, не повышайте тариф до Blaze.
3. Слева **Build -> Firestore Database -> Create database**. Выберите **Standard edition**, регион поближе (например `eur3`), режим **Production mode**. Регион потом изменить нельзя. Правила доступа менять не надо: сайт обращается к базе только через Worker.
4. **Project settings** (шестерёнка) -> **Service accounts** -> **Generate new private key**. Скачается JSON-файл. Это секрет: не выкладывайте его в GitHub и никому не показывайте.

## Шаг 2. Cloudflare Worker

1. https://dash.cloudflare.com -> **Workers & Pages -> Create -> Start with Hello World**. Имя, например `speakyz-api`, **Deploy**.
2. **Edit code**: удалите весь код, вставьте содержимое `worker/worker.js`, **Deploy**.
3. **Settings -> Variables and Secrets -> Add**:
   - Type **Secret**, `GEMINI_API_KEY`: ключ из Google AI Studio.
   - Type **Secret**, `FIREBASE_SERVICE_ACCOUNT`: откройте скачанный JSON в блокноте и вставьте **весь** текст.
   - Type **Text**, `ALLOWED_ORIGIN`: адрес сайта без пути, например `https://ВАШ-ЛОГИН.github.io` (если свой домен, то `https://speakyz.uz`; можно несколько через запятую). Заполните после шага 3.
4. Адрес Worker будет вида `https://speakyz-api.ВАШ-ПОДДОМЕН.workers.dev`. Откройте `.../api/health`. Должно быть `"ai":true` и `"db":"up"`. Если `db` равно `down`, смотрите `db_error`: `token_...` значит неверный JSON-ключ, `firestore_403` значит база не создана или другой проект, `firestore_404` значит не создана база Firestore.

## Шаг 3. GitHub Pages (сайт)

1. Создайте **публичный** репозиторий на https://github.com. Чтобы адрес был без лишней папки, назовите его `ВАШ-ЛОГИН.github.io`. Подойдёт и любое другое имя, тогда адрес будет `https://ВАШ-ЛОГИН.github.io/имя/`.
2. **Add file -> Upload files**: перетащите всё содержимое этой папки, включая скрытую папку `.github`. Если она не загрузилась, создайте файл через **Add file -> Create new file**, в имени введите `.github/workflows/pages.yml` и вставьте содержимое из архива.
3. В репозитории **Settings -> Pages -> Source: GitHub Actions**.
4. Откройте `src/config.js`, нажмите карандаш и впишите адрес Worker:
   ```
   window.SZ_API = "https://speakyz-api.ВАШ-ПОДДОМЕН.workers.dev";
   ```
   Сохраните (**Commit changes**). На вкладке **Actions** появится сборка, через минуту сайт откроется.
5. Вернитесь в Worker и впишите адрес сайта в `ALLOWED_ORIGIN` (шаг 2.3).

Свой домен: **Settings -> Pages -> Custom domain**, затем создайте переменную `SITE_URL` (Settings -> Secrets and variables -> Actions -> Variables) со значением `https://ваш-домен` и запустите **Actions -> Deploy site -> Run workflow**.

## Работа с данными

В Firebase Console -> **Firestore Database -> Data**:
- `leads`: заявки на урок (имя, контакт, курс, сообщение).
- `reviews`: отзывы. Новые приходят с `approved = false`. Чтобы показать отзыв на сайте, откройте его и поменяйте `approved` на `true` (тип boolean). На сайте он появится в течение 5 минут.
- `clients/<id>/progress`: результаты тестов учеников.

## Лимиты бесплатных тарифов

- Cloudflare Workers Free: 100 000 запросов в сутки.
- Firestore (Spark): 50 000 чтений и 20 000 записей в сутки, 1 ГБ данных. Список отзывов кэшируется в Worker на 5 минут, поэтому читается редко.
- Gemini API: бесплатный лимит Google AI Studio, он может меняться. При превышении ИИ вернёт ошибку 429.
- Показываются до 100 последних одобренных отзывов.

## Если что-то не работает

- ИИ не отвечает: откройте `/api/health` у Worker. `"ai":false` значит не задан секрет `GEMINI_API_KEY` (после добавления секрета нажмите Deploy).
- В консоли браузера ошибка CORS или ответ 403: проверьте `ALLOWED_ORIGIN` (без слэша и без пути) и `window.SZ_API` в `config.js`.
- Новые страницы `/courses/` и другие дают 404: дождитесь окончания сборки на вкладке Actions.

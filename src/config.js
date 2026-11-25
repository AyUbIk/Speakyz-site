// Адрес вашего Cloudflare Worker (без слэша в конце). Замените на свой.
window.SZ_API = "https://speakyz-api.ВАШ-АККАУНТ.workers.dev";
if (/ВАШ-АККАУНТ/.test(window.SZ_API)) console.warn("Speakyz: впишите адрес Worker в src/config.js. Без него не работают чат, голос экзаменатора и отзывы.");

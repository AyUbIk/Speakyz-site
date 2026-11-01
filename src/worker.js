// Speakyz: Cloudflare Worker. Serves the static site (public/) and the AI endpoint POST /api/chat (Google Gemini).
// Secret required: GEMINI_API_KEY. Optional vars: MODEL, FALLBACK_MODEL, THINKING (low | medium | high | off).

const MAX_MESSAGES = 12;
const MAX_CHARS = 6000;
const LANGS = { ru: "Russian", uz: "Uzbek (Latin script)", en: "English" };
const DEFAULT_MODEL = "gemini-3.5-flash";
const DEFAULT_FALLBACK = "gemini-3.1-flash-lite"; // used when the main model is overloaded (503) or out of quota (429)
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/";

const BASE = `You are the AI teacher of Speakyz, an English school in Tashkent (speaking clubs, IELTS preparation, individual lessons; the first Speaking lesson is free). Be warm, direct and concise. Never invent prices, schedules, guarantees or exam results. If asked about prices, groups, dates or booking, tell the person to message the manager on Telegram: @speakyz_admin. Never say that a score is guaranteed.`;

const MODES = {
  speaking: `Task: give feedback on an IELTS Speaking answer. The user sends the question and a transcript of their spoken answer.
Score the four IELTS criteria on a 0 to 9 scale in steps of 0.5: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation (say Pronunciation can only be estimated from a transcript). Then give an approximate overall band, the 3 most useful corrections as "you said" -> "better", and one improved version of one sentence. Say clearly that this is an approximate estimate, not an official score. Keep it under 250 words.`,
  writing: `Task: give feedback on an IELTS Writing answer (Task 1 or Task 2). The user sends the task and the essay.
Score Task Achievement or Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy on a 0 to 9 scale in steps of 0.5, then an approximate overall band. List the 3 most important problems with short examples from the text, and give a concrete next step. Say clearly that this is an approximate estimate, not an official score. Keep it under 300 words.`,
  teacher: {
    free: `Task: free chat. Answer questions about English, IELTS and learning plans. Explain simply with short examples. Ask one follow-up question when it helps.`,
    grammar: `Task: grammar correction. The user writes English sentences. Reply with: the corrected sentence, then a one or two sentence explanation of each mistake in the user's interface language. Be encouraging. If the sentence is correct, say so.`,
    speaking: `Task: speaking practice. Play an IELTS Speaking examiner and conversation partner. Speak English only, in short turns (1 to 3 sentences), ask one question at a time. After each user answer, give at most one short correction in brackets, then ask the next question.`,
  },
};


// ---------- SEO: per-page meta, robots.txt, sitemap.xml ----------
const PAGES = {
  "/": ["Speakyz — курсы английского и IELTS в Ташкенте", "Разговорные клубы, подготовка к IELTS и индивидуальные уроки английского в Ташкенте и онлайн. Первый урок Speaking бесплатный."],
  "/courses": ["Курсы английского в Ташкенте: Speaking club, IELTS, индивидуальные | Speakyz", "Speaking club, подготовка к IELTS и индивидуальные уроки в Ташкенте и онлайн. Начните с бесплатного урока."],
  "/ielts": ["Подготовка к IELTS в Ташкенте | Speakyz", "Все четыре части IELTS: Speaking, Writing, Listening и Reading. Пробные тесты и разбор. Первый урок бесплатный."],
  "/teachers": ["Преподаватели английского | Speakyz", "Познакомьтесь с преподавателями Speakyz и запишитесь на урок к тому, кто подходит вашей цели."],
  "/schedule": ["Запись на бесплатный урок | Speakyz", "Выберите курс, формат, преподавателя и удобное время. Точную группу и время подтверждаем в Telegram."],
  "/shop": ["Книги и курсы IELTS: Speaking 8.0, Writing 8.0, Reading 8.0 | Speakyz", "PDF-книги для подготовки к IELTS и курсы Speakyz. Первый урок Speaking бесплатный."],
  "/test": ["Тест уровня английского онлайн | Speakyz", "Три теста по уровням, 15 вопросов в каждом, результат сразу. Примерный уровень и рекомендация по курсу."],
  "/university": ["Требования вузов к IELTS | Speakyz", "Минимальные баллы IELTS университетов с источником и датой проверки."],
  "/contact": ["Контакты Speakyz: Юнусабад, Ташкент", "Адрес, Telegram и ответы на частые вопросы. Занятия офлайн в Юнусабаде и онлайн."],
};
const esc = (x) => x.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function seoPage(html, base, path) {
  const [title, desc] = PAGES[path];
  const url = base + (path === "/" ? "/" : path);
  const ld = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Speakyz",
    url: base + "/",
    description: PAGES["/"][1],
    image: base + "/og.png",
    address: { "@type": "PostalAddress", streetAddress: "Yunus-Abad, 19 kv., near School 257", addressLocality: "Tashkent", addressCountry: "UZ" },
    sameAs: ["https://www.instagram.com/speakyz_engl", "https://youtube.com/@speakyz", "https://t.me/SpeakyzEnglish"],
  };
  const head = [
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Speakyz">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${base}/og.png">`,
    `<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">`,
    `<meta property="og:locale" content="ru_RU"><meta property="og:locale:alternate" content="uz_UZ"><meta property="og:locale:alternate" content="en_US">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(desc)}">`,
    `<meta name="twitter:image" content="${base}/og.png">`,
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`)
    .replace("</head>", head + "\n</head>");
}

function robots(base) {
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${base}/sitemap.xml\n`;
}
function sitemap(base) {
  const urls = Object.keys(PAGES).map((p) => `  <url><loc>${base}${p === "/" ? "/" : p}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

function cleanMessages(list) {
  if (!Array.isArray(list)) return null;
  const out = [];
  for (const m of list.slice(-MAX_MESSAGES)) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") return null;
    const content = m.content.slice(0, MAX_CHARS).trim();
    if (!content) return null;
    out.push({ role: m.role, content });
  }
  while (out.length && out[0].role !== "user") out.shift();
  return out.length && out[out.length - 1].role === "user" ? out : null;
}

// Soft per-isolate rate limit (a Worker can run in many isolates, so this is only a brake against abuse).
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  if (hits.size > 2000) hits.clear();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 12;
}

async function chat(request, env) {
  if (!env.GEMINI_API_KEY) return json({ error: "not_configured" }, 500);
  if (limited(request.headers.get("CF-Connecting-IP") || "x")) return json({ error: "rate" }, 429);
  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_json" }, 400); }

  const mode = body.mode;
  const sub = body.sub;
  const lang = LANGS[body.lang] ? body.lang : "ru";
  let task = MODES[mode];
  if (mode === "teacher") task = MODES.teacher[sub] || MODES.teacher.free;
  if (typeof task !== "string") return json({ error: "bad_mode" }, 400);
  const messages = cleanMessages(body.messages);
  if (!messages) return json({ error: "bad_messages" }, 400);

  const system = `${BASE}\n\n${task}\n\nWrite your reply in ${LANGS[lang]}, except for English examples and corrections, which stay in English. Use plain text without markdown tables.`;

  // Gemini: role "model" instead of "assistant", "parts" instead of "content".
  const contents = messages.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] }));
  // Thinking tokens count toward maxOutputTokens on Gemini 3.x, so the limit is generous.
  const generationConfig = { maxOutputTokens: 2048 };
  const think = String(env.THINKING === undefined ? "low" : env.THINKING).trim().toLowerCase();
  if (think && think !== "off") generationConfig.thinkingConfig = { thinkingLevel: think };
  const payload = JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents, generationConfig });

  const main = /^gemini/.test(env.MODEL || "") ? env.MODEL : DEFAULT_MODEL;
  const fallback = /^gemini/.test(env.FALLBACK_MODEL || "") ? env.FALLBACK_MODEL : DEFAULT_FALLBACK;
  // Main model twice (Google sometimes answers 503 "UNAVAILABLE" for a moment), then the fallback model once.
  const attempts = [main, main];
  if (fallback !== main) attempts.push(fallback);

  let res = null;
  let data = {};
  for (let i = 0; i < attempts.length; i++) {
    if (i > 0 && attempts[i] === attempts[i - 1]) await new Promise((r) => setTimeout(r, 700));
    res = await fetch(`${GEMINI_URL}${attempts[i]}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
      body: payload,
      signal: AbortSignal.timeout(30000),
    });
    data = await res.json().catch(() => ({}));
    if (res.ok) break;
    if (![429, 500, 502, 503, 504].includes(res.status)) break; // a real error (bad key, bad request): do not retry
    if (res.status === 429 && attempts[i + 1] === attempts[i]) i++; // quota will not clear in a second: go to the fallback
  }
  if (!res || !res.ok) {
    return json({ error: "upstream_" + (res ? res.status : 0), detail: (data.error && (data.error.status || data.error.message)) || "" }, 502);
  }
  const cand = data.candidates && data.candidates[0];
  const parts = cand && cand.content && Array.isArray(cand.content.parts) ? cand.content.parts : [];
  const reply = parts.filter((p) => typeof p.text === "string" && !p.thought).map((p) => p.text).join("").trim();
  if (!reply) return json({ error: "empty", detail: (data.promptFeedback && data.promptFeedback.blockReason) || (cand && cand.finishReason) || "" }, 502);
  return json({ reply });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const base = (env.SITE_URL || url.origin).replace(/\/+$/, "");
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : "/";

    if (path === "/api/chat") {
      if (request.method !== "POST") return json({ error: "method" }, 405);
      // same-origin only: block other sites from spending the API key
      const origin = request.headers.get("Origin");
      if (origin && new URL(origin).host !== url.host) return json({ error: "forbidden" }, 403);
      try { return await chat(request, env); } catch { return json({ error: "server" }, 500); }
    }
    if (path === "/robots.txt") return new Response(robots(base), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
    if (path === "/sitemap.xml") return new Response(sitemap(base), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
    if (request.method === "GET" && PAGES[path]) {
      const res = await env.ASSETS.fetch(new Request(url.origin + "/", { headers: request.headers }));
      const html = await res.text();
      return new Response(seoPage(html, base, path), { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=300" } });
    }
    return env.ASSETS.fetch(request);
  },
};

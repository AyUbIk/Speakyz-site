#!/usr/bin/env python3
"""Сборка сайта для GitHub Pages: src/ -> dist/.

Для каждой страницы создаётся своя папка (например /courses/index.html) с нужными
title, description, canonical и Open Graph, плюс robots.txt и sitemap.xml.
Адрес сайта берётся из переменной окружения SITE_URL (в GitHub Actions подставляется сам).
Только стандартная библиотека Python 3.
"""
import json
import os
import shutil
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
DIST = ROOT / "dist"

PAGES = {
    "/": [
        "Speakyz — курсы английского и IELTS в Ташкенте",
        "Разговорные клубы, подготовка к IELTS и индивидуальные уроки английского в Ташкенте и онлайн. Первый урок Speaking бесплатный."
    ],
    "/courses": [
        "Курсы английского в Ташкенте: Speaking club, IELTS, индивидуальные | Speakyz",
        "Speaking club, подготовка к IELTS и индивидуальные уроки в Ташкенте и онлайн. Начните с бесплатного урока."
    ],
    "/ielts": [
        "Подготовка к IELTS в Ташкенте | Speakyz",
        "Все четыре части IELTS: Speaking, Writing, Listening и Reading. Пробные тесты и разбор. Первый урок бесплатный."
    ],
    "/teachers": [
        "Преподаватели английского | Speakyz",
        "Познакомьтесь с преподавателями Speakyz и запишитесь на урок к тому, кто подходит вашей цели."
    ],
    "/schedule": [
        "Запись на бесплатный урок | Speakyz",
        "Выберите курс, формат, преподавателя и удобное время. Точную группу и время подтверждаем в Telegram."
    ],
    "/shop": [
        "Книги и курсы IELTS: Speaking 8.0, Writing 8.0, Reading 8.0 | Speakyz",
        "PDF-книги для подготовки к IELTS и курсы Speakyz. Первый урок Speaking бесплатный."
    ],
    "/test": [
        "Тест уровня английского онлайн | Speakyz",
        "Три теста по уровням, 15 вопросов в каждом, результат сразу. Примерный уровень и рекомендация по курсу."
    ],
    "/arena": [
        "Голосовой экзаменатор IELTS Speaking онлайн | Speakyz",
        "Полный Speaking-тест голосом: экзаменатор задаёт вопросы вслух, вы отвечаете в микрофон, в конце разбор речи."
    ],
    "/university": [
        "Требования вузов к IELTS | Speakyz",
        "Минимальные баллы IELTS университетов с источником и датой проверки."
    ],
    "/contact": [
        "Контакты Speakyz: Юнусабад, Ташкент",
        "Адрес, Telegram и ответы на частые вопросы. Занятия офлайн в Юнусабаде и онлайн."
    ]
}


def esc(x):
    return x.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;")


def page_url(base, path):
    return base + "/" if path == "/" else base + path + "/"


def seo_page(html, base, path):
    title, desc = PAGES[path]
    url = page_url(base, path)
    ld = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Speakyz",
        "url": base + "/",
        "description": PAGES["/"][1],
        "image": base + "/og.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Yunus-Abad, 19 kv., near School 257",
            "addressLocality": "Tashkent",
            "addressCountry": "UZ",
        },
        "sameAs": [
            "https://www.instagram.com/speakyz_engl",
            "https://youtube.com/@speakyz",
            "https://t.me/SpeakyzEnglish",
        ],
    }
    ld_json = json.dumps(ld, ensure_ascii=False, separators=(",", ":")).replace("<", "\\u003c")
    head = "\n".join([
        f'<link rel="canonical" href="{url}">',
        '<meta property="og:type" content="website">',
        '<meta property="og:site_name" content="Speakyz">',
        f'<meta property="og:title" content="{esc(title)}">',
        f'<meta property="og:description" content="{esc(desc)}">',
        f'<meta property="og:url" content="{url}">',
        f'<meta property="og:image" content="{base}/og.png">',
        '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">',
        '<meta property="og:locale" content="ru_RU"><meta property="og:locale:alternate" content="uz_UZ"><meta property="og:locale:alternate" content="en_US">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:title" content="{esc(title)}">',
        f'<meta name="twitter:description" content="{esc(desc)}">',
        f'<meta name="twitter:image" content="{base}/og.png">',
        f'<script type="application/ld+json">{ld_json}</script>',
    ])
    import re
    out = re.sub(r"<title>[\s\S]*?</title>", lambda m: f"<title>{esc(title)}</title>", html, count=1)
    out = re.sub(r'<meta name="description" content="[^"]*">', lambda m: f'<meta name="description" content="{esc(desc)}">', out, count=1)
    return out.replace("</head>", head + "\n</head>", 1)


def main():
    site = os.environ.get("SITE_URL", "").strip().rstrip("/")
    if not site:
        site = "http://localhost:8000"
        print("SITE_URL не задан, использую", site, file=sys.stderr)
    base_path = urlparse(site).path.rstrip("/")

    html = (SRC / "index.html").read_text(encoding="utf-8")
    if 'src="config.js"' not in html:
        sys.exit("В src/index.html нет подключения config.js")
    html = html.replace('src="config.js"', f'src="{base_path}/config.js"')

    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()

    for path in PAGES:
        page = seo_page(html, site, path)
        if path == "/":
            (DIST / "index.html").write_text(page, encoding="utf-8")
            (DIST / "404.html").write_text(page, encoding="utf-8")
        else:
            d = DIST / path.strip("/")
            d.mkdir(parents=True, exist_ok=True)
            (d / "index.html").write_text(page, encoding="utf-8")

    urls = "\n".join(f"  <url><loc>{page_url(site, p)}</loc></url>" for p in PAGES)
    (DIST / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + "\n</urlset>\n",
        encoding="utf-8",
    )
    (DIST / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {site}/sitemap.xml\n", encoding="utf-8")
    (DIST / ".nojekyll").write_text("", encoding="utf-8")

    for name in ("config.js", "og.png"):
        shutil.copy(SRC / name, DIST / name)

    print(f"Готово: {len(PAGES)} страниц, адрес сайта {site}")


if __name__ == "__main__":
    main()

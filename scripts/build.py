#!/usr/bin/env python3
"""Сборка сайта для GitHub Pages: src/ -> dist/.

Для каждой страницы создаётся своя папка (например /courses/index.html) с нужными
title, description, canonical и Open Graph, плюс robots.txt и sitemap.xml.
Адрес сайта берётся из переменной окружения SITE_URL (в GitHub Actions подставляется сам).
Только стандартная библиотека Python 3.

Структура репозитория: scripts/build.py, src/index.html, src/config.js, src/admin/index.html ...
"""
import json
import os
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent if (HERE.parent / "src").is_dir() else HERE
SRC = ROOT / "src" if (ROOT / "src").is_dir() else ROOT
DIST = ROOT / "dist"

PAGES = {
    "/": [
        "Speakyz — курсы английского и IELTS онлайн",
        "Разговорные клубы, подготовка к IELTS и индивидуальные уроки английского онлайн. Первый урок Speaking бесплатный.",
    ],
    "/courses": [
        "Курсы английского онлайн: Speaking club, IELTS, индивидуальные | Speakyz",
        "Speaking club, подготовка к IELTS и индивидуальные уроки онлайн. Начните с бесплатного урока.",
    ],
    "/ielts": [
        "Подготовка к IELTS онлайн | Speakyz",
        "Все четыре части IELTS: Speaking, Writing, Listening и Reading. Пробные тесты и разбор. Первый урок бесплатный.",
    ],
    "/teachers": [
        "Преподаватели английского | Speakyz",
        "Познакомьтесь с преподавателями Speakyz и запишитесь на урок к тому, кто подходит вашей цели.",
    ],
    "/schedule": [
        "Запись на бесплатный урок | Speakyz",
        "Выберите курс, формат, преподавателя и удобное время. Точную группу и время подтверждаем в Telegram.",
    ],
    "/shop": [
        "Книги и курсы IELTS: Speaking 8.0, Writing 8.0, Reading 8.0 | Speakyz",
        "PDF-книги для подготовки к IELTS и курсы Speakyz. Первый урок Speaking бесплатный.",
    ],
    "/test": [
        "Тест уровня английского онлайн | Speakyz",
        "Три теста по уровням, 15 вопросов в каждом, результат сразу. Примерный уровень и рекомендация по курсу.",
    ],
    "/arena": [
        "Голосовой экзаменатор IELTS Speaking онлайн | Speakyz",
        "Полный Speaking-тест голосом: экзаменатор задаёт вопросы вслух, вы отвечаете в микрофон, в конце разбор речи.",
    ],
    "/university": [
        "Требования вузов к IELTS | Speakyz",
        "Минимальные баллы IELTS университетов с источником и датой проверки.",
    ],
    "/contact": [
        "Контакты Speakyz",
        "Telegram, Instagram и ответы на частые вопросы. Все занятия проходят онлайн.",
    ],
}

ORIGIN_IN_SOURCE = "https://speakyz.uz"


def esc(x):
    return x.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;").replace(">", "&gt;")


def page_url(base, path):
    return base + "/" if path == "/" else base + path + "/"


def seo_page(html, base, path, ld_json):
    title, desc = PAGES[path]
    url = page_url(base, path)
    head = "\n".join(x for x in [
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
        f'<script type="application/ld+json">{ld_json}</script>' if ld_json else "",
    ] if x)
    # убираем старые мета-теги соцсетей, canonical и JSON-LD, чтобы не было дублей
    html = re.sub(r'<meta\s+(?:property="og:|name="twitter:)[^>]*>\s*', "", html)
    html = re.sub(r'<link\s+rel="canonical"[^>]*>\s*', "", html)
    html = re.sub(r'<script type="application/ld\+json">[\s\S]*?</script>\s*', "", html)
    out = re.sub(r"<title>[\s\S]*?</title>", lambda m: f"<title>{esc(title)}</title>", html, count=1)
    out = re.sub(r'<meta name="description" content="[^"]*">', lambda m: f'<meta name="description" content="{esc(desc)}">', out, count=1)
    return out.replace("</head>", head + "\n</head>", 1)


def copy_required(name):
    f = SRC / name
    if not f.is_file():
        sys.exit(f"Нет файла {f}. Создайте его (для config.js см. шаблон src/config.js).")
    shutil.copy(f, DIST / name)


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
    html = html.replace('src="voice.js', f'src="{base_path}/voice.js')
    html = html.replace('href="manifest.webmanifest"', f'href="{base_path}/manifest.webmanifest"')

    # исходный JSON-LD (организация, сайт, товары) сохраняем, только подменяем адрес сайта
    m = re.search(r'<script type="application/ld\+json">([\s\S]*?)</script>', html)
    ld_json = ""
    if m:
        try:
            ld_json = json.dumps(json.loads(m.group(1).replace(ORIGIN_IN_SOURCE, site)),
                                 ensure_ascii=False, separators=(",", ":")).replace("<", "\\u003c")
        except ValueError:
            print("Предупреждение: JSON-LD в index.html не разобрался, пропускаю", file=sys.stderr)

    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()

    for path in PAGES:
        page = seo_page(html, site, path, ld_json)
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
    (DIST / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: {site}/sitemap.xml\n", encoding="utf-8")
    (DIST / ".nojekyll").write_text("", encoding="utf-8")

    for name in ("config.js", "voice.js", "topics.js", "practice.js", "examiner.js"):
        copy_required(name)
    for name in ("og.png", "manifest.webmanifest", "icon-192.png", "icon-512.png", "CNAME"):
        if (SRC / name).is_file():
            shutil.copy(SRC / name, DIST / name)
        elif name != "CNAME":
            print(f"Предупреждение: нет {name}, пропускаю", file=sys.stderr)

    admin_dir = SRC / "admin"
    if admin_dir.is_dir():
        shutil.copytree(admin_dir, DIST / "admin", dirs_exist_ok=True)
    elif (SRC / "admin.html").is_file():
        (DIST / "admin").mkdir(exist_ok=True)
        shutil.copy(SRC / "admin.html", DIST / "admin" / "index.html")

    print(f"Готово: {len(PAGES)} страниц, адрес сайта {site}")


if __name__ == "__main__":
    main()

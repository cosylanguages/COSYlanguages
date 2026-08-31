#!/usr/bin/env python3
"""
Generator script for COSYlanguages Russian Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/ru/vocabulary/a2/index.html, module-N.html chapter hubs, assets, and topic HTML pages in manuals/ru/vocabulary/a2/topics/.
100% Monolingual Russian.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/ru/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Лексика русского языка Уровень A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --red-900: #7f1d1d;
  --red-800: #991b1b;
  --red-700: #b91c1c;
  --red-100: #fee2e2;

  --ink: #18181b;
  --ink-soft: #3f3f46;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e4e4e7;

  --radius-m: 14px;
  --shadow-card: 0 2px 8px rgba(153,27,27,.06);
}

* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}

.topbar {
  background: var(--red-900);
  color: #fff;
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.topbar-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topbar a {
  color: #fee2e2;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 24px;
}

.page-head { margin-bottom: 30px; }
.eyebrow { font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--red-700); letter-spacing: 0.05em; }
h1 { font-family: 'Poppins', sans-serif; font-size: 32px; margin: 8px 0; color: var(--red-900); }
p.subtitle { font-size: 18px; color: var(--ink-soft); margin: 0; }

.vocab-table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  background: var(--panel);
  border-radius: var(--radius-m);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}
.vocab-table th, .vocab-table td {
  padding: 14px 18px;
  border: 1px solid var(--line);
  text-align: left;
}
.vocab-table th { background: var(--red-100); color: var(--red-900); font-weight: 700; }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; }
.part-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 24px;
  text-decoration: none;
  color: var(--ink);
  transition: transform 0.2s;
}
.part-card:hover { transform: translateY(-4px); }
.part-card h2 { color: var(--red-900); margin: 0 0 10px; font-size: 20px; }

.topic-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 24px; }
.topic-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 20px;
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.2s;
}
.topic-card:hover { border-color: var(--red-700); }
.topic-card .ttl { font-weight: 700; font-size: 18px; color: var(--red-900); }
.topic-card .sub { font-size: 14px; color: var(--ink-soft); }
"""

MODULES = [
    {
        "id": "module-1",
        "file": "module-1.html",
        "title": "Модуль 1 · Работа, учёба и профессии",
        "subtitle": "Офис, профессии, резюме и рабочие задачи",
        "stripe": "#dc2626",
        "topics": ["rabota-i-professii", "ucheba-i-obrazovanie"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Модуль 2 · Путешествия и транспорт",
        "subtitle": "Вокзал, аэропорт, гостиница и городские маршруты",
        "stripe": "#2563eb",
        "topics": ["puteshestviya-i-transport", "v-ottele-i-na-otdyhe"]
    }
]

TOPICS = {
    "rabota-i-professii": {
        "title": "Работа и профессии",
        "subtitle": "Лексика для описания профессиональной деятельности",
        "words": [
            {"word": "профессия", "type": "сущ. ж.", "example": "У неё интересная профессия."},
            {"word": "собеседование", "type": "сущ. ср.", "example": "Завтра у меня важное собеседование."},
            {"word": "руководитель", "type": "сущ. м.", "example": "Наш руководитель проведёт собрание."},
            {"word": "зарплата", "type": "сущ. ж.", "example": "Достойная зарплата и хорошая команда."}
        ]
    },
    "ucheba-i-obrazovanie": {
        "title": "Учёба и образование",
        "subtitle": "Университет, экзамены, курсы и получение знаний",
        "words": [
            {"word": "экзамен", "type": "сущ. м.", "example": "Студенты сдают экзамен по истории."},
            {"word": "диплом", "type": "сущ. м.", "example": "Он получил диплом бакалавра."},
            {"word": "преподаватель", "type": "сущ. м.", "example": "Преподаватель объясняет новую тему."}
        ]
    },
    "puteshestviya-i-transport": {
        "title": "Путешествия и транспорт",
        "subtitle": "Билеты, транспортные средства и ориентирование в дороге",
        "words": [
            {"word": "пассажир", "type": "сущ. м.", "example": "Пассажиры ждут посадки на рейс."},
            {"word": "расписание", "type": "сущ. ср.", "example": "Посмотрите расписание поездов."},
            {"word": "пересадка", "type": "сущ. ж.", "example": "Мы делаем пересадку в Москве."}
        ]
    },
    "v-ottele-i-na-otdyhe": {
        "title": "В отеле и на отдыхе",
        "subtitle": "Бронирование, гостиничные услуги и отдых",
        "words": [
            {"word": "бронирование", "type": "сущ. ср.", "example": "Я подтвердил бронирование номера."},
            {"word": "администратор", "type": "сущ. м.", "example": "Администратор выдал ключи от номера."},
            {"word": "экскурсия", "type": "сущ. ж.", "example": "Завтра у нас обзорная экскурсия."}
        ]
    }
}

def render_topbar(is_topic=False):
    up = "../" if is_topic else ""
    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a href="{up}index.html">← Лексика русского языка (A2)</a>
    <a href="{up}../../russkiy-a2.html">Hub Русский A2</a>
  </div>
</header>'''

def render_footer():
    return '''<footer style="background: var(--red-900); color: #fee2e2; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · Лексика русского языка Уровень A2</div>
</footer>'''

def build_all():
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)

    for slug, top in TOPICS.items():
        rows = "".join([f'<tr><td><strong>{w["word"]}</strong></td><td>{w["type"]}</td><td>{w["example"]}</td></tr>' for w in top["words"]])
        page_html = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Лексика русского языка A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Лексическая тема</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <table class="vocab-table">
    <thead><tr><th>Слово / Выражение</th><th>Часть речи</th><th>Пример использования</th></tr></thead>
    <tbody>{rows}</tbody>
  </table>
</main>
{render_footer()}
</body>
</html>'''
        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(page_html)

    for m in MODULES:
        cards = []
        for slug in m["topics"]:
            top = TOPICS[slug]
            cards.append(f'''<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>''')

        mod_html = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · Лексика A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Модуль</span>
    <h1>{m["title"]}</h1>
    <p class="subtitle">{m["subtitle"]}</p>
  </div>
  <div class="topic-grid">{"".join(cards)}</div>
</main>
{render_footer()}
</body>
</html>'''
        with open(os.path.join(BASE_DIR, m["file"]), "w", encoding="utf-8") as f:
            f.write(mod_html)

    index_cards = []
    for m in MODULES:
        index_cards.append(f'''<a class="part-card" href="{m["file"]}"><div style="height:4px;background:{m["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--red-700);">{len(m["topics"])} тем →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Лексика русского языка Уровень A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Уровень A2</span>
    <h1>Лексика русского языка (A2)</h1>
    <p class="subtitle">Интерактивный лексический справочник русского языка уровня A2.</p>
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Russian A2 Vocab Manual generated successfully!")

if __name__ == "__main__":
    build_all()

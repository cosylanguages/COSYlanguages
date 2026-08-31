#!/usr/bin/env python3
"""
Generator script for COSYlanguages German Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/de/vocabulary/a2/index.html, module-N.html chapter hubs, assets, and topic HTML pages in manuals/de/vocabulary/a2/topics/.
100% Monolingual German.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/de/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Deutscher Wortschatz Niveau A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --yellow-900: #713f12;
  --yellow-800: #854d0e;
  --yellow-700: #a16207;
  --yellow-100: #fef9c3;

  --ink: #1c1917;
  --ink-soft: #44403c;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e7e5e4;

  --radius-m: 14px;
  --shadow-card: 0 2px 8px rgba(161,98,7,.06);
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
  background: var(--yellow-900);
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
  color: #fef9c3;
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
.eyebrow { font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--yellow-700); letter-spacing: 0.05em; }
h1 { font-family: 'Poppins', sans-serif; font-size: 32px; margin: 8px 0; color: var(--yellow-900); }
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
.vocab-table th { background: var(--yellow-100); color: var(--yellow-900); font-weight: 700; }

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
.part-card h2 { color: var(--yellow-900); margin: 0 0 10px; font-size: 20px; }

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
.topic-card:hover { border-color: var(--yellow-700); }
.topic-card .ttl { font-weight: 700; font-size: 18px; color: var(--yellow-900); }
.topic-card .sub { font-size: 14px; color: var(--ink-soft); }
"""

MODULES = [
    {
        "id": "module-1",
        "file": "module-1.html",
        "title": "Modul 1 · Arbeit, Beruf und Ausbildung",
        "subtitle": "Arbeitsplatz, Bewerbung, Büroalltag und Studium",
        "stripe": "#a16207",
        "topics": ["arbeit-und-beruf", "ausbildung-und-studium"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Modul 2 · Reisen, Verkehr und Gesundheit",
        "subtitle": "Unterwegs, Hotel, Einkauf und beim Arzt",
        "stripe": "#16a34a",
        "topics": ["reisen-und-verkehr", "gesundheit-und-arzt"]
    }
]

TOPICS = {
    "arbeit-und-beruf": {
        "title": "Arbeit und Beruf",
        "subtitle": "Wortschatz rund um Berufsleben und Aufgaben im Büro",
        "words": [
            {"word": "das Vorstellungsgespräch", "type": "Nomen, n.", "example": "Ich habe morgen ein wichtiges Vorstellungsgespräch."},
            {"word": "der Kollege / die Kollegin", "type": "Nomen, m./f.", "example": "Meine Kollegen sind sehr freundlich."},
            {"word": "das Gehalt", "type": "Nomen, n.", "example": "Das Gehalt wird Ende des Monats überwiesen."},
            {"word": "die Abteilung", "type": "Nomen, f.", "example": "Er arbeitet in der Marketing-Abteilung."}
        ]
    },
    "ausbildung-und-studium": {
        "title": "Ausbildung und Studium",
        "subtitle": "Schule, Universität, Kurse und Abschlüsse",
        "words": [
            {"word": "die Prüfung", "type": "Nomen, f.", "example": "Sie hat die A2-Prüfung erfolgreich bestanden."},
            {"word": "das Zertifikat", "type": "Nomen, n.", "example": "Nach dem Kurs erhält man ein Zertifikat."},
            {"word": "der Dozent", "type": "Nomen, m.", "example": "Der Dozent erklärt die Grammatik sehr anschaulich."}
        ]
    },
    "reisen-und-verkehr": {
        "title": "Reisen und Verkehr",
        "subtitle": "Fahrkarten, Bahnhof, Flughafen und Unterkunft",
        "words": [
            {"word": "die Fahrkarte", "type": "Nomen, f.", "example": "Haben Sie bereits eine Fahrkarte gekauft?"},
            {"word": "der Anschluss", "type": "Nomen, m.", "example": "In Frankfurt haben wir kurz Anschluss nach Berlin."},
            {"word": "die Reservierung", "type": "Nomen, f.", "example": "Ich habe eine Reservierung im Hotel."}
        ]
    },
    "gesundheit-und-arzt": {
        "title": "Gesundheit und Arzt",
        "subtitle": "Symptome, Apotheke, Behandlungen und Termine",
        "words": [
            {"word": "die Kopfschmerzen", "type": "Nomen, Pl.", "example": "Ich habe seit heute Morgen starke Kopfschmerzen."},
            {"word": "das Rezept", "type": "Nomen, n.", "example": "Der Arzt gibt mir ein Rezept für Medikamente."},
            {"word": "die Untersuchung", "type": "Nomen, f.", "example": "Die Untersuchung dauert etwa 20 Minuten."}
        ]
    }
}

def render_topbar(is_topic=False):
    up = "../" if is_topic else ""
    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a href="{up}index.html">← Deutscher Wortschatz (A2)</a>
    <a href="{up}../../deutsch-a2.html">Hub Deutsch A2</a>
  </div>
</header>'''

def render_footer():
    return '''<footer style="background: var(--yellow-900); color: #fef9c3; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · Deutscher Wortschatz Niveau A2</div>
</footer>'''

def build_all():
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)

    for slug, top in TOPICS.items():
        rows = "".join([f'<tr><td><strong>{w["word"]}</strong></td><td>{w["type"]}</td><td>{w["example"]}</td></tr>' for w in top["words"]])
        page_html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Deutscher Wortschatz A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Wortschatzthema</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <table class="vocab-table">
    <thead><tr><th>Wort / Ausdruck</th><th>Wortart</th><th>Beispielsatz</th></tr></thead>
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
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · Wortschatz A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Modul</span>
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
        index_cards.append(f'''<a class="part-card" href="{m["file"]}"><div style="height:4px;background:{m["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--yellow-700);">{len(m["topics"])} Themen →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Deutscher Wortschatz Niveau A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Niveau A2</span>
    <h1>Deutscher Wortschatz (A2)</h1>
    <p class="subtitle">Interaktives Wortschatz-Handbuch der deutschen Sprache auf Niveau A2.</p>
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("German A2 Vocab Manual generated successfully!")

if __name__ == "__main__":
    build_all()

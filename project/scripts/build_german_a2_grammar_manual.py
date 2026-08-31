#!/usr/bin/env python3
"""
Generator script for COSYlanguages German Grammar Manual (Level A2) Interactive Web Edition.
Generates manuals/de/grammar/a2/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/de/grammar/a2/topics/.
100% Monolingual German.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/de/grammar/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Deutsche Grammatik Niveau A2 */
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

.grammar-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: var(--panel);
  border-radius: var(--radius-m);
  overflow: hidden;
}
.grammar-table th, .grammar-table td {
  padding: 12px 16px;
  border: 1px solid var(--line);
  text-align: left;
}
.grammar-table th { background: var(--yellow-100); color: var(--yellow-900); font-weight: 700; }

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

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Teil 1 · Vergangenheit und Verben",
        "subtitle": "Perfekt mit haben/sein, Präteritum der Modalverben und Nebensätze",
        "stripe": "#a16207",
        "topics": ["perfekt-mit-haben-und-sein", "praeteritum-modalverben", "nebensaetze-weil-dass-wenn"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Teil 2 · Präpositionen und Vergleiche",
        "subtitle": "Wechselpräpositionen (Dativ/Akkusativ) und Komparativ/Superlativ",
        "stripe": "#16a34a",
        "topics": ["wechselpraepositionen", "komparativ-und-superlativ"]
    }
]

TOPICS = {
    "perfekt-mit-haben-und-sein": {
        "title": "Perfekt mit haben und sein",
        "subtitle": "Bildung der Vergangenheit im gesprochenen Deutsch",
        "cando": "Vergangene Ereignisse und Erlebnisse im Gespräch schildern.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Hilfsverb</th><th>Verwendung</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td><strong>haben</strong></td><td>Aktivität ohne Ortswechsel</td><td>Ich <strong>habe</strong> ein Buch <strong>gelesen</strong>.</td></tr>
            <tr><td><strong>sein</strong></td><td>Ortswechsel / Zustandswechsel</td><td>Er <strong>ist</strong> nach Berlin <strong>gefahren</strong>.</td></tr>
          </tbody>
        </table>"""
    },
    "praeteritum-modalverben": {
        "title": "Präteritum der Modalverben",
        "subtitle": "musste, konnte, wollte, durfte, sollte",
        "cando": "Verpflichtungen, Fähigkeiten und Erlaubnisse in der Vergangenheit ausdrücken.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Modalverb</th><th>Präteritum (1./3. Person)</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td>können</td><td><strong>konnte</strong></td><td>Gestern <strong>konnte</strong> ich nicht kommen.</td></tr>
            <tr><td>müssen</td><td><strong>musste</strong></td><td>Ich <strong>musste</strong> viel arbeiten.</td></tr>
            <tr><td>wollen</td><td><strong>wollte</strong></td><td>Er <strong>wollte</strong> nach Hause gehen.</td></tr>
          </tbody>
        </table>"""
    },
    "nebensaetze-weil-dass-wenn": {
        "title": "Nebensätze mit weil, dass und wenn",
        "subtitle": "Verbstellung am Ende des Nebensatzes (Konzessiv & Kausal)",
        "cando": "Gründe, Bedingungen und Aussagen in komplexen Sätzen verbinden.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Konjunktion</th><th>Bedeutung</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td><strong>weil</strong></td><td>Grund</td><td>Ich bleibe zu Hause, <strong>weil</strong> ich krank <strong>bin</strong>.</td></tr>
            <tr><td><strong>dass</strong></td><td>Aussage / Faktum</td><td>Ich weiß, <strong>dass</strong> du Recht <strong>hast</strong>.</td></tr>
            <tr><td><strong>wenn</strong></td><td>Bedingung / Zeit</td><td><strong>Wenn</strong> es regnet, bleibe ich daheim.</td></tr>
          </tbody>
        </table>"""
    },
    "wechselpraepositionen": {
        "title": "Wechselpräpositionen mit Dativ und Akkusativ",
        "subtitle": "an, auf, hinter, in, neben, über, unter, vor, zwischen",
        "cando": "Orte (Wo? + Dativ) und Richtungen (Wohin? + Akkusativ) präzise beschreiben.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Frage</th><th>Kasus</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td><strong>Wo?</strong> (Position)</td><td>Dativ</td><td>Das Buch liegt <strong>auf dem Tisch</strong>.</td></tr>
            <tr><td><strong>Wohin?</strong> (Richtung)</td><td>Akkusativ</td><td>Ich lege das Buch <strong>auf den Tisch</strong>.</td></tr>
          </tbody>
        </table>"""
    },
    "komparativ-und-superlativ": {
        "title": "Komparativ und Superlativ",
        "subtitle": "Eigenschaftswörter vergleichen: -er als / am -sten",
        "cando": "Personen, Dinge und Handlungen miteinander vergleichen.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Stufe</th><th>Bildung</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td><strong>Positiv</strong></td><td>Grundform</td><td>schnell</td></tr>
            <tr><td><strong>Komparativ</strong></td><td>+ -er als</td><td>Anna ist <strong>schneller als</strong> Tom.</td></tr>
            <tr><td><strong>Superlativ</strong></td><td>am + -sten</td><td>Er läuft <strong>am schnellsten</strong>.</td></tr>
          </tbody>
        </table>"""
    }
}

def render_topbar(is_topic=False):
    up = "../" if is_topic else ""
    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a href="{up}index.html">← Deutsche Grammatik (A2)</a>
    <a href="{up}../../deutsch-a2.html">Hub Deutsch A2</a>
  </div>
</header>'''

def render_footer():
    return '''<footer style="background: var(--yellow-900); color: #fef9c3; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · Deutsche Grammatik Niveau A2</div>
</footer>'''

def build_all():
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)

    for slug, top in TOPICS.items():
        page_html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Deutsche Grammatik A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Grammatikthema</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <p><strong>Lernziel:</strong> {top["cando"]}</p>
  {top["table"]}
</main>
{render_footer()}
</body>
</html>'''
        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(page_html)

    for p in PARTS:
        cards = []
        for slug in p["topics"]:
            top = TOPICS[slug]
            cards.append(f'''<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>''')

        part_html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · Deutsch A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Teil</span>
    <h1>{p["title"]}</h1>
    <p class="subtitle">{p["subtitle"]}</p>
  </div>
  <div class="topic-grid">{"".join(cards)}</div>
</main>
{render_footer()}
</body>
</html>'''
        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_html)

    index_cards = []
    for p in PARTS:
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--yellow-700);">{len(p["topics"])} Themen →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Deutsche Grammatik Niveau A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Niveau A2</span>
    <h1>Deutsche Grammatik (A2)</h1>
    <p class="subtitle">Interaktives einsprachiges Handbuch zur deutschen Grammatik auf Niveau A2.</p>
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("German A2 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

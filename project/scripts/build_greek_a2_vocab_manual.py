#!/usr/bin/env python3
"""
Generator script for COSYlanguages Greek Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/el/vocabulary/a2/index.html, module-N.html chapter hubs, assets, and topic HTML pages in manuals/el/vocabulary/a2/topics/.
100% Monolingual Greek.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/el/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Ελληνικό Λεξιλόγιο Επίπεδο A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --blue-900: #0c4a6e;
  --blue-800: #075985;
  --blue-700: #0369a1;
  --blue-100: #e0f2fe;

  --ink: #0f172a;
  --ink-soft: #334155;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e2e8f0;

  --radius-m: 14px;
  --shadow-card: 0 2px 8px rgba(3,105,161,.06);
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
  background: var(--blue-900);
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
  color: #e0f2fe;
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
.eyebrow { font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--blue-700); letter-spacing: 0.05em; }
h1 { font-family: 'Poppins', sans-serif; font-size: 32px; margin: 8px 0; color: var(--blue-900); }
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
.vocab-table th { background: var(--blue-100); color: var(--blue-900); font-weight: 700; }

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
.part-card h2 { color: var(--blue-900); margin: 0 0 10px; font-size: 20px; }

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
.topic-card:hover { border-color: var(--blue-700); }
.topic-card .ttl { font-weight: 700; font-size: 18px; color: var(--blue-900); }
.topic-card .sub { font-size: 14px; color: var(--ink-soft); }
"""

MODULES = [
    {
        "id": "module-1",
        "file": "module-1.html",
        "title": "Ενότητα 1 · Εργασία, Σπουδές και Επαγγέλματα",
        "subtitle": "Επαγγελματικός χώρος, καθημερινότητα στο γραφείο και εκπαίδευση",
        "stripe": "#0369a1",
        "topics": ["ergasia-kai-epaggelmata", "spoudes-kai-ekpaidefsi"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Ενότητα 2 · Ταξίδια, Διακοπές και Υγεία",
        "subtitle": "Μεταφορικά μέσα, ξενοδοχεία, αγορές και επίσκεψη στον γιατρό",
        "stripe": "#16a34a",
        "topics": ["taxidia-kai-metafores", "ygeia-kai-farmakeio"]
    }
]

TOPICS = {
    "ergasia-kai-epaggelmata": {
        "title": "Εργασία και Επαγγέλματα",
        "subtitle": "Λεξιλόγιο για την επαγγελματική ζωή και το περιβάλλον εργασίας",
        "words": [
            {"word": "η συνέντευξη", "type": "ουσ. θηλ.", "example": "Έχω συνέντευξη για δουλειά στις 10:00."},
            {"word": "ο μισθός", "type": "ουσ. αρσ.", "example": "Ο μισθός καταβάλλεται στο τέλος του μήνα."},
            {"word": "το γραφείο", "type": "ουσ. ουδ.", "example": "Το γραφείο μας βρίσκεται στο κέντρο της Αθήνας."},
            {"word": "ο συνάδελφος", "type": "ουσ. αρσ.", "example": "Συνεργάζομαι πολύ καλά με τους συναδέλφους μου."}
        ]
    },
    "spoudes-kai-ekpaidefsi": {
        "title": "Σπουδές και Εκπαίδευση",
        "subtitle": "Πανεπιστήμιο, μαθήματα, εξετάσεις και πτυχία",
        "words": [
            {"word": "οι εξετάσεις", "type": "ουσ. θηλ. πληθ.", "example": "Οι εξετάσεις αρχίζουν τον Ιούνιο."},
            {"word": "το πτυχίο", "type": "ουσ. ουδ.", "example": "Πήρε το πτυχίο του με άριστα."},
            {"word": "ο καθηγητής", "type": "ουσ. αρσ.", "example": "Ο καθηγητής εξήγησε το νέο μάθημα."}
        ]
    },
    "taxidia-kai-metafores": {
        "title": "Ταξίδια και Μεταφορές",
        "subtitle": "Εισιτήρια, δρομολόγια, αεροδρόμια και ξενοδοχεία",
        "words": [
            {"word": "το εισιτήριο", "type": "ουσ. ουδ.", "example": "Έκλεισα εισιτήριο για το πλοίο."},
            {"word": "η κράτηση", "type": "ουσ. θηλ.", "example": "Έχουμε κράτηση για δύο άτομα στο ξενοδοχείο."},
            {"word": "το δρομολόγιο", "type": "ουσ. ουδ.", "example": "Ποιο είναι το δρομολόγιο του λεωφορείου;"}
        ]
    },
    "ygeia-kai-farmakeio": {
        "title": "Υγεία και Φαρμακείο",
        "subtitle": "Συμπτώματα, επισκέψεις στον γιατρό και φάρμακα",
        "words": [
            {"word": "ο πονοκέφαλος", "type": "ουσ. αρσ.", "example": "Έχω έντονο πονοκέφαλο από το πρωί."},
            {"word": "το φάρμακο", "type": "ουσ. ουδ.", "example": "Πρέπει να πάρετε αυτό το φάρμακο δύο φορές την ημέρα."},
            {"word": "η συνταγή", "type": "ουσ. θηλ.", "example": "Ο γιατρός μου έγραψε ιατρική συνταγή."}
        ]
    }
}

def render_topbar(is_topic=False):
    up = "../" if is_topic else ""
    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a href="{up}index.html">← Ελληνικό Λεξιλόγιο (A2)</a>
    <a href="{up}../../ellinika-a2.html">Hub Ελληνικά A2</a>
  </div>
</header>'''

def render_footer():
    return '''<footer style="background: var(--blue-900); color: #e0f2fe; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · Ελληνικό Λεξιλόγιο Επίπεδο A2</div>
</footer>'''

def build_all():
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)

    for slug, top in TOPICS.items():
        rows = "".join([f'<tr><td><strong>{w["word"]}</strong></td><td>{w["type"]}</td><td>{w["example"]}</td></tr>' for w in top["words"]])
        page_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Ελληνικό Λεξιλόγιο A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Θεματική Ενότητα</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <table class="vocab-table">
    <thead><tr><th>Λέξη / Έκφραση</th><th>Μέρος του λόγου</th><th>Παράδειγμα</th></tr></thead>
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
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · Λεξιλόγιο A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Ενότητα</span>
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
        index_cards.append(f'''<a class="part-card" href="{m["file"]}"><div style="height:4px;background:{m["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(m["topics"])} θέματα →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ελληνικό Λεξιλόγιο Επίπεδο A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Επίπεδο A2</span>
    <h1>Ελληνικό Λεξιλόγιο (A2)</h1>
    <p class="subtitle">Διαδραστικό λεξιλογικό εγχειρίδιο ελληνικής γλώσσας επιπέδου A2.</p>
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Greek A2 Vocab Manual generated successfully!")

if __name__ == "__main__":
    build_all()

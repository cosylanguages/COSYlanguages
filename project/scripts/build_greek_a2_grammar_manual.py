#!/usr/bin/env python3
"""
Generator script for COSYlanguages Greek Grammar Manual (Level A2) Interactive Web Edition.
Generates manuals/el/grammar/a2/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/el/grammar/a2/topics/.
100% Monolingual Greek.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/el/grammar/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Γραμματική της Ελληνικής Γλώσσας Επίπεδο A2 */
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
.grammar-table th { background: var(--blue-100); color: var(--blue-900); font-weight: 700; }

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

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Μέρος 1 · Χρόνοι και Όψεις του Ρήματος",
        "subtitle": "Αόριστος, Παρατατικός, Εξακολουθητικός και Στιγμιαίος Μέλλοντας",
        "stripe": "#0369a1",
        "topics": ["aoristos-paratatikos", "mellochrons-exakolouthitikos-stigmiaiou"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Μέρος 2 · Υποτακτική, Αντωνυμίες και Σύγκριση",
        "subtitle": "Σύνδεσμοι να/για να, αδύνατοι τύποι αντωνυμιών και συγκριτικός βαθμός",
        "stripe": "#16a34a",
        "topics": ["ypotaktiki-egklisi", "adynatoi-typoi-antonymion", "syxronoi-sygkritikoi-vathmoi"]
    }
]

TOPICS = {
    "aoristos-paratatikos": {
        "title": "Αόριστος vs Παρατατικός",
        "subtitle": "Στιγμιαία δράση στο παρελθόν έναντι διάρκειας ή επανάληψης",
        "cando": "Να περιγράφετε ολοκληρωμένα γεγονότα και συνήθειες του παρελθόντος.",
        "one_liner": "Ο Αόριστος εκφράζει μια πράξη που έγινε μια φορά στο παρελθόν, ενώ ο Παρατατικός εκφράζει διάρκεια ή επανάληψη.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Χρόνος</th><th>Χρήση</th><th>Παράδειγμα</th></tr></thead>
          <tbody>
            <tr><td><strong>Αόριστος</strong></td><td>Μια φορά / Στιγμιαία</td><td>Χθες <strong>αγόρασα</strong> ένα βιβλίο.</td></tr>
            <tr><td><strong>Παρατατικός</strong></td><td>Διάρκεια / Συνήθεια</td><td>Κάθε μέρα <strong>διάβαζα</strong> μια ώρα.</td></tr>
          </tbody>
        </table>"""
    },
    "mellochrons-exakolouthitikos-stigmiaiou": {
        "title": "Εξακολουθητικός και Στιγμιαίος Μέλλοντας",
        "subtitle": "Θα διαβάζω (διάρκεια) vs Θα διαβάσω (μια φορά)",
        "cando": "Να διακρίνετε μελλοντικές ενέργειες με διάρκεια από στιγμιαίες μελλοντικές πράξεις.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Μέλλοντας</th><th>Σχηματισμός</th><th>Παράδειγμα</th></tr></thead>
          <tbody>
            <tr><td><strong>Εξακολουθητικός</strong></td><td>θα + Ενεστώτας</td><td>Aύριο <strong>θα γράφω</strong> όλη μέρα.</td></tr>
            <tr><td><strong>Στιγμιαίος</strong></td><td>θα + Θέμα Αορίστου</td><td>Aύριο <strong>θα γράψω</strong> μια επιστολή.</td></tr>
          </tbody>
        </table>"""
    },
    "ypotaktiki-egklisi": {
        "title": "Υποτακτική Έγκλιση (να / για να)",
        "subtitle": "Έκφραση επιθυμίας, σκοπού, υποχρέωσης και πρότασης",
        "cando": "Να εκφράζετε επιθυμίες, σκοπούς και ευγενικές προτάσεις.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Σύνδεσμος</th><th>Χρήση</th><th>Παράδειγμα</th></tr></thead>
          <tbody>
            <tr><td><strong>να</strong></td><td>Επιθυμία / Πρόταση</td><td>Θέλω <strong>να μάθω</strong> ελληνικά.</td></tr>
            <tr><td><strong>για να</strong></td><td>Σκοπός</td><td>Ήρθα <strong>για να δω</strong> τον φίλο μου.</td></tr>
          </tbody>
        </table>"""
    },
    "adynatoi-typoi-antonymion": {
        "title": "Αδύνατοι Τύποι Προσωπικών Αντωνυμιών",
        "subtitle": "Άμεσο και έμμεσο αντικείμενο (τον, την, το / του, της)",
        "cando": "Να αντικαθιστάτε ουσιαστικά με αντωνυμίες αποφεύγοντας την επανάληψη.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Πτώση</th><th>Τύποι</th><th>Παράδειγμα</th></tr></thead>
          <tbody>
            <tr><td><strong>Αιτιατική</strong></td><td>τον, την, το / τους, τις/τες, τα</td><td><strong>Τον</strong> είδα χθες στο πάρκο.</td></tr>
            <tr><td><strong>Γενική</strong></td><td>του, της, του / τους</td><td><strong>Του</strong> έδωσα το βιβλίο.</td></tr>
          </tbody>
        </table>"""
    },
    "syxronoi-sygkritikoi-vathmoi": {
        "title": "Συγκριτικός και Υπερθετικός Βαθμός",
        "subtitle": "Πιο... από / -ότερος και ο πιο... / -ότατος",
        "cando": "Να συγκρίνετε πρόσωπα, πράγματα και καταστάσεις.",
        "table": """<table class="grammar-table">
          <thead><tr><th>Βαθμός</th><th>Σχηματισμός</th><th>Παράδειγμα</th></tr></thead>
          <tbody>
            <tr><td><strong>Συγκριτικός</strong></td><td>πιο + επίθετο + από</td><td>Ο Μαρκος είναι <strong>πιο ψηλός από</strong> τον Νίκο.</td></tr>
            <tr><td><strong>Υπερθετικός</strong></td><td>ο πιο + επίθετο</td><td>Είναι <strong>ο πιο γρήγορος</strong> αθλητής.</td></tr>
          </tbody>
        </table>"""
    }
}

def render_topbar(is_topic=False):
    up = "../" if is_topic else ""
    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a href="{up}index.html">← Γραμματική της Ελληνικής Γλώσσας (A2)</a>
    <a href="{up}../../ellinika-a2.html">Hub Ελληνικά A2</a>
  </div>
</header>'''

def render_footer():
    return '''<footer style="background: var(--blue-900); color: #e0f2fe; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · Γραμματική Ελληνικής Γλώσσας Επίπεδο A2</div>
</footer>'''

def build_all():
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)

    for slug, top in TOPICS.items():
        page_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Ελληνική Γραμματική A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Θέμα Γραμματικής</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <p><strong>Στόχος:</strong> {top["cando"]}</p>
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
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · Ελληνικά A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Μέρος</span>
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(p["topics"])} θέματα →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Γραμματική της Ελληνικής Γλώσσας Επίπεδο A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Επίπεδο A2</span>
    <h1>Γραμματική της Ελληνικής Γλώσσας (A2)</h1>
    <p class="subtitle">Διαδραστικό μονογλωσσικό εγχειρίδιο ελληνικής γραμματικής επιπέδου A2.</p>
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Greek A2 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

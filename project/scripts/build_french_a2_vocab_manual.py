#!/usr/bin/env python3
"""
Generator script for COSYlanguages French Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/fr/vocabulary/a2/index.html, module-N.html hubs, assets, and topic HTML pages in manuals/fr/vocabulary/a2/topics/.
100% Monolingual French.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/fr/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Lexique Français Niveau A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --teal-900: #0f382c;
  --teal-800: #1c6b54;
  --teal-600: #25a894;
  --teal-100: #e4f5f0;
  --ink: #13231e;
  --ink-soft: #3c544c;
  --paper: #fcfbf7;
  --panel: #ffffff;
  --line: #e3e0d5;
  --mint-bg: #e3f5ef;
  --mint-ink: #0f382c;
  --radius-s: 8px;
  --radius-m: 14px;
  --radius-l: 20px;
  --shadow-card: 0 2px 8px rgba(15,56,44,.06);
}

* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: 'Inter', system-ui, sans-serif; line-height: 1.6; }
a { color: var(--teal-800); text-decoration: none; font-weight: 600; }
.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

.topbar { position: sticky; top: 0; z-index: 50; background: var(--teal-900); color: #fff; }
.topbar-inner { max-width: 1100px; margin: 0 auto; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; }
.brand { color: #fff; font-weight: 800; font-family: 'Nunito', sans-serif; display: flex; align-items: center; gap: 8px; }
.brand-mark { background: #fff; color: var(--teal-900); width: 30px; height: 30px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #e4f5f0; font-size: 13px; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.2); }

.page-head { padding: 32px 0 16px; }
.eyebrow { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--teal-800); background: var(--teal-100); padding: 4px 12px; border-radius: 99px; margin-bottom: 12px; }
.page-head h1 { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

.vocab-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 24px 0; }
.vcard { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 18px; box-shadow: var(--shadow-card); }
.vcard .word { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 18px; color: var(--teal-900); margin-bottom: 4px; }
.vcard .genre { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--teal-800); font-weight: 700; margin-bottom: 8px; }
.vcard .ex { font-size: 14.5px; color: var(--ink-soft); font-style: italic; }

.checklist { background: var(--mint-bg); border: 1px solid #a3e0d3; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: 'Nunito', sans-serif; color: var(--mint-ink); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 6px 0; cursor: pointer; }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--teal-100); padding: 10px 14px; border-radius: 6px; }
.qexplain.show { display: block; }

.module-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.mcard { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); }
.mcard h2 { font-family: 'Nunito', sans-serif; font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
footer.site { background: var(--teal-900); color: #e4f5f0; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages A2 Lexique Français · Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-fr-a2-vocab-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     items.forEach(function(item, i){
       var input = item.querySelector('input');
       if(stored[i]){ item.classList.add('done'); input.checked = true; }
       item.addEventListener('click', function(e){
         if(e.target !== input){ input.checked = !input.checked; }
         item.classList.toggle('done', input.checked);
         stored[i] = input.checked;
         localStorage.setItem(key, JSON.stringify(stored));
       });
     });
   });
 }
 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Score: ' + score + ' / ' + data.length; }
     panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
       var opts = qEl.querySelectorAll('.qopt');
       var explain = qEl.querySelector('.qexplain');
       var qLocked = false;
       opts.forEach(function(optEl, oi){
         optEl.addEventListener('click', function(){
           if(qLocked) return;
           qLocked = true;
           var correctIdx = data[qi].correct;
           opts.forEach(function(o, idx){
             o.disabled = true;
             if(idx === correctIdx) o.classList.add('correct');
             else if(idx === oi) o.classList.add('incorrect');
           });
           if(oi === correctIdx) score++;
           refreshScore();
           if(explain) explain.classList.add('show');
         });
       });
     });
     refreshScore();
   });
 }
 document.addEventListener('DOMContentLoaded', function(){
   initChecklists();
   initQuizzes();
 });
})();
"""

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

MODULES = [
    {
        "id": "module-1",
        "file": "module-1.html",
        "title": "Module 1 · Souvenirs & Voyages",
        "short_title": "Module 1",
        "subtitle": "Le vocabulaire des événements passés, des vacances et des transports.",
        "topics": ["racontes-ses-souvenirs", "les-transports-et-deplacements"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Module 2 · Projets & Ambitions",
        "short_title": "Module 2",
        "subtitle": "Le vocabulaire de l'avenir, des études et des professions.",
        "topics": ["les-projets-et-lavenir", "le-monde-du-travail"]
    }
]

TOPICS = {
    "racontes-ses-souvenirs": {
        "title": "Raconter ses Souvenirs",
        "subtitle": "Vocabulaire de la mémoire, du passé et des voyages marquants",
        "module_title": "Module 1 · Souvenirs & Voyages",
        "words": [
            {"word": "un souvenir", "genre": "n.m.", "ex": "Mon meilleur souvenir de vacances est notre séjour à Nice."},
            {"word": "autrefois", "genre": "adv.", "ex": "Autrefois, les gens voyageaient uniquement en train."},
            {"word": "l'année dernière", "genre": "expr.", "ex": "L'année dernière, nous avons visité la Bretagne."},
            {"word": "un paysage", "genre": "n.m.", "ex": "Le paysage montagneux était magnifique sous le soleil."},
            {"word": "une habitude", "genre": "n.f.", "ex": "J'avais l'habitude de me promener au parc chaque été."}
        ],
        "checklist": ["Connaître les expressions de temps passés", "Employer les noms de paysages et souvenirs"],
        "quiz": [
            {"q": "Quel mot désigne une action répétée dans le passé ?", "opts": ["une habitude", "un projet", "un futur"], "correct": 0, "explain": "'Une habitude' désigne une coutume ou routine passée."}
        ]
    },
    "les-transports-et-deplacements": {
        "title": "Les Transports et Déplacements",
        "subtitle": "Vocabulaire de la gare, de l'aéroport et des trajets",
        "module_title": "Module 1 · Souvenirs & Voyages",
        "words": [
            {"word": "un billet", "genre": "n.m.", "ex": "J'ai acheté un billet aller-retour pour Lyon."},
            {"word": "une correspondance", "genre": "n.f.", "ex": "Nous avons dix minutes pour prendre notre correspondance."},
            {"word": "le quai", "genre": "n.m.", "ex": "Le TGV à destination de Marseille entre en gare voie 3."},
            {"word": "en retard", "genre": "expr.", "ex": "Le train a vingt minutes de retard en raison des travaux."}
        ],
        "checklist": ["Demander un billet à la gare", "Comprendre les annonces de retard et correspondance"],
        "quiz": [
            {"q": "Où attend-on le train à la gare ?", "opts": ["Sur le quai", "Dans l'avion", "Au guichet"], "correct": 0, "explain": "On attend l'arrivée du train sur le quai."}
        ]
    },
    "les-projets-et-lavenir": {
        "title": "Les Projets et l'Avenir",
        "subtitle": "Vocabulaire de l'ambition, des prédictions et de la planification",
        "module_title": "Module 2 · Projets & Ambitions",
        "words": [
            {"word": "un projet", "genre": "n.m.", "ex": "Mon projet principal est de trouver un emploi à Paris."},
            {"word": "une ambition", "genre": "n.f.", "ex": "Son ambition est d'ouvrir son propre restaurant."},
            {"word": "demain", "genre": "adv.", "ex": "Demain, nous commencerons la formation."},
            {"word": "plus tard", "genre": "expr.", "ex": "Plus tard, je souhaiterais voyager autour du monde."}
        ],
        "checklist": ["Exprimer des objectifs d'avenir", "Employer les connecteurs de planification"],
        "quiz": [
            {"q": "Quel mot exprime ce que l'on veut réaliser plus tard ?", "opts": ["un projet", "un souvenir", "un passé"], "correct": 0, "explain": "'Un projet' désigne un plan d'action pour l'avenir."}
        ]
    },
    "le-monde-du-travail": {
        "title": "Le Monde du Travail",
        "subtitle": "Vocabulaire du bureau, des métiers et des réunions",
        "module_title": "Module 2 · Projets & Ambitions",
        "words": [
            {"word": "une carrière", "genre": "n.f.", "ex": "Elle a accompli une très belle carrière dans l'enseignement."},
            {"word": "une réunion", "genre": "n.f.", "ex": "La réunion d'équipe commence à neuf heures précises."},
            {"word": "un collègue", "genre": "n.m.", "ex": "Mon collègue m'a aidé à préparer la présentation."},
            {"word": "un entretien", "genre": "n.m.", "ex": "J'ai un entretien d'embauche demain matin."}
        ],
        "checklist": ["Parler de son poste et de ses tâches", "Fixer un rendez-vous professionnel"],
        "quiz": [
            {"q": "Comment appelle-t-on un rendez-vous pour un recrutement ?", "opts": ["Un entretien d'embauche", "Un souvenir", "Une habitude"], "correct": 0, "explain": "Un entretien d'embauche permet de rencontrer un futur employeur."}
        ]
    }
}

def render_topbar(is_topic=False):
    rel_prefix = "../" if is_topic else ""
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Lexique A2</span></a><nav class="topbar-nav"><a href="../../francaise-a2.html">← Hub Français A2</a></nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Lexique Français (A2) · Édition Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Accueil COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building French A2 Vocabulary Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        vcards = []
        for w in top["words"]:
            vcards.append(f'''<div class="vcard"><div class="word">{w["word"]}</div><div class="genre">{w["genre"]}</div><div class="ex">« {w["ex"]} »</div></div>''')
        vcards_html = f'<div class="vocab-grid">{"".join(vcards)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Compétences lexicales</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Test de Lexique</h2><span class="quiz-score">Score: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        page_html = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Lexique Français A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["module_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>
  {vcards_html}
  {check_html}
  {quiz_html}
  {pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(page_html)

    for m in MODULES:
        cards = []
        for slug in m["topics"]:
            top = TOPICS[slug]
            cards.append(f'''<a class="mcard" href="topics/{slug}.html"><h2>{top["title"]}</h2><p>{top["subtitle"]}</p></a>''')

        m_html = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · Lexique A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Module</span>
    <h1>{m["title"]}</h1>
    <p class="subtitle">{m["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="module-grid">{"".join(cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

        with open(os.path.join(BASE_DIR, m["file"]), "w", encoding="utf-8") as f:
            f.write(m_html)

    index_cards = []
    for m in MODULES:
        index_cards.append(f'''<a class="mcard" href="{m["file"]}"><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--teal-800);">{len(m["topics"])} thèmes →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lexique Français Niveau A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Niveau A2</span>
    <h1>Lexique Français (A2)</h1>
    <p class="subtitle">Manuel interactif monolingue de vocabulaire français niveau A2.</p>
    <hr class="rule">
  </div>
  <div class="module-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("French A2 Vocabulary Manual generated successfully!")

if __name__ == "__main__":
    build_all()

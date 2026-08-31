#!/usr/bin/env python3
"""
Generator script for COSYlanguages French Vocabulary Manual (Level B1) Interactive Web Edition.
Generates manuals/fr/vocabulary/b1/index.html, module-N.html hubs, assets, and topic HTML pages in manuals/fr/vocabulary/b1/topics/.
100% Monolingual French.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/fr/vocabulary/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Lexique Français Niveau B1 */
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

APP_JS = """// COSYlanguages B1 Lexique Français · Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-fr-b1-vocab-' + box.getAttribute('data-key');
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
        "title": "Module 1 · Nuancer sa Pensée & Exprimer des Opinions",
        "short_title": "Module 1",
        "subtitle": "Vocabulaire de la volonté, du doute et de l'affirmation personnelle.",
        "topics": ["le-vocabulaire-de-la-necessite", "lexpression-de-lopinion-et-du-doute"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Module 2 · Argumentation & Débat d'Idées",
        "short_title": "Module 2",
        "subtitle": "Vocabulaire de la cause, des impacts et de la réfutation dans les débats.",
        "topics": ["la-cause-le-resultat-et-limpact", "les-termes-du-debat-et-de-la-refutation"]
    }
]

TOPICS = {
    "le-vocabulaire-de-la-necessite": {
        "title": "Le Vocabulaire de la Nécessité et des Exigences",
        "subtitle": "Termes indispensables pour formuler des priorités et impératifs",
        "module_title": "Module 1 · Nuancer sa Pensée & Exprimer des Opinions",
        "words": [
            {"word": "essentiel", "genre": "adj.", "ex": "Il est essentiel de relire ce dossier avant la réunion."},
            {"word": "indispensable", "genre": "adj.", "ex": "Une bonne connexion est indispensable pour le travail à distance."},
            {"word": "exiger", "genre": "v.", "ex": "Le directeur exige que les délais soient respectés."},
            {"word": "souhaiter", "genre": "v.", "ex": "Je souhaite que nous trouvions une solution rapidement."},
            {"word": "une obligation", "genre": "n.f.", "ex": "Le respect des normes de sécurité est une obligation légale."}
        ],
        "checklist": ["Connaître les adjectifs de priorité", "Employer les verbes d'exigence au subjonctif"],
        "quiz": [
            {"q": "Quel adjectif signifie 'qu'on ne peut pas éviter' ?", "opts": ["indispensable", "discutable", "secondaire"], "correct": 0, "explain": "'Indispensable' qualifie ce qui est totalement nécessaire."}
        ]
    },
    "lexpression-de-lopinion-et-du-doute": {
        "title": "L'Expression de l'Opinion et du Doute",
        "subtitle": "Moduler ses propos entre certitude, conviction et réserve",
        "module_title": "Module 1 · Nuancer sa Pensée & Exprimer des Opinions",
        "words": [
            {"word": "à mon avis", "genre": "expr.", "ex": "À mon avis, cette stratégie comporte trop de risques."},
            {"word": "être convaincu(e)", "genre": "expr.", "ex": "Je suis convaincue que notre projet réussira."},
            {"word": "discutable", "genre": "adj.", "ex": "Cette hypothèse reste discutable selon les experts."},
            {"word": "un doute", "genre": "n.m.", "ex": "J'ai encore des doutes sur l'efficacité de ce système."},
            {"word": "il me semble", "genre": "expr.", "ex": "Il me semble que la décision a déjà été prise."}
        ],
        "checklist": ["Varier ses formules d'introduction d'opinion", "Exprimer la réserve avec diplomatie"],
        "quiz": [
            {"q": "Quelle formule exprime une certitude absolue ?", "opts": ["Je suis convaincu(e)", "Je doute", "Il me semble"], "correct": 0, "explain": "'Être convaincu(e)' affirme une certitude totale."}
        ]
    },
    "la-cause-le-resultat-et-limpact": {
        "title": "La Cause, le Résultat et l'Impact",
        "subtitle": "Lexique du raisonnement causal et des conséquences à long terme",
        "module_title": "Module 2 · Argumentation & Débat d'Idées",
        "words": [
            {"word": "l'origine", "genre": "n.f.", "ex": "L'origine du problème remonte à plusieurs mois."},
            {"word": "un facteur", "genre": "n.m.", "ex": "Le stress est un facteur déterminant dans ce projet."},
            {"word": "un impact", "genre": "n.m.", "ex": "Cette réforme aura un impact positif sur l'économie."},
            {"word": "engendrer", "genre": "v.", "ex": "Cette mesure peut engendrer des réactions fortes."},
            {"word": "par conséquent", "genre": "loc. adv.", "ex": "Les coûts ont augmenté ; par conséquent, nous adaptons les tarifs."}
        ],
        "checklist": ["Identifier et nommer les facteurs de cause", "Exprimer l'effet et la conséquence"],
        "quiz": [
            {"q": "Quel verbe signifie 'produire ou causer un résultat' ?", "opts": ["engendrer", "réfuter", "admettre"], "correct": 0, "explain": "'Engendrer' signifie donner naissance ou causer une situation."}
        ]
    },
    "les-termes-du-debat-et-de-la-refutation": {
        "title": "Les Termes du Débat et de la Réfutation",
        "subtitle": "Vocabulaire pour soutenir, contester et nuancer une idée",
        "module_title": "Module 2 · Argumentation & Débat d'Idées",
        "words": [
            {"word": "soutenir", "genre": "v.", "ex": "Le chercheur soutient que son modèle est fiable."},
            {"word": "réfuter", "genre": "v.", "ex": "L'expert a réfité tous les arguments de l'opposition."},
            {"word": "admettre", "genre": "v.", "ex": "Il faut admettre que les résultats dépassent les prévisions."},
            {"word": "contester", "genre": "v.", "ex": "Plusieurs personnes contestent la légitimité de ce choix."},
            {"word": "nuancer", "genre": "v.", "ex": "Permettez-moi de nuancer cette affirmation."}
        ],
        "checklist": ["Utiliser les verbes d'argumentation", "Réfuter une idée avec politesse"],
        "quiz": [
            {"q": "Quel verbe signifie 'prouver la fausseté d'un argument' ?", "opts": ["réfuter", "soutenir", "admettre"], "correct": 0, "explain": "'Réfuter' consiste à détruire un argument par des preuves contraires."}
        ]
    }
}

def render_topbar(is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../francaise-b1.html" if is_topic else "../../../francaise-b1.html"
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Lexique B1</span></a><nav class="topbar-nav"><a href="{hub_link}">← Hub Français B1</a></nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Lexique Français (B1) · Édition Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Accueil COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building French B1 Vocabulary Manual...")
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
<title>{top["title"]} · Lexique Français B1</title>
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
<title>{m["title"]} · Lexique B1</title>
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
<title>Lexique Français Niveau B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Niveau B1</span>
    <h1>Lexique Français (B1)</h1>
    <p class="subtitle">Manuel interactif monolingue de vocabulaire français niveau B1.</p>
    <hr class="rule">
  </div>
  <div class="module-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("French B1 Vocabulary Manual generated successfully!")

if __name__ == "__main__":
    build_all()

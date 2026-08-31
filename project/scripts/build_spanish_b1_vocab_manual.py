#!/usr/bin/env python3
"""
Generator script for COSYlanguages Spanish Vocabulary Manual (Level B1) Interactive Web Edition.
Generates manuals/es/vocabulary/b1/index.html, module-N.html hubs, assets, and topic HTML pages in manuals/es/vocabulary/b1/topics/.
100% Monolingual Spanish.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/es/vocabulary/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Vocabulario Español Nivel B1 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --red-900: #7f1d1d;
  --red-800: #991b1b;
  --red-600: #dc2626;
  --red-100: #fee2e2;
  --ink: #1f2937;
  --ink-soft: #4b5563;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e5e7eb;
  --mint-bg: #dcfce7;
  --mint-ink: #14532d;
  --radius-s: 8px;
  --radius-m: 14px;
  --radius-l: 20px;
  --shadow-card: 0 2px 8px rgba(127,29,29,.06);
}

* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: 'Inter', system-ui, sans-serif; line-height: 1.6; }
a { color: var(--red-800); text-decoration: none; font-weight: 600; }
.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

.topbar { position: sticky; top: 0; z-index: 50; background: var(--red-900); color: #fff; }
.topbar-inner { max-width: 1100px; margin: 0 auto; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; }
.brand { color: #fff; font-weight: 800; font-family: 'Nunito', sans-serif; display: flex; align-items: center; gap: 8px; }
.brand-mark { background: #fff; color: var(--red-900); width: 30px; height: 30px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #fca5a5; font-size: 13px; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.2); }

.page-head { padding: 32px 0 16px; }
.eyebrow { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--red-800); background: var(--red-100); padding: 4px 12px; border-radius: 99px; margin-bottom: 12px; }
.page-head h1 { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

.vocab-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 24px 0; }
.vcard { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 18px; box-shadow: var(--shadow-card); }
.vcard .word { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 18px; color: var(--red-900); margin-bottom: 4px; }
.vcard .genre { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--red-800); font-weight: 700; margin-bottom: 8px; }
.vcard .ex { font-size: 14.5px; color: var(--ink-soft); font-style: italic; }

.checklist { background: var(--mint-bg); border: 1px solid #86efac; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: 'Nunito', sans-serif; color: var(--mint-ink); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 6px 0; cursor: pointer; }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--red-100); padding: 10px 14px; border-radius: 6px; }
.qexplain.show { display: block; }

.module-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.mcard { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); }
.mcard h2 { font-family: 'Nunito', sans-serif; font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
footer.site { background: var(--red-900); color: #fca5a5; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages B1 Vocabulario Español · Interactividad
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-es-b1-vocab-' + box.getAttribute('data-key');
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
        "title": "Módulo 1 · Expresión de Opiniones y Dudas",
        "short_title": "Módulo 1",
        "subtitle": "Léxico del punto de vista, la incertidumbre y las expectativas personales.",
        "topics": ["expresar-opiniones-y-dudas", "el-lexico-del-deseo-y-las-expectativas"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Módulo 2 · Argumentación y Debate",
        "short_title": "Módulo 2",
        "subtitle": "Léxico de las razones, las consecuencias y los argumentos en el debate público.",
        "topics": ["causa-efecto-e-impacto", "terminos-del-debate-y-la-refutacion"]
    }
]

TOPICS = {
    "expresar-opiniones-y-dudas": {
        "title": "Expresar Opiniones y Dudas",
        "subtitle": "Expresiones para formular puntos de vista y matizar posturas",
        "module_title": "Módulo 1 · Expresión de Opiniones y Dudas",
        "words": [
            {"word": "en mi opinión", "genre": "expr.", "ex": "En mi opinión, debemos considerar otras alternativas."},
            {"word": "una postura", "genre": "s.f.", "ex": "El equipo mantiene una postura abierta al diálogo."},
            {"word": "una duda", "genre": "s.f.", "ex": "Tengo serias dudas sobre la eficacia de esta medida."},
            {"word": "una hipótesis", "genre": "s.f.", "ex": "Planteamos una hipótesis basada en los datos recientes."},
            {"word": "discutible", "genre": "adj.", "ex": "Ese planteamiento sigue siendo discutible entre los expertos."}
        ],
        "checklist": ["Expresar opiniones personales con variedad", "Introducir matices de duda con corrección"],
        "quiz": [
            {"q": "¿Qué expresión introduce una postura personal ?", "opts": ["En mi opinión", "Sin embargo", "Por lo tanto"], "correct": 0, "explain": "'En mi opinión' sirve para introducir un punto de vista personal."}
        ]
    },
    "el-lexico-del-deseo-y-las-expectativas": {
        "title": "El Léxico del Deseo y las Expectativas",
        "subtitle": "Términos para manifestar aspiraciones, metas y proyectos",
        "module_title": "Módulo 1 · Expresión de Opiniones y Dudas",
        "words": [
            {"word": "la esperanza", "genre": "s.f.", "ex": "Tenemos la esperanza de llegar a un acuerdo hoy."},
            {"word": "un deseo", "genre": "s.m.", "ex": "Mi deseo principal es seguir aprendiendo."},
            {"word": "una meta", "genre": "s.f.", "ex": "Alcanzar esta meta requiere esfuerzo colectivo."},
            {"word": "aspirar a", "genre": "v.", "ex": "Aspiramos a mejorar las condiciones de trabajo."},
            {"word": "preferir", "genre": "v.", "ex": "Preferiría que organizáramos la reunión mañana."}
        ],
        "checklist": ["Expresar deseos e ilusiones a futuro", "Emplear verbos de aspiración"],
        "quiz": [
            {"q": "¿Qué palabra equivale a 'un objetivo que se quiere alcanzar' ?", "opts": ["una meta", "una duda", "una causa"], "correct": 0, "explain": "'Una meta' es el objetivo o fin que se persigue."}
        ]
    },
    "causa-efecto-e-impacto": {
        "title": "Causa, Efecto e Impacto",
        "subtitle": "Vocabulario de los orígenes, resultados y consecuencias",
        "module_title": "Módulo 2 · Argumentación y Debate",
        "words": [
            {"word": "el origen", "genre": "s.m.", "ex": "El origen de la propuesta está en la consulta ciudadana."},
            {"word": "un impacto", "genre": "s.m.", "ex": "El cambio tendrá un impacto positivo en el medio ambiente."},
            {"word": "un factor", "genre": "s.m.", "ex": "La innovación es un factor decisivo para el desarrollo."},
            {"word": "generar", "genre": "v.", "ex": "Esta iniciativa puede generar nuevas oportunidades."},
            {"word": "por consiguiente", "genre": "loc. adv.", "ex": "Subieron los costos ; por consiguiente, ajustamos los precios."}
        ],
        "checklist": ["Identificar factores causales", "Describir el impacto de decisiones"],
        "quiz": [
            {"q": "¿Qué verbo significa 'producir o causar un efecto' ?", "opts": ["generar", "refutar", "admitir"], "correct": 0, "explain": "'Generar' significa provocar, dar lugar o causar algo."}
        ]
    },
    "terminos-del-debate-y-la-refutacion": {
        "title": "Términos del Debate y la Refutación",
        "subtitle": "Vocabulario para defender, objetar y negociar posiciones",
        "module_title": "Módulo 2 · Argumentación y Debate",
        "words": [
            {"word": "sostener", "genre": "v.", "ex": "El experto sostiene que los datos son fiables."},
            {"word": "refutar", "genre": "v.", "ex": "El ponente refutó la tesis contraria con evidencias."},
            {"word": "admitir", "genre": "v.", "ex": "Hay que admitir que la situación ha mejorado."},
            {"word": "objetar", "genre": "v.", "ex": "Varias personas objetaron los plazos fijados."},
            {"word": "matizar", "genre": "v.", "ex": "Me gustaría matizar esa afirmación antes de concluir."}
        ],
        "checklist": ["Defender un argumento con fundamento", "Objetar o refutar posturas con elegancia"],
        "quiz": [
            {"q": "¿Qué verbo significa 'rebatir o contestar un argumento' ?", "opts": ["refutar", "sostener", "admitir"], "correct": 0, "explain": "'Refutar' es contradecir o rebatir con argumentos válidos."}
        ]
    }
}

def render_topbar(is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../espanol-b1.html" if is_topic else "../../../espanol-b1.html"
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Vocabulario B1</span></a><nav class="topbar-nav"><a href="{hub_link}">← Hub Español B1</a></nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Vocabulario Español (B1) · Edición Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Volver al inicio COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Spanish B1 Vocabulary Manual...")
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
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Competencias léxicas</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Cuestionario de Léxico</h2><span class="quiz-score">Score: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        page_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Vocabulario Español B1</title>
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
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · Vocabulario B1</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Módulo</span>
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
        index_cards.append(f'''<a class="mcard" href="{m["file"]}"><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--red-800);">{len(m["topics"])} temas →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vocabulario Español Nivel B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Nivel B1</span>
    <h1>Vocabulario Español (B1)</h1>
    <p class="subtitle">Manual interactivo monolingüe de vocabulario español nivel B1.</p>
    <hr class="rule">
  </div>
  <div class="module-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Spanish B1 Vocabulary Manual generated successfully!")

if __name__ == "__main__":
    build_all()

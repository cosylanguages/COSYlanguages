#!/usr/bin/env python3
"""
Generator script for COSYlanguages Spanish Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/es/vocabulary/a2/index.html, module-N.html chapter hubs, assets, and topic HTML pages in manuals/es/vocabulary/a2/topics/.
100% Monolingual Spanish.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/es/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manual de Vocabulario Español Nivel A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --red-900: #7f1d1d;
  --red-800: #991b1b;
  --red-700: #b91c1c;
  --red-600: #dc2626;
  --red-100: #fee2e2;
  --red-050: #fef2f2;

  --ink: #1f1917;
  --ink-soft: #443e3c;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e7e5e4;

  --radius-s: 8px;
  --radius-m: 14px;
  --radius-l: 20px;
  --shadow-card: 0 2px 8px rgba(127,29,29,.06);
  --shadow-hover: 0 8px 24px rgba(127,29,29,.12);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
}
a { color: var(--red-700); text-decoration: none; transition: color .15s ease; }
a:hover { color: var(--red-900); }

.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

.topbar {
  position: sticky; top: 0; z-index: 50; background: var(--red-900);
  color: #fff; border-bottom: 1px solid rgba(255,255,255,.1);
}
.topbar-inner {
  max-width: 1100px; margin: 0 auto; padding: 12px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-weight: 800; font-family: var(--font-display); }
.brand-mark { background: #fff; color: var(--red-900); width: 30px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #fee2e2; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.18); color: #fff; }

.page-head { padding: 32px 0 16px; }
.eyebrow {
  display: inline-block; font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--red-700); background: var(--red-100);
  padding: 4px 12px; border-radius: 99px; margin-bottom: 12px;
}
.page-head h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

.outcome-banner { background: var(--red-100); border-left: 4px solid var(--red-600); padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--red-900); font-weight: 500; }

.vocab-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.flashcard { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; box-shadow: var(--shadow-card); position: relative; }
.flashcard .term { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--red-900); margin-bottom: 4px; }
.flashcard .tag { display: inline-block; font-family: var(--font-mono); font-size: 11px; background: var(--red-050); color: var(--red-700); padding: 2px 8px; border-radius: 4px; margin-bottom: 12px; }
.flashcard .def { font-size: 15px; color: var(--ink); margin-bottom: 10px; font-weight: 500; }
.flashcard .ex { font-size: 14px; color: var(--ink-soft); font-style: italic; border-left: 2px solid var(--red-600); padding-left: 10px; }

.checklist { background: var(--red-050); border: 1px solid var(--red-100); border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--red-900); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; cursor: pointer; }
.check-item input { width: 18px; height: 18px; accent-color: var(--red-700); }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--red-100); color: var(--red-900); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qitem .qtext { font-family: var(--font-display); font-weight: 800; margin-bottom: 12px; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--red-050); border-left: 3px solid var(--red-600); padding: 10px 14px; }
.qexplain.show { display: block; }

.module-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.module-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.module-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--red-600); }
.module-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--red-900); color: #fee2e2; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages A2 Vocabulario Español · Motor de Interactividad
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-es-vocab-a2-' + box.getAttribute('data-key');
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
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Puntuación: ' + score + ' / ' + data.length; }
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
        "title": "Módulo 1 · Vida Cotidiana & Viajes",
        "short_title": "Módulo 1",
        "subtitle": "La rutina del día a día, recuerdos de infancia y vacaciones en transporte.",
        "stripe": "#dc2626",
        "topics": ["la-rutina-y-los-recuerdos", "los-viajes-y-los-transportes"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Módulo 2 · Trabajo & Salud",
        "short_title": "Módulo 2",
        "subtitle": "Las profesiones, la oficina, la salud y la farmacia.",
        "stripe": "#b91c1c",
        "topics": ["el-trabajo-y-las-profesiones", "la-salud-y-las-compras"]
    }
]

TOPICS = {
    "la-rutina-y-los-recuerdos": {
        "title": "La Rutina y los Recuerdos de Infancia",
        "subtitle": "Léxico fundamental para contar costumbres del pasado y recuerdos de la infancia",
        "module_title": "Módulo 1 · Vida Cotidiana & Viajes",
        "module_file": "module-1.html",
        "cando": "Puede describir hábitos infantiles y anécdotas familiares pasadas.",
        "cards": [
            {"term": "la costumbre (f.)", "tag": "Sustantivo", "def": "Hábito o práctica frecuente en la vida cotidiana.", "ex": "De niño tenía la costumbre de cenar muy temprano."},
            {"term": "el recuerdo (m.)", "tag": "Sustantivo", "def": "Memoria que se conserva de una cosa o persona.", "ex": "Tengo un recuerdo muy bonito de mis vacaciones en el pueblo."},
            {"term": "levantarse (v. refl.)", "tag": "Verbo", "def": "Salir de la cama por la mañana.", "ex": "Antes me levantaba a las seis de la mañana."},
            {"term": "la infancia (f.)", "tag": "Sustantivo", "def": "Período de la vida humana desde el nacimiento hasta la pubertad.", "ex": "Pasé mi infancia en una pequeña ciudad costera."}
        ],
        "checklist": ["Expresar hábitos cotidianos del pasado", "Contar recuerdos familiares"],
        "quiz": [
            {"q": "¿Qué sustantivo significa 'memoria de un hecho del pasado'?", "opts": ["El recuerdo", "La costumbre", "El viaje"], "correct": 0, "explain": "'El recuerdo' hace referencia a la memoria de acontecimientos pasados."}
        ]
    },
    "los-viajes-y-los-transportes": {
        "title": "Los Viajes y los Medios de Transporte",
        "subtitle": "Palabras clave para reservar alojamientos, billetes y desplazamientos",
        "module_title": "Módulo 1 · Vida Cotidiana & Viajes",
        "module_file": "module-1.html",
        "cando": "Puede reservar hoteles, comprar billetes de transporte y pedir indicaciones.",
        "cards": [
            {"term": "la reserva (f.)", "tag": "Sustantivo", "def": "Acción de asegurar un alojamiento o asiento.", "ex": "Tengo una reserva confirmada para dos noches en este hotel."},
            {"term": "el billete de ida y vuelta (m.)", "tag": "Sustantivo", "def": "Pasaje para ir y regresar a un lugar.", "ex": "Por favor, un billete de ida y vuelta para Toledo."},
            {"term": "el trasbordo (m.) / la escala (f.)", "tag": "Sustantivo", "def": "Cambio de tren o avión en una estación intermedia.", "ex": "Tenemos que hacer trasbordo en la estación de Atocha."},
            {"term": "el equipaje de mano (m.)", "tag": "Sustantivo", "def": "Maleta pequeña autorizada en cabina.", "ex": "Solo llevo equipaje de mano para el fin de semana."}
        ],
        "checklist": ["Comprar un billete de tren o autobús", "Gestionar una reserva de hotel"],
        "quiz": [
            {"q": "¿Cómo se llama el pasaje para ir y regresar?", "opts": ["El billete de ida y vuelta", "El trasbordo", "La reserva"], "correct": 0, "explain": "'Billete de ida y vuelta' incluye ambos trayectos."}
        ]
    },
    "el-trabajo-y-las-profesiones": {
        "title": "El Trabajo y las Profesiones",
        "subtitle": "Vocabulario clave para hablar del empleo, entrevistas y tareas de oficina",
        "module_title": "Módulo 2 · Trabajo & Salud",
        "module_file": "module-2.html",
        "cando": "Puede presentar su profesión y describir tareas laborales cotidianas.",
        "cards": [
            {"term": "la entrevista de trabajo (f.)", "tag": "Sustantivo", "def": "Reunión de evaluación para optar a un empleo.", "ex": "Mañana por la mañana tengo una entrevista de trabajo muy importante."},
            {"term": "el currículum (m.)", "tag": "Sustantivo", "def": "Resumen de estudios y experiencia profesional.", "ex": "He enviado mi currículum a varias empresas del sector."},
            {"term": "el sueldo (m.) / el salario (m.)", "tag": "Sustantivo", "def": "Remuneración periódica cobrada por trabajar.", "ex": "Cobra el sueldo el primer día de cada mes."},
            {"term": "la reunión (f.)", "tag": "Sustantivo", "def": "Agrupación de personas para discutir asuntos de trabajo.", "ex": "La reunión con los clientes empieza a las diez."}
        ],
        "checklist": ["Presentar su profesión y experiencia", "Describir actividades diarias de trabajo"],
        "quiz": [
            {"q": "¿Cómo se llama la reunión para optar a un puesto de trabajo?", "opts": ["La entrevista de trabajo", "El trasbordo", "La reserva"], "correct": 0, "explain": "La entrevista de trabajo sirve para conseguir empleo."}
        ]
    },
    "la-salud-y-las-compras": {
        "title": "La Salud y los Servicios",
        "subtitle": "Léxico indispensable para explicar síntomas en el médico y comprar medicamentos",
        "module_title": "Módulo 2 · Trabajo & Salud",
        "module_file": "module-2.html",
        "cando": "Puede describir dolencias sencillas e interactuar en una farmacia.",
        "cards": [
            {"term": "el dolor de cabeza (m.)", "tag": "Sustantivo", "def": "Molestia localizada en la cabeza.", "ex": "Tengo un fuerte dolor de cabeza y necesito descansar."},
            {"term": "la receta médica (f.)", "tag": "Sustantivo", "def": "Prescripción emitida por el doctor para fármacos.", "ex": "Necesito la receta médica para comprar este medicamento."},
            {"term": "el medicamento (m.) / la medicina (f.)", "tag": "Sustantivo", "def": "Sustancia curativa o preventiva.", "ex": "El médico me ha recetado un medicamento para la fiebre."},
            {"term": "la cita médica (f.)", "tag": "Sustantivo", "def": "Consulta concertada previamente con el doctor.", "ex": "Tengo una cita médica el próximo martes."}
        ],
        "checklist": ["Describir síntomas de enfermedad común", "Comprar medicamentos en la farmacia"],
        "quiz": [
            {"q": "¿Qué documento expide el médico para comprar ciertos fármacos?", "opts": ["La receta médica", "La entrevista", "El trasbordo"], "correct": 0, "explain": "La receta médica autoriza la adquisición del medicamento."}
        ]
    }
}

def render_topbar(active_mod_id=None, is_topic=False):
    hub_link = "../../../../espanol-a2.html" if is_topic else "../../../espanol-a2.html"
    rel_prefix = "../" if is_topic else ""
    nav_links = [f'<a href="{hub_link}">← Hub Español A2</a>']
    for m in MODULES:
        act = 'class="active"' if active_mod_id == m["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{m["file"]}">{m["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Vocabulario A2</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manual de Vocabulario Español (A2) · Edición Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Volver al inicio COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Spanish A2 Vocabulary Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        card_items = []
        for c in top["cards"]:
            card_items.append(f'''<div class="flashcard"><div class="term">{c["term"]}</div><span class="tag">{c["tag"]}</span><div class="def">{c["def"]}</div><div class="ex">"{c["ex"]}"</div></div>''')
        cards_html = f'<div class="vocab-grid">{"".join(card_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 ¿Conoces ya estas palabras?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Comprobación Léxica</h2><span class="quiz-score">Puntuación: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        page_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Vocabulario Español A2</title>
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
  <div class="outcome-banner">🎯 <strong>Objetivo de vocabulario:</strong> {top["cando"]}</div>
  {cards_html}
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
            cards.append(f'''<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>''')

        mod_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · COSYlanguages A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_mod_id=m["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Módulo</span>
    <h1>{m["title"]}</h1>
    <p class="subtitle">{m["subtitle"]}</p>
    <hr class="rule">
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
        index_cards.append(f'''<a class="module-card" href="{m["file"]}"><div style="height:4px;background:{m["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--red-700);">{len(m["topics"])} temas →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vocabulario Español Nivel A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Nivel A2</span>
    <h1>Vocabulario Español (A2)</h1>
    <p class="subtitle">Manual interactivo monolingüe de vocabulario español nivel elemental (A2).</p>
    <hr class="rule">
  </div>
  <div class="module-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Spanish A2 Vocabulary Manual generated successfully!")

if __name__ == "__main__":
    build_all()

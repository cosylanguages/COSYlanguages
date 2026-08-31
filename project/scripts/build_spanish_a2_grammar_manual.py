#!/usr/bin/env python3
"""
Generator script for COSYlanguages Spanish Grammar Manual (Level A2) Interactive Web Edition.
Generates manuals/es/grammar/a2/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/es/grammar/a2/topics/.
100% Monolingual Spanish.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/es/grammar/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manual de Gramática Española Nivel A2 */
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

  --grammar-subject: #2563eb;
  --grammar-verb: #16a34a;
  --grammar-object: #d97706;
  --grammar-ending: #9333ea;
  --grammar-error: #dc2626;

  --why-bg: #fef3c7;
  --why-line: #f59e0b;
  --why-ink: #78350f;

  --native-bg: #f3e8ff;
  --native-line: #a855f7;
  --native-ink: #581c87;

  --mistake-bg: #fef2f2;
  --mistake-line: #ef4444;
  --mistake-ink: #991b1b;

  --mint-bg: #dcfce7;
  --mint-line: #22c55e;
  --mint-ink: #14532d;

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

.outcome-banner { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--mint-ink); font-weight: 500; }
.box { border-radius: var(--radius-m); padding: 20px; margin: 20px 0; border: 1px solid transparent; }
.box h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 16.5px; font-weight: 800; }
.box.why { background: var(--why-bg); border-color: #fcd34d; color: var(--why-ink); }
.box.native { background: var(--native-bg); border-color: #d8b4fe; color: var(--native-ink); }
.box.rule-box { background: var(--red-050); border: 1px solid var(--red-100); border-left: 4px solid var(--red-600); }

.table-wrap { overflow-x: auto; margin: 20px 0; border-radius: var(--radius-m); border: 1px solid var(--line); box-shadow: var(--shadow-card); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th { background: var(--red-900); color: #fff; text-align: left; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; }
tbody td { padding: 12px 16px; border-bottom: 1px solid var(--line); }

.mistakes { margin: 24px 0; }
.mistakes .m-title { font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--mistake-ink); margin-bottom: 12px; }
.mflip { background: var(--mistake-bg); border: 1px solid #fca5a5; border-radius: var(--radius-s); padding: 14px 18px; margin-bottom: 10px; cursor: pointer; }
.mflip .wrong-line { display: flex; gap: 8px; color: var(--mistake-ink); font-size: 15.5px; }
.mflip .wrong-text { text-decoration: line-through; }
.mflip .right-line { display: none; gap: 8px; color: var(--mint-ink); font-weight: 700; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #fca5a5; }
.mflip.flipped .right-line { display: flex; }
.mflip .hint { font-family: var(--font-mono); font-size: 11px; color: #b91c1c; margin-top: 4px; display: block; }
.mflip.flipped .hint { display: none; }

.checklist { background: var(--mint-bg); border: 1px solid #86efac; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--mint-ink); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; cursor: pointer; }
.check-item input { width: 18px; height: 18px; accent-color: var(--red-700); }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--red-100); color: var(--red-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qitem .qtext { font-family: var(--font-display); font-weight: 800; margin-bottom: 12px; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--red-050); border-left: 3px solid var(--red-600); padding: 10px 14px; }
.qexplain.show { display: block; }

.parts-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.part-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.part-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--red-600); }
.part-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--red-900); color: #fee2e2; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages A2 Gramática Española · Motor de Interactividad
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-es-a2-' + box.getAttribute('data-key');
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
 function initMistakeFlip(){
   document.querySelectorAll('.mflip').forEach(function(card){
     card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
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
   initMistakeFlip();
   initQuizzes();
 });
})();
"""

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Parte 1 · El Relato en Pasado",
        "short_title": "Parte 1",
        "subtitle": "Pretérito indefinido, imperfecto y la alternancia narrativa en recuerdos.",
        "stripe": "#dc2626",
        "topics": ["preterito-indefinido-y-perfecto", "el-preterito-imperfecto", "indefinido-vs-imperfecto"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Parte 2 · Futuro & Condicional",
        "short_title": "Parte 2",
        "subtitle": "Futuro simple, condicional de cortesía e hipótesis al presente.",
        "stripe": "#16a34a",
        "topics": ["el-futuro-simple", "el-condicional-simple", "si-presente-futuro"]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Parte 3 · Pronombres, Comparativos & Subjuntivo",
        "short_title": "Parte 3",
        "subtitle": "Pronombres de objeto, comparaciones, obligación y deseo.",
        "stripe": "#d97706",
        "topics": ["pronombres-directos-e-indirectos", "la-comparacion-y-el-superlativo", "obligacion-tener-que-hay-que", "el-subjuntivo-introduccion"]
    }
]

TOPICS = {
    "preterito-indefinido-y-perfecto": {
        "title": "Pretérito Indefinido y Perfecto Compuesto",
        "subtitle": "Distinguir las acciones en un momento cerrado frente a un tiempo no terminado",
        "part_title": "Parte 1 · El Relato en Pasado",
        "part_file": "part-1.html",
        "cando": "Puede narrar eventos pasados puntuales y experiencias recientes.",
        "one_liner": "El Indefinido expresa acciones en un pasado cerrado (ayer, el año pasado) ; el Perfecto Compuesto se refiere a un tiempo abierto (hoy, esta semana).",
        "why_matters": "Es la base fundamental del español para contar viajes, anécdotas e historias del fin de semana.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Tiempo Verbal</th><th>Marcador Temporal Clave</th><th>Ejemplo de Uso</th></tr></thead>
<tbody>
<tr><td><b>Pretérito Indefinido</b></td><td>Ayer, anoche, en 2020, la semana pasada</td><td>Ayer <b>fui</b> al cine y <b>comí</b> palomitas.</td></tr>
<tr><td><b>Perfecto Compuesto</b></td><td>Hoy, esta semana, nunca, alguna vez</td><td>Esta mañana <b>he hablado</b> con María.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Ayer</span> <span style='color:var(--grammar-verb);'>viajé</span> a Madrid.",
        "notice": "👀 Nota: En gran parte de Latinoamérica y el norte de España se prefiere el pretérito indefinido para casi todos los eventos pasados.",
        "think_native": "🧠 Piensa en español: ¿La unidad de tiempo incluye el presente (esta semana) o está completamente cerrada (la semana pasada)?",
        "signature_box": "🧩 Estructura Indefinido: Hablar ➔ hablé, hablaste, habló, hablamos, hablasteis, hablaron.",
        "mistakes": [
            {"wrong": "Ayer he ido al mercado.", "right": "Ayer fui al mercado."},
            {"wrong": "Esta semana fui a Madrid dos veces.", "right": "Esta semana he ido a Madrid dos veces."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: AYER abre el INDEFINIDO, HOY activa el PERFECTO!",
        "connects": ["el-preterito-imperfecto", "indefinido-vs-imperfecto"],
        "checklist": ["Usar el indefinido con marcadores como 'ayer' y 'el año pasado'", "Usar el perfecto compuesto con 'esta mañana' y 'nunca'"],
        "quiz": [
            {"q": "¿Qué frase es correcta?", "opts": ["Ayer comí en un restaurante.", "Ayer he comido en un restaurante.", "Ayer como en un restaurante."], "correct": 0, "explain": "'Ayer' exige pretérito indefinido: comí."}
        ]
    },
    "el-preterito-imperfecto": {
        "title": "El Pretérito Imperfecto",
        "subtitle": "Describir hábitos, paisajes y estados del pasado",
        "part_title": "Parte 1 · El Relato en Pasado",
        "part_file": "part-1.html",
        "cando": "Puede describir hábitos de la infancia y situaciones pasadas habituales.",
        "one_liner": "El imperfecto pinta el escenario de fondo y las acciones repetidas del pasado.",
        "why_matters": "Permite evocar recuerdos de la infancia ('Cuando era niño...') y describir entornos sin prisa narrativa.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbos -AR (Hablar)</th><th>Verbos -ER/-IR (Comer/Vivir)</th><th>Irregulares (Ser, Ir, Ver)</th></tr></thead>
<tbody>
<tr><td>hablaba, hablabas, hablaba, hablábamos...</td><td>comía, comías, comía, comíamos...</td><td>era, iba, veía</td></tr>
</tbody>
</table></div>""",
        "example_code": "Cuando <span style='color:var(--grammar-subject);'>era</span> niño, <span style='color:var(--grammar-verb);'>jugaba</span> siempre en el parque.",
        "notice": "👀 Nota: En español solo existen TRES verbos irregulares en imperfecto: ser (era), ir (iba) y ver (veía).",
        "think_native": "🧠 Piensa en español: El imperfecto no tiene principio ni fin marcado; es la imagen continua del pasado.",
        "signature_box": "🧩 Regla: -AR forma en -ABA ; -ER/-IR forman en -ÍA.",
        "mistakes": [
            {"wrong": "De niño jugué todos los días al fútbol.", "right": "De niño jugaba todos los días al fútbol."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡Recordar que solo hay 3 irregulares en Imperfecto (ser, ir, ver)!",
        "connects": ["preterito-indefinido-y-perfecto", "indefinido-vs-imperfecto"],
        "checklist": ["Formar las desinenas en -aba e -ía", "Usar el imperfecto para hábitos pasados con 'antes' o 'siempre'"],
        "quiz": [
            {"q": "¿Cuál es la forma correcta de 'nosotros' en imperfecto para 'vivir'?", "opts": ["Vivíamos", "Vivímos", "Viviamos"], "correct": 0, "explain": "Las formas de -er/-ir llevan tilde en la í: vivíamos."}
        ]
    },
    "indefinido-vs-imperfecto": {
        "title": "Pretérito Indefinido vs Imperfecto",
        "subtitle": "La combinación perfecta entre escenario de fondo y acción irruptora",
        "part_title": "Parte 1 · El Relato en Pasado",
        "part_file": "part-1.html",
        "cando": "Puede contar historias combinando el contexto con los acontecimientos.",
        "one_liner": "El Imperfecto es la pintura de fondo (mientras...) ; el Indefinido es el rayo que ocurre (cuando...).",
        "why_matters": "Es el núcleo de la narrativa en español para contar historias con ritmo y matices.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Tiempo</th><th>Función Narrativa</th><th>Palabra Clave</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><b>Imperfecto</b></td><td>Acción en progreso / Marco de fondo</td><td>Mientras...</td><td>Mientras <b>dormía</b>...</td></tr>
<tr><td><b>Indefinido</b></td><td>Acción puntual que interrumpe</td><td>De repente / Cuando...</td><td>...de repente <b>sonó</b> el teléfono.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Mientras <span style='color:var(--grammar-verb);'>caminaba</span> por la calle, <span style='color:var(--grammar-verb);'>encontré</span> un perro.",
        "notice": "👀 Nota: 'Mientras' introduce casi siempre el pretérito imperfecto.",
        "think_native": "🧠 Piensa en español: Imagina el imperfecto como la película y el indefinido como una foto que congela el momento.",
        "signature_box": "🧩 Fórmula: [Mientras + Imperfecto] + [Indefinido].",
        "mistakes": [
            {"wrong": "Mientras dormí, entró un ladrón.", "right": "Mientras dormía, entró un ladrón."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡El Imperfecto DIBUJA, el Indefinido ACTÚA!",
        "connects": ["preterito-indefinido-y-perfecto", "el-preterito-imperfecto"],
        "checklist": ["Identificar el marco de fondo vs la acción irruptora", "Usar correctamente la combinación mientras + imperfecto"],
        "quiz": [
            {"q": "Completa: 'Ayer cuando yo ____ (estudiar), ____ (llamar) Juan.'", "opts": ["estudiaba / llamó", "estudié / llamaba", "estudiaba / llamaba"], "correct": 0, "explain": "Estudiar es la acción en proceso (estudiaba), llamar es la interrupción puntual (llamó)."}
        ]
    },
    "el-futuro-simple": {
        "title": "El Futuro Simple de Indicativo",
        "subtitle": "Planes futuros, predicciones e hipótesis del presente",
        "part_title": "Parte 2 · Futuro & Condicional",
        "part_file": "part-2.html",
        "cando": "Puede formular proyectos personales, predicciones e hipótesis futuras.",
        "one_liner": "El futuro simple añade las desinenas -é, -ás, -á, -emos, -éis, -án al infinitivo completo.",
        "why_matters": "Permite planificar viajes, compromisos laborales y hacer predicciones del tiempo o economía.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Sujeto</th><th>Desinencias Únicas (-AR, -ER, -IR)</th><th>Ejemplo (Viajar)</th></tr></thead>
<tbody>
<tr><td>yo / tú / él</td><td>-é / -ás / -á</td><td>viajaré, viajarás, viajará</td></tr>
<tr><td>nosotros / vosotros / ellos</td><td>-emos / -éis / -án</td><td>viajaremos, viajaréis, viajarán</td></tr>
</tbody>
</table></div>""",
        "example_code": "El año que viene <span style='color:var(--grammar-subject);'>nosotros</span> <span style='color:var(--grammar-verb);'>viajar<span style='color:var(--grammar-ending);'>emos</span></span> a México.",
        "notice": "👀 Nota: Todas las desinencias del futuro llevan tilde salvo 'nosotros' (-emos).",
        "think_native": "🧠 Piensa en español: Verbos irregulares comunes acortan la raíz: tener (tendr-), hacer (har-), decir (dir-), poder (podr-).",
        "signature_box": "🧩 Regla: Infinitivo entero + desinencias con tilde.",
        "mistakes": [
            {"wrong": "Mañana yo viajaros a Madrid.", "right": "Mañana viajaré a Madrid."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: Mantén el infinitivo y añade la tilde al futuro!",
        "connects": ["el-condicional-simple", "si-presente-futuro"],
        "checklist": ["Conservar el infinitivo como base para formar el futuro", "Recordar las tildes en é, ás, á, éis, án"],
        "quiz": [
            {"q": "¿Cuál es el futuro de 'hacer' para 'yo'?", "opts": ["Haré", "Haceré", "Hacé"], "correct": 0, "explain": "'Hacer' adopta la raíz irregular 'har-' ➔ haré."}
        ]
    },
    "el-condicional-simple": {
        "title": "El Condicional Simple de Cortesía",
        "subtitle": "Expresar deseos, sugerencias y peticiones amables",
        "part_title": "Parte 2 · Futuro & Condicional",
        "part_file": "part-2.html",
        "cando": "Puede pedir servicios de forma muy amable y dar consejos sencillos.",
        "one_liner": "El condicional combina la misma raíz del futuro con las desinenas -ía, -ías, -ía, -íamos, -íais, -ían.",
        "why_matters": "Es la llave para pedir cosas con educación en restaurantes, tiendas y hoteles ('Me gustaría...', '¿Podría...?').",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo</th><th>Forma de Cortesía (Yo)</th><th>Uso Práctico</th></tr></thead>
<tbody>
<tr><td><b>Gustar</b></td><td>Me gustaría</td><td>Me gustaría reservar una mesa. (Deseo)</td></tr>
<tr><td><b>Poder</b></td><td>¿Podría...?</td><td>¿Podría traerme la cuenta? (Petición)</td></tr>
<tr><td><b>Deber</b></td><td>Deberías</td><td>Deberías descansar un poco. (Consejo)</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Me</span> <span style='color:var(--grammar-verb);'>gustar<span style='color:var(--grammar-ending);'>ía</span></span> un vaso de agua, por favor.",
        "notice": "👀 Nota: 'Me gustaría' o 'Querría' atenúan los deseos haciéndolos muy corteses.",
        "think_native": "🧠 Piensa en español: Usar el condicional demuestra elegancia y buen trato social.",
        "signature_box": "🧩 Fórmula: Raíz del Futuro + -ía, -ías, -ía, -íamos, -íais, -ían.",
        "mistakes": [
            {"wrong": "¡Quiero la cuenta ahora! (demasiado brusco)", "right": "¿Podría traerme la cuenta, por favor?"}
        ],
        "mnemonic": "💡 Truco mnemotécnico: Raíz de Futuro + ÍA = ¡Cortesía máxima!",
        "connects": ["el-futuro-simple", "si-presente-futuro"],
        "checklist": ["Usar 'me gustaría' para pedir o expresar deseos", "Pedir favores amablemente con '¿podría...?'"],
        "quiz": [
            {"q": "¿Cómo se pide amablemente la cuenta en un restaurante?", "opts": ["¿Podría traerme la cuenta?", "¡Tráeme la cuenta!", "Quiero la cuenta."], "correct": 0, "explain": "'¿Podría...?' expresa una petición cortés en condicional."}
        ]
    },
    "si-presente-futuro": {
        "title": "La Hipótesis al Presente (Si + Presente...)",
        "subtitle": "Expresar condiciones reales e inevitables en el futuro",
        "part_title": "Parte 2 · Futuro & Condicional",
        "part_file": "part-2.html",
        "cando": "Puede plantear condiciones reales e hipotéticas realizables.",
        "one_liner": "Si + presente de indicativo ➔ futuro simple (o presente/imperativo).",
        "why_matters": "Útil para negociar, planificar según el tiempo meteorológico y establecer acuerdos.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Condición (Si...)</th><th>Resultado</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><b>Si + Presente</b></td><td>Futuro Simple</td><td>Si <b>tengo</b> tiempo, te <b>llamaré</b>.</td></tr>
<tr><td><b>Si + Presente</b></td><td>Imperativo / Presente</td><td>Si <b>llueve</b>, <b>lleva</b> un paraguas.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Si <span style='color:var(--grammar-verb);'>hace</span> buen tiempo, <span style='color:var(--grammar-verb);'>iremos</span> a la playa.",
        "notice": "👀 Nota: Después de la conjunción 'si' condicional NUNCA se usa el futuro de indicativo en español.",
        "think_native": "🧠 Piensa en español: 'Si' introduce el desencadenante de la consecuencia.",
        "signature_box": "🧩 Regla de oro: Si + Presente de Indicativo ➔ Futuro.",
        "mistakes": [
            {"wrong": "Si tendré tiempo, iré.", "right": "Si tengo tiempo, iré."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡Prohibido poner futuro inmediatamente después de SI!",
        "connects": ["el-futuro-simple", "el-condicional-simple"],
        "checklist": ["Usar siempre presente tras la palabra 'si'", "Expresar el resultado futuro de la condición"],
        "quiz": [
            {"q": "Completa: 'Si tú ____ (estudiar) mucho, aprobarás.'", "opts": ["estudias", "estudiarás", "estudies"], "correct": 0, "explain": "La condición exige el presente de indicativo: estudias."}
        ]
    },
    "pronombres-directos-e-indirectos": {
        "title": "Los Pronombres de Objeto Directo e Indirecto",
        "subtitle": "Sustituir objetos y personas para evitar repeticiones (me, te, lo/la, nos, os, los/las y le/les)",
        "part_title": "Parte 3 · Pronombres, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Puede sustituir complementos en la frase ganando agilidad verbal.",
        "one_liner": "Objeto Directo (¿Qué/A quién?) = lo, la, los, las ; Objeto Indirecto (¿A quién se destina?) = le, les (que se convierte en 'se' ante lo/la).",
        "why_matters": "Otorga fluidez natural para no repetir palabras en una conversación fluida.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Función</th><th>3ª Persona Singular</th><th>3ª Persona Plural</th><th>Ejemplo de Cambio</th></tr></thead>
<tbody>
<tr><td><b>Objeto Directo</b></td><td>lo / la</td><td>los / las</td><td>Compro el libro ➔ <b>Lo</b> compro.</td></tr>
<tr><td><b>Objeto Indirecto</b></td><td>le (se)</td><td>les (se)</td><td>Escribo a María ➔ <b>Le</b> escribo.</td></tr>
</tbody>
</table></div>""",
        "example_code": "El libro? Ya <span style='color:var(--grammar-object);'>se</span> <span style='color:var(--grammar-object);'>lo</span> he dado a Juan.",
        "notice": "👀 Nota: Cuando se combinan dos pronombres de 3ª persona (le + lo), 'le' cambia a 'se' para evitar mal sonido (se lo di).",
        "think_native": "🧠 Piensa en español: Los pronombres se colocan delante del verbo conjugado o pegados al final del infinitivo/gerundio.",
        "signature_box": "🧩 Regla de combinación: [OI (se)] + [OD (lo/la/los/las)] + Verbo.",
        "mistakes": [
            {"wrong": "Él le dio el regalo a Juan ➔ Le lo dio.", "right": "Se lo dio."},
            {"wrong": "Veo a Juan ➔ Le veo (en norma de OD: Lo veo).", "right": "Lo veo."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡No digas 'le lo', dile 'se lo'!",
        "connects": ["la-comparacion-y-el-superlativo", "obligacion-tener-que-hay-que"],
        "checklist": ["Distinguir objeto directo (lo/la) de indirecto (le)", "Transformar le ➔ se ante lo/la"],
        "quiz": [
            {"q": "¿Cómo se dice 'I give it (el libro) to her'?", "opts": ["Se lo doy.", "Le lo doy.", "La le doy."], "correct": 0, "explain": "'Le' (a ella) + 'lo' (el libro) se convierte en 'Se lo doy'."}
        ]
    },
    "la-comparacion-y-el-superlativo": {
        "title": "La Comparación y el Superlativo",
        "subtitle": "Comparar cualidades y expresar la máxima excelencia",
        "part_title": "Parte 3 · Pronombres, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Puede comparar personas, lugares y cosas y destacar el mejor de todos.",
        "one_liner": "Más... que (superioridad), menos... que (inferioridad), tan... como (igualdad) ; el más... de (superlativo).",
        "why_matters": "Indispensable para elegir alojamientos, tomar decisiones de compra e intercambiar opiniones.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Grado</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Superioridad (+)</td><td><b>más + adjetivo + que</b></td><td>Madrid es <b>más grande que</b> Toledo.</td></tr>
<tr><td>Igualdad (=)</td><td><b>tan + adjetivo + como</b></td><td>Ana es <b>tan alta como</b> su hermana.</td></tr>
<tr><td>Superlativo Absoluto</td><td><b>adjetivo + -ísimo/a/os/as</b></td><td>Ese coche es <b>carísimo</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Esta fruta es <span style='color:var(--grammar-verb);'>mejor</span> que aquella y está <span style='color:var(--grammar-verb);'>buenísima</span>.",
        "notice": "👀 Nota: Irregulares importantes: bueno ➔ mejor ; malo ➔ peor ; grande/viejo ➔ mayor ; pequeño/joven ➔ menor.",
        "think_native": "🧠 Piensa en español: 'Tan' se usa con adjetivos (tan alto), pero 'tanto' con sustantivos (tanto dinero).",
        "signature_box": "🧩 Comparativo: Más... que / Tan... como.",
        "mistakes": [
            {"wrong": "Madrid es más bueno que Barcelona.", "right": "Madrid es mejor que Barcelona."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡Usa TAN con adjetivos y TANTO con sustantivos!",
        "connects": ["obligacion-tener-que-hay-que"],
        "checklist": ["Construir comparaciones de superioridad, inferioridad e igualdad", "Usar mejor/peor en lugar de más bueno/más malo"],
        "quiz": [
            {"q": "¿Cuál es la forma correcta de comparar?", "opts": ["Este libro es mejor que el tuyo.", "Este libro es más bueno que el tuyo.", "Este libro es tan bueno que el tuyo."], "correct": 0, "explain": "'Mejor' es el comparativo irregular de 'bueno'."}
        ]
    },
    "obligacion-tener-que-hay-que": {
        "title": "La Obligación: Tener que, Deber y Hay que",
        "subtitle": "Expresar obligaciones personales y reglas generales de necesidad",
        "part_title": "Parte 3 · Pronombres, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Puede dar instrucciones, expresar obligaciones e indicar normas.",
        "one_liner": "Tener que + infinitivo (obligación personal directa) ; Hay que + infinitivo (necesidad impersonal general).",
        "why_matters": "Crucial para cumplir normas laborales, horarios de transporte e indicaciones de seguridad.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Estructura</th><th>Carácter de la Obligación</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><b>Tener que + Infinitivo</b></td><td>Personal (Tengo, tienes...)</td><td><b>Tengo que estudiar</b> para el examen.</td></tr>
<tr><td><b>Hay que + Infinitivo</b></td><td>Impersonal / General</td><td><b>Hay que reciclar</b> el plástico.</td></tr>
<tr><td><b>Deber + Infinitivo</b></td><td>Deber moral / Recomendación</td><td><b>Debes respetar</b> las normas.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Para aprender español, <span style='color:var(--grammar-verb);'>hay que practicar</span> todos los días.",
        "notice": "👀 Nota: 'Hay que' nunca cambia de forma ni se conjuga en personas.",
        "think_native": "🧠 Piensa en español: 'Hay que' vale para todo el mundo sin señalar a nadie.",
        "signature_box": "🧩 Regla: Tener que + Infinitivo = Compromiso personal.",
        "mistakes": [
            {"wrong": "Nosotros habemos que estudiar.", "right": "Tenemos que estudiar. (o: Hay que estudiar.)"}
        ],
        "mnemonic": "💡 Truco mnemotécnico: TENER QUE para mí, ¡HAY QUE para todos!",
        "connects": ["el-subjuntivo-introduccion"],
        "checklist": ["Utilizar 'tener que' para compromisos individuales", "Utilizar 'hay que' para reglas generales"],
        "quiz": [
            {"q": "Elige la opción correcta: 'Para entrar en el museo ____ pagar la entrada.'", "opts": ["hay que", "tienen que", "hay de"], "correct": 0, "explain": "'Hay que + infinitivo' expresa la necesidad impersonal general."}
        ]
    },
    "el-subjuntivo-introduccion": {
        "title": "Introducción al Subjuntivo: Expresar Deseos",
        "subtitle": "Presente de subjuntivo con verbos de deseo y emoción (Quiero que...)",
        "part_title": "Parte 3 · Pronombres, Comparativos & Subjuntivo",
        "part_file": "part-3.html",
        "cando": "Puede expresar deseos para otras personas y expectativas sencillas.",
        "one_liner": "Cuando hay dos sujetos distintos en una frase de deseo (Quiero que tú...), el segundo verbo va en Subjuntivo.",
        "why_matters": "Es la primera puerta de entrada al modo subjuntivo, esencial para deseos sociales e interacciones afectivas.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Sujeto 1 + Verbo Deseo</th><th>Nexo</th><th>Sujeto 2 + Verbo (Subjuntivo)</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Yo quiero / Ojalá</td><td><b>que</b></td><td>tú tengas / hables</td><td>Quiero <b>que tengas</b> un buen día.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Espero que <span style='color:var(--grammar-subject);'>tú</span> <span style='color:var(--grammar-verb);'>tengas</span> un buen viaje.",
        "notice": "👀 Nota: Formación rápida del Subjuntivo: a los verbos -AR les pones vocal -E ; a los verbos -ER/-IR les pones vocal -A.",
        "think_native": "🧠 Piensa en español: El subjuntivo expresa el mundo del deseo, la duda y lo no realizado aún.",
        "signature_box": "🧩 Estructura: Verbo de Deseo + QUE + Presente de Subjuntivo.",
        "mistakes": [
            {"wrong": "Quiero que tú tienes un buen día.", "right": "Quiero que tú tengas un buen día."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡Cambia las vocales: AR pasa a E, ER/IR pasa a A!",
        "connects": ["obligacion-tener-que-hay-que"],
        "checklist": ["Reconocer las frases con dos sujetos y verbo de deseo", "Invertir la vocal temática para formar el subjuntivo"],
        "quiz": [
            {"q": "Completa: 'Ojalá ____ (hacer) buen tiempo mañana.'", "opts": ["haga", "hace", "hará"], "correct": 0, "explain": "'Ojalá' desencadena el presente de subjuntivo: haga."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    hub_link = "../../../../espanol-a2.html" if is_topic else "../../../espanol-a2.html"
    rel_prefix = "../" if is_topic else ""
    nav_links = [f'<a href="{hub_link}">← Hub Español A2</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Gramática A2</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manual de Gramática Española (A2) · Edición Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Volver al inicio COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Spanish A2 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">haz clic para revelar la forma correcta</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Errores frecuentes de estudiantes</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 ¿Puedes usar ya esta estructura?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnóstico & Quiz</h2><span class="quiz-score">Puntuación: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 Relacionado con...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Gramática Española A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["part_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="outcome-banner">🎯 <strong>Objetivo comunicativo:</strong> {top["cando"]}</div>
  <p><strong>En resumen:</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>¿Por qué es importante?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Ejemplo en colores</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>¡Enhorabuena!</strong> Ya dominas esta estructura fundamental del nivel A2.</div>
  {quiz_html}
  {pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
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
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_part_id=p["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Parte</span>
    <h1>{p["title"]}</h1>
    <p class="subtitle">{p["subtitle"]}</p>
    <hr class="rule">
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--red-700);">{len(p["topics"])} temas →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gramática Española Nivel A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Nivel A2</span>
    <h1>Gramática Española (A2)</h1>
    <p class="subtitle">Manual interactivo monolingüe de gramática española nivel elemental (A2).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Spanish A2 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

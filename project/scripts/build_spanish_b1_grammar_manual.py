#!/usr/bin/env python3
"""
Generator script for COSYlanguages Spanish Grammar Manual (Level B1) Interactive Web Edition.
Generates manuals/es/grammar/b1/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/es/grammar/b1/topics/.
100% Monolingual Spanish.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/es/grammar/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manual de Gramática Española Nivel B1 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --red-900: #7f1d1d;
  --red-800: #991b1b;
  --red-700: #b91c1c;
  --red-600: #dc2626;
  --red-100: #fee2e2;
  --red-050: #fef2f2;

  --ink: #1f2937;
  --ink-soft: #4b5563;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e5e7eb;

  --grammar-subject: #2563eb;
  --grammar-verb: #16a34a;
  --grammar-object: #d97706;
  --grammar-ending: #9333ea;

  --why-bg: #fef3c7;
  --why-ink: #78350f;

  --native-bg: #f3e8ff;
  --native-ink: #581c87;

  --mistake-bg: #fef2f2;
  --mistake-ink: #991b1b;

  --mint-bg: #dcfce7;
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
.topbar-nav a { color: #fca5a5; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
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

.outcome-banner { background: var(--mint-bg); border-left: 4px solid #22c55e; padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--mint-ink); font-weight: 500; }
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

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--red-100); color: var(--red-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
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
footer.site { background: var(--red-900); color: #fca5a5; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages B1 Gramática Española · Interactividad
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-es-b1-' + box.getAttribute('data-key');
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
        "title": "Parte 1 · El Presente de Subjuntivo & la Opinión",
        "short_title": "Parte 1",
        "subtitle": "Expresar opiniones, dudas, deseos y valoración personal.",
        "stripe": "#dc2626",
        "topics": ["presente-de-subjuntivo-opinion-duda", "subjuntivo-deseo-y-voluntad"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Parte 2 · Estructurar la Argumentación",
        "short_title": "Parte 2",
        "subtitle": "Expresar causa, consecuencia y conectores discursivos en el debate.",
        "stripe": "#16a34a",
        "topics": ["causa-y-consecuencia", "conectores-discursivos-y-debate"]
    }
]

TOPICS = {
    "presente-de-subjuntivo-opinion-duda": {
        "title": "El Presente de Subjuntivo — Opinión y Duda",
        "subtitle": "No creo que... / Dudo que... / Es probable que...",
        "part_title": "Parte 1 · El Presente de Subjuntivo & la Opinión",
        "part_file": "part-1.html",
        "cando": "Puede expresar opiniones con matices de duda, probabilidad e incertidumbre.",
        "one_liner": "El subjuntivo se usa tras verbos de opinión en forma negativa (no creo que) y expresiones de duda o probabilidad (dudo que, es probable que).",
        "why_matters": "Es la estructura fundamental del nivel B1 en español para matizar ideas en un debate y evitar sonar categórico.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Estructura</th><th>Modo requerido</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><b>Creo que / Pienso que (Afirmativo)</b></td><td>Indicativo</td><td>Creo que María <b>tiene</b> razón.</td></tr>
<tr><td><b>No creo que / No pienso que (Negativo)</b></td><td>Subjuntivo</td><td>No creo que María <b>tenga</b> razón.</td></tr>
<tr><td><b>Dudo que / Es probable que</b></td><td>Subjuntivo</td><td>Dudo que <b>vengan</b> a tiempo.</td></tr>
</tbody>
</table></div>""",
        "example_code": "No me parece que esta <span style='color:var(--grammar-verb);'>sea</span> la mejor opción.",
        "notice": "👀 Observa: Para verbes en -AR la vocal temática en subjuntivo es -e ; para -ER/-IR es -a.",
        "think_native": "🧠 Piensa en español: El indicativo afirma la realidad percibida ; el subjuntivo abre la hipótesis o la valoración mental.",
        "signature_box": "🧩 Regla de oro: Afirmación = Indicativo. Niegas la opinión o dudas = Subjuntivo.",
        "mistakes": [
            {"wrong": "No creo que él viene hoy.", "right": "No creo que él venga hoy."},
            {"wrong": "Creo que no viene (con subjuntivo en la afirmativa).", "right": "Creo que no viene (indicativo tras afirmativo)."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: Opinión negativa = ¡Salto al Subjuntivo !",
        "connects": ["subjuntivo-deseo-y-voluntad", "causa-y-consecuencia"],
        "checklist": ["Usar el subjuntivo tras 'no creo que'", "Usar indicativo tras 'creo que' afirmativo"],
        "quiz": [
            {"q": "¿Qué opción es correcta ?", "opts": ["No creo que sea necesario.", "No creo que es necesario.", "No creo que será necesario."], "correct": 0, "explain": "Tras 'no creo que' la regla exige el presente de subjuntivo 'sea'."}
        ]
    },
    "subjuntivo-deseo-y-voluntad": {
        "title": "El Subjuntivo con Verbos de Deseo y Voluntad",
        "subtitle": "Quiero que... / Espero que... / Ojalá (que)...",
        "part_title": "Parte 1 · El Presente de Subjuntivo & la Opinión",
        "part_file": "part-1.html",
        "cando": "Puede expresar deseos, expectativas y peticiones dirigidas a otras personas.",
        "one_liner": "Usamos subjuntivo tras verbos de deseo (querer, esperar, desear) cuando el sujeto de la principal y la subordinada son diferentes.",
        "why_matters": "Imprescindible para felicitar, hacer buenos deseos, dar instrucciones o expresar expectativas hacia los demás.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo / Expresión</th><th>Estructura</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><b>Espero que</b></td><td>+ Subjuntivo</td><td>Espero que <b>tengas</b> un buen viaje.</td></tr>
<tr><td><b>Quiero que</b></td><td>+ Subjuntivo</td><td>Quiero que nos <b>ayudes</b> hoy.</td></tr>
<tr><td><b>Ojalá (que)</b></td><td>+ Subjuntivo</td><td>Ojalá <b>haga</b> buen tiempo.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Ojalá que todo <span style='color:var(--grammar-subject);'>nos</span> <span style='color:var(--grammar-verb);'>salga</span> bien.",
        "notice": "👀 Observa: 'Ojalá' siempre exige el subjuntivo (proviene del árabe 'aw šā' allāh' : si Dios quiere).",
        "think_native": "🧠 Piensa en español: El deseo proyecta una meta aún no realizada, por eso requiere subjuntivo.",
        "signature_box": "🧩 Regla de oro: Mismo sujeto = Infinitivo (Quiero viajar). Distinto sujeto = Subjuntivo (Quiero que viajes).",
        "mistakes": [
            {"wrong": "Espero que tú vienes pronto.", "right": "Espero que tú vengas pronto."},
            {"wrong": "Quiero que yo vaya al cine.", "right": "Quiero ir al cine."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡Ojalá y deseos siempre con Subjuntivo !",
        "connects": ["presente-de-subjuntivo-opinion-duda", "conectores-discursivos-y-debate"],
        "checklist": ["Usar espero que + subjuntivo para deseos", "Distinguir estructura de sujeto único e infintivo"],
        "quiz": [
            {"q": "Completa: 'Ojalá mañana no ____ (llover).'", "opts": ["llueva", "llueve", "lloverá"], "correct": 0, "explain": "'Ojalá' exige presente de subjuntivo: 'llueva'."}
        ]
    },
    "causa-y-consecuencia": {
        "title": "La Causa y la Consecuencia en el Discurso",
        "subtitle": "Porque / Como / Ya que vs Por lo tanto / Así que",
        "part_title": "Parte 2 · Estructurar la Argumentación",
        "part_file": "part-2.html",
        "cando": "Puede argumentar la causa y el resultado de un hecho con fluidez.",
        "one_liner": "Para la causa se usa porque, como (a principio de frase), ya que ; para la consecuencia por lo tanto, así que, de modo que.",
        "why_matters": "Permite hilar explicaciones lógicas y justificar decisiones en conversaciones formales e informales de nivel B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Relación</th><th>Conector</th><th>Posición</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><b>Causa al inicio</b></td><td>Como / Ya que</td><td>Principio de frase</td><td><b>Como</b> llovía, no salimos.</td></tr>
<tr><td><b>Causa central</b></td><td>Porque / Dado que</td><td>En medio de frase</td><td>No salimos <b>porque</b> llovía.</td></tr>
<tr><td><b>Consecuencia</b></td><td>Así que / Por lo tanto</td><td>Consecuencia lógica</td><td>Tengo examen, <b>así que</b> voy a estudiar.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Como</span> hacía frío, nos <span style='color:var(--grammar-verb);'>quedamos</span> en casa.",
        "notice": "👀 Observa: 'Como' causativo se coloca SIEMPRE al inicio de la oración.",
        "think_native": "🧠 Piensa en español: 'Por lo tanto' es más formal ; 'así que' es muy habitual en el habla cotidiana.",
        "signature_box": "🧩 Regla de oro: Causa delante = Como. Causa detrás = Porque.",
        "mistakes": [
            {"wrong": "Porque llovía, no salimos. (al inicio)", "right": "Como llovía, no salimos."},
            {"wrong": "Como llovía por lo tanto no salimos.", "right": "Como llovía, no salimos."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: ¡Como abre la frase, Porque la explica en medio !",
        "connects": ["conectores-discursivos-y-debate"],
        "checklist": ["Usar 'como' causativo al inicio de frase", "Expresar consecuencias con 'así que' y 'por lo tanto'"],
        "quiz": [
            {"q": "¿Qué conector se debe usar al principio de la frase ?", "opts": ["Como", "Porque", "Por lo tanto"], "correct": 0, "explain": "A principio de frase para expresar causa se usa 'Como'."}
        ]
    },
    "conectores-discursivos-y-debate": {
        "title": "Conectores Discursivos para el Debate",
        "subtitle": "En primer lugar / Además / Sin embargo / En cambio",
        "part_title": "Parte 2 · Estructurar la Argumentación",
        "part_file": "part-2.html",
        "cando": "Puede organizar una intervención oral o escrita estructurando argumentos a favor y en contra.",
        "one_liner": "Los conectores discursivos organizan las ideas en orden (en primer lugar), añaden datos (además) o matizan posiciones (sin embargo, en cambio).",
        "why_matters": "Es la clave para intervenir con soltura en debates de opinión y exposiciones de nivel B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Función</th><th>Conectores clave</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><b>Orden</b></td><td>En primer lugar, a continuación, finalmente</td><td><b>En primer lugar</b> analicemos el problema...</td></tr>
<tr><td><b>Adición</b></td><td>Además, asimismo, por otra parte</td><td>Es barato ; <b>además</b>, es ecológico.</td></tr>
<tr><td><b>Contraste</b></td><td>Sin embargo, en cambio, no obstante</td><td>Es difícil ; <b>sin embargo</b>, es posible.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Por un lado</span> es útil, <span style='color:var(--grammar-verb);'>por otro lado</span> es costoso.",
        "notice": "👀 Observa: 'Sin embargo' y 'no obstante' van seguidos de coma al inicio de oración.",
        "think_native": "🧠 Piensa en español: Los conectores organizan el flujo del debate como la arquitectura de un puente.",
        "signature_box": "🧩 Regla de oro: Ordena (En primer lugar) ➔ Añade (Además) ➔ Contrasta (Sin embargo) ➔ Concluye (En conclusión).",
        "mistakes": [
            {"wrong": "Además que es barato... (construcción incorrecta)", "right": "Además, es barato..."},
            {"wrong": "Sin embargo de que no viene...", "right": "Sin embargo, no viene..."}
        ],
        "mnemonic": "💡 Truco mnemotécnico: Ordena con Primero, añade con Además, matiza con Sin embargo !",
        "connects": ["causa-y-consecuencia", "presente-de-subjuntivo-opinion-duda"],
        "checklist": ["Organizar una presentación en tres partes", "Usar 'sin embargo' para matizar una objeción"],
        "quiz": [
            {"q": "¿Qué conector introduce un contraste u objeción ?", "opts": ["Sin embargo", "Además", "Por lo tanto"], "correct": 0, "explain": "'Sin embargo' se utiliza para oponer o matizar dos argumentos."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../espanol-b1.html" if is_topic else "../../../espanol-b1.html"
    nav_links = [f'<a href="{hub_link}">← Hub Español B1</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Gramática B1</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manual de Gramática Española (B1) · Edición Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Volver al inicio COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Spanish B1 Grammar Manual...")
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
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Errores frecuentes</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 ¿Puedes usar ya esta estructura ?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnóstico y Cuestionario</h2><span class="quiz-score">Score: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 En relación con...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Gramática Española B1</title>
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
  <div class="outcome-banner">🎯 <strong>Objetivo de comunicación :</strong> {top["cando"]}</div>
  <p><strong>En resumen :</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>¿Por qué es importante ?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Ejemplo en colores</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>¡Enhorabuena !</strong> Ya dominas esta estructura clave del nivel B1.</div>
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
<title>{p["title"]} · COSYlanguages B1</title>
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
<title>Gramática Española Nivel B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Nivel B1</span>
    <h1>Gramática Española (B1)</h1>
    <p class="subtitle">Manual interactivo monolingüe de gramática española nivel intermedio (B1).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Spanish B1 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

#!/usr/bin/env python3
"""
Generator script for COSYlanguages Italian Grammar Manual (Level B1) Interactive Web Edition.
Generates manuals/it/grammar/b1/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/it/grammar/b1/topics/.
100% Monolingual Italian.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/it/grammar/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manuale di Grammatica Italiana Livello B1 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --blue-900: #0f2c59;
  --blue-800: #183d7a;
  --blue-700: #225299;
  --blue-600: #2d68c4;
  --blue-100: #e8f0fe;
  --blue-050: #f4f7fd;

  --ink: #131c2b;
  --ink-soft: #3c4c5e;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e3e7f0;

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
  --shadow-card: 0 2px 8px rgba(15,44,89,.06);
  --shadow-hover: 0 8px 24px rgba(15,44,89,.12);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
}
a { color: var(--blue-700); text-decoration: none; transition: color .15s ease; }
a:hover { color: var(--blue-900); }

.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

/* Topbar */
.topbar {
  position: sticky; top: 0; z-index: 50; background: var(--blue-900);
  color: #fff; border-bottom: 1px solid rgba(255,255,255,.1);
}
.topbar-inner {
  max-width: 1100px; margin: 0 auto; padding: 12px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-weight: 800; font-family: var(--font-display); }
.brand-mark { background: #fff; color: var(--blue-900); width: 30px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #d0e1fd; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.18); color: #fff; }

/* Page Head */
.page-head { padding: 32px 0 16px; }
.eyebrow {
  display: inline-block; font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--blue-700); background: var(--blue-100);
  padding: 4px 12px; border-radius: 99px; margin-bottom: 12px;
}
.page-head h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

/* Outcome banner & Callout boxes */
.outcome-banner { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--mint-ink); font-weight: 500; }
.box { border-radius: var(--radius-m); padding: 20px; margin: 20px 0; border: 1px solid transparent; }
.box h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 16.5px; font-weight: 800; }
.box.why { background: var(--why-bg); border-color: #fcd34d; color: var(--why-ink); }
.box.native { background: var(--native-bg); border-color: #d8b4fe; color: var(--native-ink); }
.box.rule-box { background: var(--blue-050); border: 1px solid var(--blue-100); border-left: 4px solid var(--blue-600); }

/* Tables */
.table-wrap { overflow-x: auto; margin: 20px 0; border-radius: var(--radius-m); border: 1px solid var(--line); box-shadow: var(--shadow-card); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th { background: var(--blue-900); color: #fff; text-align: left; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; }
tbody td { padding: 12px 16px; border-bottom: 1px solid var(--line); }

/* Mistakes */
.mistakes { margin: 24px 0; }
.mistakes .m-title { font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--mistake-ink); margin-bottom: 12px; }
.mflip { background: var(--mistake-bg); border: 1px solid #fca5a5; border-radius: var(--radius-s); padding: 14px 18px; margin-bottom: 10px; cursor: pointer; }
.mflip .wrong-line { display: flex; gap: 8px; color: var(--mistake-ink); font-size: 15.5px; }
.mflip .wrong-text { text-decoration: line-through; }
.mflip .right-line { display: none; gap: 8px; color: var(--mint-ink); font-weight: 700; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #fca5a5; }
.mflip.flipped .right-line { display: flex; }
.mflip .hint { font-family: var(--font-mono); font-size: 11px; color: #b91c1c; margin-top: 4px; display: block; }
.mflip.flipped .hint { display: none; }

/* Checklist */
.checklist { background: var(--mint-bg); border: 1px solid #86efac; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--mint-ink); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; cursor: pointer; }
.check-item input { width: 18px; height: 18px; accent-color: var(--blue-700); }

/* Quiz */
.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--blue-100); color: var(--blue-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qitem .qtext { font-family: var(--font-display); font-weight: 800; margin-bottom: 12px; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--blue-050); border-left: 3px solid var(--blue-600); padding: 10px 14px; }
.qexplain.show { display: block; }

/* Grid / Cards */
.parts-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.part-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.part-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--blue-600); }
.part-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--blue-900); color: #d0e1fd; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages B1 Grammatica Italiana · Interattività
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-it-b1-' + box.getAttribute('data-key');
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
        "title": "Parte 1 · Il Congiuntivo Presente & l'Opinione",
        "short_title": "Parte 1",
        "subtitle": "Esprimere opinioni, dubbi, desideri e speranze.",
        "stripe": "#2563eb",
        "topics": ["il-congiuntivo-presente-opinione", "il-congiuntivo-con-verbi-di-desiderio"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Parte 2 · Strutturare il Discorso",
        "short_title": "Parte 2",
        "subtitle": "Esprimere causa, conseguenza e connettori discorsivi avanzati.",
        "stripe": "#16a34a",
        "topics": ["causa-e-conseguenza-avanzata", "connettori-discorsivi-ed-argomentazione"]
    }
]

TOPICS = {
    "il-congiuntivo-presente-opinione": {
        "title": "Il Congiuntivo Presente — Opinione e Dubbio",
        "subtitle": "Penso che... / Non credo che... / È probabile che...",
        "part_title": "Parte 1 · Il Congiuntivo Presente & l'Opinione",
        "part_file": "part-1.html",
        "cando": "Sa esprimere un'opinione personale con sfumature di dubbio e incertezza.",
        "one_liner": "Il congiuntivo presente si usa nelle frasi subordinate dopo verbi che esprimono opinione (pensare, credere, ritenere) o dubbio (dubitare, non essere sicuri).",
        "why_matters": "È il salto di qualità dal livello A2 al B1 in italiano: passa dalle certezze della realtà (indicativo) al mondo delle idee e delle opinioni.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo principale</th><th>Modo richiesto</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>Penso che / Credo che</b></td><td>Congiuntivo Presente</td><td>Penso che Luca <b>sia</b> a casa.</td></tr>
<tr><td><b>Non sono sicuro che</b></td><td>Congiuntivo Presente</td><td>Non sono sicuro che <b>arrivino</b> in tempo.</td></tr>
<tr><td><b>È bene che / È strano che</b></td><td>Congiuntivo Presente</td><td>È strano che non <b>risponda</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Credo che <span style='color:var(--grammar-subject);'>Marco</span> <span style='color:var(--grammar-verb);'>abbia</span> ragione.",
        "notice": "👀 Nota: Per i verbi in -are la desinenza delle prime tre persone singolari è -i (io parli, tu parli, lui parli) ; per -ere/-ire è -a (io prenda, tu prenda, lui prenda).",
        "think_native": "🧠 Pensa in italiano: L'indicativo dichiara quello che è vero ; il congiuntivo esprime ciò che pensa la tua mente.",
        "signature_box": "🧩 Regola d'oro: Stesso soggetto = Di + Infinito (Penso di avere ragione). Soggetti diversi = Che + Congiuntivo (Penso che tu abbia ragione).",
        "mistakes": [
            {"wrong": "Penso che lui è a casa.", "right": "Penso che lui sia a casa."},
            {"wrong": "Penso che io sia stanco.", "right": "Penso di essere stanco."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Opinione + Che + Soggetti diversi = Congiuntivo !",
        "connects": ["il-congiuntivo-con-verbi-di-desiderio", "causa-e-conseguenza-avanzata"],
        "checklist": ["Usare il congiuntivo presente dopo 'penso che' e 'credo che'", "Distinguere la struttura con infinito (stesso soggetto) e congiuntivo"],
        "quiz": [
            {"q": "Quale frase è corretta ?", "opts": ["Credo che Paolo sia in ritardo.", "Credo che Paolo è in ritardo.", "Credo che Paolo sarà in ritardo."], "correct": 0, "explain": "Dopo 'credo che' si usa il congiuntivo presente 'sia'."}
        ]
    },
    "il-congiuntivo-con-verbi-di-desiderio": {
        "title": "Il Congiuntivo con Verbi di Desiderio e Speranza",
        "subtitle": "Spero che... / Voglio che... / Preferisco che...",
        "part_title": "Parte 1 · Il Congiuntivo Presente & l'Opinione",
        "part_file": "part-1.html",
        "cando": "Sa esprimere desideri, speranze e preferenze rivolte ad altre persone.",
        "one_liner": "Si usa il congiuntivo dopo verbi come sperare, volere, desiderare, preferire quando l'azione dipende da un'altra persona.",
        "why_matters": "Fondamentale per fare auguri, esprimere aspettative o formulare richieste con garbo e correttezza sintattica.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo di sentimento</th><th>Costruzione</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>Sperare che</b></td><td>+ Congiuntivo Presente</td><td>Spero che tu <b>stia</b> bene.</td></tr>
<tr><td><b>Volere che</b></td><td>+ Congiuntivo Presente</td><td>Voglio che voi <b>studiate</b>.</td></tr>
<tr><td><b>Preferire che</b></td><td>+ Congiuntivo Presente</td><td>Preferisco che <b>venga</b> domani.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Spero che <span style='color:var(--grammar-subject);'>tutto</span> <span style='color:var(--grammar-verb);'>vada</span> bene.",
        "notice": "👀 Nota: Il verbo 'sperare' richiede il congiuntivo quando si riferisce al presente/futuro incerto.",
        "think_native": "🧠 Pensa in italiano: Il desiderio proietta un'aspettativa emotiva, per questo richiede il congiuntivo.",
        "signature_box": "🧩 Regola d'oro: Spero di + infinito (per me) vs Spero che + congiuntivo (per te/altri).",
        "mistakes": [
            {"wrong": "Spero che tu vieni domani.", "right": "Spero che tu venga domani."},
            {"wrong": "Spero che io superi l'esame.", "right": "Spero di superare l'esame."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Speranza per gli altri = sempre Congiuntivo !",
        "connects": ["il-congiuntivo-presente-opinione", "connettori-discorsivi-ed-argomentazione"],
        "checklist": ["Usare spero che + congiuntivo per gli auguri", "Riconoscere le forme irregolari di congiuntivo (sia, abbia, faccia, vada)"],
        "quiz": [
            {"q": "Completa: 'Spero che voi ____ (fare) un buon viaggio.'", "opts": ["facciate", "fate", "faranno"], "correct": 0, "explain": "Il congiuntivo presente di fare per 'voi' è 'facciate'."}
        ]
    },
    "causa-e-conseguenza-avanzata": {
        "title": "L'Espressione della Causa e della Conseguenza",
        "subtitle": "Poiché / Siccome vs Pertanto / Di conseguenza",
        "part_title": "Parte 2 · Strutturare il Discorso",
        "part_file": "part-2.html",
        "cando": "Sa spiegare in modo fluido le ragioni e gli effetti di un fatto.",
        "one_liner": "Per la causa si usano poiché, siccome, dato che (a inizio frase) ; per la conseguenza pertanto, quindi, di conseguenza.",
        "why_matters": "Permette di costruire argomentazioni logiche e ben articolate nel parlato formale e nello scritto B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Relazione</th><th>Connettivo</th><th>Posizione tipica</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>Causa a inizio frase</b></td><td>Siccome / Poiché</td><td>Inizio della frase</td><td><b>Siccome</b> piove, resto a casa.</td></tr>
<tr><td><b>Causa nel mezzo</b></td><td>Perché / Dato che</td><td>Nel mezzo della frase</td><td>Resto a casa <b>perché</b> piove.</td></tr>
<tr><td><b>Conseguenza</b></td><td>Quindi / Pertanto</td><td>Seguito logico</td><td>Non ho studiato, <b>pertanto</b> non esco.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Siccome</span> fa freddo, <span style='color:var(--grammar-verb);'>quindi</span> mettiti il cappotto.",
        "notice": "👀 Nota: 'Siccome' si usa quasi sempre all'inizio della frase e non si combina mai nella stessa frase con 'quindi'.",
        "think_native": "🧠 Pensa in italiano: 'Poiché' è più formale, 'Siccome' è molto comune nel parlato quotidiano.",
        "signature_box": "🧩 Regola d'oro: Causa in testa = Siccome / Poiché. Risultato = Pertanto / Di conseguenza.",
        "mistakes": [
            {"wrong": "Perché piove, prendo l'ombrello. (a inizio frase)", "right": "Siccome piove, prendo l'ombrello."},
            {"wrong": "Siccome sono stanco quindi vado a letto.", "right": "Siccome sono stanco, vado a letto."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Siccome APRE la frase, Perché la CHIUDE !",
        "connects": ["connettori-discorsivi-ed-argomentazione"],
        "checklist": ["Usare 'siccome' all'inizio di frase", "Esprimere conseguenze formali con 'pertanto'"],
        "quiz": [
            {"q": "Quale connettivo è corretto a inizio frase ?", "opts": ["Poiché / Siccome", "Perché", "Quindi"], "correct": 0, "explain": "A inizio frase si usa 'Poiché' o 'Siccome' per introdurre la causa."}
        ]
    },
    "connettori-discorsivi-ed-argomentazione": {
        "title": "I Connettori Discorsivi e l'Argomentazione",
        "subtitle": "In primo luogo / Inoltre / Invece / Ad ogni modo",
        "part_title": "Parte 2 · Strutturare il Discorso",
        "part_file": "part-2.html",
        "cando": "Sa organizzare un discorso o un dibattito articolando argomenti a favore e contro.",
        "one_liner": "I connettori discorsivi collegano le idee ordinandole (in primo luogo), aggiungendone altre (inoltre) o contrapponendole (invece, tuttavia).",
        "why_matters": "Essenziale per partecipare a discussioni, esporre un punto di vista o sostenere un colloquio di livello B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Funzione</th><th>Connettivi</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>Ordinare</b></td><td>In primo luogo, in seguito, infine</td><td><b>In primo luogo</b> valutiamo i costi...</td></tr>
<tr><td><b>Aggiungere</b></td><td>Inoltre, in più, per di più</td><td>È comodo. <b>Inoltre</b> è economico.</td></tr>
<tr><td><b>Contrapporre</b></td><td>Tuttavia, invece, d'altra parte</td><td>È bello ; <b>tuttavia</b> costa troppo.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Da un lato</span> è utile, <span style='color:var(--grammar-verb);'>dall'altro</span> è difficile.",
        "notice": "👀 Nota: 'Tuttavia' ed 'Invece' permettono di sfumare il contrasto senza essere troppo aggressivi.",
        "think_native": "🧠 Pensa in italiano: I connettori sono i segnali stradali della tua argomentazione.",
        "signature_box": "🧩 Regola d'oro: Struttura in 3 tempi: Ordinare (In primo luogo) ➔ Ampliare (Inoltre) ➔ Concludere (In conclusione).",
        "mistakes": [
            {"wrong": "Invece che è caro... (costruzione errata)", "right": "Invece è caro..."},
            {"wrong": "Inoltre che fa caldo...", "right": "Inoltre fa caldo..."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Ordina con Primo, amplia con Inoltre, sfuma con Tuttavia !",
        "connects": ["causa-e-conseguenza-avanzata", "il-congiuntivo-presente-opinione"],
        "checklist": ["Ordinare una presentazione in tre punti", "Usare 'tuttavia' per sfumare un'obiezione"],
        "quiz": [
            {"q": "Quale parola si usa per aggiungere un argomento ?", "opts": ["Inoltre", "Pertanto", "Siccome"], "correct": 0, "explain": "'Inoltre' si usa per aggiungere un nuovo elemento informativo."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../italiano-b1.html" if is_topic else "../../../italiano-b1.html"
    nav_links = [f'<a href="{hub_link}">← Hub Italiano B1</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Grammatica B1</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manuale di Grammatica Italiana (B1) · Edizione Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Torna alla home COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Italian B1 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">clicca per rivelare la forma corretta</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Errori frequenti</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Sai già usare questa struttura ?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnostica & Quiz</h2><span class="quiz-score">Score: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 In collegamento con...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Grammatica Italiana B1</title>
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
  <div class="outcome-banner">🎯 <strong>Obiettivo di comunicazione :</strong> {top["cando"]}</div>
  <p><strong>In sintesi :</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Perché è importante ?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Esempio a colori</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Complimenti !</strong> Ora padroneggi questa struttura essenziale del livello B1.</div>
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
<html lang="it">
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(p["topics"])} capitoli →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Grammatica Italiana Livello B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Livello B1</span>
    <h1>Grammatica Italiana (B1)</h1>
    <p class="subtitle">Manuale interattivo monolingua di grammatica italiana livello intermedio (B1).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Italian B1 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

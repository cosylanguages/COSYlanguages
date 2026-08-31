#!/usr/bin/env python3
"""
Generator script for COSYlanguages Italian Grammar Manual (Level A2) Interactive Web Edition.
Generates manuals/it/grammar/a2/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/it/grammar/a2/topics/.
100% Monolingual Italian.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/it/grammar/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manuale di Grammatica Italiana Livello A2 */
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

.page-head { padding: 32px 0 16px; }
.eyebrow {
  display: inline-block; font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--blue-700); background: var(--blue-100);
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
.box.rule-box { background: var(--blue-050); border: 1px solid var(--blue-100); border-left: 4px solid var(--blue-600); }

.table-wrap { overflow-x: auto; margin: 20px 0; border-radius: var(--radius-m); border: 1px solid var(--line); box-shadow: var(--shadow-card); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th { background: var(--blue-900); color: #fff; text-align: left; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; }
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
.check-item input { width: 18px; height: 18px; accent-color: var(--blue-700); }

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

APP_JS = """// COSYlanguages A2 Grammatica Italiana · Moteur d'Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-it-a2-' + box.getAttribute('data-key');
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
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Punteggio: ' + score + ' / ' + data.length; }
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
        "title": "Parte 1 · Il Racconto al Passato",
        "short_title": "Parte 1",
        "subtitle": "Passato prossimo con essere e avere, imperfetto e l'alternanza nei racconti.",
        "stripe": "#2563eb",
        "topics": ["passato-prossimo-essere-avere", "limperfetto-indicativo", "passato-prossimo-vs-imperfetto"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Parte 2 · Il Futuro & il Condizionale",
        "short_title": "Parte 2",
        "subtitle": "Futuro semplice, condizionale di cortesia e ipotesi al presente.",
        "stripe": "#16a34a",
        "topics": ["il-futuro-semplice", "il-condizionale-presente", "se-presente-futuro"]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Parte 3 · Pronomei, Comparativi & Obblighi",
        "short_title": "Parte 3",
        "subtitle": "Pronomei diretti e indiretti, ci e ne, comparativi e dovere/bisogna.",
        "stripe": "#d97706",
        "topics": ["pronomi-diretti-e-indiretti", "i-pronomi-ci-e-ne", "il-comparativo-e-il-superlativo", "obbligo-dovere-bisogna"]
    }
]

TOPICS = {
    "passato-prossimo-essere-avere": {
        "title": "Passato Prossimo con Avere ed Essere",
        "subtitle": "Scelta dell'ausiliare e accordo del participio passato",
        "part_title": "Parte 1 · Il Racconto al Passato",
        "part_file": "part-1.html",
        "cando": "Sa raccontare eventi passati completi e conclusi.",
        "one_liner": "Il passato prossimo esprime un'azione avvenuta in un momento preciso del passato.",
        "why_matters": "È il tempo verbale più usato nella conversazione quotidiana per raccontare weekend, vacanze ed esperienze.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Ausiliare</th><th>Uso principale</th><th>Accordo del Participio</th></tr></thead>
<tbody>
<tr><td><b>AVERE</b></td><td>Verbi transitivi (mangiare, parlare, vedere)</td><td>Invariabile in -o (ho mangiato, abbiamo parlato)</td></tr>
<tr><td><b>ESSERE</b></td><td>Verbi di movimento, stato e riflessivi</td><td>Accordo in genere e numero (è andat<b>a</b>, sono partit<b>i</b>)</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Maria</span> <span style='color:var(--grammar-verb);'>è andat<span style='color:var(--grammar-ending);'>a</span></span> a Roma.",
        "notice": "👀 Nota: Con l'ausiliare <b>essere</b>, il participio finale cambia sempre (-o, -a, -i, -e) in base al soggetto.",
        "think_native": "🧠 Pensa in italiano: I verbi di movimento con meta precisa (andare, venire, uscire, entrare) richiedono sempre <i>essere</i>.",
        "signature_box": "🧩 Struttura: Soggetto + Ausiliare (Presente) + Participio Passato.",
        "mistakes": [
            {"wrong": "Maria ha andata a Roma.", "right": "Maria è andata a Roma."},
            {"wrong": "Loro sono mangiato la pizza.", "right": "Loro hanno mangiato la pizza."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Con ESSERE il participio cambia come un aggettivo!",
        "connects": ["limperfetto-indicativo", "passato-prossimo-vs-imperfetto"],
        "checklist": ["Scegliere correttamente l'ausiliare tra avere ed essere", "Accordare il participio passato quando si usa essere"],
        "quiz": [
            {"q": "Quale frase è corretta?", "opts": ["Francesca è partita ieri.", "Francesca ha partito ieri.", "Francesca è partito ieri."], "correct": 0, "explain": "Con essere il participio si accorda al femminile singolare: partita."}
        ]
    },
    "limperfetto-indicativo": {
        "title": "L'Imperfetto Indicativo",
        "subtitle": "Descrivere abitudini, stati d'animo e contesti del passato",
        "part_title": "Parte 1 · Il Racconto al Passato",
        "part_file": "part-1.html",
        "cando": "Sa descrivere abitudini d'infanzia e situazioni passate continuate.",
        "one_liner": "L'imperfetto serve a dipingere lo sfondo e le azioni ripetute nel passato.",
        "why_matters": "Permette di raccontare 'come erano le cose una volta' e descrivere il tempo o le persone nel passato.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Soggetto</th><th>Terminazioni ARE (Parlare)</th><th>Terminazioni ERE (Prendere)</th><th>Terminazioni IRE (Dormire)</th></tr></thead>
<tbody>
<tr><td>io / tu / lui</td><td>parlavo / parlavi / parlava</td><td>prendevo / prendevi / prendeva</td><td>dormivo / dormivi / dormiva</td></tr>
<tr><td>noi / voi / loro</td><td>parlavamo / parlavate / parlavano</td><td>prendevamo / prendevate / prendevano</td><td>dormivamo / dormivate / dormivano</td></tr>
</tbody>
</table></div>""",
        "example_code": "Da piccolo <span style='color:var(--grammar-subject);'>io</span> <span style='color:var(--grammar-verb);'>giocav<span style='color:var(--grammar-ending);'>o</span></span> sempre al parco.",
        "notice": "👀 Nota: Le desinenze dell'imperfetto contengono quasi sempre la lettera <b>v</b> (vo, vi, va, vamo, vate, vano).",
        "think_native": "🧠 Pensa in italiano: L'imperfetto è un'azione aperta senza un inizio o una fine definiti nel racconto.",
        "signature_box": "🧩 Regola d'oro: Radice del verbo + v + desinenza personale.",
        "mistakes": [
            {"wrong": "Da bambino ho giocato ogni giorno.", "right": "Da bambino giocavo ogni giorno."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Trova la 'V' di VECCHIE abitudini per l'imperfetto!",
        "connects": ["passato-prossimo-essere-avere", "passato-prossimo-vs-imperfetto"],
        "checklist": ["Riconoscere le desinenze con la V", "Usare l'imperfetto per azioni abituali passate"],
        "quiz": [
            {"q": "Qual è la forma corretta per 'noi' all'imperfetto di 'andare'?", "opts": ["Andavamo", "Andiamo", "Siamo andati"], "correct": 0, "explain": "Radice and- + -avamo = andavamo."}
        ]
    },
    "passato-prossimo-vs-imperfetto": {
        "title": "Passato Prossimo vs Imperfetto",
        "subtitle": "L'alternanza tra sfondo narrativo ed evento interruttivo",
        "part_title": "Parte 1 · Il Racconto al Passato",
        "part_file": "part-1.html",
        "cando": "Sa combinare la descrizione di uno sfondo con un evento improvviso.",
        "one_liner": "L'imperfetto fa da cornice scenica (sfondo), il passato prossimo inserisce l'evento (azione).",
        "why_matters": "È il segreto per raccontare storie fluide ed avvincenti in italiano.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Tempo Verbale</th><th>Ruolo Narrativo</th><th>Parola Spia</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>Imperfetto</b></td><td>Azione in corso / Sfondo</td><td>Mentre...</td><td>Mentre <b>dormivo</b>...</td></tr>
<tr><td><b>Passato Prossimo</b></td><td>Azione improvvisa / Conclusa</td><td>All'improvviso / Quando...</td><td>...il telefono <b>ha squillato</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Mentre <span style='color:var(--grammar-verb);'>camminavo</span>, <span style='color:var(--grammar-verb);'>ho incontrato</span> Luca.",
        "notice": "👀 Nota: 'Mentre' richiede quasi sempre l'imperfetto.",
        "think_native": "🧠 Pensa in italiano: L'imperfetto è il video continuo, il passato prossimo è la scatto della fotocamera.",
        "signature_box": "🧩 Struttura: [Mentre + Imperfetto] + [Passato Prossimo].",
        "mistakes": [
            {"wrong": "Mentre ho camminato, ho visto un cane.", "right": "Mentre camminavo, ho visto un cane."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Imperfetto DESCRIVE, Passato Prossimo INTERROMPE!",
        "connects": ["passato-prossimo-essere-avere", "limperfetto-indicativo"],
        "checklist": ["Distinguere l'azione di sfondo dall'evento improvviso", "Usare 'mentre' con l'imperfetto"],
        "quiz": [
            {"q": "Scegli la forma corretta: 'Ieri mentre ____ (piovere), io ____ (uscire) di casa.'", "opts": ["pioveva / sono uscito", "è piovuto / uscivo", "pioveva / uscivo"], "correct": 0, "explain": "Piovere è lo sfondo (pioveva), uscire è l'evento preciso (sono uscito)."}
        ]
    },
    "il-futuro-semplice": {
        "title": "Il Futuro Semplice",
        "subtitle": "Pianificare il futuro, fare previsioni ed esprimere ipotesi",
        "part_title": "Parte 2 · Il Futuro & il Condizionale",
        "part_file": "part-2.html",
        "cando": "Sa esprimere progetti futuri, previsioni e promesse.",
        "one_liner": "Il futuro si forma sulla radice dell'infinito con le desinenze -erò, -erai, -erà, -eremo, -erete, -eranno.",
        "why_matters": "Indispensabile per parlare dei propri progetti lavorativi, dei viaggi di domani e del meteo.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Soggetto</th><th>Desinenze ARE/ERE</th><th>Esempio (Parlare ➔ Parler-)</th></tr></thead>
<tbody>
<tr><td>io / tu / lui</td><td>-erò / -erai / -erà</td><td>parlerò, parlerai, parlerà</td></tr>
<tr><td>noi / voi / loro</td><td>-eremo / -erete / -eranno</td><td>parleremo, parlerete, parleranno</td></tr>
</tbody>
</table></div>""",
        "example_code": "Domani <span style='color:var(--grammar-subject);'>noi</span> <span style='color:var(--grammar-verb);'>partir<span style='color:var(--grammar-ending);'>emo</span></span> per la Sicilia.",
        "notice": "👀 Nota: Per i verbi in -ARE, la 'a' dell'infinito diventa 'e' (parlare ➔ parlerò).",
        "think_native": "🧠 Pensa in italiano: I verbi irregolari principali hanno radici brevi: essere (sar-), avere (avr-), andare (andr-), fare (far-).",
        "signature_box": "🧩 Regola d'oro: Radice dell'infinito + desinenze del futuro.",
        "mistakes": [
            {"wrong": "Domani io parlaremo con il direttore.", "right": "Domani io parlerò con il direttore."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Ricorda che ARE passa ad ER (cantare ➔ canterò)!",
        "connects": ["il-condizionale-presente", "se-presente-futuro"],
        "checklist": ["Formare il futuro dei verbi regolari", "Riconoscere le radici brevi dei verbi irregolari"],
        "quiz": [
            {"q": "Qual è il futuro di 'andare' per 'io'?", "opts": ["Andrò", "Anderò", "Andaro"], "correct": 0, "explain": "'Andare' ha la radice irregolare 'andr-' ➔ andrò."}
        ]
    },
    "il-condizionale-presente": {
        "title": "Il Condizionale Presente",
        "subtitle": "La cortesia, i desideri ed i consigli",
        "part_title": "Parte 2 · Il Futuro & il Condizionale",
        "part_file": "part-2.html",
        "cando": "Sa ordinare al ristorante e chiedere informazioni con garbo.",
        "one_liner": "Il condizionale usa la stessa radice del futuro con le desinenze dell'imperfetto/condizionale (-erei, -eresti, -erebbe...).",
        "why_matters": "Essenziale per la vita sociale in Italia: chiedere un caffè con 'vorrei' è molto più naturale di 'voglio'.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Verbo</th><th>Forma di Cortesia (Io)</th><th>Significato / Uso</th></tr></thead>
<tbody>
<tr><td><b>Volere</b></td><td>Vorrei</td><td>Vorrei un caffè, per favore. (Desiderio)</td></tr>
<tr><td><b>Potere</b></td><td>Potrei</td><td>Potrei avere il conto? (Richiesta gentile)</td></tr>
<tr><td><b>Dovere</b></td><td>Dovresti</td><td>Dovresti riposare di più. (Consiglio)</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Io</span> <span style='color:var(--grammar-verb);'>vorr<span style='color:var(--grammar-ending);'>ei</span></span> un bicchiere d'acqua.",
        "notice": "👀 Nota: 'Vorrei' e 'Potrei' sono le formule magiche dell'educazione in italiano.",
        "think_native": "🧠 Pensa in italiano: Il condizionale ammorbidisce le richieste trasformandole in inviti piacevoli.",
        "signature_box": "🧩 Struttura: Radice del Futuro + desinenze (-erei, -eresti, -erebbe, -eremmo, -ereste, -ebbero).",
        "mistakes": [
            {"wrong": "Voglio un caffè! (troppo diretto)", "right": "Vorrei un caffè, per favore."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Radice del Futuro + Finale dolce = Condizionale di cortesia!",
        "connects": ["il-futuro-semplice", "se-presente-futuro"],
        "checklist": ["Usare 'vorrei' per ordinare al bar o ristorante", "Usare 'potrei' per chiedere un favore"],
        "quiz": [
            {"q": "Come si chiede con cortesia un'informazione?", "opts": ["Potrei chiedere un'informazione?", "Posso chiedere subito!", "Devo chiedere!"], "correct": 0, "explain": "'Potrei' al condizionale esprime massima cortesia."}
        ]
    },
    "se-presente-futuro": {
        "title": "L'Ipotesi al Presente (Se + Presente...)",
        "subtitle": "Esprimere condizioni reali e le loro conseguenze",
        "part_title": "Parte 2 · Il Futuro & il Condizionale",
        "part_file": "part-2.html",
        "cando": "Sa formulare ipotesi reali e progetti condizionati al futuro.",
        "one_liner": "Se + presente indicativo ➔ futuro semplice (o presente indicativo).",
        "why_matters": "Permette di organizzare piani: 'Se fa bel tempo, andremo al mare'.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Condizione (Se...)</th><th>Conseguenza / Risultato</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>Se + Presente</b></td><td>Futuro Semplice</td><td>Se <b>ho</b> tempo, ti <b>chiamerò</b> stasera.</td></tr>
<tr><td><b>Se + Presente</b></td><td>Presente Indicativo</td><td>Se <b>studii</b>, <b>impari</b> in fretta.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Se <span style='color:var(--grammar-verb);'>fà</span> bel tempo, <span style='color:var(--grammar-verb);'>andremo</span> in spiaggia.",
        "notice": "👀 Nota: Nella lingua parlata si usa spesso il presente anche nella conseguenza (Se ho tempo, vengo).",
        "think_native": "🧠 Pensa in italiano: 'Se' introduce la condizione di partenza per sbloccare l'azione futura.",
        "signature_box": "🧩 Regola: Se + Presente ➔ Futuro Semplice.",
        "mistakes": [
            {"wrong": "Se avrò tempo, verrò. (evitare doppio futuro con se)", "right": "Se ho tempo, verrò."}
        ],
        "mnemonic": "💡 Trucco mnemonico: Dopo SE metti il PRESENTE per aprire il FUTURO!",
        "connects": ["il-futuro-semplice", "il-condizionale-presente"],
        "checklist": ["Usare il presente dopo la congiunzione 'se'", "Usare il futuro nella frase principale"],
        "quiz": [
            {"q": "Completa la frase: 'Se ____ (piovere), non usciremo.'", "opts": ["piove", "pioverà", "piovuto"], "correct": 0, "explain": "Dopo 'se' si usa il presente indicativo: piove."}
        ]
    },
    "pronomi-diretti-e-indiretti": {
        "title": "I Pronomei Diretti e Indiretti",
        "subtitle": "Sostituire oggetti e persone (mi, ti, lo, la, ci, vi, li, le / gli, le)",
        "part_title": "Parte 3 · Pronomei, Comparativi & Obblighi",
        "part_file": "part-3.html",
        "cando": "Sa evitare noiose ripetizioni nei dialoghi quotidiani.",
        "one_liner": "Diretti (Chi? Che cosa?) = mi, ti, lo, la, ci, vi, li, le. Indiretti (A chi?) = mi, ti, gli, le, ci, vi, gli/loro.",
        "why_matters": "È il passo fondamentale per parlare in modo fluido come un madrelingua.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Persona</th><th>Pronomei Diretti (Chi? Cosa?)</th><th>Pronomei Indiretti (A chi?)</th></tr></thead>
<tbody>
<tr><td>3a Sing. Maschile</td><td><b>LO</b> (Vedo Marco ➔ Lo vedo)</td><td><b>GLI</b> (Parlo a Marco ➔ Gli parlo)</td></tr>
<tr><td>3a Sing. Femminile</td><td><b>LA</b> (Vedo Anna ➔ La vedo)</td><td><b>LE</b> (Parlo ad Anna ➔ Le parlo)</td></tr>
<tr><td>3a Plurale</td><td><b>LI / LE</b> (Vedo i libri / le case)</td><td><b>GLI</b> (Parlo agli amici ➔ Gli parlo)</td></tr>
</tbody>
</table></div>""",
        "example_code": "Marco? Non <span style='color:var(--grammar-object);'>lo</span> vedo da giorni, ma <span style='color:var(--grammar-object);'>gli</span> ho scritto ieri.",
        "notice": "👀 Nota: Il pronomo si mette prima del verbo coniugato (Lo guardo / Gli telefono).",
        "think_native": "🧠 Pensa in italiano: Se c'è la preposizione 'A' davanti alla persona (a Maria, a Paolo), si usa il pronomo indiretto (LE, GLI).",
        "signature_box": "🧩 Regola: Senza preposizione = Diretto. Con 'A' = Indiretto.",
        "mistakes": [
            {"wrong": "Io vedo lui.", "right": "Io lo vedo."},
            {"wrong": "Io parlo a lei ➔ Io la parlo.", "right": "Io le parlo."}
        ],
        "mnemonic": "💡 Trucco mnemonico: GLI = a lui / LE = a lei !",
        "connects": ["i-pronomi-ci-e-ne", "il-comparativo-e-il-superlativo"],
        "checklist": ["Distinguere pronomi diretti e indiretti alla 3a persona", "Posizionare il pronomo prima del verbo"],
        "quiz": [
            {"q": "Come si sostituisce 'a Maria' in 'Ho telefonato a Maria'?", "opts": ["Le ho telefonato", "La ho telefonata", "Gli ho telefonato"], "correct": 0, "explain": "'A Maria' richiede il pronomo indiretto femminile 'le'."}
        ]
    },
    "i-pronomi-ci-e-ne": {
        "title": "I Pronomei CI e NE",
        "subtitle": "Sostituire luoghi, argomenti e quantità",
        "part_title": "Parte 3 · Pronomei, Comparativi & Obblighi",
        "part_file": "part-3.html",
        "cando": "Sa rispondere prontamente a domande su luoghi e quantità.",
        "one_liner": "CI sostituisce luoghi e frasi introdotte da A/IN ; NE sostituisce quantità o frasi introdotte da DI.",
        "why_matters": "I pronomi Ci e Ne compaiono continuamente nelle conversazioni e nelle risposte brevi quotidiane.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Pronome</th><th>Funzione Principale</th><th>Domanda Spia</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>CI</b></td><td>Luogo (in quel posto) / A ciò</td><td>Dove? A cosa?</td><td>Vai a Roma? ➔ Sì, <b>ci</b> vado domani.</td></tr>
<tr><td><b>NE</b></td><td>Quantità / Di ciò</td><td>Quanto? Di cosa?</td><td>Quanti caffè vuoi? ➔ <b>Ne</b> prendo uno.</td></tr>
</tbody>
</table></div>""",
        "example_code": "In Italia? <span style='color:var(--grammar-verb);'>Ci</span> vado ogni estate e <span style='color:var(--grammar-verb);'>ne</span> sono innamorato.",
        "notice": "👀 Nota: Quando si usa NE con un numero, il numero si specifica alla fine (Ne voglio due).",
        "think_native": "🧠 Pensa in italiano: CI è una freccia verso un luogo ; NE è una porzione presa da un totale.",
        "signature_box": "🧩 Formula: CI = A/IN + Luogo. NE = DI + Quantità.",
        "mistakes": [
            {"wrong": "Vai a Milano? ➔ Sì, la vado.", "right": "Vai a Milano? ➔ Sì, ci vado."},
            {"wrong": "Vuoi della pizza? ➔ Sì, la voglio due fette.", "right": "Sì, ne voglio due fette."}
        ],
        "mnemonic": "💡 Trucco mnemonico: CI punta al Luogo, NE conta la Porzione!",
        "connects": ["pronomi-diretti-e-indiretti"],
        "checklist": ["Sostituire un luogo con CI", "Espressare una quantità parziale con NE"],
        "quiz": [
            {"q": "Rispondi alla domanda: 'Quanti libri leggi all'anno?'", "opts": ["Ne leggo cinque.", "Ci leggo cinque.", "Li leggo cinque."], "correct": 0, "explain": "Con i numeri e le quantità si usa il pronomo partitivo NE."}
        ]
    },
    "il-comparativo-e-il-superlativo": {
        "title": "Il Comparativo e il Superlativo",
        "subtitle": "Confrontare qualità e fare graduatoria di eccellenza",
        "part_title": "Parte 3 · Pronomei, Comparativi & Obblighi",
        "part_file": "part-3.html",
        "cando": "Sa confrontare due oggetti, città o persone ed esprimere il massimo grado.",
        "one_liner": "Più... di / meno... di (maggioranza/minoranza) ; il più... di (superlativo relativo) ; -issimo (superlativo assoluto).",
        "why_matters": "Indispensabile per fare shopping, scegliere alberghi o esprimere opinioni personale.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Grado</th><th>Struttura</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td>Maggioranza (+)</td><td><b>più + aggettivo + di</b></td><td>Roma è <b>più grande di</b> Firenze.</td></tr>
<tr><td>Uguaglianza (=)</td><td><b>così... come / tanto... quanto</b></td><td>Luca è <b>alto come</b> Paolo.</td></tr>
<tr><td>Superlativo Assoluto</td><td><b>radice + issimo/a/i/e</b></td><td>Questo gelato è <b>buonissimo</b>!</td></tr>
</tbody>
</table></div>""",
        "example_code": "La pizza è <span style='color:var(--grammar-verb);'>più buona</span> del panino ed è <span style='color:var(--grammar-verb);'>buonissima</span>!",
        "notice": "👀 Nota: Davanti ai nomi propri si usa 'di' (più alto di Marco) ; davanti alle preposizioni articolate si usa del/della/degli.",
        "think_native": "🧠 Pensa in italiano: L'uso di '-issimo' dona subito calore ed entusiasmo alla frase.",
        "signature_box": "🧩 Formule: Più... di (confronto) / Buonissimo (massimo assoluto).",
        "mistakes": [
            {"wrong": "Roma è più grande che Firenze.", "right": "Roma è più grande di Firenze."}
        ],
        "mnemonic": "💡 Trucco mnemonico: DI per confrontare due NOMI, CHE per confrontare due VERBI!",
        "connects": ["obbligo-dovere-bisogna"],
        "checklist": ["Usare più... di per confrontare due persone o cose", "Formare il superlativo assoluto in -issimo"],
        "quiz": [
            {"q": "Qual è il superlativo assoluto di 'bello'?", "opts": ["Bellissimo", "Più bello", "Il bello"], "correct": 0, "explain": "L'aggettivo 'bello' + il suffisso '-issimo' diventa 'bellissimo'."}
        ]
    },
    "obbligo-dovere-bisogna": {
        "title": "L'Obbligo e la Necessità: Dovere e Bisogna",
        "subtitle": "Esprimere regole, doveri personali e necessità generali",
        "part_title": "Parte 3 · Pronomei, Comparativi & Obblighi",
        "part_file": "part-3.html",
        "cando": "Sa comprendere e comunicare regole, doveri ed istruzioni ufficiali.",
        "one_liner": "Dovere + infinito (obbligo personale) ; Bisogna + infinito (necessità impersonale).",
        "why_matters": "Nessuna giornata di lavoro o di viaggio si svolge senza comprendere regole e indicazioni d'obbligo.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Struttura</th><th>Natura dell'Obbligo</th><th>Esempio</th></tr></thead>
<tbody>
<tr><td><b>Dovere + Infinito</b></td><td>Personale (io devo, tu devi...)</td><td><b>Devo studiare</b> per l'esame.</td></tr>
<tr><td><b>Bisogna + Infinito</b></td><td>Generale / Impersonale</td><td><b>Bisogna prenotare</b> prima di entrare.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Per imparare bene l'italiano, <span style='color:var(--grammar-verb);'>bisogna fare</span> pratica ogni giorno.",
        "notice": "👀 Nota: 'Bisogna' non cambia mai soggetto : è una forma impersonale fissa.",
        "think_native": "🧠 Pensa in italiano: 'Bisogna' indica la regola d'oro valida per tutti gli esseri umani.",
        "signature_box": "🧩 Regola: Bisogna + Infinito = È necessario per chiunque.",
        "mistakes": [
            {"wrong": "Noi bisogniamo studiare.", "right": "Bisogna studiare. (oppure: Dobbiamo studiare.)"}
        ],
        "mnemonic": "💡 Trucco mnemonico: Dovere ha tutte le persone, Bisogna ne ha una sola!",
        "connects": ["il-comparativo-e-il-superlativo"],
        "checklist": ["Espressare un obbligo personale con dovere", "Espressare una regola generale con bisogna"],
        "quiz": [
            {"q": "Scegli la forma corretta: 'Per viaggiare all'estero ____ avere il passaporto.'", "opts": ["bisogna", "bisogniamo", "dovete"], "correct": 0, "explain": "'Bisogna' + infinito esprime la necessità generale impersonale."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    hub_link = "../../../../italiano-a2.html" if is_topic else "../../../italiano-a2.html"
    rel_prefix = "../" if is_topic else ""
    nav_links = [f'<a href="{hub_link}">← Hub Italiano A2</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Grammatica A2</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manuale di Grammatica Italiana (A2) · Edizione Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Torna alla home COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Italian A2 Grammar Manual...")
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
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Errori frequenti dei principianti</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Sai già usare questa struttura?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnostica & Quiz</h2><span class="quiz-score">Punteggio: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 Collegato a...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Grammatica Italiana A2</title>
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
  <div class="outcome-banner">🎯 <strong>Obiettivo comunicativo:</strong> {top["cando"]}</div>
  <p><strong>In sintesi:</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Perché è importante?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Esempio a colori</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Complimenti!</strong> Ora padroneggi questa struttura fondamentale del livello A2.</div>
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(p["topics"])} capitoli →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Grammatica Italiana Livello A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Livello A2</span>
    <h1>Grammatica Italiana (A2)</h1>
    <p class="subtitle">Manuale interattivo monolingua di grammatica italiana livello elementare (A2).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Italian A2 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

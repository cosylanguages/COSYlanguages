#!/usr/bin/env python3
"""
Generator script for COSYlanguages German Grammar Manual (Level B1) Interactive Web Edition.
Generates manuals/de/grammar/b1/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/de/grammar/b1/topics/.
100% Monolingual German.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/de/grammar/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Deutsche Grammatik Niveau B1 */
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

.outcome-banner { background: var(--mint-bg); border-left: 4px solid #22c55e; padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--mint-ink); font-weight: 500; }
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

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--blue-100); color: var(--blue-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
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

APP_JS = """// COSYlanguages B1 Deutsche Grammatik · Interaktivität
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-de-b1-' + box.getAttribute('data-key');
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
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Ergebnis: ' + score + ' / ' + data.length; }
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
        "title": "Teil 1 · Subjunktionen & Konjunktiv II",
        "short_title": "Teil 1",
        "subtitle": "Nebensätze mit weil, da, obwohl sowie Höflichkeit und Wünsche im Konjunktiv II.",
        "stripe": "#2563eb",
        "topics": ["subjunktionen-weil-da-obwohl", "konjunktiv-ii-hoeflichkeit-und-wuensche"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Teil 2 · Satzverbindung & Argumentation",
        "short_title": "Teil 2",
        "subtitle": "Kausalität, Konsequenz und Konnektoren in der Debatte.",
        "stripe": "#16a34a",
        "topics": ["grund-und-folge-konnektoren", "argumentation-und-diskussion-im-dialog"]
    }
]

TOPICS = {
    "subjunktionen-weil-da-obwohl": {
        "title": "Subjunktionen: Weil, Da, Obwohl",
        "subtitle": "Kausale und konzessive Nebensätze mit Verb am Ende",
        "part_title": "Teil 1 · Subjunktionen & Konjunktiv II",
        "part_file": "part-1.html",
        "cando": "Kann Gründe und Gegengründe in komplexen Nebensätzen strukturiert ausdrücken.",
        "one_liner": "Subjunktionen leiten Nebensätze ein, bei denen das konjugierte Verb an das Satzende wandert.",
        "why_matters": "Das ist das zentrale Merkmal der deutschen Satzstruktur im Niveau B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Subjunktion</th><th>Bedeutung</th><th>Satzstellung Verb</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td><b>weil</b></td><td>Grund (bekannt/neu)</td><td>Verb am Ende</td><td>Ich bleibe zu Hause, <b>weil</b> es <b>regnet</b>.</td></tr>
<tr><td><b>da</b></td><td>Grund (bekannt/formal)</td><td>Verb am Ende (oft Satzanfang)</td><td><b>Da</b> es regnet, bleibe ich zu Hause.</td></tr>
<tr><td><b>obwohl</b></td><td>Gegengrund (konzessiv)</td><td>Verb am Ende</td><td>Er geht spazieren, <b>obwohl</b> es <b>regnet</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Ich nehme den Zug, <span style='color:var(--grammar-verb);'>weil</span> das Auto defekt <span style='color:var(--grammar-verb);'>ist</span>.",
        "notice": "👀 Merke: Im Nebensatz steht das konjugierte Verb immer ganz am Ende !",
        "think_native": "🧠 Denke auf Deutsch: Subjunktionen schieben das Verb wie einen Magneten ans Satzende.",
        "signature_box": "🧩 Goldene Regel: Hauptsatz + Subjunktion ➔ Nebensatz mit Verb am Ende.",
        "mistakes": [
            {"wrong": "Ich bleibe zu Hause, weil es regnet heute. (Verb nicht am Ende)", "right": "Ich bleibe zu Hause, weil es heute regnet."},
            {"wrong": "Obwohl er krank ist, aber arbeitet er.", "right": "Obwohl er krank ist, arbeitet er."}
        ],
        "mnemonic": "💡 Eselsbrücke: Nebensatz-Subjunktion kickt das Verb an die Endposition !",
        "connects": ["konjunktiv-ii-hoeflichkeit-und-wuensche", "grund-und-folge-konnektoren"],
        "checklist": ["Konjugiertes Verb ans Satzende stellen", "'Da' am Satzanfang für bekannte Gründe nutzen"],
        "quiz": [
            {"q": "Welcher Satz ist grammatikalisch korrekt ?", "opts": ["Ich komme später, weil der Bus Verspätung hat.", "Ich komme später, weil der Bus hat Verspätung.", "Weil der Bus hat Verspätung, komme ich später."], "correct": 0, "explain": "Nach 'weil' steht das konjugierte Verb ('hat') am Satzende."}
        ]
    },
    "konjunktiv-ii-hoeflichkeit-und-wuensche": {
        "title": "Konjunktiv II: Höflichkeit, Wünsche und Hypothesen",
        "subtitle": "Höflich bitten mit würde + Infinitiv & hätte / wäre",
        "part_title": "Teil 1 · Subjunktionen & Konjunktiv II",
        "part_file": "part-1.html",
        "cando": "Kann höfliche Bitten formulieren, Wünsche ausdrücken und hypothetische Situationen besprechen.",
        "one_liner": "Der Konjunktiv II drückt Höflichkeit ('Könnten Sie...?'), Wünsche ('Ich hätte gern...') und Irreales aus.",
        "why_matters": "Unverzichtbar für höfliche Umgangsformen im Alltag, beim Einkaufen und im Beruf.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Form</th><th>Verwendung</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td><b>würde + Infinitiv</b></td><td>Allgemeine Verben</td><td>Ich <b>würde</b> gerne mehr reisen.</td></tr>
<tr><td><b>hätte / wäre</b></td><td>haben / sein / Modalverben</td><td>Ich <b>hätte</b> gern einen Kaffee. Es <b>wäre</b> schön.</td></tr>
<tr><td><b>könnte / müsste</b></td><td>Höfliche Bitte / Pflicht</td><td><b>Könnten</b> Sie mir bitte helfen?</td></tr>
</tbody>
</table></div>""",
        "example_code": "Ich <span style='color:var(--grammar-verb);'>würde</span> gerne einen Tisch <span style='color:var(--grammar-verb);'>reservieren</span>.",
        "notice": "👀 Merke: Bei 'haben' und 'sein' nutzt man 'hätte' und 'wäre', nicht 'würde haben/sein'.",
        "think_native": "🧠 Denke auf Deutsch: Der Konjunktiv II mildert Aussagen ab und schafft Höflichkeit.",
        "signature_box": "🧩 Goldene Regel: 'Ich möchte' / 'Ich hätte gern' sind die höflichen Standardformen im Geschäft.",
        "mistakes": [
            {"wrong": "Ich würde haben Zeit. (unnatürlich)", "right": "Ich hätte Zeit."},
            {"wrong": "Können Sie mir helfen? (direkt)", "right": "Könnten Sie mir bitte helfen? (höflich)"}
        ],
        "mnemonic": "💡 Eselsbrücke: Würde + Infinitiv für Taten, Hätte / Wäre für Zustände !",
        "connects": ["subjunktionen-weil-da-obwohl", "argumentation-und-diskussion-im-dialog"],
        "checklist": ["Höfliche Bitten mit 'könnten' und 'würde' bilden", "'Hätte' und 'wäre' korrekt anwenden"],
        "quiz": [
            {"q": "Wie bestellt man besonders höflich einen Kaffee ?", "opts": ["Ich hätte gerne einen Kaffee, bitte.", "Ich will einen Kaffee.", "Ich würde einen Kaffee haben."], "correct": 0, "explain": "'Ich hätte gerne einen Kaffee' ist die Standardform höflicher Bestellung."}
        ]
    },
    "grund-und-folge-konnektoren": {
        "title": "Grund und Folge: Konnektoren und Adverbien",
        "subtitle": "Deshalb / Darum / Deswegen / Infinitiv mit zu",
        "part_title": "Teil 2 · Satzverbindung & Argumentation",
        "part_file": "part-2.html",
        "cando": "Kann Ursachen und Konsequenzen mit Konjunktionaladverbien logisch verknüpfen.",
        "one_liner": "Deshalb, darum und deswegen verbinden zwei Hauptsätze, wobei das Verb auf Position 2 folgt.",
        "why_matters": "Erlaubt flüssige Satzverbindungen in Argumentationen und Präsentationen im Niveau B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Konnektor</th><th>Position Verb</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td><b>deshalb / darum</b></td><td>Verb auf Pos. 2 (direkt nach Konnektor)</td><td>Er ist krank, <b>deshalb</b> <b>bleibt</b> er im Bett.</td></tr>
<tr><td><b>trotzdem</b></td><td>Verb auf Pos. 2 (konzessiv)</td><td>Es regnet, <b>trotzdem</b> <b>geht</b> er spazieren.</td></tr>
<tr><td><b>um... zu + Infinitiv</b></td><td>Infinitiv am Ende (Ziel/Absicht)</td><td>Er lernt, <b>um</b> die Prüfung <b>zu bestehen</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Es war kalt, <span style='color:var(--grammar-verb);'>deshalb</span> <span style='color:var(--grammar-verb);'>zog</span> er eine Jacke an.",
        "notice": "👀 Merke: Nach 'deshalb' steht sofort das konjugierte Verb (Position 2 des Folgesatzes).",
        "think_native": "🧠 Denke auf Deutsch: 'Weil' leitet einen Nebensatz ein, 'Deshalb' leitet einen Hauptsatz ein.",
        "signature_box": "🧩 Goldene Regel: Weil = Verb am Ende. Deshalb = Verb auf Position 2.",
        "mistakes": [
            {"wrong": "Er ist krank, deshalb er bleibt im Bett.", "right": "Er ist krank, deshalb bleibt er im Bett."},
            {"wrong": "Er lernt um die Prüfung bestehen zu.", "right": "Er lernt, um die Prüfung zu bestehen."}
        ],
        "mnemonic": "💡 Eselsbrücke: Nach Deshalb kommt sofort das Verb !",
        "connects": ["argumentation-und-diskussion-im-dialog"],
        "checklist": ["Satzstellung nach 'deshalb' beachten (Verb auf Pos. 2)", "Sätze mit 'um... zu' richtig verknüpfen"],
        "quiz": [
            {"q": "Welche Satzstellung ist nach 'deshalb' richtig ?", "opts": ["Er hat viel zu tun, deshalb arbeitet er heute lange.", "Er hat viel zu tun, deshalb er arbeitet heute lange.", "Er hat viel zu tun, deshalb arbeitet lange er heute."], "correct": 0, "explain": "Nach 'deshalb' steht das Verb an zweiter Stelle des Nebensatzgefüges."}
        ]
    },
    "argumentation-und-diskussion-im-dialog": {
        "title": "Argumentation und Diskussion im Dialog",
        "subtitle": "Einerseits... andererseits / Außerdem / Allerdings",
        "part_title": "Teil 2 · Satzverbindung & Argumentation",
        "part_file": "part-2.html",
        "cando": "Kann an Diskussionen teilnehmen, Vor- und Nachteile abwägen und eigene Argumente stützen.",
        "one_liner": "Konnektoren wie einerseits... andererseits, außerdem und allerdings strukturieren eine gehobene Argumentation.",
        "why_matters": "Zentraler Baustein für die B1-Mundprüfung und das Verfassen von Erörterungen.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Funktion</th><th>Konnektor</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td><b>Doppelkonnektor</b></td><td>Einerseits..., andererseits...</td><td><b>Einerseits</b> ist es teuer, <b>andererseits</b> gut.</td></tr>
<tr><td><b>Ergänzung</b></td><td>Außerdem / Zudem</td><td>Das Auto ist schnell. <b>Außerdem</b> ist es neu.</td></tr>
<tr><td><b>Einschränkung</b></td><td>Allerdings / Jedoch</td><td>Die Idee ist gut, <b>allerdings</b> schwer umzusetzen.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Einerseits</span> stimmt das, <span style='color:var(--grammar-verb);'>andererseits</span> gibt es Alternativen.",
        "notice": "👀 Merke: 'Allerdings' schränkt eine Aussage diplomatisch ein.",
        "think_native": "🧠 Denke auf Deutsch: Strukturiere Deine Meinung klar in Für- und Wider-Argumente.",
        "signature_box": "🧩 Goldene Regel: Erstens ➔ Zweitens ➔ Einerseits/Andererseits ➔ Zusammenfassend.",
        "mistakes": [
            {"wrong": "Außerdem dass es teuer ist... (falsche Struktur)", "right": "Außerdem ist es teuer."},
            {"wrong": "Einerseits ist gut, andererseits schlecht. (Subjekt fehlt)", "right": "Einerseits ist es gut, andererseits ist es schlecht."}
        ],
        "mnemonic": "💡 Eselsbrücke: Einerseits links, andererseits rechts !",
        "connects": ["grund-und-folge-konnektoren", "subjunktionen-weil-da-obwohl"],
        "checklist": ["Vor- und Nachteile mit 'einerseits... andererseits' abwägen", "Meinung diplomatisch mit 'allerdings' ergänzen"],
        "quiz": [
            {"q": "Welches Wortpaar drückt den Vergleich von zwei Seiten aus ?", "opts": ["Einerseits..., andererseits...", "Weil..., deshalb...", "Weder..., noch..."], "correct": 0, "explain": "'Einerseits... andererseits' stellt zwei Aspekte gegenüber."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../deutsch-b1.html" if is_topic else "../../../deutsch-b1.html"
    nav_links = [f'<a href="{hub_link}">← Hub Deutsch B1</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Grammatik B1</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Handbuch der Deutschen Grammatik (B1) · Web-Edition</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Zurück zur COSYlanguages Startseite</a></div></div></footer>'''

def build_all():
    print("Building German B1 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">klicken, um die richtige Form anzuzeigen</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Häufige Fehler</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Können Sie das bereits anwenden ?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnose & Quiz</h2><span class="quiz-score">Ergebnis: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 In Verbindung mit...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Deutsche Grammatik B1</title>
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
  <div class="outcome-banner">🎯 <strong>Kommunikationsziel :</strong> {top["cando"]}</div>
  <p><strong>Zusammenfassend :</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Warum ist das wichtig ?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Beispiel in Farben</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Herzlichen Glückwunsch !</strong> Sie beherrschen nun diese wichtige B1-Struktur.</div>
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
<html lang="de">
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
    <span class="eyebrow">Teil</span>
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(p["topics"])} Kapitel →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Deutsche Grammatik Niveau B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Niveau B1</span>
    <h1>Deutsche Grammatik (B1)</h1>
    <p class="subtitle">Interaktives einsprachiges Handbuch der deutschen Grammatik Niveau B1.</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("German B1 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

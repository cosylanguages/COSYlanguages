#!/usr/bin/env python3
"""
Generator script for COSYlanguages French Grammar Manual (Level B1) Interactive Web Edition.
Generates manuals/fr/grammar/b1/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/fr/grammar/b1/topics/.
100% Monolingual French.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/fr/grammar/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manuel de Grammaire Française Niveau B1 */
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

APP_JS = """// COSYlanguages B1 Grammaire Française · Moteur d'Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-fr-b1-' + box.getAttribute('data-key');
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
        "title": "Partie 1 · Le Subjonctif Présent & l'Opinion",
        "short_title": "Partie 1",
        "subtitle": "Exprimer la nécessité, la volonté, l'opinion nuancée et le doute.",
        "stripe": "#2563eb",
        "topics": ["le-subjonctif-necessite-volonte", "le-subjonctif-opinion-doute"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Partie 2 · Structurer son Raisonnement",
        "short_title": "Partie 2",
        "subtitle": "Exprimer la cause, la conséquence et utiliser les connecteurs logiques de l'argumentation.",
        "stripe": "#16a34a",
        "topics": ["la-cause-et-la-consequence", "les-connecteurs-de-largumentation"]
    }
]

TOPICS = {
    "le-subjonctif-necessite-volonte": {
        "title": "Le Subjonctif Présent — Nécessité et Volonté",
        "subtitle": "Il faut que + subjonctif & Je veux que + subjonctif",
        "part_title": "Partie 1 · Le Subjonctif Présent & l'Opinion",
        "part_file": "part-1.html",
        "cando": "Peut exprimer la nécessité et des volontés nuancées dans des situations formelles et informelles.",
        "one_liner": "Le subjonctif s'emploie après des expressions de nécessité ('il faut que') et de volonté ('je veux que') lorsque le sujet de la subordonnée est différent.",
        "why_matters": "C'est l'outil grammatical central du niveau B1 pour formuler des demandes courtoises, des exigences ou exprimer ce qui est indispensable.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Structure</th><th>Mode obligatoire</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>Il faut que + sujet</b></td><td>Subjonctif Présent</td><td>Il faut que tu <b>viennes</b> à la réunion.</td></tr>
<tr><td><b>Je veux que / Je souhaite que</b></td><td>Subjonctif Présent</td><td>Je veux que vous <b>fassiez</b> attention.</td></tr>
<tr><td><b>Il est essentiel que</b></td><td>Subjonctif Présent</td><td>Il est essentiel qu'il <b>comprenne</b> les règles.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Il faut que <span style='color:var(--grammar-subject);'>nous</span> <span style='color:var(--grammar-verb);'>partions</span> à l'heure.",
        "notice": "👀 Remarquez : Le subjonctif se forme sur le radical de la 3e personne du pluriel (ils/elles) au présent + terminaisons -e, -es, -e, -ions, -iez, -ent.",
        "think_native": "🧠 Pensez en français : Le subjonctif exprime l'action comme souhaitée ou requise, pas comme un fait objectif réalisé.",
        "signature_box": "🧩 Modèle du français : Même sujet = Infinitif (Je veux partir). Sujets différents = Subjonctif (Je veux que tu partes).",
        "mistakes": [
            {"wrong": "Il faut que tu viens avec nous.", "right": "Il faut que tu viennes avec nous."},
            {"wrong": "Je veux que je partes tôt.", "right": "Je veux partir tôt."}
        ],
        "mnemonic": "💡 Astuce mnémonique : Deux sujets différents + verbe de volonté = Subjonctif obligatoire !",
        "connects": ["le-subjonctif-opinion-doute", "la-cause-et-la-consequence"],
        "checklist": ["Utiliser il faut que + subjonctif", "Différencier la structure à sujet unique (infinitif) et à sujets différents (subjonctif)"],
        "quiz": [
            {"q": "Quelle phrase est correcte ?", "opts": ["Il faut que nous fassions un effort.", "Il faut que nous faisons un effort.", "Il faut que nous ferons un effort."], "correct": 0, "explain": "Le verbe faire au subjonctif avec nous est 'fassions'."}
        ]
    },
    "le-subjonctif-opinion-doute": {
        "title": "Le Subjonctif d'Opinion et de Doute",
        "subtitle": "Je ne pense pas que + subjonctif vs Je pense que + indicatif",
        "part_title": "Partie 1 · Le Subjonctif Présent & l'Opinion",
        "part_file": "part-1.html",
        "cando": "Peut exprimer la certitude et le doute avec le subjonctif et l'indicatif.",
        "one_liner": "Les verbes d'opinion à la forme affirmative prennent l'indicatif (certitude), mais à la forme négative ou interrogative, ils demandent le subjonctif (doute).",
        "why_matters": "Permet de participer activement à des débats d'idées en affichant des réserves et des nuances de doute avec élégance.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Tournure</th><th>Mode requis</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>Affirmative (Certitude)</b></td><td>Indicatif</td><td>Je pense qu'il <b>est</b> honnête.</td></tr>
<tr><td><b>Négative (Doute/Contesté)</b></td><td>Subjonctif</td><td>Je ne pense pas qu'il <b>soit</b> honnête.</td></tr>
<tr><td><b>Doute explicite</b></td><td>Subjonctif</td><td>Je doute qu'elle <b>puisse</b> venir.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Je ne crois pas que ce <span style='color:var(--grammar-verb);'>soit</span> une bonne idée.",
        "notice": "👀 Remarquez : 'Il me semble que' + indicatif, mais 'Il ne me semble pas que' ou 'Douter que' + subjonctif.",
        "think_native": "🧠 Pensez en français : L'indicatif affirme une réalité ; le subjonctif ouvre le champ du doute ou du possible.",
        "signature_box": "🧩 Modèle du français : Affirmation = Indicatif / Négation de pensée ou Doute = Subjonctif.",
        "mistakes": [
            {"wrong": "Je ne pense pas qu'il va réussir.", "right": "Je ne pense pas qu'il réussisse."},
            {"wrong": "Je doute qu'il est là.", "right": "Je doute qu'il soit là."}
        ],
        "mnemonic": "💡 Astuce mnémonique : Penser négatif = Douter = Subjonctif !",
        "connects": ["le-subjonctif-necessite-volonte", "les-connecteurs-de-largumentation"],
        "checklist": ["Employer l'indicatif après 'je pense que'", "Employer le subjonctif après 'je ne pense pas que'"],
        "quiz": [
            {"q": "Complétez : 'Je ne suis pas sûr qu'elle ____ (venir) demain.'", "opts": ["vienne", "vient", "viendra"], "correct": 0, "explain": "L'expression du doute 'ne pas être sûr que' exige le subjonctif : 'vienne'."}
        ]
    },
    "la-cause-et-la-consequence": {
        "title": "L'Expression de la Cause et de la Conséquence",
        "subtitle": "Parce que vs Grâce à / À cause de & Donc / C'est pourquoi",
        "part_title": "Partie 2 · Structurer son Raisonnement",
        "part_file": "part-2.html",
        "cando": "Peut structurer un raisonnement logique clair en expliquant l'origine et le résultat d'un fait.",
        "one_liner": "La cause explique l'origine (parce que, grâce à, à cause de) ; la conséquence exprime le résultat (donc, c'est pourquoi, par conséquent).",
        "why_matters": "Indispensable pour expliquer ses choix professionnels, justifier une décision ou analyser une situation au niveau B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Relation</th><th>Connecteur</th><th>Construction</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>Cause positive</b></td><td>Grâce à</td><td>+ nom / pronom</td><td>J'ai réussi <b>grâce à</b> ton aide.</td></tr>
<tr><td><b>Cause négative</b></td><td>À cause de</td><td>+ nom / pronom</td><td>Nous sommes en retard <b>à cause des</b> embouteillages.</td></tr>
<tr><td><b>Conséquence</b></td><td>Donc / C'est pourquoi</td><td>+ proposition</td><td>Il pleut, <b>donc</b> je prends mon parapluie.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Elle a obtenu le poste <span style='color:var(--grammar-verb);'>grâce à</span> son expérience, <span style='color:var(--grammar-verb);'>c'est pourquoi</span> nous fêtons ça.",
        "notice": "👀 Remarquez : 'Parce que' répond à la question 'Pourquoi ?' et introduit une phrase avec verbe conjugué.",
        "think_native": "🧠 Pensez en français : 'Grâce à' attribue le mérite ; 'À cause de' attribue la faute ou le problème.",
        "signature_box": "🧩 Modèle du français : Grâce à = Merci ! À cause de = Hélas !",
        "mistakes": [
            {"wrong": "J'ai réussi à cause de mon professeur.", "right": "J'ai réussi grâce à mon professeur."},
            {"wrong": "Il fait beau parce que nous sortons.", "right": "Il fait beau, donc nous sortons."}
        ],
        "mnemonic": "💡 Astuce mnémonique : Grâce = Gratitude (positif), Cause = Coupable (négatif) !",
        "connects": ["les-connecteurs-de-largumentation"],
        "checklist": ["Utiliser 'grâce à' pour une cause favorable", "Distinguer cause (parce que) et conséquence (donc)"],
        "quiz": [
            {"q": "Choisissez le bon connecteur : 'Il a manqué le train ____ la neige.'", "opts": ["à cause de", "grâce à", "c'est pourquoi"], "correct": 0, "explain": "'La neige' est une cause négative d'empêchement, on utilise 'à cause de'."}
        ]
    },
    "les-connecteurs-de-largumentation": {
        "title": "Les Connecteurs Logiques de l'Argumentation",
        "subtitle": "D'abord / Ensuite / De plus, En revanche / Certes, mais...",
        "part_title": "Partie 2 · Structurer son Raisonnement",
        "part_file": "part-2.html",
        "cando": "Peut structurer un monologue ou un débat fluide à l'aide de connecteurs de discours.",
        "one_liner": "Les connecteurs logiques organisent les idées par étapes (d'abord, puis), ajoutent des arguments (de plus) ou apportent une nuance (en revanche, certes... mais).",
        "why_matters": "Permet de construire un exposé clair et d'argumenter avec diplomatie dans un débat au niveau B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Fonction</th><th>Connecteurs clés</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>Ordre / Énumération</b></td><td>D'abord, ensuite, enfin</td><td><b>D'abord</b>, nous analyserons les faits...</td></tr>
<tr><td><b>Addition</b></td><td>De plus, en outre, par ailleurs</td><td>C'est pratique. <b>De plus</b>, c'est économique.</td></tr>
<tr><td><b>Opposition / Nuance</b></td><td>En revanche, cependant, certes... mais</td><td>Le projet est ambitieux ; <b>en revanche</b>, il est coûteux.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>D'une part</span> c'est rapide, <span style='color:var(--grammar-verb);'>d'autre part</span> c'est écologique.",
        "notice": "👀 Remarquez : 'En revanche' est la tournure soignée pour exprimer l'opposition positive ou neutre (évitez 'par contre' à l'écrit soutenu).",
        "think_native": "🧠 Pensez en français : Les connecteurs sont la charpente de votre argumentation, ils guident l'auditeur.",
        "signature_box": "🧩 Modèle du français : Certes (j'accorde ce point)... mais (voici mon contre-argument principal).",
        "mistakes": [
            {"wrong": "Par contre il est très intelligent. (style relâché)", "right": "En revanche, il est très intelligent."},
            {"wrong": "De plus que c'est important...", "right": "De plus, c'est important..."}
        ],
        "mnemonic": "💡 Astuce mnémonique : D'abord ➔ Ensuite ➔ En revanche ➔ En fin de compte !",
        "connects": ["la-cause-et-la-consequence", "le-subjonctif-opinion-doute"],
        "checklist": ["Organiser une argumentation en trois étapes", "Employer 'en revanche' et 'certes... mais' pour nuancer"],
        "quiz": [
            {"q": "Quel connecteur marque une transition d'opposition élégante ?", "opts": ["En revanche", "De plus", "C'est pourquoi"], "correct": 0, "explain": "'En revanche' permet d'opposer deux faits de manière élégante et nuancée."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../francaise-b1.html" if is_topic else "../../../francaise-b1.html"
    nav_links = [f'<a href="{hub_link}">← Hub Français B1</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Grammaire B1</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manuel de Grammaire Française (B1) · Édition Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Retour à l'accueil COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building French B1 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">cliquez pour révéler la forme correcte</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Erreurs fréquentes</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Pouvez-vous déjà utiliser ceci ?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnostic & Quiz</h2><span class="quiz-score">Score: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 En lien avec...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Grammaire Française B1</title>
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
  <div class="outcome-banner">🎯 <strong>Objectif de communication :</strong> {top["cando"]}</div>
  <p><strong>En résumé :</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Pourquoi est-ce important ?</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Exemple en couleurs</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Félicitations !</strong> Vous maîtrisez maintenant cette structure essentielle du niveau B1.</div>
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
<html lang="fr">
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
    <span class="eyebrow">Partie</span>
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
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(p["topics"])} chapitres →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Grammaire Française Niveau B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Niveau B1</span>
    <h1>Grammaire Française (B1)</h1>
    <p class="subtitle">Manuel interactif monolingue de grammaire française niveau intermédiaire (B1).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("French B1 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

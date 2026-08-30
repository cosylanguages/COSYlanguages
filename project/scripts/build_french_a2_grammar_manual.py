#!/usr/bin/env python3
"""
Generator script for COSYlanguages French Grammar Manual (Level A2) Interactive Web Edition.
Generates manuals/fr/grammar/a2/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/fr/grammar/a2/topics/.
100% Monolingual French.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/fr/grammar/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manuel de Grammaire Française Niveau A2 */
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

APP_JS = """// COSYlanguages A2 Grammaire Française · Moteur d'Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-fr-a2-' + box.getAttribute('data-key');
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
        "title": "Partie 1 · Le Récit au Passé",
        "short_title": "Partie 1",
        "subtitle": "Passé composé, imparfait et alternance dans les récits de souvenirs.",
        "stripe": "#2563eb",
        "topics": ["passe-compose-avoir-etre", "limparfait-de-lindicatif", "passe-compose-vs-imparfait"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Partie 2 · Exprimer l'Avenir & le Souhait",
        "short_title": "Partie 2",
        "subtitle": "Futur simple, conditionnel de politesse et hypothèses au présent.",
        "stripe": "#16a34a",
        "topics": ["le-futur-simple", "le-conditionnel-present", "l-hypothese-au-present"]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Partie 3 · Pronoms, Comparaisons & Obligations",
        "short_title": "Partie 3",
        "subtitle": "Pronoms COD/COI, pronoms Y et EN, structures comparatives et obligations.",
        "stripe": "#d97706",
        "topics": ["les-pronoms-cod-et-coi", "les-pronoms-en-et-y", "la-comparaison-et-le-superlatif", "lobligation-et-linterdiction"]
    }
]

TOPICS = {
    "passe-compose-avoir-etre": {
        "title": "Le Passé Composé avec Avoir et Être",
        "subtitle": "L'accord du participe passé et le choix de l'auxiliaire",
        "part_title": "Partie 1 · Le Récit au Passé",
        "part_file": "part-1.html",
        "cando": "Peut raconter un événement passé simple et ordonné.",
        "one_liner": "Le passé composé exprime une action ponctuelle et terminée dans le passé.",
        "why_matters": "C'est le temps indispensable pour raconter vos vacances, vos sorties et vos anecdotes quotidiennes.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Auxiliaire</th><th>Utilisation principale</th><th>Exemple d'accord</th></tr></thead>
<tbody>
<tr><td><b>AVOIR</b></td><td>La majorité des verbes (80%+)</td><td>J'ai parlé, nous avons mangé (pas d'accord sujet)</td></tr>
<tr><td><b>ÊTRE</b></td><td>14 verbes de mouvement/changement + verbes pronominaux</td><td>Elle est venu<b>e</b>, ils sont parti<b>s</b> (accord avec le sujet)</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Elle</span> <span style='color:var(--grammar-verb);'>est allé<span style='color:var(--grammar-ending);'>e</span></span> au marché.",
        "notice": "👀 Remarquez : Avec l'auxiliaire <b>être</b>, le participe passé s'accorde toujours en genre (-e) et en nombre (-s) avec le sujet.",
        "think_native": "🧠 Pensez en français : Considérez les verbes avec <i>être</i> comme décrivant l'état final du sujet (elle est arrivée = elle est ici maintenant).",
        "signature_box": "🧩 Modèle du français : La maison des 14 verbes (aller/venir, entrer/sortir, monter/descendre, naître/mourir...) fonctionne toujours avec être.",
        "mistakes": [
            {"wrong": "Elle a allée au cinéma.", "right": "Elle est allée au cinéma."},
            {"wrong": "Ils sont mangé une pizza.", "right": "Ils ont mangé une pizza."}
        ],
        "mnemonic": "💡 Astuce mnémonique : DR & MRS VANDERTRAMPP regroupe les verbes de mouvement se conjuguant avec être !",
        "connects": ["limparfait-de-lindicatif", "passe-compose-vs-imparfait"],
        "checklist": ["Choisir entre avoir et être selon le verbe", "Accorder le participe passé avec le sujet quand on utilise être"],
        "quiz": [
            {"q": "Quelle phrase est correcte ?", "opts": ["Marie est partie à Paris.", "Marie a partie à Paris.", "Marie est parti à Paris."], "correct": 0, "explain": "Avec 'être' et le sujet féminin Marie, le participe prend un 'e' : partie."},
            {"q": "Quel auxiliaire utilise-t-on avec le verbe 'manger' ?", "opts": ["Être", "Avoir", "Les deux"], "correct": 1, "explain": "Le verbe 'manger' utilise l'auxiliaire 'avoir'."}
        ]
    },
    "limparfait-de-lindicatif": {
        "title": "L'Imparfait de l'Indicatif",
        "subtitle": "Décrire les habitudes, les décors et les états passés",
        "part_title": "Partie 1 · Le Récit au Passé",
        "part_file": "part-1.html",
        "cando": "Peut décrire une habitude passée ou un cadre de vie antérieur.",
        "one_liner": "L'imparfait sert à peindre le décor, exprimer des habitudes et des états continus dans le passé.",
        "why_matters": "Sans l'imparfait, vos récits de souvenirs sembleraient sacsadés et manqueraient de contexte.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Sujet</th><th>Radical (Nous au présent)</th><th>Terminaisons de l'imparfait</th><th>Exemple (Parler)</th></tr></thead>
<tbody>
<tr><td>je / tu</td><td>parl-</td><td><b>-ais / -ais</b></td><td>je parlais, tu parlais</td></tr>
<tr><td>il / elle / on</td><td>parl-</td><td><b>-ait</b></td><td>il parlait</td></tr>
<tr><td>nous / vous / ils</td><td>parl-</td><td><b>-ions / -iez / -aient</b></td><td>nous parlions, ils parlaient</td></tr>
</tbody>
</table></div>""",
        "example_code": "Quand <span style='color:var(--grammar-subject);'>j'</span><span style='color:var(--grammar-verb);'>étai<span style='color:var(--grammar-ending);'>s</span></span> enfant, je <span style='color:var(--grammar-verb);'>jouai<span style='color:var(--grammar-ending);'>s</span></span> au parc.",
        "notice": "👀 Remarquez : Les terminaisons -ais, -ais, -ait, -aient se prononcent toutes exactement de la même manière : [ɛ].",
        "think_native": "🧠 Pensez en français : L'imparfait est une ligne continue dans le passé, sans début ni fin précis.",
        "signature_box": "🧩 Modèle du français : Prenez la forme 'Nous' du présent (ex: nous finiss-ons), enlevez -ons, et ajoutez les terminaisons de l'imparfait.",
        "mistakes": [
            {"wrong": "Quand j'étais jeune, j'ai joué tous les jours.", "right": "Quand j'étais jeune, je jouais tous les jours."},
            {"wrong": "Nous étions mangions.", "right": "Nous mangions."}
        ],
        "mnemonic": "💡 Astuce mnémonique : L'imparfait est le temps de la nostalgie ('Autrefois, je faisais...').",
        "connects": ["passe-compose-avoir-etre", "passe-compose-vs-imparfait"],
        "checklist": ["Former l'imparfait à partir du radical de 'nous' au présent", "Utiliser l'imparfait pour décrire des habitudes passées"],
        "quiz": [
            {"q": "Quelle est la forme correcte de 'nous' à l'imparfait pour 'faire' ?", "opts": ["Nous faisions", "Nous faisons", "Nous faisiez"], "correct": 0, "explain": "Le radical 'fais-' + la terminaison '-ions' donne 'nous faisions'."}
        ]
    },
    "passe-compose-vs-imparfait": {
        "title": "Passé Composé vs Imparfait",
        "subtitle": "Articuler l'action ponctuelle et la toile de fond",
        "part_title": "Partie 1 · Le Récit au Passé",
        "part_file": "part-1.html",
        "cando": "Peut raconter une histoire en alternant contexte et événements.",
        "one_liner": "L'imparfait plante le décor (le décor), le passé composé déclenche l'action (l'événement).",
        "why_matters": "C'est la clé de voûte de la narration en français : faire la différence entre ce qui se passait et ce qui est arrivé.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Temps</th><th>Rôle narratif</th><th>Question clé</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>Imparfait</b></td><td>Toile de fond / Action en cours</td><td>Que se passait-il ? (Décor)</td><td>Il <b>faisait</b> beau...</td></tr>
<tr><td><b>Passé composé</b></td><td>Interruption / Événement soudain</td><td>Que s'est-il passé ? (Soudain)</td><td>...quand le téléphone <b>a sonné</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Je <span style='color:var(--grammar-verb);'>dormais</span> (imparfait) quand le chat <span style='color:var(--grammar-verb);'>a sauté</span> (passé composé).",
        "notice": "👀 Remarquez : Mots indicateurs : <i>soudain, tout à coup, un jour</i> introduisent le passé composé.",
        "think_native": "🧠 Pensez en français : Voyez l'imparfait comme le film vidéo en arrière-plan et le passé composé comme la photo flash qui survient.",
        "signature_box": "🧩 Modèle du français : L'arrière-plan = Imparfait. L'action principale = Passé composé.",
        "mistakes": [
            {"wrong": "Pendant que je lisais, il a fait beau.", "right": "Pendant que je lisais, il faisait beau."}
        ],
        "mnemonic": "💡 Astuce mnémonique : L'imparfait DÉCRIT, le passé composé AGIT.",
        "connects": ["passe-compose-avoir-etre", "limparfait-de-lindicatif"],
        "checklist": ["Identifier la toile de fond et l'événement perturbateur", "Combiner les deux temps dans une même phrase avec 'quand'"],
        "quiz": [
            {"q": "Complétez : 'Je ____ (marcher) dans la rue quand j'____ (voir) mon ami.'", "opts": ["marchais / ai vu", "ai marché / voyais", "marchais / voyais"], "correct": 0, "explain": "Marcher est l'action en cours (imparfait), voir est l'événement ponctuel (passé composé)."}
        ]
    },
    "le-futur-simple": {
        "title": "Le Futur Simple",
        "subtitle": "Exprimer ses projets, ses prédictions et son avenir",
        "part_title": "Partie 2 · Exprimer l'Avenir & le Souhait",
        "part_file": "part-2.html",
        "cando": "Peut parler de ses projets d'avenir et faire des prédictions.",
        "one_liner": "Le futur simple se forme sur l'infinitif du verbe auquel on ajoute les terminaisons de l'auxiliaire avoir.",
        "why_matters": "Indispensable pour formuler des projets professionnels, des promesses ou des prévisions météo.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Sujet</th><th>Infinitif (Radical)</th><th>Terminaison (Avoir)</th><th>Exemple (Manger)</th></tr></thead>
<tbody>
<tr><td>je / tu / il</td><td>manger-</td><td><b>-ai / -as / -a</b></td><td>je mangerai, tu mangeras, il mangera</td></tr>
<tr><td>nous / vous / ils</td><td>manger-</td><td><b>-ons / -ez / -ont</b></td><td>nous mangerons, vous mangerez, ils mangeront</td></tr>
</tbody>
</table></div>""",
        "example_code": "Demain, nous <span style='color:var(--grammar-verb);'>partir<span style='color:var(--grammar-ending);'>ons</span></span> en vacances.",
        "notice": "👀 Remarquez : Les terminaisons du futur (-ai, -as, -a, -ons, -ez, -ont) sont exactement les formes du verbe <i>avoir</i> au présent !",
        "think_native": "🧠 Pensez en français : Le futur garde l'infinitif entier (partir-) comme base solide.",
        "signature_box": "🧩 Modèle du français : Verbes irréguliers fréquents : être (ser-), avoir (aur-), faire (fer-), aller (ir-), venir (viendr-).",
        "mistakes": [
            {"wrong": "Demain je vais partirai.", "right": "Demain je partirai. (ou : Je vais partir)"}
        ],
        "mnemonic": "💡 Astuce mnémonique : Infinitif + Avoir = Futur Simple !",
        "connects": ["le-conditionnel-present", "l-hypothese-au-present"],
        "checklist": ["Former le futur sur la base de l'infinitif", "Mémoriser les radicaux des 5 verbes irréguliers principaux"],
        "quiz": [
            {"q": "Quel est le futur de 'faire' pour 'je' ?", "opts": ["Je ferai", "Je fairai", "Je faisrai"], "correct": 0, "explain": "Le radical irrégulier de 'faire' au futur est 'fer-'."}
        ]
    },
    "le-conditionnel-present": {
        "title": "Le Conditionnel Présent",
        "subtitle": "La politesse, les souhaits et le conseil",
        "part_title": "Partie 2 · Exprimer l'Avenir & le Souhait",
        "part_file": "part-2.html",
        "cando": "Peut demander poliment un service ou exprimer un souhait.",
        "one_liner": "Le conditionnel combine le radical du futur simple avec les terminaisons de l'imparfait.",
        "why_matters": "Essentiel pour la vie quotidienne : commander au restaurant ou demander de l'aide avec élégance.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Formule</th><th>Radical du Futur</th><th>Terminaisons Imparfait</th><th>Exemple (Vouloir / Aimer)</th></tr></thead>
<tbody>
<tr><td><b>Conditionnel</b></td><td>voudr- / aimer-</td><td><b>-ais, -ais, -ait, -ions, -iez, -aient</b></td><td>Je voudrais un café. J'aimerais visiter Paris.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-subject);'>Je</span> <span style='color:var(--grammar-verb);'>voudr<span style='color:var(--grammar-ending);'>ais</span></span> un verre d'eau, s'il vous plaît.",
        "notice": "👀 Remarquez : 'Je veux' (présent) est très direct. 'Je voudrais' (conditionnel) est la forme polie recommandée.",
        "think_native": "🧠 Pensez en français : Le conditionnel adoucit les demandes pour créer une relation courtoise.",
        "signature_box": "🧩 Modèle du français : Radical du Futur + Terminaisons de l'Imparfait = Conditionnel Présent.",
        "mistakes": [
            {"wrong": "Je veux un café, s'il vous plaît. (trop brutal)", "right": "Je voudrais un café, s'il vous plaît."}
        ],
        "mnemonic": "💡 Astuce mnémonique : Futur par la tête (radical), Imparfait par la queue (terminaison) !",
        "connects": ["le-futur-simple", "l-hypothese-au-present"],
        "checklist": ["Utiliser 'je voudrais' et 'j'aimerais' pour commander ou demander", "Construire le conditionnel avec le radical du futur"],
        "quiz": [
            {"q": "Comment dit-on poliment 'I would like' en français ?", "opts": ["Je voudrais", "Je veux", "J'avais voulu"], "correct": 0, "explain": "'Je voudrais' est la forme polie au conditionnel présent."}
        ]
    },
    "l-hypothese-au-present": {
        "title": "L'Hypothèse au Présent (Si...)",
        "subtitle": "Exprimer une condition et sa conséquence",
        "part_title": "Partie 2 · Exprimer l'Avenir & le Souhait",
        "part_file": "part-2.html",
        "cando": "Peut exprimer des conditions réelles et irréelles au présent.",
        "one_liner": "Si + présent entraîne le futur ; Si + imparfait entraîne le conditionnel présent.",
        "why_matters": "Permet d'imaginer des scénarios, de faire des plans conditionnels ou de rêver à des situations alternatives.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Type d'hypothèse</th><th>Structure de la condition</th><th>Résultat / Conséquence</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>Réelle / Possible</b></td><td>Si + Présent</td><td>Futur Simple</td><td>Si j'<b>ai</b> du temps, je <b>viendrai</b>.</td></tr>
<tr><td><b>Imaginaire / Irréelle</b></td><td>Si + Imparfait</td><td>Conditionnel Présent</td><td>Si j'<b>avais</b> de l'argent, je <b>voyagerais</b>.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Si tu <span style='color:var(--grammar-verb);'>étudies</span>, tu <span style='color:var(--grammar-verb);'>réussiras</span> tes examens.",
        "notice": "👀 Remarquez : On ne met JAMAIS le futur ni le conditionnel directement après 'si' !",
        "think_native": "🧠 Pensez en français : 'Si' aime le présent ou l'imparfait, mais déteste le futur.",
        "signature_box": "🧩 Modèle du français : Règle d'or : Les 'SI' ne mangent pas les '-RAI' !",
        "mistakes": [
            {"wrong": "Si j'aurai le temps, je viendrai.", "right": "Si j'ai le temps, je viendrai."},
            {"wrong": "Si je serais riche, j'achèterais une maison.", "right": "Si j'étais riche, j'achèterais une maison."}
        ],
        "mnemonic": "💡 Astuce mnémonique : Jamais de 'RAI' après 'SI' !",
        "connects": ["le-futur-simple", "le-conditionnel-present"],
        "checklist": ["Associer Si + Présent avec le Futur", "Associer Si + Imparfait avec le Conditionnel"],
        "quiz": [
            {"q": "Complétez : 'Si j'avais un voiture, je ____ (partir) en vacances.'", "opts": ["partirais", "partirai", "pars"], "correct": 0, "explain": "Si + Imparfait (avais) exige le Conditionnel Présent (partirais)."}
        ]
    },
    "les-pronoms-cod-et-coi": {
        "title": "Les Pronoms COD et COI",
        "subtitle": "Remplacer les compléments directs et indirects (me, te, le, la, lui, nous, vous, les, leur)",
        "part_title": "Partie 3 · Pronoms, Comparaisons & Obligations",
        "part_file": "part-3.html",
        "cando": "Peut éviter les répétitions en remplaçant des personnes ou objets.",
        "one_liner": "Le COD répond à 'Qui/Quoi ?' (le, la, les) ; le COI répond à 'À qui ?' (lui, leur).",
        "why_matters": "Rend votre discours fluide et naturel en évitant de répéter les mêmes noms.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>Question</th><th>Pronoms 3e personne</th><th>Position</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>COD</b> (Direct)</td><td>Qui ? Quoi ?</td><td><b>le / la / les</b></td><td>Avant le verbe</td><td>Je regarde le film. ➔ Je <b>le</b> regarde.</td></tr>
<tr><td><b>COI</b> (Indirect avec À)</td><td>À qui ?</td><td><b>lui / leur</b></td><td>Avant le verbe</td><td>Je parle à Marie. ➔ Je <b>lui</b> parle.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Je <span style='color:var(--grammar-subject);'>lui</span> <span style='color:var(--grammar-verb);'>donne</span> le livre.",
        "notice": "👀 Remarquez : Les pronoms se placent AVANT le verbe conjugué (sauf à l'impératif affirmatif).",
        "think_native": "🧠 Pensez en français : Identifiez si la préposition 'à' existe avant la personne pour choisir entre le/la et lui.",
        "signature_box": "🧩 Modèle du français : 'Lui' s'utilise aussi bien pour le masculin que pour le féminin (à Paul = lui / à Marie = lui).",
        "mistakes": [
            {"wrong": "Je téléphone à elle.", "right": "Je lui téléphone."},
            {"wrong": "Je vois lui.", "right": "Je le vois."}
        ],
        "mnemonic": "💡 Astuce mnémonique : Pas de 'à' = COD (le/la) ! Avec 'à' = COI (lui/leur) !",
        "connects": ["les-pronoms-en-et-y", "lobligation-et-linterdiction"],
        "checklist": ["Identifier un COD vs un COI", "Placer le pronom avant le verbe conjugué"],
        "quiz": [
            {"q": "Comment remplace-t-on 'à mes parents' dans 'J'écris à mes parents' ?", "opts": ["J'écris leur", "Je leur écris", "Je les écris"], "correct": 1, "explain": "'À mes parents' est un COI pluriel ➔ 'leur' placé avant le verbe."}
        ]
    },
    "les-pronoms-en-et-y": {
        "title": "Les Pronoms EN et Y",
        "subtitle": "Remplacer des lieux, des quantités et des compléments introduits par De et À",
        "part_title": "Partie 3 · Pronoms, Comparaisons & Obligations",
        "part_file": "part-3.html",
        "cando": "Peut répondre rapidement sur des lieux et des quantités.",
        "one_liner": "Y remplace un lieu (à/en/dans) ou 'à + chose' ; EN remplace une quantité ou 'de + chose'.",
        "why_matters": "Permet de répondre très naturellement à des questions comme 'Tu vas à Paris ? -> Oui, j'y vais !'",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Pronom</th><th>Remplace quoi ?</th><th>Indicateurs clés</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><b>Y</b></td><td>Lieu / À + chose</td><td>à, en, dans, chez, sur</td><td>Tu vas à la banque ? ➔ Oui, j'<b>y</b> vais.</td></tr>
<tr><td><b>EN</b></td><td>Quantité / De + chose</td><td>du, de la, des, un, deux, de</td><td>Tu veux du café ? ➔ Oui, j'<b>en</b> veux.</td></tr>
</tbody>
</table></div>""",
        "example_code": "J'<span style='color:var(--grammar-verb);'>en</span> <span style='color:var(--grammar-verb);'>mange</span> trois.",
        "notice": "👀 Remarquez : Quand on utilise EN avec un nombre, il faut répéter le nombre à la fin : J'en ai <i>deux</i>.",
        "think_native": "🧠 Pensez en français : Y = la flèche vers le lieu ; EN = la source ou l'extrait de quantité.",
        "signature_box": "🧩 Modèle du français : Y = À + lieu/chose. EN = DE + quantité/chose.",
        "mistakes": [
            {"wrong": "J'y veux deux.", "right": "J'en veux deux."},
            {"wrong": "Je vais à Paris ➔ Je le vais.", "right": "Je vais à Paris ➔ J'y vais."}
        ],
        "mnemonic": "💡 Astuce mnémonique : EN vient DE quelque part / Y va À quelque part !",
        "connects": ["les-pronoms-cod-et-coi"],
        "checklist": ["Remplacer un lieu par Y", "Remplacer une quantité précédée de 'de' par EN"],
        "quiz": [
            {"q": "Répondez : 'Avez-vous des pommes ?'", "opts": ["Oui, j'en ai.", "Oui, j'y ai.", "Oui, je les ai."], "correct": 0, "explain": "'Des pommes' exprime une quantité indéfinie ➔ pronom EN."}
        ]
    },
    "la-comparaison-et-le-superlatif": {
        "title": "La Comparaison et le Superlatif",
        "subtitle": "Comparer des qualités, des quantités et exprimer l'excellence",
        "part_title": "Partie 3 · Pronoms, Comparaisons & Obligations",
        "part_file": "part-3.html",
        "cando": "Peut comparer deux personnes, objets ou options et exprimer le meilleur.",
        "one_liner": "Plus... que (supériorité), moins... que (infériorité), aussi... que (égalité).",
        "why_matters": "Indispensable pour faire des choix lors d'achats, donner des avis ou comparer des logements.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Degré</th><th>Adjectifs / Adverbes</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Supériorité (+)</td><td><b>plus + adjectif + que</b></td><td>Paris est <b>plus grand que</b> Lyon.</td></tr>
<tr><td>Égalité (=)</td><td><b>aussi + adjectif + que</b></td><td>Il est <b>aussi grand que</b> toi.</td></tr>
<tr><td>Infériorité (-)</td><td><b>moins + adjectif + que</b></td><td>Le train est <b>moins cher que</b> l'avion.</td></tr>
<tr><td>Superlatif (Max)</td><td><b>le/la/les plus + adjectif</b></td><td>C'est <b>le plus grand</b> musée.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Ce livre est <span style='color:var(--grammar-verb);'>meilleur</span> que le film.",
        "notice": "👀 Remarquez : On ne dit pas 'plus bon', on dit 'meilleur' ! On ne dit pas 'plus bien', on dit 'mieux' !",
        "think_native": "🧠 Pensez en français : Distinguez 'meilleur' (adjectif pour les choses) et 'mieux' (adverbe pour les actions).",
        "signature_box": "🧩 Modèle du français : Bon ➔ Meilleur. Bien ➔ Mieux.",
        "mistakes": [
            {"wrong": "Cette pomme est plus bonne.", "right": "Cette pomme est meilleure."},
            {"wrong": "Il parle plus bien.", "right": "Il parle mieux."}
        ],
        "mnemonic": "💡 Astuce mnémonique : Meilleur qualifie un NOM ; Mieux qualifie un VERBE !",
        "connects": ["lobligation-et-linterdiction"],
        "checklist": ["Utiliser plus/moins/aussi... que", "Remplacer 'plus bon' par 'meilleur' et 'plus bien' par 'mieux'"],
        "quiz": [
            {"q": "Quelle est la forme correcte ?", "opts": ["Paul court mieux que Marc.", "Paul court plus bien que Marc.", "Paul court meilleur que Marc."], "correct": 0, "explain": "'Mieux' est l'adverbe comparatif de 'bien' pour qualifier l'action de courir."}
        ]
    },
    "lobligation-et-linterdiction": {
        "title": "L'Obligation et l'Interdiction",
        "subtitle": "Falloir, devoir et les structures d'interdiction",
        "part_title": "Partie 3 · Pronoms, Comparaisons & Obligations",
        "part_file": "part-3.html",
        "cando": "Peut comprendre et donner des consignes, règles et interdictions.",
        "one_liner": "Il faut + infinitif (obligation générale) ; Devoir + infinitif (obligation personnelle).",
        "why_matters": "Nécessaire pour comprendre le règlement d'un travail, les panneaux de sécurité et donner des règles.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Nuance</th><th>Structure</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Obligation générale</td><td><b>Il faut + infinitif</b></td><td><b>Il faut respecter</b> les règles.</td></tr>
<tr><td>Obligation personnelle</td><td><b>Sujet + devoir + infinitif</b></td><td>Tu <b>dois étudier</b> ce soir.</td></tr>
<tr><td>Interdiction stricte</td><td><b>Il ne faut pas / Interdit de</b></td><td><b>Il ne faut pas fumer</b> ici.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Il <span style='color:var(--grammar-verb);'>faut</span> réserver sa place à l'avance.",
        "notice": "👀 Remarquez : 'Il faut' est impersonnel (le 'il' ne représente personne en particulier).",
        "think_native": "🧠 Pensez en français : 'Il faut' s'adresse à tout le monde en général, 'Tu dois' s'adresse directement à l'interlocuteur.",
        "signature_box": "🧩 Modèle du français : Falloir n'existe qu'à la 3e personne du singulier : 'Il faut'.",
        "mistakes": [
            {"wrong": "Nous fallons partir.", "right": "Il faut que nous partions. (ou : Nous devons partir.)"}
        ],
        "mnemonic": "💡 Astuce mnémonique : Il faut = règle pour tous ! Je dois = devoir personnel !",
        "connects": ["la-comparaison-et-le-superlatif"],
        "checklist": ["Exprimer une règle avec 'il faut + infinitif'", "Exprimer une interdiction avec 'il ne faut pas'"],
        "quiz": [
            {"q": "Quelle phrase exprime une interdiction ?", "opts": ["Il ne faut pas téléphoner au volant.", "Il faut téléphoner au volant.", "Vous devez téléphoner au volant."], "correct": 0, "explain": "'Il ne faut pas' exprime la défense ou l'interdiction."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    nav_links = ['<a href="../../francaise-a2.html">← Hub Français A2</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Grammaire A2</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manuel de Grammaire Française (A2) · Édition Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Retour à l'accueil COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building French A2 Grammar Manual...")
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
<title>{top["title"]} · Grammaire Française A2</title>
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
  <div class="outcome-banner">🎉 <strong>Félicitations !</strong> Vous maîtrisez maintenant cette structure essentielle du niveau A2.</div>
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
<title>{p["title"]} · COSYlanguages A2</title>
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
<title>Grammaire Française Niveau A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Niveau A2</span>
    <h1>Grammaire Française (A2)</h1>
    <p class="subtitle">Manuel interatif monolingue de grammaire française niveau intermédiaire élémentaire (A2).</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("French A2 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

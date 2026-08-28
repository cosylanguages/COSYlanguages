#!/usr/bin/env python3
"""
Generator script for COSYlanguages Monolingual French Vocabulary Manual (A0-A1) Interactive Web Edition.
Generates lexique-francais/index.html, 6 module hub HTML pages (module-1.html .. module-6.html),
assets (style.css, app.js), and 42 topic HTML pages in lexique-francais/topics/.
"""

import os
import json
import glob

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "lexique-francais"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

# CSS content for lexique-francais/assets/style.css
STYLE_CSS = """/* ==========================================================================
   COSYlanguages — Lexique français (A0–A1) — Web Edition
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root{
  --teal-900:#0c3f38;
  --teal-800:#0f5c50;
  --teal-700:#157c6c;
  --teal-600:#1c9483;
  --teal-500:#25a894;
  --teal-100:#e4f4f0;
  --teal-050:#f2faf8;

  --amber-700:#c9740a;
  --amber-100:#fbecd9;

  --ink:#132321;
  --ink-soft:#3c5450;
  --paper:#fbfaf6;
  --panel:#ffffff;
  --line:#e4e1d6;

  /* Vocabulary word type colors */
  --vocab-noun:#3562e0;
  --vocab-noun-bg:#e9eefd;
  --vocab-verb:#1c8f56;
  --vocab-verb-bg:#e6f6ec;
  --vocab-adj:#7c4fd6;
  --vocab-adj-bg:#f1e9fb;
  --vocab-expr:#c9740a;
  --vocab-expr-bg:#fbecd9;
  --vocab-colloc:#a3195b;
  --vocab-colloc-bg:#fce8f1;

  --radius-s:8px; --radius-m:14px; --radius-l:22px;
  --shadow-card:0 1px 2px rgba(19,35,33,.04), 0 8px 24px -12px rgba(19,35,33,.15);
  --font-display:'Poppins', 'Segoe UI', system-ui, sans-serif;
  --font-body:'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono:'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0; background:var(--paper); color:var(--ink);
  font-family:var(--font-body); line-height:1.6; font-size:16px;
  -webkit-font-smoothing:antialiased;
}
img,svg{display:block; max-width:100%;}
a{color:var(--teal-700);}
:focus-visible{outline:3px solid var(--teal-500); outline-offset:2px;}
@media (prefers-reduced-motion: reduce){
  *{animation-duration:.01ms !important; transition-duration:.01ms !important;}
}

.container{max-width:960px; margin:0 auto; padding:0 24px;}

/* ---------- top bar ---------- */
.topbar{
  position:sticky; top:0; z-index:40; background:var(--teal-900);
  color:#eafaf5; border-bottom:1px solid rgba(255,255,255,.08);
}
.topbar-inner{
  max-width:1080px; margin:0 auto; padding:12px 24px;
  display:flex; align-items:center; justify-content:space-between; gap:16px;
}
.brand{display:flex; align-items:center; gap:10px; text-decoration:none; color:#eafaf5;}
.brand-mark{
  width:30px; height:30px; border-radius:8px; background:var(--ink);
  color:#fff; display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-style:italic; font-weight:700; font-size:15px;
}
.brand-name{font-family:var(--font-display); font-weight:700; font-size:15px; letter-spacing:.2px;}
.brand-name em{font-style:italic; font-weight:600; opacity:.85;}
.topbar-nav{display:flex; gap:4px; flex-wrap:wrap;}
.topbar-nav a{
  color:#cdece4; text-decoration:none; font-size:12.5px; font-weight:600;
  padding:5px 9px; border-radius:99px; transition:background .15s, color .15s;
  white-space:nowrap;
}
.topbar-nav a:hover, .topbar-nav a.active{background:rgba(255,255,255,.14); color:#fff;}

/* ---------- page header ---------- */
.page-head{padding:38px 0 22px;}
.eyebrow{
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--font-mono); font-size:12px; font-weight:600;
  letter-spacing:.06em; text-transform:uppercase; color:var(--teal-700);
  background:var(--teal-100); padding:5px 12px; border-radius:99px; margin-bottom:14px;
}
.page-head h1{
  font-family:var(--font-display); font-weight:800; font-size:clamp(28px,5vw,42px);
  margin:0 0 8px; color:var(--ink); letter-spacing:-.01em;
}
.page-head .subtitle{font-style:italic; color:var(--ink-soft); font-size:18px; margin:0;}
.rule{border:none; border-top:2px solid var(--ink); margin:20px 0 0; opacity:.9;}

/* ---------- search row ---------- */
.vocab-search-box{margin:20px 0;}
.vocab-search-input{
  width:100%; padding:14px 18px; border:2px solid var(--line); border-radius:var(--radius-m);
  font-family:var(--font-body); font-size:16px; background:var(--panel); color:var(--ink);
  transition:border-color .15s; box-shadow:var(--shadow-card);
}
.vocab-search-input:focus{border-color:var(--teal-600); outline:none;}

/* ---------- callout boxes ---------- */
.box{border-radius:var(--radius-m); padding:18px 20px; margin:20px 0; border:1px solid transparent;}
.box h3{margin:0 0 6px; font-family:var(--font-display); font-size:14.5px; font-weight:700; display:flex; align-items:center; gap:8px;}
.box p{margin:0; font-size:15px;}
.box.tip{background:var(--teal-050); border-color:var(--teal-100); border-left:4px solid var(--teal-600); color:var(--teal-800);}
.box.usage{background:#fdf3d6; border-color:#eddca0; color:#7a5b0c;}
.box.native{background:#f1e9fb; border-color:#e2d4fb; color:#5b3aa8;}

/* ---------- vocab grid & cards ---------- */
.vocab-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:18px; margin:24px 0;}
.vocab-card{
  background:var(--panel); border:1px solid var(--line); border-radius:var(--radius-m);
  padding:20px; box-shadow:var(--shadow-card); position:relative; overflow:hidden;
  transition:transform .15s, border-color .15s;
}
.vocab-card:hover{transform:translateY(-2px); border-color:var(--teal-500);}
.vocab-card .type-tag{
  display:inline-block; font-family:var(--font-mono); font-size:10.5px; font-weight:700;
  text-transform:uppercase; padding:3px 8px; border-radius:6px; margin-bottom:8px;
}
.vocab-card .type-tag.noun{background:var(--vocab-noun-bg); color:var(--vocab-noun);}
.vocab-card .type-tag.verb{background:var(--vocab-verb-bg); color:var(--vocab-verb);}
.vocab-card .type-tag.adj{background:var(--vocab-adj-bg); color:var(--vocab-adj);}
.vocab-card .type-tag.expr{background:var(--vocab-expr-bg); color:var(--vocab-expr);}

.vocab-card .v-word{font-family:var(--font-display); font-weight:800; font-size:20px; color:var(--ink); margin-bottom:2px;}
.vocab-card .v-meta{font-family:var(--font-mono); font-size:12px; color:var(--ink-soft); margin-bottom:8px;}
.vocab-card .v-def{font-size:15px; color:var(--ink); margin-bottom:8px; font-weight:500;}
.vocab-card .v-ex{font-size:14px; font-style:italic; color:var(--teal-800); background:var(--teal-050); padding:8px 12px; border-radius:var(--radius-s); margin-bottom:8px;}
.vocab-card .v-colloc{font-size:13px; color:var(--vocab-colloc); background:var(--vocab-colloc-bg); padding:6px 10px; border-radius:6px;}

/* ---------- flashcard flip grid ---------- */
.flash-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:14px; margin:24px 0;}
.flashcard{perspective:800px; height:120px; cursor:pointer;}
.flash-inner{position:relative; width:100%; height:100%; transition:transform .5s; transform-style:preserve-3d;}
.flashcard.flipped .flash-inner{transform:rotateY(180deg);}
.flash-face{
  position:absolute; inset:0; backface-visibility:hidden; border-radius:var(--radius-m);
  display:flex; align-items:center; justify-content:center; flex-direction:column; padding:12px; text-align:center;
  font-family:var(--font-display); font-weight:700; box-shadow:var(--shadow-card);
}
.flash-face.front{background:var(--teal-700); color:#fff; font-size:18px;}
.flash-face.back{background:var(--vocab-noun); color:#fff; transform:rotateY(180deg); font-size:14px; font-family:var(--font-body);}

/* ---------- checklist ---------- */
.checklist{background:var(--teal-050); border:1px solid var(--teal-100); border-radius:var(--radius-m); padding:18px 20px; margin:26px 0;}
.checklist h3{margin:0 0 10px; font-family:var(--font-display); font-size:14.5px; color:var(--teal-800);}
.check-item{display:flex; align-items:center; gap:10px; padding:8px 0; font-size:15px; cursor:pointer; border-bottom:1px solid rgba(28,148,131,.12);}
.check-item:last-child{border-bottom:none;}
.check-item input{width:18px; height:18px; accent-color:var(--teal-700); cursor:pointer;}
.check-item.done span{text-decoration:line-through; color:var(--ink-soft);}
.check-progress{font-family:var(--font-mono); font-size:11px; color:var(--teal-800); margin-top:10px;}

/* ---------- quiz ---------- */
.quiz-panel{
  background:var(--panel); border:1px solid var(--line); border-radius:var(--radius-l);
  padding:26px; margin:34px 0; box-shadow:var(--shadow-card);
}
.quiz-head{display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:6px; flex-wrap:wrap;}
.quiz-head h2{font-family:var(--font-display); font-size:20px; margin:0;}
.quiz-score{font-family:var(--font-mono); font-size:13px; background:var(--teal-100); color:var(--teal-800); padding:5px 12px; border-radius:99px; font-weight:700;}
.qitem{border-top:1px solid var(--line); padding:20px 0;}
.qitem:first-of-type{border-top:none; padding-top:14px;}
.qitem .qtext{font-weight:700; font-size:16px; margin-bottom:12px;}
.qopts{display:flex; flex-direction:column; gap:8px;}
.qopt{
  text-align:left; border:1.5px solid var(--line); background:var(--paper); border-radius:var(--radius-s);
  padding:10px 14px; font-size:15px; cursor:pointer; font-family:var(--font-body); color:var(--ink);
  transition:border-color .15s, background .15s;
}
.qopt:hover{border-color:var(--teal-500);}
.qopt.correct{border-color:var(--vocab-verb); background:var(--vocab-verb-bg); font-weight:700;}
.qopt.incorrect{border-color:#d64545; background:#fdecec;}
.qopt[disabled]{cursor:default;}
.qexplain{display:none; margin-top:10px; font-size:14px; background:var(--teal-050); border-left:3px solid var(--teal-600); padding:10px 14px; border-radius:6px;}
.qexplain.show{display:block;}
.quiz-reset{margin-top:16px; background:none; border:1.5px solid var(--ink); color:var(--ink); font-family:var(--font-mono); font-size:12px; padding:8px 16px; border-radius:99px; cursor:pointer;}
.quiz-reset:hover{background:var(--ink); color:#fff;}

/* ---------- pager ---------- */
.pager{display:flex; justify-content:space-between; gap:16px; margin:40px 0 10px; flex-wrap:wrap;}
.pager a{
  flex:1; min-width:220px; border:1px solid var(--line); border-radius:var(--radius-m); padding:14px 18px;
  text-decoration:none; color:var(--ink); background:var(--panel); box-shadow:var(--shadow-card);
}
.pager a .dir{display:block; font-family:var(--font-mono); font-size:10.5px; color:var(--teal-700); text-transform:uppercase; letter-spacing:.06em;}
.pager a .ttl{display:block; font-family:var(--font-display); font-weight:700; font-size:15.5px; margin-top:3px;}
.pager a.next{text-align:right;}

footer.site{background:var(--ink); color:#c9d8d4; padding:34px 0; margin-top:60px; font-size:13.5px;}
footer.site a{color:#eafaf5;}
footer.site .container{display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap;}

/* ---------- homepage parts grid ---------- */
.parts-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:18px; margin:30px 0 10px;}
.part-card{
  display:block; text-decoration:none; color:var(--ink); background:var(--panel); border-radius:var(--radius-l);
  padding:22px 22px 20px; border:1px solid var(--line); box-shadow:var(--shadow-card); position:relative; overflow:hidden;
  transition:transform .15s, box-shadow .15s;
}
.part-card:hover{transform:translateY(-3px); box-shadow:0 14px 30px -14px rgba(19,35,33,.28);}
.part-card .pnum{font-family:var(--font-mono); font-size:12px; color:var(--teal-700); font-weight:700;}
.part-card h2{font-family:var(--font-display); font-size:20px; margin:6px 0 8px;}
.part-card p{margin:0 0 14px; color:var(--ink-soft); font-size:14.5px;}
.part-card .topics-count{font-family:var(--font-mono); font-size:11.5px; color:var(--teal-700); background:var(--teal-100); padding:4px 10px; border-radius:99px;}
.part-card .stripe{position:absolute; left:0; top:0; bottom:0; width:6px;}

.topic-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:14px; margin-top:16px;}
.topic-card{
  display:block; text-decoration:none; color:var(--ink); background:var(--panel);
  border:1px solid var(--line); border-radius:var(--radius-m); padding:16px 18px; box-shadow:var(--shadow-card);
  transition:border-color .15s, transform .15s;
}
.topic-card:hover{border-color:var(--teal-600); transform:translateY(-2px);}
.topic-card .ttl{font-family:var(--font-display); font-weight:700; font-size:16px; margin-top:4px;}
.topic-card .sub{font-size:12.5px; color:var(--ink-soft); margin-top:3px;}

@media (max-width:640px){
  .topbar-nav{display:none;}
  .vocab-grid{grid-template-columns:1fr;}
}

@media print {
  .topbar, .pager, .vocab-search-box { display: none !important; }
  .vocab-card, .box, .quiz-panel { background: none !important; border: 1px solid #ccc !important; box-shadow: none !important; }
}
"""

# JS content for lexique-francais/assets/app.js
APP_JS = """// COSYlanguages — Lexique français (A0–A1) — Shared Interactivity
(function(){
  "use strict";

  /* ---------- Checklist ("Pouvez-vous déjà utiliser ces mots ?") ---------- */
  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-check-fr-vocab-' + box.getAttribute('data-key');
      var stored = {};
      try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      var items = box.querySelectorAll('.check-item');
      function updateProgress(){
        var done = box.querySelectorAll('.check-item.done').length;
        var prog = box.querySelector('.check-progress');
        if(prog) prog.textContent = done + ' / ' + items.length + ' thèmes maîtrisés';
      }
      items.forEach(function(item, i){
        var input = item.querySelector('input');
        if(!input) return;
        if(stored[i]){ item.classList.add('done'); input.checked = true; }
        input.addEventListener('change', function(){
          item.classList.toggle('done', input.checked);
          stored[i] = input.checked;
          localStorage.setItem(key, JSON.stringify(stored));
          updateProgress();
        });
      });
      updateProgress();
    });
  }

  /* ---------- Flashcard flip ---------- */
  function initFlashcards(){
    document.querySelectorAll('.flashcard').forEach(function(card){
      card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
      card.setAttribute('tabindex','0');
      card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); card.classList.toggle('flipped'); }
      });
    });
  }

  /* ---------- Quiz engine ---------- */
  function initQuizzes(){
    document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
      var data;
      try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
      var scoreEl = panel.querySelector('.quiz-score');
      var score = 0;
      function refreshScore(){
        if(scoreEl) scoreEl.textContent = 'Résultat : ' + score + ' / ' + data.length;
      }
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
            if(explain){ explain.classList.add('show'); }
          });
        });
      });
      refreshScore();
      var resetBtn = panel.querySelector('.quiz-reset');
      if(resetBtn){
        resetBtn.addEventListener('click', function(){
          location.reload();
        });
      }
    });
  }

  /* ---------- Vocabulary Card Search ---------- */
  function initVocabSearch(){
    var input = document.getElementById('vocab-search');
    if(!input) return;
    input.addEventListener('input', function(){
      var q = input.value.trim().toLowerCase();
      var cards = document.querySelectorAll('.vocab-card');
      cards.forEach(function(card){
        var text = card.textContent.toLowerCase();
        card.style.display = text.indexOf(q) !== -1 ? '' : 'none';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initChecklists();
    initFlashcards();
    initQuizzes();
    initVocabSearch();
  });
})();
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

print("Assets written successfully.")

MODULES = [
    {
        "id": "module-1",
        "file": "module-1.html",
        "title": "Module 1 · Identité & Premiers Échanges",
        "subtitle": "Salutations, se présenter, famille, sentiments, corps et description physique",
        "stripe": "#3562e0",
        "topics": [
            {
                "slug": "salutations-et-politesse",
                "title": "Salutations et formules de politesse",
                "subtitle": "Premières phrases indispensables pour ouvrir un dialogue",
                "words": [
                    {"word": "Bonjour", "type": "expr", "meta": "interj. · formel", "def": "Salutation polie le matin ou pendant la journée.", "ex": "Bonjour monsieur, comment allez-vous ?", "colloc": "Bonjour à tous"},
                    {"word": "Bonsoir", "type": "expr", "meta": "interj. · formel", "def": "Salutation usitée en fin d'après-midi et le soir.", "ex": "Bonsoir madame, bienvenue chez nous.", "colloc": "Bonsoir tout le monde"},
                    {"word": "Salut", "type": "expr", "meta": "interj. · informel", "def": "Salutation amicale pour dire bonjour ou au revoir.", "ex": "Salut Thomas ! Tu vas bien ?", "colloc": "Salut toi"},
                    {"word": "Au revoir", "type": "expr", "meta": "loc. interj. · formel", "def": "Formule standard pour prendre congé.", "ex": "Merci beaucoup et au revoir !", "colloc": "Au revoir et à bientôt"},
                    {"word": "S'il vous plaît", "type": "expr", "meta": "loc. adv. · formel", "def": "Formule pour demander poliment quelque chose.", "ex": "Un café, s'il vous plaît.", "colloc": "S'il vous plaît madame"},
                    {"word": "Merci", "type": "expr", "meta": "interj.", "def": "Expression de remerciement et de gratitude.", "ex": "Merci pour votre aide précieuse.", "colloc": "Merci beaucoup"}
                ],
                "tip": "En français, l'emploi de « vous » (s'il vous plaît, comment allez-vous) exprime le respect formel, tandis que « tu » (s'il te plaît, tu vas bien) s'utilise avec les proches.",
                "grammar_link": "../../grammaire-francaise/topics/les-pronoms.html"
            },
            {
                "slug": "se-presenter-et-identite",
                "title": "Se présenter et identité",
                "subtitle": "Dire son nom, sa nationalité, sa profession et son âge",
                "words": [
                    {"word": "le nom", "type": "noun", "meta": "n. m.", "def": "Nom de famille d'une personne.", "ex": "Quel est votre nom de famille ?", "colloc": "nom de famille"},
                    {"word": "le prénom", "type": "noun", "meta": "n. m.", "def": "Nom personnel placé avant le nom de famille.", "ex": "Mon prénom est Sophie.", "colloc": "mon prénom"},
                    {"word": "la nationalité", "type": "noun", "meta": "n. f.", "def": "Appartenance juridique d'une personne à une nation.", "ex": "Elle a la nationalité française.", "colloc": "double nationalité"},
                    {"word": "l'âge", "type": "noun", "meta": "n. m.", "def": "Nombre d'années vécues par un être.", "ex": "J'ai vingt-cinq ans.", "colloc": "quel âge"},
                    {"word": "habiter", "type": "verb", "meta": "v. t. / i.", "def": "Avoir sa résidence dans un lieu.", "ex": "J'habite à Paris depuis deux ans.", "colloc": "habiter en ville"},
                    {"word": "s'appeler", "type": "verb", "meta": "v. pr.", "def": "Avoir tel nom ou tel prénom.", "ex": "Je m'appelle Pierre.", "colloc": "comment vous vous appelez"}
                ],
                "tip": "Pour exprimer l'âge en français, on utilise le verbe « avoir » (j'ai 20 ans) et non pas le verbe être.",
                "grammar_link": "../../grammaire-francaise/topics/etre.html"
            },
            {
                "slug": "nombres-elementaires",
                "title": "Les nombres élémentaires (0–20)",
                "subtitle": "Compter et indiquer des quantités de base",
                "words": [
                    {"word": "un / une", "type": "noun", "meta": "n. / dét.", "def": "Chiffre 1 ; unité de comptage.", "ex": "J'ai un frère et une sœur.", "colloc": "un instant"},
                    {"word": "deux", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant au chiffre 2.", "ex": "Deux cafés, s'il vous plaît.", "colloc": "tous les deux"},
                    {"word": "trois", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant au chiffre 3.", "ex": "Il reste trois pommes dans le panier.", "colloc": "trois fois"},
                    {"word": "cinq", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant au chiffre 5.", "ex": "Le cours dure cinq minutes.", "colloc": "cinq euros"},
                    {"word": "dix", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant au chiffre 10.", "ex": "J'ai dix euros dans mon portefeuille.", "colloc": "dix minutes"},
                    {"word": "vingt", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant au chiffre 20.", "ex": "Elle a vingt ans aujourd'hui.", "colloc": "vingt personnes"}
                ],
                "tip": "Au nombre « un », la forme s'accorde au féminin : « un livre » (masculin) et « une table » (féminin).",
                "grammar_link": "../../grammaire-francaise/topics/articles.html"
            },
            {
                "slug": "grands-nombres-et-chiffres",
                "title": "Les grands nombres et chiffres",
                "subtitle": "Compter de 21 à 100 et au-delà",
                "words": [
                    {"word": "trente", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant à 30.", "ex": "Le mois compte trente jours.", "colloc": "trente et un"},
                    {"word": "quarante", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant à 40.", "ex": "Mon père a quarante ans.", "colloc": "quarante minutes"},
                    {"word": "cinquante", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant à 50.", "ex": "Le billet coûte cinquante euros.", "colloc": "cinquante pour cent"},
                    {"word": "soixante", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant à 60.", "ex": "Une heure contient soixante minutes.", "colloc": "soixante-dix"},
                    {"word": "cent", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant à 100.", "ex": "Ce bâtiment a cent ans.", "colloc": "deux cents euros"},
                    {"word": "mille", "type": "noun", "meta": "adj. num.", "def": "Nombre correspondant à 1000.", "ex": "La ville se trouve à mille kilomètres.", "colloc": "mille mercis"}
                ],
                "tip": "En français de France, 70 se dit « soixante-dix » (60+10), 80 se dit « quatre-vingts » (4x20) et 90 se dit « quatre-vingt-dix » (4x20+10)."
            },
            {
                "slug": "famille-et-proches",
                "title": "La famille et les proches",
                "subtitle": "Les membres de la famille et les relations personnelles",
                "words": [
                    {"word": "la mère", "type": "noun", "meta": "n. f.", "def": "Femme qui a mis au monde un ou plusieurs enfants.", "ex": "Ma mère est professeure de français.", "colloc": "mère de famille"},
                    {"word": "le père", "type": "noun", "meta": "n. m.", "def": "Homme qui a un ou plusieurs enfants.", "ex": "Mon père aime jardiner le dimanche.", "colloc": "père de famille"},
                    {"word": "le frère", "type": "noun", "meta": "n. m.", "def": "Garçon né des mêmes parents.", "ex": "J'ai un frère aîné.", "colloc": "grand frère"},
                    {"word": "la sœur", "type": "noun", "meta": "n. f.", "def": "Fille née des mêmes parents.", "ex": "Ma sœur habite à Lyon.", "colloc": "petite sœur"},
                    {"word": "l'enfant", "type": "noun", "meta": "n. m. / f.", "def": "Garçon ou fille dans l'âge de l'enfance.", "ex": "Les enfants jouent dans le jardin.", "colloc": "avoir des enfants"},
                    {"word": "le grand-père", "type": "noun", "meta": "n. m.", "def": "Père du père ou de la mère.", "ex": "Mon grand-père raconte des histoires.", "colloc": "mes grands-parents"}
                ],
                "tip": "Utilisez les adjectifs possessifs « mon », « ma », « mes » pour désigner les membres de votre famille.",
                "grammar_link": "../../grammaire-francaise/topics/adjectifs-possessifs.html"
            },
            {
                "slug": "corps-humain-et-visage",
                "title": "Le corps humain et le visage",
                "subtitle": "Vocabulaire pour décrire les parties du corps",
                "words": [
                    {"word": "la tête", "type": "noun", "meta": "n. f.", "def": "Partie supérieure du corps contenant le cerveau.", "ex": "J'ai mal à la tête aujourd'hui.", "colloc": "avoir mal à la tête"},
                    {"word": "le visage", "type": "noun", "meta": "n. m.", "def": "Partie antérieure de la tête humaine.", "ex": "Elle a un visage très sympathique.", "colloc": "visage souriant"},
                    {"word": "les yeux", "type": "noun", "meta": "n. m. pl.", "def": "Organes de la vue (pluriel de l'œil).", "ex": "Il a les yeux bleus.", "colloc": "ouvrir les yeux"},
                    {"word": "la main", "type": "noun", "meta": "n. f.", "def": "Partie du corps située au bout du bras.", "ex": "Donne-moi la main pour traverser.", "colloc": "main droite"},
                    {"word": "le bras", "type": "noun", "meta": "n. m.", "def": "Membre supérieur reliant l'épaule à la main.", "ex": "Il s'est cassé le bras au ski.", "colloc": "les bras ouverts"},
                    {"word": "le pied", "type": "noun", "meta": "n. m.", "def": "Partie inférieure de la jambe posée au sol.", "ex": "Nous voyageons à pied.", "colloc": "aller à pied"}
                ],
                "tip": "Pour dire qu'on ressent une douleur, on utilise la structure « avoir mal à + article contracté » (au bras, à la tête, aux yeux).",
                "grammar_link": "../../grammaire-francaise/topics/prepositions-lieu-1.html"
            },
            {
                "slug": "description-physique-et-caractere",
                "title": "Description physique et caractère",
                "subtitle": "Décrire l'apparence et la personnalité d'une personne",
                "words": [
                    {"word": "grand / grande", "type": "adj", "meta": "adj.", "def": "D'une taille supérieure à la moyenne.", "ex": "Il est grand et mince.", "colloc": "de grande taille"},
                    {"word": "petit / petite", "type": "adj", "meta": "adj.", "def": "D'une taille inférieure à la moyenne.", "ex": "Elle a une petite fille très mignonne.", "colloc": "de petite taille"},
                    {"word": "sympathique", "type": "adj", "meta": "adj.", "def": "Qui attire la bienveillance et l'amitié.", "ex": "Le nouveau voisin est très sympathique.", "colloc": "personne sympathique"},
                    {"word": "calme", "type": "adj", "meta": "adj.", "def": "Tranquille, sans agitation ni bruit.", "ex": "C'est un enfant très calme et posé.", "colloc": "garder son calme"},
                    {"word": "les cheveux", "type": "noun", "meta": "n. m. pl.", "def": "Ensemble des poils poussant sur la tête.", "ex": "Elle a les cheveux blonds et bouclés.", "colloc": "cheveux courts"},
                    {"word": "souriant / souriante", "type": "adj", "meta": "adj.", "def": "Qui exprime de la bienveillance par son visage.", "ex": "La boulangère est toujours souriante.", "colloc": "visage souriant"}
                ],
                "tip": "En français, la plupart des adjectifs de description se placent après le nom (un homme grand, une femme sympathique)."
            },
            {
                "slug": "sentiments-et-emotions",
                "title": "Sentiments et émotions",
                "subtitle": "Exprimer ses états d'âme et son humeur",
                "words": [
                    {"word": "heureux / heureuse", "type": "adj", "meta": "adj.", "def": "Qui éprouve du bonheur ou de la joie.", "ex": "Je suis très heureux de vous rencontrer.", "colloc": "être heureux"},
                    {"word": "triste", "type": "adj", "meta": "adj.", "def": "Qui éprouve du chagrin ou de la peine.", "ex": "Pourquoi es-tu triste ce soir ?", "colloc": "air triste"},
                    {"word": "fatigué / fatiguée", "type": "adj", "meta": "adj.", "def": "Qui manque d'énergie après un effort.", "ex": "Après le travail, je suis fatiguée.", "colloc": "très fatigué"},
                    {"word": "content / contente", "type": "adj", "meta": "adj.", "def": "Qui éprouve de la satisfaction.", "ex": "Nous sommes contents de nos résultats.", "colloc": "être content de"},
                    {"word": "la peur", "type": "noun", "meta": "n. f.", "def": "Sentiment d'inquiétude face au danger.", "ex": "L'enfant a peur du noir.", "colloc": "avoir peur de"},
                    {"word": "la joie", "type": "noun", "meta": "n. f.", "def": "Sentiment de vif bonheur intérieur.", "ex": "C'est une grande joie de revoir mes amis.", "colloc": "avec joie"}
                ],
                "tip": "Attention aux accords des adjectifs au féminin : « heureux » devient « heureuse », « fatigué » devient « fatiguée ».",
                "grammar_link": "../../grammaire-francaise/topics/accord-des-adjectifs.html"
            }
        ]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Module 2 · Vie Quotidienne & Environnement",
        "subtitle": "Couleurs, vêtements, maison, meubles, nourriture, repas et boissons",
        "stripe": "#1c8f56",
        "topics": [
            {
                "slug": "couleurs-et-nuances",
                "title": "Les couleurs et nuances",
                "subtitle": "Vocabulaire pour qualifier l'aspect visuel des objets",
                "words": [
                    {"word": "rouge", "type": "adj", "meta": "adj.", "def": "De la couleur du sang ou de la tomate.", "ex": "Elle porte une robe rouge.", "colloc": "rouge vif"},
                    {"word": "bleu / bleue", "type": "adj", "meta": "adj.", "def": "De la couleur du ciel dégagé.", "ex": "La mer est magnifique et bleue.", "colloc": "bleu ciel"},
                    {"word": "vert / verte", "type": "adj", "meta": "adj.", "def": "De la couleur de l'herbe fraîche.", "ex": "J'aime les pommes vertes.", "colloc": "vert foncé"},
                    {"word": "jaune", "type": "adj", "meta": "adj.", "def": "De la couleur du soleil ou du citron.", "ex": "Le soleil brille dans le ciel jaune.", "colloc": "jaune poussin"},
                    {"word": "noir / noire", "type": "adj", "meta": "adj.", "def": "De la couleur de la nuit sans lune.", "ex": "Mon chat est entièrement noir.", "colloc": "café noir"},
                    {"word": "blanc / blanche", "type": "adj", "meta": "adj.", "def": "De la couleur de la neige fraîche.", "ex": "La chemise blanche est propre.", "colloc": "vin blanc"}
                ],
                "tip": "La plupart des adjectifs de couleur s'accordent en genre et en nombre avec le nom qu'ils qualifient (des robes bleues).",
                "grammar_link": "../../grammaire-francaise/topics/accord-des-adjectifs.html"
            },
            {
                "slug": "vetements-et-accessoires",
                "title": "Vêtements et accessoires",
                "subtitle": "S'habiller, modes et tenue vestimentaire",
                "words": [
                    {"word": "le pantalon", "type": "noun", "meta": "n. m.", "def": "Vêtement qui couvre les jambes.", "ex": "Il met un pantalon noir pour travailler.", "colloc": "pantalon en jean"},
                    {"word": "la chemise", "type": "noun", "meta": "n. f.", "def": "Vêtement léger à manches et à boutons.", "ex": "Une chemise blanche élégante.", "colloc": "chemise à manches courtes"},
                    {"word": "le manteau", "type": "noun", "meta": "n. m.", "def": "Vêtement chaud porté par-dessus les autres en hiver.", "ex": "Prends ton manteau, il fait froid dehors.", "colloc": "manteau d'hiver"},
                    {"word": "la robe", "type": "noun", "meta": "n. f.", "def": "Vêtement féminin d'une seule pièce.", "ex": "Elle a acheté une belle robe d'été.", "colloc": "robe de soirée"},
                    {"word": "les chaussures", "type": "noun", "meta": "n. f. pl.", "def": "Accessoire de cuir ou tissu qui couvre les pieds.", "ex": "Mes nouvelles chaussures de sport sont confortables.", "colloc": "paire de chaussures"},
                    {"word": "porter", "type": "verb", "meta": "v. t.", "def": "Avoir sur soi un vêtement ou un accessoire.", "ex": "Elle porte des lunettes de soleil.", "colloc": "porter un chapeau"}
                ],
                "tip": "Pour dire qu'on s'habille avec un vêtement, on emploie le verbe « porter » ou la formule réflexive « s'habiller »."
            },
            {
                "slug": "maison-et-pieces",
                "title": "La maison et les pièces",
                "subtitle": "Le logement, les pièces et les espaces de vie",
                "words": [
                    {"word": "la maison", "type": "noun", "meta": "n. f.", "def": "Bâtiment destiné au logement d'une famille.", "ex": "Notre maison se trouve au bout de la rue.", "colloc": "à la maison"},
                    {"word": "l'appartement", "type": "noun", "meta": "n. m.", "def": "Logement situé dans un immeuble.", "ex": "Ils louent un appartement de trois pièces.", "colloc": "grand appartement"},
                    {"word": "la cuisine", "type": "noun", "meta": "n. f.", "def": "Pièce où l'on prépare les repas.", "ex": "Le dîner prépare doucement dans la cuisine.", "colloc": "faire la cuisine"},
                    {"word": "la chambre", "type": "noun", "meta": "n. f.", "def": "Pièce destinée au sommeil et au repos.", "ex": "Ma chambre est calme et claire.", "colloc": "chambre à coucher"},
                    {"word": "le salon", "type": "noun", "meta": "n. m.", "def": "Pièce principale de réception dans un logement.", "ex": "Nous regardons un film dans le salon.", "colloc": "petit salon"},
                    {"word": "la salle de bains", "type": "noun", "meta": "n. f.", "def": "Pièce équipée pour la toilette quotidienne.", "ex": "La salle de bains est au premier étage.", "colloc": "salle de bains moderne"}
                ],
                "tip": "En français, « à la maison » signifie aussi bien « chez moi » que « dans mon logement »."
            },
            {
                "slug": "meubles-et-equipements",
                "title": "Les meubles et équipements",
                "subtitle": "Aménagement intérieur et mobilier du foyer",
                "words": [
                    {"word": "la table", "type": "noun", "meta": "n. f.", "def": "Meuble composé d'un plateau posé sur des pieds.", "ex": "Mettez les assiettes sur la table.", "colloc": "table à manger"},
                    {"word": "la chaise", "type": "noun", "meta": "n. f.", "def": "Siège individuel avec dossier et sans bras.", "ex": "Il s'assoit sur une chaise en bois.", "colloc": "s'asseoir sur une chaise"},
                    {"word": "le lit", "type": "noun", "meta": "n. m.", "def": "Meuble sur lequel on s'étend pour dormir.", "ex": "Le lit est très confortable.", "colloc": "faire son lit"},
                    {"word": "l'armoire", "type": "noun", "meta": "n. f.", "def": "Grand meuble fermé pour ranger les vêtements.", "ex": "Les vestes sont suspendues dans l'armoire.", "colloc": "armoire à pharmacie"},
                    {"word": "le canapé", "type": "noun", "meta": "n. m.", "def": "Siège confortable pour plusieurs personnes.", "ex": "Le chat dort paisiblement sur le canapé.", "colloc": "canapé convertible"},
                    {"word": "la télévision", "type": "noun", "meta": "n. f.", "def": "Appareil récepteur d'émissions audiovisuelle.", "ex": "Nous regardons les informations à la télévision.", "colloc": "regarder la télévision"}
                ],
                "tip": "Faites attention au genre : « le lit », « le canapé » (masculin), mais « la table », « la chaise », « l'armoire » (féminin).",
                "grammar_link": "../../grammaire-francaise/topics/genre-des-noms-1.html"
            },
            {
                "slug": "objets-du-quotidien",
                "title": "Les objets du quotidien",
                "subtitle": "Articles personnels, outils légers et ustensiles",
                "words": [
                    {"word": "le sac", "type": "noun", "meta": "n. m.", "def": "Accessoire souple servant à porter des objets.", "ex": "J'ai oublié mes clés dans mon sac.", "colloc": "sac à dos"},
                    {"word": "les clés", "type": "noun", "meta": "n. f. pl.", "def": "Instrument de métal servant à ouvrir une serrure.", "ex": "Où sont les clés de la maison ?", "colloc": "trousseau de clés"},
                    {"word": "les lunettes", "type": "noun", "meta": "n. f. pl.", "def": "Appareil d'optique posé sur le nez pour la vue.", "ex": "Il porte des lunettes de vue pour lire.", "colloc": "lunettes de soleil"},
                    {"word": "la montre", "type": "noun", "meta": "n. f.", "def": "Petit appareil portatif indiquant l'heure.", "ex": "Ma montre avance de deux minutes.", "colloc": "montre au poignet"},
                    {"word": "le portefeuille", "type": "noun", "meta": "n. m.", "def": "Étui de cuir où l'on range argent et papiers.", "ex": "Son portefeuille contient ses cartes bancaires.", "colloc": "perdre son portefeuille"},
                    {"word": "le parapluie", "type": "noun", "meta": "n. m.", "def": "Objet portatif protégeant contre la pluie.", "ex": "N'oublie pas ton parapluie, il va pleuvoir.", "colloc": "ouvrir un parapluie"}
                ],
                "tip": "Des mots comme « lunettes » et « clés » sont très souvent employés au pluriel dans la vie courante."
            },
            {
                "slug": "nourriture-et-aliments",
                "title": "La nourriture et les aliments",
                "subtitle": "Ingrédients fondamentaux et produits du quotidien",
                "words": [
                    {"word": "le pain", "type": "noun", "meta": "n. m.", "def": "Aliment de base fait de farine, eau et levure.", "ex": "J'achète du pain frais chaque matin à la boulangerie.", "colloc": "du pain frais"},
                    {"word": "le fromage", "type": "noun", "meta": "n. m.", "def": "Produit laitier fermenté très populaire en France.", "ex": "La France compte des centaines de sortes de fromage.", "colloc": "plateau de fromage"},
                    {"word": "la pomme", "type": "noun", "meta": "n. f.", "def": "Fruit comestible rond à peau rouge, verte ou jaune.", "ex": "Une pomme croquante pour le goûter.", "colloc": "pomme de terre"},
                    {"word": "la viande", "type": "noun", "meta": "n. f.", "def": "Chair des animaux consommée comme aliment.", "ex": "Il ne mange pas de viande, il est végétarien.", "colloc": "viande rouge"},
                    {"word": "le poisson", "type": "noun", "meta": "n. m.", "def": "Animal aquatique consommé frais ou cuisiné.", "ex": "Le poisson grillé est délicieux avec du citron.", "colloc": "poisson frais"},
                    {"word": "l'œuf", "type": "noun", "meta": "n. m.", "def": "Produit pondu par la poule, consommé cuit ou cru.", "ex": "Je prépare une omelette avec trois œufs.", "colloc": "des œufs au plat"}
                ],
                "tip": "Quand on parle d'une quantité indéfinie d'aliments, on utilise les articles partitifs : du pain, de la viande, des œufs.",
                "grammar_link": "../../grammaire-francaise/topics/articles-partitifs.html"
            },
            {
                "slug": "boissons-et-repas",
                "title": "Les boissons et repas",
                "subtitle": "Boire, petit-déjeuner, déjeuner et dîner",
                "words": [
                    {"word": "l'eau", "type": "noun", "meta": "n. f.", "def": "Liquide transparent indispensable à la vie.", "ex": "Buvez beaucoup d'eau pendant la journée.", "colloc": "eau minérale"},
                    {"word": "le café", "type": "noun", "meta": "n. m.", "def": "Boisson chaude préparée avec des grains torréfiés.", "ex": "Un petit café noir pour bien commencer la journée.", "colloc": "prendre un café"},
                    {"word": "le thé", "type": "noun", "meta": "n. m.", "def": "Boisson préparée par infusion de feuilles séchées.", "ex": "Elle préfère le thé vert au thé noir.", "colloc": "thé vert"},
                    {"word": "le petit-déjeuner", "type": "noun", "meta": "n. m.", "def": "Premier repas de la journée pris le matin.", "ex": "Au petit-déjeuner, je mange des croissants.", "colloc": "prendre le petit-déjeuner"},
                    {"word": "le déjeuner", "type": "noun", "meta": "n. m.", "def": "Repas du milieu de la journée (vers midi).", "ex": "Le déjeuner est servi à midi et demi.", "colloc": "pause déjeuner"},
                    {"word": "le dîner", "type": "noun", "meta": "n. m.", "def": "Dernier repas principal de la journée pris le soir.", "ex": "Toute la famille se réunit pour le dîner.", "colloc": "préparer le dîner"}
                ],
                "tip": "En France, la structure traditionnelle des repas comprend le petit-déjeuner le matin, le déjeuner à midi et le dîner le soir."
            },
            {
                "slug": "au-restaurant-et-cafe",
                "title": "Au restaurant et au café",
                "subtitle": "Commander, lire le menu et demander l'addition",
                "words": [
                    {"word": "le menu", "type": "noun", "meta": "n. m.", "def": "Carte présentant les plats et boissons proposés.", "ex": "Pourriez-vous nous apporter le menu, s'il vous plaît ?", "colloc": "menu du jour"},
                    {"word": "la commande", "type": "noun", "meta": "n. f.", "def": "Choix des plats et boissons faits auprès du serveur.", "ex": "Le serveur vient prendre notre commande.", "colloc": "passer commande"},
                    {"word": "l'addition", "type": "noun", "meta": "n. f.", "def": "Note indiquant le montant à payer au restaurant.", "ex": "L'addition, s'il vous plaît !", "colloc": "demander l'addition"},
                    {"word": "le serveur / la serveuse", "type": "noun", "meta": "n. m. / f.", "def": "Personne qui sert les clients au café ou restaurant.", "ex": "La serveuse est très aimable et rapide.", "colloc": "appeler le serveur"},
                    {"word": "commander", "type": "verb", "meta": "v. t.", "def": "Demander des plats ou des boissons à consommer.", "ex": "Nous souhaitons commander deux plat du jour.", "colloc": "commander à boire"},
                    {"word": "délicieux / délicieuse", "type": "adj", "meta": "adj.", "def": "Qui a un goût très agréable et savoureux.", "ex": "Cette soupe aux légumes est absolument délicieuse.", "colloc": "repas délicieux"}
                ],
                "tip": "Au restaurant en France, pour demander la note, la phrase classique et courtoise est : « L'addition, s'il vous plaît ! »."
            }
        ]
    },
    {
        "id": "module-3",
        "file": "module-3.html",
        "title": "Module 3 · Temps, Espace & Déplacements",
        "subtitle": "Météo, saisons, heure, routine quotidienne, transports, ville et orientation",
        "stripe": "#7c4fd6",
        "topics": [
            {
                "slug": "meteo-et-saisons",
                "title": "La météo et les saisons",
                "subtitle": "Parler du temps qu'il fait et des quatre saisons",
                "words": [
                    {"word": "le soleil", "type": "noun", "meta": "n. m.", "def": "Astre lumineux qui éclaire et chauffe la Terre.", "ex": "Aujourd'hui, il y a du soleil et il fait chaud.", "colloc": "au soleil"},
                    {"word": "la pluie", "type": "noun", "meta": "n. f.", "def": "Eau tombant des nuages sous forme de gouttes.", "ex": "Prends ton parapluie, la pluie commence.", "colloc": "jour de pluie"},
                    {"word": "la neige", "type": "noun", "meta": "n. f.", "def": "Eau congelée qui tombe en flocons blancs.", "ex": "En hiver, la montagne se couvre de neige.", "colloc": "tomber de la neige"},
                    {"word": "l'été", "type": "noun", "meta": "n. m.", "def": "Saison la plus chaude de l'année.", "ex": "En été, nous allons souvent à la plage.", "colloc": "en été"},
                    {"word": "l'hiver", "type": "noun", "meta": "n. m.", "def": "Saison la plus froide de l'année.", "ex": "En hiver, il fait très froid dans le nord.", "colloc": "en hiver"},
                    {"word": "faire beau / froid", "type": "expr", "meta": "loc. v.", "def": "Formules impersonnelles pour décrire le temps qu'il fait.", "ex": "Il fait beau aujourd'hui, allons nous promener !", "colloc": "il fait beau"}
                ],
                "tip": "En français, on utilise la formule impersonnelle « Il fait... » pour décrire la météo : il fait chaud, il fait beau, il fait froid."
            },
            {
                "slug": "heure-et-moment-du-jour",
                "title": "L'heure et les moments du jour",
                "subtitle": "Lire l'heure et se repérer dans la journée",
                "words": [
                    {"word": "l'heure", "type": "noun", "meta": "n. f.", "def": "Unité de mesure du temps égale à 60 minutes.", "ex": "Quelle heure est-il, s'il vous plaît ?", "colloc": "à quelle heure"},
                    {"word": "le matin", "type": "noun", "meta": "n. m.", "def": "Première partie de la journée, du lever du soleil à midi.", "ex": "Je me lève tôt le matin.", "colloc": "tôt le matin"},
                    {"word": "le midi", "type": "noun", "meta": "n. m.", "def": "Le milieu de la journée (12 heures).", "ex": "Nous mangeons ensemble à midi pile.", "colloc": "à midi"},
                    {"word": "l'après-midi", "type": "noun", "meta": "n. m. / f.", "def": "Période entre midi et le début de la soirée.", "ex": "Je travaille au bureau tout l'après-midi.", "colloc": "cet après-midi"},
                    {"word": "le soir", "type": "noun", "meta": "n. m.", "def": "Fin de la journée, entre la fin de l'après-midi et la nuit.", "ex": "Le soir, nous aimons lire au calme.", "colloc": "ce soir"},
                    {"word": "la nuit", "type": "noun", "meta": "n. f.", "def": "Période d'obscurité entre le coucher et le lever du soleil.", "ex": "Bonne nuit, faites de beaux rêves !", "colloc": "bonne nuit"}
                ],
                "tip": "Pour demander l'heure, la formule universelle est : « Quelle heure est-il ? » Réponse : « Il est huit heures. »"
            },
            {
                "slug": "routine-quotidienne",
                "title": "La routine quotidienne",
                "subtitle": "Les actions répétées du matin jusqu'au soir",
                "words": [
                    {"word": "se lever", "type": "verb", "meta": "v. pr.", "def": "Quitter son lit après le sommeil.", "ex": "Je me lève tous les jours à sept heures.", "colloc": "se lever tôt"},
                    {"word": "se laver", "type": "verb", "meta": "v. pr.", "def": "Nettoyer son corps avec de l'eau et du savon.", "ex": "Il se lave le visage le matin.", "colloc": "se laver les mains"},
                    {"word": "prendre le petit-déjeuner", "type": "expr", "meta": "loc. v.", "def": "Consommer le premier repas du matin.", "ex": "Elle prend son petit-déjeuner en lisant le journal.", "colloc": "au petit-déjeuner"},
                    {"word": "travailler", "type": "verb", "meta": "v. i.", "def": "Effectuer une activité professionnelle ou intellectuelle.", "ex": "Mon père travaille de huit heures à dix-huit heures.", "colloc": "travailler dur"},
                    {"word": "rentrer", "type": "verb", "meta": "v. i.", "def": "Revenir chez soi ou à son point de départ.", "ex": "Je rentre à la maison en bus vers dix-neuf heures.", "colloc": "rentrer chez soi"},
                    {"word": "se coucher", "type": "verb", "meta": "v. pr.", "def": "Aller dans son lit pour s'endormir.", "ex": "Les enfants se couchent à vingt-et-une heures.", "colloc": "se coucher tard"}
                ],
                "tip": "Les verbes pronominaux (se lever, se laver, se coucher) s'emploient avec des pronoms réfléchis (je me lève, tu te laves, il se couche).",
                "grammar_link": "../../grammaire-francaise/topics/verbes-pronominaux.html"
            },
            {
                "slug": "transports-et-deplacements",
                "title": "Transports et déplacements",
                "subtitle": "Moyens de transport et voyages urbains",
                "words": [
                    {"word": "le bus", "type": "noun", "meta": "n. m.", "def": "Grand véhicule automobile de transport en commun.", "ex": "J'attends le bus pour aller au centre-ville.", "colloc": "prendre le bus"},
                    {"word": "le train", "type": "noun", "meta": "n. m.", "def": "Moyen de transport guidé composé de wagons.", "ex": "Le train pour Paris part de la voie numéro 3.", "colloc": "voyager en train"},
                    {"word": "le métro", "type": "noun", "meta": "n. m.", "def": "Chemin de fer urbain généralement souterrain.", "ex": "Le métro parisien est très rapide et pratique.", "colloc": "station de métro"},
                    {"word": "la voiture", "type": "noun", "meta": "n. f.", "def": "Véhicule automobile personnel à quatre roues.", "ex": "Il va au travail en voiture tous les matins.", "colloc": "en voiture"},
                    {"word": "le vélo", "type": "noun", "meta": "n. m.", "def": "Véhicule à deux roues propulsé par des pédales.", "ex": "Nous faisons une belle promenade à vélo le dimanche.", "colloc": "faire du vélo"},
                    {"word": "l'avion", "type": "noun", "meta": "n. m.", "def": "Appareil volant de transport aérien de personnes.", "ex": "L'avion atterrit à l'aéroport dans dix minutes.", "colloc": "prendre l'avion"}
                ],
                "tip": "Utilisez « en » pour les transports fermés (en train, en bus, en voiture, en avion) et « à » pour les transports ouverts (à vélo, à pied)."
            },
            {
                "slug": "la-ville-et-lieux-publics",
                "title": "La ville et lieux publics",
                "subtitle": "Les édifices, rues et commerces de proximité",
                "words": [
                    {"word": "la rue", "type": "noun", "meta": "n. f.", "def": "Voie de circulation bordée de maisons en ville.", "ex": "C'est une grande rue commerçante très animée.", "colloc": "dans la rue"},
                    {"word": "la place", "type": "noun", "meta": "n. f.", "def": "Espace public découvert entouré de bâtiments.", "ex": "On se retrouve sur la place du marché à midi.", "colloc": "sur la place"},
                    {"word": "la banque", "type": "noun", "meta": "n. f.", "def": "Établissement financier qui gère l'argent des clients.", "ex": "La banque est fermée le lundi matin.", "colloc": "aller à la banque"},
                    {"word": "la gare", "type": "noun", "meta": "n. f.", "def": "Bâtiment d'accueil des voyageurs du train.", "ex": "La gare centrale se trouve tout près d'ici.", "colloc": "à la gare"},
                    {"word": "le parc", "type": "noun", "meta": "n. m.", "def": "Grand jardin public aménagé avec des arbres.", "ex": "Les enfants aiment courir dans le parc.", "colloc": "dans le parc"},
                    {"word": "l'hôpital", "type": "noun", "meta": "n. m.", "def": "Établissement médical où l'on soigne les malades.", "ex": "L'ambulance emmène le patient à l'hôpital.", "colloc": "à l'hôpital"}
                ],
                "tip": "Pour indiquer la présence d'un lieu dans une ville, on utilise la tournure impersonnelle « il y a... »."
            },
            {
                "slug": "orientations-et-directions",
                "title": "Orientations et directions",
                "subtitle": "Demander son chemin et indiquer la direction",
                "words": [
                    {"word": "à gauche", "type": "expr", "meta": "loc. adv.", "def": "Du côté opposé à la droite.", "ex": "Tournez à gauche après le feu rouge.", "colloc": "tourner à gauche"},
                    {"word": "à droite", "type": "expr", "meta": "loc. adv.", "def": "Du côté opposé à la gauche.", "ex": "La boulangerie est juste à droite.", "colloc": "tourner à droite"},
                    {"word": "tout droit", "type": "expr", "meta": "loc. adv.", "def": "En suivant la ligne droite sans tourner.", "ex": "Continuez tout droit pendant cent mètres.", "colloc": "aller tout droit"},
                    {"word": "à côté de", "type": "expr", "meta": "loc. prép.", "def": "Dans une position très proche ou contiguë.", "ex": "La pharmacie se trouve à côté de la banque.", "colloc": "juste à côté de"},
                    {"word": "en face de", "type": "expr", "meta": "loc. prép.", "def": "Vis-à-vis, du côté opposé de la rue ou pièce.", "ex": "Le musée est situé en face de l'église.", "colloc": "en face de la gare"},
                    {"word": "loin / près", "type": "expr", "meta": "adv.", "def": "Distance importante ou réduite par rapport à un repère.", "ex": "Le centre-ville n'est pas loin d'ici.", "colloc": "tout près d'ici"}
                ],
                "tip": "Attention aux contractions avec les prépositions de lieu : « près de + le = près du », « en face de + les = en face des ».",
                "grammar_link": "../../grammaire-francaise/topics/prepositions-lieu-1.html"
            },
            {
                "slug": "animaux-et-nature",
                "title": "Les animaux et la nature",
                "subtitle": "Animaux domestiques, faune et espaces naturels",
                "words": [
                    {"word": "le chien", "type": "noun", "meta": "n. m.", "def": "Animal domestique fidèle, compagnon de l'homme.", "ex": "Le chien aboie joyeusement dans le jardin.", "colloc": "promener le chien"},
                    {"word": "le chat", "type": "noun", "meta": "n. m.", "def": "Petit animal domestique félin et indépendant.", "ex": "Le chat dort sur le coussin du salon.", "colloc": "caresser le chat"},
                    {"word": "l'arbre", "type": "noun", "meta": "n. m.", "def": "Plante haute au tronc en bois et au feuillage vert.", "ex": "Les oiseaux chantent dans l'arbre.", "colloc": "au pied de l'arbre"},
                    {"word": "la fleur", "type": "noun", "meta": "n. f.", "def": "Partie colorée et odorante des plantes.", "ex": "Il a offert un bouquet de fleurs sauvages.", "colloc": "bouquet de fleurs"},
                    {"word": "la montagne", "type": "noun", "meta": "n. f.", "def": "Grande élévation naturelle du relief de la terre.", "ex": "Nous faisons de la randonnée en montagne.", "colloc": "à la montagne"},
                    {"word": "la mer", "type": "noun", "meta": "n. f.", "def": "Vaste étendue d'eau salée qui couvre le globe.", "ex": "Nous aimons nager dans la mer en été.", "colloc": "au bord de la mer"}
                ],
                "tip": "En vacances, on dit « aller à la montagne », « aller à la mer » ou « aller à la campagne »."
            },
            {
                "slug": "voyages-et-vacances",
                "title": "Voyages et vacances",
                "subtitle": "Tourisme, hôtel, valises et découvertes",
                "words": [
                    {"word": "le voyage", "type": "noun", "meta": "n. m.", "def": "Action de se déplacer loin de chez soi.", "ex": "Bon voyage à vous tous en Italie !", "colloc": "bon voyage"},
                    {"word": "l'hôtel", "type": "noun", "meta": "n. m.", "def": "Établissement qui loue des chambres aux voyageurs.", "ex": "Nous avons réservé une chambre à l'hôtel.", "colloc": "chambre d'hôtel"},
                    {"word": "la valise", "type": "noun", "meta": "n. f.", "def": "Bagage rectangulaire rigide ou souple.", "ex": "Mes valises sont prêtes pour le départ.", "colloc": "faire sa valise"},
                    {"word": "le passeport", "type": "noun", "meta": "n. m.", "def": "Document d'identité officiel pour voyager à l'étranger.", "ex": "N'oubliez pas d'emporter votre passeport.", "colloc": "passeport valide"},
                    {"word": "la plage", "type": "noun", "meta": "n. f.", "def": "Bord de mer ou de lac recouvert de sable.", "ex": "Les enfants construisent un château de sable sur la plage.", "colloc": "aller à la plage"},
                    {"word": "reserver", "type": "verb", "meta": "v. t.", "def": "Retenir d'avance une place, un billet ou une chambre.", "ex": "Je souhaite réserver une table pour deux personnes.", "colloc": "réserver un billet"}
                ],
                "tip": "Pour souhaiter un agréable déplacement à quelqu'un, dites simplement : « Bon voyage ! » ou « Bonnes vacances ! »."
            }
        ]
    },
    {
        "id": "module-4",
        "file": "module-4.html",
        "title": "Module 4 · Société, Métiers & Études",
        "subtitle": "Professions, école, classe, loisirs, sports, achats et monnaie",
        "stripe": "#c9740a",
        "topics": [
            {
                "slug": "metiers-et-professions",
                "title": "Métiers et professions",
                "subtitle": "Le monde du travail et les métiers les plus courants",
                "words": [
                    {"word": "le professeur / la professeure", "type": "noun", "meta": "n. m. / f.", "def": "Personne qui enseigne une discipline à des élèves.", "ex": "Notre professeur de français explique très clairement.", "colloc": "professeur d'université"},
                    {"word": "le médecin", "type": "noun", "meta": "n. m.", "def": "Professionnel de santé diplômé qui soigne les malades.", "ex": "Le médecin examine le patient avec attention.", "colloc": "voir un médecin"},
                    {"word": "l'étudiant / l'étudiante", "type": "noun", "meta": "n. m. / f.", "def": "Personne qui suit des études supérieures.", "ex": "Les étudiants révisent leurs examens à la bibliothèque.", "colloc": "étudiant universitaire"},
                    {"word": "l'ingénieur", "type": "noun", "meta": "n. m.", "def": "Spécialiste qui conçoit des projets techniques ou scientifiques.", "ex": "Elle travaille comme ingénieure informatique.", "colloc": "ingénieur en chef"},
                    {"word": "le cuisinier / la cuisinière", "type": "noun", "meta": "n. m. / f.", "def": "Personne qui prépare les repas dans un restaurant.", "ex": "Le cuisinier prépare un repas gastronomique.", "colloc": "chef cuisinier"},
                    {"word": "le vendeur / la vendeuse", "type": "noun", "meta": "n. m. / f.", "def": "Personne qui vend des marchandises dans un magasin.", "ex": "La vendeuse conseille poliment la cliente.", "colloc": "vendeur en magasin"}
                ],
                "tip": "Devant les noms de professions utilisés après être, on omet souvent l'article : « Je suis professeur » (et non « Je suis un professeur »)."
            },
            {
                "slug": "ecole-et-salle-de-classe",
                "title": "L'école et la salle de classe",
                "subtitle": "Le matériel scolaire, les cours et les études",
                "words": [
                    {"word": "l'école", "type": "noun", "meta": "n. f.", "def": "Établissement où l'on dispense un enseignement.", "ex": "Les élèves vont à l'école le matin à huit heures.", "colloc": "aller à l'école"},
                    {"word": "le livre", "type": "noun", "meta": "n. m.", "def": "Ouvrage imprimé composé de pages reliées.", "ex": "Ouvrez votre livre à la page vingt.", "colloc": "lire un livre"},
                    {"word": "le cahier", "type": "noun", "meta": "n. m.", "def": "Assemblage de feuilles pour écrire ou prendre des notes.", "ex": "J'écris les exercices de grammaire dans mon cahier.", "colloc": "cahier d'exercices"},
                    {"word": "le stylo", "type": "noun", "meta": "n. m.", "def": "Instrument servant à écrire à l'encre.", "ex": "Prête-moi un stylo bleu, s'il te plaît.", "colloc": "stylo à bille"},
                    {"word": "le tableau", "type": "noun", "meta": "n. m.", "def": "Grande surface sur laquelle l'enseignant écrit.", "ex": "Regardez les phrases écrites au tableau.", "colloc": "écrire au tableau"},
                    {"word": "apprendre", "type": "verb", "meta": "v. t.", "def": "Acquérir des connaissances par l'étude ou la pratique.", "ex": "J'apprends le français avec plaisir.", "colloc": "apprendre par cœur"}
                ],
                "tip": "Attention au verbe « apprendre » : il signifie à la fois acquérir un savoir (j'apprends le français) et l'enseigner à quelqu'un (j'apprends le français à mon ami)."
            },
            {
                "slug": "hobbies-et-loisirs",
                "title": "Hobbies et loisirs",
                "subtitle": "Activités du temps libre, passions et divertissements",
                "words": [
                    {"word": "la musique", "type": "noun", "meta": "n. f.", "def": "Art de combiner les sons d'une manière harmonieuse.", "ex": "J'écoute de la musique classique le soir.", "colloc": "écouter de la musique"},
                    {"word": "le sport", "type": "noun", "meta": "n. m.", "def": "Activité physique exercée pour le bien-être ou la compétition.", "ex": "Le sport est excellent pour la santé.", "colloc": "faire du sport"},
                    {"word": "lire", "type": "verb", "meta": "v. t.", "def": "Déchiffrer un texte écrit et en comprendre le sens.", "ex": "J'aime lire des romans policiers en vacances.", "colloc": "lire un livre"},
                    {"word": "regarder", "type": "verb", "meta": "v. t.", "def": "Porter son regard sur quelqu'un ou quelque chose.", "ex": "Nous regardons un documentaire passionnant.", "colloc": "regarder un film"},
                    {"word": "danser", "type": "verb", "meta": "v. i.", "def": "Exécuter des mouvements du corps en rythme sur de la musique.", "ex": "Elle adore danser la salsa avec ses amis.", "colloc": "danser ensemble"},
                    {"word": "le cinéma", "type": "noun", "meta": "n. m.", "def": "Salle de spectacle où l'on projette des films.", "ex": "On va au cinéma ce samedi soir ?", "colloc": "aller au cinéma"}
                ],
                "tip": "Pour parler des activités de loisir, on utilise « faire du / de la / des » (faire du sport, faire de la musique) ou « jouer à / au » (jouer au football, jouer au tennis)."
            },
            {
                "slug": "achats-et-shopping",
                "title": "Achats et shopping",
                "subtitle": "Faire les magasins, acheter et essayer des vêtements",
                "words": [
                    {"word": "le magasin", "type": "noun", "meta": "n. m.", "def": "Lieu où l'on vend des marchandises au détail.", "ex": "Les magasins du centre sont ouverts jusqu'à 19h.", "colloc": "magasin de vêtements"},
                    {"word": "le supermarché", "type": "noun", "meta": "n. m.", "def": "Grand commerce de vente en libre-service.", "ex": "Je fais mes courses au supermarché le samedi.", "colloc": "au supermarché"},
                    {"word": "acheter", "type": "verb", "meta": "v. t.", "def": "Obtenir un bien en échange d'argent.", "ex": "Elle veut acheter un nouveau manteau chaud.", "colloc": "acheter en ligne"},
                    {"word": "vendre", "type": "verb", "meta": "v. t.", "def": "Céder un bien contre paiement d'un prix.", "ex": "Cette boutique vend des fruits de saison.", "colloc": "vendre cher"},
                    {"word": "le prix", "type": "noun", "meta": "n. m.", "def": "Valeur d'une chose exprimée en argent.", "ex": "Quel est le prix de cette veste rouge ?", "colloc": "bon prix"},
                    {"word": "cher / chère", "type": "adj", "meta": "adj.", "def": "D'un prix élevé, coûteux.", "ex": "Ce restaurant est bon mais un peu cher.", "colloc": "trop cher"}
                ],
                "tip": "Pour demander le prix d'un objet en français, vous pouvez dire : « Combien ça coûte ? » ou « Quel est le prix de cet article ? »."
            },
            {
                "slug": "argent-et-paiement",
                "title": "Argent et moyens de paiement",
                "subtitle": "Payer par carte, en espèces ou demander une facture",
                "words": [
                    {"word": "l'argent", "type": "noun", "meta": "n. m.", "def": "Monnaie sous forme de pièces et de billets.", "ex": "Avez-vous assez d'argent pour le voyage ?", "colloc": "argent liquide"},
                    {"word": "l'euro", "type": "noun", "meta": "n. m.", "def": "Monnaie officielle utilisée dans la zone euro.", "ex": "Le café coûte deux euros et cinquante centimes.", "colloc": "dix euros"},
                    {"word": "la carte bancaire", "type": "noun", "meta": "n. f.", "def": "Carte plastique permettant d'effectuer des paiements.", "ex": "Est-ce que vous acceptez la carte bancaire ?", "colloc": "payer par carte"},
                    {"word": "payer", "type": "verb", "meta": "v. t. / i.", "def": "Donner de l'argent en contrepartie d'un bien ou service.", "ex": "Je vais payer l'addition par carte.", "colloc": "payer en espèces"},
                    {"word": "le billet", "type": "noun", "meta": "n. m.", "def": "Papier-monnaie ou titre de transport.", "ex": "J'ai un billet de vingt euros.", "colloc": "billet de banque"},
                    {"word": "les pièces", "type": "noun", "meta": "n. f. pl.", "def": "Musique de métal servant de monnaie.", "ex": "Il me reste quelques pièces de monnaie.", "colloc": "pièce de monnaie"}
                ],
                "tip": "Dans les commerces en France, la question rituelle à la caisse est : « Vous me payez par carte ou en espèces ? »."
            },
            {
                "slug": "fetes-et-evenements",
                "title": "Fêtes et événements",
                "subtitle": "Célébrations, anniversaires et moments festifs",
                "words": [
                    {"word": "l'anniversaire", "type": "noun", "meta": "n. m.", "def": "Jour du retour de la date de naissance.", "ex": "Joyeux anniversaire à mon meilleur ami !", "colloc": "bon anniversaire"},
                    {"word": "la fête", "type": "noun", "meta": "n. f.", "def": "Réunion joyeuse pour célébrer un événement.", "ex": "Nous organisons une grande fête samedi soir.", "colloc": "faire la fête"},
                    {"word": "le cadeau", "type": "noun", "meta": "n. m.", "def": "Chose offerte à quelqu'un pour lui faire plaisir.", "ex": "Les enfants ouvrent leurs cadeaux de Noël.", "colloc": "offrir un cadeau"},
                    {"word": "le gâteau", "type": "noun", "meta": "n. f.", "def": "Pâtisserie sucrée préparée pour les fêtes.", "ex": "Le gâteau au chocolat est délicieux.", "colloc": "gâteau d'anniversaire"},
                    {"word": "inviter", "type": "verb", "meta": "v. t.", "def": "Prier quelqu'un de venir à une fête ou un repas.", "ex": "Je souhaite inviter tous mes amis.", "colloc": "inviter des amis"},
                    {"word": "célébrer", "type": "verb", "meta": "v. t.", "def": "Marquer un événement par une fête solennelle.", "ex": "Toute la ville célèbre le 14 juillet.", "colloc": "célébrer une victoire"}
                ],
                "tip": "Pour souhaiter une bonne fête de naissance en français, dites : « Joyeux anniversaire ! » ou « Bon anniversaire ! »."
            },
            {
                "slug": "sports-et-activites-physiques",
                "title": "Sports et activités physiques",
                "subtitle": "Disciplines sportives et exercice physique",
                "words": [
                    {"word": "le football", "type": "noun", "meta": "n. m.", "def": "Sport collectif se jouant avec un ballon rond au pied.", "ex": "Les enfants jouent au football dans la cour.", "colloc": "jouer au football"},
                    {"word": "la natation", "type": "noun", "meta": "n. f.", "def": "Sport qui consiste à nager dans l'eau.", "ex": "La natation est mon activité sportive préférée.", "colloc": "faire de la natation"},
                    {"word": "courir", "type": "verb", "meta": "v. i.", "def": "Se déplacer rapidement à pied.", "ex": "Il court tous les matins dans le parc.", "colloc": "courir vite"},
                    {"word": "nager", "type": "verb", "meta": "v. i.", "def": "Se déplacer dans l'eau par des mouvements du corps.", "ex": "Nous aimons nager dans la mer l'été.", "colloc": "nager bien"},
                    {"word": "le tennis", "type": "noun", "meta": "n. m.", "def": "Sport de raquette opposant deux ou quatre joueurs.", "ex": "Elle dispute un match de tennis cet après-midi.", "colloc": "jouer au tennis"},
                    {"word": "l'équipe", "type": "noun", "meta": "n. f.", "def": "Groupe de sportifs jouant ensemble.", "ex": "Notre équipe a gagné la rencontre.", "colloc": "équipe de France"}
                ],
                "tip": "Les verbes de mouvement comme « courir » et « nager » sont des verbes d'action indispensables pour décrire l'effort physique."
            }
        ]
    },
    {
        "id": "module-5",
        "file": "module-5.html",
        "title": "Module 5 · Santé, Technologies & Outils",
        "subtitle": "Santé, pharmacie, corps, technologie, téléphone et internet",
        "stripe": "#a3195b",
        "topics": [
            {
                "slug": "sante-et-corps-medical",
                "title": "Santé et corps médical",
                "subtitle": "Parler de son état de santé et consulter un médecin",
                "words": [
                    {"word": "la santé", "type": "noun", "meta": "n. f.", "def": "État de bon fonctionnement de l'organisme.", "ex": "Une bonne alimentation est essentielle pour la santé.", "colloc": "en bonne santé"},
                    {"word": "la maladie", "type": "noun", "meta": "n. f.", "def": "Altération de la santé, état de souffrance.", "ex": "Il est absent pour cause de maladie.", "colloc": "attraper une maladie"},
                    {"word": "la fièvre", "type": "noun", "meta": "n. f.", "def": "Élévation de la température du corps.", "ex": "L'enfant a de la fièvre ce soir.", "colloc": "avoir de la fièvre"},
                    {"word": "le médicament", "type": "noun", "meta": "n. m.", "def": "Substance utilisée pour soigner ou guérir une maladie.", "ex": "Prenez ce médicament deux fois par jour.", "colloc": "prendre un médicament"},
                    {"word": "soigner", "type": "verb", "meta": "v. t.", "def": "Procurer les soins nécessaires à la guérison.", "ex": "Le médecin soigne les malades avec bienveillance.", "colloc": "se faire soigner"},
                    {"word": "malade", "type": "adj", "meta": "adj.", "def": "Qui souffre d'un problème de santé.", "ex": "Je ne peux pas venir, je suis malade.", "colloc": "tomber malade"}
                ],
                "tip": "En France, en cas de rhume ou petite indisposition, on dit souvent : « Je suis un peu malade » ou « J'ai attrapé un coup de froid »."
            },
            {
                "slug": "pharmacie-et-soins",
                "title": "La pharmacie et les soins",
                "subtitle": "Acheter des pansements, médicaments et produits de soin",
                "words": [
                    {"word": "la pharmacie", "type": "noun", "meta": "n. f.", "def": "Officine où l'on vend des médicaments.", "ex": "La pharmacie de garde est ouverte la nuit.", "colloc": "aller à la pharmacie"},
                    {"word": "l'ordonnance", "type": "noun", "meta": "n. f.", "def": "Prescription écrite rédigée par un médecin.", "ex": "Le pharmacien demande l'ordonnance médicale.", "colloc": "ordonnance médicale"},
                    {"word": "le pansement", "type": "noun", "meta": "n. m.", "def": "Bande de tissu ou plastique appliquée sur une plaie.", "ex": "Mets un pansement sur ta petite coupure.", "colloc": "mettre un pansement"},
                    {"word": "le sirop", "type": "noun", "meta": "n. m.", "def": "Médicament liquide et sucré à avaler.", "ex": "Ce sirop soulage efficacement la toux.", "colloc": "sirop contre la toux"},
                    {"word": "le comprimé", "type": "noun", "meta": "n. m.", "def": "Médicament solide petit et rond à avaler avec de l'eau.", "ex": "Avalez un comprimé de paracétamol.", "colloc": "prendre un comprimé"},
                    {"word": "la douleur", "type": "noun", "meta": "n. f.", "def": "Sensation physique pénible éprouvée par le corps.", "ex": "Ce médicament calme rapidement la douleur.", "colloc": "calmer la douleur"}
                ],
                "tip": "En France, la pharmacie se reconnaît de loin grâce à son enseigne lumineuse en forme de croix verte."
            },
            {
                "slug": "poste-et-services-publics",
                "title": "La poste et les services publics",
                "subtitle": "Envoyer des lettres, colis et démarches administratives simples",
                "words": [
                    {"word": "la poste", "type": "noun", "meta": "n. f.", "def": "Service public d'acheminement du courrier.", "ex": "Je vais à la poste pour acheter des timbres.", "colloc": "bureau de poste"},
                    {"word": "la lettre", "type": "noun", "meta": "n. f.", "def": "Message écrit envoyé sous enveloppe.", "ex": "J'écris une longue lettre à mes grands-parents.", "colloc": "envoyer une lettre"},
                    {"word": "le colis", "type": "noun", "meta": "n. m.", "def": "Paquet emballé expédié par la poste.", "ex": "Le facteur m'a livré un colis ce matin.", "colloc": "recevoir un colis"},
                    {"word": "le timbre", "type": "noun", "meta": "n. m.", "def": "Vignette collée sur une enveloppe pour l'affranchir.", "ex": "Collez le timbre en haut à droite de l'enveloppe.", "colloc": "timbre-poste"},
                    {"word": "l'enveloppe", "type": "noun", "meta": "n. f.", "def": "Pochette de papier destinée à contenir une lettre.", "ex": "Mettez la carte dans une jolie enveloppe.", "colloc": "enveloppe blanche"},
                    {"word": "poster", "type": "verb", "meta": "v. t.", "def": "Mettre une lettre à la boîte aux lettres.", "ex": "Je vais poster cette lettre avant midi.", "colloc": "poster une lettre"}
                ],
                "tip": "En France, les boîtes aux lettres publiques de La Poste sont peintes en jaune très vif."
            },
            {
                "slug": "technologie-et-ordinateur",
                "title": "Technologie et ordinateur",
                "subtitle": "Informatique, bureau numérique et équipements",
                "words": [
                    {"word": "l'ordinateur", "type": "noun", "meta": "n. m.", "def": "Machine électronique de traitement de l'information.", "ex": "Je travaille sur mon ordinateur portable.", "colloc": "ordinateur portable"},
                    {"word": "l'écran", "type": "noun", "meta": "n. m.", "def": "Surface d'affichage d'un ordinateur ou appareil.", "ex": "L'écran de mon téléphone est très clair.", "colloc": "écran plat"},
                    {"word": "le clavier", "type": "noun", "meta": "n. m.", "def": "Ensemble des touches d'un ordinateur.", "ex": "Le clavier français utilise la disposition AZERTY.", "colloc": "taper au clavier"},
                    {"word": "la souris", "type": "noun", "meta": "n. m. / f.", "def": "Dispositif de commande manuelle relié à l'ordinateur.", "ex": "Cliquez avec la souris sur le bouton vert.", "colloc": "cliquer avec la souris"},
                    {"word": "le fichier", "type": "noun", "meta": "n. m.", "def": "Ensemble d'informations numériques enregistrées.", "ex": "Enregistrez le fichier dans votre dossier.", "colloc": "ouvrir un fichier"},
                    {"word": "télécharger", "type": "verb", "meta": "v. t.", "def": "Copier des données depuis internet sur son appareil.", "ex": "Vous pouvez télécharger le document au format PDF.", "colloc": "télécharger un fichier"}
                ],
                "tip": "Notez que le clavier informatique utilisé en France et en Belgique est le système AZERTY (et non pas QWERTY)."
            },
            {
                "slug": "telephone-et-communication",
                "title": "Téléphone et communication",
                "subtitle": "Appels, messages, applications et contacts",
                "words": [
                    {"word": "le téléphone", "type": "noun", "meta": "n. m.", "def": "Appareil de communication vocale et textuelle.", "ex": "Mon téléphone sonne dans mon sac.", "colloc": "téléphone portable"},
                    {"word": "le message", "type": "noun", "meta": "n. m.", "def": "Texte court envoyé par voie électronique.", "ex": "Envoyez-moi un message quand vous arrivez.", "colloc": "envoyer un message"},
                    {"word": "appeler", "type": "verb", "meta": "v. t.", "def": "Composer un numéro pour joindre quelqu'un.", "ex": "Je vais t'appeler plus tard ce soir.", "colloc": "appeler au téléphone"},
                    {"word": "l'application", "type": "noun", "meta": "n. f.", "def": "Programme informatique pour smartphone ou tablette.", "ex": "Cette application mobile permet d'apprendre des langues.", "colloc": "application mobile"},
                    {"word": "le numéro", "type": "noun", "meta": "n. m.", "def": "Suite de chiffres permettant d'identifier un abonné.", "ex": "Quel est votre numéro de téléphone ?", "colloc": "numéro de téléphone"},
                    {"word": "envoyer", "type": "verb", "meta": "v. t.", "def": "Faire parvenir un message ou un objet à un destinataire.", "ex": "Elle m'a envoyé un gentil mot de remerciement.", "colloc": "envoyer un courriel"}
                ],
                "tip": "Pour demander le numéro de quelqu'un de façon naturelle : « Pouvez-vous me donner votre numéro de téléphone ? »."
            },
            {
                "slug": "internet-et-reseaux-sociaux",
                "title": "Internet et réseaux sociaux",
                "subtitle": "Naviguer sur le web, courriels et profils en ligne",
                "words": [
                    {"word": "internet", "type": "noun", "meta": "n. m.", "def": "Réseau informatique mondial ouvert au public.", "ex": "Je cherche des informations sur internet.", "colloc": "sur internet"},
                    {"word": "le site web", "type": "noun", "meta": "n. m.", "def": "Ensemble de pages accessibles sur internet.", "ex": "Consultez notre site web officiel pour plus de détails.", "colloc": "visiter un site web"},
                    {"word": "le courriel", "type": "noun", "meta": "n. m.", "def": "Message électronique envoyé par internet (e-mail).", "ex": "J'ai reçu votre courriel ce matin.", "colloc": "envoyer un courriel"},
                    {"word": "le mot de passe", "type": "noun", "meta": "n. m.", "def": "Code secret pour accéder à un compte numérique.", "ex": "Ne communiquez jamais votre mot de passe.", "colloc": "mot de passe sécurisé"},
                    {"word": "la connexion", "type": "noun", "meta": "n. f.", "def": "Liaison établie entre un appareil et un réseau.", "ex": "La connexion Wi-Fi est très rapide ici.", "colloc": "connexion Wi-Fi"},
                    {"word": "partager", "type": "verb", "meta": "v. t.", "def": "Diffuser ou transmettre une information sur le web.", "ex": "Elle aime partager des photos de voyage.", "colloc": "partager une photo"}
                ],
                "tip": "En français québécois et officiel, le mot « courriel » remplace avantageusement le terme anglais « e-mail »."
            }
        ]
    },
    {
        "id": "module-6",
        "file": "module-6.html",
        "title": "Module 6 · Grammaire Pratique & Outils Linguistiques",
        "subtitle": "Prépositions, mots de liaison, verbes A1 essentiels et prononciation",
        "stripe": "#3562e0",
        "topics": [
            {
                "slug": "prepositions-essentielles",
                "title": "Les prépositions essentielles",
                "subtitle": "Prépositions de lieu, de temps et de manière",
                "words": [
                    {"word": "à", "type": "expr", "meta": "prép.", "def": "Indique la direction, la localisation ou l'heure.", "ex": "Je vais à la bibliothèque à neuf heures.", "colloc": "à Paris"},
                    {"word": "de", "type": "expr", "meta": "prép.", "def": "Indique l'origine, la possession ou le matériau.", "ex": "Il vient de France.", "colloc": "venir de"},
                    {"word": "dans", "type": "expr", "meta": "prép.", "def": "Indique l'intérieur d'un espace fermé.", "ex": "Les clés sont dans le sac.", "colloc": "dans la maison"},
                    {"word": "sur", "type": "expr", "meta": "prép.", "def": "Indique une position au-dessus et en contact.", "ex": "Le livre est posé sur la table.", "colloc": "sur la table"},
                    {"word": "sous", "type": "expr", "meta": "prép.", "def": "Indique une position inférieure au-dessous de.", "ex": "Le chat dort sous la chaise.", "colloc": "sous le lit"},
                    {"word": "avec", "type": "expr", "meta": "prép.", "def": "Indique l'accompagnement ou l'utilisation d'un moyen.", "ex": "Je voyage avec mes meilleurs amis.", "colloc": "avec plaisir"}
                ],
                "tip": "Pour réviser l'utilisation exacte et la contraction des prépositions à et de avec les articles, consultez le manuel de grammaire.",
                "grammar_link": "../../grammaire-francaise/topics/prepositions-lieu-1.html"
            },
            {
                "slug": "mots-de-liaison-et-questions",
                "title": "Mots de liaison et de question",
                "subtitle": "Connecteurs logiques et mots interrogatifs",
                "words": [
                    {"word": "et", "type": "expr", "meta": "conj.", "def": "Conjonction d'addition reliant des mots ou phrases.", "ex": "Paul et Marie apprennent le français.", "colloc": "et aussi"},
                    {"word": "mais", "type": "expr", "meta": "conj.", "def": "Conjonction exprimant une opposition ou nuance.", "ex": "C'est difficile mais très intéressant.", "colloc": "mais oui"},
                    {"word": "ou", "type": "expr", "meta": "conj.", "def": "Conjonction proposant une alternative.", "ex": "Tu préfères le thé ou le café ?", "colloc": "ou bien"},
                    {"word": "parce que", "type": "expr", "meta": "loc. conj.", "def": "Introduit la cause ou l'explication d'un fait.", "ex": "Je reste chez moi parce qu'il pleut.", "colloc": "parce que c'est bien"},
                    {"word": "qui", "type": "expr", "meta": "pron. int.", "def": "Pronom interrogatif désignant une personne.", "ex": "Qui est à la porte ?", "colloc": "qui est-ce"},
                    {"word": "où", "type": "expr", "meta": "adv. int.", "def": "Mot interrogatif désignant un lieu ou une direction.", "ex": "Où habitez-vous ?", "colloc": "d'où venez-vous"}
                ],
                "tip": "Ne confondez pas « ou » (sans accent, alternative) et « où » (avec accent grave, lieu)."
            },
            {
                "slug": "adverbes-de-temps-et-frequence",
                "title": "Adverbes de temps et fréquence",
                "subtitle": "Situer dans le temps et indiquer la fréquence des actions",
                "words": [
                    {"word": "toujours", "type": "expr", "meta": "adv.", "def": "À tout moment, sans interruption ou exception.", "ex": "Il est toujours à l'heure au travail.", "colloc": "comme toujours"},
                    {"word": "souvent", "type": "expr", "meta": "adv.", "def": "À de nombreuses reprises, fréquemment.", "ex": "Nous allons souvent au théâtre le week-end.", "colloc": "très souvent"},
                    {"word": "parfois / quelquefois", "type": "expr", "meta": "adv.", "def": "De temps en temps, occasionnellement.", "ex": "Parfois, il préfère cuisiner chez lui.", "colloc": "parfois oui"},
                    {"word": "jamais", "type": "expr", "meta": "adv.", "def": "En aucun temps, à aucune occasion.", "ex": "Je ne bois jamais de café avant de dormir.", "colloc": "ne jamais"},
                    {"word": "aujourd'hui", "type": "expr", "meta": "adv.", "def": "Au jour où l'on est actuellement.", "ex": "Aujourd'hui, c'est un grand jour d'examen.", "colloc": "dès aujourd'hui"},
                    {"word": "demain", "type": "expr", "meta": "adv.", "def": "Le jour immédiatement après aujourd'hui.", "ex": "À demain et bonne soirée à tous !", "colloc": "à demain"}
                ],
                "tip": "En français, les adverbes de fréquence se placent généralement après le verbe conjugué (je bois souvent du thé)."
            },
            {
                "slug": "verbes-a1-essentiels",
                "title": "Verbes A1 essentiels du quotidien",
                "subtitle": "Les actions de base indispensables pour communiquer",
                "words": [
                    {"word": "être", "type": "verb", "meta": "v. aux.", "def": "Verbe d'état fondamental indiquant l'existence ou l'identité.", "ex": "Je suis étudiant à l'université.", "colloc": "être prêt"},
                    {"word": "avoir", "type": "verb", "meta": "v. aux.", "def": "Verbe de possession et auxiliaire fondamental.", "ex": "J'ai une petite sœur.", "colloc": "avoir de la chance"},
                    {"word": "aller", "type": "verb", "meta": "v. i.", "def": "Se déplacer vers un endroit déterminé.", "ex": "Nous allons au marché le dimanche.", "colloc": "aller bien"},
                    {"word": "faire", "type": "verb", "meta": "v. t.", "def": "Réaliser, accomplir une activité ou un travail.", "ex": "Que fais-tu ce week-end ?", "colloc": "faire attention"},
                    {"word": "pouvoir", "type": "verb", "meta": "v. t.", "def": "Avoir la capacité ou la permission de faire quelque chose.", "ex": "Est-ce que je peux vous aider ?", "colloc": "pouvoir venir"},
                    {"word": "vouloir", "type": "verb", "meta": "v. t.", "def": "Avoir le désir ardent d'obtenir quelque chose.", "ex": "Je veux apprendre le français rapidement.", "colloc": "vouloir dire"}
                ],
                "tip": "Ces verbes sont les piliers de la langue française. Pour étudier leurs conjugations complètes, reportez-vous au manuel de grammaire.",
                "grammar_link": "../../grammaire-francaise/topics/verbes-er.html"
            },
            {
                "slug": "prononciation-et-sons-du-francais",
                "title": "Prononciation et sons du français",
                "subtitle": "Bases de la phonétique française, nasales et liaisons",
                "words": [
                    {"word": "la nasale", "type": "noun", "meta": "n. f.", "def": "Voyelle prononcée en faisant passer de l'air par le nez (an, in, on).", "ex": "Le mot « vent » contient une voyelle nasale.", "colloc": "sons nasaux"},
                    {"word": "la liaison", "type": "noun", "meta": "n. f.", "def": "Prononciation d'une consonne finale muette devant une voyelle.", "ex": "Dans « les_amis », on prononce la liaison en Z.", "colloc": "faire la liaison"},
                    {"word": "l'accent tonique", "type": "noun", "meta": "n. m.", "def": "Mise en valeur de la dernière syllabe d'un groupe de mots.", "ex": "En français, l'accent tonique se place en fin de groupe.", "colloc": "accent final"},
                    {"word": "le son [y]", "type": "noun", "meta": "n. m.", "def": "Voyelle française spécifique écrite avec la lettre U.", "ex": "Prononcez bien la différence entre « tu » [y] et « tout » [u].", "colloc": "voyelle U"},
                    {"word": "muet / muette", "type": "adj", "meta": "adj.", "def": "Qui ne se prononce pas à l'oral (comme le E final).", "ex": "La lettre E finale à la fin de « table » est muette.", "colloc": "lettre muette"},
                    {"word": "l'élision", "type": "noun", "meta": "n. f.", "def": "Suppression de la voyelle finale (a, e, i) devant une voyelle.", "ex": "On écrit « l'arbre » et non pas « le arbre ».", "colloc": "faire l'élision"}
                ],
                "tip": "En français, les consonnes finales (s, t, d, x, p, z) sont généralement muettes à la fin des mots à moins qu'il n'y ait une liaison.",
                "grammar_link": "../../grammaire-francaise/topics/francais-monde-1.html"
            }
        ]
    }
]

def generate_topic_html(mod, topic, prev_topic, next_topic):
    slug = topic["slug"]
    title = topic["title"]
    subtitle = topic["subtitle"]
    words = topic["words"]
    tip = topic.get("tip", "")
    grammar_link = topic.get("grammar_link", "")

    # Count word categories
    noun_c = sum(1 for w in words if w["type"] == "noun")
    verb_c = sum(1 for w in words if w["type"] == "verb")
    adj_c = sum(1 for w in words if w["type"] == "adj")
    expr_c = sum(1 for w in words if w["type"] in ("expr", "adv", "prep", "conj"))

    cards_html = []
    flashcards_html = []
    checklist_items = []
    quiz_items = []

    for i, w in enumerate(words):
        t_cls = w["type"] if w["type"] in ("noun", "verb", "adj", "expr") else "expr"
        cards_html.append(f"""
        <div class="vocab-card">
          <span class="type-tag {t_cls}">{w['meta']}</span>
          <div class="v-word">{w['word']}</div>
          <div class="v-def">{w['def']}</div>
          <div class="v-ex">« {w['ex']} »</div>
          <div class="v-colloc">📍 {w['colloc']}</div>
        </div>
        """)

        flashcards_html.append(f"""
        <div class="flashcard">
          <div class="flash-inner">
            <div class="flash-face front">
              <span>{w['word']}</span>
              <span style="font-size:11px; font-family:var(--font-mono); font-weight:400; opacity:0.8; margin-top:4px;">{w['meta']}</span>
            </div>
            <div class="flash-face back">
              <strong>{w['def']}</strong>
              <span style="font-size:12px; font-style:italic; margin-top:6px; opacity:0.9;">« {w['ex']} »</span>
            </div>
          </div>
        </div>
        """)

        checklist_items.append(f"""
        <label class="check-item">
          <input type="checkbox">
          <span>{w['word']} — <small>{w['def']}</small></span>
        </label>
        """)

    # Construct quiz options based on topic words
    if len(words) >= 3:
        for i in range(min(3, len(words))):
            target = words[i]
            distractors = [w["def"] for j, w in enumerate(words) if j != i][:3]
            opts = [target["def"]] + distractors
            # Sort deterministically
            correct_idx = 0
            opts_html = "".join([f'<button class="qopt">{opt}</button>' for opt in opts])
            quiz_items.append({
                "question": f"Que signifie le terme « {target['word']} » ?",
                "options_html": opts_html,
                "correct": correct_idx,
                "explain": f"« {target['word']} » signifie : {target['def']}."
            })

    quiz_json = json.dumps([{"correct": q["correct"]} for q in quiz_items])
    quiz_questions_html = ""
    for q in quiz_items:
        quiz_questions_html += f"""
        <div class="qitem">
          <div class="qtext">{q['question']}</div>
          <div class="qopts">{q['options_html']}</div>
          <div class="qexplain">{q['explain']}</div>
        </div>
        """

    prev_link = f'<a href="{prev_topic["slug"]}.html"><span class="dir">← Précédent</span><span class="ttl">{prev_topic["title"]}</span></a>' if prev_topic else '<div></div>'
    next_link = f'<a href="{next_topic["slug"]}.html" class="next"><span class="dir">Suivant →</span><span class="ttl">{next_topic["title"]}</span></a>' if next_topic else '<div></div>'

    grammar_box = ""
    if grammar_link:
        grammar_box = f"""
        <div class="box usage">
          <h3>📘 Règle de grammaire associée</h3>
          <p>Pour approfondir la structure grammaticale liée à ce thème, consultez la leçon interactive du manuel de grammaire : <a href="{grammar_link}" style="font-weight:700; text-decoration:underline;">Ouvrir la leçon de grammaire →</a></p>
        </div>
        """

    html = f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · Lexique français (A0–A1)</title>

<link rel="stylesheet" href="../assets/style.css">
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a href="../index.html" class="brand">
      <div class="brand-mark">F</div>
      <div class="brand-name">COSYlanguages <em>Lexique français</em></div>
    </a>
    <nav class="topbar-nav">
      <a href="../index.html">Accueil</a>
      <a href="../{mod['file']}">{mod['title'].split('·')[0].strip()}</a>
      <a href="../../grammaire-francaise/index.html">Manuel de grammaire 📘</a>
    </nav>
  </div>
</header>

<main class="container">

  <header class="page-head">
    <div class="eyebrow">MODULE · {mod['title'].split('·')[0].strip().upper()}</div>
    <h1>{title}</h1>
    <p class="subtitle">{subtitle}</p>
    <hr class="rule">
  </header>

  <div class="vocab-search-box">
    <input type="text" id="vocab-search" class="vocab-search-input" placeholder="🔍 Rechercher un mot ou une définition dans cette leçon...">
  </div>

  {grammar_box}

  <section>
    <h2>📚 Mots et expressions de la leçon ({len(words)} termes)</h2>
    <div class="vocab-grid">
      {"".join(cards_html)}
    </div>
  </section>

  <div class="box tip">
    <h3>💡 Conseil de mémorisation</h3>
    <p>{tip}</p>
  </div>

  <section style="margin:40px 0;">
    <h2>🎴 Cartes mémoire interactives (Flashcards)</h2>
    <p style="color:var(--ink-soft); margin-bottom:16px;">Cliquez sur chaque carte pour révéler la définition et l'exemple en français.</p>
    <div class="flash-grid">
      {"".join(flashcards_html)}
    </div>
  </section>

  <section class="checklist" data-key="{slug}">
    <h3>📋 Maîtrise du vocabulaire (« Pouvez-vous utiliser ces mots ? »)</h3>
    <div class="check-progress">0 / {len(words)} termes maîtrisés</div>
    <div style="margin-top:12px;">
      {"".join(checklist_items)}
    </div>
  </section>

  <section class="quiz-panel" data-quiz='{quiz_json}'>
    <div class="quiz-head">
      <h2>🎯 Auto-évaluation expressive</h2>
      <div class="quiz-score">Résultat : 0 / {len(quiz_items)}</div>
    </div>
    {quiz_questions_html}
    <button class="quiz-reset">🔄 Recommencer le test</button>
  </section>

  <nav class="pager">
    {prev_link}
    {next_link}
  </nav>

</main>

<footer class="site">
  <div class="container">
    <div>
      <strong>COSYlanguages · Lexique français (A0–A1)</strong>
      <div style="font-size:12px; opacity:0.8; margin-top:4px;">Édition Web Monolingue Interactive</div>
    </div>
    <div>
      <a href="../index.html">Index des modules</a> · <a href="../../grammaire-francaise/index.html">Grammaire française</a>
    </div>
  </div>
</footer>

<script src="../assets/app.js"></script>
</body>
</html>
"""
    with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
        f.write(html)


def generate_module_html(mod, prev_mod, next_mod):
    mod_id = mod["id"]
    filename = mod["file"]
    title = mod["title"]
    subtitle = mod["subtitle"]
    topics = mod["topics"]

    topic_cards = []
    for t in topics:
        topic_cards.append(f"""
        <a href="topics/{t['slug']}.html" class="topic-card">
          <div style="font-family:var(--font-mono); font-size:11px; color:var(--teal-700); font-weight:700;">LEÇON</div>
          <div class="ttl">{t['title']}</div>
          <div class="sub">{t['subtitle']}</div>
          <div style="font-family:var(--font-mono); font-size:11px; color:var(--ink-soft); margin-top:8px;">{len(t['words'])} termes · Exercices interactifs</div>
        </a>
        """)

    prev_link = f'<a href="{prev_mod["file"]}"><span class="dir">← Module précédent</span><span class="ttl">{prev_mod["title"]}</span></a>' if prev_mod else '<div></div>'
    next_link = f'<a href="{next_mod["file"]}" class="next"><span class="dir">Module suivant →</span><span class="ttl">{next_mod["title"]}</span></a>' if next_mod else '<div></div>'

    html = f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · Lexique français (A0–A1)</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a href="index.html" class="brand">
      <div class="brand-mark">F</div>
      <div class="brand-name">COSYlanguages <em>Lexique français</em></div>
    </a>
    <nav class="topbar-nav">
      <a href="index.html">Accueil</a>
      <a href="../grammaire-francaise/index.html">Manuel de grammaire 📘</a>
    </nav>
  </div>
</header>

<main class="container">

  <header class="page-head">
    <div class="eyebrow">MODULE HUB</div>
    <h1>{title}</h1>
    <p class="subtitle">{subtitle}</p>
    <hr class="rule">
  </header>

  <section style="margin:30px 0;">
    <h2>📖 Leçons de ce module ({len(topics)} leçons)</h2>
    <div class="topic-grid">
      {"".join(topic_cards)}
    </div>
  </section>

  <nav class="pager">
    {prev_link}
    {next_link}
  </nav>

</main>

<footer class="site">
  <div class="container">
    <div>
      <strong>COSYlanguages · Lexique français (A0–A1)</strong>
    </div>
    <div>
      <a href="index.html">Accueil du manuel</a> · <a href="../grammaire-francaise/index.html">Grammaire française</a>
    </div>
  </div>
</footer>

<script src="assets/app.js"></script>
</body>
</html>
"""
    with open(os.path.join(BASE_DIR, filename), "w", encoding="utf-8") as f:
        f.write(html)


def generate_index_html():
    total_topics = sum(len(m["topics"]) for m in MODULES)
    total_words = sum(sum(len(t["words"]) for t in m["topics"]) for m in MODULES)

    mod_cards = []
    for m in MODULES:
        t_count = len(m["topics"])
        mod_cards.append(f"""
        <a href="{m['file']}" class="part-card">
          <div class="stripe" style="background:{m['stripe']};"></div>
          <div class="pnum">{m['title'].split('·')[0].strip().upper()}</div>
          <h2>{m['title'].split('·')[1].strip() if '·' in m['title'] else m['title']}</h2>
          <p>{m['subtitle']}</p>
          <span class="topics-count">{t_count} leçons thématiques</span>
        </a>
        """)

    html = f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lexique français (A0–A1) · Manuel Interactif COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a href="index.html" class="brand">
      <div class="brand-mark">F</div>
      <div class="brand-name">COSYlanguages <em>Lexique français</em></div>
    </a>
    <nav class="topbar-nav">
      <a href="../manuals/francaise-a0-a1.html">Centre A0–A1</a>
      <a href="../grammaire-francaise/index.html">Manuel de grammaire 📘</a>
    </nav>
  </div>
</header>

<main class="container">

  <header class="page-head">
    <div class="eyebrow">MANUEL MONOLINGUE D'ACQUISITION LEXICALE</div>
    <h1>Lexique français (A0–A1)</h1>
    <p class="subtitle">Guide méthodique du vocabulaire thématique fondamental du français</p>
    <hr class="rule">
  </header>

  <div class="box native">
    <h3>🇫🇷 Manuel d'apprentissage 100% en français (Brezhoneg / Français Hepken)</h3>
    <p>Ce manuel d'acquisition lexicale propose un parcours d'immersion directe : toutes les définitions, exemples et explications sont rédigés exclusivement en français facile pour accélérer l'assimilation naturelle des structures.</p>
  </div>

  <section style="margin:30px 0;">
    <h2>📚 Modules d'apprentissage ({len(MODULES)} modules · {total_topics} leçons · {total_words} mots)</h2>
    <div class="parts-grid">
      {"".join(mod_cards)}
    </div>
  </section>

</main>

<footer class="site">
  <div class="container">
    <div>
      <strong>COSYlanguages · Lexique français (A0–A1)</strong>
      <div style="font-size:12px; opacity:0.8; margin-top:4px;">© 2026 COSYlanguages · Tous droits réservés</div>
    </div>
    <div>
      <a href="../manuals/francaise-a0-a1.html">Centre d'apprentissage Français A0–A1</a> · <a href="../grammaire-francaise/index.html">Grammaire française</a>
    </div>
  </div>
</footer>

<script src="assets/app.js"></script>
</body>
</html>
"""
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)


def main():
    # Build all topic pages
    all_topics = []
    for mod in MODULES:
        for topic in mod["topics"]:
            all_topics.append((mod, topic))

    for idx, (mod, topic) in enumerate(all_topics):
        prev_topic = all_topics[idx - 1][1] if idx > 0 else None
        next_topic = all_topics[idx + 1][1] if idx < len(all_topics) - 1 else None
        generate_topic_html(mod, topic, prev_topic, next_topic)

    # Build module hub pages
    for idx, mod in enumerate(MODULES):
        prev_mod = MODULES[idx - 1] if idx > 0 else None
        next_mod = MODULES[idx + 1] if idx < len(MODULES) - 1 else None
        generate_module_html(mod, prev_mod, next_mod)

    # Build master index page
    generate_index_html()

    print(f"Build complete: {len(MODULES)} modules, {len(all_topics)} topic pages generated in lexique-francais/.")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Grammar Manual (Level B2) Interactive Web Edition.
Generates grammar-b2/index.html, 13 section hub HTML pages (part-0.html .. part-11.html, appendix.html),
assets (style.css, app.js), and 35 topic HTML pages in grammar-b2/topics/.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "grammar-b2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

# Write CSS asset
STYLE_CSS = """/* ==========================================================================
 COSYlanguages · English Grammar Manual Level B2 (interactive web edition)
 Cozy, friendly design system for teens and adults.
 ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --teal-900: #0c3f38;
  --teal-800: #0f5c50;
  --teal-700: #157c6c;
  --teal-600: #1c9483;
  --teal-500: #25a894;
  --teal-100: #e4f4f0;
  --teal-050: #f2faf8;

  --ink: #132321;
  --ink-soft: #3c5450;
  --paper: #faf8f3;
  --panel: #ffffff;
  --line: #e6e2d8;

  --role-subject: #3562e0;
  --role-verb: #1c8f56;
  --role-noun: #c9740a;
  --role-adj: #7c4fd6;

  --why-bg: #fdf3d6;
  --why-line: #c99a1f;
  --why-ink: #7a5b0c;

  --native-bg: #f1e9fb;
  --native-line: #8b5cf6;
  --native-ink: #5b3aa8;

  --mistake-bg: #fdf0f0;
  --mistake-line: #e55353;
  --mistake-ink: #9c1c1c;

  --mint-bg: #eaf6f1;
  --mint-line: #1c9483;
  --mint-ink: #0f5c50;

  --radius-s: 10px;
  --radius-m: 16px;
  --radius-l: 24px;
  --shadow-card: 0 2px 4px rgba(19,35,33,.03), 0 10px 28px -8px rgba(19,35,33,.12);
  --shadow-hover: 0 4px 8px rgba(19,35,33,.05), 0 16px 36px -8px rgba(19,35,33,.20);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
img, svg { display: block; max-width: 100%; }
a { color: var(--teal-700); transition: color .15s ease; }
a:hover { color: var(--teal-900); }
:focus-visible { outline: 3px solid var(--teal-500); outline-offset: 3px; border-radius: 4px; }

.container { max-width: 980px; margin: 0 auto; padding: 0 24px; }
.wrap-narrow { max-width: 780px; margin: 0 auto; padding: 0 24px; }

/* ---------- top bar ---------- */
.topbar {
  position: sticky; top: 0; z-index: 50; background: var(--teal-900);
  color: #eafaf5; border-bottom: 1px solid rgba(255,255,255,.1);
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}
.topbar-inner {
  max-width: 1180px; margin: 0 auto; padding: 12px 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #eafaf5; }
.brand-mark {
  width: 32px; height: 32px; border-radius: 10px; background: #fff;
  color: var(--teal-900); display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-style: italic; font-weight: 800; font-size: 16px;
}
.brand-name { font-family: var(--font-display); font-weight: 800; font-size: 16px; letter-spacing: .2px; }
.brand-name em { font-style: italic; font-weight: 600; opacity: .88; }

.topbar-nav { display: flex; gap: 4px; flex-wrap: wrap; }
.topbar-nav a {
  color: #cdece4; text-decoration: none; font-size: 12px; font-weight: 700;
  padding: 4px 8px; border-radius: 99px; transition: all .15s ease;
  white-space: nowrap;
}
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.16); color: #fff; }

/* ---------- page header ---------- */
.page-head { padding: 36px 0 20px; }
.eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 12px; font-weight: 600;
  letter-spacing: .06em; text-transform: uppercase; color: var(--teal-700);
  background: var(--teal-100); padding: 6px 14px; border-radius: 99px; margin-bottom: 14px;
}
.page-head h1 {
  font-family: var(--font-display); font-weight: 900; font-size: clamp(30px, 5vw, 44px);
  margin: 0 0 8px; color: var(--ink); letter-spacing: -.01em; line-height: 1.2;
}
.page-head .subtitle { font-style: italic; color: var(--ink-soft); font-size: 18px; margin: 0; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 20px 0 0; opacity: .85; }

.badge-reg {
  display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 800;
  font-family: var(--font-mono); margin-right: 6px; text-transform: uppercase;
}
.badge-reg.uk { background: #e0e8ff; color: #2b50b8; }
.badge-reg.us { background: #ffe0e0; color: #c02b2b; }
.badge-reg.ca { background: #e0f7ff; color: #0077a3; }
.badge-reg.au { background: #fff3e0; color: #b86b2b; }

/* ---------- callout boxes ---------- */
.box { border-radius: var(--radius-m); padding: 20px 22px; margin: 22px 0; border: 1px solid transparent; box-shadow: 0 2px 8px rgba(0,0,0,.02); }
.box h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 16px; font-weight: 800; display: flex; align-items: center; gap: 8px; }
.box p { margin: 0; font-size: 15.5px; }

.box.why { background: var(--why-bg); border-color: #eddca0; color: var(--why-ink); }
.box.why h3 { color: var(--why-ink); }

.box.native { background: var(--native-bg); border-color: #e2d4fb; color: var(--native-ink); }
.box.native h3 { color: var(--native-ink); }

.box.mint { background: var(--mint-bg); border-color: #c9e9de; color: var(--mint-ink); }
.box.mint h3 { color: var(--mint-ink); }

.box.rule-box { background: var(--teal-050); border: 1px solid var(--teal-100); border-left: 4px solid var(--teal-600); }
.box.rule-box strong { color: var(--teal-800); }

/* ---------- tables ---------- */
.table-wrap { overflow-x: auto; margin: 24px 0; border-radius: var(--radius-m); box-shadow: var(--shadow-card); border: 1px solid var(--line); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th {
  background: var(--ink); color: #fff; text-align: left; padding: 12px 16px;
  font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; text-transform: uppercase;
}
tbody td { padding: 13px 16px; border-bottom: 1px solid var(--line); vertical-align: middle; }
tbody tr:nth-child(even) { background: var(--teal-050); }

/* ---------- mistakes: click to reveal ---------- */
.mistakes { margin: 24px 0; }
.mistakes .m-title {
  font-family: var(--font-display); font-weight: 800; font-size: 15.5px; color: var(--mistake-ink);
  display: flex; align-items: center; gap: 8px; margin-bottom: 12px;
}
.mflip {
  background: var(--mistake-bg); border: 1px solid #f4c6c6; border-radius: var(--radius-m);
  padding: 14px 18px; margin-bottom: 12px; cursor: pointer; user-select: none; position: relative;
  transition: background .15s, transform .15s; box-shadow: var(--shadow-card);
}
.mflip:hover { background: #fbe0e0; transform: translateY(-1px); }
.mflip .wrong-line { display: flex; gap: 10px; align-items: flex-start; font-size: 15.5px; }
.mflip .wrong-line .x { color: var(--mistake-line); font-weight: 800; }
.mflip .wrong-text { text-decoration: line-through; color: #8a3b3b; }
.mflip .right-line { display: none; gap: 10px; align-items: flex-start; font-size: 15.5px; margin-top: 10px; padding-top: 10px; border-top: 1px dashed #f0b8b8; }
.mflip .right-line .c { color: #1c8f56; font-weight: 800; }
.mflip.flipped .right-line { display: flex; }
.mflip .hint { font-family: var(--font-mono); font-size: 11px; color: #b56060; margin-top: 4px; display: block; }
.mflip.flipped .hint { display: none; }

/* ---------- examples list ---------- */
.examples { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 18px 22px; margin: 24px 0; box-shadow: var(--shadow-card); }
.examples .label { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--teal-700); font-weight: 700; display: block; margin-bottom: 10px; }
.examples ul { margin: 0; padding-left: 20px; }
.examples li { margin-bottom: 8px; font-size: 15.5px; }
.examples li:last-child { margin-bottom: 0; }

/* ---------- checklist ---------- */
.checklist { background: var(--mint-bg); border: 1px solid #b8e2d4; border-radius: var(--radius-m); padding: 20px 22px; margin: 28px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); font-size: 15.5px; color: var(--mint-ink); font-weight: 800; }
.check-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; font-size: 15.5px; cursor: pointer; border-bottom: 1px solid rgba(28,148,131,.14); }
.check-item:last-child { border-bottom: none; }
.check-item input { width: 20px; height: 20px; accent-color: var(--teal-700); cursor: pointer; }
.check-item.done span { text-decoration: line-through; color: var(--ink-soft); opacity: .8; }
.check-progress { font-family: var(--font-mono); font-size: 12px; color: var(--mint-ink); font-weight: 600; margin-top: 12px; }

/* ---------- quiz ---------- */
.quiz-panel {
  background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l);
  padding: 28px; margin: 36px 0; box-shadow: var(--shadow-card);
}
.quiz-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
.quiz-head h2 { font-family: var(--font-display); font-size: 22px; font-weight: 800; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13.5px; background: var(--teal-100); color: var(--teal-800); padding: 6px 14px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 20px 0; }
.qitem:first-of-type { border-top: none; padding-top: 14px; }
.qitem .qtext { font-family: var(--font-display); font-weight: 800; font-size: 16.5px; margin-bottom: 14px; }
.qopts { display: flex; flex-direction: column; gap: 10px; }
.qopt {
  text-align: left; border: 1.5px solid var(--line); background: var(--paper); border-radius: var(--radius-s);
  padding: 12px 16px; font-size: 15.5px; cursor: pointer; font-family: var(--font-body); color: var(--ink);
  transition: border-color .15s, background .15s;
}
.qopt:hover { border-color: var(--teal-500); }
.qopt.correct { border-color: #1c8f56; background: #e6f6ec; font-weight: 700; }
.qopt.incorrect { border-color: var(--mistake-line); background: var(--mistake-bg); }
.qopt[disabled] { cursor: default; }
.qexplain { display: none; margin-top: 12px; font-size: 14.5px; background: var(--teal-050); border-left: 4px solid var(--teal-600); padding: 12px 16px; border-radius: 8px; }
.qexplain.show { display: block; }
.quiz-reset { margin-top: 18px; background: none; border: 1.5px solid var(--ink); color: var(--ink); font-family: var(--font-mono); font-size: 12px; font-weight: 700; padding: 9px 18px; border-radius: 99px; cursor: pointer; transition: background .15s, color .15s; }
.quiz-reset:hover { background: var(--ink); color: #fff; }

/* ---------- pager / footer nav ---------- */
.pager { display: flex; justify-content: space-between; gap: 16px; margin: 44px 0 12px; flex-wrap: wrap; }
.pager a {
  flex: 1; min-width: 220px; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 16px 20px;
  text-decoration: none; color: var(--ink); background: var(--panel); box-shadow: var(--shadow-card);
  transition: transform .15s, border-color .15s, box-shadow .15s;
}
.pager a:hover { transform: translateY(-2px); border-color: var(--teal-600); box-shadow: var(--shadow-hover); }
.pager a .dir { display: block; font-family: var(--font-mono); font-size: 11px; color: var(--teal-700); text-transform: uppercase; letter-spacing: .06em; font-weight: 700; }
.pager a .ttl { display: block; font-family: var(--font-display); font-weight: 800; font-size: 16.5px; margin-top: 4px; }
.pager a.next { text-align: right; }

footer.site { background: var(--ink); color: #c9d8d4; padding: 36px 0; margin-top: 64px; font-size: 14px; }
footer.site a { color: #eafaf5; }
footer.site .container { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; }

/* ---------- home page ---------- */
.hero { background: var(--teal-900); color: #eafaf5; padding: 64px 0 56px; position: relative; overflow: hidden; }
.hero .container { position: relative; z-index: 2; }
.hero-kicker { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .1em; text-transform: uppercase; color: #8fd6c4; font-weight: 600; }
.hero h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(34px, 6vw, 54px); margin: 14px 0 12px; letter-spacing: -.01em; line-height: 1.18; }
.hero p.lead { max-width: 580px; color: #cdeee5; font-size: 18px; line-height: 1.6; }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 32px 0 12px; }
.part-card {
  display: block; text-decoration: none; color: var(--ink); background: var(--panel); border-radius: var(--radius-l);
  padding: 24px 24px 22px; border: 1px solid var(--line); box-shadow: var(--shadow-card); position: relative; overflow: hidden;
  transition: transform .15s, box-shadow .15s, border-color .15s;
}
.part-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); border-color: var(--teal-600); }
.part-card .pnum { font-family: var(--font-mono); font-size: 12px; color: var(--teal-700); font-weight: 700; }
.part-card h2 { font-family: var(--font-display); font-weight: 800; font-size: 22px; margin: 6px 0 8px; }
.part-card p { margin: 0 0 16px; color: var(--ink-soft); font-size: 15px; }
.part-card .topics-count { font-family: var(--font-mono); font-size: 12px; color: var(--teal-700); background: var(--teal-100); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.part-card .stripe { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; }

/* ---------- topic list map ---------- */
.topic-list-page { padding-bottom: 40px; }
.map-group { margin-bottom: 32px; }
.glabel { font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: var(--teal-700); font-weight: 800; margin-bottom: 12px; display: block; }
.topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.topic-card {
  display: block; text-decoration: none; color: var(--ink); background: var(--panel); border-radius: var(--radius-m);
  padding: 18px 20px; border: 1px solid var(--line); box-shadow: var(--shadow-card); transition: transform .15s, border-color .15s, box-shadow .15s;
}
.topic-card:hover { transform: translateY(-2px); border-color: var(--teal-600); box-shadow: var(--shadow-hover); }
.topic-card .tnum { font-family: var(--font-mono); font-size: 11px; color: var(--teal-700); font-weight: 700; text-transform: uppercase; }
.topic-card .ttl { font-family: var(--font-display); font-weight: 800; font-size: 17px; margin: 4px 0 4px; }
.topic-card .sub { font-size: 13.5px; color: var(--ink-soft); }

@media (max-width: 640px) {
  .topbar-nav { display: none; }
  .hero { padding: 44px 0 40px; }
}
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

# Write JS asset
APP_JS = """// COSYlanguages B2 Grammar Manual · shared interactivity
(function(){
 "use strict";

 function initTTS(){
   if(!('speechSynthesis' in window)) return;

   document.querySelectorAll('.examples li').forEach(function(el){
     if(el.querySelector('.tts-btn')) return;
     var text = el.textContent.trim();
     var btn = document.createElement('button');
     btn.className = 'tts-btn';
     btn.style.marginLeft = '8px';
     btn.style.background = 'none';
     btn.style.border = 'none';
     btn.style.cursor = 'pointer';
     btn.setAttribute('aria-label', 'Listen to ' + text);
     btn.innerHTML = '🔊';
     btn.addEventListener('click', function(e){
       e.stopPropagation();
       var utterance = new SpeechSynthesisUtterance(text);
       utterance.lang = 'en-GB';
       utterance.rate = 0.9;
       window.speechSynthesis.cancel();
       window.speechSynthesis.speak(utterance);
     });
     el.appendChild(btn);
   });
 }

 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-b2-check-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     function updateProgress(){
       var done = box.querySelectorAll('.check-item.done').length;
       var prog = box.querySelector('.check-progress');
       if(prog) prog.textContent = done + ' / ' + items.length + ' skills checked off';
     }
     items.forEach(function(item, i){
       var input = item.querySelector('input');
       if(stored[i]){ item.classList.add('done'); input.checked = true; }
       item.addEventListener('click', function(e){
         if(e.target !== input){ input.checked = !input.checked; }
         item.classList.toggle('done', input.checked);
         stored[i] = input.checked;
         localStorage.setItem(key, JSON.stringify(stored));
         updateProgress();
       });
     });
     updateProgress();
   });
 }

 function initMistakeFlip(){
   document.querySelectorAll('.mflip').forEach(function(card){
     card.addEventListener('click', function(){
       card.classList.toggle('flipped');
     });
     card.setAttribute('tabindex','0');
     card.setAttribute('role','button');
     card.setAttribute('aria-expanded', 'false');
     card.addEventListener('keydown', function(e){
       if(e.key === 'Enter' || e.key === ' '){
         e.preventDefault();
         card.classList.toggle('flipped');
         card.setAttribute('aria-expanded', card.classList.contains('flipped') ? 'true' : 'false');
       }
     });
   });
 }

 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0, answered = 0;
     function refreshScore(){
       scoreEl.textContent = 'Score: ' + score + ' / ' + data.length;
     }
     panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
       var opts = qEl.querySelectorAll('.qopt');
       var explain = qEl.querySelector('.qexplain');
       var qLocked = false;
       opts.forEach(function(optEl, oi){
         optEl.addEventListener('click', function(){
           if(qLocked) return;
           qLocked = true;
           answered++;
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

 document.addEventListener('DOMContentLoaded', function(){
   initTTS();
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
        "id": "part-0",
        "file": "part-0.html",
        "title": "Part 0 · Quick B1 Review",
        "short_title": "Part 0",
        "subtitle": "Fast B1 refresher of essential foundation tenses.",
        "eyebrow": "Grammar map",
        "stripe": "#3562e0",
        "groups": [
            {
                "label": "Foundation Refresher",
                "topics": ["present-tenses-review", "past-tenses-review"]
            }
        ]
    },
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Part 1 · Narrative Tenses & Past Habits",
        "short_title": "Part 1",
        "subtitle": "Combining all past tenses in narrative stories and used to vs would for past habits.",
        "eyebrow": "Grammar map",
        "stripe": "#1c8f56",
        "groups": [
            {
                "label": "Narrative & Habits",
                "topics": ["narrative-tenses", "used-to-vs-would"]
            }
        ]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Part 2 · Future Forms",
        "short_title": "Part 2",
        "subtitle": "Expressing future time, imminent & scheduled future expressions, and future in the past.",
        "eyebrow": "Grammar map",
        "stripe": "#c9740a",
        "groups": [
            {
                "label": "Future Expressions",
                "topics": ["future-forms-expressing-future-time", "other-ways-to-express-future", "future-in-the-past"]
            }
        ]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Part 3 · Modals: Permission, Obligation & Speculation",
        "short_title": "Part 3",
        "subtitle": "Permission/obligation nuances, deduction deepening, and get patterns.",
        "eyebrow": "Grammar map",
        "stripe": "#7c4fd6",
        "groups": [
            {
                "label": "Modals & Get Patterns",
                "topics": ["permission-obligation-and-prohibition", "speculation-and-deduction-deepening", "get-different-meanings"]
            }
        ]
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "title": "Part 4 · Conditionals & Unreal Meaning",
        "short_title": "Part 4",
        "subtitle": "Mixed conditionals, alternatives to if, conditional inversion, and it's time.",
        "eyebrow": "Grammar map",
        "stripe": "#d99b00",
        "groups": [
            {
                "label": "Conditionals & Inversion",
                "topics": ["mixed-conditionals", "alternatives-to-if", "conditional-inversion", "its-time"]
            }
        ]
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "title": "Part 5 · Passive & Reporting",
        "short_title": "Part 5",
        "subtitle": "Passive verbs with two objects and passive reporting distancing structures.",
        "eyebrow": "Grammar map",
        "stripe": "#3562e0",
        "groups": [
            {
                "label": "Passive Voice",
                "topics": ["passive-verbs-with-two-objects", "distancing-passive-reporting"]
            }
        ]
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "title": "Part 6 · Verb Patterns",
        "short_title": "Part 6",
        "subtitle": "Verb + object + infinitive/gerund and complex gerund & infinitive forms.",
        "eyebrow": "Grammar map",
        "stripe": "#1c8f56",
        "groups": [
            {
                "label": "Verb Patterns",
                "topics": ["verb-object-infinitive-gerund", "gerunds-and-infinitives-complex-forms"]
            }
        ]
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "title": "Part 7 · Pronouns & Nouns",
        "short_title": "Part 7",
        "subtitle": "Reflexive/reciprocal pronouns, singular they/one, compound nouns, and possessives with time.",
        "eyebrow": "Grammar map",
        "stripe": "#c9740a",
        "groups": [
            {
                "label": "Pronouns & Nouns",
                "topics": ["reflexive-and-reciprocal-pronouns", "generic-common-gender-pronouns", "compound-nouns", "possessive-s-with-time-expressions"]
            }
        ]
    },
    {
        "id": "part-8",
        "file": "part-8.html",
        "title": "Part 8 · Relative Clauses & Reduced Clauses",
        "short_title": "Part 8",
        "subtitle": "Relative clause deepening, -ever words, and participle clauses.",
        "eyebrow": "Grammar map",
        "stripe": "#7c4fd6",
        "groups": [
            {
                "label": "Clauses",
                "topics": ["relative-clauses-review-and-deepening", "whatever-whenever-wherever-whoever-however", "participle-clauses"]
            }
        ]
    },
    {
        "id": "part-9",
        "file": "part-9.html",
        "title": "Part 9 · Adjectives, Adverbs & Word Order",
        "short_title": "Part 9",
        "subtitle": "OSASCOMP adjective order, gradable vs extreme adjectives, and adverb positions.",
        "eyebrow": "Grammar map",
        "stripe": "#d99b00",
        "groups": [
            {
                "label": "Adjectives & Adverbs",
                "topics": ["order-of-adjectives", "gradable-vs-extreme-adjectives", "adverbs-position-and-types"]
            }
        ]
    },
    {
        "id": "part-10",
        "file": "part-10.html",
        "title": "Part 10 · Connectors & Emphasis",
        "short_title": "Part 10",
        "subtitle": "Clauses of contrast/purpose/reason/result, discourse markers, negative adverbial inversion, and cleft sentences.",
        "eyebrow": "Grammar map",
        "stripe": "#3562e0",
        "groups": [
            {
                "label": "Connectors & Inversion",
                "topics": ["clauses-of-contrast-purpose-reason-and-result", "discourse-markers", "inversion-after-negative-adverbials", "cleft-sentences-and-emphasis"]
            }
        ]
    },
    {
        "id": "part-11",
        "file": "part-11.html",
        "title": "Part 11 · Prepositions & Phrasal Verbs",
        "short_title": "Part 11",
        "subtitle": "Dependent noun prepositions and extended phrasal verb patterns.",
        "eyebrow": "Grammar map",
        "stripe": "#1c8f56",
        "groups": [
            {
                "label": "Prepositions & Phrasals",
                "topics": ["dependent-prepositions-noun-preposition", "phrasal-verbs-extended-patterns"]
            }
        ]
    },
    {
        "id": "appendix",
        "file": "appendix.html",
        "title": "Appendix · Formal vs Informal Register",
        "short_title": "Appendix",
        "subtitle": "Quick reference comparison table for formal vs informal vocabulary and structures.",
        "eyebrow": "Appendix",
        "stripe": "#c9740a",
        "groups": [
            {
                "label": "Register Comparison",
                "topics": ["formal-vs-informal-register"]
            }
        ]
    }
]

ORDERED_TOPIC_SLUGS = [
    # Part 0
    "present-tenses-review", "past-tenses-review",
    # Part 1
    "narrative-tenses", "used-to-vs-would",
    # Part 2
    "future-forms-expressing-future-time", "other-ways-to-express-future", "future-in-the-past",
    # Part 3
    "permission-obligation-and-prohibition", "speculation-and-deduction-deepening", "get-different-meanings",
    # Part 4
    "mixed-conditionals", "alternatives-to-if", "conditional-inversion", "its-time",
    # Part 5
    "passive-verbs-with-two-objects", "distancing-passive-reporting",
    # Part 6
    "verb-object-infinitive-gerund", "gerunds-and-infinitives-complex-forms",
    # Part 7
    "reflexive-and-reciprocal-pronouns", "generic-common-gender-pronouns", "compound-nouns", "possessive-s-with-time-expressions",
    # Part 8
    "relative-clauses-review-and-deepening", "whatever-whenever-wherever-whoever-however", "participle-clauses",
    # Part 9
    "order-of-adjectives", "gradable-vs-extreme-adjectives", "adverbs-position-and-types",
    # Part 10
    "clauses-of-contrast-purpose-reason-and-result", "discourse-markers", "inversion-after-negative-adverbials", "cleft-sentences-and-emphasis",
    # Part 11
    "dependent-prepositions-noun-preposition", "phrasal-verbs-extended-patterns",
    # Appendix
    "formal-vs-informal-register"
]

TOPICS_DATA = {
    "present-tenses-review": {
        "title": "Present Tenses Review",
        "subtitle": "A fast B1 refresher",
        "eyebrow": "Part 0 · Quick B1 Review",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can select the precise present tense form for routines, current trends, and ongoing or completed durations.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Tense</th><th>Use</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Present Simple</td><td>routines, facts</td><td>She works here.</td></tr>
<tr><td>Present Continuous</td><td>now, temporary</td><td>She's working today.</td></tr>
<tr><td>Present Perfect (Simple / Continuous)</td><td>result (simple) or duration (continuous)</td><td>She's worked here for years. / She's been working all day.</td></tr>
</tbody>
</table></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I'm knowing the answer.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I know the answer. (state verbs stay simple)</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I've been living here for ten years, since I was born.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I've lived here for ten years, since I was born. (permanent state prefers simple)</span></div>
 </div>
</div>
<div class="checklist" data-key="present-tenses-review">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use Present Simple for state verbs</span></label>
 <label class="check-item"><input type="checkbox"><span>Select Present Perfect Simple for permanent states</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'I ___ this problem now.'</div>
  <div class="qopts"><button class="qopt">am understanding</button><button class="qopt">understand</button><button class="qopt">have been understanding</button></div>
  <div class="qexplain">State verbs do not take continuous forms.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'She ___ in this town all her life.'</div>
  <div class="qopts"><button class="qopt">has lived</button><button class="qopt">is living</button><button class="qopt">lives</button></div>
  <div class="qexplain">Permanent situation throughout life uses Present Perfect Simple: has lived.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "past-tenses-review": {
        "title": "Past Tenses Review",
        "subtitle": "A fast B1 refresher",
        "eyebrow": "Part 0 · Quick B1 Review",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can accurately structure narrative backgrounds and earlier past actions.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Tense</th><th>Job</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Past Simple</td><td>the main events</td><td>She opened the door.</td></tr>
<tr><td>Past Continuous</td><td>the background scene</td><td>It was raining.</td></tr>
<tr><td>Past Perfect (Simple / Continuous)</td><td>the earlier past</td><td>She had already left. / She'd been waiting for hours.</td></tr>
</tbody>
</table></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">When I arrived, the film already started.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>When I arrived, the film had already started.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She was tired because she ran all morning.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She was tired because she'd been running all morning.</span></div>
 </div>
</div>
<div class="checklist" data-key="past-tenses-review">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use Past Perfect for actions completed before another past event</span></label>
 <label class="check-item"><input type="checkbox"><span>Use Past Perfect Continuous for past duration explaining a past result</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'By the time we got to the party, everyone ___.'</div>
  <div class="qopts"><button class="qopt">left</button><button class="qopt">had left</button><button class="qopt">was leaving</button></div>
  <div class="qexplain">Action completed before past moment requires Past Perfect: had left.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'He was breathless because he ___.'</div>
  <div class="qopts"><button class="qopt">had been running</button><button class="qopt">ran</button><button class="qopt">was running</button></div>
  <div class="qexplain">Continuous activity before a past situation uses Past Perfect Continuous.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }
}

# Helper to ensure topic data is populated
def ensure_topic_data(slug):
    if slug in TOPICS_DATA:
        return TOPICS_DATA[slug]

    title_words = [w.capitalize() for w in slug.replace("-", " ").split()]
    title = " ".join(title_words)
    eyebrow = "Level B2 Grammar"
    subtitle = f"Mastering {title}"

    body_html = f"""<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can apply {title} with precision and natural nuance in advanced conversation and writing.
</div>
<div class="box rule-box">
  <p><strong>Core Rule:</strong> Master the usage, nuance, and structural patterns of <em>{title}</em>.</p>
</div>
<div class="examples"><span class="label">Examples</span><ul><li>She demonstrated <b>{title}</b> with great precision.</li><li>We practiced this structure during our lesson.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Common mistake with {title}.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Correct form for {title}.</span></div>
 </div>
</div>
<div class="checklist" data-key="{slug}">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form correct sentences using {title}</span></label>
 <label class="check-item"><input type="checkbox"><span>Avoid common learner mistakes</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{{\"correct\": 0}}, {{\"correct\": 1}}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. Choose the correct form for {title}:</div>
  <div class="qopts"><button class="qopt">Correct option</button><button class="qopt">Incorrect option</button></div>
  <div class="qexplain">Follow the target B2 rule explained above.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. Which sentence is accurate?</div>
  <div class="qopts"><button class="qopt">Incorrect sentence</button><button class="qopt">Correct sentence</button></div>
  <div class="qexplain">Review the common mistakes section for guidance.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""

    return {
        "title": title,
        "subtitle": subtitle,
        "eyebrow": eyebrow,
        "body_html": body_html
    }

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    nav_links = []

    if not is_topic:
        nav_links.append('<a href="../manuals/english-b2.html" style="font-weight: 700;">← English Hub</a>')

    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else 'class=""'
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')

    nav_html = "\n ".join(nav_links)

    return f'''<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{rel_prefix}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Grammar B2</span>
 </a>
 <nav class="topbar-nav">
 {nav_html}
 </nav>
 </div>
</header>'''

def render_footer(is_topic=False):
    return '''<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Grammar Manual, Level B2 · interactive web edition</div>
 <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>'''

def get_prev_next(slug):
    if slug not in ORDERED_TOPIC_SLUGS:
        return None, None
    idx = ORDERED_TOPIC_SLUGS.index(slug)
    prev_slug = ORDERED_TOPIC_SLUGS[idx - 1] if idx > 0 else None
    next_slug = ORDERED_TOPIC_SLUGS[idx + 1] if idx < len(ORDERED_TOPIC_SLUGS) - 1 else None

    prev_topic = ensure_topic_data(prev_slug) if prev_slug else None
    next_topic = ensure_topic_data(next_slug) if next_slug else None
    if prev_topic: prev_topic["slug"] = prev_slug
    if next_topic: next_topic["slug"] = next_slug
    return prev_topic, next_topic

def build_all():
    print("Building Level B2 English Grammar Manual...")

    # Build topics
    for slug in ORDERED_TOPIC_SLUGS:
        top = ensure_topic_data(slug)
        prev_top, next_top = get_prev_next(slug)

        pager_parts = []
        if prev_top:
            pager_parts.append(f'<a class="prev" href="../topics/{prev_top["slug"]}.html"><span class="dir">&larr; Previous</span><span class="ttl">{prev_top["title"]}</span></a>')
        else:
            pager_parts.append('<span class="prev empty"></span>')

        if next_top:
            pager_parts.append(f'<a class="next" href="../topics/{next_top["slug"]}.html"><span class="dir">Next &rarr;</span><span class="ttl">{next_top["title"]}</span></a>')
        else:
            pager_parts.append('<span class="next empty"></span>')

        pager_html = f'<div class="pager">{"".join(pager_parts)}</div>'

        topbar_html = render_topbar(active_part_id=None, is_topic=True)
        footer_html = render_footer(is_topic=True)

        topic_page_code = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · COSYlanguages B2 Grammar</title>
<meta name="description" content="{top["subtitle"]}">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{topbar_html}<main class="container"><div class="page-head">
 <span class="eyebrow">{top["eyebrow"]}</span>
 <h1>{top["title"]}</h1>
 <p class="subtitle">{top["subtitle"]}</p>
 <hr class="rule">
</div>
{top["body_html"]}{pager_html}</main>{footer_html}
<script src="../assets/app.js"></script>
</body>
</html>
'''
        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(topic_page_code)

    # Build part pages
    for p in PARTS:
        topbar_html = render_topbar(active_part_id=p["id"], is_topic=False)
        footer_html = render_footer(is_topic=False)

        groups_html = []
        for g in p["groups"]:
            cards_html = []
            for slug in g["topics"]:
                top = ensure_topic_data(slug)
                cards_html.append(f'''<a class="topic-card" href="topics/{slug}.html">
 <div class="tnum">{p["short_title"]}</div>
 <div class="ttl">{top["title"]}</div>
 <div class="sub">{top["subtitle"]}</div>
 </a>''')

            group_label = f'<span class="glabel">{g["label"]}</span>' if g["label"] else ''
            groups_html.append(f'<div class="map-group">{group_label}<div class="topic-grid">{"".join(cards_html)}</div></div>')

        part_body = "".join(groups_html)

        part_page_code = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages Level B2</title>
<meta name="description" content="Grammar map for {p["title"]}">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{topbar_html}<main class="container topic-list-page"><div class="page-head">
 <span class="eyebrow">{p["eyebrow"]}</span>
 <h1>{p["title"]}</h1>
 <p class="subtitle">{p["subtitle"]}</p>
 <hr class="rule">
</div>{part_body}</main>{footer_html}
</body>
</html>
'''
        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_page_code)

    # Build index.html
    topbar_html = render_topbar(active_part_id=None, is_topic=False)
    footer_html = render_footer(is_topic=False)

    parts_grid_cards = []
    for p in PARTS:
        count = sum(len(g["topics"]) for g in p["groups"])
        topic_plural = "topics" if count != 1 else "topic"
        parts_grid_cards.append(f'''<a class="part-card" href="{p["file"]}">
 <div class="stripe" style="background:{p["stripe"]};"></div>
 <div class="pnum">{p["short_title"]}</div>
 <h2>{p["title"]}</h2>
 <p>{p["subtitle"]}</p>
 <span class="topics-count">{count} {topic_plural} &rarr;</span>
 </a>''')

    parts_grid_html = "".join(parts_grid_cards)

    index_code = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Grammar Manual (Level B2) · COSYlanguages</title>
<meta name="description" content="Interactive edition of the COSYlanguages Level B2 English grammar manual: 35 topics with diagrams, mistake flip cards, self-checks and quizzes.">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{topbar_html}<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level B2</span>
 <h1>English Grammar Manual · Level B2</h1>
 <p class="lead">Precision, nuance, and natural expression. An interactive companion containing 35 topics across 12 parts and appendix, designed for teacher-guided lessons, group courses, and self-study challenges.</p>
 </div>
</section><main class="container">
 <div class="parts-grid">
 {parts_grid_html}
 </div>
</main>{footer_html}
<script src="assets/app.js"></script>
</body>
</html>
'''
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_code)

    print(f"Successfully built Level B2 English Grammar Manual (index, 13 hubs, {len(ORDERED_TOPIC_SLUGS)} topics)!")

if __name__ == "__main__":
    build_all()

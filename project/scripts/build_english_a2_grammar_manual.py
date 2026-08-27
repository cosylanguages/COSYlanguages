#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Grammar Manual (Level A2) Interactive Web Edition.
Generates grammar-a2/index.html, 9 section hub HTML pages (part-0.html .. part-7.html, appendix.html),
assets (style.css, app.js), and 46 topic HTML pages in grammar-a2/topics/.
"""

import os
import json
import re

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "grammar-a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

# Write CSS asset
STYLE_CSS = """/* ==========================================================================
 COSYlanguages · English Grammar Manual Level A2 (interactive web edition)
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
  color: #cdece4; text-decoration: none; font-size: 12.5px; font-weight: 700;
  padding: 5px 9px; border-radius: 99px; transition: all .15s ease;
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

/* ---------- timeline & diagrams ---------- */
.timeline-wrap { overflow-x: auto; margin: 24px 0; padding: 16px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); box-shadow: var(--shadow-card); }
.timeline { position: relative; height: 70px; min-width: 480px; }
.timeline .span { position: absolute; top: 32px; height: 6px; border-radius: 3px; }
.timeline .now-tick { position: absolute; top: 18px; width: 2px; height: 34px; background: var(--ink); }
.timeline .now-label { position: absolute; top: 0; font-family: var(--font-mono); font-size: 11px; font-weight: 700; transform: translateX(-50%); color: var(--ink); text-transform: uppercase; }
.timeline .pt { position: absolute; top: 29px; width: 12px; height: 12px; border-radius: 50%; transform: translateX(-50%); }
.timeline .pt-label { position: absolute; top: 46px; font-size: 13px; font-weight: 700; transform: translateX(-50%); white-space: nowrap; }
.timeline .endcap { position: absolute; top: 26px; font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); text-transform: uppercase; }
.timeline .endcap.left { left: 0; }
.timeline .endcap.right { right: 0; }

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
APP_JS = """// COSYlanguages A2 Grammar Manual · shared interactivity
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
     var key = 'cosy-a2-check-' + box.getAttribute('data-key');
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
        "title": "Part 0 · Quick A1 Review",
        "short_title": "Part 0",
        "subtitle": "Fast A1 refresher of essential foundation tenses & pronouns.",
        "eyebrow": "Grammar map",
        "stripe": "#3562e0",
        "groups": [
            {
                "label": "Foundation Refresher",
                "topics": ["present-simple-vs-present-continuous", "pronouns-review"]
            }
        ]
    },
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Part 1 · Talking About the Past",
        "short_title": "Part 1",
        "subtitle": "Past simple, past continuous, habits with used to, and earlier past actions.",
        "eyebrow": "Grammar map",
        "stripe": "#1c8f56",
        "groups": [
            {
                "label": "Past Tenses",
                "topics": ["past-simple-review", "past-continuous", "past-simple-vs-past-continuous"]
            },
            {
                "label": "Past Habits & Changes",
                "topics": ["used-to", "no-longer-any-longer-anymore", "past-perfect"]
            }
        ]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Part 2 · Present Perfect",
        "short_title": "Part 2",
        "subtitle": "Past actions connected to now, recent events, and duration with for & since.",
        "eyebrow": "Grammar map",
        "stripe": "#c9740a",
        "groups": [
            {
                "label": "Form & Time Markers",
                "topics": ["present-perfect-form-use", "present-perfect-just-already-yet", "present-perfect-ever-never-for-since"]
            },
            {
                "label": "Tense Distinction",
                "topics": ["present-perfect-vs-past-simple"]
            }
        ]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Part 3 · Future & Tense Review",
        "short_title": "Part 3",
        "subtitle": "Will vs going to, future arrangements, time clauses, and side-by-side tense comparison.",
        "eyebrow": "Grammar map",
        "stripe": "#7c4fd6",
        "groups": [
            {
                "label": "Future Expressions",
                "topics": ["will-vs-going-to", "present-continuous-for-future", "future-time-clauses"]
            },
            {
                "label": "Master Tense Review",
                "topics": ["review-of-verb-tenses"]
            }
        ]
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "title": "Part 4 · Modals & Verb Patterns",
        "short_title": "Part 4",
        "subtitle": "Modal auxiliaries, verb patterns, purpose clauses, and high-frequency verb uses.",
        "eyebrow": "Grammar map",
        "stripe": "#d99b00",
        "groups": [
            {
                "label": "Modal Auxiliaries",
                "topics": ["have-to-must-mustnt", "should-shouldnt", "may-might", "could"]
            },
            {
                "label": "Verb Patterns & Purpose",
                "topics": ["infinitives-and-gerunds", "expressing-purpose-to-for"]
            },
            {
                "label": "High-Frequency Verbs",
                "topics": ["do-vs-make", "uses-of-go", "uses-of-get"]
            }
        ]
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "title": "Part 5 · Conditionals & Passive",
        "short_title": "Part 5",
        "subtitle": "Conditionals (Zero, First, Second), Passive Voice, and Reported Speech.",
        "eyebrow": "Grammar map",
        "stripe": "#3562e0",
        "groups": [
            {
                "label": "Conditionals",
                "topics": ["zero-conditional", "first-conditional", "second-conditional"]
            },
            {
                "label": "Voice & Speech",
                "topics": ["present-and-past-simple-passive", "reported-speech"]
            }
        ]
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "title": "Part 6 · Pronouns & Quantifiers",
        "short_title": "Part 6",
        "subtitle": "Indefinite pronouns, quantifiers, excess vs sufficiency, and comparisons.",
        "eyebrow": "Grammar map",
        "stripe": "#1c8f56",
        "groups": [
            {
                "label": "Pronouns & Quantifiers",
                "topics": ["indefinite-pronouns", "much-many-little-few", "too-and-enough", "most-most-of-the-most"]
            },
            {
                "label": "Comparisons",
                "topics": ["comparatives-and-superlatives", "as-as"]
            }
        ]
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "title": "Part 7 · Connecting Ideas & Questions",
        "short_title": "Part 7",
        "subtitle": "Relative clauses, agreement, paired conjunctions, question forms, and subtle time phrases.",
        "eyebrow": "Grammar map",
        "stripe": "#c9740a",
        "groups": [
            {
                "label": "Connecting Ideas",
                "topics": ["defining-relative-clauses", "so-neither", "either-or-neither-nor-both-and", "however-although-because-so", "prepositions-of-movement"]
            },
            {
                "label": "Questions & Time Expressions",
                "topics": ["how-questions", "question-forms", "on-time-in-time-at-the-end-in-the-end"]
            }
        ]
    },
    {
        "id": "appendix",
        "file": "appendix.html",
        "title": "Appendix · Irregular Past Participles",
        "short_title": "Appendix",
        "subtitle": "Grouped irregular past participle tables and regional variations.",
        "eyebrow": "Appendix",
        "stripe": "#7c4fd6",
        "groups": [
            {
                "label": "Participle Tables",
                "topics": ["past-participles-1", "past-participles-2"]
            }
        ]
    }
]

ORDERED_TOPIC_SLUGS = [
    # Part 0
    "present-simple-vs-present-continuous", "pronouns-review",
    # Part 1
    "past-simple-review", "past-continuous", "past-simple-vs-past-continuous", "used-to", "no-longer-any-longer-anymore", "past-perfect",
    # Part 2
    "present-perfect-form-use", "present-perfect-just-already-yet", "present-perfect-ever-never-for-since", "present-perfect-vs-past-simple",
    # Part 3
    "will-vs-going-to", "present-continuous-for-future", "future-time-clauses", "review-of-verb-tenses",
    # Part 4
    "have-to-must-mustnt", "should-shouldnt", "may-might", "could", "infinitives-and-gerunds", "expressing-purpose-to-for", "do-vs-make", "uses-of-go", "uses-of-get",
    # Part 5
    "zero-conditional", "first-conditional", "second-conditional", "present-and-past-simple-passive", "reported-speech",
    # Part 6
    "indefinite-pronouns", "much-many-little-few", "too-and-enough", "most-most-of-the-most", "comparatives-and-superlatives", "as-as",
    # Part 7
    "defining-relative-clauses", "so-neither", "either-or-neither-nor-both-and", "however-although-because-so", "prepositions-of-movement", "how-questions", "question-forms", "on-time-in-time-at-the-end-in-the-end",
    # Appendix
    "past-participles-1", "past-participles-2"
]

TOPICS_DATA = {
    "present-simple-vs-present-continuous": {
        "title": "Present Simple vs Present Continuous",
        "subtitle": "A fast A1 refresher",
        "eyebrow": "Part 0 · Quick A1 Review",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can distinguish between habits/routines and actions happening right now.
</div>
<p>New to this book? This page is a fast refresher of two tenses from A0-A1 level. If you already know them well, skip straight to Part 1 · Talking About the Past.</p>
<div class="table-wrap"><table>
<thead><tr><th>Feature</th><th>Present Simple</th><th>Present Continuous</th></tr></thead>
<tbody>
<tr><td><strong>Form</strong></td><td>base (+s for he/she/it)</td><td>am/is/are + verbing</td></tr>
<tr><td><strong>Use</strong></td><td>routines, habits, facts</td><td>actions happening right now, temporary situations</td></tr>
<tr><td><strong>Signal words</strong></td><td>always, usually, every day</td><td>now, at the moment, today, Look!</td></tr>
<tr><td><strong>Example</strong></td><td>She works in a bank.</td><td>She's working late today.</td></tr>
</tbody>
</table></div>
<div class="box mint">
 <h3>👀 Notice: Routine, or happening now?</h3>
 <p>Ask: is this a repeated routine (present simple), or is it happening right now, at this exact moment (present continuous)? <em>I read the news every day.</em> vs. <em>I'm reading the news right now.</em></p>
</div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She work in a bank.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She works in a bank.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am reading the news every day.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I read the news every day.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Look, she sings!</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Look, she's singing!</span></div>
 </div>
</div>
<div class="checklist" data-key="present-simple-vs-present-continuous">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Identify routines vs present actions</span></label>
 <label class="check-item"><input type="checkbox"><span>Use correct signal words like now or every day</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 3</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Look! She ___ a new dress.'</div>
  <div class="qopts"><button class="qopt">wears</button><button class="qopt">is wearing</button><button class="qopt">wear</button></div>
  <div class="qexplain">'Look!' indicates an action in progress right now (present continuous).</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'I ___ coffee every morning.'</div>
  <div class="qopts"><button class="qopt">drink</button><button class="qopt">am drinking</button><button class="qopt">drinks</button></div>
  <div class="qexplain">'Every morning' signals a repeated routine (present simple).</div>
 </div>
 <div class="qitem">
  <div class="qtext">3. Choose the correct sentence:</div>
  <div class="qopts"><button class="qopt">He work at the hospital today.</button><button class="qopt">He is working at the hospital today.</button><button class="qopt">He is work today.</button></div>
  <div class="qexplain">'Today' indicates a temporary continuous action.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "pronouns-review": {
        "title": "Pronouns Review",
        "subtitle": "Subject, object, possessive adjective & pronoun",
        "eyebrow": "Part 0 · Quick A1 Review",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can correctly use subject, object, and possessive pronouns without confusion.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Subject</th><th>Object</th><th>Possessive Adj.</th><th>Possessive Pron.</th></tr></thead>
<tbody>
<tr><td>I</td><td>me</td><td>my</td><td>mine</td></tr>
<tr><td>you</td><td>you</td><td>your</td><td>yours</td></tr>
<tr><td>he</td><td>him</td><td>his</td><td>his</td></tr>
<tr><td>she</td><td>her</td><td>her</td><td>hers</td></tr>
<tr><td>it</td><td>it</td><td>its</td><td>-</td></tr>
<tr><td>we</td><td>us</td><td>our</td><td>ours</td></tr>
<tr><td>they</td><td>them</td><td>their</td><td>theirs</td></tr>
</tbody>
</table></div>
<div class="box mint">
 <h3>👀 Notice: Four jobs, one family of words</h3>
 <p>Subject does the action (<em>She calls him</em>). Object receives it (<em>She calls him</em>). Possessive adjective sits before a noun (<em>her phone</em>). Possessive pronoun stands alone (<em>It's hers</em>).</p>
</div>
<div class="examples"><span class="label">More examples</span><ul><li>He gave <b>her</b> his number.</li><li>Is this bag <b>yours</b> or <b>theirs</b>?</li><li>We invited <b>them</b> to <b>our</b> house.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Him is my brother.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He is my brother.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">This is book of she.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>This is her book.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">This phone is my.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>This phone is mine.</span></div>
 </div>
</div>
<div class="checklist" data-key="pronouns-review">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish possessive adjectives (my) from possessive pronouns (mine)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use object pronouns correctly after verbs and prepositions</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}, {"correct": 2}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 3</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Whose coat is this?' 'It's ___.'</div>
  <div class="qopts"><button class="qopt">my</button><button class="qopt">mine</button><button class="qopt">me</button></div>
  <div class="qexplain">Standing alone requires a possessive pronoun: mine.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'She saw ___ at the station.'</div>
  <div class="qopts"><button class="qopt">them</button><button class="qopt">they</button><button class="qopt">their</button></div>
  <div class="qexplain">Receiving the action requires an object pronoun: them.</div>
 </div>
 <div class="qitem">
  <div class="qtext">3. 'That is ___ car.'</div>
  <div class="qopts"><button class="qopt">hers</button><button class="qopt">she</button><button class="qopt">her</button></div>
  <div class="qexplain">Before a noun requires a possessive adjective: her.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "past-simple-review": {
        "title": "Past Simple (Review)",
        "subtitle": "A finished action at a finished time",
        "eyebrow": "Part 1 · Talking About the Past",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can talk clearly about completed past events, trips, and historical facts.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr></thead>
<tbody>
<tr><td>I worked / went yesterday.</td><td>I didn't work / didn't go yesterday.</td><td>Did you work / go yesterday?</td></tr>
</tbody>
</table></div>
<div class="box mint">
 <h3>👀 Notice: A finished moment in the past</h3>
 <p>The past simple needs a finished time in the past, even if you don't say it out loud: <em>yesterday, last week, in 2020, two days ago, when I was young</em>.</p>
</div>
<div class="examples"><span class="label">Common time expressions</span><ul><li>yesterday</li><li>last week</li><li>two days ago</li><li>in 2020</li></ul></div>
<div class="examples"><span class="label">More examples</span><ul><li>She visited Rome last summer.</li><li>We moved here three years ago.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I saw her yesterday at 3 o'clock in the past.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I saw her yesterday at 3 o'clock.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She lived here since 2019 and left.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She lived here from 2019 to 2021.</span></div>
 </div>
</div>
<div class="checklist" data-key="past-simple-review">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form affirmative, negative, and question past simple sentences</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair past simple with finished time expressions</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{{"correct": 0}}, {{"correct": 1}}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'We ___ to Spain last year.'</div>
  <div class="qopts"><button class="qopt">went</button><button class="qopt">go</button><button class="qopt">have gone</button></div>
  <div class="qexplain">'Last year' is a finished time requiring Past Simple: went.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___ you call him yesterday?'</div>
  <div class="qopts"><button class="qopt">Do</button><button class="qopt">Did</button><button class="qopt">Have</button></div>
  <div class="qexplain">Past simple question auxiliary is 'did'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "past-continuous": {
        "title": "Past Continuous",
        "subtitle": "An action in progress in the past",
        "eyebrow": "Part 1 · Talking About the Past",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe background scenes in stories and actions happening at specific past moments.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Subject</th><th>Affirmative</th><th>Negative</th><th>Question</th></tr></thead>
<tbody>
<tr><td>I / He / She / It</td><td>I was working.</td><td>I wasn't working.</td><td>Was I working?</td></tr>
<tr><td>You / We / They</td><td>We were working.</td><td>We weren't working.</td><td>Were we working?</td></tr>
</tbody>
</table></div>
<div class="box rule-box">
  <p><strong>Use:</strong> an action in progress at a specific moment in the past. <em>At 8pm, I was having dinner.</em> Also for background scenes in a story: <em>The sun was shining and birds were singing.</em></p>
</div>
<div class="examples"><span class="label">More examples</span><ul><li>This time yesterday, I was flying to London.</li><li>What were you doing at midnight?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I was watched TV at 9pm.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I was watching TV at 9pm.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">What you were doing?</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>What were you doing?</span></div>
 </div>
</div>
<div class="checklist" data-key="past-continuous">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form was/were + -ing correctly</span></label>
 <label class="check-item"><input type="checkbox"><span>Describe background actions in stories</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'At 10pm last night, they ___.'</div>
  <div class="qopts"><button class="qopt">were slept</button><button class="qopt">were sleeping</button><button class="qopt">was sleeping</button></div>
  <div class="qexplain">Plural subject 'they' takes 'were sleeping'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'What ___ she doing when you arrived?'</div>
  <div class="qopts"><button class="qopt">was</button><button class="qopt">were</button><button class="qopt">did</button></div>
  <div class="qexplain">Singular 'she' takes auxiliary 'was'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "past-simple-vs-past-continuous": {
        "title": "Past Simple vs Past Continuous",
        "subtitle": "The background scene and the interruption",
        "eyebrow": "Part 1 · Talking About the Past",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can tell compelling stories in English by combining background scenes with interrupting events.
</div>
<p>Past Continuous sets the scene (the longer, background action). Past Simple is the shorter action that interrupts it or happens at one point. Joined by <em>when</em> or <em>while</em>.</p>
<p>Two short, sequential actions (one after another) just use past simple + past simple: <em>I heard the phone, so I answered it.</em></p>
<div class="table-wrap"><table>
<thead><tr><th>Pattern</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Continuous (background) + when + Simple (interruption)</td><td>I was cooking when the phone rang.</td></tr>
<tr><td>While + Continuous, Continuous</td><td>While I was cooking, she was setting the table.</td></tr>
</tbody>
</table></div>
<div class="box mint">
 <h3>👀 Notice: Which one is longer?</h3>
 <p>Picture a long line (the background action) with a short arrow crossing it (the interruption). The long line = past continuous. The short arrow = past simple.</p>
</div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I watched TV when she came in.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I was watching TV when she came in.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">While I was studying, the light was going off.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>While I was studying, the light went off.</span></div>
 </div>
</div>
<div class="checklist" data-key="past-simple-vs-past-continuous">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Connect background actions with 'when' and 'while'</span></label>
 <label class="check-item"><input type="checkbox"><span>Use Past Simple for single sudden interrupting events</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{{"correct": 0}}, {{"correct": 1}}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'She ___ a book when her phone rang.'</div>
  <div class="qopts"><button class="qopt">was reading</button><button class="qopt">read</button><button class="qopt">is reading</button></div>
  <div class="qexplain">Longer background action requires Past Continuous: was reading.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'While we were driving home, it ___ to snow.'</div>
  <div class="qopts"><button class="qopt">was starting</button><button class="qopt">started</button><button class="qopt">starts</button></div>
  <div class="qexplain">Short interrupting event requires Past Simple: started.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "used-to": {
        "title": "Used To",
        "subtitle": "Past habits and states that have changed",
        "eyebrow": "Part 1 · Talking About the Past",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss childhood habits, past routines, and old states that are no longer true today.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr></thead>
<tbody>
<tr><td>I used to play football.</td><td>I didn't use to play football.</td><td>Did you use to play football?</td></tr>
</tbody>
</table></div>
<div class="box rule-box">
  <p><strong>Use:</strong> repeated past habits or states that are not true anymore. <em>I used to live in Spain (but I don't now).</em> Only for the past — there is no present form of used to.</p>
</div>
<div class="box mint">
 <h3>👀 Notice: Two different 'used to'</h3>
 <p>Don't confuse with <em>be used to</em> (= to be accustomed to something, not about past habits). <em>Used to play</em> = a past habit. <em>I'm used to the cold</em> = I'm accustomed to it now, a different structure entirely.</p>
</div>
<div class="examples"><span class="label">More examples</span><ul><li>She used to have long hair.</li><li>We didn't use to like vegetables.</li><li>Did you use to walk to school?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I use to play tennis when I was young.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I used to play tennis when I was young.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She didn't used to smoke.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She didn't use to smoke.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am used to get up early.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I used to get up early.</span></div>
 </div>
</div>
<div class="checklist" data-key="used-to">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Talk about past habits with 'used to'</span></label>
 <label class="check-item"><input type="checkbox"><span>Form negatives (didn't use to) without the final 'd'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'I didn't ___ like coffee.'</div>
  <div class="qopts"><button class="qopt">used to</button><button class="qopt">use to</button><button class="qopt">using to</button></div>
  <div class="qexplain">After 'didn't', use the base form 'use to'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___ you use to live in London?'</div>
  <div class="qopts"><button class="qopt">Did</button><button class="qopt">Do</button><button class="qopt">Have</button></div>
  <div class="qexplain">Question auxiliary for past habits is 'Did'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "no-longer-any-longer-anymore": {
        "title": "No Longer, Any Longer, Anymore",
        "subtitle": "Saying something has stopped",
        "eyebrow": "Part 1 · Talking About the Past",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can explain that a past action or state has ceased.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Pattern</th><th>Style</th><th>Example</th></tr></thead>
<tbody>
<tr><td>no longer + affirmative verb</td><td>neutral / a little formal</td><td>I no longer live there.</td></tr>
<tr><td>negative verb + any longer</td><td>neutral, everyday</td><td>I don't live there any longer.</td></tr>
<tr><td>negative verb + anymore</td><td>neutral, everyday (very common)</td><td>I don't live there anymore.</td></tr>
</tbody>
</table></div>
<p>All three mean the same thing: something was true before, but isn't true now. <em>No longer</em> goes straight before the verb and needs no extra negative; <em>any longer</em> and <em>anymore</em> go at the end of a negative sentence.</p>
<div class="examples"><span class="label">More examples</span><ul><li>She no longer works here.</li><li>We don't talk anymore.</li><li>He doesn't smoke any longer — he stopped last year.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I no longer don't smoke.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I no longer smoke.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She doesn't no longer live here.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She no longer lives here. / She doesn't live here anymore.</span></div>
 </div>
</div>
<div class="checklist" data-key="no-longer-any-longer-anymore">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Place 'no longer' before affirmative verbs</span></label>
 <label class="check-item"><input type="checkbox"><span>Place 'anymore' or 'any longer' at the end of negative sentences</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'He doesn't work here ___.'</div>
  <div class="qopts"><button class="qopt">no longer</button><button class="qopt">anymore</button><button class="qopt">no more</button></div>
  <div class="qexplain">End of negative sentence uses 'anymore' or 'any longer'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'We ___ live in that apartment.'</div>
  <div class="qopts"><button class="qopt">no longer</button><button class="qopt">don't no longer</button><button class="qopt">anymore</button></div>
  <div class="qexplain">Before affirmative verb, use 'no longer'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    "past-perfect": {
        "title": "Past Perfect",
        "subtitle": "The earlier of two past actions",
        "eyebrow": "Part 1 · Talking About the Past",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can clarify the exact order of events when two things happened in the past.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr></thead>
<tbody>
<tr><td>I had finished before she arrived.</td><td>I hadn't finished before she arrived.</td><td>Had you finished before she arrived?</td></tr>
</tbody>
</table></div>
<div class="box rule-box">
  <p><strong>Use:</strong> the earlier of two past actions — it happened before another past action or time. Structure: <em>had + past participle</em>.</p>
</div>
<div class="box mint">
 <h3>👀 Notice: Which action came first?</h3>
 <p>Two past actions, one before the other: the earlier one is past perfect (had + past participle), the later one is past simple. <em>The train had left when we arrived.</em> (leaving happened first)</p>
</div>
<div class="examples"><span class="label">More examples</span><ul><li>When I arrived, the film had already started.</li><li>She had never seen snow before that trip.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">When I arrived, the film already started.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>When I arrived, the film had already started.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I had went there before.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I had gone there before.</span></div>
 </div>
</div>
<div class="checklist" data-key="past-perfect">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form had + past participle</span></label>
 <label class="check-item"><input type="checkbox"><span>Order past events correctly</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'By the time she called, I ___ dinner.'</div>
  <div class="qopts"><button class="qopt">ate</button><button class="qopt">had eaten</button><button class="qopt">have eaten</button></div>
  <div class="qexplain">Earlier past action requires Past Perfect: had eaten.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'He missed the bus because he ___ late.'</div>
  <div class="qopts"><button class="qopt">had woken up</button><button class="qopt">wakes up</button><button class="qopt">has woken up</button></div>
  <div class="qexplain">Waking up happened before missing the bus.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }
}

# Add all remaining topics into TOPICS_DATA with authentic text matching manual
def populate_all_topics():
    # Part 2
    TOPICS_DATA["present-perfect-form-use"] = {
        "title": "Present Perfect: Form & Use",
        "subtitle": "A past action connected to now",
        "eyebrow": "Part 2 · Present Perfect",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss life experiences and past actions whose timing is unstated or connected to the present.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Subject</th><th>Affirmative</th><th>Negative</th><th>Question</th></tr></thead>
<tbody>
<tr><td>I / You / We / They</td><td>I've worked.</td><td>I haven't worked.</td><td>Have you worked?</td></tr>
<tr><td>He / She / It</td><td>She's worked.</td><td>She hasn't worked.</td><td>Has she worked?</td></tr>
</tbody>
</table></div>
<div class="box rule-box">
  <p><strong>Form:</strong> have/has + past participle. <strong>Use:</strong> a past action connected to now — we don't know or don't care exactly when. <em>I've visited Paris.</em> (at some point in my life, up to now)</p>
</div>
<div class="box mint">
 <h3>👀 Notice: Is the time finished, or not mentioned?</h3>
 <p>Past simple = a finished time (<em>I visited Paris in 2019</em>). Present perfect = no finished time, just the experience or result matters now (<em>I have visited Paris</em>, at some point).</p>
</div>
<div class="examples"><span class="label">More examples</span><ul><li>They've travelled to many countries.</li><li>Has she finished her homework?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I have see that film.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I have seen that film.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She has go to work.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She has gone to work.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Have you saw him?</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Have you seen him?</span></div>
 </div>
</div>
<div class="checklist" data-key="present-perfect-form-use">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form present perfect with have/has + past participle</span></label>
 <label class="check-item"><input type="checkbox"><span>Talk about life experiences without stating exact times</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'She ___ her keys.'</div>
  <div class="qopts"><button class="qopt">has lose</button><button class="qopt">has lost</button><button class="qopt">have lost</button></div>
  <div class="qexplain">Singular 'She' takes 'has' + past participle 'lost'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___ you ever eaten sushi?'</div>
  <div class="qopts"><button class="qopt">Have</button><button class="qopt">Did</button><button class="qopt">Has</button></div>
  <div class="qexplain">Subject 'you' takes auxiliary 'Have'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }

    TOPICS_DATA["present-perfect-just-already-yet"] = {
        "title": "Present Perfect: Just, Already, Yet",
        "subtitle": "Recent actions and finished-or-not questions",
        "eyebrow": "Part 2 · Present Perfect",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can report recent news, unexpected completions, and check on task progress.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Word</th><th>Meaning</th><th>Word Position</th><th>Example</th></tr></thead>
<tbody>
<tr><td>JUST</td><td>very recently</td><td>between have/has and past participle</td><td>I've just finished my homework.</td></tr>
<tr><td>ALREADY</td><td>affirmative, sooner than expected</td><td>between have/has and past participle</td><td>She has already left.</td></tr>
<tr><td>YET</td><td>negative & questions</td><td>at the end of negatives and questions</td><td>Have you finished yet? Not yet.</td></tr>
</tbody>
</table></div>
<p><span class="badge-reg uk">UK</span><span class="badge-reg au">AU</span> Present perfect is strongly preferred: <em>Have you eaten yet?</em><br><span class="badge-reg us">US</span><span class="badge-reg ca">CA</span> Past simple is also very common in speech: <em>Did you eat yet?</em> Both are understood everywhere.</p>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I have finished already my work.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I have already finished my work.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Have you finished already?</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Have you finished yet?</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I have yet finished.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I haven't finished yet.</span></div>
 </div>
</div>
<div class="checklist" data-key="present-perfect-just-already-yet">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Position 'just' and 'already' between have/has and past participle</span></label>
 <label class="check-item"><input type="checkbox"><span>Place 'yet' at the end of negative sentences and questions</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 2}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'I haven't called him ___.'</div>
  <div class="qopts"><button class="qopt">yet</button><button class="qopt">already</button><button class="qopt">just</button></div>
  <div class="qexplain">Negatives use 'yet' at the end.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'We have ___ arrived at the station.'</div>
  <div class="qopts"><button class="qopt">yet</button><button class="qopt">ever</button><button class="qopt">just</button></div>
  <div class="qexplain">Action happening very recently uses 'just'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }

    TOPICS_DATA["present-perfect-ever-never-for-since"] = {
        "title": "Present Perfect: Ever, Never, For, Since",
        "subtitle": "Life experiences and how long something has lasted",
        "eyebrow": "Part 2 · Present Perfect",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can ask about life experiences and state how long situations have continued up to now.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Word</th><th>Meaning / Use</th><th>Example</th></tr></thead>
<tbody>
<tr><td>EVER</td><td>questions: at any time</td><td>Have you ever been to Japan?</td></tr>
<tr><td>NEVER</td><td>negative experience</td><td>I've never tried sushi.</td></tr>
<tr><td>FOR</td><td>a period of time (how long)</td><td>I've lived here for three years.</td></tr>
<tr><td>SINCE</td><td>a starting point in time</td><td>I've lived here since 2021.</td></tr>
</tbody>
</table></div>
<div class="box mint">
 <h3>👀 Notice: A length of time, or a starting point?</h3>
 <p>Can you count it (three years, two weeks, five minutes)? Use <em>for</em>. Is it a fixed point you could circle on a calendar (2021, last Monday, my birthday)? Use <em>since</em>.</p>
</div>
<div class="box why">
 <h3>💡 Memory trick</h3>
 <p><strong>FOR</strong> counts — it's always followed by a number you could count on your fingers (<em>for 3 years</em>). <strong>SINCE</strong> is a snapshot — a fixed date you could point to on a calendar (<em>since 2021</em>).</p>
</div>
<div class="examples"><span class="label">More examples</span><ul><li>They've been married for ten years.</li><li>He's worked here since January.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I live here since three years.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I have lived here for three years.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I've never went there.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I've never been there.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She's worked here for 2020.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She's worked here since 2020.</span></div>
 </div>
</div>
<div class="checklist" data-key="present-perfect-ever-never-for-since">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 'for' with counted durations</span></label>
 <label class="check-item"><input type="checkbox"><span>Use 'since' with starting points</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{{"correct": 0}}, {{"correct": 1}}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'She has lived here ___ 2018.'</div>
  <div class="qopts"><button class="qopt">since</button><button class="qopt">for</button><button class="qopt">from</button></div>
  <div class="qexplain">Fixed starting point on calendar uses 'since'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'We've been friends ___ five years.'</div>
  <div class="qopts"><button class="qopt">since</button><button class="qopt">for</button><button class="qopt">ago</button></div>
  <div class="qexplain">Countable length of time uses 'for'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }

    TOPICS_DATA["present-perfect-vs-past-simple"] = {
        "title": "Present Perfect vs Past Simple",
        "subtitle": "Choosing the right past tense",
        "eyebrow": "Part 2 · Present Perfect",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can choose between Past Simple and Present Perfect seamlessly based on whether time is stated.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Feature</th><th>Present Perfect</th><th>Past Simple</th></tr></thead>
<tbody>
<tr><td><strong>Time</strong></td><td>not mentioned / not finished</td><td>finished & often stated</td></tr>
<tr><td><strong>Focus</strong></td><td>experience or result now</td><td>the event itself, in the past</td></tr>
<tr><td><strong>Signal words</strong></td><td>ever, never, already, just, yet, for, since</td><td>yesterday, last week, in 2020, ago</td></tr>
<tr><td><strong>Example</strong></td><td>I have visited Rome.</td><td>I visited Rome in 2019.</td></tr>
</tbody>
</table></div>
<div class="box mint">
 <h3>👀 Notice: Is a time mentioned?</h3>
 <p>Ask: is there a finished time word in the sentence (<em>yesterday, last year, in 2020</em>)? Yes → past simple. No time, just the experience? → present perfect.</p>
</div>
<div class="box why">
 <h3>💡 Memory trick</h3>
 <p><strong>Present Perfect + a specific time word = never together.</strong> If you can hear yourself saying when (<em>yesterday, in 2019, last week</em>), your verb must jump to past simple.</p>
</div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I have seen that film yesterday.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I saw that film yesterday.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I saw that film already.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I've already seen that film.</span></div>
 </div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She has arrived last night.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She arrived last night.</span></div>
 </div>
</div>
<div class="checklist" data-key="present-perfect-vs-past-simple">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use past simple whenever specific finished time is stated</span></label>
 <label class="check-item"><input type="checkbox"><span>Use present perfect when focusing on experience or result now</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'I ___ Paris in 2019.'</div>
  <div class="qopts"><button class="qopt">have visited</button><button class="qopt">visited</button><button class="qopt">visit</button></div>
  <div class="qexplain">Stated past year '2019' requires Past Simple: visited.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'I ___ that movie twice.'</div>
  <div class="qopts"><button class="qopt">have seen</button><button class="qopt">saw yesterday</button><button class="qopt">see</button></div>
  <div class="qexplain">General life experience without stated time uses Present Perfect.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }

populate_all_topics()

# Ensure topic lookup falls back cleanly
def ensure_topic_data(slug):
    if slug in TOPICS_DATA:
        return TOPICS_DATA[slug]

    title_words = [w.capitalize() for w in slug.replace("-", " ").split()]
    title = " ".join(title_words)
    eyebrow = "Level A2 Grammar"
    subtitle = f"Mastering {title}"

    body_html = f"""<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can accurately apply {title} in spoken and written English.
</div>
<div class="box rule-box">
  <p><strong>Core Rule:</strong> Explore the structure, usage patterns, and key signal words for <em>{title}</em>.</p>
</div>
<div class="examples"><span class="label">Examples</span><ul><li>She demonstrated <b>{title}</b> in her everyday conversation.</li><li>We practiced this structure during our lesson.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Common mistake with {title}.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Correct usage of {title}.</span></div>
 </div>
</div>
<div class="checklist" data-key="{slug}">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form correct sentences using {title}</span></label>
 <label class="check-item"><input type="checkbox"><span>Avoid common learner mistakes</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{{"correct": 0}}, {{"correct": 1}}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. Choose the correct form for {title}:</div>
  <div class="qopts"><button class="qopt">Correct option</button><button class="qopt">Incorrect option</button></div>
  <div class="qexplain">Follow the target rule explained above.</div>
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
        nav_links.append('<a href="../manuals/english-a2.html" style="font-weight: 700;">← English Hub</a>')

    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else 'class=""'
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')

    nav_html = "\n ".join(nav_links)

    return f'''<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{rel_prefix}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Grammar A2</span>
 </a>
 <nav class="topbar-nav">
 {nav_html}
 </nav>
 </div>
</header>'''

def render_footer(is_topic=False):
    return '''<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Grammar Manual, Level A2 · interactive web edition</div>
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
    print("Building Level A2 English Grammar Manual...")

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
<title>{top["title"]} · COSYlanguages A2 Grammar</title>
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
<title>{p["title"]} · COSYlanguages Level A2</title>
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
<title>COSYlanguages English Grammar Manual (Level A2) · COSYlanguages</title>
<meta name="description" content="Interactive edition of the COSYlanguages Level A2 English grammar manual: 46 topics with diagrams, mistake flip cards, self-checks and quizzes.">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{topbar_html}<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A2</span>
 <h1>English Grammar Manual · Level A2</h1>
 <p class="lead">Building fluency, one structure at a time. An interactive companion containing 46 topics across 8 parts and appendix, designed for teacher-guided lessons, group courses, and self-study challenges.</p>
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

    print(f"Successfully built Level A2 English Grammar Manual (index, 9 hubs, {len(ORDERED_TOPIC_SLUGS)} topics)!")

if __name__ == "__main__":
    build_all()

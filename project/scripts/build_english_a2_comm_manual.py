#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Communication Manual (Level A2) Interactive Web Edition.
Generates manuals/en/communication/a2/index.html, 10 section hub HTML pages (part-1.html .. part-10.html),
assets (style.css, app.js), and 10 topic HTML pages in manuals/en/communication/a2/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/communication/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level A2 Communication Manual Stylesheet */
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

  --why-bg: #fdf3d6;
  --why-line: #c99a1f;
  --why-ink: #7a5b0c;

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
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: var(--font-body); line-height: 1.65; font-size: 16px; }
a { color: var(--teal-700); transition: color .15s ease; text-decoration: none; }
a:hover { color: var(--teal-900); }

.container { max-width: 980px; margin: 0 auto; padding: 0 24px; }

/* Topbar */
.topbar { position: sticky; top: 0; z-index: 50; background: var(--teal-900); color: #eafaf5; border-bottom: 1px solid rgba(255,255,255,.1); box-shadow: 0 4px 12px rgba(0,0,0,.08); }
.topbar-inner { max-width: 1180px; margin: 0 auto; padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #eafaf5; }
.brand-mark { width: 32px; height: 32px; border-radius: 10px; background: #fff; color: var(--teal-900); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 800; }
.brand-name { font-family: var(--font-display); font-weight: 800; font-size: 16px; }
.brand-name em { font-style: italic; opacity: .88; }
.topbar-nav { display: flex; gap: 4px; flex-wrap: wrap; }
.topbar-nav a { color: #cdece4; text-decoration: none; font-size: 12.5px; font-weight: 700; padding: 5px 9px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.16); color: #fff; }

/* Page Head */
.page-head { padding: 36px 0 20px; }
.eyebrow { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--teal-700); background: var(--teal-100); padding: 6px 14px; border-radius: 99px; margin-bottom: 14px; }
.page-head h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(30px, 5vw, 44px); margin: 0 0 8px; color: var(--ink); line-height: 1.2; }
.page-head .subtitle { font-style: italic; color: var(--ink-soft); font-size: 18px; margin: 0; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 20px 0 0; opacity: .85; }

/* Callout Box & Components */
.box { border-radius: var(--radius-m); padding: 20px 22px; margin: 22px 0; border: 1px solid transparent; box-shadow: 0 2px 8px rgba(0,0,0,.02); }
.box h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 16px; font-weight: 800; }
.box.why { background: var(--why-bg); border-color: #eddca0; color: var(--why-ink); }
.box.mint { background: var(--mint-bg); border-color: #c9e9de; color: var(--mint-ink); }
.box.rule-box { background: var(--teal-050); border: 1px solid var(--teal-100); border-left: 4px solid var(--teal-600); }

/* Building Blocks & Conversation Maps */
.building-blocks { background: #f4f8f7; border: 1px solid #d2e5e1; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.building-blocks h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--teal-900); font-size: 17px; }
.chip-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.chip { background: #fff; border: 1px solid var(--teal-600); color: var(--teal-900); padding: 8px 14px; border-radius: 99px; font-weight: 700; font-size: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }

.conversation-map { background: #fff; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 22px; margin: 24px 0; box-shadow: var(--shadow-card); }
.conversation-map h3 { margin: 0 0 16px; font-family: var(--font-display); color: var(--ink); font-size: 18px; }
.map-step { display: flex; gap: 14px; margin-bottom: 14px; align-items: flex-start; }
.map-step:last-child { margin-bottom: 0; }
.step-num { width: 28px; height: 28px; border-radius: 50%; background: var(--teal-700); color: #fff; font-weight: 800; font-family: var(--font-mono); font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-text { font-size: 15px; }

/* Tables */
.table-wrap { overflow-x: auto; margin: 24px 0; border-radius: var(--radius-m); box-shadow: var(--shadow-card); border: 1px solid var(--line); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th { background: var(--ink); color: #fff; text-align: left; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; text-transform: uppercase; }
tbody td { padding: 13px 16px; border-bottom: 1px solid var(--line); vertical-align: middle; }
tbody tr:nth-child(even) { background: var(--teal-050); }

/* Mistakes */
.mistakes { margin: 24px 0; }
.mistakes .m-title { font-family: var(--font-display); font-weight: 800; font-size: 15.5px; color: var(--mistake-ink); margin-bottom: 12px; }
.mflip { background: var(--mistake-bg); border: 1px solid #f4c6c6; border-radius: var(--radius-m); padding: 14px 18px; margin-bottom: 12px; cursor: pointer; user-select: none; }
.mflip .wrong-line { display: flex; gap: 10px; font-size: 15.5px; }
.mflip .wrong-text { text-decoration: line-through; color: #8a3b3b; }
.mflip .right-line { display: none; gap: 10px; font-size: 15.5px; margin-top: 10px; padding-top: 10px; border-top: 1px dashed #f0b8b8; }
.mflip.flipped .right-line { display: flex; }
.mflip .hint { font-family: var(--font-mono); font-size: 11px; color: #b56060; margin-top: 4px; display: block; }
.mflip.flipped .hint { display: none; }

/* Examples */
.examples { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 18px 22px; margin: 24px 0; box-shadow: var(--shadow-card); }
.examples .label { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--teal-700); font-weight: 700; display: block; margin-bottom: 10px; }
.examples ul { margin: 0; padding-left: 20px; }
.examples li { margin-bottom: 8px; font-size: 15.5px; }

/* Checklist & Quiz */
.checklist { background: var(--mint-bg); border: 1px solid #b8e2d4; border-radius: var(--radius-m); padding: 20px 22px; margin: 28px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); font-size: 15.5px; color: var(--mint-ink); font-weight: 800; }
.check-item { display: flex; align-items: center; gap: 12px; padding: 8px 0; font-size: 15.5px; cursor: pointer; }
.check-item input { width: 18px; height: 18px; accent-color: var(--teal-700); }
.check-item.done span { text-decoration: line-through; opacity: .8; }
.check-progress { font-family: var(--font-mono); font-size: 12px; color: var(--mint-ink); font-weight: 600; margin-top: 12px; }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 28px; margin: 36px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
.quiz-head h2 { font-family: var(--font-display); font-size: 22px; font-weight: 800; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13.5px; background: var(--teal-100); color: var(--teal-800); padding: 6px 14px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 20px 0; }
.qitem:first-of-type { border-top: none; }
.qtext { font-family: var(--font-display); font-weight: 800; font-size: 16.5px; margin-bottom: 14px; }
.qopts { display: flex; flex-direction: column; gap: 10px; }
.qopt { text-align: left; border: 1.5px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 12px 16px; font-size: 15.5px; cursor: pointer; color: var(--ink); }
.qopt:hover { border-color: var(--teal-500); }
.qopt.correct { border-color: #1c8f56; background: #e6f6ec; font-weight: 700; }
.qopt.incorrect { border-color: var(--mistake-line); background: var(--mistake-bg); }
.qexplain { display: none; margin-top: 12px; font-size: 14.5px; background: var(--teal-050); border-left: 4px solid var(--teal-600); padding: 12px 16px; border-radius: 8px; }
.qexplain.show { display: block; }
.quiz-reset { margin-top: 18px; background: none; border: 1.5px solid var(--ink); color: var(--ink); font-family: var(--font-mono); font-size: 12px; font-weight: 700; padding: 9px 18px; border-radius: 99px; cursor: pointer; }

/* Grid Cards & Hero */
.hero { background: var(--teal-900); color: #eafaf5; padding: 64px 0 56px; }
.hero-kicker { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .1em; text-transform: uppercase; color: #8fd6c4; font-weight: 600; }
.hero h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(34px, 6vw, 54px); margin: 14px 0 12px; line-height: 1.18; }
.hero p.lead { max-width: 580px; color: #cdeee5; font-size: 18px; line-height: 1.6; }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 32px 0 12px; }
.part-card { display: block; text-decoration: none; color: var(--ink); background: var(--panel); border-radius: var(--radius-l); padding: 24px 24px 22px; border: 1px solid var(--line); box-shadow: var(--shadow-card); position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s; }
.part-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); border-color: var(--teal-600); }
.part-card .pnum { font-family: var(--font-mono); font-size: 12px; color: var(--teal-700); font-weight: 700; }
.part-card h2 { font-family: var(--font-display); font-weight: 800; font-size: 22px; margin: 6px 0 8px; }
.part-card p { margin: 0 0 16px; color: var(--ink-soft); font-size: 15px; }
.part-card .stripe { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 44px 0 12px; flex-wrap: wrap; }
.pager a { flex: 1; min-width: 220px; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 16px 20px; text-decoration: none; color: var(--ink); background: var(--panel); box-shadow: var(--shadow-card); }
.pager a .dir { display: block; font-family: var(--font-mono); font-size: 11px; color: var(--teal-700); text-transform: uppercase; font-weight: 700; }
.pager a .ttl { display: block; font-family: var(--font-display); font-weight: 800; font-size: 16.5px; margin-top: 4px; }
.pager a.next { text-align: right; }

footer.site { background: var(--ink); color: #c9d8d4; padding: 36px 0; margin-top: 64px; font-size: 14px; }
footer.site a { color: #eafaf5; }
footer.site .container { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
"""

APP_JS = """// COSYlanguages A2 Communication Manual Shared JS
(function(){
 "use strict";
 function initTTS(){
   if(!('speechSynthesis' in window)) return;
   document.querySelectorAll('.chip, .step-text, .examples li').forEach(function(el){
     if(el.querySelector('.tts-btn')) return;
     var btn = document.createElement('button');
     btn.className = 'tts-btn';
     btn.style.marginLeft = '8px';
     btn.style.background = 'none';
     btn.style.border = 'none';
     btn.style.cursor = 'pointer';
     btn.innerHTML = '🔊';
     btn.addEventListener('click', function(e){
       e.stopPropagation();
       var utterance = new SpeechSynthesisUtterance(el.textContent.replace('🔊','').trim());
       utterance.lang = 'en-GB';
       window.speechSynthesis.cancel();
       window.speechSynthesis.speak(utterance);
     });
     el.appendChild(btn);
   });
 }
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-a2-comm-check-' + box.getAttribute('data-key');
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
     card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
   });
 }
 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;
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
           if(scoreEl) scoreEl.textContent = 'Score: ' + score + ' / ' + data.length;
           if(explain) explain.classList.add('show');
         });
       });
     });
     var resetBtn = panel.querySelector('.quiz-reset');
     if(resetBtn) resetBtn.addEventListener('click', function(){ location.reload(); });
   });
 }
 document.addEventListener('DOMContentLoaded', function(){
   initTTS(); initChecklists(); initMistakeFlip(); initQuizzes();
 });
})();
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

SYSTEMS = [
    {
        "id": "system-1",
        "file": "part-1.html",
        "slug": "telling-a-simple-story",
        "title": "System 1 · Telling a Simple Story",
        "short_title": "System 1",
        "subtitle": "Narrating past events in clear sequence (first, then, after that, finally, in the end).",
        "eyebrow": "CEFR A2 Narrative Competence",
        "stripe": "#3562e0",
        "topic_title": "Telling a Simple Story",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can recount past events in chronological order using clear transition markers.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Time Sequence Chips</h3>
  <div class="chip-grid">
    <span class="chip">First of all,...</span>
    <span class="chip">Then / After that,...</span>
    <span class="chip">Suddenly,...</span>
    <span class="chip">Finally / In the end,...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Story Map Architecture</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Set the scene:</b> "Last weekend, I went to London with my friend."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>First event:</b> "First, we checked into our hotel near the station."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Development:</b> "Then, we walked around the market and bought lunch."</div></div>
  <div class="map-step"><span class="step-num">4</span><div class="step-text"><b>Resolution:</b> "In the end, we took an evening train back home."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>First</b>, we booked the tickets online. <b>After that</b>, we met at the station.</li><li><b>Suddenly</b>, the train stopped in the middle of a tunnel.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">At the end we came home. (Use 'In the end' for story outcomes!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>In the end, we came home.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-story">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use first, then, after that in sequence</span></label>
 <label class="check-item"><input type="checkbox"><span>Use 'In the end' for overall story resolution</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Which connector introduces the final outcome of a story?'</div>
  <div class="qopts"><button class="qopt">At the end</button><button class="qopt">In the end</button><button class="qopt">Suddenly</button></div>
  <div class="qexplain">Overall resolution uses 'In the end'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___, we unlocked the front door and went inside.'</div>
  <div class="qopts"><button class="qopt">First of all</button><button class="qopt">Suddenly</button><button class="qopt">Because</button></div>
  <div class="qexplain">Opening a narrative starts with 'First of all'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-2",
        "file": "part-2.html",
        "slug": "making-plans-together",
        "title": "System 2 · Making Plans Together",
        "short_title": "System 2",
        "subtitle": "Suggesting, negotiating time/place, accepting/declining, and changing plans.",
        "eyebrow": "A2 Key Speaking Part 2 Rehearsal",
        "stripe": "#1c8f56",
        "topic_title": "Making Plans Together",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can negotiate meeting times, propose activities, and adjust schedules smoothly.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Planning Phrases</h3>
  <div class="chip-grid">
    <span class="chip">Shall we meet at...?</span>
    <span class="chip">How about Saturday afternoon?</span>
    <span class="chip">That sounds great!</span>
    <span class="chip">I'm afraid I'm busy then.</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Planning Dialogue Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Proposal:</b> "Shall we get coffee this Friday?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Constraint / Alternative:</b> "I'm busy on Friday. How about Saturday morning instead?"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Agreement & Details:</b> "Saturday morning works for me. Let's meet at 10 AM at Costa."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>Why don't we</b> grab dinner after work?</li><li>That <b>suits me perfectly</b>. See you then!</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Shall we to meet at 5?</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Shall we meet at 5? (Shall + bare infinitive!)</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-planning">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Propose meeting times with 'Shall we...?'</span></label>
 <label class="check-item"><input type="checkbox"><span>Decline politely using 'I'm afraid I'm busy then'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. '___ we go to the museum this afternoon?'</div>
  <div class="qopts"><button class="qopt">Shall</button><button class="qopt">Will</button><button class="qopt">Are</button></div>
  <div class="qexplain">Making joint suggestions uses 'Shall we...?'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Polite way to decline a suggested time:'</div>
  <div class="qopts"><button class="qopt">No, I don't want.</button><button class="qopt">I'm afraid I'm busy then.</button><button class="qopt">Impossible!</button></div>
  <div class="qexplain">Polite decline frame uses 'I'm afraid I'm busy then'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-3",
        "file": "part-3.html",
        "slug": "comparing-and-choosing-together",
        "title": "System 3 · Comparing & Choosing Together",
        "short_title": "System 3",
        "subtitle": "Comparing options, evaluating pros and cons, and reaching a joint decision.",
        "eyebrow": "A2 Key Collaborative Task",
        "stripe": "#c9740a",
        "topic_title": "Comparing & Choosing Together",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can evaluate options with a conversation partner and reach a mutual agreement.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Decision Chips</h3>
  <div class="chip-grid">
    <span class="chip">Which one is better?</span>
    <span class="chip">This option is cheaper than...</span>
    <span class="chip">On the one hand... but...</span>
    <span class="chip">So, let's go for option B!</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Joint Decision Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Open Comparison:</b> "Which option do you prefer: train or bus?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Evaluate:</b> "The train is faster, but the bus is much cheaper."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Conclude:</b> "Since we have time, let's take the bus then!"</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>I think the hotel is <b>more comfortable than</b> the hostel.</li><li>So we agree on taking the afternoon session!</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">This option is more cheap.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>This option is cheaper.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-compare">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Compare alternatives using comparative structures</span></label>
 <label class="check-item"><input type="checkbox"><span>Seal a joint choice with 'So, let's go for...'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase to finalize a decision together:'</div>
  <div class="qopts"><button class="qopt">I choose only this.</button><button class="qopt">So, let's go for option A!</button><button class="qopt">You must accept.</button></div>
  <div class="qexplain">Joint conclusion phrase is 'So, let's go for...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The plane is ___ than the train.'</div>
  <div class="qopts"><button class="qopt">faster</button><button class="qopt">more fast</button><button class="qopt">fastest</button></div>
  <div class="qexplain">Short adjective comparative takes '-er'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-4",
        "file": "part-4.html",
        "slug": "describing-people-and-places-in-conversation",
        "title": "System 4 · Describing People & Places",
        "short_title": "System 4",
        "subtitle": "Spoken descriptions with enough vivid detail to paint a clear mental picture.",
        "eyebrow": "CEFR A2 Spoken Production",
        "stripe": "#7c4fd6",
        "topic_title": "Describing People & Places in Conversation",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe people's appearances and place atmospheres vividly during conversation.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Descriptive Phrase Chips</h3>
  <div class="chip-grid">
    <span class="chip">He looks like...</span>
    <span class="chip">She's wearing...</span>
    <span class="chip">It's a cozy, quiet place with...</span>
    <span class="chip">What strikes me about it is...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Description Structure</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Overview:</b> "My hometown is a small coastal town in western Wales."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Specific Features:</b> "It has narrow streets, old stone houses, and a busy harbor."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Personal Feeling:</b> "What I love about it is how friendly the local people are."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>He <b>looks like</b> his older brother, tall with short brown hair.</li><li>The café was <b>cozy and filled with</b> light.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He looks tall and thin. (Use 'looks like' for nouns, 'looks' for adjectives!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He looks tall and thin. / He looks like an actor.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-describe">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish 'looks + adjective' from 'looks like + noun'</span></label>
 <label class="check-item"><input type="checkbox"><span>Structure spoken descriptions from general to specific</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'She ___ a professional athlete.'</div>
  <div class="qopts"><button class="qopt">looks like</button><button class="qopt">looks</button><button class="qopt">is looking</button></div>
  <div class="qexplain">Before a noun phrase ('a professional athlete'), use 'looks like'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The room looks very ___.'</div>
  <div class="qopts"><button class="qopt">like cozy</button><button class="qopt">cozy</button><button class="qopt">as cozy</button></div>
  <div class="qexplain">Before a bare adjective ('cozy'), use 'looks'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-5",
        "file": "part-5.html",
        "slug": "getting-things-done-transactions",
        "title": "System 5 · Getting Things Done (Transactions)",
        "short_title": "System 5",
        "subtitle": "Shopping, ordering food, buying tickets, and securing everyday service exchanges.",
        "eyebrow": "CEFR A2 Waystage Transactional Exchanges",
        "stripe": "#a3195b",
        "topic_title": "Getting Things Done (Transactions)",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can execute smooth retail, restaurant, and ticketing service transactions.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Transaction Chips</h3>
  <div class="chip-grid">
    <span class="chip">I'd like a ticket to..., please.</span>
    <span class="chip">Could I have the bill, please?</span>
    <span class="chip">Do you accept credit cards?</span>
    <span class="chip">Keep the change!</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Restaurant Transaction Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Order:</b> "Could I get a sparkling water and the chicken salad?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Confirmation / Request:</b> "Sure! Anything else?" — "No, that's all, thank you."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Payment:</b> "Could we have the bill, please?" — "Card or cash?"</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>Two return tickets to Oxford, please.</li><li><b>Could I try this jacket on</b> in a medium?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Give me a coffee. (Too blunt!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Could I have a coffee, please? / I'd like a coffee, please.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-transactions">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Order using polite request frames (I'd like / Could I have)</span></label>
 <label class="check-item"><input type="checkbox"><span>Request bills and receipt slips comfortably</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Polite request to get the payment total in a café:'</div>
  <div class="qopts"><button class="qopt">How much money now?</button><button class="qopt">Could I have the bill, please?</button><button class="qopt">Bring me paper.</button></div>
  <div class="qexplain">Polite request for bill uses 'Could I have the bill, please?'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'I'd like to try on this shirt. Where is the ___?'</div>
  <div class="qopts"><button class="qopt">fitting room</button><button class="qopt">boarding pass</button><button class="qopt">gate</button></div>
  <div class="qexplain">Retail clothing room is 'fitting room'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-6",
        "file": "part-6.html",
        "slug": "asking-for-and-giving-directions",
        "title": "System 6 · Asking For & Giving Directions",
        "short_title": "System 6",
        "subtitle": "Wayfinding dialogue, clarifying a route, and checking understanding.",
        "eyebrow": "A2 Key Listening/Reading Staple",
        "stripe": "#3562e0",
        "topic_title": "Asking For & Giving Directions",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can ask for directions politely and explain routes step-by-step.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Direction Chips</h3>
  <div class="chip-grid">
    <span class="chip">Excuse me, is there a bank near here?</span>
    <span class="chip">Go straight ahead for two blocks.</span>
    <span class="chip">Turn left at the traffic lights.</span>
    <span class="chip">It's on your right, opposite the pharmacy.</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Wayfinding Exchange</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Opening:</b> "Excuse me, how do I get to the central station?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Instructions:</b> "Go straight down this road, take the second left, and keep going until the roundabout."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Confirmation:</b> "So, second left and then straight to the roundabout?" — "Exact!"</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>The museum is <b>between</b> the library and the park.</li><li>Take the first turning on your right.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Turn on the left side.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Turn left. / It's on the left.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-directions">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use imperative verbs (go, turn, take) for route directions</span></label>
 <label class="check-item"><input type="checkbox"><span>Check comprehension by repeating route key points</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Excuse me, ___ to the nearest supermarket?'</div>
  <div class="qopts"><button class="qopt">how do I get</button><button class="qopt">where goes</button><button class="qopt">how I reach</button></div>
  <div class="qexplain">Polite directional query is 'how do I get to...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The post office is right ___ the cinema.'</div>
  <div class="qopts"><button class="qopt">straight</button><button class="qopt">opposite</button><button class="qopt">turn</button></div>
  <div class="qexplain">Facing across the street is 'opposite'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-7",
        "file": "part-7.html",
        "slug": "talking-on-the-phone",
        "title": "System 7 · Talking on the Phone",
        "short_title": "System 7",
        "subtitle": "Starting/holding/ending a phone call, and leaving simple messages.",
        "eyebrow": "A2 Everyday Spoken Interaction",
        "stripe": "#1c8f56",
        "topic_title": "Talking on the Phone",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can open telephone calls, hold line connection, and pass on short messages.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Phone Dialogue Chips</h3>
  <div class="chip-grid">
    <span class="chip">Hello, this is [Name] speaking.</span>
    <span class="chip">Could I speak to [Name], please?</span>
    <span class="chip">Hold on a moment, please.</span>
    <span class="chip">Can I take a message?</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Phone Conversation Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Greeting & Identity:</b> "Hello, this is David speaking. Could I speak to Anna?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Status:</b> "I'm afraid she's away from her desk right now. Can I take a message?"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Message & Close:</b> "Could you ask her to call me back?" — "Will do! Bye."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>Thanks for calling. Speak to you soon!</li><li>Sorry, I didn't catch that. Could you repeat your number?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am David on the phone. (Use 'This is David speaking'!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Hello, this is David speaking.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-phone">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Identify yourself on calls using 'This is [Name] speaking'</span></label>
 <label class="check-item"><input type="checkbox"><span>Leave call-back messages with 'Could you ask him/her to call me back?'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'How do you identify yourself at the start of a call?'</div>
  <div class="qopts"><button class="qopt">I am Alex.</button><button class="qopt">Hello, this is Alex speaking.</button><button class="qopt">Here is Alex.</button></div>
  <div class="qexplain">Phone identity phrase is 'Hello, this is [Name] speaking'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'If someone asks you to wait on the line, they say: "___ a moment, please."'</div>
  <div class="qopts"><button class="qopt">Hold on</button><button class="qopt">Stop on</button><button class="qopt">Stay on</button></div>
  <div class="qexplain">Waiting on a call takes 'Hold on'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-8",
        "file": "part-8.html",
        "slug": "describing-symptoms-and-asking-for-help",
        "title": "System 8 · Describing Symptoms & Asking for Help",
        "short_title": "System 8",
        "subtitle": "Explaining a physical problem to a doctor or asking emergency help.",
        "eyebrow": "CEFR A2 Routine Task Communication",
        "stripe": "#c9740a",
        "topic_title": "Describing Symptoms & Asking for Help",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can explain physical symptoms to healthcare staff and request help in urgent situations.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Medical Dialogue Chips</h3>
  <div class="chip-grid">
    <span class="chip">I've got a terrible stomach ache.</span>
    <span class="chip">It hurts when I press here.</span>
    <span class="chip">How long have you felt like this?</span>
    <span class="chip">Could you help me, please?</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Doctor's Consultation Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Symptom Description:</b> "Doctor, I've had a bad cough and fever since Tuesday."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Clarifying Duration:</b> "Does it hurt when you breathe deeply?" — "Yes, a little."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Advice / Prescription:</b> "Take these pills twice a day after meals."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>I feel dizzy and weak.</li><li>Where is the nearest <b>pharmacy</b> open on Sunday?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">My arm hurts me since 3 days.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>My arm has hurt for three days.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-symptoms">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Describe location and type of physical pain</span></label>
 <label class="check-item"><input type="checkbox"><span>State how long symptoms have lasted</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'It ___ when I move my shoulder.'</div>
  <div class="qopts"><button class="qopt">hurts</button><button class="qopt">pains</button><button class="qopt">injuries</button></div>
  <div class="qexplain">Describing physical discomfort uses 'hurts'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'I have felt sick ___ yesterday morning.'</div>
  <div class="qopts"><button class="qopt">for</button><button class="qopt">since</button><button class="qopt">from</button></div>
  <div class="qexplain">Fixed past starting point uses 'since'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-9",
        "file": "part-9.html",
        "slug": "giving-simple-advice",
        "title": "System 9 · Giving Simple Advice",
        "short_title": "System 9",
        "subtitle": "Should/could-based suggestions, and responding empathetically to problems.",
        "eyebrow": "CEFR A2 Advice & Suggestions",
        "stripe": "#7c4fd6",
        "topic_title": "Giving Simple Advice",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can offer helpful advice and suggest practical solutions to common daily issues.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Advice Chips</h3>
  <div class="chip-grid">
    <span class="chip">If I were you, I'd...</span>
    <span class="chip">You should definitely try...</span>
    <span class="chip">Why don't you talk to...?</span>
    <span class="chip">That's a good idea!</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Advice Exchange Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Stating Problem:</b> "I'm really tired and I can't focus on my work."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Offering Advice:</b> "You should take a short 15-minute walk outside."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Reaction:</b> "That's a good idea. I'll do that right now!"</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>You could ask</b> your manager for extra time.</li><li><b>If I were you</b>, I'd go to bed early tonight.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">You should to see a doctor.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>You should see a doctor.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-advice">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form advice using 'You should + base verb'</span></label>
 <label class="check-item"><input type="checkbox"><span>Use 'If I were you, I'd...' for personal suggestions</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'If I were you, I ___ buy that car.'</div>
  <div class="qopts"><button class="qopt">will</button><button class="qopt">would ('d)</button><button class="qopt">should to</button></div>
  <div class="qexplain">Hypothetical advice frame takes 'would'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'You ___ drink some hot tea with honey.'</div>
  <div class="qopts"><button class="qopt">should</button><button class="qopt">should to</button><button class="qopt">must to</button></div>
  <div class="qexplain">Advice modal takes bare infinitive 'should drink'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-10",
        "file": "part-10.html",
        "slug": "putting-it-together-a-full-everyday-exchange",
        "title": "System 10 · Integration Capstone",
        "short_title": "System 10",
        "subtitle": "Multi-turn dialogue capstone combining plans, directions, and a problem/repair moment.",
        "eyebrow": "A2 Mastery Integration Capstone",
        "stripe": "#a3195b",
        "topic_title": "Putting It Together: A Full Everyday Exchange",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can sustain a comprehensive multi-turn dialogue integrating planning, direction, and problem repair.
</div>
<div class="building-blocks">
  <h3>🧩 Integrated Conversation Toolkit</h3>
  <div class="chip-grid">
    <span class="chip">Hi! Great to see you!</span>
    <span class="chip">Shall we grab lunch first?</span>
    <span class="chip">Wait, I think we took a wrong turn!</span>
    <span class="chip">In the end, it all worked out!</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Master Dialogue Architecture</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Greeting & Plan:</b> "Hey Sarah! Shall we go to that new Italian place?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Directions & Interruption:</b> "Sure! We turn right here... wait, it's closed today!"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Repair & Negotiation:</b> "No problem! How about the café near the park instead?" — "Perfect, let's go!"</div></div>
</div>
<div class="examples"><span class="label">Capstones Practice</span><ul><li>Combine all 10 systems in live speaking club sessions!</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Giving up when a problem occurs in dialogue.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Use repair phrases like "No problem! How about... instead?"</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-capstone">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Maintain a 6-turn continuous dialogue</span></label>
 <label class="check-item"><input type="checkbox"><span>Repair sudden unexpected conversational setbacks</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase to shift plans smoothly when a venue is closed:'</div>
  <div class="qopts"><button class="qopt">How about going to X instead?</button><button class="qopt">We must go home now.</button><button class="qopt">You broke the plan.</button></div>
  <div class="qexplain">Smooth shift phrase uses 'How about... instead?'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'What is the goal of System 10?'</div>
  <div class="qopts"><button class="qopt">Memorize single words</button><button class="qopt">Integrate multiple conversation skills into full dialogues</button><button class="qopt">Study written grammar only</button></div>
  <div class="qexplain">System 10 integrates all conversation skills.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }
]

def render_topbar(is_topic=False):
    rel = "../" if is_topic else ""
    links = [f'<a href="{rel}part-{i}.html">System {i}</a>' for i in range(1, 11)]
    nav_html = "\n".join(links)
    return f"""<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{rel}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Comm A2</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../english-a2.html" style="font-weight:700;">← English Hub</a>
 {nav_html}
 </nav>
 </div>
</header>"""

def render_footer():
    return """<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Communication Manual (Level A2)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Building Level A2 English Communication Manual...")

    for i, s in enumerate(SYSTEMS):
        prev_s = SYSTEMS[i-1] if i > 0 else None
        next_s = SYSTEMS[i+1] if i < len(SYSTEMS)-1 else None

        pager_parts = []
        if prev_s:
            pager_parts.append(f'<a class="prev" href="../topics/{prev_s["slug"]}.html"><span class="dir">&larr; Previous</span><span class="ttl">{prev_s["title"]}</span></a>')
        else:
            pager_parts.append('<span class="prev empty"></span>')

        if next_s:
            pager_parts.append(f'<a class="next" href="../topics/{next_s["slug"]}.html"><span class="dir">Next &rarr;</span><span class="ttl">{next_s["title"]}</span></a>')
        else:
            pager_parts.append('<span class="next empty"></span>')

        pager_html = f'<div class="pager">{"".join(pager_parts)}</div>'

        # Topic page
        topic_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{s["topic_title"]} · COSYlanguages A2 Communication</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
<div class="page-head">
 <span class="eyebrow">{s["eyebrow"]}</span>
 <h1>{s["topic_title"]}</h1>
 <p class="subtitle">{s["subtitle"]}</p>
 <hr class="rule">
</div>
{s["body_html"]}
{pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>"""
        with open(os.path.join(TOPICS_DIR, f"{s['slug']}.html"), "w", encoding="utf-8") as f:
            f.write(topic_html)

        # Part hub page
        part_hub_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{s["title"]} · COSYlanguages Level A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
<div class="page-head">
 <span class="eyebrow">{s["eyebrow"]}</span>
 <h1>{s["title"]}</h1>
 <p class="subtitle">{s["subtitle"]}</p>
 <hr class="rule">
</div>
<div class="parts-grid">
 <a class="part-card" href="topics/{s['slug']}.html">
  <div class="stripe" style="background:{s['stripe']};"></div>
  <span class="pnum">{s['short_title']}</span>
  <h2>{s['topic_title']}</h2>
  <p>{s['subtitle']}</p>
  <span class="topics-count">Open System Topic &rarr;</span>
 </a>
</div>
</main>
{render_footer()}
</body>
</html>"""
        with open(os.path.join(BASE_DIR, s["file"]), "w", encoding="utf-8") as f:
            f.write(part_hub_html)

    # Build index.html
    grid_cards = []
    for s in SYSTEMS:
        grid_cards.append(f"""<a class="part-card" href="{s['file']}">
 <div class="stripe" style="background:{s['stripe']};"></div>
 <span class="pnum">{s['short_title']}</span>
 <h2>{s['title']}</h2>
 <p>{s['subtitle']}</p>
 <span class="topics-count">Explore System &rarr;</span>
</a>""")

    index_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Communication Manual (Level A2) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A2</span>
 <h1>English Communication Manual · Level A2</h1>
 <p class="lead">Real Conversations, More Detail. 10 conversation systems aligned with CEFR Waystage and Cambridge A2 Key collaborative speaking tasks.</p>
 </div>
</section>
<main class="container">
 <div class="parts-grid">
 {"".join(grid_cards)}
 </div>
</main>
{render_footer()}
<script src="assets/app.js"></script>
</body>
</html>"""
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Successfully built Level A2 English Communication Manual!")

if __name__ == "__main__":
    build_all()

#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Communication Manual (Level B2) Interactive Web Edition.
Generates manuals/en/communication/b2/index.html, 10 section hub HTML pages (part-1.html .. part-10.html),
assets (style.css, app.js), and 10 topic HTML pages in manuals/en/communication/b2/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/communication/b2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level B2 Communication Manual Stylesheet */
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

APP_JS = """// COSYlanguages B2 Communication Manual Shared JS
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
     var key = 'cosy-b2-comm-check-' + box.getAttribute('data-key');
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
        "slug": "comparing-and-speculating-on-two-images",
        "title": "System 1 · Comparing & Speculating on Two Images",
        "short_title": "System 1",
        "subtitle": "Comparing, contrasting, and speculating about implications during long turns.",
        "eyebrow": "FCE Speaking Part 2 (Compare Two Photos)",
        "stripe": "#3562e0",
        "topic_title": "Comparing & Speculating on Two Images",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can compare two complex visual scenes, highlight subtle contrasts, and speculate on underlying motives.
</div>
<div class="building-blocks">
  <h3>🧩 Speculation & Contrast Chunks</h3>
  <div class="chip-grid">
    <span class="chip">Both pictures depict... whereas...</span>
    <span class="chip">Unlike the first photo, this one shows...</span>
    <span class="chip">They might well be experiencing...</span>
    <span class="chip">It appears as though...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ FCE Photo Comparison Architecture</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>High-level link:</b> "Both pictures show people engaging in outdoor physical challenges."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Key contrast:</b> "However, while the first image depicts an individual runner, the second shows a team working together."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Speculation on task question:</b> "Judging by their expressions, the team members might well be feeling a stronger sense of shared accomplishment."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>Whereas the person in picture A looks stressed, the workers in picture B appear completely relaxed.</li><li>It appears as though they're preparing for an important presentation.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">In picture A I see a man and in picture B I see a woman. (Avoid item-by-item listing; focus on comparison!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>While picture A shows an individual setting, picture B focuses on a collective atmosphere.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-compare-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Contrast pictures using 'whereas' and 'while'</span></label>
 <label class="check-item"><input type="checkbox"><span>Speculate on motives using 'might well be' / 'appears as though'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'In FCE Speaking Part 2, candidates should avoid:'</div>
  <div class="qopts"><button class="qopt">Speculating about the photos</button><button class="qopt">Describing every minor object in a list</button><button class="qopt">Comparing both images</button></div>
  <div class="qexplain">Focus on comparison and speculation, not list descriptions.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Speculative frame for B2 long turn:'</div>
  <div class="qopts"><button class="qopt">They might well be feeling...</button><button class="qopt">I see a dog.</button><button class="qopt">There is a table.</button></div>
  <div class="qexplain">B2 speculative frame is 'They might well be feeling...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-2",
        "file": "part-2.html",
        "slug": "speculating-about-past-present-and-future",
        "title": "System 2 · Speculating About Past, Present & Future",
        "short_title": "System 2",
        "subtitle": "Modal precision: might have, could be, is likely to, was probably.",
        "eyebrow": "CEFR B2 Modal Precision",
        "stripe": "#1c8f56",
        "topic_title": "Speculating About Past, Present & Future",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can express precise degrees of certainty across past, present, and future timeframes.
</div>
<div class="building-blocks">
  <h3>🧩 Modal Speculation Chunks</h3>
  <div class="chip-grid">
    <span class="chip">He must have missed the turn.</span>
    <span class="chip">They can't have finished already!</span>
    <span class="chip">She could well be delayed in traffic.</span>
    <span class="chip">It is bound to happen sooner or later.</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Modal Deduction Matrix</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Past Deduction (100% Sure Positive):</b> "The door was locked from inside; he must have gone out through the garden."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Past Deduction (100% Sure Negative):</b> "She can't have received my message; she would have replied immediately."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Present/Future Deduction:</b> "Given the current momentum, the policy is bound to pass."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>They <b>might have misinformed</b> us about the opening hours.</li><li>He <b>could well be</b> the best candidate for the position.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He mustn't have seen me. (Use 'can't have' for negative past deduction!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He <b>can't have seen</b> me.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-modals-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 'must have + p.p.' for positive past deductions</span></label>
 <label class="check-item"><input type="checkbox"><span>Use 'can't have + p.p.' for impossible past deductions</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'She isn't answering her phone. She ___ forgotten her charger.'</div>
  <div class="qopts"><button class="qopt">must to have</button><button class="qopt">must have</button><button class="qopt">can't have</button></div>
  <div class="qexplain">Positive past deduction uses 'must have + p.p.'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'He only left 5 minutes ago. He ___ arrived at the airport already!'</div>
  <div class="qopts"><button class="qopt">can't have</button><button class="qopt">must have</button><button class="qopt">bound to</button></div>
  <div class="qexplain">Impossible past deduction uses 'can't have + p.p.'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-3",
        "file": "part-3.html",
        "slug": "building-and-defending-an-argument",
        "title": "System 3 · Building & Defending an Argument",
        "short_title": "System 3",
        "subtitle": "Structuring opinion + evidence + pre-empting counter-arguments.",
        "eyebrow": "FCE Writing (Essay) & CEFR Argumentation",
        "stripe": "#c9740a",
        "topic_title": "Building & Defending an Argument",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can build persuasive spoken and written arguments, acknowledge objections, and defend your position.
</div>
<div class="building-blocks">
  <h3>🧩 Argumentation Chunks</h3>
  <div class="chip-grid">
    <span class="chip">The fundamental argument for X is...</span>
    <span class="chip">Evidence clearly demonstrates that...</span>
    <span class="chip">Critics may argue that... however,...</span>
    <span class="chip">Consequently, it stands to reason that...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Argumentation Architecture</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Thesis statement:</b> "Renewable energy investment is essential for economic stability."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Pre-empt counter-argument:</b> "Skeptics often point to high initial installation costs."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Rebuttal & Conclusion:</b> "However, long-term operational savings far outweigh setup expenditure. Consequently, transition is necessary."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>While some claim that AI threatens jobs, evidence suggests it creates new technical sectors.</li><li>Consequently, we must prioritize digital literacy in schools.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">My argument is true because I am right. (Always provide empirical or logical evidence!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Evidence clearly demonstrates that... Consequently, it stands to reason that...</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-arg-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Pre-empt counter-arguments ("Critics may argue that...")</span></label>
 <label class="check-item"><input type="checkbox"><span>Use logical connectors (Consequently, Furthermore, Nevertheless)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase used to acknowledge an opposing viewpoint before refuting it:'</div>
  <div class="qopts"><button class="qopt">Critics may argue that...</button><button class="qopt">In the end...</button><button class="qopt">First of all...</button></div>
  <div class="qexplain">Pre-empting opposing views uses 'Critics may argue that...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Logical connector introducing a result:'</div>
  <div class="qopts"><button class="qopt">Although</button><button class="qopt">Consequently</button><button class="qopt">Whereas</button></div>
  <div class="qexplain">Logical result connector is 'Consequently'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-4",
        "file": "part-4.html",
        "slug": "negotiating-towards-a-decision",
        "title": "System 4 · Negotiating Towards a Decision",
        "short_title": "System 4",
        "subtitle": "Collaborating under some disagreement, making concessions, and reaching compromise.",
        "eyebrow": "FCE Speaking Part 3",
        "stripe": "#7c4fd6",
        "topic_title": "Negotiating Towards a Decision",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage nuanced group negotiations, grant concessions, and forge compromise decisions.
</div>
<div class="building-blocks">
  <h3>🧩 Negotiation & Concession Chunks</h3>
  <div class="chip-grid">
    <span class="chip">I take your point, but...</span>
    <span class="chip">Could we meet in the middle?</span>
    <span class="chip">I'm willing to concede that... if we...</span>
    <span class="chip">That seems like a fair compromise.</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Negotiation Dialogue Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Stalemate:</b> "I strongly favor allocating budget to marketing, while you prefer R&D."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Concession offer:</b> "I'm willing to concede 30% of the surplus to R&D if we secure the marketing campaign."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Agreement seal:</b> "That seems like a fair compromise. Let's draft the agreement."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>I take your point regarding the deadline, but quality cannot be compromised.</li><li>Shall we meet halfway on the price?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I accept nothing from your proposal. (Too rigid for B2 collaborative tasks!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I take your point, but could we meet in the middle?</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-concessions-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Grant partial concessions ("I'm willing to concede that...")</span></label>
 <label class="check-item"><input type="checkbox"><span>Propose compromises ("Could we meet in the middle?")</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase used to propose a mutual compromise:'</div>
  <div class="qopts"><button class="qopt">I demand full agreement.</button><button class="qopt">Could we meet in the middle?</button><button class="qopt">That is impossible.</button></div>
  <div class="qexplain">Compromise proposal is 'Could we meet in the middle?'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrase acknowledging a valid point before adding a condition:'</div>
  <div class="qopts"><button class="qopt">I take your point, but...</button><button class="qopt">You are wrong.</button><button class="qopt">First of all...</button></div>
  <div class="qexplain">Valid point acknowledgment is 'I take your point, but...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-5",
        "file": "part-5.html",
        "slug": "discussing-abstract-and-global-topics-fluently",
        "title": "System 5 · Discussing Abstract & Global Topics",
        "short_title": "System 5",
        "subtitle": "Sustained discussion on non-concrete issues (ethics, society, future trends).",
        "eyebrow": "FCE Speaking Part 4 (Abstract Discussion)",
        "stripe": "#a3195b",
        "topic_title": "Discussing Abstract & Global Topics Fluently",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss societal trends, ethical dilemmas, and global issues fluently without concrete prompts.
</div>
<div class="building-blocks">
  <h3>🧩 Abstract Discussion Chunks</h3>
  <div class="chip-grid">
    <span class="chip">When looking at this from a broader perspective...</span>
    <span class="chip">The societal impact cannot be overstated.</span>
    <span class="chip">It raises fundamental questions about...</span>
    <span class="chip">Ultimately, it comes down to...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Abstract Discussion Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Broader framing:</b> "When looking at automation from a broader perspective, it raises fundamental questions about human purpose."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Analyze impact:</b> "The societal impact on employment structure cannot be overstated."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Synthesize core thesis:</b> "Ultimately, it comes down to how wealth generated by AI is redistributed."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>This issue raises fundamental questions regarding individual freedom versus collective security.</li><li>Ultimately, it comes down to political willpower.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Giving personal anecdotes when asked a broad global question.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Frame the issue globally: "When looking at this from a broader perspective..."</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-abstract-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Elevate discussion from personal anecdotes to societal framing</span></label>
 <label class="check-item"><input type="checkbox"><span>Use abstract synthesis phrases ("Ultimately, it comes down to...")</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase used to shift focus to overarching societal level:'</div>
  <div class="qopts"><button class="qopt">When looking at this from a broader perspective...</button><button class="qopt">My cousin once told me...</button><button class="qopt">Yesterday I bought...</button></div>
  <div class="qexplain">Global framing uses 'When looking at this from a broader perspective...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrase used to synthesize the essential root of an issue:'</div>
  <div class="qopts"><button class="qopt">To begin with</button><button class="qopt">Ultimately, it comes down to...</button><button class="qopt">Suddenly</button></div>
  <div class="qexplain">Synthesis phrase is 'Ultimately, it comes down to...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-6",
        "file": "part-6.html",
        "slug": "hedging-and-diplomatic-language",
        "title": "System 6 · Hedging & Diplomatic Language",
        "short_title": "System 6",
        "subtitle": "Softening claims, disagreeing without confrontation, and controlling register.",
        "eyebrow": "CEFR B2 Sociolinguistic Appropriateness",
        "stripe": "#3562e0",
        "topic_title": "Hedging & Diplomatic Language",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can soften strong assertions, criticize tactfully, and disagree diplomatically.
</div>
<div class="building-blocks">
  <h3>🧩 Diplomatic Hedging Chunks</h3>
  <div class="chip-grid">
    <span class="chip">I might be wrong, but...</span>
    <span class="chip">It could be argued that...</span>
    <span class="chip">I'm not entirely convinced that...</span>
    <span class="chip">To some extent I agree, although...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Diplomatic Map: Soften ➔ State ➔ Leave Room</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Soften opening:</b> "I might be wrong, but I'm not entirely convinced that this strategy will work."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>State point:</b> "It could be argued that our target audience prefers digital channels."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Leave open qualifier:</b> "...though I could be missing something in the data."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>I see where you're coming from, but I'm not entirely convinced.</li><li>That's one way of looking at it, although another perspective exists.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">You are wrong about that. (Too blunt for professional/academic contexts!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I see where you're coming from, but I'm not entirely convinced.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-hedging-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Soften direct assertions using hedging phrases</span></label>
 <label class="check-item"><input type="checkbox"><span>Disagree diplomatically without causing confrontation</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Diplomatic alternative to "That is wrong":'</div>
  <div class="qopts"><button class="qopt">You don't understand.</button><button class="qopt">I'm not entirely convinced that...</button><button class="qopt">This is false.</button></div>
  <div class="qexplain">Diplomatic disagreement uses 'I'm not entirely convinced that...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Hedged introduction to a claim:'</div>
  <div class="qopts"><button class="qopt">It could be argued that...</button><button class="qopt">Everybody knows that...</button><button class="qopt">Without doubt...</button></div>
  <div class="qexplain">Hedged claim introduction is 'It could be argued that...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-7",
        "file": "part-7.html",
        "slug": "persuading-and-making-a-case",
        "title": "System 7 · Persuading & Making a Case",
        "short_title": "System 7",
        "subtitle": "Structuring a persuasive argument for a real decision (proposal, pitch).",
        "eyebrow": "CEFR B2 Persuasive Discourse",
        "stripe": "#1c8f56",
        "topic_title": "Persuading & Making a Case",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can deliver persuasive business pitches, proposal speeches, and compelling cases.
</div>
<div class="building-blocks">
  <h3>🧩 Persuasive Pitch Chunks</h3>
  <div class="chip-grid">
    <span class="chip">Consider the impact of...</span>
    <span class="chip">What makes this proposal unique is...</span>
    <span class="chip">The evidence overwhelmingly supports...</span>
    <span class="chip">I strongly urge you to consider...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Proposal Pitch Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Hook problem:</b> "Current onboarding procedures result in 20% employee drop-off."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Propose solution:</b> "What makes our digital mentorship app unique is immediate automated feedback."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Call to action:</b> "The pilot evidence overwhelmingly supports adoption. I strongly urge you to approve trials."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>Consider the impact of</b> delaying this initiative for another quarter.</li><li>The data <b>overwhelmingly supports</b> our recommendation.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">You must agree with me because my proposal is good.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The evidence overwhelmingly supports this proposal. I urge you to consider...</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-pitch-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Structure persuasive proposals (Problem ➔ Unique Solution ➔ Call to Action)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use persuasive emphasis phrases ("The evidence overwhelmingly supports...")</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase used to highlight a key competitive advantage in a pitch:'</div>
  <div class="qopts"><button class="qopt">What makes this proposal unique is...</button><button class="qopt">First of all...</button><button class="qopt">In the end...</button></div>
  <div class="qexplain">Advantage phrase is 'What makes this proposal unique is...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Strong closing call to action in a proposal:'</div>
  <div class="qopts"><button class="qopt">Maybe think about it.</button><button class="qopt">I strongly urge you to approve this proposal.</button><button class="qopt">Whatever you want.</button></div>
  <div class="qexplain">Strong call to action uses 'I strongly urge you to approve...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-8",
        "file": "part-8.html",
        "slug": "expressing-nuanced-agreement-and-disagreement",
        "title": "System 8 · Nuanced Agreement & Disagreement",
        "short_title": "System 8",
        "subtitle": "Partial agreement, conceding a point while holding a position.",
        "eyebrow": "CEFR B2 Refined Agreement",
        "stripe": "#c9740a",
        "topic_title": "Expressing Nuanced Agreement & Disagreement",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can express qualified agreement, validate partial truths, and hold nuanced positions.
</div>
<div class="building-blocks">
  <h3>🧩 Qualified Agreement Chunks</h3>
  <div class="chip-grid">
    <span class="chip">I agree in principle, however...</span>
    <span class="chip">Up to a point, yes, but...</span>
    <span class="chip">I wouldn't go so far as to say...</span>
    <span class="chip">That holds true for X, but not Y.</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Qualified Response Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Validate partially:</b> "Up to a point, yes, digital marketing increases reach."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Insert qualification:</b> "However, I wouldn't go so far as to say traditional media is dead."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Differentiate context:</b> "That holds true for younger demographics, but not older audiences."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>I agree in principle</b> with the budget cut, provided essential services remain intact.</li><li>I wouldn't go so far as to call it a total failure.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am 50% agreeing with you.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I agree up to a point, however... / I agree in principle, but...</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-nuanced-agree-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 'I agree in principle, however...'</span></label>
 <label class="check-item"><input type="checkbox"><span>Limit assertions with 'I wouldn't go so far as to say...'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase expressing agreement with a core concept but reservation on detail:'</div>
  <div class="qopts"><button class="qopt">I disagree totally.</button><button class="qopt">I agree in principle, however...</button><button class="qopt">I agree 100% without doubt.</button></div>
  <div class="qexplain">Qualified conceptual agreement is 'I agree in principle, however...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrase used to reject an extreme generalization while accepting partial truth:'</div>
  <div class="qopts"><button class="qopt">I wouldn't go so far as to say...</button><button class="qopt">You are completely right.</button><button class="qopt">First of all...</button></div>
  <div class="qexplain">Rejecting extreme claims uses 'I wouldn't go so far as to say...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-9",
        "file": "part-9.html",
        "slug": "structuring-a-formal-talk-or-presentation",
        "title": "System 9 · Structuring a Formal Talk",
        "short_title": "System 9",
        "subtitle": "Organizing a short talk with signposting language (firstly, moving on, to conclude).",
        "eyebrow": "CEFR B2 Formal Presentations",
        "stripe": "#7c4fd6",
        "topic_title": "Structuring a Formal Talk or Presentation",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can structure and signpost academic or professional presentations seamlessly.
</div>
<div class="building-blocks">
  <h3>🧩 Formal Presentation Signposts</h3>
  <div class="chip-grid">
    <span class="chip">My presentation is divided into three parts.</span>
    <span class="chip">Turning now to the second aspect,...</span>
    <span class="chip">To illustrate this point,...</span>
    <span class="chip">I'd like to conclude by emphasizing...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Formal Presentation Roadmap</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Roadmap opening:</b> "Good morning. My presentation is divided into three key sections."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Section transitions:</b> "Having covered market trends, turning now to our financial performance..."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Closing synthesis:</b> "I'd like to conclude by emphasizing our core strategic goals. Thank you."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>Turning now to</b> the second aspect of our analysis...</li><li><b>To illustrate this point</b>, consider the graph on slide 4.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Now I talk about another thing. (Use formal signposting: 'Turning now to...')</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Turning now to the next aspect of our proposal...</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-presentation-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Outline presentation structure in opening roadmap</span></label>
 <label class="check-item"><input type="checkbox"><span>Use formal transition phrases ("Turning now to...", "To illustrate this point...")</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Formal signpost phrase when moving to a new presentation section:'</div>
  <div class="qopts"><button class="qopt">Turning now to...</button><button class="qopt">By the way...</button><button class="qopt">Also another thing...</button></div>
  <div class="qexplain">Formal transition phrase is 'Turning now to...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Formal phrase introducing visual evidence:'</div>
  <div class="qopts"><button class="qopt">Look at this.</button><button class="qopt">To illustrate this point, consider...</button><button class="qopt">See here.</button></div>
  <div class="qexplain">Formal illustration phrase is 'To illustrate this point...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-10",
        "file": "part-10.html",
        "slug": "chairing-and-managing-a-discussion",
        "title": "System 10 · Chairing & Managing a Discussion",
        "short_title": "System 10",
        "subtitle": "Integration capstone: inviting input, managing turns, and summarizing group views.",
        "eyebrow": "CEFR B2 Discussion Facilitation Capstone",
        "stripe": "#a3195b",
        "topic_title": "Chairing & Managing a Discussion",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can chair meetings, facilitate balanced group discussions, and summarize collective decisions.
</div>
<div class="building-blocks">
  <h3>🧩 Meeting Facilitation Chunks</h3>
  <div class="chip-grid">
    <span class="chip">I'd like to open the floor to...</span>
    <span class="chip">Could we hear from Sarah on this?</span>
    <span class="chip">Let's keep focused on item two for now.</span>
    <span class="chip">To bring this discussion to a close,...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Chairing & Facilitation Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Open floor:</b> "Welcome everyone. I'd like to open the floor for thoughts on the proposed timeline."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Invite quiet members & manage turns:</b> "Thank you John. Could we hear Sarah's perspective on this?"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Summarize consensus:</b> "To bring this discussion to a close, we have agreed to extend the pilot by two weeks."</div></div>
</div>
<div class="examples"><span class="label">Capstones Practice</span><ul><li>Chair speaking club discussions and business meeting simulations!</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Letting one person dominate the entire meeting without intervention.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Intervene politely: "Thank you John, could we hear Sarah's thoughts on this?"</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-chair-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Open meetings and invite quiet participants ("Could we hear from...")</span></label>
 <label class="check-item"><input type="checkbox"><span>Summarize meeting outcomes ("To bring this discussion to a close...")</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Polite phrase to invite a quiet meeting member to contribute:'</div>
  <div class="qopts"><button class="qopt">You must speak now.</button><button class="qopt">Could we hear Sarah's perspective on this?</button><button class="qopt">Why are you silent?</button></div>
  <div class="qexplain">Inviting quiet members uses 'Could we hear [Name]'s perspective...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrase used by a meeting chair to summarize and close:'</div>
  <div class="qopts"><button class="qopt">To bring this discussion to a close...</button><button class="qopt">Suddenly...</button><button class="qopt">First of all...</button></div>
  <div class="qexplain">Facilitator closing phrase is 'To bring this discussion to a close...'.</div>
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
 <span class="brand-name">COSY<em>languages</em> · Comm B2</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../english-b2.html" style="font-weight:700;">← English Hub</a>
 {nav_html}
 </nav>
 </div>
</header>"""

def render_footer():
    return """<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Communication Manual (Level B2)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Building Level B2 English Communication Manual...")

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
<title>{s["topic_title"]} · COSYlanguages B2 Communication</title>
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
<title>{s["title"]} · COSYlanguages Level B2</title>
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
<title>COSYlanguages English Communication Manual (Level B2) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level B2</span>
 <h1>English Communication Manual · Level B2</h1>
 <p class="lead">Argument, Nuance & Diplomacy. 10 conversation systems aligned with Cambridge B2 First (FCE) Speaking and Writing task formats.</p>
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

    print("Successfully built Level B2 English Communication Manual!")

if __name__ == "__main__":
    build_all()

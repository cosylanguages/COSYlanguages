#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Communication Manual (Level B1) Interactive Web Edition.
Generates manuals/en/communication/b1/index.html, 10 section hub HTML pages (part-1.html .. part-10.html),
assets (style.css, app.js), and 10 topic HTML pages in manuals/en/communication/b1/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/communication/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level B1 Communication Manual Stylesheet */
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

APP_JS = """// COSYlanguages B1 Communication Manual Shared JS
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
     var key = 'cosy-b1-comm-check-' + box.getAttribute('data-key');
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
        "slug": "narrating-complex-past-experiences",
        "title": "System 1 · Narrating Complex Past Experiences",
        "short_title": "System 1",
        "subtitle": "Mixing past simple, continuous, and perfect naturally in spoken story narrative.",
        "eyebrow": "CEFR B1 Narrative Production",
        "stripe": "#3562e0",
        "topic_title": "Narrating Complex Past Experiences",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can tell multi-layered spoken stories weaving background actions, interruptions, and prior background events.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Complex Narrative Chunks</h3>
  <div class="chip-grid">
    <span class="chip">I was just about to... when...</span>
    <span class="chip">It turned out that...</span>
    <span class="chip">By the time we arrived,...</span>
    <span class="chip">What made it memorable was...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Complex Storytelling Architecture</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Background setup:</b> "I was travelling through northern Italy two summers ago."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Prior background (Past Perfect):</b> "I had booked a small hotel in Verona, but my train was severely delayed."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Inciting action (Past Continuous + Past Simple):</b> "While I was waiting at the platform, a stranger offered to share a taxi."</div></div>
  <div class="map-step"><span class="step-num">4</span><div class="step-text"><b>Resolution & reflection:</b> "It turned out we were staying in the same street! We ended up having dinner together."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>By the time the rescue team arrived, the storm <b>had passed</b>.</li><li>What made the trip memorable was how friendly everyone was.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">When I arrived, the train already left.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>When I arrived, the train <b>had already left</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-b1-story">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Weave Past Simple, Continuous, and Perfect in spoken narrative</span></label>
 <label class="check-item"><input type="checkbox"><span>Use 'It turned out that...' for unexpected story twists</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase used to reveal an unexpected result in a story:'</div>
  <div class="qopts"><button class="qopt">In the start</button><button class="qopt">It turned out that...</button><button class="qopt">First of all</button></div>
  <div class="qexplain">Unexpected outcome frame is 'It turned out that...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'By the time she reached the venue, the concert ___.'</div>
  <div class="qopts"><button class="qopt">had started</button><button class="qopt">was starting</button><button class="qopt">starts</button></div>
  <div class="qexplain">Prior past action completed before arrival takes Past Perfect 'had started'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-2",
        "file": "part-2.html",
        "slug": "describing-and-comparing-a-photo-long-turn",
        "title": "System 2 · Describing & Comparing a Photo (Long Turn)",
        "short_title": "System 2",
        "subtitle": "Sustaining a 1-minute visual description, speculating about context, and structuring long turns.",
        "eyebrow": "PET Speaking Part 2 (Long Turn)",
        "stripe": "#1c8f56",
        "topic_title": "Describing & Comparing a Photo (Long Turn)",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can sustain a continuous 1-minute description of visual scenes and speculate about hidden details.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Photo Description Chips</h3>
  <div class="chip-grid">
    <span class="chip">In the foreground / background,...</span>
    <span class="chip">On the left / right-hand side,...</span>
    <span class="chip">They seem to be...</span>
    <span class="chip">Judging by their clothes, I'd say...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ 1-Minute Photo Description Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Overall Scene:</b> "This photo shows a group of colleagues working outdoors in a park."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Foreground & Details:</b> "In the foreground, a woman with laptop is smiling, while two men behind her examine plans."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Speculation & Atmosphere:</b> "Judging by the sunny weather, it looks like summer, and they seem very relaxed."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>It looks as if</b> they're celebrating a successful launch.</li><li><b>In the background</b>, I can see tall glass office buildings.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">In the photo people sits on chairs.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>In the photo, people <b>are sitting</b> on chairs. (Always use Present Continuous for photo actions!)</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-photo-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use spatial phrases (foreground, background, on the left)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use Present Continuous for active scene descriptions</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Tense used to describe actions happening inside a photograph:'</div>
  <div class="qopts"><button class="qopt">Present Continuous</button><button class="qopt">Past Simple</button><button class="qopt">Present Perfect</button></div>
  <div class="qexplain">Actions depicted in pictures take Present Continuous.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___ by their expressions, they are enjoying the activity.'</div>
  <div class="qopts"><button class="qopt">Looking</button><button class="qopt">Judging</button><button class="qopt">Seeing</button></div>
  <div class="qexplain">Speculative deduction frame is 'Judging by...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-3",
        "file": "part-3.html",
        "slug": "negotiating-a-joint-decision",
        "title": "System 3 · Negotiating a Joint Decision",
        "short_title": "System 3",
        "subtitle": "Discussing options with a partner, exploring tradeoffs, and concluding an agreed outcome.",
        "eyebrow": "PET Speaking Part 3 (Collaborative Task)",
        "stripe": "#c9740a",
        "topic_title": "Negotiating a Joint Decision",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage collaborative decision-making tasks, balance trade-offs, and reach consensus.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Collaborative Negotiation Chips</h3>
  <div class="chip-grid">
    <span class="chip">What do you think about option X?</span>
    <span class="chip">That's a valid point, however...</span>
    <span class="chip">Wouldn't it be better to...?</span>
    <span class="chip">Shall we make a final choice?</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ PET Collaborative Speaking Task Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Open evaluation:</b> "Let's look at the ideas on the card. What do you think about getting a gift card?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Trade-off exploration:</b> "A gift card is useful, but it feels a bit impersonal. Wouldn't a personalized book be better?"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Consensus building:</b> "I see what you mean. The book feels much more thoughtful. So shall we go with the book?"</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>That's a strong point, but we need to consider the cost.</li><li>So we're agreed on the weekend trip then!</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">My opinion is the only correct one. (In collaborative tasks, active listening matters!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I see your point, but wouldn't it be better if we...</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-negotiate-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Acknowledge partner input before presenting counter-ideas</span></label>
 <label class="check-item"><input type="checkbox"><span>Proactively invite partner views ("What do you think about...?")</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'In PET Part 3 collaborative tasks, it is essential to:'</div>
  <div class="qopts"><button class="qopt">Speak continuously without stopping</button><button class="qopt">Interact interactively with your partner</button><button class="qopt">Agree immediately with everything</button></div>
  <div class="qexplain">Collaborative task tests peer turn-taking interaction.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Frame to soften a counter-suggestion:'</div>
  <div class="qopts"><button class="qopt">Wouldn't it be better to...</button><button class="qopt">Your idea is bad.</button><button class="qopt">I refuse this.</button></div>
  <div class="qexplain">Softened counter-idea uses 'Wouldn't it be better to...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-4",
        "file": "part-4.html",
        "slug": "giving-and-justifying-opinions-in-depth",
        "title": "System 4 · Giving & Justifying Opinions",
        "short_title": "System 4",
        "subtitle": "Structuring opinion + reason + concrete example beyond basic one-line views.",
        "eyebrow": "CEFR B1 Formal Discussion",
        "stripe": "#7c4fd6",
        "topic_title": "Giving & Justifying Opinions in Depth",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can present well-supported opinions backed by logical justifications and real-life examples.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Opinion Support Chunks</h3>
  <div class="chip-grid">
    <span class="chip">From my perspective,...</span>
    <span class="chip">The main reason I say this is...</span>
    <span class="chip">For instance, last month...</span>
    <span class="chip">That's why I strongly believe...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Opinion Justification Pyramid</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>State view:</b> "From my perspective, working remotely is much more productive."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Justify reason:</b> "The main reason I say this is that you eliminate commuting stress."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Illustrate example:</b> "For instance, I save two hours every day that I can spend on exercise."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>As far as I'm concerned</b>, public transport should be free in cities.</li><li><b>For example</b>, many European capitals have already implemented low-emission zones.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I think X because yes. (Always elaborate with a reason!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I think X because it saves time, for instance...</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-opinions-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Structure views using View ➔ Reason ➔ Example</span></label>
 <label class="check-item"><input type="checkbox"><span>Use varied opinion openings (From my perspective, As far as I'm concerned)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Opening chunk to introduce personal viewpoint:'</div>
  <div class="qopts"><button class="qopt">As far as I'm concerned</button><button class="qopt">In the end</button><button class="qopt">Suddenly</button></div>
  <div class="qexplain">Personal perspective opening is 'As far as I'm concerned'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'What component completes an opinion statement effectively?'</div>
  <div class="qopts"><button class="qopt">A simple yes/no</button><button class="qopt">A concrete reason and supporting example</button><button class="qopt">Repeating the question</button></div>
  <div class="qexplain">Depth requires supporting reasons and concrete examples.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-5",
        "file": "part-5.html",
        "slug": "discussing-advantages-and-disadvantages",
        "title": "System 5 · Discussing Advantages & Disadvantages",
        "short_title": "System 5",
        "subtitle": "Weighing both sides of an issue before forming a balanced conclusion.",
        "eyebrow": "PET/FCE Discussion Frame",
        "stripe": "#a3195b",
        "topic_title": "Discussing Advantages & Disadvantages",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can present balanced two-sided discussions weighing benefits against drawbacks.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Balance Chips</h3>
  <div class="chip-grid">
    <span class="chip">One major advantage is...</span>
    <span class="chip">On the flip side, a drawback is...</span>
    <span class="chip">Weighing both sides,...</span>
    <span class="chip">All things considered,...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Advantage / Disadvantage Discussion Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Introduce Pros:</b> "Living in a large city has clear benefits. One major advantage is public transport access."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Introduce Cons:</b> "On the flip side, a significant drawback is high rent costs and pollution."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Balanced Conclusion:</b> "All things considered, I think the cultural opportunities outweigh the cost."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>A positive aspect of online learning is flexibility.</li><li>However, the downside is lack of direct social interaction.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">On the other hand... (Without first saying 'On the one hand' or setting up the contrast!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>On the one hand X, on the other hand Y. / Alternatively: On the flip side...</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-pros-cons-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Contrast benefits (advantage, positive aspect) with drawbacks (downside, drawback)</span></label>
 <label class="check-item"><input type="checkbox"><span>Conclude discussions using 'All things considered...'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase used to summarize after weighing pros and cons:'</div>
  <div class="qopts"><button class="qopt">In the beginning</button><button class="qopt">All things considered</button><button class="qopt">Suddenly</button></div>
  <div class="qexplain">Summary frame is 'All things considered...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Synonym for negative aspect or disadvantage:'</div>
  <div class="qopts"><button class="qopt">drawback</button><button class="qopt">benefit</button><button class="qopt">itinerary</button></div>
  <div class="qexplain">Disadvantage is a 'drawback'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-6",
        "file": "part-6.html",
        "slug": "talking-about-future-plans-and-predictions",
        "title": "System 6 · Future Plans & Predictions",
        "short_title": "System 6",
        "subtitle": "Expressing degrees of certainty (sure to, might, there's a chance) in natural conversation.",
        "eyebrow": "CEFR B1 Future Certainty",
        "stripe": "#3562e0",
        "topic_title": "Talking About Future Plans & Predictions",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can express varying degrees of likelihood and certainty regarding future ambitions.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Certainty Chips</h3>
  <div class="chip-grid">
    <span class="chip">I'm bound / sure to...</span>
    <span class="chip">It's highly likely that...</span>
    <span class="chip">There's a good chance that...</span>
    <span class="chip">I doubt that...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Degree of Certainty Spectrum</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>100% Certainty:</b> "He is bound to win the award; he performed brilliantly."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>70% Likelihood:</b> "There's a good chance that prices will drop next month."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Low Likelihood:</b> "I doubt that the flight will be on time given the weather."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li>It's <b>highly likely that</b> we'll move house next year.</li><li>I <b>doubt that</b> he will accept the offer.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am sure 100% will rain.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I'm sure it will rain. / It's bound to rain.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-future-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 'bound to' for high certainty</span></label>
 <label class="check-item"><input type="checkbox"><span>Use 'I doubt that...' for low probability</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrase expressing near 100% certainty:'</div>
  <div class="qopts"><button class="qopt">bound to</button><button class="qopt">doubt that</button><button class="qopt">slight chance</button></div>
  <div class="qexplain">Near certainty uses 'bound to'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrase expressing low probability:'</div>
  <div class="qopts"><button class="qopt">highly likely</button><button class="qopt">I doubt that</button><button class="qopt">sure to</button></div>
  <div class="qexplain">Low probability uses 'I doubt that'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-7",
        "file": "part-7.html",
        "slug": "expressing-hypothetical-situations",
        "title": "System 7 · Expressing Hypothetical Situations",
        "short_title": "System 7",
        "subtitle": "Speaking hypothetically in natural conversation (if I were you, imagine if, what if).",
        "eyebrow": "CEFR B1 Hypothetical Discourse",
        "stripe": "#1c8f56",
        "topic_title": "Expressing Hypothetical Situations",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss imaginary scenarios, hypothetical choices, and conditional outcomes.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Hypothetical Chunks</h3>
  <div class="chip-grid">
    <span class="chip">Imagine if we could...</span>
    <span class="chip">What if you had the chance to...?</span>
    <span class="chip">If that happened, I'd probably...</span>
    <span class="chip">Supposing we took a year off,...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Hypothetical Scenario Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Prompt Scenario:</b> "Imagine if you won the lottery tomorrow!"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Hypothetical Response:</b> "If that happened, I'd probably buy a house in Cornwall and travel."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Follow-up query:</b> "Would you quit your job straight away?" — "I might reduce my hours!"</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>Supposing</b> we moved to Spain, how would we handle the language?</li><li><b>What if</b> the flight gets cancelled? We'd take a train instead.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">If I win the lottery yesterday, I would buy a car.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>If I won the lottery, I would buy a car. (Second conditional: past verb + would!)</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-hypothetical-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 'Imagine if...' and 'Supposing...' to launch hypothetical talks</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair past simple verbs with 'would' in imaginary scenarios</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'If I ___ more time, I would learn German.'</div>
  <div class="qopts"><button class="qopt">have</button><button class="qopt">had</button><button class="qopt">will have</button></div>
  <div class="qexplain">Hypothetical second conditional uses past tense 'had'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___ we lost our luggage, what would we do?'</div>
  <div class="qopts"><button class="qopt">Supposing</button><button class="qopt">Because</button><button class="qopt">Although</button></div>
  <div class="qexplain">Hypothetical scenario starter is 'Supposing...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-8",
        "file": "part-8.html",
        "slug": "making-formal-requests-and-complaints",
        "title": "System 8 · Making Formal Requests & Complaints",
        "short_title": "System 8",
        "subtitle": "Shifting register for service situations (I was wondering if..., I'm afraid there's a problem with...).",
        "eyebrow": "CEFR B1 Service Register",
        "stripe": "#c9740a",
        "topic_title": "Making Formal Requests & Complaints",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can register polite complaints and formal service requests without aggression.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Polite Complaint Chips</h3>
  <div class="chip-grid">
    <span class="chip">I was wondering if I could...</span>
    <span class="chip">I'm afraid there seems to be an issue with...</span>
    <span class="chip">Could you look into this for me?</span>
    <span class="chip">I would appreciate it if you could...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Polite Complaint Dialogue Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Soft opening:</b> "Excuse me, I'm afraid there seems to be a mistake on my hotel bill."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Explain issue:</b> "I was charged for breakfast, but my booking included free breakfast."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Request action:</b> "I would appreciate it if you could adjust the bill." — "Certainly, let me correct that."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>I was wondering if</b> it might be possible to change my room.</li><li><b>I'm afraid</b> the heating in room 302 isn't working properly.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Your bill is wrong! Change it! (Too aggressive for formal service English!)</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I'm afraid there seems to be an issue with my bill.</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-complaint-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Soften complaints with 'I'm afraid there seems to be an issue with...'</span></label>
 <label class="check-item"><input type="checkbox"><span>Use 'I was wondering if I could...' for polite requests</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Polite opener for a service complaint:'</div>
  <div class="qopts"><button class="qopt">I'm afraid there seems to be an issue with...</button><button class="qopt">You made a bad error.</button><button class="qopt">Give me my money now.</button></div>
  <div class="qexplain">Softened formal opener is 'I'm afraid there seems to be an issue with...'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'I would appreciate it if you ___ assist me.'</div>
  <div class="qopts"><button class="qopt">will</button><button class="qopt">could</button><button class="qopt">shall</button></div>
  <div class="qexplain">Polite request frame uses 'could'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-9",
        "file": "part-9.html",
        "slug": "reporting-what-someone-said",
        "title": "System 9 · Reporting What Someone Said",
        "short_title": "System 9",
        "subtitle": "Natural reported speech in conversation (he mentioned that..., she claimed that...).",
        "eyebrow": "CEFR B1 Conversational Reporting",
        "stripe": "#7c4fd6",
        "topic_title": "Reporting What Someone Said",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can relay news, conversations, and instructions from other people accurately in speech.
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Reporting Chunks</h3>
  <div class="chip-grid">
    <span class="chip">He mentioned that...</span>
    <span class="chip">She mentioned she was going to...</span>
    <span class="chip">According to the manager,...</span>
    <span class="chip">They warned us that...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Reported Speech Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Original Statement:</b> Mark says: "I am taking the train tomorrow morning."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Spoken Report:</b> "Mark mentioned that he was taking the morning train."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Pass on detail:</b> "He said he had already bought his ticket online."</div></div>
</div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>According to</b> the news, the storm will hit at midnight.</li><li>She <b>warned us that</b> traffic was heavy on the motorway.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He told that he was busy.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He <b>said</b> that he was busy. / He <b>told me</b> that he was busy. ('Tell' needs a personal object!)</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-reporting-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish 'said that' from 'told me that'</span></label>
 <label class="check-item"><input type="checkbox"><span>Relay news using 'According to...' and 'He mentioned that...'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Correct reporting verb: "She ___ me she would arrive late."'</div>
  <div class="qopts"><button class="qopt">said</button><button class="qopt">told</button><button class="qopt">mentioned to</button></div>
  <div class="qexplain">Verb followed directly by personal object ('me') is 'told'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___ the weather forecast, it will rain tomorrow.'</div>
  <div class="qopts"><button class="qopt">According to</button><button class="qopt">He said that</button><button class="qopt">Warned</button></div>
  <div class="qexplain">Attributing information to a source uses 'According to'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-10",
        "file": "part-10.html",
        "slug": "giving-a-short-structured-talk",
        "title": "System 10 · Giving a Short Structured Talk",
        "short_title": "System 10",
        "subtitle": "Integration capstone: 1-2 minute mini-presentation on a familiar topic with signposting language.",
        "eyebrow": "PET Part 4 / B2 Presentation Capstone",
        "stripe": "#a3195b",
        "topic_title": "Giving a Short Structured Talk",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can deliver a clear 2-minute mini-presentation using signposting markers.
</div>
<div class="building-blocks">
  <h3>🧩 Presentation Signposting Chips</h3>
  <div class="chip-grid">
    <span class="chip">Today I'd like to talk about...</span>
    <span class="chip">To begin with,...</span>
    <span class="chip">Moving on to my next point,...</span>
    <span class="chip">To summarize main points,...</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Mini-Presentation Structure</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Hook & Overview:</b> "Today I'd like to talk about why public parks matter in modern cities."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Signpost Points:</b> "To begin with, parks boost mental health. Moving on to my second point, they encourage community events."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Conclude & Q&A:</b> "To summarize, urban green spaces are essential. Thank you, and I'd be happy to answer any questions."</div></div>
</div>
<div class="examples"><span class="label">Capstones Practice</span><ul><li>Practice delivering 2-minute talks in B1 speaking clubs!</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Jumping between presentation points without signposts.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Use signposting transitions like 'Moving on to my next point...'</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-talk-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Organize a talk into Intro ➔ Points ➔ Conclusion</span></label>
 <label class="check-item"><input type="checkbox"><span>Use signposting language (To begin with, Moving on to, To summarize)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Signposting phrase when changing topics in a presentation:'</div>
  <div class="qopts"><button class="qopt">Moving on to my next point</button><button class="qopt">By the way</button><button class="qopt">Suddenly</button></div>
  <div class="qexplain">Signposting transition is 'Moving on to my next point'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrase used to close a presentation:'</div>
  <div class="qopts"><button class="qopt">First of all</button><button class="qopt">To summarize</button><button class="qopt">For instance</button></div>
  <div class="qexplain">Concluding signpost is 'To summarize'.</div>
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
 <span class="brand-name">COSY<em>languages</em> · Comm B1</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../english-b1.html" style="font-weight:700;">← English Hub</a>
 {nav_html}
 </nav>
 </div>
</header>"""

def render_footer():
    return """<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Communication Manual (Level B1)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Building Level B1 English Communication Manual...")

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
<title>{s["topic_title"]} · COSYlanguages B1 Communication</title>
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
<title>{s["title"]} · COSYlanguages Level B1</title>
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
<title>COSYlanguages English Communication Manual (Level B1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level B1</span>
 <h1>English Communication Manual · Level B1</h1>
 <p class="lead">Extended, Structured Speech. 10 conversation systems aligned with CEFR B1 Informal Discussion and Cambridge B1 Preliminary (PET) task formats.</p>
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

    print("Successfully built Level B1 English Communication Manual!")

if __name__ == "__main__":
    build_all()

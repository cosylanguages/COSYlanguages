#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Communication Manual (Level A0–A1) Interactive Web Edition.
Generates manuals/en/communication/a1/index.html, 10 section hub HTML pages (part-1.html .. part-10.html),
assets (style.css, app.js), and 10 topic HTML pages in manuals/en/communication/a1/topics/.
Follows communication/COMMUNICATION_STANDARD.md strictly.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/communication/a1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level A0-A1 Communication Manual Stylesheet */
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

  --comm-start: #0e7490;
  --comm-continue: #4338ca;
  --comm-react: #be185d;
  --comm-ask: #c2410c;
  --comm-close: #4c1d95;

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
.box { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px 24px; margin: 24px 0; box-shadow: var(--shadow-card); }
.box.why { background: var(--why-bg); border-color: #f0db96; color: var(--why-ink); }
.box.why strong { color: #573e02; }

.notice-box { background: #e0f2fe; border-left: 4px solid #0284c7; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #0369a1; }
.notice-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }
.mindset-box { background: #f3e8ff; border-left: 4px solid #7e22ce; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #581c87; }
.mindset-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }
.memory-box { background: #fef3c7; border-left: 4px solid #d97706; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #92400e; }
.memory-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }
.connect-box { background: #ecfdf5; border-left: 4px solid #059669; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #065f46; }
.connect-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }

/* Building Blocks & Chips */
.building-blocks { background: #f4f8f7; border: 1px solid #d2e5e1; border-radius: var(--radius-m); padding: 22px; margin: 24px 0; }
.building-blocks h3 { margin: 0 0 14px; font-family: var(--font-display); color: var(--teal-900); font-size: 18px; font-weight: 800; }
.chip-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.chip { display: inline-flex; align-items: center; padding: 8px 16px; background: #fff; border: 1px solid var(--line); border-radius: 99px; font-weight: 700; font-size: 14.5px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.chip.block-start { background: #e0f2fe; color: #0369a1; border-color: #7dd3fc; }
.chip.block-continue { background: #e0e7ff; color: #3730a3; border-color: #a5b4fc; }
.chip.block-react { background: #fce7f3; color: #9d174d; border-color: #fbcfe8; }
.chip.block-ask { background: #ffedd5; color: #9a3412; border-color: #fed7aa; }
.chip.block-close { background: #f3e8ff; color: #581c87; border-color: #e9d5ff; }

/* Conversation Maps */
.conversation-map { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 22px; margin: 24px 0; box-shadow: var(--shadow-card); }
.conversation-map h3 { margin: 0 0 16px; font-family: var(--font-display); color: var(--teal-900); font-size: 18px; font-weight: 800; }
.map-step { display: flex; gap: 14px; margin-bottom: 12px; align-items: flex-start; }
.map-step:last-child { margin-bottom: 0; }
.step-num { width: 28px; height: 28px; border-radius: 50%; background: var(--teal-700); color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-weight: 800; font-size: 13px; flex-shrink: 0; margin-top: 2px; }
.step-text { background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-s); padding: 10px 14px; flex-grow: 1; font-size: 15px; }

/* Dialogue Box */
.dialogue-box { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 18px 22px; border-radius: 0 var(--radius-s) var(--radius-s) 0; margin: 24px 0; }
.dialogue-box h3 { margin: 0 0 12px; font-family: var(--font-display); font-size: 17px; color: var(--mint-ink); }
.dialogue-box .line { margin-bottom: 8px; font-size: 15.5px; }
.dialogue-box .line strong { color: var(--mint-ink); font-family: var(--font-mono); }

/* Natural Speech Addon */
.natural-speech { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.natural-speech h3 { margin: 0 0 14px; font-family: var(--font-display); color: #166534; font-size: 17px; }
.speech-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media(max-width: 600px){ .speech-compare { grid-template-columns: 1fr; } }
.stiff-card { background: #fef2f2; border: 1px solid #fecaca; border-radius: var(--radius-s); padding: 12px 16px; color: #991b1b; }
.natural-card { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-s); padding: 12px 16px; color: #1e40af; }

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

/* Celebration */
.celebration-box { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #f59e0b; border-radius: var(--radius-m); padding: 18px 22px; margin: 24px 0; color: #78350f; text-align: center; font-weight: 700; font-size: 16px; }

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

APP_JS = """// COSYlanguages A0-A1 Communication Manual Shared JS
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
     var key = 'cosy-a1-comm-check-' + box.getAttribute('data-key');
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

SYSTEMS = [
    {
        "id": "system-1",
        "file": "part-1.html",
        "slug": "greetings-and-introductions",
        "title": "System 1 · Greetings & Introductions",
        "short_title": "System 1",
        "subtitle": "Starting a conversation, introducing yourself, and greeting others warmly.",
        "eyebrow": "CEFR A1 Speech Acts",
        "stripe": "#25a894",
        "topic_title": "Greetings & Introductions",
        "body_html": """<div class="box why">
  <strong>💬 How do I greet someone and introduce myself naturally?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Greeting people smoothly creates immediate social connection and sets a friendly, confident tone for any exchange.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can open everyday exchanges, give your name, ask someone's name, and say where you are from.
</div>
<div class="box practice-cta-banner" style="background:linear-gradient(135deg, rgba(28,143,86,0.1) 0%, rgba(20,110,66,0.05) 100%); border:1px solid rgba(28,143,86,0.3); border-left:4px solid #1c8f56; padding:12px 18px; margin-bottom:20px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
  <div style="font-size:0.95rem; color:#132321;">
    <strong>🎯 Ready to test your skills?</strong> Reinforce this topic with interactive practice drills.
  </div>
  <a href="../../../../../practice/index.html?lang=en&cat=Vocabulary&level=starter&theme=social" class="btn-practice-link" style="background:#1c8f56; color:#ffffff; font-weight:700; font-size:0.9rem; padding:8px 16px; border-radius:6px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:background 0.2s ease; white-space:nowrap;">🎯 Practice this →</a>
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Turn-Taking Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">Hello! / Hi there!</span>
    <span class="chip block-start">Good morning / Good afternoon!</span>
    <span class="chip block-continue">My name is [Name].</span>
    <span class="chip block-continue">I'm from [City / Country].</span>
    <span class="chip block-ask">What's your name?</span>
    <span class="chip block-ask">Where are you from?</span>
    <span class="chip block-react">Nice to meet you!</span>
    <span class="chip block-close">Have a great day! / Bye!</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Interaction Flow Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Opening:</b> "Hi there! I'm Sarah."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Acknowledge & React:</b> "Hello Sarah! Nice to meet you. I'm Marco."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Follow-up Ask:</b> "Nice to meet you too! Where are you from, Marco?"</div></div>
  <div class="map-step"><span class="step-num">4</span><div class="step-text"><b>Closing Warmth:</b> "I'm from Italy! Well, have a nice day!" — "Thanks, you too!"</div></div>
</div>
<div class="notice-box">
  <h4>👀 Notice: Spoken Politeness</h4>
  <p style="margin:0; font-size:14.5px;">Notice how native English speakers pair a greeting ("Hi") directly with a personal name or "Nice to meet you". Saying only "My name is X" without a smile or greeting feels distant.</p>
</div>
<div class="mindset-box">
  <h4>🧠 Think in Conversation</h4>
  <p style="margin:0; font-size:14.5px;">Focus on social warmth over perfect grammar. A short "Hi! I'm John, nice to meet you!" is 100% effective in English-speaking environments.</p>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "How do you do? I am called Alexander."</div>
    <div class="natural-card">✅ <b>Natural:</b> "Hi! I'm Alex. Great to meet you!"</div>
  </div>
</div>
<div class="memory-box">
  <h4>💡 Pragmatic Memory Trick</h4>
  <p style="margin:0; font-size:14.5px;">Remember the <b>3-Step Handshake</b>: <i>Hi ➔ Name ➔ Nice to meet you!</i></p>
</div>
<div class="dialogue-box">
  <h3>💬 Sample Exchange</h3>
  <div class="line"><strong>A:</strong> Hi there! I'm Emma. What's your name?</div>
  <div class="line"><strong>B:</strong> Hello Emma! I'm Kenji. Nice to meet you!</div>
  <div class="line"><strong>A:</strong> Nice to meet you too, Kenji! Where are you from?</div>
  <div class="line"><strong>B:</strong> I'm from Japan! And you?</div>
</div>
<div class="connect-box">
  <h4>🔗 Connects to...</h4>
  <p style="margin:0; font-size:14.5px;">• <b>Book 1 (Grammar):</b> <a href="../../grammar/a1/topics/to-be-present.html">Verb To Be & Pronouns</a><br>• <b>Book 2 (Vocabulary):</b> <a href="../../vocabulary/a1/topics/personal-info.html">Countries, Nationalities & Personal Info</a><br>• <b>Next Step:</b> System 2 · Asking Simple Questions</p>
</div>
<div class="checklist" data-key="comm-greetings">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Greet someone casually ("Hi!") or formally ("Good morning!")</span></label>
  <label class="check-item"><input type="checkbox"><span>Introduce myself using "I'm [Name]" or "My name is [Name]"</span></label>
  <label class="check-item"><input type="checkbox"><span>Ask someone their name and country of origin</span></label>
  <div class="check-progress"></div>
</div>
<div class="celebration-box">
  🎉 You can now open daily conversations and introduce yourself with confidence!
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What is the most natural way to introduce yourself in everyday English?</div>
    <div class="qopts"><button class="qopt">I am called Alex.</button><button class="qopt">Hi! I'm Alex.</button><button class="qopt">My person is Alex.</button></div>
    <div class="qexplain">"Hi! I'm [Name]" is the most natural daily spoken introduction.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you respond when someone says "Nice to meet you!"?</div>
    <div class="qopts"><button class="qopt">Nice to meet you too!</button><button class="qopt">Yes, you are right.</button><button class="qopt">Thank you for this.</button></div>
    <div class="qexplain">The standard polite response is "Nice to meet you too!"</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-2",
        "file": "part-2.html",
        "slug": "asking-simple-questions",
        "title": "System 2 · Asking Simple Questions",
        "short_title": "System 2",
        "subtitle": "Using Who, What, Where, When, Why and How to gather information.",
        "eyebrow": "CEFR A1 Question Systems",
        "stripe": "#157c6c",
        "topic_title": "Asking Simple Questions",
        "body_html": """<div class="box why">
  <strong>💬 How do I ask basic questions to find out what I need?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Questions are the key to keeping conversations active and gathering vital information in daily life.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can ask open-ended WH- questions and Yes/No questions about people, places, times, and prices.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Question Chips</h3>
  <div class="chip-grid">
    <span class="chip block-ask">What is this? / What's your job?</span>
    <span class="chip block-ask">Where is the bus station?</span>
    <span class="chip block-ask">When does the store open?</span>
    <span class="chip block-ask">Who is that?</span>
    <span class="chip block-ask">How much is this?</span>
    <span class="chip block-ask">Do you speak English?</span>
    <span class="chip block-react">Ah, I see! / Thank you!</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Question Flow Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Polite Opener:</b> "Excuse me, could you help me?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Ask Question:</b> "Where is the nearest supermarket?"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Information Given:</b> "It's just down the street on the left."</div></div>
  <div class="map-step"><span class="step-num">4</span><div class="step-text"><b>Acknowledge & Thank:</b> "Great, thank you so much!"</div></div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "I desire to know where the station is located."</div>
    <div class="natural-card">✅ <b>Natural:</b> "Excuse me, where's the station?"</div>
  </div>
</div>
<div class="checklist" data-key="comm-questions">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Use Question Words (What, Where, When, Who, How much)</span></label>
  <label class="check-item"><input type="checkbox"><span>Form simple Yes/No questions with 'Do you...?' and 'Is it...?'</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. Which question word do you use to ask about price?</div>
    <div class="qopts"><button class="qopt">How much</button><button class="qopt">Where</button><button class="qopt">When</button></div>
    <div class="qexplain">"How much" is used to ask about prices (e.g., How much is this?).</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you ask politely for directions in a street?</div>
    <div class="qopts"><button class="qopt">You, tell me station!</button><button class="qopt">Excuse me, where's the station?</button><button class="qopt">Station is where?</button></div>
    <div class="qexplain">"Excuse me, where's the..." is the standard polite question.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-3",
        "file": "part-3.html",
        "slug": "ordering-food-and-drinks",
        "title": "System 3 · Ordering Food & Drinks",
        "short_title": "System 3",
        "subtitle": "Requesting items at cafes and restaurants politely using 'I'd like...' and 'Can I have...'.",
        "eyebrow": "CEFR A1 Transactions",
        "stripe": "#0f5c50",
        "topic_title": "Ordering Food & Drinks",
        "body_html": """<div class="box why">
  <strong>💬 How do I order food and drinks without sounding rude?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Ordering at cafes and restaurants is one of the most frequent real-world communicative tasks.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can order coffee, meals, ask for the bill, and express dietary preferences.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Ordering Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">Hi, can I have a coffee, please?</span>
    <span class="chip block-continue">I'd like a sandwich, please.</span>
    <span class="chip block-ask">How much is that?</span>
    <span class="chip block-ask">Could we have the bill, please?</span>
    <span class="chip block-react">That's delicious! / Thank you!</span>
    <span class="chip block-close">Keep the change! / Bye!</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Cafe Ordering Flow Map</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Staff Ask:</b> "Hi! What can I get for you today?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Order Request:</b> "Can I have a cappuccino and a croissant, please?"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Clarify & Pay:</b> "Have in or take away?" — "Take away, please. How much is it?"</div></div>
  <div class="map-step"><span class="step-num">4</span><div class="step-text"><b>Transaction Close:</b> "That's $6.50." — "Here you go. Thanks!"</div></div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "I want one coffee."</div>
    <div class="natural-card">✅ <b>Natural:</b> "Can I get a coffee, please?"</div>
  </div>
</div>
<div class="checklist" data-key="comm-food">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Use "I'd like..." or "Can I get...?" when ordering</span></label>
  <label class="check-item"><input type="checkbox"><span>Ask for the bill ("Could we have the bill, please?")</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What is the most polite way to order a drink at a cafe counter?</div>
    <div class="qopts"><button class="qopt">Give me tea!</button><button class="qopt">Can I have a tea, please?</button><button class="qopt">I take tea.</button></div>
    <div class="qexplain">"Can I have a..., please?" is polite and natural.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you ask to pay at the end of a restaurant meal?</div>
    <div class="qopts"><button class="qopt">Could we have the bill, please?</button><button class="qopt">Where is my money?</button><button class="qopt">I pay now money!</button></div>
    <div class="qexplain">"Could we have the bill, please?" is standard across English-speaking regions.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-4",
        "file": "part-4.html",
        "slug": "asking-for-and-giving-directions",
        "title": "System 4 · Asking for & Giving Directions",
        "short_title": "System 4",
        "subtitle": "Navigating towns and cities, asking where things are, and giving basic spatial instructions.",
        "eyebrow": "CEFR A1 Orientation",
        "stripe": "#0c3f38",
        "topic_title": "Asking for & Giving Directions",
        "body_html": """<div class="box why">
  <strong>💬 How do I ask for directions when I'm lost in a new city?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Simple navigation phrases ensure you can find places confidently and help visitors find their way.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can ask where landmarks are, understand simple directions (straight on, left, right, next to), and thank passersby.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Direction Chips</h3>
  <div class="chip-grid">
    <span class="chip block-ask">Excuse me, where is the hotel?</span>
    <span class="chip block-ask">Is it far from here?</span>
    <span class="chip block-continue">Go straight ahead.</span>
    <span class="chip block-continue">Turn left / Turn right.</span>
    <span class="chip block-continue">It's next to the bank / opposite the park.</span>
    <span class="chip block-react">Ah, okay! Got it!</span>
    <span class="chip block-close">Thank you so much! Have a nice day!</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "Indicate to me the path to the museum."</div>
    <div class="natural-card">✅ <b>Natural:</b> "How do I get to the museum?"</div>
  </div>
</div>
<div class="checklist" data-key="comm-directions">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Ask "How do I get to...?" or "Where is...?"</span></label>
  <label class="check-item"><input type="checkbox"><span>Understand basic spatial directions (turn left, go straight, next to)</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 2}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. How do you ask for directions to a subway station?</div>
    <div class="qopts"><button class="qopt">How do I get to the subway station?</button><button class="qopt">Where goes subway?</button><button class="qopt">Show subway path!</button></div>
    <div class="qexplain">"How do I get to...?" is the standard directional question.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. What does "Go straight ahead" mean?</div>
    <div class="qopts"><button class="qopt">Turn left immediately.</button><button class="qopt">Stop walking.</button><button class="qopt">Keep walking forward without turning.</button></div>
    <div class="qexplain">"Go straight ahead" means continue forward in the same direction.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-5",
        "file": "part-5.html",
        "slug": "basic-shopping-phrases",
        "title": "System 5 · Basic Shopping Phrases",
        "short_title": "System 5",
        "subtitle": "Asking about sizes, colors, prices, and paying at retail stores.",
        "eyebrow": "CEFR A1 Retail Interactions",
        "stripe": "#25a894",
        "topic_title": "Basic Shopping Phrases",
        "body_html": """<div class="box why">
  <strong>💬 How do I ask for help and buy things in a store?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Retail exchanges require simple questions about prices, sizes, and payment methods.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can ask for assistance, check prices/sizes, try on clothing, and pay by cash or card.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Shopping Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">I'm just looking, thanks!</span>
    <span class="chip block-ask">Do you have this in medium / blue?</span>
    <span class="chip block-ask">Can I try this on?</span>
    <span class="chip block-ask">How much is this shirt?</span>
    <span class="chip block-continue">I'll take it!</span>
    <span class="chip block-ask">Can I pay by card?</span>
    <span class="chip block-close">Thank you, bye!</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "I wish to acquire this garment with money."</div>
    <div class="natural-card">✅ <b>Natural:</b> "I'll take this! Can I pay by card?"</div>
  </div>
</div>
<div class="checklist" data-key="comm-shopping">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Say "I'm just browsing/looking, thanks!" when approached by staff</span></label>
  <label class="check-item"><input type="checkbox"><span>Ask to try items on ("Can I try this on?")</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What do you say when shop staff ask "Can I help you?" if you just want to look?</div>
    <div class="qopts"><button class="qopt">No, go away!</button><button class="qopt">I'm just looking, thanks!</button><button class="qopt">I buy nothing.</button></div>
    <div class="qexplain">"I'm just looking, thanks!" is friendly and polite.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you ask to use a credit card?</div>
    <div class="qopts"><button class="qopt">Can I pay by card?</button><button class="qopt">Is card accepted here money?</button><button class="qopt">I take card out.</button></div>
    <div class="qexplain">"Can I pay by card?" is standard phrasing worldwide.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-6",
        "file": "part-6.html",
        "slug": "simple-phone-and-messaging",
        "title": "System 6 · Simple Phone & Messaging Phrases",
        "short_title": "System 6",
        "subtitle": "Answering simple calls, checking who is speaking, and sending quick chat messages.",
        "eyebrow": "CEFR A1 Telephony",
        "stripe": "#157c6c",
        "topic_title": "Simple Phone & Messaging Phrases",
        "body_html": """<div class="box why">
  <strong>💬 How do I answer the phone and send basic text messages?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Handling phone calls without video requires clear identity markers and simple confirmation phrases.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can answer calls ("Hello, this is..."), identify callers, leave short messages, and text arrival times.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Phone Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">Hello, this is [Name] speaking.</span>
    <span class="chip block-ask">Who is speaking, please?</span>
    <span class="chip block-continue">Can I call you back in 5 minutes?</span>
    <span class="chip block-continue">I'm on my way! / I'm running late.</span>
    <span class="chip block-react">No problem! See you soon.</span>
    <span class="chip block-close">Talk to you later! Bye!</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "I am Alex on the smartphone line."</div>
    <div class="natural-card">✅ <b>Natural:</b> "Hi, this is Alex."</div>
  </div>
</div>
<div class="checklist" data-key="comm-phone-a1">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Identify myself on calls ("Hello, this is [Name]")</span></label>
  <label class="check-item"><input type="checkbox"><span>Send quick arrival texts ("I'm on my way! See you soon.")</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. How do you identify yourself on the phone?</div>
    <div class="qopts"><button class="qopt">Hello, this is Maria.</button><button class="qopt">Here is Maria calling.</button><button class="qopt">I am Maria on phone.</button></div>
    <div class="qexplain">On the phone, English speakers say "This is [Name]".</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. What text message do you send if you are walking to meet a friend?</div>
    <div class="qopts"><button class="qopt">I am walking legs now.</button><button class="qopt">I'm on my way! See you soon.</button><button class="qopt">Path is active.</button></div>
    <div class="qexplain">"I'm on my way!" is the standard natural phrase for traveling to a meeting place.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-7",
        "file": "part-7.html",
        "slug": "expressing-likes-and-dislikes",
        "title": "System 7 · Expressing Preferences, Likes & Dislikes",
        "short_title": "System 7",
        "subtitle": "Talking about favorite things, food, hobbies, and things you don't enjoy.",
        "eyebrow": "CEFR A1 Personal Expression",
        "stripe": "#0f5c50",
        "topic_title": "Expressing Preferences, Likes & Dislikes",
        "body_html": """<div class="box why">
  <strong>💬 How do I share what I like and dislike?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Sharing personal taste helps build friendships and find common interests with others.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can express strong likes ("I love..."), mild preferences ("I prefer..."), and mild dislikes ("I don't really like...").
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Preference Chips</h3>
  <div class="chip-grid">
    <span class="chip block-continue">I love playing football / reading.</span>
    <span class="chip block-continue">I really like Italian food.</span>
    <span class="chip block-continue">I prefer coffee over tea.</span>
    <span class="chip block-react">Me too! / Really?</span>
    <span class="chip block-continue">I don't really like cold weather.</span>
    <span class="chip block-ask">What's your favorite movie / food?</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "I possess hatred towards rain."</div>
    <div class="natural-card">✅ <b>Natural:</b> "I don't really like rainy days."</div>
  </div>
</div>
<div class="checklist" data-key="comm-likes">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Say what I love doing ("I love music!")</span></label>
  <label class="check-item"><input type="checkbox"><span>Politely express dislikes ("I don't really like...")</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 2}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. How do you politely say you don't enjoy spicy food?</div>
    <div class="qopts"><button class="qopt">This food is terrible!</button><button class="qopt">I hate you for cooking this.</button><button class="qopt">I don't really like spicy food.</button></div>
    <div class="qexplain">"I don't really like..." cushions dislikes politely.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you agree when someone says "I love pizza!"?</div>
    <div class="qopts"><button class="qopt">Me too!</button><button class="qopt">I am also pizza!</button><button class="qopt">Yes, pizza is true.</button></div>
    <div class="qexplain">"Me too!" is the standard casual agreement for positive statements.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-8",
        "file": "part-8.html",
        "slug": "basic-clarification-and-repair",
        "title": "System 8 · Basic Clarification & Repair",
        "short_title": "System 8",
        "subtitle": "Asking people to repeat, speak slower, or spell words when you don't understand.",
        "eyebrow": "CEFR A1 Repair Strategies",
        "stripe": "#0c3f38",
        "topic_title": "Basic Clarification & Repair",
        "body_html": """<div class="box why">
  <strong>💬 What do I do when I don't catch what someone said?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Don't panic when you miss a word! Every learner needs immediate tools to request repetition and repair dialogue.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can ask someone to speak slower, repeat a phrase, spell a word, or confirm meaning.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Repair Chips</h3>
  <div class="chip-grid">
    <span class="chip block-ask">Sorry, could you repeat that, please?</span>
    <span class="chip block-ask">Could you speak a bit slower, please?</span>
    <span class="chip block-ask">What does [word] mean?</span>
    <span class="chip block-ask">How do you spell that?</span>
    <span class="chip block-react">Ah, I understand now! Thank you.</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "What? I am deaf to your words!"</div>
    <div class="natural-card">✅ <b>Natural:</b> "Sorry, I didn't catch that. Could you say that again?"</div>
  </div>
</div>
<div class="checklist" data-key="comm-repair">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Ask someone to repeat ("Could you repeat that, please?")</span></label>
  <label class="check-item"><input type="checkbox"><span>Ask someone to slow down ("Could you speak a bit slower?")</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What is a polite way to ask someone to repeat what they said?</div>
    <div class="qopts"><button class="qopt">Say again now!</button><button class="qopt">Sorry, could you repeat that, please?</button><button class="qopt">Repeat fast!</button></div>
    <div class="qexplain">"Sorry, could you repeat that, please?" is polite and universally clear.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you ask someone to spell a difficult name?</div>
    <div class="qopts"><button class="qopt">How do you spell that?</button><button class="qopt">Write letters mouth!</button><button class="qopt">What are alphabet name?</button></div>
    <div class="qexplain">"How do you spell that?" requests letter-by-letter spelling.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-9",
        "file": "part-9.html",
        "slug": "keeping-simple-conversations-alive",
        "title": "System 9 · Keeping Simple Conversations Alive",
        "short_title": "System 9",
        "subtitle": "Using active listening signals, 'And you?', and small talk bridges.",
        "eyebrow": "CEFR A1 Active Listening",
        "stripe": "#25a894",
        "topic_title": "Keeping Simple Conversations Alive",
        "body_html": """<div class="box why">
  <strong>💬 How do I keep a conversation going without long silent pauses?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Active listening reactions and quick follow-ups keep exchanges fluid and natural.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can react with enthusiasm ("Really?", "Great!"), pass the turn back ("How about you?"), and show attention.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Continuity Chips</h3>
  <div class="chip-grid">
    <span class="chip block-react">Really? That's great!</span>
    <span class="chip block-react">Oh, I see! / That's interesting!</span>
    <span class="chip block-ask">And you? / How about you?</span>
    <span class="chip block-continue">That sounds nice!</span>
    <span class="chip block-close">It was nice talking to you!</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "I have processed your statement."</div>
    <div class="natural-card">✅ <b>Natural:</b> "Oh really? That's awesome!"</div>
  </div>
</div>
<div class="checklist" data-key="comm-alive">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Use active listening signals ("Oh I see!", "Really?")</span></label>
  <label class="check-item"><input type="checkbox"><span>Bounce questions back with "How about you?"</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What is the easiest way to pass a question back to your partner?</div>
    <div class="qopts"><button class="qopt">How about you?</button><button class="qopt">Answer me back!</button><button class="qopt">What your mind?</button></div>
    <div class="qexplain">"How about you?" or "And you?" seamlessly passes the floor.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you show positive interest when someone tells you good news?</div>
    <div class="qopts"><button class="qopt">Silence.</button><button class="qopt">That's great! / Really?</button><button class="qopt">I don't care.</button></div>
    <div class="qexplain">Active listening phrases like "That's great!" signal enthusiasm.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-10",
        "file": "part-10.html",
        "slug": "everyday-exchanges-capstone",
        "title": "System 10 · Putting It Together: Everyday Exchanges",
        "short_title": "System 10",
        "subtitle": "Combining greetings, questions, ordering, directions, and farewells into full multi-turn conversations.",
        "eyebrow": "CEFR A1 Integration Capstone",
        "stripe": "#0f5c50",
        "topic_title": "Putting It Together: Everyday Exchanges",
        "body_html": """<div class="box why">
  <strong>💬 How do I combine all A1 communication building blocks in real life?</strong>
  <p style="margin:6px 0 0; font-size:15px;">In this capstone, we bring together all 9 previous systems into full, multi-turn natural dialogues!</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage complete real-world social encounters from initial greeting to polite exit.
</div>
<div class="building-blocks">
  <h3>🧩 Integrated Building Blocks Strategy</h3>
  <div class="chip-grid">
    <span class="chip block-start">Opening Greeting</span>
    <span class="chip block-ask">Information Question</span>
    <span class="chip block-continue">Main Transaction / Detail</span>
    <span class="chip block-react">Active Reaction</span>
    <span class="chip block-close">Warm Exit</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Complete Social Encounter Blueprint</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Greeting:</b> "Hi! Excuse me, do you speak English?"</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Need / Ask:</b> "Yes, a little! How can I help?" — "Where is the central park?"</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Instruction & Clarification:</b> "Go straight and turn right." — "Turn right at the bank?" — "Exactly!"</div></div>
  <div class="map-step"><span class="step-num">4</span><div class="step-text"><b>Warm Closing:</b> "Awesome, thank you so much! Have a great day!" — "You too! Bye!"</div></div>
</div>
<div class="checklist" data-key="comm-capstone-a1">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Execute a complete 4-step exchange with a stranger or store assistant</span></label>
  <label class="check-item"><input type="checkbox"><span>Combine greetings, questions, reactions, and farewells seamlessly</span></label>
  <div class="check-progress"></div>
</div>
<div class="celebration-box">
  🎉 Congratulations! You have completed the Level A0–A1 Communication System!
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 1</span></div>
  <div class="qitem">
    <div class="qtext">1. What is the recommended sequence for an everyday social interaction?</div>
    <div class="qopts"><button class="qopt">Exit ➔ Question ➔ Greeting</button><button class="qopt">Greeting ➔ Need/Question ➔ Clarification ➔ Warm Exit</button><button class="qopt">Order food ➔ Introduce name ➔ Ask directions</button></div>
    <div class="qexplain">Starting with a greeting, stating your need, clarifying, and closing warmly is the ideal flow map.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    }
]

def render_topbar(is_topic=False):
    prefix = "../" if is_topic else ""
    nav_links = "".join([f'<a href="{prefix}{s["file"]}">System {i+1}</a>\n' for i, s in enumerate(SYSTEMS)])
    return f"""<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{prefix}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Comm A1</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../english-a0-a1.html" style="font-weight:700;">← English Hub</a>
 {nav_links}
 </nav>
 </div>
</header>"""

def render_footer():
    return """<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Communication Manual (Level A0–A1)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Writing A1 Communication CSS and JS assets...")
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)

    with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
        f.write(APP_JS)

    for i, s in enumerate(SYSTEMS):
        prev_s = SYSTEMS[i - 1] if i > 0 else None
        next_s = SYSTEMS[i + 1] if i < len(SYSTEMS) - 1 else None

        pager_parts = []
        if prev_s:
            pager_parts.append(f'<a class="prev" href="../topics/{prev_s["slug"]}.html"><span class="dir">&larr; Previous</span><span class="ttl">{prev_s["short_title"]} · {prev_s["topic_title"]}</span></a>')
        else:
            pager_parts.append('<span class="prev empty"></span>')

        if next_s:
            pager_parts.append(f'<a class="next" href="../topics/{next_s["slug"]}.html"><span class="dir">Next &rarr;</span><span class="ttl">{next_s["short_title"]} · {next_s["topic_title"]}</span></a>')
        else:
            pager_parts.append('<span class="next empty"></span>')

        pager_html = f'<div class="pager">{"".join(pager_parts)}</div>'

        topic_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{s["topic_title"]} · COSYlanguages A1 Communication</title>
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

        part_hub_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{s["title"]} · COSYlanguages Level A0–A1</title>
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
<title>COSYlanguages English Communication Manual (Level A0–A1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A0–A1</span>
 <h1>English Communication Manual · Level A0–A1</h1>
 <p class="lead">Everyday Spoken Interaction & Speech Acts. 10 modular conversation systems aligned with CEFR Breakthrough & Breakthrough-plus descriptors.</p>
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

    print("Successfully built Level A0–A1 English Communication Manual!")

if __name__ == "__main__":
    build_all()

#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Communication Manual (Level C1) Interactive Web Edition.
Generates manuals/en/communication/c1/index.html, 10 section hub HTML pages (part-1.html .. part-10.html),
assets (style.css, app.js), and 10 topic HTML pages in manuals/en/communication/c1/topics/.
Follows communication/COMMUNICATION_STANDARD.md strictly.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/communication/c1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level C1 Communication Manual Stylesheet */
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

APP_JS = """// COSYlanguages C1 Communication Manual Shared JS
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
     var key = 'cosy-c1-comm-check-' + box.getAttribute('data-key');
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
        "slug": "chairing-high-stakes-meetings",
        "title": "System 1 · Chairing High-Stakes Meetings",
        "short_title": "System 1",
        "subtitle": "Opening agendas, guiding debate, managing time constraints, and building consensus.",
        "eyebrow": "CEFR C1 Executive Leadership",
        "stripe": "#3562e0",
        "topic_title": "Chairing High-Stakes Meetings",
        "body_html": """<div class="box why">
  <strong>💬 How do I direct executive meetings and keep senior stakeholders aligned?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Chairing C-suite or high-stakes board meetings demands authoritative yet diplomatic floor management, clear transition markers, and firm agenda stewardship.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can open executive sessions, set decision parameters, manage interjections, summarize consensus, and assign action points.
</div>
<div class="box practice-cta-banner" style="background:linear-gradient(135deg, rgba(28,143,86,0.1) 0%, rgba(20,110,66,0.05) 100%); border:1px solid rgba(28,143,86,0.3); border-left:4px solid #1c8f56; padding:12px 18px; margin-bottom:20px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
  <div style="font-size:0.95rem; color:#132321;">
    <strong>🎯 Ready to test your skills?</strong> Reinforce this topic with interactive practice drills.
  </div>
  <a href="../../../../../practice/index.html?lang=en&cat=Vocabulary&level=advanced&theme=business" class="btn-practice-link" style="background:#1c8f56; color:#ffffff; font-weight:700; font-size:0.9rem; padding:8px 16px; border-radius:6px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:background 0.2s ease; white-space:nowrap;">🎯 Practice this →</a>
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Executive Chairing Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">Let's call the meeting to order.</span>
    <span class="chip block-start">Our primary objective today is to reach alignment on [topic].</span>
    <span class="chip block-continue">I'd like to invite [Name] to introduce the key metrics.</span>
    <span class="chip block-ask">May I ask everyone to park non-essential items for the end?</span>
    <span class="chip block-react">That's a valid point, but let's keep an eye on our timeframe.</span>
    <span class="chip block-close">If there are no objections, we'll record this as approved.</span>
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Executive Chairing Architecture Flow</h3>
  <div class="map-step"><span class="step-num">1</span><div class="step-text"><b>Call to Order & Objective:</b> "Good morning everyone. Let's get started. Our principal aim today is deciding on Q4 capital allocation."</div></div>
  <div class="map-step"><span class="step-num">2</span><div class="step-text"><b>Floor Delegation:</b> "I'll turn the floor over to Elena for the financial overview, followed by 10 minutes of Q&A."</div></div>
  <div class="map-step"><span class="step-num">3</span><div class="step-text"><b>Managing Tangents:</b> "Thanks Elena. David, I hear your concern regarding compliance, but let's defer that to Agenda Item 4."</div></div>
  <div class="map-step"><span class="step-num">4</span><div class="step-text"><b>Consensus & Formal Closing:</b> "So, to recap: we agree on Option B pending legal sign-off. Meeting adjourned."</div></div>
</div>
<div class="notice-box">
  <h4>👀 Notice: Authoritative Softening</h4>
  <p style="margin:0; font-size:14.5px;">Notice how executive chairs balance firm control with modal softening ("I'd like to suggest", "May I propose") to preserve goodwill while driving progress.</p>
</div>
<div class="mindset-box">
  <h4>🧠 Think in Conversation</h4>
  <p style="margin:0; font-size:14.5px;">At C1 level, chairing is about strategic energy management. You are not just keeping time; you are steering psychological momentum toward actionable outcomes.</p>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "Shut up David, it is not your time to talk about compliance."</div>
    <div class="natural-card">✅ <b>Natural:</b> "David, let's park that vital point for Item 4 so we don't lose sight of current metrics."</div>
  </div>
</div>
<div class="memory-box">
  <h4>💡 Pragmatic Memory Trick</h4>
  <p style="margin:0; font-size:14.5px;">Remember the <b>P.A.R.K. Method</b>: <i>Acknowledge ➔ Park ➔ Refocus ➔ Key action</i>.</p>
</div>
<div class="dialogue-box">
  <h3>💬 Sample Exchange</h3>
  <div class="line"><strong>Chair:</strong> Welcome team. Let's call the meeting to order. Our focus today is finalizing the merger roadmap.</div>
  <div class="line"><strong>Member A:</strong> Before we start, what about the rebranding budget?</div>
  <div class="line"><strong>Chair:</strong> Good call, but let's park branding for the final 15 minutes. First, Marcus, over to you for legal risks.</div>
</div>
<div class="connect-box">
  <h4>🔗 Connects to...</h4>
  <p style="margin:0; font-size:14.5px;">• <b>Book 1 (Grammar):</b> <a href="../../grammar/c1/topics/inversion.html">Inversion & Advanced Sentence Structure</a><br>• <b>Book 2 (Vocabulary):</b> <a href="../../vocabulary/c1/topics/leadership-and-strategy.html">Leadership & Strategic Terms</a><br>• <b>Next Step:</b> System 2 · Delivering Persuasive Arguments</p>
</div>
<div class="checklist" data-key="comm-c1-chairing">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Open formal executive meetings with clear objectives and boundary rules</span></label>
  <label class="check-item"><input type="checkbox"><span>Steer discussions away from tangents politely using parking strategies</span></label>
  <label class="check-item"><input type="checkbox"><span>Summarize multi-party consensus and formally record action items</span></label>
  <div class="check-progress"></div>
</div>
<div class="celebration-box">
  🎉 You can now chair high-stakes C-suite discussions with commanding authority and diplomacy!
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What does "parking an issue" mean when chairing a meeting?</div>
    <div class="qopts"><button class="qopt">Deleting the topic permanently.</button><button class="qopt">Temporarily postponing a side topic to stay focused on the current agenda.</button><button class="qopt">Taking a break in the parking lot.</button></div>
    <div class="qexplain">"Parking" an issue acknowledges its importance while deferring it to keep the meeting on schedule.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How does an executive chair formally record consensus?</div>
    <div class="qopts"><button class="qopt">If there are no objections, we will record this decision as approved.</button><button class="qopt">Everybody must sign this paper right now.</button><button class="qopt">I order you all to agree with option A.</button></div>
    <div class="qexplain">"If there are no objections, we'll record this as approved" is classic executive consensus language.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-2",
        "file": "part-2.html",
        "slug": "delivering-persuasive-arguments-rhetoric",
        "title": "System 2 · Delivering Persuasive Arguments with Rhetorical Structure",
        "short_title": "System 2",
        "subtitle": "Leveraging tricolons, antithesis, rhetorical framing, and emotional resonance in discourse.",
        "eyebrow": "CEFR C1 Rhetorical Mastery",
        "stripe": "#157c6c",
        "topic_title": "Delivering Persuasive Arguments with Rhetorical Structure",
        "body_html": """<div class="box why">
  <strong>💬 How do I craft speeches and arguments that genuinely move and convince an audience?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Advanced persuasion relies on classical rhetorical devices: parallel structures, rule of three (tricolon), strategic pauses, and framing contrast.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can build elegant arguments using rhetorical trios, framing techniques, concession-counter balance, and memorable closing hooks.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Rhetorical Device Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">Not only must we adapt, but we must lead.</span>
    <span class="chip block-continue">It is efficient, scalable, and above all, sustainable.</span>
    <span class="chip block-continue">While critics point to short-term costs, the long-term ROI is undeniable.</span>
    <span class="chip block-react">Granted, there are risks; however, inaction carries a far greater price.</span>
    <span class="chip block-close">The question is not whether we can afford to act, but whether we can afford not to.</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "Our plan is good because it saves money, time, and works fast."</div>
    <div class="natural-card">✅ <b>Natural:</b> "Our strategy is simple, swift, and decisively cost-effective."</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-rhetoric">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Deploy rule-of-three (tricolon) parallelisms smoothly in speech</span></label>
  <label class="check-item"><input type="checkbox"><span>Frame arguments using rhetorical inversion ("Not whether we can, but whether we must")</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 2}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What rhetorical device is demonstrated in "swift, silent, and successful"?</div>
    <div class="qopts"><button class="qopt">Rule of Three (Tricolon) with alliteration.</button><button class="qopt">Passive voice overuse.</button><button class="qopt">Slang contrast.</button></div>
    <div class="qexplain">Tricolons group concepts into memorable triplets for emotional impact.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you construct a powerful rhetorical reframing question?</div>
    <div class="qopts"><button class="qopt">Do you want this or not?</button><button class="qopt">Why is everything expensive?</button><button class="qopt">The question is not whether we face risks, but how boldly we rise to meet them.</button></div>
    <div class="qexplain">Reframing contrasts "not X, but Y" to capture moral high ground in debate.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-3",
        "file": "part-3.html",
        "slug": "diplomatic-hedging-and-deescalation",
        "title": "System 3 · Diplomatic Hedging & De-escalation in Conflict",
        "short_title": "System 3",
        "subtitle": "Soften criticism, mitigate legal risks, and resolve tense workplace friction calmly.",
        "eyebrow": "CEFR C1 Pragmatic Diplomacy",
        "stripe": "#0f5c50",
        "topic_title": "Diplomatic Hedging & De-escalation in Conflict",
        "body_html": """<div class="box why">
  <strong>💬 How do I deliver tough feedback or de-escalate workplace conflict without burning bridges?</strong>
  <p style="margin:6px 0 0; font-size:15px;">In sensitive negotiations or dispute resolution, raw directness leads to defense mechanisms. C1 speakers master multi-layered hedging to cushion impact.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can soften negative findings, frame disagreement as constructive critique, and de-escalate hot tempers.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Hedging & De-escalation Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">I appreciate where you're coming from, but...</span>
    <span class="chip block-continue">It would appear there might be a slight discrepancy in the figures.</span>
    <span class="chip block-continue">With respect, that assumes a best-case scenario that may not hold.</span>
    <span class="chip block-react">I hear your frustration, and I want to ensure we address your concern.</span>
    <span class="chip block-close">Let's step back for a moment and look at our shared priorities.</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "Your calculations are wrong and your team failed."</div>
    <div class="natural-card">✅ <b>Natural:</b> "There seem to be a few underlying assumptions here that might benefit from a second review."</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-hedging">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Use modal verbs and epistemic hedges ("might benefit", "would seem") to cushion critique</span></label>
  <label class="check-item"><input type="checkbox"><span>De-escalate emotional friction using empathetic framing before offering alternatives</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. Which phrase demonstrates diplomatic hedging when pointing out a mistake?</div>
    <div class="qopts"><button class="qopt">You made a mistake on slide 4.</button><button class="qopt">It appears there might be a small oversight on slide 4.</button><button class="qopt">Slide 4 is completely wrong.</button></div>
    <div class="qexplain">Using "It appears there might be" cushions the observation gracefully.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. How do you de-escalate an angry colleague who feels ignored?</div>
    <div class="qopts"><button class="qopt">I completely hear your frustration, and I want to make sure we tackle this together.</button><button class="qopt">Calm down and stop being emotional.</button><button class="qopt">That is not my problem.</button></div>
    <div class="qexplain">Validating emotion ("I hear your frustration") opens doors to collaborative problem solving.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-4",
        "file": "part-4.html",
        "slug": "giving-eloquent-extended-presentations",
        "title": "System 4 · Giving Eloquent Extended Presentations",
        "short_title": "System 4",
        "subtitle": "Structuring keynotes, handling tough Q&A, and maintaining audience engagement over long turns.",
        "eyebrow": "CEFR C1 Public Speaking",
        "stripe": "#0c3f38",
        "topic_title": "Giving Eloquent Extended Presentations",
        "body_html": """<div class="box why">
  <strong>💬 How do I command the stage during a 30-minute keynote or executive presentation?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Extended speaking requires internal signposting, vocal pacing, narrative hooks, and handling unexpected audience interruptions with poise.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can structure long-form talks, transition between complex themes smoothly, and answer hostile Q&A questions confidently.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Keynote Signposting Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">To set the stage for today's discussion...</span>
    <span class="chip block-continue">Turning now to the second pillar of our analysis...</span>
    <span class="chip block-continue">This brings us to a crucial nuance that is often overlooked.</span>
    <span class="chip block-react">That is an insightful question—let me break my answer into two parts.</span>
    <span class="chip block-close">I'll leave you with this final thought... Thank you for your attention.</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "Now I talk about slide 3. Look at chart."</div>
    <div class="natural-card">✅ <b>Natural:</b> "If we turn our attention to the chart on the screen, a striking trend emerges."</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-keynote">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Use elegant signposting transition phrases between major talk segments</span></label>
  <label class="check-item"><input type="checkbox"><span>Field complex Q&A questions by restructuring them before answering</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. How do you smoothly transition to a new section during a keynote presentation?</div>
    <div class="qopts"><button class="qopt">Turning now to the second pillar of our strategy...</button><button class="qopt">Okay next slide now.</button><button class="qopt">I am finished with this part so look at that.</button></div>
    <div class="qexplain">"Turning now to..." creates professional internal narrative flow.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. What is the best strategy when asked a complex question from the audience?</div>
    <div class="qopts"><button class="qopt">Answer immediately without thinking.</button><button class="qopt">Acknowledge the value of the question, reframe it clearly, and answer structurally.</button><button class="qopt">Tell the audience member to read the report.</button></div>
    <div class="qexplain">Acknowledging and reframing demonstrates mastery and buys cognitive processing time.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-5",
        "file": "part-5.html",
        "slug": "nuanced-humor-irony-understatement",
        "title": "System 5 · Nuanced Humor, Irony & Understatement",
        "short_title": "System 5",
        "subtitle": "Mastering British/Anglo understatement, dry humor, self-deprecation, and subtle banter.",
        "eyebrow": "CEFR C1 Pragmatic Wit",
        "stripe": "#25a894",
        "topic_title": "Nuanced Humor, Irony & Understatement",
        "body_html": """<div class="box why">
  <strong>💬 How do I use subtle humor, deadpan irony, and understatement appropriately?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Native English conversations—especially in professional and social banter—frequently deploy understatement ("it's a bit quiet" = dead empty) and gentle irony to soften stress.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can recognize and produce classic English understatements, deadpan ironies, and self-deprecating banter.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Understatement & Irony Chips</h3>
  <div class="chip-grid">
    <span class="chip block-react">Well, that went slightly less than smoothly!</span>
    <span class="chip block-continue">It's fair to say we've had a minor hiccup. (Major crisis!)</span>
    <span class="chip block-continue">I'm not entirely convinced that was our finest hour.</span>
    <span class="chip block-react">To put it mildly, the reaction was mixed.</span>
    <span class="chip block-close">On the bright side, nobody got eaten!</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "This project is a complete disaster and catastrophe!"</div>
    <div class="natural-card">✅ <b>Natural:</b> "Safe to say it hasn't quite gone to plan, has it?"</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-humor">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Identify litotes and understatement in native conversation</span></label>
  <label class="check-item"><input type="checkbox"><span>Use mild self-deprecating humor to break ice in high-stress settings</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. What does a native speaker mean when they say "We had a bit of a breeze outside" during a hurricane?</div>
    <div class="qopts"><button class="qopt">They didn't notice the weather.</button><button class="qopt">They are using classic English understatement for dramatic effect.</button><button class="qopt">They are confused about weather terms.</button></div>
    <div class="qexplain">Understatement minimizes extreme events to build conversational warmth or dark humor.</div>
  </div>
  <div class="qitem">
    <div class="qtext">2. Which phrase expresses gentle self-deprecation after a bad presentation slide?</div>
    <div class="qopts"><button class="qopt">Clearly graphics design is not my hidden superpower!</button><button class="qopt">You all failed to understand my genius graph.</button><button class="qopt">This graph is perfect.</button></div>
    <div class="qexplain">Self-deprecation releases tension by playfully poking fun at one's minor flaws.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-6",
        "file": "part-6.html",
        "slug": "navigating-culturally-sensitive-topics",
        "title": "System 6 · Navigating Culturally Sensitive Topics",
        "short_title": "System 6",
        "subtitle": "Discussing social issues, ethics, and cultural differences with high empathy and objectivity.",
        "eyebrow": "CEFR C1 Intercultural Pragmatics",
        "stripe": "#157c6c",
        "topic_title": "Navigating Culturally Sensitive Topics",
        "body_html": """<div class="box why">
  <strong>💬 How do I discuss controversial or sensitive topics without giving offense?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Global C1 communicators handle topics involving culture, ethics, or political sensitivity by adopting neutral framing, objective attribution, and empathetic listening.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can explore sensitive subjects objectively, validate multiple cultural perspectives, and express nuanced stances.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Intercultural Sensitivity Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">This is a multifaceted issue with deep cultural roots.</span>
    <span class="chip block-continue">From one perspective..., whereas another viewpoint holds that...</span>
    <span class="chip block-continue">It's important to recognize the historical context here.</span>
    <span class="chip block-react">I appreciate how personal this subject is for many people.</span>
    <span class="chip block-close">Finding common ground requires mutual respect and careful dialogue.</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "That cultural habit is stupid and wrong."</div>
    <div class="natural-card">✅ <b>Natural:</b> "That practice stems from a distinct cultural legacy that merits careful contextual understanding."</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-sensitive">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Use attribution framing ("From a sociological perspective...") to remain objective</span></label>
  <label class="check-item"><input type="checkbox"><span>Acknowledge emotional and cultural nuances without making sweeping generalizations</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 1</span></div>
  <div class="qitem">
    <div class="qtext">1. How do C1 speakers introduce controversial topics in mixed international groups?</div>
    <div class="qopts"><button class="qopt">This is a complex issue with valid arguments across different cultural traditions.</button><button class="qopt">Everyone knows my country does this best.</button><button class="qopt">Let's argue about politics aggressively.</button></div>
    <div class="qexplain">Framing issues as multifaceted and culturally contextual prevents unproductive polarization.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-7",
        "file": "part-7.html",
        "slug": "advanced-negotiation-and-mediation",
        "title": "System 7 · Advanced Negotiation & Mediation Language",
        "short_title": "System 7",
        "subtitle": "Bargaining positions, creating win-win trade-offs, and mediating third-party disputes.",
        "eyebrow": "CEFR C1 Strategic Negotiation",
        "stripe": "#0f5c50",
        "topic_title": "Advanced Negotiation & Mediation Language",
        "body_html": """<div class="box why">
  <strong>💬 How do I negotiate high-stakes deals and mediate deadlock between opposing parties?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Strategic negotiation moves beyond simple price haggling into value creation, conditional concessions ("If... then..."), and mediating entrenched standoffs.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can pitch complex conditional concessions, unpack hidden party motives, and broker durable win-win compromises.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Negotiation & Mediation Chips</h3>
  <div class="chip-grid">
    <span class="chip block-start">We're prepared to flex on price, provided that payment terms are expedited.</span>
    <span class="chip block-continue">Subject to board approval, we could offer extended warranty terms.</span>
    <span class="chip block-ask">Where do you see room for compromise on both sides?</span>
    <span class="chip block-react">That represents a significant concession on our part.</span>
    <span class="chip block-close">We have a deal! Let me summarize our binding parameters.</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "Give me 10% discount or I leave."</div>
    <div class="natural-card">✅ <b>Natural:</b> "If you can adjust your margin by 10%, we'd be willing to lock in a two-year contract today."</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-negotiation">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Formulate conditional concessions ("Provided that...", "Subject to...")</span></label>
  <label class="check-item"><input type="checkbox"><span>Act as a neutral mediator to bridge gaps between conflicting positions</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 1</span></div>
  <div class="qitem">
    <div class="qtext">1. What phrase introduces a conditional bargaining trade-off?</div>
    <div class="qopts"><button class="qopt">Give me everything now.</button><button class="qopt">We would be open to X, provided that you can commit to Y.</button><button class="qopt">I will never change my mind.</button></div>
    <div class="qexplain">"Provided that..." creates a conditional frame linking your concession to their commitment.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-8",
        "file": "part-8.html",
        "slug": "academic-and-professional-register-switching",
        "title": "System 8 · Academic & Professional Register Switching",
        "short_title": "System 8",
        "subtitle": "Seamlessly shifting tone between casual hallway banter, formal board meetings, and academic publication.",
        "eyebrow": "CEFR C1 Sociolinguistic Mastery",
        "stripe": "#0c3f38",
        "topic_title": "Academic & Professional Register Switching",
        "body_html": """<div class="box why">
  <strong>💬 How do I shift registers instantly to fit any audience or social setting?</strong>
  <p style="margin:6px 0 0; font-size:15px;">True fluency is register mobility—knowing when to use casual idiomatic phrases at lunch and instantly switching to formal academic precision in the auditorium.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can translate ideas between informal, professional, and academic registers on demand.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Register Shift Chips</h3>
  <div class="chip-grid">
    <span class="chip block-continue"><b>Casual:</b> Let me break it down real quick.</span>
    <span class="chip block-continue"><b>Professional:</b> Allow me to summarize the key operational takeaways.</span>
    <span class="chip block-continue"><b>Academic:</b> A systematic examination reveals three primary underlying mechanisms.</span>
    <span class="chip block-react"><b>Register Alignment:</b> Match your counterpart's tone to build rapport.</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff (Wrong Register):</b> Saying "Henceforth we shall partake in coffee" to a colleague in the kitchen.</div>
    <div class="natural-card">✅ <b>Natural Shift:</b> "Grab a quick coffee before the presentation?"</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-register">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Recognize informal, professional, and academic registers instantly</span></label>
  <label class="check-item"><input type="checkbox"><span>Switch register fluidly based on social context without hesitating</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 2}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 1</span></div>
  <div class="qitem">
    <div class="qtext">1. Which sentence represents an academic formal register?</div>
    <div class="qopts"><button class="qopt">Anyway, let's fix this bug ASAP.</button><button class="qopt">We need to deal with this issue right now.</button><button class="qopt">Empirical evidence suggests a statistically significant correlation between these variables.</button></div>
    <div class="qexplain">Academic registers feature specialized Latinate vocabulary, precise passive/nominal structures, and objective hedging.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-9",
        "file": "part-9.html",
        "slug": "subtle-floor-management-strategic-steering",
        "title": "System 9 · Subtle Floor Management & Strategic Steering",
        "short_title": "System 9",
        "subtitle": "Interpreting non-verbal cues, reclaiming floor, interrupting without offense, and controlling conversation pace.",
        "eyebrow": "CEFR C1 Conversation Control",
        "stripe": "#25a894",
        "topic_title": "Subtle Floor Management & Strategic Steering",
        "body_html": """<div class="box why">
  <strong>💬 How do I manage conversational flow, prevent interruptions, and take control quietly?</strong>
  <p style="margin:6px 0 0; font-size:15px;">Advanced speakers use subtle floor-holding devices (fillers like "if I may just finish this thought", prosodic shifts, bodily posture) to control dialogue momentum.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can hold turn against interjections, yield turn gracefully, and steer discussions back on course.
</div>
<div class="building-blocks">
  <h3>🧩 Modular Building Blocks: Strategic Steering Chips</h3>
  <div class="chip-grid">
    <span class="chip block-continue">If I could just finish this point, I'll hand right over to you.</span>
    <span class="chip block-start">To pick up on what Sarah was saying earlier...</span>
    <span class="chip block-ask">Before we move on, I'd love to hear Michael's perspective on this.</span>
    <span class="chip block-react">That brings us neatly back to our core question...</span>
  </div>
</div>
<div class="natural-speech">
  <h3>🗣 Natural Speech Add-on</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Stiff:</b> "Stop talking, I am not finished."</div>
    <div class="natural-card">✅ <b>Natural:</b> "Allow me to just tie off this thought, and then I'm all ears."</div>
  </div>
</div>
<div class="checklist" data-key="comm-c1-floormanagement">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Hold floor smoothly when interrupted ("Just to complete this thought...")</span></label>
  <label class="check-item"><input type="checkbox"><span>Pass floor strategically to quiet participants to rebalance room dynamics</span></label>
  <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 1</span></div>
  <div class="qitem">
    <div class="qtext">1. How do you politely hold the floor when someone tries to interrupt you mid-sentence?</div>
    <div class="qopts"><button class="qopt">If I could just finish this thought, I'd be glad to hear your take.</button><button class="qopt">Don't interrupt me ever!</button><button class="qopt">Stop speaking immediately.</button></div>
    <div class="qexplain">"If I could just finish this thought..." holds turn with executive grace.</div>
  </div>
  <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "system-10",
        "file": "part-10.html",
        "slug": "executive-communication-capstone",
        "title": "System 10 · Executive Communication Capstone",
        "short_title": "System 10",
        "subtitle": "Synthesizing C1 leadership, persuasion, diplomacy, rhetoric, and register mobility in complex simulations.",
        "eyebrow": "CEFR C1 Strategic Capstone",
        "stripe": "#0f5c50",
        "topic_title": "Executive Communication Capstone",
        "body_html": """<div class="box why">
  <strong>💬 How do I integrate all C1 communication strategies in real-world high-stakes scenarios?</strong>
  <p style="margin:6px 0 0; font-size:15px;">This final capstone synthesizes chairing, rhetoric, diplomatic hedging, keynote delivery, and register mobility into complete executive discourse mastery.</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can lead complex international summits, defend organizational strategy, and handle high-pressure media/stakeholder encounters.
</div>
<div class="building-blocks">
  <h3>🧩 Integrated C1 Master Strategy Framework</h3>
  <div class="chip-grid">
    <span class="chip block-start">Executive Opening & Agenda Alignment</span>
    <span class="chip block-continue">Rhetorical Argumentation & Evidence Framing</span>
    <span class="chip block-react">Diplomatic Hedging & Friction De-escalation</span>
    <span class="chip block-ask">Strategic Steering & Floor Control</span>
    <span class="chip block-close">Decisive Resolution & Binding Call to Action</span>
  </div>
</div>
<div class="checklist" data-key="comm-c1-capstone">
  <h3>📍 Can I already do this?</h3>
  <label class="check-item"><input type="checkbox"><span>Execute complete C1 strategic communication maneuvers in real time</span></label>
  <label class="check-item"><input type="checkbox"><span>Command respect and build lasting international consensus across all contexts</span></label>
  <div class="check-progress"></div>
</div>
<div class="celebration-box">
  🎉 Congratulations! You have mastered the Level C1 Executive Communication Manual!
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 1</span></div>
  <div class="qitem">
    <div class="qtext">1. What defines C1 Level Communication mastery?</div>
    <div class="qopts"><button class="qopt">Memorizing long vocabulary lists without speaking.</button><button class="qopt">Strategic register mobility, diplomatic precision, persuasive rhetoric, and effortless floor stewardship.</button><button class="qopt">Speaking as fast as possible without pauses.</button></div>
    <div class="qexplain">C1 mastery is defined by pragmatic intent, register mobility, diplomatic hedging, and commanding rhetorical structure.</div>
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
 <span class="brand-name">COSY<em>languages</em> · Comm C1</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../english-c1.html" style="font-weight:700;">← English Hub</a>
 {nav_links}
 </nav>
 </div>
</header>"""

def render_footer():
    return """<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Communication Manual (Level C1)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Writing C1 Communication CSS and JS assets...")
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
<title>{s["topic_title"]} · COSYlanguages C1 Communication</title>
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
<title>{s["title"]} · COSYlanguages Level C1</title>
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
<title>COSYlanguages English Communication Manual (Level C1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level C1</span>
 <h1>English Communication Manual · Level C1</h1>
 <p class="lead">Leadership, Persuasion & Strategic Pragmatics. 10 executive conversation systems aligned with CEFR Effective Operational Proficiency descriptors.</p>
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

    print("Successfully built Level C1 English Communication Manual!")

if __name__ == "__main__":
    build_all()

#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Vocabulary Manual (Level B2) Interactive Web Edition.
Generates manuals/en/vocabulary/b2/index.html, 11 section hub HTML pages (part-1.html .. part-11.html),
assets (style.css, app.js), and 11 topic HTML pages in manuals/en/vocabulary/b2/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/vocabulary/b2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level B2 Vocabulary Manual Stylesheet */
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

/* Callout Box */
.box { border-radius: var(--radius-m); padding: 20px 22px; margin: 22px 0; border: 1px solid transparent; box-shadow: 0 2px 8px rgba(0,0,0,.02); }
.box h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 16px; font-weight: 800; }
.box.why { background: var(--why-bg); border-color: #eddca0; color: var(--why-ink); }
.box.mint { background: var(--mint-bg); border-color: #c9e9de; color: var(--mint-ink); }
.box.rule-box { background: var(--teal-050); border: 1px solid var(--teal-100); border-left: 4px solid var(--teal-600); }

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

APP_JS = """// COSYlanguages B2 Vocabulary Manual Shared JS
(function(){
 "use strict";
 function initTTS(){
   if(!('speechSynthesis' in window)) return;
   document.querySelectorAll('.examples li, tbody tr td:first-child').forEach(function(el){
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
     var key = 'cosy-b2-vocab-check-' + box.getAttribute('data-key');
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

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "slug": "advanced-vocabulary-toolkit",
        "title": "Part 1 · Advanced Vocabulary Toolkit",
        "short_title": "Part 1",
        "subtitle": "Multi-meaning phrasal verbs, negative prefixes, academic collocations, and register upgrades.",
        "eyebrow": "FCE Use of English (Parts 3 & 4) Core",
        "stripe": "#3562e0",
        "topic_title": "Advanced Vocabulary Toolkit",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can apply multi-meaning phrasal verbs (*come across, put off, get around to*), negative prefixes, and formal register upgrades (*good ➔ beneficial, big ➔ substantial*).
</div>
<div class="table-wrap"><table>
<thead><tr><th>Base Word</th><th>Register Upgrade</th><th>Multi-meaning Phrasal Verb</th><th>Example</th></tr></thead>
<tbody>
<tr><td>good</td><td>beneficial / advantageous</td><td>come across (find by chance / seem)</td><td>I <b>came across</b> a <b>beneficial</b> article on health.</td></tr>
<tr><td>big</td><td>substantial / significant</td><td>put off (postpone / cause dislike)</td><td>They faced a <b>substantial</b> delay after <b>putting off</b> the meeting.</td></tr>
<tr><td>start</td><td>commence / initiate</td><td>get around to (finally do)</td><td>I finally <b>got around to</b> reading the book.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The company reported a <b>substantial</b> increase in revenue.</li><li>Don't be <b>put off</b> by the complex terminology.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The meeting was put out until Friday.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The meeting was <b>put off</b> until Friday. (Postpone = put off!)</span></div>
 </div>
</div>
<div class="checklist" data-key="toolkit-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use formal register upgrades (substantial, beneficial, commence)</span></label>
 <label class="check-item"><input type="checkbox"><span>Master multi-meaning phrasal verbs (come across, put off, get around to)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Formal upgrade for "big or large in amount":'</div>
  <div class="qopts"><button class="qopt">beneficial</button><button class="qopt">substantial</button><button class="qopt">commence</button></div>
  <div class="qexplain">Large amount upgrade is 'substantial'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to postpone an event":'</div>
  <div class="qopts"><button class="qopt">put off</button><button class="qopt">come across</button><button class="qopt">get around to</button></div>
  <div class="qexplain">Postpone is 'put off'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "slug": "society-government-and-public-life",
        "title": "Part 2 · Society, Government & Public Life",
        "short_title": "Part 2",
        "subtitle": "Branches of government, public administration, elections, political manifestos, and voting dynamics.",
        "eyebrow": "FCE Topic: Society & Governance",
        "stripe": "#1c8f56",
        "topic_title": "Society, Government & Public Life",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can debate civic governance (*enact legislation, prime minister, constitutional reform*), elections, and political manifestos.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Governance</td><td>legislation, parliament, civil servant, bureaucracy</td><td>The <b>parliament</b> passed new <b>legislation</b> on energy.</td></tr>
<tr><td>Elections</td><td>manifesto, candidate, turnout, ballot, coalition</td><td>High voter <b>turnout</b> is expected in the upcoming election.</td></tr>
<tr><td>Phrasal Verbs</td><td>step down, call for, carry out, rule out, stand down</td><td>The minister decided to <b>step down</b> following public critique.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The opposition party published its election <b>manifesto</b> yesterday.</li><li>Two parties agreed to form a <b>coalition</b> government.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The minister stepped out from his post.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The minister <b>stepped down / stood down</b> from his post.</span></div>
 </div>
</div>
<div class="checklist" data-key="society-government">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use governance terms (legislation, civil servant, manifesto, coalition)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use political phrasal verbs (step down, call for, rule out)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Written public statement of political principles and plans is a ___.'</div>
  <div class="qopts"><button class="qopt">manifesto</button><button class="qopt">bureaucracy</button><button class="qopt">turnout</button></div>
  <div class="qexplain">Political principles statement is a 'manifesto'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to resign from an official position":'</div>
  <div class="qopts"><button class="qopt">rule out</button><button class="qopt">step down</button><button class="qopt">call for</button></div>
  <div class="qexplain">Resigning position is 'step down'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "slug": "law-justice-and-civil-rights",
        "title": "Part 3 · Law, Justice & Civil Rights",
        "short_title": "Part 3",
        "subtitle": "Judicial procedure, prosecution vs defense, corporate law, copyright infringement, and data privacy rights.",
        "eyebrow": "FCE Topic: Law & Justice",
        "stripe": "#c9740a",
        "topic_title": "Law, Justice & Civil Rights",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss legal proceedings (*jurisdiction, defendant, acquit*) and intellectual property compliance.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Judicial System</td><td>prosecution, defense, verdict, acquit, jurisdiction</td><td>The jury <b>acquitted</b> the defendant after three hours.</td></tr>
<tr><td>Corporate Law</td><td>intellectual property, copyright infringement, audit</td><td>The startup was sued for <b>copyright infringement</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>stand trial, bring against, rule on, lock up, call upon</td><td>He will <b>stand trial</b> for financial fraud next month.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Firms must ensure strict <b>regulatory compliance</b> regarding consumer data.</li><li>Circumstantial evidence was deemed inadmissible in court.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The court made him innocent.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The court <b>acquitted</b> him. / The jury found him <b>not guilty</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="law-justice">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use legal terminology (jurisdiction, acquit, intellectual property)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use judicial phrasal verbs (stand trial, rule on, bring against)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'To officially declare someone not guilty of a crime is to ___.'</div>
  <div class="qopts"><button class="qopt">prosecute</button><button class="qopt">acquit</button><button class="qopt">convict</button></div>
  <div class="qexplain">Declaring not guilty is 'acquit'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Unauthorized copy or use of protected creative work is ___.'</div>
  <div class="qopts"><button class="qopt">copyright infringement</button><button class="qopt">regulatory compliance</button><button class="qopt">jurisdiction</button></div>
  <div class="qexplain">Unauthorized copying is 'copyright infringement'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "slug": "economics-trade-and-finance",
        "title": "Part 4 · Economics, Trade & Finance",
        "short_title": "Part 4",
        "subtitle": "Macroeconomics, inflation control, interest rate hikes, global trade tariffs, and stock market volatility.",
        "eyebrow": "FCE Topic: Economics & Trade",
        "stripe": "#7c4fd6",
        "topic_title": "Economics, Trade & Finance",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can analyze macroeconomic indicators (*GDP, inflation, recession*) and global trade dynamics.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Macroeconomics</td><td>Gross Domestic Product (GDP), inflation, recession, fiscal</td><td>Central banks raised rates to curb rising <b>inflation</b>.</td></tr>
<tr><td>Global Trade</td><td>tariff, trade deficit, liquidity, stock market, export</td><td>Imposing new <b>tariffs</b> increased the cost of imported goods.</td></tr>
<tr><td>Verbs</td><td>fluctuate, stabilize, stagnate, stimulate, curb</td><td>Oil prices continue to <b>fluctuate</b> on global markets.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Fiscal stimulus helped prevent a prolonged <b>economic recession</b>.</li><li>High market <b>volatility</b> prompted cautious investor behavior.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The economic situation is in a high inflation.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span><b>Inflation is high</b> / The economy is experiencing high inflation.</span></div>
 </div>
</div>
<div class="checklist" data-key="economics-trade">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use macroeconomic terms (GDP, inflation, recession, fiscal, tariff)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use trend verbs (fluctuate, stabilize, stagnate, curb)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Tax or duty paid on a particular class of imports or exports is a ___.'</div>
  <div class="qopts"><button class="qopt">tariff</button><button class="qopt">deficit</button><button class="qopt">liquidity</button></div>
  <div class="qexplain">Import tax is a 'tariff'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'To restrain or keep something under control (e.g. inflation) is to ___.'</div>
  <div class="qopts"><button class="qopt">fluctuate</button><button class="qopt">curb</button><button class="qopt">stagnate</button></div>
  <div class="qexplain">Restraining inflation is 'curb'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "slug": "business-strategy-management-and-leadership",
        "title": "Part 5 · Business Strategy, Management & Leadership",
        "short_title": "Part 5",
        "subtitle": "Corporate leadership, venture capital funding, risk management, market segmentation, and brand loyalty.",
        "eyebrow": "FCE Topic: Corporate Strategy",
        "stripe": "#a3195b",
        "topic_title": "Business Strategy, Management & Leadership",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss corporate strategy (*spearhead, venture capital, merger*), marketing funnel, and brand acquisition.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Leadership & Strategy</td><td>spearhead, venture capital, stakeholder, risk management</td><td>She was praised for <b>spearheading</b> the digital initiative.</td></tr>
<tr><td>Marketing & Sales</td><td>market segmentation, brand loyalty, acquisition cost, funnel</td><td>Strong <b>brand loyalty</b> reduces customer acquisition costs.</td></tr>
<tr><td>Corporate Actions</td><td>merger, acquisition, pitch, diversify, positioning</td><td>The <b>merger</b> formed the largest retail entity in the region.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The startup secured five million dollars in <b>venture capital funding</b>.</li><li>Effective <b>risk management</b> protocols protected company assets.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He spearheaded for the new department.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He <b>spearheaded the new department</b>. (Direct transitive verb without 'for'!)</span></div>
 </div>
</div>
<div class="checklist" data-key="business-strategy">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use leadership terms (spearhead, venture capital, stakeholder, risk management)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use marketing terms (market segmentation, brand loyalty, acquisition)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'To lead a project, initiative, or attack is to ___.'</div>
  <div class="qopts"><button class="qopt">diversify</button><button class="qopt">spearhead</button><button class="qopt">acquire</button></div>
  <div class="qexplain">Leading an initiative is 'spearhead'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Capital invested in project startups with high risk is ___.'</div>
  <div class="qopts"><button class="qopt">venture capital</button><button class="qopt">market share</button><button class="qopt">sales funnel</button></div>
  <div class="qexplain">Startup investment is 'venture capital'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "slug": "science-research-and-empirical-methodology",
        "title": "Part 6 · Science, Research & Empirical Methodology",
        "short_title": "Part 6",
        "subtitle": "Natural sciences, empirical data, double-blind trials, peer review, orbital trajectory, and satellite propulsion.",
        "eyebrow": "FCE Topic: Science & Research",
        "stripe": "#3562e0",
        "topic_title": "Science, Research & Empirical Methodology",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can explain scientific inquiry (*empirical data, hypothesis, double-blind trial*) and aerospace exploration.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Scientific Method</td><td>empirical data, hypothesis, control group, double-blind study</td><td>The <b>hypothesis</b> was verified in a <b>double-blind study</b>.</td></tr>
<tr><td>Aerospace & Exploration</td><td>orbital trajectory, payload, propulsion, satellite, rover</td><td>Engineers adjusted the probe's <b>orbital trajectory</b>.</td></tr>
<tr><td>Research Process</td><td>replicate, peer review, formulate, transmit, observe</td><td>Experiments must be <b>replicated</b> before publication.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The study relies on <b>empirical evidence</b> gathered across five labs.</li><li>The robotic <b>rover</b> transmitted geological data back to Earth.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">They made an empirical data.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>They <b>gathered / collected empirical data</b>. (Data is uncountable!)</span></div>
 </div>
</div>
<div class="checklist" data-key="science-empirical">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use research terminology (empirical data, double-blind study, peer review)</span></label>
 <label class="check-item"><input type="checkbox"><span>Treat 'data' correctly with verbs like gather or analyze</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Information acquired by observation or experimentation is ___.'</div>
  <div class="qopts"><button class="qopt">empirical data</button><button class="qopt">payload</button><button class="qopt">propulsion</button></div>
  <div class="qexplain">Observed data is 'empirical data'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Curved path of a celestial object or spacecraft around a star/planet is an ___.'</div>
  <div class="qopts"><button class="qopt">empirical method</button><button class="qopt">orbital trajectory</button><button class="qopt">control group</button></div>
  <div class="qexplain">Spacecraft path is 'orbital trajectory'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "slug": "technology-ai-and-cybernetics",
        "title": "Part 7 · Technology, AI & Cybernetics",
        "short_title": "Part 7",
        "subtitle": "Artificial Intelligence models, neural networks, predictive analytics, cloud storage, and digital ethics frameworks.",
        "eyebrow": "FCE Topic: Tech & AI",
        "stripe": "#1c8f56",
        "topic_title": "Technology, AI & Cybernetics",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss Artificial Intelligence (*neural network, predictive model*), cloud security, and digital ethics.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>AI & ML</td><td>Machine Learning (ML), neural network, predictive analytics</td><td><b>Neural networks</b> process complex pattern recognition.</td></tr>
<tr><td>Cybernetics & Cloud</td><td>cloud storage, blockchain, digital ethics, end-to-end encryption</td><td>Establishing a <b>digital ethics</b> framework is mandatory.</td></tr>
<tr><td>Verbs</td><td>automate, optimize, simulate, virtualize, authenticate</td><td>Automated systems <b>optimize</b> logistics operations.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Logistics companies utilize <b>predictive analytics</b> to forecast demand.</li><li>Sensitive files are protected with <b>end-to-end encryption</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The AI is optimizing automatic the route.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>AI is optimizing the route <b>automatically</b>. (Adverb modifies verb!)</span></div>
 </div>
</div>
<div class="checklist" data-key="tech-ai-cybernetics">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use AI/tech terminology (neural network, predictive analytics, digital ethics)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use tech verbs (optimize, simulate, authenticate, virtualize)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Computing systems inspired by biological brain structures are ___.'</div>
  <div class="qopts"><button class="qopt">blockchains</button><button class="qopt">neural networks</button><button class="qopt">cloud storages</button></div>
  <div class="qexplain">Brain-inspired computing is 'neural network'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Using historical data to forecast future outcomes is ___.'</div>
  <div class="qopts"><button class="qopt">predictive analytics</button><button class="qopt">digital footprint</button><button class="qopt">end-to-end encryption</button></div>
  <div class="qexplain">Forecasting outcomes is 'predictive analytics'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-8",
        "file": "part-8.html",
        "slug": "media-journalism-and-public-discourse",
        "title": "Part 8 · Media, Journalism & Public Discourse",
        "short_title": "Part 8",
        "subtitle": "Investigative journalism, press freedom, whistleblowers, digital echo chambers, disinformation, and clickbait.",
        "eyebrow": "FCE Topic: Media & Public Discourse",
        "stripe": "#c9740a",
        "topic_title": "Media, Journalism & Public Discourse",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can evaluate press freedom (*investigative reporting, whistleblower*), disinformation campaigns, and echo chambers.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Journalism</td><td>investigative reporting, press freedom, whistleblower, source</td><td>The <b>whistleblower</b> exposed corporate environmental crimes.</td></tr>
<tr><td>Public Discourse</td><td>disinformation, echo chamber, clickbait, debunk, manipulate</td><td>Sensational <b>clickbait</b> headlines distort public discourse.</td></tr>
<tr><td>Verbs</td><td>investigate, expose, leak, distort, sensationalize</td><td>Journalists worked for months to <b>expose</b> corruption.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Fact-checkers worked rapidly to <b>debunk</b> viral disinformation.</li><li>Algorithms can inadvertently trap readers inside a <b>digital echo chamber</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The whistleblower leaked out confidential documents.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The whistleblower <b>leaked</b> confidential documents. (Direct verb without 'out'!)</span></div>
 </div>
</div>
<div class="checklist" data-key="media-journalism">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use media journalism terms (investigative reporting, whistleblower, clickbait)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss echo chambers and disinformation tactics</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Person who informs on a person or organization engaged in illegal activity is a ___.'</div>
  <div class="qopts"><button class="qopt">whistleblower</button><button class="qopt">fact-checker</button><button class="qopt">editor</button></div>
  <div class="qexplain">Informer on wrongdoing is a 'whistleblower'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Environment where a person only encounters information reflecting their own views is an ___.'</div>
  <div class="qopts"><button class="qopt">clickbait</button><button class="qopt">echo chamber</button><button class="qopt">disinformation</button></div>
  <div class="qexplain">Enclosed views environment is an 'echo chamber'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-9",
        "file": "part-9.html",
        "slug": "psychology-cognition-and-behavior",
        "title": "Part 9 · Psychology, Cognition & Behavior",
        "short_title": "Part 9",
        "subtitle": "Cognitive bias, emotional intelligence, subconscious habit formation, psychological resilience, and behavior.",
        "eyebrow": "FCE Topic: Psychology & Cognition",
        "stripe": "#7c4fd6",
        "topic_title": "Psychology, Cognition & Behavior",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss psychological processes (*cognitive bias, subconscious, emotional intelligence*) and habit formation.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Cognition</td><td>cognitive bias, subconscious, perception, internalize</td><td>Confirmation bias is a widespread <b>cognitive bias</b>.</td></tr>
<tr><td>Psychology</td><td>emotional intelligence, psychological resilience, coping</td><td>High <b>emotional intelligence</b> fosters effective team leadership.</td></tr>
<tr><td>Verbs</td><td>perceive, process, internalize, cope, adapt</td><td>It takes time to <b>internalize</b> new behavioral habits.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Developing <b>psychological resilience</b> helps individuals recover from adversity.</li><li>Unconscious choices are driven by <b>subconscious</b> preferences.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He has a strong cognitive biased.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He has a strong <b>cognitive bias</b>. (Noun required!)</span></div>
 </div>
</div>
<div class="checklist" data-key="psychology-cognition">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use cognitive psychology terms (cognitive bias, subconscious, resilience)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss emotional intelligence and perception</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Systematic pattern of deviation from norm or rationality in judgment is a ___.'</div>
  <div class="qopts"><button class="qopt">subconscious</button><button class="qopt">cognitive bias</button><button class="qopt">perception</button></div>
  <div class="qexplain">Systematic error in thinking is 'cognitive bias'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Capacity to recover quickly from psychological difficulties is ___.'</div>
  <div class="qopts"><button class="qopt">psychological resilience</button><button class="qopt">cognitive bias</button><button class="qopt">subconscious</button></div>
  <div class="qexplain">Recovery capacity is 'resilience'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-10",
        "file": "part-10.html",
        "slug": "philosophy-ethics-and-moral-logic",
        "title": "Part 10 · Philosophy, Ethics & Moral Logic",
        "short_title": "Part 10",
        "subtitle": "Utilitarianism vs deontology, moral dilemmas, free will, epistemology, and ethical decision frameworks.",
        "eyebrow": "FCE Topic: Philosophy & Ethics",
        "stripe": "#a3195b",
        "topic_title": "Philosophy, Ethics & Moral Logic",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can debate philosophical frameworks (*utilitarianism, deontology, moral dilemma*) and ethical logic.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Philosophical Logic</td><td>utilitarianism, deontology, moral dilemma, free will</td><td>Engineers face a <b>moral dilemma</b> in autonomous driving design.</td></tr>
<tr><td>Principles</td><td>epistemology, ethical framework, fundamental principles</td><td><b>Utilitarianism</b> seeks the greatest good for the greatest number.</td></tr>
<tr><td>Verbs</td><td>deliberate, justify, uphold, deduce, ponder</td><td>The ethics committee <b>deliberated</b> for several hours.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Deontology emphasizes duty over consequences.</li><li>He spent years <b>pondering</b> the nature of free will and human agency.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">They justified for their decision morally.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>They <b>justified their decision</b> morally. (No 'for' after transitive verb justify!)</span></div>
 </div>
</div>
<div class="checklist" data-key="philosophy-moral-logic">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use philosophical terms (utilitarianism, deontology, moral dilemma)</span></label>
 <label class="check-item"><input type="checkbox"><span>Omit 'for' after justify</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Ethical theory holding that actions are right if they benefit the majority is ___.'</div>
  <div class="qopts"><button class="qopt">utilitarianism</button><button class="qopt">deontology</button><button class="qopt">epistemology</button></div>
  <div class="qexplain">Majority benefit ethics is 'utilitarianism'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Situation in which a difficult choice has to be made between two moral imperatives is a ___.'</div>
  <div class="qopts"><button class="qopt">utilitarianism</button><button class="qopt">moral dilemma</button><button class="qopt">free will</button></div>
  <div class="qexplain">Difficult moral choice is a 'moral dilemma'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-11",
        "file": "part-11.html",
        "slug": "culture-arts-and-heritage",
        "title": "Part 11 · Culture, Arts & Heritage",
        "short_title": "Part 11",
        "subtitle": "Fine arts, architectural landmarks, symphonic orchestration, sculpture, aesthetics, and heritage sites.",
        "eyebrow": "FCE Topic: Arts & Heritage",
        "stripe": "#3562e0",
        "topic_title": "Culture, Arts & Heritage",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can critique architectural design (*landmark, aesthetic*), fine arts exhibitions, and cultural heritage sites.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Fine Arts & Design</td><td>sculpture, choreography, aesthetics, curatorial design</td><td>The architect focused on clean lines and modern <b>aesthetics</b>.</td></tr>
<tr><td>Heritage & Performance</td><td>architectural landmark, cultural heritage site, symphony</td><td>The ancient temple was designated a UNESCO <b>heritage site</b>.</td></tr>
<tr><td>Verbs</td><td>exhibit, compose, sculpt, choreograph, preserve</td><td>The orchestra performed a newly <b>composed</b> symphony.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Efforts were made to <b>preserve</b> the city's architectural landmarks.</li><li>The museum features an outstanding collection of contemporary <b>sculptures</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The monument is an aesthetic landmark structure.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The monument is an <b>architectural landmark</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="culture-arts-heritage">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use arts & architecture terms (architectural landmark, aesthetics, heritage)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss museum curation and symphonic performance</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Set of principles underlying and guiding the work of a particular artist or movement is ___.'</div>
  <div class="qopts"><button class="qopt">choreography</button><button class="qopt">aesthetics</button><button class="qopt">symphony</button></div>
  <div class="qexplain">Guiding principles of beauty is 'aesthetics'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Building or structure of historical or architectural importance is an ___.'</div>
  <div class="qopts"><button class="qopt">architectural landmark</button><button class="qopt">aesthetic design</button><button class="qopt">curatorial study</button></div>
  <div class="qexplain">Important historic structure is an 'architectural landmark'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-12",
        "file": "part-12.html",
        "slug": "higher-education-and-academic-inquiry",
        "title": "Part 12 · Higher Education & Academic Inquiry",
        "short_title": "Part 12",
        "subtitle": "Dissertation defense, thesis evaluation, academic integrity, peer-reviewed journals, and empirical methodology.",
        "eyebrow": "FCE Topic: Higher Education",
        "stripe": "#1c8f56",
        "topic_title": "Higher Education & Academic Inquiry",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can outline postgraduate research (*dissertation, thesis defense, citation*) and faculty peer review.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Academic Research</td><td>dissertation, thesis defense, academic integrity, citation</td><td>Postgraduate candidates must <b>defend their thesis</b>.</td></tr>
<tr><td>University & Faculty</td><td>peer-reviewed journal, symposium, faculty, methodology</td><td>The findings were published in a top <b>peer-reviewed journal</b>.</td></tr>
<tr><td>Verbs</td><td>defend, publish, cite, evaluate, lecture</td><td>Always <b>cite</b> original authors to maintain academic integrity.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>She delivered a paper at an international academic <b>symposium</b>.</li><li>The <b>faculty panel</b> commended her innovative research methodology.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He defended for his dissertation yesterday.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He <b>defended his dissertation</b> yesterday. (No 'for' after defend!)</span></div>
 </div>
</div>
<div class="checklist" data-key="higher-edu-inquiry">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use higher education terms (dissertation, thesis defense, peer-reviewed)</span></label>
 <label class="check-item"><input type="checkbox"><span>Omit 'for' after transitive verb defend</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Long essay on a particular subject written for a university degree is a ___.'</div>
  <div class="qopts"><button class="qopt">dissertation</button><button class="qopt">symposium</button><button class="qopt">citation</button></div>
  <div class="qexplain">Degree long paper is a 'dissertation'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Quotation from or reference to a book or author in an academic paper is a ___.'</div>
  <div class="qopts"><button class="qopt">symposium</button><button class="qopt">citation</button><button class="qopt">faculty</button></div>
  <div class="qexplain">Reference to source is a 'citation'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-13",
        "file": "part-13.html",
        "slug": "environment-sustainability-and-circular-economy",
        "title": "Part 13 · Environment, Sustainability & Circular Economy",
        "short_title": "Part 13",
        "subtitle": "Circular economy models, carbon credit trading, urban sustainability plans, zero-emissions targets, and biodiversity.",
        "eyebrow": "FCE Topic: Sustainability & Economy",
        "stripe": "#c9740a",
        "topic_title": "Environment, Sustainability & Circular Economy",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss circular economy models (*zero-emissions, carbon credit trading*) and urban sustainability.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Circular Model</td><td>circular economy, carbon credit trading, zero emissions</td><td>A <b>circular economy</b> model eliminates waste by design.</td></tr>
<tr><td>Urban Sustainability</td><td>urban sustainability, water management, biodiversity</td><td>The council approved a ten-year <b>urban sustainability</b> plan.</td></tr>
<tr><td>Verbs</td><td>conserve, reduce, mitigate, preserve, recycle</td><td>Cities must <b>mitigate</b> the risks of urban heat islands.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Companies buy carbon credits to offset industrial emissions.</li><li>Pledging to reach a <b>zero-emissions target</b> accelerates clean tech adoption.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We must reduce the carbon emissions of 20%.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We must reduce carbon emissions <b>by</b> 20%.</span></div>
 </div>
</div>
<div class="checklist" data-key="env-circular-economy">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use circular economy terms (carbon credit trading, zero emissions, circular model)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use correct preposition 'by' for reduction percentages</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Economic system aimed at eliminating waste and continual use of resources is a ___.'</div>
  <div class="qopts"><button class="qopt">carbon market</button><button class="qopt">circular economy</button><button class="qopt">zero emission</button></div>
  <div class="qexplain">Zero-waste resource system is 'circular economy'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Market-based system for buying and selling permits to emit greenhouse gases is ___.'</div>
  <div class="qopts"><button class="qopt">carbon credit trading</button><button class="qopt">circular economy</button><button class="qopt">water management</button></div>
  <div class="qexplain">Permit trading system is 'carbon credit trading'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-14",
        "file": "part-14.html",
        "slug": "international-relations-and-geopolitics",
        "title": "Part 14 · International Relations & Geopolitics",
        "short_title": "Part 14",
        "subtitle": "Diplomatic immunity, ratifying treaties, multilateral agreements, economic sanctions, and peacekeeping missions.",
        "eyebrow": "FCE Topic: International Relations",
        "stripe": "#7c4fd6",
        "topic_title": "International Relations & Geopolitics",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can analyze international diplomacy (*multilateral treaty, diplomatic immunity, economic sanctions*).
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Diplomacy & Treaties</td><td>diplomacy, multilateral treaty, diplomatic immunity, ambassador</td><td>Both delegates met to sign a <b>multilateral treaty</b>.</td></tr>
<tr><td>Global Security</td><td>international sanctions, peacekeeping, summit, bilateral</td><td>The UN Security Council voted to <b>impose economic sanctions</b>.</td></tr>
<tr><td>Verbs</td><td>negotiate, ratify, impose, mediate, execute</td><td>All parliament members voted to <b>ratify the treaty</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>An international <b>peacekeeping mission</b> was dispatched to monitor the ceasefire.</li><li>The prime minister attended the international climate <b>summit</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">They imposed economic sanctions for the country.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>They imposed economic sanctions <b>on / against</b> the country.</span></div>
 </div>
</div>
<div class="checklist" data-key="intl-relations">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use international relations terms (multilateral treaty, sanctions, peacekeeping)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use correct prepositions 'on' / 'against' after impose sanctions</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Formal agreement between three or more sovereign states is a ___.'</div>
  <div class="qopts"><button class="qopt">multilateral treaty</button><button class="qopt">diplomatic immunity</button><button class="qopt">economic sanction</button></div>
  <div class="qexplain">Multi-state agreement is 'multilateral treaty'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Correct preposition: "Impose sanctions ___ the rogue regime."'</div>
  <div class="qopts"><button class="qopt">to</button><button class="qopt">on</button><button class="qopt">for</button></div>
  <div class="qexplain">Preposition required is 'on' / 'against'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-15",
        "file": "part-15.html",
        "slug": "healthcare-systems-and-preventive-medicine",
        "title": "Part 15 · Healthcare Systems & Preventive Medicine",
        "short_title": "Part 15",
        "subtitle": "Public health policies, clinical trials, medical ethics committees, preventive medicine, and universal coverage.",
        "eyebrow": "FCE Topic: Public Health",
        "stripe": "#a3195b",
        "topic_title": "Healthcare Systems & Preventive Medicine",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss public healthcare policy (*preventive medicine, universal coverage, clinical trial*).
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Public Health</td><td>public health policy, universal coverage, epidemiology</td><td>The government pledged to achieve <b>universal coverage</b>.</td></tr>
<tr><td>Medicine & Trials</td><td>preventive medicine, clinical trial, medical ethics committee</td><td>Phase III <b>clinical trials</b> confirmed the vaccine's efficacy.</td></tr>
<tr><td>Verbs</td><td>vaccinate, prevent, treat, administer, regulate</td><td>Hospitals prioritize <b>preventive medicine</b> to cut costs.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The <b>medical ethics committee</b> reviewed the drug trial protocol.</li><li>Epidemiologists tracked disease transmission rates across regions.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The vaccine was tested in clinical experiences.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The vaccine was tested in <b>clinical trials</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="healthcare-preventive">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use healthcare terms (universal coverage, clinical trial, preventive medicine)</span></label>
 <label class="check-item"><input type="checkbox"><span>Distinguish clinical trials (medical testing) from experiences</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Research studies performed in people to evaluate medical treatments are ___.'</div>
  <div class="qopts"><button class="qopt">clinical experiences</button><button class="qopt">clinical trials</button><button class="qopt">public health policies</button></div>
  <div class="qexplain">Medical test studies are 'clinical trials'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Healthcare system ensuring all residents have healthcare access is ___.'</div>
  <div class="qopts"><button class="qopt">universal coverage</button><button class="qopt">preventive medicine</button><button class="qopt">medical ethics</button></div>
  <div class="qexplain">Access for all is 'universal coverage'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-16",
        "file": "part-16.html",
        "slug": "daily-professional-life-and-workplace-dynamics",
        "title": "Part 16 · Daily Professional Life & Workplace Dynamics",
        "short_title": "Part 16",
        "subtitle": "Annual performance reviews, hybrid work environments, negotiation strategies, and work-life balance.",
        "eyebrow": "FCE Topic: Professional Workplace",
        "stripe": "#3562e0",
        "topic_title": "Daily Professional Life & Workplace Dynamics",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage workplace interactions (*annual performance review, hybrid work, negotiation strategy*).
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Workplace Setup</td><td>hybrid work environment, remote work, team dynamic</td><td>Our company adopted a flexible <b>hybrid work environment</b>.</td></tr>
<tr><td>Performance & Career</td><td>annual performance review, negotiation strategy, productivity</td><td>She outlined her accomplishments during her <b>performance review</b>.</td></tr>
<tr><td>Verbs</td><td>evaluate, balance, negotiate, adapt, collaborate</td><td>Remote teams must <b>collaborate</b> effectively via video calls.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Maintaining a positive <b>work-life balance</b> prevents employee burnout.</li><li>He prepared a persuasive <b>negotiation strategy</b> for the client meeting.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am working in a hybrid job model environment.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I work in a <b>hybrid work environment</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="daily-professional-life">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use workplace terms (performance review, hybrid work, negotiation strategy)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss team dynamics and productivity strategies</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Formal assessment of an employee's work over a year is an ___.'</div>
  <div class="qopts"><button class="qopt">annual performance review</button><button class="qopt">hybrid work model</button><button class="qopt">negotiation strategy</button></div>
  <div class="qexplain">Yearly evaluation is 'annual performance review'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Work setup combining office work with remote work is a ___.'</div>
  <div class="qopts"><button class="qopt">performance review</button><button class="qopt">hybrid work environment</button><button class="qopt">negotiation strategy</button></div>
  <div class="qexplain">Combined office/remote setup is 'hybrid work environment'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }
]

def render_topbar(is_topic=False):
    rel = "../" if is_topic else ""
    links = [f'<a href="{rel}part-{i}.html">Part {i}</a>' for i in range(1, len(PARTS) + 1)]
    nav_html = "\n".join(links)
    return f"""<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{rel}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Vocab B2</span>
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
 <div>COSYlanguages · English Vocabulary Manual (Level B2)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Building Level B2 English Vocabulary Manual...")

    for i, p in enumerate(PARTS):
        prev_p = PARTS[i-1] if i > 0 else None
        next_p = PARTS[i+1] if i < len(PARTS)-1 else None

        pager_parts = []
        if prev_p:
            pager_parts.append(f'<a class="prev" href="../topics/{prev_p["slug"]}.html"><span class="dir">&larr; Previous</span><span class="ttl">{prev_p["title"]}</span></a>')
        else:
            pager_parts.append('<span class="prev empty"></span>')

        if next_p:
            pager_parts.append(f'<a class="next" href="../topics/{next_p["slug"]}.html"><span class="dir">Next &rarr;</span><span class="ttl">{next_p["title"]}</span></a>')
        else:
            pager_parts.append('<span class="next empty"></span>')

        pager_html = f'<div class="pager">{"".join(pager_parts)}</div>'

        # Build topic page
        topic_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["topic_title"]} · COSYlanguages B2 Vocabulary</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
<div class="page-head">
 <span class="eyebrow">{p["eyebrow"]}</span>
 <h1>{p["topic_title"]}</h1>
 <p class="subtitle">{p["subtitle"]}</p>
 <hr class="rule">
</div>
{p["body_html"]}
{pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>"""
        with open(os.path.join(TOPICS_DIR, f"{p['slug']}.html"), "w", encoding="utf-8") as f:
            f.write(topic_html)

        # Build part hub page
        part_hub_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages Level B2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
<div class="page-head">
 <span class="eyebrow">{p["eyebrow"]}</span>
 <h1>{p["title"]}</h1>
 <p class="subtitle">{p["subtitle"]}</p>
 <hr class="rule">
</div>
<div class="parts-grid">
 <a class="part-card" href="topics/{p['slug']}.html">
  <div class="stripe" style="background:{p['stripe']};"></div>
  <span class="pnum">{p['short_title']}</span>
  <h2>{p['topic_title']}</h2>
  <p>{p['subtitle']}</p>
  <span class="topics-count">Open Module Topic &rarr;</span>
 </a>
</div>
</main>
{render_footer()}
</body>
</html>"""
        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_hub_html)

    # Build index.html
    grid_cards = []
    for p in PARTS:
        grid_cards.append(f"""<a class="part-card" href="{p['file']}">
 <div class="stripe" style="background:{p['stripe']};"></div>
 <span class="pnum">{p['short_title']}</span>
 <h2>{p['title']}</h2>
 <p>{p['subtitle']}</p>
 <span class="topics-count">Explore Part &rarr;</span>
</a>""")

    index_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Vocabulary Manual (Level B2) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level B2</span>
 <h1>English Vocabulary Manual · Level B2</h1>
 <p class="lead">Precision, Nuance & Register. 16 thematic modules aligned with Cambridge B2 First (FCE) Use of English and Speaking syllabus.</p>
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

    print("Successfully built Level B2 English Vocabulary Manual!")

if __name__ == "__main__":
    build_all()

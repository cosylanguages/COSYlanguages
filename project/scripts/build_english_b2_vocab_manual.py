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
        "slug": "society-politics-and-global-issues",
        "title": "Part 2 · Society, Politics & Global Issues",
        "short_title": "Part 2",
        "subtitle": "Social inequality, government structures, policy debates, and human rights vocabulary.",
        "eyebrow": "FCE Topic: Society",
        "stripe": "#1c8f56",
        "topic_title": "Society, Politics & Global Issues",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can debate civic governance, socio-economic inequality, and global human rights initiatives.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Governance</td><td>legislation, policy, referendum, electoral system</td><td>The government introduced new environmental <b>legislation</b>.</td></tr>
<tr><td>Socio-Economic</td><td>inequality, mobility, welfare, marginalization</td><td>Education is key to promoting social <b>mobility</b>.</td></tr>
<tr><td>Global Rights</td><td>humanitarian aid, advocacy, sanctions, diplomacy</td><td>Charities provided urgent <b>humanitarian aid</b> to the region.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The citizens voted in a national <b>referendum</b>.</li><li>International <b>advocacy</b> groups urged a peaceful resolution.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The government passed a new law regulation.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The government passed new <b>legislation</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="society-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use formal civic vocabulary (legislation, referendum, sanctions)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss social mobility and inequality</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'A direct vote by the electorate on a specific proposal is a ___.'</div>
  <div class="qopts"><button class="qopt">referendum</button><button class="qopt">legislation</button><button class="qopt">sanction</button></div>
  <div class="qexplain">Direct public vote is a 'referendum'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Laws collectively enacted by a legislative body are called ___.'</div>
  <div class="qopts"><button class="qopt">welfare</button><button class="qopt">legislation</button><button class="qopt">advocacy</button></div>
  <div class="qexplain">Body of laws is 'legislation'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "slug": "science-technology-and-innovation",
        "title": "Part 3 · Science, Technology & Innovation",
        "short_title": "Part 3",
        "subtitle": "Scientific methodology, breakthroughs, AI, automation, and technological ethics.",
        "eyebrow": "FCE Topic: Science & Tech",
        "stripe": "#c9740a",
        "topic_title": "Science, Technology & Innovation",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss artificial intelligence ethics, technological breakthroughs, and scientific research methods.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Innovation</td><td>breakthrough, cutting-edge, state-of-the-art, pioneer</td><td>Scientists achieved a major medical <b>breakthrough</b>.</td></tr>
<tr><td>AI & Robotics</td><td>artificial intelligence, automation, machine learning</td><td>Workplace <b>automation</b> is transforming manufacturing.</td></tr>
<tr><td>Ethics</td><td>ethical dilemma, data privacy, surveillance</td><td>Genetic engineering poses complex <b>ethical dilemmas</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The laboratory is equipped with <b>state-of-the-art</b> technology.</li><li>Concerns over <b>data privacy</b> have led to stricter regulations.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">It is a technology of cutting-edge.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>It is a <b>cutting-edge technology</b>. (Hyphenated compound adjective before noun!)</span></div>
 </div>
</div>
<div class="checklist" data-key="science-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use advanced innovation terms (breakthrough, cutting-edge, pioneer)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss artificial intelligence and automation ethics</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Adjective meaning at the forefront of technological development:'</div>
  <div class="qopts"><button class="qopt">breakthrough</button><button class="qopt">cutting-edge</button><button class="qopt">automation</button></div>
  <div class="qexplain">Forefront technology is 'cutting-edge'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A dramatic discovery or advancement in research is a ___.'</div>
  <div class="qopts"><button class="qopt">breakthrough</button><button class="qopt">surveillance</button><button class="qopt">dilemma</button></div>
  <div class="qexplain">Major discovery is a 'breakthrough'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "slug": "business-economy-and-work",
        "title": "Part 4 · Business, Economy & Work",
        "short_title": "Part 4",
        "subtitle": "Economic dynamics (inflation, supply/demand), corporate structure, and career advancement.",
        "eyebrow": "FCE Topic: Business & Work",
        "stripe": "#7c4fd6",
        "topic_title": "Business, Economy & Work",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can analyze economic indicators, corporate strategies, and labor market trends.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Economics</td><td>inflation, purchasing power, recession, supply and demand</td><td>Rising <b>inflation</b> reduced consumer purchasing power.</td></tr>
<tr><td>Corporate Life</td><td>entrepreneurship, merger, acquisition, stakeholder</td><td>The <b>merger</b> created a leading global corporation.</td></tr>
<tr><td>Labor Market</td><td>redundancy, remote work, gig economy, turnover</td><td>The company reduced employee <b>turnover</b> by improving perks.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Prices fluctuate according to the law of <b>supply and demand</b>.</li><li>All key <b>stakeholders</b> approved the strategic plan.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The inflation increased the costs very high.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Inflation drove up costs significantly. (No article before 'inflation' in general sense!)</span></div>
 </div>
</div>
<div class="checklist" data-key="business-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Discuss economic indicators (inflation, recession, purchasing power)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use corporate terminology (stakeholder, merger, acquisition)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Combining two companies into a single entity is a ___.'</div>
  <div class="qopts"><button class="qopt">merger</button><button class="qopt">redundancy</button><button class="qopt">recession</button></div>
  <div class="qexplain">Corporate combination is a 'merger'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'General increase in prices and fall in purchasing value is ___.'</div>
  <div class="qopts"><button class="qopt">turnover</button><button class="qopt">inflation</button><button class="qopt">acquisition</button></div>
  <div class="qexplain">Price increase is 'inflation'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "slug": "culture-traditions-and-the-arts",
        "title": "Part 5 · Culture, Traditions & the Arts",
        "short_title": "Part 5",
        "subtitle": "Cross-cultural customs, literary analysis, artistic movements, and cultural identity.",
        "eyebrow": "FCE Topic: Culture",
        "stripe": "#a3195b",
        "topic_title": "Culture, Traditions & the Arts",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can evaluate cultural heritage, artistic expressions, and cross-cultural traditions.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Artistic Movements</td><td>aesthetic, avant-garde, expressionism, medium</td><td>The gallery features <b>avant-garde</b> contemporary installations.</td></tr>
<tr><td>Cultural Identity</td><td>heritage, folklore, preservation, assimilation</td><td>Efforts are underway for the <b>preservation</b> of regional dialects.</td></tr>
<tr><td>Literary Analysis</td><td>allegory, narrative perspective, symbolism, motif</td><td>Light serves as a recurring <b>symbolism</b> throughout the novel.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The architect focused on minimalist <b>aesthetics</b>.</li><li>The story is a powerful political <b>allegory</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">This painting has a beautiful aesthetic value.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>This painting has great <b>aesthetic appeal</b> / value.</span></div>
 </div>
</div>
<div class="checklist" data-key="culture-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use artistic criticism vocabulary (aesthetic, avant-garde, symbolism)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss cultural preservation and heritage</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'New and experimental ideas in art and literature are described as ___.'</div>
  <div class="qopts"><button class="qopt">allegory</button><button class="qopt">avant-garde</button><button class="qopt">folklore</button></div>
  <div class="qexplain">Experimental art is 'avant-garde'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A story that can be interpreted to reveal a hidden moral meaning is an ___.'</div>
  <div class="qopts"><button class="qopt">allegory</button><button class="qopt">aesthetic</button><button class="qopt">preservation</button></div>
  <div class="qexplain">Symbolic story is an 'allegory'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "slug": "environment-and-sustainability-advanced",
        "title": "Part 6 · Environment & Sustainability (Advanced)",
        "short_title": "Part 6",
        "subtitle": "Climate change in depth, conservation policy, biodiversity loss, and sustainable choices.",
        "eyebrow": "FCE Topic: Environment Advanced",
        "stripe": "#3562e0",
        "topic_title": "Environment & Sustainability (Advanced)",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss climate mitigation strategies, ecosystem resilience, and circular economy principles.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Climate Action</td><td>decarbonization, carbon neutrality, offsetting</td><td>The corporation pledged to achieve <b>carbon neutrality</b> by 2040.</td></tr>
<tr><td>Ecosystems</td><td>biodiversity loss, ecological footprint, resilience</td><td>Protecting wetlands prevents further <b>biodiversity loss</b>.</td></tr>
<tr><td>Sustainable Economy</td><td>circular economy, fast fashion, resource depletion</td><td>A <b>circular economy</b> minimizes waste by reusing materials.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Rapid urban expansion leads to severe <b>resource depletion</b>.</li><li>Many consumers are rejecting <b>fast fashion</b> in favor of durable clothing.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We must stop the climate change quickly.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We must combat <b>climate change</b> urgency. (No article before 'climate change'!)</span></div>
 </div>
</div>
<div class="checklist" data-key="env-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use advanced climate concepts (carbon neutrality, decarbonization)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss circular economy and fast fashion impacts</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Achieving net-zero carbon emissions is known as carbon ___.'</div>
  <div class="qopts"><button class="qopt">neutrality</button><button class="qopt">depletion</button><button class="qopt">resilience</button></div>
  <div class="qexplain">Net-zero balance is carbon 'neutrality'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'An economic model designed to eliminate waste and keep materials in use is a ___.'</div>
  <div class="qopts"><button class="qopt">fast fashion</button><button class="qopt">circular economy</button><button class="qopt">offsetting</button></div>
  <div class="qexplain">Zero-waste model is 'circular economy'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "slug": "media-advertising-and-public-opinion",
        "title": "Part 7 · Media, Advertising & Public Opinion",
        "short_title": "Part 7",
        "subtitle": "Media literacy, marketing techniques, misinformation, rhetoric, and opinion polling.",
        "eyebrow": "FCE Topic: Media & Public Opinion",
        "stripe": "#1c8f56",
        "topic_title": "Media, Advertising & Public Opinion",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can critique advertising persuasion techniques, media bias, and public opinion trends.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Media Literacy</td><td>media bias, sensationalism, fact-checking, echo chamber</td><td>Sensationalism in journalism distorts public perception.</td></tr>
<tr><td>Advertising</td><td>sponsorship, endorsement, consumer manipulation, slogan</td><td>The athlete signed a lucrative brand <b>endorsement</b> deal.</td></tr>
<tr><td>Public Opinion</td><td>opinion poll, narrative, misinformation, consensus</td><td><b>Opinion polls</b> indicate shifting voter priorities.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Social media algorithms can create dangerous <b>echo chambers</b>.</li><li>Independent journalists engaged in rigorous <b>fact-checking</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The advertizing was very effective.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The <b>advertising campaign</b> was very effective.</span></div>
 </div>
</div>
<div class="checklist" data-key="media-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Critique media bias and sensationalism</span></label>
 <label class="check-item"><input type="checkbox"><span>Use marketing terms (endorsement, echo chamber, opinion poll)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'An environment where a person only encounters information reflecting their own views is an ___.'</div>
  <div class="qopts"><button class="qopt">opinion poll</button><button class="qopt">echo chamber</button><button class="qopt">sponsorship</button></div>
  <div class="qexplain">Isolated views environment is an 'echo chamber'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Deliberately exaggerated news coverage designed to provoke emotion is ___.'</div>
  <div class="qopts"><button class="qopt">sensationalism</button><button class="qopt">endorsement</button><button class="qopt">consensus</button></div>
  <div class="qexplain">Exaggerated news style is 'sensationalism'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-8",
        "file": "part-8.html",
        "slug": "education-and-personal-development",
        "title": "Part 8 · Education & Personal Development",
        "short_title": "Part 8",
        "subtitle": "Lifelong learning, self-improvement, critical thinking, and alternative educational models.",
        "eyebrow": "FCE Topic: Education",
        "stripe": "#c9740a",
        "topic_title": "Education & Personal Development",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss critical thinking skills, alternative learning models, and personal development goals.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Learning Models</td><td>lifelong learning, vocational training, holistic education</td><td>Higher education emphasizes <b>lifelong learning</b> habits.</td></tr>
<tr><td>Cognitive Skills</td><td>critical thinking, problem-solving, cognitive agility</td><td>Schools must foster <b>critical thinking</b> rather than rote memorization.</td></tr>
<tr><td>Development</td><td>mentor, self-discipline, goal-setting, adaptability</td><td>Working with an experienced <b>mentor</b> accelerated his career.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>Vocational training</b> offers practical skills for technical careers.</li><li>In a rapidly changing world, <b>adaptability</b> is crucial.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He made a big self-development.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He focused on <b>personal development</b> / self-improvement.</span></div>
 </div>
</div>
<div class="checklist" data-key="edu-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Discuss critical thinking vs rote memorization</span></label>
 <label class="check-item"><input type="checkbox"><span>Use development terms (lifelong learning, mentor, adaptability)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Analyzing facts objectively to form a judgment is ___.'</div>
  <div class="qopts"><button class="qopt">critical thinking</button><button class="qopt">vocational training</button><button class="qopt">rote memorization</button></div>
  <div class="qexplain">Objective analysis is 'critical thinking'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Education focused on practical skills for specific trades is ___.'</div>
  <div class="qopts"><button class="qopt">holistic education</button><button class="qopt">vocational training</button><button class="qopt">cognitive agility</button></div>
  <div class="qexplain">Trade-focused education is 'vocational training'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-9",
        "file": "part-9.html",
        "slug": "health-psychology-and-wellbeing",
        "title": "Part 9 · Health, Psychology & Wellbeing",
        "short_title": "Part 9",
        "subtitle": "Mental health, non-clinical psychological terms, emotional intelligence, and resilience.",
        "eyebrow": "FCE Topic: Health & Fitness",
        "stripe": "#7c4fd6",
        "topic_title": "Health, Psychology & Wellbeing",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss psychological resilience, emotional intelligence, and work-life balance non-clinically.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Psychology</td><td>emotional intelligence, coping mechanism, mindset, perception</td><td>Developing <b>emotional intelligence</b> improves team leadership.</td></tr>
<tr><td>Wellbeing</td><td>work-life balance, burnout prevention, mental clarity</td><td>Regular exercise contributes to overall <b>mental clarity</b>.</td></tr>
<tr><td>Behavior</td><td>habit formation, motivation, self-esteem, empathy</td><td>Positive feedback boosts employee <b>self-esteem</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Meditation serves as a healthy <b>coping mechanism</b> for stress.</li><li>A growth <b>mindset</b> encourages viewing mistakes as learning opportunities.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He has a high emotional intelligent.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He has high <b>emotional intelligence</b>. (Noun required after adjective!)</span></div>
 </div>
</div>
<div class="checklist" data-key="psych-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use terms like emotional intelligence and growth mindset</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss coping mechanisms for daily stress</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'The ability to understand and manage one's emotions effectively is ___.'</div>
  <div class="qopts"><button class="qopt">coping mechanism</button><button class="qopt">emotional intelligence</button><button class="qopt">habit formation</button></div>
  <div class="qexplain">Managing emotions is 'emotional intelligence'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A strategy used to manage difficult emotional situations is a ___.'</div>
  <div class="qopts"><button class="qopt">coping mechanism</button><button class="qopt">growth mindset</button><button class="qopt">perception</button></div>
  <div class="qexplain">Stress management strategy is a 'coping mechanism'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-10",
        "file": "part-10.html",
        "slug": "relationships-and-communication-styles",
        "title": "Part 10 · Relationships & Communication Styles",
        "short_title": "Part 10",
        "subtitle": "Interpersonal dynamics, active listening, non-verbal cues, and conflict mediation.",
        "eyebrow": "FCE Topic: Relationships",
        "stripe": "#a3195b",
        "topic_title": "Relationships & Communication Styles",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can evaluate communication styles (assertive, passive), body language cues, and interpersonal dynamics.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Communication Styles</td><td>assertive, persuasive, diplomatic, passive-aggressive</td><td>She stated her request in a clear, <b>assertive</b> manner.</td></tr>
<tr><td>Non-Verbal Cues</td><td>body language, gesture, eye contact, tone of voice</td><td>Maintaining direct <b>eye contact</b> signals confidence.</td></tr>
<tr><td>Interpersonal Dynamics</td><td>rapport, mediation, boundary, constructive criticism</td><td>The manager established a strong <b>rapport</b> with the team.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Constructive <b>mediation</b> resolved the workplace dispute.</li><li>Pay attention to subtle changes in <b>tone of voice</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He was very aggressive when asking politely.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He was firm and <b>assertive</b> without being aggressive.</span></div>
 </div>
</div>
<div class="checklist" data-key="rel-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish assertive from aggressive communication</span></label>
 <label class="check-item"><input type="checkbox"><span>Use terms like rapport, mediation, and body language</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Expressing views confidently and directly without aggression is being ___.'</div>
  <div class="qopts"><button class="qopt">assertive</button><button class="qopt">passive-aggressive</button><button class="qopt">diplomatic</button></div>
  <div class="qexplain">Confident non-aggressive communication is 'assertive'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A close and harmonious relationship based on mutual understanding is ___.'</div>
  <div class="qopts"><button class="qopt">mediation</button><button class="qopt">rapport</button><button class="qopt">boundary</button></div>
  <div class="qexplain">Harmonious connection is 'rapport'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-11",
        "file": "part-11.html",
        "slug": "abstract-and-academic-concepts",
        "title": "Part 11 · Abstract & Academic Concepts",
        "short_title": "Part 11",
        "subtitle": "Vocabulary for discussing abstract ideas: identity, freedom, justice, progress, and ethics.",
        "eyebrow": "FCE Writing (Essay) & Speaking Part 4",
        "stripe": "#3562e0",
        "topic_title": "Abstract & Academic Concepts",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can construct essay arguments and debate abstract concepts like justice, freedom, and societal progress.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Abstract Concepts</td><td>identity, freedom of speech, justice, fundamental rights</td><td><b>Freedom of speech</b> is a cornerstone of democratic society.</td></tr>
<tr><td>Academic Analysis</td><td>hypothesis, perspective, paradox, fundamental, paradigm</td><td>The study presents a fascinating economic <b>paradox</b>.</td></tr>
<tr><td>Evaluation</td><td>implication, criterion, justification, validity</td><td>What are the long-term <b>implications</b> of this policy?</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Researchers challenged the existing scientific <b>paradigm</b>.</li><li>The report outlines key <b>criteria</b> for evaluating success.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">What is the criteria for this selection?</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>What <b>are</b> the <b>criteria</b>? / What is the single <b>criterion</b>? (Criteria is plural!)</span></div>
 </div>
</div>
<div class="checklist" data-key="abstract-b2">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish singular criterion from plural criteria</span></label>
 <label class="check-item"><input type="checkbox"><span>Use academic essay vocabulary (paradox, paradigm, implication)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Plural form of the noun criterion is ___.'</div>
  <div class="qopts"><button class="qopt">criterions</button><button class="qopt">criteria</button><button class="qopt">criterias</button></div>
  <div class="qexplain">Plural form is 'criteria'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A seemingly contradictory statement that may be true is a ___.'</div>
  <div class="qopts"><button class="qopt">paradox</button><button class="qopt">paradigm</button><button class="qopt">implication</button></div>
  <div class="qexplain">Contradictory true statement is a 'paradox'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }
]

def render_topbar(is_topic=False):
    rel = "../" if is_topic else ""
    links = [f'<a href="{rel}part-{i}.html">Part {i}</a>' for i in range(1, 12)]
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
 <p class="lead">Precision, Nuance & Register. 11 thematic modules aligned with Cambridge B2 First (FCE) Use of English and Speaking syllabus.</p>
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

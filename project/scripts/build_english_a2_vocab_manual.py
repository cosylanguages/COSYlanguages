#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/en/vocabulary/a2/index.html, 17 section hub HTML pages (part-1.html .. part-17.html),
assets (style.css, app.js), and 17 topic HTML pages in manuals/en/vocabulary/a2/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level A2 Vocabulary Manual Stylesheet */
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

.badge-reg { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 800; font-family: var(--font-mono); margin-right: 6px; text-transform: uppercase; }
.badge-reg.uk { background: #e0e8ff; color: #2b50b8; }
.badge-reg.us { background: #ffe0e0; color: #c02b2b; }

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

APP_JS = """// COSYlanguages A2 Vocabulary Manual Shared JS
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
     var key = 'cosy-a2-vocab-check-' + box.getAttribute('data-key');
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
        "slug": "vocabulary-building-toolkit",
        "title": "Part 1 · Vocabulary-Building Toolkit",
        "short_title": "Part 1",
        "subtitle": "Essential phrasal verbs, word formation prefixes/suffixes, everyday collocations, and degree adverbs.",
        "eyebrow": "A2 Key Reading Parts 4–5 Toolkit",
        "stripe": "#3562e0",
        "topic_title": "Vocabulary-Building Toolkit (Phrasal Verbs & Collocations)",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can use essential phrasal verbs, prefixes/suffixes, and degree adverbs to construct precise sentences.
</div>
<div class="box rule-box">
  <p><strong>Toolkit Core:</strong> Front-loaded toolset for A2 Key. Phrasal verbs (*get up, look for, turn on/off, give up*), prefixes (*un-, re-, dis-*), suffixes (*-ful, -less, -able*), and degree adverbs (*fairly, quite, extremely, a bit*).</p>
</div>
<div class="table-wrap"><table>
<thead><tr><th>Category</th><th>Words / Collocations</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Phrasal Verbs</td><td>get up, look for, turn on/off, give up</td><td>I need to <b>look for</b> my keys before we leave.</td></tr>
<tr><td>Word Formation</td><td>unhappy, rewrite, disagree, helpful, hopeless</td><td>This dictionary is very <b>helpful</b>.</td></tr>
<tr><td>Collocations</td><td>make a decision, take a photo, have a shower</td><td>Let's <b>take a photo</b> in front of the museum.</td></tr>
<tr><td>Degree Adverbs</td><td>fairly, quite, extremely, a bit</td><td>The exam was <b>quite difficult</b>, but I passed.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Don't <b>give up</b> on learning new words every day!</li><li>It's <b>extremely hot</b> outside, so take some water.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I did a decision yesterday.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I made a decision yesterday.</span></div>
 </div>
</div>
<div class="checklist" data-key="vocab-toolkit">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use A2 phrasal verbs in daily descriptions</span></label>
 <label class="check-item"><input type="checkbox"><span>Form negative adjectives with un- and dis-</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Can you ___ the TV, please? I want to watch the news.'</div>
  <div class="qopts"><button class="qopt">get up</button><button class="qopt">turn on</button><button class="qopt">look for</button></div>
  <div class="qexplain">Activating an electronic device uses 'turn on'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'She was ___ tired after the long journey.'</div>
  <div class="qopts"><button class="qopt">extremely</button><button class="qopt">fairly to</button><button class="qopt">un-</button></div>
  <div class="qexplain">Modifying an adjective with high intensity uses 'extremely'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "slug": "people-relationships-and-life-stages",
        "title": "Part 2 · People, Relationships & Life Stages",
        "short_title": "Part 2",
        "subtitle": "Extended family, personality traits, stages of life, and physical appearance in detail.",
        "eyebrow": "A2 Key Topic: People",
        "stripe": "#1c8f56",
        "topic_title": "People, Relationships & Life Stages",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe relatives, colleagues, personality traits, and life stages in detail.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Relationships</td><td>colleague, neighbour, in-laws, step-brother</td><td>My <b>colleague</b> helped me finish the report.</td></tr>
<tr><td>Personality</td><td>friendly, shy, generous, stubborn, reliable</td><td>He is very <b>generous</b> and always buys lunch.</td></tr>
<tr><td>Life Stages</td><td>childhood, teenager, adulthood, retirement</td><td>During his <b>retirement</b>, he enjoys gardening.</td></tr>
<tr><td>Appearance</td><td>curly hair, slim, middle-aged, handsome</td><td>She has dark <b>curly hair</b> and green eyes.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>My <b>neighbour</b> is quiet and friendly.</li><li>In my <b>childhood</b>, we lived in a small coastal village.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He is a very stubborn person, he doesn't listen never.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He is a very stubborn person; he never listens.</span></div>
 </div>
</div>
<div class="checklist" data-key="people-relationships">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Describe family and workplace relationships</span></label>
 <label class="check-item"><input type="checkbox"><span>Use nuanced personality adjectives</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'A person you work with is your ___.'</div>
  <div class="qopts"><button class="qopt">colleague</button><button class="qopt">neighbour</button><button class="qopt">in-law</button></div>
  <div class="qexplain">Workplace peer is a 'colleague'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Someone who refuses to change their mind is ___.'</div>
  <div class="qopts"><button class="qopt">generous</button><button class="qopt">stubborn</button><button class="qopt">shy</button></div>
  <div class="qexplain">Refusing to change opinion means 'stubborn'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "slug": "home-neighbourhood-and-environment",
        "title": "Part 3 · Home, Neighbourhood & Environment",
        "short_title": "Part 3",
        "subtitle": "Renting, neighbourhood features, basic environmental problems, and weather phenomena.",
        "eyebrow": "A2 Key Topic: Places & Nature",
        "stripe": "#c9740a",
        "topic_title": "Home, Neighbourhood & Environment",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss housing options, renting terms, neighbourhood amenities, and weather events.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Topic</th><th>Key Terms</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Renting & Housing</td><td>flat, landlord, rent, deposit, balcony</td><td>The <b>landlord</b> requested a one-month <b>deposit</b>.</td></tr>
<tr><td>Neighbourhood</td><td>suburb, pedestrian area, park, local shop</td><td>We live in a quiet <b>suburb</b> outside the city.</td></tr>
<tr><td>Environment</td><td>pollution, litter, recycling, climate</td><td>Remember to put plastic bottles in the <b>recycling</b> bin.</td></tr>
<tr><td>Weather</td><td>storm, flood, drought, fog, heavy rain</td><td>The flight was delayed due to thick <b>fog</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Our new apartment has a spacious <b>balcony</b> facing south.</li><li>The heavy storm caused a minor <b>flood</b> on our street.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The climate today is very rainy.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The weather today is very rainy. (Weather = today; Climate = long term)</span></div>
 </div>
</div>
<div class="checklist" data-key="home-environment">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use rental terms like deposit and landlord</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss weather phenomena like fog and storm</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Money you pay to hold an apartment before moving in is a ___.'</div>
  <div class="qopts"><button class="qopt">rent</button><button class="qopt">deposit</button><button class="qopt">balcony</button></div>
  <div class="qexplain">Security payment is a 'deposit'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Thick cloud near the ground that makes seeing difficult is ___.'</div>
  <div class="qopts"><button class="qopt">fog</button><button class="qopt">drought</button><button class="qopt">litter</button></div>
  <div class="qexplain">Ground-level cloud is 'fog'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "slug": "daily-life-free-time-and-entertainment",
        "title": "Part 4 · Daily Life, Free Time & Entertainment",
        "short_title": "Part 4",
        "subtitle": "Hobbies, cinema, music, streaming, and describing past leisure experiences.",
        "eyebrow": "A2 Key Topic: Leisure",
        "stripe": "#7c4fd6",
        "topic_title": "Daily Life, Free Time & Entertainment",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss entertainment choices, streaming habits, and recount leisure experiences.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Category</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Media & Streaming</td><td>series, episode, playlist, stream, channel</td><td>I watched three <b>episodes</b> of that new series.</td></tr>
<tr><td>Hobbies & Sports</td><td>cycling, photography, gym, board games</td><td>He took up <b>photography</b> during his free time.</td></tr>
<tr><td>Past Experience</td><td>"It was the first time I...", "I've never tried..."</td><td><b>It was the first time I</b> visited an art gallery.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>What kind of music <b>playlists</b> do you listen to when working?</li><li>I've never tried <b>windsurfing</b>, but I'd love to try it.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">It was the first time I go to cinema.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>It was the first time I went to the cinema.</span></div>
 </div>
</div>
<div class="checklist" data-key="daily-leisure">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Talk about streaming TV shows and music playlists</span></label>
 <label class="check-item"><input type="checkbox"><span>Use past experience frames naturally</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'A single part of a TV series is an ___.'</div>
  <div class="qopts"><button class="qopt">episode</button><button class="qopt">playlist</button><button class="qopt">channel</button></div>
  <div class="qexplain">Single installment of a show is an 'episode'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Complete the sentence: "I've never ___ scuba diving."'</div>
  <div class="qopts"><button class="qopt">try</button><button class="qopt">tried</button><button class="qopt">trying</button></div>
  <div class="qexplain">Present perfect experience takes past participle 'tried'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "slug": "travel-and-getting-around",
        "title": "Part 5 · Travel & Getting Around",
        "short_title": "Part 5",
        "subtitle": "Airport procedures, booking rooms, asking detailed directions, and travel problems.",
        "eyebrow": "A2 Key Topic: Travel & Transport",
        "stripe": "#a3195b",
        "topic_title": "Travel & Getting Around",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can navigate airport check-in, book hotel accommodation, and handle travel delays.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Context</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Airport & Station</td><td>boarding pass, gate, luggage, check-in desk</td><td>Please show your <b>boarding pass</b> at gate 4.</td></tr>
<tr><td>Hotel & Booking</td><td>reservation, single/double room, air conditioning</td><td>I have a <b>reservation</b> under the name Smith.</td></tr>
<tr><td>Travel Problems</td><td>delayed, cancelled, lost luggage, missed connection</td><td>Our train was <b>delayed</b> by forty minutes.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Excuse me, where is the <b>baggage reclaim</b> area?</li><li>We missed our <b>connection</b> in Frankfurt due to bad weather.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I have lost my luggages.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I have lost my luggage. (Luggage is uncountable!)</span></div>
 </div>
</div>
<div class="checklist" data-key="travel-transport">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use airport terms like boarding pass and gate</span></label>
 <label class="check-item"><input type="checkbox"><span>Report travel disruptions (delayed, cancelled)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'If a flight leaves later than scheduled, it is ___.'</div>
  <div class="qopts"><button class="qopt">cancelled</button><button class="qopt">delayed</button><button class="qopt">booked</button></div>
  <div class="qexplain">Leaving late means 'delayed'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The document that lets you board an airplane is a ___.'</div>
  <div class="qopts"><button class="qopt">boarding pass</button><button class="qopt">reservation</button><button class="qopt">gate</button></div>
  <div class="qexplain">Boarding document is a 'boarding pass'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "slug": "food-health-and-the-body",
        "title": "Part 6 · Food, Health & the Body",
        "short_title": "Part 6",
        "subtitle": "Symptoms, doctor appointments, pharmacy terms, diets, and emergency vocabulary.",
        "eyebrow": "A2 Key Topic: Health & Body",
        "stripe": "#3562e0",
        "topic_title": "Food, Health & the Body",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe illness symptoms to a doctor or pharmacist and discuss dietary needs.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Symptoms & Body</td><td>headache, fever, sore throat, cough, allergy</td><td>I have a <b>sore throat</b> and a mild fever.</td></tr>
<tr><td>Medical Services</td><td>prescription, painkillers, appointment, doctor</td><td>The pharmacist gave me <b>painkillers</b>.</td></tr>
<tr><td>Diet & Food</td><td>vegetarian, ingredients, calories, balanced diet</td><td>Are there any nut <b>ingredients</b> in this dish?</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>I made an <b>appointment</b> with the doctor for 10 AM.</li><li>If you have an <b>allergy</b>, please inform the waiter.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I have a big head pain.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I have a bad headache.</span></div>
 </div>
</div>
<div class="checklist" data-key="health-food">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Name common illness symptoms (fever, cough, sore throat)</span></label>
 <label class="check-item"><input type="checkbox"><span>Ask for prescription medicine at a pharmacy</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Medicine to reduce pain is called ___.'</div>
  <div class="qopts"><button class="qopt">painkillers</button><button class="qopt">prescriptions</button><button class="qopt">allergies</button></div>
  <div class="qexplain">Pain-reducing medicine is 'painkillers'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'When your throat hurts when swallowing, you have a ___.'</div>
  <div class="qopts"><button class="qopt">headache</button><button class="qopt">sore throat</button><button class="qopt">fever</button></div>
  <div class="qexplain">Painful throat is a 'sore throat'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "slug": "shopping-and-services",
        "title": "Part 7 · Shopping & Services",
        "short_title": "Part 7",
        "subtitle": "Comparing prices, quality, returns, complaints, bank, post office, and online shopping.",
        "eyebrow": "A2 Key Topic: Shopping & Services",
        "stripe": "#1c8f56",
        "topic_title": "Shopping & Services",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage retail purchases, request refunds, handle bank transactions, and shop online.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Context</th><th>Key Terms</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Retail & Sales</td><td>receipt, refund, discount, special offer, fitting room</td><td>I would like a <b>refund</b>, here is my <b>receipt</b>.</td></tr>
<tr><td>Services (Bank/Post)</td><td>account, parcel, postage stamp, transfer</td><td>I need to send this <b>parcel</b> to Germany.</td></tr>
<tr><td>Online Shopping</td><td>delivery, basket, checkout, track order</td><td>You can <b>track your order</b> using this code.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Is there a <b>discount</b> for students?</li><li>The <b>fitting room</b> is over there on the left.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Can I have a recipe for this shirt?</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Can I have a receipt for this shirt? (Recipe = cooking instructions!)</span></div>
 </div>
</div>
<div class="checklist" data-key="shopping-services">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish receipt (purchase record) from recipe (food)</span></label>
 <label class="check-item"><input type="checkbox"><span>Ask for refunds and fitting rooms in stores</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Money returned to a customer when returning an item is a ___.'</div>
  <div class="qopts"><button class="qopt">receipt</button><button class="qopt">refund</button><button class="qopt">discount</button></div>
  <div class="qexplain">Returned money is a 'refund'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The paper showing proof of payment is a ___.'</div>
  <div class="qopts"><button class="qopt">receipt</button><button class="qopt">recipe</button><button class="qopt">parcel</button></div>
  <div class="qexplain">Proof of payment is a 'receipt'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-8",
        "file": "part-8.html",
        "slug": "school-work-and-technology",
        "title": "Part 8 · School, Work & Technology",
        "short_title": "Part 8",
        "subtitle": "School subjects, workplace terms, job interviews, internet, social media, and skills.",
        "eyebrow": "A2 Key Topic: Work & Tech",
        "stripe": "#c9740a",
        "topic_title": "School, Work & Technology",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can outline job responsibilities, describe digital tools, and discuss educational backgrounds.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Work & Career</td><td>job interview, qualification, manager, salary</td><td>She applied for a job and got an <b>interview</b>.</td></tr>
<tr><td>Technology & Web</td><td>password, download, attachment, Wi-Fi network</td><td>I sent the file as an email <b>attachment</b>.</td></tr>
<tr><td>Education & Skills</td><td>subject, degree, fluent, certificate</td><td>He holds a <b>degree</b> in computer science.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>What is the <b>Wi-Fi password</b> here?</li><li>She is <b>fluent</b> in English and French.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I made a download of the document.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I downloaded the document.</span></div>
 </div>
</div>
<div class="checklist" data-key="work-tech">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use tech vocabulary (attachment, password, download)</span></label>
 <label class="check-item"><input type="checkbox"><span>Describe education qualifications and language fluency</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'A document added to an email is an ___.'</div>
  <div class="qopts"><button class="qopt">attachment</button><button class="qopt">interview</button><button class="qopt">qualification</button></div>
  <div class="qexplain">Email file is an 'attachment'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'If you speak a language effortlessly, you are ___.'</div>
  <div class="qopts"><button class="qopt">stubborn</button><button class="qopt">fluent</button><button class="qopt">delayed</button></div>
  <div class="qexplain">Speaking smoothly means 'fluent'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-9",
        "file": "part-9.html",
        "slug": "opinions-feelings-and-social-language",
        "title": "Part 9 · Opinions, Feelings & Social Language",
        "short_title": "Part 9",
        "subtitle": "Nuanced emotions (relieved, proud), agreeing/disagreeing, and giving suggestions.",
        "eyebrow": "A2 Key Topic: Personal Feelings",
        "stripe": "#7c4fd6",
        "topic_title": "Opinions, Feelings & Social Language",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can express emotional states, offer suggestions, and state personal opinions politely.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Function</th><th>Vocabulary / Expressions</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Nuanced Feelings</td><td>relieved, disappointed, proud, nervous</td><td>I felt so <b>relieved</b> when the exam ended.</td></tr>
<tr><td>Giving Advice</td><td>"Why don't you...", "You should try..."</td><td><b>Why don't you</b> take a break?</td></tr>
<tr><td>Opinions & Viewpoints</td><td>in my opinion, personally, I reckon</td><td><b>In my opinion</b>, it's a great idea.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Her parents were very <b>proud</b> of her graduation.</li><li><b>Why don't we</b> meet at the café around 5 PM?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am very relief today.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I am very relieved today.</span></div>
 </div>
</div>
<div class="checklist" data-key="feelings-social">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use adjective feelings like relieved and disappointed</span></label>
 <label class="check-item"><input type="checkbox"><span>Form suggestions with 'Why don't you...?'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Feeling happy because something bad did not happen is ___.'</div>
  <div class="qopts"><button class="qopt">nervous</button><button class="qopt">relieved</button><button class="qopt">disappointed</button></div>
  <div class="qexplain">Feeling calm after worry is 'relieved'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Complete the suggestion frame: "___ we go to the cinema?"'</div>
  <div class="qopts"><button class="qopt">Why don't</button><button class="qopt">How about to</button><button class="qopt">Should we to</button></div>
  <div class="qexplain">Suggestion frame is 'Why don't...'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-10",
        "file": "part-10.html",
        "slug": "describing-change-and-comparison",
        "title": "Part 10 · Describing Change & Comparison",
        "short_title": "Part 10",
        "subtitle": "Comparative adverbs, trend verbs (improve, increase), and linking words in context.",
        "eyebrow": "A2 Key Writing Part 7 & B1 Bridge",
        "stripe": "#a3195b",
        "topic_title": "Describing Change & Comparison",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe progress, statistical shifts, trends, and link ideas in short essays/stories.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Trend Verbs</td><td>improve, get better/worse, increase, decrease</td><td>His English has <b>improved</b> significantly.</td></tr>
<tr><td>Comparative Context</td><td>more and more, slightly better, far more</td><td>Houses are becoming <b>more and more</b> expensive.</td></tr>
<tr><td>Linking Words</td><td>however, although, because of, so that</td><td>We arrived on time <b>although</b> traffic was heavy.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Sales <b>increased</b> by ten percent last month.</li><li>I stayed up late <b>so that</b> I could finish the project.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Because of it rained, we stayed inside.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Because it rained, we stayed inside. / Because of the rain, we stayed inside.</span></div>
 </div>
</div>
<div class="checklist" data-key="change-comparison">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Describe trends using increase, decrease, improve</span></label>
 <label class="check-item"><input type="checkbox"><span>Connect contrasting sentences using however and although</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'To become higher in number or quantity is to ___.'</div>
  <div class="qopts"><button class="qopt">increase</button><button class="qopt">decrease</button><button class="qopt">disappear</button></div>
  <div class="qexplain">Becoming higher is to 'increase'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. '___ it was raining, we enjoyed our walk.'</div>
  <div class="qopts"><button class="qopt">Because of</button><button class="qopt">Although</button><button class="qopt">So that</button></div>
  <div class="qexplain">Connecting a clause of concession takes 'Although'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-11",
        "file": "part-11.html",
        "slug": "expanded-transport-and-driving",
        "title": "Part 11 · Expanded Transport & Driving",
        "short_title": "Part 11",
        "subtitle": "Driving rules, road navigation, vehicle parts, and public transit systems.",
        "eyebrow": "A2 Key Topic: Transport & Driving",
        "stripe": "#3562e0",
        "topic_title": "Expanded Transport & Driving",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss driving regulations, road directions, vehicle components, and transit routes.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Driving & Navigation</td><td>driver's license, seatbelt, speed limit, traffic light, roundabout, motorway</td><td>Always wear your <b>seatbelt</b> before driving.</td></tr>
<tr><td>Vehicle Parts</td><td>steering wheel, brakes, engine, tyre, windscreen, fuel tank</td><td>He hit the <b>brakes</b> to avoid the dog.</td></tr>
<tr><td>Public Transit</td><td>timetable, platform, conductor, fare, single/return ticket</td><td>What time does the next train leave from <b>platform 3</b>?</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Be careful when changing lanes on the <b>motorway</b>.</li><li>You must lower your speed near a school zone to obey the <b>speed limit</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I entered into the bus at the station.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I got on the bus at the station.</span></div>
 </div>
</div>
<div class="checklist" data-key="transport-driving">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Name essential vehicle parts like brakes, engine, and steering wheel</span></label>
 <label class="check-item"><input type="checkbox"><span>Describe road navigation terms (roundabout, speed limit, motorway)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'The safety strap you wear in a car is a ___.'</div>
  <div class="qopts"><button class="qopt">windscreen</button><button class="qopt">seatbelt</button><button class="qopt">roundabout</button></div>
  <div class="qexplain">Car safety belt is a 'seatbelt'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The part of the vehicle used to stop or slow down is the ___.'</div>
  <div class="qopts"><button class="qopt">brakes</button><button class="qopt">engine</button><button class="qopt">tyre</button></div>
  <div class="qexplain">Stopping mechanism is 'brakes'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-12",
        "file": "part-12.html",
        "slug": "emergencies-and-accidents",
        "title": "Part 12 · Emergencies & Accidents",
        "short_title": "Part 12",
        "subtitle": "Emergency services, reporting incidents, lost property, and natural disasters.",
        "eyebrow": "A2 Key Topic: Emergencies & Safety",
        "stripe": "#e55353",
        "topic_title": "Emergencies & Accidents",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can call emergency services, describe incidents, report lost property, and handle emergency situations.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Category</th><th>Key Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Emergency Services</td><td>ambulance, police officer, firefighter, first aid, emergency call</td><td>Call an <b>ambulance</b> immediately!</td></tr>
<tr><td>Incidents & Crimes</td><td>accident, collision, theft, burglary, injury, lost property</td><td>I need to report a <b>theft</b> at the police station.</td></tr>
<tr><td>Disasters & Safety</td><td>flood, earthquake, storm damage, fire alarm, evacuation</td><td>Everyone left safely during the <b>fire alarm</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The paramedics provided <b>first aid</b> before heading to the hospital.</li><li>Excuse me, is there a <b>lost property office</b> nearby?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I phoned to the emergency number.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I called the emergency services number.</span></div>
 </div>
</div>
<div class="checklist" data-key="emergencies-accidents">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Call emergency services and state location</span></label>
 <label class="check-item"><input type="checkbox"><span>Report stolen items or lost property clearly</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 2}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Initial medical assistance given to an injured person is ___.'</div>
  <div class="qopts"><button class="qopt">first aid</button><button class="qopt">lost property</button><button class="qopt">burglary</button></div>
  <div class="qexplain">Immediate care is 'first aid'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'If your wallet is stolen, you should report a ___.'</div>
  <div class="qopts"><button class="qopt">flood</button><button class="qopt">collision</button><button class="qopt">theft</button></div>
  <div class="qexplain">Stolen property reporting is a 'theft'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-13",
        "file": "part-13.html",
        "slug": "culture-society-and-celebrations",
        "title": "Part 13 · Culture, Society & Celebrations",
        "short_title": "Part 13",
        "subtitle": "National holidays, social etiquette, parties, gift giving, and cultural customs.",
        "eyebrow": "A2 Key Topic: Culture & Customs",
        "stripe": "#1c8f56",
        "topic_title": "Culture, Society & Celebrations",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss cultural customs, social etiquette, celebrate milestones, and exchange gifts.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Context</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Holidays & Etiquette</td><td>custom, tradition, social norms, eye contact, handshake, greeting</td><td>A firm <b>handshake</b> is customary in business greetings.</td></tr>
<tr><td>Celebrations & Parties</td><td>festival, anniversary, wedding, birthday, party host, toast</td><td>Let's make a <b>toast</b> to the happy couple!</td></tr>
<tr><td>Gifts & Hospitality</td><td>invitation, gift wrap, present, gathering, congratulate</td><td>Thank you for the lovely birthday <b>present</b>!</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>How do people celebrate <b>New Year's Eve</b> in your home city?</li><li>I sent an <b>invitation</b> to all my friends for the housewarming party.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I congratulate you for your birthday.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I congratulate you on your birthday! / Happy birthday!</span></div>
 </div>
</div>
<div class="checklist" data-key="culture-society">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Describe greeting customs (handshake, eye contact)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use celebration phrases (make a toast, wrap a present)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'To raise a glass and drink to celebrate someone is to make a ___.'</div>
  <div class="qopts"><button class="qopt">handshake</button><button class="qopt">toast</button><button class="qopt">custom</button></div>
  <div class="qexplain">Drinking to honor someone is making a 'toast'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A traditional social rule or behavior in a society is a ___.'</div>
  <div class="qopts"><button class="qopt">custom</button><button class="qopt">wrapping paper</button><button class="qopt">host</button></div>
  <div class="qexplain">Cultural practice is a 'custom'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-14",
        "file": "part-14.html",
        "slug": "personal-development-and-goals",
        "title": "Part 14 · Personal Development & Goals",
        "short_title": "Part 14",
        "subtitle": "Goal setting, time management, decision making, habits, and self-improvement.",
        "eyebrow": "A2 Key Topic: Goals & Habits",
        "stripe": "#c9740a",
        "topic_title": "Personal Development & Goals",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can outline personal goals, manage schedules, evaluate options, and build positive study habits.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Area</th><th>Key Terms</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Goals & Success</td><td>goal, target, achievement, failure, study habit, self-improvement</td><td>My main <b>goal</b> is to achieve B1 fluency.</td></tr>
<tr><td>Time Management</td><td>priority, schedule, procrastination, delay, time management</td><td>I set clear <b>priorities</b> every morning.</td></tr>
<tr><td>Decision Making</td><td>decision, option, pros and cons, choose, evaluate</td><td>Let's weigh the <b>pros and cons</b> before deciding.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Don't be afraid of <b>failure</b>; learn from your mistakes.</li><li>Effective <b>time management</b> reduces daily stress.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I made a decision of leaving.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I made a decision to leave.</span></div>
 </div>
</div>
<div class="checklist" data-key="personal-development">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Form goal statements with 'My main goal is to...'</span></label>
 <label class="check-item"><input type="checkbox"><span>Use decision frames like 'weigh the pros and cons'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Delaying tasks that need to be done is called ___.'</div>
  <div class="qopts"><button class="qopt">procrastination</button><button class="qopt">priority</button><button class="qopt">achievement</button></div>
  <div class="qexplain">Delaying work is 'procrastination'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'To evaluate positive and negative factors of a choice is to weigh the ___.'</div>
  <div class="qopts"><button class="qopt">schedules</button><button class="qopt">pros and cons</button><button class="qopt">targets</button></div>
  <div class="qexplain">Comparing advantages/disadvantages is 'pros and cons'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-15",
        "file": "part-15.html",
        "slug": "master-collocations-dictionary",
        "title": "Part 15 · Master Collocations Dictionary",
        "short_title": "Part 15",
        "subtitle": "High-frequency A2 verb collocations: MAKE, DO, TAKE, GET, HAVE, GIVE, KEEP, PAY, BREAK.",
        "eyebrow": "A2 Essential Collocations Index",
        "stripe": "#7c4fd6",
        "topic_title": "Master Collocations Dictionary",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can pair high-frequency verbs naturally with their correct noun partners.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Verb</th><th>Essential A2 Collocations</th><th>Example</th></tr></thead>
<tbody>
<tr><td>MAKE</td><td>decision, mistake, friends, progress, money, call, reservation</td><td>He <b>made a reservation</b> for two at 8 PM.</td></tr>
<tr><td>DO</td><td>homework, washing-up, housework, exercise, favor, your best</td><td>Please <b>do me a favor</b> and hold this door.</td></tr>
<tr><td>TAKE</td><td>medicine, break, photo, bus, shower, exam, notes, care of</td><td>Remember to <b>take notes</b> during the lecture.</td></tr>
<tr><td>GET</td><td>married, lost, ready, better, home, job, tired, degree</td><td>We <b>got lost</b> in the city center.</td></tr>
<tr><td>HAVE</td><td>meeting, shower, party, rest, fun, problem, time, look</td><td>Let's <b>have a look</b> at the new catalog.</td></tr>
<tr><td>GIVE</td><td>advice, permission, lift, presentation, call, hand, gift</td><td>Can you <b>give me a hand</b> with these boxes?</td></tr>
<tr><td>KEEP</td><td>calm, in touch, promise, secret, fit, going, track of</td><td>Make sure to <b>keep in touch</b> while abroad!</td></tr>
<tr><td>PAY</td><td>attention, bill, by card, in cash, fine, visit</td><td>You can <b>pay by card</b> or in cash.</td></tr>
<tr><td>BREAK</td><td>promise, law, news, record, habit, down, bone</td><td>The car <b>broke down</b> on the highway.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Always <b>pay attention</b> when crossing busy streets.</li><li>She works out daily to <b>keep fit</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I did a big mistake on the exam.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I made a big mistake on the exam.</span></div>
 </div>
</div>
<div class="checklist" data-key="master-collocations">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish MAKE collocations (decision, mistake) from DO (homework, favor)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use PAY, KEEP, and GIVE collocations accurately</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Can you ___ me a hand with this heavy table?'</div>
  <div class="qopts"><button class="qopt">make</button><button class="qopt">give</button><button class="qopt">pay</button></div>
  <div class="qexplain">Assistance phrase is 'give a hand'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'We need to ___ a decision before Friday.'</div>
  <div class="qopts"><button class="qopt">make</button><button class="qopt">do</button><button class="qopt">take</button></div>
  <div class="qexplain">Deciding uses 'make a decision'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-16",
        "file": "part-16.html",
        "slug": "functional-english-masterclass",
        "title": "Part 16 · Functional English Masterclass",
        "short_title": "Part 16",
        "subtitle": "Situational dialogues: small talk, booking, phone calls, customer service, and polite opinions.",
        "eyebrow": "A2 Key Speaking & Writing Masterclass",
        "stripe": "#a3195b",
        "topic_title": "Functional English Masterclass",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage everyday phone calls, handle customer service issues, and make appointments smoothly.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Situation</th><th>Key Functional Set Phrases</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Small Talk & Greetings</td><td>"Lovely to see you!", "How was your weekend?", "Nice weather today!"</td><td><b>Lovely to see you!</b> How have you been?</td></tr>
<tr><td>Booking Appointments</td><td>"I'd like to make an appointment...", "Would Tuesday suit you?"</td><td><b>Would Tuesday at 3 PM suit you?</b></td></tr>
<tr><td>Phone & Video Calls</td><td>"Hello, this is... speaking", "Could I speak to...", "You're on mute!"</td><td><b>Hello, this is Alex speaking.</b></td></tr>
<tr><td>Customer Complaints</td><td>"I'm calling to complain about...", "We will offer a full refund."</td><td><b>I'm calling to complain about</b> a delayed package.</td></tr>
<tr><td>Clarification & Repetition</td><td>"Could you repeat that?", "What does this mean?", "Could you speak slower?"</td><td><b>Could you speak a bit more slowly</b>, please?</td></tr>
<tr><td>Polite Opinions & Agreement</td><td>"In my opinion...", "I completely agree!", "I see your point, but..."</td><td><b>I completely agree</b> with your suggestion.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>I'm afraid I have to cancel</b> our appointment due to an emergency.</li><li><b>Would you like to join us</b> for lunch after the meeting?</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I am calling for complain about the service.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I am calling to complain about the service.</span></div>
 </div>
</div>
<div class="checklist" data-key="functional-masterclass">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use telephone opening and closing phrases</span></label>
 <label class="check-item"><input type="checkbox"><span>Ask for repetition or clarification politely</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'If someone on a video call cannot hear you, they might say: "You are ___!"'</div>
  <div class="qopts"><button class="qopt">on mute</button><button class="qopt">delayed</button><button class="qopt">rescheduled</button></div>
  <div class="qexplain">Silenced microphone is 'on mute'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Politely asking someone to say something again: "Could you ___ that?"'</div>
  <div class="qopts"><button class="qopt">reschedule</button><button class="qopt">repeat</button><button class="qopt">complain</button></div>
  <div class="qexplain">Asking to re-say is 'repeat'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-17",
        "file": "part-17.html",
        "slug": "encyclopedic-a2-vocabulary-reference-tables",
        "title": "Part 17 · Encyclopedic A2 Vocabulary Reference Tables",
        "short_title": "Part 17",
        "subtitle": "Master A2 frequency catalogs: top verbs, nouns, adjectives, adverbs, fillers, and idioms.",
        "eyebrow": "A2 Comprehensive Reference Lexicon",
        "stripe": "#3562e0",
        "topic_title": "Encyclopedic A2 Vocabulary Reference Tables",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can systematically reference high-frequency A2 words, discourse fillers, and idioms to transition into B1.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Lexical Category</th><th>Catalog & Scope</th><th>Representative Examples</th></tr></thead>
<tbody>
<tr><td>Top A2 Verbs (500)</td><td>Action, state, motion, and mental verbs</td><td>accept, adapt, behave, evaluate, improve, organize, succeed</td></tr>
<tr><td>Top A2 Nouns (800)</td><td>Categorized across 20 life domains</td><td>achievement, deposit, emergency, ingredients, priority, suburb</td></tr>
<tr><td>Top A2 Adjectives (400)</td><td>Descriptive, comparative, and evaluative</td><td>ambitious, customary, generous, punctual, reliable, stubborn</td></tr>
<tr><td>Adverbs (150)</td><td>Frequency, manner, degree, time, place</td><td>extremely, fairly, gradually, highly, immediately, daily</td></tr>
<tr><td>Discourse Markers (100)</td><td>Conversation fillers & transitions</td><td>well, actually, basically, mind you, by the way, honestly</td></tr>
<tr><td>Idioms & Fixed Expressions (200)</td><td>Everyday conversational idioms</td><td>piece of cake, break a leg, so far so good, under the weather</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>As a matter of fact</b>, I have already completed that assignment.</li><li>I am feeling a bit <b>under the weather</b> today, so I will rest.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">By the way, I am very agree with you.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>By the way, I completely agree with you.</span></div>
 </div>
</div>
<div class="checklist" data-key="encyclopedic-reference">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use discourse fillers like 'actually', 'basically', and 'by the way'</span></label>
 <label class="check-item"><input type="checkbox"><span>Recognize common A2 idioms (piece of cake, under the weather)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'If something is very easy, you can describe it idiomatically as a ___.'</div>
  <div class="qopts"><button class="qopt">piece of cake</button><button class="qopt">break of leg</button><button class="qopt">toast</button></div>
  <div class="qexplain">Easy task idiom is 'piece of cake'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'If you are feeling slightly unwell, you are feeling ___.'</div>
  <div class="qopts"><button class="qopt">so far so good</button><button class="qopt">under the weather</button><button class="qopt">in the clouds</button></div>
  <div class="qexplain">Unwell idiom is 'under the weather'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    }
]

def render_topbar(is_topic=False):
    rel = "../" if is_topic else ""
    links = [f'<a href="{rel}part-{i}.html">Part {i}</a>' for i in range(1, 18)]
    nav_html = "\n".join(links)
    return f"""<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{rel}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Vocab A2</span>
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
 <div>COSYlanguages · English Vocabulary Manual (Level A2)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Building Level A2 English Vocabulary Manual...")

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
<title>{p["topic_title"]} · COSYlanguages A2 Vocabulary</title>
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
<title>{p["title"]} · COSYlanguages Level A2</title>
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

    grid_cards.append("""<a class="part-card" href="../b1/index.html" style="border: 2px solid var(--teal-500); background: var(--teal-050);">
 <div class="stripe" style="background: var(--teal-500);"></div>
 <span class="pnum">NEXT LEVEL</span>
 <h2>Continue to Level B1 &rarr;</h2>
 <p>Ready for the next step? Advance to English Vocabulary Manual Level B1 covering 21 thematic modules aligned with Cambridge B1 Preliminary (PET) syllabus.</p>
 <span class="topics-count">Open Vocabulary Manual B1 &rarr;</span>
</a>""")

    index_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Vocabulary Manual (Level A2) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A2</span>
 <h1>English Vocabulary Manual · Level A2</h1>
 <p class="lead">From Survival to Everyday Fluency. 17 thematic modules aligned with Cambridge A2 Key and CEFR Waystage descriptors.</p>
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

    print("Successfully built Level A2 English Vocabulary Manual!")

if __name__ == "__main__":
    build_all()

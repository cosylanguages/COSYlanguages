#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Vocabulary Manual (Level B1) Interactive Web Edition.
Generates manuals/en/vocabulary/b1/index.html, 11 section hub HTML pages (part-1.html .. part-11.html),
assets (style.css, app.js), and 11 topic HTML pages in manuals/en/vocabulary/b1/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/vocabulary/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level B1 Vocabulary Manual Stylesheet */
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

APP_JS = """// COSYlanguages B1 Vocabulary Manual Shared JS
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
     var key = 'cosy-b1-vocab-check-' + box.getAttribute('data-key');
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
        "slug": "phrasal-verbs-everyday-non-literal-meanings",
        "title": "Part 1 · Vocabulary-Building Toolkit (Intermediate)",
        "short_title": "Part 1",
        "subtitle": "2-3 word non-literal phrasal verbs, word formation families (-tion/-ment/-ness), and formal vs informal register pairs.",
        "eyebrow": "PET Use of English Core",
        "stripe": "#3562e0",
        "topic_title": "Phrasal Verbs: Everyday Non-Literal Meanings",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can use non-literal phrasal verbs (*look forward to, put up with, come up with*) and formal vs informal word choices appropriately.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Phrasal verb</th><th>Meaning</th><th>Example</th></tr></thead>
<tbody>
<tr><td>look forward to</td><td>feel excited about something in the future</td><td>I'm <b>looking forward to</b> the weekend.</td></tr>
<tr><td>put up with</td><td>tolerate something unpleasant</td><td>I can't <b>put up with</b> the noise anymore.</td></tr>
<tr><td>come up with</td><td>think of an idea or plan</td><td>She <b>came up with</b> a great solution.</td></tr>
<tr><td>get on with</td><td>have a good relationship with</td><td>I <b>get on with</b> my sister really well.</td></tr>
<tr><td>run out of</td><td>have none left</td><td>We <b>ran out of</b> milk this morning.</td></tr>
</tbody>
</table></div>
<div class="box why">
 <h3>💡 Note: Non-literal phrasal units</h3>
 <p>Unlike literal phrasal verbs (*sit down, pick up*), these can't be guessed from the individual words — they need to be learned as fixed units, and often keep their form even when the sentence changes (*put up with it / putting up with it*).</p>
</div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistake</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I'm looking forward the weekend.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I'm looking forward <b>to</b> the weekend. (The preposition 'to' is required!)</span></div>
 </div>
</div>
<div class="checklist" data-key="phrasal-toolkit">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 3-word phrasal verbs (look forward to, put up with)</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair 'to' with gerund/noun after look forward to</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'I can't ___ this noise any longer.'</div>
  <div class="qopts"><button class="qopt">look forward to</button><button class="qopt">put up with</button><button class="qopt">come up with</button></div>
  <div class="qexplain">Tolerating unpleasantness uses 'put up with'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'We have ___ paper for the printer.'</div>
  <div class="qopts"><button class="qopt">run out of</button><button class="qopt">got on with</button><button class="qopt">put up with</button></div>
  <div class="qexplain">Having none left uses 'run out of'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "slug": "media-news-and-communication-technology",
        "title": "Part 2 · Media, News & Communication Technology",
        "short_title": "Part 2",
        "subtitle": "News vocabulary, social media, smartphones, apps, viral trends, and online safety.",
        "eyebrow": "PET Topic: Tech & Media",
        "stripe": "#1c8f56",
        "topic_title": "Media, News & Communication Technology",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss digital media, social networks, online privacy, and viral technological trends.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Digital Media</td><td>headline, broadcast, fake news, subscriber</td><td>The story made national <b>headlines</b>.</td></tr>
<tr><td>Social Networks</td><td>go viral, algorithm, notification, post</td><td>Her video went <b>viral</b> overnight with 2 million views.</td></tr>
<tr><td>Cybersecurity</td><td>privacy settings, two-factor auth, scam, cloud</td><td>Always update your <b>privacy settings</b> on public apps.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>I turned off app <b>notifications</b> to stay focused.</li><li>Beware of online <b>scams</b> asking for banking details.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The news are very interesting today.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The news <b>is</b> very interesting today. (News takes a singular verb!)</span></div>
 </div>
</div>
<div class="checklist" data-key="media-tech">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use news and media terms (headline, broadcast, subscriber)</span></label>
 <label class="check-item"><input type="checkbox"><span>Treat 'news' as an uncountable singular noun</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'When a video spreads rapidly online, it ___.'</div>
  <div class="qopts"><button class="qopt">goes viral</button><button class="qopt">runs out</button><button class="qopt">broadcasts</button></div>
  <div class="qexplain">Rapid digital spread means 'goes viral'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The news about the election ___ shocking.'</div>
  <div class="qopts"><button class="qopt">were</button><button class="qopt">was</button><button class="qopt">are</button></div>
  <div class="qexplain">Singular verb required for 'news': was.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "slug": "environment-and-global-issues",
        "title": "Part 3 · Environment & Global Issues",
        "short_title": "Part 3",
        "subtitle": "Climate, sustainability basics, waste reduction, endangered species, and natural disasters.",
        "eyebrow": "PET Topic: Environment",
        "stripe": "#c9740a",
        "topic_title": "Environment & Global Issues",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss environmental protection, renewable energy, and ecological footprint.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Topic</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Sustainability</td><td>renewable energy, carbon footprint, biodegradable</td><td>Solar power is a clean source of <b>renewable energy</b>.</td></tr>
<tr><td>Ecology</td><td>endangered species, habitat, deforestation</td><td>Loss of forest <b>habitat</b> threatens many species.</td></tr>
<tr><td>Waste & Pollution</td><td>single-use plastic, landfill, emissions</td><td>We must reduce our reliance on <b>single-use plastic</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Electric cars produce zero tailpipe <b>emissions</b>.</li><li>Tigers are classified as an <b>endangered species</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We must protect the nature.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We must protect nature. (No article before 'nature' in general sense!)</span></div>
 </div>
</div>
<div class="checklist" data-key="environment-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Discuss renewable energy and carbon footprint</span></label>
 <label class="check-item"><input type="checkbox"><span>Omit article before 'nature' when talking generally</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Animals in danger of disappearing completely are ___.'</div>
  <div class="qopts"><button class="qopt">single-use</button><button class="qopt">endangered species</button><button class="qopt">landfills</button></div>
  <div class="qexplain">Threatened animals are 'endangered species'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Solar and wind power are examples of ___ energy.'</div>
  <div class="qopts"><button class="qopt">renewable</button><button class="qopt">biodegradable</button><button class="qopt">single-use</button></div>
  <div class="qexplain">Clean energy sources are 'renewable'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "slug": "education-careers-and-ambitions",
        "title": "Part 4 · Education, Careers & Ambitions",
        "short_title": "Part 4",
        "subtitle": "Qualifications, career paths, job applications, workplace relationships, and long-term goals.",
        "eyebrow": "PET Topic: Education & Work",
        "stripe": "#7c4fd6",
        "topic_title": "Education, Careers & Ambitions",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can detail professional career ambitions, academic qualifications, and job application processes.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Job Application</td><td>CV / résumé, cover letter, references, vacancy</td><td>She submitted her <b>CV</b> and <b>cover letter</b> for the post.</td></tr>
<tr><td>Career Progression</td><td>promotion, internship, resignation, work-life balance</td><td>He earned a <b>promotion</b> to senior project manager.</td></tr>
<tr><td>Qualifications</td><td>bachelor's degree, diploma, apprenticeship</td><td>She completed a three-year <b>apprenticeship</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Achieving a good <b>work-life balance</b> is essential for wellbeing.</li><li>There is a job <b>vacancy</b> in our marketing department.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I want to make a career in medicine.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I want to pursue a career in medicine. / pursue a career</span></div>
 </div>
</div>
<div class="checklist" data-key="careers-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use application terms (CV, cover letter, vacancy)</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair 'pursue' with 'career'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'An available job opening is a ___.'</div>
  <div class="qopts"><button class="qopt">vacancy</button><button class="qopt">promotion</button><button class="qopt">diploma</button></div>
  <div class="qexplain">Job opening is a 'vacancy'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Moving up to a higher rank at work is a ___.'</div>
  <div class="qopts"><button class="qopt">resignation</button><button class="qopt">promotion</button><button class="qopt">internship</button></div>
  <div class="qexplain">Higher job rank is a 'promotion'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "slug": "money-shopping-and-consumer-life",
        "title": "Part 5 · Money, Shopping & Consumer Life",
        "short_title": "Part 5",
        "subtitle": "Budgeting, saving, value for money, consumer rights, and digital banking.",
        "eyebrow": "B1 Everyday Finance & Consumption",
        "stripe": "#a3195b",
        "topic_title": "Money, Shopping & Consumer Life",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss personal budgeting, financial transactions, and consumer rights.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Finance & Budget</td><td>budget, income, expense, savings account, interest rate</td><td>I keep a monthly <b>budget</b> to track my expenses.</td></tr>
<tr><td>Consumer Life</td><td>value for money, warranty, receipt, exchange policy</td><td>The laptop comes with a two-year <b>warranty</b>.</td></tr>
<tr><td>Payments</td><td>contactless, direct debit, currency exchange</td><td>I paid using <b>contactless</b> on my smartphone.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>This hotel offers excellent <b>value for money</b>.</li><li>Set up a <b>direct debit</b> to pay utility bills automatically.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I borrowed him £20.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I <b>lent</b> him £20. / He <b>borrowed</b> £20 from me.</span></div>
 </div>
</div>
<div class="checklist" data-key="money-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish lend (give) from borrow (take)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use consumer terms like warranty and value for money</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Written guarantee repairing a product if it breaks is a ___.'</div>
  <div class="qopts"><button class="qopt">direct debit</button><button class="qopt">warranty</button><button class="qopt">budget</button></div>
  <div class="qexplain">Product guarantee is a 'warranty'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Can you ___ me your bicycle for the afternoon?'</div>
  <div class="qopts"><button class="qopt">lend</button><button class="qopt">borrow</button><button class="qopt">expense</button></div>
  <div class="qexplain">Giving temporary use is 'lend'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "slug": "health-fitness-and-lifestyle",
        "title": "Part 6 · Health, Fitness & Lifestyle",
        "short_title": "Part 6",
        "subtitle": "Illness treatment in depth, mental wellbeing, stress management, exercise, and diet.",
        "eyebrow": "PET Topic: Health & Lifestyle",
        "stripe": "#3562e0",
        "topic_title": "Health, Fitness & Lifestyle",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss physical fitness routines, stress management, and mental health balance.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Mental Wellbeing</td><td>stress management, burnout, anxiety, mindfulness</td><td>Practicing <b>mindfulness</b> helps reduce exam anxiety.</td></tr>
<tr><td>Physical Fitness</td><td>endurance, strength training, workout routine</td><td>She does <b>strength training</b> three times a week.</td></tr>
<tr><td>Medical Treatment</td><td>recovery, therapy, specialist, remedy</td><td>He made a full <b>recovery</b> after the surgery.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Regular exercise is crucial for effective <b>stress management</b>.</li><li>The doctor referred her to a heart <b>specialist</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I have a big stress.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I am under a lot of stress. / I am very stressed.</span></div>
 </div>
</div>
<div class="checklist" data-key="health-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 'under stress' / 'stressed' instead of 'a big stress'</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss mental wellbeing and workout routines</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Exhaustion caused by prolonged workplace stress is ___.'</div>
  <div class="qopts"><button class="qopt">burnout</button><button class="qopt">endurance</button><button class="qopt">recovery</button></div>
  <div class="qexplain">Extreme stress exhaustion is 'burnout'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Correct frame: "I am currently ___ a lot of stress."'</div>
  <div class="qopts"><button class="qopt">with</button><button class="qopt">under</button><button class="qopt">having</button></div>
  <div class="qexplain">Preposition frame is 'under stress'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "slug": "arts-culture-and-entertainment",
        "title": "Part 7 · Arts, Culture & Entertainment",
        "short_title": "Part 7",
        "subtitle": "Books, films, music genres, art exhibitions, writing reviews, and cultural heritage.",
        "eyebrow": "PET Topic: Arts & Media",
        "stripe": "#1c8f56",
        "topic_title": "Arts, Culture & Entertainment",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can critique movies, books, music genres, and art exhibitions in reviews.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Film & Theater</td><td>plot, soundtrack, performance, director, review</td><td>The film's <b>soundtrack</b> won several awards.</td></tr>
<tr><td>Literature & Art</td><td>novel, genre, masterpiece, gallery exhibition</td><td>This portrait is considered his greatest <b>masterpiece</b>.</td></tr>
<tr><td>Cultural Life</td><td>heritage, tradition, festival, venue</td><td>The annual jazz <b>festival</b> attracts thousands.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The <b>plot</b> of the novel was unpredictable and exciting.</li><li>We visited an impressive <b>gallery exhibition</b> of modern sculpture.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The historical context of the film was very history.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The historical context of the film was very realistic / authentic.</span></div>
 </div>
</div>
<div class="checklist" data-key="arts-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use review terms (plot, soundtrack, masterpiece, venue)</span></label>
 <label class="check-item"><input type="checkbox"><span>Structure a short 100-word film or book review</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'The music accompanying a film is its ___.'</div>
  <div class="qopts"><button class="qopt">plot</button><button class="qopt">soundtrack</button><button class="qopt">genre</button></div>
  <div class="qexplain">Film music is 'soundtrack'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'The story structure and events of a book or movie is the ___.'</div>
  <div class="qopts"><button class="qopt">plot</button><button class="qopt">heritage</button><button class="qopt">venue</button></div>
  <div class="qexplain">Story line is the 'plot'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-8",
        "file": "part-8.html",
        "slug": "relationships-and-social-life",
        "title": "Part 8 · Relationships & Social Life",
        "short_title": "Part 8",
        "subtitle": "Friendship dynamics, dating, conflict resolution, and social etiquette.",
        "eyebrow": "PET Topic: Personal Experiences",
        "stripe": "#c9740a",
        "topic_title": "Relationships & Social Life",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss interpersonal friendships, resolve minor conflicts, and express empathy.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Friendship</td><td>close friend, trustworthy, keep in touch, acquaintance</td><td>Even after moving abroad, we <b>kept in touch</b>.</td></tr>
<tr><td>Conflict & Resolution</td><td>misunderstanding, apologize, compromise, resolve</td><td>They sat down to <b>resolve</b> their misunderstanding.</td></tr>
<tr><td>Social Etiquette</td><td>polite, host, guest, invitation, small talk</td><td>Making <b>small talk</b> at networking events is useful.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>He is an <b>acquaintance</b> from university, not a close friend.</li><li>We reached a fair <b>compromise</b> after talking for an hour.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I lost the contact with my school friends.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I <b>lost touch with</b> my school friends.</span></div>
 </div>
</div>
<div class="checklist" data-key="relationships-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use 'keep in touch' and 'lose touch with'</span></label>
 <label class="check-item"><input type="checkbox"><span>Distinguish close friend from acquaintance</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'An agreement where both sides accept less than requested is a ___.'</div>
  <div class="qopts"><button class="qopt">compromise</button><button class="qopt">misunderstanding</button><button class="qopt">acquaintance</button></div>
  <div class="qexplain">Mutual concession is a 'compromise'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Complete phrase: "I lost ___ with my old classmates."'</div>
  <div class="qopts"><button class="qopt">the contact</button><button class="qopt">touch</button><button class="qopt">relationship</button></div>
  <div class="qexplain">Collocation is 'lost touch with'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-9",
        "file": "part-9.html",
        "slug": "travel-tourism-and-cultures",
        "title": "Part 9 · Travel, Tourism & Cultures",
        "short_title": "Part 9",
        "subtitle": "Trip-planning in depth, cultural differences, describing cities, and travel writing style.",
        "eyebrow": "PET Topic: Travel & Places",
        "stripe": "#7c4fd6",
        "topic_title": "Travel, Tourism & Cultures",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can plan complex travel itineraries, describe cultural customs, and write travel blog posts.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Itinerary & Travel</td><td>itinerary, destination, guided tour, excursion</td><td>Our travel agent organized a full day <b>excursion</b>.</td></tr>
<tr><td>Culture & Customs</td><td>cultural shock, local customs, traditional cuisine</td><td>Experiencing <b>local customs</b> is part of travelling.</td></tr>
<tr><td>Describing Places</td><td>picturesque, bustling, historical landmark, scenic</td><td>Venice is famous for its <b>picturesque</b> canals.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>We enjoyed strolling through the <b>bustling</b> night market.</li><li>Follow the planned travel <b>itinerary</b> carefully.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We made a very long travel last year.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We went on a very long <b>trip / journey</b> last year. (Travel is uncountable general noun!)</span></div>
 </div>
</div>
<div class="checklist" data-key="travel-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use descriptive place adjectives (picturesque, bustling, scenic)</span></label>
 <label class="check-item"><input type="checkbox"><span>Distinguish travel (general concept) from trip / journey (specific event)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Visually attractive and charming (especially of places) means ___.'</div>
  <div class="qopts"><button class="qopt">bustling</button><button class="qopt">picturesque</button><button class="qopt">excursion</button></div>
  <div class="qexplain">Charming visual appearance means 'picturesque'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A detailed plan of a route and journey is an ___.'</div>
  <div class="qopts"><button class="qopt">itinerary</button><button class="qopt">excursion</button><button class="qopt">custom</button></div>
  <div class="qexplain">Journey schedule is an 'itinerary'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-10",
        "file": "part-10.html",
        "slug": "crime-law-and-society",
        "title": "Part 10 · Crime, Law & Society",
        "short_title": "Part 10",
        "subtitle": "Basic crime/law vocabulary, community rules, civic rights, and social responsibilities.",
        "eyebrow": "PET/FCE Bridging Topic",
        "stripe": "#a3195b",
        "topic_title": "Crime, Law & Society",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss community regulations, basic legal rights, and social responsibilities.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Law & Justice</td><td>law, regulation, court, fine, witness, evidence</td><td>The driver received a <b>fine</b> for speeding.</td></tr>
<tr><td>Crime Types</td><td>theft, burglary, fraud, vandalism, suspect</td><td>Police are searching for a <b>suspect</b> after the theft.</td></tr>
<tr><td>Society & Community</td><td>citizen, public safety, volunteer, community center</td><td>Local <b>volunteers</b> cleaned up the city park.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The police officer interviewed a <b>witness</b> to the accident.</li><li>We must follow local safety <b>regulations</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He committed a big fault.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He <b>committed a crime</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="crime-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use legal and civic terms (witness, fine, regulation)</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair 'commit' with 'crime'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Financial penalty for breaking a rule is a ___.'</div>
  <div class="qopts"><button class="qopt">fine</button><button class="qopt">witness</button><button class="qopt">regulation</button></div>
  <div class="qexplain">Monetary penalty is a 'fine'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A person who saw an incident occur is a ___.'</div>
  <div class="qopts"><button class="qopt">suspect</button><button class="qopt">witness</button><button class="qopt">volunteer</button></div>
  <div class="qexplain">Eye-observer is a 'witness'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-11",
        "file": "part-11.html",
        "slug": "personality-feelings-and-abstract-qualities",
        "title": "Part 11 · Personality, Feelings & Abstract Qualities",
        "short_title": "Part 11",
        "subtitle": "Nuanced personality traits, abstract emotional states, and describing personal growth over time.",
        "eyebrow": "PET Topic: Feelings in Depth",
        "stripe": "#3562e0",
        "topic_title": "Personality, Feelings & Abstract Qualities",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe complex personality nuances and abstract emotional experiences.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Personality Nuance</td><td>ambitious, reliable, open-minded, considerate</td><td>She is a very <b>reliable</b> team member.</td></tr>
<tr><td>Abstract Feelings</td><td>frustrated, overwhelmed, content, nostalgic</td><td>He felt <b>frustrated</b> by the unexpected delay.</td></tr>
<tr><td>Personal Growth</td><td>self-confidence, determination, resilience</td><td>Learning a language builds <b>self-confidence</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Looking at old photographs made her feel <b>nostalgic</b>.</li><li>Her <b>determination</b> helped her pass the B1 exam.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I feel very frustration today.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I feel very <b>frustrated</b> today. (Adjective -ed for personal feeling!)</span></div>
 </div>
</div>
<div class="checklist" data-key="feelings-abstract-b1">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use nuanced personality adjectives (reliable, open-minded, ambitious)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use -ed adjective forms for internal emotional states</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Someone you can trust and count on is ___.'</div>
  <div class="qopts"><button class="qopt">frustrated</button><button class="qopt">reliable</button><button class="qopt">nostalgic</button></div>
  <div class="qexplain">Trustworthy person is 'reliable'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Feeling peaceful, satisfied, and happy with life is being ___.'</div>
  <div class="qopts"><button class="qopt">content</button><button class="qopt">overwhelmed</button><button class="qopt">considerate</button></div>
  <div class="qexplain">Peaceful satisfaction means 'content'.</div>
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
 <span class="brand-name">COSY<em>languages</em> · Vocab B1</span>
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
 <div>COSYlanguages · English Vocabulary Manual (Level B1)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_all():
    print("Building Level B1 English Vocabulary Manual...")

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
<title>{p["topic_title"]} · COSYlanguages B1 Vocabulary</title>
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
<title>{p["title"]} · COSYlanguages Level B1</title>
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
<title>COSYlanguages English Vocabulary Manual (Level B1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level B1</span>
 <h1>English Vocabulary Manual · Level B1</h1>
 <p class="lead">Discussing Ideas, Not Just Things. 11 thematic modules aligned with Cambridge B1 Preliminary (PET) syllabus.</p>
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

    print("Successfully built Level B1 English Vocabulary Manual!")

if __name__ == "__main__":
    build_all()

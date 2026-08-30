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
        "slug": "personality-psychology-and-emotions",
        "title": "Part 2 · Personality, Psychology & Emotions",
        "short_title": "Part 2",
        "subtitle": "Character nuances, temperament, emotional wellbeing, burnout resilience, and growth mindset.",
        "eyebrow": "PET Topic: Personality & Feelings",
        "stripe": "#1c8f56",
        "topic_title": "Personality, Psychology & Emotions",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe personality traits (*conscientious, level-headed*), emotional wellbeing (*mindfulness, resilience*), and personal growth milestones.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Character Traits</td><td>conscientious, level-headed, charismatic, empathetic</td><td>She is a <b>conscientious</b> student who never misses deadlines.</td></tr>
<tr><td>Wellbeing & Growth</td><td>resilience, burnout, mindfulness, coping mechanism</td><td>Practicing <b>mindfulness</b> helps prevent workplace <b>burnout</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>bounce back, cope with, come across as, open up</td><td>It took him a few months to <b>bounce back</b> after losing his job.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>He <b>comes across as</b> quiet, but he has a great sense of humour.</li><li>Building <b>resilience</b> is essential for navigating challenging career transitions.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">She is very sensible about other people's feelings.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>She is very <b>sensitive</b> to other people's feelings. (Sensible = reasonable/practical; Sensitive = empathetic/tender!)</span></div>
 </div>
</div>
<div class="checklist" data-key="personality-psychology">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish sensitive (empathetic) from sensible (practical)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss burnout, resilience, and mindfulness techniques</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Ability to recover quickly from difficulties is called ___.'</div>
  <div class="qopts"><button class="qopt">burnout</button><button class="qopt">resilience</button><button class="qopt">neurosis</button></div>
  <div class="qexplain">Bouncing back from hardship is 'resilience'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'A person who is calm and reasonable under pressure is ___.'</div>
  <div class="qopts"><button class="qopt">level-headed</button><button class="qopt">charismatic</button><button class="qopt">anxious</button></div>
  <div class="qexplain">Calm and practical state is 'level-headed'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "slug": "work-career-and-business-communication",
        "title": "Part 3 · Work, Career & Business Communication",
        "short_title": "Part 3",
        "subtitle": "Job applications, tailoring CVs, project management, meeting deadlines, and customer relations.",
        "eyebrow": "PET Topic: Work & Career",
        "stripe": "#c9740a",
        "topic_title": "Work, Career & Business Communication",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can apply for jobs (*tailor CV, cover letter*), manage workflow bottlenecks, and delegate professional tasks.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Context</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Recruitment</td><td>cover letter, probation period, remuneration, portfolio</td><td>She negotiated a competitive <b>remuneration</b> package.</td></tr>
<tr><td>Project Management</td><td>deadline, bottleneck, delegate, streamline, scope</td><td>We need to <b>streamline</b> our workflow to meet the tight <b>deadline</b>.</td></tr>
<tr><td>Customer Service</td><td>escalate, customer satisfaction, issue a refund, feedback</td><td>If the issue is unresolved, please <b>escalate</b> it to management.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>I <b>tailored my CV</b> specifically for the project manager role.</li><li>Let's <b>delegate tasks</b> to team members to avoid unnecessary bottlenecks.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I want to make a career in finance.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I want to <b>pursue a career</b> in finance.</span></div>
 </div>
</div>
<div class="checklist" data-key="work-business">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use application terms (tailor CV, probation period, cover letter)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss project workflow (streamline, bottleneck, delegate)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'To pass a customer complaint to a higher authority is to ___.'</div>
  <div class="qopts"><button class="qopt">escalate</button><button class="qopt">delegate</button><button class="qopt">streamline</button></div>
  <div class="qexplain">Passing issues higher is 'escalate'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Initial trial work period before permanent employment is a ___.'</div>
  <div class="qopts"><button class="qopt">remuneration</button><button class="qopt">probation period</button><button class="qopt">portfolio</button></div>
  <div class="qexplain">Trial work duration is 'probation period'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "slug": "media-digital-life-and-cybersecurity",
        "title": "Part 4 · Media, Digital Life & Cybersecurity",
        "short_title": "Part 4",
        "subtitle": "News journalism, media bias, fact-checking, social media algorithms, and cybersecurity encryption.",
        "eyebrow": "PET Topic: Media & Tech",
        "stripe": "#7c4fd6",
        "topic_title": "Media, Digital Life & Cybersecurity",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can evaluate news credibility (*media bias, fact-checking*), manage digital footprints, and secure sensitive data.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Journalism</td><td>media bias, objective, broadcast, fact-check, sensational</td><td>Always verify sources to avoid falling for <b>media bias</b>.</td></tr>
<tr><td>Digital Networks</td><td>algorithm, digital footprint, engagement, subscriber</td><td>Social media <b>algorithms</b> prioritize high engagement posts.</td></tr>
<tr><td>Cybersecurity</td><td>encryption, data breach, malware, firewall, backup</td><td>End-to-end <b>encryption</b> keeps messaging secure.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Always <b>fact-check</b> breaking news stories before sharing them online.</li><li>A major <b>data breach</b> forced the company to reset user passwords.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The news are very sensational today.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The news <b>is</b> very sensational today. (News is uncountable singular!)</span></div>
 </div>
</div>
<div class="checklist" data-key="media-cybersecurity">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use journalism terms (media bias, fact-check, sensational)</span></label>
 <label class="check-item"><input type="checkbox"><span>Discuss cybersecurity measures (encryption, firewall, data breach)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Encoding data so only authorized parties can read it is ___.'</div>
  <div class="qopts"><button class="qopt">malware</button><button class="qopt">encryption</button><button class="qopt">sensationalism</button></div>
  <div class="qexplain">Data encoding is 'encryption'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Trail of data left behind when using the internet is a ___.'</div>
  <div class="qopts"><button class="qopt">digital footprint</button><button class="qopt">data breach</button><button class="qopt">firewall</button></div>
  <div class="qexplain">Internet data trail is 'digital footprint'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-5",
        "file": "part-5.html",
        "slug": "ecology-climate-and-sustainability",
        "title": "Part 5 · Ecology, Climate & Sustainability",
        "short_title": "Part 5",
        "subtitle": "Global warming, renewable energy grids, carbon footprint, biodiversity, and phasing out fossil fuels.",
        "eyebrow": "PET Topic: Ecology & Climate",
        "stripe": "#a3195b",
        "topic_title": "Ecology, Climate & Sustainability",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can debate climate policy (*renewable energy, carbon footprint*), ecosystem conservation, and eco-friendly habits.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Topic</th><th>Key Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Energy & Emissions</td><td>renewable energy, carbon footprint, phase out, emissions</td><td>Cities must <b>phase out</b> fossil fuels to cut <b>emissions</b>.</td></tr>
<tr><td>Conservation</td><td>biodiversity, ecosystem, endangered species, habitat</td><td>Deforestation directly threatens forest <b>biodiversity</b>.</td></tr>
<tr><td>Sustainability</td><td>biodegradable, depletion, eco-friendly, green energy</td><td>Switching to <b>biodegradable</b> packaging reduces plastic waste.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Investing in <b>renewable energy grids</b> lowers carbon footprints.</li><li>Over-exploitation leads to rapid <b>resource depletion</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We must protect the nature at all costs.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We must protect <b>nature</b> at all costs. (Omit article before general 'nature'!)</span></div>
 </div>
</div>
<div class="checklist" data-key="ecology-sustainability">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use sustainability terms (carbon footprint, renewable energy, depletion)</span></label>
 <label class="check-item"><input type="checkbox"><span>Omit article before 'nature' in general statements</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'To gradually stop using or producing something is to ___.'</div>
  <div class="qopts"><button class="qopt">phase out</button><button class="qopt">deplete</button><button class="qopt">conserve</button></div>
  <div class="qexplain">Gradual elimination is 'phase out'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Variety of plant and animal life in a habitat is ___.'</div>
  <div class="qopts"><button class="qopt">depletion</button><button class="qopt">biodiversity</button><button class="qopt">emissions</button></div>
  <div class="qexplain">Variety of species is 'biodiversity'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-6",
        "file": "part-6.html",
        "slug": "health-medicine-and-lifestyle",
        "title": "Part 6 · Health, Medicine & Lifestyle",
        "short_title": "Part 6",
        "subtitle": "Medical symptoms, prescriptions, side effects, caloric intake, processed food, and work-life balance.",
        "eyebrow": "PET Topic: Health & Wellbeing",
        "stripe": "#3562e0",
        "topic_title": "Health, Medicine & Lifestyle",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss medical consultations (*diagnose, prescription, side effects*) and balanced nutrition.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Medical Care</td><td>diagnosis, prescription, painkillers, side effects, GP</td><td>The doctor wrote a <b>prescription</b> for antibiotics.</td></tr>
<tr><td>Nutrition & Diet</td><td>caloric intake, processed food, organic produce, label</td><td>Cut down on <b>processed food</b> to improve digestive health.</td></tr>
<tr><td>Phrasal Verbs</td><td>come down with, get over, pass out, cut down on</td><td>I think I am <b>coming down with</b> a cold.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Be aware of potential <b>side effects</b> listed on the medicine package.</li><li>It took her two weeks to <b>get over</b> the severe flu.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The doctor gave me a recipe for pills.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The doctor gave me a <b>prescription</b> for pills. (Recipe = cooking instructions!)</span></div>
 </div>
</div>
<div class="checklist" data-key="health-medicine">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish prescription (medical) from recipe (cooking)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use health phrasal verbs (come down with, get over, cut down on)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Doctor's official written order for medicine is a ___.'</div>
  <div class="qopts"><button class="qopt">recipe</button><button class="qopt">prescription</button><button class="qopt">diagnosis</button></div>
  <div class="qexplain">Medical paper is a 'prescription'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to become ill with a mild disease":'</div>
  <div class="qopts"><button class="qopt">come down with</button><button class="qopt">pass out</button><button class="qopt">get over</button></div>
  <div class="qexplain">Falling ill is 'come down with'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-7",
        "file": "part-7.html",
        "slug": "travel-immigration-and-global-mobility",
        "title": "Part 7 · Travel, Immigration & Global Mobility",
        "short_title": "Part 7",
        "subtitle": "Customs clearance, visa applications, itinerary planning, immigration control, and travel claims.",
        "eyebrow": "PET Topic: Travel & Mobility",
        "stripe": "#1c8f56",
        "topic_title": "Travel, Immigration & Global Mobility",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can navigate international border procedures (*customs, visa application*), travel insurance, and flight claims.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Context</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Border & Visas</td><td>customs clearance, immigration control, valid visa, declare</td><td>Pass through <b>immigration control</b> with a valid passport.</td></tr>
<tr><td>Travel Logistics</td><td>itinerary, travel insurance, luggage claim, stopover</td><td>Keep all receipts in case of a <b>lost luggage claim</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>set off, check in, drop off, pick up, stop over</td><td>We <b>set off</b> at dawn to avoid morning traffic.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Check whether your <b>visa application</b> requires proof of travel insurance.</li><li>Our flight includes a two-hour <b>stopover</b> in Istanbul.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We made a very pleasant travel last week.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We went on a very pleasant <b>trip / journey</b> last week. (Travel is uncountable general noun!)</span></div>
 </div>
</div>
<div class="checklist" data-key="travel-mobility">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish trip/journey (countable) from travel (uncountable)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use airport/border terms (customs, itinerary, stopover, valid visa)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Detailed plan or schedule of a journey route is an ___.'</div>
  <div class="qopts"><button class="qopt">itinerary</button><button class="qopt">immigration</button><button class="qopt">stopover</button></div>
  <div class="qexplain">Travel plan is an 'itinerary'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to start a journey":'</div>
  <div class="qopts"><button class="qopt">drop off</button><button class="qopt">set off</button><button class="qopt">check in</button></div>
  <div class="qexplain">Starting a journey is 'set off'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-8",
        "file": "part-8.html",
        "slug": "education-academic-integrity-and-research",
        "title": "Part 8 · Education, Academic Integrity & Research",
        "short_title": "Part 8",
        "subtitle": "University lectures, dissertations, citations, academic honesty, plagiarism, and peer review.",
        "eyebrow": "PET Topic: Academic Life",
        "stripe": "#c9740a",
        "topic_title": "Education, Academic Integrity & Research",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss university studies (*dissertation, research methodology*), cite sources, and uphold academic honesty.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Academic Integrity</td><td>plagiarism, citation, academic honesty, peer review</td><td>Proper <b>citation</b> is required to avoid <b>plagiarism</b>.</td></tr>
<tr><td>University Studies</td><td>dissertation, thesis, seminar, lecture hall, faculty</td><td>She is writing her master's <b>dissertation</b> in economics.</td></tr>
<tr><td>Research Methods</td><td>methodology, empirical data, hypothesis, evaluate</td><td>The paper presents <b>empirical data</b> gathered over two years.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The paper was published in a prestigious <b>peer-reviewed journal</b>.</li><li>Students must adhere to strict guidelines on <b>academic honesty</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">He made plagiarism on his research essay.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>He <b>committed plagiarism</b> on his research essay.</span></div>
 </div>
</div>
<div class="checklist" data-key="edu-research">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use academic vocabulary (citation, dissertation, peer-reviewed)</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair 'commit' with 'plagiarism'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Using someone else's work without attribution is ___.'</div>
  <div class="qopts"><button class="qopt">citation</button><button class="qopt">plagiarism</button><button class="qopt">methodology</button></div>
  <div class="qexplain">Uncredited copying is 'plagiarism'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Evaluation of academic work by experts in the same field is ___.'</div>
  <div class="qopts"><button class="qopt">peer review</button><button class="qopt">faculty</button><button class="qopt">dissertation</button></div>
  <div class="qexplain">Expert evaluation is 'peer review'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-9",
        "file": "part-9.html",
        "slug": "society-civics-and-human-rights",
        "title": "Part 9 · Society, Civics & Human Rights",
        "short_title": "Part 9",
        "subtitle": "Citizenship rights, civic duty, volunteering, NGOs, social integration, and equality.",
        "eyebrow": "PET Topic: Society & Civics",
        "stripe": "#7c4fd6",
        "topic_title": "Society, Civics & Human Rights",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss civic responsibilities (*human rights, public service*), community volunteering, and social integration.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Civic Rights</td><td>citizenship, human rights, civic duty, equality</td><td>Voting in elections is an important <b>civic duty</b>.</td></tr>
<tr><td>Community Action</td><td>NGO, non-profit, volunteering, advocacy, integration</td><td>She works for an <b>NGO</b> supporting refugee <b>integration</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>stand up for, speak out, pitch in, give back</td><td>Citizens should <b>stand up for</b> fundamental human rights.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Volunteering at a local shelter is a great way to <b>give back</b>.</li><li>The organization advocates for equal rights and non-discrimination.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We must fight for the human rights.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We must fight for <b>human rights</b>. (No article before general plural!)</span></div>
 </div>
</div>
<div class="checklist" data-key="society-civics">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use civics vocabulary (civic duty, NGO, social integration, advocacy)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use social phrasal verbs (stand up for, give back, pitch in)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Non-governmental non-profit organization is abbreviated as ___.'</div>
  <div class="qopts"><button class="qopt">NGO</button><button class="qopt">GP</button><button class="qopt">CV</button></div>
  <div class="qexplain">Non-governmental organization is 'NGO'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to defend or support an idea or person":'</div>
  <div class="qopts"><button class="qopt">pitch in</button><button class="qopt">stand up for</button><button class="qopt">give back</button></div>
  <div class="qexplain">Defending rights is 'stand up for'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-10",
        "file": "part-10.html",
        "slug": "money-personal-finance-and-consumer-rights",
        "title": "Part 10 · Money, Personal Finance & Consumer Rights",
        "short_title": "Part 10",
        "subtitle": "Monthly budgeting, mortgage applications, interest rates, consumer protection, and scam prevention.",
        "eyebrow": "PET Topic: Finance & Consumer Rights",
        "stripe": "#a3195b",
        "topic_title": "Money, Personal Finance & Consumer Rights",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage personal finances (*budget, mortgage, interest rate*), defend consumer rights, and recognize online scams.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Banking & Debt</td><td>savings account, interest rate, mortgage, loan, expenditure</td><td>They applied for a <b>mortgage</b> to buy their first home.</td></tr>
<tr><td>Consumer Protection</td><td>consumer rights, refund policy, fraudulent, phishing scam</td><td>Beware of <b>phishing scams</b> asking for password resets.</td></tr>
<tr><td>Phrasal Verbs</td><td>save up, pay off, cut back, rip off, fall for</td><td>We are <b>saving up</b> for a deposit on an apartment.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Rising <b>interest rates</b> increase monthly mortgage payments.</li><li>Know your <b>consumer rights</b> when returning faulty goods.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I fell into a phishing scam.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I <b>fell for</b> a phishing scam.</span></div>
 </div>
</div>
<div class="checklist" data-key="finance-consumer">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use financial terms (mortgage, interest rate, expenditure)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use financial phrasal verbs (save up, pay off, fall for, cut back)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Bank loan specifically used to purchase property is a ___.'</div>
  <div class="qopts"><button class="qopt">subscription</button><button class="qopt">mortgage</button><button class="qopt">expenditure</button></div>
  <div class="qexplain">Property bank loan is a 'mortgage'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to reduce spending or consumption":'</div>
  <div class="qopts"><button class="qopt">cut back</button><button class="qopt">pay off</button><button class="qopt">save up</button></div>
  <div class="qexplain">Reducing expenses is 'cut back'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-11",
        "file": "part-11.html",
        "slug": "science-innovation-and-future-tech",
        "title": "Part 11 · Science, Innovation & Future Tech",
        "short_title": "Part 11",
        "subtitle": "Scientific breakthroughs, robotics, home automation, AI innovation, and internet safety.",
        "eyebrow": "PET Topic: Science & Innovation",
        "stripe": "#3562e0",
        "topic_title": "Science, Innovation & Future Tech",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss technological innovation (*AI, smart devices, robotics*), scientific discoveries, and internet safety.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Scientific Innovation</td><td>breakthrough, discovery, research, conduct experiments</td><td>Scientists achieved a major medical <b>breakthrough</b>.</td></tr>
<tr><td>Everyday Tech & AI</td><td>Artificial Intelligence (AI), smart device, automation, robot</td><td><b>Smart devices</b> automate home temperature and lighting.</td></tr>
<tr><td>Internet Security</td><td>firewall, antivirus, cyber threat, digital privacy</td><td>Enable your <b>firewall</b> to protect against <b>cyber threats</b>.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Artificial Intelligence is revolutionizing data analysis.</li><li>Keep your software updated to safeguard <b>digital privacy</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">They made a scientific experiment.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>They <b>conducted / carried out</b> a scientific experiment.</span></div>
 </div>
</div>
<div class="checklist" data-key="science-future-tech">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Pair 'conduct' or 'carry out' with 'experiment'</span></label>
 <label class="check-item"><input type="checkbox"><span>Use innovation and tech terms (breakthrough, AI, automation)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Dramatic and important scientific discovery is a ___.'</div>
  <div class="qopts"><button class="qopt">breakthrough</button><button class="qopt">firewall</button><button class="qopt">automation</button></div>
  <div class="qexplain">Important discovery is a 'breakthrough'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Correct collocation: "Scientists ___ an experiment."'</div>
  <div class="qopts"><button class="qopt">made</button><button class="qopt">conducted</button><button class="qopt">did</button></div>
  <div class="qexplain">Scientific collocation is 'conducted'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-12",
        "file": "part-12.html",
        "slug": "housing-homeownership-and-diy",
        "title": "Part 12 · Housing, Homeownership & DIY",
        "short_title": "Part 12",
        "subtitle": "Real estate, tenancy agreements, home renovations, DIY projects, and utility maintenance.",
        "eyebrow": "PET Topic: Housing & Living",
        "stripe": "#1c8f56",
        "topic_title": "Housing, Homeownership & DIY",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can handle housing contracts (*tenancy agreement, mortgage application*), home DIY renovations, and trade services.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Property Transactions</td><td>real estate, tenancy agreement, maintenance fee, lease</td><td>Read the <b>tenancy agreement</b> before signing.</td></tr>
<tr><td>DIY & Repairs</td><td>renovation, DIY project, electrician, plumber, assemble</td><td>He hired an <b>electrician</b> to rewire the kitchen.</td></tr>
<tr><td>Phrasal Verbs</td><td>move in, move out, fix up, put up, do up</td><td>They spent two months <b>fixing up</b> the old cottage.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>We hired a professional to <b>assemble</b> the new furniture.</li><li>Monthly <b>maintenance fees</b> cover building repairs and trash removal.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We entered in our new apartment yesterday.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We <b>moved into</b> our new apartment yesterday.</span></div>
 </div>
</div>
<div class="checklist" data-key="housing-diy">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use housing vocabulary (tenancy agreement, lease, maintenance fee)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use housing phrasal verbs (move in, move out, fix up, do up)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Written rental contract between landlord and tenant is a ___.'</div>
  <div class="qopts"><button class="qopt">maintenance fee</button><button class="qopt">tenancy agreement</button><button class="qopt">renovation</button></div>
  <div class="qexplain">Rental contract is 'tenancy agreement'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to renovate or redecorate a building":'</div>
  <div class="qopts"><button class="qopt">do up</button><button class="qopt">move out</button><button class="qopt">put up</button></div>
  <div class="qexplain">Renovating is 'do up'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-13",
        "file": "part-13.html",
        "slug": "professional-gastronomy-and-culinary-arts",
        "title": "Part 13 · Professional Gastronomy & Culinary Arts",
        "short_title": "Part 13",
        "subtitle": "Culinary techniques, kitchen hygiene standards, recipes, dining etiquette, and food waste reduction.",
        "eyebrow": "PET Topic: Gastronomy & Dining",
        "stripe": "#c9740a",
        "topic_title": "Professional Gastronomy & Culinary Arts",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can describe culinary preparation techniques (*garnish, marinate, simmer*), food safety, and restaurant etiquette.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Cooking Techniques</td><td>marinate, simmer, poach, garnish, season</td><td>Let the soup <b>simmer</b> gently for twenty minutes.</td></tr>
<tr><td>Culinary Arts</td><td>gastronomy, food safety, kitchen hygiene, sommelier</td><td>Professional kitchens must observe strict <b>kitchen hygiene</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>chop up, boil down, slice off, dish out, warm up</td><td><b>Chop up</b> the herbs before adding them to the sauce.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>Marinate</b> the chicken in olive oil and lemon before grilling.</li><li>Garnish the plate with fresh parsley before serving.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Let the water simmer until it boils very fast.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Let the water <b>boil</b> fast, or let it <b>simmer</b> gently. (Simmer = low gentle heat!)</span></div>
 </div>
</div>
<div class="checklist" data-key="gastronomy-culinary">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Distinguish simmer (gentle heat) from boil (high heat)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use culinary technique verbs (marinate, poach, garnish, season)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'To cook liquid gently just below boiling point is to ___.'</div>
  <div class="qopts"><button class="qopt">simmer</button><button class="qopt">boil</button><button class="qopt">garnish</button></div>
  <div class="qexplain">Gentle cooking heat is 'simmer'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'To decorate a completed food dish with small items is to ___.'</div>
  <div class="qopts"><button class="qopt">poach</button><button class="qopt">garnish</button><button class="qopt">marinate</button></div>
  <div class="qexplain">Plate decoration is 'garnish'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-14",
        "file": "part-14.html",
        "slug": "law-crime-and-judicial-system",
        "title": "Part 14 · Law, Crime & Judicial System",
        "short_title": "Part 14",
        "subtitle": "Legal systems, court proceedings, legally binding contracts, defense attorneys, and crime prevention.",
        "eyebrow": "PET/FCE Topic: Law & Justice",
        "stripe": "#7c4fd6",
        "topic_title": "Law, Crime & Judicial System",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss legal frameworks (*legally binding, breach of contract*), court proceedings, and civil rights.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Court & Trial</td><td>prosecute, defense attorney, verdict, witness, evidence</td><td>The jury reached a unanimous <b>verdict</b> of not guilty.</td></tr>
<tr><td>Contracts & Law</td><td>legally binding, breach of contract, liability, clause</td><td>Signing the document creates a <b>legally binding</b> agreement.</td></tr>
<tr><td>Phrasal Verbs</td><td>break in, cover up, lock up, stand trial, testify to</td><td>The suspect will <b>stand trial</b> next month in court.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The <b>defense attorney</b> presented clear evidence supporting the alibi.</li><li>Failing to pay on time constitutes a <b>breach of contract</b>.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The judge gave a verdict of innocent.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The jury delivered a verdict of <b>not guilty</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="law-crime-system">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use legal terminology (legally binding, breach of contract, liability)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use court verbs (prosecute, testify to, stand trial, deliver a verdict)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Failure to perform any duty required by a contract is a ___.'</div>
  <div class="qopts"><button class="qopt">verdict</button><button class="qopt">breach of contract</button><button class="qopt">liability</button></div>
  <div class="qexplain">Contract violation is 'breach of contract'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to appear in court as a defendant":'</div>
  <div class="qopts"><button class="qopt">stand trial</button><button class="qopt">cover up</button><button class="qopt">break in</button></div>
  <div class="qexplain">Court appearance as defendant is 'stand trial'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-15",
        "file": "part-15.html",
        "slug": "environment-disasters-and-conservation",
        "title": "Part 15 · Environment, Disasters & Conservation",
        "short_title": "Part 15",
        "subtitle": "Natural reserves, habitat destruction, natural disaster responses, evacuation orders, and wildlife protection.",
        "eyebrow": "PET/FCE Topic: Disasters & Nature",
        "stripe": "#a3195b",
        "topic_title": "Environment, Disasters & Conservation",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss emergency disaster responses (*evacuation order, relief effort*) and wildlife habitat conservation.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Disaster Management</td><td>natural disaster, evacuation order, relief effort, hurricane</td><td>Authorities issued an <b>evacuation order</b> before the storm.</td></tr>
<tr><td>Conservation</td><td>habitat destruction, endangered species, national reserve</td><td><b>Habitat destruction</b> threatens native wildlife populations.</td></tr>
<tr><td>Phrasal Verbs</td><td>wipe out, die out, clean up, evacuate from, die off</td><td>Pollution could <b>wipe out</b> rare river species.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>International teams launched a massive <b>relief effort</b> after the flood.</li><li>National reserves protect native plants from total extinction.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Many animals are dying off out due to pollution.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Many animals are <b>dying out</b> / <b>dying off</b> due to pollution.</span></div>
 </div>
</div>
<div class="checklist" data-key="env-disasters">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use disaster response vocabulary (evacuation order, relief effort)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use extinction phrasal verbs (die out, wipe out, die off)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Official instruction instructing people to leave a dangerous area is an ___.'</div>
  <div class="qopts"><button class="qopt">evacuation order</button><button class="qopt">national reserve</button><button class="qopt">relief effort</button></div>
  <div class="qexplain">Safety exit instruction is 'evacuation order'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to become completely extinct":'</div>
  <div class="qopts"><button class="qopt">clean up</button><button class="qopt">die out</button><button class="qopt">evacuate from</button></div>
  <div class="qexplain">Extinction phrasal verb is 'die out'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-16",
        "file": "part-16.html",
        "slug": "advanced-computing-cybersecurity-and-ai",
        "title": "Part 16 · Advanced Computing, Cybersecurity & AI",
        "short_title": "Part 16",
        "subtitle": "Cloud storage solutions, data breaches, machine learning models, UI design, and network infrastructure.",
        "eyebrow": "PET/FCE Topic: Tech Architecture",
        "stripe": "#3562e0",
        "topic_title": "Advanced Computing, Cybersecurity & AI",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can analyze digital infrastructure (*cloud storage, user interface*), AI machine learning, and cybersecurity protocols.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Architecture & Cloud</td><td>cloud storage, network infrastructure, user interface (UI), scalable</td><td><b>Cloud storage</b> allows scalable remote data access.</td></tr>
<tr><td>AI & Security</td><td>machine learning, data breach, software update, deploy</td><td>Engineers <b>deployed</b> a patch after the <b>data breach</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>hack into, back up, shut down, set up, log into</td><td>Always <b>back up</b> critical files on external drives.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li><b>Machine learning models</b> require large datasets for accurate training.</li><li>An intuitive <b>user interface</b> improves software adoption.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">Someone hacked in our corporate server.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>Someone <b>hacked into</b> our corporate server.</span></div>
 </div>
</div>
<div class="checklist" data-key="computing-ai">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use computing architecture terms (cloud storage, UI, scalable, deploy)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use security phrasal verbs (hack into, back up, shut down)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Unauthorized access and theft of confidential corporate data is a ___.'</div>
  <div class="qopts"><button class="qopt">user interface</button><button class="qopt">data breach</button><button class="qopt">cloud storage</button></div>
  <div class="qexplain">Unauthorized access is a 'data breach'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to create a safety copy of computer data":'</div>
  <div class="qopts"><button class="qopt">back up</button><button class="qopt">hack into</button><button class="qopt">shut down</button></div>
  <div class="qexplain">Safety copy action is 'back up'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-17",
        "file": "part-17.html",
        "slug": "arts-culture-and-performing-arts",
        "title": "Part 17 · Arts, Culture & Performing Arts",
        "short_title": "Part 17",
        "subtitle": "Art exhibitions, architectural heritage, live symphonies, theatrical productions, and cultural curation.",
        "eyebrow": "PET/FCE Topic: Arts & Heritage",
        "stripe": "#1c8f56",
        "topic_title": "Arts, Culture & Performing Arts",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can critique performing arts (*theatrical play, live symphony*), architectural heritage, and museum curation.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Performing Arts</td><td>symphony, theatrical play, choreography, soundtrack, venue</td><td>The orchestra performed a breathtaking <b>symphony</b>.</td></tr>
<tr><td>Arts & Curation</td><td>art gallery, exhibition, architectural heritage, aesthetics</td><td>The cathedral is a masterpiece of <b>architectural heritage</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>put on, show off, act out, draw on, compose of</td><td>The theater group will <b>put on</b> a new play in May.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The museum curator organized an impressive <b>art exhibition</b>.</li><li>Her <b>choreography</b> combined traditional dance with modern movement.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">They made a new theatrical play.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>They <b>put on / staged</b> a new theatrical play.</span></div>
 </div>
</div>
<div class="checklist" data-key="arts-performing">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use arts terminology (architectural heritage, symphony, curation)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use theater phrasal verbs (put on, act out, draw on)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Phrasal verb meaning "to produce or stage a performance":'</div>
  <div class="qopts"><button class="qopt">put on</button><button class="qopt">show off</button><button class="qopt">draw on</button></div>
  <div class="qexplain">Staging a play is 'put on'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Sequence of steps and movements in dance performance is ___.'</div>
  <div class="qopts"><button class="qopt">symphony</button><button class="qopt">choreography</button><button class="qopt">aesthetics</button></div>
  <div class="qexplain">Dance movement planning is 'choreography'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-18",
        "file": "part-18.html",
        "slug": "philosophy-values-and-moral-ethics",
        "title": "Part 18 · Philosophy, Values & Moral Ethics",
        "short_title": "Part 18",
        "subtitle": "Moral dilemmas, core values, ethical standards, personal integrity, and philosophical reflection.",
        "eyebrow": "PET/FCE Topic: Ethics & Beliefs",
        "stripe": "#c9740a",
        "topic_title": "Philosophy, Values & Moral Ethics",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can evaluate ethical dilemmas (*moral obligation, integrity*), core personal values, and philosophical stances.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Ethics & Values</td><td>moral dilemma, integrity, core values, ethical standard</td><td>He refused the bribe to maintain his personal <b>integrity</b>.</td></tr>
<tr><td>Philosophy</td><td>morality, belief system, free will, purpose in life</td><td>Pondering <b>free will</b> is a central topic in philosophy.</td></tr>
<tr><td>Phrasal Verbs</td><td>stand for, abide by, live by, believe in, reflect on</td><td>Employees must <b>abide by</b> the company code of ethics.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>Whistleblowers often face a difficult <b>moral dilemma</b>.</li><li>Her <b>core values</b> guide her professional decisions.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">You must abide with the ethical rules.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>You must <b>abide by</b> the ethical rules.</span></div>
 </div>
</div>
<div class="checklist" data-key="philosophy-ethics">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use ethical vocabulary (moral dilemma, integrity, core values)</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair 'abide' with 'by'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Quality of being honest and having strong moral principles is ___.'</div>
  <div class="qopts"><button class="qopt">moral dilemma</button><button class="qopt">integrity</button><button class="qopt">free will</button></div>
  <div class="qexplain">Honesty and strong moral principles is 'integrity'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to accept and act according to a rule":'</div>
  <div class="qopts"><button class="qopt">abide by</button><button class="qopt">stand for</button><button class="qopt">reflect on</button></div>
  <div class="qexplain">Obeying rules is 'abide by'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-19",
        "file": "part-19.html",
        "slug": "current-affairs-and-global-economy",
        "title": "Part 19 · Current Affairs & Global Economy",
        "short_title": "Part 19",
        "subtitle": "Economic recession, public policy reforms, trade agreements, inflation trends, and geopolitical analysis.",
        "eyebrow": "PET/FCE Topic: Current Affairs",
        "stripe": "#7c4fd6",
        "topic_title": "Current Affairs & Global Economy",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can discuss economic trends (*inflation, recession, trade agreement*) and public policy news.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Global Economy</td><td>economic recession, inflation, trade agreement, fluctuate</td><td>Rising energy prices accelerated global <b>inflation</b>.</td></tr>
<tr><td>Public Policy</td><td>policy reform, election campaign, socio-economic trend</td><td>The government proposed a major <b>public policy reform</b>.</td></tr>
<tr><td>Phrasal Verbs</td><td>bring about, point out, lead to, report on, carry out</td><td>Policy changes will <b>bring about</b> economic growth.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The two nations signed a landmark <b>trade agreement</b>.</li><li>Market analysts <b>pointed out</b> potential inflation risks.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">The economic recession made prices to fall down.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>The economic recession <b>caused prices to fall</b>.</span></div>
 </div>
</div>
<div class="checklist" data-key="current-affairs">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use current affairs terms (economic recession, inflation, trade agreement)</span></label>
 <label class="check-item"><input type="checkbox"><span>Use policy phrasal verbs (bring about, point out, lead to)</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Period of temporary economic decline with reduced trade is a ___.'</div>
  <div class="qopts"><button class="qopt">recession</button><button class="qopt">reform</button><button class="qopt">campaign</button></div>
  <div class="qexplain">Economic decline is a 'recession'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to cause or make something happen":'</div>
  <div class="qopts"><button class="qopt">point out</button><button class="qopt">bring about</button><button class="qopt">report on</button></div>
  <div class="qexplain">Causing change is 'bring about'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-20",
        "file": "part-20.html",
        "slug": "business-english-leadership-and-negotiation",
        "title": "Part 20 · Business English, Leadership & Negotiation",
        "short_title": "Part 20",
        "subtitle": "Corporate strategy, key performance indicators (KPIs), executive leadership, trade-offs, and negotiating deals.",
        "eyebrow": "PET/FCE Topic: Business & Negotiation",
        "stripe": "#a3195b",
        "topic_title": "Business English, Leadership & Negotiation",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can manage business negotiations (*trade-off, compromise*), corporate strategy, and KPI performance tracking.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Corporate Strategy</td><td>corporate strategy, KPI, stakeholder, executive leadership</td><td>We reviewed quarterly <b>KPIs</b> during the board meeting.</td></tr>
<tr><td>Negotiation Skills</td><td>trade-off, compromise, agenda, chair a meeting, contract</td><td>Finding a fair <b>trade-off</b> resolved the contract dispute.</td></tr>
<tr><td>Phrasal Verbs</td><td>work out, deal with, bring forward, put off, close down</td><td>We managed to <b>work out</b> a mutually beneficial deal.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>The CEO presented the <b>corporate strategy</b> for international expansion.</li><li>She was appointed to <b>chair the meeting</b> on Monday morning.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">We made a compromise agreement after discussing.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>We <b>reached a compromise</b> after discussing.</span></div>
 </div>
</div>
<div class="checklist" data-key="business-leadership">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use business strategy terms (KPI, corporate strategy, trade-off)</span></label>
 <label class="check-item"><input type="checkbox"><span>Pair 'reach' with 'compromise'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Balance or compromise between two desirable but opposing features is a ___.'</div>
  <div class="qopts"><button class="qopt">KPI</button><button class="qopt">trade-off</button><button class="qopt">agenda</button></div>
  <div class="qexplain">Balanced compromise is a 'trade-off'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to solve or find a solution to a problem":'</div>
  <div class="qopts"><button class="qopt">work out</button><button class="qopt">put off</button><button class="qopt">bring forward</button></div>
  <div class="qexplain">Solving a problem is 'work out'.</div>
 </div>
 <button class="quiz-reset">Reset quiz</button>
</div>"""
    },
    {
        "id": "part-21",
        "file": "part-21.html",
        "slug": "life-skills-decision-making-and-critical-thinking",
        "title": "Part 21 · Life Skills, Decision Making & Critical Thinking",
        "short_title": "Part 21",
        "subtitle": "Critical thinking skills, time management, action planning, evaluating risk factors, and long-term goal setting.",
        "eyebrow": "PET/FCE Topic: Critical Thinking",
        "stripe": "#3562e0",
        "topic_title": "Life Skills, Decision Making & Critical Thinking",
        "body_html": """<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can apply critical thinking (*action plan, risk factor*), prioritize tasks, and execute effective time management.
</div>
<div class="table-wrap"><table>
<thead><tr><th>Domain</th><th>Vocabulary</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Decision & Strategy</td><td>critical thinking, action plan, risk factor, long-term vision</td><td>Evaluate all <b>risk factors</b> before launching the project.</td></tr>
<tr><td>Life Skills</td><td>time management, prioritize, self-reflection, narrow down</td><td>Effective <b>time management</b> reduces daily stress.</td></tr>
<tr><td>Phrasal Verbs</td><td>narrow down, think over, map out, work out</td><td>Let's <b>narrow down</b> our options to the top two choices.</td></tr>
</tbody>
</table></div>
<div class="examples"><span class="label">More Examples</span><ul><li>We created a step-by-step <b>action plan</b> to reach our annual targets.</li><li><b>Critical thinking skills</b> allow you to analyze facts objectively.</li></ul></div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">I need to think over about this offer.</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>I need to <b>think over</b> this offer. (No 'about' after 'think over'!)</span></div>
 </div>
</div>
<div class="checklist" data-key="life-critical-thinking">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>Use critical thinking vocabulary (action plan, risk factor, prioritize)</span></label>
 <label class="check-item"><input type="checkbox"><span>Omit 'about' after phrasal verb 'think over'</span></label>
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
 <div class="qitem">
  <div class="qtext">1. 'Detailed plan outlining actions needed to reach a goal is an ___.'</div>
  <div class="qopts"><button class="qopt">action plan</button><button class="qopt">risk factor</button><button class="qopt">self-reflection</button></div>
  <div class="qexplain">Detailed plan is an 'action plan'.</div>
 </div>
 <div class="qitem">
  <div class="qtext">2. 'Phrasal verb meaning "to reduce the number of possibilities":'</div>
  <div class="qopts"><button class="qopt">map out</button><button class="qopt">narrow down</button><button class="qopt">think over</button></div>
  <div class="qexplain">Reducing options is 'narrow down'.</div>
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

    grid_cards.append("""<a class="part-card" href="../b2/index.html" style="border: 2px solid var(--teal-500); background: var(--teal-050);">
 <div class="stripe" style="background: var(--teal-500);"></div>
 <span class="pnum">NEXT LEVEL</span>
 <h2>Continue to Level B2 &rarr;</h2>
 <p>Ready for the next step? Advance to English Vocabulary Manual Level B2 covering 16 thematic modules aligned with Cambridge B2 First (FCE) syllabus.</p>
 <span class="topics-count">Open Vocabulary Manual B2 &rarr;</span>
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
 <p class="lead">Discussing Ideas, Not Just Things. 21 thematic modules aligned with Cambridge B1 Preliminary (PET) syllabus.</p>
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

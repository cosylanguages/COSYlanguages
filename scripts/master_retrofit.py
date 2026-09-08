import os
import glob
import re

# 1. TEMPLATE CONTENT
TEMPLATE_CONTENT = '''# Standard Grammar & Vocabulary Manual Template

This template defines the mandatory internal structure for all COSYlanguages manual topic pages. Every grammar topic page MUST explicitly implement all 14 authoring steps, which map directly onto the 6 pedagogical CELTA stages.

---

## The 14 Mandatory Authoring Steps & CELTA Stage Mapping

Every topic page must include all 14 steps as non-optional blocks:

| CELTA Stage | Mandatory Authoring Step | Description |
|:---|:---|:---|
| **1. Lead-in / Context** | 1. Vocabulary Theme | Natural thematic anchor (e.g., *Family*, *Food*, *Travel*). |
| | 2. Grammar Title | Clear, descriptive title. |
| | 3. One-Line Summary | Exactly one sentence summarizing the core rule. |
| | 4. Outcome Banner | Highlighting real-world communication value. |
| | 5. Main Visual (Diagram / Flow) | Timeline or visual structure flow. |
| | 6. Colour Example / Context Lead-in | Contextual dialogue or situational examples with semantic color tags. |
| **2. Meaning Check (CCQs)** | 7. Guided Observation (👀 Notice) & 💡 Check your understanding (.ccq-panel) | Inductive observation prompt followed by interactive multiple-choice Concept Checking Questions (`.ccq-panel`) testing meaning with 2–3 `.qopt` choices and `.qexplain`. |
| **3. Form** | 8. 🧠 Think like [Language] | Native cognitive logic behind the grammar rule. |
| | 9. Language Signature / Formulas | Table or formula box showing exact structural mechanics. |
| **4. Pronunciation** | 10. 🗣️ Pronunciation Note | Phonetic guidance on stress, weak forms, contractions, assimilation, or intonation. |
| **5. Controlled → Freer Practice** | 11. ⚠️ Common Mistakes | Stacked ❌ (Incorrect) and ✅ (Correct) patterns with explanations. |
| | 12. 💡 Memory Trick | Visually-anchored trigger or memory hook. |
| | 13. 🔗 Connects to... | Hyperlinks to 2–3 related topic pages within the manual. |
| **6. Production & Feedback** | 14. 🎯 Can you already use this? & 🎉 Progress Celebration | Interactive self-evaluation checklist + Stage 5 `.quiz-panel` + 🎉 Progress Celebration line. |

---

## Standard HTML Section Markup Blueprint

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>[Grammar Topic Title] · COSYlanguages</title>
<meta name="description" content="[One-line summary of topic]">
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Main Navigation"></nav>

<!-- Sticky Header Navigation -->
<header class="sd-sticky-header" aria-label="Section navigation">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="In-page section navigation">
      <a class="sd-jump-link" href="../part-1.html">Part 1</a>
      <a class="sd-jump-link" href="../part-2.html">Part 2</a>
    </nav>
  </div>
</header>

<main class="container">
<div class="page-head">
 <span class="eyebrow">[Part Title · Grammar Knowledge Tree]</span>
 <h1>[Grammar Topic Title]</h1>
 <p class="subtitle">[One-Line Summary of core rule]</p>
 <hr class="rule">
</div>

<!-- Stage 1: Lead-in / Context -->
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can [specific communicative outcome].
</div>

<!-- Stage 2: Interactive Meaning Check (CCQs) -->
<div class="box ccq-panel" style="background:var(--teal-050, #f2faf8); border:1px solid var(--teal-500, #25a894); border-left:4px solid var(--teal-600, #1c9483); padding:18px 20px; border-radius:8px; margin-bottom:24px;">
  <h3 style="margin-top:0; color:var(--teal-900, #0c3f38); font-size:1.1rem;">💡 Check your understanding (CCQs)</h3>
  <p style="margin-bottom:14px; font-style:italic; font-size:0.95rem;">Answer these quick questions to verify meaning:</p>

  <div class="qitem" style="margin-bottom:16px; background:#ffffff; padding:14px 16px; border-radius:8px; border:1px solid var(--line, #e6e2d8);">
    <div class="qtext" style="font-weight:600; margin-bottom:10px; color:var(--teal-900, #0c3f38);">1. Sentence: "[Target Context Sentence]" — [Concept checking question testing temporal/semantic meaning]?</div>
    <div class="qopts" style="display:flex; flex-direction:column; gap:8px;">
      <button type="button" class="qopt" data-correct="true" style="text-align:left; padding:8px 12px; border:1px solid #d0d7de; border-radius:6px; background:#ffffff; cursor:pointer;">[Correct Option testing meaning]</button>
      <button type="button" class="qopt" style="text-align:left; padding:8px 12px; border:1px solid #d0d7de; border-radius:6px; background:#ffffff; cursor:pointer;">[Distractor Option 1]</button>
      <button type="button" class="qopt" style="text-align:left; padding:8px 12px; border:1px solid #d0d7de; border-radius:6px; background:#ffffff; cursor:pointer;">[Distractor Option 2]</button>
    </div>
    <div class="qexplain" style="display:none; margin-top:10px; padding:8px 12px; background:#eaf6f1; border-left:3px solid var(--teal-600, #1c9483); font-size:0.9rem; color:var(--teal-800, #0f5c50); font-weight:600;">[Explanation why this option correctly reflects meaning]</div>
  </div>
</div>

<div class="box mint" style="margin-bottom:20px;">
  <h3>👀 What do you notice?</h3>
  <p>[Observe the examples below. Pay attention to key patterns before reading the rule.]</p>
</div>

<!-- Stage 3: Form Explanation -->
<div class="table-wrap">
  <table>
    <thead><tr><th>Subject</th><th>Affirmative</th><th>Negative</th><th>Question</th></tr></thead>
    <tbody><tr><td>Example</td><td>...</td><td>...</td><td>...</td></tr></tbody>
  </table>
</div>

<div class="box native">
  <h3>🧠 Think like a native speaker</h3>
  <p>[Systemic cognitive logic explaining why the language works this way.]</p>
</div>

<!-- Stage 4: Pronunciation Note -->
<div class="pron-callout" style="background:#f0f7f5; border:1px solid #b2dfdb; border-left:4px solid var(--teal-600, #1c9483); padding:14px 18px; border-radius:8px; margin:20px 0;">
  <h3 style="margin-top:0; color:var(--teal-900, #0c3f38); font-size:1.05rem;">🗣️ Pronunciation Note</h3>
  <p style="margin:0; font-size:0.95rem; line-height:1.5;">[Phonetic details: word stress, weak forms, contractions, assimilation, or intonation.]</p>
</div>

<!-- Stage 5: Practice & Error Corrections -->
<div class="examples">
  <span class="label">More examples</span>
  <ul>
    <li>[Color-coded example sentence 1]</li>
    <li>[Color-coded example sentence 2]</li>
  </ul>
</div>

<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">[Incorrect form]</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>[Correct form]</span></div>
 </div>
</div>

<div class="box mint">
 <h3>💡 Memory trick</h3>
 <p>[Visually-anchored trigger or memory hook.]</p>
</div>

<!-- Cross-link / Related Topics -->
<div class="box connects-to" style="background:#f8f9fa; border:1px solid #e9ecef; border-left:4px solid #6c757d; padding:16px 20px; border-radius:8px; margin:24px 0;">
  <h3 style="margin-top:0; color:#343a40; font-size:1.1rem;">🔗 Connects to...</h3>
  <ul style="margin:8px 0 0; padding-left:20px; font-size:0.95rem;">
    <li><a href="../topics/[related-topic-1].html">[Related Topic 1]</a> — [Brief context for how this topic relates].</li>
    <li><a href="../topics/[related-topic-2].html">[Related Topic 2]</a> — [Brief context for how this topic relates].</li>
  </ul>
</div>

<!-- Stage 6: Production, Evaluation & Celebration -->
<div class="checklist" data-key="[topic-slug]">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>[Communicative can-do skill 1]</span></label>
 <label class="check-item"><input type="checkbox"><span>[Communicative can-do skill 2]</span></label>
 <div class="check-progress"></div>
</div>

<div class="quiz-panel" data-quiz='[...]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 3</span></div>
 <div class="qitem">
  <div class="qtext">1. [Form / Usage Quiz Question Text]</div>
  <div class="qopts"><button type="button" class="qopt">[Option A]</button><button type="button" class="qopt">[Option B]</button></div>
  <div class="qexplain">[Explanation]</div>
 </div>
 <button type="button" class="quiz-reset">Reset quiz</button>
</div>

<div class="box celebration-box" style="background:rgba(28,143,86,0.12); border-left:4px solid var(--role-verb, #1c8f56); padding:14px 18px; margin-top:24px; border-radius:8px;">
  <p style="margin:0; font-size:1rem; font-weight:700; color:var(--teal-900, #0c3f38);">🎉 Progress Celebration: You can now [describe communicative skill unlocked]!</p>
</div>

<div class="pager">
  <a class="prev" href="../topics/[prev-topic].html"><span class="dir">&larr; Previous</span><span class="ttl">[Previous Topic Title]</span></a>
  <a class="next" href="../topics/[next-topic].html"><span class="dir">Next &rarr;</span><span class="ttl">[Next Topic Title]</span></a>
</div>
</main>

<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Grammar Manual · interactive web edition</div>
 <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>
<script src="../assets/app.js"></script>
</body>
</html>
```
'''

# 2. TODO CONTENT
TODO_CONTENT = '''# English Grammar Manual — Development & Tracking TODO

This document tracks the status of topic pages, legacy stub rebuilds, and structural roadmap recommendations across all CEFR levels (`a1`, `a2`, `b1`, `b2`, `c1`, `c2`).

---

## 1. Rebuilt Legacy Part Stub Pages (A0–A1)

The following 11 part overview pages mixed into `manuals/en/grammar/a1/topics/` have been fully rebuilt to the 14-step COSY Grammar Standard (including interactive CCQs, Pronunciation notes, Connects-to links, and Progress Celebrations):

- [x] `part-1-building-blocks.html` — Building Blocks of English Sentences (Word Order & SVO)
- [x] `part-2-nouns-possession.html` — Nouns & Possession (Singular/Plural & Possessive 's)
- [x] `part-3-articles-determiners.html` — Articles & Determiners (a/an/the & this/that/these/those)
- [x] `part-4-pronouns.html` — Pronoun System (Subject, Object, Possessive Adj/Pron)
- [x] `part-5-adjectives-comparisons.html` — Adjectives & Comparisons (-er/more, -est/most)
- [x] `part-6-adverbs.html` — Adverbs of Manner & Frequency
- [x] `part-7-quantifiers.html` — Quantifiers & Countability (some/any, much/many/a lot of)
- [x] `part-8-prepositions.html` — Prepositions of Place & Time (in, on, at)
- [x] `part-9-verbs-modals.html` — Modal Verbs & Imperatives (can/can't, imperatives)
- [x] `part-10-tense-system.html` — A1 Tense System Overview (Present Simple, Continuous, Past Simple, Going To)
- [x] `part-11-questions-negation.html` — Questions & Negation Masterclass (Wh- words, QUASM)

---

## 2. Follow-Up Scope Splitting & Architecture Roadmap

While all 11 part overview pages in `topics/` have been rebuilt to full 14-step standard, they serve as high-level synthetic review nodes. The following scope splits and dedicated topic page enhancements are recommended for future PRs:

### A1 Scope Splitting Recommendations
1. **`part-11-questions-negation.html`**:
   - *Current scope:* Covers Wh- question words, Yes/No auxiliary questions, and negative statements across tenses.
   - *Dedicated topics currently available:* `question-words.html`, `word-order.html`.
   - *Recommended follow-up PR:* Split into dedicated standalone pages for `yes-no-questions.html` and `negative-statements.html` if micro-drilling requires dedicated interactive practice keys.

2. **`part-10-tense-system.html`**:
   - *Current scope:* Connects 4 core A1 tenses in a single comparative summary.
   - *Dedicated topics currently available:* `present-simple.html`, `present-continuous.html`, `past-simple-regular.html`, `past-simple-irregular.html`, `going-to.html`.
   - *Recommended follow-up PR:* Preserve `part-10-tense-system.html` as the synthetic unit capstone while maintaining individual topic depth on the standalone pages.

3. **`part-7-quantifiers.html`**:
   - *Current scope:* Covers countable vs uncountable nouns, `some`/`any`, and `much`/`many`/`a lot of`.
   - *Dedicated topics currently available:* `countable-uncountable.html`, `some-vs-any.html`, `much-many.html`.
   - *Recommended follow-up PR:* Maintain part-7 as the master overview page for quantifiers.

---

## 3. CEFR Level Audit & Standards Compliance

- **A1 Topics:** 53/53 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **A2 Topics:** 46/46 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **B1 Topics:** 47/47 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **B2 Topics:** 36/36 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **C1 Topics:** 6/6 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **C2 Topics:** 6/6 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
'''

# 3. APP JS CONTENT
APP_JS_CONTENT = '''// COSYlanguages Grammar Manual · shared interactivity
(function(){
 "use strict";

 function initTTS(){
   if(!('speechSynthesis' in window)) return;

   document.querySelectorAll('.examples li').forEach(function(el){
     if(el.querySelector('.tts-btn')) return;
     var text = el.textContent.trim();
     var btn = document.createElement('button');
     btn.className = 'tts-btn';
     btn.style.marginLeft = '8px';
     btn.style.background = 'none';
     btn.style.border = 'none';
     btn.style.cursor = 'pointer';
     btn.setAttribute('aria-label', 'Listen to ' + text);
     btn.innerHTML = '🔊';
     btn.addEventListener('click', function(e){
       e.stopPropagation();
       var utterance = new SpeechSynthesisUtterance(text);
       utterance.lang = 'en-GB';
       utterance.rate = 0.9;
       window.speechSynthesis.cancel();
       window.speechSynthesis.speak(utterance);
     });
     el.appendChild(btn);
   });
 }

 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-check-' + box.getAttribute('data-key');
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
     card.addEventListener('click', function(){
       card.classList.toggle('flipped');
     });
   });
 }

 function initQuizzes(){
   document.querySelectorAll('.quiz-panel, .ccq-panel').forEach(function(panel){
     var data = null;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){}
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;

     panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
       var opts = qEl.querySelectorAll('.qopt, .quiz-option');
       var explain = qEl.querySelector('.qexplain');
       var qLocked = false;

       opts.forEach(function(optEl, oi){
         optEl.addEventListener('click', function(){
           if(qLocked) return;
           qLocked = true;

           var isCorrect = optEl.getAttribute('data-correct') === 'true' || (data && data[qi] && data[qi].correct === oi);

           opts.forEach(function(o, idx){
             o.disabled = true;
             o.style.pointerEvents = 'none';
             var oIsCorrect = o.getAttribute('data-correct') === 'true' || (data && data[qi] && data[qi].correct === idx);
             if(oIsCorrect){
               o.classList.add('correct');
               o.style.background = '#eaf6f1';
               o.style.borderColor = '#1c9483';
               o.style.color = '#0f5c50';
               o.style.fontWeight = '700';
             } else if(idx === oi){
               o.classList.add('incorrect', 'wrong');
               o.style.background = '#fdf0f0';
               o.style.borderColor = '#e55353';
               o.style.color = '#9c1c1c';
             } else {
               o.style.opacity = '0.6';
             }
           });

           if(isCorrect) score++;
           if(scoreEl && data){
             scoreEl.textContent = 'Score: ' + score + ' / ' + data.length;
           }
           if(explain){
             explain.classList.add('show');
             explain.style.display = 'block';
           }
         });
       });
     });

     var resetBtn = panel.querySelector('.quiz-reset');
     if(resetBtn){
       resetBtn.addEventListener('click', function(){
         location.reload();
       });
     }
   });
 }

 document.addEventListener('DOMContentLoaded', function(){
   initTTS();
   initChecklists();
   initMistakeFlip();
   initQuizzes();
 });
})();
'''

def write_templates():
    with open('manuals/_TEMPLATE.md', 'w', encoding='utf-8') as f:
        f.write(TEMPLATE_CONTENT)
    with open('manuals/en/grammar/TODO.md', 'w', encoding='utf-8') as f:
        f.write(TODO_CONTENT)
    for level in ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']:
        with open(f'manuals/en/grammar/{level}/assets/app.js', 'w', encoding='utf-8') as f:
            f.write(APP_JS_CONTENT)

if __name__ == '__main__':
    write_templates()
    print("Wrote _TEMPLATE.md, TODO.md, and all app.js files.")

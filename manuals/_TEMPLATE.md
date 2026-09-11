# Standard Grammar & Vocabulary Manual Template

This template defines the standard internal structure for all COSYlanguages manual topic pages going forward. Every topic page must explicitly implement all 14 mandatory CELTA-mapped steps as non-optional sections.

## 14-Step Mandatory CELTA Standard Structure

1. **Communicative Outcome Banner (`.outcome-banner`)**: Clear statement of communicative capacity.
2. **Practice Callout Banner (`.practice-cta-banner`)**: Direct practice drill link.
3. **Situational Context Examples (`.examples`)**: 3+ contextualized example sentences with semantic color coding.
4. **Guided Observation (`👀 What do you notice?`)**: Inductive pattern observation prompt.
5. **Meaning Check / CCQs (`💡 Check your understanding` / `.ccq-panel`)**: Interactive concept-checking questions with 2–3 `.qopt` options and `.qexplain` feedback.
6. **Form & Structure (`🧩 Form & Structure` / `.table-wrap` / `.rule-box`)**: Conjugation tables, formulas, and usage rules.
7. **Why This Matters (`★ Why this matters`)**: Cognitive rationale for importance & common usage.
8. **Think Like a Native Speaker (`💭 Think like a native speaker`)**: Systemic target-language mindset.
9. **Pronunciation Note (`🗣️ Pronunciation Note` / `.pron-callout`)**: Stress, weak forms, liaison, or intonation rules.
10. **Expanded Example Bank (`.examples`)**: Color-coded sentence examples with audio buttons.
11. **Common Mistakes (`⚠️ Common mistakes` / `.mflip`)**: Interactive flip cards showing correct vs incorrect forms.
12. **Connects to... (`🔗 Connects to what you already know` / `.box.connect`)**: Internal links to 2–3 related grammar pages.
13. **Skill Checklist (`🎯 Can you already use this?` / `.checklist`)**: Interactive self-evaluation checklist.
14. **Progress Celebration & Controlled Practice (`🎉 Progress Celebration` / `.quiz-panel`)**: Controlled practice diagnostic quiz with score tracking and completion badge.

---

## Complete HTML Section Markup Blueprint

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>[Topic Title] · COSYlanguages</title>
<meta name="description" content="[Subtitle summary]">
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Main navigation"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="In-page section navigation">
      <a class="sd-jump-link" href="../part-1.html">Part 1</a>
      <a class="sd-jump-link" href="../appendix.html">Appendix</a>
    </nav>
  </div>
</header>

<main class="container">
<div class="page-head">
 <span class="eyebrow">Part N · [Section Title]</span>
 <h1>[Topic Title]</h1>
 <p class="subtitle">[Subtitle summary]</p>
 <hr class="rule">
</div>

<!-- Step 1: Outcome Banner -->
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> You can [communicative goal].
</div>

<!-- Step 2: Practice CTA Banner -->
<div class="box practice-cta-banner" style="background:linear-gradient(135deg, rgba(28,143,86,0.1) 0%, rgba(20,110,66,0.05) 100%); border:1px solid rgba(28,143,86,0.3); border-left:4px solid #1c8f56; padding:12px 18px; margin-bottom:20px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
  <div style="font-size:0.95rem; color:#132321;">
    <strong>🎯 Ready to test your skills?</strong> Reinforce this topic with interactive practice drills.
  </div>
  <a href="../../../../../practice/index.html?lang=en&cat=Grammar&level=[level]&theme=[slug]" class="btn-practice-link" style="background:#1c8f56; color:#ffffff; font-weight:700; font-size:0.9rem; padding:8px 16px; border-radius:6px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:background 0.2s ease; white-space:nowrap;">🎯 Practice this →</a>
</div>

<!-- Step 3: Context Examples -->
<div class="examples" style="margin-bottom:20px;">
 <span class="label">Context Examples</span>
 <ul>
  <li><span class="key-subject key-blue">Julia</span> <span class="key-verb key-green"><b>works</b></span> in London.</li>
  <li><span class="key-subject key-blue">They</span> <span class="key-verb key-green"><b>play</b></span> tennis on Sundays.</li>
 </ul>
</div>

<!-- Step 4: Guided Observation -->
<div class="box mint" style="margin-bottom:20px;">
  <h3>👀 What do you notice?</h3>
  <p>[Inductive question pointing to ending/form patterns in the examples above]</p>
</div>

<!-- Step 5: Meaning Check (CCQs) -->
<div class="ccq-panel" data-quiz='[{"correct": 0}, {"correct": 1}]'>
  <div class="quiz-head">
    <h3>💡 Check your understanding</h3>
    <span class="quiz-score">Score: 0 / 2</span>
  </div>
  <div class="qitem">
    <div class="qtext">1. "[Sentence]" — [Concept question testing meaning/time/aspect]?</div>
    <div class="qopts">
      <button type="button" class="qopt">[Correct option]</button>
      <button type="button" class="qopt">[Plausible wrong option 1]</button>
      <button type="button" class="qopt">[Plausible wrong option 2]</button>
    </div>
    <div class="qexplain">[Short explanation revealed upon selection]</div>
  </div>
</div>

<!-- Step 6: Form & Structure -->
<div class="table-wrap">
  <table>...</table>
</div>
<div class="box rule-box"><p>[Summary rule]</p></div>

<!-- Step 7: Why This Matters -->
<div class="box why">
 <h3>★ Why this matters</h3>
 <p>[Rationale explaining real-world utility and communicative impact]</p>
</div>

<!-- Step 8: Think Like a Native Speaker -->
<div class="box native">
 <h3>💭 Think like a native speaker</h3>
 <p>[Systemic mindset and core linguistic logic]</p>
</div>

<!-- Step 9: Pronunciation Note -->
<div class="pron-callout">
 <h3>🗣️ Pronunciation Note</h3>
 <p>[Weak forms, sentence stress, contraction rules, or liaison]</p>
</div>

<!-- Step 10: Expanded Example Bank -->
<div class="examples"><span class="label">More examples</span><ul>...</ul></div>

<!-- Step 11: Common Mistakes -->
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">...</div>
</div>

<!-- Step 12: Connects to... -->
<div class="box connect">
 <h3>🔗 Connects to what you already know</h3>
 <p><a href="[related-topic-1].html">[Related Topic 1 Title]</a> · [Connection note]. <a href="[related-topic-2].html">[Related Topic 2 Title]</a> · [Connection note].</p>
</div>

<!-- Step 13: Skill Checklist -->
<div class="checklist" data-key="[topic-slug]">
 <h3>🎯 Can you already use this?</h3>
 <label class="check-item"><input type="checkbox"><span>[Skill 1]</span></label>
 <div class="check-progress"></div>
</div>

<!-- Step 14: Controlled Practice & Progress Celebration -->
<div class="icq-note">
  <strong>ICQ:</strong> [Short question confirming task mechanics, e.g. "Do you work alone or with a partner?"]
</div>
<div class="quiz-panel" data-quiz='[{"correct": 0}]'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 1</span></div>
 <div class="qitem">...</div>
 <p class="celebration-msg" style="margin-top:16px; font-weight:700; color:#1c8f56;">🎉 Progress Celebration: You have completed this topic!</p>
 <button type="button" class="quiz-reset">Reset quiz</button>
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

# Standard Grammar Manual Template (CELTA 14-Step Rhythm)

This template defines the mandatory internal structure and markup standard for all COSYlanguages grammar manual topic pages across all levels and target languages.

---

## 14-Step Mandatory Page Rhythm

Every topic page MUST explicitly implement all 14 steps in strict CELTA-guided discovery sequence:

1. **Vocabulary Theme & Part Eyebrow**: Thematic anchor and part classification.
2. **Grammar Title & Subtitle**: Clear, descriptive header and topic overview.
3. **Outcome & Practice CTA Banner**: Outcome statement ("What you can communicate after this page") and practice link.
4. **Situational Context Examples**: 3+ situational example sentences using color-coded syntax (`.key-blue`, `.key-green`, `.key-orange`).
5. **Guided Observation (👀 Notice)**: Inductive prompt guiding learners to inspect pattern prior to reading rules.
6. **Meaning Check (💡 Check your understanding - CCQs)**: Mandatory labeled CCQ box with 2–3 genuine concept-check questions testing meaning (Yes/No or short choice, never translation).
7. **Main Rule & Conjugation Formula**: Tables (`.table-wrap`), formulas, and structural rules (`.rule-box`).
8. **Think Like a Native Speaker (🧠 Native)**: Cognitive explanation of language logic and systemic reasons.
9. **Pronunciation Note (🗣️ Pronunciation Note)**: Stress patterns, weak forms, liaison, or intonation rules.
10. **Memory Trick (💡 Memory Trick)**: Visually anchored memory trigger or visual timeline component (`.timeline-wrap`).
11. **Common Mistakes (⚠ Common Mistakes)**: Stacked error-correction flip cards (`.mflip`).
12. **Connects to... (🔗 Connects to...)**: Learning journey links pointing to 2–3 related topic pages.
13. **Can You Already Use This? (📍 Checklist)**: Self-evaluation checklist (`.checklist`).
14. **Progress Celebration & Diagnostic Quiz (🎉 Celebration & Quiz)**: Milestone celebration line and interactive quiz (`.quiz-panel`).

---

## Complete HTML Section Markup Blueprint

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>[Topic Title] · COSYlanguages</title>
<meta name="description" content="[Topic Subtitle]">
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Main Navigation"></nav>

<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="In-page section navigation">
      <a class="sd-jump-link" href="../part-1.html">Part 1</a>
      <a class="sd-jump-link" href="../appendix.html">Appendix</a>
    </nav>
  </div>
</header>

<main class="container">
<!-- Step 1 & 2: Header & Eyebrow -->
<div class="page-head">
 <span class="eyebrow">Part [N] · [Category Name]</span>
 <h1>[Topic Title]</h1>
 <p class="subtitle">[Topic Subtitle / One-line summary]</p>
 <hr class="rule">
</div>

<!-- Step 3: Outcome & CTA Banners -->
<div class="box outcome-banner">
  <strong>🎯 What you can communicate after this page:</strong> [Communicative goal statement].
</div>
<div class="box practice-cta-banner">
  <div><strong>🎯 Ready to test your skills?</strong> Reinforce this topic with interactive practice drills.</div>
  <a href="../../../../../practice/index.html?lang=en&cat=Grammar&level=[level]&theme=[slug]" class="btn-practice-link">🎯 Practice this →</a>
</div>

<!-- Step 4: Situational Context Examples -->
<div class="examples">
  <span class="label">Context Examples</span>
  <ul>
    <li><span class="key-subject key-blue">Julia</span> <span class="key-verb key-green"><b>works</b></span> <span class="key-object key-orange">in a hospital</span>.</li>
    <li><span class="key-subject key-blue">They</span> <span class="key-verb key-green"><b>live</b></span> <span class="key-object key-orange">in London</span>.</li>
  </ul>
</div>

<!-- Step 5: Guided Observation -->
<div class="box mint">
  <h3>👀 What do you notice?</h3>
  <p>Look at the verbs above. What ending is added for "Julia" compared to "They"?</p>
</div>

<!-- Step 6: Labeled CCQ Section (Mandatory Concept Check) -->
<div class="box ccq-section">
  <h3>💡 Check your understanding (CCQs)</h3>
  <p><i>Answer these quick questions to verify the meaning:</i></p>
  <ul class="ccq-list">
    <li><strong>Q1:</strong> Is Julia working right now at this exact second, or is this her regular routine? <span class="ccq-answer"><strong>(Her regular routine)</strong></span></li>
    <li><strong>Q2:</strong> Is this action finished, or does it happen regularly? <span class="ccq-answer"><strong>(It happens regularly)</strong></span></li>
  </ul>
</div>

<!-- Step 7: Main Rule & Conjugation Table -->
<div class="table-wrap">
  <table>
    <thead><tr><th>Subject</th><th>Affirmative</th></tr></thead>
    <tbody>
      <tr><td>I / You / We / They</td><td>work</td></tr>
      <tr><td>He / She / It</td><td>work<b>s</b></td></tr>
    </tbody>
  </table>
</div>
<div class="box rule-box">
  <p><strong>Rule:</strong> [Form description and spelling rules].</p>
</div>

<!-- Step 8: Think Like a Native Speaker -->
<div class="box native">
  <h3>🧠 Think like a native speaker</h3>
  <p>[Systemic explanation of why English uses this pattern].</p>
</div>

<!-- Step 9: Labeled Pronunciation Note -->
<div class="box pronunciation-note">
  <h3>🗣️ Pronunciation note</h3>
  <p><strong>Sound pattern:</strong> Pay attention to the final ending. [e.g., -s sounds like /z/ after voiced sounds, /s/ after unvoiced sounds, and /ɪz/ after sibilants].</p>
</div>

<!-- Step 10: Memory Trick -->
<div class="box mint">
  <h3>💡 Memory trick</h3>
  <p>[Visually anchored trigger or rule acronym].</p>
</div>

<!-- Step 11: Common Mistakes -->
<div class="mistakes">
  <div class="m-title">⚠️ Common mistakes</div>
  <div class="mflip">
    <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">[Incorrect Example]</span></div>
    <span class="hint">tap to see the correct form</span>
    <div class="right-line"><span class="c">✅</span><span>[Correct Example]</span></div>
  </div>
</div>

<!-- Step 12: Connects-to Block -->
<div class="box connects-to">
  <h3>🔗 Connects to...</h3>
  <p>Expand your knowledge journey with related topics:</p>
  <ul>
    <li><a href="../topics/[related-1].html"><strong>[Related Topic 1 Name]</strong></a> — [Short connection note]</li>
    <li><a href="../topics/[related-2].html"><strong>[Related Topic 2 Name]</strong></a> — [Short connection note]</li>
  </ul>
</div>

<!-- Step 13: Can You Already Checklist -->
<div class="checklist" data-key="[topic-slug]">
  <h3>🎯 Can you already use this?</h3>
  <label class="check-item"><input type="checkbox"><span>[Can-do statement 1]</span></label>
  <label class="check-item"><input type="checkbox"><span>[Can-do statement 2]</span></label>
  <div class="check-progress"></div>
</div>

<!-- Step 14: Progress Celebration & Diagnostic Quiz -->
<div class="box progress-celebration">
  <h3>🎉 Great job! Progress milestone complete</h3>
  <p>You've mastered the core concept. Test your knowledge below to lock in your progress!</p>
</div>

<div class="quiz-panel" data-quiz='[{"correct": 1}, {"correct": 0}]'>
  <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
  <div class="qitem">
    <div class="qtext">1. [Question prompt]</div>
    <div class="qopts">
      <button type="button" class="qopt">[Option A]</button>
      <button type="button" class="qopt">[Option B]</button>
    </div>
    <div class="qexplain">[Explanation]</div>
  </div>
  <button type="button" class="quiz-reset">Reset quiz</button>
</div>

<div class="pager">
  <a class="prev" href="../topics/[prev].html"><span class="dir">&larr; Previous</span><span class="ttl">[Prev Title]</span></a>
  <a class="next" href="../topics/[next].html"><span class="dir">Next &rarr;</span><span class="ttl">[Next Title]</span></a>
</div>
</main>

<footer class="site">
  <div class="container">
    <div>COSYlanguages · Grammar Manual</div>
  </div>
</footer>
<script src="../assets/app.js"></script>
</body>
</html>
```

# COSYlanguages — Placement Assessment System Documentation 🌿

## 1. Executive Summary & Architecture

The COSYlanguages Placement Assessment is a practical, rigorous, adaptive language-placement system built specifically for static web environments (GitHub Pages). It evaluates five distinct skill areas independently:

1. **Grammar** (Structure & syntax accuracy)
2. **Vocabulary** (Lexical range, collocations, idioms)
3. **Reading Comprehension** (Excerpts, inferences, argument evaluation)
4. **Writing Production** (Target tasks evaluated via analytic rubrics)
5. **Speaking Interaction** (Browser audio recording & self-assessment / human-review workflow)

### Technology Stack
- **Hosting Environment:** Static GitHub Pages (no backend or database required).
- **Core Engine:** Vanilla JavaScript ES6 modules (`js/placement/`).
- **Styling:** CSS3 CSS custom properties (`css/tokens.css`, `css/placement.css`).
- **Storage:** Local browser `localStorage` for auto-save and session recovery.
- **Audio:** HTML5 `MediaRecorder` API with Web Audio API level visualization.

---

## 2. CEFR Alignment & Question Banks

The assessment adheres to the Council of Europe's **CEFR Companion Volume** descriptors across 7 operational bands:

| Band Code | CEFR Descriptor & COSYlanguages Operational Definition |
|-----------|------------------------------------------------|
| **A0** | Practical label for learners below/around Pre-A1 (isolated basic words, formulaic recognition). |
| **A1** | Breakthrough / Beginner (simple phrases, basic needs, concrete daily topics). |
| **A2** | Waystage / Elementary (routines, simple past, familiar everyday transactions). |
| **B1** | Threshold / Intermediate (main points, linear narration, connected text, problem explanation). |
| **B2** | Vantage / Upper-Intermediate (complex arguments, passive voice, phrasal collocations, active discussions). |
| **C1** | Effective Operational Proficiency / Advanced (nuance, register precision, subtext, structured reports). |
| **C2** | Mastery / Proficiency (subtle stylistic distinctions, polyphonic synthesis, near-native control). |

### Question Bank Structure
- **Core English Bank (`js/placement/question-bank-en.js`):** 252 quality-controlled items (7 bands × 3 skills × 12 items).
- **Multilingual Banks (`js/placement/question-banks-multilingual.js`):** 42 items per language for French (`fr`), Italian (`it`), Russian (`ru`) and Greek (`el`) — 7 bands × 3 skills × 2 items. Two items per cell is the floor: the adaptive selector needs at least one alternative to pick from at every difficulty.
- **Provisional Marking:** Initial items are marked `provisional: true` pending empirical pilot-testing data.
- **Schema:** every item carries `id` (prefixed with the language code), `skill`, `band`, `difficulty` (1–7, matching the band), `question` (plus `passage` for reading), three or more `options`, `correctAnswer`, `explanation`, `scoringRules` and `cefrDescriptor`. `tests/placement.test.js` enforces all of it.

### Task Prompts
- Spec: `js/placement/prompts-and-rubrics.js` (English tasks + the analytic rubrics).
- Content: `js/placement/prompts-multilingual.js` — six writing tasks (A1–C2) and five speaking tasks per localised language, shaped after the exam each language is taught for (DELF/DALF, CILS/CELI, ТРКИ, Ελληνομάθεια).
- Always read them through `getWritingPrompts(lang)` / `getSpeakingPrompts(lang)`; they return the localised set, or the English set for `en` and for any language without localised tasks.

---

## 3. Adaptive Routing Algorithm

The `AdaptiveEngine` (`js/placement/adaptive-engine.js`) operates as follows:

1. **Onboarding & Screening:** User selects Target Language, Learning Purpose (`general`, `spoken`, `exam`), and Mode (`short_screening` vs `full_diagnostic`).
2. **Theta Calibration:** Each skill thread maintains difficulty estimate $\theta \in [1.0, 7.0]$.
3. **Dynamic Item Selection:** Selects unread items near current $\theta$.
4. **Ability Estimation:** After every answer the thread's $\theta$ is the maximum-likelihood estimate of a Rasch (1PL) model, $P(\text{correct}) = \sigma(\theta - b_i)$, searched over $\theta \in [1, 7]$ in 0.05 steps. A fixed-step staircase was used before; it drifts one band per two answers regardless of how informative those answers were, and it could leave the bank before the budget was spent.
   - The information at the estimate, $\sum p(1-p)$, gives the standard error $SE = 1/\sqrt{\sum p(1-p)}$, stored as `thread.se`.
5. **Confidence from evidence:** $SE \le 0.6$ is `high`, $\le 1.1$ is `medium`, above that `low`. The reported range is the band span $\theta \pm SE$. Per-item variance is only a fallback for sessions recorded before `se` existed.
6. **Stopping Rules:**
   - Budget per receptive skill: `min(3, items available)` in `short_screening`, `min(8, items available)` in `full_diagnostic`. The budget can never exceed the bank, otherwise a thread runs out of items instead of ending on a count.
   - Writing and speaking are one graded task each; the task ends the thread.

---

## 4. Scoring Model & Active-Passive Gap Policy

The `ScoringModel` (`js/placement/scoring-model.js`):

- **Independent Skill Scoring:** Reports score, CEFR band, confidence interval, and evidence count for EACH skill.
- **Range Reporting:** Reports ranges (e.g. `B1–B2`) when response variance is high or theta falls on a boundary.
- **Insufficient Evidence Protection:** If $< 3$ items are answered in a skill, reports `"Insufficient Evidence"` rather than guessing.
- **Active-Passive Gap Detection:** Compares Receptive Average against Productive Average. If Receptive exceeds Productive by $\ge 1.25$ levels, flags an Active-Passive Speaking Gap and caps overall placement near productive capability to build real-world confidence.
- **Non-Arithmetic Purpose Policy:**
  - `spoken` purpose: Weighted heavily on Speaking interaction.
  - `exam` purpose: Balanced with minimum grammar/reading floor.
  - `general` purpose: Balanced with active floor protection.

---

## 5. Writing & Speaking Assessment Workflows

### Writing Evaluation (`js/placement/writing-evaluator.js`)
- Client-side heuristic analyzer, language-aware: connectors, formal/informal markers and the long-word threshold come from a per-language profile (`en`, `fr`, `it`, `ru`, `el`). Tokens are split on Unicode letters, so Greek and Cyrillic text is measured instead of being erased by an ASCII-only pattern.
- Measures word count, sentence count and length spread, connector coverage, root type–token ratio (stable across text lengths), long-word share, capitalisation, repeated words and spacing defects.
- Scores 6 analytic criteria on 1–7: Task Fulfilment, Organisation & Cohesion, Grammatical Accuracy, Vocabulary Precision, Register, Mechanics — weighted as the rubric does (0.2 × 4, 0.1 × 2).
- Banding is deliberately conservative: a submission below 40% of the task's `minWords` cannot be placed above A2, below 70% above B1, because a task that was not attempted cannot certify its band.
- Provides criterion-level feedback, error highlights, strengths, and actionable improvement advice.

### Speaking Assessment (`js/placement/audio-recorder.js`)
- Uses `MediaRecorder` API for local recording with live timer, volume meter bar, and audio playback.
- **Self-assessment, not machine scoring:** the learner picks a CEFR band for the answer they just gave. There is no speech analysis, and no band is invented on their behalf.
- **Non-Audio Fallback:** If the browser lacks `MediaRecorder` or microphone permission is denied, renders clean self-assessment fallback options without penalising the user.
- **Transparency Disclosure:** Explicitly informs users that audio recordings are captured locally for self-assessment and human teacher review.
- **Skipping is not evidence:** a skipped task leaves the ability estimate untouched and is reported as `Insufficient Evidence`, never as a default band.

---

## 6. Empirical Pilot-Testing & Validation Plan

Before describing the question bank as psychometrically validated:

1. **Pilot Sample:** Administer test to a minimum cohort of $N = 300$ language learners across target levels.
2. **Item Calibration:** Calculate Item Difficulty ($p$-values) and Discrimination Indices ($r_{bis}$) to refine provisional items.
3. **Inter-Rater Reliability:** Conduct double-blind human rating on writing and speaking submissions to calculate Intraclass Correlation Coefficient ($\text{ICC} \ge 0.80$).
4. **External Anchor Comparison:** Compare COSYlanguages placement recommendations against standard standardized exams (IELTS, DELF, CILS, TORFL) to verify concurrent validity.

---

## 7. Developer & Testing Instructions

### Run Unit & Integration Tests
```bash
node --test tests/placement.test.js
```

### Validate HTML Markup
```bash
npx html-validate placement-quiz.html
```

### Deploy to GitHub Pages
1. Commit changes to working branch.
2. Ensure `.nojekyll` exists in repo root.
3. Push to main/deployment branch. GitHub Actions will publish static assets automatically.

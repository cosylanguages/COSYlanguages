# COSY Languages — Placement Assessment System Documentation 🌿

## 1. Executive Summary & Architecture

The COSY Languages Placement Assessment is a practical, rigorous, adaptive language-placement system built specifically for static web environments (GitHub Pages). It evaluates five distinct skill areas independently:

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

| Band Code | CEFR Descriptor & COSY Operational Definition |
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
- **Multilingual Banks (`js/placement/question-banks-multilingual.js`):** Localized banks for French (`fr`), Italian (`it`), Russian (`ru`), and Greek (`el`).
- **Provisional Marking:** Initial items are marked `provisional: true` pending empirical pilot-testing data.

---

## 3. Adaptive Routing Algorithm

The `AdaptiveEngine` (`js/placement/adaptive-engine.js`) operates as follows:

1. **Onboarding & Screening:** User selects Target Language, Learning Purpose (`general`, `spoken`, `exam`), and Mode (`short_screening` vs `full_diagnostic`).
2. **Theta Calibration:** Each skill thread maintains difficulty estimate $\theta \in [1.0, 7.0]$.
3. **Dynamic Item Selection:** Selects unread items near current $\theta$.
4. **Step Adjustments:**
   - Correct answer: $\theta \leftarrow \min(7.0, \theta + 0.6)$
   - Incorrect answer: $\theta \leftarrow \max(1.0, \theta - 0.6)$
5. **Inconsistency Detection:** Evaluates 4-item response variance. If variance $> 0.22$, marks confidence as `medium` and selects tie-breaker boundary items.
6. **Stopping Rules:**
   - Minimum evidence threshold: 3 items per thread required for score assignment.
   - Max questions reached: 15 items (screening) / 25 items (full diagnostic).

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
- Client-side heuristic analyzer measuring word count, average sentence length, logical connectors, Type-Token Ratio (TTR), and advanced vocabulary keywords.
- Scores 6 analytic criteria: Task Fulfilment, Organisation & Cohesion, Grammatical Accuracy, Vocabulary Precision, Register, Mechanics.
- Provides criterion-level feedback, error highlights, strengths, and actionable improvement advice.

### Speaking Assessment (`js/placement/audio-recorder.js`)
- Uses `MediaRecorder` API for local recording with live timer, volume meter bar, and audio playback.
- **Non-Audio Fallback:** If browser lacks `MediaRecorder` or microphone permissions are denied, renders clean self-assessment fallback options without penalizing the user.
- **Transparency Disclosure:** Explicitly informs users that audio recordings are captured locally for self-assessment and human teacher review. No fake AI speech scoring is fabricated.

---

## 6. Empirical Pilot-Testing & Validation Plan

Before describing the question bank as psychometrically validated:

1. **Pilot Sample:** Administer test to a minimum cohort of $N = 300$ language learners across target levels.
2. **Item Calibration:** Calculate Item Difficulty ($p$-values) and Discrimination Indices ($r_{bis}$) to refine provisional items.
3. **Inter-Rater Reliability:** Conduct double-blind human rating on writing and speaking submissions to calculate Intraclass Correlation Coefficient ($\text{ICC} \ge 0.80$).
4. **External Anchor Comparison:** Compare COSY placement recommendations against standard standardized exams (IELTS, DELF, CILS, TORFL) to verify concurrent validity.

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

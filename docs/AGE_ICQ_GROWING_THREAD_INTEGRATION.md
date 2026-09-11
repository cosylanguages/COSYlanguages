# Additive Features Integration Guide: CELTA Alignment & Page Structure

This document provides a guide for contributors on how COSYlanguages' four curriculum/pedagogical additive features extend the core 6-stage CELTA model (`grammar/GRAMMAR_STANDARD.md`) and the 14-step topic page blueprint (`manuals/_TEMPLATE.md`).

---

## Architectural Mapping Overview

| Additive Feature | Schema Field Name | Extended File(s) | CELTA Stage Alignment | 14-Step Blueprint Location |
|---|---|---|---|---|
| **Age Adaptation** | `ageAdaptation` | `curriculum/_schema/curriculum.schema.json`<br>`curriculum/{lang}/{type}/{level}.json` | **Stage 1: Lead-in / Context** | **Step 1:** Communicative Outcome Banner<br>**Step 3:** Context Examples |
| **Instruction Checking Questions (ICQs)** | `instructionCheck` | `schema/lesson-stage.schema.json`<br>`reference-grammar/{lang}/lessons/*.json`<br>`manuals/{lang}/grammar/{level}/topics/*.html` | **Stage 5: Controlled → Freer Practice** | **Step 14:** `.icq-note` callout preceding `.quiz-panel` |
| **Cumulative Growing Thread** | `growingTask` | `curriculum/_schema/curriculum.schema.json`<br>`curriculum/{lang}/{type}/{level}.json`<br>`practice/growing-thread.html` | **Stage 6: Production & Feedback** | **Step 14:** Progress Celebration / Cumulative Output |
| **Big Spiral Review Checkpoints** | `bigSpiralReview`<br>`bigSpiralScope` | `curriculum/_schema/curriculum.schema.json`<br>`curriculum/{lang}/{type}/{level}.json` | **Stage 1 (Context) & Stage 6 (Production)** | **Step 2:** Practice CTA / **Step 14:** Review Checkpoint |

---

## Feature Deep-Dives

### 1. `ageAdaptation` (Audience Delivery Adaptation)
- **CELTA Mapping:** **Stage 1 (Lead-in / Context)**
- **Purpose:** Adapts activity delivery and presentation style for four distinct demographic groups (**Children**, **Teens**, **Adults**, **Seniors**) without altering the core linguistic target or introducing untaught vocabulary/grammar.
- **Implementation Rules:**
  - *Children:* Physical gestures, Total Physical Response (TPR), puppets, rhythm chants, gamified team races.
  - *Teens:* Digital whiteboards, smartphone polls, avatar creation, peer challenges, video recording.
  - *Adults:* Real-life transactional scenarios, workplace forms, explicit phonics/grammar breakdowns, self-assessment grids.
  - *Seniors:* Large-print cards, unhurried pacing, quiet pair work, clear visual contrast charts, gentle repetition.

---

### 2. `instructionCheck` (ICQs — Instruction Checking Questions)
- **CELTA Mapping:** **Stage 5 (Controlled → Freer Practice)**
- **Purpose:** Confirms student comprehension of activity mechanics (pair vs. individual work, time limits, roleplay roles, output format) *before* execution, preventing task confusion.
- **Difference from CCQs (Stage 2):** Stage 2 CCQs (`meaningCheck` / `.ccq-panel`) check understanding of *language meaning/aspect*, whereas Stage 5 ICQs (`instructionCheck` / `.icq-note`) check understanding of *task execution mechanics*.
- **HTML Markup (`manuals/_TEMPLATE.md` Step 14):**
  ```html
  <div class="icq-note">
    <strong>ICQ:</strong> Do you work alone or with a partner? <em>(Answer: With a partner)</em>
  </div>
  ```

---

### 3. `growingTask` (Cumulative Monologue & Dialogue Threads)
- **CELTA Mapping:** **Stage 6 (Production & Feedback)**
- **Purpose:** Constructs two parallel, cumulative learning artifacts across the course: a first-person monologue (`selfPortrait`) and a two-person exchange (`dialogue`).
- **Difference from `recycled` (Stage 1):** The `recycled` field lists individual prior items pulled back for local recall in a single lesson. The `growingTask` represents a continuous, expanding narrative thread spanning the entire course.
- **Authoring Policies:**
  - **Policy A (Review & Exam Exemption):** Review and exam lessons (type `srev`/`exam` or title containing "review"/"exam") *never* receive a `growingTask` object.
  - **Policy B (Optional Monologue):** `selfPortrait` is optional. Only write `selfPortrait` when a natural, grammatically coherent first-person sentence can be formed using ONLY target items taught up to that lesson. For functional/conversational lessons (greetings, politeness formulas, phone openers), omit `selfPortrait` and provide `dialogue` only.

---

### 4. `bigSpiralReview` & `bigSpiralScope` (Periodic Unit Checkpoints)
- **CELTA Mapping:** **Stage 1 (Schema Reactivation) & Stage 6 (Comprehensive Production)**
- **Purpose:** Provides scheduled, macro-level review checkpoints that reactivate *all* cumulative learning across previous unit pairs (e.g., Units 1–2, Units 1–4, Units 1–6, Units 1–8, Units 1–10).
- **Placement:** Positioned on the final lesson of every even-numbered unit in curriculum JSON files:
  ```json
  "bigSpiralReview": true,
  "bigSpiralScope": "Units 1-4"
  ```

# COSYlanguages — Consolidated Master Roadmap & Strategy

This document consolidates future roadmap initiatives, platform specifications, and strategic proposals for COSYlanguages.

---

## 1. Core Platform & Feature Roadmap

### A. Site-Wide Interactivity & User Experience
* **Placement & Onboarding:**
  * Interactive placement test flow to guide learners to their appropriate CEFR starting point (A0 through C1).
  * Onboarding modal/wizard saving language preferences, target CEFR level, and learning goals in `localStorage`.
* **Cross-Language & i18n Capabilities:**
  * Extended localization engine supporting UI toggle across English, French, Italian, Russian, and Greek.
  * Standardized `data-translate-key` attribute binding and dynamic locale switching in `js/core/i18n.js`.
* **Interactive Grammar & Vocabulary Tools:**
  * Dynamic, color-coded grammar tables (Subject, Verb, Object, Endings) adhering to `GRAMMAR_STANDARD.md`.
  * Contextual word bank chips and structured rule formulation exercises.
  * Practice exercise evolution & Duolingo parity roadmap detailed in `planning/DUOLINGO_PRACTICE_PARITY_BRAINSTORM.md` (visual learning path, SM-2 SRS engine, sentence cloze tasks, daily XP goals, streak freeze, speech recognition).
  * Deep Pedagogical Efficacy & Retention Framework detailed in `planning/PEDAGOGICAL_EFFICACY_AND_RETENTION_BRAINSTORM.md` (active retrieval, collocation webs, diagnostic rule feedback, interleaved learning, and speaking club bridges).
* **Analog & Offline-First Strategy:**
  * Printable Zine generators, printable vocabulary cards, and offline boardgame kits for classroom & group events.
  * Enhanced PWA offline caching and cross-device syncing via local client storage.

---

## 2. Curriculum & Course Track Expansion

### A. Language Expansion
* Core launch priorities: English, French, Italian, Russian, Modern Greek.
* Secondary evaluation track: Spanish, German, Portuguese.

### B. Course Track Additions & Pedagogical Enhancements
* **General Course**: Interactive visual dictionary integration for A0–C2 levels.
* **Spoken Course**: Real-time voice prompt evaluation and fluency timers.
* **Exam Prep**: Standardized test preparation modules (DELF/DALF, CILS, TORFL, IELTS/TOEFL).
* **Travelling Course**: Practical scenario cards and essential survival phrasebooks.
* **Professional Course**: Email templates, workplace simulation rounds, and business etiquette.
* **Relocation Course**: Housing, administrative forms, and local integration guides.

---

## 3. Events & Speaking Clubs Growth

### A. Speaking Club Session Expansion
* Video resource integration mapping for authentic listening inputs.
* Expanded debate prompts and dual-perspective balance scenarios.

### B. ProgressMe / Edvibe Integration Strategy
* Export/import adapter mapping COSY Speaking Club session structures into ProgressMe / Edvibe lesson templates.
* Synchronized vocabulary lists and teacher notes format.

---

## 4. Strategic Position & Ecosystem

### A. Market & Ecosystem Strategy
* Dual-tier platform architecture:
  * **Free Portal**: Single-purpose reference PWAs, vocabulary games, practice hub, and public grammar manuals.
  * **Premium Workspace**: Structured course academies and interactive speaking/multimedia club events.
* Competitor benchmarking against standalone verb conjugators and group speaking practice services.

---

## 5. Analytics & Usability Testing Framework

* Lightweight, privacy-preserving event analytics tracking:
  * Session completion rates and filter interactions.
  * Standardized usability test checklists for cross-device responsive verification.

---

## 6. Taxonomy-Driven Course Track Expansion Strategy

### A. Tripartite Matrix Integration across Course Curriculums
To maximize learning outcomes and knowledge retention across all 6 course tracks (`general`, `spoken`, `professional`, `travelling`, `relocation`, `exam`), all curriculum JSON datasets will be enriched using the mandatory `taxonomy_tags` metadata schema:

1. **General Course (`general`)**:
   - **Weighting**: 33% Vocabulary · 33% Grammar · 33% Communication.
   - **Level Progression**: Full CEFR coverage A1–C2 (50 lessons/level A1–B2; 20–21 lessons C1–C2).
   - **Taxonomy Integration**: Every lesson explicitly pairs a specific Vocabulary sub-theme (e.g., `food_drink` -> `meals`) with a structural Grammar rule (e.g., `partitive_articles`) and a Communication functional goal (e.g., `ordering_food` under `starting`).

2. **Spoken Course (`spoken`)**:
   - **Weighting**: 60% Communication · 25% Vocabulary · 15% Grammar.
   - **Level Progression**: A1–C2 (30 spoken-weighted lessons per level).
   - **Taxonomy Integration**: Prioritizes floor management, turn-taking, active listening, and conversational repair from **The 10 Communication Systems** using natural informal/neutral registers.

3. **Professional Course (`professional`)**:
   - **Weighting**: 45% Vocabulary · 35% Communication · 20% Grammar.
   - **Level Progression**: B1–C2 (20 specialized business lessons per level).
   - **Taxonomy Integration**: Focuses on `work`, `jobs`, `technology`, and `finance` vocabulary paired with formal register communication systems (`managing_floor`, `disagreeing_politely`).

4. **Travelling Course (`travelling`)**:
   - **Weighting**: 50% Vocabulary · 40% Communication · 10% Grammar.
   - **Level Progression**: A1–B1 (20 situational travel lessons per level across 5 units).
   - **Taxonomy Integration**: Centers on `travel`, `food_drink`, `places`, and `health_medicine` vocabulary paired with immediate pragmatic communication systems (`clarifying`, `explaining`).

5. **Relocation Course (`relocation`)**:
   - **Weighting**: 45% Vocabulary · 35% Communication · 20% Grammar.
   - **Level Progression**: A2–C1 (20 administrative/life integration lessons per level).
   - **Taxonomy Integration**: Targets `furniture`, `shopping`, `law_order`, `society`, and `health_medicine` vocabulary with neutral/formal registers for renting, banking, and bureaucracy.

6. **Exam Preparation (`exam`)**:
   - **Weighting**: 50% Grammar · 35% Communication · 15% Vocabulary.
   - **Level Progression**: B1–C2 (20 exam-task-focused lessons per level).
   - **Taxonomy Integration**: Rigorous focus on advanced `syntax`, `conditionals_moods`, and formal discourse markers paired with persuasive essay/oral presentation communication systems (`giving_opinions`, `explaining`).

### B. Interconnected Knowledge Recycling Chains
All course tracks enforce mandatory lesson-to-lesson knowledge recycling via the `recycled` schema field, ensuring newly introduced vocabulary items, grammar structures, and communication chips are re-applied across subsequent units.

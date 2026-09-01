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
* **Interconnected Lesson Flow & Knowledge Recycling**: Enforce smooth, logical lesson-to-lesson flow across all tracks where lessons are connected and all previous knowledge (grammar, vocabulary, routines) is continuously recycled and actively re-applied.
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

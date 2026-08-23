# Practice Exercises Audit & Duolingo Parity Strategy

This document provides a thorough audit of the COSYlanguages practice exercise architecture, benchmark analysis against Duolingo's core learning and gamification mechanics, and a strategic roadmap to achieve equal—or superior—pedagogical efficacy and user retention.

---

## 1. Executive Summary & Core Philosophy

**COSYlanguages Practice Vision:**
While Duolingo relies heavily on bidirectional translation into native languages, COSYlanguages prioritizes **monolingual immersion and contextual usage**. COSY practice sessions avoid translation crutches, utilizing symbolic operators (`=`, `≈`, `≠`, `+ 👥`), IPA transcriptions, visual emojis, audio synthesis, and natural context sentences.

To match Duolingo's world-class engagement and learning outcomes, COSYlanguages does not need to copy translation exercises; instead, we must adopt Duolingo's **frictionless micro-interactions, adaptive spaced-repetition loops, visual learning paths, and habit-forming gamification mechanics** while keeping our pure target-language immersion intact.

---

## 2. Audit of Existing COSYlanguages Practice System (`practice/`)

### A. Supported Task Formats (`practice/_engine/renderers.js`)
1. **Multiple Choice (`mc`):** Select correct definition/synonym/antonym using keycaps `1-4`.
2. **True / False (`tf`):** Speed-verify definition correctness using keycaps `1-2` with visual shake on error.
3. **Type Target (`type`):** Type exact target word from target-language definition prompt with auto-focus.
4. **Sentence Scramble (`sc`):** Tap interactive word tiles (`.sc-tile`) to construct natural target-language sentences. Keyboard shortcut `C` clears, `Enter` checks.
5. **Listening & Selection (`ls`):** Audio playback (`window.gameUtils.speak`) paired with target word choice buttons. Keyboard shortcut `S` plays audio.
6. **Matching Pairs (`mp`):** 2-column interactive grid matching target words with definitions, emojis, IPA transcriptions, or antonyms.
7. **Speaking & Pronunciation (`conv`):** Interactive microphone widget with Web Audio API media stream analysis, live waveform canvas visualization (`.waveform-canvas`), recording timer, and submission flow.

### B. Feedback, UX & Micro-Interactions (`practice/_engine/core.js`)
* **Duolingo-style Sliding Bottom Bar:** Fixed bottom drawer (`#pe-bottom-bar`) with green/red status states and Continue action.
* **Audio Feedback:** Polyphonic synth chimes via Web Audio API (success chime, error buzz, 4-note victory fanfare) + dynamic target-language voice reactions (`sounds/reactions/fr/`, `sounds/reactions/en/`).
* **Micro-Animations:** Card bounce (`.pe-bounce`) on correct, shake (`.pe-shake`) on error, floating XP pops (`.floating-points-pop`), full confetti canvas animation (`triggerConfetti()`).
* **Combo & Score Multipliers:** Consecutive correct answer tracking (`session.combo`) powering a glowing combo badge (`#combo-wrap.pulsing-glow`).
* **Theme Mastery Trackers:** Stored theme progress percentages (`cosy_theme_mastery`) displayed on the setup screen.
* **Weak Spot Review & Daily Challenge:** Saved error bank (`s.mistakes`) and daily rotating challenges with bonus XP.

---

## 3. Duolingo Mechanics Benchmark vs. COSY Practice Gaps

| Duolingo Feature | Current COSY Practice State | Parity & Enhancement Opportunity |
| :--- | :--- | :--- |
| **Visual Skill Tree / Learning Path** | Dropdown filters for Level & Theme | Convert/augment setup with a visual node-based learning path per CEFR level with unlockable milestones. |
| **Spaced Repetition System (SRS)** | Simple error stack (`s.mistakes`) | Implement SuperMemo/Leitner SM-2 decay algorithms flagging "cracked/rusty" skills over time. |
| **Cloze / Fill-in-the-Blank Tasks** | Scramble (`sc`) & Type (`type`) | Add inline sentence cloze tasks (`The cat [___] on the mat`) with word bank chips. |
| **Daily Goals & Streak Shields** | Daily streak counter | Add customizable daily XP targets (e.g. 30/50/100 XP) and purchasable Streak Freezes. |
| **Pronunciation / Speech Recognition** | Web Audio waveform recording | Add Web Speech API integration for real-time phoneme & pronunciation accuracy scores. |
| **Mascot & Contextual Encouragement** | Text feedback banner | Add animated mascot micro-copy (e.g. Cosy Owl/Bear) offering praise during combo streaks. |
| **End-of-Lesson Analytics** | Score, Streak, Total Points modal | Add accuracy percentage, average speed/time per question, mastered word badges, and share card. |

---

## 4. 7-Phase Actionable Parity Roadmap

### Phase 1: Visual Learning Path & Node Progression
* Transform the practice setup into an interactive learning path graph for each level (A1 to C2).
* Each node represents a specific theme (e.g., *Food & Drink*, *Psychology & Mind*, *Society & Politics*).
* Nodes unlock sequentially as mastery reaches threshold percentages (e.g., 60%+ mastery).

### Phase 2: Adaptive Spaced Repetition Engine (SM-2 / Leitner)
* Track item-level memory strength in `localStorage` under `cosy_srs_data` using parameters:
  - `interval` (days until next review)
  - `repetition` (successful review streak)
  - `easeFactor` (difficulty rating)
* Automatically prioritize due/decayed items at the start of practice sessions.

### Phase 3: Cloze & Interactive Grammar Task Expansion
* Introduce **Sentence Cloze Tasks**:
  - Present target-language context sentences with a missing keyword replaced by `[ ___ ]`.
  - Provide a bank of word chips for tap/drag insertion.
* Introduce **Listening Dictation**:
  - Play full spoken sentence audio and require sentence tile assembly or typing.

### Phase 4: Daily XP Goals & Habit Protection
* Allow users to select a Daily XP Goal (Casual: 30 XP, Regular: 50 XP, Serious: 100 XP).
* Display a circular daily XP progress ring on the top navigation header.
* Implement "Streak Shields" redeemable with accumulated COSY points to protect streaks on missed days.

### Phase 5: Speech-to-Text & Pronunciation Feedback
* Upgrade `conv` speaking renderer with `webkitSpeechRecognition` / `SpeechRecognition` API where supported.
* Compare transcriptions against target sentence phonemes to deliver precise pronunciation match scores (e.g., "94% Accuracy!").

### Phase 6: Mascot Micro-Copy & Visual Encouragement
* Introduce animated SVG mascot expressions (happy, excited, encouraging, supportive).
* Display mascot speech bubbles on 5-in-a-row combos ("You're on fire! 🔥", "Unstoppable! 🚀").

### Phase 7: Comprehensive Session Summary & Mastery Breakdown
* Enhance `#session-summary` with:
  - Accuracy percentage (e.g. `9/10 - 90%`).
  - Speed rating (e.g. `12s per question`).
  - List of newly mastered vocabulary items added to dictionary.
  - One-tap "Practice Weak Spots" button for items missed during the session.

---

## 5. Summary

By implementing these 7 phases, COSYlanguages will combine **Duolingo's addictively effective habit loops, gamification micro-interactions, and visual progression** with **our unique C1/C2 monolingual immersion, context-driven vocabulary, and open offline PWA architecture**.

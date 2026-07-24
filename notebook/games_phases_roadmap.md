# COSYlanguages Games: Implementation Phases & Stages Roadmap

This document outlines the structured, phased roadmap for implementing the **COSYlanguages Monolingual & Gamified Games Suite**. It transforms the high-fidelity UI/UX updates already introduced in Phase 1 and the conceptual goals of the *Gamification Blueprint* into rigorous, actionable development stages.

---

```
                                 COSY GAMES ROADMAP

  [ Phase 1: UI/UX ] ──➔ [ Phase 2: Monolingual ] ──➔ [ Phase 3: Gamification ]
  (Completed ✅)          (Next Up 🚀)                (Audio Synth, Combo Streaks)
                                                                   │
  [ Phase 5: Verification ] 🖲️ [ Phase 4: Device/Sensors ] 🗲 <─────┘
  (CI Audits, Full Coverage)   (DeviceOrientation, Accelerometer)
```

---

## Phase 1: High-Fidelity UI/UX & Sensory Foundation (Completed ✅)
*Focus: Modernize the games overview landing page and individual game setup/play overlays to match COSY's premium cozy brand aesthetics.*

- [x] **Stage 1.1: Copy & Card Grid Audit**
  - Audited and updated the total game counter on `games/index.html` from 14 to 16 to accurately reflect the active directory list.
  - Revamped the grid container responsiveness to ensure smooth flow across all tablet and desktop viewports.
- [x] **Stage 1.2: Interactive Hover Transitions & Tactile Feedback**
  - Applied subtle card transformations on `.gc`: 3D-like hover scaling and custom warm shadow offsets.
  - Programmed micro-interactions for the play button `.gc-play` and associated tags (`.gtag.multi`, `.gtag.solo`, `.gtag.mystery`) to animate independently on hover.
  - Implemented automatic SVG icon hover rotations.
- [x] **Stage 1.3: Game Overlay & Dropdown Enhancements**
  - Re-styled `.go-topbar` with modern dark-translucent glassmorphism (`backdrop-filter: blur()`).
  - Outfitted setup forms with customized `.styled-sel` elements featuring an elegant, brand-color SVG chevron drop-down indicator.
  - Added subtle highlight focus rings and validation shake animation classes (`.bad`) on text inputs.
- [x] **Stage 1.4: In-Game Feedback & Button Uniformity**
  - Consolidated primary, secondary, and destructive game button colors (`.btn-g-primary`, etc.) for seamless overlay play.
  - Refined choice options (`.word-opt`) and gender action buttons with hover bouncing and soft shadows.
  - Created styled sliding `.feedback-bar.ok` (teal left border) and `.feedback-bar.bad` (coral left border) with entrance slide transitions.

---

## Phase 2: Monolingual Data Engine & Universal Loader (Next Up 🚀)
*Focus: Decouple game logic from static arrays and implement a dynamic, language-agnostic loader leveraging our 23,000+ item master database.*

- [ ] **Stage 2.1: Master Vocab & Speaking Loader**
  - Bind the unified games engine to `window.vocabularyData[lang]` and `window.speakingData[lang]`.
  - Filter content dynamically based on the active game session's chosen CEFR level (Starter A1, Elementary A2, etc.).
  - Implement fallback routines to `universal.js` (for etymology and custom philosopher collections) in case of minor language data gaps.
- [ ] **Stage 2.2: Pure Symbolic Equation Conversions**
  - Deprecate English linguistic instructions inside the viewport across all puzzle/vocabulary games.
  - Integrate the **Symbolic Equation Engine** to render visual challenges:
    - Definition Mode: `[Word] = [Target Language Definition]`
    - Plural Mode: `[Noun] + s = ???`
    - Synonym Mode: `[Word] ≈ ???`
    - Antonym Mode: `[Word] ≠ ???`
    - Scramble/Syntax Mode: `🧩 [Words Group]`
- [ ] **Stage 2.3: Internationalized Fallbacks (`i18n`)**
  - Fully integrate static UI label keys with the `window.t()` localized translation dictionary to ensure control labels (like "Score", "Time Left", "Start Game", "Next") adapt automatically to the user's interface language.

---

## Phase 3: Sensory & Gamification Upgrade
*Focus: Introduce rich psychological retention triggers (sound, particle physics, active streak tracking) directly in-browser.*

- [ ] **Stage 3.1: Web Audio Synthesis (Zero-Latency FX)**
  - Implement a client-side sound engine using the native browser `AudioContext` API to generate nostalgic 8-bit sound effects:
    - *Success Chord:* Three ascending pitches (C5 ➔ E5 ➔ G5, 0.3s overall).
    - *Failure Buzz:* Twin-pulse low flat square wave (150 Hz ➔ 140 Hz, 0.2s).
    - *Triumph Fanfare:* Brassy four-note completion chord (C4 ➔ G4 ➔ C5 ➔ E5).
- [ ] **Stage 3.2: High-Performance Canvas Confetti**
  - Integrate a lightweight confetti canvas particle explosion on perfect game completions (>80% accuracy).
  - Ensure zero DOM-manipulation bloat by using a dedicated overlay `<canvas>` and hardware-accelerated rendering.
- [ ] **Stage 3.3: Active Combo Streaks (`#combo-wrap`)**
  - Build the dynamic HTML combo HUD (`#combo-wrap`) into the unified game overlay.
  - Program points scaling: each consecutive correct answer adds a $+0.5\times$ multiplier up to a maximum $3.0\times$ multiplier.
  - Animate floating points (`+15 XP` / `x2.5 Streak!`) drifting upwards from the interaction target before fading out.

---

## Phase 4: Mobile & Sensor Capabilities
*Focus: Optimize games for on-the-go smartphones and leverage native mobile hardware triggers.*

- [ ] **Stage 4.1: DeviceOrientation Accelerometer Integration (Action Hero)**
  - For the mobile "Action Hero" party game, hook into the HTML5 `DeviceOrientation` API.
  - Enable hands-free gameplay by translating physical tilt gestures:
    - *Tilt Phone Down:* Triggers Green Correct Guess.
    - *Tilt Phone Up / Back:* Triggers Red Skip.
- [ ] **Stage 4.2: Tactile Haptics**
  - Utilize the native `navigator.vibrate()` API (where supported) to send discrete physical feedback:
    - Double short vibration (50ms, 50ms) on success.
    - One long vibration (250ms) on failure/timeout.
- [ ] **Stage 4.3: Mobile Anti-Scroll Bounding**
  - Audit CSS viewports inside active overlays to ensure all game controls are tightly bounded within `100vh` on mobile screens (preventing awkward swiping/scrolling to find inputs).

---

## Phase 5: Advanced Game-by-Game Features & Economy
*Focus: Enhance gameplay mechanics for specific card, puzzle, and conversational games, and integrate them with the student portal.*

- [ ] **Stage 5.1: Complexity Analyzer (Story Chain & Fluency)**
  - Add text length and syntactic complexity markers to the user's typed entries in "Story Chain".
  - Award bonus XP for successfully incorporating more advanced grammar clauses or vocabulary of a higher CEFR level.
- [ ] **Stage 5.2: "Aki-COSY" Deduction AI (Identity Mystery)**
  - Build an interactive rules-based logic engine that dynamically matches user clues and queries against a matrix of target-language profiles, responding to the student's yes/no questions in real time.
- [ ] **Stage 5.3: In-Game Helper Economy (Cosy Crossword)**
  - Introduce an interactive hint system in crosswords, allowing students to spend accumulated Session XP to "Reveal a Letter" or "Reveal a Word".
- [ ] **Stage 5.4: Automatic Progress Portal Mapping**
  - Sync game results with `window.cosyDays.state` to update total student points and daily practice streaks directly in the Teacher/Student Dashboard on completion.

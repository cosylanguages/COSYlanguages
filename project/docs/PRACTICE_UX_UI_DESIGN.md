# COSYlanguages Practice Section — Comprehensive UX/UI Design Architecture & Specification 🎨💡

> **Version:** 2.0
> **Status:** Master Specification
> **Scope:** Practice Hub (`practice/index.html`), Practice Engine (`practice/_engine/`), CSS Tokens & Styles (`css/practice-new.css`, `css/mobile.css`), and All Practice Component Renderers.

---

## 1. Executive Summary & Vision 🌟

The **COSYlanguages Practice Section** is designed to transform daily language exercise into a delight-driven, high-retention habit. Built on the core principles of **Zero Translation Fallback**, **Gamified Delights**, **Accessibility First**, and **Omni-Context Adaptability**, the UI/UX seamlessly accommodates four distinct learning environments:

1. **Smartphone Focus (320px–480px):** Thumb-friendly, touch-optimized, full-width single-column interactions with sticky bottom action controls.
2. **Desktop & Laptop Studio (1024px–1920px):** Multi-column dashboard layouts with rapid keyboard shortcuts (`1-4`, `Enter`, `S`, `C`, `P`).
3. **Projector & Smartboard Classroom Mode (📺):** High-contrast, 1.25x–1.5x scaled typography, enlarged touch targets, and presenter remote support (`PageDown`/`PageUp`).
4. **Dark Mode & High Contrast (🌙):** Deep organic slate/forest backgrounds (`#1a1f1a`) preserving color-coded category identities without eye strain.

---

## 2. Visual Identity & Color Palette System 🎨

### 2.1 Core Neutral Tokens
* **Base Cream (`--cream`):** `#FAF7F2` (Light) / `#1A1F1A` (Dark) — Warm, paper-like background that eliminates digital glare.
* **Warm White (`--warm-white`):** `#FFFEFB` (Light) / `#222B22` (Dark) — Elevates cards and interactive containers.
* **Ink (`--ink`):** `#1C1917` (Light) / `#E8F0E9` (Dark) — High-contrast primary typography.
* **Ink Muted (`--ink-muted`):** `#595450` (Light) / `#8A9E8B` (Dark) — Subtitles, secondary notes, and metadata.
* **Border (`--border`):** `rgba(28,25,23,0.10)` — Soft structural separation.

### 2.2 Category Accent Identities
Each learning track has a distinct visual color accent applied to headers, progress fill gradients, and active badges:
* **Vocabulary Track (`cat-vocabulary`):** Deep Forest Teal (`--teal`: `#26695E`, `--teal-light`: `#E6F4F1`).
* **Grammar Track (`cat-grammar`):** Soft Plum / Amethyst (`--plum`: `#6B3F7C`, `--plum-light`: `#F2ECF7`).
* **Speaking Track (`cat-speaking`):** Coral Sunset (`--coral`: `#B84318`, `--coral-light`: `#FAEEE8`).
* **Pronunciation Track (`cat-pronunciation`):** Sapphire Blue (`--blue`: `#2E5FA3`, `--blue-light`: `#E8EEF8`).
* **Concept Check / CCQ Track (`cat-concept-check`):** Warm Amber Gold (`--gold`: `#945E05`, `--gold-light`: `#FBF3E2`).

---

## 3. Typography Architecture 🔤

COSYlanguages uses four harmonized typefaces to establish strong editorial hierarchy:

1. **Fraunces (Serif):** Used for main section headers (`.dash-greeting`, `.sec-title`), question prompts (`.pe-question`), and score values (`.stat-value`, `.ds-val`). Gives an organic, literary aesthetic.
2. **DM Sans (Sans-Serif):** Primary UI typeface for buttons, selection pills, input fields, and options (`.mc-opt`, `.sc-tile`, `.btn-start`). Highly legible at all sizes.
3. **Nunito (Rounded Sans):** Used for mobile bottom navigation, badges, and celebratory summary popups.
4. **Lora (Serif Italic):** Reserved for monolingual definitions (`.q-definition`), phonetic transcriptions, and literary context callouts.

---

## 4. Component Layouts & Exercise Renderers 🧩

### 4.1 Monolingual Question Cards (`.pe-question-card`)
* **Visual Presentation:** Centered card featuring a large emoji (`3.5rem`), clear word text (`1.6rem`), IPA transcription, and an audio playback button (`.pe-card-speak-btn`).
* **Zero Translation Guarantee:** Prompt renders monolingual formulas (`"Word" = ?` or `"Definition" = "Word"`).

### 4.2 Multiple Choice (`.mc-options`) & True/False (`.tf-btns`)
* **Grid Layout:** 2x2 grid on desktop; single-column full width on mobile.
* **Keycap Badges:** Displays keyboard shortcut indicators (`1`, `2`, `3`, `4`) in a subtle raised keycap badge (`.keycap-badge`).
* **Feedback States:**
  * **Hover:** Translucent background fill with subtle lift (`translateY(-1px)`).
  * **Correct (`.correct`):** Soft green fill (`#EAF4EC`), solid green border (`#3A7A4A`), and pulse animation (`.correct-highlight`).
  * **Incorrect (`.wrong`):** Coral red fill (`#FAEEE8`), red border (`#C4522A`), and horizontal shake animation (`.incorrect-shake`).

### 4.3 Sentence Scramble (`.scramble-container`)
* **Assembly Area:** Dashed drop zone (`.scramble-assembly`) with empty-state guide text (*"Tap the word tiles to build your sentence..."*).
* **Word Tokens:** Floating tiles (`.sc-tile`) with pop animations (`popTile`) upon assembly, and single-tap removal.

### 4.4 Match Pairs (`.match-pairs-container`)
* **Split Dual Columns:** Target terms on the left column, definitions on the right column.
* **Connection Logic:** Selecting a pair immediately validates match state: correct pairs freeze with opacity and green highlight; incorrect pairs shake and reset selections after 400ms.

### 4.5 Audio & Voice Recording (`.speaking-widget-container`)
* **Live Waveform Visualizer:** Animated canvas (`#speaking-waveform`) rendering real-time microphone input frequency oscillations or TTS audio playback waves.
* **Mic Pulse Ring:** Pulsing glow (`.mic-pulse`) while recording is active.

---

## 5. Micro-Interactions, Feedback & Gamification 🚀

### 5.1 Sliding Bottom Feedback Bar (`#pe-bottom-bar`)
* **Behavior:** Slides up smoothly from the screen bottom (`translateY(0)` with `cubic-bezier(0.16, 1, 0.3, 1)`) upon answer submission.
* **Correct State:** Green background, checkmark icon (`🎉`), points awarded (`+10 PTS`), and continue button.
* **Incorrect State:** Coral background, cross icon (`❌`), correct answer display, and rule explanation card (`💡 Rule: ...`).

### 5.2 Floating XP Pops (`.floating-points-pop`)
* **Animation:** Dynamic floating text pop (`+10 PTS 🔥`) rising upward from score counters and fading out over 1.2s.

### 5.3 Combo Streak Pulse (`#combo-wrap`)
* **Pulsing Glow:** Activates when consecutive correct answer streak reaches 3+ (`.pulsing-glow`), pulsating with an amber/coral gradient glow.

### 5.4 Confetti Celebration (`#confetti-canvas`)
* **Session End:** Triggers a 4-second multi-color particle confetti shower upon completing a practice session.

---

## 6. Projector & Classroom Mode (📺) Ergonomics

Activated via the **📺 Projector Mode** button or by pressing the **`P`** key:
* **Scale Multiplier:** Overall font size scales to `1.15rem`, question text scales to `2.2rem`, and option buttons expand to `1.25rem`.
* **High Contrast:** Card borders thicken to `2px` and shadows intensify for clear visibility under classroom lighting or projectors.
* **Presenter Remote Compatibility:** Supports hardware presenter remotes mapped to `PageDown` and `PageUp` keys for seamless slide-like question progression.

---

## 7. Responsive Breakpoints & Device Adaptability 📱

* **320px – 480px (Smartphones):**
  * Full-width single column options (`.mc-options`, `.two-col`, `.setup-grid`).
  * Bottom feedback action bar pins above mobile home bars with safe area insets (`env(safe-area-inset-bottom)`).
  * Padding adjusts (`1rem 1rem 4rem`) to prevent scroll clipping.
* **481px – 768px (Tablets):**
  * 2-column option grids and side-by-side match pair columns.
* **769px – 1280px+ (Desktops & Projectors):**
  * Centered 980px / 1280px max-width container with sticky jump-link header navigation.

---

## 8. Summary of Keyboard Shortcuts ⌨️

| Shortcut | Action | Scope |
| :--- | :--- | :--- |
| **`P`** | Toggle Projector / Classroom Presentation Mode | Global |
| **`Enter`** / **`PageDown`** | Confirm Answer / Next Question / Advance Bottom Bar | Practice Engine |
| **`1` – `4`** | Select Multiple Choice / True-False / Scramble Tile | Question Active |
| **`S`** | Play Audio Pronunciation (`speakText`) | Question Active |
| **`C`** | Clear Assembled Scramble Sentence | Scramble Mode |

---
*COSYlanguages — 100% Free Public Language Ecosystem* 🌍

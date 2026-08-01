# COSYlanguages "Storytelling" (Story Weaver) — Game Design & Architectural Blueprint

This document serves as the high-fidelity design proposal and engineering blueprint for a brand-new immersive, creative storytelling game: **Storytelling (Story Weaver) 📖**.

Designed for both solo and collaborative group play, this game challenges students to construct cohesive narratives while reinforcing grammatical accuracy and thematic vocabulary. The difficulty scales dynamically across the CEFR spectrum (A1 to C2).

---

## 1. Core Game Concept & Logical Loop

The main aspect of **Storytelling (Story Weaver)** is to develop an ongoing, creative story piece by piece, where each sentence or paragraph written is constrained by a randomly drawn grammatical structure corresponding to the player's selected CEFR level.

For an advanced challenge, players can enable a **Thematic Vocabulary Modifier**, which draws a randomized target word from a relevant lexical theme of their level.

### Standard Loop:
```
[Select Level & Language] ➔ [Toggle Thematic Vocab (On/Off)] ➔ [Start Game]
                                    │
                                    ▼
                     ┌─────────────────────────────┐
                     │   Render Game Arena:        │
                     │   - Active Storyboard       │
                     │   - Grammar Constraint Card │
                     │   - Vocab Theme Card (Opt)  │
                     └──────────────┬──────────────┘
                                    │
                                    ▼
                     ┌─────────────────────────────┐
                     │   Player Inputs Sentence    │
                     └──────────────┬──────────────┘
                                    │
                                    ▼
                      [Validate & Apply Gamification]
                      - Check Vocab Presence
                      - Self-Check Grammar / Peer Vote
                      - Play 8-bit Chime / Confetti
                      - Add to Interactive Storyboard
                                    │
                                    ▼
                       [Draw Next Card / Round]
```

---

## 2. Dynamic CEFR Grammar & Vocabulary Mapping

To make the game highly educational and fully aligned with the COSY curriculum, we dynamically tap into our existing curriculum files (`curriculum/<lang>/general/A1.js` etc.) and `window.vocabularyData` to extract level-appropriate constraints.

### A. Grammar Constraints by Level (CEFR Alignment)

Here is how the grammar constraints map out logically across the levels:

| Level | Target Grammar Category | Key Suffix / Structural Anchor | Illustrative Example Clue |
| :--- | :--- | :--- | :--- |
| **A1** | Present Simple (Frequency) | `always / usually / often / never` | "She usually works..." |
| | Polite Request | `Please / Could you / Would you mind` | "Could you open..." |
| **A2** | Past Simple | `Verb + -ed (regular/irregular)` | "Yesterday, I worked..." |
| | Past Continuous | `was/were + Verb-ing` | "While I was walking..." |
| | Used To (Habits) | `used to + Infinitive` | "I used to live here..." |
| **B1** | Present Perfect (Duration)| `has/have + Past Participle + for/since` | "I have lived here since..." |
| | Speculative Conditional | `If + Present Simple, will + Verb` | "If it rains, we will stay..." |
| | Passive Voice | `be + Past Participle` | "The letters were sent..." |
| **B2** | Third Conditional | `If + Past Perfect, would have + V3` | "If I had known, I would have..."|
| | Reported Speech | `said (that) / told [someone] (that)` | "She said that she was..." |
| | Negative Inversion | `Not only... but also / Under no circumstances` | "Not only did he see..." |
| **C1/C2**| Unreal Past / Regret | `I wish + Past Perfect / If only` | "I wish I had been there..." |
| | Cleft Sentences | `What [Subject] [Verb] is/was...` | "What I really want is..." |
| | Subjunctive mood | `It is essential that + base verb` | "It is crucial that she be..." |

### B. Optional Challenge: Dynamic Vocabulary Modifiers
If the player toggles **"Thematic Vocabulary Mode"**, the engine:
1. Filters `window.vocabularyData[lang]` by the selected CEFR Level.
2. Selects a random theme (e.g., `technology`, `travel`, `emotions`).
3. Randomly draws a word from that theme group and displays it alongside its definition on hover.
4. Validates that the input sentence strictly includes the drawn vocabulary word (case-insensitive and matching stem variants).

---

## 3. High-Fidelity UI & Cozy Responsive Wireframe

To maintain our designated cozy aesthetic, the UI uses frosted glass panels (`.game-card`), soft color tags (e.g., royal purple/indigo for grammar prompts, sage green for achievements), and responsive layouts that adapt perfectly to mobile screens.

```
+-----------------------------------------------------------------------+
|  ← Back to games         Storyteller (Story Weaver) 📖        Score: 25 |
+-----------------------------------------------------------------------+
|                                                                       |
|  [🎯 Grammar Card]                       [🏷️ Vocabulary Theme (Opt)]   |
|  Category: Speculative Conditionals       Theme: Environment (B1)     |
|  Rule: "If + Present, Will + Verb"        Required Word: "ecology"    |
|  E.g.: "If we protect..."                 Definition: The study of...  |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  📖 THE STORY SO FAR...                                               |
|  -------------------------------------------------------------------  |
|  1. In a small, quiet village, a young girl named Nina found an old   |
|     key. (A1 - Past Simple)                                           |
|                                                                       |
|  2. While she was searching the attic, she heard a strange noise.    |
|     (A2 - Past Continuous)                                            |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  ✍️ ADD TO THE STORY:                                                  |
|  [ Type your next sentence here incorporating the constraints...   ]  |
|                                                                       |
|  [✓ Self-Verify & Add]   [❓ Hint/Skip]   [👥 Switch Player]          |
|                                                                       |
+-----------------------------------------------------------------------+
```

### Visual Specifications (CSS Integration):
- **Grammar Constraint Card:** Highlighted with a delicate border (`border: 2px dashed var(--indigo); background: rgba(79, 70, 229, 0.05);`).
- **Vocabulary Card:** Highlighted with a warm honey border if active.
- **Interactive Story Board:** Utilizes typewriter-style margins with elegant numbering and faded text for older turns, keeping the active focus sharp.
- **Button Controls:** Soft organic green for adding/verifying, secondary outlines for skips.

---

## 4. Gamification Feedback Loops & Audio System

To keep the game addictive and physically satisfying, we integrate:

1. **Self-Check & Validation System:**
   - **Textual Matcher:** Scans the input string to guarantee the thematic vocabulary word is present.
   - **Interactive Validation Modal:** For complex grammar, an elegant, lightweight slide-out checklist appears:
     - *"Did you successfully weave in the 'Past Continuous' (e.g., 'was walking')? Yes/No"*
     - Or in collaborative mode, peer voting: *"Pass the device to Player 2 to verify your sentence!"*
2. **Audio Synth Effects (Web Audio API):**
   - **Turn Addition (Chime):** Plays an ascending double-note major scale when a sentence is successfully committed.
   - **Complexity Bonus (Sparkle):** Triggered when a sentence exceeds 15 words and includes an advanced discourse connector (e.g., *however*, *therefore*). Plays a glittering retro frequency sweep.
3. **Hardware-Accelerated Victory Particles:**
   - On completing 10 rounds, the screen dimmers and plays a triumphant fanfare. Dynamic confetti flakes stream across the storyboard as the entire story is rendered in a beautifully formatted, shareable scroll block with options to **"Copy Story to Clipboard 📋"**.

---

## 5. Seamless Standalone Folder Integration

The implementation follows the modern, decoupled **Standalone Folder Engine** pattern:
- **Location:** `games/storytelling/`
- **Files:**
  - `index.html`: Leverages `games/_engine/` core JS loaders (`game_session.js`, `scores.js`, `loader.js`) and imports `game.js`.
  - `game.js`: Contains pure, self-contained game state, UI rendering functions, grammar database extractors, validation algorithms, and collaborative turn-switching routines.
- **Global Games Hub (`games/index.html`):** Add a card linking to the new folder to integrate it seamlessly.

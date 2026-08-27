# COSYlanguages Communication Standard v1.0

This document defines the strict, unified standards for all communication, pragmatics, and speech materials across COSYlanguages (Book 3). Every unit, manual page, reference sheet, and interactive dialogue must adhere 100% to this specification.

---

## 1. The Core Principles

### Principle 1: Pragmatic Intent Over Mechanical Translation
Regardless of language or level, every communication unit must answer four functional questions to provide predictable structure for both students and teachers:
- **What is the communicative goal?** (Clear pragmatic identification)
- **When do I use this system?** (Social context, register & interaction scenario)
- **How do I build the conversation?** (Modular phrase building blocks & flow maps)
- **What social pitfalls do learners face?** (Textbook stiffness vs natural speech)

### Principle 2: Standardized Page Rhythm (Book 3 Standard)
Every communication page must follow an identical visual and logical rhythm to create familiarity for the learner. The standard 14-step rhythm sequence is:

1. **Communication Question:** Natural conversational situation or question anchor (e.g., *How do I decline an invitation without being rude?*).
2. **System Title:** Large, clear communication system title (never clever).
3. **One-Line Summary:** Exactly one sentence summarizing the core interactional strategy.
4. **Why this matters:** Highlighting real-world importance and pragmatic stakes.
5. **Building Blocks:** Color-coded phrase chips categorized by turn role (`block-start`, `block-continue`, `block-react`, `block-ask`, `block-close`).
6. **Conversation Map:** A visual CSS flowchart diagram showing the non-linear path of the interaction.
7. **👀 Notice:** Guided observation asking an inductive question about tone, politeness, or turn-taking.
8. **🧠 Think in conversation:** Explaining the underlying social dynamics and native speaker mindset.
9. **🗣 Natural Speech add-on:** Side-by-side contrast between `❌` textbook-stiff/overly literal phrasing and `✅` natural spoken alternatives.
10. **💡 Memory Trick:** Visually-anchored, story-based or mnemonic social trigger.
11. **🔗 Connects to...:** Explicit learning journey links connecting to specific Book 1 Grammar parts, Book 2 Vocabulary themes, and the next sequential Communication system.
12. **📍 Can I already do this?:** A functional self-evaluation checklist.
13. **🎉 Progress Celebration:** Highlighting unlocked real-world conversational skills (e.g., *"🎉 You can now handle coffee invites smoothly!"*).
14. **Mini dialogue:** A sample exchange built live directly from the color-coded phrase chips in Section 5.

---

## 2. Priority Upgrades & Editorial Style

### Priority 1: Teach Conversation Architecture Over Scripts
Never force learners to memorize static scripts for isolated venues (e.g., *airport*, *hotel*). Always present conversations as modular systems built from reusable speech components.

### Priority 2: Diagrams Over Paragraphs (The COSY Rule)
If a conversational flow can be mapped visually, never describe it in dense text blocks. Use flow diagrams:
`[Opening / Icebreaker]` ➔ `[React / Acknowledge]` ➔ `[Follow-up Ask]` ➔ `[Polite Exit]`

### Priority 3: Register Awareness & Politeness Cushioning
Always highlight differences between casual, neutral, and formal registers. Emphasize cushioning techniques (softening openers, modal verbs, hedging) that prevent accidental bluntness.

### Priority 4: Contrast Textbook Stiffness with Natural Speech
Dedicated `🗣 Natural Speech` callout boxes directly confront stiff, classroom-bound phrasing (e.g., ❌ *"I am fine, thank you, and you?"*) with authentic native speech patterns (e.g., ✅ *"Good thanks! How about yourself?"*).

### Priority 5: Integrated Multi-Manual Connections
Every communication unit explicitly bridges the three-book system by cross-linking to structural rules in Book 1 (Grammar), lexical sets in Book 2 (Vocabulary), and the next logical Communication System in Book 3.

---

## 3. Standard Visual Color Language & Approved Icons

### Communication Block Palette
To prevent visual confusion with grammar syntactic classes (Subject/Blue, Verb/Green, Object/Orange, Ending/Purple, Adjective/Yellow, Error/Red), Communication Blocks use a distinct functional color palette:

| Element | Color | Semantic Class | Variable | Pragmatic Role |
|:---|:---|:---|:---|:---|
| **Start Block** | Deep Teal (`#0e7490`) | `.block-start` | `var(--comm-start)` | Initiating, opening, icebreakers |
| **Continue Block** | Indigo (`#4338ca`) | `.block-continue` | `var(--comm-continue)` | Extending turn, adding details, explaining |
| **React Block** | Magenta / Rose (`#be185d`) | `.block-react` | `var(--comm-react)` | Active listening, showing feelings, agreeing |
| **Ask Block** | Dark Bronze / Coral (`#c2410c`) | `.block-ask` | `var(--comm-ask)` | Questioning, clarifying, passing the floor |
| **Close Block** | Dark Violet / Plum (`#4c1d95`) | `.block-close` | `var(--comm-close)` | Wrapping up, signaling exit, parting warmth |

### Approved Icon Set
- `💬` Communication system / Speech act
- `👀` Notice / Guided pragmatic observation
- `🧠` Think in conversation / Social mindset
- `🗣` Natural speech add-on / Spoken rhythm
- `💡` Pragmatic memory trick
- `🔗` Connects to...
- `✓` / `✅` Natural / Polite form
- `✗` / `❌` Textbook-stiff / Blunt form
- `📍` Functional self-check
- `🎉` Progress celebration
- `⚖️` Register & politeness indicator

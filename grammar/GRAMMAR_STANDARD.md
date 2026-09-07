# COSYlanguages Grammar Standard v1.0, v2.0 & v3.0 (Russian Revision)

This document defines the strict, unified standards for all digital and print grammar materials across COSYlanguages. Every lesson, manual, reference page, and printable sheet must adhere 100% to this specification.

---

## 1. The Core Principles

### Principle 1: The Four Standard Questions
Regardless of language or level, every grammar page/lesson must answer the following four questions to provide predictable structure for both students and teachers:
- **What is it?** (Clear identification)
- **When do I use it?** (Context & usage scenario)
- **How do I build it?** (Structure & formulas)
- **What mistakes do beginners make?** (Real-life learner pitfalls)

### Principle 2: Standardized Page Rhythm (Phase 2 & 3 Standard)
Every grammar page must follow an identical visual and logical rhythm to create familiarity for the learner. The standard rhythm sequence is:

1. **Vocabulary Theme:** Natural thematic anchor (e.g., *Family*, *Food*, *Travel*).
2. **Grammar Title:** Large, clear, never clever.
3. **One-Line Summary:** Exactly one sentence summarizing the core rule.
4. **Why is this important? / Why learners struggle:** Highlighting importance & difficulty.
5. **Main Visual (Diagram / Flow):** Replacing long paragraphs with CSS diagrams.
6. **Colour Example:** Standard color-coded examples.
7. **Guided Observation (👀 Notice):** A single inductive question for pattern discovery.
8. **🧠 Think like [Language]:** Explaining the systematic logic of the language.
9. **🇷🇺 Why does Russian do this? / 🧩 Russian Pattern (Language Signature boxes):** Systemic reasons & recurring patterns.
10. **⚠ Common Mistakes:** Stacked `❌` (Incorrect) and `✅` (Correct) patterns.
11. **💡 Memory Trick:** Visually-anchored, story-based memory trigger.
12. **🔗 Connects to...:** Sequential learning journey links.
13. **📍 Can you already use this?:** A communication-focused self-evaluation checklist.
14. **🎉 Progress Celebration:** Highlighting unlocked real-world skills.

---

## 2. Priority Upgrades & Editorial Style (Phase 2 & 3)

### Priority 1: Give Languages Personality ("Think like...")
Don't just explain mechanical rules; explain **why** the language functions as a system. Use the `"🧠 Think like [Language]"` box to teach system logic:
- *English:* Focus on word order and auxiliary verbs as structural builders.
- *Russian:* Focus on cases, aspect (complete vs incomplete actions), stability vs stress shift, and soft/hard endings.

### Priority 2: Diagrams Over Paragraphs (The COSY Rule)
If a concept can be illustrated visually, never write it in text.
- *Example (Russian Case Map Flow):* Instead of raw listings, show:
  `WHO?` (Nom.) ➔ `owns?` (Gen.) ➔ `to?` (Dat.) ➔ `see?` (Acc.) ➔ `with?` (Instr.) ➔ `about?` (Prep.)

### Priority 3: Endings as Families
Grouping endings helps learners recognize patterns.
- *Example (Feminine family):* `-а` and `-я` are part of the feminine family and behave similarly.
- *Example (Adjective family):* `-ый` and `-ой` belong to the same adjective pattern.

### Priority 4: Progressive Exceptions
Never overwhelm beginners with Exceptions immediately. Introduce the dominant pattern first, build structural confidence, and only then introduce exceptions as separate or secondary notes.

### Priority 5: Recognition Before Production
Encourage passive pattern identification before demanding productive conjugation or declension. Use guided observations (e.g., *"Can you spot which word is in the Genitive case?"*).

### Priority 6: Signature "🧩 Russian Pattern" Box
A visual highlighting component that links seemingly new structures back to familiar base patterns:
- *Example:* Showing how the stem `чита-` stays fully stable across `читаю`, `читаешь`, `читает` while only endings change.

### Priority 7: "🇷🇺 Why does Russian do this?" Box
Provides linguistic rationale to make features that seem arbitrary to adults highly sensible and memorable (e.g., *Why six cases? Because they make word order flexible and tenses highly compact!*).

### Priority 8: Progress Celebrations (🎉 You can now...)
End major milestones by celebrating exactly what skills have been unlocked (e.g. *"🎉 You can now introduce yourself, describe family, and identify daily items!"*).

---

## 3. Standard Visual Color Language & Approved Icons

| Element | Color | Semantic Class | Variable |
|:---|:---|:---|:---|
| **Subject** | Blue | `.key-subject` / `.key-blue` | `var(--grammar-subject)` |
| **Verb** | Green | `.key-verb` / `.key-green` | `var(--grammar-verb)` |
| **Object** | Orange | `.key-object` / `.key-orange` | `var(--grammar-object)` |
| **Ending** | Purple | `.key-ending` / `.key-purple` | `var(--grammar-ending)` |
| **Adjective** | Yellow | `.key-adjective` / `.key-yellow` | `var(--grammar-adjective)` |
| **Error** | Red | `.key-error` / `.key-red` | `var(--grammar-error)` |
| **Optional** | Grey | `.key-optional` / `.key-grey` | `var(--grammar-optional)` |

### Approved Icon Set:
- `⚠` Common mistake / Why this is difficult
- `💡` Memory trick
- `👀` Notice / Guided observation
- `🧠` Think like a native speaker / Think like English
- `🔗` Connects to...
- `✓` Correct
- `✗` Incorrect
- `🌍` Regional variation
- `⭐` Important rule
- `🧩` Language Pattern (Signature)
- `🇷🇺` Language Rational / Why does Russian do this?
- `🎉` Progress Celebration

---

## 4. CELTA Lesson-Stage Alignment (Phase 4 Standard)

The 14-step page rhythm (Section 1, Principle 2) is the **authoring** rhythm — it tells a writer how to lay out a topic page. The CELTA lesson-stage model is the **pedagogical** rhythm — it tells a teacher how to run the lesson. They are complementary, not competing. Every topic page should be **stageable**: its 14 authoring steps must map cleanly onto the 6 CELTA stages so the same page serves both self-study readers and classroom teachers.

### The 6 CELTA Stages

1. **Lead-in / Context** — engage schema, introduce the target item in a real context.
2. **Meaning Check (CCQs)** — verify understanding of meaning with concept checking questions (yes/no or short factual), never translation.
3. **Form** — structural formulas, tables, conjugation patterns ("Think like a native speaker").
4. **Pronunciation** — stress, weak forms, liaison, intonation.
5. **Controlled → Freer Practice** — accuracy-first drills moving toward fluency.
6. **Production & Feedback** — communicative use + delayed error correction.

### How the 14 Steps Map onto the 6 Stages

| CELTA Stage | Authoring steps (Section 1) |
|:---|:---|
| 1. Lead-in / Context | 1 Vocabulary Theme, 2 Grammar Title, 3 One-Line Summary, 4 Why it matters, 5 Main Visual, 6 Colour Example |
| 2. Meaning Check (CCQs) | 7 Guided Observation (👀 Notice) |
| 3. Form | 8 Think like [Language], 9 Language Signature / Why does [Language] do this? |
| 4. Pronunciation | (add a pronunciation note block where relevant — see `manuals/_TEMPLATE.md` Stage 4) |
| 5. Controlled → Freer Practice | 10 Common Mistakes (❌/✅), 11 Memory Trick, 12 Connects to... |
| 6. Production & Feedback | 13 Can you already use this?, 14 Progress Celebration |

### Canonical Implementation

- **Human-facing HTML**: every topic page in `manuals/{lang}/grammar/{level}/topics/*.html` follows the 6-stage markup blueprint in `manuals/_TEMPLATE.md`, which bakes in a standardized `💡 Check your understanding (CCQs)` block (Stage 2).
- **Machine-readable JSON**: every lesson unit is structured as `schema/lesson-stage.schema.json` data under `reference-grammar/{lang}/lessons/*.json`. The `meaningCheck` array holds inline CCQ objects (`schema/ccq.schema.json`), and `controlledPractice` / `freerPractice` / `production` link out to the COSY ecosystem (`COSYtools`, `COSYgames`, `COSYevents`, `COSYworld`).
- **Validation**: `scripts/validate-schema.js` validates all live lesson-stage and CCQ data files; `scripts/build_unified_index.py` cross-references them into `data/index/{lang}_index.json`.

### Authoring Rule
When adding or editing a topic, satisfy **both** rhythms: lay the page out using the 14 authoring steps, and make sure each of the 6 CELTA stages is explicitly present and labelled. The 6-stage structure is the contract a teacher can rely on; the 14 steps are how you fill it in beautifully.

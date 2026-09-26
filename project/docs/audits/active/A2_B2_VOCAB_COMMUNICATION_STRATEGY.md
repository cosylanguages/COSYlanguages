# COSYlanguages A2–B2 Vocabulary & Communication Manuals — Strategic Blueprint & Architecture

**Document Version:** 1.0
**Scope:** Specification and expansion blueprint for dedicated Level A2, B1, and B2 Vocabulary Manuals and Communication Manuals for English (and target core languages), extending the successful COSYlanguages A0–A1 4-Manual System Architecture.

---

## 1. Executive Summary & Rationale

While COSYlanguages A0–A1 features a fully realized 69-theme Vocabulary Manual (`manuals/en/vocabulary/`) and an 11-part Communication Manual (`manuals/en/communication/`), upper levels (A2, B1, B2) currently rely on a shared gamified drill engine (`practice/index.html`).

To maintain pedagogical parity across levels, this strategy outlines the structural blueprint for creating dedicated A2, B1, and B2 Vocabulary and Communication manuals using the visual and structural patterns established in A0–A1:
- **🧩 "Building Blocks" Phrase Chips**: Functional, high-utility chunks grouped by communicative purpose.
- **🗺️ "Conversation & Story Maps"**: Step-by-step numbered flow diagrams illustrating discourse structure.
- **🃏 Flip Cards & Categorized Word Tables**: Audio-ready vocabulary lists with UK/US regional variations, collocations, and contextual examples.

---

## 2. Structural Architecture & Directory Taxonomy

Following the ISO directory standard established in `MIGRATION_MAP.md`, upper-level manuals will sit cleanly under `manuals/en/`:

```
manuals/en/
├── vocabulary/               # A0–A1 Vocabulary Manual (69 themes)
├── vocabulary-a2/            # A2 Vocabulary Manual (20 thematic modules)
├── vocabulary-b1/            # B1 Vocabulary Manual (20 thematic modules)
├── vocabulary-b2/            # B2 Vocabulary Manual (20 thematic modules)
├── communication/            # A0–A1 Communication Manual (11 parts)
├── communication-a2/        # A2 Communication Manual (10 parts)
├── communication-b1/        # B1 Communication Manual (10 parts)
└── communication-b2/        # B2 Communication Manual (10 parts)
```

---

## 3. Dedicated A2–B2 Vocabulary Manual Blueprint

### 3.1 Topic & Thematic Taxonomy (20 Modules per Level)

| CEFR Level | Core Focus & Themes | Key Structural Features |
|---|---|---|
| **A2 Vocabulary** | Travel & Directions, Housing & Appliances, Work & Office Routine, Shopping & Clothes, Health & Body, Food & Cooking, Hobbies & Free Time, Weather & Seasons | Collocation boxes, prepositions with nouns, regional UK/US badges (`.badge.uk`, `.badge.us`), flip cards. |
| **B1 Vocabulary** | Education & Career, Technology & Digital Life, Environment & Nature, Relationships & Personality, Media & News, Travel & Transport, Money & Finance, Feelings & Emotions | Dependent prepositions, word families (noun/verb/adj/adv), synonyms & antonyms, topic quizzes (`.quiz-panel`). |
| **B2 Vocabulary** | Business & Economics, Politics & Society, Science & Innovation, Arts & Culture, Law & Justice, Psychology & Mind, Abstract Concepts, Idioms & Phrasal Verbs | Register markers (Formal / Informal / Academic), nuanced contrast tables, nuance callouts (`.box.why`). |

---

## 4. Dedicated A2–B2 Communication Manual Blueprint

### 4.1 Structural Components per Topic Page

Every topic page in the A2–B2 Communication Manuals will implement the core COSY visual components:

1. **Outcome Banner (`.outcome-banner`)**: Clear statement of real-world communicative ability.
2. **🧩 "Building Blocks" (`.building-blocks`)**: Curated set-phrases organized by conversational function (e.g., Opening, Asking, Softening, Closing).
3. **🗺️ "Conversation / Story Map" (`.conversation-map`)**: Numbered flow diagram (e.g. `1. Hook ➔ 2. Elaboration ➔ 3. Counter-point ➔ 4. Resolution`).
4. **Natural vs. Textbook Contrast Pair (`.contrast-box`)**: Contrasting stiff textbook phrasing with natural native English.
5. **Interactive Self-Check & Quiz (`.quiz-panel`)**: Data-driven self-check and practice exercises.

---

## 5. Rollout Roadmap & Generator Tooling

1. **Script Automation**: Implement Python generator scripts in `project/scripts/`:
   - `build_english_a2_vocab_manual.py` & `build_english_a2_comm_manual.py`
   - `build_english_b1_vocab_manual.py` & `build_english_b1_comm_manual.py`
   - `build_english_b2_vocab_manual.py` & `build_english_b2_comm_manual.py`
2. **Hub Page Integration**: Register new hubs on `manuals/index.html` and `manuals/english-a0-a1.html` (renaming to `manuals/english-master.html`).
3. **Verification**: Validate link integrity via `project/scripts/verify_manual_links.py`.

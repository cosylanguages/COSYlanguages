# COSYlanguages English Manuals — Visual & Structural Elements Audit

**Scope:** All English-language manuals linked from the Manuals Index (`manuals/index.html` / `manuals/english-a0-a1.html`) — Levels A0–A1, A2, B1, B2. Grammar Manuals, Vocabulary/Practice Manuals, and Communication Manual.

---

## 1. Visual/structural element types found across English manuals

| Element type | Description | Where it appears |
|---|---|---|
| 🧱 **Sentence building blocks** | Tap-word or stacked-block widgets (SUBJECT+VERB+OBJECT boxes; "tap one word per row") | A0–A1 Grammar only |
| 📈 **Mini timeline** | A literal "past⟷future" line with a marker showing when an action happens | A0–A1 Grammar tense pages only |
| 🌳 **Decision tree / flowchart** | Branching "ask a question → follow a path" visual (e.g. "How long is the adjective? → 1 syllable → small→smaller") | A0–A1 Grammar (Part 3) only |
| 🗂️ **Conjugation/comparison tables** | Subject × affirmative/negative/question grids; feature-comparison tables | A0–A1 (rich), A2 Part 0–2 (present), B1 Part 0 (present) |
| 🃏 **Flip/flashcards** | "Tap to reveal" mistake correction or vocabulary cards | A0–A1 Grammar & Vocabulary only |
| 🧩 **"Building Blocks" phrase chips** | Curated set-phrases shown as a labelled block for a communication function | A0–A1 Communication Manual only |
| 🗺️ **Story/conversation maps** | Numbered flow (Hook → Reaction → Core → Wrap-up) showing a sequence structure | A0–A1 Communication Manual only |
| ✅ **Quizzes / self-checks** | Multiple-choice quiz with scoring | Present at every level (data-driven `.quiz-panel`) |
| ⚠️ **Common-mistake toggles** | ❌ wrong / ✅ correct, tap-to-reveal | Present at every level (`.mflip`) |

---

## 2. Level-by-Level Findings

### 🟢 English A0–A1 — Fully developed, richest visual language
- **Grammar index page**: Live interactive sentence-builder (tap "She/They/We" + "reads/play/like" + "books/football/pizza" to assemble a sentence).
- **Word order page**: Actual SUBJECT + VERB + OBJECT block diagram, plus a "Who? / does what? / What?" scaffold.
- **Tense pages** (Present Continuous, Past Simple, Going To, Will): Small rendered timeline graphics ("Now — I'm working now — past ⟷ future").
- **Comparative Adjectives**: Branching decision tree ("How long is the adjective?" → 1 syllable / consonant+y / 2+ syllables / irregular).
- **Irregular Verbs appendix**: Verbs grouped into 4 pattern families rendered as flip-flashcards ("tap to reveal").
- UK/US regional comparison boxes on relevant topics.
- Every one of the 42 topics has real, topic-specific examples, mistakes, and working quizzes.

### 🟡 English A2 — Visuals thin out, then drop off in later parts
- **Parts 0–2** (A1 review, past tenses, present perfect): Real conjugation tables and genuine examples — but timeline graphics from A0–A1 are missing.
- **Past Simple vs Past Continuous**: Described in prose ("Picture a long line… a short arrow crossing it") rather than rendered visually.
- **Parts 3–7 and Appendix**: Placeholder/template stubs currently exist for ~28 topics.
- **Vocabulary**: Shared generic practice widget (`practice/index.html`) rather than a dedicated A2 thematic manual.

### 🔴 English B1 & B2 — Mostly template stubs & shared practice
- **Part 0** (A2 refresher): Real comparison tables (Present Simple vs Continuous; Past Simple vs Present Perfect).
- **Parts 1–10 + Appendix**: Placeholder stubs across ~45 topics for B1 and ~36 topics for B2.
- **Vocabulary/Communication**: Shared generic practice widget rather than dedicated B1/B2 manuals.

### 🟢 Communication Manual (A0–A1 only, "Book 3")
- **🧩 "Building Blocks"**: Curated sets of ready-made phrases for each communication function.
- **🗺️ "Conversation Map" / "Story Map"**: Numbered flow diagrams of conversational moves (Hook → Reaction → Core → Wrap-up).
- Real, hand-written dialogues and natural-vs-textbook contrast pairs on every page.

---

## 3. Cross-Level Comparison Matrix

| Visual/structural element | A0–A1 Grammar | A2 Grammar | B1 Grammar | B2 Grammar | Vocabulary (any level) | Communication (A0–A1) |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Sentence-building block widget | ✅ | ❌ | ❌ | ❌ | ❌ | — |
| Timeline graphic (tense) | ✅ | ❌ (prose only) | ❌ | ❌ | — | — |
| Decision tree / flowchart | ✅ (adjectives) | ❌ | ❌ | ❌ | ❌ | — |
| Conjugation/comparison table | ✅ | ✅ (Parts 0–2) | ✅ (Part 0) | ❌ | ✅ (vocab tables) | — |
| Flip/flashcards | ✅ | ❌ | ❌ | ❌ | ❌ | — |
| "Building blocks" phrase chips | — | — | — | — | — | ✅ |
| Numbered flow/story map | — | — | — | — | — | ✅ |
| Real, topic-specific content | ✅ (42/42) | ⚠️ (~13/46) | ⚠️ (~2/47) | ❌ (0/36 sampled) | ✅ (A0–A1 only) | ✅ (11/11) |
| Dedicated thematic manual | ✅ | ❌ (shared practice) | ❌ (shared practice) | ❌ (shared practice) | — | ✅ (A0–A1 only) |

---

## 4. Key Gaps & Strategic Action Roadmap

1. **Port Timeline Visuals Forward:** Re-integrate `.timeline-wrap` / timeline SVG graphics from A0–A1 across A2, B1, B2 tense pages (Present Perfect `for`/`since`, Past Perfect, Narrative Tenses, Future Forms).
2. **Expand Stub Pages:** Complete linguistic explanations, real examples, common mistakes, and interactive quiz items for placeholder topics in A2 (Parts 3–7), B1, and B2.
3. **Extend Decision Tree Components:** Adapt the A0–A1 branching decision tree for Conditionals (If-clause → result-clause) and Relative Clauses.
4. **Determine A2–B2 Vocabulary & Communication Strategy:** Evaluate scaffolding dedicated thematic vocabulary and communication manuals for A2–B2 following the A0–A1 "Building Blocks" + "Conversation Map" standard.

---

## 5. Visual Component Blueprint & Level Taxonomy

For full specifications, CEFR matrix across Grammar/Vocabulary/Communication (A0–B2), and reusable HTML/CSS component snippets, see:
👉 [ENGLISH_MANUALS_BRAINSTORM_AND_COMPONENTS.md](ENGLISH_MANUALS_BRAINSTORM_AND_COMPONENTS.md)

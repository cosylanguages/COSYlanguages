# Vocabulary "translation" Field Audit & Schema Architecture Analysis

## Overview & Core Principle
The core pedagogical principle of COSYlanguages is **Monolingual Immersion & Zero Translation Fallback**:
> *"Learn the language, not the translation. Context, visuals, emojis, and organic patterns replace L1 translation support."* (`EDITORIAL_HANDBOOK.md`)
> *"There are NO translation pairs (no 'apple = pomme'). `definition`, `synonyms`, and `antonyms` are ALL in the target language — never in English or any other language."* (`vocabulary/_schema/README.md`)

However, vocabulary dataset files across `vocabulary/{fr,it,ru,el}/{level}/*.js` (and select legacy `vocabulary/en/` files) contain an optional `"translation"` field (e.g. `{"word": "bonjour", "translation": "hello", ...}`).

This audit investigates every call site reading `.translation` in the codebase, evaluates whether it leaks into user-facing UI, provides a recommendation, and documents the EN vs non-EN schema structure differences.

---

## 1. Call-Site Inventory & Classification

Below is every location in the codebase that accesses or references an entry's `translation` field:

### A. User-Facing Call Sites (Confirmed UI Leaks)

1. **`practice/hub.js` (Line 376)**
   - **Code:** `q: \`Review: "${m.definitions?.[0]?.text || m.translation || m.word}"\``
   - **Context:** `startMistakeReview()` generates question prompts for review sessions.
   - **Classification:** **User-Facing Leak**. If an item lacks a structured `definitions[0].text`, it falls back to rendering `m.translation` (English L1 text) in the prompt to students practicing French, Russian, Italian, or Greek.

2. **`practice/_engine/renderers.js` (Line 32)**
   - **Code:** `const definition = item.definitions?.[0]?.text || item.definition || item.translation || '...';`
   - **Context:** `formatQuestionText()` constructs question prompts for typing questions (`type` form).
   - **Classification:** **User-Facing Leak**. When `definitions` or `definition` is missing, `item.translation` is displayed as the target prompt to the student.

3. **`practice/_engine/renderers.js` (Line 177)**
   - **Code:** `const correctDef = q.item.definitions?.[0]?.text || q.item.translation || "Correct";`
   - **Context:** `renderMC()` constructs multiple-choice correct options when dynamic distractors are computed.
   - **Classification:** **User-Facing Leak**. Renders `item.translation` as a choice option if `definitions[0].text` is absent.

4. **`practice/_engine/core.js` (Line 1025)**
   - **Code:** `const answer = q?.item?.translation || q?.ans || '';`
   - **Context:** `showHint()` constructs hint text (e.g. `H_l_o`).
   - **Classification:** **User-Facing Leak**. The hint function prioritizes `item.translation` over target-language `q.ans` or definition, giving English letter-mask hints during non-English practice sessions.

5. **`practice/_engine/core.js` (Line 1483)**
   - **Code:** `const correctAnswer = (q.ans || q.item?.translation || "").toString().trim().toLowerCase();`
   - **Context:** `checkType()` validates student-typed answers against `correctAnswer`.
   - **Classification:** **User-Facing Leak**. Falls back to checking student input against the English translation string instead of the target word.

6. **`practice/types/vocabulary/vocabulary.js` (Lines 298, 307, 326, 610, 614, 648)**
   - **Code:**
     - Line 298: `targetText = item.definitions?.[0]?.text || item.definition || item.translation || itemWord || '...';`
     - Line 307: `.map(p => p.definitions?.[0]?.text || p.definition || p.translation)`
     - Line 326: `? (fallback?.definitions?.[0]?.text || fallback?.definition || fallback?.translation || 'none')`
     - Line 610: `const definition = item.definitions?.[0]?.text || item.definition || item.translation || item.word || "...";`
     - Line 614: `.filter(p => p.id !== item.id && p.word && (p.definitions?.[0]?.text || p.definition || p.translation))`
     - Line 648: `matchValue = p.definitions?.[0]?.text || p.definition || p.translation || p.word;`
   - **Context:** Multiple-choice distractor generation, matching-pair generation, and typing question target text construction.
   - **Classification:** **User-Facing Leak**. In all these fallback chains, `item.translation` is used to build question options, prompts, or match targets shown directly to students.

7. **`practice/types/vocabulary/vocabulary.js` (Lines 350, 771)**
   - **Code:** `translation: item.translation || itemWord`
   - **Context:** `buildMCQuestion()` and grammar question generator mapping fields on output question objects.
   - **Classification:** **User-Facing Leak / Propagation**. Propagates `item.translation` onto practice question items.

8. **`project/scripts/build_russian_vocab_manuals.py` (Lines 602, 637)**
   - **Code:**
     - Line 602: `def_text = item.get("translation") or item.get("subtext") or ""`
     - Line 637: `q_def = first_item.get("translation") or first_item.get("subtext") or ""`
   - **Context:** Russian Vocabulary Manual HTML generator fallback when rendering card definition lines and quiz question definitions.
   - **Classification:** **User-Facing Leak**. If an item in `vocabulary/ru/` lacks `definitions`, the manual generator displays English text in monolingual Russian manuals (`manuals/ru/vocabulary/`).

---

### B. Non-User-Facing / System / Internal Call Sites

1. **`js/core/engine.js` (Line 796)**
   - **Code:** `const hasMeaning = !!(entry.translation || entry.definition || (entry.definitions && entry.definitions.length > 0));`
   - **Context:** Dataset loader validation warning in `loadLanguageData()`.
   - **Classification:** **Internal Tooling / Validation**. Checks if a vocabulary entry has at least some descriptive payload before logging console warnings. Never renders to the end user.

2. **`project/tests/verification/verify_tts_audio.py` (Line 24)**
   - **Code:** `item: { word: 'sibling', translation: 'A brother or sister', emoji: '👥' }`
   - **Context:** Automated test fixture mocking a item object for TTS testing.
   - **Classification:** **Internal Testing**.

3. **`games/what_gender_is_it/game.js` (Lines 104, 108, 147)**
   - **Code:** References `conceptObj.translations[targetLangCode]`
   - **Context:** Multilingual gender quiz game concept localization dictionary.
   - **Classification:** **Unrelated UI Localization Object**. This is a separate game-specific object (`conceptObj.translations`) for UI language lookup, not the vocabulary dataset `entry.translation` field.

---

## 2. Recommendations & Firewall Strategy

### Recommendation: Keep Data Field, Firewall From UI Rendering
1. **Do NOT delete `translation` from dataset JS files (`vocabulary/{fr,it,ru,el}/**/*.js`).**
   - The field provides useful metadata for offline developer tools, automated test fixtures, translation memory indexing, and potential opt-in teacher administrative modes.
2. **Strictly Firewall from All Student-Facing UI Renderers & Fallback Chains.**
   - Remove `item.translation` from all fallback chains in runtime engines (`practice/_engine/renderers.js`, `practice/_engine/core.js`, `practice/hub.js`, `practice/types/vocabulary/vocabulary.js`) and static HTML builders (`project/scripts/build_russian_vocab_manuals.py`).
   - Standardize target-language fallback ordering:
     `item.definitions?.[0]?.text || item.definition || item.subtext || item.word || '...'`

---

## 3. Schema Architecture Analysis: English (`vocabulary/en/`) vs. Others (`vocabulary/fr,it,ru,el/`)

### Current Difference
- **Non-English Datasets (`fr`, `it`, `ru`, `el`, `ba`, `tt`, `br`, `ka`, `hy`, `cv`):**
  - **Flat Thematic Hierarchy:** `vocabulary/{lang}/{LEVEL}/{theme}.js` (e.g. `vocabulary/fr/A1/greetings.js`, `vocabulary/it/A1/colours.js`).
  - Single JS array per file populated into `window.vocabularyData[lang]`.
- **English Dataset (`vocabulary/en/`):**
  - **POS-Tree Deep Hierarchy:** `vocabulary/en/{LEVEL}/{POS}/{DOMAIN}/{Subcategory}/{Sub_subcategory}.js` (e.g. `vocabulary/en/A1/Nouns/FOOD/Meals/Prepared_Dishes.js`).
  - Structured across 111+ category-specific JS files under POS subdirectories (`Nouns`, `Verbs`, `Adjectives`, `Other_POS`).

### Assessment & Recommendation
- **The difference is INTENTIONAL and SHOULD BE KEPT.**
- **Rationale:**
  1. English is the reference curriculum language on COSYlanguages and has over 1,800+ granular A1/A2 vocabulary items expanded toward Oxford 3000 standards. The POS-tree structure allows precise linguistic taxonomy classification (`macro_domain` -> `POS` -> `subcategory`).
  2. Other target languages (French, Italian, Russian, Greek, etc.) use thematic flat bundles (`greetings.js`, `colours.js`, `family.js`) optimized for rapid CEFR level loading and monolingual manual generation.
  3. Re-architecting English into flat files or re-architecting 13 other target languages into 111 POS folders would break existing loader scripts (`build_unified_index.py`, `build_french_vocab_manuals.py`, `build_russian_vocab_manuals.py`) without pedagogical benefit.
- **Action Taken:** Documented this structural distinction explicitly in `vocabulary/_schema/README.md`.

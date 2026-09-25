# Vocabulary Migration to COSYdata — Audit & Migration Notes

This document provides a comprehensive inventory of the local `vocabulary/` folder and a complete checklist of all files across the `COSYlanguages` codebase that consume or reference local vocabulary data.

All vocabulary data is being centralized into the standalone repository **COSYdata** ([https://github.com/cosylanguages/COSYdata](https://github.com/cosylanguages/COSYdata)), served live via GitHub Pages at [https://cosylanguages.github.io/COSYdata/](https://cosylanguages.github.io/COSYdata/).

> **Scope Note:** This task produces only this inventory and checklist in `MIGRATION_NOTES.md`. **No local vocabulary files or consuming source code files have been modified or deleted.**

---

## 1. Inventory of `vocabulary/` Folder

### 1.1 Summary Statistics
* **Languages Covered:** 14 target languages (`en`, `fr`, `it`, `ru`, `el`, `br`, `ka`, `tt`, `ba`, `hy`, `de`, `pt`, `es`, `cv`)
* **Total Files:** 1,019 files under `vocabulary/`
* **Total Vocabulary Word Entries:** ~24,277 unique entries across all language datasets

### 1.2 Per-Language Inventory

| ISO Code | Language Name | JS Files | JSON Files | CEFR Levels Covered | Approx. Word Entries |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **`en`** | English | 343 | 6 | A1, A2, B1, B2, C1, C2 | ~4,914 |
| **`fr`** | French | 85 | 6 | A1, A2, B1, B2, C1, C2 | ~3,232 |
| **`it`** | Italian | 84 | 6 | A1, A2, B1, B2, C1, C2 | ~2,643 |
| **`ru`** | Russian | 71 | 6 | A1, A2, B1, B2, C1, C2 | ~2,754 |
| **`el`** | Greek | 64 | 6 | A1, A2, B1, B2, C1, C2 | ~1,266 |
| **`br`** | Breton | 59 | 6 | A1, A2, B1, B2, C1, C2 | ~949 |
| **`ka`** | Georgian | 59 | 6 | A1, A2, B1, B2, C1, C2 | ~939 |
| **`tt`** | Tatar | 59 | 6 | A1, A2, B1, B2, C1, C2 | ~939 |
| **`ba`** | Bashkir | 59 | 6 | A1, A2, B1, B2, C1, C2 | ~938 |
| **`hy`** | Armenian | 59 | 6 | A1, A2, B1, B2, C1, C2 | ~937 |
| **`de`** | German | 47 | 4 | A1, A2, B1, B2, C1, C2 | ~763 |
| **`pt`** | Portuguese | 47 | 4 | A1, A2, B1, B2, C1, C2 | ~735 |
| **`es`** | Spanish | 47 | 4 | A1, A2, B1, B2, C1, C2 | ~715 |
| **`cv`** | Chuvash | 29 | 4 | A1, A2, B1, B2, C1, C2 | ~460 |
| **Total** | *14 Languages* | **1,012** | **70** | *A1–C2* | **~24,277** |

---

### 1.3 Data Shapes & Structural Conventions

The vocabulary dataset currently utilizes four primary file/data formats:

#### A. In-Memory IIFE Wrapped JS Files (`vocabulary/<lang>/.../*.js`)
Most vocabulary dataset files are JavaScript files that execute immediately upon script tag injection, appending entries to globally available window objects.
* **Primary Window Target:** `window.vocabularyData[lang]`
* **Specialized POS Window Targets:** `window.verbsData[lang]`, `window.adjectivesData[lang]`, `window.peopleData[lang]`, `window.locationsData[lang]`, `window.nationalitiesData[lang]`, `window.grammarData[lang]`, `window.grammarElements[lang]`
* **JS Code Wrapper Pattern:**
```js
(function() {
    const lang = "en";
    const data = [
        {
            "id": "A1-NOUN-SEL-001",
            "word": "mother",
            "form": "noun",
            "transcription": "/ˈmʌðər/",
            "emoji": "👩",
            "definitions": [
                {
                    "text": "A female parent.",
                    "examples": ["My mother is a doctor.", "She called her mother."]
                }
            ],
            "level": "starter",
            "level_code": "A1",
            "domain": "SELF",
            "subcategory": "Family",
            "pos_section": "Nouns"
        }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
```

#### B. Central Manifest File (`vocabulary/manifest.json`)
Acts as the dynamic file lookup index used by `js/core/engine.js` to determine which `.js` files to load for a requested language and CEFR level.
* **Shape:** JSON dictionary mapping language ISO codes and level codes (`A1`, `A2`, `B1`, `B2`, `C1`, `C2`) to arrays of relative file paths.
```json
{
  "en": {
    "A1": [
      "Nouns/SELF/Family/Immediate_Family.js",
      "Verbs/SELF/Daily_Routines/Morning_Routine.js"
    ]
  }
}
```

#### C. Canonical Master JSON Datasets (`vocabulary/_canonical/en/A0-A1_master.json`)
Full monolingual canonical master dataset containing 1,298 A0-A1 English vocabulary items with metadata including IPA transcriptions, audio URLs, collocations, set phrases, and Oxford/Cambridge alignment.

#### D. Schema Specification (`vocabulary/_schema/vocab.schema.json`)
JSON Schema defining validation rules for vocabulary entries, enforcing required properties (`id`, `word`, `definitions`, `level`, etc.).

#### E. Directory Hierarchy Patterns
* **English (`vocabulary/en/`):** POS-tree deep hierarchy split by Part of Speech (`Nouns/`, `Verbs/`, `Adjectives/`, `Other_POS/`) -> Domain -> Subcategory -> Sub-subcategory `.js` files.
* **Non-English Target Languages (`vocabulary/<lang>/<LEVEL>/`):** Flat thematic structure per level (e.g. `vocabulary/fr/A1/verbs.js`, `vocabulary/ru/B1/debates.js`).

---

## 2. Checklist of Consuming Files

This checklist identifies every file in the repository that reads, fetches, or script-loads data from the local `vocabulary/` folder.

### 2.1 Core Framework & Dynamic Loader Engine
- [ ] **`js/core/engine.js`**
  - **Access Mechanism:**
    - `getVocabFileList(lang, folderCode)`: Fetches `vocabulary/manifest.json` via HTTP `fetch()`.
    - `loadVocabFile(path)`: Dynamically creates and injects HTML `<script src="vocabulary/<path>"></script>` tags to load vocabulary files into memory.
    - `COSY.loadLanguageData(lang, levelId)`: Orchestrates parallel script loading across level folders and aggregates loaded items into `window.vocabularyData[lang]` and specialized POS window dictionaries.

### 2.2 Shared Game & UI Utilities
- [ ] **`js/games/utils/shared.js`**
  - **Access Mechanism:**
    - `loadAllData()`: Calls `window.COSY.loadLanguageData(lang, levelId)` to load vocabulary into memory.
    - `getVocabPool()`: Reads directly from `window.vocabularyData[lang]`.
    - `filterVocabulary()`: Filters entries from `window.vocabularyData[lang]`.
    - Emoji support sanitizer: Iterates over entries in `window.vocabularyData[lang]`.
- [ ] **`js/data/numbers.js`**
  - **Access Mechanism:** In-memory numbers vocabulary helper that initializes and appends number entries directly to `window.vocabularyData[lang]`.

### 2.3 Practice Hub & Practice Engine (`practice/`)
- [ ] **`practice/types/vocabulary/vocabulary.js`**
  - **Access Mechanism:** Calls `window.COSY.loadLanguageData(targetLang, level)` in `ensureDataLoaded()` and reads from `window.vocabularyData`, `window.verbsData`, `window.adjectivesData`, `window.locationsData`, `window.peopleData`, `window.nationalitiesData`, `window.phrasesData`.
- [ ] **`practice/index.html`**
  - **Access Mechanism:** Includes `<script src="types/vocabulary/vocabulary.js"></script>`, which invokes `window.COSY.loadLanguageData()` during practice session init.
- [ ] **`practice/hub.js`**
  - **Access Mechanism:** Validates `'vocab'` and `'vocabulary'` category requests and delegates data loading to `practice/types/vocabulary/vocabulary.js`.
- [ ] **`practice/_engine/renderers.js`**
  - **Access Mechanism:** Calls `window.gameUtils.getVocabPool()` to extract loaded vocabulary entries from `window.vocabularyData` to build dynamic distractors and option lists.

### 2.4 Offline Print Studio Tools (`print-studio/`)
- [x] **`print-studio/print-cards.html`** *(Migrated - Pilot)*
  - **Access Mechanism:** Includes `shared/vocab-resolver.js` from COSYdata (`https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js`) via `<script type="module">`. Fetches category datasets asynchronously from COSYdata endpoints (`https://cosylanguages.github.io/COSYdata/vocabulary/${lang}/${topic}.json`).
- [ ] **`print-studio/print-zine.html`**
  - **Access Mechanism:** Dynamically constructs script tags `script.src = 'vocabulary/${lang}/${level}/${topic}.js'` and reads from `window.vocabularyData[lang]`.
- [ ] **`print-studio/print-boardgame.html`**
  - **Access Mechanism:** Dynamically constructs script tags `script.src = 'vocabulary/${lang}/${level}/${topic}.js'` and reads from `window.vocabularyData[lang]`.
- [ ] **`print-studio/print-grammar.html`**
  - **Access Mechanism:** Dynamically constructs script tags `s.src = 'vocabulary/${lang}/${dir}/verbs.js'` and `s.src = 'vocabulary/${lang}/${dir}/${f}'` (loading `vocabulary.js` and `adjectives.js`), populating and reading `window.vocabularyData`.

### 2.5 Primary Vocabulary Reference Portal
- [ ] **`vocabulary/index.html`**
  - **Access Mechanism:** Interactive web portal for browsing vocabulary. Calls `loadLanguageData(currentLang)` via `js/core/engine.js`, loading `vocabulary/manifest.json` and level `.js` files under `vocabulary/<lang>/...`.

### 2.6 Build, Audit, Indexing & Blog Generator Scripts
- [ ] **`scripts/build_unified_index.py`**
  - **Access Mechanism:** Python indexing script that recursively scans and evaluates `vocabulary/{lang}/**/*.js` files to compile `data/index/[lang]_index.json`.
- [ ] **`scripts/check-canon-drift.mjs`**
  - **Access Mechanism:** Node.js CLI tool reading `vocabulary/_canonical/en/A0-A1_master.json` to detect drift against canonical sources.
- [ ] **`scripts/generate_top200_blog.py`**
  - **Access Mechanism:** Python script that reads `vocabulary/{lang}/A1/*.js` files to generate blog post content.
- [ ] **`scripts/vocab_audit/extract.py`**
  - **Access Mechanism:** Python audit script scanning `vocabulary/en/**/*.js` files.
- [ ] **`project/scripts/build_russian_vocab_manuals.py`**
  - **Access Mechanism:** Python builder evaluating `vocabulary/ru/{A1..C2}/*.js` to generate HTML vocabulary manual pages.
- [ ] **`project/scripts/build_french_vocab_manuals.py`**
  - **Access Mechanism:** Python builder evaluating `vocabulary/fr/{A1..C2}/*.js` to generate HTML vocabulary manual pages.
- [ ] **`project/scripts/clean_text.py`**
  - **Access Mechanism:** Python script scanning `vocabulary/{lang}/{lvl}/*.js` files for text cleaning.
- [ ] **`project/scripts/restructure_english_vocab.py`**
  - **Access Mechanism:** Python script parsing and restructuring files under `vocabulary/en/`.
- [ ] **`project/scripts/update_en_vocab_html.py`**
  - **Access Mechanism:** Python script processing `vocabulary/en/` files.
- [ ] **`project/scripts/content-build/generate_*_vocab.py`** (`generate_ba_vocab.py`, `generate_br_vocab.py`, `generate_cv_a1_master.py`, `generate_cv_stubs.py`, `generate_de_vocab.py`, `generate_es_vocab.py`, `generate_hy_vocab.py`, `generate_ka_vocab.py`, `generate_pt_vocab.py`, `generate_tt_vocab.py`)
  - **Access Mechanism:** Python dataset generators writing `.js` files into `vocabulary/<lang>/...`.

---

## 3. Non-Consuming References & UI Text Labels

The following files contain the word "vocabulary" in user interface text, navigation links, or descriptive documentation, but **do NOT read or fetch data files from the local `vocabulary/` folder**:

| File Path | Nature of Match / Reason Non-Consuming |
| :--- | :--- |
| **`placement-quiz.html`** | Contains user feedback & recommendation text (e.g. *"Practice core vocabulary card recall drills"*). Does not fetch data. |
| **`apps/free-portal/manifest.json`** | PWA manifest description text (e.g. *"...self-study vocabulary..."*). |
| **`languages/<lang>/vocabulary.html`** | Static language hub landing pages (`en`, `fr`, `it`, `ru`, `el`) presenting links to external apps and practice tools. |
| **`templates/practice/practice-type-template.js`** | Template file containing example snippet `window.COSY.loadLanguageData(lang, level)`. |

---

## 4. Pilot Migration Status & Audit Findings (`print-studio/print-cards.html`)

As part of the initial pilot migration to validate remote COSYdata integration:
* **Consumer Migrated:** `print-studio/print-cards.html` (Printable Leitner Cards Generator).
* **Resolver Included:** Included `https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js` via `<script type="module">` to expose `resolveVocab` and `hydrateVocabElements` on `window.COSYdataResolver`.
* **Data Fetching:** Updated `loadCategoryData()` to fetch remote JSON datasets directly from `https://cosylanguages.github.io/COSYdata/vocabulary/${lang}/${topic}.json`. Added `animals` (`🐶 Animals`) to the topic selection dropdown.
* **Findings & Data Mismatches:**
  1. **Directory Structure Mismatch:** Local datasets used `vocabulary/<lang>/<LEVEL>/<topic>.js` (nested by level and topic), whereas COSYdata uses flat theme files per language (`vocabulary/<lang>/<theme>.json`, e.g., `animals.json`).
  2. **Data Shape Differences:** Entries in COSYdata store definitions as an array of strings (`definitions: ["Definition text..."]`) rather than objects (`definitions: [{ text: "..." }]`). Card back rendering in `print-cards.html` was updated to support both string array definitions/examples and legacy object definitions cleanly.
  3. **Missing Themes in COSYdata:** COSYdata currently contains only `animals.json` under `vocabulary/en/`. Topics like `adjectives`, `verbs`, `locations`, `people`, `dishes`, and non-English target languages need to be exported to COSYdata before full migration of all consuming tools.

---

## 5. Migration Plan Summary for Future Task

When centralizing vocabulary data to **COSYdata** ([`https://cosylanguages.github.io/COSYdata/`](https://cosylanguages.github.io/COSYdata/)):

1. **Loader Base Path Update:** Update `js/core/engine.js` (`getPrefix()` or `basePath`) to point `fetch()` and dynamic `<script>` tag loading to `https://cosylanguages.github.io/COSYdata/vocabulary/` (or JSON fetch endpoints).
2. **Print Studio Update:** Update `print-cards.html`, `print-zine.html`, `print-boardgame.html`, and `print-grammar.html` script loading URLs to target the remote COSYdata endpoints.
3. **Reference Portal Update:** Update `vocabulary/index.html` to consume remote COSYdata endpoints.
4. **Build & Audit Utility Updates:** Update Python/Node scripts in `scripts/` and `project/scripts/` to fetch or clone from COSYdata if local building is required.
5. **Local Folder Clean Up:** Once remote consumption is verified across all tools and practice types, delete or archive the local `vocabulary/` dataset folder.

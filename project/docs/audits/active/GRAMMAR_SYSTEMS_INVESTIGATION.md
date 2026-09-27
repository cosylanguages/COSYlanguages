# Grammar Systems Investigation Report

## Executive Summary

COSYlanguages contains two distinct grammar-related content systems:
1. **The JSON Reference Layer** (`reference-grammar/{lang}/morphology/*.json`, `reference-grammar/{lang}/syntax/*.json`, `reference-grammar/{lang}/phonology/*.json`, `reference-grammar/{lang}/particles/*.json`)
2. **The CEFR HTML Manuals Layer** (`manuals/{lang}/grammar/{level}/topics/*.html`)

This investigation evaluates whether the JSON reference layer is legacy content, active infrastructure, or a parallel system.

---

## System 1: The JSON Reference Layer (`reference-grammar/`)

### 1. Purpose & Architecture
The JSON layer consists of structured language-keyed schemas located under `reference-grammar/{lang}/` across 13 target languages (`en`, `fr`, `de`, `es`, `it`, `pt`, `ru`, `el`, `br`, `ba`, `cv`, `hy`, `ka`, `tt`). Each language directory contains 4 subdirectories:
- `morphology/` (`verbs.json`, `nouns.json`, `pronouns.json`, `determiners.json`, `adjectives.json`, `numerals.json`)
- `syntax/` (`sentence_types.json`, `word_order.json`, `clauses.json`)
- `phonology/` (`sounds.json`, `stress.json`, `intonation.json`)
- `particles/` (`prepositions.json`, `conjunctions.json`, `interjections.json`)

Each JSON file contains structured items with schema fields including `id`, `label`, `definition`, `examples`, `rules`, and optional `practice_links`.

### 2. Codebase Consumption Analysis
The JSON layer is **not legacy**; it serves as **load-bearing dynamic practice infrastructure**:
* **Practice Engine Ingestion (`js/core/engine.js`)**: `COSY.loadMorphologyData(lang)` dynamically fetches all 6 morphology JSON files (`verbs.json`, `nouns.json`, `pronouns.json`, `determiners.json`, `adjectives.json`, `numerals.json`) from `grammar/{lang}/morphology/` (or via fallback path resolution).
* **Interactive Drill Generation (`practice/types/vocabulary/vocabulary.js`)**: In practice mode (`uiCat === 'Grammar'`), `practice/types/vocabulary/vocabulary.js` invokes `COSY.loadMorphologyData(targetLang)` and transforms JSON item entries into dynamic practice card items.
* **Phonology Engine Loader (`js/data/phonology_data.js`)**: Loads `reference-grammar/{lang}/phonology/{sounds,stress,intonation}.json` dynamically at runtime.
* **Unified Master Index Generation (`scripts/build_unified_index.py`)**: Recursively scans all JSON files under `reference-grammar/{lang}/**/*.json` to construct canonical globally unique cross-reference index files (`data/index/{lang}_index.json`).

---

## System 2: The CEFR HTML Manuals Layer (`manuals/`)

### 1. Purpose & Architecture
The HTML manuals layer consists of rich, level-calibrated interactive web textbook pages located under `manuals/{lang}/grammar/{level}/topics/*.html` (e.g., `manuals/en/grammar/a1/topics/to-be.html`).

Features include:
- Strict 14-step pedagogical page rhythm defined in `GRAMMAR_STANDARD.md`.
- CEFR-calibrated progression (A1 through C2).
- Interactive client-side UI widgets (`.mflip` mistake cards, persistent `.checklist` items, and `.quiz-panel` diagnostic quizzes powered by `assets/app.js`).
- Direct navigation hubs (`manuals/{lang}/grammar/{level}/index.html`, `part-N.html`).

---

## Comparative Findings

| Attribute | JSON Reference Layer (`reference-grammar/`) | HTML Manuals Layer (`manuals/`) |
| :--- | :--- | :--- |
| **Primary Role** | Machine-readable data store for practice engine & index generation | Rich human-readable interactive web edition manuals |
| **Structure** | Linguistic categories (morphology, syntax, phonology) | Pedagogical CEFR levels (A1, A2, B1, B2, C1, C2) |
| **Consumption** | `js/core/engine.js`, `practice/types/`, `js/data/`, `scripts/build_unified_index.py` | Browser web navigation, direct student study, Playwright E2E suites |
| **Inter-Linkage** | Contains `practice_links` pointing to canonical HTML manual topic URLs | Contains `practice-cta-banner` pointing to practice engine drills |

---

## Recommendation

**Option (a): Formally document both systems as serving distinct, complementary roles.**

### Reasoning
1. **They fulfill different architectural functions**:
   - The **JSON Reference Layer** provides structured, machine-readable linguistic data consumed dynamically by client-side JS practice engines (`practice/`), phonology loaders, and indexing scripts.
   - The **HTML Manuals Layer** provides the primary human-oriented instructional content for sequential CEFR study.
2. **Neither system should be deprecated or merged into the other**:
   - Deprecating JSON would break practice drill generation and unified cross-reference indexing.
   - Merging them into a single format would either overcomplicate static HTML pages or lose machine-parseable metadata.
3. **Canonical Linkage Protocol**:
   - Every JSON item with a `practice_links` array should store canonical paths pointing to `manuals/{lang}/grammar/{level}/topics/{topic}.html`.
   - Every HTML topic page should contain a practice CTA link pointing to the practice engine with corresponding parameters.

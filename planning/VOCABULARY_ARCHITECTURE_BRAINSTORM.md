# COSYlanguages Vocabulary Architecture & Consolidation Proposal

## Executive Summary
An audit of the `vocabulary/` directory reveals **666 individual JavaScript files** spread across 13 language folders (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `ba`, `br`, `hy`, `ka`, `tt`).

This extreme file fragmentation creates developer confusion, unnecessary HTTP request overhead, maintenance complexity, and synchronization drift across practice engines, curriculum files, standalone games, and speaking clubs.

---

## Key Audit Findings

### 1. Excessive File Fragmentation
* **666 Total Files:** Every single level (A1–C2) splits vocabulary into micro-files (`adjectives.js`, `verbs.js`, `food_drink.js`, `opinions.js`, `locations.js`, `debates.js`, etc.).
* **HTTP Overhead:** Fetching vocabulary for a single level can require dozens of script tags or dynamic script injections.
* **Complex Manifest:** `vocabulary/manifest.json` is over 500 lines long, serving solely to list array strings of individual file names per level and language.

### 2. Core Taught Languages vs. Non-Taught Stubs
* **Core Taught Languages (5):** `en` (81 files), `fr` (79 files), `it` (78 files), `ru` (65 files), `el` (64 files). These contain full vocabulary datasets for active courses, practice engines, and speaking clubs.
* **Non-Taught / Stub Languages (8):** `es`, `de`, `pt`, `ba`, `br`, `hy`, `ka`, `tt` (29 files each). These are mostly identical boilerplate copies containing placeholder/English vocabulary stubs, inherited from early layout tests.

### 3. Duplication Across Engine Datasets
* **Curriculum JSON vs. Vocabulary JS:** Words defined in `curriculum/{lang}/general/{LEVEL}.json` are frequently duplicated in `vocabulary/{lang}/{LEVEL}/*.js` and `games/data/{lang}/game_data.js`.
* **IIFE Global Mutates:** Files use IIFE window attachments (e.g., `window.COSY_VOCAB_EN_A1_FOOD = [...]`), causing global scope clutter and risking namespace collisions.

---

## Architectural Brainstorm & Recommendations

### Option A: CEFR Level Bundling (Recommended Strategy)
Consolidate individual topic `.js` files into single, clean JSON files per CEFR level:
* **Target Structure:**
  ```text
  vocabulary/
  ├── en/
  │   ├── A1.json   (Contains adjectives, food, verbs, travel, etc.)
  │   ├── A2.json
  │   ├── B1.json
  │   ├── B2.json
  │   ├── C1.json
  │   └── C2.json
  ```
* **Benefits:**
  * Reduces `vocabulary/` from **666 files down to 30 clean JSON files** (for core languages).
  * Eliminates `vocabulary/manifest.json` complexity — loading vocabulary for `en` at level `A1` is simply `fetch('/vocabulary/en/A1.json')`.
  * Instant JSON parsing, zero window global pollution.

### Option B: Single Language Bundle (`{lang}.json`)
Combine all levels for a language into a single master JSON file (e.g., `vocabulary/en.json` containing `A1`, `A2`, `B1`, `B2`, `C1`, `C2`).
* **Pros:** Exactly 1 network request per language.
* **Cons:** Larger initial download payload if a user only needs A1 practice.

### Option C: Separation of Core Taught Languages vs. Reference Stubs
* Retain full datasets for core languages (`en`, `fr`, `it`, `ru`, `el`).
* Move non-taught reference stubs (`es`, `de`, `pt`, `ba`, `br`, `hy`, `ka`, `tt`) into a dedicated `vocabulary/stubs/` or `vocabulary/reference/` subfolder, or prune them to prevent developer confusion.

---

## Proposed Action Plan for Refactoring

1. **Build a Migration Script:** Write a node/python script to parse all existing `vocabulary/{lang}/{level}/*.js` files and aggregate them into unified `vocabulary/{lang}/{level}.json` files.
2. **Update Practice Engine Loader:** Update `js/core/engine.js` (and `js/games/loader.js` / practice engines) to load `vocabulary/{lang}/{level}.json` natively via `fetch()`.
3. **Prune Legacy Stubs:** Clean up unused stub files while keeping `vocabulary/index.html` clear on reference status.
4. **Validation:** Run all Playwright practice tests to guarantee 100% regression-free performance.

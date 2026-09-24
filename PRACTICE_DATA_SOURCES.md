# Practice Data Sources & Architecture Audit

This document audits how the COSYlanguages Practice Hub and its sub-modules source vocabulary, grammar, and exercise content.

---

## 1. COSYdata Fetch-and-Fallback Architecture (`js/core/engine.js`)

Centralized language data loading is governed by `COSY.loadLanguageData(lang, levelId)` in `js/core/engine.js`.

### 1.1 Remote Fetch Logic
- **Base Endpoint**: `COSYDATA_BASE = 'https://cosylanguages.github.io/COSYdata/'`
- **Execution Flow**:
  1. Requests `vocabulary/{lang}/index.json` from `COSYDATA_BASE`.
  2. Extracts unique theme file paths listed in the index.
  3. Executes parallel `fetch` calls for each theme JSON file.
  4. Normalizes items (`level` / `level_code`) and filters by target level (`levelId`).
  5. Populates `window.vocabularyData[lang]` along with POS/theme buckets (`window.verbsData[lang]`, `window.adjectivesData[lang]`, `window.locationsData[lang]`, `window.peopleData[lang]`, `window.nationalitiesData[lang]`, `window.dishesData[lang]`).
  6. Returns the fetched entries if successful (`loadedEntries.length > 0`).

### 1.2 Fallback Logic
- If `COSYdata` fetch fails (network issue, missing `index.json`, or empty response), execution falls back to `loadVocabFile()` loading local scripts under `vocabulary/{lang}/{folderCode}/` listed in local manifest / directory lists.

---

## 2. Practice Modes & Data Source Classification

| Practice Mode | File Location | Sourcing Mechanism | Data Sources Used |
|---|---|---|---|
| **Vocabulary Practice** | `practice/types/vocabulary/vocabulary.js` | COSYdata + Fallback | `COSY.loadLanguageData` $\rightarrow$ `window.vocabularyData`, `window.gameUtils.getVocabPool`, fallback to hardcoded `QUESTIONS[lang][cat]` |
| **Grammar Practice** | `practice/types/vocabulary/vocabulary.js` | COSYdata + Morphology | `COSY.loadLanguageData` + `window.morphologyData[lang]` + hardcoded fallback `QUESTIONS[lang]['Grammar']` |
| **Speaking Practice** | `practice/types/vocabulary/vocabulary.js` | COSYdata + Fallback | `COSY.loadLanguageData` + `window.gameUtils.getVocabPool` |
| **Pronunciation Practice** | `practice/types/vocabulary/vocabulary.js` | COSYdata + Phonology + Curriculum | `COSY.loadLanguageData` + `window.phonologyData` + `COSY.loadCurriculum` |
| **Concept Check (CCQs)** | `practice/types/concept-check/concept-check.js` | Local Static JSON | `reference-grammar/{lang}/lessons/{unit}.json` and `reference-grammar/{lang}/ccq/{ref}.json` |
| **Writing & Daily Challenge** | `practice/types/writing/writing.js` | Local Static JS | `window.DAILY_SCHEDULE` and `window.DAILY_BANK` in `practice/types/writing/daily_data.js` |
| **Growing Thread (Cumulative Story)** | `practice/growing-thread.html` | Local Static JSON | Direct `fetch('../curriculum/en/general/A1.json')` |
| **Cognitive Immersion** | `practice/cognitive-immersion.html` | Embedded Local JS State | Inline static exercises, speed test questions, and mnemonics in `practice/cognitive-immersion.html` |
| **SRS Memory Review** | `practice/_engine/progress.js` & `practice/hub.js` | Browser `localStorage` | Stored SRS card objects in `cosy_srs_progress` via `localStorage` |
| **Mistake Remediation Drill** | `practice/hub.js` | Browser `localStorage` | Stored mistake items in `cosy_mistake_bank` via `localStorage` |

---

## 3. COSYtools References inside `practice/` and `vocabulary/`

Across the repository, there are ~50 references to COSYtools. Within the `practice/` and `vocabulary/` directories specifically:

### 3.1 `vocabulary/` Directory
- **0 references** to COSYtools.

### 3.2 `practice/` Directory
- **Total References**: 11 occurrences in `practice/` files (1 in `practice/hub.js`, 3 in `practice/_engine/progress.js` comments, 7 in `practice/index.html`).
- **Integration Type**: 100% of user-facing UI references are **external link-outs** (`<a href="https://cosylanguages.github.io/COSYtools/..." target="_blank" rel="noopener">`).
- **Live Embeds**: **0 live `<iframe>` embeds** exist inside `practice/`.
- **Dynamic Query Handoff**: `practice/hub.js` updates all links pointing to COSYtools dynamically with `?lang=`, `?level=`, and `?topic=` URL parameters based on active user selections.

#### Inventory of COSYtools Link-Out Cards in `practice/index.html`:
1. `https://cosylanguages.github.io/COSYtools/` (Practice Hub Hero Card & Footer Link)
2. `https://cosylanguages.github.io/COSYtools/en-verb-prep/` (EN Prepositions Engine)
3. `https://cosylanguages.github.io/COSYtools/fr-conjugeur/` (FR Conjugeur)
4. `https://cosylanguages.github.io/COSYtools/fr-genre/` (FR Genre)
5. `https://cosylanguages.github.io/COSYtools/it-coniugatore/` (IT Coniugatore)
6. `https://cosylanguages.github.io/COSYtools/it-genere/` (IT Genere)
7. `https://cosylanguages.github.io/COSYtools/ru-spryazhenie/` (RU Спряжение)
8. `https://cosylanguages.github.io/COSYtools/ru-rod-padezhi/` (RU Род & Падежи)
9. `https://cosylanguages.github.io/COSYtools/el-klisi-rimaton/` (EL Κλίση)
10. `https://cosylanguages.github.io/COSYtools/el-genos-ptoseis/` (EL Γένος & Πτώσεις)

---

## 4. Cross-Reference of Existing Audit Reports

### 4.1 Local Report: `reports/dictionary-ui-audit.md`
- **Summary**: Audits 10,843 vocabulary entries across 620 theme files in 14 languages inside `COSYdata`.
- **Key Findings**:
  - `domain` strings exist only in English (16 distinct domain strings); all 13 non-English datasets have 0 populated `domain` fields and rely exclusively on top-level `theme`.
  - Field coverage: `audio`, `image`, `tags`, and `related_forms` are **0% populated** across all static theme files.
  - Examples are nested inside `definitions[i].examples[]` rather than top-level arrays.

### 4.2 Local Status of `reports/cosylanguages-vs-cosydata-audit.md`
- **Status**: **Missing locally** in `COSYlanguages`. (This report resides in the `COSYdata` repository or historical records).

---

## 5. Flags for Potential COSYdata Migration Opportunities

The following practice components currently rely on hardcoded local datasets that could be supplied or centralized via COSYdata:

1. **Daily Challenge Prompt Bank (`practice/types/writing/daily_data.js`)**:
   - `window.DAILY_BANK` contains hardcoded writing challenge prompts organized by day-of-week categories.
2. **Daily Challenge Seed List (`practice/hub.js`)**:
   - Hardcoded array of seeds (`seeds = [...]`) for generating daily prompts.
3. **Hardcoded Fallback Question Banks (`practice/types/vocabulary/vocabulary.js`)**:
   - `QUESTIONS` object contains static fallback questions for English, French, Italian, Russian, and Greek across `vocab`, `grammar`, and `speaking` categories.
4. **Concept Checking Questions (`reference-grammar/{lang}/ccq/` & `lessons/`)**:
   - Static JSON files for CCQ verification.

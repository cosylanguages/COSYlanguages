# Dictionary UI Vocabulary Audit Report

## Executive Summary
This report audits the underlying vocabulary dataset in `vocabulary/` across all 14 language directories in `COSYdata`. The purpose of this audit is to provide empirical, data-driven findings to ground the upcoming Dictionary UI development in reality before building user interfaces.

---

## 1. Language Codes & Word Counts Summary

| Language Code | Language Name | Theme Files | Total Entries | Valid Word Entries | Unique Words |
|---|---|---|---|---|---|
| `ba` | Bashkir | 27 | 398 | 398 | 395 |
| `br` | Breton | 27 | 398 | 398 | 391 |
| `cv` | Chuvash | 15 | 5 | 5 | 4 |
| `de` | German | 15 | 211 | 211 | 161 |
| `el` | Greek | 45 | 549 | 548 | 518 |
| `en` | English | 226 | 3,588 | 3,588 | 3,551 |
| `es` | Spanish | 15 | 160 | 160 | 160 |
| `fr` | French | 52 | 1,379 | 1,342 | 1,281 |
| `hy` | Armenian | 27 | 398 | 398 | 392 |
| `it` | Italian | 51 | 1,368 | 1,367 | 1,296 |
| `ka` | Georgian | 27 | 398 | 398 | 388 |
| `pt` | Portuguese | 15 | 209 | 209 | 160 |
| `ru` | Russian | 51 | 1,384 | 1,383 | 1,300 |
| `tt` | Tatar | 27 | 398 | 398 | 395 |
| **Total** | **14 Languages** | **620 Files** | **10,843** | **10,805** | **10,392** |

*(Note: Index files `index.json`, `manifest.json`, and schema files under `_schema/` were excluded from theme file counts).*

---

## 2. Language Directories & Theme Files Inventory

Below is the complete listing of all 14 language directories under `vocabulary/` and the theme files present in each:

### 2.1 Bashkir (`vocabulary/ba/`) - 27 Theme Files
- `A2/fluency.js`, `A2/locations.js`, `A2/opinions.js`
- `B1/fluency.js`, `B1/locations.js`, `B1/opinions.js`
- `B2/adjectives.js`, `B2/debates.js`, `B2/fluency.js`, `B2/opinions.js`, `B2/people.js`, `B2/quotes.js`, `B2/verbs.js`, `B2/vocabulary.js`
- `C1/adjectives.js`, `C1/debates.js`, `C1/fluency.js`, `C1/opinions.js`, `C1/people.js`, `C1/quotes.js`, `C1/verbs.js`, `C1/vocabulary.js`
- `C2/adjectives.js`, `C2/fluency.js`, `C2/opinions.js`, `C2/verbs.js`, `C2/vocabulary.js`

### 2.2 Breton (`vocabulary/br/`) - 27 Theme Files
- Same 27 theme file structure as `ba`.

### 2.3 Chuvash (`vocabulary/cv/`) - 15 Theme Files
- `A2/fluency.js`, `A2/locations.js`, `A2/opinions.js`
- `B1/fluency.js`, `B1/locations.js`, `B1/opinions.js`
- `B2/fluency.js`, `B2/opinions.js`
- `C1/fluency.js`, `C1/opinions.js`
- `C2/adjectives.js`, `C2/fluency.js`, `C2/opinions.js`, `C2/verbs.js`, `C2/vocabulary.js`

### 2.4 German (`vocabulary/de/`) - 15 Theme Files
- Same 15 theme file structure as `cv`.

### 2.5 Greek (`vocabulary/el/`) - 45 Theme Files
- `A2/adjectives.js`, `A2/debates.js`, `A2/fluency.js`, `A2/locations.js`, `A2/opinions.js`, `A2/quotes.js`, `A2/travel.js`, `A2/verbs.js`
- `B1/adjectives.js`, `B1/debates.js`, `B1/fluency.js`, `B1/idioms.js`, `B1/locations.js`, `B1/opinions.js`, `B1/people.js`, `B1/quotes.js`, `B1/speaking.js`, `B1/verbs.js`, `B1/vocabulary.js`
- `B2/adjectives.js`, `B2/debates.js`, `B2/fluency.js`, `B2/idioms.js`, `B2/opinions.js`, `B2/people.js`, `B2/quotes.js`, `B2/speaking.js`, `B2/verbs.js`, `B2/vocabulary.js`
- `C1/debates.js`, `C1/fluency.js`, `C1/idioms.js`, `C1/opinions.js`, `C1/people.js`, `C1/quotes.js`, `C1/speaking.js`, `C1/verbs.js`, `C1/vocabulary.js`
- `C2/adjectives.js`, `C2/debates.js`, `C2/fluency.js`, `C2/opinions.js`, `C2/quotes.js`, `C2/speaking.js`, `C2/verbs.js`, `C2/vocabulary.js`

### 2.6 English (`vocabulary/en/`) - 226 Theme Files
- Structured in nested subdirectories by level (`A2`, `B1`, `B2`, `C1`, `C2`), Part of Speech (`Adjectives`, `Nouns`, `Verbs`, `Idioms`), Domain, Subcategory, and Sub-subcategory.
- Contains level-specific idiom theme files: `A2/idioms.js`, `B1/idioms.js`, `B2/idioms.js`, `C1/idioms.js`, `C2/idioms.js`.
- Comprehensive subcategory breakdown files across 16 domain trees (`COMMUNICATION`, `EPISTEMOLOGY`, `FOOD`, `HOME`, `LAW`, `NATURE`, `PHILOSOPHY`, `People`, `SELF`, `Science`, `Society`, `TIME_NUMBERS`, `TRAVEL`, `WORK_SCHOOL`, `AESTHETICS`, `DISCOURSE`).

### 2.7 Spanish (`vocabulary/es/`) - 15 Theme Files
- Same 15 theme file structure as `cv` and `de`.

### 2.8 French (`vocabulary/fr/`) - 52 Theme Files
- `A2/adjectives.js`, `A2/debates.js`, `A2/fluency.js`, `A2/idioms.js`, `A2/locations.js`, `A2/opinions.js`, `A2/people.js`, `A2/quotes.js`, `A2/speaking.js`, `A2/travel.js`, `A2/verbs.js`, `A2/vocabulary.js`
- `B1/adjectives.js`, `B1/debates.js`, `B1/fluency.js`, `B1/idioms.js`, `B1/locations.js`, `B1/opinions.js`, `B1/people.js`, `B1/quotes.js`, `B1/speaking.js`, `B1/verbs.js`, `B1/vocabulary.js`
- `B2/adjectives.js`, `B2/debates.js`, `B2/fluency.js`, `B2/idioms.js`, `B2/opinions.js`, `B2/people.js`, `B2/quotes.js`, `B2/speaking.js`, `B2/verbs.js`, `B2/vocabulary.js`
- `C1/debates.js`, `C1/fluency.js`, `C1/idioms.js`, `C1/opinions.js`, `C1/people.js`, `C1/quotes.js`, `C1/speaking.js`, `C1/verbs.js`, `C1/vocabulary.js`
- `C2/adjectives.js`, `C2/debates.js`, `C2/fluency.js`, `C2/idioms.js`, `C2/opinions.js`, `C2/people.js`, `C2/quotes.js`, `C2/speaking.js`, `C2/verbs.js`, `C2/vocabulary.js`

### 2.9 Armenian (`vocabulary/hy/`) - 27 Theme Files
- Same 27 theme file structure as `ba`.

### 2.10 Italian (`vocabulary/it/`) - 51 Theme Files
- Same 51 theme file structure as `ru` and `fr`.

### 2.11 Georgian (`vocabulary/ka/`) - 27 Theme Files
- Same 27 theme file structure as `ba`.

### 2.12 Portuguese (`vocabulary/pt/`) - 15 Theme Files
- Same 15 theme file structure as `cv`, `de`, `es`.

### 2.13 Russian (`vocabulary/ru/`) - 51 Theme Files
- Same 51 theme file structure as `it`.

### 2.14 Tatar (`vocabulary/tt/`) - 27 Theme Files
- Same 27 theme file structure as `ba`.

---

## 3. Domain Field Sampling & Schema Audit

### 3.1 Sampled Domain Values by Language
Across all 10,843 vocabulary entries sampled from theme files:

- **English (`en`)**: Found **16 distinct domain strings**:
  1. `AESTHETICS`
  2. `COMMUNICATION`
  3. `DISCOURSE`
  4. `EPISTEMOLOGY`
  5. `FOOD`
  6. `HOME`
  7. `LAW`
  8. `NATURE`
  9. `PHILOSOPHY`
  10. `People` (Title Case)
  11. `SELF`
  12. `Science` (Title Case)
  13. `Society` (Title Case)
  14. `TIME_NUMBERS`
  15. `TRAVEL`
  16. `WORK_SCHOOL`

- **All 13 Non-English Languages** (`ba`, `br`, `cv`, `de`, `el`, `es`, `fr`, `hy`, `it`, `ka`, `pt`, `ru`, `tt`):
  - **0 entries** contain a `domain` property. The `domain` field is completely unpopulated / undefined across all non-English dataset theme files.

### 3.2 Schema Audit (`vocabulary/_schema/vocab.schema.json`)
- The JSON schema at `vocabulary/_schema/vocab.schema.json` documents a restricted enum for `domain`:
  `["COMMUNICATION", "FOOD", "HOME", "NATURE", "SELF", "TIME_NUMBERS", "TRAVEL", "WORK_SCHOOL"]`
- **Key Schema Discrepancies**:
  1. **8 Unmapped Domains in Data**: `AESTHETICS`, `DISCOURSE`, `EPISTEMOLOGY`, `LAW`, `PHILOSOPHY`, `People`, `Science`, `Society` exist in English theme files but are missing from the schema enum.
  2. **Casing Inconsistency**: The schema specifies UPPERCASE values, but data includes Title Case values (`People`, `Science`, `Society`).
  3. **Non-English Omission**: Non-English files rely exclusively on the top-level `theme` string (e.g. `theme: "travel"`, `theme: "social"`, `theme: "jobs"`) and do not implement `domain`.

---

## 4. Target Terms Search Findings

We executed an exact case-insensitive search across all entries in all 14 languages for target values: `"travelling"`, `"relocation"`, `"exam_preparation"`, and `"professional"` in `domain`, `theme`, `sub_theme`, and `tags`.

### 4.1 Detailed Search Results

1. **`"travelling"`** (spelled with double 'l'):
   - `domain`: **0 occurrences** (Note: `"TRAVEL"` is present as uppercase domain in EN).
   - `theme`: **0 occurrences** (Note: `"travel"` is present as theme in EN, EL, FR, IT, RU).
   - `sub_theme`: **0 occurrences**.
   - `tags`: **0 occurrences**.
   - **Result**: `"travelling"` does not exist anywhere as a categorization value.

2. **`"relocation"`**:
   - `domain`: **0 occurrences**.
   - `theme`: **0 occurrences**.
   - `sub_theme`: **0 occurrences**.
   - `tags`: **0 occurrences**.
   - **Result**: `"relocation"` does not exist anywhere as a categorization value.

3. **`"exam_preparation"`**:
   - `domain`: **0 occurrences**.
   - `theme`: **0 occurrences**.
   - `sub_theme`: **0 occurrences**.
   - `tags`: **0 occurrences**.
   - **Result**: `"exam_preparation"` does not exist anywhere as a categorization value.

4. **`"professional"`**:
   - `domain`: **0 occurrences**.
   - `theme`: **0 occurrences**.
   - `sub_theme`: **0 occurrences**.
   - `tags`: **0 occurrences**.
   - *(Boundary Note: `"Professional_Roles"` appears as a `sub_subcategory` in 1 English file `vocabulary/en/B1/Nouns/Society/Work/Professional_Roles.js`, and "professional" / "professionale" appear as dictionary words/definitions, but not as domain/theme/sub_theme/tags).*

5. **`tags` Field Status**:
   - Across all 10,843 vocabulary entries in 14 languages, **0 entries contain a `tags` array** or property.

---

## 5. Entry Field Population Rates & Dictionary UI Rules

To inform the Dictionary UI component design and prevent runtime errors, the table below summarizes field population rates per language:

| Language Code | Total Entries | Audio % | Image % | Emoji % | Definitions % | Examples % (Nested / Top-level) | Related Forms % |
|---|---|---|---|---|---|---|---|
| `ba` | 398 | 0.0% (0) | 0.0% (0) | 100.0% (398) | 97.2% (387) | 78.1% (311 nested / 0 top) | 0.0% (0) |
| `br` | 398 | 0.0% (0) | 0.0% (0) | 100.0% (398) | 97.2% (387) | 78.1% (311 nested / 0 top) | 0.0% (0) |
| `cv` | 5 | 0.0% (0) | 0.0% (0) | 100.0% (5) | 100.0% (5) | 0.0% (0 nested / 0 top) | 0.0% (0) |
| `de` | 211 | 0.0% (0) | 0.0% (0) | 100.0% (211) | 94.8% (200) | 87.2% (184 nested / 0 top) | 0.0% (0) |
| `el` | 549 | 0.0% (0) | 0.0% (0) | 99.6% (547) | 96.5% (530) | 62.7% (342 nested / 2 top) | 0.0% (0) |
| `en` | 3,588 | 0.0% (0) | 0.0% (0) | 74.9% (2,689) | 99.9% (3,586) | 99.9% (3,585 nested / 0 top) | 0.0% (0) |
| `es` | 160 | 0.0% (0) | 0.0% (0) | 100.0% (160) | 100.0% (160) | 83.1% (133 nested / 0 top) | 0.0% (0) |
| `fr` | 1,379 | 0.0% (0) | 0.0% (0) | 41.8% (577) | 98.5% (1,359) | 95.8% (1,319 nested / 2 top) | 0.0% (0) |
| `hy` | 398 | 0.0% (0) | 0.0% (0) | 100.0% (398) | 97.2% (387) | 78.1% (311 nested / 0 top) | 0.0% (0) |
| `it` | 1,368 | 0.0% (0) | 0.0% (0) | 42.1% (576) | 98.7% (1,350) | 96.0% (1,311 nested / 2 top) | 0.0% (0) |
| `ka` | 398 | 0.0% (0) | 0.0% (0) | 100.0% (398) | 97.2% (387) | 78.1% (311 nested / 0 top) | 0.0% (0) |
| `pt` | 209 | 0.0% (0) | 0.0% (0) | 100.0% (209) | 94.7% (198) | 87.1% (182 nested / 0 top) | 0.0% (0) |
| `ru` | 1,384 | 0.0% (0) | 0.0% (0) | 42.8% (592) | 99.9% (1,382) | 90.3% (1,248 nested / 2 top) | 0.0% (0) |
| `tt` | 398 | 0.0% (0) | 0.0% (0) | 100.0% (398) | 97.2% (387) | 78.1% (311 nested / 0 top) | 0.0% (0) |

### 5.2 Field-by-Field Dictionary UI Rules

1. **`audio` (0.0% populated static assets)**:
   - **UI Rule**: **MUST TREAT AS OPTIONAL / RARE**.
   - **Implication**: Do not rely on static audio file URLs (`audio` / `audio_url`). The Dictionary UI should integrate browser-native Text-To-Speech (`window.speechSynthesis`) for entry audio pronunciation playback.

2. **`image` (0.0% populated static media URLs)**:
   - **UI Rule**: **MUST TREAT AS OPTIONAL / RARE**.
   - **Implication**: Do not build entry cards that require image thumbnail assets. Instead, use the **`emoji`** field as the visual emblem for dictionary items (available in 41.8% – 100% of entries depending on language), with a clean CSS letter badge fallback.

3. **`definitions` (94.7% – 100.0% populated)**:
   - **UI Rule**: **RELIABLE CORE FIELD**.
   - **Implication**: Almost every entry possesses definitions. The UI should safely extract definition strings by checking both array format (`definitions[i].text` or `definitions[i]`) and string format (`definition`). Fallback placeholder text (`"Definition unavailable"`) should be provided for unpopulated entries (~1–5%).

4. **`examples` (62.7% – 99.9% overall coverage)**:
   - **UI Rule**: **NESTED STRUCTURE REQUIRED**.
   - **Crucial Finding**: Top-level `examples` array is populated in only 8 entries across the entire repository (2 in EL, 2 in FR, 2 in IT, 2 in RU). Example sentences are predominantly nested inside the `definitions` array items (`definitions[i].examples[]`).
   - **Implication**: The Dictionary UI example sentence loader must inspect both `entry.examples` AND iterate `entry.definitions[i].examples`.

5. **`related_forms` (0.0% populated as exact key name)**:
   - **UI Rule**: **MUST TREAT AS OPTIONAL / ABSENT**.
   - **Implication**: Do not query a top-level `related_forms` property. To display morphological or grammatical variants, the UI should dynamically compose related forms from POS-specific attributes: `synonyms`, `antonyms`, `plural`, `feminine`, `neuter`, `v2`/`v3`/`v4` verb forms, `comparative`/`superlative`, and `collocations`.

---

## 6. Key Takeaways & Architectural Recommendations for Dictionary UI

1. **Unified Cross-Language Filtering**:
   - Provide domain/theme filtering that accommodates both English (`domain` + `theme`) and non-English languages (top-level `theme`).
2. **Defensive Data Handling**:
   - Always use optional chaining (`entry?.definitions?.[0]?.text`, `entry?.emoji`).
3. **Media Fallback Stack**:
   - Icon / Graphic: `entry.emoji` $\rightarrow$ CSS First-Letter Glyph.
   - Audio: SpeechSynthesis API fallback.
   - Examples: `entry.definitions[i].examples` $\rightarrow$ `entry.examples`.

# Reconciling Grammar Sources: `reference-grammar/` vs `COSYtools`

This document provides a factual, evidence-based audit analyzing the contents of `reference-grammar/`, evaluating its overlap with `COSYtools`, and presenting three explicit architectural options for reconciliation.

---

## 1. Inventory & Content Shape of `reference-grammar/`

### 1.1 File Counts & Language Breakdown
`reference-grammar/` contains **286 files across 13 language folders**.

| Language Folder | Code | File Count | Primary Contents |
|---|---|---|---|
| **English** | `en` | 94 | 52 interactive unit lessons (`lessons/*.json`), 15 verb pattern files (`verb-patterns/*.json`), 1 standalone CCQ file (`ccq/*.json`), 13 structural JSON files, 13 HTML pages |
| **French** | `fr` | 21 | 13 structural JSON files (`morphology/`, `syntax/`, `phonology/`, `particles/`), 8 HTML reference pages |
| **Italian** | `it` | 21 | 13 structural JSON files (`morphology/`, `syntax/`, `phonology/`, `particles/`), 8 HTML reference pages |
| **German** | `de` | 19 | 13 structural JSON files, 6 HTML reference pages |
| **Spanish** | `es` | 19 | 13 structural JSON files, 6 HTML reference pages |
| **Russian** | `ru` | 18 | 13 structural JSON files, 5 HTML reference pages |
| **Greek** | `el` | 18 | 13 structural JSON files, 5 HTML reference pages |
| **Portuguese** | `pt` | 17 | 13 structural JSON files, 4 HTML reference pages |
| **Bashkir** | `ba` | 14 | 14 structural JSON files (`morphology/`, `syntax/`, `phonology/`, `particles/`) |
| **Breton** | `br` | 14 | 14 structural JSON files |
| **Armenian** | `hy` | 14 | 14 structural JSON files |
| **Georgian** | `ka` | 14 | 14 structural JSON files |
| **Tatar** | `tt` | 14 | 14 structural JSON files |

### 1.2 Content Shape & Concrete Examples

The Concept Check practice engine (`practice/types/concept-check/concept-check.js`) specifically loads JSON files under `reference-grammar/{lang}/lessons/{unit}.json` and `reference-grammar/{lang}/ccq/{ref}.json`.

#### Concrete Example 1: Lesson Unit (`reference-grammar/en/lessons/to-be.json`)
The lesson files follow a standardized 8-stage communicative CELTA schema comprising lead-in context, Concept Checking Questions (CCQs), form explanation, pronunciation notes, controlled practice questions, freer practice links, and production tasks:

```json
{
  "unitId": "EN-A1-TO-BE-01",
  "title": "The Verb 'To Be'",
  "level": "A1",
  "language": "en",
  "leadIn": {
    "title": "Lead-In & Context: The Verb 'To Be'",
    "content": "Meet three new people: Julia, Tanya, and John..."
  },
  "meaningCheck": [
    {
      "question": "\"Julia is a teacher.\" — Is Julia a teacher now?",
      "targetStructure": "to-be",
      "options": ["Yes", "No, only in the past", "We can't tell"],
      "correctOptionIndex": 0,
      "explanation": "Yes · 'Is' describes a current state or job in the present simple."
    }
  ],
  "form": {
    "title": "Form & Structure: The Verb 'To Be'",
    "content": "I am (I'm). He/She/It is (he's, she's, it's)..."
  },
  "controlledPractice": [
    {
      "question": "'They ___ doctors.'",
      "targetStructure": "to-be",
      "options": ["is", "am", "are"],
      "correctOptionIndex": 2,
      "explanation": "They pairs with 'are': They are doctors."
    }
  ]
}
```

#### Concrete Example 2: Standalone CCQ (`reference-grammar/en/ccq/used-to-past-now.json`)
Standalone CCQ files contain targeted binary or multiple-choice verification prompts:

```json
{
  "question": "Does the person still do this now?",
  "targetStructure": "used-to",
  "options": ["No", "Yes"],
  "correctOptionIndex": 0,
  "explanation": "'Used to' describes a past state or habit that is no longer true now."
}
```

#### Summary of Content Types in `reference-grammar/`:
1. **Interactive CCQ Lesson Units** (`en/lessons/`): Formatted 8-stage CELTA lesson plans containing lead-ins, CCQs, form rules, and controlled/freer practice items used directly by `practice/types/concept-check/`.
2. **Verb Pattern References** (`en/verb-patterns/`): JSON objects documenting irregular verb principal parts and usage examples.
3. **Structural Category Files** (`{lang}/morphology/`, `syntax/`, `phonology/`, `particles/`): JSON files detailing morphological paradigms, sentence word order rules, stress, and intonation schemas across all 13 languages.
4. **HTML Reference Articles** (`{lang}/*.html`, `{lang}/morphology/*.html`): Standalone reference pages providing prose explanations of grammar rules.

---

## 2. Overlap Analysis with COSYtools

### 2.1 COSYtools Tool Inventory
`COSYtools` consists of 12 standalone micro-apps focused on automated algorithmic drill and lookup engines:
1. **EN Prepositions Engine** (`en-verb-prep`): Dependent prepositions & phrasal verb practice.
2. **FR Conjugeur** (`fr-conjugeur`): French verb conjugation tables and drill engine.
3. **FR Genre** (`fr-genre`): French noun gender classification & ending rules.
4. **FR Régime** (`fr-regime`): French verb/noun/adjective prepositional regime finder.
5. **IT Coniugatore** (`it-coniugatore`): Italian verb conjugation database.
6. **IT Genere** (`it-genere`): Italian noun gender classification engine.
7. **IT Reggenza** (`it-reggenza`): Italian prepositional regime engine.
8. **RU Спряжение** (`ru-spryazhenie`): Russian verb conjugation & aspect pairs.
9. **RU Род & Падежи** (`ru-rod-padezhi`): Russian noun gender & 6-case declension engine.
10. **EL Κλίση** (`el-klisi-rimaton`): Greek verb conjugation reference engine.
11. **EL Γένος & Πτώσεις** (`el-genos-ptoseis`): Greek noun gender & case inflection reference.
12. **EL Σύνταξη** (`el-syntaxi`): Greek verb & noun syntax government engine.

### 2.2 Overlap Evaluation
- **Zero Content Overlap for CCQs (`lessons/` & `ccq/`)**: `COSYtools` provides zero concept checking question (CCQ) functionality or communicative lesson plans. CCQs test *semantic understanding* (e.g. "Is she in Paris now?"), whereas `COSYtools` tests *morphological inflection* (e.g. conjugating *être* or declaiming Russian genitive endings).
- **Domain Overlap for Structural Reference Files**: The static JSON/HTML files under `reference-grammar/{lang}/morphology/` (e.g., `ru-nouns-gender.html`, `fr-verbes-er.html`, `el/morphology/cases.json`) cover the same grammatical domains (noun gender, verb conjugations, prepositional government) as `COSYtools`. However, `reference-grammar/` provides static text/rules, while `COSYtools` provides dynamic interactive engines.

---

## 3. Reconciliation Options

Below are three explicit architectural options detailing what each would cost and break:

### Option A: Leave `reference-grammar/` As-Is Permanently
Treat `reference-grammar/` as a `COSYlanguages`-specific content store for Concept Check Questions (CCQs) and lesson structures that fall outside `COSYtools'` scope (which is focused on verb/gender/preposition drills).

* **What it costs:**
  - Zero development or migration cost.
  - Zero refactoring of `concept-check.js` or data paths.
* **What it breaks:**
  - Documentation imprecision remains if existing docs incorrectly imply `COSYtools` is the sole source for all grammar content.
  - Keeps static grammar reference files in `COSYlanguages` alongside `COSYtools'` companion tools.

### Option B: Migrate `reference-grammar/` Content into `COSYtools`
Move all lesson JSONs and CCQ files from `reference-grammar/` into `COSYtools` as a new micro-app (e.g. `COSYtools/ccq-engine`), and update `concept-check.js` to fetch content remotely from `https://cosylanguages.github.io/COSYtools/data/ccq/`.

* **What it costs:**
  - High engineering cost: Requires creating a new JSON deployment pipeline in `COSYtools`, writing fetch-and-fallback loaders in `concept-check.js`, and migrating 286 files across 13 languages.
  - Requires cross-repository synchronization and release coordination.
* **What it breaks:**
  - Breaks offline execution of `practice/types/concept-check/index.html` if network access to `COSYtools` is unavailable and local fallbacks are omitted.
  - Breaks existing relative file paths in `concept-check.js` (`reference-grammar/{lang}/lessons/{unit}.json`).

### Option C: Retain `reference-grammar/` and Update Ecosystem Documentation
Keep `reference-grammar/` in `COSYlanguages` in its current location, but update all top-level documentation (`README.md`, `docs/ECOSYSTEM_ARCHITECTURE.md`, `project/docs/CONTENT_ARCHITECTURE.md`) to explicitly distinguish the two separate grammar mechanisms:
1. `reference-grammar/`: Static CELTA lesson plans and Concept Check Questions (CCQs) hosted directly within `COSYlanguages`.
2. `COSYtools`: Standalone interactive inflection, conjugation, gender, and preposition engines.

* **What it costs:**
  - Low documentation maintenance cost (updating Markdown descriptions in `README.md` and ecosystem architecture docs).
  - Zero code changes or risk of breaking practice engines.
* **What it breaks:**
  - Nothing.

# Vocabulary Alignment & Master Canon Cross-Check Notes

**Location:** `COSYgames/VOCAB_ALIGNMENT_NOTES.md`
**Reference Canon:** `vocabulary/_canonical/en/A0-A1_master.json` (1,298 unique canonical English words)
**Date:** September 2026

---

## 1. Executive Summary & Audit Methodology

This document presents the detailed cross-check of game content in `COSYgames` against the canonical A0–A1 English vocabulary master database (`vocabulary/_canonical/en/A0-A1_master.json`).

> **Note on Gender Games:** The standalone minigame *What Gender Is It?* (`what_gender_is_it/`) and its corresponding dataset (`COSYgames/data/gender/`) have been removed from `COSYgames`. Noun gender practice is served by dedicated COSYtools reference engines under `apps/` (`fr-genre`, `it-genere`, `ru-rod-padezhi`, `el-genos-ptoseis`). The original Gender A1 audit results are retained below for historical reference.

The audit covers two primary datasets:
1. **Gender A1 Dataset (Legacy Audit):** 119 core noun concepts previously used in the *What Gender Is It?* minigame for gendered target languages (FR, ES, IT, DE, RU, EL, BR).
2. **English Game Data** (`COSYgames/data/en/game_data.js`): All categories and level tiers across *Action Hero*, *Fluency Flow*, *Battle of Wits*, *Identity Mystery*, and *Word Linker*.

### Key Metrics
- **Gender A1 Exact Match Rate:** 104 / 119 concepts (**87.4%**) match the canonical A1 master list directly.
- **Action Hero Starter Match Rate:** 18 / 18 words (**100%**) match the canonical A1 master list directly.
- **Total Flagged A1-Tier Non-Canonical Items:**
  - 13 missing single-word concepts in Gender A1 dataset.
  - 2 compound concepts in Gender A1 dataset whose component words exist in canon.
  - 4 non-canonical A1 words in *Fluency Flow* starter prompts.
  - 3 non-canonical words in *Battle of Wits* options.

---

## 2. Gender A1 Audit (Legacy Reference)

**Total Concepts Audited:** 119
**Exact Canon Matches:** 104
**Flagged Mismatches:** 15

### A. Compound Concepts (Component Words Exist in A1 Canon) - Count: 2
These 2 multi-word concepts are composed of words already present in `A0-A1_master.json`, but the combined compound noun is not indexed as a single key in the canonical list.

| Index | Concept | Constituent Words in A1 Canon | Recommendation |
|---|---|---|---|
| 73 | `Dining room` | `dining` (A1), `room` (A1) | Optionally add compound entry `"dining room"` to canon |
| 103 | `Washing machine` | `washing` (A1), `machine` (A1) | Optionally add compound entry `"washing machine"` to canon |

### B. Single-Word Concepts Missing from A1 Canon Master - Count: 13
These 13 English words appeared in the A1 gender dataset, but do not appear in `vocabulary/_canonical/en/A0-A1_master.json`.

| Index | Concept Word | CEFR / Pedagogical Category | Recommendation |
|---|---|---|---|
| 27 | `Story` | A1/A2 General | Add to A1 Canon (essential starter vocabulary) |
| 39 | `Way` | A1/A2 General / Direction | Add to A1 Canon (fundamental daily word) |
| 53 | `Pocket` | A2 Clothes / Accessories | Relevel concept to A2 or add to A1 canon |
| 62 | `Toaster` | A2 House & Kitchen | Relevel concept to A2 |
| 68 | `Sink` | A2 House & Furniture | Relevel concept to A2 or add to A1 canon |
| 74 | `Tray` | A2 Food & Dining | Relevel concept to A2 |
| 75 | `Broccoli` | A2 Food & Vegetables | Relevel concept to A2 |
| 83 | `Occupation` | A2/B1 Work & Professions | Relevel concept to A2/B1 |
| 87 | `Traffic` | A2 Transport & City | Relevel concept to A2 |
| 90 | `Furniture` | A2 House & Living | Relevel concept to A2 or add to A1 canon |
| 95 | `Gate` | A2 House & Exterior | Relevel concept to A2 |
| 112 | `Calendar` | A2 Time & Office | Relevel concept to A2 |
| 114 | `Commute` | B1 Travel & Work | Relevel concept to B1 |

---

## 3. English Game Data Audit (`COSYgames/data/en/game_data.js`)

### A. Action Hero (`action.starter`) - Count: 18 words
**Match Rate:** 18 / 18 (**100%**)
All 18 Starter-level action hero vocabulary words (`Cat`, `Dog`, `House`, `Car`, `Book`, `Water`, `Sun`, `Moon`, `Tree`, `Phone`, `Door`, `Chair`, `Bed`, `Food`, `Fish`, `Apple`, `Pen`, `Bag`) are 100% present in `A0-A1_master.json`.

### B. Fluency Flow (`fluency`) - Starter Tier Prompts
**Total Starter Prompts:** 5
**Flagged Words Missing from A1 Canon Master:** 4

| Prompt | Flagged Words | Category & Notes | Recommendation |
|---|---|---|---|
| `Your morning routine ☕` | `routine` | A2 Daily Life | Relevel prompt to A2 or add `routine` to A1 canon |
| `A childhood memory 🧸` | `childhood`, `memory` | A2 Personal History | Relevel prompt to A2 |
| `Your favourite season and why 🍂` | `favourite` | Variant Spelling | US spelling `favorite` is in A1 canon; accept UK `favourite` |
| `Your pet or favourite animal 🐶` | `pet` | A1/A2 Animals | Add `pet` to A1 canon |
| `What you like to do on rainy days 🌧️` | `days` | Plural Form | Singular `day` is in A1 canon |

### C. Battle of Wits (`battle`) - Unleveled Option Pairs
**Total Pairs:** 14
**Flagged Words Missing from A1 Canon Master:** 3

| Option Pair | Flagged Word | Category & Notes | Recommendation |
|---|---|---|---|
| `Morning person 🌅` vs `Night owl 🦉` | `owl` | A2 Animal | Keep in Battle of Wits as fun conversation prompt |
| `Sweet 🍰` vs `Savoury 🧀` | `savoury` | A2 Taste / UK Spelling | Keep in Battle of Wits |
| `Paper books 📖` vs `E-readers 📱` | `e-readers` | B1 Technology | Keep in Battle of Wits |

### D. Identity Mystery (`identity`) - Elementary Tier (A2)
**Total Elementary Prompts:** 5
**Flagged Words Missing from A1 Canon Master:** 8
*(Note: Elementary level targets A2 learners, so A2+ vocabulary is expected).*
- `A firefighter`: `helmet`, `extinguish`
- `A librarian`: `librarian`, `manage`
- `A musician`: `musician`, `instruments`
- `A veterinarian`: `veterinarian`, `injured`

### E. Word Linker (`wordlinker`) - Unleveled Puzzle Sets
- **Proper Nouns / Named Entities:** `Paris`, `Rome`, `Tokyo`, `Amazon`, `Shakespeare`, `Dickens`, `Picasso`, `Austen` (Proper nouns are intentionally excluded from the master vocabulary canon).
- **Specialized / Higher-Level Terms:** `melancholy`, `twilight`, `surgeon`, `professions`.

---

## 4. Summary & Action Items for Content Editors

1. **Add to A1 Canon Master (`vocabulary/_canonical/en/A0-A1_master.json`):**
   - Essential daily words: `story`, `way`, `pet`.
   - Compound entries: `"dining room"`, `"washing machine"`.
   - Add UK spelling variant alias `"favourite"` alongside `"favorite"`.

2. **Game Content Preserved:**
   - All active minigames maintain full functionality across `COSYgames`. Gender practice is provided in COSYtools reference engines.

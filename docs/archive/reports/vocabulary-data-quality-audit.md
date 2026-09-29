# Vocabulary Data Quality Audit Report (Pre-Migration Analysis)

**Date:** September 2026
**Auditor:** Jules (COSYlanguages Engineering)
**Status:** Audit-Only Pass (Zero Functional Changes / Zero File Deletions)
**Scope:** Re-opened and inspected all **12,069 Category (a)** local entries (present in `COSYlanguages` but missing from `COSYdata`) ahead of dataset migration.

---

## 1. Executive Summary

Before migrating unmigrated local vocabulary and exercise entries from `COSYlanguages` into `COSYdata`, this quality pass audited all **12,069 Category (a)** entries across all 14 supported languages (`ba`, `br`, `cv`, `de`, `el`, `en`, `es`, `fr`, `hy`, `it`, `ka`, `pt`, `ru`, `tt`).

### Key Quality Findings
1. **Total Category (a) Entries Inspected:** **12,069 entries**.
2. **Total Flagged Entries:** **4,905 entries** (40.6% of Category (a) entries contain at least one quality issue).
3. **Issue Type Breakdown:**
   - **Issue Type 1 — Empty / Whitespace Fields:** **745 entries** have an empty/whitespace word/term field OR all sample/definition/example text fields are empty/whitespace.
   - **Issue Type 2 — In-File Duplicates:** **3,980 entries** share identical `word` + identical `form` with another entry in the same local file (e.g. repeated prompts or duplicate entries in `fluency.js`, `quotes.js`, `debates.js`).
   - **Issue Type 3 — Template / Placeholder Artifacts:** **967 entries** contain unresolved developer placeholders or template strings (e.g. literal `"TODO"`, `"undefined"`, `"{{"`, `"}}"`, or `"[object Object]"`).

---

## 2. Summary Quality Audit Table Across 14 Languages

| Language Code | Language Name | Category (a) Total | Total Flagged Entries | Empty/Whitespace Fields | In-File Duplicates | Placeholder Artifacts |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **BA** | Bashkir | 630 | 350 | 87 | 304 | 35 |
| **BR** | Breton | 639 | 344 | 87 | 298 | 35 |
| **CV** | Chuvash | 13 | 0 | 0 | 0 | 0 |
| **DE** | German | 530 | 352 | 11 | 306 | 35 |
| **EL** | Greek | 1,023 | 582 | 180 | 361 | 172 |
| **EN** | English | 1,059 | 0 | 0 | 0 | 0 |
| **ES** | Spanish | 429 | 265 | 0 | 222 | 53 |
| **FR** | French | 1,788 | 568 | 88 | 358 | 166 |
| **HY** | Armenian | 625 | 346 | 87 | 300 | 35 |
| **IT** | Italian | 1,747 | 504 | 53 | 310 | 149 |
| **KA** | Georgian | 628 | 344 | 87 | 298 | 35 |
| **PT** | Portuguese | 515 | 340 | 2 | 300 | 48 |
| **RU** | Russian | 1,817 | 560 | 43 | 358 | 169 |
| **TT** | Tatar | 626 | 350 | 87 | 304 | 35 |
| **TOTAL** | **All 14 Languages** | **12,069** | **4,905** | **745** | **3,980** | **967** |

---

## 3. Detailed Quality Findings Broken Down by Language and File

### BA (Bashkir) — 315 Flagged Entries out of 630 Category (a) Entries

#### File: `vocabulary/ba/B1/locations.js` (11 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Австралия` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Япония` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ҡытай` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Бразилия` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Индия` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Токио` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Сидней` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Пекин` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Рио-де-Жанейро` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Каир` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Дели` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/ba/B2/fluency.js` (22 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |

#### File: `vocabulary/ba/B2/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/ba/C1/fluency.js` (20 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |

#### File: `vocabulary/ba/C1/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/ba/C2/adjectives.js` (118 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `фәндәр-ара` | adjective | `inSameFileDuplicate` | Duplicate term 'фәндәр-ара' (adjective) appears 2 times in file |
| C2 | `герменевтик` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтик' (adjective) appears 2 times in file |
| C2 | `тавтологик` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологик' (adjective) appears 2 times in file |
| C2 | `күпмәғәнәле` | adjective | `inSameFileDuplicate` | Duplicate term 'күпмәғәнәле' (adjective) appears 2 times in file |
| C2 | `эвристик` | adjective | `inSameFileDuplicate` | Duplicate term 'эвристик' (adjective) appears 2 times in file |
| C2 | `постколониаль` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониаль' (adjective) appears 2 times in file |
| C2 | `күпполярлы` | adjective | `inSameFileDuplicate` | Duplicate term 'күпполярлы' (adjective) appears 2 times in file |
| C2 | `космополитик` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитик' (adjective) appears 2 times in file |
| C2 | `нарциссик` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссик' (adjective) appears 2 times in file |
| C2 | `гетеродокс` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродокс' (adjective) appears 2 times in file |
| C2 | `имманент` | adjective | `inSameFileDuplicate` | Duplicate term 'имманент' (adjective) appears 2 times in file |
| C2 | `киҫкен` | adjective | `inSameFileDuplicate` | Duplicate term 'киҫкен' (adjective) appears 2 times in file |
| C2 | `аңлайышһыҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'аңлайышһыҙ' (adjective) appears 2 times in file |
| C2 | `анахроник` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроник' (adjective) appears 2 times in file |
| C2 | `антитетик` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетик' (adjective) appears 2 times in file |
| C2 | `арканлы` | adjective | `inSameFileDuplicate` | Duplicate term 'арканлы' (adjective) appears 2 times in file |
| C2 | `атипик` | adjective | `inSameFileDuplicate` | Duplicate term 'атипик' (adjective) appears 2 times in file |
| C2 | `бинар` | adjective | `inSameFileDuplicate` | Duplicate term 'бинар' (adjective) appears 2 times in file |
| C2 | `категорик` | adjective | `inSameFileDuplicate` | Duplicate term 'категорик' (adjective) appears 2 times in file |
| C2 | `һаҡ` | adjective | `inSameFileDuplicate` | Duplicate term 'һаҡ' (adjective) appears 2 times in file |
| C2 | `йәшерен` | adjective | `inSameFileDuplicate` | Duplicate term 'йәшерен' (adjective) appears 2 times in file |
| C2 | `диалектик` | adjective | `inSameFileDuplicate` | Duplicate term 'диалектик' (adjective) appears 2 times in file |
| C2 | `диффуз` | adjective | `inSameFileDuplicate` | Duplicate term 'диффуз' (adjective) appears 2 times in file |
| C2 | `тотоп булмай торған` | adjective | `inSameFileDuplicate` | Duplicate term 'тотоп булмай торған' (adjective) appears 2 times in file |
| C2 | `эзотерик` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерик' (adjective) appears 2 times in file |
| C2 | `хаталы` | adjective | `inSameFileDuplicate` | Duplicate term 'хаталы' (adjective) appears 2 times in file |
| C2 | `үҙгәрмәҫ` | adjective | `inSameFileDuplicate` | Duplicate term 'үҙгәрмәҫ' (adjective) appears 2 times in file |
| C2 | `тарафһыҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'тарафһыҙ' (adjective) appears 2 times in file |
| C2 | `өҫтәмә` | adjective | `inSameFileDuplicate` | Duplicate term 'өҫтәмә' (adjective) appears 2 times in file |
| C2 | `хас булған` | adjective | `inSameFileDuplicate` | Duplicate term 'хас булған' (adjective) appears 2 times in file |
| C2 | `ҡабатланмаҫ` | adjective | `inSameFileDuplicate` | Duplicate term 'ҡабатланмаҫ' (adjective) appears 2 times in file |
| C2 | `хәйләкәр` | adjective | `inSameFileDuplicate` | Duplicate term 'хәйләкәр' (adjective) appears 2 times in file |
| C2 | `килешмәҫ` | adjective | `inSameFileDuplicate` | Duplicate term 'килешмәҫ' (adjective) appears 2 times in file |
| C2 | `лиминаль` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминаль' (adjective) appears 2 times in file |
| C2 | `төрлө-төрлө` | adjective | `inSameFileDuplicate` | Duplicate term 'төрлө-төрлө' (adjective) appears 2 times in file |
| C2 | `томанлы` | adjective | `inSameFileDuplicate` | Duplicate term 'томанлы' (adjective) appears 2 times in file |
| C2 | `норматив` | adjective | `inSameFileDuplicate` | Duplicate term 'норматив' (adjective) appears 2 times in file |
| C2 | `төҫмәрле` | adjective | `inSameFileDuplicate` | Duplicate term 'төҫмәрле' (adjective) appears 2 times in file |
| C2 | `туры булмаған` | adjective | `inSameFileDuplicate` | Duplicate term 'туры булмаған' (adjective) appears 2 times in file |
| C2 | `асыҡ булмаған` | adjective | `inSameFileDuplicate` | Duplicate term 'асыҡ булмаған' (adjective) appears 2 times in file |
| C2 | `ялған` | adjective | `inSameFileDuplicate` | Duplicate term 'ялған' (adjective) appears 2 times in file |
| C2 | `парадоксаль` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксаль' (adjective) appears 2 times in file |
| C2 | `киң таралған` | adjective | `inSameFileDuplicate` | Duplicate term 'киң таралған' (adjective) appears 2 times in file |
| C2 | `поляризациялаусы` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризациялаусы' (adjective) appears 2 times in file |
| C2 | `тотрыҡһыҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'тотрыҡһыҙ' (adjective) appears 2 times in file |
| C2 | `прескриптив` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптив' (adjective) appears 2 times in file |
| C2 | `һуҙылған` | adjective | `inSameFileDuplicate` | Duplicate term 'һуҙылған' (adjective) appears 2 times in file |
| C2 | `редуктив` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктив' (adjective) appears 2 times in file |
| C2 | `нигеҙ һалыусы` | adjective | `inSameFileDuplicate` | Duplicate term 'нигеҙ һалыусы' (adjective) appears 2 times in file |
| C2 | `ялған сылтаулы` | adjective | `inSameFileDuplicate` | Duplicate term 'ялған сылтаулы' (adjective) appears 2 times in file |
| C2 | `уйҙырма` | adjective | `inSameFileDuplicate` | Duplicate term 'уйҙырма' (adjective) appears 2 times in file |
| C2 | `җимергеч` | adjective | `inSameFileDuplicate` | Duplicate term 'җимергеч' (adjective) appears 2 times in file |
| C2 | `әйтелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'әйтелмәгән' (adjective) appears 2 times in file |
| C2 | `үткенсе` | adjective | `inSameFileDuplicate` | Duplicate term 'үткенсе' (adjective) appears 2 times in file |
| C2 | `һәрҡайҙағы` | adjective | `inSameFileDuplicate` | Duplicate term 'һәрҡайҙағы' (adjective) appears 2 times in file |
| C2 | `бермәғәнәле` | adjective | `inSameFileDuplicate` | Duplicate term 'бермәғәнәле' (adjective) appears 2 times in file |
| C2 | `күрелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'күрелмәгән' (adjective) appears 2 times in file |
| C2 | `нигеҙһеҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'нигеҙһеҙ' (adjective) appears 2 times in file |
| C2 | `айҡашлы` | adjective | `inSameFileDuplicate` | Duplicate term 'айҡашлы' (adjective) appears 2 times in file |
| C2 | `фәндәр-ара` | adjective | `inSameFileDuplicate` | Duplicate term 'фәндәр-ара' (adjective) appears 2 times in file |
| C2 | `герменевтик` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтик' (adjective) appears 2 times in file |
| C2 | `тавтологик` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологик' (adjective) appears 2 times in file |
| C2 | `күпмәғәнәле` | adjective | `inSameFileDuplicate` | Duplicate term 'күпмәғәнәле' (adjective) appears 2 times in file |
| C2 | `эвристик` | adjective | `inSameFileDuplicate` | Duplicate term 'эвристик' (adjective) appears 2 times in file |
| C2 | `постколониаль` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониаль' (adjective) appears 2 times in file |
| C2 | `күпполярлы` | adjective | `inSameFileDuplicate` | Duplicate term 'күпполярлы' (adjective) appears 2 times in file |
| C2 | `космополитик` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитик' (adjective) appears 2 times in file |
| C2 | `нарциссик` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссик' (adjective) appears 2 times in file |
| C2 | `гетеродокс` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродокс' (adjective) appears 2 times in file |
| C2 | `имманент` | adjective | `inSameFileDuplicate` | Duplicate term 'имманент' (adjective) appears 2 times in file |
| C2 | `киҫкен` | adjective | `inSameFileDuplicate` | Duplicate term 'киҫкен' (adjective) appears 2 times in file |
| C2 | `аңлайышһыҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'аңлайышһыҙ' (adjective) appears 2 times in file |
| C2 | `анахроник` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроник' (adjective) appears 2 times in file |
| C2 | `антитетик` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетик' (adjective) appears 2 times in file |
| C2 | `арканлы` | adjective | `inSameFileDuplicate` | Duplicate term 'арканлы' (adjective) appears 2 times in file |
| C2 | `атипик` | adjective | `inSameFileDuplicate` | Duplicate term 'атипик' (adjective) appears 2 times in file |
| C2 | `бинар` | adjective | `inSameFileDuplicate` | Duplicate term 'бинар' (adjective) appears 2 times in file |
| C2 | `категорик` | adjective | `inSameFileDuplicate` | Duplicate term 'категорик' (adjective) appears 2 times in file |
| C2 | `һаҡ` | adjective | `inSameFileDuplicate` | Duplicate term 'һаҡ' (adjective) appears 2 times in file |
| C2 | `йәшерен` | adjective | `inSameFileDuplicate` | Duplicate term 'йәшерен' (adjective) appears 2 times in file |
| C2 | `диалектик` | adjective | `inSameFileDuplicate` | Duplicate term 'диалектик' (adjective) appears 2 times in file |
| C2 | `диффуз` | adjective | `inSameFileDuplicate` | Duplicate term 'диффуз' (adjective) appears 2 times in file |
| C2 | `тотоп булмай торған` | adjective | `inSameFileDuplicate` | Duplicate term 'тотоп булмай торған' (adjective) appears 2 times in file |
| C2 | `эзотерик` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерик' (adjective) appears 2 times in file |
| C2 | `хаталы` | adjective | `inSameFileDuplicate` | Duplicate term 'хаталы' (adjective) appears 2 times in file |
| C2 | `үҙгәрмәҫ` | adjective | `inSameFileDuplicate` | Duplicate term 'үҙгәрмәҫ' (adjective) appears 2 times in file |
| C2 | `тарафһыҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'тарафһыҙ' (adjective) appears 2 times in file |
| C2 | `өҫтәмә` | adjective | `inSameFileDuplicate` | Duplicate term 'өҫтәмә' (adjective) appears 2 times in file |
| C2 | `хас булған` | adjective | `inSameFileDuplicate` | Duplicate term 'хас булған' (adjective) appears 2 times in file |
| C2 | `ҡабатланмаҫ` | adjective | `inSameFileDuplicate` | Duplicate term 'ҡабатланмаҫ' (adjective) appears 2 times in file |
| C2 | `хәйләкәр` | adjective | `inSameFileDuplicate` | Duplicate term 'хәйләкәр' (adjective) appears 2 times in file |
| C2 | `килешмәҫ` | adjective | `inSameFileDuplicate` | Duplicate term 'килешмәҫ' (adjective) appears 2 times in file |
| C2 | `лиминаль` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминаль' (adjective) appears 2 times in file |
| C2 | `төрлө-төрлө` | adjective | `inSameFileDuplicate` | Duplicate term 'төрлө-төрлө' (adjective) appears 2 times in file |
| C2 | `томанлы` | adjective | `inSameFileDuplicate` | Duplicate term 'томанлы' (adjective) appears 2 times in file |
| C2 | `норматив` | adjective | `inSameFileDuplicate` | Duplicate term 'норматив' (adjective) appears 2 times in file |
| C2 | `төҫмәрле` | adjective | `inSameFileDuplicate` | Duplicate term 'төҫмәрле' (adjective) appears 2 times in file |
| C2 | `туры булмаған` | adjective | `inSameFileDuplicate` | Duplicate term 'туры булмаған' (adjective) appears 2 times in file |
| C2 | `асыҡ булмаған` | adjective | `inSameFileDuplicate` | Duplicate term 'асыҡ булмаған' (adjective) appears 2 times in file |
| C2 | `ялған` | adjective | `inSameFileDuplicate` | Duplicate term 'ялған' (adjective) appears 2 times in file |
| C2 | `парадоксаль` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксаль' (adjective) appears 2 times in file |
| C2 | `киң таралған` | adjective | `inSameFileDuplicate` | Duplicate term 'киң таралған' (adjective) appears 2 times in file |
| C2 | `поляризациялаусы` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризациялаусы' (adjective) appears 2 times in file |
| C2 | `тотрыҡһыҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'тотрыҡһыҙ' (adjective) appears 2 times in file |
| C2 | `прескриптив` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптив' (adjective) appears 2 times in file |
| C2 | `һуҙылған` | adjective | `inSameFileDuplicate` | Duplicate term 'һуҙылған' (adjective) appears 2 times in file |
| C2 | `редуктив` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктив' (adjective) appears 2 times in file |
| C2 | `нигеҙ һалыусы` | adjective | `inSameFileDuplicate` | Duplicate term 'нигеҙ һалыусы' (adjective) appears 2 times in file |
| C2 | `ялған сылтаулы` | adjective | `inSameFileDuplicate` | Duplicate term 'ялған сылтаулы' (adjective) appears 2 times in file |
| C2 | `уйҙырма` | adjective | `inSameFileDuplicate` | Duplicate term 'уйҙырма' (adjective) appears 2 times in file |
| C2 | `җимергеч` | adjective | `inSameFileDuplicate` | Duplicate term 'җимергеч' (adjective) appears 2 times in file |
| C2 | `әйтелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'әйтелмәгән' (adjective) appears 2 times in file |
| C2 | `үткенсе` | adjective | `inSameFileDuplicate` | Duplicate term 'үткенсе' (adjective) appears 2 times in file |
| C2 | `һәрҡайҙағы` | adjective | `inSameFileDuplicate` | Duplicate term 'һәрҡайҙағы' (adjective) appears 2 times in file |
| C2 | `бермәғәнәле` | adjective | `inSameFileDuplicate` | Duplicate term 'бермәғәнәле' (adjective) appears 2 times in file |
| C2 | `күрелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'күрелмәгән' (adjective) appears 2 times in file |
| C2 | `нигеҙһеҙ` | adjective | `inSameFileDuplicate` | Duplicate term 'нигеҙһеҙ' (adjective) appears 2 times in file |
| C2 | `айҡашлы` | adjective | `inSameFileDuplicate` | Duplicate term 'айҡашлы' (adjective) appears 2 times in file |

#### File: `vocabulary/ba/C2/verbs.js` (110 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `реификацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'реификацияларға' (verb) appears 2 times in file |
| C2 | `сублимацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'сублимацияларға' (verb) appears 2 times in file |
| C2 | `предицировать итергә` | verb | `inSameFileDuplicate` | Duplicate term 'предицировать итергә' (verb) appears 2 times in file |
| C2 | `кәүҙәләндерергә` | verb | `inSameFileDuplicate` | Duplicate term 'кәүҙәләндерергә' (verb) appears 2 times in file |
| C2 | `инҡар итергә` | verb | `inSameFileDuplicate` | Duplicate term 'инҡар итергә' (verb) appears 2 times in file |
| C2 | `сиктән уҙырға` | verb | `inSameFileDuplicate` | Duplicate term 'сиктән уҙырға' (verb) appears 2 times in file |
| C2 | `аралашсы булырға` | verb | `inSameFileDuplicate` | Duplicate term 'аралашсы булырға' (verb) appears 2 times in file |
| C2 | `төшөрөп ҡалдырырға` | verb | `inSameFileDuplicate` | Duplicate term 'төшөрөп ҡалдырырға' (verb) appears 2 times in file |
| C2 | `бутарға` | verb | `inSameFileDuplicate` | Duplicate term 'бутарға' (verb) appears 2 times in file |
| C2 | `ҡушып бутарға` | verb | `inSameFileDuplicate` | Duplicate term 'ҡушып бутарға' (verb) appears 2 times in file |
| C2 | `мөрәжәғәт итергә` | verb | `inSameFileDuplicate` | Duplicate term 'мөрәжәғәт итергә' (verb) appears 2 times in file |
| C2 | `алғы планға сығарырга` | verb | `inSameFileDuplicate` | Duplicate term 'алғы планға сығарырга' (verb) appears 2 times in file |
| C2 | `үҙләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'үҙләштерергә' (verb) appears 2 times in file |
| C2 | `дестабилизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'дестабилизацияларға' (verb) appears 2 times in file |
| C2 | `товарлаштырырға` | verb | `inSameFileDuplicate` | Duplicate term 'товарлаштырырға' (verb) appears 2 times in file |
| C2 | `инструментальләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'инструментальләштерергә' (verb) appears 2 times in file |
| C2 | `валоризацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'валоризацияларға' (verb) appears 2 times in file |
| C2 | `фетишизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'фетишизацияларға' (verb) appears 2 times in file |
| C2 | `ятлаштырырға` | verb | `inSameFileDuplicate` | Duplicate term 'ятлаштырырға' (verb) appears 2 times in file |
| C2 | `сиктәрен билдәләргә` | verb | `inSameFileDuplicate` | Duplicate term 'сиктәрен билдәләргә' (verb) appears 2 times in file |
| C2 | `сикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'сикләргә' (verb) appears 2 times in file |
| C2 | `ҡаршы торорға` | verb | `inSameFileDuplicate` | Duplicate term 'ҡаршы торорға' (verb) appears 2 times in file |
| C2 | `боҙорға` | verb | `inSameFileDuplicate` | Duplicate term 'боҙорға' (verb) appears 4 times in file |
| C2 | `кире ҡағырға` | verb | `inSameFileDuplicate` | Duplicate term 'кире ҡағырға' (verb) appears 2 times in file |
| C2 | `юҡҡа сығарырға` | verb | `inSameFileDuplicate` | Duplicate term 'юҡҡа сығарырға' (verb) appears 2 times in file |
| C2 | `боҙорға` | verb | `inSameFileDuplicate` | Duplicate term 'боҙорға' (verb) appears 4 times in file |
| C2 | `индерергә` | verb | `inSameFileDuplicate` | Duplicate term 'индерергә' (verb) appears 2 times in file |
| C2 | `deconstruct` | verb | `inSameFileDuplicate` | Duplicate term 'deconstruct' (verb) appears 2 times in file |
| C2 | `алҙан сикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'алҙан сикләргә' (verb) appears 2 times in file |
| C2 | `диалектизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'диалектизацияларға' (verb) appears 2 times in file |
| C2 | `гегемонизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'гегемонизацияларға' (verb) appears 2 times in file |
| C2 | `ассыҙыҡларға` | verb | `inSameFileDuplicate` | Duplicate term 'ассыҙыҡларға' (verb) appears 2 times in file |
| C2 | `ризалашырға` | verb | `inSameFileDuplicate` | Duplicate term 'ризалашырға' (verb) appears 2 times in file |
| C2 | `еңелләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'еңелләштерергә' (verb) appears 2 times in file |
| C2 | `әйләнеп уҙырға` | verb | `inSameFileDuplicate` | Duplicate term 'әйләнеп уҙырға' (verb) appears 2 times in file |
| C2 | `раҫларға` | verb | `inSameFileDuplicate` | Duplicate term 'раҫларға' (verb) appears 2 times in file |
| C2 | `таратырға` | verb | `inSameFileDuplicate` | Duplicate term 'таратырға' (verb) appears 2 times in file |
| C2 | `үҙ эсенә алырға` | verb | `inSameFileDuplicate` | Duplicate term 'үҙ эсенә алырға' (verb) appears 2 times in file |
| C2 | `тыуҙырырға` | verb | `inSameFileDuplicate` | Duplicate term 'тыуҙырырға' (verb) appears 2 times in file |
| C2 | `киҫкенләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'киҫкенләштерергә' (verb) appears 2 times in file |
| C2 | `өлгө булып торорға` | verb | `inSameFileDuplicate` | Duplicate term 'өлгө булып торорға' (verb) appears 2 times in file |
| C2 | `ҡамасауларға` | verb | `inSameFileDuplicate` | Duplicate term 'ҡамасауларға' (verb) appears 2 times in file |
| C2 | `йомшартырға` | verb | `inSameFileDuplicate` | Duplicate term 'йомшартырға' (verb) appears 2 times in file |
| C2 | `мәжбүр итергә` | verb | `inSameFileDuplicate` | Duplicate term 'мәжбүр итергә' (verb) appears 2 times in file |
| C2 | `таралырга` | verb | `inSameFileDuplicate` | Duplicate term 'таралырга' (verb) appears 2 times in file |
| C2 | `булдырмаҫҡа` | verb | `inSameFileDuplicate` | Duplicate term 'булдырмаҫҡа' (verb) appears 2 times in file |
| C2 | `килештерергә` | verb | `inSameFileDuplicate` | Duplicate term 'килештерергә' (verb) appears 2 times in file |
| C2 | `алмаштырырға` | verb | `inSameFileDuplicate` | Duplicate term 'алмаштырырға' (verb) appears 2 times in file |
| C2 | `нигеҙләнергә` | verb | `inSameFileDuplicate` | Duplicate term 'нигеҙләнергә' (verb) appears 2 times in file |
| C2 | `аҡларға` | verb | `inSameFileDuplicate` | Duplicate term 'аҡларға' (verb) appears 2 times in file |
| C2 | `бәйле булырға` | verb | `inSameFileDuplicate` | Duplicate term 'бәйле булырға' (verb) appears 2 times in file |
| C2 | `көрәшергә` | verb | `inSameFileDuplicate` | Duplicate term 'көрәшергә' (verb) appears 2 times in file |
| C2 | `өҫтән-өҫтән үтергә` | verb | `inSameFileDuplicate` | Duplicate term 'өҫтән-өҫтән үтергә' (verb) appears 2 times in file |
| C2 | `йәшерергә` | verb | `inSameFileDuplicate` | Duplicate term 'йәшерергә' (verb) appears 2 times in file |
| C2 | `парадигма үҙгәреүе` | verb | `inSameFileDuplicate` | Duplicate term 'парадигма үҙгәреүе' (verb) appears 2 times in file |
| C2 | `реификацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'реификацияларға' (verb) appears 2 times in file |
| C2 | `сублимацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'сублимацияларға' (verb) appears 2 times in file |
| C2 | `предицировать итергә` | verb | `inSameFileDuplicate` | Duplicate term 'предицировать итергә' (verb) appears 2 times in file |
| C2 | `кәүҙәләндерергә` | verb | `inSameFileDuplicate` | Duplicate term 'кәүҙәләндерергә' (verb) appears 2 times in file |
| C2 | `инҡар итергә` | verb | `inSameFileDuplicate` | Duplicate term 'инҡар итергә' (verb) appears 2 times in file |
| C2 | `сиктән уҙырға` | verb | `inSameFileDuplicate` | Duplicate term 'сиктән уҙырға' (verb) appears 2 times in file |
| C2 | `аралашсы булырға` | verb | `inSameFileDuplicate` | Duplicate term 'аралашсы булырға' (verb) appears 2 times in file |
| C2 | `төшөрөп ҡалдырырға` | verb | `inSameFileDuplicate` | Duplicate term 'төшөрөп ҡалдырырға' (verb) appears 2 times in file |
| C2 | `бутарға` | verb | `inSameFileDuplicate` | Duplicate term 'бутарға' (verb) appears 2 times in file |
| C2 | `ҡушып бутарға` | verb | `inSameFileDuplicate` | Duplicate term 'ҡушып бутарға' (verb) appears 2 times in file |
| C2 | `мөрәжәғәт итергә` | verb | `inSameFileDuplicate` | Duplicate term 'мөрәжәғәт итергә' (verb) appears 2 times in file |
| C2 | `алғы планға сығарырга` | verb | `inSameFileDuplicate` | Duplicate term 'алғы планға сығарырга' (verb) appears 2 times in file |
| C2 | `үҙләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'үҙләштерергә' (verb) appears 2 times in file |
| C2 | `дестабилизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'дестабилизацияларға' (verb) appears 2 times in file |
| C2 | `товарлаштырырға` | verb | `inSameFileDuplicate` | Duplicate term 'товарлаштырырға' (verb) appears 2 times in file |
| C2 | `инструментальләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'инструментальләштерергә' (verb) appears 2 times in file |
| C2 | `валоризацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'валоризацияларға' (verb) appears 2 times in file |
| C2 | `фетишизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'фетишизацияларға' (verb) appears 2 times in file |
| C2 | `ятлаштырырға` | verb | `inSameFileDuplicate` | Duplicate term 'ятлаштырырға' (verb) appears 2 times in file |
| C2 | `сиктәрен билдәләргә` | verb | `inSameFileDuplicate` | Duplicate term 'сиктәрен билдәләргә' (verb) appears 2 times in file |
| C2 | `сикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'сикләргә' (verb) appears 2 times in file |
| C2 | `ҡаршы торорға` | verb | `inSameFileDuplicate` | Duplicate term 'ҡаршы торорға' (verb) appears 2 times in file |
| C2 | `боҙорға` | verb | `inSameFileDuplicate` | Duplicate term 'боҙорға' (verb) appears 4 times in file |
| C2 | `кире ҡағырға` | verb | `inSameFileDuplicate` | Duplicate term 'кире ҡағырға' (verb) appears 2 times in file |
| C2 | `юҡҡа сығарырға` | verb | `inSameFileDuplicate` | Duplicate term 'юҡҡа сығарырға' (verb) appears 2 times in file |
| C2 | `боҙорға` | verb | `inSameFileDuplicate` | Duplicate term 'боҙорға' (verb) appears 4 times in file |
| C2 | `индерергә` | verb | `inSameFileDuplicate` | Duplicate term 'индерергә' (verb) appears 2 times in file |
| C2 | `deconstruct` | verb | `inSameFileDuplicate` | Duplicate term 'deconstruct' (verb) appears 2 times in file |
| C2 | `алҙан сикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'алҙан сикләргә' (verb) appears 2 times in file |
| C2 | `диалектизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'диалектизацияларға' (verb) appears 2 times in file |
| C2 | `гегемонизацияларға` | verb | `inSameFileDuplicate` | Duplicate term 'гегемонизацияларға' (verb) appears 2 times in file |
| C2 | `ассыҙыҡларға` | verb | `inSameFileDuplicate` | Duplicate term 'ассыҙыҡларға' (verb) appears 2 times in file |
| C2 | `ризалашырға` | verb | `inSameFileDuplicate` | Duplicate term 'ризалашырға' (verb) appears 2 times in file |
| C2 | `еңелләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'еңелләштерергә' (verb) appears 2 times in file |
| C2 | `әйләнеп уҙырға` | verb | `inSameFileDuplicate` | Duplicate term 'әйләнеп уҙырға' (verb) appears 2 times in file |
| C2 | `раҫларға` | verb | `inSameFileDuplicate` | Duplicate term 'раҫларға' (verb) appears 2 times in file |
| C2 | `таратырға` | verb | `inSameFileDuplicate` | Duplicate term 'таратырға' (verb) appears 2 times in file |
| C2 | `үҙ эсенә алырға` | verb | `inSameFileDuplicate` | Duplicate term 'үҙ эсенә алырға' (verb) appears 2 times in file |
| C2 | `тыуҙырырға` | verb | `inSameFileDuplicate` | Duplicate term 'тыуҙырырға' (verb) appears 2 times in file |
| C2 | `киҫкенләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'киҫкенләштерергә' (verb) appears 2 times in file |
| C2 | `өлгө булып торорға` | verb | `inSameFileDuplicate` | Duplicate term 'өлгө булып торорға' (verb) appears 2 times in file |
| C2 | `ҡамасауларға` | verb | `inSameFileDuplicate` | Duplicate term 'ҡамасауларға' (verb) appears 2 times in file |
| C2 | `йомшартырға` | verb | `inSameFileDuplicate` | Duplicate term 'йомшартырға' (verb) appears 2 times in file |
| C2 | `мәжбүр итергә` | verb | `inSameFileDuplicate` | Duplicate term 'мәжбүр итергә' (verb) appears 2 times in file |
| C2 | `таралырга` | verb | `inSameFileDuplicate` | Duplicate term 'таралырга' (verb) appears 2 times in file |
| C2 | `булдырмаҫҡа` | verb | `inSameFileDuplicate` | Duplicate term 'булдырмаҫҡа' (verb) appears 2 times in file |
| C2 | `килештерергә` | verb | `inSameFileDuplicate` | Duplicate term 'килештерергә' (verb) appears 2 times in file |
| C2 | `алмаштырырға` | verb | `inSameFileDuplicate` | Duplicate term 'алмаштырырға' (verb) appears 2 times in file |
| C2 | `нигеҙләнергә` | verb | `inSameFileDuplicate` | Duplicate term 'нигеҙләнергә' (verb) appears 2 times in file |
| C2 | `аҡларға` | verb | `inSameFileDuplicate` | Duplicate term 'аҡларға' (verb) appears 2 times in file |
| C2 | `бәйле булырға` | verb | `inSameFileDuplicate` | Duplicate term 'бәйле булырға' (verb) appears 2 times in file |
| C2 | `көрәшергә` | verb | `inSameFileDuplicate` | Duplicate term 'көрәшергә' (verb) appears 2 times in file |
| C2 | `өҫтән-өҫтән үтергә` | verb | `inSameFileDuplicate` | Duplicate term 'өҫтән-өҫтән үтергә' (verb) appears 2 times in file |
| C2 | `йәшерергә` | verb | `inSameFileDuplicate` | Duplicate term 'йәшерергә' (verb) appears 2 times in file |
| C2 | `парадигма үҙгәреүе` | verb | `inSameFileDuplicate` | Duplicate term 'парадигма үҙгәреүе' (verb) appears 2 times in file |

### BR (Breton) — 309 Flagged Entries out of 639 Category (a) Entries

#### File: `vocabulary/br/B1/locations.js` (11 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Aostralia` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Japan` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Sina` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Brazil` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `India` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Tokyo` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Sydney` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Pekin` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Rio de Janeiro` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Kaero` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Delhi` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/br/B2/fluency.js` (22 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |

#### File: `vocabulary/br/B2/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/br/C1/fluency.js` (20 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |

#### File: `vocabulary/br/C1/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/br/C2/adjectives.js` (116 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `etrekelennous` | adjective | `inSameFileDuplicate` | Duplicate term 'etrekelennous' (adjective) appears 2 times in file |
| C2 | `hermeneutek` | adjective | `inSameFileDuplicate` | Duplicate term 'hermeneutek' (adjective) appears 2 times in file |
| C2 | `tautologek` | adjective | `inSameFileDuplicate` | Duplicate term 'tautologek' (adjective) appears 2 times in file |
| C2 | `liessteriek` | adjective | `inSameFileDuplicate` | Duplicate term 'liessteriek' (adjective) appears 2 times in file |
| C2 | `heuristek` | adjective | `inSameFileDuplicate` | Duplicate term 'heuristek' (adjective) appears 2 times in file |
| C2 | `goude-trevadennel` | adjective | `inSameFileDuplicate` | Duplicate term 'goude-trevadennel' (adjective) appears 2 times in file |
| C2 | `liespennel` | adjective | `inSameFileDuplicate` | Duplicate term 'liespennel' (adjective) appears 2 times in file |
| C2 | `kosmopolit` | adjective | `inSameFileDuplicate` | Duplicate term 'kosmopolit' (adjective) appears 2 times in file |
| C2 | `narsisek` | adjective | `inSameFileDuplicate` | Duplicate term 'narsisek' (adjective) appears 2 times in file |
| C2 | `heterodoks` | adjective | `inSameFileDuplicate` | Duplicate term 'heterodoks' (adjective) appears 2 times in file |
| C2 | `imanent` | adjective | `inSameFileDuplicate` | Duplicate term 'imanent' (adjective) appears 2 times in file |
| C2 | `trumm` | adjective | `inSameFileDuplicate` | Duplicate term 'trumm' (adjective) appears 2 times in file |
| C2 | `teñval` | adjective | `inSameFileDuplicate` | Duplicate term 'teñval' (adjective) appears 2 times in file |
| C2 | `anac'hronikel` | adjective | `inSameFileDuplicate` | Duplicate term 'anac'hronikel' (adjective) appears 2 times in file |
| C2 | `antitetek` | adjective | `inSameFileDuplicate` | Duplicate term 'antitetek' (adjective) appears 2 times in file |
| C2 | `kevrinus` | adjective | `inSameFileDuplicate` | Duplicate term 'kevrinus' (adjective) appears 2 times in file |
| C2 | `anreoliek` | adjective | `inSameFileDuplicate` | Duplicate term 'anreoliek' (adjective) appears 2 times in file |
| C2 | `daouredel` | adjective | `inSameFileDuplicate` | Duplicate term 'daouredel' (adjective) appears 2 times in file |
| C2 | `kategoriel` | adjective | `inSameFileDuplicate` | Duplicate term 'kategoriel' (adjective) appears 2 times in file |
| C2 | `evezhiek` | adjective | `inSameFileDuplicate` | Duplicate term 'evezhiek' (adjective) appears 2 times in file |
| C2 | `kuzh` | adjective | `inSameFileDuplicate` | Duplicate term 'kuzh' (adjective) appears 2 times in file |
| C2 | `dialektek` | adjective | `inSameFileDuplicate` | Duplicate term 'dialektek' (adjective) appears 2 times in file |
| C2 | `strewet` | adjective | `inSameFileDuplicate` | Duplicate term 'strewet' (adjective) appears 2 times in file |
| C2 | `didispeg` | adjective | `inSameFileDuplicate` | Duplicate term 'didispeg' (adjective) appears 2 times in file |
| C2 | `ezoterek` | adjective | `inSameFileDuplicate` | Duplicate term 'ezoterek' (adjective) appears 2 times in file |
| C2 | `fals` | adjective | `inSameFileDuplicate` | Duplicate term 'fals' (adjective) appears 2 times in file |
| C2 | `didregemmesk` | adjective | `inSameFileDuplicate` | Duplicate term 'didregemmesk' (adjective) appears 2 times in file |
| C2 | `neptu` | adjective | `inSameFileDuplicate` | Duplicate term 'neptu' (adjective) appears 2 times in file |
| C2 | `darvoudel` | adjective | `inSameFileDuplicate` | Duplicate term 'darvoudel' (adjective) appears 2 times in file |
| C2 | `genedik` | adjective | `inSameFileDuplicate` | Duplicate term 'genedik' (adjective) appears 2 times in file |
| C2 | `treitour` | adjective | `inSameFileDuplicate` | Duplicate term 'treitour' (adjective) appears 2 times in file |
| C2 | `digevall` | adjective | `inSameFileDuplicate` | Duplicate term 'digevall' (adjective) appears 2 times in file |
| C2 | `liminel` | adjective | `inSameFileDuplicate` | Duplicate term 'liminel' (adjective) appears 2 times in file |
| C2 | `liesseurt` | adjective | `inSameFileDuplicate` | Duplicate term 'liesseurt' (adjective) appears 2 times in file |
| C2 | `dispis` | adjective | `inSameFileDuplicate` | Duplicate term 'dispis' (adjective) appears 2 times in file |
| C2 | `reoliat` | adjective | `inSameFileDuplicate` | Duplicate term 'reoliat' (adjective) appears 2 times in file |
| C2 | `fin` | adjective | `inSameFileDuplicate` | Duplicate term 'fin' (adjective) appears 2 times in file |
| C2 | `beskell` | adjective | `inSameFileDuplicate` | Duplicate term 'beskell' (adjective) appears 2 times in file |
| C2 | `didreuzwelus` | adjective | `inSameFileDuplicate` | Duplicate term 'didreuzwelus' (adjective) appears 2 times in file |
| C2 | `war-wel` | adjective | `inSameFileDuplicate` | Duplicate term 'war-wel' (adjective) appears 2 times in file |
| C2 | `paradoksel` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoksel' (adjective) appears 2 times in file |
| C2 | `hollek` | adjective | `inSameFileDuplicate` | Duplicate term 'hollek' (adjective) appears 2 times in file |
| C2 | `reunius` | adjective | `inSameFileDuplicate` | Duplicate term 'reunius' (adjective) appears 2 times in file |
| C2 | `diskredus` | adjective | `inSameFileDuplicate` | Duplicate term 'diskredus' (adjective) appears 2 times in file |
| C2 | `erbedus` | adjective | `inSameFileDuplicate` | Duplicate term 'erbedus' (adjective) appears 2 times in file |
| C2 | `hirbadus` | adjective | `inSameFileDuplicate` | Duplicate term 'hirbadus' (adjective) appears 2 times in file |
| C2 | `bihanaus` | adjective | `inSameFileDuplicate` | Duplicate term 'bihanaus' (adjective) appears 2 times in file |
| C2 | `diazezel` | adjective | `inSameFileDuplicate` | Duplicate term 'diazezel' (adjective) appears 2 times in file |
| C2 | `touellus` | adjective | `inSameFileDuplicate` | Duplicate term 'touellus' (adjective) appears 2 times in file |
| C2 | `spurius` | adjective | `inSameFileDuplicate` | Duplicate term 'spurius' (adjective) appears 2 times in file |
| C2 | `disivour` | adjective | `inSameFileDuplicate` | Duplicate term 'disivour' (adjective) appears 2 times in file |
| C2 | `didispleg` | adjective | `inSameFileDuplicate` | Duplicate term 'didispleg' (adjective) appears 2 times in file |
| C2 | `tanav` | adjective | `inSameFileDuplicate` | Duplicate term 'tanav' (adjective) appears 2 times in file |
| C2 | `daoulamm` | adjective | `inSameFileDuplicate` | Duplicate term 'daoulamm' (adjective) appears 2 times in file |
| C2 | `holllec'hiel` | adjective | `inSameFileDuplicate` | Duplicate term 'holllec'hiel' (adjective) appears 2 times in file |
| C2 | `anat` | adjective | `inSameFileDuplicate` | Duplicate term 'anat' (adjective) appears 2 times in file |
| C2 | `dic'hortoz` | adjective | `inSameFileDuplicate` | Duplicate term 'dic'hortoz' (adjective) appears 2 times in file |
| C2 | `diskant` | adjective | `inSameFileDuplicate` | Duplicate term 'diskant' (adjective) appears 2 times in file |
| C2 | `etrekelennous` | adjective | `inSameFileDuplicate` | Duplicate term 'etrekelennous' (adjective) appears 2 times in file |
| C2 | `hermeneutek` | adjective | `inSameFileDuplicate` | Duplicate term 'hermeneutek' (adjective) appears 2 times in file |
| C2 | `tautologek` | adjective | `inSameFileDuplicate` | Duplicate term 'tautologek' (adjective) appears 2 times in file |
| C2 | `liessteriek` | adjective | `inSameFileDuplicate` | Duplicate term 'liessteriek' (adjective) appears 2 times in file |
| C2 | `heuristek` | adjective | `inSameFileDuplicate` | Duplicate term 'heuristek' (adjective) appears 2 times in file |
| C2 | `goude-trevadennel` | adjective | `inSameFileDuplicate` | Duplicate term 'goude-trevadennel' (adjective) appears 2 times in file |
| C2 | `liespennel` | adjective | `inSameFileDuplicate` | Duplicate term 'liespennel' (adjective) appears 2 times in file |
| C2 | `kosmopolit` | adjective | `inSameFileDuplicate` | Duplicate term 'kosmopolit' (adjective) appears 2 times in file |
| C2 | `narsisek` | adjective | `inSameFileDuplicate` | Duplicate term 'narsisek' (adjective) appears 2 times in file |
| C2 | `heterodoks` | adjective | `inSameFileDuplicate` | Duplicate term 'heterodoks' (adjective) appears 2 times in file |
| C2 | `imanent` | adjective | `inSameFileDuplicate` | Duplicate term 'imanent' (adjective) appears 2 times in file |
| C2 | `trumm` | adjective | `inSameFileDuplicate` | Duplicate term 'trumm' (adjective) appears 2 times in file |
| C2 | `teñval` | adjective | `inSameFileDuplicate` | Duplicate term 'teñval' (adjective) appears 2 times in file |
| C2 | `anac'hronikel` | adjective | `inSameFileDuplicate` | Duplicate term 'anac'hronikel' (adjective) appears 2 times in file |
| C2 | `antitetek` | adjective | `inSameFileDuplicate` | Duplicate term 'antitetek' (adjective) appears 2 times in file |
| C2 | `kevrinus` | adjective | `inSameFileDuplicate` | Duplicate term 'kevrinus' (adjective) appears 2 times in file |
| C2 | `anreoliek` | adjective | `inSameFileDuplicate` | Duplicate term 'anreoliek' (adjective) appears 2 times in file |
| C2 | `daouredel` | adjective | `inSameFileDuplicate` | Duplicate term 'daouredel' (adjective) appears 2 times in file |
| C2 | `kategoriel` | adjective | `inSameFileDuplicate` | Duplicate term 'kategoriel' (adjective) appears 2 times in file |
| C2 | `evezhiek` | adjective | `inSameFileDuplicate` | Duplicate term 'evezhiek' (adjective) appears 2 times in file |
| C2 | `kuzh` | adjective | `inSameFileDuplicate` | Duplicate term 'kuzh' (adjective) appears 2 times in file |
| C2 | `dialektek` | adjective | `inSameFileDuplicate` | Duplicate term 'dialektek' (adjective) appears 2 times in file |
| C2 | `strewet` | adjective | `inSameFileDuplicate` | Duplicate term 'strewet' (adjective) appears 2 times in file |
| C2 | `didispeg` | adjective | `inSameFileDuplicate` | Duplicate term 'didispeg' (adjective) appears 2 times in file |
| C2 | `ezoterek` | adjective | `inSameFileDuplicate` | Duplicate term 'ezoterek' (adjective) appears 2 times in file |
| C2 | `fals` | adjective | `inSameFileDuplicate` | Duplicate term 'fals' (adjective) appears 2 times in file |
| C2 | `didregemmesk` | adjective | `inSameFileDuplicate` | Duplicate term 'didregemmesk' (adjective) appears 2 times in file |
| C2 | `neptu` | adjective | `inSameFileDuplicate` | Duplicate term 'neptu' (adjective) appears 2 times in file |
| C2 | `darvoudel` | adjective | `inSameFileDuplicate` | Duplicate term 'darvoudel' (adjective) appears 2 times in file |
| C2 | `genedik` | adjective | `inSameFileDuplicate` | Duplicate term 'genedik' (adjective) appears 2 times in file |
| C2 | `treitour` | adjective | `inSameFileDuplicate` | Duplicate term 'treitour' (adjective) appears 2 times in file |
| C2 | `digevall` | adjective | `inSameFileDuplicate` | Duplicate term 'digevall' (adjective) appears 2 times in file |
| C2 | `liminel` | adjective | `inSameFileDuplicate` | Duplicate term 'liminel' (adjective) appears 2 times in file |
| C2 | `liesseurt` | adjective | `inSameFileDuplicate` | Duplicate term 'liesseurt' (adjective) appears 2 times in file |
| C2 | `dispis` | adjective | `inSameFileDuplicate` | Duplicate term 'dispis' (adjective) appears 2 times in file |
| C2 | `reoliat` | adjective | `inSameFileDuplicate` | Duplicate term 'reoliat' (adjective) appears 2 times in file |
| C2 | `fin` | adjective | `inSameFileDuplicate` | Duplicate term 'fin' (adjective) appears 2 times in file |
| C2 | `beskell` | adjective | `inSameFileDuplicate` | Duplicate term 'beskell' (adjective) appears 2 times in file |
| C2 | `didreuzwelus` | adjective | `inSameFileDuplicate` | Duplicate term 'didreuzwelus' (adjective) appears 2 times in file |
| C2 | `war-wel` | adjective | `inSameFileDuplicate` | Duplicate term 'war-wel' (adjective) appears 2 times in file |
| C2 | `paradoksel` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoksel' (adjective) appears 2 times in file |
| C2 | `hollek` | adjective | `inSameFileDuplicate` | Duplicate term 'hollek' (adjective) appears 2 times in file |
| C2 | `reunius` | adjective | `inSameFileDuplicate` | Duplicate term 'reunius' (adjective) appears 2 times in file |
| C2 | `diskredus` | adjective | `inSameFileDuplicate` | Duplicate term 'diskredus' (adjective) appears 2 times in file |
| C2 | `erbedus` | adjective | `inSameFileDuplicate` | Duplicate term 'erbedus' (adjective) appears 2 times in file |
| C2 | `hirbadus` | adjective | `inSameFileDuplicate` | Duplicate term 'hirbadus' (adjective) appears 2 times in file |
| C2 | `bihanaus` | adjective | `inSameFileDuplicate` | Duplicate term 'bihanaus' (adjective) appears 2 times in file |
| C2 | `diazezel` | adjective | `inSameFileDuplicate` | Duplicate term 'diazezel' (adjective) appears 2 times in file |
| C2 | `touellus` | adjective | `inSameFileDuplicate` | Duplicate term 'touellus' (adjective) appears 2 times in file |
| C2 | `spurius` | adjective | `inSameFileDuplicate` | Duplicate term 'spurius' (adjective) appears 2 times in file |
| C2 | `disivour` | adjective | `inSameFileDuplicate` | Duplicate term 'disivour' (adjective) appears 2 times in file |
| C2 | `didispleg` | adjective | `inSameFileDuplicate` | Duplicate term 'didispleg' (adjective) appears 2 times in file |
| C2 | `tanav` | adjective | `inSameFileDuplicate` | Duplicate term 'tanav' (adjective) appears 2 times in file |
| C2 | `daoulamm` | adjective | `inSameFileDuplicate` | Duplicate term 'daoulamm' (adjective) appears 2 times in file |
| C2 | `holllec'hiel` | adjective | `inSameFileDuplicate` | Duplicate term 'holllec'hiel' (adjective) appears 2 times in file |
| C2 | `anat` | adjective | `inSameFileDuplicate` | Duplicate term 'anat' (adjective) appears 2 times in file |
| C2 | `dic'hortoz` | adjective | `inSameFileDuplicate` | Duplicate term 'dic'hortoz' (adjective) appears 2 times in file |
| C2 | `diskant` | adjective | `inSameFileDuplicate` | Duplicate term 'diskant' (adjective) appears 2 times in file |

#### File: `vocabulary/br/C2/verbs.js` (106 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `reifiñ` | verb | `inSameFileDuplicate` | Duplicate term 'reifiñ' (verb) appears 2 times in file |
| C2 | `isberliñ` | verb | `inSameFileDuplicate` | Duplicate term 'isberliñ' (verb) appears 2 times in file |
| C2 | `predikadiñ` | verb | `inSameFileDuplicate` | Duplicate term 'predikadiñ' (verb) appears 2 times in file |
| C2 | `instañsiñ` | verb | `inSameFileDuplicate` | Duplicate term 'instañsiñ' (verb) appears 2 times in file |
| C2 | `nac'hañ` | verb | `inSameFileDuplicate` | Duplicate term 'nac'hañ' (verb) appears 2 times in file |
| C2 | `treuziñ` | verb | `inSameFileDuplicate` | Duplicate term 'treuziñ' (verb) appears 4 times in file |
| C2 | `mediadiñ` | verb | `inSameFileDuplicate` | Duplicate term 'mediadiñ' (verb) appears 2 times in file |
| C2 | `elidañ` | verb | `inSameFileDuplicate` | Duplicate term 'elidañ' (verb) appears 2 times in file |
| C2 | `diskañ` | verb | `inSameFileDuplicate` | Duplicate term 'diskañ' (verb) appears 2 times in file |
| C2 | `kenliammañ` | verb | `inSameFileDuplicate` | Duplicate term 'kenliammañ' (verb) appears 2 times in file |
| C2 | `galvel` | verb | `inSameFileDuplicate` | Duplicate term 'galvel' (verb) appears 2 times in file |
| C2 | `lakaat war-raok` | verb | `inSameFileDuplicate` | Duplicate term 'lakaat war-raok' (verb) appears 2 times in file |
| C2 | `adpakañ` | verb | `inSameFileDuplicate` | Duplicate term 'adpakañ' (verb) appears 2 times in file |
| C2 | `distabilizañ` | verb | `inSameFileDuplicate` | Duplicate term 'distabilizañ' (verb) appears 2 times in file |
| C2 | `marc'hadourezhaat` | verb | `inSameFileDuplicate` | Duplicate term 'marc'hadourezhaat' (verb) appears 2 times in file |
| C2 | `benvekaat` | verb | `inSameFileDuplicate` | Duplicate term 'benvekaat' (verb) appears 2 times in file |
| C2 | `prizañ` | verb | `inSameFileDuplicate` | Duplicate term 'prizañ' (verb) appears 2 times in file |
| C2 | `fetikaat` | verb | `inSameFileDuplicate` | Duplicate term 'fetikaat' (verb) appears 2 times in file |
| C2 | `estranaat` | verb | `inSameFileDuplicate` | Duplicate term 'estranaat' (verb) appears 2 times in file |
| C2 | `bevennañ` | verb | `inSameFileDuplicate` | Duplicate term 'bevennañ' (verb) appears 4 times in file |
| C2 | `bevennañ` | verb | `inSameFileDuplicate` | Duplicate term 'bevennañ' (verb) appears 4 times in file |
| C2 | `stourm ouzh` | verb | `inSameFileDuplicate` | Duplicate term 'stourm ouzh' (verb) appears 4 times in file |
| C2 | `gwallañ` | verb | `inSameFileDuplicate` | Duplicate term 'gwallañ' (verb) appears 2 times in file |
| C2 | `enebiñ ouzh` | verb | `inSameFileDuplicate` | Duplicate term 'enebiñ ouzh' (verb) appears 2 times in file |
| C2 | `ebarzhañ` | verb | `inSameFileDuplicate` | Duplicate term 'ebarzhañ' (verb) appears 2 times in file |
| C2 | `dielfonnañ` | verb | `inSameFileDuplicate` | Duplicate term 'dielfonnañ' (verb) appears 2 times in file |
| C2 | `rakserriñ` | verb | `inSameFileDuplicate` | Duplicate term 'rakserriñ' (verb) appears 2 times in file |
| C2 | `dialegekaat` | verb | `inSameFileDuplicate` | Duplicate term 'dialegekaat' (verb) appears 2 times in file |
| C2 | `hegemonekaat` | verb | `inSameFileDuplicate` | Duplicate term 'hegemonekaat' (verb) appears 2 times in file |
| C2 | `pouezañ war` | verb | `inSameFileDuplicate` | Duplicate term 'pouezañ war' (verb) appears 2 times in file |
| C2 | `plegañ da` | verb | `inSameFileDuplicate` | Duplicate term 'plegañ da' (verb) appears 2 times in file |
| C2 | `skañvaat` | verb | `inSameFileDuplicate` | Duplicate term 'skañvaat' (verb) appears 2 times in file |
| C2 | `treuzveizañ` | verb | `inSameFileDuplicate` | Duplicate term 'treuzveizañ' (verb) appears 2 times in file |
| C2 | `kadarnaat` | verb | `inSameFileDuplicate` | Duplicate term 'kadarnaat' (verb) appears 2 times in file |
| C2 | `skignañ` | verb | `inSameFileDuplicate` | Duplicate term 'skignañ' (verb) appears 2 times in file |
| C2 | `kenvellañ` | verb | `inSameFileDuplicate` | Duplicate term 'kenvellañ' (verb) appears 2 times in file |
| C2 | `engehentañ` | verb | `inSameFileDuplicate` | Duplicate term 'engehentañ' (verb) appears 2 times in file |
| C2 | `gwashaat` | verb | `inSameFileDuplicate` | Duplicate term 'gwashaat' (verb) appears 2 times in file |
| C2 | `skoueriaat` | verb | `inSameFileDuplicate` | Duplicate term 'skoueriaat' (verb) appears 2 times in file |
| C2 | `skoilhañ` | verb | `inSameFileDuplicate` | Duplicate term 'skoilhañ' (verb) appears 2 times in file |
| C2 | `koazhañ` | verb | `inSameFileDuplicate` | Duplicate term 'koazhañ' (verb) appears 2 times in file |
| C2 | `rediañ` | verb | `inSameFileDuplicate` | Duplicate term 'rediañ' (verb) appears 2 times in file |
| C2 | `treuziñ` | verb | `inSameFileDuplicate` | Duplicate term 'treuziñ' (verb) appears 4 times in file |
| C2 | `diarbenn` | verb | `inSameFileDuplicate` | Duplicate term 'diarbenn' (verb) appears 2 times in file |
| C2 | `kempouezañ` | verb | `inSameFileDuplicate` | Duplicate term 'kempouezañ' (verb) appears 2 times in file |
| C2 | `erlec'hiañ` | verb | `inSameFileDuplicate` | Duplicate term 'erlec'hiañ' (verb) appears 2 times in file |
| C2 | `diazezañ` | verb | `inSameFileDuplicate` | Duplicate term 'diazezañ' (verb) appears 2 times in file |
| C2 | `mirc'hellañ` | verb | `inSameFileDuplicate` | Duplicate term 'mirc'hellañ' (verb) appears 2 times in file |
| C2 | `dependiñ diouzh` | verb | `inSameFileDuplicate` | Duplicate term 'dependiñ diouzh' (verb) appears 2 times in file |
| C2 | `stourm ouzh` | verb | `inSameFileDuplicate` | Duplicate term 'stourm ouzh' (verb) appears 4 times in file |
| C2 | `pasañ dreist` | verb | `inSameFileDuplicate` | Duplicate term 'pasañ dreist' (verb) appears 2 times in file |
| C2 | `kuzhat` | verb | `inSameFileDuplicate` | Duplicate term 'kuzhat' (verb) appears 2 times in file |
| C2 | `cheñchamant paradign` | verb | `inSameFileDuplicate` | Duplicate term 'cheñchamant paradign' (verb) appears 2 times in file |
| C2 | `reifiñ` | verb | `inSameFileDuplicate` | Duplicate term 'reifiñ' (verb) appears 2 times in file |
| C2 | `isberliñ` | verb | `inSameFileDuplicate` | Duplicate term 'isberliñ' (verb) appears 2 times in file |
| C2 | `predikadiñ` | verb | `inSameFileDuplicate` | Duplicate term 'predikadiñ' (verb) appears 2 times in file |
| C2 | `instañsiñ` | verb | `inSameFileDuplicate` | Duplicate term 'instañsiñ' (verb) appears 2 times in file |
| C2 | `nac'hañ` | verb | `inSameFileDuplicate` | Duplicate term 'nac'hañ' (verb) appears 2 times in file |
| C2 | `treuziñ` | verb | `inSameFileDuplicate` | Duplicate term 'treuziñ' (verb) appears 4 times in file |
| C2 | `mediadiñ` | verb | `inSameFileDuplicate` | Duplicate term 'mediadiñ' (verb) appears 2 times in file |
| C2 | `elidañ` | verb | `inSameFileDuplicate` | Duplicate term 'elidañ' (verb) appears 2 times in file |
| C2 | `diskañ` | verb | `inSameFileDuplicate` | Duplicate term 'diskañ' (verb) appears 2 times in file |
| C2 | `kenliammañ` | verb | `inSameFileDuplicate` | Duplicate term 'kenliammañ' (verb) appears 2 times in file |
| C2 | `galvel` | verb | `inSameFileDuplicate` | Duplicate term 'galvel' (verb) appears 2 times in file |
| C2 | `lakaat war-raok` | verb | `inSameFileDuplicate` | Duplicate term 'lakaat war-raok' (verb) appears 2 times in file |
| C2 | `adpakañ` | verb | `inSameFileDuplicate` | Duplicate term 'adpakañ' (verb) appears 2 times in file |
| C2 | `distabilizañ` | verb | `inSameFileDuplicate` | Duplicate term 'distabilizañ' (verb) appears 2 times in file |
| C2 | `marc'hadourezhaat` | verb | `inSameFileDuplicate` | Duplicate term 'marc'hadourezhaat' (verb) appears 2 times in file |
| C2 | `benvekaat` | verb | `inSameFileDuplicate` | Duplicate term 'benvekaat' (verb) appears 2 times in file |
| C2 | `prizañ` | verb | `inSameFileDuplicate` | Duplicate term 'prizañ' (verb) appears 2 times in file |
| C2 | `fetikaat` | verb | `inSameFileDuplicate` | Duplicate term 'fetikaat' (verb) appears 2 times in file |
| C2 | `estranaat` | verb | `inSameFileDuplicate` | Duplicate term 'estranaat' (verb) appears 2 times in file |
| C2 | `bevennañ` | verb | `inSameFileDuplicate` | Duplicate term 'bevennañ' (verb) appears 4 times in file |
| C2 | `bevennañ` | verb | `inSameFileDuplicate` | Duplicate term 'bevennañ' (verb) appears 4 times in file |
| C2 | `stourm ouzh` | verb | `inSameFileDuplicate` | Duplicate term 'stourm ouzh' (verb) appears 4 times in file |
| C2 | `gwallañ` | verb | `inSameFileDuplicate` | Duplicate term 'gwallañ' (verb) appears 2 times in file |
| C2 | `enebiñ ouzh` | verb | `inSameFileDuplicate` | Duplicate term 'enebiñ ouzh' (verb) appears 2 times in file |
| C2 | `ebarzhañ` | verb | `inSameFileDuplicate` | Duplicate term 'ebarzhañ' (verb) appears 2 times in file |
| C2 | `dielfonnañ` | verb | `inSameFileDuplicate` | Duplicate term 'dielfonnañ' (verb) appears 2 times in file |
| C2 | `rakserriñ` | verb | `inSameFileDuplicate` | Duplicate term 'rakserriñ' (verb) appears 2 times in file |
| C2 | `dialegekaat` | verb | `inSameFileDuplicate` | Duplicate term 'dialegekaat' (verb) appears 2 times in file |
| C2 | `hegemonekaat` | verb | `inSameFileDuplicate` | Duplicate term 'hegemonekaat' (verb) appears 2 times in file |
| C2 | `pouezañ war` | verb | `inSameFileDuplicate` | Duplicate term 'pouezañ war' (verb) appears 2 times in file |
| C2 | `plegañ da` | verb | `inSameFileDuplicate` | Duplicate term 'plegañ da' (verb) appears 2 times in file |
| C2 | `skañvaat` | verb | `inSameFileDuplicate` | Duplicate term 'skañvaat' (verb) appears 2 times in file |
| C2 | `treuzveizañ` | verb | `inSameFileDuplicate` | Duplicate term 'treuzveizañ' (verb) appears 2 times in file |
| C2 | `kadarnaat` | verb | `inSameFileDuplicate` | Duplicate term 'kadarnaat' (verb) appears 2 times in file |
| C2 | `skignañ` | verb | `inSameFileDuplicate` | Duplicate term 'skignañ' (verb) appears 2 times in file |
| C2 | `kenvellañ` | verb | `inSameFileDuplicate` | Duplicate term 'kenvellañ' (verb) appears 2 times in file |
| C2 | `engehentañ` | verb | `inSameFileDuplicate` | Duplicate term 'engehentañ' (verb) appears 2 times in file |
| C2 | `gwashaat` | verb | `inSameFileDuplicate` | Duplicate term 'gwashaat' (verb) appears 2 times in file |
| C2 | `skoueriaat` | verb | `inSameFileDuplicate` | Duplicate term 'skoueriaat' (verb) appears 2 times in file |
| C2 | `skoilhañ` | verb | `inSameFileDuplicate` | Duplicate term 'skoilhañ' (verb) appears 2 times in file |
| C2 | `koazhañ` | verb | `inSameFileDuplicate` | Duplicate term 'koazhañ' (verb) appears 2 times in file |
| C2 | `rediañ` | verb | `inSameFileDuplicate` | Duplicate term 'rediañ' (verb) appears 2 times in file |
| C2 | `treuziñ` | verb | `inSameFileDuplicate` | Duplicate term 'treuziñ' (verb) appears 4 times in file |
| C2 | `diarbenn` | verb | `inSameFileDuplicate` | Duplicate term 'diarbenn' (verb) appears 2 times in file |
| C2 | `kempouezañ` | verb | `inSameFileDuplicate` | Duplicate term 'kempouezañ' (verb) appears 2 times in file |
| C2 | `erlec'hiañ` | verb | `inSameFileDuplicate` | Duplicate term 'erlec'hiañ' (verb) appears 2 times in file |
| C2 | `diazezañ` | verb | `inSameFileDuplicate` | Duplicate term 'diazezañ' (verb) appears 2 times in file |
| C2 | `mirc'hellañ` | verb | `inSameFileDuplicate` | Duplicate term 'mirc'hellañ' (verb) appears 2 times in file |
| C2 | `dependiñ diouzh` | verb | `inSameFileDuplicate` | Duplicate term 'dependiñ diouzh' (verb) appears 2 times in file |
| C2 | `stourm ouzh` | verb | `inSameFileDuplicate` | Duplicate term 'stourm ouzh' (verb) appears 4 times in file |
| C2 | `pasañ dreist` | verb | `inSameFileDuplicate` | Duplicate term 'pasañ dreist' (verb) appears 2 times in file |
| C2 | `kuzhat` | verb | `inSameFileDuplicate` | Duplicate term 'kuzhat' (verb) appears 2 times in file |
| C2 | `cheñchamant paradign` | verb | `inSameFileDuplicate` | Duplicate term 'cheñchamant paradign' (verb) appears 2 times in file |

### CV (Chuvash) — 0 Flagged Entries out of 13 Category (a) Entries

*No data quality issues found for Chuvash. All 13 Category (a) entries pass empty field, duplicate, and artifact checks.*

### DE (German) — 317 Flagged Entries out of 530 Category (a) Entries

#### File: `vocabulary/de/B1/locations.js` (11 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Australien` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Japan` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `China` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Brasilien` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Indien` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Tokio` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Sydney` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Peking` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Rio de Janeiro` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Kairo` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Delhi` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/de/C2/adjectives.js` (192 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronistisch' (adjective) appears 4 times in file |
| C2 | `antithetisch` | adjective | `inSameFileDuplicate` | Duplicate term 'antithetisch' (adjective) appears 4 times in file |
| C2 | `arkan` | adjective | `inSameFileDuplicate` | Duplicate term 'arkan' (adjective) appears 4 times in file |
| C2 | `atypisch` | adjective | `inSameFileDuplicate` | Duplicate term 'atypisch' (adjective) appears 4 times in file |
| C2 | `binär` | adjective | `inSameFileDuplicate` | Duplicate term 'binär' (adjective) appears 4 times in file |
| C2 | `kategorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'kategorisch' (adjective) appears 4 times in file |
| C2 | `beherrscht` | adjective | `inSameFileDuplicate` | Duplicate term 'beherrscht' (adjective) appears 4 times in file |
| C2 | `verdeckt` | adjective | `inSameFileDuplicate` | Duplicate term 'verdeckt' (adjective) appears 4 times in file |
| C2 | `dialektisch` | adjective | `inSameFileDuplicate` | Duplicate term 'dialektisch' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `elusiv` | adjective | `inSameFileDuplicate` | Duplicate term 'elusiv' (adjective) appears 4 times in file |
| C2 | `esoterisch` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterisch' (adjective) appears 4 times in file |
| C2 | `trügerisch` | adjective | `inSameFileDuplicate` | Duplicate term 'trügerisch' (adjective) appears 4 times in file |
| C2 | `unveränderlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unveränderlich' (adjective) appears 4 times in file |
| C2 | `unparteiisch` | adjective | `inSameFileDuplicate` | Duplicate term 'unparteiisch' (adjective) appears 4 times in file |
| C2 | `inzidentell` | adjective | `inSameFileDuplicate` | Duplicate term 'inzidentell' (adjective) appears 4 times in file |
| C2 | `inhärent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhärent' (adjective) appears 4 times in file |
| C2 | `unnachahmlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unnachahmlich' (adjective) appears 4 times in file |
| C2 | `insidiös` | adjective | `inSameFileDuplicate` | Duplicate term 'insidiös' (adjective) appears 4 times in file |
| C2 | `unvereinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unvereinbar' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `vielfältig` | adjective | `inSameFileDuplicate` | Duplicate term 'vielfältig' (adjective) appears 4 times in file |
| C2 | `nebulös` | adjective | `inSameFileDuplicate` | Duplicate term 'nebulös' (adjective) appears 4 times in file |
| C2 | `normativ` | adjective | `inSameFileDuplicate` | Duplicate term 'normativ' (adjective) appears 4 times in file |
| C2 | `nuanciert` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanciert' (adjective) appears 4 times in file |
| C2 | `indirekt` | adjective | `inSameFileDuplicate` | Duplicate term 'indirekt' (adjective) appears 4 times in file |
| C2 | `opak` | adjective | `inSameFileDuplicate` | Duplicate term 'opak' (adjective) appears 4 times in file |
| C2 | `scheinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'scheinbar' (adjective) appears 4 times in file |
| C2 | `paradox` | adjective | `inSameFileDuplicate` | Duplicate term 'paradox' (adjective) appears 4 times in file |
| C2 | `durchdringend` | adjective | `inSameFileDuplicate` | Duplicate term 'durchdringend' (adjective) appears 4 times in file |
| C2 | `polarisierend` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisierend' (adjective) appears 4 times in file |
| C2 | `prekär` | adjective | `inSameFileDuplicate` | Duplicate term 'prekär' (adjective) appears 4 times in file |
| C2 | `präskriptiv` | adjective | `inSameFileDuplicate` | Duplicate term 'präskriptiv' (adjective) appears 4 times in file |
| C2 | `langwierig` | adjective | `inSameFileDuplicate` | Duplicate term 'langwierig' (adjective) appears 4 times in file |
| C2 | `reduktionistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'reduktionistisch' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `speziös` | adjective | `inSameFileDuplicate` | Duplicate term 'speziös' (adjective) appears 4 times in file |
| C2 | `spurios` | adjective | `inSameFileDuplicate` | Duplicate term 'spurios' (adjective) appears 4 times in file |
| C2 | `subversiv` | adjective | `inSameFileDuplicate` | Duplicate term 'subversiv' (adjective) appears 4 times in file |
| C2 | `implizit` | adjective | `inSameFileDuplicate` | Duplicate term 'implizit' (adjective) appears 4 times in file |
| C2 | `transitorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorisch' (adjective) appears 4 times in file |
| C2 | `ubiquitär` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquitär' (adjective) appears 4 times in file |
| C2 | `unmissverständlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unmissverständlich' (adjective) appears 4 times in file |
| C2 | `beispiellos` | adjective | `inSameFileDuplicate` | Duplicate term 'beispiellos' (adjective) appears 4 times in file |
| C2 | `unhaltbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unhaltbar' (adjective) appears 4 times in file |
| C2 | `schwerfällig` | adjective | `inSameFileDuplicate` | Duplicate term 'schwerfällig' (adjective) appears 4 times in file |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronistisch' (adjective) appears 4 times in file |
| C2 | `antithetisch` | adjective | `inSameFileDuplicate` | Duplicate term 'antithetisch' (adjective) appears 4 times in file |
| C2 | `arkan` | adjective | `inSameFileDuplicate` | Duplicate term 'arkan' (adjective) appears 4 times in file |
| C2 | `atypisch` | adjective | `inSameFileDuplicate` | Duplicate term 'atypisch' (adjective) appears 4 times in file |
| C2 | `binär` | adjective | `inSameFileDuplicate` | Duplicate term 'binär' (adjective) appears 4 times in file |
| C2 | `kategorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'kategorisch' (adjective) appears 4 times in file |
| C2 | `beherrscht` | adjective | `inSameFileDuplicate` | Duplicate term 'beherrscht' (adjective) appears 4 times in file |
| C2 | `verdeckt` | adjective | `inSameFileDuplicate` | Duplicate term 'verdeckt' (adjective) appears 4 times in file |
| C2 | `dialektisch` | adjective | `inSameFileDuplicate` | Duplicate term 'dialektisch' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `elusiv` | adjective | `inSameFileDuplicate` | Duplicate term 'elusiv' (adjective) appears 4 times in file |
| C2 | `esoterisch` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterisch' (adjective) appears 4 times in file |
| C2 | `trügerisch` | adjective | `inSameFileDuplicate` | Duplicate term 'trügerisch' (adjective) appears 4 times in file |
| C2 | `unveränderlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unveränderlich' (adjective) appears 4 times in file |
| C2 | `unparteiisch` | adjective | `inSameFileDuplicate` | Duplicate term 'unparteiisch' (adjective) appears 4 times in file |
| C2 | `inzidentell` | adjective | `inSameFileDuplicate` | Duplicate term 'inzidentell' (adjective) appears 4 times in file |
| C2 | `inhärent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhärent' (adjective) appears 4 times in file |
| C2 | `unnachahmlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unnachahmlich' (adjective) appears 4 times in file |
| C2 | `insidiös` | adjective | `inSameFileDuplicate` | Duplicate term 'insidiös' (adjective) appears 4 times in file |
| C2 | `unvereinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unvereinbar' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `vielfältig` | adjective | `inSameFileDuplicate` | Duplicate term 'vielfältig' (adjective) appears 4 times in file |
| C2 | `nebulös` | adjective | `inSameFileDuplicate` | Duplicate term 'nebulös' (adjective) appears 4 times in file |
| C2 | `normativ` | adjective | `inSameFileDuplicate` | Duplicate term 'normativ' (adjective) appears 4 times in file |
| C2 | `nuanciert` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanciert' (adjective) appears 4 times in file |
| C2 | `indirekt` | adjective | `inSameFileDuplicate` | Duplicate term 'indirekt' (adjective) appears 4 times in file |
| C2 | `opak` | adjective | `inSameFileDuplicate` | Duplicate term 'opak' (adjective) appears 4 times in file |
| C2 | `scheinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'scheinbar' (adjective) appears 4 times in file |
| C2 | `paradox` | adjective | `inSameFileDuplicate` | Duplicate term 'paradox' (adjective) appears 4 times in file |
| C2 | `durchdringend` | adjective | `inSameFileDuplicate` | Duplicate term 'durchdringend' (adjective) appears 4 times in file |
| C2 | `polarisierend` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisierend' (adjective) appears 4 times in file |
| C2 | `prekär` | adjective | `inSameFileDuplicate` | Duplicate term 'prekär' (adjective) appears 4 times in file |
| C2 | `präskriptiv` | adjective | `inSameFileDuplicate` | Duplicate term 'präskriptiv' (adjective) appears 4 times in file |
| C2 | `langwierig` | adjective | `inSameFileDuplicate` | Duplicate term 'langwierig' (adjective) appears 4 times in file |
| C2 | `reduktionistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'reduktionistisch' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `speziös` | adjective | `inSameFileDuplicate` | Duplicate term 'speziös' (adjective) appears 4 times in file |
| C2 | `spurios` | adjective | `inSameFileDuplicate` | Duplicate term 'spurios' (adjective) appears 4 times in file |
| C2 | `subversiv` | adjective | `inSameFileDuplicate` | Duplicate term 'subversiv' (adjective) appears 4 times in file |
| C2 | `implizit` | adjective | `inSameFileDuplicate` | Duplicate term 'implizit' (adjective) appears 4 times in file |
| C2 | `transitorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorisch' (adjective) appears 4 times in file |
| C2 | `ubiquitär` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquitär' (adjective) appears 4 times in file |
| C2 | `unmissverständlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unmissverständlich' (adjective) appears 4 times in file |
| C2 | `beispiellos` | adjective | `inSameFileDuplicate` | Duplicate term 'beispiellos' (adjective) appears 4 times in file |
| C2 | `unhaltbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unhaltbar' (adjective) appears 4 times in file |
| C2 | `schwerfällig` | adjective | `inSameFileDuplicate` | Duplicate term 'schwerfällig' (adjective) appears 4 times in file |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronistisch' (adjective) appears 4 times in file |
| C2 | `antithetisch` | adjective | `inSameFileDuplicate` | Duplicate term 'antithetisch' (adjective) appears 4 times in file |
| C2 | `arkan` | adjective | `inSameFileDuplicate` | Duplicate term 'arkan' (adjective) appears 4 times in file |
| C2 | `atypisch` | adjective | `inSameFileDuplicate` | Duplicate term 'atypisch' (adjective) appears 4 times in file |
| C2 | `binär` | adjective | `inSameFileDuplicate` | Duplicate term 'binär' (adjective) appears 4 times in file |
| C2 | `kategorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'kategorisch' (adjective) appears 4 times in file |
| C2 | `beherrscht` | adjective | `inSameFileDuplicate` | Duplicate term 'beherrscht' (adjective) appears 4 times in file |
| C2 | `verdeckt` | adjective | `inSameFileDuplicate` | Duplicate term 'verdeckt' (adjective) appears 4 times in file |
| C2 | `dialektisch` | adjective | `inSameFileDuplicate` | Duplicate term 'dialektisch' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `elusiv` | adjective | `inSameFileDuplicate` | Duplicate term 'elusiv' (adjective) appears 4 times in file |
| C2 | `esoterisch` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterisch' (adjective) appears 4 times in file |
| C2 | `trügerisch` | adjective | `inSameFileDuplicate` | Duplicate term 'trügerisch' (adjective) appears 4 times in file |
| C2 | `unveränderlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unveränderlich' (adjective) appears 4 times in file |
| C2 | `unparteiisch` | adjective | `inSameFileDuplicate` | Duplicate term 'unparteiisch' (adjective) appears 4 times in file |
| C2 | `inzidentell` | adjective | `inSameFileDuplicate` | Duplicate term 'inzidentell' (adjective) appears 4 times in file |
| C2 | `inhärent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhärent' (adjective) appears 4 times in file |
| C2 | `unnachahmlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unnachahmlich' (adjective) appears 4 times in file |
| C2 | `insidiös` | adjective | `inSameFileDuplicate` | Duplicate term 'insidiös' (adjective) appears 4 times in file |
| C2 | `unvereinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unvereinbar' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `vielfältig` | adjective | `inSameFileDuplicate` | Duplicate term 'vielfältig' (adjective) appears 4 times in file |
| C2 | `nebulös` | adjective | `inSameFileDuplicate` | Duplicate term 'nebulös' (adjective) appears 4 times in file |
| C2 | `normativ` | adjective | `inSameFileDuplicate` | Duplicate term 'normativ' (adjective) appears 4 times in file |
| C2 | `nuanciert` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanciert' (adjective) appears 4 times in file |
| C2 | `indirekt` | adjective | `inSameFileDuplicate` | Duplicate term 'indirekt' (adjective) appears 4 times in file |
| C2 | `opak` | adjective | `inSameFileDuplicate` | Duplicate term 'opak' (adjective) appears 4 times in file |
| C2 | `scheinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'scheinbar' (adjective) appears 4 times in file |
| C2 | `paradox` | adjective | `inSameFileDuplicate` | Duplicate term 'paradox' (adjective) appears 4 times in file |
| C2 | `durchdringend` | adjective | `inSameFileDuplicate` | Duplicate term 'durchdringend' (adjective) appears 4 times in file |
| C2 | `polarisierend` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisierend' (adjective) appears 4 times in file |
| C2 | `prekär` | adjective | `inSameFileDuplicate` | Duplicate term 'prekär' (adjective) appears 4 times in file |
| C2 | `präskriptiv` | adjective | `inSameFileDuplicate` | Duplicate term 'präskriptiv' (adjective) appears 4 times in file |
| C2 | `langwierig` | adjective | `inSameFileDuplicate` | Duplicate term 'langwierig' (adjective) appears 4 times in file |
| C2 | `reduktionistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'reduktionistisch' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `speziös` | adjective | `inSameFileDuplicate` | Duplicate term 'speziös' (adjective) appears 4 times in file |
| C2 | `spurios` | adjective | `inSameFileDuplicate` | Duplicate term 'spurios' (adjective) appears 4 times in file |
| C2 | `subversiv` | adjective | `inSameFileDuplicate` | Duplicate term 'subversiv' (adjective) appears 4 times in file |
| C2 | `implizit` | adjective | `inSameFileDuplicate` | Duplicate term 'implizit' (adjective) appears 4 times in file |
| C2 | `transitorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorisch' (adjective) appears 4 times in file |
| C2 | `ubiquitär` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquitär' (adjective) appears 4 times in file |
| C2 | `unmissverständlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unmissverständlich' (adjective) appears 4 times in file |
| C2 | `beispiellos` | adjective | `inSameFileDuplicate` | Duplicate term 'beispiellos' (adjective) appears 4 times in file |
| C2 | `unhaltbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unhaltbar' (adjective) appears 4 times in file |
| C2 | `schwerfällig` | adjective | `inSameFileDuplicate` | Duplicate term 'schwerfällig' (adjective) appears 4 times in file |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronistisch' (adjective) appears 4 times in file |
| C2 | `antithetisch` | adjective | `inSameFileDuplicate` | Duplicate term 'antithetisch' (adjective) appears 4 times in file |
| C2 | `arkan` | adjective | `inSameFileDuplicate` | Duplicate term 'arkan' (adjective) appears 4 times in file |
| C2 | `atypisch` | adjective | `inSameFileDuplicate` | Duplicate term 'atypisch' (adjective) appears 4 times in file |
| C2 | `binär` | adjective | `inSameFileDuplicate` | Duplicate term 'binär' (adjective) appears 4 times in file |
| C2 | `kategorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'kategorisch' (adjective) appears 4 times in file |
| C2 | `beherrscht` | adjective | `inSameFileDuplicate` | Duplicate term 'beherrscht' (adjective) appears 4 times in file |
| C2 | `verdeckt` | adjective | `inSameFileDuplicate` | Duplicate term 'verdeckt' (adjective) appears 4 times in file |
| C2 | `dialektisch` | adjective | `inSameFileDuplicate` | Duplicate term 'dialektisch' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `elusiv` | adjective | `inSameFileDuplicate` | Duplicate term 'elusiv' (adjective) appears 4 times in file |
| C2 | `esoterisch` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterisch' (adjective) appears 4 times in file |
| C2 | `trügerisch` | adjective | `inSameFileDuplicate` | Duplicate term 'trügerisch' (adjective) appears 4 times in file |
| C2 | `unveränderlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unveränderlich' (adjective) appears 4 times in file |
| C2 | `unparteiisch` | adjective | `inSameFileDuplicate` | Duplicate term 'unparteiisch' (adjective) appears 4 times in file |
| C2 | `inzidentell` | adjective | `inSameFileDuplicate` | Duplicate term 'inzidentell' (adjective) appears 4 times in file |
| C2 | `inhärent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhärent' (adjective) appears 4 times in file |
| C2 | `unnachahmlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unnachahmlich' (adjective) appears 4 times in file |
| C2 | `insidiös` | adjective | `inSameFileDuplicate` | Duplicate term 'insidiös' (adjective) appears 4 times in file |
| C2 | `unvereinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unvereinbar' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `vielfältig` | adjective | `inSameFileDuplicate` | Duplicate term 'vielfältig' (adjective) appears 4 times in file |
| C2 | `nebulös` | adjective | `inSameFileDuplicate` | Duplicate term 'nebulös' (adjective) appears 4 times in file |
| C2 | `normativ` | adjective | `inSameFileDuplicate` | Duplicate term 'normativ' (adjective) appears 4 times in file |
| C2 | `nuanciert` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanciert' (adjective) appears 4 times in file |
| C2 | `indirekt` | adjective | `inSameFileDuplicate` | Duplicate term 'indirekt' (adjective) appears 4 times in file |
| C2 | `opak` | adjective | `inSameFileDuplicate` | Duplicate term 'opak' (adjective) appears 4 times in file |
| C2 | `scheinbar` | adjective | `inSameFileDuplicate` | Duplicate term 'scheinbar' (adjective) appears 4 times in file |
| C2 | `paradox` | adjective | `inSameFileDuplicate` | Duplicate term 'paradox' (adjective) appears 4 times in file |
| C2 | `durchdringend` | adjective | `inSameFileDuplicate` | Duplicate term 'durchdringend' (adjective) appears 4 times in file |
| C2 | `polarisierend` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisierend' (adjective) appears 4 times in file |
| C2 | `prekär` | adjective | `inSameFileDuplicate` | Duplicate term 'prekär' (adjective) appears 4 times in file |
| C2 | `präskriptiv` | adjective | `inSameFileDuplicate` | Duplicate term 'präskriptiv' (adjective) appears 4 times in file |
| C2 | `langwierig` | adjective | `inSameFileDuplicate` | Duplicate term 'langwierig' (adjective) appears 4 times in file |
| C2 | `reduktionistisch` | adjective | `inSameFileDuplicate` | Duplicate term 'reduktionistisch' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `speziös` | adjective | `inSameFileDuplicate` | Duplicate term 'speziös' (adjective) appears 4 times in file |
| C2 | `spurios` | adjective | `inSameFileDuplicate` | Duplicate term 'spurios' (adjective) appears 4 times in file |
| C2 | `subversiv` | adjective | `inSameFileDuplicate` | Duplicate term 'subversiv' (adjective) appears 4 times in file |
| C2 | `implizit` | adjective | `inSameFileDuplicate` | Duplicate term 'implizit' (adjective) appears 4 times in file |
| C2 | `transitorisch` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorisch' (adjective) appears 4 times in file |
| C2 | `ubiquitär` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquitär' (adjective) appears 4 times in file |
| C2 | `unmissverständlich` | adjective | `inSameFileDuplicate` | Duplicate term 'unmissverständlich' (adjective) appears 4 times in file |
| C2 | `beispiellos` | adjective | `inSameFileDuplicate` | Duplicate term 'beispiellos' (adjective) appears 4 times in file |
| C2 | `unhaltbar` | adjective | `inSameFileDuplicate` | Duplicate term 'unhaltbar' (adjective) appears 4 times in file |
| C2 | `schwerfällig` | adjective | `inSameFileDuplicate` | Duplicate term 'schwerfällig' (adjective) appears 4 times in file |

#### File: `vocabulary/de/C2/verbs.js` (114 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `reifizieren` | verb | `inSameFileDuplicate` | Duplicate term 'reifizieren' (verb) appears 2 times in file |
| C2 | `sublimieren` | verb | `inSameFileDuplicate` | Duplicate term 'sublimieren' (verb) appears 2 times in file |
| C2 | `basieren auf` | verb | `inSameFileDuplicate` | Duplicate term 'basieren auf' (verb) appears 2 times in file |
| C2 | `instanziieren` | verb | `inSameFileDuplicate` | Duplicate term 'instanziieren' (verb) appears 2 times in file |
| C2 | `negieren` | verb | `inSameFileDuplicate` | Duplicate term 'negieren' (verb) appears 2 times in file |
| C2 | `transzendieren` | verb | `inSameFileDuplicate` | Duplicate term 'transzendieren' (verb) appears 2 times in file |
| C2 | `vermitteln` | verb | `inSameFileDuplicate` | Duplicate term 'vermitteln' (verb) appears 2 times in file |
| C2 | `elidieren` | verb | `inSameFileDuplicate` | Duplicate term 'elidieren' (verb) appears 2 times in file |
| C2 | `verschleiern` | verb | `inSameFileDuplicate` | Duplicate term 'verschleiern' (verb) appears 2 times in file |
| C2 | `verschmelzen` | verb | `inSameFileDuplicate` | Duplicate term 'verschmelzen' (verb) appears 2 times in file |
| C2 | `sich berufen auf` | verb | `inSameFileDuplicate` | Duplicate term 'sich berufen auf' (verb) appears 2 times in file |
| C2 | `in den Vordergrund stellen` | verb | `inSameFileDuplicate` | Duplicate term 'in den Vordergrund stellen' (verb) appears 2 times in file |
| C2 | `rekuperieren` | verb | `inSameFileDuplicate` | Duplicate term 'rekuperieren' (verb) appears 2 times in file |
| C2 | `destabilisieren` | verb | `inSameFileDuplicate` | Duplicate term 'destabilisieren' (verb) appears 2 times in file |
| C2 | `kommodifizieren` | verb | `inSameFileDuplicate` | Duplicate term 'kommodifizieren' (verb) appears 2 times in file |
| C2 | `instrumentalisieren` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentalisieren' (verb) appears 2 times in file |
| C2 | `valorisieren` | verb | `inSameFileDuplicate` | Duplicate term 'valorisieren' (verb) appears 2 times in file |
| C2 | `fetischisieren` | verb | `inSameFileDuplicate` | Duplicate term 'fetischisieren' (verb) appears 2 times in file |
| C2 | `hegemonisieren` | verb | `inSameFileDuplicate` | Duplicate term 'hegemonisieren' (verb) appears 2 times in file |
| C2 | `entfremden` | verb | `inSameFileDuplicate` | Duplicate term 'entfremden' (verb) appears 2 times in file |
| C2 | `demarkieren` | verb | `inSameFileDuplicate` | Duplicate term 'demarkieren' (verb) appears 2 times in file |
| C2 | `eingrenzen` | verb | `inSameFileDuplicate` | Duplicate term 'eingrenzen' (verb) appears 2 times in file |
| C2 | `entgegenstehen` | verb | `inSameFileDuplicate` | Duplicate term 'entgegenstehen' (verb) appears 2 times in file |
| C2 | `beeinträchtigen` | verb | `inSameFileDuplicate` | Duplicate term 'beeinträchtigen' (verb) appears 2 times in file |
| C2 | `bestreiten` | verb | `inSameFileDuplicate` | Duplicate term 'bestreiten' (verb) appears 2 times in file |
| C2 | `aufheben` | verb | `inSameFileDuplicate` | Duplicate term 'aufheben' (verb) appears 2 times in file |
| C2 | `dekonstruieren` | verb | `inSameFileDuplicate` | Duplicate term 'dekonstruieren' (verb) appears 2 times in file |
| C2 | `problematisieren` | verb | `inSameFileDuplicate` | Duplicate term 'problematisieren' (verb) appears 2 times in file |
| C2 | `analysieren` | verb | `inSameFileDuplicate` | Duplicate term 'analysieren' (verb) appears 2 times in file |
| C2 | `ausschließen` | verb | `inSameFileDuplicate` | Duplicate term 'ausschließen' (verb) appears 4 times in file |
| C2 | `dialektisieren` | verb | `inSameFileDuplicate` | Duplicate term 'dialektisieren' (verb) appears 2 times in file |
| C2 | `verstoßen gegen` | verb | `inSameFileDuplicate` | Duplicate term 'verstoßen gegen' (verb) appears 2 times in file |
| C2 | `subsumieren` | verb | `inSameFileDuplicate` | Duplicate term 'subsumieren' (verb) appears 2 times in file |
| C2 | `akzentuieren` | verb | `inSameFileDuplicate` | Duplicate term 'akzentuieren' (verb) appears 2 times in file |
| C2 | `einwilligen` | verb | `inSameFileDuplicate` | Duplicate term 'einwilligen' (verb) appears 2 times in file |
| C2 | `lindern` | verb | `inSameFileDuplicate` | Duplicate term 'lindern' (verb) appears 2 times in file |
| C2 | `umgehen` | verb | `inSameFileDuplicate` | Duplicate term 'umgehen' (verb) appears 2 times in file |
| C2 | `bestätigen` | verb | `inSameFileDuplicate` | Duplicate term 'bestätigen' (verb) appears 2 times in file |
| C2 | `verbreiten` | verb | `inSameFileDuplicate` | Duplicate term 'verbreiten' (verb) appears 2 times in file |
| C2 | `zusammenfassen` | verb | `inSameFileDuplicate` | Duplicate term 'zusammenfassen' (verb) appears 2 times in file |
| C2 | `hervorrufen` | verb | `inSameFileDuplicate` | Duplicate term 'hervorrufen' (verb) appears 2 times in file |
| C2 | `verschlimmern` | verb | `inSameFileDuplicate` | Duplicate term 'verschlimmern' (verb) appears 2 times in file |
| C2 | `exemplifizieren` | verb | `inSameFileDuplicate` | Duplicate term 'exemplifizieren' (verb) appears 2 times in file |
| C2 | `behindern` | verb | `inSameFileDuplicate` | Duplicate term 'behindern' (verb) appears 2 times in file |
| C2 | `mildern` | verb | `inSameFileDuplicate` | Duplicate term 'mildern' (verb) appears 2 times in file |
| C2 | `verpflichten` | verb | `inSameFileDuplicate` | Duplicate term 'verpflichten' (verb) appears 2 times in file |
| C2 | `durchdringen` | verb | `inSameFileDuplicate` | Duplicate term 'durchdringen' (verb) appears 2 times in file |
| C2 | `ausschließen` | verb | `inSameFileDuplicate` | Duplicate term 'ausschließen' (verb) appears 4 times in file |
| C2 | `vereinbaren` | verb | `inSameFileDuplicate` | Duplicate term 'vereinbaren' (verb) appears 2 times in file |
| C2 | `ersetzen` | verb | `inSameFileDuplicate` | Duplicate term 'ersetzen' (verb) appears 2 times in file |
| C2 | `untermauern` | verb | `inSameFileDuplicate` | Duplicate term 'untermauern' (verb) appears 2 times in file |
| C2 | `rechtfertigen` | verb | `inSameFileDuplicate` | Duplicate term 'rechtfertigen' (verb) appears 2 times in file |
| C2 | `abhängen von` | verb | `inSameFileDuplicate` | Duplicate term 'abhängen von' (verb) appears 2 times in file |
| C2 | `ringen mit` | verb | `inSameFileDuplicate` | Duplicate term 'ringen mit' (verb) appears 2 times in file |
| C2 | `beschönigen` | verb | `inSameFileDuplicate` | Duplicate term 'beschönigen' (verb) appears 2 times in file |
| C2 | `kaschieren` | verb | `inSameFileDuplicate` | Duplicate term 'kaschieren' (verb) appears 2 times in file |
| C2 | `Paradigmenwechsel` | verb | `inSameFileDuplicate` | Duplicate term 'Paradigmenwechsel' (verb) appears 2 times in file |
| C2 | `reifizieren` | verb | `inSameFileDuplicate` | Duplicate term 'reifizieren' (verb) appears 2 times in file |
| C2 | `sublimieren` | verb | `inSameFileDuplicate` | Duplicate term 'sublimieren' (verb) appears 2 times in file |
| C2 | `basieren auf` | verb | `inSameFileDuplicate` | Duplicate term 'basieren auf' (verb) appears 2 times in file |
| C2 | `instanziieren` | verb | `inSameFileDuplicate` | Duplicate term 'instanziieren' (verb) appears 2 times in file |
| C2 | `negieren` | verb | `inSameFileDuplicate` | Duplicate term 'negieren' (verb) appears 2 times in file |
| C2 | `transzendieren` | verb | `inSameFileDuplicate` | Duplicate term 'transzendieren' (verb) appears 2 times in file |
| C2 | `vermitteln` | verb | `inSameFileDuplicate` | Duplicate term 'vermitteln' (verb) appears 2 times in file |
| C2 | `elidieren` | verb | `inSameFileDuplicate` | Duplicate term 'elidieren' (verb) appears 2 times in file |
| C2 | `verschleiern` | verb | `inSameFileDuplicate` | Duplicate term 'verschleiern' (verb) appears 2 times in file |
| C2 | `verschmelzen` | verb | `inSameFileDuplicate` | Duplicate term 'verschmelzen' (verb) appears 2 times in file |
| C2 | `sich berufen auf` | verb | `inSameFileDuplicate` | Duplicate term 'sich berufen auf' (verb) appears 2 times in file |
| C2 | `in den Vordergrund stellen` | verb | `inSameFileDuplicate` | Duplicate term 'in den Vordergrund stellen' (verb) appears 2 times in file |
| C2 | `rekuperieren` | verb | `inSameFileDuplicate` | Duplicate term 'rekuperieren' (verb) appears 2 times in file |
| C2 | `destabilisieren` | verb | `inSameFileDuplicate` | Duplicate term 'destabilisieren' (verb) appears 2 times in file |
| C2 | `kommodifizieren` | verb | `inSameFileDuplicate` | Duplicate term 'kommodifizieren' (verb) appears 2 times in file |
| C2 | `instrumentalisieren` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentalisieren' (verb) appears 2 times in file |
| C2 | `valorisieren` | verb | `inSameFileDuplicate` | Duplicate term 'valorisieren' (verb) appears 2 times in file |
| C2 | `fetischisieren` | verb | `inSameFileDuplicate` | Duplicate term 'fetischisieren' (verb) appears 2 times in file |
| C2 | `hegemonisieren` | verb | `inSameFileDuplicate` | Duplicate term 'hegemonisieren' (verb) appears 2 times in file |
| C2 | `entfremden` | verb | `inSameFileDuplicate` | Duplicate term 'entfremden' (verb) appears 2 times in file |
| C2 | `demarkieren` | verb | `inSameFileDuplicate` | Duplicate term 'demarkieren' (verb) appears 2 times in file |
| C2 | `eingrenzen` | verb | `inSameFileDuplicate` | Duplicate term 'eingrenzen' (verb) appears 2 times in file |
| C2 | `entgegenstehen` | verb | `inSameFileDuplicate` | Duplicate term 'entgegenstehen' (verb) appears 2 times in file |
| C2 | `beeinträchtigen` | verb | `inSameFileDuplicate` | Duplicate term 'beeinträchtigen' (verb) appears 2 times in file |
| C2 | `bestreiten` | verb | `inSameFileDuplicate` | Duplicate term 'bestreiten' (verb) appears 2 times in file |
| C2 | `aufheben` | verb | `inSameFileDuplicate` | Duplicate term 'aufheben' (verb) appears 2 times in file |
| C2 | `dekonstruieren` | verb | `inSameFileDuplicate` | Duplicate term 'dekonstruieren' (verb) appears 2 times in file |
| C2 | `problematisieren` | verb | `inSameFileDuplicate` | Duplicate term 'problematisieren' (verb) appears 2 times in file |
| C2 | `analysieren` | verb | `inSameFileDuplicate` | Duplicate term 'analysieren' (verb) appears 2 times in file |
| C2 | `ausschließen` | verb | `inSameFileDuplicate` | Duplicate term 'ausschließen' (verb) appears 4 times in file |
| C2 | `dialektisieren` | verb | `inSameFileDuplicate` | Duplicate term 'dialektisieren' (verb) appears 2 times in file |
| C2 | `verstoßen gegen` | verb | `inSameFileDuplicate` | Duplicate term 'verstoßen gegen' (verb) appears 2 times in file |
| C2 | `subsumieren` | verb | `inSameFileDuplicate` | Duplicate term 'subsumieren' (verb) appears 2 times in file |
| C2 | `akzentuieren` | verb | `inSameFileDuplicate` | Duplicate term 'akzentuieren' (verb) appears 2 times in file |
| C2 | `einwilligen` | verb | `inSameFileDuplicate` | Duplicate term 'einwilligen' (verb) appears 2 times in file |
| C2 | `lindern` | verb | `inSameFileDuplicate` | Duplicate term 'lindern' (verb) appears 2 times in file |
| C2 | `umgehen` | verb | `inSameFileDuplicate` | Duplicate term 'umgehen' (verb) appears 2 times in file |
| C2 | `bestätigen` | verb | `inSameFileDuplicate` | Duplicate term 'bestätigen' (verb) appears 2 times in file |
| C2 | `verbreiten` | verb | `inSameFileDuplicate` | Duplicate term 'verbreiten' (verb) appears 2 times in file |
| C2 | `zusammenfassen` | verb | `inSameFileDuplicate` | Duplicate term 'zusammenfassen' (verb) appears 2 times in file |
| C2 | `hervorrufen` | verb | `inSameFileDuplicate` | Duplicate term 'hervorrufen' (verb) appears 2 times in file |
| C2 | `verschlimmern` | verb | `inSameFileDuplicate` | Duplicate term 'verschlimmern' (verb) appears 2 times in file |
| C2 | `exemplifizieren` | verb | `inSameFileDuplicate` | Duplicate term 'exemplifizieren' (verb) appears 2 times in file |
| C2 | `behindern` | verb | `inSameFileDuplicate` | Duplicate term 'behindern' (verb) appears 2 times in file |
| C2 | `mildern` | verb | `inSameFileDuplicate` | Duplicate term 'mildern' (verb) appears 2 times in file |
| C2 | `verpflichten` | verb | `inSameFileDuplicate` | Duplicate term 'verpflichten' (verb) appears 2 times in file |
| C2 | `durchdringen` | verb | `inSameFileDuplicate` | Duplicate term 'durchdringen' (verb) appears 2 times in file |
| C2 | `ausschließen` | verb | `inSameFileDuplicate` | Duplicate term 'ausschließen' (verb) appears 4 times in file |
| C2 | `vereinbaren` | verb | `inSameFileDuplicate` | Duplicate term 'vereinbaren' (verb) appears 2 times in file |
| C2 | `ersetzen` | verb | `inSameFileDuplicate` | Duplicate term 'ersetzen' (verb) appears 2 times in file |
| C2 | `untermauern` | verb | `inSameFileDuplicate` | Duplicate term 'untermauern' (verb) appears 2 times in file |
| C2 | `rechtfertigen` | verb | `inSameFileDuplicate` | Duplicate term 'rechtfertigen' (verb) appears 2 times in file |
| C2 | `abhängen von` | verb | `inSameFileDuplicate` | Duplicate term 'abhängen von' (verb) appears 2 times in file |
| C2 | `ringen mit` | verb | `inSameFileDuplicate` | Duplicate term 'ringen mit' (verb) appears 2 times in file |
| C2 | `beschönigen` | verb | `inSameFileDuplicate` | Duplicate term 'beschönigen' (verb) appears 2 times in file |
| C2 | `kaschieren` | verb | `inSameFileDuplicate` | Duplicate term 'kaschieren' (verb) appears 2 times in file |
| C2 | `Paradigmenwechsel` | verb | `inSameFileDuplicate` | Duplicate term 'Paradigmenwechsel' (verb) appears 2 times in file |

### EL (Greek) — 420 Flagged Entries out of 1023 Category (a) Entries

#### File: `vocabulary/el/B1/adjectives.js` (4 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `αυτοαπασχολούμενος` | adjective | `inSameFileDuplicate` | Duplicate term 'αυτοαπασχολούμενος' (adjective) appears 2 times in file |
| B1 | `βιώσιμος` | adjective | `inSameFileDuplicate` | Duplicate term 'βιώσιμος' (adjective) appears 2 times in file |
| B1 | `αυτοαπασχολούμενος` | adjective | `inSameFileDuplicate` | Duplicate term 'αυτοαπασχολούμενος' (adjective) appears 2 times in file |
| B1 | `βιώσιμος` | adjective | `inSameFileDuplicate` | Duplicate term 'βιώσιμος' (adjective) appears 2 times in file |

#### File: `vocabulary/el/B1/locations.js` (11 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Πελοπόννησος` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Αυστραλία` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ιαπωνία` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Βραζιλία` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ινδία` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Τόκιο` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Σίδνεϊ` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Πεκίνο` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ρίο ντε Τζανέιρο` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Κάιρο` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Δελχί` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/B1/people.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Πλάτωνας` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Μελίνα Μερκούρη` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/B1/quotes.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Σκέφτομαι, άρα υπάρχω.` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Η γνώση είναι δύναμη.` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/B1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Πώς έχουν αλλάξει τα μέσα κοινωνικής δικτύωσης την καθημερινή επικοινωνία με τους φίλους σας;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ποιους παράγοντες θεωρείτε πιο σημαντικούς όταν επιλέγετε μια επαγγελματική πορεία;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Με ποιον τρόπο η ζωή σε μια μεγάλη πόλη επηρεάζει την ψυχική ευημερία του ανθρώπου;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Πώς εξελίσσονται οι οικογενειακές παραδόσεις ανάμεσα στις διαφορετικές γενιές;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ποιο ρόλο οφείλουν να παίζουν οι προσωπικές οικολογικές συνήθειες στην προστασία του περιβάλλοντος;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Πώς μπορούν τα χόμπι να συμβάλουν στη διατήρηση μιας υγιούς ισορροπίας μεταξύ εργασίας και προσωπικής ζωής;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ποια είναι τα κύρια πλεονεκτήματα και μειονεκτήματα της τακτικής εξ αποστάσεως εργασίας;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Πώς επηρεάζει το ταξίδι σε άγνωστους προορισμούς τη κοσμοθεωρία ενός ατόμου;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Πρέπει οι πρακτικές δεξιότητες ζωής να αποκτούν ίση προτεραιότητα με τα ακαδημαϊκά μαθήματα στο σχολείο;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Πώς επηρεάζει η διαφήμιση τις καθημερινές αγοραστικές μας αποφάσεις;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/B1/verbs.js` (4 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `κάνω κηπουρική` | verb | `inSameFileDuplicate` | Duplicate term 'κάνω κηπουρική' (verb) appears 2 times in file |
| B1 | `κάνω εθελοντισμό` | verb | `inSameFileDuplicate` | Duplicate term 'κάνω εθελοντισμό' (verb) appears 2 times in file |
| B1 | `κάνω κηπουρική` | verb | `inSameFileDuplicate` | Duplicate term 'κάνω κηπουρική' (verb) appears 2 times in file |
| B1 | `κάνω εθελοντισμό` | verb | `inSameFileDuplicate` | Duplicate term 'κάνω εθελοντισμό' (verb) appears 2 times in file |

#### File: `vocabulary/el/B1/vocabulary.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | *(EMPTY)* | noun | `emptyField` | Word/term field is empty or whitespace-only |

#### File: `vocabulary/el/B2/adjectives.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `βιώσιμος` | adjective | `inSameFileDuplicate` | Duplicate term 'βιώσιμος' (adjective) appears 2 times in file |
| B2 | `πολιτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολιτικός' (adjective) appears 2 times in file |
| B2 | `χρόνιος` | adjective | `inSameFileDuplicate` | Duplicate term 'χρόνιος' (adjective) appears 2 times in file |
| B2 | `προληπτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'προληπτικός' (adjective) appears 2 times in file |
| B2 | `ηθικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ηθικός' (adjective) appears 2 times in file |
| B2 | `βιώσιμος` | adjective | `inSameFileDuplicate` | Duplicate term 'βιώσιμος' (adjective) appears 2 times in file |
| B2 | `πολιτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολιτικός' (adjective) appears 2 times in file |
| B2 | `χρόνιος` | adjective | `inSameFileDuplicate` | Duplicate term 'χρόνιος' (adjective) appears 2 times in file |
| B2 | `προληπτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'προληπτικός' (adjective) appears 2 times in file |
| B2 | `ηθικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ηθικός' (adjective) appears 2 times in file |

#### File: `vocabulary/el/B2/fluency.js` (22 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |

#### File: `vocabulary/el/B2/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/el/B2/people.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `Μαρία Κάλλας` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Οδυσσέας Ελύτης` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/B2/quotes.js` (41 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 41 times in file |

#### File: `vocabulary/el/B2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `Σε ποιο βαθμό η αλγοριθμική επιμέλεια των μέσων κοινωνικής δικτύωσης απομονώνει τα άτομα σε θαλάμους αντήχησης;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Πρέπει οι κυβερνήσεις να θεσπίσουν αυστηρούς κανονισμούς για την ανάπτυξη της τεχνητής νοημοσύνης ώστε να προστατευθεί η απασχόληση;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Πόσο σημαντικά επηρεάζει το κοινωνικοοικονομικό υπόβαθρο τη μακροπρόθεσμη εκπαιδευτική επίδοση;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Απειλεί η παγκοσμιοποίηση την αυθεντικότητα των περιφερειακών πολιτιστικών ταυτοτήτων ή τις εμπλουτίζει;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Πόσο αποτελεσματικά μπορούν οι εταιρικές οικολογικές δεσμεύσεις να αντιμετωπίσουν την κλιματική αλλαγή χωρίς συστημικές μεταρρυθμίσεις;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Αποτελεί η δημόσια αναγνώριση ή το εσωτερικό προσωπικό πάθος πιο βιώσιμο κινητήριο μοχλό επαγγελματικής επιτυχίας;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Πώς έχει μετασχηματίσει η εξάπλωση των πλατφορμών ευκαιριακής εργασίας τις παραδοσιακές προστασίες των εργαζομένων;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Σε ποιο βαθμό πρέπει τα δημόσια συστήματα υγείας να δίνουν προτεραιότητα στη προληπτική ευεξία έναντι της θεραπευτικής αγωγής;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Μπορεί η σύγχρονη τέχνη να αμφισβητήσει ουσιαστικά τους κοινωνικούς κανόνες εάν εμπορευματοποιείται από ελίτ αγορές;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Πρέπει τα ιδρύματα ανώτατης εκπαίδευσης να καταργήσουν πλήρως τις τυποποιημένες εξετάσεις κατά τις εισαγωγικές διαδικασίες;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/B2/verbs.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `ισχυρίζονται ότι` | verb | `inSameFileDuplicate` | Duplicate term 'ισχυρίζονται ότι' (verb) appears 2 times in file |
| B2 | `ισχυρίζονται ότι` | verb | `inSameFileDuplicate` | Duplicate term 'ισχυρίζονται ότι' (verb) appears 2 times in file |

#### File: `vocabulary/el/C1/fluency.js` (22 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |

#### File: `vocabulary/el/C1/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/el/C1/people.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Νίκος Καζαντζάκης` | - | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'Νίκος Καζαντζάκης' (no-form) appears 2 times in file |
| C1 | `Νίκος Καζαντζάκης` | - | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'Νίκος Καζαντζάκης' (no-form) appears 2 times in file |

#### File: `vocabulary/el/C1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Πώς οι λεπτές γνωστικές μεροληψίες υπονομεύουν την αντικειμενική λήψη αποφάσεων στην εταιρική ηγεσία;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Σε ποιο βαθμό το δίκαιο πνευματικής ιδιοκτησίας δυσκολεύεται να προσαρμοστεί στα δημιουργικά προϊόντα της παραγωγικής τεχνητής νοημοσύνης;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Έχει ο αρχιτεκτονικός αστικός σχεδιασμός τη δύναμη να αποδομήσει τον περιχαρακωμένο κοινωνικό διαχωρισμό;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Πώς η γλωσσική σχετικότητα διαμορφώνει εννοιολογικά πλαίσια σε διαφορετικά πολιτισμικά παραδείγματα;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Μπορούν οι εταιρικοί δείκτες ESG να επιβάλουν ουσιαστική ηθική λογοδοσία ή απλώς ενθαρρύνουν το greenwashing;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Πώς οι δημογραφικές μεταβολές αμφισβητούν τα εδραιωμένα συστήματα κοινωνικής ασφάλισης παγκοσμίως;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Σε ποιο βαθμό πρέπει η δημόσια χρηματοδότηση να δίνει προτεραιότητα στη διαστημική έρευνα έναντι των γήινων κρίσεων;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Πώς η διάχυτη ψηφιακή επιτήρηση αλλοιώνει τη ψυχολογική σχέση των πολιτών με την κρατική εξουσία;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Μπορεί η ανθρώπινη ιστορική μνήμη να διατηρήσει την αυθεντικότητά της στην εποχή των συνθετικών μέσων;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Πρέπει τα βιοηθικά πλαίσια να επιτρέπουν τη γενετική τροποποίηση της βλαστικής σειράς για μη θεραπευτική βελτίωση;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/C1/vocabulary.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `υποδομή` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/C2/adjectives.js` (118 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `διεπιστημονικός` | adjective | `inSameFileDuplicate` | Duplicate term 'διεπιστημονικός' (adjective) appears 2 times in file |
| C2 | `ερμηνευτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ερμηνευτικός' (adjective) appears 2 times in file |
| C2 | `ταυτολογικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ταυτολογικός' (adjective) appears 2 times in file |
| C2 | `πολύσημος` | adjective | `inSameFileDuplicate` | Duplicate term 'πολύσημος' (adjective) appears 2 times in file |
| C2 | `ευρετικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ευρετικός' (adjective) appears 2 times in file |
| C2 | `μετα-αποικιακός` | adjective | `inSameFileDuplicate` | Duplicate term 'μετα-αποικιακός' (adjective) appears 2 times in file |
| C2 | `πολυπολικός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολυπολικός' (adjective) appears 2 times in file |
| C2 | `κοσμοπολίτικος` | adjective | `inSameFileDuplicate` | Duplicate term 'κοσμοπολίτικος' (adjective) appears 2 times in file |
| C2 | `ναρκισσιστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ναρκισσιστικός' (adjective) appears 2 times in file |
| C2 | `ετερόδοξος` | adjective | `inSameFileDuplicate` | Duplicate term 'ετερόδοξος' (adjective) appears 2 times in file |
| C2 | `εγγενής` | adjective | `inSameFileDuplicate` | Duplicate term 'εγγενής' (adjective) appears 2 times in file |
| C2 | `απότομος` | adjective | `inSameFileDuplicate` | Duplicate term 'απότομος' (adjective) appears 2 times in file |
| C2 | `δυσνόητος` | adjective | `inSameFileDuplicate` | Duplicate term 'δυσνόητος' (adjective) appears 2 times in file |
| C2 | `αναχρονιστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'αναχρονιστικός' (adjective) appears 2 times in file |
| C2 | `αντιθετικός` | adjective | `inSameFileDuplicate` | Duplicate term 'αντιθετικός' (adjective) appears 2 times in file |
| C2 | `απόκρυφος` | adjective | `inSameFileDuplicate` | Duplicate term 'απόκρυφος' (adjective) appears 2 times in file |
| C2 | `άτυπος` | adjective | `inSameFileDuplicate` | Duplicate term 'άτυπος' (adjective) appears 2 times in file |
| C2 | `δυαδικός` | adjective | `inSameFileDuplicate` | Duplicate term 'δυαδικός' (adjective) appears 2 times in file |
| C2 | `κατηγορηματικός` | adjective | `inSameFileDuplicate` | Duplicate term 'κατηγορηματικός' (adjective) appears 2 times in file |
| C2 | `περίσκεπτος` | adjective | `inSameFileDuplicate` | Duplicate term 'περίσκεπτος' (adjective) appears 2 times in file |
| C2 | `κρυφός` | adjective | `inSameFileDuplicate` | Duplicate term 'κρυφός' (adjective) appears 2 times in file |
| C2 | `διάχυτος` | adjective | `inSameFileDuplicate` | Duplicate term 'διάχυτος' (adjective) appears 4 times in file |
| C2 | `ασύλληπτος` | adjective | `inSameFileDuplicate` | Duplicate term 'ασύλληπτος' (adjective) appears 2 times in file |
| C2 | `εσωτερικός` | adjective | `inSameFileDuplicate` | Duplicate term 'εσωτερικός' (adjective) appears 2 times in file |
| C2 | `εσφαλμένος` | adjective | `inSameFileDuplicate` | Duplicate term 'εσφαλμένος' (adjective) appears 2 times in file |
| C2 | `αμετάβλητος` | adjective | `inSameFileDuplicate` | Duplicate term 'αμετάβλητος' (adjective) appears 2 times in file |
| C2 | `αμερόληπτος` | adjective | `inSameFileDuplicate` | Duplicate term 'αμερόληπτος' (adjective) appears 2 times in file |
| C2 | `συμπτωματικός` | adjective | `inSameFileDuplicate` | Duplicate term 'συμπτωματικός' (adjective) appears 2 times in file |
| C2 | `εμφυτος` | adjective | `inSameFileDuplicate` | Duplicate term 'εμφυτος' (adjective) appears 2 times in file |
| C2 | `απαράμιλλος` | adjective | `inSameFileDuplicate` | Duplicate term 'απαράμιλλος' (adjective) appears 2 times in file |
| C2 | `ύπουλος` | adjective | `inSameFileDuplicate` | Duplicate term 'ύπουλος' (adjective) appears 2 times in file |
| C2 | `ασυμβίβαστος` | adjective | `inSameFileDuplicate` | Duplicate term 'ασυμβίβαστος' (adjective) appears 2 times in file |
| C2 | `μεταιχμιακός` | adjective | `inSameFileDuplicate` | Duplicate term 'μεταιχμιακός' (adjective) appears 2 times in file |
| C2 | `πολλαπλός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολλαπλός' (adjective) appears 2 times in file |
| C2 | `νεφελώδης` | adjective | `inSameFileDuplicate` | Duplicate term 'νεφελώδης' (adjective) appears 2 times in file |
| C2 | `κανονιστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'κανονιστικός' (adjective) appears 2 times in file |
| C2 | `λεπτομερής` | adjective | `inSameFileDuplicate` | Duplicate term 'λεπτομερής' (adjective) appears 2 times in file |
| C2 | `πλάγιος` | adjective | `inSameFileDuplicate` | Duplicate term 'πλάγιος' (adjective) appears 2 times in file |
| C2 | `αδιαφανής` | adjective | `inSameFileDuplicate` | Duplicate term 'αδιαφανής' (adjective) appears 2 times in file |
| C2 | `φαινομενικός` | adjective | `inSameFileDuplicate` | Duplicate term 'φαινομενικός' (adjective) appears 2 times in file |
| C2 | `παραδοξικός` | adjective | `inSameFileDuplicate` | Duplicate term 'παραδοξικός' (adjective) appears 2 times in file |
| C2 | `διάχυτος` | adjective | `inSameFileDuplicate` | Duplicate term 'διάχυτος' (adjective) appears 4 times in file |
| C2 | `πολωτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολωτικός' (adjective) appears 2 times in file |
| C2 | `επισφαλής` | adjective | `inSameFileDuplicate` | Duplicate term 'επισφαλής' (adjective) appears 2 times in file |
| C2 | `προδιαγραφικός` | adjective | `inSameFileDuplicate` | Duplicate term 'προδιαγραφικός' (adjective) appears 2 times in file |
| C2 | `παρατεταμένος` | adjective | `inSameFileDuplicate` | Duplicate term 'παρατεταμένος' (adjective) appears 2 times in file |
| C2 | `αναγωγικός` | adjective | `inSameFileDuplicate` | Duplicate term 'αναγωγικός' (adjective) appears 2 times in file |
| C2 | `καθοριστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'καθοριστικός' (adjective) appears 2 times in file |
| C2 | `ευειδής` | adjective | `inSameFileDuplicate` | Duplicate term 'ευειδής' (adjective) appears 2 times in file |
| C2 | `νόθος` | adjective | `inSameFileDuplicate` | Duplicate term 'νόθος' (adjective) appears 2 times in file |
| C2 | `ανατρεπτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ανατρεπτικός' (adjective) appears 2 times in file |
| C2 | `σιωπηρός` | adjective | `inSameFileDuplicate` | Duplicate term 'σιωπηρός' (adjective) appears 2 times in file |
| C2 | `ισχνός` | adjective | `inSameFileDuplicate` | Duplicate term 'ισχνός' (adjective) appears 2 times in file |
| C2 | `παροδικός` | adjective | `inSameFileDuplicate` | Duplicate term 'παροδικός' (adjective) appears 2 times in file |
| C2 | `πανταχού παρών` | adjective | `inSameFileDuplicate` | Duplicate term 'πανταχού παρών' (adjective) appears 2 times in file |
| C2 | `μονοσήμαντος` | adjective | `inSameFileDuplicate` | Duplicate term 'μονοσήμαντος' (adjective) appears 2 times in file |
| C2 | `άνευ προηγουμένου` | adjective | `inSameFileDuplicate` | Duplicate term 'άνευ προηγουμένου' (adjective) appears 2 times in file |
| C2 | `ανυπόστατος` | adjective | `inSameFileDuplicate` | Duplicate term 'ανυπόστατος' (adjective) appears 2 times in file |
| C2 | `δυσκίνητος` | adjective | `inSameFileDuplicate` | Duplicate term 'δυσκίνητος' (adjective) appears 2 times in file |
| C2 | `διεπιστημονικός` | adjective | `inSameFileDuplicate` | Duplicate term 'διεπιστημονικός' (adjective) appears 2 times in file |
| C2 | `ερμηνευτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ερμηνευτικός' (adjective) appears 2 times in file |
| C2 | `ταυτολογικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ταυτολογικός' (adjective) appears 2 times in file |
| C2 | `πολύσημος` | adjective | `inSameFileDuplicate` | Duplicate term 'πολύσημος' (adjective) appears 2 times in file |
| C2 | `ευρετικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ευρετικός' (adjective) appears 2 times in file |
| C2 | `μετα-αποικιακός` | adjective | `inSameFileDuplicate` | Duplicate term 'μετα-αποικιακός' (adjective) appears 2 times in file |
| C2 | `πολυπολικός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολυπολικός' (adjective) appears 2 times in file |
| C2 | `κοσμοπολίτικος` | adjective | `inSameFileDuplicate` | Duplicate term 'κοσμοπολίτικος' (adjective) appears 2 times in file |
| C2 | `ναρκισσιστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ναρκισσιστικός' (adjective) appears 2 times in file |
| C2 | `ετερόδοξος` | adjective | `inSameFileDuplicate` | Duplicate term 'ετερόδοξος' (adjective) appears 2 times in file |
| C2 | `εγγενής` | adjective | `inSameFileDuplicate` | Duplicate term 'εγγενής' (adjective) appears 2 times in file |
| C2 | `απότομος` | adjective | `inSameFileDuplicate` | Duplicate term 'απότομος' (adjective) appears 2 times in file |
| C2 | `δυσνόητος` | adjective | `inSameFileDuplicate` | Duplicate term 'δυσνόητος' (adjective) appears 2 times in file |
| C2 | `αναχρονιστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'αναχρονιστικός' (adjective) appears 2 times in file |
| C2 | `αντιθετικός` | adjective | `inSameFileDuplicate` | Duplicate term 'αντιθετικός' (adjective) appears 2 times in file |
| C2 | `απόκρυφος` | adjective | `inSameFileDuplicate` | Duplicate term 'απόκρυφος' (adjective) appears 2 times in file |
| C2 | `άτυπος` | adjective | `inSameFileDuplicate` | Duplicate term 'άτυπος' (adjective) appears 2 times in file |
| C2 | `δυαδικός` | adjective | `inSameFileDuplicate` | Duplicate term 'δυαδικός' (adjective) appears 2 times in file |
| C2 | `κατηγορηματικός` | adjective | `inSameFileDuplicate` | Duplicate term 'κατηγορηματικός' (adjective) appears 2 times in file |
| C2 | `περίσκεπτος` | adjective | `inSameFileDuplicate` | Duplicate term 'περίσκεπτος' (adjective) appears 2 times in file |
| C2 | `κρυφός` | adjective | `inSameFileDuplicate` | Duplicate term 'κρυφός' (adjective) appears 2 times in file |
| C2 | `διάχυτος` | adjective | `inSameFileDuplicate` | Duplicate term 'διάχυτος' (adjective) appears 4 times in file |
| C2 | `ασύλληπτος` | adjective | `inSameFileDuplicate` | Duplicate term 'ασύλληπτος' (adjective) appears 2 times in file |
| C2 | `εσωτερικός` | adjective | `inSameFileDuplicate` | Duplicate term 'εσωτερικός' (adjective) appears 2 times in file |
| C2 | `εσφαλμένος` | adjective | `inSameFileDuplicate` | Duplicate term 'εσφαλμένος' (adjective) appears 2 times in file |
| C2 | `αμετάβλητος` | adjective | `inSameFileDuplicate` | Duplicate term 'αμετάβλητος' (adjective) appears 2 times in file |
| C2 | `αμερόληπτος` | adjective | `inSameFileDuplicate` | Duplicate term 'αμερόληπτος' (adjective) appears 2 times in file |
| C2 | `συμπτωματικός` | adjective | `inSameFileDuplicate` | Duplicate term 'συμπτωματικός' (adjective) appears 2 times in file |
| C2 | `εμφυτος` | adjective | `inSameFileDuplicate` | Duplicate term 'εμφυτος' (adjective) appears 2 times in file |
| C2 | `απαράμιλλος` | adjective | `inSameFileDuplicate` | Duplicate term 'απαράμιλλος' (adjective) appears 2 times in file |
| C2 | `ύπουλος` | adjective | `inSameFileDuplicate` | Duplicate term 'ύπουλος' (adjective) appears 2 times in file |
| C2 | `ασυμβίβαστος` | adjective | `inSameFileDuplicate` | Duplicate term 'ασυμβίβαστος' (adjective) appears 2 times in file |
| C2 | `μεταιχμιακός` | adjective | `inSameFileDuplicate` | Duplicate term 'μεταιχμιακός' (adjective) appears 2 times in file |
| C2 | `πολλαπλός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολλαπλός' (adjective) appears 2 times in file |
| C2 | `νεφελώδης` | adjective | `inSameFileDuplicate` | Duplicate term 'νεφελώδης' (adjective) appears 2 times in file |
| C2 | `κανονιστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'κανονιστικός' (adjective) appears 2 times in file |
| C2 | `λεπτομερής` | adjective | `inSameFileDuplicate` | Duplicate term 'λεπτομερής' (adjective) appears 2 times in file |
| C2 | `πλάγιος` | adjective | `inSameFileDuplicate` | Duplicate term 'πλάγιος' (adjective) appears 2 times in file |
| C2 | `αδιαφανής` | adjective | `inSameFileDuplicate` | Duplicate term 'αδιαφανής' (adjective) appears 2 times in file |
| C2 | `φαινομενικός` | adjective | `inSameFileDuplicate` | Duplicate term 'φαινομενικός' (adjective) appears 2 times in file |
| C2 | `παραδοξικός` | adjective | `inSameFileDuplicate` | Duplicate term 'παραδοξικός' (adjective) appears 2 times in file |
| C2 | `διάχυτος` | adjective | `inSameFileDuplicate` | Duplicate term 'διάχυτος' (adjective) appears 4 times in file |
| C2 | `πολωτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'πολωτικός' (adjective) appears 2 times in file |
| C2 | `επισφαλής` | adjective | `inSameFileDuplicate` | Duplicate term 'επισφαλής' (adjective) appears 2 times in file |
| C2 | `προδιαγραφικός` | adjective | `inSameFileDuplicate` | Duplicate term 'προδιαγραφικός' (adjective) appears 2 times in file |
| C2 | `παρατεταμένος` | adjective | `inSameFileDuplicate` | Duplicate term 'παρατεταμένος' (adjective) appears 2 times in file |
| C2 | `αναγωγικός` | adjective | `inSameFileDuplicate` | Duplicate term 'αναγωγικός' (adjective) appears 2 times in file |
| C2 | `καθοριστικός` | adjective | `inSameFileDuplicate` | Duplicate term 'καθοριστικός' (adjective) appears 2 times in file |
| C2 | `ευειδής` | adjective | `inSameFileDuplicate` | Duplicate term 'ευειδής' (adjective) appears 2 times in file |
| C2 | `νόθος` | adjective | `inSameFileDuplicate` | Duplicate term 'νόθος' (adjective) appears 2 times in file |
| C2 | `ανατρεπτικός` | adjective | `inSameFileDuplicate` | Duplicate term 'ανατρεπτικός' (adjective) appears 2 times in file |
| C2 | `σιωπηρός` | adjective | `inSameFileDuplicate` | Duplicate term 'σιωπηρός' (adjective) appears 2 times in file |
| C2 | `ισχνός` | adjective | `inSameFileDuplicate` | Duplicate term 'ισχνός' (adjective) appears 2 times in file |
| C2 | `παροδικός` | adjective | `inSameFileDuplicate` | Duplicate term 'παροδικός' (adjective) appears 2 times in file |
| C2 | `πανταχού παρών` | adjective | `inSameFileDuplicate` | Duplicate term 'πανταχού παρών' (adjective) appears 2 times in file |
| C2 | `μονοσήμαντος` | adjective | `inSameFileDuplicate` | Duplicate term 'μονοσήμαντος' (adjective) appears 2 times in file |
| C2 | `άνευ προηγουμένου` | adjective | `inSameFileDuplicate` | Duplicate term 'άνευ προηγουμένου' (adjective) appears 2 times in file |
| C2 | `ανυπόστατος` | adjective | `inSameFileDuplicate` | Duplicate term 'ανυπόστατος' (adjective) appears 2 times in file |
| C2 | `δυσκίνητος` | adjective | `inSameFileDuplicate` | Duplicate term 'δυσκίνητος' (adjective) appears 2 times in file |

#### File: `vocabulary/el/C2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `Αποτελεί το φιλοσοφικό παράδειγμα του τεχνολογικού ντετερμινισμού μια αναπόδραστη πραγματικότητα ή παραίτηση από την ανθρώπινη αυτονομία;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Σε ποιο βαθμό η εμπορευματοποιημένη πολιτισμική νοσταλγία παρακωλύει την αυθεντική καλλιτεχνική καινοτομία στη σύγχρονη κοινωνία;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Πώς οι κυρίαρχες νομισματικές πολιτικές αντιμετωπίζουν τη συστημική αποσταθεροποίηση που προκαλούν τα αποκεντρωμένα κρυπτονομίσματα;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Μπορεί να επιτευχθεί επιστημική δικαιοσύνη εντός ακαδημαϊκών ερευνητικών πλαισίων ριζωμένων στον ευρωκεντρισμό;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Με ποιους τρόπους η διάβρωση των τρίτων χώρων επιδεινώνει την υπαρξιακή μοναξιά στις υπερσυνδεδεμένες μητροπόλεις;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Μήπως το ανθρωποκεντρικό παράδειγμα των διεθνών κλιματικών συνθηκών παρερμηνεύει τη φυσική οικολογική διασύνδεση;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Πώς τα αλγοριθμικά συστήματα συστάσεων αναδιαμορφώνουν διακριτικά την ανθρώπινη αυτονομία και τον αυτοπροσδιορισμό;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Σε ποιο βαθμό μπορούν οι μεταανθρωπιστικές τεχνολογίες να αμφισβητήσουν τους βιολογικούς ορισμούς του προσώπου;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Λειτουργεί η αξιοκρατία ως νομιμοποιητικός μύθος για τη δομική ανισότητα αντί για εργαλείο κοινωνικής κινητικότητας;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Πώς οι πολιτικοί λόγοι της μετα-αλήθειας υπονομεύουν τη δημοκρατική διαβούλευση και τη θεσμική εμπιστοσύνη;` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/el/C2/verbs.js` (102 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `πραγμοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'πραγμοποιώ' (verb) appears 2 times in file |
| C2 | `εξιδανικεύω` | verb | `inSameFileDuplicate` | Duplicate term 'εξιδανικεύω' (verb) appears 2 times in file |
| C2 | `κατηγορώ` | verb | `inSameFileDuplicate` | Duplicate term 'κατηγορώ' (verb) appears 2 times in file |
| C2 | `ενσαρκώνω` | verb | `inSameFileDuplicate` | Duplicate term 'ενσαρκώνω' (verb) appears 2 times in file |
| C2 | `αναιρώ` | verb | `inSameFileDuplicate` | Duplicate term 'αναιρώ' (verb) appears 2 times in file |
| C2 | `υπερβαίνω` | verb | `inSameFileDuplicate` | Duplicate term 'υπερβαίνω' (verb) appears 2 times in file |
| C2 | `διαμεσολαβώ` | verb | `inSameFileDuplicate` | Duplicate term 'διαμεσολαβώ' (verb) appears 2 times in file |
| C2 | `απαλείφω` | verb | `inSameFileDuplicate` | Duplicate term 'απαλείφω' (verb) appears 2 times in file |
| C2 | `συσκοτίζω` | verb | `inSameFileDuplicate` | Duplicate term 'συσκοτίζω' (verb) appears 2 times in file |
| C2 | `συγχέω` | verb | `inSameFileDuplicate` | Duplicate term 'συγχέω' (verb) appears 2 times in file |
| C2 | `επικαλούμαι` | verb | `inSameFileDuplicate` | Duplicate term 'επικαλούμαι' (verb) appears 2 times in file |
| C2 | `προβάλλω` | verb | `inSameFileDuplicate` | Duplicate term 'προβάλλω' (verb) appears 2 times in file |
| C2 | `ανακτώ` | verb | `inSameFileDuplicate` | Duplicate term 'ανακτώ' (verb) appears 2 times in file |
| C2 | `αποσταθεροποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'αποσταθεροποιώ' (verb) appears 2 times in file |
| C2 | `εμπορευματοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'εμπορευματοποιώ' (verb) appears 2 times in file |
| C2 | `εργαλειοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'εργαλειοποιώ' (verb) appears 2 times in file |
| C2 | `αξιοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'αξιοποιώ' (verb) appears 2 times in file |
| C2 | `φετιχοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'φετιχοποιώ' (verb) appears 2 times in file |
| C2 | `αλλοτριώνω` | verb | `inSameFileDuplicate` | Duplicate term 'αλλοτριώνω' (verb) appears 2 times in file |
| C2 | `οριοθετώ` | verb | `inSameFileDuplicate` | Duplicate term 'οριοθετώ' (verb) appears 2 times in file |
| C2 | `ορίζω` | verb | `inSameFileDuplicate` | Duplicate term 'ορίζω' (verb) appears 2 times in file |
| C2 | `αντιστρατεύομαι` | verb | `inSameFileDuplicate` | Duplicate term 'αντιστρατεύομαι' (verb) appears 2 times in file |
| C2 | `αμφισβητώ` | verb | `inSameFileDuplicate` | Duplicate term 'αμφισβητώ' (verb) appears 2 times in file |
| C2 | `καταργώ` | verb | `inSameFileDuplicate` | Duplicate term 'καταργώ' (verb) appears 2 times in file |
| C2 | `παραβαίνω` | verb | `inSameFileDuplicate` | Duplicate term 'παραβαίνω' (verb) appears 2 times in file |
| C2 | `υπάγω` | verb | `inSameFileDuplicate` | Duplicate term 'υπάγω' (verb) appears 2 times in file |
| C2 | `αποδομώ` | verb | `inSameFileDuplicate` | Duplicate term 'αποδομώ' (verb) appears 2 times in file |
| C2 | `αποκλείω` | verb | `inSameFileDuplicate` | Duplicate term 'αποκλείω' (verb) appears 4 times in file |
| C2 | `διαλεκτικοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'διαλεκτικοποιώ' (verb) appears 2 times in file |
| C2 | `ηγεμονεύω` | verb | `inSameFileDuplicate` | Duplicate term 'ηγεμονεύω' (verb) appears 2 times in file |
| C2 | `τονίζω` | verb | `inSameFileDuplicate` | Duplicate term 'τονίζω' (verb) appears 2 times in file |
| C2 | `ανακουφίζω` | verb | `inSameFileDuplicate` | Duplicate term 'ανακουφίζω' (verb) appears 2 times in file |
| C2 | `παρακάμπτω` | verb | `inSameFileDuplicate` | Duplicate term 'παρακάμπτω' (verb) appears 2 times in file |
| C2 | `διαδίδω` | verb | `inSameFileDuplicate` | Duplicate term 'διαδίδω' (verb) appears 2 times in file |
| C2 | `συμπυκνώνω` | verb | `inSameFileDuplicate` | Duplicate term 'συμπυκνώνω' (verb) appears 2 times in file |
| C2 | `γεννώ` | verb | `inSameFileDuplicate` | Duplicate term 'γεννώ' (verb) appears 2 times in file |
| C2 | `επιδεινώνω` | verb | `inSameFileDuplicate` | Duplicate term 'επιδεινώνω' (verb) appears 2 times in file |
| C2 | `εικονογραφώ` | verb | `inSameFileDuplicate` | Duplicate term 'εικονογραφώ' (verb) appears 2 times in file |
| C2 | `παρεμποδίζω` | verb | `inSameFileDuplicate` | Duplicate term 'παρεμποδίζω' (verb) appears 2 times in file |
| C2 | `μετριάζω` | verb | `inSameFileDuplicate` | Duplicate term 'μετριάζω' (verb) appears 2 times in file |
| C2 | `υποχρεώνω` | verb | `inSameFileDuplicate` | Duplicate term 'υποχρεώνω' (verb) appears 2 times in file |
| C2 | `διαπερνώ` | verb | `inSameFileDuplicate` | Duplicate term 'διαπερνώ' (verb) appears 2 times in file |
| C2 | `αποκλείω` | verb | `inSameFileDuplicate` | Duplicate term 'αποκλείω' (verb) appears 4 times in file |
| C2 | `συμβιβάζω` | verb | `inSameFileDuplicate` | Duplicate term 'συμβιβάζω' (verb) appears 2 times in file |
| C2 | `θεμελιώνω` | verb | `inSameFileDuplicate` | Duplicate term 'θεμελιώνω' (verb) appears 2 times in file |
| C2 | `δικαιώνω` | verb | `inSameFileDuplicate` | Duplicate term 'δικαιώνω' (verb) appears 2 times in file |
| C2 | `εξαρτώμαι από` | verb | `inSameFileDuplicate` | Duplicate term 'εξαρτώμαι από' (verb) appears 2 times in file |
| C2 | `παλεύω με` | verb | `inSameFileDuplicate` | Duplicate term 'παλεύω με' (verb) appears 2 times in file |
| C2 | `αποσιωπώ` | verb | `inSameFileDuplicate` | Duplicate term 'αποσιωπώ' (verb) appears 2 times in file |
| C2 | `συγκαλύπτω` | verb | `inSameFileDuplicate` | Duplicate term 'συγκαλύπτω' (verb) appears 2 times in file |
| C2 | `αλλαγή παραδείγματος` | verb | `inSameFileDuplicate` | Duplicate term 'αλλαγή παραδείγματος' (verb) appears 2 times in file |
| C2 | `πραγμοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'πραγμοποιώ' (verb) appears 2 times in file |
| C2 | `εξιδανικεύω` | verb | `inSameFileDuplicate` | Duplicate term 'εξιδανικεύω' (verb) appears 2 times in file |
| C2 | `κατηγορώ` | verb | `inSameFileDuplicate` | Duplicate term 'κατηγορώ' (verb) appears 2 times in file |
| C2 | `ενσαρκώνω` | verb | `inSameFileDuplicate` | Duplicate term 'ενσαρκώνω' (verb) appears 2 times in file |
| C2 | `αναιρώ` | verb | `inSameFileDuplicate` | Duplicate term 'αναιρώ' (verb) appears 2 times in file |
| C2 | `υπερβαίνω` | verb | `inSameFileDuplicate` | Duplicate term 'υπερβαίνω' (verb) appears 2 times in file |
| C2 | `διαμεσολαβώ` | verb | `inSameFileDuplicate` | Duplicate term 'διαμεσολαβώ' (verb) appears 2 times in file |
| C2 | `απαλείφω` | verb | `inSameFileDuplicate` | Duplicate term 'απαλείφω' (verb) appears 2 times in file |
| C2 | `συσκοτίζω` | verb | `inSameFileDuplicate` | Duplicate term 'συσκοτίζω' (verb) appears 2 times in file |
| C2 | `συγχέω` | verb | `inSameFileDuplicate` | Duplicate term 'συγχέω' (verb) appears 2 times in file |
| C2 | `επικαλούμαι` | verb | `inSameFileDuplicate` | Duplicate term 'επικαλούμαι' (verb) appears 2 times in file |
| C2 | `προβάλλω` | verb | `inSameFileDuplicate` | Duplicate term 'προβάλλω' (verb) appears 2 times in file |
| C2 | `ανακτώ` | verb | `inSameFileDuplicate` | Duplicate term 'ανακτώ' (verb) appears 2 times in file |
| C2 | `αποσταθεροποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'αποσταθεροποιώ' (verb) appears 2 times in file |
| C2 | `εμπορευματοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'εμπορευματοποιώ' (verb) appears 2 times in file |
| C2 | `εργαλειοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'εργαλειοποιώ' (verb) appears 2 times in file |
| C2 | `αξιοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'αξιοποιώ' (verb) appears 2 times in file |
| C2 | `φετιχοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'φετιχοποιώ' (verb) appears 2 times in file |
| C2 | `αλλοτριώνω` | verb | `inSameFileDuplicate` | Duplicate term 'αλλοτριώνω' (verb) appears 2 times in file |
| C2 | `οριοθετώ` | verb | `inSameFileDuplicate` | Duplicate term 'οριοθετώ' (verb) appears 2 times in file |
| C2 | `ορίζω` | verb | `inSameFileDuplicate` | Duplicate term 'ορίζω' (verb) appears 2 times in file |
| C2 | `αντιστρατεύομαι` | verb | `inSameFileDuplicate` | Duplicate term 'αντιστρατεύομαι' (verb) appears 2 times in file |
| C2 | `αμφισβητώ` | verb | `inSameFileDuplicate` | Duplicate term 'αμφισβητώ' (verb) appears 2 times in file |
| C2 | `καταργώ` | verb | `inSameFileDuplicate` | Duplicate term 'καταργώ' (verb) appears 2 times in file |
| C2 | `παραβαίνω` | verb | `inSameFileDuplicate` | Duplicate term 'παραβαίνω' (verb) appears 2 times in file |
| C2 | `υπάγω` | verb | `inSameFileDuplicate` | Duplicate term 'υπάγω' (verb) appears 2 times in file |
| C2 | `αποδομώ` | verb | `inSameFileDuplicate` | Duplicate term 'αποδομώ' (verb) appears 2 times in file |
| C2 | `αποκλείω` | verb | `inSameFileDuplicate` | Duplicate term 'αποκλείω' (verb) appears 4 times in file |
| C2 | `διαλεκτικοποιώ` | verb | `inSameFileDuplicate` | Duplicate term 'διαλεκτικοποιώ' (verb) appears 2 times in file |
| C2 | `ηγεμονεύω` | verb | `inSameFileDuplicate` | Duplicate term 'ηγεμονεύω' (verb) appears 2 times in file |
| C2 | `τονίζω` | verb | `inSameFileDuplicate` | Duplicate term 'τονίζω' (verb) appears 2 times in file |
| C2 | `ανακουφίζω` | verb | `inSameFileDuplicate` | Duplicate term 'ανακουφίζω' (verb) appears 2 times in file |
| C2 | `παρακάμπτω` | verb | `inSameFileDuplicate` | Duplicate term 'παρακάμπτω' (verb) appears 2 times in file |
| C2 | `διαδίδω` | verb | `inSameFileDuplicate` | Duplicate term 'διαδίδω' (verb) appears 2 times in file |
| C2 | `συμπυκνώνω` | verb | `inSameFileDuplicate` | Duplicate term 'συμπυκνώνω' (verb) appears 2 times in file |
| C2 | `γεννώ` | verb | `inSameFileDuplicate` | Duplicate term 'γεννώ' (verb) appears 2 times in file |
| C2 | `επιδεινώνω` | verb | `inSameFileDuplicate` | Duplicate term 'επιδεινώνω' (verb) appears 2 times in file |
| C2 | `εικονογραφώ` | verb | `inSameFileDuplicate` | Duplicate term 'εικονογραφώ' (verb) appears 2 times in file |
| C2 | `παρεμποδίζω` | verb | `inSameFileDuplicate` | Duplicate term 'παρεμποδίζω' (verb) appears 2 times in file |
| C2 | `μετριάζω` | verb | `inSameFileDuplicate` | Duplicate term 'μετριάζω' (verb) appears 2 times in file |
| C2 | `υποχρεώνω` | verb | `inSameFileDuplicate` | Duplicate term 'υποχρεώνω' (verb) appears 2 times in file |
| C2 | `διαπερνώ` | verb | `inSameFileDuplicate` | Duplicate term 'διαπερνώ' (verb) appears 2 times in file |
| C2 | `αποκλείω` | verb | `inSameFileDuplicate` | Duplicate term 'αποκλείω' (verb) appears 4 times in file |
| C2 | `συμβιβάζω` | verb | `inSameFileDuplicate` | Duplicate term 'συμβιβάζω' (verb) appears 2 times in file |
| C2 | `θεμελιώνω` | verb | `inSameFileDuplicate` | Duplicate term 'θεμελιώνω' (verb) appears 2 times in file |
| C2 | `δικαιώνω` | verb | `inSameFileDuplicate` | Duplicate term 'δικαιώνω' (verb) appears 2 times in file |
| C2 | `εξαρτώμαι από` | verb | `inSameFileDuplicate` | Duplicate term 'εξαρτώμαι από' (verb) appears 2 times in file |
| C2 | `παλεύω με` | verb | `inSameFileDuplicate` | Duplicate term 'παλεύω με' (verb) appears 2 times in file |
| C2 | `αποσιωπώ` | verb | `inSameFileDuplicate` | Duplicate term 'αποσιωπώ' (verb) appears 2 times in file |
| C2 | `συγκαλύπτω` | verb | `inSameFileDuplicate` | Duplicate term 'συγκαλύπτω' (verb) appears 2 times in file |
| C2 | `αλλαγή παραδείγματος` | verb | `inSameFileDuplicate` | Duplicate term 'αλλαγή παραδείγματος' (verb) appears 2 times in file |

### EN (English) — 0 Flagged Entries out of 1059 Category (a) Entries

*No data quality issues found for English. All 1059 Category (a) entries pass empty field, duplicate, and artifact checks.*

### ES (Spanish) — 230 Flagged Entries out of 429 Category (a) Entries

#### File: `vocabulary/es/A2/opinions.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| A2 | `Todo el mundo debería intentar vivir en el extranjero durante un año.` | phrase | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): t, word, definitions[0].text |

#### File: `vocabulary/es/B2/fluency.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `Lo que la gente entiende mal sobre ti` | phrase | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): h[4] |

#### File: `vocabulary/es/B2/opinions.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `La mayoría de los adultos solo están improvisando.` | phrase | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): h[4] |

#### File: `vocabulary/es/C1/fluency.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Tu relación con la certeza y la duda` | phrase | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): h[3] |
| C1 | `Lo que protegerías incluso si te costara algo` | phrase | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): h[3] |

#### File: `vocabulary/es/C2/adjectives.js` (112 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 2 times in file |
| C2 | `abstruso` | adjective | `inSameFileDuplicate` | Duplicate term 'abstruso' (adjective) appears 2 times in file |
| C2 | `anacrónico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacrónico' (adjective) appears 2 times in file |
| C2 | `antitético` | adjective | `inSameFileDuplicate` | Duplicate term 'antitético' (adjective) appears 2 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 2 times in file |
| C2 | `atípico` | adjective | `inSameFileDuplicate` | Duplicate term 'atípico' (adjective) appears 2 times in file |
| C2 | `binario` | adjective | `inSameFileDuplicate` | Duplicate term 'binario' (adjective) appears 2 times in file |
| C2 | `categórico` | adjective | `inSameFileDuplicate` | Duplicate term 'categórico' (adjective) appears 2 times in file |
| C2 | `circunspecto` | adjective | `inSameFileDuplicate` | Duplicate term 'circunspecto' (adjective) appears 2 times in file |
| C2 | `encubierto` | adjective | `inSameFileDuplicate` | Duplicate term 'encubierto' (adjective) appears 2 times in file |
| C2 | `dialéctico` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialéctico' (adjective) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `difuso` | adjective | `inSameFileDuplicate` | Duplicate term 'difuso' (adjective) appears 2 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 2 times in file |
| C2 | `esotérico` | adjective | `inSameFileDuplicate` | Duplicate term 'esotérico' (adjective) appears 2 times in file |
| C2 | `falaz` | adjective | `inSameFileDuplicate` | Duplicate term 'falaz' (adjective) appears 2 times in file |
| C2 | `inmutable` | adjective | `inSameFileDuplicate` | Duplicate term 'inmutable' (adjective) appears 2 times in file |
| C2 | `imparcial` | adjective | `inSameFileDuplicate` | Duplicate term 'imparcial' (adjective) appears 2 times in file |
| C2 | `incidental` | adjective | `inSameFileDuplicate` | Duplicate term 'incidental' (adjective) appears 2 times in file |
| C2 | `inherente` | adjective | `inSameFileDuplicate` | Duplicate term 'inherente' (adjective) appears 2 times in file |
| C2 | `inimitable` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitable' (adjective) appears 2 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 2 times in file |
| C2 | `irreconciliable` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliable' (adjective) appears 2 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 2 times in file |
| C2 | `múltiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'múltiplo' (adjective) appears 2 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 2 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 2 times in file |
| C2 | `matizado` | adjective | `inSameFileDuplicate` | Duplicate term 'matizado' (adjective) appears 2 times in file |
| C2 | `oblicuo` | adjective | `inSameFileDuplicate` | Duplicate term 'oblicuo' (adjective) appears 2 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 2 times in file |
| C2 | `ostensible` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensible' (adjective) appears 2 times in file |
| C2 | `paradójico` | adjective | `inSameFileDuplicate` | Duplicate term 'paradójico' (adjective) appears 2 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 2 times in file |
| C2 | `polarizador` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizador' (adjective) appears 2 times in file |
| C2 | `precario` | adjective | `inSameFileDuplicate` | Duplicate term 'precario' (adjective) appears 2 times in file |
| C2 | `prescriptivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescriptivo' (adjective) appears 2 times in file |
| C2 | `prolongado` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongado' (adjective) appears 2 times in file |
| C2 | `reductor` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'reductor' (adjective) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 2 times in file |
| C2 | `especioso` | adjective | `inSameFileDuplicate` | Duplicate term 'especioso' (adjective) appears 2 times in file |
| C2 | `espurio` | adjective | `inSameFileDuplicate` | Duplicate term 'espurio' (adjective) appears 2 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 2 times in file |
| C2 | `tácito` | adjective | `inSameFileDuplicate` | Duplicate term 'tácito' (adjective) appears 2 times in file |
| C2 | `tenue` | adjective | `inSameFileDuplicate` | Duplicate term 'tenue' (adjective) appears 2 times in file |
| C2 | `transitorio` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorio' (adjective) appears 2 times in file |
| C2 | `ubicuista` | adjective | `inSameFileDuplicate` | Duplicate term 'ubicuista' (adjective) appears 2 times in file |
| C2 | `inequívoco` | adjective | `inSameFileDuplicate` | Duplicate term 'inequívoco' (adjective) appears 2 times in file |
| C2 | `sin precedentes` | adjective | `inSameFileDuplicate` | Duplicate term 'sin precedentes' (adjective) appears 2 times in file |
| C2 | `insostenible` | adjective | `inSameFileDuplicate` | Duplicate term 'insostenible' (adjective) appears 2 times in file |
| C2 | `hermenéutico` | adjective | `inSameFileDuplicate` | Duplicate term 'hermenéutico' (adjective) appears 2 times in file |
| C2 | `tautológico` | adjective | `inSameFileDuplicate` | Duplicate term 'tautológico' (adjective) appears 2 times in file |
| C2 | `polisémico` | adjective | `inSameFileDuplicate` | Duplicate term 'polisémico' (adjective) appears 2 times in file |
| C2 | `postcolonial` | adjective | `inSameFileDuplicate` | Duplicate term 'postcolonial' (adjective) appears 2 times in file |
| C2 | `multipolar` | adjective | `inSameFileDuplicate` | Duplicate term 'multipolar' (adjective) appears 2 times in file |
| C2 | `cosmopolita` | adjective | `inSameFileDuplicate` | Duplicate term 'cosmopolita' (adjective) appears 2 times in file |
| C2 | `narcisista` | adjective | `inSameFileDuplicate` | Duplicate term 'narcisista' (adjective) appears 2 times in file |
| C2 | `heterodoxo` | adjective | `inSameFileDuplicate` | Duplicate term 'heterodoxo' (adjective) appears 2 times in file |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 2 times in file |
| C2 | `abstruso` | adjective | `inSameFileDuplicate` | Duplicate term 'abstruso' (adjective) appears 2 times in file |
| C2 | `anacrónico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacrónico' (adjective) appears 2 times in file |
| C2 | `antitético` | adjective | `inSameFileDuplicate` | Duplicate term 'antitético' (adjective) appears 2 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 2 times in file |
| C2 | `atípico` | adjective | `inSameFileDuplicate` | Duplicate term 'atípico' (adjective) appears 2 times in file |
| C2 | `binario` | adjective | `inSameFileDuplicate` | Duplicate term 'binario' (adjective) appears 2 times in file |
| C2 | `categórico` | adjective | `inSameFileDuplicate` | Duplicate term 'categórico' (adjective) appears 2 times in file |
| C2 | `circunspecto` | adjective | `inSameFileDuplicate` | Duplicate term 'circunspecto' (adjective) appears 2 times in file |
| C2 | `encubierto` | adjective | `inSameFileDuplicate` | Duplicate term 'encubierto' (adjective) appears 2 times in file |
| C2 | `dialéctico` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialéctico' (adjective) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `difuso` | adjective | `inSameFileDuplicate` | Duplicate term 'difuso' (adjective) appears 2 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 2 times in file |
| C2 | `esotérico` | adjective | `inSameFileDuplicate` | Duplicate term 'esotérico' (adjective) appears 2 times in file |
| C2 | `falaz` | adjective | `inSameFileDuplicate` | Duplicate term 'falaz' (adjective) appears 2 times in file |
| C2 | `inmutable` | adjective | `inSameFileDuplicate` | Duplicate term 'inmutable' (adjective) appears 2 times in file |
| C2 | `imparcial` | adjective | `inSameFileDuplicate` | Duplicate term 'imparcial' (adjective) appears 2 times in file |
| C2 | `incidental` | adjective | `inSameFileDuplicate` | Duplicate term 'incidental' (adjective) appears 2 times in file |
| C2 | `inherente` | adjective | `inSameFileDuplicate` | Duplicate term 'inherente' (adjective) appears 2 times in file |
| C2 | `inimitable` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitable' (adjective) appears 2 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 2 times in file |
| C2 | `irreconciliable` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliable' (adjective) appears 2 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 2 times in file |
| C2 | `múltiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'múltiplo' (adjective) appears 2 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 2 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 2 times in file |
| C2 | `matizado` | adjective | `inSameFileDuplicate` | Duplicate term 'matizado' (adjective) appears 2 times in file |
| C2 | `oblicuo` | adjective | `inSameFileDuplicate` | Duplicate term 'oblicuo' (adjective) appears 2 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 2 times in file |
| C2 | `ostensible` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensible' (adjective) appears 2 times in file |
| C2 | `paradójico` | adjective | `inSameFileDuplicate` | Duplicate term 'paradójico' (adjective) appears 2 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 2 times in file |
| C2 | `polarizador` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizador' (adjective) appears 2 times in file |
| C2 | `precario` | adjective | `inSameFileDuplicate` | Duplicate term 'precario' (adjective) appears 2 times in file |
| C2 | `prescriptivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescriptivo' (adjective) appears 2 times in file |
| C2 | `prolongado` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongado' (adjective) appears 2 times in file |
| C2 | `reductor` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'reductor' (adjective) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 2 times in file |
| C2 | `especioso` | adjective | `inSameFileDuplicate` | Duplicate term 'especioso' (adjective) appears 2 times in file |
| C2 | `espurio` | adjective | `inSameFileDuplicate` | Duplicate term 'espurio' (adjective) appears 2 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 2 times in file |
| C2 | `tácito` | adjective | `inSameFileDuplicate` | Duplicate term 'tácito' (adjective) appears 2 times in file |
| C2 | `tenue` | adjective | `inSameFileDuplicate` | Duplicate term 'tenue' (adjective) appears 2 times in file |
| C2 | `transitorio` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorio' (adjective) appears 2 times in file |
| C2 | `ubicuista` | adjective | `inSameFileDuplicate` | Duplicate term 'ubicuista' (adjective) appears 2 times in file |
| C2 | `inequívoco` | adjective | `inSameFileDuplicate` | Duplicate term 'inequívoco' (adjective) appears 2 times in file |
| C2 | `sin precedentes` | adjective | `inSameFileDuplicate` | Duplicate term 'sin precedentes' (adjective) appears 2 times in file |
| C2 | `insostenible` | adjective | `inSameFileDuplicate` | Duplicate term 'insostenible' (adjective) appears 2 times in file |
| C2 | `hermenéutico` | adjective | `inSameFileDuplicate` | Duplicate term 'hermenéutico' (adjective) appears 2 times in file |
| C2 | `tautológico` | adjective | `inSameFileDuplicate` | Duplicate term 'tautológico' (adjective) appears 2 times in file |
| C2 | `polisémico` | adjective | `inSameFileDuplicate` | Duplicate term 'polisémico' (adjective) appears 2 times in file |
| C2 | `postcolonial` | adjective | `inSameFileDuplicate` | Duplicate term 'postcolonial' (adjective) appears 2 times in file |
| C2 | `multipolar` | adjective | `inSameFileDuplicate` | Duplicate term 'multipolar' (adjective) appears 2 times in file |
| C2 | `cosmopolita` | adjective | `inSameFileDuplicate` | Duplicate term 'cosmopolita' (adjective) appears 2 times in file |
| C2 | `narcisista` | adjective | `inSameFileDuplicate` | Duplicate term 'narcisista' (adjective) appears 2 times in file |
| C2 | `heterodoxo` | adjective | `inSameFileDuplicate` | Duplicate term 'heterodoxo' (adjective) appears 2 times in file |

#### File: `vocabulary/es/C2/fluency.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `Si el lenguaje da forma a lo que podemos pensar o solo a lo que podemos decir` | phrase | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): h[0], h[2] |

#### File: `vocabulary/es/C2/verbs.js` (110 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `reificar` | verb | `inSameFileDuplicate` | Duplicate term 'reificar' (verb) appears 2 times in file |
| C2 | `sublimar` | verb | `inSameFileDuplicate` | Duplicate term 'sublimar' (verb) appears 2 times in file |
| C2 | `predicar` | verb | `inSameFileDuplicate` | Duplicate term 'predicar' (verb) appears 2 times in file |
| C2 | `instanciar` | verb | `inSameFileDuplicate` | Duplicate term 'instanciar' (verb) appears 2 times in file |
| C2 | `negar` | verb | `inSameFileDuplicate` | Duplicate term 'negar' (verb) appears 2 times in file |
| C2 | `trascender` | verb | `inSameFileDuplicate` | Duplicate term 'trascender' (verb) appears 2 times in file |
| C2 | `mediar` | verb | `inSameFileDuplicate` | Duplicate term 'mediar' (verb) appears 2 times in file |
| C2 | `elidir` | verb | `inSameFileDuplicate` | Duplicate term 'elidir' (verb) appears 2 times in file |
| C2 | `ofuscar` | verb | `inSameFileDuplicate` | Duplicate term 'ofuscar' (verb) appears 2 times in file |
| C2 | `fusionar` | verb | `inSameFileDuplicate` | Duplicate term 'fusionar' (verb) appears 2 times in file |
| C2 | `invocar` | verb | `inSameFileDuplicate` | Duplicate term 'invocar' (verb) appears 2 times in file |
| C2 | `destacar` | verb | `inSameFileDuplicate` | Duplicate term 'destacar' (verb) appears 2 times in file |
| C2 | `recuperar` | verb | `inSameFileDuplicate` | Duplicate term 'recuperar' (verb) appears 2 times in file |
| C2 | `desestabilizar` | verb | `inSameFileDuplicate` | Duplicate term 'desestabilizar' (verb) appears 2 times in file |
| C2 | `mercantilizar` | verb | `inSameFileDuplicate` | Duplicate term 'mercantilizar' (verb) appears 2 times in file |
| C2 | `instrumentalizar` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentalizar' (verb) appears 2 times in file |
| C2 | `valorizar` | verb | `inSameFileDuplicate` | Duplicate term 'valorizar' (verb) appears 2 times in file |
| C2 | `fetichizar` | verb | `inSameFileDuplicate` | Duplicate term 'fetichizar' (verb) appears 2 times in file |
| C2 | `alienar` | verb | `inSameFileDuplicate` | Duplicate term 'alienar' (verb) appears 2 times in file |
| C2 | `demarcar` | verb | `inSameFileDuplicate` | Duplicate term 'demarcar' (verb) appears 2 times in file |
| C2 | `delimitar` | verb | `inSameFileDuplicate` | Duplicate term 'delimitar' (verb) appears 2 times in file |
| C2 | `militar` | verb | `inSameFileDuplicate` | Duplicate term 'militar' (verb) appears 2 times in file |
| C2 | `viciar` | verb | `inSameFileDuplicate` | Duplicate term 'viciar' (verb) appears 2 times in file |
| C2 | `contradecir` | verb | `inSameFileDuplicate` | Duplicate term 'contradecir' (verb) appears 2 times in file |
| C2 | `abrogar` | verb | `inSameFileDuplicate` | Duplicate term 'abrogar' (verb) appears 2 times in file |
| C2 | `contravenir` | verb | `inSameFileDuplicate` | Duplicate term 'contravenir' (verb) appears 2 times in file |
| C2 | `subsumir` | verb | `inSameFileDuplicate` | Duplicate term 'subsumir' (verb) appears 2 times in file |
| C2 | `deconstruir` | verb | `inSameFileDuplicate` | Duplicate term 'deconstruir' (verb) appears 2 times in file |
| C2 | `precluir` | verb | `inSameFileDuplicate` | Duplicate term 'precluir' (verb) appears 2 times in file |
| C2 | `dialectizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialectizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): subtext |
| C2 | `hegemonizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'hegemonizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `acentuar` | verb | `inSameFileDuplicate` | Duplicate term 'acentuar' (verb) appears 2 times in file |
| C2 | `asentir` | verb | `inSameFileDuplicate` | Duplicate term 'asentir' (verb) appears 2 times in file |
| C2 | `aliviar` | verb | `inSameFileDuplicate` | Duplicate term 'aliviar' (verb) appears 2 times in file |
| C2 | `eludir` | verb | `inSameFileDuplicate` | Duplicate term 'eludir' (verb) appears 2 times in file |
| C2 | `corroborar` | verb | `inSameFileDuplicate` | Duplicate term 'corroborar' (verb) appears 2 times in file |
| C2 | `difundir` | verb | `inSameFileDuplicate` | Duplicate term 'difundir' (verb) appears 2 times in file |
| C2 | `encapsular` | verb | `inSameFileDuplicate` | Duplicate term 'encapsular' (verb) appears 2 times in file |
| C2 | `engendrar` | verb | `inSameFileDuplicate` | Duplicate term 'engendrar' (verb) appears 2 times in file |
| C2 | `exacerbar` | verb | `inSameFileDuplicate` | Duplicate term 'exacerbar' (verb) appears 2 times in file |
| C2 | `ejemplificar` | verb | `inSameFileDuplicate` | Duplicate term 'ejemplificar' (verb) appears 2 times in file |
| C2 | `impedir` | verb | `inSameFileDuplicate` | Duplicate term 'impedir' (verb) appears 2 times in file |
| C2 | `mitigar` | verb | `inSameFileDuplicate` | Duplicate term 'mitigar' (verb) appears 2 times in file |
| C2 | `obligar` | verb | `inSameFileDuplicate` | Duplicate term 'obligar' (verb) appears 2 times in file |
| C2 | `impregnar` | verb | `inSameFileDuplicate` | Duplicate term 'impregnar' (verb) appears 2 times in file |
| C2 | `excluir` | verb | `inSameFileDuplicate` | Duplicate term 'excluir' (verb) appears 2 times in file |
| C2 | `reconciliar` | verb | `inSameFileDuplicate` | Duplicate term 'reconciliar' (verb) appears 2 times in file |
| C2 | `sustituir` | verb | `inSameFileDuplicate` | Duplicate term 'sustituir' (verb) appears 2 times in file |
| C2 | `sustentar` | verb | `inSameFileDuplicate` | Duplicate term 'sustentar' (verb) appears 2 times in file |
| C2 | `reivindicar` | verb | `inSameFileDuplicate` | Duplicate term 'reivindicar' (verb) appears 2 times in file |
| C2 | `depender de` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'depender de' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): subtext, definitions[0].examples[0] |
| C2 | `lidiar con` | verb | `inSameFileDuplicate` | Duplicate term 'lidiar con' (verb) appears 2 times in file |
| C2 | `pasar por alto` | verb | `inSameFileDuplicate` | Duplicate term 'pasar por alto' (verb) appears 2 times in file |
| C2 | `disimular` | verb | `inSameFileDuplicate` | Duplicate term 'disimular' (verb) appears 2 times in file |
| C2 | `cambio de paradigma` | verb | `inSameFileDuplicate` | Duplicate term 'cambio de paradigma' (verb) appears 2 times in file |
| C2 | `reificar` | verb | `inSameFileDuplicate` | Duplicate term 'reificar' (verb) appears 2 times in file |
| C2 | `sublimar` | verb | `inSameFileDuplicate` | Duplicate term 'sublimar' (verb) appears 2 times in file |
| C2 | `predicar` | verb | `inSameFileDuplicate` | Duplicate term 'predicar' (verb) appears 2 times in file |
| C2 | `instanciar` | verb | `inSameFileDuplicate` | Duplicate term 'instanciar' (verb) appears 2 times in file |
| C2 | `negar` | verb | `inSameFileDuplicate` | Duplicate term 'negar' (verb) appears 2 times in file |
| C2 | `trascender` | verb | `inSameFileDuplicate` | Duplicate term 'trascender' (verb) appears 2 times in file |
| C2 | `mediar` | verb | `inSameFileDuplicate` | Duplicate term 'mediar' (verb) appears 2 times in file |
| C2 | `elidir` | verb | `inSameFileDuplicate` | Duplicate term 'elidir' (verb) appears 2 times in file |
| C2 | `ofuscar` | verb | `inSameFileDuplicate` | Duplicate term 'ofuscar' (verb) appears 2 times in file |
| C2 | `fusionar` | verb | `inSameFileDuplicate` | Duplicate term 'fusionar' (verb) appears 2 times in file |
| C2 | `invocar` | verb | `inSameFileDuplicate` | Duplicate term 'invocar' (verb) appears 2 times in file |
| C2 | `destacar` | verb | `inSameFileDuplicate` | Duplicate term 'destacar' (verb) appears 2 times in file |
| C2 | `recuperar` | verb | `inSameFileDuplicate` | Duplicate term 'recuperar' (verb) appears 2 times in file |
| C2 | `desestabilizar` | verb | `inSameFileDuplicate` | Duplicate term 'desestabilizar' (verb) appears 2 times in file |
| C2 | `mercantilizar` | verb | `inSameFileDuplicate` | Duplicate term 'mercantilizar' (verb) appears 2 times in file |
| C2 | `instrumentalizar` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentalizar' (verb) appears 2 times in file |
| C2 | `valorizar` | verb | `inSameFileDuplicate` | Duplicate term 'valorizar' (verb) appears 2 times in file |
| C2 | `fetichizar` | verb | `inSameFileDuplicate` | Duplicate term 'fetichizar' (verb) appears 2 times in file |
| C2 | `alienar` | verb | `inSameFileDuplicate` | Duplicate term 'alienar' (verb) appears 2 times in file |
| C2 | `demarcar` | verb | `inSameFileDuplicate` | Duplicate term 'demarcar' (verb) appears 2 times in file |
| C2 | `delimitar` | verb | `inSameFileDuplicate` | Duplicate term 'delimitar' (verb) appears 2 times in file |
| C2 | `militar` | verb | `inSameFileDuplicate` | Duplicate term 'militar' (verb) appears 2 times in file |
| C2 | `viciar` | verb | `inSameFileDuplicate` | Duplicate term 'viciar' (verb) appears 2 times in file |
| C2 | `contradecir` | verb | `inSameFileDuplicate` | Duplicate term 'contradecir' (verb) appears 2 times in file |
| C2 | `abrogar` | verb | `inSameFileDuplicate` | Duplicate term 'abrogar' (verb) appears 2 times in file |
| C2 | `contravenir` | verb | `inSameFileDuplicate` | Duplicate term 'contravenir' (verb) appears 2 times in file |
| C2 | `subsumir` | verb | `inSameFileDuplicate` | Duplicate term 'subsumir' (verb) appears 2 times in file |
| C2 | `deconstruir` | verb | `inSameFileDuplicate` | Duplicate term 'deconstruir' (verb) appears 2 times in file |
| C2 | `precluir` | verb | `inSameFileDuplicate` | Duplicate term 'precluir' (verb) appears 2 times in file |
| C2 | `dialectizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialectizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): subtext |
| C2 | `hegemonizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'hegemonizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `acentuar` | verb | `inSameFileDuplicate` | Duplicate term 'acentuar' (verb) appears 2 times in file |
| C2 | `asentir` | verb | `inSameFileDuplicate` | Duplicate term 'asentir' (verb) appears 2 times in file |
| C2 | `aliviar` | verb | `inSameFileDuplicate` | Duplicate term 'aliviar' (verb) appears 2 times in file |
| C2 | `eludir` | verb | `inSameFileDuplicate` | Duplicate term 'eludir' (verb) appears 2 times in file |
| C2 | `corroborar` | verb | `inSameFileDuplicate` | Duplicate term 'corroborar' (verb) appears 2 times in file |
| C2 | `difundir` | verb | `inSameFileDuplicate` | Duplicate term 'difundir' (verb) appears 2 times in file |
| C2 | `encapsular` | verb | `inSameFileDuplicate` | Duplicate term 'encapsular' (verb) appears 2 times in file |
| C2 | `engendrar` | verb | `inSameFileDuplicate` | Duplicate term 'engendrar' (verb) appears 2 times in file |
| C2 | `exacerbar` | verb | `inSameFileDuplicate` | Duplicate term 'exacerbar' (verb) appears 2 times in file |
| C2 | `ejemplificar` | verb | `inSameFileDuplicate` | Duplicate term 'ejemplificar' (verb) appears 2 times in file |
| C2 | `impedir` | verb | `inSameFileDuplicate` | Duplicate term 'impedir' (verb) appears 2 times in file |
| C2 | `mitigar` | verb | `inSameFileDuplicate` | Duplicate term 'mitigar' (verb) appears 2 times in file |
| C2 | `obligar` | verb | `inSameFileDuplicate` | Duplicate term 'obligar' (verb) appears 2 times in file |
| C2 | `impregnar` | verb | `inSameFileDuplicate` | Duplicate term 'impregnar' (verb) appears 2 times in file |
| C2 | `excluir` | verb | `inSameFileDuplicate` | Duplicate term 'excluir' (verb) appears 2 times in file |
| C2 | `reconciliar` | verb | `inSameFileDuplicate` | Duplicate term 'reconciliar' (verb) appears 2 times in file |
| C2 | `sustituir` | verb | `inSameFileDuplicate` | Duplicate term 'sustituir' (verb) appears 2 times in file |
| C2 | `sustentar` | verb | `inSameFileDuplicate` | Duplicate term 'sustentar' (verb) appears 2 times in file |
| C2 | `reivindicar` | verb | `inSameFileDuplicate` | Duplicate term 'reivindicar' (verb) appears 2 times in file |
| C2 | `depender de` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'depender de' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): subtext, definitions[0].examples[0] |
| C2 | `lidiar con` | verb | `inSameFileDuplicate` | Duplicate term 'lidiar con' (verb) appears 2 times in file |
| C2 | `pasar por alto` | verb | `inSameFileDuplicate` | Duplicate term 'pasar por alto' (verb) appears 2 times in file |
| C2 | `disimular` | verb | `inSameFileDuplicate` | Duplicate term 'disimular' (verb) appears 2 times in file |
| C2 | `cambio de paradigma` | verb | `inSameFileDuplicate` | Duplicate term 'cambio de paradigma' (verb) appears 2 times in file |

#### File: `vocabulary/es/C2/vocabulary.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `ontología` | noun | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `dialéctica` | noun | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].text |

### FR (French) — 408 Flagged Entries out of 1788 Category (a) Entries

#### File: `vocabulary/fr/B1/adjectives.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `durable` | adjective | `inSameFileDuplicate` | Duplicate term 'durable' (adjective) appears 2 times in file |
| B1 | `durable` | adjective | `inSameFileDuplicate` | Duplicate term 'durable' (adjective) appears 2 times in file |

#### File: `vocabulary/fr/B1/locations.js` (4 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Bretagne` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Rio de Janeiro` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Le Caire` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Delhi` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/fr/B1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Comment les réseaux sociaux influencent-ils vos relations personnelles au quotidien ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Quels critères privilégiez-vous lors de la recherche d'un emploi équilibré ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `De quelle manière la vie en grande ville impacte-t-elle la santé mentale ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Comment les traditions familiales évoluent-elles entre différentes générations ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Quel rôle les habitudes écologiques personnelles jouent-elles dans la protection de l'environnement ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Comment organiser son temps libre pour réduire efficacement le stress du travail ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Quels sont les principaux avantages et inconvénients du télétravail régulier ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `En quoi voyager dans un pays étranger change-t-il la perception du monde ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Faut-il accorder autant d'importance aux compétences pratiques qu'aux matières académiques à l'école ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Comment la publicité influence-t-elle nos décisions d'achat inconscientes ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/fr/B1/verbs.js` (4 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `jardiner` | verb | `inSameFileDuplicate` | Duplicate term 'jardiner' (verb) appears 2 times in file |
| B1 | `faire du bénévolat` | verb | `inSameFileDuplicate` | Duplicate term 'faire du bénévolat' (verb) appears 2 times in file |
| B1 | `jardiner` | verb | `inSameFileDuplicate` | Duplicate term 'jardiner' (verb) appears 2 times in file |
| B1 | `faire du bénévolat` | verb | `inSameFileDuplicate` | Duplicate term 'faire du bénévolat' (verb) appears 2 times in file |

#### File: `vocabulary/fr/B1/vocabulary.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | *(EMPTY)* | noun | `emptyField` | Word/term field is empty or whitespace-only |

#### File: `vocabulary/fr/B2/adjectives.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `civique` | adjective | `inSameFileDuplicate` | Duplicate term 'civique' (adjective) appears 2 times in file |
| B2 | `chronique` | adjective | `inSameFileDuplicate` | Duplicate term 'chronique' (adjective) appears 2 times in file |
| B2 | `préventif` | adjective | `inSameFileDuplicate` | Duplicate term 'préventif' (adjective) appears 2 times in file |
| B2 | `moral` | adjective | `inSameFileDuplicate` | Duplicate term 'moral' (adjective) appears 2 times in file |
| B2 | `durable` | adjective | `inSameFileDuplicate` | Duplicate term 'durable' (adjective) appears 2 times in file |
| B2 | `civique` | adjective | `inSameFileDuplicate` | Duplicate term 'civique' (adjective) appears 2 times in file |
| B2 | `chronique` | adjective | `inSameFileDuplicate` | Duplicate term 'chronique' (adjective) appears 2 times in file |
| B2 | `préventif` | adjective | `inSameFileDuplicate` | Duplicate term 'préventif' (adjective) appears 2 times in file |
| B2 | `moral` | adjective | `inSameFileDuplicate` | Duplicate term 'moral' (adjective) appears 2 times in file |
| B2 | `durable` | adjective | `inSameFileDuplicate` | Duplicate term 'durable' (adjective) appears 2 times in file |

#### File: `vocabulary/fr/B2/people.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `Edith Piaf` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Simone de Beauvoir` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/fr/B2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `Dans quelle mesure les algorithmes des réseaux sociaux créent-ils des bulles de filtres idéologiques ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Faut-il encadrer le développement de l'intelligence artificielle pour préserver l'emploi qualifié ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Dans quelle mesure le milieu socio-économique détermine-t-il la réussite éducative à long terme ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `La mondialisation menace-t-elle l'authenticité des cultures régionales ou les enrichit-elle ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Les engagements écologiques des entreprises suffisent-ils face au changement climatique sans réformes étatiques ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `La reconnaissance publique est-elle un moteur de carrière plus durable que la passion personnelle ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Comment l'économie des petits boulots a-t-elle transformé le droit du travail traditionnel ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Le système de santé publique devrait-il investir davantage dans la prévention que dans les soins ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `L'art contemporain peut-il conserver sa portée critique s'il est marchandisé par des élites ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Les universités devraient-elles abolir les examens standardisés lors des sélections d'admission ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/fr/B2/verbs.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `soutenir que` | verb | `inSameFileDuplicate` | Duplicate term 'soutenir que' (verb) appears 2 times in file |
| B2 | `soutenir que` | verb | `inSameFileDuplicate` | Duplicate term 'soutenir que' (verb) appears 2 times in file |

#### File: `vocabulary/fr/B2/vocabulary.js` (36 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | noun | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun) appears 22 times in file |
| B2 | *(EMPTY)* | conjunction | `emptyField` | Word/term field is empty or whitespace-only |
| B2 | *(EMPTY)* | adverb | `emptyField` | Word/term field is empty or whitespace-only |
| B2 | *(EMPTY)* | phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (phrase) appears 2 times in file |
| B2 | *(EMPTY)* | phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (phrase) appears 2 times in file |
| B2 | *(EMPTY)* | noun phrase | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (noun phrase) appears 10 times in file |

#### File: `vocabulary/fr/C1/people.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Jean-Paul Sartre` | - | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'Jean-Paul Sartre' (no-form) appears 2 times in file |
| C1 | `Jean-Paul Sartre` | - | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'Jean-Paul Sartre' (no-form) appears 2 times in file |

#### File: `vocabulary/fr/C1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Comment les biais cognitifs subtils compromettent-ils la prise de décision objective dans le leadership d'entreprise ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Dans quelle mesure le droit de la propriété intellectuelle peine-t-il à s'adapter aux créations de l'intelligence artificielle générative ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `L'aménagement urbain architectural a-t-il le pouvoir de démanteler la ségrégation sociale ancrée ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Comment le relativisme linguistique façonne-t-il les cadres conceptuels à travers différents paradigmes culturels ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Les critères ESG des entreprises peuvent-ils réellement imposer une responsabilité éthique ou encouragent-ils le greenwashing ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Comment les mutations démographiques remettent-elles en question les modèles de sécurité sociale et de retraite à l'échelle mondiale ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Dans quelle mesure les fonds publics devraient-ils prioriser la recherche spatiale au détriment des crises terrestres immédiates ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Comment la surveillance numérique généralisée altère-t-elle la relation psychologique des citoyens avec l'autorité publique ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `La mémoire historique humaine peut-elle préserver son authenticité à l'ère des médias synthétiques et des deepfakes ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Les cadres bioéthiques devraient-ils autoriser la modification génétique germinale à des fins d'amélioration non thérapeutique ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/fr/C1/verbs.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `infrastructure` | verb | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'infrastructure' (verb) appears 2 times in file |
| C1 | `infrastructure` | verb | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'infrastructure' (verb) appears 2 times in file |

#### File: `vocabulary/fr/C1/vocabulary.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `réalité virtuelle` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/fr/C2/adjectives.js` (188 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronique` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronique' (adjective) appears 4 times in file |
| C2 | `antithétique` | adjective | `inSameFileDuplicate` | Duplicate term 'antithétique' (adjective) appears 4 times in file |
| C2 | `arcane` | adjective | `inSameFileDuplicate` | Duplicate term 'arcane' (adjective) appears 4 times in file |
| C2 | `atypique` | adjective | `inSameFileDuplicate` | Duplicate term 'atypique' (adjective) appears 4 times in file |
| C2 | `binaire` | adjective | `inSameFileDuplicate` | Duplicate term 'binaire' (adjective) appears 4 times in file |
| C2 | `catégorique` | adjective | `inSameFileDuplicate` | Duplicate term 'catégorique' (adjective) appears 4 times in file |
| C2 | `circonspect` | adjective | `inSameFileDuplicate` | Duplicate term 'circonspect' (adjective) appears 4 times in file |
| C2 | `clandestin` | adjective | `inSameFileDuplicate` | Duplicate term 'clandestin' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `élusif` | adjective | `inSameFileDuplicate` | Duplicate term 'élusif' (adjective) appears 4 times in file |
| C2 | `ésotérique` | adjective | `inSameFileDuplicate` | Duplicate term 'ésotérique' (adjective) appears 4 times in file |
| C2 | `fallacieux` | adjective | `inSameFileDuplicate` | Duplicate term 'fallacieux' (adjective) appears 4 times in file |
| C2 | `immuable` | adjective | `inSameFileDuplicate` | Duplicate term 'immuable' (adjective) appears 4 times in file |
| C2 | `impartial` | adjective | `inSameFileDuplicate` | Duplicate term 'impartial' (adjective) appears 4 times in file |
| C2 | `incident` | adjective | `inSameFileDuplicate` | Duplicate term 'incident' (adjective) appears 4 times in file |
| C2 | `inhérent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhérent' (adjective) appears 4 times in file |
| C2 | `inimitable` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitable' (adjective) appears 4 times in file |
| C2 | `insidieux` | adjective | `inSameFileDuplicate` | Duplicate term 'insidieux' (adjective) appears 4 times in file |
| C2 | `irréconciliable` | adjective | `inSameFileDuplicate` | Duplicate term 'irréconciliable' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `multiple` | adjective | `inSameFileDuplicate` | Duplicate term 'multiple' (adjective) appears 4 times in file |
| C2 | `nébuleux` | adjective | `inSameFileDuplicate` | Duplicate term 'nébuleux' (adjective) appears 4 times in file |
| C2 | `normatif` | adjective | `inSameFileDuplicate` | Duplicate term 'normatif' (adjective) appears 4 times in file |
| C2 | `nuancé` | adjective | `inSameFileDuplicate` | Duplicate term 'nuancé' (adjective) appears 4 times in file |
| C2 | `oblique` | adjective | `inSameFileDuplicate` | Duplicate term 'oblique' (adjective) appears 4 times in file |
| C2 | `opaque` | adjective | `inSameFileDuplicate` | Duplicate term 'opaque' (adjective) appears 4 times in file |
| C2 | `ostensible` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensible' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasif` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasif' (adjective) appears 4 times in file |
| C2 | `polarisant` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisant' (adjective) appears 4 times in file |
| C2 | `précaire` | adjective | `inSameFileDuplicate` | Duplicate term 'précaire' (adjective) appears 4 times in file |
| C2 | `prescriptif` | adjective | `inSameFileDuplicate` | Duplicate term 'prescriptif' (adjective) appears 4 times in file |
| C2 | `prolongé` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongé' (adjective) appears 4 times in file |
| C2 | `réducteur` | adjective | `inSameFileDuplicate` | Duplicate term 'réducteur' (adjective) appears 4 times in file |
| C2 | `séminal` | adjective | `inSameFileDuplicate` | Duplicate term 'séminal' (adjective) appears 4 times in file |
| C2 | `spécieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spécieux' (adjective) appears 4 times in file |
| C2 | `spurieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spurieux' (adjective) appears 4 times in file |
| C2 | `subversif` | adjective | `inSameFileDuplicate` | Duplicate term 'subversif' (adjective) appears 4 times in file |
| C2 | `tacite` | adjective | `inSameFileDuplicate` | Duplicate term 'tacite' (adjective) appears 4 times in file |
| C2 | `ténu` | adjective | `inSameFileDuplicate` | Duplicate term 'ténu' (adjective) appears 4 times in file |
| C2 | `transitoire` | adjective | `inSameFileDuplicate` | Duplicate term 'transitoire' (adjective) appears 4 times in file |
| C2 | `ubiquiste` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquiste' (adjective) appears 4 times in file |
| C2 | `univoque` | adjective | `inSameFileDuplicate` | Duplicate term 'univoque' (adjective) appears 4 times in file |
| C2 | `sans précédent` | adjective | `inSameFileDuplicate` | Duplicate term 'sans précédent' (adjective) appears 4 times in file |
| C2 | `insoutenable` | adjective | `inSameFileDuplicate` | Duplicate term 'insoutenable' (adjective) appears 4 times in file |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronique` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronique' (adjective) appears 4 times in file |
| C2 | `antithétique` | adjective | `inSameFileDuplicate` | Duplicate term 'antithétique' (adjective) appears 4 times in file |
| C2 | `arcane` | adjective | `inSameFileDuplicate` | Duplicate term 'arcane' (adjective) appears 4 times in file |
| C2 | `atypique` | adjective | `inSameFileDuplicate` | Duplicate term 'atypique' (adjective) appears 4 times in file |
| C2 | `binaire` | adjective | `inSameFileDuplicate` | Duplicate term 'binaire' (adjective) appears 4 times in file |
| C2 | `catégorique` | adjective | `inSameFileDuplicate` | Duplicate term 'catégorique' (adjective) appears 4 times in file |
| C2 | `circonspect` | adjective | `inSameFileDuplicate` | Duplicate term 'circonspect' (adjective) appears 4 times in file |
| C2 | `clandestin` | adjective | `inSameFileDuplicate` | Duplicate term 'clandestin' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `élusif` | adjective | `inSameFileDuplicate` | Duplicate term 'élusif' (adjective) appears 4 times in file |
| C2 | `ésotérique` | adjective | `inSameFileDuplicate` | Duplicate term 'ésotérique' (adjective) appears 4 times in file |
| C2 | `fallacieux` | adjective | `inSameFileDuplicate` | Duplicate term 'fallacieux' (adjective) appears 4 times in file |
| C2 | `immuable` | adjective | `inSameFileDuplicate` | Duplicate term 'immuable' (adjective) appears 4 times in file |
| C2 | `impartial` | adjective | `inSameFileDuplicate` | Duplicate term 'impartial' (adjective) appears 4 times in file |
| C2 | `incident` | adjective | `inSameFileDuplicate` | Duplicate term 'incident' (adjective) appears 4 times in file |
| C2 | `inhérent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhérent' (adjective) appears 4 times in file |
| C2 | `inimitable` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitable' (adjective) appears 4 times in file |
| C2 | `insidieux` | adjective | `inSameFileDuplicate` | Duplicate term 'insidieux' (adjective) appears 4 times in file |
| C2 | `irréconciliable` | adjective | `inSameFileDuplicate` | Duplicate term 'irréconciliable' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `multiple` | adjective | `inSameFileDuplicate` | Duplicate term 'multiple' (adjective) appears 4 times in file |
| C2 | `nébuleux` | adjective | `inSameFileDuplicate` | Duplicate term 'nébuleux' (adjective) appears 4 times in file |
| C2 | `normatif` | adjective | `inSameFileDuplicate` | Duplicate term 'normatif' (adjective) appears 4 times in file |
| C2 | `nuancé` | adjective | `inSameFileDuplicate` | Duplicate term 'nuancé' (adjective) appears 4 times in file |
| C2 | `oblique` | adjective | `inSameFileDuplicate` | Duplicate term 'oblique' (adjective) appears 4 times in file |
| C2 | `opaque` | adjective | `inSameFileDuplicate` | Duplicate term 'opaque' (adjective) appears 4 times in file |
| C2 | `ostensible` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensible' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasif` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasif' (adjective) appears 4 times in file |
| C2 | `polarisant` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisant' (adjective) appears 4 times in file |
| C2 | `précaire` | adjective | `inSameFileDuplicate` | Duplicate term 'précaire' (adjective) appears 4 times in file |
| C2 | `prescriptif` | adjective | `inSameFileDuplicate` | Duplicate term 'prescriptif' (adjective) appears 4 times in file |
| C2 | `prolongé` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongé' (adjective) appears 4 times in file |
| C2 | `réducteur` | adjective | `inSameFileDuplicate` | Duplicate term 'réducteur' (adjective) appears 4 times in file |
| C2 | `séminal` | adjective | `inSameFileDuplicate` | Duplicate term 'séminal' (adjective) appears 4 times in file |
| C2 | `spécieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spécieux' (adjective) appears 4 times in file |
| C2 | `spurieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spurieux' (adjective) appears 4 times in file |
| C2 | `subversif` | adjective | `inSameFileDuplicate` | Duplicate term 'subversif' (adjective) appears 4 times in file |
| C2 | `tacite` | adjective | `inSameFileDuplicate` | Duplicate term 'tacite' (adjective) appears 4 times in file |
| C2 | `ténu` | adjective | `inSameFileDuplicate` | Duplicate term 'ténu' (adjective) appears 4 times in file |
| C2 | `transitoire` | adjective | `inSameFileDuplicate` | Duplicate term 'transitoire' (adjective) appears 4 times in file |
| C2 | `ubiquiste` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquiste' (adjective) appears 4 times in file |
| C2 | `univoque` | adjective | `inSameFileDuplicate` | Duplicate term 'univoque' (adjective) appears 4 times in file |
| C2 | `sans précédent` | adjective | `inSameFileDuplicate` | Duplicate term 'sans précédent' (adjective) appears 4 times in file |
| C2 | `insoutenable` | adjective | `inSameFileDuplicate` | Duplicate term 'insoutenable' (adjective) appears 4 times in file |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronique` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronique' (adjective) appears 4 times in file |
| C2 | `antithétique` | adjective | `inSameFileDuplicate` | Duplicate term 'antithétique' (adjective) appears 4 times in file |
| C2 | `arcane` | adjective | `inSameFileDuplicate` | Duplicate term 'arcane' (adjective) appears 4 times in file |
| C2 | `atypique` | adjective | `inSameFileDuplicate` | Duplicate term 'atypique' (adjective) appears 4 times in file |
| C2 | `binaire` | adjective | `inSameFileDuplicate` | Duplicate term 'binaire' (adjective) appears 4 times in file |
| C2 | `catégorique` | adjective | `inSameFileDuplicate` | Duplicate term 'catégorique' (adjective) appears 4 times in file |
| C2 | `circonspect` | adjective | `inSameFileDuplicate` | Duplicate term 'circonspect' (adjective) appears 4 times in file |
| C2 | `clandestin` | adjective | `inSameFileDuplicate` | Duplicate term 'clandestin' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `élusif` | adjective | `inSameFileDuplicate` | Duplicate term 'élusif' (adjective) appears 4 times in file |
| C2 | `ésotérique` | adjective | `inSameFileDuplicate` | Duplicate term 'ésotérique' (adjective) appears 4 times in file |
| C2 | `fallacieux` | adjective | `inSameFileDuplicate` | Duplicate term 'fallacieux' (adjective) appears 4 times in file |
| C2 | `immuable` | adjective | `inSameFileDuplicate` | Duplicate term 'immuable' (adjective) appears 4 times in file |
| C2 | `impartial` | adjective | `inSameFileDuplicate` | Duplicate term 'impartial' (adjective) appears 4 times in file |
| C2 | `incident` | adjective | `inSameFileDuplicate` | Duplicate term 'incident' (adjective) appears 4 times in file |
| C2 | `inhérent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhérent' (adjective) appears 4 times in file |
| C2 | `inimitable` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitable' (adjective) appears 4 times in file |
| C2 | `insidieux` | adjective | `inSameFileDuplicate` | Duplicate term 'insidieux' (adjective) appears 4 times in file |
| C2 | `irréconciliable` | adjective | `inSameFileDuplicate` | Duplicate term 'irréconciliable' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `multiple` | adjective | `inSameFileDuplicate` | Duplicate term 'multiple' (adjective) appears 4 times in file |
| C2 | `nébuleux` | adjective | `inSameFileDuplicate` | Duplicate term 'nébuleux' (adjective) appears 4 times in file |
| C2 | `normatif` | adjective | `inSameFileDuplicate` | Duplicate term 'normatif' (adjective) appears 4 times in file |
| C2 | `nuancé` | adjective | `inSameFileDuplicate` | Duplicate term 'nuancé' (adjective) appears 4 times in file |
| C2 | `oblique` | adjective | `inSameFileDuplicate` | Duplicate term 'oblique' (adjective) appears 4 times in file |
| C2 | `opaque` | adjective | `inSameFileDuplicate` | Duplicate term 'opaque' (adjective) appears 4 times in file |
| C2 | `ostensible` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensible' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasif` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasif' (adjective) appears 4 times in file |
| C2 | `polarisant` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisant' (adjective) appears 4 times in file |
| C2 | `précaire` | adjective | `inSameFileDuplicate` | Duplicate term 'précaire' (adjective) appears 4 times in file |
| C2 | `prescriptif` | adjective | `inSameFileDuplicate` | Duplicate term 'prescriptif' (adjective) appears 4 times in file |
| C2 | `prolongé` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongé' (adjective) appears 4 times in file |
| C2 | `réducteur` | adjective | `inSameFileDuplicate` | Duplicate term 'réducteur' (adjective) appears 4 times in file |
| C2 | `séminal` | adjective | `inSameFileDuplicate` | Duplicate term 'séminal' (adjective) appears 4 times in file |
| C2 | `spécieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spécieux' (adjective) appears 4 times in file |
| C2 | `spurieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spurieux' (adjective) appears 4 times in file |
| C2 | `subversif` | adjective | `inSameFileDuplicate` | Duplicate term 'subversif' (adjective) appears 4 times in file |
| C2 | `tacite` | adjective | `inSameFileDuplicate` | Duplicate term 'tacite' (adjective) appears 4 times in file |
| C2 | `ténu` | adjective | `inSameFileDuplicate` | Duplicate term 'ténu' (adjective) appears 4 times in file |
| C2 | `transitoire` | adjective | `inSameFileDuplicate` | Duplicate term 'transitoire' (adjective) appears 4 times in file |
| C2 | `ubiquiste` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquiste' (adjective) appears 4 times in file |
| C2 | `univoque` | adjective | `inSameFileDuplicate` | Duplicate term 'univoque' (adjective) appears 4 times in file |
| C2 | `sans précédent` | adjective | `inSameFileDuplicate` | Duplicate term 'sans précédent' (adjective) appears 4 times in file |
| C2 | `insoutenable` | adjective | `inSameFileDuplicate` | Duplicate term 'insoutenable' (adjective) appears 4 times in file |
| C2 | `abrupt` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupt' (adjective) appears 4 times in file |
| C2 | `abstrus` | adjective | `inSameFileDuplicate` | Duplicate term 'abstrus' (adjective) appears 4 times in file |
| C2 | `anachronique` | adjective | `inSameFileDuplicate` | Duplicate term 'anachronique' (adjective) appears 4 times in file |
| C2 | `antithétique` | adjective | `inSameFileDuplicate` | Duplicate term 'antithétique' (adjective) appears 4 times in file |
| C2 | `arcane` | adjective | `inSameFileDuplicate` | Duplicate term 'arcane' (adjective) appears 4 times in file |
| C2 | `atypique` | adjective | `inSameFileDuplicate` | Duplicate term 'atypique' (adjective) appears 4 times in file |
| C2 | `binaire` | adjective | `inSameFileDuplicate` | Duplicate term 'binaire' (adjective) appears 4 times in file |
| C2 | `catégorique` | adjective | `inSameFileDuplicate` | Duplicate term 'catégorique' (adjective) appears 4 times in file |
| C2 | `circonspect` | adjective | `inSameFileDuplicate` | Duplicate term 'circonspect' (adjective) appears 4 times in file |
| C2 | `clandestin` | adjective | `inSameFileDuplicate` | Duplicate term 'clandestin' (adjective) appears 4 times in file |
| C2 | `diffus` | adjective | `inSameFileDuplicate` | Duplicate term 'diffus' (adjective) appears 4 times in file |
| C2 | `élusif` | adjective | `inSameFileDuplicate` | Duplicate term 'élusif' (adjective) appears 4 times in file |
| C2 | `ésotérique` | adjective | `inSameFileDuplicate` | Duplicate term 'ésotérique' (adjective) appears 4 times in file |
| C2 | `fallacieux` | adjective | `inSameFileDuplicate` | Duplicate term 'fallacieux' (adjective) appears 4 times in file |
| C2 | `immuable` | adjective | `inSameFileDuplicate` | Duplicate term 'immuable' (adjective) appears 4 times in file |
| C2 | `impartial` | adjective | `inSameFileDuplicate` | Duplicate term 'impartial' (adjective) appears 4 times in file |
| C2 | `incident` | adjective | `inSameFileDuplicate` | Duplicate term 'incident' (adjective) appears 4 times in file |
| C2 | `inhérent` | adjective | `inSameFileDuplicate` | Duplicate term 'inhérent' (adjective) appears 4 times in file |
| C2 | `inimitable` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitable' (adjective) appears 4 times in file |
| C2 | `insidieux` | adjective | `inSameFileDuplicate` | Duplicate term 'insidieux' (adjective) appears 4 times in file |
| C2 | `irréconciliable` | adjective | `inSameFileDuplicate` | Duplicate term 'irréconciliable' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `multiple` | adjective | `inSameFileDuplicate` | Duplicate term 'multiple' (adjective) appears 4 times in file |
| C2 | `nébuleux` | adjective | `inSameFileDuplicate` | Duplicate term 'nébuleux' (adjective) appears 4 times in file |
| C2 | `normatif` | adjective | `inSameFileDuplicate` | Duplicate term 'normatif' (adjective) appears 4 times in file |
| C2 | `nuancé` | adjective | `inSameFileDuplicate` | Duplicate term 'nuancé' (adjective) appears 4 times in file |
| C2 | `oblique` | adjective | `inSameFileDuplicate` | Duplicate term 'oblique' (adjective) appears 4 times in file |
| C2 | `opaque` | adjective | `inSameFileDuplicate` | Duplicate term 'opaque' (adjective) appears 4 times in file |
| C2 | `ostensible` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensible' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasif` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasif' (adjective) appears 4 times in file |
| C2 | `polarisant` | adjective | `inSameFileDuplicate` | Duplicate term 'polarisant' (adjective) appears 4 times in file |
| C2 | `précaire` | adjective | `inSameFileDuplicate` | Duplicate term 'précaire' (adjective) appears 4 times in file |
| C2 | `prescriptif` | adjective | `inSameFileDuplicate` | Duplicate term 'prescriptif' (adjective) appears 4 times in file |
| C2 | `prolongé` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongé' (adjective) appears 4 times in file |
| C2 | `réducteur` | adjective | `inSameFileDuplicate` | Duplicate term 'réducteur' (adjective) appears 4 times in file |
| C2 | `séminal` | adjective | `inSameFileDuplicate` | Duplicate term 'séminal' (adjective) appears 4 times in file |
| C2 | `spécieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spécieux' (adjective) appears 4 times in file |
| C2 | `spurieux` | adjective | `inSameFileDuplicate` | Duplicate term 'spurieux' (adjective) appears 4 times in file |
| C2 | `subversif` | adjective | `inSameFileDuplicate` | Duplicate term 'subversif' (adjective) appears 4 times in file |
| C2 | `tacite` | adjective | `inSameFileDuplicate` | Duplicate term 'tacite' (adjective) appears 4 times in file |
| C2 | `ténu` | adjective | `inSameFileDuplicate` | Duplicate term 'ténu' (adjective) appears 4 times in file |
| C2 | `transitoire` | adjective | `inSameFileDuplicate` | Duplicate term 'transitoire' (adjective) appears 4 times in file |
| C2 | `ubiquiste` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquiste' (adjective) appears 4 times in file |
| C2 | `univoque` | adjective | `inSameFileDuplicate` | Duplicate term 'univoque' (adjective) appears 4 times in file |
| C2 | `sans précédent` | adjective | `inSameFileDuplicate` | Duplicate term 'sans précédent' (adjective) appears 4 times in file |
| C2 | `insoutenable` | adjective | `inSameFileDuplicate` | Duplicate term 'insoutenable' (adjective) appears 4 times in file |

#### File: `vocabulary/fr/C2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `Le paradigme philosophique du déterminisme technologique constitue-t-il une réalité inéluctable ou une abdication de l'autonomie humaine ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Dans quelle mesure la nostalgie culturelle marchandisée entrave-t-elle la véritable innovation artistique dans la société contemporaine ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Comment les politiques monétaires souveraines font-elles face à la déstabilisation systémique posée par les cryptomonnaies décentralisées ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `La justice épistémique peut-elle être atteinte au sein de cadres de recherche académiques historiquement ancrés dans l'hégémonie eurocentrique ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `De quelles manières l'érosion des tiers-lieux exacerbe-t-elle la solitude existentielle dans les métropoles hyperconnectées ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Le paradigme anthropocentrique des traités climatiques internationaux méconnaît-il fondamentalement l'interconnexion écologique ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Comment les systèmes de recommandation algorithmiques reconfigurent-ils subtilement l'autonomie et l'autodétermination humaine ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Dans quelle mesure les technologies transhumanistes remettent-elles en question les définitions biologiques établies de la personne humaine ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `La méritocratie fonctionne-t-elle comme un mythe légitimant les inégalités structurelles plutôt que comme un instrument de mobilité sociale ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Comment les discours politiques de l'ère de la post-vérité subvertissent-ils la délibération démocratique et la confiance institutionnelle ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/fr/C2/verbs.js` (114 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `changement de paradigme` | verb | `inSameFileDuplicate` | Duplicate term 'changement de paradigme' (verb) appears 2 times in file |
| C2 | `réifier` | verb | `inSameFileDuplicate` | Duplicate term 'réifier' (verb) appears 2 times in file |
| C2 | `sublimer` | verb | `inSameFileDuplicate` | Duplicate term 'sublimer' (verb) appears 2 times in file |
| C2 | `se fonder sur` | verb | `inSameFileDuplicate` | Duplicate term 'se fonder sur' (verb) appears 2 times in file |
| C2 | `instancier` | verb | `inSameFileDuplicate` | Duplicate term 'instancier' (verb) appears 2 times in file |
| C2 | `nier` | verb | `inSameFileDuplicate` | Duplicate term 'nier' (verb) appears 2 times in file |
| C2 | `transcender` | verb | `inSameFileDuplicate` | Duplicate term 'transcender' (verb) appears 2 times in file |
| C2 | `médier` | verb | `inSameFileDuplicate` | Duplicate term 'médier' (verb) appears 2 times in file |
| C2 | `élider` | verb | `inSameFileDuplicate` | Duplicate term 'élider' (verb) appears 2 times in file |
| C2 | `obfusquer` | verb | `inSameFileDuplicate` | Duplicate term 'obfusquer' (verb) appears 2 times in file |
| C2 | `amalgamer` | verb | `inSameFileDuplicate` | Duplicate term 'amalgamer' (verb) appears 2 times in file |
| C2 | `invoquer` | verb | `inSameFileDuplicate` | Duplicate term 'invoquer' (verb) appears 2 times in file |
| C2 | `mettre en avant` | verb | `inSameFileDuplicate` | Duplicate term 'mettre en avant' (verb) appears 2 times in file |
| C2 | `récupérer` | verb | `inSameFileDuplicate` | Duplicate term 'récupérer' (verb) appears 2 times in file |
| C2 | `déstabiliser` | verb | `inSameFileDuplicate` | Duplicate term 'déstabiliser' (verb) appears 2 times in file |
| C2 | `marchandiser` | verb | `inSameFileDuplicate` | Duplicate term 'marchandiser' (verb) appears 2 times in file |
| C2 | `instrumentaliser` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentaliser' (verb) appears 2 times in file |
| C2 | `valoriser` | verb | `inSameFileDuplicate` | Duplicate term 'valoriser' (verb) appears 2 times in file |
| C2 | `fétichiser` | verb | `inSameFileDuplicate` | Duplicate term 'fétichiser' (verb) appears 2 times in file |
| C2 | `hégémoniser` | verb | `inSameFileDuplicate` | Duplicate term 'hégémoniser' (verb) appears 2 times in file |
| C2 | `aliéner` | verb | `inSameFileDuplicate` | Duplicate term 'aliéner' (verb) appears 2 times in file |
| C2 | `démarquer` | verb | `inSameFileDuplicate` | Duplicate term 'démarquer' (verb) appears 2 times in file |
| C2 | `délimiter` | verb | `inSameFileDuplicate` | Duplicate term 'délimiter' (verb) appears 2 times in file |
| C2 | `militer` | verb | `inSameFileDuplicate` | Duplicate term 'militer' (verb) appears 2 times in file |
| C2 | `vicier` | verb | `inSameFileDuplicate` | Duplicate term 'vicier' (verb) appears 2 times in file |
| C2 | `contredire` | verb | `inSameFileDuplicate` | Duplicate term 'contredire' (verb) appears 2 times in file |
| C2 | `abroger` | verb | `inSameFileDuplicate` | Duplicate term 'abroger' (verb) appears 2 times in file |
| C2 | `déconstruire` | verb | `inSameFileDuplicate` | Duplicate term 'déconstruire' (verb) appears 2 times in file |
| C2 | `problématiser` | verb | `inSameFileDuplicate` | Duplicate term 'problématiser' (verb) appears 2 times in file |
| C2 | `décortiquer` | verb | `inSameFileDuplicate` | Duplicate term 'décortiquer' (verb) appears 2 times in file |
| C2 | `forclore` | verb | `inSameFileDuplicate` | Duplicate term 'forclore' (verb) appears 2 times in file |
| C2 | `dialectiser` | verb | `inSameFileDuplicate` | Duplicate term 'dialectiser' (verb) appears 2 times in file |
| C2 | `contrevenir` | verb | `inSameFileDuplicate` | Duplicate term 'contrevenir' (verb) appears 2 times in file |
| C2 | `subsumer` | verb | `inSameFileDuplicate` | Duplicate term 'subsumer' (verb) appears 2 times in file |
| C2 | `accentuer` | verb | `inSameFileDuplicate` | Duplicate term 'accentuer' (verb) appears 2 times in file |
| C2 | `acquiescer` | verb | `inSameFileDuplicate` | Duplicate term 'acquiescer' (verb) appears 2 times in file |
| C2 | `soulager` | verb | `inSameFileDuplicate` | Duplicate term 'soulager' (verb) appears 2 times in file |
| C2 | `contourner` | verb | `inSameFileDuplicate` | Duplicate term 'contourner' (verb) appears 2 times in file |
| C2 | `corroborer` | verb | `inSameFileDuplicate` | Duplicate term 'corroborer' (verb) appears 2 times in file |
| C2 | `disséminer` | verb | `inSameFileDuplicate` | Duplicate term 'disséminer' (verb) appears 2 times in file |
| C2 | `encapsuler` | verb | `inSameFileDuplicate` | Duplicate term 'encapsuler' (verb) appears 2 times in file |
| C2 | `engendrer` | verb | `inSameFileDuplicate` | Duplicate term 'engendrer' (verb) appears 2 times in file |
| C2 | `exacerber` | verb | `inSameFileDuplicate` | Duplicate term 'exacerber' (verb) appears 2 times in file |
| C2 | `exemplifier` | verb | `inSameFileDuplicate` | Duplicate term 'exemplifier' (verb) appears 2 times in file |
| C2 | `entraver` | verb | `inSameFileDuplicate` | Duplicate term 'entraver' (verb) appears 2 times in file |
| C2 | `atténuer` | verb | `inSameFileDuplicate` | Duplicate term 'atténuer' (verb) appears 2 times in file |
| C2 | `obliger` | verb | `inSameFileDuplicate` | Duplicate term 'obliger' (verb) appears 2 times in file |
| C2 | `imprégner` | verb | `inSameFileDuplicate` | Duplicate term 'imprégner' (verb) appears 2 times in file |
| C2 | `exclure` | verb | `inSameFileDuplicate` | Duplicate term 'exclure' (verb) appears 2 times in file |
| C2 | `réconcilier` | verb | `inSameFileDuplicate` | Duplicate term 'réconcilier' (verb) appears 2 times in file |
| C2 | `supplanter` | verb | `inSameFileDuplicate` | Duplicate term 'supplanter' (verb) appears 2 times in file |
| C2 | `sous-tendre` | verb | `inSameFileDuplicate` | Duplicate term 'sous-tendre' (verb) appears 2 times in file |
| C2 | `justifier` | verb | `inSameFileDuplicate` | Duplicate term 'justifier' (verb) appears 2 times in file |
| C2 | `reposer sur` | verb | `inSameFileDuplicate` | Duplicate term 'reposer sur' (verb) appears 2 times in file |
| C2 | `se débattre avec` | verb | `inSameFileDuplicate` | Duplicate term 'se débattre avec' (verb) appears 2 times in file |
| C2 | `minimiser` | verb | `inSameFileDuplicate` | Duplicate term 'minimiser' (verb) appears 2 times in file |
| C2 | `masquer` | verb | `inSameFileDuplicate` | Duplicate term 'masquer' (verb) appears 2 times in file |
| C2 | `changement de paradigme` | verb | `inSameFileDuplicate` | Duplicate term 'changement de paradigme' (verb) appears 2 times in file |
| C2 | `réifier` | verb | `inSameFileDuplicate` | Duplicate term 'réifier' (verb) appears 2 times in file |
| C2 | `sublimer` | verb | `inSameFileDuplicate` | Duplicate term 'sublimer' (verb) appears 2 times in file |
| C2 | `se fonder sur` | verb | `inSameFileDuplicate` | Duplicate term 'se fonder sur' (verb) appears 2 times in file |
| C2 | `instancier` | verb | `inSameFileDuplicate` | Duplicate term 'instancier' (verb) appears 2 times in file |
| C2 | `nier` | verb | `inSameFileDuplicate` | Duplicate term 'nier' (verb) appears 2 times in file |
| C2 | `transcender` | verb | `inSameFileDuplicate` | Duplicate term 'transcender' (verb) appears 2 times in file |
| C2 | `médier` | verb | `inSameFileDuplicate` | Duplicate term 'médier' (verb) appears 2 times in file |
| C2 | `élider` | verb | `inSameFileDuplicate` | Duplicate term 'élider' (verb) appears 2 times in file |
| C2 | `obfusquer` | verb | `inSameFileDuplicate` | Duplicate term 'obfusquer' (verb) appears 2 times in file |
| C2 | `amalgamer` | verb | `inSameFileDuplicate` | Duplicate term 'amalgamer' (verb) appears 2 times in file |
| C2 | `invoquer` | verb | `inSameFileDuplicate` | Duplicate term 'invoquer' (verb) appears 2 times in file |
| C2 | `mettre en avant` | verb | `inSameFileDuplicate` | Duplicate term 'mettre en avant' (verb) appears 2 times in file |
| C2 | `récupérer` | verb | `inSameFileDuplicate` | Duplicate term 'récupérer' (verb) appears 2 times in file |
| C2 | `déstabiliser` | verb | `inSameFileDuplicate` | Duplicate term 'déstabiliser' (verb) appears 2 times in file |
| C2 | `marchandiser` | verb | `inSameFileDuplicate` | Duplicate term 'marchandiser' (verb) appears 2 times in file |
| C2 | `instrumentaliser` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentaliser' (verb) appears 2 times in file |
| C2 | `valoriser` | verb | `inSameFileDuplicate` | Duplicate term 'valoriser' (verb) appears 2 times in file |
| C2 | `fétichiser` | verb | `inSameFileDuplicate` | Duplicate term 'fétichiser' (verb) appears 2 times in file |
| C2 | `hégémoniser` | verb | `inSameFileDuplicate` | Duplicate term 'hégémoniser' (verb) appears 2 times in file |
| C2 | `aliéner` | verb | `inSameFileDuplicate` | Duplicate term 'aliéner' (verb) appears 2 times in file |
| C2 | `démarquer` | verb | `inSameFileDuplicate` | Duplicate term 'démarquer' (verb) appears 2 times in file |
| C2 | `délimiter` | verb | `inSameFileDuplicate` | Duplicate term 'délimiter' (verb) appears 2 times in file |
| C2 | `militer` | verb | `inSameFileDuplicate` | Duplicate term 'militer' (verb) appears 2 times in file |
| C2 | `vicier` | verb | `inSameFileDuplicate` | Duplicate term 'vicier' (verb) appears 2 times in file |
| C2 | `contredire` | verb | `inSameFileDuplicate` | Duplicate term 'contredire' (verb) appears 2 times in file |
| C2 | `abroger` | verb | `inSameFileDuplicate` | Duplicate term 'abroger' (verb) appears 2 times in file |
| C2 | `déconstruire` | verb | `inSameFileDuplicate` | Duplicate term 'déconstruire' (verb) appears 2 times in file |
| C2 | `problématiser` | verb | `inSameFileDuplicate` | Duplicate term 'problématiser' (verb) appears 2 times in file |
| C2 | `décortiquer` | verb | `inSameFileDuplicate` | Duplicate term 'décortiquer' (verb) appears 2 times in file |
| C2 | `forclore` | verb | `inSameFileDuplicate` | Duplicate term 'forclore' (verb) appears 2 times in file |
| C2 | `dialectiser` | verb | `inSameFileDuplicate` | Duplicate term 'dialectiser' (verb) appears 2 times in file |
| C2 | `contrevenir` | verb | `inSameFileDuplicate` | Duplicate term 'contrevenir' (verb) appears 2 times in file |
| C2 | `subsumer` | verb | `inSameFileDuplicate` | Duplicate term 'subsumer' (verb) appears 2 times in file |
| C2 | `accentuer` | verb | `inSameFileDuplicate` | Duplicate term 'accentuer' (verb) appears 2 times in file |
| C2 | `acquiescer` | verb | `inSameFileDuplicate` | Duplicate term 'acquiescer' (verb) appears 2 times in file |
| C2 | `soulager` | verb | `inSameFileDuplicate` | Duplicate term 'soulager' (verb) appears 2 times in file |
| C2 | `contourner` | verb | `inSameFileDuplicate` | Duplicate term 'contourner' (verb) appears 2 times in file |
| C2 | `corroborer` | verb | `inSameFileDuplicate` | Duplicate term 'corroborer' (verb) appears 2 times in file |
| C2 | `disséminer` | verb | `inSameFileDuplicate` | Duplicate term 'disséminer' (verb) appears 2 times in file |
| C2 | `encapsuler` | verb | `inSameFileDuplicate` | Duplicate term 'encapsuler' (verb) appears 2 times in file |
| C2 | `engendrer` | verb | `inSameFileDuplicate` | Duplicate term 'engendrer' (verb) appears 2 times in file |
| C2 | `exacerber` | verb | `inSameFileDuplicate` | Duplicate term 'exacerber' (verb) appears 2 times in file |
| C2 | `exemplifier` | verb | `inSameFileDuplicate` | Duplicate term 'exemplifier' (verb) appears 2 times in file |
| C2 | `entraver` | verb | `inSameFileDuplicate` | Duplicate term 'entraver' (verb) appears 2 times in file |
| C2 | `atténuer` | verb | `inSameFileDuplicate` | Duplicate term 'atténuer' (verb) appears 2 times in file |
| C2 | `obliger` | verb | `inSameFileDuplicate` | Duplicate term 'obliger' (verb) appears 2 times in file |
| C2 | `imprégner` | verb | `inSameFileDuplicate` | Duplicate term 'imprégner' (verb) appears 2 times in file |
| C2 | `exclure` | verb | `inSameFileDuplicate` | Duplicate term 'exclure' (verb) appears 2 times in file |
| C2 | `réconcilier` | verb | `inSameFileDuplicate` | Duplicate term 'réconcilier' (verb) appears 2 times in file |
| C2 | `supplanter` | verb | `inSameFileDuplicate` | Duplicate term 'supplanter' (verb) appears 2 times in file |
| C2 | `sous-tendre` | verb | `inSameFileDuplicate` | Duplicate term 'sous-tendre' (verb) appears 2 times in file |
| C2 | `justifier` | verb | `inSameFileDuplicate` | Duplicate term 'justifier' (verb) appears 2 times in file |
| C2 | `reposer sur` | verb | `inSameFileDuplicate` | Duplicate term 'reposer sur' (verb) appears 2 times in file |
| C2 | `se débattre avec` | verb | `inSameFileDuplicate` | Duplicate term 'se débattre avec' (verb) appears 2 times in file |
| C2 | `minimiser` | verb | `inSameFileDuplicate` | Duplicate term 'minimiser' (verb) appears 2 times in file |
| C2 | `masquer` | verb | `inSameFileDuplicate` | Duplicate term 'masquer' (verb) appears 2 times in file |

### HY (Armenian) — 311 Flagged Entries out of 625 Category (a) Entries

#### File: `vocabulary/hy/B1/locations.js` (11 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Ավստրալիա` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ճապոնիա` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Չինաստան` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Բրազիլիա` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Հնդկաստան` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Տոկիո` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Սիդնեյ` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Պեկին` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Ռիո դե Ժանեյրո` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Կահիրե` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Դելի` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/hy/B2/fluency.js` (22 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |

#### File: `vocabulary/hy/B2/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/hy/C1/fluency.js` (20 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |

#### File: `vocabulary/hy/C1/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/hy/C2/adjectives.js` (118 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `միջգիտակարգային` | adjective | `inSameFileDuplicate` | Duplicate term 'միջգիտակարգային' (adjective) appears 2 times in file |
| C2 | `հերմենևտիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'հերմենևտիկ' (adjective) appears 2 times in file |
| C2 | `նույնաբանական` | adjective | `inSameFileDuplicate` | Duplicate term 'նույնաբանական' (adjective) appears 2 times in file |
| C2 | `բազմիմաստ` | adjective | `inSameFileDuplicate` | Duplicate term 'բազմիմաստ' (adjective) appears 2 times in file |
| C2 | `հևրիստիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'հևրիստիկ' (adjective) appears 2 times in file |
| C2 | `հետգաղութային` | adjective | `inSameFileDuplicate` | Duplicate term 'հետգաղութային' (adjective) appears 2 times in file |
| C2 | `բազմաբևեռ` | adjective | `inSameFileDuplicate` | Duplicate term 'բազմաբևեռ' (adjective) appears 2 times in file |
| C2 | `կոսմոպոլիտ` | adjective | `inSameFileDuplicate` | Duplicate term 'կոսմոպոլիտ' (adjective) appears 2 times in file |
| C2 | `նարցիսիստական` | adjective | `inSameFileDuplicate` | Duplicate term 'նարցիսիստական' (adjective) appears 2 times in file |
| C2 | `հերետիկոսական` | adjective | `inSameFileDuplicate` | Duplicate term 'հերետիկոսական' (adjective) appears 2 times in file |
| C2 | `ներհատուկ` | adjective | `inSameFileDuplicate` | Duplicate term 'ներհատուկ' (adjective) appears 2 times in file |
| C2 | `կտրուկ` | adjective | `inSameFileDuplicate` | Duplicate term 'կտրուկ' (adjective) appears 2 times in file |
| C2 | `խրթին` | adjective | `inSameFileDuplicate` | Duplicate term 'խրթին' (adjective) appears 2 times in file |
| C2 | `անախրոնիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'անախրոնիկ' (adjective) appears 2 times in file |
| C2 | `հակաթեթիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'հակաթեթիկ' (adjective) appears 2 times in file |
| C2 | `արկանային` | adjective | `inSameFileDuplicate` | Duplicate term 'արկանային' (adjective) appears 2 times in file |
| C2 | `ոչ տիպիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'ոչ տիպիկ' (adjective) appears 2 times in file |
| C2 | `բինար` | adjective | `inSameFileDuplicate` | Duplicate term 'բինար' (adjective) appears 2 times in file |
| C2 | `կատեգորիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'կատեգորիկ' (adjective) appears 2 times in file |
| C2 | `շրջահայաց` | adjective | `inSameFileDuplicate` | Duplicate term 'շրջահայաց' (adjective) appears 2 times in file |
| C2 | `գաղտնի` | adjective | `inSameFileDuplicate` | Duplicate term 'գաղտնի' (adjective) appears 2 times in file |
| C2 | `դիալեկտիկական` | adjective | `inSameFileDuplicate` | Duplicate term 'դիալեկտիկական' (adjective) appears 2 times in file |
| C2 | `դիֆուզ` | adjective | `inSameFileDuplicate` | Duplicate term 'դիֆուզ' (adjective) appears 2 times in file |
| C2 | `դժվարորսալի` | adjective | `inSameFileDuplicate` | Duplicate term 'դժվարորսալի' (adjective) appears 2 times in file |
| C2 | `էզոթերիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'էզոթերիկ' (adjective) appears 2 times in file |
| C2 | `սխալական` | adjective | `inSameFileDuplicate` | Duplicate term 'սխալական' (adjective) appears 2 times in file |
| C2 | `անփոփոխ` | adjective | `inSameFileDuplicate` | Duplicate term 'անփոփոխ' (adjective) appears 2 times in file |
| C2 | `անկողմնակալ` | adjective | `inSameFileDuplicate` | Duplicate term 'անկողմնակալ' (adjective) appears 2 times in file |
| C2 | `պատահական` | adjective | `inSameFileDuplicate` | Duplicate term 'պատահական' (adjective) appears 2 times in file |
| C2 | `բնածին` | adjective | `inSameFileDuplicate` | Duplicate term 'բնածին' (adjective) appears 2 times in file |
| C2 | `աննման` | adjective | `inSameFileDuplicate` | Duplicate term 'աննման' (adjective) appears 2 times in file |
| C2 | `նենգ` | adjective | `inSameFileDuplicate` | Duplicate term 'նենգ' (adjective) appears 2 times in file |
| C2 | `անհաշտելի` | adjective | `inSameFileDuplicate` | Duplicate term 'անհաշտելի' (adjective) appears 2 times in file |
| C2 | `լիմինալ` | adjective | `inSameFileDuplicate` | Duplicate term 'լիմինալ' (adjective) appears 2 times in file |
| C2 | `բազմազան` | adjective | `inSameFileDuplicate` | Duplicate term 'բազմազան' (adjective) appears 2 times in file |
| C2 | `մշուշոտ` | adjective | `inSameFileDuplicate` | Duplicate term 'մշուշոտ' (adjective) appears 2 times in file |
| C2 | `նորմատիվ` | adjective | `inSameFileDuplicate` | Duplicate term 'նորմատիվ' (adjective) appears 2 times in file |
| C2 | `նրբերանգային` | adjective | `inSameFileDuplicate` | Duplicate term 'նրբերանգային' (adjective) appears 2 times in file |
| C2 | `անուղղակի` | adjective | `inSameFileDuplicate` | Duplicate term 'անուղղակի' (adjective) appears 2 times in file |
| C2 | `անթափանց` | adjective | `inSameFileDuplicate` | Duplicate term 'անթափանց' (adjective) appears 2 times in file |
| C2 | `թվացյալ` | adjective | `inSameFileDuplicate` | Duplicate term 'թվացյալ' (adjective) appears 2 times in file |
| C2 | `պարադոքսալ` | adjective | `inSameFileDuplicate` | Duplicate term 'պարադոքսալ' (adjective) appears 2 times in file |
| C2 | `համատարած` | adjective | `inSameFileDuplicate` | Duplicate term 'համատարած' (adjective) appears 2 times in file |
| C2 | `բևեռացնող` | adjective | `inSameFileDuplicate` | Duplicate term 'բևեռացնող' (adjective) appears 2 times in file |
| C2 | `երերուն` | adjective | `inSameFileDuplicate` | Duplicate term 'երերուն' (adjective) appears 2 times in file |
| C2 | `պրեսկրիպտիվ` | adjective | `inSameFileDuplicate` | Duplicate term 'պրեսկրիպտիվ' (adjective) appears 2 times in file |
| C2 | `ձգձգված` | adjective | `inSameFileDuplicate` | Duplicate term 'ձգձգված' (adjective) appears 2 times in file |
| C2 | `ռեդուկտիվ` | adjective | `inSameFileDuplicate` | Duplicate term 'ռեդուկտիվ' (adjective) appears 2 times in file |
| C2 | `հիմնարար` | adjective | `inSameFileDuplicate` | Duplicate term 'հիմնարար' (adjective) appears 2 times in file |
| C2 | `թվացյալ հիմնավոր` | adjective | `inSameFileDuplicate` | Duplicate term 'թվացյալ հիմնավոր' (adjective) appears 2 times in file |
| C2 | `կեղծ` | adjective | `inSameFileDuplicate` | Duplicate term 'կեղծ' (adjective) appears 2 times in file |
| C2 | `քայքայիչ` | adjective | `inSameFileDuplicate` | Duplicate term 'քայքայիչ' (adjective) appears 2 times in file |
| C2 | `լռելյայն` | adjective | `inSameFileDuplicate` | Duplicate term 'լռելյայն' (adjective) appears 2 times in file |
| C2 | `անցողիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'անցողիկ' (adjective) appears 2 times in file |
| C2 | `ամենուրեք` | adjective | `inSameFileDuplicate` | Duplicate term 'ամենուրեք' (adjective) appears 2 times in file |
| C2 | `միանշանակ` | adjective | `inSameFileDuplicate` | Duplicate term 'միանշանակ' (adjective) appears 2 times in file |
| C2 | `աննախադեպ` | adjective | `inSameFileDuplicate` | Duplicate term 'աննախադեպ' (adjective) appears 2 times in file |
| C2 | `անհիմն` | adjective | `inSameFileDuplicate` | Duplicate term 'անհիմն' (adjective) appears 2 times in file |
| C2 | `ծանրաշարժ` | adjective | `inSameFileDuplicate` | Duplicate term 'ծանրաշարժ' (adjective) appears 2 times in file |
| C2 | `միջգիտակարգային` | adjective | `inSameFileDuplicate` | Duplicate term 'միջգիտակարգային' (adjective) appears 2 times in file |
| C2 | `հերմենևտիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'հերմենևտիկ' (adjective) appears 2 times in file |
| C2 | `նույնաբանական` | adjective | `inSameFileDuplicate` | Duplicate term 'նույնաբանական' (adjective) appears 2 times in file |
| C2 | `բազմիմաստ` | adjective | `inSameFileDuplicate` | Duplicate term 'բազմիմաստ' (adjective) appears 2 times in file |
| C2 | `հևրիստիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'հևրիստիկ' (adjective) appears 2 times in file |
| C2 | `հետգաղութային` | adjective | `inSameFileDuplicate` | Duplicate term 'հետգաղութային' (adjective) appears 2 times in file |
| C2 | `բազմաբևեռ` | adjective | `inSameFileDuplicate` | Duplicate term 'բազմաբևեռ' (adjective) appears 2 times in file |
| C2 | `կոսմոպոլիտ` | adjective | `inSameFileDuplicate` | Duplicate term 'կոսմոպոլիտ' (adjective) appears 2 times in file |
| C2 | `նարցիսիստական` | adjective | `inSameFileDuplicate` | Duplicate term 'նարցիսիստական' (adjective) appears 2 times in file |
| C2 | `հերետիկոսական` | adjective | `inSameFileDuplicate` | Duplicate term 'հերետիկոսական' (adjective) appears 2 times in file |
| C2 | `ներհատուկ` | adjective | `inSameFileDuplicate` | Duplicate term 'ներհատուկ' (adjective) appears 2 times in file |
| C2 | `կտրուկ` | adjective | `inSameFileDuplicate` | Duplicate term 'կտրուկ' (adjective) appears 2 times in file |
| C2 | `խրթին` | adjective | `inSameFileDuplicate` | Duplicate term 'խրթին' (adjective) appears 2 times in file |
| C2 | `անախրոնիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'անախրոնիկ' (adjective) appears 2 times in file |
| C2 | `հակաթեթիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'հակաթեթիկ' (adjective) appears 2 times in file |
| C2 | `արկանային` | adjective | `inSameFileDuplicate` | Duplicate term 'արկանային' (adjective) appears 2 times in file |
| C2 | `ոչ տիպիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'ոչ տիպիկ' (adjective) appears 2 times in file |
| C2 | `բինար` | adjective | `inSameFileDuplicate` | Duplicate term 'բինար' (adjective) appears 2 times in file |
| C2 | `կատեգորիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'կատեգորիկ' (adjective) appears 2 times in file |
| C2 | `շրջահայաց` | adjective | `inSameFileDuplicate` | Duplicate term 'շրջահայաց' (adjective) appears 2 times in file |
| C2 | `գաղտնի` | adjective | `inSameFileDuplicate` | Duplicate term 'գաղտնի' (adjective) appears 2 times in file |
| C2 | `դիալեկտիկական` | adjective | `inSameFileDuplicate` | Duplicate term 'դիալեկտիկական' (adjective) appears 2 times in file |
| C2 | `դիֆուզ` | adjective | `inSameFileDuplicate` | Duplicate term 'դիֆուզ' (adjective) appears 2 times in file |
| C2 | `դժվարորսալի` | adjective | `inSameFileDuplicate` | Duplicate term 'դժվարորսալի' (adjective) appears 2 times in file |
| C2 | `էզոթերիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'էզոթերիկ' (adjective) appears 2 times in file |
| C2 | `սխալական` | adjective | `inSameFileDuplicate` | Duplicate term 'սխալական' (adjective) appears 2 times in file |
| C2 | `անփոփոխ` | adjective | `inSameFileDuplicate` | Duplicate term 'անփոփոխ' (adjective) appears 2 times in file |
| C2 | `անկողմնակալ` | adjective | `inSameFileDuplicate` | Duplicate term 'անկողմնակալ' (adjective) appears 2 times in file |
| C2 | `պատահական` | adjective | `inSameFileDuplicate` | Duplicate term 'պատահական' (adjective) appears 2 times in file |
| C2 | `բնածին` | adjective | `inSameFileDuplicate` | Duplicate term 'բնածին' (adjective) appears 2 times in file |
| C2 | `աննման` | adjective | `inSameFileDuplicate` | Duplicate term 'աննման' (adjective) appears 2 times in file |
| C2 | `նենգ` | adjective | `inSameFileDuplicate` | Duplicate term 'նենգ' (adjective) appears 2 times in file |
| C2 | `անհաշտելի` | adjective | `inSameFileDuplicate` | Duplicate term 'անհաշտելի' (adjective) appears 2 times in file |
| C2 | `լիմինալ` | adjective | `inSameFileDuplicate` | Duplicate term 'լիմինալ' (adjective) appears 2 times in file |
| C2 | `բազմազան` | adjective | `inSameFileDuplicate` | Duplicate term 'բազմազան' (adjective) appears 2 times in file |
| C2 | `մշուշոտ` | adjective | `inSameFileDuplicate` | Duplicate term 'մշուշոտ' (adjective) appears 2 times in file |
| C2 | `նորմատիվ` | adjective | `inSameFileDuplicate` | Duplicate term 'նորմատիվ' (adjective) appears 2 times in file |
| C2 | `նրբերանգային` | adjective | `inSameFileDuplicate` | Duplicate term 'նրբերանգային' (adjective) appears 2 times in file |
| C2 | `անուղղակի` | adjective | `inSameFileDuplicate` | Duplicate term 'անուղղակի' (adjective) appears 2 times in file |
| C2 | `անթափանց` | adjective | `inSameFileDuplicate` | Duplicate term 'անթափանց' (adjective) appears 2 times in file |
| C2 | `թվացյալ` | adjective | `inSameFileDuplicate` | Duplicate term 'թվացյալ' (adjective) appears 2 times in file |
| C2 | `պարադոքսալ` | adjective | `inSameFileDuplicate` | Duplicate term 'պարադոքսալ' (adjective) appears 2 times in file |
| C2 | `համատարած` | adjective | `inSameFileDuplicate` | Duplicate term 'համատարած' (adjective) appears 2 times in file |
| C2 | `բևեռացնող` | adjective | `inSameFileDuplicate` | Duplicate term 'բևեռացնող' (adjective) appears 2 times in file |
| C2 | `երերուն` | adjective | `inSameFileDuplicate` | Duplicate term 'երերուն' (adjective) appears 2 times in file |
| C2 | `պրեսկրիպտիվ` | adjective | `inSameFileDuplicate` | Duplicate term 'պրեսկրիպտիվ' (adjective) appears 2 times in file |
| C2 | `ձգձգված` | adjective | `inSameFileDuplicate` | Duplicate term 'ձգձգված' (adjective) appears 2 times in file |
| C2 | `ռեդուկտիվ` | adjective | `inSameFileDuplicate` | Duplicate term 'ռեդուկտիվ' (adjective) appears 2 times in file |
| C2 | `հիմնարար` | adjective | `inSameFileDuplicate` | Duplicate term 'հիմնարար' (adjective) appears 2 times in file |
| C2 | `թվացյալ հիմնավոր` | adjective | `inSameFileDuplicate` | Duplicate term 'թվացյալ հիմնավոր' (adjective) appears 2 times in file |
| C2 | `կեղծ` | adjective | `inSameFileDuplicate` | Duplicate term 'կեղծ' (adjective) appears 2 times in file |
| C2 | `քայքայիչ` | adjective | `inSameFileDuplicate` | Duplicate term 'քայքայիչ' (adjective) appears 2 times in file |
| C2 | `լռելյայն` | adjective | `inSameFileDuplicate` | Duplicate term 'լռելյայն' (adjective) appears 2 times in file |
| C2 | `անցողիկ` | adjective | `inSameFileDuplicate` | Duplicate term 'անցողիկ' (adjective) appears 2 times in file |
| C2 | `ամենուրեք` | adjective | `inSameFileDuplicate` | Duplicate term 'ամենուրեք' (adjective) appears 2 times in file |
| C2 | `միանշանակ` | adjective | `inSameFileDuplicate` | Duplicate term 'միանշանակ' (adjective) appears 2 times in file |
| C2 | `աննախադեպ` | adjective | `inSameFileDuplicate` | Duplicate term 'աննախադեպ' (adjective) appears 2 times in file |
| C2 | `անհիմն` | adjective | `inSameFileDuplicate` | Duplicate term 'անհիմն' (adjective) appears 2 times in file |
| C2 | `ծանրաշարժ` | adjective | `inSameFileDuplicate` | Duplicate term 'ծանրաշարժ' (adjective) appears 2 times in file |

#### File: `vocabulary/hy/C2/verbs.js` (106 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `առարկայացնել` | verb | `inSameFileDuplicate` | Duplicate term 'առարկայացնել' (verb) appears 2 times in file |
| C2 | `սուբլիմացնել` | verb | `inSameFileDuplicate` | Duplicate term 'սուբլիմացնել' (verb) appears 2 times in file |
| C2 | `ստորոգել` | verb | `inSameFileDuplicate` | Duplicate term 'ստորոգել' (verb) appears 2 times in file |
| C2 | `մարմնավորել` | verb | `inSameFileDuplicate` | Duplicate term 'մարմնավորել' (verb) appears 4 times in file |
| C2 | `ժխտել` | verb | `inSameFileDuplicate` | Duplicate term 'ժխտել' (verb) appears 2 times in file |
| C2 | `գերազանցել` | verb | `inSameFileDuplicate` | Duplicate term 'գերազանցել' (verb) appears 2 times in file |
| C2 | `միջնորդավորել` | verb | `inSameFileDuplicate` | Duplicate term 'միջնորդավորել' (verb) appears 2 times in file |
| C2 | `սղել` | verb | `inSameFileDuplicate` | Duplicate term 'սղել' (verb) appears 2 times in file |
| C2 | `մթագնել` | verb | `inSameFileDuplicate` | Duplicate term 'մթագնել' (verb) appears 2 times in file |
| C2 | `նույնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'նույնացնել' (verb) appears 2 times in file |
| C2 | `վկայակոչել` | verb | `inSameFileDuplicate` | Duplicate term 'վկայակոչել' (verb) appears 2 times in file |
| C2 | `առաջին պլան մղել` | verb | `inSameFileDuplicate` | Duplicate term 'առաջին պլան մղել' (verb) appears 2 times in file |
| C2 | `յուրացնել` | verb | `inSameFileDuplicate` | Duplicate term 'յուրացնել' (verb) appears 2 times in file |
| C2 | `ապակայունացնել` | verb | `inSameFileDuplicate` | Duplicate term 'ապակայունացնել' (verb) appears 2 times in file |
| C2 | `ապրանքայնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'ապրանքայնացնել' (verb) appears 2 times in file |
| C2 | `գործիքայնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'գործիքայնացնել' (verb) appears 2 times in file |
| C2 | `արժևորել` | verb | `inSameFileDuplicate` | Duplicate term 'արժևորել' (verb) appears 2 times in file |
| C2 | `ֆետիշացնել` | verb | `inSameFileDuplicate` | Duplicate term 'ֆետիշացնել' (verb) appears 2 times in file |
| C2 | `օտարել` | verb | `inSameFileDuplicate` | Duplicate term 'օտարել' (verb) appears 2 times in file |
| C2 | `սահմանազատել` | verb | `inSameFileDuplicate` | Duplicate term 'սահմանազատել' (verb) appears 2 times in file |
| C2 | `սահմանափակել` | verb | `inSameFileDuplicate` | Duplicate term 'սահմանափակել' (verb) appears 2 times in file |
| C2 | `խոչընդոտել` | verb | `inSameFileDuplicate` | Duplicate term 'խոչընդոտել' (verb) appears 4 times in file |
| C2 | `աղավաղել` | verb | `inSameFileDuplicate` | Duplicate term 'աղավաղել' (verb) appears 2 times in file |
| C2 | `հերքել` | verb | `inSameFileDuplicate` | Duplicate term 'հերքել' (verb) appears 2 times in file |
| C2 | `խախտել` | verb | `inSameFileDuplicate` | Duplicate term 'խախտել' (verb) appears 2 times in file |
| C2 | `դեկոնստրուկցիայի ենթարկել` | verb | `inSameFileDuplicate` | Duplicate term 'դեկոնստրուկցիայի ենթարկել' (verb) appears 2 times in file |
| C2 | `կանխարգելել` | verb | `inSameFileDuplicate` | Duplicate term 'կանխարգելել' (verb) appears 2 times in file |
| C2 | `դիալեկտիկացնել` | verb | `inSameFileDuplicate` | Duplicate term 'դիալեկտիկացնել' (verb) appears 2 times in file |
| C2 | `հեգեմոնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'հեգեմոնացնել' (verb) appears 2 times in file |
| C2 | `շեշտադրել` | verb | `inSameFileDuplicate` | Duplicate term 'շեշտադրել' (verb) appears 2 times in file |
| C2 | `համակերպվել` | verb | `inSameFileDuplicate` | Duplicate term 'համակերպվել' (verb) appears 2 times in file |
| C2 | `մեղմել` | verb | `inSameFileDuplicate` | Duplicate term 'մեղմել' (verb) appears 2 times in file |
| C2 | `շրջանցել` | verb | `inSameFileDuplicate` | Duplicate term 'շրջանցել' (verb) appears 2 times in file |
| C2 | `հաստատել` | verb | `inSameFileDuplicate` | Duplicate term 'հաստատել' (verb) appears 2 times in file |
| C2 | `տարածել` | verb | `inSameFileDuplicate` | Duplicate term 'տարածել' (verb) appears 2 times in file |
| C2 | `ամփոփել` | verb | `inSameFileDuplicate` | Duplicate term 'ամփոփել' (verb) appears 2 times in file |
| C2 | `ծնել` | verb | `inSameFileDuplicate` | Duplicate term 'ծնել' (verb) appears 2 times in file |
| C2 | `սրել` | verb | `inSameFileDuplicate` | Duplicate term 'սրել' (verb) appears 2 times in file |
| C2 | `մարմնավորել` | verb | `inSameFileDuplicate` | Duplicate term 'մարմնավորել' (verb) appears 4 times in file |
| C2 | `խոչընդոտել` | verb | `inSameFileDuplicate` | Duplicate term 'խոչընդոտել' (verb) appears 4 times in file |
| C2 | `մեղմացնել` | verb | `inSameFileDuplicate` | Duplicate term 'մեղմացնել' (verb) appears 2 times in file |
| C2 | `պարտավորեցնել` | verb | `inSameFileDuplicate` | Duplicate term 'պարտավորեցնել' (verb) appears 2 times in file |
| C2 | `ներթափանցել` | verb | `inSameFileDuplicate` | Duplicate term 'ներթափանցել' (verb) appears 2 times in file |
| C2 | `բացառել` | verb | `inSameFileDuplicate` | Duplicate term 'բացառել' (verb) appears 2 times in file |
| C2 | `համատեղել` | verb | `inSameFileDuplicate` | Duplicate term 'համատեղել' (verb) appears 2 times in file |
| C2 | `փոխարինել` | verb | `inSameFileDuplicate` | Duplicate term 'փոխարինել' (verb) appears 2 times in file |
| C2 | `հիմքում ընկած լինել` | verb | `inSameFileDuplicate` | Duplicate term 'հիմքում ընկած լինել' (verb) appears 2 times in file |
| C2 | `արդարացնել` | verb | `inSameFileDuplicate` | Duplicate term 'արդարացնել' (verb) appears 2 times in file |
| C2 | `կախված լինել` | verb | `inSameFileDuplicate` | Duplicate term 'կախված լինել' (verb) appears 2 times in file |
| C2 | `բախվել` | verb | `inSameFileDuplicate` | Duplicate term 'բախվել' (verb) appears 2 times in file |
| C2 | `մակերեսորեն անցնել` | verb | `inSameFileDuplicate` | Duplicate term 'մակերեսորեն անցնել' (verb) appears 2 times in file |
| C2 | `քողարկել` | verb | `inSameFileDuplicate` | Duplicate term 'քողարկել' (verb) appears 2 times in file |
| C2 | `պարադիգմի փոփոխություն` | verb | `inSameFileDuplicate` | Duplicate term 'պարադիգմի փոփոխություն' (verb) appears 2 times in file |
| C2 | `առարկայացնել` | verb | `inSameFileDuplicate` | Duplicate term 'առարկայացնել' (verb) appears 2 times in file |
| C2 | `սուբլիմացնել` | verb | `inSameFileDuplicate` | Duplicate term 'սուբլիմացնել' (verb) appears 2 times in file |
| C2 | `ստորոգել` | verb | `inSameFileDuplicate` | Duplicate term 'ստորոգել' (verb) appears 2 times in file |
| C2 | `մարմնավորել` | verb | `inSameFileDuplicate` | Duplicate term 'մարմնավորել' (verb) appears 4 times in file |
| C2 | `ժխտել` | verb | `inSameFileDuplicate` | Duplicate term 'ժխտել' (verb) appears 2 times in file |
| C2 | `գերազանցել` | verb | `inSameFileDuplicate` | Duplicate term 'գերազանցել' (verb) appears 2 times in file |
| C2 | `միջնորդավորել` | verb | `inSameFileDuplicate` | Duplicate term 'միջնորդավորել' (verb) appears 2 times in file |
| C2 | `սղել` | verb | `inSameFileDuplicate` | Duplicate term 'սղել' (verb) appears 2 times in file |
| C2 | `մթագնել` | verb | `inSameFileDuplicate` | Duplicate term 'մթագնել' (verb) appears 2 times in file |
| C2 | `նույնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'նույնացնել' (verb) appears 2 times in file |
| C2 | `վկայակոչել` | verb | `inSameFileDuplicate` | Duplicate term 'վկայակոչել' (verb) appears 2 times in file |
| C2 | `առաջին պլան մղել` | verb | `inSameFileDuplicate` | Duplicate term 'առաջին պլան մղել' (verb) appears 2 times in file |
| C2 | `յուրացնել` | verb | `inSameFileDuplicate` | Duplicate term 'յուրացնել' (verb) appears 2 times in file |
| C2 | `ապակայունացնել` | verb | `inSameFileDuplicate` | Duplicate term 'ապակայունացնել' (verb) appears 2 times in file |
| C2 | `ապրանքայնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'ապրանքայնացնել' (verb) appears 2 times in file |
| C2 | `գործիքայնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'գործիքայնացնել' (verb) appears 2 times in file |
| C2 | `արժևորել` | verb | `inSameFileDuplicate` | Duplicate term 'արժևորել' (verb) appears 2 times in file |
| C2 | `ֆետիշացնել` | verb | `inSameFileDuplicate` | Duplicate term 'ֆետիշացնել' (verb) appears 2 times in file |
| C2 | `օտարել` | verb | `inSameFileDuplicate` | Duplicate term 'օտարել' (verb) appears 2 times in file |
| C2 | `սահմանազատել` | verb | `inSameFileDuplicate` | Duplicate term 'սահմանազատել' (verb) appears 2 times in file |
| C2 | `սահմանափակել` | verb | `inSameFileDuplicate` | Duplicate term 'սահմանափակել' (verb) appears 2 times in file |
| C2 | `խոչընդոտել` | verb | `inSameFileDuplicate` | Duplicate term 'խոչընդոտել' (verb) appears 4 times in file |
| C2 | `աղավաղել` | verb | `inSameFileDuplicate` | Duplicate term 'աղավաղել' (verb) appears 2 times in file |
| C2 | `հերքել` | verb | `inSameFileDuplicate` | Duplicate term 'հերքել' (verb) appears 2 times in file |
| C2 | `խախտել` | verb | `inSameFileDuplicate` | Duplicate term 'խախտել' (verb) appears 2 times in file |
| C2 | `դեկոնստրուկցիայի ենթարկել` | verb | `inSameFileDuplicate` | Duplicate term 'դեկոնստրուկցիայի ենթարկել' (verb) appears 2 times in file |
| C2 | `կանխարգելել` | verb | `inSameFileDuplicate` | Duplicate term 'կանխարգելել' (verb) appears 2 times in file |
| C2 | `դիալեկտիկացնել` | verb | `inSameFileDuplicate` | Duplicate term 'դիալեկտիկացնել' (verb) appears 2 times in file |
| C2 | `հեգեմոնացնել` | verb | `inSameFileDuplicate` | Duplicate term 'հեգեմոնացնել' (verb) appears 2 times in file |
| C2 | `շեշտադրել` | verb | `inSameFileDuplicate` | Duplicate term 'շեշտադրել' (verb) appears 2 times in file |
| C2 | `համակերպվել` | verb | `inSameFileDuplicate` | Duplicate term 'համակերպվել' (verb) appears 2 times in file |
| C2 | `մեղմել` | verb | `inSameFileDuplicate` | Duplicate term 'մեղմել' (verb) appears 2 times in file |
| C2 | `շրջանցել` | verb | `inSameFileDuplicate` | Duplicate term 'շրջանցել' (verb) appears 2 times in file |
| C2 | `հաստատել` | verb | `inSameFileDuplicate` | Duplicate term 'հաստատել' (verb) appears 2 times in file |
| C2 | `տարածել` | verb | `inSameFileDuplicate` | Duplicate term 'տարածել' (verb) appears 2 times in file |
| C2 | `ամփոփել` | verb | `inSameFileDuplicate` | Duplicate term 'ամփոփել' (verb) appears 2 times in file |
| C2 | `ծնել` | verb | `inSameFileDuplicate` | Duplicate term 'ծնել' (verb) appears 2 times in file |
| C2 | `սրել` | verb | `inSameFileDuplicate` | Duplicate term 'սրել' (verb) appears 2 times in file |
| C2 | `մարմնավորել` | verb | `inSameFileDuplicate` | Duplicate term 'մարմնավորել' (verb) appears 4 times in file |
| C2 | `խոչընդոտել` | verb | `inSameFileDuplicate` | Duplicate term 'խոչընդոտել' (verb) appears 4 times in file |
| C2 | `մեղմացնել` | verb | `inSameFileDuplicate` | Duplicate term 'մեղմացնել' (verb) appears 2 times in file |
| C2 | `պարտավորեցնել` | verb | `inSameFileDuplicate` | Duplicate term 'պարտավորեցնել' (verb) appears 2 times in file |
| C2 | `ներթափանցել` | verb | `inSameFileDuplicate` | Duplicate term 'ներթափանցել' (verb) appears 2 times in file |
| C2 | `բացառել` | verb | `inSameFileDuplicate` | Duplicate term 'բացառել' (verb) appears 2 times in file |
| C2 | `համատեղել` | verb | `inSameFileDuplicate` | Duplicate term 'համատեղել' (verb) appears 2 times in file |
| C2 | `փոխարինել` | verb | `inSameFileDuplicate` | Duplicate term 'փոխարինել' (verb) appears 2 times in file |
| C2 | `հիմքում ընկած լինել` | verb | `inSameFileDuplicate` | Duplicate term 'հիմքում ընկած լինել' (verb) appears 2 times in file |
| C2 | `արդարացնել` | verb | `inSameFileDuplicate` | Duplicate term 'արդարացնել' (verb) appears 2 times in file |
| C2 | `կախված լինել` | verb | `inSameFileDuplicate` | Duplicate term 'կախված լինել' (verb) appears 2 times in file |
| C2 | `բախվել` | verb | `inSameFileDuplicate` | Duplicate term 'բախվել' (verb) appears 2 times in file |
| C2 | `մակերեսորեն անցնել` | verb | `inSameFileDuplicate` | Duplicate term 'մակերեսորեն անցնել' (verb) appears 2 times in file |
| C2 | `քողարկել` | verb | `inSameFileDuplicate` | Duplicate term 'քողարկել' (verb) appears 2 times in file |
| C2 | `պարադիգմի փոփոխություն` | verb | `inSameFileDuplicate` | Duplicate term 'պարադիգմի փոփոխություն' (verb) appears 2 times in file |

### IT (Italian) — 359 Flagged Entries out of 1747 Category (a) Entries

#### File: `vocabulary/it/B1/adjectives.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `sostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'sostenibile' (adjective) appears 2 times in file |
| B1 | `sostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'sostenibile' (adjective) appears 2 times in file |

#### File: `vocabulary/it/B1/locations.js` (8 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Toscana` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Australia` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `India` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Tokyo` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Sydney` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Rio de Janeiro` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Il Cairo` | phrase | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Delhi` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/it/B1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `In che modo i social media hanno cambiato il modo di comunicare con gli amici?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Quali fattori consideri più importanti quando scegli una carriera lavorativa?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `In che modo vivere in una grande città influenza il benessere quotidiano?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Come cambiano le tradizioni familiari tra le diverse generazioni?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Quale ruolo dovrebbero avere le scelte ecologiche individuali per l'ambiente?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `In che modo gli hobby aiutano a mantenere un buon equilibrio tra lavoro e vita privata?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Quali sono i principali vantaggi e svantaggi del lavoro da casa?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Come influisce il viaggio in luoghi sconosciuti sulla visione del mondo di una persona?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Le competenze pratiche dovrebbero avere la stessa importanza delle materie scolastiche?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `In che modo la pubblicità influenza le nostre decisioni d'acquisto quotidiane?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/it/B1/verbs.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `fare giardinaggio` | verb | `inSameFileDuplicate` | Duplicate term 'fare giardinaggio' (verb) appears 2 times in file |
| B1 | `fare giardinaggio` | verb | `inSameFileDuplicate` | Duplicate term 'fare giardinaggio' (verb) appears 2 times in file |

#### File: `vocabulary/it/B1/vocabulary.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | *(EMPTY)* | noun | `emptyField` | Word/term field is empty or whitespace-only |

#### File: `vocabulary/it/B2/adjectives.js` (12 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `sostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'sostenibile' (adjective) appears 2 times in file |
| B2 | `civico` | adjective | `inSameFileDuplicate` | Duplicate term 'civico' (adjective) appears 2 times in file |
| B2 | `cronico` | adjective | `inSameFileDuplicate` | Duplicate term 'cronico' (adjective) appears 2 times in file |
| B2 | `preventivo` | adjective | `inSameFileDuplicate` | Duplicate term 'preventivo' (adjective) appears 2 times in file |
| B2 | `morale` | adjective | `inSameFileDuplicate` | Duplicate term 'morale' (adjective) appears 2 times in file |
| B2 | `etico` | adjective | `inSameFileDuplicate` | Duplicate term 'etico' (adjective) appears 2 times in file |
| B2 | `sostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'sostenibile' (adjective) appears 2 times in file |
| B2 | `civico` | adjective | `inSameFileDuplicate` | Duplicate term 'civico' (adjective) appears 2 times in file |
| B2 | `cronico` | adjective | `inSameFileDuplicate` | Duplicate term 'cronico' (adjective) appears 2 times in file |
| B2 | `preventivo` | adjective | `inSameFileDuplicate` | Duplicate term 'preventivo' (adjective) appears 2 times in file |
| B2 | `morale` | adjective | `inSameFileDuplicate` | Duplicate term 'morale' (adjective) appears 2 times in file |
| B2 | `etico` | adjective | `inSameFileDuplicate` | Duplicate term 'etico' (adjective) appears 2 times in file |

#### File: `vocabulary/it/B2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `Fino a che punto gli algoritmi dei social media isolano le persone in bolle ideologiche?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `I governi dovrebbero regolamentare lo sviluppo dell'intelligenza artificiale per proteggere l'occupazione?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Quanto incide il contesto socioeconomico sul successo scolastico a lungo termine?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `La globalizzazione sta minacciando le identità culturali regionali o le sta arricchendo?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Gli impegni ecologici aziendali sono sufficienti contro il cambiamento climatico senza riforme statali?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Il riconoscimento pubblico o la passione personale è un motore di carriera più sostenibile?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Come ha trasformato la gig economy le tutele tradizionali dei lavoratori?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Il sistema sanitario pubblico dovrebbe dare priorità alla prevenzione anziché alle cure reattive?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `L'arte contemporanea può mantenere una portata critica se è commercializzata dai mercati d'élite?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Le università dovrebbero abolire i test standardizzati durante i processi di ammissione?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/it/C1/people.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Umberto Eco` | - | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'Umberto Eco' (no-form) appears 2 times in file |
| C1 | `Umberto Eco` | - | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'Umberto Eco' (no-form) appears 2 times in file |

#### File: `vocabulary/it/C1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `In che modo i sottili pregiudizi cognitivi compromettono il processo decisionale obiettivo nella leadership aziendale?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Fino a che punto il diritto della proprietà intellettuale fatica ad adattarsi alle creazioni dell'intelligenza artificiale generativa?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `La pianificazione urbanistica architettonica ha il potere di smantellare la segregazione sociale radicata?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `In che modo il relativismo linguistico modella i quadri concettuali attraverso diversi paradigmi culturali?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `I criteri ESG aziendali possono davvero imporre una responsabilità etica o incentivano soltanto il greenwashing?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `In che modo i mutamenti demografici stanno mettendo a dura prova i modelli di previdenza sociale a livello globale?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Fino a che punto i fondi pubblici dovrebbero dare priorità alla ricerca spaziale rispetto alle crisi terrestri immediate?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Come altera la sorveglianza digitale pervasiva la relazione psicologica dei cittadini con l'autorità statale?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `La memoria storica umana può mantenere la propria autenticità in un'epoca dominata da media sintetici e deepfake?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `I quadri bioetici dovrebbero consentire la modifica genetica germinale per fini di potenziamento non terapeutico?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/it/C1/verbs.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `infrastruttura` | verb | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'infrastruttura' (verb) appears 2 times in file |
| C1 | `infrastruttura` | verb | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'infrastruttura' (verb) appears 2 times in file |

#### File: `vocabulary/it/C2/adjectives.js` (184 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `astruso` | adjective | `inSameFileDuplicate` | Duplicate term 'astruso' (adjective) appears 4 times in file |
| C2 | `anacronistico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacronistico' (adjective) appears 4 times in file |
| C2 | `antitetico` | adjective | `inSameFileDuplicate` | Duplicate term 'antitetico' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atipico` | adjective | `inSameFileDuplicate` | Duplicate term 'atipico' (adjective) appears 4 times in file |
| C2 | `categorico` | adjective | `inSameFileDuplicate` | Duplicate term 'categorico' (adjective) appears 4 times in file |
| C2 | `circospetto` | adjective | `inSameFileDuplicate` | Duplicate term 'circospetto' (adjective) appears 4 times in file |
| C2 | `coperto` | adjective | `inSameFileDuplicate` | Duplicate term 'coperto' (adjective) appears 4 times in file |
| C2 | `diffuso` | adjective | `inSameFileDuplicate` | Duplicate term 'diffuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esoterico` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterico' (adjective) appears 4 times in file |
| C2 | `fallace` | adjective | `inSameFileDuplicate` | Duplicate term 'fallace' (adjective) appears 4 times in file |
| C2 | `immutabile` | adjective | `inSameFileDuplicate` | Duplicate term 'immutabile' (adjective) appears 4 times in file |
| C2 | `imparziale` | adjective | `inSameFileDuplicate` | Duplicate term 'imparziale' (adjective) appears 4 times in file |
| C2 | `incidentale` | adjective | `inSameFileDuplicate` | Duplicate term 'incidentale' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitabile' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliabile` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliabile' (adjective) appears 4 times in file |
| C2 | `liminale` | adjective | `inSameFileDuplicate` | Duplicate term 'liminale' (adjective) appears 4 times in file |
| C2 | `multiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'multiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `sfumato` | adjective | `inSameFileDuplicate` | Duplicate term 'sfumato' (adjective) appears 4 times in file |
| C2 | `obliquo` | adjective | `inSameFileDuplicate` | Duplicate term 'obliquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensibile` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensibile' (adjective) appears 4 times in file |
| C2 | `paradossale` | adjective | `inSameFileDuplicate` | Duplicate term 'paradossale' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizzante` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizzante' (adjective) appears 4 times in file |
| C2 | `precario` | adjective | `inSameFileDuplicate` | Duplicate term 'precario' (adjective) appears 4 times in file |
| C2 | `prescrittivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescrittivo' (adjective) appears 4 times in file |
| C2 | `prolungato` | adjective | `inSameFileDuplicate` | Duplicate term 'prolungato' (adjective) appears 4 times in file |
| C2 | `riduttivo` | adjective | `inSameFileDuplicate` | Duplicate term 'riduttivo' (adjective) appears 4 times in file |
| C2 | `seminale` | adjective | `inSameFileDuplicate` | Duplicate term 'seminale' (adjective) appears 4 times in file |
| C2 | `specioso` | adjective | `inSameFileDuplicate` | Duplicate term 'specioso' (adjective) appears 4 times in file |
| C2 | `spurio` | adjective | `inSameFileDuplicate` | Duplicate term 'spurio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tacito` | adjective | `inSameFileDuplicate` | Duplicate term 'tacito' (adjective) appears 4 times in file |
| C2 | `tenue` | adjective | `inSameFileDuplicate` | Duplicate term 'tenue' (adjective) appears 4 times in file |
| C2 | `transitorio` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorio' (adjective) appears 4 times in file |
| C2 | `ubiquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquo' (adjective) appears 4 times in file |
| C2 | `inequivocabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inequivocabile' (adjective) appears 4 times in file |
| C2 | `senza precedenti` | adjective | `inSameFileDuplicate` | Duplicate term 'senza precedenti' (adjective) appears 4 times in file |
| C2 | `insostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'insostenibile' (adjective) appears 4 times in file |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `astruso` | adjective | `inSameFileDuplicate` | Duplicate term 'astruso' (adjective) appears 4 times in file |
| C2 | `anacronistico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacronistico' (adjective) appears 4 times in file |
| C2 | `antitetico` | adjective | `inSameFileDuplicate` | Duplicate term 'antitetico' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atipico` | adjective | `inSameFileDuplicate` | Duplicate term 'atipico' (adjective) appears 4 times in file |
| C2 | `categorico` | adjective | `inSameFileDuplicate` | Duplicate term 'categorico' (adjective) appears 4 times in file |
| C2 | `circospetto` | adjective | `inSameFileDuplicate` | Duplicate term 'circospetto' (adjective) appears 4 times in file |
| C2 | `coperto` | adjective | `inSameFileDuplicate` | Duplicate term 'coperto' (adjective) appears 4 times in file |
| C2 | `diffuso` | adjective | `inSameFileDuplicate` | Duplicate term 'diffuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esoterico` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterico' (adjective) appears 4 times in file |
| C2 | `fallace` | adjective | `inSameFileDuplicate` | Duplicate term 'fallace' (adjective) appears 4 times in file |
| C2 | `immutabile` | adjective | `inSameFileDuplicate` | Duplicate term 'immutabile' (adjective) appears 4 times in file |
| C2 | `imparziale` | adjective | `inSameFileDuplicate` | Duplicate term 'imparziale' (adjective) appears 4 times in file |
| C2 | `incidentale` | adjective | `inSameFileDuplicate` | Duplicate term 'incidentale' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitabile' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliabile` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliabile' (adjective) appears 4 times in file |
| C2 | `liminale` | adjective | `inSameFileDuplicate` | Duplicate term 'liminale' (adjective) appears 4 times in file |
| C2 | `multiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'multiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `sfumato` | adjective | `inSameFileDuplicate` | Duplicate term 'sfumato' (adjective) appears 4 times in file |
| C2 | `obliquo` | adjective | `inSameFileDuplicate` | Duplicate term 'obliquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensibile` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensibile' (adjective) appears 4 times in file |
| C2 | `paradossale` | adjective | `inSameFileDuplicate` | Duplicate term 'paradossale' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizzante` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizzante' (adjective) appears 4 times in file |
| C2 | `precario` | adjective | `inSameFileDuplicate` | Duplicate term 'precario' (adjective) appears 4 times in file |
| C2 | `prescrittivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescrittivo' (adjective) appears 4 times in file |
| C2 | `prolungato` | adjective | `inSameFileDuplicate` | Duplicate term 'prolungato' (adjective) appears 4 times in file |
| C2 | `riduttivo` | adjective | `inSameFileDuplicate` | Duplicate term 'riduttivo' (adjective) appears 4 times in file |
| C2 | `seminale` | adjective | `inSameFileDuplicate` | Duplicate term 'seminale' (adjective) appears 4 times in file |
| C2 | `specioso` | adjective | `inSameFileDuplicate` | Duplicate term 'specioso' (adjective) appears 4 times in file |
| C2 | `spurio` | adjective | `inSameFileDuplicate` | Duplicate term 'spurio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tacito` | adjective | `inSameFileDuplicate` | Duplicate term 'tacito' (adjective) appears 4 times in file |
| C2 | `tenue` | adjective | `inSameFileDuplicate` | Duplicate term 'tenue' (adjective) appears 4 times in file |
| C2 | `transitorio` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorio' (adjective) appears 4 times in file |
| C2 | `ubiquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquo' (adjective) appears 4 times in file |
| C2 | `inequivocabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inequivocabile' (adjective) appears 4 times in file |
| C2 | `senza precedenti` | adjective | `inSameFileDuplicate` | Duplicate term 'senza precedenti' (adjective) appears 4 times in file |
| C2 | `insostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'insostenibile' (adjective) appears 4 times in file |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `astruso` | adjective | `inSameFileDuplicate` | Duplicate term 'astruso' (adjective) appears 4 times in file |
| C2 | `anacronistico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacronistico' (adjective) appears 4 times in file |
| C2 | `antitetico` | adjective | `inSameFileDuplicate` | Duplicate term 'antitetico' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atipico` | adjective | `inSameFileDuplicate` | Duplicate term 'atipico' (adjective) appears 4 times in file |
| C2 | `categorico` | adjective | `inSameFileDuplicate` | Duplicate term 'categorico' (adjective) appears 4 times in file |
| C2 | `circospetto` | adjective | `inSameFileDuplicate` | Duplicate term 'circospetto' (adjective) appears 4 times in file |
| C2 | `coperto` | adjective | `inSameFileDuplicate` | Duplicate term 'coperto' (adjective) appears 4 times in file |
| C2 | `diffuso` | adjective | `inSameFileDuplicate` | Duplicate term 'diffuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esoterico` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterico' (adjective) appears 4 times in file |
| C2 | `fallace` | adjective | `inSameFileDuplicate` | Duplicate term 'fallace' (adjective) appears 4 times in file |
| C2 | `immutabile` | adjective | `inSameFileDuplicate` | Duplicate term 'immutabile' (adjective) appears 4 times in file |
| C2 | `imparziale` | adjective | `inSameFileDuplicate` | Duplicate term 'imparziale' (adjective) appears 4 times in file |
| C2 | `incidentale` | adjective | `inSameFileDuplicate` | Duplicate term 'incidentale' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitabile' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliabile` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliabile' (adjective) appears 4 times in file |
| C2 | `liminale` | adjective | `inSameFileDuplicate` | Duplicate term 'liminale' (adjective) appears 4 times in file |
| C2 | `multiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'multiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `sfumato` | adjective | `inSameFileDuplicate` | Duplicate term 'sfumato' (adjective) appears 4 times in file |
| C2 | `obliquo` | adjective | `inSameFileDuplicate` | Duplicate term 'obliquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensibile` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensibile' (adjective) appears 4 times in file |
| C2 | `paradossale` | adjective | `inSameFileDuplicate` | Duplicate term 'paradossale' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizzante` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizzante' (adjective) appears 4 times in file |
| C2 | `precario` | adjective | `inSameFileDuplicate` | Duplicate term 'precario' (adjective) appears 4 times in file |
| C2 | `prescrittivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescrittivo' (adjective) appears 4 times in file |
| C2 | `prolungato` | adjective | `inSameFileDuplicate` | Duplicate term 'prolungato' (adjective) appears 4 times in file |
| C2 | `riduttivo` | adjective | `inSameFileDuplicate` | Duplicate term 'riduttivo' (adjective) appears 4 times in file |
| C2 | `seminale` | adjective | `inSameFileDuplicate` | Duplicate term 'seminale' (adjective) appears 4 times in file |
| C2 | `specioso` | adjective | `inSameFileDuplicate` | Duplicate term 'specioso' (adjective) appears 4 times in file |
| C2 | `spurio` | adjective | `inSameFileDuplicate` | Duplicate term 'spurio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tacito` | adjective | `inSameFileDuplicate` | Duplicate term 'tacito' (adjective) appears 4 times in file |
| C2 | `tenue` | adjective | `inSameFileDuplicate` | Duplicate term 'tenue' (adjective) appears 4 times in file |
| C2 | `transitorio` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorio' (adjective) appears 4 times in file |
| C2 | `ubiquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquo' (adjective) appears 4 times in file |
| C2 | `inequivocabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inequivocabile' (adjective) appears 4 times in file |
| C2 | `senza precedenti` | adjective | `inSameFileDuplicate` | Duplicate term 'senza precedenti' (adjective) appears 4 times in file |
| C2 | `insostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'insostenibile' (adjective) appears 4 times in file |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `astruso` | adjective | `inSameFileDuplicate` | Duplicate term 'astruso' (adjective) appears 4 times in file |
| C2 | `anacronistico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacronistico' (adjective) appears 4 times in file |
| C2 | `antitetico` | adjective | `inSameFileDuplicate` | Duplicate term 'antitetico' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atipico` | adjective | `inSameFileDuplicate` | Duplicate term 'atipico' (adjective) appears 4 times in file |
| C2 | `categorico` | adjective | `inSameFileDuplicate` | Duplicate term 'categorico' (adjective) appears 4 times in file |
| C2 | `circospetto` | adjective | `inSameFileDuplicate` | Duplicate term 'circospetto' (adjective) appears 4 times in file |
| C2 | `coperto` | adjective | `inSameFileDuplicate` | Duplicate term 'coperto' (adjective) appears 4 times in file |
| C2 | `diffuso` | adjective | `inSameFileDuplicate` | Duplicate term 'diffuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esoterico` | adjective | `inSameFileDuplicate` | Duplicate term 'esoterico' (adjective) appears 4 times in file |
| C2 | `fallace` | adjective | `inSameFileDuplicate` | Duplicate term 'fallace' (adjective) appears 4 times in file |
| C2 | `immutabile` | adjective | `inSameFileDuplicate` | Duplicate term 'immutabile' (adjective) appears 4 times in file |
| C2 | `imparziale` | adjective | `inSameFileDuplicate` | Duplicate term 'imparziale' (adjective) appears 4 times in file |
| C2 | `incidentale` | adjective | `inSameFileDuplicate` | Duplicate term 'incidentale' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitabile' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliabile` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliabile' (adjective) appears 4 times in file |
| C2 | `liminale` | adjective | `inSameFileDuplicate` | Duplicate term 'liminale' (adjective) appears 4 times in file |
| C2 | `multiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'multiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `sfumato` | adjective | `inSameFileDuplicate` | Duplicate term 'sfumato' (adjective) appears 4 times in file |
| C2 | `obliquo` | adjective | `inSameFileDuplicate` | Duplicate term 'obliquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensibile` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensibile' (adjective) appears 4 times in file |
| C2 | `paradossale` | adjective | `inSameFileDuplicate` | Duplicate term 'paradossale' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizzante` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizzante' (adjective) appears 4 times in file |
| C2 | `precario` | adjective | `inSameFileDuplicate` | Duplicate term 'precario' (adjective) appears 4 times in file |
| C2 | `prescrittivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescrittivo' (adjective) appears 4 times in file |
| C2 | `prolungato` | adjective | `inSameFileDuplicate` | Duplicate term 'prolungato' (adjective) appears 4 times in file |
| C2 | `riduttivo` | adjective | `inSameFileDuplicate` | Duplicate term 'riduttivo' (adjective) appears 4 times in file |
| C2 | `seminale` | adjective | `inSameFileDuplicate` | Duplicate term 'seminale' (adjective) appears 4 times in file |
| C2 | `specioso` | adjective | `inSameFileDuplicate` | Duplicate term 'specioso' (adjective) appears 4 times in file |
| C2 | `spurio` | adjective | `inSameFileDuplicate` | Duplicate term 'spurio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tacito` | adjective | `inSameFileDuplicate` | Duplicate term 'tacito' (adjective) appears 4 times in file |
| C2 | `tenue` | adjective | `inSameFileDuplicate` | Duplicate term 'tenue' (adjective) appears 4 times in file |
| C2 | `transitorio` | adjective | `inSameFileDuplicate` | Duplicate term 'transitorio' (adjective) appears 4 times in file |
| C2 | `ubiquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubiquo' (adjective) appears 4 times in file |
| C2 | `inequivocabile` | adjective | `inSameFileDuplicate` | Duplicate term 'inequivocabile' (adjective) appears 4 times in file |
| C2 | `senza precedenti` | adjective | `inSameFileDuplicate` | Duplicate term 'senza precedenti' (adjective) appears 4 times in file |
| C2 | `insostenibile` | adjective | `inSameFileDuplicate` | Duplicate term 'insostenibile' (adjective) appears 4 times in file |

#### File: `vocabulary/it/C2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `Il paradigma filosofico del determinismo tecnologico costituisce una realtà ineluttabile o un'abdicazione dell'autonomia umana?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `In che misura la nostalgia culturale commercializzata ostacola la vera innovazione artistica nella società contemporanea?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `In che modo le politiche monetarie sovrane affrontano la destabilizzazione sistemica posta dalle criptovalute decentralizzate?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `La giustizia epistemica può essere raggiunta all'interno di contesti di ricerca accademica storicamente radicati nell'egemonia eurocentrica?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `In che modo l'erosione dei terzi luoghi esacerba la solitudine esistenziale nelle metropoli iperconnesse?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Il paradigma antropocentrico dei trattati climatici internazionali fraintende fondamentalmente l'interconnessione ecologica?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `In che modo i sistemi di raccomandazione algoritmica riconfigurano sottilmente l'autonomia e l'autodeterminazione umana?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Fino a che punto le tecnologie transumaniste possono sfidare le definizioni biologiche standard di persona e stato morale?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `La meritocrazia funziona come un mito legittimante per la disuguaglianza strutturale piuttosto che come uno strumento di mobilità sociale?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `In che modo i discorsi politici della post-verità sovvertono la deliberazione democratica e la fiducia istituzionale?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/it/C2/verbs.js` (106 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `cambio di paradigma` | verb | `inSameFileDuplicate` | Duplicate term 'cambio di paradigma' (verb) appears 2 times in file |
| C2 | `reificare` | verb | `inSameFileDuplicate` | Duplicate term 'reificare' (verb) appears 2 times in file |
| C2 | `sublimare` | verb | `inSameFileDuplicate` | Duplicate term 'sublimare' (verb) appears 2 times in file |
| C2 | `predicare` | verb | `inSameFileDuplicate` | Duplicate term 'predicare' (verb) appears 2 times in file |
| C2 | `istanziare` | verb | `inSameFileDuplicate` | Duplicate term 'istanziare' (verb) appears 2 times in file |
| C2 | `trascendere` | verb | `inSameFileDuplicate` | Duplicate term 'trascendere' (verb) appears 2 times in file |
| C2 | `mediare` | verb | `inSameFileDuplicate` | Duplicate term 'mediare' (verb) appears 2 times in file |
| C2 | `elidere` | verb | `inSameFileDuplicate` | Duplicate term 'elidere' (verb) appears 2 times in file |
| C2 | `offuscare` | verb | `inSameFileDuplicate` | Duplicate term 'offuscare' (verb) appears 2 times in file |
| C2 | `fondere` | verb | `inSameFileDuplicate` | Duplicate term 'fondere' (verb) appears 2 times in file |
| C2 | `invocare` | verb | `inSameFileDuplicate` | Duplicate term 'invocare' (verb) appears 2 times in file |
| C2 | `mettere in primo piano` | verb | `inSameFileDuplicate` | Duplicate term 'mettere in primo piano' (verb) appears 2 times in file |
| C2 | `recuperare` | verb | `inSameFileDuplicate` | Duplicate term 'recuperare' (verb) appears 2 times in file |
| C2 | `destabilizzare` | verb | `inSameFileDuplicate` | Duplicate term 'destabilizzare' (verb) appears 2 times in file |
| C2 | `mercificare` | verb | `inSameFileDuplicate` | Duplicate term 'mercificare' (verb) appears 2 times in file |
| C2 | `strumentalizzare` | verb | `inSameFileDuplicate` | Duplicate term 'strumentalizzare' (verb) appears 2 times in file |
| C2 | `valorizzare` | verb | `inSameFileDuplicate` | Duplicate term 'valorizzare' (verb) appears 2 times in file |
| C2 | `feticizzare` | verb | `inSameFileDuplicate` | Duplicate term 'feticizzare' (verb) appears 2 times in file |
| C2 | `egemonizzare` | verb | `inSameFileDuplicate` | Duplicate term 'egemonizzare' (verb) appears 2 times in file |
| C2 | `alienare` | verb | `inSameFileDuplicate` | Duplicate term 'alienare' (verb) appears 2 times in file |
| C2 | `demarcare` | verb | `inSameFileDuplicate` | Duplicate term 'demarcare' (verb) appears 2 times in file |
| C2 | `delimitare` | verb | `inSameFileDuplicate` | Duplicate term 'delimitare' (verb) appears 2 times in file |
| C2 | `militare` | verb | `inSameFileDuplicate` | Duplicate term 'militare' (verb) appears 2 times in file |
| C2 | `viziare` | verb | `inSameFileDuplicate` | Duplicate term 'viziare' (verb) appears 2 times in file |
| C2 | `smentire` | verb | `inSameFileDuplicate` | Duplicate term 'smentire' (verb) appears 2 times in file |
| C2 | `abrogare` | verb | `inSameFileDuplicate` | Duplicate term 'abrogare' (verb) appears 2 times in file |
| C2 | `decostruire` | verb | `inSameFileDuplicate` | Duplicate term 'decostruire' (verb) appears 2 times in file |
| C2 | `problematizzare` | verb | `inSameFileDuplicate` | Duplicate term 'problematizzare' (verb) appears 2 times in file |
| C2 | `sviscerare` | verb | `inSameFileDuplicate` | Duplicate term 'sviscerare' (verb) appears 2 times in file |
| C2 | `precludere` | verb | `inSameFileDuplicate` | Duplicate term 'precludere' (verb) appears 4 times in file |
| C2 | `dialettizzare` | verb | `inSameFileDuplicate` | Duplicate term 'dialettizzare' (verb) appears 2 times in file |
| C2 | `contravvenire` | verb | `inSameFileDuplicate` | Duplicate term 'contravvenire' (verb) appears 2 times in file |
| C2 | `sussumere` | verb | `inSameFileDuplicate` | Duplicate term 'sussumere' (verb) appears 2 times in file |
| C2 | `accentuare` | verb | `inSameFileDuplicate` | Duplicate term 'accentuare' (verb) appears 2 times in file |
| C2 | `acconsentire` | verb | `inSameFileDuplicate` | Duplicate term 'acconsentire' (verb) appears 2 times in file |
| C2 | `alleviare` | verb | `inSameFileDuplicate` | Duplicate term 'alleviare' (verb) appears 2 times in file |
| C2 | `aggirare` | verb | `inSameFileDuplicate` | Duplicate term 'aggirare' (verb) appears 2 times in file |
| C2 | `corroborare` | verb | `inSameFileDuplicate` | Duplicate term 'corroborare' (verb) appears 2 times in file |
| C2 | `diffondere` | verb | `inSameFileDuplicate` | Duplicate term 'diffondere' (verb) appears 2 times in file |
| C2 | `racchiudere` | verb | `inSameFileDuplicate` | Duplicate term 'racchiudere' (verb) appears 2 times in file |
| C2 | `ingenerare` | verb | `inSameFileDuplicate` | Duplicate term 'ingenerare' (verb) appears 2 times in file |
| C2 | `esacerbare` | verb | `inSameFileDuplicate` | Duplicate term 'esacerbare' (verb) appears 2 times in file |
| C2 | `esemplificare` | verb | `inSameFileDuplicate` | Duplicate term 'esemplificare' (verb) appears 2 times in file |
| C2 | `mitigare` | verb | `inSameFileDuplicate` | Duplicate term 'mitigare' (verb) appears 2 times in file |
| C2 | `obbligare` | verb | `inSameFileDuplicate` | Duplicate term 'obbligare' (verb) appears 2 times in file |
| C2 | `pervadere` | verb | `inSameFileDuplicate` | Duplicate term 'pervadere' (verb) appears 2 times in file |
| C2 | `precludere` | verb | `inSameFileDuplicate` | Duplicate term 'precludere' (verb) appears 4 times in file |
| C2 | `conciliare` | verb | `inSameFileDuplicate` | Duplicate term 'conciliare' (verb) appears 2 times in file |
| C2 | `soppiantare` | verb | `inSameFileDuplicate` | Duplicate term 'soppiantare' (verb) appears 2 times in file |
| C2 | `giustificare` | verb | `inSameFileDuplicate` | Duplicate term 'giustificare' (verb) appears 2 times in file |
| C2 | `ruotare attorno a` | verb | `inSameFileDuplicate` | Duplicate term 'ruotare attorno a' (verb) appears 2 times in file |
| C2 | `sorvolare su` | verb | `inSameFileDuplicate` | Duplicate term 'sorvolare su' (verb) appears 2 times in file |
| C2 | `mascherare` | verb | `inSameFileDuplicate` | Duplicate term 'mascherare' (verb) appears 2 times in file |
| C2 | `cambio di paradigma` | verb | `inSameFileDuplicate` | Duplicate term 'cambio di paradigma' (verb) appears 2 times in file |
| C2 | `reificare` | verb | `inSameFileDuplicate` | Duplicate term 'reificare' (verb) appears 2 times in file |
| C2 | `sublimare` | verb | `inSameFileDuplicate` | Duplicate term 'sublimare' (verb) appears 2 times in file |
| C2 | `predicare` | verb | `inSameFileDuplicate` | Duplicate term 'predicare' (verb) appears 2 times in file |
| C2 | `istanziare` | verb | `inSameFileDuplicate` | Duplicate term 'istanziare' (verb) appears 2 times in file |
| C2 | `trascendere` | verb | `inSameFileDuplicate` | Duplicate term 'trascendere' (verb) appears 2 times in file |
| C2 | `mediare` | verb | `inSameFileDuplicate` | Duplicate term 'mediare' (verb) appears 2 times in file |
| C2 | `elidere` | verb | `inSameFileDuplicate` | Duplicate term 'elidere' (verb) appears 2 times in file |
| C2 | `offuscare` | verb | `inSameFileDuplicate` | Duplicate term 'offuscare' (verb) appears 2 times in file |
| C2 | `fondere` | verb | `inSameFileDuplicate` | Duplicate term 'fondere' (verb) appears 2 times in file |
| C2 | `invocare` | verb | `inSameFileDuplicate` | Duplicate term 'invocare' (verb) appears 2 times in file |
| C2 | `mettere in primo piano` | verb | `inSameFileDuplicate` | Duplicate term 'mettere in primo piano' (verb) appears 2 times in file |
| C2 | `recuperare` | verb | `inSameFileDuplicate` | Duplicate term 'recuperare' (verb) appears 2 times in file |
| C2 | `destabilizzare` | verb | `inSameFileDuplicate` | Duplicate term 'destabilizzare' (verb) appears 2 times in file |
| C2 | `mercificare` | verb | `inSameFileDuplicate` | Duplicate term 'mercificare' (verb) appears 2 times in file |
| C2 | `strumentalizzare` | verb | `inSameFileDuplicate` | Duplicate term 'strumentalizzare' (verb) appears 2 times in file |
| C2 | `valorizzare` | verb | `inSameFileDuplicate` | Duplicate term 'valorizzare' (verb) appears 2 times in file |
| C2 | `feticizzare` | verb | `inSameFileDuplicate` | Duplicate term 'feticizzare' (verb) appears 2 times in file |
| C2 | `egemonizzare` | verb | `inSameFileDuplicate` | Duplicate term 'egemonizzare' (verb) appears 2 times in file |
| C2 | `alienare` | verb | `inSameFileDuplicate` | Duplicate term 'alienare' (verb) appears 2 times in file |
| C2 | `demarcare` | verb | `inSameFileDuplicate` | Duplicate term 'demarcare' (verb) appears 2 times in file |
| C2 | `delimitare` | verb | `inSameFileDuplicate` | Duplicate term 'delimitare' (verb) appears 2 times in file |
| C2 | `militare` | verb | `inSameFileDuplicate` | Duplicate term 'militare' (verb) appears 2 times in file |
| C2 | `viziare` | verb | `inSameFileDuplicate` | Duplicate term 'viziare' (verb) appears 2 times in file |
| C2 | `smentire` | verb | `inSameFileDuplicate` | Duplicate term 'smentire' (verb) appears 2 times in file |
| C2 | `abrogare` | verb | `inSameFileDuplicate` | Duplicate term 'abrogare' (verb) appears 2 times in file |
| C2 | `decostruire` | verb | `inSameFileDuplicate` | Duplicate term 'decostruire' (verb) appears 2 times in file |
| C2 | `problematizzare` | verb | `inSameFileDuplicate` | Duplicate term 'problematizzare' (verb) appears 2 times in file |
| C2 | `sviscerare` | verb | `inSameFileDuplicate` | Duplicate term 'sviscerare' (verb) appears 2 times in file |
| C2 | `precludere` | verb | `inSameFileDuplicate` | Duplicate term 'precludere' (verb) appears 4 times in file |
| C2 | `dialettizzare` | verb | `inSameFileDuplicate` | Duplicate term 'dialettizzare' (verb) appears 2 times in file |
| C2 | `contravvenire` | verb | `inSameFileDuplicate` | Duplicate term 'contravvenire' (verb) appears 2 times in file |
| C2 | `sussumere` | verb | `inSameFileDuplicate` | Duplicate term 'sussumere' (verb) appears 2 times in file |
| C2 | `accentuare` | verb | `inSameFileDuplicate` | Duplicate term 'accentuare' (verb) appears 2 times in file |
| C2 | `acconsentire` | verb | `inSameFileDuplicate` | Duplicate term 'acconsentire' (verb) appears 2 times in file |
| C2 | `alleviare` | verb | `inSameFileDuplicate` | Duplicate term 'alleviare' (verb) appears 2 times in file |
| C2 | `aggirare` | verb | `inSameFileDuplicate` | Duplicate term 'aggirare' (verb) appears 2 times in file |
| C2 | `corroborare` | verb | `inSameFileDuplicate` | Duplicate term 'corroborare' (verb) appears 2 times in file |
| C2 | `diffondere` | verb | `inSameFileDuplicate` | Duplicate term 'diffondere' (verb) appears 2 times in file |
| C2 | `racchiudere` | verb | `inSameFileDuplicate` | Duplicate term 'racchiudere' (verb) appears 2 times in file |
| C2 | `ingenerare` | verb | `inSameFileDuplicate` | Duplicate term 'ingenerare' (verb) appears 2 times in file |
| C2 | `esacerbare` | verb | `inSameFileDuplicate` | Duplicate term 'esacerbare' (verb) appears 2 times in file |
| C2 | `esemplificare` | verb | `inSameFileDuplicate` | Duplicate term 'esemplificare' (verb) appears 2 times in file |
| C2 | `mitigare` | verb | `inSameFileDuplicate` | Duplicate term 'mitigare' (verb) appears 2 times in file |
| C2 | `obbligare` | verb | `inSameFileDuplicate` | Duplicate term 'obbligare' (verb) appears 2 times in file |
| C2 | `pervadere` | verb | `inSameFileDuplicate` | Duplicate term 'pervadere' (verb) appears 2 times in file |
| C2 | `precludere` | verb | `inSameFileDuplicate` | Duplicate term 'precludere' (verb) appears 4 times in file |
| C2 | `conciliare` | verb | `inSameFileDuplicate` | Duplicate term 'conciliare' (verb) appears 2 times in file |
| C2 | `soppiantare` | verb | `inSameFileDuplicate` | Duplicate term 'soppiantare' (verb) appears 2 times in file |
| C2 | `giustificare` | verb | `inSameFileDuplicate` | Duplicate term 'giustificare' (verb) appears 2 times in file |
| C2 | `ruotare attorno a` | verb | `inSameFileDuplicate` | Duplicate term 'ruotare attorno a' (verb) appears 2 times in file |
| C2 | `sorvolare su` | verb | `inSameFileDuplicate` | Duplicate term 'sorvolare su' (verb) appears 2 times in file |
| C2 | `mascherare` | verb | `inSameFileDuplicate` | Duplicate term 'mascherare' (verb) appears 2 times in file |

### KA (Georgian) — 309 Flagged Entries out of 628 Category (a) Entries

#### File: `vocabulary/ka/B1/locations.js` (11 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `ავსტრალია` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `იაპონია` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `ჩინეთი` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `ბრაზილია` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `ინდოეთი` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `ტოკიო` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `სიდნეი` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `პეკინი` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `რიო-დე-ჟანეირო` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `კაირო` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `დელი` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/ka/B2/fluency.js` (22 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |

#### File: `vocabulary/ka/B2/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/ka/C1/fluency.js` (20 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |

#### File: `vocabulary/ka/C1/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/ka/C2/adjectives.js` (118 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `ინტერდისციპლინური` | adjective | `inSameFileDuplicate` | Duplicate term 'ინტერდისციპლინური' (adjective) appears 2 times in file |
| C2 | `ჰერმენევტიკული` | adjective | `inSameFileDuplicate` | Duplicate term 'ჰერმენევტიკული' (adjective) appears 2 times in file |
| C2 | `ტავტოლოგიური` | adjective | `inSameFileDuplicate` | Duplicate term 'ტავტოლოგიური' (adjective) appears 2 times in file |
| C2 | `პოლისემიური` | adjective | `inSameFileDuplicate` | Duplicate term 'პოლისემიური' (adjective) appears 2 times in file |
| C2 | `ევრისტიკული` | adjective | `inSameFileDuplicate` | Duplicate term 'ევრისტიკული' (adjective) appears 2 times in file |
| C2 | `პოსტკოლონიური` | adjective | `inSameFileDuplicate` | Duplicate term 'პოსტკოლონიური' (adjective) appears 2 times in file |
| C2 | `მულტიპოლარული` | adjective | `inSameFileDuplicate` | Duplicate term 'მულტიპოლარული' (adjective) appears 2 times in file |
| C2 | `კოსმოპოლიტური` | adjective | `inSameFileDuplicate` | Duplicate term 'კოსმოპოლიტური' (adjective) appears 2 times in file |
| C2 | `ნარცისული` | adjective | `inSameFileDuplicate` | Duplicate term 'ნარცისული' (adjective) appears 2 times in file |
| C2 | `ჰეტეროდოქსული` | adjective | `inSameFileDuplicate` | Duplicate term 'ჰეტეროდოქსული' (adjective) appears 2 times in file |
| C2 | `იმანენტური` | adjective | `inSameFileDuplicate` | Duplicate term 'იმანენტური' (adjective) appears 2 times in file |
| C2 | `მკვეთრი` | adjective | `inSameFileDuplicate` | Duplicate term 'მკვეთრი' (adjective) appears 2 times in file |
| C2 | `აბსტრუსული` | adjective | `inSameFileDuplicate` | Duplicate term 'აბსტრუსული' (adjective) appears 2 times in file |
| C2 | `ანაქრონისტული` | adjective | `inSameFileDuplicate` | Duplicate term 'ანაქრონისტული' (adjective) appears 2 times in file |
| C2 | `ანტითეტიკური` | adjective | `inSameFileDuplicate` | Duplicate term 'ანტითეტიკური' (adjective) appears 2 times in file |
| C2 | `არკანული` | adjective | `inSameFileDuplicate` | Duplicate term 'არკანული' (adjective) appears 2 times in file |
| C2 | `ატიპიური` | adjective | `inSameFileDuplicate` | Duplicate term 'ატიპიური' (adjective) appears 2 times in file |
| C2 | `ბინარული` | adjective | `inSameFileDuplicate` | Duplicate term 'ბინარული' (adjective) appears 2 times in file |
| C2 | `კატეგორიული` | adjective | `inSameFileDuplicate` | Duplicate term 'კატეგორიული' (adjective) appears 2 times in file |
| C2 | `წინდახედული` | adjective | `inSameFileDuplicate` | Duplicate term 'წინდახედული' (adjective) appears 2 times in file |
| C2 | `ფარული` | adjective | `inSameFileDuplicate` | Duplicate term 'ფარული' (adjective) appears 2 times in file |
| C2 | `დიალექტიკური` | adjective | `inSameFileDuplicate` | Duplicate term 'დიალექტიკური' (adjective) appears 2 times in file |
| C2 | `დიფუზური` | adjective | `inSameFileDuplicate` | Duplicate term 'დიფუზური' (adjective) appears 2 times in file |
| C2 | `მიუღწეველი` | adjective | `inSameFileDuplicate` | Duplicate term 'მიუღწეველი' (adjective) appears 2 times in file |
| C2 | `ეზოთერული` | adjective | `inSameFileDuplicate` | Duplicate term 'ეზოთერული' (adjective) appears 2 times in file |
| C2 | `მცდარი` | adjective | `inSameFileDuplicate` | Duplicate term 'მცდარი' (adjective) appears 2 times in file |
| C2 | `უცვლელი` | adjective | `inSameFileDuplicate` | Duplicate term 'უცვლელი' (adjective) appears 2 times in file |
| C2 | `მიუკერძოებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'მიუკერძოებელი' (adjective) appears 2 times in file |
| C2 | `თანამგზავრი` | adjective | `inSameFileDuplicate` | Duplicate term 'თანამგზავრი' (adjective) appears 2 times in file |
| C2 | `თანდაყოლილი` | adjective | `inSameFileDuplicate` | Duplicate term 'თანდაყოლილი' (adjective) appears 2 times in file |
| C2 | `განუმეორებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'განუმეორებელი' (adjective) appears 2 times in file |
| C2 | `ვერაგული` | adjective | `inSameFileDuplicate` | Duplicate term 'ვერაგული' (adjective) appears 2 times in file |
| C2 | `შეურიგებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'შეურიგებელი' (adjective) appears 2 times in file |
| C2 | `ლიმინალური` | adjective | `inSameFileDuplicate` | Duplicate term 'ლიმინალური' (adjective) appears 2 times in file |
| C2 | `მრავალფეროვანი` | adjective | `inSameFileDuplicate` | Duplicate term 'მრავალფეროვანი' (adjective) appears 2 times in file |
| C2 | `ბუნდოვანი` | adjective | `inSameFileDuplicate` | Duplicate term 'ბუნდოვანი' (adjective) appears 2 times in file |
| C2 | `ნორმატიული` | adjective | `inSameFileDuplicate` | Duplicate term 'ნორმატიული' (adjective) appears 2 times in file |
| C2 | `ნიუანსირებული` | adjective | `inSameFileDuplicate` | Duplicate term 'ნიუანსირებული' (adjective) appears 2 times in file |
| C2 | `ირიბი` | adjective | `inSameFileDuplicate` | Duplicate term 'ირიბი' (adjective) appears 2 times in file |
| C2 | `გაუმჭვირვალე` | adjective | `inSameFileDuplicate` | Duplicate term 'გაუმჭვირვალე' (adjective) appears 2 times in file |
| C2 | `მოჩვენებითი` | adjective | `inSameFileDuplicate` | Duplicate term 'მოჩვენებითი' (adjective) appears 2 times in file |
| C2 | `პარადოქსული` | adjective | `inSameFileDuplicate` | Duplicate term 'პარადოქსული' (adjective) appears 2 times in file |
| C2 | `ყოველგანმსჭვალავი` | adjective | `inSameFileDuplicate` | Duplicate term 'ყოველგანმსჭვალავი' (adjective) appears 2 times in file |
| C2 | `პოლარიზებადი` | adjective | `inSameFileDuplicate` | Duplicate term 'პოლარიზებადი' (adjective) appears 2 times in file |
| C2 | `არამდგრადი` | adjective | `inSameFileDuplicate` | Duplicate term 'არამდგრადი' (adjective) appears 2 times in file |
| C2 | `პრესკრიპციული` | adjective | `inSameFileDuplicate` | Duplicate term 'პრესკრიპციული' (adjective) appears 2 times in file |
| C2 | `გაჭიანურებული` | adjective | `inSameFileDuplicate` | Duplicate term 'გაჭიანურებული' (adjective) appears 2 times in file |
| C2 | `რედუქციული` | adjective | `inSameFileDuplicate` | Duplicate term 'რედუქციული' (adjective) appears 2 times in file |
| C2 | `ფუძემდებლური` | adjective | `inSameFileDuplicate` | Duplicate term 'ფუძემდებლური' (adjective) appears 2 times in file |
| C2 | `სპეციოზური` | adjective | `inSameFileDuplicate` | Duplicate term 'სპეციოზური' (adjective) appears 2 times in file |
| C2 | `ყალბი` | adjective | `inSameFileDuplicate` | Duplicate term 'ყალბი' (adjective) appears 2 times in file |
| C2 | `სუბვერსიული` | adjective | `inSameFileDuplicate` | Duplicate term 'სუბვერსიული' (adjective) appears 2 times in file |
| C2 | `უხმო` | adjective | `inSameFileDuplicate` | Duplicate term 'უხმო' (adjective) appears 2 times in file |
| C2 | `წარმავალი` | adjective | `inSameFileDuplicate` | Duplicate term 'წარმავალი' (adjective) appears 2 times in file |
| C2 | `უბიკვიტური` | adjective | `inSameFileDuplicate` | Duplicate term 'უბიკვიტური' (adjective) appears 2 times in file |
| C2 | `ცალსახა` | adjective | `inSameFileDuplicate` | Duplicate term 'ცალსახა' (adjective) appears 2 times in file |
| C2 | `უპრეცედენტო` | adjective | `inSameFileDuplicate` | Duplicate term 'უპრეცედენტო' (adjective) appears 2 times in file |
| C2 | `დაუცველი` | adjective | `inSameFileDuplicate` | Duplicate term 'დაუცველი' (adjective) appears 2 times in file |
| C2 | `მოუხერხებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'მოუხერხებელი' (adjective) appears 2 times in file |
| C2 | `ინტერდისციპლინური` | adjective | `inSameFileDuplicate` | Duplicate term 'ინტერდისციპლინური' (adjective) appears 2 times in file |
| C2 | `ჰერმენევტიკული` | adjective | `inSameFileDuplicate` | Duplicate term 'ჰერმენევტიკული' (adjective) appears 2 times in file |
| C2 | `ტავტოლოგიური` | adjective | `inSameFileDuplicate` | Duplicate term 'ტავტოლოგიური' (adjective) appears 2 times in file |
| C2 | `პოლისემიური` | adjective | `inSameFileDuplicate` | Duplicate term 'პოლისემიური' (adjective) appears 2 times in file |
| C2 | `ევრისტიკული` | adjective | `inSameFileDuplicate` | Duplicate term 'ევრისტიკული' (adjective) appears 2 times in file |
| C2 | `პოსტკოლონიური` | adjective | `inSameFileDuplicate` | Duplicate term 'პოსტკოლონიური' (adjective) appears 2 times in file |
| C2 | `მულტიპოლარული` | adjective | `inSameFileDuplicate` | Duplicate term 'მულტიპოლარული' (adjective) appears 2 times in file |
| C2 | `კოსმოპოლიტური` | adjective | `inSameFileDuplicate` | Duplicate term 'კოსმოპოლიტური' (adjective) appears 2 times in file |
| C2 | `ნარცისული` | adjective | `inSameFileDuplicate` | Duplicate term 'ნარცისული' (adjective) appears 2 times in file |
| C2 | `ჰეტეროდოქსული` | adjective | `inSameFileDuplicate` | Duplicate term 'ჰეტეროდოქსული' (adjective) appears 2 times in file |
| C2 | `იმანენტური` | adjective | `inSameFileDuplicate` | Duplicate term 'იმანენტური' (adjective) appears 2 times in file |
| C2 | `მკვეთრი` | adjective | `inSameFileDuplicate` | Duplicate term 'მკვეთრი' (adjective) appears 2 times in file |
| C2 | `აბსტრუსული` | adjective | `inSameFileDuplicate` | Duplicate term 'აბსტრუსული' (adjective) appears 2 times in file |
| C2 | `ანაქრონისტული` | adjective | `inSameFileDuplicate` | Duplicate term 'ანაქრონისტული' (adjective) appears 2 times in file |
| C2 | `ანტითეტიკური` | adjective | `inSameFileDuplicate` | Duplicate term 'ანტითეტიკური' (adjective) appears 2 times in file |
| C2 | `არკანული` | adjective | `inSameFileDuplicate` | Duplicate term 'არკანული' (adjective) appears 2 times in file |
| C2 | `ატიპიური` | adjective | `inSameFileDuplicate` | Duplicate term 'ატიპიური' (adjective) appears 2 times in file |
| C2 | `ბინარული` | adjective | `inSameFileDuplicate` | Duplicate term 'ბინარული' (adjective) appears 2 times in file |
| C2 | `კატეგორიული` | adjective | `inSameFileDuplicate` | Duplicate term 'კატეგორიული' (adjective) appears 2 times in file |
| C2 | `წინდახედული` | adjective | `inSameFileDuplicate` | Duplicate term 'წინდახედული' (adjective) appears 2 times in file |
| C2 | `ფარული` | adjective | `inSameFileDuplicate` | Duplicate term 'ფარული' (adjective) appears 2 times in file |
| C2 | `დიალექტიკური` | adjective | `inSameFileDuplicate` | Duplicate term 'დიალექტიკური' (adjective) appears 2 times in file |
| C2 | `დიფუზური` | adjective | `inSameFileDuplicate` | Duplicate term 'დიფუზური' (adjective) appears 2 times in file |
| C2 | `მიუღწეველი` | adjective | `inSameFileDuplicate` | Duplicate term 'მიუღწეველი' (adjective) appears 2 times in file |
| C2 | `ეზოთერული` | adjective | `inSameFileDuplicate` | Duplicate term 'ეზოთერული' (adjective) appears 2 times in file |
| C2 | `მცდარი` | adjective | `inSameFileDuplicate` | Duplicate term 'მცდარი' (adjective) appears 2 times in file |
| C2 | `უცვლელი` | adjective | `inSameFileDuplicate` | Duplicate term 'უცვლელი' (adjective) appears 2 times in file |
| C2 | `მიუკერძოებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'მიუკერძოებელი' (adjective) appears 2 times in file |
| C2 | `თანამგზავრი` | adjective | `inSameFileDuplicate` | Duplicate term 'თანამგზავრი' (adjective) appears 2 times in file |
| C2 | `თანდაყოლილი` | adjective | `inSameFileDuplicate` | Duplicate term 'თანდაყოლილი' (adjective) appears 2 times in file |
| C2 | `განუმეორებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'განუმეორებელი' (adjective) appears 2 times in file |
| C2 | `ვერაგული` | adjective | `inSameFileDuplicate` | Duplicate term 'ვერაგული' (adjective) appears 2 times in file |
| C2 | `შეურიგებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'შეურიგებელი' (adjective) appears 2 times in file |
| C2 | `ლიმინალური` | adjective | `inSameFileDuplicate` | Duplicate term 'ლიმინალური' (adjective) appears 2 times in file |
| C2 | `მრავალფეროვანი` | adjective | `inSameFileDuplicate` | Duplicate term 'მრავალფეროვანი' (adjective) appears 2 times in file |
| C2 | `ბუნდოვანი` | adjective | `inSameFileDuplicate` | Duplicate term 'ბუნდოვანი' (adjective) appears 2 times in file |
| C2 | `ნორმატიული` | adjective | `inSameFileDuplicate` | Duplicate term 'ნორმატიული' (adjective) appears 2 times in file |
| C2 | `ნიუანსირებული` | adjective | `inSameFileDuplicate` | Duplicate term 'ნიუანსირებული' (adjective) appears 2 times in file |
| C2 | `ირიბი` | adjective | `inSameFileDuplicate` | Duplicate term 'ირიბი' (adjective) appears 2 times in file |
| C2 | `გაუმჭვირვალე` | adjective | `inSameFileDuplicate` | Duplicate term 'გაუმჭვირვალე' (adjective) appears 2 times in file |
| C2 | `მოჩვენებითი` | adjective | `inSameFileDuplicate` | Duplicate term 'მოჩვენებითი' (adjective) appears 2 times in file |
| C2 | `პარადოქსული` | adjective | `inSameFileDuplicate` | Duplicate term 'პარადოქსული' (adjective) appears 2 times in file |
| C2 | `ყოველგანმსჭვალავი` | adjective | `inSameFileDuplicate` | Duplicate term 'ყოველგანმსჭვალავი' (adjective) appears 2 times in file |
| C2 | `პოლარიზებადი` | adjective | `inSameFileDuplicate` | Duplicate term 'პოლარიზებადი' (adjective) appears 2 times in file |
| C2 | `არამდგრადი` | adjective | `inSameFileDuplicate` | Duplicate term 'არამდგრადი' (adjective) appears 2 times in file |
| C2 | `პრესკრიპციული` | adjective | `inSameFileDuplicate` | Duplicate term 'პრესკრიპციული' (adjective) appears 2 times in file |
| C2 | `გაჭიანურებული` | adjective | `inSameFileDuplicate` | Duplicate term 'გაჭიანურებული' (adjective) appears 2 times in file |
| C2 | `რედუქციული` | adjective | `inSameFileDuplicate` | Duplicate term 'რედუქციული' (adjective) appears 2 times in file |
| C2 | `ფუძემდებლური` | adjective | `inSameFileDuplicate` | Duplicate term 'ფუძემდებლური' (adjective) appears 2 times in file |
| C2 | `სპეციოზური` | adjective | `inSameFileDuplicate` | Duplicate term 'სპეციოზური' (adjective) appears 2 times in file |
| C2 | `ყალბი` | adjective | `inSameFileDuplicate` | Duplicate term 'ყალბი' (adjective) appears 2 times in file |
| C2 | `სუბვერსიული` | adjective | `inSameFileDuplicate` | Duplicate term 'სუბვერსიული' (adjective) appears 2 times in file |
| C2 | `უხმო` | adjective | `inSameFileDuplicate` | Duplicate term 'უხმო' (adjective) appears 2 times in file |
| C2 | `წარმავალი` | adjective | `inSameFileDuplicate` | Duplicate term 'წარმავალი' (adjective) appears 2 times in file |
| C2 | `უბიკვიტური` | adjective | `inSameFileDuplicate` | Duplicate term 'უბიკვიტური' (adjective) appears 2 times in file |
| C2 | `ცალსახა` | adjective | `inSameFileDuplicate` | Duplicate term 'ცალსახა' (adjective) appears 2 times in file |
| C2 | `უპრეცედენტო` | adjective | `inSameFileDuplicate` | Duplicate term 'უპრეცედენტო' (adjective) appears 2 times in file |
| C2 | `დაუცველი` | adjective | `inSameFileDuplicate` | Duplicate term 'დაუცველი' (adjective) appears 2 times in file |
| C2 | `მოუხერხებელი` | adjective | `inSameFileDuplicate` | Duplicate term 'მოუხერხებელი' (adjective) appears 2 times in file |

#### File: `vocabulary/ka/C2/verbs.js` (104 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `რეიფიცირება` | verb | `inSameFileDuplicate` | Duplicate term 'რეიფიცირება' (verb) appears 2 times in file |
| C2 | `სუბლიმირება` | verb | `inSameFileDuplicate` | Duplicate term 'სუბლიმირება' (verb) appears 2 times in file |
| C2 | `პრედიცირება` | verb | `inSameFileDuplicate` | Duplicate term 'პრედიცირება' (verb) appears 2 times in file |
| C2 | `განხორციელება` | verb | `inSameFileDuplicate` | Duplicate term 'განხორციელება' (verb) appears 2 times in file |
| C2 | `უარყოფა` | verb | `inSameFileDuplicate` | Duplicate term 'უარყოფა' (verb) appears 4 times in file |
| C2 | `აღმატება` | verb | `inSameFileDuplicate` | Duplicate term 'აღმატება' (verb) appears 2 times in file |
| C2 | `მედიაცია` | verb | `inSameFileDuplicate` | Duplicate term 'მედიაცია' (verb) appears 2 times in file |
| C2 | `დაბინდვა` | verb | `inSameFileDuplicate` | Duplicate term 'დაბინდვა' (verb) appears 2 times in file |
| C2 | `აღრევა` | verb | `inSameFileDuplicate` | Duplicate term 'აღრევა' (verb) appears 2 times in file |
| C2 | `მოხმობა` | verb | `inSameFileDuplicate` | Duplicate term 'მოხმობა' (verb) appears 2 times in file |
| C2 | `წინ წამოწევა` | verb | `inSameFileDuplicate` | Duplicate term 'წინ წამოწევა' (verb) appears 2 times in file |
| C2 | `ათვისება` | verb | `inSameFileDuplicate` | Duplicate term 'ათვისება' (verb) appears 2 times in file |
| C2 | `დესტაბილიზაცია` | verb | `inSameFileDuplicate` | Duplicate term 'დესტაბილიზაცია' (verb) appears 2 times in file |
| C2 | `კომოდიფიკაცია` | verb | `inSameFileDuplicate` | Duplicate term 'კომოდიფიკაცია' (verb) appears 2 times in file |
| C2 | `ინსტრუმენტალიზება` | verb | `inSameFileDuplicate` | Duplicate term 'ინსტრუმენტალიზება' (verb) appears 2 times in file |
| C2 | `ვალორიზაცია` | verb | `inSameFileDuplicate` | Duplicate term 'ვალორიზაცია' (verb) appears 2 times in file |
| C2 | `ფეტიშიზება` | verb | `inSameFileDuplicate` | Duplicate term 'ფეტიშიზება' (verb) appears 2 times in file |
| C2 | `გაუცხოება` | verb | `inSameFileDuplicate` | Duplicate term 'გაუცხოება' (verb) appears 2 times in file |
| C2 | `დემარკაცია` | verb | `inSameFileDuplicate` | Duplicate term 'დემარკაცია' (verb) appears 2 times in file |
| C2 | `შემოსაზღვრა` | verb | `inSameFileDuplicate` | Duplicate term 'შემოსაზღვრა' (verb) appears 2 times in file |
| C2 | `წინააღმდეგ მოქმედება` | verb | `inSameFileDuplicate` | Duplicate term 'წინააღმდეგ მოქმედება' (verb) appears 2 times in file |
| C2 | `გაუფასურება` | verb | `inSameFileDuplicate` | Duplicate term 'გაუფასურება' (verb) appears 2 times in file |
| C2 | `უარყოფა` | verb | `inSameFileDuplicate` | Duplicate term 'უარყოფა' (verb) appears 4 times in file |
| C2 | `დარღვევა` | verb | `inSameFileDuplicate` | Duplicate term 'დარღვევა' (verb) appears 2 times in file |
| C2 | `სუბსუმირება` | verb | `inSameFileDuplicate` | Duplicate term 'სუბსუმირება' (verb) appears 2 times in file |
| C2 | `დეკონსტრუქცია` | verb | `inSameFileDuplicate` | Duplicate term 'დეკონსტრუქცია' (verb) appears 2 times in file |
| C2 | `გამორიცხვა` | verb | `inSameFileDuplicate` | Duplicate term 'გამორიცხვა' (verb) appears 4 times in file |
| C2 | `დიალექტიზება` | verb | `inSameFileDuplicate` | Duplicate term 'დიალექტიზება' (verb) appears 2 times in file |
| C2 | `ჰეგემონიზება` | verb | `inSameFileDuplicate` | Duplicate term 'ჰეგემონიზება' (verb) appears 2 times in file |
| C2 | `ხაზგასმა` | verb | `inSameFileDuplicate` | Duplicate term 'ხაზგასმა' (verb) appears 2 times in file |
| C2 | `შემსუბუქება` | verb | `inSameFileDuplicate` | Duplicate term 'შემსუბუქება' (verb) appears 2 times in file |
| C2 | `გვერდის ავლით` | verb | `inSameFileDuplicate` | Duplicate term 'გვერდის ავლით' (verb) appears 2 times in file |
| C2 | `დადასტურება` | verb | `inSameFileDuplicate` | Duplicate term 'დადასტურება' (verb) appears 2 times in file |
| C2 | `გავრცელება` | verb | `inSameFileDuplicate` | Duplicate term 'გავრცელება' (verb) appears 2 times in file |
| C2 | `ასახვა` | verb | `inSameFileDuplicate` | Duplicate term 'ასახვა' (verb) appears 2 times in file |
| C2 | `გამოწვევა` | verb | `inSameFileDuplicate` | Duplicate term 'გამოწვევა' (verb) appears 2 times in file |
| C2 | `გამწვავება` | verb | `inSameFileDuplicate` | Duplicate term 'გამწვავება' (verb) appears 2 times in file |
| C2 | `განსახიერება` | verb | `inSameFileDuplicate` | Duplicate term 'განსახიერება' (verb) appears 2 times in file |
| C2 | `შეფერხება` | verb | `inSameFileDuplicate` | Duplicate term 'შეფერხება' (verb) appears 2 times in file |
| C2 | `შერბილება` | verb | `inSameFileDuplicate` | Duplicate term 'შერბილება' (verb) appears 2 times in file |
| C2 | `ვალდებულება` | verb | `inSameFileDuplicate` | Duplicate term 'ვალდებულება' (verb) appears 2 times in file |
| C2 | `გამსჭვალვა` | verb | `inSameFileDuplicate` | Duplicate term 'გამსჭვალვა' (verb) appears 2 times in file |
| C2 | `გამორიცხვა` | verb | `inSameFileDuplicate` | Duplicate term 'გამორიცხვა' (verb) appears 4 times in file |
| C2 | `შერიგება` | verb | `inSameFileDuplicate` | Duplicate term 'შერიგება' (verb) appears 2 times in file |
| C2 | `ჩანაცვლება` | verb | `inSameFileDuplicate` | Duplicate term 'ჩანაცვლება' (verb) appears 2 times in file |
| C2 | `საფუძვლის ჩაყრა` | verb | `inSameFileDuplicate` | Duplicate term 'საფუძვლის ჩაყრა' (verb) appears 2 times in file |
| C2 | `გამართლება` | verb | `inSameFileDuplicate` | Duplicate term 'გამართლება' (verb) appears 2 times in file |
| C2 | `დამოკიდებულება` | verb | `inSameFileDuplicate` | Duplicate term 'დამოკიდებულება' (verb) appears 2 times in file |
| C2 | `ჭიდილი` | verb | `inSameFileDuplicate` | Duplicate term 'ჭიდილი' (verb) appears 2 times in file |
| C2 | `ზედაპირულად განხილვა` | verb | `inSameFileDuplicate` | Duplicate term 'ზედაპირულად განხილვა' (verb) appears 2 times in file |
| C2 | `მიჩუმათება` | verb | `inSameFileDuplicate` | Duplicate term 'მიჩუმათება' (verb) appears 2 times in file |
| C2 | `პარადაგმის შეცვლა` | verb | `inSameFileDuplicate` | Duplicate term 'პარადაგმის შეცვლა' (verb) appears 2 times in file |
| C2 | `რეიფიცირება` | verb | `inSameFileDuplicate` | Duplicate term 'რეიფიცირება' (verb) appears 2 times in file |
| C2 | `სუბლიმირება` | verb | `inSameFileDuplicate` | Duplicate term 'სუბლიმირება' (verb) appears 2 times in file |
| C2 | `პრედიცირება` | verb | `inSameFileDuplicate` | Duplicate term 'პრედიცირება' (verb) appears 2 times in file |
| C2 | `განხორციელება` | verb | `inSameFileDuplicate` | Duplicate term 'განხორციელება' (verb) appears 2 times in file |
| C2 | `უარყოფა` | verb | `inSameFileDuplicate` | Duplicate term 'უარყოფა' (verb) appears 4 times in file |
| C2 | `აღმატება` | verb | `inSameFileDuplicate` | Duplicate term 'აღმატება' (verb) appears 2 times in file |
| C2 | `მედიაცია` | verb | `inSameFileDuplicate` | Duplicate term 'მედიაცია' (verb) appears 2 times in file |
| C2 | `დაბინდვა` | verb | `inSameFileDuplicate` | Duplicate term 'დაბინდვა' (verb) appears 2 times in file |
| C2 | `აღრევა` | verb | `inSameFileDuplicate` | Duplicate term 'აღრევა' (verb) appears 2 times in file |
| C2 | `მოხმობა` | verb | `inSameFileDuplicate` | Duplicate term 'მოხმობა' (verb) appears 2 times in file |
| C2 | `წინ წამოწევა` | verb | `inSameFileDuplicate` | Duplicate term 'წინ წამოწევა' (verb) appears 2 times in file |
| C2 | `ათვისება` | verb | `inSameFileDuplicate` | Duplicate term 'ათვისება' (verb) appears 2 times in file |
| C2 | `დესტაბილიზაცია` | verb | `inSameFileDuplicate` | Duplicate term 'დესტაბილიზაცია' (verb) appears 2 times in file |
| C2 | `კომოდიფიკაცია` | verb | `inSameFileDuplicate` | Duplicate term 'კომოდიფიკაცია' (verb) appears 2 times in file |
| C2 | `ინსტრუმენტალიზება` | verb | `inSameFileDuplicate` | Duplicate term 'ინსტრუმენტალიზება' (verb) appears 2 times in file |
| C2 | `ვალორიზაცია` | verb | `inSameFileDuplicate` | Duplicate term 'ვალორიზაცია' (verb) appears 2 times in file |
| C2 | `ფეტიშიზება` | verb | `inSameFileDuplicate` | Duplicate term 'ფეტიშიზება' (verb) appears 2 times in file |
| C2 | `გაუცხოება` | verb | `inSameFileDuplicate` | Duplicate term 'გაუცხოება' (verb) appears 2 times in file |
| C2 | `დემარკაცია` | verb | `inSameFileDuplicate` | Duplicate term 'დემარკაცია' (verb) appears 2 times in file |
| C2 | `შემოსაზღვრა` | verb | `inSameFileDuplicate` | Duplicate term 'შემოსაზღვრა' (verb) appears 2 times in file |
| C2 | `წინააღმდეგ მოქმედება` | verb | `inSameFileDuplicate` | Duplicate term 'წინააღმდეგ მოქმედება' (verb) appears 2 times in file |
| C2 | `გაუფასურება` | verb | `inSameFileDuplicate` | Duplicate term 'გაუფასურება' (verb) appears 2 times in file |
| C2 | `უარყოფა` | verb | `inSameFileDuplicate` | Duplicate term 'უარყოფა' (verb) appears 4 times in file |
| C2 | `დარღვევა` | verb | `inSameFileDuplicate` | Duplicate term 'დარღვევა' (verb) appears 2 times in file |
| C2 | `სუბსუმირება` | verb | `inSameFileDuplicate` | Duplicate term 'სუბსუმირება' (verb) appears 2 times in file |
| C2 | `დეკონსტრუქცია` | verb | `inSameFileDuplicate` | Duplicate term 'დეკონსტრუქცია' (verb) appears 2 times in file |
| C2 | `გამორიცხვა` | verb | `inSameFileDuplicate` | Duplicate term 'გამორიცხვა' (verb) appears 4 times in file |
| C2 | `დიალექტიზება` | verb | `inSameFileDuplicate` | Duplicate term 'დიალექტიზება' (verb) appears 2 times in file |
| C2 | `ჰეგემონიზება` | verb | `inSameFileDuplicate` | Duplicate term 'ჰეგემონიზება' (verb) appears 2 times in file |
| C2 | `ხაზგასმა` | verb | `inSameFileDuplicate` | Duplicate term 'ხაზგასმა' (verb) appears 2 times in file |
| C2 | `შემსუბუქება` | verb | `inSameFileDuplicate` | Duplicate term 'შემსუბუქება' (verb) appears 2 times in file |
| C2 | `გვერდის ავლით` | verb | `inSameFileDuplicate` | Duplicate term 'გვერდის ავლით' (verb) appears 2 times in file |
| C2 | `დადასტურება` | verb | `inSameFileDuplicate` | Duplicate term 'დადასტურება' (verb) appears 2 times in file |
| C2 | `გავრცელება` | verb | `inSameFileDuplicate` | Duplicate term 'გავრცელება' (verb) appears 2 times in file |
| C2 | `ასახვა` | verb | `inSameFileDuplicate` | Duplicate term 'ასახვა' (verb) appears 2 times in file |
| C2 | `გამოწვევა` | verb | `inSameFileDuplicate` | Duplicate term 'გამოწვევა' (verb) appears 2 times in file |
| C2 | `გამწვავება` | verb | `inSameFileDuplicate` | Duplicate term 'გამწვავება' (verb) appears 2 times in file |
| C2 | `განსახიერება` | verb | `inSameFileDuplicate` | Duplicate term 'განსახიერება' (verb) appears 2 times in file |
| C2 | `შეფერხება` | verb | `inSameFileDuplicate` | Duplicate term 'შეფერხება' (verb) appears 2 times in file |
| C2 | `შერბილება` | verb | `inSameFileDuplicate` | Duplicate term 'შერბილება' (verb) appears 2 times in file |
| C2 | `ვალდებულება` | verb | `inSameFileDuplicate` | Duplicate term 'ვალდებულება' (verb) appears 2 times in file |
| C2 | `გამსჭვალვა` | verb | `inSameFileDuplicate` | Duplicate term 'გამსჭვალვა' (verb) appears 2 times in file |
| C2 | `გამორიცხვა` | verb | `inSameFileDuplicate` | Duplicate term 'გამორიცხვა' (verb) appears 4 times in file |
| C2 | `შერიგება` | verb | `inSameFileDuplicate` | Duplicate term 'შერიგება' (verb) appears 2 times in file |
| C2 | `ჩანაცვლება` | verb | `inSameFileDuplicate` | Duplicate term 'ჩანაცვლება' (verb) appears 2 times in file |
| C2 | `საფუძვლის ჩაყრა` | verb | `inSameFileDuplicate` | Duplicate term 'საფუძვლის ჩაყრა' (verb) appears 2 times in file |
| C2 | `გამართლება` | verb | `inSameFileDuplicate` | Duplicate term 'გამართლება' (verb) appears 2 times in file |
| C2 | `დამოკიდებულება` | verb | `inSameFileDuplicate` | Duplicate term 'დამოკიდებულება' (verb) appears 2 times in file |
| C2 | `ჭიდილი` | verb | `inSameFileDuplicate` | Duplicate term 'ჭიდილი' (verb) appears 2 times in file |
| C2 | `ზედაპირულად განხილვა` | verb | `inSameFileDuplicate` | Duplicate term 'ზედაპირულად განხილვა' (verb) appears 2 times in file |
| C2 | `მიჩუმათება` | verb | `inSameFileDuplicate` | Duplicate term 'მიჩუმათება' (verb) appears 2 times in file |
| C2 | `პარადაგმის შეცვლა` | verb | `inSameFileDuplicate` | Duplicate term 'პარადაგმის შეცვლა' (verb) appears 2 times in file |

### PT (Portuguese) — 305 Flagged Entries out of 515 Category (a) Entries

#### File: `vocabulary/pt/B1/locations.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Cairo` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Deli` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/pt/C1/fluency.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `O que você protegeria mesmo que isso lhe custasse algo` | phrase | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): h[3] |

#### File: `vocabulary/pt/C2/adjectives.js` (192 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `abstruso` | adjective | `inSameFileDuplicate` | Duplicate term 'abstruso' (adjective) appears 4 times in file |
| C2 | `anacrónico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacrónico' (adjective) appears 4 times in file |
| C2 | `antitético` | adjective | `inSameFileDuplicate` | Duplicate term 'antitético' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atípico` | adjective | `inSameFileDuplicate` | Duplicate term 'atípico' (adjective) appears 4 times in file |
| C2 | `binário` | adjective | `inSameFileDuplicate` | Duplicate term 'binário' (adjective) appears 4 times in file |
| C2 | `categórico` | adjective | `inSameFileDuplicate` | Duplicate term 'categórico' (adjective) appears 4 times in file |
| C2 | `circunspecto` | adjective | `inSameFileDuplicate` | Duplicate term 'circunspecto' (adjective) appears 4 times in file |
| C2 | `encoberto` | adjective | `inSameFileDuplicate` | Duplicate term 'encoberto' (adjective) appears 4 times in file |
| C2 | `dialético` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialético' (adjective) appears 4 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `difuso` | adjective | `inSameFileDuplicate` | Duplicate term 'difuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esotérico` | adjective | `inSameFileDuplicate` | Duplicate term 'esotérico' (adjective) appears 4 times in file |
| C2 | `falaz` | adjective | `inSameFileDuplicate` | Duplicate term 'falaz' (adjective) appears 4 times in file |
| C2 | `imutável` | adjective | `inSameFileDuplicate` | Duplicate term 'imutável' (adjective) appears 4 times in file |
| C2 | `imparcial` | adjective | `inSameFileDuplicate` | Duplicate term 'imparcial' (adjective) appears 4 times in file |
| C2 | `incidental` | adjective | `inSameFileDuplicate` | Duplicate term 'incidental' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitável` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitável' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliável` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliável' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `múltiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'múltiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `nuanceado` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanceado' (adjective) appears 4 times in file |
| C2 | `oblíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'oblíquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensível` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensível' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizador` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizador' (adjective) appears 4 times in file |
| C2 | `precário` | adjective | `inSameFileDuplicate` | Duplicate term 'precário' (adjective) appears 4 times in file |
| C2 | `prescritivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescritivo' (adjective) appears 4 times in file |
| C2 | `prolongado` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongado' (adjective) appears 4 times in file |
| C2 | `redutor` | adjective | `inSameFileDuplicate` | Duplicate term 'redutor' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `especioso` | adjective | `inSameFileDuplicate` | Duplicate term 'especioso' (adjective) appears 4 times in file |
| C2 | `espúrio` | adjective | `inSameFileDuplicate` | Duplicate term 'espúrio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tácito` | adjective | `inSameFileDuplicate` | Duplicate term 'tácito' (adjective) appears 4 times in file |
| C2 | `ténue` | adjective | `inSameFileDuplicate` | Duplicate term 'ténue' (adjective) appears 4 times in file |
| C2 | `transitório` | adjective | `inSameFileDuplicate` | Duplicate term 'transitório' (adjective) appears 4 times in file |
| C2 | `ubíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubíquo' (adjective) appears 4 times in file |
| C2 | `inequívoco` | adjective | `inSameFileDuplicate` | Duplicate term 'inequívoco' (adjective) appears 4 times in file |
| C2 | `sem precedentes` | adjective | `inSameFileDuplicate` | Duplicate term 'sem precedentes' (adjective) appears 4 times in file |
| C2 | `insustentável` | adjective | `inSameFileDuplicate` | Duplicate term 'insustentável' (adjective) appears 4 times in file |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `abstruso` | adjective | `inSameFileDuplicate` | Duplicate term 'abstruso' (adjective) appears 4 times in file |
| C2 | `anacrónico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacrónico' (adjective) appears 4 times in file |
| C2 | `antitético` | adjective | `inSameFileDuplicate` | Duplicate term 'antitético' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atípico` | adjective | `inSameFileDuplicate` | Duplicate term 'atípico' (adjective) appears 4 times in file |
| C2 | `binário` | adjective | `inSameFileDuplicate` | Duplicate term 'binário' (adjective) appears 4 times in file |
| C2 | `categórico` | adjective | `inSameFileDuplicate` | Duplicate term 'categórico' (adjective) appears 4 times in file |
| C2 | `circunspecto` | adjective | `inSameFileDuplicate` | Duplicate term 'circunspecto' (adjective) appears 4 times in file |
| C2 | `encoberto` | adjective | `inSameFileDuplicate` | Duplicate term 'encoberto' (adjective) appears 4 times in file |
| C2 | `dialético` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialético' (adjective) appears 4 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `difuso` | adjective | `inSameFileDuplicate` | Duplicate term 'difuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esotérico` | adjective | `inSameFileDuplicate` | Duplicate term 'esotérico' (adjective) appears 4 times in file |
| C2 | `falaz` | adjective | `inSameFileDuplicate` | Duplicate term 'falaz' (adjective) appears 4 times in file |
| C2 | `imutável` | adjective | `inSameFileDuplicate` | Duplicate term 'imutável' (adjective) appears 4 times in file |
| C2 | `imparcial` | adjective | `inSameFileDuplicate` | Duplicate term 'imparcial' (adjective) appears 4 times in file |
| C2 | `incidental` | adjective | `inSameFileDuplicate` | Duplicate term 'incidental' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitável` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitável' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliável` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliável' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `múltiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'múltiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `nuanceado` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanceado' (adjective) appears 4 times in file |
| C2 | `oblíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'oblíquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensível` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensível' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizador` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizador' (adjective) appears 4 times in file |
| C2 | `precário` | adjective | `inSameFileDuplicate` | Duplicate term 'precário' (adjective) appears 4 times in file |
| C2 | `prescritivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescritivo' (adjective) appears 4 times in file |
| C2 | `prolongado` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongado' (adjective) appears 4 times in file |
| C2 | `redutor` | adjective | `inSameFileDuplicate` | Duplicate term 'redutor' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `especioso` | adjective | `inSameFileDuplicate` | Duplicate term 'especioso' (adjective) appears 4 times in file |
| C2 | `espúrio` | adjective | `inSameFileDuplicate` | Duplicate term 'espúrio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tácito` | adjective | `inSameFileDuplicate` | Duplicate term 'tácito' (adjective) appears 4 times in file |
| C2 | `ténue` | adjective | `inSameFileDuplicate` | Duplicate term 'ténue' (adjective) appears 4 times in file |
| C2 | `transitório` | adjective | `inSameFileDuplicate` | Duplicate term 'transitório' (adjective) appears 4 times in file |
| C2 | `ubíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubíquo' (adjective) appears 4 times in file |
| C2 | `inequívoco` | adjective | `inSameFileDuplicate` | Duplicate term 'inequívoco' (adjective) appears 4 times in file |
| C2 | `sem precedentes` | adjective | `inSameFileDuplicate` | Duplicate term 'sem precedentes' (adjective) appears 4 times in file |
| C2 | `insustentável` | adjective | `inSameFileDuplicate` | Duplicate term 'insustentável' (adjective) appears 4 times in file |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `abstruso` | adjective | `inSameFileDuplicate` | Duplicate term 'abstruso' (adjective) appears 4 times in file |
| C2 | `anacrónico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacrónico' (adjective) appears 4 times in file |
| C2 | `antitético` | adjective | `inSameFileDuplicate` | Duplicate term 'antitético' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atípico` | adjective | `inSameFileDuplicate` | Duplicate term 'atípico' (adjective) appears 4 times in file |
| C2 | `binário` | adjective | `inSameFileDuplicate` | Duplicate term 'binário' (adjective) appears 4 times in file |
| C2 | `categórico` | adjective | `inSameFileDuplicate` | Duplicate term 'categórico' (adjective) appears 4 times in file |
| C2 | `circunspecto` | adjective | `inSameFileDuplicate` | Duplicate term 'circunspecto' (adjective) appears 4 times in file |
| C2 | `encoberto` | adjective | `inSameFileDuplicate` | Duplicate term 'encoberto' (adjective) appears 4 times in file |
| C2 | `dialético` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialético' (adjective) appears 4 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `difuso` | adjective | `inSameFileDuplicate` | Duplicate term 'difuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esotérico` | adjective | `inSameFileDuplicate` | Duplicate term 'esotérico' (adjective) appears 4 times in file |
| C2 | `falaz` | adjective | `inSameFileDuplicate` | Duplicate term 'falaz' (adjective) appears 4 times in file |
| C2 | `imutável` | adjective | `inSameFileDuplicate` | Duplicate term 'imutável' (adjective) appears 4 times in file |
| C2 | `imparcial` | adjective | `inSameFileDuplicate` | Duplicate term 'imparcial' (adjective) appears 4 times in file |
| C2 | `incidental` | adjective | `inSameFileDuplicate` | Duplicate term 'incidental' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitável` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitável' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliável` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliável' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `múltiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'múltiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `nuanceado` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanceado' (adjective) appears 4 times in file |
| C2 | `oblíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'oblíquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensível` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensível' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizador` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizador' (adjective) appears 4 times in file |
| C2 | `precário` | adjective | `inSameFileDuplicate` | Duplicate term 'precário' (adjective) appears 4 times in file |
| C2 | `prescritivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescritivo' (adjective) appears 4 times in file |
| C2 | `prolongado` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongado' (adjective) appears 4 times in file |
| C2 | `redutor` | adjective | `inSameFileDuplicate` | Duplicate term 'redutor' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `especioso` | adjective | `inSameFileDuplicate` | Duplicate term 'especioso' (adjective) appears 4 times in file |
| C2 | `espúrio` | adjective | `inSameFileDuplicate` | Duplicate term 'espúrio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tácito` | adjective | `inSameFileDuplicate` | Duplicate term 'tácito' (adjective) appears 4 times in file |
| C2 | `ténue` | adjective | `inSameFileDuplicate` | Duplicate term 'ténue' (adjective) appears 4 times in file |
| C2 | `transitório` | adjective | `inSameFileDuplicate` | Duplicate term 'transitório' (adjective) appears 4 times in file |
| C2 | `ubíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubíquo' (adjective) appears 4 times in file |
| C2 | `inequívoco` | adjective | `inSameFileDuplicate` | Duplicate term 'inequívoco' (adjective) appears 4 times in file |
| C2 | `sem precedentes` | adjective | `inSameFileDuplicate` | Duplicate term 'sem precedentes' (adjective) appears 4 times in file |
| C2 | `insustentável` | adjective | `inSameFileDuplicate` | Duplicate term 'insustentável' (adjective) appears 4 times in file |
| C2 | `abrupto` | adjective | `inSameFileDuplicate` | Duplicate term 'abrupto' (adjective) appears 4 times in file |
| C2 | `abstruso` | adjective | `inSameFileDuplicate` | Duplicate term 'abstruso' (adjective) appears 4 times in file |
| C2 | `anacrónico` | adjective | `inSameFileDuplicate` | Duplicate term 'anacrónico' (adjective) appears 4 times in file |
| C2 | `antitético` | adjective | `inSameFileDuplicate` | Duplicate term 'antitético' (adjective) appears 4 times in file |
| C2 | `arcano` | adjective | `inSameFileDuplicate` | Duplicate term 'arcano' (adjective) appears 4 times in file |
| C2 | `atípico` | adjective | `inSameFileDuplicate` | Duplicate term 'atípico' (adjective) appears 4 times in file |
| C2 | `binário` | adjective | `inSameFileDuplicate` | Duplicate term 'binário' (adjective) appears 4 times in file |
| C2 | `categórico` | adjective | `inSameFileDuplicate` | Duplicate term 'categórico' (adjective) appears 4 times in file |
| C2 | `circunspecto` | adjective | `inSameFileDuplicate` | Duplicate term 'circunspecto' (adjective) appears 4 times in file |
| C2 | `encoberto` | adjective | `inSameFileDuplicate` | Duplicate term 'encoberto' (adjective) appears 4 times in file |
| C2 | `dialético` | adjective | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialético' (adjective) appears 4 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `difuso` | adjective | `inSameFileDuplicate` | Duplicate term 'difuso' (adjective) appears 4 times in file |
| C2 | `elusivo` | adjective | `inSameFileDuplicate` | Duplicate term 'elusivo' (adjective) appears 4 times in file |
| C2 | `esotérico` | adjective | `inSameFileDuplicate` | Duplicate term 'esotérico' (adjective) appears 4 times in file |
| C2 | `falaz` | adjective | `inSameFileDuplicate` | Duplicate term 'falaz' (adjective) appears 4 times in file |
| C2 | `imutável` | adjective | `inSameFileDuplicate` | Duplicate term 'imutável' (adjective) appears 4 times in file |
| C2 | `imparcial` | adjective | `inSameFileDuplicate` | Duplicate term 'imparcial' (adjective) appears 4 times in file |
| C2 | `incidental` | adjective | `inSameFileDuplicate` | Duplicate term 'incidental' (adjective) appears 4 times in file |
| C2 | `inerente` | adjective | `inSameFileDuplicate` | Duplicate term 'inerente' (adjective) appears 4 times in file |
| C2 | `inimitável` | adjective | `inSameFileDuplicate` | Duplicate term 'inimitável' (adjective) appears 4 times in file |
| C2 | `insidioso` | adjective | `inSameFileDuplicate` | Duplicate term 'insidioso' (adjective) appears 4 times in file |
| C2 | `irreconciliável` | adjective | `inSameFileDuplicate` | Duplicate term 'irreconciliável' (adjective) appears 4 times in file |
| C2 | `liminal` | adjective | `inSameFileDuplicate` | Duplicate term 'liminal' (adjective) appears 4 times in file |
| C2 | `múltiplo` | adjective | `inSameFileDuplicate` | Duplicate term 'múltiplo' (adjective) appears 4 times in file |
| C2 | `nebuloso` | adjective | `inSameFileDuplicate` | Duplicate term 'nebuloso' (adjective) appears 4 times in file |
| C2 | `normativo` | adjective | `inSameFileDuplicate` | Duplicate term 'normativo' (adjective) appears 4 times in file |
| C2 | `nuanceado` | adjective | `inSameFileDuplicate` | Duplicate term 'nuanceado' (adjective) appears 4 times in file |
| C2 | `oblíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'oblíquo' (adjective) appears 4 times in file |
| C2 | `opaco` | adjective | `inSameFileDuplicate` | Duplicate term 'opaco' (adjective) appears 4 times in file |
| C2 | `ostensível` | adjective | `inSameFileDuplicate` | Duplicate term 'ostensível' (adjective) appears 4 times in file |
| C2 | `paradoxal` | adjective | `inSameFileDuplicate` | Duplicate term 'paradoxal' (adjective) appears 4 times in file |
| C2 | `pervasivo` | adjective | `inSameFileDuplicate` | Duplicate term 'pervasivo' (adjective) appears 4 times in file |
| C2 | `polarizador` | adjective | `inSameFileDuplicate` | Duplicate term 'polarizador' (adjective) appears 4 times in file |
| C2 | `precário` | adjective | `inSameFileDuplicate` | Duplicate term 'precário' (adjective) appears 4 times in file |
| C2 | `prescritivo` | adjective | `inSameFileDuplicate` | Duplicate term 'prescritivo' (adjective) appears 4 times in file |
| C2 | `prolongado` | adjective | `inSameFileDuplicate` | Duplicate term 'prolongado' (adjective) appears 4 times in file |
| C2 | `redutor` | adjective | `inSameFileDuplicate` | Duplicate term 'redutor' (adjective) appears 4 times in file |
| C2 | `seminal` | adjective | `inSameFileDuplicate` | Duplicate term 'seminal' (adjective) appears 4 times in file |
| C2 | `especioso` | adjective | `inSameFileDuplicate` | Duplicate term 'especioso' (adjective) appears 4 times in file |
| C2 | `espúrio` | adjective | `inSameFileDuplicate` | Duplicate term 'espúrio' (adjective) appears 4 times in file |
| C2 | `subversivo` | adjective | `inSameFileDuplicate` | Duplicate term 'subversivo' (adjective) appears 4 times in file |
| C2 | `tácito` | adjective | `inSameFileDuplicate` | Duplicate term 'tácito' (adjective) appears 4 times in file |
| C2 | `ténue` | adjective | `inSameFileDuplicate` | Duplicate term 'ténue' (adjective) appears 4 times in file |
| C2 | `transitório` | adjective | `inSameFileDuplicate` | Duplicate term 'transitório' (adjective) appears 4 times in file |
| C2 | `ubíquo` | adjective | `inSameFileDuplicate` | Duplicate term 'ubíquo' (adjective) appears 4 times in file |
| C2 | `inequívoco` | adjective | `inSameFileDuplicate` | Duplicate term 'inequívoco' (adjective) appears 4 times in file |
| C2 | `sem precedentes` | adjective | `inSameFileDuplicate` | Duplicate term 'sem precedentes' (adjective) appears 4 times in file |
| C2 | `insustentável` | adjective | `inSameFileDuplicate` | Duplicate term 'insustentável' (adjective) appears 4 times in file |

#### File: `vocabulary/pt/C2/verbs.js` (108 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `reificar` | verb | `inSameFileDuplicate` | Duplicate term 'reificar' (verb) appears 2 times in file |
| C2 | `sublimar` | verb | `inSameFileDuplicate` | Duplicate term 'sublimar' (verb) appears 2 times in file |
| C2 | `predicar` | verb | `inSameFileDuplicate` | Duplicate term 'predicar' (verb) appears 2 times in file |
| C2 | `instanciar` | verb | `inSameFileDuplicate` | Duplicate term 'instanciar' (verb) appears 2 times in file |
| C2 | `negar` | verb | `inSameFileDuplicate` | Duplicate term 'negar' (verb) appears 2 times in file |
| C2 | `transcender` | verb | `inSameFileDuplicate` | Duplicate term 'transcender' (verb) appears 2 times in file |
| C2 | `mediar` | verb | `inSameFileDuplicate` | Duplicate term 'mediar' (verb) appears 2 times in file |
| C2 | `elidir` | verb | `inSameFileDuplicate` | Duplicate term 'elidir' (verb) appears 2 times in file |
| C2 | `ofuscar` | verb | `inSameFileDuplicate` | Duplicate term 'ofuscar' (verb) appears 2 times in file |
| C2 | `conflacionar` | verb | `inSameFileDuplicate` | Duplicate term 'conflacionar' (verb) appears 2 times in file |
| C2 | `invocar` | verb | `inSameFileDuplicate` | Duplicate term 'invocar' (verb) appears 2 times in file |
| C2 | `destacar` | verb | `inSameFileDuplicate` | Duplicate term 'destacar' (verb) appears 2 times in file |
| C2 | `desestabilizar` | verb | `inSameFileDuplicate` | Duplicate term 'desestabilizar' (verb) appears 2 times in file |
| C2 | `mercantilizar` | verb | `inSameFileDuplicate` | Duplicate term 'mercantilizar' (verb) appears 2 times in file |
| C2 | `instrumentalizar` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentalizar' (verb) appears 2 times in file |
| C2 | `valorizar` | verb | `inSameFileDuplicate` | Duplicate term 'valorizar' (verb) appears 2 times in file |
| C2 | `fetichizar` | verb | `inSameFileDuplicate` | Duplicate term 'fetichizar' (verb) appears 2 times in file |
| C2 | `alienar` | verb | `inSameFileDuplicate` | Duplicate term 'alienar' (verb) appears 2 times in file |
| C2 | `demarcar` | verb | `inSameFileDuplicate` | Duplicate term 'demarcar' (verb) appears 2 times in file |
| C2 | `delimitar` | verb | `inSameFileDuplicate` | Duplicate term 'delimitar' (verb) appears 2 times in file |
| C2 | `militar` | verb | `inSameFileDuplicate` | Duplicate term 'militar' (verb) appears 2 times in file |
| C2 | `viciar` | verb | `inSameFileDuplicate` | Duplicate term 'viciar' (verb) appears 2 times in file |
| C2 | `contradizer` | verb | `inSameFileDuplicate` | Duplicate term 'contradizer' (verb) appears 2 times in file |
| C2 | `ab-rogar` | verb | `inSameFileDuplicate` | Duplicate term 'ab-rogar' (verb) appears 2 times in file |
| C2 | `contrair` | verb | `inSameFileDuplicate` | Duplicate term 'contrair' (verb) appears 2 times in file |
| C2 | `subsumir` | verb | `inSameFileDuplicate` | Duplicate term 'subsumir' (verb) appears 2 times in file |
| C2 | `desconstruir` | verb | `inSameFileDuplicate` | Duplicate term 'desconstruir' (verb) appears 2 times in file |
| C2 | `precluir` | verb | `inSameFileDuplicate` | Duplicate term 'precluir' (verb) appears 2 times in file |
| C2 | `dialetizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialetizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): subtext |
| C2 | `hegemonizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'hegemonizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `acentuar` | verb | `inSameFileDuplicate` | Duplicate term 'acentuar' (verb) appears 2 times in file |
| C2 | `aquiescer` | verb | `inSameFileDuplicate` | Duplicate term 'aquiescer' (verb) appears 2 times in file |
| C2 | `aliviar` | verb | `inSameFileDuplicate` | Duplicate term 'aliviar' (verb) appears 2 times in file |
| C2 | `contornar` | verb | `inSameFileDuplicate` | Duplicate term 'contornar' (verb) appears 2 times in file |
| C2 | `corroborar` | verb | `inSameFileDuplicate` | Duplicate term 'corroborar' (verb) appears 2 times in file |
| C2 | `disseminar` | verb | `inSameFileDuplicate` | Duplicate term 'disseminar' (verb) appears 2 times in file |
| C2 | `encapsular` | verb | `inSameFileDuplicate` | Duplicate term 'encapsular' (verb) appears 2 times in file |
| C2 | `engendrar` | verb | `inSameFileDuplicate` | Duplicate term 'engendrar' (verb) appears 2 times in file |
| C2 | `exacerbar` | verb | `inSameFileDuplicate` | Duplicate term 'exacerbar' (verb) appears 2 times in file |
| C2 | `exemplificar` | verb | `inSameFileDuplicate` | Duplicate term 'exemplificar' (verb) appears 2 times in file |
| C2 | `impedir` | verb | `inSameFileDuplicate` | Duplicate term 'impedir' (verb) appears 2 times in file |
| C2 | `mitigar` | verb | `inSameFileDuplicate` | Duplicate term 'mitigar' (verb) appears 2 times in file |
| C2 | `obrigar` | verb | `inSameFileDuplicate` | Duplicate term 'obrigar' (verb) appears 2 times in file |
| C2 | `pervadir` | verb | `inSameFileDuplicate` | Duplicate term 'pervadir' (verb) appears 2 times in file |
| C2 | `excluir` | verb | `inSameFileDuplicate` | Duplicate term 'excluir' (verb) appears 2 times in file |
| C2 | `reconciliar` | verb | `inSameFileDuplicate` | Duplicate term 'reconciliar' (verb) appears 2 times in file |
| C2 | `substituir` | verb | `inSameFileDuplicate` | Duplicate term 'substituir' (verb) appears 2 times in file |
| C2 | `alicerçar` | verb | `inSameFileDuplicate` | Duplicate term 'alicerçar' (verb) appears 2 times in file |
| C2 | `vincular` | verb | `inSameFileDuplicate` | Duplicate term 'vincular' (verb) appears 2 times in file |
| C2 | `depender de` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'depender de' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `lidar com` | verb | `inSameFileDuplicate` | Duplicate term 'lidar com' (verb) appears 2 times in file |
| C2 | `ignorar` | verb | `inSameFileDuplicate` | Duplicate term 'ignorar' (verb) appears 2 times in file |
| C2 | `disfarçar` | verb | `inSameFileDuplicate` | Duplicate term 'disfarçar' (verb) appears 2 times in file |
| C2 | `mudança de paradigma` | verb | `inSameFileDuplicate` | Duplicate term 'mudança de paradigma' (verb) appears 2 times in file |
| C2 | `reificar` | verb | `inSameFileDuplicate` | Duplicate term 'reificar' (verb) appears 2 times in file |
| C2 | `sublimar` | verb | `inSameFileDuplicate` | Duplicate term 'sublimar' (verb) appears 2 times in file |
| C2 | `predicar` | verb | `inSameFileDuplicate` | Duplicate term 'predicar' (verb) appears 2 times in file |
| C2 | `instanciar` | verb | `inSameFileDuplicate` | Duplicate term 'instanciar' (verb) appears 2 times in file |
| C2 | `negar` | verb | `inSameFileDuplicate` | Duplicate term 'negar' (verb) appears 2 times in file |
| C2 | `transcender` | verb | `inSameFileDuplicate` | Duplicate term 'transcender' (verb) appears 2 times in file |
| C2 | `mediar` | verb | `inSameFileDuplicate` | Duplicate term 'mediar' (verb) appears 2 times in file |
| C2 | `elidir` | verb | `inSameFileDuplicate` | Duplicate term 'elidir' (verb) appears 2 times in file |
| C2 | `ofuscar` | verb | `inSameFileDuplicate` | Duplicate term 'ofuscar' (verb) appears 2 times in file |
| C2 | `conflacionar` | verb | `inSameFileDuplicate` | Duplicate term 'conflacionar' (verb) appears 2 times in file |
| C2 | `invocar` | verb | `inSameFileDuplicate` | Duplicate term 'invocar' (verb) appears 2 times in file |
| C2 | `destacar` | verb | `inSameFileDuplicate` | Duplicate term 'destacar' (verb) appears 2 times in file |
| C2 | `desestabilizar` | verb | `inSameFileDuplicate` | Duplicate term 'desestabilizar' (verb) appears 2 times in file |
| C2 | `mercantilizar` | verb | `inSameFileDuplicate` | Duplicate term 'mercantilizar' (verb) appears 2 times in file |
| C2 | `instrumentalizar` | verb | `inSameFileDuplicate` | Duplicate term 'instrumentalizar' (verb) appears 2 times in file |
| C2 | `valorizar` | verb | `inSameFileDuplicate` | Duplicate term 'valorizar' (verb) appears 2 times in file |
| C2 | `fetichizar` | verb | `inSameFileDuplicate` | Duplicate term 'fetichizar' (verb) appears 2 times in file |
| C2 | `alienar` | verb | `inSameFileDuplicate` | Duplicate term 'alienar' (verb) appears 2 times in file |
| C2 | `demarcar` | verb | `inSameFileDuplicate` | Duplicate term 'demarcar' (verb) appears 2 times in file |
| C2 | `delimitar` | verb | `inSameFileDuplicate` | Duplicate term 'delimitar' (verb) appears 2 times in file |
| C2 | `militar` | verb | `inSameFileDuplicate` | Duplicate term 'militar' (verb) appears 2 times in file |
| C2 | `viciar` | verb | `inSameFileDuplicate` | Duplicate term 'viciar' (verb) appears 2 times in file |
| C2 | `contradizer` | verb | `inSameFileDuplicate` | Duplicate term 'contradizer' (verb) appears 2 times in file |
| C2 | `ab-rogar` | verb | `inSameFileDuplicate` | Duplicate term 'ab-rogar' (verb) appears 2 times in file |
| C2 | `contrair` | verb | `inSameFileDuplicate` | Duplicate term 'contrair' (verb) appears 2 times in file |
| C2 | `subsumir` | verb | `inSameFileDuplicate` | Duplicate term 'subsumir' (verb) appears 2 times in file |
| C2 | `desconstruir` | verb | `inSameFileDuplicate` | Duplicate term 'desconstruir' (verb) appears 2 times in file |
| C2 | `precluir` | verb | `inSameFileDuplicate` | Duplicate term 'precluir' (verb) appears 2 times in file |
| C2 | `dialetizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'dialetizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): subtext |
| C2 | `hegemonizar` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'hegemonizar' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `acentuar` | verb | `inSameFileDuplicate` | Duplicate term 'acentuar' (verb) appears 2 times in file |
| C2 | `aquiescer` | verb | `inSameFileDuplicate` | Duplicate term 'aquiescer' (verb) appears 2 times in file |
| C2 | `aliviar` | verb | `inSameFileDuplicate` | Duplicate term 'aliviar' (verb) appears 2 times in file |
| C2 | `contornar` | verb | `inSameFileDuplicate` | Duplicate term 'contornar' (verb) appears 2 times in file |
| C2 | `corroborar` | verb | `inSameFileDuplicate` | Duplicate term 'corroborar' (verb) appears 2 times in file |
| C2 | `disseminar` | verb | `inSameFileDuplicate` | Duplicate term 'disseminar' (verb) appears 2 times in file |
| C2 | `encapsular` | verb | `inSameFileDuplicate` | Duplicate term 'encapsular' (verb) appears 2 times in file |
| C2 | `engendrar` | verb | `inSameFileDuplicate` | Duplicate term 'engendrar' (verb) appears 2 times in file |
| C2 | `exacerbar` | verb | `inSameFileDuplicate` | Duplicate term 'exacerbar' (verb) appears 2 times in file |
| C2 | `exemplificar` | verb | `inSameFileDuplicate` | Duplicate term 'exemplificar' (verb) appears 2 times in file |
| C2 | `impedir` | verb | `inSameFileDuplicate` | Duplicate term 'impedir' (verb) appears 2 times in file |
| C2 | `mitigar` | verb | `inSameFileDuplicate` | Duplicate term 'mitigar' (verb) appears 2 times in file |
| C2 | `obrigar` | verb | `inSameFileDuplicate` | Duplicate term 'obrigar' (verb) appears 2 times in file |
| C2 | `pervadir` | verb | `inSameFileDuplicate` | Duplicate term 'pervadir' (verb) appears 2 times in file |
| C2 | `excluir` | verb | `inSameFileDuplicate` | Duplicate term 'excluir' (verb) appears 2 times in file |
| C2 | `reconciliar` | verb | `inSameFileDuplicate` | Duplicate term 'reconciliar' (verb) appears 2 times in file |
| C2 | `substituir` | verb | `inSameFileDuplicate` | Duplicate term 'substituir' (verb) appears 2 times in file |
| C2 | `alicerçar` | verb | `inSameFileDuplicate` | Duplicate term 'alicerçar' (verb) appears 2 times in file |
| C2 | `vincular` | verb | `inSameFileDuplicate` | Duplicate term 'vincular' (verb) appears 2 times in file |
| C2 | `depender de` | verb | `inSameFileDuplicate`, `placeholderArtifact` | Duplicate term 'depender de' (verb) appears 2 times in file; Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `lidar com` | verb | `inSameFileDuplicate` | Duplicate term 'lidar com' (verb) appears 2 times in file |
| C2 | `ignorar` | verb | `inSameFileDuplicate` | Duplicate term 'ignorar' (verb) appears 2 times in file |
| C2 | `disfarçar` | verb | `inSameFileDuplicate` | Duplicate term 'disfarçar' (verb) appears 2 times in file |
| C2 | `mudança de paradigma` | verb | `inSameFileDuplicate` | Duplicate term 'mudança de paradigma' (verb) appears 2 times in file |

#### File: `vocabulary/pt/C2/vocabulary.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `ontologia` | noun | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].examples[0] |
| C2 | `dialética` | noun | `placeholderArtifact` | Contains template/placeholder artifact (e.g. 'undefined', 'TODO', '{{') in field(s): definitions[0].text |

### RU (Russian) — 399 Flagged Entries out of 1817 Category (a) Entries

#### File: `vocabulary/ru/B1/adjectives.js` (4 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `самозанятый` | adjective | `inSameFileDuplicate` | Duplicate term 'самозанятый' (adjective) appears 2 times in file |
| B1 | `устойчивый` | adjective | `inSameFileDuplicate` | Duplicate term 'устойчивый' (adjective) appears 2 times in file |
| B1 | `самозанятый` | adjective | `inSameFileDuplicate` | Duplicate term 'самозанятый' (adjective) appears 2 times in file |
| B1 | `устойчивый` | adjective | `inSameFileDuplicate` | Duplicate term 'устойчивый' (adjective) appears 2 times in file |

#### File: `vocabulary/ru/B1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Как социальные сети изменили ваше ежедневное общение с друзьями?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Какие факторы наиболее важны для вас при выборе профессии?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Как жизнь в крупном городе влияет на психологическое благополучие человека?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Как семейные традиции меняются при смене поколений?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Какую роль личные экологические привычки играют в охране окружающей среды?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Как увлечения помогают поддерживать здоровый баланс между работой и личной жизнью?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Каковы основные преимущества и недостатки регулярной удаленной работы?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Как путешествия в незнакомые страны меняют мировоззрение человека?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Следует ли уделять практическим навыкам в школе такое же внимание, как и академическим предметам?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Как реклама влияет на наши повседневные покупательские решения?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/ru/B1/verbs.js` (4 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `заниматься садоводством` | verb | `inSameFileDuplicate` | Duplicate term 'заниматься садоводством' (verb) appears 2 times in file |
| B1 | `работать волонтёром` | verb | `inSameFileDuplicate` | Duplicate term 'работать волонтёром' (verb) appears 2 times in file |
| B1 | `заниматься садоводством` | verb | `inSameFileDuplicate` | Duplicate term 'заниматься садоводством' (verb) appears 2 times in file |
| B1 | `работать волонтёром` | verb | `inSameFileDuplicate` | Duplicate term 'работать волонтёром' (verb) appears 2 times in file |

#### File: `vocabulary/ru/B1/vocabulary.js` (1 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | *(EMPTY)* | noun | `emptyField` | Word/term field is empty or whitespace-only |

#### File: `vocabulary/ru/B2/adjectives.js` (12 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `гражданский` | adjective | `inSameFileDuplicate` | Duplicate term 'гражданский' (adjective) appears 2 times in file |
| B2 | `хронический` | adjective | `inSameFileDuplicate` | Duplicate term 'хронический' (adjective) appears 2 times in file |
| B2 | `превентивный` | adjective | `inSameFileDuplicate` | Duplicate term 'превентивный' (adjective) appears 2 times in file |
| B2 | `нравственный` | adjective | `inSameFileDuplicate` | Duplicate term 'нравственный' (adjective) appears 2 times in file |
| B2 | `этичный` | adjective | `inSameFileDuplicate` | Duplicate term 'этичный' (adjective) appears 2 times in file |
| B2 | `устойчивый` | adjective | `inSameFileDuplicate` | Duplicate term 'устойчивый' (adjective) appears 2 times in file |
| B2 | `гражданский` | adjective | `inSameFileDuplicate` | Duplicate term 'гражданский' (adjective) appears 2 times in file |
| B2 | `хронический` | adjective | `inSameFileDuplicate` | Duplicate term 'хронический' (adjective) appears 2 times in file |
| B2 | `превентивный` | adjective | `inSameFileDuplicate` | Duplicate term 'превентивный' (adjective) appears 2 times in file |
| B2 | `нравственный` | adjective | `inSameFileDuplicate` | Duplicate term 'нравственный' (adjective) appears 2 times in file |
| B2 | `этичный` | adjective | `inSameFileDuplicate` | Duplicate term 'этичный' (adjective) appears 2 times in file |
| B2 | `устойчивый` | adjective | `inSameFileDuplicate` | Duplicate term 'устойчивый' (adjective) appears 2 times in file |

#### File: `vocabulary/ru/B2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `В какой степени алгоритмы социальных сетей изолируют пользователей в эхо-камерах?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Должны ли государства строго регулировать развитие искусственного интеллекта для защиты рабочих мест?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Насколько сильно социально-экономическое положение семьи влияет на долгосрочный успех в обучении?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Угрожает ли глобализация самобытности региональных культур или обогащает их?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Достаточно ли экологических инициатив корпораций для борьбы с изменением климата без государственных реформ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Что является более устойчивым стимулом карьеры: общественное признание или личное призвание?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Как развитие гиг-экономики изменило традиционные гарантии трудящихся?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Должно ли здравоохранение отдавать приоритет профилактике заболеваний перед их лечением?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Может ли современное искусство сохранять критическую направленность, если оно коммерциализировано?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B2 | `Следует ли университетам полностью отказаться от стандартизированных экзаменов при приеме студентов?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/ru/B2/verbs.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | `утверждать, что` | verb | `inSameFileDuplicate` | Duplicate term 'утверждать, что' (verb) appears 2 times in file |
| B2 | `утверждать, что` | verb | `inSameFileDuplicate` | Duplicate term 'утверждать, что' (verb) appears 2 times in file |

#### File: `vocabulary/ru/C1/people.js` (4 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Мария Шарапова` | noun | `inSameFileDuplicate` | Duplicate term 'Мария Шарапова' (noun) appears 2 times in file |
| C1 | `Анна Ахматова` | noun | `inSameFileDuplicate` | Duplicate term 'Анна Ахматова' (noun) appears 2 times in file |
| C1 | `Мария Шарапова` | noun | `inSameFileDuplicate` | Duplicate term 'Мария Шарапова' (noun) appears 2 times in file |
| C1 | `Анна Ахматова` | noun | `inSameFileDuplicate` | Duplicate term 'Анна Ахматова' (noun) appears 2 times in file |

#### File: `vocabulary/ru/C1/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `Как скрытые когнитивные искажения подрывают объективность принятия решений в корпоративном управлении?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `В какой степени законодательство об интеллектуальной собственности способно адаптироваться к работам генеративного ИИ?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Способно ли архитектурное градостроительство преодолеть укоренившуюся социальную сегрегацию?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Как лингвистическая относительность формирует понятийные аппараты в различных культурных парадигмах?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Могут ли корпоративные критерии ESG обеспечить этическую ответственность или они стимулируют гринвошинг?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Как демографические сдвиги ставят под угрозу традиционные пенсионные системы в глобальном масштабе?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `В какой степени государственное финансирование должно приоритетно направляться на космические исследования?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Как тотальная цифровая слежка меняет психологическое отношение граждан к институтам власти?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Способна ли историческая память сохранить подлинность в эпоху синтетических медиа и дипфейков?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C1 | `Должны ли биоэтические нормы допускать генетическое редактирование зародышевой линии человека?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/ru/C1/verbs.js` (2 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | `инфраструктура` | verb | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'инфраструктура' (verb) appears 2 times in file |
| C1 | `инфраструктура` | verb | `emptyField`, `inSameFileDuplicate` | All sample/definition/example text fields are empty or whitespace-only; Duplicate term 'инфраструктура' (verb) appears 2 times in file |

#### File: `vocabulary/ru/C2/adjectives.js` (228 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `резкий` | adjective | `inSameFileDuplicate` | Duplicate term 'резкий' (adjective) appears 4 times in file |
| C2 | `маловразумительный` | adjective | `inSameFileDuplicate` | Duplicate term 'маловразумительный' (adjective) appears 4 times in file |
| C2 | `анахроничный` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроничный' (adjective) appears 4 times in file |
| C2 | `антитетический` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетический' (adjective) appears 4 times in file |
| C2 | `арканный` | adjective | `inSameFileDuplicate` | Duplicate term 'арканный' (adjective) appears 4 times in file |
| C2 | `атипичный` | adjective | `inSameFileDuplicate` | Duplicate term 'атипичный' (adjective) appears 4 times in file |
| C2 | `бинарный` | adjective | `inSameFileDuplicate` | Duplicate term 'бинарный' (adjective) appears 4 times in file |
| C2 | `категоричный` | adjective | `inSameFileDuplicate` | Duplicate term 'категоричный' (adjective) appears 4 times in file |
| C2 | `осмотрительный` | adjective | `inSameFileDuplicate` | Duplicate term 'осмотрительный' (adjective) appears 4 times in file |
| C2 | `скрытый` | adjective | `inSameFileDuplicate` | Duplicate term 'скрытый' (adjective) appears 4 times in file |
| C2 | `диффузный` | adjective | `inSameFileDuplicate` | Duplicate term 'диффузный' (adjective) appears 4 times in file |
| C2 | `неуловимый` | adjective | `inSameFileDuplicate` | Duplicate term 'неуловимый' (adjective) appears 4 times in file |
| C2 | `эзотерический` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерический' (adjective) appears 4 times in file |
| C2 | `ошибочный` | adjective | `inSameFileDuplicate` | Duplicate term 'ошибочный' (adjective) appears 4 times in file |
| C2 | `неизменный` | adjective | `inSameFileDuplicate` | Duplicate term 'неизменный' (adjective) appears 4 times in file |
| C2 | `беспристрастный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспристрастный' (adjective) appears 4 times in file |
| C2 | `побочный` | adjective | `inSameFileDuplicate` | Duplicate term 'побочный' (adjective) appears 4 times in file |
| C2 | `присущий` | adjective | `inSameFileDuplicate` | Duplicate term 'присущий' (adjective) appears 4 times in file |
| C2 | `неподражаемый` | adjective | `inSameFileDuplicate` | Duplicate term 'неподражаемый' (adjective) appears 4 times in file |
| C2 | `коварный` | adjective | `inSameFileDuplicate` | Duplicate term 'коварный' (adjective) appears 4 times in file |
| C2 | `непримиримый` | adjective | `inSameFileDuplicate` | Duplicate term 'непримиримый' (adjective) appears 4 times in file |
| C2 | `лиминальный` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминальный' (adjective) appears 4 times in file |
| C2 | `многообразный` | adjective | `inSameFileDuplicate` | Duplicate term 'многообразный' (adjective) appears 4 times in file |
| C2 | `туманный` | adjective | `inSameFileDuplicate` | Duplicate term 'туманный' (adjective) appears 4 times in file |
| C2 | `нормативный` | adjective | `inSameFileDuplicate` | Duplicate term 'нормативный' (adjective) appears 4 times in file |
| C2 | `нюансированный` | adjective | `inSameFileDuplicate` | Duplicate term 'нюансированный' (adjective) appears 4 times in file |
| C2 | `иносказательный` | adjective | `inSameFileDuplicate` | Duplicate term 'иносказательный' (adjective) appears 4 times in file |
| C2 | `непрозрачный` | adjective | `inSameFileDuplicate` | Duplicate term 'непрозрачный' (adjective) appears 4 times in file |
| C2 | `мнимый` | adjective | `inSameFileDuplicate` | Duplicate term 'мнимый' (adjective) appears 4 times in file |
| C2 | `парадоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксальный' (adjective) appears 4 times in file |
| C2 | `всеобъемлющий` | adjective | `inSameFileDuplicate` | Duplicate term 'всеобъемлющий' (adjective) appears 4 times in file |
| C2 | `поляризующий` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризующий' (adjective) appears 4 times in file |
| C2 | `шаткий` | adjective | `inSameFileDuplicate` | Duplicate term 'шаткий' (adjective) appears 4 times in file |
| C2 | `прескриптивный` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптивный' (adjective) appears 4 times in file |
| C2 | `затяжной` | adjective | `inSameFileDuplicate` | Duplicate term 'затяжной' (adjective) appears 4 times in file |
| C2 | `редуктивный` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктивный' (adjective) appears 4 times in file |
| C2 | `основополагающий` | adjective | `inSameFileDuplicate` | Duplicate term 'основополагающий' (adjective) appears 4 times in file |
| C2 | `благовидный` | adjective | `inSameFileDuplicate` | Duplicate term 'благовидный' (adjective) appears 4 times in file |
| C2 | `ложный` | adjective | `inSameFileDuplicate` | Duplicate term 'ложный' (adjective) appears 4 times in file |
| C2 | `подрывной` | adjective | `inSameFileDuplicate` | Duplicate term 'подрывной' (adjective) appears 4 times in file |
| C2 | `негласный` | adjective | `inSameFileDuplicate` | Duplicate term 'негласный' (adjective) appears 4 times in file |
| C2 | `преходящий` | adjective | `inSameFileDuplicate` | Duplicate term 'преходящий' (adjective) appears 4 times in file |
| C2 | `вездесущий` | adjective | `inSameFileDuplicate` | Duplicate term 'вездесущий' (adjective) appears 4 times in file |
| C2 | `недвусмысленный` | adjective | `inSameFileDuplicate` | Duplicate term 'недвусмысленный' (adjective) appears 4 times in file |
| C2 | `беспрецедентный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспрецедентный' (adjective) appears 4 times in file |
| C2 | `несостоятельный` | adjective | `inSameFileDuplicate` | Duplicate term 'несостоятельный' (adjective) appears 4 times in file |
| C2 | `громоздкий` | adjective | `inSameFileDuplicate` | Duplicate term 'громоздкий' (adjective) appears 4 times in file |
| C2 | `герменевтический` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтический' (adjective) appears 5 times in file |
| C2 | `тавтологичный` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологичный' (adjective) appears 5 times in file |
| C2 | `полисемичный` | adjective | `inSameFileDuplicate` | Duplicate term 'полисемичный' (adjective) appears 5 times in file |
| C2 | `постколониальный` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониальный' (adjective) appears 5 times in file |
| C2 | `многополярный` | adjective | `inSameFileDuplicate` | Duplicate term 'многополярный' (adjective) appears 5 times in file |
| C2 | `космополитичный` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитичный' (adjective) appears 5 times in file |
| C2 | `нарциссический` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссический' (adjective) appears 5 times in file |
| C2 | `гетеродоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродоксальный' (adjective) appears 5 times in file |
| C2 | `резкий` | adjective | `inSameFileDuplicate` | Duplicate term 'резкий' (adjective) appears 4 times in file |
| C2 | `маловразумительный` | adjective | `inSameFileDuplicate` | Duplicate term 'маловразумительный' (adjective) appears 4 times in file |
| C2 | `анахроничный` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроничный' (adjective) appears 4 times in file |
| C2 | `антитетический` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетический' (adjective) appears 4 times in file |
| C2 | `арканный` | adjective | `inSameFileDuplicate` | Duplicate term 'арканный' (adjective) appears 4 times in file |
| C2 | `атипичный` | adjective | `inSameFileDuplicate` | Duplicate term 'атипичный' (adjective) appears 4 times in file |
| C2 | `бинарный` | adjective | `inSameFileDuplicate` | Duplicate term 'бинарный' (adjective) appears 4 times in file |
| C2 | `категоричный` | adjective | `inSameFileDuplicate` | Duplicate term 'категоричный' (adjective) appears 4 times in file |
| C2 | `осмотрительный` | adjective | `inSameFileDuplicate` | Duplicate term 'осмотрительный' (adjective) appears 4 times in file |
| C2 | `скрытый` | adjective | `inSameFileDuplicate` | Duplicate term 'скрытый' (adjective) appears 4 times in file |
| C2 | `диффузный` | adjective | `inSameFileDuplicate` | Duplicate term 'диффузный' (adjective) appears 4 times in file |
| C2 | `неуловимый` | adjective | `inSameFileDuplicate` | Duplicate term 'неуловимый' (adjective) appears 4 times in file |
| C2 | `эзотерический` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерический' (adjective) appears 4 times in file |
| C2 | `ошибочный` | adjective | `inSameFileDuplicate` | Duplicate term 'ошибочный' (adjective) appears 4 times in file |
| C2 | `неизменный` | adjective | `inSameFileDuplicate` | Duplicate term 'неизменный' (adjective) appears 4 times in file |
| C2 | `беспристрастный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспристрастный' (adjective) appears 4 times in file |
| C2 | `побочный` | adjective | `inSameFileDuplicate` | Duplicate term 'побочный' (adjective) appears 4 times in file |
| C2 | `присущий` | adjective | `inSameFileDuplicate` | Duplicate term 'присущий' (adjective) appears 4 times in file |
| C2 | `неподражаемый` | adjective | `inSameFileDuplicate` | Duplicate term 'неподражаемый' (adjective) appears 4 times in file |
| C2 | `коварный` | adjective | `inSameFileDuplicate` | Duplicate term 'коварный' (adjective) appears 4 times in file |
| C2 | `непримиримый` | adjective | `inSameFileDuplicate` | Duplicate term 'непримиримый' (adjective) appears 4 times in file |
| C2 | `лиминальный` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминальный' (adjective) appears 4 times in file |
| C2 | `многообразный` | adjective | `inSameFileDuplicate` | Duplicate term 'многообразный' (adjective) appears 4 times in file |
| C2 | `туманный` | adjective | `inSameFileDuplicate` | Duplicate term 'туманный' (adjective) appears 4 times in file |
| C2 | `нормативный` | adjective | `inSameFileDuplicate` | Duplicate term 'нормативный' (adjective) appears 4 times in file |
| C2 | `нюансированный` | adjective | `inSameFileDuplicate` | Duplicate term 'нюансированный' (adjective) appears 4 times in file |
| C2 | `иносказательный` | adjective | `inSameFileDuplicate` | Duplicate term 'иносказательный' (adjective) appears 4 times in file |
| C2 | `непрозрачный` | adjective | `inSameFileDuplicate` | Duplicate term 'непрозрачный' (adjective) appears 4 times in file |
| C2 | `мнимый` | adjective | `inSameFileDuplicate` | Duplicate term 'мнимый' (adjective) appears 4 times in file |
| C2 | `парадоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксальный' (adjective) appears 4 times in file |
| C2 | `всеобъемлющий` | adjective | `inSameFileDuplicate` | Duplicate term 'всеобъемлющий' (adjective) appears 4 times in file |
| C2 | `поляризующий` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризующий' (adjective) appears 4 times in file |
| C2 | `шаткий` | adjective | `inSameFileDuplicate` | Duplicate term 'шаткий' (adjective) appears 4 times in file |
| C2 | `прескриптивный` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптивный' (adjective) appears 4 times in file |
| C2 | `затяжной` | adjective | `inSameFileDuplicate` | Duplicate term 'затяжной' (adjective) appears 4 times in file |
| C2 | `редуктивный` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктивный' (adjective) appears 4 times in file |
| C2 | `основополагающий` | adjective | `inSameFileDuplicate` | Duplicate term 'основополагающий' (adjective) appears 4 times in file |
| C2 | `благовидный` | adjective | `inSameFileDuplicate` | Duplicate term 'благовидный' (adjective) appears 4 times in file |
| C2 | `ложный` | adjective | `inSameFileDuplicate` | Duplicate term 'ложный' (adjective) appears 4 times in file |
| C2 | `подрывной` | adjective | `inSameFileDuplicate` | Duplicate term 'подрывной' (adjective) appears 4 times in file |
| C2 | `негласный` | adjective | `inSameFileDuplicate` | Duplicate term 'негласный' (adjective) appears 4 times in file |
| C2 | `преходящий` | adjective | `inSameFileDuplicate` | Duplicate term 'преходящий' (adjective) appears 4 times in file |
| C2 | `вездесущий` | adjective | `inSameFileDuplicate` | Duplicate term 'вездесущий' (adjective) appears 4 times in file |
| C2 | `недвусмысленный` | adjective | `inSameFileDuplicate` | Duplicate term 'недвусмысленный' (adjective) appears 4 times in file |
| C2 | `беспрецедентный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспрецедентный' (adjective) appears 4 times in file |
| C2 | `несостоятельный` | adjective | `inSameFileDuplicate` | Duplicate term 'несостоятельный' (adjective) appears 4 times in file |
| C2 | `громоздкий` | adjective | `inSameFileDuplicate` | Duplicate term 'громоздкий' (adjective) appears 4 times in file |
| C2 | `герменевтический` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтический' (adjective) appears 5 times in file |
| C2 | `тавтологичный` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологичный' (adjective) appears 5 times in file |
| C2 | `полисемичный` | adjective | `inSameFileDuplicate` | Duplicate term 'полисемичный' (adjective) appears 5 times in file |
| C2 | `постколониальный` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониальный' (adjective) appears 5 times in file |
| C2 | `многополярный` | adjective | `inSameFileDuplicate` | Duplicate term 'многополярный' (adjective) appears 5 times in file |
| C2 | `космополитичный` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитичный' (adjective) appears 5 times in file |
| C2 | `нарциссический` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссический' (adjective) appears 5 times in file |
| C2 | `гетеродоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродоксальный' (adjective) appears 5 times in file |
| C2 | `резкий` | adjective | `inSameFileDuplicate` | Duplicate term 'резкий' (adjective) appears 4 times in file |
| C2 | `маловразумительный` | adjective | `inSameFileDuplicate` | Duplicate term 'маловразумительный' (adjective) appears 4 times in file |
| C2 | `анахроничный` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроничный' (adjective) appears 4 times in file |
| C2 | `антитетический` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетический' (adjective) appears 4 times in file |
| C2 | `арканный` | adjective | `inSameFileDuplicate` | Duplicate term 'арканный' (adjective) appears 4 times in file |
| C2 | `атипичный` | adjective | `inSameFileDuplicate` | Duplicate term 'атипичный' (adjective) appears 4 times in file |
| C2 | `бинарный` | adjective | `inSameFileDuplicate` | Duplicate term 'бинарный' (adjective) appears 4 times in file |
| C2 | `категоричный` | adjective | `inSameFileDuplicate` | Duplicate term 'категоричный' (adjective) appears 4 times in file |
| C2 | `осмотрительный` | adjective | `inSameFileDuplicate` | Duplicate term 'осмотрительный' (adjective) appears 4 times in file |
| C2 | `скрытый` | adjective | `inSameFileDuplicate` | Duplicate term 'скрытый' (adjective) appears 4 times in file |
| C2 | `диффузный` | adjective | `inSameFileDuplicate` | Duplicate term 'диффузный' (adjective) appears 4 times in file |
| C2 | `неуловимый` | adjective | `inSameFileDuplicate` | Duplicate term 'неуловимый' (adjective) appears 4 times in file |
| C2 | `эзотерический` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерический' (adjective) appears 4 times in file |
| C2 | `ошибочный` | adjective | `inSameFileDuplicate` | Duplicate term 'ошибочный' (adjective) appears 4 times in file |
| C2 | `неизменный` | adjective | `inSameFileDuplicate` | Duplicate term 'неизменный' (adjective) appears 4 times in file |
| C2 | `беспристрастный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспристрастный' (adjective) appears 4 times in file |
| C2 | `побочный` | adjective | `inSameFileDuplicate` | Duplicate term 'побочный' (adjective) appears 4 times in file |
| C2 | `присущий` | adjective | `inSameFileDuplicate` | Duplicate term 'присущий' (adjective) appears 4 times in file |
| C2 | `неподражаемый` | adjective | `inSameFileDuplicate` | Duplicate term 'неподражаемый' (adjective) appears 4 times in file |
| C2 | `коварный` | adjective | `inSameFileDuplicate` | Duplicate term 'коварный' (adjective) appears 4 times in file |
| C2 | `непримиримый` | adjective | `inSameFileDuplicate` | Duplicate term 'непримиримый' (adjective) appears 4 times in file |
| C2 | `лиминальный` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминальный' (adjective) appears 4 times in file |
| C2 | `многообразный` | adjective | `inSameFileDuplicate` | Duplicate term 'многообразный' (adjective) appears 4 times in file |
| C2 | `туманный` | adjective | `inSameFileDuplicate` | Duplicate term 'туманный' (adjective) appears 4 times in file |
| C2 | `нормативный` | adjective | `inSameFileDuplicate` | Duplicate term 'нормативный' (adjective) appears 4 times in file |
| C2 | `нюансированный` | adjective | `inSameFileDuplicate` | Duplicate term 'нюансированный' (adjective) appears 4 times in file |
| C2 | `иносказательный` | adjective | `inSameFileDuplicate` | Duplicate term 'иносказательный' (adjective) appears 4 times in file |
| C2 | `непрозрачный` | adjective | `inSameFileDuplicate` | Duplicate term 'непрозрачный' (adjective) appears 4 times in file |
| C2 | `мнимый` | adjective | `inSameFileDuplicate` | Duplicate term 'мнимый' (adjective) appears 4 times in file |
| C2 | `парадоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксальный' (adjective) appears 4 times in file |
| C2 | `всеобъемлющий` | adjective | `inSameFileDuplicate` | Duplicate term 'всеобъемлющий' (adjective) appears 4 times in file |
| C2 | `поляризующий` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризующий' (adjective) appears 4 times in file |
| C2 | `шаткий` | adjective | `inSameFileDuplicate` | Duplicate term 'шаткий' (adjective) appears 4 times in file |
| C2 | `прескриптивный` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптивный' (adjective) appears 4 times in file |
| C2 | `затяжной` | adjective | `inSameFileDuplicate` | Duplicate term 'затяжной' (adjective) appears 4 times in file |
| C2 | `редуктивный` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктивный' (adjective) appears 4 times in file |
| C2 | `основополагающий` | adjective | `inSameFileDuplicate` | Duplicate term 'основополагающий' (adjective) appears 4 times in file |
| C2 | `благовидный` | adjective | `inSameFileDuplicate` | Duplicate term 'благовидный' (adjective) appears 4 times in file |
| C2 | `ложный` | adjective | `inSameFileDuplicate` | Duplicate term 'ложный' (adjective) appears 4 times in file |
| C2 | `подрывной` | adjective | `inSameFileDuplicate` | Duplicate term 'подрывной' (adjective) appears 4 times in file |
| C2 | `негласный` | adjective | `inSameFileDuplicate` | Duplicate term 'негласный' (adjective) appears 4 times in file |
| C2 | `преходящий` | adjective | `inSameFileDuplicate` | Duplicate term 'преходящий' (adjective) appears 4 times in file |
| C2 | `вездесущий` | adjective | `inSameFileDuplicate` | Duplicate term 'вездесущий' (adjective) appears 4 times in file |
| C2 | `недвусмысленный` | adjective | `inSameFileDuplicate` | Duplicate term 'недвусмысленный' (adjective) appears 4 times in file |
| C2 | `беспрецедентный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспрецедентный' (adjective) appears 4 times in file |
| C2 | `несостоятельный` | adjective | `inSameFileDuplicate` | Duplicate term 'несостоятельный' (adjective) appears 4 times in file |
| C2 | `громоздкий` | adjective | `inSameFileDuplicate` | Duplicate term 'громоздкий' (adjective) appears 4 times in file |
| C2 | `герменевтический` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтический' (adjective) appears 5 times in file |
| C2 | `тавтологичный` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологичный' (adjective) appears 5 times in file |
| C2 | `полисемичный` | adjective | `inSameFileDuplicate` | Duplicate term 'полисемичный' (adjective) appears 5 times in file |
| C2 | `постколониальный` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониальный' (adjective) appears 5 times in file |
| C2 | `многополярный` | adjective | `inSameFileDuplicate` | Duplicate term 'многополярный' (adjective) appears 5 times in file |
| C2 | `космополитичный` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитичный' (adjective) appears 5 times in file |
| C2 | `нарциссический` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссический' (adjective) appears 5 times in file |
| C2 | `гетеродоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродоксальный' (adjective) appears 5 times in file |
| C2 | `герменевтический` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтический' (adjective) appears 5 times in file |
| C2 | `тавтологичный` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологичный' (adjective) appears 5 times in file |
| C2 | `полисемичный` | adjective | `inSameFileDuplicate` | Duplicate term 'полисемичный' (adjective) appears 5 times in file |
| C2 | `постколониальный` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониальный' (adjective) appears 5 times in file |
| C2 | `многополярный` | adjective | `inSameFileDuplicate` | Duplicate term 'многополярный' (adjective) appears 5 times in file |
| C2 | `космополитичный` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитичный' (adjective) appears 5 times in file |
| C2 | `нарциссический` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссический' (adjective) appears 5 times in file |
| C2 | `гетеродоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродоксальный' (adjective) appears 5 times in file |
| C2 | `резкий` | adjective | `inSameFileDuplicate` | Duplicate term 'резкий' (adjective) appears 4 times in file |
| C2 | `маловразумительный` | adjective | `inSameFileDuplicate` | Duplicate term 'маловразумительный' (adjective) appears 4 times in file |
| C2 | `анахроничный` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроничный' (adjective) appears 4 times in file |
| C2 | `антитетический` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетический' (adjective) appears 4 times in file |
| C2 | `арканный` | adjective | `inSameFileDuplicate` | Duplicate term 'арканный' (adjective) appears 4 times in file |
| C2 | `атипичный` | adjective | `inSameFileDuplicate` | Duplicate term 'атипичный' (adjective) appears 4 times in file |
| C2 | `бинарный` | adjective | `inSameFileDuplicate` | Duplicate term 'бинарный' (adjective) appears 4 times in file |
| C2 | `категоричный` | adjective | `inSameFileDuplicate` | Duplicate term 'категоричный' (adjective) appears 4 times in file |
| C2 | `осмотрительный` | adjective | `inSameFileDuplicate` | Duplicate term 'осмотрительный' (adjective) appears 4 times in file |
| C2 | `скрытый` | adjective | `inSameFileDuplicate` | Duplicate term 'скрытый' (adjective) appears 4 times in file |
| C2 | `диффузный` | adjective | `inSameFileDuplicate` | Duplicate term 'диффузный' (adjective) appears 4 times in file |
| C2 | `неуловимый` | adjective | `inSameFileDuplicate` | Duplicate term 'неуловимый' (adjective) appears 4 times in file |
| C2 | `эзотерический` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерический' (adjective) appears 4 times in file |
| C2 | `ошибочный` | adjective | `inSameFileDuplicate` | Duplicate term 'ошибочный' (adjective) appears 4 times in file |
| C2 | `неизменный` | adjective | `inSameFileDuplicate` | Duplicate term 'неизменный' (adjective) appears 4 times in file |
| C2 | `беспристрастный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспристрастный' (adjective) appears 4 times in file |
| C2 | `побочный` | adjective | `inSameFileDuplicate` | Duplicate term 'побочный' (adjective) appears 4 times in file |
| C2 | `присущий` | adjective | `inSameFileDuplicate` | Duplicate term 'присущий' (adjective) appears 4 times in file |
| C2 | `неподражаемый` | adjective | `inSameFileDuplicate` | Duplicate term 'неподражаемый' (adjective) appears 4 times in file |
| C2 | `коварный` | adjective | `inSameFileDuplicate` | Duplicate term 'коварный' (adjective) appears 4 times in file |
| C2 | `непримиримый` | adjective | `inSameFileDuplicate` | Duplicate term 'непримиримый' (adjective) appears 4 times in file |
| C2 | `лиминальный` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминальный' (adjective) appears 4 times in file |
| C2 | `многообразный` | adjective | `inSameFileDuplicate` | Duplicate term 'многообразный' (adjective) appears 4 times in file |
| C2 | `туманный` | adjective | `inSameFileDuplicate` | Duplicate term 'туманный' (adjective) appears 4 times in file |
| C2 | `нормативный` | adjective | `inSameFileDuplicate` | Duplicate term 'нормативный' (adjective) appears 4 times in file |
| C2 | `нюансированный` | adjective | `inSameFileDuplicate` | Duplicate term 'нюансированный' (adjective) appears 4 times in file |
| C2 | `иносказательный` | adjective | `inSameFileDuplicate` | Duplicate term 'иносказательный' (adjective) appears 4 times in file |
| C2 | `непрозрачный` | adjective | `inSameFileDuplicate` | Duplicate term 'непрозрачный' (adjective) appears 4 times in file |
| C2 | `мнимый` | adjective | `inSameFileDuplicate` | Duplicate term 'мнимый' (adjective) appears 4 times in file |
| C2 | `парадоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксальный' (adjective) appears 4 times in file |
| C2 | `всеобъемлющий` | adjective | `inSameFileDuplicate` | Duplicate term 'всеобъемлющий' (adjective) appears 4 times in file |
| C2 | `поляризующий` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризующий' (adjective) appears 4 times in file |
| C2 | `шаткий` | adjective | `inSameFileDuplicate` | Duplicate term 'шаткий' (adjective) appears 4 times in file |
| C2 | `прескриптивный` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптивный' (adjective) appears 4 times in file |
| C2 | `затяжной` | adjective | `inSameFileDuplicate` | Duplicate term 'затяжной' (adjective) appears 4 times in file |
| C2 | `редуктивный` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктивный' (adjective) appears 4 times in file |
| C2 | `основополагающий` | adjective | `inSameFileDuplicate` | Duplicate term 'основополагающий' (adjective) appears 4 times in file |
| C2 | `благовидный` | adjective | `inSameFileDuplicate` | Duplicate term 'благовидный' (adjective) appears 4 times in file |
| C2 | `ложный` | adjective | `inSameFileDuplicate` | Duplicate term 'ложный' (adjective) appears 4 times in file |
| C2 | `подрывной` | adjective | `inSameFileDuplicate` | Duplicate term 'подрывной' (adjective) appears 4 times in file |
| C2 | `негласный` | adjective | `inSameFileDuplicate` | Duplicate term 'негласный' (adjective) appears 4 times in file |
| C2 | `преходящий` | adjective | `inSameFileDuplicate` | Duplicate term 'преходящий' (adjective) appears 4 times in file |
| C2 | `вездесущий` | adjective | `inSameFileDuplicate` | Duplicate term 'вездесущий' (adjective) appears 4 times in file |
| C2 | `недвусмысленный` | adjective | `inSameFileDuplicate` | Duplicate term 'недвусмысленный' (adjective) appears 4 times in file |
| C2 | `беспрецедентный` | adjective | `inSameFileDuplicate` | Duplicate term 'беспрецедентный' (adjective) appears 4 times in file |
| C2 | `несостоятельный` | adjective | `inSameFileDuplicate` | Duplicate term 'несостоятельный' (adjective) appears 4 times in file |
| C2 | `громоздкий` | adjective | `inSameFileDuplicate` | Duplicate term 'громоздкий' (adjective) appears 4 times in file |
| C2 | `герменевтический` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтический' (adjective) appears 5 times in file |
| C2 | `тавтологичный` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологичный' (adjective) appears 5 times in file |
| C2 | `полисемичный` | adjective | `inSameFileDuplicate` | Duplicate term 'полисемичный' (adjective) appears 5 times in file |
| C2 | `постколониальный` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониальный' (adjective) appears 5 times in file |
| C2 | `многополярный` | adjective | `inSameFileDuplicate` | Duplicate term 'многополярный' (adjective) appears 5 times in file |
| C2 | `космополитичный` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитичный' (adjective) appears 5 times in file |
| C2 | `нарциссический` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссический' (adjective) appears 5 times in file |
| C2 | `гетеродоксальный` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродоксальный' (adjective) appears 5 times in file |

#### File: `vocabulary/ru/C2/speaking.js` (10 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `Является ли философская парадигма технологического детерминизма неизбежностью или отказом от человеческой субъектности?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `В какой степени коммерциализированная культурная ностальгия препятствует подлинному художественному новаторству?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Как суверенная денежно-кредитная политика справляется с системной дестабилизацией, вызванной децентрализованными криптовалютами?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Возможна ли эпистемическая справедливость в рамках академических исследований, исторически укорененных в европоцентризме?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Каким образом исчезновение «третьих мест» обостряет экзистенциальное одиночество в гиперподключенных мегаполисах?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Искажает ли антропоцентрическая парадигма международных климатических соглашений понимание экологической взаимосвязанности?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Как алгоритмические рекомендательные системы скрытно реконфигурируют человеческую автономию и экзистенциальное самоопределение?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `В какой степени трансгуманистические технологии способны оспорить биологические определения личности и ее морального статуса?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Служит ли меритократия легитимирующим мифом для структурного неравенства вместо инструмента социальной мобильности?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| C2 | `Как политические дискурсы эпохи постправды подрывают демократическую процедуру принятия решений и доверие к институтам?` | - | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/ru/C2/verbs.js` (102 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `реифицировать` | verb | `inSameFileDuplicate` | Duplicate term 'реифицировать' (verb) appears 2 times in file |
| C2 | `сублимировать` | verb | `inSameFileDuplicate` | Duplicate term 'сублимировать' (verb) appears 2 times in file |
| C2 | `предицировать` | verb | `inSameFileDuplicate` | Duplicate term 'предицировать' (verb) appears 2 times in file |
| C2 | `воплощать` | verb | `inSameFileDuplicate` | Duplicate term 'воплощать' (verb) appears 2 times in file |
| C2 | `отрицать` | verb | `inSameFileDuplicate` | Duplicate term 'отрицать' (verb) appears 2 times in file |
| C2 | `превосходить` | verb | `inSameFileDuplicate` | Duplicate term 'превосходить' (verb) appears 2 times in file |
| C2 | `опосредовать` | verb | `inSameFileDuplicate` | Duplicate term 'опосредовать' (verb) appears 2 times in file |
| C2 | `опускать` | verb | `inSameFileDuplicate` | Duplicate term 'опускать' (verb) appears 2 times in file |
| C2 | `запутывать` | verb | `inSameFileDuplicate` | Duplicate term 'запутывать' (verb) appears 2 times in file |
| C2 | `смешивать` | verb | `inSameFileDuplicate` | Duplicate term 'смешивать' (verb) appears 2 times in file |
| C2 | `ссылаться` | verb | `inSameFileDuplicate` | Duplicate term 'ссылаться' (verb) appears 2 times in file |
| C2 | `выдвигать` | verb | `inSameFileDuplicate` | Duplicate term 'выдвигать' (verb) appears 2 times in file |
| C2 | `апроприировать` | verb | `inSameFileDuplicate` | Duplicate term 'апроприировать' (verb) appears 2 times in file |
| C2 | `дестабилизировать` | verb | `inSameFileDuplicate` | Duplicate term 'дестабилизировать' (verb) appears 2 times in file |
| C2 | `коммодифицировать` | verb | `inSameFileDuplicate` | Duplicate term 'коммодифицировать' (verb) appears 2 times in file |
| C2 | `инструментализировать` | verb | `inSameFileDuplicate` | Duplicate term 'инструментализировать' (verb) appears 2 times in file |
| C2 | `валоризировать` | verb | `inSameFileDuplicate` | Duplicate term 'валоризировать' (verb) appears 2 times in file |
| C2 | `фетишизировать` | verb | `inSameFileDuplicate` | Duplicate term 'фетишизировать' (verb) appears 2 times in file |
| C2 | `отчуждать` | verb | `inSameFileDuplicate` | Duplicate term 'отчуждать' (verb) appears 2 times in file |
| C2 | `разграничивать` | verb | `inSameFileDuplicate` | Duplicate term 'разграничивать' (verb) appears 2 times in file |
| C2 | `ограничивать` | verb | `inSameFileDuplicate` | Duplicate term 'ограничивать' (verb) appears 2 times in file |
| C2 | `препятствовать` | verb | `inSameFileDuplicate` | Duplicate term 'препятствовать' (verb) appears 4 times in file |
| C2 | `искажать` | verb | `inSameFileDuplicate` | Duplicate term 'искажать' (verb) appears 2 times in file |
| C2 | `оспаривать` | verb | `inSameFileDuplicate` | Duplicate term 'оспаривать' (verb) appears 2 times in file |
| C2 | `аннулировать` | verb | `inSameFileDuplicate` | Duplicate term 'аннулировать' (verb) appears 2 times in file |
| C2 | `нарушать` | verb | `inSameFileDuplicate` | Duplicate term 'нарушать' (verb) appears 2 times in file |
| C2 | `деконструировать` | verb | `inSameFileDuplicate` | Duplicate term 'деконструировать' (verb) appears 2 times in file |
| C2 | `диалектизировать` | verb | `inSameFileDuplicate` | Duplicate term 'диалектизировать' (verb) appears 2 times in file |
| C2 | `гегемонизировать` | verb | `inSameFileDuplicate` | Duplicate term 'гегемонизировать' (verb) appears 2 times in file |
| C2 | `подчеркивать` | verb | `inSameFileDuplicate` | Duplicate term 'подчеркивать' (verb) appears 2 times in file |
| C2 | `облегчать` | verb | `inSameFileDuplicate` | Duplicate term 'облегчать' (verb) appears 2 times in file |
| C2 | `обходить` | verb | `inSameFileDuplicate` | Duplicate term 'обходить' (verb) appears 2 times in file |
| C2 | `распространять` | verb | `inSameFileDuplicate` | Duplicate term 'распространять' (verb) appears 2 times in file |
| C2 | `инкапсулировать` | verb | `inSameFileDuplicate` | Duplicate term 'инкапсулировать' (verb) appears 2 times in file |
| C2 | `порождать` | verb | `inSameFileDuplicate` | Duplicate term 'порождать' (verb) appears 2 times in file |
| C2 | `усугублять` | verb | `inSameFileDuplicate` | Duplicate term 'усугублять' (verb) appears 2 times in file |
| C2 | `служить примером` | verb | `inSameFileDuplicate` | Duplicate term 'служить примером' (verb) appears 2 times in file |
| C2 | `препятствовать` | verb | `inSameFileDuplicate` | Duplicate term 'препятствовать' (verb) appears 4 times in file |
| C2 | `смягчать` | verb | `inSameFileDuplicate` | Duplicate term 'смягчать' (verb) appears 2 times in file |
| C2 | `обязывать` | verb | `inSameFileDuplicate` | Duplicate term 'обязывать' (verb) appears 2 times in file |
| C2 | `пронизывать` | verb | `inSameFileDuplicate` | Duplicate term 'пронизывать' (verb) appears 2 times in file |
| C2 | `исключать` | verb | `inSameFileDuplicate` | Duplicate term 'исключать' (verb) appears 2 times in file |
| C2 | `согласовывать` | verb | `inSameFileDuplicate` | Duplicate term 'согласовывать' (verb) appears 2 times in file |
| C2 | `вытеснять` | verb | `inSameFileDuplicate` | Duplicate term 'вытеснять' (verb) appears 2 times in file |
| C2 | `подкреплять` | verb | `inSameFileDuplicate` | Duplicate term 'подкреплять' (verb) appears 2 times in file |
| C2 | `подтверждать правоту` | verb | `inSameFileDuplicate` | Duplicate term 'подтверждать правоту' (verb) appears 2 times in file |
| C2 | `зависеть от` | verb | `inSameFileDuplicate` | Duplicate term 'зависеть от' (verb) appears 2 times in file |
| C2 | `бороться с` | verb | `inSameFileDuplicate` | Duplicate term 'бороться с' (verb) appears 2 times in file |
| C2 | `замалчивать` | verb | `inSameFileDuplicate` | Duplicate term 'замалчивать' (verb) appears 2 times in file |
| C2 | `сглаживать` | verb | `inSameFileDuplicate` | Duplicate term 'сглаживать' (verb) appears 2 times in file |
| C2 | `смена парадигмы` | verb | `inSameFileDuplicate` | Duplicate term 'смена парадигмы' (verb) appears 2 times in file |
| C2 | `реифицировать` | verb | `inSameFileDuplicate` | Duplicate term 'реифицировать' (verb) appears 2 times in file |
| C2 | `сублимировать` | verb | `inSameFileDuplicate` | Duplicate term 'сублимировать' (verb) appears 2 times in file |
| C2 | `предицировать` | verb | `inSameFileDuplicate` | Duplicate term 'предицировать' (verb) appears 2 times in file |
| C2 | `воплощать` | verb | `inSameFileDuplicate` | Duplicate term 'воплощать' (verb) appears 2 times in file |
| C2 | `отрицать` | verb | `inSameFileDuplicate` | Duplicate term 'отрицать' (verb) appears 2 times in file |
| C2 | `превосходить` | verb | `inSameFileDuplicate` | Duplicate term 'превосходить' (verb) appears 2 times in file |
| C2 | `опосредовать` | verb | `inSameFileDuplicate` | Duplicate term 'опосредовать' (verb) appears 2 times in file |
| C2 | `опускать` | verb | `inSameFileDuplicate` | Duplicate term 'опускать' (verb) appears 2 times in file |
| C2 | `запутывать` | verb | `inSameFileDuplicate` | Duplicate term 'запутывать' (verb) appears 2 times in file |
| C2 | `смешивать` | verb | `inSameFileDuplicate` | Duplicate term 'смешивать' (verb) appears 2 times in file |
| C2 | `ссылаться` | verb | `inSameFileDuplicate` | Duplicate term 'ссылаться' (verb) appears 2 times in file |
| C2 | `выдвигать` | verb | `inSameFileDuplicate` | Duplicate term 'выдвигать' (verb) appears 2 times in file |
| C2 | `апроприировать` | verb | `inSameFileDuplicate` | Duplicate term 'апроприировать' (verb) appears 2 times in file |
| C2 | `дестабилизировать` | verb | `inSameFileDuplicate` | Duplicate term 'дестабилизировать' (verb) appears 2 times in file |
| C2 | `коммодифицировать` | verb | `inSameFileDuplicate` | Duplicate term 'коммодифицировать' (verb) appears 2 times in file |
| C2 | `инструментализировать` | verb | `inSameFileDuplicate` | Duplicate term 'инструментализировать' (verb) appears 2 times in file |
| C2 | `валоризировать` | verb | `inSameFileDuplicate` | Duplicate term 'валоризировать' (verb) appears 2 times in file |
| C2 | `фетишизировать` | verb | `inSameFileDuplicate` | Duplicate term 'фетишизировать' (verb) appears 2 times in file |
| C2 | `отчуждать` | verb | `inSameFileDuplicate` | Duplicate term 'отчуждать' (verb) appears 2 times in file |
| C2 | `разграничивать` | verb | `inSameFileDuplicate` | Duplicate term 'разграничивать' (verb) appears 2 times in file |
| C2 | `ограничивать` | verb | `inSameFileDuplicate` | Duplicate term 'ограничивать' (verb) appears 2 times in file |
| C2 | `препятствовать` | verb | `inSameFileDuplicate` | Duplicate term 'препятствовать' (verb) appears 4 times in file |
| C2 | `искажать` | verb | `inSameFileDuplicate` | Duplicate term 'искажать' (verb) appears 2 times in file |
| C2 | `оспаривать` | verb | `inSameFileDuplicate` | Duplicate term 'оспаривать' (verb) appears 2 times in file |
| C2 | `аннулировать` | verb | `inSameFileDuplicate` | Duplicate term 'аннулировать' (verb) appears 2 times in file |
| C2 | `нарушать` | verb | `inSameFileDuplicate` | Duplicate term 'нарушать' (verb) appears 2 times in file |
| C2 | `деконструировать` | verb | `inSameFileDuplicate` | Duplicate term 'деконструировать' (verb) appears 2 times in file |
| C2 | `диалектизировать` | verb | `inSameFileDuplicate` | Duplicate term 'диалектизировать' (verb) appears 2 times in file |
| C2 | `гегемонизировать` | verb | `inSameFileDuplicate` | Duplicate term 'гегемонизировать' (verb) appears 2 times in file |
| C2 | `подчеркивать` | verb | `inSameFileDuplicate` | Duplicate term 'подчеркивать' (verb) appears 2 times in file |
| C2 | `облегчать` | verb | `inSameFileDuplicate` | Duplicate term 'облегчать' (verb) appears 2 times in file |
| C2 | `обходить` | verb | `inSameFileDuplicate` | Duplicate term 'обходить' (verb) appears 2 times in file |
| C2 | `распространять` | verb | `inSameFileDuplicate` | Duplicate term 'распространять' (verb) appears 2 times in file |
| C2 | `инкапсулировать` | verb | `inSameFileDuplicate` | Duplicate term 'инкапсулировать' (verb) appears 2 times in file |
| C2 | `порождать` | verb | `inSameFileDuplicate` | Duplicate term 'порождать' (verb) appears 2 times in file |
| C2 | `усугублять` | verb | `inSameFileDuplicate` | Duplicate term 'усугублять' (verb) appears 2 times in file |
| C2 | `служить примером` | verb | `inSameFileDuplicate` | Duplicate term 'служить примером' (verb) appears 2 times in file |
| C2 | `препятствовать` | verb | `inSameFileDuplicate` | Duplicate term 'препятствовать' (verb) appears 4 times in file |
| C2 | `смягчать` | verb | `inSameFileDuplicate` | Duplicate term 'смягчать' (verb) appears 2 times in file |
| C2 | `обязывать` | verb | `inSameFileDuplicate` | Duplicate term 'обязывать' (verb) appears 2 times in file |
| C2 | `пронизывать` | verb | `inSameFileDuplicate` | Duplicate term 'пронизывать' (verb) appears 2 times in file |
| C2 | `исключать` | verb | `inSameFileDuplicate` | Duplicate term 'исключать' (verb) appears 2 times in file |
| C2 | `согласовывать` | verb | `inSameFileDuplicate` | Duplicate term 'согласовывать' (verb) appears 2 times in file |
| C2 | `вытеснять` | verb | `inSameFileDuplicate` | Duplicate term 'вытеснять' (verb) appears 2 times in file |
| C2 | `подкреплять` | verb | `inSameFileDuplicate` | Duplicate term 'подкреплять' (verb) appears 2 times in file |
| C2 | `подтверждать правоту` | verb | `inSameFileDuplicate` | Duplicate term 'подтверждать правоту' (verb) appears 2 times in file |
| C2 | `зависеть от` | verb | `inSameFileDuplicate` | Duplicate term 'зависеть от' (verb) appears 2 times in file |
| C2 | `бороться с` | verb | `inSameFileDuplicate` | Duplicate term 'бороться с' (verb) appears 2 times in file |
| C2 | `замалчивать` | verb | `inSameFileDuplicate` | Duplicate term 'замалчивать' (verb) appears 2 times in file |
| C2 | `сглаживать` | verb | `inSameFileDuplicate` | Duplicate term 'сглаживать' (verb) appears 2 times in file |
| C2 | `смена парадигмы` | verb | `inSameFileDuplicate` | Duplicate term 'смена парадигмы' (verb) appears 2 times in file |

### TT (Tatar) — 315 Flagged Entries out of 626 Category (a) Entries

#### File: `vocabulary/tt/B1/locations.js` (11 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B1 | `Австралия` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Япония` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Кытай` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Бразилия` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Индия` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Токио` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Сидней` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Пекин` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Рио-де-Жанейро` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Каир` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |
| B1 | `Дөһли` | noun | `emptyField` | All sample/definition/example text fields are empty or whitespace-only |

#### File: `vocabulary/tt/B2/fluency.js` (22 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 22 times in file |

#### File: `vocabulary/tt/B2/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| B2 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/tt/C1/fluency.js` (20 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 20 times in file |

#### File: `vocabulary/tt/C1/opinions.js` (17 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |
| C1 | *(EMPTY)* | - | `emptyField`, `inSameFileDuplicate` | Word/term field is empty or whitespace-only; Duplicate term '' (no-form) appears 17 times in file |

#### File: `vocabulary/tt/C2/adjectives.js` (118 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `фәнնәрара` | adjective | `inSameFileDuplicate` | Duplicate term 'фәнնәрара' (adjective) appears 2 times in file |
| C2 | `герменевтик` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтик' (adjective) appears 2 times in file |
| C2 | `тавтологик` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологик' (adjective) appears 2 times in file |
| C2 | `күпмәгънәле` | adjective | `inSameFileDuplicate` | Duplicate term 'күпмәгънәле' (adjective) appears 2 times in file |
| C2 | `эвристик` | adjective | `inSameFileDuplicate` | Duplicate term 'эвристик' (adjective) appears 2 times in file |
| C2 | `постколониаль` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониаль' (adjective) appears 2 times in file |
| C2 | `күпполярлы` | adjective | `inSameFileDuplicate` | Duplicate term 'күпполярлы' (adjective) appears 2 times in file |
| C2 | `космополитик` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитик' (adjective) appears 2 times in file |
| C2 | `нарциссик` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссик' (adjective) appears 2 times in file |
| C2 | `гетеродокс` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродокс' (adjective) appears 2 times in file |
| C2 | `имманент` | adjective | `inSameFileDuplicate` | Duplicate term 'имманент' (adjective) appears 2 times in file |
| C2 | `кискен` | adjective | `inSameFileDuplicate` | Duplicate term 'кискен' (adjective) appears 2 times in file |
| C2 | `аңлаешсыз` | adjective | `inSameFileDuplicate` | Duplicate term 'аңлаешсыз' (adjective) appears 2 times in file |
| C2 | `анахроник` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроник' (adjective) appears 2 times in file |
| C2 | `антитетик` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетик' (adjective) appears 2 times in file |
| C2 | `арканлы` | adjective | `inSameFileDuplicate` | Duplicate term 'арканлы' (adjective) appears 2 times in file |
| C2 | `атипик` | adjective | `inSameFileDuplicate` | Duplicate term 'атипик' (adjective) appears 2 times in file |
| C2 | `бинар` | adjective | `inSameFileDuplicate` | Duplicate term 'бинар' (adjective) appears 2 times in file |
| C2 | `категорик` | adjective | `inSameFileDuplicate` | Duplicate term 'категорик' (adjective) appears 2 times in file |
| C2 | `сак` | adjective | `inSameFileDuplicate` | Duplicate term 'сак' (adjective) appears 2 times in file |
| C2 | `яшерен` | adjective | `inSameFileDuplicate` | Duplicate term 'яшерен' (adjective) appears 2 times in file |
| C2 | `диалектик` | adjective | `inSameFileDuplicate` | Duplicate term 'диалектик' (adjective) appears 2 times in file |
| C2 | `диффуз` | adjective | `inSameFileDuplicate` | Duplicate term 'диффуз' (adjective) appears 2 times in file |
| C2 | `тотып булмый торган` | adjective | `inSameFileDuplicate` | Duplicate term 'тотып булмый торган' (adjective) appears 2 times in file |
| C2 | `эзотерик` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерик' (adjective) appears 2 times in file |
| C2 | `хаталы` | adjective | `inSameFileDuplicate` | Duplicate term 'хаталы' (adjective) appears 2 times in file |
| C2 | `үзгәрмәс` | adjective | `inSameFileDuplicate` | Duplicate term 'үзгәрмәс' (adjective) appears 2 times in file |
| C2 | `тарафсыз` | adjective | `inSameFileDuplicate` | Duplicate term 'тарафсыз' (adjective) appears 2 times in file |
| C2 | `өстәмә` | adjective | `inSameFileDuplicate` | Duplicate term 'өстәмә' (adjective) appears 2 times in file |
| C2 | `хас булган` | adjective | `inSameFileDuplicate` | Duplicate term 'хас булган' (adjective) appears 2 times in file |
| C2 | `кабатланмас` | adjective | `inSameFileDuplicate` | Duplicate term 'кабатланмас' (adjective) appears 2 times in file |
| C2 | `хәйләкәр` | adjective | `inSameFileDuplicate` | Duplicate term 'хәйләкәр' (adjective) appears 2 times in file |
| C2 | `килешмәс` | adjective | `inSameFileDuplicate` | Duplicate term 'килешмәс' (adjective) appears 2 times in file |
| C2 | `лиминаль` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминаль' (adjective) appears 2 times in file |
| C2 | `төрле-төрле` | adjective | `inSameFileDuplicate` | Duplicate term 'төрле-төрле' (adjective) appears 2 times in file |
| C2 | `томанлы` | adjective | `inSameFileDuplicate` | Duplicate term 'томанлы' (adjective) appears 2 times in file |
| C2 | `норматив` | adjective | `inSameFileDuplicate` | Duplicate term 'норматив' (adjective) appears 2 times in file |
| C2 | `төсмерле` | adjective | `inSameFileDuplicate` | Duplicate term 'төсмерле' (adjective) appears 2 times in file |
| C2 | `туры булмаган` | adjective | `inSameFileDuplicate` | Duplicate term 'туры булмаган' (adjective) appears 2 times in file |
| C2 | `ачык булмаган` | adjective | `inSameFileDuplicate` | Duplicate term 'ачык булмаган' (adjective) appears 2 times in file |
| C2 | `ялган` | adjective | `inSameFileDuplicate` | Duplicate term 'ялган' (adjective) appears 2 times in file |
| C2 | `парадоксаль` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксаль' (adjective) appears 2 times in file |
| C2 | `киң таралган` | adjective | `inSameFileDuplicate` | Duplicate term 'киң таралган' (adjective) appears 2 times in file |
| C2 | `поляризацияләүче` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризацияләүче' (adjective) appears 2 times in file |
| C2 | `тотрыксыз` | adjective | `inSameFileDuplicate` | Duplicate term 'тотрыксыз' (adjective) appears 2 times in file |
| C2 | `прескриптив` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптив' (adjective) appears 2 times in file |
| C2 | `сузылган` | adjective | `inSameFileDuplicate` | Duplicate term 'сузылган' (adjective) appears 2 times in file |
| C2 | `редуктив` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктив' (adjective) appears 2 times in file |
| C2 | `нигез салучы` | adjective | `inSameFileDuplicate` | Duplicate term 'нигез салучы' (adjective) appears 2 times in file |
| C2 | `ялган сылтаулы` | adjective | `inSameFileDuplicate` | Duplicate term 'ялган сылтаулы' (adjective) appears 2 times in file |
| C2 | `уйдырма` | adjective | `inSameFileDuplicate` | Duplicate term 'уйдырма' (adjective) appears 2 times in file |
| C2 | `җимергеч` | adjective | `inSameFileDuplicate` | Duplicate term 'җимергеч' (adjective) appears 2 times in file |
| C2 | `әйтелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'әйтелмәгән' (adjective) appears 2 times in file |
| C2 | `үткенче` | adjective | `inSameFileDuplicate` | Duplicate term 'үткенче' (adjective) appears 2 times in file |
| C2 | `һәркайдагы` | adjective | `inSameFileDuplicate` | Duplicate term 'һәркайдагы' (adjective) appears 2 times in file |
| C2 | `бермәгънәле` | adjective | `inSameFileDuplicate` | Duplicate term 'бермәгънәле' (adjective) appears 2 times in file |
| C2 | `күрелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'күрелмәгән' (adjective) appears 2 times in file |
| C2 | `нигезсез` | adjective | `inSameFileDuplicate` | Duplicate term 'нигезсез' (adjective) appears 2 times in file |
| C2 | `айкашлы` | adjective | `inSameFileDuplicate` | Duplicate term 'айкашлы' (adjective) appears 2 times in file |
| C2 | `фәнնәрара` | adjective | `inSameFileDuplicate` | Duplicate term 'фәнնәрара' (adjective) appears 2 times in file |
| C2 | `герменевтик` | adjective | `inSameFileDuplicate` | Duplicate term 'герменевтик' (adjective) appears 2 times in file |
| C2 | `тавтологик` | adjective | `inSameFileDuplicate` | Duplicate term 'тавтологик' (adjective) appears 2 times in file |
| C2 | `күпмәгънәле` | adjective | `inSameFileDuplicate` | Duplicate term 'күпмәгънәле' (adjective) appears 2 times in file |
| C2 | `эвристик` | adjective | `inSameFileDuplicate` | Duplicate term 'эвристик' (adjective) appears 2 times in file |
| C2 | `постколониаль` | adjective | `inSameFileDuplicate` | Duplicate term 'постколониаль' (adjective) appears 2 times in file |
| C2 | `күпполярлы` | adjective | `inSameFileDuplicate` | Duplicate term 'күпполярлы' (adjective) appears 2 times in file |
| C2 | `космополитик` | adjective | `inSameFileDuplicate` | Duplicate term 'космополитик' (adjective) appears 2 times in file |
| C2 | `нарциссик` | adjective | `inSameFileDuplicate` | Duplicate term 'нарциссик' (adjective) appears 2 times in file |
| C2 | `гетеродокс` | adjective | `inSameFileDuplicate` | Duplicate term 'гетеродокс' (adjective) appears 2 times in file |
| C2 | `имманент` | adjective | `inSameFileDuplicate` | Duplicate term 'имманент' (adjective) appears 2 times in file |
| C2 | `кискен` | adjective | `inSameFileDuplicate` | Duplicate term 'кискен' (adjective) appears 2 times in file |
| C2 | `аңлаешсыз` | adjective | `inSameFileDuplicate` | Duplicate term 'аңлаешсыз' (adjective) appears 2 times in file |
| C2 | `анахроник` | adjective | `inSameFileDuplicate` | Duplicate term 'анахроник' (adjective) appears 2 times in file |
| C2 | `антитетик` | adjective | `inSameFileDuplicate` | Duplicate term 'антитетик' (adjective) appears 2 times in file |
| C2 | `арканлы` | adjective | `inSameFileDuplicate` | Duplicate term 'арканлы' (adjective) appears 2 times in file |
| C2 | `атипик` | adjective | `inSameFileDuplicate` | Duplicate term 'атипик' (adjective) appears 2 times in file |
| C2 | `бинар` | adjective | `inSameFileDuplicate` | Duplicate term 'бинар' (adjective) appears 2 times in file |
| C2 | `категорик` | adjective | `inSameFileDuplicate` | Duplicate term 'категорик' (adjective) appears 2 times in file |
| C2 | `сак` | adjective | `inSameFileDuplicate` | Duplicate term 'сак' (adjective) appears 2 times in file |
| C2 | `яшерен` | adjective | `inSameFileDuplicate` | Duplicate term 'яшерен' (adjective) appears 2 times in file |
| C2 | `диалектик` | adjective | `inSameFileDuplicate` | Duplicate term 'диалектик' (adjective) appears 2 times in file |
| C2 | `диффуз` | adjective | `inSameFileDuplicate` | Duplicate term 'диффуз' (adjective) appears 2 times in file |
| C2 | `тотып булмый торган` | adjective | `inSameFileDuplicate` | Duplicate term 'тотып булмый торган' (adjective) appears 2 times in file |
| C2 | `эзотерик` | adjective | `inSameFileDuplicate` | Duplicate term 'эзотерик' (adjective) appears 2 times in file |
| C2 | `хаталы` | adjective | `inSameFileDuplicate` | Duplicate term 'хаталы' (adjective) appears 2 times in file |
| C2 | `үзгәрмәс` | adjective | `inSameFileDuplicate` | Duplicate term 'үзгәрмәс' (adjective) appears 2 times in file |
| C2 | `тарафсыз` | adjective | `inSameFileDuplicate` | Duplicate term 'тарафсыз' (adjective) appears 2 times in file |
| C2 | `өстәмә` | adjective | `inSameFileDuplicate` | Duplicate term 'өстәмә' (adjective) appears 2 times in file |
| C2 | `хас булган` | adjective | `inSameFileDuplicate` | Duplicate term 'хас булган' (adjective) appears 2 times in file |
| C2 | `кабатланмас` | adjective | `inSameFileDuplicate` | Duplicate term 'кабатланмас' (adjective) appears 2 times in file |
| C2 | `хәйләкәр` | adjective | `inSameFileDuplicate` | Duplicate term 'хәйләкәр' (adjective) appears 2 times in file |
| C2 | `килешмәс` | adjective | `inSameFileDuplicate` | Duplicate term 'килешмәс' (adjective) appears 2 times in file |
| C2 | `лиминаль` | adjective | `inSameFileDuplicate` | Duplicate term 'лиминаль' (adjective) appears 2 times in file |
| C2 | `төрле-төрле` | adjective | `inSameFileDuplicate` | Duplicate term 'төрле-төрле' (adjective) appears 2 times in file |
| C2 | `томанлы` | adjective | `inSameFileDuplicate` | Duplicate term 'томанлы' (adjective) appears 2 times in file |
| C2 | `норматив` | adjective | `inSameFileDuplicate` | Duplicate term 'норматив' (adjective) appears 2 times in file |
| C2 | `төсмерле` | adjective | `inSameFileDuplicate` | Duplicate term 'төсмерле' (adjective) appears 2 times in file |
| C2 | `туры булмаган` | adjective | `inSameFileDuplicate` | Duplicate term 'туры булмаган' (adjective) appears 2 times in file |
| C2 | `ачык булмаган` | adjective | `inSameFileDuplicate` | Duplicate term 'ачык булмаган' (adjective) appears 2 times in file |
| C2 | `ялган` | adjective | `inSameFileDuplicate` | Duplicate term 'ялган' (adjective) appears 2 times in file |
| C2 | `парадоксаль` | adjective | `inSameFileDuplicate` | Duplicate term 'парадоксаль' (adjective) appears 2 times in file |
| C2 | `киң таралган` | adjective | `inSameFileDuplicate` | Duplicate term 'киң таралган' (adjective) appears 2 times in file |
| C2 | `поляризацияләүче` | adjective | `inSameFileDuplicate` | Duplicate term 'поляризацияләүче' (adjective) appears 2 times in file |
| C2 | `тотрыксыз` | adjective | `inSameFileDuplicate` | Duplicate term 'тотрыксыз' (adjective) appears 2 times in file |
| C2 | `прескриптив` | adjective | `inSameFileDuplicate` | Duplicate term 'прескриптив' (adjective) appears 2 times in file |
| C2 | `сузылган` | adjective | `inSameFileDuplicate` | Duplicate term 'сузылган' (adjective) appears 2 times in file |
| C2 | `редуктив` | adjective | `inSameFileDuplicate` | Duplicate term 'редуктив' (adjective) appears 2 times in file |
| C2 | `нигез салучы` | adjective | `inSameFileDuplicate` | Duplicate term 'нигез салучы' (adjective) appears 2 times in file |
| C2 | `ялган сылтаулы` | adjective | `inSameFileDuplicate` | Duplicate term 'ялган сылтаулы' (adjective) appears 2 times in file |
| C2 | `уйдырма` | adjective | `inSameFileDuplicate` | Duplicate term 'уйдырма' (adjective) appears 2 times in file |
| C2 | `җимергеч` | adjective | `inSameFileDuplicate` | Duplicate term 'җимергеч' (adjective) appears 2 times in file |
| C2 | `әйтелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'әйтелмәгән' (adjective) appears 2 times in file |
| C2 | `үткенче` | adjective | `inSameFileDuplicate` | Duplicate term 'үткенче' (adjective) appears 2 times in file |
| C2 | `һәркайдагы` | adjective | `inSameFileDuplicate` | Duplicate term 'һәркайдагы' (adjective) appears 2 times in file |
| C2 | `бермәгънәле` | adjective | `inSameFileDuplicate` | Duplicate term 'бермәгънәле' (adjective) appears 2 times in file |
| C2 | `күрелмәгән` | adjective | `inSameFileDuplicate` | Duplicate term 'күрелмәгән' (adjective) appears 2 times in file |
| C2 | `нигезсез` | adjective | `inSameFileDuplicate` | Duplicate term 'нигезсез' (adjective) appears 2 times in file |
| C2 | `айкашлы` | adjective | `inSameFileDuplicate` | Duplicate term 'айкашлы' (adjective) appears 2 times in file |

#### File: `vocabulary/tt/C2/verbs.js` (110 flagged entries)

| Level | Term / Word | Form | Issue Types | Issue Details |
| :---: | :--- | :---: | :--- | :--- |
| C2 | `реификацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'реификацияләргә' (verb) appears 2 times in file |
| C2 | `сублимацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'сублимацияләргә' (verb) appears 2 times in file |
| C2 | `предицировать итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'предицировать итәргә' (verb) appears 2 times in file |
| C2 | `гәүдәләндерергә` | verb | `inSameFileDuplicate` | Duplicate term 'гәүдәләндерергә' (verb) appears 2 times in file |
| C2 | `инкарь итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'инкарь итәргә' (verb) appears 2 times in file |
| C2 | `чиктән узгарга` | verb | `inSameFileDuplicate` | Duplicate term 'чиктән узгарга' (verb) appears 2 times in file |
| C2 | `арадашчы булырга` | verb | `inSameFileDuplicate` | Duplicate term 'арадашчы булырга' (verb) appears 2 times in file |
| C2 | `төшереп калдырырга` | verb | `inSameFileDuplicate` | Duplicate term 'төшереп калдырырга' (verb) appears 2 times in file |
| C2 | `бутарга` | verb | `inSameFileDuplicate` | Duplicate term 'бутарга' (verb) appears 2 times in file |
| C2 | `кушып бутарга` | verb | `inSameFileDuplicate` | Duplicate term 'кушып бутарга' (verb) appears 2 times in file |
| C2 | `мөрәҗәгать итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'мөрәҗәгать итәргә' (verb) appears 2 times in file |
| C2 | `алгы планга чыгарырга` | verb | `inSameFileDuplicate` | Duplicate term 'алгы планга чыгарырга' (verb) appears 2 times in file |
| C2 | `үзләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'үзләштерергә' (verb) appears 2 times in file |
| C2 | `дестабилизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'дестабилизацияләргә' (verb) appears 2 times in file |
| C2 | `товарлаштырырга` | verb | `inSameFileDuplicate` | Duplicate term 'товарлаштырырга' (verb) appears 2 times in file |
| C2 | `инструментальләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'инструментальләштерергә' (verb) appears 2 times in file |
| C2 | `валоризацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'валоризацияләргә' (verb) appears 2 times in file |
| C2 | `фетишизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'фетишизацияләргә' (verb) appears 2 times in file |
| C2 | `ятлаштырырга` | verb | `inSameFileDuplicate` | Duplicate term 'ятлаштырырга' (verb) appears 2 times in file |
| C2 | `чикләрен билгеләргә` | verb | `inSameFileDuplicate` | Duplicate term 'чикләрен билгеләргә' (verb) appears 2 times in file |
| C2 | `чикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'чикләргә' (verb) appears 2 times in file |
| C2 | `каршы торырга` | verb | `inSameFileDuplicate` | Duplicate term 'каршы торырга' (verb) appears 2 times in file |
| C2 | `бозарга` | verb | `inSameFileDuplicate` | Duplicate term 'бозарга' (verb) appears 4 times in file |
| C2 | `кире кагарга` | verb | `inSameFileDuplicate` | Duplicate term 'кире кагарга' (verb) appears 2 times in file |
| C2 | `юкка чыгарырга` | verb | `inSameFileDuplicate` | Duplicate term 'юкка чыгарырга' (verb) appears 2 times in file |
| C2 | `бозарга` | verb | `inSameFileDuplicate` | Duplicate term 'бозарга' (verb) appears 4 times in file |
| C2 | `кертергә` | verb | `inSameFileDuplicate` | Duplicate term 'кертергә' (verb) appears 2 times in file |
| C2 | `деконструкцияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'деконструкцияләргә' (verb) appears 2 times in file |
| C2 | `алдан чикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'алдан чикләргә' (verb) appears 2 times in file |
| C2 | `диалектизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'диалектизацияләргә' (verb) appears 2 times in file |
| C2 | `гегемонизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'гегемонизацияләргә' (verb) appears 2 times in file |
| C2 | `ассызыкларга` | verb | `inSameFileDuplicate` | Duplicate term 'ассызыкларга' (verb) appears 2 times in file |
| C2 | `ризалашырга` | verb | `inSameFileDuplicate` | Duplicate term 'ризалашырга' (verb) appears 2 times in file |
| C2 | `җиңеләйтергә` | verb | `inSameFileDuplicate` | Duplicate term 'җиңеләйтергә' (verb) appears 2 times in file |
| C2 | `әйләнеп узарга` | verb | `inSameFileDuplicate` | Duplicate term 'әйләнеп узарга' (verb) appears 2 times in file |
| C2 | `раслый торган дәлил китерергә` | verb | `inSameFileDuplicate` | Duplicate term 'раслый торган дәлил китерергә' (verb) appears 2 times in file |
| C2 | `таратырга` | verb | `inSameFileDuplicate` | Duplicate term 'таратырга' (verb) appears 2 times in file |
| C2 | `кулланырга` | verb | `inSameFileDuplicate` | Duplicate term 'кулланырга' (verb) appears 2 times in file |
| C2 | `тудырырга` | verb | `inSameFileDuplicate` | Duplicate term 'тудырырга' (verb) appears 2 times in file |
| C2 | `кискенләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'кискенләштерергә' (verb) appears 2 times in file |
| C2 | `үрнәк булырга` | verb | `inSameFileDuplicate` | Duplicate term 'үрнәк булырга' (verb) appears 2 times in file |
| C2 | `аяк чалырга` | verb | `inSameFileDuplicate` | Duplicate term 'аяк чалырга' (verb) appears 2 times in file |
| C2 | `йомшартырга` | verb | `inSameFileDuplicate` | Duplicate term 'йомшартырга' (verb) appears 2 times in file |
| C2 | `мәҗбүр итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'мәҗбүр итәргә' (verb) appears 2 times in file |
| C2 | `таралырга` | verb | `inSameFileDuplicate` | Duplicate term 'таралырга' (verb) appears 2 times in file |
| C2 | `искәртергә` | verb | `inSameFileDuplicate` | Duplicate term 'искәртергә' (verb) appears 2 times in file |
| C2 | `килештерергә` | verb | `inSameFileDuplicate` | Duplicate term 'килештерергә' (verb) appears 2 times in file |
| C2 | `алыштырырга` | verb | `inSameFileDuplicate` | Duplicate term 'алыштырырга' (verb) appears 2 times in file |
| C2 | `нигезләнергә` | verb | `inSameFileDuplicate` | Duplicate term 'нигезләнергә' (verb) appears 2 times in file |
| C2 | `акларга` | verb | `inSameFileDuplicate` | Duplicate term 'акларга' (verb) appears 2 times in file |
| C2 | `бәйле булырга` | verb | `inSameFileDuplicate` | Duplicate term 'бәйле булырга' (verb) appears 2 times in file |
| C2 | `ишләргә` | verb | `inSameFileDuplicate` | Duplicate term 'ишләргә' (verb) appears 2 times in file |
| C2 | `өстән-өстән үтәргә` | verb | `inSameFileDuplicate` | Duplicate term 'өстән-өстән үтәргә' (verb) appears 2 times in file |
| C2 | `яшерергә` | verb | `inSameFileDuplicate` | Duplicate term 'яшерергә' (verb) appears 2 times in file |
| C2 | `парадигма үзгәрү` | verb | `inSameFileDuplicate` | Duplicate term 'парадигма үзгәрү' (verb) appears 2 times in file |
| C2 | `реификацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'реификацияләргә' (verb) appears 2 times in file |
| C2 | `сублимацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'сублимацияләргә' (verb) appears 2 times in file |
| C2 | `предицировать итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'предицировать итәргә' (verb) appears 2 times in file |
| C2 | `гәүдәләндерергә` | verb | `inSameFileDuplicate` | Duplicate term 'гәүдәләндерергә' (verb) appears 2 times in file |
| C2 | `инкарь итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'инкарь итәргә' (verb) appears 2 times in file |
| C2 | `чиктән узгарга` | verb | `inSameFileDuplicate` | Duplicate term 'чиктән узгарга' (verb) appears 2 times in file |
| C2 | `арадашчы булырга` | verb | `inSameFileDuplicate` | Duplicate term 'арадашчы булырга' (verb) appears 2 times in file |
| C2 | `төшереп калдырырга` | verb | `inSameFileDuplicate` | Duplicate term 'төшереп калдырырга' (verb) appears 2 times in file |
| C2 | `бутарга` | verb | `inSameFileDuplicate` | Duplicate term 'бутарга' (verb) appears 2 times in file |
| C2 | `кушып бутарга` | verb | `inSameFileDuplicate` | Duplicate term 'кушып бутарга' (verb) appears 2 times in file |
| C2 | `мөрәҗәгать итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'мөрәҗәгать итәргә' (verb) appears 2 times in file |
| C2 | `алгы планга чыгарырга` | verb | `inSameFileDuplicate` | Duplicate term 'алгы планга чыгарырга' (verb) appears 2 times in file |
| C2 | `үзләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'үзләштерергә' (verb) appears 2 times in file |
| C2 | `дестабилизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'дестабилизацияләргә' (verb) appears 2 times in file |
| C2 | `товарлаштырырга` | verb | `inSameFileDuplicate` | Duplicate term 'товарлаштырырга' (verb) appears 2 times in file |
| C2 | `инструментальләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'инструментальләштерергә' (verb) appears 2 times in file |
| C2 | `валоризацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'валоризацияләргә' (verb) appears 2 times in file |
| C2 | `фетишизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'фетишизацияләргә' (verb) appears 2 times in file |
| C2 | `ятлаштырырга` | verb | `inSameFileDuplicate` | Duplicate term 'ятлаштырырга' (verb) appears 2 times in file |
| C2 | `чикләрен билгеләргә` | verb | `inSameFileDuplicate` | Duplicate term 'чикләрен билгеләргә' (verb) appears 2 times in file |
| C2 | `чикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'чикләргә' (verb) appears 2 times in file |
| C2 | `каршы торырга` | verb | `inSameFileDuplicate` | Duplicate term 'каршы торырга' (verb) appears 2 times in file |
| C2 | `бозарга` | verb | `inSameFileDuplicate` | Duplicate term 'бозарга' (verb) appears 4 times in file |
| C2 | `кире кагарга` | verb | `inSameFileDuplicate` | Duplicate term 'кире кагарга' (verb) appears 2 times in file |
| C2 | `юкка чыгарырга` | verb | `inSameFileDuplicate` | Duplicate term 'юкка чыгарырга' (verb) appears 2 times in file |
| C2 | `бозарга` | verb | `inSameFileDuplicate` | Duplicate term 'бозарга' (verb) appears 4 times in file |
| C2 | `кертергә` | verb | `inSameFileDuplicate` | Duplicate term 'кертергә' (verb) appears 2 times in file |
| C2 | `деконструкцияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'деконструкцияләргә' (verb) appears 2 times in file |
| C2 | `алдан чикләргә` | verb | `inSameFileDuplicate` | Duplicate term 'алдан чикләргә' (verb) appears 2 times in file |
| C2 | `диалектизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'диалектизацияләргә' (verb) appears 2 times in file |
| C2 | `гегемонизацияләргә` | verb | `inSameFileDuplicate` | Duplicate term 'гегемонизацияләргә' (verb) appears 2 times in file |
| C2 | `ассызыкларга` | verb | `inSameFileDuplicate` | Duplicate term 'ассызыкларга' (verb) appears 2 times in file |
| C2 | `ризалашырга` | verb | `inSameFileDuplicate` | Duplicate term 'ризалашырга' (verb) appears 2 times in file |
| C2 | `җиңеләйтергә` | verb | `inSameFileDuplicate` | Duplicate term 'җиңеләйтергә' (verb) appears 2 times in file |
| C2 | `әйләнеп узарга` | verb | `inSameFileDuplicate` | Duplicate term 'әйләнеп узарга' (verb) appears 2 times in file |
| C2 | `раслый торган дәлил китерергә` | verb | `inSameFileDuplicate` | Duplicate term 'раслый торган дәлил китерергә' (verb) appears 2 times in file |
| C2 | `таратырга` | verb | `inSameFileDuplicate` | Duplicate term 'таратырга' (verb) appears 2 times in file |
| C2 | `кулланырга` | verb | `inSameFileDuplicate` | Duplicate term 'кулланырга' (verb) appears 2 times in file |
| C2 | `тудырырга` | verb | `inSameFileDuplicate` | Duplicate term 'тудырырга' (verb) appears 2 times in file |
| C2 | `кискенләштерергә` | verb | `inSameFileDuplicate` | Duplicate term 'кискенләштерергә' (verb) appears 2 times in file |
| C2 | `үрнәк булырга` | verb | `inSameFileDuplicate` | Duplicate term 'үрнәк булырга' (verb) appears 2 times in file |
| C2 | `аяк чалырга` | verb | `inSameFileDuplicate` | Duplicate term 'аяк чалырга' (verb) appears 2 times in file |
| C2 | `йомшартырга` | verb | `inSameFileDuplicate` | Duplicate term 'йомшартырга' (verb) appears 2 times in file |
| C2 | `мәҗбүр итәргә` | verb | `inSameFileDuplicate` | Duplicate term 'мәҗбүр итәргә' (verb) appears 2 times in file |
| C2 | `таралырга` | verb | `inSameFileDuplicate` | Duplicate term 'таралырга' (verb) appears 2 times in file |
| C2 | `искәртергә` | verb | `inSameFileDuplicate` | Duplicate term 'искәртергә' (verb) appears 2 times in file |
| C2 | `килештерергә` | verb | `inSameFileDuplicate` | Duplicate term 'килештерергә' (verb) appears 2 times in file |
| C2 | `алыштырырга` | verb | `inSameFileDuplicate` | Duplicate term 'алыштырырга' (verb) appears 2 times in file |
| C2 | `нигезләнергә` | verb | `inSameFileDuplicate` | Duplicate term 'нигезләнергә' (verb) appears 2 times in file |
| C2 | `акларга` | verb | `inSameFileDuplicate` | Duplicate term 'акларга' (verb) appears 2 times in file |
| C2 | `бәйле булырга` | verb | `inSameFileDuplicate` | Duplicate term 'бәйле булырга' (verb) appears 2 times in file |
| C2 | `ишләргә` | verb | `inSameFileDuplicate` | Duplicate term 'ишләргә' (verb) appears 2 times in file |
| C2 | `өстән-өстән үтәргә` | verb | `inSameFileDuplicate` | Duplicate term 'өстән-өстән үтәргә' (verb) appears 2 times in file |
| C2 | `яшерергә` | verb | `inSameFileDuplicate` | Duplicate term 'яшерергә' (verb) appears 2 times in file |
| C2 | `парадигма үзгәрү` | verb | `inSameFileDuplicate` | Duplicate term 'парадигма үзгәрү' (verb) appears 2 times in file |

---

## 4. Issue Type Definitions & Examples

### Issue Type 1: Empty / Whitespace Fields (`emptyField`)
- **Definition:** The term/word field is empty/whitespace OR all definition, example, and sample text fields in the entry are empty or whitespace-only.
- **Example:**
  ```json
  // In vocabulary/fr/B2/vocabulary.js
  {
    "word": "",
    "definitions": [],
    "form": "noun"
  }
  ```

### Issue Type 2: In-File Duplicates (`inSameFileDuplicate`)
- **Definition:** Multiple entries within the same file share the exact same `word` and `form` (e.g., repeated prompts or duplicated cards in `fluency.js`, `debates.js`, or `quotes.js`).
- **Example:**
  ```javascript
  // In vocabulary/ru/B1/debates.js - Same debate question repeated twice in the same array
  { "word": "Удаленная работа против работы в офисе: что лучше?" }
  { "word": "Удаленная работа против работы в офисе: что лучше?" }
  ```

### Issue Type 3: Template / Placeholder Artifacts (`placeholderArtifact`)
- **Definition:** The entry contains developer TODO comments, literal `"undefined"`, `"{{"` / `"}}"` curly brace template syntax, or unrendered `"[object Object]"` strings.
- **Example:**
  ```javascript
  // In vocabulary/de/A2/vocabulary.js
  // TODO: verify level classification
  { "word": "undefined", "subtext": "TODO: fill example" }
  ```

---

## 5. Pre-Migration Action Plan & Recommendations

1. **Purge In-File Duplicates:**
   - Deduplicate entries in `fluency.js`, `debates.js`, `quotes.js`, and `opinions.js` prior to importing into `COSYdata`.
2. **Filter Out Empty Stubs:**
   - Exclude the 745 empty/whitespace stub entries during dataset intake into `COSYdata`.
3. **Remediate Placeholder Artifacts:**
   - Clean up developer notes (`"TODO"`, `"undefined"`) and populate proper target-language definitions/examples before canonical ingestion.
4. **Maintain Audit-Only Status:**
   - Zero local files in `vocabulary/` have been modified or deleted in this audit pass.

---

*Report generated automatically by `scripts/build_quality_markdown_report.js` in COSYlanguages repository.*

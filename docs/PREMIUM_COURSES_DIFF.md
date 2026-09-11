# Premium Courses & Curriculum Diff Report vs COSYmanuals

**Date:** 2026-09-11
**Source Locations:**
- Local: `apps/premium-courses/` & `curriculum/`
- Remote / Target: COSYmanuals (`curriculums/{iso}/{course_type}/{LEVEL}.json`)

---

## 1. Executive Summary

This report presents a read-only structural comparison between local curriculum datasets in **COSYlanguages** (`apps/premium-courses/` and `curriculum/`) and the equivalent CEFR curriculum files in **COSYmanuals**.

- **Total Combinations Analyzed:** 95
- **Identical Combinations:** 76
- **Divergent Combinations:** 7
- **Local-Only Combinations:** 12
- **COSYmanuals-Only Combinations:** 0

> **Note:** This is a read-only diagnostic report to inform human decisions on which unique content in `premium-courses` or `curriculum/` needs to be carried over into `cosyplatform` and `COSYmanuals`.

---

## 2. Track & Level Comparison Matrix

| Target Language | Course Track | CEFR Level | Local Units / Lessons | COSYmanuals Units / Lessons | Status | Notes |
|---|---|---|---|---|---|---|
| `BA` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Divergent** | Title / Content variations |
| `BA` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Divergent** | Title / Content variations |
| `BR` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `BR` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `DE` | `general` | `A1` | 2 u / 8 l | 2 u / 8 l | **Identical** | 100% Structural Sync |
| `DE` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `EL` | `exam` | `C1` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `EL` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `EL` | `general` | `A2` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `EL` | `general` | `B1` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `EL` | `general` | `B2` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `EL` | `general` | `C1` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `EL` | `general` | `C2` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `EN` | `exam` | `B1` | 5 u / 25 l | 5 u / 25 l | **Identical** | 100% Structural Sync |
| `EN` | `exam` | `B2` | 5 u / 25 l | 5 u / 25 l | **Identical** | 100% Structural Sync |
| `EN` | `exam` | `C1` | 5 u / 25 l | 5 u / 25 l | **Identical** | 100% Structural Sync |
| `EN` | `exam` | `C2` | 5 u / 25 l | 5 u / 25 l | **Identical** | 100% Structural Sync |
| `EN` | `general` | `A1` | 10 u / 50 l | 10 u / 50 l | **Identical** | 100% Structural Sync |
| `EN` | `general` | `A2` | 10 u / 20 l | 10 u / 20 l | **Identical** | 100% Structural Sync |
| `EN` | `general` | `B1` | 10 u / 20 l | 10 u / 20 l | **Identical** | 100% Structural Sync |
| `EN` | `general` | `B2` | 10 u / 20 l | 10 u / 20 l | **Identical** | 100% Structural Sync |
| `EN` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `EN` | `general` | `C2` | 10 u / 20 l | 10 u / 20 l | **Identical** | 100% Structural Sync |
| `EN` | `general` | `UNKNOWN` | 2 u / 8 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `EN` | `professional` | `B1` | 8 u / 32 l | 8 u / 32 l | **Identical** | 100% Structural Sync |
| `EN` | `professional` | `B2` | 8 u / 32 l | 8 u / 32 l | **Identical** | 100% Structural Sync |
| `EN` | `professional` | `C1` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `EN` | `professional` | `C2` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `EN` | `relocation` | `A2` | 1 u / 2 l | 1 u / 2 l | **Identical** | 100% Structural Sync |
| `EN` | `relocation` | `B1` | 1 u / 2 l | 1 u / 2 l | **Identical** | 100% Structural Sync |
| `EN` | `relocation` | `B2` | 1 u / 2 l | 1 u / 2 l | **Identical** | 100% Structural Sync |
| `EN` | `relocation` | `C1` | 1 u / 1 l | 1 u / 1 l | **Identical** | 100% Structural Sync |
| `EN` | `spoken` | `A1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `EN` | `spoken` | `A2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `EN` | `spoken` | `B1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `EN` | `spoken` | `B2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `EN` | `spoken` | `C1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `EN` | `spoken` | `C2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `EN` | `travelling` | `A1` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `EN` | `travelling` | `A2` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `EN` | `travelling` | `B1` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `ES` | `general` | `A1` | 2 u / 9 l | 2 u / 9 l | **Identical** | 100% Structural Sync |
| `ES` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `FR` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `FR` | `general` | `A2` | 10 u / 50 l | 10 u / 50 l | **Identical** | 100% Structural Sync |
| `FR` | `general` | `B1` | 10 u / 50 l | 10 u / 50 l | **Identical** | 100% Structural Sync |
| `FR` | `general` | `B2` | 10 u / 50 l | 10 u / 50 l | **Identical** | 100% Structural Sync |
| `FR` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `FR` | `general` | `C2` | 10 u / 20 l | 10 u / 20 l | **Identical** | 100% Structural Sync |
| `FR` | `professional` | `B1` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `FR` | `professional` | `B2` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `FR` | `professional` | `C1` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `FR` | `professional` | `C2` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `FR` | `spoken` | `A1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `FR` | `spoken` | `A2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `FR` | `spoken` | `B1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `FR` | `spoken` | `B2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `FR` | `spoken` | `C1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `FR` | `spoken` | `C2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `FR` | `travelling` | `A1` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `FR` | `travelling` | `A2` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `FR` | `travelling` | `B1` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `HY` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `HY` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `IT` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `IT` | `general` | `A2` | 1 u / 2 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `IT` | `general` | `B1` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `IT` | `general` | `B2` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `IT` | `general` | `C1` | 5 u / 15 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `IT` | `general` | `C2` | 1 u / 1 l | Not Found | **Local Only** | Unique to premium-courses/curriculum |
| `KA` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `KA` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `PT` | `general` | `A1` | 2 u / 8 l | 2 u / 8 l | **Identical** | 100% Structural Sync |
| `PT` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Identical** | 100% Structural Sync |
| `RU` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `RU` | `general` | `A2` | 10 u / 50 l | 10 u / 50 l | **Divergent** | Title / Content variations |
| `RU` | `general` | `B1` | 10 u / 50 l | 10 u / 50 l | **Identical** | 100% Structural Sync |
| `RU` | `general` | `B2` | 10 u / 50 l | 10 u / 50 l | **Identical** | 100% Structural Sync |
| `RU` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Divergent** | Title / Content variations |
| `RU` | `general` | `C2` | 10 u / 20 l | 10 u / 20 l | **Identical** | 100% Structural Sync |
| `RU` | `professional` | `B1` | 6 u / 24 l | 6 u / 24 l | **Divergent** | Title / Content variations |
| `RU` | `professional` | `B2` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `RU` | `professional` | `C1` | 6 u / 24 l | 6 u / 24 l | **Identical** | 100% Structural Sync |
| `RU` | `professional` | `C2` | 6 u / 24 l | 6 u / 24 l | **Divergent** | Title / Content variations |
| `RU` | `spoken` | `A1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `RU` | `spoken` | `A2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `RU` | `spoken` | `B1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `RU` | `spoken` | `B2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `RU` | `spoken` | `C1` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `RU` | `spoken` | `C2` | 6 u / 30 l | 6 u / 30 l | **Identical** | 100% Structural Sync |
| `RU` | `travelling` | `A1` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `RU` | `travelling` | `A2` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `RU` | `travelling` | `B1` | 5 u / 20 l | 5 u / 20 l | **Identical** | 100% Structural Sync |
| `TT` | `general` | `A1` | 6 u / 55 l | 6 u / 55 l | **Identical** | 100% Structural Sync |
| `TT` | `general` | `C1` | 7 u / 21 l | 7 u / 21 l | **Divergent** | Title / Content variations |

---

## 3. Detailed Divergent Track Analysis

### 3.1 `BA` — `general` (A1)

- **Local File:** `curriculum/ba/general/A1.json`
- **COSYmanuals Source:** `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/ba/general/A1.json`
- **Status:** **Divergent**

#### Unit & Lesson Level Divergences:
##### Unit 1:
- **Lesson Content Differences:**
  - Lesson 7: Grammar ([Конструкция "У меня болит..."] vs [Кон��трукция "У меня болит..."])
##### Unit 3:
- **Lesson Content Differences:**
  - Lesson 7: Title ("Минең вәғәҙәләрем" vs "Минең вәғәҙәләр��м")
##### Unit 4:
- **Lesson Content Differences:**
  - Lesson 9: Grammar ([Описание характера] vs [Опи��ание характера])

### 3.2 `BA` — `general` (C1)

- **Local File:** `curriculum/ba/general/C1.json`
- **COSYmanuals Source:** `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/ba/general/C1.json`
- **Status:** **Divergent**

#### Unit & Lesson Level Divergences:
##### Unit 2:
- **Lesson Content Differences:**
  - Lesson 2: Grammar ([Исем ҡылым һәм рәүешшәкел нигеҙендәге аналитик саралар (-рға теешлеге хаҡында, -у бәйле рәүештә), Рәсми-эшлекле стилдә хәл ҡылым һәм исем ҡылым синтаксисы] vs [Исем ҡылым һә�� рәүешшәкел нигеҙендәге аналитик саралар (-рға теешлеге хаҡында, -у бәйле рәүештә), Рәсми-эшлекле стилдә хәл ҡылым һәм исем ҡылым синтаксисы])
  - Lesson 3: Grammar ([Җөмләнең логик үҙәген айырыу саралары (Нәҡ менән шушы реформа..., Дәүләт тарафынан ҡаралған...), Парламент бәхәстәре риторикаһы һәм риторик һорауҙар] vs [Җөмләнең логик үҙәген айырыу саралары (Нәҡ менән шушы реформа..., Дәүләт тарафынан ҡаралған...), Парл��мент бәхәстәре риторикаһы һәм риторик һорауҙар])
##### Unit 4:
- **Lesson Content Differences:**
  - Lesson 1: Vocab count (10 vs 10)
  - Lesson 2: Grammar ([Мөмкинлек һәм ихтималлыҡ белдереүсе модаль грамматик саралар (-рға мөмкин, -рға теештер, -һа кәрәк), Текст эсендәге академик аңлатмалар һәм автор позицияһын биреү конструкциялары] vs [Мөмкинлек һәм ихтималлыҡ белдереүсе модаль грамматик саралар (-рға мөмкин, -рға теештер, -һа кәрәк), Текст эсендәге академик а��латмалар һәм автор позицияһын биреү конструкциялары])
  - Lesson 3: Vocab count (5 vs 5)

### 3.7 `EL` — `exam` (C1)

- **Local File:** `curriculum/el/exam/_out_of_scope/C1.js`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.9 `EL` — `general` (A2)

- **Local File:** `curriculum/el/general/_out_of_scope/A2.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.10 `EL` — `general` (B1)

- **Local File:** `curriculum/el/general/_out_of_scope/B1.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.11 `EL` — `general` (B2)

- **Local File:** `curriculum/el/general/_out_of_scope/B2.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.12 `EL` — `general` (C1)

- **Local File:** `curriculum/el/general/_out_of_scope/C1.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.13 `EL` — `general` (C2)

- **Local File:** `curriculum/el/general/_out_of_scope/C2.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.24 `EN` — `general` (UNKNOWN)

- **Local File:** `curriculum/_archive/pt_A1.js`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **2 units** and **8 lessons**, but does not exist in COSYmanuals.

### 3.66 `IT` — `general` (A2)

- **Local File:** `curriculum/it/general/_out_of_scope/A2.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **2 lessons**, but does not exist in COSYmanuals.

### 3.67 `IT` — `general` (B1)

- **Local File:** `curriculum/it/general/_out_of_scope/B1.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.68 `IT` — `general` (B2)

- **Local File:** `curriculum/it/general/_out_of_scope/B2.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.69 `IT` — `general` (C1)

- **Local File:** `curriculum/it/general/_out_of_scope/C1.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **5 units** and **15 lessons**, but does not exist in COSYmanuals.

### 3.70 `IT` — `general` (C2)

- **Local File:** `curriculum/it/general/_out_of_scope/C2.json`
- **COSYmanuals Source:** `Not Found`
- **Status:** **Local Only**

> **Unique Local Content:** This combination exists in `premium-courses/curriculum` with **1 units** and **1 lessons**, but does not exist in COSYmanuals.

### 3.76 `RU` — `general` (A2)

- **Local File:** `curriculum/ru/general/A2.json`
- **COSYmanuals Source:** `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/ru/general/A2.json`
- **Status:** **Divergent**

#### Unit & Lesson Level Divergences:
##### Unit 5:
- **Lesson Content Differences:**
  - Lesson 5: Vocab count (8 vs 8)

### 3.79 `RU` — `general` (C1)

- **Local File:** `curriculum/ru/general/C1.json`
- **COSYmanuals Source:** `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/ru/general/C1.json`
- **Status:** **Divergent**

#### Unit & Lesson Level Divergences:
##### Unit 4:
- **Lesson Content Differences:**
  - Lesson 1: Vocab count (10 vs 10)

### 3.81 `RU` — `professional` (B1)

- **Local File:** `curriculum/ru/professional/B1.json`
- **COSYmanuals Source:** `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/ru/professional/B1.json`
- **Status:** **Divergent**

#### Unit & Lesson Level Divergences:
##### Unit 3:
- **Lesson Content Differences:**
  - Lesson 3: Grammar ([Наречия последовательности (сначала, затем, после того как), Страдательные конструкции для описания алгоритма действий] vs [Н��речия последовательности (сначала, затем, после того как), Страдательные конструкции для описания алгоритма действий])

### 3.84 `RU` — `professional` (C2)

- **Local File:** `curriculum/ru/professional/C2.json`
- **COSYmanuals Source:** `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/ru/professional/C2.json`
- **Status:** **Divergent**

#### Unit & Lesson Level Divergences:
##### Unit 5:
- **Lesson Content Differences:**
  - Lesson 3: Title ("Патронаж мировых культурных и спортивных событий" vs "Патронаж миро��ых культурных и спортивных событий")

### 3.95 `TT` — `general` (C1)

- **Local File:** `curriculum/tt/general/C1.json`
- **COSYmanuals Source:** `https://raw.githubusercontent.com/cosylanguages/COSYmanuals/main/curriculums/tt/general/C1.json`
- **Status:** **Divergent**

#### Unit & Lesson Level Divergences:
##### Unit 4:
- **Lesson Content Differences:**
  - Lesson 3: Vocab count (5 vs 5)

---

## 4. Recommendations & Carry-Over Action Plan

1. **Local-Only Content Preservation:** Preserve all local-only curriculum files identified in Section 3 and carry them over to `cosyplatform` and `COSYmanuals`.
2. **Divergent Track Alignment:** For tracks where local `premium-courses` contains richer metadata (e.g. detailed teacher notes, IPA pronunciation guides, or recycled knowledge tags), merge those fields into COSYmanuals without overwriting COSYmanuals's unit structures.
3. **Zero Deletion Safety:** No files have been deleted or modified during this audit. All decisions should be reviewed by curriculum authors before final migration to `cosyplatform`.

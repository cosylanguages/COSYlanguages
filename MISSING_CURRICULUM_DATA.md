# Missing Curriculum Data Gap List

This document lists all non-general English track and level combinations defined in `data/courses/courses.json` (`available_levels`) that currently lack underlying curriculum JSON data files under `curriculum/en/`.

## English Course Tracks Gap Summary

| Track | Track ID | Available Levels | Missing Curriculum Data Files |
|---|---|---|---|
| Spoken | `spoken` | A1, A2, B1, B2, C1, C2 | 6 files missing |
| Exam Preparation | `exam` | B1, B2, C1, C2 | 4 files missing |
| Travelling | `travelling` | A1, A2, B1 | 3 files missing |
| Professional | `professional` | B1, B2, C1, C2 | 4 files missing |
| Relocation | `relocation` | A2, B1, B2, C1 | 4 files missing |

---

## Detailed Missing Files List

The following 21 `curriculum/en/<track>/<level>.json` files need real curriculum content authored before their corresponding HTML pages in `apps/premium-courses/<track>/en/<level>.html` can be wired:

### 1. Spoken Track (`spoken`)
- `curriculum/en/spoken/A1.json`
- `curriculum/en/spoken/A2.json`
- `curriculum/en/spoken/B1.json`
- `curriculum/en/spoken/B2.json`
- `curriculum/en/spoken/C1.json`
- `curriculum/en/spoken/C2.json`

### 2. Exam Preparation Track (`exam`)
- `curriculum/en/exam/B1.json`
- `curriculum/en/exam/B2.json`
- `curriculum/en/exam/C1.json`
- `curriculum/en/exam/C2.json`

### 3. Travelling Track (`travelling`)
- `curriculum/en/travelling/A1.json`
- `curriculum/en/travelling/A2.json`
- `curriculum/en/travelling/B1.json`

### 4. Professional Track (`professional`)
- `curriculum/en/professional/B1.json`
- `curriculum/en/professional/B2.json`
- `curriculum/en/professional/C1.json`
- `curriculum/en/professional/C2.json`

### 5. Relocation Track (`relocation`)
- `curriculum/en/relocation/A2.json`
- `curriculum/en/relocation/B1.json`
- `curriculum/en/relocation/B2.json`
- `curriculum/en/relocation/C1.json`

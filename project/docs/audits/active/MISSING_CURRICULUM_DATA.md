# Curriculum Data Coverage & Audit Status

This document tracks curriculum data availability and HTML course page wiring across all non-general English tracks (`spoken`, `exam`, `travelling`, `professional`, `relocation`).

## English Course Tracks Coverage Summary

| Track | Track ID | Available Levels | Status | JSON Files | Wired HTML Pages |
|---|---|---|---|---|---|
| Spoken | `spoken` | A1, A2, B1, B2, C1, C2 | Complete | 6 / 6 | 6 / 6 |
| Exam Preparation | `exam` | B1, B2, C1, C2 | Complete | 4 / 4 | 4 / 4 |
| Travelling | `travelling` | A1, A2, B1 | Complete | 3 / 3 | 3 / 3 |
| Professional | `professional` | B1, B2, C1, C2 | Complete | 4 / 4 | 4 / 4 |
| Relocation | `relocation` | A2, B1, B2, C1 | Complete | 4 / 4 | 4 / 4 |

---

## Authored & Wired Curriculum Files List

All 21 `curriculum/en/<track>/<level>.json` files have been built and wired to their respective HTML pages under `apps/premium-courses/<track>/en/<level>.html`:

### 1. Spoken Track (`spoken`)
- `curriculum/en/spoken/A1.json` -> `apps/premium-courses/spoken/en/A1.html`
- `curriculum/en/spoken/A2.json` -> `apps/premium-courses/spoken/en/A2.html`
- `curriculum/en/spoken/B1.json` -> `apps/premium-courses/spoken/en/B1.html`
- `curriculum/en/spoken/B2.json` -> `apps/premium-courses/spoken/en/B2.html`
- `curriculum/en/spoken/C1.json` -> `apps/premium-courses/spoken/en/C1.html`
- `curriculum/en/spoken/C2.json` -> `apps/premium-courses/spoken/en/C2.html`

### 2. Exam Preparation Track (`exam`)
- `curriculum/en/exam/B1.json` -> `apps/premium-courses/exam/en/B1.html`
- `curriculum/en/exam/B2.json` -> `apps/premium-courses/exam/en/B2.html`
- `curriculum/en/exam/C1.json` -> `apps/premium-courses/exam/en/C1.html`
- `curriculum/en/exam/C2.json` -> `apps/premium-courses/exam/en/C2.html`

### 3. Travelling Track (`travelling`)
- `curriculum/en/travelling/A1.json` -> `apps/premium-courses/travelling/en/A1.html`
- `curriculum/en/travelling/A2.json` -> `apps/premium-courses/travelling/en/A2.html`
- `curriculum/en/travelling/B1.json` -> `apps/premium-courses/travelling/en/B1.html`

### 4. Professional Track (`professional`)
- `curriculum/en/professional/B1.json` -> `apps/premium-courses/professional/en/B1.html`
- `curriculum/en/professional/B2.json` -> `apps/premium-courses/professional/en/B2.html`
- `curriculum/en/professional/C1.json` -> `apps/premium-courses/professional/en/C1.html`
- `curriculum/en/professional/C2.json` -> `apps/premium-courses/professional/en/C2.html`

### 5. Relocation Track (`relocation`)
- `curriculum/en/relocation/A2.json` -> `apps/premium-courses/relocation/en/A2.html`
- `curriculum/en/relocation/B1.json` -> `apps/premium-courses/relocation/en/B1.html`
- `curriculum/en/relocation/B2.json` -> `apps/premium-courses/relocation/en/B2.html`
- `curriculum/en/relocation/C1.json` -> `apps/premium-courses/relocation/en/C1.html`

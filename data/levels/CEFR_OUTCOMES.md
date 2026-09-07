# CEFR Level Outcomes & Hours — English

A per-level summary of every COSY English course, derived programmatically from
`curriculum/en/**/*.json` by `scripts/build_cefr_outcomes.py`. Regenerate with:

```bash
python3 scripts/build_cefr_outcomes.py
```

This gives COSY the marketing-clarity Skyeng has (a clean "A1 = N lessons,
can-do X, ~M hours" table) without losing the richer per-lesson data in the
curriculum JSON.

## How to read the hours

- **Contact h** = sum of lesson durations (spoken/exam use 60 min; others default to 50 min).
- **Est. total h** = contact hours × 1.5 (homework/self-study multiplier), rounded up to the nearest 5 h.
- **CEFR benchmark** = Skyeng-published CEFR hour targets ([Engblog](https://engblog.ru/skyeng-review)), included for context.

The estimated total hours are **per single course** and are intentionally lower
than the CEFR benchmark, because reaching a CEFR level normally combines
multiple COSY courses (e.g. `general` + `spoken` + `exam`). The benchmark is the
cumulative target across all courses at that level, not a single-course expectation.

---

## exam

| Level | Units | Lessons | Grammar | Vocab | Lesson min | Contact h | Est. total h (incl. HW) | CEFR benchmark |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| B1 | 5 | 25 | 45 | 125 | 60 | 25.0 | ~40 | 350–400 |
| B2 | 5 | 25 | 45 | 125 | 60 | 25.0 | ~40 | 500–600 |
| C1 | 5 | 25 | 46 | 124 | 60 | 25.0 | ~40 | 700–800 |
| C2 | 5 | 25 | 45 | 125 | 60 | 25.0 | ~40 | 1000–1200 |

## general

| Level | Units | Lessons | Grammar | Vocab | Lesson min | Contact h | Est. total h (incl. HW) | CEFR benchmark |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| A1 | 10 | 50 | 76 | 460 | 50 | 41.7 | ~65 | 90–100 |
| A2 | 10 | 20 | 41 | 193 | 61 | 20.5 | ~35 | 180–200 |
| B1 | 10 | 20 | 43 | 193 | 61 | 20.5 | ~35 | 350–400 |
| B2 | 10 | 20 | 39 | 193 | 61 | 20.5 | ~35 | 500–600 |
| C1 | 7 | 21 | 28 | 103 | 70 | 24.5 | ~40 | 700–800 |
| C2 | 10 | 20 | 19 | 103 | 61 | 20.5 | ~35 | 1000–1200 |

## professional

| Level | Units | Lessons | Grammar | Vocab | Lesson min | Contact h | Est. total h (incl. HW) | CEFR benchmark |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| B1 | 6 | 24 | 48 | 143 | 50 | 20.0 | ~30 | 350–400 |
| B2 | 6 | 24 | 48 | 144 | 50 | 20.0 | ~30 | 500–600 |
| C1 | 6 | 24 | 48 | 143 | 50 | 20.0 | ~30 | 700–800 |
| C2 | 6 | 24 | 48 | 143 | 50 | 20.0 | ~30 | 1000–1200 |

## relocation

| Level | Units | Lessons | Grammar | Vocab | Lesson min | Contact h | Est. total h (incl. HW) | CEFR benchmark |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| A2 | 1 | 2 | 4 | 13 | 50 | 1.7 | ~5 | 180–200 |
| B1 | 1 | 2 | 4 | 12 | 50 | 1.7 | ~5 | 350–400 |
| B2 | 1 | 2 | 4 | 12 | 50 | 1.7 | ~5 | 500–600 |
| C1 | 1 | 1 | 2 | 6 | 50 | 0.8 | ~5 | 700–800 |

> Note: the `relocation` course is currently a thin stub (1–2 lessons per
> level). This is a content gap — see [gap-analysis A5](../../docs/competitive-analysis/skyeng/gap-analysis.md).

## spoken

| Level | Units | Lessons | Grammar | Vocab | Lesson min | Contact h | Est. total h (incl. HW) | CEFR benchmark |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| A1 | 6 | 30 | 54 | 170 | 60 | 30.0 | ~45 | 90–100 |
| A2 | 6 | 30 | 53 | 150 | 60 | 30.0 | ~45 | 180–200 |
| B1 | 6 | 30 | 57 | 150 | 60 | 30.0 | ~45 | 350–400 |
| B2 | 6 | 30 | 54 | 150 | 60 | 30.0 | ~45 | 500–600 |
| C1 | 6 | 30 | 54 | 150 | 60 | 30.0 | ~45 | 700–800 |
| C2 | 6 | 30 | 54 | 150 | 60 | 30.0 | ~45 | 1000–1200 |

## travelling

| Level | Units | Lessons | Grammar | Vocab | Lesson min | Contact h | Est. total h (incl. HW) | CEFR benchmark |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| A1 | 5 | 20 | 41 | 120 | 50 | 16.7 | ~25 | 90–100 |
| A2 | 5 | 20 | 40 | 120 | 50 | 16.7 | ~25 | 180–200 |
| B1 | 5 | 20 | 40 | 120 | 50 | 16.7 | ~25 | 350–400 |

---

Machine-readable version: `data/levels/cefr-outcomes.json`.

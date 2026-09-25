# Premium Courses & Curriculum Diff Report vs COSYmanuals

**Date:** 2026-09-25
**Source Locations:**
- Local: `apps/premium-courses/` & `curriculum/`
- Remote / Target: COSYmanuals (`curriculums/{iso}/{course_type}/{LEVEL}.json`)

---

## 1. Executive Summary

This report presents a read-only structural comparison between local curriculum datasets in **COSYlanguages** (`apps/premium-courses/` and `curriculum/`) and the equivalent CEFR curriculum files in **COSYmanuals**.

- **Total Combinations Analyzed:** 0
- **Identical Combinations:** 0
- **Divergent Combinations:** 0
- **Local-Only Combinations:** 0
- **COSYmanuals-Only Combinations:** 0

> **Note:** This is a read-only diagnostic report to inform human decisions on which unique content in `premium-courses` or `curriculum/` needs to be carried over into `cosyplatform` and `COSYmanuals`.

---

## 2. Track & Level Comparison Matrix

| Target Language | Course Track | CEFR Level | Local Units / Lessons | COSYmanuals Units / Lessons | Status | Notes |
|---|---|---|---|---|---|---|

---

## 3. Detailed Divergent Track Analysis

*No structural divergences found across all compared curriculum tracks.*
---

## 4. Recommendations & Carry-Over Action Plan

1. **Local-Only Content Preservation:** Preserve all local-only curriculum files identified in Section 3 and carry them over to `cosyplatform` and `COSYmanuals`.
2. **Divergent Track Alignment:** For tracks where local `premium-courses` contains richer metadata (e.g. detailed teacher notes, IPA pronunciation guides, or recycled knowledge tags), merge those fields into COSYmanuals without overwriting COSYmanuals's unit structures.
3. **Zero Deletion Safety:** No files have been deleted or modified during this audit. All decisions should be reviewed by curriculum authors before final migration to `cosyplatform`.

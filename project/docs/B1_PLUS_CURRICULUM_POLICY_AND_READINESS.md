# B1+ Manual Generation Policy & Curriculum Readiness Registry

This document establishes the official COSYlanguages policy, workflow sequence, and syllabus readiness registry for generating **B1, B2, C1, and C2** manuals (Grammar, Vocabulary, and Communication) across all 13 registered languages.

---

## 1. Mandatory B1+ Task Policy

> **Core Requirement:**
> Before starting any B1+ task for a language, first read `curriculum/<lang-code>/general/` in full — check whether a syllabus outline already exists there that should drive the topic list, rather than inventing topics from scratch.

### Protocol Guidelines:
1. **Syllabus Pre-Read**: Always inspect `curriculum/<lang-code>/general/` prior to creating or generating topic pages or manual generator scripts for levels B1, B2, C1, or C2.
2. **Authoritative Topic Source**: If a JSON syllabus (e.g., `B1.json`, `B2.json`, `C1.json`, `C2.json`) or a Markdown specification (e.g., `B1_VISUAL_DICTIONARY_MASTER_CURRICULUM.md`) exists in `curriculum/<lang-code>/general/`, all topic titles, grammar focus items, vocabulary units, and communicative outcomes **must** be derived directly from that file.
3. **No Unanchored Invention**: Agents and contributors must not invent arbitrary topic names or sequence structures when an authoritative curriculum outline exists in `curriculum/<lang-code>/general/`.

---

## 2. PR Sequencing Strategy & Workflow Guidelines

- **Master Template Alignment**: Follow the visual standards, outcome banners, 14-part page rhythm, and monolingual guidelines established in `project/docs/EDITORIAL_HANDBOOK.md` and `project/docs/CONTENT_ARCHITECTURE.md`.
- **Merge Dependency**: Execute B1+ manual tasks for a language **only after** §5.2 (Level A2) manuals are fully merged and validated for that specific language.
- **Atomic Pull Requests**: Enforce **1 PR per language per level per manual type** (e.g. 1 PR for French B1 Grammar, 1 PR for French B1 Vocabulary, 1 PR for French B1 Communication).
- **Phased Sequencing**: Sequence rollout by language popularity and curriculum readiness rather than attempting all ~90 PRs simultaneously.

### Recommended Language Phasing Sequence:
1. **Tier 1 (Core Popular Taught Languages)**:
   - English (`en`), French (`fr`), Italian (`it`), Russian (`ru`), Modern Greek (`el`)
   - *Status*: Complete CEFR syllabi (A1, A2, B1, B2, C1, C2) exist in `curriculum/<lang>/general/`.
2. **Tier 2 (High-Demand European Reference Languages)**:
   - Spanish (`es`), German (`de`), Portuguese (`pt`)
   - *Status*: A1 and C1 syllabi active; B1/B2 syllabi expanding from vocabulary datasets.
3. **Tier 3 (Regional & Heritage Reference Languages)**:
   - Armenian (`hy`), Georgian (`ka`), Tatar (`tt`), Bashkir (`ba`), Breton (`br`)
   - *Status*: A1 and C1 syllabi active; B1/B2 syllabi expanding from vocabulary datasets.

---

## 3. Curriculum Readiness Matrix (13 Languages)

| Language | Code | Tier | A1 | A2 | B1 Syllabus | B2 Syllabus | C1 Syllabus | C2 Syllabus | B1+ Status |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **English** | `en` | 1 | Complete | Complete | Complete (`.json` + `.md`) | Complete (`.json` + `.md`) | Complete (`.json` + `.md`) | Complete (`.json` + `.md`) | **READY** |
| **French** | `fr` | 1 | Complete | Complete | Complete (`B1.json`) | Complete (`B2.json`) | Complete (`C1.json`) | Complete (`C2.json`) | **READY** |
| **Italian** | `it` | 1 | Complete | Complete | Complete (`B1.json`) | Complete (`B2.json`) | Complete (`C1.json`) | Complete (`C2.json`) | **READY** |
| **Russian** | `ru` | 1 | Complete | Complete | Complete (`B1.json`) | Complete (`B2.json`) | Complete (`C1.json`) | Complete (`C2.json`) | **READY** |
| **Greek** | `el` | 1 | Complete | Complete | Complete (`B1.json`) | Complete (`B2.json`) | Complete (`C1.json`) | Complete (`C2.json`) | **READY** |
| **Spanish** | `es` | 2 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |
| **German** | `de` | 2 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |
| **Portuguese** | `pt` | 2 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |
| **Armenian** | `hy` | 3 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |
| **Georgian** | `ka` | 3 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |
| **Tatar** | `tt` | 3 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |
| **Bashkir** | `ba` | 3 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |
| **Breton** | `br` | 3 | Complete | Partial | Sourced via dataset | Sourced via dataset | Complete (`C1.json`) | Sourced via dataset | **C1 READY / B1-B2 Dataset** |

---

## 4. Audit Tooling & Verification Command

To dynamically audit `curriculum/<lang>/general/` across all 13 languages and verify syllabus file presence prior to beginning B1+ manual tasks, execute:

```bash
python3 project/scripts/audits/audit_b1_plus_curriculum_readiness.py
```

This generates an updated JSON summary at `project/docs/audits/b1_plus_curriculum_audit.json`.

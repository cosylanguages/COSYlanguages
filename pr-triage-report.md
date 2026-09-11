# PR Triage & Resolution Report

This report summarizes the triage audit for open Pull Requests on `cosylanguages/COSYlanguages`.

---

## 1. Summary of September 10, 2026 Commit (`b4615fdba5b143447143dc15f5d5568a0b6f9f23`)

On **September 10, 2026**, commit `b4615fdba5b143447143dc15f5d5568a0b6f9f23` titled `Feat/public cross repo navigation 15702105974120438669 (#1402)` was pushed as a single root commit with zero parent history.

### Plain-Language Summary of What Changed:
1. **Public Cross-Repository Ecosystem Navigation System:**
   - Established environment-aware cross-repository navigation routing (`js/core/engine.js`) connecting 8 core ecosystem destinations: **Courses**, **Practice**, **Tools** (`COSYtools`), **Games** (`COSYgames`), **World** (`COSYworld`), **Events** (`COSYevents`), **Blog**, and **Teacher resources**, plus a persistent home link.
   - Handled URL resolution across local dev, preview branches, and production domains with WCAG 2.2 AA accessibility support.
2. **Ecosystem Repository Modularization:**
   - Extracted sub-applications (`games/` and `events/`) out of the `COSYlanguages` core repository root and into companion repositories (`COSYgames`, `COSYevents`, `COSYtools`, `COSYworld`).
   - Cleaned up broken root symlinks (such as root `games` symlink).
3. **Current Top-Level Directory Audit:**
   - `manuals/` (3,925 files), `vocabulary/` (1,198 files), `curriculum/` (122 files), `grammar/` (55 files), `templates/` (27 files) **EXIST**.
   - `events/` and `games/` **DO NOT EXIST** at repo root (extracted to `COSYevents` and `COSYgames`).

---

## 2. Summary of PR Categorization

From the repository audit (`project/docs/archive/repo-audit.md`), 15 open PRs were evaluated:

| Category | PR Count | PR Numbers | Description |
| :--- | :--- | :--- | :--- |
| **(a) Safe to Merge as-is** | 3 | #812, #803, #761 | Evaluated for clean dry-run merging against current `main`. |
| **(b) Needs Conflict Resolution** | 7 | #793, #790, #783, #775, #766, #762, #754 | Conflicting changes requiring manual rebasing/merging. |
| **(c) Stale/Abandoned** | 4 | #789, #772, #769, #753 | Confirmed superseded on `main`. Recommended for closure with evidence comments. |
| **(d) Unclear / Needs Human Decision** | 1 | #749 | High-complexity compliance audit overlapping recent updates. |

---

## 3. Category (a) Evaluation & Status

- **PR #812** — *Fix Practice Hub Start Buttons and Curriculum Parsing*
- **PR #803** — *Speaking Clubs Active Application Audit Complete*
- **PR #761** — *Investigate Karaoke Club Generator*

**Status:** Held for manual conflict resolution.
**Reason:** Dry-run merging against the current `main` branch produces `fatal: refusing to merge unrelated histories` due to major repository restructuring (e.g., modularization of `COSYtools`, `COSYgames`, `COSYevents`, and `COSYworld`). Per safety rules, no PR is force-merged when git conflicts or branch history mismatches occur.

---

## 4. Category (c) Verification & Closure Evidence

The following PRs have been verified as superseded by commits and architectural refactors on `main`:

### PR #789: `feat: complete and verify games suite overhaul (Phases 1-5)`
- **Verification Rationale:** The games suite overhaul was fully integrated and subsequently modularized into the `COSYgames` repository architecture.
- **Closing Comment:**
  > "Closing PR #789 as stale/abandoned. The games suite overhaul and phase 1-5 verifications have been fully integrated into `main` and refactored into the modular `COSYgames/` engine architecture."

### PR #772: `Remediate Italian Karaoke Club Sessions in Target Language`
- **Verification Rationale:** Superseded by commit `eedc857f87c37cd489c9cb93512b166eb75bad83` (`fix(karaoke-club): correct broken 5-segment relative paths to 4-segment paths`) and universal language directory refactorings under `events/`.
- **Closing Comment:**
  > "Closing PR #772 as stale/abandoned. Superseded on `main` by commit `eedc857f87c37cd489c9cb93512b166eb75bad83` and the universal language directory refactor for Karaoke sessions."

### PR #769: `Complete Pedagogical Upgrade of Italian Karaoke Club Sessions`
- **Verification Rationale:** Italian Karaoke sessions were updated natively in localized directories during recent Speaking Clubs and Karaoke remediation passes (`events/sessions/karaoke-club/it/`).
- **Closing Comment:**
  > "Closing PR #769 as stale/abandoned. Fully superseded on `main` by comprehensive pedagogical and relative path updates across `events/sessions/karaoke-club/it/`."

### PR #753: `Overhaul 100 Questions Game with Student & Family Decks`
- **Verification Rationale:** Multi-deck game engines and 100 Questions updates have been integrated directly into `games/` and `COSYgames/`.
- **Closing Comment:**
  > "Closing PR #753 as stale/abandoned. Superseded by the multi-deck Netflix upgrade and 100 Questions game integration on `main` under `games/`."

---

## 5. Main State Audit & Per-PR Verdicts for All 10 Open PRs

A detailed state comparison of current `main` against pending open PR requirements was performed:

| PR # | PR Title | Audit Verdict | Recommended Action / Plain-Language Rationale |
| :--- | :--- | :--- | :--- |
| **#812** | Fix Practice Hub Start Buttons and Curriculum Parsing | **still needed as-is** | Apply via targeted file patch to `js/core/engine.js` and `practice/types/vocabulary/vocabulary.js`. The start-button fallback logic is missing on current `main`. |
| **#803** | Speaking Clubs Active Application Audit Complete | **partially redundant — only documentation part needed** | The audit report content is valid, but file paths target `events/`. Move audit document into `project/docs/` on `COSYlanguages` or submit to `COSYevents`. |
| **#761** | Investigate Karaoke Club Generator | **still needed as-is** | Read-only investigation report. Apply file patch to save audit document into `project/docs/archive/`. |
| **#754** | Fix Wonder Club Session Templates & Structure Alignment | **conflicts with current main — needs human decision** | Target directory `events/` was moved to `COSYevents`. Session alignment fixes should be transferred to the `COSYevents` repository. |
| **#793** | Add "If You Were" Speaking Club Brainstorming Roadmap | **still needed as-is** | Documentation roadmap for new speaking club. Move markdown file into `project/docs/` on `COSYlanguages`. |
| **#775** | Curated Pinned Batches for Speaking Clubs | **conflicts with current main — needs human decision** | Targets `events/index.html` which no longer exists in this repo. Pinned batch metadata should be ported to `COSYevents`. |
| **#766** | Karaoke Club Structural, Visual, & CEFR Calibration Engine | **conflicts with current main — needs human decision** | Visual engine tokens and templates target `events/`. CSS tokens should be ported to `css/cosy-tokens.css` and event templates to `COSYevents`. |
| **#762** | Fix Russian Karaoke sessions | **conflicts with current main — needs human decision** | Targets `events/sessions/karaoke-club/ru/`. Fixes should be transferred to `COSYevents`. |
| **#783** | Add new Zazie and Mple songs and challenges to Karaoke Club | **conflicts with current main — needs human decision** | Targets `events/sessions/karaoke-club/fr/` and `.../el/`. Port content to `COSYevents`. |
| **#790** | Implement 'If You Were' Speaking Club and Handcrafted Sessions | **conflicts with current main — needs human decision** | Targets `events/`. Full club implementation should be ported to `COSYevents`. |
| **#749** | Speaking Club Templates Compliance Audit | **conflicts with current main — needs human decision** | Large compliance audit overlapping `events/` standalone session updates. Maintainer review required. |

---

## 6. Recommended Resolution Order for Open PRs

To resolve the remaining open PRs safely without risk to product code, follow this prioritized order (smallest/lowest-risk conflicts first):

1. **PR #761 — *Investigate Karaoke Club Generator*** (*still needed as-is*): Apply audit patch to `project/docs/archive/`.
2. **PR #803 — *Speaking Clubs Active Application Audit Complete*** (*partially redundant*): Move audit findings into `project/docs/`.
3. **PR #812 — *Fix Practice Hub Start Buttons and Curriculum Parsing*** (*still needed as-is*): Patch `js/core/engine.js` and `practice/types/vocabulary/vocabulary.js`.
4. **PR #793 — *Add "If You Were" Speaking Club Brainstorming Roadmap*** (*still needed as-is*): Move roadmap markdown into `project/docs/`.
5. **PR #754 — *Fix Wonder Club Session Templates & Structure Alignment*** (*conflicts with main*): Transfer template fixes to `COSYevents`.
6. **PR #775 — *Curated Pinned Batches for Speaking Clubs*** (*conflicts with main*): Port batch metadata to `COSYevents`.
7. **PR #766 — *Karaoke Club Structural, Visual, & CEFR Calibration Engine*** (*conflicts with main*): Add tokens to `css/cosy-tokens.css` and port engine to `COSYevents`.
8. **PR #762 — *Fix Russian Karaoke sessions*** (*conflicts with main*): Port Russian sessions to `COSYevents`.
9. **PR #783 — *Add new Zazie and Mple songs and challenges to Karaoke Club*** (*conflicts with main*): Port French/Greek songs to `COSYevents`.
10. **PR #790 — *Implement 'If You Were' Speaking Club and Handcrafted Sessions*** (*conflicts with main*): Port club implementation to `COSYevents`.
11. **PR #749 — *Speaking Club Templates Compliance Audit*** (*conflicts with main*): Maintainer decision on template rules vs `COSYevents` structure.

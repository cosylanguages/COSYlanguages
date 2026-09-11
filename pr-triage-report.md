# PR Triage & Resolution Report

This report summarizes the triage audit for open Pull Requests on `cosylanguages/COSYlanguages`.

---

## 1. Summary of PR Categorization

From the repository audit (`project/docs/archive/repo-audit.md`), 15 open PRs were evaluated:

| Category | PR Count | PR Numbers | Description |
| :--- | :--- | :--- | :--- |
| **(a) Safe to Merge as-is** | 3 | #812, #803, #761 | Evaluated for clean dry-run merging against current `main`. |
| **(b) Needs Conflict Resolution** | 7 | #793, #790, #783, #775, #766, #762, #754 | Conflicting changes requiring manual rebasing/merging. |
| **(c) Stale/Abandoned** | 4 | #789, #772, #769, #753 | Confirmed superseded on `main`. Recommended for closure with evidence comments. |
| **(d) Unclear / Needs Human Decision** | 1 | #749 | High-complexity compliance audit overlapping recent updates. |

---

## 2. Category (a) Evaluation & Status

- **PR #812** — *Fix Practice Hub Start Buttons and Curriculum Parsing*
- **PR #803** — *Speaking Clubs Active Application Audit Complete*
- **PR #761** — *Investigate Karaoke Club Generator*

**Status:** Held for manual conflict resolution.
**Reason:** Dry-run merging against the current `main` branch produces `fatal: refusing to merge unrelated histories` due to major repository restructuring (e.g., modularization of `COSYtools`, `COSYgames`, `COSYevents`, and `COSYworld`). Per the safety rules, no PR is force-merged when git conflicts or branch history mismatches occur.

---

## 3. Category (c) Verification & Closure Evidence

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
- **Verification Rationale:** Italian Karaoke sessions were updated natively in localized directories during the recent Speaking Clubs and Karaoke remediation passes (`events/sessions/karaoke-club/it/`).
- **Closing Comment:**
  > "Closing PR #769 as stale/abandoned. Fully superseded on `main` by comprehensive pedagogical and relative path updates across `events/sessions/karaoke-club/it/`."

### PR #753: `Overhaul 100 Questions Game with Student & Family Decks`
- **Verification Rationale:** Multi-deck game engines and 100 Questions updates have been integrated directly into `games/` and `COSYgames/`.
- **Closing Comment:**
  > "Closing PR #753 as stale/abandoned. Superseded by the multi-deck Netflix upgrade and 100 Questions game integration on `main` under `games/`."

---

## 4. Remaining Open PRs: Conflict Types & Recommended Resolution Order

To resolve the remaining open PRs safely without risk to product code, follow this prioritized order (smallest/lowest-risk conflicts first):

### 1. PR #761 — *Investigate Karaoke Club Generator* (Category a / Low Risk)
- **Conflict Type:** Unrelated branch history / index path mismatch.
- **Plain Rationale:** Read-only audit report with zero code side-effects.
- **Action:** Cherry-pick or rebase audit document onto current `main`.

### 2. PR #803 — *Speaking Clubs Active Application Audit Complete* (Category a / Low Risk)
- **Conflict Type:** Unrelated branch history / root index path mismatch.
- **Plain Rationale:** Read-only audit of active speaking club applications.
- **Action:** Cherry-pick audit findings into `project/docs/`.

### 3. PR #812 — *Fix Practice Hub Start Buttons and Curriculum Parsing* (Category a / Medium Risk)
- **Conflict Type:** Unrelated branch history / `js/core/engine.js` & `practice/` paths.
- **Plain Rationale:** Contains practice launching fixes and fallback logic.
- **Action:** Manually rebase onto current `main` and test practice hub launching.

### 4. PR #754 — *Fix Wonder Club Session Templates & Structure Alignment* (Category b / Low Risk)
- **Conflict Type:** Simple structural merge conflict on event index pages (`events/index.html`).
- **Plain Rationale:** Clean template alignment; conflict is isolated to navigation/list entries.
- **Action:** Rebase on `main` and accept `main` index markup while appending template links.

### 5. PR #793 — *Add "If You Were" Speaking Club Brainstorming Roadmap* (Category b / Low Risk)
- **Conflict Type:** Markdown layout / path conflicts in documentation directories.
- **Plain Rationale:** Documentation-only PR detailing the brainstorming roadmap for the new club.
- **Action:** Rebase branch on `main` and move file to `project/docs/`.

### 6. PR #775 — *Curated Pinned Batches for Speaking Clubs* (Category b / Medium Risk)
- **Conflict Type:** Conflict on Speaking Club index files and session metadata listings.
- **Plain Rationale:** Updates pinned session batches; conflicts with recent Speaking Club overview refactors.
- **Action:** Rebase on `main` and merge batch metadata into current `events/` schemas.

### 7. PR #766 — *Karaoke Club Structural, Visual, & CEFR Calibration Engine* (Category b / Medium Risk)
- **Conflict Type:** Minor CSS token and layout stylesheet conflict.
- **Plain Rationale:** Calibrates CEFR visuals for Karaoke sessions.
- **Action:** Rebase on `main`, resolving CSS token conflicts against `css/cosy-tokens.css`.

### 8. PR #762 — *Fix Russian Karaoke sessions: translation, placeholders, song-specific lyrics, and duration consistency* (Category b / Medium Risk)
- **Conflict Type:** Path conflicts (`events/ru/sessions/` vs `events/sessions/karaoke-club/ru/`).
- **Plain Rationale:** Fixes Russian Karaoke translations; paths shifted during directory reorganization.
- **Action:** Rebase on `main` and move updated Russian session HTML files into localized folders.

### 9. PR #783 — *Add new Zazie and Mple songs and challenges to Karaoke Club* (Category b / Medium-High Risk)
- **Conflict Type:** Directory structure reorganization conflicts (flat paths vs `el/` and `fr/` subdirectories).
- **Plain Rationale:** Adds new songs and challenges for French (Zazie) and Greek (Mple).
- **Action:** Rebase on `main` and place new HTML/JS files into `events/sessions/karaoke-club/fr/` and `events/sessions/karaoke-club/el/`.

### 10. PR #790 — *Implement 'If You Were' Speaking Club and Handcrafted Sessions* (Category b / High Risk)
- **Conflict Type:** Major merge conflict across shared index pages and new session directories.
- **Plain Rationale:** Full implementation of new speaking club track.
- **Action:** Resolve index conflicts after PR #793 is merged, aligning with `events/` schema standards.

### 11. PR #749 — *Speaking Club Templates Compliance Audit* (Category d / Human Decision Required)
- **Conflict Type:** Extensive architectural and template overlap across all Speaking Club sessions.
- **Plain Rationale:** Unclear scope — large-scale compliance audit that overlaps heavily with recent standalone session updates.
- **Action:** Maintainer review required to decide whether to adopt proposed template rules or reject in favor of current session structure.

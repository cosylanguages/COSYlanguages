# Main Branch State & PR Redundancy Audit Report

## 1. Summary of September 10, 2026 Commit (`b4615fdba5b143447143dc15f5d5568a0b6f9f23`)

On **September 10, 2026**, commit `b4615fdba5b143447143dc15f5d5568a0b6f9f23` titled `Feat/public cross repo navigation 15702105974120438669 (#1402)` was pushed as a single root commit with zero parent history.

### Plain-Language Summary of Changes Introduced by `b4615fdb`:
1. **Ecosystem Cross-Repository Navigation Engine:**
   - Introduced centralized, environment-aware cross-repository navigation configuration (`NAV_CONFIG.free` and `NAV_FALLBACKS` in `js/core/engine.js`).
   - Standardized routing across 8 core ecosystem destinations: **Courses**, **Practice**, **Tools** (`COSYtools`), **Games** (`COSYgames`), **World** (`COSYworld`), **Events** (`COSYevents`), **Blog**, and **Teacher resources**, plus a home link.
   - Handled dynamic environment switching across local development, GitHub Pages previews, and production domains with fallback labels and ARIA accessibility markup.
2. **Ecosystem Repository Modularization:**
   - Extracted standalone sub-applications (`games/` and `events/`) out of the `COSYlanguages` core repository root and into companion repositories (`COSYgames`, `COSYevents`, `COSYtools`, `COSYworld`).
   - Removed legacy broken symlinks (such as root `games` symlink) that caused build failures on GitHub Pages deployments.
3. **WCAG 2.2 AA Accessibility & Polish:**
   - Added keyboard navigation (`role="menubar"`, `role="menuitem"`), high-contrast focus rings, reduced-motion media query support, and dynamic i18n label loading.

---

## 2. Current Top-Level Directory Structure Audit

The top-level directory structure of current `main` is:

| Directory | Exists? | File Count | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| `manuals/` | **EXISTS** | 3,925 files | Core grammar, vocabulary, and communication manuals across 14 languages. |
| `vocabulary/` | **EXISTS** | 1,198 files | Structured JSON/JS vocabulary datasets (A0 through C2). |
| `curriculum/` | **EXISTS** | 122 files | Course track curriculum definitions and schema files. |
| `grammar/` | **EXISTS** | 55 files | Monolingual/bilingual grammar reference modules and schemas. |
| `templates/` | **EXISTS** | 27 files | Lesson plan and session templates (includes `templates/events/` and `templates/games/`). |
| `events/` | **DOES NOT EXIST** | 0 files | Extracted to companion repo `COSYevents` (`templates/events/` retained). |
| `games/` | **DOES NOT EXIST** | 0 files | Extracted to companion repo `COSYgames` (`templates/games/` retained). |

---

## 3. Specific Folder & Feature Inspections

### (a) `events/` & `events/index.html` Audit
- **Status:** The root `events/` directory and `events/index.html` **do not exist** on `COSYlanguages` `main`. Events logic and session pages now reside in the standalone `COSYevents` repository.
- **Impact on PRs #775, #766, #790:** Content targeting `events/index.html` or `events/sessions/` cannot be merged directly into `COSYlanguages` `main` because the target directory was extracted.

### (b) Karaoke Sessions Audit (`events/sessions/karaoke-club/fr/` & `.../el/`)
- **Status:** Neither `events/sessions/karaoke-club/fr/` nor `.../el/` exist on `COSYlanguages` `main` (both reside in `COSYevents`).
- **Impact on PRs #783 & #762:** Session updates for Zazie, Mple, or Russian Karaoke content target paths that were migrated to `COSYevents`.

### (c) Design Tokens Audit (`css/cosy-tokens.css`)
- **Status:** `css/cosy-tokens.css` serves as the master design tokens stylesheet. It defines standard color scales, track colors, spacing, radius, and shadow tokens.
- **CEFR Tokens:** Dedicated CSS classes or variable tokens specifically named `--cefr-a1`, `--cefr-b2` etc. are **not present** in `cosy-tokens.css`.
- **Impact on PR #766:** CEFR visual calibration styling from #766 is **still needed** (and should be adapted for `COSYevents` design tokens).

### (d) Practice Hub Engine Audit (`js/core/engine.js` & `practice/`)
- **Status:** `js/core/engine.js` contains `loadCurriculum(lang, level)` and fallback array mechanisms, and `practice/hub.js` / `practice/_engine/core.js` handle pill selection fallbacks. However, multi-stage fallback parsing (`teacher_notes` YAML parsing and relaxed theme/subtheme fallbacks from #812) is **not present** on current `main`.
- **Impact on PR #812:** PR #812's start-button fallback logic is **still needed**.

### (e) Ecosystem Cross-Repository Navigation Links Audit
- **Status:** The navigation system in `js/core/engine.js` (`NAV_CONFIG.free`) and `index.html` natively includes outbound links to:
  - `courses` (`/courses/` or `/COSYlanguages/courses/`)
  - `practice` (`/practice/` or `/COSYlanguages/practice/`)
  - `tools` (`https://cosylanguages.github.io/COSYtools/`)
  - `games` (`https://cosylanguages.github.io/COSYgames/`)
  - `world` (`https://cosylanguages.github.io/COSYworld/`)
  - `events` (`https://cosylanguages.github.io/COSYevents/`)
  - `blog` (`/blog/` or `/COSYlanguages/blog/`)
  - `teacher` (`/teacher/` or `/COSYlanguages/teacher/`)
- **Coverage:** Outbound links for all 4 companion repos (`COSYtools`, `COSYgames`, `COSYworld`, `COSYevents`) are **fully covered**.

---

## 4. Per-PR Verdicts for Pending Open PRs

| PR # | PR Title | Audit Verdict | Recommended Action / Justification |
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

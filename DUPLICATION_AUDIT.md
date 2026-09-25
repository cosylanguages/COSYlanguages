# COSYlanguages Ecosystem Duplication & Architecture Audit

**Date:** September 2026
**Auditor:** Jules (Senior Software Engineer)
**Target Repository:** `COSYlanguages` (`https://github.com/cosylanguages/COSYlanguages`)

---

## 1. Summary of Prior Covered Ground

An analysis of pre-existing audit reports located in `project/docs/archive/` (`repo-audit.md` and `accessibility-audit.md`) reveals the following scope already evaluated:

1. **`repo-audit.md` Findings:**
   - **PR Audit:** Evaluated 15 open PRs, categorizing clean merges vs. conflicting branches across Speaking Clubs, Karaoke, and Practice Hub overhauls.
   - **Site HTML Crawl:** Audited 846 HTML files across `events/`, `practice/`, `games/`, `vocabulary/`, `grammar/`, `courses/`, and `root_other/`, identifying 383 broken internal links in `events/` caused by localized folder restructures (`/fr/`, `/el/`, `/es/`) and 516 missing meta descriptions.
   - **i18n Translation Externalization Key Matrix:** Mapped hardcoded UI strings across navigation, footer, practice setup, karaoke filters, and generic buttons into suggested translation keys.

2. **`accessibility-audit.md` Findings:**
   - **Automated Axe-Core Scan:** Audited core pages (`index.html`, `practice/index.html`, `events/karaoke-club.html`, `games/what_gender_is_it/index.html`).
   - **Violations Identified:** Identified 13 Critical `select-name` missing label violations, 121 Serious WCAG 2 AA color contrast failures (e.g., `#6b8f71` on `#e8f0e9`, `#e8a838` badges), and Moderate landmark/heading structure issues (missing main landmarks, invalid heading order).

> **Ground Overlap Statement:**
> The prior audits in `project/docs/archive/` focused strictly on **HTML link crawling, i18n string extraction, and WCAG accessibility compliance**. They did **NOT** audit top-level structural duplication, ecosystem boundary alignment with sibling repositories (`COSYdata`, `COSYtools`, `COSYmanuals`, `COSYgames`, `COSYevents`), or file/folder consolidation. This report covers that remaining structural ground.

---

## 2. Audit of Top-Level Root Folders

Per the ecosystem architecture defined in `CANON_SOURCE_OF_TRUTH.md` and `README.md`, `COSYlanguages` acts as the 100% free, public entry-point gateway. Specialized content domains are owned canonically by sibling repositories:
- `COSYdata`: Owns vocabulary datasets and canonical indexes.
- `COSYtools`: Owns grammar reference tools, verb pattern engines, and reference PWAs.
- `COSYmanuals`: Owns interactive CELTA grammar, vocabulary, and communication manuals.
- `COSYgames`: Owns interactive minigames and game engines.
- `COSYevents`: Owns event deck content, speaking clubs, and session materials.
- `COSYplatform`: Owns structured course curriculums and master data.

Below is the status and evaluation of each top-level folder at repo root:

| Folder | File Count | Content Overview | Git Activity | Live Code References | Classification & Recommendation |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **`vocabulary/`** | 691 files | Monolingual/bilingual vocabulary JS & JSON files across 14 languages. | Active commits (July–Sept 2026). | `js/core/engine.js` fetches primarily from remote `COSYdata` (`https://cosylanguages.github.io/COSYdata/vocabulary/`) with local fallback to `vocabulary/`. | **DUPLICATE / DRIFTED**<br>Vocabulary data is canonically owned and served by `COSYdata`. Local JS datasets create drift risk. Keep local fallback stubs until remote loader resilience is 100% verified, then decommission. |
| **`data/`** | 37 files | Site metadata & config: `courses/`, `index/` (cross-ref indexes), `languages/` (`languages.js`), `levels/`, `pricing/` (`pricing.js`), `ui/`, `ru_grammar_topics_map.json`. | Active commits (July–Sept 2026). | Directly imported by `index.html`, `practice/index.html`, `apps/free-portal/sw.js`, and `js/core/engine.js`. | **ACTIVE AND CORRECTLY PLACED**<br>Stores gateway-specific UI configuration, pricing models, and index lookup files (`languages.js`, `pricing.js`). *Note: Does NOT overlap with `vocabulary/`; `data/` holds platform UI metadata, whereas `vocabulary/` holds raw lexical entries.* |
| **`manuals/`** | 3,927 files | Full HTML/CSS/JS manual topic pages across 14 target languages (grammar, vocabulary, communication). | Active commits (July–Sept 2026). | Core portal (`index.html`, `practice/index.html`) links directly to external `COSYmanuals` repo endpoints (`https://cosylanguages.github.io/COSYmanuals/`). Local manual files are also fetched by `js/data/phonology_data.js`. | **DUPLICATE / DRIFTED**<br>`COSYmanuals` is the single source of truth for full manuals. Local `manuals/` directory duplicates content that belongs in `COSYmanuals`. |
| **`grammar/`** | 55 files | Legacy grammar HTML topics, CELTA standards (`GRAMMAR_STANDARD.md`), and schema files. | Active commits (July–Sept 2026). | `js/core/engine.js` contains legacy fallback paths to `grammar/${lang}/morphology/`. | **DUPLICATE / DRIFTED**<br>Grammar topic manuals reside in `COSYmanuals` and reference tools reside in `COSYtools`. |
| **`games/`** | 0 files | *Directory does not exist at root.* | Removed / Migrated. | `games/index.html` acts as a directory hub pointing directly to `https://cosylanguages.github.io/COSYworld/` and external `COSYgames` endpoints. | **RESOLVED / ABSENT**<br>All minigames and open-world code were successfully extracted to `COSYgames` and `COSYworld`. |
| **`events/`** | 0 files | *Directory does not exist at root.* | Removed / Migrated. | Event hubs link directly to `COSYevents` (`https://cosylanguages.github.io/COSYevents/`). Migration records reside in `MIGRATION_TO_COSYEVENTS/`. | **RESOLVED / ABSENT**<br>Event session decks were migrated to `COSYevents`. `apps/premium-events` remains locally for UI styling integration. |
| **`curriculum/`** | 0 files | *Directory does not exist at root.* | Removed / Migrated. | `js/core/engine.js` fetches curriculums directly from `COSYplatform` raw GitHub endpoints (`https://raw.githubusercontent.com/cosylanguages/COSYplatform/main/curriculums/`). | **RESOLVED / ABSENT**<br>Local curriculum datasets were removed in Phase 3 migration. |

### Domain Overlap Analysis:
1. **`data/` vs `vocabulary/` Overlap:**
   - There is **no functional overlap** between `data/` and `vocabulary/`.
   - `data/` contains lightweight site configuration (`languages.js`, `pricing.js`, CEFR outcomes JSON, UI index maps).
   - `vocabulary/` contains raw lexical dataset JS files (~691 files).
2. **`events/` vs `apps/premium-events/` Overlap:**
   - The top-level `events/` directory **no longer exists** (migrated to `COSYevents`).
   - `apps/premium-events/` contains local CSS variable overrides (`clubs/life/style.css`) and session presentation assets used by the platform's free event discovery views. There is no structural conflict.

---

## 3. Analysis of `classroom-sync.html`

- **File Overview:** A 27KB standalone HTML utility using PeerJS (`unpkg.com/peerjs@1.5.2`) for peer-to-peer WebRTC live presentation screen syncing between a teacher host and student joiners via room codes.
- **Live References:**
  - Registered in offline Service Workers (`sw.js` line 11, `apps/free-portal/sw.js` line 11).
  - Referenced in architectural documentation (`README.md`, `project/docs/MULTI_REPO_MIGRATION_ARCHITECTURE.md`).
  - Tested in automated verification scripts (`project/tests/verification/verify_dark_theme.py`).
  - **Not linked** from primary user navigation (`index.html` main nav or header).
- **Policy & Deprecation Alignment Check:**
  - `classroom-sync.html` does **NOT** implement user account authentication, student database tracking, or multi-tenant database sync. It is a purely client-side, ephemeral WebRTC presentation screen mirror.
  - However, per `project/docs/DEEP_REPOSITORIES_COMPARISON_AND_MIGRATION_MANIFEST.md` and `docs/cosy-languages-boundary-audit.md`, `classroom-sync.html` is listed as a candidate for extraction to a separate `COSYclassroom` sub-product repository.
- **Recommendation:**
  - **Retain in `apps/` or relocate to dedicated `COSYclassroom` repo.** Since `classroom-sync.html` is zero-backend P2P and does not violate the account-free policy, it is safe to keep. Moving it into `apps/classroom-sync/` or extracting it to `COSYclassroom` will clean up the repo root.

---

## 4. Analysis of Root Python Scripts & Temporary Artifacts

An investigation of loose files at the repo root vs `.github/workflows/` and `project/scripts/` reveals:

1. **Root-Level Python Scripts (`fix_all_html.py`, `run_vocabulary_remediation.py`, `verify_quotes_themes.py`):**
   - **Finding:** Canonical copies of all three scripts **already exist inside `project/scripts/`** (`project/scripts/fix_all_html.py`, `project/scripts/run_vocabulary_remediation.py`, `project/scripts/verify_quotes_themes.py`). The root-level copies are loose, leftover duplicates from past batch execution runs.
   - **CI Workflow Check:** Inspection of `.github/workflows/` (`ci.yml`, `deploy.yml`, `build-standalone-apps.yml`) confirms that CI pipelines execute `scripts/validate-schema.js`, `scripts/verify_vocab_pool.js`, and `project/scripts/audits/link_checker.py`. **None** of the GitHub Workflows reference the loose root-level Python scripts.
2. **`axe_violations_temp.json` & `usability-test-checklist.md`:**
   - **Finding:** Neither `axe_violations_temp.json` nor `usability-test-checklist.md` exists at the repo root. Accessibility findings were archived in `project/docs/archive/accessibility-audit.md` and usability tests reside in `project/tests/`.
3. **Recommendation:**
   - **Delete the three duplicate loose Python scripts** (`fix_all_html.py`, `run_vocabulary_remediation.py`, `verify_quotes_themes.py`) from the root directory. Their active, canonical counterparts in `project/scripts/` remain intact.

---

## 5. Root Audit and Report Markdown Files Inventory

Below is an inventory of all audit and report markdown files currently existing at the repo root or in `project/docs/archive/`:

| File Path | Recency / Date | One-Line Summary & Purpose | Recommendation |
| :--- | :---: | :--- | :--- |
| `project/docs/archive/repo-audit.md` | Aug 2026 | PR mergeability analysis, 846-page HTML link crawl, and i18n translation key mapping. | **RETAIN IN ARCHIVE** (`project/docs/archive/`) |
| `project/docs/archive/accessibility-audit.md` | Aug 2026 | Axe-core accessibility scan identifying 13 missing label and 121 color contrast violations. | **RETAIN IN ARCHIVE** (`project/docs/archive/`) |
| `project/docs/archive/COSY_SPEAKING_CLUBS_AUDIT_REPORT.md` | Aug 2026 | Comprehensive pedagogical and structural audit of all Speaking Club session decks. | **RETAIN IN ARCHIVE** (`project/docs/archive/`) |
| `project/docs/archive/KARAOKE_CHALLENGES_AUDIT_REPORT.md` | Aug 2026 | Audit of Karaoke Club song challenges, lyrics alignment, and CEFR level tagging. | **RETAIN IN ARCHIVE** (`project/docs/archive/`) |
| `AUDIT.md` (at root) | Aug 2026 | General website audit log covering navigation, broken links, and mobile layout notes. | **MOVE TO `docs/audits/`** to declutter root. |
| `GATE_REPORT.md` (at root) | Aug 2026 | Verification gate status report for practice engines and test suites. | **MOVE TO `docs/audits/`** to declutter root. |
| `GRAMMAR_SYSTEMS_INVESTIGATION.md` (at root) | Aug 2026 | Comparative investigation of legacy reference-grammar vs CELTA manual engines. | **MOVE TO `docs/audits/`** to declutter root. |
| `MIGRATION_MAP.md` (at root) | Aug 2026 | Master URL redirect and path mapping specification for multi-repo migration. | **MOVE TO `docs/audits/`** (Marked superseded). |
| `MIGRATION_NOTES.md` (at root) | Aug 2026 | Migration log documenting Phase 1-3 dataset cutovers to COSYdata/COSYplatform. | **MOVE TO `docs/audits/`** to declutter root. |
| `MISSING_CURRICULUM_DATA.md` (at root) | Aug 2026 | Curriculum coverage gap audit for target languages. | **MOVE TO `docs/audits/`** to declutter root. |

> **Summary Recommendation:**
> Core operational documentation (`README.md`, `CANON_SOURCE_OF_TRUTH.md`, `CONTENT_ARCHITECTURE.md`, `SECURITY.md`, `CONTRIBUTING.md`) should remain at root. All historical audit reports currently sitting at root (`AUDIT.md`, `GATE_REPORT.md`, `GRAMMAR_SYSTEMS_INVESTIGATION.md`, `MIGRATION_MAP.md`, `MIGRATION_NOTES.md`, `MISSING_CURRICULUM_DATA.md`) should be consolidated into `docs/audits/`.

---

## 6. Cross-Check of `apps/`, `notebook/`, and `planning/`

1. **`apps/free-portal/`:**
   - **Status:** **LIVE**. Contains PWA web manifest, service worker (`sw.js`), and offline asset configuration for the main free gateway portal.
2. **`apps/premium-courses/`:**
   - **Status:** **REMOVED / DEPRECATED**. Per `docs/PAID_CONTENT_AUDIT.md` and ecosystem boundary rules, paid courses were decommissioned or redirected to `COSYplatform`. Directory no longer exists under `apps/`.
3. **`apps/premium-events/`:**
   - **Status:** **LIVE**. Contains CSS overrides (`clubs/life/style.css`) and assets for event session presentation views.
4. **`notebook/`:**
   - **Status:** **INTERNAL SCRATCHPAD**. Contains `notebook/index.html` (30KB), an interactive scratchpad tool for developer notes. It is **not linked** from `index.html` or public user navigation.
   - **Founder Flag:** `notebook/` reads like an internal development workspace. Recommend moving to `project/notebook/` or removing from the public web root to avoid exposing non-product scratch pages.
5. **`planning/`:**
   - **Status:** **ABSENT**. Directory does not exist at root (planning roadmaps reside in `project/docs/archive/`).

---

## 7. Categorized Summary Outcomes

### (a) Active & Correctly Placed
- **`data/`:** Essential UI metadata, pricing configurations (`pricing.js`), and language definitions (`languages.js`).
- **`apps/free-portal/`:** Active PWA offline shell for the free public platform.
- **`apps/premium-events/`:** Active visual themes and CSS assets for event discovery views.
- **`project/`:** Active developer tooling,Playwright test suites, and archived documentation.
- **Core Root Specs:** `README.md`, `CANON_SOURCE_OF_TRUTH.md`, `CONTENT_ARCHITECTURE.md`, `SECURITY.md`, `CONTRIBUTING.md`.

### (b) Duplicate / Drifted
- **`vocabulary/` (691 files):** Duplicates lexical entries owned canonically by `COSYdata`.
- **`manuals/` (3,927 files):** Duplicates full interactive CELTA manuals owned canonically by `COSYmanuals`.
- **`grammar/` (55 files):** Duplicates grammar reference materials owned by `COSYtools` / `COSYmanuals`.
- **Root Python Scripts (`fix_all_html.py`, `run_vocabulary_remediation.py`, `verify_quotes_themes.py`):** Loose root copies duplicating canonical scripts in `project/scripts/`.

### (c) Dead / Orphaned / Misplaced
- **`classroom-sync.html`:** Single-file P2P WebRTC presentation utility sitting loose at root.
- **`notebook/`:** Internal developer scratchpad sitting at public root.
- **Root Audit Reports (`AUDIT.md`, `GATE_REPORT.md`, `GRAMMAR_SYSTEMS_INVESTIGATION.md`, `MIGRATION_MAP.md`, `MIGRATION_NOTES.md`, `MISSING_CURRICULUM_DATA.md`):** Loose report files cluttering the repo root.

---

## 8. Prioritized Action List for Founder Approval

*Note: No files have been deleted or moved in this audit step. The following prioritized actions are submitted for founder approval prior to execution:*

1. **Priority 1: Root Cleanup of Duplicate Loose Python Scripts**
   - Delete loose root files `fix_all_html.py`, `run_vocabulary_remediation.py`, and `verify_quotes_themes.py` (canonical versions are already safe in `project/scripts/`).
2. **Priority 2: Root Decluttering of Audit Reports**
   - Move root audit markdown files (`AUDIT.md`, `GATE_REPORT.md`, `GRAMMAR_SYSTEMS_INVESTIGATION.md`, `MIGRATION_MAP.md`, `MIGRATION_NOTES.md`, `MISSING_CURRICULUM_DATA.md`) into `docs/audits/`.
3. **Priority 3: Internal Workspace Relocation (`notebook/`)**
   - Move `notebook/` to `project/notebook/` (or remove from public build) so internal developer notes are not exposed on the live GitHub Pages site root.
4. **Priority 4: Relocate or Extract `classroom-sync.html`**
   - Move `classroom-sync.html` into `apps/classroom-sync/index.html` (or extract to standalone `COSYclassroom` repo) and update service worker cache paths (`sw.js`).
5. **Priority 5: Long-Term Consolidation of `manuals/` and `vocabulary/`**
   - Once remote data loading from `COSYdata` and `COSYmanuals` is 100% verified in all production environments, remove local `manuals/` and `vocabulary/` fallback folders to eliminate data drift across the ecosystem.

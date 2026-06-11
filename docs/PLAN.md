# COSYlanguages Modernization Plan

## STAGE 0 — Hygiene & Documentation
**Status: In Progress**

*   **Junk Cleanup:** Deleted `server.log` and updated `.gitignore` to exclude log files, `node_modules/`, and `.DS_Store`.
*   **Documentation:** Created `README.md` (Project overview, Folder map, Local setup, User roles, i18n principle) and `LANGUAGES.md` (Language support matrix).
*   **Standardization:** Added `.gitattributes` for consistent line endings.
*   **Maintenance:** Global update of footer copyright from 2025 to 2026.

## STAGE 1 — CSS Architecture
**Status: Complete**

*   **CSS Extraction:** Move all inline CSS from `index.html` and other main pages to a modular external architecture.
*   **Modular Files:**
    *   `css/tokens.css`: Design tokens (colors, spacing).
    *   `css/base.css`: Reset and typography.
    *   `css/components.css`: Buttons, cards, navigation.
    *   `css/layout.css`: Structural grids and sections.
    *   Page-specific files: `css/home.css`, `css/portal.css`, etc.
*   **Cleaning:** Remove legacy `<style>` blocks from HTML files.

## STAGE 2 — JS Architecture Audit & Cleanup
**Status: Complete**

*   **Audit & Documentation:** Descriptive headers added to all JS files; i18n system fully documented.
*   **File Reorganization:** Moved logic from `js/features/` to `js/practice/`.
*   **Module Map:**
    *   `js/core/router.js`: NEW — Centralized hash-based routing.
    *   `js/data/languages.js`: NEW — Master language registry.
    *   `js/data/pricing.js`: NEW — Extracted price calculator logic.
*   **Cleanup:** Centralized Service Worker registration in `js/core/engine.js`; moved non-critical scripts to body end.

## STAGE 3 — Grammar Folder Restructure
**Status: Complete**

*   **Modular Architecture:** Restructured `grammar/` directory from a flat list of HTML files into a layered system (`morphology/`, `syntax/`, `phonology/`, `particles/`).
*   **Data-Driven System:** Introduced `grammar/_schema/grammar.schema.json` to standardize grammar data across all languages.
*   **Comprehensive Coverage:** Created structured stubs for all 13 supported languages (EN, FR, IT, RU, EL, ES, DE, PT, HY, KA, TT, BA, BR).
*   **Language Immersion:** Migrated existing content into strictly target-language JSON files.
*   **Backward Compatibility:** Retained legacy HTML interactive lessons and linked them via `practice_links` in JSON data.

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
*   **File Reorganization:** Moved logic from `js/features/` to `js/practice/` and `js/portal/`.
*   **Module Map:**
    *   `js/core/router.js`: NEW — Centralized hash-based routing.
    *   `js/data/languages.js`: NEW — Master language registry.
    *   `js/data/pricing.js`: NEW — Extracted price calculator logic.
*   **Cleanup:** Centralized Service Worker registration in `js/core/engine.js`; moved non-critical scripts to body end.

# COSYlanguages Modernization Plan

## STAGE 0 — Hygiene & Documentation
**Status: In Progress**

*   **Junk Cleanup:** Deleted `server.log` and updated `.gitignore` to exclude log files, `node_modules/`, and `.DS_Store`.
*   **Documentation:** Created `README.md` (Project overview, Folder map, Local setup, User roles, i18n principle) and `LANGUAGES.md` (Language support matrix).
*   **Standardization:** Added `.gitattributes` for consistent line endings.
*   **Maintenance:** Global update of footer copyright from 2025 to 2026.

## STAGE 1 — CSS Architecture
**Status: Planned**

*   **CSS Extraction:** Move all inline CSS from `index.html` and other main pages to a modular external architecture.
*   **Modular Files:**
    *   `css/tokens.css`: Design tokens (colors, spacing).
    *   `css/base.css`: Reset and typography.
    *   `css/components.css`: Buttons, cards, navigation.
    *   `css/layout.css`: Structural grids and sections.
    *   Page-specific files: `css/home.css`, `css/portal.css`, etc.
*   **Cleaning:** Remove legacy `<style>` blocks from HTML files.

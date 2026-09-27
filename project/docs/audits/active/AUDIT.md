# COSYlanguages Front-End Audit Report

This report presents a comprehensive front-end audit of the **COSYlanguages** gateway repository across visual/CSS consistency, structural/logic routing, and UX/UI & accessibility.

---

## Visual / CSS

- [Medium] Hardcoded hex colors override CSS design tokens across sub-pages — `css/games.css`, `css/tools.css`, `css/blog.css` — Hardcoded hex values (`#222b22`, `#b45309`, `#6b21a8`, `#0d7a5f`) override centralized CSS design tokens (`css/tokens.css` / `css/cosy-tokens.css`), causing visual theme drift and dark mode inconsistencies.
- [Medium] Responsive layout breakage on mobile viewports for practice hub and games grid — `css/mobile.css`, `practice/index.html`, `css/games.css` — On small mobile screens (< 380px), multi-column grids in practice setup cards and game category pills overflow horizontally without auto-wrapping, pushing action buttons off-screen.
- [Low] Inconsistent type scales and font family declarations across surfaces — `css/home.css`, `css/blog.css`, `css/tools.css`, `css/print.css` — Homepage uses Fraunces/DM Sans/Nunito, Blog uses Fraunces/DM Sans, Tools uses DM Sans/Lora/Nunito, Print uses Lora/DM Sans. Unstandardized font family stacks create visual jumpiness when navigating across sub-applications.
- [Low] Incomplete emoji + icon navigation compliance on sub-app headers — `apps/index.html`, `classroom-sync.html`, `print-studio/` — The "no translation, emoji + icon navigation" principle specified in the README is applied on `index.html` and main nav, but omitted on several sub-app headers (`apps/index.html`, `classroom-sync.html`), which use text-only links.

---

## Structural / Logic

- [High] Orphaned and broken internal links pointing to missing local routes — `privacy.html`, `404.html`, `index.html`, `classroom-sync.html`, `apps/index.html` — `privacy.html` & `404.html` contain `href="games/index.html"` (missing local directory after COSYgames extraction); `index.html` contains footer link `about/index.html` (non-existent folder); `classroom-sync.html` links to `docs/progressme-lessons-guide.md` (missing file); `apps/index.html` contains 12 relative links (`href="fr-conjugeur/"`, `href="it-coniugatore/"`, etc.) pointing to non-existent local folders instead of external `https://cosylanguages.github.io/COSYtools/` endpoints.
- [Medium] Unhandled network failure states when fetching remote COSYdata / COSYtools APIs — `js/core/engine.js` (`loadLanguageData`), `practice/types/vocabulary/vocabulary.js` — When remote fetch to `https://cosylanguages.github.io/COSYdata/vocabulary/{lang}/index.json` fails due to network outage or CORS blocking, `practice/` falls back to empty pools, triggering a generic prompt or blank screen rather than a user-friendly offline retry banner.
- [Low] Navigation routing inconsistency between COSYplatform course links and local portal pages — `index.html`, `languages/it/index.html`, `apps/premium-courses/` — Homepage course cards point directly to `COSYplatform` (`https://cosylanguages.github.io/COSYplatform/`), but language subpages (`languages/it/index.html`, `languages/fr/index.html`) link to local `curriculum.html` and `grammar.html` files, creating a split navigation architecture between marketing and language hubs.

---

## UX/UI & Accessibility

- [High] Print studio pages lack proper `@media print` control hiding and page break constraints — `print-studio/print-boardgame.html`, `print-studio/print-cards.html`, `print-studio/print-zine.html` — While `css/print.css` exists, standalone print pages embed local inline `<style>` blocks that fail to hide print configuration sidebars/buttons during system browser printing (`Ctrl+P`), causing control UI elements to render onto printed physical paper.
- [Medium] Keyboard navigation trap and missing ARIA attributes on practice hub interactive elements — `practice/index.html`, `practice/types/vocabulary/vocabulary.js`, `js/core/ui.js` — Interactive drag-and-drop match pairs (`form: 'mp'`) and custom select dropdowns lack keyboard focus indicators (`:focus-visible`), `aria-expanded`, and `aria-label` tags, preventing screen reader users and keyboard-only users from completing match tasks.
- [Medium] Low contrast ratio on secondary button text and muted subtitle tokens — `css/components.css`, `css/blog.css` — Muted text tokens (`var(--ink-muted)`, `#57534e`) on warm white (`#FAF7F2`) and grey card backgrounds fail WCAG AA contrast ratio guidelines (3.4:1 contrast vs required 4.5:1 for normal body text).
- [Low] Placement quiz visibility in main page jump links — `index.html`, `placement-quiz.html` — Placement quiz is accessible via hero tertiary button (`📝 Placement Quiz`), but lacks prominent placement in the sticky jump-links header (`#how`, `#courses`, `#languages`, `#tools`, `#calculator`, `#start`), making it harder for first-time visitors seeking level diagnostics to discover without scrolling hero buttons.

---

## Top 5 Priority Fixes

1. **Fix Broken Local Links in Navigation and Reference Engines (`apps/index.html`, `index.html`, `privacy.html`, `404.html`)**: Update `apps/index.html` 12 tool links to point to `https://cosylanguages.github.io/COSYtools/[tool-id]/`, remove `about/index.html` dead link from footer, and update `games/index.html` links in `privacy.html`/`404.html` to `https://cosylanguages.github.io/COSYgames/`.
2. **Enforce Print-Only Styles in Print Studio (`print-studio/print-*.html`)**: Add strict `@media print` rules hiding `.print-controls`, `.filter-section`, and action bars so physical printouts render clean pages without screen controls.
3. **Standardize Hardcoded Hex Colors to Design Tokens (`css/tokens.css`)**: Replace hardcoded hex colors across `css/games.css`, `css/blog.css`, and `css/tools.css` with CSS token variables (`var(--sage)`, `var(--ink)`, `var(--warm-white)`) to ensure theme integrity and WCAG AA contrast compliance.
4. **Add Graceful Offline/Error Banner for Remote Data Fetching (`practice/types/vocabulary/vocabulary.js`)**: Display a user-friendly error/retry banner in the practice hub if `https://cosylanguages.github.io/COSYdata/` or `COSYtools` fetches fail, preventing blank exercise states.
5. **Improve Keyboard Accessibility and ARIA Attributes in Interactive Practice (`practice/`)**: Add `aria-label`, `aria-expanded`, and `:focus-visible` outline styles to drag/drop match pairs, cloze inputs, and custom select menus.

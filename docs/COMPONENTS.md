# Component inventory

Two layers, one rule: a product may use the kernel; the kernel may never use a
product.

- **Kernel** — `css/`, `shared/css/`, `js/`, `shared/js/`. Shared by every page
  and, for the nav, by sibling repositories that load `css/shared-nav.css`
  cross-origin.
- **Product** — `about/`, `comparative/`, `courses/`, `print-studio/`,
  `languages/<code>/`. Each owns its stylesheet and loads it after the kernel.

## Public component API (kernel)

Safe to use in any page. Defined in a kernel stylesheet, used by at least one
page or script in this repo.

| Class | Role | Defined in | Used by |
|---|---|---|---|
| `.btn-primary` | Solid primary action (signal gradient, dark ink) | `css/components.css` | home, courses, about, 404, privacy |
| `.btn-secondary` | Outlined action | `css/components.css` | home, courses, 404, privacy |
| `.btn-soft` | Low-emphasis filled action | `css/components.css` | language hubs |
| `.btn-ghost` | Translucent action on a dark hero | `css/components.css` | home, language hubs |
| `.nav-links` | Desktop nav list | `css/shared-nav.css` | `js/core/engine.js` |
| `.nav-cta` | Nav contact button | `css/shared-nav.css` | `js/core/engine.js` |
| `.nav-login` | Nav log-in link | `css/shared-nav.css` | `js/core/engine.js` |
| `.cosy-nav-more-btn` | Nav "more" trigger | `css/shared-nav.css` | `js/core/engine.js` |
| `.mobile-nav-item` | Bottom mobile nav item | `css/components.css` | `js/core/ui.js`, `js/core/engine.js` |
| `.hero` | Page hero block | `css/components.css` | home, about, language hubs |
| `.course-card` | Course tile | `css/components.css` | language hubs |
| `.tool-card` | Tool tile | `css/components.css` | home |
| `.calc-card` | Price calculator card | `css/components.css` | home |
| `.styled-sel` | Styled select | `css/components.css` | print studio |
| `.sd-breadcrumbs` | Breadcrumb row | `css/components.css` | comparative, language hubs |
| `.sd-jump-link` | Sticky jump link | `css/components.css` | language hubs |
| `.wa-fab` | Floating WhatsApp button | `css/components.css` | home, comparative, language hubs |
| `.cc-icon` | Course-card icon | `css/components.css` | home, language hubs |
| `.cc-title` | Course-card title | `css/components.css` | home, language hubs |
| `.cc-desc` | Course-card description | `css/components.css` | home, language hubs |
| `.site-footer` | Short footer for single-purpose documents | `css/components.css` | marathon and print pages |

## Cross-repo hooks

Defined here, consumed by sibling repositories that load the shared stylesheet
cross-origin. This repo's engine emits different markup, so these are not
required to appear in local pages.

| Class | Role | Defined in |
|---|---|---|
| `.cosy-nav-link` | Nav link for sibling markup | `css/shared-nav.css` |

## Product-owned components

Each product owns its stylesheet and loads it itself, after the kernel.

| Product | Stylesheet | Owns |
|---|---|---|
| Comparative Atlas | `comparative/atlas.css` | `.comp-*`, `.family-badge*`, `.insight-card*`, `.observations-panel*`, `.transfer-tip*` |
| Comparative Atlas | `comparative/word-explorer.css` | `.we-*` |
| Coming Soon | `languages/coming-soon.css` | `.coming-soon-cta-*`, `.lang-card*` |
| Courses | `courses/course-roadmaps.css` | course roadmap layout |
| Print Studio | `print-studio/print.css` | print artefacts |

`css/lang-pages.css` is the kernel stylesheet for the five language hubs. It owns
the language-hub course cards (`.course-card-*`, `.cc-btn`, `.cc-level`) because
five products share them. The card content (`.cc-icon`, `.cc-title`, `.cc-desc`,
`.cc-speak`, `.cc-footer`) lives in `css/components.css`, because the homepage
uses the same markup.

## Reserved kernel classes

Defined and documented but not used by a page today. Keep or delete them
deliberately; never add a second copy.

| Class | Role |
|---|---|
| `.btn-tertiary` | Text-link button |
| `.btn-card-white` | White CTA on a coloured card |
| `.cc-btn` | Course-card action button |
| `.cc-level` | Course-card level pill |
| `.cc-speak` | Speaking meta line in a course card |
| `.cc-footer` | Course-card footer meta |
| `.cc-icon-img` | Image icon in a course card |
| `.speak-badge` | Speaking highlight panel |
| `.hstat` | Hero statistic tile |
| `.badge-inline-sm` | Inline badge |
| `.fpill` | Filter pill |
| `.modal-overlay` | Modal backdrop |
| `.search-input` | Search field |

## Rules

1. A product may use a kernel class; it may not redefine one. Scoped overrides
   such as `.hero .btn-primary` are fine; changing the base is not.
2. A product's stylesheet is referenced only by that product's pages.
3. The kernel never names a product's classes. `tests/components.test.js` fails
   if `.comp-*`, `.we-*`, `.lang-card*`, `.coming-soon-cta-*`,
   `course-roadmaps.css` or `print.css` reappears in the kernel.
4. New shared primitives go in `css/components.css` and get a row in the public
   table; new product styles go in the product's own file.
5. Colour comes from tokens (`shared/css/tokens.css`), never from a literal in a
   component.

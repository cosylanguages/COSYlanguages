# COSYlanguages 🌿

The free, cosy front door to the COSY ecosystem: language hubs (English, French, Italian, Russian, Greek and more), the course catalogue, a placement quiz, a price calculator and the "Hybrid & Community" pages.

Static site, no backend, no build step. Open `index.html` or serve the folder with any static server.

**Live:** https://cosylanguages.github.io/COSYlanguages/

## The ecosystem
| Repo | What lives there |
|---|---|
| [COSYpractice](https://github.com/cosylanguages/COSYpractice) | Free daily practice exercises |
| [COSYmagazine](https://github.com/cosylanguages/COSYmagazine) | COSYmagazine: articles, guides, podcast |
| [COSYtools](https://github.com/cosylanguages/COSYtools) | Reference engines: dictionaries, verbs, grammar atlas |
| [COSYgames](https://github.com/cosylanguages/COSYgames) | Language games |
| [COSYevents](https://github.com/cosylanguages/COSYevents) | Speaking clubs and live events |
| [COSYplatform](https://github.com/cosylanguages/COSYplatform) | Paid courses (students) |
| [COSYmanuals](https://github.com/cosylanguages/COSYmanuals) | Course manuals (students) |
| [COSYdata](https://github.com/cosylanguages/COSYdata) | Shared linguistic data |

Ecosystem URLs are defined once, in `js/core/config.js`.

## Structure
- `index.html`, `courses/`, `languages/<code>/`, `about/`, `hybrid/`, `comparative/` – pages
- `css/` – design tokens, base styles, `modern.css` (the cosy design layer), self-hosted `fonts/`
- `data/ui/<lang>.json` – interface translations (`data-translate-key`)
- `js/core/` – config, nav/engine, i18n, UI behaviour
- `sw.js` – offline shell (best-effort precache)

## Notes
- Fully free for visitors. Supabase is only loaded on `login.html`.
- Fonts are self-hosted (Fraunces, Literata, Commissioner); no third-party requests.

© 2020–2026 COSY Languages. All rights reserved.

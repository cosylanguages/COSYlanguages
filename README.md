# COSYlanguages 🌿

The free, cosy front door to the COSYlanguages ecosystem: language hubs (English, French, Italian, Russian, Greek and more), the course catalogue, a placement quiz, a price calculator and the comparative Atlas.

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
| [COSYstudio](https://github.com/cosylanguages/COSYstudio) | Printable study tools (staged from `print-studio/`) |

Ecosystem URLs are defined once, in `js/core/config.js`.

## Structure
- `index.html`, `courses/`, `languages/<code>/`, `about/`, `comparative/` – pages
- `css/` – design tokens, base styles, `modern.css` (the cosy design layer), self-hosted `fonts/`
- `data/ui/<lang>.json` – interface translations (`data-translate-key`)
- `js/core/` – config, nav/engine, i18n, UI behaviour
- `sw.js` – offline shell (best-effort precache)

## Daily elements
Every daily element stays in the repository that owns it; the pages link out to each other instead of copying content.

| Element | Owner |
|---|---|
| Word, verb, verb + preposition, phrasal verb and idiom of the day | [COSYdata](https://github.com/cosylanguages/COSYdata) |
| Speaking and writing prompts, Daily Challenge | [COSYpractice](https://github.com/cosylanguages/COSYpractice) |
| Fun fact and the hub daily strip | COSYlanguages (`data/daily/<lang>/facts.json`) |
| Cultural spotlights (holiday, science, music, film & TV) | [COSYevents](https://github.com/cosylanguages/COSYevents) |

- `js/daily-strip.js` + `css/daily-strip.css` – the hub daily strip. It reads the fact file above and
  pulls word, verb, verb + preposition and idiom data from COSYdata and prompts from COSYpractice,
  rotating by day of year.
  The speaking and writing tabs show exam/part/task chips, prep and speak timings and a
  follow-up list; panel labels ("Level:", "Prep", "Follow-up questions", …) are localized
  per language through `data/daily/<lang>/band-guide.json` (14 languages), falling back to
  the English labels in `js/daily-strip.js`.
  Writing cards add exam/part/task/genre chips, a word target, a time limit and a
  self-check list. Mount it with `<div data-daily-strip data-lang="en">`;
  `data-track="exam|general"` filters the prompts and `data-audience` picks the age tier.
  `data-slots="word,verb,verb-prep,idiom,speaking,writing,fact"` selects and orders the tabs;
  the language pages show every slot that language publishes. `data-recall="true"` starts
  vocabulary answers hidden behind a "Show answer" control, so the learner retrieves the
  meaning before revealing it.
- `js/daily-directory.js` + `css/daily-directory.css` – a shared directory of every daily surface.
  Other repositories load it cross-origin and mount it with `<div data-daily-directory data-self="data">`.
  `data-self` marks the host's own card as "You are here"; `data-lang` localises the heading.
- Tests: `node --test tests/*.test.js` (`tests/daily-directory.test.js` covers the directory).

## Documentation
Long-form specs and audits live in [`docs/`](docs/README.md): ecosystem architecture,
the placement system, the COSYmagazine editorial spec, and privacy notes.

## Notes
- Fully free for visitors. Supabase is only loaded on `login.html`.
- Fonts are self-hosted (Fraunces, Literata, Commissioner); no third-party requests.

© 2020–2026 COSYlanguages. All rights reserved.

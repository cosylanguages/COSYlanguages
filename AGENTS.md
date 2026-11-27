# AGENTS.md — COSYlanguages repository

Persistent notes for agents working in this repo and the wider COSYlanguages org.

## What this repo is

`COSYlanguages` is the public gateway site of the COSYlanguages ecosystem: a set of
**static GitHub Pages sites with no build step and no backend**. Pages are plain
HTML/CSS/JS served directly from `main`. There is no bundler, no framework, and no
server runtime — treat every change as "edit files, push, Pages redeploys".

- Deployed at `https://cosylanguages.github.io/COSYlanguages/`.
- Shared runtime data lives in the sibling `COSYdata` repo and is fetched at
  runtime, e.g. `https://cosylanguages.github.io/COSYdata/comparative/*`.
- Runtime URLs are absolute `cosylanguages.github.io` paths, so cross-repo links
  break if a repo is renamed.

## Ecosystem map (13 repos under the `cosylanguages` account)

Core: `COSYlanguages` (gateway), `COSYplatform` (app: auth, classroom, studio),
`COSYdata` (datasets + generators), `COSYworld` (dialogue engine game),
`COSYtools` (reference tools), `COSYevents`, `COSYmanuals`, `COSYmagazine`,
`COSYpractice`, `COSYgames`, `COSYstudio`.

Watch-outs:
- `COSYlanguagesss` and `COSYplatform-source` are extra repos not part of the
  documented set. `COSYlanguagesss` is a large (≈450 MB) near-duplicate of the
  gateway with its own GitHub Pages site and overlapping content — prefer
  `COSYlanguages` as the source of truth.
- `COSYlanguages` is a shallow clone in some workspaces; run
  `git fetch --unshallow` (or `--deepen=N`) before history-dependent operations.
- `git push` can fail with `403 ... denied to cosylanguages` even when the token has
  write access. The cause is credential plumbing, not permissions: `~/.gitconfig` sets a
  URL-scoped `credential.https://github.com.helper`, and that helper wins over a generic
  `-c credential.helper=...` override, so it feeds git a token without write scope.
  Push with an explicit URL instead, bypassing the helpers:

  ```bash
  GIT_TERMINAL_PROMPT=0 git -c credential.helper= -c 'credential.https://github.com.helper=' \
    push "https://x-access-token:${GH_PAT}@github.com/cosylanguages/COSYlanguages.git" main:main
  ```

  Before blaming the token, check it with the API (`POST /git/refs` on an existing SHA):
  a `201` means the token is fine and the problem is the helper. Never persist the PAT in
  the remote URL — pass it per command as above.

## Course types

The canonical list of course types lives in COSYplatform (`curriculums/_schema/course-types.json`, documented in its `docs/COURSE_TYPES.md`). Real courses with a page in `courses/`: `general`, `spoken`, `professional`, `travelling`, `relocation`, and `exam`. The exam page is `courses/exam-preparation.html`; `courses/exam.html` redirects to it so the platform's name for the course resolves. `discussion` (speaking clubs from COSYevents, platform only) and `pronunciation` (planned) have no page here.

## Data ownership (do not copy between repositories)

Each kind of content has exactly one owning repository. This repo links to it or
fetches it at runtime; it never stores a second copy.

| Content | Owner | How this repo reaches it |
|---|---|---|
| Vocabulary, word lists, verbs, idioms, daily word/verb/idiom | COSYdata | `COSY.loadLanguageData()` → `COSYdata/vocabulary/<lang>/index.json` (no local fallback) |
| Curriculum units, lessons, level syllabi, course-type schema | COSYplatform | `COSY.loadCurriculum()` → `COSYplatform/curriculums/<lang>/general/<LEVEL>.json` |
| Grammar points, morphology, manuals | COSYmanuals | `shared/js/grammar-embed.js`, link-outs |
| Speaking/writing prompts, drills, daily practice | COSYpractice | `data/daily/<lang>/*.json` is a *cache* of COSYpractice output; edit the source repo |
| Cultural spotlights, club reviews | COSYevents | `shared/js/daily-spotlights.js`, `shared/js/club-reviews.js` |

The `languages/<code>/vocabulary.html` and `curriculum.html` pages are link hubs, not
data pages: they must point at the owning repository instead of rendering local lists.
A missing fetch means "no data yet", never "fall back to a local copy".

## Placement quiz (`placement-quiz.html`, `js/placement/`)

Account-free CEFR check with five skill threads (grammar, vocabulary, reading,
writing, speaking). Docs: `docs/PLACEMENT.md`. Tests: `tests/placement.test.js`,
`tests/placement-loading.test.js`.

Invariants that were broken before and must not regress:

- **Banks load on demand, not on page load.** `js/placement/bank-loader.js` fetches
  `question-bank-en.js` (192 KB) for English and
  `question-banks-multilingual.js` (127 KB) for the other thirteen languages when
  the learner presses Start or Resume; the quiz page ships neither as a `<script>`.
  `startAssessment()` and `resumeSession()` are `async` and await
  `window.COSYPlacementBanks.load(lang)` before building the engine, and a failed
  fetch renders `bank.error` instead of a blank quiz. First load of the page is
  ~55 KB gzip instead of ~111 KB. Do not add the banks back as page scripts.

- **Prompts are localised, not reused English.** Task text lives in
  `prompts-multilingual.js` (six writing tasks A1–C2 + five speaking tasks per
  language). Read them through `getWritingPrompts(lang)` / `getSpeakingPrompts(lang)`
  in `prompts-and-rubrics.js`; never read `writingPrompts.en` directly.
- **Banks are 42 items per language** (7 bands × 3 receptive skills × 2). Two per
  cell is the floor — with one, the adaptive selector has nothing to choose at that
  difficulty. English has 252 (×12).
- **The evaluator is language-aware.** Connectors, formal markers and the long-word
  threshold come from a per-language profile in `writing-evaluator.js`; tokens are
  split on `\p{L}`, because an ASCII-only tokenizer scored every Greek or Cyrillic
  submission as A1. Called as `evaluateSubmission(text, prompt, { language })`.
- **Ability is estimated, not stepped.** `estimateAbility()` is a Rasch maximum
  likelihood over the answered items and also returns the standard error, which
  drives the reported range and confidence. The old +0.6/−0.6 walk ignored how
  informative each answer was.
- **Item budget is `min(3|8, items available)`.** A budget larger than the bank makes
  a thread run dry instead of ending on a count.
- **Skipping grants nothing.** A skipped task leaves `theta` untouched and is
  reported as `Insufficient Evidence`; speaking is self-assessed through a CEFR
  select because no audio is analysed.
- **Resume rebuilds the used-item index.** State is persisted as JSON, where
  `usedItemIds` (a `Set`) collapses to `{}`; `restoreState()` rebuilds it from the
  saved history, or the first `getNextItem()` after a reload dies on `.has()`.
- **Chrome follows the interface language, questions do not.** All quiz copy lives
  in `js/placement/strings.js` (en/fr/it/ru/el, flat dot keys, `{var}`
  interpolation, English fallback). It is a JS module rather than
  `data/ui/<lang>.json` because the quiz paints before the async dictionaries
  resolve and `t()` returns `''` for a missing key. Static page chrome is hooked
  with `data-placement-i18n="page.title"`; the report localises model output by
  `code` + `params` (`scoreCode`, `diag.*`, `rec.*`), keeping the English `text`
  fields for other consumers. Unknown language codes fall back to English.
  Tests: `tests/placement-i18n.test.js`.

## Hybrid section (retired)

`hybrid/` is gone: `bridge`, `magazine`, `radio` and `zine` repeated content owned by
COSYmagazine, `print-studio/` and COSYtools, and the hub itself was a second entry
point. Do not recreate it — link to the owning repository instead.

## Tests

This repo uses the Node built-in test runner. Word Explorer unit tests:

```bash
node --test tests/word-explorer.test.js
```

`tests/html-links.test.js` is the static guard for the published pages: every relative
`href`/`src` must resolve on disk, every `target="_blank"` anchor must carry
`rel="noopener noreferrer"`, and every `sitemap.xml` `<loc>` must map to a real file.
`tests/architecture.test.js` is the guard for the shell contract (see "Shell
contract" below).
`npm run audit:css` (`scripts/audit-css-usage.js`) reports CSS classes that no
page, script or data file mentions — 140 today, mostly in `print-studio/print.css`
and legacy homepage sections. It is a report, not a gate: classes built at runtime
(`'we-g' + index`) or used by a sibling repo through a shared stylesheet look dead,
so check each hit before deleting. `css/portal.css` went this way once
`placement-quiz.html` turned out to link it without using a single rule. `tests/a11y.test.js` is the static accessibility guard: every
page declares `<html lang>`, every image carries `alt`, every button and link has
an accessible name, every form field is labelled, ids are unique per page and
`aria-labelledby`/`describedby`/`controls`/`owns` references resolve. It cannot
see contrast, focus order or target size, so those still need a browser. There is
no build step, so these checks are the only thing
standing between an edit and a 404 or an off-palette page. Run the whole suite with
`node --test tests/*.test.js`.

Other repos in the org have their own runners (`npm test` in `COSYplatform`,
`COSYtools`, `COSYmagazine`, `COSYdata`; `node --test tests/*.test.mjs` in
`COSYworld`/`COSYmanuals`). Supabase/RLS tests require the Supabase CLI + Docker
and only run in CI.

## Brand rule

The project is **COSYlanguages** (or **CL** in tight UI labels). The bare word "COSY"
must not appear anywhere: not in prose, not in `<title>`/meta, not in the UI
dictionaries. Cases settled so far:

- Self-references use "COSYlanguages": `COSYlanguages Ecosystem`, `COSYlanguages
  Placement Assessment`, `COSYlanguages Gazette & Community Zine`.
- Gamification labels use the short form: `CL Points`, "10 CL points for each
  correct answer".
- Sub-site names (`COSYdata`, `COSYtools`, `COSYmagazine`, `COSYEnglish`,
  `COSYfrançais`, …) are identifiers, not the bare word, and stay.
- Code identifiers stay too: `window.COSY`, `COSY.*` calls in `onclick`
  attributes, `COSY_I18N`, DOM ids/classes (`cosy-nav`, `cosy-theme-btn`),
  storage keys (`cosy.theme`, `cosy_last_language`), the file names
  `cosy-theme.js` / `cosy*`, and the `cosy-hub-vN` cache name.

Renaming a code identifier is a separate, breaking change: sibling repositories
call `window.COSY` and read the `cosy.*` storage keys.

## Colour tiers: paper, signal, level

`shared/css/tokens.css` is the only palette, and it is published cross-origin, so a
change there recolours every sibling repo at once. It has three tiers:

- **Paper** (unchanged, the default): `--cosy-color-cream` `#FAF7F2`,
  `--cosy-color-surface` white, `--cosy-color-ink` `#1C1917`, sage `#416B49`.
  Surfaces, body text, cards, nav. This is the calm ground the content sits on.
- **Signal** (teal): `--cosy-signal` `#0ABBB5`, `--cosy-signal-secondary` `#0CA2B0`,
  `--cosy-signal-deep` `#087A80`, `--cosy-signal-soft` `#DFFAF8`, gradient
  `--cosy-signal-gradient`. Used *only* where something is alive: active nav, nav
  hover, progress, selection (`::selection`), focus ring, badges, checkmarks.
  `#0ABBB5` is **2.39:1 on white**, so it is a fill and graphic colour, never body
  text or a link. For teal text use `--cosy-signal-ink`, which is
  `--cosy-signal-deep` in light mode and `#7FE7E1` in dark mode.
  `--focus-ring` is the signal colour (3px solid deep teal, teal on dark).
- **CEFR levels**: `--cosy-level-<a0a1|a2|b1|b2|c1|c2>-{fill,soft,ink}`, aliased
  from the existing palette (green, honey, coral, rose, navy, ink) so the accent
  budget does not grow. `*-fill` stays dark in both themes (white text sits on it);
  `*-soft` and `*-ink` flip with the theme.

Rule of thumb: a new accent may only be introduced by retiring one. The budget is
the signal tier, six course tracks, six levels and the semantic red/amber/green.

Footers are pinned dark in both themes with `--cosy-footer-bg` (`#233827` light,
`#1B2A20` dark). `--cosy-color-sage-deep` flips to a light ink under dark mode, so
using it as the footer background left white text on a cream bar.

### This repository's identity is the signal tier

Sage is the paper; teal is the brand. `--cosy-languages-accent`, `--btn-primary-*`,
the nav CTA (`#cosy-nav .nav-cta`), the home hero primary, active nav
(`.cosy-nav-link.active`, `.mobile-nav-item.active`), button focus, breadcrumb hover
and `::selection` all resolve to the signal tier. Fills use `--cosy-fill-signal`
(the #0ABBB5→#0CA2B0 gradient) with `--cosy-on-signal` (#06201F) — dark ink, because
#0ABBB5 is 2.39:1 on white. Teal text uses `--cosy-signal-ink`, never
`--cosy-signal`. `tests/design-system.test.js` holds the contract: brand accent
wired, fills readable, tier consumed, no page hardcodes the brand hexes. Do not
"fix" the dark ink to white.

`css/components.css` owns `.site-footer`, the short footer for single-purpose
documents (marathon levels, print hubs). It is token-only and follows the theme. A
page must never paint its own footer colour inline — that is how the eight marathon
footers drifted to orange, red, purple and near-black.

## Shell contract (`tests/architecture.test.js`)

There is no build step, so "each product is independent" is enforced by tests, not
by a bundler. A *product* is `about/`, `comparative/`, `courses/`, `print-studio/`
or `languages/<code>/`; everything else (`css/`, `js/`, `shared/`, `images/`,
`data/`, `fonts/`) is the *kernel*. Five rules:

1. Every real page loads the shell: a tokens stylesheet, `js/core/engine.js`, and
   exactly one `<footer>`. Redirect stubs, the Google verification token and
   `print-studio/monthly-zine-issue-1.html` are exempt.
2. A `<footer>` tag carries no colour (`var()` fallbacks are tokens, so allowed).
3. No product references another product's `css/`, `js/` or `data/`; the kernel
   never references a product. Linking another product's *page* is fine — that is
   navigation.
4. Inline `style=` attributes carry no off-palette colour. The last exceptions are
   seven hexes in the Comparative Atlas HUD, which draws on a fixed dark canvas;
   convert those with dedicated HUD tokens before removing the allowlist.
5. Off-palette colour literals in `.html`/`.css` are budgeted at 399 and may only
   shrink. Add a token instead of raising the number. A literal inside
   `var(--token, #fallback)` is not counted: it is the token's own value spelled out
   for engines without custom properties, and `#fff` counts as `#FFFFFF` because the
   palette compares values, not spellings. Only literals that stand on their own are
   debt, which is why the count is 399 and not the ~790 a raw grep finds. The
   remaining debt is deliberately local: print artefacts (pure greys that must stay
   grey on paper), the login portal, per-language accents in `lang-accents.css` and
   the daily strip's dark theme. Tokenise those with a design decision, not
   mechanically.

Consequence worth knowing: a page that hardcodes a shade fails the suite, and a
page that forgets `engine.js` fails it too.

## Products manifest (`products.json`)

`products.json` is the delete checklist. Each entry is `{ id, dir, entry }` and
`tests/products.test.js` proves the rule the architecture rests on: deleting a
product's folder and its manifest entry may leave navigation links to fix, but it
can never leave a script, style, data or image dependency pointing into the deleted
folder.

- Every product folder on disk is listed, and every listed folder exists.
- `entry` is a real HTML page inside `dir` and is reachable from sitemap, home, nav
  or footer.
- No file outside a product may reference that product's non-HTML assets (`.js`,
  `.css`, `.json`, images, fonts, PDFs). Page links are navigation and are allowed;
  shared code must live in the kernel.
- No product may reference another product's non-HTML assets.

Adding a product means adding its folder and its manifest entry. Removing one means
deleting both.

## Component layer (`docs/COMPONENTS.md`)

`css/components.css` is the kernel's public component layer: buttons, nav, cards,
badges, inputs, floating buttons, toasts, the sticky-directory header and
`.site-footer`. Every page loads it, so it is the most expensive CSS in the repo.
Keep it for shared primitives only.

Product-owned styles live with the product and are loaded by the product's own
page, after the kernel:

| Product | Stylesheet | Owns |
|---|---|---|
| Comparative Atlas | `comparative/atlas.css` | `.comp-*`, `.family-badge*`, `.insight-card*`, `.observations-panel*`, `.transfer-tip*` |
| Comparative Atlas | `comparative/word-explorer.css` | `.we-*` |
| Coming Soon | `languages/coming-soon.css` | `.coming-soon-cta-*`, `.lang-card*` |
| Courses | `courses/course-roadmaps.css` | course roadmap layout |
| Print Studio | `print-studio/print.css` | print artefacts |

`css/lang-pages.css` is the kernel stylesheet for the five language hubs and owns
their course cards (`.course-card-*`, `.cc-btn`, `.cc-level`). The card content
(`.cc-icon`, `.cc-title`, `.cc-desc`, `.cc-speak`, `.cc-footer`) lives in
`css/components.css` because the homepage uses the same markup; it used to sit in
`home.css`, which language pages never load, so those cards were partly unstyled.

`css/modern.css` is the global design layer: button and footer polish, the
language-page clean-up and the dark-mode fixes. The homepage's own design (hero,
sections, course rows, reviews, final call) lives in `css/home-modern.css`, which
only `index.html` loads, and it loads before `modern.css` so the later global
rules still win. It used to be the first 500 lines of `modern.css`, downloaded by
every page for no reason.

`docs/COMPONENTS.md` is the inventory: public API, cross-repo nav hooks, reserved
classes. `tests/components.test.js` fails when a documented class is not defined
in the kernel, when a public class is unused, or when a product selector
reappears in `css/components.css`.

The Atlas tabs and Word Explorer active chips use `--cosy-signal-deep` (white
text), not sage; selected language chips use `--cosy-signal-soft` /
`--cosy-signal-ink`. The heatmap mode chips use the same deep teal.

A bare file under `languages/` (for example `languages/coming-soon.html`) belongs
to the `languages` hub, not to a product named after the file. `product()` in
`tests/architecture.test.js` classifies it that way.

## Footer: one source, rendered at source time

`shared/partials/footer.html` is the standard footer. `scripts/sync-footer.js`
renders it into the 39 pages that carry it (`{{root}}` becomes the page's depth
prefix, `{{pin}}` is the home page's "Add to home screen" link), and
`tests/footer.test.js` fails when a page and the partial disagree — so the fix for
a drifting footer is `npm run sync:footer`, never a hand edit. `npm run check:footer`
reports drift without writing.

This is deliberately *not* a runtime footer. An earlier `injectCanonicalFooter`
replaced each page's footer at runtime and silently dropped the six course links;
the partial keeps the markup in the published HTML, so no-JS readers and crawlers
still get it, and a page can still be deleted without touching anything else.

The footer is the one place this repo accepts a source-time generator. Do not
extend the pattern to page bodies: there is no build step, and a partial that
grows into a template engine would be one.

## Why `js/core/engine.js` stays one file

1428 lines, 67 KB raw / 14.5 KB gzip. Splitting it into four classic scripts keeps
the same total gzip and adds three requests to all 51 pages; splitting it into ES
modules would break the `window.COSY` global contract that sibling repos and the
`onclick="COSY.*"` attributes rely on. Its inner closures share state (the nav
render, the language panel, the mega-menu) that a file boundary would force into
an explicit interface for no measured gain. Shrink it by deleting dead branches,
not by moving code.

## Internationalisation (one engine, two dictionaries)

`js/core/i18n.js` is the only i18n engine. `js/i18n.js` was deleted: it was a
second engine that re-fetched and re-applied strings, and it existed for its
footer injection only, which now lives in `js/core/i18n.js`.

- `data/ui/<lang>.json` — flat/nested keys, served to `window.t()` and to
  `[data-translate-key]` nodes (nav and footer templates in `engine.js`). Missing
  keys stay empty on purpose: target-language pages are not back-filled with
  English.
- `js/i18n/<lang>.json` — nested keys for `[data-i18n]` chrome in page markup,
  with an English fallback.
- Both files exist for el, en, fr, it, ru; other languages fall back to English
  chrome.
- A `/languages/<code>/` path decides the UI language for that page. Only an
  explicit switch is remembered in `cosy_last_language`, so reading a French page
  does not silently turn the rest of the site French.
- `[data-translate-key]` wins over `[data-i18n]` on the same node, and values that
  carry their own emoji alongside a `.nav-item-icon` are stripped, otherwise the
  nav rendered "🔐🔐 Connexion".
- The footer is per-page markup and is translated in place: every page carries its
  own `<footer>` whose labels use `data-translate-key` (`footer_*`, `course_*`). The
  engine no longer generates one. It used to replace every footer at runtime with a
  generic copy, which silently dropped the six course links, so `tests/footer.test.js`
  now holds the contract: one non-empty footer per page, the standard links present,
  and every label it asks for defined in all thirteen dictionaries.

## Conventions

- Keep changes additive and minimal; do not delete existing functionality.
- **Heading levels follow the outline.** A page has one `h1`; section headings are
  `h2`; card titles are `h3`; footer column titles are `h2`. `tests/a11y.test.js`
  fails on any skip, so when promoting a card title, move its CSS size rule with
  it (`.mc-body h3`, `.card-breakdown-box h3`, `.mp-cozy-callout h3`, …) instead
  of leaving an `h4` under an `h2`.
- **Course pages (`courses/*.html`) are half-translated by design.** Their identity
  (`<title>`, `<h1>`), shared chrome (skip link, breadcrumbs, `Main navigation`,
  pagination `aria-label`, FAQ heading, WhatsApp CTA), every call-to-action button and
  the section headings use `data-translate-key` / `data-translate-aria-label` with
  `course_*` keys in all five UI dictionaries. The body copy underneath — CEFR
  descriptors, grammar inventories, exam blurbs — is content and stays in English
  until a translator writes it; do not machine-translate it. When adding a hook, never
  touch `<footer>`: that block is generated by `scripts/sync-footer.js` from
  `shared/partials/footer.html`, and `tests/footer.test.js` fails on any drift. The
  logo `alt` lives in that footer, so it is deliberately not hooked.
- The same rule covers the chrome pages — `privacy.html`, `about/index.html`,
  `login.html`, `placement-quiz.html`, `404.html`, `languages/coming-soon.html`: page
  titles, headings, labels, buttons and the storage-console controls are keyed
  (`privacy_*`, `about_*`, `login_*`, `quiz_*`, `notfound_*`, `coming_*`), while the
  legal and story prose underneath stays English until someone translates it.
- `comparative/` holds the Comparative Atlas; Word Explorer is a tab wired in
  `comparative/index.html` (`word-explorer-*.js/css`, docs in `WORD_EXPLORER.md`).
  Only the landing view's data loads up front (`language-meta`, `language-tree`,
  `daily-insights`); `ensureViewData(tabId)` in `comparative/index.html` fetches
  `grammar-inventory` (31 KB), `sound-shifts` and `transfer-notes` the first time
  their tab opens, and renders that panel then. Word Explorer has always loaded
  its own data on first tab activation. Deferring the three saves ~37 KB on a
  page most visitors use for the 3D tree. A new panel must register in
  `ensureViewData` and `ATLAS_DATA`, or it renders empty.
- Shared assets live in `shared/`; i18n strings in `shared/i18n/*.json`.

## Daily elements (ecosystem ownership)

Every daily element stays in the repository that owns it. Do not copy a sibling's
daily content into another repo — link out instead.

| Element | Owning repo | Where |
|---|---|---|
| Word, verb, verb + preposition, phrasal verb, idiom of the day | COSYdata | `daily/<lang>/calendar/<slot>/YYYY-MM.json`, `daily/<lang>/idioms.json` (prebuilt monthly by `scripts/build-daily-calendar.cjs`) |
| Speaking and writing prompts, Daily Challenge | COSYpractice | `data/daily/<lang>/speaking.json`, `writing.json`, `hub.js` |
| Fun fact + hub daily strip | COSYlanguages | `data/daily/<lang>/facts.json`, `js/daily-strip.js` |
| Cultural spotlights (holiday, science, music, film & TV) | COSYevents | `shared/js/daily-spotlights.js`, rotated by the `daily-spotlights` workflow |
| Daily drills (conjugation, prepositions) | COSYtools | `practice/daily/`, `shared/js/daily-feed.js` |

The shared directory that links all of these together is `js/daily-directory.js` +
`css/daily-directory.css` in this repo. Sibling repos load it cross-origin (like
`js/daily-strip.js`) and mount it with
`<div data-daily-directory data-self="data|practice|languages|events|tools">`.
`data-self` marks the host's own card "You are here"; `data-lang` localises the
heading. Without `data-lang` the component reads `<html lang>`, which the i18n engine
now sets to the interface language, and it re-renders on `cosyI18nReady` and
`cosyLanguageChanged` — the strip used to pin the slot to the language it was
practising, which left the headings English under a French interface. Card titles
and descriptions live in `CARD_I18N` (en/fr/it/ru/el) and win over the English titles
the COSYtools registry sends. Keep its `DESTINATIONS` list in step with COSYtools
`shared/js/daily-feed.js` `DAILY_DESTINATIONS`. Tests: `tests/daily-directory.test.js`.

### Speaking tab (curated CEFR prompts + exam brief)

The Speaking tab reads COSYpractice `data/daily/<lang>/speaking.json`. Every one of
the 14 languages has curated prompts (`"curated": true`) for all four strip bands —
A0-A1, A2, B1-B2, C1-C2 — modelled on the real speaking part of the exams each
language is taught for: IELTS, TOEFL iBT, Cambridge, Trinity and ECPE for English;
DELF/DALF and TCF; CILS and CELI; ТРКИ (ТЭУ/ТБУ/ТРКИ-1–4); Ελληνομάθεια; DELE and
SIELE; Goethe, ÖSD and telc; CAPLE and Celpe-Bras; the Armenian, Georgian, Tatar,
Bashkir and Chuvash state language exams; and the Breton Diplom war ar Brezhoneg
(DAB). Every curated entry carries the exam brief:
`exam`, `part`, `task`, `prep_seconds`, `speak_seconds`, `follow_ups` (one or two
questions). `exam` and `part` are required by the validator, and `part` names the
exam's own speaking part ("Part 2 · Long turn (cue card)", "Sprechen Teil 1 · Vortrag",
"Tarea 1 · Monólogo", "Задание 1 · Монолог по теме").
The strip renders those as chips, a "Prep 1 min / Speak 2 min" line and a follow-up
list. The CEFR band guide that used to sit under the prompt (what the band expects,
the can-do descriptor, the certifying exams) was removed; only the localized control
labels from `data/daily/<lang>/band-guide.json` are still used (see "Band guide" below).
Fields stay optional at render time, so prompts
without them (including cached ones) still render; the brief is speaking-only. Validate
in COSYpractice with `node scripts/validate-daily-prompts.js`. Tests:
`tests/daily-strip.test.js`.

French cards also carry `theme`, the category id from
`COSYpractice/data/exam/fr/delf-dalf-themes.json`. The catalogue lists the DELF B1,
DELF B2, DALF C1 and DALF C2 themes supplied for exam preparation (55 categories,
545 themes) with the official task shapes, exam-format notes, method advice and
example subjects. The Exam Preparation course page (`courses/exam-preparation.html`)
renders all of it through `js/exam-themes.js`: format notes and parts are always
visible, while method and example subjects sit in a collapsed details block per level.
DALF C2 writing is a single structured text of 700 words minimum in 3 h 30, not a
250 + 300-word pair. COSYpractice's `node scripts/test-exam-themes.js` fails if a
category has no speaking or writing card at the matching exam, or if the C2 writing
format regresses.

Coverage floor, enforced by `node scripts/test-speaking-coverage.js` in COSYpractice:
**≥10 curated exam cards and ≥5 general cards per CEFR band per language**, and the
general track must use all twelve activities in all fourteen languages. Add cards,
never drop below the floor. Every language currently clears it in every band (899
curated speaking cards in total); the thin six (hy, ka, tt, ba, cv, br) were raised
from the old 8/4 floor and the richer five (en, fr, it, ru, el) from 4 to 5 general
cards in the lower bands. Those five were then widened again by 20 cards each
(12 exam + 8 general), so en holds 105, and el/fr/it/ru hold 87 each — 999 curated
cards in total. Content is append-only in practice: new ids are
`<lang>:speaking:x<n>` (exam), `gx<n>`/`gy<n>` (general) and `p<n>` (richer-language
exam gaps) to stay clear of the legacy `1..10`, `c1..cN` and `g1..gN` ids. New exam
cards continue the `c<n>` sequence at the highest number already used.

## Daily speaking prompts: exam and general tracks

`data/daily/<lang>/speaking.json` in COSYpractice has two kinds of card.

- **Exam track** (default): `exam` + `part` + `task`, modelled on a real exam task.
- **General course** (`"track": "general"`): no exam; carries `activity` instead
  (brainstorm, analyse, describe, compare, discuss, narrate, role-play,
  problem-solving, interview, plan, present, identify).

Every curated card also carries `audience` (`young`, `teen`, `adult`, `senior`).
The strip resolves an audience from the container's `data-audience`, else the
site-wide `cosy_audience_preference` (`children`/`teens`/`adults`/`seniors`, see
`js/core/audience.js`), else `<html data-audience>`. It then ranks cards by
audience fit first and level distance second, so age beats level: a young learner
who picks C1-C2 gets a B1-B2 card rather than an adult-only one.
`data-track="general"|"exam"` narrows to one track.

A0-A1 speaking drops the preparation-timer chip but keeps the speaking timer;
B1-B2 and C1-C2 keep both. Validator: `node scripts/validate-daily-prompts.js`
in COSYpractice. Tests: `tests/daily-strip.test.js` here.

## Daily writing prompts: exam and general tracks

`data/daily/<lang>/writing.json` mirrors the speaking files, with the same two
tracks and the same `audience` rules. Writing cards carry their own scaffolding:

- `genre` – what the learner is producing ("Formal email", "Essay", "Review").
- `word_min` / `word_max` – the word target, shown as "140-190 words".
- `write_minutes` – the time limit, shown as "40 min".
- `checklist` – 2–3 self-check points, shown under "Before you finish, check".

Writing cards render the same chips plus the self-check list, and never the
speaking-only fields (`prep_seconds`, `speak_seconds`, `follow_ups`).

A0-A1 writing is deliberately stripped back: it keeps the task, genre and word
target but hides the exam name, part label, `write_minutes` chip and checklist.
B1-B2 and C1-C2 keep the full brief. Tests: `tests/daily-strip.test.js`.

Coverage floor, enforced by `node scripts/test-writing-coverage.js`: **≥6 curated
exam cards and ≥4 general cards per CEFR band per language**, complete scaffolding
on every curated card, and all twelve writing activities used per language. New
ids are `<lang>:writing:x<n>` (exam) and `wx<n>`/`gx<n>` (general), clear of the
legacy `1..10`, `c1..cN` and `g1..gN` ids. Authoring rules of thumb: exams at each
band follow IELTS, TOEFL, Cambridge, DELF/DALF, Goethe, DELE and ТРКИ task
shapes; general cards name a real-life writing situation, not an exam.

## Band guide file (localized control labels, `data/daily/<lang>/band-guide.json`)

One file per language, all 14, including `cv` (which has no `data/ui` file). The
strip no longer renders a CEFR band guide block, so only the `chrome` labels are
still consumed:

```json
{ "lang": "ru",
  "ui":     { "what": "…", "focus": "…", "canDo": "…", "length": "…", "exams": "…" },
  "chrome": { "level": "…", "prep": "…", "speak": "…", "words": "…",
              "followUps": "…", "checklist": "…" },
  "bands":  { "a0-a1": { "label": "A0-A1 · Уровень выживания",
                         "speaking": { "canDo": "…", "expects": "…", "focus": "…", "exams": "…" },
                         "writing":  { "canDo": "…", "expects": "…", "focus": "…", "exams": "…", "length": "…" } } } }
```

`chrome` carries the panel's own labels ("Level:", "Prep", "Speak", "words",
"Follow-up questions", "Before you finish, check") **in the language being practised**,
so it is a fallback only: the strip reads those labels from `data/ui/<lang>.json`
(`strip_level`, `strip_prep`, `strip_speak`, `strip_words`, `strip_follow_ups`,
`strip_checklist`) first, because a French interface practising English must still
say "Niveau :" and "Questions de suivi". `listen` and `practice` remain in
the files but are no longer read: the "🔊 Listen" button and the "🚀 Practice in Hub"
link were removed from every tab, so the only footer link left is the COSYtools one
on the verb tabs.
`ui` and `bands` are retained in the files but no longer rendered; the per-language
`exams` strings are the reference for which exam certifies which band.
`fetchBandGuide()` loads the file once per language and caches it in
`sessionStorage`; a missing or broken file leaves the English defaults in
`js/daily-strip.js`, so a partial translation degrades to English rather than
blanking. The lookup order is: UI dictionary, then the guide's `chrome`, then English. Tests: `tests/daily-strip.test.js` (completeness, localized labels,
no-English-leak, fallback, language switch).

## Ecosystem strip (shared, top of every site)

`js/ecosystem-strip.js` + `css/ecosystem-strip.css` render the one-line
"🌐 COSYlanguages Ecosystem" bar that sits at the very top of every COSYlanguages site except the
COSYlanguages hub. Sibling repos load it cross-origin and mount it with
`<div data-ecosystem-strip data-self="events">`; `data-self` (the repo's key) drops
the host's own link, `data-lang` localises the brand. The public links, in
canonical order, are COSYlanguages · COSYevents · COSYdata · COSYtools ·
COSYpractice · COSYgames; COSYplatform and COSYmanuals are appended only for
signed-in visitors (shared Supabase key `cosy-auth`). Do not hand-write the bar in
a sibling repo — mount this component instead. Tests: `tests/ecosystem-strip.test.js`.

### Chrome rendered by JavaScript

Anything the JS builds itself (nav and mega-menu in `js/core/engine.js`, the daily
strip in `js/daily-strip.js`) must resolve its labels through the dictionary, never
from a template literal alone:

- `js/core/engine.js` uses `tt(key, englishFallback)`; nav labels go through
  `getNavLabel`. `COSY_ECOSYSTEM_MENU` keys derive `eco_<key>_title` /
  `eco_<key>_promise`, groups derive `eco_group_<accentKey>`.
- `js/daily-strip.js` uses `t(key, englishFallback)`; tab labels carry `labelKey`,
  activity chips derive `strip_activity_<key>` and `strip_writing_activity_<key>`,
  parts of speech derive `pos_<value>`.
- Keys live in `data/ui/<lang>.json` for all five UI languages (`el`, `en`, `fr`,
  `it`, `ru`); a missing key would blank the label in that language.

Two timing traps, both already paid for:

- The constructor of a component runs before the dictionary lands, so a value read
  there stays English forever. Resolve labels per render (see the `title` getter).
- The daily strip's meta line is assembled in `buildMeta(item)` at render time, not
  once in `parseDailyItem`, otherwise "Example:", "Pattern:" and friends freeze in
  the language that was active while the data was fetched.

`tests/component-i18n.test.js` fails when a component asks for a key no dictionary
has, when a label is hardcoded again, when a page carries its own translation table
(`const UI_TEXT`), or when a page hardcodes `<base href="/COSYlanguages/">`.

### 404 page

`404.html` answers unknown paths at any depth, so it derives `<base>` from the URL at
runtime (`/COSYlanguages/` on Pages, `/` locally or on a custom domain). A hardcoded
base made every stylesheet and script 404 outside Pages, which silently disabled the
whole i18n engine. The page has no translation table of its own: its text and links
carry `data-translate-key` (`notfound_title`, `notfound_desc`, `nav_*`,
`footer_placement_quiz`) and its language buttons call `setUILanguage`, so the nav,
the footer and the page text switch together.

### Shared theme engine (opt-in)

The same file carries the shared dark-mode engine. Add `data-theme-toggle` to the
mount to opt in: the saved or system theme is applied on load and, when the page
has no theme control of its own, a toggle is appended to the bar's trailing slot.
Pages without the attribute are not touched. The engine reads and writes the same
keys as the per-site `cosy-theme.js` (`cosy.theme` primary, `cosy_theme` /
`ce-theme` legacy), so the choice follows the visitor across the ecosystem.

A page that already ships its own control (`[data-cosy-theme-toggle]`,
`#cosy-theme-toggle`, `#bn-theme`, `.cg-theme-btn`, `.ev-theme-btn`,
`.dh-theme-btn`, `.theme-toggle-btn`, `.cosy-theme-btn`) is left alone — the bar
never adds a second toggle. Only opt in a page whose stylesheet chain reaches the
dark tokens (`tokens.css`, directly or via `style.css`); a page without them would
show a toggle that does nothing.

### Dark surfaces in page CSS

Text tokens flip with the theme, so a hard-coded cream or white surface leaves
light text on a light card. Surfaces must follow `var(--cosy-color-surface)` /
`var(--warm-white)`, or carry an `html[data-theme="dark"]` / `body.theme-dark`
override. This was the defect in `css/course-roadmaps.css` (the `.course-hero-modern`
gradient started at `#ffffff`, and the decision cards were white) and in the
Comparative Atlas hero (`comparative/index.html`, whose gradient fell back to
`#f4efe6`). Active Atlas tabs and Word Explorer chips also pin a dark accent under
dark theme, because `--sage-deep` / `--sage-dark` flip to light and would otherwise
leave a light chip on the dark panel. `tests/theme-consistency.test.js` guards the
general rule.

### Contact chooser (WhatsApp or Telegram)

`js/core/ui.js` owns the one contact dialog (`css/contact-chooser.css`, loaded on
demand). The nav "Contact us" CTA and the mobile-menu CTA carry
`data-contact-chooser`; the floating `.wa-fab`, the homepage hero, the about hero
and the course hero WhatsApp CTAs opt in too. The homepage hero uses
`nav_contact` ("Contact us") rather than the WhatsApp-specific `hero_cta_wa`
label, because it opens a choice. The chooser offers WhatsApp and Telegram
(`https://t.me/jamesyork`). The WhatsApp link inherits the trigger's `href`, so a
course-specific prefilled message survives. Footer Telegram links use the same
direct contact URL. Tests: `tests/contact-chooser.test.js`,
`tests/footer.test.js` (link present) and `tests/component-i18n.test.js` (labels
exist in all five UI dictionaries).

## Embeddable content (stable IDs + cross-repo embeds)

Content that other repos quote gets a stable id and an embed component, so pages
link to the source of truth instead of copying it.

| Content | Owning repo | Id / data | Embed |
|---|---|---|---|
| Grammar point | COSYmanuals | `<main id="<lang>-<level>-<slug>" data-grammar-point="…">`; registry `data/grammar-points.json` + `.index.json` (built by `scripts/assign_grammar_ids.py`) | `shared/js/grammar-embed.js` → `<div data-grammar-embed="en-a1-adjectives"></div>` |
| Verb conjugation table | COSYdata | `conj:<lang>:<verb-slug>:<form>` (e.g. `conj:fr:etre:present`); `shared/conjugation-registry.json` + `shared/conjugation-index.json` (built by `scripts/build-conjugation-registry.mjs`) | `shared/conjugation-embed.js` → `<div data-conjugation-embed="conj:fr:etre:present"></div>` |
| Speaking-club review | COSYevents | hand-authored `data/club-reviews.json` | `shared/js/club-reviews.js` → `<div data-club-reviews></div>` (all) or `data-club-reviews="<club-slug>"` (one club) |

Both embeds render into an isolated shadow root and fetch cross-origin, so a host
page needs only the mount element plus the component script. A conjugation id may
name a single language (`conj:fr:etre:present`) or every language for one verb
(`conj:be:present`, limited with `data-conjugation-embed-langs="en,fr"`).
Grammar points also have an offline edition: `manuals/<lang>/print/full.html`
(booklet) and `full.pdf`, wired into each print hub. Tests:
`COSYmanuals/tests/grammar-embed.test.mjs`, `COSYdata/tests/conjugation-embed.test.mjs`,
`COSYevents/scripts/test_club_reviews.js`.


## Navigation internals worth knowing before refactoring

- Two mobile surfaces, both live: `#cosy-mobile-menu` (engine drawer, built by
  `js/core/engine.js`) and `.mobile-nav` (fixed bottom bar, created at runtime by
  `init()` in `js/core/ui.js` — no HTML page contains it, so a grep of `*.html` says
  it is dead when it is not). `CSS` for the bottom bar lives in `css/mobile.css` and
  `css/components.css`.
- The language panel (`.cosy-lang-panel`) is rendered once. Names come from
  `langDisplayName()`, which prefers `Intl.DisplayNames` in the interface language and
  falls back to the registry name; `refreshLanguagePanelNames()` patches them on
  `cosyLanguageChanged`. Re-rendering the whole nav instead would drop its context.
- One language list: `window.COSY_LANGUAGES` (`js/data/languages.js`). `engine.js`
  reads it through `getAvailableLanguages()`; do not re-inline the five languages.

## Naming rule: "COSYlanguages" or "CL"

The standalone word "COSY" must not appear in user-visible copy. Compounds
(`COSYlanguages`, `COSYdata`, `COSYtools`, `COSYpractice`, `COSYevents`, `COSYgames`,
`COSYmagazine`, `COSYplatform`, `COSYmanuals`, `COSYworld`) and code identifiers
(`window.COSY`, `COSY_LANGUAGES`, storage keys, CSS classes, repo and page paths) are
fine. Audit with:

```bash
grep -rnE '(^|[^A-Za-z0-9_])COSY([^A-Za-z0-9_]|$)' --include='*.html' --include='*.js' \
  --include='*.json' --include='*.css' . | grep -v '^./tests/'
```

Expect only code identifiers, URL templates and CSS class names to match. Language hubs
do not invent sub-brands: titles read "<local learning phrase> · COSYlanguages", the hero
eyebrow reads "Welcome to COSYlanguages · <Endonym>", and review attributions read
"COSYlanguages <Endonym>". The old `COSYfrançais` / `COSYitaliano` / `COSYEnglish` /
`COSYελληνικά` labels and the machine-translated `ТАКОЙрусский` are gone — do not
reintroduce that pattern when adding a language.

## Reference pages under `languages/<code>/`

`languages/<lang>/grammar.html` and `vocabulary.html` are five near-copies that differ
only in hub name, language name and outbound COSYtools links. They are linked from the
hub's skill cards and are in the sitemap, so keep their copy in the page's own language
(the nav, strip and footer stay in the visitor's UI language) and keep `<title>` unique
per language. `?lang=` on outbound sibling links may be upper or lower case — the
siblings lowercase it before matching.

## Data ownership: no vocabulary in this repo

Vocabulary lives in COSYdata (`vocabulary/<lang>/…`); practice prompts live in
COSYpractice (`data/daily/<lang>/speaking.json`, `writing.json`); cultural spotlights in
COSYevents. This repo keeps only what it renders itself: `data/daily/<lang>/facts.json`
(fun fact + `band-guide.json` chrome labels) and `data/ui/<lang>.json` (interface
strings). `js/daily-strip.js` fetches everything else cross-origin; it has no local
fallback copy, by design.

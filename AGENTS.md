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
writing, speaking). Docs: `docs/PLACEMENT.md`. Tests: `tests/placement.test.js`.

Invariants that were broken before and must not regress:

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
There is no build step, so these checks are the only thing standing between an edit and
a 404 on Pages. Run the whole suite with `node --test tests/*.test.js`.

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
- `comparative/` holds the Comparative Atlas; Word Explorer is a tab wired in
  `comparative/index.html` (`word-explorer-*.js/css`, docs in `WORD_EXPLORER.md`).
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
heading. Keep its `DESTINATIONS` list in step with COSYtools
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

Validator: `node scripts/validate-daily-prompts.js` in COSYpractice. Tests:
`tests/daily-strip.test.js` here.

## Daily writing prompts: exam and general tracks

`data/daily/<lang>/writing.json` mirrors the speaking files, with the same two
tracks and the same `audience` rules. Writing cards carry their own scaffolding:

- `genre` – what the learner is producing ("Formal email", "Essay", "Review").
- `word_min` / `word_max` – the word target, shown as "140-190 words".
- `write_minutes` – the time limit, shown as "40 min".
- `checklist` – 2–3 self-check points, shown under "Before you finish, check".

Writing cards render the same chips plus the self-check list, and never the
speaking-only fields (`prep_seconds`, `speak_seconds`, `follow_ups`).

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

`chrome` localizes the panel's own labels ("Level:", "Prep", "Speak", "words",
"Follow-up questions", "Before you finish, check"). `listen` and `practice` remain in
the files but are no longer read: the "🔊 Listen" button and the "🚀 Practice in Hub"
link were removed from every tab, so the only footer link left is the COSYtools one
on the verb tabs.
`ui` and `bands` are retained in the files but no longer rendered; the per-language
`exams` strings are the reference for which exam certifies which band.
`fetchBandGuide()` loads the file once per language and caches it in
`sessionStorage`; a missing or broken file falls back to the English `chrome`
labels in `js/daily-strip.js`, so a partial translation degrades to English rather
than blanking. Tests: `tests/daily-strip.test.js` (completeness, localized labels,
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


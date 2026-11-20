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

## Tests

This repo uses the Node built-in test runner. Word Explorer unit tests:

```bash
node --test tests/word-explorer.test.js
```

Other repos in the org have their own runners (`npm test` in `COSYplatform`,
`COSYtools`, `COSYmagazine`, `COSYdata`; `node --test tests/*.test.mjs` in
`COSYworld`/`COSYmanuals`). Supabase/RLS tests require the Supabase CLI + Docker
and only run in CI.

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
list, plus `SPEAKING_BAND_GUIDE` in `js/daily-strip.js` — what the selected band
expects and the language to aim for. Fields stay optional at render time, so prompts
without them (including cached ones) still render; the brief is speaking-only. Validate
in COSYpractice with `node scripts/validate-daily-prompts.js`. Tests:
`tests/daily-strip.test.js`.

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
who picks C1-C2 gets a B1-B2 card rather than an adult-only one. The band guide
renders the level of the card actually shown, not the clicked band.
`data-track="general"|"exam"` narrows to one track.

Validator: `node scripts/validate-daily-prompts.js` in COSYpractice. Tests:
`tests/daily-strip.test.js` here.

## Ecosystem strip (shared, top of every site)

`js/ecosystem-strip.js` + `css/ecosystem-strip.css` render the one-line
"🌐 COSY Ecosystem" bar that sits at the very top of every COSY site except the
COSYlanguages hub. Sibling repos load it cross-origin and mount it with
`<div data-ecosystem-strip data-self="events">`; `data-self` (the repo's key) drops
the host's own link, `data-lang` localises the brand. The public links, in
canonical order, are COSYlanguages · COSYevents · COSYdata · COSYtools ·
COSYpractice · COSYgames; COSYplatform and COSYmanuals are appended only for
signed-in visitors (shared Supabase key `cosy-auth`). Do not hand-write the bar in
a sibling repo — mount this component instead. Tests: `tests/ecosystem-strip.test.js`.

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


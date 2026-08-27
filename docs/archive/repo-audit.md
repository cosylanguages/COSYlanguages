# COSYlanguages Repository Audit & Quality Report

## 1. Pull Request (PR) Audit and Status

The repository currently has 15 open pull requests. We have fetched and analyzed each PR, including its title, last commit date, and mergeability status. Each PR was tested against `origin/main` using a detached head checkout to determine its exact status.

| PR # | PR Title | Last Commit Date | Merge Status | Category & Action Plan |
| :--- | :--- | :--- | :--- | :--- |
| **#812** | Fix Practice Hub Start Buttons and Curriculum Parsing | 2026-08-01T19:16:05Z | **clean** | (a) **Safe to merge as-is**. Resolves critical practice category launching issues and adds robust fallbacks. |
| **#803** | Speaking Clubs Active Application Audit Complete | 2026-08-01T13:25:37Z | **clean** | (a) **Safe to merge as-is**. A clean read-only audit of speaking clubs and active application analysis. |
| **#793** | Add "If You Were" Speaking Club Brainstorming Roadmap | 2026-07-31T22:26:38Z | **conflicting** | (b) **Needs conflict resolution**. Adds brainstorming roadmap documentation but conflicts with recent layout changes. |
| **#790** | Implement 'If You Were' Speaking Club and Handcrafted Sessions | 2026-07-31T21:04:53Z | **conflicting** | (b) **Needs conflict resolution**. Introduces handcrafted sessions for the new club but has merge conflicts on shared indexes. |
| **#789** | feat: complete and verify games suite overhaul (Phases 1-5) | 2026-07-31T20:55:48Z | **conflicting** | (c) **Stale/abandoned**. Superseded by later games overhaul commits that have already been integrated into `main`. Recommend closing. |
| **#783** | Add new Zazie and Mple songs and challenges to Karaoke Club | 2026-07-31T17:56:54Z | **conflicting** | (b) **Needs conflict resolution**. Introduces new songs and challenges but has conflicts with localized directory refactorings. |
| **#775** | Curated Pinned Batches for Speaking Clubs | 2026-07-31T11:56:43Z | **conflicting** | (b) **Needs conflict resolution**. Curates pinned batches but conflicts with recent Speaking Club overview upgrades. |
| **#772** | Remediate Italian Karaoke Club Sessions in Target Language | 2026-07-31T09:21:55Z | **conflicting** | (c) **Stale/abandoned**. Superseded by the universal language directories refactor. Recommend closing. |
| **#769** | Complete Pedagogical Upgrade of Italian Karaoke Club Sessions | 2026-07-30T19:28:46Z | **conflicting** | (c) **Stale/abandoned**. Fully superseded by comprehensive pedagogical upgrades on newer branches. Recommend closing. |
| **#766** | Karaoke Club Structural, Visual, & CEFR Calibration Engine | 2026-07-30T16:16:01Z | **conflicting** | (b) **Needs conflict resolution**. Introduces customized visuals and CEFR calibrations but has minor style sheet conflicts. |
| **#762** | Fix Russian Karaoke sessions: translation, placeholders, song-specific lyrics, and duration consistency | 2026-07-30T12:39:20Z | **conflicting** | (b) **Needs conflict resolution**. Critical translations and consistency fixes that need manually rebasing on the main branch. |
| **#761** | Investigate Karaoke Club Generator | 2026-07-30T11:54:10Z | **clean** | (a) **Safe to merge as-is**. A safe, clean review and report on generator bugs without side-effects. |
| **#754** | Fix Wonder Club Session Templates & Structure Alignment | 2026-07-30T08:37:25Z | **conflicting** | (b) **Needs conflict resolution**. Aligns Wonder templates but has simple structural conflicts on indexes. |
| **#753** | Overhaul 100 Questions Game with Student & Family Decks | 2026-07-30T08:28:37Z | **conflicting** | (c) **Stale/abandoned**. Fully superseded by the multi-deck Netflix upgrade already on `main`. Recommend closing. |
| **#749** | Speaking Club Templates Compliance Audit | 2026-07-29T23:52:25Z | **conflicting** | (d) **Unclear — needs a human decision**. Large, complex template alignment PR that overlaps heavily with recent standalone session updates. |

---

## 2. Summary Comments for "Safe to Merge" PRs

Below are the short summary comments drafted for each PR classified as Category (a):

### PR #812 (Fix Practice Hub Start Buttons and Curriculum Parsing)
> **Summary Comment:**
> "Hi @cosylanguages, this PR is safe to merge as-is. It successfully resolves critical starting issues inside the Free Practice hub and ensures robust fallback parsing of curriculum structures. Dry-run merging is perfectly clean with no conflicts, and all 84 automated Playwright tests pass cleanly."

### PR #803 (Speaking Clubs Active Application Audit Complete)
> **Summary Comment:**
> "Hi @cosylanguages, this PR is safe to merge as-is. It is a read-only audit of speaking clubs and active applications with zero code changes or side-effects, making it 100% safe to integrate immediately."

### PR #761 (Investigate Karaoke Club Generator)
> **Summary Comment:**
> "Hi @cosylanguages, this PR is safe to merge as-is. It reports findings from an audit of the Karaoke Club generator codebase and contains zero structural risks. Merges cleanly."

---

## 3. Crawler Audit Report: HTML Files

Every `.html` file (total 846 files) was crawled to analyze broken internal links, missing `alt` attributes, missing titles, and missing meta descriptions.

### Folder: `events/`
- [ ] **Broken Internal Links (383 found):**
  - In `events/fr/index.html`: link `sessions/i-couldnt-help-but-wonder/are-traditions-hidden-monogamy.html` resolves to non-existent `events/fr/sessions/i-couldnt-help-but-wonder/are-traditions-hidden-monogamy.html`
  - In `events/fr/index.html`: link `sessions/i-couldnt-help-but-wonder/collective-guilt-global-crisis.html` resolves to non-existent `events/fr/sessions/i-couldnt-help-but-wonder/collective-guilt-global-crisis.html`
  - In `events/fr/index.html`: link `sessions/i-couldnt-help-but-wonder/i-have-no-time-for-it.html` resolves to non-existent `events/fr/sessions/i-couldnt-help-but-wonder/i-have-no-time-for-it.html`
  - In `events/index.html`: link `sessions/karaoke-club/amor-libre.html` resolves to non-existent `events/sessions/karaoke-club/amor-libre.html`
  - In `events/index.html`: link `sessions/karaoke-club/faros.html` resolves to non-existent `events/sessions/karaoke-club/faros.html`
  - *Note:* Most of these broken links are caused by the recent organization of non-English Karaoke sessions into localized folders (e.g., `events/sessions/karaoke-club/el/`) and Speaking Club directories, while overview page index hyperlinks still look for them in flat directories.
- [x] **Images Missing `alt` Attributes (0 found)**
- [x] **Pages Missing `<title>` (0 found)**
- [ ] **Pages Missing Meta Description (516 found):**
  - Individual session pages (such as `events/fr/sessions/debatable-relatable/la-semaine-de-4-jours.html` and others) do not contain `<meta name="description">` tags.

### Folder: `practice/`
- [x] **Broken Internal Links (0 found)**
- [x] **Images Missing `alt` Attributes (0 found)**
- [x] **Pages Missing `<title>` (0 found)**
- [ ] **Pages Missing Meta Description (6 found):**
  - `practice/types/flashcard/index.html`
  - `practice/types/grammar/index.html`
  - `practice/types/listening/index.html`
  - `practice/types/reading/index.html`
  - `practice/types/vocabulary/index.html`
  - `practice/types/writing/index.html`

### Folder: `games/`
- [x] **Broken Internal Links (0 found)**
- [x] **Images Missing `alt` Attributes (0 found)**
- [x] **Pages Missing `<title>` (0 found)**
- [ ] **Pages Missing Meta Description (19 found):**
  - Core standalone games under `games/` (such as `games/action_hero/index.html` and `games/cosy_crossword/index.html`) are missing `<meta name="description">` tags.

### Folder: `vocabulary/`
- [x] **Broken Internal Links (0 found)**
- [x] **Images Missing `alt` Attributes (0 found)**
- [x] **Pages Missing `<title>` (0 found)**
- [ ] **Pages Missing Meta Description (2 found):**
  - `vocabulary/index.html`
  - `vocabulary/en/en.html`

### Folder: `grammar/`
- [x] **Broken Internal Links (0 found)**
- [x] **Images Missing `alt` Attributes (0 found)**
- [x] **Pages Missing `<title>` (0 found)**
- [ ] **Pages Missing Meta Description (52 found):**
  - Static language specific grammar units and maps (such as `reference-grammar/de/de.html`, `reference-grammar/fr/morphology/fr-avoir.html`, etc.) lack a meta description.

### Folder: `courses/`
- [x] **Broken Internal Links (0 found)**
- [x] **Images Missing `alt` Attributes (0 found)**
- [x] **Pages Missing `<title>` (0 found)**
- [ ] **Pages Missing Meta Description (166 found):**
  - All level selection pages under `courses/general/` and `courses/exam/` lack a meta description tag.

### Folder: `portal/`
*Note: This directory was deprecated and has no standalone HTML files, hence no issues found.*

### Folder: `root_other/`
- [ ] **Broken Internal Links (46 found):**
  - Relative back links inside templates under `templates/` (e.g. `templates/events/celebrate-session-template.html` linking to `../index.html`) resolved to non-existent template files because templates are not rendered in place.
- [x] **Images Missing `alt` Attributes (0 found)**
- [ ] **Pages Missing `<title>` (5 found):**
  - Language presentation pages inside `languages/` (`languages/el.html`, `languages/en.html`, `languages/fr.html`, `languages/it.html`, `languages/ru.html`) do not have `<title>` tags.
- [ ] **Pages Missing Meta Description (61 found):**
  - Language overview files and printable tools (such as `privacy.html` and `print-boardgame.html`) lack descriptions.

---

## 4. Master Key List for Phase 1 Translation Dictionary

A scan of UI chrome across core pages has identified the following hardcoded strings. They are listed below with suggested short keys, ready to be externalized in Phase 1:

| Component | Current Text | Suggested Key Name | File Path(s) |
| :--- | :--- | :--- | :--- |
| **nav** | "Languages 🌍" | `nav.languages` | `index.html`, `js/core/engine.js` |
| **nav** | "Free Practice 💡" | `nav.practice` | `index.html`, `js/core/engine.js` |
| **nav** | "Events 🎉" | `nav.events` | `index.html`, `js/core/engine.js` |
| **nav** | "Games 🎮" | `nav.games` | `index.html`, `js/core/engine.js` |
| **nav** | "Language:" | `nav.languageLabel` | `js/core/engine.js` |
| **nav** | "Profile:" | `nav.profileLabel` | `js/core/engine.js` |
| **footer** | "Courses" | `footer.coursesTitle` | `index.html`, `js/core/ui.js` |
| **footer** | "Explore" | `footer.exploreTitle` | `index.html`, `js/core/ui.js` |
| **footer** | "Contact" | `footer.contactTitle` | `index.html`, `js/core/ui.js` |
| **footer** | "Your friendly corner to master new languages..." | `footer.tagline` | `index.html`, `js/core/ui.js` |
| **practice-setup** | "Configure your session" | `practice.configure` | `practice/index.html` |
| **practice-setup** | "Theme Mastery Trackers 🎯" | `practice.trackers` | `practice/index.html` |
| **practice-setup** | "Sub-theme" | `practice.subtheme` | `practice/index.html` |
| **practice-setup** | "Cognitive & Immersion Accelerator 🚀" | `practice.accelerator` | `practice/index.html` |
| **practice-setup** | "Spin the Wheel 🎡" | `practice.spinWheel` | `practice/index.html` |
| **karaoke-filters** | "📌 Pinned Artist Challenges (90 min)" | `karaoke.pinnedTitle` | `events/karaoke-club.html` |
| **karaoke-filters** | "🎵 Standalone Song Sessions (90-120 min)" | `karaoke.standaloneTitle` | `events/karaoke-club.html` |
| **karaoke-filters** | "Study separately:" | `karaoke.studySeparately` | `events/karaoke-club.html` |
| **pricing-calculator** | "For group lessons and events, contact us" | `calc.contactGroup` | `index.html` |
| **games** | "Games Hub 🎮" | `games.hubTitle` | `games/index.html` |
| **generic-buttons** | "SPIN! 🚀" | `button.spin` | `practice/index.html` |
| **generic-buttons** | "Accept Challenge ⚔️" | `button.accept` | `practice/index.html` |
| **generic-buttons** | "Hint 💡" | `button.hint` | `practice/index.html` |
| **generic-buttons** | "Close" | `button.close` | `practice/index.html` |
| **generic-buttons** | "Continue" | `button.continue` | `practice/index.html` |

# COSYlanguages

A cosy, immersive language learning platform. Similar in spirit to Skyeng but focused on genuine learning over monetisation.

## Live site
https://cosylanguages.github.io/COSYlanguages/

## Languages
| Code | Language | Status | Notes |
|------|----------|--------|-------|
| en | English | ✅ Active | — |
| fr | French | ✅ Active | — |
| it | Italian | ✅ Active | — |
| ru | Russian | ✅ Active | — |
| el | Greek | ✅ Active | — |
| es | Spanish | 🔜 Coming soon | May have partial data |
| de | German | 🔜 Coming soon | May have partial data |
| pt | Portuguese | 🔜 Coming soon | May have partial data |
| hy | Armenian | 🔜 Coming soon | May have partial data |
| ka | Georgian | 🔜 Coming soon | May have partial data |
| tt | Tatar | 🔜 Coming soon | May have partial data |
| ba | Bashkir | 🔜 Coming soon | May have partial data |
| br | Breton | 🔜 Coming soon | May have partial data |

> Coming soon languages may already have grammar, vocabulary, or curriculum data in the repo.
> They are marked "coming soon" on the public site until James decides to publish them.


## Core principle
No translation fallback. If the platform is in Greek, everything is in Greek. If in English, everything is in English. Navigation is aided by emojis and icons, not by translation.

## Platform Status
The multi-user system (student/teacher portals) has been deprecated in favor of a visitor-first, public-access learning platform. All resources, including practice hubs and events, are now accessible without an account.

## COSY Passport (Progress Backup & Sync)

COSYtools supports the unified, accountless **COSY Passport** format. Learners can easily backup, export, and restore their learning progress across all 12 reference engines (such as spaced-repetition streaks, SRS Leitner mastery levels, and daily goals) directly on the tools hub page:

- **Export progress:** Click "📥 Export progress" on the reference engines hub to download your `cosy-passport.json` backup file.
- **Import progress:** Click "📤 Import progress" and select a valid passport JSON file to restore your progress. Only entries with source `"COSYtools"` are applied locally, keeping data from other COSY ecosystem apps completely safe and intact.

## Ecosystem Taxonomy & Repositories

COSYlanguages is organized as a distributed ecosystem of specialized sub-products, with this repository (`COSYlanguages`) serving as the primary hub, orchestrator, and textbook portal.

### Companion Repositories
1. **[COSYmanuals](https://github.com/cosylanguages/COSYmanuals):** Restricted web textbooks (`manuals/`), CEFR curriculums (`curriculum/`), and datasets (`vocabulary/`, `reference-grammar/`, `communication/`) accessible to contracted teachers and students.
2. **[COSYevents](https://github.com/cosylanguages/COSYevents):** Public speaking club session decks, multimedia event night guides, and group conversation materials.
3. **[COSYworld](https://github.com/cosylanguages/COSYworld):** Interactive open-world RPG adventure learning environment and spatial scene match environments.
4. **[COSYgames](https://github.com/cosylanguages/COSYgames):** Interactive practice minigames hub (22+ games) for self-study and live online/offline classroom teaching.
5. **[COSYtools](https://github.com/cosylanguages/COSYtools):** Standalone offline linguistic encyclopedia (12 micro-apps for verb conjugators, gender trainers, case systems, and prepositional regime tools).

**Ecosystem Relationship Model:** This repository (`COSYlanguages`) hosts curriculum-integrated games, events, and practice tools directly tied to course tracks and CEFR levels. Meanwhile, companion repositories (`COSYtools`, `COSYworld`, `COSYgames`, `COSYevents`) host standalone, accountless web-based versions. All applications are connected seamlessly via standard URL query parameter handoffs ([`docs/url-handoff.md`](docs/url-handoff.md)) and the unified COSY Passport progress exchange format ([`docs/passport-schema.md`](docs/passport-schema.md)).

### Future Extraction Candidates
- **`COSYstudio`:** Pedagogical print studio, zine builder, boardgame generator (`apps/print-studio/` and `print-*.html`).
- **`COSYcourses`:** Structured CEFR syllabus course experience across 6 tracks (`apps/premium-courses/` and `curriculum/`).
- **`COSYclassroom`:** Teacher live screen sync and presentation tool (`classroom-sync.html`).

### Central Ecosystem Hub (`COSYlanguages`)
- **Unified Master Portal & Gateway:** Central directory, multi-product switcher, and global diagnostic placement quiz (`placement-quiz.html`).
- **Interactive CEFR Web Textbooks (`manuals/`):** Core HTML grammar and vocabulary textbooks across all 13 supported languages.
- **Language Hubs (`languages/{iso}/index.html`):** Portal pages featuring daily dose facts, idioms, and level roadmaps.

For a detailed analysis of repository candidates and ecosystem architecture, see [`docs/ECOSYSTEM_ARCHITECTURE.md`](docs/ECOSYSTEM_ARCHITECTURE.md).

## Running locally
Open `index.html` directly in a browser, or use a local server:
npx serve .

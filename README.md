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

## Ecosystem Taxonomy & Repositories

COSYlanguages is organized as a distributed ecosystem of specialized sub-products, with this repository (`COSYlanguages`) serving as the primary hub, orchestrator, and textbook portal:

### Active Decoupled Standalone Repositories
1. **[COSYworld](https://github.com/cosylanguages/COSYworld):** Interactive 2D/3D visual environments, Scene Match games, and exploratory visual learning spaces.
2. **[COSYtools](https://github.com/cosylanguages/COSYtools):** Standalone offline linguistic reference engines (12 micro-apps for verb conjugators, gender trainers, and prepositional regime tools across French, Italian, Russian, Greek, and English).

### Roadmap Standalone Repositories (Extraction Candidates)
- **`COSYevents`:** Thematic Speaking Clubs and Multimedia Event Nights web app (`apps/premium-events/` and `events/`).
- **`COSYgames`:** Suite of 22+ interactive vocabulary/grammar minigames (`games/`).
- **`COSYstudio`:** Pedagogical print studio, zine builder, boardgames, and flashcard box generator (`apps/print-studio/` and `print-*.html`).
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

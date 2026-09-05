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

### Decoupled Ecosystem Repositories
1. **[COSYworld](https://github.com/cosylanguages/COSYworld):** Interactive 2D/3D visual environments, Scene Match games, and exploratory visual learning spaces.
2. **[COSYtools](https://github.com/cosylanguages/COSYtools):** Standalone offline linguistic reference engines (conjugators, gender trainers, and prepositional regime tools across French, Italian, Russian, Greek, and English).

### Central Platform Hub (`COSYlanguages`)
- **Free Platform (`apps/free-portal/`):** Public self-study resources including CEFR HTML Grammar & Vocabulary Manuals, Practice Hub, Placement Quiz, and interactive games.
- **Premium Courses (`apps/premium-courses/`):** Structured level paths across 6 distinct tracks (*General*, *Spoken*, *Professional*, *Travelling*, *Relocation*, *Exam Prep*).
- **Premium Events (`apps/premium-events/`):** Conversational experiences including Thematic Speaking Clubs (7 themes) and Multimedia Nights (5 formats).

For detailed architecture standards, candidate repos for future extraction, and taxonomy specifications, refer to [`docs/ECOSYSTEM_ARCHITECTURE.md`](docs/ECOSYSTEM_ARCHITECTURE.md) and `apps/README.md`.

## Running locally
Open `index.html` directly in a browser, or use a local server:
npx serve .

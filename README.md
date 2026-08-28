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

## Ecosystem Taxonomy

COSYlanguages is structured as a collection of independent, specialized sub-products under a unified micro-frontend monorepo workspace:

1. **Free Platform (`apps/free-portal/`):** Public self-study resources including Grammar Manuals, Practice Hub, Placement Quiz, and 22 Vocabulary/Word Games.
2. **Premium Courses (`apps/premium-courses/`):** Structured, syllabus-driven, level-calibrated curriculums with 6 distinct tracks:
   - General (Forest Green/Sage)
   - Spoken (Terracotta/Coral)
   - Professional (Credible Navy)
   - Travelling (Practical Fresh Green)
   - Relocation (Warm Rust/Amber)
   - Exam Prep (Scholarly Plum)
3. **Premium Events (`apps/premium-events/`):** Highly interactive conversational experiences:
   - *Thematic Speaking Clubs:* I Couldn't Help But Wonder, Keeping Up with Science, Mind Matters, Debatable & Relatable, Let's Celebrate, My Life With/Without, and The Greatest Quotes.
   - *Interactive Multimedia Nights:* Cinema Club, Karaoke Club, Game Evening, Long Reads, and If You Were.

For detailed taxonomy standards, refer to `project/docs/CONTENT_ARCHITECTURE.md` or `apps/README.md`.

## Running locally
Open `index.html` directly in a browser, or use a local server:
npx serve .

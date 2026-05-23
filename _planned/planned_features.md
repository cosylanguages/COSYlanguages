# Planned site-wide features

## High priority
| Feature | Area | Notes |
|---------|------|-------|
| Student progress tracking | Portal | Track completed lessons, scores, streaks per language and level |
| Teacher assignment system | Portal | Teacher assigns practice/homework to specific students |
| Placement quiz | Onboarding | 10-15 question quiz so new students know their level |
| Printable grammar tables | Grammar pages | PDF/print download of grammar tables per language |
| Audio pronunciation | Vocabulary + Grammar | Native speaker audio per word and grammar form |
| COSY-branded 404 page | Site-wide | Friendly multilingual 404, emoji, links home, small game |
| Contact / onboarding form | Homepage | How teachers sign up, how students get codes — currently missing |

## Medium priority
| Feature | Area | Notes |
|---------|------|-------|
| Dark mode | Global CSS | Toggle in header/settings, saved to localStorage |
| Offline mode | PWA / service worker | Full offline practice using cached data |
| Student vocabulary notebook | Portal / Vocabulary | Personal saved word list, exportable |
| Course progress bar | Course pages | Visual level completion tracker per student |
| Sample lesson preview | Course pages | Free preview of first lesson for non-logged-in users |
| New version available PWA notification | Service worker | Notify user when site updated, prompt refresh |
| Keyboard navigation for games | Games | All games fully playable without a mouse |
| Focus styles for accessibility | CSS | Restore visible focus ring — do not use outline:none globally |
| Language comparison tool | Grammar | Side-by-side grammar comparison (e.g. French vs Italian) |
| Teacher blog / tips section | Homepage | James writes short language learning articles |
| i18n.js rewrite | JS core | Must follow _planned/i18n_spec.md exactly — implement in Stage 2 |

## Low priority / ideas
| Feature | Area | Notes |
|---------|------|-------|
| Culture pages per language | Languages | Food, music, traditions, iconic places |
| Pen pal / exchange system | Portal | Connect students learning each other's language |
| Streak system | Practice / Games | Daily practice streaks, visual reward |
| Lesson of the week | Homepage + Language hub | Teacher-curated featured lesson |
| Printable vocabulary lists | Vocabulary | Download/print vocab lists per topic and level |

## Missing files and folders to add later
| Element | Type | Location | Notes |
|---------|------|----------|-------|
| Syntax layer content | JSON files | grammar/[lang]/syntax/ | Folders created in Stage 3, content not yet written |
| Phonology content | JSON files | grammar/[lang]/phonology/ | Folders created in Stage 3, content not yet written |
| Numerals | JSON file | grammar/[lang]/morphology/numerals.json | Every language needs this |
| Speaking practice type | folder | practice/types/speaking/ | Needs audio recording or mic input — not yet designed |
| Dictation practice type | folder | practice/types/dictation/ | Needs audio playback — not yet designed |
| Kids course pages | folder | courses/kids/ | Full design needed before building |
| Academic course pages | folder | courses/academic/ | Full design needed before building |
| Culture course pages | folder | courses/culture/ | Concept only, no design yet |
| print-grammar.html reconnection | HTML file | print-grammar.html root | After Stage 3, data paths in this file will break — fix in Stage 11 |

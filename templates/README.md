# COSYlanguages Content Templates

This directory contains standardized templates for adding new languages or content to the COSYlanguages platform. Using these templates ensures visual and functional consistency across the entire codebase.

## Directory Structure

- `vocabulary/`: Templates for vocabulary data files (`.js`).
- `grammar/`: Templates for grammar roadmaps (`.html`), interactive lessons (`.html`), and grammar data (`.json`).
- `curriculum/`: Templates for course curriculum data (`.json`).
- `events/`: Standard and specialized Speaking Club session templates (`.html`). Includes variants for Debate, Science, Quotes, Life, Celebrate, Mind, and Karaoke clubs.
- `languages/`: Templates for language-specific home pages (`.html`).
- `games/`: Game-specific data files (`.js`) and a full game scaffold (`/scaffold`) for building new interactive games.
- `practice/`: Template for creating new practice types (`.js`).

## Usage Instructions

### 1. New Language Addition
1.  **Home Page:** Copy `languages/home-template.html` to `languages/[lang]/index.html` and update the placeholders (marked with `xx` or `Language Name`).
2.  **Grammar Roadmap:** Copy `grammar/roadmap-template.html` to `grammar/[lang]/[lang].html`.
3.  **Vocabulary:** Copy `vocabulary/vocabulary-template.js` to create themed files in `vocabulary/[lang]/[level]/`.
4.  **Curriculum:** Copy `curriculum/curriculum-template.json` to `curriculum/[lang]/[course_type]/[level].json`.
5.  **Game Data:** Copy `games/game-data-template.js` to `games/data/[lang]/game_data.js`.

### 2. New Speaking Club Session
1.  Choose a template from `events/` that matches the club category (e.g., `debate-session-template.html` for "Debatable & Relatable").
2.  Copy it to `events/sessions/[session-slug].html`.
3.  Follow the **10-10-10** rule: 10 vocabulary items, 10 Round 1 questions, and 10 Round 2 items.
4.  Ensure all relative paths (e.g., `../../css/...`) are correct based on the file depth.

### 3. New Karaoke Session
1.  Copy `templates/events/karaoke-session-template.html` to `events/sessions/[session-slug].html`.
2.  Include links to the official Music Video 🎥 or the Backup Song Audio 🎵 in the metadata grid.
3.  Add exactly 10 song-specific terms, idioms, or slang expressions to the vocabulary list.
4.  Implement the **Listening & Gap-Fill Exercise** with full song lyrics and a highlighted helper Word Bank.
5.  Align discussion rounds and correction sections with specialized musical and phonetic pointers.

### 4. New Game or Practice Type
- **Game Scaffold:** Use `games/scaffold/` as a starting point for new interactive games. It includes a basic UI structure (`index.html`) and state management (`game.js`).
- **Practice Type:** Copy `practice/practice-type-template.js` to a new folder in `practice/types/[new-type]/` to implement custom logic for loading and transforming data into practice tasks.

### 5. New Grammar Lesson
1.  Copy `grammar/lesson-template.html` to `grammar/[lang]/[layer]/[lesson-slug].html`.
2.  Define the rules and interactive quiz questions in the script block.

### 6. Etymology & Data Enrichment
- New vocabulary entries should include `synonyms`, `antonyms`, `collocations`, and `etymology` where possible.
- Use `scripts/build_etymology_dict.js` to bulk-generate etymology data from Wiktextract dumps. Run `node scripts/build_etymology_dict.js --help` for usage details.

---

## 🎨 Immersive Styling Specifications for Special Events

To make our specialized events feel extremely unique, artistic, and visually memorable, we enforce distinct style branding for each event category:

### A. Karaoke Club Events
- **Color Palette:** Velvet Plum, Dark Lavender, and Purple Orchid gradients (`linear-gradient(135deg, #4A154B, #2A0A35)`).
- **Typography & Theme:** Playful, rhythmic, and soulful. Uses musical icons (🎤, 🎵, 🎶, 🎸, 🎙️) throughout section dividers.
- **Aesthetic Elements:**
  - Card borders are styled with soft purple drop-shadow glows (`box-shadow: 0 0 15px rgba(155, 89, 182, 0.15);`).
  - Active card items and vocab collocations pulsed with soft glowing highlights to simulate theater spotlight effects.
  - Lyrics containers are wrapped in stylized, scrollable parchment-style grids to ensure standard readability.

### B. Cinema & Series Club Events
- **Color Palette:** Dark Wood, Rich Chocolate, Warm Gold, and Soft Champagne (`linear-gradient(135deg, #3D2B1F, #1F140F)`).
- **Typography & Theme:** Elegant, theatrical, and vintage. Focuses on directors, screenwriters, cinematography, acting, and script analysis.
- **Aesthetic Elements:**
  - Section title headers are styled like cinema marquees or vintage movie reels.
  - Interactive "Spotlight" elements utilize gold-accented borders (`#D4AF37`) and movie-ticket visual frames.
  - Background overlays include a subtle cinematic noise or film-grain effect.

---

## 🕒 Scaling, Navigation & Session Organization Guidelines

As the platform grows, our previous sessions list will expand significantly. To prevent endless vertical scrolling and maintain clean, discoverable layouts, follow these core UX/UI standards:

### 1. Level-Based Filtering & Persistence
- Every event landing page must include active level-filtering pills (`All Levels`, `Beginner (A1-A2)`, `Intermediate (B1-B2)`, etc.).
- Active selection states must be saved in `localStorage` under the key `'selected-speaking-club-level'` so the filter persists across user navigation.
- If a level is chosen and has no matching sessions, display a localized fallback placeholder explaining the empty history.

### 2. Search & Real-Time Filtering Panel
- Prepend an interactive search field above the history list:
  ```html
  <div class="search-wrap" style="margin-bottom: 1.5rem;">
    <input type="text" id="session-search" placeholder="🔍 Search previous sessions by title, artist, variety, or description...">
  </div>
  ```
- Integrate client-side real-time JS filtering to show/hide session items based on query matches in title, sub-tags, and descriptions. This must work in tandem with the level filter.

### 3. Chronological Accordions & Grouping
- For lists exceeding 15 sessions, previous entries must be logically grouped by year and month.
- Utilize native, highly accessible HTML `<details>` and `<summary>` disclosure components (or Javascript-driven accordion cards) to keep previous periods collapsed by default, drastically minimizing page height.

---

## Standards & Compliance
- **SCHEMA.md:** Always refer to the root `SCHEMA.md` for data field requirements.
- **THEMES.md:** Use standardized theme slugs for vocabulary and curriculum.
- **CEFR Levels:** Use normalized Level IDs: `starter`, `elementary`, `intermediate`, `upper_intermediate`, `advanced`, and `proficiency`. Short codes (like `A1`, `A2`, etc.) are reserved for directory structure and user-facing presentation.
- **Naming Conventions:** Use lowercase with hyphens for filenames (`my-new-session.html`).
- **Target Language:** Definitions, examples, and rules must be written in the target language (except for English-specific files).

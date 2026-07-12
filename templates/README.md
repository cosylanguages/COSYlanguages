# COSYlanguages Content Templates

This directory contains standardized templates for adding new languages or content to the COSYlanguages platform. Using these templates ensures visual and functional consistency across the entire codebase.

## Directory Structure

- `vocabulary/`: Templates for vocabulary data files (`.js`).
- `grammar/`: Templates for grammar roadmaps (`.html`), interactive lessons (`.html`), and grammar data (`.json`).
- `curriculum/`: Templates for course curriculum data (`.json`).
- `events/`: Standard and specialized Speaking Club session templates (`.html`). Includes variants for Debate, Science, Quotes, Life, Celebrate, and Mind clubs.
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

### 3. New Game or Practice Type
- **Game Scaffold:** Use `games/scaffold/` as a starting point for new interactive games. It includes a basic UI structure (`index.html`) and state management (`game.js`).
- **Practice Type:** Copy `practice/practice-type-template.js` to a new folder in `practice/types/[new-type]/` to implement custom logic for loading and transforming data into practice tasks.

### 4. New Grammar Lesson
1.  Copy `grammar/lesson-template.html` to `grammar/[lang]/[layer]/[lesson-slug].html`.
2.  Define the rules and interactive quiz questions in the script block.

### 5. Etymology & Data Enrichment
- New vocabulary entries should include `synonyms`, `antonyms`, `collocations`, and `etymology` where possible.
- Use `scripts/build_etymology_dict.js` to bulk-generate etymology data from Wiktextract dumps. Run `node scripts/build_etymology_dict.js --help` for usage details.

## Standards & Compliance
- **SCHEMA.md:** Always refer to the root `SCHEMA.md` for data field requirements.
- **THEMES.md:** Use standardized theme slugs for vocabulary and curriculum.
- **CEFR Levels:** Use normalized Level IDs: `starter`, `elementary`, `intermediate`, `upper_intermediate`, `advanced`, and `proficiency`. Short codes (like `A1`, `A2`, etc.) are reserved for directory structure and user-facing presentation.
- **Naming Conventions:** Use lowercase with hyphens for filenames (`my-new-session.html`).
- **Target Language:** Definitions, examples, and rules must be written in the target language (except for English-specific files).

---
*For any questions, refer to the technical documentation or contact the lead maintainer.*

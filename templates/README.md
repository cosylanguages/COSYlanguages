# COSYlanguages Content Templates

This directory contains standardized templates for adding new languages or content to the COSYlanguages platform. Using these templates ensures visual and functional consistency across the entire codebase.

## Directory Structure

- `vocabulary/`: Templates for vocabulary data files (`.js`).
- `grammar/`: Templates for grammar roadmaps (`.html`), interactive lessons (`.html`), and grammar data (`.json`).
- `curriculum/`: Templates for course curriculum data (`.json`).
- `events/`: Templates for Speaking Club session pages (`.html`).
- `languages/`: Templates for language-specific home pages (`.html`).
- `games/`: Templates for game-specific data files (`.js`).

## Usage Instructions

### 1. New Language Addition
1.  **Home Page:** Copy `languages/home-template.html` to `languages/[lang]/index.html` and update the placeholders (marked with `xx` or `Language Name`).
2.  **Grammar Roadmap:** Copy `grammar/roadmap-template.html` to `grammar/[lang]/[lang].html`.
3.  **Vocabulary:** Copy `vocabulary/vocabulary-template.js` to create themed files in `vocabulary/[lang]/[level]/`.
4.  **Curriculum:** Copy `curriculum/curriculum-template.json` to `curriculum/[lang]/[course_type]/[level].json`.
5.  **Game Data:** Copy `games/game-data-template.js` to `games/data/[lang]/game_data.js`.

### 2. New Speaking Club Session
1.  Copy `events/session-template.html` to `events/sessions/[session-slug].html`.
2.  Follow the **10-10-10** rule: 10 vocabulary items, 10 Round 1 questions, and 10 Round 2 items.
3.  Ensure all relative paths (e.g., `../../css/...`) are correct based on the file depth.

### 3. New Grammar Lesson
1.  Copy `grammar/lesson-template.html` to `grammar/[lang]/[layer]/[lesson-slug].html`.
2.  Define the rules and interactive quiz questions in the script block.

## Standards & Compliance
- **SCHEMA.md:** Always refer to the root `SCHEMA.md` for data field requirements.
- **THEMES.md:** Use standardized theme slugs for vocabulary and curriculum.
- **CEFR Levels:** Use standard codes: `A1`, `A2`, `B1`, `B2`, `C1`, `C2`.
- **Naming Conventions:** Use lowercase with hyphens for filenames (`my-new-session.html`).
- **Target Language:** Definitions, examples, and rules must be written in the target language (except for English-specific files).

---
*For any questions, refer to the technical documentation or contact the lead maintainer.*

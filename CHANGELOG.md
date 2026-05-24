# Changelog

All notable changes to COSYlanguages are recorded here.
Add an entry every time a stage is merged to main.

## Format
### [Stage X — Stage name] · YYYY-MM-DD
- What was done
- What files were created
- What was moved or renamed

---

### [Stage 0 — Hygiene & Documentation] · 2026-05-23
- Added README.md, LANGUAGES.md, CHANGELOG.md
- Added .gitignore
- Deleted server.log
- Created _planned/ folder with planned feature tracking files:
  planned_features.md, planned_grammar_tables.md, planned_security.md,
  planned_seo.md, planned_onboarding.md, planned_pwa.md, planned_images.md,
  planned_languages.md, planned_courses.md, planned_grammar.md, planned_vocabulary.md
- Fixed footer copyright year to 2026

### [Stage 1 — CSS Architecture] · 2026-05-24
- Split index.html styles into css/tokens.css, css/base.css, css/components.css, css/layout.css, and css/home.css
- Removed all inline <style> blocks from index.html
- Ensured correct CSS link order in the <head>

### [Stage 1b — i18n Specification] · 2026-05-24
- Created _planned/i18n_spec.md — full spec for language mode detection and UI string system
- No code was changed in this stage

### [Stage 2 — JS Architecture] · 2026-05-24
- Extracted inline scripts to js/core/ and js/data/
- Created js/data/languages.js with the master language registry
- Added descriptive header comments to all core JS files
- Moved script tags to the bottom of index.html

### [Stage 3 — Grammar Folder Restructure] · 2026-05-24
- Reorganised grammar/ into language and linguistic layer folders (morphology, syntax, phonology, particles)
- Added grammar/_schema/grammar.schema.json and README.md
- Moved existing grammar data to the new structure

### [Stage 4 — Vocabulary Folder Restructure] · 2026-05-24
- Reorganised vocabulary/ into language and CEFR level folders (A1–C2)
- Added vocabulary/_schema/vocab.schema.json and README.md
- Moved existing vocabulary .js data files to the new folder structure

### [Stage 6b — Practice System Spec] · 2026-05-24
- Created _planned/practice_spec.md — full spec for practice session structure, types, scoring, hints, keyboard nav
- No code was changed in this stage

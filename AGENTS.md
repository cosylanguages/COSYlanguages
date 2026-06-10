# COSYlanguages Agent Instructions

This document provides conventions, architectural rules, and programmatic checks for working on the COSYlanguages platform.

## Core Principles

1.  **No-Translation Immersion:** We strictly follow the target-language immersion principle. If the platform is in Greek, everything is in Greek. Navigation is aided by emojis and icons, not by translation to English. UI strings in `data/ui/*.json` must reflect this.
2.  **Organic Aesthetics:** Hero sections and cards utilize 135-degree linear gradients transitioning from a brand's primary color to a darker shade (e.g., `linear-gradient(135deg, var(--sage-deep), #1a2a1d)`).
3.  **Role-Awareness:** The platform morphs based on user roles (Free, Student, Teacher, Admin). Logic for this is centralized in `js/core/engine.js` and `js/core/ui.js` (`updateMobileNav`).

## Data Conventions

### Vocabulary ID Format
Every entry must follow the format: `{lang}_{level}_{theme_slug}_{sequence}`
- **lang:** 2-letter ISO code (en, fr, it, ru, el, etc.)
- **level:** starter, elementary, intermediate, upper_intermediate, advanced, proficiency.
- **theme_slug:** lowercase slug from `THEMES.md`.
- **sequence:** zero-padded 3-digit integer (001, 002...).
*Example: `en_starter_animals_001`*

### Directory Structure
- `js/core/`: Application engine, i18n, and UI core.
- `js/portal/`: Role-specific dashboard logic.
- `practice/_engine/`: Practice Hub session logic and renderers.
- `vocabulary/{lang}/{level}/`: ID-based JSON vocabulary files.
- `curriculum/{lang}/{type}/{level}_v2.json`: Course roadmaps.

## Technical Requirements

### Supabase Integration
- Project Reference: `iajkejcmoykubthlwfra`.
- Deployment: Use `supabase functions deploy [function-name] --project-ref iajkejcmoykubthlwfra --use-api`. The `--use-api` flag is mandatory in this environment.
- RLS: All tables must have Row Level Security enabled. Students must only access data where `student_id = auth.uid()`.

### Asset Management
- Emojis on hub pages are being replaced with brand logos in `images/`.
- The canonical logo path is `images/logos/cosylanguages.png`.
- Relative Paths: Files in subdirectories must use correct relative paths (e.g., `../../css/tokens.css` for `portal/student/*.html`).

### Practice Hub Engine
- Task types: `mc` (Multiple Choice), `tf` (True/False), `type` (Typing), `sc` (Scrambled).
- Scoring: Standard correct answer awards 10 pts. Hints deduct 5 pts.

## Verification Checklist
- [ ] Run `npm test` to verify no regressions in the portal or practice hub.
- [ ] Ensure all new HTML files include `js/core/engine.js`, `js/core/i18n.js`, and `js/core/ui.js` in that order.
- [ ] Check color contrast for WCAG AA compliance (ratio > 4.5:1).

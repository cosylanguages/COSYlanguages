# `manuals/` Migration Plan & Architecture Blueprint
> **Status**: Proposed Migration Plan (No files modified or moved in this task)
> **Date**: March 2025
> **Target Goal**: Restructure `manuals/` from a hybrid flat/legacy directory structure into a standardized, ISO language-coded hierarchy (`manuals/<language-code>/{grammar,vocabulary,communication}/<level>/`).

## Executive Summary
The `manuals/` directory currently contains **2,213 files** spanning 14 target languages (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `br`, `tt`, `ba`, `cv`, `ka`, `hy`). While modern additions follow ISO-code conventions (e.g. `manuals/en/grammar/a1/`), a substantial number of legacy directories and top-level files exist in non-standardized locations (e.g., `manuals/grammaire-francaise/`, `manuals/vocabulary-a2/`, `manuals/english-a0-a1.html`).
This document provides a **complete file inventory**, an **analysis of `apps/free-portal/`**, a **repo-wide link breakage audit**, and a **proposed standardized target directory structure** for human review prior to executing the migration.

---

## 1. Apps & `apps/free-portal/` Analysis
### Key Findings:
- **Manifest & SW Direct Links**: An audit of `apps/free-portal/manifest.json`, `apps/free-portal/sw.js`, and `apps/free-portal/package.json` confirmed that `apps/free-portal/` **does not directly embed or hardcode direct links** to specific `manuals/` HTML or JS files inside its source code.
- **PWA Manifest Role**: `apps/free-portal/manifest.json` serves as the Web App Manifest for free platform pages across the repository (e.g. `<link rel="manifest" href="../apps/free-portal/manifest.json">`).
- **Documentation & Description Claims**: `apps/free-portal/manifest.json` defines description as: `"Learn languages you'll actually speak - Free grammar manuals and self-study vocabulary games."` Similarly, `apps/README.md` states:
  ```
  apps/free-portal/ # Public PWA hub (cosylanguages.github.io)
                    # Includes: Grammar manuals, Practice hub, Vocabulary games
  ```
- **Impact of Migration**: Moving files in `manuals/` will **not** break `apps/free-portal/` internal code directly, but will break external site navigation and links across free platform hubs that reference `manuals/` pages under PWA scope.

---

## 2. Repo-Wide Link Audit & Migration Risk Map
Moving files inside `manuals/` will impact **594 distinct files** containing **2,408 link references** to `manuals/` across the codebase. These fall into two distinct operational risk categories:

### Category A: External Repository References (152 Files / 729 Link Occurrences)
These files reside outside `manuals/` and will break if `manuals/` paths change:

#### `CONTENT_ARCHITECTURE.md/` (1 files, 7 link references)
- `CONTENT_ARCHITECTURE.md` (7 references)

#### `GRAMMAR_SYSTEMS_INVESTIGATION.md/` (1 files, 6 link references)
- `GRAMMAR_SYSTEMS_INVESTIGATION.md` (6 references)

#### `MIGRATION_MAP.md/` (1 files, 69 link references)
- `MIGRATION_MAP.md` (69 references)

#### `README.md/` (1 files, 1 link references)
- `README.md` (1 reference)

#### `comparative/` (2 files, 2 link references)
- `comparative/data/language-meta.json` (1 reference)
- `comparative/index.html` (1 reference)

#### `create_migration_plan_doc.py/` (1 files, 36 link references)
- `create_migration_plan_doc.py` (36 references)

#### `docs/` (2 files, 4 link references)
- `docs/ECOSYSTEM_ARCHITECTURE.md` (2 references)
- `docs/curriculum-coverage-audit.md` (2 references)

#### `grammar/` (49 files, 203 link references)
- `grammar/_schema/practice_links_audit.md` (11 references)
- `grammar/appendix.html` (4 references)
- `grammar/index.html` (4 references)
- `grammar/part-1.html` (4 references)
- `grammar/part-2.html` (4 references)
- `grammar/part-3.html` (4 references)
- `grammar/part-4.html` (4 references)
- `grammar/topics/adjectives.html` (4 references)
- `grammar/topics/adverbs-frequency.html` (4 references)
- `grammar/topics/adverbs-manner.html` (4 references)
- ... and 39 more files.

#### `index.html/` (1 files, 1 link references)
- `index.html` (1 reference)

#### `js/` (1 files, 1 link references)
- `js/data/phonology_data.js` (1 reference)

#### `missing-from-inventory.json/` (1 files, 18 link references)
- `missing-from-inventory.json` (18 references)

#### `practice/` (1 files, 3 link references)
- `practice/types/vocabulary/vocabulary.js` (3 references)

#### `project/` (56 files, 270 link references)
- `project/docs/CONTENT_ARCHITECTURE.md` (1 reference)
- `project/docs/EDITORIAL_HANDBOOK.md` (1 reference)
- `project/docs/THEMES.md` (1 reference)
- `project/docs/UNIFIED_VOCABULARY_TAXONOMY_AND_SCENE_MATCH_MATRIX.md` (1 reference)
- `project/docs/audits/A2_B2_VOCAB_COMMUNICATION_STRATEGY.md` (4 references)
- `project/docs/audits/ENGLISH_MANUALS_BRAINSTORM_AND_COMPONENTS.md` (5 references)
- `project/docs/audits/ENGLISH_MANUALS_VISUAL_AUDIT.md` (1 reference)
- `project/docs/audits/missing-from-inventory.json` (18 references)
- `project/docs/audits/reference-grammar-audit.json` (44 references)
- `project/planning/COMMUNICATION_ARCHITECTURE_BRAINSTORM.md` (3 references)
- ... and 46 more files.

#### `reference-grammar/` (28 files, 88 link references)
- `reference-grammar/de/de.html` (1 reference)
- `reference-grammar/el/el.html` (1 reference)
- `reference-grammar/el/morphology/determiners.json` (1 reference)
- `reference-grammar/el/morphology/pronouns.json` (1 reference)
- `reference-grammar/el/morphology/verbs.json` (1 reference)
- `reference-grammar/en/en.html` (1 reference)
- `reference-grammar/en/morphology/adjectives.json` (6 references)
- `reference-grammar/en/morphology/determiners.json` (1 reference)
- `reference-grammar/en/morphology/nouns.json` (10 references)
- `reference-grammar/en/morphology/numerals.json` (4 references)
- ... and 18 more files.

#### `reference-grammar-audit.json/` (1 files, 44 link references)
- `reference-grammar-audit.json` (44 references)

#### `scripts/` (2 files, 3 link references)
- `scripts/build_b1_comm_topics.py` (1 reference)
- `scripts/update_b1_comm_index.py` (2 references)

#### `templates/` (2 files, 2 link references)
- `templates/communication/index-template.html` (1 reference)
- `templates/grammar/data-template.json` (1 reference)

#### `vocabulary/` (1 files, 1 link references)
- `vocabulary/index.html` (1 reference)

### Category B: Internal `manuals/` Cross-References (442 Files / 1,679 Link Occurrences)
Manual pages, section indices, and JS assets inside `manuals/` heavily cross-link to each other (e.g., Book 1 Grammar cross-linking to Book 2 Vocabulary and Book 3 Communication). All inter-manual relative links (`href="../../..."`) will require automated path re-calculation during migration.

---

## 3. Proposed Target Architecture & Naming Conventions
### Target Directory Standard
All language manuals will be consolidated strictly under their ISO 639-1 language code folder in `manuals/<lang_code>/` using a consistent 3-tier sub-domain and level taxonomy:
```
manuals/
├── index.html                           # Master Directory Hub across all 14 languages
├── AUDIT.md / _TEMPLATE.md              # Repository Documentation & Templates
└── <lang_code>/                         # ISO Language Code (en, fr, it, ru, el, es, de, pt, br, tt, ba, cv, ka, hy)
    ├── index.html                       # Language Master Hub
    ├── index-a0-a1.html                 # Level Directory Hub (e.g. A0-A1)
    ├── index-a2.html                    # Level Directory Hub (e.g. A2)
    ├── grammar/                         # Grammar Manual Domain
    │   └── <level>/                     # CEFR Level (a1, a2, b1, b2, c1, c2)
    │       ├── index.html               # Level Grammar Hub
    │       ├── part-1.html ... part-N.html # Section / Part Indices
    │       ├── assets/                  # CSS (style.css) & JS (app.js)
    │       └── topics/                  # Topic Manual Modules (e.g. to-be.html, present-simple.html)
    ├── vocabulary/                      # Vocabulary Manual Domain
    │   └── <level>/                     # CEFR Level (a1, a2, b1, b2, c1, c2)
    │       ├── index.html               # Level Vocabulary Hub
    │       ├── part-1.html ... part-N.html # Section / Part Indices
    │       ├── assets/                  # CSS & JS assets
    │       └── topics/                  # Topic Modules (e.g. food-items.html, daily-routines.html)
    └── communication/                   # Communication Manual Domain
        └── <level>/                     # CEFR Level (a1, a2, b1, b2, c1, c2)
            ├── index.html               # Level Communication Hub
            ├── part-1.html ... part-N.html # Section / Part Indices
            ├── assets/                  # CSS & JS assets
            └── topics/                  # Topic Modules (e.g. greetings.html, ordering-food.html)
```

### Standardized Naming Rules & Target Path Corrections
1. **Level Directory Hubs**: Root files like `manuals/english-a0-a1.html` move to `manuals/en/index-a0-a1.html`.
2. **Legacy Monolingual Folders**: Folders like `manuals/grammaire-francaise/` move to `manuals/fr/grammar/a1/` and `manuals/lexique-francais/` move to `manuals/fr/vocabulary/a1/`.
3. **Legacy English Folders**: `manuals/grammar-a2/` moves to `manuals/en/grammar/a2/`, `manuals/vocabulary-manual/` moves to `manuals/en/vocabulary/a1/`, and `manuals/communication-manual/` moves to `manuals/en/communication/a1/`.
4. **Explicit Correction Note (Tatar `tt/` A1 Level Depth Standard)**:
   - **Observation**: Tatar manual files at `manuals/tt/grammar/` (`bulek-1.html`..`bulek-4.html`, `index.html`, `topics/*.html`, `assets/`) and `manuals/tt/vocabulary/` (`bulek-1.html`..`bulek-6.html`, `index.html`, `topics/*.html`, `assets/`) were previously located directly under `tt/grammar/` and `tt/vocabulary/` without an explicit level directory segment, unlike `tt/grammar/a2/` and `tt/vocabulary/a2/` which do have one.
   - **CEFR Verification**: Verification of HTML titles (`<title>Татар теле грамматикасы (A0–A1)</title>`, `<title>Татар теле лексикасы (A0–A1)</title>`) and hero kickers (`COSYlanguages · A0–A1`) confirms that these topics are indeed the **A0–A1 tier**.
   - **Target Path Correction**: In this migration plan, their target paths are explicitly corrected from `manuals/tt/grammar/...` and `manuals/tt/vocabulary/...` to **`manuals/tt/grammar/a1/...`** and **`manuals/tt/vocabulary/a1/...`**, enforcing 100% architectural parity with all other 13 target languages.

---

## 4. Complete Inventory of Files in `manuals/`
The table below lists all **2,213 files** currently in `manuals/`, detailing current path, language, format, size (bytes & KB), content type, and proposed target migration path.

| Current Path | Language | Format | Size | Content Type | Proposed Target Path |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `AUDIT.md` | Repository Meta Documentation (`meta`) | MD | 10836 B (10.6 KB) | Markdown Documentation / Template | `manuals/AUDIT.md` |
| `MIGRATION_PLAN.md` | Unknown (`unknown`) | MD | 383359 B (374.4 KB) | Markdown Documentation / Template | `manuals/unknown/MIGRATION_PLAN.md` |
| `_TEMPLATE.md` | Repository Meta Documentation (`meta`) | MD | 2665 B (2.6 KB) | Markdown Documentation / Template | `manuals/_TEMPLATE.md` |
| `bashqort-a0-a1.html` | Bashkir (`ba`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/ba/index-a0-a1.html` |
| `bashqort-a2.html` | Bashkir (`ba`) | HTML | 6697 B (6.5 KB) | Level Directory Hub | `manuals/ba/index-a2.html` |
| `brezhoneg-a0-a1.html` | Breton (`br`) | HTML | 6885 B (6.7 KB) | Level Directory Hub | `manuals/br/index-a0-a1.html` |
| `brezhoneg-a2.html` | Breton (`br`) | HTML | 6368 B (6.2 KB) | Level Directory Hub | `manuals/br/index-a2.html` |
| `chavash-a0-a1.html` | Chuvash (`cv`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/cv/index-a0-a1.html` |
| `chavash-a2.html` | Chuvash (`cv`) | HTML | 6718 B (6.6 KB) | Level Directory Hub | `manuals/cv/index-a2.html` |
| `deutsch-a0-a1.html` | German (`de`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/de/index-a0-a1.html` |
| `deutsch-a2.html` | German (`de`) | HTML | 6701 B (6.5 KB) | Level Directory Hub | `manuals/de/index-a2.html` |
| `ellinika-a0-a1.html` | Greek (`el`) | HTML | 7509 B (7.3 KB) | Level Directory Hub | `manuals/el/index-a0-a1.html` |
| `ellinika-a2.html` | Greek (`el`) | HTML | 7462 B (7.3 KB) | Level Directory Hub | `manuals/el/index-a2.html` |
| `english-a0-a1.html` | English (`en`) | HTML | 7145 B (7.0 KB) | Level Directory Hub | `manuals/en/index-a0-a1.html` |
| `english-a2.html` | English (`en`) | HTML | 7479 B (7.3 KB) | Level Directory Hub | `manuals/en/index-a2.html` |
| `english-b1.html` | English (`en`) | HTML | 7541 B (7.4 KB) | Level Directory Hub | `manuals/en/index-b1.html` |
| `english-b2.html` | English (`en`) | HTML | 7619 B (7.4 KB) | Level Directory Hub | `manuals/en/index-b2.html` |
| `english-c1.html` | English (`en`) | HTML | 7269 B (7.1 KB) | Level Directory Hub | `manuals/en/index-c1.html` |
| `english-c2.html` | English (`en`) | HTML | 7298 B (7.1 KB) | Level Directory Hub | `manuals/en/index-c2.html` |
| `espanol-a0-a1.html` | Spanish (`es`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/es/index-a0-a1.html` |
| `espanol-a2.html` | Spanish (`es`) | HTML | 6908 B (6.7 KB) | Level Directory Hub | `manuals/es/index-a2.html` |
| `francaise-a0-a1.html` | French (`fr`) | HTML | 6989 B (6.8 KB) | Level Directory Hub | `manuals/fr/index-a0-a1.html` |
| `francaise-a2.html` | French (`fr`) | HTML | 6884 B (6.7 KB) | Level Directory Hub | `manuals/fr/index-a2.html` |
| `hayots-a0-a1.html` | Armenian (`hy`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/hy/index-a0-a1.html` |
| `hayots-a2.html` | Armenian (`hy`) | HTML | 6834 B (6.7 KB) | Level Directory Hub | `manuals/hy/index-a2.html` |
| `index.html` | Shared / Master Index (`shared`) | HTML | 70350 B (68.7 KB) | Hub / Section Index | `manuals/index.html` |
| `italiano-a0-a1.html` | Italian (`it`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/it/index-a0-a1.html` |
| `italiano-a2.html` | Italian (`it`) | HTML | 6825 B (6.7 KB) | Level Directory Hub | `manuals/it/index-a2.html` |
| `portugues-a0-a1.html` | Portuguese (`pt`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/pt/index-a0-a1.html` |
| `portugues-a2.html` | Portuguese (`pt`) | HTML | 6931 B (6.8 KB) | Level Directory Hub | `manuals/pt/index-a2.html` |
| `qartuli-a0-a1.html` | Georgian (`ka`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/ka/index-a0-a1.html` |
| `qartuli-a2.html` | Georgian (`ka`) | HTML | 7086 B (6.9 KB) | Level Directory Hub | `manuals/ka/index-a2.html` |
| `russkiy-a0-a1.html` | Russian (`ru`) | HTML | 7606 B (7.4 KB) | Level Directory Hub | `manuals/ru/index-a0-a1.html` |
| `russkiy-a2.html` | Russian (`ru`) | HTML | 7557 B (7.4 KB) | Level Directory Hub | `manuals/ru/index-a2.html` |
| `tatar-a0-a1.html` | Tatar (`tt`) | HTML | 1315 B (1.3 KB) | Level Directory Hub | `manuals/tt/index-a0-a1.html` |
| `tatar-a2.html` | Tatar (`tt`) | HTML | 6723 B (6.6 KB) | Level Directory Hub | `manuals/tt/index-a2.html` |
| `it/COSYlanguages_Italian_Grammar_Manual_A0-A1.pdf` | Italian (`it`) | PDF | 5305086 B (5180.7 KB) | PDF Cheat Sheet / Reference Document | `manuals/it/COSYlanguages_Italian_Grammar_Manual_A0-A1.pdf` |
| `it/index.html` | Italian (`it`) | HTML | 4143 B (4.0 KB) | Hub / Section Index | `manuals/it/index.html` |
| `it/vocabulary/a2/index.html` | Italian (`it`) | HTML | 2207 B (2.2 KB) | Hub / Section Index | `manuals/it/vocabulary/a2/index.html` |
| `it/vocabulary/a2/module-1.html` | Italian (`it`) | HTML | 1956 B (1.9 KB) | Hub / Section Index | `manuals/it/vocabulary/a2/module-1.html` |
| `it/vocabulary/a2/module-2.html` | Italian (`it`) | HTML | 1937 B (1.9 KB) | Topic Manual Module | `manuals/it/vocabulary/a2/module-2.html` |
| `it/vocabulary/a2/topics/i-viaggi-e-i-trasporti.html` | Italian (`it`) | HTML | 3818 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a2/topics/i-viaggi-e-i-trasporti.html` |
| `it/vocabulary/a2/topics/il-lavoro-e-le-professioni.html` | Italian (`it`) | HTML | 3782 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a2/topics/il-lavoro-e-le-professioni.html` |
| `it/vocabulary/a2/topics/la-routine-e-i-ricordi.html` | Italian (`it`) | HTML | 3718 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a2/topics/la-routine-e-i-ricordi.html` |
| `it/vocabulary/a2/topics/la-salute-e-gli-acquisti.html` | Italian (`it`) | HTML | 3696 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a2/topics/la-salute-e-gli-acquisti.html` |
| `it/vocabulary/a2/assets/app.js` | Italian (`it`) | JS | 2170 B (2.1 KB) | JavaScript Application Logic | `manuals/it/vocabulary/a2/assets/app.js` |
| `it/vocabulary/a2/assets/style.css` | Italian (`it`) | CSS | 6405 B (6.3 KB) | CSS Stylesheet | `manuals/it/vocabulary/a2/assets/style.css` |
| `it/grammar/index.html` | Italian (`it`) | HTML | 186 B (0.2 KB) | Hub / Section Index | `manuals/it/grammar/index.html` |
| `it/grammar/a2/index.html` | Italian (`it`) | HTML | 2608 B (2.5 KB) | Hub / Section Index | `manuals/it/grammar/a2/index.html` |
| `it/grammar/a2/part-1.html` | Italian (`it`) | HTML | 2190 B (2.1 KB) | Hub / Section Index | `manuals/it/grammar/a2/part-1.html` |
| `it/grammar/a2/part-2.html` | Italian (`it`) | HTML | 2136 B (2.1 KB) | Hub / Section Index | `manuals/it/grammar/a2/part-2.html` |
| `it/grammar/a2/part-3.html` | Italian (`it`) | HTML | 2395 B (2.3 KB) | Hub / Section Index | `manuals/it/grammar/a2/part-3.html` |
| `it/grammar/a2/topics/i-pronomi-ci-e-ne.html` | Italian (`it`) | HTML | 5107 B (5.0 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/i-pronomi-ci-e-ne.html` |
| `it/grammar/a2/topics/il-comparativo-e-il-superlativo.html` | Italian (`it`) | HTML | 5015 B (4.9 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/il-comparativo-e-il-superlativo.html` |
| `it/grammar/a2/topics/il-condizionale-presente.html` | Italian (`it`) | HTML | 5042 B (4.9 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/il-condizionale-presente.html` |
| `it/grammar/a2/topics/il-futuro-semplice.html` | Italian (`it`) | HTML | 5226 B (5.1 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/il-futuro-semplice.html` |
| `it/grammar/a2/topics/limperfetto-indicativo.html` | Italian (`it`) | HTML | 5384 B (5.3 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/limperfetto-indicativo.html` |
| `it/grammar/a2/topics/obbligo-dovere-bisogna.html` | Italian (`it`) | HTML | 4773 B (4.7 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/obbligo-dovere-bisogna.html` |
| `it/grammar/a2/topics/passato-prossimo-essere-avere.html` | Italian (`it`) | HTML | 5560 B (5.4 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/passato-prossimo-essere-avere.html` |
| `it/grammar/a2/topics/passato-prossimo-vs-imperfetto.html` | Italian (`it`) | HTML | 4952 B (4.8 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/passato-prossimo-vs-imperfetto.html` |
| `it/grammar/a2/topics/pronomi-diretti-e-indiretti.html` | Italian (`it`) | HTML | 5303 B (5.2 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/pronomi-diretti-e-indiretti.html` |
| `it/grammar/a2/topics/se-presente-futuro.html` | Italian (`it`) | HTML | 4804 B (4.7 KB) | Topic Manual Module | `manuals/it/grammar/a2/topics/se-presente-futuro.html` |
| `it/grammar/a2/assets/app.js` | Italian (`it`) | JS | 2377 B (2.3 KB) | JavaScript Application Logic | `manuals/it/grammar/a2/assets/app.js` |
| `it/grammar/a2/assets/style.css` | Italian (`it`) | CSS | 7784 B (7.6 KB) | CSS Stylesheet | `manuals/it/grammar/a2/assets/style.css` |
| `it/grammar/a1/index.html` | Italian (`it`) | HTML | 1880 B (1.8 KB) | Hub / Section Index | `manuals/it/grammar/a1/index.html` |
| `it/grammar/a1/part-1.html` | Italian (`it`) | HTML | 1861 B (1.8 KB) | Hub / Section Index | `manuals/it/grammar/a1/part-1.html` |
| `it/grammar/a1/topics/part-1-building-blocks.html` | Italian (`it`) | HTML | 7763 B (7.6 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/part-1-building-blocks.html` |
| `it/grammar/a1/assets/app.js` | Italian (`it`) | JS | 857 B (0.8 KB) | JavaScript Application Logic | `manuals/it/grammar/a1/assets/app.js` |
| `it/grammar/a1/assets/style.css` | Italian (`it`) | CSS | 8057 B (7.9 KB) | CSS Stylesheet | `manuals/it/grammar/a1/assets/style.css` |
| `yezhadur-brezhoneg/index.html` | Breton (`br`) | HTML | 9770 B (9.5 KB) | Hub / Section Index | `manuals/br/grammar/a1/index.html` |
| `yezhadur-brezhoneg/topics/adanviou-hag-akord.html` | Breton (`br`) | HTML | 4662 B (4.6 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/adanviou-hag-akord.html` |
| `yezhadur-brezhoneg/topics/amzer-vreman-simpl.html` | Breton (`br`) | HTML | 4734 B (4.6 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/amzer-vreman-simpl.html` |
| `yezhadur-brezhoneg/topics/an-artiklou.html` | Breton (`br`) | HTML | 4754 B (4.6 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/an-artiklou.html` |
| `yezhadur-brezhoneg/topics/ar-kemmaduriou.html` | Breton (`br`) | HTML | 4802 B (4.7 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/ar-kemmaduriou.html` |
| `yezhadur-brezhoneg/topics/ar-verb-bezan.html` | Breton (`br`) | HTML | 4582 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/ar-verb-bezan.html` |
| `yezhadur-brezhoneg/topics/ar-verb-kaout.html` | Breton (`br`) | HTML | 4625 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/ar-verb-kaout.html` |
| `yezhadur-brezhoneg/topics/aragennou-amzer.html` | Breton (`br`) | HTML | 4557 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/aragennou-amzer.html` |
| `yezhadur-brezhoneg/topics/aragennou-lech.html` | Breton (`br`) | HTML | 4597 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/aragennou-lech.html` |
| `yezhadur-brezhoneg/topics/bez-ez-eus.html` | Breton (`br`) | HTML | 4775 B (4.7 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/bez-ez-eus.html` |
| `yezhadur-brezhoneg/topics/derez-uheloch.html` | Breton (`br`) | HTML | 4622 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/derez-uheloch.html` |
| `yezhadur-brezhoneg/topics/geriou-goulenn.html` | Breton (`br`) | HTML | 4727 B (4.6 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/geriou-goulenn.html` |
| `yezhadur-brezhoneg/topics/gouenn-an-anviou.html` | Breton (`br`) | HTML | 4754 B (4.6 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/gouenn-an-anviou.html` |
| `yezhadur-brezhoneg/topics/lies-niver-an-anviou.html` | Breton (`br`) | HTML | 4612 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/lies-niver-an-anviou.html` |
| `yezhadur-brezhoneg/topics/negasion.html` | Breton (`br`) | HTML | 4660 B (4.6 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/negasion.html` |
| `yezhadur-brezhoneg/topics/niverou-hag-eur.html` | Breton (`br`) | HTML | 4480 B (4.4 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/niverou-hag-eur.html` |
| `yezhadur-brezhoneg/topics/perchenniezh.html` | Breton (`br`) | HTML | 4800 B (4.7 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/perchenniezh.html` |
| `yezhadur-brezhoneg/topics/raganviou.html` | Breton (`br`) | HTML | 4531 B (4.4 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/raganviou.html` |
| `yezhadur-brezhoneg/topics/urzh-ar-geriou.html` | Breton (`br`) | HTML | 4654 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/urzh-ar-geriou.html` |
| `yezhadur-brezhoneg/topics/verbou-direoliek.html` | Breton (`br`) | HTML | 4630 B (4.5 KB) | Topic Manual Module | `manuals/br/grammar/a1/topics/verbou-direoliek.html` |
| `yezhadur-brezhoneg/assets/app.js` | Breton (`br`) | JS | 6795 B (6.6 KB) | JavaScript Application Logic | `manuals/br/grammar/a1/assets/app.js` |
| `yezhadur-brezhoneg/assets/style.css` | Breton (`br`) | CSS | 17671 B (17.3 KB) | CSS Stylesheet | `manuals/br/grammar/a1/assets/style.css` |
| `bashqort-tele-grammatikahy/bulek-1.html` | Bashkir (`ba`) | HTML | 4816 B (4.7 KB) | Hub / Section Index | `manuals/ba/grammar/a1/bulek-1.html` |
| `bashqort-tele-grammatikahy/bulek-2.html` | Bashkir (`ba`) | HTML | 3188 B (3.1 KB) | Hub / Section Index | `manuals/ba/grammar/a1/bulek-2.html` |
| `bashqort-tele-grammatikahy/bulek-3.html` | Bashkir (`ba`) | HTML | 2809 B (2.7 KB) | Hub / Section Index | `manuals/ba/grammar/a1/bulek-3.html` |
| `bashqort-tele-grammatikahy/bulek-4.html` | Bashkir (`ba`) | HTML | 2923 B (2.9 KB) | Hub / Section Index | `manuals/ba/grammar/a1/bulek-4.html` |
| `bashqort-tele-grammatikahy/index.html` | Bashkir (`ba`) | HTML | 3744 B (3.7 KB) | Hub / Section Index | `manuals/ba/grammar/a1/index.html` |
| `bashqort-tele-grammatikahy/topics/bar-yukh.html` | Bashkir (`ba`) | HTML | 4034 B (3.9 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/bar-yukh.html` |
| `bashqort-tele-grammatikahy/topics/baylaueostar.html` | Bashkir (`ba`) | HTML | 4813 B (4.7 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/baylaueostar.html` |
| `bashqort-tele-grammatikahy/topics/eyalek-affikstary.html` | Bashkir (`ba`) | HTML | 4102 B (4.0 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/eyalek-affikstary.html` |
| `bashqort-tele-grammatikahy/topics/eyalek-kileshe.html` | Bashkir (`ba`) | HTML | 4987 B (4.9 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/eyalek-kileshe.html` |
| `bashqort-tele-grammatikahy/topics/hadherge-zaman.html` | Bashkir (`ba`) | HTML | 4623 B (4.5 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/hadherge-zaman.html` |
| `bashqort-tele-grammatikahy/topics/handar-ham-kileshtar.html` | Bashkir (`ba`) | HTML | 4788 B (4.7 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/handar-ham-kileshtar.html` |
| `bashqort-tele-grammatikahy/topics/handar-ham-vaqyt.html` | Bashkir (`ba`) | HTML | 4634 B (4.5 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/handar-ham-vaqyt.html` |
| `bashqort-tele-grammatikahy/topics/haudhaktar-hahem-affikstar.html` | Bashkir (`ba`) | HTML | 4147 B (4.0 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/haudhaktar-hahem-affikstar.html` |
| `bashqort-tele-grammatikahy/topics/horau-formahhy.html` | Bashkir (`ba`) | HTML | 4561 B (4.5 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/horau-formahhy.html` |
| `bashqort-tele-grammatikahy/topics/huththar-tartibe.html` | Bashkir (`ba`) | HTML | 4377 B (4.3 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/huththar-tartibe.html` |
| `bashqort-tele-grammatikahy/topics/kilechak-zaman.html` | Bashkir (`ba`) | HTML | 4530 B (4.4 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/kilechak-zaman.html` |
| `bashqort-tele-grammatikahy/topics/kileshtar.html` | Bashkir (`ba`) | HTML | 5068 B (4.9 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/kileshtar.html` |
| `bashqort-tele-grammatikahy/topics/kire-khaghu.html` | Bashkir (`ba`) | HTML | 4675 B (4.6 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/kire-khaghu.html` |
| `bashqort-tele-grammatikahy/topics/kuplek-ham-azlyq.html` | Bashkir (`ba`) | HTML | 4442 B (4.3 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/kuplek-ham-azlyq.html` |
| `bashqort-tele-grammatikahy/topics/kurhateu-almashtary.html` | Bashkir (`ba`) | HTML | 4368 B (4.3 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/kurhateu-almashtary.html` |
| `bashqort-tele-grammatikahy/topics/saghyshtyru-darazhase.html` | Bashkir (`ba`) | HTML | 4939 B (4.8 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/saghyshtyru-darazhase.html` |
| `bashqort-tele-grammatikahy/topics/sifattar.html` | Bashkir (`ba`) | HTML | 4450 B (4.3 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/sifattar.html` |
| `bashqort-tele-grammatikahy/topics/sygysh-kileshe.html` | Bashkir (`ba`) | HTML | 4680 B (4.6 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/sygysh-kileshe.html` |
| `bashqort-tele-grammatikahy/topics/tobau-kilesh.html` | Bashkir (`ba`) | HTML | 4565 B (4.5 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/tobau-kilesh.html` |
| `bashqort-tele-grammatikahy/topics/top-kilesh.html` | Bashkir (`ba`) | HTML | 4624 B (4.5 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/top-kilesh.html` |
| `bashqort-tele-grammatikahy/topics/tusham-kilesh.html` | Bashkir (`ba`) | HTML | 4614 B (4.5 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/tusham-kilesh.html` |
| `bashqort-tele-grammatikahy/topics/uryn-vaqyt-kileshe.html` | Bashkir (`ba`) | HTML | 4572 B (4.5 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/uryn-vaqyt-kileshe.html` |
| `bashqort-tele-grammatikahy/topics/utkan-zaman.html` | Bashkir (`ba`) | HTML | 4375 B (4.3 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/utkan-zaman.html` |
| `bashqort-tele-grammatikahy/topics/zat-almashtary.html` | Bashkir (`ba`) | HTML | 4315 B (4.2 KB) | Topic Manual Module | `manuals/ba/grammar/a1/topics/zat-almashtary.html` |
| `bashqort-tele-grammatikahy/assets/app.js` | Bashkir (`ba`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/ba/grammar/a1/assets/app.js` |
| `bashqort-tele-grammatikahy/assets/style.css` | Bashkir (`ba`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/ba/grammar/a1/assets/style.css` |
| `br/vocabulary/a2/index.html` | Breton (`br`) | HTML | 1139 B (1.1 KB) | Hub / Section Index | `manuals/br/vocabulary/a2/index.html` |
| `br/vocabulary/a2/module-1.html` | Breton (`br`) | HTML | 1351 B (1.3 KB) | Hub / Section Index | `manuals/br/vocabulary/a2/module-1.html` |
| `br/vocabulary/a2/topics/beajoù-ha-treuzdougen.html` | Breton (`br`) | HTML | 1386 B (1.4 KB) | Topic Manual Module | `manuals/br/vocabulary/a2/topics/beajoù-ha-treuzdougen.html` |
| `br/vocabulary/a2/topics/micherioù-ha-labour.html` | Breton (`br`) | HTML | 1409 B (1.4 KB) | Topic Manual Module | `manuals/br/vocabulary/a2/topics/micherioù-ha-labour.html` |
| `br/vocabulary/a2/assets/app.js` | Breton (`br`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/br/vocabulary/a2/assets/app.js` |
| `br/vocabulary/a2/assets/style.css` | Breton (`br`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/br/vocabulary/a2/assets/style.css` |
| `br/grammar/a2/index.html` | Breton (`br`) | HTML | 1152 B (1.1 KB) | Hub / Section Index | `manuals/br/grammar/a2/index.html` |
| `br/grammar/a2/part-1.html` | Breton (`br`) | HTML | 1376 B (1.3 KB) | Hub / Section Index | `manuals/br/grammar/a2/part-1.html` |
| `br/grammar/a2/topics/amzer-dremen-gevrennek.html` | Breton (`br`) | HTML | 3314 B (3.2 KB) | Topic Manual Module | `manuals/br/grammar/a2/topics/amzer-dremen-gevrennek.html` |
| `br/grammar/a2/topics/kemmaduriou-kemmesket.html` | Breton (`br`) | HTML | 3640 B (3.6 KB) | Topic Manual Module | `manuals/br/grammar/a2/topics/kemmaduriou-kemmesket.html` |
| `br/grammar/a2/assets/app.js` | Breton (`br`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/br/grammar/a2/assets/app.js` |
| `br/grammar/a2/assets/style.css` | Breton (`br`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/br/grammar/a2/assets/style.css` |
| `qartuli-gramatika/index.html` | Georgian (`ka`) | HTML | 4399 B (4.3 KB) | Hub / Section Index | `manuals/ka/grammar/a1/index.html` |
| `qartuli-gramatika/nacili-1.html` | Georgian (`ka`) | HTML | 6074 B (5.9 KB) | Hub / Section Index | `manuals/ka/grammar/a1/nacili-1.html` |
| `qartuli-gramatika/nacili-2.html` | Georgian (`ka`) | HTML | 3821 B (3.7 KB) | Hub / Section Index | `manuals/ka/grammar/a1/nacili-2.html` |
| `qartuli-gramatika/nacili-3.html` | Georgian (`ka`) | HTML | 2933 B (2.9 KB) | Hub / Section Index | `manuals/ka/grammar/a1/nacili-3.html` |
| `qartuli-gramatika/nacili-4.html` | Georgian (`ka`) | HTML | 3529 B (3.4 KB) | Topic Manual Module | `manuals/ka/grammar/a1/nacili-4.html` |
| `qartuli-gramatika/topics/akvs-hkavs.html` | Georgian (`ka`) | HTML | 4973 B (4.9 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/akvs-hkavs.html` |
| `qartuli-gramatika/topics/aris-ar-aris.html` | Georgian (`ka`) | HTML | 4727 B (4.6 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/aris-ar-aris.html` |
| `qartuli-gramatika/topics/brunvebi.html` | Georgian (`ka`) | HTML | 6139 B (6.0 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/brunvebi.html` |
| `qartuli-gramatika/topics/chvenebiti-nacvalsakhelebi.html` | Georgian (`ka`) | HTML | 5282 B (5.2 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/chvenebiti-nacvalsakhelebi.html` |
| `qartuli-gramatika/topics/kitkhviti-sitkvebi.html` | Georgian (`ka`) | HTML | 5438 B (5.3 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/kitkhviti-sitkvebi.html` |
| `qartuli-gramatika/topics/kutvniloba.html` | Georgian (`ka`) | HTML | 4905 B (4.8 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/kutvniloba.html` |
| `qartuli-gramatika/topics/mitsemiti-brunva.html` | Georgian (`ka`) | HTML | 5807 B (5.7 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/mitsemiti-brunva.html` |
| `qartuli-gramatika/topics/moqmedebiti-brunva.html` | Georgian (`ka`) | HTML | 5917 B (5.8 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/moqmedebiti-brunva.html` |
| `qartuli-gramatika/topics/motkhrobiti-brunva.html` | Georgian (`ka`) | HTML | 5938 B (5.8 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/motkhrobiti-brunva.html` |
| `qartuli-gramatika/topics/natesaobiti-brunva.html` | Georgian (`ka`) | HTML | 5679 B (5.5 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/natesaobiti-brunva.html` |
| `qartuli-gramatika/topics/piris-nacvalsakhelebi.html` | Georgian (`ka`) | HTML | 5156 B (5.0 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/piris-nacvalsakhelebi.html` |
| `qartuli-gramatika/topics/pirmoti-fortmebi.html` | Georgian (`ka`) | HTML | 5371 B (5.2 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/pirmoti-fortmebi.html` |
| `qartuli-gramatika/topics/raodenobiti-sitkvebi.html` | Georgian (`ka`) | HTML | 5015 B (4.9 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/raodenobiti-sitkvebi.html` |
| `qartuli-gramatika/topics/ricbvitebi-da-brunvebi.html` | Georgian (`ka`) | HTML | 5964 B (5.8 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/ricbvitebi-da-brunvebi.html` |
| `qartuli-gramatika/topics/rickhvebi-dro-da-dgeebi.html` | Georgian (`ka`) | HTML | 5694 B (5.6 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/rickhvebi-dro-da-dgeebi.html` |
| `qartuli-gramatika/topics/sakhelobiti-brunva.html` | Georgian (`ka`) | HTML | 6140 B (6.0 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/sakhelobiti-brunva.html` |
| `qartuli-gramatika/topics/shedarebiti-khariskhi.html` | Georgian (`ka`) | HTML | 6056 B (5.9 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/shedarebiti-khariskhi.html` |
| `qartuli-gramatika/topics/sitkvata-rigi.html` | Georgian (`ka`) | HTML | 5410 B (5.3 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/sitkvata-rigi.html` |
| `qartuli-gramatika/topics/tandebulebi.html` | Georgian (`ka`) | HTML | 5501 B (5.4 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/tandebulebi.html` |
| `qartuli-gramatika/topics/tsodebiti-brunva.html` | Georgian (`ka`) | HTML | 5762 B (5.6 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/tsodebiti-brunva.html` |
| `qartuli-gramatika/topics/uaryofiti-fortmebi.html` | Georgian (`ka`) | HTML | 5230 B (5.1 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/uaryofiti-fortmebi.html` |
| `qartuli-gramatika/topics/vitarebiti-brunva.html` | Georgian (`ka`) | HTML | 5966 B (5.8 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/vitarebiti-brunva.html` |
| `qartuli-gramatika/topics/zedsartavi-sakheli.html` | Georgian (`ka`) | HTML | 5426 B (5.3 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/zedsartavi-sakheli.html` |
| `qartuli-gramatika/topics/zmna-da-droebrivi-fortmebi.html` | Georgian (`ka`) | HTML | 5382 B (5.3 KB) | Topic Manual Module | `manuals/ka/grammar/a1/topics/zmna-da-droebrivi-fortmebi.html` |
| `qartuli-gramatika/assets/app.js` | Georgian (`ka`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/ka/grammar/a1/assets/app.js` |
| `qartuli-gramatika/assets/style.css` | Georgian (`ka`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/ka/grammar/a1/assets/style.css` |
| `el/COSYlanguages_-_A0-A1_Greek_Grammar_Manual.pdf` | Greek (`el`) | PDF | 814952 B (795.9 KB) | PDF Cheat Sheet / Reference Document | `manuals/el/COSYlanguages_-_A0-A1_Greek_Grammar_Manual.pdf` |
| `el/grammar/index.html` | Greek (`el`) | HTML | 186 B (0.2 KB) | Hub / Section Index | `manuals/el/grammar/index.html` |
| `el/grammar/a1/index.html` | Greek (`el`) | HTML | 2174 B (2.1 KB) | Hub / Section Index | `manuals/el/grammar/a1/index.html` |
| `el/grammar/a1/part-1.html` | Greek (`el`) | HTML | 2152 B (2.1 KB) | Hub / Section Index | `manuals/el/grammar/a1/part-1.html` |
| `el/grammar/a1/topics/part-1-building-blocks.html` | Greek (`el`) | HTML | 10353 B (10.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/part-1-building-blocks.html` |
| `el/grammar/a1/assets/app.js` | Greek (`el`) | JS | 857 B (0.8 KB) | JavaScript Application Logic | `manuals/el/grammar/a1/assets/app.js` |
| `el/grammar/a1/assets/style.css` | Greek (`el`) | CSS | 8057 B (7.9 KB) | CSS Stylesheet | `manuals/el/grammar/a1/assets/style.css` |
| `geriou-brezhoneg/index.html` | Breton (`br`) | HTML | 15575 B (15.2 KB) | Hub / Section Index | `manuals/br/vocabulary/a1/index.html` |
| `geriou-brezhoneg/lodenn-1.html` | Breton (`br`) | HTML | 3131 B (3.1 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/lodenn-1.html` |
| `geriou-brezhoneg/lodenn-2.html` | Breton (`br`) | HTML | 3191 B (3.1 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/lodenn-2.html` |
| `geriou-brezhoneg/lodenn-3.html` | Breton (`br`) | HTML | 3154 B (3.1 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/lodenn-3.html` |
| `geriou-brezhoneg/lodenn-4.html` | Breton (`br`) | HTML | 3470 B (3.4 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/lodenn-4.html` |
| `geriou-brezhoneg/topics/al-loened.html` | Breton (`br`) | HTML | 7512 B (7.3 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/al-loened.html` |
| `geriou-brezhoneg/topics/an-amzer.html` | Breton (`br`) | HTML | 6760 B (6.6 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/an-amzer.html` |
| `geriou-brezhoneg/topics/an-niverou.html` | Breton (`br`) | HTML | 8675 B (8.5 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/an-niverou.html` |
| `geriou-brezhoneg/topics/an-teknologiezh.html` | Breton (`br`) | HTML | 7342 B (7.2 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/an-teknologiezh.html` |
| `geriou-brezhoneg/topics/an-ti-hag-ar-chambrou.html` | Breton (`br`) | HTML | 7368 B (7.2 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/an-ti-hag-ar-chambrou.html` |
| `geriou-brezhoneg/topics/an-tiegezh.html` | Breton (`br`) | HTML | 7451 B (7.3 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/an-tiegezh.html` |
| `geriou-brezhoneg/topics/ar-chorf-hag-an-doareou.html` | Breton (`br`) | HTML | 7377 B (7.2 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/ar-chorf-hag-an-doareou.html` |
| `geriou-brezhoneg/topics/ar-gegin-hag-ar-pred.html` | Breton (`br`) | HTML | 6331 B (6.2 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/ar-gegin-hag-ar-pred.html` |
| `geriou-brezhoneg/topics/ar-mobilhier.html` | Breton (`br`) | HTML | 6791 B (6.6 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/ar-mobilhier.html` |
| `geriou-brezhoneg/topics/ar-skol-hag-al-labour.html` | Breton (`br`) | HTML | 6613 B (6.5 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/ar-skol-hag-al-labour.html` |
| `geriou-brezhoneg/topics/boued-hag-evajou.html` | Breton (`br`) | HTML | 7486 B (7.3 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/boued-hag-evajou.html` |
| `geriou-brezhoneg/topics/broadelezhiou-ha-yezhou.html` | Breton (`br`) | HTML | 6006 B (5.9 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/broadelezhiou-ha-yezhou.html` |
| `geriou-brezhoneg/topics/dudiou-ha-sportou.html` | Breton (`br`) | HTML | 6254 B (6.1 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/dudiou-ha-sportou.html` |
| `geriou-brezhoneg/topics/geriou-a-enep.html` | Breton (`br`) | HTML | 7063 B (6.9 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/geriou-a-enep.html` |
| `geriou-brezhoneg/topics/geriou-kourtez.html` | Breton (`br`) | HTML | 6840 B (6.7 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/geriou-kourtez.html` |
| `geriou-brezhoneg/topics/lechiou-ha-beaj.html` | Breton (`br`) | HTML | 6819 B (6.7 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/lechiou-ha-beaj.html` |
| `geriou-brezhoneg/topics/liwiou.html` | Breton (`br`) | HTML | 6894 B (6.7 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/liwiou.html` |
| `geriou-brezhoneg/topics/prena-dilhad.html` | Breton (`br`) | HTML | 6932 B (6.8 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/prena-dilhad.html` |
| `geriou-brezhoneg/topics/santimantou.html` | Breton (`br`) | HTML | 6506 B (6.4 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/santimantou.html` |
| `geriou-brezhoneg/topics/traou-ar-chlas.html` | Breton (`br`) | HTML | 7347 B (7.2 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/traou-ar-chlas.html` |
| `geriou-brezhoneg/topics/verbou-diazez.html` | Breton (`br`) | HTML | 6777 B (6.6 KB) | Topic Manual Module | `manuals/br/vocabulary/a1/topics/verbou-diazez.html` |
| `geriou-brezhoneg/assets/app.js` | Breton (`br`) | JS | 6795 B (6.6 KB) | JavaScript Application Logic | `manuals/br/vocabulary/a1/assets/app.js` |
| `geriou-brezhoneg/assets/style.css` | Breton (`br`) | CSS | 17914 B (17.5 KB) | CSS Stylesheet | `manuals/br/vocabulary/a1/assets/style.css` |
| `vocabulario-espanol/index.html` | Spanish (`es`) | HTML | 3880 B (3.8 KB) | Hub / Section Index | `manuals/es/vocabulary/a1/index.html` |
| `vocabulario-espanol/modulo-1.html` | Spanish (`es`) | HTML | 3094 B (3.0 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/modulo-1.html` |
| `vocabulario-espanol/modulo-2.html` | Spanish (`es`) | HTML | 2524 B (2.5 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/modulo-2.html` |
| `vocabulario-espanol/modulo-3.html` | Spanish (`es`) | HTML | 2547 B (2.5 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/modulo-3.html` |
| `vocabulario-espanol/modulo-4.html` | Spanish (`es`) | HTML | 2578 B (2.5 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/modulo-4.html` |
| `vocabulario-espanol/modulo-5.html` | Spanish (`es`) | HTML | 2601 B (2.5 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/modulo-5.html` |
| `vocabulario-espanol/modulo-6.html` | Spanish (`es`) | HTML | 2138 B (2.1 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/modulo-6.html` |
| `vocabulario-espanol/topics/bases-de-pronunciacion.html` | Spanish (`es`) | HTML | 3730 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/bases-de-pronunciacion.html` |
| `vocabulario-espanol/topics/comida-y-bebidas.html` | Spanish (`es`) | HTML | 3809 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/comida-y-bebidas.html` |
| `vocabulario-espanol/topics/comidas-y-cocina.html` | Spanish (`es`) | HTML | 3726 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/comidas-y-cocina.html` |
| `vocabulario-espanol/topics/compras-y-dinero.html` | Spanish (`es`) | HTML | 3704 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/compras-y-dinero.html` |
| `vocabulario-espanol/topics/datos-personales.html` | Spanish (`es`) | HTML | 3734 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/datos-personales.html` |
| `vocabulario-espanol/topics/direcciones-y-lugares.html` | Spanish (`es`) | HTML | 3721 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/direcciones-y-lugares.html` |
| `vocabulario-espanol/topics/el-cuerpo-humano.html` | Spanish (`es`) | HTML | 3710 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/el-cuerpo-humano.html` |
| `vocabulario-espanol/topics/escuela-y-objetos-de-clase.html` | Spanish (`es`) | HTML | 3741 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/escuela-y-objetos-de-clase.html` |
| `vocabulario-espanol/topics/horario-y-rutina-diaria.html` | Spanish (`es`) | HTML | 3711 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/horario-y-rutina-diaria.html` |
| `vocabulario-espanol/topics/la-casa-y-los-muebles.html` | Spanish (`es`) | HTML | 3671 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/la-casa-y-los-muebles.html` |
| `vocabulario-espanol/topics/la-familia.html` | Spanish (`es`) | HTML | 3543 B (3.5 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/la-familia.html` |
| `vocabulario-espanol/topics/los-colores.html` | Spanish (`es`) | HTML | 3632 B (3.5 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/los-colores.html` |
| `vocabulario-espanol/topics/los-numeros.html` | Spanish (`es`) | HTML | 3618 B (3.5 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/los-numeros.html` |
| `vocabulario-espanol/topics/palabras-de-enlace-y-preguntas.html` | Spanish (`es`) | HTML | 3743 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/palabras-de-enlace-y-preguntas.html` |
| `vocabulario-espanol/topics/profesiones-y-trabajos.html` | Spanish (`es`) | HTML | 3739 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/profesiones-y-trabajos.html` |
| `vocabulario-espanol/topics/restaurante-y-cafe.html` | Spanish (`es`) | HTML | 3713 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/restaurante-y-cafe.html` |
| `vocabulario-espanol/topics/ropa-y-accesorios.html` | Spanish (`es`) | HTML | 3713 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/ropa-y-accesorios.html` |
| `vocabulario-espanol/topics/salud-y-farmacia.html` | Spanish (`es`) | HTML | 3786 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/salud-y-farmacia.html` |
| `vocabulario-espanol/topics/saludos-y-presentaciones.html` | Spanish (`es`) | HTML | 3692 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/saludos-y-presentaciones.html` |
| `vocabulario-espanol/topics/sentimientos-y-emociones.html` | Spanish (`es`) | HTML | 3775 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/sentimientos-y-emociones.html` |
| `vocabulario-espanol/topics/tecnologia-y-telefono.html` | Spanish (`es`) | HTML | 3789 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/tecnologia-y-telefono.html` |
| `vocabulario-espanol/topics/tiempo-libre-y-hobbies.html` | Spanish (`es`) | HTML | 3728 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/tiempo-libre-y-hobbies.html` |
| `vocabulario-espanol/topics/tiempo-y-estaciones.html` | Spanish (`es`) | HTML | 3691 B (3.6 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/tiempo-y-estaciones.html` |
| `vocabulario-espanol/topics/transportes-y-viajes.html` | Spanish (`es`) | HTML | 3756 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/transportes-y-viajes.html` |
| `vocabulario-espanol/topics/verbos-principales-a1.html` | Spanish (`es`) | HTML | 3901 B (3.8 KB) | Topic Manual Module | `manuals/es/vocabulary/a1/topics/verbos-principales-a1.html` |
| `vocabulario-espanol/assets/app.js` | Spanish (`es`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/es/vocabulary/a1/assets/app.js` |
| `vocabulario-espanol/assets/style.css` | Spanish (`es`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/es/vocabulary/a1/assets/style.css` |
| `ba/index.html` | Bashkir (`ba`) | HTML | 7390 B (7.2 KB) | Hub / Section Index | `manuals/ba/index.html` |
| `ba/vocabulary/a2/index.html` | Bashkir (`ba`) | HTML | 1275 B (1.2 KB) | Hub / Section Index | `manuals/ba/vocabulary/a2/index.html` |
| `ba/vocabulary/a2/module-1.html` | Bashkir (`ba`) | HTML | 1482 B (1.4 KB) | Hub / Section Index | `manuals/ba/vocabulary/a2/module-1.html` |
| `ba/vocabulary/a2/topics/gailat-hem-xezmet.html` | Bashkir (`ba`) | HTML | 1511 B (1.5 KB) | Topic Manual Module | `manuals/ba/vocabulary/a2/topics/gailat-hem-xezmet.html` |
| `ba/vocabulary/a2/topics/saxat-hem-transport.html` | Bashkir (`ba`) | HTML | 1513 B (1.5 KB) | Topic Manual Module | `manuals/ba/vocabulary/a2/topics/saxat-hem-transport.html` |
| `ba/vocabulary/a2/assets/app.js` | Bashkir (`ba`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/ba/vocabulary/a2/assets/app.js` |
| `ba/vocabulary/a2/assets/style.css` | Bashkir (`ba`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/ba/vocabulary/a2/assets/style.css` |
| `ba/grammar/a2/index.html` | Bashkir (`ba`) | HTML | 1293 B (1.3 KB) | Hub / Section Index | `manuals/ba/grammar/a2/index.html` |
| `ba/grammar/a2/part-1.html` | Bashkir (`ba`) | HTML | 1536 B (1.5 KB) | Hub / Section Index | `manuals/ba/grammar/a2/part-1.html` |
| `ba/grammar/a2/topics/fagyl-formalary-hem-qushymchalar.html` | Bashkir (`ba`) | HTML | 3772 B (3.7 KB) | Topic Manual Module | `manuals/ba/grammar/a2/topics/fagyl-formalary-hem-qushymchalar.html` |
| `ba/grammar/a2/topics/utken-zamandar.html` | Bashkir (`ba`) | HTML | 3742 B (3.7 KB) | Topic Manual Module | `manuals/ba/grammar/a2/topics/utken-zamandar.html` |
| `ba/grammar/a2/assets/app.js` | Bashkir (`ba`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/ba/grammar/a2/assets/app.js` |
| `ba/grammar/a2/assets/style.css` | Bashkir (`ba`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/ba/grammar/a2/assets/style.css` |
| `hayots-lezvi-barapashar/index.html` | Armenian (`hy`) | HTML | 3027 B (3.0 KB) | Hub / Section Index | `manuals/hy/vocabulary/a1/index.html` |
| `hayots-lezvi-barapashar/mas-1.html` | Armenian (`hy`) | HTML | 2581 B (2.5 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/mas-1.html` |
| `hayots-lezvi-barapashar/mas-2.html` | Armenian (`hy`) | HTML | 2317 B (2.3 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/mas-2.html` |
| `hayots-lezvi-barapashar/mas-3.html` | Armenian (`hy`) | HTML | 2693 B (2.6 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/mas-3.html` |
| `hayots-lezvi-barapashar/topics/ashkhatankh-yev-masnagitutyunner.html` | Armenian (`hy`) | HTML | 3962 B (3.9 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/ashkhatankh-yev-masnagitutyunner.html` |
| `hayots-lezvi-barapashar/topics/eghanak-yev-zhamanak.html` | Armenian (`hy`) | HTML | 3750 B (3.7 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/eghanak-yev-zhamanak.html` |
| `hayots-lezvi-barapashar/topics/entanik.html` | Armenian (`hy`) | HTML | 3775 B (3.7 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/entanik.html` |
| `hayots-lezvi-barapashar/topics/guyner.html` | Armenian (`hy`) | HTML | 3754 B (3.7 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/guyner.html` |
| `hayots-lezvi-barapashar/topics/hagust.html` | Armenian (`hy`) | HTML | 3674 B (3.6 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/hagust.html` |
| `hayots-lezvi-barapashar/topics/himnakan-bayer.html` | Armenian (`hy`) | HTML | 3892 B (3.8 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/himnakan-bayer.html` |
| `hayots-lezvi-barapashar/topics/marmni-maser.html` | Armenian (`hy`) | HTML | 3658 B (3.6 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/marmni-maser.html` |
| `hayots-lezvi-barapashar/topics/thver.html` | Armenian (`hy`) | HTML | 3783 B (3.7 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/thver.html` |
| `hayots-lezvi-barapashar/topics/tun-yev-senyakner.html` | Armenian (`hy`) | HTML | 3774 B (3.7 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/tun-yev-senyakner.html` |
| `hayots-lezvi-barapashar/topics/utelikh-yev-pmpelikh.html` | Armenian (`hy`) | HTML | 3707 B (3.6 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/utelikh-yev-pmpelikh.html` |
| `hayots-lezvi-barapashar/topics/voghjoyn-yev-tsanotutyun.html` | Armenian (`hy`) | HTML | 3966 B (3.9 KB) | Topic Manual Module | `manuals/hy/vocabulary/a1/topics/voghjoyn-yev-tsanotutyun.html` |
| `hayots-lezvi-barapashar/assets/app.js` | Armenian (`hy`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/hy/vocabulary/a1/assets/app.js` |
| `hayots-lezvi-barapashar/assets/style.css` | Armenian (`hy`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/hy/vocabulary/a1/assets/style.css` |
| `lexique-francais/index.html` | French (`fr`) | HTML | 4523 B (4.4 KB) | Hub / Section Index | `manuals/fr/vocabulary/a1/index.html` |
| `lexique-francais/module-1.html` | French (`fr`) | HTML | 5898 B (5.8 KB) | Hub / Section Index | `manuals/fr/vocabulary/a1/module-1.html` |
| `lexique-francais/module-2.html` | French (`fr`) | HTML | 5938 B (5.8 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/module-2.html` |
| `lexique-francais/module-3.html` | French (`fr`) | HTML | 5939 B (5.8 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/module-3.html` |
| `lexique-francais/module-4.html` | French (`fr`) | HTML | 5463 B (5.3 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/module-4.html` |
| `lexique-francais/module-5.html` | French (`fr`) | HTML | 5023 B (4.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/module-5.html` |
| `lexique-francais/module-6.html` | French (`fr`) | HTML | 4428 B (4.3 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/module-6.html` |
| `lexique-francais/topics/achats-et-shopping.html` | French (`fr`) | HTML | 11974 B (11.7 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/achats-et-shopping.html` |
| `lexique-francais/topics/adverbes-de-temps-et-frequence.html` | French (`fr`) | HTML | 11981 B (11.7 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/adverbes-de-temps-et-frequence.html` |
| `lexique-francais/topics/animaux-et-nature.html` | French (`fr`) | HTML | 12114 B (11.8 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/animaux-et-nature.html` |
| `lexique-francais/topics/argent-et-paiement.html` | French (`fr`) | HTML | 12198 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/argent-et-paiement.html` |
| `lexique-francais/topics/au-restaurant-et-cafe.html` | French (`fr`) | HTML | 12414 B (12.1 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/au-restaurant-et-cafe.html` |
| `lexique-francais/topics/boissons-et-repas.html` | French (`fr`) | HTML | 12268 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/boissons-et-repas.html` |
| `lexique-francais/topics/corps-humain-et-visage.html` | French (`fr`) | HTML | 12298 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/corps-humain-et-visage.html` |
| `lexique-francais/topics/couleurs-et-nuances.html` | French (`fr`) | HTML | 12022 B (11.7 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/couleurs-et-nuances.html` |
| `lexique-francais/topics/description-physique-et-caractere.html` | French (`fr`) | HTML | 12002 B (11.7 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/description-physique-et-caractere.html` |
| `lexique-francais/topics/ecole-et-salle-de-classe.html` | French (`fr`) | HTML | 12316 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/ecole-et-salle-de-classe.html` |
| `lexique-francais/topics/famille-et-proches.html` | French (`fr`) | HTML | 12142 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/famille-et-proches.html` |
| `lexique-francais/topics/fetes-et-evenements.html` | French (`fr`) | HTML | 12194 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/fetes-et-evenements.html` |
| `lexique-francais/topics/grands-nombres-et-chiffres.html` | French (`fr`) | HTML | 11432 B (11.2 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/grands-nombres-et-chiffres.html` |
| `lexique-francais/topics/heure-et-moment-du-jour.html` | French (`fr`) | HTML | 12175 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/heure-et-moment-du-jour.html` |
| `lexique-francais/topics/hobbies-et-loisirs.html` | French (`fr`) | HTML | 12452 B (12.2 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/hobbies-et-loisirs.html` |
| `lexique-francais/topics/internet-et-reseaux-sociaux.html` | French (`fr`) | HTML | 12309 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/internet-et-reseaux-sociaux.html` |
| `lexique-francais/topics/la-ville-et-lieux-publics.html` | French (`fr`) | HTML | 12229 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/la-ville-et-lieux-publics.html` |
| `lexique-francais/topics/maison-et-pieces.html` | French (`fr`) | HTML | 11953 B (11.7 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/maison-et-pieces.html` |
| `lexique-francais/topics/meteo-et-saisons.html` | French (`fr`) | HTML | 12088 B (11.8 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/meteo-et-saisons.html` |
| `lexique-francais/topics/metiers-et-professions.html` | French (`fr`) | HTML | 12900 B (12.6 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/metiers-et-professions.html` |
| `lexique-francais/topics/meubles-et-equipements.html` | French (`fr`) | HTML | 12526 B (12.2 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/meubles-et-equipements.html` |
| `lexique-francais/topics/mots-de-liaison-et-questions.html` | French (`fr`) | HTML | 11913 B (11.6 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/mots-de-liaison-et-questions.html` |
| `lexique-francais/topics/nombres-elementaires.html` | French (`fr`) | HTML | 11964 B (11.7 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/nombres-elementaires.html` |
| `lexique-francais/topics/nourriture-et-aliments.html` | French (`fr`) | HTML | 12669 B (12.4 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/nourriture-et-aliments.html` |
| `lexique-francais/topics/objets-du-quotidien.html` | French (`fr`) | HTML | 12188 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/objets-du-quotidien.html` |
| `lexique-francais/topics/orientations-et-directions.html` | French (`fr`) | HTML | 12409 B (12.1 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/orientations-et-directions.html` |
| `lexique-francais/topics/pharmacie-et-soins.html` | French (`fr`) | HTML | 12250 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/pharmacie-et-soins.html` |
| `lexique-francais/topics/poste-et-services-publics.html` | French (`fr`) | HTML | 12096 B (11.8 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/poste-et-services-publics.html` |
| `lexique-francais/topics/prepositions-essentielles.html` | French (`fr`) | HTML | 12323 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/prepositions-essentielles.html` |
| `lexique-francais/topics/prononciation-et-sons-du-francais.html` | French (`fr`) | HTML | 13166 B (12.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/prononciation-et-sons-du-francais.html` |
| `lexique-francais/topics/routine-quotidienne.html` | French (`fr`) | HTML | 12584 B (12.3 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/routine-quotidienne.html` |
| `lexique-francais/topics/salutations-et-politesse.html` | French (`fr`) | HTML | 12547 B (12.3 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/salutations-et-politesse.html` |
| `lexique-francais/topics/sante-et-corps-medical.html` | French (`fr`) | HTML | 12185 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/sante-et-corps-medical.html` |
| `lexique-francais/topics/se-presenter-et-identite.html` | French (`fr`) | HTML | 12188 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/se-presenter-et-identite.html` |
| `lexique-francais/topics/sentiments-et-emotions.html` | French (`fr`) | HTML | 12274 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/sentiments-et-emotions.html` |
| `lexique-francais/topics/sports-et-activites-physiques.html` | French (`fr`) | HTML | 12097 B (11.8 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/sports-et-activites-physiques.html` |
| `lexique-francais/topics/technologie-et-ordinateur.html` | French (`fr`) | HTML | 12356 B (12.1 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/technologie-et-ordinateur.html` |
| `lexique-francais/topics/telephone-et-communication.html` | French (`fr`) | HTML | 12280 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/telephone-et-communication.html` |
| `lexique-francais/topics/transports-et-deplacements.html` | French (`fr`) | HTML | 12279 B (12.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/transports-et-deplacements.html` |
| `lexique-francais/topics/verbes-a1-essentiels.html` | French (`fr`) | HTML | 12546 B (12.3 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/verbes-a1-essentiels.html` |
| `lexique-francais/topics/vetements-et-accessoires.html` | French (`fr`) | HTML | 12041 B (11.8 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/vetements-et-accessoires.html` |
| `lexique-francais/topics/voyages-et-vacances.html` | French (`fr`) | HTML | 12188 B (11.9 KB) | Topic Manual Module | `manuals/fr/vocabulary/a1/topics/voyages-et-vacances.html` |
| `lexique-francais/assets/app.js` | French (`fr`) | JS | 3821 B (3.7 KB) | JavaScript Application Logic | `manuals/fr/vocabulary/a1/assets/app.js` |
| `lexique-francais/assets/style.css` | French (`fr`) | CSS | 12610 B (12.3 KB) | CSS Stylesheet | `manuals/fr/vocabulary/a1/assets/style.css` |
| `vocabulario-portugues/index.html` | Portuguese (`pt`) | HTML | 3889 B (3.8 KB) | Hub / Section Index | `manuals/pt/vocabulary/a1/index.html` |
| `vocabulario-portugues/modulo-1.html` | Portuguese (`pt`) | HTML | 3074 B (3.0 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/modulo-1.html` |
| `vocabulario-portugues/modulo-2.html` | Portuguese (`pt`) | HTML | 2556 B (2.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/modulo-2.html` |
| `vocabulario-portugues/modulo-3.html` | Portuguese (`pt`) | HTML | 2536 B (2.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/modulo-3.html` |
| `vocabulario-portugues/modulo-4.html` | Portuguese (`pt`) | HTML | 2558 B (2.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/modulo-4.html` |
| `vocabulario-portugues/modulo-5.html` | Portuguese (`pt`) | HTML | 2561 B (2.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/modulo-5.html` |
| `vocabulario-portugues/modulo-6.html` | Portuguese (`pt`) | HTML | 2115 B (2.1 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/modulo-6.html` |
| `vocabulario-portugues/topics/a-casa-e-os-moveis.html` | Portuguese (`pt`) | HTML | 3656 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/a-casa-e-os-moveis.html` |
| `vocabulario-portugues/topics/a-familia.html` | Portuguese (`pt`) | HTML | 3517 B (3.4 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/a-familia.html` |
| `vocabulario-portugues/topics/as-cores.html` | Portuguese (`pt`) | HTML | 3587 B (3.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/as-cores.html` |
| `vocabulario-portugues/topics/bases-de-pronuncia.html` | Portuguese (`pt`) | HTML | 3639 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/bases-de-pronuncia.html` |
| `vocabulario-portugues/topics/comida-e-bebidas.html` | Portuguese (`pt`) | HTML | 3687 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/comida-e-bebidas.html` |
| `vocabulario-portugues/topics/compras-e-dinheiro.html` | Portuguese (`pt`) | HTML | 3630 B (3.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/compras-e-dinheiro.html` |
| `vocabulario-portugues/topics/dados-pessoais.html` | Portuguese (`pt`) | HTML | 3749 B (3.7 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/dados-pessoais.html` |
| `vocabulario-portugues/topics/direcoes-e-lugares.html` | Portuguese (`pt`) | HTML | 3695 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/direcoes-e-lugares.html` |
| `vocabulario-portugues/topics/escola-e-objetos-de-aula.html` | Portuguese (`pt`) | HTML | 3683 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/escola-e-objetos-de-aula.html` |
| `vocabulario-portugues/topics/horas-e-rotina-diaria.html` | Portuguese (`pt`) | HTML | 3673 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/horas-e-rotina-diaria.html` |
| `vocabulario-portugues/topics/o-corpo-humano.html` | Portuguese (`pt`) | HTML | 3691 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/o-corpo-humano.html` |
| `vocabulario-portugues/topics/os-numeros.html` | Portuguese (`pt`) | HTML | 3580 B (3.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/os-numeros.html` |
| `vocabulario-portugues/topics/palavras-de-ligacao-e-perguntas.html` | Portuguese (`pt`) | HTML | 3710 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/palavras-de-ligacao-e-perguntas.html` |
| `vocabulario-portugues/topics/profissoes-e-trabalho.html` | Portuguese (`pt`) | HTML | 3677 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/profissoes-e-trabalho.html` |
| `vocabulario-portugues/topics/refeicoes-e-cozinha.html` | Portuguese (`pt`) | HTML | 3715 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/refeicoes-e-cozinha.html` |
| `vocabulario-portugues/topics/restaurante-e-cafe.html` | Portuguese (`pt`) | HTML | 3643 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/restaurante-e-cafe.html` |
| `vocabulario-portugues/topics/saudacoes-e-apresentacoes.html` | Portuguese (`pt`) | HTML | 3672 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/saudacoes-e-apresentacoes.html` |
| `vocabulario-portugues/topics/saude-e-farmacia.html` | Portuguese (`pt`) | HTML | 3708 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/saude-e-farmacia.html` |
| `vocabulario-portugues/topics/sentimentos-e-emocoes.html` | Portuguese (`pt`) | HTML | 3723 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/sentimentos-e-emocoes.html` |
| `vocabulario-portugues/topics/tecnologia-e-telefone.html` | Portuguese (`pt`) | HTML | 3751 B (3.7 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/tecnologia-e-telefone.html` |
| `vocabulario-portugues/topics/tempo-e-estacoes.html` | Portuguese (`pt`) | HTML | 3627 B (3.5 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/tempo-e-estacoes.html` |
| `vocabulario-portugues/topics/tempo-livre-e-hobbies.html` | Portuguese (`pt`) | HTML | 3640 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/tempo-livre-e-hobbies.html` |
| `vocabulario-portugues/topics/transportes-e-viagens.html` | Portuguese (`pt`) | HTML | 3699 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/transportes-e-viagens.html` |
| `vocabulario-portugues/topics/verbos-principais-a1.html` | Portuguese (`pt`) | HTML | 3911 B (3.8 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/verbos-principais-a1.html` |
| `vocabulario-portugues/topics/vestuario-e-acessorios.html` | Portuguese (`pt`) | HTML | 3699 B (3.6 KB) | Topic Manual Module | `manuals/pt/vocabulary/a1/topics/vestuario-e-acessorios.html` |
| `vocabulario-portugues/assets/app.js` | Portuguese (`pt`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/pt/vocabulary/a1/assets/app.js` |
| `vocabulario-portugues/assets/style.css` | Portuguese (`pt`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/pt/vocabulary/a1/assets/style.css` |
| `tatar-teli-leksikasy/bulek-1.html` | Tatar (`tt`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-1.html` |
| `tatar-teli-leksikasy/bulek-2.html` | Tatar (`tt`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-2.html` |
| `tatar-teli-leksikasy/bulek-3.html` | Tatar (`tt`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-3.html` |
| `tatar-teli-leksikasy/bulek-4.html` | Tatar (`tt`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-4.html` |
| `tatar-teli-leksikasy/bulek-5.html` | Tatar (`tt`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-5.html` |
| `tatar-teli-leksikasy/bulek-6.html` | Tatar (`tt`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-6.html` |
| `tatar-teli-leksikasy/index.html` | Tatar (`tt`) | HTML | 1425 B (1.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/index.html` |
| `tatar-teli-leksikasy/topics/ashamlyklar-hem-eshchelekler.html` | Tatar (`tt`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/ashamlyklar-hem-eshchelekler.html` |
| `tatar-teli-leksikasy/topics/ashlar-hem-ashanu.html` | Tatar (`tt`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/ashlar-hem-ashanu.html` |
| `tatar-teli-leksikasy/topics/aytu-nigeshlere.html` | Tatar (`tt`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/aytu-nigeshlere.html` |
| `tatar-teli-leksikasy/topics/bayleuche-sozler-hem-sorular.html` | Tatar (`tt`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/bayleuche-sozler-hem-sorular.html` |
| `tatar-teli-leksikasy/topics/bush-vakyt-hem-kobbiler.html` | Tatar (`tt`) | HTML | 1565 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/bush-vakyt-hem-kobbiler.html` |
| `tatar-teli-leksikasy/topics/gaila.html` | Tatar (`tt`) | HTML | 1475 B (1.4 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/gaila.html` |
| `tatar-teli-leksikasy/topics/hava-toroshy-hem-el-fasyllary.html` | Tatar (`tt`) | HTML | 1595 B (1.6 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/hava-toroshy-hem-el-fasyllary.html` |
| `tatar-teli-leksikasy/topics/his-kochler-hem-emotsiyalar.html` | Tatar (`tt`) | HTML | 1585 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/his-kochler-hem-emotsiyalar.html` |
| `tatar-teli-leksikasy/topics/honerler-hem-esh.html` | Tatar (`tt`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/honerler-hem-esh.html` |
| `tatar-teli-leksikasy/topics/isenleshuh-hem-tanyshu.html` | Tatar (`tt`) | HTML | 1560 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/isenleshuh-hem-tanyshu.html` |
| `tatar-teli-leksikasy/topics/keshe-bedene.html` | Tatar (`tt`) | HTML | 1510 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/keshe-bedene.html` |
| `tatar-teli-leksikasy/topics/kiem-salym.html` | Tatar (`tt`) | HTML | 1500 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/kiem-salym.html` |
| `tatar-teli-leksikasy/topics/maktap-hem-synyf.html` | Tatar (`tt`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/maktap-hem-synyf.html` |
| `tatar-teli-leksikasy/topics/restoran-hem-kafe.html` | Tatar (`tt`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/restoran-hem-kafe.html` |
| `tatar-teli-leksikasy/topics/salametlek-hem-apteka.html` | Tatar (`tt`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/salametlek-hem-apteka.html` |
| `tatar-teli-leksikasy/topics/sannar.html` | Tatar (`tt`) | HTML | 1480 B (1.4 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/sannar.html` |
| `tatar-teli-leksikasy/topics/satybalular-hem-akcha.html` | Tatar (`tt`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/satybalular-hem-akcha.html` |
| `tatar-teli-leksikasy/topics/shekhsi-maglumatlar.html` | Tatar (`tt`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/shekhsi-maglumatlar.html` |
| `tatar-teli-leksikasy/topics/tekhnologiya-hem-telefon.html` | Tatar (`tt`) | HTML | 1570 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/tekhnologiya-hem-telefon.html` |
| `tatar-teli-leksikasy/topics/tep-figyller-a1.html` | Tatar (`tt`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/tep-figyller-a1.html` |
| `tatar-teli-leksikasy/topics/tosler.html` | Tatar (`tt`) | HTML | 1480 B (1.4 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/tosler.html` |
| `tatar-teli-leksikasy/topics/transport-hem-sayahat.html` | Tatar (`tt`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/transport-hem-sayahat.html` |
| `tatar-teli-leksikasy/topics/vakyt-hem-kondalek-tormysh.html` | Tatar (`tt`) | HTML | 1580 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/vakyt-hem-kondalek-tormysh.html` |
| `tatar-teli-leksikasy/topics/yort-hem-bulemler.html` | Tatar (`tt`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/yort-hem-bulemler.html` |
| `tatar-teli-leksikasy/topics/yunesheshler-hem-urinnar.html` | Tatar (`tt`) | HTML | 1570 B (1.5 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/yunesheshler-hem-urinnar.html` |
| `tatar-teli-leksikasy/assets/app.js` | Tatar (`tt`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/tt/vocabulary/a1/assets/app.js` |
| `tatar-teli-leksikasy/assets/style.css` | Tatar (`tt`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/tt/vocabulary/a1/assets/style.css` |
| `vocabulary-b1/index.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/index.html` |
| `vocabulary-b1/part-1.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-1.html` |
| `vocabulary-b1/part-10.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-10.html` |
| `vocabulary-b1/part-11.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-11.html` |
| `vocabulary-b1/part-2.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-2.html` |
| `vocabulary-b1/part-3.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-3.html` |
| `vocabulary-b1/part-4.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-4.html` |
| `vocabulary-b1/part-5.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-5.html` |
| `vocabulary-b1/part-6.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-6.html` |
| `vocabulary-b1/part-7.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-7.html` |
| `vocabulary-b1/part-8.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-8.html` |
| `vocabulary-b1/part-9.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-9.html` |
| `pt/index.html` | Portuguese (`pt`) | HTML | 4019 B (3.9 KB) | Hub / Section Index | `manuals/pt/index.html` |
| `pt/vocabulary/a2/index.html` | Portuguese (`pt`) | HTML | 2204 B (2.2 KB) | Hub / Section Index | `manuals/pt/vocabulary/a2/index.html` |
| `pt/vocabulary/a2/module-1.html` | Portuguese (`pt`) | HTML | 1966 B (1.9 KB) | Hub / Section Index | `manuals/pt/vocabulary/a2/module-1.html` |
| `pt/vocabulary/a2/module-2.html` | Portuguese (`pt`) | HTML | 1936 B (1.9 KB) | Topic Manual Module | `manuals/pt/vocabulary/a2/module-2.html` |
| `pt/vocabulary/a2/topics/a-rotina-e-as-memorias.html` | Portuguese (`pt`) | HTML | 3744 B (3.7 KB) | Topic Manual Module | `manuals/pt/vocabulary/a2/topics/a-rotina-e-as-memorias.html` |
| `pt/vocabulary/a2/topics/a-saude-e-as-compras.html` | Portuguese (`pt`) | HTML | 3752 B (3.7 KB) | Topic Manual Module | `manuals/pt/vocabulary/a2/topics/a-saude-e-as-compras.html` |
| `pt/vocabulary/a2/topics/as-viagens-e-os-transportes.html` | Portuguese (`pt`) | HTML | 3805 B (3.7 KB) | Topic Manual Module | `manuals/pt/vocabulary/a2/topics/as-viagens-e-os-transportes.html` |
| `pt/vocabulary/a2/topics/o-trabalho-e-as-profissoes.html` | Portuguese (`pt`) | HTML | 3836 B (3.7 KB) | Topic Manual Module | `manuals/pt/vocabulary/a2/topics/o-trabalho-e-as-profissoes.html` |
| `pt/vocabulary/a2/assets/app.js` | Portuguese (`pt`) | JS | 2179 B (2.1 KB) | JavaScript Application Logic | `manuals/pt/vocabulary/a2/assets/app.js` |
| `pt/vocabulary/a2/assets/style.css` | Portuguese (`pt`) | CSS | 6437 B (6.3 KB) | CSS Stylesheet | `manuals/pt/vocabulary/a2/assets/style.css` |
| `pt/grammar/a2/index.html` | Portuguese (`pt`) | HTML | 2630 B (2.6 KB) | Hub / Section Index | `manuals/pt/grammar/a2/index.html` |
| `pt/grammar/a2/part-1.html` | Portuguese (`pt`) | HTML | 2239 B (2.2 KB) | Hub / Section Index | `manuals/pt/grammar/a2/part-1.html` |
| `pt/grammar/a2/part-2.html` | Portuguese (`pt`) | HTML | 2180 B (2.1 KB) | Hub / Section Index | `manuals/pt/grammar/a2/part-2.html` |
| `pt/grammar/a2/part-3.html` | Portuguese (`pt`) | HTML | 2437 B (2.4 KB) | Hub / Section Index | `manuals/pt/grammar/a2/part-3.html` |
| `pt/grammar/a2/topics/comparacao-e-superlativo.html` | Portuguese (`pt`) | HTML | 5008 B (4.9 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/comparacao-e-superlativo.html` |
| `pt/grammar/a2/topics/condicional-simples-cortesia.html` | Portuguese (`pt`) | HTML | 5058 B (4.9 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/condicional-simples-cortesia.html` |
| `pt/grammar/a2/topics/futuro-do-presente-e-ir.html` | Portuguese (`pt`) | HTML | 4921 B (4.8 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/futuro-do-presente-e-ir.html` |
| `pt/grammar/a2/topics/introducao-ao-subjuntivo.html` | Portuguese (`pt`) | HTML | 4735 B (4.6 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/introducao-ao-subjuntivo.html` |
| `pt/grammar/a2/topics/obrigacao-ter-de-dever.html` | Portuguese (`pt`) | HTML | 4934 B (4.8 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/obrigacao-ter-de-dever.html` |
| `pt/grammar/a2/topics/perfeito-vs-imperfeito.html` | Portuguese (`pt`) | HTML | 5047 B (4.9 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/perfeito-vs-imperfeito.html` |
| `pt/grammar/a2/topics/preterito-imperfeito-do-indicativo.html` | Portuguese (`pt`) | HTML | 4918 B (4.8 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/preterito-imperfeito-do-indicativo.html` |
| `pt/grammar/a2/topics/preterito-perfeito-composto.html` | Portuguese (`pt`) | HTML | 5340 B (5.2 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/preterito-perfeito-composto.html` |
| `pt/grammar/a2/topics/pronomes-pessoais-complemento.html` | Portuguese (`pt`) | HTML | 5244 B (5.1 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/pronomes-pessoais-complemento.html` |
| `pt/grammar/a2/topics/se-presente-futuro.html` | Portuguese (`pt`) | HTML | 4920 B (4.8 KB) | Topic Manual Module | `manuals/pt/grammar/a2/topics/se-presente-futuro.html` |
| `pt/grammar/a2/assets/app.js` | Portuguese (`pt`) | JS | 2381 B (2.3 KB) | JavaScript Application Logic | `manuals/pt/grammar/a2/assets/app.js` |
| `pt/grammar/a2/assets/style.css` | Portuguese (`pt`) | CSS | 7805 B (7.6 KB) | CSS Stylesheet | `manuals/pt/grammar/a2/assets/style.css` |
| `hayots-lezvi-kerakanutyun/index.html` | Armenian (`hy`) | HTML | 3681 B (3.6 KB) | Hub / Section Index | `manuals/hy/grammar/a1/index.html` |
| `hayots-lezvi-kerakanutyun/mas-1.html` | Armenian (`hy`) | HTML | 5004 B (4.9 KB) | Topic Manual Module | `manuals/hy/grammar/a1/mas-1.html` |
| `hayots-lezvi-kerakanutyun/mas-2.html` | Armenian (`hy`) | HTML | 3264 B (3.2 KB) | Topic Manual Module | `manuals/hy/grammar/a1/mas-2.html` |
| `hayots-lezvi-kerakanutyun/mas-3.html` | Armenian (`hy`) | HTML | 2763 B (2.7 KB) | Topic Manual Module | `manuals/hy/grammar/a1/mas-3.html` |
| `hayots-lezvi-kerakanutyun/mas-4.html` | Armenian (`hy`) | HTML | 2972 B (2.9 KB) | Topic Manual Module | `manuals/hy/grammar/a1/mas-4.html` |
| `hayots-lezvi-kerakanutyun/topics/andznakan-deranunner.html` | Armenian (`hy`) | HTML | 4353 B (4.3 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/andznakan-deranunner.html` |
| `hayots-lezvi-kerakanutyun/topics/antsyal-zhamanak.html` | Armenian (`hy`) | HTML | 4521 B (4.4 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/antsyal-zhamanak.html` |
| `hayots-lezvi-kerakanutyun/topics/aparni-zhamanak.html` | Armenian (`hy`) | HTML | 4231 B (4.1 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/aparni-zhamanak.html` |
| `hayots-lezvi-kerakanutyun/topics/atsakanner.html` | Armenian (`hy`) | HTML | 4590 B (4.5 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/atsakanner.html` |
| `hayots-lezvi-kerakanutyun/topics/batsarakhan-holov.html` | Armenian (`hy`) | HTML | 4575 B (4.5 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/batsarakhan-holov.html` |
| `hayots-lezvi-kerakanutyun/topics/gortsiakan-holov.html` | Armenian (`hy`) | HTML | 4665 B (4.6 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/gortsiakan-holov.html` |
| `hayots-lezvi-kerakanutyun/topics/goyakan-yev-hoder.html` | Armenian (`hy`) | HTML | 4285 B (4.2 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/goyakan-yev-hoder.html` |
| `hayots-lezvi-kerakanutyun/topics/hamematakan-astichanner.html` | Armenian (`hy`) | HTML | 5017 B (4.9 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/hamematakan-astichanner.html` |
| `hayots-lezvi-kerakanutyun/topics/hartser-yev-hartsakan-barer.html` | Armenian (`hy`) | HTML | 4750 B (4.6 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/hartser-yev-hartsakan-barer.html` |
| `hayots-lezvi-kerakanutyun/topics/haytsakan-holov.html` | Armenian (`hy`) | HTML | 4685 B (4.6 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/haytsakan-holov.html` |
| `hayots-lezvi-kerakanutyun/topics/holovner.html` | Armenian (`hy`) | HTML | 5077 B (5.0 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/holovner.html` |
| `hayots-lezvi-kerakanutyun/topics/ka-chka.html` | Armenian (`hy`) | HTML | 4066 B (4.0 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/ka-chka.html` |
| `hayots-lezvi-kerakanutyun/topics/kaper-yev-nakhdirner.html` | Armenian (`hy`) | HTML | 4851 B (4.7 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/kaper-yev-nakhdirner.html` |
| `hayots-lezvi-kerakanutyun/topics/nakhadasutyan-karutsvaskh.html` | Armenian (`hy`) | HTML | 4643 B (4.5 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/nakhadasutyan-karutsvaskh.html` |
| `hayots-lezvi-kerakanutyun/topics/nergoyakan-holov.html` | Armenian (`hy`) | HTML | 4787 B (4.7 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/nergoyakan-holov.html` |
| `hayots-lezvi-kerakanutyun/topics/nerka-zhamanak.html` | Armenian (`hy`) | HTML | 4694 B (4.6 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/nerka-zhamanak.html` |
| `hayots-lezvi-kerakanutyun/topics/qanakakan-barer.html` | Armenian (`hy`) | HTML | 3999 B (3.9 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/qanakakan-barer.html` |
| `hayots-lezvi-kerakanutyun/topics/serakan-holov.html` | Armenian (`hy`) | HTML | 4743 B (4.6 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/serakan-holov.html` |
| `hayots-lezvi-kerakanutyun/topics/statsakanutyun.html` | Armenian (`hy`) | HTML | 3967 B (3.9 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/statsakanutyun.html` |
| `hayots-lezvi-kerakanutyun/topics/thvakanner-yev-holovner.html` | Armenian (`hy`) | HTML | 4959 B (4.8 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/thvakanner-yev-holovner.html` |
| `hayots-lezvi-kerakanutyun/topics/thvakanner-zham-yev-oror.html` | Armenian (`hy`) | HTML | 4747 B (4.6 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/thvakanner-zham-yev-oror.html` |
| `hayots-lezvi-kerakanutyun/topics/trakan-holov.html` | Armenian (`hy`) | HTML | 4626 B (4.5 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/trakan-holov.html` |
| `hayots-lezvi-kerakanutyun/topics/tsutsakan-deranunner.html` | Armenian (`hy`) | HTML | 4451 B (4.3 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/tsutsakan-deranunner.html` |
| `hayots-lezvi-kerakanutyun/topics/ughghakan-holov.html` | Armenian (`hy`) | HTML | 4842 B (4.7 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/ughghakan-holov.html` |
| `hayots-lezvi-kerakanutyun/topics/zhkhtum.html` | Armenian (`hy`) | HTML | 4818 B (4.7 KB) | Topic Manual Module | `manuals/hy/grammar/a1/topics/zhkhtum.html` |
| `hayots-lezvi-kerakanutyun/assets/app.js` | Armenian (`hy`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/hy/grammar/a1/assets/app.js` |
| `hayots-lezvi-kerakanutyun/assets/style.css` | Armenian (`hy`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/hy/grammar/a1/assets/style.css` |
| `de/index.html` | German (`de`) | HTML | 6701 B (6.5 KB) | Hub / Section Index | `manuals/de/index.html` |
| `communication-manual/index.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/index.html` |
| `communication-manual/part-0.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Topic Manual Module | `manuals/en/communication/a1/part-0.html` |
| `communication-manual/part-1.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-1.html` |
| `communication-manual/part-10.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-10.html` |
| `communication-manual/part-2.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-2.html` |
| `communication-manual/part-3.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-3.html` |
| `communication-manual/part-4.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-4.html` |
| `communication-manual/part-5.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-5.html` |
| `communication-manual/part-6.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-6.html` |
| `communication-manual/part-7.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-7.html` |
| `communication-manual/part-8.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-8.html` |
| `communication-manual/part-9.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-9.html` |
| `communication-manual/assets/app.js` | English (`en`) | JS | 1515 B (1.5 KB) | JavaScript Application Logic | `manuals/en/communication/a1/assets/app.js` |
| `communication-manual/assets/style.css` | English (`en`) | CSS | 7868 B (7.7 KB) | CSS Stylesheet | `manuals/en/communication/a1/assets/style.css` |
| `ru/Russian_A0-A1_Grammar_Manual_rebuilt.pdf` | Russian (`ru`) | PDF | 773958 B (755.8 KB) | PDF Cheat Sheet / Reference Document | `manuals/ru/Russian_A0-A1_Grammar_Manual_rebuilt.pdf` |
| `ru/grammar/index.html` | Russian (`ru`) | HTML | 186 B (0.2 KB) | Hub / Section Index | `manuals/ru/grammar/index.html` |
| `ru/grammar/a1/index.html` | Russian (`ru`) | HTML | 2148 B (2.1 KB) | Hub / Section Index | `manuals/ru/grammar/a1/index.html` |
| `ru/grammar/a1/part-1.html` | Russian (`ru`) | HTML | 2935 B (2.9 KB) | Hub / Section Index | `manuals/ru/grammar/a1/part-1.html` |
| `ru/grammar/a1/topics/noun-gender.html` | Russian (`ru`) | HTML | 9969 B (9.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/noun-gender.html` |
| `ru/grammar/a1/topics/part-1-building-blocks.html` | Russian (`ru`) | HTML | 9650 B (9.4 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/part-1-building-blocks.html` |
| `ru/grammar/a1/topics/to-be.html` | Russian (`ru`) | HTML | 11443 B (11.2 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/to-be.html` |
| `ru/grammar/a1/assets/app.js` | Russian (`ru`) | JS | 857 B (0.8 KB) | JavaScript Application Logic | `manuals/ru/grammar/a1/assets/app.js` |
| `ru/grammar/a1/assets/style.css` | Russian (`ru`) | CSS | 9233 B (9.0 KB) | CSS Stylesheet | `manuals/ru/grammar/a1/assets/style.css` |
| `vocabulary-a2/index.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/index.html` |
| `vocabulary-a2/part-1.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-1.html` |
| `vocabulary-a2/part-10.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-10.html` |
| `vocabulary-a2/part-11.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-11.html` |
| `vocabulary-a2/part-12.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-12.html` |
| `vocabulary-a2/part-13.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-13.html` |
| `vocabulary-a2/part-14.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-14.html` |
| `vocabulary-a2/part-15.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/part-15.html` |
| `vocabulary-a2/part-16.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/part-16.html` |
| `vocabulary-a2/part-17.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/part-17.html` |
| `vocabulary-a2/part-2.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-2.html` |
| `vocabulary-a2/part-3.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-3.html` |
| `vocabulary-a2/part-4.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-4.html` |
| `vocabulary-a2/part-5.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-5.html` |
| `vocabulary-a2/part-6.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-6.html` |
| `vocabulary-a2/part-7.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-7.html` |
| `vocabulary-a2/part-8.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-8.html` |
| `vocabulary-a2/part-9.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-9.html` |
| `vocabulary-a2/topics/culture-society-and-celebrations.html` | English (`en`) | HTML | 1625 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/culture-society-and-celebrations.html` |
| `vocabulary-a2/topics/daily-life-free-time-and-entertainment.html` | English (`en`) | HTML | 1655 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/daily-life-free-time-and-entertainment.html` |
| `vocabulary-a2/topics/describing-change-and-comparison.html` | English (`en`) | HTML | 1625 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/describing-change-and-comparison.html` |
| `vocabulary-a2/topics/emergencies-and-accidents.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/emergencies-and-accidents.html` |
| `vocabulary-a2/topics/encyclopedic-a2-vocabulary-reference-tables.html` | English (`en`) | HTML | 1680 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/encyclopedic-a2-vocabulary-reference-tables.html` |
| `vocabulary-a2/topics/expanded-transport-and-driving.html` | English (`en`) | HTML | 1615 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/expanded-transport-and-driving.html` |
| `vocabulary-a2/topics/food-health-and-the-body.html` | English (`en`) | HTML | 1585 B (1.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/food-health-and-the-body.html` |
| `vocabulary-a2/topics/functional-english-masterclass.html` | English (`en`) | HTML | 1615 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/functional-english-masterclass.html` |
| `vocabulary-a2/topics/home-neighbourhood-and-environment.html` | English (`en`) | HTML | 1635 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/home-neighbourhood-and-environment.html` |
| `vocabulary-a2/topics/master-collocations-dictionary.html` | English (`en`) | HTML | 1615 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/master-collocations-dictionary.html` |
| `vocabulary-a2/topics/opinions-feelings-and-social-language.html` | English (`en`) | HTML | 1650 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/opinions-feelings-and-social-language.html` |
| `vocabulary-a2/topics/people-relationships-and-life-stages.html` | English (`en`) | HTML | 1645 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/people-relationships-and-life-stages.html` |
| `vocabulary-a2/topics/personal-development-and-goals.html` | English (`en`) | HTML | 1615 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/personal-development-and-goals.html` |
| `vocabulary-a2/topics/school-work-and-technology.html` | English (`en`) | HTML | 1595 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/school-work-and-technology.html` |
| `vocabulary-a2/topics/shopping-and-services.html` | English (`en`) | HTML | 1570 B (1.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/shopping-and-services.html` |
| `vocabulary-a2/topics/travel-and-getting-around.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/travel-and-getting-around.html` |
| `vocabulary-a2/topics/vocabulary-building-toolkit.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/vocabulary-building-toolkit.html` |
| `gramatica-espanola/capitulo-1.html` | Spanish (`es`) | HTML | 2809 B (2.7 KB) | Topic Manual Module | `manuals/es/grammar/a1/capitulo-1.html` |
| `gramatica-espanola/capitulo-2.html` | Spanish (`es`) | HTML | 3286 B (3.2 KB) | Topic Manual Module | `manuals/es/grammar/a1/capitulo-2.html` |
| `gramatica-espanola/capitulo-3.html` | Spanish (`es`) | HTML | 2604 B (2.5 KB) | Topic Manual Module | `manuals/es/grammar/a1/capitulo-3.html` |
| `gramatica-espanola/capitulo-4.html` | Spanish (`es`) | HTML | 2360 B (2.3 KB) | Topic Manual Module | `manuals/es/grammar/a1/capitulo-4.html` |
| `gramatica-espanola/capitulo-5.html` | Spanish (`es`) | HTML | 2177 B (2.1 KB) | Topic Manual Module | `manuals/es/grammar/a1/capitulo-5.html` |
| `gramatica-espanola/index.html` | Spanish (`es`) | HTML | 3654 B (3.6 KB) | Hub / Section Index | `manuals/es/grammar/a1/index.html` |
| `gramatica-espanola/topics/adverbios-frecuencia-modo.html` | Spanish (`es`) | HTML | 4100 B (4.0 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/adverbios-frecuencia-modo.html` |
| `gramatica-espanola/topics/articulos-definidos.html` | Spanish (`es`) | HTML | 4151 B (4.1 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/articulos-definidos.html` |
| `gramatica-espanola/topics/comparativo-superlativo.html` | Spanish (`es`) | HTML | 4060 B (4.0 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/comparativo-superlativo.html` |
| `gramatica-espanola/topics/conjunciones-basicas.html` | Spanish (`es`) | HTML | 4334 B (4.2 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/conjunciones-basicas.html` |
| `gramatica-espanola/topics/demostrativos.html` | Spanish (`es`) | HTML | 3862 B (3.8 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/demostrativos.html` |
| `gramatica-espanola/topics/genero-sustantivos.html` | Spanish (`es`) | HTML | 4262 B (4.2 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/genero-sustantivos.html` |
| `gramatica-espanola/topics/hay-vs-esta.html` | Spanish (`es`) | HTML | 3985 B (3.9 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/hay-vs-esta.html` |
| `gramatica-espanola/topics/imperativo.html` | Spanish (`es`) | HTML | 3900 B (3.8 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/imperativo.html` |
| `gramatica-espanola/topics/interrogativos.html` | Spanish (`es`) | HTML | 4121 B (4.0 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/interrogativos.html` |
| `gramatica-espanola/topics/negacion.html` | Spanish (`es`) | HTML | 3993 B (3.9 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/negacion.html` |
| `gramatica-espanola/topics/numeros-fecha-hora.html` | Spanish (`es`) | HTML | 4457 B (4.4 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/numeros-fecha-hora.html` |
| `gramatica-espanola/topics/plural-sustantivos.html` | Spanish (`es`) | HTML | 4192 B (4.1 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/plural-sustantivos.html` |
| `gramatica-espanola/topics/posesivos.html` | Spanish (`es`) | HTML | 4642 B (4.5 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/posesivos.html` |
| `gramatica-espanola/topics/preposiciones-lugar.html` | Spanish (`es`) | HTML | 4172 B (4.1 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/preposiciones-lugar.html` |
| `gramatica-espanola/topics/preposiciones-tiempo.html` | Spanish (`es`) | HTML | 4028 B (3.9 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/preposiciones-tiempo.html` |
| `gramatica-espanola/topics/presente-indicativo.html` | Spanish (`es`) | HTML | 3983 B (3.9 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/presente-indicativo.html` |
| `gramatica-espanola/topics/preterito-indefinido-vs-perfecto.html` | Spanish (`es`) | HTML | 4095 B (4.0 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/preterito-indefinido-vs-perfecto.html` |
| `gramatica-espanola/topics/pretérito-perfecto.html` | Spanish (`es`) | HTML | 4163 B (4.1 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/pretérito-perfecto.html` |
| `gramatica-espanola/topics/pronombres-personales.html` | Spanish (`es`) | HTML | 4171 B (4.1 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/pronombres-personales.html` |
| `gramatica-espanola/topics/ser-vs-estar.html` | Spanish (`es`) | HTML | 4101 B (4.0 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/ser-vs-estar.html` |
| `gramatica-espanola/topics/verbos-reflexivos.html` | Spanish (`es`) | HTML | 4054 B (4.0 KB) | Topic Manual Module | `manuals/es/grammar/a1/topics/verbos-reflexivos.html` |
| `gramatica-espanola/assets/app.js` | Spanish (`es`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/es/grammar/a1/assets/app.js` |
| `gramatica-espanola/assets/style.css` | Spanish (`es`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/es/grammar/a1/assets/style.css` |
| `grammaire-francaise/domaine-1-complet.html` | French (`fr`) | HTML | 74173 B (72.4 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-1-complet.html` |
| `grammaire-francaise/domaine-1.html` | French (`fr`) | HTML | 5560 B (5.4 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-1.html` |
| `grammaire-francaise/domaine-2-complet.html` | French (`fr`) | HTML | 189506 B (185.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-2-complet.html` |
| `grammaire-francaise/domaine-2.html` | French (`fr`) | HTML | 11064 B (10.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-2.html` |
| `grammaire-francaise/domaine-3-complet.html` | French (`fr`) | HTML | 50414 B (49.2 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-3-complet.html` |
| `grammaire-francaise/domaine-3.html` | French (`fr`) | HTML | 4697 B (4.6 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-3.html` |
| `grammaire-francaise/domaine-4-complet.html` | French (`fr`) | HTML | 52293 B (51.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-4-complet.html` |
| `grammaire-francaise/domaine-4.html` | French (`fr`) | HTML | 4633 B (4.5 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-4.html` |
| `grammaire-francaise/domaine-5-complet.html` | French (`fr`) | HTML | 36688 B (35.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-5-complet.html` |
| `grammaire-francaise/domaine-5.html` | French (`fr`) | HTML | 3851 B (3.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/domaine-5.html` |
| `grammaire-francaise/index.html` | French (`fr`) | HTML | 5913 B (5.8 KB) | Hub / Section Index | `manuals/fr/grammar/a1/index.html` |
| `grammaire-francaise/topics/a-qui-de-qui.html` | French (`fr`) | HTML | 7803 B (7.6 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/a-qui-de-qui.html` |
| `grammaire-francaise/topics/accord-des-adjectifs.html` | French (`fr`) | HTML | 8295 B (8.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/accord-des-adjectifs.html` |
| `grammaire-francaise/topics/adjectifs-position.html` | French (`fr`) | HTML | 7946 B (7.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/adjectifs-position.html` |
| `grammaire-francaise/topics/adjectifs-possessifs.html` | French (`fr`) | HTML | 7961 B (7.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/adjectifs-possessifs.html` |
| `grammaire-francaise/topics/adverbes-frequence.html` | French (`fr`) | HTML | 8182 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/adverbes-frequence.html` |
| `grammaire-francaise/topics/adverbes-maniere.html` | French (`fr`) | HTML | 7139 B (7.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/adverbes-maniere.html` |
| `grammaire-francaise/topics/aimer-adorer-detester.html` | French (`fr`) | HTML | 7096 B (6.9 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/aimer-adorer-detester.html` |
| `grammaire-francaise/topics/aller.html` | French (`fr`) | HTML | 7376 B (7.2 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/aller.html` |
| `grammaire-francaise/topics/articles-partitifs.html` | French (`fr`) | HTML | 8154 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/articles-partitifs.html` |
| `grammaire-francaise/topics/articles.html` | French (`fr`) | HTML | 7868 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/articles.html` |
| `grammaire-francaise/topics/avoir.html` | French (`fr`) | HTML | 7890 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/avoir.html` |
| `grammaire-francaise/topics/beaucoup-un-peu-quelques.html` | French (`fr`) | HTML | 7484 B (7.3 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/beaucoup-un-peu-quelques.html` |
| `grammaire-francaise/topics/ce-cet-cette-ces.html` | French (`fr`) | HTML | 7411 B (7.2 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/ce-cet-cette-ces.html` |
| `grammaire-francaise/topics/cest-vs-il-est.html` | French (`fr`) | HTML | 8153 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/cest-vs-il-est.html` |
| `grammaire-francaise/topics/cod-ou-coi.html` | French (`fr`) | HTML | 7903 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/cod-ou-coi.html` |
| `grammaire-francaise/topics/comparatif.html` | French (`fr`) | HTML | 8044 B (7.9 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/comparatif.html` |
| `grammaire-francaise/topics/comptables-indenombrables.html` | French (`fr`) | HTML | 7260 B (7.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/comptables-indenombrables.html` |
| `grammaire-francaise/topics/conjonctions.html` | French (`fr`) | HTML | 6804 B (6.6 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/conjonctions.html` |
| `grammaire-francaise/topics/devoir.html` | French (`fr`) | HTML | 7213 B (7.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/devoir.html` |
| `grammaire-francaise/topics/etre.html` | French (`fr`) | HTML | 8260 B (8.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/etre.html` |
| `grammaire-francaise/topics/francais-monde-1.html` | French (`fr`) | HTML | 8026 B (7.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/francais-monde-1.html` |
| `grammaire-francaise/topics/francais-monde-2.html` | French (`fr`) | HTML | 7856 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/francais-monde-2.html` |
| `grammaire-francaise/topics/futur-proche.html` | French (`fr`) | HTML | 8204 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/futur-proche.html` |
| `grammaire-francaise/topics/futur-simple.html` | French (`fr`) | HTML | 7845 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/futur-simple.html` |
| `grammaire-francaise/topics/genre-des-noms-1.html` | French (`fr`) | HTML | 8944 B (8.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/genre-des-noms-1.html` |
| `grammaire-francaise/topics/genre-des-noms-2.html` | French (`fr`) | HTML | 7774 B (7.6 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/genre-des-noms-2.html` |
| `grammaire-francaise/topics/heure.html` | French (`fr`) | HTML | 7074 B (6.9 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/heure.html` |
| `grammaire-francaise/topics/il-impersonnel.html` | French (`fr`) | HTML | 7985 B (7.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/il-impersonnel.html` |
| `grammaire-francaise/topics/il-y-a.html` | French (`fr`) | HTML | 7630 B (7.5 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/il-y-a.html` |
| `grammaire-francaise/topics/imparfait-vs-passe-compose.html` | French (`fr`) | HTML | 8764 B (8.6 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/imparfait-vs-passe-compose.html` |
| `grammaire-francaise/topics/imparfait.html` | French (`fr`) | HTML | 8312 B (8.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/imparfait.html` |
| `grammaire-francaise/topics/imperatif.html` | French (`fr`) | HTML | 7491 B (7.3 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/imperatif.html` |
| `grammaire-francaise/topics/intensificateurs.html` | French (`fr`) | HTML | 7690 B (7.5 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/intensificateurs.html` |
| `grammaire-francaise/topics/je-voudrais.html` | French (`fr`) | HTML | 7223 B (7.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/je-voudrais.html` |
| `grammaire-francaise/topics/les-pronoms.html` | French (`fr`) | HTML | 9632 B (9.4 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/les-pronoms.html` |
| `grammaire-francaise/topics/mots-interrogatifs.html` | French (`fr`) | HTML | 7620 B (7.4 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/mots-interrogatifs.html` |
| `grammaire-francaise/topics/negation.html` | French (`fr`) | HTML | 8302 B (8.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/negation.html` |
| `grammaire-francaise/topics/nombres-jours-mois.html` | French (`fr`) | HTML | 7927 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/nombres-jours-mois.html` |
| `grammaire-francaise/topics/ordre-des-mots.html` | French (`fr`) | HTML | 8603 B (8.4 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/ordre-des-mots.html` |
| `grammaire-francaise/topics/passe-compose-avoir.html` | French (`fr`) | HTML | 8517 B (8.3 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/passe-compose-avoir.html` |
| `grammaire-francaise/topics/passe-compose-etre-1.html` | French (`fr`) | HTML | 8210 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/passe-compose-etre-1.html` |
| `grammaire-francaise/topics/passe-compose-etre-2.html` | French (`fr`) | HTML | 8151 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/passe-compose-etre-2.html` |
| `grammaire-francaise/topics/passe-recent.html` | French (`fr`) | HTML | 8104 B (7.9 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/passe-recent.html` |
| `grammaire-francaise/topics/pluriel-des-noms.html` | French (`fr`) | HTML | 7610 B (7.4 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/pluriel-des-noms.html` |
| `grammaire-francaise/topics/poser-des-questions.html` | French (`fr`) | HTML | 7808 B (7.6 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/poser-des-questions.html` |
| `grammaire-francaise/topics/pouvoir-vs-savoir.html` | French (`fr`) | HTML | 8347 B (8.2 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/pouvoir-vs-savoir.html` |
| `grammaire-francaise/topics/prepositions-lieu-1.html` | French (`fr`) | HTML | 9308 B (9.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/prepositions-lieu-1.html` |
| `grammaire-francaise/topics/prepositions-lieu-2.html` | French (`fr`) | HTML | 7949 B (7.8 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/prepositions-lieu-2.html` |
| `grammaire-francaise/topics/prepositions-pays-villes.html` | French (`fr`) | HTML | 8162 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/prepositions-pays-villes.html` |
| `grammaire-francaise/topics/prepositions-temps.html` | French (`fr`) | HTML | 7849 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/prepositions-temps.html` |
| `grammaire-francaise/topics/pronoms-cod.html` | French (`fr`) | HTML | 8403 B (8.2 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/pronoms-cod.html` |
| `grammaire-francaise/topics/pronoms-coi.html` | French (`fr`) | HTML | 7846 B (7.7 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/pronoms-coi.html` |
| `grammaire-francaise/topics/superlatif.html` | French (`fr`) | HTML | 7227 B (7.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/superlatif.html` |
| `grammaire-francaise/topics/tous-les-temps.html` | French (`fr`) | HTML | 8161 B (8.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/tous-les-temps.html` |
| `grammaire-francaise/topics/verbes-er.html` | French (`fr`) | HTML | 8129 B (7.9 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/verbes-er.html` |
| `grammaire-francaise/topics/verbes-ir.html` | French (`fr`) | HTML | 7580 B (7.4 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/verbes-ir.html` |
| `grammaire-francaise/topics/verbes-irreguliers-1.html` | French (`fr`) | HTML | 9100 B (8.9 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/verbes-irreguliers-1.html` |
| `grammaire-francaise/topics/verbes-irreguliers-2.html` | French (`fr`) | HTML | 9137 B (8.9 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/verbes-irreguliers-2.html` |
| `grammaire-francaise/topics/verbes-irreguliers-3.html` | French (`fr`) | HTML | 8262 B (8.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/verbes-irreguliers-3.html` |
| `grammaire-francaise/topics/verbes-pronominaux.html` | French (`fr`) | HTML | 7811 B (7.6 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/verbes-pronominaux.html` |
| `grammaire-francaise/topics/verbes-re.html` | French (`fr`) | HTML | 7515 B (7.3 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/verbes-re.html` |
| `grammaire-francaise/topics/vouloir-infinitif.html` | French (`fr`) | HTML | 7131 B (7.0 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/vouloir-infinitif.html` |
| `grammaire-francaise/assets/app.js` | French (`fr`) | JS | 6325 B (6.2 KB) | JavaScript Application Logic | `manuals/fr/grammar/a1/assets/app.js` |
| `grammaire-francaise/assets/style.css` | French (`fr`) | CSS | 24410 B (23.8 KB) | CSS Stylesheet | `manuals/fr/grammar/a1/assets/style.css` |
| `vocabulary-manual/index.html` | English (`en`) | HTML | 290 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/index.html` |
| `vocabulary-manual/part-0.html` | English (`en`) | HTML | 3276 B (3.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/part-0.html` |
| `vocabulary-manual/part-1.html` | English (`en`) | HTML | 294 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-1.html` |
| `vocabulary-manual/part-10.html` | English (`en`) | HTML | 300 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-10.html` |
| `vocabulary-manual/part-11.html` | English (`en`) | HTML | 2839 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-11.html` |
| `vocabulary-manual/part-12.html` | English (`en`) | HTML | 3107 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-12.html` |
| `vocabulary-manual/part-13.html` | English (`en`) | HTML | 4282 B (4.2 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-13.html` |
| `vocabulary-manual/part-14.html` | English (`en`) | HTML | 4601 B (4.5 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-14.html` |
| `vocabulary-manual/part-2.html` | English (`en`) | HTML | 295 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-2.html` |
| `vocabulary-manual/part-3.html` | English (`en`) | HTML | 288 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-3.html` |
| `vocabulary-manual/part-4.html` | English (`en`) | HTML | 290 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-4.html` |
| `vocabulary-manual/part-5.html` | English (`en`) | HTML | 296 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-5.html` |
| `vocabulary-manual/part-6.html` | English (`en`) | HTML | 290 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-6.html` |
| `vocabulary-manual/part-7.html` | English (`en`) | HTML | 291 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-7.html` |
| `vocabulary-manual/part-8.html` | English (`en`) | HTML | 291 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-8.html` |
| `vocabulary-manual/part-9.html` | English (`en`) | HTML | 291 B (0.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-9.html` |
| `vocabulary-manual/topics/animals.html` | English (`en`) | HTML | 4979 B (4.9 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/animals.html` |
| `vocabulary-manual/topics/asking-for-help-and-clarification.html` | English (`en`) | HTML | 5468 B (5.3 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/asking-for-help-and-clarification.html` |
| `vocabulary-manual/topics/at-a-restaurant-cafe.html` | English (`en`) | HTML | 6547 B (6.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/at-a-restaurant-cafe.html` |
| `vocabulary-manual/topics/at-the-doctors-pharmacy.html` | English (`en`) | HTML | 5820 B (5.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/at-the-doctors-pharmacy.html` |
| `vocabulary-manual/topics/at-work.html` | English (`en`) | HTML | 4692 B (4.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/at-work.html` |
| `vocabulary-manual/topics/bathroom-and-personal-hygiene.html` | English (`en`) | HTML | 6369 B (6.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/bathroom-and-personal-hygiene.html` |
| `vocabulary-manual/topics/bigger-numbers.html` | English (`en`) | HTML | 5184 B (5.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/bigger-numbers.html` |
| `vocabulary-manual/topics/borrow-vs-lend.html` | English (`en`) | HTML | 4927 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/borrow-vs-lend.html` |
| `vocabulary-manual/topics/bring-vs-take.html` | English (`en`) | HTML | 4897 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/bring-vs-take.html` |
| `vocabulary-manual/topics/classroom-and-challenge-instructions.html` | English (`en`) | HTML | 5284 B (5.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/classroom-and-challenge-instructions.html` |
| `vocabulary-manual/topics/classroom-objects-and-language.html` | English (`en`) | HTML | 4986 B (4.9 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/classroom-objects-and-language.html` |
| `vocabulary-manual/topics/clothes-and-accessories.html` | English (`en`) | HTML | 7700 B (7.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/clothes-and-accessories.html` |
| `vocabulary-manual/topics/colours.html` | English (`en`) | HTML | 5948 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/colours.html` |
| `vocabulary-manual/topics/common-adjectives-and-opposites.html` | English (`en`) | HTML | 6605 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/common-adjectives-and-opposites.html` |
| `vocabulary-manual/topics/containers-and-quantities.html` | English (`en`) | HTML | 6326 B (6.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/containers-and-quantities.html` |
| `vocabulary-manual/topics/core-a1-verbs.html` | English (`en`) | HTML | 5893 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/core-a1-verbs.html` |
| `vocabulary-manual/topics/countries-nationalities-languages.html` | English (`en`) | HTML | 5671 B (5.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/countries-nationalities-languages.html` |
| `vocabulary-manual/topics/daily-routines.html` | English (`en`) | HTML | 7080 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/daily-routines.html` |
| `vocabulary-manual/topics/describing-a-word-you-dont-know.html` | English (`en`) | HTML | 5766 B (5.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/describing-a-word-you-dont-know.html` |
| `vocabulary-manual/topics/describing-peoples-character.html` | English (`en`) | HTML | 5296 B (5.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/describing-peoples-character.html` |
| `vocabulary-manual/topics/directions-and-location.html` | English (`en`) | HTML | 7677 B (7.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/directions-and-location.html` |
| `vocabulary-manual/topics/drinks.html` | English (`en`) | HTML | 5827 B (5.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/drinks.html` |
| `vocabulary-manual/topics/emergency-and-safety-phrases.html` | English (`en`) | HTML | 4790 B (4.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/emergency-and-safety-phrases.html` |
| `vocabulary-manual/topics/entertainment.html` | English (`en`) | HTML | 4900 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/entertainment.html` |
| `vocabulary-manual/topics/extra-time-expressions.html` | English (`en`) | HTML | 5786 B (5.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/extra-time-expressions.html` |
| `vocabulary-manual/topics/family-and-relationships.html` | English (`en`) | HTML | 8945 B (8.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/family-and-relationships.html` |
| `vocabulary-manual/topics/feelings-and-emotions.html` | English (`en`) | HTML | 5524 B (5.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/feelings-and-emotions.html` |
| `vocabulary-manual/topics/food-items.html` | English (`en`) | HTML | 9526 B (9.3 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/food-items.html` |
| `vocabulary-manual/topics/furniture-and-household-objects.html` | English (`en`) | HTML | 6855 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/furniture-and-household-objects.html` |
| `vocabulary-manual/topics/greetings-and-introductions.html` | English (`en`) | HTML | 5547 B (5.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/greetings-and-introductions.html` |
| `vocabulary-manual/topics/health-and-illness.html` | English (`en`) | HTML | 6601 B (6.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/health-and-illness.html` |
| `vocabulary-manual/topics/hear-vs-listen-to.html` | English (`en`) | HTML | 4913 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/hear-vs-listen-to.html` |
| `vocabulary-manual/topics/hobbies-and-sports.html` | English (`en`) | HTML | 5221 B (5.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/hobbies-and-sports.html` |
| `vocabulary-manual/topics/household-appliances.html` | English (`en`) | HTML | 7108 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/household-appliances.html` |
| `vocabulary-manual/topics/household-chores.html` | English (`en`) | HTML | 5911 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/household-chores.html` |
| `vocabulary-manual/topics/how-this-manual-works.html` | English (`en`) | HTML | 5288 B (5.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/how-this-manual-works.html` |
| `vocabulary-manual/topics/indefinite-pronouns.html` | English (`en`) | HTML | 4916 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/indefinite-pronouns.html` |
| `vocabulary-manual/topics/invitations-and-suggestions.html` | English (`en`) | HTML | 4980 B (4.9 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/invitations-and-suggestions.html` |
| `vocabulary-manual/topics/jobs-and-occupations.html` | English (`en`) | HTML | 7488 B (7.3 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/jobs-and-occupations.html` |
| `vocabulary-manual/topics/kitchen-items-and-tableware.html` | English (`en`) | HTML | 5907 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/kitchen-items-and-tableware.html` |
| `vocabulary-manual/topics/linking-words.html` | English (`en`) | HTML | 4926 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/linking-words.html` |
| `vocabulary-manual/topics/make-vs-do.html` | English (`en`) | HTML | 5244 B (5.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/make-vs-do.html` |
| `vocabulary-manual/topics/meals-and-cooking-verbs.html` | English (`en`) | HTML | 5958 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/meals-and-cooking-verbs.html` |
| `vocabulary-manual/topics/means-of-transport.html` | English (`en`) | HTML | 6251 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/means-of-transport.html` |
| `vocabulary-manual/topics/more-everyday-verbs.html` | English (`en`) | HTML | 5906 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/more-everyday-verbs.html` |
| `vocabulary-manual/topics/nature-and-outdoors.html` | English (`en`) | HTML | 5188 B (5.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/nature-and-outdoors.html` |
| `vocabulary-manual/topics/obligation-and-advice.html` | English (`en`) | HTML | 4890 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/obligation-and-advice.html` |
| `vocabulary-manual/topics/on-the-phone.html` | English (`en`) | HTML | 4838 B (4.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/on-the-phone.html` |
| `vocabulary-manual/topics/other-common-prepositions.html` | English (`en`) | HTML | 4759 B (4.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/other-common-prepositions.html` |
| `vocabulary-manual/topics/parts-of-the-body.html` | English (`en`) | HTML | 7315 B (7.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/parts-of-the-body.html` |
| `vocabulary-manual/topics/personal-belongings.html` | English (`en`) | HTML | 6277 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/personal-belongings.html` |
| `vocabulary-manual/topics/personal-details.html` | English (`en`) | HTML | 7707 B (7.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/personal-details.html` |
| `vocabulary-manual/topics/places-in-town.html` | English (`en`) | HTML | 7807 B (7.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/places-in-town.html` |
| `vocabulary-manual/topics/politeness-and-everyday-phrases.html` | English (`en`) | HTML | 5153 B (5.0 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/politeness-and-everyday-phrases.html` |
| `vocabulary-manual/topics/post-office-and-bank.html` | English (`en`) | HTML | 5643 B (5.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/post-office-and-bank.html` |
| `vocabulary-manual/topics/prepositions-of-movement.html` | English (`en`) | HTML | 5766 B (5.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/prepositions-of-movement.html` |
| `vocabulary-manual/topics/pronunciation-basics.html` | English (`en`) | HTML | 6160 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/pronunciation-basics.html` |
| `vocabulary-manual/topics/reacting-in-conversation.html` | English (`en`) | HTML | 4949 B (4.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/reacting-in-conversation.html` |
| `vocabulary-manual/topics/rooms-of-the-house.html` | English (`en`) | HTML | 6349 B (6.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/rooms-of-the-house.html` |
| `vocabulary-manual/topics/say-vs-tell-vs-speak-vs-talk.html` | English (`en`) | HTML | 5660 B (5.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/say-vs-tell-vs-speak-vs-talk.html` |
| `vocabulary-manual/topics/school-subjects.html` | English (`en`) | HTML | 4728 B (4.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/school-subjects.html` |
| `vocabulary-manual/topics/see-vs-watch-vs-look-at.html` | English (`en`) | HTML | 5147 B (5.0 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/see-vs-watch-vs-look-at.html` |
| `vocabulary-manual/topics/shapes-and-sizes.html` | English (`en`) | HTML | 5884 B (5.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/shapes-and-sizes.html` |
| `vocabulary-manual/topics/shopping-and-money.html` | English (`en`) | HTML | 8785 B (8.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/shopping-and-money.html` |
| `vocabulary-manual/topics/signs-and-notices.html` | English (`en`) | HTML | 6149 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/signs-and-notices.html` |
| `vocabulary-manual/topics/technology-and-communication.html` | English (`en`) | HTML | 5155 B (5.0 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/technology-and-communication.html` |
| `vocabulary-manual/topics/the-alphabet.html` | English (`en`) | HTML | 5791 B (5.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/the-alphabet.html` |
| `vocabulary-manual/topics/travel-phrases.html` | English (`en`) | HTML | 5931 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/travel-phrases.html` |
| `vocabulary-manual/topics/weather.html` | English (`en`) | HTML | 6917 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/weather.html` |
| `vocabulary-manual/assets/app.js` | English (`en`) | JS | 5223 B (5.1 KB) | JavaScript Application Logic | `manuals/en/vocabulary/a1/assets/app.js` |
| `vocabulary-manual/assets/style.css` | English (`en`) | CSS | 20988 B (20.5 KB) | CSS Stylesheet | `manuals/en/vocabulary/a1/assets/style.css` |
| `grammar-c1/index.html` | English (`en`) | HTML | 1425 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/c1/index.html` |
| `grammar-c1/part-1.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/c1/part-1.html` |
| `grammar-c1/part-2.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/c1/part-2.html` |
| `grammar-c1/topics/advanced-hedging-and-academic-stance-devices.html` | English (`en`) | HTML | 1670 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/advanced-hedging-and-academic-stance-devices.html` |
| `grammar-c1/topics/advanced-punctuation-mechanics.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/advanced-punctuation-mechanics.html` |
| `grammar-c1/topics/cohesion-ellipsis-and-lexical-substitution.html` | English (`en`) | HTML | 1660 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/cohesion-ellipsis-and-lexical-substitution.html` |
| `grammar-c1/topics/modality-for-speculation-deduction-and-certainty.html` | English (`en`) | HTML | 1690 B (1.7 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/modality-for-speculation-deduction-and-certainty.html` |
| `grammar-c1/topics/sentence-variety-periodic-loose-and-balanced.html` | English (`en`) | HTML | 1670 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/sentence-variety-periodic-loose-and-balanced.html` |
| `grammar-c1/topics/theme-rheme-and-information-packaging.html` | English (`en`) | HTML | 1635 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/theme-rheme-and-information-packaging.html` |
| `grammar-c1/assets/app.js` | English (`en`) | JS | 3189 B (3.1 KB) | JavaScript Application Logic | `manuals/en/grammar/c1/assets/app.js` |
| `grammar-c1/assets/style.css` | English (`en`) | CSS | 10056 B (9.8 KB) | CSS Stylesheet | `manuals/en/grammar/c1/assets/style.css` |
| `cv/index.html` | Chuvash (`cv`) | HTML | 7308 B (7.1 KB) | Hub / Section Index | `manuals/cv/index.html` |
| `cv/vocabulary/a2/index.html` | Chuvash (`cv`) | HTML | 1207 B (1.2 KB) | Hub / Section Index | `manuals/cv/vocabulary/a2/index.html` |
| `cv/vocabulary/a2/module-1.html` | Chuvash (`cv`) | HTML | 1460 B (1.4 KB) | Hub / Section Index | `manuals/cv/vocabulary/a2/module-1.html` |
| `cv/vocabulary/a2/topics/cyul-cyusen.html` | Chuvash (`cv`) | HTML | 1541 B (1.5 KB) | Topic Manual Module | `manuals/cv/vocabulary/a2/topics/cyul-cyusen.html` |
| `cv/vocabulary/a2/topics/ichet-tata-yratu.html` | Chuvash (`cv`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/cv/vocabulary/a2/topics/ichet-tata-yratu.html` |
| `cv/vocabulary/a2/assets/app.js` | Chuvash (`cv`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/cv/vocabulary/a2/assets/app.js` |
| `cv/vocabulary/a2/assets/style.css` | Chuvash (`cv`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/cv/vocabulary/a2/assets/style.css` |
| `cv/grammar/a2/index.html` | Chuvash (`cv`) | HTML | 1250 B (1.2 KB) | Hub / Section Index | `manuals/cv/grammar/a2/index.html` |
| `cv/grammar/a2/part-1.html` | Chuvash (`cv`) | HTML | 1500 B (1.5 KB) | Hub / Section Index | `manuals/cv/grammar/a2/part-1.html` |
| `cv/grammar/a2/topics/Iskil-viesleny.html` | Chuvash (`cv`) | HTML | 3503 B (3.4 KB) | Topic Manual Module | `manuals/cv/grammar/a2/topics/Iskil-viesleny.html` |
| `cv/grammar/a2/topics/pashor-affixsen-vachary.html` | Chuvash (`cv`) | HTML | 3744 B (3.7 KB) | Topic Manual Module | `manuals/cv/grammar/a2/topics/pashor-affixsen-vachary.html` |
| `cv/grammar/a2/assets/app.js` | Chuvash (`cv`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/cv/grammar/a2/assets/app.js` |
| `cv/grammar/a2/assets/style.css` | Chuvash (`cv`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/cv/grammar/a2/assets/style.css` |
| `vocabulary-b2/index.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/index.html` |
| `vocabulary-b2/part-1.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-1.html` |
| `vocabulary-b2/part-10.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-10.html` |
| `vocabulary-b2/part-11.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-11.html` |
| `vocabulary-b2/part-2.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-2.html` |
| `vocabulary-b2/part-3.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-3.html` |
| `vocabulary-b2/part-4.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-4.html` |
| `vocabulary-b2/part-5.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-5.html` |
| `vocabulary-b2/part-6.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-6.html` |
| `vocabulary-b2/part-7.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-7.html` |
| `vocabulary-b2/part-8.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-8.html` |
| `vocabulary-b2/part-9.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-9.html` |
| `deutscher-wortschatz/index.html` | German (`de`) | HTML | 3811 B (3.7 KB) | Hub / Section Index | `manuals/de/vocabulary/a1/index.html` |
| `deutscher-wortschatz/modul-1.html` | German (`de`) | HTML | 3082 B (3.0 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/modul-1.html` |
| `deutscher-wortschatz/modul-2.html` | German (`de`) | HTML | 2505 B (2.4 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/modul-2.html` |
| `deutscher-wortschatz/modul-3.html` | German (`de`) | HTML | 2545 B (2.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/modul-3.html` |
| `deutscher-wortschatz/modul-4.html` | German (`de`) | HTML | 2540 B (2.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/modul-4.html` |
| `deutscher-wortschatz/modul-5.html` | German (`de`) | HTML | 2584 B (2.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/modul-5.html` |
| `deutscher-wortschatz/modul-6.html` | German (`de`) | HTML | 2083 B (2.0 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/modul-6.html` |
| `deutscher-wortschatz/topics/aussprache-grundlagen.html` | German (`de`) | HTML | 3663 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/aussprache-grundlagen.html` |
| `deutscher-wortschatz/topics/begruessung-und-vorstellung.html` | German (`de`) | HTML | 3703 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/begruessung-und-vorstellung.html` |
| `deutscher-wortschatz/topics/berufe-und-arbeit.html` | German (`de`) | HTML | 3647 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/berufe-und-arbeit.html` |
| `deutscher-wortschatz/topics/bindewoerter-und-fragewoerter.html` | German (`de`) | HTML | 3625 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/bindewoerter-und-fragewoerter.html` |
| `deutscher-wortschatz/topics/der-menschliche-koerper.html` | German (`de`) | HTML | 3582 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/der-menschliche-koerper.html` |
| `deutscher-wortschatz/topics/die-familie.html` | German (`de`) | HTML | 3694 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/die-familie.html` |
| `deutscher-wortschatz/topics/die-farben.html` | German (`de`) | HTML | 3575 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/die-farben.html` |
| `deutscher-wortschatz/topics/die-zahlen.html` | German (`de`) | HTML | 3547 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/die-zahlen.html` |
| `deutscher-wortschatz/topics/einkaufen-und-geld.html` | German (`de`) | HTML | 3640 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/einkaufen-und-geld.html` |
| `deutscher-wortschatz/topics/essen-und-getraenke.html` | German (`de`) | HTML | 3683 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/essen-und-getraenke.html` |
| `deutscher-wortschatz/topics/freizeit-und-hobbys.html` | German (`de`) | HTML | 3596 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/freizeit-und-hobbys.html` |
| `deutscher-wortschatz/topics/gefuehle-und-emotionen.html` | German (`de`) | HTML | 3727 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/gefuehle-und-emotionen.html` |
| `deutscher-wortschatz/topics/gesundheit-und-apotheke.html` | German (`de`) | HTML | 3742 B (3.7 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/gesundheit-und-apotheke.html` |
| `deutscher-wortschatz/topics/haus-und-moebel.html` | German (`de`) | HTML | 3615 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/haus-und-moebel.html` |
| `deutscher-wortschatz/topics/im-restaurant-und-cafe.html` | German (`de`) | HTML | 3734 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/im-restaurant-und-cafe.html` |
| `deutscher-wortschatz/topics/kleidung-und-accessoires.html` | German (`de`) | HTML | 3606 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/kleidung-und-accessoires.html` |
| `deutscher-wortschatz/topics/mahlzeiten-und-kochen.html` | German (`de`) | HTML | 3764 B (3.7 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/mahlzeiten-und-kochen.html` |
| `deutscher-wortschatz/topics/persoenliche-angaben.html` | German (`de`) | HTML | 3724 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/persoenliche-angaben.html` |
| `deutscher-wortschatz/topics/schule-und-unterrichtsgegenstaende.html` | German (`de`) | HTML | 3646 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/schule-und-unterrichtsgegenstaende.html` |
| `deutscher-wortschatz/topics/technologie-und-telefon.html` | German (`de`) | HTML | 3691 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/technologie-und-telefon.html` |
| `deutscher-wortschatz/topics/uhrzeit-und-tagesablauf.html` | German (`de`) | HTML | 3612 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/uhrzeit-und-tagesablauf.html` |
| `deutscher-wortschatz/topics/verkehrsmittel-und-reisen.html` | German (`de`) | HTML | 3649 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/verkehrsmittel-und-reisen.html` |
| `deutscher-wortschatz/topics/wegbeschreibung-und-orte.html` | German (`de`) | HTML | 3628 B (3.5 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/wegbeschreibung-und-orte.html` |
| `deutscher-wortschatz/topics/wetter-und-jahreszeiten.html` | German (`de`) | HTML | 3668 B (3.6 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/wetter-und-jahreszeiten.html` |
| `deutscher-wortschatz/topics/wichtige-a1-verben.html` | German (`de`) | HTML | 3849 B (3.8 KB) | Topic Manual Module | `manuals/de/vocabulary/a1/topics/wichtige-a1-verben.html` |
| `deutscher-wortschatz/assets/app.js` | German (`de`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/de/vocabulary/a1/assets/app.js` |
| `deutscher-wortschatz/assets/style.css` | German (`de`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/de/vocabulary/a1/assets/style.css` |
| `es/index.html` | Spanish (`es`) | HTML | 3972 B (3.9 KB) | Hub / Section Index | `manuals/es/index.html` |
| `es/vocabulary/a2/index.html` | Spanish (`es`) | HTML | 2186 B (2.1 KB) | Hub / Section Index | `manuals/es/vocabulary/a2/index.html` |
| `es/vocabulary/a2/module-1.html` | Spanish (`es`) | HTML | 1991 B (1.9 KB) | Hub / Section Index | `manuals/es/vocabulary/a2/module-1.html` |
| `es/vocabulary/a2/module-2.html` | Spanish (`es`) | HTML | 1932 B (1.9 KB) | Topic Manual Module | `manuals/es/vocabulary/a2/module-2.html` |
| `es/vocabulary/a2/topics/el-trabajo-y-las-profesiones.html` | Spanish (`es`) | HTML | 3870 B (3.8 KB) | Topic Manual Module | `manuals/es/vocabulary/a2/topics/el-trabajo-y-las-profesiones.html` |
| `es/vocabulary/a2/topics/la-rutina-y-los-recuerdos.html` | Spanish (`es`) | HTML | 3772 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a2/topics/la-rutina-y-los-recuerdos.html` |
| `es/vocabulary/a2/topics/la-salud-y-las-compras.html` | Spanish (`es`) | HTML | 3750 B (3.7 KB) | Topic Manual Module | `manuals/es/vocabulary/a2/topics/la-salud-y-las-compras.html` |
| `es/vocabulary/a2/topics/los-viajes-y-los-transportes.html` | Spanish (`es`) | HTML | 3857 B (3.8 KB) | Topic Manual Module | `manuals/es/vocabulary/a2/topics/los-viajes-y-los-transportes.html` |
| `es/vocabulary/a2/assets/app.js` | Spanish (`es`) | JS | 2176 B (2.1 KB) | JavaScript Application Logic | `manuals/es/vocabulary/a2/assets/app.js` |
| `es/vocabulary/a2/assets/style.css` | Spanish (`es`) | CSS | 6379 B (6.2 KB) | CSS Stylesheet | `manuals/es/vocabulary/a2/assets/style.css` |
| `es/grammar/a2/index.html` | Spanish (`es`) | HTML | 2575 B (2.5 KB) | Hub / Section Index | `manuals/es/grammar/a2/index.html` |
| `es/grammar/a2/part-1.html` | Spanish (`es`) | HTML | 2218 B (2.2 KB) | Hub / Section Index | `manuals/es/grammar/a2/part-1.html` |
| `es/grammar/a2/part-2.html` | Spanish (`es`) | HTML | 2157 B (2.1 KB) | Hub / Section Index | `manuals/es/grammar/a2/part-2.html` |
| `es/grammar/a2/part-3.html` | Spanish (`es`) | HTML | 2515 B (2.5 KB) | Hub / Section Index | `manuals/es/grammar/a2/part-3.html` |
| `es/grammar/a2/topics/el-condicional-simple.html` | Spanish (`es`) | HTML | 5114 B (5.0 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/el-condicional-simple.html` |
| `es/grammar/a2/topics/el-futuro-simple.html` | Spanish (`es`) | HTML | 4958 B (4.8 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/el-futuro-simple.html` |
| `es/grammar/a2/topics/el-preterito-imperfecto.html` | Spanish (`es`) | HTML | 4952 B (4.8 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/el-preterito-imperfecto.html` |
| `es/grammar/a2/topics/el-subjuntivo-introduccion.html` | Spanish (`es`) | HTML | 4829 B (4.7 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/el-subjuntivo-introduccion.html` |
| `es/grammar/a2/topics/indefinido-vs-imperfecto.html` | Spanish (`es`) | HTML | 5088 B (5.0 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/indefinido-vs-imperfecto.html` |
| `es/grammar/a2/topics/la-comparacion-y-el-superlativo.html` | Spanish (`es`) | HTML | 5130 B (5.0 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/la-comparacion-y-el-superlativo.html` |
| `es/grammar/a2/topics/obligacion-tener-que-hay-que.html` | Spanish (`es`) | HTML | 5020 B (4.9 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/obligacion-tener-que-hay-que.html` |
| `es/grammar/a2/topics/preterito-indefinido-y-perfecto.html` | Spanish (`es`) | HTML | 5390 B (5.3 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/preterito-indefinido-y-perfecto.html` |
| `es/grammar/a2/topics/pronombres-directos-e-indirectos.html` | Spanish (`es`) | HTML | 5393 B (5.3 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/pronombres-directos-e-indirectos.html` |
| `es/grammar/a2/topics/si-presente-futuro.html` | Spanish (`es`) | HTML | 4866 B (4.8 KB) | Topic Manual Module | `manuals/es/grammar/a2/topics/si-presente-futuro.html` |
| `es/grammar/a2/assets/app.js` | Spanish (`es`) | JS | 2380 B (2.3 KB) | JavaScript Application Logic | `manuals/es/grammar/a2/assets/app.js` |
| `es/grammar/a2/assets/style.css` | Spanish (`es`) | CSS | 8937 B (8.7 KB) | CSS Stylesheet | `manuals/es/grammar/a2/assets/style.css` |
| `en/cosylanguages_a0_a1_english_grammar_manual.pdf` | English (`en`) | PDF | 719447 B (702.6 KB) | PDF Cheat Sheet / Reference Document | `manuals/en/cosylanguages_a0_a1_english_grammar_manual.pdf` |
| `en/vocabulary/c1/index.html` | English (`en`) | HTML | 7343 B (7.2 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/index.html` |
| `en/vocabulary/c1/part-1.html` | English (`en`) | HTML | 3575 B (3.5 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-1.html` |
| `en/vocabulary/c1/part-10.html` | English (`en`) | HTML | 2763 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-10.html` |
| `en/vocabulary/c1/part-11.html` | English (`en`) | HTML | 2764 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-11.html` |
| `en/vocabulary/c1/part-12.html` | English (`en`) | HTML | 2764 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-12.html` |
| `en/vocabulary/c1/part-13.html` | English (`en`) | HTML | 2759 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-13.html` |
| `en/vocabulary/c1/part-14.html` | English (`en`) | HTML | 2762 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-14.html` |
| `en/vocabulary/c1/part-2.html` | English (`en`) | HTML | 3484 B (3.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-2.html` |
| `en/vocabulary/c1/part-3.html` | English (`en`) | HTML | 3191 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-3.html` |
| `en/vocabulary/c1/part-4.html` | English (`en`) | HTML | 3167 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-4.html` |
| `en/vocabulary/c1/part-5.html` | English (`en`) | HTML | 2751 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-5.html` |
| `en/vocabulary/c1/part-6.html` | English (`en`) | HTML | 2790 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-6.html` |
| `en/vocabulary/c1/part-7.html` | English (`en`) | HTML | 3188 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-7.html` |
| `en/vocabulary/c1/part-8.html` | English (`en`) | HTML | 2771 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-8.html` |
| `en/vocabulary/c1/part-9.html` | English (`en`) | HTML | 2750 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-9.html` |
| `en/vocabulary/c1/topics/academic-genres-and-research-publications.html` | English (`en`) | HTML | 6826 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/academic-genres-and-research-publications.html` |
| `en/vocabulary/c1/topics/academic-literacy-assessment-and-pedagogy.html` | English (`en`) | HTML | 6246 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/academic-literacy-assessment-and-pedagogy.html` |
| `en/vocabulary/c1/topics/aesthetics-literature-and-architectural-heritage.html` | English (`en`) | HTML | 6209 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/aesthetics-literature-and-architectural-heritage.html` |
| `en/vocabulary/c1/topics/artificial-intelligence-machine-learning-and-robotics.html` | English (`en`) | HTML | 6200 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/artificial-intelligence-machine-learning-and-robotics.html` |
| `en/vocabulary/c1/topics/banking-investment-cryptocurrencies-and-crises.html` | English (`en`) | HTML | 6102 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/banking-investment-cryptocurrencies-and-crises.html` |
| `en/vocabulary/c1/topics/civil-law-contracts-and-torts.html` | English (`en`) | HTML | 5962 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/civil-law-contracts-and-torts.html` |
| `en/vocabulary/c1/topics/climate-adaptation-biodiversity-and-green-tech.html` | English (`en`) | HTML | 6004 B (5.9 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/climate-adaptation-biodiversity-and-green-tech.html` |
| `en/vocabulary/c1/topics/cognitive-biases-mental-disorders-and-therapy.html` | English (`en`) | HTML | 6182 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/cognitive-biases-mental-disorders-and-therapy.html` |
| `en/vocabulary/c1/topics/constitutional-and-international-law.html` | English (`en`) | HTML | 5985 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/constitutional-and-international-law.html` |
| `en/vocabulary/c1/topics/criminal-law-and-judicial-proceedings.html` | English (`en`) | HTML | 5907 B (5.8 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/criminal-law-and-judicial-proceedings.html` |
| `en/vocabulary/c1/topics/cybersecurity-big-data-and-digital-ethics.html` | English (`en`) | HTML | 6234 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/cybersecurity-big-data-and-digital-ethics.html` |
| `en/vocabulary/c1/topics/diagnostics-clinical-trials-and-specialties.html` | English (`en`) | HTML | 6181 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/diagnostics-clinical-trials-and-specialties.html` |
| `en/vocabulary/c1/topics/executive-leadership-operations-and-hr.html` | English (`en`) | HTML | 6131 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/executive-leadership-operations-and-hr.html` |
| `en/vocabulary/c1/topics/geopolitics-soft-power-and-peacekeeping.html` | English (`en`) | HTML | 6178 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/geopolitics-soft-power-and-peacekeeping.html` |
| `en/vocabulary/c1/topics/investigative-journalism-and-press-freedom.html` | English (`en`) | HTML | 6214 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/investigative-journalism-and-press-freedom.html` |
| `en/vocabulary/c1/topics/microeconomics-macroeconomics-and-behavioural-economics.html` | English (`en`) | HTML | 6047 B (5.9 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/microeconomics-macroeconomics-and-behavioural-economics.html` |
| `en/vocabulary/c1/topics/morality-existentialism-and-epistemology.html` | English (`en`) | HTML | 6131 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/morality-existentialism-and-epistemology.html` |
| `en/vocabulary/c1/topics/physics-chemistry-biology-and-genetics.html` | English (`en`) | HTML | 6111 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/physics-chemistry-biology-and-genetics.html` |
| `en/vocabulary/c1/topics/research-ethics-peer-review-and-methodology.html` | English (`en`) | HTML | 6294 B (6.1 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/research-ethics-peer-review-and-methodology.html` |
| `en/vocabulary/c1/topics/risk-management-change-and-entrepreneurship.html` | English (`en`) | HTML | 6124 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/risk-management-change-and-entrepreneurship.html` |
| `en/vocabulary/c1/topics/statistical-analysis-and-empirical-data-interpretation.html` | English (`en`) | HTML | 6135 B (6.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/statistical-analysis-and-empirical-data-interpretation.html` |
| `en/vocabulary/c1/assets/app.js` | English (`en`) | JS | 3104 B (3.0 KB) | JavaScript Application Logic | `manuals/en/vocabulary/c1/assets/app.js` |
| `en/vocabulary/c1/assets/style.css` | English (`en`) | CSS | 9529 B (9.3 KB) | CSS Stylesheet | `manuals/en/vocabulary/c1/assets/style.css` |
| `en/vocabulary/b2/index.html` | English (`en`) | HTML | 8274 B (8.1 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/index.html` |
| `en/vocabulary/b2/part-1.html` | English (`en`) | HTML | 2756 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-1.html` |
| `en/vocabulary/b2/part-10.html` | English (`en`) | HTML | 2793 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-10.html` |
| `en/vocabulary/b2/part-11.html` | English (`en`) | HTML | 2757 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-11.html` |
| `en/vocabulary/b2/part-12.html` | English (`en`) | HTML | 2819 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-12.html` |
| `en/vocabulary/b2/part-13.html` | English (`en`) | HTML | 2882 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-13.html` |
| `en/vocabulary/b2/part-14.html` | English (`en`) | HTML | 2836 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-14.html` |
| `en/vocabulary/b2/part-15.html` | English (`en`) | HTML | 2838 B (2.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/part-15.html` |
| `en/vocabulary/b2/part-16.html` | English (`en`) | HTML | 2839 B (2.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/part-16.html` |
| `en/vocabulary/b2/part-2.html` | English (`en`) | HTML | 2789 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-2.html` |
| `en/vocabulary/b2/part-3.html` | English (`en`) | HTML | 2772 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-3.html` |
| `en/vocabulary/b2/part-4.html` | English (`en`) | HTML | 2770 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-4.html` |
| `en/vocabulary/b2/part-5.html` | English (`en`) | HTML | 2829 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-5.html` |
| `en/vocabulary/b2/part-6.html` | English (`en`) | HTML | 2845 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-6.html` |
| `en/vocabulary/b2/part-7.html` | English (`en`) | HTML | 2790 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-7.html` |
| `en/vocabulary/b2/part-8.html` | English (`en`) | HTML | 2825 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-8.html` |
| `en/vocabulary/b2/part-9.html` | English (`en`) | HTML | 2805 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/b2/part-9.html` |
| `en/vocabulary/b2/topics/advanced-vocabulary-toolkit.html` | English (`en`) | HTML | 6602 B (6.4 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/advanced-vocabulary-toolkit.html` |
| `en/vocabulary/b2/topics/business-strategy-management-and-leadership.html` | English (`en`) | HTML | 6815 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/business-strategy-management-and-leadership.html` |
| `en/vocabulary/b2/topics/culture-arts-and-heritage.html` | English (`en`) | HTML | 6834 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/culture-arts-and-heritage.html` |
| `en/vocabulary/b2/topics/daily-professional-life-and-workplace-dynamics.html` | English (`en`) | HTML | 6717 B (6.6 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/daily-professional-life-and-workplace-dynamics.html` |
| `en/vocabulary/b2/topics/economics-trade-and-finance.html` | English (`en`) | HTML | 6685 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/economics-trade-and-finance.html` |
| `en/vocabulary/b2/topics/environment-sustainability-and-circular-economy.html` | English (`en`) | HTML | 6886 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/environment-sustainability-and-circular-economy.html` |
| `en/vocabulary/b2/topics/healthcare-systems-and-preventive-medicine.html` | English (`en`) | HTML | 6867 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/healthcare-systems-and-preventive-medicine.html` |
| `en/vocabulary/b2/topics/higher-education-and-academic-inquiry.html` | English (`en`) | HTML | 6763 B (6.6 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/higher-education-and-academic-inquiry.html` |
| `en/vocabulary/b2/topics/international-relations-and-geopolitics.html` | English (`en`) | HTML | 6842 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/international-relations-and-geopolitics.html` |
| `en/vocabulary/b2/topics/law-justice-and-civil-rights.html` | English (`en`) | HTML | 6698 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/law-justice-and-civil-rights.html` |
| `en/vocabulary/b2/topics/media-journalism-and-public-discourse.html` | English (`en`) | HTML | 6867 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/media-journalism-and-public-discourse.html` |
| `en/vocabulary/b2/topics/philosophy-ethics-and-moral-logic.html` | English (`en`) | HTML | 6753 B (6.6 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/philosophy-ethics-and-moral-logic.html` |
| `en/vocabulary/b2/topics/psychology-cognition-and-behavior.html` | English (`en`) | HTML | 6775 B (6.6 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/psychology-cognition-and-behavior.html` |
| `en/vocabulary/b2/topics/science-research-and-empirical-methodology.html` | English (`en`) | HTML | 6826 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/science-research-and-empirical-methodology.html` |
| `en/vocabulary/b2/topics/society-government-and-public-life.html` | English (`en`) | HTML | 6707 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/society-government-and-public-life.html` |
| `en/vocabulary/b2/topics/technology-ai-and-cybernetics.html` | English (`en`) | HTML | 6830 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/b2/topics/technology-ai-and-cybernetics.html` |
| `en/vocabulary/b2/assets/app.js` | English (`en`) | JS | 3533 B (3.5 KB) | JavaScript Application Logic | `manuals/en/vocabulary/b2/assets/app.js` |
| `en/vocabulary/b2/assets/style.css` | English (`en`) | CSS | 10465 B (10.2 KB) | CSS Stylesheet | `manuals/en/vocabulary/b2/assets/style.css` |
| `en/vocabulary/a2/index.html` | English (`en`) | HTML | 8211 B (8.0 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/index.html` |
| `en/vocabulary/a2/part-1.html` | English (`en`) | HTML | 2862 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-1.html` |
| `en/vocabulary/a2/part-10.html` | English (`en`) | HTML | 2811 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-10.html` |
| `en/vocabulary/a2/part-11.html` | English (`en`) | HTML | 2785 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-11.html` |
| `en/vocabulary/a2/part-12.html` | English (`en`) | HTML | 2774 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-12.html` |
| `en/vocabulary/a2/part-13.html` | English (`en`) | HTML | 2806 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-13.html` |
| `en/vocabulary/a2/part-14.html` | English (`en`) | HTML | 2786 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-14.html` |
| `en/vocabulary/a2/part-15.html` | English (`en`) | HTML | 2815 B (2.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/part-15.html` |
| `en/vocabulary/a2/part-16.html` | English (`en`) | HTML | 2837 B (2.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/part-16.html` |
| `en/vocabulary/a2/part-17.html` | English (`en`) | HTML | 2874 B (2.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/part-17.html` |
| `en/vocabulary/a2/part-2.html` | English (`en`) | HTML | 2822 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-2.html` |
| `en/vocabulary/a2/part-3.html` | English (`en`) | HTML | 2819 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-3.html` |
| `en/vocabulary/a2/part-4.html` | English (`en`) | HTML | 2807 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-4.html` |
| `en/vocabulary/a2/part-5.html` | English (`en`) | HTML | 2779 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-5.html` |
| `en/vocabulary/a2/part-6.html` | English (`en`) | HTML | 2765 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-6.html` |
| `en/vocabulary/a2/part-7.html` | English (`en`) | HTML | 2772 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-7.html` |
| `en/vocabulary/a2/part-8.html` | English (`en`) | HTML | 2783 B (2.7 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-8.html` |
| `en/vocabulary/a2/part-9.html` | English (`en`) | HTML | 2825 B (2.8 KB) | Hub / Section Index | `manuals/en/vocabulary/a2/part-9.html` |
| `en/vocabulary/a2/topics/culture-society-and-celebrations.html` | English (`en`) | HTML | 6685 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/culture-society-and-celebrations.html` |
| `en/vocabulary/a2/topics/daily-life-free-time-and-entertainment.html` | English (`en`) | HTML | 6562 B (6.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/daily-life-free-time-and-entertainment.html` |
| `en/vocabulary/a2/topics/describing-change-and-comparison.html` | English (`en`) | HTML | 6608 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/describing-change-and-comparison.html` |
| `en/vocabulary/a2/topics/emergencies-and-accidents.html` | English (`en`) | HTML | 6631 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/emergencies-and-accidents.html` |
| `en/vocabulary/a2/topics/encyclopedic-a2-vocabulary-reference-tables.html` | English (`en`) | HTML | 7085 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/encyclopedic-a2-vocabulary-reference-tables.html` |
| `en/vocabulary/a2/topics/expanded-transport-and-driving.html` | English (`en`) | HTML | 6637 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/expanded-transport-and-driving.html` |
| `en/vocabulary/a2/topics/food-health-and-the-body.html` | English (`en`) | HTML | 6454 B (6.3 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/food-health-and-the-body.html` |
| `en/vocabulary/a2/topics/functional-english-masterclass.html` | English (`en`) | HTML | 7280 B (7.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/functional-english-masterclass.html` |
| `en/vocabulary/a2/topics/home-neighbourhood-and-environment.html` | English (`en`) | HTML | 6728 B (6.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/home-neighbourhood-and-environment.html` |
| `en/vocabulary/a2/topics/master-collocations-dictionary.html` | English (`en`) | HTML | 7316 B (7.1 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/master-collocations-dictionary.html` |
| `en/vocabulary/a2/topics/opinions-feelings-and-social-language.html` | English (`en`) | HTML | 6514 B (6.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/opinions-feelings-and-social-language.html` |
| `en/vocabulary/a2/topics/people-relationships-and-life-stages.html` | English (`en`) | HTML | 6645 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/people-relationships-and-life-stages.html` |
| `en/vocabulary/a2/topics/personal-development-and-goals.html` | English (`en`) | HTML | 6629 B (6.5 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/personal-development-and-goals.html` |
| `en/vocabulary/a2/topics/school-work-and-technology.html` | English (`en`) | HTML | 6462 B (6.3 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/school-work-and-technology.html` |
| `en/vocabulary/a2/topics/shopping-and-services.html` | English (`en`) | HTML | 6514 B (6.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/shopping-and-services.html` |
| `en/vocabulary/a2/topics/travel-and-getting-around.html` | English (`en`) | HTML | 6539 B (6.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/travel-and-getting-around.html` |
| `en/vocabulary/a2/topics/vocabulary-building-toolkit.html` | English (`en`) | HTML | 6894 B (6.7 KB) | Topic Manual Module | `manuals/en/vocabulary/a2/topics/vocabulary-building-toolkit.html` |
| `en/vocabulary/a2/assets/app.js` | English (`en`) | JS | 3533 B (3.5 KB) | JavaScript Application Logic | `manuals/en/vocabulary/a2/assets/app.js` |
| `en/vocabulary/a2/assets/style.css` | English (`en`) | CSS | 10764 B (10.5 KB) | CSS Stylesheet | `manuals/en/vocabulary/a2/assets/style.css` |
| `en/vocabulary/c2/index.html` | English (`en`) | HTML | 3224 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/index.html` |
| `en/vocabulary/c2/part-1.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-1.html` |
| `en/vocabulary/c2/part-10.html` | English (`en`) | HTML | 1471 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-10.html` |
| `en/vocabulary/c2/part-11.html` | English (`en`) | HTML | 1471 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-11.html` |
| `en/vocabulary/c2/part-12.html` | English (`en`) | HTML | 1471 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-12.html` |
| `en/vocabulary/c2/part-13.html` | English (`en`) | HTML | 1471 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-13.html` |
| `en/vocabulary/c2/part-14.html` | English (`en`) | HTML | 1471 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-14.html` |
| `en/vocabulary/c2/part-2.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-2.html` |
| `en/vocabulary/c2/part-3.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-3.html` |
| `en/vocabulary/c2/part-4.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-4.html` |
| `en/vocabulary/c2/part-5.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-5.html` |
| `en/vocabulary/c2/part-6.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-6.html` |
| `en/vocabulary/c2/part-7.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-7.html` |
| `en/vocabulary/c2/part-8.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-8.html` |
| `en/vocabulary/c2/part-9.html` | English (`en`) | HTML | 1469 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c2/part-9.html` |
| `en/vocabulary/c2/topics/collocations-at-native-density.html` | English (`en`) | HTML | 5043 B (4.9 KB) | Topic Manual Module | `manuals/en/vocabulary/c2/topics/collocations-at-native-density.html` |
| `en/vocabulary/c2/topics/cross-domain-specialist-vocabulary.html` | English (`en`) | HTML | 5258 B (5.1 KB) | Topic Manual Module | `manuals/en/vocabulary/c2/topics/cross-domain-specialist-vocabulary.html` |
| `en/vocabulary/c2/topics/idiomatic-and-figurative-fluency.html` | English (`en`) | HTML | 5145 B (5.0 KB) | Topic Manual Module | `manuals/en/vocabulary/c2/topics/idiomatic-and-figurative-fluency.html` |
| `en/vocabulary/c2/topics/precision-and-near-synonym-discrimination.html` | English (`en`) | HTML | 5315 B (5.2 KB) | Topic Manual Module | `manuals/en/vocabulary/c2/topics/precision-and-near-synonym-discrimination.html` |
| `en/vocabulary/c2/assets/app.js` | English (`en`) | JS | 3104 B (3.0 KB) | JavaScript Application Logic | `manuals/en/vocabulary/c2/assets/app.js` |
| `en/vocabulary/c2/assets/style.css` | English (`en`) | CSS | 9529 B (9.3 KB) | CSS Stylesheet | `manuals/en/vocabulary/c2/assets/style.css` |
| `en/vocabulary/b1/index.html` | English (`en`) | HTML | 10263 B (10.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/index.html` |
| `en/vocabulary/b1/part-1.html` | English (`en`) | HTML | 3167 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-1.html` |
| `en/vocabulary/b1/part-10.html` | English (`en`) | HTML | 3137 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-10.html` |
| `en/vocabulary/b1/part-11.html` | English (`en`) | HTML | 3078 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-11.html` |
| `en/vocabulary/b1/part-12.html` | English (`en`) | HTML | 3056 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-12.html` |
| `en/vocabulary/b1/part-13.html` | English (`en`) | HTML | 3126 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-13.html` |
| `en/vocabulary/b1/part-14.html` | English (`en`) | HTML | 3081 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-14.html` |
| `en/vocabulary/b1/part-15.html` | English (`en`) | HTML | 3140 B (3.1 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/part-15.html` |
| `en/vocabulary/b1/part-16.html` | English (`en`) | HTML | 3129 B (3.1 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/part-16.html` |
| `en/vocabulary/b1/part-17.html` | English (`en`) | HTML | 3101 B (3.0 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/part-17.html` |
| `en/vocabulary/b1/part-18.html` | English (`en`) | HTML | 3096 B (3.0 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/part-18.html` |
| `en/vocabulary/b1/part-19.html` | English (`en`) | HTML | 3108 B (3.0 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/part-19.html` |
| `en/vocabulary/b1/part-2.html` | English (`en`) | HTML | 3089 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-2.html` |
| `en/vocabulary/b1/part-20.html` | English (`en`) | HTML | 3166 B (3.1 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/part-20.html` |
| `en/vocabulary/b1/part-21.html` | English (`en`) | HTML | 3187 B (3.1 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/part-21.html` |
| `en/vocabulary/b1/part-3.html` | English (`en`) | HTML | 3098 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-3.html` |
| `en/vocabulary/b1/part-4.html` | English (`en`) | HTML | 3095 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-4.html` |
| `en/vocabulary/b1/part-5.html` | English (`en`) | HTML | 3098 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-5.html` |
| `en/vocabulary/b1/part-6.html` | English (`en`) | HTML | 3079 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-6.html` |
| `en/vocabulary/b1/part-7.html` | English (`en`) | HTML | 3106 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-7.html` |
| `en/vocabulary/b1/part-8.html` | English (`en`) | HTML | 3106 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-8.html` |
| `en/vocabulary/b1/part-9.html` | English (`en`) | HTML | 3053 B (3.0 KB) | Hub / Section Index | `manuals/en/vocabulary/b1/part-9.html` |
| `en/vocabulary/b1/topics/advanced-computing-cybersecurity-and-ai.html` | English (`en`) | HTML | 7080 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/advanced-computing-cybersecurity-and-ai.html` |
| `en/vocabulary/b1/topics/arts-culture-and-performing-arts.html` | English (`en`) | HTML | 7007 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/arts-culture-and-performing-arts.html` |
| `en/vocabulary/b1/topics/business-english-leadership-and-negotiation.html` | English (`en`) | HTML | 7086 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/business-english-leadership-and-negotiation.html` |
| `en/vocabulary/b1/topics/current-affairs-and-global-economy.html` | English (`en`) | HTML | 7010 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/current-affairs-and-global-economy.html` |
| `en/vocabulary/b1/topics/ecology-climate-and-sustainability.html` | English (`en`) | HTML | 7054 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/ecology-climate-and-sustainability.html` |
| `en/vocabulary/b1/topics/education-academic-integrity-and-research.html` | English (`en`) | HTML | 7006 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/education-academic-integrity-and-research.html` |
| `en/vocabulary/b1/topics/environment-disasters-and-conservation.html` | English (`en`) | HTML | 7119 B (7.0 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/environment-disasters-and-conservation.html` |
| `en/vocabulary/b1/topics/health-medicine-and-lifestyle.html` | English (`en`) | HTML | 6995 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/health-medicine-and-lifestyle.html` |
| `en/vocabulary/b1/topics/housing-homeownership-and-diy.html` | English (`en`) | HTML | 6980 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/housing-homeownership-and-diy.html` |
| `en/vocabulary/b1/topics/law-crime-and-judicial-system.html` | English (`en`) | HTML | 7060 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/law-crime-and-judicial-system.html` |
| `en/vocabulary/b1/topics/life-skills-decision-making-and-critical-thinking.html` | English (`en`) | HTML | 6974 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/life-skills-decision-making-and-critical-thinking.html` |
| `en/vocabulary/b1/topics/media-digital-life-and-cybersecurity.html` | English (`en`) | HTML | 7065 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/media-digital-life-and-cybersecurity.html` |
| `en/vocabulary/b1/topics/money-personal-finance-and-consumer-rights.html` | English (`en`) | HTML | 6989 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/money-personal-finance-and-consumer-rights.html` |
| `en/vocabulary/b1/topics/personality-psychology-and-emotions.html` | English (`en`) | HTML | 7206 B (7.0 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/personality-psychology-and-emotions.html` |
| `en/vocabulary/b1/topics/philosophy-values-and-moral-ethics.html` | English (`en`) | HTML | 6961 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/philosophy-values-and-moral-ethics.html` |
| `en/vocabulary/b1/topics/phrasal-verbs-everyday-non-literal-meanings.html` | English (`en`) | HTML | 7089 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/phrasal-verbs-everyday-non-literal-meanings.html` |
| `en/vocabulary/b1/topics/professional-gastronomy-and-culinary-arts.html` | English (`en`) | HTML | 6992 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/professional-gastronomy-and-culinary-arts.html` |
| `en/vocabulary/b1/topics/science-innovation-and-future-tech.html` | English (`en`) | HTML | 7002 B (6.8 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/science-innovation-and-future-tech.html` |
| `en/vocabulary/b1/topics/society-civics-and-human-rights.html` | English (`en`) | HTML | 7022 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/society-civics-and-human-rights.html` |
| `en/vocabulary/b1/topics/travel-immigration-and-global-mobility.html` | English (`en`) | HTML | 7033 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/travel-immigration-and-global-mobility.html` |
| `en/vocabulary/b1/topics/work-career-and-business-communication.html` | English (`en`) | HTML | 7055 B (6.9 KB) | Topic Manual Module | `manuals/en/vocabulary/b1/topics/work-career-and-business-communication.html` |
| `en/vocabulary/b1/assets/app.js` | English (`en`) | JS | 3533 B (3.5 KB) | JavaScript Application Logic | `manuals/en/vocabulary/b1/assets/app.js` |
| `en/vocabulary/b1/assets/style.css` | English (`en`) | CSS | 10465 B (10.2 KB) | CSS Stylesheet | `manuals/en/vocabulary/b1/assets/style.css` |
| `en/vocabulary/a1/index.html` | English (`en`) | HTML | 6438 B (6.3 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/index.html` |
| `en/vocabulary/a1/part-1.html` | English (`en`) | HTML | 3201 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-1.html` |
| `en/vocabulary/a1/part-10.html` | English (`en`) | HTML | 3169 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-10.html` |
| `en/vocabulary/a1/part-2.html` | English (`en`) | HTML | 3153 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-2.html` |
| `en/vocabulary/a1/part-3.html` | English (`en`) | HTML | 3153 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-3.html` |
| `en/vocabulary/a1/part-4.html` | English (`en`) | HTML | 3147 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-4.html` |
| `en/vocabulary/a1/part-5.html` | English (`en`) | HTML | 3182 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-5.html` |
| `en/vocabulary/a1/part-6.html` | English (`en`) | HTML | 3163 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-6.html` |
| `en/vocabulary/a1/part-7.html` | English (`en`) | HTML | 3164 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-7.html` |
| `en/vocabulary/a1/part-8.html` | English (`en`) | HTML | 3160 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-8.html` |
| `en/vocabulary/a1/part-9.html` | English (`en`) | HTML | 3138 B (3.1 KB) | Hub / Section Index | `manuals/en/vocabulary/a1/part-9.html` |
| `en/vocabulary/a1/topics/part-1-about-me.html` | English (`en`) | HTML | 33647 B (32.9 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-1-about-me.html` |
| `en/vocabulary/a1/topics/part-10-primitives.html` | English (`en`) | HTML | 17583 B (17.2 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-10-primitives.html` |
| `en/vocabulary/a1/topics/part-2-clothes.html` | English (`en`) | HTML | 22076 B (21.6 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-2-clothes.html` |
| `en/vocabulary/a1/topics/part-3-home.html` | English (`en`) | HTML | 21277 B (20.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-3-home.html` |
| `en/vocabulary/a1/topics/part-4-food.html` | English (`en`) | HTML | 20854 B (20.4 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-4-food.html` |
| `en/vocabulary/a1/topics/part-5-daily-routine.html` | English (`en`) | HTML | 25551 B (25.0 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-5-daily-routine.html` |
| `en/vocabulary/a1/topics/part-6-city-transport.html` | English (`en`) | HTML | 19734 B (19.3 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-6-city-transport.html` |
| `en/vocabulary/a1/topics/part-7-school-work-tech.html` | English (`en`) | HTML | 18237 B (17.8 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-7-school-work-tech.html` |
| `en/vocabulary/a1/topics/part-8-nature-animals.html` | English (`en`) | HTML | 19415 B (19.0 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-8-nature-animals.html` |
| `en/vocabulary/a1/topics/part-9-hobbies-sports.html` | English (`en`) | HTML | 13590 B (13.3 KB) | Topic Manual Module | `manuals/en/vocabulary/a1/topics/part-9-hobbies-sports.html` |
| `en/vocabulary/a1/assets/app.js` | English (`en`) | JS | 882 B (0.9 KB) | JavaScript Application Logic | `manuals/en/vocabulary/a1/assets/app.js` |
| `en/vocabulary/a1/assets/style.css` | English (`en`) | CSS | 9971 B (9.7 KB) | CSS Stylesheet | `manuals/en/vocabulary/a1/assets/style.css` |
| `en/communication/index.html` | English (`en`) | HTML | 3838 B (3.7 KB) | Hub / Section Index | `manuals/en/communication/index.html` |
| `en/communication/c1/index.html` | English (`en`) | HTML | 5752 B (5.6 KB) | Hub / Section Index | `manuals/en/communication/c1/index.html` |
| `en/communication/c1/part-1.html` | English (`en`) | HTML | 2392 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/c1/part-1.html` |
| `en/communication/c1/part-10.html` | English (`en`) | HTML | 2451 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-10.html` |
| `en/communication/c1/part-2.html` | English (`en`) | HTML | 2501 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-2.html` |
| `en/communication/c1/part-3.html` | English (`en`) | HTML | 2450 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-3.html` |
| `en/communication/c1/part-4.html` | English (`en`) | HTML | 2445 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-4.html` |
| `en/communication/c1/part-5.html` | English (`en`) | HTML | 2422 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-5.html` |
| `en/communication/c1/part-6.html` | English (`en`) | HTML | 2452 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-6.html` |
| `en/communication/c1/part-7.html` | English (`en`) | HTML | 2440 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-7.html` |
| `en/communication/c1/part-8.html` | English (`en`) | HTML | 2491 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-8.html` |
| `en/communication/c1/part-9.html` | English (`en`) | HTML | 2508 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/c1/part-9.html` |
| `en/communication/c1/topics/academic-and-professional-register-switching.html` | English (`en`) | HTML | 5339 B (5.2 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/academic-and-professional-register-switching.html` |
| `en/communication/c1/topics/advanced-negotiation-and-mediation.html` | English (`en`) | HTML | 5326 B (5.2 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/advanced-negotiation-and-mediation.html` |
| `en/communication/c1/topics/chairing-high-stakes-meetings.html` | English (`en`) | HTML | 9624 B (9.4 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/chairing-high-stakes-meetings.html` |
| `en/communication/c1/topics/delivering-persuasive-arguments-rhetoric.html` | English (`en`) | HTML | 5837 B (5.7 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/delivering-persuasive-arguments-rhetoric.html` |
| `en/communication/c1/topics/diplomatic-hedging-and-deescalation.html` | English (`en`) | HTML | 5923 B (5.8 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/diplomatic-hedging-and-deescalation.html` |
| `en/communication/c1/topics/executive-communication-capstone.html` | English (`en`) | HTML | 4942 B (4.8 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/executive-communication-capstone.html` |
| `en/communication/c1/topics/giving-eloquent-extended-presentations.html` | English (`en`) | HTML | 5837 B (5.7 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/giving-eloquent-extended-presentations.html` |
| `en/communication/c1/topics/navigating-culturally-sensitive-topics.html` | English (`en`) | HTML | 5436 B (5.3 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/navigating-culturally-sensitive-topics.html` |
| `en/communication/c1/topics/nuanced-humor-irony-understatement.html` | English (`en`) | HTML | 5773 B (5.6 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/nuanced-humor-irony-understatement.html` |
| `en/communication/c1/topics/subtle-floor-management-strategic-steering.html` | English (`en`) | HTML | 5214 B (5.1 KB) | Topic Manual Module | `manuals/en/communication/c1/topics/subtle-floor-management-strategic-steering.html` |
| `en/communication/c1/assets/app.js` | English (`en`) | JS | 3529 B (3.4 KB) | JavaScript Application Logic | `manuals/en/communication/c1/assets/app.js` |
| `en/communication/c1/assets/style.css` | English (`en`) | CSS | 14028 B (13.7 KB) | CSS Stylesheet | `manuals/en/communication/c1/assets/style.css` |
| `en/communication/b2/index.html` | English (`en`) | HTML | 5451 B (5.3 KB) | Hub / Section Index | `manuals/en/communication/b2/index.html` |
| `en/communication/b2/part-1.html` | English (`en`) | HTML | 2426 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b2/part-1.html` |
| `en/communication/b2/part-10.html` | English (`en`) | HTML | 2419 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b2/part-10.html` |
| `en/communication/b2/part-2.html` | English (`en`) | HTML | 2398 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b2/part-2.html` |
| `en/communication/b2/part-3.html` | English (`en`) | HTML | 2378 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b2/part-3.html` |
| `en/communication/b2/part-4.html` | English (`en`) | HTML | 2387 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b2/part-4.html` |
| `en/communication/b2/part-5.html` | English (`en`) | HTML | 2437 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b2/part-5.html` |
| `en/communication/b2/part-6.html` | English (`en`) | HTML | 2395 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b2/part-6.html` |
| `en/communication/b2/part-7.html` | English (`en`) | HTML | 2360 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b2/part-7.html` |
| `en/communication/b2/part-8.html` | English (`en`) | HTML | 2383 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b2/part-8.html` |
| `en/communication/b2/part-9.html` | English (`en`) | HTML | 2410 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b2/part-9.html` |
| `en/communication/b2/topics/building-and-defending-an-argument.html` | English (`en`) | HTML | 6867 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/building-and-defending-an-argument.html` |
| `en/communication/b2/topics/chairing-and-managing-a-discussion.html` | English (`en`) | HTML | 6733 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/chairing-and-managing-a-discussion.html` |
| `en/communication/b2/topics/comparing-and-speculating-on-two-images.html` | English (`en`) | HTML | 6883 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/comparing-and-speculating-on-two-images.html` |
| `en/communication/b2/topics/discussing-abstract-and-global-topics-fluently.html` | English (`en`) | HTML | 6980 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/discussing-abstract-and-global-topics-fluently.html` |
| `en/communication/b2/topics/expressing-nuanced-agreement-and-disagreement.html` | English (`en`) | HTML | 6814 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/expressing-nuanced-agreement-and-disagreement.html` |
| `en/communication/b2/topics/hedging-and-diplomatic-language.html` | English (`en`) | HTML | 6769 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/hedging-and-diplomatic-language.html` |
| `en/communication/b2/topics/negotiating-towards-a-decision.html` | English (`en`) | HTML | 6773 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/negotiating-towards-a-decision.html` |
| `en/communication/b2/topics/persuading-and-making-a-case.html` | English (`en`) | HTML | 6858 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/persuading-and-making-a-case.html` |
| `en/communication/b2/topics/speculating-about-past-present-and-future.html` | English (`en`) | HTML | 6729 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/speculating-about-past-present-and-future.html` |
| `en/communication/b2/topics/structuring-a-formal-talk-or-presentation.html` | English (`en`) | HTML | 6830 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b2/topics/structuring-a-formal-talk-or-presentation.html` |
| `en/communication/b2/assets/app.js` | English (`en`) | JS | 3529 B (3.4 KB) | JavaScript Application Logic | `manuals/en/communication/b2/assets/app.js` |
| `en/communication/b2/assets/style.css` | English (`en`) | CSS | 11720 B (11.4 KB) | CSS Stylesheet | `manuals/en/communication/b2/assets/style.css` |
| `en/communication/a2/index.html` | English (`en`) | HTML | 5413 B (5.3 KB) | Hub / Section Index | `manuals/en/communication/a2/index.html` |
| `en/communication/a2/part-1.html` | English (`en`) | HTML | 2372 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-1.html` |
| `en/communication/a2/part-10.html` | English (`en`) | HTML | 2417 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/a2/part-10.html` |
| `en/communication/a2/part-2.html` | English (`en`) | HTML | 2350 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-2.html` |
| `en/communication/a2/part-3.html` | English (`en`) | HTML | 2375 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-3.html` |
| `en/communication/a2/part-4.html` | English (`en`) | HTML | 2399 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-4.html` |
| `en/communication/a2/part-5.html` | English (`en`) | HTML | 2418 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/a2/part-5.html` |
| `en/communication/a2/part-6.html` | English (`en`) | HTML | 2371 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-6.html` |
| `en/communication/a2/part-7.html` | English (`en`) | HTML | 2324 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-7.html` |
| `en/communication/a2/part-8.html` | English (`en`) | HTML | 2400 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-8.html` |
| `en/communication/a2/part-9.html` | English (`en`) | HTML | 2338 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a2/part-9.html` |
| `en/communication/a2/topics/asking-for-and-giving-directions.html` | English (`en`) | HTML | 6464 B (6.3 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/asking-for-and-giving-directions.html` |
| `en/communication/a2/topics/comparing-and-choosing-together.html` | English (`en`) | HTML | 6395 B (6.2 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/comparing-and-choosing-together.html` |
| `en/communication/a2/topics/describing-people-and-places-in-conversation.html` | English (`en`) | HTML | 6562 B (6.4 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/describing-people-and-places-in-conversation.html` |
| `en/communication/a2/topics/describing-symptoms-and-asking-for-help.html` | English (`en`) | HTML | 6378 B (6.2 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/describing-symptoms-and-asking-for-help.html` |
| `en/communication/a2/topics/getting-things-done-transactions.html` | English (`en`) | HTML | 6560 B (6.4 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/getting-things-done-transactions.html` |
| `en/communication/a2/topics/giving-simple-advice.html` | English (`en`) | HTML | 6363 B (6.2 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/giving-simple-advice.html` |
| `en/communication/a2/topics/making-plans-together.html` | English (`en`) | HTML | 6401 B (6.3 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/making-plans-together.html` |
| `en/communication/a2/topics/putting-it-together-a-full-everyday-exchange.html` | English (`en`) | HTML | 6499 B (6.3 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/putting-it-together-a-full-everyday-exchange.html` |
| `en/communication/a2/topics/talking-on-the-phone.html` | English (`en`) | HTML | 6566 B (6.4 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/talking-on-the-phone.html` |
| `en/communication/a2/topics/telling-a-simple-story.html` | English (`en`) | HTML | 6457 B (6.3 KB) | Topic Manual Module | `manuals/en/communication/a2/topics/telling-a-simple-story.html` |
| `en/communication/a2/assets/app.js` | English (`en`) | JS | 3529 B (3.4 KB) | JavaScript Application Logic | `manuals/en/communication/a2/assets/app.js` |
| `en/communication/a2/assets/style.css` | English (`en`) | CSS | 11720 B (11.4 KB) | CSS Stylesheet | `manuals/en/communication/a2/assets/style.css` |
| `en/communication/c2/index.html` | English (`en`) | HTML | 3771 B (3.7 KB) | Hub / Section Index | `manuals/en/communication/c2/index.html` |
| `en/communication/c2/part-1.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-1.html` |
| `en/communication/c2/part-10.html` | English (`en`) | HTML | 1492 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-10.html` |
| `en/communication/c2/part-2.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-2.html` |
| `en/communication/c2/part-3.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-3.html` |
| `en/communication/c2/part-4.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-4.html` |
| `en/communication/c2/part-5.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-5.html` |
| `en/communication/c2/part-6.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-6.html` |
| `en/communication/c2/part-7.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-7.html` |
| `en/communication/c2/part-8.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-8.html` |
| `en/communication/c2/part-9.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Hub / Section Index | `manuals/en/communication/c2/part-9.html` |
| `en/communication/c2/topics/chairing-a-high-stakes-multi-party-discussion.html` | English (`en`) | HTML | 6174 B (6.0 KB) | Topic Manual Module | `manuals/en/communication/c2/topics/chairing-a-high-stakes-multi-party-discussion.html` |
| `en/communication/c2/topics/code-switching-register-mid-conversation.html` | English (`en`) | HTML | 5924 B (5.8 KB) | Topic Manual Module | `manuals/en/communication/c2/topics/code-switching-register-mid-conversation.html` |
| `en/communication/c2/topics/delivering-a-keynote-address.html` | English (`en`) | HTML | 5802 B (5.7 KB) | Topic Manual Module | `manuals/en/communication/c2/topics/delivering-a-keynote-address.html` |
| `en/communication/c2/topics/navigating-irony-and-understatement-in-real-time.html` | English (`en`) | HTML | 6089 B (5.9 KB) | Topic Manual Module | `manuals/en/communication/c2/topics/navigating-irony-and-understatement-in-real-time.html` |
| `en/communication/c2/topics/synthesising-conflicting-sources-into-fluent-spoken-argument.html` | English (`en`) | HTML | 6282 B (6.1 KB) | Topic Manual Module | `manuals/en/communication/c2/topics/synthesising-conflicting-sources-into-fluent-spoken-argument.html` |
| `en/communication/c2/assets/app.js` | English (`en`) | JS | 3529 B (3.4 KB) | JavaScript Application Logic | `manuals/en/communication/c2/assets/app.js` |
| `en/communication/c2/assets/style.css` | English (`en`) | CSS | 14028 B (13.7 KB) | CSS Stylesheet | `manuals/en/communication/c2/assets/style.css` |
| `en/communication/b1/index.html` | English (`en`) | HTML | 19369 B (18.9 KB) | Hub / Section Index | `manuals/en/communication/b1/index.html` |
| `en/communication/b1/part-1.html` | English (`en`) | HTML | 2406 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b1/part-1.html` |
| `en/communication/b1/part-10.html` | English (`en`) | HTML | 2436 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b1/part-10.html` |
| `en/communication/b1/part-2.html` | English (`en`) | HTML | 2473 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b1/part-2.html` |
| `en/communication/b1/part-3.html` | English (`en`) | HTML | 2412 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b1/part-3.html` |
| `en/communication/b1/part-4.html` | English (`en`) | HTML | 2391 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b1/part-4.html` |
| `en/communication/b1/part-5.html` | English (`en`) | HTML | 2394 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b1/part-5.html` |
| `en/communication/b1/part-6.html` | English (`en`) | HTML | 2422 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b1/part-6.html` |
| `en/communication/b1/part-7.html` | English (`en`) | HTML | 2418 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b1/part-7.html` |
| `en/communication/b1/part-8.html` | English (`en`) | HTML | 2454 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/b1/part-8.html` |
| `en/communication/b1/part-9.html` | English (`en`) | HTML | 2390 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/b1/part-9.html` |
| `en/communication/b1/topics/accepting-criticism-gracefully.html` | English (`en`) | HTML | 7126 B (7.0 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/accepting-criticism-gracefully.html` |
| `en/communication/b1/topics/apologizing-for-errors.html` | English (`en`) | HTML | 7049 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/apologizing-for-errors.html` |
| `en/communication/b1/topics/asking-for-advice.html` | English (`en`) | HTML | 6886 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/asking-for-advice.html` |
| `en/communication/b1/topics/asking-for-clarification.html` | English (`en`) | HTML | 6982 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/asking-for-clarification.html` |
| `en/communication/b1/topics/asking-for-favors.html` | English (`en`) | HTML | 6913 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/asking-for-favors.html` |
| `en/communication/b1/topics/asking-for-permission.html` | English (`en`) | HTML | 6808 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/asking-for-permission.html` |
| `en/communication/b1/topics/checking-progress.html` | English (`en`) | HTML | 6872 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/checking-progress.html` |
| `en/communication/b1/topics/comparing-alternatives.html` | English (`en`) | HTML | 7101 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/comparing-alternatives.html` |
| `en/communication/b1/topics/congratulating-and-celebrating.html` | English (`en`) | HTML | 6859 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/congratulating-and-celebrating.html` |
| `en/communication/b1/topics/delivering-bad-news.html` | English (`en`) | HTML | 6958 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/delivering-bad-news.html` |
| `en/communication/b1/topics/describing-and-comparing-a-photo-long-turn.html` | English (`en`) | HTML | 6811 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/describing-and-comparing-a-photo-long-turn.html` |
| `en/communication/b1/topics/describing-problems-in-detail.html` | English (`en`) | HTML | 6997 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/describing-problems-in-detail.html` |
| `en/communication/b1/topics/discussing-advantages-and-disadvantages.html` | English (`en`) | HTML | 6737 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/discussing-advantages-and-disadvantages.html` |
| `en/communication/b1/topics/explaining-complex-opinions.html` | English (`en`) | HTML | 7101 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/explaining-complex-opinions.html` |
| `en/communication/b1/topics/expressing-agreement.html` | English (`en`) | HTML | 6895 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/expressing-agreement.html` |
| `en/communication/b1/topics/expressing-deep-sympathy.html` | English (`en`) | HTML | 6926 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/expressing-deep-sympathy.html` |
| `en/communication/b1/topics/expressing-gratitude.html` | English (`en`) | HTML | 6835 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/expressing-gratitude.html` |
| `en/communication/b1/topics/expressing-hypothetical-situations.html` | English (`en`) | HTML | 6673 B (6.5 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/expressing-hypothetical-situations.html` |
| `en/communication/b1/topics/expressing-polite-disagreement.html` | English (`en`) | HTML | 7109 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/expressing-polite-disagreement.html` |
| `en/communication/b1/topics/expressing-preferences.html` | English (`en`) | HTML | 6925 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/expressing-preferences.html` |
| `en/communication/b1/topics/expressing-uncertainty.html` | English (`en`) | HTML | 6948 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/expressing-uncertainty.html` |
| `en/communication/b1/topics/formal-vs-informal-register-switch.html` | English (`en`) | HTML | 7040 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/formal-vs-informal-register-switch.html` |
| `en/communication/b1/topics/giving-a-short-structured-talk.html` | English (`en`) | HTML | 6512 B (6.4 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/giving-a-short-structured-talk.html` |
| `en/communication/b1/topics/giving-advice.html` | English (`en`) | HTML | 6815 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/giving-advice.html` |
| `en/communication/b1/topics/giving-and-justifying-opinions-in-depth.html` | English (`en`) | HTML | 6786 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/giving-and-justifying-opinions-in-depth.html` |
| `en/communication/b1/topics/giving-constructive-feedback.html` | English (`en`) | HTML | 7094 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/giving-constructive-feedback.html` |
| `en/communication/b1/topics/giving-instructions.html` | English (`en`) | HTML | 6881 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/giving-instructions.html` |
| `en/communication/b1/topics/giving-presentations.html` | English (`en`) | HTML | 6968 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/giving-presentations.html` |
| `en/communication/b1/topics/handling-complaints.html` | English (`en`) | HTML | 7105 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/handling-complaints.html` |
| `en/communication/b1/topics/interrupting-politely.html` | English (`en`) | HTML | 6924 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/interrupting-politely.html` |
| `en/communication/b1/topics/job-interview-performance.html` | English (`en`) | HTML | 7109 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/job-interview-performance.html` |
| `en/communication/b1/topics/leaving-professional-messages.html` | English (`en`) | HTML | 7018 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/leaving-professional-messages.html` |
| `en/communication/b1/topics/making-formal-requests-and-complaints.html` | English (`en`) | HTML | 6787 B (6.6 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/making-formal-requests-and-complaints.html` |
| `en/communication/b1/topics/making-reservations.html` | English (`en`) | HTML | 6991 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/making-reservations.html` |
| `en/communication/b1/topics/making-suggestions.html` | English (`en`) | HTML | 6945 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/making-suggestions.html` |
| `en/communication/b1/topics/narrating-complex-past-experiences.html` | English (`en`) | HTML | 6840 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/narrating-complex-past-experiences.html` |
| `en/communication/b1/topics/negotiating-a-joint-decision.html` | English (`en`) | HTML | 6912 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/negotiating-a-joint-decision.html` |
| `en/communication/b1/topics/negotiating-trade-offs.html` | English (`en`) | HTML | 6930 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/negotiating-trade-offs.html` |
| `en/communication/b1/topics/networking-at-conferences.html` | English (`en`) | HTML | 7008 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/networking-at-conferences.html` |
| `en/communication/b1/topics/participating-in-group-discussions.html` | English (`en`) | HTML | 7060 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/participating-in-group-discussions.html` |
| `en/communication/b1/topics/persuading-and-convincing.html` | English (`en`) | HTML | 6949 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/persuading-and-convincing.html` |
| `en/communication/b1/topics/public-announcements-handling.html` | English (`en`) | HTML | 6970 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/public-announcements-handling.html` |
| `en/communication/b1/topics/rejecting-proposals-politely.html` | English (`en`) | HTML | 7115 B (6.9 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/rejecting-proposals-politely.html` |
| `en/communication/b1/topics/reporting-what-someone-said.html` | English (`en`) | HTML | 6611 B (6.5 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/reporting-what-someone-said.html` |
| `en/communication/b1/topics/speculating-on-options.html` | English (`en`) | HTML | 6938 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/speculating-on-options.html` |
| `en/communication/b1/topics/summarizing-meetings.html` | English (`en`) | HTML | 6961 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/summarizing-meetings.html` |
| `en/communication/b1/topics/talking-about-future-plans-and-predictions.html` | English (`en`) | HTML | 6469 B (6.3 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/talking-about-future-plans-and-predictions.html` |
| `en/communication/b1/topics/telephone-professional-english.html` | English (`en`) | HTML | 6867 B (6.7 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/telephone-professional-english.html` |
| `en/communication/b1/topics/video-call-etiquette.html` | English (`en`) | HTML | 6982 B (6.8 KB) | Topic Manual Module | `manuals/en/communication/b1/topics/video-call-etiquette.html` |
| `en/communication/b1/assets/app.js` | English (`en`) | JS | 3529 B (3.4 KB) | JavaScript Application Logic | `manuals/en/communication/b1/assets/app.js` |
| `en/communication/b1/assets/style.css` | English (`en`) | CSS | 11720 B (11.4 KB) | CSS Stylesheet | `manuals/en/communication/b1/assets/style.css` |
| `en/communication/a1/index.html` | English (`en`) | HTML | 5509 B (5.4 KB) | Hub / Section Index | `manuals/en/communication/a1/index.html` |
| `en/communication/a1/part-1.html` | English (`en`) | HTML | 2364 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a1/part-1.html` |
| `en/communication/a1/part-10.html` | English (`en`) | HTML | 2476 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-10.html` |
| `en/communication/a1/part-2.html` | English (`en`) | HTML | 2339 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a1/part-2.html` |
| `en/communication/a1/part-3.html` | English (`en`) | HTML | 2387 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a1/part-3.html` |
| `en/communication/a1/part-4.html` | English (`en`) | HTML | 2420 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-4.html` |
| `en/communication/a1/part-5.html` | English (`en`) | HTML | 2338 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a1/part-5.html` |
| `en/communication/a1/part-6.html` | English (`en`) | HTML | 2398 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a1/part-6.html` |
| `en/communication/a1/part-7.html` | English (`en`) | HTML | 2417 B (2.4 KB) | Hub / Section Index | `manuals/en/communication/a1/part-7.html` |
| `en/communication/a1/part-8.html` | English (`en`) | HTML | 2394 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a1/part-8.html` |
| `en/communication/a1/part-9.html` | English (`en`) | HTML | 2389 B (2.3 KB) | Hub / Section Index | `manuals/en/communication/a1/part-9.html` |
| `en/communication/a1/topics/asking-for-and-giving-directions.html` | English (`en`) | HTML | 5351 B (5.2 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/asking-for-and-giving-directions.html` |
| `en/communication/a1/topics/asking-simple-questions.html` | English (`en`) | HTML | 5896 B (5.8 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/asking-simple-questions.html` |
| `en/communication/a1/topics/basic-clarification-and-repair.html` | English (`en`) | HTML | 5262 B (5.1 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/basic-clarification-and-repair.html` |
| `en/communication/a1/topics/basic-shopping-phrases.html` | English (`en`) | HTML | 5226 B (5.1 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/basic-shopping-phrases.html` |
| `en/communication/a1/topics/everyday-exchanges-capstone.html` | English (`en`) | HTML | 5433 B (5.3 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/everyday-exchanges-capstone.html` |
| `en/communication/a1/topics/expressing-likes-and-dislikes.html` | English (`en`) | HTML | 5271 B (5.1 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/expressing-likes-and-dislikes.html` |
| `en/communication/a1/topics/greetings-and-introductions.html` | English (`en`) | HTML | 8648 B (8.4 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/greetings-and-introductions.html` |
| `en/communication/a1/topics/keeping-simple-conversations-alive.html` | English (`en`) | HTML | 5166 B (5.0 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/keeping-simple-conversations-alive.html` |
| `en/communication/a1/topics/ordering-food-and-drinks.html` | English (`en`) | HTML | 5924 B (5.8 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/ordering-food-and-drinks.html` |
| `en/communication/a1/topics/simple-phone-and-messaging.html` | English (`en`) | HTML | 5287 B (5.2 KB) | Topic Manual Module | `manuals/en/communication/a1/topics/simple-phone-and-messaging.html` |
| `en/communication/a1/assets/app.js` | English (`en`) | JS | 3532 B (3.4 KB) | JavaScript Application Logic | `manuals/en/communication/a1/assets/app.js` |
| `en/communication/a1/assets/style.css` | English (`en`) | CSS | 14031 B (13.7 KB) | CSS Stylesheet | `manuals/en/communication/a1/assets/style.css` |
| `en/grammar/c1/index.html` | English (`en`) | HTML | 2602 B (2.5 KB) | Hub / Section Index | `manuals/en/grammar/c1/index.html` |
| `en/grammar/c1/part-1.html` | English (`en`) | HTML | 2566 B (2.5 KB) | Hub / Section Index | `manuals/en/grammar/c1/part-1.html` |
| `en/grammar/c1/part-2.html` | English (`en`) | HTML | 3379 B (3.3 KB) | Hub / Section Index | `manuals/en/grammar/c1/part-2.html` |
| `en/grammar/c1/topics/advanced-hedging-and-academic-stance-devices.html` | English (`en`) | HTML | 6612 B (6.5 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/advanced-hedging-and-academic-stance-devices.html` |
| `en/grammar/c1/topics/advanced-punctuation-mechanics.html` | English (`en`) | HTML | 6582 B (6.4 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/advanced-punctuation-mechanics.html` |
| `en/grammar/c1/topics/cohesion-ellipsis-and-lexical-substitution.html` | English (`en`) | HTML | 6663 B (6.5 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/cohesion-ellipsis-and-lexical-substitution.html` |
| `en/grammar/c1/topics/modality-for-speculation-deduction-and-certainty.html` | English (`en`) | HTML | 6628 B (6.5 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/modality-for-speculation-deduction-and-certainty.html` |
| `en/grammar/c1/topics/sentence-variety-periodic-loose-and-balanced.html` | English (`en`) | HTML | 6940 B (6.8 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/sentence-variety-periodic-loose-and-balanced.html` |
| `en/grammar/c1/topics/theme-rheme-and-information-packaging.html` | English (`en`) | HTML | 6710 B (6.6 KB) | Topic Manual Module | `manuals/en/grammar/c1/topics/theme-rheme-and-information-packaging.html` |
| `en/grammar/c1/assets/app.js` | English (`en`) | JS | 3189 B (3.1 KB) | JavaScript Application Logic | `manuals/en/grammar/c1/assets/app.js` |
| `en/grammar/c1/assets/style.css` | English (`en`) | CSS | 10056 B (9.8 KB) | CSS Stylesheet | `manuals/en/grammar/c1/assets/style.css` |
| `en/grammar/b2/appendix.html` | English (`en`) | HTML | 2650 B (2.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/appendix.html` |
| `en/grammar/b2/index.html` | English (`en`) | HTML | 6736 B (6.6 KB) | Hub / Section Index | `manuals/en/grammar/b2/index.html` |
| `en/grammar/b2/part-0.html` | English (`en`) | HTML | 2732 B (2.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/part-0.html` |
| `en/grammar/b2/part-1.html` | English (`en`) | HTML | 2810 B (2.7 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-1.html` |
| `en/grammar/b2/part-10.html` | English (`en`) | HTML | 3381 B (3.3 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-10.html` |
| `en/grammar/b2/part-11.html` | English (`en`) | HTML | 2907 B (2.8 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-11.html` |
| `en/grammar/b2/part-2.html` | English (`en`) | HTML | 3047 B (3.0 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-2.html` |
| `en/grammar/b2/part-3.html` | English (`en`) | HTML | 3166 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-3.html` |
| `en/grammar/b2/part-4.html` | English (`en`) | HTML | 3185 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-4.html` |
| `en/grammar/b2/part-5.html` | English (`en`) | HTML | 2841 B (2.8 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-5.html` |
| `en/grammar/b2/part-6.html` | English (`en`) | HTML | 2844 B (2.8 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-6.html` |
| `en/grammar/b2/part-7.html` | English (`en`) | HTML | 3291 B (3.2 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-7.html` |
| `en/grammar/b2/part-8.html` | English (`en`) | HTML | 3125 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-8.html` |
| `en/grammar/b2/part-9.html` | English (`en`) | HTML | 3082 B (3.0 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-9.html` |
| `en/grammar/b2/topics/adverbs-position-and-types.html` | English (`en`) | HTML | 5878 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/adverbs-position-and-types.html` |
| `en/grammar/b2/topics/alternatives-to-if.html` | English (`en`) | HTML | 5702 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/alternatives-to-if.html` |
| `en/grammar/b2/topics/clauses-of-contrast-purpose-reason-and-result.html` | English (`en`) | HTML | 6061 B (5.9 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/clauses-of-contrast-purpose-reason-and-result.html` |
| `en/grammar/b2/topics/cleft-sentences-and-emphasis.html` | English (`en`) | HTML | 5902 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/cleft-sentences-and-emphasis.html` |
| `en/grammar/b2/topics/compound-nouns.html` | English (`en`) | HTML | 5700 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/compound-nouns.html` |
| `en/grammar/b2/topics/conditional-inversion.html` | English (`en`) | HTML | 5715 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/conditional-inversion.html` |
| `en/grammar/b2/topics/dependent-prepositions-noun-preposition.html` | English (`en`) | HTML | 6015 B (5.9 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/dependent-prepositions-noun-preposition.html` |
| `en/grammar/b2/topics/discourse-markers.html` | English (`en`) | HTML | 6580 B (6.4 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/discourse-markers.html` |
| `en/grammar/b2/topics/distancing-passive-reporting.html` | English (`en`) | HTML | 5872 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/distancing-passive-reporting.html` |
| `en/grammar/b2/topics/formal-vs-informal-register.html` | English (`en`) | HTML | 5731 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/formal-vs-informal-register.html` |
| `en/grammar/b2/topics/future-forms-expressing-future-time.html` | English (`en`) | HTML | 5933 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/future-forms-expressing-future-time.html` |
| `en/grammar/b2/topics/future-in-the-past.html` | English (`en`) | HTML | 5754 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/future-in-the-past.html` |
| `en/grammar/b2/topics/generic-common-gender-pronouns.html` | English (`en`) | HTML | 5874 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/generic-common-gender-pronouns.html` |
| `en/grammar/b2/topics/gerunds-and-infinitives-complex-forms.html` | English (`en`) | HTML | 5995 B (5.9 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/gerunds-and-infinitives-complex-forms.html` |
| `en/grammar/b2/topics/get-different-meanings.html` | English (`en`) | HTML | 5782 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/get-different-meanings.html` |
| `en/grammar/b2/topics/gradable-vs-extreme-adjectives.html` | English (`en`) | HTML | 5870 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/gradable-vs-extreme-adjectives.html` |
| `en/grammar/b2/topics/inversion-after-negative-adverbials.html` | English (`en`) | HTML | 6759 B (6.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/inversion-after-negative-adverbials.html` |
| `en/grammar/b2/topics/its-time.html` | English (`en`) | HTML | 5596 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/its-time.html` |
| `en/grammar/b2/topics/mandative-subjunctive.html` | English (`en`) | HTML | 7888 B (7.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/mandative-subjunctive.html` |
| `en/grammar/b2/topics/mixed-conditionals.html` | English (`en`) | HTML | 5704 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/mixed-conditionals.html` |
| `en/grammar/b2/topics/narrative-tenses.html` | English (`en`) | HTML | 5666 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/narrative-tenses.html` |
| `en/grammar/b2/topics/order-of-adjectives.html` | English (`en`) | HTML | 5733 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/order-of-adjectives.html` |
| `en/grammar/b2/topics/other-ways-to-express-future.html` | English (`en`) | HTML | 5860 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/other-ways-to-express-future.html` |
| `en/grammar/b2/topics/participle-clauses.html` | English (`en`) | HTML | 5746 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/participle-clauses.html` |
| `en/grammar/b2/topics/passive-verbs-with-two-objects.html` | English (`en`) | HTML | 5852 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/passive-verbs-with-two-objects.html` |
| `en/grammar/b2/topics/past-tenses-review.html` | English (`en`) | HTML | 6269 B (6.1 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/past-tenses-review.html` |
| `en/grammar/b2/topics/permission-obligation-and-prohibition.html` | English (`en`) | HTML | 5977 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/permission-obligation-and-prohibition.html` |
| `en/grammar/b2/topics/phrasal-verbs-extended-patterns.html` | English (`en`) | HTML | 5925 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/phrasal-verbs-extended-patterns.html` |
| `en/grammar/b2/topics/possessive-s-with-time-expressions.html` | English (`en`) | HTML | 5934 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/possessive-s-with-time-expressions.html` |
| `en/grammar/b2/topics/present-tenses-review.html` | English (`en`) | HTML | 6177 B (6.0 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/present-tenses-review.html` |
| `en/grammar/b2/topics/reflexive-and-reciprocal-pronouns.html` | English (`en`) | HTML | 5953 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/reflexive-and-reciprocal-pronouns.html` |
| `en/grammar/b2/topics/relative-clauses-review-and-deepening.html` | English (`en`) | HTML | 7173 B (7.0 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/relative-clauses-review-and-deepening.html` |
| `en/grammar/b2/topics/speculation-and-deduction-deepening.html` | English (`en`) | HTML | 5963 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/speculation-and-deduction-deepening.html` |
| `en/grammar/b2/topics/used-to-vs-would.html` | English (`en`) | HTML | 5700 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/used-to-vs-would.html` |
| `en/grammar/b2/topics/verb-object-infinitive-gerund.html` | English (`en`) | HTML | 5897 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/verb-object-infinitive-gerund.html` |
| `en/grammar/b2/topics/whatever-whenever-wherever-whoever-however.html` | English (`en`) | HTML | 6046 B (5.9 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/whatever-whenever-wherever-whoever-however.html` |
| `en/grammar/b2/assets/app.js` | English (`en`) | JS | 4189 B (4.1 KB) | JavaScript Application Logic | `manuals/en/grammar/b2/assets/app.js` |
| `en/grammar/b2/assets/style.css` | English (`en`) | CSS | 18749 B (18.3 KB) | CSS Stylesheet | `manuals/en/grammar/b2/assets/style.css` |
| `en/grammar/a2/appendix.html` | English (`en`) | HTML | 2549 B (2.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/appendix.html` |
| `en/grammar/a2/index.html` | English (`en`) | HTML | 5168 B (5.0 KB) | Hub / Section Index | `manuals/en/grammar/a2/index.html` |
| `en/grammar/a2/part-0.html` | English (`en`) | HTML | 2630 B (2.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/part-0.html` |
| `en/grammar/a2/part-1.html` | English (`en`) | HTML | 3601 B (3.5 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-1.html` |
| `en/grammar/a2/part-2.html` | English (`en`) | HTML | 3186 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-2.html` |
| `en/grammar/a2/part-3.html` | English (`en`) | HTML | 3217 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-3.html` |
| `en/grammar/a2/part-4.html` | English (`en`) | HTML | 4245 B (4.1 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-4.html` |
| `en/grammar/a2/part-5.html` | English (`en`) | HTML | 3235 B (3.2 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-5.html` |
| `en/grammar/a2/part-6.html` | English (`en`) | HTML | 3417 B (3.3 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-6.html` |
| `en/grammar/a2/part-7.html` | English (`en`) | HTML | 3959 B (3.9 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-7.html` |
| `en/grammar/a2/topics/as-as.html` | English (`en`) | HTML | 5281 B (5.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/as-as.html` |
| `en/grammar/a2/topics/comparatives-and-superlatives.html` | English (`en`) | HTML | 5537 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/comparatives-and-superlatives.html` |
| `en/grammar/a2/topics/could.html` | English (`en`) | HTML | 6849 B (6.7 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/could.html` |
| `en/grammar/a2/topics/defining-relative-clauses.html` | English (`en`) | HTML | 7253 B (7.1 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/defining-relative-clauses.html` |
| `en/grammar/a2/topics/do-vs-make.html` | English (`en`) | HTML | 6263 B (6.1 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/do-vs-make.html` |
| `en/grammar/a2/topics/either-or-neither-nor-both-and.html` | English (`en`) | HTML | 5572 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/either-or-neither-nor-both-and.html` |
| `en/grammar/a2/topics/expressing-purpose-to-for.html` | English (`en`) | HTML | 6108 B (6.0 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/expressing-purpose-to-for.html` |
| `en/grammar/a2/topics/first-conditional.html` | English (`en`) | HTML | 5397 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/first-conditional.html` |
| `en/grammar/a2/topics/future-time-clauses.html` | English (`en`) | HTML | 6230 B (6.1 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/future-time-clauses.html` |
| `en/grammar/a2/topics/have-to-must-mustnt.html` | English (`en`) | HTML | 6962 B (6.8 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/have-to-must-mustnt.html` |
| `en/grammar/a2/topics/how-questions.html` | English (`en`) | HTML | 5353 B (5.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/how-questions.html` |
| `en/grammar/a2/topics/however-although-because-so.html` | English (`en`) | HTML | 5567 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/however-although-because-so.html` |
| `en/grammar/a2/topics/indefinite-pronouns.html` | English (`en`) | HTML | 5425 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/indefinite-pronouns.html` |
| `en/grammar/a2/topics/infinitives-and-gerunds.html` | English (`en`) | HTML | 6359 B (6.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/infinitives-and-gerunds.html` |
| `en/grammar/a2/topics/may-might.html` | English (`en`) | HTML | 6738 B (6.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/may-might.html` |
| `en/grammar/a2/topics/most-most-of-the-most.html` | English (`en`) | HTML | 5467 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/most-most-of-the-most.html` |
| `en/grammar/a2/topics/much-many-little-few.html` | English (`en`) | HTML | 5434 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/much-many-little-few.html` |
| `en/grammar/a2/topics/no-longer-any-longer-anymore.html` | English (`en`) | HTML | 6106 B (6.0 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/no-longer-any-longer-anymore.html` |
| `en/grammar/a2/topics/on-time-in-time-at-the-end-in-the-end.html` | English (`en`) | HTML | 5653 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/on-time-in-time-at-the-end-in-the-end.html` |
| `en/grammar/a2/topics/past-continuous.html` | English (`en`) | HTML | 6061 B (5.9 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-continuous.html` |
| `en/grammar/a2/topics/past-participles-1.html` | English (`en`) | HTML | 5452 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-participles-1.html` |
| `en/grammar/a2/topics/past-participles-2.html` | English (`en`) | HTML | 5306 B (5.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-participles-2.html` |
| `en/grammar/a2/topics/past-perfect.html` | English (`en`) | HTML | 6309 B (6.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-perfect.html` |
| `en/grammar/a2/topics/past-simple-review.html` | English (`en`) | HTML | 6086 B (5.9 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-simple-review.html` |
| `en/grammar/a2/topics/past-simple-vs-past-continuous.html` | English (`en`) | HTML | 6510 B (6.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-simple-vs-past-continuous.html` |
| `en/grammar/a2/topics/prepositions-of-movement.html` | English (`en`) | HTML | 5500 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/prepositions-of-movement.html` |
| `en/grammar/a2/topics/present-and-past-simple-passive.html` | English (`en`) | HTML | 5577 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-and-past-simple-passive.html` |
| `en/grammar/a2/topics/present-continuous-for-future.html` | English (`en`) | HTML | 5714 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-continuous-for-future.html` |
| `en/grammar/a2/topics/present-perfect-ever-never-for-since.html` | English (`en`) | HTML | 7058 B (6.9 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-ever-never-for-since.html` |
| `en/grammar/a2/topics/present-perfect-form-use.html` | English (`en`) | HTML | 6819 B (6.7 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-form-use.html` |
| `en/grammar/a2/topics/present-perfect-just-already-yet.html` | English (`en`) | HTML | 6158 B (6.0 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-just-already-yet.html` |
| `en/grammar/a2/topics/present-perfect-vs-past-simple.html` | English (`en`) | HTML | 6259 B (6.1 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-vs-past-simple.html` |
| `en/grammar/a2/topics/present-simple-vs-present-continuous.html` | English (`en`) | HTML | 6790 B (6.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-simple-vs-present-continuous.html` |
| `en/grammar/a2/topics/pronouns-review.html` | English (`en`) | HTML | 6646 B (6.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/pronouns-review.html` |
| `en/grammar/a2/topics/question-forms.html` | English (`en`) | HTML | 5390 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/question-forms.html` |
| `en/grammar/a2/topics/reported-speech.html` | English (`en`) | HTML | 5403 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/reported-speech.html` |
| `en/grammar/a2/topics/review-of-verb-tenses.html` | English (`en`) | HTML | 6901 B (6.7 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/review-of-verb-tenses.html` |
| `en/grammar/a2/topics/second-conditional.html` | English (`en`) | HTML | 5438 B (5.3 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/second-conditional.html` |
| `en/grammar/a2/topics/should-shouldnt.html` | English (`en`) | HTML | 6102 B (6.0 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/should-shouldnt.html` |
| `en/grammar/a2/topics/so-neither.html` | English (`en`) | HTML | 5348 B (5.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/so-neither.html` |
| `en/grammar/a2/topics/too-and-enough.html` | English (`en`) | HTML | 6177 B (6.0 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/too-and-enough.html` |
| `en/grammar/a2/topics/used-to.html` | English (`en`) | HTML | 6827 B (6.7 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/used-to.html` |
| `en/grammar/a2/topics/uses-of-get.html` | English (`en`) | HTML | 5303 B (5.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/uses-of-get.html` |
| `en/grammar/a2/topics/uses-of-go.html` | English (`en`) | HTML | 5280 B (5.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/uses-of-go.html` |
| `en/grammar/a2/topics/will-vs-going-to.html` | English (`en`) | HTML | 6356 B (6.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/will-vs-going-to.html` |
| `en/grammar/a2/topics/zero-conditional.html` | English (`en`) | HTML | 5372 B (5.2 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/zero-conditional.html` |
| `en/grammar/a2/assets/app.js` | English (`en`) | JS | 4189 B (4.1 KB) | JavaScript Application Logic | `manuals/en/grammar/a2/assets/app.js` |
| `en/grammar/a2/assets/style.css` | English (`en`) | CSS | 19929 B (19.5 KB) | CSS Stylesheet | `manuals/en/grammar/a2/assets/style.css` |
| `en/grammar/c2/index.html` | English (`en`) | HTML | 2379 B (2.3 KB) | Hub / Section Index | `manuals/en/grammar/c2/index.html` |
| `en/grammar/c2/part-1.html` | English (`en`) | HTML | 3018 B (2.9 KB) | Hub / Section Index | `manuals/en/grammar/c2/part-1.html` |
| `en/grammar/c2/part-2.html` | English (`en`) | HTML | 2993 B (2.9 KB) | Hub / Section Index | `manuals/en/grammar/c2/part-2.html` |
| `en/grammar/c2/topics/ellipsis-and-substitution-for-native-like-economy.html` | English (`en`) | HTML | 9198 B (9.0 KB) | Topic Manual Module | `manuals/en/grammar/c2/topics/ellipsis-and-substitution-for-native-like-economy.html` |
| `en/grammar/c2/topics/literary-and-formal-sentence-patterns.html` | English (`en`) | HTML | 9485 B (9.3 KB) | Topic Manual Module | `manuals/en/grammar/c2/topics/literary-and-formal-sentence-patterns.html` |
| `en/grammar/c2/topics/nominalisation-for-academic-and-executive-density.html` | English (`en`) | HTML | 9263 B (9.0 KB) | Topic Manual Module | `manuals/en/grammar/c2/topics/nominalisation-for-academic-and-executive-density.html` |
| `en/grammar/c2/topics/rhetorical-fronting-and-inversion-for-effect.html` | English (`en`) | HTML | 8961 B (8.8 KB) | Topic Manual Module | `manuals/en/grammar/c2/topics/rhetorical-fronting-and-inversion-for-effect.html` |
| `en/grammar/c2/topics/self-correction-and-real-time-hedging-structures.html` | English (`en`) | HTML | 9224 B (9.0 KB) | Topic Manual Module | `manuals/en/grammar/c2/topics/self-correction-and-real-time-hedging-structures.html` |
| `en/grammar/c2/topics/stylistic-register-switching-and-tonal-control.html` | English (`en`) | HTML | 9526 B (9.3 KB) | Topic Manual Module | `manuals/en/grammar/c2/topics/stylistic-register-switching-and-tonal-control.html` |
| `en/grammar/c2/assets/app.js` | English (`en`) | JS | 3189 B (3.1 KB) | JavaScript Application Logic | `manuals/en/grammar/c2/assets/app.js` |
| `en/grammar/c2/assets/style.css` | English (`en`) | CSS | 10056 B (9.8 KB) | CSS Stylesheet | `manuals/en/grammar/c2/assets/style.css` |
| `en/grammar/b1/appendix.html` | English (`en`) | HTML | 2593 B (2.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/appendix.html` |
| `en/grammar/b1/index.html` | English (`en`) | HTML | 6269 B (6.1 KB) | Hub / Section Index | `manuals/en/grammar/b1/index.html` |
| `en/grammar/b1/part-0.html` | English (`en`) | HTML | 2723 B (2.7 KB) | Topic Manual Module | `manuals/en/grammar/b1/part-0.html` |
| `en/grammar/b1/part-1.html` | English (`en`) | HTML | 3262 B (3.2 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-1.html` |
| `en/grammar/b1/part-10.html` | English (`en`) | HTML | 2967 B (2.9 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-10.html` |
| `en/grammar/b1/part-2.html` | English (`en`) | HTML | 2876 B (2.8 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-2.html` |
| `en/grammar/b1/part-3.html` | English (`en`) | HTML | 3818 B (3.7 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-3.html` |
| `en/grammar/b1/part-4.html` | English (`en`) | HTML | 3084 B (3.0 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-4.html` |
| `en/grammar/b1/part-5.html` | English (`en`) | HTML | 3977 B (3.9 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-5.html` |
| `en/grammar/b1/part-6.html` | English (`en`) | HTML | 3595 B (3.5 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-6.html` |
| `en/grammar/b1/part-7.html` | English (`en`) | HTML | 3146 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-7.html` |
| `en/grammar/b1/part-8.html` | English (`en`) | HTML | 3078 B (3.0 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-8.html` |
| `en/grammar/b1/part-9.html` | English (`en`) | HTML | 3131 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-9.html` |
| `en/grammar/b1/topics/adjective-preposition.html` | English (`en`) | HTML | 5625 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/adjective-preposition.html` |
| `en/grammar/b1/topics/all-both-either-neither-none.html` | English (`en`) | HTML | 5748 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/all-both-either-neither-none.html` |
| `en/grammar/b1/topics/another-other-others-the-other.html` | English (`en`) | HTML | 5776 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/another-other-others-the-other.html` |
| `en/grammar/b1/topics/articles-deeper-rules.html` | English (`en`) | HTML | 5984 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/articles-deeper-rules.html` |
| `en/grammar/b1/topics/broader-intensifiers.html` | English (`en`) | HTML | 5626 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/broader-intensifiers.html` |
| `en/grammar/b1/topics/can-could-be-able-to.html` | English (`en`) | HTML | 5690 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/can-could-be-able-to.html` |
| `en/grammar/b1/topics/causative-have-get-something-done.html` | English (`en`) | HTML | 5803 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/causative-have-get-something-done.html` |
| `en/grammar/b1/topics/connectors-and-linking-words.html` | English (`en`) | HTML | 5618 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/connectors-and-linking-words.html` |
| `en/grammar/b1/topics/defining-vs-non-defining-relative-clauses.html` | English (`en`) | HTML | 6593 B (6.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/defining-vs-non-defining-relative-clauses.html` |
| `en/grammar/b1/topics/during-for-while.html` | English (`en`) | HTML | 5566 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/during-for-while.html` |
| `en/grammar/b1/topics/ed-ing-adjectives.html` | English (`en`) | HTML | 5974 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/ed-ing-adjectives.html` |
| `en/grammar/b1/topics/embedded-indirect-questions.html` | English (`en`) | HTML | 6317 B (6.2 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/embedded-indirect-questions.html` |
| `en/grammar/b1/topics/for-since-from.html` | English (`en`) | HTML | 5528 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/for-since-from.html` |
| `en/grammar/b1/topics/future-continuous.html` | English (`en`) | HTML | 5575 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/future-continuous.html` |
| `en/grammar/b1/topics/future-forms-review.html` | English (`en`) | HTML | 5656 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/future-forms-review.html` |
| `en/grammar/b1/topics/future-perfect.html` | English (`en`) | HTML | 5564 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/future-perfect.html` |
| `en/grammar/b1/topics/have-to-must-should-had-better.html` | English (`en`) | HTML | 5746 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/have-to-must-should-had-better.html` |
| `en/grammar/b1/topics/it-is-said-that.html` | English (`en`) | HTML | 5595 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/it-is-said-that.html` |
| `en/grammar/b1/topics/linking-words.html` | English (`en`) | HTML | 5571 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/linking-words.html` |
| `en/grammar/b1/topics/mixed-conditionals.html` | English (`en`) | HTML | 5580 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/mixed-conditionals.html` |
| `en/grammar/b1/topics/modals-of-deduction-past.html` | English (`en`) | HTML | 5732 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/modals-of-deduction-past.html` |
| `en/grammar/b1/topics/modals-of-deduction-present.html` | English (`en`) | HTML | 7610 B (7.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/modals-of-deduction-present.html` |
| `en/grammar/b1/topics/modifying-comparatives.html` | English (`en`) | HTML | 5650 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/modifying-comparatives.html` |
| `en/grammar/b1/topics/narrative-tenses.html` | English (`en`) | HTML | 6701 B (6.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/narrative-tenses.html` |
| `en/grammar/b1/topics/neednt-didnt-need-to-neednt-have.html` | English (`en`) | HTML | 5790 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/neednt-didnt-need-to-neednt-have.html` |
| `en/grammar/b1/topics/passive-continuous-and-perfect-tenses.html` | English (`en`) | HTML | 5871 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/passive-continuous-and-perfect-tenses.html` |
| `en/grammar/b1/topics/passive-simple-and-future-tenses.html` | English (`en`) | HTML | 5802 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/passive-simple-and-future-tenses.html` |
| `en/grammar/b1/topics/passive-with-modals.html` | English (`en`) | HTML | 5661 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/passive-with-modals.html` |
| `en/grammar/b1/topics/past-perfect-continuous.html` | English (`en`) | HTML | 5698 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/past-perfect-continuous.html` |
| `en/grammar/b1/topics/past-perfect.html` | English (`en`) | HTML | 5562 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/past-perfect.html` |
| `en/grammar/b1/topics/past-simple-vs-present-perfect.html` | English (`en`) | HTML | 6229 B (6.1 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/past-simple-vs-present-perfect.html` |
| `en/grammar/b1/topics/phrasal-verbs-grammar-patterns.html` | English (`en`) | HTML | 5782 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/phrasal-verbs-grammar-patterns.html` |
| `en/grammar/b1/topics/present-perfect-simple-vs-continuous.html` | English (`en`) | HTML | 5840 B (5.7 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/present-perfect-simple-vs-continuous.html` |
| `en/grammar/b1/topics/present-simple-vs-present-continuous.html` | English (`en`) | HTML | 6204 B (6.1 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/present-simple-vs-present-continuous.html` |
| `en/grammar/b1/topics/question-tags.html` | English (`en`) | HTML | 5897 B (5.8 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/question-tags.html` |
| `en/grammar/b1/topics/reflexive-pronouns.html` | English (`en`) | HTML | 5660 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reflexive-pronouns.html` |
| `en/grammar/b1/topics/reported-questions-and-commands.html` | English (`en`) | HTML | 5773 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reported-questions-and-commands.html` |
| `en/grammar/b1/topics/reported-speech-statements.html` | English (`en`) | HTML | 5726 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reported-speech-statements.html` |
| `en/grammar/b1/topics/reporting-verbs.html` | English (`en`) | HTML | 6397 B (6.2 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reporting-verbs.html` |
| `en/grammar/b1/topics/second-conditional.html` | English (`en`) | HTML | 5620 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/second-conditional.html` |
| `en/grammar/b1/topics/so-such-so-much-so-many.html` | English (`en`) | HTML | 5661 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/so-such-so-much-so-many.html` |
| `en/grammar/b1/topics/third-conditional.html` | English (`en`) | HTML | 5581 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/third-conditional.html` |
| `en/grammar/b1/topics/verb-preposition.html` | English (`en`) | HTML | 5578 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/verb-preposition.html` |
| `en/grammar/b1/topics/verbs-of-the-senses.html` | English (`en`) | HTML | 5651 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/verbs-of-the-senses.html` |
| `en/grammar/b1/topics/wh-questions-in-the-past.html` | English (`en`) | HTML | 5680 B (5.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/wh-questions-in-the-past.html` |
| `en/grammar/b1/topics/wish-if-only.html` | English (`en`) | HTML | 5544 B (5.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/wish-if-only.html` |
| `en/grammar/b1/topics/would-rather-would-sooner.html` | English (`en`) | HTML | 5725 B (5.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/would-rather-would-sooner.html` |
| `en/grammar/b1/assets/app.js` | English (`en`) | JS | 4189 B (4.1 KB) | JavaScript Application Logic | `manuals/en/grammar/b1/assets/app.js` |
| `en/grammar/b1/assets/style.css` | English (`en`) | CSS | 18749 B (18.3 KB) | CSS Stylesheet | `manuals/en/grammar/b1/assets/style.css` |
| `en/grammar/a1/A1_REVISION_ROADMAP.md` | English (`en`) | MD | 3829 B (3.7 KB) | Markdown Documentation / Template | `manuals/en/grammar/a1/A1_REVISION_ROADMAP.md` |
| `en/grammar/a1/GRAMMAR_STANDARD.md` | English (`en`) | MD | 8118 B (7.9 KB) | Markdown Documentation / Template | `manuals/en/grammar/a1/GRAMMAR_STANDARD.md` |
| `en/grammar/a1/appendix.html` | English (`en`) | HTML | 2265 B (2.2 KB) | Topic Manual Module | `manuals/en/grammar/a1/appendix.html` |
| `en/grammar/a1/index.html` | English (`en`) | HTML | 6619 B (6.5 KB) | Hub / Section Index | `manuals/en/grammar/a1/index.html` |
| `en/grammar/a1/part-1.html` | English (`en`) | HTML | 3234 B (3.2 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-1.html` |
| `en/grammar/a1/part-10.html` | English (`en`) | HTML | 3174 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-10.html` |
| `en/grammar/a1/part-11.html` | English (`en`) | HTML | 3192 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-11.html` |
| `en/grammar/a1/part-2.html` | English (`en`) | HTML | 3207 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-2.html` |
| `en/grammar/a1/part-3.html` | English (`en`) | HTML | 3217 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-3.html` |
| `en/grammar/a1/part-4.html` | English (`en`) | HTML | 3171 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-4.html` |
| `en/grammar/a1/part-5.html` | English (`en`) | HTML | 3213 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-5.html` |
| `en/grammar/a1/part-6.html` | English (`en`) | HTML | 3103 B (3.0 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-6.html` |
| `en/grammar/a1/part-7.html` | English (`en`) | HTML | 3109 B (3.0 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-7.html` |
| `en/grammar/a1/part-8.html` | English (`en`) | HTML | 3177 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-8.html` |
| `en/grammar/a1/part-9.html` | English (`en`) | HTML | 3165 B (3.1 KB) | Hub / Section Index | `manuals/en/grammar/a1/part-9.html` |
| `en/grammar/a1/topics/adjectives.html` | English (`en`) | HTML | 7104 B (6.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/adjectives.html` |
| `en/grammar/a1/topics/adverbs-frequency.html` | English (`en`) | HTML | 8119 B (7.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/adverbs-frequency.html` |
| `en/grammar/a1/topics/adverbs-manner.html` | English (`en`) | HTML | 7884 B (7.7 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/adverbs-manner.html` |
| `en/grammar/a1/topics/all-both-none.html` | English (`en`) | HTML | 7547 B (7.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/all-both-none.html` |
| `en/grammar/a1/topics/articles.html` | English (`en`) | HTML | 8540 B (8.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/articles.html` |
| `en/grammar/a1/topics/can-cant.html` | English (`en`) | HTML | 7495 B (7.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/can-cant.html` |
| `en/grammar/a1/topics/comparative-adjectives.html` | English (`en`) | HTML | 8120 B (7.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/comparative-adjectives.html` |
| `en/grammar/a1/topics/conjunctions.html` | English (`en`) | HTML | 6803 B (6.6 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/conjunctions.html` |
| `en/grammar/a1/topics/could-couldnt.html` | English (`en`) | HTML | 7667 B (7.5 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/could-couldnt.html` |
| `en/grammar/a1/topics/countable-uncountable.html` | English (`en`) | HTML | 7665 B (7.5 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/countable-uncountable.html` |
| `en/grammar/a1/topics/demonstratives.html` | English (`en`) | HTML | 7738 B (7.6 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/demonstratives.html` |
| `en/grammar/a1/topics/english-around-world.html` | English (`en`) | HTML | 8071 B (7.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/english-around-world.html` |
| `en/grammar/a1/topics/going-to.html` | English (`en`) | HTML | 7418 B (7.2 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/going-to.html` |
| `en/grammar/a1/topics/have-got.html` | English (`en`) | HTML | 7671 B (7.5 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/have-got.html` |
| `en/grammar/a1/topics/id-like.html` | English (`en`) | HTML | 6929 B (6.8 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/id-like.html` |
| `en/grammar/a1/topics/imperatives.html` | English (`en`) | HTML | 7458 B (7.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/imperatives.html` |
| `en/grammar/a1/topics/intensifiers.html` | English (`en`) | HTML | 7490 B (7.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/intensifiers.html` |
| `en/grammar/a1/topics/irregular-verbs.html` | English (`en`) | HTML | 17904 B (17.5 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/irregular-verbs.html` |
| `en/grammar/a1/topics/like-love-hate.html` | English (`en`) | HTML | 7497 B (7.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/like-love-hate.html` |
| `en/grammar/a1/topics/much-many.html` | English (`en`) | HTML | 8403 B (8.2 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/much-many.html` |
| `en/grammar/a1/topics/numbers-dates.html` | English (`en`) | HTML | 6595 B (6.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/numbers-dates.html` |
| `en/grammar/a1/topics/part-1-building-blocks.html` | English (`en`) | HTML | 15748 B (15.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-1-building-blocks.html` |
| `en/grammar/a1/topics/part-10-tense-system.html` | English (`en`) | HTML | 3473 B (3.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-10-tense-system.html` |
| `en/grammar/a1/topics/part-11-questions-negation.html` | English (`en`) | HTML | 3348 B (3.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-11-questions-negation.html` |
| `en/grammar/a1/topics/part-2-nouns-possession.html` | English (`en`) | HTML | 3765 B (3.7 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-2-nouns-possession.html` |
| `en/grammar/a1/topics/part-3-articles-determiners.html` | English (`en`) | HTML | 3509 B (3.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-3-articles-determiners.html` |
| `en/grammar/a1/topics/part-4-pronouns.html` | English (`en`) | HTML | 3501 B (3.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-4-pronouns.html` |
| `en/grammar/a1/topics/part-5-adjectives-comparisons.html` | English (`en`) | HTML | 3433 B (3.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-5-adjectives-comparisons.html` |
| `en/grammar/a1/topics/part-6-adverbs.html` | English (`en`) | HTML | 3395 B (3.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-6-adverbs.html` |
| `en/grammar/a1/topics/part-7-quantifiers.html` | English (`en`) | HTML | 3373 B (3.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-7-quantifiers.html` |
| `en/grammar/a1/topics/part-8-prepositions.html` | English (`en`) | HTML | 3359 B (3.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-8-prepositions.html` |
| `en/grammar/a1/topics/part-9-verbs-modals.html` | English (`en`) | HTML | 3347 B (3.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/part-9-verbs-modals.html` |
| `en/grammar/a1/topics/past-simple-be.html` | English (`en`) | HTML | 7148 B (7.0 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/past-simple-be.html` |
| `en/grammar/a1/topics/past-simple-irregular.html` | English (`en`) | HTML | 7616 B (7.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/past-simple-irregular.html` |
| `en/grammar/a1/topics/past-simple-regular.html` | English (`en`) | HTML | 7756 B (7.6 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/past-simple-regular.html` |
| `en/grammar/a1/topics/plurals-irregular.html` | English (`en`) | HTML | 9497 B (9.3 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/plurals-irregular.html` |
| `en/grammar/a1/topics/plurals-regular.html` | English (`en`) | HTML | 8403 B (8.2 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/plurals-regular.html` |
| `en/grammar/a1/topics/possessive-s.html` | English (`en`) | HTML | 7629 B (7.5 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/possessive-s.html` |
| `en/grammar/a1/topics/prepositions-place.html` | English (`en`) | HTML | 9159 B (8.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/prepositions-place.html` |
| `en/grammar/a1/topics/prepositions-time.html` | English (`en`) | HTML | 8016 B (7.8 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/prepositions-time.html` |
| `en/grammar/a1/topics/present-continuous.html` | English (`en`) | HTML | 7767 B (7.6 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/present-continuous.html` |
| `en/grammar/a1/topics/present-simple.html` | English (`en`) | HTML | 8054 B (7.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/present-simple.html` |
| `en/grammar/a1/topics/pronouns.html` | English (`en`) | HTML | 8119 B (7.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/pronouns.html` |
| `en/grammar/a1/topics/question-words.html` | English (`en`) | HTML | 7036 B (6.9 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/question-words.html` |
| `en/grammar/a1/topics/simple-vs-continuous.html` | English (`en`) | HTML | 7368 B (7.2 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/simple-vs-continuous.html` |
| `en/grammar/a1/topics/some-vs-any.html` | English (`en`) | HTML | 8604 B (8.4 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/some-vs-any.html` |
| `en/grammar/a1/topics/superlative-adjectives.html` | English (`en`) | HTML | 8377 B (8.2 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/superlative-adjectives.html` |
| `en/grammar/a1/topics/telling-time.html` | English (`en`) | HTML | 7360 B (7.2 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/telling-time.html` |
| `en/grammar/a1/topics/there-is-are.html` | English (`en`) | HTML | 7847 B (7.7 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/there-is-are.html` |
| `en/grammar/a1/topics/there-was-were.html` | English (`en`) | HTML | 8181 B (8.0 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/there-was-were.html` |
| `en/grammar/a1/topics/to-be.html` | English (`en`) | HTML | 8685 B (8.5 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/to-be.html` |
| `en/grammar/a1/topics/will.html` | English (`en`) | HTML | 7805 B (7.6 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/will.html` |
| `en/grammar/a1/topics/word-order.html` | English (`en`) | HTML | 8221 B (8.0 KB) | Topic Manual Module | `manuals/en/grammar/a1/topics/word-order.html` |
| `en/grammar/a1/assets/app.js` | English (`en`) | JS | 857 B (0.8 KB) | JavaScript Application Logic | `manuals/en/grammar/a1/assets/app.js` |
| `en/grammar/a1/assets/style.css` | English (`en`) | CSS | 8057 B (7.9 KB) | CSS Stylesheet | `manuals/en/grammar/a1/assets/style.css` |
| `en/grammar/a1/_schema/README.md` | English (`en`) | MD | 4758 B (4.6 KB) | Markdown Documentation / Template | `manuals/en/grammar/a1/_schema/README.md` |
| `en/grammar/a1/_schema/grammar.schema.json` | English (`en`) | JSON | 3267 B (3.2 KB) | JSON Metadata / Schema | `manuals/en/grammar/a1/_schema/grammar.schema.json` |
| `en/grammar/a1/_schema/practice_links_audit.md` | English (`en`) | MD | 3874 B (3.8 KB) | Markdown Documentation / Template | `manuals/en/grammar/a1/_schema/practice_links_audit.md` |
| `ka/index.html` | Georgian (`ka`) | HTML | 8067 B (7.9 KB) | Hub / Section Index | `manuals/ka/index.html` |
| `ka/vocabulary/a2/index.html` | Georgian (`ka`) | HTML | 1393 B (1.4 KB) | Hub / Section Index | `manuals/ka/vocabulary/a2/index.html` |
| `ka/vocabulary/a2/module-1.html` | Georgian (`ka`) | HTML | 1790 B (1.7 KB) | Hub / Section Index | `manuals/ka/vocabulary/a2/module-1.html` |
| `ka/vocabulary/a2/topics/mogzauroba-da-transporti.html` | Georgian (`ka`) | HTML | 1923 B (1.9 KB) | Topic Manual Module | `manuals/ka/vocabulary/a2/topics/mogzauroba-da-transporti.html` |
| `ka/vocabulary/a2/topics/samsaxuri-da-prowesiebi.html` | Georgian (`ka`) | HTML | 1961 B (1.9 KB) | Topic Manual Module | `manuals/ka/vocabulary/a2/topics/samsaxuri-da-prowesiebi.html` |
| `ka/vocabulary/a2/assets/app.js` | Georgian (`ka`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/ka/vocabulary/a2/assets/app.js` |
| `ka/vocabulary/a2/assets/style.css` | Georgian (`ka`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/ka/vocabulary/a2/assets/style.css` |
| `ka/grammar/a2/index.html` | Georgian (`ka`) | HTML | 1402 B (1.4 KB) | Hub / Section Index | `manuals/ka/grammar/a2/index.html` |
| `ka/grammar/a2/part-1.html` | Georgian (`ka`) | HTML | 1781 B (1.7 KB) | Hub / Section Index | `manuals/ka/grammar/a2/part-1.html` |
| `ka/grammar/a2/topics/brunvebi-da-tandebulebi.html` | Georgian (`ka`) | HTML | 4733 B (4.6 KB) | Topic Manual Module | `manuals/ka/grammar/a2/topics/brunvebi-da-tandebulebi.html` |
| `ka/grammar/a2/topics/zmnebi-mravalricxovani-mcvrivze.html` | Georgian (`ka`) | HTML | 5309 B (5.2 KB) | Topic Manual Module | `manuals/ka/grammar/a2/topics/zmnebi-mravalricxovani-mcvrivze.html` |
| `ka/grammar/a2/assets/app.js` | Georgian (`ka`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/ka/grammar/a2/assets/app.js` |
| `ka/grammar/a2/assets/style.css` | Georgian (`ka`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/ka/grammar/a2/assets/style.css` |
| `grammar-b1/appendix.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/appendix.html` |
| `grammar-b1/index.html` | English (`en`) | HTML | 1425 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/index.html` |
| `grammar-b1/part-0.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/b1/part-0.html` |
| `grammar-b1/part-1.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-1.html` |
| `grammar-b1/part-10.html` | English (`en`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-10.html` |
| `grammar-b1/part-2.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-2.html` |
| `grammar-b1/part-3.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-3.html` |
| `grammar-b1/part-4.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-4.html` |
| `grammar-b1/part-5.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-5.html` |
| `grammar-b1/part-6.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-6.html` |
| `grammar-b1/part-7.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-7.html` |
| `grammar-b1/part-8.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-8.html` |
| `grammar-b1/part-9.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b1/part-9.html` |
| `grammar-b1/topics/adjective-preposition.html` | English (`en`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/adjective-preposition.html` |
| `grammar-b1/topics/all-both-either-neither-none.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/all-both-either-neither-none.html` |
| `grammar-b1/topics/another-other-others-the-other.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/another-other-others-the-other.html` |
| `grammar-b1/topics/articles-deeper-rules.html` | English (`en`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/articles-deeper-rules.html` |
| `grammar-b1/topics/broader-intensifiers.html` | English (`en`) | HTML | 1550 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/broader-intensifiers.html` |
| `grammar-b1/topics/can-could-be-able-to.html` | English (`en`) | HTML | 1550 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/can-could-be-able-to.html` |
| `grammar-b1/topics/causative-have-get-something-done.html` | English (`en`) | HTML | 1615 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/causative-have-get-something-done.html` |
| `grammar-b1/topics/connectors-and-linking-words.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/connectors-and-linking-words.html` |
| `grammar-b1/topics/defining-vs-non-defining-relative-clauses.html` | English (`en`) | HTML | 1655 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/defining-vs-non-defining-relative-clauses.html` |
| `grammar-b1/topics/during-for-while.html` | English (`en`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/during-for-while.html` |
| `grammar-b1/topics/ed-ing-adjectives.html` | English (`en`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/ed-ing-adjectives.html` |
| `grammar-b1/topics/embedded-indirect-questions.html` | English (`en`) | HTML | 1585 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/embedded-indirect-questions.html` |
| `grammar-b1/topics/for-since-from.html` | English (`en`) | HTML | 1520 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/for-since-from.html` |
| `grammar-b1/topics/future-continuous.html` | English (`en`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/future-continuous.html` |
| `grammar-b1/topics/future-forms-review.html` | English (`en`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/future-forms-review.html` |
| `grammar-b1/topics/future-perfect.html` | English (`en`) | HTML | 1520 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/future-perfect.html` |
| `grammar-b1/topics/have-to-must-should-had-better.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/have-to-must-should-had-better.html` |
| `grammar-b1/topics/it-is-said-that.html` | English (`en`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/it-is-said-that.html` |
| `grammar-b1/topics/linking-words.html` | English (`en`) | HTML | 1515 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/linking-words.html` |
| `grammar-b1/topics/mixed-conditionals.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/mixed-conditionals.html` |
| `grammar-b1/topics/modals-of-deduction-past.html` | English (`en`) | HTML | 1570 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/modals-of-deduction-past.html` |
| `grammar-b1/topics/modals-of-deduction-present.html` | English (`en`) | HTML | 1585 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/modals-of-deduction-present.html` |
| `grammar-b1/topics/modifying-comparatives.html` | English (`en`) | HTML | 1560 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/modifying-comparatives.html` |
| `grammar-b1/topics/narrative-tenses.html` | English (`en`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/narrative-tenses.html` |
| `grammar-b1/topics/neednt-didnt-need-to-neednt-have.html` | English (`en`) | HTML | 1610 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/neednt-didnt-need-to-neednt-have.html` |
| `grammar-b1/topics/passive-continuous-and-perfect-tenses.html` | English (`en`) | HTML | 1635 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/passive-continuous-and-perfect-tenses.html` |
| `grammar-b1/topics/passive-simple-and-future-tenses.html` | English (`en`) | HTML | 1610 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/passive-simple-and-future-tenses.html` |
| `grammar-b1/topics/passive-with-modals.html` | English (`en`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/passive-with-modals.html` |
| `grammar-b1/topics/past-perfect-continuous.html` | English (`en`) | HTML | 1565 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/past-perfect-continuous.html` |
| `grammar-b1/topics/past-perfect.html` | English (`en`) | HTML | 1510 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/past-perfect.html` |
| `grammar-b1/topics/past-simple-vs-present-perfect.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/past-simple-vs-present-perfect.html` |
| `grammar-b1/topics/phrasal-verbs-grammar-patterns.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/phrasal-verbs-grammar-patterns.html` |
| `grammar-b1/topics/present-perfect-simple-vs-continuous.html` | English (`en`) | HTML | 1630 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/present-perfect-simple-vs-continuous.html` |
| `grammar-b1/topics/present-simple-vs-present-continuous.html` | English (`en`) | HTML | 1630 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/present-simple-vs-present-continuous.html` |
| `grammar-b1/topics/question-tags.html` | English (`en`) | HTML | 1515 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/question-tags.html` |
| `grammar-b1/topics/reflexive-pronouns.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reflexive-pronouns.html` |
| `grammar-b1/topics/reported-questions-and-commands.html` | English (`en`) | HTML | 1605 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reported-questions-and-commands.html` |
| `grammar-b1/topics/reported-speech-statements.html` | English (`en`) | HTML | 1580 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reported-speech-statements.html` |
| `grammar-b1/topics/reporting-verbs.html` | English (`en`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/reporting-verbs.html` |
| `grammar-b1/topics/second-conditional.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/second-conditional.html` |
| `grammar-b1/topics/so-such-so-much-so-many.html` | English (`en`) | HTML | 1565 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/so-such-so-much-so-many.html` |
| `grammar-b1/topics/third-conditional.html` | English (`en`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/third-conditional.html` |
| `grammar-b1/topics/verb-preposition.html` | English (`en`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/verb-preposition.html` |
| `grammar-b1/topics/verbs-of-the-senses.html` | English (`en`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/verbs-of-the-senses.html` |
| `grammar-b1/topics/wh-questions-in-the-past.html` | English (`en`) | HTML | 1570 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/wh-questions-in-the-past.html` |
| `grammar-b1/topics/wish-if-only.html` | English (`en`) | HTML | 1510 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/wish-if-only.html` |
| `grammar-b1/topics/would-rather-would-sooner.html` | English (`en`) | HTML | 1575 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b1/topics/would-rather-would-sooner.html` |
| `grammar-b1/assets/app.js` | English (`en`) | JS | 4189 B (4.1 KB) | JavaScript Application Logic | `manuals/en/grammar/b1/assets/app.js` |
| `grammar-b1/assets/style.css` | English (`en`) | CSS | 14943 B (14.6 KB) | CSS Stylesheet | `manuals/en/grammar/b1/assets/style.css` |
| `lessico-italiano/index.html` | Italian (`it`) | HTML | 3839 B (3.7 KB) | Hub / Section Index | `manuals/it/vocabulary/a1/index.html` |
| `lessico-italiano/modulo-1.html` | Italian (`it`) | HTML | 3053 B (3.0 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/modulo-1.html` |
| `lessico-italiano/modulo-2.html` | Italian (`it`) | HTML | 2557 B (2.5 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/modulo-2.html` |
| `lessico-italiano/modulo-3.html` | Italian (`it`) | HTML | 2539 B (2.5 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/modulo-3.html` |
| `lessico-italiano/modulo-4.html` | Italian (`it`) | HTML | 2590 B (2.5 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/modulo-4.html` |
| `lessico-italiano/modulo-5.html` | Italian (`it`) | HTML | 2592 B (2.5 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/modulo-5.html` |
| `lessico-italiano/modulo-6.html` | Italian (`it`) | HTML | 2107 B (2.1 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/modulo-6.html` |
| `lessico-italiano/topics/abbigliamento-e-accessori.html` | Italian (`it`) | HTML | 3745 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/abbigliamento-e-accessori.html` |
| `lessico-italiano/topics/acquisti-e-denaro.html` | Italian (`it`) | HTML | 3690 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/acquisti-e-denaro.html` |
| `lessico-italiano/topics/basi-di-pronuncia.html` | Italian (`it`) | HTML | 3706 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/basi-di-pronuncia.html` |
| `lessico-italiano/topics/cibo-e-bevande.html` | Italian (`it`) | HTML | 3642 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/cibo-e-bevande.html` |
| `lessico-italiano/topics/dati-personali.html` | Italian (`it`) | HTML | 3778 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/dati-personali.html` |
| `lessico-italiano/topics/i-colori.html` | Italian (`it`) | HTML | 3697 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/i-colori.html` |
| `lessico-italiano/topics/i-numeri.html` | Italian (`it`) | HTML | 3526 B (3.4 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/i-numeri.html` |
| `lessico-italiano/topics/il-corpo-umano.html` | Italian (`it`) | HTML | 3753 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/il-corpo-umano.html` |
| `lessico-italiano/topics/indicazioni-e-luoghi-in-citta.html` | Italian (`it`) | HTML | 3721 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/indicazioni-e-luoghi-in-citta.html` |
| `lessico-italiano/topics/la-casa-e-i-mobili.html` | Italian (`it`) | HTML | 3615 B (3.5 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/la-casa-e-i-mobili.html` |
| `lessico-italiano/topics/la-famiglia.html` | Italian (`it`) | HTML | 3555 B (3.5 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/la-famiglia.html` |
| `lessico-italiano/topics/mestieri-e-professioni.html` | Italian (`it`) | HTML | 3731 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/mestieri-e-professioni.html` |
| `lessico-italiano/topics/orario-e-routine-giornaliera.html` | Italian (`it`) | HTML | 3732 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/orario-e-routine-giornaliera.html` |
| `lessico-italiano/topics/parole-di-collegamento-e-domande.html` | Italian (`it`) | HTML | 3814 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/parole-di-collegamento-e-domande.html` |
| `lessico-italiano/topics/pasti-e-cucina.html` | Italian (`it`) | HTML | 3762 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/pasti-e-cucina.html` |
| `lessico-italiano/topics/ristorante-e-caffe.html` | Italian (`it`) | HTML | 3750 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/ristorante-e-caffe.html` |
| `lessico-italiano/topics/salute-e-farmacia.html` | Italian (`it`) | HTML | 3706 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/salute-e-farmacia.html` |
| `lessico-italiano/topics/saluti-e-presentazioni.html` | Italian (`it`) | HTML | 3685 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/saluti-e-presentazioni.html` |
| `lessico-italiano/topics/scuola-e-oggetti-di-classe.html` | Italian (`it`) | HTML | 3749 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/scuola-e-oggetti-di-classe.html` |
| `lessico-italiano/topics/sentimenti-ed-emozioni.html` | Italian (`it`) | HTML | 3619 B (3.5 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/sentimenti-ed-emozioni.html` |
| `lessico-italiano/topics/tecnologia-e-telefono.html` | Italian (`it`) | HTML | 3879 B (3.8 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/tecnologia-e-telefono.html` |
| `lessico-italiano/topics/tempo-e-stagioni.html` | Italian (`it`) | HTML | 3685 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/tempo-e-stagioni.html` |
| `lessico-italiano/topics/tempo-libero-e-hobby.html` | Italian (`it`) | HTML | 3807 B (3.7 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/tempo-libero-e-hobby.html` |
| `lessico-italiano/topics/trasporti-e-viaggi.html` | Italian (`it`) | HTML | 3737 B (3.6 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/trasporti-e-viaggi.html` |
| `lessico-italiano/topics/verbi-principali-a1.html` | Italian (`it`) | HTML | 3866 B (3.8 KB) | Topic Manual Module | `manuals/it/vocabulary/a1/topics/verbi-principali-a1.html` |
| `lessico-italiano/assets/app.js` | Italian (`it`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/it/vocabulary/a1/assets/app.js` |
| `lessico-italiano/assets/style.css` | Italian (`it`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/it/vocabulary/a1/assets/style.css` |
| `tatar-teli-grammatikasy/bulek-1.html` | Tatar (`tt`) | HTML | 1420 B (1.4 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-1.html` |
| `tatar-teli-grammatikasy/bulek-2.html` | Tatar (`tt`) | HTML | 1420 B (1.4 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-2.html` |
| `tatar-teli-grammatikasy/bulek-3.html` | Tatar (`tt`) | HTML | 1420 B (1.4 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-3.html` |
| `tatar-teli-grammatikasy/bulek-4.html` | Tatar (`tt`) | HTML | 1420 B (1.4 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-4.html` |
| `tatar-teli-grammatikasy/index.html` | Tatar (`tt`) | HTML | 1410 B (1.4 KB) | Hub / Section Index | `manuals/tt/grammar/a1/index.html` |
| `tatar-teli-grammatikasy/topics/bar-yuk.html` | Tatar (`tt`) | HTML | 1470 B (1.4 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/bar-yuk.html` |
| `tatar-teli-grammatikasy/topics/chagyshtyru-darajese.html` | Tatar (`tt`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/chagyshtyru-darajese.html` |
| `tatar-teli-grammatikasy/topics/hazierge-zaman.html` | Tatar (`tt`) | HTML | 1505 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/hazierge-zaman.html` |
| `tatar-teli-grammatikasy/topics/iyalek-kushymchalary.html` | Tatar (`tt`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/iyalek-kushymchalary.html` |
| `tatar-teli-grammatikasy/topics/kilechak-zaman.html` | Tatar (`tt`) | HTML | 1505 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kilechak-zaman.html` |
| `tatar-teli-grammatikasy/topics/kileshlar.html` | Tatar (`tt`) | HTML | 1480 B (1.4 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kileshlar.html` |
| `tatar-teli-grammatikasy/topics/kire-kagu.html` | Tatar (`tt`) | HTML | 1480 B (1.4 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kire-kagu.html` |
| `tatar-teli-grammatikasy/topics/korsatu-alyshmalary.html` | Tatar (`tt`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/korsatu-alyshmalary.html` |
| `tatar-teli-grammatikasy/topics/kyuplek-hem-azlyk.html` | Tatar (`tt`) | HTML | 1520 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kyuplek-hem-azlyk.html` |
| `tatar-teli-grammatikasy/topics/sannar-ham-kileshlar.html` | Tatar (`tt`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sannar-ham-kileshlar.html` |
| `tatar-teli-grammatikasy/topics/sannar-ham-vaqyt.html` | Tatar (`tt`) | HTML | 1515 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sannar-ham-vaqyt.html` |
| `tatar-teli-grammatikasy/topics/singarmonizm.html` | Tatar (`tt`) | HTML | 1495 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/singarmonizm.html` |
| `tatar-teli-grammatikasy/topics/sonardashlar.html` | Tatar (`tt`) | HTML | 1495 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sonardashlar.html` |
| `tatar-teli-grammatikasy/topics/sorau-formashy.html` | Tatar (`tt`) | HTML | 1505 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sorau-formashy.html` |
| `tatar-teli-grammatikasy/topics/sozlar-tartibe.html` | Tatar (`tt`) | HTML | 1505 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sozlar-tartibe.html` |
| `tatar-teli-grammatikasy/topics/syjfatlar.html` | Tatar (`tt`) | HTML | 1480 B (1.4 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/syjfatlar.html` |
| `tatar-teli-grammatikasy/topics/utkan-zaman.html` | Tatar (`tt`) | HTML | 1490 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/utkan-zaman.html` |
| `tatar-teli-grammatikasy/topics/zat-alyshmalary.html` | Tatar (`tt`) | HTML | 1510 B (1.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/zat-alyshmalary.html` |
| `tatar-teli-grammatikasy/assets/app.js` | Tatar (`tt`) | JS | 2959 B (2.9 KB) | JavaScript Application Logic | `manuals/tt/grammar/a1/assets/app.js` |
| `tatar-teli-grammatikasy/assets/style.css` | Tatar (`tt`) | CSS | 7626 B (7.4 KB) | CSS Stylesheet | `manuals/tt/grammar/a1/assets/style.css` |
| `hy/index.html` | Armenian (`hy`) | HTML | 7426 B (7.3 KB) | Hub / Section Index | `manuals/hy/index.html` |
| `hy/vocabulary/a2/index.html` | Armenian (`hy`) | HTML | 1290 B (1.3 KB) | Hub / Section Index | `manuals/hy/vocabulary/a2/index.html` |
| `hy/vocabulary/a2/module-1.html` | Armenian (`hy`) | HTML | 1617 B (1.6 KB) | Hub / Section Index | `manuals/hy/vocabulary/a2/module-1.html` |
| `hy/vocabulary/a2/topics/ashkhatank-yev-masnagidutyunner.html` | Armenian (`hy`) | HTML | 1690 B (1.7 KB) | Topic Manual Module | `manuals/hy/vocabulary/a2/topics/ashkhatank-yev-masnagidutyunner.html` |
| `hy/vocabulary/a2/topics/chambordutyun-yev-transport.html` | Armenian (`hy`) | HTML | 1603 B (1.6 KB) | Topic Manual Module | `manuals/hy/vocabulary/a2/topics/chambordutyun-yev-transport.html` |
| `hy/vocabulary/a2/assets/app.js` | Armenian (`hy`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/hy/vocabulary/a2/assets/app.js` |
| `hy/vocabulary/a2/assets/style.css` | Armenian (`hy`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/hy/vocabulary/a2/assets/style.css` |
| `hy/grammar/a2/index.html` | Armenian (`hy`) | HTML | 1321 B (1.3 KB) | Hub / Section Index | `manuals/hy/grammar/a2/index.html` |
| `hy/grammar/a2/part-1.html` | Armenian (`hy`) | HTML | 1637 B (1.6 KB) | Hub / Section Index | `manuals/hy/grammar/a2/part-1.html` |
| `hy/grammar/a2/topics/ancyal-katarhyal-yev-ancyal-anhatar.html` | Armenian (`hy`) | HTML | 4278 B (4.2 KB) | Topic Manual Module | `manuals/hy/grammar/a2/topics/ancyal-katarhyal-yev-ancyal-anhatar.html` |
| `hy/grammar/a2/topics/holovman-hamakarg.html` | Armenian (`hy`) | HTML | 4096 B (4.0 KB) | Topic Manual Module | `manuals/hy/grammar/a2/topics/holovman-hamakarg.html` |
| `hy/grammar/a2/assets/app.js` | Armenian (`hy`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/hy/grammar/a2/assets/app.js` |
| `hy/grammar/a2/assets/style.css` | Armenian (`hy`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/hy/grammar/a2/assets/style.css` |
| `deutsche-grammatik/index.html` | German (`de`) | HTML | 3604 B (3.5 KB) | Hub / Section Index | `manuals/de/grammar/a1/index.html` |
| `deutsche-grammatik/kapitel-1.html` | German (`de`) | HTML | 2949 B (2.9 KB) | Topic Manual Module | `manuals/de/grammar/a1/kapitel-1.html` |
| `deutsche-grammatik/kapitel-2.html` | German (`de`) | HTML | 2747 B (2.7 KB) | Topic Manual Module | `manuals/de/grammar/a1/kapitel-2.html` |
| `deutsche-grammatik/kapitel-3.html` | German (`de`) | HTML | 2862 B (2.8 KB) | Topic Manual Module | `manuals/de/grammar/a1/kapitel-3.html` |
| `deutsche-grammatik/kapitel-4.html` | German (`de`) | HTML | 2374 B (2.3 KB) | Topic Manual Module | `manuals/de/grammar/a1/kapitel-4.html` |
| `deutsche-grammatik/kapitel-5.html` | German (`de`) | HTML | 2176 B (2.1 KB) | Topic Manual Module | `manuals/de/grammar/a1/kapitel-5.html` |
| `deutsche-grammatik/topics/adverbien-frequenz-art.html` | German (`de`) | HTML | 3891 B (3.8 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/adverbien-frequenz-art.html` |
| `deutsche-grammatik/topics/artikel-und-genus.html` | German (`de`) | HTML | 4093 B (4.0 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/artikel-und-genus.html` |
| `deutsche-grammatik/topics/dativ-kasus.html` | German (`de`) | HTML | 4197 B (4.1 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/dativ-kasus.html` |
| `deutsche-grammatik/topics/demonstrativpronomen.html` | German (`de`) | HTML | 3966 B (3.9 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/demonstrativpronomen.html` |
| `deutsche-grammatik/topics/es-gibt.html` | German (`de`) | HTML | 3742 B (3.7 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/es-gibt.html` |
| `deutsche-grammatik/topics/imperativ.html` | German (`de`) | HTML | 4155 B (4.1 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/imperativ.html` |
| `deutsche-grammatik/topics/komparativ-und-superlativ.html` | German (`de`) | HTML | 3767 B (3.7 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/komparativ-und-superlativ.html` |
| `deutsche-grammatik/topics/konjunktionen-grundlegend.html` | German (`de`) | HTML | 3855 B (3.8 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/konjunktionen-grundlegend.html` |
| `deutsche-grammatik/topics/modalverben.html` | German (`de`) | HTML | 4061 B (4.0 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/modalverben.html` |
| `deutsche-grammatik/topics/negation-nicht-kein.html` | German (`de`) | HTML | 4282 B (4.2 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/negation-nicht-kein.html` |
| `deutsche-grammatik/topics/nominativ-und-akkusativ.html` | German (`de`) | HTML | 3808 B (3.7 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/nominativ-und-akkusativ.html` |
| `deutsche-grammatik/topics/perfekt.html` | German (`de`) | HTML | 3812 B (3.7 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/perfekt.html` |
| `deutsche-grammatik/topics/personalpronomen.html` | German (`de`) | HTML | 4069 B (4.0 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/personalpronomen.html` |
| `deutsche-grammatik/topics/possessivartikel.html` | German (`de`) | HTML | 4522 B (4.4 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/possessivartikel.html` |
| `deutsche-grammatik/topics/praepositionen-ort.html` | German (`de`) | HTML | 4208 B (4.1 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/praepositionen-ort.html` |
| `deutsche-grammatik/topics/praepositionen-zeit.html` | German (`de`) | HTML | 4054 B (4.0 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/praepositionen-zeit.html` |
| `deutsche-grammatik/topics/praesens-regelmaessig.html` | German (`de`) | HTML | 4176 B (4.1 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/praesens-regelmaessig.html` |
| `deutsche-grammatik/topics/sein-und-haben.html` | German (`de`) | HTML | 3987 B (3.9 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/sein-und-haben.html` |
| `deutsche-grammatik/topics/w-fragen-und-ja-nein-fragen.html` | German (`de`) | HTML | 3829 B (3.7 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/w-fragen-und-ja-nein-fragen.html` |
| `deutsche-grammatik/topics/wortstellung-v2.html` | German (`de`) | HTML | 3980 B (3.9 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/wortstellung-v2.html` |
| `deutsche-grammatik/topics/zahlen-uhrzeit-datum.html` | German (`de`) | HTML | 4059 B (4.0 KB) | Topic Manual Module | `manuals/de/grammar/a1/topics/zahlen-uhrzeit-datum.html` |
| `deutsche-grammatik/assets/app.js` | German (`de`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/de/grammar/a1/assets/app.js` |
| `deutsche-grammatik/assets/style.css` | German (`de`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/de/grammar/a1/assets/style.css` |
| `fr/vocabulary/a2/index.html` | French (`fr`) | HTML | 1839 B (1.8 KB) | Hub / Section Index | `manuals/fr/vocabulary/a2/index.html` |
| `fr/vocabulary/a2/module-1.html` | French (`fr`) | HTML | 1686 B (1.6 KB) | Hub / Section Index | `manuals/fr/vocabulary/a2/module-1.html` |
| `fr/vocabulary/a2/module-2.html` | French (`fr`) | HTML | 1654 B (1.6 KB) | Topic Manual Module | `manuals/fr/vocabulary/a2/module-2.html` |
| `fr/vocabulary/a2/topics/le-monde-du-travail.html` | French (`fr`) | HTML | 3037 B (3.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a2/topics/le-monde-du-travail.html` |
| `fr/vocabulary/a2/topics/les-projets-et-lavenir.html` | French (`fr`) | HTML | 3077 B (3.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a2/topics/les-projets-et-lavenir.html` |
| `fr/vocabulary/a2/topics/les-transports-et-deplacements.html` | French (`fr`) | HTML | 3090 B (3.0 KB) | Topic Manual Module | `manuals/fr/vocabulary/a2/topics/les-transports-et-deplacements.html` |
| `fr/vocabulary/a2/topics/racontes-ses-souvenirs.html` | French (`fr`) | HTML | 3236 B (3.2 KB) | Topic Manual Module | `manuals/fr/vocabulary/a2/topics/racontes-ses-souvenirs.html` |
| `fr/vocabulary/a2/assets/app.js` | French (`fr`) | JS | 2158 B (2.1 KB) | JavaScript Application Logic | `manuals/fr/vocabulary/a2/assets/app.js` |
| `fr/vocabulary/a2/assets/style.css` | French (`fr`) | CSS | 4702 B (4.6 KB) | CSS Stylesheet | `manuals/fr/vocabulary/a2/assets/style.css` |
| `fr/grammar/index.html` | French (`fr`) | HTML | 2207 B (2.2 KB) | Hub / Section Index | `manuals/fr/grammar/index.html` |
| `fr/grammar/a2/index.html` | French (`fr`) | HTML | 2641 B (2.6 KB) | Hub / Section Index | `manuals/fr/grammar/a2/index.html` |
| `fr/grammar/a2/part-1.html` | French (`fr`) | HTML | 2178 B (2.1 KB) | Hub / Section Index | `manuals/fr/grammar/a2/part-1.html` |
| `fr/grammar/a2/part-2.html` | French (`fr`) | HTML | 2132 B (2.1 KB) | Hub / Section Index | `manuals/fr/grammar/a2/part-2.html` |
| `fr/grammar/a2/part-3.html` | French (`fr`) | HTML | 2460 B (2.4 KB) | Hub / Section Index | `manuals/fr/grammar/a2/part-3.html` |
| `fr/grammar/a2/topics/l-hypothese-au-present.html` | French (`fr`) | HTML | 5259 B (5.1 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/l-hypothese-au-present.html` |
| `fr/grammar/a2/topics/la-comparaison-et-le-superlatif.html` | French (`fr`) | HTML | 5346 B (5.2 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/la-comparaison-et-le-superlatif.html` |
| `fr/grammar/a2/topics/le-conditionnel-present.html` | French (`fr`) | HTML | 5005 B (4.9 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/le-conditionnel-present.html` |
| `fr/grammar/a2/topics/le-futur-simple.html` | French (`fr`) | HTML | 5253 B (5.1 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/le-futur-simple.html` |
| `fr/grammar/a2/topics/les-pronoms-cod-et-coi.html` | French (`fr`) | HTML | 5331 B (5.2 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/les-pronoms-cod-et-coi.html` |
| `fr/grammar/a2/topics/les-pronoms-en-et-y.html` | French (`fr`) | HTML | 5120 B (5.0 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/les-pronoms-en-et-y.html` |
| `fr/grammar/a2/topics/limparfait-de-lindicatif.html` | French (`fr`) | HTML | 5848 B (5.7 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/limparfait-de-lindicatif.html` |
| `fr/grammar/a2/topics/lobligation-et-linterdiction.html` | French (`fr`) | HTML | 4994 B (4.9 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/lobligation-et-linterdiction.html` |
| `fr/grammar/a2/topics/passe-compose-avoir-etre.html` | French (`fr`) | HTML | 6099 B (6.0 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/passe-compose-avoir-etre.html` |
| `fr/grammar/a2/topics/passe-compose-vs-imparfait.html` | French (`fr`) | HTML | 8801 B (8.6 KB) | Topic Manual Module | `manuals/fr/grammar/a2/topics/passe-compose-vs-imparfait.html` |
| `fr/grammar/a2/assets/app.js` | French (`fr`) | JS | 2374 B (2.3 KB) | JavaScript Application Logic | `manuals/fr/grammar/a2/assets/app.js` |
| `fr/grammar/a2/assets/style.css` | French (`fr`) | CSS | 7923 B (7.7 KB) | CSS Stylesheet | `manuals/fr/grammar/a2/assets/style.css` |
| `fr/grammar/a1/index.html` | French (`fr`) | HTML | 1940 B (1.9 KB) | Hub / Section Index | `manuals/fr/grammar/a1/index.html` |
| `fr/grammar/a1/part-1.html` | French (`fr`) | HTML | 1930 B (1.9 KB) | Hub / Section Index | `manuals/fr/grammar/a1/part-1.html` |
| `fr/grammar/a1/topics/part-1-building-blocks.html` | French (`fr`) | HTML | 10359 B (10.1 KB) | Topic Manual Module | `manuals/fr/grammar/a1/topics/part-1-building-blocks.html` |
| `fr/grammar/a1/assets/app.js` | French (`fr`) | JS | 6325 B (6.2 KB) | JavaScript Application Logic | `manuals/fr/grammar/a1/assets/app.js` |
| `fr/grammar/a1/assets/style.css` | French (`fr`) | CSS | 24410 B (23.8 KB) | CSS Stylesheet | `manuals/fr/grammar/a1/assets/style.css` |
| `gramatica-portuguesa/capitulo-1.html` | Portuguese (`pt`) | HTML | 2816 B (2.8 KB) | Topic Manual Module | `manuals/pt/grammar/a1/capitulo-1.html` |
| `gramatica-portuguesa/capitulo-2.html` | Portuguese (`pt`) | HTML | 3075 B (3.0 KB) | Topic Manual Module | `manuals/pt/grammar/a1/capitulo-2.html` |
| `gramatica-portuguesa/capitulo-3.html` | Portuguese (`pt`) | HTML | 2779 B (2.7 KB) | Topic Manual Module | `manuals/pt/grammar/a1/capitulo-3.html` |
| `gramatica-portuguesa/capitulo-4.html` | Portuguese (`pt`) | HTML | 2347 B (2.3 KB) | Topic Manual Module | `manuals/pt/grammar/a1/capitulo-4.html` |
| `gramatica-portuguesa/capitulo-5.html` | Portuguese (`pt`) | HTML | 2192 B (2.1 KB) | Topic Manual Module | `manuals/pt/grammar/a1/capitulo-5.html` |
| `gramatica-portuguesa/index.html` | Portuguese (`pt`) | HTML | 3642 B (3.6 KB) | Hub / Section Index | `manuals/pt/grammar/a1/index.html` |
| `gramatica-portuguesa/topics/adverbios-frequencia-modo.html` | Portuguese (`pt`) | HTML | 4088 B (4.0 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/adverbios-frequencia-modo.html` |
| `gramatica-portuguesa/topics/artigos-definidos.html` | Portuguese (`pt`) | HTML | 4062 B (4.0 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/artigos-definidos.html` |
| `gramatica-portuguesa/topics/comparativo-superlativo.html` | Portuguese (`pt`) | HTML | 4156 B (4.1 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/comparativo-superlativo.html` |
| `gramatica-portuguesa/topics/conjuncoes-basicas.html` | Portuguese (`pt`) | HTML | 3918 B (3.8 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/conjuncoes-basicas.html` |
| `gramatica-portuguesa/topics/demonstrativos.html` | Portuguese (`pt`) | HTML | 4017 B (3.9 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/demonstrativos.html` |
| `gramatica-portuguesa/topics/genero-dos-substantivos.html` | Portuguese (`pt`) | HTML | 4257 B (4.2 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/genero-dos-substantivos.html` |
| `gramatica-portuguesa/topics/ha-vs-tem.html` | Portuguese (`pt`) | HTML | 4004 B (3.9 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/ha-vs-tem.html` |
| `gramatica-portuguesa/topics/imperativo.html` | Portuguese (`pt`) | HTML | 3877 B (3.8 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/imperativo.html` |
| `gramatica-portuguesa/topics/interrogativos.html` | Portuguese (`pt`) | HTML | 4014 B (3.9 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/interrogativos.html` |
| `gramatica-portuguesa/topics/negacao.html` | Portuguese (`pt`) | HTML | 4035 B (3.9 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/negacao.html` |
| `gramatica-portuguesa/topics/numeros-horas-datas.html` | Portuguese (`pt`) | HTML | 4504 B (4.4 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/numeros-horas-datas.html` |
| `gramatica-portuguesa/topics/plural-dos-substantivos.html` | Portuguese (`pt`) | HTML | 4284 B (4.2 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/plural-dos-substantivos.html` |
| `gramatica-portuguesa/topics/possessivos.html` | Portuguese (`pt`) | HTML | 4556 B (4.4 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/possessivos.html` |
| `gramatica-portuguesa/topics/preposicoes-lugar.html` | Portuguese (`pt`) | HTML | 4544 B (4.4 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/preposicoes-lugar.html` |
| `gramatica-portuguesa/topics/preposicoes-tempo.html` | Portuguese (`pt`) | HTML | 4351 B (4.2 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/preposicoes-tempo.html` |
| `gramatica-portuguesa/topics/presente-do-indicativo.html` | Portuguese (`pt`) | HTML | 3891 B (3.8 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/presente-do-indicativo.html` |
| `gramatica-portuguesa/topics/preterito-perfeito-vs-imperfeito.html` | Portuguese (`pt`) | HTML | 4153 B (4.1 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/preterito-perfeito-vs-imperfeito.html` |
| `gramatica-portuguesa/topics/preterito-perfeito.html` | Portuguese (`pt`) | HTML | 4026 B (3.9 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/preterito-perfeito.html` |
| `gramatica-portuguesa/topics/pronomes-pessoais.html` | Portuguese (`pt`) | HTML | 4492 B (4.4 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/pronomes-pessoais.html` |
| `gramatica-portuguesa/topics/ser-vs-estar.html` | Portuguese (`pt`) | HTML | 4128 B (4.0 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/ser-vs-estar.html` |
| `gramatica-portuguesa/topics/verbos-reflexivos.html` | Portuguese (`pt`) | HTML | 4378 B (4.3 KB) | Topic Manual Module | `manuals/pt/grammar/a1/topics/verbos-reflexivos.html` |
| `gramatica-portuguesa/assets/app.js` | Portuguese (`pt`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/pt/grammar/a1/assets/app.js` |
| `gramatica-portuguesa/assets/style.css` | Portuguese (`pt`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/pt/grammar/a1/assets/style.css` |
| `vocabulary-c1/index.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/index.html` |
| `vocabulary-c1/part-1.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-1.html` |
| `vocabulary-c1/part-10.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-10.html` |
| `vocabulary-c1/part-11.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-11.html` |
| `vocabulary-c1/part-12.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-12.html` |
| `vocabulary-c1/part-13.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-13.html` |
| `vocabulary-c1/part-14.html` | English (`en`) | HTML | 1450 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-14.html` |
| `vocabulary-c1/part-2.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-2.html` |
| `vocabulary-c1/part-3.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-3.html` |
| `vocabulary-c1/part-4.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-4.html` |
| `vocabulary-c1/part-5.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-5.html` |
| `vocabulary-c1/part-6.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-6.html` |
| `vocabulary-c1/part-7.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-7.html` |
| `vocabulary-c1/part-8.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-8.html` |
| `vocabulary-c1/part-9.html` | English (`en`) | HTML | 1445 B (1.4 KB) | Hub / Section Index | `manuals/en/vocabulary/c1/part-9.html` |
| `vocabulary-c1/topics/academic-genres-and-research-publications.html` | English (`en`) | HTML | 1670 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/academic-genres-and-research-publications.html` |
| `vocabulary-c1/topics/academic-literacy-assessment-and-pedagogy.html` | English (`en`) | HTML | 1670 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/academic-literacy-assessment-and-pedagogy.html` |
| `vocabulary-c1/topics/aesthetics-literature-and-architectural-heritage.html` | English (`en`) | HTML | 1705 B (1.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/aesthetics-literature-and-architectural-heritage.html` |
| `vocabulary-c1/topics/artificial-intelligence-machine-learning-and-robotics.html` | English (`en`) | HTML | 1730 B (1.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/artificial-intelligence-machine-learning-and-robotics.html` |
| `vocabulary-c1/topics/banking-investment-cryptocurrencies-and-crises.html` | English (`en`) | HTML | 1695 B (1.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/banking-investment-cryptocurrencies-and-crises.html` |
| `vocabulary-c1/topics/civil-law-contracts-and-torts.html` | English (`en`) | HTML | 1610 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/civil-law-contracts-and-torts.html` |
| `vocabulary-c1/topics/climate-adaptation-biodiversity-and-green-tech.html` | English (`en`) | HTML | 1695 B (1.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/climate-adaptation-biodiversity-and-green-tech.html` |
| `vocabulary-c1/topics/cognitive-biases-mental-disorders-and-therapy.html` | English (`en`) | HTML | 1690 B (1.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/cognitive-biases-mental-disorders-and-therapy.html` |
| `vocabulary-c1/topics/constitutional-and-international-law.html` | English (`en`) | HTML | 1645 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/constitutional-and-international-law.html` |
| `vocabulary-c1/topics/criminal-law-and-judicial-proceedings.html` | English (`en`) | HTML | 1650 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/criminal-law-and-judicial-proceedings.html` |
| `vocabulary-c1/topics/cybersecurity-big-data-and-digital-ethics.html` | English (`en`) | HTML | 1670 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/cybersecurity-big-data-and-digital-ethics.html` |
| `vocabulary-c1/topics/diagnostics-clinical-trials-and-specialties.html` | English (`en`) | HTML | 1680 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/diagnostics-clinical-trials-and-specialties.html` |
| `vocabulary-c1/topics/executive-leadership-operations-and-hr.html` | English (`en`) | HTML | 1655 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/executive-leadership-operations-and-hr.html` |
| `vocabulary-c1/topics/geopolitics-soft-power-and-peacekeeping.html` | English (`en`) | HTML | 1660 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/geopolitics-soft-power-and-peacekeeping.html` |
| `vocabulary-c1/topics/investigative-journalism-and-press-freedom.html` | English (`en`) | HTML | 1675 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/investigative-journalism-and-press-freedom.html` |
| `vocabulary-c1/topics/microeconomics-macroeconomics-and-behavioural-economics.html` | English (`en`) | HTML | 1740 B (1.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/microeconomics-macroeconomics-and-behavioural-economics.html` |
| `vocabulary-c1/topics/morality-existentialism-and-epistemology.html` | English (`en`) | HTML | 1665 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/morality-existentialism-and-epistemology.html` |
| `vocabulary-c1/topics/physics-chemistry-biology-and-genetics.html` | English (`en`) | HTML | 1655 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/physics-chemistry-biology-and-genetics.html` |
| `vocabulary-c1/topics/research-ethics-peer-review-and-methodology.html` | English (`en`) | HTML | 1680 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/research-ethics-peer-review-and-methodology.html` |
| `vocabulary-c1/topics/risk-management-change-and-entrepreneurship.html` | English (`en`) | HTML | 1680 B (1.6 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/risk-management-change-and-entrepreneurship.html` |
| `vocabulary-c1/topics/statistical-analysis-and-empirical-data-interpretation.html` | English (`en`) | HTML | 1735 B (1.7 KB) | Topic Manual Module | `manuals/en/vocabulary/c1/topics/statistical-analysis-and-empirical-data-interpretation.html` |
| `vocabulary-c1/assets/app.js` | English (`en`) | JS | 3104 B (3.0 KB) | JavaScript Application Logic | `manuals/en/vocabulary/c1/assets/app.js` |
| `vocabulary-c1/assets/style.css` | English (`en`) | CSS | 9529 B (9.3 KB) | CSS Stylesheet | `manuals/en/vocabulary/c1/assets/style.css` |
| `chavash-grammatika/index.html` | Chuvash (`cv`) | HTML | 3699 B (3.6 KB) | Hub / Section Index | `manuals/cv/grammar/a1/index.html` |
| `chavash-grammatika/pay-1.html` | Chuvash (`cv`) | HTML | 5263 B (5.1 KB) | Hub / Section Index | `manuals/cv/grammar/a1/pay-1.html` |
| `chavash-grammatika/pay-2.html` | Chuvash (`cv`) | HTML | 3199 B (3.1 KB) | Hub / Section Index | `manuals/cv/grammar/a1/pay-2.html` |
| `chavash-grammatika/pay-3.html` | Chuvash (`cv`) | HTML | 2806 B (2.7 KB) | Hub / Section Index | `manuals/cv/grammar/a1/pay-3.html` |
| `chavash-grammatika/pay-4.html` | Chuvash (`cv`) | HTML | 2935 B (2.9 KB) | Topic Manual Module | `manuals/cv/grammar/a1/pay-4.html` |
| `chavash-grammatika/topics/halkhi-vakhat.html` | Chuvash (`cv`) | HTML | 4678 B (4.6 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/halkhi-vakhat.html` |
| `chavash-grammatika/topics/hisep-yachsem-tata-padezh.html` | Chuvash (`cv`) | HTML | 4940 B (4.8 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/hisep-yachsem-tata-padezh.html` |
| `chavash-grammatika/topics/hisep-yachsem-tata-vakhat.html` | Chuvash (`cv`) | HTML | 4785 B (4.7 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/hisep-yachsem-tata-vakhat.html` |
| `chavash-grammatika/topics/ilek-padezhe.html` | Chuvash (`cv`) | HTML | 4469 B (4.4 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/ilek-padezhe.html` |
| `chavash-grammatika/topics/irtne-vakhat.html` | Chuvash (`cv`) | HTML | 4453 B (4.3 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/irtne-vakhat.html` |
| `chavash-grammatika/topics/kataratu-mestoimenisem.html` | Chuvash (`cv`) | HTML | 4289 B (4.2 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/kataratu-mestoimenisem.html` |
| `chavash-grammatika/topics/padezhsem.html` | Chuvash (`cv`) | HTML | 5118 B (5.0 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/padezhsem.html` |
| `chavash-grammatika/topics/palla-yachsem.html` | Chuvash (`cv`) | HTML | 4471 B (4.4 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/palla-yachsem.html` |
| `chavash-grammatika/topics/perleshteru-padezhe.html` | Chuvash (`cv`) | HTML | 4521 B (4.4 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/perleshteru-padezhe.html` |
| `chavash-grammatika/topics/posllelogsem.html` | Chuvash (`cv`) | HTML | 4811 B (4.7 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/posllelogsem.html` |
| `chavash-grammatika/topics/prinadlezhnost-affikssam.html` | Chuvash (`cv`) | HTML | 4141 B (4.0 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/prinadlezhnost-affikssam.html` |
| `chavash-grammatika/topics/pulayas-vakhat.html` | Chuvash (`cv`) | HTML | 4120 B (4.0 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/pulayas-vakhat.html` |
| `chavash-grammatika/topics/pur-suk.html` | Chuvash (`cv`) | HTML | 4079 B (4.0 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/pur-suk.html` |
| `chavash-grammatika/topics/samakh-yerki.html` | Chuvash (`cv`) | HTML | 4468 B (4.4 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/samakh-yerki.html` |
| `chavash-grammatika/topics/sapat-mestoimenisem.html` | Chuvash (`cv`) | HTML | 4423 B (4.3 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/sapat-mestoimenisem.html` |
| `chavash-grammatika/topics/sarla-padezh.html` | Chuvash (`cv`) | HTML | 4385 B (4.3 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/sarla-padezh.html` |
| `chavash-grammatika/topics/sasamssam-tata-singarmonizm.html` | Chuvash (`cv`) | HTML | 4143 B (4.0 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/sasamssam-tata-singarmonizm.html` |
| `chavash-grammatika/topics/shulakh-tata-sahak.html` | Chuvash (`cv`) | HTML | 4293 B (4.2 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/shulakh-tata-sahak.html` |
| `chavash-grammatika/topics/suklokh-kalapashsem.html` | Chuvash (`cv`) | HTML | 4676 B (4.6 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/suklokh-kalapashsem.html` |
| `chavash-grammatika/topics/sutak-padezh.html` | Chuvash (`cv`) | HTML | 4392 B (4.3 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/sutak-padezh.html` |
| `chavash-grammatika/topics/tanlashtaru-darazhe.html` | Chuvash (`cv`) | HTML | 4886 B (4.8 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/tanlashtaru-darazhe.html` |
| `chavash-grammatika/topics/tukhu-padezhe.html` | Chuvash (`cv`) | HTML | 4466 B (4.4 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/tukhu-padezhe.html` |
| `chavash-grammatika/topics/vyran-padezhe.html` | Chuvash (`cv`) | HTML | 4406 B (4.3 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/vyran-padezhe.html` |
| `chavash-grammatika/topics/vyran-vakhat-padezhe.html` | Chuvash (`cv`) | HTML | 4475 B (4.4 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/vyran-vakhat-padezhe.html` |
| `chavash-grammatika/topics/yat-padezhe.html` | Chuvash (`cv`) | HTML | 4578 B (4.5 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/yat-padezhe.html` |
| `chavash-grammatika/topics/ytu-kalapashsem.html` | Chuvash (`cv`) | HTML | 4406 B (4.3 KB) | Topic Manual Module | `manuals/cv/grammar/a1/topics/ytu-kalapashsem.html` |
| `chavash-grammatika/assets/app.js` | Chuvash (`cv`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/cv/grammar/a1/assets/app.js` |
| `chavash-grammatika/assets/style.css` | Chuvash (`cv`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/cv/grammar/a1/assets/style.css` |
| `grammar-a2/appendix.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/appendix.html` |
| `grammar-a2/index.html` | English (`en`) | HTML | 1425 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/index.html` |
| `grammar-a2/part-0.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/part-0.html` |
| `grammar-a2/part-1.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-1.html` |
| `grammar-a2/part-2.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-2.html` |
| `grammar-a2/part-3.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-3.html` |
| `grammar-a2/part-4.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-4.html` |
| `grammar-a2/part-5.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-5.html` |
| `grammar-a2/part-6.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-6.html` |
| `grammar-a2/part-7.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/a2/part-7.html` |
| `grammar-a2/topics/as-as.html` | English (`en`) | HTML | 1475 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/as-as.html` |
| `grammar-a2/topics/comparatives-and-superlatives.html` | English (`en`) | HTML | 1595 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/comparatives-and-superlatives.html` |
| `grammar-a2/topics/could.html` | English (`en`) | HTML | 1475 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/could.html` |
| `grammar-a2/topics/defining-relative-clauses.html` | English (`en`) | HTML | 1575 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/defining-relative-clauses.html` |
| `grammar-a2/topics/do-vs-make.html` | English (`en`) | HTML | 1500 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/do-vs-make.html` |
| `grammar-a2/topics/either-or-neither-nor-both-and.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/either-or-neither-nor-both-and.html` |
| `grammar-a2/topics/expressing-purpose-to-for.html` | English (`en`) | HTML | 1575 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/expressing-purpose-to-for.html` |
| `grammar-a2/topics/first-conditional.html` | English (`en`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/first-conditional.html` |
| `grammar-a2/topics/future-time-clauses.html` | English (`en`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/future-time-clauses.html` |
| `grammar-a2/topics/have-to-must-mustnt.html` | English (`en`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/have-to-must-mustnt.html` |
| `grammar-a2/topics/how-questions.html` | English (`en`) | HTML | 1515 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/how-questions.html` |
| `grammar-a2/topics/however-although-because-so.html` | English (`en`) | HTML | 1585 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/however-although-because-so.html` |
| `grammar-a2/topics/indefinite-pronouns.html` | English (`en`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/indefinite-pronouns.html` |
| `grammar-a2/topics/infinitives-and-gerunds.html` | English (`en`) | HTML | 1565 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/infinitives-and-gerunds.html` |
| `grammar-a2/topics/may-might.html` | English (`en`) | HTML | 1495 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/may-might.html` |
| `grammar-a2/topics/most-most-of-the-most.html` | English (`en`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/most-most-of-the-most.html` |
| `grammar-a2/topics/much-many-little-few.html` | English (`en`) | HTML | 1550 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/much-many-little-few.html` |
| `grammar-a2/topics/no-longer-any-longer-anymore.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/no-longer-any-longer-anymore.html` |
| `grammar-a2/topics/on-time-in-time-at-the-end-in-the-end.html` | English (`en`) | HTML | 1635 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/on-time-in-time-at-the-end-in-the-end.html` |
| `grammar-a2/topics/past-continuous.html` | English (`en`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-continuous.html` |
| `grammar-a2/topics/past-participles-1.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-participles-1.html` |
| `grammar-a2/topics/past-participles-2.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-participles-2.html` |
| `grammar-a2/topics/past-perfect.html` | English (`en`) | HTML | 1510 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-perfect.html` |
| `grammar-a2/topics/past-simple-review.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-simple-review.html` |
| `grammar-a2/topics/past-simple-vs-past-continuous.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/past-simple-vs-past-continuous.html` |
| `grammar-a2/topics/prepositions-of-movement.html` | English (`en`) | HTML | 1570 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/prepositions-of-movement.html` |
| `grammar-a2/topics/present-and-past-simple-passive.html` | English (`en`) | HTML | 1605 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-and-past-simple-passive.html` |
| `grammar-a2/topics/present-continuous-for-future.html` | English (`en`) | HTML | 1595 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-continuous-for-future.html` |
| `grammar-a2/topics/present-perfect-ever-never-for-since.html` | English (`en`) | HTML | 1630 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-ever-never-for-since.html` |
| `grammar-a2/topics/present-perfect-form-use.html` | English (`en`) | HTML | 1570 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-form-use.html` |
| `grammar-a2/topics/present-perfect-just-already-yet.html` | English (`en`) | HTML | 1610 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-just-already-yet.html` |
| `grammar-a2/topics/present-perfect-vs-past-simple.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-perfect-vs-past-simple.html` |
| `grammar-a2/topics/present-simple-vs-present-continuous.html` | English (`en`) | HTML | 1630 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/present-simple-vs-present-continuous.html` |
| `grammar-a2/topics/pronouns-review.html` | English (`en`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/pronouns-review.html` |
| `grammar-a2/topics/question-forms.html` | English (`en`) | HTML | 1520 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/question-forms.html` |
| `grammar-a2/topics/reported-speech.html` | English (`en`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/reported-speech.html` |
| `grammar-a2/topics/review-of-verb-tenses.html` | English (`en`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/review-of-verb-tenses.html` |
| `grammar-a2/topics/second-conditional.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/second-conditional.html` |
| `grammar-a2/topics/should-shouldnt.html` | English (`en`) | HTML | 1525 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/should-shouldnt.html` |
| `grammar-a2/topics/so-neither.html` | English (`en`) | HTML | 1500 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/so-neither.html` |
| `grammar-a2/topics/too-and-enough.html` | English (`en`) | HTML | 1520 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/too-and-enough.html` |
| `grammar-a2/topics/used-to.html` | English (`en`) | HTML | 1485 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/used-to.html` |
| `grammar-a2/topics/uses-of-get.html` | English (`en`) | HTML | 1505 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/uses-of-get.html` |
| `grammar-a2/topics/uses-of-go.html` | English (`en`) | HTML | 1500 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/uses-of-go.html` |
| `grammar-a2/topics/will-vs-going-to.html` | English (`en`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/will-vs-going-to.html` |
| `grammar-a2/topics/zero-conditional.html` | English (`en`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/a2/topics/zero-conditional.html` |
| `grammar-a2/assets/app.js` | English (`en`) | JS | 4189 B (4.1 KB) | JavaScript Application Logic | `manuals/en/grammar/a2/assets/app.js` |
| `grammar-a2/assets/style.css` | English (`en`) | CSS | 16123 B (15.7 KB) | CSS Stylesheet | `manuals/en/grammar/a2/assets/style.css` |
| `leksilogio-ellinikon/enotita-1.html` | Greek (`el`) | HTML | 4723 B (4.6 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/enotita-1.html` |
| `leksilogio-ellinikon/enotita-2.html` | Greek (`el`) | HTML | 4229 B (4.1 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/enotita-2.html` |
| `leksilogio-ellinikon/enotita-3.html` | Greek (`el`) | HTML | 4133 B (4.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/enotita-3.html` |
| `leksilogio-ellinikon/enotita-4.html` | Greek (`el`) | HTML | 3611 B (3.5 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/enotita-4.html` |
| `leksilogio-ellinikon/enotita-5.html` | Greek (`el`) | HTML | 4199 B (4.1 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/enotita-5.html` |
| `leksilogio-ellinikon/enotita-6.html` | Greek (`el`) | HTML | 3823 B (3.7 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/enotita-6.html` |
| `leksilogio-ellinikon/index.html` | Greek (`el`) | HTML | 6246 B (6.1 KB) | Hub / Section Index | `manuals/el/vocabulary/a1/index.html` |
| `leksilogio-ellinikon/topics/agores-kai-chrimata.html` | Greek (`el`) | HTML | 8172 B (8.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/agores-kai-chrimata.html` |
| `leksilogio-ellinikon/topics/arithmoi-kai-metrisi.html` | Greek (`el`) | HTML | 7980 B (7.8 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/arithmoi-kai-metrisi.html` |
| `leksilogio-ellinikon/topics/chairetismoi-kai-gnorimia.html` | Greek (`el`) | HTML | 10338 B (10.1 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/chairetismoi-kai-gnorimia.html` |
| `leksilogio-ellinikon/topics/chobpi-kai-eleftheros-chronos.html` | Greek (`el`) | HTML | 8168 B (8.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/chobpi-kai-eleftheros-chronos.html` |
| `leksilogio-ellinikon/topics/chores-glosses-kai-ethnikotites.html` | Greek (`el`) | HTML | 8315 B (8.1 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/chores-glosses-kai-ethnikotites.html` |
| `leksilogio-ellinikon/topics/epaggelmata-kai-ergasia.html` | Greek (`el`) | HTML | 8359 B (8.2 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/epaggelmata-kai-ergasia.html` |
| `leksilogio-ellinikon/topics/estiatorio-kai-kafenio.html` | Greek (`el`) | HTML | 7927 B (7.7 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/estiatorio-kai-kafenio.html` |
| `leksilogio-ellinikon/topics/imeres-mines-kai-imerominies.html` | Greek (`el`) | HTML | 8173 B (8.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/imeres-mines-kai-imerominies.html` |
| `leksilogio-ellinikon/topics/kairos-kai-epoches.html` | Greek (`el`) | HTML | 7922 B (7.7 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/kairos-kai-epoches.html` |
| `leksilogio-ellinikon/topics/metafores-kai-taxidia.html` | Greek (`el`) | HTML | 8243 B (8.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/metafores-kai-taxidia.html` |
| `leksilogio-ellinikon/topics/oikogeneia-kai-syggeneis.html` | Greek (`el`) | HTML | 9808 B (9.6 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/oikogeneia-kai-syggeneis.html` |
| `leksilogio-ellinikon/topics/ora-kai-kathimerinotita.html` | Greek (`el`) | HTML | 7981 B (7.8 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/ora-kai-kathimerinotita.html` |
| `leksilogio-ellinikon/topics/perigrafi-anthropou.html` | Greek (`el`) | HTML | 8232 B (8.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/perigrafi-anthropou.html` |
| `leksilogio-ellinikon/topics/poli-kai-topothesies.html` | Greek (`el`) | HTML | 8181 B (8.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/poli-kai-topothesies.html` |
| `leksilogio-ellinikon/topics/roucha-kai-ypodimata.html` | Greek (`el`) | HTML | 7932 B (7.7 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/roucha-kai-ypodimata.html` |
| `leksilogio-ellinikon/topics/scholeio-kai-mathima.html` | Greek (`el`) | HTML | 8183 B (8.0 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/scholeio-kai-mathima.html` |
| `leksilogio-ellinikon/topics/soma-kai-ygeia.html` | Greek (`el`) | HTML | 8069 B (7.9 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/soma-kai-ygeia.html` |
| `leksilogio-ellinikon/topics/spiti-kai-epIPLA.html` | Greek (`el`) | HTML | 8893 B (8.7 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/spiti-kai-epIPLA.html` |
| `leksilogio-ellinikon/topics/synaisthimata-kai-diathesi.html` | Greek (`el`) | HTML | 8325 B (8.1 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/synaisthimata-kai-diathesi.html` |
| `leksilogio-ellinikon/topics/syndetikes-lexeis-kai-erotiseis.html` | Greek (`el`) | HTML | 8079 B (7.9 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/syndetikes-lexeis-kai-erotiseis.html` |
| `leksilogio-ellinikon/topics/technologia-kai-epikoinonia.html` | Greek (`el`) | HTML | 8343 B (8.1 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/technologia-kai-epikoinonia.html` |
| `leksilogio-ellinikon/topics/trofima-kai-pota.html` | Greek (`el`) | HTML | 7907 B (7.7 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/trofima-kai-pota.html` |
| `leksilogio-ellinikon/topics/vasika-rimata-a1.html` | Greek (`el`) | HTML | 7927 B (7.7 KB) | Topic Manual Module | `manuals/el/vocabulary/a1/topics/vasika-rimata-a1.html` |
| `leksilogio-ellinikon/assets/app.js` | Greek (`el`) | JS | 1744 B (1.7 KB) | JavaScript Application Logic | `manuals/el/vocabulary/a1/assets/app.js` |
| `leksilogio-ellinikon/assets/style.css` | Greek (`el`) | CSS | 11545 B (11.3 KB) | CSS Stylesheet | `manuals/el/vocabulary/a1/assets/style.css` |
| `bashqort-tele-leksikahy/bulek-1.html` | Bashkir (`ba`) | HTML | 2553 B (2.5 KB) | Hub / Section Index | `manuals/ba/vocabulary/a1/bulek-1.html` |
| `bashqort-tele-leksikahy/bulek-2.html` | Bashkir (`ba`) | HTML | 2378 B (2.3 KB) | Hub / Section Index | `manuals/ba/vocabulary/a1/bulek-2.html` |
| `bashqort-tele-leksikahy/bulek-3.html` | Bashkir (`ba`) | HTML | 2680 B (2.6 KB) | Hub / Section Index | `manuals/ba/vocabulary/a1/bulek-3.html` |
| `bashqort-tele-leksikahy/index.html` | Bashkir (`ba`) | HTML | 3090 B (3.0 KB) | Hub / Section Index | `manuals/ba/vocabulary/a1/index.html` |
| `bashqort-tele-leksikahy/topics/ashamlyqtar-ham-esemlektar.html` | Bashkir (`ba`) | HTML | 3788 B (3.7 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/ashamlyqtar-ham-esemlektar.html` |
| `bashqort-tele-leksikahy/topics/ghaila.html` | Bashkir (`ba`) | HTML | 3731 B (3.6 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/ghaila.html` |
| `bashqort-tele-leksikahy/topics/handar.html` | Bashkir (`ba`) | HTML | 3727 B (3.6 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/handar.html` |
| `bashqort-tele-leksikahy/topics/haua-torosho-ham-vaqyt.html` | Bashkir (`ba`) | HTML | 3765 B (3.7 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/haua-torosho-ham-vaqyt.html` |
| `bashqort-tele-leksikahy/topics/haulyq-alyshyu-ham-tanyshyu.html` | Bashkir (`ba`) | HTML | 3968 B (3.9 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/haulyq-alyshyu-ham-tanyshyu.html` |
| `bashqort-tele-leksikahy/topics/keshe-kauhahe.html` | Bashkir (`ba`) | HTML | 3669 B (3.6 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/keshe-kauhahe.html` |
| `bashqort-tele-leksikahy/topics/keyem-halym.html` | Bashkir (`ba`) | HTML | 3813 B (3.7 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/keyem-halym.html` |
| `bashqort-tele-leksikahy/topics/khezmat-ham-honardar.html` | Bashkir (`ba`) | HTML | 3943 B (3.9 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/khezmat-ham-honardar.html` |
| `bashqort-tele-leksikahy/topics/top-qolymdar.html` | Bashkir (`ba`) | HTML | 3807 B (3.7 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/top-qolymdar.html` |
| `bashqort-tele-leksikahy/topics/tostar.html` | Bashkir (`ba`) | HTML | 3695 B (3.6 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/tostar.html` |
| `bashqort-tele-leksikahy/topics/yort-ham-bulmalar.html` | Bashkir (`ba`) | HTML | 3766 B (3.7 KB) | Topic Manual Module | `manuals/ba/vocabulary/a1/topics/yort-ham-bulmalar.html` |
| `bashqort-tele-leksikahy/assets/app.js` | Bashkir (`ba`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/ba/vocabulary/a1/assets/app.js` |
| `bashqort-tele-leksikahy/assets/style.css` | Bashkir (`ba`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/ba/vocabulary/a1/assets/style.css` |
| `grammar-b2/appendix.html` | English (`en`) | HTML | 1440 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/b2/appendix.html` |
| `grammar-b2/index.html` | English (`en`) | HTML | 1425 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/index.html` |
| `grammar-b2/part-0.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Topic Manual Module | `manuals/en/grammar/b2/part-0.html` |
| `grammar-b2/part-1.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-1.html` |
| `grammar-b2/part-10.html` | English (`en`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-10.html` |
| `grammar-b2/part-11.html` | English (`en`) | HTML | 1435 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-11.html` |
| `grammar-b2/part-2.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-2.html` |
| `grammar-b2/part-3.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-3.html` |
| `grammar-b2/part-4.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-4.html` |
| `grammar-b2/part-5.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-5.html` |
| `grammar-b2/part-6.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-6.html` |
| `grammar-b2/part-7.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-7.html` |
| `grammar-b2/part-8.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-8.html` |
| `grammar-b2/part-9.html` | English (`en`) | HTML | 1430 B (1.4 KB) | Hub / Section Index | `manuals/en/grammar/b2/part-9.html` |
| `grammar-b2/topics/adverbs-position-and-types.html` | English (`en`) | HTML | 1580 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/adverbs-position-and-types.html` |
| `grammar-b2/topics/alternatives-to-if.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/alternatives-to-if.html` |
| `grammar-b2/topics/clauses-of-contrast-purpose-reason-and-result.html` | English (`en`) | HTML | 1675 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/clauses-of-contrast-purpose-reason-and-result.html` |
| `grammar-b2/topics/cleft-sentences-and-emphasis.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/cleft-sentences-and-emphasis.html` |
| `grammar-b2/topics/compound-nouns.html` | English (`en`) | HTML | 1520 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/compound-nouns.html` |
| `grammar-b2/topics/conditional-inversion.html` | English (`en`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/conditional-inversion.html` |
| `grammar-b2/topics/dependent-prepositions-noun-preposition.html` | English (`en`) | HTML | 1645 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/dependent-prepositions-noun-preposition.html` |
| `grammar-b2/topics/discourse-markers.html` | English (`en`) | HTML | 1535 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/discourse-markers.html` |
| `grammar-b2/topics/distancing-passive-reporting.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/distancing-passive-reporting.html` |
| `grammar-b2/topics/formal-vs-informal-register.html` | English (`en`) | HTML | 1585 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/formal-vs-informal-register.html` |
| `grammar-b2/topics/future-forms-expressing-future-time.html` | English (`en`) | HTML | 1625 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/future-forms-expressing-future-time.html` |
| `grammar-b2/topics/future-in-the-past.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/future-in-the-past.html` |
| `grammar-b2/topics/generic-common-gender-pronouns.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/generic-common-gender-pronouns.html` |
| `grammar-b2/topics/gerunds-and-infinitives-complex-forms.html` | English (`en`) | HTML | 1635 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/gerunds-and-infinitives-complex-forms.html` |
| `grammar-b2/topics/get-different-meanings.html` | English (`en`) | HTML | 1560 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/get-different-meanings.html` |
| `grammar-b2/topics/gradable-vs-extreme-adjectives.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/gradable-vs-extreme-adjectives.html` |
| `grammar-b2/topics/inversion-after-negative-adverbials.html` | English (`en`) | HTML | 1625 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/inversion-after-negative-adverbials.html` |
| `grammar-b2/topics/its-time.html` | English (`en`) | HTML | 1490 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/its-time.html` |
| `grammar-b2/topics/mandative-subjunctive.html` | English (`en`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/mandative-subjunctive.html` |
| `grammar-b2/topics/mixed-conditionals.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/mixed-conditionals.html` |
| `grammar-b2/topics/narrative-tenses.html` | English (`en`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/narrative-tenses.html` |
| `grammar-b2/topics/order-of-adjectives.html` | English (`en`) | HTML | 1545 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/order-of-adjectives.html` |
| `grammar-b2/topics/other-ways-to-express-future.html` | English (`en`) | HTML | 1590 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/other-ways-to-express-future.html` |
| `grammar-b2/topics/participle-clauses.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/participle-clauses.html` |
| `grammar-b2/topics/passive-verbs-with-two-objects.html` | English (`en`) | HTML | 1600 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/passive-verbs-with-two-objects.html` |
| `grammar-b2/topics/past-tenses-review.html` | English (`en`) | HTML | 1540 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/past-tenses-review.html` |
| `grammar-b2/topics/permission-obligation-and-prohibition.html` | English (`en`) | HTML | 1635 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/permission-obligation-and-prohibition.html` |
| `grammar-b2/topics/phrasal-verbs-extended-patterns.html` | English (`en`) | HTML | 1605 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/phrasal-verbs-extended-patterns.html` |
| `grammar-b2/topics/possessive-s-with-time-expressions.html` | English (`en`) | HTML | 1620 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/possessive-s-with-time-expressions.html` |
| `grammar-b2/topics/present-tenses-review.html` | English (`en`) | HTML | 1555 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/present-tenses-review.html` |
| `grammar-b2/topics/reflexive-and-reciprocal-pronouns.html` | English (`en`) | HTML | 1615 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/reflexive-and-reciprocal-pronouns.html` |
| `grammar-b2/topics/relative-clauses-review-and-deepening.html` | English (`en`) | HTML | 1635 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/relative-clauses-review-and-deepening.html` |
| `grammar-b2/topics/speculation-and-deduction-deepening.html` | English (`en`) | HTML | 1625 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/speculation-and-deduction-deepening.html` |
| `grammar-b2/topics/used-to-vs-would.html` | English (`en`) | HTML | 1530 B (1.5 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/used-to-vs-would.html` |
| `grammar-b2/topics/verb-object-infinitive-gerund.html` | English (`en`) | HTML | 1595 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/verb-object-infinitive-gerund.html` |
| `grammar-b2/topics/whatever-whenever-wherever-whoever-however.html` | English (`en`) | HTML | 1660 B (1.6 KB) | Topic Manual Module | `manuals/en/grammar/b2/topics/whatever-whenever-wherever-whoever-however.html` |
| `grammar-b2/assets/app.js` | English (`en`) | JS | 4189 B (4.1 KB) | JavaScript Application Logic | `manuals/en/grammar/b2/assets/app.js` |
| `grammar-b2/assets/style.css` | English (`en`) | CSS | 14943 B (14.6 KB) | CSS Stylesheet | `manuals/en/grammar/b2/assets/style.css` |
| `leksika-russkogo-yazyka/index.html` | Russian (`ru`) | HTML | 6108 B (6.0 KB) | Hub / Section Index | `manuals/ru/vocabulary/a1/index.html` |
| `leksika-russkogo-yazyka/razdel-1.html` | Russian (`ru`) | HTML | 4616 B (4.5 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/razdel-1.html` |
| `leksika-russkogo-yazyka/razdel-2.html` | Russian (`ru`) | HTML | 4005 B (3.9 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/razdel-2.html` |
| `leksika-russkogo-yazyka/razdel-3.html` | Russian (`ru`) | HTML | 4077 B (4.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/razdel-3.html` |
| `leksika-russkogo-yazyka/razdel-4.html` | Russian (`ru`) | HTML | 3569 B (3.5 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/razdel-4.html` |
| `leksika-russkogo-yazyka/razdel-5.html` | Russian (`ru`) | HTML | 4132 B (4.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/razdel-5.html` |
| `leksika-russkogo-yazyka/razdel-6.html` | Russian (`ru`) | HTML | 3782 B (3.7 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/razdel-6.html` |
| `leksika-russkogo-yazyka/topics/dni-nedeli-i-mesyatsy.html` | Russian (`ru`) | HTML | 6125 B (6.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/dni-nedeli-i-mesyatsy.html` |
| `leksika-russkogo-yazyka/topics/dom-i-kvartira.html` | Russian (`ru`) | HTML | 6867 B (6.7 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/dom-i-kvartira.html` |
| `leksika-russkogo-yazyka/topics/eda-i-produkty.html` | Russian (`ru`) | HTML | 6097 B (6.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/eda-i-produkty.html` |
| `leksika-russkogo-yazyka/topics/glavnye-glagoly-a1.html` | Russian (`ru`) | HTML | 6274 B (6.1 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/glavnye-glagoly-a1.html` |
| `leksika-russkogo-yazyka/topics/gorod-i-mesta.html` | Russian (`ru`) | HTML | 6215 B (6.1 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/gorod-i-mesta.html` |
| `leksika-russkogo-yazyka/topics/napitki-i-kafe.html` | Russian (`ru`) | HTML | 6233 B (6.1 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/napitki-i-kafe.html` |
| `leksika-russkogo-yazyka/topics/odezhda-i-obuv.html` | Russian (`ru`) | HTML | 6221 B (6.1 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/odezhda-i-obuv.html` |
| `leksika-russkogo-yazyka/topics/opisanie-i-prilagatelnye.html` | Russian (`ru`) | HTML | 6275 B (6.1 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/opisanie-i-prilagatelnye.html` |
| `leksika-russkogo-yazyka/topics/pogoda-i-priroda.html` | Russian (`ru`) | HTML | 6028 B (5.9 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/pogoda-i-priroda.html` |
| `leksika-russkogo-yazyka/topics/pokupki-i-magazin.html` | Russian (`ru`) | HTML | 6206 B (6.1 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/pokupki-i-magazin.html` |
| `leksika-russkogo-yazyka/topics/privetstvie-i-znakomstvo.html` | Russian (`ru`) | HTML | 7746 B (7.6 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/privetstvie-i-znakomstvo.html` |
| `leksika-russkogo-yazyka/topics/professii-i-rabota.html` | Russian (`ru`) | HTML | 6186 B (6.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/professii-i-rabota.html` |
| `leksika-russkogo-yazyka/topics/semya-i-lyudi.html` | Russian (`ru`) | HTML | 7601 B (7.4 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/semya-i-lyudi.html` |
| `leksika-russkogo-yazyka/topics/strany-i-yazyki.html` | Russian (`ru`) | HTML | 6448 B (6.3 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/strany-i-yazyki.html` |
| `leksika-russkogo-yazyka/topics/svobodnoe-vremya-i-khobbi.html` | Russian (`ru`) | HTML | 6166 B (6.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/svobodnoe-vremya-i-khobbi.html` |
| `leksika-russkogo-yazyka/topics/svyaz-i-internet.html` | Russian (`ru`) | HTML | 6499 B (6.3 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/svyaz-i-internet.html` |
| `leksika-russkogo-yazyka/topics/svyazuyushchie-slova.html` | Russian (`ru`) | HTML | 6055 B (5.9 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/svyazuyushchie-slova.html` |
| `leksika-russkogo-yazyka/topics/transport-i-poezdki.html` | Russian (`ru`) | HTML | 6208 B (6.1 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/transport-i-poezdki.html` |
| `leksika-russkogo-yazyka/topics/tsifry-i-chisla.html` | Russian (`ru`) | HTML | 6131 B (6.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/tsifry-i-chisla.html` |
| `leksika-russkogo-yazyka/topics/ucheba-i-klass.html` | Russian (`ru`) | HTML | 6300 B (6.2 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/ucheba-i-klass.html` |
| `leksika-russkogo-yazyka/topics/vneshnost-i-kharakter.html` | Russian (`ru`) | HTML | 6123 B (6.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/vneshnost-i-kharakter.html` |
| `leksika-russkogo-yazyka/topics/vremya-i-raspisanie.html` | Russian (`ru`) | HTML | 6092 B (5.9 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/vremya-i-raspisanie.html` |
| `leksika-russkogo-yazyka/topics/zdorove-i-samochuvstvie.html` | Russian (`ru`) | HTML | 6183 B (6.0 KB) | Topic Manual Module | `manuals/ru/vocabulary/a1/topics/zdorove-i-samochuvstvie.html` |
| `leksika-russkogo-yazyka/assets/app.js` | Russian (`ru`) | JS | 3850 B (3.8 KB) | JavaScript Application Logic | `manuals/ru/vocabulary/a1/assets/app.js` |
| `leksika-russkogo-yazyka/assets/style.css` | Russian (`ru`) | CSS | 12999 B (12.7 KB) | CSS Stylesheet | `manuals/ru/vocabulary/a1/assets/style.css` |
| `grammatika-russkogo-yazyka/bonus-a2.html` | Russian (`ru`) | HTML | 3544 B (3.5 KB) | Level Directory Hub | `manuals/ru/grammar/a1/bonus-a2.html` |
| `grammatika-russkogo-yazyka/chast-0.html` | Russian (`ru`) | HTML | 3960 B (3.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/chast-0.html` |
| `grammatika-russkogo-yazyka/chast-1.html` | Russian (`ru`) | HTML | 5090 B (5.0 KB) | Topic Manual Module | `manuals/ru/grammar/a1/chast-1.html` |
| `grammatika-russkogo-yazyka/chast-2.html` | Russian (`ru`) | HTML | 5677 B (5.5 KB) | Topic Manual Module | `manuals/ru/grammar/a1/chast-2.html` |
| `grammatika-russkogo-yazyka/chast-3.html` | Russian (`ru`) | HTML | 4256 B (4.2 KB) | Topic Manual Module | `manuals/ru/grammar/a1/chast-3.html` |
| `grammatika-russkogo-yazyka/chast-4.html` | Russian (`ru`) | HTML | 3890 B (3.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/chast-4.html` |
| `grammatika-russkogo-yazyka/chast-5.html` | Russian (`ru`) | HTML | 5329 B (5.2 KB) | Topic Manual Module | `manuals/ru/grammar/a1/chast-5.html` |
| `grammatika-russkogo-yazyka/index.html` | Russian (`ru`) | HTML | 8068 B (7.9 KB) | Hub / Section Index | `manuals/ru/grammar/a1/index.html` |
| `grammatika-russkogo-yazyka/prilozhenie.html` | Russian (`ru`) | HTML | 3503 B (3.4 KB) | Topic Manual Module | `manuals/ru/grammar/a1/prilozhenie.html` |
| `grammatika-russkogo-yazyka/topics/alfavit.html` | Russian (`ru`) | HTML | 6507 B (6.4 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/alfavit.html` |
| `grammatika-russkogo-yazyka/topics/bez-artikley.html` | Russian (`ru`) | HTML | 5395 B (5.3 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/bez-artikley.html` |
| `grammatika-russkogo-yazyka/topics/bez-glagola-byt.html` | Russian (`ru`) | HTML | 5060 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/bez-glagola-byt.html` |
| `grammatika-russkogo-yazyka/topics/budushchee-vremya-spryazhenie.html` | Russian (`ru`) | HTML | 5009 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/budushchee-vremya-spryazhenie.html` |
| `grammatika-russkogo-yazyka/topics/budushchee-vremya.html` | Russian (`ru`) | HTML | 4964 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/budushchee-vremya.html` |
| `grammatika-russkogo-yazyka/topics/chisla-dni-mesyatsy.html` | Russian (`ru`) | HTML | 4244 B (4.1 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/chisla-dni-mesyatsy.html` |
| `grammatika-russkogo-yazyka/topics/chislitelnye-i-padezh.html` | Russian (`ru`) | HTML | 4806 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/chislitelnye-i-padezh.html` |
| `grammatika-russkogo-yazyka/topics/chto-takoe-padezh.html` | Russian (`ru`) | HTML | 5064 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/chto-takoe-padezh.html` |
| `grammatika-russkogo-yazyka/topics/datelnyy-padezh.html` | Russian (`ru`) | HTML | 4774 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/datelnyy-padezh.html` |
| `grammatika-russkogo-yazyka/topics/esli-by-nerealnoe-uslovie.html` | Russian (`ru`) | HTML | 4806 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/esli-by-nerealnoe-uslovie.html` |
| `grammatika-russkogo-yazyka/topics/esli-realnoe-uslovie.html` | Russian (`ru`) | HTML | 4968 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/esli-realnoe-uslovie.html` |
| `grammatika-russkogo-yazyka/topics/etot-eta-eto-eti.html` | Russian (`ru`) | HTML | 5209 B (5.1 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/etot-eta-eto-eti.html` |
| `grammatika-russkogo-yazyka/topics/glagoly-dvizheniya.html` | Russian (`ru`) | HTML | 5157 B (5.0 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/glagoly-dvizheniya.html` |
| `grammatika-russkogo-yazyka/topics/grammaticheskiy-rod.html` | Russian (`ru`) | HTML | 5325 B (5.2 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/grammaticheskiy-rod.html` |
| `grammatika-russkogo-yazyka/topics/intonatsiya.html` | Russian (`ru`) | HTML | 5487 B (5.4 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/intonatsiya.html` |
| `grammatika-russkogo-yazyka/topics/koren-pristavka-suffiks.html` | Russian (`ru`) | HTML | 5358 B (5.2 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/koren-pristavka-suffiks.html` |
| `grammatika-russkogo-yazyka/topics/kotoryy-chas.html` | Russian (`ru`) | HTML | 4677 B (4.6 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/kotoryy-chas.html` |
| `grammatika-russkogo-yazyka/topics/kotoryy.html` | Russian (`ru`) | HTML | 4941 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/kotoryy.html` |
| `grammatika-russkogo-yazyka/topics/kratkie-prilagatelnye.html` | Russian (`ru`) | HTML | 4970 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/kratkie-prilagatelnye.html` |
| `grammatika-russkogo-yazyka/topics/lichnye-mestoimeniya-padezhi.html` | Russian (`ru`) | HTML | 6903 B (6.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/lichnye-mestoimeniya-padezhi.html` |
| `grammatika-russkogo-yazyka/topics/lyubit-nravitsya.html` | Russian (`ru`) | HTML | 5044 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/lyubit-nravitsya.html` |
| `grammatika-russkogo-yazyka/topics/mnogo-malo-skolko.html` | Russian (`ru`) | HTML | 4967 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/mnogo-malo-skolko.html` |
| `grammatika-russkogo-yazyka/topics/mnozhestvennoe-chislo.html` | Russian (`ru`) | HTML | 6460 B (6.3 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/mnozhestvennoe-chislo.html` |
| `grammatika-russkogo-yazyka/topics/moch-i-umet.html` | Russian (`ru`) | HTML | 4915 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/moch-i-umet.html` |
| `grammatika-russkogo-yazyka/topics/mozhno-nelzya-nuzhno.html` | Russian (`ru`) | HTML | 5056 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/mozhno-nelzya-nuzhno.html` |
| `grammatika-russkogo-yazyka/topics/nado-ili-dolzhen.html` | Russian (`ru`) | HTML | 5038 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/nado-ili-dolzhen.html` |
| `grammatika-russkogo-yazyka/topics/narechiya-chastoty.html` | Russian (`ru`) | HTML | 4772 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/narechiya-chastoty.html` |
| `grammatika-russkogo-yazyka/topics/narechiya-obraza-deystviya.html` | Russian (`ru`) | HTML | 4842 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/narechiya-obraza-deystviya.html` |
| `grammatika-russkogo-yazyka/topics/nastoyashchee-vremya.html` | Russian (`ru`) | HTML | 5092 B (5.0 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/nastoyashchee-vremya.html` |
| `grammatika-russkogo-yazyka/topics/osobyy-glagol-khotet.html` | Russian (`ru`) | HTML | 4822 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/osobyy-glagol-khotet.html` |
| `grammatika-russkogo-yazyka/topics/polnoe-sklonenie.html` | Russian (`ru`) | HTML | 4856 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/polnoe-sklonenie.html` |
| `grammatika-russkogo-yazyka/topics/poryadkovye-chislitelnye.html` | Russian (`ru`) | HTML | 4795 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/poryadkovye-chislitelnye.html` |
| `grammatika-russkogo-yazyka/topics/poryadok-slov.html` | Russian (`ru`) | HTML | 4887 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/poryadok-slov.html` |
| `grammatika-russkogo-yazyka/topics/povelitelnoe-naklonenie.html` | Russian (`ru`) | HTML | 5024 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/povelitelnoe-naklonenie.html` |
| `grammatika-russkogo-yazyka/topics/predlogi-mesta.html` | Russian (`ru`) | HTML | 4864 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/predlogi-mesta.html` |
| `grammatika-russkogo-yazyka/topics/predlogi-vremeni.html` | Russian (`ru`) | HTML | 4835 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/predlogi-vremeni.html` |
| `grammatika-russkogo-yazyka/topics/predlozhnyy-padezh.html` | Russian (`ru`) | HTML | 4785 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/predlozhnyy-padezh.html` |
| `grammatika-russkogo-yazyka/topics/prevoskhodnaya-stepen.html` | Russian (`ru`) | HTML | 4844 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/prevoskhodnaya-stepen.html` |
| `grammatika-russkogo-yazyka/topics/prilagatelnye.html` | Russian (`ru`) | HTML | 5100 B (5.0 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/prilagatelnye.html` |
| `grammatika-russkogo-yazyka/topics/prityazhatelnye-mestoimeniya.html` | Russian (`ru`) | HTML | 5795 B (5.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/prityazhatelnye-mestoimeniya.html` |
| `grammatika-russkogo-yazyka/topics/proshedshee-vremya.html` | Russian (`ru`) | HTML | 4815 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/proshedshee-vremya.html` |
| `grammatika-russkogo-yazyka/topics/pryamaya-i-kosvennaya-rech.html` | Russian (`ru`) | HTML | 4987 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/pryamaya-i-kosvennaya-rech.html` |
| `grammatika-russkogo-yazyka/topics/roditelnyy-padezh.html` | Russian (`ru`) | HTML | 4880 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/roditelnyy-padezh.html` |
| `grammatika-russkogo-yazyka/topics/shkala-uverennosti.html` | Russian (`ru`) | HTML | 4206 B (4.1 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/shkala-uverennosti.html` |
| `grammatika-russkogo-yazyka/topics/skuchnyy-ili-skuchno.html` | Russian (`ru`) | HTML | 4900 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/skuchnyy-ili-skuchno.html` |
| `grammatika-russkogo-yazyka/topics/sovershennyy-i-nesovershennyy-vid.html` | Russian (`ru`) | HTML | 5365 B (5.2 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/sovershennyy-i-nesovershennyy-vid.html` |
| `grammatika-russkogo-yazyka/topics/soyuzy.html` | Russian (`ru`) | HTML | 4697 B (4.6 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/soyuzy.html` |
| `grammatika-russkogo-yazyka/topics/sravnitelnaya-stepen.html` | Russian (`ru`) | HTML | 4915 B (4.8 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/sravnitelnaya-stepen.html` |
| `grammatika-russkogo-yazyka/topics/tipy-predlozheniy.html` | Russian (`ru`) | HTML | 4389 B (4.3 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/tipy-predlozheniy.html` |
| `grammatika-russkogo-yazyka/topics/tverdye-i-myagkie-soglasnye.html` | Russian (`ru`) | HTML | 6041 B (5.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/tverdye-i-myagkie-soglasnye.html` |
| `grammatika-russkogo-yazyka/topics/tvoritelnyy-padezh.html` | Russian (`ru`) | HTML | 4840 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/tvoritelnyy-padezh.html` |
| `grammatika-russkogo-yazyka/topics/ty-i-vy.html` | Russian (`ru`) | HTML | 5098 B (5.0 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/ty-i-vy.html` |
| `grammatika-russkogo-yazyka/topics/u-menya-est.html` | Russian (`ru`) | HTML | 5002 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/u-menya-est.html` |
| `grammatika-russkogo-yazyka/topics/udarenie-i-reduktsiya-glasnykh.html` | Russian (`ru`) | HTML | 6325 B (6.2 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/udarenie-i-reduktsiya-glasnykh.html` |
| `grammatika-russkogo-yazyka/topics/usiliteli.html` | Russian (`ru`) | HTML | 4732 B (4.6 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/usiliteli.html` |
| `grammatika-russkogo-yazyka/topics/ves-kazhdyy-nikto-nishto.html` | Russian (`ru`) | HTML | 5472 B (5.3 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/ves-kazhdyy-nikto-nishto.html` |
| `grammatika-russkogo-yazyka/topics/vinitelnyy-padezh.html` | Russian (`ru`) | HTML | 4973 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/vinitelnyy-padezh.html` |
| `grammatika-russkogo-yazyka/topics/voprositelnye-slova.html` | Russian (`ru`) | HTML | 4807 B (4.7 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/voprositelnye-slova.html` |
| `grammatika-russkogo-yazyka/topics/ya-khotel-by-khotite.html` | Russian (`ru`) | HTML | 5011 B (4.9 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/ya-khotel-by-khotite.html` |
| `grammatika-russkogo-yazyka/topics/zvonkie-i-glukhie-soglasnye.html` | Russian (`ru`) | HTML | 5497 B (5.4 KB) | Topic Manual Module | `manuals/ru/grammar/a1/topics/zvonkie-i-glukhie-soglasnye.html` |
| `grammatika-russkogo-yazyka/assets/app.js` | Russian (`ru`) | JS | 5058 B (4.9 KB) | JavaScript Application Logic | `manuals/ru/grammar/a1/assets/app.js` |
| `grammatika-russkogo-yazyka/assets/style.css` | Russian (`ru`) | CSS | 20619 B (20.1 KB) | CSS Stylesheet | `manuals/ru/grammar/a1/assets/style.css` |
| `grammatica-italiana/capitolo-1.html` | Italian (`it`) | HTML | 2491 B (2.4 KB) | Topic Manual Module | `manuals/it/grammar/a1/capitolo-1.html` |
| `grammatica-italiana/capitolo-2.html` | Italian (`it`) | HTML | 3255 B (3.2 KB) | Topic Manual Module | `manuals/it/grammar/a1/capitolo-2.html` |
| `grammatica-italiana/capitolo-3.html` | Italian (`it`) | HTML | 2368 B (2.3 KB) | Topic Manual Module | `manuals/it/grammar/a1/capitolo-3.html` |
| `grammatica-italiana/capitolo-4.html` | Italian (`it`) | HTML | 2499 B (2.4 KB) | Topic Manual Module | `manuals/it/grammar/a1/capitolo-4.html` |
| `grammatica-italiana/capitolo-5.html` | Italian (`it`) | HTML | 3289 B (3.2 KB) | Topic Manual Module | `manuals/it/grammar/a1/capitolo-5.html` |
| `grammatica-italiana/index.html` | Italian (`it`) | HTML | 3658 B (3.6 KB) | Hub / Section Index | `manuals/it/grammar/a1/index.html` |
| `grammatica-italiana/topics/aggettivi-qualificativi.html` | Italian (`it`) | HTML | 3675 B (3.6 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/aggettivi-qualificativi.html` |
| `grammatica-italiana/topics/articoli-determinativi.html` | Italian (`it`) | HTML | 4238 B (4.1 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/articoli-determinativi.html` |
| `grammatica-italiana/topics/articoli-indeterminativi.html` | Italian (`it`) | HTML | 4196 B (4.1 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/articoli-indeterminativi.html` |
| `grammatica-italiana/topics/avverbi-frequenza-modo.html` | Italian (`it`) | HTML | 4080 B (4.0 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/avverbi-frequenza-modo.html` |
| `grammatica-italiana/topics/c-e-ci-sono.html` | Italian (`it`) | HTML | 3656 B (3.6 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/c-e-ci-sono.html` |
| `grammatica-italiana/topics/comparativo-superlativo.html` | Italian (`it`) | HTML | 4292 B (4.2 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/comparativo-superlativo.html` |
| `grammatica-italiana/topics/congiunzioni-fondamentali.html` | Italian (`it`) | HTML | 3910 B (3.8 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/congiunzioni-fondamentali.html` |
| `grammatica-italiana/topics/dimostrativi.html` | Italian (`it`) | HTML | 4069 B (4.0 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/dimostrativi.html` |
| `grammatica-italiana/topics/essere-avere.html` | Italian (`it`) | HTML | 4129 B (4.0 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/essere-avere.html` |
| `grammatica-italiana/topics/genere-nomi.html` | Italian (`it`) | HTML | 4080 B (4.0 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/genere-nomi.html` |
| `grammatica-italiana/topics/imperativo.html` | Italian (`it`) | HTML | 3902 B (3.8 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/imperativo.html` |
| `grammatica-italiana/topics/interrogativi.html` | Italian (`it`) | HTML | 3855 B (3.8 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/interrogativi.html` |
| `grammatica-italiana/topics/negazione.html` | Italian (`it`) | HTML | 3877 B (3.8 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/negazione.html` |
| `grammatica-italiana/topics/numeri-ora-tempo.html` | Italian (`it`) | HTML | 4043 B (3.9 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/numeri-ora-tempo.html` |
| `grammatica-italiana/topics/passato-prossimo-vs-imperfetto.html` | Italian (`it`) | HTML | 4057 B (4.0 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/passato-prossimo-vs-imperfetto.html` |
| `grammatica-italiana/topics/passato-prossimo.html` | Italian (`it`) | HTML | 3906 B (3.8 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/passato-prossimo.html` |
| `grammatica-italiana/topics/preposizioni-luogo.html` | Italian (`it`) | HTML | 4091 B (4.0 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/preposizioni-luogo.html` |
| `grammatica-italiana/topics/preposizioni-semplici.html` | Italian (`it`) | HTML | 3899 B (3.8 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/preposizioni-semplici.html` |
| `grammatica-italiana/topics/preposizioni-tempo.html` | Italian (`it`) | HTML | 4194 B (4.1 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/preposizioni-tempo.html` |
| `grammatica-italiana/topics/presente-regolare.html` | Italian (`it`) | HTML | 4020 B (3.9 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/presente-regolare.html` |
| `grammatica-italiana/topics/pronomi-personali.html` | Italian (`it`) | HTML | 4116 B (4.0 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/pronomi-personali.html` |
| `grammatica-italiana/topics/pronomi-possessivi.html` | Italian (`it`) | HTML | 4437 B (4.3 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/pronomi-possessivi.html` |
| `grammatica-italiana/topics/singolare-plurale.html` | Italian (`it`) | HTML | 4152 B (4.1 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/singolare-plurale.html` |
| `grammatica-italiana/topics/verbi-modali.html` | Italian (`it`) | HTML | 3902 B (3.8 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/verbi-modali.html` |
| `grammatica-italiana/topics/verbi-riflessivi.html` | Italian (`it`) | HTML | 4404 B (4.3 KB) | Topic Manual Module | `manuals/it/grammar/a1/topics/verbi-riflessivi.html` |
| `grammatica-italiana/assets/app.js` | Italian (`it`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/it/grammar/a1/assets/app.js` |
| `grammatica-italiana/assets/style.css` | Italian (`it`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/it/grammar/a1/assets/style.css` |
| `elliniki-grammatiki/index.html` | Greek (`el`) | HTML | 7002 B (6.8 KB) | Hub / Section Index | `manuals/el/grammar/a1/index.html` |
| `elliniki-grammatiki/meros-1.html` | Greek (`el`) | HTML | 5713 B (5.6 KB) | Topic Manual Module | `manuals/el/grammar/a1/meros-1.html` |
| `elliniki-grammatiki/meros-2.html` | Greek (`el`) | HTML | 5782 B (5.6 KB) | Hub / Section Index | `manuals/el/grammar/a1/meros-2.html` |
| `elliniki-grammatiki/meros-3.html` | Greek (`el`) | HTML | 4223 B (4.1 KB) | Hub / Section Index | `manuals/el/grammar/a1/meros-3.html` |
| `elliniki-grammatiki/meros-4.html` | Greek (`el`) | HTML | 4266 B (4.2 KB) | Topic Manual Module | `manuals/el/grammar/a1/meros-4.html` |
| `elliniki-grammatiki/parartima.html` | Greek (`el`) | HTML | 3119 B (3.0 KB) | Hub / Section Index | `manuals/el/grammar/a1/parartima.html` |
| `elliniki-grammatiki/xekinontas.html` | Greek (`el`) | HTML | 2886 B (2.8 KB) | Topic Manual Module | `manuals/el/grammar/a1/xekinontas.html` |
| `elliniki-grammatiki/topics/aftos-ekeinos.html` | Greek (`el`) | HTML | 4598 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/aftos-ekeinos.html` |
| `elliniki-grammatiki/topics/anomala-rimata-1.html` | Greek (`el`) | HTML | 4169 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/anomala-rimata-1.html` |
| `elliniki-grammatiki/topics/anomala-rimata-2.html` | Greek (`el`) | HTML | 4484 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/anomala-rimata-2.html` |
| `elliniki-grammatiki/topics/antonymies-antikeimenou.html` | Greek (`el`) | HTML | 4499 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/antonymies-antikeimenou.html` |
| `elliniki-grammatiki/topics/aoristos-anomala-rimata.html` | Greek (`el`) | HTML | 4172 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/aoristos-anomala-rimata.html` |
| `elliniki-grammatiki/topics/aoristos-kanonika-rimata.html` | Greek (`el`) | HTML | 4613 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/aoristos-kanonika-rimata.html` |
| `elliniki-grammatiki/topics/arithmoi-meres-kai-mines.html` | Greek (`el`) | HTML | 4942 B (4.8 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/arithmoi-meres-kai-mines.html` |
| `elliniki-grammatiki/topics/arthra-oristiko-kai-aoristo.html` | Greek (`el`) | HTML | 4511 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/arthra-oristiko-kai-aoristo.html` |
| `elliniki-grammatiki/topics/chronika-epirrimata.html` | Greek (`el`) | HTML | 4588 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/chronika-epirrimata.html` |
| `elliniki-grammatiki/topics/enestotas-omada-a.html` | Greek (`el`) | HTML | 4683 B (4.6 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/enestotas-omada-a.html` |
| `elliniki-grammatiki/topics/enestotas-omada-v.html` | Greek (`el`) | HTML | 4572 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/enestotas-omada-v.html` |
| `elliniki-grammatiki/topics/epirrimata-sychnotitas.html` | Greek (`el`) | HTML | 4531 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/epirrimata-sychnotitas.html` |
| `elliniki-grammatiki/topics/epirrimata-tropou.html` | Greek (`el`) | HTML | 4196 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/epirrimata-tropou.html` |
| `elliniki-grammatiki/topics/epitatika-moria.html` | Greek (`el`) | HTML | 4393 B (4.3 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/epitatika-moria.html` |
| `elliniki-grammatiki/topics/epitheta-kai-symfonia.html` | Greek (`el`) | HTML | 4253 B (4.2 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/epitheta-kai-symfonia.html` |
| `elliniki-grammatiki/topics/erotimatikes-lexeis.html` | Greek (`el`) | HTML | 4843 B (4.7 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/erotimatikes-lexeis.html` |
| `elliniki-grammatiki/topics/i-elliniki-ston-kosmo-1.html` | Greek (`el`) | HTML | 4521 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/i-elliniki-ston-kosmo-1.html` |
| `elliniki-grammatiki/topics/i-elliniki-ston-kosmo-2.html` | Greek (`el`) | HTML | 4696 B (4.6 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/i-elliniki-ston-kosmo-2.html` |
| `elliniki-grammatiki/topics/i-ora.html` | Greek (`el`) | HTML | 4142 B (4.0 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/i-ora.html` |
| `elliniki-grammatiki/topics/mellontas-tha.html` | Greek (`el`) | HTML | 4177 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/mellontas-tha.html` |
| `elliniki-grammatiki/topics/merikos-katholou-polys.html` | Greek (`el`) | HTML | 4442 B (4.3 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/merikos-katholou-polys.html` |
| `elliniki-grammatiki/topics/metrisima-kai-ametrita-ousiastika.html` | Greek (`el`) | HTML | 4564 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/metrisima-kai-ametrita-ousiastika.html` |
| `elliniki-grammatiki/topics/mou-aresei-na.html` | Greek (`el`) | HTML | 4152 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/mou-aresei-na.html` |
| `elliniki-grammatiki/topics/mporo.html` | Greek (`el`) | HTML | 4605 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/mporo.html` |
| `elliniki-grammatiki/topics/o-kairos.html` | Greek (`el`) | HTML | 4290 B (4.2 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/o-kairos.html` |
| `elliniki-grammatiki/topics/oi-oikogeneies-ton-rimaton.html` | Greek (`el`) | HTML | 4784 B (4.7 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/oi-oikogeneies-ton-rimaton.html` |
| `elliniki-grammatiki/topics/parelthontikos-tou-eimai.html` | Greek (`el`) | HTML | 4487 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/parelthontikos-tou-eimai.html` |
| `elliniki-grammatiki/topics/pliris-klisi-ousiastikou.html` | Greek (`el`) | HTML | 4915 B (4.8 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/pliris-klisi-ousiastikou.html` |
| `elliniki-grammatiki/topics/plithyntikos-arithmos.html` | Greek (`el`) | HTML | 4648 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/plithyntikos-arithmos.html` |
| `elliniki-grammatiki/topics/pos-leitourgei-afto-to-egcheiridio.html` | Greek (`el`) | HTML | 7778 B (7.6 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/pos-leitourgei-afto-to-egcheiridio.html` |
| `elliniki-grammatiki/topics/pos-se-lene.html` | Greek (`el`) | HTML | 4339 B (4.2 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/pos-se-lene.html` |
| `elliniki-grammatiki/topics/prepei.html` | Greek (`el`) | HTML | 4213 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/prepei.html` |
| `elliniki-grammatiki/topics/profora-kai-tonos.html` | Greek (`el`) | HTML | 6211 B (6.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/profora-kai-tonos.html` |
| `elliniki-grammatiki/topics/prosopikes-antonymies.html` | Greek (`el`) | HTML | 4800 B (4.7 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/prosopikes-antonymies.html` |
| `elliniki-grammatiki/topics/prostaktiki.html` | Greek (`el`) | HTML | 4450 B (4.3 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/prostaktiki.html` |
| `elliniki-grammatiki/topics/protheseis-chronou.html` | Greek (`el`) | HTML | 4356 B (4.3 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/protheseis-chronou.html` |
| `elliniki-grammatiki/topics/protheseis-topou.html` | Greek (`el`) | HTML | 4690 B (4.6 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/protheseis-topou.html` |
| `elliniki-grammatiki/topics/rimata-se-amai.html` | Greek (`el`) | HTML | 4178 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/rimata-se-amai.html` |
| `elliniki-grammatiki/topics/syndesmoi.html` | Greek (`el`) | HTML | 4463 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/syndesmoi.html` |
| `elliniki-grammatiki/topics/synkritikos-vathmos.html` | Greek (`el`) | HTML | 4488 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/synkritikos-vathmos.html` |
| `elliniki-grammatiki/topics/tha-ithela.html` | Greek (`el`) | HTML | 4254 B (4.2 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/tha-ithela.html` |
| `elliniki-grammatiki/topics/tinos-i-ktitiki-ptosi.html` | Greek (`el`) | HTML | 4534 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/tinos-i-ktitiki-ptosi.html` |
| `elliniki-grammatiki/topics/to-elliniko-alfavito.html` | Greek (`el`) | HTML | 7045 B (6.9 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/to-elliniko-alfavito.html` |
| `elliniki-grammatiki/topics/to-genos-ton-ousiastikon.html` | Greek (`el`) | HTML | 4460 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/to-genos-ton-ousiastikon.html` |
| `elliniki-grammatiki/topics/to-rima-echo.html` | Greek (`el`) | HTML | 4477 B (4.4 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/to-rima-echo.html` |
| `elliniki-grammatiki/topics/to-rima-eimai.html` | Greek (`el`) | HTML | 5429 B (5.3 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/to-rima-eimai.html` |
| `elliniki-grammatiki/topics/to-systima-ton-ptoseon.html` | Greek (`el`) | HTML | 4979 B (4.9 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/to-systima-ton-ptoseon.html` |
| `elliniki-grammatiki/topics/tora-i-synitheia.html` | Greek (`el`) | HTML | 4303 B (4.2 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/tora-i-synitheia.html` |
| `elliniki-grammatiki/topics/vasikes-protheseis.html` | Greek (`el`) | HTML | 4559 B (4.5 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/vasikes-protheseis.html` |
| `elliniki-grammatiki/topics/vasiki-seira-lexeon.html` | Greek (`el`) | HTML | 4857 B (4.7 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/vasiki-seira-lexeon.html` |
| `elliniki-grammatiki/topics/yparchei-yparchoun.html` | Greek (`el`) | HTML | 4667 B (4.6 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/yparchei-yparchoun.html` |
| `elliniki-grammatiki/topics/yperthetikos-vathmos.html` | Greek (`el`) | HTML | 4222 B (4.1 KB) | Topic Manual Module | `manuals/el/grammar/a1/topics/yperthetikos-vathmos.html` |
| `elliniki-grammatiki/assets/app.js` | Greek (`el`) | JS | 4562 B (4.5 KB) | JavaScript Application Logic | `manuals/el/grammar/a1/assets/app.js` |
| `elliniki-grammatiki/assets/style.css` | Greek (`el`) | CSS | 15781 B (15.4 KB) | CSS Stylesheet | `manuals/el/grammar/a1/assets/style.css` |
| `qartuli-leqsika/index.html` | Georgian (`ka`) | HTML | 3474 B (3.4 KB) | Hub / Section Index | `manuals/ka/vocabulary/a1/index.html` |
| `qartuli-leqsika/nacili-1.html` | Georgian (`ka`) | HTML | 2868 B (2.8 KB) | Hub / Section Index | `manuals/ka/vocabulary/a1/nacili-1.html` |
| `qartuli-leqsika/nacili-2.html` | Georgian (`ka`) | HTML | 2690 B (2.6 KB) | Hub / Section Index | `manuals/ka/vocabulary/a1/nacili-2.html` |
| `qartuli-leqsika/nacili-3.html` | Georgian (`ka`) | HTML | 3041 B (3.0 KB) | Hub / Section Index | `manuals/ka/vocabulary/a1/nacili-3.html` |
| `qartuli-leqsika/topics/amindi-da-dro.html` | Georgian (`ka`) | HTML | 4183 B (4.1 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/amindi-da-dro.html` |
| `qartuli-leqsika/topics/dziritadi-zmnebi.html` | Georgian (`ka`) | HTML | 4368 B (4.3 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/dziritadi-zmnebi.html` |
| `qartuli-leqsika/topics/ferebi.html` | Georgian (`ka`) | HTML | 4249 B (4.1 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/ferebi.html` |
| `qartuli-leqsika/topics/misalmeba-da-gacnoba.html` | Georgian (`ka`) | HTML | 4572 B (4.5 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/misalmeba-da-gacnoba.html` |
| `qartuli-leqsika/topics/ojakhi.html` | Georgian (`ka`) | HTML | 4067 B (4.0 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/ojakhi.html` |
| `qartuli-leqsika/topics/rickvebi.html` | Georgian (`ka`) | HTML | 4226 B (4.1 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/rickvebi.html` |
| `qartuli-leqsika/topics/sagmeli-da-sasmeli.html` | Georgian (`ka`) | HTML | 4386 B (4.3 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/sagmeli-da-sasmeli.html` |
| `qartuli-leqsika/topics/sakhi-da-otakhebi.html` | Georgian (`ka`) | HTML | 4337 B (4.2 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/sakhi-da-otakhebi.html` |
| `qartuli-leqsika/topics/samushao-da-profesiebi.html` | Georgian (`ka`) | HTML | 4518 B (4.4 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/samushao-da-profesiebi.html` |
| `qartuli-leqsika/topics/skheulis-nacilebi.html` | Georgian (`ka`) | HTML | 4187 B (4.1 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/skheulis-nacilebi.html` |
| `qartuli-leqsika/topics/tansagmeli.html` | Georgian (`ka`) | HTML | 4334 B (4.2 KB) | Topic Manual Module | `manuals/ka/vocabulary/a1/topics/tansagmeli.html` |
| `qartuli-leqsika/assets/app.js` | Georgian (`ka`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/ka/vocabulary/a1/assets/app.js` |
| `qartuli-leqsika/assets/style.css` | Georgian (`ka`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/ka/vocabulary/a1/assets/style.css` |
| `chavash-leksiki/index.html` | Chuvash (`cv`) | HTML | 2985 B (2.9 KB) | Hub / Section Index | `manuals/cv/vocabulary/a1/index.html` |
| `chavash-leksiki/pay-1.html` | Chuvash (`cv`) | HTML | 2541 B (2.5 KB) | Hub / Section Index | `manuals/cv/vocabulary/a1/pay-1.html` |
| `chavash-leksiki/pay-2.html` | Chuvash (`cv`) | HTML | 2426 B (2.4 KB) | Hub / Section Index | `manuals/cv/vocabulary/a1/pay-2.html` |
| `chavash-leksiki/pay-3.html` | Chuvash (`cv`) | HTML | 2625 B (2.6 KB) | Hub / Section Index | `manuals/cv/vocabulary/a1/pay-3.html` |
| `chavash-leksiki/topics/apat-simes-tata-esmesem.html` | Chuvash (`cv`) | HTML | 3743 B (3.7 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/apat-simes-tata-esmesem.html` |
| `chavash-leksiki/topics/es-tata-peselemsem.html` | Chuvash (`cv`) | HTML | 3854 B (3.8 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/es-tata-peselemsem.html` |
| `chavash-leksiki/topics/hisepsem.html` | Chuvash (`cv`) | HTML | 3767 B (3.7 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/hisepsem.html` |
| `chavash-leksiki/topics/santalak-tata-vakhat.html` | Chuvash (`cv`) | HTML | 3719 B (3.6 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/santalak-tata-vakhat.html` |
| `chavash-leksiki/topics/semje.html` | Chuvash (`cv`) | HTML | 3690 B (3.6 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/semje.html` |
| `chavash-leksiki/topics/surt-tata-bolmasem.html` | Chuvash (`cv`) | HTML | 3806 B (3.7 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/surt-tata-bolmasem.html` |
| `chavash-leksiki/topics/syvlakh-sunni-tata-pallashni.html` | Chuvash (`cv`) | HTML | 3962 B (3.9 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/syvlakh-sunni-tata-pallashni.html` |
| `chavash-leksiki/topics/tep-glagolsem.html` | Chuvash (`cv`) | HTML | 3839 B (3.7 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/tep-glagolsem.html` |
| `chavash-leksiki/topics/tessem.html` | Chuvash (`cv`) | HTML | 3683 B (3.6 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/tessem.html` |
| `chavash-leksiki/topics/tumtir.html` | Chuvash (`cv`) | HTML | 3909 B (3.8 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/tumtir.html` |
| `chavash-leksiki/topics/ut-pu-payesem.html` | Chuvash (`cv`) | HTML | 3656 B (3.6 KB) | Topic Manual Module | `manuals/cv/vocabulary/a1/topics/ut-pu-payesem.html` |
| `chavash-leksiki/assets/app.js` | Chuvash (`cv`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/cv/vocabulary/a1/assets/app.js` |
| `chavash-leksiki/assets/style.css` | Chuvash (`cv`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/cv/vocabulary/a1/assets/style.css` |
| `tt/index.html` | Tatar (`tt`) | HTML | 4490 B (4.4 KB) | Hub / Section Index | `manuals/tt/index.html` |
| `tt/vocabulary/bulek-1.html` | Tatar (`tt`) | HTML | 3448 B (3.4 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-1.html` |
| `tt/vocabulary/bulek-2.html` | Tatar (`tt`) | HTML | 2885 B (2.8 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-2.html` |
| `tt/vocabulary/bulek-3.html` | Tatar (`tt`) | HTML | 2886 B (2.8 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-3.html` |
| `tt/vocabulary/bulek-4.html` | Tatar (`tt`) | HTML | 2923 B (2.9 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-4.html` |
| `tt/vocabulary/bulek-5.html` | Tatar (`tt`) | HTML | 3086 B (3.0 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-5.html` |
| `tt/vocabulary/bulek-6.html` | Tatar (`tt`) | HTML | 2381 B (2.3 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/bulek-6.html` |
| `tt/vocabulary/index.html` | Tatar (`tt`) | HTML | 4433 B (4.3 KB) | Hub / Section Index | `manuals/tt/vocabulary/a1/index.html` |
| `tt/vocabulary/topics/ashamlyklar-hem-eshchelekler.html` | Tatar (`tt`) | HTML | 4084 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/ashamlyklar-hem-eshchelekler.html` |
| `tt/vocabulary/topics/ashlar-hem-ashanu.html` | Tatar (`tt`) | HTML | 4155 B (4.1 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/ashlar-hem-ashanu.html` |
| `tt/vocabulary/topics/aytu-nigeshlere.html` | Tatar (`tt`) | HTML | 4332 B (4.2 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/aytu-nigeshlere.html` |
| `tt/vocabulary/topics/bayleuche-sozler-hem-sorular.html` | Tatar (`tt`) | HTML | 4339 B (4.2 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/bayleuche-sozler-hem-sorular.html` |
| `tt/vocabulary/topics/bush-vakyt-hem-kobbiler.html` | Tatar (`tt`) | HTML | 4184 B (4.1 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/bush-vakyt-hem-kobbiler.html` |
| `tt/vocabulary/topics/gaila.html` | Tatar (`tt`) | HTML | 4006 B (3.9 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/gaila.html` |
| `tt/vocabulary/topics/hava-toroshy-hem-el-fasyllary.html` | Tatar (`tt`) | HTML | 4104 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/hava-toroshy-hem-el-fasyllary.html` |
| `tt/vocabulary/topics/his-kochler-hem-emotsiyalar.html` | Tatar (`tt`) | HTML | 4080 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/his-kochler-hem-emotsiyalar.html` |
| `tt/vocabulary/topics/honerler-hem-esh.html` | Tatar (`tt`) | HTML | 4144 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/honerler-hem-esh.html` |
| `tt/vocabulary/topics/isenleshuh-hem-tanyshu.html` | Tatar (`tt`) | HTML | 4204 B (4.1 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/isenleshuh-hem-tanyshu.html` |
| `tt/vocabulary/topics/keshe-bedene.html` | Tatar (`tt`) | HTML | 3897 B (3.8 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/keshe-bedene.html` |
| `tt/vocabulary/topics/kiem-salym.html` | Tatar (`tt`) | HTML | 4008 B (3.9 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/kiem-salym.html` |
| `tt/vocabulary/topics/maktap-hem-synyf.html` | Tatar (`tt`) | HTML | 4100 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/maktap-hem-synyf.html` |
| `tt/vocabulary/topics/restoran-hem-kafe.html` | Tatar (`tt`) | HTML | 4064 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/restoran-hem-kafe.html` |
| `tt/vocabulary/topics/salametlek-hem-apteka.html` | Tatar (`tt`) | HTML | 4173 B (4.1 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/salametlek-hem-apteka.html` |
| `tt/vocabulary/topics/sannar.html` | Tatar (`tt`) | HTML | 3910 B (3.8 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/sannar.html` |
| `tt/vocabulary/topics/satybalular-hem-akcha.html` | Tatar (`tt`) | HTML | 4120 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/satybalular-hem-akcha.html` |
| `tt/vocabulary/topics/shekhsi-maglumatlar.html` | Tatar (`tt`) | HTML | 4187 B (4.1 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/shekhsi-maglumatlar.html` |
| `tt/vocabulary/topics/tekhnologiya-hem-telefon.html` | Tatar (`tt`) | HTML | 4357 B (4.3 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/tekhnologiya-hem-telefon.html` |
| `tt/vocabulary/topics/tep-figyller-a1.html` | Tatar (`tt`) | HTML | 4124 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/tep-figyller-a1.html` |
| `tt/vocabulary/topics/tosler.html` | Tatar (`tt`) | HTML | 3968 B (3.9 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/tosler.html` |
| `tt/vocabulary/topics/transport-hem-sayahat.html` | Tatar (`tt`) | HTML | 4177 B (4.1 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/transport-hem-sayahat.html` |
| `tt/vocabulary/topics/vakyt-hem-kondalek-tormysh.html` | Tatar (`tt`) | HTML | 4100 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/vakyt-hem-kondalek-tormysh.html` |
| `tt/vocabulary/topics/yort-hem-bulemler.html` | Tatar (`tt`) | HTML | 4026 B (3.9 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/yort-hem-bulemler.html` |
| `tt/vocabulary/topics/yunesheshler-hem-urinnar.html` | Tatar (`tt`) | HTML | 4071 B (4.0 KB) | Topic Manual Module | `manuals/tt/vocabulary/a1/topics/yunesheshler-hem-urinnar.html` |
| `tt/vocabulary/a2/index.html` | Tatar (`tt`) | HTML | 1520 B (1.5 KB) | Hub / Section Index | `manuals/tt/vocabulary/a2/index.html` |
| `tt/vocabulary/a2/module-1.html` | Tatar (`tt`) | HTML | 1782 B (1.7 KB) | Hub / Section Index | `manuals/tt/vocabulary/a2/module-1.html` |
| `tt/vocabulary/a2/topics/sxyaxat-xem-transport.html` | Tatar (`tt`) | HTML | 1823 B (1.8 KB) | Topic Manual Module | `manuals/tt/vocabulary/a2/topics/sxyaxat-xem-transport.html` |
| `tt/vocabulary/a2/topics/xezmet-xem-honomnar.html` | Tatar (`tt`) | HTML | 1831 B (1.8 KB) | Topic Manual Module | `manuals/tt/vocabulary/a2/topics/xezmet-xem-honomnar.html` |
| `tt/vocabulary/a2/assets/app.js` | Tatar (`tt`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/tt/vocabulary/a2/assets/app.js` |
| `tt/vocabulary/a2/assets/style.css` | Tatar (`tt`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/tt/vocabulary/a2/assets/style.css` |
| `tt/vocabulary/assets/app.js` | Tatar (`tt`) | JS | 1737 B (1.7 KB) | JavaScript Application Logic | `manuals/tt/vocabulary/a1/assets/app.js` |
| `tt/vocabulary/assets/style.css` | Tatar (`tt`) | CSS | 4677 B (4.6 KB) | CSS Stylesheet | `manuals/tt/vocabulary/a1/assets/style.css` |
| `tt/grammar/bulek-1.html` | Tatar (`tt`) | HTML | 4830 B (4.7 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-1.html` |
| `tt/grammar/bulek-2.html` | Tatar (`tt`) | HTML | 3231 B (3.2 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-2.html` |
| `tt/grammar/bulek-3.html` | Tatar (`tt`) | HTML | 2850 B (2.8 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-3.html` |
| `tt/grammar/bulek-4.html` | Tatar (`tt`) | HTML | 2934 B (2.9 KB) | Hub / Section Index | `manuals/tt/grammar/a1/bulek-4.html` |
| `tt/grammar/index.html` | Tatar (`tt`) | HTML | 3774 B (3.7 KB) | Hub / Section Index | `manuals/tt/grammar/a1/index.html` |
| `tt/grammar/topics/bar-yuk.html` | Tatar (`tt`) | HTML | 4054 B (4.0 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/bar-yuk.html` |
| `tt/grammar/topics/bash-kilesh.html` | Tatar (`tt`) | HTML | 4864 B (4.8 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/bash-kilesh.html` |
| `tt/grammar/topics/chagyshtyru-darajese.html` | Tatar (`tt`) | HTML | 5002 B (4.9 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/chagyshtyru-darajese.html` |
| `tt/grammar/topics/chygysh-kileshe.html` | Tatar (`tt`) | HTML | 4816 B (4.7 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/chygysh-kileshe.html` |
| `tt/grammar/topics/hazierge-zaman.html` | Tatar (`tt`) | HTML | 4682 B (4.6 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/hazierge-zaman.html` |
| `tt/grammar/topics/iyalek-kileshe.html` | Tatar (`tt`) | HTML | 4936 B (4.8 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/iyalek-kileshe.html` |
| `tt/grammar/topics/iyalek-kushymchalary.html` | Tatar (`tt`) | HTML | 4274 B (4.2 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/iyalek-kushymchalary.html` |
| `tt/grammar/topics/kilechak-zaman.html` | Tatar (`tt`) | HTML | 4559 B (4.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kilechak-zaman.html` |
| `tt/grammar/topics/kileshlar.html` | Tatar (`tt`) | HTML | 5220 B (5.1 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kileshlar.html` |
| `tt/grammar/topics/kire-kagu.html` | Tatar (`tt`) | HTML | 4690 B (4.6 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kire-kagu.html` |
| `tt/grammar/topics/korsatu-alyshmalary.html` | Tatar (`tt`) | HTML | 4571 B (4.5 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/korsatu-alyshmalary.html` |
| `tt/grammar/topics/kyuplek-hem-azlyk.html` | Tatar (`tt`) | HTML | 4181 B (4.1 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/kyuplek-hem-azlyk.html` |
| `tt/grammar/topics/sannar-ham-kileshlar.html` | Tatar (`tt`) | HTML | 4922 B (4.8 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sannar-ham-kileshlar.html` |
| `tt/grammar/topics/sannar-ham-vaqyt.html` | Tatar (`tt`) | HTML | 4676 B (4.6 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sannar-ham-vaqyt.html` |
| `tt/grammar/topics/singarmonizm.html` | Tatar (`tt`) | HTML | 4203 B (4.1 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/singarmonizm.html` |
| `tt/grammar/topics/sonardashlar.html` | Tatar (`tt`) | HTML | 4868 B (4.8 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sonardashlar.html` |
| `tt/grammar/topics/sorau-formashy.html` | Tatar (`tt`) | HTML | 4546 B (4.4 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sorau-formashy.html` |
| `tt/grammar/topics/sozlar-tartibe.html` | Tatar (`tt`) | HTML | 4512 B (4.4 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/sozlar-tartibe.html` |
| `tt/grammar/topics/syjfatlar.html` | Tatar (`tt`) | HTML | 4728 B (4.6 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/syjfatlar.html` |
| `tt/grammar/topics/toshem-kilesh.html` | Tatar (`tt`) | HTML | 4699 B (4.6 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/toshem-kilesh.html` |
| `tt/grammar/topics/uryn-vakyt-kileshe.html` | Tatar (`tt`) | HTML | 4797 B (4.7 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/uryn-vakyt-kileshe.html` |
| `tt/grammar/topics/utkan-zaman.html` | Tatar (`tt`) | HTML | 4439 B (4.3 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/utkan-zaman.html` |
| `tt/grammar/topics/yuneshesh-kileshe.html` | Tatar (`tt`) | HTML | 4873 B (4.8 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/yuneshesh-kileshe.html` |
| `tt/grammar/topics/zat-alyshmalary.html` | Tatar (`tt`) | HTML | 4393 B (4.3 KB) | Topic Manual Module | `manuals/tt/grammar/a1/topics/zat-alyshmalary.html` |
| `tt/grammar/a2/index.html` | Tatar (`tt`) | HTML | 1559 B (1.5 KB) | Hub / Section Index | `manuals/tt/grammar/a2/index.html` |
| `tt/grammar/a2/part-1.html` | Tatar (`tt`) | HTML | 1847 B (1.8 KB) | Hub / Section Index | `manuals/tt/grammar/a2/part-1.html` |
| `tt/grammar/a2/topics/tartym-kushymchalary-chylbyry.html` | Tatar (`tt`) | HTML | 4419 B (4.3 KB) | Topic Manual Module | `manuals/tt/grammar/a2/topics/tartym-kushymchalary-chylbyry.html` |
| `tt/grammar/a2/topics/xal-figyllar-xem-kileshler.html` | Tatar (`tt`) | HTML | 4323 B (4.2 KB) | Topic Manual Module | `manuals/tt/grammar/a2/topics/xal-figyllar-xem-kileshler.html` |
| `tt/grammar/a2/assets/app.js` | Tatar (`tt`) | JS | 1200 B (1.2 KB) | JavaScript Application Logic | `manuals/tt/grammar/a2/assets/app.js` |
| `tt/grammar/a2/assets/style.css` | Tatar (`tt`) | CSS | 4750 B (4.6 KB) | CSS Stylesheet | `manuals/tt/grammar/a2/assets/style.css` |
| `tt/grammar/assets/app.js` | Tatar (`tt`) | JS | 1352 B (1.3 KB) | JavaScript Application Logic | `manuals/tt/grammar/a1/assets/app.js` |
| `tt/grammar/assets/style.css` | Tatar (`tt`) | CSS | 5391 B (5.3 KB) | CSS Stylesheet | `manuals/tt/grammar/a1/assets/style.css` |

# COSYlanguages Repository Reorganization Migration Map

This document presents a comprehensive audit and migration specification for the proposed structural reorganization of the COSYlanguages repository.

---

## 1. Data vs. Interactive Manual Distinction Confirmation

A thorough audit of the repository confirms that the following directories serve **separate, structured JSON data and interactive application roles** and are **fundamentally distinct** from the rendered static HTML manuals:

- `apps/`: Standalone PWA applications (conjugators, gender trainers, event hubs).
- `curriculum/`: Structured CEFR JSON datasets (`A0_A1`, `A2`, `B1`, `B2`, `C1`, `C2`) defining learning paths.
- `data/`: Core configuration JSON files (`active.json`, `coming_soon.json`, pricing, UI strings).
- `reference-grammar/`: Language-keyed structured morphology/syntax reference JSON schemas and audits.
- `vocabulary/`: Structured JSON vocabulary datasets keyed by ISO language code.

**Conclusion:** These folders are already correctly organized by ISO language code and system role. They are excluded from the HTML manual migration map to prevent disrupting data ingestion engines.

---

## 2. Specific Investigation Findings

### 2.1. Chuvash ISO Code Gap Analysis
- **Current State:** `chavash-grammatika/` and `chavash-leksiki/` exist in the repo root, and `manuals/chavash-a0-a1.html` links to them. However, Chuvash is missing from the Language Registry table in `CONTENT_ARCHITECTURE.md`.
- **Finding & Recommendation:** This is a documentation gap in `CONTENT_ARCHITECTURE.md`. The official ISO 639-1 / ISO 639-3 code for Chuvash is **`cv`**. The migration map uses `cv` as the target directory (`manuals/cv/grammar/` and `manuals/cv/vocabulary/`). `CONTENT_ARCHITECTURE.md` must be updated to register Chuvash (`cv`).

### 2.2. Loose Files in `manuals/` (Stray Files & PDFs)
- **Stray Backtick File (`manuals/``` `):** A 2-byte orphan file containing a single backtick exists at `manuals/``` `.
  - *Recommendation:* Flagged for **immediate deletion**.
- **PDF Manual Files:**
  - `manuals/COSYlanguages_-_A0-A1_Greek_Grammar_Manual.pdf` (1 reference in `manuals/ellinika-a0-a1.html`).
  - `manuals/COSYlanguages_Italian_Grammar_Manual_A0-A1.pdf` (0 external references).
  - `manuals/Russian_A0-A1_Grammar_Manual_rebuilt.pdf` (0 external references).
  - `manuals/cosylanguages_a0_a1_english_grammar_manual.pdf` (0 external references).
  - *Recommendation:* These PDFs are legacy export artifacts superseded by the interactive web edition manuals. They should either be moved alongside their respective language manual (e.g., `manuals/el/grammar-manual.pdf`) or deleted if no longer maintained.

### 2.3. Key Core Files Path Audit
- `index.html`: Contains hardcoded references to `grammar/` and `vocabulary-manual/`.
- `languages/*.html` (e.g., `languages/en/index.html`, `languages/el/index.html`): Contain direct references to `grammar/` and `elliniki-grammatiki/`.
- `data/languages/active.json` & `data/languages/coming_soon.json`: Contain reference strings to `grammar/`.
- `manifest.json` & `sw.js`: No hardcoded manual directory paths found (service workers use dynamic directory scoping for `/apps/`).
- `sitemap.xml`: Does not exist at repo root.

---

## 3. Discrepancies & Pedagogical Mapping Corrections

### Breton Manual Mapping Correction
- Prompt proposal listed:
  - `geriou-brezhoneg/` $\rightarrow$ `manuals/br/grammar/`
  - `yezhadur-brezhoneg/` $\rightarrow$ `manuals/br/vocabulary/`
- **Correction:** In Breton, *Yezhadur* means **Grammar** and *Gerioù* means **Vocabulary**.
- **Correct Target Mapping:**
  - `yezhadur-brezhoneg/` $\rightarrow$ `manuals/br/grammar/`
  - `geriou-brezhoneg/` $\rightarrow$ `manuals/br/vocabulary/`

### Multi-Level English Landing Page Routing
- `manuals/english-a0-a1.html` $\rightarrow$ `manuals/en/index.html` (Primary A0–A1 Landing Page)
- `manuals/english-a2.html` $\rightarrow$ `manuals/en/a2.html` (A2 Landing Page)
- `manuals/english-b1.html` $\rightarrow$ `manuals/en/b1.html` (B1 Landing Page)
- `manuals/english-b2.html` $\rightarrow$ `manuals/en/b2.html` (B2 Landing Page)

---

## 4. Master Migration Map Table

*Risk Thresholds: High = 10+ external file references or core system engine routing; Medium = 1–9 external references or structural complexity; Low = 0 external references.*

| Old Path | New Path | Reason | Risk | Notes |
|---|---|---|---|---|
| `grammar/` | `manuals/en/grammar/a1/` | Standardize English A0–A1 grammar manual into ISO structure | **High** | 779 referencing files (Practice engine, navigation, comparative matrix). Needs JS engine alias / redirect. |
| `grammar-a2/` | `manuals/en/grammar/a2/` | Standardize English A2 grammar manual | **Medium** | 2 referencing files. Sub-folder path changes. |
| `grammar-b1/` | `manuals/en/grammar/b1/` | Standardize English B1 grammar manual | **Medium** | 2 referencing files. Sub-folder path changes. |
| `grammar-b2/` | `manuals/en/grammar/b2/` | Standardize English B2 grammar manual | **Medium** | 2 referencing files. Sub-folder path changes. |
| `vocabulary-manual/` | `manuals/en/vocabulary/` | Standardize English vocabulary manual | **High** | 18 referencing files. Linked from index.html and navigation hubs. |
| `communication-manual/` | `manuals/en/communication/` | Standardize English speech/communication manual | **High** | 18 referencing files. Linked across core hubs. |
| `deutsche-grammatik/` | `manuals/de/grammar/` | Standardize German grammar manual under ISO code `de` | **High** | 11 referencing files. |
| `deutscher-wortschatz/` | `manuals/de/vocabulary/` | Standardize German vocabulary manual under ISO code `de` | **Medium** | 4 referencing files. |
| `gramatica-espanola/` | `manuals/es/grammar/` | Standardize Spanish grammar manual under ISO code `es` | **High** | 10 referencing files. |
| `vocabulario-espanol/` | `manuals/es/vocabulary/` | Standardize Spanish vocabulary manual under ISO code `es` | **Medium** | 4 referencing files. |
| `grammaire-francaise/` | `manuals/fr/grammar/` | Standardize French grammar manual under ISO code `fr` | **High** | 66 referencing files. Deeply integrated in Practice hub and timeline components. |
| `lexique-francais/` | `manuals/fr/vocabulary/` | Standardize French vocabulary manual under ISO code `fr` | **Medium** | 3 referencing files. |
| `grammatica-italiana/` | `manuals/it/grammar/` | Standardize Italian grammar manual under ISO code `it` | **High** | 16 referencing files. |
| `lessico-italiano/` | `manuals/it/vocabulary/` | Standardize Italian vocabulary manual under ISO code `it` | **Medium** | 4 referencing files. |
| `elliniki-grammatiki/` | `manuals/el/grammar/` | Standardize Greek grammar manual under ISO code `el` | **Medium** | 6 referencing files. Linked in `languages/el/index.html`. |
| `grammatika-russkogo-yazyka/` | `manuals/ru/grammar/` | Standardize Russian grammar manual under ISO code `ru` | **Medium** | 7 referencing files. |
| `leksika-russkogo-yazyka/` | `manuals/ru/vocabulary/` | Standardize Russian vocabulary manual under ISO code `ru` | **Medium** | 4 referencing files. |
| `gramatica-portuguesa/` | `manuals/pt/grammar/` | Standardize Portuguese grammar manual under ISO code `pt` | **High** | 10 referencing files. |
| `vocabulario-portugues/` | `manuals/pt/vocabulary/` | Standardize Portuguese vocabulary manual under ISO code `pt` | **Medium** | 4 referencing files. |
| `hayots-lezvi-kerakanutyun/` | `manuals/hy/grammar/` | Standardize Armenian grammar manual under ISO code `hy` | **High** | 13 referencing files. |
| `hayots-lezvi-barapashar/` | `manuals/hy/vocabulary/` | Standardize Armenian vocabulary manual under ISO code `hy` | **Medium** | 4 referencing files. |
| `qartuli-gramatika/` | `manuals/ka/grammar/` | Standardize Georgian grammar manual under ISO code `ka` | **High** | 13 referencing files. |
| `qartuli-leqsika/` | `manuals/ka/vocabulary/` | Standardize Georgian vocabulary manual under ISO code `ka` | **Medium** | 4 referencing files. |
| `tatar-teli-grammatikasy/` | `manuals/tt/grammar/` | Standardize Tatar grammar manual under ISO code `tt` | **Medium** | 6 referencing files. |
| `tatar-teli-leksikasy/` | `manuals/tt/vocabulary/` | Standardize Tatar vocabulary manual under ISO code `tt` | **Medium** | 4 referencing files. |
| `bashqort-tele-grammatikahy/` | `manuals/ba/grammar/` | Standardize Bashkir grammar manual under ISO code `ba` | **High** | 12 referencing files. |
| `bashqort-tele-leksikahy/` | `manuals/ba/vocabulary/` | Standardize Bashkir vocabulary manual under ISO code `ba` | **Medium** | 4 referencing files. |
| `chavash-grammatika/` | `manuals/cv/grammar/` | Standardize Chuvash grammar manual under ISO code `cv` | **High** | 12 referencing files. Fixes ISO gap in `CONTENT_ARCHITECTURE.md`. |
| `chavash-leksiki/` | `manuals/cv/vocabulary/` | Standardize Chuvash vocabulary manual under ISO code `cv` | **Medium** | 4 referencing files. |
| `yezhadur-brezhoneg/` | `manuals/br/grammar/` | Standardize Breton grammar manual (*Yezhadur* = Grammar) | **High** | 22 referencing files. Corrected prompt swap. |
| `geriou-brezhoneg/` | `manuals/br/vocabulary/` | Standardize Breton vocabulary manual (*Gerioù* = Vocabulary) | **High** | 23 referencing files. Corrected prompt swap. |
| `manuals/english-a0-a1.html` | `manuals/en/index.html` | Consolidate English A0–A1 hub into language directory | **High** | 20 referencing files. Primary landing page for English manual. |
| `manuals/english-a2.html` | `manuals/en/a2.html` | Consolidate English A2 hub into language directory | **High** | 10 referencing files. |
| `manuals/english-b1.html` | `manuals/en/b1.html` | Consolidate English B1 hub into language directory | **High** | 13 referencing files. |
| `manuals/english-b2.html` | `manuals/en/b2.html` | Consolidate English B2 hub into language directory | **High** | 14 referencing files. |
| `manuals/deutsch-a0-a1.html` | `manuals/de/index.html` | Consolidate German hub into language directory | **Low** | 0 external references. |
| `manuals/espanol-a0-a1.html` | `manuals/es/index.html` | Consolidate Spanish hub into language directory | **Low** | 0 external references. |
| `manuals/francaise-a0-a1.html` | `manuals/fr/index.html` | Consolidate French hub into language directory | **Medium** | 2 referencing files (`languages/fr.html`, `languages/fr/index.html`). |
| `manuals/italiano-a0-a1.html` | `manuals/it/index.html` | Consolidate Italian hub into language directory | **Low** | 0 external references. |
| `manuals/ellinika-a0-a1.html` | `manuals/el/index.html` | Consolidate Greek hub into language directory | **Medium** | 1 referencing file (`manuals/index.html`). |
| `manuals/russkiy-a0-a1.html` | `manuals/ru/index.html` | Consolidate Russian hub into language directory | **Medium** | 2 referencing files (`languages/ru.html`, `languages/ru/index.html`). |
| `manuals/portugues-a0-a1.html` | `manuals/pt/index.html` | Consolidate Portuguese hub into language directory | **Low** | 0 external references. |
| `manuals/hayots-a0-a1.html` | `manuals/hy/index.html` | Consolidate Armenian hub into language directory | **Low** | 0 external references. |
| `manuals/qartuli-a0-a1.html` | `manuals/ka/index.html` | Consolidate Georgian hub into language directory | **Low** | 0 external references. |
| `manuals/tatar-a0-a1.html` | `manuals/tt/index.html` | Consolidate Tatar hub into language directory | **Low** | 0 external references. |
| `manuals/bashqort-a0-a1.html` | `manuals/ba/index.html` | Consolidate Bashkir hub into language directory | **Low** | 0 external references. |
| `manuals/chavash-a0-a1.html` | `manuals/cv/index.html` | Consolidate Chuvash hub into language directory | **Low** | 0 external references. |
| `manuals/brezhoneg-a0-a1.html` | `manuals/br/index.html` | Consolidate Breton hub into language directory | **Medium** | 2 referencing files. |
| `manuals/``` | *[DELETE]* | Delete orphan 2-byte file with backtick filename | **Low** | 0 functional references (appeared in raw string matches only). |
| `manuals/*.pdf` | `manuals/<lang>/[file].pdf` or *[DELETE]* | Relocate legacy PDF manuals to language folders or remove | **Low** | Superseded by HTML manuals; only Greek PDF referenced once in `ellinika-a0-a1.html`. |
| `docs/` | `project/docs/` | Group project documentation under `project/` | **Low** | 1 referencing file (`project/` organization). |
| `scripts/` | `project/scripts/` | Group build/audit scripts under `project/` | **High** | 40 referencing files. Build scripts (`build_monolingual_grammar_manuals.py` etc.) need internal path updates. |
| `tests/` | `project/tests/` | Group Playwright/JS test suites under `project/` | **High** | 56 referencing files. Test configs & path fixtures require update. |
| `verification/` | `project/tests/verification/` | Move verification suite into `project/tests/` | **High** | 19 referencing files. |
| `CONTENT_ARCHITECTURE.md` | `project/docs/CONTENT_ARCHITECTURE.md` | Relocate doc to `project/docs/` | **Medium** | 4 referencing files. |
| `ROADMAP.md` | `project/docs/ROADMAP.md` | Relocate doc to `project/docs/` | **Low** | 0 external references. |
| `SCHEMA.md` | `project/docs/SCHEMA.md` | Relocate doc to `project/docs/` | **Medium** | 4 referencing files. |
| `THEMES.md` | `project/docs/THEMES.md` | Relocate doc to `project/docs/` | **Medium** | 5 referencing files. |
| `LANGUAGES.md` | `project/docs/LANGUAGES.md` | Relocate doc to `project/docs/` | **Medium** | 2 referencing files. |
| `update_patterns.py` | `project/scripts/update_patterns.py` | Relocate helper script to `project/scripts/` | **Low** | 0 external references. |
| `README.md` | `README.md` | Maintain at root (GitHub convention) | **Low** | Remains at root. |
| `CHANGELOG.md` | `CHANGELOG.md` | Maintain at root (GitHub convention) | **Low** | Remains at root. |
| `SECURITY.md` | `SECURITY.md` | Maintain at root (GitHub convention) | **Low** | Remains at root. |

---

## 5. Summary of Recommended Migration Strategy & Actions

1. **GitHub Pages Backward Compatibility & Redirects:**
   Because COSYlanguages is served directly via GitHub Pages with no active build server, moving directories like `grammar/` or `grammaire-francaise/` directly will break existing public inbound bookmarks or external links unless HTML redirect stubs (`<meta http-equiv="refresh">`) or dynamic routing rules are put in place at old root paths during migration.
2. **Python Build Generator Updates:**
   Generator scripts in `scripts/` (e.g., `build_monolingual_grammar_manuals.py`, `build_monolingual_vocab_manuals.py`, `build_russian_grammar_manual.py`, `build_manual_hubs.py`) must be updated simultaneously so future builds target the new `manuals/<lang>/` paths.
3. **Practice Engine Path Resolver:**
   `js/core/engine.js` and `practice/_engine/renderers.js` construct manual URLs dynamically (`/grammar/topics/...` or `/grammaire-francaise/topics/...`). A centralized helper (`COSY.getManualUrl(lang, type, topic)`) should be introduced during execution to resolve all manual links dynamically to `manuals/<lang>/<grammar|vocabulary>/topics/...`.

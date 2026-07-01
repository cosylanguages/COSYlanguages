# Data File Audit Summary Report

## 1. Linking & Manifest Integrity
- **Manifest vs Filesystem**: 100% match. Every file listed in `vocabulary/manifest.json` exists on disk. No orphaned `.js` files were found in the `vocabulary/` subdirectories.
- **Engine Loading**: Verified that `js/games/unified-engine.js` correctly consumes data via `js/games/utils/shared.js`, which in turn triggers `COSY.loadLanguageData` to fetch files from the manifest.
- **Data Export Format**: Most files correctly use the standardized IIFE wrapper to populate `window.vocabularyData`, `window.adjectivesData`, etc.

## 2. Content Fullness (Summary)
Detailed audit reports can be found in:
- `scripts/output/game-data-audit.md` (Modern vocabulary system)
- `scripts/output/legacy-data-audit.md` (Legacy data system)

### Key Findings:
- **English (EN)**: Most complete dataset. Features handcrafted game data in `games/data/en/game_data.js` and extensive vocabulary-based speaking tasks.
- **Handcrafted Data Gap**: All languages except English have empty shells in `games/data/[lang]/game_data.js`. They rely entirely on dynamic enrichment from the `vocabulary/` datasets.
- **Level Coverage**: Coverage is strong for Starter (A1) and Elementary (A2) across all 13 languages. Coverage for Intermediate (B1) and above is significantly lower for non-English languages in the modern system, though legacy data provides some depth.
- **Game-Specific Coverage**:
  - **Action Hero & Word Linker**: High coverage due to enrichment from general vocabulary.
  - **Fluency, Opinions, Battle**: Moderate to High coverage for most languages at A1/A2.
  - **Critic's Corner**: Very low coverage (mostly 0) because it requires B2+ quotes which are currently missing for most languages.
  - **Etymology Explorer**: Low coverage for most languages as it requires specialized metadata in vocabulary files.

## 3. Legacy vs Modern Hierarchies
- **Consistency**: High consistency between `js/data/` and `vocabulary/`. Many files are duplicated across both to support different parts of the application.
- **Dependency**: The modern engine and practice hub prefer `vocabulary/` (via `manifest.json`), while the grammar reference pages and legacy curriculum logic still depend on the `js/data/` folder structure.
- **"Coming Soon" Languages**: Languages like Armenian (hy), Georgian (ka), and Breton (br) have substantial data (100+ items) in their legacy folders, much of which is already reflected in the `vocabulary/` hierarchy.

## 4. Schema & Data Consistency Issues
- **Word IDs**: Many vocabulary entries (especially in FR, IT, RU) are missing the mandatory `id` field required by `SCHEMA.md`.
- **Field Naming**: Some files use `language` instead of the standardized `lang`. While the engine handles both, this is inconsistent.
- **Theme Slugs**: Legacy theme names (e.g., `size_shape_A1`) are still present in some files, whereas `SCHEMA.md` requires standardized slugs (e.g., `size_shape`).
- **Level Codes**: Inconsistency between `starter` (internal) and `A1` (folder name/manifest).

## 5. Recommended Fixes
1.  **Standardize IDs**: Run a script to generate missing IDs for all vocabulary items.
2.  **Harmonize Speaking Keys**: Standardize on a single key for speaking tasks (e.g., `fluency`) instead of the current mixture of `talkThatTalk`, `fluency`, and `talk_that_talk`.
3.  **Populate B2+ Data**: Prioritize adding quotes and advanced discussion topics for non-English languages to enable 'Critic's Corner'.
4.  **Etymology Enrichment**: Add etymology data to common words across all languages to support 'Etymology Explorer'.

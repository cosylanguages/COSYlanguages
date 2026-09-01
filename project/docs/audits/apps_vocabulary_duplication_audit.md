# Duplication & Architecture Audit: Standalone Engine Applications vs. Core Vocabulary Database

**Repo**: `cosylanguages/COSYlanguages`
**Branch**: `main`
**Date**: August 2026
**Status**: Completed Research & Strategic Architecture Audit

---

## Executive Summary

This audit investigates the data duplication, drift, and structural overlap between the **9 standalone engine tools** under `apps/` (`fr-conjugeur`, `fr-genre`, `it-coniugatore`, `it-genere`, `ru-spryazhenie`, `ru-rod-padezhi`, `el-klisi-rimaton`, `el-genos-ptoseis`, `en-verb-prep`) and the **core vocabulary database** under `vocabulary/<lang>/` across French, Italian, Russian, Modern Greek, and English.

### Key Audit Highlights:
1. **Total Engine App Entries Audited**: **2,067 entries** across 9 application datasets.
2. **Total Vocabulary Base Size**: **10,989 total entries** (8,389 unique base words) across levels `A1` through `C2` in the 5 target languages.
3. **Definition Conflict Rate**: **< 0.05%** (only **1 substantive sense conflict** identified out of 2,067 entries: English `impact` defined as a verb in `apps/en-verb-prep` vs. a noun in `vocabulary/en/A2/`). Overwhelmingly, definitions are close paraphrases rather than contradictory meanings.
4. **French Overlap Estimate Reconciliation**:
   - **French Verbs (`apps/fr-conjugeur`)**: Total 230 words. Overlap with Level `A1` vocabulary is **51.3%** (118 words), perfectly confirming the previous **~50%** estimate. Expanding comparison across all levels (`A1–C2`) increases total overlap to **60.4%** (139 words).
   - **French Nouns (`apps/fr-genre`)**: Total 357 words. Overlap with Level `A1` vocabulary is **52.7%** (188 words), confirming the previous **~53%** estimate. Full `A1–C2` level overlap is **54.1%** (193 words).
5. **Architectural Grounding**: In compliance with `apps/README.md` ("Slow-Tech" principles: zero centralized live databases, 100% client-side static assets, isolated PWA service worker scopes), all proposed unification paths preserve runtime bundle isolation and target build-time authoring consolidation only.

---

## Task Part 1 — Duplication Map & Field Discrepancy Breakdown

Every entry across all 9 `apps/*/data/{verbs,nouns}.json` files was cross-referenced against all `vocabulary/<lang>/<LEVEL>/*.js` datasets. A machine-readable artifact containing the complete row-by-row mapping of all 2,067 app entries is committed alongside this document at:
`project/docs/audits/apps_vocabulary_duplication_map.json`

### Field Schema & Structural Comparison

The data models under `apps/` and `vocabulary/` serve fundamentally different pedagogical functions:

| Dimension | `apps/*/data/{verbs,nouns}.json` | `vocabulary/<lang>/<LEVEL>/*.js` |
| :--- | :--- | :--- |
| **Primary Focus** | Morphological paradigms (verb conjugations, noun declension cases, gender/article rules, transitivity patterns). | Pedagogical flashcards, thematic usage, CEFR level progression, and conversation prompts. |
| **Unique App Fields** | • Full conjugation matrices (`tenses` object with 10+ tenses)<br>• Declension case tables (`cases` object)<br>• Noun gender & article (`gender`, `article`, `plural`)<br>• Verb class/voice (`group`, `voice`, `auxiliary`, `pair`)<br>• Preposition & pattern rules (`prepositions`, `pattern`, `grammar_rule`) | None (these morphological tables are missing in general vocabulary files). |
| **Unique Vocab Fields** | None (apps omit visual and thematic metadata). | • Visuals & Themes (`emoji`, `theme`, `sub_theme`)<br>• Granular Level tags (`starter`, `elementary`, etc.)<br>• Phonetics & Audio (`transcription` / IPA)<br>• Example sentences array & Synonyms array<br>• Cross-linking IDs (`id` slug) |

### Discrepancy Categories & Sample Entries

1. **Exact Sense Paraphrases (Non-Conflicting)**
   - **French Verb (`parler`)**:
     - *App (`apps/fr-conjugeur/data/verbs.json`)*: `"Exprimer sa pensée par la parole."`
     - *Vocab (`vocabulary/fr/A1/verbs.js`)*: `"Communiquer verbalement ; connaître une langue."`
     - *Assessment*: Paraphrase of same sense.
   - **Italian Noun (`casa`)**:
     - *App (`apps/it-genere/data/nouns.json`)*: `"Edificio adibito ad abitazione."`
     - *Vocab (`vocabulary/it/A1/furniture.js`)*: `"Un edificio dove vive una famiglia."`
     - *Assessment*: Paraphrase of same sense.

2. **Part-of-Speech / Domain Shifts (Divergent Usage)**
   - **French Nouns (`fr-genre`) vs. Adjectives/Colors**:
     - Colors (e.g. `rouge`, `bleu`, `vert`, `jaune`) are categorized as `form: "noun"` in `apps/fr-genre/data/nouns.json` (to practice *le rouge*, *le bleu*), but as `form: "adjective"` in `vocabulary/fr/A1/colours.js`.
   - **French Meal Verbs vs. Nouns**:
     - `déjeuner` and `dîner` are categorized as verbs in `apps/fr-conjugeur` ("to lunch / to dine"), but as nouns in `vocabulary/fr/A1/food_drink.js` ("lunch / dinner").
   - **English Transitive Verb vs. Noun (`impact`)**:
     - *App (`apps/en-verb-prep`)*: Verb ("To have a strong effect or influence on someone or something").
     - *Vocab (`vocabulary/en/A2/vocabulary.js`)*: Noun ("A powerful effect that something has on a situation or person").

---

## Task Part 2 — Quantitative Analysis & Cross-Linguistic Breakdown

### Master Quantitative Duplication Table

| Language | App Tool Name | Tool Type | Total App Words | A1 Vocab Overlap (Count / %) | Full A1–C2 Vocab Overlap (Count / %) | Definition Conflicts | Total Vocab Size (A1–C2) |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **French (`fr`)** | `fr-conjugeur` | Verbs | 230 | 118 (51.3%) | 139 (60.4%) | 0 | 2,042 unique (2,637 total) |
| **French (`fr`)** | `fr-genre` | Nouns | 357 | 188 (52.7%) | 193 (54.1%) | 0 | 2,042 unique (2,637 total) |
| **Italian (`it`)** | `it-coniugatore` | Verbs | 189 | 121 (64.0%) | 141 (74.6%) | 0 | 2,205 unique (2,812 total) |
| **Italian (`it`)** | `it-genere` | Nouns | 331 | 208 (62.8%) | 213 (64.4%) | 0 | 2,205 unique (2,812 total) |
| **Russian (`ru`)** | `ru-spryazhenie` | Verbs | 189 | 86 (45.5%) | 101 (53.4%) | 0 | 1,703 unique (2,226 total) |
| **Russian (`ru`)** | `ru-rod-padezhi` | Nouns | 283 | 85 (30.0%) | 101 (35.7%) | 0 | 1,703 unique (2,226 total) |
| **Greek (`el`)** | `el-klisi-rimaton` | Verbs | 137 | 70 (51.1%) | 87 (63.5%) | 0 | 1,201 unique (1,201 total) |
| **Greek (`el`)** | `el-genos-ptoseis` | Nouns | 269 | 63 (23.4%) | 80 (29.7%) | 0 | 1,201 unique (1,201 total) |
| **English (`en`)** | `en-verb-prep` | Verbs | 82 | 11 (13.4%) | 29 (35.4%) | 1 | 3,438 unique (5,041 total) |
| **TOTALS** | **9 Apps** | **Combined** | **2,067** | **950 (46.0%)** | **1,084 (52.4%)** | **1 (<0.05%)** | **10,989 Entries** |

### Confirmation & Reconciliation of French Estimates
- **French Verbs**: The prior estimate of **50%** is **confirmed** when scoped to `A1` vocabulary datasets (118 / 230 = **51.3%**). When extended across all CEFR levels (`A1–C2`), verb overlap rises to **60.4%** (139 / 230).
- **French Nouns**: The prior estimate of **53%** is **confirmed** when scoped to `A1` vocabulary datasets (188 / 357 = **52.7%**). Across all CEFR levels (`A1–C2`), noun overlap is **54.1%** (193 / 357).

### Key Empirical Findings:
1. **High Paradigm Overlap in Romance Languages**: Italian and French exhibit the highest overlap (>60-74% for verbs, >54-64% for nouns), because early-level curricula heavily emphasize core high-frequency verbs and household nouns.
2. **Lower Overlap in Case/Gender Noun Apps for Slavic/Hellenic Languages**: Russian (`ru-rod-padezhi`) and Greek (`el-genos-ptoseis`) show lower noun overlap (29.7%–35.7%), because the noun tools intentionally include specialized declension drill targets (e.g., proper nouns, irregular masculine/feminine endings) not included in general A1 flashcard sets.
3. **Low Overlap in English Phrasal/Preposition Tool**: English (`en-verb-prep`) has a 35.4% overlap because it targets specific B1–C1 verb-preposition collocations (`rely on`, `benefit from`, `insist on`), whereas A1 English vocabulary emphasizes basic actions.
4. **Near-Zero Definition Conflict Rate**: Out of 2,067 audited app entries, exactly **1** word (`impact` in English) exhibits a substantive definition conflict. The remaining 1,083 overlapping words share identical core meanings expressed in slightly different words.

---

## Task Part 3 — Unification Evaluation & Strategic Recommendation

### Evaluation of Options

#### Option A: Single Canonical Per-Language Lexicon
- **Mechanism**: Merge all vocabulary and engine app data into a unified canonical build-time master database per language (e.g., `lexicon/fr.json`). Build scripts generate both `apps/*/data/*.json` and `vocabulary/*/A1/*.js` at compile time.
- **Pros**: 100% single source of truth; eliminates definition drift permanently.
- **Cons**: High architectural complexity; requires creating and maintaining massive build scripts and schemas for 13+ languages. Over-engineered given that definition conflicts are currently under **0.05%**.
- **Slow-Tech Alignment**: Complies with Slow-Tech (build-time generation only), but imposes heavy schema maintenance.

#### Option B: Light Reconciliation Pass & Cross-Reference IDs
- **Mechanism**: Perform a targeted manual pass to fix the single definition conflict (`impact`) and minor POS tag discrepancies (e.g. colors). Add cross-referencing `id` fields (`app_id` or `vocab_id`) without changing runtime data schemas.
- **Pros**: Low risk, zero build script overhead, addresses immediate drift.
- **Cons**: Does not prevent future authoring drift when new words or conjugation tables are added.

#### Option C: Designate `apps/` as Canonical Source for Conjugation/Gender/Pattern Data
- **Mechanism**: Establish `apps/*/data/{verbs,nouns}.json` as the canonical authority for verb conjugation matrices, noun gender/declension tables, and verb-preposition patterns. When vocabulary exercises or manuals need conjugation or declension tables, a build-time script enriches vocabulary items from the corresponding `apps/` dataset using matching keys/IDs.
- **Pros**: Perfect domain alignment. Conjugation tables and declension matrices belong naturally in the specialized engine apps. Vocabulary entries remain lean (focusing on definitions, examples, and emojis) while drawing paradigm data from `apps/` at build time.
- **Cons**: Requires a lightweight build-time enrichment script when building vocabulary packages.

---

### Strategic Recommendation

**We recommend a hybrid of Option C and Option B (Option C+B).**

#### Grounding & Rationale:
1. **Data Shows the Problem is Structural, Not Conflicting**: With **0.05% definition conflicts**, creating a monolithic, complex single-file lexicon (Option A) would be massive over-engineering. The current data is not broken—it is simply specialized by domain.
2. **Domain Division of Responsibility**:
   - `apps/*/data/*.json` is the **Canonical Paradigm Repository** ( conjugation tables, declensions, gender, prepositions).
   - `vocabulary/<lang>/` is the **Canonical Pedagogical Repository** (definitions, examples, emojis, CEFR levels, conversation prompts).
3. **Slow-Tech & Monorepo Preservation**:
   - Preserves independent PWA service worker caching and runtime static JSON isolation as mandated by `apps/README.md`.
   - Ensures that updating a conjugation table in `fr-conjugeur` does not invalidate PWA offline caches for `vocabulary/fr/` or other apps.

#### Proposed Action Plan for Future Implementation (Do Not Execute in This PR):
1. **Phase 1 (Reconciliation)**: Fix the single definition conflict (`impact`) and standardize POS tags for colors and meal verbs.
2. **Phase 2 (Canonical Paradigm Reference)**: Document in `vocabulary/_schema/` that verb conjugation tables and noun declension tables must be sourced from `apps/*/data/{verbs,nouns}.json` using word keys.
3. **Phase 3 (Build-Time Enrichment)**: Introduce a lightweight Python build helper that optionally pulls conjugation tables from `apps/*/data/verbs.json` into practice/manual generators when required, preventing manual re-authoring.

---

## Artifact Appendix

The complete entry-level duplicate map is saved at:
`project/docs/audits/apps_vocabulary_duplication_map.json`

### JSON Artifact Structure Sample:
```json
{
  "word": "parler",
  "language": "fr",
  "tool_app": "fr-conjugeur",
  "exists_in_apps": "y (apps/fr-conjugeur/data/verbs.json)",
  "exists_in_vocabulary": "y (vocabulary/fr/A1/grammar.js; vocabulary/fr/A1/verbs.js)",
  "definition_in_apps": "Exprimer sa pensée par la parole.",
  "definition_in_vocabulary": "Communiquer verbalement ; connaître une langue. | Avoir une conversation.",
  "definitions_conflict": "n",
  "other_fields_present_in_apps_but_not_vocabulary": "full conjugation table (tenses), auxiliary verb, verb group, usage_hint",
  "other_fields_present_in_vocabulary_but_not_apps": "emoji, theme tag, CEFR sub-level tag (starter), IPA transcription, grammatical form tag (verb), unique vocab ID (fr_starter_verbs_001), examples array"
}
```

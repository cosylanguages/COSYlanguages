# COSYlanguages Comprehensive Data Audit & Consistency Analysis

This document represents a meticulous, full-scale structural and logical analysis of COSYlanguages' content assets, multilingual datasets, architectural templates, and active validation schemas.

---

## 1. Executive Summary

An exhaustive analysis of the COSYlanguages codebase reveals a highly structured, scalable, and beautifully designed language-learning engine. However, as the project has scaled to **13 supported languages**, several minor architectural deviations, legacy remnants, and structural mismatches have emerged between:
1.  **The Active Specification Standards** (`SCHEMA.md`, `CONTENT_ARCHITECTURE.md`, `THEMES.md`).
2.  **The Centralized Blueprint Templates** (`templates/`).
3.  **The Actual Files in Production** (`vocabulary/`, `grammar/`, `events/`, and `games/data/`).

This audit documents these discrepancies in detail and outlines concrete recommendations for maintaining absolute logical consistency across all language datasets.

---

## 2. Vocabulary Data Audit (`vocabulary/`)

### A. IIFE Wrapper & Standard Local Declarations
*   **The Standard:** Every vocabulary file must be enclosed in an Immediately Invoked Function Expression (IIFE) wrapper containing a local declaration `const lang = "[lang_code]";` and assigning variables to `window.vocabularyData[lang]` to avoid global namespace collisions and support dynamic loading.
*   **The Findings:**
    *   Almost all core vocabulary files (`vocabulary/[lang]/A1/*.js` etc.) are perfectly wrapped and assigned.
    *   **The Adjective Files Inconsistency:** Across multiple levels and languages (including `en`, `fr`, `it`, `el`, `ru`, `ba`, `br`, `hy`, `ka`, `tt`, `pt`, `es`), `adjectives.js` files frequently lack the standardized outer IIFE wrapper, starting directly with raw object declarations.
    *   **Missing standard window assignments:** Several adjectives files (such as `vocabulary/it/A2/adjectives.js`, `vocabulary/fr/A2/adjectives.js`, and `vocabulary/ru/A2/adjectives.js`) declare arrays locally but do not append them to the global `window.vocabularyData` or `window.adjectivesData` objects. This could lead to silent load failures on certain practice pages.

### B. Theme Slug & Classification Integrity
*   **The Standard:** All vocabulary items must use filesystem-compliant lowercase theme slugs mapped directly to the Master Theme List in `THEMES.md`. Theme slugs must **never** contain level suffixes (e.g., `animals_A1`).
*   **The Findings:**
    *   **Legacy Unregistered Slugs in B1 English Adjectives:** English `vocabulary/en/B1/adjectives.js` contains a large number of custom, unregistered themes such as `career_development`, `stress_anxiety`, `values_beliefs`, `mental_health_wellbeing`, `structured_argument`, `equality_rights`, `cultural_heritage`, `finances_investment`, `higher_education`, `healthcare_systems`, `spatial_description`, and `probability_certainty`.
    *   **Legacy Unregistered Slugs in B2 Adjectives:** Localized B2 files (such as `vocabulary/it/B2/adjectives.js`, `vocabulary/el/B2/adjectives.js`, and `vocabulary/fr/B2/adjectives.js`) use custom theme slugs like `environment_policy`, `politics_governance`, `serious_illness_treatment`, and `ethical_dilemmas`.
    *   **Mapping Solution:** These custom topics should be logically mapped to their parent master categories:
        *   `career_development`, `finances_investment` ➔ `work` / `jobs`
        *   `stress_anxiety`, `mental_health_wellbeing` ➔ `psychology` / `emotions` / `health_medicine`
        *   `higher_education` ➔ `school`
        *   `equality_rights`, `values_beliefs`, `cultural_heritage` ➔ `people` / `social`
        *   `environment_policy` ➔ `environment`
        *   `politics_governance` ➔ `work` / `people`
        *   `serious_illness_treatment`, `healthcare_systems` ➔ `health_medicine`
        *   `spatial_description`, `probability_certainty` ➔ `describing`

### C. Legacy Field Contamination
*   **The Standard:** Under `SCHEMA.md`, the legacy string field `"opposite"` is strictly forbidden. Instead, antonyms must be supplied via the standardized `"antonyms"` array. The fields `"image"` and `"imageUrl"` are also forbidden.
*   **The Findings:**
    *   **A1 English Data:** Over 100 entries in `vocabulary/en/A1/` (such as `animals.js`, `furniture.js`, `social.js`, `nature.js`, `travel.js`, `time.js`, `verbs.js`) still contain `"opposite": null` as an optional field. While harmless when null, it violates strict compliance.
    *   **B1 French Data:** Legacy string fields like `"opposite": "inégalité"` are found in `vocabulary/fr/B1/vocabulary.js` and `"opposite": "insoutenable"` in `vocabulary/fr/B1/adjectives.js`. These must be migrated to standard arrays: `"antonyms": ["inégalité"]`.

### D. Word ID Format and Normalization
*   **The Standard:** Every word must feature a permanent, globally unique ID following `{lang}_{level}_{theme_slug}_{sequence}`, using normalized level IDs (`starter`, `elementary`, `intermediate`, `upper_intermediate`, `advanced`, `proficiency`).
*   **The Findings:** All vocabulary records comply beautifully with this layout, utilizing proper lowercase theme slugs and descriptive level IDs.

---

## 3. Grammar Data & Roadmaps Audit (`grammar/`)

### A. Template Integrity
*   **The Standard:** Grammar roadmaps (`grammar/[lang]/[lang].html`) and lessons (`grammar/[lang]/[layer]/[lesson-slug].html`) must be based on templates under `templates/grammar/`.
*   **The Findings:**
    *   All lessons and roadmaps are cleanly structured, using responsive tables and side navigation.
    *   **Favicon Paths:** Standardized favicon paths (`../../images/logos/cosylanguages.png` or adjusted for subdirectory depth) are consistent across all sub-pages, preventing broken icons.
    *   **Resilient Rendering:** In accordance with standard guidelines, JavaScript parsing on data-driven panels uses `try...catch` blocks to protect pages against missing categories.

---

## 4. Speaking Club Sessions Audit (`events/`)

### A. The 10-10-10 Rule Compliance
*   **The Standard:** Every standalone speaking session file must feature exactly 10 vocabulary items, 10 Round 1 discussion questions/statements, and 10 Round 2 statements/scenarios.
*   **The Findings:**
    *   All English speaking club sessions under `events/sessions/` are 100% compliant with this rule.
    *   Localized French sessions in `events/fr/sessions/` also strictly contain 10 items in each section.

### B. Session Descriptions
*   **The Standard:** Every session page must have a detailed description consisting of at least 3 sentences before the vocabulary section.
*   **The Findings:**
    *   Several localized French files (including `impersonation.html` [1 sentence], `broken-children-grown-bodies.html` [2], `fear-of-love-control.html` [2], `must-die-first.html` [2], `gilberts-law.html` [2], `home-is-a-time.html` [2], `wilsons-law.html` [2], `murphys-law.html` [2], `favorite-days-not-happened.html` [2], `law-of-attraction.html` [2], `saudade.html` [2], `finding-the-right-person.html` [2], `dangerous-blindness-perspective.html` [2], and `impersonation-accounts.html` [2]) feature description blocks with fewer than 3 sentences, reducing the contextual intro hook for students.
    *   The Russian session `events/ru/sessions/4-dnevnaya-rabochaya-nedelya.html` lacks a standard description before the vocabulary card deck, placing it in the hero banner instead.

### C. Structure & Class Uniformity
*   **The Standard:** Vocabulary sections must utilize the `.vocab-grid-10` container. Titled sections for Linguistic Corrections must use standard headers: `'Teacher's Note (Linguistic Corrections)'` and contain 3-5 `.mistake-item` blocks.
*   **The Findings:**
    *   **Inconsistent Russian Session Structure:** `events/ru/sessions/4-dnevnaya-rabochaya-nedelya.html` deviates significantly from the standard modular templates:
        *   It lacks a `<section id="vocabulary">` (using `.vocab-section` instead).
        *   It does not contain the standard Linguistic Corrections toggle block structure (`id="s-mistakes"` or `.mistake-block`).
        *   This prevents the interactive toggle functions defined in `js/core/ui.js` from working on this page, breaking the user experience.
    *   **Translated Section Headers:** In localized files (such as French), the linguistic corrections header is translated as `Note de l'enseignant (Corrections linguistiques)` or `Note du professeur`. While logical for student-facing translation, it can break automatic structure-checking scripts.
    *   **Hardcoded Numbering:** Localized French sessions (such as `la-semaine-de-4-jours.html`) use hardcoded numbers like `1.`, `2.`, etc., inside `.round-item-main`, violating the standard clean-markup principle (rendering numbers dynamically or through CSS pseudo-elements is preferred to prevent double-numbering).

---

## 5. Game Data & Integration Audit (`games/`)

### A. Dynamic vs. Static Consistency
*   **The Standard:** Standardized `game_data.js` files must reside in each language folder, supporting the centralized unified engine in `js/games/unified-engine.js`. Game files must reference words by ID only.
*   **The Findings:**
    *   COSYlanguages uses an incredibly powerful **Dynamic Game Dataset Generation** engine that parses `window.vocabularyData` on the fly to build custom monolingual game sets.
    *   **Level ID Resiliency:** The engine is highly resilient, successfully fallback mapping descriptive Level IDs (`starter`, `elementary`, etc.) to CEFR codes (`A1`, `A2`, etc.) when loading actions and items, maintaining full backward compatibility.

---

## 6. Actionable Recommendations for 100% Alignment

To achieve absolute logical and structural perfection across the website's data assets, we recommend the following strategic cleanup steps:

1.  **Refactor Adjectives wrappers:** Overwrite adjectives files to include the IIFE wrapper and the standard assignment:
    ```javascript
    (function() {
        const lang = "xx";
        const data = [...];
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    })();
    ```
2.  **Unify Theme Slugs:** Conduct a batch search-and-replace to map B1/B2 custom slugs (e.g. `career_development`, `stress_anxiety`, `environment_policy`) to the authorized master theme slugs in `THEMES.md`.
3.  **Standardise Antonyms Field:** Replace legacy `"opposite"` string fields inside `_legacy` or main records with a standard `"antonyms": []` string array.
4.  **Align Localised Session Structures:** Rewrite `events/ru/sessions/4-dnevnaya-rabochaya-nedelya.html` to perfectly match the standard 5-part structure template, restoring `<section id="vocabulary">` and standard `mistake-block` components.
5.  **Expan Description Blocks:** Expand short 1-2 sentence descriptions in French sessions to a minimum of 3 sentences to guarantee uniform visual spacing on the dashboard layouts.

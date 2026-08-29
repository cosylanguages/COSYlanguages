# Vocabulary Theme Taxonomy Audit Report

## Overview

- **Audited Data Scope:** `vocabulary/en/` (81 JavaScript files, 4117 entries)
- **UI Taxonomy Reference:** `window.COSY_THEME_TREE` in `js/core/ui.js` (30 top-level themes, 134 sub-themes)
- **Unique Theme Identifiers in Data:** 84
- **Unique Sub-Theme Identifiers in Data:** 22

---

## 1. Theme Values Present in Data but Missing from `COSY_THEME_TREE`

The following theme strings appear in `vocabulary/en/**/*.js` but are not registered as top-level keys in `COSY_THEME_TREE`:

| Data Theme Identifier | Frequency | Category / Level Context | Notes |
| :--- | :--- | :--- | :--- |
| `accessories` | 9 | English Datasets | Sub-theme in TREE |
| `advanced_register_c1` | 2 | English Datasets | Unmapped in TREE |
| `aesthetics_criticism` | 1 | English Datasets | Unmapped in TREE |
| `asking_answering_questions` | 21 | English Datasets | Unmapped in TREE |
| `books_reading` | 1 | English Datasets | Unmapped in TREE |
| `cities_towns` | 3 | English Datasets | Unmapped in TREE |
| `countries_capitals` | 2 | English Datasets | Unmapped in TREE |
| `dates_years` | 4 | English Datasets | Unmapped in TREE |
| `days_week` | 7 | English Datasets | Unmapped in TREE |
| `discourse_argument` | 11 | English Datasets | Unmapped in TREE |
| `discourse_argument_c1` | 6 | English Datasets | Unmapped in TREE |
| `dishes` | 11 | English Datasets | Unmapped in TREE |
| `duration_expressions` | 7 | English Datasets | Unmapped in TREE |
| `emotional_intelligence` | 1 | English Datasets | Unmapped in TREE |
| `epistemology_truth` | 4 | English Datasets | Unmapped in TREE |
| `extended_family` | 7 | English Datasets | Unmapped in TREE |
| `five_senses` | 2 | English Datasets | Unmapped in TREE |
| `giving_opinions` | 15 | English Datasets | Unmapped in TREE |
| `globalisation_geography` | 1 | English Datasets | Unmapped in TREE |
| `household_items` | 12 | English Datasets | Sub-theme in TREE |
| `household_tasks` | 13 | English Datasets | Unmapped in TREE |
| `immediate_family` | 15 | English Datasets | Unmapped in TREE |
| `insects` | 2 | English Datasets | Sub-theme in TREE |
| `items_of_clothing` | 25 | English Datasets | Unmapped in TREE |
| `job_titles_professions` | 23 | English Datasets | Unmapped in TREE |
| `kitchen_items` | 4 | English Datasets | Unmapped in TREE |
| `knowledge_epistemology_c1` | 7 | English Datasets | Unmapped in TREE |
| `language_persuasion_c1` | 3 | English Datasets | Unmapped in TREE |
| `learning_studying` | 34 | English Datasets | Unmapped in TREE |
| `leisure_activities` | 26 | English Datasets | Unmapped in TREE |
| `linguistics_theory` | 2 | English Datasets | Unmapped in TREE |
| `modes_of_transport` | 22 | English Datasets | Unmapped in TREE |
| `months_year` | 12 | English Datasets | Unmapped in TREE |
| `moral_philosophy` | 1 | English Datasets | Unmapped in TREE |
| `ontology_existence` | 1 | English Datasets | Unmapped in TREE |
| `organisational_culture` | 9 | English Datasets | Unmapped in TREE |
| `personal_identity` | 3 | English Datasets | Unmapped in TREE |
| `persuasion_rhetoric` | 8 | English Datasets | Unmapped in TREE |
| `plants_natural_world` | 2 | English Datasets | Unmapped in TREE |
| `playing_watching_sport` | 2 | English Datasets | Unmapped in TREE |
| `power_institutions_c1` | 15 | English Datasets | Unmapped in TREE |
| `prepositions_movement` | 3 | English Datasets | Unmapped in TREE |
| `prepositions_place` | 10 | English Datasets | Sub-theme in TREE |
| `psychoanalysis_unconscious` | 1 | English Datasets | Unmapped in TREE |
| `psychological_states_c1` | 2 | English Datasets | Unmapped in TREE |
| `rhetoric_persuasion_c1` | 1 | English Datasets | Unmapped in TREE |
| `rooms_indoor_spaces` | 1 | English Datasets | Unmapped in TREE |
| `science_tech_society_c1` | 9 | English Datasets | Unmapped in TREE |
| `seasons_climate` | 9 | English Datasets | Unmapped in TREE |
| `size_measurements` | 4 | English Datasets | Unmapped in TREE |
| `size_shape` | 62 | English Datasets | Sub-theme in TREE |
| `sociology_structures_c1` | 15 | English Datasets | Unmapped in TREE |
| `surprise_interest` | 3 | English Datasets | Unmapped in TREE |
| `toys_games` | 11 | English Datasets | Unmapped in TREE |
| `types_of_accommodation` | 4 | English Datasets | Unmapped in TREE |
| `types_of_education` | 2 | English Datasets | Unmapped in TREE |
| `using_smartphone` | 12 | English Datasets | Unmapped in TREE |

### Sub-Themes in Data Missing from `COSY_THEME_TREE` Sub-Theme Lists

| Data Sub-Theme Identifier | Frequency | Notes |
| :--- | :--- | :--- |

---

## 2. `COSY_THEME_TREE` Entries with No Matching Data in `vocabulary/en/`

The following keys or values defined in `COSY_THEME_TREE` do not match any `theme` or `sub_theme` field in English dataset files:


### Top-Level Themes in `COSY_THEME_TREE` Without Direct Match in English Data

- `contrast_pairs`
- `grammar`
- `prepositions`

### Sub-Themes in `COSY_THEME_TREE` Without Direct Match in English Data

- `accommodation`
- `appearance`
- `appliances`
- `art`
- `articles_gender`
- `birds`
- `buildings`
- `business_lang`
- `cardinal`
- `career`
- `cases_declensions`
- `celebrations`
- `character`
- `city`
- `classroom`
- `climate`
- `clock`
- `cognitive_processes`
- `communication`
- `comparative_vs_superlative`
- `comparing`
- `complex`
- `concepts`
- `conditionals_moods`
- `countryside`
- `days`
- `dependent_prepositions`
- `devices`
- `diet`
- `directions`
- `documents`
- `ecology`
- `ed_vs_ing_adjectives`
- `expressing`
- `film`
- `fractions`
- `frequency`
- `furniture_items`
- `genres`
- `geography`
- `going_out`
- `grammar_terms`
- `gym`
- `health`
- `hospital`
- `individual`
- `instruments`
- `internet`
- `invitations`
- `items`
- `landmarks`
- `landscape`
- `listening`
- `literature`
- `materials`
- `meetings`
- `money`
- `months`
- `nationality`
- `natural_disasters`
- `negative`
- `office`
- `online`
- `ordinal`
- `outdoor`
- `performance`
- `periods`
- `phonetics`
- `physical_desc`
- `plants`
- `positive`
- `prepositions_direction`
- `prepositions_time`
- `professions`
- `psychoanalysis`
- `quality`
- `quantity`
- `recycling`
- `remote_work`
- `rooms`
- `seasons`
- `senses`
- `shades`
- `sky`
- `snacks`
- `social_media`
- `software`
- `sport_injury`
- `stationery`
- `stores`
- `studying`
- `subjects`
- `symptoms`
- `syntax_word_order`
- `team_sports`
- `tenses_aspect`
- `texture`
- `theatre`
- `tourism`
- `traditions`
- `transactions`
- `transport`
- `treatment`
- `water_sports`
- `weather`
- `weather_gear`
- `wellbeing`
- `workplace`

---

## 3. Near-Duplicates and Naming Inconsistencies

The following theme or sub-theme pairs represent potential naming conflicts, singular/plural mismatches, or level-suffixed variants across the dataset and UI taxonomy:

| Data Identifier | TREE Identifier | Type of Mismatch |
| :--- | :--- | :--- |
| `art_culture` | `art` | Substring / Semantic Overlap |
| `days_week` | `days` | Substring / Semantic Overlap |
| `discourse_argument` | `discourse` | Substring / Semantic Overlap |
| `discourse_argument_c1` | `discourse` | CEFR Level Suffix in Data (`discourse_argument_c1`) |
| `extended_family` | `family` | Substring / Semantic Overlap |
| `five_senses` | `senses` | Substring / Semantic Overlap |
| `furniture` | `furniture_items` | Substring / Semantic Overlap |
| `globalisation_geography` | `geography` | Substring / Semantic Overlap |
| `health_medicine` | `health` | Substring / Semantic Overlap |
| `household_items` | `items` | Substring / Semantic Overlap |
| `immediate_family` | `family` | Substring / Semantic Overlap |
| `items_of_clothing` | `items` | Substring / Semantic Overlap |
| `job_titles_professions` | `professions` | Substring / Semantic Overlap |
| `kitchen_items` | `items` | Substring / Semantic Overlap |
| `language_persuasion_c1` | `language` | CEFR Level Suffix in Data (`language_persuasion_c1`) |
| `learning_studying` | `learning` | Substring / Semantic Overlap |
| `learning_studying` | `studying` | Substring / Semantic Overlap |
| `modes_of_transport` | `transport` | Substring / Semantic Overlap |
| `months_year` | `months` | Substring / Semantic Overlap |
| `plants_natural_world` | `plants` | Substring / Semantic Overlap |
| `prepositions_movement` | `prepositions` | Substring / Semantic Overlap |
| `prepositions_place` | `prepositions` | Substring / Semantic Overlap |
| `psychoanalysis_unconscious` | `psychoanalysis` | Substring / Semantic Overlap |
| `rooms_indoor_spaces` | `rooms` | Substring / Semantic Overlap |
| `sea` | `seasons` | Substring / Semantic Overlap |
| `seasons_climate` | `climate` | Substring / Semantic Overlap |
| `seasons_climate` | `sea` | Substring / Semantic Overlap |
| `seasons_climate` | `seasons` | Substring / Semantic Overlap |
| `social` | `social_media` | Substring / Semantic Overlap |
| `sports` | `team_sports` | Substring / Semantic Overlap |
| `sports` | `water_sports` | Substring / Semantic Overlap |
| `time` | `prepositions_time` | Substring / Semantic Overlap |
| `types_of_accommodation` | `accommodation` | Substring / Semantic Overlap |
| `using_smartphone` | `art` | Substring / Semantic Overlap |
| `work` | `remote_work` | Substring / Semantic Overlap |
| `work` | `workplace` | Substring / Semantic Overlap |

---

## 4. Reconcilation & Consolidation Recommendations

1. **Standardize Singular vs. Plural:** Reconcile mismatches like `clothing` vs `clothes`, `sport` vs `sports`, `insect` vs `insects`.

2. **Normalize CEFR Suffixes:** Remove level-specific suffixes in theme tags (e.g., `discourse_argument_c1` -> `discourse_argument`) so filtering works cleanly across all levels.

3. **Harmonize `COSY_THEME_TREE` Mapping:** Expand `COSY_THEME_TREE` or alias legacy data theme names to ensure 100% data coverage in Practice Hub dropdown filters.
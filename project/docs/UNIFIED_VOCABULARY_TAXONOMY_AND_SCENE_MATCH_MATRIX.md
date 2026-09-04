# COSYlanguages — Master Unified Vocabulary Taxonomy & Scene Match Integration Matrix

## 1. Executive Summary & Pedagogical Directives

This document provides a single, unified source of truth for all vocabulary metadata, thematic classification, curriculum roadmaps, manual structures, and interactive game integrations across COSYlanguages.

### Core Objectives
1. **Unification of Disparate Taxonomies**: Reconcile legacy dataset tags (e.g. `food` vs `food_drink`, `culture` vs `art_culture`, `work_employment` vs `work`, `society` vs `society_politics`) into a standardized 2-tier tree structure (`theme` -> `sub_theme`) under 12 overarching Macro Domains spanning all CEFR levels (A0 through C2).
2. **Comprehensive Visual Dictionary & Specialized Coverage**: Incorporate all encyclopedic and visual dictionary domain categories—including Sports & Games, Astronomy & Space, Earth & Geology, Plants & Gardening, Animal Kingdom, Human Body & Anatomy, Food & Culinary Arts, House & DIY Construction, Clothing & Personal Articles, Arts & Architecture, Communications & Office Automation, Transport & Heavy Machinery, Energy Systems, Fundamental Sciences, and Society & Institutions.
3. **Pedagogical Integrity for Visual Games**: Establish clear CEFR tiering rules for the **Scene Match Game**, reserving 2D hotspot scene environments for concrete physical terms (A0–A2) and specialized physical environments (B1), while designating non-scene visual diagrams (Collocation Webs, System Maps, and Process Flow Diagrams) for abstract higher-level domains (B2–C2).
4. **Cross-System Dynamic Scalability**: Ensure seamless querying and interoperability across the Vocabulary Database (`vocabulary/`), Curriculums (`curriculum/`), Monolingual Manuals (`manuals/`), Event Taxonomies (`speaking_club_theme_taxonomy.md`), and Game Engines (`games/scene_match/`).

---

## 2. Macro Domains & Higher-Order Taxonomy Architecture

All vocabulary across COSYlanguages is grouped into **12 Higher-Order Macro Domains**. Each domain contains standardized top-level themes and sub-themes.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           COSY MACRO DOMAINS (12)                                       │
├────────────────────┬────────────────────┬────────────────────┬──────────────────────────┤
│ 1. SELF_IDENTITY   │ 2. HOME_LIVING     │ 3. FOOD_DINING     │ 4. TRAVEL_COMM           │
│ 5. WORK_LEARNING   │ 6. SOCIETY_CULTURE │ 7. MIND_HEALTH     │ 8. NATURE_ENV            │
│ 9. SCIENCE_SPACE   │ 10. INDUSTRY_ENERGY│ 11. LAW_HISTORY    │ 12. SPORTS_LEISURE       │
└────────────────────┴────────────────────┴────────────────────┴──────────────────────────┘
```

---

## 3. Canonical Top-Level Theme & Sub-Theme Taxonomy Matrix

Below is the definitive taxonomy tree registered in `window.COSY_THEME_TREE`. Theme slugs are lower_snake_case and permanent once assigned.

| Macro Domain | Theme Slug | Theme Label | Standardized Sub-Theme Slugs |
| :--- | :--- | :--- | :--- |
| **1. SELF_IDENTITY** | `people` | People & Family | `family`, `relationships`, `nationality`, `physical_desc`, `character`, `babies`, `kids`, `groups` |
| | `body` | Body & Anatomy | `face`, `limbs`, `organs`, `senses`, `health`, `appearance`, `digestive_system`, `anatomy` |
| | `clothes` | Clothing & Articles | `everyday`, `formal`, `accessories`, `weather_gear`, `winter_clothing`, `jewelry`, `sleepwear`, `sewing`, `traditional` |
| | `colours` | Colours & Materials | `basic`, `shades`, `materials` |
| **2. HOME_LIVING** | `furniture` | Furniture & House | `rooms`, `furniture_items`, `appliances`, `household_items`, `doors_locks`, `garden`, `bedroom`, `bathroom`, `utility_room` |
| | `diy_construction` | DIY & Construction | `hand_tools`, `building_materials`, `carpentry`, `plumbing`, `electrical`, `masonry` |
| | `shopping` | Shopping & Retail | `stores`, `items`, `transactions`, `online` |
| | `time` | Time & Schedule | `clock`, `days`, `months`, `seasons`, `periods`, `frequency`, `telling_time`, `schedule`, `hourglass` |
| | `numbers` | Numbers & Math | `cardinal`, `ordinal`, `fractions`, `money`, `shapes`, `geometry` |
| **3. FOOD_DINING** | `food_drink` | Food & Kitchen | `fruit`, `vegetables`, `drinks`, `cooking`, `meals`, `snacks`, `diet`, `breakfast`, `meat`, `sweets`, `spices_condiments`, `kitchen_utensils`, `packaging` |
| **4. TRAVEL_COMM** | `travel` | Travel & Transport | `transport`, `accommodation`, `tourism`, `directions`, `documents`, `air_travel`, `land_travel`, `sea_travel`, `luggage` |
| | `transport_machinery`| Transport & Machinery| `road_transport`, `rail_transport`, `maritime_transport`, `air_transport`, `heavy_machinery`, `material_handling` |
| | `places` | Places & Geography | `city`, `buildings`, `rooms`, `geography`, `landmarks`, `countryside`, `downtown` |
| | `technology` | Technology & Office | `devices`, `internet`, `software`, `social_media`, `computers`, `office_automation` |
| **5. WORK_LEARNING**| `work` | Work & Finance | `office`, `meetings`, `career`, `documents`, `remote_work`, `finance`, `economy` |
| | `jobs` | Professions & Careers | `professions`, `workplace`, `career`, `business_lang` |
| | `school` | School & Education | `stationery`, `subjects`, `classroom`, `studying` |
| | `language` | Language & Writing | `grammar_terms`, `phonetics`, `discourse`, `learning`, `writing_system`, `alphabet`, `punctuation` |
| **6. SOCIETY_CULTURE**| `social` | Social Life & Comm | `celebrations`, `going_out`, `invitations`, `communication` |
| | `society` | Society & Institutions| `metropolitan`, `education`, `religion`, `politics`, `heraldry` |
| | `art_culture` | Arts & Architecture | `art`, `literature`, `film`, `theatre`, `traditions`, `fine_arts`, `graphic_arts`, `crafts`, `photography` |
| | `music` | Music & Audio | `instruments`, `genres`, `performance`, `listening`, `orchestra`, `notation` |
| **7. MIND_HEALTH** | `emotions` | Emotions & Feelings | `positive`, `negative`, `complex`, `expressing` |
| | `health_medicine`| Health & Medicine | `symptoms`, `treatment`, `hospital`, `wellbeing`, `sport_injury`, `medications`, `safety_equipment` |
| | `psychology` | Psychology & Mind | `biases`, `cognitive_processes`, `behavior`, `psychoanalysis`, `concepts` |
| | `describing` | Describing & Quality | `size_shape`, `texture`, `quality`, `quantity`, `comparing` |
| **8. NATURE_ENV** | `animals` | Animal Kingdom | `pets`, `farm`, `wild`, `insects`, `birds`, `sea`, `mammals`, `reptiles_amphibians`, `animal_groups`, `crustaceans_mollusks`, `fishes` |
| | `nature` | Nature & Gardening | `landscape`, `weather`, `plants`, `seasons`, `sky`, `sea`, `camping` |
| | `environment` | Environment & Earth | `ecology`, `climate`, `recycling`, `natural_disasters`, `pollution`, `biosphere` |
| | `geography` | Geography & Geology | `continents`, `europe`, `asia`, `geology`, `oceanography`, `landforms`, `cartography` |
| **9. SCIENCE_SPACE**| `science` | Fundamental Sciences | `physics_mechanics`, `optics`, `chemistry`, `laboratory`, `measuring_devices`, `biology` |
| | `astronomy` | Astronomy & Space | `celestial_bodies`, `astronomical_observation`, `astronautics`, `solar_system` |
| **10. INDUSTRY_ENERGY**| `energy` | Energy Systems | `fossil_energy`, `hydroelectricity`, `nuclear_energy`, `solar_energy`, `wind_energy` |
| **11. LAW_HISTORY**| `law_order` | Law & Justice | `justice`, `prison`, `court`, `law_enforcement` |
| | `military` | Defense & Weapons | `weapons`, `armor`, `combat_vehicles`, `defense` |
| | `history_fantasy` | History & Fantasy | `ancient_history`, `modern_history`, `fantasy`, `mythology` |
| **12. SPORTS_LEISURE**| `sports` | Sports & Athletics | `team_sports`, `individual`, `gym`, `outdoor`, `water_sports`, `track_field`, `ball_sports`, `racket_sports`, `gymnastics`, `combat_sports`, `strength_sports`, `equestrian`, `precision_sports`, `cycling`, `motor_sports`, `winter_sports`, `aerial_sports`, `mountain_sports` |
| | `games` | Games & Recreation | `board_games`, `cards`, `dice_dominoes`, `puzzles`, `video_games`, `casino_games`, `outdoor_leisure` |

### Specialized Practice Categories
* `prepositions`: `prepositions_place`, `prepositions_time`, `prepositions_direction`, `dependent_prepositions`
* `contrast_pairs`: `ed_vs_ing_adjectives`, `comparative_vs_superlative`
* `grammar`: `tenses_aspect`, `conditionals_moods`, `cases_declensions`, `articles_gender`, `syntax_word_order`

---

## 4. Legacy Dataset Synonym Reconciliation Map

To maintain backwards compatibility while enforcing clean runtime querying, legacy theme identifiers found in dataset files are mapped as follows:

| Legacy Theme Tag | Canonical Theme Slug | Default Sub-Theme Assignment |
| :--- | :--- | :--- |
| `food` | `food_drink` | `meals` |
| `furniture_objects` | `furniture` | `furniture_items` |
| `numbers_0_9` | `numbers` | `cardinal` |
| `countries_capitals` | `people` | `nationality` |
| `personal_identity` | `people` | `nationality` |
| `feelings_emotions` | `emotions` | `positive` |
| `daily_life` | `social` | `communication` |
| `hobbies` | `games` | `outdoor_leisure` |
| `lifestyle` | `social` | `going_out` |
| `career` | `jobs` | `career` |
| `work_employment` | `work` | `career` |
| `education` | `school` | `studying` |
| `culture` / `culture_arts` / `art` | `art_culture` | `art` |
| `society_politics` / `politics` / `governance` | `society` | `politics` |
| `ethics` / `ethics_philosophy` / `philosophy` / `epistemology` | `psychology` | `concepts` |
| `bioethics` / `transhumanism` | `psychology` | `concepts` |
| `ecology` | `environment` | `ecology` |
| `economy` / `economics` / `consumerism` | `work` | `economy` |
| `linguistics` | `language` | `phonetics` |
| `media` | `technology` | `social_media` |
| `tools` | `diy_construction` | `hand_tools` |

---

## 5. Scene Match Game Visual Tiering Scope Matrix

Per `docs/scene_match_curriculum_strategy.md`, visual interactive activities follow a strict CEFR-tiered strategy:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      SCENE MATCH CEFR PROGRESSION                      │
├─────────────────────────┬────────────────────────┬──────────────────────┤
│ TIER 1: CEFR A0–A2      │ TIER 2: CEFR B1        │ TIER 3: CEFR B2–C2   │
│ Full Scene Match (SVGs) │ Selective Task Scenes  │ System Maps & Webs   │
│ 16 Active Environments  │ Specialized Workflows  │ Non-Scene Diagrams   │
└─────────────────────────┴────────────────────────┴──────────────────────┘
```

| CEFR Tier | Visual Format | Target Vocabulary Domain | Active Scene Match SVGs |
| :--- | :--- | :--- | :--- |
| **Tier 1 (A0–A2)** | **Full Scene Match** (2D SVG room & environment hotspots) | Concrete physical nouns, immediate physical environment, daily objects, clothing, food, transport. | `apartment`, `bedroom`, `kitchen`, `bathroom`, `routine`, `clothing`, `seasons`, `animals`, `city`, `market`, `cafe`, `restaurant`, `park_nature`, `school_office` |
| **Tier 2 (B1)** | **Selective Specialized Scenes** (Task-based physical environments) | Concrete domain-specific workflows, medical instruments, technical tools, transit hubs. | `hospital` (Medical ward), `airport` (Terminal/Transit hub) |
| **Tier 3 (B2–C2)** | **System Maps & Collocation Webs** (Interactive non-scene diagrams) | Abstract concepts, jurisprudence, macroeconomics, cybernetics, philosophy, ethics, linguistics. | *Excluded from 2D Scene Match* (Routed to interactive collocation webs & concept maps) |

---

## 6. Detailed Scene Match Hotspot to Theme Taxonomy Directory

Below is the exact mapping of all 16 active Scene Match game environments (`games/data/scenes/*.js`) to the unified taxonomy:

### 1. Apartment (`apartment.js`)
* **Macro Domain**: `HOME_LIVING`
* **Primary Theme**: `furniture`
* **Sub-Theme**: `rooms` / `furniture_items`
* **Hotspots & Taxonomy**:
  - `sofa` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `television` ➔ Theme: `furniture` | Sub-Theme: `appliances`
  - `bookshelf` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `window` ➔ Theme: `furniture` | Sub-Theme: `rooms`
  - `lamp` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `rug` ➔ Theme: `furniture` | Sub-Theme: `household_items`
  - `painting` ➔ Theme: `art_culture` | Sub-Theme: `art`
  - `door` ➔ Theme: `furniture` | Sub-Theme: `doors_locks`

### 2. Bedroom (`bedroom.js`)
* **Macro Domain**: `HOME_LIVING`
* **Primary Theme**: `furniture`
* **Sub-Theme**: `bedroom`
* **Hotspots & Taxonomy**:
  - `bed` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `pillow` ➔ Theme: `furniture` | Sub-Theme: `household_items`
  - `wardrobe` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `desk` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `alarm_clock` ➔ Theme: `time` | Sub-Theme: `clock`
  - `mirror` ➔ Theme: `furniture` | Sub-Theme: `household_items`

### 3. Kitchen (`kitchen.js`)
* **Macro Domain**: `FOOD_DINING` / `HOME_LIVING`
* **Primary Theme**: `food_drink` / `furniture`
* **Sub-Theme**: `cooking` / `appliances`
* **Hotspots & Taxonomy**:
  - `refrigerator` ➔ Theme: `furniture` | Sub-Theme: `appliances`
  - `stove` ➔ Theme: `food_drink` | Sub-Theme: `cooking`
  - `sink` ➔ Theme: `furniture` | Sub-Theme: `appliances`
  - `frying_pan` ➔ Theme: `food_drink` | Sub-Theme: `kitchen_utensils`
  - `table` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`
  - `chair` ➔ Theme: `furniture` | Sub-Theme: `furniture_items`

### 4. Bathroom (`bathroom.js`)
* **Macro Domain**: `HOME_LIVING` / `MIND_HEALTH`
* **Primary Theme**: `furniture` / `body`
* **Sub-Theme**: `bathroom` / `health`
* **Hotspots & Taxonomy**:
  - `bathtub` ➔ Theme: `furniture` | Sub-Theme: `bathroom`
  - `shower` ➔ Theme: `furniture` | Sub-Theme: `bathroom`
  - `towel` ➔ Theme: `furniture` | Sub-Theme: `household_items`
  - `toothbrush` ➔ Theme: `body` | Sub-Theme: `health`
  - `soap` ➔ Theme: `body` | Sub-Theme: `health`
  - `mirror_bath` ➔ Theme: `furniture` | Sub-Theme: `bathroom`

### 5. Routine (`routine.js`)
* **Macro Domain**: `HOME_LIVING` / `SELF_IDENTITY`
* **Primary Theme**: `time` / `body`
* **Sub-Theme**: `telling_time` / `schedule`
* **Hotspots & Taxonomy**:
  - `waking_up` ➔ Theme: `time` | Sub-Theme: `schedule`
  - `breakfast` ➔ Theme: `food_drink` | Sub-Theme: `breakfast`
  - `brushing_teeth` ➔ Theme: `body` | Sub-Theme: `health`
  - `dressing` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `sleeping` ➔ Theme: `time` | Sub-Theme: `schedule`

### 6. Clothing & Wardrobe (`clothing.js`)
* **Macro Domain**: `SELF_IDENTITY`
* **Primary Theme**: `clothes`
* **Sub-Theme**: `everyday` / `accessories`
* **Hotspots & Taxonomy**:
  - `shirt` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `pants` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `jacket` ➔ Theme: `clothes` | Sub-Theme: `weather_gear`
  - `shoes` ➔ Theme: `clothes` | Sub-Theme: `everyday`
  - `hat` ➔ Theme: `clothes` | Sub-Theme: `accessories`

### 7. Four Seasons & Weather (`seasons.js`)
* **Macro Domain**: `NATURE_ENV`
* **Primary Theme**: `nature`
* **Sub-Theme**: `seasons` / `weather`
* **Hotspots & Taxonomy**:
  - `sun` ➔ Theme: `nature` | Sub-Theme: `weather`
  - `rain_cloud` ➔ Theme: `nature` | Sub-Theme: `weather`
  - `snow_crystal` ➔ Theme: `nature` | Sub-Theme: `seasons`
  - `autumn_leaf` ➔ Theme: `nature` | Sub-Theme: `seasons`

### 8. Animals & Wildlife (`animals.js`)
* **Macro Domain**: `NATURE_ENV`
* **Primary Theme**: `animals`
* **Sub-Theme**: `pets` / `farm` / `wild`
* **Hotspots & Taxonomy**:
  - `dog` ➔ Theme: `animals` | Sub-Theme: `pets`
  - `cat` ➔ Theme: `animals` | Sub-Theme: `pets`
  - `cow` ➔ Theme: `animals` | Sub-Theme: `farm`
  - `bird` ➔ Theme: `animals` | Sub-Theme: `birds`
  - `fish` ➔ Theme: `animals` | Sub-Theme: `fishes`

### 9. City Street & Buildings (`city.js`)
* **Macro Domain**: `TRAVEL_COMM`
* **Primary Theme**: `places`
* **Sub-Theme**: `city` / `buildings`
* **Hotspots & Taxonomy**:
  - `bus` ➔ Theme: `travel` | Sub-Theme: `land_travel`
  - `traffic_light` ➔ Theme: `travel` | Sub-Theme: `directions`
  - `bank` ➔ Theme: `work` | Sub-Theme: `finance`
  - `supermarket` ➔ Theme: `shopping` | Sub-Theme: `stores`
  - `pedestrian` ➔ Theme: `people` | Sub-Theme: `physical_desc`

### 10. Supermarket & Market (`market.js`)
* **Macro Domain**: `HOME_LIVING` / `FOOD_DINING`
* **Primary Theme**: `shopping` / `food_drink`
* **Sub-Theme**: `stores` / `fruit`
* **Hotspots & Taxonomy**:
  - `apple` ➔ Theme: `food_drink` | Sub-Theme: `fruit`
  - `bread` ➔ Theme: `food_drink` | Sub-Theme: `snacks`
  - `milk` ➔ Theme: `food_drink` | Sub-Theme: `drinks`
  - `shopping_cart` ➔ Theme: `shopping` | Sub-Theme: `items`
  - `cashier` ➔ Theme: `jobs` | Sub-Theme: `professions`

### 11. Cafe (`cafe.js`)
* **Macro Domain**: `FOOD_DINING` / `SOCIETY_CULTURE`
* **Primary Theme**: `food_drink` / `social`
* **Sub-Theme**: `drinks` / `going_out`
* **Hotspots & Taxonomy**:
  - `coffee_cup` ➔ Theme: `food_drink` | Sub-Theme: `drinks`
  - `croissant` ➔ Theme: `food_drink` | Sub-Theme: `snacks`
  - `menu` ➔ Theme: `food_drink` | Sub-Theme: `meals`
  - `barista` ➔ Theme: `jobs` | Sub-Theme: `professions`

### 12. Restaurant (`restaurant.js`)
* **Macro Domain**: `FOOD_DINING` / `SOCIETY_CULTURE`
* **Primary Theme**: `food_drink` / `social`
* **Sub-Theme**: `meals` / `going_out`
* **Hotspots & Taxonomy**:
  - `waiter` ➔ Theme: `jobs` | Sub-Theme: `professions`
  - `menu_card` ➔ Theme: `food_drink` | Sub-Theme: `meals`
  - `plate` ➔ Theme: `food_drink` | Sub-Theme: `kitchen_utensils`
  - `bill_check` ➔ Theme: `numbers` | Sub-Theme: `money`

### 13. Park & Nature (`park_nature.js`)
* **Macro Domain**: `NATURE_ENV`
* **Primary Theme**: `nature`
* **Sub-Theme**: `landscape` / `plants`
* **Hotspots & Taxonomy**:
  - `tree` ➔ Theme: `nature` | Sub-Theme: `plants`
  - `bench` ➔ Theme: `places` | Sub-Theme: `city`
  - `fountain` ➔ Theme: `places` | Sub-Theme: `landmarks`
  - `flower` ➔ Theme: `nature` | Sub-Theme: `plants`

### 14. School & Office (`school_office.js`)
* **Macro Domain**: `WORK_LEARNING`
* **Primary Theme**: `school` / `work`
* **Sub-Theme**: `stationery` / `office`
* **Hotspots & Taxonomy**:
  - `whiteboard` ➔ Theme: `school` | Sub-Theme: `classroom`
  - `laptop` ➔ Theme: `technology` | Sub-Theme: `computers`
  - `notebook` ➔ Theme: `school` | Sub-Theme: `stationery`
  - `pen` ➔ Theme: `school` | Sub-Theme: `stationery`

### 15. Airport & Terminal (`airport.js` - Selective B1)
* **Macro Domain**: `TRAVEL_COMM`
* **Primary Theme**: `travel`
* **Sub-Theme**: `air_travel` / `documents`
* **Hotspots & Taxonomy**:
  - `airplane` ➔ Theme: `travel` | Sub-Theme: `air_travel`
  - `departure_board` ➔ Theme: `travel` | Sub-Theme: `tourism`
  - `suitcase` ➔ Theme: `travel` | Sub-Theme: `luggage`
  - `conveyor_belt` ➔ Theme: `transport_machinery` | Sub-Theme: `material_handling`

### 16. Hospital Ward (`hospital.js` - Selective B1)
* **Macro Domain**: `MIND_HEALTH`
* **Primary Theme**: `health_medicine`
* **Sub-Theme**: `hospital` / `treatment`
* **Hotspots & Taxonomy**:
  - `hospital_bed` ➔ Theme: `health_medicine` | Sub-Theme: `hospital`
  - `stethoscope` ➔ Theme: `health_medicine` | Sub-Theme: `treatment`
  - `doctor` ➔ Theme: `jobs` | Sub-Theme: `professions`
  - `medicine_bottle` ➔ Theme: `health_medicine` | Sub-Theme: `medications`

---

## 7. CEFR Exam & International Benchmark Alignment

This taxonomy maps directly to international CEFR vocabulary criteria across 14 languages:

| Standard / Exam | Target Level | Aligned Macro Domains | Key CEFR Competency Focus |
| :--- | :--- | :--- | :--- |
| **Oxford 3000 / 5000** | A1–C1 | All 12 Macro Domains | High-frequency CEFR word bands, multi-part of speech coverage. |
| **DELF / DALF (French)** | A1–C2 | `SELF_IDENTITY`, `TRAVEL_COMM`, `WORK_LEARNING`, `LAW_HISTORY` | Daily interactions, argumentation, professional discourse. |
| **DELE / SIELE (Spanish)** | A1–C2 | `HOME_LIVING`, `FOOD_DINING`, `SOCIETY_CULTURE` | Pan-Hispanic variants, formal/informal registers (tú/usted). |
| **CELI / CILS (Italian)** | A1–C2 | `FOOD_DINING`, `SOCIETY_CULTURE`, `MIND_HEALTH` | Regional idioms, cultural heritage, social expressiveness. |
| **TORFL (Russian)** | A1–C2 | `SELF_IDENTITY`, `WORK_LEARNING`, `NATURE_ENV`, `SCIENCE_SPACE` | Case government, motion verbs, register, academic discourse. |

---

## 8. Governance & Developer Guidelines

1. **Tagging New Vocabulary Entries**:
   - Every word entry in `vocabulary/` MUST specify a valid `theme` matching a top-level key in `window.COSY_THEME_TREE`.
   - `sub_theme` SHOULD be populated using a valid sub-theme string from `window.COSY_THEME_TREE`.
2. **Scene Match Hotspot Additions**:
   - New 2D scene SVGs must be restricted to CEFR A0–B1 concrete physical terms.
   - Hotspot IDs in scene SVG definitions MUST correlate with corresponding word entry IDs or exact terms in `vocabulary/`.
3. **Runtime Updates**:
   - Any modification to `project/docs/THEMES.md` must be mirrored in `js/core/ui.js` (`window.COSY_THEME_TREE`) and `js/games/utils/shared.js`.

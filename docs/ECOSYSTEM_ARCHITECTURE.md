# COSYlanguages Ecosystem Modularization & Architecture Strategy

This document provides a comprehensive analysis of the COSYlanguages github ecosystem, evaluating sub-products for repository extraction and detailing how the primary `COSYlanguages` repository serves as the central orchestrator and hub.

---

## 1. Executive Context & Current State

The COSYlanguages platform is evolving from a single monolithic repository into a distributed, multi-repository ecosystem. Standalone products are decoupled into dedicated repositories under the `cosylanguages` organization:

1. **[COSYworld](https://github.com/cosylanguages/COSYworld):**
   - **Role:** Interactive 2D/3D visual environments, Scene Match visual learning games, and immersive exploratory hubs.
   - **Characteristics:** Heavy canvas rendering engines, spatial asset models, and rich visual environment logic.

2. **[COSYtools](https://github.com/cosylanguages/COSYtools):**
   - **Role:** Standalone offline reference utilities and linguistic micro-apps.
   - **Included Tools:**
     - *Verb Conjugators:* `fr-conjugeur`, `it-coniugatore`, `ru-spryazhenie`, `el-klisi-rimaton`
     - *Gender Trainers:* `fr-genre`, `it-genere`, `ru-rod-padezhi`, `el-genos-ptoseis`
     - *Prepositional Regimes:* `en-verb-prep`, `fr-regime`, `it-reggenza`, `el-syntaxi`

---

## 2. Core Repository Audit (`COSYlanguages`)

An inventory and size analysis of the main `COSYlanguages` repository reveals distinct domains:

| Directory | Size | Function & Role | Extraction Priority |
| :--- | :--- | :--- | :--- |
| **`sounds/` & `images/`** | ~107 MB | Binary media assets (audio pronunciations, screenshots, illustrations). | **High** (Candidates for Asset CDN) |
| **`apps/`** | ~27 MB | Standalone micro-apps, tools, premium courses, and event interfaces. | **High** (Extract standalone tools/events) |
| **`manuals/`** | ~15 MB | CEFR HTML interactive textbooks across 13 languages. | **Keep in Main Hub** (Core Textbook Portal) |
| **`vocabulary/` & `reference-grammar/`** | ~25 MB | Structured JSON datasets for vocabulary and morphology reference. | **Medium** (Potential open data API package) |
| **`events/`** | ~5.8 MB | Conversational Speaking Clubs (7 themes) & Multimedia Nights (5 formats). | **Medium** (Candidate for COSYevents repo) |
| **`curriculum/`** | ~3.5 MB | Syllabus datasets across 6 tracks (General, Spoken, Professional, Travelling, Relocation, Exam). | **Medium** (Open curriculum dataset) |
| **`games/`** | ~2.5 MB | Interactive practice engines, flashcards, quizzes, and word puzzles. | **Medium** (Candidate for COSYgames repo) |
| **`shared/` & `js/`** | ~2.0 MB | Core design system tokens, platform UI engines, and daily dose loaders. | **Keep in Main Hub** (Shared Platform Core) |

---

## 3. Modularization Strategy: Candidate Repositories for Extraction

To maintain rapid development cycles, small git clone footprints, and independent deployment lifecycles, the following extractions are recommended:

### Candidate A: `COSYmedia` / `COSYassets`
- **Scope:** `sounds/` (~53MB audio files) and `images/` (~54MB high-res images).
- **Rationale:** Storing binary files in the primary code repository inflates git clone size and slows CI/CD pipelines. Isolating media assets into a dedicated media repository or CDN (e.g., `assets.cosylanguages.com` / GitHub Pages CDN) allows main codebases to remain lightweight text-only repositories.

### Candidate B: `COSYgames`
- **Scope:** `games/` folder (word searches, interactive card games, quizzes, and non-Scene Match engines).
- **Rationale:** Games possess an independent interactive state management, custom audio triggers, and specialized game rendering engines separate from textbook manuals.

### Candidate C: `COSYevents`
- **Scope:** `events/` and `apps/premium-events/` (Speaking Clubs: *I Couldn't Help But Wonder*, *Keeping Up with Science*, *Mind Matters*, *Debatable & Relatable*, *Let's Celebrate*, *My Life With/Without*, *The Greatest Quotes*; Multimedia Nights: *Cinema Club*, *Karaoke Club*, *Game Evening*, *Long Reads*, *If You Were*).
- **Rationale:** Event materials update dynamically per session and serve event hosts and live conversational session participants.

### Candidate D: `COSYstudio` / `COSYprint`
- **Scope:** `print-boardgame.html`, `print-box.html`, `print-cards.html`, `print-grammar.html`, `print-zine.html`, `apps/print-studio/`.
- **Rationale:** Print generators rely on heavy client-side export scripts (`jsPDF`, canvas encoders) to generate offline PDFs, zines, and physical learning materials. Decoupling isolates heavy export libraries from main web browsing traffic.

### Candidate E: `COSYdata` / `COSYcurriculum`
- **Scope:** `curriculum/`, `vocabulary/`, `reference-grammar/`, `data/index/`.
- **Rationale:** Serves as an open, version-controlled language data standard (like WordNet or Wiktionary) that third-party developers, academic research teams, and LLM applications can consume via NPM modules or JSON REST/GraphQL endpoints.

---

## 4. Architectural Vision for Main Hub (`COSYlanguages`)

With specialized tools and media extracted into satellite repos, `COSYlanguages` operates as the **Unified Ecosystem Hub & Gateway**:

```
                                  ┌───────────────────────────┐
                                  │      COSYlanguages        │
                                  │   (Central Ecosystem Hub) │
                                  └─────────────┬─────────────┘
                                                │
         ┌──────────────────┬───────────────────┼───────────────────┬──────────────────┐
         │                  │                   │                   │                  │
┌────────▼────────┐ ┌───────▼────────┐  ┌───────▼────────┐  ┌───────▼────────┐ ┌───────▼────────┐
│    COSYworld    │ │    COSYtools   │  │    COSYmedia   │  │    COSYgames   │ │    COSYevents  │
│  (Visual & 3D)  │ │ (Grammar Apps) │  │  (Media CDN)   │  │ (Game Engines) │ │(Speaking Clubs)│
└─────────────────┘ └────────────────┘  └────────────────┘  └────────────────┘ └────────────────┘
```

### Key Responsibilities of Main Hub:
1. **Central Portal & Multi-lingual Navigation Hub:**
   - Universal entrance pages (`languages/{iso}/index.html`) providing language selection and learning path previews.
   - Master cross-reference search engine parsing global index files (`data/index/{lang}_index.json`).

2. **Core CEFR HTML Textbooks (`manuals/`):**
   - Main repository retains the core interactive web manuals across 13 languages formatted in standard ISO structures (`manuals/{lang}/grammar/` and `manuals/{lang}/vocabulary/`).

3. **Shared Design System & Runtime Core (`shared/`):**
   - Provides canonical CSS tokens (`css/tokens.css`, `css/base.css`, `css/components.css`, `css/layout.css`).
   - Maintains core platform scripts (`js/core/engine.js`, `js/core/i18n.js`, `js/core/ui.js`, `js/data/daily_dose.js`).

---

## 5. Recommended Implementation Roadmap

1. **Phase 1 (Completed):** Extract `COSYworld` and `COSYtools` into dedicated repositories.
2. **Phase 2 (Current):** Document ecosystem strategy (`docs/ECOSYSTEM_ARCHITECTURE.md`) and standardize directory organization (`MIGRATION_MAP.md`).
3. **Phase 3 (Next Steps):**
   - Establish `COSYmedia` / `COSYassets` to offload binary audio/visual content.
   - Decouple `COSYevents` and `COSYgames` into standalone repositories.
   - Maintain `COSYlanguages` as the primary lightweight documentation and textbook hub.

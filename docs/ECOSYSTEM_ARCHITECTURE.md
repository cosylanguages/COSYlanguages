# COSYlanguages Ecosystem Architecture & Modularization Roadmap

This document outlines the architecture for decoupling the **COSYlanguages** platform into dedicated standalone GitHub repositories for each major sub-product application, and establishes how the main repository (`COSYlanguages`) functions as the central portal, textbook library, and ecosystem gateway.

---

## 1. Existing Standalone Repositories

The project has already begun extracting specialized sub-products into standalone GitHub repositories under the `cosylanguages` organization:

1. **[COSYworld](https://github.com/cosylanguages/COSYworld):**
   - **Role:** Interactive 2D/3D visual environments, Scene Match games, and exploratory visual learning spaces.
   - **Features:** High-performance spatial rendering, interactive room/city scenes, and cultural visual overlays.

2. **[COSYtools](https://github.com/cosylanguages/COSYtools):**
   - **Role:** Standalone, offline-first linguistic reference engines and micro-apps.
   - **Features:** 12 specialized tools across 5 languages:
     - *Verb Conjugators:* `fr-conjugeur`, `it-coniugatore`, `ru-spryazhenie`, `el-klisi-rimaton`
     - *Gender Trainers:* `fr-genre`, `it-genere`, `ru-rod-padezhi`, `el-genos-ptoseis`
     - *Prepositional Regimes:* `en-verb-prep`, `fr-regime`, `it-reggenza`, `el-syntaxi`

---

## 2. Proposed Standalone Repositories for Extraction

To make each product modular, independently deployable, and easy to maintain, the following standalone web applications in the main codebase are prime candidates to move into their own dedicated GitHub repositories:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          COSYlanguages                                  │
│                 (Central Portal, Hub & Textbooks)                       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
    ┌───────────────┬────────────────┼────────────────┬───────────────┐
    │               │                │                │               │
┌───▼───────────┐ ┌─▼─────────────┐ ┌▼──────────────┐ ┌▼─────────────┐ ┌▼─────────────┐
│   COSYevents  │ │   COSYgames   │ │   COSYstudio   │ │ COSYcourses │ │COSYclassroom│
│ (Clubs/Nights)│ │(Minigames App)│ │(Print Studio) │ │(Course Path)│ │(Teacher Sync)│
└───────────────┘ └───────────────┘ └───────────────┘ └─────────────┘ └─────────────┘
```

### Candidate 1: `COSYevents` (`github.com/cosylanguages/COSYevents`)
* **What it is:** The complete interactive conversational event platform (`events/` and `apps/premium-events/`).
* **Sub-products included:**
  - *Thematic Speaking Clubs:* I Couldn't Help But Wonder, Keeping Up with Science, Mind Matters, Debatable & Relatable, Let's Celebrate, My Life With/Without, and The Greatest Quotes.
  - *Multimedia Event Nights:* Cinema Club, Karaoke Club, Game Evening, Long Reads, and If You Were.
* **Why extract to a separate repo:** It functions as its own web application for session facilitators and participants, featuring interactive slide decks, debate cards, media players, and vocabulary cards.

### Candidate 2: `COSYgames` (`github.com/cosylanguages/COSYgames`)
* **What it is:** The suite of 22+ interactive language learning minigames (`games/`: Word Search, Crosswords, Flashcards, Speed Drills, Memory Cards, Quiz engines).
* **Why extract to a separate repo:** Interactive minigames form a dedicated casual practice web app with custom sound triggers, scoreboards, and game engine mechanics.

### Candidate 3: `COSYstudio` (`github.com/cosylanguages/COSYstudio`)
* **What it is:** The pedagogical print studio and physical resource builder (`apps/print-studio/`, `print-boardgame.html`, `print-cards.html`, `print-grammar.html`, `print-zine.html`, `print-box.html`).
* **Why extract to a separate repo:** A standalone web app for teachers and self-learners to generate, customize, and print physical learning zines, flashcard boxes, boardgames, and PDF grammar cheatsheets.

### Candidate 4: `COSYcourses` (`github.com/cosylanguages/COSYcourses`)
* **What it is:** The syllabus-driven structured course web app (`apps/premium-courses/` and `curriculum/`).
* **Tracks included:** General, Spoken, Professional, Travelling, Relocation, and Exam Prep across CEFR levels A1–C2.
* **Why extract to a separate repo:** Operates as a focused structured learning app with level pathways, unit cards, lesson progress, and teacher notes.

### Candidate 5: `COSYclassroom` (`github.com/cosylanguages/COSYclassroom`)
* **What it is:** The live classroom presentation and screen sync tool (`classroom-sync.html`).
* **Why extract to a separate repo:** A dedicated presentation utility for teachers projecting interactive lessons onto smartboards or sharing screens during live classes.

---

## 3. How to Improve the Main Hub (`COSYlanguages`)

Once standalone sub-products are extracted into their own repositories, **`COSYlanguages`** (`cosylanguages.github.io/COSYlanguages`) evolves into a cleaner, focused **Master Gateway, Textbook Library & Ecosystem Hub**:

### 1. Unified Multi-Product Ecosystem Gateway
* **Central Directory & Hub:** Serves as the landing portal introducing the COSY philosophy ("Slow-Tech", privacy-first, zero translation fallback).
* **Ecosystem Navigator Bar:** A header component providing quick access across all COSY web apps:
  - 🌐 **COSYlanguages:** Core Hub & CEFR Textbooks
  - 🗺️ **COSYworld:** Interactive 3D Visual Environments
  - 🛠️ **COSYtools:** Conjugators, Gender & Regime Reference
  - 🗣️ **COSYevents:** Speaking Clubs & Multimedia Nights
  - 🎮 **COSYgames:** Practice Minigames Hub
  - 🖨️ **COSYstudio:** Printable Zines & Flashcard Studio
  - 📚 **COSYcourses:** Structured Syllabus Pathways

### 2. Comprehensive CEFR Interactive Web Textbooks (`manuals/`)
* Retains and expands the core interactive HTML textbooks across all 13 supported languages (English, French, Italian, Russian, Greek, Spanish, German, Portuguese, Armenian, Georgian, Tatar, Bashkir, Breton).
* Standardizes all manual paths under clean ISO language codes (`manuals/{lang}/grammar/` and `manuals/{lang}/vocabulary/`).

### 3. Universal Diagnostic Placement & Language Portals
* **Placement Quiz (`placement-quiz.html`):** Fast, account-free CEFR level assessment.
* **Language Portal Hubs (`languages/{iso}/index.html`):** Dedicated entry points for each language featuring daily dose idioms/facts and topic roadmaps.

### 4. Open Language Data Standard & Cross-Reference Index
* Retains `data/index/{lang}_index.json` search indexes that cross-reference grammar topics, vocabulary items, and exercises across the entire ecosystem.

---

## 4. Implementation Roadmap

1. **Phase 1 (Done):** Extracted `COSYworld` and `COSYtools` into standalone repositories.
2. **Phase 2 (Done):** Formulated the ecosystem modularization roadmap in `docs/ECOSYSTEM_ARCHITECTURE.md`.
3. **Phase 3 (Next Steps):**
   - Create `COSYevents`, `COSYgames`, `COSYstudio`, and `COSYcourses` GitHub repositories.
   - Refactor `COSYlanguages` into a lightweight master gateway and web textbook portal with unified navigation header linking to all standalone sub-product repos.

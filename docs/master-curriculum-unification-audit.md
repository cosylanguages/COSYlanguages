# Executive Audit & Master Unification Architecture: Curricula, Roadmaps, Manuals, and Datasets

## Executive Summary & Purpose

This document provides a comprehensive, executive-level audit and architectural plan for unifying all learning content across COSY's **14 supported languages**, **6 course tracks**, **3-Book manual ecosystem**, **reference grammar tools**, **vocabulary datasets**, and **standalone practice applications**.

The primary objective is to evaluate content completeness, identify level gaps across tracks, eliminate content silos, and establish explicit cross-linking mechanisms (`bridges_to`, `grammar_refs`, `vocabulary_refs`, `word_ids`, `recycled`, and Standalone App cross-references) to ensure a cohesive, unified learner journey.

---

## 1. Full Audit & Inventory Matrix

### 1.1 Languages & Curriculum File Inventory

COSY supports 14 languages across 6 distinct learning tracks:
1. **General Track (`general`)**: Complete CEFR progression (A1–C2).
2. **Spoken Track (`spoken`)**: Conversational fluency & listening focus (A1–C2).
3. **Exam Preparation Track (`exam`)**: Standardized testing strategies (B1–C2).
4. **Travelling Track (`travelling`)**: Survival & situational travel communication (A1–B1).
5. **Professional Track (`professional`)**: Workplace & academic communication (B1–C2).
6. **Relocation Track (`relocation`)**: Life setup, bureaucracy, & local integration (A2–C1).

#### Curriculum Coverage Matrix

| Language | Code | General Track | Spoken Track | Exam Track | Travelling Track | Professional Track | Relocation Track | Total Authored Lessons |
|---|---|---|---|---|---|---|---|---|
| **English** | `en` | A1, A2, B1, B2, C1, C2 | A1, A2, B1, B2, C1, C2 | B1, B2, C1, C2 | A1, A2, B1 | B1, B2, C1, C2 | A2, B1, B2, C1 | **614 lessons** (27 files) |
| **French** | `fr` | A1, A2, B1, B2, C1, C2 | A1, A2, B1, B2, C1, C2 | — | A1, A2, B1 | B1, B2, C1, C2 | — | **544 lessons** (19 files) |
| **Russian** | `ru` | A1, A2, B1, B2, C1, C2 | A1, A2, B1, B2, C1, C2 | — | A1, A2, B1 | B1, B2, C1, C2 | — | **544 lessons** (19 files) |
| **Italian** | `it` | A1, A2, B1, B2 | — | — | — | — | — | **113 lessons** (4 files) |
| **Greek** | `el` | A1, A2, B1 | — | — | — | — | — | **57 lessons** (3 files) |
| **Spanish** | `es` | A1, C1 | — | — | — | — | — | **24 lessons** (2 files) |
| **German** | `de` | A1, C1 | — | — | — | — | — | **23 lessons** (2 files) |
| **Portuguese** | `pt` | A1, C1 | — | — | — | — | — | **23 lessons** (2 files) |
| **Armenian** | `hy` | A1, C1 | — | — | — | — | — | **70 lessons** (2 files) |
| **Georgian** | `ka` | A1, C1 | — | — | — | — | — | **70 lessons** (2 files) |
| **Tatar** | `tt` | A1, C1 | — | — | — | — | — | **70 lessons** (2 files) |
| **Bashkir** | `ba` | A1, C1 | — | — | — | — | — | **70 lessons** (2 files) |
| **Breton** | `br` | A1, C1 | — | — | — | — | — | **70 lessons** (2 files) |
| **Chuvash** | `cv` | Planned (A1) | — | — | — | — | — | **0 lessons** (0 files) |

*Total Active Curriculum JSON Files:* **88 files** | *Total Authored Lessons:* **2,294 lessons**.

---

### 1.2 Manuals Architecture (3-Book System)

COSY structures written manual learning materials into three distinct books:
- **Book 1: Grammar Manuals (`manuals/{lang}/grammar/`)**: Systematic structural explanations, conjugation/declension tables, and rule breakdowns across levels.
- **Book 2: Vocabulary Manuals (`manuals/{lang}/vocabulary/`)**: Thematic lexical pools, collocations, and contextual usage notes.
- **Book 3: Communication Manuals (`manuals/{lang}/communication/`)**: Conversational maps, micro-dialogues, and pragmatics (available for English and French).

#### Manual Readiness Matrix

| Language | Monolingual A0–A1 Manuals | Interactive A2 Manuals | Interactive B1 Manuals | B2–C2 Manual Topics |
|---|---|---|---|---|
| **English (`en`)** | Complete (Grammar, Vocab, Comm) | Complete (Grammar, Vocab, Comm) | Complete (Grammar, Vocab, Comm) | Complete (B2 & C1 Grammar/Vocab/Comm) |
| **French (`fr`)** | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Grammar/Vocab topics generated via Python scripts |
| **Russian (`ru`)** | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Sourced from `reference-grammar/ru/` |
| **Italian (`it`)** | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Sourced from `reference-grammar/it/` |
| **Greek (`el`)** | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Complete (Grammar, Vocab) | Sourced from `reference-grammar/el/` |
| **Cluster B (`de`)** | Complete (A0–A1 Monolingual) | Complete (A2 Grammar & Vocab) | Complete (B1 Grammar & Vocab) | Sourced from `reference-grammar/de/` |
| **Cluster A (`es`, `pt`)** | Complete (A0–A1 Monolingual) | Complete (A2 Grammar & Vocab) | Built via scripts | Sourced from `reference-grammar/` |
| **Cluster C (`hy`, `ka`, `tt`, `ba`, `br`, `cv`)** | Complete (A0–A1 Monolingual) | Complete (A2 Grammar & Vocab via `build_cluster_c_manuals.py`) | Built via scripts | Sourced from `reference-grammar/` |

---

### 1.3 Reference Grammar & Vocabulary Datasets

#### 1. Multi-Language Reference Grammar (`reference-grammar/{lang}/`)
All 14 languages contain 100% target-language monolingual JSON files validated against `grammar/_schema/grammar.schema.json` across four core linguistic pillars:
- `morphology/` (Parts of speech, inflection, case systems)
- `syntax/` (Sentence construction, clause embedding, word order)
- `particles/` (Prepositions, conjunctions, discourse markers)
- `phonology/` (`sounds.json`, `stress.json`, `intonation.json`)

#### 2. Vocabulary Datasets (`vocabulary/{lang}/{level}/*.js`)
- **834 standalone JavaScript dataset files** across levels A1 through C2.
- A1: 14–33 thematic files per language (family, food, routines, time, work, etc.).
- A2–C2: Advanced thematic JS pools (opinions, debate, technical, academic, idioms).

---

### 1.4 Standalone Practice Applications (`apps/*`)

COSY features dedicated interactive engines for language-specific high-friction grammar points:
1. **English Dependent Prepositions (`apps/en-verb-prep/`)**: Unified engine across verbs, nouns, and adjectives with SRS practice and mastery dashboard.
2. **French Prepositional Regimes (`apps/fr-regime/`)**: Unified engine across verbs, nouns, and adjectives with Leitner SRS and contraction awareness.
3. **French Verb Conjugator (`apps/fr-conjugeur/`)** & **Noun Gender (`apps/fr-genre/`)**.
4. **Italian Prepositional Regimes (`apps/it-reggenza/`)**: Unified engine across verbs, nouns, and adjectives with SRS and cross-reference chips.
5. **Italian Verb Conjugator (`apps/it-coniugatore/`)** & **Noun Gender (`apps/it-genere/`)**.
6. **Russian Conjugation (`apps/ru-spryazhenie/`)** & **Genitive Case Regimes (`apps/ru-rod-padezhi/`)**.
7. **Greek Verb & Noun Syntax (`apps/el-syntaxi/`)**, **Verb Conjugation (`apps/el-klisi-rimaton/`)**, and **Gender/Cases (`apps/el-genos-ptoseis/`)**.

---

## 2. Unification & Cross-Linking Architecture

To ensure content is not isolated in silos, COSY implements a 5-pillar cross-linking schema:

```
                          ┌──────────────────────────┐
                          │   Curriculum Lesson      │
                          │ (curriculum/en/general/) │
                          └─────────────┬────────────┘
                                        │
      ┌─────────────────┬───────────────┼───────────────┬──────────────────┐
      │                 │               │               │                  │
      ▼                 ▼               ▼               ▼                  ▼
┌───────────┐     ┌───────────┐   ┌───────────┐   ┌───────────┐    ┌──────────────┐
│bridges_to │     │grammar_refs│   │vocab_refs │   │ recycled  │    │ Standalone   │
│(Cross-    │     │(Taxonomy &│   │& word_ids │   │(Knowledge │    │ App Links    │
│ Track)    │     │Ref-Grammar│   │(Vocab JS) │   │ Chaining) │    │(Regime/Conj) │
└───────────┘     └───────────┘   └───────────┘   └───────────┘    └──────────────┘
```

### 2.1 Cross-Track Bridging (`bridges_to`)
The `bridges_to` property in lesson JSON schemas connects lessons across tracks when learning concepts overlap.

**Schema Format:**
```json
"bridges_to": [
  {
    "course_type": "spoken",
    "lesson_code": "EN-SPK-A2-005",
    "note": "Apply present perfect travel experiences in conversational speed practice."
  },
  {
    "course_type": "travelling",
    "lesson_code": "EN-TRV-A2-003",
    "note": "Use airport and transit vocabulary in real-world scenario."
  }
]
```

### 2.2 Taxonomy & Reference Grammar Linking (`grammar_refs`)
Maps lesson grammar points directly to taxonomy IDs and target-language reference grammar files.

**Schema Format:**
```json
"grammar_refs": [
  {
    "layer": "morphology",
    "category": "verbs",
    "group_id": "en.grammar.a2.present_perfect_simple",
    "manual_url": "manuals/en/grammar/a2/topics/present-perfect.html"
  }
]
```

### 2.3 Vocabulary Linking (`vocabulary_refs` & `word_ids`)
Connects lesson target vocabulary directly to lexical dataset keys in `vocabulary/{lang}/{level}/*.js`.

**Schema Format:**
```json
"vocabulary_refs": [
  {
    "dataset": "vocabulary/en/A2/travel_transport.js",
    "word_ids": ["en.a2.travel.boarding_pass", "en.a2.travel.luggage_claim"]
  }
]
```

### 2.4 Standalone Application Integration
Links curriculum lessons directly to interactive engines when lessons cover prepositional regimes, verb conjugations, or noun gender/case government.

**Integration Specification:**
- **French Regime Lessons (e.g. `FR-GEN-B1-012` on `avoir besoin de`)**: Embed direct link to `apps/fr-regime/?search=besoin`.
- **Italian Regime Lessons (e.g. `IT-GEN-A2-018` on `pensare a/di`)**: Embed direct link to `apps/it-reggenza/?search=pensare`.
- **English Preposition Lessons (e.g. `EN-GEN-B1-004` on phrasal verbs)**: Embed direct link to `apps/en-verb-prep/?search=look_forward_to`.
- **Greek Syntax Lessons (e.g. `EL-GEN-A2-010` on verb case government)**: Embed direct link to `apps/el-syntaxi/?search=ενδιαφέρω`.

### 2.5 Recycled Knowledge Chaining (`recycled`)
Every lesson incorporates a `recycled` string field defining prerequisite grammar or vocabulary to be systematically reinforced during warm-up exercises.

---

## 3. Level Gap Analysis & Integration Strategies

### 3.1 Bounded Course Tracks: Integrating Absent Level Content

Certain tracks are intentionally bounded in level scope based on real-world learner goals:
- **Travelling Track (A1–B1)**: Designed for immediate, practical travel needs.
- **Relocation Track (A2–C1)**: Focuses on administrative, housing, and social integration.
- **Exam Preparation Track (B1–C2)**: Targeted at official certifications (B1 Preliminary to C2 Proficiency).
- **Professional Track (B1–C2)**: Tailored for workplace and academic communication.

#### Absent Level Integration Strategy Matrix

| Track | Absent Levels | Strategy for Embedding Missing Level Concepts |
|---|---|---|
| **Travelling Track** | A0/A1 absolute basics, B2–C2 nuances | **1. A0 Ingestion**: Unit 1 of A1 Travelling embeds absolute basic phonetic gestures, essential greetings, and currency recognition in survival micro-dialogues.<br>**2. B2–C2 Ingestion**: Unit 5 of B1 Travelling introduces subtle cultural pragmatics, handling travel disputes, lost documentation, and medical emergencies without needing a full B2 course. |
| **Relocation Track** | A1 absolute starter, C2 academic | **1. A1 Ingestion**: Unit 1 of A2 Relocation includes rapid-review survival templates for basic introductions at city halls and bank appointments.<br>**2. C2 Ingestion**: Unit 4 of C1 Relocation embeds advanced legal, tax, and property ownership terminology into C1 lease and contract lessons. |
| **Exam Track** | A1–A2 elementary | **A1–A2 Ingestion**: Unit 1 of B1 Exam Prep includes diagnostic review modules flagging foundational grammar gaps (e.g. subject-verb agreement, basic tenses) before diving into exam format strategies. |
| **Professional Track**| A1–A2 basic | **A1–A2 Ingestion**: Unit 1 of B1 Professional integrates foundational workplace phrases (answering calls, basic email greetings) alongside professional vocabulary onboarding. |

---

### 3.2 Roadmap for "Coming Soon" Languages (`es`, `de`, `pt`, `hy`, `ka`, `tt`, `ba`, `br`, `cv`)

While all these languages possess complete A1 and C1 curriculum files alongside rich vocabulary JS datasets and reference grammar JSONs, intermediate curriculum files (`A2.json`, `B1.json`, `B2.json`) require compilation.

#### Step-by-Step Expansion Plan:

1. **Phase 1: Intermediate Curriculum JSON Generation (A2, B1, B2)**
   - Extract grammar topic progression from `reference-grammar/{lang}/morphology/` and `syntax/`.
   - Map lexical pools from existing `vocabulary/{lang}/A2/` and `B1/` JS files.
   - Generate standard schema-compliant `A2.json`, `B1.json`, and `B2.json` curriculum files.

2. **Phase 2: Manual Hub & Topic Page Generation**
   - Execute `project/scripts/build_cluster_c_manuals.py` for `hy`, `ka`, `tt`, `ba`, `br`, `cv` A2/B1 manuals.
   - Run `project/scripts/build_manual_hubs.py` to regenerate central portal pages (`espanol-a2.html`, `deutsch-a2.html`, etc.).

3. **Phase 3: Visual Roadmap Portal Wiring**
   - Update `languages/{lang}/curriculum.html` and `languages/{lang}/index.html` across all target languages to reflect activated course tracks and levels.

---

## 4. Summary & Implementation Verification

### Verification Standards

To guarantee data integrity across all curriculum JSONs and HTML manual portals, the following verification scripts must be run as standard practice:
- `python3 project/scripts/verify_all_curriculums.py` — Schema validation against `curriculum/_schema/curriculum.schema.json`.
- `python3 project/scripts/verify_manual_links.py` — Dead link check across all 840+ manual HTML pages.
- `python3 scripts/verify_taxonomy.py` — Integrity verification linking taxonomy IDs to curriculum references.

---
*Report Compiled & Certified by Jules, Principal Software Engineer.*

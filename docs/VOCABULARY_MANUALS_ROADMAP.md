# COSYlanguages — Expansion Roadmap & Architecture for Monolingual Vocabulary Manuals

This document outlines the strategic roadmap, architectural specification, directory taxonomy, and pedagogical guidelines for COSYlanguages' suite of **monolingual interactive web edition vocabulary manuals** across 9 target languages (Italian, Spanish, German, Portuguese, Armenian, Georgian, Tatar, Bashkir, and Chuvash).

---

## 1. Architectural Separation: Grammar vs. Vocabulary Manuals

COSYlanguages enforces a strict structural separation between learning resources:
1. **Grammar Manuals** (e.g. `grammatica-italiana/`, `grammatika-russkogo-yazyka/`): Focus purely on grammatical mechanics, rules, cases, declensions, verb tenses, word order, and morphological paradigms.
2. **Vocabulary Manuals** (e.g. `lessico-italiano/`, `leksika-russkogo-yazyka/`): Focus on thematic vocabulary acquisition, CEFR A0–A1 word fields, interactive flashcards, search filtering, and contextual usage examples.

---

## 2. Directory Taxonomy & Native Naming Conventions

All vocabulary manuals are **100% monolingual**, utilizing native transliterated directory paths and native titles:

| Language | Code | Native Directory Path | Native Manual Title | Native Module Term |
|:---|:---|:---|:---|:---|
| **Italian** | `it` | `lessico-italiano/` | Lessico italiano (A0–A1) | Modulo |
| **Spanish** | `es` | `vocabulario-espanol/` | Vocabulario español (A0–A1) | Módulo |
| **German** | `de` | `deutscher-wortschatz/` | Deutscher Wortschatz (A0–A1) | Modul |
| **Portuguese** | `pt` | `vocabulario-portugues/` | Vocabulário português (A0–A1) | Módulo |
| **Tatar** | `tt` | `tatar-teli-leksikasy/` | Татар теле лексикасы (A0–A1) | Бүлек |
| **Bashkir** | `ba` | `bashqort-tele-leksikahy/` | Башҡорт теле лексикаһы (A0–A1) | Бүлек |
| **Chuvash** | `cv` | `chavash-leksiki/` | Чăваш лексики (A0–A1) | Пайлăк |
| **Armenian** | `hy` | `hayots-lezvi-barapashar/` | Հայոց լեզվի բառապաշար (A0–A1) | Մաս |
| **Georgian** | `ka` | `qartuli-leqsika/` | ქართული ლექსიკა (A0–A1) | ნაწილი |

---

## 3. Standard Vocabulary Manual Directory Structure

```
<native-vocab-directory>/
├── assets/
│   ├── style.css         # High-contrast card styling, flashcard CSS, and print rules
│   └── app.js            # Real-time search filtering, flashcard flip engine, quiz handlers
├── topics/               # Monolingual topic HTML pages (e.g. la-famiglia.html, die-familie.html)
├── modulo-1.html / bulek-1.html  # Module/Section Hubs
├── ...
└── index.html            # Vocabulary manual home & interactive search hero
```

---

## 4. Key Interactive Components in Vocabulary Manuals

* **Interactive Flashcards (`.flashcard`)**: Front side displays term + gender/part of speech badge; back side displays definition and example sentence.
* **Real-time Search Filter (`#vocab-search`)**: Live text filtering across all vocabulary cards on module pages.
* **Skill Checklists (`cosy-check-*`)**: LocalStorage-persisted self-check for active vocabulary mastery.
* **Diagnostic Quizzes (`.quiz-panel`)**: Multiple-choice vocabulary retention checks with immediate diagnostic feedback.

---

## 5. Automated Generator Pipeline

Vocabulary manuals are generated programmatically using `scripts/build_monolingual_vocab_manuals.py` to guarantee 100% schema compliance, valid relative navigation links, and seamless integration with COSYlanguages practice tools.

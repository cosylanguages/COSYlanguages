# COSYlanguages — Expansion Roadmap & Architecture for Interactive Grammar Manuals

This document outlines the strategic roadmap, architectural specification, directory taxonomy, and pedagogical guidelines for expanding COSYlanguages' suite of interactive web edition grammar manuals across target languages (Italian, Spanish, German, Portuguese, Armenian, Georgian, Tatar, Bashkir, and Chuvash).

---

## 1. Executive Summary & Vision

COSYlanguages currently maintains three flagship interactive web edition A0–A1 grammar manuals:
1. **English Grammar Manual** (`grammar/`): 42 topic pages, 4 structural parts, interactive sentence builder, skill checklists, and data-driven quiz panels.
2. **French Grammar Manual** (`grammaire-francaise/`): 5 domain hubs, tense timelines, color-coded grammar roles, and mistake flip cards.
3. **Russian Grammar Manual** (`grammatika-russkogo-yazyka/`): 58 topic pages across 8 section hubs (`chast-0` to `bonus-a2`), generated programmatically via standalone build scripts.

Expanding this interactive manual architecture to **Italian, Spanish, German, Portuguese, Armenian, Georgian, Tatar, Bashkir, and Chuvash** will provide complete coverage for both core European learning tracks and rich Eurasian/Caucasian regional languages.

---

## 2. Strategic Language Tiering & Phased Rollout

To ensure high pedagogical quality and seamless integration with existing practice engines (`js/core/linguistics.js`, `practice/`), manual creation is structured into three prioritized tiers:

### Tier 1: Active & Major International Languages
*High student demand, immediate alignment with practice hub engines, and existing curriculum resources.*

* **Italian (`it`) — `grammatica-italiana/`**
  * Focus: Gender rules, article-noun contraction (`del`, `nella`), passatocombinato vs imperfetto, modal verbs (`dovere`, `potere`, `volere`), and auxiliary selection (`essere` vs `avere`).
* **Spanish (`es`) — `gramatica-espanola/`**
  * Focus: Gender patterns, `ser` vs `estar`, `por` vs `para`, regular vs irregular preterite/imperfect, and direct/indirect object pronoun placement.
* **German (`de`) — `deutsche-grammatik/`**
  * Focus: Four cases (Nominativ, Akkusativ, Dativ, Genitiv), three grammatical genders (`der`, `die`, `das`), verb-second (V2) word order, separable verbs, and modal verbs.
* **Portuguese (`pt`) — `gramatica-portuguesa/`**
  * Focus: `ser` vs `estar`, contraction of prepositions with articles (`do`, `na`, `pelo`), past tenses (Pretérito Perfeito vs Imperfeito), and personal infinitive concepts.

### Tier 2: Caucasian & Regional Eurasian Languages
*Rich morphological complexity, unique scripts, and distinct grammatical case systems.*

* **Armenian (`hy`) — `hayots-lezi-kerakanutyun/` (or `armenian-grammar/`)**
  * Focus: Eastern Armenian alphabet & phonology, 7 noun cases, postpositions, agglutinative verb suffixation, and definite article `-ը / -ն`.
* **Georgian (`ka`) — `kartuli-gramatika/` (or `georgian-grammar/`)**
  * Focus: Mkhedruli script, split ergativity in Aorist series, 7 noun cases, screeves (verb tenses), and polypersonal verb agreement.

### Tier 3: Turkic Regional Languages
*Agglutinative structures, vowel harmony rules, and zero-gender morphological systems.*

* **Tatar (`tt`) — `tatar-tel-grammatikasy/` (or `tatar-grammar/`)**
  * Focus: Vowel harmony (front vs back), 6 noun cases, agglutinative possessive suffixes (`-ым/-ем`), present/past continuous forms, and postpositional syntax.
* **Bashkir (`ba`) — `bashkort-tele-grammatikahy/` (or `bashkir-grammar/`)**
  * Focus: Consonant assimilation rules, vowel harmony, 6 cases, verb conjugation suffixes, and modal particles (`кәрәк`, `тееш`).
* **Chuvash (`cv`) — `chuvash-grammar/`**
  * Focus: Distinct Oghur Turkic phonology/script, agglutinative case system (8 cases including Comitative and Abessive), vowel harmony, and verb negation patterns.

---

## 3. Standard Manual Directory Taxonomy & Naming Conventions

Every new manual will follow the standardized self-contained architectural pattern established by `grammar/`, `grammaire-francaise/`, and `grammatika-russkogo-yazyka/`:

```
<manual-directory>/
├── assets/
│   ├── style.css         # Unified CSS variables (--role-subject, --role-verb, etc.) & print rules
│   └── app.js            # Sentence builder engine, checklist persistence, quiz handlers
├── topics/               # Individual topic HTML pages (e.g., topic-01-gender.html)
├── section-1.html        # Category/Section Hubs
├── section-2.html
├── ...
└── index.html            # Manual home & visual sentence builder hero
```

### Approved Directory Names:
- Italian: `grammatica-italiana/`
- Spanish: `gramatica-espanola/`
- German: `deutsche-grammatik/`
- Portuguese: `gramatica-portuguesa/`
- Armenian: `armenian-grammar/` (or `hayots-lezi-kerakanutyun/`)
- Georgian: `georgian-grammar/` (or `kartuli-gramatika/`)
- Tatar: `tatar-grammar/` (or `tatar-tel-grammatikasy/`)
- Bashkir: `bashkir-grammar/` (or `bashkort-tele-grammatikahy/`)
- Chuvash: `chuvash-grammar/`

---

## 4. Universal Pedagogical & Structural Requirements (`GRAMMAR_STANDARD.md`)

Every page across all new manuals must adhere to the **14-point visual rhythm** and **4 core questions**:

### The 4 Core Questions per Topic Page:
1. **What is it?** (Clear, large identification without jargon)
2. **When do I use it?** (Practical usage scenario and context)
3. **How do I build it?** (Color-coded CSS structural diagrams and formulas)
4. **What mistakes do beginners make?** (Interactive click-to-reveal mistake flip cards `.mflip`)

### Semantic Role Color Palette:
- **Subject / Topic**: Blue (`--role-subject`, `#3562e0`)
- **Verb / Predicate**: Green (`--role-verb`, `#1c8f56`)
- **Direct Object / Complement**: Orange (`--role-object`, `#c9740a`)
- **Endings / Affixes**: Purple (`--role-ending`, `#7c4fd6`)
- **Adjectives / Modifiers**: Yellow (`--role-adjective`, `#d99b00`)
- **Error / Pitfall**: Red (`--role-error`, `#a3195b`)

### Interactive Components:
- **`🧠 Think like [Language]` Card**: Explaining the intrinsic logic of the target language system (e.g. *Think like German V2 word order*, *Think like Turkic vowel harmony*).
- **`👀 Notice` Guided Observation**: Inductive pattern discovery questions.
- **`cosy-check-*` Checklist**: LocalStorage-persisted self-evaluation of unlocked practical skills.
- **`.quiz-panel`**: Data-driven multiple-choice quiz with immediate diagnostic feedback.

---

## 5. Automated Build Pipeline & Generator Strategy

To maintain complete consistency and zero dead links across 50+ topic pages per manual, new manuals will be generated programmatically using dedicated python generator scripts in `scripts/`:

- `scripts/build_italian_grammar_manual.py` ➔ generates `grammatica-italiana/`
- `scripts/build_spanish_grammar_manual.py` ➔ generates `gramatica-espanola/`
- `scripts/build_german_grammar_manual.py` ➔ generates `deutsche-grammatik/`
- `scripts/build_portuguese_grammar_manual.py` ➔ generates `gramatica-portuguesa/`
- `scripts/build_turkic_grammar_manuals.py` ➔ generates `tatar-grammar/`, `bashkir-grammar/`, `chuvash-grammar/`
- `scripts/build_caucasian_grammar_manuals.py` ➔ generates `armenian-grammar/`, `georgian-grammar/`

Each build script compiles JSON topic manifests into validated HTML5 pages featuring navigation breadcrumbs, prev/next topic pagers, accessibility attributes, and canonical footers.

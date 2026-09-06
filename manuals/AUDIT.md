# COSYlanguages Grammar & Vocabulary Manuals Audit Report

**Date**: May 2024
**Scope**: All subdirectories and files in `manuals/`
**Purpose**: Comprehensive inventory and structural audit to scope follow-up curriculum and reference engine integrations.

---

## Executive Summary & Scope Overview

The `manuals/` root folder contains **948 files** (851 HTML topic pages and module stubs, 4 Markdown documentation files, 44 shared/local JavaScript files, and 44 shared/local CSS stylesheets) covering 14 target languages (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `hy`, `ka`, `tt`, `ba`, `br`, `cv`).

### Key Findings
1. **Language Directory Structure**:
   - **English (`en`)**: Largest manual collection (598 HTML files) spanning levels A1, A2, B1, B2, C1, and C2 across Grammar and Vocabulary subdirectories.
   - **French (`fr`), Italian (`it`), Spanish (`es`), Portuguese (`pt`)**: Structured A1–A2 grammar and A2 vocabulary modules (~22–26 files each).
   - **Tatar (`tt`)**: Comprehensive A1–A2 grammar and A1–A2 vocabulary manuals (70 files) formatted in sections (`bulek-1` through `bulek-6`).
   - **Minority/Regional Languages (`ba`, `br`, `cv`, `hy`, `ka`)**: Structured A2 grammar and vocabulary topic files (8–9 files each).
   - **Russian (`ru`), Greek (`el`)**: A1/A2 grammar topic frameworks (4–6 files each).
   - **German (`de`)**: Root index and redirect stubs (1 file in `de/`, root HTML stubs).
   - **Root Stubs**: 33 HTML legacy redirect files at `manuals/` root (`english-a0-a1.html`, `francaise-a0-a1.html`, etc.) redirecting users to consolidated language portal indices (`manuals/{iso}/index.html`).

2. **Irregular Verb Organization**:
   - **English (`en`)**: Irregular verbs are explicitly covered in `manuals/en/grammar/a1/topics/irregular-verbs.html` and `past-simple-irregular.html`. Verbs are **grouped by pattern** rather than listed alphabetically (Group 1: no change; Group 2: vowel change only; Group 3: add -t/-d; Group 4: highly irregular).
   - **French (`fr`)**, **Italian (`it`)**, **Spanish (`es`)**: Irregular verbs in past/future/subjunctive tenses are grouped logically by stem-changes, irregular auxiliary choices (*être/avoir*, *essere/avere*), or mnemonic clusters (e.g. *DR & MRS VANDERTRAMPP* in French; *ser/estar/ir* in Spanish).
   - **Russian (`ru`)**, **Greek (`el`)**: Present verb conjugation classes and irregular stem changes are introduced topically.

3. **Internal Structural Consistency**:
   - Highly consistent modern structural layout across A1–C2 topic pages:
     - **Meaning & Context**: Lead-in / "What do you notice?" / "Why this matters" banner.
     - **Form & Explanation**: Clear rules, structural formulas, and "Think like a native speaker" cognitive notes.
     - **Examples**: Color-coded syntax highlights and contextual sentence blocks.
     - **Practice**: Embedded interactive JS diagnostic quizzes ("Quick check" / "Can you already use this?") on every topic page.

4. **Ecosystem Overlap & Duplication**:
   - Overlap exists between `manuals/` HTML topic pages and `apps/` standalone reference tools (`COSYtools` reference engines like `fr-conjugeur`, `it-reggenza`, `en-verb-prep`, `el-klisi-rimaton`).
   - `manuals/` acts as the pedagogical, explanation-driven textbook interface, while `apps/` provides standalone interactive lookup and drill tools.

---

## Inventory by Language

| Language Code | Language Name | Subdirectory Paths | File Count (HTML) | Example Sentences | Usage Notes | Practice / Quiz | Cross-References |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **en** | English | `manuals/en/grammar/{a1,a2,b1,b2,c1,c2}/`<br>`manuals/en/vocabulary/{a1,a2,b1,b2,c1,c2}/` | 598 | Yes (Extensive) | Yes | Yes (Interactive JS Quizzes) | Yes (`grammar/`, `curriculum/`) |
| **fr** | French | `manuals/fr/grammar/{a1,a2}/`<br>`manuals/fr/vocabulary/a2/` | 25 | Yes | Yes | Yes | Yes |
| **it** | Italian | `manuals/it/grammar/{a1,a2}/`<br>`manuals/it/vocabulary/a2/` | 26 | Yes | Yes | Yes | Yes |
| **es** | Spanish | `manuals/es/grammar/{a1,a2}/`<br>`manuals/es/vocabulary/a2/` | 22 | Yes | Yes | Yes | Yes |
| **pt** | Portuguese | `manuals/pt/grammar/{a1,a2}/`<br>`manuals/pt/vocabulary/a2/` | 22 | Yes | Yes | Yes | Yes |
| **tt** | Tatar | `manuals/tt/grammar/`<br>`manuals/tt/vocabulary/` | 70 | Yes | Yes | Yes | Yes |
| **ru** | Russian | `manuals/ru/grammar/a1/` | 6 | Yes | Yes | Yes | Yes |
| **el** | Greek | `manuals/el/grammar/a1/` | 4 | Yes | Yes | Yes | Yes |
| **hy** | Armenian | `manuals/hy/grammar/a2/`<br>`manuals/hy/vocabulary/a2/` | 9 | Yes | Yes | Yes | Yes |
| **ka** | Georgian | `manuals/ka/grammar/a2/`<br>`manuals/ka/vocabulary/a2/` | 9 | Yes | Yes | Yes | Yes |
| **ba** | Bashkir | `manuals/ba/grammar/a2/`<br>`manuals/ba/vocabulary/a2/` | 9 | Yes | Yes | Yes | Yes |
| **br** | Breton | `manuals/br/grammar/a2/`<br>`manuals/br/vocabulary/a2/` | 8 | Yes | Yes | Yes | Yes |
| **cv** | Chuvash | `manuals/cv/grammar/a2/`<br>`manuals/cv/vocabulary/a2/` | 9 | Yes | Yes | Yes | Yes |
| **de** | German | `manuals/de/` | 1 | Yes | Yes | Yes | Yes |

---

## Detailed Audit Questions & Findings

### 1. Manual Components Audit
Every topic HTML page across the A1–C2 manuals contains:
- **Example Sentences**: Highlighted with syntax classes (`.example-box`, `.example`, color-coded HTML `<span>` tags).
- **Usage Notes**: Formatted in callout blocks ("💡 Memory trick", "🧠 Think like a native speaker", "⚠️ Common Pitfalls").
- **Comprehension-Check Questions**: Embedded interactive JavaScript quiz widgets (`<div class="quick-check">` or `<div class="quiz-container">`) providing instant feedback and explanations upon answer selection.
- **Cross-References**: Sticky topbar jump-links (`.sd-jump-link`) referencing modules, parts, and appendices.

### 2. Irregular Verb Coverage & Categorization
- **English**: Covered in `manuals/en/grammar/a1/topics/irregular-verbs.html` and `past-simple-irregular.html`. Rather than an unhelpful alphabetical list, irregular verbs are **grouped pattern-by-pattern**:
  - *Group 1*: No change at all (*cost-cost*, *cut-cut*, *hit-hit*)
  - *Group 2*: Vowel change only (*sing-sang*, *ring-rang*, *drive-drove*)
  - *Group 3*: Add *-t* or *-d* (*keep-kept*, *sleep-slept*, *sell-sold*)
  - *Group 4*: Highly irregular / unique forms (*be*, *go*, *do*)
- **French**: Covered in `manuals/fr/grammar/a2/topics/passe-compose-avoir-etre.html` and verb modules. Uses pedagogical pattern groupings (*DR & MRS VANDERTRAMPP* movement verbs for *être*; irregular past participles in *-u*, *-is*, *-it*).
- **Italian**: Covered in `manuals/it/grammar/a2/topics/passato-prossimo-essere-avere.html` using auxiliary selection rules and irregular past participle stem patterns.
- **Spanish**: Covered in `manuals/es/grammar/a2/topics/preterito-indefinido-y-perfecto.html` grouped by stem-changing patterns (*e->ie*, *o->ue*, *e->i*).

### 3. Internal Structure Consistency
Across all modern manuals, topic files follow a uniform 4-part pedagogical sequence:
1. **Meaning & Context**: Visual lead-in, real-world communicative goals.
2. **Form & Explanation**: Clear rules, structural formulas, tables.
3. **Examples**: Contextualized example sentences with key elements bolded or color-coded.
4. **Practice**: Embedded diagnostic quizzes and quick checks for instant self-assessment.

### 4. Overlap & Duplication with COSYtools (`apps/`)
- **Manuals (`manuals/`)**: Offer explanatory lesson pages, grammar rules, native speaker mental models, and structured reading paths.
- **Tools (`apps/` / `COSYtools`)**: Offer standalone, accountless reference lookup engines (e.g. `fr-conjugeur`, `it-reggenza`, `el-klisi-rimaton`, `en-verb-prep`).
- **Recommendation for Follow-Up Work**: Link manual verb and grammar topic pages directly to corresponding `COSYtools` reference engines via explicit callout banners.

---

## Clarity Notes & Skyeng-Style Comparative Analysis

Skyeng's language explanation methodology emphasizes **concise, example-first presentation, visual scannability, and minimal dense prose**. Below is an evaluation comparing representative existing manuals against these principles with concrete before/after suggestions for human review.

### 1. English A1 Grammar Manual (`manuals/en/grammar/a1/topics/to-be.html`)
- **Current State**:
  - Contains ~720 words of text.
  - Starts with introductory banners ("👀 What do you notice?", "★ Why this matters") followed by explanatory rule paragraphs before introducing full sentence examples in tabular form.
- **Scannability / Dense Prose Assessment**: Moderate prose density. Explanations are broken up into card boxes, but the user must read through introductory meta-text before seeing concrete usage examples in context.
- **Skyeng-Style Recommendation**:
  - *Before*: Banner explaining abstract grammatical roles -> 150 words on pronoun matching -> Example table.
  - *After*: Lead immediately with 2–3 visual, color-coded example sentences (*"I am a teacher. She is happy."*), followed by a 2-line summary formula box `[Subject + am/is/are]`, eliminating ~100 words of introductory meta-prose.

### 2. French A2 Grammar Manual (`manuals/fr/grammar/a2/topics/passe-compose-avoir-etre.html`)
- **Current State**:
  - Contains ~520 words of text.
  - Leads with a communication objective banner, summary rule, and table comparing *avoir* vs *être*, followed by the "Maison des 14 verbes" diagram/list and mnemonic callouts (*DR & MRS VANDERTRAMPP*).
- **Scannability / Dense Prose Assessment**: Highly scannable. Bullet points, color-coded examples, and mnemonic boxes effectively reduce block prose.
- **Skyeng-Style Recommendation**:
  - *Before*: Outcome banner -> Summary paragraph -> 14-verb list -> Mnemonic callout.
  - *After*: Convert the 14-verb list into a 2-column visual grid showing side-by-side contrast pairs (*"Elle est arrivée (état)"* vs *"Elle a mangé (action)"*) before explaining the underlying grammar rule.

### 3. Russian A1 Grammar Manual (`manuals/ru/grammar/a1/topics/to-be.html`)
- **Current State**:
  - Contains ~780 words of text.
  - Features substantial introductory prose explaining the zero-copula in present tense Russian ("быть") and comparing present zero-verb structures with past/future forms.
- **Scannability / Dense Prose Assessment**: High prose density. Requires learners to read several paragraphs of linguistic context before seeing simple present tense examples.
- **Skyeng-Style Recommendation**:
  - *Before*: ~200 words of prose explaining zero-copula syntax -> Rule formula -> Examples.
  - *After*: Lead with a 2-row side-by-side comparison card (*English: "I am a student" ➔ Russian: "Я студент" [No verb!]*), reducing preamble prose by 80% and making zero-copula syntax immediately intuitive.

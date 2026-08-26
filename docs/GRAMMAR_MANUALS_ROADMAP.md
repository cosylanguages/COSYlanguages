# COSYlanguages — Expansion Roadmap & Architecture for Monolingual Interactive Grammar Manuals

This document outlines the strategic roadmap, architectural specification, directory taxonomy, and pedagogical guidelines for expanding COSYlanguages' suite of **monolingual interactive web edition grammar manuals** across 9 target languages (Italian, Spanish, German, Portuguese, Armenian, Georgian, Tatar, Bashkir, and Chuvash).

---

## 1. Monolingual Design Imperative

Following the pattern established by **`grammaire-francaise/`** (French) and **`grammatika-russkogo-yazyka/`** (Russian), all COSYlanguages grammar manuals are **100% monolingual**.

- **Language of Instruction**: Every explanation, visual diagram title, button label, self-evaluation checklist item, error callout, and quiz question is written in the native target language.
- **Title Nomenclature & URLs**: Manual directories and page titles use the authentic native name of the grammar manual in that language (e.g., `grammatica-italiana/`, `gramatica-espanola/`, `tatar-teli-grammatikasy/`), matching the pattern of `grammatika-russkogo-yazyka/`.

---

## 2. Directory Taxonomy & Native Naming Conventions

The approved monolingual directory names and native titles for all 9 target manuals are:

| Language | Code | Native Directory Path | Native Manual Title | Native Section / Part Term |
|:---|:---|:---|:---|:---|
| **Italian** | `it` | `grammatica-italiana/` | Grammatica italiana | Capitolo / Parte |
| **Spanish** | `es` | `gramatica-espanola/` | Gramática española | Capítulo / Parte |
| **German** | `de` | `deutsche-grammatik/` | Deutsche Grammatik | Kapitel / Teil |
| **Portuguese** | `pt` | `gramatica-portuguesa/` | Gramática portuguesa | Capítulo / Parte |
| **Tatar** | `tt` | `tatar-teli-grammatikasy/` | Татар теле грамматикасы | Бүлек |
| **Bashkir** | `ba` | `bashqort-tele-grammatikahy/` | Башҡорт теле грамматикаһы | Бүлек |
| **Chuvash** | `cv` | `chavash-grammatika/` | Чăваш грамматики | Пайлăк / Пай |
| **Armenian** | `hy` | `hayots-lezvi-kerakanutyun/` | Հայոց լեզվի քերականություն | Մաս |
| **Georgian** | `ka` | `qartuli-gramatika/` | ქართული ენა · გრამატიკა | ნაწილი |

---

## 3. Standard Manual Directory Structure

Every manual follows a self-contained architectural pattern:

```
<native-manual-directory>/
├── assets/
│   ├── style.css         # Role color CSS variables (--role-subject, --role-verb, etc.) & print rules
│   └── app.js            # Monolingual sentence builder engine, checklist persistence, quiz handlers
├── topics/               # Monolingual topic HTML pages (e.g. alfavit.html, il-nome.html)
├── chast-0.html / parte-1.html / kapitel-1.html  # Section Hubs
├── ...
└── index.html            # Monolingual index & interactive sentence builder hero
```

---

## 4. Universal Pedagogical Requirements (`GRAMMAR_STANDARD.md`)

Every page across all 9 monolingual manuals adheres to the **14-point visual rhythm** and **4 core questions**:

1. **What is it?** (Clear identification in target language)
2. **When do I use it?** (Practical usage scenario in target language)
3. **How do I build it?** (Color-coded CSS structural diagrams and formulas)
4. **What mistakes do beginners make?** (Interactive click-to-reveal mistake flip cards `.mflip`)

### Semantic Role Color Palette:
- **Subject / Topic**: Blue (`--role-subject`, `#3562e0`)
- **Verb / Predicate**: Green (`--role-verb`, `#1c8f56`)
- **Direct Object / Complement**: Orange (`--role-object`, `#c9740a`)
- **Endings / Affixes**: Purple (`--role-ending`, `#7c4fd6`)
- **Adjectives / Modifiers**: Yellow (`--role-adjective`, `#d99b00`)
- **Error / Pitfall**: Red (`--role-error`, `#a3195b`)

---

## 5. Automated Generator Architecture

All manuals are compiled programmatically using `scripts/build_monolingual_grammar_manuals.py` to ensure complete schema compliance, cross-topic breadcrumbs, prev/next topic pagers, accessibility attributes, and canonical footers.

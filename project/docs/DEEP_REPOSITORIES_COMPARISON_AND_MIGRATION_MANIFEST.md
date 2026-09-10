# COSY Ecosystem Deep Repository Comparison, Audit & Migration Manifest

This document presents a meticulous analysis, comparison, itemized file manifest, and multi-stage migration roadmap across all **6 repositories** in the COSY languages ecosystem.

---

## 1. Multi-Repository Ecosystem Overview & Boundaries

| Repository | Purpose & Access Model | Host URL | Primary Contents & Directories | Boundary & Duplication Rules |
|---|---|---|---|---|
| **1. `COSYlanguages`** | **Main Public Portal & Gateway**<br>Accessible to all potential clients, teachers, learners. | `https://cosylanguages.github.io/COSYlanguages/` | • `index.html` (Landing page)<br>• `placement-quiz.html` (Level diagnostic)<br>• `practice/` (Free practice hub)<br>• `languages/` (Public portal roadmaps)<br>• `apps/premium-courses/` (Syllabus course tracks)<br>• `apps/print-studio/` & `print-*.html` (Printables)<br>• `blog/` (Pedagogical articles & Top 100)<br>• `about/` & `privacy.html`<br>• `classroom-sync.html` (Teacher presentation tool) | **Central Orchestrator.** Contains links to all companion repos. Must NOT store standalone minigames (belong in `COSYgames`), standalone reference micro-apps (belong in `COSYtools`), or event session decks (belong in `COSYevents`). |
| **2. `COSYmanuals`** | **Web Textbooks & Detailed Curriculums**<br>Restricted access via direct links for contracted teachers/students. | `https://cosylanguages.github.io/COSYmanuals/` | • `manuals/` (Interactive HTML textbooks A0–C2 across 13 languages)<br>• `curriculum/` (JSON CEFR curriculum progressions)<br>• `vocabulary/` (Thematic JS/JSON vocabulary pools)<br>• `reference-grammar/` (Machine-readable grammar schemas)<br>• `communication/` (Functional communication datasets)<br>• `wordlists/` (Master wordlists) | **Restricted Content Repository.** Contains all textbook manuals and raw curriculum data. Every topic page must embed practice buttons directing students to practice modes in `COSYlanguages/practice/`, `COSYgames`, `COSYworld`, and `COSYtools`. |
| **3. `COSYevents`** | **Speaking Clubs & Events**<br>Free access for all users. | `https://cosylanguages.github.io/COSYevents/` | • `sessions/` (Speaking club session guides)<br>• `clubs/` (Science, Mind Matters, Debatable, Life, Quotes)<br>• `nights/` (Cinema, Karaoke, Game Evenings, Long Reads)<br>• `templates/events/` (Session templates) | **Public Events Platform.** Accessible directly via the "Events" nav button in `COSYlanguages`. Must feature a top navigation bar with a return link back to `COSYlanguages`. |
| **4. `COSYworld`** | **Independent Self-Study Game**<br>Public access. | `https://cosylanguages.github.io/COSYworld/` | • Open-world 2D/3D visual learning RPG environment<br>• Scene match interactive spatial rooms (`apartment`, `city`, `market`, `routine_calendar`) | **Independent Casual Game.** Completely separate from `COSYmanuals` and paid courses. Focuses purely on self-study exploratory learning rather than formal syllabus progression. |
| **5. `COSYgames`** | **Language Practice Games**<br>Public access for self-study and online/offline classes. | `https://cosylanguages.github.io/COSYgames/` | • `COSYgames/` (22+ minigames: Crossword, Battle of Wits, Fluency Flow, Action Hero, Emoji Odyssey, Hot Seat, etc.)<br>• `games/` symlink | **Classroom & Self-Study Games Hub.** Used by teachers during live lessons and students for self-study. Links back to `COSYlanguages` main hub. |
| **6. `COSYtools`** | **Linguistic Encyclopedia & Reference Tools**<br>Public access. | `https://cosylanguages.github.io/COSYtools/` | • `apps/fr-conjugeur/` (French conjugator)<br>• `apps/fr-genre/` (French noun gender)<br>• `apps/fr-regime/` (French prepositional regime)<br>• `apps/it-coniugatore/` (Italian conjugator)<br>• `apps/it-genere/` (Italian noun gender)<br>• `apps/it-reggenza/` (Italian verb government)<br>• `apps/ru-spryazhenie/` (Russian conjugator)<br>• `apps/ru-rod-padezhi/` (Russian gender & cases)<br>• `apps/el-klisi-rimaton/` (Greek conjugator)<br>• `apps/el-genos-ptoseis/` (Greek gender & cases)<br>• `apps/el-syntaxi/` (Greek syntax & cases)<br>• `apps/en-verb-prep/` (English verb prepositions)<br>• COSY Passport progress backup & restore engine | **Linguistic Encyclopedia & Reference Tool.** Allows students to verify noun genders, case declensions, verb conjugations, and prepositional rules, with built-in Leitner SRS practice. |

---

## 2. Itemized File & Directory Separation Audit

### 2.1. Files Owned by `COSYlanguages`
- `index.html`: Public portal home.
- `placement-quiz.html`: Accountless level assessment.
- `practice/`: Free practice hub and cognitive immersion accelerator.
- `languages/`: Public language portals and level roadmaps.
- `apps/premium-courses/`: Structured syllabus courses across 6 tracks (General, Spoken, Exam, Travelling, Professional, Relocation).
- `apps/print-studio/` & `print-*.html`: Pedagogical printables and zine generator.
- `blog/`: Public pedagogical articles and Top 100 frequency lists.
- `about/`, `privacy.html`, `404.html`: General portal info.
- `classroom-sync.html`: Teacher screen sync utility.
- `css/`, `js/`, `images/`, `sounds/`, `data/`: Main portal assets and shared UI engines.

### 2.2. Files Owned by `COSYmanuals`
- `manuals/`: All interactive HTML textbooks (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `hy`, `ka`, `tt`, `ba`, `br`, `cv`).
- `curriculum/`: Structured CEFR JSON lesson datasets.
- `vocabulary/`: Structured JSON/JS vocabulary datasets.
- `reference-grammar/`: Machine-readable grammar topic schemas.
- `communication/`: Functional communication topic specifications.
- `grammar/`: Root grammar template and schemas.
- `wordlists/`: Master lexical inventory files.

### 2.3. Files Owned by `COSYevents`
- `sessions/` & `events/`: Legacy and active speaking club session decks.
- `apps/premium-events/` & `templates/events/`: Cinema club, karaoke, and event night guides.

### 2.4. Files Owned by `COSYgames`
- `COSYgames/` & `games/`: Minigame suite drivers (`cosy_crossword`, `battle_of_wits`, `fluency_flow`, `action_hero`, `hot_seat`, `emoji_odyssey`, `hundred_questions`, `story_chain`, etc.).

### 2.5. Files Owned by `COSYtools`
- `apps/fr-conjugeur/`, `apps/fr-genre/`, `apps/fr-regime/`, `apps/it-coniugatore/`, `apps/it-genere/`, `apps/it-reggenza/`, `apps/ru-spryazhenie/`, `apps/ru-rod-padezhi/`, `apps/el-klisi-rimaton/`, `apps/el-genos-ptoseis/`, `apps/el-syntaxi/`, `apps/en-verb-prep/`.

---

## 3. Detailed Cross-Repository Linkage Specification

### 3.1. Main Header Navigation in `COSYlanguages`
```html
<nav id="cosy-nav">
  <a href="https://cosylanguages.github.io/COSYlanguages/">Home 🏡</a>
  <a href="https://cosylanguages.github.io/COSYlanguages/practice/">Practice 💡</a>
  <a href="https://cosylanguages.github.io/COSYgames/">Games 🎮</a>
  <a href="https://cosylanguages.github.io/COSYevents/">Events 🎉</a>
  <a href="https://cosylanguages.github.io/COSYtools/">Tools &amp; Reference 🛠️</a>
</nav>
```

### 3.2. Manual Practice Button Standard in `COSYmanuals`
Every topic page in `COSYmanuals` includes interactive practice trigger chips:
- `💡 Free Practice`: `https://cosylanguages.github.io/COSYlanguages/practice/?topic={topic_id}`
- `🎮 Practice Minigame`: `https://cosylanguages.github.io/COSYgames/?topic={topic_id}`
- `🗺️ Open World RPG`: `https://cosylanguages.github.io/COSYworld/`
- `🛠️ Reference Encyclopedia`: `https://cosylanguages.github.io/COSYtools/`

### 3.3. Companion Repository Return Navigation
Every page in `COSYevents`, `COSYgames`, `COSYtools`, and `COSYworld` contains a top navigation link pointing back to `https://cosylanguages.github.io/COSYlanguages/`.

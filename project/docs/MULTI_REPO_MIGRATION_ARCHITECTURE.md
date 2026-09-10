# COSY Ecosystem Multi-Repository Architecture & Migration Specification

This document provides the definitive architectural specification, boundary rules, and itemized file manifests for the multi-repository migration across the **COSY** platform ecosystem.

---

## 1. Executive Summary & Ecosystem Vision

The COSY ecosystem is divided into **6 specialized GitHub repositories** under the `cosylanguages` organization. Each repository serves a clear functional role, target audience, and access policy:

1. **`COSYlanguages` (https://github.com/cosylanguages/COSYlanguages)**: The primary public portal, landing page, placement quiz, structured courses, and practice hub.
2. **`COSYmanuals` (https://github.com/cosylanguages/COSYmanuals)**: Web textbooks, detailed curriculums, and linguistic datasets. Restricted access for contracted teachers/students via direct links.
3. **`COSYevents` (https://github.com/cosylanguages/COSYevents)**: Public events, speaking clubs, multimedia nights, and group conversation session decks.
4. **`COSYworld` (https://github.com/cosylanguages/COSYworld)**: Self-study open-world RPG adventure game, spatial scene maps, and visual learning environments.
5. **`COSYgames` (https://github.com/cosylanguages/COSYgames)**: Interactive language practice games hub and 22+ minigame drivers for classrooms and self-study.
6. **`COSYtools` (https://github.com/cosylanguages/COSYtools)**: Offline-first reference encyclopedia (verb conjugators, gender trainers, prepositional regimes, case declensions) and COSY Passport progress backup/sync.

---

## 2. Comprehensive Repository Separation Matrix

| Repository Name | Target Repository URL | Functional Scope & Purpose | Audience & Access Level | Primary Directory Manifest |
|---|---|---|---|---|
| **`COSYlanguages`** | `https://github.com/cosylanguages/COSYlanguages` | Central entry gateway, global placement quiz, structured courses, practice hub, pedagogical blog, print studio, and multi-product orchestrator. | Public (All visitors, potential clients, students, teachers) | • `index.html`<br>• `placement-quiz.html`<br>• `practice/`<br>• `languages/`<br>• `apps/premium-courses/`<br>• `apps/print-studio/`<br>• `blog/`<br>• `about/`<br>• `privacy.html`<br>• `classroom-sync.html`<br>• `css/`, `js/`, `images/`, `sounds/`, `data/` |
| **`COSYmanuals`** | `https://github.com/cosylanguages/COSYmanuals` | Complete interactive HTML textbooks, CEFR curriculums, marathons, and structured vocabulary/grammar datasets. | Restricted (Contracted students & teachers via direct links) | • `manuals/`<br>• `curriculum/`<br>• `vocabulary/`<br>• `reference-grammar/`<br>• `communication/`<br>• `grammar/`<br>• `wordlists/`<br>• `js/fr-marathon-engine.js` |
| **`COSYevents`** | `https://github.com/cosylanguages/COSYevents` | Public speaking clubs, multimedia event nights, cinema club, karaoke, and session guides. | Public Free Access | • `sessions/`<br>• `clubs/`<br>• `nights/`<br>• `templates/events/`<br>• `css/events.css` |
| **`COSYworld`** | `https://github.com/cosylanguages/COSYworld` | Open-world RPG language adventure game and spatial scene match environments. | Public | • Standalone game engine<br>• `scene_match/` scenes & map drivers |
| **`COSYgames`** | `https://cosylanguages.github.io/COSYgames/` | 22+ interactive practice games for self-study and live teacher online/offline classroom use. | Public | • `COSYgames/` (Crossword, Battle of Wits, Fluency Flow, Emoji Odyssey, Hot Seat, etc.)<br>• `games/` symlink |
| **`COSYtools`** | `https://cosylanguages.github.io/COSYtools/` | Linguistic encyclopedia and reference tools (gender, cases, conjugations, prepositions). | Public | • `apps/fr-conjugeur/`<br>• `apps/fr-genre/`<br>• `apps/fr-regime/`<br>• `apps/it-coniugatore/`<br>• `apps/it-genere/`<br>• `apps/it-reggenza/`<br>• `apps/ru-spryazhenie/`<br>• `apps/ru-rod-padezhi/`<br>• `apps/el-klisi-rimaton/`<br>• `apps/el-genos-ptoseis/`<br>• `apps/el-syntaxi/`<br>• `apps/en-verb-prep/` |

---

## 3. Inter-Repository Cross-Linking Specifications

### 3.1. Navigation Header & Footer Links in `COSYlanguages`
All global headers and navigation components in `COSYlanguages` link outwards to sister repositories:
- **Events**: `https://cosylanguages.github.io/COSYevents/`
- **Games**: `https://cosylanguages.github.io/COSYgames/`
- **World**: `https://cosylanguages.github.io/COSYworld/`
- **Tools**: `https://cosylanguages.github.io/COSYtools/`

### 3.2. Manual Practice Button Interactivity in `COSYmanuals`
Textbooks and topic pages in `COSYmanuals` contain action buttons prompting students to practice what they learned:
- **Free Practice**: Links to `https://cosylanguages.github.io/COSYlanguages/practice/`
- **Interactive Games**: Links to `https://cosylanguages.github.io/COSYgames/`
- **Explore Open World**: Links to `https://cosylanguages.github.io/COSYworld/`
- **Linguistic Reference Tools**: Links to specific engines in `https://cosylanguages.github.io/COSYtools/`

### 3.3. Return Navigation in Companion Repositories
Every companion repository (`COSYevents`, `COSYgames`, `COSYworld`, `COSYtools`) provides a standard back-link in its navigation header pointing to the main portal:
- **Main Portal**: `https://cosylanguages.github.io/COSYlanguages/`

---

## 4. Verification and Migration Checklist

1. **No Content Duplication**: Confirm that standalone game drivers, event decks, and reference apps exist in their designated repositories and are linked rather than duplicated.
2. **Passport Progress Interchangeability**: Ensure `cosy-passport.json` remains the universal accountless progress backup across `COSYlanguages`, `COSYtools`, `COSYgames`, and `COSYmanuals`.
3. **URL Routing Integrity**: Validate that all external URLs use absolute HTTPS paths to `https://cosylanguages.github.io/<repo>/` to prevent broken relative paths across domain roots.

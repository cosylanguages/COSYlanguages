# COSYlanguages 🏡

Learn a language with teachers who *love* what they teach. COSYlanguages is a speaking-first language learning platform focusing on 1-to-1 online lessons and immersive practice tools.

## 🚀 Project Overview

COSYlanguages provides a comprehensive ecosystem for language learners, from absolute beginners to advanced speakers. The platform emphasizes the "no-translation principle," encouraging students to speak and think in their target language from day one.

## 📁 Folder Map

- `css/`: Styling for the main site and sub-apps.
- `curriculum/`: Structured learning paths and lesson data.
- `data/`: Backend-simulated data (e.g., `students.json`).
- `events/`: Immersive speaking clubs, cinema nights, and game events.
- `games/`: Interactive language games (Action Hero, Fluency Flow, etc.).
- `grammar/`: Grammar reference materials.
- `images/`: Static assets, including language flags and brand icons.
- `js/`: Core application logic.
  - `core/`: Unified engine, i18n system, and UI controllers.
  - `data/`: Language-specific configurations (translations, morphology, syntax).
  - `features/`: Specific feature implementations (practice engine, daily dose).
  - `games/`: Game-specific mechanics.
- `languages/`: Resource pages for each supported language.
- `portal/`: The central hub for Students, Teachers, and Admins.
- `practice/`: Daily practice tools and exercises.
- `scripts/`: Maintenance and data processing scripts.
- `tests/`: Playwright-based automated test suite.
- `vocabulary/`: Thematic vocabulary banks.

## 🛠️ How to Run Locally

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run a local server:**
   You can use any static file server. For example:
   ```bash
   # Using Node.js
   npx serve .
   ```
4. **Open in browser:**
   Navigate to `http://localhost:3000` (or the port provided by your server).

## 👥 User Roles

The platform operates under a "One URL, Three Realities" system managed by `js/core/engine.js`:

- **Free Visitor:** Access to general landing pages, free practice tools, and public games.
- **Student:** Access to a personalized roadmap, vocabulary notebooks, and homework (unlocked via a student code).
- **Teacher:** Access to student progress tracking, lesson notes, and teaching tools (unlocked via a teacher PIN).
- **Admin:** Full system oversight and content management (God Mode).

## 🌍 Languages & Status

| Code | Language | Status |
|------|----------|--------|
| EN | English | ✅ Active |
| FR | Français | ✅ Active |
| IT | Italiano | ✅ Active |
| RU | Русский | ✅ Active |
| EL | Ελληνικά | ✅ Active |
| ES | Español | ⏳ Coming Soon |
| DE | Deutsch | ⏳ Coming Soon |
| PT | Português | ⏳ Coming Soon |
| HY | Հայերեն | ⏳ Coming Soon |
| KA | ქართული | ⏳ Coming Soon |
| TT | Татарча | ⏳ Coming Soon |
| BA | Башҡортса | ⏳ Coming Soon |
| BR | Brezhoneg | ⏳ Coming Soon |

## 🌐 i18n System (The No-Translation Principle)

COSYlanguages uses a custom i18n system (`js/core/i18n.js`) that prioritizes immersion.
- **Zero Reliance on Translation:** Practice content and dashboards are served in the target language.
- **Visual Context:** Emojis and visual hints are used to convey meaning.
- **Localized UI:** Only essential UI strings (buttons, labels) are translated to the user's preferred interface language.

## 📋 Project Plan

This repository is currently undergoing a multi-stage modernization.
- [STAGE 0 — Hygiene & Documentation](https://github.com/cosylanguages/cosylanguages-website/blob/main/docs/PLAN.md)

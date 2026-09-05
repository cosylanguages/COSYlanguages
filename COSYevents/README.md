# COSYevents

Standalone conversational events, thematic speaking clubs, and interactive multimedia nights repository for the **COSYlanguages** ecosystem.

## Overview
`COSYevents` is a self-contained web application designed for language learners, session hosts, and conversational workshop facilitators. It includes:

### 1. Thematic Speaking Clubs (`premium-events/clubs/`)
- 💭 **I Couldn't Help But Wonder** (`wonder/`)
- 🔬 **Keeping Up with Science** (`kus/`)
- 🧠 **Mind Matters** (`mind/`)
- ⚖️ **Debatable & Relatable** (`debate/`)
- 🥳 **Let's Celebrate** (`celebrate/`)
- 🌱 **My Life With/Without** (`life/`)
- 📜 **The Greatest Quotes** (`quotes/`)

### 2. Interactive Multimedia Nights (`premium-events/nights/`)
- 🎬 **Cinema Club** (`cinema/`)
- 🎤 **Karaoke Club** (`karaoke/`)
- 🎲 **Game Evening** (`game-evening/`)
- 📖 **Long Reads** (`long-reads/`)

---

## Repository Structure

```
COSYevents/
├── index.html                  # Event Hub Entrance Page
├── speaking-clubs.html         # Speaking Clubs Directory
├── cinema-club.html            # Cinema Club Directory
├── game-evenings.html          # Game Evenings Directory
├── mind-matters.html           # Mind Matters Directory
├── browse.html                 # Complete Sessions Search & Filter Page
├── data/                       # Events dataset & session manifests
├── sessions/                   # Session documents & activity guides
├── premium-events/             # Interactive club & night apps
│   ├── clubs/                  # Speaking clubs interactive interfaces
│   └── nights/                 # Multimedia nights interactive interfaces
├── shared/                     # Standalone shared tokens, styles, and core engines
│   ├── css/                    # Platform CSS tokens & component design rules
│   └── js/                     # Engine injectors, UI handlers, daily dose loaders
└── README.md                   # This document
```

---

## Deployment & Hosting Instructions

To push this folder to your standalone `https://github.com/cosylanguages/COSYevents` GitHub repository:

1. **Copy folder contents:** Copy all files and subdirectories inside `COSYevents/` into the root of your target `COSYevents` repository.
2. **Enable GitHub Pages:** Go to `Repository Settings -> Pages`, select the `main` branch root (`/`), and save.
3. **Access Live Site:** Your standalone events app will be live at:
   `https://cosylanguages.github.io/COSYevents/`

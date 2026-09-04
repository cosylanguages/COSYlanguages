# COSY World Repository Migration Report

## Overview
This report details the audit and migration strategy for separating **COSY World** (the open-world language learning RPG) from the main **COSYlanguages** website repository into its own standalone repository structure (`COSYworld/`).

---

## 1. Inventory of Game-Related Files

### HTML Pages
- `games/cosy_world/index.html` ➔ `COSYworld/index.html`

### CSS Stylesheets
- `games/cosy_world/css/style.css` ➔ Split into `COSYworld/css/main.css` (tokens, layout, game viewport, stage card) and `COSYworld/css/ui.css` (HUD, modals, controls, badges, buttons).

### JavaScript Game Engine & Modules
- `games/cosy_world/js/main.js` ➔ `COSYworld/js/main.js`
- `games/cosy_world/js/engine/core.js` ➔ `COSYworld/js/engine/core.js`
- `games/cosy_world/js/scenes/scene_renderer.js` ➔ `COSYworld/js/scenes/scene_renderer.js`
- `games/cosy_world/js/player/stats.js` ➔ `COSYworld/js/player/stats.js`
- `games/cosy_world/js/dialogue/dialogue.js` ➔ `COSYworld/js/dialogue/dialogue.js`
- `games/cosy_world/js/quests/quest_manager.js` ➔ `COSYworld/js/quests/quest_manager.js`
- `games/cosy_world/js/inventory/inventory.js` ➔ `COSYworld/js/inventory/inventory.js`
- `games/cosy_world/js/save/save_system.js` ➔ `COSYworld/js/save/save_system.js`
- `games/cosy_world/js/ui/hud.js` ➔ `COSYworld/js/ui/hud.js`
- `games/cosy_world/js/ui/modal.js` ➔ `COSYworld/js/ui/modal.js`
- `games/cosy_world/js/audio/audio.js` ➔ `COSYworld/js/audio/audio.js`
- `games/cosy_world/game.js` ➔ Legacy entry point (re-mapped to standalone main engine).

### Educational Data & Content
- `games/cosy_world/data/languages.json` ➔ `COSYworld/data/languages/languages.json`
- `games/cosy_world/data/scenes/districts.json` ➔ `COSYworld/data/scenes/districts.json`
- `games/cosy_world/data/npcs/npcs.json` ➔ `COSYworld/data/npcs/npcs.json`
- `games/cosy_world/data/vocabulary/objects.json` ➔ `COSYworld/data/vocabulary/objects.json`
- `games/cosy_world/data/quests/quests.json` ➔ `COSYworld/data/quests/quests.json`
- `games/cosy_world/data/grammar/grammar.json` ➔ `COSYworld/data/grammar/grammar.json`
- `games/cosy_world/data/world_data.js` ➔ Legacy fallback dataset.

---

## 2. Integration & Linkage Points in COSYlanguages

1. `games/index.html`: Open-World card launcher button `openGame('cosyworld')`.
2. `js/games/loader.js`: `GAME_PATH_MAP` route mapping `'cosyworld'`.

---

## 3. Separation Strategy

- **Git History Preservation**: Move existing files using `git mv` from `games/cosy_world/` to `COSYworld/`.
- **Zero External Direct Dependencies**: Remove direct links to `../../css/*` and `../../js/*` from `index.html`, replacing them with self-contained design system tokens, components, and standalone modules within `COSYworld/`.
- **Pure Data-Driven Engine**: Ensure `GameEngine` in `COSYworld/js/engine/core.js` dynamically fetches all JSON datasets without inline educational content fallback logic.
- **Cross-Repository Linkage**: Update `games/index.html` and `js/games/loader.js` on COSYlanguages to launch `https://cosylanguages.github.io/COSYworld/` (or relative `COSYworld/index.html` when browsing locally).

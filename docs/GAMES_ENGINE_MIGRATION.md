# COSYlanguages Games Engine Migration & Comparison Report

## Executive Summary

This report evaluates the co-existence of two separate game engines within the COSYlanguages repository:
1. **The Legacy In-Place Engine** (located under `js/games/` and utilized via an overlay on `games/index.html`).
2. **The Standalone Folder Engine** (located under `games/_engine/` and implemented via decoupled subfolders for each of the 16 games).

Currently, the games hub (`games/index.html`) acts as a transitional page. It renders a beautiful card grid of 16 language games but intercepts play clicks to launch games inside a monolithic, in-page HTML modal overlay (`#game-overlay`) driven by older, preloaded scripts. However, full-featured standalone versions of all 16 games already exist in dedicated subdirectories (e.g., `games/hot_seat/`) powered by the new modular `_engine` pattern.

We **strongly recommend migrating `games/index.html` to the new engine pattern** and retiring the legacy engine. This change will eliminate code duplication, improve page-load speed and memory footprint, and unify the player experience under a modern, maintainable architecture.

---

## 1. Engine Comparison: The Old vs. The New

### A. The Legacy Engine (`js/games/*` + `games/index.html` Overlay)
On the games hub page (`games/index.html`), clicking any card triggers `openGame(id)`. This brings up a full-screen HTML modal (`#game-overlay`) embedded directly in the hub. The gameplay runs entirely within this overlay.

*   **Monolithic Controller (`js/games/unified-engine.js`)**: A single file (approx. 1,200 lines) containing setup configurations, state variables, and execution loops for all 16 games.
*   **Performance Overhead**: To support this, `games/index.html` must pre-load almost 10 script files globally on page load:
    *   `js/games/loader.js` (filters & transitional helpers)
    *   `js/games/bingo.js`, `js/games/emoji_odyssey.js`, `js/games/crossword.js`, `js/games/story_chain.js`, `js/games/hot_seat.js`, `js/games/guess_games.js`
    *   `js/games/unified-engine.js`
*   **Transitional Dead Code**:
    *   `js/games/hot_seat.js` defines an isolated `HotSeatGame` object that is never actually referenced by the unified engine's `startHotSeat()` routine.
    *   `js/games/loader.js` includes transitional compatibility routines like `openGameSheet` and references to `launchGame()` or `mobile.js`, which do not exist in the current web application.
*   **Maintenance Nightmare**: Modifying a single game requires editing a shared, massive monolithic engine, increasing the risk of regressions across all other games.

### B. The Standalone Folder Engine (`games/_engine/*` + Per-Folder `game.js`)
Under the new pattern, each game is a self-contained web app situated in its own folder (e.g., `games/hot_seat/index.html`).

*   **Standardized Engine Core (`games/_engine/`)**:
    *   `game_session.js`: Keeps track of current game state (points, rounds, max rounds, active status, CEFR level, target language).
    *   `scores.js`: Automated persistent client-side high scores using `localStorage`.
    *   `loader.js`: Standardized `COSYLoader` wrapper that retrieves level data and game assets.
*   **Decoupled Game Logic (`game.js` in each folder)**: Each directory contains its own localized game script, isolating UI rendering, setup forms, and custom rules.
*   **Shared Infrastructure**: Uses the unified `window.gameUtils` from `js/games/utils/shared.js` to handle advanced operations like speech synthesis (`gameUtils.speak`), timer rings (`gameUtils.startTimer`), sound effects, and dataset extraction.
*   **Benefits**: Extremely cohesive, easy to test, and completely isolated from other games.

---

## 2. Feasibility of Migration

We investigated whether the hub's dual-engine setup was intentional (e.g., for fast previews or unique overlay behavior) or simply a transitional state.

**Conclusion**: The hub page and its overlay are **not intentionally different**. The in-overlay games are full gameplay sessions, identical in scope to the standalone folders. Keeping both serves no product purpose and creates severe code synchronization issues (e.g., bug fixes must be applied in two completely different engine scripts).

All 16 games listed on the Hub have 100% complete standalone equivalents already implemented in the repository. Therefore, **full migration of the hub page to the new standalone engine is highly feasible and strongly recommended.**

---

## 3. Migration Roadmap & Recommendations

To retire the legacy engine and unify the gameplay under the modern `_engine` pattern, we propose the following actionable migration roadmap:

### Step 1: Update Card Markup in `games/index.html`
Change all inline `onclick="openGame('...')"` attributes on the game cards (`.gc` and `.gc-play`) into standard anchor links or explicit redirects pointing to their corresponding subfolders:
*   `openGame('fluency')` ➔ Go to `fluency_flow/`
*   `openGame('battle')` ➔ Go to `battle_of_wits/`
*   `openGame('opinion')` ➔ Go to `opinion_arena/`
*   `openGame('critic')` ➔ Go to `critics_corner/`
*   `openGame('storychain')` ➔ Go to `story_chain/`
*   `openGame('hotseat')` ➔ Go to `hot_seat/`
*   `openGame('action')` ➔ Go to `action_hero/`
*   `openGame('identity')` ➔ Go to `identity_mystery/`
*   `openGame('objectquest')` ➔ Go to `object_quest/`
*   `openGame('wordlinker')` ➔ Go to `word_linker/`
*   `openGame('lastletter')` ➔ Go to `last_letter/`
*   `openGame('emoji')` ➔ Go to `emoji_odyssey/`
*   `openGame('crossword')` ➔ Go to `cosy_crossword/`
*   `openGame('bingo')` ➔ Go to `lucky_numbers/`
*   `openGame('etymology')` ➔ Go to `etymology_explorer/`
*   `openGame('gender')` ➔ Go to `what_gender_is_it/`

### Step 2: Extract Card Filtering Logic
Currently, `js/games/loader.js` contains the filter buttons handler `.fpill` for sorting games on the hub (e.g., "Solo", "With friends", "Speaking").
*   Move this clean filter-bar functionality into a lightweight, standalone `js/games-hub-filter.js` or directly into `js/core/ui.js`.
*   Retain the filtering behavior on the grid elements (`.gc` card display toggles).

### Step 3: Remove Modal Overlay from Hub Markup
Delete the massive `<div class="game-overlay" id="game-overlay">` markup block entirely from `games/index.html`.

### Step 4: Clean Up Scripts from Hub Header & Footer
Remove all legacy preloaded scripts from the bottom of `games/index.html`:
```html
<!-- REMOVE THESE LINES -->
<script src="../js/games/loader.js"></script>
<script src="../js/games/bingo.js"></script>
<script src="../js/games/emoji_odyssey.js"></script>
<script src="../js/games/crossword.js"></script>
<script src="../js/games/story_chain.js"></script>
<script src="../js/games/hot_seat.js"></script>
<script src="../js/games/guess_games.js"></script>
<script src="../js/games/unified-engine.js"></script>
```
Instead, load only the lightweight card filtering script.

### Step 5: Safely Delete Legacy Code
After verifying that card redirection and filtering are working perfectly in the hub:
1.  Delete the entire `js/games/` directory and all its files (including `unified-engine.js`, `loader.js`, `hot_seat.js`, `crossword.js`, `bingo.js`, `emoji_odyssey.js`, `guess_games.js`, `story_chain.js`, `word_linker.js`, `charades.js`, `last_letter.js`, `speaking_games.js`).
2.  Maintain `js/games/utils/shared.js` (`window.gameUtils`) as it remains the active utility system used by the new engine.

---

## 4. Expected Impact
*   **Maintainability**: Single source of truth for each game's logic. Bug fixes or feature upgrades immediately apply to both the hub-linked experience and direct visits.
*   **Performance Boost**: Reduces `games/index.html` page size, stops preloading 8 distinct external JavaScript files, lowers browser memory footprint, and results in near-instant initial rendering.
*   **Clean codebase**: Safely purges ~2,500 lines of dead, transitional, and duplicated JavaScript logic.

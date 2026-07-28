# Audit Report: Verification Scripts vs. Playwright Tests

This report evaluates the scripts within the `verification/` directory and compares their purposes and implementations with the Playwright integration tests located in `tests/`. It provides recommendations for each script (Keep, Convert, or Delete).

---

## Executive Summary

- **Total Verification Scripts Evaluated**: 8
- **Fully Redundant / Duplicated Scripts**: 1
- **Uncovered Core Features**: 7
- **Primary Goal**: Transition ad-hoc validation scripts to the unified, robust Playwright test suite (`tests/`) to ensure reliable CI/CD verification, and deprecate stale or duplicated files.

---

## Script-by-Script Analysis

### 1. `verify_celebrate_cards.py`
* **Purpose**: Validates the "Let's Celebrate" speaking club page's past sessions grid layout and interactive level-switching functionality.
  - Navigates to `/events/lets-celebrate.html`.
  - Captures card structures and split levels.
  - Navigates to the `Urban Beekeeping Day Starter A1` page, interacts with the level switcher to navigate to `Elementary (A2)`, and verifies successful level transition.
* **Covered by Existing Spec**: **Partially**. While `tests/session_switcher.spec.ts` verifies level switcher functionality for `debatable-relatable` and language-switching, it does not specifically cover the "Let's Celebrate" club switcher, its unique templates, or its naming convention (the `celebrate-` prefix required by the automated validation systems).
* **Recommendation**: **Convert to a proper Playwright test** (e.g., `tests/lets_celebrate.spec.ts` or expand `tests/session_switcher.spec.ts`).

---

### 2. `verify_club_filters.py`
* **Purpose**: Validates client-side level filtering on Speaking Club index pages and the micro-interactions associated with empty states.
  - Navigates to `/events/keeping-up-with-science.html`.
  - Interacts with level filter buttons (`C1` with sessions vs. `A1` with no sessions).
  - Verifies that when filtering yields zero sessions, a localized high-contrast empty-state card (`#no-sessions-msg`) with a pulsating search emoji is dynamically injected.
* **Covered by Existing Spec**: **No**. No tests in `tests/` currently cover the `setupClubFilters()` logic in `js/core/ui.js` or empty-state feedback.
* **Recommendation**: **Convert to a proper Playwright test** (e.g., `tests/club_filters.spec.ts`).

---

### 3. `verify_dark_theme.py`
* **Purpose**: Verifies that the dark theme toggling works and applies across pages.
  - Navigates to `/`.
  - Clicks `.theme-toggle-btn` to turn on the dark theme.
  - Navigates to `/placement-quiz.html` and `/classroom-sync.html` to verify dark-theme application on elements like adaptive calibration cards and custom layout boxes.
* **Covered by Existing Spec**: **No**. None of the tests in `tests/` check dark theme toggling or its persistence across the site.
* **Recommendation**: **Convert to a proper Playwright test** (e.g., `tests/dark_theme.spec.ts`). The test can programmatically toggle the theme and assert that the `data-theme="dark"` attribute is present on the root `<html>` element and persists upon navigation.

---

### 4. `verify_disclaimers.py`
* **Purpose**: Checks that the localized educational-use disclaimer is correctly appended to the bottom of all lyric container elements.
  - Navigates to `/events/sessions/karaoke-club/toutes-les-machines-ont-le-coeur.html`.
  - Scrolls to the bottom of `.lyrics-container` and captures a screenshot of the disclaimer.
* **Covered by Existing Spec**: **No**.
* **Recommendation**: **Convert and merge with `verify_embedded.py`** into a consolidated disclaimers and reader test (`tests/disclaimers.spec.ts`).

---

### 5. `verify_embedded.py`
* **Purpose**: Verifies dynamic article embedding in science sessions and lyrics disclaimers in karaoke sessions.
  - Checks for the embedded article reader iframe and the localized educational disclaimer in `/events/sessions/keeping-up-with-science/sensory-system-pain-disease.html`.
  - Checks for the lyrics container disclaimer in `/events/sessions/karaoke-club/as-it-was.html`.
* **Covered by Existing Spec**: **No**.
* **Recommendation**: **Convert to a proper Playwright test** (`tests/embedded_resources.spec.ts` or similar).

---

### 6. `verify_life.py`
* **Purpose**: Validates the "My Life With & Without" speaking club index page, including past session cards and interactive B2/All level filtering.
  - Navigates to `/events/my-life-with-without.html`.
  - Verifies the dual-contrast balance cards and performs hover and click interactions.
* **Covered by Existing Spec**: **No**.
* **Recommendation**: **Convert to a proper Playwright test** or combine with the club filters verification in a unified test.

---

### 7. `verify_lyrics.py`
* **Purpose**: Validates the interactive karaoke gap-fill gameplay.
  - Navigates to `/events/sessions/karaoke-club/toutes-les-machines-ont-le-coeur.html`.
  - Types incorrect text into `input.lyrics-gap-input` and verifies wrong-answer state.
  - Types correct text (case and accent normalized, e.g., "MACHINES") and verifies correct-answer state.
* **Covered by Existing Spec**: **No**.
* **Recommendation**: **Convert to a proper Playwright test** (`tests/karaoke_gap_fill.spec.ts`). Checking the interactive normalization and verification of gap fills is a core feature that belongs in the CI suite.

---

### 8. `verify_placement_quiz.js`
* **Purpose**: Validates the adaptive calibration and pivot logic of the placement quiz.
  - Navigates to `/placement-quiz.html`.
  - Selects English, fails the first two questions, verifies the adaptive level calibration card/transition, skips to Question 11, and completes the quiz to arrive at the diagnostic screen.
* **Covered by Existing Spec**: **Yes, fully!**
  - `tests/placement_quiz.spec.ts` features a test named `should trigger adaptive pivot when 2 questions are failed in first 6` which mirrors this exact behavior. It asserts that the transition card is shown, validates its texts, waits out the calibration timer, handles skipping directly to Question 11, answers the remaining active questions, and verifies the final results breakdown and diagnostic visibility.
* **Recommendation**: **Delete** once we are ready to merge/cleanup. The script is completely redundant and stale given the robust coverage in `tests/placement_quiz.spec.ts`.

---

## Consolidated Action Plan Recommendation

| Verification File | Target File under `tests/` | Recommendation | Status / Justification |
| :--- | :--- | :--- | :--- |
| `verify_celebrate_cards.py` | `tests/lets_celebrate.spec.ts` | **Convert** | Bring "Let's Celebrate" page layout & switcher into automated suite. |
| `verify_club_filters.py` | `tests/club_filters.spec.ts` | **Convert** | Ensure UI filter logic & empty state handling are tested dynamically. |
| `verify_dark_theme.py` | `tests/dark_theme.spec.ts` | **Convert** | Programmatically verify `data-theme` switches on HTML/body. |
| `verify_disclaimers.py` | `tests/disclaimers.spec.ts` | **Convert & Merge** | Combine with `verify_embedded.py` to test localized disclaimers. |
| `verify_embedded.py` | `tests/disclaimers.spec.ts` | **Convert & Merge** | Combine with `verify_disclaimers.py` to test embedding & disclaimers. |
| `verify_life.py` | `tests/club_filters.spec.ts` | **Convert & Merge** | Test filters and dual-contrast ledger cards on My Life With & Without page. |
| `verify_lyrics.py` | `tests/karaoke_gap_fill.spec.ts` | **Convert** | Ensure gap-fill inputs normalized validation works correctly. |
| `verify_placement_quiz.js` | `tests/placement_quiz.spec.ts` | **Delete** | **Fully Redundant.** Playwright test already provides 100% equivalent coverage. |

# COSYlanguages Ecosystem Roadmap 🚀

This roadmap outlines the transformation of COSYlanguages from a resource repository into a full-scale educational ecosystem, integrating deeply with ProgressMe and leveraging AI for teacher support.

## Phase 1: Deep Content Integration (Current Focus)

### 1.1 Automated ProgressMe Synchronization
- **Goal:** Link COSY roadmaps directly to ProgressMe course units.
- **Actions:**
  - Standardize `curriculum/manifest.json` with direct ProgressMe deep links.
  - Enhance `progress-sync` Edge Function to update `progress.current_unit` automatically upon ProgressMe unit completion.

### 1.2 The "Weak Spot" Feedback Loop
- **Goal:** Turn mistakes into lessons.
- **Actions:**
  - Connect the `mistake-check` function to the ProgressMe API.
  - Automatically create custom vocabulary sets in ProgressMe based on a student's high-frequency errors in COSY.

## Phase 2: Behavioral Engineering & Gamification

### 2.1 Interactive Telegram Bot
- **Goal:** Move beyond notifications to active learning.
- **Actions:**
  - Implement `/test` command in the Telegram bot to pull 5 random words from the student's `vocab_notebook`.
  - Update COSY points directly from Telegram interactions.

### 2.2 Community & Challenges
- **Goal:** Drive retention through social learning.
- **Actions:**
  - Launch the "COSY League" — a monthly leaderboard for active students.
  - Integrate "Marathon" status from ProgressMe into the COSY Student Dashboard.

## Phase 3: Teacher "Superpowers" (AI & Admin)

### 3.1 AI-Assisted Lesson Prep
- **Goal:** Use LLMs to summarize student progress.
- **Actions:**
  - Implement an Edge Function that analyzes a student's last 5 `mistake_log` entries and generates a 3-point "Review Priority" list for the teacher.

### 3.2 Visual Course Builder
- **Goal:** Ease of curriculum management.
- **Actions:**
  - Build an Admin UI to drag-and-drop vocabulary themes and ProgressMe links into a new `v2.json` curriculum map.

## Phase 4: Native Experience

### 4.1 PWA to TWA (Mobile App)
- **Goal:** Presence on the home screen.
- **Actions:**
  - Transition the current PWA into a Trusted Web Activity for the Google Play Store.
  - Implement native push notifications for homework and streaks.

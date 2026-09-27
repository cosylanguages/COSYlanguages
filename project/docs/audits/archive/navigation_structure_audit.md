# COSYlanguages Website Structure & Navigation Audit

**Prepared by:** Jules, Senior Software Engineer
**Date:** September 2026
**Status:** Complete

---

## 1. Executive Summary
COSYlanguages has built a remarkably robust, pedagogically structured, and immersive language learning platform. By deprecating the legacy student/teacher portals in favor of visitor-first, public-access learning tools, the ecosystem has become highly frictionless and accessible.

However, as the site has scaled to support **13 languages** with over **400+ session files** across **9 distinct Speaking/Cinema/Karaoke clubs**, several structural inconsistencies, navigation silos, mobile UX gaps, and discoverability challenges have emerged.

This audit evaluates the entire website navigation architecture, page hierarchies, and onboarding pathways. It assesses the platform's overall usability from the perspective of a **new student** and identifies concrete, actionable optimizations to achieve a seamless, highly engaging, and perfectly consistent user experience.

---

## 2. In-Depth Checklist Audit

### A. Navigation Menus (Desktop vs. Mobile)
*   **Desktop Navigation (`js/core/engine.js` via `NAV_CONFIG.free`)**:
    *   Highly consistent. Offers direct access to: **Home, Practice, Notebook, Games, Events**.
    *   Links correctly utilize relative prefix resolution (`getPrefix()`) to avoid 404 pathing failures across nested subfolders.
*   **Mobile Bottom Navigation Bar (`js/core/ui.js` via `window.updateMobileNav()`)**:
    *   🔴 **Critical Inconsistency & Discovery Gap**: The mobile bottom bar is hardcoded to render exactly four links: **Practice (💡), Games (🎮), Languages (🌍 - points to `#languages` hash on home), and Home (🏡)**.
    *   This completely omits **Events (🎉)** (where the Speaking, Cinema, and Karaoke clubs live!) and **Notebook (📓)** (where users manage their harvested words).
    *   Since a massive portion of web traffic comes from mobile viewports, having the core content hubs (Live Events/Speaking Clubs) completely excluded from the primary mobile bottom nav severely harms engagement and organic discoverability.
*   **Mobile Hamburger/Off-Canvas Menu (`#cosy-mobile-menu` in `js/core/engine.js`)**:
    *   Includes **Home, Practice, Games, Events, and Profile Switcher**.
    *   *Inconsistency*: While the hamburger menu contains 'Events', it still omits the **Notebook (📓)** entirely, meaning mobile users have no easy way to access their personal vocabulary database from the menu.

### B. Breadcrumbs
*   **Implementation & Relative Depth**:
    *   Individual Speaking Club sessions feature a `.cosy-breadcrumbs` container (e.g., `Home / Events / Science Club / AI And The Brain`).
    *   The relative link paths correctly scale to match the directory nesting level. For example:
        *   English sessions (3 levels deep, e.g., `events/sessions/keeping-up-with-science/`): `../../../` points to Home, `../../` points to Events, and `../` points to Science Club.
        *   Localized French sessions (4 levels deep, e.g., `events/fr/sessions/keeping-up-with-science/`): `../../../../` points to Home, `../../../` points to Events, and `../../` points to Science Club.
    *   This is a highly resilient system that guarantees resource and navigation routing stability regardless of directory depth.
*   **Localization Consistency**:
    *   In localized files, breadcrumbs are beautifully translated. For example, in `events/fr/sessions/keeping-up-with-science/impersonation-accounts.html`, the breadcrumbs are: `Accueil / Événements / Science Club / Usurpation d'identité`.
    *   *Minor Note*: Some older, merged-level quote pages that were split manually might have minor string casing mismatches in localized breadcrumbs.

### C. Event Hierarchy & Club Hierarchy
*   **Naming & Structural Confusion**:
    *   The `events/index.html` hub lists **two ways to connect** / three main formats: **Speaking Club**, **Cinema Night**, and **Karaoke Night**.
    *   Directly below, the page invites students to **"Find your favorite topic"** under the heading **"Browse our clubs"**, rendering **9 distinct clubs**:
        1. Keeping Up with Science
        2. Let's Celebrate
        3. The Greatest Quotes
        4. Mind Matters
        5. My Life With & Without
        6. Debatable & Relatable
        7. Cinema Club
        8. Karaoke Club
        9. I Couldn't Help But Wonder
    *   🔴 **The Hierarchy Blur**: A new student will struggle to differentiate between **Formats** and **Clubs**.
        *   "Cinema Club" is listed alongside "Keeping Up with Science", but Cinema Club actually represents the "Cinema Night" format, and Karaoke Club represents the "Karaoke Night" format.
        *   The other 7 clubs are actually themed sub-categories of the **Speaking Club** format.
        *   This creates logical overlap. Is "Keeping Up with Science" a separate event type, or is it a Speaking Club? This hierarchy should be explicitly unified (e.g., grouping the 7 Speaking Clubs under a "Speaking Clubs" section, while keeping Cinema and Karaoke distinct).

### D. Back Buttons
*   **Execution**:
    *   Individual sessions cleanly embed a `.back-link` anchor at the top (e.g., `← Back to Club` or `← Retour au Club`).
    *   They correctly target the parent club page (e.g., `../../keeping-up-with-science.html` or `../../the-greatest-quotes.html`).
*   **Localization Alignment**:
    *   Localized sessions successfully point to their localized parent club hubs (e.g., French sessions point to `../../keeping-up-with-science.html` relative to their folder, which resolves to `events/fr/keeping-up-with-science.html` on disk). This ensures users do not get dropped back into English indexes when starting from a French session.

### E. Internal Links
*   **Onboarding Redundancy**:
    *   Hyperlinks to WhatsApp and Telegram calls-to-action are heavily repeated across the entire interface (hero sections, cards, pricing section, footers, etc.). While this maximizes user conversion and onboarding, it can feel slightly repetitive on desktop viewports.
*   **Transition of Deprecated Portal Elements**:
    *   The platform has deprecated student/teacher portal logins in favor of public-access hubs. However, minor commented references and active style classes from `css/portal.css` are still loaded. This is actually a positive for architectural stability, as `portal.css` supports container styling for several core free tools like `placement-quiz.html`, `vocabulary/index.html`, and `grammar/index.html`.

### F. Related Sessions
*   **The Content Silo Problem**:
    *   🔴 **Major Engagement Barrier**: Once a student clicks into an individual session page (e.g., `ai-and-the-brain-intermediate.html`), the page behaves as a **content silo**.
    *   There is no "Related Sessions" grid, "Next Session" button, or "You might also like..." carousel.
    *   To explore other topics in the same club, the user *must* click the `← Back to Club` button, return to the hub, and scroll through the cards again. This circular navigation disrupts natural user flow and reduces "session-hopping" session durations.

### G. Homepage Organization & Discoverability
*   **Onboarding & Core Value Proposition**:
    *   `index.html` is exceptionally well-organized. It splits the page into two clear value streams:
        1.  **Paid 1-to-1 Language Lessons**: Driven by "Six courses, one promise", "How it works" onboarding steps, and the transparent pricing calculator.
        2.  **Free Public Tools**: Driven by the Practice Hub, Language Games, and Live Events.
*   **Discoverability Assistance**:
    *   The inclusion of the floating guide button (`#cosy-tour-fab`) is a masterpiece of user onboarding. It automatically initiates an interactive homepage tour (`startHomepageTour()`) when clicked on the home page, and opens a contextual navigation roadmap modal (`showNavigationHelpModal()`) when clicked on any inner page. This completely guarantees high discoverability of obscure tools.

---

## 3. New Student Comprehension Assessment

| Student Question | Assessment | Detailed Context & Gaps |
| :--- | :---: | :--- |
| **What is each event?** | **B+** | Clear, brief descriptions are present on the Events hub. However, once a student is inside an individual session (e.g., `grandmother-evolutionary-mystery.html`), there is no brief header explaining what the parent "Keeping Up with Science" club's overall focus is. |
| **How do events differ?** | **B** | The distinction between film scenes (Cinema), lyrics/pronunciation (Karaoke), and structured debates (Speaking) is clear. However, because all 9 clubs share the same grid-card style and similar internal page layouts (Vocabulary, Warm-up, Round 1, Let's Speak, Round 2, Mistakes), they can visually blend together, hiding their unique formats. |
| **Where do I start?** | **D** | **Major UX Gap**. There is no "Start Here" recommendation path for Speaking Clubs. The "Placement Quiz" on the homepage is exclusively for paid 1-to-1 lessons. If a beginner student clicks "Events" and enters "Mind Matters" or "Science Club" (which are calibrated for B1–C2 levels), they will be confronted with dense C1 academic vocabulary without any introductory advice. |
| **How do I navigate between sessions?** | **B-** | The **Session Switcher** is highly intuitive for switching languages or levels of the *same* session topic. However, navigating between *different* session topics within a club requires backtracking to the parent hub, creating high cognitive friction. |

---

## 4. Inconsistencies, Confusing Naming, & Broken Logic

### A. Mobile Navigation Disconnect
As identified in Section 2, mobile viewports completely strip away access to **Events** and **Notebook** from the bottom bar, relying on users finding the hamburger menu and realizing Events are located there.

### B. Confusing "Clubs" vs "Formats"
The overlapping categorization of event formats (Speaking, Cinema, Karaoke) with specific thematic discussion groups (Science, Philosophy, Celebrate, Quotes, etc.) causes visual and logical grouping errors on the events index.

### C. Structural Deviation in Russian "4-Day Work Week"
*   🔴 **Broken Logic/Layout**: The localized Russian session `events/ru/sessions/debatable-relatable/4-dnevnaya-rabochaya-nedelya.html` deviates significantly from the unified COSY speaking club standard:
    *   It completely omits the standard `<section id="vocabulary">` (using `.vocab-section` instead).
    *   It lacks the standard `mistake-block` container with `id="s-mistakes"`.
    *   This breaks the automatic interactive collapse/expand mechanics driven by `js/core/ui.js` on this page, resulting in layout layout errors and a broken user interface.

### D. Short Descriptions in Localized Sessions
Several localized French Speaking Club pages feature description blocks with fewer than 3 sentences (e.g., `impersonation.html` has only 1 sentence). This reduces the narrative hooks for students and causes vertical spacing inconsistencies on grid displays.

---

## 5. Strategic & Actionable Recommendations

### Recommendation 1: Unify Mobile & Desktop Navigation Menus
Update the mobile bottom navigation bar in `js/core/ui.js` (`window.updateMobileNav()`) and the off-canvas menu to align perfectly with the desktop menu:
*   Add a direct link to **Events (🎉)** on the mobile bottom bar (perhaps replacing the redundant "Languages" link which just scrolls the home page).
*   Add **Notebook (📓)** to the mobile off-canvas menu.

### Recommendation 2: Introduce a "New Student Speaking Club Guide" / "Where to Start" Row
Add a clear, welcoming informational banner at the top of `events/index.html`:
*   *Draft Copy:* "New to our Speaking Clubs? Start with **Let's Celebrate** or **The Greatest Quotes** (A1–B1 friendly). Advanced learners, dive straight into **Mind Matters** or **Science Club** (B2–C2)!"
*   Provide a quick level recommendation grid to prevent lower-level students from getting intimidated by advanced content.

### Recommendation 3: Break Session Silos with a "Next Session" or "Related Sessions" Link
Add a simple, context-aware relative navigation row at the bottom of individual session templates, immediately before the footer:
*   Example: `[ ← Previous Session: Ape Laughter ]  |  [ View All Science Specimen ]  |  [ Next Session: Fusion Energy → ]`
*   This breaks the circular back-and-forth pattern and keeps students happily session-hopping.

### Recommendation 4: Align the Russian "4-Day Work Week" Structure
Refactor `events/ru/sessions/debatable-relatable/4-dnevnaya-rabochaya-nedelya.html` to align with the standard speaking club modular layouts, restoring standard vocabulary tags, mistakes section IDs, and visual elements to guarantee full integration with client-side interactive JS scripts.

### Recommendation 5: Explicitly Segment "Live Discussion Clubs" vs "Entertainment Formats"
On the Events index, visually group the 7 discussion clubs under a dedicated section titled **"Thematic Speaking Clubs"**, while clearly highlighting **Cinema Club** and **Karaoke Club** as distinct **"Interactive Multimedia Nights"**. This makes the pedagogical differences instantly clear to new visitors.

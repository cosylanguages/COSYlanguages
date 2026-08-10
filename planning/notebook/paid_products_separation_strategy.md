# COSYlanguages Strategic Architecture: Paid & Free Ecosystem Separation Strategy
*Author: Jules, Lead Software Architect*
*Date: October 2026*

## 1. Executive Summary & Philosophy Alignment

COSYlanguages operates under a unique "Slow-Tech" language learning model that rejects invasive data-tracking, cloud accounts, and central database locks. Instead, we advocate for **Student & Teacher Privacy Sovereignty**, **100% Client-Side Persistence** (via `localStorage`), and **Fully Monolingual Immersion**.

As our curriculum grows, we must clearly define and decouple the **Free tier (General Practice Hub, Grammar Manuals, Self-Study Vocabulary Games)** from the **Paid tier (Premium Courses, Interactive Thematic Events, Cinema Sessions, Karaoke Challenges)**.

To prevent product dilution, avoid user friction, and establish deep aesthetic consistency, this strategy details the separation of these elements into their own **separate and unique systems**. Rather than monolithic bundling, each paid product is treated as an independent "boutique brand" operating within a unified micro-frontend monorepo framework, sharing design tokens but operating with customized visual systems, isolated assets, separate domains, and decentralized access control.

---

## 2. Product Architecture & Taxonomy

Our ecosystem is partitioned into two clear levels of product separation: Main Products (the macro level) and Sub-Products (the micro level).

```
+---------------------------------------------------------------------------------------------------+
|                                      COSYlanguages ECOSYSTEM                                      |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ FREE PLATFORM ] (The Sanctuary)                                                                |
|  - General Grammar Manuals (A1-B2)                                                                |
|  - General Practice Hub (Vocabulary & Syntax training)                                            |
|  - Solo Play Games (Word Linker, Lucky Numbers, etc.)                                             |
|  - Public Language Index Pages & Word-Decks                                                      |
|                                                                                                   |
+--------------------------------------------------+------------------------------------------------+
|                                                  |                                                |
|  [ PAID PRODUCT 1: COURSES ]                     |  [ PAID PRODUCT 2: EVENTS & SESSIONS ]          |
|  - Structured level paths (e.g. A1-C1 general)   |  - Conversational immersion programs           |
|  - Standard syllabus & pedagogical roadmaps      |  - Thematic speaking clubs                     |
|  - Integrated, sequential self-evaluation        |  - Interactive cinema & karaoke workshops      |
|                                                  |                                                |
|  +--------------------------------------------+  |  +------------------------------------------+  |
|  | Sub-Product: Level-Calibrated Curriculums |  |  | Sub-Product: Thematic Speaking Clubs     |  |
|  | - Direct instructor-led digital books      |  |  | - Wonder Club, KUS, Mind Matters, etc.   |  |
|  +--------------------------------------------+  |  +------------------------------------------+  |
|  | Sub-Product: Specialized Skill-Drills      |  |  | Sub-Product: Cinema Club (98+ films)     |  |
|  | - Advanced phonetic & dialogue practice   |  |  | - Speculative character dialogues & film |  |
|  +--------------------------------------------+  |  +------------------------------------------+  |
|                                                  |  | Sub-Product: Karaoke Club (108+ songs)   |  |
|                                                  |  | - Narrative lyrics, challenges, debates  |  |
|                                                  |  +------------------------------------------+  |
|                                                  |                                                |
+--------------------------------------------------+------------------------------------------------+
```

### A. The Core Main Products

1.  **COSY Courses (Syllabus-Driven Structured Academies):**
    *   **Description:** Linear, sequential learning paths aligned strictly to CEFR levels (e.g., Italian A1, English B2, French A2) and general syntax structures.
    *   **Pedagogical Objective:** Traditional language acquisition, grammar systemization, structural accuracy, and standard reading/writing comprehension.
2.  **COSY Events (Conversational Speaking & Multi-Sensory Clubs):**
    *   **Description:** Live, contextual, and deeply interactive workshops. Instead of standard rules, these focus on emotional, cultural, and cognitive connection (audio briefs, debates, game evenings, songs).
    *   **Pedagogical Objective:** Fluency optimization, lexical expansion, spontaneous monologue formulation, cultural integration, and active oral engagement.

### B. Sub-Product Micro-Brands

To maximize the perceived premium value, each event type is treated as its own sub-product with a completely isolated theme, layout, and visual system:

*   **I Couldn't Help But Wonder (Wonder Club):** Cozy, Carrie Bradshaw-inspired retro 'scrapbook' aesthetic featuring handwriting accents, Polaroid layouts, translucent washi-tape overlays, and introspective local Brittany narratives.
*   **Keeping Up with Science (KUS):** Atmospheric green 'Field Journal' science aesthetic, integrating phonetic/syntactic linguistic mappings, scientific audio briefs, and interactive lab reports.
*   **Mind Matters:** Everyday psychology aesthetic featuring soft, calming palettes (e.g., dopamine-yellows, sleep-blues), warm emotional watermarks, and balance-sheet structural designs.
*   **Cinema Club:** High-contrast, dark-mode-first cinematic aesthetic structured around dialogue deconstruction, speculatively mapping character conflicts, screenplays, and cinematic artistry.
*   **Karaoke Club:** Energetic retro 'Cassette Liner Notes' aesthetic, embedding hand-coded lyrics, interactive linguistic challenges, and localized pronunciation metrics.

---

## 3. Technical Separation & Repository Architecture

To prevent code pollution, separate asset footprints, and maximize site-reliability, we utilize a **Multi-Domain Micro-Frontend Monorepo** structure.

```
cosylanguages-monorepo/
├── apps/
│   ├── free-portal/          # cosylanguages.github.io (Free PWA Hub)
│   │   ├── css/
│   │   ├── grammar/
│   │   ├── practice/
│   │   └── index.html
│   │
│   ├── premium-courses/      # courses.cosylanguages.com
│   │   ├── curriculum/
│   │   └── index.html
│   │
│   ├── premium-events/       # events.cosylanguages.com
│   │   ├── speaking-clubs/   # Wonder, KUS, Mind Matters, etc.
│   │   ├── cinema-club/
│   │   └── karaoke-club/
│   │
│   └── print-studio/         # print.cosylanguages.com (PDF Generator)
│
└── shared/                   # Shared UI tokens and engine blocks
    ├── css/tokens.css        # Base variables (typography, layout rules)
    ├── js/core/engine.js     # Shared core logic, i18n loaders
    └── images/logos/         # Global brand marks
```

### Domain Mapping & Isolation

1.  **Main PWA (Free Portal):** `cosylanguages.github.io` (or `cosylanguages.com`)
    *   Host site for general public visitors. Focuses on search-engine optimization (SEO), providing immediate free access to spelling, grammar, and syntax tools.
2.  **Premium Courses System:** `courses.cosylanguages.com`
    *   Dedicated application server hosting premium level-by-level curriculums. Houses interactive dialog exercises, self-evaluation checkmarks, and structured audio files.
3.  **Premium Events System:** `events.cosylanguages.com`
    *   Houses the collective conversational universe. Highly optimized for screen sharing during live group classes or private tutoring. Includes the sub-product directories for Wonder, KUS, Mind Matters, Cinema, and Karaoke.
4.  **COSY Print Studio:** `print.cosylanguages.com`
    *   Isolates heavy programmatic PDF generators (such as `jspdf` and page-rendering styles), leaving the operational apps featherlight.

---

## 4. Decentralized, Privacy-Sovereign Access Control

Because COSYlanguages does not maintain cloud database servers or track user profiles, traditional JWT or session-cookie auth schemes are bypassed. Instead, we implement a **Decentralized Cryptographic Gateway**.

```
+-----------------------------------------------------------------------------------------+
|                              LOCAL PASSCODE DECRYPTION GATE                             |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  [ Student enters passcode: e.g. KUSMG12 ]                                              |
|                           │                                                             |
|                           ▼                                                             |
|  [ SHA-256 Hash Local Comparison in browser (passcodes.js) ]                             |
|                           │                                                             |
|         ┌─────────────────┴─────────────────┐                                           |
|         ▼ (Match Found)                     ▼ (No Match)                                |
|  [ Access Granted ]                  [ Display Access-Lock Block ]                      |
|  - Sets mode: 'mini' or 'private'    - Prompts for Teacher/Host activation               |
|  - Mounts Host Control Bar           - Links to public registration / payment pages    |
|  - Removes lock overlays                                                                |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
```

### Key Gateway Mechanisms

1.  **SHA-256 Passcode Hashes (`passcodes.js`):**
    All premium levels (e.g., Mini Group, Private Lesson) are natively shipped inside the static HTML payload, but are hidden behind a local lock-screen. A localized dictionary of pre-computed SHA-256 hashes is compared against the user's unhashed string on-the-fly. This happens entirely client-side, making access instant and un-trackable.
2.  **The `?shared=true` Student Bypass Protocol:**
    Teachers who have unlocked the lesson can click **"Copy Student Link"** from the embedded Host Utility Bar. This appends `?shared=true` to the URL. When a student loads the URL, the client-side router automatically bypasses the passcode lock, rendering the vocabulary and round blocks cleanly. This makes access seamless for students while protecting the teacher's secret passcode.
3.  **Hardware-Bound Local Licenses (The "Offline Key" system):**
    To separate entire paid sub-products (like unlocking the entire Karaoke songbook or Courses archive), students receive a cryptographic license key (e.g., `COSY-KARAOKE-XXXX-XXXX`). On entry, the client-side app decrypts the key locally to confirm its validity, writing an authorization token to `localStorage`. No cloud ping is required, ensuring 100% offline-first compliance.

---

## 5. Pedagogical & UX Distinctions: Paid vs. Free

To justify the paid separation, we enforce strict pedagogical standards distinguishing premium elements from public ones.

| Feature Area | Free Tier (`cosylanguages.github.io`) | Paid/Premium Products (`courses/` & `events/`) |
|--------------|---------------------------------------|------------------------------------------------|
| **Content Scope** | Static Grammar Manuals, standard spelling tables, single-word vocabulary flashcards. | Highly contextual narrative content, multi-round thematic debates, curated cinema character breakdowns, fully localized song histories. |
| **Linguistic Depth** | Level A1-B1 general words. | Bespoke Target Language Focus, including advanced Spotlight Verbs, specialized idioms, and grammatical nuances. |
| **Interactivity** | Standard self-study inputs (multiple choice, simple matching). | Interactive roleplays, typewriter ledgers, word-placement games, synchronous video/audio brief players. |
| **Teaching Support**| None. Designed for autonomous solo-study. | **Teacher Support Notes (TSN)** integrated dynamically into Private Lesson modes, providing step-by-step facilitation prompts. |
| **Visual Styling** | Minimalist, clean, utility-driven interface. | Immersive boutique themes (custom watermarks, custom color variables, Polaroid/Cassette framing, rich CSS gradients). |

---

## 6. Migration & Deployment Roadmap

To move towards this isolated multi-domain architecture without breaking the current live production platform, we map a phased migration roadmap:

### Phase 1: Directory Restructuring & Domain Simulation (Immediate)
*   Separate the physical file directories in the monorepo matching the `/apps/` pattern.
*   Simulate multi-domain setups locally by mapping environment hosts in local development configs (e.g., configuring `nginx` or `localhost` ports to route `/events/` and `/courses/` independently).

### Phase 2: Static Asset Extraction & Token Sharing
*   Extract global tokens into a shared root directory (`/shared/`).
*   Ensure that relative stylesheet links are mapped using deterministic, build-time absolute prefixes (or relative path depth rules) so that deployment pipelines correctly assemble assets.

### Phase 3: Domain DNS Configuration & CI/CD Pipelines
*   Configure the deployment pipelines (GitHub Actions) to deploy different sub-directories of the monorepo to independent domain targets:
    *   `apps/free-portal` -> `cosylanguages.com`
    *   `apps/premium-courses` -> `courses.cosylanguages.com`
    *   `apps/premium-events` -> `events.cosylanguages.com`
*   Ensure the Service Worker (`sw.js`) in each application is scoped strictly to its subdomain to prevent cache collisions.

### Phase 4: LocalStorage Origin Boundaries & Cross-Subdomain Synchronization
*   **The Origin Boundary Challenge:** `localStorage` is scoped strictly to the origin (protocol + host + port). When dividing the platform across `cosylanguages.com`, `courses.cosylanguages.com`, and `events.cosylanguages.com`, the student's local state (language preference in `cosy_ui_lang`, completed practice counters, audio volume controls, and active licenses/keys) becomes naturally isolated within each subdomain.
*   **The "Slow-Tech" Synchronization Strategy:** To address this while adhering to our anti-database, 100% client-side privacy philosophy:
    1.  *Independent Domain Sovereignty (Default):* Embrace decoupled local storage where possible. Since "Premium Courses" and "Thematic Speaking Clubs" are distinct products, they maintain independent local progress.
    2.  *Lightweight Iframe Bridge (Optional):* For critical global keys (like UI language synchronized via `cosy_ui_lang` and licensing checks), load a hidden iframe from the main portal (`cosylanguages.com/sync-bridge.html`) inside the subdomains. This iframe communicates via a secured HTML5 `postMessage` protocol, passing and writing verified local states across subdomain boundaries without any external server telemetry or cloud storage syncing.

### Phase 5: Subdomain-Specific PWA Manifests & Service Worker Partitioning
*   **Boutique App Separation:** Each subdomain will deliver a dedicated, highly tuned `manifest.json` file. This lets students and teachers install "COSY Courses" (`courses.cosylanguages.com`) and "COSY Events" (`events.cosylanguages.com`) as completely separate standalone apps on their devices (mobile and desktop), complete with tailored launcher icons, independent theme colors, and clean immersion headers.
*   **Service Worker Scoping:** Ensure that each app's `sw.js` is register-scoped strictly to its subdomain root directory (`/`). This partitions the offline storage caches, avoiding cache collisions and asset overwrites between different applications.
*   **Offline-First Content Seeding:** Pre-cache lists in `sw.js` are configured to bundle subdomain-specific static HTML assets, custom web components (like `<vim-choice>`), and audio players to guarantee 100% offline functionality.

### Phase 6: Shared Asset Distribution, Relative-to-Absolute Path Resolution & Build Compilation
*   **Monorepo Compile Pipelines:** Because subdomains cannot use relative pathways (e.g., `../../../shared/`) to access assets above their root folder at runtime, we must configure a build compile step.
*   **Build-Time Copying:** During CI/CD packaging, the contents of the `/shared/` folder (such as standard layout tokens in `shared/css/tokens.css` and the i18n/engine loader in `shared/js/shared-core.js`) will be programmatically compiled and copied into the distribution directories of each individual application.
*   **Asset Path Rewriting:** Our build process (`scripts/minify.js` and custom compilation task scripts) will dynamically replace development-time relative paths with absolute, domain-isolated path structures or subdomain root-relative paths (`/css/...`, `/js/...`), ensuring absolute path resolution consistency in production.

### Phase 7: Comprehensive Multi-Domain Verification, Audits & Rollback Plan
*   **Playwright Multi-Domain Simulation:** Integrate automated end-to-end tests inside our Playwright suites. These tests will simulate a multi-subdomain environment locally using dynamic port bindings or host redirects (e.g., matching the multi-domain ports on localhost: `localhost:8080` for free-portal, `localhost:8081` for premium-courses, and `localhost:8082` for premium-events).
*   **Visual Contrast and Accessibility Auditing:** Run automated accessibility checks (`@axe-core/playwright`) and contrast audits across the separated systems to confirm compliance with WCAG 2 AA contrast rules under both light and dark themes.
*   **Zero-Downtime Rollback Plan:** In the event of a critical subdomain DNS routing issue, asset resolution failure, or caching bug, we maintain a deployment-ready single-domain branch. This rollback script quickly compiles the monorepo back into a single unified directory structure hosted under the root domain, reverting the multi-domain separation without loss of curriculum data.

---

## 7. Conclusion

By separating COSYlanguages into a series of distinct main products and boutique-styled sub-product micro-brands, we preserve our commitment to client-side sovereignty and slow-tech simplicity, while creating a highly premium, visually breathtaking learning environment. This architecture allows each sub-product (such as Karaoke Club, Cinema Club, and thematic Speaking Clubs) to scale independently without code bloat, ensuring that our technical implementation remains as clean as our pedagogy.

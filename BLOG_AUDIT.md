# Comprehensive Blog Architecture Audit — COSYlanguages

> **System Overview & Static Environment Note:**
> COSYlanguages is hosted on GitHub Pages as a purely static site with no backend server. Build-time HTML compilation and metadata generation are executed via Node.js scripts (`scripts/build-blog.js`) and GitHub Actions workflows (`.github/workflows/blog-build.yml`), while runtime interactive features rely strictly on vanilla client-side JavaScript (`js/pages/flipbook.js`, `js/core/engine.js`). In accordance with the core architecture principle, **no translation fallbacks are used**; each language UI and post content is written fully in its native target language.

---

## 1. Where the Blog Lives & How Posts Are Stored and Rendered

### Directory and File Map
- **Root Directory (`blog/`):**
  - **Main Editorial Hub:** `blog/index.html` (Magazine issue selector, topic filters, search, and dynamic card feed).
  - **Posts Source Directory:** `blog/posts/` (Contains 22 Markdown source files with YAML frontmatter).
  - **Audio Scripts Directory:** `blog/audio-scripts/` (Contains recording scripts for page audio guides across English, French, and Russian).
  - **JSON Metadata Indices:**
    - `blog/posts.json` (Generated catalog combining built blog posts and static guides for runtime filtering and card rendering).
    - `blog/guides.json` (Source configuration file defining static HTML curriculum guides and master semantic trees).
  - **Static & Compiled HTML Pages:** 22 compiled blog post HTML files and 15 standalone HTML curriculum guides residing directly inside `blog/` (e.g. `blog/replace-50-overused-phrases.html`, `blog/top-100-a0-a1-french.html`).

### Associated Scripts and Stylesheets
- **Build Scripts:**
  - `scripts/build-blog.js` (Node.js build pipeline that reads YAML frontmatter from `blog/posts/*.md`, parses Markdown via `marked` and `js-yaml`, chunks content into `<section class="flipbook-page">` spreads with embedded `<audio>` players, inserts template wrappers, writes HTML files to `blog/*.html`, and compiles `blog/posts.json`).
- **Runtime JavaScript:**
  - `js/pages/flipbook.js` (Manages 2D page-switching flipbook spreads, expandable Founder presentation cards, distraction-free Podcast Presentation mode, and focal section zooming).
  - `js/core/engine.js` & `js/core/i18n.js` (Inject navigation headers, handle user auth state, and apply core site interactions).
- **Stylesheets:**
  - `css/blog.css` (Blog feed layouts, magazine issue typography with `Fraunces` serif and `DM Sans`, CSS grid spreads, expandable Founder cards, and zoom overlays).
  - Shared global tokens and layouts: `css/tokens.css`, `css/base.css`, `css/components.css`, `css/layout.css`.

### Content Storage and Rendering Pipeline
1. **Markdown Posts (`blog/posts/*.md`):**
   - Articles are written in Markdown with a YAML frontmatter header containing metadata (`title`, `date`, `category`, `summary`, `author`, `tags`, `issue_volume`, `issue_title`, `cefr_level`, `vibe`, `founder_notes`, `audio_podcast`).
   - Run `node scripts/build-blog.js` (or trigger CI via `.github/workflows/blog-build.yml`).
   - `marked.js` converts Markdown to HTML. `formatFlipbookContent()` splits the rendered HTML by `<hr>` or heading tags into page sections (`<section class="flipbook-page">`), injecting page-specific audio guide elements (`<div class="page-audio-guide">`) pointing to `../audio/blog/{slug}-page-{pageNum}.mp3`.
   - The compiled post HTML page is written directly to `blog/{slug}.html`.
2. **Static HTML Curriculum Guides (`blog/*.html`):**
   - Complex interactive guides (such as `top-10-verbs.html` or `top-100-a0-a1-*.html`) are maintained directly as full HTML files in `blog/`. Their metadata is registered in `blog/guides.json`.
3. **Runtime Feed Aggregation (`blog/index.html`):**
   - When a user visits `blog/index.html`, `applyBlogFilters()` fetches `blog/posts.json` via standard `fetch()` and dynamically builds post cards with issue badges, CEFR levels, and category tags.

---

## 2. Table of All Existing Blog Posts and Guides

| Title | Language | Format | Level | Word Count | Images Used | Interactive Elements |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Arrêtez de dire 'Très' ! 50 adjectifs forts pour enrichir votre vocabulaire** | French (`fr`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 751 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Arrêtez de dire ces 50 expressions répétitives ! Alternatives naturelles pour le niveau intermédiaire** | French (`fr`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 878 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Arrêtez de traduire ! 10 structures de phrases réutilisables pour parler dès le premier jour** | French (`fr`) | Markdown (`blog/posts/`) -> Compiled HTML | A0–A1 / A2 | 816 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Basta dire 'Molto'! 50 aggettivi forti per arricchire il tuo vocabolario** | Italian (`it`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 674 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Basta ripetere queste 50 frasi! Alternative naturali per il livello intermedio** | Italian (`it`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 609 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Basta tradurre! 10 strutture di frasi riutilizzabili per parlare fin dal primo giorno** | Italian (`it`) | Markdown (`blog/posts/`) -> Compiled HTML | A0–A1 / A2 | 740 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **How We Built the COSY Master Curriculum Across 13 Languages** *(Draft)* | English (`en`) | Markdown Source (`blog/posts/`, `draft: true`) | A0–B2 | 52 | None | Draft File (Skipped by build script) |
| **I 10 verbi più abusati e i loro sinonimi precisi per il livello intermedio (B1–B2)** | Italian (`it`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 613 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Les 10 verbes surutilisés et leurs synonymes précis pour le plateau intermédiaire** | French (`fr`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 917 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **My Top 5 Favourite English Grammar Rules for Intermediate Learners** | English (`en`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 1,828 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Overcoming the Intermediate Plateau (B1 to B2)** *(Draft)* | English (`en`) | Markdown Source (`blog/posts/`, `draft: true`) | A0–B2 | 57 | None | Draft File (Skipped by build script) |
| **Stop Saying 'Very'! 50 Stronger Words Every Intermediate English Learner Should Know** | English (`en`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 845 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Stop Saying These 50 Phrases! Natural Conversational Upgrades for Intermediate English** | English (`en`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 2,250 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Stop Translating! 10 Reusable Sentence Frames That Let You Speak From Day One** | English (`en`) | Markdown (`blog/posts/`) -> Compiled HTML | A0–A1 / A2 | 1,582 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Top 10 Essential Verbs for Absolute Beginners (A0–A1) across All 14 Languages** | Multilingual (14 languages) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 14,137 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode; 🔽 Multi-language Select Filters |
| **Top 10 Overused Verbs and Their Precise Synonyms for the Intermediate Plateau** | English (`en`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 1,489 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Top 100 A0–A1 Semantic Master List (14 Languages)** | Multilingual (14 languages) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 2,404 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Armenian A0–A1 Master Guide** | Armenian (`hy`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,847 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Bashkir A0–A1 Master Guide** | Bashkir (`ba`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,895 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Breton A0–A1 Master Guide** | Breton (`br`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,433 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 English A0–A1 Master Guide** | English (`en`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 2,667 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 French A0–A1 Master Guide** | French (`fr`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 3,464 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Georgian A0–A1 Master Guide** | Georgian (`ka`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,716 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 German A0–A1 Master Guide** | German (`de`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,690 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Greek A0–A1 Master Guide** | Greek (`el`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 3,244 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Italian A0–A1 Master Guide** | Italian (`it`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 3,259 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Portuguese A0–A1 Master Guide** | Portuguese (`pt`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,635 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Russian A0–A1 Master Guide** | Russian (`ru`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 4,280 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Spanish A0–A1 Master Guide** | Spanish (`es`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,502 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Top 100 Tatar A0–A1 Master Guide** | Tatar (`tt`) | Standalone HTML Guide (`blog/`) | A0–A1 / A2 | 1,882 | None (Header Logo only) | 🎙️ Expandable Founder Deck; 📺 Podcast View Mode |
| **Welcome to the COSY Editorial & Learning Corner** | English (`en`) | Markdown (`blog/posts/`) -> Compiled HTML | A0–A1 / A2 | 151 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Why Speaking-First is the Only Way to True Fluency** *(Draft)* | English (`en`) | Markdown Source (`blog/posts/`, `draft: true`) | A0–B2 | 61 | None | Draft File (Skipped by build script) |
| **Σταματήστε να επαναλαμβάνετε αυτές τις 50 φράσεις! Φυσικές εναλλακτικές για το B1–B2** | Greek (`el`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 491 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Σταματήστε να λέτε 'Πολύ'! 50 ισχυρά επίθετα για να εμπλουτίσετε το λεξιλόγιό σας** | Greek (`el`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 413 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Σταματήστε τη μετάφραση! 10 επαναχρησιμοποιήσιμες δομές προτάσεων για να μιλάτε από την πρώτη μέρα** | Greek (`el`) | Markdown (`blog/posts/`) -> Compiled HTML | A0–A1 / A2 | 686 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Τα 10 πιο συχνά ρήματα και τα ακριβή συνώνυμά τους για το ενδιάμεσο επίπεδο (B1–B2)** | Greek (`el`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 498 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Топ-10 перегруженных глаголов и их точные синонимы для среднего уровня (B1–B2)** | Russian (`ru`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 522 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Хватит говорить 'Очень'! 50 сильных прилагательных для богатого словарного запаса** | Russian (`ru`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 401 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Хватит переводить! 10 универсальных фраз-шаблонов для разговорной речи с первого дня** | Russian (`ru`) | Markdown (`blog/posts/`) -> Compiled HTML | A0–A1 / A2 | 625 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |
| **Хватит повторять эти 50 фраз! Естественные разговорные замены для B1–B2** | Russian (`ru`) | Markdown (`blog/posts/`) -> Compiled HTML | B1–B2 | 526 | None (Header Logo only) | 🎧 Page Audio Guides; 🎙️ Expandable Founder Deck; 📖 Flipbook Spreads; 📺 Podcast View Mode |

---

## 3. Shared vs. Duplicated CSS and JS Across Posts

### Shared Infrastructure
- **Core CSS Stack:**
  All blog post pages load five global stylesheets in `<head>`:
  - `../css/tokens.css` (CSS variables for colors, typography, spacing)
  - `../css/base.css` (Resets, base typography, elements)
  - `../css/components.css` (Buttons, cards, badges)
  - `../css/layout.css` (Header navigation, footer layout, container wrappers)
  - `../css/blog.css` (Blog-specific styles: `.blog-header`, `.founder-presentation-card`, `.flipbook-page`, `.flipbook-toolbar`, `.podcast-presentation-mode`, `.zoom-focus-overlay`).
- **Core JS Stack:**
  All compiled Markdown post pages load the exact same script array at the end of `<body>`:
  - `../js/data/languages.js`
  - `../js/core/engine.js`
  - `../js/core/i18n.js`
  - `../js/core/ui.js`
  - `../js/pages/flipbook.js`

### Duplication & Inconsistencies
1. **Hardcoded HTML Structure in Compiled Posts vs. Standalone Guides:**
   - **Compiled Posts (`blog/*.html` generated via `build-blog.js`):** Inherit a strictly uniform template layout containing `<nav id="cosy-nav">`, `.founder-presentation-card`, `.flipbook-toolbar` (inserted dynamically via `flipbook.js`), and the standard footer.
   - **Standalone HTML Guides (`blog/top-100-a0-a1-*.html` & `blog/top-10-verbs.html`):** The HTML shell, header navigation, sidebar, and footer are hardcoded directly into each static guide file. They lack `.flipbook-page` sections and audio guide players, meaning `flipbook.js` initializes only the Founder card and zoom overlay without creating flipbook page controls.
2. **Duplicated Footer Markup:**
   - Standard compiled post pages contain identical hardcoded footer markup. Although `scripts/sync-footer.js` syncs `components/footer.html` across pages, the static HTML markup is duplicated across all 37 HTML files rather than being rendered dynamically or via native web components.

---

## 4. Technical Blockers for Key Feature Goals

### (a) Per-Post Visual Identity
- **Current Limitation:**
  `scripts/build-blog.js` generates all Markdown posts using a single rigid HTML template string. The container `.blog-header` receives `data-category`, but there is no mechanism for per-post color palettes, custom background gradients, cover art variations, or custom font pairings.
- **Architectural Blocker:**
  Frontmatter metadata lacks fields for visual themes (e.g., `theme_color`, `accent_palette`, `cover_style`). `css/blog.css` uses static global variables (`var(--teal)`, `var(--surface)`). To support distinct visual identities per post without breaking global theme consistency, the build script must accept visual tokens in frontmatter and inject scoped CSS variables or theme classes (e.g. `<article class="post-full-content" style="--post-accent: #e11d48;">`).

### (b) Page-Flip Transitions
- **Current Limitation:**
  `js/pages/flipbook.js` implements page switching via immediate DOM toggling (`display: block` / `display: none`). There are no CSS 3D transform transitions or smooth page-turn animations.
- **Architectural Blocker:**
  The current DOM structure stacks `.flipbook-page` sections inside a standard flex/block container (`.post-full-content.flipbook-mode`). For true 3D book-fold page-turn transitions:
  - The container requires CSS perspective properties (`perspective: 1400px; transform-style: preserve-3d;`).
  - Active and adjacent pages must be structured as dual-page spreads (Left Page / Right Page) with fixed aspect ratios or relative position overlays to allow hardware-accelerated CSS `transform: rotateY()` transitions.
  - Non-active pages currently have `display: none`, which destroys ongoing CSS transitions. Transition state management must replace `display: none` with class-based opacity, pointer-events, and rotation transforms (`.flipbook-page.page-left`, `.flipbook-page.page-right`, `.flipbook-page.turning`).

### (c) Script-Driven "Stage" Mode with Camera Zoom
- **Current Limitation:**
  `js/pages/flipbook.js` currently provides `initZoomControls()`, which scales an individual `.zoomable-section` element using `transform: translate(-50%, -50%) scale(...)` when in Podcast Presentation Mode. However, this is an ad-hoc click interaction, not a scriptable or automated timeline presentation engine.
- **Architectural Blocker:**
  - **No Presentation Timeline Script:** There is no data structure or JSON manifest mapping slide timestamps or step indices to camera focal coordinates (e.g., `{ step: 1, target: "#section-2", zoom: 1.4, duration: 800ms }`).
  - **Transform Hierarchy Pitfalls:** Zooming individual child elements using CSS `transform` breaks page layout flow, causes z-index clipping, and cuts off content on mobile viewports.
  - **Camera Stage Engine Solution:** A true "stage" mode requires fixing the viewport stage container and transforming a single canvas/stage wrapper (`.stage-viewport > .stage-canvas`) via CSS `transform: translate3d(x, y, z) scale(s)`, moving the viewport smoothly between target anchor elements (`data-stage-anchor="step-1"`).

---

## 5. Reusability and Conflicts: `print-zine.html` and `sw.js`

### `print-studio/print-zine.html` Evaluation
- **Current Role:**
  `print-studio/print-zine.html` is an 8-page pocket zine generator. It renders a 4x2 grid representing a landscape A4 paper sheet with upside-down folding panel rotations (`transform: rotate(180deg)`), designed for physical printing and paper folding.
- **Reusability vs. Conflicts:**
  - **High Reusability for Offline Print Exports:** The folding grid math and `@media print` rules can be directly repurposed into a "Print as Pocket Zine" export feature for blog posts.
  - **Architectural Differences:** `print-zine.html` dynamically fetches 6 vocabulary items from `COSYdata` (`https://cosylanguages.github.io/COSYdata/`) via `fetch()` and constructs mini-cards. Blog posts, in contrast, contain long-form article text. To export blog posts into a pocket zine, `build-blog.js` or a client-side layout script would need to slice the post's 8 pages into the exact 4x2 print grid matrix.

### Service Worker (`sw.js`) Evaluation
- **Current Caching Strategy:**
  - `sw.js` uses a **Network-First** strategy for all code files (`.html`, `.js`, `.css`) and **Cache-First with Background Revalidation** for images and assets.
  - The static asset cache manifest (`STATIC_ASSETS`) explicitly pre-caches top-level site pages, core CSS, and core JS, but **does not hardcode individual blog post URLs**.
- **Reusability vs. Conflicts:**
  - **Zero Conflicts:** The Network-First strategy ensures that whenever `scripts/build-blog.js` compiles updated HTML post files or updates `blog/posts.json`, users immediately receive the fresh content without stale cache lock-in.
  - **Offline Reusability:** Because navigation to any `blog/*.html` page is caught by the fetch handler's Network-First fallback (`fetch(e.request).catch(() => safeCacheMatch(e.request))`), any blog post previously visited by a user is automatically cached and available offline.

---

## 6. Recommended Minimal Vanilla Architecture (ES Modules, Frameworkless)

To maintain COSYlanguages' commitment to zero heavy dependencies, static GitHub Pages hosting, and native browser performance, the following vanilla architecture is recommended for the blog system:

```
blog/
├── index.html                  # Editorial Hub & Feed
├── posts.json                  # Aggregated metadata index (built automatically)
├── guides.json                 # Static curriculum guides manifest
├── audio-scripts/              # Audio scripts for voice narrations
├── posts/                      # Markdown source files with YAML frontmatter
│   └── *.md
├── modules/                    # Clean Vanilla ES Modules (Zero Build / Frameworkless)
│   ├── blog-feed.js            # Feed filtering, search, and issue management
│   ├── flipbook-engine.js      # 3D Flipbook spread transitions & page state
│   ├── stage-director.js       # Script-driven camera zoom & stage presenter
│   └── zine-exporter.js        # Converts post pages into printable 8-page zines
└── *.html                      # Statically built HTML post pages
```

### Key Architectural Standards

1. **Vanilla ES Modules (`<script type="module">`):**
   - Replace monolithic global scripts with modular ES modules in `blog/modules/`.
   - Browser-native imports (`import { StageDirector } from './modules/stage-director.js'`) run directly on GitHub Pages with zero client-side bundler requirement.

2. **Enhanced Frontmatter Schema in `build-blog.js`:**
   Expand YAML frontmatter in `blog/posts/*.md` to support visual identity and stage scripting without modifying existing core logic:
   ```yaml
   ---
   title: "My Top 5 Favourite English Grammar Rules"
   date: "2026-10-15"
   category: "Resource List"
   theme_accent: "#0d9488"
   theme_bg: "#faf7f2"
   stage_script:
     - step: 1
       target: "#rule-1"
       zoom: 1.25
       caption: "Rule 1: The flexible -ish suffix"
   ---
   ```

3. **Stage Director Engine (`stage-director.js`):**
   Implement a lightweight stage director using standard Web Animations API or CSS transitions applied to a single wrapper:
   ```javascript
   export class StageDirector {
       constructor(stageElement, script) {
           this.stage = stageElement;
           this.script = script;
           this.currentIndex = 0;
       }
       goToStep(index) {
           const step = this.script[index];
           const target = document.querySelector(step.target);
           const rect = target.getBoundingClientRect();
           // Calculate offset relative to stage center and apply hardware-accelerated transform
           this.stage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${step.zoom})`;
       }
   }
   ```

4. **Zero-Regression Build Pipeline:**
   Keep `scripts/build-blog.js` as the single static compiler. The script continues parsing Markdown and generating static `.html` files, ensuring search engines and GitHub Pages deliver pre-rendered, fast-loading, offline-capable HTML for every article.

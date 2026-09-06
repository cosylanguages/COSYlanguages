# Contributing to COSYlanguages

Thank you for your interest in contributing to **COSYlanguages**! We are building a visitor-first, public-access language learning platform focused on genuine learning over monetisation, guided by our core principle: **no translation fallback**.

---

## 🛠️ Contribution Guidelines

### 1. Allowed & Welcomed Contributions
You are warmly invited to submit Pull Requests for:

- **Vocabulary & Lexicon (`vocabulary/`):** Add new vocabulary entries, idioms, or collocations across target languages.
- **Grammar Content (`reference-grammar/` & `manuals/`):** Add machine-readable JSON rules in `reference-grammar/` or rich human-facing CEFR HTML manual topics in `manuals/`.
- **Syllabus & Curriculum (`curriculum/`):** Expand CEFR course lesson units across progressive tracks (`general`, `spoken`, `professional`, `travelling`, `relocation`, `exam`).
- **Interactive Minigames & Scenes (`games/`, `COSYgames/`):** Add interactive practice minigames or Scene Match concrete noun environment scenes.
- **Speaking Clubs & Events (`events/`, `COSYevents/`):** Expand thematic speaking club decks and multimedia event night session materials.
- **Linguistic Micro-Apps (`apps/`, `COSYtools/`):** Improve or build standalone offline linguistic reference engines (verb conjugators, gender trainers, prepositional regime engines).
- **UI & Accessibility Improvements (`css/`):** Improve responsive design, dark mode contrast, screen reader support, or keyboard navigation.

### 2. Requiring Review & Maintainer Approval
Please open an issue to discuss before submitting Pull Requests that modify:

- Core JavaScript platform logic or engine loaders (`js/core/`).
- Automated search cross-reference index generation scripts or unified index outputs (`data/index/`).
- Schema definitions or breaking data shape modifications (`project/docs/SCHEMA.md`, `curriculum/_schema/`).
- Central design system tokens (`css/cosy-tokens.css`).

---

## 📖 Sources of Truth for Data Shape, Taxonomy & Styling

Before creating or editing content, please consult our primary specifications:

1. **Data Shape & Entry Schema ([`project/docs/SCHEMA.md`](project/docs/SCHEMA.md)):**
   - Defines mandatory fields (`id`, `word`, `lang`, `level`, `theme`, `form`, `definitions`, `transcription`, `emoji`).
   - Mandates globally unique, permanent canonical entry IDs in `{lang}_{level}_{theme_slug}_{sequence}` format.
   - Prohibits legacy fields (such as "opposite" string or "imageUrl").

2. **Grammar System & Course Taxonomy ([`CONTENT_ARCHITECTURE.md`](CONTENT_ARCHITECTURE.md)):**
   - Details the dual-system grammar architecture: Machine-Readable JSON (`reference-grammar/`) and Human-Facing CEFR HTML Manuals (`manuals/`).
   - Specifies the canonical bidirectional linkage protocol between JSON entries and HTML manuals.
   - Outlines the 6 premium course track taxonomies (`general`, `spoken`, `professional`, `travelling`, `relocation`, `exam`).

3. **Design Tokens & Styling Guidelines ([`docs/design-tokens.md`](docs/design-tokens.md)):**
   - Details CSS custom properties defined in `css/cosy-tokens.css`.
   - Defines the six premium track color signatures, base surface/ink palette, typography scales, spacing scales, border radiuses, and elevation shadows.
   - Mandates that consumer repos link `css/cosy-tokens.css` via `raw.githubusercontent.com` pinned to a specific commit or release tag (never `main`).

---

## 📋 Local Development & How to Submit a Pull Request

1. **Fork the Repository:** Create a fork of `COSYlanguages` on GitHub.
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/add-greek-a2-vocabulary
   ```
3. **Run Local Server:**
   Serve the repository locally using any standard static HTTP server:
   ```bash
   npx serve .
   ```
   Or open `index.html` directly in your web browser.
4. **Validate Data Integrity & Links:**
   Run the project verification scripts to ensure no broken links or schema collisions:
   ```bash
   python3 project/scripts/verify_language_pages.py
   python3 scripts/verify_index_and_ids.py
   ```
5. **Commit & Push:** Commit your changes with concise, descriptive commit messages and push to your fork.
6. **Open a Pull Request:** Submit a Pull Request targeting the `main` branch of `COSYlanguages`.

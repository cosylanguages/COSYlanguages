# Contributing to COSYlanguages

Thank you for your interest in contributing to **COSYlanguages**! This repository is the public front door of the COSY ecosystem: a static, no-build GitHub Pages site that hosts the language hubs, the course catalogue, the placement quiz, the price calculator and the "Hybrid & Community" pages.

There is no backend and no build step. Open `index.html` directly, or serve the folder with any static server.

---

## 🛠️ Contribution Guidelines

### 1. Allowed & Welcomed Contributions
You can freely submit Pull Requests without prior maintainer approval for:
- **Content & Copy**: Fix typos, improve lesson descriptions, course blurbs, or About/Privacy text.
- **Translations**: Improve interface strings in `data/ui/<lang>.json` (used by `data-translate-key`) or the legacy `js/i18n/<lang>.json`.
- **Accessibility & UI Bug Fixes**: Improve keyboard navigation, contrast, responsive layout, or skip-link behaviour.
- **Link & Data Corrections**: Repair broken links, or correct the language/comparative data used by the pages.

### 2. Requiring Review & Maintainer Approval
Please open an issue to discuss before submitting PRs that affect:
- **Page Structure**: Adding or removing top-level pages, or changing the URL layout (URLs are indexed and referenced by sibling repositories).
- **Shared Engine**: Substantial refactoring of `js/core/engine.js`, `js/core/i18n.js`, or `js/core/config.js`.
- **Data Schemas**: Structural changes to the JSON in `data/ui/`, `js/data/`, or `js/i18n/`.
- **Cross-repository contracts**: See "Paths used by other repositories" below.

---

## 🎨 Design Tokens

This repository owns the canonical design tokens at `shared/css/tokens.css`. The local `css/tokens.css` is a thin import bridge:

```css
@import "fonts.css";
@import "../shared/css/tokens.css";
```

Pages should link `css/tokens.css` (or the correct relative path from a subdirectory) rather than importing `shared/css/tokens.css` directly. Sibling repositories (for example COSYtools) sync these tokens from this repository; when you change a token, check the consumers before merging.

---

## 📋 How to Submit a Pull Request

1. Fork the `COSYlanguages` repository.
2. Create a feature branch (`git checkout -b feature/fix-french-copy`).
3. Validate your changes locally in a browser (and, where relevant, run the tests below).
4. Ensure every edited JSON file is valid JSON.
5. Commit your changes with clear, descriptive commit messages.
6. Push to your fork and submit a Pull Request.

### Local Checks

```bash
# Unit tests (placement quiz and daily strip)
node --test tests/*.test.js

# HTML markup validation
npx html-validate '**/*.html'
```

---

## 📌 Paths used by other repositories (do not move or rename)

The following paths in this repository are consumed by sibling ecosystem repositories through absolute `https://cosylanguages.github.io/COSYlanguages/...` URLs. They must never be moved, renamed, or removed without coordinating an update in the consumers:

- `index.html` (the shared entry point and deep-link targets such as `#languages`, `#courses`, `#calculator`, `#start`)
- `login.html`
- `privacy.html`
- `comparative/index.html`
- `hybrid/index.html`
- `images/logos/cosylanguages.png`
- `shared/css/tokens.css` (design-token source)
- `languages/it.html` (language redirect stub)

If you need to relocate any of these, open an issue first so the consumers can be updated in the same release.

---

## 📄 License

By contributing, you agree that your contributions are licensed under the terms of the repository [LICENSE](LICENSE).

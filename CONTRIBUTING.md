# Contributing to COSYtools

Thank you for your interest in contributing to **COSYtools**! We are building a suite of 12 offline reference engines (conjugation, gender & cases, prepositional regimes, and syntax) for language learners.

---

## 🛠️ Contribution Guidelines

### 1. Allowed & Welcomed Contributions
You can freely submit Pull Requests without prior maintainer approval for:
- **New Data & Vocabulary Entries**: Expand verb conjugation databases, noun gender tables, or preposition regime datasets within an existing tool's JSON schema (e.g., `apps/fr-conjugeur/data/`, `apps/en-verb-prep/data/`, etc.).
- **Data Corrections & Enhancements**: Fix definitions, stress accent marks, grammatical rules, or example sentences across supported tools.
- **UI & Accessibility Bug Fixes**: Improve CSS accessibility, responsive layout behavior, keyboard navigation, or offline PWA capabilities.
- **Translations & Localized Strings**: Improve interface strings and helper labels.

### 2. Requiring Review & Maintainer Approval
Please open an issue to discuss before submitting PRs that affect:
- **New Tool Folders**: Adding a new reference application directory under `apps/`.
- **Core Engine Architecture**: Major refactoring of shared primitives (`shared/`) or app engines (`js/engine.js`).
- **Data Schema Changes**: Structural alterations to existing JSON schemas or database fields.

---

## 🎨 Design Tokens Linking Policy

> **CRITICAL POLICY:**
> All HTML entry points and tools **MUST** import or link `css/cosy-tokens.css` via a `raw.githubusercontent.com` URL **pinned to a specific commit SHA or release tag**.
>
> **NEVER** reference `main` directly in consumer imports.

### Example Valid Direct CSS `<link>` Tag
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/cosylanguages/COSYlanguages/ba14a13d3c32e84f5c8ebbabd2d8b85c060d04a4/css/cosy-tokens.css">
```

---

## 📋 How to Submit a Pull Request

1. Fork the `COSYtools` repository.
2. Create a feature branch (`git checkout -b feature/expand-fr-verbs`).
3. Validate your changes locally in a browser.
4. Ensure all JSON data files conform to valid JSON formatting.
5. Commit your changes with clear, descriptive commit messages.
6. Push to your fork and submit a Pull Request.

# COSYlanguages — Micro-Frontend Product Directory Strategy

This workspace segments the COSYlanguages static ecosystem into decoupled, product-specific micro-frontends under `apps/` while sharing design tokens and core utilities inside `shared/`.

## Directory Ownership
- `apps/free-portal/`: The free platform containing grammar manuals, practice hub, games, and placement quiz.
- `apps/premium-courses/`: Decoupled premium courses (General, Professional, Relocation, Spoken, Travelling, Exam Prep).
- `apps/premium-events/`: Premium events sub-brands (Thematic Speaking Clubs and Interactive Multimedia Nights).
- `apps/print-studio/`: Print tools generator and heavy pdf generation utilities.
- `shared/`: Common workspace tokens and utilities.

## Core Rules
1. **Design Tokens Only:** `shared/css/tokens.css` contains universal primitives only. Product-specific CSS rules belong to each product app.
2. **Independent Caching:** Each app has its own service worker (`sw.js`) and cache namespace.
3. **Product-Independent Manifests:** Unique `manifest.json` configurations per app allow independent "Add to Home Screen" installations.
4. **Sovereign, Decentralized Entitlements:** Cryptographic gates and locks are managed in a namespaced manner using `COSY-{PRODUCT}-{SUBPRODUCT}-{TIER}` key mapping, ensuring privacy sovereignty.

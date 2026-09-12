# COSYlanguages Architecture Decision Record (ADR): Monorepo & Paid Product Separation

## Status
**Committed / Active** — August 2026

## 1. Context & Motivation
COSYlanguages operates under a "Slow-Tech" language learning philosophy. We reject centralized databases, cloud-based user tracking, and intrusive remote locks. Instead, we champion:
*   **Student & Teacher Privacy Sovereignty**
*   **100% Client-Side Persistence** (via `localStorage` and `sessionStorage`)
*   **Fully Monolingual Immersion** (learning contents remain strictly in their target languages)

Paid courses live at COSYplatform (https://cosylanguages.github.io/COSYplatform/); paid/converted events live at COSYevents (https://cosylanguages.github.io/COSYevents/).

This document serves as the canonical Architecture Decision Record (ADR) establishing the **`/apps/`** monorepo workspace structure. Moving forward, all new features, sub-products, and brand styles must strictly respect these boundaries to prevent architectural degradation, asset bloat, or namespace collisions.

---

## 2. Monorepo Workspace Structure

The workspace is organized into isolated, self-contained applications under `/apps/` and shared primitives under `/shared/`.

```
cosylanguages-monorepo/
├── shared/                       # Shared design tokens & common engines (No product styling!)
│   ├── css/tokens.css            # Primitive variables ONLY (spacing, radii, core font stacks)
│   └── js/core/engine.js         # Runtime injectors, i18n loaders, and custom components
│
├── apps/                         # Independent micro-frontend workspaces
│   ├── free-portal/              # Public PWA hub (cosylanguages.github.io)
│   │                             # Includes: Grammar manuals, Practice hub, Vocabulary games,
│   │                             # placement quiz, print zines/tools, language index.
│   │
│   └── print-studio/             # Heavy programmatic PDF generators (print.cosylanguages.com)
│                                 # Keeps heavy libraries (jsPDF) isolated from core apps.
```

Paid courses and events are built and hosted in COSYplatform and COSYevents respectively. This repo stays 100% free.

---

## 3. Key Architectural Decisions (ADR)

### ADR-01: Path-Based First, Subdomain-Ready Later
*   **Decision:** Physically partition apps under `/apps/` so that they remain highly isolated, but structure their paths/relative references to support both single-origin hosting (e.g. on GitHub Pages) and subdomain routing.
*   **Rationale:** Avoid unnecessary DNS, routing, and deployment complexities in early phases. This allows the codebase to remain static, serverless, and highly portable.

### ADR-02: Shared Tokens, Isolated Component Styles
*   **Decision:** The file `/shared/css/tokens.css` holds **only** primitive design tokens (spacing scale, border-radius scale, breakpoints, base typography rules). It must **never** contain component styling, theme definitions, or sub-brand specific aesthetic declarations.
*   **Rationale:** Each app/micro-brand is a distinct boutique experience. Visual changes in individual apps must be confined to their respective application workspace (`style.css`), preventing visual regression and cascade pollution across other applications.

### ADR-03: Per-App Service Worker (SW) Scope
*   **Decision:** Split monolithic service worker scripts into separate per-application service workers (e.g., `apps/free-portal/sw.js`). Each service worker is registered and scoped strictly to its own application path.
*   **Rationale:** Cache invalidation or build updates in one application must not invalidate, disrupt, or trigger large cache invalidation downloads for other apps.

### ADR-04: Independent Manifests
*   **Decision:** Deliver a unique `manifest.json` file for each registered application.
*   **Rationale:** Each product can be installed independently as a Progressive Web App (PWA) with its own application name, short name, launcher icons, and brand theme colors, reinforcing the "boutique brand portfolio" concept.

---

## 4. Operational Boundaries

To ensure clean development and avoid structural regressions, developers and agents must adhere to these rules:

1.  **Do Not Pollute `shared/`:** Do not add product-specific helper functions, brand-specific icons, or custom font pairings here.
2.  **Relative Depth Integrity:** When linking shared resources, use the standard monorepo relative depth mapping to keep routes self-healing.
3.  **100% Free Public Entry Point:** This repository hosts only free learning tools and resources.

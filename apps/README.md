# COSYlanguages Architecture Decision Record (ADR): Monorepo & Paid Product Separation

## Status
**Committed / Active** - August 2026

## 1. Context & Motivation
COSYlanguages operates under a "Slow-Tech" language learning philosophy. We reject centralized databases, cloud-based user tracking, and intrusive remote locks. Instead, we champion:
*   **Student & Teacher Privacy Sovereignty**
*   **100% Client-Side Persistence** (via `localStorage` and `sessionStorage`)
*   **Fully Monolingual Immersion** (learning contents remain strictly in their target languages)

As our platform scales, we are decoupling the **Free Platform** (grammar manuals, vocabulary games, placement quiz) from our **Paid/Premium Products** (Structured Courses, Conversational Events, Cinema & Karaoke Nights).

This document serves as the canonical Architecture Decision Record (ADR) establishing the **`/apps/`** monorepo workspace structure. Moving forward, all new features, sub-products, and brand styles must strictly respect these boundaries to prevent architectural degradation, asset bloat, or namespace collisions.

---

## 2. Monorepo Workspace Structure

The workspace is organized into isolated, self-contained applications under `/apps/` and shared primitives under `/shared/`.

```
cosylanguages-monorepo/
├── shared/                       # Shared design tokens & common engines (No product styling!)
│   ├── css/tokens.css            # Primitive variables ONLY (spacing, radii, core font stacks)
│   ├── js/core/engine.js         # Runtime injectors, i18n loaders, and custom components
│   └── js/core/entitlements.js   # Decentralized client-side passcode gateway & entitlements API
│
├── apps/                         # Independent micro-frontend workspaces
│   ├── free-portal/              # Public PWA hub (cosylanguages.github.io)
│   │                             # Includes: Grammar manuals, Practice hub, Vocabulary games,
│   │                             # placement quiz, print zines/tools, language index.
│   │
│   ├── premium-courses/          # Structured level paths (courses.cosylanguages.com or /courses/)
│   │                             # Includes: General, Professional, Relocation, Spoken,
│   │                             # Travelling, and Exam Prep.
│   │
│   ├── premium-events/           # Conversational clubs & nights (events.cosylanguages.com or /events/)
│   │   ├── clubs/                # Thematic Speaking Clubs: wonder/, kus/, mind/, debate/,
│   │   │                         # celebrate/, life/, quotes/
│   │   └── nights/               # Interactive Multimedia Nights: cinema/, karaoke/, game-evening/,
│   │                             # long-reads/, if-you-were/
│   │
│   └── print-studio/             # Heavy programmatic PDF generators (print.cosylanguages.com)
│                                 # Keeps heavy libraries (jsPDF) isolated from core apps.
```

---

## 3. Key Architectural Decisions (ADR)

### ADR-01: Path-Based First, Subdomain-Ready Later
*   **Decision:** Physically partition apps under `/apps/` so that they remain highly isolated, but structure their paths/relative references to support both single-origin hosting (e.g. on GitHub Pages) and subdomain routing (e.g. `courses.cosylanguages.com`).
*   **Rationale:** Avoid unnecessary DNS, routing, and deployment complexities in early phases. This allows the codebase to remain static, serverless, and highly portable.

### ADR-02: Shared Tokens, Isolated Component Styles
*   **Decision:** The file `/shared/css/tokens.css` holds **only** primitive design tokens (spacing scale, border-radius scale, breakpoints, base typography rules). It must **never** contain component styling, theme definitions, or sub-brand specific aesthetic declarations.
*   **Rationale:** Each app/micro-brand is a distinct boutique experience. A visual change in Karaoke Club (e.g., retro vintage plum themes) or Wonder Club (e.g., typewriter/Polaroid scrapbooks) must be confined to its respective application workspace (`style.css`), preventing visual regression and cascade pollution across other applications.

### ADR-03: Per-App Service Worker (SW) Scope
*   **Decision:** Split the monolithic `sw.js` file into separate per-application service workers (e.g., `apps/free-portal/sw.js`, `apps/premium-courses/sw.js`, `apps/premium-events/sw.js`). Each service worker is registered and scoped strictly to its own application path.
*   **Rationale:** Cache invalidation or build updates in one product (e.g. adding new Karaoke songs) must not invalidate, disrupt, or trigger large cache invalidation downloads for other apps (e.g. Free Portal grammar reference sheets).

### ADR-04: Independent Manifests
*   **Decision:** Deliver a unique `manifest.json` file for each registered application.
*   **Rationale:** Each product can be installed independently as a Progressive Web App (PWA) with its own application name, short name, launcher icons, and brand theme colors, reinforcing the "boutique brand portfolio" concept.

### ADR-05: Consolidated Namespaced Entitlements (Cryptographic Gateway)
*   **Decision:** Centralize all access control and lock verification into `/shared/js/core/entitlements.js` utilizing a rigid cryptographic namespaced scheme:
    `COSY-{PRODUCT}-{SUBPRODUCT}-{TIER}`
*   **Example Keys:**
    *   `COSY-EVENTS-WONDER-04-MINIGROUP`
    *   `COSY-EVENTS-KUS-MINIGROUP`
    *   `COSY-COURSES-RELOCATION-FULL`
*   **Rationale:** Moving away from ad-hoc page-by-page passcode scripts makes the system easily auditable, secures pricing models, and prevents direct bypasses while fully respecting the serverless offline-first student-privacy paradigm.

---

## 4. Operational Boundaries

To ensure clean development and avoid structural regressions, developers and agents must adhere to these rules:

1.  **Do Not Pollute `shared/`:** Do not add product-specific helper functions, brand-specific icons, or custom font pairings here.
2.  **Relative Depth Integrity:** When linking shared resources, use the standard monorepo relative depth mapping to keep routes self-healing.
3.  **Strict Link-Free Premium Content:** To ensure a focused pedagogical environment, keep premium session documents completely link-free and reference-locked, bypassing external web URLs unless in explicitly configured Private modes.

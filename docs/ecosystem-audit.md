# COSY Ecosystem Architectural Consistency & Security Audit

**Repository:** `cosylanguages/COSYlanguages`
**Scope:** Interconnected Ecosystem (`COSYlanguages`, `COSYpractice`, `COSYmagazine`, `COSYtools`, `COSYgames`, `COSYevents`, `COSYplatform`, `COSYmanuals`, `COSYdata`)
**Date:** October 2026
**Auditor:** Jules (Senior Software Engineer)

---

## Executive Summary

`COSYlanguages` serves as the public, free front door to the interconnected COSY ecosystem—a suite of 9 specialized repositories providing language learning resources, practice games, reference dictionaries, event management, and paid platform tools.

As a static frontend application deployed via GitHub Pages, `COSYlanguages` achieves exceptional performance and zero-cost scaling. However, as the ecosystem expanded, shared responsibilities—such as cross-domain navigation, single sign-on (SSO), internationalization (i18n), design tokens, and linguistic data fetching—were implemented across individual repositories using copied scripts, duplicated configurations, and client-side access control.

This audit evaluates:
1. **Communication Patterns**: External data stores (Supabase), static JSON data delivery (COSYdata), and GitHub Raw cross-repo fetches (COSYplatform).
2. **Redundancies & Overlapping Components**: Duplicate routing configs, repeated navigation components, redundant i18n fallback dictionaries, and unbundled design tokens.
3. **Security Posture**: API key exposure risks, `localStorage` state tampering, client-side gatekeeping, and strict client/server boundaries.

---

## 1. Data Flow & External Service Integrations

### 1.1 Supabase Single Sign-On (SSO) & Authentication
- **Implementation**: Located in `js/core/auth-sso.js` and `login.html`.
- **Mechanism**:
  - `login.html` loads `@supabase/supabase-js` v2 via CDN (`jsdelivr`).
  - Upon user sign-in (`supabaseClient.auth.signInWithPassword`), credentials are submitted to Supabase (`https://iajkejcmoykubthlwfra.supabase.co`).
  - On successful auth, user profile metadata is fetched from the `profiles` table to determine user role (`student`, `teacher`, `admin`, `founder`).
  - Authenticated session metadata is persisted in `localStorage` under `cosy_user`, `cosy_user_role`, and `cosy-auth`.
  - `js/core/auth-sso.js` dynamically initializes Supabase SSO across all pages only when needed (lazy-loaded on demand or on `login.html`).
- **Data Flow Diagram**:
  ```
  [User (Browser)] ---> [login.html] ---> [Supabase Auth API]
                                                 |
                                         (Session & Role)
                                                 v
  [LocalStorage (cosy_user)] <--- [js/core/auth-sso.js] <--- [Redirect to COSYplatform / COSYmanuals]
  ```

### 1.2 Centralized Vocabulary & Data Delivery (`COSYdata`)
- **Implementation**: In `js/core/engine.js` via `COSY.loadLanguageData()`.
- **Mechanism**:
  - `COSYlanguages` attempts to load vocabulary index files directly from `https://cosylanguages.github.io/COSYdata/vocabulary/<lang>/index.json`.
  - Fetch requests use `AbortController` with a 1500ms timeout threshold.
  - If `COSYdata` is reachable, thematic JSON files are fetched in parallel and merged into global window state (`window.vocabularyData`, `window.verbsData`, etc.).
  - If `COSYdata` fails or times out, the engine gracefully falls back to local legacy script files in `vocabulary/<lang>/<level>/`.
- **Architectural Strengths**: High resilience against CDN failures; non-blocking fallback mechanism preserves offline capability.

### 1.3 Platform Curriculum Integrations (`COSYplatform`)
- **Implementation**: In `js/core/engine.js` via `COSY.loadCurriculum()`.
- **Mechanism**:
  - Fetches course curricula directly from GitHub Raw (`https://raw.githubusercontent.com/cosylanguages/COSYplatform/main/curriculums/<lang>/general/<LEVEL>.json`).
  - Attaches curriculum structures to `window.curriculumData` for course preview UI.

---

## 2. Redundancies & Overlapping Components Across Repositories

### 2.1 Route & Environment Configuration (`js/core/config.js`)
- **Issue**: `js/core/config.js` defines centralized environment detection (`detectEnvironment`) and production/dev/preview route maps for all 9 repositories.
- **Duplication Risk**: Because repositories are standalone static sites without npm/bundler dependencies, `config.js` is duplicated across `COSYlanguages`, `COSYmanuals`, `COSYevents`, `COSYgames`, and `COSYtools`.
- **Impact**: Any change in ecosystem URLs or preview environments requires updating and committing `config.js` across multiple distinct Git repositories.

### 2.2 Navigation UI & Ecosystem Mega-Menu (`js/core/engine.js` & `css/shared-nav.css`)
- **Issue**: The main navigation header (`#cosy-nav`), mobile navigation drawer (`#cosy-mobile-menu`), and Ecosystem Mega-Menu (`#cosy-eco-mega-menu`) are rendered via JavaScript string templates inside `js/core/engine.js`.
- **Duplication Risk**: `COSYpractice`, `COSYgames`, `COSYevents`, and `COSYtools` duplicate portions of `engine.js` to render the identical top navigation bar and footer across subdomains.
- **Impact**: Schema updates to ecosystem links (e.g., renaming `COSYblog` to `COSYmagazine`) required manual updates across multiple repos.

### 2.3 Dual i18n Translation Engines & Redundant Dictionaries
- **Issue**: Translation keys are defined in two places:
  1. Standalone JSON files in `data/ui/<lang>.json` loaded by `js/core/i18n.js`.
  2. Hardcoded fallback dictionary objects (`NAV_FALLBACKS`) embedded inside `js/core/engine.js`.
- **Impact**: Updating UI translations (e.g., adding French or Greek navigation labels) requires modifying both `js/core/i18n.js` / `js/core/engine.js` and `data/ui/fr.json`.

### 2.4 Design System & Token Duplication
- **Issue**: Design tokens (colors, typography, radii, shadows) reside in `css/tokens.css` and base layout styles in `css/base.css`, `css/components.css`, and `css/shared-nav.css`.
- **Impact**: Sub-apps (`COSYgames`, `COSYtools`, `COSYevents`) host independent copies of `tokens.css`. Changes to brand colors (e.g., `--sage`, `--cream`) risk visual drifting if external repos aren't synchronized.

---

## 3. Security Analysis & Vulnerability Assessment

### 3.1 Public Supabase Anon API Key Usage
- **Finding**: In `js/core/auth-sso.js` and `login.html`, `SUPABASE_ANON_KEY` is embedded in client-side source code:
  ```javascript
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
  ```
- **Risk Assessment**: **Low (By Design for Supabase)**. Supabase Anonymous keys are designed to be public in client-side web apps.
- **Prerequisite**: Data security **must** be enforced at the database level via Supabase **Row Level Security (RLS)** policies on tables (`profiles`, `enrollments`, `courses`).
- **Recommendation**: Ensure RLS is strictly enabled on all tables in Supabase so that possession of the public anon key does not grant unauthorized write or read access to private student data.

### 3.2 Client-Side Access Control & Role Masking
- **Finding**: In `js/core/config.js`, the function `isManualsAuthorized()` checks whether a user is an admin or authorized reader:
  ```javascript
  function isManualsAuthorized(authContext) {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("cosy_user_role");
      if (role === "admin") return true;
    }
    return false;
  }
  ```
- **Risk Assessment**: **Medium (Client-side Gatekeeping)**.
  - Since GitHub Pages is a static host, client-side role checks in `localStorage` can be easily bypassed by modifying `localStorage.setItem('cosy_user_role', 'admin')` in browser dev tools.
- **Mitigation**: `COSYmanuals` and `COSYplatform` must not rely solely on `config.js` or `localStorage` to guard sensitive content. Gated content must either be decrypted on the client using authenticated Supabase JWTs or served via authenticated edge workers/functions.

### 3.3 JWT Storage in LocalStorage
- **Finding**: `cosy-auth` and `cosy_user` are saved in `window.localStorage`.
- **Risk Assessment**: **Low/Standard for SPAs**. Vulnerable to Cross-Site Scripting (XSS) if third-party scripts are injected.
- **Mitigation**: `COSYlanguages` currently avoids third-party tracking or ad scripts, uses self-hosted fonts, and enforces SRI (Subresource Integrity) on CDN scripts (`@supabase/supabase-js`).

### 3.4 Separation of Client and Server Logic
- **Status**: **Strictly Separated**. `COSYlanguages` operates entirely as a static presentation and routing gateway. It contains zero server-side node logic or secret environment variables.

---

## 4. Architectural & Structural Recommendations

### Recommendation 1: Publish `@cosylanguages/core` ESM Bundle
To eliminate redundant JavaScript and CSS copies across the 9 ecosystem repositories, extract core assets into a single shared npm package or GitHub Release CDN bundle:
- **Module Contents**:
  - `config.js` (Ecosystem routes & environment resolution)
  - `auth-sso.js` (Supabase SSO initialization)
  - `shared-nav.js` & `shared-nav.css` (Navigation header & Ecosystem Mega-Menu)
  - `tokens.css` (Shared CSS design tokens)
- **CDN Usage**:
  ```html
  <script src="https://cdn.jsdelivr.net/gh/cosylanguages/COSYcore@v1/dist/cosy-core.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cosylanguages/COSYcore@v1/dist/cosy-core.min.css">
  ```

### Recommendation 2: Consolidate i18n Dictionaries
Remove embedded `NAV_FALLBACKS` from `js/core/engine.js` and establish `data/ui/<lang>.json` as the single source of truth for translations across `COSYlanguages`. Ensure fallback language resolution (`en`) is handled dynamically by `js/core/i18n.js`.

### Recommendation 3: Implement Supabase Row Level Security (RLS) Verification
Ensure all tables in the Supabase backend (`profiles`, `student_progress`, `manual_access`) have explicit RLS policies defined:
```sql
-- Example RLS Policy for COSYplatform student profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
USING (auth.uid() = id);
```

### Recommendation 4: Cross-Repository Automated Testing via GitHub Actions
Add a lightweight CI workflow in `COSYlanguages` and connected repositories to validate that cross-repository endpoints (`COSYdata` vocabulary schemas, `COSYplatform` curriculums) adhere to expected JSON schemas upon PR creation.

---

## Summary Matrix

| Audit Area | Current State | Risk Level | Target State |
|---|---|---|---|
| **Ecosystem Routing** | Duplicated `config.js` in 5 repos | Low | Single CDN / NPM module `@cosylanguages/core` |
| **Data Fetching** | Non-blocking fetch with local fallback | Low (Good) | Maintain hybrid `COSYdata` fetch model |
| **Authentication** | Supabase SSO with `localStorage` | Medium | Verify Supabase RLS policies |
| **Client/Server Boundary**| Pure static frontend | Low (Good) | Maintain zero-secret static architecture |
| **i18n Translations** | Dual source (`NAV_FALLBACKS` + JSON) | Low | Unified `data/ui/*.json` dictionary engine |

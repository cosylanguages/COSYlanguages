# COSYlanguages Events Hub: Phases & Stages Roadmap

This document outlines the structured development phases and logical stages of the COSYlanguages Events Hub, Speaking Clubs, and Session Sections. It tracks visual layout refinements, quality-gate static validations, and interactive discovery features.

---

## 🔵 Phase 1: Visual Harmony & CSS Consolidation (Brand Assets)
*Focus: Aligning events pages, card layouts, and visual token metrics with the global stylesheet architecture.*

### **Stage 1.1: Card Token Standardization**
- **Goal:** Unify physical characteristics of cards across parent landing hubs.
- **Implementation:** Updated the main Event card grids (`.club-grid`) to strictly utilize standard tokens, including a `24px` border-radius (`var(--r-xl)`), smooth cubic-bezier hover springs (`cubic-bezier(.34,1.56,.64,1)`), and standard vertical translations on hover (`translateY(-8px)`).
- **Status:** **Completed** ✅

### **Stage 1.2: Redundant CSS Refactoring**
- **Goal:** Eliminate local style overrides to prevent CSS bloat and render conflicts.
- **Implementation:** Cleaned up the local `<style>` block in `events/index.html` by removing duplicate rules for `.club-card`, `.club-desc`, `.club-tag`, etc., allowing elements to cleanly fall back on standard classes inside `css/events.css`.
- **Status:** **Completed** ✅

### **Stage 1.3: Outdated Category Counts Repair**
- **Goal:** Maintain exact synchronization between visual links and available products.
- **Implementation:** Corrected Card A ("Speaking Club") descriptive redirect badge from "See all 6 clubs" to "See all 9 clubs" to accurately reflect the actual number of speaking, singing, and cinema clubs active on the live site.
- **Status:** **Completed** ✅

---

## 🟢 Phase 2: Static Quality Gates & Pedagogical Validations
*Focus: Ensuring individual speaking session pages strictly adhere to the repository's strict static schema rules.*

### **Stage 2.1: Redundant Script Purging**
- **Goal:** Eliminate obsolete site-wide script loads to improve page speed and performance.
- **Implementation:** Purged outdated references to `pricing.js` and `config.js` at the bottom of Keep Up with Science session files, ensuring compliance with the validator `scripts/audit_website_data.py`.
- **Status:** **Completed** ✅

### **Stage 2.2: Mistake Cardinality Alignment**
- **Goal:** Guarantee a dense, informative, and cohesive learning experience on every session.
- **Implementation:** Upgraded the "Teacher's Note (Linguistic Corrections)" section on all audited sessions to contain exactly 3–5 premium mistake items, resolving validation failures.
- **Status:** **Completed** ✅

### **Stage 2.3: Correct-to-Incorrect Contrast Repair**
- **Goal:** Provide clear visual feedback comparing grammatical/lexical mistakes with correct forms.
- **Implementation:** Overhauled session mistake cards to show authentic, level-appropriate grammatical contrasts (e.g. spelling out specific modal rule explanations or past-tense agreements) instead of duplicate identical text templates.
- **Status:** **Completed** ✅

### **Stage 2.4: Monolingual & Non-Translation Enforcement**
- **Goal:** Adhere strictly to the platform's core "no translation fallback" principle across all multilingual event pages (English, French, Russian, etc.).
- **Implementation:** Designed all session page environments to be 100% in their target language (e.g., French sessions in French, Russian sessions in Russian), utilizing localized "Teacher's Notes" blocks, symbolic indicators (like `→` and `✏️`), and icons/emojis rather than native-language translation fallbacks. This preserves the immersive, monolingual speaking club atmosphere.
- **Status:** **Completed** ✅

---

## 🟡 Phase 3: Interactive Discovery & Filter Mechanics
*Focus: Providing students and teachers with powerful client-side exploratory controls.*

### **Stage 3.1: Interactive Session Explorer**
- **Goal:** Enable instant multi-criteria searching based on pedagogical keywords.
- **Implementation:** Programmed a high-performance client-side keyword tag-matching and query system inside `events/index.html`. Users can click any topic, cover symbol, or grammar tag on a club card to filter sessions matching that tag.
- **Status:** **Completed** ✅

### **Stage 3.2: Multi-Level CEFR Filtering**
- **Goal:** Offer intuitive level switches to separate Beginner (A1-A2), Intermediate (B1-B2), and Advanced (C1-C2) content.
- **Implementation:** Configured responsive button selectors checking lowercase levels in `data-level` attributes on past session cards.
- **Status:** **Completed** ✅

---

## 🟣 Phase 4: Offline Printable Toolkits & Interactive Sign-Ups (Planned)
*Focus: Enhancing administrative tools and hybrid classroom synchronization.*

### **Stage 4.1: Standardized PDF Print Templates**
- **Goal:** Optimize speaking club handouts for offline classroom printing.
- **Implementation:** Develop dedicated print stylesheets (`@media print`) that cleanly format session vocabulary lists into foldable dual-column layouts and automatically hide digital-only navigation/videos.
- **Status:** *Planned (Phase 4 Milestone)*

### **Stage 4.2: Automated Classroom Sync Split Views**
- **Goal:** Let teachers load interactive practice questions directly alongside speaking session material.
- **Implementation:** Map session vocabulary lists directly into the `classroom-sync.html` split interface to support flipped classroom prep.
- **Status:** *Planned (Phase 4 Milestone)*

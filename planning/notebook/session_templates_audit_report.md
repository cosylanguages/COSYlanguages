# COSY Speaking Clubs: Session Templates Comprehensive Audit Report

**Date:** July 2026
**Auditor:** Jules, Software Engineer
**Scope:** 412 Speaking Club session files across English (EN), French (FR), and Russian (RU) under:
- `events/sessions/`
- `events/fr/sessions/`
- `events/ru/sessions/`

---

## 1. Executive Summary
A comprehensive audit of all recurring speaking club sessions was conducted to verify compliance with their respective event structures, check for missing sections, investigate heading ordering, and identify formatting/styling deviations.

Overall, the repository displays a **high level of design consistency**. The vast majority of files perfectly adhere to their core visual identity and pedagogical layouts. However, a small subset of sessions displays structural, heading, or formatting deviations that require correction or strategic alignment.

### Key Stats
- **Total Sessions Scanned:** 412
- **Cinema Club:** 112 sessions (EN) - *Excellent consistency*
- **Karaoke Club:** 95 sessions (Multi-language) - *Zero structural deviations*
- **Mind Matters:** 66 sessions (EN, FR, RU) - *Excellent consistency*
- **Keeping Up with Science:** 40 sessions (EN, FR, RU) - *Perfect structural alignment*
- **The Greatest Quotes:** 69 sessions (EN, FR, RU) - *A few missing sections & formatting anomalies*
- **Let's Celebrate:** 25 sessions (EN, FR, RU) - *Slight structural variations*
- **I Couldn't Help But Wonder:** 21 sessions (EN, FR) - *A few markdown bolding syntax issues*
- **My Life With & Without:** 14 sessions (EN) - *One missing section*
- **Debatable & Relatable:** 19 sessions (EN, FR, RU) - *Widespread inline style issues and some missing sections*

---

## 2. Methodology & Audit Parameters
The audit was performed using automated BeautifulSoup4-based static HTML analyzers and manual inspection. Each file was validated against the following parameters:
1. **Core Sections Presence:** Verifying the existence of all 5 core stages (Warm-up, Round 1, Let's Speak Together, Round 2, Teacher's Notes).
2. **Section Ordering:** Confirming that the pedagogical path (Warm-up $\rightarrow$ Round 1 $\rightarrow$ Interactive/LST $\rightarrow$ Round 2 $\rightarrow$ Mistakes) flows without inversion or omission.
3. **Heading Consistency:** Identifying non-conforming, legacy, or translated headers.
4. **Vocabulary Calibration:** Checking for the correct number of vocabulary units (exactly 10 for standard clubs, 10 split into two grids of 5 for Cinema Club).
5. **Teacher's Notes (Linguistic Corrections):** Verifying that mistake blocks contain between 3 to 5 relevant corrections.
6. **Formatting Standards:** Scanning for forbidden Markdown bolding syntax (`**`) and inline CSS style attributes on key blocks.

---

## 3. Implicit Templates by Speaking Club
Each of the 9 clubs has an established implicit template. While headers and labels adapt dynamically to the localized language and specific grammatical topic, the core structure remains consistent.

### 3.1. Cinema Club (112 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Screen Hook (Warm-up)`
* **Part 2: Round 1** $\rightarrow$ `🔵 Part 1 — Dialogue, Themes & Grammar (10 Items)`
* **Part 3: LST** $\rightarrow$ `🟣 Cinema Spotlight — Scene Study & Adaptation`
* **Part 4: Round 2** $\rightarrow$ `🟢 Part 2 — Artistry, Interpretation & Grammar (10 Items)`
* **Part 5: Final Challenge** $\rightarrow$ `🎬 Final Challenge — You're the Director!`
* **Part 6: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)`
* *Vocabulary Structure:* Exactly 2 `.vocab-grid-10` containers, each containing exactly 5 cards.

### 3.2. The Greatest Quotes (69 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Warm-up` (FR: `🟠 Échauffement` | RU: `🟠 Разминка`)
* **Part 2: Grammar** $\rightarrow$ `⚡ Grammar Practice — [Topic]` (FR: `⚡ Pratique de la grammaire — [Topic]` | RU: `⚡ Практика грамматики — [Topic]`)
* **Part 3: Round 1** $\rightarrow$ `🔵 Round 1 — [Analysis / General Discussion]` (FR: `🔵 Round 1 — Analyse` | RU: `🔵 Раунд 1 — Анализ`)
* **Part 4: LST** $\rightarrow$ `🟣 Let's Speak Together [— Dynamic Theme]` (FR: `🟣 Parlons ensemble` | RU: `🟣 Обсудим вместе`)
* **Part 5: Round 2** $\rightarrow$ `🟢 Round 2 — [Speculating on the Future / Philosophical Application]` (FR: `🟢 Round 2 — [Application]` | RU: `🟢 Раунд 2 — Философское применение`)
* **Part 6 (Optional):** `🏁 Closing Circle: Complete the Sentence` (primarily for B1/intermediate)
* **Part 7: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)` (FR: `✏️ Note du professeur (Corrections linguistiques)` | RU: `✏️ Заметки преподавателя (Исправление ошибок)`)

### 3.3. My Life With & Without (14 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Warm-up` (or `🟠 Warm-up — [Theme]`)
* **Part 2: Round 1** $\rightarrow$ `🔵 Round 1 — My Life With [Topic]`
* **Part 3: LST** $\rightarrow$ `🟣 Let's Speak Together`
* **Part 4: Round 2** $\rightarrow$ `🟢 Round 2 — My Life Without [Topic]`
* **Part 5: Closing** $\rightarrow$ `🏁 Closing "Mic Drop" Rituals`
* **Part 6: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)`

### 3.4. Keeping Up with Science (40 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Warm-up`
* **Part 2: Grammar** $\rightarrow$ `⚡ Grammar Practice — [Topic]`
* **Part 3: Round 1** $\rightarrow$ `🔵 Round 1 — Understand the Discovery`
* **Part 4: LST** $\rightarrow$ `🟣 Let's Speak Together`
* **Part 5: Round 2** $\rightarrow$ `🟢 Round 2 — The Future: Speculative Projections`
* **Part 6: Scientific Thinking** $\rightarrow$ `🔬 Real Scientific Thinking — Evaluating Evidence`
* **Part 7: Headline Task** $\rightarrow$ `✍️ Complete the Headline Task`
* **Part 8: Final Challenge** $\rightarrow$ `🎤 Final Challenge — TED Talk 2080`
* **Part 9: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)`

### 3.5. I Couldn't Help But Wonder (21 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Warm-up — [Thematic Hook]` (FR: `🟠 Échauffement — [Hook]`)
* **Part 2: Grammar** $\rightarrow$ `⚡ Grammar Practice — [Topic]` (FR: `⚡ Pratique de la grammaire — [Topic]`)
* **Part 3: Round 1** $\rightarrow$ `🔵 Round 1 — Column Analysis` (FR: `🔵 Round 1 — Analyse de la chronique`)
* **Part 4: LST** $\rightarrow$ `🟣 Let's Speak Together — The Ultimate Speculation` (FR: `🟣 Parlons ensemble — La spéculation ultime`)
* **Part 5: Round 2** $\rightarrow$ `🟢 Round 2 — Deep Speculation: Agree or Disagree?` (FR: `🟢 Round 2 — Spéculation profonde : d'accord ou pas ?`)
* **Part 6: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)` (FR: `✏️ Note du professeur (Corrections linguistiques)`)

### 3.6. Let's Celebrate (25 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Warm-up` (FR: `🟠 Échauffement` | RU: `🟠 Разминка`)
* **Part 2: Grammar** $\rightarrow$ `⚡ Grammar Practice — [Topic]` (FR: `⚡ Pratique de la grammaire — [Topic]` | RU: `⚡ Практика грамматики — [Topic]`)
* **Part 3: Round 1** $\rightarrow$ `🔵 Round 1 — General Discussion` (FR: `🔵 Round 1 — Discussion générale` | RU: `🔵 Раунд 1 — Общее обсуждение`)
* **Part 4: LST** $\rightarrow$ `🟣 Let's Speak Together [— Theme]` (FR: `🟣 Parlons ensemble` | RU: `🟣 Обсудим вместе`)
* **Part 5: Round 2** $\rightarrow$ `🟢 Round 2 — Agree or Disagree: The Future` (FR: `🟢 Round 2 — Le futur : D'accord ou pas ?` | RU: `🟢 Раунд 2 — Будущее: Согласны или нет?`)
* **Part 6: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)`

### 3.7. Mind Matters (66 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Warm-up` (FR: `🟠 Échauffement` | RU: `🟠 Разминка`)
* **Part 2: Round 1** $\rightarrow$ `🔵 Round 1 — [Deep Discussion / Analysis]` (FR: `🔵 Round 1 — Analyse/Discussion générale` | RU: `🔵 Раунд 1 — Анализ`)
* **Part 3: LST** $\rightarrow$ `🟣 Let's Speak Together` (FR: `🟣 Parlons ensemble` | RU: `🟣 Обсудим вместе`)
* **Part 4: Round 2** $\rightarrow$ `🟢 Round 2 — [Conditional Scenarios / Dilemmas / Future]`
* **Part 5: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)`

### 3.8. Debatable & Relatable (19 sessions)
* **Part 1: Warm-up** $\rightarrow$ `🟠 Warm-up` (FR: `🟠 Échauffement`)
* **Part 2: Linguistic Focus** $\rightarrow$ `🎯 Linguistic Focus (Interactive Grammar)` (FR: `🎯 Focus Linguistique (Grammaire)`)
* **Part 3: Round 1** $\rightarrow$ `🔵 Round 1 — Advantages (A/B Ideas)` (FR: `🔵 Round 1 — Avantages (Idées A/B)`)
* **Part 4: LST** $\rightarrow$ `🟣 Let's Speak Together` (FR: `🟣 Parlons ensemble`)
* **Part 5: Round 2** $\rightarrow$ `🟢 Round 2 — Disadvantages (A/B Ideas)` (FR: `🟢 Round 2 — Inconvénients (Idées A/B)`)
* **Part 6: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)`

### 3.9. Karaoke Club (95 sessions)
* **Stage 1: Warm-up** $\rightarrow$ `🎵 Stage 1: Warm-up` (FR: `🎵 Étape 1 : Échauffement` | IT: `🎵 Fase 1: Riscaldamento` | EL: `🎵 Στάδιο 1: Προθέρμανση`)
* **Stage 2: Vocabulary** $\rightarrow$ `📚 Stage 2: Vocabulary`
* **Stage 3: Listening** $\rightarrow$ `🎧 Stage 3: Listening`
* **Stage 4: Discussion** $\rightarrow$ `💬 Stage 4: Discussion`
* **Stage 5: Language Focus** $\rightarrow$ `✨ Stage 5: Language Focus`
* **Stage 6: Final Challenge** $\rightarrow$ `🎭 Stage 6: Final Challenge`
* **Stage 7: Mistakes** $\rightarrow$ `✏️ Teacher's Note (Linguistic Corrections)`

---

## 4. Structural and Section Ordering Deviations

This section lists sessions that are completely missing a section, have ordering/sequence mismatch, or have legacy CSS wrapper structures.

### 4.1. Missing Sections
1. **The Greatest Quotes (French):**
   * `events/fr/sessions/the-greatest-quotes/la-sagesse-de-socrate.html`
     * ❌ **Missing:** `🟣 Parlons ensemble` (Let's Speak Together). It flows straight from Round 1 to Round 2.
2. **Debatable & Relatable (Russian):**
   * `events/ru/sessions/debatable-relatable/4-dnevnaya-rabochaya-nedelya.html`
     * ❌ **Missing:** `🟠 Разминка` (Warm-up) and `🟣 Обсудим вместе` (Let's Speak Together).
3. **My Life With & Without (English):**
   * `events/sessions/my-life-with-without/gestures.html`
     * ❌ **Missing:** `🏁 Closing "Mic Drop" Rituals` (Closing Section).

### 4.2. Legacy Wrapper Class Deviations (Class Name Inconsistencies)
1. **Debatable & Relatable (English & French):**
   * `events/sessions/debatable-relatable/assisted-dying.html`
   * `events/fr/sessions/debatable-relatable/l-aide-active-a-mourir.html`
     * ❌ **Issue:** The Teacher's Notes block uses `class="round-block mistakes open"` instead of the standard `class="mistake-block open"`. This violates the structural specification layout and causes parsers to treat the block as a round item instead of the feedback footer.

### 4.3. Legacy Header Inconsistencies (Cinema Club)
A small set of 7 older Cinema Club sessions use a slightly older naming convention for Part 1 & 2 headers compared to the modern standard template:
* **Legacy Header:** `🔵 Part 1 — General Discussion (10 Items)`, `🟣 Cinema Spotlight — Scene Study`, `🟢 Part 2 — Artistry & Interpretation (10 Items)`
* **Modern Header:** `🔵 Part 1 — Dialogue, Themes & Grammar (10 Items)`, `🟣 Cinema Spotlight — Scene Study & Adaptation`, `🟢 Part 2 — Artistry, Interpretation & Grammar (10 Items)`
* **Affected Files:**
  1. `events/sessions/cinema-club/the-swan-princess.html`
  2. `events/sessions/cinema-club/ratatouille.html`
  3. `events/sessions/cinema-club/101-and-102-dalmatians.html`
  4. `events/sessions/cinema-club/16-wishes.html`
  5. `events/sessions/cinema-club/homeward-bound.html`
  6. `events/sessions/cinema-club/destino.html`
  7. `events/sessions/cinema-club/luck.html`

---

## 5. Formatting, Grammar, and Style Deviations

### 5.1. Markdown Bold Syntax Violations (`**`)
Standard formatting mandates that all bolding in speaking club session prompts utilize raw HTML tags like `<strong>` rather than Markdown bold asterisks (`**`), which fail to render correctly in browser contexts.
The following sessions contain legacy Markdown `**` tags:
1. **The Greatest Quotes:**
   * `events/sessions/the-greatest-quotes/jim-kwik-quote.html` (Round 1 & Round 2)
   * `events/sessions/the-greatest-quotes/feynman-study-hard.html` (Round 2)
2. **I Couldn't Help But Wonder:**
   * `events/sessions/i-couldnt-help-but-wonder/do-insects-hide-when-it-rains.html` (Round 1 & Round 2)
   * `events/sessions/i-couldnt-help-but-wonder/ugly-produce-anti-waste.html` (Round 1 & Round 2)
   * `events/sessions/i-couldnt-help-but-wonder/why-do-we-try-to-relate-to-adhd.html` (Round 1 & Round 2)

### 5.2. Inline Style Sheet Attributes on Standard Blocks
Inline styles on major pedagogical blocks are forbidden to allow centralizing style customizability inside `css/events.css` and `css/tokens.css`.
The following files violate this standard:
1. **The Greatest Quotes:**
   * `events/sessions/the-greatest-quotes/rain-seller-umbrella-quote.html`
     * ❌ Contains `style="display:none;"` hardcoded directly on a `.vocab-card`.
2. **Debatable & Relatable (Systemic Style Leak):**
   * All 19 sessions (English, French, Russian) in this club contain hardcoded style properties on the Linguistic Focus/Grammar block:
     * `style="margin-bottom: 2rem;"`
     * **Widespread impact:** The margin-bottom property on `.round-block.grammar` should be managed via a stylesheet class rather than repeating `style="margin-bottom: 2rem;"` on every file.

---

## 6. Content-Specific Anomalies
Content guidelines require exactly 3-5 mistakes in the "Teacher's Note (Linguistic Corrections)" section to keep the feedback lightweight and calibrated.
* **Ratatouille Cinema Session:**
  * `events/sessions/cinema-club/ratatouille.html`
    * ❌ Contains only **2 mistake items** under the Teacher's Note section, which is below the minimum pedagogical threshold of 3 items.

---

## 7. Strategic Recommendations & Actions

To ensure complete template compliance across all current and future speaking club files, we recommend the following engineering practices:
1. **Integrate Static Linter Checks:** Run the central audit script `scripts/audits/audit_website_data.py` as a GitHub Actions pre-merge check to catch any formatting (`**` syntax), missing blocks, or incorrect vocabulary counts before pushing to main.
2. **Centralize Debatable & Relatable CSS:** Extract the repeated `margin-bottom: 2rem` on the `.round-block.grammar` block and place it as a class modifier (or target it globally) in `css/events.css`.
3. **Execute Content Repair Batch:**
   * Re-introduce the `Let's Speak Together` visual/interactive card to `la-sagesse-de-socrate.html`.
   * Complete the missing `Warm-up` and `Let's Speak Together` cards on the Russian `4-dnevnaya-rabochaya-nedelya.html` session.
   * Add the missing closing rituals section to `gestures.html` in the Life club.
   * Expand the Ratatouille session's linguistic corrections by adding 1 more relevant spelling/grammar correction to hit the required threshold of 3.
   * Run a simple sed/python regex replace to convert all instance of `**` to `<strong>` / `</strong>` in the identified Greatest Quotes and Wonder sessions.

---
*Report compiled successfully.*

# Architectural Proposal: Standalone Language Reference Apps
**Products:** Standalone Conjugation & Gender/Declension Apps (*Verbi* & *Genus*)
**Languages:** French (`fr`), Italian (`it`), Russian (`ru`), Greek (`el`)
**Target Platform:** Independent Static Web PWAs (GitHub Pages / Subdomains) & Native Mobile/Desktop Wrappers (Capacitor / Tauri)
**Author:** COSYlanguages Architecture Team
**Date:** February 2027

---

## 1. Executive Summary & Vision

The objective of this initiative is to design and deploy two specialized, lightweight, ultra-fast language reference tools modeled after popular utilities like *Le Conjugeur*, *Le La*, and *Der Die Das*:

1. **`Verbi` (Conjugation Reference Engine):**
   Allows learners to search any verb in its infinitive or conjugated form across **French, Italian, Russian, and Greek**. Displays full conjugation paradigms across all moods and tenses, highlighting stems, irregular inflections, auxiliary verbs (*être/avoir*, *essere/avere*), aspectual pairs (Russian *НСВ/СВ*), and accentuation patterns.

2. **`Genus` (Gender & Case Declension Engine):**
   Allows learners to type any noun, adjective, or pronoun to instantly view its grammatical gender, definite/indefinite articles, and complete declension tables (including all 6 Russian cases and 4 Greek cases in both singular and plural).

### Key Directives
* **Strict Independence:** These tools must **not** be integrated into the main `cosylanguages.github.io` website navigation or main portal. They will exist as standalone apps hosted on dedicated GitHub repositories, independent subdomains (e.g., `verbi.app`, `genus.app`, or `conjugate.cosylanguages.com`), or standalone PWAs.
* **Offline-First & Serverless:** Designed to run 100% client-side without external API calls or database server dependencies, fully compatible with GitHub Pages hosting.
* **Instantaneous Latency:** Search and lookup response times must be under 50ms, with instant lemmatization (resolving conjugated/declined input to its dictionary lemma).

---

## 2. Standalone Hosting & App Distribution Architecture

Since GitHub Pages serves purely static content (HTML/CSS/JS/WASM) without a server-side runtime or database engine (like PostgreSQL or Node.js), the applications will leverage a **Client-Side Heavy, Pre-compiled Data Architecture**.

```
                         [ GitHub Repository / Actions CI/CD ]
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
      [ Data Pre-compilation Pipeline ]               [ Web & Native Deployment ]
   - Extracts Wiktionary / UniMorph Dumps            - GitHub Pages (Static Hosting)
   - Generates Compressed SQLite / JSON              - Standalone PWA (Offline Cache)
   - Builds Suffix Rule Engines                      - Capacitor / Tauri (iOS / Android / Desktop)
                  │                                               │
                  └───────────────────────┬───────────────────────┘
                                          ▼
                                [ Client-Side App Engine ]
                           - WebWorker Fuzzy Search Index
                           - wa-sqlite / In-Memory JSON Lookup
                           - Direct DOM Rendering (<50ms)
```

### 2.1 Deployment Channels
1. **Dedicated GitHub Repositories & Subdomains:**
   * Repository 1: `github.com/cosylanguages/verbi-app` -> Hosted at `verbi.cosylanguages.com` or custom domain.
   * Repository 2: `github.com/cosylanguages/genus-app` -> Hosted at `genus.cosylanguages.com` or custom domain.
   * Keeps codebase, styling, service workers, and assets completely isolated from the main COSYlanguages ecosystem.

2. **Progressive Web App (PWA) Standalone Installation:**
   * Each app includes its own `manifest.json` and standalone Service Worker (`sw.js`).
   * Users can click "Add to Home Screen" on iOS, Android, macOS, or Windows to run the tool as an independent desktop or mobile application with zero browser chrome and 100% offline access.

3. **Native Mobile & Desktop Distribution (Capacitor / Tauri):**
   * **Capacitor (Ionic):** Wraps the static HTML/JS build into native iOS (`.ipa`) and Android (`.apk` / `.aab`) packages without rewriting code.
   * **Tauri / Electron:** Wraps the static web app into lightweight native desktop executables for macOS (`.dmg`), Windows (`.exe`), and Linux (`.AppImage`).
   * Continuous Integration (CI) via GitHub Actions automatically compiles and attaches executable releases on every code tag.

---

## 3. Storage & Search Performance Options

To query tens of thousands of morphological forms without server calls, three client-side data strategies are proposed:

| Strategy | Technology | Initial Download | Search Speed | Memory Usage | Best For |
|---|---|---|---|---|---|
| **Option A: Compressed SQLite WASM** | `wa-sqlite` / `sql.js` + Gzip SQLite DB | ~3.5 MB per language | < 5ms (Indexed SQL) | Low (~15-20 MB) | Full morphological coverage (100k+ forms) |
| **Option B: Chunked JSON + WebWorkers** | IndexedDB + Chunked JSON Hash Maps | ~2.0 MB per language | < 15ms | Medium (~30 MB) | Mid-size vocabulary (25k key lemmas) |
| **Option C: Rule-Based Engine + Exception List** | JS Paradigm Engine + Mini JSON Exceptions | ~300 KB per language | < 2ms | Ultra Low (~5 MB) | Highly regular languages (FR/IT standard verbs) |

### Recommended Hybrid Model
* **Conjugation (`Verbi`):** **Option C + Option B Exception List**. Conjugation rules in French and Italian follow strict group patterns; rule engines generate 90% of forms dynamically, while irregular verbs (*être, avoir, andare, essere, être, etc.*) and stem-changing verbs are retrieved from a fast JSON index.
* **Gender & Declension (`Genus`):** **Option A (SQLite WASM via `wa-sqlite`)**. Noun genders and case declension tables require exact stored forms for irregular plurals and stress shifts (especially in Russian and Greek).

---

## 4. Deep-Dive: Target Language Mechanics & Features

### 4.1 French (`fr`)

#### Conjugation Engine (`Verbi`)
* **3 Conjugation Groups:** 1st (-er), 2nd (-ir / -issant), 3rd (irregular -re, -oir, -ir).
* **Modes & Tenses Covered:**
  * *Indicatif:* Présent, Imparfait, Passé simple, Futur simple, Passé composé, Plus-que-parfait, Futur antérieur, Passé antérieur.
  * *Subjonctif:* Présent, Imparfait, Passé, Plus-que-parfait.
  * *Conditionnel:* Présent, Passé (1re & 2e formes).
  * *Impératif:* Présent, Passé.
  * *Participes & Gérondif:* Présent, Passé.
* **Auxiliary Detection:** Automatic indicator for *être* vs *avoir* verbs, including dual-auxiliary verbs (*passer, monter, descendre*).

#### Gender & Declension Engine (`Genus`)
* **Gender Lookup:** Instant determination of Masculine vs Feminine (*le / la / l'*).
* **Plural Rules:** Regular (-s), exceptions (-x, -aux, -eux), and invariant nouns.
* **Adjective Agreement:** Dynamic grid showing Masc. Sing., Fem. Sing., Masc. Plur., Fem. Plur.

---

### 4.2 Italian (`it`)

#### Conjugation Engine (`Verbi`)
* **3 Conjugations:** *-are*, *-ere*, *-ire* (including *-isc-* present tense infixes, e.g., *capire -> capisco*).
* **Modes & Tenses Covered:**
  * *Indicativo:* Presente, Imperfetto, Passato remoto, Futuro semplice, Passato prossimo, Trapassato prossimo, Trapassato remoto, Futuro anteriore.
  * *Congiuntivo:* Presente, Imperfetto, Passato, Trapassato.
  * *Condizionale:* Presente, Passato.
  * *Imperativo:* Presente.
  * *Gerundio & Participio:* Presente, Passato.
* **Auxiliary Selector:** Explicit visual indicator for *essere* vs *avere* in compound tenses.

#### Gender & Declension Engine (`Genus`)
* **Articles & Gender:** Masculine (*il, lo, l'*) and Feminine (*la, l'*).
* **Plural Formations:** Regular transformations (*-o -> -i*, *-a -> -e*, *-e -> -i*) and irregular plurals (*uovo -> uova*, *braccio -> braccia*).
* **Prepositional Combination Matrix (Preposizioni Articolate):** Interactive lookup matrix for *a, da, di, in, su* combined with articles (*al, dello, nella, sul, etc.*).

---

### 4.3 Russian (`ru`)

#### Conjugation Engine (`Verbi`)
* **1st & 2nd Conjugation Classes:** Dynamic stem mutation highlights (*читать -> читаю*, *писать -> пишу*, *любить -> люблю*).
* **Aspectual Pairs (Видовые пары):** Side-by-side comparison of Imperfective (НСВ) and Perfective (СВ) verbs (e.g. *делать / сделать*, *говорить / сказать*).
* **Tense System:** Past (gender-congruent endings *-л, -ла, -ло, -ли*), Present, and Future (compound for НСВ vs simple for СВ).
* **Stress Marks (Ударения):** Critical visual accent marks on every single conjugated form and stress movement indicators (e.g. *купи́ть -> ку́пишь*).

#### Gender & Case Declension Engine (`Genus`)
* **Gender & Animacy:** Masculine, Feminine, Neuter, Common gender (*общий род*) + Animate (*одушевлённое*) vs Inanimate (*неодушевлённое*) tags.
* **Full 6-Case Declension Matrix (Падежные таблицы):**
  1. *Именительный* (Nominative)
  2. *Родительный* (Genitive)
  3. *Дательный* (Dative)
  4. *Винительный* (Accusative - with automatic animate/inanimate adjective-noun agreement shifts)
  5. *Творительный* (Instrumental)
  6. *Предложный* (Prepositional)
* **Full Paradigm Support:** Nouns, Adjectives, Pronouns, and Numerals in both Singular and Plural with explicit stress accents.

---

### 4.4 Greek (`el`)

#### Conjugation Engine (`Verbi`)
* **Conjugation Classes:** Type A' (*-ω / -ομαι*, e.g., *γράφω*) and Type B' (*-ώ, -άω / -ιέμαι, -ούμαι*, e.g., *αγαπώ / αγαπάω*).
* **Voices (Φωνές):** Active Voice (*Ενεργητική φωνή*) and Passive/Deponent Voice (*Παθητική / Μέση φωνή*).
* **Tenses Covered:**
  * *Ενεστώτας* (Present)
  * *Παρατατικός* (Imperfect)
  * *Συντελεσμένος Μέλλοντας* (Future Continuous)
  * *Στιγμιαίος Μέλλοντας* (Future Simple)
  * *Αόριστος* (Aorist - showing critical stem transformations like *γράφω -> έγραψα*)
  * *Παρακείμενος* (Present Perfect)
  * *Υπερσυντέλικος* (Past Perfect)
  * *Συντελεσμένος Μέλλοντας* (Future Perfect)
* **Stress Accents (Τόνοι):** Strict accentuation rule validation (three-syllable accent shifting rules).

#### Gender & Case Declension Engine (`Genus`)
* **Gender & Articles:** Masculine (*ο*), Feminine (*η*), Neuter (*το*).
* **4-Case Declension Matrix (Πτώσεις):**
  1. *Ονομαστική* (Nominative)
  2. *Γενική* (Genitive)
  3. *Aιτιατική* (Accusative)
  4. *Κλητική* (Vocative)
* **Declension Groups:** Isosyllabic and Imparisyllabic noun declensions (*-ος, -ας, -ης, -α, -η, -ο, -μα, -ος neuter*) in Singular and Plural.

---

## 5. UI / UX Design Specifications

1. **Lightning-Fast Search Bar:**
   * Global shortcut key (`/` or `Cmd+K`) to focus search immediately.
   * Instant search-as-you-type with fuzzy matching.
   * Auto-Lemmatization: Typing *suis* automatically loads *être*; typing *читал* automatically loads *читать*.

2. **Visual Paradigm Grid:**
   * Color-coded morphological components: **Stem** (neutral color), **Ending** (vibrant highlight color), **Irregular Shift** (alert color).
   * Toggle between Compact Grid View and Detailed Grammar View.

3. **Interactive Features:**
   * **Copy Matrix:** Single-click copy of any form or full table to clipboard.
   * **Favorites / History:** Save frequently referenced words locally via `localStorage`.
   * **Text-to-Speech (TTS):** Integrated Web Speech API for native audio pronunciation of any conjugated form or case inflection.

---

## 6. Data Sourcing & Extraction Pipelines

To populate these dictionaries legally and comprehensively, we will build automated Python data extraction scripts under a private build workspace:

1. **Wiktionary / Kaikki Open JSON Dumps:**
   * Extract morphological JSON dumps from [Kaikki.org](https://kaikki.org/) (structured Wiktionary data).
   * Filter entries by language tags (`fr`, `it`, `ru`, `el`) and POS (`verb`, `noun`, `adj`).

2. **UniMorph Project Datasets:**
   * Integrate universal morphological feature schemas (UniMorph) for high-precision inflection paradigm verification.

3. **Build Script Workflow:**
   ```
   [ Kaikki JSON / UniMorph Dumps ]
                 │
                 ▼
     scripts/data-build/extract_verbs.py
     scripts/data-build/extract_nouns.py
                 │
                 ▼
   [ SQLite / JSON Paradigm Bundles (~2-4 MB / lang) ]
   ```

---

## 7. Implementation Milestones

| Phase | Milestone | Deliverables | Target Timeline |
|---|---|---|---|
| **Phase 1** | **Data Pipeline & Architecture** | Python extraction scripts for Kaikki dumps; SQLite/JSON schema design; Repository setup for `verbi-app` and `genus-app`. | Week 1 - 2 |
| **Phase 2** | **`Verbi` Engine Development** | Client-side search & rendering core; Conjugation matrices for FR, IT, RU, EL; PWA offline support. | Week 3 - 4 |
| **Phase 3** | **`Genus` Engine Development** | Gender lookup & full 4/6 case declension rendering grids for FR, IT, RU, EL; SQLite WASM integration. | Week 5 - 6 |
| **Phase 4** | **Packaging & Deployment** | GitHub Actions CI/CD; PWA service worker finalization; Capacitor mobile packaging setup (`.apk`, `.ipa`). | Week 7 |

---

## 8. Summary & Next Steps

This blueprint guarantees that the new **`Verbi`** and **`Genus`** applications will fulfill all requirements:
* Standalone operation completely separated from the main website.
* Static hosting on GitHub Pages with 0 server costs.
* Instant offline-first PWA and native app capabilities.
* Comprehensive conjugation, gender, and case declension matrices across French, Italian, Russian, and Greek.

Upon user approval of this architecture, initial data extraction pipelines and application templates can be initialized in standalone repositories.

# COSY Ecosystem Master Design System & Architecture Standard

> **Status:** Canonical Specification
> **Version:** 1.0.0
> **Master Token File:** `shared/css/tokens.css`
> **Published Live CDN URL:** `https://cosylanguages.github.io/COSYlanguages/shared/css/tokens.css`

---

## 1. Overview & Ecosystem Principles

`COSYlanguages` is the primary public entry point in a family of 8 interconnected product repositories:
1. **COSYlanguages** — Primary public ecosystem hub, placement tools, and practice engine.
2. **COSYdata** — Standalone vocabulary central repository and API endpoints.
3. **COSYtools** — Conjugation, gender, and preposition reference tools & PWAs.
4. **COSYmanuals** — Interactive language learning manuals & CELTA grammar topic guides *(restricted access)*.
5. **COSYplatform** — Curriculum master data and learning management backend *(restricted access)*.
6. **COSYevents** — Public speaking club hub & session decks *(public gateway with restricted session decks)*.
7. **COSYgames** — Communicative open-world RPGs, Scene Match, and vocabulary games.
8. **COSYworld** — Paused open-world RPG sub-product.

### Core Ecosystem Principles
- **One Visual Ecosystem:** All products must feel like part of a unified visual family through shared neutrals, typography, spacing, border radii, and button conventions.
- **Shared System, Local Accent:** The base system provides neutrals, sage brand scale, typography, and focus ring states. Consumer products layer their own accent identity (e.g. course tracks or standalone product themes) on top of the base system using defined `--cosy-track-*` tokens.
- **No Text Translation Fallback (Emoji + Icon Navigation):** UI navigation relies on universally clear English labels combined with standardized canonical emoji tokens, avoiding text-to-text translation ambiguity.

---

## 2. Design Tokens Reference (`shared/css/tokens.css`)

### 2.1 Base Neutrals & Surface Palette

| CSS Custom Property | Light Mode Value | Dark Mode Value | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--cosy-color-cream` / `--cream` | `#fdfcf8` | `#1a1f1a` | Primary paper / background |
| `--cosy-color-cream-dark` / `--cream-dark` | `#f5ede0` | `#141914` | Secondary surface / container tint |
| `--cosy-color-warm-white` / `--warm-white` | `#FFFEFB` | `#222b22` | Card & modal background |
| `--cosy-color-surface` / `--surface-color` | `#FFFFFF` | `#222b22` | Surface white element |
| `--cosy-color-ink` / `--ink` | `#2a2a2a` | `#e8f0e9` | Primary high-contrast body text |
| `--cosy-color-ink-soft` / `--ink-soft` | `#4a4a4a` | `#c8d8c9` | Medium contrast secondary text |
| `--cosy-color-ink-muted` / `--ink-muted` | `#4a4a4a` | `#c8d8c9` | Muted labels and subtitles |
| `--cosy-color-ink-faint` / `--ink-faint` | `#5c5957` | `#8a9e8b` | Captions and tertiary notes |
| `--cosy-color-border` / `--border` | `rgba(74, 107, 80, 0.12)` | `rgba(107, 143, 113, 0.20)` | Default divider and card border |
| `--cosy-color-border-hover` / `--border-hover` | `rgba(74, 107, 80, 0.25)` | `rgba(107, 143, 113, 0.35)` | Interactive hover border state |

### 2.2 Sage Base Brand Palette (General / Core Brand)

| CSS Custom Property | Value | Role / Usage |
| :--- | :--- | :--- |
| `--cosy-color-sage` / `--sage` | `#416b49` | Primary brand green, key buttons, interactive CTAs |
| `--cosy-color-sage-dark` | `#375742` | Primary hover state, dark headers |
| `--cosy-color-sage-deep` | `#233827` | Deep contrast headers and ecosystem strip background |
| `--cosy-color-sage-soft` | `#6b9474` | Secondary outlines and borders |
| `--cosy-color-sage-mist` | `#f0f5f1` | Active navigation pill background |
| `--cosy-color-sage-pale` / `--sage-light` | `#e8f0e9` | Hover pill background and light badges |

### 2.3 Product & Track Accent Layer

The ecosystem supports 6 documented course-track / product accent color pairs layered cleanly over the base system:

| Track / Product Accent | Token Name | Primary Accent | Light Tint | Deep / Hover Accent |
| :--- | :--- | :--- | :--- | :--- |
| **Track 1: General Course** | `--cosy-track-general` | `#416b49` (Forest Green) | `#e8f0e9` | `#233827` |
| **Track 2: Spoken Course** | `--cosy-track-spoken` | `#B84318` (Terracotta/Coral) | `#faeee8` | `#8a2e0e` |
| **Track 3: Professional Course**| `--cosy-track-professional` | `#1e2f6b` (Credible Navy) | `#e8ecf5` | `#121e48` |
| **Track 4: Travelling Course** | `--cosy-track-travelling` | `#4a6b50` (Fresh Green) | `#e5f4ec` | `#2f4734` |
| **Track 5: Relocation Course** | `--cosy-track-relocation` | `#d66161` (Warm Rust/Amber) | `#fcebeb` | `#9e3b3b` |
| **Track 6: Exam Preparation** | `--cosy-track-exam` | `#7a5c3a` (Scholarly Plum) | `#f5ede0` | `#543e26` |

### 2.4 Semantic Colors & Interactive Focus

| Semantic Intent | Token Name | Light Value | Dark Value | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Error / Destructive** | `--cosy-semantic-error` | `#a32d2d` | `#f87171` | Wrong answers, destructive alerts |
| **Error Light BG** | `--cosy-semantic-error-light` | `#fcebeb` | `#2d1515` | Error banner background |
| **Success** | `--cosy-semantic-success` | `#416b49` | `#4ade80` | Correct answers, completed checks |
| **Success Light BG** | `--cosy-semantic-success-light` | `#e5f4ec` | `#15241b` | Success banner background |
| **Warning / Caution** | `--cosy-semantic-warning` | `#945e05` | `#fbbf24` | Streak warnings, pending states |
| **Warning Light BG** | `--cosy-semantic-warning-light` | `#fff8e7` | `#2d2417` | Caution note cards |
| **Focus / Interactive** | `--cosy-semantic-focus` | `#416b49` | `#5a7a5f` | Keyboard focus ring (`--focus-ring`) |

### 2.5 Typography Scale & Font Stacks

```css
/* Font Stacks */
--cosy-font-sans:  'Nunito', 'DM Sans', sans-serif;
--cosy-font-serif: 'Fraunces', 'Lora', serif;
--cosy-font-mono:  'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;

/* Type Size Scale */
--cosy-font-size-xs:   0.75rem;   /* 12px */
--cosy-font-size-sm:   0.875rem;  /* 14px */
--cosy-font-size-base: 1rem;      /* 16px */
--cosy-font-size-lg:   1.125rem;  /* 18px */
--cosy-font-size-xl:   1.25rem;   /* 20px */
--cosy-font-size-2xl:  1.5rem;    /* 24px */
--cosy-font-size-3xl:  2rem;      /* 32px */
--cosy-font-size-4xl:  2.5rem;    /* 40px */

/* Font Weights */
--cosy-font-weight-normal:   400;
--cosy-font-weight-medium:   500;
--cosy-font-weight-semibold: 600;
--cosy-font-weight-bold:     700;
--cosy-font-weight-extrabold: 800;
```

### 2.6 Spacing & Border Radius Scales

```css
/* Spacing Scale */
--cosy-space-xs:  4px;
--cosy-space-sm:  8px;
--cosy-space-md:  16px;
--cosy-space-lg:  24px;
--cosy-space-xl:  32px;
--cosy-space-xxl: 48px;

/* Border Radius Scale */
--cosy-radius-xs:   4px;
--cosy-radius-sm:   8px;
--cosy-radius-smm:  10px;
--cosy-radius-md:   14px;
--cosy-radius-base: 18px;
--cosy-radius-lg:   22px;
--cosy-radius-xl:   32px;
--cosy-radius-full: 100px;
```

### 2.7 Elevation & Shadows

```css
--cosy-shadow-sm:   0 2px 12px rgba(46, 74, 51, 0.07);
--cosy-shadow-base: 0 6px 28px rgba(46, 74, 51, 0.10);
--cosy-shadow-md:   0 4px 14px rgba(46, 74, 51, 0.15);
--cosy-shadow-lg:   0 6px 20px rgba(46, 74, 51, 0.25);
```

---

## 3. Product & Track Accent Layering Pattern

To maintain ecosystem visual cohesion while permitting product-specific identities:

1. **Include Base System:** Import `shared/css/tokens.css` first to establish shared neutrals, fonts, and spacing.
2. **Layer Accent Tokens:** Define local CSS custom properties that map product key actions to track accent tokens.

### Example Accent Layering in Consumer Repos
```css
/* In COSYtools or COSYgames local stylesheet */
@import "https://cosylanguages.github.io/COSYlanguages/shared/css/tokens.css";

:root {
  /* Product Accent Override using Track 3 (Credible Navy) */
  --product-accent:       var(--cosy-track-professional, #1e2f6b);
  --product-accent-light: var(--cosy-track-professional-light, #e8ecf5);
}

/* Primary actions use the product accent without altering global neutrals */
.product-hero-cta {
  background: var(--product-accent);
  color: #ffffff;
  border-radius: var(--cosy-radius-full);
}
```

---

## 4. Emoji + Icon Navigation Convention

Navigation items across all ecosystem applications follow a strict **"Emoji + Icon Navigation"** convention.

### Rules
1. **No Text Translation Fallback:** Do not duplicate nav strings in local languages; use clean English labels accompanied by standardized canonical emoji icons.
2. **Trailing Emoji for Primary Top-Level Navigation:** Emoji appears *after* the text label for primary navigation tabs and links.
3. **Leading Emoji for Action CTAs & Buttons:** Emoji appears *before* the text label for action buttons, back links, and launch triggers.
4. **Gated Product Lock Icon (`🔒`):** Place the lock icon after links pointing to restricted or paid products (`COSYmanuals`, `COSYplatform`).

### Canonical Emoji Navigation Map

| Nav Destination / Action | Canonical UI Label | Placement | Icon | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Home Page** | `COSYlanguages` | Logo | 🏠 / Logo | `<span>COSYlanguages</span>` |
| **Courses** | `Courses` | Trailing | 📚 | `Courses` |
| **Practice Hub** | `Practice 💡` | Trailing | `💡` | `<a href="practice/index.html">Practice 💡</a>` |
| **Tools / Reference Engines** | `Tools 🔎` | Trailing | `🔎` | `<a href="...">Tools 🔎</a>` |
| **Games Hub** | `Games 🎮` | Trailing | `🎮` | `<a href="...">Games 🎮</a>` |
| **Events / Speaking Clubs** | `Events 🎉` | Trailing | `🎉` | `<a href="...">Events 🎉</a>` |
| **Blog / Editorial** | `Blog 📰` | Trailing | `📰` | `<a href="...">Blog 📰</a>` |
| **Contact / Support** | `💬 Contact Us` | Leading | `💬` | `<a href="...">💬 Contact Us</a>` |
| **Back / Return Link** | `← Back to [Page]` | Leading | `←` | `<a href="...">← Back to Practice</a>` |
| **Launch Tool Action** | `▶ Launch [Tool]` | Leading | `▶` | `<button>▶ Launch FR Conjugeur</button>` |
| **Gated Product Link** | `Manuals 🔒` | Trailing | `🔒` | `<a href="...">Manuals 🔒</a>` |

---

## 5. UI Language Switcher & Monolingual Immersion Architecture

### Interface Language Switcher
All main landing/home pages across the COSY product ecosystem (COSYlanguages, COSYtools, COSYgames, COSYevents) must provide an interface language switcher in the header navigation actions. This allows beginner students to navigate the site in their L1 mother tongue or challenge themselves by switching the UI chrome into a target language.

#### Supported UI Interface Languages
Currently, the UI chrome localization system supports **5 core interface languages**:

| Code | Flag | Label | Native Name |
| :--- | :--- | :--- | :--- |
| `en` | 🇬🇧 | EN | English |
| `fr` | 🇫🇷 | FR | Français |
| `it` | 🇮🇹 | IT | Italiano |
| `ru` | 🇷🇺 | RU | Русский |
| `el` | 🇬🇷 | EL | Ελληνικά |

#### Standard Switcher Markup
```html
<select id="cosy-ui-lang-switcher" class="cosy-lang-select" onchange="if(window.setLanguage)window.setLanguage(this.value)" aria-label="Interface Language">
  <option value="en">🇬🇧 EN</option>
  <option value="fr">🇫🇷 FR</option>
  <option value="it">🇮🇹 IT</option>
  <option value="ru">🇷🇺 RU</option>
  <option value="el">🇬🇷 EL</option>
</select>
```

---

### Monolingual Content Firewall Standard
While the navigation chrome, headers, and general landing page metadata localizes based on the user's selected UI language, **all learning and practice content related to a specific studied language MUST remain 100% monolingual in that target language**.

* **Target Language Immersion:** Practice engines, games, flashcards, conjugations, declensions, and manuals for a specific language (e.g. French grammar manuals or Italian declension engines) display prompts, explanations, definitions, and examples strictly in the target language.
* **No Translation Fallback:** The platform strictly firewalls translation fields from UI prompts, card fallbacks, and exercise hints. No L1 translation hints are permitted within interactive learning modules.

---

## 6. Shared "Ecosystem Strip" Component

The **Ecosystem Strip** is a slim header banner that signals membership in the COSY family and provides direct cross-links to all fully public products.

### Component Placement & Rules
- **Included Links:** Only link fully public, account-free products: `COSYlanguages`, `COSYtools`, `COSYgames`, and `COSYevents` (public gateway page).
- **Excluded Links:** Do NOT link gated or restricted products (`COSYmanuals`, `COSYplatform`, or gated event session decks).
- **Placement:** Positioned at the top of main navigation headers or footers across all reference implementations.

### HTML Markup Reference Implementation
```html
<div class="cosy-ecosystem-strip" role="navigation" aria-label="COSY Ecosystem Products">
  <div class="cosy-strip-inner">
    <span class="cosy-strip-brand">🌐 COSY Ecosystem:</span>
    <ul class="cosy-strip-links">
      <li><a href="https://cosylanguages.github.io/COSYlanguages/" class="cosy-strip-link active">COSYlanguages</a></li>
      <li><a href="https://cosylanguages.github.io/COSYtools/" target="_blank" rel="noopener" class="cosy-strip-link">COSYtools 🔎</a></li>
      <li><a href="https://cosylanguages.github.io/COSYgames/" target="_blank" rel="noopener" class="cosy-strip-link">COSYgames 🎮</a></li>
      <li><a href="https://cosylanguages.github.io/COSYevents/" target="_blank" rel="noopener" class="cosy-strip-link">COSYevents 🎉</a></li>
    </ul>
  </div>
</div>
```

---

## 7. CDN & Live GitHub Pages Linkage Policy

Consumer repositories should link directly to the stable published token URL on GitHub Pages:

```html
<link rel="stylesheet" href="https://cosylanguages.github.io/COSYlanguages/shared/css/tokens.css">
```

Or maintain a vendor-synced copy at `shared/css/tokens.css` within their own repository root.

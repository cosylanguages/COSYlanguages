# Architectural Proposal: Language-Specific Standalone Reference Apps
**Products:** 8 Language-Dedicated Standalone Apps (2 Apps per Language: Conjugation & Gender/Declension)
**Target Languages:** French (`fr`), Italian (`it`), Russian (`ru`), Greek (`el`)
**Target Platform:** Independent Web PWAs (Pinned / Installed) & Direct Native Downloads (iOS / Android / macOS / Windows)
**Author:** COSYlanguages Architecture Team
**Date:** February 2027

---

## 1. Executive Summary & Vision

To deliver maximum speed, simplicity, and zero-distraction focus, **each language will feature 2 completely separate, dedicated standalone applications** (total 8 distinct apps across the 4 target languages).

Rather than bundling multiple languages into a single complex app, every tool is built as an independent, single-purpose application dedicated to a single language and morphological task:

### Application Matrix (8 Standalone Apps)
| Language | App 1: Conjugation Engine | App 2: Gender & Declension Engine |
|---|---|---|
| **French (`fr`)** | **`fr-conjugeur`** (Conjugaison complète) | **`fr-genre`** (Genre & Pluriels) |
| **Italian (`it`)** | **`it-coniugatore`** (Conjugazione dei verbi) | **`it-genere`** (Genere & Preposizioni) |
| **Russian (`ru`)** | **`ru-спряжение`** (Спряжение глаголов & Аспект) | **`ru-род-падежи`** (Род, Одушевлённость & 6 Падежей) |
| **Greek (`el`)** | **`el-κλίση-ρημάτων`** (Κλίση ρημάτων & Φωνές) | **`el-γένος-πτώσεις`** (Γένος & 4 Πτώσεις) |

---

## 2. PWA Pinning & Direct Native Download Architecture

Users across **all devices** (iOS, Android, macOS, Windows, Linux) must be able to **pin to home screen / taskbar** and/or **download direct native installers**, completely independent of the main `cosylanguages.github.io` website.

```
                                  [ 8 Independent GitHub Repositories ]
                                                    │
                ┌───────────────────────────────────┴───────────────────────────────────┐
                ▼                                                                       ▼
    [ Progressive Web App (PWA) ]                                          [ Direct Downloadable Installers ]
 - Distinct manifest.json & icon per app                                - Native Mobile: Android (.apk), iOS (.ipa via TestFlight)
 - Standalone Service Worker (100% Offline)                            - Native Desktop: Windows (.exe), macOS (.dmg), Linux (.AppImage)
 - Browser "Install / Pin to Home Screen"                               - Pre-packaged via GitHub Actions CI (Capacitor & Tauri)
```

### 2.1 Multi-Device Pinning & Installation Mechanisms
1. **Web PWA Pinning (Instant & Zero-Install):**
   * Each of the 8 apps possesses its own `manifest.json`, custom app icon, theme color, and dedicated Service Worker (`sw.js`).
   * **iOS (Safari / Chrome):** Users tap *Share -> Add to Home Screen*. App installs with native splash screen, no URL bar, and independent icon.
   * **Android (Chrome / Edge / Firefox):** Prompts an "Install App" banner; installs directly into the app drawer and home screen.
   * **macOS / Windows / Linux (Chrome / Edge / Brave):** Displays an "Install App" icon in the address bar, pinning the app to the Dock or Windows Start Menu / Taskbar.

2. **Direct Executable / Native Package Downloads:**
   * For users who prefer downloading a traditional binary installer rather than a web shortcut:
     * **Mobile Binaries:** Automated GitHub Actions build native Android `.apk` files and iOS `.ipa` builds using **Capacitor**. Hosted on the app's GitHub Releases tab.
     * **Desktop Executables:** Automated builds generate lightweight Windows `.exe` installers, macOS `.dmg` disk images, and Linux `.AppImage` files using **Tauri**.

---

## 3. Pattern Recognition & Color-Coded Endings

To help learners develop intuitive **pattern recognition** across regular verb paradigms and noun/adjective case declensions, all inflected forms dynamically split stems and regular endings into high-contrast, color-coded visual spans:

* **Stems (`.stem`):** Rendered in dark neutral ink / sage tones (e.g., `parl-`, `fin-`, `стол-`, `γραψ-`).
* **Regular Endings (`.ending`):** Rendered in vibrant, distinct highlight colors (e.g., terracotta `#b7094c` or deep purple `#5e60ce`):
  * **French:** *parl*<span style="color:#b7094c; font-weight:bold;">ons</span>, *parl*<span style="color:#b7094c; font-weight:bold;">iez</span>, *fin*<span style="color:#b7094c; font-weight:bold;">issez</span>.
  * **Italian:** *parl*<span style="color:#b7094c; font-weight:bold;">iamo</span>, *finc*<span style="color:#b7094c; font-weight:bold;">ete</span>.
  * **Russian Case Endings:** *стол*<span style="color:#b7094c; font-weight:bold;">ом</span> (Instrumental), *стол*<span style="color:#b7094c; font-weight:bold;">ах</span> (Prepositional Plural).
  * **Greek Case Endings:** *δρόμ*<span style="color:#b7094c; font-weight:bold;">ους</span> (Accusative Plural).

---

## 4. Integrated Practice Game Mode ("Mode Entraînement")

Every app features an integrated, lighthearted **Practice Game Mode** accessible via a header toggle (`🎮 Mode Entraînement`).

### Game Mechanics
1. **Interactive Prompts:** Generates fill-in-the-blank challenges based on loaded dictionary verbs/nouns (e.g., *"Conjuguez 'parler' à l'imparfait avec 'nous'"* or *"Quel est le cas génitif pluriel de 'стол' ?"*).
2. **Instant Feedback:** Validates user typing in real-time, displaying green success checkmarks or red correction cards highlighting the exact color-coded ending.
3. **Streak & Score Tracker:** Keeps local session score (e.g., 🔥 5 d'affilée !) using `localStorage` without external tracking.

---

## 5. Lexical Enrichment: Concise Definitions & Antonyms/Opposites

Every entry in all 8 applications will display more than just grammatical paradigms. To ensure learners immediately understand the word's meaning and relationships, every verb, noun, and adjective entry includes:

1. **Short & Understandable Definition:**
   A clear, 1-sentence dictionary gloss written in accessible language (e.g., *French: "parler" -> "Exprimer sa pensée par la parole" / "To speak or converse"*).
2. **Antonyms & Opposites (When Applicable):**
   Direct links or pills showing exact semantic opposites (e.g., *French: "monter" ↔ "descendre"*; *Italian: "aprire" ↔ "chiudere"*; *Russian: "любить" ↔ "ненавидеть"*; *Greek: "αρχίζω" ↔ "τελειώνω"*). Clicking an antonym pill instantly loads its complete conjugation or declension table.

---

## 6. Data Sourcing & Offline Client-Side Query Engines

Since all 8 apps run 100% serverless on GitHub static hosting or offline as native binaries, data query speeds are optimized for <15ms response times using client-side pre-compiled databases.

### 6.1 Data Architecture per App Type
* **Conjugation Apps (`fr-conjugeur`, `it-coniugatore`, `ru-спряжение`, `el-κλίση-ρημάτων`):**
  * **Engine:** Hybrid JS Rule Engine + Mini Irregular JSON Dictionary (enriched with glosses, antonym maps, and ending parsers).
  * **Size:** ~350 KB - 900 KB per app bundle.
* **Gender & Declension Apps (`fr-genre`, `it-genere`, `ru-род-падежи`, `el-γένος-πτώσεις`):**
  * **Engine:** Client-side SQLite WASM database (`wa-sqlite`) or compressed IndexedDB hash tables extracted from Kaikki.org / UniMorph dumps (containing glosses, genders, antonym relations, and case ending splitters).
  * **Size:** ~2.8 MB - 5.0 MB per app database (cached 100% offline on first load).

---

## 7. Summary & Action Plan

1. **8 Dedicated Repositories:** Host each app in a standalone repo (`cosylanguages/fr-conjugeur`, `cosylanguages/fr-genre`, etc.).
2. **0 Server Dependencies:** Static PWA hosting via GitHub Pages + downloadable releases via GitHub Actions.
3. **Cross-Device Availability:** 100% installable/pinnable as standalone PWAs or downloadable as native mobile APKs and desktop EXEs/DMGs.
4. **Pattern Recognition & Practice Mode:** Color-coded stem/ending separation and interactive practice mini-games.

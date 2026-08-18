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

## 3. Data Sourcing & Offline Client-Side Query Engines

Since all 8 apps run 100% serverless on GitHub static hosting or offline as native binaries, data query speeds are optimized for <15ms response times using client-side pre-compiled databases.

### 3.1 Data Architecture per App Type
* **Conjugation Apps (`fr-conjugeur`, `it-coniugatore`, `ru-спряжение`, `el-κλίση-ρημάτων`):**
  * **Engine:** Hybrid JS Rule Engine + Mini Irregular JSON Dictionary.
  * **Size:** ~300 KB - 800 KB per app bundle.
  * **Instant Lemmatization:** Entering a conjugated verb form (e.g., French *suis*, Italian *andavo*, Russian *писал*, Greek *έγραψα*) instantly resolves to the infinitive and renders the complete tense grid.

* **Gender & Declension Apps (`fr-genre`, `it-genere`, `ru-род-падежи`, `el-γένος-πτώσεις`):**
  * **Engine:** Client-side SQLite WASM database (`wa-sqlite`) or compressed IndexedDB hash tables extracted from Kaikki.org / UniMorph dumps.
  * **Size:** ~2.5 MB - 4.5 MB per app database (cached 100% offline on first load).
  * **Instant Search:** Typing any noun, adjective, or pronoun displays grammatical gender, articles, and complete declension/plural paradigms.

---

## 4. Feature Deep-Dive per Language Pair

### 4.1 French
* **`fr-conjugeur`:** Covers all 3 verb groups, active/passive voice, reflexives (*se laver*), and compound tenses with automatic auxiliary selection (*être* vs *avoir*).
* **`fr-genre`:** Noun gender search (*le / la / l'*), plural exceptions (*-x, -aux*), and adjective gender agreement matrices.

### 4.2 Italian
* **`it-coniugatore`:** *-are*, *-ere*, *-ire* (with *-isc-* present infixes), subjunctive (*congiuntivo*), conditional, and *essere/avere* auxiliary flags.
* **`it-genere`:** Noun/adjective genders (*il, lo, la, l'*), irregular plurals (*uovo -> uova*), and combined preposition matrix (*preposizioni articolate*).

### 4.3 Russian
* **`ru-спряжение`:** 1st/2nd conjugations, stem mutations (*писать -> пишу*), aspectual pairs (НСВ/СВ), and explicit stress accent marks on every conjugated form.
* **`ru-род-падежи`:** Gender (Masc/Fem/Neut/Common), Animacy tags (Oduševlënnoe), and full 6-case declension grids (Именительный, Родительный, Дательный, Винительный, Творительный, Предложный) in Singular and Plural with stress marks.

### 4.4 Greek
* **`el-κλίση-ρημάτων`:** Active & Passive voices (*Ενεργητική/Παθητική φωνή*), Aorist stem shifts (*γράφω -> έγραψα*), all 8 tenses, and strict 3-syllable accent shifting rules.
* **`el-γένος-πτώσεις`:** Noun genders (*ο, η, το*), 4-case declension grids (Ονομαστική, Γενική, Αιτιατική, Κλητική), and imparisyllabic noun declension classes.

---

## 5. Summary & Action Plan

1. **8 Dedicated Repositories:** Host each app in a standalone repo (`cosylanguages/fr-conjugeur`, `cosylanguages/fr-genre`, etc.).
2. **0 Server Dependencies:** Static PWA hosting via GitHub Pages + downloadable releases via GitHub Actions.
3. **Cross-Device Availability:** 100% installable/pinnable as standalone PWAs or downloadable as native mobile APKs and desktop EXEs/DMGs.

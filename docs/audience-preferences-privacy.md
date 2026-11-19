# Audience Preferences & Privacy Architecture

This document details the privacy implications and technical safeguards built into the COSYlanguages **Audience Preference & Accessibility System**.

---

## 1. Principles & Safeguards

### 🛡️ Zero Age Collection
- COSYlanguages **never asks for date of birth, age, or personal identity details**.
- Audience preferences (`children`, `teens`, `adults`, `seniors`) are optional visual presentation toggles selected directly by the user.

### 🚫 Zero Algorithmic Inferencing
- No sensitive user demographic data or personal attributes are inferred from user behavior, quiz performance, or navigation paths.
- Preference switches are purely user-initiated via explicit UI controls.

### 🔒 Client-Side Local Storage Sovereignty
- All preference settings are saved exclusively in browser `localStorage`:
  - `cosy_audience_preference`: `'default' | 'children' | 'teens' | 'adults' | 'seniors'`
  - `cosy_accessibility_text_scale`: `'1.0' | '1.15' | '1.25' | '1.40'`
  - `cosy_accessibility_reduced_motion`: `'false' | 'true'`
- Preference choices are **never transmitted to cloud servers, databases, or analytics providers**.

### 🌿 Safe Defaults & Content Adaptation
- Unselected default (`default`) preserves standard neutral layout and styling. The platform is 100% usable without selecting any audience preference.
- Rather than maintaining duplicate applications or isolated content silos, COSYlanguages adapts presentation dynamically via semantic CSS data attributes (`data-audience`, `data-text-scale`, `data-reduced-motion`).

### ♿ Independent Accessibility Controls
- Accessibility features (Text Scale and Reduced Motion) remain independent from audience preferences.
- Changing audience mode does not overwrite custom accessibility settings chosen by the user.

---

## 2. Audit & Management Console

Users can view, modify, or delete their stored preferences at any time:
1. Open **Privacy & Safety** (`privacy.html`).
2. Audit active local keys under **Your Local Storage Audit Console**.
3. Use the **Reset Preferences** button in the Audience Control Panel or click **Clear All Learning Data** on `privacy.html`.

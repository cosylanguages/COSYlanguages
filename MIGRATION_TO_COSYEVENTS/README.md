# MIGRATION_TO_COSYEVENTS

## Overview

This directory contains the full existing event session templates, stylesheets, and structural definitions exported from `COSYlanguages` for migration into the companion repository **[`COSYevents`](https://github.com/cosylanguages/COSYevents)**.

## Rationale & Architecture

Per the ecosystem architecture specification:
- **`COSYlanguages`** is the fully public, open-access portal gateway (no accounts, no gating). Only event names, themes, and public landing stubs live here (located at `apps/premium-events/index.html`).
- **`COSYevents`** owns all full interactive session decks, host presentation controls, multimedia night guides, and private lesson templates. Full session content is restricted to hosts and enrolled/paying students.

## Contents in this Bundle

1. **`templates/`**:
   - `session-template.html`: Standard 6-part speaking club session template.
   - `science-session-template.html`: Keeping Up with Science session deck.
   - `mind-session-template.html`: Mind Matters session deck.
   - `debate-session-template.html`: Debatable & Relatable session deck.
   - `quotes-session-template.html`: The Greatest Quotes session deck.
   - `celebrate-session-template.html`: Let's Celebrate session deck.
   - `life-session-template.html`: My Life With/Without session deck.
   - `if-you-were-session-template.html`: If You Were... session deck.
   - `wonder-session-template.html` / `wonder-mini-group-template.html` / `wonder-private-lesson-template.html`: I Couldn't Help But Wonder session decks (group & private).
   - `karaoke-session-template.html`: Karaoke Club interactive deck.
   - `long-reads-session-template.html`: Long Reads literary parlor deck.

2. **`css/`**:
   - `events.css`: Stylesheet for event session presentation, host controls, and theme snapshots.

## Instructions for COSYevents Maintainer

1. Copy the contents of `templates/` into `COSYevents` under `templates/` or `sessions/`.
2. Copy `css/events.css` into `COSYevents/css/events.css`.
3. Integrate host/student access gating in `COSYevents` as appropriate.
4. Ensure public-facing event overview links in `COSYlanguages` point to `https://cosylanguages.github.io/COSYevents/`.

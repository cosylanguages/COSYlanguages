# Hybrid & Community Workspace ("Beyond the Screen 🌿")

This directory houses COSYlanguages' offline-online hybrid initiatives, designed to connect digital practice with tactile, paper, and audio learning.

## Architecture & Directory Structure

```
hybrid/
├── index.html       # Landing page ("Beyond the Screen 🌿")
├── bridge.html      # Bridge Tools & pure client-side QR Code Generator widget
├── zine.html        # COSYzine Booklet & Newspaper (Learner Voices, A2–B1 issues)
├── radio.html       # COSY Radio & Podcast (5–10 min slow-speech episodes & roadmap)
├── README.md        # Dev-facing documentation (this file)
└── issues/          # (Future) Folder for published COSYzine PDF downloads
```

## Features & Implementation Details

### 1. Landing Page (`/hybrid/index.html`)
- Explains the online ↔ offline habit loop.
- Features three distinct cards for Bridge Tools, COSYzine, and COSY Radio.
- Links out to existing printable studio apps (`/print-cards.html`, `/print-zine.html`, `/print-box.html`, `/print-boardgame.html`).

### 2. Bridge Tools & QR Code Generator (`/hybrid/bridge.html`)
- Interactive client-side QR Code Generator widget built with vanilla JS and `QRCode.js` (loaded via cdnjs with fallback HTML5 Canvas renderer).
- Presets for Free Practice, Games, Speaking Clubs, and Pocket Zines.
- Supports generating downloadable PNG QR codes and printing QR label stickers.
- Teaser for upcoming offline-first Service Worker PWA mode for `/practice/` and `/games/`.

### 3. COSYzine (`/hybrid/zine.html`)
- Introduces the A2–B1 mini-newspaper concept (short stories, idioms, comic strips, culture specials).
- Integrates with `/print-zine.html` (8-page A4 single-sheet foldable pocket booklet compiler).
- Learner Voices submission box with direct mailto CTA (`cosylanguages@gmail.com`).
- Placeholder issue grid ready for real PDF files to be placed under `/hybrid/issues/`.

### 4. COSY Radio (`/hybrid/radio.html`)
- Roadmap covering Phase 1 (slow-speech podcasts), Phase 2 (weekly live conversation hour), and Phase 3 (24/7 internet radio stream).
- Placeholder episode list component with stub audio players.
- Cross-links Speaking Clubs (`/events/index.html`) as the primary source material for radio episodes.

## Instructions for Populating Future Content

- **Adding new COSYzine issues:**
  1. Create your printable A4 PDF issue or zine compiler preset.
  2. Place the PDF in `/hybrid/issues/issue-01-[lang].pdf`.
  3. In `/hybrid/zine.html`, locate the corresponding `.zine-issue-card`, update the status from `⏳ Coming Soon` to `Available`, remove `disabled` from the button, and set its link to `issues/issue-01-[lang].pdf`.

- **Adding new COSY Radio episodes:**
  1. Upload the MP3 file or embed link (e.g. Spotify / Anchor / HTML5 `<audio>` source).
  2. In `/hybrid/radio.html`, replace the `.stub-player` element inside the `.episode-card` with a standard `<audio controls src="..."></audio>` element or embed iframe.

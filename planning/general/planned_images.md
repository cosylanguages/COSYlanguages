# Planned images folder reorganisation

## Current situation
The `images/` folder is likely a flat mix of:
- Language flag images
- COSY logo variants
- Game artwork and assets
- UI icons and decorative elements
- Course type imagery
- Language-specific hero or illustrative images

A flat unstructured folder makes it difficult to audit, maintain, and extend.

## Target structure (implement in Stage 10)
images/
├── flags/          ← language flag SVGs or PNGs, named by ISO code (en.svg, el.svg, etc.)
├── logos/          ← COSY logo variants (light background, dark background, icon-only)
├── games/          ← per-game artwork and assets
├── ui/             ← icons, decorative elements, generic UI imagery
├── courses/        ← imagery representing each course type
└── languages/      ← hero images or illustrations per language

## Rules
- Never put images directly in the root `images/` folder
- Flag images should be consistently named by ISO 639-1 code
- After reorganising in Stage 10, update HTML/CSS references in Stage 11

## Audit checklist (fill in during Stage 10)
| File | Current location | Target location | Action needed |
|------|-----------------|-----------------|---------------|
| (audit images/ folder in Stage 10 and populate this table) | | | |

## Missing flag images
Flags needed for coming-soon languages (create or source before publishing them):
| Language | Code | Flag needed |
|----------|------|-------------|
| Tatar | tt | No standard national flag — use text "ТТ" or region flag |
| Bashkir | ba | No standard national flag — use text "БА" or region flag |
| Breton | br | No standard national flag — use Breton cultural flag or text "BR" |

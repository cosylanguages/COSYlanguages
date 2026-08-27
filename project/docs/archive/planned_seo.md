# Planned SEO and accessibility improvements

## SEO gaps — fix in Stage 11
| Element | Status | Action |
|---------|--------|--------|
| meta description | Missing or generic | Add unique description per page |
| Open Graph tags | Missing | Add og:title, og:description, og:image to all main pages |
| html lang attribute | Probably missing on language subpages | Each language page needs correct lang attribute |
| link rel canonical | Missing | Add to all pages |
| sitemap.xml | Missing | Create listing all public pages |
| robots.txt | Missing | Create basic robots.txt |

## Accessibility gaps — fix progressively
| Issue | Priority | Notes |
|-------|----------|-------|
| Colour contrast | High | Sage green palette may fail WCAG AA in some combos — audit with contrast checker |
| Focus styles | High | Check if outline:none used anywhere — restore visible focus rings |
| Keyboard navigation | High | All games and practice must be fully keyboard-navigable |
| Screen reader labels for emoji nav | Medium | Emoji-only elements need aria-label |
| html lang per language page | Medium | Each language page needs its own lang attribute |
| Skip-to-content link | Medium | Visually hidden skip link at top of each page |
| Alt text audit | Medium | Many images in images/ folder likely missing alt text |

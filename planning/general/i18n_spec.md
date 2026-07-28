# COSYlanguages i18n Specification

## What "i18n" means on this platform
On COSYlanguages, i18n does not mean translation.
It means: switching the entire platform UI to operate in a different target language.
When a student studies Greek, every label, prompt, instruction, and hint is in Greek.
There is no fallback to English.

## How language mode is determined (decision — implement in Stage 2)

### Rule 1 — URL path determines language
The URL is the primary source of truth for language mode:
- `cosylanguages.github.io/COSYlanguages/` → homepage, no language mode active
- `cosylanguages.github.io/COSYlanguages/languages/el/` → Greek mode
- `cosylanguages.github.io/COSYlanguages/languages/ru/` → Russian mode
- etc.

i18n.js reads `window.location.pathname` and extracts the language code.

### Rule 2 — localStorage remembers the last-used language
When a student visits a language section, the code is stored:
`localStorage.setItem('cosy_last_language', 'el')`
This is used on the homepage to show a "continue in X" shortcut — nothing more.
It does NOT override the URL. The URL always wins.

### Rule 3 — The homepage has no language mode
The homepage (`index.html`) is the neutral entry point.
It shows all active languages as cards with their native names and flags.
The homepage UI labels (if any) should be either emoji-only, or repeated in all active languages.
No single-language assumption on the homepage.

### Rule 4 — Student portal language
A logged-in student's portal operates in their assigned learning language.
This is stored as `cosy_user_lang` in localStorage (set at login via access code).
The portal reads `cosy_user_lang` to determine which UI strings file to load from `data/ui/`.

## How data-translate-key works
`data-translate-key` attributes on HTML elements identify UI string slots.
i18n.js loads the correct `data/ui/[lang].json` file and replaces the text content
of each element that has a `data-translate-key` matching a key in that JSON.

Example:
```html
<a class="nav-link" data-translate-key="nav.grammar">Grammar</a>
```
When in Greek mode, i18n.js loads `data/ui/el.json` and replaces the text with
the value of `nav.grammar` from that file — which is `Γραμματική`.
The hardcoded fallback text ("Grammar") is only seen if the JSON fails to load.

## What i18n.js must NOT do
- Must NOT contain any translation pairs (no English-to-Greek mapping)
- Must NOT fall back to English if a key is missing — leave it blank or use the emoji fallback
- Must NOT run on the homepage — the homepage has no language mode
- Must NOT change the URL — it only reads the URL

## UI strings files (data/ui/[lang].json)
One file per active language. Each file contains ALL UI labels for that language.
There is no "master English file" that other languages extend.
Each file is self-contained and complete.

## Non-translation rule (absolute)
If Jules ever adds a structure like:
  `"en": "Grammar", "el": "Γραμματική"`
...that is a violation. Reject it. Each UI file contains only its own language's strings.

## Decision log
| Decision | Rationale |
|----------|-----------|
| URL is primary source of truth | Predictable, shareable, bookmarkable |
| No English fallback | Non-translation rule — blank is better than wrong-language text |
| Homepage has no language mode | Neutral entry point for all users |
| localStorage only for convenience | Not for access control or mode override |

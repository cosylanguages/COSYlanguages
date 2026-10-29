# Word Explorer (Comparative Atlas tab)

Compare one concept (weekday, month, season) across the 14 COSY languages.

- **Data**: fetched at runtime from COSYdata (`comparative/languages.json`, `comparative/concepts/calendar.json`,
  `comparative/linguistics/calendar-cognates.json`) at `https://cosylanguages.github.io/COSYdata/`.
  Test against another copy with `?data=http://localhost:8001/`. Nothing is duplicated in this repo.
- **Files**: `word-explorer-core.js` (pure logic: transliteration, search, groups, observations, stats; unit-tested in `tests/word-explorer.test.js`, run `node --test tests/word-explorer.test.js`), `word-explorer.js` (UI), `word-explorer.css`.
- **Deep link**: `?view=word-explorer&concept=weekday.monday`.
- **Transliteration** (generated, simplified schemes): Russian (BGN-like), Tatar/Bashkir/Chuvash Cyrillic extensions, Greek (ELOT 743 style with accents), Armenian, Georgian (national system). IPA comes from COSYdata entries and is hidden when absent.
- **Audio**: browser speech synthesis only (no recorded audio exists in the data yet). Languages with no installed voice get a disabled button.
- **Draft policy**: cognate groups, etymologies and insights with `reviewed: false` are shown with a visible "Draft" label. Flip the flag in COSYdata after checking sources.
- **Accessibility**: shared roots use a marker symbol plus colour; search is an ARIA combobox (↑ ↓ Enter Esc); etymology uses a disclosure button; table becomes cards under 720px.
- UI labels are English like the rest of the Atlas.

# Daily fun facts

`data/daily/<lang>/facts.json`: one short fact about the language, its culture, history or
literature per entry. Every language holds 30 curated facts (English has 41).

```json
{ "id": "en:fact:1", "fact": "English is a West Germanic language whose vocabulary is more than half Latin and French in origin.",
  "topic": "etymology" }
```

Each entry has a stable `id` (`<lang>:fact:<n>`), a `fact`, and a `topic`. Topics include
`history`, `literature`, `etymology`, `figures`, `grammar`, `alphabet`, `phonetics`,
`linguistics`, `vocabulary`, `culture`, `demographics`, `global`, `institutions`, `media`,
`education`, `typography` and `punctuation`.

The facts were written to be accurate and genuinely interesting: script and alphabet history,
etymology and word origins, grammar quirks, literature and its major figures, language policy and
institutions, and each language's place in the world. See `TODO.md` for the native-speaker review
that should still confirm every fact in its own language.

- **Consumer:** the daily strip (`js/daily-strip.js`), which reads
  `https://cosylanguages.github.io/COSYlanguages/data/daily/<lang>/facts.json`.
  Until 2026-11 these files lived in COSYdata (`daily/<lang>/facts.json`); the strip still falls
  back to that location.
- Speaking and writing prompts live in COSYpractice (`data/daily/`); idioms and words are generated
  from the dictionary in COSYdata.

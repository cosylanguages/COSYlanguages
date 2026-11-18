# Daily fun facts

`data/daily/<lang>/facts.json`: one short fact about the language, its culture or history per entry
(14 languages; English has 85 facts, el/fr/it/ru have 65, the rest 60, except Chuvash with 10 placeholders
awaiting native review — see `TODO.md`). Entries migrated from the retired Daily Dose dataset
(`COSY_DAILY_FACTS` and the legacy `data/ui/fun_fact_*` arrays) carry `"topic": "legacy"`.

```json
{ "id": "en:fact:1", "fact": "English is the official international language of aviation and maritime communications worldwide.",
  "topic": "linguistics" }
```

- **Consumer:** the daily strip (`js/daily-strip.js`), which reads `https://cosylanguages.github.io/COSYlanguages/data/daily/<lang>/facts.json`.
  Until 2026-11 these files lived in COSYdata (`daily/<lang>/facts.json`); the strip still falls back to that location.
- Speaking and writing prompts live in COSYpractice (`data/daily/`); idioms and words are generated from the dictionary in COSYdata.

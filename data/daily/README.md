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

## Speaking prompts in the strip

The Speaking tab reads `COSYpractice/data/daily/<lang>/speaking.json`. Every language has curated
prompts for all four CEFR bands (`A0-A1`, `A2`, `B1-B2`, `C1-C2`), modelled on the speaking parts of
IELTS, TOEFL, DELF/DALF, DELE, Goethe, ТРКИ and the other exams each language is taught for. A curated
entry can also carry the exam brief:

```json
{ "id": "en:speaking:c7", "prompt": "Describe a skill you learned that changed your daily life…",
  "level": "B1-B2", "curated": true,
  "exam": "IELTS", "part": "Part 2 · Long turn (cue card)", "task": "Cue card talk",
  "prep_seconds": 60, "speak_seconds": 120, "follow_ups": ["Was it difficult at the beginning?"] }
```

The strip renders `exam`, `part` and `task` as chips, `prep_seconds` / `speak_seconds` as "Prep 1 min /
Speak 2 min", `follow_ups` as a short list, and a band guide (`SPEAKING_BAND_GUIDE` in
`js/daily-strip.js`) that says what the selected CEFR band expects and which language to aim for. `part`
names the real speaking part of that exam, so the chip reads like "IELTS · Part 2 · Long turn (cue card)".
All fields are optional at render time, so prompts without them still render. Schema and validation live
in COSYpractice (`data/daily/README.md`, `scripts/validate-daily-prompts.js`).

# data/index/

This folder holds cross-reference index files — one per active language.
Each file is named `[lang]_index.json` (e.g. `el_index.json`, `ru_index.json`).

## What a cross-reference index is
A single flat lookup table that maps every known word_id to:
- Where to find it in vocabulary/ (language, level, topic, file path)
- Which grammar groups govern it (layer, category, group_id)

This is the engine behind unified search: a student types a word,
the platform looks it up in the index, and can show both:
- The vocabulary entry (definition, example, synonyms, antonyms)
- The grammar group(s) it belongs to (rules, paradigms, exceptions)

## Format (`[lang]_index.json`)
```json
[
  {
    "word_id": "el_verb_γράφω",
    "word": "γράφω",
    "pos": "ρήμα",
    "level": "A1",
    "vocab": {
      "file": "vocabulary/el/A1/topic_actions.json",
      "topic": "Πράξεις"
    },
    "grammar_refs": [
      {
        "layer": "morphology",
        "category": "verbs",
        "group_id": "present_simple",
        "file": "grammar/el/morphology/verbs.json"
      }
    ]
  }
]
```

## How to maintain it
Index files are NOT generated automatically — they must be updated manually
when new vocabulary or grammar entries are added in Stage 12 content sessions.
When adding a new word in Stage 12, Jules must also add or update its entry
in the relevant `data/index/[lang]_index.json`.

## Initial state
Index files start empty (empty array []) and are populated during Stage 12.
Create one empty index file per active language in this stage:
`el_index.json`, `en_index.json`, `fr_index.json`, `it_index.json`, `ru_index.json`

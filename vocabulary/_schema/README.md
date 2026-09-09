# Vocabulary folder

Organised by: language → CEFR level → topic file.

## Directory & Hierarchy Architecture: English (`vocabulary/en/`) vs. Other Target Languages
The dataset directory structure intentionally differs between English and other target languages:

1. **Non-English Datasets (`fr`, `it`, `ru`, `el`, `ba`, `tt`, `br`, `ka`, `hy`, `cv`):**
   - **Flat Thematic Hierarchy:** `vocabulary/{lang}/{LEVEL}/{theme}.js` (e.g., `vocabulary/fr/A1/greetings.js`, `vocabulary/it/A1/colours.js`).
   - Single JS array per file loaded directly into `window.vocabularyData[lang]` arrays for rapid CEFR level loading and monolingual manual generation.

2. **English Dataset (`vocabulary/en/`):**
   - **POS-Tree Deep Hierarchy:** `vocabulary/en/{LEVEL}/{POS}/{DOMAIN}/{Subcategory}/{Sub_subcategory}.js` (e.g., `vocabulary/en/A1/Nouns/FOOD/Meals/Prepared_Dishes.js`).
   - Structured across 111+ category JS files under POS subdirectories (`Nouns`, `Verbs`, `Adjectives`, `Other_POS`).
   - Rationale: English is the core reference curriculum on COSYlanguages and contains 1,800+ granular vocabulary items mapped against Oxford 3000 taxonomy standards (`macro_domain` -> `POS` -> `subcategory`).

> **Note for Contributors:** Do NOT attempt to mechanically reorganize `vocabulary/en/` into flat thematic files or convert non-English datasets into POS trees. The difference is intentional and supported by the platform's unified index builder (`scripts/build_unified_index.py`).

## File naming
Topic files use lowercase with underscores: `topic_food.json`, `topic_family.json`.

## Word entry fields
| Field | Required | Description |
|-------|----------|-------------|
| `word` | ✅ | The word in the target language |
| `pos` | ✅ | Part of speech in the target language |
| `definition` | ✅ | Short definition in the target language — adapted to the entry's CEFR level |
| `phonetic` | — | IPA pronunciation |
| `example` | — | Example sentence in the target language |
| `synonyms` | — | Array of words with similar meaning — in the target language |
| `antonyms` | — | Array of words with opposite meaning — in the target language |
| `image_hint` | — | Emoji visual hint |
| `practice_types` | — | Which practice types this word is suitable for |

## The level-adaptation rule for definitions
**Every definition must be understandable by a student at the word's CEFR level.**
This is the single most important rule for vocabulary content quality.

- **A1**: Extremely simple words. One sentence maximum. Use only the most common vocabulary.
  Lead with what the thing *does* or *is*, not what category it belongs to.
  Wrong: *"Noun designating a member of the family unit."*
  Right: *"Η μαμά είναι η γυναίκα της οικογένειας."*

- **A2**: Still simple. Two short sentences at most. One concrete idea.

- **B1**: Clear sentences. Standard terms (noun, adjective) acceptable.
  Always follow an abstract term with an example.

- **B2**: Fuller explanation. Can reference usage, register, or contrast with similar words.

- **C1–C2**: Full precision. Can reference linguistic register, connotation, etymology.

## Non-translation rule
All vocabulary content is in the target language.
There are NO translation pairs (no "apple = pomme").
`definition`, `synonyms`, and `antonyms` are ALL in the target language — never in English or any other language.
The student builds understanding through: definition + example + synonyms/antonyms + emoji hint.

## Cross-referencing with grammar — no duplication rule
Vocabulary files own **meaning**. Grammar files own **form**.
Never put conjugation tables, declension paradigms, or morphological rules in a vocabulary file.
Instead, use `grammar_refs` to point to the grammar group that governs the word's forms.

When adding a verb, noun, or adjective to a vocabulary file:
1. Give it a stable `word_id` (format: `[lang]_[pos]_[lemma]`, e.g. `el_verb_γράφω`)
2. Add a `grammar_refs` array pointing to the relevant grammar group(s)
3. Add the same `word_id` to the `word_ids` array in that grammar group
4. Add an entry to `data/index/[lang]_index.json`

This ensures a student searching for any word finds both its meaning and its grammar,
with zero duplication between the two data sources.

## Example entry (Greek, B1)
```json
{
  "word": "ελεύθερος",
  "pos": "επίθετο",
  "phonetic": "eˈlefθeros",
  "definition": "Αυτός που δεν έχει περιορισμούς· που μπορεί να κάνει ό,τι θέλει.",
  "example": "Σήμερα είμαι ελεύθερος και μπορώ να πάω όπου θέλω.",
  "synonyms": ["ανεξάρτητος", "άδεσμος"],
  "antonyms": ["δεσμευμένος", "αιχμάλωτος"],
  "image_hint": "🕊️"
}
```

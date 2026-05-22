# COSYlanguages Grammar System

This directory contains the structured grammar data for all supported languages. The system is designed to be modular, hierarchical, and language-immersive.

## Directory Structure

Each language has its own directory (e.g., `en/`, `fr/`, `ru/`) with the following sub-layers:

- **morphology/**: Internal structure of words.
  - `verbs.json`: Tenses, conjugations, irregular forms.
  - `nouns.json`: Countable/uncountable, plurals, irregular forms.
  - `adjectives.json`: Comparison, gradability.
  - `pronouns.json`: Personal, relative, interrogative, etc.
  - `determiners.json`: Articles, demonstratives, quantifiers.
  - `numerals.json`: Cardinals, ordinals, fractions.
  - `cases.json`: (Language-specific) Nominative, Genitive, etc.
- **syntax/**: Sentence structure and word order.
  - `sentence_types.json`: Declarative, interrogative, imperative, etc.
  - `word_order.json`: Standard patterns (e.g., SVO), inversion rules.
  - `clauses.json`: Relative, conditional, subordinate clauses.
- **phonology/**: Sounds and pronunciation patterns.
  - `sounds.json`: IPA inventory of phonemes.
  - `stress.json`: Word-level stress rules.
  - `intonation.json`: Sentence-level pitch patterns.
- **particles/**: Functional words that don't fit neatly into other categories.
  - `prepositions.json`: Rules and common collocations.

## Key Principles

1. **Schema-Driven**: All data files must adhere to the `grammar.schema.json` definition.
2. **Target Language Only**: Labels, explanations, and examples must be in the target language. No translation keys are used in these data files.
3. **CEFR Leveling**: Every topic is tagged with a CEFR level (A1-C2) to allow for progressive unlocking.
4. **Modularity**: Adding a new tense or language involves adding a specific file or directory, not editing a monolithic document.

## Data Format (Example)

```json
{
  "language": "en",
  "category": "verbs",
  "level": "A1-C2",
  "groups": [
    {
      "id": "present_simple",
      "label": "Present Simple",
      "level": "A1",
      "emoji": "🕐",
      "rules": ["Used for habits and routines."],
      "examples": [{"t": "I work every day."}],
      "practice_links": ["practice/type/grammar/verbs/present_simple"]
    }
  ]
}
```

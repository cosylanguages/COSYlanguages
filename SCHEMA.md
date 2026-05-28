# Vocabulary Schema Specification

## Word ID format

Every entry must have a unique "id" field with this format:
  {lang}_{level}_{theme_slug}_{sequence}

Where:
  lang         = en | fr | it | ru | el | es | de | pt | hy | ka | tt | ba | br
  level        = starter | elementary | intermediate | upper_intermediate |
                 advanced | proficiency
  theme_slug   = the slug version of the theme (lowercase, underscores,
                 no level suffix — e.g. "animals" not "animals_A1")
  sequence     = zero-padded 3-digit integer (001, 002, ... 999)

Examples:
  en_starter_animals_001
  fr_intermediate_emotions_042
  ru_elementary_food_007

Rules:
  - Once assigned, an ID is permanent and must never change or be regenerated,
    even if the entry is moved to a different file or the theme is renamed.
  - IDs must be unique across the entire codebase.
  - The etymology game and all other games must reference words by ID only,
    never by word string.

## Required fields (every entry, all languages)

| Field         | Type    | Notes                                                  |
|---------------|---------|--------------------------------------------------------|
| id            | string  | Per format above. Permanent.                           |
| word          | string  | The word in the target language.                       |
| lang          | string  | ISO code: en, fr, it, ru, el, etc.                     |
| level         | string  | starter / elementary / intermediate / upper_intermediate / advanced / proficiency |
| theme         | string  | Slug from THEMES.md (e.g. "animals")                   |
| sub_theme     | string  | Slug from THEMES.md (e.g. "insects")                   |
| form          | string  | noun / verb / adjective / adverb / phrase / other      |
| definitions   | array   | At least one object with "text" and "examples" array.  |
| transcription | string  | IPA as a plain string, no brackets or slashes.         |
| emoji         | string  | Single emoji. Required.                                |

## Optional fields

| Field         | Type           | Notes                                               |
|---------------|----------------|-----------------------------------------------------|
| plural        | string         | Nouns only.                                         |
| gender        | string         | m / f / n — Romance and Slavic nouns.               |
| article       | string         | Definite article in target language.                |
| opposite      | string         | The opposite word as a plain string.                |
| synonyms      | array[string]  | List of synonyms.                                   |
| antonyms      | array[string]  | List of antonyms.                                   |
| collocations  | array[string]  | Common collocations.                                |
| subtext       | string         | Short usage note or collocation hint.               |
| countability  | string         | countable / uncountable / both — nouns only.        |
| auxiliary     | string         | Verbs: avoir / être / haben / sein / etc.           |
| group         | string         | Verb group/conjugation class.                       |
| classification| string         | Verb: regular / irregular.                          |
| v2            | string         | Past stem (Greek aorist, etc.).                     |
| v3            | string         | Past participle.                                    |
| v4            | string         | Gerund / present participle.                        |
| etymology     | object         | See etymology sub-schema below.                     |

## Etymology sub-schema

If an entry has etymology data, it must use this structure:

```json
  "etymology": {
    "origin_lang": "Latin",
    "origin_word": "anima",
    "origin_meaning": "breath, soul",
    "entered_via": "Old French",
    "notes": "Optional free-text note."
  }
```

All sub-fields are optional except origin_lang.
This is what the etymology game reads. No other etymology field names
(e.g. "root", "etym", "origin") are valid.

## What is NOT allowed

- No "image" or "imageUrl" fields (removed in previous audits — keep them gone).
- No theme values with level suffixes (e.g. "animals_A1" → use "animals").
- No duplicate IDs anywhere in the codebase.
- No word string references between games and data (use IDs only).

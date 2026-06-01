## Word ID format

Every entry must have a unique "id" field:
  {lang}_{level}_{theme_slug}_{sequence}

  lang        = en | fr | it | es | pt | de | ru | el | hy | ka | tt | ba | br
  level       = starter | elementary | intermediate | upper_intermediate | advanced | proficiency
  theme_slug  = lowercase slug from THEMES.md (never with level suffix)
  sequence    = zero-padded 3-digit integer: 001, 002 … 999

Examples: en_starter_animals_001 · fr_intermediate_emotions_042 · ru_elementary_food_007

Rules:
  - IDs are permanent. Never regenerate or change an assigned ID.
  - IDs must be globally unique across the entire codebase.
  - All games must reference words by ID only — never by word string.
  - The id field is always ASCII even when the word field is in a non-Latin script.

## Required fields (every entry, every language)

| Field         | Type   | Notes |
|---------------|--------|-------|
| id            | string | Per format above. Permanent. |
| word          | string | The word in the target language. |
| lang          | string | ISO code. |
| level         | string | starter / elementary / intermediate / upper_intermediate / advanced / proficiency |
| theme         | string | Slug from THEMES.md. Never with level suffix. |
| form          | string | noun / verb / adjective / adverb / phrase / other |
| definitions   | array  | At least one { "text": "...", "examples": ["..."] } object. |
| transcription | string | IPA, no brackets or slashes. |
| emoji         | string | Single emoji character. |

## Optional fields

| Field          | Type           | Notes |
|----------------|----------------|-------|
| sub_theme      | string\|null   | Slug from THEMES.md sub-theme list. |
| plural         | string         | Nouns only. |
| gender         | string         | m / f / n — Romance + Slavic nouns. |
| article        | string         | Definite article in target language. |
| synonyms       | array[string]  | |
| antonyms       | array[string]  | Standardised form — NOT the legacy "opposite" string field. |
| collocations   | array[string]  | Phrases in the TARGET language, not English. |
| subtext        | string         | Short usage note. |
| countability   | string         | countable / uncountable / both — nouns. |
| auxiliary      | string         | Verb auxiliary (avoir, être, haben, etc.). |
| group          | string         | Verb conjugation group/class. |
| classification | string         | regular / irregular — verbs. |
| v2             | string         | Past stem / Greek aorist stem. |
| v3             | string         | Past participle. |
| v4             | string         | Gerund / present participle. |
| etymology      | object         | See sub-schema below. |

## Etymology sub-schema

"etymology": {
  "origin_lang":    "Latin",       ← required if object present
  "origin_word":    "anima",       ← optional
  "origin_meaning": "breath, soul",← optional
  "entered_via":    "Old French",  ← optional
  "notes":          ""             ← optional
}

## What is NOT allowed

- Field named "opposite" (string) — use "antonyms" array instead.
- Theme values with level suffixes (e.g. "animals_A1") — use "animals".
- Duplicate IDs anywhere in js/data/.
- Game files referencing vocabulary by word string — use IDs.
- The "image" or "imageUrl" field — removed, do not re-add.

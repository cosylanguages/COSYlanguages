# Planned grammar table formats

## The problem
Case tables and conjugation tables are two-dimensional:
- Declension tables: case x number (x gender for some languages)
- Conjugation tables: person x number (x tense x mood)

A flat JSON array of rules cannot display these cleanly.
The grammar schema needs a "table" display type in addition to "rules" lists.

## Planned: table format for grammar JSON
Add a "display": "table" field option to the grammar schema.
When display is "table", the entry also has:
- "rows" — array of row labels (e.g. case names)
- "columns" — array of column labels (e.g. Singular, Plural)
- "cells" — 2D array of values matching rows x columns

Example (Russian noun declension):
{
  "id": "noun_declension_masculine",
  "label": "Склонение существительных (мужской род)",
  "display": "table",
  "rows": ["Именительный","Родительный","Дательный","Винительный","Творительный","Предложный"],
  "columns": ["Единственное число","Множественное число"],
  "cells": [
    ["стол","столы"],
    ["стола","столов"],
    ["столу","столам"],
    ["стол","столы"],
    ["столом","столами"],
    ["столе","столах"]
  ]
}

## Languages needing table format
| Language | Table type | Priority |
|----------|------------|----------|
| ru | Noun declension 6 cases x 2 numbers | High |
| ru | Adjective declension 6 cases x 2 numbers x 3 genders | High |
| el | Noun declension 4 cases x 2 numbers x 3 genders | High |
| de | Noun declension 4 cases x 2 numbers x 3 genders | Medium |
| hy | Noun declension 7 cases x 2 numbers | Medium |
| ka | Noun declension 7 cases x 2 numbers | Medium |
| tt | Agglutinative case suffixes table | Low |
| ba | Agglutinative case suffixes table | Low |
| all | Verb conjugation tables person x number x tense | High |

## Action needed
Before populating cases.json for any language, update grammar/_schema/grammar.schema.json
to support the table display format. Do this as part of Stage 3 or as a dedicated
mini-session before Stage 12 content population begins.

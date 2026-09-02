# Curriculum folder

Organised by: language → course type → CEFR level file.

## Course types
- **general** — standard General English/French/etc.
- **spoken** — focus on speaking and conversation
- **exam** — exam preparation (IELTS, DELF, etc.)
- **travelling** — travel-focused language
- **professional** — business and professional language
- **relocation** — for people moving to a new country

> More course types may be added in the future. When adding a new course type:
> 1. Add it to this README
> 2. Add it to `data/courses/courses.json`
> 3. Add it to the schema enum in `curriculum.schema.json`
> 4. Create the folder under each active language
> 5. Create the matching course page in `courses/[course_type]/`

## Planned course types (not yet active)
See `planning/general/planned_courses.md` for course types that are designed but not yet built.

## Non-translation rule
All lesson titles and teacher notes are in the target language.

## Lesson Optional Linking & Alignment Fields

The lesson object inside curriculum files supports five optional fields for deep linking across vocabulary datasets, reference grammar groups, CEFR can-do tracking, and cross-course bridging. These fields are optional and are being backfilled gradually across curriculum files (not required on every existing lesson):

| Field | Type | Description & Format |
|-------|------|----------------------|
| `theme` | `string` | A topic tag matching the topic filename used under `vocabulary/<lang>/<level>/*.js` (e.g. `"family"`, `"housing"`, `"jobs"`). |
| `word_ids` | `array of strings` | Array of stable word identifier strings matching entries in `vocabulary/<lang>/<level>/*.js` (format `[lang]_[pos]_[lemma]`, e.g. `["el_verb_γράφω"]`). |
| `grammar_refs` | `array of objects` | Cross-references to canonical reference grammar groups in `reference-grammar/<lang>/<layer>/<category>.json`. Each object contains:<br>- `"layer"`: layer folder (e.g. `"morphology"`, `"syntax"`, `"phonology"`, `"particles"`)<br>- `"category"`: category filename without extension (e.g. `"verbs"`, `"cases"`, `"word_order"`)<br>- `"group_id"`: group identifier string inside the grammar JSON file (e.g. `"present_simple"`, `"past_simple"`) |
| `cando` | `array of strings` | Structured CEFR can-do statements for the lesson, supplementing or replacing free-text can-do language inside `teacher_notes` (e.g. `["Can order food and drink in a restaurant", "Can ask for the bill"]`). |
| `bridges_to` | `array of objects` | Expresses preview or partial coverage of another course type that does not have a dedicated file at this CEFR level (e.g. an A2 general lesson bridging to exam preparation). Each object contains:<br>- `"course_type"`: target course type string (e.g. `"exam"`, `"spoken"`, `"professional"`)<br>- `"note"`: brief explanation of how the lesson bridges to this course type |

### Example Lesson Object

```json
{
  "lesson": 3,
  "type": "gv",
  "title": "At the Restaurant",
  "theme": "food_drink",
  "word_ids": ["en_noun_restaurant", "en_verb_order"],
  "grammar_refs": [
    {
      "layer": "morphology",
      "category": "verbs",
      "group_id": "present_simple"
    }
  ],
  "cando": [
    "Can order food and drink in a restaurant",
    "Can ask for the bill"
  ],
  "bridges_to": [
    {
      "course_type": "exam",
      "note": "Previews A2/B1 speaking task 2 roleplay interaction"
    }
  ]
}
```

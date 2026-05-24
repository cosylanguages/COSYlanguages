# COSYlanguages Practice System Specification

## Core principle
All practice is in the target language. No English instructions, no translation prompts.
Navigation uses emoji and icons. A student studying Greek sees Greek questions, Greek hints,
Greek feedback. The non-translation rule applies absolutely.

## Practice session structure
A practice session has:
- A fixed number of questions (default: 10)
- A language (e.g. "el")
- A level (e.g. "B1")
- A type (see types below)
- A score tracked in real time
- A result screen at the end

Session state is stored in localStorage under `cosy_session` while active.
On completion it is cleared and the result is written to `cosy_progress`.

## Practice types
| Type ID | Description | Input method | Data source |
|---------|-------------|--------------|-------------|
| `multiple_choice` | Pick the correct word or form from 4 options | Tap/click | grammar or vocabulary JSON |
| `fill_blank` | Type the missing word into a gap | Text input | grammar or vocabulary JSON |
| `match_pairs` | Match words to their visual/emoji hint | Drag or tap | vocabulary JSON |
| `sentence_order` | Arrange shuffled words into a correct sentence | Drag or tap | grammar JSON (syntax layer) |
| `listening` | Hear a word, pick or type it | Audio + tap/type | vocabulary JSON (requires audio field) |
| `dictation` | Hear a sentence, type it exactly | Audio + text input | vocabulary or curriculum JSON |

**For Stage 7, implement only:** `multiple_choice` and `fill_blank`.
Mark `match_pairs`, `sentence_order`, `listening`, and `dictation` as planned in `_planned/planned_features.md`.

## Scoring system
- Correct answer: 10 points base
- Streak bonus: +5 points per 3 consecutive correct answers
- Wrong answer: 0 points, streak resets
- Final result stored as: `{ language, level, type, score, total, date }`

## Hint system
Every question can show a hint on request.
- Hint costs 2 points (deducted from that question's potential score)
- Hint content comes from the `"hint"` field in the grammar/vocabulary JSON entry
- If no hint field exists, show a relevant emoji from the `"image_hint"` field
- The hint button has `aria-label` and is keyboard accessible

## Feedback
- Correct: show ✅ + the correct form highlighted
- Wrong: show ❌ + the correct answer revealed
- No red/green colour alone — always pair colour with icon (accessibility)
- Feedback is shown for 1.5 seconds before advancing to next question

## Progress storage (localStorage)
cosy_progress = [
{ language: "el", level: "B1", type: "multiple_choice", score: 80, total: 100, date: "2026-05-01" },
...
]
Maximum 50 entries stored. Oldest entries dropped when limit reached.

## Keyboard navigation requirements
- All practice types must be fully playable without a mouse
- Multiple choice: number keys 1–4 select options
- Fill blank: Tab to input, Enter to submit
- Hint: H key
- Next question: Enter or Space after feedback

## What practice must NOT do
- Must NOT show English labels or instructions on non-English practice
- Must NOT require a login to practice (free users can practice at A1)
- Must NOT auto-advance without showing feedback first
- Must NOT store any personally identifying information in localStorage

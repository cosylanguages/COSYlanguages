# COSYlanguages Content Schemas

This directory contains JSON Schema (Draft-07) specifications for structured pedagogical content in COSYlanguages.

## Schemas Overview

### 1. Concept Checking Questions (`ccq.schema.json`)
- **Purpose**: Defines structured Concept Checking Questions (CCQs) used to verify understanding of target vocabulary and grammar concepts without translation.
- **Rule**: The `ccq` field must be answerable with yes/no or a short factual answer, and must **never** ask the learner to translate into another language.

#### Example (`ccq`)
```json
{
  "targetItem": "used to live",
  "language": "en",
  "ccq": "Do I live there now?",
  "answer": "No",
  "distractor": "Yes"
}
```

---

### 2. Irregular Verb Patterns (`verb-pattern.schema.json`)
- **Purpose**: Categorizes irregular verbs across languages into pattern groups, conjugation series, and phonological/rhyme families for systematic acquisition.

#### Example (`verb-pattern`)
```json
{
  "infinitive": "sing",
  "language": "en",
  "forms": [
    "sang",
    "sung"
  ],
  "patternGroup": "A-B-C",
  "patternDescription": "Vowel alternation i -> a -> u in past simple and past participle.",
  "rhymeFamily": "sing-ring-sink-drink"
}
```

---

### 3. CELTA Lesson Stage Units (`lesson-stage.schema.json`)
- **Purpose**: Structuring CELTA-style communicative lesson stages combining lead-in context, meaning check (CCQs), form clarification, pronunciation drilling, controlled practice, freer practice, and communicative production across the COSY ecosystem (`COSYtools`, `COSYgames`, `COSYevents`, `COSYworld`).

#### Example (`lesson-stage`)
```json
{
  "unitId": "EN-B1-PAST-HABITS-01",
  "leadIn": "Teacher shows pictures of childhood hobbies and asks students to discuss past routines.",
  "meaningCheck": [
    {
      "targetItem": "used to play",
      "language": "en",
      "ccq": "Did I play chess regularly in the past?",
      "answer": "Yes"
    },
    {
      "targetItem": "used to play",
      "language": "en",
      "ccq": "Do I play chess now?",
      "answer": "No"
    }
  ],
  "form": "Subject + used to + infinitive verb",
  "pronunciationDrill": "Drill weak form pronunciation /juːst tə/ with stress on the main verb.",
  "controlledPractice": [
    "COSYtools/en-verb-prep/past-habits-fill-in"
  ],
  "freerPractice": [
    "COSYgames/past-memories-card-matching"
  ],
  "production": [
    "COSYevents/speaking-club-childhood-stories"
  ],
  "feedbackNotes": "Monitor for misuse of 'used to' for present habits; board mispronounced /juːzd tuː/ vs /juːst tə/."
}
```

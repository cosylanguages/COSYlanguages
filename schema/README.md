# COSYlanguages Content Schemas

This directory contains JSON Schema (Draft-07) specifications for structured pedagogical content in COSYlanguages.

## Schemas Overview

### 1. Concept Checking Questions (`ccq.schema.json`)
- **Purpose**: Defines structured choice-based Concept Checking Questions (CCQs) and practice items used to verify understanding of target vocabulary and grammar concepts without translation.
- **Rule**: Every CCQ must be a choice item containing `question`, `targetStructure`, `options` (2–3 choices), `correctOptionIndex` (integer index), and `explanation`. It must **never** ask the learner to translate into another language and does not use free-text `correctAnswer` fields.

#### Example (`ccq`)
```json
{
  "question": "\"Julia is a teacher.\" — Is Julia a teacher now?",
  "targetStructure": "to-be",
  "options": [
    "Yes",
    "No, only in the past",
    "We can't tell"
  ],
  "correctOptionIndex": 0,
  "explanation": "Yes · 'Is' describes a current state or job in the present simple."
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
  "unitId": "EN-A1-TO-BE-01",
  "title": "The Verb 'To Be'",
  "level": "A1",
  "language": "en",
  "leadIn": {
    "title": "Context Examples & Observation",
    "content": "Julia is a teacher. Tanya is a student. John is a doctor."
  },
  "meaningCheck": [
    {
      "question": "\"Julia is a teacher.\" — Is Julia a teacher now?",
      "targetStructure": "to-be",
      "options": [
        "Yes",
        "No, only in the past",
        "We can't tell"
      ],
      "correctOptionIndex": 0,
      "explanation": "Yes · 'Is' describes a current state or job in the present simple."
    }
  ],
  "form": {
    "title": "Form & Conjugation Rules",
    "content": "Subject + am/is/are. I am (I'm), You/We/They are (You're), He/She/It is (He's)."
  },
  "pronunciation": {
    "title": "Pronunciation Notes",
    "content": "Contracted forms in speech: I'm /aɪm/, he's /hiːz/, they're /ðeə/."
  },
  "controlledPractice": [
    {
      "question": "'They ___ doctors.'",
      "targetStructure": "to-be",
      "options": [
        "is",
        "am",
        "are"
      ],
      "correctOptionIndex": 2,
      "explanation": "They pairs with 'are': They are doctors."
    }
  ],
  "freerPractice": {
    "title": "Freer Practice & Memory Trick",
    "content": "Practice stating your name, nationality, and job with partners.",
    "links": [
      "COSYgames/scene_match"
    ]
  },
  "production": {
    "title": "Communicative Production",
    "content": "Introduce yourself and describe team members in a roleplay.",
    "links": [
      "COSYevents/speaking-club-introductions"
    ]
  }
}
```

# Grammar folder

Each language has its own folder (en/, fr/, it/, ru/, el/).
Each folder is divided into linguistic layers:

- **morphology/** — word forms: verbs, nouns, adjectives, pronouns, determiners, numerals
- **syntax/** — sentence structure: word order, sentence types, clauses
- **phonology/** — sound system: IPA inventory, stress, intonation
- **particles/** — prepositions, postpositions, particles

## Level assignment — mandatory

Every grammar group and every rule must carry a `level` field (A1–C2).
This is not optional. A grammar entry without a level will not be displayed correctly.

### What level means here
The level marks when a student first encounters this concept.
It does not mean the concept only exists at that level — it means this is where it is introduced.

### Level assignment guide
| Level | Introduce when… |
|-------|----------------|
| A1 | The concept is needed to form the most basic correct sentences |
| A2 | The concept appears in everyday familiar situations |
| B1 | The concept is needed for independent communication |
| B2 | The concept involves nuance, register, or less frequent structures |
| C1 | The concept is needed for fluent, flexible, precise use |
| C2 | The concept involves full mastery, rare forms, or stylistic precision |

## Definitions — mandatory

Every grammar group must have a `definition` field.
Every rule inside a group must have an `explanation` field.

### The level-adaptation rule
**The definition and explanation must be understandable by a student at the stated level.**
This means:

- **A1**: Use only the simplest, most common words in the target language.
  Short sentences. No grammatical terminology if possible. Lead with examples.
  Wrong: *"The present indicative expresses simultaneous actions."*
  Right: *"Use this form to say what you do now, every day."* (then example)

- **A2**: Simple words, very short sentences. One idea per sentence.
  One or two basic grammatical terms are acceptable if immediately illustrated.

- **B1**: Clear sentences. Standard grammatical terms (verb, noun, subject) are fine.
  Always follow a term with an example. Avoid abstract explanations without anchoring.

- **B2**: Fuller explanations, more nuance. Can reference contrast with other structures.
  Assume the student knows A1–B1 terminology.

- **C1**: Precise, can use full metalanguage. Can reference register and formality.

- **C2**: Full linguistic precision. Rare forms, stylistic variants, historical notes acceptable.

### Concrete example (Greek verb, present tense, A1)
```json
{
  "id": "present_simple",
  "label": "Ενεστώτας",
  "level": "A1",
  "definition": "Χρησιμοποιούμε αυτόν τον τύπο για να πούμε τι κάνουμε τώρα ή κάθε μέρα.",
  "emoji": "⏱️",
  "rules": [
    {
      "rule": "Ρήματα σε -ω: αλλάζω την κατάληξη για κάθε πρόσωπο.",
      "level": "A1",
      "explanation": "Παίρνω το ρήμα και βάζω τη σωστή κατάληξη. Για παράδειγμα: γράφ-ω, γράφ-εις, γράφ-ει.",
      "example": "Εγώ γράφω. Εσύ γράφεις. Αυτός γράφει."
    }
  ]
}
```

## Non-translation rule
All grammar content is in the target language.
An English grammar file uses English labels and examples.
A Greek grammar file uses Greek labels and examples throughout.
There are NO translation pairs in grammar files.

## Cross-referencing with vocabulary — no duplication rule
Grammar files are the **single source of truth** for word paradigms (verb conjugations,
noun declensions, adjective agreements, etc.).
Vocabulary files contain the word's meaning, definition, example, synonyms, antonyms.
Neither file duplicates what the other owns.

### The rule
- A vocabulary entry says **what a word means** and **how to use it in context**.
- A grammar group says **how a word changes form** and **what rule governs it**.
- They are linked by `word_id` (vocab → grammar via `grammar_refs`)
  and by `word_ids` (grammar → vocab).

### Practical example
`γράφω` (I write) in Greek:
- **vocabulary/el/A1/topic_actions.json** — has the definition, example, image_hint, synonyms
  and `grammar_refs: [{ layer: "morphology", category: "verbs", group_id: "present_simple" }]`
- **grammar/el/morphology/verbs.json**, group `present_simple` — has the conjugation table,
  rules, exceptions, and `word_ids: ["el_verb_γράφω"]`
- **data/index/el_index.json** — has one entry for `el_verb_γράφω` pointing to both files

This means a student searching for `γράφω` finds both the meaning AND the grammar,
without either file storing the other's data.

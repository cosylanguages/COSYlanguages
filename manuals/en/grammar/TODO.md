# English Grammar Manual — Development & Tracking TODO

This document tracks the status of topic pages, legacy stub rebuilds, and structural roadmap recommendations across all CEFR levels (`a1`, `a2`, `b1`, `b2`, `c1`, `c2`).

---

## 1. Rebuilt Legacy Part Stub Pages (A0–A1)

The following 11 part overview pages mixed into `manuals/en/grammar/a1/topics/` have been fully rebuilt to the 14-step COSY Grammar Standard (including interactive CCQs, Pronunciation notes, Connects-to links, and Progress Celebrations):

- [x] `part-1-building-blocks.html` — Building Blocks of English Sentences (Word Order & SVO)
- [x] `part-2-nouns-possession.html` — Nouns & Possession (Singular/Plural & Possessive 's)
- [x] `part-3-articles-determiners.html` — Articles & Determiners (a/an/the & this/that/these/those)
- [x] `part-4-pronouns.html` — Pronoun System (Subject, Object, Possessive Adj/Pron)
- [x] `part-5-adjectives-comparisons.html` — Adjectives & Comparisons (-er/more, -est/most)
- [x] `part-6-adverbs.html` — Adverbs of Manner & Frequency
- [x] `part-7-quantifiers.html` — Quantifiers & Countability (some/any, much/many/a lot of)
- [x] `part-8-prepositions.html` — Prepositions of Place & Time (in, on, at)
- [x] `part-9-verbs-modals.html` — Modal Verbs & Imperatives (can/can't, imperatives)
- [x] `part-10-tense-system.html` — A1 Tense System Overview (Present Simple, Continuous, Past Simple, Going To)
- [x] `part-11-questions-negation.html` — Questions & Negation Masterclass (Wh- words, QUASM)

---

## 2. Follow-Up Scope Splitting & Architecture Roadmap

While all 11 part overview pages in `topics/` have been rebuilt to full 14-step standard, they serve as high-level synthetic review nodes. The following scope splits and dedicated topic page enhancements are recommended for future PRs:

### A1 Scope Splitting Recommendations
1. **`part-11-questions-negation.html`**:
   - *Current scope:* Covers Wh- question words, Yes/No auxiliary questions, and negative statements across tenses.
   - *Dedicated topics currently available:* `question-words.html`, `word-order.html`.
   - *Recommended follow-up PR:* Split into dedicated standalone pages for `yes-no-questions.html` and `negative-statements.html` if micro-drilling requires dedicated interactive practice keys.

2. **`part-10-tense-system.html`**:
   - *Current scope:* Connects 4 core A1 tenses in a single comparative summary.
   - *Dedicated topics currently available:* `present-simple.html`, `present-continuous.html`, `past-simple-regular.html`, `past-simple-irregular.html`, `going-to.html`.
   - *Recommended follow-up PR:* Preserve `part-10-tense-system.html` as the synthetic unit capstone while maintaining individual topic depth on the standalone pages.

3. **`part-7-quantifiers.html`**:
   - *Current scope:* Covers countable vs uncountable nouns, `some`/`any`, and `much`/`many`/`a lot of`.
   - *Dedicated topics currently available:* `countable-uncountable.html`, `some-vs-any.html`, `much-many.html`.
   - *Recommended follow-up PR:* Maintain part-7 as the master overview page for quantifiers.

---

## 3. CEFR Level Audit & Standards Compliance

- **A1 Topics:** 53/53 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **A2 Topics:** 46/46 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **B1 Topics:** 47/47 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **B2 Topics:** 36/36 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **C1 Topics:** 6/6 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.
- **C2 Topics:** 6/6 files compliant with 14-step CELTA rhythm + interactive CCQs + Pronunciation + Connects-to + Progress Celebration.

# COSYlanguages Communication & Speech Manual Architecture (Book 3)

## Executive Summary
While Book 1 (Grammar Manual) focuses on structural syntax and morphology, and Book 2 (Vocabulary Manual) focuses on thematic word lists and semantic domains, Book 3 (Communication & Speech Manual) bridges the gap between static linguistic knowledge and active conversational fluency.

Book 3 introduces pragmatic competence, discourse strategies, turn-taking, register management, social interaction rituals, and real-time conversation repair.

---

## Architectural & Pedagogical Rationale

### 1. Functional Pragmatics over Isolated Word Lists
Students often know grammar rules and individual vocabulary items yet struggle to hold natural conversations because they lack pragmatic competence. Book 3 provides predictable conversation blueprints, functional speech acts, and reaction patterns.

### 2. The Three-Book Synergy (A0–A1 Level)
- **Book 1 (Grammar):** Structural rules, word order, verb forms, case patterns, and sentence templates.
- **Book 2 (Vocabulary):** Lexical fields, regional variants, thematic nouns/adjectives, and collocations.
- **Book 3 (Communication & Speech):** Social routines, discourse markers, conversational repair, turn-taking, politeness strategies, and real-time communication patterns.

### 3. Modular Part Structure (`part-0.html` ... `part-10.html`)
- **Part 0: Foundations of Spoken English** - How speech works, intonation basics, filler words, listening strategies.
- **Part 1: Greetings, Introductions & Small Talk** - Entering and exiting conversations, icebreakers, safe topics.
- **Part 2: Politeness, Requests & Permissions** - Softening statements, asking favours, modal politeness.
- **Part 3: Clarification & Conversational Repair** - Dealing with missing words, asking people to slow down, paraphrasing.
- **Part 4: Stating Opinions & Preferences** - Agreeing, disagreeing, expressing likes/dislikes gently.
- **Part 5: Invitations, Plans & Suggestions** - Proposing activities, accepting, making excuses, declining politely.
- **Part 6: Digital Communication & Messaging** - Texts, instant messaging, emails, casual vs formal online register.
- **Part 7: Classroom & Speaking Club Interaction** - Participating in group work, asking questions, giving feedback.
- **Part 8: Emergency, Safety & Urgent Situations** - Clear, concise calls for help, medical/travel emergencies.
- **Part 9: Discourse Markers & Conversational Flow** - Connectors, transitions, keeping the conversation alive.
- **Part 10: Situational Roleplays & Real-World Dialogues** - Guided practice scenarios connecting all speech skills.

---

## Technical Integration Plan

1. **Standalone Directory Standard:** `communication-manual/` containing `index.html` and 11 unit files (`part-0.html` through `part-10.html`).
2. **Schema & Standard Alignment:**
   - Schema defined in `communication/_schema/communication.schema.json`.
   - Standard defined in `communication/COMMUNICATION_STANDARD.md`.
3. **Template Parity:**
   - `templates/communication/index-template.html` (sibling to `templates/grammar/roadmap-template.html`).
   - `templates/communication/unit-template.html` (sibling to `templates/grammar/lesson-template.html`).
4. **Hub Activation:** Update all 14 language hub files under `manuals/*-a0-a1.html` to activate Book 3 ("Book 3 · Communication & Speech Manual").
5. **Cross-Manual Links:**
   - Link `vocabulary-manual/part-14.html` to `communication-manual/` for expanded conversational routines.
   - Link `grammar/part-4.html` discourse markers to `communication-manual/part-9.html`.

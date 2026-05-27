# Unified A1 Roadmap Proposal — COSYlanguages

## 1. Vision & Strategy
The goal is to transition from our current "Dense Unit" structure to a "Modular Spiral" approach. We will synthesize the **10-Unit Fast-Track** (for survival skills) with the **37-Unit Mastery Path** (for deep academic competence).

### Key Pedagogy: The "Stripe" System
Every unit will follow a consistent 5-lesson rhythm, visually represented by color-coded "stripes" in the UI:
1.  **🔵 Vocabulary & Discovery:** Core topical words with immediate grammar integration.
2.  **🟣 Grammar & Structure:** Explicit rule instruction with high-frequency examples.
3.  **🟡 Spoken Practice:** Active production task in a real-world scenario (e.g., at a café).
4.  **🔴 Spoken Review (Spiral):** Dedicated lesson to recycle grammar from *at least 2 units prior*.
5.  **⚫ Exam & Milestone:** Cumulative assessment of all four skills (Listening, Reading, Writing, Speaking).

---

## 2. Proposed Unit Roadmap (A1.1 Survival Core)
We will adopt the 10-unit structure from `General Course — English A1` as the primary "Learning Path" for new students.

| Unit | Topic | Core Grammar | Spiral Goal (Recycling) |
| :--- | :--- | :--- | :--- |
| **1** | **Hello!** | To be (I/you), Alphabet | N/A (Foundation) |
| **2** | **Origins** | To be (He/She/They), Nationalities | Unit 1 (Greetings) |
| **3** | **My Family** | Possessives, Ages, Plurals | Unit 1 (Names) + Unit 2 (Nationalities) |
| **4** | **My Home** | There is/are, Prepositions | Unit 3 (Adjectives) + Unit 1 (Numbers) |
| **5** | **My Day** | Present Simple (I), Time | Unit 1 (Greetings) + Unit 3 (Possessives) |
| **6** | **Food & Drink** | Present Simple (He/She), Count/Uncount | Unit 4 (There is/are) + Unit 1 (Numbers) |
| **7** | **Work & Study** | Can/Can't, Jobs | Unit 2 (Countries) + Unit 5 (Routine) |
| **8** | **My City** | Directions, Imperatives | Unit 4 (Prepositions) + Unit 7 (Jobs) |
| **9** | **Free Time** | Like/Love/Hate + -ing | Unit 5 (Routine) + Unit 7 (Can/Can't) |
| **10** | **My Story** | Was/Were, Going to | **Full Revision (Units 1–9)** |

---

## 3. Integration of "Complete A1" (37 Units)
The 37-unit curriculum will serve as the **"A1 Mastery Supplement"**. Students who finish the 10-unit core can "Unlock Part 2" or dive into specific mastery blocks.

### Example Mastery Blocks:
*   **The Travel Block:** (Units 7–8 from Complete) — Deep dive into airports, hotels, and directions.
*   **The Social Block:** (Units 26–27 from Complete) — Deep dive into opinions, "So do I", and social media.
*   **The Professional Block:** (Units 22–23 from Complete) — Deep dive into workplace etiquette and adverbs of manner.

---

## 4. Speaking Club Integration
Every unit now has a corresponding **"Spoken Club"** lesson plan. These should be linked directly from the curriculum view:
*   *Unit 5 (My Day)* → [Join Speaking Club: "A Day in My Life"]
*   *Unit 10 (My Story)* → [Join Speaking Club: "My Life Story Assessment"]

---

## 5. Technical Implementation Plan
1.  **JSON Schema Upgrade:** Add `type` (vocab/grammar/spoken/exam) and `recycled` (string/array) fields to `curriculum.schema.json`.
2.  **A1_v2.json:** Rebuild the A1 curriculum following the 10-unit core + mastery extension model.
3.  **UI Updates:** Implement the "Stripe" CSS classes to color-code the lesson cards in the Portal.
4.  **Progress Tracking:** Update the `COSYSession` to handle "Recycled" flags for better student feedback.

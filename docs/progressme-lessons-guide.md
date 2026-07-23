# Transforming COSY Speaking Clubs into Core ProgressMe (Edvibe) Lessons

For language teachers operating on **ProgressMe (Edvibe)**, lesson planning can often feel repetitive or restricted by standard textbook speaking sections. This guide provides a strategic and practical blueprint for how independent teachers and language schools can leverage COSYlanguages' rich collection of **10-10-10 Speaking Club Sessions** to completely replace or enrich standard curriculum lessons directly on ProgressMe.

---

## 1. Why Substitute Standard Textbook Speaking with COSY?

Traditional textbooks often separate speaking practice into small, disconnected segments at the end of a grammar unit, often leading to translation fallback and dry, scripted dialogues.
COSY sessions solve this by adhering strictly to the **10-10-10 Pedagogical Standard**:
1. **10 Monolingual Vocabulary Units**: Rich terms with antonyms/opposites (`Word ≠ opposite`), custom target-language definitions, and context-rich examples.
2. **10 Round 1 Items (Topic & Personal Link)**: Main thematic prompts followed by deeply pensive, personal sub-questions starting with a star symbol `★` to bridge theory with direct student experience.
3. **10 Round 2 Items (The Speculative Future / Hypotheticals)**: Advanced speculative, agree/disagree, or conditional questions designed to challenge students' critical thinking and build active speech fluency.

By embedding these structured resources into ProgressMe lessons, teachers bypass dry conversation drills and transition to active, immersive, and highly organized communication.

---

## 2. Five Actionable Scenarios for Teachers

Here are 5 clear integration models designed for immediate classroom adoption:

### Scenario A: The Direct Map (Lesson Copying to Edvibe Builder)
Because COSY speaking club sessions are perfectly structured, they map 1-to-1 with ProgressMe’s visual **Lesson Builder** block types.

*   **Step 1 (Vocab Cards)**: Copy the 10 COSY vocab units into ProgressMe’s **"Words" (Slovar)** or **"Cards" (Kartochki)** template. Utilize the `Word ≠ opposite` structure to create contrasting definition matching tasks.
*   **Step 2 (Round 1 Discussion)**: Use the ProgressMe **"Question" (Vopros)** or **"Input/Text"** blocks. Copy each of the 10 Round 1 items. Instruct the student to read the main block (`.round-item-main`) first, then answer the personal question (`.round-item-personal` starting with `★`).
*   **Step 3 (Round 2 Speculation)**: Copy the 10 speculative future-focused items into ProgressMe's **"Agree or Disagree"** or **"Debate"** interactive widgets. Add a standard ProgressMe **Timer block** set to 60 or 90 seconds to challenge upper-intermediate/advanced students to maintain fluency under pressure.

---

### Scenario B: The Flipped Classroom (Pre-Lesson Vocab Harvesting)
Save synchronous classroom time on ProgressMe by shifting vocabulary memorization to autonomous student preparation.

1.  **Assign the Link**: Send the student the public COSY session link (e.g. `events/sessions/cinema-club/the-substance.html`) 24 hours before the live lesson.
2.  **Harvest to Notebook**: The student opens the page on their mobile device or browser, reviews the 10 visual vocabulary cards, and double-clicks or clicks the **"Add to Dictionary"** button. This saves the terms instantly into their personal client-side **COSY Notebook** (`localStorage` / Supabase Cloud sync).
3.  **Active ProgressMe Session**: When the live ProgressMe class begins, skip the slow vocabulary introduction. Dive straight into active conversation using the vocabulary in Round 1 and 2 prompts immediately.

---

### Scenario C: COSY Classroom Synchronizer "Sidecar"
Since ProgressMe lessons lack built-in ephemeral peer-to-peer screen coordination, teachers can run the **COSY Classroom Synchronizer** side-by-side with their ProgressMe browser window.

```
+------------------------------------+------------------------------------+
|                                    |                                    |
|       PROGRESSME WORKSPACE         |    COSY CLASSROOM SYNCHRONIZER     |
|   - Video/Audio feed active        |    - Ephemeral Room Code active     |
|   - Screen share / Homework check  |    - Real-time Vocab Card reveal   |
|   - Chatbox                        |    - Active pointer highlighted    |
|                                    |    - Synchronized Oral Timer       |
|                                    |                                    |
+------------------------------------+------------------------------------+
```

1.  Open `classroom-sync.html`.
2.  **Teacher Host**: Enter a Room Name (e.g., `MaryLessons`) and click "Create Room 🎓".
3.  **Student Join**: Provide the Room Name to the student. They enter it on their side and click "Join Room ✏️".
4.  **How to use during lesson**:
    *   **Timed Speaking Rounds**: Use the synchronized timer (15s, 30s, 60s) to keep pacing identical on both screens.
    *   **Pointer Highlights**: Click questions or cards in the synchronizer to highlight them in real-time, directing the student's attention without screen-sharing delays.
    *   **Vocab Reveal**: Keep answers or synonyms hidden until the teacher clicks to reveal them synchronously on the student’s view.

---

### Scenario D: Dynamic Homework & Gamification
Reinforce lesson vocabulary using COSY's interactive monolingual gamification hub.

*   After a ProgressMe lesson, copy the targeted vocabulary words.
*   Assign the student to play specialized COSY speaking/vocabulary games configured for their exact CEFR level (A1-C2) and primary theme (e.g., *Psychology & Mind*, *Society & Politics*, *Science & Technology*):
    *   **Word Linker**: Match terms with opposing antonyms.
    *   **Lucky Numbers**: Test contextual definition recall.
    *   **Fluency Flow**: Complete structured monolingual word drills.
*   Because the **Practice Hub** saves score histories and streaks locally via `localStorage`, the student can screenshot their progress or let their points sync with the Supabase database to prove assignment completion.

---

### Scenario E: High-Impact Textbook speaking section Replacement
When a textbook's speaking section is too dry, replace it with a corresponding COSY theme session mapped by CEFR level:

| Standard Textbook Topic | Replace with COSY Speaking Club Session | CEFR Level |
|-------------------------|-----------------------------------------|------------|
| *Technology & Society*  | Cinema Club: `black-mirror.html`        | B2/C1      |
| *Science & Nature*      | Keeping Up with Science (Any article)   | B1/B2      |
| *Food & Healthy Habits* | My Life With/Without: `sugar.html`      | B1         |
| *Life Philosophy*       | The Greatest Quotes (Coffee/Wilde sets) | B2/C1      |
| *Controversial Issues*  | Debatable & Relatable (Any debate)      | B2/C2      |

---

## 3. How Teachers Navigate the COSY Speaking Library

To find the perfect speaking session matching your ProgressMe syllabus:
1.  **Speaking Club Sessions Finder**: Visit the **Interactive Session Explorer** directly on the **[Events Hub](https://cosylanguages.github.io/COSYlanguages/events/index.html#session-explorer-section)**.
2.  **Filter by Theme & Keyword**: Select or click on any pedagogical keyword (e.g., *AI & Human Learning*, *Habits*, *Cultural Rituals*) or type in the search bar to instantly discover matching sessions, films, and songs.
3.  **Select Level**: Align with the target student CEFR profile (A2, B1/B2, C1) to ensure vocabulary difficulty and Teacher's Note (Linguistic Corrections) are calibrated perfectly.

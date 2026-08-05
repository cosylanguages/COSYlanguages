# COSYlanguages Grammar Standard v1.0 & v2.0 (Phase 2 Revision)

This document defines the strict, unified standards for all digital and print grammar materials across COSYlanguages. Every lesson, manual, reference page, and printable sheet must adhere 100% to this specification.

---

## 1. The Core Principles

### Principle 1: The Four Standard Questions
Regardless of language or level, every grammar page/lesson must answer the following four questions to provide predictable structure for both students and teachers:
- **What is it?** (Clear identification)
- **When do I use it?** (Context & usage scenario)
- **How do I build it?** (Structure & formulas)
- **What mistakes do beginners make?** (Real-life learner pitfalls)

### Principle 2: Standardized Page Rhythm
Every grammar page must follow an identical visual and logical rhythm to create familiarity for the learner. The standard rhythm sequence is:

1. **Vocabulary Theme:** Natural thematic anchor (e.g., *Family*, *Food*, *Travel*).
2. **Grammar Title:** Large, clear, never clever.
3. **One-Line Summary:** Exactly one sentence summarizing the core rule.
4. **Why is this important? / Why learners struggle:** Highlighting importance & difficulty.
5. **Main Visual (Diagram / Flow):** Replacing long paragraphs with CSS diagrams.
6. **Colour Example:** Standard color-coded examples.
7. **Guided Observation (👀 Notice):** A single inductive question for pattern discovery.
8. **🧠 Think like [Language]:** Explaining the systematic logic of the language.
9. **⚠ Common Mistakes:** Stacked `❌` (Incorrect) and `✅` (Correct) patterns.
10. **💡 Memory Trick:** Visually-anchored, story-based memory trigger.
11. **🔗 Connects to...:** Sequential learning journey links.
12. **📍 Can you already use this?:** A communication-focused self-evaluation checklist.

---

## 2. Priority Upgrades & Editorial Style (Phase 2)

### Priority 1: Give Languages Personality ("Think like...")
Don't just explain mechanical rules; explain **why** the language functions as a system. Use the `"🧠 Think like [Language]"` box to teach system logic:
- *English:* Focus on word order and auxiliary verbs as structural builders.
- *Russian:* Focus on cases and verb endings that carry semantic weight.
- *Greek:* Focus on agreements, verb endings, and rich article structures.

### Priority 2: Diagrams Over Paragraphs (The COSY Rule)
If a concept can be illustrated visually, never write it in text.
- *Example (Basic Sentence Order):* Instead of text, show:
  `Who?` ➔ `does what?` ➔ `to whom?`
- *Example (Articles):* Instead of explaining with paragraphs, show:
  `New` ➔ `a dog` ➔ `The Same Dog` ➔ `the dog`

### Priority 3: Story-Based Memory Tricks
Create sticky, story-based tricks rather than mechanical formulas:
- *Example (Present Continuous):* The auxiliary verb `BE` holds `VERB-ing` like a magnet.
- *Example (Articles):* `a` opens the story ➔ `the` continues the story.

### Priority 4: Inductive Learner Predictions (👀 Notice)
Always present standard patterns first, ask the student to identify what changes (e.g. *"Which ending disappears?"*), and only then explain the rule. This improves long-term retention.

### Priority 5: Reduce Repeated Wording
Vary explanations. Instead of repeating *"We use..."*, use engaging synonyms:
- *"Native speakers choose..."*
- *"This grammar appears when..."*
- *"You'll hear this every day when..."*

### Priority 6: Highlight Common Struggles ("Why this is difficult")
Adult learners appreciate knowing when a concept is universally challenging due to cross-linguistic differences (e.g., lack of articles or helper verbs in their native tongue).

### Priority 7: Communication-Focused Checklist (📍 Can you already use this?)
Always end the page with 3 or 4 practical, checkbox-style communication skills. This shifts the focus from passive learning to active capability (e.g. *"☐ I can talk about my daily routine."*).

---

## 3. Standard Visual Color Language & Approved Icons

| Element | Color | Semantic Class | Variable |
|:---|:---|:---|:---|
| **Subject** | Blue | `.key-subject` / `.key-blue` | `var(--grammar-subject)` |
| **Verb** | Green | `.key-verb` / `.key-green` | `var(--grammar-verb)` |
| **Object** | Orange | `.key-object` / `.key-orange` | `var(--grammar-object)` |
| **Ending** | Purple | `.key-ending` / `.key-purple` | `var(--grammar-ending)` |
| **Adjective** | Yellow | `.key-adjective` / `.key-yellow` | `var(--grammar-adjective)` |
| **Error** | Red | `.key-error` / `.key-red` | `var(--grammar-error)` |
| **Optional** | Grey | `.key-optional` / `.key-grey` | `var(--grammar-optional)` |

### The 9 Standard Icons:
- `⚠` Common mistake / Why this is difficult
- `💡` Memory trick
- `👀` Notice / Guided observation
- `🧠` Think like a native speaker
- `🔗` Connects to...
- `✓` Correct
- `✗` Incorrect
- `🌍` Regional variation
- `⭐` Important rule

---

## 4. Grammar Map Chapter Summaries
Every major grammar chapter (e.g., Verbs, Nouns) must end with a single-page visual roadmap/mind map illustrating the interconnected system of rules. No new grammar is introduced here—only structural relationships.

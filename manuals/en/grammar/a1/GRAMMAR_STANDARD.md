# COSYlanguages Grammar Standard v1.0, v2.0 & v3.0 (Russian Revision)

> **Note on Architecture:** For an overview of how the CEFR HTML manuals interlock with the machine-readable JSON reference layer (`reference-grammar/`), see `CONTENT_ARCHITECTURE.md` at the repository root.

This document defines the strict, unified standards for all digital and print grammar materials across COSYlanguages. Every lesson, manual, reference page, and printable sheet must adhere 100% to this specification.

---

## 1. The Core Principles

### Principle 1: The Four Standard Questions
Regardless of language or level, every grammar page/lesson must answer the following four questions to provide predictable structure for both students and teachers:
- **What is it?** (Clear identification)
- **When do I use it?** (Context & usage scenario)
- **How do I build it?** (Structure & formulas)
- **What mistakes do beginners make?** (Real-life learner pitfalls)

### Principle 2: Standardized Page Rhythm & Inductive Staging
Every grammar page must follow an identical visual and logical rhythm to create familiarity for the learner. The standard rhythm sequence is:

1. **Vocabulary Theme:** Natural thematic anchor (e.g., *Family*, *Food*, *Travel*).
2. **Grammar Title:** Large, clear, never clever.
3. **One-Line Summary:** Exactly one sentence summarizing the core rule.
4. **Why is this important? / Why learners struggle:** Highlighting importance & difficulty.
5. **Situational Context Examples:** A minimum of 3 short example sentences using only previously-taught vocabulary in a consistent situational context (e.g., presenting named characters with clear roles: *"Julia is a teacher. Tanya is a student. John is a doctor."*).
6. **Guided Observation (👀 Notice):** A mandatory inductive noticing question answerable solely by inspecting the situational context examples (e.g., *"What word comes after Julia, Tanya, and John? Is it the same word every time?"*).
7. **Concept Check (🧠 Concept check):** A mandatory box containing 2–4 Concept Checking Questions (CCQs) answerable Yes/No or by pointing, without using grammatical terminology, with answers explicitly included.
8. **Main Rule & Formula (Diagram / Table):** The formal conjugation table, block diagram, or rule summary box (`.box.rule-box`). Must appear ONLY AFTER the concept check box.
9. **🧠 Think like [Language]:** Explaining the systematic logic of the language.
10. **🇷🇺 Why does Russian do this? / 🧩 Russian Pattern (Language Signature boxes):** Systemic reasons & recurring patterns.
11. **⚠ Common Mistakes:** Stacked `❌` (Incorrect) and `✅` (Correct) patterns (`.mflip`).
12. **💡 Memory Trick:** Visually-anchored, story-based memory trigger.
13. **🔗 Connects to...:** Sequential learning journey links.
14. **📍 Can you already use this?:** A communication-focused self-evaluation checklist (`.checklist`).
15. **🎉 Progress Celebration & Practice:** Interactive diagnostic quiz (`.quiz-panel`) and progress confirmation.

---

## 2. Why Order Matters: Guided-Discovery Staging (CELTA Methodology)

Presenting a formal rule or conjugation table *before* examples and noticing questions completely defeats the purpose of inductive learning.

When learners see a rule box first, their brains immediately switch from pattern recognition to passive memorization. By staging pages in the strict order **Context Examples ➔ 👀 Notice ➔ 🧠 Concept Check ➔ Formal Rule/Table**, learners actively discover the underlying pattern first, confirm their understanding through simple CCQs, and only then use the rule box as a reference summary.

---

## 3. Priority Upgrades & Editorial Style (Phase 2 & 3)

### Priority 1: Give Languages Personality ("Think like...")
Don't just explain mechanical rules; explain **why** the language functions as a system. Use the `"🧠 Think like [Language]"` box to teach system logic:
- *English:* Focus on word order and auxiliary verbs as structural builders.
- *Russian:* Focus on cases, aspect (complete vs incomplete actions), stability vs stress shift, and soft/hard endings.

### Priority 2: Diagrams Over Paragraphs (The COSY Rule)
If a concept can be illustrated visually, never write it in text.
- *Example (Russian Case Map Flow):* Instead of raw listings, show:
  `WHO?` (Nom.) ➔ `owns?` (Gen.) ➔ `to?` (Dat.) ➔ `see?` (Acc.) ➔ `with?` (Instr.) ➔ `about?` (Prep.)

### Priority 3: Endings as Families
Grouping endings helps learners recognize patterns.
- *Example (Feminine family):* `-а` and `-я` are part of the feminine family and behave similarly.
- *Example (Adjective family):* `-ый` and `-ой` belong to the same adjective pattern.

### Priority 4: Progressive Exceptions
Never overwhelm beginners with Exceptions immediately. Introduce the dominant pattern first, build structural confidence, and only then introduce exceptions as separate or secondary notes.

### Priority 5: Recognition Before Production
Encourage passive pattern identification before demanding productive conjugation or declension. Use guided observations (e.g., *"Can you spot which word is in the Genitive case?"*).

---

## 4. Standard Visual Color Language & Approved Icons

| Element | Color | Semantic Class | Variable |
|:---|:---|:---|:---|
| **Subject** | Blue | `.key-subject` / `.key-blue` | `var(--grammar-subject)` |
| **Verb** | Green | `.key-verb` / `.key-green` | `var(--grammar-verb)` |
| **Object** | Orange | `.key-object` / `.key-orange` | `var(--grammar-object)` |
| **Ending** | Purple | `.key-ending` / `.key-purple` | `var(--grammar-ending)` |
| **Adjective** | Yellow | `.key-adjective` / `.key-yellow` | `var(--grammar-adjective)` |
| **Error** | Red | `.key-error` / `.key-red` | `var(--grammar-error)` |
| **Optional** | Grey | `.key-optional` / `.key-grey` | `var(--grammar-optional)` |

### Approved Icon Set:
- `⚠` Common mistake / Why this is difficult
- `💡` Memory trick
- `👀` Notice / Guided observation
- `🧠` Think like a native speaker / Think like English / Concept check
- `🔗` Connects to...
- `✓` Correct
- `✗` Incorrect
- `🌍` Regional variation
- `⭐` Important rule
- `🧩` Language Pattern (Signature)
- `🇷🇺` Language Rational / Why does Russian do this?
- `🎉` Progress Celebration

---

## 5. Fully Worked Example: Inductive Discovery Sequence

Below is the exact HTML structure required for the pre-rule discovery sequence:

```html
<!-- 1. SITUATIONAL CONTEXT EXAMPLES -->
<div class="examples" style="margin-bottom:20px;">
 <span class="label">Context Examples</span>
 <ul>
  <li><span class="key-subject key-blue">Julia</span> <span class="key-verb key-green"><b>is</b></span> a teacher.</li>
  <li><span class="key-subject key-blue">Tanya</span> <span class="key-verb key-green"><b>is</b></span> a student.</li>
  <li><span class="key-subject key-blue">John</span> <span class="key-verb key-green"><b>is</b></span> a doctor.</li>
 </ul>
</div>

<!-- 2. GUIDED OBSERVATION (👀 NOTICE) -->
<div class="box mint" style="margin-bottom:20px;">
  <h3>👀 What do you notice?</h3>
  <p>What word comes after Julia, Tanya, and John? Is it the same word every time?</p>
</div>

<!-- 3. CONCEPT CHECK (🧠 CCQs) -->
<div class="box mint" style="margin-bottom:20px;">
  <h3>🧠 Concept check</h3>
  <ul style="margin: 8px 0 0; padding-left: 20px;">
    <li>Is Julia a teacher? <strong>(Yes)</strong></li>
    <li>Is John a teacher? <strong>(No, he is a doctor)</strong></li>
    <li>Can you say 'Julia are a teacher'? <strong>(No)</strong></li>
  </ul>
</div>

<!-- 4. FORMAL CONJUGATION TABLE & RULE BOX (APPEARS ONLY NOW) -->
<div class="table-wrap">
  <table>
    <thead><tr><th>Subject</th><th>Affirmative</th></tr></thead>
    <tbody>
      <tr><td>I</td><td>I <b>am</b> (I'm)</td></tr>
      <tr><td>He / She / It</td><td>He <b>is</b> (He's)</td></tr>
      <tr><td>You / We / They</td><td>You <b>are</b> (You're)</td></tr>
    </tbody>
  </table>
</div>

<div class="box rule-box">
  <p><strong>Use:</strong> names, jobs, feelings, and facts. <em>She is French. He is 25.</em></p>
</div>
```

# COSYlanguages Grammar Standard v1.0

This document defines the strict, unified standards for all digital and print grammar materials across COSYlanguages. Every lesson, manual, reference page, and printable sheet must adhere 100% to this specification.

---

## 1. The Core Principles

### Principle 1: The Four Standard Questions
Regardless of language or level, every grammar page/lesson must answer the following four questions to provide predictable structure for both students and teachers:
- **What is it?** (Clear identification)
- **When do I use it?** (Context & usage scenario)
- **How do I build it?** (Structure & formulas)
- **What mistakes do beginners make?** (Real-life learner pitfalls)

### Principle 2: Identical Page Anatomy
Every grammar page must be composed of the following 12 sections (`A` through `L`) in this exact sequential order:
- **A. Vocabulary Theme:** Always at the top. Connects grammar to a real context naturally (e.g., *Family*, *Food*, *Travel*, *Shopping*, *Weather*).
- **B. Grammar Title:** Large, clear, never clever (e.g., *Present Simple*, *Gender*, *Cases*, *Articles*).
- **C. One-Line Summary:** Exactly one sentence summarizing the core rule (e.g., *"We use the Present Simple for routines and facts."*).
- **D. Why Is This Important?:** One short paragraph explaining the long-term impact of this rule to motivate adult learners.
- **E. Structure:** The visual heart of the page. Uses sentence formulas, tables, decision trees, or building blocks instead of text. **Never long paragraphs.**
- **F. Fully Coloured Examples:** standard color-coded tokens for linguistic elements.
- **G. Guided Observation:** A "Observe..." or "Notice..." section. Always asks **exactly one question** (not an explanation) to encourage inductive learning and pattern discovery (e.g., *"Which word changes?"*, *"Which ending disappears?"*).
- **H. Memory Trick:** Mandatory. Mnemonics, comparisons, or visual cues giving the page personality and improving retention.
- **I. Common Mistakes:** Mandatory. Displays real mistakes only using strict `❌` (Incorrect) and `✅` (Correct) side-by-side or stacked formatting with standard warning icons.
- **J. Native Speaker Thinking:** Exactly one box titled `"🧠 Think like a native speaker"`. Explains the core system thinking behind the language (maximum 4 lines).
- **K. Register Box:** Only if useful (e.g., *Academic vs Spoken*, *UK vs US*, *Colloquial*). Do not force it.
- **L. Connects to...:** Mandatory. One sentence linking this chapter to future/past concepts to form a cognitive web.

### Principle 3: Example Bounds
- Every page must contain **between 2 and 5 examples** of the main grammar rule.
- No more, no less. This provides enough data for pattern recognition without overloading.

### Principle 4: One Idea Per Page
- Strictly enforce **one grammar idea per page** to avoid cognitive over-saturation.
- Do not mix ideas (e.g., teach *Present Simple* and *Adverbs of Frequency* or *Present Continuous* on separate pages).

### Principle 5: Under 5-Minute Cognitive Load
- A learner must be able to fully digest and understand the entire page in **under five minutes**. If not, split the topic into smaller standalone lessons.

### Principle 6: Standard Visual Color Language
Always use these exact semantic classes and colors for highlighting linguistic components across all pages and languages:

| Element | Color | Semantic Class | Hex / Variable |
|:---|:---|:---|:---|
| **Subject** | Blue | `.key-subject` / `.key-blue` | `var(--grammar-subject)` |
| **Verb** | Green | `.key-verb` / `.key-green` | `var(--grammar-verb)` |
| **Object** | Orange | `.key-object` / `.key-orange` | `var(--grammar-object)` |
| **Ending** | Purple | `.key-ending` / `.key-purple` | `var(--grammar-ending)` |
| **Adjective** | Yellow | `.key-adjective` / `.key-yellow` | `var(--grammar-adjective)` |
| **Error** | Red | `.key-error` / `.key-red` | `var(--grammar-error)` |
| **Optional** | Grey | `.key-optional` / `.key-grey` | `var(--grammar-optional)` |

### Principle 7: The Nine Standard Icons
Use **only** these nine approved icons. No others are permitted:
- `⚠` Common mistake
- `💡` Memory trick
- `👀` Notice / Guided observation
- `🧠` Think like a native speaker
- `🔗` Connects to...
- `✓` Correct
- `✗` Incorrect
- `🌍` Regional variation
- `⭐` Important rule

### Principle 8: Standard Page Density
Every manual page or screen should approximate this layout ratio:
- **25%** Explanation (definitions, summaries, motivation)
- **50%** Visuals (diagrams, tables, building blocks, colored formulas)
- **25%** Examples (the 2 to 5 high-quality examples)

### Principle 9: Language Personality
Every language has a core structural core that the manual should reinforce on every page:
- **English:** Word order is king.
- **Russian:** Endings tell the story.
- **Greek:** Verb endings and articles rule.
- **French:** Pronunciation and silent spellings.
- **German:** Sentence structure/verb position.
- **Spanish:** The rich verb system.
- **Italian:** General agreement.

### Principle 10: The COSY Rule
**"If something can be understood from a diagram, do not explain it in a paragraph."**

---

## 2. Reference HTML Implementation Guide

A compliant HTML file implements standard markup utilizing the shared classes in `css/grammar.css`:

```html
<!-- A. Vocabulary Theme -->
<div class="grammar-vocab-theme">
  Vocabulary theme for practice: <span>Family</span>
</div>

<!-- B. Title -->
<h1>Present Simple</h1>

<!-- C. One-Line Summary -->
<p class="grammar-summary">We use the Present Simple for routines and facts.</p>

<!-- D. Why is this important? -->
<div class="grammar-importance">
  <strong>Why is this important?</strong> You will use this grammar structure almost every time you speak.
</div>

<!-- E. Structure (Visual, no long paragraphs) & F. Coloured Examples -->
<div class="g-card">
  <div class="g-card-title">Subject + Verb + Object</div>
  <table class="gtable">
    <tr>
      <td><span class="key-subject">I</span> + <span class="key-verb">work</span></td>
    </tr>
  </table>
</div>

<!-- G. Guided Observation (👀 Notice) -->
<div class="guided-observation">
  <h4>👀 Notice</h4>
  <p>Which ending disappears in the negative form?</p>
</div>

<!-- H. Memory Trick (💡 Memory Trick) -->
<div class="memory-trick">
  <h4>💡 Memory Trick</h4>
  <p>Think of "-s" as the "singular supervisor" for He, She, and It.</p>
</div>

<!-- I. Common Mistakes (⚠ Common Mistakes) -->
<div class="g-card">
  <div class="g-card-title">⚠ Common Mistakes</div>
  <table class="gtable">
    <tr class="mistake-row">
      <td>✗ <span class="key-error">He work</span> in London.</td>
      <td>✓ <span class="key-subject">He</span> <span class="key-verb">work</span><span class="key-ending">s</span> in London.</td>
    </tr>
  </table>
</div>

<!-- J. Think Like a Native Speaker (🧠) -->
<div class="native-thinking">
  <h4>🧠 Think like a native speaker</h4>
  <p>English cares about word order above all else. Since we don't have many noun endings, the position of each word tells the brain who does what.</p>
</div>

<!-- L. Connects to... (🔗) -->
<div class="connects-to">
  <span>🔗</span> This prepares you for the Past Simple.
</div>
```

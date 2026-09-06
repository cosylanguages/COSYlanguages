# Standard Grammar & Vocabulary Manual Template

This template defines the standard internal structure for all COSYlanguages manual topic pages going forward.

## 6-Stage Standard Manual Structure

1. **Context / Lead-in Example**: A communicative scenario, visual lead-in, or real-world example introducing the target item in context.
2. **Meaning Check (CCQs)**: Concept Checking Questions (per `schema/ccq.schema.json`) to verify understanding of meaning without translation or metalanguage.
3. **Form Explanation**: Structural formulas, tables, conjugation patterns, and cognitive rules ("Think like a native speaker").
4. **Pronunciation Note**: Phonetic guidance, stress rules, liaison, or weak forms where relevant.
5. **Example Bank**: Color-coded syntax examples and common pitfalls / error corrections.
6. **Ecosystem Practice Links**: Links to controlled practice (`COSYtools` / `COSYgames`) and freer practice / activation (`COSYevents` / `COSYworld`).

---

## HTML Section Markup Blueprint

```html
<!-- Stage 1: Context / Lead-in Example -->
<div class="box context-lead-in">
  <h3>👀 Context & Lead-in</h3>
  <p>[Describe real-world context or communicative situation with introductory sentence]</p>
</div>

<!-- Stage 2: Meaning Check (CCQs) -->
<div class="box ccq-section">
  <h3>💡 Check your understanding (CCQs)</h3>
  <p><i>Answer these quick questions to verify meaning:</i></p>
  <div class="ccq-item" data-target="[Target Sentence]">
    <p><strong>Sentence:</strong> "[Target Sentence]"</p>
    <p><strong>Q1:</strong> [Concept question answerable short/yes/no]? <span class="ccq-answer">[Answer: ...]</span></p>
  </div>
</div>

<!-- Stage 3: Form Explanation -->
<div class="box form-explanation">
  <h3>🧩 Form & Structure</h3>
  <p><strong>Formula:</strong> [Subject + Verb Structure]</p>
  <div class="table-wrap">
    <table>...</table>
  </div>
</div>

<!-- Stage 4: Pronunciation Note -->
<div class="box pronunciation-note">
  <h3>🗣️ Pronunciation Note</h3>
  <p>[Phonetic details, liaison, stress, or weak forms]</p>
</div>

<!-- Stage 5: Example Bank -->
<div class="box example-bank">
  <h3>📚 Example Bank & Common Pitfalls</h3>
  <ul>
    <li>[Color-coded example sentences]</li>
  </ul>
  <div class="mistakes">...</div>
</div>

<!-- Stage 6: Ecosystem Practice Links -->
<div class="box practice-links">
  <h3>🚀 Practice & Activation</h3>
  <p><strong>Controlled Practice:</strong> <a href="[COSYtools/COSYgames link]">COSYtools / COSYgames Drill</a></p>
  <p><strong>Freer Practice & Production:</strong> <a href="[COSYevents/COSYworld link]">COSYevents Speaking Club / COSYworld Quest</a></p>
</div>
```

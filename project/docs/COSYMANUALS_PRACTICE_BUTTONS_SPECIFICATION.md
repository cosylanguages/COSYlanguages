# COSYmanuals Practice Button Standard & Cross-Linking Specification

This specification defines the mandatory interactive practice button component embedded across all textbook manual topic pages in **`COSYmanuals`**.

---

## 1. Context & Purpose

The **`COSYmanuals`** repository is restricted to contracted teachers and students who receive direct links to specific manuals and lesson topics. To bridge textbook reading with interactive learning, every topic page must feature a standardized **"Practice This Topic"** action bar.

---

## 2. Interactive Practice Action Bar Markup Standard

```html
<div class="manual-practice-bar" data-topic-id="A1-GRAMMAR-TO-BE">
  <div class="mpb-title">⚡ Practice What You Learned</div>
  <div class="mpb-buttons">
    <a href="https://cosylanguages.github.io/COSYlanguages/practice/?topic=A1-GRAMMAR-TO-BE" class="mpb-btn mpb-btn-practice" target="_blank" rel="noopener">
      💡 Free Practice
    </a>
    <a href="https://cosylanguages.github.io/COSYgames/?topic=A1-GRAMMAR-TO-BE" class="mpb-btn mpb-btn-games" target="_blank" rel="noopener">
      🎮 Practice Minigames
    </a>
    <a href="https://cosylanguages.github.io/COSYworld/" class="mpb-btn mpb-btn-world" target="_blank" rel="noopener">
      🗺️ Open World RPG
    </a>
    <a href="https://cosylanguages.github.io/COSYtools/" class="mpb-btn mpb-btn-tools" target="_blank" rel="noopener">
      🛠️ Encyclopedia Tools
    </a>
  </div>
</div>
```

---

## 3. Styling Rules (`style.css` in manuals)

```css
.manual-practice-bar {
  margin: 2rem 0;
  padding: 1.25rem 1.5rem;
  background: var(--surface-card, #ffffff);
  border: 1px solid var(--border-subtle, #e2e8f0);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.mpb-title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--text-heading, #1e293b);
}

.mpb-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.mpb-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.mpb-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.mpb-btn-practice { background: #eff6ff; color: #1d4ed8; }
.mpb-btn-games    { background: #fef3c7; color: #b45309; }
.mpb-btn-world    { background: #dcfce7; color: #15803d; }
.mpb-btn-tools    { background: #f3e8ff; color: #6b21a8; }
```

---

## 4. Compliance Verification

During textbook generation scripts (`build_monolingual_grammar_manuals.py` etc.), generator engines must automatically inject `.manual-practice-bar` at the conclusion of every lesson topic.

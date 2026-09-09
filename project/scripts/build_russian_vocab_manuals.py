#!/usr/bin/env python3
"""
Generator script for COSYlanguages Russian Vocabulary Manuals (Levels A1 through C2).
Parses vocabulary/ru/{A1,A2,B1,B2,C1,C2}/*.js and builds:
 - manuals/ru/vocabulary/index.html (Master Russian Vocabulary Index)
 - manuals/ru/vocabulary/{level}/index.html (Level Hubs)
 - manuals/ru/vocabulary/{level}/topics/*.html (Topic Pages)
 - manuals/ru/vocabulary/{level}/assets/style.css & app.js
100% Monolingual Russian.
"""

import os
import json
import subprocess
import glob
import html

def escape_html(text):
    if not text:
        return ""
    return html.escape(str(text))

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
VOCAB_DIR = os.path.join(REPO_ROOT, "vocabulary", "ru")
MANUALS_DIR = os.path.join(REPO_ROOT, "manuals", "ru", "vocabulary")

LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"]

LEVEL_TITLES = {
    "a1": "Уровень A0–A1 · Начальный",
    "a2": "Уровень A2 · Элементарный",
    "b1": "Уровень B1 · Средний",
    "b2": "Уровень B2 · Выше среднего",
    "c1": "Уровень C1 · Продвинутый",
    "c2": "Уровень C2 · Свободное владение"
}

LEVEL_DESCS = {
    "a1": "Базовая лексика для повседневного общения: знакомство, семья, еда, числа, цвета, обиходные глаголы и ключевые выражения.",
    "a2": "Расширенный словарный запас: описания, путешествия, популярные идиомы, местоположения и бытовая коммуникация.",
    "b1": "Лексический запас среднего уровня: устойчивые выражения, географические понятия, действия и тематическая лексика.",
    "b2": "Продвинутый словарь: сложные идиомы, абстрактные понятия, социальные роли и выразительные глагольные формы.",
    "c1": "Словарь продвинутого уровня: глубокие фразеологизмы, культурные персоналии и концептуальные понятия.",
    "c2": "Профессиональный и литературный лексикон: тонкие оттенки значений, редкие идиомы, философская и академическая лексика."
}

# Topic titles in Russian with html entities
TOPIC_TITLES = {
    "adjectives.js": "Прилагательные &amp; Качества",
    "colours.js": "Цвета &amp; Оттенки",
    "dishes.js": "Блюда &amp; Кулинария",
    "family.js": "Семья &amp; Родственники",
    "food_drink.js": "Еда &amp; Напитки",
    "grammar_elements.js": "Служебные слова &amp; Грамматика",
    "greetings.js": "Приветствия &amp; Этикет",
    "idioms.js": "Идиомы &amp; Фразеологизмы",
    "locations.js": "Страны, Города &amp; Локации",
    "nationalities.js": "Национальности &amp; Языки",
    "numbers.js": "Числа &amp; Количества",
    "people.js": "Выдающиеся Люди &amp; Персоналии",
    "travel.js": "Путешествия &amp; Туризм",
    "verbs.js": "Глаголы &amp; Действия",
    "vocabulary.js": "Общая Лексика &amp; Понятия"
}

def load_all_vocab_data():
    node_cmd = """
    const fs = require("fs");
    const path = require("path");

    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const result = {};

    levels.forEach(level => {
      const lvlLower = level.toLowerCase();
      result[lvlLower] = {};
      const dir = path.join("vocabulary", "ru", level);
      if (!fs.existsSync(dir)) return;
      const files = fs.readdirSync(dir).filter(f => f.endsWith(".js"));
      files.forEach(f => {
        const filePath = path.join(dir, f);
        const code = fs.readFileSync(filePath, "utf8");
        const window = { vocabularyData: {}, speakingData: {}, COSY_VOCABULARY: {} };
        try {
          eval(code);
          let items = [];
          if (window.vocabularyData && (window.vocabularyData.ru || window.vocabularyData.RU)) {
            items = window.vocabularyData.ru || window.vocabularyData.RU;
          } else {
            for (let k in window) {
              if (Array.isArray(window[k])) { items = window[k]; break; }
            }
          }
          if (items.length > 0) {
            result[lvlLower][f] = items;
          }
        } catch(e) {
          // ignore
        }
      });
    });

    console.log(JSON.stringify(result));
    """
    res = subprocess.run(["node", "-e", node_cmd], capture_output=True, text=True, cwd=REPO_ROOT)
    if res.returncode != 0:
        raise RuntimeError(f"Error running node script: {res.stderr}")
    return json.loads(res.stdout)

STYLE_CSS = """/* COSYlanguages · Лексика Русского Языка */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --brand-blue: #3562e0;
  --teal-900: #0f382c;
  --teal-800: #1c6b54;
  --teal-700: #25a894;
  --teal-100: #e8f5f1;
  --teal-50: #f2f9f6;
  --bg: #faf9f5;
  --card-bg: #ffffff;
  --text: #1a1a1a;
  --subtext: #555555;
  --border: #e2e8f0;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
}

.sd-sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--card-bg, #ffffff);
  border-bottom: 1px solid var(--border, #e2e8f0);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 20px;
}

.page-head {
  margin-bottom: 28px;
}

.eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--brand-blue);
  margin-bottom: 6px;
}

.page-head h1 {
  font-size: 32px;
  font-weight: 800;
  margin: 4px 0 8px;
  color: #111827;
}

.subtitle {
  font-size: 16px;
  color: var(--subtext);
  margin: 0;
}

.rule {
  border: 0;
  border-top: 1px solid var(--border);
  margin: 20px 0 28px;
}

/* Grids & Cards */
.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 36px;
}

.vcard {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px 18px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.word-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.word {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}

.emoji {
  font-size: 20px;
}

.genre {
  font-size: 12px;
  font-weight: 600;
  color: var(--brand-blue);
  background: #eff6ff;
  padding: 2px 8px;
  border-radius: 4px;
  align-self: flex-start;
  text-transform: lowercase;
}

.def {
  font-size: 14px;
  color: #334155;
  margin: 4px 0 0;
}

.ex {
  font-size: 13px;
  color: #64748b;
  font-style: italic;
  margin-top: 4px;
  border-left: 2px solid var(--border);
  padding-left: 8px;
}

/* Modules & Hub */
.module-grid, .parts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.mcard, .part-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  display: flex;
  flex-direction: column;
}

.mcard:hover, .part-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
}

.mcard h2, .part-card h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #0f172a;
}

.mcard p, .part-card p {
  font-size: 14px;
  color: var(--subtext);
  margin: 0 0 16px;
  flex-grow: 1;
}

/* Interactive elements */
.checklist {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 32px;
}

.checklist h3 {
  margin: 0 0 12px;
  font-size: 16px;
  color: #0f172a;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  cursor: pointer;
}

.check-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--brand-blue);
}

.quiz-panel {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 36px;
}

.quiz-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.quiz-head h2 {
  font-size: 18px;
  margin: 0;
}

.quiz-score {
  font-size: 14px;
  font-weight: 700;
  color: var(--brand-blue);
}

.qitem {
  margin-bottom: 16px;
}

.qtext {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
}

.qopts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.qopt {
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease;
}

.qopt:hover {
  background: #f1f5f9;
}

.qopt.correct {
  background: #dcfce7;
  border-color: #86efac;
  color: #166534;
}

.qopt.wrong {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #991b1b;
}

.qexplain {
  display: none;
  font-size: 13px;
  margin-top: 8px;
  color: #166534;
}

.pager {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.pager a {
  text-decoration: none;
  font-weight: 600;
  color: var(--brand-blue);
  font-size: 14px;
}

footer.site {
  background: #ffffff;
  border-top: 1px solid var(--border);
  padding: 24px 0;
  margin-top: 48px;
  font-size: 14px;
  color: var(--subtext);
}

footer.site .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer.site a {
  color: var(--brand-blue);
  text-decoration: none;
}
"""

APP_JS = """// COSYlanguages Russian Vocabulary Manual Interactivity
document.addEventListener("DOMContentLoaded", () => {
  // Checklist Persistence
  const checklist = document.querySelector(".checklist");
  if (checklist) {
    const key = "cosy_ru_vocab_" + (checklist.dataset.key || "default");
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    const checkboxes = checklist.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((cb, idx) => {
      if (saved[idx]) cb.checked = true;
      cb.addEventListener("change", () => {
        const state = Array.from(checkboxes).map(c => c.checked);
        localStorage.setItem(key, JSON.stringify(state));
      });
    });
  }

  // Quiz Panel Logic
  const quizPanels = document.querySelectorAll(".quiz-panel");
  quizPanels.forEach(panel => {
    const config = JSON.parse(panel.dataset.quiz || "[]");
    const scoreEl = panel.querySelector(".quiz-score");
    let score = 0;

    const qitems = panel.querySelectorAll(".qitem");
    qitems.forEach((qitem, qidx) => {
      const targetConfig = config[qidx] || { correct: 0 };
      const opts = qitem.querySelectorAll(".qopt");
      const explain = qitem.querySelector(".qexplain");

      opts.forEach((opt, oidx) => {
        opt.addEventListener("click", () => {
          if (qitem.classList.contains("answered")) return;
          qitem.classList.add("answered");

          if (oidx === targetConfig.correct) {
            opt.classList.add("correct");
            score++;
            if (scoreEl) scoreEl.textContent = `Счёт: ${score} / ${qitems.length}`;
          } else {
            opt.classList.add("wrong");
            opts[targetConfig.correct].classList.add("correct");
          }
          if (explain) explain.style.display = "block";
        });
      });
    });
  });
});
"""

def main():
    os.makedirs(MANUALS_DIR, exist_ok=True)
    vocab_data = load_all_vocab_data()

    # 1. Build Master Index (manuals/ru/vocabulary/index.html)
    master_index_content = """<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Лексика Русского Языка · COSYlanguages</title>
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="a1/assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Главная навигация"></nav>

<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Быстрая навигация">
      <a class="sd-jump-link" href="../grammar/index.html">← Грамматика RU</a>
      <a class="sd-jump-link" href="../../russkiy-a0-a1.html">Русский Hub</a>
      <a class="sd-jump-link" href="a1/index.html">A1</a>
      <a class="sd-jump-link" href="a2/index.html">A2</a>
      <a class="sd-jump-link" href="b1/index.html">B1</a>
      <a class="sd-jump-link" href="b2/index.html">B2</a>
      <a class="sd-jump-link" href="c1/index.html">C1</a>
      <a class="sd-jump-link" href="c2/index.html">C2</a>
    </nav>
  </div>
</header>

<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Словарный запас</span>
    <h1>Лексический справочник русского языка</h1>
    <p class="subtitle">Полноценное тематическое руководство от уровня A1 до C2 с примерами, идиомами и упражнениями.</p>
    <hr class="rule">
  </div>

  <div class="parts-grid">
"""
    for lvl in LEVELS:
        topics_count = len(vocab_data.get(lvl, {}))
        word_count = sum(len(items) for items in vocab_data.get(lvl, {}).values())
        master_index_content += f"""    <a class="part-card" href="{lvl}/index.html">
      <h2>{LEVEL_TITLES[lvl]}</h2>
      <p>{LEVEL_DESCS[lvl]}</p>
      <span style="font-size:13px;font-weight:700;color:var(--brand-blue);">{topics_count} тем · {word_count} слов &rarr;</span>
    </a>
"""
    master_index_content += """  </div>
</main>

<footer class="site"><div class="container"><div>COSYlanguages · Лексика Русского Языка</div><div><a href="../../index.html">← Главная COSYlanguages</a></div></div></footer>
</body>
</html>
"""
    with open(os.path.join(MANUALS_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(master_index_content)

    # 2. Build Level Hubs and Topic Pages
    for lvl in LEVELS:
        lvl_dir = os.path.join(MANUALS_DIR, lvl)
        topics_dir = os.path.join(lvl_dir, "topics")
        assets_dir = os.path.join(lvl_dir, "assets")
        os.makedirs(topics_dir, exist_ok=True)
        os.makedirs(assets_dir, exist_ok=True)

        with open(os.path.join(assets_dir, "style.css"), "w", encoding="utf-8") as f:
            f.write(STYLE_CSS)
        with open(os.path.join(assets_dir, "app.js"), "w", encoding="utf-8") as f:
            f.write(APP_JS)

        level_files = vocab_data.get(lvl, {})
        sorted_files = sorted(level_files.keys())

        topic_pages = []
        for file_key in sorted_files:
            items = level_files[file_key]
            slug = file_key.replace(".js", "").replace("_", "-")
            topic_filename = f"{slug}.html"
            topic_title = TOPIC_TITLES.get(file_key, escape_html(slug.replace("-", " ").title()))

            topic_pages.append({
                "file_key": file_key,
                "slug": slug,
                "filename": topic_filename,
                "title": topic_title,
                "items": items
            })

        for i, tp in enumerate(topic_pages):
            prev_tp = topic_pages[i-1] if i > 0 else None
            next_tp = topic_pages[i+1] if i < len(topic_pages)-1 else None

            cards_html = ""
            for item in tp["items"]:
                word = item.get("word") or item.get("term") or item.get("text") or ""
                if not word and item.get("article") and item.get("plural"):
                    word = f"{item['article']} {item['plural']}"
                elif not word:
                    word = "Термин"

                emoji = item.get("emoji", "")
                form = item.get("form", "") or item.get("pos_section", "") or ""

                # Extract definition and example
                defs = item.get("definitions", [])
                def_text = ""
                ex_text = ""
                if defs and isinstance(defs, list) and len(defs) > 0:
                    d0 = defs[0]
                    if isinstance(d0, dict):
                        def_text = d0.get("text", "")
                        exs = d0.get("examples", [])
                        if exs and len(exs) > 0:
                            ex_text = exs[0]
                    elif isinstance(d0, str):
                        def_text = d0

                if not def_text:
                    def_text = item.get("translation") or item.get("subtext") or ""
                if not ex_text and item.get("examples") and isinstance(item["examples"], list) and len(item["examples"]) > 0:
                    ex_first = item["examples"][0]
                    if isinstance(ex_first, dict):
                        ex_text = ex_first.get("text", "")
                    elif isinstance(ex_first, str):
                        ex_text = ex_first
                if not ex_text:
                    ex_text = item.get("subtext") if item.get("subtext") != def_text else ""

                word_esc = escape_html(word)
                form_esc = escape_html(form)
                def_text_esc = escape_html(def_text)
                ex_text_esc = escape_html(ex_text)

                emoji_span = f'<span class="emoji">{emoji}</span>' if emoji else ""
                form_div = f'<div class="genre">{form_esc}</div>' if form_esc else ""
                def_p = f'<p class="def">{def_text_esc}</p>' if def_text_esc else ""
                ex_div = f'<div class="ex">« {ex_text_esc} »</div>' if ex_text_esc else ""

                cards_html += f"""    <div class="vcard">
      <div class="word-line"><strong class="word">{word_esc}</strong>{emoji_span}</div>
      {form_div}
      {def_p}
      {ex_div}
    </div>
"""

            first_item = tp["items"][0] if tp["items"] else {}
            q_word = first_item.get("word") or first_item.get("term") or first_item.get("text") or "данное слово"
            q_def = ""
            if first_item and first_item.get("definitions"):
                d = first_item["definitions"][0]
                q_def = d.get("text", "") if isinstance(d, dict) else d
            if not q_def:
                q_def = first_item.get("translation") or first_item.get("subtext") or ""

            quiz_q = f"Каково главное значение или употребление слова «{q_word}»?"
            clean_topic_title = tp['title'].replace("&amp;", "&")
            q_opt0 = q_def if q_def else f"Лексика, относящаяся к теме «{clean_topic_title}»"
            q_opt1 = "Устаревшая грамматическая форма XIX века"
            q_opt2 = "Узкоспециализированный медицинский термин"

            pager_prev = f'<a class="prev" href="{prev_tp["filename"]}">← {prev_tp["title"]}</a>' if prev_tp else "<span></span>"
            pager_next = f'<a class="next" href="{next_tp["filename"]}">{next_tp["title"]} →</a>' if next_tp else "<span></span>"

            clean_title = tp['title']
            meta_title = f"{clean_title} · Лексика RU {lvl.upper()}"

            topic_html = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{meta_title}</title>
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Главная навигация"></nav>

<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Быстрая навигация">
      <a class="sd-jump-link" href="../index.html">← Лексика {lvl.upper()}</a>
      <a class="sd-jump-link" href="../../index.html">Все Уровни</a>
    </nav>
  </div>
</header>

<main class="container">
  <div class="page-head">
    <span class="eyebrow">{LEVEL_TITLES[lvl]}</span>
    <h1>{tp['title']}</h1>
    <p class="subtitle">Тематический словарный запас и примеры употребления ({len(tp['items'])} терминов).</p>
    <hr class="rule">
  </div>

  <div class="vocab-grid">
{cards_html}  </div>

  <div class="checklist" data-key="{tp['slug']}">
    <h3>🎯 Самопроверка &amp; Запоминание</h3>
    <label class="check-item"><input type="checkbox"><span>Понимать и использовать слова из темы «{clean_title}»</span></label>
    <label class="check-item"><input type="checkbox"><span>Распознавать термины на слух и в тексте</span></label>
  </div>

  <div class="quiz-panel" data-quiz='[{{"correct": 0}}]'>
    <div class="quiz-head">
      <h2>Быстрый Тест</h2>
      <span class="quiz-score">Счёт: 0 / 1</span>
    </div>
    <div class="qitem">
      <div class="qtext">{escape_html(quiz_q)}</div>
      <div class="qopts">
        <button type="button" class="qopt">{escape_html(q_opt0)}</button>
        <button type="button" class="qopt">{escape_html(q_opt1)}</button>
        <button type="button" class="qopt">{escape_html(q_opt2)}</button>
      </div>
      <div class="qexplain">Верно! Это точное значение данного слова.</div>
    </div>
  </div>

  <div class="pager">
    {pager_prev}
    {pager_next}
  </div>
</main>

<footer class="site"><div class="container"><div>COSYlanguages · Лексика Русского Языка ({lvl.upper()})</div><div><a href="../../../../../index.html">← Главная COSYlanguages</a></div></div></footer>
<script src="../assets/app.js"></script>
</body>
</html>
"""
            with open(os.path.join(topics_dir, tp["filename"]), "w", encoding="utf-8") as f:
                f.write(topic_html)

        # Build level hub manuals/ru/vocabulary/{lvl}/index.html
        level_hub_content = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Лексика Русского Языка Уровень {lvl.upper()} · COSYlanguages</title>
<link rel="stylesheet" href="../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../css/base.css">
<link rel="stylesheet" href="../../../../css/components.css">
<link rel="stylesheet" href="../../../../css/layout.css">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Главная навигация"></nav>

<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Быстрая навигация">
      <a class="sd-jump-link" href="../index.html">← Все Уровни</a>
      <a class="sd-jump-link" href="../../grammar/index.html">Грамматика RU</a>
      <a class="sd-jump-link" href="../../../russkiy-a0-a1.html">Русский Hub</a>
    </nav>
  </div>
</header>

<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · {LEVEL_TITLES[lvl]}</span>
    <h1>Лексика Русского Языка ({lvl.upper()})</h1>
    <p class="subtitle">{LEVEL_DESCS[lvl]}</p>
    <hr class="rule">
  </div>

  <div class="module-grid">
"""
        for tp in topic_pages:
            level_hub_content += f"""    <a class="mcard" href="topics/{tp['filename']}">
      <h2>{tp['title']}</h2>
      <p>Тематический модуль, содержащий {len(tp['items'])} ключевых терминов.</p>
      <span style="font-size:12px;font-weight:700;color:var(--brand-blue);">{len(tp['items'])} терминов &rarr;</span>
    </a>
"""

        level_hub_content += f"""  </div>
</main>

<footer class="site"><div class="container"><div>COSYlanguages · Лексика Русского Языка ({lvl.upper()})</div><div><a href="../../../../index.html">← Главная COSYlanguages</a></div></div></footer>
</body>
</html>
"""
        with open(os.path.join(lvl_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(level_hub_content)

    print("All Russian vocabulary manuals built successfully!")

if __name__ == "__main__":
    main()

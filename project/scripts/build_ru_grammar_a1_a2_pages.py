import json, os, sys

# Load topic map
with open('data/ru_grammar_topics_map.json', 'r', encoding='utf-8') as f:
    topics_map = json.load(f)

a1_topics = topics_map['A1']
a2_topics = topics_map['A2']

def html_template(level, slug, title, subtitle, part_num, part_title, prev_slug, next_slug,
                  outcome, practice_theme, context_examples, notice_prompt,
                  ccq_data, form_html, why_text, native_text, pron_text,
                  more_examples, mistakes_data, connect_html, checklist_data, quiz_data):

    level_code = level.lower()
    cefr_level_name = "A0–A1" if level == "A1" else ("A2" if level == "A2" else ("B1" if level == "B1" else ("B2" if level == "B2" else ("C1" if level == "C1" else "C2"))))
    cat_level = "starter" if level == "A1" else ("elementary" if level == "A2" else ("intermediate" if level == "B1" else ("upper_intermediate" if level == "B2" else ("advanced" if level == "C1" else "proficiency"))))

    # CCQ json string
    ccq_json = json.dumps([{"correct": item["correct"]} for item in ccq_data])
    quiz_json = json.dumps([{"correct": item["correct"]} for item in quiz_data])

    # Context examples list
    ctx_ex_items = "".join([f"  <li>{ex}</li>\n" for ex in context_examples])

    # CCQ items markup
    ccq_items_html = ""
    for i, q in enumerate(ccq_data, 1):
        opts_html = "".join([f'      <button type="button" class="qopt">{opt}</button>\n' for opt in q["options"]])
        ccq_items_html += f"""  <div class="qitem">
    <div class="qtext">{i}. {q["question"]}</div>
    <div class="qopts">
{opts_html}    </div>
    <div class="qexplain">{q["explain"]}</div>
  </div>\n"""

    # More examples list
    more_ex_items = "".join([f"  <li>{ex}</li>\n" for ex in more_examples])

    # Mistakes flip cards
    mistakes_html = ""
    for m in mistakes_data:
        mistakes_html += f""" <div class="mflip">
 <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">{m["wrong"]}</span></div>
 <span class="hint">tap to see the correct form</span>
 <div class="right-line"><span class="c">✅</span><span>{m["right"]}</span></div>
 </div>\n"""

    # Checklist items
    checklist_items_html = "".join([f' <label class="check-item"><input type="checkbox"><span>{item}</span></label>\n' for item in checklist_data])

    # Quiz items
    quiz_items_html = ""
    for i, q in enumerate(quiz_data, 1):
        opts_html = "".join([f'<button type="button" class="qopt">{opt}</button>' for opt in q["options"]])
        quiz_items_html += f""" <div class="qitem">
 <div class="qtext">{i}. {q["question"]}</div>
 <div class="qopts">{opts_html}</div>
 <div class="qexplain">{q["explain"]}</div>
 </div>\n"""

    # Pager links
    prev_link = f'<a class="prev" href="{prev_slug}.html"><span class="dir">&larr; Previous</span><span class="ttl">Previous Topic</span></a>' if prev_slug else '<span class="prev"></span>'
    next_link = f'<a class="next" href="{next_slug}.html"><span class="dir">Next &rarr;</span><span class="ttl">Next Topic</span></a>' if next_slug else '<span class="next"></span>'

    return f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · Грамматика русского языка {cefr_level_name} · COSYlanguages</title>
<meta name="description" content="{subtitle}">
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Main navigation"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="In-page section navigation">
      <a class="sd-jump-link" href="../index.html" style="font-weight: 700;">← Грамматика {cefr_level_name}</a>
      <a class="sd-jump-link" href="../index.html">Часть {part_num}</a>
    </nav>
  </div>
</header>

<main class="container">
<div class="page-head">
 <span class="eyebrow">Часть {part_num} · {part_title}</span>
 <h1>{title}</h1>
 <p class="subtitle">{subtitle}</p>
 <hr class="rule">
</div>

<!-- Step 1: Outcome Banner -->
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 Коммуникативный результат:</strong> {outcome}
</div>

<!-- Step 2: Practice CTA Banner -->
<div class="box practice-cta-banner" style="background:linear-gradient(135deg, rgba(28,143,86,0.1) 0%, rgba(20,110,66,0.05) 100%); border:1px solid rgba(28,143,86,0.3); border-left:4px solid #1c8f56; padding:12px 18px; margin-bottom:20px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
  <div style="font-size:0.95rem; color:#132321;">
    <strong>🎯 Готовы закрепить знания?</strong> Попробуйте интерактивные тренажёры и упражнения.
  </div>
  <a href="../../../../../practice/index.html?lang=ru&cat=Grammar&level={cat_level}&theme={practice_theme}" class="btn-practice-link" style="background:#1c8f56; color:#ffffff; font-weight:700; font-size:0.9rem; padding:8px 16px; border-radius:6px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:background 0.2s ease; white-space:nowrap;">🎯 Практиковаться →</a>
</div>

<!-- Step 3: Context Examples -->
<div class="examples" style="margin-bottom:20px;">
 <span class="label">Контекстные примеры</span>
 <ul>
{ctx_ex_items} </ul>
</div>

<!-- Step 4: Guided Observation -->
<div class="box mint" style="margin-bottom:20px;">
  <h3>👀 Что вы замечаете?</h3>
  <p>{notice_prompt}</p>
</div>

<!-- Step 5: Meaning Check (CCQs) -->
<div class="ccq-panel" data-quiz='{ccq_json}'>
  <div class="quiz-head">
    <h3>💡 Проверьте понимание (CCQs)</h3>
    <span class="quiz-score">Счёт: 0 / {len(ccq_data)}</span>
  </div>
{ccq_items_html}</div>

<!-- Step 6: Form & Structure -->
{form_html}

<!-- Step 7: Why This Matters -->
<div class="box why">
 <h3>★ Почему это важно</h3>
 <p>{why_text}</p>
</div>

<!-- Step 8: Think Like a Native Speaker / Russian Signature -->
<div class="box native">
 <h3>🇷🇺 Почему русский язык так устроен? (🧩 Паттерн)</h3>
 <p>{native_text}</p>
</div>

<!-- Step 9: Pronunciation Note -->
<div class="pron-callout">
 <h3>🗣️ Произношение и интонация</h3>
 <p>{pron_text}</p>
</div>

<!-- Step 10: Expanded Example Bank -->
<div class="examples"><span class="label">Дополнительные примеры</span><ul>
{more_ex_items}</ul></div>

<!-- Step 11: Common Mistakes -->
<div class="mistakes">
 <div class="m-title">⚠️ Частые ошибки</div>
{mistakes_html}</div>

<!-- Step 12: Connects to... -->
<div class="box connect">
 <h3>🔗 Связь с другими темами</h3>
 <p>{connect_html}</p>
</div>

<!-- Step 13: Skill Checklist -->
<div class="checklist" data-key="{slug}">
 <h3>🎯 Проверьте свои навыки</h3>
{checklist_items_html} <div class="check-progress"></div>
</div>

<!-- Step 14: Controlled Practice & Progress Celebration -->
<div class="quiz-panel" data-quiz='{quiz_json}'>
 <div class="quiz-head"><h2>Экспресс-тест</h2><span class="quiz-score">Счёт: 0 / {len(quiz_data)}</span></div>
{quiz_items_html} <p class="celebration-msg" style="margin-top:16px; font-weight:700; color:#1c8f56;">🎉 Поздравляем! Вы успешно освоили эту тему!</p>
 <button type="button" class="quiz-reset">Сбросить тест</button>
</div>

<div class="pager">
 {prev_link}
 {next_link}
</div>
</main>

<footer class="site">
 <div class="container">
 <div>COSYlanguages · Грамматика русского языка ({cefr_level_name}) · интерактивное издание</div>
 <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Вернуться на главный сайт</a></div>
 </div>
</footer>
<script src="../assets/app.js"></script>
</body>
</html>"""

print("HTML Template generator ready.")

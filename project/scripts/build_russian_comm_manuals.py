import os, json, html

BASE_DIR = "manuals/ru/communication"

LEVEL_META = {
    "a1": {
        "title": "A1 · Бытовое общение и первые шаги",
        "kicker": "COSYlanguages · Уровень A1",
        "desc": "10 систем разговорной речи: знакомство, базовые вопросы, заказ в кафе, ориентирование в городе, покупки и короткие сообщения.",
        "badge": "CEFR LEVEL A0–A1"
    },
    "a2": {
        "title": "A2 · Социальная жизнь и повседневный диалог",
        "kicker": "COSYlanguages · Уровень A2",
        "desc": "10 систем разговорной речи: рассказ о событиях, совместные планы, сравнение вариантов, простые советы и бытовые ситуации.",
        "badge": "CEFR LEVEL A2"
    },
    "b1": {
        "title": "B1 · Самостоятельное общение и дискуссия",
        "kicker": "COSYlanguages · Уровень B1",
        "desc": "10 систем разговорной речи: выявление и обоснование мнения, вежливое несогласие, поиск компромиссов, просьбы и собеседование.",
        "badge": "CEFR LEVEL B1"
    },
    "b2": {
        "title": "B2 · Аргументация, беглость и дипломатия",
        "kicker": "COSYlanguages · Уровень B2",
        "desc": "10 систем разговорной речи: выстраивание защиты позиции, модерация встреч, дипломатическое смягчение и устное выступление.",
        "badge": "CEFR LEVEL B2"
    },
    "c1": {
        "title": "C1 · Стратегическое лидерство и риторика",
        "kicker": "COSYlanguages · Уровень C1",
        "desc": "10 систем разговорной речи: переговоры высокого уровня, перехват инициативы, ирония, деэскалация конфликтов и публичный доклад.",
        "badge": "CEFR LEVEL C1"
    },
    "c2": {
        "title": "C2 · Мастерство речи и совершенное владение",
        "kicker": "COSYlanguages · Уровень C2",
        "desc": "10 систем разговорной речи: спонтанный синтез, мгновенное переключение регистров, подтекст, арбитраж и виртуозная отповедь.",
        "badge": "CEFR LEVEL C2"
    }
}

# Load complete data definitions
with open("project/scripts/ru_comm_data.json", "r", encoding="utf-8") as f:
    ALL_TOPICS_DATA = json.load(f)

def get_level_topics(lvl):
    return ALL_TOPICS_DATA[lvl]

def generate_topic_html(lvl, topic, total_topics):
    p_num = topic["part"]
    slug = topic["slug"]

    # Navigation jump links
    jump_links = f'<a class="sd-jump-link" href="../index.html" style="font-weight:700;">&larr; Hub Communication RU {lvl.upper()}</a>\n'
    for i in range(1, total_topics + 1):
        jump_links += f'      <a class="sd-jump-link" href="../part-{i}.html">Система {i}</a>\n'

    # Blocks
    blocks_html = ""
    for b_type, b_class in [("start", "block-start"), ("continue", "block-continue"), ("ask", "block-ask"), ("react", "block-react"), ("close", "block-close")]:
        for item in topic["blocks"].get(b_type, []):
            blocks_html += f'    <span class="chip {b_class}">{html.escape(item)}</span>\n'

    # Map
    map_html = ""
    for s_num, s_text in topic["map"]:
        map_html += f'  <div class="map-step"><span class="step-num">{s_num}</span><div class="step-text">{s_text}</div></div>\n'

    # Dialogue
    dialogue_html = ""
    for speaker, text in topic["dialogue"]:
        dialogue_html += f'  <div class="line"><strong>{speaker} :</strong> {html.escape(text)}</div>\n'

    # Checklist items
    checklist_html = ""
    for c_item in topic["checklist"]:
        checklist_html += f'  <label class="check-item"><input type="checkbox"><span>{html.escape(c_item)}</span></label>\n'

    # Quiz items
    quiz_json = json.dumps(topic["quiz"], ensure_ascii=False)
    quiz_html = ""
    for q_idx, q in enumerate(topic["quiz"]):
        opts_html = ""
        for opt in q["opts"]:
            opts_html += f'<button type="button" class="qopt">{html.escape(opt)}</button>'
        quiz_html += f'''  <div class="qitem">
    <div class="qtext">{html.escape(q["text"])}</div>
    <div class="qopts">{opts_html}</div>
    <div class="qexplain">{html.escape(q["explain"])}</div>
  </div>\n'''

    # Pager
    prev_link = f'<a class="prev" href="{get_level_topics(lvl)[p_num-2]["slug"]}.html"><span class="dir">&larr; Предыдущий</span><span class="ttl">Система {p_num-1}</span></a>' if p_num > 1 else '<span class="prev empty"></span>'
    next_link = f'<a class="next" href="{get_level_topics(lvl)[p_num]["slug"]}.html"><span class="dir">Следующий &rarr;</span><span class="ttl">Система {p_num+1}</span></a>' if p_num < total_topics else '<span class="prev empty"></span>'

    doc = f'''<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(topic["title"])} · Русский Язык {lvl.upper()}</title>
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Главная навигация"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Навигация по разделам">
      {jump_links.strip()}
    </nav>
  </div>
</header>
<main class="container">
<div class="page-head">
 <span class="eyebrow">{html.escape(topic["eyebrow"])}</span>
 <h1>{html.escape(topic["title"])}</h1>
 <p class="subtitle">{html.escape(topic["subtitle"])}</p>
 <hr class="rule">
</div>
<div class="box why">
  <strong>💬 {html.escape(topic["question"])}</strong>
  <p style="margin:6px 0 0; font-size:15px;">{html.escape(topic["why_matter"])}</p>
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 Готовый результат после этой страницы:</strong> {html.escape(topic["can_do"])}
</div>
<div class="box practice-cta-banner" style="background:linear-gradient(135deg, rgba(28,143,86,0.1) 0%, rgba(20,110,66,0.05) 100%); border:1px solid rgba(28,143,86,0.3); border-left:4px solid #1c8f56; padding:12px 18px; margin-bottom:20px; border-radius:4px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
  <div style="font-size:0.95rem; color:#132321;">
    <strong>🎯 Готовы к практике?</strong> Закрепите эту систему с помощью наших интерактивных упражнений.
  </div>
  <a href="../../../../../practice/index.html?lang=ru&amp;cat=Communication&amp;level={lvl}" class="btn-practice-link" style="background:#1c8f56; color:#ffffff; font-weight:700; font-size:0.9rem; padding:8px 16px; border-radius:6px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:background 0.2s ease; white-space:nowrap;">🎯 Практиковать систему &rarr;</a>
</div>
<div class="building-blocks">
  <h3>🧩 Модульные блоки: Речевые кирпичики</h3>
  <div class="chip-grid">
{blocks_html.rstrip()}
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ Карта диалога</h3>
{map_html.rstrip()}
</div>
<div class="notice-box">
  <h4>{html.escape(topic["notice_title"])}</h4>
  <p style="margin:0; font-size:14.5px;">{html.escape(topic["notice_text"])}</p>
</div>
<div class="mindset-box">
  <h4>{html.escape(topic["mindset_title"])}</h4>
  <p style="margin:0; font-size:14.5px;">{html.escape(topic["mindset_text"])}</p>
</div>
<div class="natural-speech">
  <h3>🗣️ Живая речь vs Учебный шаблон</h3>
  <div class="speech-compare">
    <div class="stiff-card">❌ <b>Учебный шаблон:</b> {html.escape(topic["stiff"])}</div>
    <div class="natural-card">✅ <b>Живая речь:</b> {html.escape(topic["natural"])}</div>
  </div>
</div>
<div class="memory-box">
  <h4>💡 Мнемоническая подсказка</h4>
  <p style="margin:0; font-size:14.5px;">{html.escape(topic["memory"])}</p>
</div>
<div class="dialogue-box">
  <h3>💬 Пример живого диалога</h3>
{dialogue_html.rstrip()}
</div>
<div class="connect-box">
  <h4>🔗 Связи с другими разделами</h4>
  <p style="margin:0; font-size:14.5px;">{topic["connect"]}</p>
</div>
<div class="checklist" data-key="ru-comm-{lvl}-{slug}">
  <h3>📍 Самопроверка: Могу ли я уже... ?</h3>
{checklist_html.rstrip()}
  <div class="check-progress"></div>
</div>
<div class="celebration-box">
  {html.escape(topic["celebration"])}
</div>
<div class="quiz-panel" data-quiz='{quiz_json}'>
  <div class="quiz-head"><h2>Быстрая проверка</h2><span class="quiz-score">Счет : 0 / {len(topic["quiz"])}</span></div>
{quiz_html.rstrip()}
  <button type="button" class="quiz-reset">Сбросить тест</button>
</div>
<div class="pager">{prev_link}{next_link}</div>
</main>
<footer class="site" aria-label="Подвал сайта">
 <div class="container">
 <div>COSYlanguages · Практика коммуникации на русском языке ({lvl.upper()})</div>
 <div><a href="../../../../../index.html">&larr; Вернуться на cosylanguages.github.io</a></div>
 </div>
</footer>
<script src="../assets/app.js"></script>
</body>
</html>'''
    return doc

def generate_part_html(lvl, topic, total_topics):
    p_num = topic["part"]
    slug = topic["slug"]

    jump_links = f'<a class="sd-jump-link" href="index.html" style="font-weight:700;">&larr; Hub Communication RU {lvl.upper()}</a>\n'
    for i in range(1, total_topics + 1):
        jump_links += f'      <a class="sd-jump-link" href="part-{i}.html">Система {i}</a>\n'

    doc = f'''<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Система {p_num} · {html.escape(topic["title"])} · Мануал Communication RU {lvl.upper()}</title>
<link rel="stylesheet" href="../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../css/base.css">
<link rel="stylesheet" href="../../../../css/components.css">
<link rel="stylesheet" href="../../../../css/layout.css">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Главная навигация"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Навигация по разделам">
      {jump_links.strip()}
    </nav>
  </div>
</header>
<main class="container">
<div class="page-head">
 <span class="eyebrow">{html.escape(topic["eyebrow"])}</span>
 <h1>Система {p_num} · {html.escape(topic["title"])}</h1>
 <p class="subtitle">{html.escape(topic["subtitle"])}</p>
 <hr class="rule">
</div>
<div class="parts-grid">
 <a class="part-card" href="topics/{slug}.html">
  <div class="stripe" style="background:#25a894;"></div>
  <span class="pnum">Система {p_num}</span>
  <h2>{html.escape(topic["title"])}</h2>
  <p>{html.escape(topic["subtitle"])}</p>
  <span class="topics-count">Открыть систему &rarr;</span>
 </a>
</div>
</main>
<footer class="site" aria-label="Подвал сайта">
 <div class="container">
 <div>COSYlanguages · Практика коммуникации на русском языке ({lvl.upper()})</div>
 <div><a href="../../../../index.html">&larr; Вернуться на cosylanguages.github.io</a></div>
 </div>
</footer>
</body>
</html>'''
    return doc

def generate_level_index_html(lvl, topics):
    meta = LEVEL_META[lvl]

    jump_links = f'<a class="sd-jump-link" href="../index.html" style="font-weight:700;">&larr; Репертуар Коммуникации RU</a>\n'
    for i in range(1, len(topics) + 1):
        jump_links += f'      <a class="sd-jump-link" href="part-{i}.html">Система {i}</a>\n'

    cards_html = ""
    colors = ["#25a894", "#157c6c", "#0f5c50", "#0c3f38"]
    for idx, t in enumerate(topics):
        color = colors[idx % len(colors)]
        cards_html += f'''<a class="part-card" href="part-{t["part"]}.html">
 <div class="stripe" style="background:{color};"></div>
 <span class="pnum">Система {t["part"]}</span>
 <h2>Система {t["part"]} · {html.escape(t["title"])}</h2>
 <p>{html.escape(t["subtitle"])}</p>
 <span class="topics-count">Исследовать систему &rarr;</span>
</a>'''

    doc = f'''<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Мануал Коммуникации Русский Язык ({lvl.upper()}) · COSYlanguages</title>
<link rel="stylesheet" href="../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../css/base.css">
<link rel="stylesheet" href="../../../../css/components.css">
<link rel="stylesheet" href="../../../../css/layout.css">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Главная навигация"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Навигация по разделам">
      {jump_links.strip()}
    </nav>
  </div>
</header>
<section class="hero">
 <div class="container">
 <span class="hero-kicker">{html.escape(meta["kicker"])}</span>
 <h1>Мануал Коммуникации Русский Язык · Уровень {lvl.upper()}</h1>
 <p class="lead">{html.escape(meta["desc"])}</p>
 </div>
</section>
<main class="container">
 <div class="parts-grid">
 {cards_html}
 </div>
</main>
<footer class="site" aria-label="Подвал сайта">
 <div class="container">
 <div>COSYlanguages · Мануал Коммуникации Русский Язык ({lvl.upper()})</div>
 <div><a href="../../../../index.html">&larr; Вернуться на cosylanguages.github.io</a></div>
 </div>
</footer>
<script src="assets/app.js"></script>
</body>
</html>'''
    return doc

def generate_master_index_html():
    cards_html = ""
    for lvl in ["a1", "a2", "b1", "b2", "c1", "c2"]:
        meta = LEVEL_META[lvl]
        cards_html += f'''    <div class="level-card">
      <div>
        <span class="badge">{meta["badge"]}</span>
        <h2>{html.escape(meta["title"])}</h2>
        <p>{html.escape(meta["desc"])}</p>
      </div>
      <a href="{lvl}/index.html" class="btn-open">Открыть Мануал Коммуникации {lvl.upper()} (10 Систем) &rarr;</a>
    </div>\n'''

    doc = f'''<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Мануалы Коммуникации Русский Язык (A1–C2) · COSYlanguages</title>
<meta name="description" content="Репертуар мануалов разговорной речи и коммуникации на русском языке для уровней CEFR A1, A2, B1, B2, C1 и C2.">
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
</head>
<body>

<nav id="cosy-nav" aria-label="Главная навигация"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="Навигация по разделам">
      <a class="sd-jump-link" href="../../index.html" style="font-weight:700;">&larr; Репертуар Мануалов COSY</a>
    </nav>
  </div>
</header>

<section class="hero-hub">
  <span style="background: rgba(255,255,255,0.15); padding: 5px 14px; border-radius: 99px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
    Книга 3 · Системы устной речи &amp; коммуникации
  </span>
  <h1>Мануалы Коммуникации Русский Язык</h1>
  <p>Освойте естественную устную речь на русском языке от уровня A1 до C2 благодаря модульным речевым блокам, картам диалогов, контрастам учебных и живых фраз и прагматическим стратегиям.</p>
</section>

<main class="hub-container">

  <div class="levels-grid">
{cards_html.rstrip()}
  </div>

</main>

<footer style="background: var(--brand-teal, #0c3f38); color: #c9d8d4; padding: 30px 24px; text-align: center; font-size: 13.5px;" aria-label="Подвал сайта">
  <div>&copy; 2026 COSYlanguages · Репертуар Мануалов Коммуникации Русский Язык</div>
</footer>

</body>
</html>'''
    return doc

# CSS Assets
CSS_CONTENT = '''/* COSYlanguages · Communication Manual Shared Stylesheet */
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --teal-900: #0c3f38;
  --teal-800: #0f5c50;
  --teal-700: #157c6c;
  --teal-600: #1c9483;
  --teal-500: #25a894;
  --teal-100: #e4f4f0;
  --teal-050: #f2faf8;

  --ink: #132321;
  --ink-soft: #3c5450;
  --paper: #faf8f3;
  --panel: #ffffff;
  --line: #e6e2d8;

  --why-bg: #fdf3d6;
  --why-line: #c99a1f;
  --why-ink: #7a5b0c;

  --mistake-bg: #fdf0f0;
  --mistake-line: #e55353;
  --mistake-ink: #9c1c1c;

  --mint-bg: #eaf6f1;
  --mint-line: #1c9483;
  --mint-ink: #0f5c50;

  --comm-start: #0e7490;
  --comm-continue: #4338ca;
  --comm-react: #be185d;
  --comm-ask: #c2410c;
  --comm-close: #4c1d95;

  --radius-s: 10px;
  --radius-m: 16px;
  --radius-l: 24px;
  --shadow-card: 0 2px 4px rgba(19,35,33,.03), 0 10px 28px -8px rgba(19,35,33,.12);
  --shadow-hover: 0 4px 8px rgba(19,35,33,.05), 0 16px 36px -8px rgba(19,35,33,.20);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: var(--font-body); line-height: 1.65; font-size: 16px; }
a { color: var(--teal-700); transition: color .15s ease; text-decoration: none; }
a:hover { color: var(--teal-900); }

.container { max-width: 980px; margin: 0 auto; padding: 0 24px; }

/* Page Head */
.page-head { padding: 36px 0 20px; }
.eyebrow { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--teal-700); background: var(--teal-100); padding: 6px 14px; border-radius: 99px; margin-bottom: 14px; }
.page-head h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(30px, 5vw, 44px); margin: 0 0 8px; color: var(--ink); line-height: 1.2; }
.page-head .subtitle { font-style: italic; color: var(--ink-soft); font-size: 18px; margin: 0; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 20px 0 0; opacity: .85; }

/* Callout Box & Components */
.box { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px 24px; margin: 24px 0; box-shadow: var(--shadow-card); }
.box.why { background: var(--why-bg); border-color: #f0db96; color: var(--why-ink); }
.box.why strong { color: #573e02; }

.notice-box { background: #e0f2fe; border-left: 4px solid #0284c7; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #0369a1; }
.notice-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }
.mindset-box { background: #f3e8ff; border-left: 4px solid #7e22ce; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #581c87; }
.mindset-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }
.memory-box { background: #fef3c7; border-left: 4px solid #d97706; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #92400e; }
.memory-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }
.connect-box { background: #ecfdf5; border-left: 4px solid #059669; padding: 18px 22px; border-radius: var(--radius-s); margin: 24px 0; color: #065f46; }
.connect-box h4 { margin: 0 0 6px; font-family: var(--font-display); font-size: 16px; }

/* Building Blocks & Chips */
.building-blocks { background: #f4f8f7; border: 1px solid #d2e5e1; border-radius: var(--radius-m); padding: 22px; margin: 24px 0; }
.building-blocks h3 { margin: 0 0 14px; font-family: var(--font-display); color: var(--teal-900); font-size: 18px; font-weight: 800; }
.chip-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.chip { display: inline-flex; align-items: center; padding: 8px 16px; background: #fff; border: 1px solid var(--line); border-radius: 99px; font-weight: 700; font-size: 14.5px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.chip.block-start { background: #e0f2fe; color: #0369a1; border-color: #7dd3fc; }
.chip.block-continue { background: #e0e7ff; color: #3730a3; border-color: #a5b4fc; }
.chip.block-react { background: #fce7f3; color: #9d174d; border-color: #fbcfe8; }
.chip.block-ask { background: #ffedd5; color: #9a3412; border-color: #fed7aa; }
.chip.block-close { background: #f3e8ff; color: #581c87; border-color: #e9d5ff; }

/* Conversation Maps */
.conversation-map { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 22px; margin: 24px 0; box-shadow: var(--shadow-card); }
.conversation-map h3 { margin: 0 0 16px; font-family: var(--font-display); color: var(--teal-900); font-size: 18px; font-weight: 800; }
.map-step { display: flex; gap: 14px; margin-bottom: 12px; align-items: flex-start; }
.map-step:last-child { margin-bottom: 0; }
.step-num { width: 28px; height: 28px; border-radius: 50%; background: var(--teal-700); color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-weight: 800; font-size: 13px; flex-shrink: 0; margin-top: 2px; }
.step-text { background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-s); padding: 10px 14px; flex-grow: 1; font-size: 15px; }

/* Dialogue Box */
.dialogue-box { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 18px 22px; border-radius: 0 var(--radius-s) var(--radius-s) 0; margin: 24px 0; }
.dialogue-box h3 { margin: 0 0 12px; font-family: var(--font-display); font-size: 17px; color: var(--mint-ink); }
.dialogue-box .line { margin-bottom: 8px; font-size: 15.5px; }
.dialogue-box .line strong { color: var(--mint-ink); font-family: var(--font-mono); }

/* Natural Speech Addon */
.natural-speech { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.natural-speech h3 { margin: 0 0 14px; font-family: var(--font-display); color: #166534; font-size: 17px; }
.speech-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media(max-width: 600px){ .speech-compare { grid-template-columns: 1fr; } }
.stiff-card { background: #fef2f2; border: 1px solid #fecaca; border-radius: var(--radius-s); padding: 12px 16px; color: #991b1b; }
.natural-card { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-s); padding: 12px 16px; color: #1e40af; }

/* Celebration */
.celebration-box { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #f59e0b; border-radius: var(--radius-m); padding: 18px 22px; margin: 24px 0; color: #78350f; text-align: center; font-weight: 700; font-size: 16px; }

/* Checklist & Quiz */
.checklist { background: var(--mint-bg); border: 1px solid #b8e2d4; border-radius: var(--radius-m); padding: 20px 22px; margin: 28px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); font-size: 15.5px; color: var(--mint-ink); font-weight: 800; }
.check-item { display: flex; align-items: center; gap: 12px; padding: 8px 0; font-size: 15.5px; cursor: pointer; }
.check-item input { width: 18px; height: 18px; accent-color: var(--teal-700); }
.check-item.done span { text-decoration: line-through; opacity: .8; }
.check-progress { font-family: var(--font-mono); font-size: 12px; color: var(--mint-ink); font-weight: 600; margin-top: 12px; }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 28px; margin: 36px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
.quiz-head h2 { font-family: var(--font-display); font-size: 22px; font-weight: 800; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13.5px; background: var(--teal-100); color: var(--teal-800); padding: 6px 14px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 20px 0; }
.qitem:first-of-type { border-top: none; }
.qtext { font-family: var(--font-display); font-weight: 800; font-size: 16.5px; margin-bottom: 14px; }
.qopts { display: flex; flex-direction: column; gap: 10px; }
.qopt { text-align: left; border: 1.5px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 12px 16px; font-size: 15.5px; cursor: pointer; color: var(--ink); }
.qopt:hover { border-color: var(--teal-500); }
.qopt.correct { border-color: #1c8f56; background: #e6f6ec; font-weight: 700; }
.qopt.incorrect { border-color: var(--mistake-line); background: var(--mistake-bg); }
.qexplain { display: none; margin-top: 12px; font-size: 14.5px; background: var(--teal-050); border-left: 4px solid var(--teal-600); padding: 12px 16px; border-radius: 8px; }
.qexplain.show { display: block; }
.quiz-reset { margin-top: 18px; background: none; border: 1.5px solid var(--ink); color: var(--ink); font-family: var(--font-mono); font-size: 12px; font-weight: 700; padding: 99px; cursor: pointer; }

/* Grid Cards & Hero */
.hero { background: var(--teal-900); color: #eafaf5; padding: 64px 0 56px; }
.hero-kicker { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .1em; text-transform: uppercase; color: #8fd6c4; font-weight: 600; }
.hero h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(34px, 6vw, 54px); margin: 14px 0 12px; line-height: 1.18; }
.hero p.lead { max-width: 580px; color: #cdeee5; font-size: 18px; line-height: 1.6; }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 32px 0 12px; }
.part-card { display: block; text-decoration: none; color: var(--ink); background: var(--panel); border-radius: var(--radius-l); padding: 24px 24px 22px; border: 1px solid var(--line); box-shadow: var(--shadow-card); position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s; }
.part-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); border-color: var(--teal-600); }
.part-card .pnum { font-family: var(--font-mono); font-size: 12px; color: var(--teal-700); font-weight: 700; }
.part-card h2 { font-family: var(--font-display); font-weight: 800; font-size: 22px; margin: 6px 0 8px; }
.part-card p { margin: 0 0 16px; color: var(--ink-soft); font-size: 15px; }
.part-card .stripe { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 44px 0 12px; flex-wrap: wrap; }
.pager a { flex: 1; min-width: 220px; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 16px 20px; text-decoration: none; color: var(--ink); background: var(--panel); box-shadow: var(--shadow-card); }
.pager a .dir { display: block; font-family: var(--font-mono); font-size: 11px; color: var(--teal-700); text-transform: uppercase; font-weight: 700; }
.pager a .ttl { display: block; font-family: var(--font-display); font-weight: 800; font-size: 16.5px; margin-top: 4px; }
.pager a.next { text-align: right; }

footer.site { background: var(--ink); color: #c9d8d4; padding: 36px 0; margin-top: 64px; font-size: 14px; }
footer.site a { color: #eafaf5; }
footer.site .container { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
'''

# JS Assets
JS_CONTENT = '''// COSYlanguages Communication Manual Shared JS (Russian TTS)
(function(){
 "use strict";
 function initTTS(){
   if(!('speechSynthesis' in window)) return;
   document.querySelectorAll('.chip, .step-text').forEach(function(el){
     if(el.querySelector('.tts-btn')) return;
     var btn = document.createElement('button');
     btn.className = 'tts-btn';
     btn.style.marginLeft = '8px';
     btn.style.background = 'none';
     btn.style.border = 'none';
     btn.style.cursor = 'pointer';
     btn.innerHTML = '🔊';
     btn.addEventListener('click', function(e){
       e.stopPropagation();
       var utterance = new SpeechSynthesisUtterance(el.textContent.replace('🔊','').trim());
       utterance.lang = 'ru-RU';
       window.speechSynthesis.cancel();
       window.speechSynthesis.speak(utterance);
     });
     el.appendChild(btn);
   });
 }
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-ru-comm-check-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     function updateProgress(){
       var done = box.querySelectorAll('.check-item.done').length;
       var prog = box.querySelector('.check-progress');
       if(prog) prog.textContent = done + ' / ' + items.length + ' компетенций подтверждено';
     }
     items.forEach(function(item, i){
       var input = item.querySelector('input');
       if(stored[i]){ item.classList.add('done'); input.checked = true; }
       item.addEventListener('click', function(e){
         if(e.target !== input){ input.checked = !input.checked; }
         item.classList.toggle('done', input.checked);
         stored[i] = input.checked;
         localStorage.setItem(key, JSON.stringify(stored));
         updateProgress();
       });
     });
     updateProgress();
   });
 }
 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;
     panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
       var opts = qEl.querySelectorAll('.qopt');
       var explain = qEl.querySelector('.qexplain');
       var qLocked = false;
       opts.forEach(function(optEl, oi){
         optEl.addEventListener('click', function(){
           if(qLocked) return;
           qLocked = true;
           var correctIdx = data[qi].correct;
           opts.forEach(function(o, idx){
             o.disabled = true;
             if(idx === correctIdx) o.classList.add('correct');
             else if(idx === oi) o.classList.add('incorrect');
           });
           if(oi === correctIdx) score++;
           if(scoreEl) scoreEl.textContent = 'Счет : ' + score + ' / ' + data.length;
           if(explain) explain.classList.add('show');
         });
       });
     });
     var resetBtn = panel.querySelector('.quiz-reset');
     if(resetBtn) resetBtn.addEventListener('click', function(){ location.reload(); });
   });
 }
 document.addEventListener('DOMContentLoaded', function(){
   initTTS(); initChecklists(); initQuizzes();
 });
})();
'''

def main():
    print("Building Russian Communication Manuals...")

    # 1. Top-level index
    os.makedirs(BASE_DIR, exist_ok=True)
    master_index_path = os.path.join(BASE_DIR, "index.html")
    with open(master_index_path, "w", encoding="utf-8") as f:
        f.write(generate_master_index_html())
    print(f"Generated {master_index_path}")

    # 2. Build for each level
    for lvl in ["a1", "a2", "b1", "b2", "c1", "c2"]:
        lvl_dir = os.path.join(BASE_DIR, lvl)
        topics_dir = os.path.join(lvl_dir, "topics")
        assets_dir = os.path.join(lvl_dir, "assets")
        os.makedirs(topics_dir, exist_ok=True)
        os.makedirs(assets_dir, exist_ok=True)

        # Write assets
        with open(os.path.join(assets_dir, "style.css"), "w", encoding="utf-8") as f:
            f.write(CSS_CONTENT)
        with open(os.path.join(assets_dir, "app.js"), "w", encoding="utf-8") as f:
            f.write(JS_CONTENT)

        topics = get_level_topics(lvl)
        total_topics = len(topics)

        # Level index
        lvl_index_path = os.path.join(lvl_dir, "index.html")
        with open(lvl_index_path, "w", encoding="utf-8") as f:
            f.write(generate_level_index_html(lvl, topics))

        # Part hubs and Topic pages
        for topic in topics:
            p_num = topic["part"]
            part_path = os.path.join(lvl_dir, f"part-{p_num}.html")
            with open(part_path, "w", encoding="utf-8") as f:
                f.write(generate_part_html(lvl, topic, total_topics))

            topic_path = os.path.join(topics_dir, f"{topic['slug']}.html")
            with open(topic_path, "w", encoding="utf-8") as f:
                f.write(generate_topic_html(lvl, topic, total_topics))

        print(f"Generated level {lvl.upper()}: {total_topics} topics, {total_topics} parts, assets, and index.")

    print("All Russian Communication Manuals built successfully!")

if __name__ == "__main__":
    main()

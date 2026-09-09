import json, os

with open('data/ru_grammar_topics_map.json', 'r', encoding='utf-8') as f:
    topics_map = json.load(f)

level_names = {
    "A1": ("А0–А1", "Начальный уровень", "От базовой фонетики и кириллицы до разговорных фраз и простых предложений."),
    "A2": ("А2", "Элементарный уровень", "Прошедшее и будущее время, виды глагола, склонение прилагательных и глаголы движения."),
    "B1": ("B1", "Пороговый уровень", "Причастия, деепричастия, склонение числительных, сложные союзы и падежное управление."),
    "B2": ("B2", "Продвинутый уровень", "Сложный синтаксис, гипотетические условия, официальный стиль, номинализация и эллипсис."),
    "C1": ("C1", "Уровень профессионального владения", "Академический дискурс, риторическая инверсия, эвфемизмы и ораторский синтаксис."),
    "C2": ("C2", "Уровень совершенного владения", "Высший книжный регистр, публицистическая инверсия, юридическая точность и полный синтаксический синтез.")
}

# 1. Build level index pages
for level in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']:
    lvl_code = level.lower()
    cefr_tag, lvl_title_ru, lvl_desc_ru = level_names[level]
    topics = topics_map[level]

    topic_cards_html = ""
    for idx, (slug, title, desc) in enumerate(topics, 1):
        topic_cards_html += f""" <a class="part-card" href="topics/{slug}.html">
 <div class="stripe" style="background:#25a894;"></div>
 <span class="pnum">Тема {idx}</span>
 <h2>{title}</h2>
 <p>{desc}</p>
 <span class="topics-count">Открыть тему &rarr;</span>
 </a>\n"""

    index_html = f"""<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Грамматика русского языка ({cefr_tag}) · COSYlanguages</title>
<link rel="stylesheet" href="../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../css/base.css">
<link rel="stylesheet" href="../../../../css/components.css">
<link rel="stylesheet" href="../../../../css/layout.css">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<nav id="cosy-nav"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="In-page section navigation">
      <a class="sd-jump-link" href="../index.html" style="font-weight: 700;">← Все уровни грамматики</a>
      <a class="sd-jump-link" href="../../../russkiy-a0-a1.html">Русский Хаб</a>
    </nav>
  </div>
</header>
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Уровень {cefr_tag}</span>
 <h1>Курс грамматики русского языка — {lvl_title_ru}</h1>
 <p class="lead">{lvl_desc_ru} Полный курс содержит {len(topics)} интерактивных разделов.</p>
 </div>
</section>
<main class="container">
 <div class="parts-grid">
{topic_cards_html} </div>
</main>
<footer>
 <div class="footer-inner">
 <div class="footer-col">
 <h4>Курсы</h4>
 <ul>
 <li><a href="../../../russkiy-a0-a1.html">Русский Экосистемный Хаб</a></li>
 <li><a href="../index.html">Грамматика русского языка</a></li>
 </ul>
 </div>
 </div>
 <div class="footer-bottom">
 &copy; COSYlanguages · Курс грамматики русского языка ({cefr_tag})
 </div>
</footer>
<script src="assets/app.js"></script>
</body>
</html>"""

    filepath = f"manuals/ru/grammar/{lvl_code}/index.html"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(index_html)
    print(f"Generated {filepath}")

# 2. Build top-level manuals/ru/grammar/index.html
master_level_cards = ""
colors = ["#25a894", "#2563eb", "#0d9488", "#d97706", "#7c3aed", "#dc2626"]
for i, level in enumerate(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']):
    lvl_code = level.lower()
    cefr_tag, lvl_title_ru, lvl_desc_ru = level_names[level]
    topic_cnt = len(topics_map[level])
    color = colors[i]

    master_level_cards += f""" <a class="part-card" href="{lvl_code}/index.html">
 <div class="stripe" style="background:{color};"></div>
 <span class="pnum">Уровень {cefr_tag}</span>
 <h2>Грамматика Русский язык {cefr_tag}</h2>
 <p>{lvl_desc_ru}</p>
 <span class="topics-count">Открыть уровень ({topic_cnt} тем) &rarr;</span>
 </a>\n"""

master_index_html = f"""<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Грамматика русского языка · COSYlanguages</title>
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="a1/assets/style.css">
</head>
<body>
<nav id="cosy-nav"></nav>

<!-- Sticky Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="In-page section navigation">
      <a class="sd-jump-link" href="../../russkiy-a0-a1.html" style="font-weight: 700;">← Русский Хаб</a>
      <a class="sd-jump-link" href="../../index.html">Все учебники</a>
    </nav>
  </div>
</header>
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Учебники грамматики</span>
 <h1>Интерактивная грамматика русского языка</h1>
 <p class="lead">Выберите нужный уровень CEFR от начального А1 до профессионального C2.</p>
 </div>
</section>
<main class="container">
 <div class="parts-grid">
{master_level_cards} </div>
</main>
<footer>
 <div class="footer-inner">
 <div class="footer-col">
 <h4>Курсы</h4>
 <ul>
 <li><a href="../../russkiy-a0-a1.html">Русский Хаб A0–A1</a></li>
 <li><a href="../../russkiy-a2.html">Русский Хаб A2</a></li>
 </ul>
 </div>
 </div>
 <div class="footer-bottom">
 &copy; COSYlanguages · Учебник грамматики русского языка
 </div>
</footer>
</body>
</html>"""

with open("manuals/ru/grammar/index.html", 'w', encoding='utf-8') as f:
    f.write(master_index_html)
print("Generated manuals/ru/grammar/index.html")

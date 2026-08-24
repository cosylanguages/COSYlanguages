import os, json

def get_vocab_cards_html(vocab_list):
    cards = []
    for v in vocab_list:
        word = v['word']
        phonetic = v.get('phonetic', '')
        pos = v.get('pos', 'n.')
        definition = v['definition']
        example = v['example']
        antonym = v.get('antonym', '')

        ant_text = f" ≠ {antonym}" if antonym else ""
        clean_word = word.replace("'", "\\'")
        clean_def = definition.replace("'", "\\'")
        clean_ex = example.replace("'", "\\'")

        cards.append(f'''<div class="vocab-card"><div class="vocab-word">{word}{ant_text}</div>
<div class="vocab-def">{definition}</div>
<div class="vocab-example">{example}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{clean_word}', definition:'{clean_def}', example:'{clean_ex}'}}, this)">Add to Dictionary</button>
</div>''')
    return '\n'.join(cards)

def get_units_html(unit_list):
    items = []
    for u in unit_list:
        items.append(f'''<div class="round-item"><div class="round-item-main">{u['main']}</div>
<div class="round-item-personal">★ {u['personal']}</div>
</div>''')
    return '\n'.join(items)

def render_session_html(club_type, title, cefr_label, topic_summary, feature_box_title, feature_box_content, vocab_list, r1_units, r2_units, grammar_title, grammar_body, extra_action_html, article_url, filepath, rel_root="../../../../../"):
    vocab_html = get_vocab_cards_html(vocab_list)
    r1_html = get_units_html(r1_units)
    r2_html = get_units_html(r2_units)

    club_info = {
        'kus': ('Keeping Up with Science', '../../keeping-up-with-science.html', '🔬', 'theme-science-light', 'Science Club', '#1A7A4A'),
        'celebrate': ("Let's Celebrate", '../../lets-celebrate.html', '🕊️', 'theme-celebrate-light', 'Celebrate Club', '#D97706'),
        'quotes': ('The Greatest Quotes', '../../the-greatest-quotes.html', '☕', 'theme-quotes-light', 'Quotes Club', '#4B5563'),
        'debate': ('Debatable & Relatable', '../../debatable-relatable.html', '🔥', 'theme-debate-light', 'Debate Club', '#993C1D'),
        'life': ('My Life With & My Life Without', '../../my-life-with-without.html', '⚖️', 'theme-life-light', 'Life Club', '#2563EB'),
        'mind': ('Mind Matters', '../../mind-matters.html', '🧠', 'theme-mind-light', 'Mind Matters', '#7C3AED'),
        'wonder': ("I Couldn't Help But Wonder", '../../i-couldnt-help-but-wonder.html', '📰', 'theme-wonder-time', "I Couldn't Help But Wonder", '#3F2B96')
    }

    c_title, c_hub_url, c_icon, c_theme, c_bread_tag, c_color = club_info[club_type]

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>{title} : COSYlanguages</title>
<link href="../../../../../../images/logos/cosylanguages.png" rel="icon"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&amp;family=DM+Sans:wght@300;400;500&amp;family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&amp;display=swap" rel="stylesheet"/>
<link href="../../../../../../css/tokens.css" rel="stylesheet"/>
<link href="../../../../../../css/base.css" rel="stylesheet"/>
<link href="../../../../../../css/components.css" rel="stylesheet"/>
<link href="../../../../../../css/layout.css" rel="stylesheet"/>
<link href="../../../../../../css/events.css" rel="stylesheet"/>
  <link href="../../style.css" rel="stylesheet"/>
</head>
<body class="{c_theme}">
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: linear-gradient(135deg, {c_color}, #1F104D);">
<div class="club-tag">{c_title}</div>
<div class="session-decorator-icon">{c_icon}</div>
<h1>{title}</h1>
<p class="session-date">Cosy Speaking Club</p>
</header>
<main class="content-container">
<nav class="cosy-breadcrumbs">
<a href="../../../../../../">Home</a> <span class="sep">/</span>
<a href="../../../../../../events/index.html">Events</a> <span class="sep">/</span>
<a href="{c_hub_url}">{c_bread_tag}</a> <span class="sep">/</span>
<span class="current">{title}</span>
</nav>
<a class="back-link" href="{c_hub_url}">← Back to Club</a>
<div class="session-meta-grid">
<div class="meta-item"><h4>Duration</h4><p>60 minutes</p></div>
<div class="meta-item"><h4>Languages</h4><p>🇬🇧 English</p></div>
<div class="meta-item"><h4>Level</h4><p>{cefr_label}</p></div>
<div class="meta-item"><h4>Format</h4><p>Interactive Discussion</p></div>
</div>

<div class="cosy-perspective-panel" style="background: var(--cream-dark, #F5F1EA); border: 2px solid var(--border, #E2D9C8); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem;">
<h3 style="font-family: 'Playfair Display', serif; font-size: 1.25rem; margin-top: 0; margin-bottom: 0.75rem; color: {c_color};">{feature_box_title}</h3>
<div style="font-size: 0.95rem; line-height: 1.6; color: var(--ink-soft);">{feature_box_content}</div>
</div>

<section id="vocabulary">
<h2 class="section-title">📖 Session Vocabulary</h2>
<div class="vocab-grid-10">
{vocab_html}
</div>
</section>

<section id="structure">
<h2 class="section-title">🎙️ Discussion Structure</h2>
<div class="rounds-container">
<div class="round-block warm-up open" id="s-warm">
<div class="round-header" onclick="COSY.toggleRound('s-warm')" style="background:#FAEEE8;">
<span>🟠 Warm-up (10 mins)</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block;">
<p style="margin:0; line-height:1.6; font-size:0.95rem; color:var(--ink);">Welcome! Share your initial thoughts on this topic. What personal experiences or observations come to mind right away?</p>
</div>
</div>

<div class="round-block grammar open" id="s-grammar">
<div class="round-header" onclick="COSY.toggleRound('s-grammar')" style="background:#EEEDFE; border-left: 5px solid {c_color};">
<span>⚡ Grammar Practice : {grammar_title}</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding:1.5rem;">
<div style="font-size:0.95rem; line-height:1.6; color:var(--ink-soft);">{grammar_body}</div>
</div>
</div>

<div class="round-block round-1 open" id="s-r1">
<div class="round-header" onclick="COSY.toggleRound('s-r1')" style="background:#E1F5EE;">
<span>🔵 Round 1: Core Exploration (Units 1–5)</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block;">
{r1_html}
</div>
</div>

<div class="round-block round-2 open" id="s-r2">
<div class="round-header" onclick="COSY.toggleRound('s-r2')" style="background:#EAF3DE;">
<span>🟢 Round 2: Deep Speculation &amp; Future Horizon (Units 6–10)</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block;">
{r2_html}
</div>
</div>

</div>
</section>
</main>

<footer>
<div class="footer-inner">
<div class="footer-brand">
<div class="fb-logo">
<img alt="COSYlanguages logo" src="../../../../../../images/logos/cosylanguages.png"/>
<span class="fb-name">COSYlanguages</span>
</div>
<p data-translate-key="footer_fb_p">Your friendly corner to master new languages and connect with the world. 🌍</p>
</div>
<div class="footer-links-col">
<h5 data-translate-key="footer_h5_courses">Courses</h5>
<a data-translate-key="course_general" href="../../../../../../apps/premium-courses/general/">General Course 📖</a>
<a data-translate-key="course_spoken" href="../../../../../../apps/premium-courses/spoken/">Spoken Course 🗣️</a>
<a data-translate-key="course_exam" href="../../../../../../apps/premium-courses/exam/">Exam Preparation 📝</a>
<a data-translate-key="course_travelling" href="../../../../../../apps/premium-courses/travelling/">Travelling Course ✈️</a>
<a data-translate-key="course_professional" href="../../../../../../apps/premium-courses/professional/">Professional Course 💼</a>
<a data-translate-key="course_relocation" href="../../../../../../apps/premium-courses/relocation/">Relocation Course 🏡</a>
</div>
<div class="footer-links-col">
<h5 data-translate-key="footer_h5_explore">Explore</h5>
<a data-translate-key="nav_languages" href="../../../../../../#languages">Languages 🌍</a>
<a data-translate-key="nav_practice" href="../../../../../../practice/index.html">Free Practice 💡</a>
<a data-translate-key="nav_events" href="../../../../../../events/index.html">Events 🎉</a>
<a data-translate-key="nav_games" href="../../../../../../games/index.html">Games 🎮</a>
</div>
<div class="footer-links-col">
<h5>Project</h5>
<a href="../../../../../../privacy.html">Privacy &amp; Safety 🛡️</a>
</div>
<div class="footer-links-col">
<h5 data-translate-key="footer_h5_contact">Contact</h5>
<a href="https://wa.me/330766784195">WhatsApp 📱</a>
<a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>
<a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>
</div>
</div>
<div class="footer-bottom" data-translate-key="footer_copy">© 2026 COSYlanguages : All rights reserved</div>
</footer>
<script src="../../../../../../js/core/engine.js"></script>
<script src="../../../../../../js/core/ui.js"></script>
</body>
</html>'''

    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {filepath}")

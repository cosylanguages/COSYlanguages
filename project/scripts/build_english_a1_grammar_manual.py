#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Grammar Manual (Level A0–A1) Interactive Web Edition.
Generates manuals/en/grammar/a1/index.html, 11 section hub HTML pages (part-1.html .. part-11.html),
assets (style.css, app.js), and 11 topic HTML pages in manuals/en/grammar/a1/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/grammar/a1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level A0-A1 Grammar Manual Stylesheet */
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

a { color: var(--teal-700); text-decoration: none; transition: color .2s ease; }
a:hover { color: var(--teal-900); }

.topbar { background: var(--teal-900); color: #fff; padding: 12px 20px; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 8px rgba(0,0,0,.15); }
.topbar-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; }
.brand-mark { background: var(--teal-500); color: var(--teal-900); padding: 2px 8px; border-radius: 6px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.topbar-nav { display: flex; gap: 14px; font-size: 0.9rem; flex-wrap: wrap; }
.topbar-nav a { color: rgba(255,255,255,.85); font-weight: 600; padding: 4px 8px; border-radius: 6px; }
.topbar-nav a:hover, .topbar-nav a.active { color: #fff; background: rgba(255,255,255,.15); }

.hero { background: linear-gradient(135deg, var(--teal-900) 0%, var(--teal-800) 100%); color: #fff; padding: 60px 20px; text-align: center; }
.hero-kicker { font-family: var(--font-mono); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: var(--teal-500); margin-bottom: 12px; display: inline-block; font-weight: 600; }
.hero h1 { font-family: var(--font-display); font-size: 2.5rem; margin: 0 0 16px; font-weight: 900; line-height: 1.2; }
.hero p.lead { max-width: 700px; margin: 0 auto; font-size: 1.15rem; color: rgba(255,255,255,.9); line-height: 1.6; }

.container { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
.page-head { text-align: center; margin-bottom: 40px; }
.eyebrow { font-family: var(--font-mono); text-transform: uppercase; color: var(--teal-600); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.5px; }
.page-head h1 { font-family: var(--font-display); font-size: 2.2rem; color: var(--teal-900); margin: 8px 0 12px; font-weight: 800; }
.subtitle { color: var(--ink-soft); font-size: 1.1rem; max-width: 700px; margin: 0 auto; }
hr.rule { border: 0; height: 2px; background: var(--line); margin: 24px auto 0; max-width: 100px; }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.part-card { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 24px; position: relative; overflow: hidden; box-shadow: var(--shadow-card); transition: transform .2s ease, box-shadow .2s ease; display: flex; flex-direction: column; justify-content: space-between; }
.part-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); border-color: var(--teal-500); }
.part-card .stripe { position: absolute; top: 0; left: 0; right: 0; height: 6px; }
.part-card .pnum { font-family: var(--font-mono); font-size: 0.8rem; font-weight: 600; color: var(--teal-600); text-transform: uppercase; margin-bottom: 8px; display: block; }
.part-card h2 { font-family: var(--font-display); font-size: 1.3rem; margin: 0 0 10px; color: var(--ink); font-weight: 800; }
.part-card p { font-size: 0.95rem; color: var(--ink-soft); margin: 0 0 18px; line-height: 1.5; flex-grow: 1; }
.part-card .topics-count { font-size: 0.85rem; font-weight: 700; color: var(--teal-700); display: flex; align-items: center; gap: 4px; }

.content-block { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 28px; margin-bottom: 32px; box-shadow: var(--shadow-card); }
.content-block h2 { font-family: var(--font-display); font-size: 1.4rem; color: var(--teal-900); margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--teal-100); padding-bottom: 8px; }
.content-block h3 { font-family: var(--font-display); font-size: 1.15rem; color: var(--teal-800); margin: 20px 0 10px; }

.dialogue-box { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 18px 20px; border-radius: 0 var(--radius-s) var(--radius-s) 0; margin: 16px 0; }
.dialogue-box .line { margin-bottom: 8px; font-size: 0.95rem; }
.dialogue-box .line strong { color: var(--mint-ink); font-family: var(--font-mono); }

.frame-box { background: var(--why-bg); border-left: 4px solid var(--why-line); padding: 18px 20px; border-radius: 0 var(--radius-s) var(--radius-s) 0; margin: 16px 0; color: var(--why-ink); }
.frame-box ul { margin: 8px 0 0; padding-left: 20px; }

.quiz-panel { background: var(--panel); border: 2px dashed var(--teal-500); border-radius: var(--radius-m); padding: 24px; margin: 24px 0; }
.quiz-option { display: block; width: 100%; text-align: left; padding: 10px 16px; margin: 8px 0; border: 1px solid var(--line); border-radius: var(--radius-s); background: #fff; cursor: pointer; font-weight: 600; font-family: var(--font-body); transition: all .2s; }
.quiz-option:hover { background: var(--teal-100); border-color: var(--teal-500); }

.pager { display: flex; justify-content: space-between; gap: 16px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); }
.pager a { display: flex; flex-direction: column; padding: 12px 18px; border: 1px solid var(--line); border-radius: var(--radius-s); background: var(--panel); max-width: 45%; }
.pager a:hover { border-color: var(--teal-500); background: var(--teal-050); }
.pager .dir { font-size: 0.8rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--teal-600); }
.pager .ttl { font-weight: 700; color: var(--ink); margin-top: 4px; }

footer { background: var(--teal-900); color: rgba(255,255,255,.8); padding: 40px 20px 20px; margin-top: 60px; font-size: 0.9rem; }
.footer-inner { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.footer-col h4 { color: #fff; font-family: var(--font-display); margin-top: 0; }
.footer-col ul { list-style: none; padding: 0; margin: 0; }
.footer-col ul li { margin-bottom: 8px; }
.footer-col ul a { color: rgba(255,255,255,.7); }
.footer-col ul a:hover { color: #fff; }
.footer-bottom { max-width: 1000px; margin: 30px auto 0; text-align: center; border-top: 1px solid rgba(255,255,255,.1); padding-top: 20px; font-size: 0.8rem; }
"""

APP_JS = """// COSYlanguages A0-A1 Grammar Interactive App JS
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const isCorrect = btn.dataset.correct === 'true';
      const parent = btn.closest('.quiz-panel');
      parent.querySelectorAll('.quiz-option').forEach(b => {
        b.style.pointerEvents = 'none';
        if (b.dataset.correct === 'true') {
          b.style.background = '#eaf6f1';
          b.style.borderColor = '#1c9483';
          b.style.color = '#0f5c50';
        } else {
          b.style.opacity = '0.6';
        }
      });
      if (!isCorrect) {
        btn.style.background = '#fdf0f0';
        btn.style.borderColor = '#e55353';
        btn.style.color = '#9c1c1c';
        btn.style.opacity = '1';
      }
    });
  });
});
"""

PARTS = [
    {
        "file": "part-1.html",
        "slug": "part-1-building-blocks",
        "stripe": "#25a894",
        "short_title": "Part 1",
        "eyebrow": "Part 1 · Grammar Knowledge Tree",
        "title": "Part 1 — The Building Blocks of English",
        "topic_title": "The Building Blocks of English",
        "subtitle": "Alphabet mechanics, capital letters, spelling, sounds, silent letters, stress, intonation, numbers & time.",
        "body_html": """
<div class="content-block">
  <h2>Unit 1: The English Alphabet & Mechanics</h2>
  <h3>1.1 Capital Letters vs. Small Letters</h3>
  <p>Rules: Always capitalize the pronoun <em>I</em>, proper names (<em>David, London</em>), days (<em>Monday</em>), months (<em>May</em>), nationalities (<em>British</em>), and first words of sentences.</p>
  <h3>1.2 Pronunciation Mechanics & Silent Letters</h3>
  <p>Silent K (<em>know, knee</em>), Silent L (<em>listen, walk</em>), Silent W (<em>write, wrong</em>), Silent B (<em>climb, comb</em>).</p>
</div>
<div class="content-block">
  <h2>Unit 3: Numbers, Money, Dates & Time</h2>
  <p>Cardinal vs Ordinal numbers, telling the time (digital/analog), dictating email addresses and phone numbers.</p>
</div>
"""
    },
    {
        "file": "part-2.html",
        "slug": "part-2-nouns-possession",
        "stripe": "#157c6c",
        "short_title": "Part 2",
        "eyebrow": "Part 2 · Grammar Knowledge Tree",
        "title": "Part 2 — Nouns & Possession",
        "topic_title": "Nouns & Possession",
        "subtitle": "Common/proper nouns, singular vs plural rules, irregular plurals, countable/uncountable nouns & possessive 's.",
        "body_html": """
<div class="content-block">
  <h2>Units 4–10: Nouns & Possessives</h2>
  <p>Regular plurals (-s, -es, -ies, -ves) and irregular plurals (man/men, child/children). Uncountable container phrases (a glass of water, a loaf of bread).</p>
  <div class="frame-box">
    <strong>Possessive 's Rules:</strong>
    <ul>
      <li>Singular: John's car, my mother's house.</li>
      <li>Regular Plural: my parents' house, the students' books.</li>
      <li>Irregular Plural: the children's toys, men's clothes.</li>
    </ul>
  </div>
</div>
"""
    },
    {
        "file": "part-3.html",
        "slug": "part-3-articles-determiners",
        "stripe": "#0f5c50",
        "short_title": "Part 3",
        "eyebrow": "Part 3 · Grammar Knowledge Tree",
        "title": "Part 3 — Articles & Determiners",
        "topic_title": "Articles & Determiners",
        "subtitle": "Indefinite articles 'a'/'an', definite article 'the', zero article rules & master article choice flowchart.",
        "body_html": """
<div class="content-block">
  <h2>Units 11–15: Article System</h2>
  <p>Use <em>a</em> before consonant sounds (a car, a university); <em>an</em> before vowel sounds (an apple, an hour). Use <em>the</em> for specific items or second mention. Zero article for general plurals and uncountable nouns.</p>
</div>
"""
    },
    {
        "file": "part-4.html",
        "slug": "part-4-pronouns",
        "stripe": "#0c3f38",
        "short_title": "Part 4",
        "eyebrow": "Part 4 · Grammar Knowledge Tree",
        "title": "Part 4 — Pronouns",
        "topic_title": "Pronouns",
        "subtitle": "Subject pronouns, object pronouns, possessive adjectives/pronouns, reflexives, demonstratives & question words.",
        "body_html": """
<div class="content-block">
  <h2>Units 16–20: Pronoun Paradigms</h2>
  <p>Subject (I, you, he, she, it, we, they), Object (me, you, him, her, it, us, them), Possessive Adjectives (my, your...), Possessive Pronouns (mine, yours...), Demonstratives (this, that, these, those).</p>
</div>
"""
    },
    {
        "file": "part-5.html",
        "slug": "part-5-adjectives-comparisons",
        "stripe": "#25a894",
        "short_title": "Part 5",
        "eyebrow": "Part 5 · Grammar Knowledge Tree",
        "title": "Part 5 — Adjectives & Comparisons",
        "topic_title": "Adjectives & Comparisons",
        "subtitle": "Adjective ordering (OSASCOMP), comparative -er / more, superlative -est / most, and as...as equality.",
        "body_html": """
<div class="content-block">
  <h2>Units 21–22: Adjective Mechanics</h2>
  <p>OSASCOMP order: Opinion, Size, Age, Shape, Colour, Origin, Material. Comparatives (taller than, more expensive than) & Superlatives (the tallest, the most expensive).</p>
</div>
"""
    },
    {
        "file": "part-6.html",
        "slug": "part-6-adverbs",
        "stripe": "#157c6c",
        "short_title": "Part 6",
        "eyebrow": "Part 6 · Grammar Knowledge Tree",
        "title": "Part 6 — Adverbs",
        "topic_title": "Adverbs",
        "subtitle": "Adverbs of frequency, time, place, manner (-ly) & degree (very, really, quite).",
        "body_html": """
<div class="content-block">
  <h2>Unit 23: Adverb Systems</h2>
  <p>Frequency position: Before main verbs, AFTER verb 'to be' (I always wake up early. She is never late.). Manner adverbs: quick ➔ quickly, happy ➔ happily.</p>
</div>
"""
    },
    {
        "file": "part-7.html",
        "slug": "part-7-quantifiers",
        "stripe": "#0f5c50",
        "short_title": "Part 7",
        "eyebrow": "Part 7 · Grammar Knowledge Tree",
        "title": "Part 7 — Quantifiers",
        "topic_title": "Quantifiers",
        "subtitle": "Some vs any, much vs many, a lot of, a few vs a little, each, every & all.",
        "body_html": """
<div class="content-block">
  <h2>Unit 24: Quantifiers & Determiners</h2>
  <p>Some in affirmative sentences and polite offers/requests; Any in negative sentences and general questions. Much + uncountable; Many + countable plural.</p>
</div>
"""
    },
    {
        "file": "part-8.html",
        "slug": "part-8-prepositions",
        "stripe": "#0c3f38",
        "short_title": "Part 8",
        "eyebrow": "Part 8 · Grammar Knowledge Tree",
        "title": "Part 8 — Prepositions",
        "topic_title": "Prepositions",
        "subtitle": "Prepositions of time (at/on/in), place (in/on/at), spatial position & movement (to, into, out of, across).",
        "body_html": """
<div class="content-block">
  <h2>Unit 25: Preposition Systems</h2>
  <p>Time: AT 5 o'clock / ON Monday / IN May. Place: IN the room / ON the table / AT the bus stop.</p>
</div>
"""
    },
    {
        "file": "part-9.html",
        "slug": "part-9-verbs-modals",
        "stripe": "#25a894",
        "short_title": "Part 9",
        "eyebrow": "Part 9 · Grammar Knowledge Tree",
        "title": "Part 9 — Verb System & Modals",
        "topic_title": "Verb System & Modals",
        "subtitle": "Auxiliaries (Be, Have, Do), Can/Can't, Could, Must/Mustn't, Have to, Should & May/Might.",
        "body_html": """
<div class="content-block">
  <h2>Unit 26: Modals & Auxiliaries</h2>
  <p>Can (ability/permission), Must (obligation), Should (advice), Have to (external rule).</p>
</div>
"""
    },
    {
        "file": "part-10.html",
        "slug": "part-10-tense-system",
        "stripe": "#157c6c",
        "short_title": "Part 10",
        "eyebrow": "Part 10 · Grammar Knowledge Tree",
        "title": "Part 10 — Tense System",
        "topic_title": "Tense System",
        "subtitle": "Present Simple, Present Continuous, Past Simple (regular/irregular) & Future forms (Going to vs Will).",
        "body_html": """
<div class="content-block">
  <h2>Unit 27: The Core Tenses</h2>
  <p>Present Simple (habits/routines), Present Continuous (now/temporary), Past Simple (finished past actions with time markers), Be Going To (plans/predictions) vs Will (spontaneous decisions/offers).</p>
</div>
"""
    },
    {
        "file": "part-11.html",
        "slug": "part-11-questions-negation",
        "stripe": "#0f5c50",
        "short_title": "Part 11",
        "eyebrow": "Part 11 · Grammar Knowledge Tree",
        "title": "Part 11 — Questions & Negation",
        "topic_title": "Questions & Negation",
        "subtitle": "Yes/No questions, Wh- questions, question tags, imperatives, there is / there are, and have got.",
        "body_html": """
<div class="content-block">
  <h2>Unit 28: Questions, Imperatives & Stems</h2>
  <p>Wh- Question word order: Question Word + Auxiliary + Subject + Main Verb? (Where do you live?). Imperatives: Base verb (Sit down! Don't touch!). There is / There are stem structures.</p>
</div>
"""
    }
]

def render_topbar(is_topic=False):
    prefix = "../" if is_topic else ""
    return f"""<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{prefix}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Grammar A0–A1</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../manuals/english-a0-a1.html" style="font-weight: 700;">← English Hub</a>
 <a href="{prefix}part-1.html">Part 1</a>
 <a href="{prefix}part-2.html">Part 2</a>
 <a href="{prefix}part-3.html">Part 3</a>
 <a href="{prefix}part-4.html">Part 4</a>
 <a href="{prefix}part-5.html">Part 5</a>
 <a href="{prefix}part-6.html">Part 6</a>
 <a href="{prefix}part-7.html">Part 7</a>
 <a href="{prefix}part-8.html">Part 8</a>
 <a href="{prefix}part-9.html">Part 9</a>
 <a href="{prefix}part-10.html">Part 10</a>
 <a href="{prefix}part-11.html">Part 11</a>
 </nav>
 </div>
</header>"""

def render_footer():
    return """<footer>
 <div class="footer-inner">
 <div class="footer-col">
 <h4>Courses</h4>
 <ul>
 <li><a href="../../../../manuals/english-a0-a1.html">English Ecosystem</a></li>
 <li><a href="../../../../manuals/francaise-a0-a1.html">French Manuals</a></li>
 <li><a href="../../../../manuals/italiano-a0-a1.html">Italian Manuals</a></li>
 </ul>
 </div>
 <div class="footer-col">
 <h4>Explore</h4>
 <ul>
 <li><a href="../../../../practice/index.html">Practice Hub</a></li>
 <li><a href="../../../../comparative/index.html">Comparative Matrix</a></li>
 <li><a href="../../../../rosetta-wall/index.html">Rosetta Wall</a></li>
 </ul>
 </div>
 <div class="footer-col">
 <h4>Project</h4>
 <ul>
 <li><a href="../../../../manuals/index.html">All Manuals</a></li>
 <li><a href="../../../../hybrid/index.html">Beyond the Screen</a></li>
 </ul>
 </div>
 </div>
 <div class="footer-bottom">
 &copy; COSYlanguages · Level A0–A1 English Grammar Knowledge Tree Course
 </div>
</footer>"""

def build_all():
    print("Writing Grammar CSS and JS assets...")
    with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
        f.write(STYLE_CSS)

    with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
        f.write(APP_JS)

    for i, p in enumerate(PARTS):
        prev_p = PARTS[i - 1] if i > 0 else None
        next_p = PARTS[i + 1] if i < len(PARTS) - 1 else None

        pager_parts = []
        if prev_p:
            pager_parts.append(f'<a class="prev" href="../topics/{prev_p["slug"]}.html"><span class="dir">&larr; Previous</span><span class="ttl">{prev_p["title"]}</span></a>')
        else:
            pager_parts.append('<span class="prev empty"></span>')

        if next_p:
            pager_parts.append(f'<a class="next" href="../topics/{next_p["slug"]}.html"><span class="dir">Next &rarr;</span><span class="ttl">{next_p["title"]}</span></a>')
        else:
            pager_parts.append('<span class="next empty"></span>')

        pager_html = f'<div class="pager">{"".join(pager_parts)}</div>'

        topic_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["topic_title"]} · COSYlanguages A0–A1 Grammar</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
<div class="page-head">
 <span class="eyebrow">{p["eyebrow"]}</span>
 <h1>{p["topic_title"]}</h1>
 <p class="subtitle">{p["subtitle"]}</p>
 <hr class="rule">
</div>
{p["body_html"]}
{pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>"""
        with open(os.path.join(TOPICS_DIR, f"{p['slug']}.html"), "w", encoding="utf-8") as f:
            f.write(topic_html)

        part_hub_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages Level A0–A1</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
<div class="page-head">
 <span class="eyebrow">{p["eyebrow"]}</span>
 <h1>{p["title"]}</h1>
 <p class="subtitle">{p["subtitle"]}</p>
 <hr class="rule">
</div>
<div class="parts-grid">
 <a class="part-card" href="topics/{p['slug']}.html">
  <div class="stripe" style="background:{p['stripe']};"></div>
  <span class="pnum">{p['short_title']}</span>
  <h2>{p['topic_title']}</h2>
  <p>{p['subtitle']}</p>
  <span class="topics-count">Open Grammar Module &rarr;</span>
 </a>
</div>
</main>
{render_footer()}
</body>
</html>"""
        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_hub_html)

    grid_cards = []
    for p in PARTS:
        grid_cards.append(f"""<a class="part-card" href="{p['file']}">
 <div class="stripe" style="background:{p['stripe']};"></div>
 <span class="pnum">{p['short_title']}</span>
 <h2>{p['title']}</h2>
 <p>{p['subtitle']}</p>
 <span class="topics-count">Explore Part &rarr;</span>
</a>""")

    index_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Grammar Manual (Level A0–A1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A0–A1</span>
 <h1>English Grammar Knowledge Tree Course</h1>
 <p class="lead">From Alphabetic Mechanics to Sentence Systems. 11 structural parts, 28 complete units aligned with CEFR A0–A1 descriptors.</p>
 </div>
</section>
<main class="container">
 <div class="parts-grid">
 {"".join(grid_cards)}
 </div>
</main>
{render_footer()}
<script src="assets/app.js"></script>
</body>
</html>"""
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Successfully built Level A0–A1 English Grammar Manual!")

if __name__ == "__main__":
    build_all()

#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Communication Manual (Level A0–A1) Interactive Web Edition.
Generates manuals/en/communication/index.html, 11 section hub HTML pages (part-0.html .. part-10.html),
assets (style.css, app.js), and 11 topic HTML pages in manuals/en/communication/topics/.
"""

import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/communication"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Level A0-A1 Communication Manual Stylesheet */
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

  --mint-bg: #eaf6f1;
  --mint-line: #1c9483;
  --mint-ink: #0f5c50;

  --radius-s: 10px;
  --radius-m: 16px;
  --radius-l: 24px;
  --shadow-card: 0 2px 4px rgba(19,35,33,.03), 0 10px 28px -8px rgba(19,35,33,.12);

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

.dialogue-box { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 18px 20px; border-radius: 0 var(--radius-s) var(--radius-s) 0; margin: 16px 0; }
.dialogue-box .line { margin-bottom: 8px; font-size: 0.95rem; }
.dialogue-box .line strong { color: var(--mint-ink); font-family: var(--font-mono); }

.pager { display: flex; justify-content: space-between; gap: 16px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); }
.pager a { display: flex; flex-direction: column; padding: 12px 18px; border: 1px solid var(--line); border-radius: var(--radius-s); background: var(--panel); max-width: 45%; }
.pager a:hover { border-color: var(--teal-500); background: var(--teal-050); }

footer { background: var(--teal-900); color: rgba(255,255,255,.8); padding: 40px 20px 20px; margin-top: 60px; font-size: 0.9rem; }
.footer-inner { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.footer-col h4 { color: #fff; font-family: var(--font-display); margin-top: 0; }
.footer-col ul { list-style: none; padding: 0; margin: 0; }
.footer-col ul li { margin-bottom: 8px; }
.footer-col ul a { color: rgba(255,255,255,.7); }
.footer-col ul a:hover { color: #fff; }
.footer-bottom { max-width: 1000px; margin: 30px auto 0; text-align: center; border-top: 1px solid rgba(255,255,255,.1); padding-top: 20px; font-size: 0.8rem; }
"""

APP_JS = """// COSYlanguages A0-A1 Communication App JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('Communication manual loaded.');
});
"""

PARTS = [
    {
        "file": "part-0.html",
        "slug": "part-0-architecture",
        "stripe": "#25a894",
        "short_title": "Part 0",
        "eyebrow": "Part 0 · Conversation Architecture",
        "title": "Part 0 — Conversation Architecture",
        "topic_title": "Conversation Architecture",
        "subtitle": "How speech works: turns, floor management, active listening & pragmatic intent.",
        "body_html": """<div class="content-block"><h2>Conversation Systems</h2><p>Understanding turn-taking, active listening signals, and speaking frames.</p></div>"""
    },
    {
        "file": "part-1.html",
        "slug": "part-1-starting-ending",
        "stripe": "#157c6c",
        "short_title": "Part 1",
        "eyebrow": "Part 1 · Starting & Ending",
        "title": "Part 1 — Starting & Ending Conversations",
        "topic_title": "Starting & Ending Conversations",
        "subtitle": "Greetings, introductions, icebreakers, polite exits & farewells.",
        "body_html": """<div class="content-block"><h2>Openings & Closings</h2><p>Practical dialogue frames for starting and smoothly ending conversations in daily life.</p></div>"""
    },
    {
        "file": "part-2.html",
        "slug": "part-2-keeping-alive",
        "stripe": "#0f5c50",
        "short_title": "Part 2",
        "eyebrow": "Part 2 · Flow & Continuity",
        "title": "Part 2 — Keeping Conversations Alive",
        "topic_title": "Keeping Conversations Alive",
        "subtitle": "Follow-up questions, echoing, expanding answers & small talk bridges.",
        "body_html": """<div class="content-block"><h2>Maintaining Flow</h2><p>Using question tags, open-ended prompts, and echoing to keep dialogue moving naturally.</p></div>"""
    },
    {
        "file": "part-3.html",
        "slug": "part-3-feelings-reactions",
        "stripe": "#0c3f38",
        "short_title": "Part 3",
        "eyebrow": "Part 3 · Emotional Expressions",
        "title": "Part 3 — Showing Feelings & Reacting",
        "topic_title": "Showing Feelings & Reacting",
        "subtitle": "Expressing enthusiasm, empathy, surprise, sympathy & agreement.",
        "body_html": """<div class="content-block"><h2>Reactions & Empathy</h2><p>Natural interjections: Really? That's amazing! Oh no, I'm sorry to hear that.</p></div>"""
    },
    {
        "file": "part-4.html",
        "slug": "part-4-giving-opinions",
        "stripe": "#25a894",
        "short_title": "Part 4",
        "eyebrow": "Part 4 · Opinions & Preferences",
        "title": "Part 4 — Giving Opinions & Framing Views",
        "topic_title": "Giving Opinions & Framing Views",
        "subtitle": "I think..., In my view, I prefer..., Likes & dislikes.",
        "body_html": """<div class="content-block"><h2>Opinion Starters</h2><p>Structuring basic personal opinions and preferences clearly.</p></div>"""
    },
    {
        "file": "part-5.html",
        "slug": "part-5-agreeing",
        "stripe": "#157c6c",
        "short_title": "Part 5",
        "eyebrow": "Part 5 · Agreement Systems",
        "title": "Part 5 — Agreeing & Building Consensus",
        "topic_title": "Agreeing & Building Consensus",
        "subtitle": "I agree, Exactly, That's true, Me too / Neither do I.",
        "body_html": """<div class="content-block"><h2>Consensus & Alignment</h2><p>Aligning with conversational partners using positive reinforcement.</p></div>"""
    },
    {
        "file": "part-6.html",
        "slug": "part-6-disagreeing",
        "stripe": "#0f5c50",
        "short_title": "Part 6",
        "eyebrow": "Part 6 · Polite Disagreement",
        "title": "Part 6 — Disagreeing Politely",
        "topic_title": "Disagreeing Politely",
        "subtitle": "I see your point, but..., I'm not so sure, Actually...",
        "body_html": """<div class="content-block"><h2>Soft Disagreement</h2><p>Managing polite contrast without causing friction.</p></div>"""
    },
    {
        "file": "part-7.html",
        "slug": "part-7-explaining",
        "stripe": "#0c3f38",
        "short_title": "Part 7",
        "eyebrow": "Part 7 · Clarification & Causes",
        "title": "Part 7 — Explaining & Paraphrasing",
        "topic_title": "Explaining & Paraphrasing",
        "subtitle": "Because..., That means..., What I mean is...",
        "body_html": """<div class="content-block"><h2>Explaining Reasoning</h2><p>Using causal conjunctions and rephrasing to make yourself understood.</p></div>"""
    },
    {
        "file": "part-8.html",
        "slug": "part-8-clarifying",
        "stripe": "#25a894",
        "short_title": "Part 8",
        "eyebrow": "Part 8 · Repair Strategies",
        "title": "Part 8 — Clarifying & Repairing Breakdown",
        "topic_title": "Clarifying & Repairing Breakdown",
        "subtitle": "Could you repeat that? What does X mean? Sorry, I didn't catch that.",
        "body_html": """<div class="content-block"><h2>Communication Repair</h2><p>Repairing misunderstandings and asking for repetition confidently.</p></div>"""
    },
    {
        "file": "part-9.html",
        "slug": "part-9-managing-floor",
        "stripe": "#157c6c",
        "short_title": "Part 9",
        "eyebrow": "Part 9 · Floor Management",
        "title": "Part 9 — Managing the Floor & Turn-Taking",
        "topic_title": "Managing the Floor & Turn-Taking",
        "subtitle": "Can I add something? Let me see..., Holding turn & yielding turn.",
        "body_html": """<div class="content-block"><h2>Turn Management</h2><p>Holding the floor, hesitating naturally (Well..., Let me think), and passing turns.</p></div>"""
    },
    {
        "file": "part-10.html",
        "slug": "part-10-story-maps",
        "stripe": "#0f5c50",
        "short_title": "Part 10",
        "eyebrow": "Part 10 · Production Frames",
        "title": "Part 10 — Conversation & Story Maps",
        "topic_title": "Conversation & Story Maps",
        "subtitle": "Full dialogue flows, storytelling frames, transactional simulations & speaking production maps.",
        "body_html": """<div class="content-block"><h2>Speaking Production Maps</h2><p>Integrated multi-turn dialogue blueprints combining grammar, vocabulary, and floor strategies.</p></div>"""
    }
]

def render_topbar(is_topic=False):
    prefix = "../" if is_topic else ""
    return f"""<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{prefix}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Communication A0–A1</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../manuals/english-a0-a1.html" style="font-weight: 700;">← English Hub</a>
 <a href="{prefix}part-0.html">Part 0</a>
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
 &copy; COSYlanguages · Level A0–A1 English Communication Manual
 </div>
</footer>"""

def build_all():
    print("Writing Communication CSS and JS assets...")
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
<title>{p["topic_title"]} · COSYlanguages A0–A1 Communication</title>
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
  <span class="topics-count">Open Communication Module &rarr;</span>
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
<title>COSYlanguages English Communication Manual (Level A0–A1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A0–A1</span>
 <h1>English Communication Manual</h1>
 <p class="lead">From Phrases to Natural Dialogue. 11 conversation parts covering turn-taking, pragmatics, active listening & story maps.</p>
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

    print("Successfully built Level A0–A1 English Communication Manual!")

if __name__ == "__main__":
    build_all()

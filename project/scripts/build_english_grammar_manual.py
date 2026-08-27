#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Grammar Manual (A0-A1) Interactive Web Edition.
Generates grammar/index.html, 5 section hub HTML pages (part-1.html .. part-4.html, appendix.html),
assets (style.css, app.js), and 42 topic HTML pages in grammar/topics/.
"""

import os
import json
import re

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "grammar"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Part 1 · Nouns & Pronouns",
        "short_title": "Part 1",
        "subtitle": "Not new grammar · use this page to browse and revise before moving on.",
        "eyebrow": "Grammar map",
        "stripe": "#3562e0",
        "groups": [
            {
                "label": "Building sentences",
                "topics": ["word-order", "pronouns"]
            },
            {
                "label": "Being & existing",
                "topics": ["to-be", "there-is-are", "there-was-were"]
            },
            {
                "label": "Naming things",
                "topics": ["demonstratives", "articles", "plurals-regular", "plurals-irregular"]
            },
            {
                "label": "Owning things",
                "topics": ["possessive-s"]
            }
        ]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Part 2 · Verbs & Tenses",
        "short_title": "Part 2",
        "subtitle": "Not new grammar · use this page to browse and revise before moving on.",
        "eyebrow": "Grammar map",
        "stripe": "#1c8f56",
        "groups": [
            {
                "label": "Present",
                "topics": ["present-simple", "present-continuous", "simple-vs-continuous"]
            },
            {
                "label": "Ability & requests",
                "topics": ["have-got", "can-cant", "could-couldnt", "imperatives", "id-like"]
            },
            {
                "label": "Past",
                "topics": ["past-simple-be", "past-simple-regular", "past-simple-irregular"]
            },
            {
                "label": "Future",
                "topics": ["going-to", "will"]
            },
            {
                "label": "Preferences",
                "topics": ["like-love-hate"]
            }
        ]
    },
    {
        "id": "part-3",
        "file": "part-3.html",
        "title": "Part 3 · Describing Things",
        "short_title": "Part 3",
        "subtitle": "Not new grammar · use this page to browse and revise before moving on.",
        "eyebrow": "Grammar map",
        "stripe": "#c9740a",
        "groups": [
            {
                "label": "Adjectives grow",
                "topics": ["adjectives", "comparative-adjectives", "superlative-adjectives"]
            },
            {
                "label": "Modifying words",
                "topics": ["adverbs-manner", "adverbs-frequency", "intensifiers"]
            },
            {
                "label": "Talking about quantity",
                "topics": ["countable-uncountable", "some-vs-any", "much-many", "all-both-none"]
            }
        ]
    },
    {
        "id": "part-4",
        "file": "part-4.html",
        "title": "Part 4 · Connecting Words",
        "short_title": "Part 4",
        "subtitle": "Not new grammar · use this page to browse and revise before moving on.",
        "eyebrow": "Grammar map",
        "stripe": "#7c4fd6",
        "groups": [
            {
                "label": "Where & when",
                "topics": ["prepositions-place", "prepositions-time"]
            },
            {
                "label": "Connecting & asking",
                "topics": ["conjunctions", "question-words"]
            },
            {
                "label": "Practical reference",
                "topics": ["numbers-dates", "telling-time"]
            }
        ]
    },
    {
        "id": "appendix",
        "file": "appendix.html",
        "title": "Reference & Culture",
        "short_title": "Appendix",
        "subtitle": "Quick-reference flashcards and regional differences to dip into any time.",
        "eyebrow": "Appendix",
        "stripe": "#d99b00",
        "groups": [
            {
                "label": "",
                "topics": ["irregular-verbs", "english-around-world"]
            }
        ]
    }
]

# Ordered list of all 42 topics
ORDERED_TOPIC_SLUGS = [
    # Part 1
    "word-order", "pronouns", "to-be", "there-is-are", "there-was-were",
    "demonstratives", "articles", "plurals-regular", "plurals-irregular", "possessive-s",
    # Part 2
    "present-simple", "present-continuous", "simple-vs-continuous",
    "have-got", "can-cant", "could-couldnt", "imperatives", "id-like",
    "past-simple-be", "past-simple-regular", "past-simple-irregular",
    "going-to", "will", "like-love-hate",
    # Part 3
    "adjectives", "comparative-adjectives", "superlative-adjectives",
    "adverbs-manner", "adverbs-frequency", "intensifiers",
    "countable-uncountable", "some-vs-any", "much-many", "all-both-none",
    # Part 4
    "prepositions-place", "prepositions-time", "conjunctions", "question-words",
    "numbers-dates", "telling-time",
    # Appendix
    "irregular-verbs", "english-around-world"
]

def load_existing_topic(slug):
    fpath = os.path.join(TOPICS_DIR, f"{slug}.html")
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract page-head elements
    title_m = re.search(r'<h1>(.*?)</h1>', html, re.S)
    sub_m = re.search(r'<p class=\"subtitle\">(.*?)</p>', html, re.S)
    eye_m = re.search(r'<span class=\"eyebrow\">(.*?)</span>', html, re.S)

    # Extract body html between page-head and pager
    main_m = re.search(r'<main class=\"container\">(.*?)</main>', html, re.S)
    main_html = main_m.group(1) if main_m else html

    body_m = re.search(r'<hr class=\"rule\">\s*</div>(.*?)(?=<div class=\"pager\">|</main>)', main_html, re.S)
    body_html = body_m.group(1).strip() if body_m else ""

    return {
        "slug": slug,
        "title": title_m.group(1).strip() if title_m else slug,
        "subtitle": sub_m.group(1).strip() if sub_m else "",
        "eyebrow": eye_m.group(1).replace("&amp;middot;", "·").replace("&middot;", "·").strip() if eye_m else "",
        "body_html": body_html
    }

TOPICS_DICT = {slug: load_existing_topic(slug) for slug in ORDERED_TOPIC_SLUGS}

def get_prev_next(slug):
    if slug not in ORDERED_TOPIC_SLUGS:
        return None, None
    idx = ORDERED_TOPIC_SLUGS.index(slug)
    prev_slug = ORDERED_TOPIC_SLUGS[idx - 1] if idx > 0 else None
    next_slug = ORDERED_TOPIC_SLUGS[idx + 1] if idx < len(ORDERED_TOPIC_SLUGS) - 1 else None

    prev_topic = TOPICS_DICT[prev_slug] if prev_slug else None
    next_topic = TOPICS_DICT[next_slug] if next_slug else None
    return prev_topic, next_topic

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    nav_links = []

    # English Hub back-link (for topics, or index/parts)
    if is_topic:
        pass
    else:
        nav_links.append('<a href="../manuals/english-a0-a1.html" style="font-weight: 700;">← English Hub</a>')

    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else 'class=""'
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')

    nav_html = "\n ".join(nav_links)

    return f'''<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="{rel_prefix}index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Grammar A0&ndash;A1</span>
 </a>
 <nav class="topbar-nav">
 {nav_html}
 </nav>
 </div>
</header>'''

def render_footer(is_topic=False):
    return '''<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Grammar Manual, Level A0&ndash;A1 · interactive web edition</div>
 <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>'''

def build_all():
    print("Building English Grammar Manual...")

    # 1. Render all 42 topic pages
    for slug in ORDERED_TOPIC_SLUGS:
        top = TOPICS_DICT[slug]
        prev_top, next_top = get_prev_next(slug)

        # Pager HTML
        pager_parts = []
        if prev_top:
            pager_parts.append(f'<a class="prev" href="../topics/{prev_top["slug"]}.html"><span class="dir">&larr; Previous</span><span class="ttl">{prev_top["title"]}</span></a>')
        else:
            pager_parts.append('<span class="prev empty"></span>')

        if next_top:
            pager_parts.append(f'<a class="next" href="../topics/{next_top["slug"]}.html"><span class="dir">Next &rarr;</span><span class="ttl">{next_top["title"]}</span></a>')
        else:
            pager_parts.append('<span class="next empty"></span>')

        pager_html = f'<div class="pager">{"".join(pager_parts)}</div>'

        topbar_html = render_topbar(active_part_id=None, is_topic=True)
        footer_html = render_footer(is_topic=True)

        topic_page_code = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · COSYlanguages</title>
<meta name="description" content="{top["subtitle"]}">
<link rel="stylesheet" href="../assets/style.css">

</head>
<body>
{topbar_html}<main class="container"><div class="page-head">
 <span class="eyebrow">{top["eyebrow"]}</span>
 <h1>{top["title"]}</h1>
 <p class="subtitle">{top["subtitle"]}</p>
 <hr class="rule">
</div>
{top["body_html"]}{pager_html}</main>{footer_html}
<script src="../assets/app.js"></script>
</body>
</html>
'''
        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(topic_page_code)

    # 2. Render Part Pages (part-1.html .. part-4.html, appendix.html)
    for p in PARTS:
        topbar_html = render_topbar(active_part_id=p["id"], is_topic=False)
        footer_html = render_footer(is_topic=False)

        groups_html = []
        for g in p["groups"]:
            cards_html = []
            for slug in g["topics"]:
                top = TOPICS_DICT[slug]
                cards_html.append(f'''<a class="topic-card" href="topics/{slug}.html">
 <div class="tnum">{p["short_title"]}</div>
 <div class="ttl">{top["title"]}</div>
 <div class="sub">{top["subtitle"]}</div>
 </a>''')

            group_label = f'<span class="glabel">{g["label"]}</span>' if g["label"] else ''
            groups_html.append(f'<div class="map-group">{group_label}<div class="topic-grid">{"".join(cards_html)}</div></div>')

        part_body = "".join(groups_html)

        part_page_code = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages</title>
<meta name="description" content="Grammar map for {p["title"]}">
<link rel="stylesheet" href="assets/style.css">

</head>
<body>
{topbar_html}<main class="container topic-list-page"><div class="page-head">
 <span class="eyebrow">{p["eyebrow"]}</span>
 <h1>{p["title"]}</h1>
 <p class="subtitle">{p["subtitle"]}</p>

 <hr class="rule">
</div>{part_body}</main>{footer_html}
</body>
</html>
'''
        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_page_code)

    # 3. Render index.html
    topbar_html = render_topbar(active_part_id=None, is_topic=False)
    footer_html = render_footer(is_topic=False)

    parts_grid_cards = []
    for p in PARTS:
        # count topics in part
        count = sum(len(g["topics"]) for g in p["groups"])
        topic_plural = "topics" if count != 1 else "topic"
        parts_grid_cards.append(f'''<a class="part-card" href="{p["file"]}">
 <div class="stripe" style="background:{p["stripe"]};"></div>
 <h2>{p["title"]}</h2>
 <p>{p["subtitle"]}</p>
 <span class="count">{count} {topic_plural} &rarr;</span>
 </a>''')

    parts_grid_html = "".join(parts_grid_cards)

    index_code = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Grammar Manual (A0–A1) · COSYlanguages</title>
<meta name="description" content="Interactive edition of the COSYlanguages A0-A1 English grammar manual: 42 topics with diagrams, self-checks and quizzes.">
<link rel="stylesheet" href="assets/style.css">

</head>
<body>
{topbar_html}<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A0&ndash;A1</span>
 <h1>English Grammar,<br>built one block at a time.</h1>
 <p class="lead">An interactive companion to the COSYlanguages Grammar Manual · 42 topics, each with
 visuals, click-to-reveal mistakes, self-check lists and a quick quiz.</p>
 <div class="hero-builder">
 <div class="instruction">&#9998; TRY IT · TAP ONE WORD FROM EACH ROW TO BUILD A SENTENCE</div>
 <div id="sentence-builder">
 <div class="pool">
 <button data-role="subject" data-word="She" style="background:#3562e0;">She</button>
 <button data-role="subject" data-word="They" style="background:#3562e0;">They</button>
 <button data-role="subject" data-word="We" style="background:#3562e0;">We</button>
 </div>
 <div class="pool">
 <button data-role="verb" data-word="reads" style="background:#1c8f56;">reads</button>
 <button data-role="verb" data-word="play" style="background:#1c8f56;">play</button>
 <button data-role="verb" data-word="like" style="background:#1c8f56;">like</button>
 </div>
 <div class="pool">
 <button data-role="object" data-word="books" style="background:#c9740a;">books</button>
 <button data-role="object" data-word="football" style="background:#c9740a;">football</button>
 <button data-role="object" data-word="pizza" style="background:#c9740a;">pizza</button>
 </div>
 </div>
 <div id="builder-output" class="builder-output">Tap words above to construct a sentence...</div>
 </div>
 </div>
</section><main class="container">
 <div class="parts-grid">
 {parts_grid_html}
 </div>
</main>{footer_html}
<script src="assets/app.js"></script>
</body>
</html>
'''
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_code)

    print("Successfully built English Grammar Manual (index, 5 hubs, 42 topics)!")

if __name__ == "__main__":
    build_all()

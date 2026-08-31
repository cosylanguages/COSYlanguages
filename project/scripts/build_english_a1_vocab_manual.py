#!/usr/bin/env python3
"""
Generator script for COSYlanguages English Vocabulary Manual (Level A0–A1) Interactive Web Edition.
Generates manuals/en/vocabulary/a1/index.html, 10 section hub HTML pages (part-1.html .. part-10.html),
assets (style.css, app.js), 10 topic HTML pages in manuals/en/vocabulary/a1/topics/,
and sets up redirect stubs in vocabulary-manual/.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/en/vocabulary/a1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
LEGACY_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "vocabulary-manual"))

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)
os.makedirs(os.path.join(LEGACY_DIR, "topics"), exist_ok=True)

dict_path = os.path.join(os.path.dirname(__file__), 'a1_vocab_dict.json')
if os.path.exists(dict_path):
    with open(dict_path, 'r', encoding='utf-8') as f:
        dict_a1 = json.load(f)
else:
    dict_a1 = {}

def resolve_card(term):
    key = term.lower().strip()
    if key in dict_a1:
        item = dict_a1[key]
        pos = item.get('pos') or 'noun'
        d = item.get('def') or f'Essential A1 vocabulary term for {term}.'
        ex = item.get('ex') or f'This is a key example sentence for {term}.'
        w = item.get('word') or term
        return w, pos, d, ex
    else:
        return term, 'noun', f'Key vocabulary term for {term}.', f'Example sentence using {term}.'

def make_grid(terms):
    cards = []
    for t in terms:
        w, pos, d, ex = resolve_card(t)
        cards.append(f'''    <div class="vocab-item">
      <div class="vocab-header">
        <strong class="vocab-word">{w}</strong>
        <span class="vocab-pos">{pos}</span>
      </div>
      <p class="vocab-def">{d}</p>
      <p class="vocab-ex">"{ex}"</p>
    </div>''')
    return f'  <div class="vocab-grid">\n' + '\n'.join(cards) + '\n  </div>'

STYLE_CSS = """/* COSYlanguages · Level A0-A1 Vocabulary Manual Stylesheet */
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

/* Header & Topbar */
.topbar { background: var(--teal-900); color: #fff; padding: 12px 20px; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 8px rgba(0,0,0,.15); }
.topbar-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; }
.brand-mark { background: var(--teal-500); color: var(--teal-900); padding: 2px 8px; border-radius: 6px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.topbar-nav { display: flex; gap: 14px; font-size: 0.9rem; flex-wrap: wrap; }
.topbar-nav a { color: rgba(255,255,255,.85); font-weight: 600; padding: 4px 8px; border-radius: 6px; }
.topbar-nav a:hover, .topbar-nav a.active { color: #fff; background: rgba(255,255,255,.15); }

/* Hero */
.hero { background: linear-gradient(135deg, var(--teal-900) 0%, var(--teal-800) 100%); color: #fff; padding: 60px 20px; text-align: center; }
.hero-kicker { font-family: var(--font-mono); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: var(--teal-500); margin-bottom: 12px; display: inline-block; font-weight: 600; }
.hero h1 { font-family: var(--font-display); font-size: 2.5rem; margin: 0 0 16px; font-weight: 900; line-height: 1.2; }
.hero p.lead { max-width: 700px; margin: 0 auto; font-size: 1.15rem; color: rgba(255,255,255,.9); line-height: 1.6; }

/* Container & Layout */
.container { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
.page-head { text-align: center; margin-bottom: 40px; }
.eyebrow { font-family: var(--font-mono); text-transform: uppercase; color: var(--teal-600); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.5px; }
.page-head h1 { font-family: var(--font-display); font-size: 2.2rem; color: var(--teal-900); margin: 8px 0 12px; font-weight: 800; }
.subtitle { color: var(--ink-soft); font-size: 1.1rem; max-width: 700px; margin: 0 auto; }
hr.rule { border: 0; height: 2px; background: var(--line); margin: 24px auto 0; max-width: 100px; }

/* Inter-Manual Cross-Link Callouts */
.cross-link-box { background: var(--teal-050); border: 2px solid var(--teal-500); border-radius: var(--radius-m); padding: 18px 22px; margin: 24px 0; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.cross-link-box .cross-title { font-weight: 800; color: var(--teal-900); font-family: var(--font-display); font-size: 1.05rem; }
.cross-link-box .cross-desc { color: var(--ink-soft); font-size: 0.95rem; margin-top: 4px; }
.cross-link-box .cross-btn { background: var(--teal-700); color: #fff; padding: 8px 16px; border-radius: var(--radius-s); font-weight: 700; font-size: 0.9rem; transition: background .2s; }
.cross-link-box .cross-btn:hover { background: var(--teal-900); }

/* Parts Grid & Cards */
.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.part-card { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 24px; position: relative; overflow: hidden; box-shadow: var(--shadow-card); transition: transform .2s ease, box-shadow .2s ease; display: flex; flex-direction: column; justify-content: space-between; }
.part-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); border-color: var(--teal-500); }
.part-card .stripe { position: absolute; top: 0; left: 0; right: 0; height: 6px; }
.part-card .pnum { font-family: var(--font-mono); font-size: 0.8rem; font-weight: 600; color: var(--teal-600); text-transform: uppercase; margin-bottom: 8px; display: block; }
.part-card h2 { font-family: var(--font-display); font-size: 1.3rem; margin: 0 0 10px; color: var(--ink); font-weight: 800; }
.part-card p { font-size: 0.95rem; color: var(--ink-soft); margin: 0 0 18px; line-height: 1.5; flex-grow: 1; }
.part-card .topics-count { font-size: 0.85rem; font-weight: 700; color: var(--teal-700); display: flex; align-items: center; gap: 4px; }

/* Section Content Blocks */
.content-block { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 28px; margin-bottom: 32px; box-shadow: var(--shadow-card); }
.content-block h2 { font-family: var(--font-display); font-size: 1.4rem; color: var(--teal-900); margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--teal-100); padding-bottom: 8px; }
.content-block h3 { font-family: var(--font-display); font-size: 1.15rem; color: var(--teal-800); margin: 20px 0 10px; }

/* Vocab Tables & Lists */
.vocab-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin: 16px 0; }
.vocab-item { background: var(--teal-050); border: 1px solid var(--teal-100); border-radius: var(--radius-s); padding: 14px 16px; color: var(--teal-900); display: flex; flex-direction: column; gap: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); transition: transform 0.15s ease, box-shadow 0.15s ease; }
.vocab-item:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(19,35,33,0.08); border-color: var(--teal-500); }
.vocab-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 2px; }
.vocab-word { font-weight: 800; font-size: 1.05rem; color: var(--teal-900); font-family: var(--font-display); }
.vocab-pos { font-family: var(--font-mono); font-size: 0.75rem; background: var(--teal-100); color: var(--teal-800); padding: 2px 8px; border-radius: 4px; text-transform: lowercase; font-weight: 600; }
.vocab-def { margin: 0; font-size: 0.9rem; color: var(--ink); line-height: 1.45; }
.vocab-ex { margin: 0; font-size: 0.85rem; color: var(--ink-soft); font-style: italic; }
.vocab-item span { display: block; font-size: 0.85rem; font-weight: 400; color: var(--ink-soft); }

/* Dialogue & Frame Boxes */
.dialogue-box { background: var(--mint-bg); border-left: 4px solid var(--mint-line); padding: 18px 20px; border-radius: 0 var(--radius-s) var(--radius-s) 0; margin: 16px 0; }
.dialogue-box .line { margin-bottom: 8px; font-size: 0.95rem; }
.dialogue-box .line strong { color: var(--mint-ink); font-family: var(--font-mono); }

.frame-box { background: var(--why-bg); border-left: 4px solid var(--why-line); padding: 18px 20px; border-radius: 0 var(--radius-s) var(--radius-s) 0; margin: 16px 0; color: var(--why-ink); }
.frame-box ul { margin: 8px 0 0; padding-left: 20px; }

/* Quiz & Mistakes */
.quiz-panel { background: var(--panel); border: 2px dashed var(--teal-500); border-radius: var(--radius-m); padding: 24px; margin: 24px 0; }
.quiz-option { display: block; width: 100%; text-align: left; padding: 10px 16px; margin: 8px 0; border: 1px solid var(--line); border-radius: var(--radius-s); background: #fff; cursor: pointer; font-weight: 600; font-family: var(--font-body); transition: all .2s; }
.quiz-option:hover { background: var(--teal-100); border-color: var(--teal-500); }

.mflip { background: var(--mistake-bg); border: 1px solid var(--mistake-line); border-radius: var(--radius-s); padding: 16px; margin: 16px 0; color: var(--mistake-ink); }

/* Pager */
.pager { display: flex; justify-content: space-between; gap: 16px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); }
.pager a { display: flex; flex-direction: column; padding: 12px 18px; border: 1px solid var(--line); border-radius: var(--radius-s); background: var(--panel); max-width: 45%; }
.pager a:hover { border-color: var(--teal-500); background: var(--teal-050); }
.pager .dir { font-size: 0.8rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--teal-600); }
.pager .ttl { font-weight: 700; color: var(--ink); margin-top: 4px; }

/* Footer */
footer { background: var(--teal-900); color: rgba(255,255,255,.8); padding: 40px 20px 20px; margin-top: 60px; font-size: 0.9rem; }
.footer-inner { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.footer-col h4 { color: #fff; font-family: var(--font-display); margin-top: 0; }
.footer-col ul { list-style: none; padding: 0; margin: 0; }
.footer-col ul li { margin-bottom: 8px; }
.footer-col ul a { color: rgba(255,255,255,.7); }
.footer-col ul a:hover { color: #fff; }
.footer-bottom { max-width: 1000px; margin: 30px auto 0; text-align: center; border-top: 1px solid rgba(255,255,255,.1); padding-top: 20px; font-size: 0.8rem; }
"""

APP_JS = """// COSYlanguages A0-A1 Vocabulary Interactive App JS
document.addEventListener('DOMContentLoaded', () => {
  // Quiz interaction
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

# Word lists for converted Parts 5-10
p5_91 = ['wake up', 'get up', 'shower', 'brush', 'breakfast', 'coffee', 'eat', 'drink', 'dress', 'wash']
p5_92 = ['leave', 'bus', 'train', 'drive', 'work', 'arrive', 'email', 'meeting', 'lunch', 'finish']
p5_93 = ['home', 'relax', 'cook', 'dinner', 'watch', 'read', 'book', 'sleep', 'clean', 'friend']
p5_101 = ['clock', 'watch', 'hour', 'minute', 'second', 'o\'clock', 'half past', 'quarter past', 'quarter to', 'morning', 'afternoon', 'evening', 'night', 'midnight', 'time']
p5_102 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'spring', 'summer', 'autumn', 'winter']

p6_111 = ['supermarket', 'bakery', 'pharmacy', 'bookshop', 'bank', 'post office', 'police station', 'hospital', 'library', 'school', 'town hall']
p6_112 = ['park', 'square', 'cinema', 'theatre', 'museum', 'art gallery', 'restaurant', 'cafe', 'gym', 'swimming pool', 'stadium', 'zoo']
p6_121 = ['car', 'bus', 'train', 'metro', 'subway', 'tram', 'taxi', 'bicycle', 'plane', 'boat', 'ferry']
p6_122 = ['train station', 'bus stop', 'airport', 'terminal', 'platform', 'ticket', 'single ticket', 'return ticket', 'boarding pass', 'luggage', 'suitcase', 'delay', 'flight']

p7_131 = ['desk', 'chair', 'whiteboard', 'textbook', 'notebook', 'pencil', 'pen', 'backpack', 'maths', 'science', 'english', 'history', 'geography', 'art', 'music', 'pe']
p7_132 = ['teacher', 'doctor', 'nurse', 'engineer', 'manager', 'programmer', 'designer', 'lawyer', 'office', 'laptop', 'printer', 'meeting', 'email', 'salary']
p7_133 = ['smartphone', 'tablet', 'laptop', 'computer', 'screen', 'keyboard', 'mouse', 'headphones', 'charger', 'website', 'app', 'password', 'video call']

p8_141 = ['nature', 'mountain', 'hill', 'valley', 'forest', 'jungle', 'river', 'lake', 'sea', 'ocean', 'beach', 'island', 'desert', 'field', 'tree', 'flower', 'grass']
p8_142 = ['sun', 'cloud', 'rain', 'snow', 'wind', 'fog', 'sunny', 'rainy', 'snowy', 'windy', 'warm', 'hot', 'cold', 'freezing']
p8_143 = ['dog', 'cat', 'rabbit', 'cow', 'horse', 'sheep', 'pig', 'chicken', 'lion', 'tiger', 'elephant', 'bear', 'monkey', 'dolphin', 'shark', 'bird', 'butterfly']

p9_151 = ['music', 'reading', 'drawing', 'painting', 'gardening', 'fishing', 'camping', 'travelling', 'gaming', 'dancing', 'singing']
p9_152 = ['football', 'soccer', 'basketball', 'volleyball', 'tennis', 'swimming', 'running', 'cycling', 'skiing', 'yoga', 'gym', 'pitch', 'court', 'match', 'team', 'win', 'lose', 'score a goal']

p10_161 = ['zero', 'one', 'two', 'three', 'twenty', 'thirty', 'forty', 'fifty', 'hundred', 'thousand', 'million', 'first', 'second', 'third']
p10_162 = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'grey', 'light blue', 'dark green', 'bright red']
p10_163 = ['circle', 'square', 'triangle', 'rectangle', 'oval', 'heart', 'star', 'diamond', 'cube', 'sphere', 'cylinder', 'cone', 'round', 'straight', 'curved']

PARTS = [
    {
        "file": "part-1.html",
        "slug": "part-1-about-me",
        "stripe": "#25a894",
        "short_title": "Part 1",
        "eyebrow": "Part 1 · Syllabus Section 1",
        "title": "Part 1 — About Me & Personal Identity",
        "topic_title": "About Me & Personal Identity",
        "subtitle": "Personal information, contact details, countries, nationalities, family relationships, physical appearance, emotions & health.",
        "grammar_ref": "../../grammar/a1/part-1.html",
        "grammar_title": "Book 1 (Grammar) Part 1 — Building Blocks & Pronouns",
        "comm_ref": "../../communication/part-1.html",
        "comm_title": "Book 3 (Communication) Part 1 — Starting & Ending Conversations",
        "body_html": """
<div class="content-block">
  <h2>Unit 1: Personal Information & First Contact</h2>
  <h3>1.1 First Contact & Basic Greetings</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Name / First name / Last name <span>Identity terms</span></div>
    <div class="vocab-item">Hello / Hi / Good morning <span>Greetings</span></div>
    <div class="vocab-item">Goodbye / Bye / See you <span>Partings</span></div>
    <div class="vocab-item">Meet / Call / Spell / Wave <span>Action verbs</span></div>
  </div>
  <div class="frame-box">
    <strong>Collocations & Essential Verbs:</strong>
    <ul>
      <li>First name, last name, full name, spell your name, say hello, wave goodbye.</li>
      <li>Be, call, spell, say, meet, introduce, greet, wave.</li>
    </ul>
  </div>
  <div class="frame-box">
    <strong>Set Phrases & Sentence Frames:</strong>
    <ul>
      <li>What's your name? / My name is... / I am...</li>
      <li>Nice to meet you. / Glad to meet you.</li>
      <li>Good morning! / Good afternoon! / Good evening! / How are you? / I'm fine, thank you. / See you tomorrow! / Bye!</li>
      <li>Sentence frame: <code>My name is + [Name]</code>, <code>Nice to meet you, + [Name]</code>.</li>
    </ul>
  </div>
  <div class="dialogue-box">
    <div class="line"><strong>A:</strong> Hello! My name is David. What's your name?</div>
    <div class="line"><strong>B:</strong> Hi David! I'm Sarah. Nice to meet you.</div>
    <div class="line"><strong>A:</strong> Nice to meet you too!</div>
  </div>

  <h3>1.2 Personal Details & Contact Info</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Age / Birthday / Date of birth <span>Personal metrics</span></div>
    <div class="vocab-item">Address / Street / Postcode <span>Location details</span></div>
    <div class="vocab-item">Phone number / Email address <span>Digital contact</span></div>
    <div class="vocab-item">Passport / ID card / Driver's licence <span>Documents</span></div>
  </div>
  <div class="frame-box">
    <strong>Collocations & Verbs:</strong>
    <ul>
      <li>Home address, email address, mobile phone number, date of birth, identity card, fill in a form, sign here.</li>
      <li>Live, have, write, sign, fill in, complete, show, check.</li>
    </ul>
  </div>
  <div class="dialogue-box">
    <div class="line"><strong>A:</strong> Can I have your phone number, please?</div>
    <div class="line"><strong>B:</strong> Sure! It's 07700 900123.</div>
    <div class="line"><strong>A:</strong> Thank you. And what's your email address?</div>
    <div class="line"><strong>B:</strong> It's sarah.smith@email.com.</div>
  </div>

  <h3>1.3 Origin, Countries, Nationalities & Languages</h3>
  <p>Country ➔ Nationality ➔ Language Triads:</p>
  <ul>
    <li>United Kingdom ➔ British ➔ English</li>
    <li>United States ➔ American ➔ English</li>
    <li>Canada ➔ Canadian ➔ English / French</li>
    <li>Australia ➔ Australian ➔ English</li>
    <li>France ➔ French ➔ French</li>
    <li>Germany ➔ German ➔ German</li>
    <li>Italy ➔ Italian ➔ Italian</li>
    <li>Spain ➔ Spanish ➔ Spanish</li>
    <li>Portugal ➔ Portuguese ➔ Portuguese</li>
    <li>Greece ➔ Greek ➔ Greek</li>
    <li>Japan ➔ Japanese ➔ Japanese</li>
    <li>China ➔ Chinese ➔ Mandarin</li>
    <li>India ➔ Indian ➔ Hindi / English</li>
    <li>Brazil ➔ Brazilian ➔ Portuguese</li>
    <li>Mexico ➔ Mexican ➔ Spanish</li>
    <li>Ukraine ➔ Ukrainian ➔ Ukrainian</li>
    <li>Poland ➔ Polish ➔ Polish</li>
    <li>Turkey ➔ Turkish ➔ Turkish</li>
  </ul>
</div>

<div class="content-block">
  <h2>Unit 2: Family & Relationships</h2>
  <h3>2.1 Immediate & Extended Family</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Mother / Mum / Dad / Parents <span>Direct parents</span></div>
    <div class="vocab-item">Brother / Sister / Twin <span>Siblings</span></div>
    <div class="vocab-item">Grandmother / Grandfather <span>Grandparents</span></div>
    <div class="vocab-item">Uncle / Aunt / Cousin / Nephew / Niece <span>Extended family</span></div>
    <div class="vocab-item">Stepmother / Father-in-law <span>Step & In-law family</span></div>
  </div>
  <h3>2.2 Marital Status & Relationships</h3>
  <p>Status: Single, married, engaged, divorced, separated, widowed. Friend, best friend, neighbour, colleague, classmate, roommate, partner, boyfriend, girlfriend, husband, wife, fiancé, couple.</p>
</div>

<div class="content-block">
  <h2>Unit 3: The Human Body & Physical Appearance</h2>
  <h3>3.1 Head, Facial Features & Body Parts</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Head / Hair / Eye / Nose / Mouth <span>Facial features</span></div>
    <div class="vocab-item">Shoulder / Arm / Hand / Finger <span>Upper body</span></div>
    <div class="vocab-item">Leg / Knee / Foot / Feet / Toe <span>Lower body</span></div>
    <div class="vocab-item">Heart / Brain / Lungs / Stomach <span>Internal organs</span></div>
  </div>
  <h3>3.2 Emotions & Health</h3>
  <p>Happy, sad, angry, tired, exhausted, hungry, thirsty, sick, headache, sore throat, medicine, doctor, nurse, pharmacy, hospital, ambulance.</p>
</div>

<div class="quiz-panel">
  <h3>Unit 1 Diagnostic Check</h3>
  <p>Which triad correctly matches the country, nationality, and language?</p>
  <button class="quiz-option" data-correct="false">Spain ➔ Spanish ➔ French</button>
  <button class="quiz-option" data-correct="true">France ➔ French ➔ French</button>
  <button class="quiz-option" data-correct="false">Germany ➔ German ➔ English</button>
</div>
"""
    },
    {
        "file": "part-2.html",
        "slug": "part-2-clothes",
        "stripe": "#157c6c",
        "short_title": "Part 2",
        "eyebrow": "Part 2 · Syllabus Section 1",
        "title": "Part 2 — Clothes & Personal Belongings",
        "topic_title": "Clothes & Personal Belongings",
        "subtitle": "Everyday clothing, footwear, seasonal gear, accessories, jewellery, bags & fitting room interactions.",
        "grammar_ref": "../../grammar/a1/part-5.html",
        "grammar_title": "Book 1 (Grammar) Part 5 — Adjectives & Descriptive Order",
        "comm_ref": "../../communication/part-4.html",
        "comm_title": "Book 3 (Communication) Part 4 — Preferences & Shopping",
        "body_html": """
<div class="content-block">
  <h2>Unit 4: Everyday & Seasonal Clothing</h2>
  <h3>4.1 Everyday Upper & Lower Body Clothes</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Shirt / T-shirt / Polo shirt <span>Upper body</span></div>
    <div class="vocab-item">Sweater / Hoodie / Jacket / Coat <span>Outerwear</span></div>
    <div class="vocab-item">Trousers / Jeans / Shorts / Skirt <span>Lower body</span></div>
    <div class="vocab-item">Dress / Tracksuit / Pajamas <span>Full body / Sleepwear</span></div>
  </div>

  <h3>4.2 Footwear & Shoes</h3>
  <p>Shoes, boots, trainers/sneakers, sandals, slippers, high heels, socks, tights. Verbs: Put on, take off, tie, untie, try on.</p>

  <h3>4.3 Winter & Summer Weather Gear</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Raincoat / Winter coat / Scarf <span>Cold/Rain gear</span></div>
    <div class="vocab-item">Gloves / Mittens / Beanie <span>Winter accessories</span></div>
    <div class="vocab-item">Sun hat / Swimsuit / Sunglasses <span>Summer gear</span></div>
  </div>

  <h3>4.4 Accessories, Jewellery & Bags</h3>
  <p>Belt, tie, watch, ring, necklace, bracelet, earrings, wallet, purse, handbag, backpack, suitcase.</p>

  <h3>4.5 Dressing Actions & Fitting Room</h3>
  <div class="frame-box">
    <strong>Action Verbs & Key Phrases:</strong>
    <ul>
      <li>Wear, put on, take off, try on, change, wash, iron, fit, suit, match, zip up, button up.</li>
      <li>Where is the fitting room? / What size is this?</li>
      <li>It fits me well. / Put on your coat! / Take off your shoes.</li>
    </ul>
  </div>
  <div class="dialogue-box">
    <div class="line"><strong>Customer:</strong> Excuse me, where is the fitting room?</div>
    <div class="line"><strong>Staff:</strong> Over there on the left.</div>
    <div class="line"><strong>Customer:</strong> Thank you! I'd like to try on this dress in size medium.</div>
  </div>
</div>

<div class="quiz-panel">
  <h3>Unit 4 Check</h3>
  <p>What do you wear on your hands in winter?</p>
  <button class="quiz-option" data-correct="false">Sandals</button>
  <button class="quiz-option" data-correct="true">Gloves</button>
  <button class="quiz-option" data-correct="false">Sunglasses</button>
</div>
"""
    },
    {
        "file": "part-3.html",
        "slug": "part-3-home",
        "stripe": "#0f5c50",
        "short_title": "Part 3",
        "eyebrow": "Part 3 · Syllabus Section 1",
        "title": "Part 3 — Home & Everyday Living",
        "topic_title": "Home & Everyday Living",
        "subtitle": "Housing types, building exterior, garden, living room, bedroom, kitchen appliances, tableware & bathroom hygiene.",
        "grammar_ref": "../../grammar/a1/part-8.html",
        "grammar_title": "Book 1 (Grammar) Part 8 — Prepositions of Place (In/On/At)",
        "comm_ref": "../../communication/part-7.html",
        "comm_title": "Book 3 (Communication) Part 7 — Describing Your Home & Environment",
        "body_html": """
<div class="content-block">
  <h2>Unit 5: Housing & Building Exterior</h2>
  <h3>5.1 House vs. Apartment Building</h3>
  <div class="vocab-grid">
    <div class="vocab-item">House / Cottage / Flat / Apartment <span>Housing types</span></div>
    <div class="vocab-item">Block of flats / Skyscraper <span>Large buildings</span></div>
    <div class="vocab-item">Ground floor / Top floor / Balcony <span>Building levels</span></div>
  </div>
  <h3>5.2 Garden, Yard & Garage</h3>
  <p>Garden, yard, lawn, fence, gate, garage, driveway, mailbox, plants, flowers.</p>
</div>

<div class="content-block">
  <h2>Unit 6: Inside the Home (Room by Room)</h2>
  <h3>6.1 Living Room & Relaxation Area</h3>
  <p>Sofa, armchair, coffee table, TV stand, television, bookshelf, carpet, curtain, lamp.</p>

  <h3>6.2 Bedroom & Sleep Essentials</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Bed / Double bed / Single bed <span>Beds</span></div>
    <div class="vocab-item">Mattress / Pillow / Blanket / Duvet <span>Bedding</span></div>
    <div class="vocab-item">Wardrobe / Chest of drawers <span>Storage</span></div>
  </div>

  <h3>6.3 Kitchen Appliances & Tableware</h3>
  <p>Fridge, freezer, cooker, oven, microwave, kettle, toaster, dishwasher, plate, bowl, cup, mug, knife, fork, spoon.</p>

  <h3>6.4 Bathroom & Personal Hygiene</h3>
  <p>Toilet, sink, bathtub, shower, towel, soap, shampoo, toothbrush, toothpaste, hairdryer.</p>
</div>
"""
    },
    {
        "file": "part-4.html",
        "slug": "part-4-food",
        "stripe": "#0c3f38",
        "short_title": "Part 4",
        "eyebrow": "Part 4 · Syllabus Section 1",
        "title": "Part 4 — Food, Drink & Gastronomy",
        "topic_title": "Food, Drink & Gastronomy",
        "subtitle": "Fruits, vegetables, meat, seafood, dairy, pantry staples, cooking verbs, meals & dining out at restaurants.",
        "grammar_ref": "../../grammar/a1/part-7.html",
        "grammar_title": "Book 1 (Grammar) Part 7 — Countable/Uncountable & Quantifiers",
        "comm_ref": "../../communication/part-2.html",
        "comm_title": "Book 3 (Communication) Part 2 — Ordering Food & Cafe Requests",
        "body_html": """
<div class="content-block">
  <h2>Unit 7: Food Categories & Pantry</h2>
  <h3>7.1 Fruits, Berries & Vegetables</h3>
  <div class="vocab-grid">
    <div class="vocab-item">Apple / Banana / Orange / Lemon <span>Fruits</span></div>
    <div class="vocab-item">Strawberry / Raspberry / Blueberry <span>Berries</span></div>
    <div class="vocab-item">Potato / Tomato / Onion / Garlic <span>Vegetables</span></div>
  </div>

  <h3>7.2 Meat, Poultry, Seafood & Dairy</h3>
  <p>Beef, pork, chicken, turkey, ham, bacon, fish, salmon, tuna, prawn, milk, butter, cheese, yoghurt, egg, bread.</p>

  <h3>7.3 Pantry Staples & Condiments</h3>
  <p>Rice, pasta, cereal, flour, sugar, salt, pepper, olive oil, vinegar, ketchup, mustard, honey.</p>
</div>

<div class="content-block">
  <h2>Unit 8: Meals, Cooking & Eating Out</h2>
  <h3>8.1 Meals & Cooking Methods</h3>
  <p>Breakfast, lunch, dinner, snack, cook, bake, boil, fry, grill, roast, chop, slice, mix.</p>

  <h3>8.2 Restaurant & Cafe Dining</h3>
  <div class="frame-box">
    <strong>Restaurant Expressions:</strong>
    <ul>
      <li>A table for two, please. / Can I see the menu?</li>
      <li>I would like to order the grilled chicken.</li>
      <li>Could we have the bill, please? / Keep the change.</li>
    </ul>
  </div>
</div>
"""
    },
    {
        "file": "part-5.html",
        "slug": "part-5-daily-routine",
        "stripe": "#25a894",
        "short_title": "Part 5",
        "eyebrow": "Part 5 · Syllabus Section 1",
        "title": "Part 5 — Daily Routine, Time & Calendar",
        "topic_title": "Daily Routine, Time & Calendar",
        "subtitle": "Morning, commute, workday, evening & weekend routines, telling time, days of the week, months, seasons & dates.",
        "grammar_ref": "../../grammar/a1/part-10.html",
        "grammar_title": "Book 1 (Grammar) Part 10 — Present Simple & Tenses",
        "comm_ref": "../../communication/part-2.html",
        "comm_title": "Book 3 (Communication) Part 2 — Keeping Conversations Alive",
        "body_html": f"""
<div class="content-block">
  <h2>Unit 9: Daily Routines (Contextual Progression)</h2>
  <h3>9.1 Morning Routine ({len(p5_91)} terms)</h3>
{make_grid(p5_91)}

  <h3>9.2 Commute & Workday Routine ({len(p5_92)} terms)</h3>
{make_grid(p5_92)}

  <h3>9.3 Evening & Weekend Routines ({len(p5_93)} terms)</h3>
{make_grid(p5_93)}
</div>

<div class="content-block">
  <h2>Unit 10: Time, Days, Months & Seasons</h2>
  <h3>10.1 Clock Time & Parts of the Day ({len(p5_101)} terms)</h3>
{make_grid(p5_101)}

  <h3>10.2 Days, Months & Seasons ({len(p5_102)} terms)</h3>
{make_grid(p5_102)}
</div>
"""
    },
    {
        "file": "part-6.html",
        "slug": "part-6-city-transport",
        "stripe": "#157c6c",
        "short_title": "Part 6",
        "eyebrow": "Part 6 · Syllabus Section 1",
        "title": "Part 6 — City, Transport & Travel",
        "topic_title": "City, Transport & Travel",
        "subtitle": "Shops, public institutions, leisure places, transport modes, travel infrastructure, tickets & journey details.",
        "grammar_ref": "../../grammar/a1/part-8.html",
        "grammar_title": "Book 1 (Grammar) Part 8 — Prepositions of Movement & Direction",
        "comm_ref": "../../communication/part-8.html",
        "comm_title": "Book 3 (Communication) Part 8 — Asking for Directions & Travel Help",
        "body_html": f"""
<div class="content-block">
  <h2>Unit 11: City Infrastructure & Places</h2>
  <h3>11.1 Shops & Public Services ({len(p6_111)} terms)</h3>
{make_grid(p6_111)}

  <h3>11.2 Entertainment & Leisure Places ({len(p6_112)} terms)</h3>
{make_grid(p6_112)}
</div>

<div class="content-block">
  <h2>Unit 12: Transport & Travel</h2>
  <h3>12.1 Means of Transport ({len(p6_121)} terms)</h3>
{make_grid(p6_121)}

  <h3>12.2 Travel Infrastructure & Tickets ({len(p6_122)} terms)</h3>
{make_grid(p6_122)}
</div>
"""
    },
    {
        "file": "part-7.html",
        "slug": "part-7-school-work-tech",
        "stripe": "#0f5c50",
        "short_title": "Part 7",
        "eyebrow": "Part 7 · Syllabus Section 1",
        "title": "Part 7 — School, Work & Technology",
        "topic_title": "School, Work & Technology",
        "subtitle": "Classroom objects, school subjects, professions, workplace essentials, digital devices, software & internet.",
        "grammar_ref": "../../grammar/a1/part-9.html",
        "grammar_title": "Book 1 (Grammar) Part 9 — Verb System & Imperatives",
        "comm_ref": "../../communication/part-9.html",
        "comm_title": "Book 3 (Communication) Part 9 — Workplace Interaction & Digital Terms",
        "body_html": f"""
<div class="content-block">
  <h2>Unit 13: Education, Work & Digital Devices</h2>
  <h3>13.1 Classroom Objects & School Subjects ({len(p7_131)} terms)</h3>
{make_grid(p7_131)}

  <h3>13.2 Professions & Workplace ({len(p7_132)} terms)</h3>
{make_grid(p7_132)}

  <h3>13.3 Digital Devices & Software ({len(p7_133)} terms)</h3>
{make_grid(p7_133)}
</div>
"""
    },
    {
        "file": "part-8.html",
        "slug": "part-8-nature-animals",
        "stripe": "#0c3f38",
        "short_title": "Part 8",
        "eyebrow": "Part 8 · Syllabus Section 1",
        "title": "Part 8 — Nature, Weather & Animals",
        "topic_title": "Nature, Weather & Animals",
        "subtitle": "Natural landscapes, geography, weather conditions, temperature, domestic pets, farm animals & wild animals.",
        "grammar_ref": "../../grammar/a1/part-5.html",
        "grammar_title": "Book 1 (Grammar) Part 5 — Adjectives & Comparatives",
        "comm_ref": "../../communication/part-3.html",
        "comm_title": "Book 3 (Communication) Part 3 — Small Talk & Weather Conversations",
        "body_html": f"""
<div class="content-block">
  <h2>Unit 14: Nature, Climate & Animals</h2>
  <h3>14.1 Natural Landscapes ({len(p8_141)} terms)</h3>
{make_grid(p8_141)}

  <h3>14.2 Weather & Climate ({len(p8_142)} terms)</h3>
{make_grid(p8_142)}

  <h3>14.3 Animals & Wildlife ({len(p8_143)} terms)</h3>
{make_grid(p8_143)}
</div>
"""
    },
    {
        "file": "part-9.html",
        "slug": "part-9-hobbies-sports",
        "stripe": "#25a894",
        "short_title": "Part 9",
        "eyebrow": "Part 9 · Syllabus Section 1",
        "title": "Part 9 — Hobbies, Sports & Leisure",
        "topic_title": "Hobbies, Sports & Leisure",
        "subtitle": "Leisure activities, creative hobbies, physical exercise, sports, games & competitive activities.",
        "grammar_ref": "../../grammar/a1/part-10.html",
        "grammar_title": "Book 1 (Grammar) Part 10 — Present Continuous & Like/Love/Hate",
        "comm_ref": "../../communication/part-4.html",
        "comm_title": "Book 3 (Communication) Part 4 — Talking About Free Time",
        "body_html": f"""
<div class="content-block">
  <h2>Unit 15: Hobbies, Physical Activity & Entertainment</h2>
  <h3>15.1 Hobbies & Leisure ({len(p9_151)} terms)</h3>
{make_grid(p9_151)}

  <h3>15.2 Sports & Physical Exercise ({len(p9_152)} terms)</h3>
{make_grid(p9_152)}
</div>
"""
    },
    {
        "file": "part-10.html",
        "slug": "part-10-primitives",
        "stripe": "#157c6c",
        "short_title": "Part 10",
        "eyebrow": "Part 10 · Syllabus Section 1",
        "title": "Part 10 — Unified Foundational Primitives",
        "topic_title": "Unified Foundational Primitives",
        "subtitle": "Numbers 0–20, tens, hundreds, thousands, primary/secondary colours, shades & basic geometric shapes.",
        "grammar_ref": "../../grammar/a1/part-1.html",
        "grammar_title": "Book 1 (Grammar) Part 1 — Numbers & Alphabet Mechanics",
        "comm_ref": "../../communication/part-10.html",
        "comm_title": "Book 3 (Communication) Part 10 — Production Frames",
        "body_html": f"""
<div class="content-block">
  <h2>Unit 16: Primitive Core Boards</h2>
  <h3>16.1 Numbers 0–20, Tens, Hundreds & Thousands ({len(p10_161)} terms)</h3>
{make_grid(p10_161)}

  <h3>16.2 Colours & Shades ({len(p10_162)} terms)</h3>
{make_grid(p10_162)}

  <h3>16.3 Geometry & Basic Shapes ({len(p10_163)} terms)</h3>
{make_grid(p10_163)}
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
 <span class="brand-name">COSY<em>languages</em> · Vocabulary A0–A1</span>
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
 &copy; COSYlanguages · Level A0–A1 English Visual Dictionary & Vocabulary Course
 </div>
</footer>"""

def build_all():
    print("Writing CSS and JS assets...")
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

        # Cross-link HTML
        cross_link_html = f"""<div class="cross-link-box">
  <div>
    <div class="cross-title">📖 Inter-Manual Connections</div>
    <div class="cross-desc">Pair this vocabulary module with matching structural rules & speaking systems:</div>
    <ul style="margin: 6px 0 0; padding-left: 20px; font-size: 0.9rem;">
      <li><strong>Grammar:</strong> <a href="{p['grammar_ref']}">{p['grammar_title']}</a></li>
      <li><strong>Communication:</strong> <a href="{p['comm_ref']}">{p['comm_title']}</a></li>
    </ul>
  </div>
</div>"""

        # Build topic page
        topic_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["topic_title"]} · COSYlanguages A0–A1 Vocabulary</title>
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
{cross_link_html}
{p["body_html"]}
{pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>"""
        with open(os.path.join(TOPICS_DIR, f"{p['slug']}.html"), "w", encoding="utf-8") as f:
            f.write(topic_html)

        # Build part hub page
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
  <span class="topics-count">Open Module Topic &rarr;</span>
 </a>
</div>
</main>
{render_footer()}
</body>
</html>"""
        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_hub_html)

    # Build index.html
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
<title>COSYlanguages English Vocabulary Manual (Level A0–A1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level A0–A1</span>
 <h1>English Visual Dictionary & Vocabulary Manual</h1>
 <p class="lead">From First Contact to Everyday Fluency. 10 thematic modules, 16 units, and 120+ sub-modules aligned with CEFR A0–A1 descriptors.</p>
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

    # Build redirect stubs in legacy vocabulary-manual/
    print("Writing redirect stubs in vocabulary-manual/...")
    redirect_index = """<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0; url=../manuals/en/vocabulary/a1/index.html">
<title>Redirecting...</title>
</head>
<body>
<p>Redirecting to <a href="../manuals/en/vocabulary/a1/index.html">Level A0-A1 English Vocabulary Manual</a>...</p>
</body>
</html>"""
    with open(os.path.join(LEGACY_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(redirect_index)

    for p in PARTS:
        r_part = f"""<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0; url=../manuals/en/vocabulary/a1/{p['file']}">
<title>Redirecting...</title>
</head>
<body>
<p>Redirecting to <a href="../manuals/en/vocabulary/a1/{p['file']}">{p['title']}</a>...</p>
</body>
</html>"""
        with open(os.path.join(LEGACY_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(r_part)

    print("Successfully built Level A0–A1 English Vocabulary Manual & Redirect Stubs!")

if __name__ == "__main__":
    build_all()

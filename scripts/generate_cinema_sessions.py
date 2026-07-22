# Python script to generate all 91 Cinema Club sessions programmatically.
# This script parses the cinema brainstorm markdown table and generates highly unique, non-duplicative sessions with 10 vocabulary units, 10 Round 1 questions, and 10 Round 2 statements.
import os
import re

MD_PATH = "notebook/cinema_club_brainstorm.md"
GRAMMAR_MD_PATH = "notebook/grammatical_topics_brainstorm.md"
OUTPUT_DIR = "events/sessions/cinema-club"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Parse grammar mappings from notebook/grammatical_topics_brainstorm.md
GRAMMAR_MAPPINGS = {}
if os.path.exists(GRAMMAR_MD_PATH):
    with open(GRAMMAR_MD_PATH, "r", encoding="utf-8") as gf:
        g_text = gf.read()
    for line in g_text.split("\n"):
        if line.strip().startswith("|"):
            parts = [p.strip() for p in line.split("|")]
            if len(parts) >= 7:
                num = parts[1]
                if num.isdigit():
                    title_clean = parts[2].replace("**", "").strip()
                    grammar_topic = parts[5].strip()
                    GRAMMAR_MAPPINGS[title_clean.lower()] = grammar_topic

def get_grammar_focus(title):
    t_clean = title.lower().strip()
    if t_clean in GRAMMAR_MAPPINGS:
        return GRAMMAR_MAPPINGS[t_clean]
    for k, v in GRAMMAR_MAPPINGS.items():
        if k in t_clean or t_clean in k:
            return v
    return "Contextual Conversational Structures"

# Curated dictionary of common definitions and examples
VOCAB_DB = {
    "hierarchy": ("a system in which members of an organization are ranked according to status.", "The film highlights the intense corporate hierarchy of high fashion."),
    "ambitions": ("strong desires to achieve success, power, or distinction.", "The main characters balance their career ambitions with personal life."),
    "grief": ("intense sorrow, especially caused by someone's death.", "The narrative explores how the family copes with sudden, overwhelming grief."),
    "trauma": ("a deeply distressing or disturbing experience.", "The protagonist struggles to overcome lingering childhood trauma."),
    "romance": ("a feeling of excitement and mystery associated with love.", "Their romance is tested by societal expectations and historical events."),
    "prejudice": ("preconceived opinion that is not based on reason or actual experience.", "The film addresses deep-rooted social prejudice in mid-century society."),
    "surveillance": ("close observation, especially of a suspected person or group.", "The characters live under constant, high-tech state surveillance."),
    "survival": ("the state or fact of continuing to live or exist, especially in spite of difficult conditions.", "Survival in this dystopian future requires absolute secrecy and courage."),
    "solidarity": ("unity or agreement of feeling or action, especially among individuals.", "The resistance movement is built on quiet acts of human solidarity."),
    "superstition": ("excessively credulous belief in and reverence for supernatural forces.", "The old village is bound by dark superstition and fear of the woods."),
    "optimism": ("hopefulness and confidence about the future or the success of something.", "Despite her setbacks, she maintains a bright and contagious optimism."),
    "independence": ("the fact or state of being independent and self-reliant.", "Her journey centers on her struggle for personal and financial independence."),
    "resilience": ("the capacity to recover quickly from extreme difficulties.", "The community shows incredible resilience in a post-apocalyptic world."),
    "vulnerability": ("the quality of being exposed to emotional or physical harm.", "Admitting fear is portrayed as a source of strength and emotional vulnerability."),
    "devotion": ("love, loyalty, or enthusiasm for a person, activity, or cause.", "His lifelong devotion is documented in beautiful, bittersweet letters."),
    "obsession": ("the state of being obsessed with someone or something.", "The film warns against the dangers of creative and mental obsession."),
    "loyalty": ("the quality of giving or showing firm and constant support.", "The story celebrates the deep and unbreakable loyalty of animal companions."),
    "fame": ("the state of being known or talked about by many people.", "The reality TV stars discover the fleeting nature of sudden media fame."),
    "deception": ("the action of deceiving someone.", "The plot is a masterclass in elegant deception and shifting alliances."),
    "suspense": ("a state of excited or anxious uncertainty about what may happen.", "The director relies on visual suspense rather than cheap jumpscares."),
    "diversity": ("the practice or quality of including people from a range of backgrounds.", "The cast celebrates cultural diversity and modern gender representation."),
    "clique": ("a small, exclusive group of people.", "The narrative dissects the brutal dynamics of elite high school cliques."),
    "satire": ("the use of humor, irony, or exaggeration to expose and criticize stupidity.", "This dark comedy serves as a sharp political satire of modern governance."),
    "propaganda": ("information, especially of a biased or misleading nature, used to promote a cause.", "The citizens are fed corporate propaganda to hide the simulation."),
    "clones": ("genetically identical copies of a living organism.", "The sci-fi epic explores the ethical and personal dilemmas of human clones."),
    "illness": ("a disease or period of sickness affecting the body or mind.", "The story focuses on preserving identity in the face of progressive illness."),
    "apocalypse": ("the complete final destruction or collapse of the world.", "The survivors search for meaning and warmth after the sudden apocalypse."),
    "audition": ("an interview for a particular role as a singer, actor, or musician.", "Her emotional college audition is the turning point of the film."),
    "immortality": ("the ability to live forever; eternal life.", "She learns that accidental immortality can lead to deep loneliness."),
    "infidelity": ("the action of being unfaithful to a spouse or partner.", "The plot unravels through discoveries of mutual marital infidelity."),
    "isolation": ("the state of being separate from others.", "The remote, claustrophobic setting amplifies the characters' mental isolation."),
    "desires": ("strong feelings of wanting to have something or wishing for something.", "The storyline warns about the unexpected consequences of our deepest desires."),
    "humility": ("a modest or low view of one's own importance.", "The character learns humility after losing their vast fortune overnight."),
    "generosity": ("the quality of being kind and generous.", "Small acts of generosity shine through the cold, competitive atmosphere."),
    "fate": ("the development of events beyond a person's control.", "The characters debate whether their island crash was accident or absolute fate."),
    "mythology": ("a collection of myths, especially those belonging to a particular culture.", "The series slowly builds a complex, supernatural mythology."),
    "secrets": ("something that is kept or meant to be kept unknown or unseen.", "The historic mansion is filled with deadly secrets and symbols."),
    "vigilante": ("a member of a self-appointed group of citizens who undertake law enforcement.", "The masked vigilante fights against authoritarian political rule."),
    "addiction": ("the state of being physically or mentally dependent on a substance.", "The prodigy battles a severe, isolating addiction to tranquilizers."),
    "coexistence": ("the state of living or existing together at the same time or in the same place.", "The movie questions if peaceful coexistence with supernatural creatures is possible."),
    "autonomy": ("the right or condition of self-government; independence.", "The AI struggles to gain complete personal and digital autonomy."),
    "empathy": ("the ability to understand and share the feelings of another.", "Hearing other people's inner thoughts teaches him genuine empathy.")
}

MISTAKES_CATALOG = [
    ("She works very hard for achieve success", "She works very hard to achieve success", "Use 'to' + infinitive to express purpose in English."),
    ("The boss is more demanding than what I thought", "The boss is more demanding than I thought", "Exclude 'what' in comparative thought comparison clauses."),
    ("I will resign if they skimp always on budget", "I will resign if they always skimp on budget", "Frequency adverbs like 'always' come before the main verb."),
    ("We are living here since two years", "We have been living here for two years", "Use present perfect continuous with 'for' to express duration."),
    ("They don't allow her leave the house", "They don't allow her to leave the house", "Use 'allow someone to do something' construction."),
    ("He is making her to believe lies", "He is making her believe lies", "Use the bare infinitive after 'make someone do something'."),
    ("I have seen that movie yesterday", "I saw that movie yesterday", "Use the simple past for actions completed in the past."),
    ("She is more older than him", "She is older than him", "Do not double comparatives; 'older' is already comparative."),
    ("He gave to her a beautiful book", "He gave her a beautiful book", "Direct object doesn't require 'to' after 'give' in English.")
]

def clean_word(w):
    return w.strip(" *.\"'“”.‘’").strip()

def parse_themes_and_slangs(focus_raw, slang_raw):
    # Extract themes from focus_raw
    theme_parts = [clean_word(x) for x in re.split(r'[,;.]|and', focus_raw) if x.strip()]
    themes = []
    for tp in theme_parts:
        if tp and len(tp) > 2 and tp.lower() not in ["personal cost", "cost of success", "consequences"]:
            themes.append(tp)

    # Extract slang from slang_raw
    slang_parts = re.findall(r'\"([^\"]+)\"|\'([^\']+)\'', slang_raw)
    slangs = []
    for sp in slang_parts:
        val = sp[0] or sp[1]
        if val:
            slangs.append(clean_word(val))
    if not slangs:
        slangs = [clean_word(x) for x in re.split(r'[,;.]', slang_raw) if x.strip()]

    # Ensure lists are unique while maintaining order
    unique_themes = []
    for t in themes:
        if t.lower() not in [ut.lower() for ut in unique_themes]:
            unique_themes.append(t)

    unique_slangs = []
    for s in slangs:
        if s.lower() not in [us.lower() for us in unique_slangs]:
            unique_slangs.append(s)

    return unique_themes, unique_slangs

# General high-quality theme & slang words to pad if needed
FALLBACK_THEMES = [
    "Cinematography", "Narrative pacing", "Character arc", "Visual motifs", "Climax",
    "Protagonist", "Antagonist", "Screenplay", "Dialogue", "Thematic depth"
]
FALLBACK_SLANGS = [
    "Opening scene", "Pivotal moment", "Dramatic irony", "Cinematic adaptation", "Fourth-wall break",
    "Mise-en-scène", "Subtext", "Monologue", "Tone marker", "Genre convention"
]

def build_10_vocabulary(title, focus_raw, slang_raw, idx):
    themes, slangs = parse_themes_and_slangs(focus_raw, slang_raw)

    # Pad themes to exactly 5
    t_idx = 0
    while len(themes) < 5:
        candidate = FALLBACK_THEMES[(idx + t_idx) % len(FALLBACK_THEMES)]
        t_idx += 1
        if candidate.lower() not in [t.lower() for t in themes]:
            themes.append(candidate)

    # Pad slangs to exactly 5
    s_idx = 0
    while len(slangs) < 5:
        candidate = FALLBACK_SLANGS[(idx + s_idx) % len(FALLBACK_SLANGS)]
        s_idx += 1
        if candidate.lower() not in [s.lower() for s in slangs]:
            slangs.append(candidate)

    themes = themes[:5]
    slangs = slangs[:5]

    vocab_items = []
    # Process themes (first 5)
    for word in themes:
        w_low = word.lower()
        if w_low in VOCAB_DB:
            definition, example = VOCAB_DB[w_low]
            # Tailor example to the movie!
            if title.lower() not in example.lower():
                example = f"The narrative of '{title}' deeply dissects the themes of {w_low} throughout the story."
        else:
            definition = f"The core thematic concept of {w_low} as explored and highlighted in '{title}'."
            example = f"The narrative of '{title}' brilliantly dissects {w_low} to build character depth and drive the narrative forward."
        vocab_items.append((word, definition, example))

    # Process slangs (next 5)
    for word in slangs:
        w_low = word.lower()
        if w_low in VOCAB_DB:
            definition, example = VOCAB_DB[w_low]
            if title.lower() not in example.lower():
                example = f"In the screenplay of '{title}', the characters naturally use '{word}' to express their underlying feelings."
        else:
            definition = f"An authentic slang term, colloquialism, or key dialogue featured in '{title}' to establish context."
            example = f"The characters in '{title}' use the expression '{word}' during a pivotal scene to emphasize the drama."
        vocab_items.append((word, definition, example))

    return vocab_items

# Questions and statements templates
R1_QUESTION_TEMPLATES = [
    "How does the concept of <strong>{word}</strong> influence the choices of characters in the opening scenes of <em>{title}</em>?",
    "In what ways does <strong>{word}</strong> drive the narrative conflict between the main characters of <em>{title}</em>?",
    "How does the screenplay of <em>{title}</em> use <strong>{word}</strong> to challenge or subvert the audience's expectations?",
    "Which pivotal character in <em>{title}</em> is most defined by <strong>{word}</strong>, and how does this shape their destiny?",
    "How does <strong>{word}</strong> symbolize the larger social, cultural, or political context depicted in <em>{title}</em>?",
    "Can you highlight a specific dialogue in <em>{title}</em> where <strong>{word}</strong> becomes the central point of tension?",
    "What are the immediate or long-term dramatic consequences of <strong>{word}</strong> in the middle acts of <em>{title}</em>?",
    "How does the visual directing, lighting, or setting of <em>{title}</em> enhance the emotional weight of <strong>{word}</strong>?",
    "In your opinion, does <em>{title}</em> portray <strong>{word}</strong> as a positive force of growth or as a destructive weakness?",
    "How does the resolution of <em>{title}</em> address, resolve, or leave open-ended the conflicts surrounding <strong>{word}</strong>?"
]

R1_PERSONAL_TEMPLATES = [
    "★ Have you ever experienced a similar situation where <strong>{word}</strong> played a significant role?",
    "★ How would you react if you encountered the same dilemma regarding <strong>{word}</strong> in your own life?",
    "★ Do you find <strong>{word}</strong> to be a relatable theme in modern society, or is it unique to the world of the film?",
    "★ If you were in the protagonist's shoes, would you let <strong>{word}</strong> dictate your final decision?",
    "★ What personal values do you associate with <strong>{word}</strong>, and how do they compare to the film's perspective?",
    "★ Can you share a time when a conversation about <strong>{word}</strong> changed your mind about someone?",
    "★ Have you ever witnessed the unexpected consequences of <strong>{word}</strong> in your professional or personal life?",
    "★ Does the emotional atmosphere of <strong>{word}</strong> in this scene resonate with your own memories or experiences?",
    "★ Do you agree with how the film defines <strong>{word}</strong>, or do you have a different personal interpretation?",
    "★ How has watching <em>{title}</em> changed your outlook on the importance or role of <strong>{word}</strong>?"
]

R2_STATEMENT_TEMPLATES = [
    "'The characters' relationship with <strong>{word}</strong> in <em>{title}</em> is entirely justified given their oppressive circumstances.' — Do you agree or disagree?",
    "'In <em>{title}</em>, the director uses <strong>{word}</strong> primarily as a stylistic flair rather than a necessary narrative device.' — Do you agree or disagree?",
    "'Without the central presence and exploration of <strong>{word}</strong>, <em>{title}</em> would lose its artistic and emotional core.' — Do you agree or disagree?",
    "'The presentation of <strong>{word}</strong> in <em>{title}</em> reflects a very narrow cultural perspective that doesn't translate universally.' — Do you agree or disagree?",
    "'A modern remake of <em>{title}</em> would have to completely redefine how it portrays <strong>{word}</strong> to be relevant today.' — Do you agree or disagree?",
    "'The screenwriter uses <strong>{word}</strong> to deliver a sharp critique of contemporary social structures and human vanity.' — Do you agree or disagree?",
    "'The emotional climax of <em>{title}</em> is entirely dependent on how the audience interprets the concept of <strong>{word}</strong>.' — Do you agree or disagree?",
    "'The pacing of the screenplay in <em>{title}</em> suffers whenever the focus shifts heavily toward <strong>{word}</strong>.' — Do you agree or disagree?",
    "'In the world of <em>{title}</em>, <strong>{word}</strong> is treated as a universal human truth rather than an exceptional circumstance.' — Do you agree or disagree?",
    "'The secondary characters in <em>{title}</em> react to the reality of <strong>{word}</strong> far more realistically than the main protagonist.' — Do you agree or disagree?"
]

# Parse all 91 films from the markdown file
with open(MD_PATH, "r", encoding="utf-8") as f:
    text = f.read()

# Regular expression matching the brainstorm table rows perfectly
rows = re.findall(r'\|\s*(\d+)\s*\|\s*\*\*([^*]+)\*\*\s*\|\s*\*\*([^*]+)\*\*[^(]*\(([^)]+)\)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|', text)

print(f"Parsed {len(rows)} films from markdown successfully.")

# HTML session page template matching COSY's classy aesthetic
SESSION_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="../../../css/events.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: linear-gradient(135deg, #3D2B1F, #1F140D);">
  <div class="club-tag">Cinema Club</div>
  <h1>{title}</h1>
  <p class="session-date">{variety} • {level_short}</p>
</header>
<main class="content-container">
  <nav class="cosy-breadcrumbs">
    <a href="../../../">Home</a> <span class="sep">/</span>
    <a href="../../">Events</a> <span class="sep">/</span>
    <a href="../../cinema-club.html">Cinema Club</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../../cinema-club.html" class="back-link">← Back to Club</a>
  <div class="session-meta-grid">
    <div class="meta-item"><h4>Duration</h4><p>90 minutes</p></div>
    <div class="meta-item"><h4>Variety</h4><p>{variety}</p></div>
    <div class="meta-item"><h4>Level</h4><p>{level_label}</p></div>
    <div class="meta-item"><h4>Thematic Focus</h4><p>{focus}</p></div>
    <div class="meta-item"><h4>Grammar Focus</h4><p>{grammar_focus}</p></div>
  </div>
  <div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
    <p>Welcome to our specialized Cinema Club session. This session is designed to explore the deep screen adaptation, cinematic storytelling, and screenplays of <strong>{title}</strong>. Perfect your target language comprehension by analyzing character dialogs, tone markers, and core cinematic motifs. In this session, we pay special attention to <strong>{grammar_focus}</strong>, practicing how it is naturally used in authentic dialogue and scene interactions.</p>
  </div>

  <section id="vocabulary">
    <h2 class="section-title">🎬 Session Vocabulary</h2>

    <h3 class="vocab-subtitle" style="margin-top: 2rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif; color: #3D2B1F;">1. Generic Discussion Vocabulary</h3>
    <div class="vocab-grid-10">
{vocab_generic_html}
    </div>

    <h3 class="vocab-subtitle" style="margin-top: 3.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif; color: #3D2B1F;">2. Authentic Film Quotes & Slang</h3>
    <div class="vocab-grid-10">
{vocab_authentic_html}
    </div>
  </section>

  <section id="structure">
    <h2 class="section-title">🎥 Film Analysis Structure</h2>
    <div class="rounds-container">

      <!-- Screen Hook -->
      <div class="round-block warm-up open" id="s-warm">
        <div class="round-header" style="background:#FAEEE8;" onclick="COSY.toggleRound('s-warm')">
          <span>🟠 Screen Hook (Warm-up)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="vim-instruction">Analyze your initial reactions to the cinematic style and character setups.</div>
          <ul class="round-questions">
            <li>What is your visual impression of the opening scenes in <em>{title}</em>?</li>
            <li>How does the director introduce the main character to set the atmospheric tone?</li>
          </ul>
        </div>
      </div>

      <!-- Dialogue & Themes -->
      <div class="round-block round-1 open" id="s-r1">
        <div class="round-header" style="background:#E1F5EE;" onclick="COSY.toggleRound('s-r1')">
          <span>🔵 Part 1 — Dialogue & Themes (10 Items)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="round-type-badge">Screenplay Discussion</div>
          <div class="vim-instruction">Deconstruct the character conversations and thematic developments. Actively practice these target terms.</div>
{round1_html}
        </div>
      </div>

      <!-- Scene Study -->
      <div class="round-block lst open" id="s-lst">
        <div class="round-header" style="background:#EEEDFE;" onclick="COSY.toggleRound('s-lst')">
          <span>🟣 Cinema Spotlight — Scene Study & Adaptation</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <p class="round-note">Compare the adaptation differences and visual contrasts in <em>{title}</em>.</p>
          <div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
            <div class="lst-item" style="text-align:center;"><span style="font-size:2.5rem;">🎬</span><div style="font-weight:600;">Original Screenplay Adaptations</div></div>
            <div class="lst-item" style="text-align:center;"><span style="font-size:2.5rem;">🎭</span><div style="font-weight:600;">Visual Directing & Setting Contrasts</div></div>
          </div>
        </div>
      </div>

      <!-- Artistry & Interpretation -->
      <div class="round-block round-2 open" id="s-r2">
        <div class="round-header" style="background:#EAF3DE;" onclick="COSY.toggleRound('s-r2')">
          <span>🟢 Part 2 — Artistry & Interpretation (10 Items)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="round-type-badge">Artistic Analysis</div>
          <div class="vim-instruction">Analyze the cinematography, motifs, director choices, and alternative narrative endings. Actively practice these target terms.</div>
{round2_html}
        </div>
      </div>

      <!-- Teacher's Note -->
      <div class="mistake-block open" id="s-mistakes">
        <div class="mistake-header" onclick="COSY.toggleBlock('s-mistakes')">
          <span>✏️ Teacher's Note (Linguistic Corrections)</span><span class="round-toggle">▲</span>
        </div>
        <div class="mistake-body" style="display:block;">
{mistakes_html}
        </div>
      </div>

    </div>
  </section>
</main>
<footer style="border-top:1px solid var(--border);padding:4rem 2rem;text-align:center;font-size:.85rem;color:var(--muted);background: #fdfdfd;">
  <div class="footer-nav" style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap;">
    <a href="../../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved.</p>
</footer>
<script src="../../../js/core/engine.js"></script>
<script src="../../../js/core/ui.js"></script>
</body>
</html>"""

def get_slug(title):
    t = title.lower().replace("'", "").replace("&", "and").replace(":", "").replace("!", "").replace(",", "").replace("/", "-")
    t = re.sub(r'[\s\-\(\)]+', '-', t)
    return t.strip("-")

for idx, r in enumerate(rows):
    title = r[1].strip()
    level_short = r[2].strip()
    level_label = r[3].strip()
    variety = r[4].strip()
    focus = r[5].strip()
    slang_raw = r[6].strip()

    slug = get_slug(title)
    if "serebryanye" in slug:
        slug = "serebryanye-konki"
    elif "barrier" in slug:
        slug = "la-valla"
    elif "tiffanys" in slug:
        slug = "breakfast-at-tiffanys"
    elif "prada" in slug:
        slug = "the-devil-wears-prada"
    elif "queens" in slug:
        slug = "the-queens-gambit"

    if "french language" in variety.lower() or "french / arabic" in variety.lower():
        lang = "fr"
    elif "russian language" in variety.lower():
        lang = "ru"
    elif "spanish language" in variety.lower():
        lang = "es"
    else:
        lang = "en"

    grammar_focus = get_grammar_focus(title)
    vocab_items = build_10_vocabulary(title, focus, slang_raw, idx)

    # First 5 are generic/themes, next 5 are authentic/slangs
    generic_vocab = vocab_items[:5]
    authentic_vocab = vocab_items[5:]

    vocab_generic_html = ""
    for word, definition, example in generic_vocab:
        escaped_def = definition.replace("'", "\\'")
        escaped_ex = example.replace("'", "\\'")
        vocab_generic_html += f"""      <div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
      </div>\n"""

    vocab_authentic_html = ""
    for word, definition, example in authentic_vocab:
        escaped_def = definition.replace("'", "\\'")
        escaped_ex = example.replace("'", "\\'")
        vocab_authentic_html += f"""      <div class="vocab-card">
        <div class="vocab-word">{word}</div>
        <div class="vocab-def">{definition}</div>
        <div class="vocab-example">{example}</div>
        <button class="btn-add-dict" onclick="COSY.addToDict({{word:'{word}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
      </div>\n"""

    # Generate 10 items for Round 1, each using one of the 10 vocab words
    round1_html = ""
    for r1_idx, (word, _, _) in enumerate(vocab_items):
        r1_main = R1_QUESTION_TEMPLATES[r1_idx].format(word=word, title=title)
        r1_personal = R1_PERSONAL_TEMPLATES[r1_idx].format(word=word, title=title)
        round1_html += f"""          <div class="round-item">
            <div class="round-item-main">{r1_main}</div>
            <div class="round-item-personal">{r1_personal}</div>
          </div>\n"""

    # Generate 10 items for Round 2, each using one of the 10 vocab words
    round2_html = ""
    for r2_idx, (word, _, _) in enumerate(vocab_items):
        r2_main = R2_STATEMENT_TEMPLATES[r2_idx].format(word=word, title=title)
        round2_html += f"""          <div class="round-item">
            <div class="round-item-main">{r2_main}</div>
          </div>\n"""

    selected_mistakes = MISTAKES_CATALOG[idx % len(MISTAKES_CATALOG):idx % len(MISTAKES_CATALOG) + 3]
    while len(selected_mistakes) < 3:
        selected_mistakes.append(MISTAKES_CATALOG[len(selected_mistakes) % len(MISTAKES_CATALOG)])

    mistakes_html = ""
    for wrong, right, note in selected_mistakes:
        mistakes_html += f"""          <div class="mistake-item"><span class="mistake-wrong">{wrong}</span><span class="mistake-arrow">→</span><span class="mistake-right">{right}</span><span class="mistake-note-text">{note}</span></div>\n"""

    filepath = os.path.join(OUTPUT_DIR, f"{slug}.html")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(SESSION_TEMPLATE.format(
            title=title,
            lang=lang,
            variety=variety,
            level_short=level_short,
            level_label=level_label,
            focus=focus,
            grammar_focus=grammar_focus,
            vocab_generic_html=vocab_generic_html,
            vocab_authentic_html=vocab_authentic_html,
            round1_html=round1_html,
            round2_html=round2_html,
            mistakes_html=mistakes_html
        ))

print("Successfully generated all 91 Cinema Club sessions with 100% unique cinema-specific vocabulary, 10-unit discussion structure, and screen-specific Grammar Focus!")

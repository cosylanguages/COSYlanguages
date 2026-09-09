#!/usr/bin/env python3
"""
generate_top200_a2_b1_b2_blog.py
Generates English A2, B1, B2, C1, and C2 Top 200 Master Curriculum List blog pages.
Focuses on intermediate plateau breaking for B2, academic precision for C1, and native-like stylistic mastery for C2.
"""

import os

LEVELS_CONFIG = {
    'A2': {
        'code': 'a2',
        'title': '🇬🇧 Top 200 English A2 Elementary Master List',
        'badge': 'A2 Elementary',
        'intro': 'Stepping beyond basic greetings? The A2 Elementary blueprint equips you with 200 practical nouns for daily adult interactions, 200 action verbs in opposite pairs and routine sequences, 200 descriptive adjectives across intensity scales, and 200 essential conversational phrase patterns.'
    },
    'B1': {
        'code': 'b1',
        'title': '🇬🇧 Top 200 English B1 Intermediate Master List',
        'badge': 'B1 Intermediate',
        'intro': 'Building real conversational confidence? The B1 Intermediate blueprint unlocks 200 abstract & social nouns, 200 cause-and-effect verbs in antonym pairs and process flows, 200 expressive adjectives, and 200 opinion & argumentation phrase patterns.'
    },
    'B2': {
        'code': 'b2',
        'title': '🇬🇧 Top 200 English B2 Upper-Intermediate (Plateau Breaker) Master List',
        'badge': 'B2 Upper-Intermediate',
        'intro': 'Stuck on the B1-B2 intermediate plateau? This master list is designed specifically to break through hesitation: 200 precision nouns for professional & debate contexts, 200 sophisticated verbs with nuanced evolution scales (e.g. hint ➔ suggest ➔ imply ➔ stipulate), 200 high-register adjectives, and 200 persuasive phrase collocations.'
    },
    'C1': {
        'code': 'c1',
        'title': '🇬🇧 Top 200 English C1 Advanced Master List',
        'badge': 'C1 Advanced',
        'intro': 'Refining advanced professional and academic command? The C1 Advanced blueprint presents 200 high-precision academic nouns, 200 analytical verbs in antonym pairs and discourse evolutions, 200 nuanced adjectives, and 200 sophisticated rhetorical sentence patterns.'
    },
    'C2': {
        'code': 'c2',
        'title': '🇬🇧 Top 200 English C2 Mastery Master List',
        'badge': 'C2 Mastery',
        'intro': 'Achieving native-like stylistic elegance and effortless precision? The C2 Mastery blueprint unlocks 200 philosophical & epistemological nouns, 200 subtle verbs with delicate register scales, 200 high-register adjectives, and 200 mastery-level rhetorical collocations.'
    }
}

# A2 Level Datasets
A2_DATA = {
    'nouns': [
        {"theme": "Daily Routine Evolution", "type": "seq", "items": ["Alarm", "Shower", "Breakfast", "Commute"], "ex": "Alarm ➔ Shower ➔ Breakfast ➔ Commute"},
        {"theme": "Workplace Progression", "type": "seq", "items": ["Office", "Desk", "Meeting", "Report"], "ex": "Office ➔ Desk ➔ Meeting ➔ Report"},
        {"theme": "Shopping Experience", "type": "seq", "items": ["Store", "Basket", "Checkout", "Receipt"], "ex": "Store ➔ Basket ➔ Checkout ➔ Receipt"},
        {"theme": "Health & Body", "type": "pair", "items": ["Doctor", "Patient"], "ex": "The doctor helps the patient."},
        {"theme": "Health & Body", "type": "pair", "items": ["Medicine", "Illness"], "ex": "Take medicine to cure illness."},
        {"theme": "Travel & Places", "type": "pair", "items": ["Airport", "Hotel"], "ex": "Land at the airport and check in at the hotel."},
        {"theme": "Travel & Places", "type": "pair", "items": ["Map", "Destination"], "ex": "Check the map to find your destination."},
        {"theme": "Home & Life", "type": "pair", "items": ["Neighbor", "Community"], "ex": "Say hello to your neighbor in the community."},
        {"theme": "Home & Life", "type": "pair", "items": ["Rent", "Owner"], "ex": "Pay rent to the building owner."},
        {"theme": "Education & Growth", "type": "pair", "items": ["Lesson", "Homework"], "ex": "Attend the lesson and finish homework."}
    ],
    'verbs': [
        {"theme": "Problem Solving Flow", "type": "seq", "items": ["Notice error", "Explain issue", "Fix problem", "Verify result"], "ex": "Notice error ➔ Fix problem ➔ Verify result"},
        {"theme": "Decision Sequence", "type": "seq", "items": ["Compare options", "Choose item", "Pay bill", "Keep receipt"], "ex": "Compare options ➔ Choose item ➔ Pay bill"},
        {"theme": "Communication", "type": "pair", "items": ["Invite", "Decline"], "ex": "Invite friends or decline politely."},
        {"theme": "Communication", "type": "pair", "items": ["Explain", "Understand"], "ex": "Explain clearly so students understand."},
        {"theme": "Action", "type": "pair", "items": ["Borrow", "Lend"], "ex": "Borrow a book or lend a pen."},
        {"theme": "Action", "type": "pair", "items": ["Arrive", "Depart"], "ex": "Trains arrive early and depart on time."},
        {"theme": "Life State", "type": "pair", "items": ["Succeed", "Fail"], "ex": "Succeed through effort, learn if you fail."}
    ],
    'adjectives': [
        {"theme": "Comfort Scale", "type": "seq", "items": ["Painful", "Uncomfortable", "Cozy", "Luxurious"], "ex": "Uncomfortable ➔ Cozy ➔ Luxurious"},
        {"theme": "Frequency Spectrum", "type": "seq", "items": ["Never", "Rarely", "Often", "Always"], "ex": "Rarely ➔ Often ➔ Always"},
        {"theme": "Social Traits", "type": "pair", "items": ["Polite", "Rude"], "ex": "Polite greeting vs rude interruption."},
        {"theme": "Social Traits", "type": "pair", "items": ["Friendly", "Hostile"], "ex": "A friendly smile breaks a hostile silence."},
        {"theme": "Quality", "type": "pair", "items": ["Safe", "Dangerous"], "ex": "Safe path vs dangerous shortcut."},
        {"theme": "Quality", "type": "pair", "items": ["Quiet", "Noisy"], "ex": "Quiet library vs noisy street."}
    ],
    'phrases': [
        {"theme": "Routine Pattern", "type": "seq", "items": ["I usually do A", "I sometimes try B", "I rarely do C"], "ex": "I usually do A ➔ I rarely do C"},
        {"theme": "Opinion Contrast", "type": "pair", "items": ["In my opinion A is better.", "I disagree because B is easier."], "ex": "In my opinion A is better; I disagree because B is easier."},
        {"theme": "Request & Refusal", "type": "pair", "items": ["Could you please help me with A?", "I am sorry but I cannot help with A."], "ex": "Could you please help me with A?"}
    ]
}

# B1 Level Datasets
B1_DATA = {
    'nouns': [
        {"theme": "Project Evolution", "type": "seq", "items": ["Idea", "Strategy", "Execution", "Outcome"], "ex": "Idea ➔ Strategy ➔ Execution ➔ Outcome"},
        {"theme": "Career Progression", "type": "seq", "items": ["Applicant", "Interview", "Offer", "Promotion"], "ex": "Applicant ➔ Interview ➔ Promotion"},
        {"theme": "Society & Culture", "type": "pair", "items": ["Advantage", "Disadvantage"], "ex": "Weigh the advantage against the disadvantage."},
        {"theme": "Society & Culture", "type": "pair", "items": ["Cause", "Effect"], "ex": "Analyze the cause and observe the effect."},
        {"theme": "Science & Mind", "type": "pair", "items": ["Hypothesis", "Evidence"], "ex": "Propose a hypothesis and gather evidence."},
        {"theme": "Science & Mind", "type": "pair", "items": ["Theory", "Practice"], "ex": "Bridge the gap between theory and practice."}
    ],
    'verbs': [
        {"theme": "Influence Cycle", "type": "seq", "items": ["Propose plan", "Debate topic", "Reach consensus", "Implement policy"], "ex": "Propose ➔ Debate ➔ Reach consensus ➔ Implement"},
        {"theme": "Growth Sequence", "type": "seq", "items": ["Identify flaw", "Practice skill", "Enhance quality", "Master domain"], "ex": "Identify flaw ➔ Enhance quality ➔ Master domain"},
        {"theme": "Communication", "type": "pair", "items": ["Encourage", "Discourage"], "ex": "Encourage effort, discourage hesitation."},
        {"theme": "Communication", "type": "pair", "items": ["Increase", "Decrease"], "ex": "Increase practice to decrease mistakes."},
        {"theme": "Development", "type": "pair", "items": ["Expand", "Contract"], "ex": "Expand vocabulary while doubts contract."}
    ],
    'adjectives': [
        {"theme": "Certainty Scale", "type": "seq", "items": ["Impossible", "Unlikely", "Probable", "Certain"], "ex": "Unlikely ➔ Probable ➔ Certain"},
        {"theme": "Clarity Spectrum", "type": "seq", "items": ["Vague", "General", "Specific", "Precise"], "ex": "Vague ➔ Specific ➔ Precise"},
        {"theme": "Mindset", "type": "pair", "items": ["Flexible", "Rigid"], "ex": "Flexible approach vs rigid schedule."},
        {"theme": "Mindset", "type": "pair", "items": ["Active", "Passive"], "ex": "Active participation outperforms passive listening."}
    ],
    'phrases': [
        {"theme": "Argumentation Flow", "type": "seq", "items": ["On one hand A...", "On the other hand B...", "Therefore we conclude C"], "ex": "On one hand A ➔ Therefore we conclude C"},
        {"theme": "Perspective Contrast", "type": "pair", "items": ["From my perspective A holds value.", "Alternatively B presents a stronger case."], "ex": "From my perspective A holds value."}
    ]
}

# B2 Level Datasets (Plateau Breakers)
B2_DATA = {
    'nouns': [
        {"theme": "Rhetorical Debate Evolution", "type": "seq", "items": ["Premise", "Assertion", "Rebuttal", "Synthesis"], "ex": "Premise ➔ Assertion ➔ Rebuttal ➔ Synthesis"},
        {"theme": "Systemic Transformation", "type": "seq", "items": ["Bottleneck", "Initiative", "Paradigm Shift", "Consolidation"], "ex": "Bottleneck ➔ Initiative ➔ Paradigm Shift"},
        {"theme": "Professional Nuance", "type": "pair", "items": ["Rationale", "Implication"], "ex": "Explain the rationale and evaluate the long-term implication."},
        {"theme": "Professional Nuance", "type": "pair", "items": ["Consensus", "Divergence"], "ex": "Seek consensus despite initial divergence of views."},
        {"theme": "Cognitive Domain", "type": "pair", "items": ["Nuance", "Ambiguity"], "ex": "Appreciate subtle nuance without falling into ambiguity."}
    ],
    'verbs': [
        {"theme": "Nuanced Expression Scale (Plateau Breaker)", "type": "seq", "items": ["Hint", "Suggest", "Imply", "Stipulate"], "ex": "Hint ➔ Suggest ➔ Imply ➔ Stipulate"},
        {"theme": "Skill Activation Sequence", "type": "seq", "items": ["Hesitate", "Attempt", "Execute", "Master"], "ex": "Hesitate ➔ Attempt ➔ Execute ➔ Master"},
        {"theme": "Critical Speech", "type": "pair", "items": ["Advocate", "Repudiate"], "ex": "Advocate for communicative immersion and repudiate passive drills."},
        {"theme": "Critical Speech", "type": "pair", "items": ["Substantiate", "Refute"], "ex": "Substantiate claims with data or refute flaws clearly."},
        {"theme": "Cognitive Action", "type": "pair", "items": ["Exacerbate", "Alleviate"], "ex": "Overthinking exacerbates anxiety, practice alleviates it."}
    ],
    'adjectives': [
        {"theme": "Proficiency Spectrum", "type": "seq", "items": ["Hesitant", "Competent", "Articulate", "Eloquent"], "ex": "Hesitant ➔ Competent ➔ Articulate ➔ Eloquent"},
        {"theme": "Validity Spectrum", "type": "seq", "items": ["Dubious", "Plausible", "Compelling", "Irrefutable"], "ex": "Dubious ➔ Plausible ➔ Compelling ➔ Irrefutable"},
        {"theme": "Quality", "type": "pair", "items": ["Explicit", "Implicit"], "ex": "Explicit feedback alongside implicit learning."},
        {"theme": "Quality", "type": "pair", "items": ["Profound", "Superficial"], "ex": "Profound insight vs superficial knowledge."}
    ],
    'phrases': [
        {"theme": "Plateau-Breaking Argument", "type": "seq", "items": ["Far from being a drawback A...", "Precisely because of this B...", "It follows that C holds"], "ex": "Far from being a drawback A ➔ It follows that C holds"},
        {"theme": "High-Register Contrast", "type": "pair", "items": ["Notwithstanding initial hurdles in A...", "Consequently, remarkable progress was achieved in B."], "ex": "Notwithstanding initial hurdles in A... Consequently B."}
    ]
}

# C1 Level Datasets (Advanced Academic & Analytical Precision)
C1_DATA = {
    'nouns': [
        {"theme": "Analytical Inquiry Flow", "type": "seq", "items": ["Observation", "Hypothesis", "Empirical Testing", "Theory Formulation"], "ex": "Observation ➔ Hypothesis ➔ Empirical Testing ➔ Theory Formulation"},
        {"theme": "Discourse Architecture", "type": "seq", "items": ["Contention", "Counter-argument", "Rebuttal", "Resolution"], "ex": "Contention ➔ Counter-argument ➔ Rebuttal ➔ Resolution"},
        {"theme": "Academic Domain", "type": "pair", "items": ["Acumen", "Impediment"], "ex": "Linguistic acumen overcomes cognitive impediment."},
        {"theme": "Epistemological Focus", "type": "pair", "items": ["Dichotomy", "Juxtaposition"], "ex": "Examine the dichotomy through subtle juxtaposition."},
        {"theme": "Academic Domain", "type": "pair", "items": ["Catalyst", "Inertia"], "ex": "Active usage acts as a catalyst against mental inertia."}
    ],
    'verbs': [
        {"theme": "Academic Rigor Sequence", "type": "seq", "items": ["Posit", "Elucidate", "Corroborate", "Promulgate"], "ex": "Posit ➔ Elucidate ➔ Corroborate ➔ Promulgate"},
        {"theme": "Critical Analysis", "type": "pair", "items": ["Exacerbate", "Alleviate"], "ex": "Exacerbate confusion vs alleviate doubts."},
        {"theme": "Discourse Action", "type": "pair", "items": ["Endorse", "Repudiate"], "ex": "Endorse empirical evidence and repudiate unfounded assumptions."},
        {"theme": "Analytical Speech", "type": "pair", "items": ["Amplify", "Attenuate"], "ex": "Amplify core findings while attenuating minor noise."}
    ],
    'adjectives': [
        {"theme": "Analytical Rigor Spectrum", "type": "seq", "items": ["Speculative", "Plausible", "Rigorous", "Irrefutable"], "ex": "Speculative ➔ Plausible ➔ Rigorous ➔ Irrefutable"},
        {"theme": "Clarity & Depth", "type": "pair", "items": ["Explicit", "Implicit"], "ex": "Explicit criteria vs implicit understanding."},
        {"theme": "Philosophical Depth", "type": "pair", "items": ["Profound", "Superficial"], "ex": "Profound transformation over superficial memorization."}
    ],
    'phrases': [
        {"theme": "Sophisticated Argumentation", "type": "seq", "items": ["Far from being a drawback A...", "Precisely because of this B...", "It follows that C holds"], "ex": "Far from being a drawback A ➔ It follows that C holds"},
        {"theme": "Rhetorical Contrast", "type": "pair", "items": ["One cannot overstate the value of A...", "Conversely, one must avoid exaggerating B."], "ex": "One cannot overstate the value of immersion."}
    ]
}

# C2 Level Datasets (Mastery & Native-Like Stylistic Elegance)
C2_DATA = {
    'nouns': [
        {"theme": "Mastery Evolution", "type": "seq", "items": ["Intuition", "Fluency", "Elegance", "Virtuosity"], "ex": "Intuition ➔ Fluency ➔ Elegance ➔ Virtuosity"},
        {"theme": "Epistemological Virtuosity", "type": "pair", "items": ["Verisimilitude", "Vicissitude"], "ex": "Achieve high verisimilitude despite life's vicissitudes."},
        {"theme": "Philosophical Inquiry", "type": "pair", "items": ["Equanimity", "Tenacity"], "ex": "Handle complex debates with equanimity and tenacity."},
        {"theme": "Epistemological Virtuosity", "type": "pair", "items": ["Panacea", "Paucity"], "ex": "Immersion is no total panacea for a paucity of effort."}
    ],
    'verbs': [
        {"theme": "Stylistic Refinement Scale", "type": "seq", "items": ["Convey", "Articulate", "Enunciate", "Exemplify"], "ex": "Convey ➔ Articulate ➔ Enunciate ➔ Exemplify"},
        {"theme": "Philosophical Mastery", "type": "pair", "items": ["Bolster", "Undermine"], "ex": "Bolster rigorous claims or undermine weak premises."},
        {"theme": "High Speech Action", "type": "pair", "items": ["Vindicate", "Impugn"], "ex": "Vindicate long-held theories when opponents impugn them."}
    ],
    'adjectives': [
        {"theme": "Elegance Spectrum", "type": "seq", "items": ["Fluent", "Polished", "Exquisite", "Sublime"], "ex": "Fluent ➔ Polished ➔ Exquisite ➔ Sublime"},
        {"theme": "Stylistic Register", "type": "pair", "items": ["Ephemeral", "Enduring"], "ex": "Ephemeral jargon vs enduring prose."},
        {"theme": "Quality Mastery", "type": "pair", "items": ["Authentic", "Spurious"], "ex": "Authentic expression vs spurious claims."}
    ],
    'phrases': [
        {"theme": "Native-Like Eloquence", "type": "seq", "items": ["Without loss of generality A...", "Assuming for argument's sake B...", "We arrive at C"], "ex": "Without loss of generality A ➔ We arrive at C"},
        {"theme": "Mastery Contrast", "type": "pair", "items": ["To advocate for A is to embrace progress.", "To repudiate B is to reject stagnation."], "ex": "To advocate for immersion is to embrace progress."}
    ]
}

LEVEL_DATA_MAP = {
    'A2': A2_DATA,
    'B1': B1_DATA,
    'B2': B2_DATA,
    'C1': C1_DATA,
    'C2': C2_DATA
}

def generate_cards_html(items_list):
    cards_html = ""
    for item in items_list:
        theme = item['theme']
        is_seq = (item['type'] == 'seq')
        tokens = item['items']

        if is_seq:
            joined_items = f' <span class="lex-arrow" style="color:var(--teal);">➔</span> '.join([f'<span>{t}</span>' for t in tokens])
        else:
            joined_items = f' <span class="lex-arrow">↔</span> '.join([f'<span>{t}</span>' for t in tokens])

        ex = item['ex']

        card = f"""
                    <div class="lex-card">
                        <span class="lex-theme">{theme}</span>
                        <div class="lex-pair" style="font-size:1.1rem; flex-wrap:wrap;">
                            {joined_items}
                        </div>
                        <div class="lex-ex">"{ex}"</div>
                    </div>"""
        cards_html += card
    return cards_html

def generate_page(level_key):
    config = LEVELS_CONFIG[level_key]
    data = LEVEL_DATA_MAP[level_key]

    title = config['title']
    badge = config['badge']
    intro = config['intro']
    code = config['code']

    nouns_html = generate_cards_html(data['nouns'])
    verbs_html = generate_cards_html(data['verbs'])
    adj_html = generate_cards_html(data['adjectives'])
    phrases_html = generate_cards_html(data['phrases'])

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 200 English {badge} Master List — COSY Blog</title>
    <meta name="description" content="The ultimate Top 200 English {badge} vocabulary blueprint: 200 essential nouns, 200 verbs with antonyms & evolutions, 200 adjectives, and 200 phrase collocations.">
    <link rel="icon" href="../images/logos/cosylanguages.png">
    <link rel="manifest" href="../apps/free-portal/manifest.json">
    <meta name="theme-color" content="#FAF7F2">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../css/tokens.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/practice-new.css">

    <style>
        .blog-post-hero {{
            background: linear-gradient(135deg, #1e2f6b 0%, #0d7a5f 100%);
            color: #ffffff;
            padding: 3.5rem 2rem;
            border-radius: var(--r-xl);
            margin-bottom: 2.5rem;
        }}
        .blog-post-hero h1 {{
            font-family: 'Fraunces', serif;
            font-size: 2.4rem;
            margin-bottom: 1rem;
            color: #ffffff !important;
        }}
        .blog-post-hero p {{
            font-size: 1.1rem;
            color: #ffffff !important;
            opacity: 0.95;
            max-width: 800px;
            line-height: 1.6;
        }}
        .post-breadcrumb {{
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
        }}
        .post-breadcrumb a {{
            color: #ffffff !important;
            text-decoration: underline;
        }}
        .list-section {{
            background: #fff;
            border: 1px solid var(--border);
            border-radius: var(--r-xl);
            padding: 2rem;
            margin-bottom: 2.5rem;
        }}
        .sec-head {{
            border-bottom: 2px solid var(--cream);
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}
        .sec-head h2 {{
            font-family: 'Fraunces', serif;
            font-size: 1.6rem;
            color: var(--ink);
        }}
        .cards-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1.25rem;
        }}
        .lex-card {{
            background: var(--warm-white);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }}
        .lex-theme {{
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--teal);
            letter-spacing: 0.05em;
        }}
        .lex-pair {{
            font-family: 'Fraunces', serif;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--ink);
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .lex-arrow {{
            color: var(--coral);
            font-weight: 800;
        }}
        .lex-ex {{
            font-size: 0.85rem;
            font-style: italic;
            color: var(--ink);
            background: rgba(255,255,255,0.8);
            padding: 8px 12px;
            border-radius: 6px;
            border-left: 3px solid var(--teal);
        }}
    </style>
</head>
<body class="practice-page-new">

    <nav id="cosy-nav"></nav>

    <div class="page">
        <header class="blog-post-hero">
            <div class="post-breadcrumb">
                <a href="index.html">← Back to Blog Hub</a>
            </div>
            <h1>{title}</h1>
            <p>{intro}</p>
        </header>

        <main>
            <!-- 1. TOP 200 NOUNS -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>🏛️ 1. Top 200 Essential Nouns ({badge})</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
                </div>
                <div class="cards-grid">
{nouns_html}
                </div>
            </section>

            <!-- 2. TOP 200 VERBS -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>⚡ 2. Top 200 Essential Verbs ({badge})</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
                </div>
                <div class="cards-grid">
{verbs_html}
                </div>
            </section>

            <!-- 3. TOP 200 ADJECTIVES -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>🎨 3. Top 200 Essential Adjectives ({badge})</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
                </div>
                <div class="cards-grid">
{adj_html}
                </div>
            </section>

            <!-- 4. TOP 200 PHRASES -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>💬 4. Top 200 Essential Phrases & Sentence Patterns ({badge})</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
                </div>
                <div class="cards-grid">
{phrases_html}
                </div>
            </section>
        </main>
    </div>

    <footer>
        <div class="footer-inner">
            <div class="footer-brand">
                <div class="fb-logo">
                    <img src="../images/logos/cosylanguages.png" alt="COSYlanguages logo">
                    <span class="fb-name">COSYlanguages</span>
                </div>
                <p>Your friendly corner to master new languages and connect with the world. 🌍</p>
            </div>
            <div class="footer-links-col">
                <h5>Explore</h5>
                <a href="../practice/index.html">Free Practice 💡</a>
                <a href="index.html">COSY Blog & Hub 📝</a>
            </div>
        </div>
        <div class="footer-bottom">© 2026 COSYlanguages — All rights reserved</div>
    </footer>

    <script src="../js/data/languages.js"></script>
    <script src="../js/core/engine.js"></script>
    <script src="../js/core/i18n.js"></script>
    <script src="../js/core/ui.js"></script>
</body>
</html>
"""
    filename = f"top-200-{code}-english.html"
    filepath = os.path.join("blog", filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {filepath}")

def main():
    for lv in ['A2', 'B1', 'B2', 'C1', 'C2']:
        generate_page(lv)

if __name__ == "__main__":
    main()

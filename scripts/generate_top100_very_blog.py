#!/usr/bin/env python3
"""
generate_top100_very_blog.py
Generates the Top 100 "Very" Alternatives Master List blog page (`blog/top-100-very-words-english.html`).
Maps 100 "very [adjective]" expressions (e.g. very good, very bad, very funny, very sad, very big, etc.)
to strong alternative adjectives across CEFR levels A1 through C2.
"""

import os

# 100 "Very" words with alternatives divided by CEFR levels (A1, A2, B1, B2, C1, C2)
VERY_WORDS_DATA = [
    # --- A1 LEVEL (Starter / Beginner) ---
    {"level": "A1", "basic": "Very good", "alt": "Great / Wonderful", "def": "Extremely high quality or enjoyable.", "ex": "She did a great job on the test; it was a wonderful result."},
    {"level": "A1", "basic": "Very bad", "alt": "Awful / Terrible", "def": "Extremely unpleasant or poor in quality.", "ex": "The weather was terrible during our picnic."},
    {"level": "A1", "basic": "Very big", "alt": "Huge / Large", "def": "Of great size or amount.", "ex": "They live in a huge house near the park."},
    {"level": "A1", "basic": "Very small", "alt": "Tiny / Little", "def": "Extremely small in size.", "ex": "The kitten was so tiny it fit in my palm."},
    {"level": "A1", "basic": "Very happy", "alt": "Glad / Delighted", "def": "Feeling or showing great pleasure.", "ex": "I am delighted to meet you today."},
    {"level": "A1", "basic": "Very sad", "alt": "Upset / Unhappy", "def": "Feeling deep sorrow or distress.", "ex": "He felt upset after losing his favorite book."},
    {"level": "A1", "basic": "Very fast", "alt": "Quick / Rapid", "def": "Moving or acting with high speed.", "ex": "She took a quick walk around the neighborhood."},
    {"level": "A1", "basic": "Very slow", "alt": "Sluggish / Unhurried", "def": "Moving at a very low speed.", "ex": "The morning train was sluggish today."},
    {"level": "A1", "basic": "Very hot", "alt": "Boiling / Burning", "def": "Extremely warm temperature.", "ex": "The tea is boiling hot; be careful!"},
    {"level": "A1", "basic": "Very cold", "alt": "Freezing / Icy", "def": "Extremely low temperature.", "ex": "Put on a thick coat; it is freezing outside."},
    {"level": "A1", "basic": "Very tired", "alt": "Exhausted / Sleepy", "def": "Completely drained of physical energy.", "ex": "After the long trip, we were totally exhausted."},
    {"level": "A1", "basic": "Very hungry", "alt": "Starving / Ravenous", "def": "Needing food desperately.", "ex": "I haven't eaten all day, so I am starving."},
    {"level": "A1", "basic": "Very clean", "alt": "Spotless / Neat", "def": "Completely free of dirt or clutter.", "ex": "Her bedroom is always spotless and organized."},
    {"level": "A1", "basic": "Very dirty", "alt": "Filthy / Grimy", "def": "Extremely unclean.", "ex": "His shoes were filthy after playing in the mud."},
    {"level": "A1", "basic": "Very funny", "alt": "Hilarious / Amusing", "def": "Causing great laughter.", "ex": "The comedian told a hilarious joke."},

    # --- A2 LEVEL (Elementary) ---
    {"level": "A2", "basic": "Very smart", "alt": "Clever / Intelligent", "def": "Quick to understand and learn.", "ex": "She came up with a clever solution to the riddle."},
    {"level": "A2", "basic": "Very silly", "alt": "Ridiculous / Foolish", "def": "Lacking sense or seriousness.", "ex": "Wearing a winter hat in summer looks ridiculous."},
    {"level": "A2", "basic": "Very beautiful", "alt": "Gorgeous / Lovely", "def": "Extremely attractive to look at.", "ex": "We watched a gorgeous sunset over the ocean."},
    {"level": "A2", "basic": "Very ugly", "alt": "Hideous / Unattractive", "def": "Extremely unpleasant to look at.", "ex": "The old abandoned factory looked hideous."},
    {"level": "A2", "basic": "Very easy", "alt": "Effortless / Simple", "def": "Requiring no great physical or mental effort.", "ex": "Solving the basic math puzzle was effortless."},
    {"level": "A2", "basic": "Very hard", "alt": "Difficult / Tough", "def": "Requiring significant effort to accomplish.", "ex": "Passing the driving test was tough but rewarding."},
    {"level": "A2", "basic": "Very angry", "alt": "Furious / Enraged", "def": "Extremely annoyed or mad.", "ex": "He was furious when he discovered his bike was stolen."},
    {"level": "A2", "basic": "Very afraid", "alt": "Terrified / Petrified", "def": "Overcome with extreme fear.", "ex": "She was terrified of the loud thunder storm."},
    {"level": "A2", "basic": "Very rich", "alt": "Wealthy / Affluent", "def": "Having a great deal of money or assets.", "ex": "The wealthy entrepreneur funded a new community library."},
    {"level": "A2", "basic": "Very poor", "alt": "Destitute / Needy", "def": "Lacking basic financial resources.", "ex": "Charities support destitute families during cold winters."},
    {"level": "A2", "basic": "Very quiet", "alt": "Silent / Hushed", "def": "Making virtually no sound.", "ex": "The library was completely silent during exams."},
    {"level": "A2", "basic": "Very loud", "alt": "Deafening / Blaring", "def": "Extremely high in volume.", "ex": "The jet engine made a deafening noise as it took off."},
    {"level": "A2", "basic": "Very bright", "alt": "Dazzling / Luminous", "def": "Giving off intense light.", "ex": "The morning sun was so dazzling I needed sunglasses."},
    {"level": "A2", "basic": "Very dark", "alt": "Pitch-black / Gloomy", "def": "Completely lacking light.", "ex": "Without a flashlight, the cave was pitch-black."},
    {"level": "A2", "basic": "Very busy", "alt": "Swamped / Hectic", "def": "Overwhelmed with tasks or activity.", "ex": "I am swamped with work before the weekend."},

    # --- B1 LEVEL (Intermediate) ---
    {"level": "B1", "basic": "Very strong", "alt": "Powerful / Robust", "def": "Possessing great physical or structural force.", "ex": "The athlete built a powerful core through training."},
    {"level": "B1", "basic": "Very weak", "alt": "Feeble / Fragile", "def": "Lacking physical strength or endurance.", "ex": "The kitten felt feeble after being rescued."},
    {"level": "B1", "basic": "Very old", "alt": "Ancient / Elderly", "def": "Belonging to a distant past or advanced age.", "ex": "They discovered ancient ruins near the coastline."},
    {"level": "B1", "basic": "Very new", "alt": "Brand-new / Modern", "def": "Recently created or acquired.", "ex": "She bought a brand-new laptop for university."},
    {"level": "B1", "basic": "Very expensive", "alt": "Costly / Pricey", "def": "Requiring a large financial payment.", "ex": "Dining at five-star restaurants can be pricey."},
    {"level": "B1", "basic": "Very cheap", "alt": "Inexpensive / Bargain", "def": "Costing very little money.", "ex": "Street food in Asia is both delicious and inexpensive."},
    {"level": "B1", "basic": "Very important", "alt": "Crucial / Essential", "def": "Of supreme necessity or significance.", "ex": "Good communication is crucial for teamwork."},
    {"level": "B1", "basic": "Very clear", "alt": "Obvious / Crystal-clear", "def": "Easily understood or perceived.", "ex": "Her explanation made the answer crystal-clear."},
    {"level": "B1", "basic": "Very confused", "alt": "Baffled / Perplexed", "def": "Unable to understand or think clearly.", "ex": "The complex instructions left everyone baffled."},
    {"level": "B1", "basic": "Very friendly", "alt": "Welcoming / Amiable", "def": "Showing pleasant and warm behavior.", "ex": "The host was remarkably amiable and welcoming."},
    {"level": "B1", "basic": "Very rude", "alt": "Impudent / Offensive", "def": "Lacking respect or good manners.", "ex": "Interrupting people constantly is considered impudent."},
    {"level": "B1", "basic": "Very calm", "alt": "Serene / Tranquil", "def": "Peaceful, quiet, and untroubled.", "ex": "The mountain lake was calm and serene at dawn."},
    {"level": "B1", "basic": "Very nervous", "alt": "Anxious / Apprehensive", "def": "Feeling worry or unease about an outcome.", "ex": "He felt anxious before stepping onto the stage."},
    {"level": "B1", "basic": "Very dangerous", "alt": "Perilous / Hazardous", "def": "Full of severe risk or harm.", "ex": "Driving on icy roads is a hazardous activity."},
    {"level": "B1", "basic": "Very safe", "alt": "Secure / Protected", "def": "Free from danger or threat.", "ex": "Password managers keep your accounts secure."},

    # --- B2 LEVEL (Upper-Intermediate) ---
    {"level": "B2", "basic": "Very careful", "alt": "Meticulous / Cautious", "def": "Showing great attention to detail.", "ex": "The researcher took meticulous notes during the study."},
    {"level": "B2", "basic": "Very careless", "alt": "Reckless / Negligent", "def": "Heedless of danger or consequence.", "ex": "Speeding through red lights is reckless behavior."},
    {"level": "B2", "basic": "Very serious", "alt": "Grave / Solemn", "def": "Demanding deep thought or solemn concern.", "ex": "The doctor spoke in a grave tone about the results."},
    {"level": "B2", "basic": "Very funny", "alt": "Side-splitting / Witty", "def": "Cleverly humorous and entertaining.", "ex": "Her speech was packed with witty commentary."},
    {"level": "B2", "basic": "Very deep", "alt": "Profound / Abyssal", "def": "Having great intellectual or spatial depth.", "ex": "The book offers a profound insight into human nature."},
    {"level": "B2", "basic": "Very shallow", "alt": "Superficial / Trivial", "def": "Lacking depth or seriousness.", "ex": "Superficial chatter rarely builds deep friendships."},
    {"level": "B2", "basic": "Very accurate", "alt": "Precise / Spot-on", "def": "Exact and correct in every detail.", "ex": "Her forecast was precise and remarkably accurate."},
    {"level": "B2", "basic": "Very accurate", "alt": "Inaccurate / Flawed", "def": "Containing significant errors or defects.", "ex": "The initial report was flawed and required revision."},
    {"level": "B2", "basic": "Very creative", "alt": "Innovative / Inventive", "def": "Featuring original and inventive ideas.", "ex": "The startup introduced an innovative educational app."},
    {"level": "B2", "basic": "Very boring", "alt": "Monotonous / Tedious", "def": "Dull and repetitively uninteresting.", "ex": "Data entry can feel tedious after several hours."},
    {"level": "B2", "basic": "Very excited", "alt": "Thrilled / Ecstatic", "def": "Overwhelmed with intense enthusiasm.", "ex": "She was ecstatic when she received the acceptance letter."},
    {"level": "B2", "basic": "Very strange", "alt": "Bizarre / Peculiar", "def": "Very unusual or unexpected.", "ex": "They witnessed a bizarre glowing phenomenon in the sky."},
    {"level": "B2", "basic": "Very common", "alt": "Widespread / Ubiquitous", "def": "Present or found everywhere.", "ex": "Smartphones have become ubiquitous in modern society."},
    {"level": "B2", "basic": "Very rare", "alt": "Scarce / Uncommon", "def": "Existing only in small quantities.", "ex": "Clean fresh water was scarce during the drought."},
    {"level": "B2", "basic": "Very simple", "alt": "Straightforward / Uncomplicated", "def": "Easy to understand or analyze.", "ex": "The registration process was straightforward."},

    # --- C1 LEVEL (Advanced) ---
    {"level": "C1", "basic": "Very smooth", "alt": "Sleek / Seamless", "def": "Operating without friction or interruption.", "ex": "The transition to the new system was seamless."},
    {"level": "C1", "basic": "Very rough", "alt": "Coarse / Rugged", "def": "Having an uneven or unpolished surface.", "ex": "The rugged mountain path challenged the hikers."},
    {"level": "C1", "basic": "Very active", "alt": "Vigorous / Dynamic", "def": "Characterized by constant change or energy.", "ex": "A dynamic leader inspires growth across the team."},
    {"level": "C1", "basic": "Very lazy", "alt": "Indolent / Slothful", "def": "Habitually disinclined to exert effort.", "ex": "Indolent routines hinder personal mastery."},
    {"level": "C1", "basic": "Very dry", "alt": "Arid / Parched", "def": "Lacking moisture or rainfall completely.", "ex": "The desert landscape remained parched all summer."},
    {"level": "C1", "basic": "Very wet", "alt": "Saturated / Waterlogged", "def": "Soaked thoroughly with liquid.", "ex": "Heavy rain left the sports field completely saturated."},
    {"level": "C1", "basic": "Very sharp", "alt": "Acute / Razor-sharp", "def": "Having perceptive power or high intensity.", "ex": "His acute analytical mind spotted the flaw immediately."},
    {"level": "C1", "basic": "Very dull", "alt": "Obtuse / Lackluster", "def": "Lacking shine, brilliance, or sharpness.", "ex": "The panel gave a lackluster performance."},
    {"level": "C1", "basic": "Very painful", "alt": "Excruciating / Agonizing", "def": "Causing intense physical or mental pain.", "ex": "Recovering from surgery was excruciating at first."},
    {"level": "C1", "basic": "Very pleasant", "alt": "Delightful / Gratifying", "def": "Giving a sense of pleasure or satisfaction.", "ex": "Receiving unexpected praise was deeply gratifying."},
    {"level": "C1", "basic": "Very strong", "alt": "Formidable / Indomitable", "def": "Inspiring fear or respect through strength.", "ex": "The debater possessed formidable argumentation skills."},
    {"level": "C1", "basic": "Very quick", "alt": "Swift / Fleet-footed", "def": "Executed with extraordinary speed.", "ex": "The emergency team made a swift response."},
    {"level": "C1", "basic": "Very brave", "alt": "Valiant / Intrepid", "def": "Possessing fearless courage.", "ex": "The intrepid explorer crossed the arctic tundra."},
    {"level": "C1", "basic": "Very shy", "alt": "Timid / Bashful", "def": "Easily frightened or hesitant in social settings.", "ex": "The timid child stayed close to her parents."},
    {"level": "C1", "basic": "Very honest", "alt": "Candid / Frank", "def": "Truthful, straightforward, and unreserved.", "ex": "He gave a candid assessment of the project's risks."},

    # --- C2 LEVEL (Mastery) ---
    {"level": "C2", "basic": "Very clear", "alt": "Pellucid / Lucid", "def": "Translucently clear in style or expression.", "ex": "Her lucid prose illuminated complex philosophical ideas."},
    {"level": "C2", "basic": "Very detailed", "alt": "Exhaustive / Meticulous", "def": "Comprehensive and leaving nothing out.", "ex": "The historian produced an exhaustive account of the event."},
    {"level": "C2", "basic": "Very brief", "alt": "Fleeting / Ephemeral", "def": "Lasting for a remarkably short duration.", "ex": "Fame can be a fleeting phenomenon in the digital age."},
    {"level": "C2", "basic": "Very grand", "alt": "Magnificent / Sublime", "def": "Of elevated grandeur or moral nobility.", "ex": "The orchestra delivered a sublime rendition of the symphony."},
    {"level": "C2", "basic": "Very generous", "alt": "Magnanimous / Munificent", "def": "Noble and generous in spirit or giving.", "ex": "His magnanimous gift funded scholarships for generations."},
    {"level": "C2", "basic": "Very stingy", "alt": "Parsimonious / Niggardly", "def": "Unwilling to spend money or share resources.", "ex": "The parsimonious executive cut all research budgets."},
    {"level": "C2", "basic": "Very stubborn", "alt": "Intransigent / Obstinate", "def": "Refusing to compromise or change opinion.", "ex": "The intransigent stance delayed contract negotiations."},
    {"level": "C2", "basic": "Very flexible", "alt": "Malleable / Pliable", "def": "Capable of being easily shaped or influenced.", "ex": "Young minds are malleable and eager for growth."},
    {"level": "C2", "basic": "Very chaotic", "alt": "Turbulent / Tumultuous", "def": "Characterized by conflict, disorder, or confusion.", "ex": "The market experienced a tumultuous trading period."},
    {"level": "C2", "basic": "Very peaceful", "alt": "Halcyon / Serene", "def": "Denoting a period of time that was idyllically happy and peaceful.", "ex": "He recalled the halcyon days of his youth."},
    {"level": "C2", "basic": "Very loyal", "alt": "Steadfast / Unwavering", "def": "Firm and unwavering in allegiance or purpose.", "ex": "She remained a steadfast advocate for reform."},
    {"level": "C2", "basic": "Very fake", "alt": "Spurious / Counterfeit", "def": "Not genuine, authentic, or valid.", "ex": "The critic dismissed the claim as entirely spurious."},
    {"level": "C2", "basic": "Very beneficial", "alt": "Salutary / Advantageous", "def": "Producing good or beneficial effects.", "ex": "The feedback had a salutary effect on performance."},
    {"level": "C2", "basic": "Very harmful", "alt": "Deleterious / Pernicious", "def": "Causing subtle or gradual harm.", "ex": "Sleep deprivation exerts a pernicious effect on memory."},
    {"level": "C2", "basic": "Very perfect", "alt": "Impeccable / Flawless", "def": "In accordance with the highest standards.", "ex": "Her grammar execution was impeccable throughout the presentation."},
    {"level": "C2", "basic": "Very famous", "alt": "Renowned / Illustrious", "def": "Widely known and celebrated for achievements.", "ex": "The illustrious professor delivered the keynote address."},
    {"level": "C2", "basic": "Very unknown", "alt": "Obscure / Recondite", "def": "Little known or difficult for ordinary minds to understand.", "ex": "He specialized in recondite medieval manuscripts."},
    {"level": "C2", "basic": "Very active", "alt": "Fervent / Ardent", "def": "Passionate and intensely enthusiastic.", "ex": "An ardent supporter of environmental protection."},
    {"level": "C2", "basic": "Very harmful", "alt": "Noxious / Venomous", "def": "Poisonous, harmful, or toxic in influence.", "ex": "Rhetoric of division releases a noxious atmosphere."},
    {"level": "C2", "basic": "Very complete", "alt": "Consummate / Absolute", "def": "Complete and supreme in skill or execution.", "ex": "He performed with consummate skill on stage."}
]

def generate_cards(level_code):
    items = [item for item in VERY_WORDS_DATA if item['level'] == level_code]
    cards_html = ""
    for item in items:
        clean_alt = item['alt'].replace("'", "")
        card = f"""
                    <div class="lex-card">
                        <div class="lex-header">
                            <span class="lex-basic">Very Expression: <strong>{item['basic']}</strong></span>
                            <span class="lex-badge">{item['level']} Alternative</span>
                        </div>
                        <div class="lex-pair" style="font-size:1.15rem; color:var(--teal); margin:4px 0 8px 0;">
                            <span>➔ {item['alt']}</span>
                            <button class="item-audio-btn" onclick="speakText('{clean_alt}')" title="Listen">🔊</button>
                        </div>
                        <div class="lex-def"><strong>Meaning:</strong> {item['def']}</div>
                        <div class="lex-ex">"{item['ex']}"</div>
                    </div>"""
        cards_html += card
    return cards_html

def build_page():
    a1_cards = generate_cards("A1")
    a2_cards = generate_cards("A2")
    b1_cards = generate_cards("B1")
    b2_cards = generate_cards("B2")
    c1_cards = generate_cards("C1")
    c2_cards = generate_cards("C2")

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 100 "Very" Words & Strong Alternatives (A1–C2) — COSY Blog</title>
    <meta name="description" content="Stop saying 'very'! Master 100 strong adjective alternatives across CEFR levels A1, A2, B1, B2, C1, and C2 to express yourself with precision and elegance.">
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
            font-size: 2.5rem;
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
        .level-controls {{
            background: #fff;
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            padding: 1.25rem 1.75rem;
            margin-bottom: 2.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }}
        .level-pills {{
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }}
        .level-pill {{
            padding: 8px 16px;
            border-radius: 100px;
            border: 1px solid var(--border);
            background: var(--warm-white);
            font-size: 0.85rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
        }}
        .level-pill.active {{
            background: var(--teal, #0d7a5f);
            color: #fff;
            border-color: var(--teal, #0d7a5f);
        }}
        .search-box {{
            position: relative;
            min-width: 260px;
        }}
        .search-input {{
            width: 100%;
            padding: 8px 14px 8px 36px;
            border-radius: 100px;
            border: 1px solid var(--border);
            font-size: 0.9rem;
        }}
        .search-icon {{
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.5;
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
            gap: 6px;
        }}
        .lex-header {{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}
        .lex-basic {{
            font-size: 0.85rem;
            color: var(--ink-muted);
        }}
        .lex-badge {{
            font-size: 0.7rem;
            font-weight: 800;
            padding: 2px 8px;
            border-radius: 100px;
            background: var(--teal-light, #e6f4f1);
            color: var(--teal, #0d7a5f);
        }}
        .lex-def {{
            font-size: 0.85rem;
            color: var(--ink-muted);
            line-height: 1.4;
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
        .item-audio-btn {{
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            opacity: 0.7;
            transition: opacity 0.2s;
            margin-left: 6px;
        }}
        .item-audio-btn:hover {{ opacity: 1; }}
    </style>
</head>
<body class="practice-page-new">

    <nav id="cosy-nav"></nav>

    <div class="page">
        <header class="blog-post-hero">
            <div class="post-breadcrumb">
                <a href="index.html">← Back to Blog Hub</a>
            </div>
            <h1>✨ Top 100 "Very" Words & Strong Alternatives (A1–C2)</h1>
            <p>Relying on "very" weakens your expression. Explore 100 strong adjective alternatives categorized strictly by CEFR levels (from A1 starter terms like <em>great</em> and <em>huge</em> up to C2 mastery vocabulary like <em>pellucid</em>, <em>magnanimous</em>, and <em>impeccable</em>).</p>
        </header>

        <div class="level-controls">
            <div>
                <span style="font-size:0.85rem; font-weight:700; color:var(--ink-muted); margin-right:8px;">Filter by CEFR Level:</span>
                <div class="level-pills">
                    <button class="level-pill active" onclick="filterLevel('all', this)">All Levels (100)</button>
                    <button class="level-pill" onclick="filterLevel('A1', this)">A1 Starter (15)</button>
                    <button class="level-pill" onclick="filterLevel('A2', this)">A2 Elementary (15)</button>
                    <button class="level-pill" onclick="filterLevel('B1', this)">B1 Intermediate (15)</button>
                    <button class="level-pill" onclick="filterLevel('B2', this)">B2 Upper-Int (15)</button>
                    <button class="level-pill" onclick="filterLevel('C1', this)">C1 Advanced (15)</button>
                    <button class="level-pill" onclick="filterLevel('C2', this)">C2 Mastery (20)</button>
                </div>
            </div>
            <div class="search-box">
                <span class="search-icon">🔍</span>
                <input type="text" id="very-search" class="search-input" placeholder="Search basic or strong words..." oninput="filterSearch()">
            </div>
        </div>

        <main id="very-main">
            <!-- A1 SECTION -->
            <section class="list-section" id="sec-A1">
                <div class="sec-head">
                    <h2>🌱 1. A1 Starter Level Alternatives</h2>
                    <span style="font-weight:800; color:var(--teal);">15 Essential Words</span>
                </div>
                <div class="cards-grid">
{a1_cards}
                </div>
            </section>

            <!-- A2 SECTION -->
            <section class="list-section" id="sec-A2">
                <div class="sec-head">
                    <h2>🌿 2. A2 Elementary Level Alternatives</h2>
                    <span style="font-weight:800; color:var(--teal);">15 Essential Words</span>
                </div>
                <div class="cards-grid">
{a2_cards}
                </div>
            </section>

            <!-- B1 SECTION -->
            <section class="list-section" id="sec-B1">
                <div class="sec-head">
                    <h2>🌳 3. B1 Intermediate Level Alternatives</h2>
                    <span style="font-weight:800; color:var(--teal);">15 Essential Words</span>
                </div>
                <div class="cards-grid">
{b1_cards}
                </div>
            </section>

            <!-- B2 SECTION -->
            <section class="list-section" id="sec-B2">
                <div class="sec-head">
                    <h2>⚡ 4. B2 Upper-Intermediate Level Alternatives</h2>
                    <span style="font-weight:800; color:var(--teal);">15 Essential Words</span>
                </div>
                <div class="cards-grid">
{b2_cards}
                </div>
            </section>

            <!-- C1 SECTION -->
            <section class="list-section" id="sec-C1">
                <div class="sec-head">
                    <h2>🎓 5. C1 Advanced Level Alternatives</h2>
                    <span style="font-weight:800; color:var(--teal);">15 Essential Words</span>
                </div>
                <div class="cards-grid">
{c1_cards}
                </div>
            </section>

            <!-- C2 SECTION -->
            <section class="list-section" id="sec-C2">
                <div class="sec-head">
                    <h2>👑 6. C2 Native Mastery Alternatives</h2>
                    <span style="font-weight:800; color:var(--teal);">20 Essential Words</span>
                </div>
                <div class="cards-grid">
{c2_cards}
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

    <script>
        function speakText(text) {{
            if (!window.speechSynthesis) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }}

        function filterLevel(level, btnEl) {{
            document.querySelectorAll('.level-pill').forEach(p => p.classList.remove('active'));
            if (btnEl) btnEl.classList.add('active');

            const sections = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
            sections.forEach(sec => {{
                const el = document.getElementById('sec-' + sec);
                if (el) {{
                    if (level === 'all' || level === sec) {{
                        el.style.display = 'block';
                    }} else {{
                        el.style.display = 'none';
                    }}
                }}
            }});
        }}

        function filterSearch() {{
            const query = document.getElementById('very-search').value.toLowerCase().trim();
            const cards = document.querySelectorAll('.lex-card');
            cards.forEach(card => {{
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {{
                    card.style.display = 'flex';
                }} else {{
                    card.style.display = 'none';
                }}
            }});
        }}
    </script>
</body>
</html>
"""
    filepath = os.path.join("blog", "top-100-very-words-english.html")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {filepath}")

if __name__ == "__main__":
    build_page()

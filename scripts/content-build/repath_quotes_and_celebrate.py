import os
import re

def process_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = content
    for pattern, replacement in replacements:
        if isinstance(pattern, str):
            modified = modified.replace(pattern, replacement)
        else:
            modified = pattern.sub(replacement, modified)

    if modified != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified)
        print(f"Processed: {filepath}")

# Paths definitions
clubs_dir = "apps/premium-events/clubs"

# --- 1. ENGLISH HUBS (depth 4) ---
hubs_en = [
    os.path.join(clubs_dir, "quotes/the-greatest-quotes.html"),
    os.path.join(clubs_dir, "celebrate/lets-celebrate.html")
]
for hub in hubs_en:
    replacements = [
        ("../css/tokens.css", "../../../../css/tokens.css"),
        ("../css/base.css", "../../../../css/base.css"),
        ("../css/components.css", "../../../../css/components.css"),
        ("../css/layout.css", "../../../../css/layout.css"),
        ("../css/events.css", "../../../../css/events.css"),
        ("../images/logos/cosylanguages.png", "../../../../images/logos/cosylanguages.png"),
        ("../images/thegreatestquotes.png", "../../../../images/thegreatestquotes.png"),
        ("../images/letscelebrate.png", "../../../../images/letscelebrate.png"),
        ("../js/data/languages.js", "../../../../js/data/languages.js"),
        ("../js/core/engine.js", "../../../../js/core/engine.js"),
        ("../js/core/i18n.js", "../../../../js/core/i18n.js"),
        ("../js/core/ui.js", "../../../../js/core/ui.js"),
        ("../js/data/pricing.js", "../../../../js/data/pricing.js"),
        ("../games/index.html", "../../../../games/index.html"),
        ("../practice/index.html", "../../../../practice/index.html"),
        ("../index.html", "../../../../index.html"),

        ('href="index.html"', 'href="../../../../events/index.html"'),
        ('<link href="../../../../css/events.css" rel="stylesheet"/>',
         '<link href="../../../../css/events.css" rel="stylesheet"/>\n  <link href="./style.css" rel="stylesheet"/>')
    ]
    process_file(hub, replacements)

# --- 2. FRENCH HUBS (depth 5) ---
hubs_fr = [
    os.path.join(clubs_dir, "quotes/fr/the-greatest-quotes.html"),
    os.path.join(clubs_dir, "celebrate/fr/lets-celebrate.html")
]
for hub in hubs_fr:
    replacements = [
        ("../../css/tokens.css", "../../../../../css/tokens.css"),
        ("../../css/base.css", "../../../../../css/base.css"),
        ("../../css/components.css", "../../../../../css/components.css"),
        ("../../css/layout.css", "../../../../../css/layout.css"),
        ("../../css/events.css", "../../../../../css/events.css"),
        ("../../images/logos/cosylanguages.png", "../../../../../images/logos/cosylanguages.png"),
        ("../../images/thegreatestquotes.png", "../../../../../images/thegreatestquotes.png"),
        ("../../images/letscelebrate.png", "../../../../../images/letscelebrate.png"),
        ("../../js/data/languages.js", "../../../../../js/data/languages.js"),
        ("../../js/core/engine.js", "../../../../../js/core/engine.js"),
        ("../../js/core/i18n.js", "../../../../../js/core/i18n.js"),
        ("../../js/core/ui.js", "../../../../../js/core/ui.js"),
        ("../../js/data/pricing.js", "../../../../../js/data/pricing.js"),
        ("../../games/index.html", "../../../../../games/index.html"),
        ("../../practice/index.html", "../../../../../practice/index.html"),
        ("../../index.html", "../../../../../index.html"),

        ('href="index.html"', 'href="../../../../../events/fr/index.html"'),
        ('<link href="../../../../../css/events.css" rel="stylesheet"/>',
         '<link href="../../../../../css/events.css" rel="stylesheet"/>\n  <link href="../style.css" rel="stylesheet"/>')
    ]
    process_file(hub, replacements)

# --- 3. RUSSIAN HUBS (depth 5) ---
hubs_ru = [
    os.path.join(clubs_dir, "quotes/ru/the-greatest-quotes.html"),
    os.path.join(clubs_dir, "celebrate/ru/lets-celebrate.html")
]
for hub in hubs_ru:
    replacements = [
        ("../../css/tokens.css", "../../../../../css/tokens.css"),
        ("../../css/base.css", "../../../../../css/base.css"),
        ("../../css/components.css", "../../../../../css/components.css"),
        ("../../css/layout.css", "../../../../../css/layout.css"),
        ("../../css/events.css", "../../../../../css/events.css"),
        ("../../images/logos/cosylanguages.png", "../../../../../images/logos/cosylanguages.png"),
        ("../../images/thegreatestquotes.png", "../../../../../images/thegreatestquotes.png"),
        ("../../images/letscelebrate.png", "../../../../../images/letscelebrate.png"),
        ("../../js/data/languages.js", "../../../../../js/data/languages.js"),
        ("../../js/core/engine.js", "../../../../../js/core/engine.js"),
        ("../../js/core/i18n.js", "../../../../../js/core/i18n.js"),
        ("../../js/core/ui.js", "../../../../../js/core/ui.js"),
        ("../../js/data/pricing.js", "../../../../../js/data/pricing.js"),
        ("../../games/index.html", "../../../../../games/index.html"),
        ("../../practice/index.html", "../../../../../practice/index.html"),
        ("../../index.html", "../../../../../index.html"),

        ('href="index.html"', 'href="../../../../../events/ru/index.html"'),
        ('<link href="../../../../../css/events.css" rel="stylesheet"/>',
         '<link href="../../../../../css/events.css" rel="stylesheet"/>\n  <link href="../style.css" rel="stylesheet"/>')
    ]
    process_file(hub, replacements)

# --- 4. ENGLISH SESSIONS (depth 6) ---
def repath_en_sessions(club_name, session_folder):
    sessions_dir = os.path.join(clubs_dir, club_name, "sessions", session_folder)
    if not os.path.exists(sessions_dir):
        return
    for filename in os.listdir(sessions_dir):
        if not filename.endswith(".html") or filename == "template-quotes.html" or filename == "template-celebrate.html":
            continue
        filepath = os.path.join(sessions_dir, filename)
        replacements = [
            ("../../../css/tokens.css", "../../../../../../css/tokens.css"),
            ("../../../css/base.css", "../../../../../../css/base.css"),
            ("../../../css/components.css", "../../../../../../css/components.css"),
            ("../../../css/layout.css", "../../../../../../css/layout.css"),
            ("../../../css/events.css", "../../../../../../css/events.css"),
            ("../../../images/logos/cosylanguages.png", "../../../../../../images/logos/cosylanguages.png"),
            ("../../../js/data/languages.js", "../../../../../../js/data/languages.js"),
            ("../../../js/core/engine.js", "../../../../../../js/core/engine.js"),
            ("../../../js/core/ui.js", "../../../../../../js/core/ui.js"),
            ("../../../js/core/i18n.js", "../../../../../../js/core/i18n.js"),
            ("../../../js/core/passcodes.js", "../../../../../../js/core/passcodes.js"),
            ("../../../js/data/pricing.js", "../../../../../../js/data/pricing.js"),
            ("../../../games/index.html", "../../../../../../games/index.html"),
            ("../../../practice/index.html", "../../../../../../practice/index.html"),
            ("../../../index.html", "../../../../../../index.html"),

            ('href="../../../"', 'href="../../../../../../"'),
            ('href="../../"', 'href="../../../../../../events/index.html"'),
            ('href="../../index.html"', 'href="../../../../../../events/index.html"'),

            ('<link href="../../../../../../css/events.css" rel="stylesheet"/>',
             '<link href="../../../../../../css/events.css" rel="stylesheet"/>\n  <link href="../../style.css" rel="stylesheet"/>')
        ]
        process_file(filepath, replacements)

repath_en_sessions("quotes", "the-greatest-quotes")
repath_en_sessions("celebrate", "lets-celebrate")

# --- 5. FRENCH SESSIONS (depth 7) ---
def repath_fr_sessions(club_name, session_folder):
    sessions_dir = os.path.join(clubs_dir, club_name, "fr", "sessions", session_folder)
    if not os.path.exists(sessions_dir):
        return
    for filename in os.listdir(sessions_dir):
        if not filename.endswith(".html"):
            continue
        filepath = os.path.join(sessions_dir, filename)
        replacements = [
            ("../../../../css/tokens.css", "../../../../../../../css/tokens.css"),
            ("../../../../css/base.css", "../../../../../../../css/base.css"),
            ("../../../../css/components.css", "../../../../../../../css/components.css"),
            ("../../../../css/layout.css", "../../../../../../../css/layout.css"),
            ("../../../../css/events.css", "../../../../../../../css/events.css"),
            ("../../../../images/logos/cosylanguages.png", "../../../../../../../images/logos/cosylanguages.png"),
            ("../../../../js/data/languages.js", "../../../../../../../js/data/languages.js"),
            ("../../../../js/core/engine.js", "../../../../../../../js/core/engine.js"),
            ("../../../../js/core/ui.js", "../../../../../../../js/core/ui.js"),
            ("../../../../js/core/i18n.js", "../../../../../../../js/core/i18n.js"),
            ("../../../../js/core/passcodes.js", "../../../../../../../js/core/passcodes.js"),
            ("../../../../js/data/pricing.js", "../../../../../../../js/data/pricing.js"),
            ("../../../../games/index.html", "../../../../../../../games/index.html"),
            ("../../../../practice/index.html", "../../../../../../../practice/index.html"),
            ("../../../../index.html", "../../../../../../../index.html"),

            ('href="../../../../"', 'href="../../../../../../../"'),
            ('href="../../../index.html"', 'href="../../../../../../../events/fr/index.html"'),
            ('href="../../../"', 'href="../../../../../../../events/fr/index.html"'),
            ('href="../../../../index.html"', 'href="../../../../../../../index.html"'),
            ('href="../../../../practice/index.html"', 'href="../../../../../../../practice/index.html"'),
            ('href="../../../../games/index.html"', 'href="../../../../../../../games/index.html"'),

            ('<link href="../../../../../../../css/events.css" rel="stylesheet"/>',
             '<link href="../../../../../../../css/events.css" rel="stylesheet"/>\n  <link href="../../../style.css" rel="stylesheet"/>')
        ]
        process_file(filepath, replacements)

repath_fr_sessions("quotes", "the-greatest-quotes")
repath_fr_sessions("celebrate", "lets-celebrate")

# --- 6. RUSSIAN SESSIONS (depth 7) ---
def repath_ru_sessions(club_name, session_folder):
    sessions_dir = os.path.join(clubs_dir, club_name, "ru", "sessions", session_folder)
    if not os.path.exists(sessions_dir):
        return
    for filename in os.listdir(sessions_dir):
        if not filename.endswith(".html"):
            continue
        filepath = os.path.join(sessions_dir, filename)
        replacements = [
            ("../../../../css/tokens.css", "../../../../../../../css/tokens.css"),
            ("../../../../css/base.css", "../../../../../../../css/base.css"),
            ("../../../../css/components.css", "../../../../../../../css/components.css"),
            ("../../../../css/layout.css", "../../../../../../../css/layout.css"),
            ("../../../../css/events.css", "../../../../../../../css/events.css"),
            ("../../../../images/logos/cosylanguages.png", "../../../../../../../images/logos/cosylanguages.png"),
            ("../../../../js/data/languages.js", "../../../../../../../js/data/languages.js"),
            ("../../../../js/core/engine.js", "../../../../../../../js/core/engine.js"),
            ("../../../../js/core/ui.js", "../../../../../../../js/core/ui.js"),
            ("../../../../js/core/i18n.js", "../../../../../../../js/core/i18n.js"),
            ("../../../../js/core/passcodes.js", "../../../../../../../js/core/passcodes.js"),
            ("../../../../js/data/pricing.js", "../../../../../../../js/data/pricing.js"),
            ("../../../../games/index.html", "../../../../../../../games/index.html"),
            ("../../../../practice/index.html", "../../../../../../../practice/index.html"),
            ("../../../../index.html", "../../../../../../../index.html"),

            ('href="../../../../"', 'href="../../../../../../../"'),
            ('href="../../../index.html"', 'href="../../../../../../../events/ru/index.html"'),
            ('href="../../../"', 'href="../../../../../../../events/ru/index.html"'),
            ('href="../../../../index.html"', 'href="../../../../../../../index.html"'),
            ('href="../../../../practice/index.html"', 'href="../../../../../../../practice/index.html"'),
            ('href="../../../../games/index.html"', 'href="../../../../../../../games/index.html"'),

            ('<link href="../../../../../../../css/events.css" rel="stylesheet"/>',
             '<link href="../../../../../../../css/events.css" rel="stylesheet"/>\n  <link href="../../../style.css" rel="stylesheet"/>')
        ]
        process_file(filepath, replacements)

repath_ru_sessions("quotes", "the-greatest-quotes")
repath_ru_sessions("celebrate", "lets-celebrate")

print("Repathing completed successfully!")

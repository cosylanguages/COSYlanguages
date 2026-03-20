import json
import re
import os

def get_themes_from_config():
    filepath = 'js/data/theme_config.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    themes = set()
    matches = re.findall(r'"([^"]+)":\s*"[^"]+"', content)
    for m in matches:
        if '_' in m:
            themes.add(m)
    return themes

config_themes = get_themes_from_config()
print(f"Total themes in config: {len(config_themes)}")

# Audit Russian Vocabulary
print("\n--- Auditing Russian Vocabulary ---")
verbs_marked_as_nouns = []
verb_suffixes = ['ть', 'ться', 'ти', 'тись']

data_root = 'js/data'
for root, dirs, files in os.walk(data_root):
    if 'ru' in root and 'vocabulary.js' in files:
        with open(os.path.join(root, 'vocabulary.js'), 'r', encoding='utf-8') as f:
            content = f.read()
        ru_matches = re.findall(r'\{[^{}]*"word":\s*"([^"]+)"[^{}]*"level":\s*"([^"]+)"[^{}]*"theme":\s*"([^"]+)"[^{}]*"form":\s*"noun"[^{}]*\}', content)
        for word, level, theme in ru_matches:
            if any(word.endswith(s) for s in verb_suffixes):
                verbs_marked_as_nouns.append(word)

if verbs_marked_as_nouns:
    print(f"Found {len(verbs_marked_as_nouns)} Russian words ending in verb suffixes but marked as 'noun':")
    print(", ".join(verbs_marked_as_nouns[:20]) + ("..." if len(verbs_marked_as_nouns) > 20 else ""))

# Audit Themes
print("\n--- Auditing Themes ---")
all_data_themes = set()
categories = ['vocabulary.js', 'speaking.js', 'grammar.js', 'verbs.js', 'locations.js', 'people.js']
for root, dirs, files in os.walk(data_root):
    for file in files:
        if file in categories:
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
            themes = re.findall(r'"theme":\s*"([^"]+)"', content)
            all_data_themes.update(themes)

# Known exceptions
all_data_themes.discard('famous_people')

missing_in_config = all_data_themes - config_themes
if missing_in_config:
    print(f"Found {len(missing_in_config)} themes in data but NOT in theme_config.js:")
    print(sorted(list(missing_in_config)))

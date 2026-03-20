import json
import re
import os

families = ["germanic", "romance", "slavic", "hellenic", "turkic", "armenian", "kartvelian", "celtic"]

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

ru_vocab_path = 'js/data/slavic/vocabulary.js'
if os.path.exists(ru_vocab_path):
    with open(ru_vocab_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # match Russian entries specifically
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
for family in families:
    for cat in ['vocabulary.js', 'speaking.js', 'grammar.js', 'verbs.js', 'locations.js', 'people.js']:
        fp = f'js/data/{family}/{cat}'
        if os.path.exists(fp):
            with open(fp, 'r', encoding='utf-8') as f:
                content = f.read()
            themes = re.findall(r'"theme":\s*"([^"]+)"', content)
            all_data_themes.update(themes)

missing_in_config = all_data_themes - config_themes
if missing_in_config:
    print(f"Found {len(missing_in_config)} themes in data but NOT in theme_config.js:")
    print(sorted(list(missing_in_config)))

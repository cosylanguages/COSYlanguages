import json
import re
import os

def load_js_object(filepath, var_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple extraction: find the object start and end
    # This is fragile but might work for these files
    start_match = re.search(f'const {var_name} = ({{.*}});', content, re.DOTALL)
    if not start_match:
        # Try without const
        start_match = re.search(f'{var_name} = ({{.*}});', content, re.DOTALL)

    if start_match:
        json_str = start_match.group(1)
        # Note: this is not perfect JSON, might have trailing commas or JS comments
        # Strip comments
        json_str = re.sub(r'//.*', '', json_str)
        # We'll try a rough fix for trailing commas
        json_str = re.sub(r',\s*}', '}', json_str)
        json_str = re.sub(r',\s*]', ']', json_str)
        try:
            return json.loads(json_str)
        except:
            # If it fails, we might need a better way.
            # For now, let's use a very basic regex approach to find keys
            return None
    return None

def get_themes_from_config():
    filepath = 'js/data/theme_config.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    themes = set()
    matches = re.findall(r'"([^"]+)":\s*"[^"]+"', content)
    for m in matches:
        if '_' in m: # Themes usually have underscores like body_A0
            themes.add(m)
    return themes

config_themes = get_themes_from_config()
print(f"Total themes in config: {len(config_themes)}")

# Audit vocabulary.js
vocab_path = 'js/data/vocabulary.js'
with open(vocab_path, 'r', encoding='utf-8') as f:
    vocab_content = f.read()

# Audit Russian verbs marked as nouns
print("\n--- Auditing Russian Vocabulary ---")
ru_matches = re.findall(r'\{[^{}]*"word":\s*"([^"]+)"[^{}]*"level":\s*"([^"]+)"[^{}]*"theme":\s*"([^"]+)"[^{}]*"form":\s*"noun"[^{}]*\}', vocab_content)
# This regex is a bit broad, but let's see.
# Actually, let's look for specific patterns.
verbs_marked_as_nouns = []
verb_suffixes = ['ть', 'ться', 'ти', 'тись']
for word, level, theme in ru_matches:
    if any(word.endswith(s) for s in verb_suffixes):
        verbs_marked_as_nouns.append(word)

if verbs_marked_as_nouns:
    print(f"Found {len(verbs_marked_as_nouns)} Russian words ending in verb suffixes but marked as 'noun':")
    print(", ".join(verbs_marked_as_nouns[:20]) + ("..." if len(verbs_marked_as_nouns) > 20 else ""))

# Audit Themes
print("\n--- Auditing Themes ---")
all_data_themes = set()
files_to_check = ['js/data/vocabulary.js', 'js/data/speaking.js', 'js/data/grammar.js']
for fp in files_to_check:
    if os.path.exists(fp):
        with open(fp, 'r', encoding='utf-8') as f:
            content = f.read()
        themes = re.findall(r'"theme":\s*"([^"]+)"', content)
        all_data_themes.update(themes)

missing_in_config = all_data_themes - config_themes
if missing_in_config:
    print(f"Found {len(missing_in_config)} themes in data but NOT in theme_config.js:")
    print(sorted(list(missing_in_config)))

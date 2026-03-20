import json
import re
import os

def analyze_vocab():
    families = ["germanic", "romance", "slavic", "hellenic", "turkic", "armenian", "kartvelian", "celtic"]

    combined_data = {}

    for family in families:
        vocab_path = f'js/data/{family}/vocabulary.js'
        if os.path.exists(vocab_path):
            with open(vocab_path, 'r', encoding='utf-8') as f:
                content = f.read()
            # Extract JSON-like content from IIFE
            match = re.search(r'const data = (\{.*?\});', content, re.DOTALL)
            if match:
                family_data = json.loads(match.group(1))
                for lang, items in family_data.items():
                    if lang not in combined_data:
                        combined_data[lang] = []
                    combined_data[lang].extend(items)

        verbs_path = f'js/data/{family}/verbs.js'
        if os.path.exists(verbs_path):
            with open(verbs_path, 'r', encoding='utf-8') as f:
                content = f.read()
            match = re.search(r'const data = (\{.*?\});', content, re.DOTALL)
            if match:
                family_verbs = json.loads(match.group(1))
                for lang, items in family_verbs.items():
                    if lang not in combined_data:
                        combined_data[lang] = []
                    combined_data[lang].extend(items)

    languages = list(combined_data.keys())
    for lang in languages:
        items = combined_data.get(lang, [])
        print(f"\n--- Language: {lang} ({len(items)} items) ---")

        # Check for Russian verbs marked as nouns
        if lang == 'ru':
            verbs_as_nouns = []
            verb_suffixes = ['ть', 'ться', 'ти', 'тись']
            exceptions = ['кровать', 'путь', 'кость', 'новость', 'радость', 'часть', 'власть', 'ночь', 'дочь', 'мать', 'память']
            for item in items:
                word = item.get('word', '')
                if item.get('form') == 'noun' and any(word.endswith(s) for s in verb_suffixes) and word not in exceptions:
                    verbs_as_nouns.append(word)
            if verbs_as_nouns:
                print(f"  !!! Found {len(verbs_as_nouns)} potential verbs marked as nouns: {', '.join(verbs_as_nouns[:10])}...")

        # Check for weird themes
        themes = {}
        for item in items:
            t = item.get('theme', 'NONE')
            themes[t] = themes.get(t, 0) + 1

        # Check for cat/dog theme
        for item in items:
            if item.get('word') in ['cat', 'dog', 'bird', 'fish', 'chat', 'chien', 'gatto', 'cane', 'кот', 'собака']:
                if item.get('theme') == 'weather_A0':
                    print(f"  !!! Item '{item.get('word')}' has theme 'weather_A0'")
                    break

analyze_vocab()

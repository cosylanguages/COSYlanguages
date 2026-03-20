import json
import re
import os

def analyze_vocab():
    data_root = 'js/data'
    combined_data = {}

    # Categories that contain vocabulary-like entries (word, level, theme)
    categories = ['vocabulary.js', 'verbs.js', 'locations.js', 'people.js']

    for root, dirs, files in os.walk(data_root):
        for file in files:
            if file in categories:
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Extract JSON from IIFE
                # Standard pattern in split files: const data = [ ... ];
                # In some cases it might be window.XData = { ... } if I missed some during split
                list_match = re.search(r'const data = (\[.*?\]);', content, re.DOTALL)
                if list_match:
                    items = json.loads(list_match.group(1))
                    # Determine language from path: js/data/<family>/<lang>/...
                    parts = root.split(os.sep)
                    if len(parts) >= 4:
                        lang = parts[3]
                        if lang not in combined_data:
                            combined_data[lang] = []
                        combined_data[lang].extend(items)

    languages = sorted(list(combined_data.keys()))
    for lang in languages:
        items = combined_data.get(lang, [])
        print(f"\n--- Language: {lang} ({len(items)} items) ---")

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

        # Theme analysis
        theme_counts = {}
        for item in items:
            t = item.get('theme', 'NONE')
            theme_counts[t] = theme_counts.get(t, 0) + 1

        # Check for specific historical data bug (animals in weather)
        for item in items:
            if item.get('word') in ['cat', 'dog', 'bird', 'fish', 'chat', 'chien', 'gatto', 'cane', 'кот', 'собака']:
                if item.get('theme') == 'weather_A0':
                    print(f"  !!! Item '{item.get('word')}' has theme 'weather_A0'")
                    break

if __name__ == "__main__":
    analyze_vocab()

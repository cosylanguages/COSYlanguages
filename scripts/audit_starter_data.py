import os
import json
import re

LANGUAGES = {
    'en': 'germanic/en',
    'de': 'germanic/de',
    'fr': 'romance/fr',
    'it': 'romance/it',
    'es': 'romance/es',
    'pt': 'romance/pt',
    'ru': 'slavic/ru',
    'el': 'hellenic/el',
    'ba': 'turkic/ba',
    'tt': 'turkic/tt',
    'ka': 'kartvelian/ka',
    'hy': 'armenian/hy',
    'br': 'celtic/br'
}

def extract_js_object(content):
    # Try to find the array or object assigned to window.vocabularyData[...] or window.verbsData[...] etc.
    # Simple regex to find the [...] part
    match = re.search(r'\[\s*\{.*\}\s*\]', content, re.DOTALL)
    if match:
        # Convert JS-like object to JSON-compatible string
        js_str = match.group(0)
        # Handle trailing commas
        js_str = re.sub(r',\s*\]', ']', js_str)
        js_str = re.sub(r',\s*\}', '}', js_str)
        # Quote keys if they are not quoted
        js_str = re.sub(r'(\w+):', r'"\1":', js_str)
        # Replace single quotes with double quotes (be careful with nested quotes)
        # This is a bit hacky but might work for our simple data files
        js_str = js_str.replace("'", '"')
        try:
            return json.loads(js_str)
        except json.JSONDecodeError as e:
            # print(f"Error decoding JSON: {e}")
            # print(js_str[:100])
            return None
    return None

def get_starter_file(lang_path, category):
    base_path = f"js/data/{lang_path}/starter"
    filename = f"{category}.js"
    full_path = os.path.join(base_path, filename)
    if os.path.exists(full_path):
        return full_path
    return None

def audit_category(category):
    print(f"\n--- Auditing {category} ---")
    results = {}
    for lang, path in LANGUAGES.items():
        file_path = get_starter_file(path, category)
        if not file_path:
            print(f"[{lang}] File missing: {category}.js")
            continue

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        data = extract_js_object(content)
        if data is None:
            # Fallback: simple line count of objects
            count = content.count('{')
            results[lang] = {'count': count, 'error': 'Failed to parse JSON'}
        else:
            results[lang] = {'count': len(data), 'data': data}

            # Check for missing themes in adjectives/verbs
            if category in ['adjectives', 'verbs']:
                missing_theme = [i for i, item in enumerate(data) if 'theme' not in item or not item['theme']]
                if missing_theme:
                    print(f"[{lang}] Missing theme at indices: {missing_theme}")

    # Compare counts
    counts = {lang: info['count'] for lang, info in results.items()}
    print(f"Counts: {counts}")
    return results

if __name__ == "__main__":
    audit_category('adjectives')
    audit_category('verbs')
    audit_category('vocabulary')
    audit_category('locations')


import re

def get_keys_from_html(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    return set(re.findall(r'data-translate-key="([^"]*)"', content))

html_files = ['index.html', 'practice.html', 'events.html', 'languages/en.html', 'languages/fr.html', 'languages/it.html', 'languages/ru.html', 'languages/el.html']
all_html_keys = set()
for f in html_files:
    all_html_keys.update(get_keys_from_html(f))

# To be deleted keys (Getting Started section)
to_delete_keys = {
    "getting_started_title", "step_1_title", "step_1_text", "step_2_title", "step_2_text", "step_3_title", "step_3_text"
}
all_html_keys -= to_delete_keys

def get_translations():
    # This is a bit hacky but it works for this specific file structure
    with open('js/translations.js', 'r') as f:
        content = f.read()

    langs = ['en', 'fr', 'it', 'ru', 'el']
    translations = {}
    for lang in langs:
        # Find the block for the language
        start_marker = f"{lang}: {{"
        start_idx = content.find(start_marker)
        if start_idx == -1:
            continue

        # Look for the end of the language block by finding the start of the next language block or the end of the object
        next_lang_idx = -1
        for next_lang in langs[langs.index(lang)+1:]:
             nm = f"{next_lang}: {{"
             next_lang_idx = content.find(nm, start_idx)
             if next_lang_idx != -1:
                 break

        if next_lang_idx == -1:
             end_idx = content.find("}\n};", start_idx)
        else:
             end_idx = next_lang_idx

        block = content[start_idx:end_idx]
        keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+):', block, re.MULTILINE))
        translations[lang] = keys
    return translations

translations = get_translations()

for lang, keys in translations.items():
    missing = all_html_keys - keys
    if missing:
        print(f"Missing keys in {lang}:")
        for m in sorted(missing):
            print(f"  - {m}")

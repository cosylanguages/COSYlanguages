import re
import json

def get_keys_from_html(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        return set(re.findall(r'data-translate-key="([^"]*)"', content))
    except FileNotFoundError:
        return set()

html_files = ['index.html', 'practice.html', 'events.html', 'languages/en.html', 'languages/fr.html', 'languages/it.html', 'languages/ru.html', 'languages/el.html']
all_html_keys = set()
for f in html_files:
    all_html_keys.update(get_keys_from_html(f))

# Additional keys from JS
js_keys = {
    'theme_grammar_plurals', 'theme_grammar_present_simple', 'theme_grammar_future_simple',
    'theme_grammar_past_simple', 'theme_grammar_gender', 'form_noun', 'form_verb', 'form_adjective', 'form_adverb',
    'example_mc', 'example_ls', 'example_sc', 'example_ws', 'example_op', 'example_cl', 'example_tf', 'example_ga', 'example_np',
    'task_listen_select', 'task_multiple_choice', 'task_scramble', 'task_word_scramble', 'task_opposite', 'task_cloze', 'task_true_false', 'task_gender_articles', 'task_conversation', 'task_number_plural'
}
all_html_keys.update(js_keys)

# To be deleted keys (Getting Started section)
to_delete_keys = {
    "getting_started_title", "step_1_title", "step_1_text", "step_2_title", "step_2_text", "step_3_title", "step_3_text"
}
all_html_keys -= to_delete_keys

def get_translations():
    with open('js/translations.js', 'r') as f:
        content = f.read()

    # Match the language objects
    matches = re.finditer(r'([a-z]{2}):\s*{', content)
    langs = {}

    # This is a bit rough but works for this structure
    for match in matches:
        lang = match.group(1)
        start = match.end()

        # Find balancing brace
        brace_count = 1
        pos = start
        while brace_count > 0 and pos < len(content):
            if content[pos] == '{': brace_count += 1
            elif content[pos] == '}': brace_count -= 1
            pos += 1

        block = content[start:pos-1]
        # Find keys
        keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+):', block, re.MULTILINE))
        langs[lang] = keys
    return langs

translations = get_translations()

for lang in ['en', 'fr', 'it', 'ru', 'el']:
    keys = translations.get(lang, set())
    missing = all_html_keys - keys
    if missing:
        print(f"Missing keys in {lang}:")
        for m in sorted(missing):
            print(f"  - {m}")
    else:
        print(f"All keys present in {lang}")


import re
import os

def get_keys_from_html(filepath):
    if not os.path.exists(filepath):
        return set()
    with open(filepath, 'r') as f:
        content = f.read()
    return set(re.findall(r'data-translate-key="([^"]*)"', content))

def get_keys_from_js(filepath):
    if not os.path.exists(filepath):
        return set()
    with open(filepath, 'r') as f:
        content = f.read()
    # Use word boundary for t() to avoid matching things like closest()
    keys = set(re.findall(r"\bt\(['\"]([^'\"]+)['\"]\)", content))
    keys.update(re.findall(r"translations\[[^\]]+\]\['([^']+)'\]", content))
    keys.update(re.findall(r"translations\[[^\]]+\]\[\"([^\"]+)\"\]", content))
    # Some keys are used in attributes
    keys.update(re.findall(r"setAttribute\('data-translate-key',\s*['\"]([^'\"]+)['\"]\)", content))
    return keys

# These are strings that are currently hardcoded in alert() or similar and SHOULD be keys
hardcoded_to_keys = {
    "alert_no_task_type": "Please select at least one task type!",
    "alert_no_items": "No items found for the selected filters!",
    "alert_no_tasks_generated": "Could not generate tasks for these items. Try enabling more task types!",
    "alert_all_items_called": "All items called!",
    "alert_no_adventure_items": "Alas! No items found for this adventure!",
    "alert_no_quest_items": "The quest ends here! No items found.",
    "alert_no_arena_topics": "The Arena is empty! No topics found for this level.",
    "alert_no_corner_quotes": "The Corner is quiet! No quotes found for this level.",
    "alert_no_flow_topics": "The flow is blocked! No topics found for this level.",
    "alert_no_emoji_vocab": "No vocabulary with emojis found for this language!",
    "alert_no_vocab_level": "No vocabulary found for this level/language!",
    "alert_lesson_not_found": "Lesson data not found!"
}

html_files = ['index.html', 'practice.html', 'events.html', 'days.html', 'lesson.html']
for lang in ['en', 'fr', 'it', 'ru', 'el']:
    html_files.append(f'languages/{lang}.html')

all_required_keys = set()
for f in html_files:
    all_required_keys.update(get_keys_from_html(f))

js_files = []
for root, dirs, files in os.walk('js'):
    for file in files:
        if file.endswith('.js') and file != 'translations.js':
            js_files.append(os.path.join(root, file))

for f in js_files:
    all_required_keys.update(get_keys_from_js(f))

all_required_keys.update(hardcoded_to_keys.keys())

# Known keys that are hard to find via regex but definitely used
all_required_keys.update({
    'correct', 'incorrect', 'game_over', 'time_up', 'streak_day', 'streak_days',
    'progress_word', 'progress_of', 'level_label', 'exit_confirm', 'copied',
    'theme_grammar_plurals', 'theme_grammar_present_simple', 'theme_grammar_future_simple',
    'theme_grammar_past_simple', 'theme_grammar_gender',
    'game_opinion_arena', 'game_debates', 'game_talk_talk', 'game_critics_corner'
})

all_required_keys = {k for k in all_required_keys if k}

def get_translations():
    if not os.path.exists('js/translations.js'):
        return {}
    with open('js/translations.js', 'r') as f:
        content = f.read()

    langs = ['en', 'fr', 'it', 'ru', 'el']
    translations = {}

    for lang in langs:
        start_marker = f"{lang}: {{"
        start_idx = content.find(start_marker)
        if start_idx == -1:
            continue

        depth = 0
        end_idx = -1
        for i in range(start_idx + len(start_marker) - 1, len(content)):
            if content[i] == '{':
                depth += 1
            elif content[i] == '}':
                depth -= 1
                if depth == 0:
                    end_idx = i + 1
                    break

        if end_idx == -1:
            continue

        block = content[start_idx:end_idx]
        keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+):', block, re.MULTILINE))
        translations[lang] = keys
    return translations

translations = get_translations()

found_any_missing = False
for lang in ['en', 'fr', 'it', 'ru', 'el']:
    if lang not in translations:
        print(f"Language {lang} block not found in translations.js")
        continue

    keys = translations[lang]
    missing = all_required_keys - keys
    if missing:
        found_any_missing = True
        print(f"Missing keys in {lang}:")
        for m in sorted(missing):
            print(f"  - {m}")
    else:
        print(f"All keys present in {lang}")

if not found_any_missing:
    print("No missing translation keys found!")

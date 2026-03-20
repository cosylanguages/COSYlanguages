import json
import re

# Standard themes mapping
THEME_MAP = {
    "popular_people": "people_society",
    "professions": "people_society",
    "dishes": "food_drinks",
    "food": "food_drinks",
    "drinks": "food_drinks",
    "places": "travel_places",
    "countries": "travel_places",
    "cities": "travel_places",
    "clothing": "daily_life",
    "furniture": "daily_life",
    "appearance": "people_society",
    "routine": "daily_life",
    "objects": "daily_life",
    "animals": "nature_environment",
    "hobby": "leisure_hobbies",
    "weather": "nature_environment",
    "body": "health_body",
    "health_lifestyle": "health_body",
    "environment_nature": "nature_environment",
    "technology_media": "science_technology",
    "society_politics": "people_society",
    "science_philosophy": "science_technology"
}

def get_js_obj(content, start_marker):
    start_idx = content.find(start_marker)
    if start_idx == -1: return None
    start_idx += len(start_marker)
    brace_count = 0
    for i in range(start_idx, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                return content[start_idx:i+1]
    return None

with open('data_full.txt', 'r') as f:
    full_content = f.read()

# For vocabularyData, we need to merge gamesData and extendedCurriculumData
# and flatten them while assigning themes.

def parse_data_to_dict(js_str):
    # This is risky, but the data looks like standard JSON except for some JS bits
    # I'll use a hacky way to clean it for json.loads if possible, or just regex it
    # Actually, the data is very clean.
    clean_str = re.sub(r'//.*', '', js_str) # remove comments
    # replace single quotes with double quotes? no, they are already double in most places
    # but the keys might not be quoted.
    # Let's try to just evaluate it in a temporary file using node and output JSON
    return None

# Use Node to convert to JSON for safe parsing
with open('temp_convert.js', 'w') as f:
    f.write(full_content)
    f.write('\nconsole.log(JSON.stringify({gamesData, extendedCurriculumData, extraSpeakData, speakingGamesData, lessonsData, alphabetsData}));')

import subprocess
result = subprocess.run(['node', 'temp_convert.js'], capture_output=True, text=True)
all_data = json.loads(result.stdout)

languages = ["en", "fr", "it", "ru", "el"]

# 1. alphabets.js
with open('js/data/alphabets.js', 'w') as f:
    f.write(f"const alphabetsData = {json.dumps(all_data['alphabetsData'], indent=4, ensure_ascii=False)};")

# 2. curriculum.js
with open('js/data/curriculum.js', 'w') as f:
    f.write(f"const lessonsData = {json.dumps(all_data['lessonsData'], indent=4, ensure_ascii=False)};")

# 3. vocabulary.js & verbs.js
vocabularyData = {}
verbsData = {}
for lang in languages:
    flat_list = []
    verbs_list = []
    # From gamesData
    d1 = all_data['gamesData'].get(lang, {})
    for theme_key, items in d1.items():
        new_theme = THEME_MAP.get(theme_key, theme_key)
        for item in items:
            item['theme'] = new_theme
            if item.get('form') == 'verb':
                verbs_list.append(item)
            else:
                flat_list.append(item)
    # From extendedCurriculumData
    d2 = all_data['extendedCurriculumData'].get(lang, {})
    for theme_key, items in d2.items():
        new_theme = THEME_MAP.get(theme_key, theme_key)
        for item in items:
            item['theme'] = new_theme
            if item.get('form') == 'verb':
                verbs_list.append(item)
            else:
                flat_list.append(item)
    vocabularyData[lang] = flat_list
    verbsData[lang] = verbs_list

with open('js/data/vocabulary.js', 'w') as f:
    f.write(f"const vocabularyData = {json.dumps(vocabularyData, indent=4, ensure_ascii=False)};\n")
    f.write("window.vocabularyData = vocabularyData;")

with open('js/data/verbs.js', 'w') as f:
    f.write("(function() {\n")
    f.write(f"    const verbsData = {json.dumps(verbsData, indent=8, ensure_ascii=False)};\n\n")
    f.write("    if (window.vocabularyData) {\n")
    f.write("        for (let lang in verbsData) {\n")
    f.write("            if (window.vocabularyData[lang]) {\n")
    f.write("                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...verbsData[lang]];\n")
    f.write("            } else {\n")
    f.write("                window.vocabularyData[lang] = verbsData[lang];\n")
    f.write("            }\n")
    f.write("        }\n")
    f.write("    }\n\n")
    f.write("    window.verbsData = verbsData;\n")
    f.write("})();")

# 4. speaking.js
speakingData = {}
for lang in languages:
    speakingData[lang] = {
        "opinionArena": all_data['extraSpeakData'].get(lang, {}).get("opinionArena", []),
        "criticsCorner": all_data['extraSpeakData'].get(lang, {}).get("criticsCorner", []),
        "debates": all_data['speakingGamesData'].get(lang, {}).get("debates", []),
        "talkThatTalk": all_data['speakingGamesData'].get(lang, {}).get("talkThatTalk", [])
    }
    # Also some debates were in extraSpeakData
    extra_debates = all_data['extraSpeakData'].get(lang, {}).get("debates", [])
    speakingData[lang]["debates"].extend(extra_debates)

    # Standardize themes and levels for existing items
    for cat in speakingData[lang]:
        for item in speakingData[lang][cat]:
            if 'theme' not in item:
                item['theme'] = 'people_society' # default
            if 'level' not in item:
                item['level'] = 'intermediate' # default

with open('js/data/speaking.js', 'w') as f:
    f.write(f"const speakingData = {json.dumps(speakingData, indent=4, ensure_ascii=False)};")

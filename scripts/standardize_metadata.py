import json
import re

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

def standardize(file_path, obj_name, is_verbs=False):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        if is_verbs:
            match = re.search(r'const verbsData = (\{.*?\});', content, re.DOTALL)
            data = json.loads(match.group(1))
        else:
            # More robust extraction for cases like speaking.js that might have window assignment
            match = re.search(rf'const {obj_name} = (\{{.*?\}});\s*(window\.{obj_name}|(?=$))', content, re.DOTALL)
            if not match:
                # Fallback to a simpler approach if the above fails
                json_str = content.replace(f'const {obj_name} = ', '').replace(f'window.{obj_name} = {obj_name};', '').strip().rstrip(';')
                data = json.loads(json_str)
            else:
                data = json.loads(match.group(1))

    if isinstance(data, dict):
        for lang in data:
            items = data[lang]
            if isinstance(items, list):
                for item in items:
                    if 'theme' in item:
                        item['theme'] = THEME_MAP.get(item['theme'], item['theme'])
                    if 'level' not in item:
                        item['level'] = 'elementary'
            elif isinstance(items, dict):
                for subcat in items:
                    for item in items[subcat]:
                        if 'theme' in item:
                            item['theme'] = THEME_MAP.get(item['theme'], item['theme'])
                        if 'level' not in item:
                            item['level'] = 'elementary'

    with open(file_path, 'w', encoding='utf-8') as f:
        if is_verbs:
            f.write("(function() {\n")
            f.write(f"    const verbsData = {json.dumps(data, indent=8, ensure_ascii=False)};\n\n")
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
        else:
            f.write(f"const {obj_name} = {json.dumps(data, indent=4, ensure_ascii=False)};\n")
            if obj_name == 'vocabularyData':
                f.write("window.vocabularyData = vocabularyData;")
            elif obj_name == 'speakingData':
                f.write("window.speakingData = speakingData;")

if __name__ == "__main__":
    standardize('js/data/vocabulary.js', 'vocabularyData')
    standardize('js/data/verbs.js', 'verbsData', is_verbs=True)
    standardize('js/data/speaking.js', 'speakingData')

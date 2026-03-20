import json
import re
import os

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

CATEGORY_MAP = {
    'vocabulary.js': ('vocabularyData', 'vocabulary'),
    'verbs.js': ('verbsData', 'verbs'),
    'grammar.js': ('grammarData', 'grammar'),
    'speaking.js': ('speakingData', 'speaking'),
    'alphabets.js': ('alphabetsData', 'alphabets'),
    'locations.js': ('locationsData', 'locations'),
    'people.js': ('peopleData', 'people')
}

def standardize_file(file_path):
    file_name = os.path.basename(file_path)
    if file_name not in CATEGORY_MAP:
        return

    var_name, category = CATEGORY_MAP[file_name]

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine language from path
    path_parts = file_path.split(os.sep)
    # expected: js/data/<family>/<lang>/...
    if len(path_parts) < 4:
        return
    lang = path_parts[3]

    # Handle List-based data (standard in split files)
    list_match = re.search(r'const data = (\[.*?\]);', content, re.DOTALL)
    if list_match:
        data = json.loads(list_match.group(1))
        for item in data:
            if isinstance(item, dict):
                if 'theme' in item:
                    item['theme'] = THEME_MAP.get(item['theme'], item['theme'])
                if 'level' not in item:
                    # Try to infer level from path
                    if len(path_parts) >= 5:
                        item['level'] = path_parts[4]
                    else:
                        item['level'] = 'elementary'

        # Generate merging logic
        merging_logic = f"window.{var_name} = window.{var_name} || {{}};\n    window.{var_name}[lang] = [...(window.{var_name}[lang] || []), ...data];"

        if category in ['verbs', 'locations', 'people']:
            vocab_merge = "data"
            if category == 'people':
                vocab_merge = "data.map(p => ({...p, theme: 'famous_people'}))"
            merging_logic += f"\n    if (window.vocabularyData) {{\n        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...{vocab_merge}];\n    }}"

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f"""(function() {{
    const data = {json.dumps(data, indent=4, ensure_ascii=False)};
    const lang = "{lang}";
    {merging_logic}
}})();""")
        return

    # Handle single string data (alphabets)
    str_match = re.search(r'const data = "(.*?)";', content)
    if str_match:
        # Alphabets usually don't need theme mapping
        return

if __name__ == "__main__":
    data_root = 'js/data'
    for root, dirs, files in os.walk(data_root):
        for file in files:
            if file in CATEGORY_MAP:
                standardize_file(os.path.join(root, file))

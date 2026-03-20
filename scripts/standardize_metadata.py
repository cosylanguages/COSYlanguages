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

def standardize_file(file_path, var_name, category):
    if not os.path.exists(file_path):
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'const data = (\{.*?\});', content, re.DOTALL)
    if not match:
        return

    data = json.loads(match.group(1))

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

    # Merging logic
    merging_logic = ""
    if category == 'vocabulary':
        merging_logic = "window.vocabularyData = { ...window.vocabularyData, ...data };"
    elif category == 'verbs':
        merging_logic = """if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang]];
            } else {
                window.vocabularyData[lang] = data[lang];
            }
        }
    }
    window.verbsData = { ...window.verbsData, ...data };"""
    elif category == 'grammar':
        merging_logic = "window.grammarData = { ...window.grammarData, ...data };"
    elif category == 'speaking':
        merging_logic = "window.speakingData = { ...window.speakingData, ...data };"
    elif category == 'alphabets':
        merging_logic = "window.alphabetsData = { ...window.alphabetsData, ...data };"
    elif category == 'locations':
        merging_logic = """if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang]];
            }
        }
    }
    window.locationsData = { ...window.locationsData, ...data };"""
    elif category == 'people':
        merging_logic = """if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang].map(p => ({...p, theme: 'famous_people'}))];
            }
        }
    }
    window.peopleData = { ...window.peopleData, ...data };"""

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(f"""(function() {{
    const data = {json.dumps(data, indent=4, ensure_ascii=False)};
    {merging_logic}
}})();""")

if __name__ == "__main__":
    families = ["germanic", "romance", "slavic", "hellenic", "turkic", "armenian", "kartvelian", "celtic"]
    cats = [
        ('vocabulary.js', 'vocabularyData', 'vocabulary'),
        ('verbs.js', 'verbsData', 'verbs'),
        ('grammar.js', 'grammarData', 'grammar'),
        ('speaking.js', 'speakingData', 'speaking'),
        ('alphabets.js', 'alphabetsData', 'alphabets'),
        ('locations.js', 'locationsData', 'locations'),
        ('people.js', 'peopleData', 'people')
    ]

    for family in families:
        for filename, var_name, category in cats:
            path = f"js/data/{family}/{filename}"
            standardize_file(path, var_name, category)

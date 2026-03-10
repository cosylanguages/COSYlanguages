import json

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

def standardize(file_path, obj_name):
    with open(file_path, 'r') as f:
        content = f.read()
        json_str = content.replace(f'const {obj_name} = ', '').strip().rstrip(';')
        data = json.loads(json_str)

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

    with open(file_path, 'w') as f:
        f.write(f"const {obj_name} = {json.dumps(data, indent=4, ensure_ascii=False)};")

standardize('js/data/vocabulary.js', 'vocabularyData')
standardize('js/data/speaking.js', 'speakingData')

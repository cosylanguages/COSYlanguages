import os
import re

theme_map = {
    "profession": "jobs_A0",
    "family": "family_A0",
    "nationality": "identity_self_C1",
    "animal": "weather_A0", # Animals were mapped here in my previous logic for A0
    "famous_people": "identity_self_C1",
    "society": "society_community_B1",
    "country": "places_A0",
    "city": "transport_travel_A2",
    "health": "health_body_A2",
    "environment": "environment_A2",
    "technology": "technology_A2",
    "education": "education_learning_B1",
    "daily_life": "routine_A1",
    "food_drinks": "food_drink_A0",
    "travel_places": "transport_travel_A2",
    "leisure_hobbies": "leisure_hobbies_A2",
    "science_technology": "technology_A2",
    "health_body": "health_body_A2",
    "nature_environment": "environment_A2",
    "dishes": "food_nutrition_A2",
    "drinks": "food_drink_A0",
    "clothing": "home_A0",
    "furniture": "home_A0",
    "numbers": "numbers_1_20_A0",
    "routine": "routine_A1",
    "objects": "home_A0",
    "hobby": "leisure_hobbies_A2",
    "appearance": "personality_A2"
}

data_dir = "js/data"

for root, dirs, files in os.walk(data_dir):
    for file in files:
        if file.endswith(".js"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = content
            # Replace themes in JSON-like structure
            for old, new in theme_map.items():
                # Match "theme": "old" or 'theme': 'old'
                pattern = f'([\'"]theme[\'"]\s*:\s*[\'"]){old}([\'"])'
                new_content = re.sub(pattern, r'\1' + new + r'\2', new_content)

            if new_content != content:
                print(f"Updating themes in {path}")
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)

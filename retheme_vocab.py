import json
import re

# Load original file content
with open('js/data/vocabulary.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match the vocabularyData object
# Note: Since the file might be large and complex, we'll process it carefully.
# We'll extract the JSON part if possible, or work with regex.

def remap_theme(item):
    level = item.get('level', 'starter')
    theme = item.get('theme', '')
    word = item.get('word', '').lower()

    # Starter remapping (A0/A1)
    if level == 'starter':
        if theme == 'health_body': return 'body_A0'
        if theme == 'food_drinks': return 'food_drink_A0'
        if theme == 'daily_life':
            if any(x in word for x in ['house', 'room', 'kitchen', 'bed', 'chair', 'table', 'lamp', 'window']): return 'home_A0'
            if any(x in word for x in ['t-shirt', 'pants', 'shoe', 'hat', 'clothes']): return 'home_A0' # Or daily life? Home seems closer for A0 basics
            return 'home_A0' # Default for starter daily life for now
        if theme == 'colors': return 'colours_A0'
        if theme == 'numbers': return 'numbers_1_20_A0'
        if theme == 'profession': return 'jobs_A0'
        if theme == 'travel_places':
            if any(x in word for x in ['car', 'bus', 'train', 'plane', 'bike']): return 'transport_A0'
            return 'places_A0'
        if theme == 'nature_environment': return 'weather_A0'
        if theme == 'people_society':
            if any(x in word for x in ['big', 'small', 'good', 'bad', 'cheap', 'expensive', 'tall', 'short']): return 'adjectives_A0'
            return 'adjectives_A0' # Default
        if theme == 'family': return 'family_A0'
        if theme == 'animal': return 'nature_environment' # Starter animal? Maybe nature for A0.
        return 'places_A0'

    # Elementary remapping (A2)
    if level == 'elementary':
        if theme == 'education_work': return 'career_A2'
        if theme == 'daily_life':
            if any(x in word for x in ['buy', 'sell', 'rent', 'house', 'flat', 'property']): return 'property_A2'
            return 'neighbourhood_A2'
        if theme == 'health_body': return 'health_body_A2'
        if theme == 'food_drinks': return 'food_nutrition_A2'
        if theme == 'family' or theme == 'people_society': return 'relationships_family_A2'
        if theme == 'travel_places': return 'transport_travel_A2'
        if theme == 'leisure_hobbies': return 'leisure_hobbies_A2'
        if theme == 'nature_environment': return 'environment_A2'
        if theme == 'science_technology': return 'technology_A2'
        return 'neighbourhood_A2'

    # Intermediate (B1)
    if level == 'intermediate':
        if theme == 'education_work' or theme == 'profession': return 'career_development_B1'
        if theme == 'health_body': return 'mental_health_B1'
        if theme == 'nature_environment': return 'environment_sustainability_B1'
        if theme == 'travel_places': return 'travel_cultural_B1'
        if theme == 'people_society': return 'society_community_B1'
        return 'society_community_B1'

    # Upper-Intermediate (B2)
    if level == 'upper-intermediate':
        if theme == 'people_society': return 'politics_governance_B2'
        if theme == 'science_technology': return 'technology_privacy_B2'
        if theme == 'nature_environment': return 'environment_policy_B2'
        return 'academic_vocabulary_B2'

    # Advanced (C1)
    if level == 'advanced':
        if theme == 'people_society': return 'power_institutions_C1'
        if theme == 'science_technology': return 'science_tech_society_C1'
        return 'advanced_register_C1'

    # Proficiency (C2)
    if level == 'proficiency':
        return 'ontology_metaphysics_C2'

    return theme

# Since we don't want to break the file structure (which has JS comments and objects),
# we'll do a regex replacement for the theme lines.
# But themes depend on level, which is in a different line.

# Better: Load the whole object using exec() to get it as a python dict, remap, and write back.
# This assumes vocabularyData is defined as a global in the JS file.

safe_content = content.replace('window.vocabularyData = vocabularyData;', '')
safe_content = safe_content.replace('const vocabularyData =', 'vocabularyData =')

namespace = {}
exec(safe_content, namespace)
data = namespace['vocabularyData']

for lang in data:
    for item in data[lang]:
        item['theme'] = remap_theme(item)

# Output back to JS format
new_content = "const vocabularyData = " + json.dumps(data, ensure_ascii=False, indent=4) + ";\nwindow.vocabularyData = vocabularyData;"

with open('js/data/vocabulary.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

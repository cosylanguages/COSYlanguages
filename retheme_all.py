import re

mapping = {
    'starter': {
        'health_body': 'body_A0',
        'food_drinks': 'food_drink_A0',
        'daily_life': 'home_A0',
        'colors': 'colours_A0',
        'numbers': 'numbers_1_20_A0',
        'numbers_shapes': 'numbers_1_20_A0',
        'profession': 'jobs_A0',
        'travel_places': 'places_A0',
        'nature_environment': 'weather_A0',
        'people_society': 'family_A0',
        'family': 'family_A0',
        'leisure_hobbies': 'leisure_A1',
        'science_technology': 'technology_A1',
        'animal': 'weather_A0'
    },
    'elementary': {
        'education_work': 'career_A2',
        'daily_life': 'neighbourhood_A2',
        'health_body': 'health_body_A2',
        'food_drinks': 'food_nutrition_A2',
        'people_society': 'relationships_family_A2',
        'family': 'relationships_family_A2',
        'travel_places': 'transport_travel_A2',
        'leisure_hobbies': 'leisure_hobbies_A2',
        'nature_environment': 'environment_A2',
        'science_technology': 'technology_A2',
        'animal': 'environment_A2'
    },
    'intermediate': {
        'education_work': 'career_development_B1',
        'profession': 'career_development_B1',
        'health_body': 'mental_health_B1',
        'nature_environment': 'environment_sustainability_B1',
        'travel_places': 'travel_cultural_B1',
        'people_society': 'society_community_B1',
        'family': 'parenting_family_B1',
        'daily_life': 'housing_mortgages_B1',
        'food_drinks': 'society_community_B1',
        'leisure_hobbies': 'opinion_debate_B1',
        'science_technology': 'media_news_B1',
        'animal': 'environment_sustainability_B1'
    },
    'upper-intermediate': {
        'people_society': 'politics_governance_B2',
        'science_technology': 'technology_privacy_B2',
        'nature_environment': 'environment_policy_B2',
        'education_work': 'academic_vocabulary_B2',
        'daily_life': 'economy_labour_B2',
        'health_body': 'healthcare_systems_B2',
        'travel_places': 'globalisation_trade_B2'
    },
    'advanced': {
        'people_society': 'power_institutions_C1',
        'science_technology': 'science_tech_society_C1',
        'education_work': 'work_culture_C1',
        'nature_environment': 'science_tech_society_C1',
        'health_body': 'psychological_concepts_C1'
    },
    'proficiency': {
        'people_society': 'ontology_metaphysics_C2',
        'science_technology': 'epistemology_truth_C2',
        'education_work': 'work_meaning_C2',
        'health_body': 'psychoanalysis_unconscious_C2',
        'leisure_hobbies': 'aesthetics_criticism_C2'
    }
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    current_level = 'starter'
    for i in range(len(lines)):
        lvl_m = re.search(r'"level":\s*"([^"]+)"', lines[i])
        if lvl_m:
            current_level = lvl_m.group(1)

        theme_m = re.search(r'"theme":\s*"([^"]+)"', lines[i])
        if theme_m:
            old_theme = theme_m.group(1)
            new_theme = mapping.get(current_level, {}).get(old_theme, old_theme)
            if new_theme != old_theme:
                # Use regex for replacement to avoid partial matches
                lines[i] = re.sub(rf'"theme":\s*"{old_theme}"', f'"theme": "{new_theme}"', lines[i])

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

process_file('js/data/vocabulary.js')
process_file('js/data/speaking.js')
process_file('js/data/locations.js')
process_file('js/data/people.js')

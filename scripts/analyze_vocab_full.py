import json
import re

def analyze_vocab():
    # Load vocabulary.js
    with open('js/data/vocabulary.js', 'r', encoding='utf-8') as f:
        v_content = f.read()
    v_safe = v_content.replace('window.vocabularyData = vocabularyData;', '').replace('const vocabularyData =', 'vocabularyData =')

    # Load verbs.js
    with open('js/data/verbs.js', 'r', encoding='utf-8') as f:
        verbs_content = f.read()
    # Extract verbsData from IIFE
    verbs_match = re.search(r'const verbsData = (\{.*?\});', verbs_content, re.DOTALL)
    verbs_data = json.loads(verbs_match.group(1)) if verbs_match else {}

    namespace = {}
    try:
        exec(v_safe, namespace)
        data = namespace['vocabularyData']
        # Merge verbsData
        for lang in verbs_data:
            if lang in data:
                data[lang].extend(verbs_data[lang])
            else:
                data[lang] = verbs_data[lang]
    except Exception as e:
        print(f"Error executing JS: {e}")
        return

    languages = ['en', 'fr', 'it', 'ru', 'el']
    for lang in languages:
        items = data.get(lang, [])
        print(f"\n--- Language: {lang} ({len(items)} items) ---")

        # Check for Russian verbs marked as nouns
        if lang == 'ru':
            verbs_as_nouns = []
            verb_suffixes = ['ть', 'ться', 'ти', 'тись']
            exceptions = ['кровать', 'путь', 'кость', 'новость', 'радость', 'часть', 'власть', 'ночь', 'дочь', 'мать', 'память']
            for item in items:
                word = item.get('word', '')
                if item.get('form') == 'noun' and any(word.endswith(s) for s in verb_suffixes) and word not in exceptions:
                    verbs_as_nouns.append(word)
            if verbs_as_nouns:
                print(f"  !!! Found {len(verbs_as_nouns)} potential verbs marked as nouns: {', '.join(verbs_as_nouns[:10])}...")

        # Check for weird themes
        themes = {}
        for item in items:
            t = item.get('theme', 'NONE')
            themes[t] = themes.get(t, 0) + 1

        suspicious_themes = [t for t in themes if t not in [
            'body_A0', 'food_drink_A0', 'home_A0', 'colours_A0', 'numbers_1_20_A0', 'days_week_A0', 'jobs_A0', 'transport_A0', 'weather_A0', 'adjectives_A0', 'money_A0', 'family_A0', 'places_countries_cities_A0', 'places_shops_A1', 'places_buildings_activities_A2', 'places_streets_locations_A2',
            'work_A1', 'home_A1', 'routine_A1', 'health_A1', 'food_meals_A1', 'shopping_A1', 'technology_A1', 'leisure_A1', 'social_life_A1', 'feelings_A1', 'transport_A1', 'numbers_money_A1',
            'career_A2', 'property_A2', 'finances_A2', 'health_body_A2', 'food_nutrition_A2', 'relationships_family_A2', 'transport_travel_A2', 'shopping_consumerism_A2', 'technology_A2', 'neighbourhood_A2', 'leisure_hobbies_A2', 'personality_A2', 'environment_A2', 'quantities_A2',
            'career_development_B1', 'work_life_balance_B1', 'mental_health_B1', 'finances_investment_B1', 'housing_mortgages_B1', 'parenting_family_B1', 'relationships_communication_B1', 'society_community_B1', 'equality_rights_B1', 'environment_sustainability_B1', 'media_news_B1', 'education_learning_B1', 'travel_cultural_B1', 'opinion_debate_B1',
            'economy_labour_B2', 'politics_governance_B2', 'gender_equality_B2', 'housing_urban_B2', 'healthcare_systems_B2', 'technology_privacy_B2', 'media_misinformation_B2', 'ethics_justice_B2', 'environment_policy_B2', 'globalisation_trade_B2', 'ageing_demographics_B2', 'crime_punishment_B2', 'academic_vocabulary_B2', 'formal_register_B2',
            'power_institutions_C1', 'identity_self_C1', 'work_culture_C1', 'political_philosophy_C1', 'ethics_relationships_C1', 'intergenerational_issues_C1', 'knowledge_epistemology_C1', 'language_persuasion_C1', 'art_culture_C1', 'science_tech_society_C1', 'sociology_structures_C1', 'psychological_concepts_C1', 'advanced_register_C1',
            'ontology_metaphysics_C2', 'epistemology_truth_C2', 'rhetoric_persuasion_C2', 'psychoanalysis_unconscious_C2', 'political_theory_C2', 'civilisation_history_C2', 'aesthetics_criticism_C2', 'philosophy_language_C2', 'ethics_advanced_C2', 'work_meaning_C2', 'mortality_time_C2', 'meta_argument_C2'
        ]]
        if suspicious_themes:
            print(f"  Suspicious themes: {suspicious_themes}")

        # Check for cat/dog theme
        for item in items:
            if item.get('word') in ['cat', 'dog', 'bird', 'fish', 'chat', 'chien', 'gatto', 'cane', 'кот', 'собака']:
                if item.get('theme') == 'weather_A0':
                    print(f"  !!! Item '{item.get('word')}' has theme 'weather_A0'")
                    break

analyze_vocab()

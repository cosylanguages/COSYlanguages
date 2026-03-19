const COMMON_THEMES = [
    { id: "numbers_math", label: "common_theme_numbers_math" },
    { id: "time", label: "common_theme_time" },
    { id: "personal_identity", label: "common_theme_personal_identity" },
    { id: "family_relationships", label: "common_theme_family_relationships" },
    { id: "home_living", label: "common_theme_home_living" },
    { id: "food_drink", label: "common_theme_food_drink" },
    { id: "health_body", label: "common_theme_health_body" },
    { id: "work_employment", label: "common_theme_work_employment" },
    { id: "education_learning", label: "common_theme_education_learning" },
    { id: "transport_travel", label: "common_theme_transport_travel" },
    { id: "shopping_money", label: "common_theme_shopping_money" },
    { id: "technology_media", label: "common_theme_technology_media" },
    { id: "environment_nature", label: "common_theme_environment_nature" },
    { id: "society_politics", label: "common_theme_society_politics" },
    { id: "culture_arts", label: "common_theme_culture_arts" },
    { id: "science_tech", label: "common_theme_science_tech" },
    { id: "language_communication", label: "common_theme_language_communication" },
    { id: "sport_leisure", label: "common_theme_sport_leisure" },
    { id: "feelings_emotions", label: "common_theme_feelings_emotions" },
    { id: "places_geography", label: "common_theme_places_geography" },
    { id: "describing_things", label: "common_theme_describing_things" },
    { id: "clothes_appearance", label: "common_theme_clothes_appearance" },
    { id: "prepositions_grammar", label: "common_theme_prepositions_grammar" },
    { id: "modifiers_intensifiers", label: "common_theme_modifiers_intensifiers" },
    { id: "ethics_philosophy", label: "common_theme_ethics_philosophy" },
    { id: "opinion_debate", label: "common_theme_opinion_debate" }
];

const themeConfig = {
    "starter": {
        "A0": {
            "description": "Concrete, single-concept nouns and basic adjectives only.",
            "themes": {
                "body_A0": "The body",
                "food_drink_A0": "Food & drink",
                "home_A0": "The home (rooms & furniture)",
                "colours_A0": "Colours",
                "numbers_0_9_A0": "Numbers 0–9",
                "numbers_10_19_A0": "Numbers 10–19",
                "numbers_20_99_A0": "Numbers 20–99",
                "days_week_A0": "Days of the week",
                "jobs_A0": "Basic jobs (doctor, teacher, driver)",
                "transport_A0": "Transport (car, bus, train, plane)",
                "weather_A0": "Weather (sun, rain, cold, hot)",
                "adjectives_A0": "Basic adjectives (big, small, good, bad, cheap, expensive)",
                "money_A0": "Money (coin, note, price)",
                "family_A0": "Family members (mother, father, sister, brother, partner)",
                "places_countries_cities_A0": "Countries & cities"
            }
        },
        "A1": {
            "description": "Everyday adult life — familiar objects and situations.",
            "themes": {
                "places_shops_A1": "Shops",
                "work_A1": "Work basics (job, boss, salary, office, meeting)",
                "home_A1": "The home (rent, flat, house, kitchen, clean)",
                "routine_A1": "Daily routine (morning, commute, lunch, evening)",
                "health_A1": "Health basics (ill, doctor, sleep, tired, pain)",
                "food_meals_A1": "Food & meals (breakfast, dinner, cook, eat out)",
                "shopping_A1": "Shopping (price, cost, pay, spend, save)",
                "technology_A1": "Technology basics (phone, computer, message, internet)",
                "leisure_A1": "Leisure (weekend, holiday, relax, read, watch)",
                "social_life_A1": "Social life (friend, meet, invite, together, alone)",
                "feelings_A1": "Feelings (happy, worried, relaxed, bored, stressed)",
                "transport_A1": "Transport (ticket, journey, late, arrive)",
                "numbers_100_plus_A1": "Numbers 100+",
                "numbers_money_A1": "Numbers & money (bill, change, bank, account)"
            }
        }
    },
    "elementary": {
        "description": "Adult everyday contexts — work, health, money, relationships.",
        "themes": {
            "numbers_1000_plus_A2": "Numbers 1000+",
            "career_A2": "Career & workplace",
            "property_A2": "Renting & buying property",
            "finances_A2": "Personal finances",
            "health_body_A2": "Health & the body",
            "food_nutrition_A2": "Food, diet & nutrition",
            "relationships_family_A2": "Relationships & family",
            "transport_travel_A2": "Transport & travel",
            "shopping_consumerism_A2": "Shopping & consumerism",
            "technology_A2": "Technology in daily life",
            "places_buildings_activities_A2": "Buildings & activities",
            "places_streets_locations_A2": "Streets & locations",
            "neighbourhood_A2": "The neighbourhood & community",
            "leisure_hobbies_A2": "Leisure & hobbies",
            "personality_A2": "Describing personality",
            "environment_A2": "The environment (basic)",
            "quantities_A2": "Quantities & frequency"
        }
    },
    "intermediate": {
        "description": "Broader adult society — work, values, health, environment.",
        "themes": {
            "career_development_B1": "Career development & ambition",
            "work_life_balance_B1": "Work-life balance & wellbeing",
            "mental_health_B1": "Mental health",
            "finances_investment_B1": "Personal finances & investment",
            "housing_mortgages_B1": "Housing & mortgages",
            "parenting_family_B1": "Parenting & family decisions",
            "relationships_communication_B1": "Relationships & communication",
            "society_community_B1": "Society & community",
            "equality_rights_B1": "Equality & rights (basic)",
            "environment_sustainability_B1": "Environment & sustainability",
            "media_news_B1": "Media & news",
            "education_learning_B1": "Education & learning (adult)",
            "travel_cultural_B1": "Travel & cultural experience",
            "opinion_debate_B1": "Opinion & debate vocabulary"
        }
    },
    "upper-intermediate": {
        "description": "Abstract adult themes — society, politics, economy, ethics.",
        "themes": {
            "economy_labour_B2": "The economy & labour market",
            "politics_governance_B2": "Politics & governance",
            "gender_equality_B2": "Gender & equality",
            "housing_urban_B2": "Housing & urban development",
            "healthcare_systems_B2": "Healthcare systems",
            "technology_privacy_B2": "Technology & privacy",
            "media_misinformation_B2": "Media & misinformation",
            "ethics_justice_B2": "Ethics & justice",
            "environment_policy_B2": "The environment (policy)",
            "globalisation_trade_B2": "Globalisation & trade",
            "ageing_demographics_B2": "Ageing & demographics",
            "crime_punishment_B2": "Crime & punishment",
            "academic_vocabulary_B2": "Academic & discourse vocabulary",
            "formal_register_B2": "Formal register & hedging"
        }
    },
    "advanced": {
        "description": "Conceptual & professional — power, identity, philosophy of adult life.",
        "themes": {
            "power_institutions_C1": "Power, institutions & ideology",
            "identity_self_C1": "Identity & the self",
            "work_culture_C1": "Work culture & organisational psychology",
            "political_philosophy_C1": "Political philosophy",
            "ethics_relationships_C1": "Ethics of care & relationships",
            "intergenerational_issues_C1": "Intergenerational issues",
            "knowledge_epistemology_C1": "Knowledge & epistemology",
            "language_persuasion_C1": "Language & persuasion",
            "art_culture_C1": "Art, culture & criticism",
            "science_tech_society_C1": "Science, technology & society",
            "sociology_structures_C1": "Sociology & social structures",
            "psychological_concepts_C1": "Psychological concepts",
            "advanced_register_C1": "Advanced register & register-switching"
        }
    },
    "proficiency": {
        "description": "Philosophical, rhetorical & meta-conceptual.",
        "themes": {
            "ontology_metaphysics_C2": "Ontology & metaphysics",
            "epistemology_truth_C2": "Epistemology & truth",
            "rhetoric_persuasion_C2": "Rhetoric & persuasion devices",
            "psychoanalysis_unconscious_C2": "Psychoanalysis & the unconscious",
            "political_theory_C2": "Political theory (advanced)",
            "civilisation_history_C2": "Civilisation & history",
            "aesthetics_criticism_C2": "Aesthetics & art criticism",
            "philosophy_language_C2": "Philosophy of language",
            "ethics_advanced_C2": "Ethics (advanced)",
            "work_meaning_C2": "The philosophy of work & meaning",
            "mortality_time_C2": "Mortality & time",
            "meta_argument_C2": "Meta-argument vocabulary"
        }
    }
};

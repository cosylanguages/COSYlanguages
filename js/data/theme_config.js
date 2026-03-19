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
        "description": "Concrete, single-concept nouns and basic adjectives only. Everyday adult life — familiar objects and situations.",
        "common_themes": {
            "numbers_math": {
                "numbers_0_9_A0": "Numbers 0–9",
                "numbers_10_19_A0": "Numbers 10–19",
                "numbers_20_99_A0": "Numbers 20–99",
                "numbers_100_999_A1": "Numbers 100–999",
                "numbers_1000_plus_A1": "Numbers 1,000+",
                "ordinal_numbers_A1": "Ordinal numbers"
            },
            "time": {
                "days_week_A0": "Days of the week",
                "months_year_A0": "Months of the year",
                "seasons_A0": "Seasons",
                "times_day_A0": "Times of day",
                "telling_time_A0": "Telling the time",
                "dates_years_A1": "Dates & years",
                "frequency_adverbs_A1": "Frequency adverbs",
                "duration_expressions_A1": "Duration expressions",
                "routine_A1": "Daily routine"
            },
            "personal_identity": {
                "nationality_country_A0": "Nationality & country",
                "age_A0": "Age",
                "marital_status_A0": "Marital status",
                "occupation_job_A0": "Occupation & job title",
                "address_location_A1": "Address & location",
                "contact_details_A1": "Contact details",
                "physical_appearance_A1": "Physical appearance",
                "social_life_A1": "Social life"
            },
            "family_relationships": {
                "family_A0": "Family members"
            },
            "home_living": {
                "home_A0": "The home (rooms & furniture)",
                "home_A1": "The home (rent, flat, house, kitchen, clean)"
            },
            "food_drink": {
                "food_drink_A0": "Food & drink",
                "food_meals_A1": "Food & meals"
            },
            "health_body": {
                "body_A0": "The body",
                "health_A1": "Health basics"
            },
            "work_employment": {
                "jobs_A0": "Basic jobs",
                "work_A1": "Work basics"
            },
            "transport_travel": {
                "transport_A0": "Transport",
                "transport_A1": "Transport (tickets, journey)"
            },
            "shopping_money": {
                "money_A0": "Money",
                "shopping_A1": "Shopping",
                "numbers_money_A1": "Numbers & money"
            },
            "technology_media": {
                "technology_A1": "Technology basics"
            },
            "sport_leisure": {
                "leisure_A1": "Leisure"
            },
            "feelings_emotions": {
                "feelings_A1": "Feelings"
            },
            "places_geography": {
                "places_countries_cities_A0": "Countries & cities",
                "places_shops_A1": "Shops"
            },
            "describing_things": {
                "colours_A0": "Colours",
                "adjectives_A0": "Basic adjectives"
            }
        }
    },
    "elementary": {
        "description": "Adult everyday contexts — work, health, money, relationships.",
        "common_themes": {
            "numbers_math": {
                "numbers_1000_plus_A2": "Numbers 1,000+",
                "fractions_A2": "Fractions",
                "decimals_A2": "Decimals",
                "percentages_A2": "Percentages",
                "basic_arithmetic_A2": "Basic arithmetic"
            },
            "personal_identity": {
                "personality_character_A2": "Personality & character",
                "interests_hobbies_A2": "Interests & hobbies"
            },
            "family_relationships": {
                "relationships_family_A2": "Relationships & family"
            },
            "home_living": {
                "property_A2": "Renting & buying property",
                "neighbourhood_A2": "The neighbourhood & community"
            },
            "food_drink": {
                "food_nutrition_A2": "Food, diet & nutrition"
            },
            "health_body": {
                "health_body_A2": "Health & the body"
            },
            "work_employment": {
                "career_A2": "Career & workplace"
            },
            "transport_travel": {
                "transport_travel_A2": "Transport & travel"
            },
            "shopping_money": {
                "finances_A2": "Personal finances",
                "shopping_consumerism_A2": "Shopping & consumerism"
            },
            "technology_media": {
                "technology_A2": "Technology in daily life"
            },
            "environment_nature": {
                "environment_A2": "The environment (basic)"
            },
            "sport_leisure": {
                "leisure_hobbies_A2": "Leisure & hobbies"
            },
            "places_geography": {
                "places_buildings_activities_A2": "Buildings & activities",
                "places_streets_locations_A2": "Streets & locations"
            },
            "modifiers_intensifiers": {
                "quantities_A2": "Quantities & frequency"
            },
            "time": {
                "past_time_A2": "Past time expressions",
                "future_time_A2": "Future time expressions",
                "sequence_order_A2": "Sequence & order"
            }
        }
    },
    "intermediate": {
        "description": "Broader adult society — work, values, health, environment.",
        "common_themes": {
            "numbers_math": {
                "approximation_estimation_B1": "Approximation & estimation"
            },
            "personal_identity": {
                "values_beliefs_B1": "Values & beliefs"
            },
            "health_body": {
                "mental_health_B1": "Mental health"
            },
            "work_employment": {
                "career_development_B1": "Career development & ambition",
                "work_life_balance_B1": "Work-life balance & wellbeing"
            },
            "education_learning": {
                "education_learning_B1": "Education & learning (adult)"
            },
            "transport_travel": {
                "travel_cultural_B1": "Travel & cultural experience"
            },
            "shopping_money": {
                "finances_investment_B1": "Personal finances & investment"
            },
            "technology_media": {
                "media_news_B1": "Media & news"
            },
            "environment_nature": {
                "environment_sustainability_B1": "Environment & sustainability"
            },
            "society_politics": {
                "society_community_B1": "Society & community",
                "equality_rights_B1": "Equality & rights (basic)"
            },
            "family_relationships": {
                "parenting_family_B1": "Parenting & family decisions",
                "relationships_communication_B1": "Relationships & communication"
            },
            "opinion_debate": {
                "opinion_debate_B1": "Opinion & debate vocabulary"
            },
            "home_living": {
                "housing_mortgages_B1": "Housing & mortgages"
            },
            "time": {
                "tenses_time_B1": "Tenses & time reference",
                "periods_eras_B1": "Periods & eras",
                "deadlines_scheduling_B1": "Deadlines & scheduling"
            }
        }
    },
    "upper-intermediate": {
        "description": "Abstract adult themes — society, politics, economy, ethics.",
        "common_themes": {
            "numbers_math": {
                "mathematical_operations_B2": "Mathematical operations"
            },
            "personal_identity": {
                "identity_self_concept_B2": "Identity & self-concept"
            },
            "health_body": {
                "healthcare_systems_B2": "Healthcare systems"
            },
            "home_living": {
                "housing_urban_B2": "Housing & urban development"
            },
            "technology_media": {
                "technology_privacy_B2": "Technology & privacy",
                "media_misinformation_B2": "Media & misinformation"
            },
            "environment_nature": {
                "environment_policy_B2": "The environment (policy)"
            },
            "society_politics": {
                "economy_labour_B2": "The economy & labour market",
                "politics_governance_B2": "Politics & governance",
                "gender_equality_B2": "Gender & equality",
                "globalisation_trade_B2": "Globalisation & trade",
                "ageing_demographics_B2": "Ageing & demographics",
                "crime_punishment_B2": "Crime & punishment"
            },
            "describing_things": {
                "academic_vocabulary_B2": "Academic & discourse vocabulary"
            },
            "language_communication": {
                "formal_register_B2": "Formal register & hedging"
            },
            "ethics_philosophy": {
                "ethics_justice_B2": "Ethics & justice"
            }
        }
    },
    "advanced": {
        "description": "Conceptual & professional — power, identity, philosophy of adult life.",
        "common_themes": {
            "numbers_math": {
                "mathematical_operations_B2": "Mathematical operations"
            },
            "personal_identity": {
                "social_identity_belonging_C1": "Social identity & belonging"
            },
            "health_body": {
                "psychological_concepts_C1": "Psychological concepts"
            },
            "work_employment": {
                "work_culture_C1": "Work culture & organisational psychology"
            },
            "culture_arts": {
                "art_culture_C1": "Art, culture & criticism"
            },
            "science_tech": {
                "knowledge_epistemology_C1": "Knowledge & epistemology",
                "science_tech_society_C1": "Science, technology & society"
            },
            "society_politics": {
                "power_institutions_C1": "Power, institutions & ideology",
                "intergenerational_issues_C1": "Intergenerational issues",
                "sociology_structures_C1": "Sociology & social structures"
            },
            "language_communication": {
                "language_persuasion_C1": "Language & persuasion",
                "advanced_register_C1": "Advanced register & register-switching"
            },
            "ethics_philosophy": {
                "political_philosophy_C1": "Political philosophy",
                "ethics_relationships_C1": "Ethics of care & relationships"
            }
        }
    },
    "proficiency": {
        "description": "Philosophical, rhetorical & meta-conceptual.",
        "common_themes": {
            "numbers_math": {
                "mathematical_operations_B2": "Mathematical operations"
            },
            "work_employment": {
                "work_meaning_C2": "The philosophy of work & meaning"
            },
            "culture_arts": {
                "civilisation_history_C2": "Civilisation & history",
                "aesthetics_criticism_C2": "Aesthetics & art criticism"
            },
            "language_communication": {
                "rhetoric_persuasion_C2": "Rhetoric & persuasion devices"
            },
            "opinion_debate": {
                "meta_argument_C2": "Meta-argument vocabulary"
            },
            "ethics_philosophy": {
                "ontology_metaphysics_C2": "Ontology & metaphysics",
                "epistemology_truth_C2": "Epistemology & truth",
                "political_theory_C2": "Political theory (advanced)",
                "philosophy_language_C2": "Philosophy of language",
                "ethics_advanced_C2": "Ethics (advanced)",
                "mortality_time_C2": "Mortality & time"
            },
            "health_body": {
                "psychoanalysis_unconscious_C2": "Psychoanalysis & the unconscious"
            }
        }
    }
};

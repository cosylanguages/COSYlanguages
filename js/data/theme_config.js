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
                "immediate_family_A0": "Immediate family members",
                "extended_family_A1": "Extended family members",
                "family_life_A1": "Family life & routines"
            },
            "home_living": {
                "rooms_of_a_home_A0": "Rooms of a home",
                "furniture_objects_A0": "Furniture & objects",
                "types_of_accommodation_A1": "Types of accommodation",
                "household_tasks_A1": "Household tasks"
            },
            "food_drink": {
                "basic_foods_A0": "Basic foods",
                "drinks_A0": "Drinks",
                "meals_of_the_day_A0": "Meals of the day",
                "cooking_methods_A1": "Cooking methods",
                "tastes_textures_A1": "Tastes & textures"
            },
            "health_body": {
                "parts_of_the_body_A0": "Parts of the body",
                "common_illnesses_symptoms_A1": "Common illnesses & symptoms",
                "doctor_medical_appointments_A1": "Doctor & medical appointments"
            },
            "work_employment": {
                "jobs_titles_professions_A0": "Job titles & professions",
                "workplace_basics_A1": "Workplace basics",
                "daily_work_routines_A1": "Daily work routines"
            },
            "education_learning":{
                "school_subjects_A0": "School subjects",
                "classroom_language_A0": "Classroom language",
                "types_of_education_A1": "Types of education",
                "learning_studying_A1": "Learning & studying"
            },
            "transport_travel": {
                "modes_of_transport_A0": "Modes of transport",
                "travel_vocabulary_basics_A0": "Travel vocabulary basics",
                "directions_navigation_A1": "Directions & navigation"
            },
            "shopping_money": {
                "everyday_shopping_A0": "Everyday shopping",
                "money_payment_A1": "Money & payment"
            },
            "technology_media": {
                "basic_technology_devices_A0": "Basic technology devices",
                "using_a_smartphone_A1": "Using a smartphone"
            },
            "environment_nature": {
                "weather_A0": "Weather",
                "animals_A0": "Animals",
                "plants_natural_world_A1": "Plants & natural world",
                "seasons_climate_A1": "Seasons & climate"
            },
            "culture_arts": {
                "music_A1": "Music",
                "cinema_film_A1": "Cinema & film",
                "books_reading_A1": "Books & reading"
            },
            "sport_leisure": {
                "common_sports_A0": "Common sports",
                "sports_equipment_A1": "Sports equipment",
                "playing_watching_sport_A1": "Playing & watching sport",
                "leisure_activities_A1": "Leisure activities"
            },
            "feelings_emotions": {
                "basic_positive_emotions_A0": "Basic positive emotions",
                "basic_negative_emotions_A0": "Basic negative emotions",
                "surprise_interest_A1": "Surprise & interest"
            },
            "places_geography": {
                "rooms_indoor_spaces_A0": "Rooms & indoor spaces",
                "local_places_services_A0": "Local places & services",
                "cities_towns_A1": "Cities & towns",
                "countries_capitals_A1": "Countries & capitals"
            },
            "describing_things": {
                "colours_patterns_A0": "Colours & patterns",
                "size_shape_A0": "Size & shape"
            },
            "clothes_appearance": {
                "items_of_clothing_A0": "Items of clothing",
                "acccessories_A1": "Accessories",
                "dressing_style_A1": "Dressing & style"
            },
            "opinion_debate": {
                "giving_opinions_A1": "Giving opinions"
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
                "relationships_dating_A2": "Relationships & dating",
                "marriage_partnership_A2": "Marriage & partnership"
            },
            "home_living": {
                "property_A2": "Renting & buying property",
                "home_repairs_maintenance_A2": "Home repairs & maintenance",
                "moving_home_A2": "Moving home",
                "neighbourhood_A2": "The neighbourhood & community"
            },
            "food_drink": {
                "restaurants_ordering_A2": "Restaurants & ordering",
                "shopping_for_food_A2": "Shopping for food",
                "diet_nutrition_A2": "Diet & nutrition"
            },
            "health_body": {
                "exercise_fitness_A2": "Exercise & fitness",
                "diet_healthy_eating_A2": "Diet & healthy eating"
            },
            "work_employment": {
                "job_applications_interviews_A2": "Job applications & interviews",
                "career_development_A2": "Career development"
             },
            "education_learning":{
                "qualifications_exams_A0": "Qualifications & exams"
            },
            "transport_travel": {
                "booking_planning_a_trip_A2": "Booking & planning a trip",
                "holiday_types_A2": "Holiday types",
                "accommodation_A2": "Accommodation",
                "at_the_airport_A2": "At the airport"
            },
            "shopping_money": {
                "finances_A2": "Personal finances",
                "bankingA2": "Banking"
            },
            "technology_media": {
                "internet_social_media_A2": "The internet & social media",
                "news_media_A2": "News & media"
            },
            "society_politics": {
                "community_neighbourhood_A2": "Community & neighbourhood",
                "customs_traditions_A2": "Customs & traditions"
            },
            "culture_arts": {
                "basic_science_A2": "Basic science vocabulary",
                "human_body_A2": "The human body"
            },
            "science_tech": {
                "art_design_A2": "Art & design",
                "theatre_performance_A2": "Theatre & performance",
            },
            "sport_leisure": {
                "exercise_fitness_A2": "Exercise & fitness"
            },
            "feelings_emotions": {
                "social_emotions_A2": "Social emotions",
                "emotional_intensity_A2": "Emotional intensity",
            },
            "places_geography": {
                "landscape_geography_A2": "Landscape & geography",
                "directions_location_A2": "Directions & location"
            },
            "describing_things": {
                "materials_textures_A2": "Materials & textures",
                "condition_state_A2": "Condition & state"
            },
            "clothes_appearance": {
                "shopping_for_clothes_A0": "Shopping for clothes"
            },
            "modifiers_intensifiers": {
                "quantities_A2": "Quantities & frequency"
            },
            "opinion_debate": {
                "giving_opinions_A1": "Giving opinions"
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
                "parenting_childcare_B1": "Parenting & childcare",
                "family_dynamics_B1": "Family dynamics & conflict"
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
            "family_relationships": {
                "ageing_eldercare_B2": "Ageing & eldercare",
                "family_structure_B2": "Family structure & society"
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
            "family_relationships": {
                "intergenerational_issues_C1": "Intergenerational issues"
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
            "ethics_philosophy": {
                "ontology_existence_C2": "Ontology & existence",
                "epistemology_knowledge_C2": "Epistemology & knowledge",
                "political_theory_C2": "Political theory",
                "philosophy_language_C2": "Philosophy of language",
                "ethics_advanced_C2": "Ethics",
                "mortality_time_C2": "Mortality & time"
            },
            "health_body": {
                "psychoanalysis_unconscious_C2": "Psychoanalysis & the unconscious"
            },
            "opinion_debate": {
                "meta_argument_deconstruction_C2": "Meta-argument & deconstruction"
            }
        }
    }
};

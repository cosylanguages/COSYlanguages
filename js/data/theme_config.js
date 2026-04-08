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
        "description": "desc_a1",
        "common_themes": {
            "numbers_math": {
                "numbers_0_9_A1": "Cardinal numbers 0–9",
                "numbers_10_19_A1": "Cardinal numbers 10–19",
                "numbers_20_99_A1": "Cardinal numbers 20–99",
                "numbers_100_999_A1": "Cardinal numbers 100–999",
                "numbers_1000_plus_A1": "Cardinal numbers 1,000+",
                "ordinal_numbers_A1": "Ordinal numbers"
            },
            "time": {
                "days_week_A1": "Days of the week",
                "months_year_A1": "Months of the year",
                "seasons_A1": "Seasons",
                "times_day_A1": "Times of day",
                "telling_time_A1": "Telling the time",
                "dates_years_A1": "Dates & years",
                "frequency_adverbs_A1": "Frequency adverbs",
                "duration_expressions_A1": "Duration expressions"
            },
            "personal_identity": {
                "personal_identity_A1": "Personal identity",
                "name_greeting_A1": "Name & greeting",
                "nationality_country_A1": "Nationality & country",
                "age_A1": "Age",
                "marital_status_A1": "Marital status",
                "occupation_job_title_A1": "Occupation & job title",
                "address_location_A1": "Address & location",
                "contact_details_A1": "Contact details",
                "physical_appearance_A1": "Physical appearance"
            },
            "family_relationships": {
                "immediate_family_A1": "Immediate family members",
                "extended_family_A1": "Extended family members",
                "family_life_A1": "Family life & routines"
            },
            "home_living": {
                "rooms_of_a_home_A1": "Rooms of a home",
                "furniture_objects_A1": "Furniture & objects",
                "household_items_A1": "Household items",
                "kitchen_items_A1": "Kitchen items",
                "types_of_accommodation_A1": "Types of accommodation",
                "household_tasks_A1": "Household tasks"
            },
            "food_drink": {
                "basic_foods_A1": "Basic foods",
                "drinks_A1": "Drinks",
                "meals_of_the_day_A1": "Meals of the day",
                "cooking_methods_A1": "Cooking methods",
                "tastes_textures_A1": "Tastes & textures"
            },
            "health_body": {
                "health_body_A1": "Health & the body",
                "body_parts_A1": "Parts of the body",
                "illnesses_symptoms_A1": "Common illnesses & symptoms",
                "medical_appointments_A1": "Doctor & medical appointments"
            },
            "work_employment": {
                "job_titles_professions_A1": "Job titles & professions",
                "workplace_basics_A1": "Workplace basics",
                "daily_work_routines_A1": "Daily work routines"
            },
            "education_learning": {
                "school_subjects_A1": "School subjects",
                "classroom_language_A1": "Classroom language",
                "school_stationery_A1": "School & stationery",
                "types_of_education_A1": "Types of education",
                "learning_studying_A1": "Learning & studying"
            },
            "transport_travel": {
                "modes_of_transport_A1": "Modes of transport",
                "travel_vocabulary_basics_A1": "Travel vocabulary basics",
                "directions_navigation_A1": "Directions & navigation",
                "public_transport_A1": "Public transport"
            },
            "shopping_money": {
                "everyday_shopping_A1": "Everyday shopping",
                "money_payment_A1": "Money & payment",
                "shops_services_A1": "Shops & services",
                "places_shops_A1": "Places & shops"
            },
            "technology_media": {
                "basic_technology_devices_A1": "Basic technology devices",
                "using_smartphone_A1" : "Using a smartphone"
            },
            "environment_nature": {
                "weather_A1": "Weather",
                "animals_A1": "Animals",
                "pets_A1": "Pets",
                "sea_animals_A1": "Sea animals",
                "insects_A1": "Insects",
                "plants_natural_world_A1": "Plants & natural world",
                "seasons_climate_A1": "Seasons & climate",
                "nature_landscapes_A1": "Nature & landscapes"
            },
            "language_communication": {
                "greetings_social_phrases_A1": "Greetings & social phrases",
                "asking_answering_questions_A1": "Asking & answering questions"
            },
            "sport_leisure": {
                "common_sports_A1": "Common sports",
                "sports_equipment_A1": "Sports equipment",
                "playing_watching_sport_A1": "Playing & watching sport",
                "leisure_activities_A1": "Leisure activities",
                "toys_games_A1": "Toys & games",
                "hobbies_interests_A1": "Hobbies & interests"
            },
            "feelings_emotions": {
                "basic_positive_emotions_A1": "Basic positive emotions",
                "basic_negative_emotions_A1": "Basic negative emotions",
                "surprise_interest_A1": "Surprise & interest"
            },
            "places_geography": {
                "rooms_indoor_spaces_A1": "Rooms & indoor spaces",
                "local_places_services_A1": "Local places & services",
                "cities_towns_A1": "Cities & towns",
                "countries_capitals_A1": "Countries & capitals",
                "distance_A1": "Distance"
            },
            "describing_things": {
                "colours_patterns_A1": "Colours & patterns",
                "size_shape_A1": "Size & shape",
                "shapes_A1": "Shapes",
                "describing_things_A1": "Describing things"
            },
            "culture_arts": {
                "music_A1": "Music",
                "musical_instruments_A1": "Musical instruments",
                "cinema_film_A1": "Cinema & film",
                "books_reading_A1": "Books & reading",
                "places_culture_leisure_A1": "Places of culture & leisure"
            },
            "clothes_appearance": {
                "items_of_clothing_A1": "Items of clothing",
                "accessories_A1": "Accessories",
                "dressing_style_A1": "Dressing & style"
            },
            "prepositions_grammar": {
                "prepositions_place_A1": "Prepositions of place",
                "prepositions_time_A1": "Prepositions of time",
                "prepositions_movement_A1": "Prepositions of movement",
                "conjunctions_connectors_A1": "Conjunctions & connectors"
            },
            "modifiers_intensifiers": {
                "basic_intensifiers_A1": "Basic intensifiers"
            },
            "opinion_debate": {
                "giving_opinions_A1": "Giving opinions"
            }
        }
    },
    "elementary": {
        "description": "desc_a2",
        "common_themes": {
            "numbers_math": {
                "fractions_A2": "Fractions",
                "decimals_A2": "Decimals",
                "percentages_A2": "Percentages",
                "basic_arithmetic_A2": "Basic arithmetic"
            },
            "time": {
                "past_time_A2": "Past time expressions",
                "future_time_A2": "Future time expressions",
                "sequence_order_A2": "Sequence & order"
            },
            "personal_identity": {
                "personality_character_A2": "Personality & character",
                "interests_hobbies_A2": "Interests & hobbies"
            },
            "family_relationships": {
                "relationships_family_A2": "Relationships & family",
                "relationships_dating_A2": "Relationships & dating",
                "marriage_partnership_A2": "Marriage & partnership"
            },
            "home_living": {
                "renting_landlords_A2": "Renting & landlords",
                "home_repairs_maintenance_A2": "Home repairs & maintenance",
                "home_furnishings_A2": "Home furnishings",
                "neighbourhood_local_A2": "Neighbourhood & local area",
                "moving_home_A2": "Moving home"
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
                "job_apps_interviews_A2": "Job applications & interviews",
                "career_development_A2": "Career development"
            },
            "education_learning": {
                "qualifications_exams_A2": "Qualifications & exams",
                "school_life_routines_A2": "School life & routines"
            },
            "transport_travel": {
                "booking_planning_a_trip_A2": "Booking & planning a trip",
                "holiday_types_A2": "Holiday types",
                "accommodation_A2": "Accommodation",
                "at_the_airport_A2": "At the airport",
                "driving_roads_A2": "Driving & roads"
            },
            "shopping_money": {
                "finances_A2": "Personal finances",
                "banking_A2": "Banking"
            },
            "technology_media": {
                "internet_social_media_A2": "The internet & social media",
                "news_media_A2": "News & media"
            },
            "environment_nature": {
                "weather_climate_A2": "Weather & climate",
                "animals_nature_A2": "Animals & nature",
                "environmental_protection_A2": "Environmental protection"
            },
            "society_politics": {
                "community_neighbourhood_local_A2": "Community & neighbourhood",
                "customs_traditions_A2": "Customs & traditions"
            },
            "culture_arts": {
                "art_design_A2": "Art & design",
                "theatre_performance_A2": "Theatre & performance"
            },
            "science_tech": {
                "basic_science_A2": "Basic science vocabulary",
                "human_body_A2": "The human body"
            },
            "feelings_emotions": {
                "social_emotions_A2": "Social emotions",
                "emotional_intensity_A2": "Emotional intensity"
            },
            "places_geography": {
                "landscape_geography_A2": "Landscape & geography",
                "directions_location_A2": "Directions & location"
            },
            "describing_things": {
                "materials_textures_A2": "Materials & textures",
                "condition_state_A2": "Condition & state",
                "personal_qualities_A2": "Personal qualities",
                "quantity_degree_A2": "Quantity & degree",
                "comparison_A2": "Comparison"
            },
            "clothes_appearance": {
                "shopping_for_clothes_A2": "Shopping for clothes"
            },
            "modifiers_intensifiers": {
                "degree_adverbs_A2": "Degree adverbs",
                "approximation_A2": "Approximation"
            },
            "ethics_philosophy": {
                "right_wrong_basic_A2": "Right & wrong (basic)"
            },
            "opinion_debate": {
                "agreeing_disagreeing_A2": "Agreeing & disagreeing",
                "giving_reasons_A2": "Giving reasons"
            }
        }
    },
    "intermediate": {
        "description": "desc_b1",
        "common_themes": {
            "numbers_math": {
                "approximation_estimation_B1": "Approximation & estimation"
            },
            "time": {
                "tenses_time_B1": "Tenses & time reference",
                "periods_eras_B1": "Periods & eras",
                "deadlines_scheduling_B1": "Deadlines & scheduling"
            },
            "personal_identity": {
                "values_beliefs_B1": "Values & beliefs"
            },
            "family_relationships": {
                "parenting_childcare_B1": "Parenting & childcare",
                "family_dynamics_B1": "Family dynamics & conflict"
            },
            "home_living": {
                "buying_property_B1": "Buying a property"
            },
            "food_drink": {
                "food_culture_cuisine_B1": "Food culture & cuisine"
            },
            "health_body": {
                "mental_health_wellbeing_B1": "Mental health & wellbeing",
                "healthcare_systems_B1": "Healthcare systems"
            },
            "work_employment": {
                "work_life_balance_B1": "Work-life balance",
                "workplace_communication_B1": "Workplace communication",
                "career_development_B1": "Career development & ambition"
            },
            "education_learning": {
                "higher_education_B1": "Higher education",
                "lifelong_learning_B1": "Lifelong learning"
            },
            "transport_travel": {
                "travel_cultural_B1": "Travel & cultural experience",
                "sustainable_travel_B1": "Sustainable travel"
            },
            "shopping_money": {
                "finances_investment_B1": "Personal finances & investment",
                "consumer_rights_B1": "Consumer rights"
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
            "culture_arts": {
                "cultural_heritage_B1": "Cultural heritage"
            },
            "science_tech": {
                "natural_sciences_B1": "Natural sciences"
            },
            "language_communication": {
                "expressing_opinion_B1": "Expressing opinion",
                "agreeing_disagreeing_B1": "Agreeing & disagreeing",
                "formal_informal_register_B1": "Formal vs informal register"
            },
            "sport_leisure": {
                "competitive_sport_B1": "Competitive sport"
            },
            "feelings_emotions": {
                "stress_anxiety_B1": "Stress & anxiety"
            },
            "places_geography": {
                "urban_rural_life_B1": "Urban & rural life"
            },
            "describing_things": {
                "spatial_description_B1": "Spatial description"
            },
            "prepositions_grammar": {
                "discourse_markers_B1": "Discourse markers"
            },
            "modifiers_intensifiers": {
                "probability_certainty_B1": "Probability & certainty"
            },
            "ethics_philosophy": {
                "values_principles_B1": "Values & principles"
            },
            "opinion_debate": {
                "structured_argument_B1": "Structured argument"
            }
        }
    },
    "upper-intermediate": {
        "description": "desc_b2",
        "common_themes": {
            "numbers_math": {
                "mathematical_operations_B2": "Mathematical operations"
            },
            "time": {
                "verb_tenses_overview_B2": "Verb tenses overview"
            },
            "personal_identity": {
                "identity_self_concept_B2": "Identity & self-concept"
            },
            "family_relationships": {
                "ageing_eldercare_B2": "Ageing & eldercare",
                "family_structure_B2": "Family structure & society"
            },
            "home_living": {
                "housing_society_B2": "Housing & society"
            },
            "food_drink": {
                "food_ethics_sustainability_B2": "Food ethics & sustainability"
            },
            "health_body": {
                "serious_illness_treatment_B2": "Serious illness & treatment",
                "health_society_B2": "Health & society"
            },
            "work_employment": {
                "employment_law_rights_B2": "Employment law & rights",
                "economy_labour_market_B2": "The economy & labour market"
            },
            "education_learning": {
                "educational_systems_B2": "Educational systems",
                "education_society_B2": "Education & society"
            },
            "transport_travel": {
                "global_tourism_B2": "Global tourism"
            },
            "shopping_money": {
                "ecommerce_digital_payment_B2": "E-commerce & digital payment",
                "global_economy_trade_B2": "Global economy & trade"
            },
            "technology_media": {
                "technology_privacy_B2": "Technology & privacy",
                "media_misinformation_B2": "Media & misinformation"
            },
            "environment_nature": {
                "environment_policy_B2": "The environment (policy)",
                "climate_change_global_action_B2": "Climate change & global action"
            },
            "society_politics": {
                "politics_governance_B2": "Politics & governance",
                "gender_equality_B2": "Gender & equality",
                "globalisation_trade_B2": "Globalisation & trade",
                "ageing_demographics_B2": "Ageing & demographics",
                "crime_punishment_B2": "Crime & punishment"
            },
            "culture_arts": {
                "contemporary_art_B2": "Contemporary art"
            },
            "science_tech": {
                "applied_sciences_engineering_B2": "Applied sciences & engineering",
                "space_exploration_B2": "Space exploration"
            },
            "language_communication": {
                "conversation_management_B2": "Conversation management",
                "persuasion_rhetoric_B2": "Persuasion & rhetoric"
            },
            "sport_leisure": {
                "sport_society_B2": "Sport & society"
            },
            "feelings_emotions": {
                "complex_emotions_B2": "Describing complex emotions",
                "emotional_intelligence_B2": "Emotional intelligence"
            },
            "places_geography": {
                "globalisation_geography_B2": "Globalisation & geography"
            },
            "describing_things": {
                "abstract_description_B2": "Abstract description"
            },
            "clothes_appearance": {
                "fashion_identity_B2": "Fashion & identity"
            },
            "prepositions_grammar": {
                "hedging_qualification_B2": "Hedging & qualification"
            },
            "modifiers_intensifiers": {
                "academic_hedging_B2": "Academic hedging"
            },
            "ethics_philosophy": {
                "ethical_dilemmas_B2": "Ethical dilemmas",
                "political_ethics_B2": "Political ethics"
            },
            "opinion_debate": {
                "formal_debate_vocab_B2": "Formal debate vocabulary",
                "critical_thinking_B2": "Critical thinking",
                "opinion_debate_B2": "Opinions & Debate (Advanced)"
            }
        }
    },
    "advanced": {
        "description": "desc_c1",
        "common_themes": {
            "personal_identity": {
                "social_identity_belonging_C1": "Social identity & belonging"
            },
            "family_relationships": {
                "intergenerational_issues_C1": "Intergenerational issues"
            },
            "health_body": {
                "medical_ethics_C1": "Medical ethics"
            },
            "work_employment": {
                "organisational_culture_C1": "Organisational culture",
                "work_identity_meaning_C1": "Work, identity & meaning"
            },
            "education_learning": {
                "philosophy_education_C1": "Philosophy of education"
            },
            "culture_arts": {
                "art_culture_C1": "Art, culture & criticism"
            },
            "science_tech": {
                "knowledge_epistemology_C1": "Knowledge & epistemology",
                "science_tech_society_C1": "Science, technology & society",
                "digital_ethics_ai_C1": "Digital ethics & AI"
            },
            "society_politics": {
                "power_institutions_C1": "Power, institutions & ideology",
                "sociology_structures_C1": "Sociology & social structures"
            },
            "language_communication": {
                "language_persuasion_C1": "Language & persuasion",
                "advanced_register_C1": "Advanced register & register-switching",
                "discourse_argument_C1": "Discourse & argument structure"
            },
            "feelings_emotions": {
                "psychological_states_C1": "Psychological states"
            },
            "ethics_philosophy": {
                "political_philosophy_C1": "Political philosophy",
                "ethics_relationships_C1": "Ethics of care & relationships",
                "moral_philosophy_C1": "Moral philosophy",
                "existentialism_identity_C1": "Existentialism & identity"
            },
            "opinion_debate": {
                "rhetoric_persuasion_C1": "Rhetoric & persuasion"
            }
        }
    },
    "proficiency": {
        "description": "desc_c2",
        "common_themes": {
            "ethics_philosophy": {
                "ontology_metaphysics_C2": "Ontology & metaphysics",
                "ontology_existence_C2": "Ontology & existence",
                "epistemology_knowledge_C2": "Epistemology & knowledge",
                "epistemology_truth_C2": "Epistemology & truth",
                "political_theory_C2": "Political theory",
                "philosophy_language_C2": "Philosophy of language",
                "ethics_advanced_C2": "Ethics",
                "civilisation_history_C2": "Civilisation & history",
                "mortality_time_C2": "Mortality & time"
            },
            "health_body": {
                "psychoanalysis_unconscious_C2": "Psychoanalysis & the unconscious"
            },
            "culture_arts": {
                "civilisation_history_C2": "Civilisation & history",
                "aesthetics_criticism_C2": "Aesthetics & art criticism"
            },
            "language_communication": {
                "rhetoric_persuasion_C2": "Rhetoric & persuasion devices",
                "linguistics_theory_C2": "Linguistics & language theory"
            },
            "opinion_debate": {
                "meta_argument_deconstruction_C2": "Meta-argument & deconstruction"
            }
        }
    }
};

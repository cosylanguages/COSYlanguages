const speakingData = {
    "en": {
        "opinionArena": [
            {
                "text": "Is breakfast the most important meal?",
                "level": "starter",
                "theme": "food_drinks"
            },
            {
                "text": "Are dogs better pets than cats?",
                "level": "starter",
                "theme": "leisure_hobbies"
            },
            {
                "text": "Should children have mobile phones?",
                "level": "elementary",
                "theme": "science_technology"
            },
            {
                "text": "Is it better to live in a house or an apartment?",
                "level": "elementary",
                "theme": "daily_life"
            },
            {
                "text": "Can we live without the internet for a week?",
                "level": "intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Should everyone learn a second language?",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "Is social media destroying our social skills?",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Should public transport be free?",
                "level": "upper-intermediate",
                "theme": "travel_places"
            },
            {
                "text": "Genetic engineering: Progress or peril?",
                "level": "advanced",
                "theme": "science_technology"
            },
            {
                "text": "Is universal basic income a solution to automation?",
                "level": "advanced",
                "theme": "people_society"
            },
            {
                "text": "Does free will truly exist or is it an illusion?",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "text": "The ethics of colonizing other planets.",
                "level": "proficiency",
                "theme": "science_technology"
            }
        ],
        "criticsCorner": [
            {
                "text": "I think, therefore I am.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "Life is what happens when you're busy making other plans.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "people_society"
            },
            {
                "text": "The only constant is change.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "people_society"
            }
        ],
        "debates": [
            {"topic": "Coffee vs tea — which is a better morning drink?", "sideA": "Coffee", "sideB": "Tea", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Restaurant vs home cooking — which is better?", "sideA": "Restaurant", "sideB": "Home cooking", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Breakfast vs no breakfast — which is better for you?", "sideA": "Breakfast", "sideB": "None", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Water vs juice — which is healthier?", "sideA": "Water", "sideB": "Juice", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Meat vs vegetables — which is more important in a meal?", "sideA": "Meat", "sideB": "Vegetables", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "House vs flat — which is better to live in?", "sideA": "House", "sideB": "Flat", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "City vs village — which is a better place to live?", "sideA": "City", "sideB": "Village", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Cash vs card — which is better to pay with?", "sideA": "Cash", "sideB": "Card", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Saving money vs spending money — which is better?", "sideA": "Saving", "sideB": "Spending", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Renting vs buying — which is better?", "sideA": "Renting", "sideB": "Buying", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Morning work vs evening work — which is better?", "sideA": "Morning", "sideB": "Evening", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Car vs bus — which is better to go to work?", "sideA": "Car", "sideB": "Bus", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Walking vs driving — which is better in the city?", "sideA": "Walking", "sideB": "Driving", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Office vs home — which is a better place to work?", "sideA": "Office", "sideB": "Home", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Morning person vs night person — which is better?", "sideA": "Morning", "sideB": "Night", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Summer vs winter — which season is better?", "sideA": "Summer", "sideB": "Winter", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Short holiday vs long holiday — which is better?", "sideA": "Short", "sideB": "Long", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Phone call vs message — which is better?", "sideA": "Call", "sideB": "Message", "level": "starter", "theme": "science_technology", "ideasA": [], "ideasB": []},
            {"topic": "Morning shower vs evening shower — which is correct?", "sideA": "Morning", "sideB": "Evening", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Monday vs Friday — which day is better?", "sideA": "Monday", "sideB": "Friday", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Too hot vs too cold — which is worse?", "sideA": "Too hot", "sideB": "Too cold", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Window seat vs aisle seat — which is better on a plane?", "sideA": "Window", "sideB": "Aisle", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Working full-time vs working part-time — which is better?", "sideA": "Full-time", "sideB": "Part-time", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Working in an office vs working from home — which do you prefer?", "sideA": "Office", "sideB": "Home", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "A job you love vs a job that pays well — which is more important?", "sideA": "Job you love", "sideB": "Pays well", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Working with other people vs working alone — which is better?", "sideA": "With people", "sideB": "Alone", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "A short commute vs a long commute — which is more acceptable?", "sideA": "Short", "sideB": "Long", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Living alone vs living with a partner — which is better?", "sideA": "Alone", "sideB": "Partner", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Big city vs small town — which is a better place to live as an adult?", "sideA": "Big city", "sideB": "Small town", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Cooking at home vs eating out — which is better for daily life?", "sideA": "At home", "sideB": "Eating out", "level": "elementary", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Having children vs not having children — which life is better?", "sideA": "Children", "sideB": "No children", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Renting a flat vs buying a house — which is better for young adults?", "sideA": "Renting", "sideB": "Buying", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Exercise every day vs rest — which is better for your health?", "sideA": "Exercise", "sideB": "Rest", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Going to the doctor vs waiting — which is better when you feel ill?", "sideA": "Doctor", "sideB": "Waiting", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Sleeping eight hours vs sleeping less — which is more realistic for adults?", "sideA": "8 hours", "sideB": "Less", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Walking to work vs taking the car — which is better for your health?", "sideA": "Walking", "sideB": "Car", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Online shopping vs shopping in a store — which do you prefer?", "sideA": "Online", "sideB": "Store", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Saving for the future vs enjoying money now — which is wiser?", "sideA": "Saving", "sideB": "Enjoying now", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Expensive things vs cheap things — which is better value?", "sideA": "Expensive", "sideB": "Cheap", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Buying new vs buying second-hand — which is better?", "sideA": "New", "sideB": "Second-hand", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Watching TV at home vs going out — which is a better evening?", "sideA": "TV", "sideB": "Going out", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Holidays with family vs holidays with friends — which is better?", "sideA": "Family", "sideB": "Friends", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Staying in your country vs travelling abroad — which is a better holiday?", "sideA": "Your country", "sideB": "Abroad", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Sport vs reading — which is a better hobby for adults?", "sideA": "Sport", "sideB": "Reading", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Seeing friends often vs having time alone — which is more important?", "sideA": "Friends", "sideB": "Alone", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Replying to emails immediately vs leaving them for later — which is more professional?", "sideA": "Immediately", "sideB": "Later", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?", "sideA": "Immediately", "sideB": "Tomorrow", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Being always early vs always five minutes late — which is worse at work?", "sideA": "Early", "sideB": "Late", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Having a very organised desk vs a messy desk — which person is more productive?", "sideA": "Organised", "sideB": "Messy", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Talking about work at dinner vs no work talk at dinner — which rule is better?", "sideA": "Work talk", "sideB": "No work talk", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},

            {
                "topic": "Language: Constitutive vs Expressive",
                "sideA": "Constitutive",
                "sideB": "Expressive",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Shapes reality",
                    "Limits thought"
                ],
                "ideasB": [
                    "Reflects reality",
                    "Tool for thought"
                ]
            },
            {
                "topic": "Precision vs Ambiguity",
                "sideA": "Precision",
                "sideB": "Ambiguity",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Clarity",
                    "Efficiency"
                ],
                "ideasB": [
                    "Nuance",
                    "Diplomacy"
                ]
            },
            {
                "topic": "Rhetoric vs Logic",
                "sideA": "Rhetoric",
                "sideB": "Logic",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Persuasive power",
                    "Emotional appeal"
                ],
                "ideasB": [
                    "Objective truth",
                    "Structural validity"
                ]
            },
            {
                "topic": "Literal vs Interpretive Meaning",
                "sideA": "Literal",
                "sideB": "Interpretive",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Author intent",
                    "Stability"
                ],
                "ideasB": [
                    "Reader response",
                    "Evolving context"
                ]
            },
            {
                "topic": "Scientific Consensus vs Epistemic Humility",
                "sideA": "Consensus",
                "sideB": "Humility",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Established knowledge",
                    "Expert authority"
                ],
                "ideasB": [
                    "Openness to correction",
                    "Recognizing limits"
                ]
            },
            {
                "topic": "Expertise vs Lived Experience",
                "sideA": "Expertise",
                "sideB": "Lived Experience",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Scientific rigor",
                    "Objective data"
                ],
                "ideasB": [
                    "Authentic truth",
                    "Contextual insight"
                ]
            },
            {
                "topic": "Doubt: Virtue vs Paralysis",
                "sideA": "Virtue",
                "sideB": "Paralysis",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Critical thinking",
                    "Skepticism"
                ],
                "ideasB": [
                    "Indecision",
                    "Lack of action"
                ]
            },
            {
                "topic": "Narrative vs Data",
                "sideA": "Narrative",
                "sideB": "Data",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Emotional impact",
                    "Human connection"
                ],
                "ideasB": [
                    "Statistical truth",
                    "Scalability"
                ]
            },
            {
                "topic": "Legitimacy: Consent vs Outcome",
                "sideA": "Consent",
                "sideB": "Outcome",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Democratic process",
                    "Moral right"
                ],
                "ideasB": [
                    "Efficiency",
                    "Effective governance"
                ]
            },
            {
                "topic": "State: Guarantor of Liberty vs Threat",
                "sideA": "Guarantor",
                "sideB": "Threat",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Rule of law",
                    "Protection of rights"
                ],
                "ideasB": [
                    "Abuse of power",
                    "Surveillance"
                ]
            },
            {
                "topic": "Rights-based vs Responsibility-based Politics",
                "sideA": "Rights",
                "sideB": "Responsibilities",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Individual liberty",
                    "Legal protection"
                ],
                "ideasB": [
                    "Collective duty",
                    "Social cohesion"
                ]
            },
            {
                "topic": "Neutrality vs Value-laden Governance",
                "sideA": "Neutrality",
                "sideB": "Value-laden",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Impartiality",
                    "Fairness"
                ],
                "ideasB": [
                    "Moral direction",
                    "Social purpose"
                ]
            },
            {
                "topic": "Intention vs Reception in Art",
                "sideA": "Intention",
                "sideB": "Reception",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Author's vision",
                    "Original context"
                ],
                "ideasB": [
                    "Audience meaning",
                    "Cultural impact"
                ]
            },
            {
                "topic": "Aesthetic vs Moral Value",
                "sideA": "Aesthetic",
                "sideB": "Moral",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Art for art's sake",
                    "Pure beauty"
                ],
                "ideasB": [
                    "Social utility",
                    "Ethical impact"
                ]
            },
            {
                "topic": "The Avant-garde vs Accessibility",
                "sideA": "Avant-garde",
                "sideB": "Accessibility",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Pushing boundaries",
                    "Intellectual challenge"
                ],
                "ideasB": [
                    "Inclusivity",
                    "Democratic art"
                ]
            },
            {
                "topic": "Institutional Art vs Outsider Art",
                "sideA": "Institutional",
                "sideB": "Outsider",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Historical preservation",
                    "Standards"
                ],
                "ideasB": [
                    "Raw authenticity",
                    "Anti-establishment"
                ]
            },
            {
                "topic": "Precautionary vs Proactionary Principle",
                "sideA": "Precautionary",
                "sideB": "Proactionary",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Risk avoidance",
                    "Safety first"
                ],
                "ideasB": [
                    "Innovation",
                    "Embracing change"
                ]
            },
            {
                "topic": "Scientific Progress: Inherently Good vs Neutral",
                "sideA": "Inherently Good",
                "sideB": "Ethically Neutral",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Enlightenment values",
                    "Solving problems"
                ],
                "ideasB": [
                    "Dual-use concern",
                    "Human responsibility"
                ]
            },
            {
                "topic": "Existential Risk vs Present Suffering",
                "sideA": "Existential Risk",
                "sideB": "Present Suffering",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Long-term survival",
                    "Future generations"
                ],
                "ideasB": [
                    "Immediate relief",
                    "Urgent poverty"
                ]
            },
            {
                "topic": "Human Consciousness vs Artificial General Intelligence",
                "sideA": "Consciousness",
                "sideB": "AGI",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Biological uniqueness",
                    "Subjective experience"
                ],
                "ideasB": [
                    "Computational power",
                    "Algorithmic logic"
                ]
            },
            {
                "topic": "Progress: Real vs Illusion",
                "sideA": "Real",
                "sideB": "Illusion",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Technological advancement",
                    "Improved quality of life"
                ],
                "ideasB": [
                    "Cyclical history",
                    "New problems"
                ]
            },
            {
                "topic": "Liberal Order vs Multipolar World",
                "sideA": "Liberal Order",
                "sideB": "Multipolarity",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Universal values",
                    "Global stability"
                ],
                "ideasB": [
                    "Diverse power",
                    "Cultural sovereignty"
                ]
            },
            {
                "topic": "Memory vs Forgetting",
                "sideA": "Memory",
                "sideB": "Forgetting",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Learning from history",
                    "Identity"
                ],
                "ideasB": [
                    "Moving forward",
                    "Overcoming trauma"
                ]
            },
            {
                "topic": "Tragedy of the Commons vs Cooperation",
                "sideA": "Tragedy",
                "sideB": "Cooperation",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Self-interest",
                    "Resource depletion"
                ],
                "ideasB": [
                    "Mutual benefit",
                    "Collective management"
                ]
            },
            {
                "topic": "Red vs Blue — which colour is better?",
                "sideA": "Red",
                "sideB": "Blue",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Yellow vs Green — which colour is happier?",
                "sideA": "Yellow",
                "sideB": "Green",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Black vs White — which colour do you prefer?",
                "sideA": "Black",
                "sideB": "White",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pink vs Purple — which colour is nicer?",
                "sideA": "Pink",
                "sideB": "Purple",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Circle vs Square — which shape is more useful?",
                "sideA": "Circle",
                "sideB": "Square",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small numbers — which are more fun?",
                "sideA": "Big",
                "sideB": "Small",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangle vs Rectangle — which shape is better?",
                "sideA": "Triangle",
                "sideB": "Rectangle",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ball vs Doll — which toy is better?",
                "sideA": "Ball",
                "sideB": "Doll",
                "level": "starter",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pencil vs Pen — which is better to write with?",
                "sideA": "Pencil",
                "sideB": "Pen",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Book vs Picture — which is better to learn from?",
                "sideA": "Book",
                "sideB": "Picture",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chair vs Floor — which is better to sit on?",
                "sideA": "Chair",
                "sideB": "Floor",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cat vs Dog — which animal is better?",
                "sideA": "Cat",
                "sideB": "Dog",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fish vs Bird — which is a better pet?",
                "sideA": "Fish",
                "sideB": "Bird",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small animals — which are nicer?",
                "sideA": "Big",
                "sideB": "Small",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rabbit vs Hamster — which is cuter?",
                "sideA": "Rabbit",
                "sideB": "Hamster",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Water vs Juice — which is better to drink?",
                "sideA": "Water",
                "sideB": "Juice",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apple vs Banana — which fruit is better?",
                "sideA": "Apple",
                "sideB": "Banana",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bread vs Rice — which is better to eat?",
                "sideA": "Bread",
                "sideB": "Rice",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Milk vs Water — which do you prefer?",
                "sideA": "Milk",
                "sideB": "Water",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with family vs Alone — which is better?",
                "sideA": "With family",
                "sideB": "Alone",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having a brother vs Sister — which is better?",
                "sideA": "Brother",
                "sideB": "Sister",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small family — which is nicer?",
                "sideA": "Big family",
                "sideB": "Small family",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Oldest vs Youngest child — which is better?",
                "sideA": "Oldest",
                "sideB": "Youngest",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning vs Afternoon school — which is better?",
                "sideA": "Morning",
                "sideB": "Afternoon",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reading vs Maths — which is more fun?",
                "sideA": "Reading",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "School vs Home learning — which is better?",
                "sideA": "School",
                "sideB": "Home",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Homework vs No homework — which helps more?",
                "sideA": "Homework",
                "sideB": "None",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Alone vs Partner work — which do you prefer?",
                "sideA": "Alone",
                "sideB": "Partner",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Paper vs Computer — which is better?",
                "sideA": "Paper",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Breakfast vs Dinner — which meal is more important?",
                "sideA": "Breakfast",
                "sideB": "Dinner",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hot vs Cold food — which is better?",
                "sideA": "Hot",
                "sideB": "Cold",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Home vs Restaurant — which is better?",
                "sideA": "Home",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sweet vs Savoury — which do you prefer?",
                "sideA": "Sweet",
                "sideB": "Savoury",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking vs Buying food — which is nicer?",
                "sideA": "Cooking",
                "sideB": "Buying",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Early vs Late waking — which is better?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning vs Evening — which part of the day is nicer?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Weekdays vs Weekends — which do you prefer?",
                "sideA": "Weekdays",
                "sideB": "Weekends",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Summer vs Winter — which season is better?",
                "sideA": "Summer",
                "sideB": "Winter",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Early vs Late bed — which is healthier?",
                "sideA": "Early",
                "sideB": "Late",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "House vs Flat — which is better?",
                "sideA": "House",
                "sideB": "Flat",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "City vs Countryside — which is a better place to live?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bedroom vs Living room — which room do you prefer?",
                "sideA": "Bedroom",
                "sideB": "Living room",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Indoor vs Outdoor games — which are more fun?",
                "sideA": "Indoor",
                "sideB": "Outdoor",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Watching TV vs Book — which is better?",
                "sideA": "TV",
                "sideB": "Book",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Video game — which is more fun?",
                "sideA": "Sport",
                "sideB": "Video game",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Drawing vs Singing — which hobby is better?",
                "sideA": "Drawing",
                "sideB": "Singing",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Playing alone vs Friends — which is more fun?",
                "sideA": "Alone",
                "sideB": "Friends",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Swimming vs Running — which sport do you prefer?",
                "sideA": "Swimming",
                "sideB": "Running",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Music vs Sport — which is a better hobby?",
                "sideA": "Music",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Farm vs Wild animals — which are more interesting?",
                "sideA": "Farm",
                "sideB": "Wild",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rain vs Sunshine — which weather do you prefer?",
                "sideA": "Rain",
                "sideB": "Sunshine",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sea vs Mountains — which is better for a holiday?",
                "sideA": "Sea",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Flowers vs Trees — which are more beautiful?",
                "sideA": "Flowers",
                "sideB": "Trees",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Car vs Bus — which is better?",
                "sideA": "Car",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Walking vs Cycling — which is better to get around?",
                "sideA": "Walking",
                "sideB": "Cycling",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short vs Long holiday — which is better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling alone vs Family — which is more fun?",
                "sideA": "Alone",
                "sideB": "Family",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online vs. In-person shopping",
                "sideA": "Online",
                "sideB": "In-person",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [
                    "Convenience",
                    "Better prices"
                ],
                "ideasB": [
                    "Try on items",
                    "Instant gratification"
                ]
            },
            {
                "topic": "Paper books vs. E-books",
                "sideA": "Paper",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Scent/Feel",
                    "Collectable"
                ],
                "ideasB": [
                    "Portability",
                    "Space saving"
                ]
            },
            {
                "topic": "Work from home vs. Office work",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [
                    "No commute",
                    "Flexibility"
                ],
                "ideasB": [
                    "Socializing",
                    "Better focus"
                ]
            },
            {
                "topic": "Electric cars vs. Petrol cars",
                "sideA": "Electric",
                "sideB": "Petrol",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [
                    "Environment",
                    "Quiet"
                ],
                "ideasB": [
                    "Range",
                    "Charging speed"
                ]
            },
            {
                "topic": "Studying in the morning vs studying in the evening — when is it better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Strict teachers vs friendly teachers — who helps students more?",
                "sideA": "Strict",
                "sideB": "Friendly",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning with a textbook vs learning with videos — which is more effective?",
                "sideA": "Textbook",
                "sideB": "Videos",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short lessons vs long lessons — which help you learn better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Group projects vs individual assignments — which do you prefer?",
                "sideA": "Group",
                "sideB": "Individual",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "School uniform vs casual clothes at school — which is better?",
                "sideA": "Uniform",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Home-cooked meals vs fast food — which is better?",
                "sideA": "Home-cooked",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Three big meals vs many small snacks — which is healthier?",
                "sideA": "Big meals",
                "sideB": "Small snacks",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarian food vs meat — which diet is better?",
                "sideA": "Vegetarian",
                "sideB": "Meat",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Drinking tea vs drinking coffee — which is better?",
                "sideA": "Tea",
                "sideB": "Coffee",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating alone vs eating with others — which do you prefer?",
                "sideA": "Alone",
                "sideB": "With others",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Playing a team sport vs playing an individual sport — which is better?",
                "sideA": "Team sport",
                "sideB": "Individual sport",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spending free time indoors vs outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema vs theatre — which is a better night out?",
                "sideA": "Cinema",
                "sideB": "Theatre",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Listening to music vs playing an instrument — which is more enjoyable?",
                "sideA": "Listening",
                "sideB": "Playing",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Video games vs board games — which are more fun?",
                "sideA": "Video games",
                "sideB": "Board games",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going shopping vs staying home — which is a better way to spend the weekend?",
                "sideA": "Shopping",
                "sideB": "Staying home",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mobile phone vs computer — which is more useful in daily life?",
                "sideA": "Mobile",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sending a message vs making a phone call — which is better?",
                "sideA": "Message",
                "sideB": "Call",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "E-book vs paper book — which do you prefer to read?",
                "sideA": "E-book",
                "sideB": "Paper book",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Taking photos with your phone vs with a camera — which gives better results?",
                "sideA": "Phone",
                "sideB": "Camera",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Holiday at the beach vs holiday in the mountains — which is better?",
                "sideA": "Beach",
                "sideB": "Mountains",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling by train vs travelling by plane — which is better?",
                "sideA": "Train",
                "sideB": "Plane",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visiting a famous city vs visiting a small village — which is more interesting?",
                "sideA": "City",
                "sideB": "Village",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Staying in a hotel vs staying with a local family — which do you prefer?",
                "sideA": "Hotel",
                "sideB": "Local family",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travelling abroad vs exploring your own country — which is more worthwhile?",
                "sideA": "Abroad",
                "sideB": "Own country",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Having many friends vs having a few close friends — which is better?",
                "sideA": "Many friends",
                "sideB": "Close friends",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Meeting friends in person vs chatting online — which is more satisfying?",
                "sideA": "In person",
                "sideB": "Online",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with parents vs living in a student flat — which is better for young people?",
                "sideA": "With parents",
                "sideB": "Student flat",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Celebrating birthdays at home vs going out — which is nicer?",
                "sideA": "Home",
                "sideB": "Going out",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saving money vs spending money — which is wiser?",
                "sideA": "Saving",
                "sideB": "Spending",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working part-time while studying vs focusing only on school — which is better?",
                "sideA": "Part-time",
                "sideB": "Focus school",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Earning a lot of money vs having free time — which matters more?",
                "sideA": "Money",
                "sideB": "Free time",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online learning vs classroom learning — which is more effective?",
                "sideA": "Online",
                "sideB": "Classroom",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Memorising facts vs learning how to find information — which skill is more important?",
                "sideA": "Facts",
                "sideB": "Finding info",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "University education vs vocational training — which is a better path?",
                "sideA": "University",
                "sideB": "Vocational",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Exams vs continuous assessment — which is a fairer way to evaluate students?",
                "sideA": "Exams",
                "sideB": "Continuous",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning a foreign language at school vs living abroad — which is more effective?",
                "sideA": "School",
                "sideB": "Living abroad",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Single-sex schools vs mixed schools — which are better for students?",
                "sideA": "Single-sex",
                "sideB": "Mixed",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs face-to-face communication — which is better for staying in touch?",
                "sideA": "Social media",
                "sideB": "Face-to-face",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Streaming services vs traditional TV — which is better?",
                "sideA": "Streaming",
                "sideB": "Traditional TV",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working from home vs working in an office — which is more productive?",
                "sideA": "Home",
                "sideB": "Office",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reading news online vs reading a newspaper — which is more reliable?",
                "sideA": "Online news",
                "sideB": "Newspaper",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spending time on social media vs spending time in nature — which is better for your mental health?",
                "sideA": "Social media",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Using public transport vs driving a car — which is better for society?",
                "sideA": "Public transport",
                "sideB": "Car",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Buying second-hand clothes vs buying new clothes — which is the better habit?",
                "sideA": "Second-hand",
                "sideB": "New",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living in a city vs living in the countryside — which suits young people better?",
                "sideA": "City",
                "sideB": "Countryside",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarianism vs eating meat — which is better for the planet?",
                "sideA": "Vegetarianism",
                "sideB": "Meat",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Individual lifestyle changes vs government action — which does more for the environment?",
                "sideA": "Individual",
                "sideB": "Government",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "A stable job vs a creative career — which is the better life choice?",
                "sideA": "Stable job",
                "sideB": "Creative career",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Starting your own business vs working for a company — which is better?",
                "sideA": "Own business",
                "sideB": "Company",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "High salary vs job satisfaction — which matters more at work?",
                "sideA": "Salary",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working long hours vs having a work-life balance — which leads to more success?",
                "sideA": "Long hours",
                "sideB": "Balance",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choosing a career based on passion vs based on job prospects — which is wiser?",
                "sideA": "Passion",
                "sideB": "Prospects",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living as an individual vs putting community first — which is more important?",
                "sideA": "Individual",
                "sideB": "Community",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Traditional values vs modern values — which are more important to keep?",
                "sideA": "Traditional",
                "sideB": "Modern",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Volunteering vs donating money to charity — which helps more?",
                "sideA": "Volunteering",
                "sideB": "Donating",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fame vs making a difference quietly — which is a better goal in life?",
                "sideA": "Fame",
                "sideB": "Quiet difference",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Following rules vs thinking for yourself — which matters more?",
                "sideA": "Rules",
                "sideB": "Self-thought",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Physical health vs mental health — which should be the priority?",
                "sideA": "Physical",
                "sideB": "Mental",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prevention vs treatment — which is the better approach to healthcare?",
                "sideA": "Prevention",
                "sideB": "Treatment",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Competitive sport vs exercise for fun — which is better for you?",
                "sideA": "Competitive",
                "sideB": "For fun",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Private healthcare vs public healthcare — which system is fairer?",
                "sideA": "Private",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema vs literature — which is a more powerful art form?",
                "sideA": "Cinema",
                "sideB": "Literature",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Modern art vs classical art — which is more valuable?",
                "sideA": "Modern",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Preserving old buildings vs building new ones — which matters more?",
                "sideA": "Preserving old",
                "sideB": "Building new",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Local culture vs globalisation — which enriches communities more?",
                "sideA": "Local",
                "sideB": "Globalisation",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs face-to-face interactions — which is better for building relationships?",
                "sideA": "Social media",
                "sideB": "Face-to-face",
                "level": "upper-intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Urban living vs rural living — which offers a better quality of life?",
                "sideA": "Urban",
                "sideB": "Rural",
                "level": "upper-intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online learning vs traditional classroom — which is the future of education?",
                "sideA": "Online",
                "sideB": "Classroom",
                "level": "upper-intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Renewable energy vs nuclear power — which is the best solution for the climate?",
                "sideA": "Renewable",
                "sideB": "Nuclear",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fast fashion vs sustainable clothing — can we afford to be ethical?",
                "sideA": "Fast fashion",
                "sideB": "Sustainable",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "AI creativity vs human artistry — can machines truly create art?",
                "sideA": "AI creativity",
                "sideB": "Human artistry",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Space exploration vs deep sea exploration — where should we focus our resources?",
                "sideA": "Space",
                "sideB": "Deep sea",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Digital privacy vs national security — is total surveillance ever justified?",
                "sideA": "Privacy",
                "sideB": "Security",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Genetically modified food vs organic farming — how should we feed the world?",
                "sideA": "GMOs",
                "sideB": "Organic",
                "level": "advanced",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Universal Basic Income vs job guarantee programs — what is the best social safety net?",
                "sideA": "UBI",
                "sideB": "Job guarantee",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pink vs orange — which colour is nicer?",
                "sideA": "Pink",
                "sideB": "Orange",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Number 1 vs number 10 — which number is better?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chair vs sofa — which is more comfortable?",
                "sideA": "Chair",
                "sideB": "Sofa",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bag vs box — which is more useful?",
                "sideA": "Bag",
                "sideB": "Box",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lion vs elephant — which animal is better?",
                "sideA": "Lion",
                "sideB": "Elephant",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chocolate vs sweets — which is better?",
                "sideA": "Chocolate",
                "sideB": "Sweets",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spoon vs fork — which is better?",
                "sideA": "Spoon",
                "sideB": "Fork",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hat vs shoes — which is more important?",
                "sideA": "Hat",
                "sideB": "Shoes",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sun vs moon — which is better?",
                "sideA": "Sun",
                "sideB": "Moon",
                "level": "starter",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Socks vs no socks — which is nicer?",
                "sideA": "Socks",
                "sideB": "No socks",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Living with grandparents vs not living with them — which is nicer?",
                "sideA": "With grandparents",
                "sideB": "Not living with them",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mum's cooking vs dad's cooking — which is better?",
                "sideA": "Mum's",
                "sideB": "Dad's",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maths vs art — which subject is more fun?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Writing on paper vs typing on a tablet — which is better?",
                "sideA": "Paper",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pasta — which is nicer?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ice cream vs cake — which is a better dessert?",
                "sideA": "Ice cream",
                "sideB": "Cake",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short days vs long days — which is better?",
                "sideA": "Short days",
                "sideB": "Long days",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Day at the park vs day at the beach — which is better?",
                "sideA": "Park",
                "sideB": "Beach",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Plane vs train — which is more fun?",
                "sideA": "Plane",
                "sideB": "Train",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning shower vs evening shower — which is better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating pizza with a fork vs eating pizza with your hands — which is correct?",
                "sideA": "Fork",
                "sideB": "Hands",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
                "sideA": "Socks on",
                "sideB": "No socks",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sandcastle vs snowman — which is more fun to build?",
                "sideA": "Sandcastle",
                "sideB": "Snowman",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lots of exams vs very few exams — which is fairer?",
                "sideA": "Lots of exams",
                "sideB": "Very few exams",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Starting school at 7 vs starting school at 5 — which is better for children?",
                "sideA": "At 7",
                "sideB": "At 5",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eating slowly vs eating quickly — which is better for you?",
                "sideA": "Slowly",
                "sideB": "Quickly",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking at home vs ordering food online — which is better?",
                "sideA": "Cooking at home",
                "sideB": "Ordering online",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cooking vs baking — which is more fun as a hobby?",
                "sideA": "Cooking",
                "sideB": "Baking",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Going to the gym vs exercising outside — which is better?",
                "sideA": "Gym",
                "sideB": "Outside",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Photos on your phone vs printed photos — which is better?",
                "sideA": "Phone photos",
                "sideB": "Printed photos",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs computer screen — which is better for watching films?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hot country vs cold country — which is a better holiday destination?",
                "sideA": "Hot country",
                "sideB": "Cold country",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giving presents vs receiving presents — which do you prefer?",
                "sideA": "Giving",
                "sideB": "Receiving",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Working indoors vs working outdoors — which is better?",
                "sideA": "Indoors",
                "sideB": "Outdoors",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pineapple on pizza vs no pineapple on pizza — which is correct?",
                "sideA": "Pineapple",
                "sideB": "No pineapple",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Putting milk in first vs putting tea in first — which is better?",
                "sideA": "Milk first",
                "sideB": "Tea first",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Monday vs Friday — which day is actually worse?",
                "sideA": "Monday",
                "sideB": "Friday",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
                "sideA": "Before alarm",
                "sideB": "Until alarm",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cats vs dogs — which animal is secretly the boss of the house?",
                "sideA": "Cats",
                "sideB": "Dogs",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being too hot vs being too cold — which is worse?",
                "sideA": "Too hot",
                "sideB": "Too cold",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Learning from mistakes vs learning from success — which teaches more?",
                "sideA": "Mistakes",
                "sideB": "Success",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablets in class vs traditional notebooks — which help students more?",
                "sideA": "Tablets",
                "sideB": "Notebooks",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Being always contactable vs having digital free time — which is better?",
                "sideA": "Contactable",
                "sideB": "Free time",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reusing things vs recycling — which is more effective?",
                "sideA": "Reusing",
                "sideB": "Recycling",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "One career for life vs changing careers often — which is better?",
                "sideA": "One career",
                "sideB": "Changing often",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sleep vs exercise — which has a bigger impact on your health?",
                "sideA": "Sleep",
                "sideB": "Exercise",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pop music vs classical music — which has a bigger cultural impact?",
                "sideA": "Pop",
                "sideB": "Classical",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Knowing how something ends before watching it vs being surprised — which is better?",
                "sideA": "Knowing",
                "sideB": "Surprised",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Replying to messages immediately vs taking your time — which is more respectful?",
                "sideA": "Immediately",
                "sideB": "Taking time",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching a series in one go vs watching one episode a week — which is the right way?",
                "sideA": "Binge-watching",
                "sideB": "Weekly",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Window seat vs aisle seat on a plane — which is objectively better?",
                "sideA": "Window seat",
                "sideB": "Aisle seat",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Skipping the gym once vs going and having a bad session — which is worse?",
                "sideA": "Skipping",
                "sideB": "Bad session",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Talking to yourself vs talking to your pet — which is more reasonable?",
                "sideA": "To yourself",
                "sideB": "To pet",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "My favorite childhood memory",
                "level": "starter",
                "theme": "people_society"
            },
            {
                "topic": "The last vacation I took",
                "level": "elementary",
                "theme": "travel_places"
            },
            {
                "topic": "A person who inspired me",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "topic": "The future of the world in 50 years",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "topic": "The role of art in modern society",
                "level": "advanced",
                "theme": "leisure_hobbies"
            },
            {
                "topic": "Complexity of human consciousness",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "topic": "The importance of mental health awareness",
                "level": "intermediate",
                "theme": "health_body"
            },
            {
                "topic": "My dream job and why",
                "level": "starter",
                "theme": "education_work"
            },
            {
                "topic": "The impact of climate change on local communities",
                "level": "upper-intermediate",
                "theme": "nature_environment"
            },
            {
                "topic": "Artificial Intelligence: Tool or threat?",
                "level": "advanced",
                "theme": "science_technology"
            }
        ]
    },
    "fr": {
        "opinionArena": [
            {
                "text": "Le petit-déjeuner est-il le repas le plus important ?",
                "level": "starter",
                "theme": "food_drinks"
            },
            {
                "text": "Les chiens sont-ils de meilleurs animaux de compagnie que les chats ?",
                "level": "starter",
                "theme": "leisure_hobbies"
            },
            {
                "text": "Les enfants devraient-ils avoir des téléphones portables ?",
                "level": "elementary",
                "theme": "science_technology"
            },
            {
                "text": "Est-il préférable de vivre dans une maison ou un appartement ?",
                "level": "elementary",
                "theme": "daily_life"
            },
            {
                "text": "Pouvons-nous vivre sans Internet pendant une semaine ?",
                "level": "intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Tout le monde devrait-il apprendre une deuxième langue ?",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "Les réseaux sociaux détruisent-ils nos compétences sociales ?",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Les transports publics devraient-ils être gratuits ?",
                "level": "upper-intermediate",
                "theme": "travel_places"
            },
            {
                "text": "Génie génétique : progrès ou péril ?",
                "level": "advanced",
                "theme": "science_technology"
            },
            {
                "text": "Le revenu universel est-il une solution à l'automatisation ?",
                "level": "advanced",
                "theme": "people_society"
            },
            {
                "text": "Le libre arbitre existe-t-il vraiment ou est-ce une illusion ?",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "text": "L'éthique de la colonisation d'autres planètes.",
                "level": "proficiency",
                "theme": "science_technology"
            }
        ],
        "criticsCorner": [
            {
                "text": "Je pense, donc je suis.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "people_society"
            },
            {
                "text": "La seule constante est le changement.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "people_society"
            }
        ],
        "debates": [
            {"topic": "Café vs thé — quelle est la meilleure boisson du matin ?", "sideA": "Café", "sideB": "Thé", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Restaurant vs cuisine maison — qu'est-ce qui est mieux ?", "sideA": "Restaurant", "sideB": "Cuisine maison", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Petit-déjeuner vs pas de petit-déjeuner — qu'est-ce qui est mieux pour vous ?", "sideA": "Petit-déjeuner", "sideB": "Aucun", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Eau vs jus — qu'est-ce qui est plus sain ?", "sideA": "Eau", "sideB": "Jus", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Viande vs légumes — qu'est-ce qui est le plus important dans un repas ?", "sideA": "Viande", "sideB": "Légumes", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Maison vs appartement — où est-il préférable de vivre ?", "sideA": "Maison", "sideB": "Appartement", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Ville vs village — quel est le meilleur endroit pour vivre ?", "sideA": "Ville", "sideB": "Village", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Espèces vs carte — avec quoi est-il préférable de payer ?", "sideA": "Espèces", "sideB": "Carte", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Économiser de l'argent vs dépenser de l'argent — qu'est-ce qui est mieux ?", "sideA": "Économiser", "sideB": "Dépenser", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Louer vs acheter — qu'est-ce qui est mieux ?", "sideA": "Louer", "sideB": "Acheter", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Travail du matin vs travail du soir — qu'est-ce qui est mieux ?", "sideA": "Matin", "sideB": "Soir", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Voiture vs bus — qu'est-ce qui est mieux pour aller au travail ?", "sideA": "Voiture", "sideB": "Bus", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Marcher vs conduire — qu'est-ce qui est mieux en ville ?", "sideA": "Marcher", "sideB": "Conduire", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Bureau vs maison — quel est le meilleur endroit pour travailler ?", "sideA": "Bureau", "sideB": "Maison", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Lève-tôt vs couche-tard — qu'est-ce qui est mieux ?", "sideA": "Lève-tôt", "sideB": "Couche-tard", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Été vs hiver — quelle saison est la meilleure ?", "sideA": "Été", "sideB": "Hiver", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Vacances courtes vs vacances longues — qu'est-ce qui est mieux ?", "sideA": "Courtes", "sideB": "Longues", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Appel téléphonique vs message — qu'est-ce qui est mieux ?", "sideA": "Appel", "sideB": "Message", "level": "starter", "theme": "science_technology", "ideasA": [], "ideasB": []},
            {"topic": "Douche le matin vs douche le soir — qu'est-ce qui est correct ?", "sideA": "Matin", "sideB": "Soir", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Lundi vs vendredi — quel jour est le meilleur ?", "sideA": "Lundi", "sideB": "Vendredi", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Trop chaud vs trop froid — qu'est-ce qui est le pire ?", "sideA": "Trop chaud", "sideB": "Trop froid", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Siège côté hublot vs siège côté couloir — qu'est-ce qui est mieux dans un avion ?", "sideA": "Hublot", "sideB": "Couloir", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Travailler à temps plein vs travailler à temps partiel — qu'est-ce qui est mieux ?", "sideA": "Temps plein", "sideB": "Temps partiel", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Travailler dans un bureau vs travailler à domicile — que préférez-vous ?", "sideA": "Bureau", "sideB": "Domicile", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Un travail qu'on aime vs un travail bien payé — qu'est-ce qui est le plus important ?", "sideA": "Travail aimé", "sideB": "Bien payé", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Travailler avec d'autres personnes vs travailler seul — qu'est-ce qui est mieux ?", "sideA": "Avec les autres", "sideB": "Seul", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Un trajet court vs un trajet long — qu'est-ce qui est le plus acceptable ?", "sideA": "Court", "sideB": "Long", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Vivre seul vs vivre avec un partenaire — qu'est-ce qui est mieux ?", "sideA": "Seul", "sideB": "Partenaire", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Grande ville vs petite ville — quel est le meilleur endroit pour vivre en tant qu'adulte ?", "sideA": "Grande ville", "sideB": "Petite ville", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Cuisiner à la maison vs manger à l'extérieur — qu'est-ce qui est mieux pour la vie quotidienne ?", "sideA": "À la maison", "sideB": "Extérieur", "level": "elementary", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Avoir des enfants vs ne pas avoir d'enfants — quelle vie est la meilleure ?", "sideA": "Enfants", "sideB": "Pas d'enfants", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Louer un appartement vs acheter une maison — qu'est-ce qui est mieux pour les jeunes adultes ?", "sideA": "Louer", "sideB": "Acheter", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Faire de l'exercice tous les jours vs se reposer — qu'est-ce qui est mieux pour votre santé ?", "sideA": "Exercice", "sideB": "Repos", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Aller chez le médecin vs attendre — qu'est-ce qui est mieux quand on se sent malade ?", "sideA": "Médecin", "sideB": "Attendre", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Dormir huit heures vs dormir moins — qu'est-ce qui est le plus réaliste pour les adultes ?", "sideA": "8 heures", "sideB": "Moins", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Aller au travail à pied vs prendre la voiture — qu'est-ce qui est mieux pour votre santé ?", "sideA": "À pied", "sideB": "Voiture", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Achats en ligne vs achats en magasin — que préférez-vous ?", "sideA": "En ligne", "sideB": "Magasin", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Économiser pour l'avenir vs profiter de l'argent maintenant — qu'est-ce qui est le plus sage ?", "sideA": "Économiser", "sideB": "Profiter maintenant", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Choses chères vs choses bon marché — qu'est-ce qui a le meilleur rapport qualité-prix ?", "sideA": "Chères", "sideB": "Bon marché", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Acheter neuf vs acheter d'occasion — qu'est-ce qui est mieux ?", "sideA": "Neuf", "sideB": "Occasion", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Regarder la télé à la maison vs sortir — quelle est la meilleure soirée ?", "sideA": "Télé", "sideB": "Sortir", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Vacances en famille vs vacances entre amis — qu'est-ce qui est mieux ?", "sideA": "Famille", "sideB": "Amis", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Rester dans son pays vs voyager à l'étranger — quelles sont les meilleures vacances ?", "sideA": "Son pays", "sideB": "Étranger", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Le sport vs la lecture — quel est le meilleur passe-temps pour les adultes ?", "sideA": "Sport", "sideB": "Lecture", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Voir des amis souvent vs avoir du temps seul — qu'est-ce qui est le plus important ?", "sideA": "Amis", "sideB": "Seul", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Répondre aux e-mails immédiatement vs les laisser pour plus tard — qu'est-ce qui est le plus professionnel ?", "sideA": "Immédiatement", "sideB": "Plus tard", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Faire la vaisselle immédiatement vs la laisser jusqu'à demain — qu'est-ce qui est mieux ?", "sideA": "Immédiatement", "sideB": "Demain", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Être toujours en avance vs toujours cinq minutes en retard — qu'est-ce qui est pire au travail ?", "sideA": "En avance", "sideB": "En retard", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Avoir un bureau très organisé vs un bureau en désordre — quelle personne est la plus productive ?", "sideA": "Organisé", "sideB": "Désordre", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Parler de travail au dîner vs pas de discussion de travail au dîner — quelle règle est la meilleure ?", "sideA": "Parler travail", "sideB": "Pas de travail", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},

            {
                "topic": "Langage : Constitutif vs Expressif",
                "sideA": "Constitutif",
                "sideB": "Expressif",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Façonne la réalité",
                    "Limite la pensée"
                ],
                "ideasB": [
                    "Reflète la réalité",
                    "Outil pour la pensée"
                ]
            },
            {
                "topic": "Précision vs Ambiguïté",
                "sideA": "Précision",
                "sideB": "Ambiguïté",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Clarté",
                    "Efficacité"
                ],
                "ideasB": [
                    "Nuance",
                    "Diplomatie"
                ]
            },
            {
                "topic": "Rhétorique vs Logique",
                "sideA": "Rhétorique",
                "sideB": "Logique",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Pouvoir persuasif",
                    "Appel émotionnel"
                ],
                "ideasB": [
                    "Vérité objective",
                    "Validité structurelle"
                ]
            },
            {
                "topic": "Sens littéral vs Sens interprétatif",
                "sideA": "Littéral",
                "sideB": "Interprétatif",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Intention de l'auteur",
                    "Stabilité"
                ],
                "ideasB": [
                    "Réponse du lecteur",
                    "Contexte évolutif"
                ]
            },
            {
                "topic": "Consensus scientifique vs Humilité épistémique",
                "sideA": "Consensus",
                "sideB": "Humilité",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Connaissances établies",
                    "Autorité d'expert"
                ],
                "ideasB": [
                    "Ouverture à la correction",
                    "Reconnaissance des limites"
                ]
            },
            {
                "topic": "Expertise vs Expérience vécue",
                "sideA": "Expertise",
                "sideB": "Expérience vécue",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Rigueur scientifique",
                    "Données objectives"
                ],
                "ideasB": [
                    "Vérité authentique",
                    "Aperçu contextuel"
                ]
            },
            {
                "topic": "Le doute : Vertu vs Paralysie",
                "sideA": "Vertu",
                "sideB": "Paralysie",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Pensée critique",
                    "Scepticisme"
                ],
                "ideasB": [
                    "Indécision",
                    "Manque d'action"
                ]
            },
            {
                "topic": "Récit vs Données",
                "sideA": "Récit",
                "sideB": "Données",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Impact émotionnel",
                    "Connexion humaine"
                ],
                "ideasB": [
                    "Vérité statistique",
                    "Scalabilité"
                ]
            },
            {
                "topic": "Légitimité : Consentement vs Résultat",
                "sideA": "Consentement",
                "sideB": "Résultat",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Processus démocratique",
                    "Droit moral"
                ],
                "ideasB": [
                    "Efficacité",
                    "Gouvernance efficace"
                ]
            },
            {
                "topic": "État : Garant de la liberté vs Menace",
                "sideA": "Garant",
                "sideB": "Menace",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "État de droit",
                    "Protection des droits"
                ],
                "ideasB": [
                    "Abus de pouvoir",
                    "Surveillance"
                ]
            },
            {
                "topic": "Politique des droits vs Politique des responsabilités",
                "sideA": "Droits",
                "sideB": "Responsabilités",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Liberté individuelle",
                    "Protection juridique"
                ],
                "ideasB": [
                    "Devoir collectif",
                    "Cohésion sociale"
                ]
            },
            {
                "topic": "Neutralité vs Gouvernance orientée par les valeurs",
                "sideA": "Neutralité",
                "sideB": "Orientée valeurs",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Impartialité",
                    "Équité"
                ],
                "ideasB": [
                    "Direction morale",
                    "Objectif social"
                ]
            },
            {
                "topic": "Intention vs Réception en art",
                "sideA": "Intention",
                "sideB": "Réception",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Vision de l'auteur",
                    "Contexte original"
                ],
                "ideasB": [
                    "Sens pour le public",
                    "Impact culturel"
                ]
            },
            {
                "topic": "Valeur esthétique vs Valeur morale",
                "sideA": "Esthétique",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "L'art pour l'art",
                    "Pure beauté"
                ],
                "ideasB": [
                    "Utilité sociale",
                    "Impact éthique"
                ]
            },
            {
                "topic": "L'avant-garde vs Accessibilité",
                "sideA": "Avant-garde",
                "sideB": "Accessibilité",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Repousser les limites",
                    "Défi intellectuel"
                ],
                "ideasB": [
                    "Inclusivité",
                    "Art démocratique"
                ]
            },
            {
                "topic": "Art institutionnel vs Art brut",
                "sideA": "Institutionnel",
                "sideB": "Art brut",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Préservation historique",
                    "Normes"
                ],
                "ideasB": [
                    "Authenticité brute",
                    "Anti-establishment"
                ]
            },
            {
                "topic": "Principe de précaution vs proaction",
                "sideA": "Précaution",
                "sideB": "Proaction",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Évitement des risques",
                    "La sécurité d'abord"
                ],
                "ideasB": [
                    "Innovation",
                    "Accepter le changement"
                ]
            },
            {
                "topic": "Progrès scientifique : Intrinsèquement bon vs Neutre",
                "sideA": "Intrinsèquement bon",
                "sideB": "Éthiquement neutre",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Valeurs des Lumières",
                    "Résolution de problèmes"
                ],
                "ideasB": [
                    "Préoccupation du double usage",
                    "Responsabilité humaine"
                ]
            },
            {
                "topic": "Risque existentiel vs Souffrance actuelle",
                "sideA": "Risque existentiel",
                "sideB": "Souffrance actuelle",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Survie à long terme",
                    "Générations futures"
                ],
                "ideasB": [
                    "Soulagement immédiat",
                    "Pauvreté urgente"
                ]
            },
            {
                "topic": "Conscience humaine vs Intelligence artificielle générale",
                "sideA": "Conscience",
                "sideB": "IA Générale",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Unicité biologique",
                    "Expérience subjective"
                ],
                "ideasB": [
                    "Puissance de calcul",
                    "Logique algorithmique"
                ]
            },
            {
                "topic": "Le progrès : Réel vs Illusion",
                "sideA": "Réel",
                "sideB": "Illusion",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Avancement technologique",
                    "Qualité de vie améliorée"
                ],
                "ideasB": [
                    "Histoire cyclique",
                    "Nouveaux problèmes"
                ]
            },
            {
                "topic": "Ordre libéral vs Monde multipolaire",
                "sideA": "Ordre libéral",
                "sideB": "Multipolarité",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Valeurs universelles",
                    "Stabilité mondiale"
                ],
                "ideasB": [
                    "Puissance diversifiée",
                    "Souveraineté culturelle"
                ]
            },
            {
                "topic": "Mémoire vs Oubli",
                "sideA": "Mémoire",
                "sideB": "Oubli",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Apprendre de l'histoire",
                    "Identité"
                ],
                "ideasB": [
                    "Aller de l'avant",
                    "Surmonter les traumatismes"
                ]
            },
            {
                "topic": "Tragédie des communs vs Coopération",
                "sideA": "Tragédie",
                "sideB": "Coopération",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Intérêt personnel",
                    "Épuisement des ressources"
                ],
                "ideasB": [
                    "Bénéfice mutuel",
                    "Gestion collective"
                ]
            },
            {
                "topic": "Rouge vs Bleu — quelle couleur est la meilleure ?",
                "sideA": "Rouge",
                "sideB": "Bleu",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jaune vs Vert — quelle couleur est la plus joyeuse ?",
                "sideA": "Jaune",
                "sideB": "Vert",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Noir vs Blanc — quelle couleur préférez-vous ?",
                "sideA": "Noir",
                "sideB": "Blanc",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rose vs Violet — quelle couleur est la plus jolie ?",
                "sideA": "Rose",
                "sideB": "Violet",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cercle vs Carré — quelle forme est la plus utile ?",
                "sideA": "Cercle",
                "sideB": "Carré",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grands vs Petits nombres — lesquels sont les plus amusants ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangle vs Rectangle — quelle forme est la meilleure ?",
                "sideA": "Triangle",
                "sideB": "Rectangle",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ballon vs Poupée — quel jouet est le meilleur ?",
                "sideA": "Ballon",
                "sideB": "Poupée",
                "level": "starter",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Crayon vs Stylo — avec quoi est-il préférable d'écrire ?",
                "sideA": "Crayon",
                "sideB": "Stylo",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Livre vs Image — d'où est-il préférable d'apprendre ?",
                "sideA": "Livre",
                "sideB": "Image",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaise vs Sol — où est-il préférable de s'asseoir ?",
                "sideA": "Chaise",
                "sideB": "Sol",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chat vs Chien — quel animal est le meilleur ?",
                "sideA": "Chat",
                "sideB": "Chien",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Poisson vs Oiseau — quel est le meilleur animal de compagnie ?",
                "sideA": "Poisson",
                "sideB": "Oiseau",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grands vs Petits animaux — lesquels sont les plus gentils ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lapin vs Hamster — lequel est le plus mignon ?",
                "sideA": "Lapin",
                "sideB": "Hamster",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eau vs Jus — qu'est-il préférable de boire ?",
                "sideA": "Eau",
                "sideB": "Jus",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pomme vs Banane — quel fruit est le meilleur ?",
                "sideA": "Pomme",
                "sideB": "Banane",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pain vs Riz — qu'est-il préférable de manger ?",
                "sideA": "Pain",
                "sideB": "Riz",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lait vs Eau — lequel préférez-vous ?",
                "sideA": "Lait",
                "sideB": "Eau",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en famille vs Seul — qu'est-ce qui est mieux ?",
                "sideA": "En famille",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir un frère vs une sœur — qu'est-ce qui est mieux ?",
                "sideA": "Frère",
                "sideB": "Sœur",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grande vs Petite famille — laquelle est la plus agréable ?",
                "sideA": "Grande",
                "sideB": "Petite",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'aîné vs Le cadet — qu'est-ce qui est mieux ?",
                "sideA": "Aîné",
                "sideB": "Cadet",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "École le matin vs après-midi — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Après-midi",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lecture vs Maths — lequel est le plus amusant ?",
                "sideA": "Lecture",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "École vs Maison — qu'est-ce qui est mieux ?",
                "sideA": "École",
                "sideB": "Maison",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Devoirs vs Pas de devoirs — qu'est-ce qui aide le plus ?",
                "sideA": "Devoirs",
                "sideB": "Aucun",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seul vs Avec un partenaire — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Partenaire",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Papier vs Ordinateur — lequel est le mieux ?",
                "sideA": "Papier",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Petit-déjeuner vs Dîner — quel repas est le plus important ?",
                "sideA": "Petit-déjeuner",
                "sideB": "Dîner",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaud vs Froid — lequel est le mieux ?",
                "sideA": "Chaud",
                "sideB": "Froid",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maison vs Restaurant — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sucré vs Salé — que préférez-vous ?",
                "sideA": "Sucré",
                "sideB": "Salé",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner vs Acheter — qu'est-ce qui est plus agréable ?",
                "sideA": "Cuisiner",
                "sideB": "Acheter",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se lever tôt vs tard — qu'est-ce qui est mieux ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matin vs Soir — quel moment de la journée est le plus agréable ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Semaine vs Week-end — que préférez-vous ?",
                "sideA": "Semaine",
                "sideB": "Week-end",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Été vs Hiver — quelle saison est la meilleure ?",
                "sideA": "Été",
                "sideB": "Hiver",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se coucher tôt vs tard — qu'est-ce qui est le plus sain ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maison vs Appartement — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Appartement",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ville vs Campagne — où est-il préférable de vivre ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chambre vs Salon — quelle pièce préférez-vous ?",
                "sideA": "Chambre",
                "sideB": "Salon",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jeux d'intérieur vs d'extérieur — lesquels sont les plus amusants ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "TV vs Livre — lequel est le mieux ?",
                "sideA": "TV",
                "sideB": "Livre",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Jeu vidéo — lequel est le plus amusant ?",
                "sideA": "Sport",
                "sideB": "Jeu vidéo",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dessin vs Chant — quel passe-temps est le meilleur ?",
                "sideA": "Dessin",
                "sideB": "Chant",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jouer seul vs avec des amis — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Amis",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Natation vs Course — quel sport préférez-vous ?",
                "sideA": "Natation",
                "sideB": "Course",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musique vs Sport — quel passe-temps est le meilleur ?",
                "sideA": "Musique",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animaux de ferme vs sauvages — lesquels sont les plus intéressants ?",
                "sideA": "Ferme",
                "sideB": "Sauvages",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pluie vs Soleil — quel temps préférez-vous ?",
                "sideA": "Pluie",
                "sideB": "Soleil",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mer vs Montagne — lequel est le mieux pour les vacances ?",
                "sideA": "Mer",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fleurs vs Arbres — lesquels sont les plus beaux ?",
                "sideA": "Fleurs",
                "sideB": "Arbres",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voiture vs Bus — lequel est le mieux ?",
                "sideA": "Voiture",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Marcher vs Vélo — quel est le meilleur moyen de se déplacer ?",
                "sideA": "Marcher",
                "sideB": "Vélo",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances courtes vs longues — qu'est-ce qui est mieux ?",
                "sideA": "Courtes",
                "sideB": "Longues",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager seul vs en famille — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Famille",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Achats en ligne vs Achats en personne",
                "sideA": "En ligne",
                "sideB": "En personne",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [
                    "Commodité",
                    "Meilleurs prix"
                ],
                "ideasB": [
                    "Essayer les articles",
                    "Gratification instantanée"
                ]
            },
            {
                "topic": "Livres papier vs E-books",
                "sideA": "Papier",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Odeur/Toucher",
                    "Collectionnable"
                ],
                "ideasB": [
                    "Portabilité",
                    "Gain de place"
                ]
            },
            {
                "topic": "Télétravail vs Travail au bureau",
                "sideA": "Maison",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [
                    "Pas de trajet",
                    "Flexibilité"
                ],
                "ideasB": [
                    "Socialisation",
                    "Meilleure concentration"
                ]
            },
            {
                "topic": "Voitures électriques vs Voitures à essence",
                "sideA": "Électrique",
                "sideB": "Essence",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [
                    "Environnement",
                    "Silencieux"
                ],
                "ideasB": [
                    "Autonomie",
                    "Vitesse de charge"
                ]
            },
            {
                "topic": "Étudier le matin ou étudier le soir — quand est-ce mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Professeurs sévères ou professeurs sympas — qui aide le plus les élèves ?",
                "sideA": "Sévères",
                "sideB": "Sympas",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre avec un manuel ou apprendre avec des vidéos — qu'est-ce qui est plus efficace ?",
                "sideA": "Manuel",
                "sideB": "Vidéos",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cours courts ou cours longs — lesquels aident à mieux apprendre ?",
                "sideA": "Courts",
                "sideB": "Longs",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Projets de groupe ou travaux individuels — que préférez-vous ?",
                "sideA": "Groupe",
                "sideB": "Individuel",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Uniforme scolaire ou vêtements décontractés à l'école — qu'est-ce qui est mieux ?",
                "sideA": "Uniforme",
                "sideB": "Décontracté",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Repas faits maison ou restauration rapide — qu'est-ce qui est mieux ?",
                "sideA": "Fait maison",
                "sideB": "Fast-food",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Trois gros repas ou plusieurs petites collations — qu'est-ce qui est plus sain ?",
                "sideA": "Gros repas",
                "sideB": "Collations",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nourriture végétarienne ou viande — quel régime est le meilleur ?",
                "sideA": "Végétarien",
                "sideB": "Viande",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Boire du thé ou boire du café — qu'est-ce qui est mieux ?",
                "sideA": "Thé",
                "sideB": "Café",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger seul ou manger avec d'autres — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Avec d'autres",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pratiquer un sport d'équipe ou un sport individuel — qu'est-ce qui est mieux ?",
                "sideA": "Sport d'équipe",
                "sideB": "Sport individuel",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passer son temps libre à l'intérieur ou à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinéma ou théâtre — quelle est la meilleure sortie ?",
                "sideA": "Cinéma",
                "sideB": "Théâtre",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écouter de la musique ou jouer d'un instrument — qu'est-ce qui est plus agréable ?",
                "sideA": "Écouter",
                "sideB": "Jouer",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jeux vidéo ou jeux de société — lesquels sont les plus amusants ?",
                "sideA": "Jeux vidéo",
                "sideB": "Jeux de société",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Faire du shopping ou rester à la maison — quelle est la meilleure façon de passer le week-end ?",
                "sideA": "Shopping",
                "sideB": "Rester chez soi",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Téléphone portable ou ordinateur — lequel est le plus utile dans la vie quotidienne ?",
                "sideA": "Portable",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Envoyer un message ou passer un appel téléphonique — qu'est-ce qui est mieux ?",
                "sideA": "Message",
                "sideB": "Appel",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Livre numérique ou livre papier — lequel préférez-vous lire ?",
                "sideA": "E-book",
                "sideB": "Livre papier",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prendre des photos avec son téléphone ou avec un appareil photo — lequel donne de meilleurs résultats ?",
                "sideA": "Téléphone",
                "sideB": "Appareil photo",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances à la plage ou vacances à la montagne — qu'est-ce qui est mieux ?",
                "sideA": "Plage",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager en train ou voyager en avion — qu'est-ce qui est mieux ?",
                "sideA": "Train",
                "sideB": "Avion",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visiter une ville célèbre ou visiter un petit village — qu'est-ce qui est plus intéressant ?",
                "sideA": "Ville",
                "sideB": "Village",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Séjourner à l'hôtel ou chez l'habitant — que préférez-vous ?",
                "sideA": "Hôtel",
                "sideB": "Chez l'habitant",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager à l'étranger ou explorer son propre pays — qu'est-ce qui en vaut le plus la peine ?",
                "sideA": "Étranger",
                "sideB": "Propre pays",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir beaucoup d'amis ou avoir quelques amis proches — qu'est-ce qui est mieux ?",
                "sideA": "Beaucoup",
                "sideB": "Amis proches",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rencontrer des amis en personne ou discuter en ligne — qu'est-ce qui est plus satisfaisant ?",
                "sideA": "En personne",
                "sideB": "En ligne",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre chez ses parents ou vivre dans un appartement étudiant — qu'est-ce qui est mieux pour les jeunes ?",
                "sideA": "Parents",
                "sideB": "Appartement étudiant",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fêter son anniversaire à la maison ou sortir — qu'est-ce qui est le plus sympa ?",
                "sideA": "Maison",
                "sideB": "Sortir",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Économiser de l'argent ou dépenser de l'argent — qu'est-ce qui est plus sage ?",
                "sideA": "Économiser",
                "sideB": "Dépenser",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à temps partiel pendant ses études ou se concentrer uniquement sur l'école — qu'est-ce qui est mieux ?",
                "sideA": "Temps partiel",
                "sideB": "Études seules",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gagner beaucoup d'argent ou avoir du temps libre — qu'est-ce qui compte le plus ?",
                "sideA": "Argent",
                "sideB": "Temps libre",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprentissage en ligne ou apprentissage en classe — qu'est-ce qui est plus efficace ?",
                "sideA": "En ligne",
                "sideB": "En classe",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mémoriser des faits ou apprendre à trouver l'information — quelle compétence est la plus importante ?",
                "sideA": "Faits",
                "sideB": "Trouver l'info",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Études universitaires ou formation professionnelle — quelle est la meilleure voie ?",
                "sideA": "Université",
                "sideB": "Pro",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Examens ou contrôle continu — quelle est la manière la plus juste d'évaluer les élèves ?",
                "sideA": "Examens",
                "sideB": "Continu",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre une langue étrangère à l'école ou vivre à l'étranger — qu'est-ce qui est plus efficace ?",
                "sideA": "École",
                "sideB": "Vivre à l'étranger",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écoles non mixtes ou écoles mixtes — lesquelles sont meilleures pour les élèves ?",
                "sideA": "Non mixte",
                "sideB": "Mixte",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseaux sociaux ou communication en face à face — qu'est-ce qui est mieux pour rester en contact ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Services de streaming ou télévision traditionnelle — qu'est-ce qui est mieux ?",
                "sideA": "Streaming",
                "sideB": "TV classique",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à domicile ou travailler dans un bureau — qu'est-ce qui est plus productif ?",
                "sideA": "Maison",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lire les actualités en ligne ou lire un journal — qu'est-ce qui est plus fiable ?",
                "sideA": "Actualités en ligne",
                "sideB": "Journal papier",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passer du temps sur les réseaux sociaux ou passer du temps dans la nature — qu'est-ce qui est mieux pour votre santé mentale ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Utiliser les transports en commun ou conduire une voiture — qu'est-ce qui est mieux pour la société ?",
                "sideA": "Transports publics",
                "sideB": "Voiture",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acheter des vêtements d'occasion ou acheter des vêtements neufs — quelle est la meilleure habitude ?",
                "sideA": "Occasion",
                "sideB": "Neuf",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en ville ou vivre à la campagne — qu'est-ce qui convient le mieux aux jeunes ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Végétarisme ou manger de la viande — qu'est-ce qui est mieux pour la planète ?",
                "sideA": "Végétarisme",
                "sideB": "Viande",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changements de mode de vie individuels ou action gouvernementale — qu'est-ce qui fait le plus pour l'environnement ?",
                "sideA": "Individuel",
                "sideB": "Gouvernement",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un emploi stable ou une carrière créative — quel est le meilleur choix de vie ?",
                "sideA": "Emploi stable",
                "sideB": "Carrière créative",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lancer sa propre entreprise ou travailler pour une société — qu'est-ce qui est mieux ?",
                "sideA": "Propre entreprise",
                "sideB": "Société",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salaire élevé ou satisfaction au travail — qu'est-ce qui compte le plus au travail ?",
                "sideA": "Salaire",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler de longues heures ou avoir un équilibre vie professionnelle-vie privée — qu'est-ce qui mène au succès ?",
                "sideA": "Longues heures",
                "sideB": "Équilibre",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choisir une carrière par passion ou en fonction des perspectives d'emploi — qu'est-ce qui est plus sage ?",
                "sideA": "Passion",
                "sideB": "Perspectives",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en tant qu'individu ou donner la priorité à la communauté — qu'est-ce qui est plus important ?",
                "sideA": "Individu",
                "sideB": "Communauté",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Valeurs traditionnelles ou valeurs modernes — lesquelles est-il plus important de conserver ?",
                "sideA": "Traditionnelles",
                "sideB": "Modernes",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bénévolat ou don d'argent à une œuvre caritative — qu'est-ce qui aide le plus ?",
                "sideA": "Bénévolat",
                "sideB": "Don",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Célébrité ou faire une différence discrètement — quel est le meilleur objectif de vie ?",
                "sideA": "Célébrité",
                "sideB": "Différence discrète",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Suivre les règles ou penser par soi-même — qu'est-ce qui compte le plus ?",
                "sideA": "Règles",
                "sideB": "Pensée propre",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Santé physique ou santé mentale — quelle devrait être la priorité ?",
                "sideA": "Physique",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prévention ou traitement — quelle est la meilleure approche des soins de santé ?",
                "sideA": "Prévention",
                "sideB": "Traitement",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport de compétition ou exercice pour le plaisir — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Compétition",
                "sideB": "Plaisir",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Santé privée ou santé publique — quel système est le plus juste ?",
                "sideA": "Privé",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinéma ou littérature — quelle est la forme d'art la plus puissante ?",
                "sideA": "Cinéma",
                "sideB": "Littérature",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Art moderne ou art classique — qu'est-ce qui a le plus de valeur ?",
                "sideA": "Moderne",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Préserver les vieux bâtiments ou en construire de nouveaux — qu'est-ce qui compte le plus ?",
                "sideA": "Préserver",
                "sideB": "Construire",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Culture locale ou mondialisation — qu'est-ce qui enrichit le plus les communautés ?",
                "sideA": "Locale",
                "sideB": "Mondialisation",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseaux sociaux vs interactions en face à face — qu'est-ce qui est mieux pour construire des relations ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "upper-intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vie urbaine vs vie rurale — laquelle offre une meilleure qualité de vie ?",
                "sideA": "Urbain",
                "sideB": "Rural",
                "level": "upper-intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprentissage en ligne vs salle de classe traditionnelle — quel est l'avenir de l'éducation ?",
                "sideA": "En ligne",
                "sideB": "Classe",
                "level": "upper-intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Énergie renouvelable vs énergie nucléaire — quelle est la meilleure solution pour le climat ?",
                "sideA": "Renouvelable",
                "sideB": "Nucléaire",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mode éphémère vs vêtements durables — pouvons-nous nous permettre d'être éthiques ?",
                "sideA": "Mode éphémère",
                "sideB": "Durable",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Créativité de l'IA vs art humain — les machines peuvent-elles vraiment créer de l'art ?",
                "sideA": "Créativité IA",
                "sideB": "Art humain",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Exploration spatiale vs exploration des grands fonds — où devrions-nous concentrer nos ressources ?",
                "sideA": "Espace",
                "sideB": "Grands fonds",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vie privée numérique vs sécurité nationale — la surveillance totale est-elle jamais justifiée ?",
                "sideA": "Vie privée",
                "sideB": "Sécurité",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aliments génétiquement modifiés vs agriculture biologique — comment devrions-nous nourrir le monde ?",
                "sideA": "OGM",
                "sideB": "Bio",
                "level": "advanced",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Revenu universel vs programmes de garantie d'emploi — quel est le meilleur filet de sécurité sociale ?",
                "sideA": "Revenu universel",
                "sideB": "Garantie d'emploi",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rose vs Orange — quelle couleur est la plus jolie ?",
                "sideA": "Rose",
                "sideB": "Orange",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le chiffre 1 vs le chiffre 10 — quel chiffre est le meilleur ?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaise vs canapé — lequel est le plus confortable ?",
                "sideA": "Chaise",
                "sideB": "Canapé",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sac vs boîte — lequel est le plus utile ?",
                "sideA": "Sac",
                "sideB": "Boîte",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lion vs éléphant — quel animal est le meilleur ?",
                "sideA": "Lion",
                "sideB": "Éléphant",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chocolat vs bonbons — lequel est le meilleur ?",
                "sideA": "Chocolat",
                "sideB": "Bonbons",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuillère vs fourchette — laquelle est la meilleure ?",
                "sideA": "Cuillère",
                "sideB": "Fourchette",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chapeau vs chaussures — lequel est le plus important ?",
                "sideA": "Chapeau",
                "sideB": "Chaussures",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Soleil vs lune — lequel est le meilleur ?",
                "sideA": "Soleil",
                "sideB": "Lune",
                "level": "starter",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaussettes vs pas de chaussettes — qu'est-ce qui est le mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans chaussettes",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre avec ses grands-parents vs ne pas vivre avec eux — qu'est-ce qui est le plus agréable ?",
                "sideA": "Avec les grands-parents",
                "sideB": "Sans les grands-parents",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La cuisine de maman vs la cuisine de papa — laquelle est la meilleure ?",
                "sideA": "Maman",
                "sideB": "Papa",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maths vs art — quelle matière est la plus amusante ?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écrire sur papier vs taper sur une tablette — qu'est-ce qui est mieux ?",
                "sideA": "Papier",
                "sideB": "Tablette",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pâtes — qu'est-ce qui est le plus bon ?",
                "sideA": "Pizza",
                "sideB": "Pâtes",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Glace vs gâteau — quel est le meilleur dessert ?",
                "sideA": "Glace",
                "sideB": "Gâteau",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jours courts vs jours longs — qu'est-ce qui est mieux ?",
                "sideA": "Jours courts",
                "sideB": "Jours longs",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Journée au parc vs journée à la plage — qu'est-ce qui est mieux ?",
                "sideA": "Parc",
                "sideB": "Plage",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avion vs train — qu'est-ce qui est le plus amusant ?",
                "sideA": "Avion",
                "sideB": "Train",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Douche le matin vs douche le soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chats qui renversent des choses vs chiens qui mâchent des chaussures — quel animal est le plus agaçant ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger de la pizza avec une fourchette vs avec les mains — qu'est-ce qui est correct ?",
                "sideA": "Fourchette",
                "sideB": "Mains",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormir avec des chaussettes vs sans chaussettes — qu'est-ce qui est mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Château de sable vs bonhomme de neige — qu'est-ce qui est le plus amusant à construire ?",
                "sideA": "Château de sable",
                "sideB": "Bonhomme de neige",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Beaucoup d'examens vs très peu d'examens — qu'est-ce qui est le plus juste ?",
                "sideA": "Beaucoup d'examens",
                "sideB": "Très peu d'examens",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Commencer l'école à 7 ans vs commencer à 5 ans — qu'est-ce qui est mieux pour les enfants ?",
                "sideA": "À 7 ans",
                "sideB": "À 5 ans",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger lentement vs manger rapidement — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Lentement",
                "sideB": "Rapidement",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner à la maison vs commander en ligne — qu'est-ce qui est mieux ?",
                "sideA": "Cuisiner",
                "sideB": "Commander",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner vs faire de la pâtisserie — qu'est-ce qui est le plus amusant comme passe-temps ?",
                "sideA": "Cuisiner",
                "sideB": "Pâtisser",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aller à la salle de sport vs faire de l'exercice dehors — qu'est-ce qui est mieux ?",
                "sideA": "Salle de sport",
                "sideB": "Dehors",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Photos sur téléphone vs photos imprimées — qu'est-ce qui est mieux ?",
                "sideA": "Téléphone",
                "sideB": "Imprimées",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs écran d'ordinateur — qu'est-ce qui est mieux pour regarder des films ?",
                "sideA": "Smart TV",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pays chaud vs pays froid — quelle est la meilleure destination de vacances ?",
                "sideA": "Pays chaud",
                "sideB": "Pays froid",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Offrir des cadeaux vs recevoir des cadeaux — que préférez-vous ?",
                "sideA": "Offrir",
                "sideB": "Recevoir",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à l'intérieur vs travailler à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ananas sur la pizza vs pas d'ananas — qu'est-ce qui est correct ?",
                "sideA": "Ananas",
                "sideB": "Pas d'ananas",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mettre le lait en premier vs mettre le thé — qu'est-ce qui est mieux ?",
                "sideA": "Lait d'abord",
                "sideB": "Thé d'abord",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lundi vs Vendredi — quel jour est réellement le pire ?",
                "sideA": "Lundi",
                "sideB": "Vendredi",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se réveiller cinq minutes avant l'alarme vs dormir jusqu'à l'alarme — qu'est-ce qui est le plus agaçant ?",
                "sideA": "Avant l'alarme",
                "sideB": "Jusqu'à l'alarme",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chats vs chiens — quel animal est secrètement le patron de la maison ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir trop chaud vs avoir trop froid — qu'est-ce qui est le pire ?",
                "sideA": "Trop chaud",
                "sideB": "Trop froid",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre de ses erreurs vs apprendre de ses succès — qu'est-ce qui instruit le plus ?",
                "sideA": "Erreurs",
                "sideB": "Succès",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablettes en classe vs cahiers traditionnels — qu'est-ce qui aide le plus les élèves ?",
                "sideA": "Tablettes",
                "sideB": "Cahiers",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Être toujours joignable vs avoir du temps libre numérique — qu'est-ce qui est mieux ?",
                "sideA": "Joignable",
                "sideB": "Temps libre",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réutiliser les objets vs recycler — qu'est-ce qui est le plus efficace ?",
                "sideA": "Réutiliser",
                "sideB": "Recycler",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Une seule carrière pour la vie vs changer de carrière souvent — qu'est-ce qui est mieux ?",
                "sideA": "Une carrière",
                "sideB": "Changer souvent",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le sommeil vs l'exercice — qu'est-ce qui a le plus d'impact sur votre santé ?",
                "sideA": "Sommeil",
                "sideB": "Exercice",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musique pop vs musique classique — laquelle a le plus d'impact culturel ?",
                "sideA": "Pop",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Savoir comment quelque chose se termine vs être surpris — qu'est-ce qui est mieux ?",
                "sideA": "Savoir",
                "sideB": "Surpris",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Répondre immédiatement aux messages vs prendre son temps — qu'est-ce qui est le plus respectueux ?",
                "sideA": "Immédiatement",
                "sideB": "Prendre son temps",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Regarder une série d'un coup vs regarder un épisode par semaine — quelle est la bonne manière ?",
                "sideA": "D'un coup",
                "sideB": "Hebdomadaire",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Siège côté fenêtre vs siège côté couloir — lequel est objectivement le meilleur ?",
                "sideA": "Fenêtre",
                "sideB": "Couloir",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sauter la salle une fois vs y aller et avoir une mauvaise séance — qu'est-ce qui est le pire ?",
                "sideA": "Sauter",
                "sideB": "Mauvaise séance",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se parler à soi-même vs parler à son animal — qu'est-ce qui est le plus raisonnable ?",
                "sideA": "À soi-même",
                "sideB": "À son animal",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Mon souvenir d'enfance préféré",
                "level": "starter",
                "theme": "people_society"
            },
            {
                "topic": "Les dernières vacances que j'ai prises",
                "level": "elementary",
                "theme": "travel_places"
            },
            {
                "topic": "Une personne qui m'a inspiré",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "topic": "L'avenir du monde dans 50 ans",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "topic": "Le rôle de l'art dans la société moderne",
                "level": "advanced",
                "theme": "leisure_hobbies"
            },
            {
                "topic": "La complexité de la conscience humaine",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "topic": "L'importance de la sensibilisation à la santé mentale",
                "level": "intermediate",
                "theme": "health_body"
            },
            {
                "topic": "Le métier de mes rêves et pourquoi",
                "level": "starter",
                "theme": "education_work"
            },
            {
                "topic": "L'impact du changement climatique sur les communautés locales",
                "level": "upper-intermediate",
                "theme": "nature_environment"
            },
            {
                "topic": "Intelligence artificielle : outil ou menace ?",
                "level": "advanced",
                "theme": "science_technology"
            }
        ]
    },
    "it": {
        "opinionArena": [
            {
                "text": "La colazione è il pasto più importante?",
                "level": "starter",
                "theme": "food_drinks"
            },
            {
                "text": "I cani sono animali domestici migliori dei gatti?",
                "level": "starter",
                "theme": "leisure_hobbies"
            },
            {
                "text": "I bambini dovrebbero avere il cellulare?",
                "level": "elementary",
                "theme": "science_technology"
            },
            {
                "text": "È meglio vivere in una casa o in un appartamento?",
                "level": "elementary",
                "theme": "daily_life"
            },
            {
                "text": "Possiamo vivere senza internet per una settimana?",
                "level": "intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Tutti dovrebbero imparare una seconda lingua?",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "I social media stanno distruggendo le nostre abilità sociali?",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "text": "I trasporti pubblici dovrebbero essere gratuiti?",
                "level": "upper-intermediate",
                "theme": "travel_places"
            },
            {
                "text": "Ingegneria genetica: progresso o pericolo?",
                "level": "advanced",
                "theme": "science_technology"
            },
            {
                "text": "Il reddito di base universale è una soluzione all'automazione?",
                "level": "advanced",
                "theme": "people_society"
            },
            {
                "text": "Il libero arbitrio esiste davvero o è un'illusione?",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "text": "L'etica della colonizzazione di altri pianeti.",
                "level": "proficiency",
                "theme": "science_technology"
            }
        ],
        "criticsCorner": [
            {
                "text": "Penso, dunque sono.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "people_society"
            },
            {
                "text": "L'unica costante è il cambiamento.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "people_society"
            }
        ],
        "debates": [
            {"topic": "Caffè vs tè — qual è la migliore bevanda del mattino?", "sideA": "Caffè", "sideB": "Tè", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Ristorante vs cucina casalinga — cosa è meglio?", "sideA": "Ristorante", "sideB": "Cucina casalinga", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Colazione vs niente colazione — cosa è meglio per te?", "sideA": "Colazione", "sideB": "Niente", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Acqua vs succo — cosa è più salutare?", "sideA": "Acqua", "sideB": "Succo", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Carne vs verdure — cosa è più importante in un pasto?", "sideA": "Carne", "sideB": "Verdure", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Casa vs appartamento — dove è meglio vivere?", "sideA": "Casa", "sideB": "Appartamento", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Città vs villaggio — qual è il posto migliore dove vivere?", "sideA": "Città", "sideB": "Villaggio", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Contanti vs carta — con cosa è meglio pagare?", "sideA": "Contanti", "sideB": "Carta", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Risparmiare denaro vs spendere denaro — cosa è meglio?", "sideA": "Risparmiare", "sideB": "Spendere", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Affittare vs comprare — cosa è meglio?", "sideA": "Affittare", "sideB": "Comprare", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Lavoro al mattino vs lavoro alla sera — cosa è meglio?", "sideA": "Mattino", "sideB": "Sera", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Auto vs autobus — cosa è meglio per andare al lavoro?", "sideA": "Auto", "sideB": "Autobus", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Camminare vs guidare — cosa è meglio in città?", "sideA": "Camminare", "sideB": "Guidare", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Ufficio vs casa — qual è il posto migliore per lavorare?", "sideA": "Ufficio", "sideB": "Casa", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Mattiniero vs nottambulo — cosa è meglio?", "sideA": "Mattiniero", "sideB": "Nottambulo", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Estate vs inverno — quale stagione è la migliore?", "sideA": "Estate", "sideB": "Inverno", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Vacanza breve vs vacanza lunga — cosa è meglio?", "sideA": "Breve", "sideB": "Lunga", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Telefonata vs messaggio — cosa è meglio?", "sideA": "Telefonata", "sideB": "Messaggio", "level": "starter", "theme": "science_technology", "ideasA": [], "ideasB": []},
            {"topic": "Doccia al mattino vs doccia alla sera — qual è corretta?", "sideA": "Mattino", "sideB": "Sera", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Lunedì vs venerdì — quale giorno è il migliore?", "sideA": "Lunedì", "sideB": "Venerdì", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Troppo caldo vs troppo freddo — cosa è peggio?", "sideA": "Troppo caldo", "sideB": "Troppo freddo", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Posto finestrino vs posto corridoio — qual è meglio in aereo?", "sideA": "Finestrino", "sideB": "Corridoio", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare a tempo pieno vs lavorare a tempo parziale — cosa è meglio?", "sideA": "Tempo pieno", "sideB": "Tempo parziale", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare in ufficio vs lavorare da casa — cosa preferisci?", "sideA": "Ufficio", "sideB": "Casa", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Un lavoro che ami vs un lavoro che paga bene — cosa è più importante?", "sideA": "Lavoro amato", "sideB": "Paga bene", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Lavorare con altre persone vs lavorare da soli — cosa è meglio?", "sideA": "Con altri", "sideB": "Da soli", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Un tragitto breve vs un tragitto lungo — cosa è più accettabile?", "sideA": "Breve", "sideB": "Lungo", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Vivere da soli vs vivere con un partner — cosa è meglio?", "sideA": "Da soli", "sideB": "Partner", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Grande città vs piccola città — qual è il posto migliore dove vivere da adulti?", "sideA": "Grande città", "sideB": "Piccola città", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Cucinare a casa vs mangiare fuori — cosa è meglio per la vita quotidiana?", "sideA": "A casa", "sideB": "Fuori", "level": "elementary", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Avere figli vs non avere figli — quale vita è migliore?", "sideA": "Figli", "sideB": "Niente figli", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Affittare un appartamento vs comprare una casa — cosa è meglio per i giovani adulti?", "sideA": "Affittare", "sideB": "Comprare", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Esercizio ogni giorno vs riposo — cosa è meglio per la tua salute?", "sideA": "Esercizio", "sideB": "Riposo", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Andare dal medico vs aspettare — cosa è meglio quando ti senti male?", "sideA": "Medico", "sideB": "Aspettare", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Dormire otto ore vs dormire meno — cosa è più realistico per gli adulti?", "sideA": "8 ore", "sideB": "Meno", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Andare al lavoro a piedi vs prendere l'auto — cosa è meglio per la tua salute?", "sideA": "A piedi", "sideB": "Auto", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Acquisti online vs acquisti in un negozio — cosa preferisci?", "sideA": "Online", "sideB": "Negozio", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Risparmiare per il futuro vs godersi i soldi ora — cosa è più saggio?", "sideA": "Risparmiare", "sideB": "Godersi ora", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Cose costose vs cose economiche — cosa ha il miglior valore?", "sideA": "Costose", "sideB": "Economiche", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Comprare nuovo vs comprare di seconda mano — cosa è meglio?", "sideA": "Nuovo", "sideB": "Seconda mano", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Guardare la TV a casa vs uscire — qual è la serata migliore?", "sideA": "TV", "sideB": "Uscire", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Vacanze in famiglia vs vacanze con amici — cosa è meglio?", "sideA": "Famiglia", "sideB": "Amici", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Rimanere nel proprio paese vs viaggiare all'estero — qual è la vacanza migliore?", "sideA": "Proprio paese", "sideB": "Estero", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Sport vs lettura — qual è il miglior hobby per gli adulti?", "sideA": "Sport", "sideB": "Lettura", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Vedere spesso gli amici vs avere tempo da soli — cosa è più importante?", "sideA": "Amici", "sideB": "Da soli", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Rispondere alle email immediatamente vs lasciarle per dopo — cosa è più professionale?", "sideA": "Immediatamente", "sideB": "Dopo", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Lavare i piatti immediatamente vs lasciarli fino a domani — cosa è meglio?", "sideA": "Immediatamente", "sideB": "Domani", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Essere sempre in anticipo vs sempre cinque minuti in ritardo — cosa è peggio al lavoro?", "sideA": "Anticipo", "sideB": "Ritardo", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Avere una scrivania molto organizzata vs una scrivania disordinata — quale persona è più produttiva?", "sideA": "Organizzata", "sideB": "Disordinata", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Parlare di lavoro a cena vs niente chiacchiere di lavoro a cena — quale regola è migliore?", "sideA": "Parlare di lavoro", "sideB": "Niente lavoro", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},

            {
                "topic": "Linguaggio: Costitutivo vs Espressivo",
                "sideA": "Costitutivo",
                "sideB": "Espressivo",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Modella la realtà",
                    "Limita il pensiero"
                ],
                "ideasB": [
                    "Riflette la realtà",
                    "Strumento per il pensiero"
                ]
            },
            {
                "topic": "Precisione vs Ambiguità",
                "sideA": "Precisione",
                "sideB": "Ambiguità",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Chiarezza",
                    "Efficienza"
                ],
                "ideasB": [
                    "Sfumatura",
                    "Diplomazia"
                ]
            },
            {
                "topic": "Retorica vs Logica",
                "sideA": "Retorica",
                "sideB": "Logica",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Potere persuasivo",
                    "Appello emotivo"
                ],
                "ideasB": [
                    "Verità oggettiva",
                    "Validità strutturale"
                ]
            },
            {
                "topic": "Significato letterale vs Significato interpretativo",
                "sideA": "Letterale",
                "sideB": "Interpretativo",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Intenzione dell'autore",
                    "Stabilità"
                ],
                "ideasB": [
                    "Risposta del lettore",
                    "Contesto in evoluzione"
                ]
            },
            {
                "topic": "Consenso scientifico vs Umiltà epistemica",
                "sideA": "Consenso",
                "sideB": "Umiltà",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Conoscenza consolidata",
                    "Autorità esperta"
                ],
                "ideasB": [
                    "Apertura alla correzione",
                    "Riconoscimento dei limiti"
                ]
            },
            {
                "topic": "Competenza vs Esperienza vissuta",
                "sideA": "Competenza",
                "sideB": "Esperienza vissuta",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Rigore scientifico",
                    "Dati oggettivi"
                ],
                "ideasB": [
                    "Verità autentica",
                    "Intuizione contestuale"
                ]
            },
            {
                "topic": "Il dubbio: Virtù vs Paralisi",
                "sideA": "Virtù",
                "sideB": "Paralisi",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Pensiero critico",
                    "Scetticismo"
                ],
                "ideasB": [
                    "Indecisione",
                    "Mancanza di azione"
                ]
            },
            {
                "topic": "Narrativa vs Dati",
                "sideA": "Narrativa",
                "sideB": "Dati",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Impatto emotivo",
                    "Connessione umana"
                ],
                "ideasB": [
                    "Verità statistica",
                    "Scalabilità"
                ]
            },
            {
                "topic": "Legittimità: Consenso vs Risultato",
                "sideA": "Consenso",
                "sideB": "Risultato",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Processo democratico",
                    "Diritto morale"
                ],
                "ideasB": [
                    "Efficienza",
                    "Governance efficace"
                ]
            },
            {
                "topic": "Stato: Garante della libertà vs Minaccia",
                "sideA": "Garante",
                "sideB": "Minaccia",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Stato di diritto",
                    "Protezione dei diritti"
                ],
                "ideasB": [
                    "Abuso di potere",
                    "Sorveglianza"
                ]
            },
            {
                "topic": "Politica dei diritti vs Politica delle responsabilità",
                "sideA": "Diritti",
                "sideB": "Responsabilità",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Libertà individuale",
                    "Protezione legale"
                ],
                "ideasB": [
                    "Dovere collectif",
                    "Coesione sociale"
                ]
            },
            {
                "topic": "Neutralità vs Governance guidata dai valori",
                "sideA": "Neutralità",
                "sideB": "Guidata dai valori",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Imparzialità",
                    "Equità"
                ],
                "ideasB": [
                    "Direzione morale",
                    "Scopo sociale"
                ]
            },
            {
                "topic": "Intenzione vs Ricezione nell'arte",
                "sideA": "Intenzione",
                "sideB": "Ricezione",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Visione dell'autore",
                    "Contesto originale"
                ],
                "ideasB": [
                    "Significato per il pubblico",
                    "Impatto culturale"
                ]
            },
            {
                "topic": "Valore estetico vs Valore morale",
                "sideA": "Estetico",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "L'arte per l'arte",
                    "Pura bellezza"
                ],
                "ideasB": [
                    "Utilità sociale",
                    "Impatto etico"
                ]
            },
            {
                "topic": "L'avanguardia vs Accessibilità",
                "sideA": "Avanguardia",
                "sideB": "Accessibilità",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Spostare i confini",
                    "Sfida intellettuale"
                ],
                "ideasB": [
                    "Inclusività",
                    "Arte democratica"
                ]
            },
            {
                "topic": "Arte istituzionale vs Arte irregolare",
                "sideA": "Istituzionale",
                "sideB": "Irregolare",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Preservazione storica",
                    "Standard"
                ],
                "ideasB": [
                    "Autenticità grezza",
                    "Anti-sistema"
                ]
            },
            {
                "topic": "Principio di precauzione vs proazione",
                "sideA": "Precauzionale",
                "sideB": "Proattivo",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Evitare i rischi",
                    "Sicurezza prima di tutto"
                ],
                "ideasB": [
                    "Innovazione",
                    "Abbracciare il cambiamento"
                ]
            },
            {
                "topic": "Progresso scientifico: Intrinsecamente buono vs Neutro",
                "sideA": "Intrinsecamente buono",
                "sideB": "Eticamente neutro",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Valori dell'Illuminismo",
                    "Risoluzione dei problemi"
                ],
                "ideasB": [
                    "Preoccupazione per il doppio uso",
                    "Responsabilità umana"
                ]
            },
            {
                "topic": "Rischio esistenziale vs Sofferenza attuale",
                "sideA": "Rischio esistenziale",
                "sideB": "Sofferenza attuale",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Sopravvivenza a lungo termine",
                    "Generazioni future"
                ],
                "ideasB": [
                    "Sollievo immediato",
                    "Povertà urgente"
                ]
            },
            {
                "topic": "Coscienza umana vs Intelligenza artificiale generale",
                "sideA": "Coscienza",
                "sideB": "IA Generale",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Unicità biologica",
                    "Esperienza soggettiva"
                ],
                "ideasB": [
                    "Potenza di calcolo",
                    "Logica algoritmica"
                ]
            },
            {
                "topic": "Il progresso: Reale vs Illusione",
                "sideA": "Reale",
                "sideB": "Illusione",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Progresso tecnologico",
                    "Migliore qualità della vita"
                ],
                "ideasB": [
                    "Storia ciclica",
                    "Nuovi problemi"
                ]
            },
            {
                "topic": "Ordine liberale vs Mondo multipolare",
                "sideA": "Ordine liberale",
                "sideB": "Multipolarità",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Valori universali",
                    "Stabilità globale"
                ],
                "ideasB": [
                    "Potere diversificato",
                    "Sovranità culturale"
                ]
            },
            {
                "topic": "Memoria vs Oblio",
                "sideA": "Memoria",
                "sideB": "Oblio",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Imparare dalla storia",
                    "Identità"
                ],
                "ideasB": [
                    "Andare avanti",
                    "Superare i traumi"
                ]
            },
            {
                "topic": "Tragedia dei beni comuni vs Cooperazione",
                "sideA": "Tragedia",
                "sideB": "Cooperazione",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Interesse personale",
                    "Esaurimento delle risorse"
                ],
                "ideasB": [
                    "Vantaggio reciproco",
                    "Gestione collettiva"
                ]
            },
            {
                "topic": "Rosso vs Blu — quale colore è migliore?",
                "sideA": "Rosso",
                "sideB": "Blu",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giallo vs Verde — quale colore è più allegro?",
                "sideA": "Giallo",
                "sideB": "Verde",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nero vs Bianco — quale colore preferisci?",
                "sideA": "Nero",
                "sideB": "Bianco",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rosa vs Viola — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Viola",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cerchio vs Quadrato — quale forma è più utile?",
                "sideA": "Cerchio",
                "sideB": "Quadrato",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Numeri grandi vs piccoli — quali sono più divertenti?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangolo vs Rettangolo — quale forma è migliore?",
                "sideA": "Triangolo",
                "sideB": "Rettangolo",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Palla vs Bambola — quale giocattolo è migliore?",
                "sideA": "Palla",
                "sideB": "Bambola",
                "level": "starter",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matita vs Penna — con cosa è meglio scrivere?",
                "sideA": "Matita",
                "sideB": "Penna",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Libro vs Immagine — da cosa è meglio imparare?",
                "sideA": "Libro",
                "sideB": "Immagine",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sedia vs Pavimento — su cosa è meglio sedersi?",
                "sideA": "Sedia",
                "sideB": "Pavimento",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatto vs Cane — quale animale è migliore?",
                "sideA": "Gatto",
                "sideB": "Cane",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pesce vs Uccello — quale è un animale domestico migliore?",
                "sideA": "Pesce",
                "sideB": "Uccello",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animali grandi vs piccoli — quali sono più carini?",
                "sideA": "Grandi",
                "sideB": "Piccoli",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Coniglio vs Criceto — quale è più carino?",
                "sideA": "Coniglio",
                "sideB": "Criceto",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acqua vs Succo — cosa è meglio bere?",
                "sideA": "Acqua",
                "sideB": "Succo",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mela vs Banana — quale frutto è migliore?",
                "sideA": "Mela",
                "sideB": "Banana",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pane vs Riso — cosa è meglio mangiare?",
                "sideA": "Pane",
                "sideB": "Riso",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Latte vs Acqua — quale preferisci?",
                "sideA": "Latte",
                "sideB": "Acqua",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere in famiglia vs Da soli — cosa è meglio?",
                "sideA": "In famiglia",
                "sideB": "Da soli",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere un fratello vs una sorella — cosa è meglio?",
                "sideA": "Fratello",
                "sideB": "Sorella",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Famiglia grande vs piccola — quale è più bella?",
                "sideA": "Grande",
                "sideB": "Piccola",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il più grande vs Il più piccolo — cosa è meglio?",
                "sideA": "Grande",
                "sideB": "Piccolo",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuola di mattina vs pomeriggio — cosa è meglio?",
                "sideA": "Mattina",
                "sideB": "Pomeriggio",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lettura vs Matematica — quale è più divertente?",
                "sideA": "Lettura",
                "sideB": "Matematica",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuola vs Casa — cosa è meglio?",
                "sideA": "Scuola",
                "sideB": "Casa",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Compiti vs Niente compiti — cosa aiuta di più?",
                "sideA": "Compiti",
                "sideB": "Niente",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Da soli vs In coppia — cosa preferisci?",
                "sideA": "Da soli",
                "sideB": "Coppia",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Carta vs Computer — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Colazione vs Cena — quale pasto è più importante?",
                "sideA": "Colazione",
                "sideB": "Cena",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cibo caldo vs freddo — cosa è meglio?",
                "sideA": "Caldo",
                "sideB": "Freddo",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Casa vs Ristorante — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Ristorante",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dolce vs Salato — cosa preferisci?",
                "sideA": "Dolce",
                "sideB": "Salato",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare vs Comprare — cosa è più bello?",
                "sideA": "Cucinare",
                "sideB": "Comprare",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Svegliarsi presto vs tardi — cosa è meglio?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mattina vs Sera — quale parte del giorno è più bella?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorni feriali vs Fine settimana — cosa preferisci?",
                "sideA": "Feriali",
                "sideB": "Fine settimana",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Estate vs Inverno — quale stagione è migliore?",
                "sideA": "Estate",
                "sideB": "Inverno",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare a letto presto vs tardi — cosa è più salutare?",
                "sideA": "Presto",
                "sideB": "Tardi",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Casa vs Appartamento — cosa è meglio?",
                "sideA": "Casa",
                "sideB": "Appartamento",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Città vs Campagna — quale è un posto migliore dove vivere?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Camera vs Soggiorno — quale stanza preferisci?",
                "sideA": "Camera",
                "sideB": "Soggiorno",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giochi al chiuso vs all'aperto — quali sono più divertenti?",
                "sideA": "Chiuso",
                "sideB": "Aperto",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "TV vs Libro — cosa è meglio?",
                "sideA": "TV",
                "sideB": "Libro",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Videogioco — quale è più divertente?",
                "sideA": "Sport",
                "sideB": "Videogioco",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Disegno vs Canto — quale hobby è migliore?",
                "sideA": "Disegno",
                "sideB": "Canto",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giocare da soli vs con amici — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Amici",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nuoto vs Corsa — quale sport preferisci?",
                "sideA": "Nuoto",
                "sideB": "Corsa",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musica vs Sport — quale è un hobby migliore?",
                "sideA": "Musica",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animali da fattoria vs selvatici — quali sono più interessanti?",
                "sideA": "Fattoria",
                "sideB": "Selvatici",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pioggia vs Sole — quale tempo preferisci?",
                "sideA": "Pioggia",
                "sideB": "Sole",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mare vs Montagna — quale è meglio per una vacanza?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fiori vs Alberi — quali sono più belli?",
                "sideA": "Fiori",
                "sideB": "Alberi",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Auto vs Autobus — cosa è meglio?",
                "sideA": "Auto",
                "sideB": "Autobus",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Camminare vs Bici — con cosa è meglio spostarsi?",
                "sideA": "Camminare",
                "sideB": "Bici",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanze brevi vs lunghe — cosa è meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare soli vs in famiglia — quale è più divertente?",
                "sideA": "Soli",
                "sideB": "Famiglia",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acquisti online vs Acquisti di persona",
                "sideA": "Online",
                "sideB": "Di persona",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [
                    "Comodità",
                    "Prezzi migliori"
                ],
                "ideasB": [
                    "Provare gli articoli",
                    "Gratificazione istantanea"
                ]
            },
            {
                "topic": "Libri cartacei vs E-book",
                "sideA": "Carta",
                "sideB": "E-book",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Odore/Sensazione",
                    "Collezionabile"
                ],
                "ideasB": [
                    "Portability",
                    "Risparmio di spazio"
                ]
            },
            {
                "topic": "Lavoro da casa vs Lavoro in ufficio",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [
                    "Nessun tragitto",
                    "Flessibilità"
                ],
                "ideasB": [
                    "Socializzazione",
                    "Migliore concentrazione"
                ]
            },
            {
                "topic": "Auto elettriche vs Auto a benzina",
                "sideA": "Elettriche",
                "sideB": "Benzina",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [
                    "Ambiente",
                    "Silenzioso"
                ],
                "ideasB": [
                    "Autonomia",
                    "Velocità di ricarica"
                ]
            },
            {
                "topic": "Studiare la mattina o studiare la sera — quando è meglio?",
                "sideA": "Mattina",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Insegnanti severi o insegnanti amichevoli — chi aiuta di più gli studenti?",
                "sideA": "Severi",
                "sideB": "Amichevoli",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare con un libro di testo o imparare con i video — cosa è più efficace?",
                "sideA": "Libro",
                "sideB": "Video",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lezioni brevi o lezioni lunghe — quali aiutano a imparare meglio?",
                "sideA": "Brevi",
                "sideB": "Lunghe",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Progetti di gruppo o compiti individuali — cosa preferisci?",
                "sideA": "Gruppo",
                "sideB": "Individuale",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Uniforme scolastica o vestiti casual a scuola — cosa è meglio?",
                "sideA": "Uniforme",
                "sideB": "Casual",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pasti cucinati in casa o fast food — cosa è meglio?",
                "sideA": "In casa",
                "sideB": "Fast food",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tre pasti abbondanti o molti piccoli spuntini — cosa è più sano?",
                "sideA": "Grandi pasti",
                "sideB": "Spuntini",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cibo vegetariano o carne — quale dieta è migliore?",
                "sideA": "Vegetariano",
                "sideB": "Carne",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bere tè o bere caffè — cosa è meglio?",
                "sideA": "Tè",
                "sideB": "Caffè",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare da soli o mangiare con altri — cosa preferisci?",
                "sideA": "Da soli",
                "sideB": "Con altri",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Praticare uno sport di squadra o uno sport individuale — cosa è meglio?",
                "sideA": "Sport di squadra",
                "sideB": "Sport individuale",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passare il tempo libero al chiuso o all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema o teatro — quale è la migliore serata fuori?",
                "sideA": "Cinema",
                "sideB": "Teatro",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ascoltare musica o suonare uno strumento — cosa è più piacevole?",
                "sideA": "Ascoltare",
                "sideB": "Suonare",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Videogiochi o giochi da tavolo — quali sono più divertenti?",
                "sideA": "Videogiochi",
                "sideB": "Giochi da tavolo",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare shopping o restare a casa — quale è il modo migliore per trascorrere il fine settimana?",
                "sideA": "Shopping",
                "sideB": "Restare a casa",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cellulare o computer — quale è più utile nella vita quotidiana?",
                "sideA": "Cellulare",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Inviare un messaggio o fare una telefonata — cosa è meglio?",
                "sideA": "Messaggio",
                "sideB": "Chiamata",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "E-book o libro cartaceo — cosa preferisci leggere?",
                "sideA": "E-book",
                "sideB": "Libro cartaceo",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scattare foto con il telefono o con una fotocamera — cosa dà risultati migliori?",
                "sideA": "Telefono",
                "sideB": "Fotocamera",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacanze al mare o vacanze in montagna — cosa è meglio?",
                "sideA": "Mare",
                "sideB": "Montagna",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare in treno o viaggiare in aereo — cosa è meglio?",
                "sideA": "Treno",
                "sideB": "Aereo",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visitare una città famosa o visitare un piccolo villaggio — cosa è più interessante?",
                "sideA": "Città",
                "sideB": "Villaggio",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Soggiornare in un hotel o presso una famiglia locale — cosa preferisci?",
                "sideA": "Hotel",
                "sideB": "Famiglia locale",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viaggiare all'estero o esplorare il proprio paese — cosa vale di più la pena?",
                "sideA": "Estero",
                "sideB": "Proprio paese",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere molti amici o avere pochi amici stretti — cosa è meglio?",
                "sideA": "Molti amici",
                "sideB": "Amici stretti",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Incontrare gli amici di persona o chattare online — cosa è più soddisfacente?",
                "sideA": "Di persona",
                "sideB": "Online",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere con i genitori o in un appartamento per studenti — cosa è meglio per i giovani?",
                "sideA": "Genitori",
                "sideB": "Appartamento studenti",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Festeggiare il compleanno a casa o uscire — cosa è più carino?",
                "sideA": "Casa",
                "sideB": "Uscire",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Risparmiare denaro o spendere denaro — cosa è più saggio?",
                "sideA": "Risparmiare",
                "sideB": "Spendere",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare part-time mentre si studia o concentrarsi solo sulla scuola — cosa è meglio?",
                "sideA": "Part-time",
                "sideB": "Solo scuola",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Guadagnare molti soldi o avere tempo libero — cosa conta di più?",
                "sideA": "Soldi",
                "sideB": "Tempo libero",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendimento online o apprendimento in aula — cosa è più efficace?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Memorizzare fatti o imparare come trovare informazioni — quale abilità è più importante?",
                "sideA": "Fatti",
                "sideB": "Trovare info",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Istruzione universitaria o formazione professionale — quale è il percorso migliore?",
                "sideA": "Università",
                "sideB": "Professionale",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Esami o valutazione continua — quale è il modo più giusto per valutare gli studenti?",
                "sideA": "Esami",
                "sideB": "Continua",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare una lingua straniera a scuola o vivere all'estero — cosa è più efficace?",
                "sideA": "Scuola",
                "sideB": "Vivere all'estero",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuole maschili o femminili o scuole miste — quali sono migliori per gli studenti?",
                "sideA": "Solo maschi/femmine",
                "sideB": "Mista",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media o comunicazione faccia a faccia — cosa è meglio per restare in contatto?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Servizi di streaming o TV tradizionale — cosa è meglio?",
                "sideA": "Streaming",
                "sideB": "TV classica",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare da casa o lavorare in ufficio — cosa è più produttivo?",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Leggere le notizie online o leggere un giornale — cosa è più affidabile?",
                "sideA": "Notizie online",
                "sideB": "Giornale",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passare il tempo sui social media o passare il tempo nella natura — cosa è meglio per la tua salute mentale?",
                "sideA": "Social media",
                "sideB": "Natura",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Usare i trasporti pubblici o guidare l'auto — cosa è meglio per la società?",
                "sideA": "Trasporti pubblici",
                "sideB": "Auto",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Comprare vestiti usati o comprare vestiti nuovi — quale è l'abitudine migliore?",
                "sideA": "Usato",
                "sideB": "Nuovo",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere in città o vivere in campagna — cosa si adatta meglio ai giovani?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarianismo o mangiare carne — cosa è meglio per il pianeta?",
                "sideA": "Vegetarianismo",
                "sideB": "Carne",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cambiamenti nello stile di vita individuale o azione del governo — cosa fa di più per l'ambiente?",
                "sideA": "Individuale",
                "sideB": "Governo",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un lavoro stabile o una carriera creativa — quale è la scelta di vita migliore?",
                "sideA": "Lavoro stabile",
                "sideB": "Carriera creativa",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aprire la propria attività o lavorare per un'azienda — cosa è meglio?",
                "sideA": "Propria attività",
                "sideB": "Azienda",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salario alto o soddisfazione sul lavoro — cosa conta di più al lavoro?",
                "sideA": "Salario",
                "sideB": "Soddisfazione",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare molte ore o avere un equilibrio vita-lavoro — cosa porta a un maggiore successo?",
                "sideA": "Molte ore",
                "sideB": "Equilibrio",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scegliere una carriera in base alla passione o in base alle prospettive di lavoro — cosa è più saggio?",
                "sideA": "Passione",
                "sideB": "Prospettive",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere come individuo o mettere al primo posto la comunità — cosa è più importante?",
                "sideA": "Individuo",
                "sideB": "Comunità",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Valori tradizionali o valori moderni — quali sono più importanti da conservare?",
                "sideA": "Tradizionali",
                "sideB": "Moderni",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare volontariato o donare soldi in beneficenza — cosa aiuta di più?",
                "sideA": "Volontariato",
                "sideB": "Donare",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fama o fare la differenza in silenzio — quale è l'obiettivo migliore nella vita?",
                "sideA": "Fama",
                "sideB": "Differenza silenziosa",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seguire le regole o pensare con la propria testa — cosa conta di più?",
                "sideA": "Regole",
                "sideB": "Pensiero proprio",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salute fisica o salute mentale — quale dovrebbe essere la priorità?",
                "sideA": "Fisica",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prevenzione o cura — quale è l'approccio migliore alla sanità?",
                "sideA": "Prevenzione",
                "sideB": "Cura",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport competitivo o esercizio fisico per divertimento — cosa è meglio per te?",
                "sideA": "Competitivo",
                "sideB": "Divertimento",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sanità privata o sanità pubblica — quale sistema è più equo?",
                "sideA": "Privata",
                "sideB": "Pubblica",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema o letteratura — quale è una forma d'arte più potente?",
                "sideA": "Cinema",
                "sideB": "Letteratura",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Arte moderna o arte classica — cosa è più prezioso?",
                "sideA": "Moderna",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Preservare i vecchi edifici o costruirne di nuovi — cosa conta di più?",
                "sideA": "Preservare",
                "sideB": "Costruire",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cultura locale o globalizzazione — cosa arricchisce di più le comunità?",
                "sideA": "Locale",
                "sideB": "Globalizzazione",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media vs interazioni faccia a faccia — cosa è meglio per costruire relazioni?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "upper-intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vita urbana vs vita rurale — quale offre una migliore qualità della vita?",
                "sideA": "Urbana",
                "sideB": "Rurale",
                "level": "upper-intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendimento online vs aula tradizionale — quale è il futuro dell'istruzione?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "upper-intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Energia rinnovabile vs energia nucleare — quale è la soluzione migliore per il clima?",
                "sideA": "Rinnovabile",
                "sideB": "Nucleare",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fast fashion vs abbigliamento sostenibile — possiamo permetterci di essere etici?",
                "sideA": "Fast fashion",
                "sideB": "Sostenibile",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Creatività dell'IA vs arte umana — le macchine possono davvero creare arte?",
                "sideA": "Creatività IA",
                "sideB": "Arte umana",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Esplorazione spaziale vs esplorazione degli abissi — dove dovremmo concentrare le nostre risorse?",
                "sideA": "Spazio",
                "sideB": "Abissi",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Privacy digitale vs sicurezza nazionale — la sorveglianza totale è mai giustificata?",
                "sideA": "Privacy",
                "sideB": "Sicurezza",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Alimenti geneticamente modificati vs agricoltura biologica — come dovremmo nutrire il mondo?",
                "sideA": "OGM",
                "sideB": "Biologico",
                "level": "advanced",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reddito di base universale vs programmi di garanzia del lavoro — qual è la migliore rete di sicurezza sociale?",
                "sideA": "Reddito universale",
                "sideB": "Garanzia lavoro",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rosa vs Arancione — quale colore è più carino?",
                "sideA": "Rosa",
                "sideB": "Arancione",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Numero 1 vs numero 10 — quale numero è migliore?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sedia vs divano — quale è più comodo?",
                "sideA": "Sedia",
                "sideB": "Divano",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Borsa vs scatola — quale è più utile?",
                "sideA": "Borsa",
                "sideB": "Scatola",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Leone vs elefante — quale animale è migliore?",
                "sideA": "Leone",
                "sideB": "Elefante",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cioccolato vs caramelle — quale è meglio?",
                "sideA": "Cioccolato",
                "sideB": "Caramelle",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucchiaio vs forchetta — quale è meglio?",
                "sideA": "Cucchiaio",
                "sideB": "Forchetta",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cappello vs scarpe — quale è più importante?",
                "sideA": "Cappello",
                "sideB": "Scarpe",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sole vs luna — quale è meglio?",
                "sideA": "Sole",
                "sideB": "Luna",
                "level": "starter",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Calze vs senza calze — cosa è meglio?",
                "sideA": "Calze",
                "sideB": "Senza calze",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere con i nonni vs non vivere con loro — cosa è più piacevole?",
                "sideA": "Con i nonni",
                "sideB": "Senza i nonni",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucina della mamma vs cucina del papà — quale è migliore?",
                "sideA": "Mamma",
                "sideB": "Papà",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matematica vs arte — quale materia è più divertente?",
                "sideA": "Matematica",
                "sideB": "Arte",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scrivere su carta vs scrivere su un tablet — cosa è meglio?",
                "sideA": "Carta",
                "sideB": "Tablet",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pasta — cosa è più buono?",
                "sideA": "Pizza",
                "sideB": "Pasta",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gelato vs torta — quale è il dessert migliore?",
                "sideA": "Gelato",
                "sideB": "Torta",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorni brevi vs giorni lunghi — cosa è meglio?",
                "sideA": "Giorni brevi",
                "sideB": "Giorni lunghi",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giorno al parco vs giorno in spiaggia — cosa è meglio?",
                "sideA": "Parco",
                "sideB": "Spiaggia",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aereo vs treno — cosa è più divertente?",
                "sideA": "Aereo",
                "sideB": "Treno",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Doccia al mattino vs doccia alla sera — cosa è meglio?",
                "sideA": "Mattino",
                "sideB": "Sera",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatti che buttano giù le cose vs cani che masticano le scarpe — quale animale è più fastidioso?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare la pizza con la forchetta vs con le mani — cosa è corretto?",
                "sideA": "Forchetta",
                "sideB": "Mani",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire con le calze vs senza calze — cosa è meglio?",
                "sideA": "Con le calze",
                "sideB": "Senza",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Castello di sabbia vs pupazzo di neve — cosa è più divertente da costruire?",
                "sideA": "Castello di sabbia",
                "sideB": "Pupazzo di neve",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Molti esami vs pochissimi esami — cosa è più giusto?",
                "sideA": "Molti esami",
                "sideB": "Pochissimi esami",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Iniziare la scuola a 7 anni vs iniziare a 5 anni — cosa è meglio per i bambini?",
                "sideA": "A 7 anni",
                "sideB": "A 5 anni",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mangiare lentamente vs mangiare velocemente — cosa è meglio per te?",
                "sideA": "Lentamente",
                "sideB": "Velocemente",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare a casa vs ordinare online — cosa è meglio?",
                "sideA": "Cucinare a casa",
                "sideB": "Ordinare online",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cucinare vs fare dolci — cosa è più divertente come hobby?",
                "sideA": "Cucinare",
                "sideB": "Pasticceria",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Andare in palestra vs allenarsi all'aperto — cosa è meglio?",
                "sideA": "Palestra",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Foto sul telefono vs foto stampate — cosa è meglio?",
                "sideA": "Sul telefono",
                "sideB": "Stampate",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs schermo del computer — cosa è meglio per guardare film?",
                "sideA": "Smart TV",
                "sideB": "Computer",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Paese caldo vs paese freddo — quale è la migliore destinazione per le vacanze?",
                "sideA": "Paese caldo",
                "sideB": "Paese freddo",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare regali vs ricevere regali — cosa preferisci?",
                "sideA": "Fare regali",
                "sideB": "Ricevere regali",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare al chiuso vs lavorare all'aperto — cosa è meglio?",
                "sideA": "Al chiuso",
                "sideB": "All'aperto",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ananas sulla pizza vs niente ananas — cosa è corretto?",
                "sideA": "Ananas",
                "sideB": "Niente ananas",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mettere prima il latte vs mettere prima il tè — cosa è meglio?",
                "sideA": "Prima il latte",
                "sideB": "Prima il tè",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lunedì vs Venerdì — quale giorno è effettivamente peggiore?",
                "sideA": "Lunedì",
                "sideB": "Venerdì",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Svegliarsi cinque minuti prima della sveglia vs dormire fino alla sveglia — cosa è più fastidioso?",
                "sideA": "Prima della sveglia",
                "sideB": "Fino alla sveglia",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gatti vs cani — quale animale è segretamente il capo della casa?",
                "sideA": "Gatti",
                "sideB": "Cani",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere troppo caldo vs avere troppo freddo — cosa è peggio?",
                "sideA": "Troppo caldo",
                "sideB": "Troppo freddo",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare dai propri errori vs imparare dai propri successi — cosa insegna di più?",
                "sideA": "Errori",
                "sideB": "Successi",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablet in classe vs quaderni tradizionali — cosa aiuta di più gli studenti?",
                "sideA": "Tablet",
                "sideB": "Quaderni",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Essere sempre rintracciabili vs avere tempo libero digitale — cosa è meglio?",
                "sideA": "Sempre rintracciabili",
                "sideB": "Tempo libero",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Riutilizzare le cose vs riciclare — cosa è più efficace?",
                "sideA": "Riutilizzare",
                "sideB": "Riciclare",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Una sola carriera per tutta la vita vs cambiare spesso carriera — cosa è meglio?",
                "sideA": "Una carriera",
                "sideB": "Cambiare spesso",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire vs fare esercizio — cosa ha un impatto maggiore sulla tua salute?",
                "sideA": "Dormire",
                "sideB": "Esercizio",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musica pop vs musica classica — quale ha un impatto culturale maggiore?",
                "sideA": "Pop",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sapere come finisce qualcosa vs essere sorpresi — cosa è meglio?",
                "sideA": "Sapere",
                "sideB": "Sorpresi",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rispondere immediatamente ai messaggi vs prendersi il proprio tempo — cosa è più rispettoso?",
                "sideA": "Immediatamente",
                "sideB": "Prendersi tempo",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching vs guardare un episodio a settimana — quale è il modo giusto?",
                "sideA": "Binge-watching",
                "sideB": "Settimanale",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Posto finestrino vs posto corridoio — quale è oggettivamente migliore?",
                "sideA": "Finestrino",
                "sideB": "Corridoio",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saltare la palestra una volta vs andare e fare una brutta sessione — cosa è peggio?",
                "sideA": "Saltare",
                "sideB": "Brutta sessione",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parlare con se stessi vs parlare con il proprio animale — cosa è più ragionevole?",
                "sideA": "Con se stessi",
                "sideB": "Con l'animale",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Il mio ricordo d'infanzia preferito",
                "level": "starter",
                "theme": "people_society"
            },
            {
                "topic": "L'ultima vacanza che ho fatto",
                "level": "elementary",
                "theme": "travel_places"
            },
            {
                "topic": "Una persona che mi ha ispirato",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "topic": "Il futuro del mondo tra 50 anni",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "topic": "Il ruolo dell'arte nella società moderna",
                "level": "advanced",
                "theme": "leisure_hobbies"
            },
            {
                "topic": "La complexité della coscienza umana",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "topic": "L'importance della consapevolezza sulla salute mentale",
                "level": "intermediate",
                "theme": "health_body"
            },
            {
                "topic": "Il lavoro dei miei sogni e perché",
                "level": "starter",
                "theme": "education_work"
            },
            {
                "topic": "L'impatto del cambiamento climatico sulle comunità locali",
                "level": "upper-intermediate",
                "theme": "nature_environment"
            },
            {
                "topic": "Intelligenza Artificiale: Strumento o minaccia ?",
                "level": "advanced",
                "theme": "science_technology"
            }
        ]
    },
    "ru": {
        "opinionArena": [
            {
                "text": "Является ли завтрак самым важным приемом пищи?",
                "level": "starter",
                "theme": "food_drinks"
            },
            {
                "text": "Собаки лучше кошек в качестве питомцев?",
                "level": "starter",
                "theme": "leisure_hobbies"
            },
            {
                "text": "Должны ли у детей быть мобильные телефоны?",
                "level": "elementary",
                "theme": "science_technology"
            },
            {
                "text": "Где лучше жить: в доме или в квартире?",
                "level": "elementary",
                "theme": "daily_life"
            },
            {
                "text": "Можем ли мы прожить без интернета неделю?",
                "level": "intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Нужно ли каждому учить второй язык?",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "Разрушают ли социальные сети наши навыки общения?",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Должен ли общественный транспорт быть бесплатным?",
                "level": "upper-intermediate",
                "theme": "travel_places"
            },
            {
                "text": "Генная инженерия: прогресс или опасность?",
                "level": "advanced",
                "theme": "science_technology"
            },
            {
                "text": "Является ли безусловный базовый доход решением проблемы автоматизации?",
                "level": "advanced",
                "theme": "people_society"
            },
            {
                "text": "Существует ли свобода воли на самом деле или это иллюзия?",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "text": "Этика колонизации других планет.",
                "level": "proficiency",
                "theme": "science_technology"
            }
        ],
        "criticsCorner": [
            {
                "text": "Я мыслю, следовательно, я существую.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "people_society"
            },
            {
                "text": "Единственная константа — это перемены.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "people_society"
            }
        ],
        "debates": [
            {"topic": "Кофе или чай — какой напиток лучше утром?", "sideA": "Кофе", "sideB": "Чай", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Ресторан или домашняя еда — что лучше?", "sideA": "Ресторан", "sideB": "Домашняя еда", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Завтрак или без завтрака — что лучше для вас?", "sideA": "Завтрак", "sideB": "Без завтрака", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Вода или сок — что полезнее?", "sideA": "Вода", "sideB": "Сок", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Мясо или овощи — что важнее в еде?", "sideA": "Мясо", "sideB": "Овощи", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Дом или квартира — где лучше жить?", "sideA": "Дом", "sideB": "Квартира", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Город или деревня — где лучше жить?", "sideA": "Город", "sideB": "Деревня", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Наличные или карта — чем лучше платить?", "sideA": "Наличные", "sideB": "Карта", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Копить деньги или тратить их — что лучше?", "sideA": "Копить", "sideB": "Тратить", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Аренда или покупка — что лучше?", "sideA": "Аренда", "sideB": "Покупка", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Работа утром или работа вечером — что лучше?", "sideA": "Утром", "sideB": "Вечером", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Машина или автобус — на чем лучше ездить на работу?", "sideA": "Машина", "sideB": "Автобус", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Ходить пешком или водить машину — что лучше в городе?", "sideA": "Пешком", "sideB": "Машина", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Офис или дом — где лучше работать?", "sideA": "Офис", "sideB": "Дом", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Жаворонок или сова — что лучше?", "sideA": "Жаворонок", "sideB": "Сова", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Лето или зима — какое время года лучше?", "sideA": "Лето", "sideB": "Зима", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Короткий отпуск или длинный отпуск — что лучше?", "sideA": "Короткий", "sideB": "Длинный", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Телефонный звонок или сообщение — что лучше?", "sideA": "Звонок", "sideB": "Сообщение", "level": "starter", "theme": "science_technology", "ideasA": [], "ideasB": []},
            {"topic": "Душ утром или душ вечером — как правильно?", "sideA": "Утром", "sideB": "Вечером", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Понедельник или пятница — какой день лучше?", "sideA": "Понедельник", "sideB": "Пятница", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Слишком жарко или слишком холодно — что хуже?", "sideA": "Жарко", "sideB": "Холодно", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Место у окна или у прохода — что лучше в самолете?", "sideA": "У окна", "sideB": "У прохода", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Полный рабочий день или частичная занятость — что лучше?", "sideA": "Полный день", "sideB": "Частичная", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Работа в офисе или работа из дома — что вы предпочитаете?", "sideA": "Офис", "sideB": "Дом", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Работа, которую вы любите, или работа, которая хорошо оплачивается — что важнее?", "sideA": "Любимая работа", "sideB": "Хорошая оплата", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Работа с другими людьми или работа в одиночку — что лучше?", "sideA": "С людьми", "sideB": "В одиночку", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Короткий путь на работу или длинный — что более приемлемо?", "sideA": "Короткий", "sideB": "Длинный", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Жить одному или жить с партнером — что лучше?", "sideA": "Одному", "sideB": "С партнером", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Большой город или маленький городок — где лучше жить взрослому человеку?", "sideA": "Большой город", "sideB": "Маленький городок", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Готовить дома или есть вне дома — что лучше для повседневной жизни?", "sideA": "Дома", "sideB": "Вне дома", "level": "elementary", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Иметь детей или не иметь — какая жизнь лучше?", "sideA": "С детьми", "sideB": "Без детей", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Снимать квартиру или покупать дом — что лучше для молодых людей?", "sideA": "Снимать", "sideB": "Покупать", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Физкультура каждый день или отдых — что лучше для здоровья?", "sideA": "Упражнения", "sideB": "Отдых", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Идти к врачу или ждать — что лучше, когда вы чувствуете себя больным?", "sideA": "Врач", "sideB": "Ждать", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Спать по восемь часов или меньше — что более реально для взрослых?", "sideA": "8 часов", "sideB": "Меньше", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Ходить на работу пешком или ездить на машине — что лучше для здоровья?", "sideA": "Пешком", "sideB": "Машина", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Онлайн-покупки или покупки в магазине — что вы предпочитаете?", "sideA": "Онлайн", "sideB": "Магазин", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Копить на будущее или наслаждаться деньгами сейчас — что мудрее?", "sideA": "Копить", "sideB": "Наслаждаться сейчас", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Дорогие вещи или дешевые — что выгоднее?", "sideA": "Дорогие", "sideB": "Дешевые", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Покупка нового или покупка подержанного — что лучше?", "sideA": "Новое", "sideB": "Подержанное", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Смотреть телевизор дома или гулять — какой вечер лучше?", "sideA": "ТВ", "sideB": "Гулять", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Отпуск с семьей или отпуск с друзьями — что лучше?", "sideA": "С семьей", "sideB": "С друзьями", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Оставаться в своей стране или путешествовать за границу — какой отдых лучше?", "sideA": "Своя страна", "sideB": "За границу", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Спорт или чтение — какое хобби лучше для взрослых?", "sideA": "Спорт", "sideB": "Чтение", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Часто видеться с друзьями или проводить время в одиночестве — что важнее?", "sideA": "Друзья", "sideB": "Одиночество", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Отвечать на электронные письма сразу или оставлять их на потом — что более профессионально?", "sideA": "Сразу", "sideB": "Потом", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Мыть посуду сразу или оставить до завтра — что лучше?", "sideA": "Сразу", "sideB": "До завтра", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Всегда приходить заранее или всегда опаздывать на пять минут — что хуже на работе?", "sideA": "Заранее", "sideB": "Опоздание", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Очень организованный стол или беспорядок на столе — какой человек более продуктивен?", "sideA": "Организованный", "sideB": "Беспорядок", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Разговоры о работе за ужином или никаких разговоров о работе — какое правило лучше?", "sideA": "О работе", "sideB": "Без работы", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},

            {
                "topic": "Язык: конститутивный или экспрессивный",
                "sideA": "Конститутивный",
                "sideB": "Экспрессивный",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Формирует реальность",
                    "Ограничивает мысль"
                ],
                "ideasB": [
                    "Отражает реальность",
                    "Инструмент для мысли"
                ]
            },
            {
                "topic": "Точность против двусмысленности",
                "sideA": "Точность",
                "sideB": "Двусмысленность",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Ясность",
                    "Эффективность"
                ],
                "ideasB": [
                    "Нюансы",
                    "Дипломатия"
                ]
            },
            {
                "topic": "Риторика против логики",
                "sideA": "Риторика",
                "sideB": "Логика",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Сила убеждения",
                    "Эмоциональный призыв"
                ],
                "ideasB": [
                    "Объективная истина",
                    "Структурная обоснованность"
                ]
            },
            {
                "topic": "Буквальный смысл против интерпретации",
                "sideA": "Буквальный",
                "sideB": "Интерпретация",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Намерение автора",
                    "Стабильность"
                ],
                "ideasB": [
                    "Реакция читателя",
                    "Развивающийся контекст"
                ]
            },
            {
                "topic": "Научный консенсус против эпистемического смирения",
                "sideA": "Консенсус",
                "sideB": "Смирение",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Установленные знания",
                    "Авторитет экспертов"
                ],
                "ideasB": [
                    "Открытость к исправлениям",
                    "Признание ограничений"
                ]
            },
            {
                "topic": "Экспертиза против личного опыта",
                "sideA": "Экспертиза",
                "sideB": "Личный опыт",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Научная строгость",
                    "Объективные данные"
                ],
                "ideasB": [
                    "Подлинная правда",
                    "Контекстуальное понимание"
                ]
            },
            {
                "topic": "Сомнение: добродетель против паралича",
                "sideA": "Добродетель",
                "sideB": "Паралич",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Критическое мышление",
                    "Скептицизм"
                ],
                "ideasB": [
                    "Нерешительность",
                    "Отсутствие действий"
                ]
            },
            {
                "topic": "Повествование против данных",
                "sideA": "Повествование",
                "sideB": "Данные",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Эмоциональное воздействие",
                    "Человеческая связь"
                ],
                "ideasB": [
                    "Статистическая истина",
                    "Масштабируемость"
                ]
            },
            {
                "topic": "Легитимность: согласие против результата",
                "sideA": "Согласие",
                "sideB": "Результат",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Демократический процесс",
                    "Моральное право"
                ],
                "ideasB": [
                    "Эффективность",
                    "Эффективное управление"
                ]
            },
            {
                "topic": "Государство: гарант свободы или угроза",
                "sideA": "Гарант",
                "sideB": "Угроза",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Верховенство закона",
                    "Защита прав"
                ],
                "ideasB": [
                    "Злоуποтребление властью",
                    "Слежка"
                ]
            },
            {
                "topic": "Политика прав против политики ответственности",
                "sideA": "Права",
                "sideB": "Обязанности",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Индивидуальная свобода",
                    "Юридическая защита"
                ],
                "ideasB": [
                    "Коллективный долг",
                    "Социальная сплоченность"
                ]
            },
            {
                "topic": "Нейтралитет против ценностно-ориентированного управления",
                "sideA": "Нейтралитет",
                "sideB": "Ценностная",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Беспристрастность",
                    "Справедливость"
                ],
                "ideasB": [
                    "Моральное направление",
                    "Социальная цель"
                ]
            },
            {
                "topic": "Намерение против восприятия в искусстве",
                "sideA": "Намерение",
                "sideB": "Восприятие",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Видение автора",
                    "Оригинальный контекст"
                ],
                "ideasB": [
                    "Смысл для аудитории",
                    "Культурное влияние"
                ]
            },
            {
                "topic": "Эстетическая ценность против моральной",
                "sideA": "Эстетическая",
                "sideB": "Моральная",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Искусство ради искусства",
                    "Чистая красота"
                ],
                "ideasB": [
                    "Социальная полезность",
                    "Этическое воздействие"
                ]
            },
            {
                "topic": "Авангард против доступности",
                "sideA": "Авангард",
                "sideB": "Доступность",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Расширение границ",
                    "Интеллектуальный вызов"
                ],
                "ideasB": [
                    "Инклюзивность",
                    "Демократическое искусство"
                ]
            },
            {
                "topic": "Институциональное искусство против аутсайдерского",
                "sideA": "Институциональное",
                "sideB": "Аутсайдерское",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Историческое сохранение",
                    "Стандарты"
                ],
                "ideasB": [
                    "Сырая подлинность",
                    "Антисистемность"
                ]
            },
            {
                "topic": "Принцип предосторожности против проактивности",
                "sideA": "Предосторожность",
                "sideB": "Проактивность",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Избегание рисков",
                    "Безопасность прежде всего"
                ],
                "ideasB": [
                    "Инновации",
                    "Принятие перемен"
                ]
            },
            {
                "topic": "Научный прогресс: благо сам по себе или нейтрален",
                "sideA": "Благо сам по себе",
                "sideB": "Нейтрален",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Ценности Просвещения",
                    "Решение проблем"
                ],
                "ideasB": [
                    "Проблема двойного назначения",
                    "Ответственность человека"
                ]
            },
            {
                "topic": "Экзистенциальный риск против текущих страданий",
                "sideA": "Экзистенциальный риск",
                "sideB": "Текущие страдания",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Долгосрочное выживание",
                    "Будущие поколения"
                ],
                "ideasB": [
                    "Немедленная помощь",
                    "Острая бедность"
                ]
            },
            {
                "topic": "Человеческое сознание против сильного ИИ",
                "sideA": "Сознание",
                "sideB": "Сильный ИИ",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Биологическая уникальность",
                    "Субъективный опыт"
                ],
                "ideasB": [
                    "Вычислительная мощность",
                    "Алгоритмическая логика"
                ]
            },
            {
                "topic": "Прогресс: реальность против иллюзии",
                "sideA": "Реальность",
                "sideB": "Иλлюзия",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Технологический прогресс",
                    "Улучшение качества жизни"
                ],
                "ideasB": [
                    "Цикличность истории",
                    "Новые проблемы"
                ]
            },
            {
                "topic": "Либеральный порядок против многополярного мира",
                "sideA": "Либеральный порядок",
                "sideB": "Многополярность",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Универсальные ценности",
                    "Глобальная стабильность"
                ],
                "ideasB": [
                    "Разнообразие сил",
                    "Культурный суверенитет"
                ]
            },
            {
                "topic": "Память против забвения",
                "sideA": "Память",
                "sideB": "Забвение",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Уроки истории",
                    "Идентичность"
                ],
                "ideasB": [
                    "Движение вперед",
                    "Преодоление травм"
                ]
            },
            {
                "topic": "Трагедия общин против сотрудничества",
                "sideA": "Трагедия",
                "sideB": "Сотрудничество",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Личный интерес",
                    "Истощение ресурсов"
                ],
                "ideasB": [
                    "Взаимная выгода",
                    "Коллективное управление"
                ]
            },
            {
                "topic": "Красный против синего — какой цвет лучше?",
                "sideA": "Красный",
                "sideB": "Синий",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Желтый против зеленого — какой цвет более радостный?",
                "sideA": "Желтый",
                "sideB": "Зеленый",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Черный против белого — какой цвет вы предпочитаете?",
                "sideA": "Черный",
                "sideB": "Белый",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Розовый против фиолетового — какой цвет приятнее?",
                "sideA": "Розовый",
                "sideB": "Фиолетовый",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Круг против квадрата — какая фигура полезнее?",
                "sideA": "Круг",
                "sideB": "Квадрат",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большие против маленьких чисел — какие веселее?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Треугольник против прямоугольника — какая фигура лучше?",
                "sideA": "Треугольник",
                "sideB": "Прямоугольник",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мяч против куклы — какая игрушка лучше?",
                "sideA": "Мяч",
                "sideB": "Кукла",
                "level": "starter",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Карандаш против ручки — чем лучше писать?",
                "sideA": "Карандаш",
                "sideB": "Ручка",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Книга против картинки — по чему лучше учиться?",
                "sideA": "Книга",
                "sideB": "Картинка",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стул против пола — на чем лучше сидеть?",
                "sideA": "Стул",
                "sideB": "Пол",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошка против собаки — какое животное лучше?",
                "sideA": "Кошка",
                "sideB": "Собака",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рыба против птицы — кто лучший питомец?",
                "sideA": "Рыба",
                "sideB": "Птица",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большие против маленьких животных — какие милее?",
                "sideA": "Большие",
                "sideB": "Маленькие",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кролик против хомяка — кто милее?",
                "sideA": "Кролик",
                "sideB": "Хомяк",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вода против сока — что лучше пить?",
                "sideA": "Вода",
                "sideB": "Сок",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Яблоко против банана — какой фрукт лучше?",
                "sideA": "Яблоко",
                "sideB": "Банан",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Хлеб против риса — что лучше есть?",
                "sideA": "Хлеб",
                "sideB": "Рис",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Молоко против воды — что вы предпочитаете?",
                "sideA": "Молоко",
                "sideB": "Вода",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с семьей против одного — что лучше?",
                "sideA": "С семьей",
                "sideB": "Один",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь брата против сестры — что лучше?",
                "sideA": "Брат",
                "sideB": "Сестра",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Большая против маленькой семьи — какая лучше?",
                "sideA": "Большая",
                "sideB": "Маленькая",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Старший против младшего ребенка — что лучше?",
                "sideA": "Старший",
                "sideB": "Младший",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Утренняя против дневной школы — что лучше?",
                "sideA": "Утро",
                "sideB": "День",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Чтение против математики — что веселее?",
                "sideA": "Чтение",
                "sideB": "Математика",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школа против обучения дома — что лучше?",
                "sideA": "Школа",
                "sideB": "Дом",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашка против ее отсутствия — что больше помогает?",
                "sideA": "Домашка",
                "sideB": "Нет",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один против работы в паре — что вы предпочитаете?",
                "sideA": "Один",
                "sideB": "Пара",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Бумага против компьютера — что лучше?",
                "sideA": "Бумага",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Завтрак против ужина — какой прием пищи важнее?",
                "sideA": "Завтрак",
                "sideB": "Ужин",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Горячая против холодной еды — что лучше?",
                "sideA": "Горячая",
                "sideB": "Холодная",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дом против ресторана — что лучше?",
                "sideA": "Дом",
                "sideB": "Ресторан",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сладкое против соленого — что вы предпочитаете?",
                "sideA": "Сладкое",
                "sideB": "Соленое",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить против покупать еду — что приятнее?",
                "sideA": "Готовить",
                "sideB": "Покупать",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рано против поздно вставать — что лучше?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Утро против вечера — какое время суток приятнее?",
                "sideA": "Утро",
                "sideB": "Вечер",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Будни против выходных — что вы предпочитаете?",
                "sideA": "Будни",
                "sideB": "Выходные",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Лето против зимы — какое время года лучше?",
                "sideA": "Лето",
                "sideB": "Зима",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рано против поздно ложиться — что здоровее?",
                "sideA": "Рано",
                "sideB": "Поздно",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дом против квартиры — что лучше?",
                "sideA": "Дом",
                "sideB": "Квартира",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Город против деревни — где лучше жить?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спальня против гостиной — какая комната вам больше нравится?",
                "sideA": "Спальня",
                "sideB": "Гостиная",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Игры дома против улицы — какие веселее?",
                "sideA": "Дома",
                "sideB": "Улица",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "ТВ против книги — что лучше?",
                "sideA": "ТВ",
                "sideB": "Книга",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спорт против видеоигр — что веселее?",
                "sideA": "Спорт",
                "sideB": "Видеоигры",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Рисование против пения — какое хобби лучше?",
                "sideA": "Рисование",
                "sideB": "Пение",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Играть одному против друзей — что веселее?",
                "sideA": "Один",
                "sideB": "Друзья",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Плавание против бега — какой спорт вы предпочитаете?",
                "sideA": "Плавание",
                "sideB": "Бег",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Музыка против спорта — какое хобби лучше?",
                "sideA": "Музыка",
                "sideB": "Спорт",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашние против диких животных — кто интереснее?",
                "sideA": "Домашние",
                "sideB": "Дикие",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дождь против солнца — какую погоду вы предпочитаете?",
                "sideA": "Дождь",
                "sideB": "Солнце",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Море против гор — что лучше для отпуска?",
                "sideA": "Море",
                "sideB": "Горы",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Цветы против деревьев — что красивее?",
                "sideA": "Цветы",
                "sideB": "Деревья",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Машина против автобуса — что лучше?",
                "sideA": "Машина",
                "sideB": "Автобус",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пешком против велосипеда — как лучше передвигаться?",
                "sideA": "Пешком",
                "sideB": "Велосипед",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткий против долгого отпуска — что лучше?",
                "sideA": "Короткий",
                "sideB": "Долгий",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один против поездки с семьей — что веселее?",
                "sideA": "Один",
                "sideB": "Семья",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-шопинг против покупок в магазине",
                "sideA": "Онлайн",
                "sideB": "Лично",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [
                    "Удобство",
                    "Лучшие цены"
                ],
                "ideasB": [
                    "Примерить вещи",
                    "Мгновенное удовлетворение"
                ]
            },
            {
                "topic": "Бумажные книги против электронных",
                "sideA": "Бумажные",
                "sideB": "Электронные",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Запах/Ощущение",
                    "Предмет коллекционирования"
                ],
                "ideasB": [
                    "Портативность",
                    "Экономия места"
                ]
            },
            {
                "topic": "Работа из дома против работы в офисе",
                "sideA": "Дом",
                "sideB": "Офис",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [
                    "Нет поездок",
                    "Гибкость"
                ],
                "ideasB": [
                    "Общение",
                    "Лучшая концентрация"
                ]
            },
            {
                "topic": "Электромобили против бензиновых авто",
                "sideA": "Электро",
                "sideB": "Бензин",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [
                    "Экология",
                    "Тишина"
                ],
                "ideasB": [
                    "Запас хода",
                    "Скорость зарядки"
                ]
            },
            {
                "topic": "Учиться утром или учиться вечером — когда лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Строгие учителя или добрые учителя — кто больше помогает ученикам?",
                "sideA": "Строгие",
                "sideB": "Добрые",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Учиться по учебнику или учиться по видео — что эффективнее?",
                "sideA": "Учебник",
                "sideB": "Видео",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткие уроки или длинные уроки — какие помогают учиться лучше?",
                "sideA": "Короткие",
                "sideB": "Длинные",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Групповые проекты или индивидуальные задания — что вы предпочитаете?",
                "sideA": "Группа",
                "sideB": "Индивидуально",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школьная форма или повседневная одежда в школе — что лучше?",
                "sideA": "Форма",
                "sideB": "Повседневная",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Домашняя еда или фастфуд — что лучше?",
                "sideA": "Домашняя",
                "sideB": "Фастфуд",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Три больших приема пищи или много маленьких перекусов — что здоровее?",
                "sideA": "Три раза",
                "sideB": "Перекусы",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вегетарианская еда или мясо — какая диета лучше?",
                "sideA": "Вегетарианская",
                "sideB": "Мясо",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пить чай или пить кофе — что лучше?",
                "sideA": "Чай",
                "sideB": "Кофе",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть в одиночестве или есть с другими — что вы предпочитаете?",
                "sideA": "Один",
                "sideB": "С другими",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Заниматься командным спортом или индивидуальным — что лучше?",
                "sideA": "Командный",
                "sideB": "Индивидуальный",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проводить свободное время дома или на улице — что лучше?",
                "sideA": "Дома",
                "sideB": "На улице",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кино или театр — куда лучше сходить вечером?",
                "sideA": "Кино",
                "sideB": "Театр",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Слушать музыку или играть на инструменте — что приятнее?",
                "sideA": "Слушать",
                "sideB": "Играть",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Видеоигры или настольные игры — что веселее?",
                "sideA": "Видеоигры",
                "sideB": "Настольные",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить по магазинам или оставаться дома — как лучше провести выходные?",
                "sideA": "Магазины",
                "sideB": "Дома",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мобильный телефон или компьютер — что полезнее в повседневной жизни?",
                "sideA": "Телефон",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отправить сообщение или позвонить по телефону — что лучше?",
                "sideA": "Сообщение",
                "sideB": "Звонок",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Электронная книга или бумажная — что вы предпочитаете читать?",
                "sideA": "Э-книга",
                "sideB": "Бумажная",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Фотографировать на телефон или на камеру — что дает лучший результат?",
                "sideA": "Телефон",
                "sideB": "Камера",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Отпуск на пляже или отпуск в горах — что лучше?",
                "sideA": "Пляж",
                "sideB": "Горы",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Путешествовать на поезде или на самолете — что лучше?",
                "sideA": "Поезд",
                "sideB": "Самолет",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Посетить знаменитый город или маленькую деревню — что интереснее?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Остановиться в отеле или в местной семье — что вы предпочитаете?",
                "sideA": "Отель",
                "sideB": "В семье",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Путешествовать за границу или изучать свою страну — что более стоящее?",
                "sideA": "За границу",
                "sideB": "Своя страна",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Иметь много друзей или несколько близких друзей — что лучше?",
                "sideA": "Много друзей",
                "sideB": "Близкие друзья",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Встречаться с друзьями лично или общаться онлайн — что приносит больше удовольствия?",
                "sideA": "Лично",
                "sideB": "Онлайн",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с родителями или в студенческой квартире — что лучше для молодежи?",
                "sideA": "С родителями",
                "sideB": "Студ. квартира",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Праздновать день рождения дома или куда-то сходить — что приятнее?",
                "sideA": "Дома",
                "sideB": "Вне дома",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Копить деньги или тратить их — что мудрее?",
                "sideA": "Копить",
                "sideB": "Тратить",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работать неполный рабочий день во время учебы или сосредоточиться только на школе — что лучше?",
                "sideA": "Подработка",
                "sideB": "Только учеба",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Зарабатывать много денег или иметь свободное время — что важнее?",
                "sideA": "Деньги",
                "sideB": "Свободное время",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-обучение или обучение в классе — что эффективнее?",
                "sideA": "Онлайн",
                "sideB": "В классе",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Запоминание фактов или умение находить информацию — какой навык важнее?",
                "sideA": "Факты",
                "sideB": "Поиск инфо",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Университетское образование или профессиональное обучение — какой путь лучше?",
                "sideA": "Университет",
                "sideB": "Колледж/ПТУ",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Экзамены или непрерывное оценивание — какой способ оценки студентов более справедлив?",
                "sideA": "Экзамены",
                "sideB": "Оценки за год",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Изучение иностранного языка в школе или жизнь за границей — что эффективнее?",
                "sideA": "Школа",
                "sideB": "За границей",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Школы с раздельным обучением или смешанные школы — какие лучше для учеников?",
                "sideA": "Раздельные",
                "sideB": "Смешанные",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Социальные сети или личное общение — что лучше для поддержания связи?",
                "sideA": "Соцсети",
                "sideB": "Лично",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стриминговые сервисы или традиционное ТВ — что лучше?",
                "sideA": "Стриминг",
                "sideB": "ТВ",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа из дома или работа в офисе — что продуктивнее?",
                "sideA": "Дом",
                "sideB": "Офис",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Чтение новостей онлайн или чтение газеты — что надежнее?",
                "sideA": "Новости онлайн",
                "sideB": "Газета",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проводить время в соцсетях или проводить время на природе — что лучше для вашего психического здоровья?",
                "sideA": "Соцсети",
                "sideB": "Природа",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пользоваться общественным транспортом или водить машину — что лучше для общества?",
                "sideA": "Общ. транспорт",
                "sideB": "Машина",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Покупка подержанной одежды или покупка новой — какая привычка лучше?",
                "sideA": "Б/у",
                "sideB": "Новое",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жизнь в городе или жизнь в деревне — что больше подходит молодежи?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Вегетарианство или употребление мяса — что лучше для планеты?",
                "sideA": "Вегетарианство",
                "sideB": "Мясо",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Индивидуальные изменения образа жизни или действия правительства — что дает больше для экологии?",
                "sideA": "Лично",
                "sideB": "Государство",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стабильная работа или творческая карьера — какой жизненный выбор лучше?",
                "sideA": "Стабильность",
                "sideB": "Творчество",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Открытие собственного бизнеса или работа на компанию — что лучше?",
                "sideA": "Свой бизнес",
                "sideB": "Компания",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Высокая зарплата или удовлетворение от работы — что важнее в работе?",
                "sideA": "Зарплата",
                "sideB": "Удовлетворение",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работать сверхурочно или иметь баланс между работой и личной жизнью — что ведет к большему успеху?",
                "sideA": "Много работы",
                "sideB": "Баланс",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Выбор карьеры по призванию или на основе перспектив трудоустройства — что мудрее?",
                "sideA": "Призвание",
                "sideB": "Перспективы",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить как индивидуальность или ставить интересы общества на первое место — что важнее?",
                "sideA": "Индивид",
                "sideB": "Общество",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Традиционные ценности или современные ценности — какие важнее сохранить?",
                "sideA": "Традиции",
                "sideB": "Модерн",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Волонтерство или пожертвование денег на благотворительность — что помогает больше?",
                "sideA": "Волонтерство",
                "sideB": "Деньги",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Слава или возможность тихо менять мир к лучшему — какая цель в жизни лучше?",
                "sideA": "Слава",
                "sideB": "Тихое влияние",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Следование правилам или умение думать самостоятельно — что важнее?",
                "sideA": "Правила",
                "sideB": "Свои мысли",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Физическое здоровье или психическое здоровье — что должно быть приоритетом?",
                "sideA": "Физическое",
                "sideB": "Психическое",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Профилактика или лечение — какой подход к здравоохранению лучше?",
                "sideA": "Профилактика",
                "sideB": "Лечение",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Соревновательный спорт или упражнения для удовольствия — что лучше для вас?",
                "sideA": "Спорт",
                "sideB": "Для себя",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Частное здравоохранение или государственное — какая система справедливее?",
                "sideA": "Частное",
                "sideB": "Государственное",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кино или литература — какая форма искусства сильнее?",
                "sideA": "Кино",
                "sideB": "Литература",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Современное искусство или классическое — что ценнее?",
                "sideA": "Современное",
                "sideB": "Классика",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сохранение старых зданий или строительство новых — что важнее?",
                "sideA": "Сохранение",
                "sideB": "Новые здания",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Местная культура или глобализация — что больше обогащает общество?",
                "sideA": "Местная",
                "sideB": "Глобализация",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Социальные сети против живого общения — что лучше для построения отношений?",
                "sideA": "Соцсети",
                "sideB": "Лично",
                "level": "upper-intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Городская жизнь против сельской жизни — где качество жизни выше?",
                "sideA": "Город",
                "sideB": "Деревня",
                "level": "upper-intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Онлайн-обучение против традиционного класса — за чем будущее образования?",
                "sideA": "Онлайн",
                "sideB": "Класс",
                "level": "upper-intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Возобновляемая энергия против ядерной энергии — какое решение лучше для климата?",
                "sideA": "Возобновляемая",
                "sideB": "Ядерная",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Быстрая мода против устойчивой моды — можем ли мы позволить себе быть этичными?",
                "sideA": "Быстрая мода",
                "sideB": "Устойчивая",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Креативность ИИ против человеческого искусства — могут ли машины по-настоящему творить?",
                "sideA": "Креативность ИИ",
                "sideB": "Искусство",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Исследование космоса против исследования морских глубин — на чем стоит сосредоточить ресурсы?",
                "sideA": "Космос",
                "sideB": "Глубины моря",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Цифровая приватность против национальной безопасности — оправдана ли когда-либо тотальная слежка?",
                "sideA": "Приватность",
                "sideB": "Безопасность",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "ГМО против органического земледелия — как нам прокормить мир?",
                "sideA": "ГМО",
                "sideB": "Органика",
                "level": "advanced",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Безусловный базовый доход против программ гарантированной занятости — какая соцзащита лучше?",
                "sideA": "ББД",
                "sideB": "Гарантия работы",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Розовый против оранжевого — какой цвет приятнее?",
                "sideA": "Розовый",
                "sideB": "Оранжевый",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Число 1 против числа 10 — какое число лучше?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Стул против дивана — что удобнее?",
                "sideA": "Стул",
                "sideB": "Диван",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сумка против коробки — что полезнее?",
                "sideA": "Сумка",
                "sideB": "Коробка",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Лев против слона — какое животное лучше?",
                "sideA": "Лев",
                "sideB": "Слон",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Шоколад против конфет — что лучше?",
                "sideA": "Шоколад",
                "sideB": "Конфеты",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ложка против вилки — что лучше?",
                "sideA": "Ложка",
                "sideB": "Вилка",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Шапка против обуви — что важнее?",
                "sideA": "Шапка",
                "sideB": "Обувь",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Солнце против луны — что лучше?",
                "sideA": "Солнце",
                "sideB": "Луна",
                "level": "starter",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Носки против без носков — что приятнее?",
                "sideA": "Носки",
                "sideB": "Без носков",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жить с бабушкой и дедушкой против жизни без них — что приятнее?",
                "sideA": "С бабушкой и дедушкой",
                "sideB": "Без них",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мамина еда против папиной — что лучше?",
                "sideA": "Мамина",
                "sideB": "Папина",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Математика против рисования — какой предмет веселее?",
                "sideA": "Математика",
                "sideB": "Рисование",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Писать на бумаге против печати на планшете — что лучше?",
                "sideA": "Бумага",
                "sideB": "Планшет",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Пицца против пасты — что вкуснее?",
                "sideA": "Пицца",
                "sideB": "Паста",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мороженое против торта — какой десерт лучше?",
                "sideA": "Мороженое",
                "sideB": "Торт",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Короткие дни против длинных — что лучше?",
                "sideA": "Короткие дни",
                "sideB": "Длинные",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "День в парке против дня на пляже — что лучше?",
                "sideA": "Парк",
                "sideB": "Пляж",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Самолет против поезда — что веселее?",
                "sideA": "Самолет",
                "sideB": "Поезд",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Душ утром против душа вечером — что лучше?",
                "sideA": "Утром",
                "sideB": "Вечером",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошки, сбрасывающие вещи со столов, против собак, грызущих обувь — какой питомец больше раздражает?",
                "sideA": "Кошки",
                "sideB": "Собаки",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть пиццу вилкой против того, чтобы есть ее руками — как правильно?",
                "sideA": "Вилкой",
                "sideB": "Руками",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Спать в носках против того, чтобы спать без носков — что лучше?",
                "sideA": "В носках",
                "sideB": "Без носков",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Замок из песка против снеговика — что веселее строить?",
                "sideA": "Замок из песка",
                "sideB": "Снеговик",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Много экзаменов против очень малого количества — что справедливее?",
                "sideA": "Много экзаменов",
                "sideB": "Мало экзаменов",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Начало школы в 7 лет против начала в 5 лет — что лучше для детей?",
                "sideA": "В 7 лет",
                "sideB": "В 5 лет",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Есть медленно против того, чтобы есть быстро — что лучше для вас?",
                "sideA": "Медленно",
                "sideB": "Быстро",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовить дома против заказа еды онлайн — что лучше?",
                "sideA": "Готовить дома",
                "sideB": "Заказывать онлайн",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Готовка еды против выпечки — что веселее как хобби?",
                "sideA": "Готовка",
                "sideB": "Выпечка",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ходить в спортзал против тренировок на улице — что лучше?",
                "sideA": "Спортзал",
                "sideB": "Улица",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Фото в телефоне против распечатанных фото — что лучше?",
                "sideA": "В телефоне",
                "sideB": "Распечатанные",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Смарт-ТВ против компьютерного монитора — на чем лучше смотреть фильмы?",
                "sideA": "Смарт-ТВ",
                "sideB": "Компьютер",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Жаркая страна против холодной страны — где лучше отдыхать?",
                "sideA": "Жаркая",
                "sideB": "Холодная",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Дарить подарки против того, чтобы их получать — что вы предпочитаете?",
                "sideA": "Дарить",
                "sideB": "Получать",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Работа в помещении против работы на улице — что лучше?",
                "sideA": "В помещении",
                "sideB": "На улице",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ананас в пицце против отсутствия ананаса — как правильно?",
                "sideA": "Ананас",
                "sideB": "Без ананаса",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Наливать сначала молоко против того, чтобы наливать сначала чай — как лучше?",
                "sideA": "Сначала молоко",
                "sideB": "Сначала чай",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Понедельник против пятницы — какой день на самом деле хуже?",
                "sideA": "Понедельник",
                "sideB": "Пятница",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Проснуться за пять минут до будильника против сна до самого будильника — что больше раздражает?",
                "sideA": "До будильника",
                "sideB": "До конца",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Кошки против собак — кто из них на самом деле хозяин в доме?",
                "sideA": "Кошки",
                "sideB": "Собаки",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Когда слишком жарко против того, когда слишком холодно — что хуже?",
                "sideA": "Слишком жарко",
                "sideB": "Слишком холодно",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Учиться на ошибках против того, чтобы учиться на успехе — что учит большему?",
                "sideA": "Ошибки",
                "sideB": "Успех",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Планшеты в классе против традиционных тетрадей — что больше помогает ученикам?",
                "sideA": "Планшеты",
                "sideB": "Тетради",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Быть всегда на связи против наличия цифрового свободного времени — что лучше?",
                "sideA": "Всегда на связи",
                "sideB": "Свободное время",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Повторное использование вещей против переработки — что эффективнее?",
                "sideA": "Повторное использование",
                "sideB": "Переработка",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Одна карьера на всю жизнь против частой смены профессий — что лучше?",
                "sideA": "Одна карьера",
                "sideB": "Частая смена",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Сон против физических упражнений — что больше влияет на ваше здоровье?",
                "sideA": "Сон",
                "sideB": "Упражнения",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Поп-музыка против классической музыки — что имеет большее культурное влияние?",
                "sideA": "Поп-музыка",
                "sideB": "Классика",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Знать, чем все закончится, против того, чтобы быть застигнутым врасплох — что лучше?",
                "sideA": "Знать заранее",
                "sideB": "Сюрприз",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Мгновенный ответ на сообщения против того, чтобы не торопиться — что более уважительно?",
                "sideA": "Мгновенно",
                "sideB": "Не торопясь",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Просмотр сериала запоем против просмотра одной серии в неделю — как правильно?",
                "sideA": "Запоем",
                "sideB": "По серии",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Место у окна против места у прохода в самолете — что объективно лучше?",
                "sideA": "У окна",
                "sideB": "У прохода",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Один раз пропустить спортзал против того, чтобы пойти и плохо потренироваться — что хуже?",
                "sideA": "Пропустить",
                "sideB": "Плохая тренировка",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Разговаривать с самим собой против разговора со своим питомцем — что более разумно?",
                "sideA": "С собой",
                "sideB": "С питомцем",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Мое любимое воспоминание из детства",
                "level": "starter",
                "theme": "people_society"
            },
            {
                "topic": "Мой последний отпуск",
                "level": "elementary",
                "theme": "travel_places"
            },
            {
                "topic": "Человек, который меня вдохновил",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "topic": "Будущее мира через 50 лет",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "topic": "Роль искусства в современном обществе",
                "level": "advanced",
                "theme": "leisure_hobbies"
            },
            {
                "topic": "Сложность человеческого сознания",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "topic": "Важность осведомленности о ментальном здоровье",
                "level": "intermediate",
                "theme": "health_body"
            },
            {
                "topic": "Работа моей мечты и почему",
                "level": "starter",
                "theme": "education_work"
            },
            {
                "topic": "Влияние изменения климата на местные сообщества",
                "level": "upper-intermediate",
                "theme": "nature_environment"
            },
            {
                "topic": "Искусственный интеллект: инструмент или угроза?",
                "level": "advanced",
                "theme": "science_technology"
            }
        ]
    },
    "el": {
        "opinionArena": [
            {
                "text": "Είναι το πρωινό το πιο σημαντικό γεύμα;",
                "level": "starter",
                "theme": "food_drinks"
            },
            {
                "text": "Είναι οι σκύλοι καλύτερα κατοικίδια από τις γάτες;",
                "level": "starter",
                "theme": "leisure_hobbies"
            },
            {
                "text": "Πρέπει τα παιδιά να έχουν κινητά τηλέφωνα;",
                "level": "elementary",
                "theme": "science_technology"
            },
            {
                "text": "Είναι καλύτερα να ζεις σε σπίτι ή σε διαμέρισμα;",
                "level": "elementary",
                "theme": "daily_life"
            },
            {
                "text": "Μπορούμε να ζήσουμε χωρίς ίντερνετ για μια εβδομάδα;",
                "level": "intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Πρέπει όλοι να μαθαίνουν μια δεύτερη γλώσσα;",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "Καταστρέφουν τα κοινωνικά δίκτυα τις κοινωνικές μας δεξιότητες;",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "text": "Πρέπει οι δημόσιες συγκοινωνίες να είναι δωρεάν;",
                "level": "upper-intermediate",
                "theme": "travel_places"
            },
            {
                "text": "Γενετική μηχανική: Πρόοδος ή κίνδυνος;",
                "level": "advanced",
                "theme": "science_technology"
            },
            {
                "text": "Είναι το καθολικό βασικό εισόδημα λύση για την αυτοματοποίηση;",
                "level": "advanced",
                "theme": "people_society"
            },
            {
                "text": "Υπάρχει πραγματικά η ελεύθερη βούληση ή είναι μια ψευδαίσθηση;",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "text": "Η ηθική του αποικισμού άλλων πλανητών.",
                "level": "proficiency",
                "theme": "science_technology"
            }
        ],
        "criticsCorner": [
            {
                "text": "Σκέφτομαι, άρα υπάρχω.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "text": "Ζωή είναι αυτό που σου συμβαίνει ενώ είσαι απασχολημένος κάνοντας άλλα σχέδια.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "people_society"
            },
            {
                "text": "Η μόνη σταθερά είναι η αλλαγή.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "people_society"
            }
        ],
        "debates": [
            {"topic": "Καφές εναντίον τσαγιού — ποιο είναι το καλύτερο πρωινό ρόφημα;", "sideA": "Καφές", "sideB": "Τσάι", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Εστιατόριο εναντίον σπιτικού φαγητού — τι είναι καλύτερο;", "sideA": "Εστιατόριο", "sideB": "Σπιτικό φαγητό", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Πρωινό εναντίον καθόλου πρωινού — τι είναι καλύτερο για εσάς;", "sideA": "Πρωινό", "sideB": "Καθόλου", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Νερό εναντίον χυμού — τι είναι πιο υγιεινό;", "sideA": "Νερό", "sideB": "Χυμός", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Κρέας εναντίον λαχανικών — τι είναι πιο σημαντικό σε ένα γεύμα;", "sideA": "Κρέας", "sideB": "Λαχανικά", "level": "starter", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Σπίτι εναντίον διαμερίσματος — πού είναι καλύτερα να ζεις;", "sideA": "Σπίτι", "sideB": "Διαμέρισμα", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Πόλη εναντίον χωριού — ποιο είναι το καλύτερο μέρος για να ζεις;", "sideA": "Πόλη", "sideB": "Χωριό", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Μετρητά εναντίον κάρτας — με τι είναι καλύτερο να πληρώνεις;", "sideA": "Μετρητά", "sideB": "Κάρτα", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Αποταμίευση χρημάτων εναντίον ξοδέματος χρημάτων — τι είναι καλύτερο;", "sideA": "Αποταμίευση", "sideB": "Ξόδεμα", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Ενοικίαση εναντίον αγοράς — τι είναι καλύτερο;", "sideA": "Ενοικίαση", "sideB": "Αγορά", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Πρωινή εργασία εναντίον βραδινής εργασίας — τι είναι καλύτερο;", "sideA": "Πρωί", "sideB": "Βράδυ", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Αυτοκίνητο εναντίον λεωφορείου — τι είναι καλύτερο για να πας στη δουλειά;", "sideA": "Αυτοκίνητο", "sideB": "Λεωφορείο", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Περπάτημα εναντίον οδήγησης — τι είναι καλύτερο στην πόλη;", "sideA": "Περπάτημα", "sideB": "Οδήγηση", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Γραφείο εναντίον σπιτιού — ποιο είναι το καλύτερο μέρος για εργασία;", "sideA": "Γραφείο", "sideB": "Σπίτι", "level": "starter", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Πρωινός τύπος εναντίον βραδινού τύπου — τι είναι καλύτερο;", "sideA": "Πρωινός", "sideB": "Βραδινός", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Καλοκαίρι εναντίον χειμώνα — ποια εποχή είναι καλύτερη;", "sideA": "Καλοκαίρι", "sideB": "Χειμώνας", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Σύντομες διακοπές εναντίον μεγάλων διακοπών — τι είναι καλύτερο;", "sideA": "Σύντομες", "sideB": "Μεγάλες", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Τηλεφώνημα εναντίον μηνύματος — τι είναι καλύτερο;", "sideA": "Τηλεφώνημα", "sideB": "Μήνυμα", "level": "starter", "theme": "science_technology", "ideasA": [], "ideasB": []},
            {"topic": "Ντους το πρωί εναντίον ντους το βράδυ — ποιο είναι το σωστό;", "sideA": "Πρωί", "sideB": "Βράδυ", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Δευτέρα εναντίον Παρασκευής — ποια μέρα είναι καλύτερη;", "sideA": "Δευτέρα", "sideB": "Παρασκευή", "level": "starter", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Πολύ ζέστη εναντίον πολύ κρύου — τι είναι χειρότερο;", "sideA": "Ζέστη", "sideB": "Κρύο", "level": "starter", "theme": "nature_environment", "ideasA": [], "ideasB": []},
            {"topic": "Θέση στο παράθυρο εναντίον θέση στο διάδρομο — τι είναι καλύτερο στο αεροπλάνο;", "sideA": "Παράθυρο", "sideB": "Διάδρομος", "level": "starter", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Πλήρης απασχόληση εναντίον μερικής απασχόλησης — τι είναι καλύτερο;", "sideA": "Πλήρης", "sideB": "Μερική", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Εργασία σε γραφείο εναντίον εργασίας από το σπίτι — τι προτιμάτε;", "sideA": "Γραφείο", "sideB": "Σπίτι", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Μια δουλειά που αγαπάτε εναντίον μιας δουλειάς που πληρώνει καλά — τι είναι πιο σημαντικό;", "sideA": "Δουλειά που αγαπάτε", "sideB": "Καλή αμοιβή", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Εργασία με άλλους ανθρώπους εναντίον εργασίας μόνος — τι είναι καλύτερο;", "sideA": "Με άλλους", "sideB": "Μόνος", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Μια σύντομη διαδρομή εναντίον μιας μεγάλης διαδρομής για τη δουλειά — τι είναι πιο αποδεκτό;", "sideA": "Σύντομη", "sideB": "Μεγάλη", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Ζωή μόνος εναντίον ζωής με σύντροφο — τι είναι καλύτερο;", "sideA": "Μόνος", "sideB": "Σύντροφος", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Μεγάλη πόλη εναντίον μικρής πόλης — ποιο είναι το καλύτερο μέρος για να ζεις ως ενήλικας;", "sideA": "Μεγάλη πόλη", "sideB": "Μικρή πόλη", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Μαγειρική στο σπίτι εναντίον φαγητού έξω — τι είναι καλύτερο για την καθημερινή ζωή;", "sideA": "Σπίτι", "sideB": "Έξω", "level": "elementary", "theme": "food_drinks", "ideasA": [], "ideasB": []},
            {"topic": "Έχοντας παιδιά εναντίον μη έχοντας παιδιά — ποια ζωή είναι καλύτερη;", "sideA": "Παιδιά", "sideB": "Χωρίς παιδιά", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Ενοικίαση διαμερίσματος εναντίον αγοράς σπιτιού — τι είναι καλύτερο για τους νέους ενήλικες;", "sideA": "Ενοικίαση", "sideB": "Αγορά", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Άσκηση κάθε μέρα εναντίον ξεκούρασης — τι είναι καλύτερο για την υγεία σας;", "sideA": "Άσκηση", "sideB": "Ξεκούραση", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Πηγαίνοντας στον γιατρό εναντίον αναμονής — τι είναι καλύτερο όταν νιώθετε άρρωστοι;", "sideA": "Γιατρός", "sideB": "Αναμονή", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Ύπνος οκτώ ώρες εναντίον λιγότερου ύπνου — τι είναι πιο ρεαλιστικό για τους ενήλικες;", "sideA": "8 ώρες", "sideB": "Λιγότερο", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Περπάτημα προς τη δουλειά εναντίον χρήσης αυτοκινήτου — τι είναι καλύτερο για την υγεία σας;", "sideA": "Περπάτημα", "sideB": "Αυτοκίνητο", "level": "elementary", "theme": "health_body", "ideasA": [], "ideasB": []},
            {"topic": "Online αγορές εναντίον αγορών σε κατάστημα — τι προτιμάτε;", "sideA": "Online", "sideB": "Κατάστημα", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Αποταμίευση για το μέλλον εναντίον απόλαυσης χρημάτων τώρα — τι είναι πιο συνετό;", "sideA": "Αποταμίευση", "sideB": "Απόλαυση τώρα", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Ακριβά πράγματα εναντίον φθηνών πραγμάτων — τι έχει την καλύτερη αξία;", "sideA": "Ακριβά", "sideB": "Φθηνά", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Αγορά καινούργιων εναντίον αγοράς μεταχειρισμένων — τι είναι καλύτερο;", "sideA": "Καινούργια", "sideB": "Μεταχειρισμένα", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Παρακολούθηση τηλεόρασης στο σπίτι εναντίον εξόδου — ποιο είναι το καλύτερο βράδυ;", "sideA": "Τηλεόραση", "sideB": "Έξοδος", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Διακοπές με την οικογένεια εναντίον διακοπών με φίλους — τι είναι καλύτερο;", "sideA": "Οικογένεια", "sideB": "Φίλοι", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Παραμονή στη χώρα σας εναντίον ταξιδιού στο εξωτερικό — ποιες είναι οι καλύτερες διακοπές;", "sideA": "Στη χώρα σας", "sideB": "Εξωτερικό", "level": "elementary", "theme": "travel_places", "ideasA": [], "ideasB": []},
            {"topic": "Αθλητισμός εναντίον ανάγνωσης — ποιο είναι το καλύτερο χόμπι για ενήλικες;", "sideA": "Αθλητισμός", "sideB": "Ανάγνωση", "level": "elementary", "theme": "leisure_hobbies", "ideasA": [], "ideasB": []},
            {"topic": "Βλέποντας συχνά φίλους εναντίον χρόνου μόνος — τι είναι πιο σημαντικό;", "sideA": "Φίλοι", "sideB": "Χρόνος μόνος", "level": "elementary", "theme": "people_society", "ideasA": [], "ideasB": []},
            {"topic": "Απάντηση στα μηνύματα αμέσως εναντίον του να τα αφήνετε για αργότερα — τι είναι πιο επαγγελματικό;", "sideA": "Αμέσως", "sideB": "Αργότερα", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Πλύσιμο πιάτων αμέσως εναντίον του να τα αφήνετε μέχρι αύριο — τι είναι καλύτερο;", "sideA": "Αμέσως", "sideB": "Αύριο", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},
            {"topic": "Να είστε πάντα νωρίς εναντίον πάντα πέντε λεπτά αργά — τι είναι χειρότερο στη δουλειά;", "sideA": "Νωρίς", "sideB": "Αργά", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Έχοντας ένα πολύ οργανωμένο γραφείο εναντίον ενός ακατάστατου γραφείου — ποιο άτομο είναι πιο παραγωγικό;", "sideA": "Οργανωμένο", "sideB": "Ακατάστατο", "level": "elementary", "theme": "education_work", "ideasA": [], "ideasB": []},
            {"topic": "Συζήτηση για τη δουλειά στο δείπνο εναντίον καθόλου συζήτησης για τη δουλειά στο δείπνο — ποιος κανόνας είναι καλύτερος;", "sideA": "Συζήτηση δουλειάς", "sideB": "Καμία συζήτηση", "level": "elementary", "theme": "daily_life", "ideasA": [], "ideasB": []},

            {
                "topic": "Γλώσσα: Συστατική έναντι Εκφραστικής",
                "sideA": "Συστατική",
                "sideB": "Εκφραστική",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Διαμορφώνει την πραγματικότητα",
                    "Περιορίζει τη σκέψη"
                ],
                "ideasB": [
                    "Αντανακλά την πραγματικότητα",
                    "Εργαλείο για τη σκέψη"
                ]
            },
            {
                "topic": "Ακρίβεια έναντι Ασάφειας",
                "sideA": "Ακρίβεια",
                "sideB": "Ασάφεια",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Σαφήνεια",
                    "Αποτελεσματικότητα"
                ],
                "ideasB": [
                    "Απόχρωση",
                    "Διπλωματία"
                ]
            },
            {
                "topic": "Ρητορική έναντι Λογικής",
                "sideA": "Ρητορική",
                "sideB": "Λογική",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Πειστική δύναμη",
                    "Συναισθηματική έκκληση"
                ],
                "ideasB": [
                    "Αντικειμενική αλήθεια",
                    "Δομική εγκυρότητα"
                ]
            },
            {
                "topic": "Κυριολεκτική έναντι Ερμηνευτικής Σημασίας",
                "sideA": "Κυριολεκτική",
                "sideB": "Ερμηνευτική",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Πρόθεση συγγραφέα",
                    "Σταθερότητα"
                ],
                "ideasB": [
                    "Ανταπόκριση αναγνώστη",
                    "Εξελισσόμενο πλαίσιο"
                ]
            },
            {
                "topic": "Επιστημονική Συναίνεση έναντι Επιστημολογικής Ταπεινότητας",
                "sideA": "Συναίνεση",
                "sideB": "Ταπεινότητα",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Εδραιωμένη γνώση",
                    "Αυθεντία εμπειρογνωμόνων"
                ],
                "ideasB": [
                    "Δεκτικότητα στη διόρθωση",
                    "Αναγνώριση ορίων"
                ]
            },
            {
                "topic": "Εμπειρογνωμοσύνη έναντι Βιωμένης Εμπειρίας",
                "sideA": "Εμπειρογνωμοσύνη",
                "sideB": "Βιωμένη Εμπειρία",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Επιστημονική αυστηρότητα",
                    "Αντικειμενικά δεδομένα"
                ],
                "ideasB": [
                    "Αυθεντική αλήθεια",
                    "Συμφραζόμενη ενόραση"
                ]
            },
            {
                "topic": "Αμφιβολία: Αρετή έναντι Παράλυσης",
                "sideA": "Αρετή",
                "sideB": "Παράλυση",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Κριτική σκέψη",
                    "Σκεπτικισμός"
                ],
                "ideasB": [
                    "Αναποφασιστικότητα",
                    "Έλλειψη δράσης"
                ]
            },
            {
                "topic": "Αφήγηση έναντι Δεδομένων",
                "sideA": "Αφήγήση",
                "sideB": "Δεδομένα",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Συναισθηματική επίδραση",
                    "Ανθρώπινη σύνδεση"
                ],
                "ideasB": [
                    "Στατιστική αλήθεια",
                    "Επεκτασιμότητα"
                ]
            },
            {
                "topic": "Νομιμότητα: Συναίνεση έναντι Αποτελέσματος",
                "sideA": "Συναίνεση",
                "sideB": "Αποτέλεσμα",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Δημοκρατική διαδικασία",
                    "Ηθικό δικαίωμα"
                ],
                "ideasB": [
                    "Αποτελεσματικότητα",
                    "Αποτελεσματική διακυβέρνηση"
                ]
            },
            {
                "topic": "Κράτος: Εγγυητής της Ελευθερίας έναντι Απειλής",
                "sideA": "Εγγυητής",
                "sideB": "Απειλή",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Κράτος δικαίου",
                    "Προστασία δικαιωμάτων"
                ],
                "ideasB": [
                    "Κατάχρηση εξουσίας",
                    "Επιτήρηση"
                ]
            },
            {
                "topic": "Πολιτική Δικαιωμάτων έναντι Πολιτικής Ευθυνών",
                "sideA": "Δικαιώματα",
                "sideB": "Ευθύνες",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Ατομική ελευθερία",
                    "Νομική προστασία"
                ],
                "ideasB": [
                    "Συλλογικό καθήκον",
                    "Κοινωνική συνοχή"
                ]
            },
            {
                "topic": "Ουδετερότητα έναντι Διακυβέρνησης με Αξίες",
                "sideA": "Ουδετερότητα",
                "sideB": "Με αξίες",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Αμεροληψία",
                    "Δικαιοσύνη"
                ],
                "ideasB": [
                    "Ηθική κατεύθυνση",
                    "Κοινωνικός σκοπός"
                ]
            },
            {
                "topic": "Πρόθεση έναντι Υποδοχής στην Τέχνη",
                "sideA": "Πρόθεση",
                "sideB": "Υποδοχή",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Όραμα δημιουργού",
                    "Αρχικό πλαίσιο"
                ],
                "ideasB": [
                    "Σημασία για το κοινό",
                    "Πολιτιστικός αντίκτυπος"
                ]
            },
            {
                "topic": "Αισθητική έναντι Ηθικής Αξίας",
                "sideA": "Αισθητική",
                "sideB": "Ηθική",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Η τέχνη για την τέχνη",
                    "Καθαρή ομορφιά"
                ],
                "ideasB": [
                    "Κοινωνική χρησιμότητα",
                    "Ηθικός αντίκτυπος"
                ]
            },
            {
                "topic": "Πρωτοπορία έναντι Προσβασιμότητας",
                "sideA": "Πρωτοπορία",
                "sideB": "Προσβασιμότητα",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Διεύρυνση των ορίων",
                    "Πνευματική πρόκληση"
                ],
                "ideasB": [
                    "Συμπεριληπτικότητα",
                    "Δημοκρατική τέχνη"
                ]
            },
            {
                "topic": "Θεσμική Τέχνη έναντι Περιθωριακής Τέχνης",
                "sideA": "Θεσμική",
                "sideB": "Περιθωριακή",
                "level": "proficiency",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Ιστορική διατήρηση",
                    "Πρότυπα"
                ],
                "ideasB": [
                    "Ακατέργαστη αυθεντικότητα",
                    "Αντισυστημική"
                ]
            },
            {
                "topic": "Αρχή της Πρόληψης έναντι της Προδραστικότητας",
                "sideA": "Προληπτική",
                "sideB": "Προδραστική",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Αποφυγή κινδύνου",
                    "Προτεραιότητα στην ασφάλεια"
                ],
                "ideasB": [
                    "Καινοτομία",
                    "Αποδοχή της αλλαγής"
                ]
            },
            {
                "topic": "Επιστημονική Πρόοδος: Εγγενώς Καλή έναντι Ουδέτερης",
                "sideA": "Εγγενώς Καλή",
                "sideB": "Ηθικά Ουδέτερη",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Αξίες του Διαφωτισμού",
                    "Επίλυση προβλημάτων"
                ],
                "ideasB": [
                    "Ανησυχία διπλής χρήσης",
                    "Ανθρώπινη ευθύνη"
                ]
            },
            {
                "topic": "Υπαρξιακός Κίνδυνος έναντι Τωρινού Υποφέρειν",
                "sideA": "Υπαρξιακός Κίνδυνος",
                "sideB": "Τωρινό Υποφέρειν",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Μακροπρόθεσμη επιβίωση",
                    "Μελλοντικές γενιές"
                ],
                "ideasB": [
                    "Άμεση ανακούφιση",
                    "Επείγουσα φτώχεια"
                ]
            },
            {
                "topic": "Ανθρώπινη Συνείδηση έναντι Τεχνητής Γενικής Νοημοσύνης",
                "sideA": "Συνείδηση",
                "sideB": "Τεχνητή Γενική Νοημοσύνη",
                "level": "proficiency",
                "theme": "science_technology",
                "ideasA": [
                    "Βιολογική μοναδικότητα",
                    "Υποκειμενική εμπειρία"
                ],
                "ideasB": [
                    "Υπολογιστική ισχύς",
                    "Αλγοριθμική λογική"
                ]
            },
            {
                "topic": "Πρόοδος: Πραγματικότητα έναντι Ψευδαίσθησης",
                "sideA": "Πραγματικότητα",
                "sideB": "Ψευδαίσθηση",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Τεχνολογική πρόοδος",
                    "Βελτιωμένη ποιότητα ζωής"
                ],
                "ideasB": [
                    "Κυκλική ιστορία",
                    "Νέα προβλήματα"
                ]
            },
            {
                "topic": "Φιλελεύθερη Τάξη έναντι Πολυπολικού Κόσμου",
                "sideA": "Φιλελεύθερη Τάξη",
                "sideB": "Πολυπολικότητα",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Παγκόσμιες αξίες",
                    "Παγκόσμια σταθερότητα"
                ],
                "ideasB": [
                    "Ποικίλη ισχύς",
                    "Πολιτιστική κυριαρχία"
                ]
            },
            {
                "topic": "Μνήμη έναντι Λήθης",
                "sideA": "Μνήμη",
                "sideB": "Λήθη",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Μάθηση από την ιστορία",
                    "Ταυτότητα"
                ],
                "ideasB": [
                    "Προχώρημα μπροστά",
                    "Ξεπέρασμα τραυμάτων"
                ]
            },
            {
                "topic": "Η Τραγωδία των Κοινών έναντι της Συνεργασίας",
                "sideA": "Τραγωδία",
                "sideB": "Συνεργασία",
                "level": "proficiency",
                "theme": "people_society",
                "ideasA": [
                    "Προσωπικό συμφέρον",
                    "Εξάντληση πόρων"
                ],
                "ideasB": [
                    "Αμοιβαίο όφελος",
                    "Συλλογική διαχείριση"
                ]
            },
            {
                "topic": "Κόκκινο εναντίον Μπλε — ποιο χρώμα είναι καλύτερο;",
                "sideA": "Κόκκινο",
                "sideB": "Μπλε",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κίτρινο εναντίον Πράσινου — ποιο χρώμα είναι πιο χαρούμενο;",
                "sideA": "Κίτρινο",
                "sideB": "Πράσινο",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαύρο εναντίον Λευκού — ποιο χρώμα προτιμάτε;",
                "sideA": "Μαύρο",
                "sideB": "Λευκό",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ροζ εναντίον Μοβ — ποιο χρώμα είναι πιο ωραίο;",
                "sideA": "Ροζ",
                "sideB": "Μοβ",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κύκλος εναντίον Τετραγώνου — ποιο σχήμα είναι πιο χρήσιμο;",
                "sideA": "Κύκλος",
                "sideB": "Τετράγωνο",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλοι εναντίον Μικρών αριθμών — ποιοι είναι πιο διασκεδαστικοί;",
                "sideA": "Μεγάλοι",
                "sideB": "Μικροί",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρίγωνο εναντίον Ορθογωνίου — ποιο σχήμα είναι καλύτερο;",
                "sideA": "Τρίγωνο",
                "sideB": "Ορθογώνιο",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μπάλα εναντίον Κούκλας — ποιο παιχνίδι είναι καλύτερο;",
                "sideA": "Μπάλα",
                "sideB": "Κούκλα",
                "level": "starter",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μολύβι εναντίον Στυλό — με ποιο είναι καλύτερο να γράφεις;",
                "sideA": "Μολύβι",
                "sideB": "Στυλό",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βιβλίο εναντίον Εικόνας — από ποιο είναι καλύτερο να μαθαίνεις;",
                "sideA": "Βιβλίο",
                "sideB": "Εικόνα",
                "level": "starter",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καρέκλα εναντίον Πατώματος — πού είναι καλύτερα να κάθεσαι;",
                "sideA": "Καρέκλα",
                "sideB": "Πάτωμα",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτα εναντίον Σκύλου — ποιο ζώο είναι καλύτερο;",
                "sideA": "Γάτα",
                "sideB": "Σκύλος",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψάρι εναντίον Πουλιού — ποιο είναι καλύτερο κατοικίδιο;",
                "sideA": "Ψάρι",
                "sideB": "Πουλί",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλα εναντίον Μικρών ζώων — ποια είναι πιο συμπαθητικά;",
                "sideA": "Μεγάλα",
                "sideB": "Μικρά",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κουνέλι εναντίον Χάμστερ — ποιο είναι πιο χαριτωμένο;",
                "sideA": "Κουνέλι",
                "sideB": "Χάμστερ",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Νερό εναντίον Χυμού — ποιο είναι καλύτερο να πίνεις;",
                "sideA": "Νερό",
                "sideB": "Χυμός",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μήλο εναντίον Μπανάνας — ποιο φρούτο είναι καλύτερο;",
                "sideA": "Μήλο",
                "sideB": "Μπανάνα",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψωμί εναντίον Ρυζιού — ποιο είναι καλύτερο να τρως;",
                "sideA": "Ψωμί",
                "sideB": "Ρύζι",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάλα εναντίον Νερού — ποιο προτιμάτε;",
                "sideA": "Γάλα",
                "sideB": "Νερό",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή με την οικογένεια εναντίον Μόνος — ποιο είναι καλύτερο;",
                "sideA": "Με οικογένεια",
                "sideB": "Μόνος",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αδελφός εναντίον Αδελφής — ποιο είναι καλύτερο;",
                "sideA": "Αδελφός",
                "sideB": "Αδελφή",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλη εναντίον Μικρής οικογένειας — ποια είναι πιο ωραία;",
                "sideA": "Μεγάλη",
                "sideB": "Μικρή",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγαλύτερο εναντίον Μικρότερου παιδιού — ποιο είναι καλύτερο;",
                "sideA": "Μεγαλύτερο",
                "sideB": "Μικρότερο",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Απογευματινού σχολείου — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Απόγευμα",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανάγνωση εναντίον Μαθηματικών — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Ανάγνωση",
                "sideB": "Μαθηματικά",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολείο εναντίον Σπιτιού — ποιο είναι καλύτερο;",
                "sideA": "Σχολείο",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασίες εναντίον Καθόλου εργασιών — ποιο βοηθάει περισσότερο;",
                "sideA": "Εργασίες",
                "sideB": "Καμία",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μόνος εναντίον Με συνεργάτη — ποιο προτιμάτε;",
                "sideA": "Μόνος",
                "sideB": "Συνεργάτης",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χαρτί εναντίον Υπολογιστή — ποιο είναι καλύτερο;",
                "sideA": "Χαρτί",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Δείπνου — ποιο γεύμα είναι πιο σημαντικό;",
                "sideA": "Πρωινό",
                "sideB": "Δείπνο",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζεστό εναντίον Κρύου φαγητού — ποιο είναι καλύτερο;",
                "sideA": "Ζεστό",
                "sideB": "Κρύο",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπίτι εναντίον Εστιατορίου — ποιο είναι καλύτερο;",
                "sideA": "Σπίτι",
                "sideB": "Εστιατόριο",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γλυκό εναντίον Αλμυρού — ποιο προτιμάτε;",
                "sideA": "Γλυκό",
                "sideB": "Αλμυρό",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική εναντίον Έτοιμου φαγητού — ποιο είναι πιο ωραίο;",
                "sideA": "Μαγειρική",
                "sideB": "Έτοιμο",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Αργοπορημένου ξυπνήματος — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Αργά",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωί εναντίον Βράδυ — ποιο μέρος της ημέρας είναι πιο ωραίο;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καθημερινές εναντίον Σαββατοκύριακου — ποιο προτιμάτε;",
                "sideA": "Καθημερινές",
                "sideB": "Σαββατοκύριακο",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καλοκαίρι εναντίον Χειμώνα — ποια εποχή είναι καλύτερη;",
                "sideA": "Καλοκαίρι",
                "sideB": "Χειμώνας",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος νωρίς εναντίον Ύπνου αργά — ποιο είναι πιο υγιεινό;",
                "sideA": "Νωρίς",
                "sideB": "Αργά",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπίτι εναντίον Διαμερίσματος — ποιο είναι καλύτερο;",
                "sideA": "Σπίτι",
                "sideB": "Διαμέρισμα",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πόλη εναντίον Εξοχής — ποιο είναι καλύτερο μέρος για να ζεις;",
                "sideA": "Πόλη",
                "sideB": "Εξοχή",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υπνοδωμάτιο εναντίον Καθιστικού — ποιο δωμάτιο προτιμάτε;",
                "sideA": "Υπνοδωμάτιο",
                "sideB": "Καθιστικό",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επιτραπέζια εναντίον Παιχνιδιών έξω — ποια είναι πιο διασκεδαστικά;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τηλεόραση εναντίον Βιβλίου — ποιο είναι καλύτερο;",
                "sideA": "Τηλεόραση",
                "sideB": "Βιβλίο",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αθλητισμός εναντίον Βιντεοπαιχνιδιών — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Αθλητισμός",
                "sideB": "Βιντεοπαιχνίδια",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωγραφική εναντίον Τραγουδιού — ποιο χόμπι είναι καλύτερο;",
                "sideA": "Ζωγραφική",
                "sideB": "Τραγούδι",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παιχνίδι μόνος εναντίον Με φίλους — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Μόνος",
                "sideB": "Φίλοι",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κολύμβηση εναντίον Τρεξίματος — ποιο σπορ προτιμάτε;",
                "sideA": "Κολύμβηση",
                "sideB": "Τρέξιμο",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μουσική εναντίον Αθλητισμού — ποιο είναι καλύτερο χόμπι;",
                "sideA": "Μουσική",
                "sideB": "Αθλητισμός",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώα φάρμας εναντίον Άγριων ζώων — ποια είναι πιο ενδιαφέροντα;",
                "sideA": "Φάρμα",
                "sideB": "Άγρια",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βροχή εναντίον Λιακάδας — ποιο καιρό προτιμάτε;",
                "sideA": "Βροχή",
                "sideB": "Λιακάδα",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Θάλασσα εναντίον Βουνού — ποιο είναι καλύτερο για διακοπές;",
                "sideA": "Θάλασσα",
                "sideB": "Βουνό",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Λουλούδια εναντίον Δέντρων — ποια είναι πιο όμορφα;",
                "sideA": "Λουλούδια",
                "sideB": "Δέντρα",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυτοκίνητο εναντίον Λεωφορείου — ποιο είναι καλύτερο;",
                "sideA": "Αυτοκίνητο",
                "sideB": "Λεωφορείο",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περπάτημα εναντίον Ποδηλάτου — ποιο είναι καλύτερο για μετακίνηση;",
                "sideA": "Περπάτημα",
                "sideB": "Ποδήλατο",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομες εναντίον Μεγάλων διακοπών — ποιο είναι καλύτερο;",
                "sideA": "Σύντομες",
                "sideB": "Μεγάλες",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξίδι μόνος εναντίον Με οικογένεια — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Μόνος",
                "sideB": "Οικογένεια",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online αγορές vs Αγορές με φυσική παρουσία",
                "sideA": "Online",
                "sideB": "Φυσική παρουσία",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [
                    "Ευκολία",
                    "Καλύτερες τιμές"
                ],
                "ideasB": [
                    "Δοκιμή ειδών",
                    "Άμεση ικανοποίηση"
                ]
            },
            {
                "topic": "Χάρτινα βιβλία vs E-books",
                "sideA": "Χαρτί",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [
                    "Μυρωδιά/Αίσθηση",
                    "Συλλεκτικό"
                ],
                "ideasB": [
                    "Φορητότητα",
                    "Εξοικονόμηση χώρου"
                ]
            },
            {
                "topic": "Τηλεργασία vs Εργασία στο γραφείο",
                "sideA": "Σπίτι",
                "sideB": "Γραφείο",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [
                    "Όχι μετακινήσεις",
                    "Ευελιξία"
                ],
                "ideasB": [
                    "Κοινωνικοποίηση",
                    "Καλύτερη εστίαση"
                ]
            },
            {
                "topic": "Ηλεκτρικά αυτοκίνητα vs Αυτοκίνητα βενζίνης",
                "sideA": "Ηλεκτρικά",
                "sideB": "Βενζίνη",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [
                    "Περιβάλλον",
                    "Ησυχία"
                ],
                "ideasB": [
                    "Αυτονομία",
                    "Ταχύτητα φόρτισης"
                ]
            },
            {
                "topic": "Μελέτη το πρωί ή μελέτη το βράδυ — πότε είναι καλύτερα;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυστηροί δάσκαλοι ή φιλικοί δάσκαλοι — ποιοι βοηθούν περισσότερο τους μαθητές;",
                "sideA": "Αυστηροί",
                "sideB": "Φιλικοί",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μάθηση με σχολικό βιβλίο ή μάθηση με βίντεο — τι είναι πιο αποτελεσματικό;",
                "sideA": "Βιβλίο",
                "sideB": "Βίντεο",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομα μαθήματα ή μεγάλα μαθήματα — ποια σε βοηθούν να μαθαίνεις καλύτερα;",
                "sideA": "Σύντομα",
                "sideB": "Μεγάλα",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ομαδικές εργασίες ή ατομικές εργασίες — τι προτιμάτε;",
                "sideA": "Ομαδικές",
                "sideB": "Ατομικές",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολική στολή ή καθημερινά ρούχα στο σχολείο — τι είναι καλύτερο;",
                "sideA": "Στολή",
                "sideB": "Καθημερινά",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπιτικό φαγητό ή φαστ φουντ — τι είναι καλύτερο;",
                "sideA": "Σπιτικό",
                "sideB": "Φαστ φουντ",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρία μεγάλα γεύματα ή πολλά μικρά σνακ — τι είναι πιο υγιεινό;",
                "sideA": "Μεγάλα γεύματα",
                "sideB": "Σνακ",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χορτοφαγικό φαγητό ή κρέας — ποια διατροφή είναι καλύτερη;",
                "sideA": "Χορτοφαγία",
                "sideB": "Κρέας",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίνοντας τσάι ή πίνοντας καφέ — τι είναι καλύτερο;",
                "sideA": "Τσάι",
                "sideB": "Καφές",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρώγοντας μόνος ή τρώγοντας με άλλους — τι προτιμάτε;",
                "sideA": "Μόνος",
                "sideB": "Με άλλους",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παίζοντας ένα ομαδικό άθλημα ή ένα ατομικό άθλημα — τι είναι καλύτερο;",
                "sideA": "Ομαδικό",
                "sideB": "Ατομικό",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περνώντας τον ελεύθερο χρόνο μέσα ή έξω — τι είναι καλύτερο;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινηματογράφος ή θέατρο — ποια είναι η καλύτερη βραδινή έξοδος;",
                "sideA": "Σινεμά",
                "sideB": "Θέατρο",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακούγοντας μουσική ή παίζοντας ένα όργανο — τι είναι πιο απολαυστικό;",
                "sideA": "Ακρόαση",
                "sideB": "Εκτέλεση",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βιντεοπαιχνίδια ή επιτραπέζια παιχνίδια — ποια έχουν περισσότερη πλάκα;",
                "sideA": "Βιντεοπαιχνίδια",
                "sideB": "Επιτραπέζια",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πηγαίνοντας για ψώνια ή μένοντας στο σπίτι — ποιος είναι ο καλύτερος τρόπος για να περάσετε το Σαββατοκύριακο;",
                "sideA": "Ψώνια",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινητό τηλέφωνο ή υπολογιστής — τι είναι πιο χρήσιμο στην καθημερινή ζωή;",
                "sideA": "Κινητό",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Στέλνοντας ένα μήνυμα ή κάνοντας ένα τηλεφώνημα — τι είναι καλύτερο;",
                "sideA": "Μήνυμα",
                "sideB": "Κλήση",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ηλεκτρονικό βιβλίο ή χάρτινο βιβλίο — τι προτιμάτε να διαβάζετε;",
                "sideA": "E-book",
                "sideB": "Χάρτινο βιβλίο",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βγάζοντας φωτογραφίες με το κινητό σου ή με μια κάμερα — τι δίνει καλύτερα αποτελέσματα;",
                "sideA": "Κινητό",
                "sideB": "Κάμερα",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διακοπές στην παραλία ή διακοπές στο βουνό — τι είναι καλύτερο;",
                "sideA": "Παραλία",
                "sideB": "Βουνό",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξιδεύοντας με τρένο ή ταξιδεύοντας με αεροπλάνο — τι είναι καλύτερο;",
                "sideA": "Τρένο",
                "sideB": "Αεροπλάνο",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επίσκεψη σε μια διάσημη πόλη ή επίσκεψη σε ένα μικρό χωριό — τι είναι πιο ενδιαφέρον;",
                "sideA": "Πόλη",
                "sideB": "Χωριό",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαμονή σε ξενοδοχείο ή διαμονή σε μια τοπική οικογένεια — τι προτιμάτε;",
                "sideA": "Ξενοδοχείο",
                "sideB": "Τοπική οικογένεια",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξιδεύοντας στο εξωτερικό ή εξερευνώντας τη δική σου χώρα — τι αξίζει περισσότερο;",
                "sideA": "Εξωτερικό",
                "sideB": "Δική σου χώρα",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έχοντας πολλούς φίλους ή έχοντας λίγους στενούς φίλους — τι είναι καλύτερο;",
                "sideA": "Πολλοί",
                "sideB": "Στενοί φίλοι",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Συνάντηση με φίλους από κοντά ή συνομιλία στο διαδίκτυο — τι είναι πιο ικανοποιητικό;",
                "sideA": "Από κοντά",
                "sideB": "Online",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώντας με τους γονείς ή ζώντας σε ένα φοιτητικό διαμέρισμα — τι είναι καλύτερο για τους νέους;",
                "sideA": "Γονείς",
                "sideB": "Φοιτητικό σπίτι",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γιορτάζοντας τα γενέθλια στο σπίτι ή βγαίνοντας έξω — τι είναι πιο ωραίο;",
                "sideA": "Σπίτι",
                "sideB": "Έξοδος",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποταμίευση χρημάτων ή δαπάνη χρημάτων — τι είναι πιο συνετό;",
                "sideA": "Αποταμίευση",
                "sideB": "Ξόδεμα",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία με μερική απασχόληση κατά τη διάρκεια των σπουδών ή εστίαση μόνο στο σχολείο — τι είναι καλύτερο;",
                "sideA": "Μερική απασχόληση",
                "sideB": "Μόνο σχολείο",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κερδίζοντας πολλά χρήματα ή έχοντας ελεύθερο χρόνο — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Χρήματα",
                "sideB": "Ελεύθερος χρόνος",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαδικτυακή μάθηση ή μάθηση στην τάξη — τι είναι πιο αποτελεσματικό;",
                "sideA": "Online",
                "sideB": "Τάξη",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποστήθιση γεγονότων ή μάθηση πώς να βρίσκεις πληροφορίες — ποια δεξιότητα είναι πιο σημαντική;",
                "sideA": "Γεγονότα",
                "sideB": "Εύρεση info",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πανεπιστημιακή εκπαίδευση ή επαγγελματική κατάρτιση — ποιος είναι ο καλύτερος δρόμος;",
                "sideA": "Πανεπιστήμιο",
                "sideB": "Επαγγελματική",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εξετάσεις ή συνεχής αξιολόγηση — ποιος είναι ο πιο δίκαιος τρόπος αξιολόγησης των μαθητών;",
                "sideA": "Εξετάσεις",
                "sideB": "Συνεχής",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εκμάθηση μιας ξένης γλώσσας στο σχολείο ή διαμονή στο εξωτερικό — τι είναι πιο αποτελεσματικό;",
                "sideA": "Σχολείο",
                "sideB": "Εξωτερικό",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολεία αρρένων ή θηλέων εναντίον μικτών σχολείων — ποια είναι καλύτερα για τους μαθητές;",
                "sideA": "Αρρένων/Θηλέων",
                "sideB": "Μικτά",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μέσα κοινωνικής δικτύωσης ή επικοινωνία πρόσωπο με πρόσωπο — τι είναι καλύτερο για τη διατήρηση της επαφής;",
                "sideA": "Social media",
                "sideB": "Από κοντά",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υπηρεσίες streaming ή παραδοσιακή τηλεόραση — τι είναι καλύτερο;",
                "sideA": "Streaming",
                "sideB": "Παραδοσιακή TV",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία από το σπίτι ή εργασία σε γραφείο — τι είναι πιο παραγωγικό;",
                "sideA": "Σπίτι",
                "sideB": "Γραφείο",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανάγνωση ειδήσεων στο διαδίκτυο ή ανάγνωση εφημερίδας — τι είναι πιο αξιόπιστο;",
                "sideA": "Online ειδήσεις",
                "sideB": "Εφημερίδα",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περνώντας χρόνο στα μέσα κοινωνικής δικτύωσης ή περνώντας χρόνο στη φύση — τι είναι καλύτερο για την ψυχική σας υγεία;",
                "sideA": "Social media",
                "sideB": "Φύση",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χρήση δημόσιων συγκοινωνιών ή οδήγηση αυτοκινήτου — τι είναι καλύτερο για την κοινωνία;",
                "sideA": "Δημόσιες συγκοινωνίες",
                "sideB": "Αυτοκίνητο",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αγορά μεταχειρισμένων ρούχων ή αγορά καινούργιων ρούχων — ποια είναι η καλύτερη συνήθεια;",
                "sideA": "Μεταχειρισμένα",
                "sideB": "Καινούργια",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή στην πόλη ή ζωή στην εξοχή — τι ταιριάζει καλύτερα στους νέους;",
                "sideA": "Πόλη",
                "sideB": "Εξοχή",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χορτοφαγία ή κατανάλωση κρέατος — τι είναι καλύτερο για τον πλανήτη;",
                "sideA": "Χορτοφαγία",
                "sideB": "Κρέας",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ατομικές αλλαγές στον τρόπο ζωής ή κυβερνητική δράση — τι προσφέρει περισσότερο στο περιβάλλον;",
                "sideA": "Ατομικά",
                "sideB": "Κυβέρνηση",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μια σταθερή δουλειά ή μια δημιουργική καριέρα — ποια είναι η καλύτερη επιλογή ζωής;",
                "sideA": "Σταθερή δουλειά",
                "sideB": "Δημιουργική",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ξεκινώντας τη δική σου επιχείρηση ή δουλεύοντας για μια εταιρεία — τι είναι καλύτερο;",
                "sideA": "Δική σου επιχείρηση",
                "sideB": "Εταιρεία",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υψηλός μισθός ή ικανοποίηση από την εργασία — τι έχει μεγαλύτερη σημασία στη δουλειά;",
                "sideA": "Μισθός",
                "sideB": "Ικανοποίηση",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δουλεύοντας πολλές ώρες ή έχοντας ισορροπία επαγγελματικής και προσωπικής ζωής — τι οδηγεί σε μεγαλύτερη επιτυχία;",
                "sideA": "Πολλές ώρες",
                "sideB": "Ισορροπία",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επιλογή καριέρας με βάση το πάθος ή με βάση τις προοπτικές απασχόλησης — τι είναι πιο συνετό;",
                "sideA": "Πάθος",
                "sideB": "Προοπτικές",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώντας ως άτομο ή δίνοντας προτεραιότητα στην κοινότητα — τι είναι πιο σημαντικό;",
                "sideA": "Άτομο",
                "sideB": "Κοινότητα",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παραδοσιακές αξίες ή σύγχρονες αξίες — ποιες είναι πιο σημαντικό να διατηρηθούν;",
                "sideA": "Παραδοσιακές",
                "sideB": "Σύγχρονες",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εθελοντισμός ή δωρεά χρημάτων σε φιλανθρωπίες — τι βοηθάει περισσότερο;",
                "sideA": "Εθελοντισμός",
                "sideB": "Δωρεά",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φήμη ή κάνοντας τη διαφορά αθόρυβα — ποιος είναι ο καλύτερος στόχος στη ζωή;",
                "sideA": "Φήμη",
                "sideB": "Αθόρυβη διαφορά",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακολουθώντας τους κανόνες ή σκεπτόμενος για τον εαυτό σου — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Κανόνες",
                "sideB": "Δική σου σκέψη",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σωματική υγεία ή ψυχική υγεία — ποια πρέπει να είναι η προτεραιότητα;",
                "sideA": "Σωματική",
                "sideB": "Ψυχική",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρόληψη ή θεραπεία — ποια είναι η καλύτερη προσέγγιση στην υγειονομική περίθαλψη;",
                "sideA": "Πρόληψη",
                "sideB": "Θεραπεία",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανταγωνιστικός αθλητισμός ή άσκηση για διασκέδαση — τι είναι καλύτερο για σένα;",
                "sideA": "Ανταγωνιστικός",
                "sideB": "Διασκέδαση",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ιδιωτική υγειονομική περίθαλψη ή δημόσια υγειονομική περίθαλψη — ποιο σύστημα είναι πιο δίκαιο;",
                "sideA": "Ιδιωτική",
                "sideB": "Δημόσια",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινηματογράφος ή λογοτεχνία — ποια είναι η πιο ισχυρή μορφή τέχνης;",
                "sideA": "Σινεμά",
                "sideB": "Λογοτεχνία",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μοντέρνα τέχνη ή κλασική τέχνη — τι είναι πιο πολύτιμο;",
                "sideA": "Μοντέρνα",
                "sideB": "Κλασική",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διατήρηση παλαιών κτιρίων ή ανέγερση νέων — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Διατήρηση παλαιών",
                "sideB": "Ανέγερση νέων",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τοπική κουλτούρα ή παγκοσμιοποίηση — τι εμπλουτίζει περισσότερο τις κοινότητες;",
                "sideA": "Τοπική",
                "sideB": "Παγκοσμιοποίηση",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κοινωνικά δίκτυα εναντίον δια ζώσης επικοινωνίας — τι είναι καλύτερο για τη δημιουργία σχέσεων;",
                "sideA": "Social media",
                "sideB": "Από κοντά",
                "level": "upper-intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αστική ζωή εναντίον αγροτικής ζωής — ποια προσφέρει καλύτερη ποιότητα ζωής;",
                "sideA": "Αστική",
                "sideB": "Αγροτική",
                "level": "upper-intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαδικτυακή μάθηση εναντίον παραδοσιακής τάξης — ποιο είναι το μέλλον της εκπαίδευσης;",
                "sideA": "Online",
                "sideB": "Τάξη",
                "level": "upper-intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανανεώσιμες πηγές ενέργειας εναντίον πυρηνικής ενέργειας — ποια είναι η καλύτερη λύση για το κλίμα;",
                "sideA": "Ανανεώσιμες",
                "sideB": "Πυρηνική",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γρήγορη μόδα εναντίον βιώσιμης ένδυσης — μπορούμε να αντέξουμε οικονομικά να είμαστε ηθικοί;",
                "sideA": "Fast fashion",
                "sideB": "Βιώσιμη",
                "level": "upper-intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δημιουργικότητα ΤΝ εναντίον ανθρώπινης καλλιτεχνίας — μπορούν οι μηχανές να δημιουργήσουν πραγματικά τέχνη;",
                "sideA": "Δημιουργικότητα ΤΝ",
                "sideB": "Ανθρώπινη τέχνη",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εξερεύνηση του διαστήματος εναντίον εξερεύνησης των βαθιών θαλασσών — πού πρέπει να εστιάσουμε τους πόρους μας;",
                "sideA": "Διάστημα",
                "sideB": "Βαθιά θάλασσα",
                "level": "advanced",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψηφιακό απόρρητο εναντίον εθνικής ασφάλειας — δικαιολογείται ποτέ η ολοκληρωτική παρακολούθηση;",
                "sideA": "Απόρρητο",
                "sideB": "Ασφάλεια",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γενετικά τροποποιημένα τρόφιμα εναντίον βιολογικής γεωργίας — πώς πρέπει να θρέψουμε τον κόσμο;",
                "sideA": "ΓΤΟ",
                "sideB": "Βιολογική",
                "level": "advanced",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καθολικό βασικό εισόδημα εναντίον προγραμμάτων εγγύησης θέσεων εργασίας — ποιο είναι το καλύτερο κοινωνικό δίχτυ ασφαλείας;",
                "sideA": "ΚΒΕ",
                "sideB": "Εγγύηση εργασίας",
                "level": "advanced",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ροζ εναντίον Πορτοκαλί — ποιο χρώμα είναι πιο ωραίο;",
                "sideA": "Ροζ",
                "sideB": "Πορτοκαλί",
                "level": "starter",
                "theme": "colors",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ο αριθμός 1 εναντίον του αριθμού 10 — ποιος αριθμός είναι καλύτερος;",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_shapes",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καρέκλα εναντίον καναπέ — ποιο είναι πιο άνετο;",
                "sideA": "Καρέκλα",
                "sideB": "Καναπές",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τσάντα εναντίον κουτιού — ποιο είναι πιο χρήσιμο;",
                "sideA": "Τσάντα",
                "sideB": "Κουτί",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Λιοντάρι εναντίον ελέφαντα — ποιο ζώο είναι καλύτερο;",
                "sideA": "Λιοντάρι",
                "sideB": "Ελέφαντας",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σοκολάτα εναντίον γλυκών — ποιο είναι καλύτερο;",
                "sideA": "Σοκολάτα",
                "sideB": "Γλυκά",
                "level": "starter",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κουτάλι εναντίον πιρουνιού — ποιο είναι καλύτερο;",
                "sideA": "Κουτάλι",
                "sideB": "Πιρούνι",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καπέλο εναντίον παπουτσιών — ποιο είναι πιο σημαντικό;",
                "sideA": "Καπέλο",
                "sideB": "Παπούτσια",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ήλιος εναντίον φεγγαριού — ποιο είναι καλύτερο;",
                "sideA": "Ήλιος",
                "sideB": "Φεγγάρι",
                "level": "starter",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κάλτσες εναντίον χωρίς κάλτσες — ποιο είναι πιο ωραίο;",
                "sideA": "Κάλτσες",
                "sideB": "Χωρίς κάλτσες",
                "level": "starter",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή με τους παππούδες εναντίον χωρίς αυτούς — ποιο είναι πιο ωραίο;",
                "sideA": "Με παππούδες",
                "sideB": "Χωρίς αυτούς",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το φαγητό της μαμάς εναντίον του μπαμπά — ποιο είναι καλύτερο;",
                "sideA": "Μαμάς",
                "sideB": "Μπαμπά",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαθηματικά εναντίον καλλιτεχνικών — ποιο μάθημα έχει πιο πολλή πλάκα;",
                "sideA": "Μαθηματικά",
                "sideB": "Καλλιτεχνικά",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γράψιμο στο χαρτί εναντίον πληκτρολόγησης σε τάμπλετ — ποιο είναι καλύτερο;",
                "sideA": "Χαρτί",
                "sideB": "Τάμπλετ",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίτσα εναντίον μακαρονάδας — ποιο είναι πιο νόστιμο;",
                "sideA": "Πίτσα",
                "sideB": "Μακαρονάδα",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παγωτό εναντίον κέικ — ποιο είναι καλύτερο επιδόρπιο;",
                "sideA": "Παγωτό",
                "sideB": "Κέικ",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μικρές μέρες εναντίον μεγάλες μέρες — ποιο είναι καλύτερο;",
                "sideA": "Μικρές μέρες",
                "sideB": "Μεγάλες μέρες",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μέρα στο πάρκο εναντίον μέρα στην παραλία — ποιο είναι καλύτερο;",
                "sideA": "Πάρκο",
                "sideB": "Παραλία",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αεροπλάνο εναντίον τρένου — ποιο έχει πιο πολλή πλάκα;",
                "sideA": "Αεροπλάνο",
                "sideB": "Τρένο",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ντους το πρωί εναντίον ντους το βράδυ — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτες που ρίχνουν πράγματα από τα τραπέζια εναντίον σκύλων που μασάνε παπούτσια — ποιο είναι πιο ενοχλητικό;",
                "sideA": "Γάτες",
                "sideB": "Σκύλοι",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίτσα με πιρούνι εναντίον πίτσα με τα χέρια — ποιο είναι το σωστό;",
                "sideA": "Πιρούνι",
                "sideB": "Χέρια",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος με κάλτσες εναντίον ύπνος χωρίς κάλτσες — ποιο είναι καλύτερο;",
                "sideA": "Με κάλτσες",
                "sideB": "Χωρίς",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κάστρο στην άμμο εναντίον χιονάνθρωπου — ποιο έχει πιο πολλή πλάκα να χτίζεις;",
                "sideA": "Κάστρο",
                "sideB": "Χιονάνθρωπος",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πολλές εξετάσεις εναντίον πολύ λίγων — ποιο είναι πιο δίκαιο;",
                "sideA": "Πολλές εξετάσεις",
                "sideB": "Πολύ λίγες",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έναρξη σχολείου στα 7 εναντίον στα 5 — ποιο είναι καλύτερο για τα παιδιά;",
                "sideA": "Στα 7",
                "sideB": "Στα 5",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φαγητό αργά εναντίον φαγητό γρήγορα — ποιο είναι καλύτερο για σένα;",
                "sideA": "Αργά",
                "sideB": "Γρήγορα",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική στο σπίτι εναντίον παραγγελίας online — ποιο είναι καλύτερο;",
                "sideA": "Μαγειρική",
                "sideB": "Παραγγελία",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική εναντίον ζαχαροπλαστικής — ποιο είναι πιο διασκεδαστικό ως χόμπι;",
                "sideA": "Μαγειρική",
                "sideB": "Ζαχαροπλαστική",
                "level": "elementary",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γυμναστήριο εναντίον γυμναστικής έξω — ποιο είναι καλύτερο;",
                "sideA": "Γυμναστήριο",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φωτογραφίες στο κινητό εναντίον εκτυπωμένων — ποιο είναι καλύτερο;",
                "sideA": "Στο κινητό",
                "sideB": "Εκτυπωμένες",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV εναντίον οθόνης υπολογιστή — ποιο είναι καλύτερο για ταινίες;",
                "sideA": "Smart TV",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζεστή χώρα εναντίον κρύας χώρας — ποιος είναι καλύτερος προορισμός διακοπών;",
                "sideA": "Ζεστή",
                "sideB": "Κρύα",
                "level": "elementary",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να δίνεις δώρα εναντίον να παίρνεις δώρα — ποιο προτιμάς;",
                "sideA": "Να δίνεις",
                "sideB": "Να παίρνεις",
                "level": "elementary",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία μέσα εναντίον εργασίας έξω — ποιο είναι καλύτερο;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανανάς στην πίτσα εναντίον χωρίς ανανά — ποιο είναι το σωστό;",
                "sideA": "Ανανάς",
                "sideB": "Χωρίς ανανά",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάλα πρώτα εναντίον τσάι πρώτα — ποιο είναι καλύτερο;",
                "sideA": "Γάλα πρώτα",
                "sideB": "Τσάι πρώτα",
                "level": "elementary",
                "theme": "food_drinks",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δευτέρα εναντίον Παρασκευής — ποια μέρα είναι στην πραγματικότητα χειρότερη;",
                "sideA": "Δευτέρα",
                "sideB": "Παρασκευή",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ξύπνημα πέντε λεπτά πριν το ξυπνητήρι εναντίον ύπνου μέχρι το ξυπνητήρι — ποιο είναι πιο ενοχλητικό;",
                "sideA": "Πριν το ξυπνητήρι",
                "sideB": "Μέχρι το ξυπνητήρι",
                "level": "elementary",
                "theme": "daily_life",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτες εναντίον σκύλων — ποιο ζώο είναι κρυφά το αφεντικό του σπιτιού;",
                "sideA": "Γάτες",
                "sideB": "Σκύλοι",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Όταν ζεσταίνεσαι πολύ εναντίον όταν κρυώνεις πολύ — ποιο είναι χειρότερο;",
                "sideA": "Πολύ ζέστη",
                "sideB": "Πολύ κρύο",
                "level": "elementary",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μάθηση από τα λάθη εναντίον μάθησης από την επιτυχία — ποιο διδάσκει περισσότερα;",
                "sideA": "Λάθη",
                "sideB": "Επιτυχία",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τάμπλετ στην τάξη εναντίον παραδοσιακών τετραδίων — ποιο βοηθάει περισσότερο τους μαθητές;",
                "sideA": "Τάμπλετ",
                "sideB": "Τετράδια",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να είσαι πάντα διαθέσιμος εναντίον του να έχεις ψηφιακό ελεύθερο χρόνο — ποιο είναι καλύτερο;",
                "sideA": "Πάντα διαθέσιμος",
                "sideB": "Ελεύθερος χρόνος",
                "level": "intermediate",
                "theme": "science_technology",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επαναχρησιμοποίηση πραγμάτων εναντίον ανακύκλωσης — ποιο είναι πιο αποτελεσματικό;",
                "sideA": "Επαναχρησιμοποίηση",
                "sideB": "Ανακύκλωση",
                "level": "intermediate",
                "theme": "nature_environment",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μία καριέρα για όλη τη ζωή εναντίον συχνής αλλαγής καριέρας — ποιο είναι καλύτερο;",
                "sideA": "Μία καριέρα",
                "sideB": "Συχνή αλλαγή",
                "level": "intermediate",
                "theme": "education_work",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος εναντίον γυμναστικής — ποιο έχει μεγαλύτερο αντίκτυπο στην υγεία σου;",
                "sideA": "Ύπνος",
                "sideB": "Γυμναστική",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ποπ μουσική εναντίον κλασικής μουσικής — ποια έχει μεγαλύτερο πολιτιστικό αντίκτυπο;",
                "sideA": "Ποπ",
                "sideB": "Κλασική",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να ξέρεις το τέλος εναντίον της έκπληξης — ποιο είναι καλύτερο;",
                "sideA": "Να ξέρεις",
                "sideB": "Έκπληξη",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Άμεση απάντηση στα μηνύματα εναντίον του να παίρνεις το χρόνο σου — ποιο είναι πιο σεβαστό;",
                "sideA": "Άμεσα",
                "sideB": "Με το πάσο σου",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching μιας σειράς εναντίον ενός επεισοδίου την εβδομάδα — ποιος είναι ο σωστός τρόπος;",
                "sideA": "Binge-watching",
                "sideB": "Εβδομαδιαία",
                "level": "intermediate",
                "theme": "leisure_hobbies",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Θέση στο παράθυρο εναντίον θέση στο διάδρομο — ποιο είναι αντικειμενικά καλύτερο;",
                "sideA": "Παράθυρο",
                "sideB": "Διάδρομος",
                "level": "intermediate",
                "theme": "travel_places",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να χάσεις το γυμναστήριο μία φορά εναντίον του να πας και να μην κάνεις καλή προπόνηση — ποιο είναι χειρότερο;",
                "sideA": "Να το χάσεις",
                "sideB": "Κακή προπόνηση",
                "level": "intermediate",
                "theme": "health_body",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να μιλάς στον εαυτό σου εναντίον του να μιλάς στο κατοικίδιό σου — ποιο είναι πιο λογικό;",
                "sideA": "Στον εαυτό σου",
                "sideB": "Στο κατοικίδιο",
                "level": "intermediate",
                "theme": "people_society",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Η αγαπημένη μου ανάμνηση από την παιδική ηλικία",
                "level": "starter",
                "theme": "people_society"
            },
            {
                "topic": "Οι τελευταίες διακοπές που έκανα",
                "level": "elementary",
                "theme": "travel_places"
            },
            {
                "topic": "Ένα άτομο που με ενέπνευσε",
                "level": "intermediate",
                "theme": "people_society"
            },
            {
                "topic": "Το μέλλον του κόσμου σε 50 χρόνια",
                "level": "upper-intermediate",
                "theme": "science_technology"
            },
            {
                "topic": "Ο ρόλος της τέχνης στη σύγχρονη κοινωνία",
                "level": "advanced",
                "theme": "leisure_hobbies"
            },
            {
                "topic": "Η πολυπλοκότητα της ανθρώπινης συνείδησης",
                "level": "proficiency",
                "theme": "people_society"
            },
            {
                "topic": "Η σημασία της ευαισθητοποίησης για την ψυχική υγεία",
                "level": "intermediate",
                "theme": "health_body"
            },
            {
                "topic": "Η δουλειά των ονείρων μου και γιατί",
                "level": "starter",
                "theme": "education_work"
            },
            {
                "topic": "Ο αντίκτυπος της κλιματικής αλλαγής στις τοπικές κοινότητες",
                "level": "upper-intermediate",
                "theme": "nature_environment"
            },
            {
                "topic": "Τεχνητή Νοημοσύνη: Εργαλείο ή απειλή;",
                "level": "advanced",
                "theme": "science_technology"
            }
        ]
    }
};
window.speakingData = speakingData;
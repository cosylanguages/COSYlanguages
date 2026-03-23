(function() {
    const data = [
    {
        "word": "artist",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artists",
        "definitions": [
            {
                "text": "A person who creates paintings or drawings.",
                "examples": [
                    "The artist is painting a beautiful picture.",
                    "She is a famous artist."
                ]
            },
            {
                "text": "This person often works in a studio.",
                "examples": [
                    "Artists use colors and brushes."
                ]
            }
        ]
    },
    {
        "word": "chef",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chefs",
        "definitions": [
            {
                "text": "A professional cook who works in a restaurant.",
                "examples": [
                    "The chef is cooking a delicious meal.",
                    "Our chef is very talented."
                ]
            },
            {
                "text": "This person works in a kitchen.",
                "examples": [
                    "Chefs wear a tall white hat."
                ]
            }
        ]
    },
    {
        "word": "nurse",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "👩‍⚕️",
        "form": "noun",
        "plural": "nurses",
        "definitions": [
            {
                "text": "A person who cares for sick or injured people.",
                "examples": [
                    "The nurse is giving medicine to the patient.",
                    "She is a kind nurse."
                ]
            },
            {
                "text": "This person usually works in a hospital or a clinic.",
                "examples": [
                    "Nurses help doctors take care of people."
                ]
            }
        ]
    },
    {
        "word": "burger",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍔",
        "form": "noun",
        "plural": "burgers",
        "definitions": [
            {
                "text": "A sandwich with a meat patty inside a bun.",
                "examples": [
                    "I want a burger and fries.",
                    "This cheese burger is delicious."
                ]
            },
            {
                "text": "This is a popular type of fast food.",
                "examples": [
                    "Burgers often have lettuce and tomato."
                ]
            }
        ]
    },
    {
        "word": "taco",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🌮",
        "form": "noun",
        "plural": "tacos",
        "definitions": [
            {
                "text": "A Mexican dish with a folded tortilla and filling.",
                "examples": [
                    "Let's eat tacos for dinner.",
                    "I like spicy beef tacos."
                ]
            },
            {
                "text": "This food is originally from Mexico.",
                "examples": [
                    "Tacos are usually small and handheld."
                ]
            }
        ]
    },
    {
        "word": "salad",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥗",
        "form": "noun",
        "plural": "salads",
        "definitions": [
            {
                "text": "A mixture of raw vegetables.",
                "examples": [
                    "I had a fresh salad for lunch.",
                    "The salad has lettuce and cucumber."
                ]
            },
            {
                "text": "This is a healthy food usually served cold.",
                "examples": [
                    "Salads are often served with a dressing."
                ]
            }
        ]
    },
    {
        "word": "cheese",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🧀",
        "form": "noun",
        "plural": "cheese",
        "definitions": [
            {
                "text": "A solid food made from milk.",
                "examples": [
                    "I like cheese on my pizza.",
                    "There are many types of cheese."
                ]
            },
            {
                "text": "Some cheeses have holes in them.",
                "examples": [
                    "France is famous for its cheese."
                ]
            }
        ]
    },
    {
        "word": "rice",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍚",
        "form": "noun",
        "plural": "rice",
        "definitions": [
            {
                "text": "Small white or brown grains from a plant.",
                "examples": [
                    "I eat rice with chicken.",
                    "Do you like fried rice?"
                ]
            },
            {
                "text": "This is a staple food in many Asian countries.",
                "examples": [
                    "Rice grows in water-filled fields."
                ]
            }
        ]
    },
    {
        "word": "tomato",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍅",
        "form": "noun",
        "plural": "tomatoes",
        "definitions": [
            {
                "text": "A red fruit often used in salads and sauces.",
                "examples": [
                    "The tomato is very juicy.",
                    "I need tomatoes for the pasta sauce."
                ]
            },
            {
                "text": "Tomatoes are technically fruit but used as vegetables.",
                "examples": [
                    "Cherry tomatoes are small and sweet."
                ]
            }
        ]
    },
    {
        "word": "potato",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥔",
        "form": "noun",
        "plural": "potatoes",
        "definitions": [
            {
                "text": "A round root vegetable.",
                "examples": [
                    "I love mashed potatoes.",
                    "Can you peel the potatoes?"
                ]
            },
            {
                "text": "We use potatoes to make French fries.",
                "examples": [
                    "Potatoes grow under the ground."
                ]
            }
        ]
    },
    {
        "word": "wine",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍷",
        "form": "noun",
        "plural": "wine",
        "definitions": [
            {
                "text": "An alcoholic drink made from grapes.",
                "examples": [
                    "Red wine goes well with meat.",
                    "They drank a bottle of wine."
                ]
            },
            {
                "text": "France and Italy are famous for their wines.",
                "examples": [
                    "The wine is made in a vineyard."
                ]
            }
        ]
    },
    {
        "word": "beer",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍺",
        "form": "noun",
        "plural": "beer",
        "definitions": [
            {
                "text": "An alcoholic drink made from grain.",
                "examples": [
                    "He is drinking a glass of beer.",
                    "Beer is often served cold."
                ]
            },
            {
                "text": "This drink often has foam on top.",
                "examples": [
                    "Germany is famous for its beer."
                ]
            }
        ]
    },
    {
        "word": "soda",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥤",
        "form": "noun",
        "plural": "soda",
        "definitions": [
            {
                "text": "A sweet carbonated drink.",
                "examples": [
                    "I don't drink much soda.",
                    "Can I have a soda?"
                ]
            },
            {
                "text": "This drink has bubbles.",
                "examples": [
                    "Soda is also called pop or soft drink."
                ]
            }
        ]
    },
    {
        "word": "hospital",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "🏥",
        "form": "noun",
        "plural": "hospitals",
        "definitions": [
            {
                "text": "A place where sick or injured people are given medical treatment.",
                "examples": [
                    "The ambulance is going to the hospital.",
                    "She works at the hospital."
                ]
            },
            {
                "text": "This is a place where you go to see a doctor or a nurse.",
                "examples": [
                    "Hospitals are open 24 hours a day."
                ]
            }
        ]
    },
    {
        "word": "cinema",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinemas",
        "definitions": [
            {
                "text": "A place where people go to watch films on a big screen.",
                "examples": [
                    "Let's go to the cinema tonight.",
                    "What's playing at the cinema?"
                ]
            },
            {
                "text": "This is a place where you can eat popcorn and watch a movie.",
                "examples": [
                    "I love going to the cinema with friends."
                ]
            }
        ]
    },
    {
        "word": "restaurant",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍴",
        "form": "noun",
        "plural": "restaurants",
        "definitions": [
            {
                "text": "A place where you can buy and eat a meal.",
                "examples": [
                    "Let's go to an Italian restaurant.",
                    "The restaurant is open."
                ]
            },
            {
                "text": "In this place, a waiter or waitress brings food to your table.",
                "examples": [
                    "We had dinner at a fancy restaurant."
                ]
            }
        ]
    },
    {
        "word": "supermarket",
        "level": "elementary",
        "theme": "shopping_for_food_A2",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermarkets"
    },
    {
        "word": "supermarché",
        "level": "elementary",
        "theme": "shopping_for_food_A2",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermarchés",
        "definitions": [
            {
                "text": "Un grand magasin où l'on achète de la nourriture.",
                "examples": [
                    "Je fais mes courses au supermarché.",
                    "Le supermarché est ouvert jusqu'à 21h."
                ]
            },
            {
                "text": "On utilise un chariot pour faire ses achats.",
                "examples": [
                    "Il y a beaucoup de choix dans ce supermarché."
                ]
            }
        ]
    },
    {
        "word": "dress",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "dresses"
    },
    {
        "word": "jacket",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "🧥",
        "form": "noun",
        "plural": "jackets"
    },
    {
        "word": "skirt",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "skirts"
    },
    {
        "word": "sock",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "🧦",
        "form": "noun",
        "plural": "socks"
    },
    {
        "word": "sofa",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "sofas"
    },
    {
        "word": "lamp",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "💡",
        "form": "noun",
        "plural": "lamps"
    },
    {
        "word": "desk",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "desks"
    },
    {
        "word": "beautiful",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "strong",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "blonde",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective"
    },
    {
        "word": "wallet",
        "level": "elementary",
        "theme": "accessories_A1",
        "emoji": "👛",
        "form": "noun",
        "plural": "wallets"
    },
    {
        "word": "glasses",
        "level": "elementary",
        "theme": "accessories_A1",
        "emoji": "👓",
        "form": "noun",
        "plural": "glasses",
        "definitions": [
            {
                "text": "Something you wear on your face to help you see better.",
                "examples": [
                    "I need new glasses.",
                    "He is wearing black glasses."
                ]
            },
            {
                "text": "Containers used for drinking water or juice.",
                "examples": [
                    "Two glasses of water, please.",
                    "The glasses are in the kitchen."
                ]
            }
        ]
    },
    {
        "word": "lion",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🦁",
        "form": "noun",
        "plural": "lions",
        "definitions": [
            {
                "text": "A large wild cat that lives in Africa and is called 'the king of the jungle'.",
                "examples": [
                    "The lion is very strong.",
                    "We saw a lion at the zoo."
                ]
            }
        ]
    },
    {
        "word": "tiger",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐯",
        "form": "noun",
        "plural": "tigers"
    },
    {
        "word": "horse",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐎",
        "form": "noun",
        "plural": "horses"
    },
    {
        "word": "rabbit",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐇",
        "form": "noun",
        "plural": "rabbits"
    },
    {
        "word": "snowy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective"
    },
    {
        "word": "windy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective"
    },
    {
        "word": "cloudy",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective"
    },
    {
        "word": "arm",
        "level": "elementary",
        "theme": "body_parts_A0",
        "emoji": "💪",
        "form": "noun",
        "plural": "arms"
    },
    {
        "word": "finger",
        "level": "elementary",
        "theme": "body_parts_A0",
        "emoji": "☝️",
        "form": "noun",
        "plural": "fingers"
    },
    {
        "word": "journalist",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📰",
        "form": "noun",
        "plural": "journalists",
        "definitions": [
            {
                "text": "A person who writes for newspapers or magazines.",
                "examples": [
                    "The journalist is reporting from the scene.",
                    "She is a talented journalist."
                ]
            },
            {
                "text": "This person interviews people and reports the news.",
                "examples": [
                    "Journalists often work on tight deadlines."
                ]
            }
        ]
    },
    {
        "word": "athletic",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "form": "adjective"
    },
    {
        "word": "streaming",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📺",
        "form": "noun",
        "plural": "streamings"
    },
    {
        "word": "gravity",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🍎",
        "form": "noun",
        "plural": "gravities"
    },
    {
        "word": "justice",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "justices"
    },
    {
        "word": "pollution",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🏭",
        "form": "noun",
        "definitions": [
            {
                "text": "Damage to the environment caused by harmful substances.",
                "examples": [
                    "Air pollution is a big problem here."
                ]
            }
        ]
    },
    {
        "word": "university",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "noun",
        "plural": "universities",
        "definitions": [
            {
                "text": "A high-level educational institution where students study for degrees.",
                "examples": [
                    "He is studying at the university.",
                    "The university has a large library."
                ]
            }
        ]
    },
    {
        "word": "local cuisine",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍜",
        "form": "noun",
        "plural": "local cuisines",
        "definitions": [
            {
                "text": "Traditional food from a specific area.",
                "examples": [
                    "I love trying the local cuisine.",
                    "The local cuisine here is very spicy."
                ]
            },
            {
                "text": "Trying local cuisine is a great part of traveling.",
                "examples": [
                    "The local cuisine uses fresh ingredients from the region."
                ]
            }
        ]
    },
    {
        "word": "souvenir",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🎁",
        "form": "noun",
        "plural": "souvenirs",
        "definitions": [
            {
                "text": "A thing that is kept as a reminder of a person, place, or event.",
                "examples": [
                    "I bought a souvenir in Paris.",
                    "This magnet is a souvenir from my trip."
                ]
            },
            {
                "text": "People usually buy souvenirs when they are on holiday.",
                "examples": [
                    "The souvenir shop has many postcards."
                ]
            }
        ]
    },
    {
        "word": "city",
        "theme": "transport_travel_A2",
        "level": "elementary",
        "numberPlural": "3 city",
        "answer": "three cities",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "cities",
        "definitions": [
            {
                "text": "A large and important town.",
                "examples": [
                    "New York is a big city.",
                    "I live in a city."
                ]
            },
            {
                "text": "This is a place with many buildings, streets, and people.",
                "examples": [
                    "Cities are often very noisy."
                ]
            }
        ]
    },
    {
        "word": "mouse",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "numberPlural": "many mouse",
        "answer": "many mice",
        "emoji": "🐭",
        "form": "noun",
        "plural": "mice"
    },
    {
        "word": "overtime",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏰",
        "form": "noun",
        "definitions": [
            {
                "text": "Extra hours worked beyond the normal working day.",
                "examples": [
                    "She works overtime to finish the project."
                ]
            }
        ]
    },
    {
        "word": "promotion",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "noun",
        "plural": "promotions",
        "definitions": [
            {
                "text": "Moving to a higher and better-paid job within the same company.",
                "examples": [
                    "He got a promotion last month."
                ]
            }
        ]
    },
    {
        "word": "interview",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "noun",
        "plural": "interviews",
        "definitions": [
            {
                "text": "A formal meeting where someone is asked questions for a job.",
                "examples": [
                    "I have a job interview on Monday."
                ]
            }
        ]
    },
    {
        "word": "contract",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📄",
        "form": "noun",
        "plural": "contracts",
        "definitions": [
            {
                "text": "A written agreement between an employer and employee.",
                "examples": [
                    "She signed a two-year contract."
                ]
            }
        ]
    },
    {
        "word": "deadline",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "noun",
        "plural": "deadlines",
        "definitions": [
            {
                "text": "The latest time by which a piece of work must be finished.",
                "examples": [
                    "The deadline is on Friday."
                ]
            }
        ]
    },
    {
        "word": "experience",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "Knowledge or skill gained from doing something.",
                "examples": [
                    "He has five years of experience."
                ]
            }
        ]
    },
    {
        "word": "mortgage",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏠",
        "form": "noun",
        "plural": "mortgages",
        "definitions": [
            {
                "text": "A loan from a bank to buy a house or flat.",
                "examples": [
                    "They have a large mortgage."
                ]
            }
        ]
    },
    {
        "word": "loan",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "💰",
        "form": "noun",
        "plural": "loans",
        "definitions": [
            {
                "text": "Money borrowed from a bank that must be paid back.",
                "examples": [
                    "She took a loan to buy a car."
                ]
            }
        ]
    },
    {
        "word": "bill",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🧾",
        "form": "noun",
        "plural": "bills",
        "definitions": [
            {
                "text": "A document that shows how much money you must pay.",
                "examples": [
                    "I pay my electricity bill every month."
                ]
            }
        ]
    },
    {
        "word": "debt",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "noun",
        "plural": "debts",
        "definitions": [
            {
                "text": "Money that you owe to another person or bank.",
                "examples": [
                    "He has a lot of debt."
                ]
            }
        ]
    },
    {
        "word": "account",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏦",
        "form": "noun",
        "plural": "accounts",
        "definitions": [
            {
                "text": "An arrangement with a bank to store your money.",
                "examples": [
                    "I have a savings account."
                ]
            }
        ]
    },
    {
        "word": "budget",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "noun",
        "plural": "budgets",
        "definitions": [
            {
                "text": "A plan for how to spend money.",
                "examples": [
                    "We need a monthly budget."
                ]
            }
        ]
    },
    {
        "word": "diet",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥗",
        "form": "noun",
        "plural": "diets",
        "definitions": [
            {
                "text": "The food a person normally eats; or a special eating plan.",
                "examples": [
                    "She is on a healthy diet."
                ]
            }
        ]
    },
    {
        "word": "appointment",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "📅",
        "form": "noun",
        "plural": "appointments",
        "definitions": [
            {
                "text": "A time you arrange to meet someone, for example a doctor.",
                "examples": [
                    "I have a doctor's appointment on Tuesday."
                ]
            }
        ]
    },
    {
        "word": "fit",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "opposite": "unfit",
        "definitions": [
            {
                "text": "In good physical health because of regular exercise.",
                "examples": [
                    "He goes running to stay fit."
                ]
            }
        ]
    },
    {
        "word": "overweight",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "underweight",
        "definitions": [
            {
                "text": "Heavier than is considered healthy.",
                "examples": [
                    "The doctor said he is slightly overweight."
                ]
            }
        ]
    },
    {
        "word": "vitamin",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "💊",
        "form": "noun",
        "plural": "vitamins",
        "definitions": [
            {
                "text": "A natural substance in food that your body needs to stay healthy.",
                "examples": [
                    "Oranges contain vitamin C."
                ]
            }
        ]
    },
    {
        "word": "pain",
        "level": "elementary",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "form": "noun",
        "plural": "pains",
        "definitions": [
            {
                "text": "An unpleasant feeling in your body when something is wrong.",
                "examples": [
                    "She has pain in her back."
                ]
            }
        ]
    },
    {
        "word": "support",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "definitions": [
            {
                "text": "Help or encouragement given to someone.",
                "examples": [
                    "I need your support."
                ]
            }
        ]
    },
    {
        "word": "trust",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "definitions": [
            {
                "text": "The belief that someone is honest and reliable.",
                "examples": [
                    "Trust is important in a relationship."
                ]
            }
        ]
    },
    {
        "word": "compromise",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "plural": "compromises",
        "definitions": [
            {
                "text": "An agreement where both sides accept less than they wanted.",
                "examples": [
                    "Good relationships need compromise."
                ]
            }
        ]
    },
    {
        "word": "journey",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🛤️",
        "form": "noun",
        "plural": "journeys",
        "definitions": [
            {
                "text": "Travel from one place to another.",
                "examples": [
                    "The journey to work takes 40 minutes."
                ]
            }
        ]
    },
    {
        "word": "abroad",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "In or to another country.",
                "examples": [
                    "They go abroad every summer."
                ]
            }
        ]
    },
    {
        "word": "destination",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "📍",
        "form": "noun",
        "plural": "destinations",
        "definitions": [
            {
                "text": "The place you are travelling to.",
                "examples": [
                    "Paris is a popular destination."
                ]
            }
        ]
    },
    {
        "word": "flight",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "✈️",
        "form": "noun",
        "plural": "flights",
        "definitions": [
            {
                "text": "A journey made in a plane.",
                "examples": [
                    "The flight to London is two hours."
                ]
            }
        ]
    },
    {
        "word": "luggage",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🧳",
        "form": "noun",
        "definitions": [
            {
                "text": "Bags and cases that you take with you when you travel.",
                "examples": [
                    "She has a lot of luggage."
                ]
            }
        ]
    },
    {
        "word": "neighbourhood",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "neighbourhoods",
        "definitions": [
            {
                "text": "The area around your home.",
                "examples": [
                    "We live in a safe neighbourhood."
                ]
            }
        ]
    },
    {
        "word": "community",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "👥",
        "form": "noun",
        "plural": "communities",
        "definitions": [
            {
                "text": "A group of people who live in the same area or share interests.",
                "examples": [
                    "She is active in her local community."
                ]
            }
        ]
    },
    {
        "word": "convenient",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "inconvenient",
        "definitions": [
            {
                "text": "Easy to use or suitable for what you need.",
                "examples": [
                    "Online shopping is very convenient."
                ]
            }
        ]
    },
    {
        "word": "stressful",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "relaxing",
        "definitions": [
            {
                "text": "Causing worry or anxiety.",
                "examples": [
                    "Her job is very stressful."
                ]
            }
        ]
    },
    {
        "word": "comfortable",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "uncomfortable",
        "definitions": [
            {
                "text": "Physically relaxed; not causing pain or difficulty.",
                "examples": [
                    "The office chair is comfortable."
                ]
            }
        ]
    },
    {
        "word": "practical",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "impractical",
        "definitions": [
            {
                "text": "Useful and sensible in real situations.",
                "examples": [
                    "A car is practical in the countryside."
                ]
            }
        ]
    },
    {
        "word": "popular",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "unpopular",
        "definitions": [
            {
                "text": "Liked or enjoyed by many people.",
                "examples": [
                    "This restaurant is very popular."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

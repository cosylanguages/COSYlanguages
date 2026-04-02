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
        ],
        "subtext": "painter, sculptor / talented artist"
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
        ],
        "subtext": "cook / head chef"
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
        ],
        "subtext": "medical nurse / care for patients"
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
        ],
        "subtext": "hamburger / fast food"
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
        ],
        "subtext": "Mexican food / spicy taco"
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
        ],
        "subtext": "healthy salad / green salad"
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
        ],
        "subtext": "cheddar, brie / piece of cheese"
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
        ],
        "subtext": "white rice / eat rice"
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
        ],
        "subtext": "red tomato / tomato sauce"
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
        ],
        "subtext": "mashed potato / baked potato"
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
        ],
        "subtext": "red wine / glass of wine"
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
        ],
        "subtext": "cold beer / bottle of beer"
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
        ],
        "subtext": "fizzy drink / soft drink"
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
        ],
        "subtext": "medical center / go to hospital"
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
        ],
        "subtext": "movie theater / go to the cinema"
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
        ],
        "subtext": "dining place / eat at a restaurant"
    },
    {
        "word": "supermarket",
        "level": "elementary",
        "theme": "shopping_for_food_A2",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermarkets",
        "definitions": [
            {
                "text": "A large shop that sells food and household goods.",
                "examples": [
                    "Example of supermarket here."
                ]
            }
        ],
        "subtext": "grocery store / go to the supermarket"
    },
    {
        "word": "dress",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "dresses",
        "definitions": [
            {
                "text": "A piece of clothing for women that covers the body and legs.",
                "examples": [
                    "Example of dress here."
                ]
            }
        ],
        "subtext": "wear a dress / beautiful dress"
    },
    {
        "word": "jacket",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "🧥",
        "form": "noun",
        "plural": "jackets",
        "definitions": [
            {
                "text": "A short coat.",
                "examples": [
                    "Example of jacket here."
                ]
            }
        ],
        "subtext": "outerwear / wear a jacket"
    },
    {
        "word": "skirt",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "skirts",
        "definitions": [
            {
                "text": "A piece of clothing for women that hangs from the waist.",
                "examples": [
                    "Example of skirt here."
                ]
            }
        ],
        "subtext": "short skirt / long skirt"
    },
    {
        "word": "sock",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "🧦",
        "form": "noun",
        "plural": "socks",
        "definitions": [
            {
                "text": "A piece of clothing that you wear on your foot inside your shoe.",
                "examples": [
                    "Example of sock here."
                ]
            }
        ],
        "subtext": "pair of socks / wear socks"
    },
    {
        "word": "sofa",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "sofas",
        "definitions": [
            {
                "text": "A long comfortable seat for more than one person.",
                "examples": [
                    "Example of sofa here."
                ]
            }
        ],
        "subtext": "couch / sit on the sofa"
    },
    {
        "word": "lamp",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "💡",
        "form": "noun",
        "plural": "lamps",
        "definitions": [
            {
                "text": "A device that produces light.",
                "examples": [
                    "Example of lamp here."
                ]
            }
        ],
        "subtext": "table lamp / turn on the lamp"
    },
    {
        "word": "desk",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "desks",
        "definitions": [
            {
                "text": "A type of table that you sit at to write or work.",
                "examples": [
                    "Example of desk here."
                ]
            }
        ],
        "subtext": "office desk / at the desk"
    },
    {
        "word": "wallet",
        "level": "elementary",
        "theme": "accessories_A1",
        "emoji": "👛",
        "form": "noun",
        "plural": "wallets",
        "definitions": [
            {
                "text": "A small flat case for carrying money and cards.",
                "examples": [
                    "Example of wallet here."
                ]
            }
        ],
        "subtext": "money holder / leather wallet"
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
        ],
        "subtext": "spectacles / wear glasses"
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
        ],
        "subtext": "king of the jungle / wild lion"
    },
    {
        "word": "tiger",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐯",
        "form": "noun",
        "plural": "tigers",
        "definitions": [
            {
                "text": "A large wild cat with orange fur and black stripes.",
                "examples": [
                    "Example of tiger here."
                ]
            }
        ],
        "subtext": "wild cat / striped tiger"
    },
    {
        "word": "horse",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐎",
        "form": "noun",
        "plural": "horses",
        "definitions": [
            {
                "text": "A large animal that people ride.",
                "examples": [
                    "Example of horse here."
                ]
            }
        ],
        "subtext": "ride a horse / fast horse"
    },
    {
        "word": "rabbit",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐇",
        "form": "noun",
        "plural": "rabbits",
        "definitions": [
            {
                "text": "A small animal with long ears and soft fur.",
                "examples": [
                    "Example of rabbit here."
                ]
            }
        ],
        "subtext": "bunny / pet rabbit"
    },
    {
        "word": "arm",
        "level": "elementary",
        "theme": "body_parts_A1",
        "emoji": "💪",
        "form": "noun",
        "plural": "arms",
        "definitions": [
            {
                "text": "The part of the body from the shoulder to the hand.",
                "examples": [
                    "Example of arm here."
                ]
            }
        ],
        "subtext": "upper limb / broken arm"
    },
    {
        "word": "finger",
        "level": "elementary",
        "theme": "body_parts_A1",
        "emoji": "☝️",
        "form": "noun",
        "plural": "fingers",
        "definitions": [
            {
                "text": "One of the five long parts at the end of your hand.",
                "examples": [
                    "Example of finger here."
                ]
            }
        ],
        "subtext": "index finger / point a finger"
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
        ],
        "subtext": "reporter / news journalist"
    },
    {
        "word": "streaming",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📺",
        "form": "noun",
        "plural": "streamings",
        "definitions": [
            {
                "text": "Watching or listening to content online without downloading.",
                "examples": [
                    "Example of streaming here."
                ]
            }
        ],
        "subtext": "live streaming / online video"
    },
    {
        "word": "gravity",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🍎",
        "form": "noun",
        "plural": "gravities",
        "definitions": [
            {
                "text": "The force that pulls objects toward the earth.",
                "examples": [
                    "Example of gravity here."
                ]
            }
        ],
        "subtext": "force of nature / laws of gravity"
    },
    {
        "word": "justice",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "justices",
        "definitions": [
            {
                "text": "Fair treatment under the law.",
                "examples": [
                    "Example of justice here."
                ]
            }
        ],
        "subtext": "legal justice / court of justice"
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
        ],
        "subtext": "environmental pollution / air pollution"
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
        ],
        "subtext": "higher education / go to university"
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
        ],
        "subtext": "regional food / local dishes"
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
        ],
        "subtext": "gift / travel souvenir"
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
        ],
        "subtext": "metropolis / big city"
    },
    {
        "word": "mouse",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "numberPlural": "many mouse",
        "answer": "many mice",
        "emoji": "🐭",
        "form": "noun",
        "plural": "mice",
        "definitions": [
            {
                "text": "A small animal with a long tail; or a computer device.",
                "examples": [
                    "Example of mouse here."
                ]
            }
        ],
        "subtext": "tiny mouse / computer mouse"
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
        ],
        "subtext": "extra hours / work overtime"
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
        ],
        "subtext": "career advancement / get a promotion"
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
        ],
        "subtext": "job interview / attend an interview"
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
        ],
        "subtext": "legal document / sign a contract"
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
        ],
        "subtext": "due date / meet a deadline"
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
        ],
        "subtext": "work experience / past experience"
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
        ],
        "subtext": "home loan / pay the mortgage"
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
        ],
        "subtext": "bank loan / take a loan"
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
        ],
        "subtext": "invoice / electricity bill"
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
        ],
        "subtext": "owe money / in debt"
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
        ],
        "subtext": "bank account / open an account"
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
        ],
        "subtext": "financial plan / monthly budget"
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
        ],
        "subtext": "healthy diet / on a diet"
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
        ],
        "subtext": "meeting / doctor's appointment"
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
        ],
        "subtext": "health supplement / take vitamins"
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
        ],
        "subtext": "physical pain / back pain"
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
        ],
        "subtext": "assistance / offer support"
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
        ],
        "subtext": "confidence / mutual trust"
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
        ],
        "subtext": "middle ground / reach a compromise"
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
        ],
        "subtext": "travel / long journey"
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
        ],
        "subtext": "overseas / travel abroad"
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
        ],
        "subtext": "final destination / reach your destination"
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
        ],
        "subtext": "airplane trip / book a flight"
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
        ],
        "subtext": "baggage / carry luggage"
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
        ],
        "subtext": "local area / friendly neighbourhood"
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
        ],
        "subtext": "local community / share interests"
    },
    {
        "word": "architect",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "architects",
        "definitions": [
            {
                "text": "A person who designs buildings and advises on their construction.",
                "examples": [
                    "Example of architect here."
                ]
            }
        ],
        "subtext": "building designer / professional architect"
    },
    {
        "word": "dentist",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "dentists",
        "definitions": [
            {
                "text": "A person who is qualified to treat the diseases and conditions that affect the teeth and gums.",
                "examples": [
                    "Example of dentist here."
                ]
            }
        ],
        "subtext": "dental professional / visit the dentist"
    },
    {
        "word": "engineer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⚙️",
        "form": "noun",
        "plural": "engineers",
        "definitions": [
            {
                "text": "A person who designs, builds, or maintains engines, machines, or public works.",
                "examples": [
                    "Example of engineer here."
                ]
            }
        ],
        "subtext": "technical professional / mechanical engineer"
    },
    {
        "word": "lawyer",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "lawyers",
        "definitions": [
            {
                "text": "A person who practices or studies law; an attorney or a counselor.",
                "examples": [
                    "Example of lawyer here."
                ]
            }
        ],
        "subtext": "legal professional / consult a lawyer"
    },
    {
        "word": "receptionist",
        "level": "elementary",
        "theme": "job_titles_professions_A1",
        "emoji": "☎️",
        "form": "noun",
        "plural": "receptionists",
        "definitions": [
            {
                "text": "A person who greets visitors and answers the telephone in an office.",
                "examples": [
                    "Example of receptionist here."
                ]
            }
        ],
        "subtext": "front desk / friendly receptionist"
    },
    {
        "word": "mechanic",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔧",
        "form": "noun",
        "plural": "mechanics",
        "definitions": [
            {
                "text": "A person who repairs and maintains machinery, especially motors.",
                "examples": [
                    "Example of mechanic here."
                ]
            }
        ],
        "subtext": "car mechanic / skilled mechanic"
    },
    {
        "word": "pharmacy",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "💊",
        "form": "noun",
        "plural": "pharmacys",
        "definitions": [
            {
                "text": "A shop where medicinal drugs are dispensed and sold.",
                "examples": [
                    "Example of pharmacy here."
                ]
            }
        ],
        "subtext": "drugstore / go to the pharmacy"
    },
    {
        "word": "stadium",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🏟️",
        "form": "noun",
        "plural": "stadiums",
        "definitions": [
            {
                "text": "A large closed area used for sports and other public events.",
                "examples": [
                    "Example of stadium here."
                ]
            }
        ],
        "subtext": "sports arena / football stadium"
    },
    {
        "word": "balcony",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "balconys",
        "definitions": [
            {
                "text": "A platform on the outside of a building, with a wall or rail around it.",
                "examples": [
                    "Example of balcony here."
                ]
            }
        ],
        "subtext": "outdoor space / sit on the balcony"
    },
    {
        "word": "garage",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🚗",
        "form": "noun",
        "plural": "garages",
        "definitions": [
            {
                "text": "A building or indoor area where a car is kept.",
                "examples": [
                    "Example of garage here."
                ]
            }
        ],
        "subtext": "parking space / car garage"
    },
    {
        "word": "ceiling",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🏠",
        "form": "noun",
        "plural": "ceilings",
        "definitions": [
            {
                "text": "The upper interior surface of a room.",
                "examples": [
                    "Example of ceiling here."
                ]
            }
        ],
        "subtext": "roof interior / high ceiling"
    },
    {
        "word": "curtain",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "curtains",
        "definitions": [
            {
                "text": "A piece of material suspended as a screen at a window.",
                "examples": [
                    "Example of curtain here."
                ]
            }
        ],
        "subtext": "drapes / close the curtains"
    },
    {
        "word": "dishwasher",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🧼",
        "form": "noun",
        "plural": "dishwashers",
        "definitions": [
            {
                "text": "A machine for cleaning dishes automatically.",
                "examples": [
                    "Example of dishwasher here."
                ]
            }
        ],
        "subtext": "kitchen appliance / load the dishwasher"
    },
    {
        "word": "microwave",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🔥",
        "form": "noun",
        "plural": "microwaves",
        "definitions": [
            {
                "text": "An electric oven that cooks or heats food very quickly.",
                "examples": [
                    "Example of microwave here."
                ]
            }
        ],
        "subtext": "kitchen equipment / heat in the microwave"
    },
    {
        "word": "refrigerator",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🧊",
        "form": "noun",
        "plural": "refrigerators",
        "definitions": [
            {
                "text": "A large electric cupboard that keeps food cold.",
                "examples": [
                    "Example of refrigerator here."
                ]
            }
        ],
        "subtext": "fridge / cold storage"
    },
    {
        "word": "vacuum cleaner",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🧹",
        "form": "noun",
        "plural": "vacuum cleaners",
        "definitions": [
            {
                "text": "An electrical machine for cleaning floors by sucking up dirt.",
                "examples": [
                    "Example of vacuum cleaner here."
                ]
            }
        ],
        "subtext": "hoover / use the vacuum cleaner"
    },
    {
        "word": "earthquake",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🌋",
        "form": "noun",
        "plural": "earthquakes",
        "definitions": [
            {
                "text": "A sudden violent shaking of the ground, causing great destruction.",
                "examples": [
                    "Example of earthquake here."
                ]
            }
        ],
        "subtext": "natural disaster / seismic activity"
    },
    {
        "word": "flood",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🌊",
        "form": "noun",
        "plural": "floods",
        "definitions": [
            {
                "text": "An overflow of a large amount of water beyond its normal limits.",
                "examples": [
                    "Example of flood here."
                ]
            }
        ],
        "subtext": "natural disaster / heavy rain"
    },
    {
        "word": "climate",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "🌍",
        "form": "noun",
        "plural": "climates",
        "definitions": [
            {
                "text": "The general weather conditions in a particular area.",
                "examples": [
                    "Example of climate here."
                ]
            }
        ],
        "subtext": "weather patterns / climate change"
    },
    {
        "word": "environment",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌳",
        "form": "noun",
        "plural": "environments",
        "definitions": [
            {
                "text": "The surroundings or conditions in which a person, animal, or plant lives.",
                "examples": [
                    "Example of environment here."
                ]
            }
        ],
        "subtext": "nature / protect the environment"
    },
    {
        "word": "conservation",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🐼",
        "form": "noun",
        "plural": "conservations",
        "definitions": [
            {
                "text": "The protection of plants, animals, and natural areas.",
                "examples": [
                    "Example of conservation here."
                ]
            }
        ],
        "subtext": "nature protection / wildlife conservation"
    },
    {
        "word": "sustainability",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "noun",
        "plural": "sustainabilitys",
        "definitions": [
            {
                "text": "The quality of being able to continue over a long period.",
                "examples": [
                    "Example of sustainability here."
                ]
            }
        ],
        "subtext": "eco-friendly / environmental sustainability"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
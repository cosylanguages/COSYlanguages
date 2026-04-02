(function() {
    const data = [
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
        "subtext": "hamburger / fast food",
        "countability": "countable"
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
        "subtext": "Mexican food / spicy taco",
        "countability": "countable"
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
        "subtext": "reporter / news journalist",
        "countability": "countable"
    },
    {
        "word": "streaming",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📺",
        "form": "noun",
        "definitions": [
            {
                "text": "Watching or listening to content online without downloading.",
                "examples": [
                    "Streaming music is very convenient.",
                    "I use several streaming services."
                ]
            }
        ],
        "subtext": "live streaming / online video",
        "countability": "uncountable"
    },
    {
        "word": "gravity",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🍎",
        "form": "noun",
        "definitions": [
            {
                "text": "The force that pulls objects toward the earth.",
                "examples": [
                    "Gravity keeps us on the ground.",
                    "The Moon has less gravity than the Earth."
                ]
            }
        ],
        "subtext": "force of nature / laws of gravity",
        "countability": "uncountable"
    },
    {
        "word": "justice",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚖️",
        "form": "noun",
        "definitions": [
            {
                "text": "Fair treatment under the law.",
                "examples": [
                    "They are fighting for social justice.",
                    "The court must provide justice for everyone."
                ]
            }
        ],
        "subtext": "legal justice / court of justice",
        "countability": "uncountable",
        "opposite": "injustice"
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
        "subtext": "regional food / local dishes",
        "countability": "countable"
    },
    {
        "word": "souvenir",
        "level": "elementary",
        "theme": "holiday_types_A2",
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
        "subtext": "gift / travel souvenir",
        "countability": "countable"
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
                    "She works overtime to finish the project.",
                    "I get paid more for working overtime."
                ]
            }
        ],
        "subtext": "extra hours / work overtime",
        "countability": "uncountable"
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
        "subtext": "career advancement / get a promotion",
        "countability": "countable",
        "opposite": "demotion"
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
        "subtext": "job interview / attend an interview",
        "countability": "countable"
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
        "subtext": "legal document / sign a contract",
        "countability": "countable"
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
        "subtext": "due date / meet a deadline",
        "countability": "countable"
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
        "subtext": "work experience / past experience",
        "countability": "uncountable"
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
        "subtext": "home loan / pay the mortgage",
        "countability": "countable"
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
        "subtext": "bank loan / take a loan",
        "countability": "countable"
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
        "subtext": "owe money / in debt",
        "countability": "uncountable"
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
        "subtext": "bank account / open an account",
        "countability": "countable"
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
        "subtext": "financial plan / monthly budget",
        "countability": "countable"
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
        "subtext": "healthy diet / on a diet",
        "countability": "countable"
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
        "subtext": "health supplement / take vitamins",
        "countability": "countable"
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
        "subtext": "assistance / offer support",
        "countability": "uncountable"
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
        "subtext": "confidence / mutual trust",
        "countability": "uncountable"
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
        "subtext": "middle ground / reach a compromise",
        "countability": "countable"
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
        "subtext": "travel / long journey",
        "countability": "countable"
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
        "subtext": "final destination / reach your destination",
        "countability": "countable"
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
        "subtext": "airplane trip / book a flight",
        "countability": "countable"
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
        "subtext": "baggage / carry luggage",
        "countability": "uncountable"
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
        "subtext": "local area / friendly neighbourhood",
        "countability": "countable"
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
        "subtext": "local community / share interests",
        "countability": "countable"
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
                    "He is a mechanical engineer.",
                    "The engineer is checking the system."
                ]
            }
        ],
        "subtext": "technical professional / mechanical engineer",
        "countability": "countable"
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
                    "You should talk to a lawyer.",
                    "She is a successful lawyer."
                ]
            }
        ],
        "subtext": "legal professional / consult a lawyer",
        "countability": "countable"
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
                    "The earthquake destroyed many buildings.",
                    "They felt the earthquake in the morning."
                ]
            }
        ],
        "subtext": "natural disaster / seismic activity",
        "countability": "countable"
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
                    "The heavy rain caused a flood.",
                    "They had to leave their home during the flood."
                ]
            }
        ],
        "subtext": "natural disaster / heavy rain",
        "countability": "countable"
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
                    "I prefer a warm climate.",
                    "Climate change is a global issue."
                ]
            }
        ],
        "subtext": "weather patterns / climate change",
        "countability": "countable"
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
                    "We must protect the environment.",
                    "He works in a friendly environment."
                ]
            }
        ],
        "subtext": "nature / protect the environment",
        "countability": "countable"
    },
    {
        "word": "conservation",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🐼",
        "form": "noun",
        "definitions": [
            {
                "text": "The protection of plants, animals, and natural areas.",
                "examples": [
                    "Conservation of wildlife is very important.",
                    "She is interested in forest conservation."
                ]
            }
        ],
        "subtext": "nature protection / wildlife conservation",
        "countability": "uncountable"
    },
    {
        "word": "sustainability",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "noun",
        "definitions": [
            {
                "text": "The quality of being able to continue over a long period.",
                "examples": [
                    "The company focuses on environmental sustainability.",
                    "Sustainability is key to our future."
                ]
            }
        ],
        "subtext": "eco-friendly / environmental sustainability",
        "countability": "uncountable"
    },
    {
        "word": "receipt",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🧾",
        "form": "noun",
        "plural": "receipts",
        "subtext": "keep a receipt",
        "definitions": [
            {
                "text": "A piece of paper that shows you have paid for something.",
                "examples": [
                    "Can I have a receipt, please?"
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "salary",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "noun",
        "plural": "salaries",
        "subtext": "pay, income",
        "definitions": [
            {
                "text": "The money a person earns from their job each month.",
                "examples": [
                    "Her salary is good.",
                    "The job has a high salary."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "relationship",
        "level": "elementary",
        "theme": "relationships_family_A2",
        "emoji": "👫",
        "form": "noun",
        "plural": "relationships",
        "definitions": [
            {
                "text": "A connection between two people.",
                "examples": [
                    "They have a good relationship."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to family life"
    },
    {
        "word": "nationality",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🏳️",
        "form": "noun",
        "plural": "nationalities",
        "definitions": [
            {
                "text": "The state of belonging to a particular nation.",
                "examples": [
                    "What is your nationality?",
                    "He has British nationality."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to personal identity"
    },
    {
        "word": "occupation",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💼",
        "form": "noun",
        "plural": "occupations",
        "subtext": "job, profession",
        "definitions": [
            {
                "text": "A person's job or profession.",
                "examples": [
                    "What is your occupation?",
                    "Please state your occupation on the form."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "application",
        "level": "elementary",
        "theme": "school_life_routines_A2",
        "emoji": "📝",
        "form": "noun",
        "plural": "applications",
        "subtext": "apply for, job application",
        "definitions": [
            {
                "text": "A formal request to be considered for a position or to be allowed to do something.",
                "examples": [
                    "She sent an application for the new job."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "bill",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💵",
        "form": "noun",
        "plural": "bills",
        "subtext": "pay a bill",
        "definitions": [
            {
                "text": "A piece of paper that shows how much money you must pay for something.",
                "examples": [
                    "I need to pay the phone bill."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "nurse",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "nurses",
        "subtext": "hospital nurse, school nurse",
        "definitions": [
            {
                "text": "A person trained to care for sick or injured people.",
                "examples": [
                    "The nurse checks your blood pressure."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "chef",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chefs",
        "subtext": "restaurant chef, head chef",
        "definitions": [
            {
                "text": "A professional cook, especially the head cook in a restaurant.",
                "examples": [
                    "The chef makes excellent food."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "pharmacy",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "💊",
        "form": "noun",
        "plural": "pharmacies",
        "definitions": [
            {
                "text": "A shop where you can buy medicine.",
                "examples": [
                    "I need to go to the pharmacy for some aspirin."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to local places services"
    },
    {
        "word": "artist",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artists",
        "definitions": [
            {
                "text": "A person who creates art, such as paintings or sculptures.",
                "examples": [
                    "She is a talented artist."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions"
    },
    {
        "word": "wallet",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "👛",
        "form": "noun",
        "plural": "wallets",
        "definitions": [
            {
                "text": "A small flat case used for carrying money and cards.",
                "examples": [
                    "I have no money in my wallet."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to everyday shopping"
    },
    {
        "word": "tiger",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🐅",
        "form": "noun",
        "plural": "tigers",
        "definitions": [
            {
                "text": "A large wild cat with orange fur and black stripes.",
                "examples": [
                    "Tigers live in Asia."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals"
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
                "text": "A building where you keep a car.",
                "examples": [
                    "The car is in the garage."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home"
    },
    {
        "word": "stadium",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🏟️",
        "form": "noun",
        "plural": "stadiums",
        "definitions": [
            {
                "text": "A large building with rows of seats around a sports field.",
                "examples": [
                    "The stadium was full."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to places culture leisure"
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
                "text": "The top surface of a room.",
                "examples": [
                    "There is a light on the ceiling."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home"
    },
    {
        "word": "mechanic",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧑‍🔧",
        "form": "noun",
        "plural": "mechanics",
        "definitions": [
            {
                "text": "A person whose job is repairing machines, especially the engines of vehicles.",
                "examples": [
                    "The mechanic is fixing my car."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions"
    },
    {
        "word": "balcony",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "balconies",
        "definitions": [
            {
                "text": "An area with a wall or bars around it that is joined to the outside wall of a building on an upper level.",
                "examples": [
                    "We have flowers on our balcony."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home"
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
                "text": "A machine that washes dishes.",
                "examples": [
                    "Load the dishwasher after dinner."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items"
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
                "text": "A machine that cleans floors by sucking up dirt.",
                "examples": [
                    "I need to use the vacuum cleaner on the rug."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items"
    },
    {
        "word": "appointment",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "📅",
        "form": "noun",
        "plural": "appointments",
        "subtext": "doctor's appointment",
        "definitions": [
            {
                "text": "A formal arrangement to meet or visit someone at a particular time and place.",
                "examples": [
                    "I have an appointment with the doctor at ten o'clock."
                ]
            }
        ],
        "countability": "countable"
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
                "text": "A piece of cloth that hangs across a window.",
                "examples": [
                    "Close the curtains, please."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items"
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
                "text": "An electric oven that uses waves of energy to cook or heat food very quickly.",
                "examples": [
                    "Put the soup in the microwave."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items"
    },
    {
        "word": "half",
        "level": "elementary",
        "theme": "fractions_A2",
        "emoji": "½",
        "form": "noun",
        "definitions": [
            {
                "text": "One of two equal parts of something.",
                "examples": [
                    "Cut the apple in half.",
                    "She ate half of the sandwich."
                ]
            }
        ],
        "subtext": "divided by two",
        "countability": "countable"
    },
    {
        "word": "quarter",
        "level": "elementary",
        "theme": "fractions_A2",
        "emoji": "¼",
        "form": "noun",
        "definitions": [
            {
                "text": "One of four equal parts of something.",
                "examples": [
                    "A quarter of an hour is fifteen minutes.",
                    "The recipe calls for a quarter cup of milk."
                ]
            }
        ],
        "subtext": "divided by four",
        "countability": "countable"
    },
    {
        "word": "plus",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "➕",
        "form": "preposition",
        "definitions": [
            {
                "text": "With the addition of.",
                "examples": [
                    "Two plus two is four.",
                    "The cost is ten euros plus tax."
                ]
            }
        ],
        "subtext": "addition / and"
    },
    {
        "word": "minus",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "➖",
        "form": "preposition",
        "definitions": [
            {
                "text": "With the subtraction of.",
                "examples": [
                    "Ten minus three is seven.",
                    "The temperature was minus five degrees."
                ]
            }
        ],
        "subtext": "subtraction / less"
    },
    {
        "word": "total",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "🟰",
        "form": "noun",
        "definitions": [
            {
                "text": "The final amount after adding everything together.",
                "examples": [
                    "What is the total cost?",
                    "The total number of students is twenty."
                ]
            }
        ],
        "subtext": "sum / final amount",
        "countability": "countable"
    },
    {
        "word": "gym",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "🏋️",
        "form": "noun",
        "definitions": [
            {
                "text": "A place where people go to exercise.",
                "examples": [
                    "I go to the gym three times a week.",
                    "The gym has new equipment."
                ]
            }
        ],
        "subtext": "fitness center / workout place",
        "countability": "countable"
    },
    {
        "word": "workout",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "noun",
        "definitions": [
            {
                "text": "A period of physical exercise.",
                "examples": [
                    "I had a great workout this morning.",
                    "He does a daily workout at home."
                ]
            }
        ],
        "subtext": "exercise session / training",
        "countability": "countable"
    },
    {
        "word": "boarding pass",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🎫",
        "form": "noun",
        "definitions": [
            {
                "text": "A document that allows you to get on a plane.",
                "examples": [
                    "Please show your boarding pass at the gate.",
                    "I have my boarding pass on my phone."
                ]
            }
        ],
        "subtext": "flight ticket / travel document",
        "countability": "countable"
    },
    {
        "word": "terminal",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🏢",
        "form": "noun",
        "definitions": [
            {
                "text": "A building at an airport where passengers arrive and depart.",
                "examples": [
                    "Our flight leaves from Terminal 3.",
                    "The airport has five terminals."
                ]
            }
        ],
        "subtext": "airport building / departure terminal",
        "countability": "countable"
    },
    {
        "word": "upload",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📤",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of sending data from a computer to the internet.",
                "examples": [
                    "The upload took a long time.",
                    "I'm waiting for the video upload to finish."
                ]
            }
        ],
        "subtext": "send data / online upload",
        "countability": "countable",
        "opposite": "download"
    },
    {
        "word": "download",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📥",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of receiving data from the internet to a computer.",
                "examples": [
                    "The download is complete.",
                    "You can find the file in your downloads folder."
                ]
            }
        ],
        "subtext": "receive data / offline download",
        "countability": "countable",
        "opposite": "upload"
    },
    {
        "word": "article",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📄",
        "form": "noun",
        "definitions": [
            {
                "text": "A piece of writing in a newspaper, magazine, or website.",
                "examples": [
                    "I read an interesting article about space.",
                    "She wrote an article for the local paper."
                ]
            }
        ],
        "subtext": "news story / report",
        "countability": "countable"
    },
    {
        "word": "headline",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📰",
        "form": "noun",
        "definitions": [
            {
                "text": "The title of a news story, printed in large letters.",
                "examples": [
                    "The headline caught my attention.",
                    "Check the morning headlines."
                ]
            }
        ],
        "subtext": "news title / front page headline",
        "countability": "countable"
    },
    {
        "word": "podcast",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🎙️",
        "form": "noun",
        "definitions": [
            {
                "text": "A digital audio program available on the internet.",
                "examples": [
                    "I listen to podcasts while I commute.",
                    "This is a popular comedy podcast."
                ]
            }
        ],
        "subtext": "audio show / online radio",
        "countability": "countable"
    },
    {
        "word": "advertisement",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📺",
        "form": "noun",
        "definitions": [
            {
                "text": "A picture, short film, or piece of text that tries to sell a product.",
                "examples": [
                    "I saw an advertisement for a new car.",
                    "There are too many advertisements on TV."
                ]
            }
        ],
        "subtext": "ad / commercial",
        "countability": "countable"
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
        "subtext": "environmental pollution / air pollution",
        "countability": "uncountable"
    },
    {
        "word": "recycling",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of collecting and changing old paper, glass, plastic, etc. so it can be used again.",
                "examples": [
                    "Put the bottles in the recycling bin.",
                    "Recycling helps protect the environment."
                ]
            }
        ],
        "subtext": "waste management / eco-friendly",
        "countability": "uncountable"
    },
    {
        "word": "energy",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "⚡",
        "form": "noun",
        "definitions": [
            {
                "text": "Power derived from physical or chemical resources to provide light and heat.",
                "examples": [
                    "We need to save energy at home.",
                    "Solar energy is good for the environment."
                ]
            }
        ],
        "subtext": "power / electricity",
        "countability": "uncountable"
    },
    {
        "word": "nature",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🌿",
        "form": "noun",
        "definitions": [
            {
                "text": "The physical world and everything in it, such as plants, animals, and mountains.",
                "examples": [
                    "I love spending time in nature.",
                    "We should respect nature."
                ]
            }
        ],
        "subtext": "natural world / wildlife",
        "countability": "uncountable"
    },
    {
        "word": "forest",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🌲",
        "form": "noun",
        "definitions": [
            {
                "text": "A large area of land covered with trees.",
                "examples": [
                    "They went for a walk in the forest.",
                    "The forest is home to many animals."
                ]
            }
        ],
        "subtext": "woods / jungle",
        "countability": "countable"
    },
    {
        "word": "ocean",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🌊",
        "form": "noun",
        "definitions": [
            {
                "text": "The very large area of salt water that covers most of the Earth's surface.",
                "examples": [
                    "The Pacific is the largest ocean.",
                    "The ocean is very deep."
                ]
            }
        ],
        "subtext": "sea / deep blue",
        "countability": "countable"
    },
    {
        "word": "island",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🏝️",
        "form": "noun",
        "definitions": [
            {
                "text": "A piece of land completely surrounded by water.",
                "examples": [
                    "They live on a small island.",
                    "We took a boat to the island."
                ]
            }
        ],
        "subtext": "land in water / tropical island",
        "countability": "countable"
    },
    {
        "word": "mountain",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "⛰️",
        "form": "noun",
        "definitions": [
            {
                "text": "A very high hill.",
                "examples": [
                    "They climbed the mountain.",
                    "The mountain peak is covered in snow."
                ]
            }
        ],
        "subtext": "high hill / peak",
        "countability": "countable"
    },
    {
        "word": "valley",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🏞️",
        "form": "noun",
        "definitions": [
            {
                "text": "An area of low land between hills or mountains.",
                "examples": [
                    "The village is in a beautiful valley.",
                    "A river flows through the valley."
                ]
            }
        ],
        "subtext": "low land / canyon",
        "countability": "countable"
    },
    {
        "word": "desert",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🏜️",
        "form": "noun",
        "definitions": [
            {
                "text": "A large, dry area of land with very few plants.",
                "examples": [
                    "The Sahara is a famous desert.",
                    "It is very hot in the desert."
                ]
            }
        ],
        "subtext": "dry land / sandy desert",
        "countability": "countable"
    },
    {
        "word": "coast",
        "level": "elementary",
        "theme": "landscape_geography_A2",
        "emoji": "🏖️",
        "form": "noun",
        "definitions": [
            {
                "text": "The part of the land next to the sea.",
                "examples": [
                    "They live on the south coast.",
                    "We walked along the coast."
                ]
            }
        ],
        "subtext": "seashore / coastline",
        "countability": "countable"
    },
    {
        "word": "border",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🚧",
        "form": "noun",
        "definitions": [
            {
                "text": "The line that separates two countries.",
                "examples": [
                    "We crossed the border into Spain.",
                    "The river forms the border between the two nations."
                ]
            }
        ],
        "subtext": "boundary / frontier",
        "countability": "countable"
    },
    {
        "word": "capital",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🏛️",
        "form": "noun",
        "definitions": [
            {
                "text": "The city where the government of a country is located.",
                "examples": [
                    "Paris is the capital of France.",
                    "London is a major capital city."
                ]
            }
        ],
        "subtext": "main city / government seat",
        "countability": "countable"
    },
    {
        "word": "region",
        "level": "elementary",
        "theme": "places_geography_A2",
        "emoji": "🗺️",
        "form": "noun",
        "definitions": [
            {
                "text": "A particular area in a country or the world.",
                "examples": [
                    "This region is famous for its wine.",
                    "The northern region of the country is very cold."
                ]
            }
        ],
        "subtext": "area / district",
        "countability": "countable"
    },
    {
        "word": "population",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "👨‍👩‍👧‍👦",
        "form": "noun",
        "definitions": [
            {
                "text": "The number of people living in a particular area.",
                "examples": [
                    "The world population is growing.",
                    "The city has a population of over one million."
                ]
            }
        ],
        "subtext": "number of people / inhabitants",
        "countability": "countable"
    },
    {
        "word": "highway",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🛣️",
        "form": "noun",
        "definitions": [
            {
                "text": "A main road, especially one connecting major towns or cities.",
                "examples": [
                    "We drove along the highway for three hours.",
                    "The highway was very busy this morning."
                ]
            }
        ],
        "subtext": "main road / motorway",
        "countability": "countable"
    },
    {
        "word": "driving license",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🪪",
        "form": "noun",
        "definitions": [
            {
                "text": "An official document that shows you are qualified to drive a vehicle.",
                "examples": [
                    "You must carry your driving license while driving.",
                    "He passed his test and got his driving license."
                ]
            }
        ],
        "subtext": "driver's permit / ID",
        "countability": "countable"
    },
    {
        "word": "roundabout",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🔄",
        "form": "noun",
        "definitions": [
            {
                "text": "A place where three or more roads join and traffic must go around a central island.",
                "examples": [
                    "Take the second exit at the roundabout.",
                    "There is a lot of traffic at the roundabout."
                ]
            }
        ],
        "subtext": "traffic circle / intersection",
        "countability": "countable"
    },
    {
        "word": "parking lot",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🅿️",
        "form": "noun",
        "definitions": [
            {
                "text": "An area where cars can be left.",
                "examples": [
                    "The parking lot was full.",
                    "Meet me in the parking lot behind the building."
                ]
            }
        ],
        "subtext": "car park / parking area",
        "countability": "countable"
    },
    {
        "word": "traffic jam",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🚗🚙🚕",
        "form": "noun",
        "definitions": [
            {
                "text": "A large number of vehicles close together and unable to move or moving very slowly.",
                "examples": [
                    "I was late because of a traffic jam.",
                    "We were stuck in a traffic jam for an hour."
                ]
            }
        ],
        "subtext": "heavy traffic / congestion",
        "countability": "countable"
    },
    {
        "word": "insurance",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🛡️",
        "form": "noun",
        "definitions": [
            {
                "text": "An agreement in which you pay a company money and they pay your costs if you have an accident, injury, etc.",
                "examples": [
                    "Do you have car insurance?",
                    "Health insurance is very expensive."
                ]
            }
        ],
        "subtext": "protection / coverage",
        "countability": "uncountable"
    },
    {
        "word": "pension",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "👴",
        "form": "noun",
        "definitions": [
            {
                "text": "An amount of money paid regularly by the government or a private company to a person who does not work anymore because they are too old or ill.",
                "examples": [
                    "He lives on a small pension.",
                    "She will get her pension when she reaches sixty-five."
                ]
            }
        ],
        "subtext": "retirement fund / old age pay",
        "countability": "countable"
    },
    {
        "word": "tax",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "noun",
        "definitions": [
            {
                "text": "Money paid to the government that is used to pay for public services.",
                "examples": [
                    "How much income tax do you pay?",
                    "The price includes tax."
                ]
            }
        ],
        "subtext": "government levy / duty",
        "countability": "countable"
    },
    {
        "word": "decimal point",
        "level": "elementary",
        "theme": "decimals_A2",
        "emoji": "🔢",
        "form": "noun",
        "definitions": [
            {
                "text": "The dot used to separate the whole number part from the fractional part of a decimal number.",
                "examples": [
                    "Put the decimal point in the correct place.",
                    "The number is five point five."
                ]
            }
        ],
        "subtext": "dot in numbers",
        "countability": "countable"
    },
    {
        "word": "percent",
        "level": "elementary",
        "theme": "percentages_A2",
        "emoji": "%",
        "form": "noun",
        "definitions": [
            {
                "text": "For every one hundred.",
                "examples": [
                    "Ten percent of the students are absent.",
                    "The price increased by five percent."
                ]
            }
        ],
        "subtext": "per hundred / percentage",
        "countability": "uncountable"
    },
    {
        "word": "wedding",
        "level": "elementary",
        "theme": "marriage_partnership_A2",
        "emoji": "💒",
        "form": "noun",
        "definitions": [
            {
                "text": "A marriage ceremony and any celebrations that follow it.",
                "examples": [
                    "We are going to a wedding on Saturday.",
                    "The wedding was very beautiful."
                ]
            }
        ],
        "subtext": "marriage ceremony",
        "countability": "countable"
    },
    {
        "word": "tenant",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🔑",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who pays rent for the use of land or a building.",
                "examples": [
                    "The tenant moves in next week.",
                    "The landlord fixed the leak for the tenant."
                ]
            }
        ],
        "subtext": "renter",
        "countability": "countable",
        "opposite": "landlord"
    },
    {
        "word": "deposit",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "An amount of money that you pay as the first part of the total cost of something.",
                "examples": [
                    "We paid a deposit for the flat.",
                    "You will get your deposit back when you leave."
                ]
            }
        ],
        "subtext": "down payment / security payment",
        "countability": "countable"
    },
    {
        "word": "degree",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "🎓",
        "form": "noun",
        "definitions": [
            {
                "text": "A course of study at a college or university, or the qualification given to a student after completing it.",
                "examples": [
                    "She has a degree in history.",
                    "I want to get a university degree."
                ]
            }
        ],
        "subtext": "university qualification",
        "countability": "countable"
    },
    {
        "word": "reception",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "🛎️",
        "form": "noun",
        "definitions": [
            {
                "text": "The place in a hotel or office building where people go when they first arrive.",
                "examples": [
                    "Please leave your key at reception.",
                    "The reception desk is open twenty-four hours."
                ]
            }
        ],
        "subtext": "front desk",
        "countability": "uncountable"
    },
    {
        "word": "interest rate",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📈",
        "form": "noun",
        "definitions": [
            {
                "text": "The percentage amount that a bank charges you when you borrow money, or pays you when you keep money in an account.",
                "examples": [
                    "The interest rate on my loan is high.",
                    "Banks are offering low interest rates."
                ]
            }
        ],
        "subtext": "bank percentage",
        "countability": "countable"
    },
    {
        "word": "aisle",
        "level": "elementary",
        "theme": "shopping_for_food_A2",
        "emoji": "🛒",
        "form": "noun",
        "definitions": [
            {
                "text": "A long, narrow space between rows of shelves in a shop.",
                "examples": [
                    "The bread is in aisle five.",
                    "You can find the juice in the next aisle."
                ]
            }
        ],
        "subtext": "passage in a shop",
        "countability": "countable"
    },
    {
        "word": "trolley",
        "level": "elementary",
        "theme": "shopping_for_food_A2",
        "emoji": "🛒",
        "form": "noun",
        "definitions": [
            {
                "text": "A small vehicle with wheels that you push and use for carrying things in a supermarket.",
                "examples": [
                    "Put the groceries in the trolley.",
                    "The trolley is full."
                ]
            }
        ],
        "subtext": "shopping cart",
        "countability": "countable"
    },
    {
        "word": "ingredient",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥕",
        "form": "noun",
        "definitions": [
            {
                "text": "One of the foods that you use to make a particular food or dish.",
                "examples": [
                    "Mix all the ingredients together.",
                    "The main ingredient is flour."
                ]
            }
        ],
        "subtext": "food component",
        "countability": "countable"
    },
    {
        "word": "recipe",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "📖",
        "form": "noun",
        "definitions": [
            {
                "text": "A set of instructions telling you how to cook something.",
                "examples": [
                    "I have a great recipe for chocolate cake.",
                    "Follow the recipe carefully."
                ]
            }
        ],
        "subtext": "cooking instructions",
        "countability": "countable"
    },
    {
        "word": "gym",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "🏋️",
        "form": "noun",
        "definitions": [
            {
                "text": "A place where people go to exercise.",
                "examples": [
                    "I go to the gym every morning.",
                    "The gym is near my house."
                ]
            }
        ],
        "subtext": "fitness centre",
        "countability": "countable"
    },
    {
        "word": "yoga",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "🧘",
        "form": "noun",
        "definitions": [
            {
                "text": "A set of physical and mental exercises intended to give control over the body and mind.",
                "examples": [
                    "She does yoga twice a week.",
                    "Yoga is very relaxing."
                ]
            }
        ],
        "subtext": "stretching exercise",
        "countability": "uncountable"
    },
    {
        "word": "competition",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🏆",
        "form": "noun",
        "definitions": [
            {
                "text": "An organized event in which people try to win a prize by being the best.",
                "examples": [
                    "He won the swimming competition.",
                    "There is a photography competition next month."
                ]
            }
        ],
        "subtext": "contest",
        "countability": "countable"
    },
    {
        "word": "instrument",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎸",
        "form": "noun",
        "definitions": [
            {
                "text": "An object, such as a piano, guitar, or drum, that is played to produce musical sounds.",
                "examples": [
                    "Do you play a musical instrument?",
                    "The piano is a difficult instrument to learn."
                ]
            }
        ],
        "subtext": "musical object",
        "countability": "countable"
    },
    {
        "word": "hobby",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🧩",
        "form": "noun",
        "definitions": [
            {
                "text": "An activity that you enjoy doing in your free time.",
                "examples": [
                    "My main hobby is gardening.",
                    "Collecting stamps is an unusual hobby."
                ]
            }
        ],
        "subtext": "leisure activity",
        "countability": "countable"
    },
    {
        "word": "tourist",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "📸",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who is visiting a place for pleasure.",
                "examples": [
                    "The city is full of tourists in summer.",
                    "I am a tourist in Paris."
                ]
            }
        ],
        "subtext": "traveler / visitor",
        "countability": "countable"
    },
    {
        "word": "guidebook",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "📕",
        "form": "noun",
        "definitions": [
            {
                "text": "A book that gives information about a place for visitors.",
                "examples": [
                    "I bought a guidebook for Rome.",
                    "The guidebook has a good map."
                ]
            }
        ],
        "subtext": "travel book",
        "countability": "countable"
    },
    {
        "word": "sightseeing",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🏛️",
        "form": "noun",
        "definitions": [
            {
                "text": "The activity of visiting interesting places, especially by people on holiday.",
                "examples": [
                    "We did a lot of sightseeing in London.",
                    "Let's go sightseeing tomorrow."
                ]
            }
        ],
        "subtext": "visiting attractions",
        "countability": "uncountable"
    },
    {
        "word": "nature reserve",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🏞️",
        "form": "noun",
        "definitions": [
            {
                "text": "An area of land that is protected so that plants and animals can live there safely.",
                "examples": [
                    "We visited the local nature reserve.",
                    "The nature reserve is home to many rare birds."
                ]
            }
        ],
        "subtext": "protected area",
        "countability": "countable"
    },
    {
        "word": "solar power",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Energy from the sun that is used to create electricity.",
                "examples": [
                    "Many houses use solar power now.",
                    "Solar power is a clean energy source."
                ]
            }
        ],
        "subtext": "sun energy",
        "countability": "uncountable"
    },
    {
        "word": "wind farm",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌬️",
        "form": "noun",
        "definitions": [
            {
                "text": "A group of wind turbines that produce electricity.",
                "examples": [
                    "There is a large wind farm on the hill.",
                    "Wind farms are becoming more common."
                ]
            }
        ],
        "subtext": "wind energy site",
        "countability": "countable"
    },
    {
        "word": "global warming",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌡️",
        "form": "noun",
        "definitions": [
            {
                "text": "A gradual increase in the world's temperature caused by gases in the air.",
                "examples": [
                    "Global warming is a serious problem.",
                    "We must work together to stop global warming."
                ]
            }
        ],
        "subtext": "climate warming",
        "countability": "uncountable"
    },
    {
        "word": "wildlife",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🦁",
        "form": "noun",
        "definitions": [
            {
                "text": "Animals and plants that live or grow in the wild.",
                "examples": [
                    "I love watching wildlife documentaries.",
                    "We should protect local wildlife."
                ]
            }
        ],
        "subtext": "wild animals",
        "countability": "uncountable"
    },
    {
        "word": "habitat",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "emoji": "🏡",
        "form": "noun",
        "definitions": [
            {
                "text": "The natural environment in which an animal or plant lives.",
                "examples": [
                    "Polar bears are losing their natural habitat.",
                    "The forest is an important habitat for many creatures."
                ]
            }
        ],
        "subtext": "natural home",
        "countability": "countable"
    },
    {
        "word": "fossil",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🦴",
        "form": "noun",
        "definitions": [
            {
                "text": "The remains or shape of a dead animal or plant that has become rock after many years.",
                "examples": [
                    "They found a dinosaur fossil.",
                    "He collects fossils."
                ]
            }
        ],
        "subtext": "old remains",
        "countability": "countable"
    },
    {
        "word": "microscope",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔬",
        "form": "noun",
        "definitions": [
            {
                "text": "A scientific tool that makes very small things look larger.",
                "examples": [
                    "Look at the cell under the microscope.",
                    "We used a microscope in the science lab."
                ]
            }
        ],
        "subtext": "magnifying tool",
        "countability": "countable"
    },
    {
        "word": "experiment",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🧪",
        "form": "noun",
        "definitions": [
            {
                "text": "A scientific test that is done to discover something or to see if an idea is true.",
                "examples": [
                    "We did an experiment in school today.",
                    "The experiment was a success."
                ]
            }
        ],
        "subtext": "scientific test",
        "countability": "countable"
    },
    {
        "word": "galaxy",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🌌",
        "form": "noun",
        "definitions": [
            {
                "text": "One of the independent groups of stars in the universe.",
                "examples": [
                    "Our galaxy is called the Milky Way.",
                    "There are millions of galaxies in the universe."
                ]
            }
        ],
        "subtext": "group of stars",
        "countability": "countable"
    },
    {
        "word": "skeleton",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "💀",
        "form": "noun",
        "definitions": [
            {
                "text": "The frame of bones supporting a human or animal body.",
                "examples": [
                    "The human skeleton has over two hundred bones.",
                    "The museum has a whale skeleton."
                ]
            }
        ],
        "subtext": "body bones",
        "countability": "countable"
    },
    {
        "word": "muscle",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "💪",
        "form": "noun",
        "definitions": [
            {
                "text": "One of the parts of the body that produce movement.",
                "examples": [
                    "Exercise helps build muscle.",
                    "I pulled a muscle in my leg."
                ]
            }
        ],
        "subtext": "body tissue",
        "countability": "countable"
    },
    {
        "word": "brain",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "The organ inside the head that controls thought, memory, feelings, and activity.",
                "examples": [
                    "The human brain is very complex.",
                    "Use your brain!"
                ]
            }
        ],
        "subtext": "mind organ",
        "countability": "countable"
    },
    {
        "word": "heart",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "❤️",
        "form": "noun",
        "definitions": [
            {
                "text": "The organ in the chest that pumps blood around the body.",
                "examples": [
                    "Exercise is good for your heart.",
                    "I can feel my heart beating."
                ]
            }
        ],
        "subtext": "blood pump",
        "countability": "countable"
    },
    {
        "word": "lung",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🫁",
        "form": "noun",
        "definitions": [
            {
                "text": "One of the two organs in the chest that you use for breathing.",
                "examples": [
                    "Smoking damages your lungs.",
                    "Take a deep breath and fill your lungs."
                ]
            }
        ],
        "subtext": "breathing organ",
        "countability": "countable"
    },
    {
        "word": "stomach",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🤰",
        "form": "noun",
        "definitions": [
            {
                "text": "The organ in the body where food goes after it is eaten.",
                "examples": [
                    "My stomach hurts.",
                    "He has a full stomach after dinner."
                ]
            }
        ],
        "subtext": "tummy",
        "countability": "countable"
    },
    {
        "word": "identity",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🪪",
        "form": "noun",
        "definitions": [
            {
                "text": "Who a person is, or the qualities of a person or group that make them different from others.",
                "examples": [
                    "I need to see some form of identity.",
                    "Cultural identity is important."
                ]
            }
        ],
        "subtext": "who you are",
        "countability": "uncountable"
    },
    {
        "word": "character",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🎭",
        "form": "noun",
        "definitions": [
            {
                "text": "The particular combination of qualities in a person or place that makes them different from others.",
                "examples": [
                    "He is a strong character.",
                    "The town has a lot of character."
                ]
            }
        ],
        "subtext": "personality",
        "countability": "uncountable"
    },
    {
        "word": "partner",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👩‍❤️‍👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Someone who you are married to or having a long-term sexual relationship with.",
                "examples": [
                    "This is my partner, Jane.",
                    "They have been partners for ten years."
                ]
            }
        ],
        "subtext": "companion / spouse",
        "countability": "countable"
    },
    {
        "word": "colleague",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "noun",
        "definitions": [
            {
                "text": "A person that you work with.",
                "examples": [
                    "We are having lunch with our colleagues.",
                    "He is a helpful colleague."
                ]
            }
        ],
        "subtext": "coworker",
        "countability": "countable"
    },
    {
        "word": "customer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👤",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who buys goods or services from a shop or business.",
                "examples": [
                    "The customer is always right.",
                    "We have many regular customers."
                ]
            }
        ],
        "subtext": "client / buyer",
        "countability": "countable"
    },
    {
        "word": "employee",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👷",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who is paid to work for someone else.",
                "examples": [
                    "The company has fifty employees.",
                    "She is a hard-working employee."
                ]
            }
        ],
        "subtext": "worker",
        "countability": "countable",
        "opposite": "employer"
    },
    {
        "word": "employer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏢",
        "form": "noun",
        "definitions": [
            {
                "text": "A person or organization that pays people to work for them.",
                "examples": [
                    "The company is a major employer in the area.",
                    "He has a good relationship with his employer."
                ]
            }
        ],
        "subtext": "boss / company",
        "countability": "countable",
        "opposite": "employee"
    },
    {
        "word": "management",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👔",
        "form": "noun",
        "definitions": [
            {
                "text": "The people who are in charge of a company or organization.",
                "examples": [
                    "The management is planning some changes.",
                    "She works in senior management."
                ]
            }
        ],
        "subtext": "leaders / administration",
        "countability": "uncountable"
    },
    {
        "word": "industry",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "noun",
        "definitions": [
            {
                "text": "The companies and activities involved in the process of producing goods for sale.",
                "examples": [
                    "He works in the tourist industry.",
                    "The car industry is very large."
                ]
            }
        ],
        "subtext": "business sector",
        "countability": "uncountable"
    },
    {
        "word": "technology",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "💻",
        "form": "noun",
        "definitions": [
            {
                "text": "Knowledge, equipment, and methods that are used in science and industry.",
                "examples": [
                    "Modern technology is changing our lives.",
                    "He is interested in computer technology."
                ]
            }
        ],
        "subtext": "tech / high-tech",
        "countability": "uncountable"
    },
    {
        "word": "software",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "💾",
        "form": "noun",
        "definitions": [
            {
                "text": "The programs and other operating information used by a computer.",
                "examples": [
                    "I need to install new software.",
                    "They develop educational software."
                ]
            }
        ],
        "subtext": "computer programs",
        "countability": "uncountable",
        "opposite": "hardware"
    },
    {
        "word": "hardware",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🖱️",
        "form": "noun",
        "definitions": [
            {
                "text": "The physical and electronic parts of a computer, rather than the programs it uses.",
                "examples": [
                    "Computer hardware includes the monitor and the mouse.",
                    "We need to upgrade the hardware."
                ]
            }
        ],
        "subtext": "computer parts",
        "countability": "uncountable",
        "opposite": "software"
    },
    {
        "word": "network",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🌐",
        "form": "noun",
        "definitions": [
            {
                "text": "A system of parts that are connected to each other.",
                "examples": [
                    "The computer network is down.",
                    "She has a large professional network."
                ]
            }
        ],
        "subtext": "web / system",
        "countability": "countable"
    },
    {
        "word": "privacy",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🔒",
        "form": "noun",
        "definitions": [
            {
                "text": "The state of being alone and not watched or disturbed by other people.",
                "examples": [
                    "Online privacy is very important.",
                    "I need some privacy."
                ]
            }
        ],
        "subtext": "personal space / secrecy",
        "countability": "uncountable"
    }
    ];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
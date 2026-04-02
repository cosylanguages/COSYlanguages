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
        "subtext": "gift / travel souvenir"
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
        "countability": "countable",
        "opposite": null
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
        "countability": "countable",
        "opposite": null
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
        "subtext": "related to family life",
        "opposite": null
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
        "subtext": "related to personal identity",
        "opposite": null
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
        "countability": "countable",
        "opposite": null
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
        "countability": "countable",
        "opposite": null
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
        "countability": "countable",
        "opposite": null
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
        "countability": "countable",
        "opposite": null
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
        "countability": "countable",
        "opposite": null
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
        "subtext": "related to local places services",
        "opposite": null
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
        "subtext": "related to job titles professions",
        "opposite": null
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
        "subtext": "related to everyday shopping",
        "opposite": null
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
        "subtext": "related to animals",
        "opposite": null
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
        "subtext": "related to rooms of a home",
        "opposite": null
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
        "subtext": "related to places culture leisure",
        "opposite": null
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
        "subtext": "related to rooms of a home",
        "opposite": null
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
        "subtext": "related to job titles professions",
        "opposite": null
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
        "subtext": "related to rooms of a home",
        "opposite": null
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
        "subtext": "related to household items",
        "opposite": null
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
        "subtext": "related to household items",
        "opposite": null
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
        "countability": "countable",
        "opposite": null
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
        "subtext": "related to household items",
        "opposite": null
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
        "subtext": "related to household items",
        "opposite": null
    }
    ];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
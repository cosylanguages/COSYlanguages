// TODO: verify level classification
(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_intermediate_places_019",
        "word": "garden",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "🌳",
        "_legacy": {
            "image": "images/vocabulary/places/garden.png",
            "classification": "regular",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_work_059",
        "word": "engineer",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who designs or builds machines, engines, or structures.",
                "examples": [
                    "The engineer is working on a new bridge.",
                    "He wants to be an electrical engineer."
                ]
            },
            {
                "text": "This person often works in an office or on a construction site.",
                "examples": [
                    "Engineers use computers to design things."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌɛndʒɪˈnɪə | 🇺🇸 ˌɛndʒɪˈnɪər",
        "emoji": "👷",
        "_legacy": {
            "classification": "regular",
            "plural": "engineers",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_work_060",
        "word": "pilot",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who flies an airplane or a helicopter.",
                "examples": [
                    "The pilot is in the cockpit.",
                    "He wants to be a pilot."
                ]
            },
            {
                "text": "This person works in the sky and at the airport.",
                "examples": [
                    "Pilots wear a uniform."
                ]
            }
        ],
        "transcription": "ˈpaɪlət",
        "emoji": "🧑‍✈️",
        "_legacy": {
            "classification": "regular",
            "plural": "pilots",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_064",
        "word": "sushi",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A Japanese dish with rice and raw fish.",
                "examples": [
                    "I like eating sushi with soy sauce.",
                    "We are going to a sushi restaurant."
                ]
            },
            {
                "text": "This food is originally from Japan.",
                "examples": [
                    "Sushi is often served with ginger and wasabi."
                ]
            }
        ],
        "transcription": "ˈsuːʃi",
        "emoji": "🍣",
        "_legacy": {
            "classification": "regular",
            "plural": "sushi",
            "countability": "uncountable"
        }
    },
    {
        "id": "en_intermediate_social_065",
        "word": "pancake",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A flat, round cake cooked in a pan.",
                "examples": [
                    "She is making pancakes.",
                    "I like pancakes with honey."
                ]
            },
            {
                "text": "People often eat this for breakfast with syrup.",
                "examples": [
                    "Pancakes are soft and sweet."
                ]
            }
        ],
        "transcription": "ˈpænkeɪk",
        "emoji": "🥞",
        "_legacy": {
            "classification": "regular",
            "plural": "pancakes",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_066",
        "word": "carrot",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A long orange root vegetable.",
                "examples": [
                    "Carrots are good for your eyes.",
                    "I like raw carrots."
                ]
            },
            {
                "text": "Rabbits love eating carrots.",
                "examples": [
                    "You can use carrots in a cake."
                ]
            }
        ],
        "transcription": "ˈkærət",
        "emoji": "🥕",
        "_legacy": {
            "explanation": "Carrot is a vegetable, the others are fruits.",
            "classification": "regular",
            "plural": "carrots",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_067",
        "word": "milkshake",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A cold drink made of milk, ice cream, and flavorings.",
                "examples": [
                    "I'll have a chocolate milkshake.",
                    "The milkshake is very thick."
                ]
            },
            {
                "text": "This is a sweet and thick drink.",
                "examples": [
                    "Milkshakes are popular in American diners."
                ]
            }
        ],
        "transcription": "ˈmɪlkʃeɪk",
        "emoji": "🥤",
        "_legacy": {
            "classification": "regular",
            "plural": "milkshakes",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_places_020",
        "word": "library",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈlaɪbrəri",
        "emoji": "📚",
        "_legacy": {
            "explanation": "A library is a place for books, while the others might be related to food or travel.",
            "classification": "regular",
            "plural": "libraries",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_places_021",
        "word": "museum",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "mjuˈziːəm",
        "emoji": "🏛️",
        "_legacy": {
            "classification": "regular",
            "plural": "museums",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_travel_006",
        "word": "airport",
        "lang": "en",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "A place where planes land and take off.",
                "examples": [
                    "I am going to the airport.",
                    "The airport is very big."
                ]
            },
            {
                "text": "This is the place where you go to catch a flight.",
                "examples": [
                    "We need to be at the airport two hours before the flight."
                ]
            }
        ],
        "transcription": "ˈeəpɔːt",
        "emoji": "✈️",
        "_legacy": {
            "classification": "regular",
            "plural": "airports",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_068",
        "word": "sweater",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈswɛtə | 🇺🇸 ˈswɛtər",
        "emoji": "🧶",
        "_legacy": {
            "classification": "regular",
            "plural": "sweaters",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_069",
        "word": "scarf",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "skɑːf",
        "emoji": "🧣",
        "_legacy": {
            "classification": "regular",
            "plural": "scarves",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_070",
        "word": "wardrobe",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈwɔːdrəʊb | 🇺🇸 ˈwɔːdroʊb",
        "emoji": "👗",
        "_legacy": {
            "classification": "regular",
            "plural": "wardrobes",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_071",
        "word": "shelf",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ʃɛlf",
        "emoji": "📚",
        "_legacy": {
            "classification": "regular",
            "plural": "shelves",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_072",
        "word": "mirror",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈmɪrə | 🇺🇸 ˈmɪrər",
        "emoji": "🪞",
        "_legacy": {
            "classification": "regular",
            "plural": "mirrors",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_073",
        "word": "umbrella",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ʌmˈbrɛlə",
        "emoji": "☂️",
        "_legacy": {
            "classification": "regular",
            "plural": "umbrellas",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_074",
        "word": "laptop",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈlæptɒp | 🇺🇸 ˈlæptɑːp",
        "emoji": "💻",
        "_legacy": {
            "classification": "regular",
            "plural": "laptops",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_075",
        "word": "elephant",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈɛlɪfənt",
        "emoji": "🐘",
        "_legacy": {
            "classification": "regular",
            "plural": "elephants",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_076",
        "word": "monkey",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈmʌŋki",
        "emoji": "🐒",
        "_legacy": {
            "classification": "regular",
            "plural": "monkeys",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_work_061",
        "word": "software developer",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who writes computer programs.",
                "examples": [
                    "The software developer is coding a new app.",
                    "I want to be a software developer."
                ]
            },
            {
                "text": "This person works with a computer.",
                "examples": [
                    "Software developers use different programming languages."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈsɒftweə dɪˈvɛləpə | 🇺🇸 ˈsɑːftweə dɪˈvɛləpər",
        "emoji": "💻",
        "_legacy": {
            "explanation": "A software developer creates code, while the others are physical structures or objects.",
            "classification": "regular",
            "plural": "software developers",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_work_062",
        "word": "architect",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who designs buildings.",
                "examples": [
                    "The architect designed this skyscraper.",
                    "My brother is an architect."
                ]
            },
            {
                "text": "This person draws plans for houses and offices.",
                "examples": [
                    "Architects need to be good at math and drawing."
                ]
            }
        ],
        "transcription": "ˈɑːkɪtɛkt",
        "emoji": "🏗️",
        "_legacy": {
            "classification": "regular",
            "plural": "architects",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_077",
        "word": "algorithm",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈælɡərɪðəm",
        "emoji": "💻",
        "_legacy": {
            "classification": "regular",
            "plural": "algorithms",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_078",
        "word": "evolution",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˌiːvəˈluːʃn",
        "emoji": "🐒",
        "_legacy": {
            "classification": "regular",
            "plural": "evolutions",
            "countability": "uncountable"
        }
    },
    {
        "id": "en_intermediate_social_079",
        "word": "democracy",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 dɪˈmɒkrəsi | 🇺🇸 dɪˈmɑːkrəsi",
        "emoji": "🗳️",
        "_legacy": {
            "classification": "regular",
            "plural": "democracies",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_environment_013",
        "word": "ecosystem",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈiːkəʊˌsɪstəm | 🇺🇸 ˈiːkoʊˌsɪstəm",
        "emoji": "🌲",
        "_legacy": {
            "classification": "regular",
            "plural": "ecosystems",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_work_063",
        "word": "colleague",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈkɒliːɡ | 🇺🇸 ˈkɑːliːɡ",
        "emoji": "👥",
        "_legacy": {
            "classification": "regular",
            "plural": "colleagues",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_080",
        "word": "remote work",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Working from a location other than the office, usually home.",
                "examples": [
                    "Remote work has become normal for many professionals."
                ]
            }
        ],
        "transcription": "🇬🇧 rɪˈməʊt wɜːk | 🇺🇸 rɪˈmoʊt wɜːk",
        "emoji": "💻",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "remote work policy, shift to remote work"
        }
    },
    {
        "id": "en_intermediate_environment_014",
        "word": "global warming",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [],
        "transcription": "🇬🇧 ˈɡləʊbl ˈwɔːmɪŋ | 🇺🇸 ˈɡloʊbl ˈwɔːmɪŋ",
        "emoji": "🌡️",
        "_legacy": {
            "plural": null,
            "countability": "uncountable"
        }
    },
    {
        "id": "en_intermediate_travel_007",
        "word": "commuter",
        "lang": "en",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who travels some distance to work on a regular basis.",
                "examples": [
                    "The train is full of commuters.",
                    "I am a daily commuter."
                ]
            },
            {
                "text": "This person often uses public transport like trains or buses.",
                "examples": [
                    "Commuters often travel during rush hour."
                ]
            }
        ],
        "transcription": "🇬🇧 kəˈmjuːtə | 🇺🇸 kəˈmjuːtər",
        "emoji": "🚆",
        "_legacy": {
            "classification": "regular",
            "plural": "commuters",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_social_081",
        "word": "child",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A young human who is not yet an adult.",
                "examples": [
                    "The child is playing with a toy.",
                    "How many children do they have?"
                ]
            }
        ],
        "transcription": "tʃaɪld",
        "emoji": "🧒",
        "_legacy": {
            "numberPlural": "5 child",
            "answer": "five children",
            "classification": "regular",
            "plural": "children",
            "countability": "countable"
        }
    },
    {
        "id": "en_intermediate_environment_015",
        "word": "leaf",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [],
        "transcription": "liːf",
        "emoji": "🍃",
        "_legacy": {
            "numberPlural": "many leaf",
            "answer": "many leaves",
            "classification": "regular",
            "plural": "leaves",
            "countability": "countable",
            "etymology": {
                "origin_lang": "Proto-Germanic",
                "origin_word": "laubą"
            }
        }
    },
    {
        "id": "en_intermediate_health_medicine_014",
        "word": "tooth",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [],
        "transcription": "tuːθ",
        "emoji": "🦷",
        "_legacy": {
            "numberPlural": "32 tooth",
            "answer": "thirty-two teeth",
            "classification": "regular",
            "plural": "teeth",
            "countability": "countable",
            "etymology": {
                "origin_lang": "Proto-Germanic",
                "origin_word": "tanþs"
            }
        }
    },
    {
        "id": "en_intermediate_work_064",
        "word": "career",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "The series of jobs someone has during their working life.",
                "examples": [
                    "She has had a successful career in finance.",
                    "He is looking for a career change."
                ]
            }
        ],
        "transcription": "🇬🇧 kəˈrɪə | 🇺🇸 kəˈrɪər",
        "emoji": "📈",
        "_legacy": {
            "classification": "regular",
            "plural": "careers",
            "countability": "countable",
            "subtext": "career path, long-term career"
        }
    },
    {
        "id": "en_intermediate_work_065",
        "word": "redundancy",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Losing your job because the employer no longer needs the role.",
                "examples": [
                    "He received redundancy pay last year.",
                    "Thousands of workers face redundancy.",
                    "He received a redundancy notice last month."
                ]
            }
        ],
        "transcription": "rɪˈdʌndənsi",
        "emoji": "📉",
        "_legacy": {
            "classification": "regular",
            "plural": "redundancies",
            "countability": "countable",
            "subtext": "voluntary redundancy, redundancy pay"
        }
    },
    {
        "id": "en_intermediate_work_066",
        "word": "flexible working",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "An arrangement allowing employees to vary their hours or location.",
                "examples": [
                    "The company offers flexible working from home.",
                    "Flexible working helps parents balance their lives."
                ]
            }
        ],
        "transcription": "ˈflɛksəbl ˈwɜːkɪŋ",
        "emoji": "🏠",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "work from home, flexitime"
        }
    },
    {
        "id": "en_intermediate_work_067",
        "word": "networking",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Building professional relationships to help your career.",
                "examples": [
                    "Networking is essential in this industry.",
                    "I met him at a networking event.",
                    "Networking helped her find her current job."
                ]
            }
        ],
        "transcription": "ˈnɛtwɜːkɪŋ",
        "emoji": "🤝",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "professional networking, networking event"
        }
    },
    {
        "id": "en_intermediate_work_068",
        "word": "workload",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "The amount of work a person has to do.",
                "examples": [
                    "Her workload has increased a lot this month.",
                    "I need to reduce my workload.",
                    "Her workload has doubled since the merger."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈwɜːkləʊd | 🇺🇸 ˈwɜːkloʊd",
        "emoji": "📚",
        "_legacy": {
            "classification": "regular",
            "plural": "workloads",
            "countability": "countable",
            "subtext": "heavy workload, manage workload"
        }
    },
    {
        "id": "en_intermediate_work_069",
        "word": "teamwork",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Working effectively together with other people.",
                "examples": [
                    "Good teamwork made the project a success.",
                    "We value teamwork above all else."
                ]
            }
        ],
        "transcription": "ˈtiːmwɜːk",
        "emoji": "👥",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "effective teamwork, team spirit"
        }
    },
    {
        "id": "en_intermediate_work_070",
        "word": "ambition",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "A strong desire to achieve something.",
                "examples": [
                    "His ambition is to become a manager.",
                    "She has the ambition to start her own business.",
                    "Her ambition is to run her own company."
                ]
            }
        ],
        "transcription": "æmˈbɪʃn",
        "emoji": "🚀",
        "_legacy": {
            "classification": "regular",
            "plural": "ambitions",
            "countability": "countable",
            "subtext": "high ambition, professional ambition"
        }
    },
    {
        "id": "en_intermediate_work_071",
        "word": "skill",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "An ability to do something well, usually gained through practice.",
                "examples": [
                    "Communication skills are very important at work.",
                    "He has great technical skills."
                ]
            }
        ],
        "transcription": "skɪl",
        "emoji": "🛠️",
        "_legacy": {
            "classification": "regular",
            "plural": "skills",
            "countability": "countable",
            "subtext": "soft skills, hard skills, practical skills"
        }
    },
    {
        "id": "en_intermediate_work_072",
        "word": "maternity leave",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Paid time off work given to a mother after having a baby.",
                "examples": [
                    "She took six months of maternity leave.",
                    "He is on paternity leave."
                ]
            }
        ],
        "transcription": "məˈtɜːnɪti liːv",
        "emoji": "👶",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "paternity leave, parental leave"
        }
    },
    {
        "id": "en_intermediate_work_073",
        "word": "pension",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Money paid to someone regularly after they retire.",
                "examples": [
                    "He contributes to his pension every month.",
                    "The state pension is not enough to live on.",
                    "She contributes ten percent of her salary to her pension."
                ]
            }
        ],
        "transcription": "ˈpɛnʃn",
        "emoji": "👴",
        "_legacy": {
            "classification": "regular",
            "plural": "pensions",
            "countability": "countable",
            "subtext": "pension plan, retirement fund"
        }
    },
    {
        "id": "en_intermediate_work_074",
        "word": "investment",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Money put into something in order to get a profit in the future.",
                "examples": [
                    "Property is a popular investment.",
                    "He made a risky investment in stocks.",
                    "Property is considered a safe long-term investment."
                ]
            }
        ],
        "transcription": "ɪnˈvɛstmənt",
        "emoji": "💰",
        "_legacy": {
            "classification": "regular",
            "plural": "investments",
            "countability": "countable",
            "subtext": "long-term investment, return on investment"
        }
    },
    {
        "id": "en_intermediate_work_075",
        "word": "interest rate",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The percentage charged for borrowing money or earned on savings.",
                "examples": [
                    "The interest rate on the mortgage is three percent.",
                    "Bank of England raised the interest rate."
                ]
            }
        ],
        "transcription": "ˈɪntrəst reɪt",
        "emoji": "📊",
        "_legacy": {
            "plural": "interest rates",
            "countability": "countable",
            "subtext": "high interest rate, low interest rate"
        }
    },
    {
        "id": "en_intermediate_work_076",
        "word": "income",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Money received from work or other sources.",
                "examples": [
                    "Their household income is comfortable.",
                    "He has no steady income.",
                    "Their combined household income is comfortable."
                ]
            }
        ],
        "transcription": "ˈɪnkʌm",
        "emoji": "💵",
        "_legacy": {
            "classification": "regular",
            "plural": "incomes",
            "countability": "countable",
            "subtext": "annual income, disposable income",
            "opposite": "expense",
            "oppositeEmoji": "💸"
        }
    },
    {
        "id": "en_intermediate_work_077",
        "word": "insurance",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "An agreement where you pay regularly to be protected against loss or damage.",
                "examples": [
                    "Health insurance is expensive in some countries.",
                    "Do you have travel insurance?",
                    "Health insurance costs have risen significantly."
                ]
            }
        ],
        "transcription": "ɪnˈʃʊərəns",
        "emoji": "🛡️",
        "_legacy": {
            "classification": "regular",
            "plural": "insurances",
            "countability": "uncountable",
            "subtext": "health insurance, car insurance"
        }
    },
    {
        "id": "en_intermediate_work_078",
        "word": "tax",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Money paid to the government based on income or purchases.",
                "examples": [
                    "She pays a lot of income tax.",
                    "The tax on fuel has increased."
                ]
            }
        ],
        "transcription": "tæks",
        "emoji": "🏛️",
        "_legacy": {
            "classification": "regular",
            "plural": "taxes",
            "countability": "countable",
            "subtext": "income tax, value-added tax (VAT)"
        }
    },
    {
        "id": "en_intermediate_health_medicine_015",
        "word": "wellbeing",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A general feeling of being comfortable, healthy and happy.",
                "examples": [
                    "Exercise is important for mental wellbeing.",
                    "The company cares about employee wellbeing.",
                    "The company has introduced wellbeing initiatives."
                ]
            }
        ],
        "transcription": "ˌwɛlˈbiːɪŋ",
        "emoji": "🧘",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "mental wellbeing, emotional wellbeing"
        }
    },
    {
        "id": "en_intermediate_health_medicine_016",
        "word": "mental health",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A person's psychological and emotional state.",
                "examples": [
                    "Companies are taking mental health more seriously.",
                    "Stress can affect your mental health."
                ]
            }
        ],
        "transcription": "ˈmɛntl hɛlθ",
        "emoji": "🧠",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "mental health awareness, psychological state"
        }
    },
    {
        "id": "en_intermediate_health_medicine_017",
        "word": "burnout",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A state of exhaustion caused by too much stress over a long time.",
                "examples": [
                    "She suffered from burnout after working without a break.",
                    "Burnout is common in high-pressure jobs.",
                    "She took sick leave after suffering from burnout."
                ]
            }
        ],
        "transcription": "ˈbɜːnaʊt",
        "emoji": "🔋",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "emotional exhaustion, work stress"
        }
    },
    {
        "id": "en_intermediate_health_medicine_018",
        "word": "prevention",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Action taken to stop something bad from happening.",
                "examples": [
                    "Prevention is better than cure.",
                    "The focus is on the prevention of disease."
                ]
            }
        ],
        "transcription": "prɪˈvɛnʃn",
        "emoji": "🛡️",
        "_legacy": {
            "classification": "regular",
            "plural": "preventions",
            "countability": "uncountable",
            "subtext": "prevention is better than cure, crime prevention"
        }
    },
    {
        "id": "en_intermediate_health_medicine_019",
        "word": "symptoms",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Signs that suggest a person has a particular illness.",
                "examples": [
                    "The symptoms started last week.",
                    "If you have any symptoms, stay at home."
                ]
            }
        ],
        "transcription": "ˈsɪmptəmz",
        "emoji": "🤒",
        "_legacy": {
            "classification": "regular",
            "plural": "symptoms",
            "countability": "countable",
            "subtext": "flu symptoms, show symptoms"
        }
    },
    {
        "id": "en_intermediate_health_medicine_020",
        "word": "therapy",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Treatment for mental or physical problems, often through talking.",
                "examples": [
                    "He goes to therapy once a week.",
                    "Therapy helped her cope with anxiety.",
                    "She started therapy after losing her job."
                ]
            }
        ],
        "transcription": "ˈθɛrəpi",
        "emoji": "🗣️",
        "_legacy": {
            "classification": "regular",
            "plural": "therapies",
            "countability": "countable",
            "subtext": "speech therapy, cognitive behavioral therapy"
        }
    },
    {
        "id": "en_intermediate_social_082",
        "word": "trust",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A firm belief in the honesty and reliability of someone.",
                "examples": [
                    "Trust is the foundation of a good relationship.",
                    "It takes years to build trust and seconds to break it."
                ]
            }
        ],
        "transcription": "trʌst",
        "emoji": "🤝",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "mutual trust, lack of trust",
            "opposite": "distrust"
        }
    },
    {
        "id": "en_intermediate_people_011",
        "word": "conflict",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A serious disagreement or argument.",
                "examples": [
                    "They had a conflict about money.",
                    "The managers are trying to avoid conflict."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈkɒnflɪkt | 🇺🇸 ˈkɑːnflɪkt",
        "emoji": "⚔️",
        "_legacy": {
            "classification": "regular",
            "plural": "conflicts",
            "countability": "countable",
            "subtext": "resolve conflict, armed conflict",
            "opposite": "harmony",
            "oppositeEmoji": "🕊️"
        }
    },
    {
        "id": "en_intermediate_people_012",
        "word": "responsibility",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A duty to take care of someone or something.",
                "examples": [
                    "Parents have a responsibility for their children.",
                    "He has a lot of responsibility at work.",
                    "We all have a responsibility to the environment."
                ]
            }
        ],
        "transcription": "🇬🇧 rɪˌspɒnsəˈbɪlɪti | 🇺🇸 rɪˌspɑːnsəˈbɪlɪti",
        "emoji": "🤲",
        "_legacy": {
            "classification": "regular",
            "plural": "responsibilities",
            "countability": "countable",
            "subtext": "take responsibility, a sense of responsibility"
        }
    },
    {
        "id": "en_intermediate_people_013",
        "word": "expectation",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A belief about what will happen or should happen.",
                "examples": [
                    "She has high expectations of her partner.",
                    "The results exceeded our expectations."
                ]
            }
        ],
        "transcription": "ˌɛkspɛkˈteɪʃn",
        "emoji": "💭",
        "_legacy": {
            "classification": "regular",
            "plural": "expectations",
            "countability": "countable",
            "subtext": "high expectations, meet expectations"
        }
    },
    {
        "id": "en_intermediate_people_014",
        "word": "boundary",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "A limit on what you are willing to accept in a relationship.",
                "examples": [
                    "It is healthy to set clear boundaries.",
                    "The river forms the boundary between the two countries.",
                    "Setting boundaries at work is very important."
                ]
            }
        ],
        "transcription": "ˈbaʊndəri",
        "emoji": "🚧",
        "_legacy": {
            "classification": "regular",
            "plural": "boundaries",
            "countability": "countable",
            "subtext": "set boundaries, personal boundaries"
        }
    },
    {
        "id": "en_intermediate_people_015",
        "word": "divorce",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "The legal ending of a marriage.",
                "examples": [
                    "The divorce rate has increased in recent decades.",
                    "They are getting a divorce."
                ]
            }
        ],
        "transcription": "dɪˈvɔːs",
        "emoji": "💔",
        "_legacy": {
            "classification": "regular",
            "plural": "divorces",
            "countability": "countable",
            "subtext": "get a divorce, divorce rate",
            "opposite": "marriage",
            "oppositeEmoji": "💍"
        }
    },
    {
        "id": "en_intermediate_social_083",
        "word": "equality",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "The state of being equal in rights and opportunities.",
                "examples": [
                    "They fight for gender equality at work.",
                    "Equality of opportunity is a key goal.",
                    "She campaigns for equality in the workplace."
                ]
            }
        ],
        "transcription": "🇬🇧 iˈkwɒlɪti | 🇺🇸 iˈkwɑːlɪti",
        "emoji": "⚖️",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "gender equality, racial equality",
            "opposite": "inequality"
        }
    },
    {
        "id": "en_intermediate_social_084",
        "word": "freedom",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "The right to act and think without restriction.",
                "examples": [
                    "Freedom of speech is very important.",
                    "They are fighting for their freedom."
                ]
            }
        ],
        "transcription": "ˈfriːdəm",
        "emoji": "🗽",
        "_legacy": {
            "classification": "regular",
            "plural": "freedoms",
            "countability": "uncountable",
            "subtext": "freedom of speech, individual freedom",
            "opposite": "slavery"
        }
    },
    {
        "id": "en_intermediate_social_085",
        "word": "inequality",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "An unfair situation in which some people have more than others.",
                "examples": [
                    "Income inequality is growing in many countries.",
                    "We must address the inequality in our schools.",
                    "Income inequality has grown in recent decades."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌɪnɪˈkwɒlɪti | 🇺🇸 ˌɪnɪˈkwɑːlɪti",
        "emoji": "🚫⚖️",
        "_legacy": {
            "classification": "regular",
            "plural": "inequalities",
            "countability": "uncountable",
            "subtext": "income inequality, social inequality",
            "opposite": "equality"
        }
    },
    {
        "id": "en_intermediate_social_086",
        "word": "volunteer",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who offers to do something without being paid.",
                "examples": [
                    "He is a volunteer at the hospital.",
                    "Many volunteers helped clean up the park.",
                    "She volunteers at the local food bank every Saturday."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌvɒlənˈtɪə | 🇺🇸 ˌvɑːlənˈtɪər",
        "emoji": "🙋",
        "_legacy": {
            "classification": "regular",
            "plural": "volunteers",
            "countability": "countable",
            "subtext": "volunteer work, unpaid work"
        }
    },
    {
        "id": "en_intermediate_social_087",
        "word": "community",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A group of people sharing a common location, identity or interest.",
                "examples": [
                    "He is very active in his local community.",
                    "The online community is very supportive."
                ]
            }
        ],
        "transcription": "kəˈmjuːnɪti",
        "emoji": "🏘️",
        "_legacy": {
            "classification": "regular",
            "plural": "communities",
            "countability": "countable",
            "subtext": "local community, sense of community"
        }
    },
    {
        "id": "en_intermediate_social_088",
        "word": "generation",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "All the people of a similar age in a society.",
                "examples": [
                    "Each generation faces different challenges.",
                    "My generation grew up with the internet.",
                    "Each generation faces different economic pressures."
                ]
            }
        ],
        "transcription": "ˌdʒɛnəˈreɪʃn",
        "emoji": "👪",
        "_legacy": {
            "classification": "regular",
            "plural": "generations",
            "countability": "countable",
            "subtext": "future generations, gap between generations"
        }
    },
    {
        "id": "en_intermediate_environment_016",
        "word": "climate change",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Long-term changes in global temperatures and weather patterns.",
                "examples": [
                    "Climate change is the biggest challenge of our time.",
                    "We must take action to combat climate change.",
                    "Climate change affects food prices worldwide."
                ]
            }
        ],
        "transcription": "ˈklaɪmət tʃeɪndʒ",
        "emoji": "🌍🌡️",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "global warming, environmental impact"
        }
    },
    {
        "id": "en_intermediate_environment_017",
        "word": "renewable energy",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Energy from natural sources that are not used up, such as wind or solar.",
                "examples": [
                    "The company switched to renewable energy.",
                    "Renewable energy is becoming cheaper.",
                    "They installed solar panels to use renewable energy."
                ]
            }
        ],
        "transcription": "rɪˈnjuːəbl ˈɛnədʒi",
        "emoji": "☀️💨",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "solar power, wind energy",
            "opposite": "fossil fuels"
        }
    },
    {
        "id": "en_intermediate_environment_018",
        "word": "carbon footprint",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The total amount of greenhouse gases produced by a person's activities.",
                "examples": [
                    "Flying increases your carbon footprint.",
                    "How can I reduce my carbon footprint?",
                    "Flying significantly increases your carbon footprint."
                ]
            }
        ],
        "transcription": "ˈkɑːbən ˈfʊtprɪnt",
        "emoji": "👣",
        "_legacy": {
            "plural": "carbon footprints",
            "countability": "countable",
            "subtext": "reduce carbon footprint, environmental impact"
        }
    },
    {
        "id": "en_intermediate_environment_019",
        "word": "waste",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Material that is no longer needed and thrown away.",
                "examples": [
                    "We need to reduce food waste.",
                    "The factory produces a lot of chemical waste."
                ]
            }
        ],
        "transcription": "weɪst",
        "emoji": "🗑️",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "food waste, zero waste, waste of time"
        }
    },
    {
        "id": "en_intermediate_language_002",
        "word": "however",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce a contrast or opposite idea.",
                "examples": [
                    "I like the city. However, it is very expensive.",
                    "The hotel was beautiful. However, the service was poor."
                ]
            }
        ],
        "transcription": "🇬🇧 haʊˈɛvə | 🇺🇸 haʊˈɛvər",
        "emoji": "🤔",
        "_legacy": {
            "subtext": "nevertheless, on the other hand"
        }
    },
    {
        "id": "en_intermediate_language_003",
        "word": "although",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "conjunction",
        "definitions": [
            {
                "text": "In spite of the fact that; even though.",
                "examples": [
                    "Although she is tired, she goes to the gym.",
                    "Although it was raining, we went for a walk."
                ]
            }
        ],
        "transcription": "🇬🇧 ɔːlˈðəʊ | 🇺🇸 ɔːlˈðoʊ",
        "emoji": "🔄",
        "_legacy": {
            "subtext": "even though, despite the fact"
        }
    },
    {
        "id": "en_intermediate_language_004",
        "word": "on the other hand",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to introduce a contrasting point.",
                "examples": [
                    "City life is exciting. On the other hand, it is stressful.",
                    "Laptops are portable. On the other hand, they are less powerful."
                ]
            }
        ],
        "transcription": "🇬🇧 ɒn ði ˈʌðə hænd | 🇺🇸 ɑːn ði ˈʌðə hænd",
        "emoji": "⚖️",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "en_intermediate_social_089",
        "word": "in my opinion",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to introduce your personal view.",
                "examples": [
                    "In my opinion, remote work is more productive.",
                    "In my opinion, the movie was too long.",
                    "In my opinion, working from home is more productive."
                ]
            }
        ],
        "transcription": "ɪn maɪ əˈpɪnjən",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": "from my perspective, I think"
        }
    },
    {
        "id": "en_intermediate_language_005",
        "word": "as a result",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "phrase",
        "definitions": [
            {
                "text": "Because of this; consequently.",
                "examples": [
                    "He worked hard. As a result, he got a promotion.",
                    "It rained heavily. As a result, the match was cancelled."
                ]
            }
        ],
        "transcription": "æz ə rɪˈzʌlt",
        "emoji": "🔚",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "en_intermediate_work_079",
        "word": "promotion",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Advancement to a higher position at work.",
                "examples": [
                    "She was passed over for promotion twice."
                ]
            }
        ],
        "transcription": "🇬🇧 prəˈməʊʃn | 🇺🇸 prəˈmoʊʃn",
        "emoji": "📈",
        "_legacy": {
            "classification": "regular",
            "plural": "promotions",
            "countability": "countable",
            "subtext": "get a promotion, job promotion"
        }
    },
    {
        "id": "en_intermediate_work_080",
        "word": "skill set",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "The range of abilities and experience a person has.",
                "examples": [
                    "Her skill set makes her very employable."
                ]
            }
        ],
        "transcription": "skɪl sɛt",
        "emoji": "🛠️",
        "_legacy": {
            "classification": "regular",
            "plural": "skill sets",
            "countability": "countable",
            "subtext": "diverse skill set, professional skill set"
        }
    },
    {
        "id": "en_intermediate_work_081",
        "word": "appraisal",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "A formal assessment of an employee's performance.",
                "examples": [
                    "Her annual appraisal is next week."
                ]
            }
        ],
        "transcription": "əˈpreɪzl",
        "emoji": "📋",
        "_legacy": {
            "classification": "regular",
            "plural": "appraisals",
            "countability": "countable",
            "subtext": "performance appraisal, annual appraisal"
        }
    },
    {
        "id": "en_intermediate_work_082",
        "word": "workplace",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "The physical environment where people work.",
                "examples": [
                    "The new workplace is much more modern."
                ]
            }
        ],
        "transcription": "ˈwɜːkpleɪs",
        "emoji": "🏢",
        "_legacy": {
            "classification": "regular",
            "plural": "workplaces",
            "countability": "countable",
            "subtext": "modern workplace, workplace culture"
        }
    },
    {
        "id": "en_intermediate_work_083",
        "word": "leadership",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "The ability to guide, motivate and direct other people.",
                "examples": [
                    "Strong leadership is essential in a crisis."
                ]
            }
        ],
        "transcription": "ˈliːdəʃɪp",
        "emoji": "👑",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "strong leadership, leadership skills"
        }
    },
    {
        "id": "en_intermediate_work_084",
        "word": "flexible hours",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A work arrangement allowing employees to choose when they start and finish.",
                "examples": [
                    "Flexible hours make the job much more attractive."
                ]
            }
        ],
        "transcription": "ˈflɛksəbl ˈaʊəz",
        "emoji": "⏰",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "work flexible hours, offer flexible hours"
        }
    },
    {
        "id": "en_intermediate_work_085",
        "word": "annual leave",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The paid days off work that employees are entitled to each year.",
                "examples": [
                    "She has ten days of annual leave remaining."
                ]
            }
        ],
        "transcription": "ˈænjuəl liːv",
        "emoji": "🏖️",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "take annual leave, annual leave entitlement"
        }
    },
    {
        "id": "en_intermediate_health_medicine_021",
        "word": "anxiety",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A feeling of worry, nervousness and unease about uncertain outcomes.",
                "examples": [
                    "He suffers from anxiety before presentations."
                ]
            }
        ],
        "transcription": "æŋˈzaɪəti",
        "emoji": "😟",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "social anxiety, anxiety attack"
        }
    },
    {
        "id": "en_intermediate_health_medicine_022",
        "word": "depression",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A medical condition causing persistent sadness and lack of energy.",
                "examples": [
                    "Depression affects millions of working adults."
                ]
            }
        ],
        "transcription": "dɪˈprɛʃn",
        "emoji": "😔",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "clinical depression, suffer from depression"
        }
    },
    {
        "id": "en_intermediate_health_medicine_023",
        "word": "resilience",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "The ability to recover quickly from difficult situations.",
                "examples": [
                    "Resilience is one of the most valuable qualities in adult life."
                ]
            }
        ],
        "transcription": "rɪˈzɪliəns",
        "emoji": "🌱",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "build resilience, emotional resilience"
        }
    },
    {
        "id": "en_intermediate_health_medicine_024",
        "word": "mindfulness",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "The practice of focusing on the present moment to reduce stress.",
                "examples": [
                    "He practises mindfulness for ten minutes every morning."
                ]
            }
        ],
        "transcription": "ˈmaɪndflnəs",
        "emoji": "🧘",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "practise mindfulness, mindfulness meditation"
        }
    },
    {
        "id": "en_intermediate_health_medicine_025",
        "word": "self-care",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Activities done deliberately to maintain physical or mental health.",
                "examples": [
                    "Self-care is not a luxury — it is a necessity."
                ]
            }
        ],
        "transcription": "🇬🇧 sɛlf ˈkeə | 🇺🇸 sɛlf ˈkeər",
        "emoji": "🛁",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "self-care routine, importance of self-care"
        }
    },
    {
        "id": "en_intermediate_work_086",
        "word": "tax return",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "A document filed with the government showing income and calculating tax owed.",
                "examples": [
                    "He needs to submit his tax return by January."
                ]
            }
        ],
        "transcription": "tæks rɪˈtɜːn",
        "emoji": "📄",
        "_legacy": {
            "classification": "regular",
            "plural": "tax returns",
            "countability": "countable",
            "subtext": "submit a tax return, annual tax return"
        }
    },
    {
        "id": "en_intermediate_work_087",
        "word": "expenditure",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "The total amount of money spent by a person or organisation.",
                "examples": [
                    "They tracked their monthly expenditure carefully."
                ]
            }
        ],
        "transcription": "🇬🇧 ɪkˈspɛndɪtʃə | 🇺🇸 ɪkˈspɛndɪtʃər",
        "emoji": "💸",
        "_legacy": {
            "classification": "regular",
            "plural": "expenditures",
            "countability": "uncountable",
            "subtext": "monthly expenditure, reduce expenditure"
        }
    },
    {
        "id": "en_intermediate_work_088",
        "word": "credit",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "An arrangement allowing you to borrow money or buy on delayed payment.",
                "examples": [
                    "He used credit to buy the car."
                ]
            }
        ],
        "transcription": "ˈkrɛdɪt",
        "emoji": "💳",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "credit card, buy on credit"
        }
    },
    {
        "id": "en_intermediate_places_022",
        "word": "mortgage",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A bank loan secured against a property, repaid over many years.",
                "examples": [
                    "The mortgage is spread over twenty-five years."
                ]
            }
        ],
        "transcription": "ˈmɔːɡɪdʒ",
        "emoji": "🏠",
        "_legacy": {
            "classification": "regular",
            "plural": "mortgages",
            "countability": "countable",
            "subtext": "take out a mortgage, pay off a mortgage"
        }
    },
    {
        "id": "en_intermediate_places_023",
        "word": "property",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A building and the land it stands on; also a legal right to own something.",
                "examples": [
                    "Property prices have risen sharply in this city."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈprɒpəti | 🇺🇸 ˈprɑːpəti",
        "emoji": "🏡",
        "_legacy": {
            "classification": "regular",
            "plural": "properties",
            "countability": "countable",
            "subtext": "property market, rental property"
        }
    },
    {
        "id": "en_intermediate_places_024",
        "word": "equity",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "The value of a property minus the amount still owed on the mortgage.",
                "examples": [
                    "They have built up significant equity in their home."
                ]
            }
        ],
        "transcription": "ˈɛkwɪti",
        "emoji": "📈",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "home equity, negative equity"
        }
    },
    {
        "id": "en_intermediate_places_025",
        "word": "renovation",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of improving a building by repairing or updating it.",
                "examples": [
                    "They spent a year on renovations before moving in."
                ]
            }
        ],
        "transcription": "ˌrɛnəˈveɪʃn",
        "emoji": "🔨",
        "_legacy": {
            "classification": "regular",
            "plural": "renovations",
            "countability": "countable",
            "subtext": "home renovation, undergo renovations"
        }
    },
    {
        "id": "en_intermediate_places_026",
        "word": "survey",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A professional inspection of a property's condition before purchase.",
                "examples": [
                    "The survey revealed serious problems with the roof."
                ]
            }
        ],
        "transcription": "ˈsɜːveɪ",
        "emoji": "📝",
        "_legacy": {
            "classification": "regular",
            "plural": "surveys",
            "countability": "countable",
            "subtext": "property survey, conduct a survey"
        }
    },
    {
        "id": "en_intermediate_work_089",
        "word": "paternity leave",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Paid time off work for a father after the birth of a child.",
                "examples": [
                    "He took two weeks of paternity leave."
                ]
            }
        ],
        "transcription": "pəˈtɜːnɪti liːv",
        "emoji": "🍼",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "take paternity leave, paid paternity leave"
        }
    },
    {
        "id": "en_intermediate_people_016",
        "word": "childcare",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "The care of young children by someone other than their parents.",
                "examples": [
                    "Childcare costs are a major expense for families."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈtʃaɪldkeə | 🇺🇸 ˈtʃaɪldkeər",
        "emoji": "🧸",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "childcare costs, professional childcare"
        }
    },
    {
        "id": "en_intermediate_people_017",
        "word": "upbringing",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "The way a child is raised and taught values during childhood.",
                "examples": [
                    "Her upbringing influenced her approach to money."
                ]
            }
        ],
        "transcription": "ˈʌpˌbrɪŋɪŋ",
        "emoji": "👨‍👩‍👧",
        "_legacy": {
            "classification": "regular",
            "plural": "upbringings",
            "countability": "countable",
            "subtext": "strict upbringing, childhood upbringing"
        }
    },
    {
        "id": "en_intermediate_social_090",
        "word": "charity",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "An organisation that collects money to help people in need.",
                "examples": [
                    "He donates to several charities each year."
                ]
            }
        ],
        "transcription": "ˈtʃærɪti",
        "emoji": "🎗️",
        "_legacy": {
            "classification": "regular",
            "plural": "charities",
            "countability": "countable",
            "subtext": "donate to charity, registered charity"
        }
    },
    {
        "id": "en_intermediate_environment_020",
        "word": "emissions",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Gases or other substances released into the atmosphere.",
                "examples": [
                    "The government wants to reduce carbon emissions."
                ]
            }
        ],
        "transcription": "iˈmɪʃnz",
        "emoji": "💨",
        "_legacy": {
            "classification": "regular",
            "plural": "emissions",
            "countability": "uncountable",
            "subtext": "carbon emissions, reduce emissions"
        }
    },
    {
        "id": "en_intermediate_social_091",
        "word": "point of view",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A particular way of thinking about something; an opinion.",
                "examples": [
                    "From my point of view, the policy is unfair."
                ]
            }
        ],
        "transcription": "pɔɪnt əv vjuː",
        "emoji": "👁️",
        "_legacy": {
            "plural": "points of view",
            "countability": "countable",
            "subtext": "from my point of view, different point of view"
        }
    },
    {
        "id": "en_intermediate_social_092",
        "word": "evidence",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Facts or information used to support a claim.",
                "examples": [
                    "There is strong evidence that exercise reduces stress."
                ]
            }
        ],
        "transcription": "ˈɛvɪdəns",
        "emoji": "🔍",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "scientific evidence, lack of evidence"
        }
    },
    {
        "id": "en_intermediate_social_093",
        "word": "opinion",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A personal view or judgement not necessarily based on facts.",
                "examples": [
                    "In my opinion, working from home is more productive."
                ]
            }
        ],
        "transcription": "əˈpɪnjən",
        "emoji": "🗣️",
        "_legacy": {
            "classification": "regular",
            "plural": "opinions",
            "countability": "countable",
            "subtext": "public opinion, give an opinion"
        }
    },
    {
        "id": "en_intermediate_social_094",
        "word": "against",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "preposition",
        "definitions": [
            {
                "text": "Opposed to something.",
                "examples": [
                    "He is strongly against the new policy."
                ]
            }
        ],
        "transcription": "əˈɡɛnst",
        "emoji": "🚫",
        "_legacy": {
            "subtext": "be against, vote against"
        }
    },
    {
        "id": "en_intermediate_social_095",
        "word": "in favour of",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Supporting or agreeing with something.",
                "examples": [
                    "Most employees are in favour of flexible working."
                ]
            }
        ],
        "transcription": "ɪn ˈfeɪvər əv",
        "emoji": "✅",
        "_legacy": {
            "subtext": "be in favour of, vote in favour of"
        }
    },
    {
        "id": "en_intermediate_social_096",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
(function() {
    const data = [
    {
        "word": "abroad",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "✈️",
        "form": "adverb",
        "transcription": "əˈbrɔːd",
        "definitions": [
            {
                "text": "In or to another country.",
                "examples": [
                    "They go abroad every summer."
                ]
            }
        ],
        "subtext": "travel abroad",
        "synonyms": [
            "overseas"
        ]
    },
    {
        "word": "account",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏦",
        "form": "noun",
        "plural": "accounts",
        "transcription": "əˈkaʊnt",
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
        "word": "achievement",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "noun",
        "transcription": "əˈtʃiːvmənt",
        "definitions": [
            {
                "text": "Something very good and difficult that you have succeeded in doing.",
                "examples": [
                    "Winning the prize was a great achievement."
                ]
            }
        ],
        "subtext": "success, accomplishment",
        "synonyms": [
            "success",
            "accomplishment"
        ],
        "countability": "countable"
    },
    {
        "word": "addition",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "➕",
        "form": "noun",
        "transcription": "əˈdɪʃn",
        "definitions": [
            {
                "text": "The process of adding numbers together.",
                "examples": [
                    "Addition is the first thing you learn in math."
                ]
            }
        ],
        "subtext": "math process",
        "synonyms": [
            "math process"
        ],
        "countability": "uncountable"
    },
    {
        "word": "advantage",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "➕",
        "form": "noun",
        "transcription": "ədˈvɑːntɪdʒ",
        "definitions": [
            {
                "text": "A condition or way of being that helps you to succeed.",
                "examples": [
                    "Living in a big city has many advantages."
                ]
            }
        ],
        "subtext": "benefit, plus point",
        "synonyms": [
            "benefit",
            "plus point"
        ],
        "countability": "countable",
        "opposite": "disadvantage"
    },
    {
        "word": "advertisement",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📺",
        "form": "noun",
        "transcription": "ədˈvɜːtɪsmənt",
        "definitions": [
            {
                "text": "A picture, short film, or piece of text that tries to sell a product.",
                "examples": [
                    "I saw an advertisement for a new car.",
                    "There are too many advertisements on TV."
                ]
            }
        ],
        "subtext": "ad, commercial",
        "synonyms": [
            "ad",
            "commercial"
        ],
        "countability": "countable"
    },
    {
        "word": "agreement",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "noun",
        "definitions": [
            {
                "text": "A decision or arrangement that two or more people or groups have agreed on.",
                "examples": [
                    "We finally reached an agreement."
                ]
            }
        ],
        "subtext": "deal, pact",
        "synonyms": [
            "deal",
            "pact"
        ],
        "countability": "countable",
        "opposite": "disagreement",
        "transcription": "əˈɡriːmənt"
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
        "countability": "countable",
        "transcription": "aɪl"
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
        "transcription": "ˌæplɪˈkeɪʃn"
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
        "transcription": "əˈpɔɪntmənt"
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
        "subtext": "news story, report",
        "synonyms": [
            "news story",
            "report"
        ],
        "countability": "countable",
        "transcription": "ˈɑːrtɪkl"
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
        "transcription": "ˈɑːrtɪst"
    },
    {
        "word": "atmosphere",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🌍",
        "form": "noun",
        "definitions": [
            {
                "text": "The layer of gases around the Earth.",
                "examples": [
                    "The atmosphere protects us from the Sun."
                ]
            }
        ],
        "subtext": "air, sky",
        "synonyms": [
            "air",
            "sky"
        ],
        "countability": "uncountable",
        "transcription": "ˈætməsfɪər"
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
        "transcription": "ˈbælkəni"
    },
    {
        "word": "benefit",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🎁",
        "form": "noun",
        "definitions": [
            {
                "text": "A helpful or good effect.",
                "examples": [
                    "One benefit of exercise is better sleep."
                ]
            }
        ],
        "subtext": "advantage, helpful effect",
        "synonyms": [
            "advantage",
            "helpful effect"
        ],
        "countability": "countable",
        "transcription": "ˈbɛnɪfɪt"
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
        "transcription": "bɪl"
    },
    {
        "word": "biodiversity",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌿",
        "form": "noun",
        "definitions": [
            {
                "text": "The number and types of plants and animals that live in a particular area.",
                "examples": [
                    "The rainforest has high biodiversity."
                ]
            }
        ],
        "subtext": "variety of life",
        "synonyms": [
            "variety of life"
        ],
        "countability": "uncountable",
        "transcription": "ˌbaɪoʊdaɪˈvɜːrsəti"
    },
    {
        "word": "biology",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🧬",
        "form": "noun",
        "definitions": [
            {
                "text": "The scientific study of living things.",
                "examples": [
                    "Biology is my favorite subject."
                ]
            }
        ],
        "subtext": "science subject",
        "synonyms": [
            "science subject"
        ],
        "countability": "uncountable",
        "transcription": "baɪˈɒlədʒi"
    },
    {
        "word": "blood",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🩸",
        "form": "noun",
        "definitions": [
            {
                "text": "The red liquid that flows through your body.",
                "examples": [
                    "The doctor took a sample of my blood."
                ]
            }
        ],
        "subtext": "body liquid",
        "synonyms": [
            "body liquid"
        ],
        "countability": "uncountable",
        "transcription": "blʌd"
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
        "subtext": "flight ticket, travel document",
        "synonyms": [
            "flight ticket",
            "travel document"
        ],
        "countability": "countable",
        "transcription": "ˈbɔːrdɪŋ pæs"
    },
    {
        "word": "bone",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🦴",
        "form": "noun",
        "plural": "bones",
        "definitions": [
            {
                "text": "One of the hard white parts inside the body.",
                "examples": [
                    "The human body has 206 bones."
                ]
            }
        ],
        "subtext": "body part",
        "synonyms": [
            "body part"
        ],
        "countability": "countable",
        "transcription": "boʊn"
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
        "subtext": "boundary, frontier",
        "synonyms": [
            "boundary",
            "frontier"
        ],
        "countability": "countable",
        "transcription": "ˈbɔːrdər"
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
        "synonyms": [
            "mind organ"
        ],
        "countability": "countable",
        "transcription": "breɪn"
    },
    {
        "word": "browser",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🌐",
        "form": "noun",
        "plural": "browsers",
        "definitions": [
            {
                "text": "A computer program that you use to look at pages on the internet.",
                "examples": [
                    "Which web browser do you use?"
                ]
            }
        ],
        "subtext": "web program",
        "synonyms": [
            "web program"
        ],
        "countability": "countable",
        "transcription": "ˈbraʊzər"
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
        "subtext": "monthly budget",
        "synonyms": [
            "financial plan"
        ],
        "countability": "countable",
        "transcription": "ˈbʌdʒɪt"
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
        "subtext": "hamburger, fast food",
        "synonyms": [
            "hamburger",
            "fast food"
        ],
        "countability": "countable",
        "transcription": "ˈbɜːrɡər"
    },
    {
        "word": "candidate",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🙋",
        "form": "noun",
        "plural": "candidates",
        "definitions": [
            {
                "text": "A person who is competing to get a job or an elected position.",
                "examples": [
                    "There are three candidates for mayor."
                ]
            }
        ],
        "subtext": "person in election",
        "synonyms": [
            "person in election"
        ],
        "countability": "countable",
        "transcription": "ˈkændɪdeɪt"
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
        "subtext": "main city, government seat",
        "synonyms": [
            "main city",
            "government seat"
        ],
        "countability": "countable",
        "transcription": "ˈkæpɪtl"
    },
    {
        "word": "carbon footprint",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "👣",
        "form": "noun",
        "definitions": [
            {
                "text": "The amount of carbon dioxide produced by the activities of a person or group.",
                "examples": [
                    "We should try to reduce our carbon footprint."
                ]
            }
        ],
        "subtext": "environmental impact",
        "synonyms": [
            "environmental impact"
        ],
        "countability": "countable",
        "transcription": "ˈkɑːrbən ˈfʊtprɪnt"
    },
    {
        "word": "cash machine",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏧",
        "form": "noun",
        "plural": "cash machines",
        "definitions": [
            {
                "text": "A machine in a wall where you can take money out of your bank account.",
                "examples": [
                    "Is there a cash machine near here?"
                ]
            }
        ],
        "subtext": "ATM",
        "synonyms": [
            "ATM"
        ],
        "countability": "countable",
        "transcription": "kæʃ məˈʃiːn"
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
        "transcription": "ˈsiːlɪŋ"
    },
    {
        "word": "cell",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🦠",
        "form": "noun",
        "definitions": [
            {
                "text": "The smallest basic unit of a plant or animal.",
                "examples": [
                    "The human body is made of billions of cells."
                ]
            }
        ],
        "subtext": "living unit",
        "synonyms": [
            "living unit"
        ],
        "countability": "countable",
        "transcription": "sɛl"
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
        "synonyms": [
            "personality"
        ],
        "countability": "uncountable",
        "transcription": "ˈkærəktər"
    },
    {
        "word": "chemistry",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🧪",
        "form": "noun",
        "definitions": [
            {
                "text": "The scientific study of substances and how they react with each other.",
                "examples": [
                    "We have chemistry class on Tuesdays."
                ]
            }
        ],
        "subtext": "science subject",
        "synonyms": [
            "science subject"
        ],
        "countability": "uncountable",
        "transcription": "ˈkɛmɪstri"
    },
    {
        "word": "client",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👤",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who uses the services of a professional person or organization.",
                "examples": [
                    "I have a meeting with a client this afternoon."
                ]
            }
        ],
        "subtext": "customer, buyer",
        "synonyms": [
            "customer",
            "buyer"
        ],
        "countability": "countable",
        "transcription": "ˈklaɪənt"
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
        "subtext": "climate change",
        "synonyms": [
            "weather patterns"
        ],
        "countability": "countable",
        "transcription": "ˈklaɪmət"
    },
    {
        "word": "climate change",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌍",
        "form": "noun",
        "definitions": [
            {
                "text": "Changes in the world's weather, in particular the fact that it is believed to be getting warmer.",
                "examples": [
                    "We must act now to stop climate change."
                ]
            }
        ],
        "subtext": "global warming",
        "synonyms": [
            "global warming"
        ],
        "countability": "uncountable",
        "transcription": "ˈklaɪmət tʃeɪndʒ"
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
        "subtext": "seashore, coastline",
        "synonyms": [
            "seashore",
            "coastline"
        ],
        "countability": "countable",
        "transcription": "koʊst"
    },
    {
        "word": "communication",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🗣️",
        "form": "noun",
        "definitions": [
            {
                "text": "The act of sharing information with others.",
                "examples": [
                    "Good communication is important in a team."
                ]
            }
        ],
        "subtext": "sharing info",
        "synonyms": [
            "sharing info"
        ],
        "countability": "uncountable",
        "transcription": "kəˌmjuːnɪˈkeɪʃn"
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
        "subtext": "local community",
        "synonyms": [
            "share interests"
        ],
        "countability": "countable",
        "transcription": "kəˈmjuːnəti"
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
        "synonyms": [
            "contest"
        ],
        "countability": "countable",
        "transcription": "ˌkɒmpəˈtɪʃn"
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
        "subtext": "reach a compromise",
        "synonyms": [
            "middle ground"
        ],
        "countability": "countable",
        "transcription": "ˈkɒmprəmaɪz"
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
        "subtext": "wildlife conservation",
        "synonyms": [
            "nature protection"
        ],
        "countability": "uncountable",
        "transcription": "ˌkɒnsərˈveɪʃn"
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
        "subtext": "sign a contract",
        "synonyms": [
            "legal document"
        ],
        "countability": "countable",
        "transcription": "ˈkɒntrækt"
    },
    {
        "word": "credit card",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💳",
        "form": "noun",
        "plural": "credit cards",
        "definitions": [
            {
                "text": "A small plastic card that you can use to buy things and pay for them later.",
                "examples": [
                    "Can I pay by credit card?"
                ]
            }
        ],
        "subtext": "payment card",
        "synonyms": [
            "payment card"
        ],
        "countability": "countable",
        "transcription": "ˈkrɛdɪt kɑːrd"
    },
    {
        "word": "currency",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💶",
        "form": "noun",
        "plural": "currencies",
        "definitions": [
            {
                "text": "The money that is used in a particular country.",
                "examples": [
                    "The euro is the currency used in many European countries."
                ]
            }
        ],
        "subtext": "money type",
        "synonyms": [
            "money type"
        ],
        "countability": "countable",
        "transcription": "ˈkʌrənsi"
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
        "transcription": "ˈkɜːrtn"
    },
    {
        "word": "custom",
        "level": "elementary",
        "theme": "customs_traditions_A2",
        "emoji": "🎎",
        "form": "noun",
        "definitions": [
            {
                "text": "A way of behaving or a belief that has been established for a long time.",
                "examples": [
                    "It is a local custom to wear bright colors."
                ]
            }
        ],
        "subtext": "tradition, habit",
        "synonyms": [
            "tradition",
            "habit"
        ],
        "countability": "countable",
        "transcription": "ˈkʌstəm"
    },
    {
        "word": "data",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📊",
        "form": "noun",
        "definitions": [
            {
                "text": "Information, especially facts or numbers, collected to be examined.",
                "examples": [
                    "We are still collecting data for the report."
                ]
            }
        ],
        "subtext": "information, facts",
        "synonyms": [
            "information",
            "facts"
        ],
        "countability": "uncountable",
        "transcription": "ˈdeɪtə"
    },
    {
        "word": "database",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🗄️",
        "form": "noun",
        "plural": "databases",
        "definitions": [
            {
                "text": "A large amount of information stored on a computer system.",
                "examples": [
                    "The names of all customers are in the database."
                ]
            }
        ],
        "subtext": "data storage",
        "synonyms": [
            "data storage"
        ],
        "countability": "countable",
        "transcription": "ˈdeɪtəbeɪs"
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
        "subtext": "meet a deadline",
        "synonyms": [
            "due date"
        ],
        "countability": "countable",
        "transcription": "ˈdɛdlaɪn"
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
        "subtext": "in debt",
        "synonyms": [
            "owe money"
        ],
        "countability": "uncountable",
        "transcription": "dɛt"
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
        "synonyms": [
            "dot in numbers"
        ],
        "countability": "countable",
        "transcription": "ˈdɛsɪml pɔɪnt"
    },
    {
        "word": "decision",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "noun",
        "definitions": [
            {
                "text": "A choice that you make after thinking about several possibilities.",
                "examples": [
                    "Have you made a decision yet?"
                ]
            }
        ],
        "subtext": "choice",
        "synonyms": [
            "choice"
        ],
        "countability": "countable",
        "transcription": "dɪˈsɪʒn"
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
        "synonyms": [
            "university qualification"
        ],
        "countability": "countable",
        "transcription": "dɪˈɡriː"
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
        "subtext": "down payment, security payment",
        "synonyms": [
            "down payment",
            "security payment"
        ],
        "countability": "countable",
        "transcription": "dɪˈpɒzɪt"
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
        "countability": "countable",
        "transcription": "ˌdɛstɪˈneɪʃn"
    },
    {
        "word": "detail",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📝",
        "form": "noun",
        "definitions": [
            {
                "text": "A small part of something.",
                "examples": [
                    "The report is full of interesting details."
                ]
            }
        ],
        "subtext": "small part",
        "synonyms": [
            "small part"
        ],
        "countability": "countable",
        "transcription": "ˈdiːteɪl"
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
        "countability": "countable",
        "transcription": "ˈdaɪət"
    },
    {
        "word": "disadvantage",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "➖",
        "form": "noun",
        "definitions": [
            {
                "text": "A condition or situation that causes problems.",
                "examples": [
                    "The main disadvantage of the job is the long commute."
                ]
            }
        ],
        "subtext": "drawback, minus point",
        "synonyms": [
            "drawback",
            "minus point"
        ],
        "countability": "countable",
        "opposite": "advantage",
        "transcription": "ˌdɪsədˈvɑːntɪdʒ"
    },
    {
        "word": "discovery",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "💡",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of finding something for the first time.",
                "examples": [
                    "The discovery of penicillin changed medicine."
                ]
            }
        ],
        "subtext": "finding, breakthrough",
        "synonyms": [
            "finding",
            "breakthrough"
        ],
        "countability": "countable",
        "transcription": "dɪˈskʌvəri"
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
        "transcription": "ˈdɪʃwɒʃər"
    },
    {
        "word": "division",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "➗",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of calculating how many times a number goes into another number.",
                "examples": [
                    "He is good at long division."
                ]
            }
        ],
        "subtext": "math process",
        "synonyms": [
            "math process"
        ],
        "countability": "uncountable",
        "transcription": "dɪˈvɪʒn"
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
        "subtext": "offline download",
        "synonyms": [
            "receive data"
        ],
        "countability": "countable",
        "opposite": "upload",
        "transcription": "ˌdaʊnˈloʊd"
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
        "subtext": "driver's permit, ID",
        "synonyms": [
            "driver's permit",
            "ID"
        ],
        "countability": "countable",
        "transcription": "ˈdraɪvɪŋ ˈlaɪsns"
    },
    {
        "word": "duty",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👮",
        "form": "noun",
        "definitions": [
            {
                "text": "Something that you have to do because it is part of your job, or something that you feel is right to do.",
                "examples": [
                    "It is my duty to report the problem."
                ]
            }
        ],
        "subtext": "responsibility, task",
        "synonyms": [
            "responsibility",
            "task"
        ],
        "countability": "countable",
        "transcription": "ˈdjuːti"
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
        "subtext": "natural disaster, seismic activity",
        "synonyms": [
            "natural disaster",
            "seismic activity"
        ],
        "countability": "countable",
        "transcription": "ˈɜːrθkweɪk"
    },
    {
        "word": "ecology",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌳",
        "form": "noun",
        "definitions": [
            {
                "text": "The relationship of living things to their environment and to each other.",
                "examples": [
                    "She is studying ecology at university."
                ]
            }
        ],
        "subtext": "nature science",
        "synonyms": [
            "nature science"
        ],
        "countability": "uncountable",
        "transcription": "iˈkɒlədʒi"
    },
    {
        "word": "economy",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📉",
        "form": "noun",
        "definitions": [
            {
                "text": "The system of trade and industry by which the wealth of a country is made and used.",
                "examples": [
                    "The global economy is growing slowly."
                ]
            }
        ],
        "subtext": "financial system",
        "synonyms": [
            "financial system"
        ],
        "countability": "countable",
        "transcription": "ɪˈkɒnəmi"
    },
    {
        "word": "election",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🗳️",
        "form": "noun",
        "plural": "elections",
        "definitions": [
            {
                "text": "A time when people vote to choose someone for an official position.",
                "examples": [
                    "There is a general election next month."
                ]
            }
        ],
        "subtext": "voting process",
        "synonyms": [
            "voting process"
        ],
        "countability": "countable",
        "transcription": "ɪˈlɛkʃn"
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
        "synonyms": [
            "worker"
        ],
        "countability": "countable",
        "opposite": "employer",
        "transcription": "ɪmˈplɔɪiː"
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
        "subtext": "boss, company",
        "synonyms": [
            "boss",
            "company"
        ],
        "countability": "countable",
        "opposite": "employee",
        "transcription": "ɪmˈplɔɪər"
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
        "subtext": "power, electricity",
        "synonyms": [
            "power",
            "electricity"
        ],
        "countability": "uncountable",
        "transcription": "ˈɛnərdʒi"
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
        "subtext": "protect the environment",
        "synonyms": [
            "nature"
        ],
        "countability": "countable",
        "transcription": "ɪnˈvaɪrənmənt"
    },
    {
        "word": "evidence",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "🔎",
        "form": "noun",
        "definitions": [
            {
                "text": "Anything that helps to prove that something is or is not true.",
                "examples": [
                    "There is no evidence that he committed the crime."
                ]
            }
        ],
        "subtext": "proof",
        "synonyms": [
            "proof"
        ],
        "countability": "uncountable",
        "transcription": "ˈɛvɪdəns"
    },
    {
        "word": "exchange rate",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💱",
        "form": "noun",
        "plural": "exchange rates",
        "definitions": [
            {
                "text": "The value of one currency compared to another.",
                "examples": [
                    "The exchange rate between the dollar and the pound has changed."
                ]
            }
        ],
        "subtext": "currency value",
        "synonyms": [
            "currency value"
        ],
        "countability": "countable",
        "transcription": "ɪksˈtʃeɪndʒ reɪt"
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
        "countability": "uncountable",
        "transcription": "ɪkˈspɪəriəns"
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
        "synonyms": [
            "scientific test"
        ],
        "countability": "countable",
        "transcription": "ɪkˈspɛrɪmənt"
    },
    {
        "word": "fact",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📑",
        "form": "noun",
        "definitions": [
            {
                "text": "Something that is known to have happened or to exist.",
                "examples": [
                    "Is that a fact or an opinion?"
                ]
            }
        ],
        "subtext": "truth, reality",
        "synonyms": [
            "truth",
            "reality"
        ],
        "countability": "countable",
        "transcription": "fækt"
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
        "subtext": "book a flight",
        "synonyms": [
            "airplane trip"
        ],
        "countability": "countable",
        "transcription": "flaɪt"
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
        "subtext": "natural disaster, heavy rain",
        "synonyms": [
            "natural disaster",
            "heavy rain"
        ],
        "countability": "countable",
        "transcription": "flʌd"
    },
    {
        "word": "formula",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "📝",
        "form": "noun",
        "definitions": [
            {
                "text": "A set of letters and numbers that show what a substance is made of.",
                "examples": [
                    "The chemical formula for water is H2O."
                ]
            }
        ],
        "subtext": "scientific code",
        "synonyms": [
            "scientific code"
        ],
        "countability": "countable",
        "transcription": "ˈfɔːrmjulə"
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
        "synonyms": [
            "old remains"
        ],
        "countability": "countable",
        "transcription": "ˈfɒsl"
    },
    {
        "word": "freedom",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "🕊️",
        "form": "noun",
        "definitions": [
            {
                "text": "The right to live in the way you want, say what you think, and go where you want.",
                "examples": [
                    "Everyone wants more freedom."
                ]
            }
        ],
        "subtext": "liberty",
        "synonyms": [
            "liberty"
        ],
        "countability": "uncountable",
        "transcription": "ˈfriːdəm"
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
        "synonyms": [
            "group of stars"
        ],
        "countability": "countable",
        "transcription": "ˈɡæləksi"
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
        "transcription": "ˈɡærɑːʒ"
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
        "synonyms": [
            "climate warming"
        ],
        "countability": "uncountable",
        "transcription": "ˈɡloʊbl ˈwɔːrmɪŋ"
    },
    {
        "word": "goal",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎯",
        "form": "noun",
        "definitions": [
            {
                "text": "Something that you want to achieve.",
                "examples": [
                    "My main goal is to learn English."
                ]
            }
        ],
        "subtext": "target, aim",
        "synonyms": [
            "target",
            "aim"
        ],
        "countability": "countable",
        "transcription": "ɡoʊl"
    },
    {
        "word": "government",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🏛️",
        "form": "noun",
        "definitions": [
            {
                "text": "The group of people who officially control a country.",
                "examples": [
                    "The government is planning new taxes."
                ]
            }
        ],
        "subtext": "authorities",
        "synonyms": [
            "authorities"
        ],
        "countability": "countable",
        "transcription": "ˈɡʌvərnmənt"
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
        "subtext": "laws of gravity",
        "synonyms": [
            "force of nature"
        ],
        "countability": "uncountable",
        "transcription": "ˈɡrævəti"
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
        "synonyms": [
            "travel book"
        ],
        "countability": "countable",
        "transcription": "ˈɡaɪdbʊk"
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
        "synonyms": [
            "natural home"
        ],
        "countability": "countable",
        "transcription": "ˈhæbɪtæt"
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
        "synonyms": [
            "divided by two"
        ],
        "countability": "countable",
        "transcription": "hɑːf"
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
        "synonyms": [
            "computer parts"
        ],
        "countability": "uncountable",
        "opposite": "software",
        "transcription": "ˈhɑːrdwɛər"
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
        "subtext": "front page headline",
        "synonyms": [
            "news title"
        ],
        "countability": "countable",
        "transcription": "ˈhɛdlaɪn"
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
        "subtext": "main road, motorway",
        "synonyms": [
            "main road",
            "motorway"
        ],
        "countability": "countable",
        "transcription": "ˈhaɪweɪ"
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
        "synonyms": [
            "who you are"
        ],
        "countability": "uncountable",
        "transcription": "aɪˈdɛntəti"
    },
    {
        "word": "impact",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💥",
        "form": "noun",
        "definitions": [
            {
                "text": "A powerful effect that something has on a situation or person.",
                "examples": [
                    "The new law will have a big impact on small businesses."
                ]
            }
        ],
        "subtext": "effect, influence",
        "synonyms": [
            "effect",
            "influence"
        ],
        "countability": "countable",
        "transcription": "ˈɪmpækt"
    },
    {
        "word": "income",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "The money that you earn from your work or that you receive from investments.",
                "examples": [
                    "He has a high annual income."
                ]
            }
        ],
        "subtext": "earnings, salary",
        "synonyms": [
            "earnings",
            "salary"
        ],
        "countability": "uncountable",
        "transcription": "ˈɪnkʌm"
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
        "synonyms": [
            "business sector"
        ],
        "countability": "uncountable",
        "transcription": "ˈɪndəstri"
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
        "synonyms": [
            "food component"
        ],
        "countability": "countable",
        "transcription": "ɪnˈɡriːdiənt"
    },
    {
        "word": "innovation",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "💡",
        "form": "noun",
        "definitions": [
            {
                "text": "A new idea or method.",
                "examples": [
                    "The company is known for its technological innovation."
                ]
            }
        ],
        "subtext": "new idea",
        "synonyms": [
            "new idea"
        ],
        "countability": "countable",
        "transcription": "ˌɪnəˈveɪʃn"
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
        "synonyms": [
            "musical object"
        ],
        "countability": "countable",
        "transcription": "ˈɪnstrumənt"
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
        "subtext": "protection, coverage",
        "synonyms": [
            "protection",
            "coverage"
        ],
        "countability": "uncountable",
        "transcription": "ɪnˈʃʊərəns"
    },
    {
        "word": "interest",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💹",
        "form": "noun",
        "definitions": [
            {
                "text": "Money that a bank or financial institution pays you for keeping money there.",
                "examples": [
                    "The bank pays 2% interest on my savings."
                ]
            }
        ],
        "subtext": "bank profit",
        "synonyms": [
            "bank profit"
        ],
        "countability": "uncountable",
        "transcription": "ˈɪntrəst"
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
        "synonyms": [
            "bank percentage"
        ],
        "countability": "countable",
        "transcription": "ˈɪntrəst reɪt"
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
        "countability": "countable",
        "transcription": "ˈɪntərvjuː"
    },
    {
        "word": "invention",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "⚙️",
        "form": "noun",
        "definitions": [
            {
                "text": "Something that has never been made before.",
                "examples": [
                    "The light bulb was a great invention."
                ]
            }
        ],
        "subtext": "creation",
        "synonyms": [
            "creation"
        ],
        "countability": "countable",
        "transcription": "ɪnˈvɛnʃn"
    },
    {
        "word": "investment",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📈",
        "form": "noun",
        "plural": "investments",
        "definitions": [
            {
                "text": "The act of putting money into something to make a profit.",
                "examples": [
                    "Buying a house is usually a good investment."
                ]
            }
        ],
        "subtext": "financial asset",
        "synonyms": [
            "financial asset"
        ],
        "countability": "countable",
        "transcription": "ɪnˈvɛstmənt"
    },
    {
        "word": "joint",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🦵",
        "form": "noun",
        "plural": "joints",
        "definitions": [
            {
                "text": "A place in your body where two bones are connected.",
                "examples": [
                    "The knee is a major joint."
                ]
            }
        ],
        "subtext": "connection",
        "synonyms": [
            "connection"
        ],
        "countability": "countable",
        "transcription": "dʒɔɪnt"
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
        "subtext": "news journalist",
        "synonyms": [
            "reporter"
        ],
        "countability": "countable",
        "transcription": "ˈdʒɜːrnəlɪst"
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
        "subtext": "long journey",
        "synonyms": [
            "travel"
        ],
        "countability": "countable",
        "transcription": "ˈdʒɜːrni"
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
        "opposite": "injustice",
        "transcription": "ˈdʒʌstɪs"
    },
    {
        "word": "kidney",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🫘",
        "form": "noun",
        "plural": "kidneys",
        "definitions": [
            {
                "text": "One of the two organs in your body that remove waste from your blood.",
                "examples": [
                    "Humans have two kidneys."
                ]
            }
        ],
        "subtext": "internal organ",
        "synonyms": [
            "internal organ"
        ],
        "countability": "countable",
        "transcription": "ˈkɪdni"
    },
    {
        "word": "laboratory",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔬",
        "form": "noun",
        "plural": "laboratories",
        "definitions": [
            {
                "text": "A room or building used for scientific tests.",
                "examples": [
                    "The scientists are working in the laboratory."
                ]
            }
        ],
        "subtext": "lab",
        "synonyms": [
            "lab"
        ],
        "countability": "countable",
        "transcription": "ləˈbɒrətri"
    },
    {
        "word": "landfill",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🗑️",
        "form": "noun",
        "plural": "landfills",
        "definitions": [
            {
                "text": "A place where waste is buried under the ground.",
                "examples": [
                    "Too much plastic ends up in landfills."
                ]
            }
        ],
        "subtext": "rubbish dump",
        "synonyms": [
            "rubbish dump"
        ],
        "countability": "countable",
        "transcription": "ˈlændfɪl"
    },
    {
        "word": "law",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚖️",
        "form": "noun",
        "definitions": [
            {
                "text": "The system of rules that people in a country must obey.",
                "examples": [
                    "It is against the law to steal."
                ]
            }
        ],
        "subtext": "rules",
        "synonyms": [
            "rules"
        ],
        "countability": "countable",
        "transcription": "lɔː"
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
        "subtext": "consult a lawyer",
        "synonyms": [
            "legal professional"
        ],
        "countability": "countable",
        "transcription": "ˈlɔɪər"
    },
    {
        "word": "leader",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "👑",
        "form": "noun",
        "definitions": [
            {
                "text": "A person in control of a group or country.",
                "examples": [
                    "He is a natural leader."
                ]
            }
        ],
        "subtext": "boss, head",
        "synonyms": [
            "boss",
            "head"
        ],
        "countability": "countable",
        "transcription": "ˈliːdər"
    },
    {
        "word": "literature",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "📚",
        "form": "noun",
        "definitions": [
            {
                "text": "Written artistic works, such as books and poems.",
                "examples": [
                    "She studies English literature."
                ]
            }
        ],
        "subtext": "books",
        "synonyms": [
            "books"
        ],
        "countability": "uncountable",
        "transcription": "ˈlɪtrətʃər"
    },
    {
        "word": "liver",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🧪",
        "form": "noun",
        "plural": "livers",
        "definitions": [
            {
                "text": "A large organ in your body that cleans your blood.",
                "examples": [
                    "The liver is located on the right side of the body."
                ]
            }
        ],
        "subtext": "internal organ",
        "synonyms": [
            "internal organ"
        ],
        "countability": "countable",
        "transcription": "ˈlɪvər"
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
        "countability": "countable",
        "transcription": "loʊn"
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
        "subtext": "regional food, local dishes",
        "synonyms": [
            "regional food",
            "local dishes"
        ],
        "countability": "countable",
        "transcription": "ˈloʊkl kwɪˈziːn"
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
        "subtext": "carry luggage",
        "synonyms": [
            "baggage"
        ],
        "countability": "uncountable",
        "transcription": "ˈlʌɡɪdʒ"
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
        "synonyms": [
            "breathing organ"
        ],
        "countability": "countable",
        "transcription": "lʌŋ"
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
        "subtext": "leaders, administration",
        "synonyms": [
            "leaders",
            "administration"
        ],
        "countability": "uncountable",
        "transcription": "ˈmænɪdʒmənt"
    },
    {
        "word": "mathematics",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "🧮",
        "form": "noun",
        "definitions": [
            {
                "text": "The study of numbers, shapes, and space.",
                "examples": [
                    "Maths is a core subject in school."
                ]
            }
        ],
        "subtext": "maths",
        "synonyms": [
            "maths"
        ],
        "countability": "uncountable",
        "transcription": "ˌmæθəˈmætɪks"
    },
    {
        "word": "mayor",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "mayors",
        "definitions": [
            {
                "text": "The leader of a city or town.",
                "examples": [
                    "The mayor gave a speech at the opening of the park."
                ]
            }
        ],
        "subtext": "city leader",
        "synonyms": [
            "city leader"
        ],
        "countability": "countable",
        "transcription": "ˈmeɪər"
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
        "transcription": "məˈkænɪk"
    },
    {
        "word": "media",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📺",
        "form": "noun",
        "definitions": [
            {
                "text": "Newspapers, magazines, radio and television considered as a group.",
                "examples": [
                    "The media reported the news quickly."
                ]
            }
        ],
        "subtext": "news outlets",
        "synonyms": [
            "news outlets"
        ],
        "countability": "uncountable",
        "transcription": "ˈmiːdiə"
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
        "synonyms": [
            "magnifying tool"
        ],
        "countability": "countable",
        "transcription": "ˈmaɪkrəskoʊp"
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
        "transcription": "ˈmaɪkrəweɪv"
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
        "subtext": "subtraction, less",
        "synonyms": [
            "subtraction",
            "less"
        ],
        "transcription": "ˈmaɪnəs"
    },
    {
        "word": "monitor",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "monitors",
        "definitions": [
            {
                "text": "A computer screen.",
                "examples": [
                    "The graphic designer needs a large monitor."
                ]
            }
        ],
        "subtext": "screen",
        "synonyms": [
            "screen"
        ],
        "countability": "countable",
        "transcription": "ˈmɒnɪtər"
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
        "subtext": "pay the mortgage",
        "synonyms": [
            "home loan"
        ],
        "countability": "countable",
        "transcription": "ˈmɔːrɡɪdʒ"
    },
    {
        "word": "multiplication",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "✖️",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of adding a number to itself a particular number of times.",
                "examples": [
                    "Multiplication is harder than addition."
                ]
            }
        ],
        "subtext": "math process",
        "synonyms": [
            "math process"
        ],
        "countability": "uncountable",
        "transcription": "ˌmʌltɪplɪˈkeɪʃn"
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
        "synonyms": [
            "body tissue"
        ],
        "countability": "countable",
        "transcription": "ˈmʌsl"
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
        "synonyms": [
            "protected area"
        ],
        "countability": "countable",
        "transcription": "ˈneɪtʃər rɪˈzɜːrv"
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
        "subtext": "friendly neighbourhood",
        "synonyms": [
            "local area"
        ],
        "countability": "countable",
        "transcription": "ˈneɪbərhʊd"
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
        "subtext": "web, system",
        "synonyms": [
            "web",
            "system"
        ],
        "countability": "countable",
        "transcription": "ˈnɛtwɜːrk"
    },
    {
        "word": "organism",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🌿",
        "form": "noun",
        "definitions": [
            {
                "text": "A single living plant, animal, or bacteria.",
                "examples": [
                    "A virus is a type of organism."
                ]
            }
        ],
        "subtext": "living thing",
        "synonyms": [
            "living thing"
        ],
        "countability": "countable",
        "transcription": "ˈɔːrɡənɪzəm"
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
        "subtext": "work overtime",
        "synonyms": [
            "extra hours"
        ],
        "countability": "uncountable",
        "transcription": "ˈoʊvərtaɪm"
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
        "subtext": "car park, parking area",
        "synonyms": [
            "car park",
            "parking area"
        ],
        "countability": "countable",
        "transcription": "ˈpɑːrkɪŋ lɒt"
    },
    {
        "word": "password",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🔑",
        "form": "noun",
        "plural": "passwords",
        "definitions": [
            {
                "text": "A secret word or combination of letters and numbers that you use to use a computer or website.",
                "examples": [
                    "Never tell anyone your password."
                ]
            }
        ],
        "subtext": "secret code",
        "synonyms": [
            "secret code"
        ],
        "countability": "countable",
        "transcription": "ˈpæswɜːrd"
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
        "subtext": "retirement fund, old age pay",
        "synonyms": [
            "retirement fund",
            "old age pay"
        ],
        "countability": "countable",
        "transcription": "ˈpɛnʃn"
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
        "subtext": "per hundred, percentage",
        "synonyms": [
            "per hundred",
            "percentage"
        ],
        "countability": "uncountable",
        "transcription": "pərˈsɛnt"
    },
    {
        "word": "perspective",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🔭",
        "form": "noun",
        "definitions": [
            {
                "text": "A particular way of considering something.",
                "examples": [
                    "He has a very different perspective on the problem."
                ]
            }
        ],
        "subtext": "viewpoint",
        "synonyms": [
            "viewpoint"
        ],
        "countability": "countable",
        "transcription": "pərˈspɛktɪv"
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
        "transcription": "ˈfɑːrməsi"
    },
    {
        "word": "philosophy",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "noun",
        "definitions": [
            {
                "text": "The study of the fundamental nature of knowledge, reality, and existence.",
                "examples": [
                    "She is studying philosophy at university."
                ]
            }
        ],
        "subtext": "thinking system",
        "synonyms": [
            "thinking system"
        ],
        "countability": "uncountable",
        "transcription": "fəˈlɒsəfi"
    },
    {
        "word": "physics",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔭",
        "form": "noun",
        "definitions": [
            {
                "text": "The scientific study of matter and energy.",
                "examples": [
                    "Physics can explain how planes fly."
                ]
            }
        ],
        "subtext": "science subject",
        "synonyms": [
            "science subject"
        ],
        "countability": "uncountable",
        "transcription": "ˈfɪzɪks"
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
        "subtext": "addition, and",
        "synonyms": [
            "addition",
            "and"
        ],
        "transcription": "plʌs"
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
        "subtext": "audio show, online radio",
        "synonyms": [
            "audio show",
            "online radio"
        ],
        "countability": "countable",
        "transcription": "ˈpɒdkæst"
    },
    {
        "word": "policy",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "📜",
        "form": "noun",
        "plural": "policies",
        "definitions": [
            {
                "text": "A set of ideas or a plan of what to do in particular situations that has been agreed to officially by a group of people.",
                "examples": [
                    "The company has a new policy on working from home."
                ]
            }
        ],
        "subtext": "official rules",
        "synonyms": [
            "official rules"
        ],
        "countability": "countable",
        "transcription": "ˈpɒləsi"
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
        "countability": "uncountable",
        "transcription": "pəˈluːʃn"
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
        "subtext": "number of people, inhabitants",
        "synonyms": [
            "number of people",
            "inhabitants"
        ],
        "countability": "countable",
        "transcription": "ˌpɒpjuˈneɪʃn"
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
        "subtext": "personal space, secrecy",
        "synonyms": [
            "personal space",
            "secrecy"
        ],
        "countability": "uncountable",
        "transcription": "ˈpraɪvəsi"
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
        "subtext": "get a promotion",
        "synonyms": [
            "career advancement"
        ],
        "countability": "countable",
        "opposite": "demotion",
        "transcription": "prəˈmoʊʃn"
    },
    {
        "word": "proof",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "📑",
        "form": "noun",
        "definitions": [
            {
                "text": "A fact or piece of information that shows that something is true.",
                "examples": [
                    "Do you have any proof of your identity?"
                ]
            }
        ],
        "subtext": "evidence",
        "synonyms": [
            "evidence"
        ],
        "countability": "uncountable",
        "transcription": "pruːf"
    },
    {
        "word": "psychology",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "The scientific study of the human mind and behavior.",
                "examples": [
                    "Psychology can help us understand why people behave in certain ways."
                ]
            }
        ],
        "subtext": "mind science",
        "synonyms": [
            "mind science"
        ],
        "countability": "uncountable",
        "transcription": "saɪˈkɒlədʒi"
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
        "synonyms": [
            "divided by four"
        ],
        "countability": "countable",
        "transcription": "ˈkwɔːrtər"
    },
    {
        "word": "reality",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "👓",
        "form": "noun",
        "definitions": [
            {
                "text": "The way things or situations really are.",
                "examples": [
                    "The reality of the situation is quite difficult."
                ]
            }
        ],
        "subtext": "truth, real world",
        "synonyms": [
            "truth",
            "real world"
        ],
        "countability": "uncountable",
        "transcription": "riˈæləti"
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
        "transcription": "rɪˈsiːt"
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
        "synonyms": [
            "front desk"
        ],
        "countability": "uncountable",
        "transcription": "rɪˈsɛpʃn"
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
        "synonyms": [
            "cooking instructions"
        ],
        "countability": "countable",
        "transcription": "ˈrɛsəpi"
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
        "subtext": "waste management, eco-friendly",
        "synonyms": [
            "waste management",
            "eco-friendly"
        ],
        "countability": "uncountable",
        "transcription": "ˌriːˈsaɪklɪŋ"
    },
    {
        "word": "recycling bin",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "noun",
        "definitions": [
            {
                "text": "A container for waste that can be recycled.",
                "examples": [
                    "Put the glass bottles in the recycling bin."
                ]
            }
        ],
        "subtext": "green bin",
        "synonyms": [
            "green bin"
        ],
        "countability": "countable",
        "transcription": "ˌriːˈsaɪklɪŋ bɪn"
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
        "subtext": "area, district",
        "synonyms": [
            "area",
            "district"
        ],
        "countability": "countable",
        "transcription": "ˈriːdʒən"
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
        "transcription": "rɪˈleɪʃnʃɪp"
    },
    {
        "word": "renewable energy",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "noun",
        "definitions": [
            {
                "text": "Energy from sources that do not run out, like the sun or wind.",
                "examples": [
                    "Solar power is a type of renewable energy."
                ]
            }
        ],
        "subtext": "green energy",
        "synonyms": [
            "green energy"
        ],
        "countability": "uncountable",
        "transcription": "rɪˈnjuːəbl ˈɛnərdʒi"
    },
    {
        "word": "research",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🔍",
        "form": "noun",
        "definitions": [
            {
                "text": "Detailed study of a subject in order to discover new information.",
                "examples": [
                    "They are doing research into cancer."
                ]
            }
        ],
        "subtext": "investigation",
        "synonyms": [
            "investigation"
        ],
        "countability": "uncountable",
        "transcription": "rɪˈsɜːrtʃ"
    },
    {
        "word": "resource",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌲",
        "form": "noun",
        "definitions": [
            {
                "text": "Something such as useful land, or minerals such as oil or coal, that exists in a country.",
                "examples": [
                    "Water is a precious natural resource."
                ]
            }
        ],
        "subtext": "asset, supply",
        "synonyms": [
            "asset",
            "supply"
        ],
        "countability": "countable",
        "transcription": "ˈriːsɔːrs"
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
        "subtext": "traffic circle, intersection",
        "synonyms": [
            "traffic circle",
            "intersection"
        ],
        "countability": "countable",
        "transcription": "ˈraʊndəbaʊt"
    },
    {
        "word": "safety",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "🦺",
        "form": "noun",
        "definitions": [
            {
                "text": "The state of being safe and protected from danger.",
                "examples": [
                    "Safety is our top priority."
                ]
            }
        ],
        "subtext": "security",
        "synonyms": [
            "security"
        ],
        "countability": "uncountable",
        "opposite": "danger",
        "transcription": "ˈseɪfti"
    },
    {
        "word": "salary",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "noun",
        "plural": "salaries",
        "subtext": "pay, income",
        "synonyms": [
            "pay",
            "income"
        ],
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
        "transcription": "ˈsæləri"
    },
    {
        "word": "satellite",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🛰️",
        "form": "noun",
        "plural": "satellites",
        "definitions": [
            {
                "text": "A machine that goes around the Earth to send information.",
                "examples": [
                    "GPS uses satellites to find your location."
                ]
            }
        ],
        "subtext": "space machine",
        "synonyms": [
            "space machine"
        ],
        "countability": "countable",
        "transcription": "ˈsætəlaɪt"
    },
    {
        "word": "savings",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "The money you keep, usually in a bank, and do not spend.",
                "examples": [
                    "I put my savings in a high-interest account."
                ]
            }
        ],
        "subtext": "saved money",
        "synonyms": [
            "saved money"
        ],
        "countability": "uncountable",
        "transcription": "ˈseɪvɪŋz"
    },
    {
        "word": "scientist",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "👨‍🔬",
        "form": "noun",
        "definitions": [
            {
                "text": "An expert who studies or works in one of the sciences.",
                "examples": [
                    "The scientist discovered a new type of bacteria."
                ]
            }
        ],
        "subtext": "researcher",
        "synonyms": [
            "researcher"
        ],
        "countability": "countable",
        "transcription": "ˈsaɪəntɪst"
    },
    {
        "word": "security",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "🛡️",
        "form": "noun",
        "definitions": [
            {
                "text": "Protection against danger or crime.",
                "examples": [
                    "The building has tight security."
                ]
            }
        ],
        "subtext": "safety, protection",
        "synonyms": [
            "safety",
            "protection"
        ],
        "countability": "uncountable",
        "transcription": "sɪˈkjʊərəti"
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
        "synonyms": [
            "visiting attractions"
        ],
        "countability": "uncountable",
        "transcription": "ˈsaɪtˌsiːɪŋ"
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
        "synonyms": [
            "body bones"
        ],
        "countability": "countable",
        "transcription": "ˈskɛlɪtn"
    },
    {
        "word": "skin",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🧴",
        "form": "noun",
        "definitions": [
            {
                "text": "The outer layer of the body.",
                "examples": [
                    "Too much sun is bad for your skin."
                ]
            }
        ],
        "subtext": "body surface",
        "synonyms": [
            "body surface"
        ],
        "countability": "uncountable",
        "transcription": "skɪn"
    },
    {
        "word": "society",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "👥",
        "form": "noun",
        "definitions": [
            {
                "text": "A large group of people who live together in an organized way.",
                "examples": [
                    "We live in a multicultural society."
                ]
            }
        ],
        "subtext": "community, people",
        "synonyms": [
            "community",
            "people"
        ],
        "countability": "uncountable",
        "transcription": "səˈsaɪəti"
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
        "synonyms": [
            "computer programs"
        ],
        "countability": "uncountable",
        "opposite": "hardware",
        "transcription": "ˈsɒftwɛər"
    },
    {
        "word": "solar energy",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Energy that uses the power of the sun to produce electricity.",
                "examples": [
                    "Solar energy is clean and renewable."
                ]
            }
        ],
        "subtext": "sun power",
        "synonyms": [
            "sun power"
        ],
        "countability": "uncountable",
        "transcription": "ˈsoʊlər ˈɛnərdʒi"
    },
    {
        "word": "solar panel",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "A device that changes energy from the sun into electricity.",
                "examples": [
                    "Many houses have solar panels on their roofs."
                ]
            }
        ],
        "subtext": "sun power tool",
        "synonyms": [
            "sun power tool"
        ],
        "countability": "countable",
        "transcription": "ˈsoʊlər ˈpænl"
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
        "synonyms": [
            "sun energy"
        ],
        "countability": "uncountable",
        "transcription": "ˈsoʊlər ˈpaʊər"
    },
    {
        "word": "solution",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "noun",
        "definitions": [
            {
                "text": "The answer to a problem.",
                "examples": [
                    "We need to find a solution to this problem quickly."
                ]
            }
        ],
        "subtext": "answer",
        "synonyms": [
            "answer"
        ],
        "countability": "countable",
        "transcription": "səˈluːʃn"
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
        "subtext": "travel souvenir",
        "synonyms": [
            "gift"
        ],
        "countability": "countable",
        "transcription": "ˌsuːvəˈnɪər"
    },
    {
        "word": "spine",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🦴",
        "form": "noun",
        "plural": "spines",
        "definitions": [
            {
                "text": "The line of bones down the middle of your back.",
                "examples": [
                    "Exercise can help keep your spine healthy."
                ]
            }
        ],
        "subtext": "backbone",
        "synonyms": [
            "backbone"
        ],
        "countability": "countable",
        "transcription": "spaɪn"
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
        "transcription": "ˈsteɪdiəm"
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
        "subtext": "live streaming",
        "synonyms": [
            "online video"
        ],
        "countability": "uncountable",
        "transcription": "ˈstriːmɪŋ"
    },
    {
        "word": "substance",
        "level": "elementary",
        "theme": "basic_science_A2",
        "emoji": "🧪",
        "form": "noun",
        "definitions": [
            {
                "text": "A material with particular physical characteristics.",
                "examples": [
                    "Water is a liquid substance."
                ]
            }
        ],
        "subtext": "material",
        "synonyms": [
            "material"
        ],
        "countability": "countable",
        "transcription": "ˈsʌbstəns"
    },
    {
        "word": "subtraction",
        "level": "elementary",
        "theme": "basic_arithmetic_A2",
        "emoji": "➖",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of taking one number away from another.",
                "examples": [
                    "We are learning subtraction in school today."
                ]
            }
        ],
        "subtext": "math process",
        "synonyms": [
            "math process"
        ],
        "countability": "uncountable",
        "transcription": "səbˈtrækʃn"
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
        "subtext": "offer support",
        "synonyms": [
            "assistance"
        ],
        "countability": "uncountable",
        "transcription": "səˈpɔːrt"
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
        "subtext": "environmental sustainability",
        "synonyms": [
            "eco-friendly"
        ],
        "countability": "uncountable",
        "transcription": "səˌsteɪnəˈbɪləti"
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
        "subtext": "spicy taco",
        "synonyms": [
            "Mexican food"
        ],
        "countability": "countable",
        "transcription": "ˈtɑːkoʊ"
    },
    {
        "word": "target",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎯",
        "form": "noun",
        "definitions": [
            {
                "text": "A result that you try to achieve.",
                "examples": [
                    "We met our sales target for the month."
                ]
            }
        ],
        "subtext": "goal, aim",
        "synonyms": [
            "goal",
            "aim"
        ],
        "countability": "countable",
        "transcription": "ˈtɑːrɡɪt"
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
        "subtext": "government levy, duty",
        "synonyms": [
            "government levy",
            "duty"
        ],
        "countability": "countable",
        "transcription": "tæks"
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
        "subtext": "tech, high-tech",
        "synonyms": [
            "tech",
            "high-tech"
        ],
        "countability": "uncountable",
        "transcription": "tɛkˈnɒlədʒi"
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
        "synonyms": [
            "renter"
        ],
        "countability": "countable",
        "opposite": "landlord",
        "transcription": "ˈtɛnənt"
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
        "subtext": "departure terminal",
        "synonyms": [
            "airport building"
        ],
        "countability": "countable",
        "transcription": "ˈtɜːrmɪnl"
    },
    {
        "word": "threat",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚠️",
        "form": "noun",
        "definitions": [
            {
                "text": "A suggestion that something unpleasant or violent will happen.",
                "examples": [
                    "Pollution is a threat to the environment."
                ]
            }
        ],
        "subtext": "danger, risk",
        "synonyms": [
            "danger",
            "risk"
        ],
        "countability": "countable",
        "transcription": "θrɛt"
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
        "transcription": "ˈtaɪɡər"
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
        "subtext": "sum, final amount",
        "synonyms": [
            "sum",
            "final amount"
        ],
        "countability": "countable",
        "transcription": "ˈtoʊtl"
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
        "subtext": "traveler, visitor",
        "synonyms": [
            "traveler",
            "visitor"
        ],
        "countability": "countable",
        "transcription": "ˈtʊərɪst"
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
        "subtext": "heavy traffic, congestion",
        "synonyms": [
            "heavy traffic",
            "congestion"
        ],
        "countability": "countable",
        "transcription": "ˈtræfɪk dʒæm"
    },
    {
        "word": "trial",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "trials",
        "definitions": [
            {
                "text": "A formal meeting in a court to decide if someone is guilty of a crime.",
                "examples": [
                    "The trial lasted for two weeks."
                ]
            }
        ],
        "subtext": "court case",
        "synonyms": [
            "court case"
        ],
        "countability": "countable",
        "transcription": "ˈtraɪəl"
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
        "synonyms": [
            "shopping cart"
        ],
        "countability": "countable",
        "transcription": "ˈtrɒli"
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
        "subtext": "mutual trust",
        "synonyms": [
            "confidence"
        ],
        "countability": "uncountable",
        "transcription": "trʌst"
    },
    {
        "word": "truth",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📑",
        "form": "noun",
        "definitions": [
            {
                "text": "The real facts about a situation.",
                "examples": [
                    "You must tell the truth in court."
                ]
            }
        ],
        "subtext": "reality, facts",
        "synonyms": [
            "reality",
            "facts"
        ],
        "countability": "uncountable",
        "opposite": "lie",
        "transcription": "truːθ"
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
        "subtext": "online upload",
        "synonyms": [
            "send data"
        ],
        "countability": "countable",
        "opposite": "download",
        "transcription": "ˌʌpˈloʊd"
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
        "transcription": "ˈvækjuːm ˈkliːnər"
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
        "subtext": "low land, canyon",
        "synonyms": [
            "low land",
            "canyon"
        ],
        "countability": "countable",
        "transcription": "ˈvæli"
    },
    {
        "word": "value",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💎",
        "form": "noun",
        "definitions": [
            {
                "text": "The amount of money that something is worth.",
                "examples": [
                    "What is the value of this ring?"
                ]
            }
        ],
        "subtext": "worth, price",
        "synonyms": [
            "worth",
            "price"
        ],
        "countability": "uncountable",
        "transcription": "ˈvæljuː"
    },
    {
        "word": "virus",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🦠",
        "form": "noun",
        "plural": "viruses",
        "definitions": [
            {
                "text": "A computer program that is designed to cause problems for other computers.",
                "examples": [
                    "My computer has a virus."
                ]
            }
        ],
        "subtext": "harmful program",
        "synonyms": [
            "harmful program"
        ],
        "countability": "countable",
        "transcription": "ˈvaɪrəs"
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
        "subtext": "take vitamins",
        "synonyms": [
            "health supplement"
        ],
        "countability": "countable",
        "transcription": "ˈvaɪtəmɪn"
    },
    {
        "word": "vote",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🗳️",
        "form": "noun",
        "plural": "votes",
        "definitions": [
            {
                "text": "An official choice that you make in an election.",
                "examples": [
                    "Every vote is important."
                ]
            }
        ],
        "subtext": "choice",
        "synonyms": [
            "choice"
        ],
        "countability": "countable",
        "transcription": "voʊt"
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
        "transcription": "ˈwɒlɪt"
    },
    {
        "word": "waste",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🗑️",
        "form": "noun",
        "definitions": [
            {
                "text": "Unwanted material or substances that are left after you have used something.",
                "examples": [
                    "Don't throw plastic waste in the river."
                ]
            }
        ],
        "subtext": "rubbish",
        "synonyms": [
            "rubbish"
        ],
        "countability": "uncountable",
        "transcription": "weɪst"
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
        "synonyms": [
            "marriage ceremony"
        ],
        "countability": "countable",
        "transcription": "ˈwɛdɪŋ"
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
        "synonyms": [
            "wild animals"
        ],
        "countability": "uncountable",
        "transcription": "ˈwaɪldlaɪf"
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
        "synonyms": [
            "wind energy site"
        ],
        "countability": "countable",
        "transcription": "wɪnd fɑːrm"
    },
    {
        "word": "wind turbine",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌬️",
        "form": "noun",
        "definitions": [
            {
                "text": "A tall machine with blades that are turned by the wind to produce electricity.",
                "examples": [
                    "There is a large wind farm with many turbines near the coast."
                ]
            }
        ],
        "subtext": "wind power tool",
        "synonyms": [
            "wind power tool"
        ],
        "countability": "countable",
        "transcription": "wɪnd ˈtɜːrbaɪn"
    },
    {
        "word": "witness",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "👁️",
        "form": "noun",
        "plural": "witnesses",
        "definitions": [
            {
                "text": "A person who sees an event, typically a crime or accident, take place.",
                "examples": [
                    "The police are looking for witnesses to the accident."
                ]
            }
        ],
        "subtext": "observer",
        "synonyms": [
            "observer"
        ],
        "countability": "countable",
        "transcription": "ˈwɪtnəs"
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
        "subtext": "exercise session, training",
        "synonyms": [
            "exercise session",
            "training"
        ],
        "countability": "countable",
        "transcription": "ˈwɜːrkaʊt"
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
        "synonyms": [
            "stretching exercise"
        ],
        "countability": "uncountable",
        "transcription": "ˈjoʊɡə"
    },
    {
        "word": "accident",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🚗💥",
        "form": "noun",
        "definitions": [
            {
                "text": "Something bad that happens that is not intended and that causes injury or damage.",
                "examples": [
                    "He had a serious accident at work.",
                    "The accident was caused by ice on the road."
                ]
            }
        ],
        "subtext": "unfortunate event, crash, mishap",
        "synonyms": [
            "unfortunate event",
            "crash",
            "mishap"
        ],
        "countability": "countable",
        "transcription": "ˈæksɪdənt"
    },
    {
        "word": "adventure",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🎒",
        "form": "noun",
        "definitions": [
            {
                "text": "An unusual, exciting, and possibly dangerous activity, such as a trip or experience.",
                "examples": [
                    "The trip to the jungle was a great adventure.",
                    "They are looking for adventure."
                ]
            }
        ],
        "subtext": "exciting experience, quest, journey",
        "synonyms": [
            "exciting experience",
            "quest",
            "journey"
        ],
        "countability": "countable",
        "transcription": "ədˈvɛntʃər"
    },
    {
        "word": "ambulance",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🚑",
        "form": "noun",
        "definitions": [
            {
                "text": "A special vehicle used to take sick or injured people to hospital.",
                "examples": [
                    "The ambulance arrived in five minutes.",
                    "He was taken to hospital by ambulance."
                ]
            }
        ],
        "subtext": "emergency vehicle",
        "synonyms": [
            "emergency vehicle"
        ],
        "countability": "countable",
        "transcription": "ˈæmbjələns"
    },
    {
        "word": "anniversary",
        "level": "elementary",
        "theme": "customs_traditions_A2",
        "emoji": "🎉",
        "form": "noun",
        "definitions": [
            {
                "text": "A date on which an event took place in a previous year.",
                "examples": [
                    "It is our wedding anniversary today.",
                    "The company is celebrating its tenth anniversary."
                ]
            }
        ],
        "subtext": "yearly celebration",
        "synonyms": [
            "yearly celebration"
        ],
        "countability": "countable",
        "transcription": "ˌænɪˈvɜːrsəri"
    },
    {
        "word": "audience",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🎭",
        "form": "noun",
        "definitions": [
            {
                "text": "The group of people together in one place to watch or listen to a play, movie, or someone speaking.",
                "examples": [
                    "The audience clapped loudly.",
                    "The performance had a very small audience."
                ]
            }
        ],
        "subtext": "spectators, listeners",
        "synonyms": [
            "spectators",
            "listeners"
        ],
        "countability": "countable",
        "transcription": "ˈɔːdiəns"
    },
    {
        "word": "behavior",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "😇",
        "form": "noun",
        "definitions": [
            {
                "text": "The way that someone or something acts in a particular situation.",
                "examples": [
                    "His behavior was very professional.",
                    "The teacher is happy with the children's behavior."
                ]
            }
        ],
        "subtext": "conduct, manner, actions",
        "synonyms": [
            "conduct",
            "manner",
            "actions"
        ],
        "countability": "uncountable",
        "transcription": "bɪˈheɪvjər"
    },
    {
        "word": "belief",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "noun",
        "definitions": [
            {
                "text": "The feeling of being certain that something exists or is true.",
                "examples": [
                    "He has a strong belief in the importance of education."
                ]
            }
        ],
        "subtext": "faith, conviction",
        "synonyms": [
            "faith",
            "conviction"
        ],
        "countability": "countable",
        "transcription": "bɪˈliːf"
    },
    {
        "word": "celebrity",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🌟",
        "form": "noun",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "The magazine is full of stories about celebrities.",
                    "He became a celebrity after winning the competition."
                ]
            }
        ],
        "subtext": "famous person",
        "synonyms": [
            "famous person"
        ],
        "countability": "countable",
        "transcription": "səˈlɛbrəti"
    },
    {
        "word": "ceremony",
        "level": "elementary",
        "theme": "customs_traditions_A2",
        "emoji": "🤵",
        "form": "noun",
        "definitions": [
            {
                "text": "A formal event performed on a special occasion.",
                "examples": [
                    "The wedding ceremony was very beautiful.",
                    "There was an opening ceremony for the new park."
                ]
            }
        ],
        "subtext": "formal event",
        "synonyms": [
            "formal event"
        ],
        "countability": "countable",
        "transcription": "ˈsɛrəməni"
    },
    {
        "word": "challenge",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏔️",
        "form": "noun",
        "definitions": [
            {
                "text": "Something that is difficult and tests your ability or determination.",
                "examples": [
                    "Learning a new language is a big challenge.",
                    "The new job is a real challenge for her."
                ]
            }
        ],
        "subtext": "difficult task, trial, test",
        "synonyms": [
            "difficult task",
            "trial",
            "test"
        ],
        "countability": "countable",
        "transcription": "ˈtʃælɪndʒ"
    },
    {
        "word": "charity",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤝",
        "form": "noun",
        "definitions": [
            {
                "text": "An organization that helps people in need.",
                "examples": [
                    "She works for a local charity.",
                    "We give money to charity every month."
                ]
            }
        ],
        "subtext": "aid organization, non-profit, donation",
        "synonyms": [
            "aid organization",
            "non-profit",
            "donation"
        ],
        "countability": "uncountable",
        "transcription": "ˈtʃærəti"
    },
    {
        "word": "clue",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🔎",
        "form": "noun",
        "definitions": [
            {
                "text": "A sign or some information that helps you to find the answer to a problem.",
                "examples": [
                    "The police are looking for clues.",
                    "I don't have a clue what he's talking about."
                ]
            }
        ],
        "subtext": "hint, evidence",
        "synonyms": [
            "hint",
            "evidence"
        ],
        "countability": "countable",
        "transcription": "kluː"
    },
    {
        "word": "collection",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "📦",
        "form": "noun",
        "definitions": [
            {
                "text": "A group of objects of the same type that have been collected.",
                "examples": [
                    "He has a large coin collection.",
                    "The museum has a collection of ancient art."
                ]
            }
        ],
        "subtext": "set of objects",
        "synonyms": [
            "set of objects"
        ],
        "countability": "countable",
        "transcription": "kəˈlɛkʃn"
    },
    {
        "word": "comfort",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🛋️",
        "form": "noun",
        "definitions": [
            {
                "text": "A pleasant feeling of being relaxed and free from pain.",
                "examples": [
                    "The hotel provides high levels of comfort.",
                    "I like to travel in comfort."
                ]
            }
        ],
        "subtext": "ease, relaxation",
        "synonyms": [
            "ease",
            "relaxation"
        ],
        "countability": "uncountable",
        "transcription": "ˈkʌmfərt"
    },
    {
        "word": "complaint",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "😠",
        "form": "noun",
        "definitions": [
            {
                "text": "A statement that something is wrong or not satisfactory.",
                "examples": [
                    "We received a complaint about the noise.",
                    "If you have a complaint, please talk to the manager."
                ]
            }
        ],
        "subtext": "statement of dissatisfaction",
        "synonyms": [
            "statement of dissatisfaction"
        ],
        "countability": "countable",
        "transcription": "kəmˈpleɪnt"
    },
    {
        "word": "confidence",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "✨",
        "form": "noun",
        "definitions": [
            {
                "text": "The feeling that you can trust someone or something; or a feeling of being sure about your own ability.",
                "examples": [
                    "The success gave her more confidence.",
                    "I have confidence in his ability to do the job."
                ]
            }
        ],
        "subtext": "self-belief",
        "synonyms": [
            "self-belief"
        ],
        "countability": "uncountable",
        "transcription": "ˈkɒnfɪdəns"
    },
    {
        "word": "conflict",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "⚔️",
        "form": "noun",
        "definitions": [
            {
                "text": "A serious disagreement or argument.",
                "examples": [
                    "We should try to avoid conflict.",
                    "The conflict lasted for many years."
                ]
            }
        ],
        "subtext": "clash, disagreement",
        "synonyms": [
            "clash",
            "disagreement"
        ],
        "countability": "uncountable",
        "transcription": "ˈkɒnflɪkt"
    },
    {
        "word": "connection",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🔗",
        "form": "noun",
        "definitions": [
            {
                "text": "The act of joining two or more things together.",
                "examples": [
                    "The internet connection is very slow today.",
                    "There is a connection between health and exercise."
                ]
            }
        ],
        "subtext": "link, join",
        "synonyms": [
            "link",
            "join"
        ],
        "countability": "countable",
        "transcription": "kəˈnɛkʃn"
    },
    {
        "word": "consequence",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📉",
        "form": "noun",
        "definitions": [
            {
                "text": "The result of a particular action or situation, often one that is bad or not convenient.",
                "examples": [
                    "We must consider the consequences of our decisions.",
                    "The accident was a consequence of his carelessness."
                ]
            }
        ],
        "subtext": "result, outcome",
        "synonyms": [
            "result",
            "outcome"
        ],
        "countability": "countable",
        "transcription": "ˈkɒnsɪkwəns"
    },
    {
        "word": "context",
        "level": "elementary",
        "theme": "language_communication_A2",
        "emoji": "📖",
        "form": "noun",
        "definitions": [
            {
                "text": "The situation within which something exists or happens.",
                "examples": [
                    "You need to look at the context of the sentence.",
                    "This decision only makes sense in its historical context."
                ]
            }
        ],
        "subtext": "situation, setting",
        "synonyms": [
            "situation",
            "setting"
        ],
        "countability": "uncountable",
        "transcription": "ˈkɒntɛkst"
    },
    {
        "word": "cooperation",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🤝",
        "form": "noun",
        "definitions": [
            {
                "text": "The act of working together with someone or something.",
                "examples": [
                    "The project was a success thanks to our cooperation.",
                    "We need more international cooperation to solve this problem."
                ]
            }
        ],
        "subtext": "working together",
        "synonyms": [
            "working together"
        ],
        "countability": "uncountable",
        "transcription": "koʊˌɒpəˈreɪʃn"
    },
    {
        "word": "courage",
        "level": "elementary",
        "theme": "personality_character_A2",
        "emoji": "🦁",
        "form": "noun",
        "definitions": [
            {
                "text": "The ability to control fear in a dangerous or difficult situation.",
                "examples": [
                    "It took a lot of courage to tell the truth.",
                    "The soldiers showed great courage."
                ]
            }
        ],
        "subtext": "bravery",
        "synonyms": [
            "bravery"
        ],
        "countability": "uncountable",
        "transcription": "ˈkʌrɪdʒ"
    },
    {
        "word": "creativity",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🎨",
        "form": "noun",
        "definitions": [
            {
                "text": "The ability to produce original and unusual ideas.",
                "examples": [
                    "She is known for her creativity and innovation.",
                    "Children have a lot of creativity."
                ]
            }
        ],
        "subtext": "imagination, inventiveness, originality",
        "synonyms": [
            "imagination",
            "inventiveness",
            "originality"
        ],
        "countability": "uncountable",
        "transcription": "ˌkriːeɪˈtɪvəti"
    },
    {
        "word": "credit",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💳",
        "form": "noun",
        "definitions": [
            {
                "text": "An arrangement with a shop or bank that allows you to buy something and pay for it later.",
                "examples": [
                    "Can I buy this on credit?",
                    "The shop doesn't give credit to new customers."
                ]
            }
        ],
        "subtext": "deferred payment",
        "synonyms": [
            "deferred payment"
        ],
        "countability": "uncountable",
        "transcription": "ˈkrɛdɪt"
    },
    {
        "word": "crime",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "🚫",
        "form": "noun",
        "definitions": [
            {
                "text": "An illegal act for which someone can be punished by the government.",
                "examples": [
                    "The police are investigating a serious crime.",
                    "Crime is a problem in big cities."
                ]
            }
        ],
        "subtext": "illegal act",
        "synonyms": [
            "illegal act"
        ],
        "countability": "countable",
        "transcription": "kraɪm"
    },
    {
        "word": "culture",
        "level": "elementary",
        "theme": "society_politics_A2",
        "emoji": "🎨",
        "form": "noun",
        "definitions": [
            {
                "text": "The way of life, especially the general customs and beliefs, of a particular group of people.",
                "examples": [
                    "I love learning about different cultures.",
                    "London is a city with a very diverse culture."
                ]
            }
        ],
        "subtext": "traditions, customs, way of life",
        "synonyms": [
            "traditions",
            "customs",
            "way of life"
        ],
        "countability": "uncountable",
        "transcription": "ˈkʌltʃər"
    },
    {
        "word": "drought",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "🌵",
        "form": "noun",
        "countability": "countable",
        "plural": "droughts",
        "definitions": [
            {
                "text": "A long period when there is little or no rain.",
                "examples": [
                    "The crops died during the long drought.",
                    "The country is suffering from its worst drought in decades."
                ]
            }
        ],
        "subtext": "dry period, lack of rain",
        "synonyms": [
            "dry period",
            "lack of rain"
        ],
        "transcription": "draʊt"
    },
    {
        "word": "forecast",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "📺",
        "form": "noun",
        "countability": "countable",
        "plural": "forecasts",
        "definitions": [
            {
                "text": "A statement of what is judged likely to happen in the future, especially regarding the weather.",
                "examples": [
                    "The weather forecast for tomorrow is sunny.",
                    "What is the economic forecast for next year?"
                ]
            }
        ],
        "subtext": "prediction, weather report",
        "synonyms": [
            "prediction",
            "weather report"
        ],
        "transcription": "ˈfɔːrkæst"
    },
    {
        "word": "humidity",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💦",
        "form": "noun",
        "countability": "uncountable",
        "plural": null,
        "definitions": [
            {
                "text": "The amount of water vapor in the air.",
                "examples": [
                    "The humidity is very high today.",
                    "I don't like the heat and humidity here."
                ]
            }
        ],
        "subtext": "moisture in the air",
        "transcription": "hjuːˈmɪdəti"
    },
    {
        "word": "stage",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🎭",
        "form": "noun",
        "countability": "countable",
        "plural": "stages",
        "definitions": [
            {
                "text": "The area in a theatre where actors perform.",
                "examples": [
                    "The actors were nervous before going on stage.",
                    "The stage was set for the first act."
                ]
            }
        ],
        "subtext": "performance area, platform",
        "synonyms": [
            "performance area",
            "platform"
        ],
        "transcription": "steɪdʒ"
    },
    {
        "word": "script",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "📜",
        "form": "noun",
        "countability": "countable",
        "plural": "scripts",
        "definitions": [
            {
                "text": "The written text of a play, movie, or broadcast.",
                "examples": [
                    "The actors are reading their scripts.",
                    "He wrote the script for the new movie."
                ]
            }
        ],
        "subtext": "written text, play text",
        "synonyms": [
            "written text",
            "play text"
        ],
        "transcription": "skrɪpt"
    },
    {
        "word": "rehearsal",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "emoji": "🎭",
        "form": "noun",
        "countability": "countable",
        "plural": "rehearsals",
        "definitions": [
            {
                "text": "A time when all the people involved in a play, dance, etc. practice in order to prepare for a performance.",
                "examples": [
                    "We have a rehearsal every Monday evening.",
                    "The final rehearsal went very well."
                ]
            }
        ],
        "subtext": "practice, preparation",
        "synonyms": [
            "practice",
            "preparation"
        ],
        "transcription": "rɪˈhɜːrsl"
    },
    {
        "word": "reservation",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "📅",
        "form": "noun",
        "countability": "countable",
        "plural": "reservations",
        "definitions": [
            {
                "text": "An arrangement to have something kept for you, such as a table at a restaurant.",
                "examples": [
                    "I'd like to make a reservation for two people.",
                    "We have a reservation for eight o'clock."
                ]
            }
        ],
        "subtext": "booking, advance arrangement",
        "synonyms": [
            "booking",
            "advance arrangement"
        ],
        "transcription": "ˌrɛzərˈveɪʃn"
    },
    {
        "word": "main course",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "noun",
        "countability": "countable",
        "plural": "main courses",
        "definitions": [
            {
                "text": "The largest or most important part of a meal.",
                "examples": [
                    "For my main course, I'll have the grilled salmon.",
                    "What are you having for your main course?"
                ]
            }
        ],
        "subtext": "entree, primary dish",
        "synonyms": [
            "entree",
            "primary dish"
        ],
        "transcription": "meɪn kɔːrs"
    },
    {
        "word": "buffet",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍲",
        "form": "noun",
        "countability": "countable",
        "plural": "buffets",
        "definitions": [
            {
                "text": "A meal where people serve themselves from several dishes on a table.",
                "examples": [
                    "The hotel offers a breakfast buffet.",
                    "It was a cold buffet with lots of salads."
                ]
            }
        ],
        "subtext": "self-service meal",
        "synonyms": [
            "self-service meal"
        ],
        "transcription": "ˈbʊfeɪ"
    },
    {
        "word": "tip",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "💸",
        "form": "noun",
        "countability": "countable",
        "plural": "tips",
        "definitions": [
            {
                "text": "A small amount of extra money given to someone who has provided a service.",
                "examples": [
                    "We left a generous tip for the waiter.",
                    "How much tip should I give?"
                ]
            }
        ],
        "subtext": "gratuity, service charge",
        "synonyms": [
            "gratuity",
            "service charge"
        ],
        "transcription": "tɪp"
    },
    {
        "word": "fitting room",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "👗",
        "form": "noun",
        "countability": "countable",
        "plural": "fitting rooms",
        "definitions": [
            {
                "text": "A room in a shop where you can try on clothes to see if they fit.",
                "examples": [
                    "Where are the fitting rooms?",
                    "I'm going to the fitting room to try this on."
                ]
            }
        ],
        "subtext": "changing room, try-on room",
        "synonyms": [
            "changing room",
            "try-on room"
        ],
        "transcription": "ˈfɪtɪŋ ruːm"
    },
    {
        "word": "discount",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "🏷️",
        "form": "noun",
        "countability": "countable",
        "plural": "discounts",
        "definitions": [
            {
                "text": "A reduction in the usual price of something.",
                "examples": [
                    "They offer a 10% discount for students.",
                    "Is there any discount if I buy three?"
                ]
            }
        ],
        "subtext": "reduction, price cut",
        "synonyms": [
            "reduction",
            "price cut"
        ],
        "transcription": "ˈdɪskaʊnt"
    },
    {
        "word": "refund",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "💵",
        "form": "noun",
        "countability": "countable",
        "plural": "refunds",
        "definitions": [
            {
                "text": "An amount of money that is given back to you, especially because you are not happy with a product.",
                "examples": [
                    "I took the dress back and got a full refund.",
                    "I'd like a refund, please."
                ]
            }
        ],
        "subtext": "money back, repayment",
        "synonyms": [
            "money back",
            "repayment"
        ],
        "transcription": "ˈriːfʌnd"
    },
    {
        "word": "departure",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🛫",
        "form": "noun",
        "countability": "countable",
        "plural": "departures",
        "definitions": [
            {
                "text": "The act of leaving a place, especially to start a journey.",
                "examples": [
                    "Our departure was delayed by an hour.",
                    "Check the flight departures board."
                ]
            }
        ],
        "subtext": "leaving, setting off",
        "synonyms": [
            "leaving",
            "setting off"
        ],
        "opposite": "arrival",
        "transcription": "dɪˈpɑːrtʃər"
    },
    {
        "word": "arrival",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🛬",
        "form": "noun",
        "countability": "countable",
        "plural": "arrivals",
        "definitions": [
            {
                "text": "The act of coming to a place.",
                "examples": [
                    "We are waiting for the arrival of the flight.",
                    "Check the arrivals board."
                ]
            }
        ],
        "subtext": "coming, reaching",
        "synonyms": [
            "coming",
            "reaching"
        ],
        "opposite": "departure",
        "transcription": "əˈraɪvl"
    },
    {
        "word": "junction",
        "level": "elementary",
        "theme": "driving_roads_A2",
        "emoji": "🛣️",
        "form": "noun",
        "countability": "countable",
        "plural": "junctions",
        "definitions": [
            {
                "text": "A place where two or more roads or railroads join.",
                "examples": [
                    "Turn left at the next junction.",
                    "The accident happened at a busy road junction."
                ]
            }
        ],
        "subtext": "intersection, road crossing",
        "synonyms": [
            "intersection",
            "road crossing"
        ],
        "transcription": "ˈdʒʌŋkʃn"
    },
    {
        "word": "traffic lights",
        "level": "elementary",
        "theme": "driving_roads_A2",
        "emoji": "🚦",
        "form": "noun",
        "countability": "plural",
        "plural": "traffic lights",
        "definitions": [
            {
                "text": "A set of red, yellow, and green lights that control the flow of traffic.",
                "examples": [
                    "Stop when the traffic lights are red.",
                    "Turn right at the traffic lights."
                ]
            }
        ],
        "subtext": "stop lights, signal",
        "synonyms": [
            "stop lights",
            "signal"
        ],
        "transcription": "ˈtræfɪk laɪts"
    },
    {
        "word": "removal company",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "🚚",
        "form": "noun",
        "countability": "countable",
        "plural": "removal companies",
        "definitions": [
            {
                "text": "A company that helps people move their furniture and possessions to a new home.",
                "examples": [
                    "We hired a removal company to help us move.",
                    "The removal company arrived at 8 am."
                ]
            }
        ],
        "subtext": "moving company, movers",
        "synonyms": [
            "moving company",
            "movers"
        ],
        "transcription": "rɪˈmuːvl ˈkʌmpəni"
    },
    {
        "word": "roughly",
        "level": "elementary",
        "theme": "approximation_A2",
        "emoji": "📏",
        "form": "adverb",
        "definitions": [
            {
                "text": "Approximately; not exactly.",
                "examples": [
                    "There were roughly 200 people at the meeting.",
                    "The journey takes roughly two hours."
                ]
            }
        ],
        "subtext": "about, approximately",
        "synonyms": [
            "about",
            "approximately"
        ],
        "transcription": "ˈrʌfli"
    },
    {
        "word": "extremely",
        "level": "elementary",
        "theme": "degree_adverbs_A2",
        "emoji": "🔥",
        "form": "adverb",
        "definitions": [
            {
                "text": "To a very great degree.",
                "examples": [
                    "The weather was extremely hot.",
                    "She is extremely talented."
                ]
            }
        ],
        "subtext": "very, incredibly",
        "synonyms": [
            "very",
            "incredibly"
        ],
        "opposite": "slightly",
        "transcription": "ɪkˈstriːmli"
    },
    {
        "word": "fairly",
        "level": "elementary",
        "theme": "degree_adverbs_A2",
        "emoji": "⚖️",
        "form": "adverb",
        "definitions": [
            {
                "text": "More than average, but less than very.",
                "examples": [
                    "The exam was fairly difficult.",
                    "I know him fairly well."
                ]
            }
        ],
        "subtext": "quite, moderately",
        "synonyms": [
            "quite",
            "moderately"
        ],
        "opposite": "extremely",
        "transcription": "ˈfɛərli"
    },
    {
        "word": "certificate",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "📜",
        "form": "noun",
        "countability": "countable",
        "plural": "certificates",
        "definitions": [
            {
                "text": "An official document that gives information or proves something.",
                "examples": [
                    "I received a certificate for completing the course.",
                    "You need a medical certificate if you are ill."
                ]
            }
        ],
        "subtext": "official document, diploma",
        "synonyms": [
            "official document",
            "diploma"
        ],
        "transcription": "sərˈtɪfɪkət"
    },
    {
        "word": "grade",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "🅰️",
        "form": "noun",
        "countability": "countable",
        "plural": "grades",
        "definitions": [
            {
                "text": "A number or letter that shows how good your work is.",
                "examples": [
                    "He got a high grade in the exam.",
                    "What is your average grade this semester?"
                ]
            }
        ],
        "subtext": "mark, score",
        "synonyms": [
            "mark",
            "score"
        ],
        "transcription": "ɡreɪd"
    },
    {
        "word": "citizen",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "👤",
        "form": "noun",
        "countability": "countable",
        "plural": "citizens",
        "definitions": [
            {
                "text": "A person who is a member of a particular country.",
                "examples": [
                    "He is a British citizen.",
                    "The government should help its citizens."
                ]
            }
        ],
        "subtext": "national, inhabitant",
        "synonyms": [
            "national",
            "inhabitant"
        ],
        "transcription": "ˈsɪtɪzn"
    },
    {
        "word": "facility",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "🏢",
        "form": "noun",
        "countability": "countable",
        "plural": "facilities",
        "definitions": [
            {
                "text": "A place or building used for a particular purpose.",
                "examples": [
                    "The sports facility is very modern.",
                    "The town needs more child care facilities."
                ]
            }
        ],
        "subtext": "amenity, service",
        "synonyms": [
            "amenity",
            "service"
        ],
        "transcription": "fəˈsɪləti"
    },
    {
        "word": "volunteer",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "🙋",
        "form": "noun",
        "countability": "countable",
        "plural": "volunteers",
        "definitions": [
            {
                "text": "A person who does work without being paid for it.",
                "examples": [
                    "She works as a volunteer for a local charity.",
                    "The event needs more volunteers."
                ]
            }
        ],
        "subtext": "unpaid worker",
        "synonyms": [
            "unpaid worker"
        ],
        "transcription": "ˌvɒlənˈtɪər"
    },
    {
        "word": "exhibition",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🖼️",
        "form": "noun",
        "countability": "countable",
        "plural": "exhibitions",
        "definitions": [
            {
                "text": "A collection of things, such as works of art, that are shown to the public.",
                "examples": [
                    "We went to an exhibition of modern art.",
                    "The photo exhibition was very interesting."
                ]
            }
        ],
        "subtext": "show, display",
        "synonyms": [
            "show",
            "display"
        ],
        "transcription": "ˌɛksɪˈbɪʃn"
    },
    {
        "word": "gallery",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "🏛️",
        "form": "noun",
        "countability": "countable",
        "plural": "galleries",
        "definitions": [
            {
                "text": "A building or room where works of art are shown.",
                "examples": [
                    "The National Gallery is in London.",
                    "She opened a small art gallery."
                ]
            }
        ],
        "subtext": "art museum",
        "synonyms": [
            "art museum"
        ],
        "transcription": "ˈɡæləri"
    },
    {
        "word": "portrait",
        "level": "elementary",
        "theme": "art_design_A2",
        "emoji": "👤",
        "form": "noun",
        "countability": "countable",
        "plural": "portraits",
        "definitions": [
            {
                "text": "A painting, drawing, or photograph of a person.",
                "examples": [
                    "The artist painted a portrait of the king.",
                    "This is a beautiful portrait of her family."
                ]
            }
        ],
        "subtext": "picture of a person",
        "transcription": "ˈpɔːrtrət"
    },
    {
        "word": "couple",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👫",
        "form": "noun",
        "countability": "countable",
        "plural": "couples",
        "definitions": [
            {
                "text": "Two people who are married or in a romantic relationship.",
                "examples": [
                    "They are a very happy couple.",
                    "The young couple just bought a house."
                ]
            }
        ],
        "subtext": "pair of people",
        "synonyms": [
            "pair of people"
        ],
        "transcription": "ˈkʌpl"
    },
    {
        "word": "comedy",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "😂",
        "form": "noun",
        "countability": "uncountable",
        "plural": "comedies",
        "definitions": [
            {
                "text": "A movie, play, or TV show that is intended to make people laugh.",
                "examples": [
                    "We watched a great comedy last night.",
                    "He prefers comedy to drama."
                ]
            }
        ],
        "subtext": "humorous show, funny movie",
        "synonyms": [
            "humorous show",
            "funny movie"
        ],
        "transcription": "ˈkɒmədi"
    },
    {
        "word": "documentary",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "📹",
        "form": "noun",
        "countability": "countable",
        "plural": "documentaries",
        "definitions": [
            {
                "text": "A movie or TV program that provides a factual record or report.",
                "examples": [
                    "I watched a documentary about lions.",
                    "She is making a documentary about climate change."
                ]
            }
        ],
        "subtext": "factual program, non-fiction film",
        "synonyms": [
            "factual program",
            "non-fiction film"
        ],
        "transcription": "ˌdɒkjuˈmɛntri"
    },
    {
        "word": "drama",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🎭",
        "form": "noun",
        "countability": "uncountable",
        "plural": "dramas",
        "definitions": [
            {
                "text": "A play in a theatre or on television or radio, or plays and acting generally.",
                "examples": [
                    "She is studying drama at university.",
                    "The new medical drama is very popular."
                ]
            }
        ],
        "subtext": "serious play, theatrical work",
        "synonyms": [
            "serious play",
            "theatrical work"
        ],
        "transcription": "ˈdrɑːmə"
    },
    {
        "word": "entertainment",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🎉",
        "form": "noun",
        "countability": "uncountable",
        "plural": null,
        "definitions": [
            {
                "text": "Shows, movies, television, or other activities that entertain people.",
                "examples": [
                    "There is plenty of entertainment in the city centre.",
                    "The hotel provides evening entertainment for its guests."
                ]
            }
        ],
        "subtext": "amusement, leisure activity",
        "synonyms": [
            "amusement",
            "leisure activity"
        ],
        "transcription": "ˌɛntərˈteɪnmənt"
    },
    {
        "word": "lately",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🕒",
        "form": "adverb",
        "definitions": [
            {
                "text": "Recently.",
                "examples": [
                    "I haven't seen him lately.",
                    "Have you been busy lately?"
                ]
            }
        ],
        "subtext": "recently, in recent times",
        "synonyms": [
            "recently",
            "in recent times"
        ],
        "transcription": "ˈleɪtli"
    },
    {
        "word": "shortly",
        "level": "elementary",
        "theme": "future_time_A2",
        "emoji": "⏱️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Soon; in a short time.",
                "examples": [
                    "The plane will be landing shortly.",
                    "He arrived shortly after five."
                ]
            }
        ],
        "subtext": "soon, in a moment",
        "synonyms": [
            "soon",
            "in a moment"
        ],
        "transcription": "ˈʃɔːrtli"
    },
    {
        "word": "eventually",
        "level": "elementary",
        "theme": "future_time_A2",
        "emoji": "🏁",
        "form": "adverb",
        "definitions": [
            {
                "text": "In the end, especially after a long time.",
                "examples": [
                    "We eventually reached the hotel.",
                    "He eventually passed his driving test."
                ]
            }
        ],
        "subtext": "finally, in the end",
        "synonyms": [
            "finally",
            "in the end"
        ],
        "transcription": "ɪˈvɛntʃuəli"
    },
    {
        "word": "firstly",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "1️⃣",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce the first point in a list.",
                "examples": [
                    "Firstly, we need to decide on a date.",
                    "Firstly, I'd like to thank you for coming."
                ]
            }
        ],
        "subtext": "first, to begin with",
        "synonyms": [
            "first",
            "to begin with"
        ],
        "transcription": "ˈfɜːrstli"
    },
    {
        "word": "secondly",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "2️⃣",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce the second point in a list.",
                "examples": [
                    "Secondly, we need to find a venue.",
                    "Secondly, the cost is too high."
                ]
            }
        ],
        "subtext": "second, furthermore",
        "synonyms": [
            "second",
            "furthermore"
        ],
        "transcription": "ˈsɛkəndli"
    },
    {
        "word": "finally",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "🏁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce the last point in a list; or after a long time.",
                "examples": [
                    "Finally, I'd like to thank my parents.",
                    "We finally reached the summit."
                ]
            }
        ],
        "subtext": "lastly, in the end",
        "synonyms": [
            "lastly",
            "in the end"
        ],
        "transcription": "ˈfaɪnəli"
    },
    {
        "word": "hostel",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "🛌",
        "form": "noun",
        "countability": "countable",
        "plural": "hostels",
        "definitions": [
            {
                "text": "A cheap place to stay, especially for young people.",
                "examples": [
                    "We stayed in a youth hostel in Berlin.",
                    "The hostel was basic but clean."
                ]
            }
        ],
        "subtext": "youth hostel",
        "synonyms": [
            "cheap hotel"
        ],
        "transcription": "ˈhɒstl"
    },
    {
        "word": "campsite",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "⛺",
        "form": "noun",
        "countability": "countable",
        "plural": "campsites",
        "definitions": [
            {
                "text": "A place where people can put up a tent.",
                "examples": [
                    "The campsite is near the river.",
                    "We found a beautiful campsite in the mountains."
                ]
            }
        ],
        "subtext": "camping ground, tent site",
        "synonyms": [
            "camping ground",
            "tent site"
        ],
        "transcription": "ˈkæmpsaɪt"
    },
    {
        "word": "balanced diet",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🥗",
        "form": "noun",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "A diet that contains the proper proportions of nutrients necessary for good health.",
                "examples": [
                    "It's important to eat a balanced diet.",
                    "A balanced diet includes fruits, vegetables, and protein."
                ]
            }
        ],
        "subtext": "healthy eating, nutritious diet",
        "synonyms": [
            "healthy eating",
            "nutritious diet"
        ],
        "transcription": "ˈbælənst ˈdaɪət"
    },
    {
        "word": "calorie",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🔥",
        "form": "noun",
        "countability": "countable",
        "plural": "calories",
        "definitions": [
            {
                "text": "A unit of energy often used to measure the energy value of food.",
                "examples": [
                    "This cake has a lot of calories.",
                    "How many calories are in this apple?"
                ]
            }
        ],
        "subtext": "energy unit, food energy",
        "synonyms": [
            "energy unit",
            "food energy"
        ],
        "transcription": "ˈkæləri"
    },
    {
        "word": "cover letter",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📧",
        "form": "noun",
        "countability": "countable",
        "plural": "cover letters",
        "definitions": [
            {
                "text": "A letter sent with a CV to explain why you are applying for a job.",
                "examples": [
                    "Don't forget to include a cover letter with your application.",
                    "He wrote a very strong cover letter."
                ]
            }
        ],
        "subtext": "application letter, job letter",
        "synonyms": [
            "application letter",
            "job letter"
        ],
        "transcription": "ˈkʌvər ˈlɛtər"
    },
    {
        "word": "estate agent",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "🏠",
        "form": "noun",
        "countability": "countable",
        "plural": "estate agents",
        "definitions": [
            {
                "text": "A person whose job is to sell or rent houses and land for other people.",
                "examples": [
                    "We talked to the estate agent about viewing the house.",
                    "The estate agent showed us several flats."
                ]
            }
        ],
        "subtext": "realtor, property agent",
        "synonyms": [
            "realtor",
            "property agent"
        ],
        "transcription": "ɪˈsteɪt ˈeɪdʒənt"
    },
    {
        "word": "window shopping",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "emoji": "🛍️",
        "form": "noun",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "The activity of looking at things in shop windows without intending to buy them.",
                "examples": [
                    "We spent the afternoon window shopping in the city centre.",
                    "I like window shopping when I'm bored."
                ]
            }
        ],
        "subtext": "browsing, looking only",
        "synonyms": [
            "browsing",
            "looking only"
        ],
        "transcription": "ˈwɪndoʊ ˈʃɒpɪŋ"
    },
    {
        "word": "painkiller",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "💊",
        "form": "noun",
        "countability": "countable",
        "plural": "painkillers",
        "definitions": [
            {
                "text": "A medicine used to reduce or stop pain.",
                "examples": [
                    "I took a painkiller for my headache.",
                    "Do you have any painkillers?"
                ]
            }
        ],
        "subtext": "pain medicine, analgesic",
        "synonyms": [
            "pain medicine",
            "analgesic"
        ],
        "transcription": "ˈpeɪnkɪlər"
    },
    {
        "word": "bandage",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "🩹",
        "form": "noun",
        "countability": "countable",
        "plural": "bandages",
        "definitions": [
            {
                "text": "A long piece of cloth used for tying around an injury.",
                "examples": [
                    "He had a bandage on his arm.",
                    "She wrapped a bandage around her ankle."
                ]
            }
        ],
        "subtext": "dressing, medical wrap",
        "synonyms": [
            "dressing",
            "medical wrap"
        ],
        "transcription": "ˈbændɪdʒ"
    },
    {
        "word": "prescription",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "📄",
        "form": "noun",
        "countability": "countable",
        "plural": "prescriptions",
        "definitions": [
            {
                "text": "A piece of paper on which a doctor writes the name of a medicine that you need.",
                "examples": [
                    "The doctor gave me a prescription for antibiotics.",
                    "I need to take this prescription to the pharmacy."
                ]
            }
        ],
        "subtext": "doctor's note, medicine order",
        "synonyms": [
            "doctor's note",
            "medicine order"
        ],
        "transcription": "prɪˈskrɪpʃn"
    },
    {
        "word": "symptom",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "🤒",
        "form": "noun",
        "countability": "countable",
        "plural": "symptoms",
        "definitions": [
            {
                "text": "A physical or mental feature that indicates a condition of disease.",
                "examples": [
                    "A high temperature is a symptom of the flu.",
                    "He has no symptoms of the illness."
                ]
            }
        ],
        "subtext": "sign of illness",
        "synonyms": [
            "sign of illness"
        ],
        "transcription": "ˈsɪmptəm"
    },
    {
        "word": "landmark",
        "level": "elementary",
        "theme": "directions_location_A2",
        "emoji": "🏛️",
        "form": "noun",
        "countability": "countable",
        "plural": "landmarks",
        "definitions": [
            {
                "text": "A building or place that is easily recognized.",
                "examples": [
                    "The Eiffel Tower is a famous landmark.",
                    "We used the church as a landmark to find our way."
                ]
            }
        ],
        "subtext": "monument, recognizable place",
        "synonyms": [
            "monument",
            "recognizable place"
        ],
        "transcription": "ˈlændmɑːrk"
    },
    {
        "word": "crossroads",
        "level": "elementary",
        "theme": "directions_location_A2",
        "emoji": "✖️",
        "form": "noun",
        "countability": "countable",
        "plural": "crossroads",
        "definitions": [
            {
                "text": "A place where two roads meet and cross each other.",
                "examples": [
                    "Turn right at the crossroads.",
                    "There was an accident at the crossroads."
                ]
            }
        ],
        "subtext": "intersection, crossing",
        "synonyms": [
            "intersection",
            "crossing"
        ],
        "transcription": "ˈkrɒsroʊdz"
    },
    {
        "word": "single room",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "🛌",
        "form": "noun",
        "countability": "countable",
        "plural": "single rooms",
        "definitions": [
            {
                "text": "A room for one person, especially in a hotel.",
                "examples": [
                    "I'd like to book a single room for two nights.",
                    "The hotel has twenty single rooms."
                ]
            }
        ],
        "subtext": "one-person room",
        "synonyms": [
            "one-person room"
        ],
        "transcription": "ˈsɪŋɡl ruːm"
    },
    {
        "word": "double room",
        "level": "elementary",
        "theme": "accommodation_A2",
        "emoji": "🛌🛌",
        "form": "noun",
        "countability": "countable",
        "plural": "double rooms",
        "definitions": [
            {
                "text": "A room for two people, especially in a hotel.",
                "examples": [
                    "They booked a double room for their holiday.",
                    "Is a double room more expensive than a single room?"
                ]
            }
        ],
        "subtext": "two-person room",
        "synonyms": [
            "two-person room"
        ],
        "transcription": "ˈdʌbl ruːm"
    },
    {
        "word": "point of view",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👁️",
        "form": "noun",
        "countability": "countable",
        "plural": "points of view",
        "definitions": [
            {
                "text": "A particular way of considering or judging a situation.",
                "examples": [
                    "From my point of view, the project is a success.",
                    "Everyone has a different point of view."
                ]
            }
        ],
        "subtext": "opinion, perspective",
        "synonyms": [
            "opinion",
            "perspective"
        ],
        "transcription": "pɔɪnt əv vjuː"
    },
    {
        "word": "itinerary",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🗺️",
        "form": "noun",
        "countability": "countable",
        "plural": "itineraries",
        "definitions": [
            {
                "text": "A detailed plan or route of a journey.",
                "examples": [
                    "We have a very busy itinerary for our trip to Italy.",
                    "The travel agent sent us the itinerary yesterday."
                ]
            }
        ],
        "subtext": "travel plan, schedule",
        "synonyms": [
            "travel plan",
            "schedule"
        ],
        "transcription": "aɪˈtɪnərəri"
    },
    {
        "word": "travel agent",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🏢",
        "form": "noun",
        "countability": "countable",
        "plural": "travel agents",
        "definitions": [
            {
                "text": "A person or company that arranges tickets, hotel rooms, etc. for people going on holiday.",
                "examples": [
                    "We booked our holiday through a travel agent.",
                    "The travel agent gave us some great advice."
                ]
            }
        ],
        "subtext": "travel professional, travel consultant",
        "synonyms": [
            "travel professional",
            "travel consultant"
        ],
        "transcription": "ˈtrævl ˈeɪdʒənt"
    },
    {
        "word": "overdraft",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📉",
        "form": "noun",
        "countability": "countable",
        "plural": "overdrafts",
        "definitions": [
            {
                "text": "An amount of money that a customer with a bank account is temporarily allowed to owe to the bank.",
                "examples": [
                    "I have a small overdraft.",
                    "The bank charged me for going over my overdraft limit."
                ]
            }
        ],
        "subtext": "bank debt, negative balance",
        "synonyms": [
            "bank debt",
            "negative balance"
        ],
        "transcription": "ˈoʊvərdræft"
    },
    {
        "word": "statement",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📄",
        "form": "noun",
        "countability": "countable",
        "plural": "statements",
        "definitions": [
            {
                "text": "A record of the amounts of money paid into and taken out of a bank account.",
                "examples": [
                    "I check my bank statement every month.",
                    "Your monthly statement is available online."
                ]
            }
        ],
        "subtext": "bank record, account summary",
        "synonyms": [
            "bank record",
            "account summary"
        ],
        "transcription": "ˈsteɪtmənt"
    },
    {
        "word": "partially",
        "level": "elementary",
        "theme": "degree_adverbs_A2",
        "emoji": "🌓",
        "form": "adverb",
        "definitions": [
            {
                "text": "Not completely; to some extent.",
                "examples": [
                    "The project is only partially finished.",
                    "The road was partially blocked by a fallen tree."
                ]
            }
        ],
        "subtext": "partly, in part",
        "synonyms": [
            "partly",
            "in part"
        ],
        "opposite": "completely",
        "transcription": "ˈpɑːrʃəli"
    },
    {
        "word": "strongly",
        "level": "elementary",
        "theme": "degree_adverbs_A2",
        "emoji": "💪",
        "form": "adverb",
        "definitions": [
            {
                "text": "To a great degree or in a powerful way.",
                "examples": [
                    "I strongly disagree with your opinion.",
                    "He feels very strongly about the issue."
                ]
            }
        ],
        "subtext": "firmly, powerfully",
        "synonyms": [
            "firmly",
            "powerfully"
        ],
        "opposite": "weakly",
        "transcription": "ˈstrɒŋli"
    },
    {
        "word": "although",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "form": "conjunction",
        "transcription": "ɔːlˈðoʊ",
        "definitions": [
            {
                "text": "Used for introducing a statement that makes your main statement seem surprising.",
                "examples": [
                    "Although he was tired, he finished the report.",
                    "We went for a walk although it was raining."
                ]
            }
        ],
        "subtext": "even though, but",
        "synonyms": [
            "even though"
        ],
        "opposite": "because"
    },
    {
        "word": "however",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "form": "adverb",
        "transcription": "haʊˈɛvər",
        "definitions": [
            {
                "text": "Used to introduce a statement that contrasts with or seems to contradict something that has been said previously.",
                "examples": [
                    "He is very busy; however, he always finds time to help.",
                    "The results were good; however, there is room for improvement."
                ]
            }
        ],
        "subtext": "but, nevertheless",
        "synonyms": [
            "nevertheless"
        ],
        "opposite": "therefore"
    },
    {
        "word": "since",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "form": "conjunction",
        "transcription": "sɪns",
        "definitions": [
            {
                "text": "Used to give a reason for something.",
                "examples": [
                    "Since it's your birthday, I'll buy you lunch.",
                    "He has worked here since 2020."
                ]
            }
        ],
        "subtext": "because, from a time",
        "synonyms": [
            "because",
            "as"
        ],
        "opposite": "until"
    },
    {
        "word": "while",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "form": "conjunction",
        "transcription": "waɪl",
        "definitions": [
            {
                "text": "During the time that something is happening.",
                "examples": [
                    "I like to listen to music while I work.",
                    "While he was waiting, he read a book."
                ]
            }
        ],
        "subtext": "during, at the same time",
        "synonyms": [
            "during",
            "at the same time"
        ],
        "opposite": "before"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
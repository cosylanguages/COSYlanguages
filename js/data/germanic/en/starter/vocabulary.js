(function() {
    const data = [
    {
        "word": "doctor",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "numberPlural": "2 doctor",
        "answer": "two doctors",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "doctors",
        "transcription": "ˈdɒktə",
        "subtext": "see a doctor, family doctor",
        "definitions": [
            {
                "text": "A person who helps people when they are sick.",
                "examples": [
                    "The doctor is at the hospital.",
                    "I need to see a doctor."
                ]
            },
            {
                "text": "This person usually works in a hospital or a clinic.",
                "examples": [
                    "Doctors wear white coats."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "soda",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥤",
        "form": "noun",
        "plural": "sodas",
        "transcription": "ˈsəʊdə",
        "subtext": "fizzy drink, soft drink",
        "definitions": [
            {
                "text": "A sweet drink with bubbles.",
                "examples": [
                    "I don't drink much soda because it has a lot of sugar."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "scarf",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "🧣",
        "form": "noun",
        "plural": "scarves",
        "transcription": "skɑːf",
        "definitions": [
            {
                "text": "A piece of cloth that you wear around your neck to keep warm.",
                "examples": [
                    "He wears a scarf around his neck."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null
    },
    {
        "word": "cereal",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥣",
        "form": "noun",
        "plural": null,
        "transcription": "ˈsɪərɪəl",
        "definitions": [
            {
                "text": "A food made from grain that people often eat for breakfast with milk.",
                "examples": [
                    "I have a bowl of cereal every morning."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null
    },
    {
        "word": "gloves",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "🧤",
        "form": "noun",
        "plural": "gloves",
        "transcription": "ɡlʌvz",
        "definitions": [
            {
                "text": "Pieces of clothing that you wear on your hands to keep them warm.",
                "examples": [
                    "Wear your gloves — it is cold."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null
    },
    {
        "word": "sunglasses",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "🕶️",
        "form": "noun",
        "plural": "sunglasses",
        "transcription": "ˈsʌnɡlɑːsɪz",
        "definitions": [
            {
                "text": "Dark glasses that you wear to protect your eyes from the sun.",
                "examples": [
                    "I need my sunglasses today."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null
    },
    {
        "word": "suit",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👔",
        "form": "noun",
        "plural": "suits",
        "transcription": "suːt",
        "subtext": "wear a suit",
        "definitions": [
            {
                "text": "A set of clothes made from the same cloth.",
                "examples": [
                    "He wears a suit to work."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "person",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "👤",
        "form": "noun",
        "plural": "people",
        "numberPlural": "2 person",
        "answer": "two people",
        "transcription": "ˈpɜːsn",
        "definitions": [
            {
                "text": "A human being.",
                "examples": [
                    "She is a nice person."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to people",
        "opposite": null
    },
    {
        "word": "cash",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💵",
        "form": "noun",
        "plural": null,
        "transcription": "kæʃ",
        "subtext": "pay in cash",
        "definitions": [
            {
                "text": "Money in the form of notes and coins.",
                "examples": [
                    "I have no cash, can I pay by card?"
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null
    },
    {
        "word": "card",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "form": "noun",
        "plural": "cards",
        "transcription": "kɑːd",
        "subtext": "pay by card",
        "definitions": [
            {
                "text": "A small plastic card that you use to pay for things.",
                "examples": [
                    "I will pay by card."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "report",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📄",
        "form": "noun",
        "plural": "reports",
        "subtext": "write a report",
        "definitions": [
            {
                "text": "A document that gives information about a subject.",
                "examples": [
                    "I am writing a report."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "rɪˈpɔːt"
    },
    {
        "word": "market",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛒",
        "form": "noun",
        "plural": "markets",
        "definitions": [
            {
                "text": "A place where people meet to buy and sell things.",
                "examples": [
                    "I buy fruit at the market."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to local places services",
        "opposite": null,
        "transcription": "ˈmɑːkɪt"
    },
    {
        "word": "next to",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "subtext": "next to",
        "synonyms": [
            "beside"
        ],
        "definitions": [
            {
                "text": "Very close to someone or something, with nothing in between.",
                "examples": [
                    "He sat next to me."
                ]
            }
        ],
        "opposite": "far from",
        "emoji": "👫",
        "transcription": "nɛkst tɪ"
    },
    {
        "word": "between",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "In the space that separates two places, people, or objects.",
                "examples": [
                    "The bank is between the school and the shop."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "opposite": "outside",
        "emoji": "🧘",
        "transcription": "bɪtˈwin"
    },
    {
        "word": "behind",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "in front of",
        "definitions": [
            {
                "text": "At or towards the back of someone or something.",
                "examples": [
                    "The car is behind the house."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🫣",
        "transcription": "bɪˈhaɪnd"
    },
    {
        "word": "in front of",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "behind",
        "definitions": [
            {
                "text": "Further forward than someone or something else.",
                "examples": [
                    "There is a bus stop in front of the school."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🚶",
        "transcription": "ɪn frənt əv"
    },
    {
        "word": "jacket",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧥",
        "form": "noun",
        "plural": "jackets",
        "subtext": "coat, wear a jacket",
        "definitions": [
            {
                "text": "A short coat.",
                "examples": [
                    "He is wearing a leather jacket."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈdʒækɪt"
    },
    {
        "word": "shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👔",
        "form": "noun",
        "plural": "shirts",
        "subtext": "white shirt, wear a shirt",
        "definitions": [
            {
                "text": "A piece of clothing worn on the upper part of the body.",
                "examples": [
                    "He wears a white shirt to work."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʃɜːt"
    },
    {
        "word": "foot",
        "level": "starter",
        "theme": "body_parts_A1",
        "numberPlural": "2 foot",
        "answer": "two feet",
        "emoji": "🦶",
        "form": "noun",
        "plural": "feet",
        "definitions": [
            {
                "text": "The part of the body at the bottom of the leg.",
                "examples": [
                    "I have a pain in my foot.",
                    "She has small feet."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "fʊt"
    },
    {
        "word": "face",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👤",
        "form": "noun",
        "plural": "faces",
        "definitions": [
            {
                "text": "The front part of the head, with the eyes, nose, and mouth.",
                "examples": [
                    "She has a beautiful face."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "feɪs"
    },
    {
        "word": "hair",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "💇",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The mass of things like threads that grows on your head.",
                "examples": [
                    "He has short brown hair."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "heə(r)"
    },
    {
        "word": "tooth",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦷",
        "form": "noun",
        "plural": "teeth",
        "numberPlural": "2 tooth",
        "answer": "two teeth",
        "definitions": [
            {
                "text": "One of the hard white objects in your mouth that you use for eating.",
                "examples": [
                    "Brush your teeth every day."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "tuːθ"
    },
    {
        "word": "teacher",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "opposite": null,
        "oppositeEmoji": "🧑‍🎓",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "teachers",
        "subtext": "English teacher, school teacher",
        "definitions": [
            {
                "text": "A person who helps you learn new things.",
                "examples": [
                    "The teacher is in the classroom.",
                    "My teacher is very helpful."
                ]
            },
            {
                "text": "This person usually works in a school or a university.",
                "examples": [
                    "Teachers explain new topics."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˈtiʧər"
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "basic_foods_A1",
        "numberPlural": "3 pizza",
        "answer": "three pizzas",
        "emoji": "🍕",
        "form": "noun",
        "plural": "pizzas",
        "definitions": [
            {
                "text": "A flat bread with cheese and tomato.",
                "examples": [
                    "I like cheese pizza.",
                    "Let's order a pizza."
                ]
            },
            {
                "text": "This food is originally from Italy.",
                "examples": [
                    "Pizza is popular all over the world."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈpitsə"
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍝",
        "form": "noun",
        "plural": "pasta",
        "definitions": [
            {
                "text": "A food made from flour and eggs, often served with sauce.",
                "examples": [
                    "I love pasta with tomato sauce.",
                    "Spaghetti is a type of pasta."
                ]
            },
            {
                "text": "This food is originally from Italy.",
                "examples": [
                    "There are many different shapes of pasta."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈpɑstə"
    },
    {
        "word": "apple",
        "level": "starter",
        "theme": "basic_foods_A1",
        "numberPlural": "4 apple",
        "answer": "four apples",
        "emoji": "🍎",
        "form": "noun",
        "plural": "apples",
        "definitions": [
            {
                "text": "A round fruit that can be red or green.",
                "examples": [
                    "She eats an apple.",
                    "Apple juice is sweet."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈæpəl"
    },
    {
        "word": "bread",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍞",
        "form": "noun",
        "plural": null,
        "subtext": "fresh bread, white bread",
        "definitions": [
            {
                "text": "A common food made from flour and water.",
                "examples": [
                    "I like fresh bread.",
                    "Can you buy some bread?",
                    "I eat bread for breakfast."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "brɛd"
    },
    {
        "word": "egg",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥚",
        "form": "noun",
        "plural": "eggs",
        "subtext": "boiled egg, fried egg, scrambled eggs",
        "definitions": [
            {
                "text": "An oval object laid by a hen.",
                "examples": [
                    "I had a boiled egg for breakfast.",
                    "How do you like your eggs?"
                ]
            },
            {
                "text": "Many people eat eggs for breakfast.",
                "examples": [
                    "We need eggs to bake a cake."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ɛg"
    },
    {
        "word": "milk",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥛",
        "form": "noun",
        "plural": null,
        "subtext": "fresh milk, glass of milk",
        "definitions": [
            {
                "text": "A white liquid produced by cows.",
                "examples": [
                    "Do you want milk in your coffee?",
                    "Children should drink milk."
                ]
            },
            {
                "text": "We use milk to make cheese and yogurt.",
                "examples": [
                    "Keep the milk in the fridge."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "mɪlk"
    },
    {
        "word": "banana",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍌",
        "form": "noun",
        "plural": "bananas",
        "definitions": [
            {
                "text": "A long yellow fruit.",
                "examples": [
                    "Monkeys like bananas.",
                    "I eat a banana every morning."
                ]
            },
            {
                "text": "Bananas grow in tropical areas.",
                "examples": [
                    "Peel the banana before eating it."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "bəˈnænə"
    },
    {
        "word": "coffee",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "☕",
        "form": "noun",
        "plural": null,
        "subtext": "black coffee, cup of coffee",
        "definitions": [
            {
                "text": "A hot brown drink made from coffee beans.",
                "examples": [
                    "I drink coffee in the morning.",
                    "I drink coffee every morning.",
                    "Do you want sugar in your coffee?"
                ]
            },
            {
                "text": "Many people drink this to wake up.",
                "examples": [
                    "The coffee is very hot."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈkɔfi"
    },
    {
        "word": "tea",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🍵",
        "form": "noun",
        "plural": null,
        "subtext": "green tea, cup of tea",
        "definitions": [
            {
                "text": "A hot drink made with hot water and tea leaves.",
                "examples": [
                    "Would you like a cup of tea?",
                    "Green tea is very healthy.",
                    "She drinks tea every day."
                ]
            },
            {
                "text": "This is a very popular drink in England and Asia.",
                "examples": [
                    "I like tea with lemon."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ti"
    },
    {
        "word": "juice",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🧃",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A liquid from fruit or vegetables.",
                "examples": [
                    "I want a glass of orange juice.",
                    "Apple juice is sweet."
                ]
            },
            {
                "text": "Orange juice is common for breakfast.",
                "examples": [
                    "Freshly squeezed juice is the best."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to drinks",
        "opposite": null,
        "transcription": "ʤus"
    },
    {
        "word": "water",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "subtext": "cold water, glass of water",
        "definitions": [
            {
                "text": "A clear liquid that we drink.",
                "examples": [
                    "I drink a glass of water.",
                    "The water is cold.",
                    "Please drink water."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈwɔtər"
    },
    {
        "word": "park",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🌳",
        "form": "noun",
        "plural": "parks",
        "definitions": [
            {
                "text": "A public garden where people go to walk and relax.",
                "examples": [
                    "Let's walk in the park.",
                    "The park has many trees."
                ]
            },
            {
                "text": "This is a place where you can see grass, trees, and flowers.",
                "examples": [
                    "Children play in the park."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to local places services",
        "opposite": null,
        "transcription": "pɑrk"
    },
    {
        "word": "school",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🏫",
        "form": "noun",
        "plural": "schools",
        "definitions": [
            {
                "text": "A place where children go to learn.",
                "examples": [
                    "I go to school by bus.",
                    "My school is near my house."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to local places services",
        "opposite": null,
        "transcription": "skul"
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirts",
        "subtext": "wear a t-shirt",
        "definitions": [
            {
                "text": "A casual shirt with short sleeves and no collar.",
                "examples": [
                    "I am wearing a white t-shirt."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈtiˌsərt"
    },
    {
        "word": "pants",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "plural": "pants",
        "subtext": "related to items of clothing",
        "synonyms": [
            "trousers"
        ],
        "definitions": [
            {
                "text": "An outer garment covering each leg separately from waist to ankle.",
                "examples": [
                    "I need new pants."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "pænts"
    },
    {
        "word": "shoe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👟",
        "form": "noun",
        "plural": "shoes",
        "subtext": "put on shoes, pair of shoes",
        "definitions": [
            {
                "text": "Something you wear on your feet.",
                "examples": [
                    "Put on your shoes."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʃu"
    },
    {
        "word": "hat",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👒",
        "form": "noun",
        "plural": "hats",
        "subtext": "wear a hat",
        "definitions": [
            {
                "text": "Something you wear on your head.",
                "examples": [
                    "She is wearing a beautiful hat."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "hæt"
    },
    {
        "word": "chair",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "plural": "chairs",
        "subtext": "wooden chair, sit on a chair",
        "definitions": [
            {
                "text": "A piece of furniture for one person to sit on.",
                "examples": [
                    "Please sit on the chair.",
                    "This chair is broken."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʧɛr"
    },
    {
        "word": "table",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tables",
        "subtext": "kitchen table, on the table",
        "definitions": [
            {
                "text": "A piece of furniture with four legs used for eating or working.",
                "examples": [
                    "The food is on the table.",
                    "Let's sit at the table."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈteɪbəl"
    },
    {
        "word": "bed",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "beds",
        "subtext": "comfortable bed, go to bed",
        "definitions": [
            {
                "text": "A piece of furniture that you sleep on.",
                "examples": [
                    "My bed is very comfortable.",
                    "It's time to go to bed."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "bɛd"
    },
    {
        "word": "key",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🔑",
        "form": "noun",
        "plural": "keys",
        "definitions": [
            {
                "text": "A metal object used to open a door or start a car.",
                "examples": [
                    "I can't find my keys.",
                    "Here is the key to your room."
                ]
            },
            {
                "text": "Something very important (like the key to success).",
                "examples": [
                    "Practice is the key to learning.",
                    "What is the key factor?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ki"
    },
    {
        "word": "phone",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "plural": "phones",
        "subtext": "related to basic technology devices",
        "synonyms": [
            "telephone"
        ],
        "definitions": [
            {
                "text": "A device used to talk to people far away.",
                "examples": [
                    "I am talking on the phone."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "foʊn"
    },
    {
        "word": "book",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "numberPlural": "2 book",
        "answer": "two books",
        "emoji": "📚",
        "form": "noun",
        "plural": "books",
        "definitions": [
            {
                "text": "Many pages with words and pictures that you read.",
                "examples": [
                    "I read a book every night.",
                    "This book is interesting."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "bʊk"
    },
    {
        "word": "bag",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "👜",
        "form": "noun",
        "plural": "bags",
        "definitions": [
            {
                "text": "A container made of paper, plastic, or leather to carry things.",
                "examples": [
                    "Put the apples in the bag.",
                    "My school bag is heavy."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "bæg"
    },
    {
        "word": "pen",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "pens",
        "definitions": [
            {
                "text": "An object used for writing with ink.",
                "examples": [
                    "Can I borrow your pen?",
                    "The pen is on the desk."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "pɛn"
    },
    {
        "word": "cat",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐈",
        "numberPlural": "2 cat",
        "answer": "two cats",
        "form": "noun",
        "plural": "cats",
        "definitions": [
            {
                "text": "A small animal with fur that many people keep at home.",
                "examples": [
                    "My cat is sleeping.",
                    "I love cats."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "kæt"
    },
    {
        "word": "dog",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐕",
        "numberPlural": "5 dog",
        "answer": "five dogs",
        "form": "noun",
        "plural": "dogs",
        "definitions": [
            {
                "text": "An animal that is often called 'man's best friend'.",
                "examples": [
                    "I walk my dog in the park.",
                    "The dog is barking."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "dɔg"
    },
    {
        "word": "bird",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐦",
        "form": "noun",
        "plural": "birds",
        "definitions": [
            {
                "text": "An animal that has feathers and wings, and usually can fly.",
                "examples": [
                    "A bird is singing.",
                    "Look at that beautiful bird!"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "bərd"
    },
    {
        "word": "fish",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐟",
        "form": "noun",
        "plural": "fish",
        "definitions": [
            {
                "text": "An animal that lives and breathes in water.",
                "examples": [
                    "There are many fish in the sea.",
                    "The fish is swimming."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "fɪʃ"
    },
    {
        "word": "head",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👤",
        "form": "noun",
        "plural": "heads",
        "subtext": "headache, shake your head",
        "definitions": [
            {
                "text": "The top part of your body that has your eyes, mouth, and brain.",
                "examples": [
                    "I have a hat on my head.",
                    "He nodded his head."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "hɛd"
    },
    {
        "word": "hand",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "✋",
        "form": "noun",
        "plural": "hands",
        "subtext": "left hand, right hand, wash your hands",
        "definitions": [
            {
                "text": "The part of your arm that has fingers.",
                "examples": [
                    "Wash your hands before dinner.",
                    "Give me your hand."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "hænd"
    },
    {
        "word": "leg",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦵",
        "form": "noun",
        "plural": "legs",
        "subtext": "left leg, right leg, long legs",
        "definitions": [
            {
                "text": "The long part of the body that you use for walking.",
                "examples": [
                    "I have two legs."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "lɛg"
    },
    {
        "word": "eye",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "form": "noun",
        "plural": "eyes",
        "subtext": "blue eyes, close your eyes",
        "definitions": [
            {
                "text": "The part of your body that you use for seeing.",
                "examples": [
                    "Close your eyes.",
                    "She has blue eyes."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "aɪ"
    },
    {
        "word": "nose",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "noun",
        "plural": "noses",
        "definitions": [
            {
                "text": "The part of the face that you use for smelling.",
                "examples": [
                    "He has a small nose."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "noʊz"
    },
    {
        "word": "mouth",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👄",
        "form": "noun",
        "plural": "mouths",
        "subtext": "open your mouth, mouth shut",
        "definitions": [
            {
                "text": "The part of the face that you use for eating and speaking.",
                "examples": [
                    "Open your mouth."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "maʊθ"
    },
    {
        "word": "ear",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "form": "noun",
        "plural": "ears",
        "subtext": "left ear, right ear, earache",
        "definitions": [
            {
                "text": "The part of the body that you use for hearing.",
                "examples": [
                    "I have two ears."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ɪr"
    },
    {
        "word": "smartphone",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "plural": "smartphones",
        "definitions": [
            {
                "text": "A mobile phone that can also connect to the internet.",
                "examples": [
                    "I use my smartphone every day."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈsmɑːrtfoʊn"
    },
    {
        "word": "mother",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "plural": "mothers",
        "definitions": [
            {
                "text": "A woman who is your parent.",
                "examples": [
                    "My mother is very kind.",
                    "I love my mother."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "opposite": null,
        "transcription": "ˈməðər"
    },
    {
        "word": "father",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "plural": "fathers",
        "definitions": [
            {
                "text": "A man who is your parent (usually the husband of your mother).",
                "examples": [
                    "My father is at work.",
                    "His father is tall."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "opposite": null,
        "transcription": "ˈfɑðər"
    },
    {
        "word": "man",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "numberPlural": "2 man",
        "answer": "two men",
        "emoji": "👨",
        "form": "noun",
        "plural": "men",
        "definitions": [
            {
                "text": "An adult male person.",
                "examples": [
                    "That man is my teacher.",
                    "A tall man is standing there.",
                    "That man is my boss."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to physical appearance",
        "opposite": null,
        "transcription": "mæn"
    },
    {
        "word": "woman",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "numberPlural": "2 woman",
        "answer": "two women",
        "emoji": "👩",
        "form": "noun",
        "plural": "women",
        "definitions": [
            {
                "text": "An adult female person.",
                "examples": [
                    "She is a very strong woman.",
                    "There are three women in the office.",
                    "That woman is a doctor."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to physical appearance",
        "opposite": null,
        "transcription": "ˈwʊmən"
    },
    {
        "word": "work",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "subtext": "at work, go to work",
        "definitions": [
            {
                "text": "A job; a place where people go to earn money.",
                "examples": [
                    "I go to work every day."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "wərk"
    },
    {
        "word": "job",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "plural": "jobs",
        "definitions": [
            {
                "text": "The work that a person does to earn money.",
                "examples": [
                    "She has a good job."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ʤɑb"
    },
    {
        "word": "office",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A1",
        "emoji": "🏢",
        "form": "noun",
        "plural": "offices",
        "subtext": "workplace, big office, work in an office",
        "definitions": [
            {
                "text": "A room or building where people work.",
                "examples": [
                    "He is in the office."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈɔfəs"
    },
    {
        "word": "home",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏠",
        "form": "noun",
        "subtext": "go home, at home",
        "definitions": [
            {
                "text": "The place where you live.",
                "examples": [
                    "I go home at six o'clock."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "hoʊm"
    },
    {
        "word": "house",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏡",
        "form": "noun",
        "plural": "houses",
        "subtext": "big house, live in a house",
        "definitions": [
            {
                "text": "A building where a family lives.",
                "examples": [
                    "They have a big house."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "haʊs"
    },
    {
        "word": "flat",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏢",
        "form": "noun",
        "plural": "flats",
        "subtext": "apartment, live in a flat, small flat",
        "definitions": [
            {
                "text": "A set of rooms on one floor of a building.",
                "examples": [
                    "She lives in a flat."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "flæt"
    },
    {
        "word": "car",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "form": "noun",
        "plural": "cars",
        "subtext": "drive a car, fast car",
        "definitions": [
            {
                "text": "A vehicle with four wheels and an engine.",
                "examples": [
                    "His car is red."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "kɑr"
    },
    {
        "word": "bus",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚌",
        "form": "noun",
        "plural": "buses",
        "subtext": "take the bus, go by bus, bus stop",
        "definitions": [
            {
                "text": "A large vehicle that carries many people.",
                "examples": [
                    "I take the bus to work."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "bəs"
    },
    {
        "word": "train",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚆",
        "form": "noun",
        "plural": "trains",
        "subtext": "take the train, by train, train station",
        "definitions": [
            {
                "text": "A vehicle that runs on rails.",
                "examples": [
                    "The train is fast."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "treɪn"
    },
    {
        "word": "food",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍲",
        "form": "noun",
        "subtext": "healthy food, fast food",
        "definitions": [
            {
                "text": "Things that people eat.",
                "examples": [
                    "The food is good here."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "fud"
    },
    {
        "word": "rice",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍚",
        "form": "noun",
        "plural": null,
        "subtext": "white rice, fried rice",
        "definitions": [
            {
                "text": "Small white grains that we cook and eat.",
                "examples": [
                    "We eat rice every day."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "raɪs"
    },
    {
        "word": "meat",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "subtext": "fresh meat, eat meat",
        "definitions": [
            {
                "text": "Food that comes from animals.",
                "examples": [
                    "He eats meat and vegetables."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "mit"
    },
    {
        "word": "breakfast",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍳",
        "form": "noun",
        "subtext": "eat breakfast, have breakfast",
        "definitions": [
            {
                "text": "The first meal of the day.",
                "examples": [
                    "Breakfast is at seven o'clock."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈbrɛkfəst"
    },
    {
        "word": "dinner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍽️",
        "form": "noun",
        "subtext": "eat dinner, have dinner",
        "definitions": [
            {
                "text": "The main meal of the day, usually in the evening.",
                "examples": [
                    "Dinner is at eight o'clock."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈdɪnər"
    },
    {
        "word": "money",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💰",
        "form": "noun",
        "plural": null,
        "subtext": "spend money, save money",
        "definitions": [
            {
                "text": "Coins or notes used to buy things.",
                "examples": [
                    "I have money in my bag."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈməni"
    },
    {
        "word": "shop",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛒",
        "form": "noun",
        "plural": "shops",
        "subtext": "go to a shop, local shop",
        "definitions": [
            {
                "text": "A place where you can buy things.",
                "examples": [
                    "The shop is open."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʃɑp"
    },
    {
        "word": "family",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👪",
        "form": "noun",
        "plural": "families",
        "definitions": [
            {
                "text": "A group of people who are related.",
                "examples": [
                    "My family is big."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "opposite": null,
        "transcription": "ˈfæməli"
    },
    {
        "word": "friend",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👫",
        "form": "noun",
        "plural": "friends",
        "definitions": [
            {
                "text": "A person you like and know well.",
                "examples": [
                    "She is my friend."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "opposite": null,
        "transcription": "frɛnd"
    },
    {
        "word": "partner",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "💑",
        "form": "noun",
        "plural": "partners",
        "subtext": "husband, wife, boyfriend, girlfriend",
        "definitions": [
            {
                "text": "The person you live with or are in a relationship with.",
                "examples": [
                    "My partner works here."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈpɑrtnər"
    },
    {
        "word": "morning",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "noun",
        "opposite": "evening",
        "subtext": "early morning, good morning",
        "definitions": [
            {
                "text": "The part of the day before 12 o'clock.",
                "examples": [
                    "I start work in the morning."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˈmɔrnɪŋ"
    },
    {
        "word": "evening",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌆",
        "form": "noun",
        "opposite": "morning",
        "subtext": "this evening, good evening",
        "definitions": [
            {
                "text": "The part of the day after afternoon and before night.",
                "examples": [
                    "We eat dinner in the evening."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˈivnɪŋ"
    },
    {
        "word": "day",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "noun",
        "plural": "days",
        "opposite": "night",
        "definitions": [
            {
                "text": "A period of 24 hours.",
                "examples": [
                    "I work five days a week."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to times day",
        "transcription": "deɪ"
    },
    {
        "word": "week",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "plural": "weeks",
        "subtext": "next week, last week",
        "definitions": [
            {
                "text": "A period of seven days.",
                "examples": [
                    "I work five days a week."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "wik"
    },
    {
        "word": "every day",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "On each day without exception.",
                "examples": [
                    "I drink coffee every day."
                ]
            }
        ],
        "subtext": "related to times day",
        "opposite": null,
        "transcription": "ˈɛvəri deɪ"
    },
    {
        "word": "lunch",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍱",
        "form": "noun",
        "subtext": "eat lunch, lunch break",
        "definitions": [
            {
                "text": "A meal eaten in the middle of the day.",
                "examples": [
                    "I eat lunch at one o'clock.",
                    "What is for lunch?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "lənʧ"
    },
    {
        "word": "boss",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💼",
        "form": "noun",
        "plural": "bosses",
        "subtext": "work, profession, get a job",
        "definitions": [
            {
                "text": "The person who is in charge at work.",
                "examples": [
                    "My boss is very friendly."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "bɔs"
    },
    {
        "word": "colleague",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "colleagues",
        "definitions": [
            {
                "text": "A person you work with.",
                "examples": [
                    "My colleagues are helpful."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to workplace basics",
        "opposite": null,
        "transcription": "ˈkɑlig"
    },
    {
        "word": "meeting",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "noun",
        "plural": "meetings",
        "subtext": "have a meeting, go to a meeting",
        "definitions": [
            {
                "text": "A time when people come together to talk about something.",
                "examples": [
                    "We have a meeting every Monday.",
                    "The meeting is in the office."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈmitɪŋ"
    },
    {
        "word": "commute",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "form": "noun",
        "plural": "commutes",
        "definitions": [
            {
                "text": "The journey to and from work each day.",
                "examples": [
                    "My commute takes one hour."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to public transport",
        "opposite": null,
        "transcription": "kəmˈjut"
    },
    {
        "word": "stress",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "noun",
        "subtext": "under stress, a lot of stress",
        "definitions": [
            {
                "text": "A feeling of worry caused by a difficult situation.",
                "examples": [
                    "I have a lot of stress at work."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "strɛs"
    },
    {
        "word": "rent",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "form": "noun",
        "definitions": [
            {
                "text": "Money you pay to live in a house or flat.",
                "examples": [
                    "I pay rent on the first of the month."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to types of accommodation",
        "opposite": null,
        "transcription": "rɛnt"
    },
    {
        "word": "neighbour",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "neighbours",
        "subtext": "next-door neighbour",
        "definitions": [
            {
                "text": "A person who lives next to you or near you.",
                "examples": [
                    "My neighbours are very nice."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈneɪbər"
    },
    {
        "word": "room",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🚪",
        "form": "noun",
        "plural": "rooms",
        "subtext": "living room, bedroom, clean the room",
        "definitions": [
            {
                "text": "A separate part of a building with walls and a door.",
                "examples": [
                    "The flat has three rooms."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "rum"
    },
    {
        "word": "kitchen",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🍳",
        "form": "noun",
        "plural": "kitchens",
        "subtext": "clean the kitchen, in the kitchen",
        "definitions": [
            {
                "text": "The room in a house where food is prepared.",
                "examples": [
                    "I cook in the kitchen."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈkɪʧən"
    },
    {
        "word": "sleep",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "form": "noun",
        "definitions": [
            {
                "text": "The natural rest your body needs each night.",
                "examples": [
                    "I need eight hours of sleep."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to daily work routines",
        "opposite": "wake up",
        "transcription": "slip"
    },
    {
        "word": "exercise",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏃",
        "form": "noun",
        "definitions": [
            {
                "text": "Physical activity that keeps you fit and healthy.",
                "examples": [
                    "I do exercise three times a week."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "ˈɛksərˌsaɪz"
    },
    {
        "word": "price",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "prices",
        "subtext": "cost, high price, low price",
        "definitions": [
            {
                "text": "The amount of money you pay for something.",
                "examples": [
                    "The price of food is high."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "praɪs"
    },
    {
        "word": "cost",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "noun",
        "plural": "costs",
        "definitions": [
            {
                "text": "The amount of money needed to buy something.",
                "examples": [
                    "What is the cost of the flat?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to money payment",
        "opposite": null,
        "transcription": "kɔst"
    },
    {
        "word": "together",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": null,
        "oppositeEmoji": "👤",
        "definitions": [
            {
                "text": "With another person or group.",
                "examples": [
                    "We eat dinner together."
                ]
            }
        ],
        "subtext": "related to family life",
        "transcription": "təˈgɛðər"
    },
    {
        "word": "holiday",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "holidays",
        "subtext": "vacation, go on holiday",
        "definitions": [
            {
                "text": "A period of time away from work when you travel or relax.",
                "examples": [
                    "We have a holiday in July."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈhɑlɪˌdeɪ"
    },
    {
        "word": "hotel",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🏨",
        "form": "noun",
        "plural": "hotels",
        "definitions": [
            {
                "text": "A building where people pay to stay overnight.",
                "examples": [
                    "The hotel is near the station."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to public transport",
        "opposite": null,
        "transcription": "hoʊˈtɛl"
    },
    {
        "word": "weekend",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "plural": "weekends",
        "subtext": "at the weekend, on weekends",
        "definitions": [
            {
                "text": "Saturday and Sunday.",
                "examples": [
                    "I relax at the weekend."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈwiˌkɪnd"
    },
    {
        "word": "free time",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "noun",
        "definitions": [
            {
                "text": "Time when you are not working and can do what you want.",
                "examples": [
                    "I read books in my free time."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "fri taɪm"
    },
    {
        "word": "travel",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "✈️",
        "form": "noun",
        "definitions": [
            {
                "text": "The activity of going to different places.",
                "examples": [
                    "Air travel is fast."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to travel vocabulary basics",
        "opposite": null,
        "transcription": "ˈtrævəl"
    },
    {
        "word": "back",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🚶",
        "form": "noun",
        "plural": "backs",
        "subtext": "back pain, lie on your back",
        "definitions": [
            {
                "text": "The rear part of the body, from neck to bottom.",
                "examples": [
                    "I have pain in my back."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "bæk"
    },
    {
        "word": "arm",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "💪",
        "form": "noun",
        "plural": "arms",
        "subtext": "broken arm, left arm",
        "definitions": [
            {
                "text": "The part of the body from the shoulder to the hand.",
                "examples": [
                    "She broke her arm."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ɑrm"
    },
    {
        "word": "fruit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "noun",
        "plural": null,
        "subtext": "fresh fruit, fruit juice",
        "definitions": [
            {
                "text": "The sweet part of a plant that contains seeds, used as food.",
                "examples": [
                    "Fruit is healthy and good for you."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "frut"
    },
    {
        "word": "vegetable",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥦",
        "form": "noun",
        "plural": "vegetables",
        "subtext": "fresh vegetables, green vegetables",
        "definitions": [
            {
                "text": "A plant that is eaten as food, such as a carrot or tomato.",
                "examples": [
                    "He eats vegetables every day."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈvɛʤtəbəl"
    },
    {
        "word": "beer",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🍺",
        "form": "noun",
        "plural": null,
        "subtext": "cold beer, bottle of beer",
        "definitions": [
            {
                "text": "A popular alcoholic drink made from grain.",
                "examples": [
                    "He drinks beer at the weekend."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "bɪr"
    },
    {
        "word": "wine",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🍷",
        "form": "noun",
        "plural": null,
        "subtext": "red wine, white wine, a glass of wine",
        "definitions": [
            {
                "text": "An alcoholic drink made from grapes.",
                "examples": [
                    "She drinks a glass of wine in the evening."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "waɪn"
    },
    {
        "word": "door",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🚪",
        "form": "noun",
        "plural": "doors",
        "subtext": "open the door, front door",
        "definitions": [
            {
                "text": "A flat panel that opens and closes to let people in and out.",
                "examples": [
                    "Please close the door."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "dɔr"
    },
    {
        "word": "window",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪟",
        "form": "noun",
        "plural": "windows",
        "subtext": "open the window, shop window",
        "definitions": [
            {
                "text": "An opening in a wall filled with glass that lets in light.",
                "examples": [
                    "Open the window — it is hot."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈwɪndoʊ"
    },
    {
        "word": "driver",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🚗",
        "form": "noun",
        "plural": "drivers",
        "subtext": "bus driver, taxi driver, car driver",
        "definitions": [
            {
                "text": "A person who drives a vehicle as their job.",
                "examples": [
                    "The bus driver was friendly."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈdraɪvər"
    },
    {
        "word": "manager",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "managers",
        "subtext": "office manager, bank manager",
        "definitions": [
            {
                "text": "A person who is in charge of a team or business.",
                "examples": [
                    "My manager works very long hours."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈmænɪʤər"
    },
    {
        "word": "plane",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "form": "noun",
        "plural": "planes",
        "subtext": "airplane, take a plane",
        "definitions": [
            {
                "text": "A vehicle with wings that flies through the air.",
                "examples": [
                    "The plane lands at nine o'clock."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "pleɪn"
    },
    {
        "word": "bike",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚲",
        "form": "noun",
        "plural": "bikes",
        "subtext": "bicycle, ride a bike",
        "definitions": [
            {
                "text": "A two-wheeled vehicle that you ride by pushing pedals.",
                "examples": [
                    "He cycles to work on his bike."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "baɪk"
    },
    {
        "word": "hospital",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🏥",
        "form": "noun",
        "plural": "hospitals",
        "subtext": "go to hospital, hospital bed",
        "definitions": [
            {
                "text": "A place where sick or injured people receive medical care.",
                "examples": [
                    "He went to the hospital by ambulance."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈhɑˌspɪtəl"
    },
    {
        "word": "restaurant",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🍴",
        "form": "noun",
        "plural": "restaurants",
        "subtext": "Italian restaurant, go to a restaurant",
        "definitions": [
            {
                "text": "A place where you pay to eat meals.",
                "examples": [
                    "We go to a restaurant on Fridays."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈrɛˌstrɑnt"
    },
    {
        "word": "bank",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🏦",
        "form": "noun",
        "plural": "banks",
        "subtext": "bank account, go to the bank",
        "definitions": [
            {
                "text": "A place where people keep money and do financial transactions.",
                "examples": [
                    "The bank is near my office."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "bæŋk"
    },
    {
        "word": "station",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🚉",
        "form": "noun",
        "plural": "stations",
        "subtext": "train station, bus station",
        "definitions": [
            {
                "text": "A building where trains or buses stop for passengers.",
                "examples": [
                    "The station is ten minutes from here."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈsteɪʃən"
    },
    {
        "word": "supermarket",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermarkets",
        "subtext": "go to the supermarket",
        "definitions": [
            {
                "text": "A large shop selling food and other household goods.",
                "examples": [
                    "I go to the supermarket on Saturdays."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈsupərˌmɑrkɪt"
    },
    {
        "word": "sun",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "noun",
        "plural": null,
        "subtext": "hot sun, morning sun",
        "definitions": [
            {
                "text": "The star that gives light and heat during the day.",
                "examples": [
                    "The sun is very strong today."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "sən"
    },
    {
        "word": "rain",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "noun",
        "plural": null,
        "subtext": "heavy rain, rain boots",
        "definitions": [
            {
                "text": "Water that falls from clouds in drops.",
                "examples": [
                    "There is a lot of rain in autumn."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "reɪn"
    },
    {
        "word": "wind",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "💨",
        "form": "noun",
        "plural": null,
        "subtext": "strong wind, cold wind",
        "definitions": [
            {
                "text": "Air that moves, sometimes strongly.",
                "examples": [
                    "The wind is very strong today."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "wɪnd"
    },
    {
        "word": "afternoon",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "noun",
        "opposite": "evening",
        "subtext": "this afternoon, good afternoon",
        "definitions": [
            {
                "text": "The part of the day from noon until the evening.",
                "examples": [
                    "I finish work at five in the afternoon."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˌæftərˈnun"
    },
    {
        "word": "night",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "noun",
        "plural": "nights",
        "opposite": "day",
        "subtext": "good night, at night",
        "definitions": [
            {
                "text": "The period of darkness between evening and morning.",
                "examples": [
                    "I sleep eight hours every night."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "naɪt"
    },
    {
        "word": "today",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "opposite": "tomorrow",
        "subtext": "today's meeting, start today",
        "definitions": [
            {
                "text": "On this day; the current day.",
                "examples": [
                    "I have a meeting today at ten."
                ]
            }
        ],
        "transcription": "təˈdeɪ"
    },
    {
        "word": "tomorrow",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "adverb",
        "opposite": "yesterday",
        "subtext": "tomorrow morning, see you tomorrow",
        "definitions": [
            {
                "text": "On the day after today.",
                "examples": [
                    "She has a doctor's appointment tomorrow."
                ]
            }
        ],
        "transcription": "təˈmɑˌroʊ"
    },
    {
        "word": "husband",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "plural": "husbands",
        "opposite": null,
        "oppositeEmoji": "👩",
        "subtext": "related to immediate family",
        "synonyms": [
            "spouse",
            "partner"
        ],
        "definitions": [
            {
                "text": "A married man, in relation to his wife.",
                "examples": [
                    "Her husband is a doctor."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˈhəzbənd"
    },
    {
        "word": "wife",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "plural": "wives",
        "opposite": null,
        "oppositeEmoji": "👨",
        "subtext": "related to immediate family",
        "synonyms": [
            "spouse",
            "partner"
        ],
        "definitions": [
            {
                "text": "A married woman, in relation to her husband.",
                "examples": [
                    "His wife works in finance."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "waɪf"
    },
    {
        "word": "child",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👶",
        "form": "noun",
        "plural": "children",
        "subtext": "related to immediate family",
        "synonyms": [
            "kid",
            "young person"
        ],
        "definitions": [
            {
                "text": "A young person; a son or daughter.",
                "examples": [
                    "They have two children."
                ]
            }
        ],
        "countability": "countable",
        "opposite": "adult",
        "transcription": "ʧaɪld"
    },
    {
        "word": "parent",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👪",
        "form": "noun",
        "plural": "parents",
        "subtext": "related to immediate family",
        "synonyms": [
            "mother or father"
        ],
        "definitions": [
            {
                "text": "A mother or father.",
                "examples": [
                    "My parents live in the north."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈpɛrənt"
    },
    {
        "word": "sister",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👧",
        "form": "noun",
        "plural": "sisters",
        "opposite": null,
        "oppositeEmoji": "👦",
        "subtext": "elder sister, younger sister",
        "definitions": [
            {
                "text": "A girl or woman who has the same parents as another person.",
                "examples": [
                    "I have two sisters.",
                    "My sister is a student."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˈsɪstər"
    },
    {
        "word": "brother",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👦",
        "form": "noun",
        "plural": "brothers",
        "opposite": null,
        "oppositeEmoji": "👧",
        "subtext": "elder brother, younger brother",
        "definitions": [
            {
                "text": "A boy or man who has the same parents as another person.",
                "examples": [
                    "He is my elder brother.",
                    "Do you have any brothers?"
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˈbrəðər"
    },
    {
        "word": "son",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👦",
        "form": "noun",
        "plural": "sons",
        "opposite": null,
        "oppositeEmoji": "👧",
        "definitions": [
            {
                "text": "A person's male child.",
                "examples": [
                    "They have one son and two daughters."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "transcription": "sən"
    },
    {
        "word": "daughter",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👧",
        "form": "noun",
        "plural": "daughters",
        "opposite": null,
        "oppositeEmoji": "👦",
        "definitions": [
            {
                "text": "A person's female child.",
                "examples": [
                    "Her daughter is five years old."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "transcription": "ˈdɔtər"
    },
    {
        "word": "grandfather",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👴",
        "form": "noun",
        "plural": "grandfathers",
        "opposite": null,
        "oppositeEmoji": "👵",
        "definitions": [
            {
                "text": "The father of your father or mother.",
                "examples": [
                    "My grandfather is eighty years old."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to extended family",
        "transcription": "ˈgrænˌfɑðər"
    },
    {
        "word": "grandmother",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👵",
        "form": "noun",
        "plural": "grandmothers",
        "opposite": null,
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "The mother of your father or mother.",
                "examples": [
                    "My grandmother lives in a small village."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to extended family",
        "transcription": "ˈgrændˌməðər"
    },
    {
        "word": "uncle",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👨",
        "form": "noun",
        "plural": "uncles",
        "opposite": null,
        "oppositeEmoji": "👩",
        "definitions": [
            {
                "text": "The brother of your mother or father, or the husband of your aunt.",
                "examples": [
                    "My uncle lives in London."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to extended family",
        "transcription": "ˈəŋkəl"
    },
    {
        "word": "aunt",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👩",
        "form": "noun",
        "plural": "aunts",
        "opposite": null,
        "oppositeEmoji": "👨",
        "definitions": [
            {
                "text": "The sister of your mother or father, or the wife of your uncle.",
                "examples": [
                    "My aunt is a teacher."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to extended family",
        "transcription": "ɔnt"
    },
    {
        "word": "cousin",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "🧑",
        "form": "noun",
        "plural": "cousins",
        "definitions": [
            {
                "text": "The child of your aunt or uncle.",
                "examples": [
                    "I have many cousins."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to extended family",
        "opposite": null,
        "transcription": "ˈkəzən"
    },
    {
        "word": "tree",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌳",
        "form": "noun",
        "plural": "trees",
        "subtext": "green tree, tall tree",
        "definitions": [
            {
                "text": "A tall plant that has a hard trunk, branches, and leaves.",
                "examples": [
                    "There are many trees in the park.",
                    "The bird is in the tree."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "tri"
    },
    {
        "word": "flower",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌸",
        "form": "noun",
        "plural": "flowers",
        "subtext": "beautiful flower, smell a flower",
        "definitions": [
            {
                "text": "The brightly colored part of a plant from which seeds or fruit grow.",
                "examples": [
                    "I bought some flowers for my mother.",
                    "Roses are beautiful flowers."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "flaʊər"
    },
    {
        "word": "mountain",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🏔️",
        "form": "noun",
        "plural": "mountains",
        "subtext": "high mountain, snow-capped mountain",
        "definitions": [
            {
                "text": "A very high hill.",
                "examples": [
                    "We can see mountains from our window.",
                    "The mountain is covered in snow."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈmaʊntən"
    },
    {
        "word": "river",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "rivers",
        "subtext": "long river, swim in a river",
        "definitions": [
            {
                "text": "A natural wide flow of fresh water across the land into the sea.",
                "examples": [
                    "The river flows through the city.",
                    "There is a bridge over the river."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈrɪvər"
    },
    {
        "word": "sea",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌊",
        "form": "noun",
        "plural": "seas",
        "subtext": "blue sea, swim in the sea",
        "definitions": [
            {
                "text": "The large area of salty water that covers much of the Earth's surface.",
                "examples": [
                    "I love swimming in the sea.",
                    "The sea is very calm today."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "si"
    },
    {
        "word": "beach",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "beaches",
        "subtext": "sandy beach, go to the beach",
        "definitions": [
            {
                "text": "An area of sand or small stones next to the sea.",
                "examples": [
                    "Let's go to the beach today.",
                    "The children are playing on the beach."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "biʧ"
    },
    {
        "word": "sky",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌌",
        "form": "noun",
        "plural": "skies",
        "subtext": "blue sky, cloudy sky",
        "definitions": [
            {
                "text": "The space above the Earth that you see when you look up.",
                "examples": [
                    "The sky is very blue today.",
                    "There are no clouds in the sky."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "skaɪ"
    },
    {
        "word": "moon",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌙",
        "form": "noun",
        "plural": null,
        "subtext": "full moon, look at the moon",
        "definitions": [
            {
                "text": "The large round object that moves around the Earth and shines at night.",
                "examples": [
                    "The moon is very bright tonight."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "mun"
    },
    {
        "word": "plate",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "plates",
        "subtext": "clean plate, put food on a plate",
        "definitions": [
            {
                "text": "A flat round dish that you put food on.",
                "examples": [
                    "Please put the sandwich on a plate."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "pleɪt"
    },
    {
        "word": "cup",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "☕",
        "form": "noun",
        "plural": "cups",
        "subtext": "cup of tea, cup of coffee",
        "definitions": [
            {
                "text": "A small container with a handle that you drink from.",
                "examples": [
                    "Would you like a cup of tea?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "kəp"
    },
    {
        "word": "glass",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🥛",
        "form": "noun",
        "plural": "glasses",
        "subtext": "glass of water, glass of wine",
        "definitions": [
            {
                "text": "A container made of glass used for drinking.",
                "examples": [
                    "Can I have a glass of water, please?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "glæs"
    },
    {
        "word": "fork",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🍴",
        "form": "noun",
        "plural": "forks",
        "definitions": [
            {
                "text": "A tool with three or four points used for picking up and eating food.",
                "examples": [
                    "Eat your pasta with a fork."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "fɔrk"
    },
    {
        "word": "spoon",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🥄",
        "form": "noun",
        "plural": "spoons",
        "definitions": [
            {
                "text": "A tool with a shallow bowl at the end used for eating or stirring.",
                "examples": [
                    "Use a spoon for your soup."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "spun"
    },
    {
        "word": "knife",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🔪",
        "form": "noun",
        "plural": "knives",
        "definitions": [
            {
                "text": "A tool with a sharp blade used for cutting food.",
                "examples": [
                    "Use a knife to cut the meat."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "naɪf"
    },
    {
        "word": "laptop",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "💻",
        "form": "noun",
        "plural": "laptops",
        "definitions": [
            {
                "text": "A small computer that you can carry.",
                "examples": [
                    "I use my laptop for work."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈlæpˌtɑp"
    },
    {
        "word": "television",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📺",
        "form": "noun",
        "plural": "televisions",
        "subtext": "TV, watch television",
        "definitions": [
            {
                "text": "A device with a screen for watching programs.",
                "examples": [
                    "We watch the news on television."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈtɛləˌvɪʒən"
    },
    {
        "word": "cinema",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinemas",
        "subtext": "go to the cinema, movie theater",
        "definitions": [
            {
                "text": "A place where you go to watch films.",
                "examples": [
                    "Let's go to the cinema tonight."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈsɪnəmə"
    },
    {
        "word": "museum",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "museums",
        "definitions": [
            {
                "text": "A building where you can look at important objects.",
                "examples": [
                    "The museum is very interesting."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "mˈjuziəm"
    },
    {
        "word": "airport",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "form": "noun",
        "plural": "airports",
        "definitions": [
            {
                "text": "A place where planes land and take off.",
                "examples": [
                    "I am going to the airport now."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to public transport",
        "opposite": null,
        "transcription": "ˈɛrˌpɔrt"
    },
    {
        "word": "chicken",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍗",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A common type of meat from a bird.",
                "examples": [
                    "I like roast chicken."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈʧɪkən"
    },
    {
        "word": "sugar",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍚",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A sweet substance used in food and drinks.",
                "examples": [
                    "Do you take sugar in your coffee?"
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈʃʊgər"
    },
    {
        "word": "salad",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "noun",
        "plural": "salads",
        "definitions": [
            {
                "text": "A cold dish of various vegetables.",
                "examples": [
                    "I'll have a green salad for lunch."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈsæləd"
    },
    {
        "word": "coat",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧥",
        "form": "noun",
        "plural": "coats",
        "subtext": "put on a coat",
        "definitions": [
            {
                "text": "A piece of clothing that you wear over other clothes to keep warm.",
                "examples": [
                    "Put on your coat — it's cold."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "koʊt"
    },
    {
        "word": "socks",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧦",
        "form": "noun",
        "plural": "socks",
        "definitions": [
            {
                "text": "Clothing worn on the feet inside shoes.",
                "examples": [
                    "I need some new socks."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "sɑks"
    },
    {
        "word": "neck",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦒",
        "form": "noun",
        "plural": "necks",
        "definitions": [
            {
                "text": "The part of the body that connects the head to the shoulders.",
                "examples": [
                    "He wears a scarf around his neck."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "nɛk"
    },
    {
        "word": "shoulder",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👤",
        "form": "noun",
        "plural": "shoulders",
        "definitions": [
            {
                "text": "The part of the body where the arm joins the trunk.",
                "examples": [
                    "She carried the bag on her shoulder."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "ˈʃoʊldər"
    },
    {
        "word": "in",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "transcription": "ɪn",
        "definitions": [
            {
                "text": "Inside a place or container.",
                "examples": [
                    "The keys are in the bag.",
                    "He is in the kitchen."
                ]
            },
            {
                "text": "Used with months, years, seasons, and parts of the day.",
                "examples": [
                    "In January.",
                    "In 2023.",
                    "In the morning.",
                    "In summer."
                ]
            }
        ],
        "subtext": "in the box, in London, in a car",
        "opposite": "out",
        "emoji": "📥"
    },
    {
        "word": "on",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "transcription": "ɒn",
        "definitions": [
            {
                "text": "Supported by or touching a surface.",
                "examples": [
                    "The book is on the table.",
                    "The picture is on the wall."
                ]
            },
            {
                "text": "Used with days and dates.",
                "examples": [
                    "On Monday.",
                    "On my birthday.",
                    "On the first of May."
                ]
            }
        ],
        "subtext": "on the floor, on a bus, on the phone",
        "opposite": "off",
        "emoji": "🔛"
    },
    {
        "word": "at",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "transcription": "æt",
        "definitions": [
            {
                "text": "Used to show a place or position.",
                "examples": [
                    "I am at the office.",
                    "Wait at the bus stop.",
                    "He is at home."
                ]
            },
            {
                "text": "Used to show a specific time.",
                "examples": [
                    "At seven o'clock.",
                    "At night.",
                    "At the weekend."
                ]
            }
        ],
        "subtext": "at work, at school, at the top",
        "opposite": "away from",
        "emoji": "📍"
    },
    {
        "word": "under",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "above",
        "definitions": [
            {
                "text": "Below or lower than something else.",
                "examples": [
                    "The cat is under the chair."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "👇",
        "transcription": "ˈəndər"
    },
    {
        "word": "and",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to join words or parts of sentences.",
                "examples": [
                    "I like coffee and tea."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": "or",
        "emoji": "➕",
        "transcription": "ænd"
    },
    {
        "word": "but",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to introduce a contrast.",
                "examples": [
                    "I like coffee, but I don't like milk."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": "and",
        "emoji": "❓",
        "transcription": "bət"
    },
    {
        "word": "because",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "form": "conjunction",
        "definitions": [
            {
                "text": "For the reason that.",
                "examples": [
                    "I am tired because I worked late."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": "so",
        "emoji": "💡",
        "transcription": "bɪˈkɒz"
    },
    {
        "word": "time",
        "level": "starter",
        "theme": "telling_time_A1",
        "emoji": "⌚",
        "form": "noun",
        "subtext": "what time is it?, spend time",
        "definitions": [
            {
                "text": "What is measured in minutes, hours, days, etc.",
                "examples": [
                    "What time is it?",
                    "I don't have much time."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "taɪm"
    },
    {
        "word": "problem",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "form": "noun",
        "plural": "problems",
        "subtext": "big problem, no problem",
        "definitions": [
            {
                "text": "Something that is difficult to deal with.",
                "examples": [
                    "I have a problem with my car.",
                    "No problem!"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈprɑbləm"
    },
    {
        "word": "beef",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from a cow.",
                "examples": [
                    "I prefer beef to chicken."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "bif"
    },
    {
        "word": "pork",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from a pig.",
                "examples": [
                    "Is there pork in this sausage?"
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "pɔrk"
    },
    {
        "word": "potato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥔",
        "form": "noun",
        "plural": "potatoes",
        "definitions": [
            {
                "text": "A round white vegetable with a brown skin that grows underground.",
                "examples": [
                    "I love roast potatoes."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "pəˈteɪˌtoʊ"
    },
    {
        "word": "tomato",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍅",
        "form": "noun",
        "plural": "tomatoes",
        "definitions": [
            {
                "text": "A soft red fruit with a lot of seeds, eaten as a vegetable.",
                "examples": [
                    "Put some tomatoes in the salad."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "təˈmɑˌtoʊ"
    },
    {
        "word": "onion",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🧅",
        "form": "noun",
        "plural": "onions",
        "definitions": [
            {
                "text": "A round vegetable with a strong smell and taste.",
                "examples": [
                    "Chop the onion finely.",
                    "I need an onion for the soup."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈənjən"
    },
    {
        "word": "carrot",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥕",
        "form": "noun",
        "plural": "carrots",
        "definitions": [
            {
                "text": "A long orange vegetable that grows underground.",
                "examples": [
                    "Carrots are good for your eyes."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈkɛrət"
    },
    {
        "word": "soup",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥣",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A liquid food made by cooking meat, vegetables, or fish in water.",
                "examples": [
                    "I had tomato soup for lunch."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "sup"
    },
    {
        "word": "cake",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍰",
        "form": "noun",
        "plural": "cakes",
        "definitions": [
            {
                "text": "A sweet food made from flour, sugar, and eggs.",
                "examples": [
                    "Would you like a piece of cake?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "keɪk"
    },
    {
        "word": "chocolate",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍫",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A sweet brown food made from cocoa beans.",
                "examples": [
                    "I love milk chocolate."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈʧɔklət"
    },
    {
        "word": "ice cream",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍦",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A very cold sweet food made from milk.",
                "examples": [
                    "Let's get an ice cream."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "aɪs krim"
    },
    {
        "word": "sweater",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧶",
        "form": "noun",
        "plural": "sweaters",
        "subtext": "related to items of clothing",
        "synonyms": [
            "jumper"
        ],
        "definitions": [
            {
                "text": "A warm piece of clothing with long sleeves.",
                "examples": [
                    "It's cold, wear a sweater."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "sˈwɛtər"
    },
    {
        "word": "dress",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👗",
        "form": "noun",
        "plural": "dresses",
        "definitions": [
            {
                "text": "A piece of clothing for a woman or girl that covers the top of the body and part of the legs.",
                "examples": [
                    "She is wearing a beautiful blue dress."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "drɛs"
    },
    {
        "word": "skirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👗",
        "form": "noun",
        "plural": "skirts",
        "definitions": [
            {
                "text": "A piece of clothing for a woman or girl that hangs from the waist.",
                "examples": [
                    "She wore a black skirt."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "skərt"
    },
    {
        "word": "boots",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🥾",
        "form": "noun",
        "plural": "boots",
        "definitions": [
            {
                "text": "A type of strong shoe that covers your foot and part of your leg.",
                "examples": [
                    "I need some new winter boots."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "buts"
    },
    {
        "word": "finger",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "☝️",
        "form": "noun",
        "plural": "fingers",
        "definitions": [
            {
                "text": "One of the five long parts at the end of your hand.",
                "examples": [
                    "He pointed his finger at the map."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "ˈfɪŋgər"
    },
    {
        "word": "toe",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦶",
        "form": "noun",
        "plural": "toes",
        "definitions": [
            {
                "text": "One of the five parts at the end of your foot.",
                "examples": [
                    "She stubbed her toe on the table."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "toʊ"
    },
    {
        "word": "stomach",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🤰",
        "form": "noun",
        "plural": "stomachs",
        "definitions": [
            {
                "text": "The part of your body where food goes after you eat it.",
                "examples": [
                    "I have a stomach ache."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "ˈstəmək"
    },
    {
        "word": "knee",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦵",
        "form": "noun",
        "plural": "knees",
        "definitions": [
            {
                "text": "The part in the middle of your leg where it bends.",
                "examples": [
                    "He hurt his knee playing football."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "ni"
    },
    {
        "word": "grass",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌱",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A common wild plant with narrow green leaves.",
                "examples": [
                    "Don't walk on the grass."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "græs"
    },
    {
        "word": "lake",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "lakes",
        "definitions": [
            {
                "text": "A large area of water surrounded by land.",
                "examples": [
                    "We went for a walk around the lake."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "leɪk"
    },
    {
        "word": "cloud",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "☁️",
        "form": "noun",
        "plural": "clouds",
        "definitions": [
            {
                "text": "A white or grey mass in the sky that is made of very small drops of water.",
                "examples": [
                    "Look at those big white clouds."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "klaʊd"
    },
    {
        "word": "star",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "⭐",
        "form": "noun",
        "plural": "stars",
        "definitions": [
            {
                "text": "A small bright light that you see in the sky at night.",
                "examples": [
                    "The stars are very bright tonight."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "stɑr"
    },
    {
        "word": "desk",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "desks",
        "definitions": [
            {
                "text": "A type of table that you sit at to write or work.",
                "examples": [
                    "The pen is on the desk."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "dɛsk"
    },
    {
        "word": "lamp",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "💡",
        "form": "noun",
        "plural": "lamps",
        "definitions": [
            {
                "text": "An object that produces light.",
                "examples": [
                    "Turn on the lamp."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "læmp"
    },
    {
        "word": "clock",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "⏰",
        "form": "noun",
        "plural": "clocks",
        "definitions": [
            {
                "text": "A device that shows the time.",
                "examples": [
                    "The clock on the wall says ten o'clock."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "klɑk"
    },
    {
        "word": "mirror",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪞",
        "form": "noun",
        "plural": "mirrors",
        "definitions": [
            {
                "text": "A piece of special glass in which you can see yourself.",
                "examples": [
                    "She looked at herself in the mirror."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ˈmɪrər"
    },
    {
        "word": "library",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "📚",
        "form": "noun",
        "plural": "libraries",
        "definitions": [
            {
                "text": "A place where you can read or borrow books.",
                "examples": [
                    "I go to the library to study."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "ˈlaɪbrɛˌri"
    },
    {
        "word": "Monday",
        "level": "starter",
        "theme": "days_week_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "The first day of the week.",
                "examples": [
                    "I start work on Monday."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈmənˌdeɪ"
    },
    {
        "word": "Tuesday",
        "level": "starter",
        "theme": "days_week_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "The second day of the week.",
                "examples": [
                    "We have a meeting on Tuesday."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈtuzˌdeɪ"
    },
    {
        "word": "Wednesday",
        "level": "starter",
        "theme": "days_week_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "The third day of the week.",
                "examples": [
                    "Is it Wednesday today?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈwɛnzˌdeɪ"
    },
    {
        "word": "Thursday",
        "level": "starter",
        "theme": "days_week_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "The fourth day of the week.",
                "examples": [
                    "I am busy on Thursday."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈθərzˌdeɪ"
    },
    {
        "word": "Friday",
        "level": "starter",
        "theme": "days_week_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "The fifth day of the week.",
                "examples": [
                    "I love Fridays!"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈfraɪˌdeɪ"
    },
    {
        "word": "Saturday",
        "level": "starter",
        "theme": "days_week_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "The sixth day of the week.",
                "examples": [
                    "I relax on Saturday."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈsæˌtɪˌdeɪ"
    },
    {
        "word": "Sunday",
        "level": "starter",
        "theme": "days_week_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "The seventh day of the week.",
                "examples": [
                    "The shop is closed on Sunday."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈsənˌdi"
    },
    {
        "word": "January",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "❄️",
        "form": "noun",
        "definitions": [
            {
                "text": "The first month of the year.",
                "examples": [
                    "It is cold in January."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈʤænjuˌɛri"
    },
    {
        "word": "February",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "❄️",
        "form": "noun",
        "definitions": [
            {
                "text": "The second month of the year.",
                "examples": [
                    "February is a short month."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈfɛbruˌɛri"
    },
    {
        "word": "March",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🌱",
        "form": "noun",
        "definitions": [
            {
                "text": "The third month of the year.",
                "examples": [
                    "Spring begins in March."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "mɑrʧ"
    },
    {
        "word": "April",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🌧️",
        "form": "noun",
        "definitions": [
            {
                "text": "The fourth month of the year.",
                "examples": [
                    "It rains a lot in April."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈeɪprəl"
    },
    {
        "word": "May",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🌸",
        "form": "noun",
        "definitions": [
            {
                "text": "The fifth month of the year.",
                "examples": [
                    "The weather is beautiful in May."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "meɪ"
    },
    {
        "word": "June",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "The sixth month of the year.",
                "examples": [
                    "Summer starts in June."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ʤun"
    },
    {
        "word": "July",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "The seventh month of the year.",
                "examples": [
                    "We go on holiday in July."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˌʤuˈlaɪ"
    },
    {
        "word": "August",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🏖️",
        "form": "noun",
        "definitions": [
            {
                "text": "The eighth month of the year.",
                "examples": [
                    "It is very hot in August."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈɔgəst"
    },
    {
        "word": "September",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🍂",
        "form": "noun",
        "definitions": [
            {
                "text": "The ninth month of the year.",
                "examples": [
                    "Children go back to school in September."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "sɛpˈtɛmbər"
    },
    {
        "word": "October",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🎃",
        "form": "noun",
        "definitions": [
            {
                "text": "The tenth month of the year.",
                "examples": [
                    "October is in autumn."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ɑkˈtoʊbər"
    },
    {
        "word": "November",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🌫️",
        "form": "noun",
        "definitions": [
            {
                "text": "The eleventh month of the year.",
                "examples": [
                    "It is often grey in November."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "noʊˈvɛmbər"
    },
    {
        "word": "December",
        "level": "starter",
        "theme": "months_year_A1",
        "emoji": "🎄",
        "form": "noun",
        "definitions": [
            {
                "text": "The twelfth month of the year.",
                "examples": [
                    "Christmas is in December."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "dɪˈsɛmbər"
    },
    {
        "word": "spring",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🌱",
        "form": "noun",
        "definitions": [
            {
                "text": "The season between winter and summer.",
                "examples": [
                    "Flowers grow in spring."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to seasons climate",
        "opposite": null,
        "transcription": "spərɪŋ"
    },
    {
        "word": "summer",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "The hottest season of the year.",
                "examples": [
                    "I love swimming in summer."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to seasons climate",
        "opposite": null,
        "transcription": "ˈsəmər"
    },
    {
        "word": "autumn",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "form": "noun",
        "subtext": "related to seasons climate",
        "synonyms": [
            "fall"
        ],
        "definitions": [
            {
                "text": "The season between summer and winter.",
                "examples": [
                    "Leaves fall in autumn."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈɔtəm"
    },
    {
        "word": "winter",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "❄️",
        "form": "noun",
        "definitions": [
            {
                "text": "The coldest season of the year.",
                "examples": [
                    "It snows in winter."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to seasons climate",
        "opposite": null,
        "transcription": "ˈwɪntər"
    },
    {
        "word": "lion",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🦁",
        "form": "noun",
        "plural": "lions",
        "definitions": [
            {
                "text": "A large wild cat that lives in Africa.",
                "examples": [
                    "The lion is the king of animals."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "laɪən"
    },
    {
        "word": "elephant",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐘",
        "form": "noun",
        "plural": "elephants",
        "definitions": [
            {
                "text": "A very large animal with a long trunk.",
                "examples": [
                    "I saw an elephant at the zoo."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "ˈɛləfənt"
    },
    {
        "word": "rabbit",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐰",
        "form": "noun",
        "plural": "rabbits",
        "definitions": [
            {
                "text": "A small animal with long ears.",
                "examples": [
                    "The rabbit is eating a carrot."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "ˈræbɪt"
    },
    {
        "word": "horse",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐴",
        "form": "noun",
        "plural": "horses",
        "definitions": [
            {
                "text": "A large animal that people can ride.",
                "examples": [
                    "She can ride a horse."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "hɔrs"
    },
    {
        "word": "cow",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐮",
        "form": "noun",
        "plural": "cows",
        "definitions": [
            {
                "text": "A large farm animal that gives milk.",
                "examples": [
                    "The cow is in the field."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "kaʊ"
    },
    {
        "word": "pig",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐷",
        "form": "noun",
        "plural": "pigs",
        "definitions": [
            {
                "text": "A pink farm animal.",
                "examples": [
                    "Pigs are intelligent animals."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "pɪg"
    },
    {
        "word": "sheep",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐑",
        "form": "noun",
        "plural": "sheep",
        "definitions": [
            {
                "text": "A farm animal with thick wool.",
                "examples": [
                    "The sheep are eating grass."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "ʃip"
    },
    {
        "word": "lemon",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍋",
        "form": "noun",
        "plural": "lemons",
        "definitions": [
            {
                "text": "A yellow fruit that tastes sour.",
                "examples": [
                    "I like tea with lemon."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈlɛmən"
    },
    {
        "word": "orange",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍊",
        "form": "noun",
        "plural": "oranges",
        "definitions": [
            {
                "text": "A round orange fruit.",
                "examples": [
                    "I want an orange, please."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈɔrɪnʤ"
    },
    {
        "word": "strawberry",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍓",
        "form": "noun",
        "plural": "strawberries",
        "definitions": [
            {
                "text": "A small red fruit.",
                "examples": [
                    "I love strawberry ice cream."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈstrɔˌbɛri"
    },
    {
        "word": "grape",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍇",
        "form": "noun",
        "plural": "grapes",
        "definitions": [
            {
                "text": "A small green or purple fruit.",
                "examples": [
                    "Would you like some grapes?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "greɪp"
    },
    {
        "word": "garlic",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🧄",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A vegetable with a very strong smell and taste.",
                "examples": [
                    "Use garlic in the pasta sauce."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈgɑrlɪk"
    },
    {
        "word": "always",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "♾️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At all times; every time.",
                "examples": [
                    "I always drink coffee in the morning."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "opposite": "never",
        "transcription": "ˈɔlˌweɪz"
    },
    {
        "word": "usually",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "In the way that most often happens.",
                "examples": [
                    "I usually go to work by bus."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "opposite": null,
        "transcription": "ˈjuʒəwəli"
    },
    {
        "word": "often",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Many times.",
                "examples": [
                    "We often eat out on Fridays."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "opposite": null,
        "transcription": "ˈɔfən"
    },
    {
        "word": "sometimes",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "⏱️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At some times but not all the time.",
                "examples": [
                    "Sometimes I walk to the office."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "opposite": null,
        "transcription": "ˈsəmˌtaɪmz"
    },
    {
        "word": "never",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "🚫",
        "form": "adverb",
        "definitions": [
            {
                "text": "Not at any time.",
                "examples": [
                    "He never drinks alcohol."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "opposite": "always",
        "transcription": "ˈnɛvər"
    },
    {
        "word": "who",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Used to ask about a person or people.",
                "examples": [
                    "Who is your teacher?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "hu"
    },
    {
        "word": "what",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Used to ask about things or actions.",
                "examples": [
                    "What is your name?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "wət"
    },
    {
        "word": "where",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📍",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about a place or position.",
                "examples": [
                    "Where do you live?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "wɛr"
    },
    {
        "word": "when",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "⏰",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about time.",
                "examples": [
                    "When is the meeting?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "wɪn"
    },
    {
        "word": "why",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask for a reason.",
                "examples": [
                    "Why are you late?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "waɪ"
    },
    {
        "word": "how",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "⚙️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about the way something is done or its state.",
                "examples": [
                    "How are you?",
                    "How do you spell your name?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "haʊ"
    },
    {
        "word": "hello",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "noun",
        "opposite": null,
        "definitions": [
            {
                "text": "A common greeting used when meeting someone.",
                "examples": [
                    "Hello! How are you?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to name greeting",
        "transcription": "hɛˈloʊ"
    },
    {
        "word": "goodbye",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "noun",
        "opposite": null,
        "definitions": [
            {
                "text": "A common greeting used when leaving someone.",
                "examples": [
                    "Goodbye! See you tomorrow."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to name greeting",
        "transcription": "ˌgʊdˈbaɪ"
    },
    {
        "word": "please",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to be polite when asking for something.",
                "examples": [
                    "A coffee, please."
                ]
            }
        ],
        "subtext": "related to greetings social phrases",
        "opposite": null,
        "transcription": "pliz"
    },
    {
        "word": "thank you",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "form": "noun",
        "definitions": [
            {
                "text": "Used to show gratitude.",
                "examples": [
                    "Thank you for the help."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to greetings social phrases",
        "opposite": null,
        "transcription": "θæŋk ju"
    },
    {
        "word": "yes",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "✅",
        "form": "adverb",
        "opposite": null,
        "definitions": [
            {
                "text": "Used to give a positive answer.",
                "examples": [
                    "Yes, I am a student."
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "jɛs"
    },
    {
        "word": "no",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❌",
        "form": "adverb",
        "opposite": null,
        "definitions": [
            {
                "text": "Used to give a negative answer.",
                "examples": [
                    "No, I am not a doctor."
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "noʊ"
    },
    {
        "word": "name",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🆔",
        "form": "noun",
        "definitions": [
            {
                "text": "What a person or thing is called.",
                "examples": [
                    "My name is John."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to name greeting",
        "opposite": null,
        "transcription": "neɪm"
    },
    {
        "word": "bathroom",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🚿",
        "form": "noun",
        "plural": "bathrooms",
        "definitions": [
            {
                "text": "A room where you can wash yourself and use the toilet.",
                "examples": [
                    "The bathroom is at the end of the hall."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "ˈbæθˌrum"
    },
    {
        "word": "bedroom",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "bedrooms",
        "definitions": [
            {
                "text": "A room where you sleep.",
                "examples": [
                    "My bedroom has a big window."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "ˈbɛˌdrum"
    },
    {
        "word": "baby",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👶",
        "form": "noun",
        "plural": "babies",
        "definitions": [
            {
                "text": "A very young child.",
                "examples": [
                    "The baby is sleeping."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "opposite": null,
        "transcription": "ˈbeɪbi"
    },
    {
        "word": "boy",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "👦",
        "form": "noun",
        "plural": "boys",
        "opposite": null,
        "oppositeEmoji": "👧",
        "definitions": [
            {
                "text": "A male child.",
                "examples": [
                    "The boy is playing with a ball."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to people",
        "transcription": "bɔɪ"
    },
    {
        "word": "girl",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "👧",
        "form": "noun",
        "plural": "girls",
        "opposite": null,
        "oppositeEmoji": "👦",
        "definitions": [
            {
                "text": "A female child.",
                "examples": [
                    "She is a clever girl."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to people",
        "transcription": "gərl"
    },
    {
        "word": "boyfriend",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "boyfriends",
        "opposite": null,
        "oppositeEmoji": "🧑‍🤝‍🧑",
        "definitions": [
            {
                "text": "A man with whom someone has a romantic relationship.",
                "examples": [
                    "Her boyfriend lives in London."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to marital status",
        "transcription": "ˈbɔɪˌfrɛnd"
    },
    {
        "word": "girlfriend",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "girlfriends",
        "opposite": null,
        "oppositeEmoji": "🧑‍🤝‍🧑",
        "definitions": [
            {
                "text": "A woman with whom someone has a romantic relationship.",
                "examples": [
                    "His girlfriend is a doctor."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to marital status",
        "transcription": "ˈgərlˌfrɛnd"
    },
    {
        "word": "student",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "plural": "students",
        "opposite": null,
        "oppositeEmoji": "🧑‍🏫",
        "definitions": [
            {
                "text": "A person who is studying at a school or university.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to learning studying",
        "transcription": "ˈstudənt"
    },
    {
        "word": "classmate",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "classmates",
        "definitions": [
            {
                "text": "A person who is in the same class as you at school.",
                "examples": [
                    "She is my classmate."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to learning studying",
        "opposite": null,
        "transcription": "ˈklæsˌmeɪt"
    },
    {
        "word": "camera",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📷",
        "form": "noun",
        "plural": "cameras",
        "definitions": [
            {
                "text": "A device for taking photos or videos.",
                "examples": [
                    "I have a new digital camera."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈkæmərə"
    },
    {
        "word": "computer",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "💻",
        "form": "noun",
        "plural": "computers",
        "definitions": [
            {
                "text": "An electronic machine that can store and find information.",
                "examples": [
                    "I use a computer at work."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "kəmˈpjutər"
    },
    {
        "word": "bottle",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🍼",
        "form": "noun",
        "plural": "bottles",
        "definitions": [
            {
                "text": "A container for liquids, usually made of glass or plastic.",
                "examples": [
                    "A bottle of water."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ˈbɑtəl"
    },
    {
        "word": "box",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📦",
        "form": "noun",
        "plural": "boxes",
        "definitions": [
            {
                "text": "A container with flat sides, usually made of paper or wood.",
                "examples": [
                    "Put the books in the box."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "bɑks"
    },
    {
        "word": "ball",
        "level": "starter",
        "theme": "sports_equipment_A1",
        "emoji": "⚽",
        "form": "noun",
        "plural": "balls",
        "definitions": [
            {
                "text": "A round object used in games and sports.",
                "examples": [
                    "He kicked the ball."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to sports equipment",
        "opposite": null,
        "transcription": "bɔl"
    },
    {
        "word": "gift",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "noun",
        "plural": "gifts",
        "subtext": "related to everyday shopping",
        "synonyms": [
            "present"
        ],
        "definitions": [
            {
                "text": "Something that you give to someone, especially on a special occasion.",
                "examples": [
                    "A birthday gift."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "gɪft"
    },
    {
        "word": "street",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "streets",
        "definitions": [
            {
                "text": "A road in a town or city that has houses or other buildings along it.",
                "examples": [
                    "I live on a busy street."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to address location",
        "opposite": null,
        "transcription": "strit"
    },
    {
        "word": "building",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏢",
        "form": "noun",
        "plural": "buildings",
        "definitions": [
            {
                "text": "A structure with a roof and walls, such as a house or school.",
                "examples": [
                    "That building is very tall."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to address location",
        "opposite": null,
        "transcription": "ˈbɪldɪŋ"
    },
    {
        "word": "cafe",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "☕",
        "form": "noun",
        "plural": "cafes",
        "definitions": [
            {
                "text": "A place where you can buy drinks and simple meals.",
                "examples": [
                    "Let's meet at the cafe."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to local places services",
        "opposite": null,
        "transcription": "kəˈfeɪ"
    },
    {
        "word": "centre",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "📍",
        "form": "noun",
        "plural": "centres",
        "subtext": "center, city centre",
        "definitions": [
            {
                "text": "The middle point or part of something.",
                "examples": [
                    "The bank is in the city centre."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈsɛntər"
    },
    {
        "word": "butter",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🧈",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A soft yellow food made from milk.",
                "examples": [
                    "Bread and butter."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈbətər"
    },
    {
        "word": "cheese",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🧀",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A food made from milk, usually white or yellow.",
                "examples": [
                    "I like cheese on my pizza."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ʧiz"
    },
    {
        "word": "actor",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🎭",
        "form": "noun",
        "plural": "actors",
        "definitions": [
            {
                "text": "A person who performs in a play, film, or television program.",
                "examples": [
                    "He is a famous actor."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈæktər"
    },
    {
        "word": "adult",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "🧑",
        "form": "noun",
        "plural": "adults",
        "opposite": "child",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "A person who is fully grown.",
                "examples": [
                    "Tickets are cheaper for children than for adults."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to people",
        "transcription": "ˈædəlt"
    },
    {
        "word": "advice",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "💡",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "An opinion that someone gives you about what you should do.",
                "examples": [
                    "Can you give me some advice?"
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to greetings social phrases",
        "opposite": null,
        "transcription": "ədˈvaɪs"
    },
    {
        "word": "age",
        "level": "starter",
        "theme": "age_A1",
        "emoji": "🎂",
        "form": "noun",
        "plural": "ages",
        "definitions": [
            {
                "text": "The number of years that someone has lived.",
                "examples": [
                    "What is your age?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to age",
        "opposite": null,
        "transcription": "eɪʤ"
    },
    {
        "word": "air",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌬️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The mixture of gases that surrounds the Earth and that we breathe.",
                "examples": [
                    "I need some fresh air."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ɛr"
    },
    {
        "word": "area",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "📍",
        "form": "noun",
        "plural": "areas",
        "definitions": [
            {
                "text": "A particular part of a place, piece of land, or country.",
                "examples": [
                    "Do you live in this area?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to address location",
        "opposite": null,
        "transcription": "ˈɛriə"
    },
    {
        "word": "art",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🎨",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The creation of works such as paintings or sculptures.",
                "examples": [
                    "I love modern art."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "ɑrt"
    },
    {
        "word": "band",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎸",
        "form": "noun",
        "plural": "bands",
        "definitions": [
            {
                "text": "A group of people who play music together.",
                "examples": [
                    "He plays in a rock band."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to music",
        "opposite": null,
        "transcription": "bænd"
    },
    {
        "word": "bath",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🛁",
        "form": "noun",
        "plural": "baths",
        "definitions": [
            {
                "text": "A long container that you fill with water and wash your body in.",
                "examples": [
                    "I'm going to have a hot bath."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "bæθ"
    },
    {
        "word": "birthday",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🎂",
        "form": "noun",
        "plural": "birthdays",
        "definitions": [
            {
                "text": "The day on which someone was born.",
                "examples": [
                    "When is your birthday?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to personal identity",
        "opposite": null,
        "transcription": "ˈbərθˌdeɪ"
    },
    {
        "word": "boat",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "⛵",
        "form": "noun",
        "plural": "boats",
        "definitions": [
            {
                "text": "A vehicle used for traveling on water.",
                "examples": [
                    "We took a boat across the lake."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to modes of transport",
        "opposite": null,
        "transcription": "boʊt"
    },
    {
        "word": "business",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💼",
        "form": "noun",
        "plural": "businesses",
        "definitions": [
            {
                "text": "The activity of making, buying, or selling goods or services for money.",
                "examples": [
                    "He is in the family business."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to workplace basics",
        "opposite": null,
        "transcription": "ˈbɪznɪs"
    },
    {
        "word": "college",
        "level": "starter",
        "theme": "types_of_education_A1",
        "emoji": "🎓",
        "form": "noun",
        "plural": "colleges",
        "definitions": [
            {
                "text": "A place where students study after they leave school.",
                "examples": [
                    "She is at college."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to types of education",
        "opposite": null,
        "transcription": "ˈkɑlɪʤ"
    },
    {
        "word": "company",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏢",
        "form": "noun",
        "plural": "companies",
        "definitions": [
            {
                "text": "An organization that sells goods or services in order to make money.",
                "examples": [
                    "He works for a large insurance company."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to workplace basics",
        "opposite": null,
        "transcription": "ˈkəmpəˌni"
    },
    {
        "word": "concert",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎵",
        "form": "noun",
        "plural": "concerts",
        "definitions": [
            {
                "text": "A performance of music by one or more musicians or singers.",
                "examples": [
                    "Are you going to the concert tonight?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to music",
        "opposite": null,
        "transcription": "ˈkɑnsərt"
    },
    {
        "word": "conversation",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💬",
        "form": "noun",
        "plural": "conversations",
        "definitions": [
            {
                "text": "A talk between two or more people.",
                "examples": [
                    "We had a long conversation about work."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "ˌkɑnvərˈseɪʃən"
    },
    {
        "word": "again",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "One more time.",
                "examples": [
                    "Can you say that again, please?"
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "opposite": null,
        "transcription": "əˈgɛn"
    },
    {
        "word": "ago",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "emoji": "🕰️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Back in time from now.",
                "examples": [
                    "He left ten minutes ago."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "əˈgoʊ"
    },
    {
        "word": "also",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "emoji": "➕",
        "form": "adverb",
        "definitions": [
            {
                "text": "In addition; too.",
                "examples": [
                    "I speak English and also French."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": null,
        "transcription": "ˈɔlsoʊ"
    },
    {
        "word": "really",
        "level": "starter",
        "theme": "basic_intensifiers_A1",
        "emoji": "‼️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Very; truly.",
                "examples": [
                    "The coffee is really hot.",
                    "I really like this song."
                ]
            }
        ],
        "subtext": "related to basic intensifiers",
        "opposite": null,
        "transcription": "ˈrɪli"
    },
    {
        "word": "there",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "emoji": "👉",
        "form": "adverb",
        "definitions": [
            {
                "text": "In, at, or to that place.",
                "examples": [
                    "The book is over there."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "opposite": null,
        "transcription": "ðɛr"
    },
    {
        "word": "pencil",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "✏️",
        "form": "noun",
        "plural": "pencils",
        "definitions": [
            {
                "text": "A long thin object used for writing or drawing.",
                "examples": [
                    "Write your name with a pencil."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ˈpɛnsəl"
    },
    {
        "word": "paper",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📄",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Thin material used for writing, printing, or drawing.",
                "examples": [
                    "I need a piece of paper."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ˈpeɪpər"
    },
    {
        "word": "umbrella",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☂️",
        "form": "noun",
        "plural": "umbrellas",
        "definitions": [
            {
                "text": "A folding frame covered in cloth used to protect you from rain.",
                "examples": [
                    "Take an umbrella — it is raining."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to weather",
        "opposite": null,
        "transcription": "ˈəmˌbrɛlə"
    },
    {
        "word": "glasses",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "👓",
        "form": "noun",
        "plural": "glasses",
        "definitions": [
            {
                "text": "Two pieces of glass in a frame that you wear on your face to help you see.",
                "examples": [
                    "I wear glasses for reading."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "ˈglæsɪz"
    },
    {
        "word": "watch",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "⌚",
        "form": "noun",
        "plural": "watches",
        "definitions": [
            {
                "text": "A small clock that you wear on your wrist.",
                "examples": [
                    "What time is it on your watch?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "wɔʧ"
    },
    {
        "word": "fridge",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🧊",
        "form": "noun",
        "plural": "fridges",
        "subtext": "related to furniture objects",
        "synonyms": [
            "refrigerator"
        ],
        "definitions": [
            {
                "text": "A large piece of electrical equipment used for keeping food and drink cold.",
                "examples": [
                    "The milk is in the fridge."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "frɪʤ"
    },
    {
        "word": "oven",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🔥",
        "form": "noun",
        "plural": "ovens",
        "definitions": [
            {
                "text": "A piece of kitchen equipment used for baking or heating food.",
                "examples": [
                    "The cake is in the oven."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ˈəvən"
    },
    {
        "word": "soap",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🧼",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A substance that you use with water to wash your body.",
                "examples": [
                    "Wash your hands with soap."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "soʊp"
    },
    {
        "word": "towel",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🧖",
        "form": "noun",
        "plural": "towels",
        "definitions": [
            {
                "text": "A piece of cloth used for drying your body or a surface.",
                "examples": [
                    "I need a clean towel for the shower."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "taʊəl"
    },
    {
        "word": "city",
        "level": "starter",
        "theme": "cities_towns_A1",
        "emoji": "🏙️",
        "form": "noun",
        "plural": "cities",
        "definitions": [
            {
                "text": "A large and important town.",
                "examples": [
                    "London is a big city."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to cities towns",
        "opposite": null,
        "transcription": "ˈsɪti"
    },
    {
        "word": "town",
        "level": "starter",
        "theme": "cities_towns_A1",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "towns",
        "definitions": [
            {
                "text": "A place where people live that is larger than a village but smaller than a city.",
                "examples": [
                    "He lives in a small town."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to cities towns",
        "opposite": null,
        "transcription": "taʊn"
    },
    {
        "word": "village",
        "level": "starter",
        "theme": "cities_towns_A1",
        "emoji": "🏡",
        "form": "noun",
        "plural": "villages",
        "definitions": [
            {
                "text": "A very small town in the country.",
                "examples": [
                    "My grandmother lives in a quiet village."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to cities towns",
        "opposite": null,
        "transcription": "ˈvɪlɪʤ"
    },
    {
        "word": "country",
        "level": "starter",
        "theme": "countries_capitals_A1",
        "emoji": "🏳️",
        "form": "noun",
        "plural": "countries",
        "definitions": [
            {
                "text": "An area of land that has its own government and army.",
                "examples": [
                    "France is a beautiful country."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to countries capitals",
        "opposite": null,
        "transcription": "ˈkəntri"
    },
    {
        "word": "jeans",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "plural": "jeans",
        "subtext": "pair of jeans",
        "definitions": [
            {
                "text": "Trousers made of strong blue cotton cloth.",
                "examples": [
                    "I am wearing blue jeans."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʤinz"
    },
    {
        "word": "belt",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "🎗️",
        "form": "noun",
        "plural": "belts",
        "definitions": [
            {
                "text": "A long thin piece of leather or cloth that you wear around your waist.",
                "examples": [
                    "He is wearing a black belt."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "bɛlt"
    },
    {
        "word": "with",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": null,
        "definitions": [
            {
                "text": "In the company of or including.",
                "examples": [
                    "I like coffee with milk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "➕",
        "transcription": "wɪθ"
    },
    {
        "word": "without",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": null,
        "definitions": [
            {
                "text": "Not having or including something.",
                "examples": [
                    "I prefer tea without sugar."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "➖",
        "transcription": "wɪˈθaʊt"
    },
    {
        "word": "to",
        "level": "starter",
        "theme": "prepositions_movement_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show the direction or destination of movement.",
                "examples": [
                    "I go to work by bus."
                ]
            }
        ],
        "subtext": "related to prepositions movement",
        "opposite": null,
        "emoji": "➡️",
        "transcription": "tɪ"
    },
    {
        "word": "from",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show the place where someone or something starts.",
                "examples": [
                    "He is from Spain."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "opposite": null,
        "emoji": "⬅️",
        "transcription": "frəm"
    },
    {
        "word": "for",
        "level": "starter",
        "theme": "prepositions_time_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show purpose or destination.",
                "examples": [
                    "This gift is for you."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "opposite": null,
        "emoji": "🎁",
        "transcription": "fər"
    },
    {
        "word": "or",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to introduce another possibility.",
                "examples": [
                    "Do you want tea or coffee?"
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": "and",
        "emoji": "❓",
        "transcription": "ɔː(r)"
    },
    {
        "word": "so",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to show the result of something.",
                "examples": [
                    "It was raining, so I took an umbrella."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": "because",
        "emoji": "💡",
        "transcription": "səʊ"
    },
    {
        "word": "game",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "noun",
        "plural": "games",
        "definitions": [
            {
                "text": "An activity or sport that people play for fun.",
                "examples": [
                    "Let's play a game."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "geɪm"
    },
    {
        "word": "music",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎵",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The sound of people singing or playing instruments.",
                "examples": [
                    "I like listening to music."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to music",
        "opposite": null,
        "transcription": "mˈjuzɪk"
    },
    {
        "word": "song",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎶",
        "form": "noun",
        "plural": "songs",
        "definitions": [
            {
                "text": "A short piece of music with words that you sing.",
                "examples": [
                    "This is a beautiful song."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to music",
        "opposite": null,
        "transcription": "sɔŋ"
    },
    {
        "word": "sport",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚽",
        "form": "noun",
        "plural": "sports",
        "definitions": [
            {
                "text": "A game or activity such as football or tennis.",
                "examples": [
                    "My favorite sport is tennis."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "spɔrt"
    },
    {
        "word": "football",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚽",
        "form": "noun",
        "plural": null,
        "subtext": "related to common sports",
        "synonyms": [
            "soccer"
        ],
        "definitions": [
            {
                "text": "A game played by two teams of eleven players who kick a ball.",
                "examples": [
                    "They are playing football in the park."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈfʊtˌbɔl"
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🎾",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A game played by two or four players with rackets and a ball.",
                "examples": [
                    "Do you want to play tennis?"
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "ˈtɛnɪs"
    },
    {
        "word": "yesterday",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "opposite": "tomorrow",
        "definitions": [
            {
                "text": "On the day before today.",
                "examples": [
                    "I was at home yesterday."
                ]
            }
        ],
        "subtext": "related to times day",
        "transcription": "ˈjɛstərˌdeɪ"
    },
    {
        "word": "now",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "emoji": "⏱️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At the present time.",
                "examples": [
                    "I am busy now."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "naʊ"
    },
    {
        "word": "soon",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "emoji": "🔜",
        "form": "adverb",
        "definitions": [
            {
                "text": "In a short time from now.",
                "examples": [
                    "See you soon!"
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "sun"
    },
    {
        "word": "later",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "emoji": "🕙",
        "form": "adverb",
        "definitions": [
            {
                "text": "At a time in the future.",
                "examples": [
                    "I will call you later."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "ˈleɪtər"
    },
    {
        "word": "internet",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "🌐",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The international network of computers.",
                "examples": [
                    "I use the internet every day."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to using smartphone",
        "opposite": null,
        "transcription": "ˈɪntərˌnɛt"
    },
    {
        "word": "website",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "💻",
        "form": "noun",
        "plural": "websites",
        "definitions": [
            {
                "text": "A set of pages on the internet with information about a subject.",
                "examples": [
                    "This is a useful website for learning English."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to using smartphone",
        "opposite": null,
        "transcription": "ˈwɛbˌsaɪt"
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📧",
        "form": "noun",
        "plural": "emails",
        "definitions": [
            {
                "text": "A message sent from one computer to another.",
                "examples": [
                    "I have many emails to read."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to using smartphone",
        "opposite": null,
        "transcription": "iˈmeɪl"
    },
    {
        "word": "message",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "💬",
        "form": "noun",
        "plural": "messages",
        "definitions": [
            {
                "text": "A piece of information that you send to someone.",
                "examples": [
                    "I sent her a message on WhatsApp."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to using smartphone",
        "opposite": null,
        "transcription": "ˈmɛsɪʤ"
    },
    {
        "word": "newspaper",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📰",
        "form": "noun",
        "plural": "newspapers",
        "definitions": [
            {
                "text": "Large sheets of paper with news and advertisements.",
                "examples": [
                    "He reads the newspaper every morning."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈnuzˌpeɪpər"
    },
    {
        "word": "magazine",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📖",
        "form": "noun",
        "plural": "magazines",
        "definitions": [
            {
                "text": "A thin book with a paper cover and many pictures.",
                "examples": [
                    "I like reading fashion magazines."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈmægəˌzin"
    },
    {
        "word": "passport",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🛂",
        "form": "noun",
        "plural": "passports",
        "definitions": [
            {
                "text": "An official document you need to travel to other countries.",
                "examples": [
                    "Don't forget your passport."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to travel vocabulary basics",
        "opposite": null,
        "transcription": "ˈpæˌspɔrt"
    },
    {
        "word": "ticket",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎫",
        "form": "noun",
        "plural": "tickets",
        "definitions": [
            {
                "text": "A piece of paper that shows you have paid for a journey.",
                "examples": [
                    "I need a train ticket."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to travel vocabulary basics",
        "opposite": null,
        "transcription": "ˈtɪkɪt"
    },
    {
        "word": "salt",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🧂",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A white substance used to give flavor to food.",
                "examples": [
                    "Can you pass the salt, please?"
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "sɔlt"
    },
    {
        "word": "snack",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥨",
        "form": "noun",
        "plural": "snacks",
        "definitions": [
            {
                "text": "A small amount of food eaten between meals.",
                "examples": [
                    "I like healthy snacks like fruit."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "snæk"
    },
    {
        "word": "pear",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍐",
        "form": "noun",
        "plural": "pears",
        "definitions": [
            {
                "text": "A sweet fruit that is small at the top and round at the bottom.",
                "examples": [
                    "I have a pear for lunch."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "pɛr"
    },
    {
        "word": "cucumber",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥒",
        "form": "noun",
        "plural": "cucumbers",
        "definitions": [
            {
                "text": "A long green vegetable used in salads.",
                "examples": [
                    "I like cucumber and tomato salad."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈkjukəmbər"
    },
    {
        "word": "lettuce",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥬",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A plant with large green leaves eaten in salads.",
                "examples": [
                    "Wash the lettuce before you eat it."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈlɛtəs"
    },
    {
        "word": "wall",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🧱",
        "form": "noun",
        "plural": "walls",
        "definitions": [
            {
                "text": "One of the sides of a room or building.",
                "examples": [
                    "The walls are white."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "wɔl"
    },
    {
        "word": "floor",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🧹",
        "form": "noun",
        "plural": "floors",
        "definitions": [
            {
                "text": "The part of a room that you walk on.",
                "examples": [
                    "Sit on the floor."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "flɔr"
    },
    {
        "word": "stairs",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🪜",
        "form": "noun",
        "plural": "stairs",
        "definitions": [
            {
                "text": "A set of steps that lead from one level of a building to another.",
                "examples": [
                    "Walk up the stairs."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "stɛrz"
    },
    {
        "word": "map",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🗺️",
        "form": "noun",
        "plural": "maps",
        "definitions": [
            {
                "text": "A drawing of a particular area, such as a city or a country.",
                "examples": [
                    "Look at the map."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "mæp"
    },
    {
        "word": "ruler",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📏",
        "form": "noun",
        "plural": "rulers",
        "definitions": [
            {
                "text": "A flat straight piece of wood or plastic used for measuring things.",
                "examples": [
                    "Use a ruler to draw a line."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈrulər"
    },
    {
        "word": "mouse",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐭",
        "form": "noun",
        "plural": "mice",
        "numberPlural": "2 mouse",
        "answer": "two mice",
        "definitions": [
            {
                "text": "A small animal with a long tail.",
                "examples": [
                    "The cat is chasing a mouse."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "maʊs"
    },
    {
        "word": "snake",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐍",
        "form": "noun",
        "plural": "snakes",
        "definitions": [
            {
                "text": "A long thin animal with no legs.",
                "examples": [
                    "I am afraid of snakes."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "sneɪk"
    },
    {
        "word": "monkey",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐒",
        "form": "noun",
        "plural": "monkeys",
        "definitions": [
            {
                "text": "A wild animal that can climb trees and has a long tail.",
                "examples": [
                    "Monkeys like bananas."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "ˈməŋki"
    },
    {
        "word": "spider",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🕷️",
        "form": "noun",
        "plural": "spiders",
        "definitions": [
            {
                "text": "A small creature with eight legs.",
                "examples": [
                    "There is a spider on the wall."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "ˈspaɪdər"
    },
    {
        "word": "bee",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐝",
        "form": "noun",
        "plural": "bees",
        "definitions": [
            {
                "text": "A black and yellow insect that makes honey.",
                "examples": [
                    "A bee is on the flower."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "bi"
    },
    {
        "word": "shower",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🚿",
        "form": "noun",
        "plural": "showers",
        "definitions": [
            {
                "text": "A piece of equipment that you stand under to wash your whole body.",
                "examples": [
                    "I have a shower every morning."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "ʃaʊər"
    },
    {
        "word": "toilet",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🚽",
        "form": "noun",
        "plural": "toilets",
        "definitions": [
            {
                "text": "A large bowl that you sit on to get rid of waste from your body.",
                "examples": [
                    "Where is the toilet, please?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "ˈtɔɪlət"
    },
    {
        "word": "sink",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🚰",
        "form": "noun",
        "plural": "sinks",
        "definitions": [
            {
                "text": "A bowl that is fixed to the wall in a kitchen or bathroom for washing.",
                "examples": [
                    "The dishes are in the sink."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "sɪŋk"
    },
    {
        "word": "sofa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "sofas",
        "subtext": "related to furniture objects",
        "synonyms": [
            "couch"
        ],
        "definitions": [
            {
                "text": "A long soft seat for more than one person.",
                "examples": [
                    "Let's sit on the sofa."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈsoʊfə"
    },
    {
        "word": "shelf",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪜",
        "form": "noun",
        "plural": "shelves",
        "numberPlural": "2 shelf",
        "answer": "two shelves",
        "definitions": [
            {
                "text": "A long flat board on a wall or in a cupboard for keeping things on.",
                "examples": [
                    "The books are on the shelf."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ʃɛlf"
    },
    {
        "word": "toothbrush",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪥",
        "form": "noun",
        "plural": "toothbrushes",
        "definitions": [
            {
                "text": "A small brush used for cleaning your teeth.",
                "examples": [
                    "I need a new toothbrush."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ˈtuθbrəʃ"
    },
    {
        "word": "toothpaste",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🧴",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A substance that you put on your toothbrush to clean your teeth.",
                "examples": [
                    "Put some toothpaste on the brush."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ˈtuθˌpeɪst"
    },
    {
        "word": "shampoo",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🧴",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A liquid soap used for washing your hair.",
                "examples": [
                    "I need to buy some shampoo."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "ʃæmˈpu"
    },
    {
        "word": "history",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "📜",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The study of past events.",
                "examples": [
                    "I like learning about history."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to school subjects",
        "opposite": null,
        "transcription": "ˈhɪstəri"
    },
    {
        "word": "science",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🧪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The study of the natural world based on facts learned through experiments.",
                "examples": [
                    "We have science class on Tuesdays."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to school subjects",
        "opposite": null,
        "transcription": "saɪəns"
    },
    {
        "word": "maths",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🔢",
        "form": "noun",
        "plural": null,
        "subtext": "related to school subjects",
        "synonyms": [
            "mathematics"
        ],
        "definitions": [
            {
                "text": "The study of numbers, shapes, and quantities.",
                "examples": [
                    "Maths is my favorite subject."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "mæθs"
    },
    {
        "word": "geography",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The study of the systems and processes that involve the Earth's surfaces.",
                "examples": [
                    "We use maps in geography class."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to school subjects",
        "opposite": null,
        "transcription": "ʤiˈɑgrəfi"
    },
    {
        "word": "hour",
        "level": "starter",
        "theme": "telling_time_A1",
        "emoji": "⏰",
        "form": "noun",
        "plural": "hours",
        "definitions": [
            {
                "text": "A period of sixty minutes.",
                "examples": [
                    "I work eight hours a day."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to telling time",
        "opposite": null,
        "transcription": "aʊər"
    },
    {
        "word": "minute",
        "level": "starter",
        "theme": "telling_time_A1",
        "emoji": "⏲️",
        "form": "noun",
        "plural": "minutes",
        "definitions": [
            {
                "text": "A period of sixty seconds.",
                "examples": [
                    "Wait a minute, please."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to telling time",
        "opposite": null,
        "transcription": "ˈmɪnət"
    },
    {
        "word": "second",
        "level": "starter",
        "theme": "telling_time_A1",
        "emoji": "⏱️",
        "form": "noun",
        "plural": "seconds",
        "definitions": [
            {
                "text": "One of the sixty parts that a minute is divided into.",
                "examples": [
                    "The light changes every thirty seconds."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to telling time",
        "opposite": null,
        "transcription": "ˈsɛkənd"
    },
    {
        "word": "lesson",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "form": "noun",
        "plural": "lessons",
        "definitions": [
            {
                "text": "A period of time when you learn something with a teacher.",
                "examples": [
                    "I have an English lesson today."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to learning studying",
        "opposite": null,
        "transcription": "ˈlɛsən"
    },
    {
        "word": "homework",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📝",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Work that a teacher gives a student to do at home.",
                "examples": [
                    "I need to do my homework."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to learning studying",
        "opposite": null,
        "transcription": "ˈhoʊmˌwərk"
    },
    {
        "word": "guitar",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎸",
        "form": "noun",
        "plural": "guitars",
        "definitions": [
            {
                "text": "A musical instrument with strings that you play with your fingers.",
                "examples": [
                    "He plays the guitar."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to music",
        "opposite": null,
        "transcription": "gɪˈtɑr"
    },
    {
        "word": "piano",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎹",
        "form": "noun",
        "plural": "pianos",
        "definitions": [
            {
                "text": "A large musical instrument with a row of black and white keys.",
                "examples": [
                    "She is learning to play the piano."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to music",
        "opposite": null,
        "transcription": "piˈænə"
    },
    {
        "word": "forest",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌲",
        "form": "noun",
        "plural": "forests",
        "definitions": [
            {
                "text": "A large area of land covered with trees.",
                "examples": [
                    "We went for a walk in the forest."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈfɔrɪst"
    },
    {
        "word": "island",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🏝️",
        "form": "noun",
        "plural": "islands",
        "definitions": [
            {
                "text": "A piece of land completely surrounded by water.",
                "examples": [
                    "They live on a small island."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈaɪlənd"
    },
    {
        "word": "hill",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "⛰️",
        "form": "noun",
        "plural": "hills",
        "definitions": [
            {
                "text": "An area of land that is higher than the land around it, but smaller than a mountain.",
                "examples": [
                    "The house is on a hill."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "hɪl"
    },
    {
        "word": "duck",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🦆",
        "form": "noun",
        "plural": "ducks",
        "definitions": [
            {
                "text": "A common bird that lives on or near water and has short legs.",
                "examples": [
                    "The duck is swimming in the pond."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "dək"
    },
    {
        "word": "bear",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐻",
        "form": "noun",
        "plural": "bears",
        "definitions": [
            {
                "text": "A large strong wild animal with thick fur.",
                "examples": [
                    "I saw a bear in the forest."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "bɛr"
    },
    {
        "word": "keyboard",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "keyboards",
        "definitions": [
            {
                "text": "A set of keys on a computer or piano.",
                "examples": [
                    "Type your name on the keyboard."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈkiˌbɔrd"
    },
    {
        "word": "screen",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🖥️",
        "form": "noun",
        "plural": "screens",
        "definitions": [
            {
                "text": "The flat part of a television or computer where you see the pictures.",
                "examples": [
                    "Look at the computer screen."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "skrin"
    },
    {
        "word": "dish",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🥣",
        "form": "noun",
        "plural": "dishes",
        "definitions": [
            {
                "text": "A container like a flat plate or a bowl used for serving food.",
                "examples": [
                    "The dish is on the table."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "dɪʃ"
    },
    {
        "word": "year",
        "level": "starter",
        "theme": "dates_years_A1",
        "emoji": "📅",
        "form": "noun",
        "plural": "years",
        "definitions": [
            {
                "text": "A period of twelve months.",
                "examples": [
                    "Happy New Year!"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to dates years",
        "opposite": null,
        "transcription": "jɪr"
    },
    {
        "word": "dad",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "plural": "dads",
        "definitions": [
            {
                "text": "A father.",
                "examples": [
                    "My dad is at home."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "opposite": null,
        "transcription": "dæd"
    },
    {
        "word": "mum",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "plural": "mums",
        "definitions": [
            {
                "text": "A mother.",
                "examples": [
                    "I will ask my mum."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to immediate family",
        "opposite": null,
        "transcription": "məm"
    },
    {
        "word": "garden",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏡",
        "form": "noun",
        "plural": "gardens",
        "definitions": [
            {
                "text": "An area of land next to a house where flowers and plants are grown.",
                "examples": [
                    "The children are playing in the garden."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "ˈgɑrdən"
    },
    {
        "word": "sandwich",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥪",
        "form": "noun",
        "plural": "sandwiches",
        "definitions": [
            {
                "text": "Two pieces of bread with food such as cheese or meat between them.",
                "examples": [
                    "I have a cheese sandwich for lunch."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈsænwɪʧ"
    },
    {
        "word": "trip",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "form": "noun",
        "plural": "trips",
        "definitions": [
            {
                "text": "A journey to a place and back again.",
                "examples": [
                    "How was your trip to London?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to travel vocabulary basics",
        "opposite": null,
        "transcription": "trɪp"
    },
    {
        "word": "zoo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🦁",
        "form": "noun",
        "plural": "zoos",
        "definitions": [
            {
                "text": "A place where many kinds of wild animals are kept so that people can look at them.",
                "examples": [
                    "Let's go to the zoo."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "zu"
    },
    {
        "word": "dictionary",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📖",
        "form": "noun",
        "plural": "dictionaries",
        "definitions": [
            {
                "text": "A book that contains a list of words in alphabetical order and explains their meanings.",
                "examples": [
                    "Look it up in the dictionary."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈdɪkʃəˌnɛri"
    },
    {
        "word": "something",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "📦",
        "form": "pronoun",
        "definitions": [
            {
                "text": "An object, event, or situation that is not named.",
                "examples": [
                    "I want to tell you something."
                ]
            }
        ],
        "subtext": "related to describing things",
        "opposite": null,
        "transcription": "ˈsəmθɪŋ"
    },
    {
        "word": "someone",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "A person who is not named.",
                "examples": [
                    "Someone is at the door."
                ]
            }
        ],
        "subtext": "related to people",
        "opposite": null,
        "transcription": "ˈsəmˌwən"
    },
    {
        "word": "everyone",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Every person.",
                "examples": [
                    "Hello everyone!"
                ]
            }
        ],
        "subtext": "related to people",
        "opposite": null,
        "transcription": "ˈɛvriˌwən"
    },
    {
        "word": "already",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "emoji": "⏳",
        "form": "adverb",
        "definitions": [
            {
                "text": "Before now or before a particular time.",
                "examples": [
                    "I have already finished my work."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "ɔˈrɛdi"
    },
    {
        "word": "still",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "Continuing to happen or exist until now.",
                "examples": [
                    "I am still at the office."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "stɪl"
    },
    {
        "word": "yet",
        "level": "starter",
        "theme": "duration_expressions_A1",
        "emoji": "❓",
        "form": "adverb",
        "definitions": [
            {
                "text": "Until now (used in questions and negative sentences).",
                "examples": [
                    "Is it time yet?"
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "jɛt"
    },
    {
        "word": "up",
        "level": "starter",
        "theme": "prepositions_movement_A1",
        "emoji": "⬆️",
        "form": "preposition",
        "opposite": "down",
        "definitions": [
            {
                "text": "Towards a higher place or position.",
                "examples": [
                    "Go up the stairs."
                ]
            }
        ],
        "subtext": "related to prepositions movement",
        "transcription": "əp"
    },
    {
        "word": "down",
        "level": "starter",
        "theme": "prepositions_movement_A1",
        "emoji": "⬇️",
        "form": "preposition",
        "opposite": "up",
        "definitions": [
            {
                "text": "Towards a lower place or position.",
                "examples": [
                    "Sit down, please."
                ]
            }
        ],
        "subtext": "related to prepositions movement",
        "transcription": "daʊn"
    },
    {
        "word": "oil",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🧴",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A smooth thick liquid used in cooking.",
                "examples": [
                    "Cook the vegetables in a little oil."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ɔɪl"
    },
    {
        "word": "pepper",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🌶️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A black or white powder with a strong hot taste used in cooking.",
                "examples": [
                    "Add some salt and pepper."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈpɛpər"
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚕",
        "form": "noun",
        "plural": "taxis",
        "definitions": [
            {
                "text": "A car with a driver that you pay to take you somewhere.",
                "examples": [
                    "Let's take a taxi."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to modes of transport",
        "opposite": null,
        "transcription": "ˈtæksi"
    },
    {
        "word": "bridge",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌉",
        "form": "noun",
        "plural": "bridges",
        "definitions": [
            {
                "text": "A structure that is built over a river or road so that people or vehicles can cross it.",
                "examples": [
                    "There is a bridge over the river."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "brɪʤ"
    },
    {
        "word": "heart",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "❤️",
        "form": "noun",
        "plural": "hearts",
        "definitions": [
            {
                "text": "The organ in your chest that sends blood around your body.",
                "examples": [
                    "My heart is beating fast."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to body parts",
        "opposite": null,
        "transcription": "hɑrt"
    },
    {
        "word": "theatre",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🎭",
        "form": "noun",
        "plural": "theatres",
        "subtext": "related to places culture leisure",
        "synonyms": [
            "theater"
        ],
        "definitions": [
            {
                "text": "A building with a stage where people go to watch plays.",
                "examples": [
                    "We are going to the theatre tonight."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈθiətər"
    },
    {
        "word": "tonight",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "adverb",
        "definitions": [
            {
                "text": "On this night.",
                "examples": [
                    "What are you doing tonight?"
                ]
            }
        ],
        "subtext": "related to times day",
        "opposite": null,
        "transcription": "təˈnaɪt"
    },
    {
        "word": "world",
        "level": "starter",
        "theme": "countries_capitals_A1",
        "emoji": "🌎",
        "form": "noun",
        "plural": "worlds",
        "definitions": [
            {
                "text": "The Earth and all the people, places, and things on it.",
                "examples": [
                    "Travel around the world."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to countries capitals",
        "opposite": null,
        "transcription": "wərld"
    },
    {
        "word": "life",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🌱",
        "form": "noun",
        "plural": "lives",
        "definitions": [
            {
                "text": "The period between birth and death.",
                "examples": [
                    "She has a busy life."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to personal identity",
        "opposite": null,
        "transcription": "laɪf"
    },
    {
        "word": "way",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "ways",
        "definitions": [
            {
                "text": "A route or road; a method of doing something.",
                "examples": [
                    "Which is the way to the station?",
                    "This is a good way to learn."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to directions navigation",
        "opposite": null,
        "transcription": "weɪ"
    },
    {
        "word": "thing",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "📦",
        "form": "noun",
        "plural": "things",
        "definitions": [
            {
                "text": "An object that is not alive.",
                "examples": [
                    "What is that thing?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to describing things",
        "opposite": null,
        "transcription": "θɪŋ"
    },
    {
        "word": "place",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "📍",
        "form": "noun",
        "plural": "places",
        "definitions": [
            {
                "text": "A particular area or position.",
                "examples": [
                    "This is a nice place."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to local places services",
        "opposite": null,
        "transcription": "pleɪs"
    },
    {
        "word": "word",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📝",
        "form": "noun",
        "plural": "words",
        "definitions": [
            {
                "text": "A single unit of language.",
                "examples": [
                    "What does this word mean?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "wərd"
    },
    {
        "word": "number",
        "level": "starter",
        "theme": "numbers_0_9_A1",
        "emoji": "🔢",
        "form": "noun",
        "plural": "numbers",
        "definitions": [
            {
                "text": "A unit of a mathematical system used for counting.",
                "examples": [
                    "What is your phone number?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to numbers 0 9",
        "opposite": null,
        "transcription": "ˈnəmbər"
    },
    {
        "word": "body",
        "level": "starter",
        "theme": "health_body_A1",
        "emoji": "👤",
        "form": "noun",
        "plural": "bodies",
        "definitions": [
            {
                "text": "The whole physical form of a person or animal.",
                "examples": [
                    "Exercise is good for your body."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to health body",
        "opposite": null,
        "transcription": "ˈbɑdi"
    },
    {
        "word": "north",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "⬆️",
        "form": "noun",
        "opposite": "south",
        "definitions": [
            {
                "text": "The direction that is on your left when you face the sunrise.",
                "examples": [
                    "The city is in the north."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to directions navigation",
        "transcription": "nɔrθ"
    },
    {
        "word": "south",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "⬇️",
        "form": "noun",
        "opposite": "north",
        "definitions": [
            {
                "text": "The direction that is on your right when you face the sunrise.",
                "examples": [
                    "We are driving south."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to directions navigation",
        "transcription": "saʊθ"
    },
    {
        "word": "east",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "➡️",
        "form": "noun",
        "opposite": "west",
        "definitions": [
            {
                "text": "The direction where the sun rises.",
                "examples": [
                    "The sun rises in the east."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to directions navigation",
        "transcription": "ist"
    },
    {
        "word": "west",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "⬅️",
        "form": "noun",
        "opposite": "east",
        "definitions": [
            {
                "text": "The direction where the sun sets.",
                "examples": [
                    "The sun sets in the west."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to directions navigation",
        "transcription": "wɛst"
    },
    {
        "word": "board",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "📋",
        "form": "noun",
        "plural": "boards",
        "definitions": [
            {
                "text": "A flat surface at the front of a classroom that a teacher writes on.",
                "examples": [
                    "Look at the board.",
                    "The teacher writes the date on the board."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "bɔrd"
    },
    {
        "word": "eraser",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🧽",
        "form": "noun",
        "plural": "erasers",
        "subtext": "related to school stationery",
        "synonyms": [
            "rubber"
        ],
        "definitions": [
            {
                "text": "A small piece of rubber or plastic used to remove pencil marks.",
                "examples": [
                    "Can I borrow your eraser?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ɪˈreɪsər"
    },
    {
        "word": "pencil case",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "✏️",
        "form": "noun",
        "plural": "pencil cases",
        "definitions": [
            {
                "text": "A small bag or box for keeping pencils and pens.",
                "examples": [
                    "My pens are in my pencil case."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈpɛnsəl keɪs"
    },
    {
        "word": "notebook",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "📓",
        "form": "noun",
        "plural": "notebooks",
        "definitions": [
            {
                "text": "A book with empty pages that you write in.",
                "examples": [
                    "I write my lessons in a notebook."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈnoʊtˌbʊk"
    },
    {
        "word": "textbook",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "📖",
        "form": "noun",
        "plural": "textbooks",
        "definitions": [
            {
                "text": "A book that contains information about a subject that people study.",
                "examples": [
                    "Open your English textbooks to page ten."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈtɛkstˌbʊk"
    },
    {
        "word": "backpack",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🎒",
        "form": "noun",
        "plural": "backpacks",
        "definitions": [
            {
                "text": "A bag that you carry on your back.",
                "examples": [
                    "I put my books in my backpack."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈbækˌpæk"
    },
    {
        "word": "armchair",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "armchairs",
        "definitions": [
            {
                "text": "A large comfortable chair with parts for you to rest your arms on.",
                "examples": [
                    "My grandfather is sitting in his armchair."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "ˈɑrmˌʧɛr"
    },
    {
        "word": "bookcase",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "📚",
        "form": "noun",
        "plural": "bookcases",
        "definitions": [
            {
                "text": "A piece of furniture with shelves for keeping books.",
                "examples": [
                    "Put the book back on the bookcase."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "ˈbʊkˌkeɪs"
    },
    {
        "word": "cupboard",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🚪",
        "form": "noun",
        "plural": "cupboards",
        "definitions": [
            {
                "text": "A piece of furniture with doors and shelves used for storing things.",
                "examples": [
                    "The cups are in the cupboard."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "ˈkəbərd"
    },
    {
        "word": "rug",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🧶",
        "form": "noun",
        "plural": "rugs",
        "definitions": [
            {
                "text": "A piece of thick cloth that covers part of a floor.",
                "examples": [
                    "There is a small rug in the bedroom."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "rəg"
    },
    {
        "word": "drawer",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🗄️",
        "form": "noun",
        "plural": "drawers",
        "definitions": [
            {
                "text": "A part of a piece of furniture that slides out and is used for keeping things in.",
                "examples": [
                    "My socks are in the top drawer."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "drɔr"
    },
    {
        "word": "toy",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🧸",
        "form": "noun",
        "plural": "toys",
        "definitions": [
            {
                "text": "An object for children to play with.",
                "examples": [
                    "The child is playing with a toy car."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "tɔɪ"
    },
    {
        "word": "doll",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🪆",
        "form": "noun",
        "plural": "dolls",
        "definitions": [
            {
                "text": "A toy that looks like a small person or baby.",
                "examples": [
                    "She likes playing with her dolls."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "dɑl"
    },
    {
        "word": "robot",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🤖",
        "form": "noun",
        "plural": "robots",
        "definitions": [
            {
                "text": "A machine that can do work by itself.",
                "examples": [
                    "I have a toy robot."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "ˈroʊˌbət"
    },
    {
        "word": "monster",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "👹",
        "form": "noun",
        "plural": "monsters",
        "definitions": [
            {
                "text": "A large, scary, imaginary creature.",
                "examples": [
                    "The story is about a friendly monster."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "ˈmɑnstər"
    },
    {
        "word": "alien",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "👽",
        "form": "noun",
        "plural": "aliens",
        "definitions": [
            {
                "text": "A creature from another planet.",
                "examples": [
                    "Do you believe in aliens?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "ˈeɪliən"
    },
    {
        "word": "kite",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🪁",
        "form": "noun",
        "plural": "kites",
        "definitions": [
            {
                "text": "A toy made of paper or cloth that flies in the wind on a long string.",
                "examples": [
                    "Let's fly a kite in the park."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "kaɪt"
    },
    {
        "word": "balloon",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🎈",
        "form": "noun",
        "plural": "balloons",
        "definitions": [
            {
                "text": "A small colored rubber bag filled with air.",
                "examples": [
                    "We have many balloons for the party."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "bəˈlun"
    },
    {
        "word": "hobby",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🎨",
        "form": "noun",
        "plural": "hobbies",
        "definitions": [
            {
                "text": "An activity that you do for fun in your free time.",
                "examples": [
                    "My hobby is reading."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to hobbies interests",
        "opposite": null,
        "transcription": "ˈhɑbi"
    },
    {
        "word": "pet",
        "level": "starter",
        "theme": "pets_A1",
        "emoji": "🐾",
        "form": "noun",
        "plural": "pets",
        "definitions": [
            {
                "text": "An animal that you keep at home.",
                "examples": [
                    "Do you have any pets?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to pets",
        "opposite": null,
        "transcription": "pɛt"
    },
    {
        "word": "hamster",
        "level": "starter",
        "theme": "pets_A1",
        "emoji": "🐹",
        "form": "noun",
        "plural": "hamsters",
        "definitions": [
            {
                "text": "A small animal with soft fur and no tail.",
                "examples": [
                    "I have a pet hamster."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to pets",
        "opposite": null,
        "transcription": "ˈhæmstər"
    },
    {
        "word": "lizard",
        "level": "starter",
        "theme": "pets_A1",
        "emoji": "🦎",
        "form": "noun",
        "plural": "lizards",
        "definitions": [
            {
                "text": "A small reptile with a long body and tail.",
                "examples": [
                    "I saw a lizard on the wall."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to pets",
        "opposite": null,
        "transcription": "ˈlɪzərd"
    },
    {
        "word": "turtle",
        "level": "starter",
        "theme": "pets_A1",
        "emoji": "🐢",
        "form": "noun",
        "plural": "turtles",
        "definitions": [
            {
                "text": "A slow-moving animal with a hard shell.",
                "examples": [
                    "The turtle is swimming in the pond."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to pets",
        "opposite": null,
        "transcription": "ˈtərtəl"
    },
    {
        "word": "playground",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🛝",
        "form": "noun",
        "plural": "playgrounds",
        "definitions": [
            {
                "text": "An outside area where children can play.",
                "examples": [
                    "The children are at the playground."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "ˈpleɪˌgraʊnd"
    },
    {
        "word": "story",
        "level": "starter",
        "theme": "books_reading_A1",
        "emoji": "📖",
        "form": "noun",
        "plural": "stories",
        "definitions": [
            {
                "text": "A description of events that can be true or imaginary.",
                "examples": [
                    "Tell me a story.",
                    "I like stories about animals."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to books reading",
        "opposite": null,
        "transcription": "ˈstɔri"
    },
    {
        "word": "painting",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🖼️",
        "form": "noun",
        "plural": "paintings",
        "definitions": [
            {
                "text": "A picture made with paint.",
                "examples": [
                    "There is a beautiful painting on the wall."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "ˈpeɪnɪŋ"
    },
    {
        "word": "poster",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📜",
        "form": "noun",
        "plural": "posters",
        "definitions": [
            {
                "text": "A large printed picture or notice that you put on a wall.",
                "examples": [
                    "There is a map poster in the classroom."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈpoʊstər"
    },
    {
        "word": "sentence",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📝",
        "form": "noun",
        "plural": "sentences",
        "definitions": [
            {
                "text": "A group of words that expresses a complete thought.",
                "examples": [
                    "Write a sentence about your family."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈsɛntəns"
    },
    {
        "word": "question",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "form": "noun",
        "plural": "questions",
        "definitions": [
            {
                "text": "A sentence that asks for information.",
                "examples": [
                    "I have a question.",
                    "Can you answer my question?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "kˈwɛʃən"
    },
    {
        "word": "answer",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "✅",
        "form": "noun",
        "plural": "answers",
        "definitions": [
            {
                "text": "Something that you say or write when someone asks you a question.",
                "examples": [
                    "That is the correct answer."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to asking answering questions",
        "opposite": "ask",
        "transcription": "ˈænsər"
    },
    {
        "word": "page",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📄",
        "form": "noun",
        "plural": "pages",
        "definitions": [
            {
                "text": "One side of a sheet of paper in a book or magazine.",
                "examples": [
                    "The answer is on page five."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "peɪʤ"
    },
    {
        "word": "basketball",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏀",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A game where two teams try to throw a ball through a high net.",
                "examples": [
                    "He plays basketball every Wednesday."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "ˈbæskətˌbɔl"
    },
    {
        "word": "baseball",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚾",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A game played with a bat and ball by two teams of nine players.",
                "examples": [
                    "Baseball is popular in the USA."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "ˈbeɪsˈbɔl"
    },
    {
        "word": "bat",
        "level": "starter",
        "theme": "sports_equipment_A1",
        "emoji": "🏏",
        "form": "noun",
        "plural": "bats",
        "definitions": [
            {
                "text": "A specially shaped piece of wood used for hitting the ball in games like baseball or cricket.",
                "examples": [
                    "He is holding a baseball bat."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to sports equipment",
        "opposite": null,
        "transcription": "bæt"
    },
    {
        "word": "scooter",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🛴",
        "form": "noun",
        "plural": "scooters",
        "definitions": [
            {
                "text": "A small vehicle with two wheels and a long handle.",
                "examples": [
                    "The boy is riding his scooter."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to modes of transport",
        "opposite": null,
        "transcription": "ˈskutər"
    },
    {
        "word": "motorbike",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🏍️",
        "form": "noun",
        "plural": "motorbikes",
        "definitions": [
            {
                "text": "A vehicle with two wheels and an engine.",
                "examples": [
                    "He goes to work on his motorbike."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to modes of transport",
        "opposite": null,
        "transcription": "ˈmoʊtərˌbaɪk"
    },
    {
        "word": "truck",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚚",
        "form": "noun",
        "plural": "trucks",
        "subtext": "related to modes of transport",
        "synonyms": [
            "lorry"
        ],
        "definitions": [
            {
                "text": "A large, heavy vehicle with wheels used for carrying goods.",
                "examples": [
                    "The truck is carrying food to the supermarket."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "trək"
    },
    {
        "word": "farmer",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🌾",
        "form": "noun",
        "plural": "farmers",
        "definitions": [
            {
                "text": "A person who owns or manages a farm.",
                "examples": [
                    "The farmer is milking the cows."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈfɑrmər"
    },
    {
        "word": "pilot",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "pilots",
        "definitions": [
            {
                "text": "A person who flies an aircraft.",
                "examples": [
                    "The pilot is in the cockpit."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈpaɪlət"
    },
    {
        "word": "waiter",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🤵",
        "form": "noun",
        "plural": "waiters",
        "definitions": [
            {
                "text": "A man whose job is to bring food and drinks to people at their tables in a restaurant.",
                "examples": [
                    "The waiter is bringing our coffee."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈweɪtər"
    },
    {
        "word": "waitress",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👩‍🍳",
        "form": "noun",
        "plural": "waitresses",
        "definitions": [
            {
                "text": "A woman whose job is to bring food and drinks to people at their tables in a restaurant.",
                "examples": [
                    "The waitress is very friendly."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈweɪtrəs"
    },
    {
        "word": "dentist",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "dentists",
        "definitions": [
            {
                "text": "A person whose job is to take care of people's teeth.",
                "examples": [
                    "I have an appointment with the dentist."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈdɛntɪst"
    },
    {
        "word": "police officer",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👮",
        "form": "noun",
        "plural": "police officers",
        "definitions": [
            {
                "text": "A member of the police force.",
                "examples": [
                    "The police officer is directing traffic."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "pəˈlis ˈɔfɪsər"
    },
    {
        "word": "firefighter",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👩‍🚒",
        "form": "noun",
        "plural": "firefighters",
        "definitions": [
            {
                "text": "A person whose job is to put out fires and rescue people.",
                "examples": [
                    "Firefighters wear heavy coats."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈfaɪrˌfaɪtər"
    },
    {
        "word": "soldier",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🪖",
        "form": "noun",
        "plural": "soldiers",
        "definitions": [
            {
                "text": "A person who serves in an army.",
                "examples": [
                    "The soldier is in uniform."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "ˈsoʊlʤər"
    },
    {
        "word": "bowl",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "emoji": "🥣",
        "form": "noun",
        "plural": "bowls",
        "definitions": [
            {
                "text": "A round container that is open at the top and used for holding food or liquid.",
                "examples": [
                    "I eat soup from a bowl."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to kitchen items",
        "opposite": null,
        "transcription": "boʊl"
    },
    {
        "word": "kettle",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "emoji": "🫖",
        "form": "noun",
        "plural": "kettles",
        "definitions": [
            {
                "text": "A container with a lid, handle, and spout, used for boiling water.",
                "examples": [
                    "The kettle is boiling."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to kitchen items",
        "opposite": null,
        "transcription": "ˈkɛtəl"
    },
    {
        "word": "pan",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "emoji": "🍳",
        "form": "noun",
        "plural": "pans",
        "definitions": [
            {
                "text": "A metal container used for cooking food in.",
                "examples": [
                    "Put the pan on the stove."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to kitchen items",
        "opposite": null,
        "transcription": "pæn"
    },
    {
        "word": "pot",
        "level": "starter",
        "theme": "kitchen_items_A1",
        "emoji": "🍲",
        "form": "noun",
        "plural": "pots",
        "definitions": [
            {
                "text": "A deep round container used for cooking things in.",
                "examples": [
                    "The pot is full of soup."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to kitchen items",
        "opposite": null,
        "transcription": "pɑt"
    },
    {
        "word": "crocodile",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐊",
        "form": "noun",
        "plural": "crocodiles",
        "definitions": [
            {
                "text": "A large reptile with short legs, a long tail, and very powerful jaws.",
                "examples": [
                    "Crocodiles live in rivers."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to animals",
        "opposite": null,
        "transcription": "ˈkrɑkəˌdaɪl"
    },
    {
        "word": "shark",
        "level": "starter",
        "theme": "sea_animals_A1",
        "emoji": "🦈",
        "form": "noun",
        "plural": "sharks",
        "definitions": [
            {
                "text": "A large fish that has sharp teeth and a pointed fin on its back.",
                "examples": [
                    "The shark is swimming in the ocean."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to sea animals",
        "opposite": null,
        "transcription": "ʃɑrk"
    },
    {
        "word": "whale",
        "level": "starter",
        "theme": "sea_animals_A1",
        "emoji": "🐋",
        "form": "noun",
        "plural": "whales",
        "definitions": [
            {
                "text": "A very large animal that looks like a large fish and lives in the sea.",
                "examples": [
                    "We saw a whale from the boat."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to sea animals",
        "opposite": null,
        "transcription": "weɪl"
    },
    {
        "word": "dolphin",
        "level": "starter",
        "theme": "sea_animals_A1",
        "emoji": "🐬",
        "form": "noun",
        "plural": "dolphins",
        "definitions": [
            {
                "text": "A very intelligent sea animal that looks like a large fish with a pointed mouth.",
                "examples": [
                    "Dolphins like to jump out of the water."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to sea animals",
        "opposite": null,
        "transcription": "ˈdɑlfən"
    },
    {
        "word": "octopus",
        "level": "starter",
        "theme": "sea_animals_A1",
        "emoji": "🐙",
        "form": "noun",
        "plural": "octopuses",
        "definitions": [
            {
                "text": "A sea animal with a soft body and eight long arms.",
                "examples": [
                    "The octopus has eight arms."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to sea animals",
        "opposite": null,
        "transcription": "ˈɑktəˌpʊs"
    },
    {
        "word": "butterfly",
        "level": "starter",
        "theme": "insects_A1",
        "emoji": "🦋",
        "form": "noun",
        "plural": "butterflies",
        "definitions": [
            {
                "text": "An insect with four large, usually brightly colored wings.",
                "examples": [
                    "Look at that beautiful butterfly."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to insects",
        "opposite": null,
        "transcription": "ˈbətərˌflaɪ"
    },
    {
        "word": "ant",
        "level": "starter",
        "theme": "insects_A1",
        "emoji": "🐜",
        "form": "noun",
        "plural": "ants",
        "definitions": [
            {
                "text": "A small insect that lives in large groups.",
                "examples": [
                    "There are ants in the garden."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to insects",
        "opposite": null,
        "transcription": "ænt"
    },
    {
        "word": "ocean",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌊",
        "form": "noun",
        "plural": "oceans",
        "definitions": [
            {
                "text": "The very large area of salty water that covers most of the Earth's surface.",
                "examples": [
                    "The Atlantic Ocean is big."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈoʊʃən"
    },
    {
        "word": "desert",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🏜️",
        "form": "noun",
        "plural": "deserts",
        "definitions": [
            {
                "text": "A large area of land that has very little water and very few plants growing on it.",
                "examples": [
                    "It is very hot in the desert."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈdɛzərt"
    },
    {
        "word": "jungle",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌴",
        "form": "noun",
        "plural": "jungles",
        "definitions": [
            {
                "text": "A thick tropical forest with many trees and plants.",
                "examples": [
                    "Monkeys live in the jungle."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈʤəŋgəl"
    },
    {
        "word": "earth",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌍",
        "form": "noun",
        "definitions": [
            {
                "text": "The planet on which we live.",
                "examples": [
                    "The Earth moves around the sun."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ərθ"
    },
    {
        "word": "planet",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🪐",
        "form": "noun",
        "plural": "planets",
        "definitions": [
            {
                "text": "A very large round object in space that moves around the sun or another star.",
                "examples": [
                    "Mars is a red planet."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈplænət"
    },
    {
        "word": "violin",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "emoji": "🎻",
        "form": "noun",
        "plural": "violins",
        "definitions": [
            {
                "text": "A musical instrument with four strings that you hold under your chin and play with a bow.",
                "examples": [
                    "He plays the violin."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to musical instruments",
        "opposite": null,
        "transcription": "vaɪəˈlɪn"
    },
    {
        "word": "drums",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "emoji": "🥁",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A set of musical instruments that you hit with sticks.",
                "examples": [
                    "She plays the drums in a band."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to musical instruments",
        "opposite": null,
        "transcription": "drəmz"
    },
    {
        "word": "flute",
        "level": "starter",
        "theme": "musical_instruments_A1",
        "emoji": "🪈",
        "form": "noun",
        "plural": "flutes",
        "definitions": [
            {
                "text": "A musical instrument in the shape of a pipe with holes that you blow across.",
                "examples": [
                    "She is playing the flute."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to musical instruments",
        "opposite": null,
        "transcription": "flut"
    },
    {
        "word": "tie",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👔",
        "form": "noun",
        "plural": "ties",
        "definitions": [
            {
                "text": "A long, thin piece of cloth that a man wears around his neck with a shirt.",
                "examples": [
                    "He wears a tie to work."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "taɪ"
    },
    {
        "word": "ring",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "💍",
        "form": "noun",
        "plural": "rings",
        "definitions": [
            {
                "text": "A small circular piece of jewelry that you wear on your finger.",
                "examples": [
                    "She has a gold ring."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "rɪŋ"
    },
    {
        "word": "necklace",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "📿",
        "form": "noun",
        "plural": "necklaces",
        "definitions": [
            {
                "text": "A piece of jewelry that you wear around your neck.",
                "examples": [
                    "She is wearing a beautiful necklace."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to accessories",
        "opposite": null,
        "transcription": "ˈnɛkləs"
    },
    {
        "word": "roof",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏠",
        "form": "noun",
        "plural": "roofs",
        "definitions": [
            {
                "text": "The structure that covers or forms the top of a building.",
                "examples": [
                    "The cat is on the roof."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "rʊf"
    },
    {
        "word": "fence",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🚧",
        "form": "noun",
        "plural": "fences",
        "definitions": [
            {
                "text": "A structure made of wood or metal that surrounds a piece of land.",
                "examples": [
                    "There is a white fence around the garden."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "fɛns"
    },
    {
        "word": "gate",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🚪",
        "form": "noun",
        "plural": "gates",
        "definitions": [
            {
                "text": "A part of a fence or outside wall that opens and closes like a door.",
                "examples": [
                    "Please close the gate."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "geɪt"
    },
    {
        "word": "cookie",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍪",
        "form": "noun",
        "plural": "cookies",
        "subtext": "related to basic foods",
        "synonyms": [
            "biscuit"
        ],
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "I want a chocolate cookie."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈkʊki"
    },
    {
        "word": "biscuit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍪",
        "form": "noun",
        "plural": "biscuits",
        "subtext": "related to basic foods",
        "synonyms": [
            "cookie"
        ],
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "Would you like a biscuit with your tea?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈbɪskət"
    },
    {
        "word": "yogurt",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥛",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A thick liquid food made from milk.",
                "examples": [
                    "I eat yogurt for breakfast."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈjoʊgərt"
    },
    {
        "word": "ham",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from the leg of a pig.",
                "examples": [
                    "A ham sandwich."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "hæm"
    },
    {
        "word": "bacon",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥓",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Meat from a pig that is cut into long thin slices.",
                "examples": [
                    "I love eggs and bacon."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈbeɪkən"
    },
    {
        "word": "sausage",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🌭",
        "form": "noun",
        "plural": "sausages",
        "definitions": [
            {
                "text": "A mixture of meat and spices in a long thin skin.",
                "examples": [
                    "We had sausages for breakfast."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈsɔsɪʤ"
    },
    {
        "word": "honey",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍯",
        "form": "noun",
        "definitions": [
            {
                "text": "A sweet, sticky yellow substance made by bees.",
                "examples": [
                    "I like honey on my toast."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ˈhəni"
    },
    {
        "word": "jam",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍓",
        "form": "noun",
        "definitions": [
            {
                "text": "A sweet food made from fruit and sugar.",
                "examples": [
                    "Strawberry jam is delicious."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to basic foods",
        "opposite": null,
        "transcription": "ʤæm"
    },
    {
        "word": "pineapple",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🍍",
        "form": "noun",
        "plural": "pineapples",
        "definitions": [
            {
                "text": "A large tropical fruit with a tough skin and yellow flesh.",
                "examples": [
                    "We bought a fresh pineapple."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to fruits vegetables",
        "opposite": null,
        "transcription": "ˈpaɪˌnæpəl"
    },
    {
        "word": "watermelon",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🍉",
        "form": "noun",
        "plural": "watermelons",
        "definitions": [
            {
                "text": "A large round fruit with green skin and red flesh.",
                "examples": [
                    "Watermelon is refreshing in summer."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to fruits vegetables",
        "opposite": null,
        "transcription": "ˈwɔtərˌmɛlən"
    },
    {
        "word": "mushroom",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🍄",
        "form": "noun",
        "plural": "mushrooms",
        "definitions": [
            {
                "text": "A type of fungus with a stem and a cap.",
                "examples": [
                    "I don't like mushrooms on my pizza."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to fruits vegetables",
        "opposite": null,
        "transcription": "ˈməʃrum"
    },
    {
        "word": "broccoli",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🥦",
        "form": "noun",
        "definitions": [
            {
                "text": "A green vegetable with thick stems and small green flowers.",
                "examples": [
                    "Eat your broccoli, it's good for you."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to fruits vegetables",
        "opposite": null,
        "transcription": "ˈbrɑkəli"
    },
    {
        "word": "peas",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🫛",
        "form": "noun",
        "plural": "peas",
        "definitions": [
            {
                "text": "Small round green seeds eaten as a vegetable.",
                "examples": [
                    "We had fish and peas for dinner."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to fruits vegetables",
        "opposite": null,
        "transcription": "piz"
    },
    {
        "word": "envelope",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "✉️",
        "form": "noun",
        "plural": "envelopes",
        "definitions": [
            {
                "text": "A flat paper container used for sending letters.",
                "examples": [
                    "Put the letter in the envelope."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈɛnvəˌloʊp"
    },
    {
        "word": "stamp",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🧧",
        "form": "noun",
        "plural": "stamps",
        "definitions": [
            {
                "text": "A small piece of paper that you buy and stick onto an envelope.",
                "examples": [
                    "I need a stamp for this letter."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "stæmp"
    },
    {
        "word": "stapler",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🖇️",
        "form": "noun",
        "plural": "staplers",
        "definitions": [
            {
                "text": "A small device used for joining together sheets of paper with a small piece of metal.",
                "examples": [
                    "I need a stapler for these reports."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈsteɪpələr"
    },
    {
        "word": "glue",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🧪",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "A sticky substance used for joining things together.",
                "examples": [
                    "Use some glue to fix the picture."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "glu"
    },
    {
        "word": "scissors",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "✂️",
        "form": "noun",
        "plural": "scissors",
        "definitions": [
            {
                "text": "A tool used for cutting paper, cloth, etc.",
                "examples": [
                    "Where are the scissors? I need to cut this paper."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈsɪzərz"
    },
    {
        "word": "calculator",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🔢",
        "form": "noun",
        "plural": "calculators",
        "definitions": [
            {
                "text": "A small electronic device used for adding, subtracting, etc.",
                "examples": [
                    "I use a calculator for my maths homework."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈkælkjəˌleɪtər"
    },
    {
        "word": "washing machine",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🧺",
        "form": "noun",
        "plural": "washing machines",
        "definitions": [
            {
                "text": "A machine for washing clothes.",
                "examples": [
                    "Put your dirty shirts in the washing machine."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "ˈwɑʃɪŋ məˈʃin"
    },
    {
        "word": "toaster",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🍞",
        "form": "noun",
        "plural": "toasters",
        "definitions": [
            {
                "text": "A piece of electrical equipment used for making toast.",
                "examples": [
                    "Put the bread in the toaster."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "ˈtoʊstər"
    },
    {
        "word": "remote control",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🎮",
        "form": "noun",
        "plural": "remote controls",
        "definitions": [
            {
                "text": "A small device that you use to control a television from a distance.",
                "examples": [
                    "Where is the remote control for the TV?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "opposite": null,
        "transcription": "rɪˈmoʊt kənˈtroʊl"
    },
    {
        "word": "rainbow",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌈",
        "form": "noun",
        "plural": "rainbows",
        "definitions": [
            {
                "text": "A large curve of different colors that can sometimes be seen in the sky when there is sun and rain.",
                "examples": [
                    "Look! There is a beautiful rainbow in the sky."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈreɪnˌboʊ"
    },
    {
        "word": "storm",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "⛈️",
        "form": "noun",
        "plural": "storms",
        "definitions": [
            {
                "text": "A period of very bad weather when there is a lot of rain, wind, and often lightning and thunder.",
                "examples": [
                    "There was a big storm last night."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "stɔrm"
    },
    {
        "word": "pyjamas",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🛌",
        "form": "noun",
        "plural": "pyjamas",
        "definitions": [
            {
                "text": "Soft loose clothes that you wear in bed.",
                "examples": [
                    "Put on your pyjamas and go to sleep."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "pəˈdʒɑːməz"
    },
    {
        "word": "shorts",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🩳",
        "form": "noun",
        "plural": "shorts",
        "definitions": [
            {
                "text": "Short trousers that end above the knees.",
                "examples": [
                    "I wear shorts in summer."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "ʃɔrts"
    },
    {
        "word": "trainers",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👟",
        "form": "noun",
        "plural": "trainers",
        "subtext": "related to items of clothing",
        "synonyms": [
            "sneakers"
        ],
        "definitions": [
            {
                "text": "Soft shoes that you wear for sport or as casual clothes.",
                "examples": [
                    "I need a new pair of trainers."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈtreɪnərz"
    },
    {
        "word": "living room",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "living rooms",
        "definitions": [
            {
                "text": "The main room in a house where people sit and relax.",
                "examples": [
                    "We are watching TV in the living room."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "ˈlɪvɪŋ rum"
    },
    {
        "word": "dining room",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "dining rooms",
        "definitions": [
            {
                "text": "A room in a house where people eat their meals.",
                "examples": [
                    "Dinner is served in the dining room."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to rooms of a home",
        "opposite": null,
        "transcription": "ˈdaɪnɪŋ rum"
    },
    {
        "word": "break",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "☕",
        "form": "noun",
        "plural": "breaks",
        "subtext": "lunch break, take a break",
        "definitions": [
            {
                "text": "A short period of time when you stop working or studying to rest or eat.",
                "examples": [
                    "Let's take a fifteen-minute break."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "breɪk"
    },
    {
        "word": "globe",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🌍",
        "form": "noun",
        "plural": "globes",
        "definitions": [
            {
                "text": "A round object with a map of the world on it.",
                "examples": [
                    "Look for Italy on the globe."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "gloʊb"
    },
    {
        "word": "address",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "form": "noun",
        "plural": "addresses",
        "subtext": "home address, email address",
        "definitions": [
            {
                "text": "The details of where a person lives or where a building is.",
                "examples": [
                    "What is your home address?",
                    "Please write your address here."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "əˈdres"
    },
    {
        "word": "language",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "languages",
        "subtext": "foreign language, speak a language",
        "definitions": [
            {
                "text": "The system of communication used by people in a particular country.",
                "examples": [
                    "How many languages do you speak?",
                    "English is a global language."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈlæŋɡwɪdʒ"
    },
    {
        "word": "clothes",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "plural": "clothes",
        "subtext": "clothing, wear clothes",
        "definitions": [
            {
                "text": "Items such as shirts and pants that you wear on your body.",
                "examples": [
                    "I need to buy some new clothes.",
                    "She is wearing beautiful clothes."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "kləʊðz"
    },
    {
        "word": "furniture",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "plural": null,
        "subtext": "office furniture, piece of furniture",
        "definitions": [
            {
                "text": "Items such as chairs, tables, and beds used in a home or office.",
                "examples": [
                    "We need to buy some furniture for the new flat.",
                    "The furniture is very modern."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈfɜːnɪtʃə(r)"
    },
    {
        "word": "information",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "ℹ️",
        "form": "noun",
        "plural": null,
        "subtext": "info, give information",
        "definitions": [
            {
                "text": "Facts or details about something or someone.",
                "examples": [
                    "Can you give me some information about the hotel?",
                    "I found the information on the website."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˌɪnfəˈmeɪʃn"
    },
    {
        "word": "nature",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🌳",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "The physical world and everything in it that is not made by people.",
                "examples": [
                    "I love being in nature.",
                    "We must protect nature."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to nature landscapes",
        "opposite": null,
        "transcription": "ˈneɪtʃə(r)"
    },
    {
        "word": "weather",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌤️",
        "form": "noun",
        "plural": null,
        "subtext": "weather forecast, nice weather",
        "definitions": [
            {
                "text": "The state of the atmosphere at a particular time and place.",
                "examples": [
                    "What is the weather like today?",
                    "The weather is very nice."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈweðə(r)"
    },
    {
        "word": "temperature",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌡️",
        "form": "noun",
        "plural": "temperatures",
        "subtext": "high temperature, body temperature",
        "definitions": [
            {
                "text": "A measure of how hot or cold something is.",
                "examples": [
                    "The temperature is thirty degrees.",
                    "Check the temperature."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈtemprətʃə(r)"
    },
    {
        "word": "first name",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🆔",
        "form": "noun",
        "plural": "first names",
        "opposite": null,
        "subtext": "legal name",
        "synonyms": [
            "given name"
        ],
        "definitions": [
            {
                "text": "The name that was given to you when you were born and that comes before your family name.",
                "examples": [
                    "My first name is David.",
                    "Please write your first name here."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "fɜːst neɪm"
    },
    {
        "word": "surname",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🆔",
        "form": "noun",
        "plural": "surnames",
        "opposite": null,
        "subtext": "last name, family name",
        "definitions": [
            {
                "text": "The name that you share with other members of your family.",
                "examples": [
                    "His surname is Smith.",
                    "What is your surname?"
                ]
            }
        ],
        "countability": "countable",
        "transcription": "ˈsɜːneɪm"
    },
    {
        "word": "snow",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Soft white pieces of frozen water that fall from the sky when it is very cold.",
                "examples": [
                    "We have a lot of snow in winter.",
                    "The snow is very deep."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to weather",
        "opposite": null,
        "transcription": "snoʊ"
    },
    {
        "word": "news",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📰",
        "form": "noun",
        "plural": null,
        "subtext": "latest news, good news",
        "definitions": [
            {
                "text": "Information about recent events.",
                "examples": [
                    "I watch the news every evening.",
                    "Have you heard the news?"
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "nuz"
    },
    {
        "word": "bookshop",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "📚",
        "form": "noun",
        "plural": "bookshops",
        "subtext": "related to local places services",
        "synonyms": [
            "bookstore"
        ],
        "definitions": [
            {
                "text": "A shop where you can buy books.",
                "examples": [
                    "I bought a dictionary at the bookshop."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈbʊkˌʃɑp"
    },
    {
        "word": "date",
        "level": "starter",
        "theme": "dates_years_A1",
        "emoji": "📅",
        "form": "noun",
        "plural": "dates",
        "subtext": "today's date, save the date",
        "definitions": [
            {
                "text": "A particular day of the month or year.",
                "examples": [
                    "What is the date today?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "deɪt"
    },
    {
        "word": "exam",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📝",
        "form": "noun",
        "plural": "exams",
        "subtext": "examination, pass an exam, fail an exam",
        "definitions": [
            {
                "text": "A formal test of a person's knowledge or proficiency in a particular subject.",
                "examples": [
                    "I have an English exam tomorrow."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ɪgˈzæm"
    },
    {
        "word": "example",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "💡",
        "form": "noun",
        "plural": "examples",
        "subtext": "for example",
        "definitions": [
            {
                "text": "A thing that is representative of all such things.",
                "examples": [
                    "Can you give me an example?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ɪgˈzæmpəl"
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎬",
        "form": "noun",
        "plural": "films",
        "subtext": "movie, watch a film",
        "definitions": [
            {
                "text": "A story or series of events that is shown as a sequence of moving pictures.",
                "examples": [
                    "I like watching films."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "fɪlm"
    },
    {
        "word": "idea",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💡",
        "form": "noun",
        "plural": "ideas",
        "subtext": "good idea",
        "definitions": [
            {
                "text": "A thought or a plan.",
                "examples": [
                    "I have a good idea."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "aɪˈdiə"
    },
    {
        "word": "letter",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "✉️",
        "form": "noun",
        "plural": "letters",
        "subtext": "write a letter",
        "definitions": [
            {
                "text": "A message that you write on paper and send to someone.",
                "examples": [
                    "He is writing a letter to his parents."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈlɛtər"
    },
    {
        "word": "list",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "📝",
        "form": "noun",
        "plural": "lists",
        "subtext": "shopping list",
        "definitions": [
            {
                "text": "A series of names or items written one after the other.",
                "examples": [
                    "Make a shopping list."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "lɪst"
    },
    {
        "word": "meal",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "meals",
        "subtext": "delicious meal, have a meal",
        "definitions": [
            {
                "text": "An occasion when food is eaten.",
                "examples": [
                    "Breakfast is the first meal of the day."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "mil"
    },
    {
        "word": "movie",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎬",
        "form": "noun",
        "plural": "movies",
        "subtext": "film, watch a movie",
        "definitions": [
            {
                "text": "A series of moving pictures that tell a story.",
                "examples": [
                    "Let's watch a movie tonight."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈmuvi"
    },
    {
        "word": "party",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "form": "noun",
        "plural": "parties",
        "subtext": "birthday party, go to a party",
        "definitions": [
            {
                "text": "A social event where people eat, drink, and dance.",
                "examples": [
                    "We are having a party on Saturday."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈpɑrti"
    },
    {
        "word": "photo",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "📷",
        "form": "noun",
        "plural": "photos",
        "subtext": "photograph, take a photo",
        "definitions": [
            {
                "text": "A picture made with a camera.",
                "examples": [
                    "Can I take a photo of you?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈfoʊˌtoʊ"
    },
    {
        "word": "picture",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🖼️",
        "form": "noun",
        "plural": "pictures",
        "subtext": "draw a picture, take a picture",
        "definitions": [
            {
                "text": "A drawing, painting, or photo.",
                "examples": [
                    "The children are drawing pictures."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈpɪkʧər"
    },
    {
        "word": "road",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🛣️",
        "form": "noun",
        "plural": "roads",
        "subtext": "on the road",
        "definitions": [
            {
                "text": "A way for cars and other vehicles to travel on.",
                "examples": [
                    "The road is very busy."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "roʊd"
    },
    {
        "word": "test",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📝",
        "form": "noun",
        "plural": "tests",
        "subtext": "take a test, pass a test",
        "definitions": [
            {
                "text": "A set of questions or practical activities used to measure someone's knowledge or ability.",
                "examples": [
                    "I have a maths test today."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "tɛst"
    },
    {
        "word": "university",
        "level": "starter",
        "theme": "types_of_education_A1",
        "emoji": "🎓",
        "form": "noun",
        "plural": "universities",
        "subtext": "study at university",
        "definitions": [
            {
                "text": "A place where people study for a degree.",
                "examples": [
                    "She is studying at university."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˌjunəˈvərsəti"
    },
    {
        "word": "writer",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "✍️",
        "form": "noun",
        "plural": "writers",
        "subtext": "famous writer",
        "definitions": [
            {
                "text": "A person who writes books, stories, or articles.",
                "examples": [
                    "He is a famous writer."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈraɪtər"
    },
    {
        "word": "suitcase",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🧳",
        "form": "noun",
        "plural": "suitcases",
        "definitions": [
            {
                "text": "A large case that you use to carry your clothes and other things when you are traveling.",
                "examples": [
                    "I am packing my suitcase for the trip."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to travel vocabulary basics",
        "opposite": null,
        "transcription": "ˈsutˌkeɪs"
    },
    {
        "word": "purse",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "👛",
        "form": "noun",
        "plural": "purses",
        "definitions": [
            {
                "text": "A small container for money, usually used by a woman.",
                "examples": [
                    "She has a red purse."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to everyday shopping",
        "opposite": null,
        "transcription": "pərs"
    },
    {
        "word": "pocket",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "plural": "pockets",
        "definitions": [
            {
                "text": "A small bag that is sewn into or onto a piece of clothing so that you can carry things in it.",
                "examples": [
                    "I have some money in my pocket."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to items of clothing",
        "opposite": null,
        "transcription": "ˈpɑkət"
    },
    {
        "word": "comb",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪮",
        "form": "noun",
        "plural": "combs",
        "definitions": [
            {
                "text": "A flat piece of plastic or metal with a row of long thin parts called teeth, used for making your hair tidy.",
                "examples": [
                    "I need a comb for my hair."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to furniture objects",
        "opposite": null,
        "transcription": "koʊm"
    },
    {
        "word": "skill",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "form": "noun",
        "plural": "skills",
        "subtext": "language skills",
        "definitions": [
            {
                "text": "The ability to do something well.",
                "examples": [
                    "She has good communication skills."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "skɪl"
    },
    {
        "word": "opinion",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💬",
        "form": "noun",
        "plural": "opinions",
        "subtext": "in my opinion",
        "definitions": [
            {
                "text": "What you think about something or someone.",
                "examples": [
                    "What is your opinion about the new office?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "əˈpɪnjən"
    },
    {
        "word": "apartment",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏢",
        "form": "noun",
        "plural": "apartments",
        "subtext": "flat, studio apartment",
        "definitions": [
            {
                "text": "A set of rooms for living in, especially on one floor of a building.",
                "examples": [
                    "I live in a small apartment in the city."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "əˈpɑrtmənt"
    },
    {
        "word": "bicycle",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚲",
        "form": "noun",
        "plural": "bicycles",
        "subtext": "bike, ride a bicycle",
        "definitions": [
            {
                "text": "A vehicle with two wheels that you sit on and move by turning pedals.",
                "examples": [
                    "He goes to work by bicycle."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈbaɪsɪkəl"
    },
    {
        "word": "mobile",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "plural": "mobiles",
        "subtext": "mobile phone, cell phone",
        "definitions": [
            {
                "text": "A phone that you can carry with you.",
                "examples": [
                    "I lost my mobile."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈmoʊbəl"
    },
    {
        "word": "class",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏫",
        "form": "noun",
        "plural": "classes",
        "subtext": "English class, go to class",
        "definitions": [
            {
                "text": "A group of students who are taught together.",
                "examples": [
                    "I have an English class at nine o'clock."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "klæs"
    },
    {
        "word": "classroom",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🏫",
        "form": "noun",
        "plural": "classrooms",
        "definitions": [
            {
                "text": "A room in a school where students have lessons.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈklæsˌrum"
    },
    {
        "word": "staff",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👥",
        "form": "noun",
        "plural": null,
        "subtext": "related to workplace basics",
        "synonyms": [
            "employees",
            "workers"
        ],
        "definitions": [
            {
                "text": "The group of people who work for an organization.",
                "examples": [
                    "The hospital staff are very helpful."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "stæf"
    },
    {
        "word": "customer",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛍️",
        "form": "noun",
        "plural": "customers",
        "definitions": [
            {
                "text": "A person who buys goods or services from a shop or business.",
                "examples": [
                    "The shop was full of customers."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to everyday shopping",
        "opposite": null,
        "transcription": "ˈkəstəmər"
    },
    {
        "word": "guest",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏨",
        "form": "noun",
        "plural": "guests",
        "definitions": [
            {
                "text": "A person who is staying in a hotel or visiting someone's home.",
                "examples": [
                    "We have two guests staying with us."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "gɛst"
    },
    {
        "word": "career",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "📈",
        "form": "noun",
        "plural": "careers",
        "subtext": "profession, start a career",
        "definitions": [
            {
                "text": "The series of jobs that a person has in a particular area of work.",
                "examples": [
                    "She wants to start a career in nursing."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "kərɪr"
    },
    {
        "word": "profession",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🎓",
        "form": "noun",
        "plural": "professions",
        "subtext": "related to job titles professions",
        "synonyms": [
            "job",
            "career"
        ],
        "definitions": [
            {
                "text": "A type of job that needs special training or a high level of education.",
                "examples": [
                    "Teaching is a difficult profession."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "prəˈfɛʃən"
    },
    {
        "word": "wage",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💵",
        "form": "noun",
        "plural": "wages",
        "subtext": "related to money payment",
        "synonyms": [
            "salary",
            "pay"
        ],
        "definitions": [
            {
                "text": "The amount of money that is paid to a worker, usually for each hour or week.",
                "examples": [
                    "The minimum wage is increasing."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "weɪʤ"
    },
    {
        "word": "factory",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏭",
        "form": "noun",
        "plural": "factories",
        "definitions": [
            {
                "text": "A building where goods are made using machines.",
                "examples": [
                    "He works in a car factory."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to workplace basics",
        "opposite": null,
        "transcription": "ˈfæktəri"
    },
    {
        "word": "file",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📁",
        "form": "noun",
        "plural": "files",
        "definitions": [
            {
                "text": "A collection of information stored on a computer or in a folder.",
                "examples": [
                    "I am looking for the sales file."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to workplace basics",
        "opposite": null,
        "transcription": "faɪl"
    },
    {
        "word": "document",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📄",
        "form": "noun",
        "plural": "documents",
        "definitions": [
            {
                "text": "An official paper that gives information or proof of something.",
                "examples": [
                    "Please sign this document."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to workplace basics",
        "opposite": null,
        "transcription": "ˈdɑkjəmɛnt"
    },
    {
        "word": "radio",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📻",
        "form": "noun",
        "plural": "radios",
        "definitions": [
            {
                "text": "A device used for listening to music and news programs.",
                "examples": [
                    "I listen to the radio in the morning."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈreɪdiˌoʊ"
    },
    {
        "word": "printer",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🖨️",
        "form": "noun",
        "plural": "printers",
        "definitions": [
            {
                "text": "A machine used for printing documents from a computer.",
                "examples": [
                    "We need more paper for the printer."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈprɪnər"
    },
    {
        "word": "dessert",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍰",
        "form": "noun",
        "plural": "desserts",
        "subtext": "related to meals of the day",
        "synonyms": [
            "sweet dish"
        ],
        "definitions": [
            {
                "text": "Sweet food eaten at the end of a meal.",
                "examples": [
                    "What is for dessert?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "dɪˈzərt"
    },
    {
        "word": "shoes",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👟",
        "form": "noun",
        "plural": "shoes",
        "subtext": "pair of shoes, wear shoes",
        "definitions": [
            {
                "text": "A pair of coverings for your feet.",
                "examples": [
                    "Take off your shoes."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʃuz"
    },
    {
        "word": "jewelry",
        "level": "starter",
        "theme": "accessories_A1",
        "emoji": "💍",
        "form": "noun",
        "plural": null,
        "subtext": "jewellery, gold jewelry",
        "definitions": [
            {
                "text": "Decorative objects that you wear on your body, such as rings or necklaces.",
                "examples": [
                    "She is wearing a lot of jewelry."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈʤuəlri"
    },
    {
        "word": "nephew",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👦",
        "form": "noun",
        "plural": "nephews",
        "opposite": null,
        "definitions": [
            {
                "text": "The son of your brother or sister.",
                "examples": [
                    "My nephew is ten years old."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to extended family",
        "transcription": "ˈnɛfju"
    },
    {
        "word": "niece",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👧",
        "form": "noun",
        "plural": "nieces",
        "opposite": null,
        "definitions": [
            {
                "text": "The daughter of your brother or sister.",
                "examples": [
                    "My niece is a student."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to extended family",
        "transcription": "nis"
    },
    {
        "word": "teenager",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "🧑",
        "form": "noun",
        "plural": "teenagers",
        "definitions": [
            {
                "text": "A person who is between 13 and 19 years old.",
                "examples": [
                    "He is a typical teenager."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to people",
        "opposite": null,
        "transcription": "ˈtiˌneɪʤər"
    },
    {
        "word": "professor",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🏫",
        "form": "noun",
        "plural": "professors",
        "definitions": [
            {
                "text": "A teacher of the highest rank in a university department.",
                "examples": [
                    "He is a professor of history."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to job titles professions",
        "opposite": null,
        "transcription": "prəˈfɛsər"
    },
    {
        "word": "month",
        "level": "starter",
        "theme": "dates_years_A1",
        "emoji": "📅",
        "form": "noun",
        "plural": "months",
        "definitions": [
            {
                "text": "One of the twelve periods that a year is divided into.",
                "examples": [
                    "January is the first month of the year."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to dates years",
        "opposite": null,
        "transcription": "mənθ"
    },
    {
        "word": "excuse me",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "👋",
        "form": "phrase",
        "subtext": "excuse me",
        "synonyms": [
            "pardon me"
        ],
        "definitions": [
            {
                "text": "A polite way of starting to talk to someone you do not know.",
                "examples": [
                    "Excuse me, is this the way to the station?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "ɪkˈskjuz mi"
    },
    {
        "word": "above",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "below",
        "definitions": [
            {
                "text": "In or to a higher position than something else.",
                "examples": [
                    "The shelf is above the desk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "⬆️",
        "transcription": "əˈbəv"
    },
    {
        "word": "below",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "above",
        "definitions": [
            {
                "text": "In or to a lower position than something else.",
                "examples": [
                    "The desk is below the shelf."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "⬇️",
        "transcription": "bɪˈloʊ"
    },
    {
        "word": "inside",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "outside",
        "definitions": [
            {
                "text": "In or into a container, room, or building.",
                "examples": [
                    "Go inside the house."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🏠",
        "transcription": "ˌɪnˈsaɪd"
    },
    {
        "word": "outside",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "inside",
        "definitions": [
            {
                "text": "Not in a particular room or building.",
                "examples": [
                    "It is cold outside."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🌳",
        "transcription": "ˈaʊtˈsaɪd"
    },
    {
        "word": "during",
        "level": "starter",
        "theme": "prepositions_time_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "From the beginning to the end of a particular period of time.",
                "examples": [
                    "I sleep during the night."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "opposite": null,
        "emoji": "⌛",
        "transcription": "ˈdʊrɪŋ"
    },
    {
        "word": "before",
        "level": "starter",
        "theme": "prepositions_time_A1",
        "form": "preposition",
        "opposite": "after",
        "definitions": [
            {
                "text": "At an earlier time; in front of.",
                "examples": [
                    "Wash your hands before dinner."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "⏮️",
        "transcription": "ˌbiˈfɔr"
    },
    {
        "word": "after",
        "level": "starter",
        "theme": "prepositions_time_A1",
        "form": "preposition",
        "opposite": "before",
        "definitions": [
            {
                "text": "At a later time; following.",
                "examples": [
                    "We have a meeting after lunch."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "⏭️",
        "transcription": "ˈæftər"
    },
    {
        "word": "top",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🔝",
        "form": "noun",
        "opposite": "bottom",
        "definitions": [
            {
                "text": "The highest part of something.",
                "examples": [
                    "The book is on the top shelf."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to size shape",
        "transcription": "tɔp"
    },
    {
        "word": "bottom",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⬇️",
        "form": "noun",
        "opposite": "top",
        "definitions": [
            {
                "text": "The lowest part of something.",
                "examples": [
                    "Write your name at the bottom of the page."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "related to size shape",
        "transcription": "ˈbɑtəm"
    },
    {
        "word": "first",
        "level": "starter",
        "theme": "sequence_order_A2",
        "emoji": "1️⃣",
        "form": "adjective",
        "opposite": "last",
        "definitions": [
            {
                "text": "Coming before all others in time or order.",
                "examples": [
                    "He was the first person to arrive."
                ]
            }
        ],
        "subtext": "related to sequence order A2",
        "transcription": "fərst"
    },
    {
        "word": "last",
        "level": "starter",
        "theme": "sequence_order_A2",
        "emoji": "🔚",
        "form": "adjective",
        "opposite": "first",
        "definitions": [
            {
                "text": "Coming after all others in time or order.",
                "examples": [
                    "She was the last person to leave."
                ]
            }
        ],
        "subtext": "related to sequence order A2",
        "transcription": "læst"
    },
    {
        "word": "next",
        "level": "starter",
        "theme": "sequence_order_A2",
        "emoji": "⏭️",
        "form": "adjective",
        "opposite": "previous",
        "definitions": [
            {
                "text": "Coming immediately after the present one.",
                "examples": [
                    "We will meet next week."
                ]
            }
        ],
        "subtext": "related to sequence order A2",
        "transcription": "nɛkst"
    },
    {
        "word": "animal",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐾",
        "form": "noun",
        "plural": "animals",
        "subtext": "wild animal / pet animal",
        "synonyms": [
            "creature"
        ],
        "definitions": [
            {
                "text": "A living thing that can move and eat.",
                "examples": [
                    "A dog is an animal.",
                    "I like animals."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈænəməl"
    },
    {
        "word": "chips",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍟",
        "form": "noun",
        "plural": "chips",
        "subtext": "related to basic foods",
        "synonyms": [
            "french fries"
        ],
        "definitions": [
            {
                "text": "Long thin pieces of potato cooked in oil.",
                "examples": [
                    "I want fish and chips for lunch."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʧɪps"
    },
    {
        "word": "fries",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍟",
        "form": "noun",
        "plural": "fries",
        "subtext": "french fries, chips",
        "definitions": [
            {
                "text": "Long thin pieces of potato cooked in oil.",
                "examples": [
                    "Would you like fries with your burger?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "fraɪz"
    },
    {
        "word": "gym",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "gyms",
        "subtext": "go to the gym",
        "synonyms": [
            "fitness center"
        ],
        "definitions": [
            {
                "text": "A room or building with equipment for doing physical exercise.",
                "examples": [
                    "I go to the gym three times a week."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ʤɪm"
    },
    {
        "word": "fire",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🔥",
        "form": "noun",
        "plural": "fires",
        "subtext": "start a fire",
        "synonyms": [
            "flames"
        ],
        "definitions": [
            {
                "text": "Heat and light from something burning.",
                "examples": [
                    "Be careful with the fire."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "faɪər"
    },
    {
        "word": "group",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👥",
        "form": "noun",
        "plural": "groups",
        "subtext": "a small group / group work",
        "synonyms": [
            "set"
        ],
        "definitions": [
            {
                "text": "A number of people or things that are together.",
                "examples": [
                    "We work in a small group."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "grup"
    },
    {
        "word": "ice",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🧊",
        "form": "noun",
        "subtext": "ice cube",
        "synonyms": [
            "frozen water"
        ],
        "definitions": [
            {
                "text": "Water that has frozen and become solid.",
                "examples": [
                    "Do you want ice in your drink?"
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "aɪs"
    },
    {
        "word": "police",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "👮",
        "form": "noun",
        "subtext": "police force / call the police",
        "definitions": [
            {
                "text": "The official organization that makes sure people obey the law.",
                "examples": [
                    "Call the police!"
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "pəˈlis"
    },
    {
        "word": "traffic",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚗",
        "form": "noun",
        "subtext": "heavy traffic",
        "synonyms": [
            "cars",
            "vehicles"
        ],
        "definitions": [
            {
                "text": "The cars, trucks, and other vehicles using a road.",
                "examples": [
                    "The traffic is very heavy this morning."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null,
        "transcription": "ˈtræfɪk"
    },
    {
        "word": "actress",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🎭",
        "form": "noun",
        "plural": "actresses",
        "subtext": "famous actress",
        "synonyms": [
            "actor"
        ],
        "definitions": [
            {
                "text": "A woman who performs in a play or movie.",
                "examples": [
                    "She is a famous actress."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "ˈæktrəs"
    },
    {
        "word": "farm",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🚜",
        "form": "noun",
        "plural": "farms",
        "subtext": "work on a farm",
        "synonyms": [
            "countryside"
        ],
        "definitions": [
            {
                "text": "An area of land used for growing crops and keeping animals.",
                "examples": [
                    "They live on a big farm."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null,
        "transcription": "fɑrm"
    },
    {
        "word": "blanket",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛌",
        "form": "noun",
        "plural": "blankets",
        "definitions": [
            {
                "text": "A large piece of warm cloth that you use on a bed.",
                "examples": [
                    "I need another blanket, I am cold."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "synonyms": [
            "bedding",
            "keep warm"
        ],
        "transcription": "ˈblæŋkɪt"
    },
    {
        "word": "pillow",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛌",
        "form": "noun",
        "plural": "pillows",
        "definitions": [
            {
                "text": "A soft object that you rest your head on when you sleep.",
                "examples": [
                    "This pillow is very soft."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "soft pillow",
        "synonyms": [
            "bedding"
        ],
        "transcription": "ˈpɪloʊ"
    },
    {
        "word": "present",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎁",
        "form": "noun",
        "plural": "presents",
        "definitions": [
            {
                "text": "Something that you give to someone, especially on a special occasion.",
                "examples": [
                    "I bought a birthday present for my friend."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "birthday present",
        "synonyms": [
            "gift"
        ],
        "transcription": "ˈprɛzənt"
    },
    {
        "word": "carpet",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🧶",
        "form": "noun",
        "plural": "carpets",
        "definitions": [
            {
                "text": "A thick material that covers the whole floor of a room.",
                "examples": [
                    "We have a blue carpet in the living room."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to household items",
        "synonyms": [
            "floor covering",
            "rug"
        ],
        "transcription": "ˈkɑrpət"
    },
    {
        "word": "battery",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🔋",
        "form": "noun",
        "plural": "batteries",
        "definitions": [
            {
                "text": "An object that provides electricity for a device.",
                "examples": [
                    "My phone battery is low."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "synonyms": [
            "power source",
            "charging"
        ],
        "transcription": "ˈbætəri"
    },
    {
        "word": "charger",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🔌",
        "form": "noun",
        "plural": "chargers",
        "definitions": [
            {
                "text": "A device used to put electricity into a battery.",
                "examples": [
                    "Can I borrow your phone charger?"
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to basic technology devices",
        "synonyms": [
            "charging cable"
        ],
        "transcription": "ˈʧɑrʤər"
    },
    {
        "word": "calendar",
        "level": "starter",
        "theme": "dates_years_A1",
        "emoji": "📅",
        "form": "noun",
        "plural": "calendars",
        "definitions": [
            {
                "text": "A table that shows the days, weeks, and months of a year.",
                "examples": [
                    "Check the calendar for the meeting date."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "related to dates years",
        "synonyms": [
            "date planner"
        ],
        "transcription": "ˈkæləndər"
    },
    {
        "word": "tape",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🎞️",
        "form": "noun",
        "plural": "tapes",
        "definitions": [
            {
                "text": "A long, thin piece of plastic that is sticky on one side.",
                "examples": [
                    "Use some tape to fix the envelope."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "sticky tape",
        "transcription": "teɪp"
    },
    {
        "word": "sheet",
        "level": "starter",
        "theme": "household_items_A1",
        "emoji": "🛌",
        "form": "noun",
        "plural": "sheets",
        "definitions": [
            {
                "text": "A large piece of thin cloth used on a bed.",
                "examples": [
                    "I need to change the bed sheets."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "bed sheet",
        "synonyms": [
            "linen"
        ],
        "transcription": "ʃit"
    },
    {
        "word": "nurse",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "nurses",
        "transcription": "n˃ːs",
        "definitions": [
            {
                "text": "A person whose job is to care for people who are ill or injured, especially in a hospital.",
                "examples": [
                    "The nurse gave him some medicine."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "hospital nurse, school nurse"
    },
    {
        "word": "engineer",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍💻",
        "form": "noun",
        "plural": "engineers",
        "transcription": "ˌendʒɪˈnɪə(r)",
        "definitions": [
            {
                "text": "A person whose job involves designing and building machines, systems, or structures.",
                "examples": [
                    "He is a software engineer."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "civil engineer, electrical engineer"
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chefs",
        "transcription": "ʃef",
        "definitions": [
            {
                "text": "A skilled and trained cook who works in a hotel or restaurant.",
                "examples": [
                    "The chef prepared a delicious meal."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "head chef, pastry chef"
    },
    {
        "word": "grapes",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🍇",
        "form": "noun",
        "plural": "grapes",
        "transcription": "ɡreɪps",
        "definitions": [
            {
                "text": "Small round green or purple fruits that grow in bunches.",
                "examples": [
                    "I love eating sweet grapes."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "a bunch of grapes"
    },
    {
        "word": "corn",
        "level": "starter",
        "theme": "fruits_vegetables_A1",
        "emoji": "🌽",
        "form": "noun",
        "plural": null,
        "transcription": "kɔːn",
        "definitions": [
            {
                "text": "A tall plant that produces yellow seeds eaten as a vegetable.",
                "examples": [
                    "We had grilled corn for dinner."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": "sweet corn"
    },
    {
        "word": "be",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "be tired / be happy / be at work / be ready",
        "form": "verb",
        "transcription": "biː",
        "definitions": [
            {
                "text": "To exist; to have a quality or state.",
                "examples": [
                    "I am tired.",
                    "She is a doctor.",
                    "We are late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "was / were",
        "v3": "been",
        "group": "irregular",
        "opposite": "become"
    },
    {
        "word": "have",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "transcription": "hæv",
        "definitions": [
            {
                "text": "To possess something; to experience something.",
                "examples": [
                    "I have a job.",
                    "He has a car.",
                    "She has a headache."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "had",
        "group": "irregular",
        "opposite": "need"
    },
    {
        "word": "feel",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "transcription": "fiːl",
        "definitions": [
            {
                "text": "To experience a physical or emotional state.",
                "examples": [
                    "She feels exhausted after a long week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "felt",
        "group": "irregular",
        "opposite": "act"
    },
    {
        "word": "give",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "transcription": "ɡɪv",
        "definitions": [
            {
                "text": "To hand or transfer something to someone.",
                "examples": [
                    "He gives me a lot of work.",
                    "She gives advice."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "given",
        "group": "irregular"
    },
    {
        "word": "take",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "transcription": "teɪk",
        "definitions": [
            {
                "text": "To hold and move something; to use or consume.",
                "examples": [
                    "I take the bus to work.",
                    "She takes medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken",
        "group": "irregular"
    },
    {
        "word": "get",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive, obtain or become.",
                "examples": [
                    "I get a good salary.",
                    "He gets tired quickly.",
                    "She gets a promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "got / gotten",
        "group": "irregular",
        "transcription": "gɪt"
    },
    {
        "word": "put",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To place something in a position.",
                "examples": [
                    "Put your bag here.",
                    "She puts money in the bank."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put",
        "v3": "put",
        "group": "irregular",
        "transcription": "pʊt"
    },
    {
        "word": "make",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "To create or produce something; to cause something.",
                "examples": [
                    "I make coffee in the morning.",
                    "She makes a decision."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "made",
        "group": "irregular",
        "opposite": "destroy",
        "transcription": "meɪk"
    },
    {
        "word": "do",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform an action or activity.",
                "examples": [
                    "I do my work every day.",
                    "She does the shopping."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "did",
        "v3": "done",
        "group": "irregular",
        "opposite": "undo",
        "transcription": "du"
    },
    {
        "word": "use",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything.",
                    "She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used",
        "group": "regular",
        "opposite": "waste",
        "transcription": "juz"
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "opposite": "closed",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not closed; or to start.",
                "examples": [
                    "He opens the office at eight.",
                    "She opens a bank account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "opened",
        "group": "regular",
        "transcription": "ˈoʊpən"
    },
    {
        "word": "close",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not open; or to finish.",
                "examples": [
                    "The office closes at six.",
                    "She closes her laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "closed",
        "group": "regular",
        "transcription": "kloʊz"
    },
    {
        "word": "start",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "opposite": "stop",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin an activity or period.",
                "examples": [
                    "I start work at eight thirty. She starts a new role next month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "started",
        "group": "regular",
        "transcription": "stɑrt"
    },
    {
        "word": "finish",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "opposite": "end",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "To complete something.",
                "examples": [
                    "He finishes work at five. She finishes the report by noon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "finished",
        "group": "regular",
        "transcription": "ˈfɪnɪʃ"
    },
    {
        "word": "help",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "To make it easier for someone to do something.",
                "examples": [
                    "He helps new colleagues understand the systems."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "helped",
        "group": "regular",
        "opposite": "hinder",
        "transcription": "hɛlp"
    },
    {
        "word": "try",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "To attempt to do something; to test something.",
                "examples": [
                    "I always try to reply to all messages within an hour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "tried",
        "group": "regular",
        "opposite": "give up",
        "transcription": "traɪ"
    },
    {
        "word": "show",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "opposite": "hide",
        "oppositeEmoji": "🙈",
        "form": "verb",
        "definitions": [
            {
                "text": "To let someone see or demonstrate something.",
                "examples": [
                    "Can you show me how the system works?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "shown",
        "group": "irregular",
        "transcription": "ʃoʊ"
    },
    {
        "word": "find",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "To discover or locate something.",
                "examples": [
                    "I find the work interesting.",
                    "She found a new job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "found",
        "group": "irregular",
        "transcription": "faɪnd"
    },
    {
        "word": "keep",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue having or doing something.",
                "examples": [
                    "Keep the receipt.",
                    "She keeps her phone on all day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "kept",
        "v3": "kept",
        "group": "irregular",
        "opposite": "give away",
        "transcription": "kip"
    },
    {
        "word": "lose",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "opposite": "win",
        "oppositeEmoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "To no longer have something.",
                "examples": [
                    "I lost my keys.",
                    "She lost her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "lost",
        "group": "irregular",
        "transcription": "luz"
    },
    {
        "word": "cut",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "To divide with something sharp; to reduce.",
                "examples": [
                    "She cuts her lunch break short.",
                    "It cuts costs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "cut",
        "group": "irregular",
        "opposite": "join",
        "transcription": "kət"
    },
    {
        "word": "turn",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "To move in a direction; to change state.",
                "examples": [
                    "Turn left at the office.",
                    "She turns off the light."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "turned",
        "group": "regular",
        "opposite": "straighten",
        "transcription": "tərn"
    },
    {
        "word": "bring",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To carry something to a place.",
                "examples": [
                    "Bring your ID to the interview.",
                    "He brings lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "brought",
        "group": "irregular",
        "transcription": "brɪŋ"
    },
    {
        "word": "say",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "To express something in words.",
                "examples": [
                    "She says hello every morning.",
                    "He says it is difficult."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "said",
        "group": "irregular",
        "opposite": "listen",
        "transcription": "seɪ"
    },
    {
        "word": "tell",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "To give information or instructions to someone.",
                "examples": [
                    "She tells the team about changes before they happen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "told",
        "group": "irregular",
        "opposite": "ask",
        "transcription": "tɛl"
    },
    {
        "word": "ask",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "ask for / about, ask a question / ask for help / ask about / ask someone",
        "opposite": "answer",
        "oppositeEmoji": "📞",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question or make a request.",
                "examples": [
                    "She asks for feedback after every presentation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked",
        "group": "regular",
        "transcription": "æsk"
    },
    {
        "word": "speak",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "speak to / with, speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To say words; to communicate verbally.",
                "examples": [
                    "He speaks French.",
                    "She speaks to her manager every day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "spoken",
        "group": "irregular",
        "opposite": "be silent",
        "transcription": "spik"
    },
    {
        "word": "talk",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "talk to / about, talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "To communicate by speaking.",
                "examples": [
                    "He talks to his manager about the problem."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "talked",
        "group": "regular",
        "opposite": "listen",
        "transcription": "tɔk"
    },
    {
        "word": "call",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning before checking emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called",
        "group": "regular",
        "opposite": "hang up",
        "transcription": "kɔl"
    },
    {
        "word": "write",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write to, write an email / write a report / write a letter / write notes",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To put words on paper or screen.",
                "examples": [
                    "I write emails all day.",
                    "She writes a report every Friday."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "written",
        "group": "irregular",
        "transcription": "raɪt"
    },
    {
        "word": "read",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "To look at and understand written words.",
                "examples": [
                    "She reads the news every morning.",
                    "He reads contracts."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "read",
        "group": "irregular",
        "transcription": "rɛd"
    },
    {
        "word": "listen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay attention to sounds or speech.",
                "examples": [
                    "I listen to podcasts at work.",
                    "She listens carefully."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "listened",
        "group": "regular",
        "opposite": "say",
        "transcription": "ˈlɪsən"
    },
    {
        "word": "answer",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "opposite": "ask",
        "oppositeEmoji": "❓",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a question or communication.",
                "examples": [
                    "He answers all emails quickly.",
                    "She answered the phone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "answered",
        "group": "regular",
        "transcription": "ˈænsər"
    },
    {
        "word": "repeat",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something again.",
                "examples": [
                    "Please repeat that.",
                    "He repeated the instruction twice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "repeated",
        "group": "regular",
        "opposite": "change",
        "transcription": "rɪˈpit"
    },
    {
        "word": "go",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "opposite": "come",
        "oppositeEmoji": "🏃‍♂️",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by bus.",
                    "She goes to the doctor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone",
        "group": "irregular",
        "transcription": "ɡəʊ"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place or person.",
                "examples": [
                    "He comes to the office at nine.",
                    "She comes home late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come",
        "group": "irregular",
        "transcription": "kʌm"
    },
    {
        "word": "walk",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "opposite": "run",
        "oppositeEmoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal pace.",
                "examples": [
                    "He walks to work every day.",
                    "She walks during her lunch break."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked",
        "group": "regular",
        "transcription": "wɔk"
    },
    {
        "word": "drive",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To operate a vehicle.",
                "examples": [
                    "She drives to work.",
                    "He drives a company car."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "driven",
        "group": "irregular",
        "opposite": "walk",
        "transcription": "draɪv"
    },
    {
        "word": "fly",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel by plane.",
                "examples": [
                    "She flies to Paris for meetings.",
                    "He hates flying."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "flown",
        "group": "irregular",
        "opposite": "land",
        "transcription": "flaɪ"
    },
    {
        "word": "arrive",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at / in, arrive at work / arrive late / arrive on time / arrive home",
        "opposite": "leave",
        "oppositeEmoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "To reach a destination.",
                "examples": [
                    "He arrives at the office at nine. The train arrives on time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "arrived",
        "group": "regular",
        "transcription": "əraɪv"
    },
    {
        "word": "leave",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "opposite": "arrive",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To go away from a place.",
                "examples": [
                    "I leave the house at eight fifteen. She leaves work at six."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "left",
        "group": "irregular",
        "transcription": "liv"
    },
    {
        "word": "move",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to live or work in a different place.",
                "examples": [
                    "They moved to a larger flat when they had children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved",
        "group": "regular",
        "opposite": "stay",
        "transcription": "muv"
    },
    {
        "word": "return",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "To come or go back to a place.",
                "examples": [
                    "He returns from a trip on Friday.",
                    "She returned the call."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "returned",
        "group": "regular",
        "opposite": "leave",
        "transcription": "rɪˈtərn"
    },
    {
        "word": "travel",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another, especially far.",
                "examples": [
                    "She travels for work three times a month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "traveled",
        "group": "regular",
        "opposite": "stay",
        "transcription": "ˈtrævəl"
    },
    {
        "word": "eat",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in your mouth and swallow it.",
                "examples": [
                    "We eat dinner at seven.",
                    "He eats lunch at his desk."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "eaten",
        "group": "irregular",
        "transcription": "it"
    },
    {
        "word": "drink",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "To take liquid into your mouth and swallow it.",
                "examples": [
                    "She drinks coffee every morning.",
                    "I drink water."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "drunk",
        "group": "irregular",
        "transcription": "drɪŋk"
    },
    {
        "word": "sleep",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed in a natural state of unconsciousness.",
                "examples": [
                    "He sleeps seven hours a night.",
                    "I sleep badly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept",
        "group": "irregular",
        "transcription": "slip"
    },
    {
        "word": "cook",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To prepare food by heating it.",
                "examples": [
                    "She cooks dinner every evening. I do not cook — I order food."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "cooked",
        "group": "regular",
        "opposite": "eat",
        "transcription": "kʊk"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean the flat every Saturday. He cleans his desk every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "cleaned",
        "group": "regular",
        "opposite": "dirty",
        "transcription": "klin"
    },
    {
        "word": "wear",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "To have clothing or accessories on your body.",
                "examples": [
                    "She wears a suit to work.",
                    "He wears glasses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "worn",
        "group": "irregular",
        "opposite": "undress",
        "transcription": "wɛr"
    },
    {
        "word": "wash",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "To clean something with water.",
                "examples": [
                    "He washes his car every Sunday.",
                    "Wash your hands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "washed",
        "v3": "washed",
        "group": "regular",
        "opposite": "dirty",
        "transcription": "wɑʃ"
    },
    {
        "word": "buy",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something in exchange for money.",
                "examples": [
                    "She buys food online.",
                    "He wants to buy a flat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "bought",
        "group": "irregular",
        "transcription": "baɪ"
    },
    {
        "word": "pay",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pay for, pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money in exchange for something.",
                "examples": [
                    "I pay my bills by direct debit."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paid",
        "group": "irregular",
        "opposite": "receive",
        "transcription": "peɪ"
    },
    {
        "word": "spend",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "opposite": "save",
        "oppositeEmoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To use money to pay for things.",
                "examples": [
                    "He spends too much money on takeaway food."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "spent",
        "group": "irregular",
        "transcription": "spɛnd"
    },
    {
        "word": "save",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep money rather than spending it.",
                "examples": [
                    "She saves a hundred euros every month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "saved",
        "group": "regular",
        "transcription": "seɪv"
    },
    {
        "word": "work",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "opposite": "rest",
        "oppositeEmoji": "🛋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do tasks as part of a job.",
                "examples": [
                    "She works from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "worked",
        "group": "regular",
        "transcription": "wərk"
    },
    {
        "word": "live",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre.",
                    "We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived",
        "group": "regular",
        "transcription": "lɪv"
    },
    {
        "word": "think",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "think about / of, think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a belief or opinion; to use the mind.",
                "examples": [
                    "I think it is a good idea.",
                    "She thinks about her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "thought",
        "group": "irregular",
        "opposite": "feel",
        "transcription": "θɪŋk"
    },
    {
        "word": "know",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information or awareness about something.",
                "examples": [
                    "I know his name.",
                    "She knows the answer.",
                    "Do you know him?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "known",
        "group": "irregular",
        "opposite": "wonder",
        "transcription": "noʊ"
    },
    {
        "word": "want",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee.",
                    "She wants a better job.",
                    "He wants to retire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted",
        "group": "regular",
        "opposite": "refuse",
        "transcription": "wɔnt"
    },
    {
        "word": "need",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something; to feel that something is necessary.",
                "examples": [
                    "I need a break.",
                    "She needs help.",
                    "We need more time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "needed",
        "group": "regular",
        "opposite": "have",
        "transcription": "nid"
    },
    {
        "word": "like",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "opposite": null,
        "oppositeEmoji": "👎",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant; to enjoy.",
                "examples": [
                    "I like my job.",
                    "She likes cooking.",
                    "He likes coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked",
        "group": "regular",
        "transcription": "laɪk"
    },
    {
        "word": "dislike",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "👎",
        "subtext": "not like / dislike doing",
        "opposite": "prefer",
        "oppositeEmoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "To not like someone or something.",
                "examples": [
                    "I dislike loud music."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disliked",
        "v3": "disliked",
        "group": "regular",
        "transcription": "dɪsˈlaɪk"
    },
    {
        "word": "love",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "opposite": "hate",
        "oppositeEmoji": "😡",
        "form": "verb",
        "definitions": [
            {
                "text": "To have strong affection for; to enjoy greatly.",
                "examples": [
                    "She loves her job.",
                    "He loves travelling for work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "loved",
        "group": "regular",
        "transcription": "ləv"
    },
    {
        "word": "hate",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "opposite": "love",
        "oppositeEmoji": "❤️",
        "form": "verb",
        "definitions": [
            {
                "text": "To strongly dislike.",
                "examples": [
                    "He hates commuting by bus.",
                    "She hates long meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "hated",
        "group": "regular",
        "transcription": "heɪt"
    },
    {
        "word": "hope",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "To wish for something to happen.",
                "examples": [
                    "I hope to get a promotion this year.",
                    "She hopes for better pay."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped",
        "group": "regular",
        "opposite": "fear",
        "transcription": "hoʊp"
    },
    {
        "word": "remember",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "opposite": "forget",
        "oppositeEmoji": "🤔",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a memory of; to not forget.",
                "examples": [
                    "Please remember the deadline.",
                    "She remembers every client."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "remembered",
        "group": "regular",
        "transcription": "rɪˈmɛmbər"
    },
    {
        "word": "forget",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "opposite": "remember",
        "oppositeEmoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to remember.",
                "examples": [
                    "Don't forget the meeting.",
                    "He always forgets passwords."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "forgotten",
        "group": "irregular",
        "transcription": "fərˈgɛt"
    },
    {
        "word": "understand",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To grasp the meaning of something.",
                "examples": [
                    "I understand the contract.",
                    "She understands French."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "understood",
        "group": "irregular",
        "opposite": "misunderstand",
        "transcription": "ˌəndərˈstænd"
    },
    {
        "word": "decide",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / hard to decide",
        "synonyms": [
            "make a decision"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make a choice.",
                "examples": [
                    "She decided to change careers.",
                    "He decides quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "decided",
        "group": "regular",
        "opposite": "hesitate",
        "transcription": "ˌdɪˈsaɪd"
    },
    {
        "word": "enjoy",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "To take pleasure from something.",
                "examples": [
                    "She really enjoys working from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "enjoyed",
        "group": "regular",
        "opposite": "hate",
        "transcription": "ˌɛnˈʤɔɪ"
    },
    {
        "word": "see",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To notice or perceive with the eyes.",
                "examples": [
                    "I see my doctor tomorrow.",
                    "She sees the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "seen",
        "group": "irregular",
        "opposite": "blind",
        "transcription": "si"
    },
    {
        "word": "hear",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To perceive sound through the ears.",
                "examples": [
                    "I hear the alarm every morning.",
                    "Can you hear me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "heard",
        "group": "irregular",
        "opposite": "ignore",
        "transcription": "hir"
    },
    {
        "word": "wake up",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "To stop sleeping; to become conscious after sleep.",
                "examples": [
                    "I wake up at six thirty every morning."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "woken up",
        "group": "irregular",
        "transcription": "weɪk əp"
    },
    {
        "word": "watch",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "She watches the market news every morning before work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "watched",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "wɔʧ"
    },
    {
        "word": "look",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "look at / for, look at / look for / look like / look happy",
        "form": "verb",
        "definitions": [
            {
                "text": "To direct your eyes toward something.",
                "examples": [
                    "Look at this photo.",
                    "He is looking for his keys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "looked",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "lʊk"
    },
    {
        "word": "play",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in a game or sport; to produce music.",
                "examples": [
                    "He plays football at the weekend to de-stress."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played",
        "group": "regular",
        "opposite": "work",
        "transcription": "pleɪ"
    },
    {
        "word": "run",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
        "opposite": "walk",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move very fast on your legs.",
                "examples": [
                    "I run in the park.",
                    "He runs to catch the bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "run",
        "group": "irregular",
        "transcription": "rən"
    },
    {
        "word": "sit",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or take a seated position.",
                "examples": [
                    "He sits at his desk for eight hours a day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "sat",
        "group": "irregular",
        "transcription": "sɪt"
    },
    {
        "word": "stand",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or rise to an upright position.",
                "examples": [
                    "She stands when she presents to keep her energy up."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "stood",
        "group": "irregular",
        "transcription": "stænd"
    },
    {
        "word": "meet",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To come together with someone, especially for a planned reason.",
                "examples": [
                    "We meet every Monday to discuss the week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "met",
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "irregular",
        "opposite": null,
        "transcription": "mit"
    },
    {
        "word": "learn",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
        "opposite": "teach",
        "oppositeEmoji": "👨‍🏫",
        "form": "verb",
        "definitions": [
            {
                "text": "To gain knowledge or skill.",
                "examples": [
                    "She is learning Spanish for her new job abroad."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "learned / learnt",
        "group": "both",
        "transcription": "lərn"
    },
    {
        "word": "change",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
        "form": "verb",
        "definitions": [
            {
                "text": "To become different; to make something different.",
                "examples": [
                    "She changed jobs twice in three years. Things change fast."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "changed",
        "group": "regular",
        "opposite": "stay",
        "transcription": "ʧeɪnʤ"
    },
    {
        "word": "stop",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "To end an activity or movement.",
                "examples": [
                    "She stopped taking the bus and cycles to work now."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "stopped",
        "group": "regular",
        "transcription": "stɑp"
    },
    {
        "word": "add",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "add some sugar / add to / add up / add a comment",
        "opposite": "subtract",
        "oppositeEmoji": "➖",
        "form": "verb",
        "definitions": [
            {
                "text": "To put things together to make a larger group.",
                "examples": [
                    "Add some sugar to the tea.",
                    "What is five plus five?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "added",
        "group": "regular",
        "transcription": "æd"
    },
    {
        "word": "subtract",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➖",
        "subtext": "subtract from",
        "synonyms": [
            "minus"
        ],
        "opposite": "add",
        "oppositeEmoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "To take a number or amount away from another number or amount.",
                "examples": [
                    "If you subtract five from ten, you get five."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subtracted",
        "v3": "subtracted",
        "group": "regular",
        "transcription": "səbˈtrækt"
    },
    {
        "word": "win",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the best in a game or competition.",
                "examples": [
                    "We want to win the game."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "won",
        "group": "irregular",
        "transcription": "wɪn"
    },
    {
        "word": "wait",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "To stay in a place until something happens.",
                "examples": [
                    "He waited twenty minutes for the meeting to start."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "waited",
        "group": "regular",
        "opposite": "act",
        "transcription": "weɪt"
    },
    {
        "word": "die",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop living.",
                "examples": [
                    "Plants die without water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "died",
        "group": "regular",
        "transcription": "daɪ"
    },
    {
        "word": "send",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "opposite": "receive",
        "oppositeEmoji": "📩",
        "definitions": [
            {
                "text": "To transmit something to someone, especially electronically.",
                "examples": [
                    "She sends twenty emails before lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "sent",
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "irregular",
        "transcription": "sɛnd"
    },
    {
        "word": "stay",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
        "opposite": "leave",
        "oppositeEmoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue to be in a place.",
                "examples": [
                    "I stay at home on Sundays.",
                    "We are staying in a hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "stayed",
        "group": "regular",
        "transcription": "steɪ"
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
        "opposite": "rise",
        "oppositeEmoji": "🌅",
        "form": "verb",
        "definitions": [
            {
                "text": "To move down toward the ground.",
                "examples": [
                    "Leaves fall in autumn.",
                    "Be careful, don't fall."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "fallen",
        "group": "irregular",
        "transcription": "fɔl"
    },
    {
        "word": "rise",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🌅",
        "subtext": "rise up / sun rise / price rise",
        "opposite": "fall",
        "oppositeEmoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "To move upwards; to increase in amount or level.",
                "examples": [
                    "The sun rises in the east.",
                    "Prices are rising every year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rose",
        "v3": "risen",
        "group": "irregular",
        "transcription": "raɪz"
    },
    {
        "word": "pass",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
        "opposite": "fail",
        "oppositeEmoji": "❌",
        "form": "verb",
        "definitions": [
            {
                "text": "To go past something or to succeed in an exam.",
                "examples": [
                    "I pass the park on my way home.",
                    "I hope I pass the test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "passed",
        "group": "regular",
        "transcription": "pæs"
    },
    {
        "word": "sell",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "sell products / sell online / sell at the market",
        "synonyms": [
            "best seller"
        ],
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To give something to someone for money.",
                "examples": [
                    "They sell fruit at the market."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "sold",
        "group": "irregular",
        "transcription": "sɛl"
    },
    {
        "word": "pull",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something toward you.",
                "examples": [
                    "Pull the door to open it."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "pulled",
        "group": "regular",
        "transcription": "pʊl"
    },
    {
        "word": "push",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something away from you.",
                "examples": [
                    "Push the button.",
                    "I push the shopping cart."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "pushed",
        "group": "regular",
        "transcription": "pʊʃ"
    },
    {
        "word": "carry",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and take something with you.",
                "examples": [
                    "I carry my laptop and notes to every meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "carried",
        "group": "regular",
        "opposite": "drop",
        "transcription": "ˈkɛri"
    },
    {
        "word": "break",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "break the glass / break a law / take a break / break down",
        "form": "verb",
        "definitions": [
            {
                "text": "To separate something into two or more pieces.",
                "examples": [
                    "Don't break the glass.",
                    "He broke his leg."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "broke",
        "v3": "broken",
        "group": "irregular",
        "opposite": "fix",
        "transcription": "breɪk"
    },
    {
        "word": "receive",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
        "opposite": "send",
        "oppositeEmoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something that someone gave or sent to you.",
                "examples": [
                    "I receive a lot of mail.",
                    "She received a gift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "received",
        "group": "regular",
        "transcription": "rɪˈsiv"
    },
    {
        "word": "agree",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
        "opposite": "disagree",
        "oppositeEmoji": "👎",
        "form": "verb",
        "definitions": [
            {
                "text": "To have the same opinion as someone.",
                "examples": [
                    "I agree with you.",
                    "We agree on the plan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "agreed",
        "group": "regular",
        "transcription": "əˈgri"
    },
    {
        "word": "draw",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn",
        "group": "irregular",
        "opposite": null,
        "transcription": "drɔ"
    },
    {
        "word": "share",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a part of something to others.",
                "examples": [
                    "Let's share the pizza.",
                    "I share a room with my brother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared",
        "group": "regular",
        "opposite": "keep",
        "transcription": "ʃɛr"
    },
    {
        "word": "smile",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a happy expression with your mouth.",
                "examples": [
                    "She has a beautiful smile.",
                    "Smile for the camera."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "smiled",
        "group": "regular",
        "transcription": "smaɪl"
    },
    {
        "word": "cry",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "cry for help / cry out / cry about something",
        "synonyms": [
            "start crying"
        ],
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "To produce tears because you are sad or in pain.",
                "examples": [
                    "The baby is crying.",
                    "Don't cry."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "cried",
        "group": "regular",
        "transcription": "kraɪ"
    },
    {
        "word": "dance",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "dance to music / dance together / slow dance",
        "synonyms": [
            "go dancing"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "I love to dance.",
                    "They are dancing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced",
        "group": "regular",
        "opposite": "sit",
        "transcription": "dæns"
    },
    {
        "word": "sing",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well",
        "synonyms": [
            "lead singer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "I like to sing in the shower.",
                    "She sings very well."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung",
        "group": "irregular",
        "opposite": "be quiet",
        "transcription": "sɪŋ"
    },
    {
        "word": "jump",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
        "form": "verb",
        "definitions": [
            {
                "text": "To push yourself off the ground with your legs.",
                "examples": [
                    "Can you jump high?",
                    "The cat jumped onto the table."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "jumped",
        "group": "regular",
        "opposite": "fall",
        "transcription": "ʤəmp"
    },
    {
        "word": "swim",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "swim across / swim laps / swim well",
        "synonyms": [
            "go swimming"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move through water using your arms and legs.",
                "examples": [
                    "I swim every morning.",
                    "Can you swim?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "swum",
        "group": "irregular",
        "opposite": "sink",
        "transcription": "swɪm"
    },
    {
        "word": "study",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "study English / study for an exam / study hard / self-study",
        "form": "verb",
        "definitions": [
            {
                "text": "To read and practise to gain knowledge.",
                "examples": [
                    "He is studying for a professional qualification."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studied",
        "group": "regular",
        "opposite": "play",
        "transcription": "ˈstədi"
    },
    {
        "word": "teach",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
        "form": "verb",
        "definitions": [
            {
                "text": "To give instruction in a subject.",
                "examples": [
                    "She teaches communication skills to senior managers."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "taught",
        "group": "irregular",
        "opposite": "learn",
        "transcription": "tiʧ"
    },
    {
        "word": "rent",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay money to use property belonging to someone else.",
                "examples": [
                    "They rent a two-bedroom flat near the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented",
        "group": "regular",
        "opposite": "own",
        "transcription": "rɛnt"
    },
    {
        "word": "exercise",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity for health and fitness.",
                "examples": [
                    "He exercises four times a week at the gym."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "regular",
        "opposite": "rest",
        "transcription": "ˈɛksərˌsaɪz"
    },
    {
        "word": "cost",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a price of.",
                "examples": [
                    "The flat costs twelve hundred euros a month."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "cost",
        "subtext": "cost a lot / cost money / cost too much / cost less",
        "group": "irregular",
        "transcription": "kɔst"
    },
    {
        "word": "invite",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to an event or place.",
                "examples": [
                    "They invited all their colleagues to the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "regular",
        "opposite": "reject",
        "transcription": "ˌɪnˈvaɪt"
    },
    {
        "word": "get up",
        "definitions": [
            {
                "text": "To rise from bed after waking.",
                "examples": [
                    "He gets up at seven and makes coffee immediately."
                ]
            }
        ],
        "subtext": "get up early / get up late / get up quickly",
        "classification": "irregular",
        "aspect": "action",
        "v2": "got up",
        "v3": "got up",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "gɪt əp"
    },
    {
        "word": "have breakfast",
        "definitions": [
            {
                "text": "To eat the morning meal.",
                "examples": [
                    "She always has breakfast before leaving the house."
                ]
            }
        ],
        "subtext": "have breakfast at home / have a quick breakfast",
        "synonyms": [
            "skip breakfast"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "had breakfast",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "hæv ˈbrɛkfəst"
    },
    {
        "word": "come back",
        "definitions": [
            {
                "text": "To return to a place.",
                "examples": [
                    "She comes back from lunch at two. He comes back home tired."
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "came back",
        "v3": "come back",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "kəm bæk"
    },
    {
        "word": "go to bed",
        "definitions": [
            {
                "text": "To get into bed in order to sleep.",
                "examples": [
                    "They go to bed at eleven every night."
                ]
            }
        ],
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "irregular",
        "aspect": "action",
        "v2": "went to bed",
        "v3": "gone to bed",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "goʊ tɪ bɛd"
    },
    {
        "word": "check",
        "definitions": [
            {
                "text": "To examine or verify something.",
                "examples": [
                    "I check my emails first thing every morning."
                ]
            }
        ],
        "subtext": "check emails / check messages / check a document / check the time",
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "checked",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "ʧɛk"
    },
    {
        "word": "unpack",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "👜",
        "subtext": "unpack a suitcase",
        "opposite": "pack",
        "oppositeEmoji": "🎒",
        "form": "verb",
        "definitions": [
            {
                "text": "To take things out of a suitcase or bag.",
                "examples": [
                    "I need to unpack my things."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "unpacked",
        "v3": "unpacked",
        "group": "regular",
        "transcription": "ənˈpæk"
    },
    {
        "word": "reply",
        "definitions": [
            {
                "text": "To respond to a message or question.",
                "examples": [
                    "He always replies to emails the same day."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "replied",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "rɪˈplaɪ"
    },
    {
        "word": "present",
        "definitions": [
            {
                "text": "To show or explain something to a group.",
                "examples": [
                    "She presents the results every Friday afternoon."
                ]
            }
        ],
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "presented",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "hide",
        "transcription": "ˈprɛzənt"
    },
    {
        "word": "attend",
        "definitions": [
            {
                "text": "To go to an event or meeting.",
                "examples": [
                    "I attend a management meeting every Monday."
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "attended",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "miss",
        "transcription": "əˈtɛnd"
    },
    {
        "word": "manage",
        "definitions": [
            {
                "text": "To be in charge of people or a situation.",
                "examples": [
                    "She manages a team of eight people."
                ]
            }
        ],
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "managed",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "follow",
        "transcription": "ˈmænɪʤ"
    },
    {
        "word": "earn",
        "definitions": [
            {
                "text": "To receive money for work done.",
                "examples": [
                    "She earns a good salary as a project manager."
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "earned",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "spend",
        "transcription": "ərn"
    },
    {
        "word": "visit",
        "definitions": [
            {
                "text": "To go to see a person or place.",
                "examples": [
                    "She visits her parents every second weekend."
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "visited",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "leave",
        "transcription": "ˈvɪzɪt"
    },
    {
        "word": "celebrate",
        "definitions": [
            {
                "text": "To do something enjoyable for a special occasion.",
                "examples": [
                    "They celebrate every work anniversary together."
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "celebrated",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "mourn",
        "transcription": "ˈsɛləˌbreɪt"
    },
    {
        "word": "hurt",
        "definitions": [
            {
                "text": "To cause pain; or to feel pain.",
                "examples": [
                    "My back hurts after sitting all day."
                ]
            }
        ],
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "hurt",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": "heal",
        "transcription": "hərt"
    },
    {
        "word": "rest",
        "definitions": [
            {
                "text": "To stop working and relax to recover energy.",
                "examples": [
                    "He rests for an hour after lunch every day."
                ]
            }
        ],
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "rested",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "exercise",
        "transcription": "rɛst"
    },
    {
        "word": "book",
        "definitions": [
            {
                "text": "To reserve a place, ticket or service in advance.",
                "examples": [
                    "I always book hotels online."
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "booked",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "cancel",
        "transcription": "bʊk"
    },
    {
        "word": "pack",
        "definitions": [
            {
                "text": "To put items into a bag or case for a journey.",
                "examples": [
                    "He packs his bag the night before a trip."
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "opposite": "unpack",
        "oppositeEmoji": "👜",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "packed",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "transcription": "pæk"
    },
    {
        "word": "cancel",
        "definitions": [
            {
                "text": "To decide that something planned will not happen.",
                "examples": [
                    "She had to cancel her flight due to illness."
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "cancelled",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "book",
        "transcription": "ˈkænsəl"
    },
    {
        "word": "miss",
        "definitions": [
            {
                "text": "To fail to catch a transport connection; or to feel sad about absence.",
                "examples": [
                    "He missed his train and had to wait an hour."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "missed",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "attend",
        "transcription": "mɪs"
    },
    {
        "word": "order",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "To request something formally, especially food or goods.",
                "examples": [
                    "I always order lunch from the same place near the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "ordered",
        "group": "regular",
        "opposite": "deliver",
        "transcription": "ˈɔrdər"
    },
    {
        "word": "thank",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "To express gratitude to someone.",
                "examples": [
                    "He thanked the team for their hard work on the project."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "thanked",
        "group": "regular",
        "opposite": "complain",
        "transcription": "θæŋk"
    },
    {
        "word": "introduce",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "To present someone to another person.",
                "examples": [
                    "She introduced herself at the start of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "introduced",
        "group": "regular",
        "opposite": "hide",
        "transcription": "ˌɪntrəˈdus"
    },
    {
        "word": "relax",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working and rest; to become less tense.",
                "examples": [
                    "I relax at the weekend and never check emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "relaxed",
        "group": "regular",
        "opposite": "work",
        "transcription": "rɪˈlæks"
    },
    {
        "word": "mean",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a particular meaning; to intend.",
                "examples": [
                    "What does this clause in the contract mean?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "meant",
        "group": "irregular",
        "opposite": "nonsense",
        "transcription": "min"
    },
    {
        "word": "follow",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "opposite": "lead",
        "oppositeEmoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "To come after; to obey rules or instructions.",
                "examples": [
                    "Please follow the instructions carefully. He follows the news."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "followed",
        "group": "regular",
        "transcription": "ˈfɑloʊ"
    },
    {
        "word": "grow",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "form": "verb",
        "definitions": [
            {
                "text": "To increase in size or amount; to develop.",
                "examples": [
                    "The company grew by twenty percent last year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "grown",
        "group": "irregular",
        "opposite": "shrink",
        "transcription": "groʊ"
    },
    {
        "word": "become",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
        "form": "verb",
        "definitions": [
            {
                "text": "To start to be something.",
                "examples": [
                    "She became a manager after just two years in the role."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "become",
        "group": "irregular",
        "opposite": "remain",
        "transcription": "bɪˈkəm"
    },
    {
        "word": "choose",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
        "form": "verb",
        "definitions": [
            {
                "text": "To select from options.",
                "examples": [
                    "He chose to work part-time to spend more time with family."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "chose",
        "v3": "chosen",
        "group": "irregular",
        "opposite": "reject",
        "transcription": "ʧuz"
    },
    {
        "word": "begin",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "form": "verb",
        "opposite": "end",
        "oppositeEmoji": "🏁",
        "subtext": "begin a meeting / begin to work",
        "synonyms": [
            "start"
        ],
        "definitions": [
            {
                "text": "To start to do something.",
                "examples": [
                    "We begin the meeting at nine o'clock."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "began",
        "v3": "begun",
        "group": "irregular",
        "transcription": "bɪˈgɪn"
    },
    {
        "word": "end",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "form": "verb",
        "opposite": "begin",
        "oppositeEmoji": "▶️",
        "subtext": "end a class / at the end",
        "synonyms": [
            "finish",
            "stop"
        ],
        "definitions": [
            {
                "text": "To finish; to stop.",
                "examples": [
                    "The class ends at three o'clock."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ended",
        "v3": "ended",
        "group": "regular",
        "transcription": "ɛnd"
    },
    {
        "word": "brush",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪥",
        "form": "verb",
        "subtext": "brush your teeth",
        "synonyms": [
            "hairbrush"
        ],
        "definitions": [
            {
                "text": "To clean something with a brush.",
                "examples": [
                    "I brush my teeth every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "brushed",
        "v3": "brushed",
        "group": "regular",
        "opposite": "mess up",
        "transcription": "brəʃ"
    },
    {
        "word": "ride",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚲",
        "form": "verb",
        "subtext": "ride a bike / ride a horse",
        "definitions": [
            {
                "text": "To travel on a bike or horse.",
                "examples": [
                    "I ride my bike to work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rode",
        "v3": "ridden",
        "group": "irregular",
        "opposite": "walk",
        "transcription": "raɪd"
    },
    {
        "word": "believe",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "believe in / I believe so",
        "synonyms": [
            "think",
            "trust"
        ],
        "definitions": [
            {
                "text": "To think that something is true.",
                "examples": [
                    "I believe you."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "believed",
        "v3": "believed",
        "group": "regular",
        "opposite": "doubt",
        "transcription": "bɪˈliv"
    },
    {
        "word": "prefer",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "form": "verb",
        "subtext": "like better / prefer tea to coffee",
        "definitions": [
            {
                "text": "To like one thing more than another.",
                "examples": [
                    "I prefer tea to coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "preferred",
        "v3": "preferred",
        "group": "regular",
        "opposite": "dislike",
        "transcription": "prɪˈfər"
    },
    {
        "word": "catch",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🧤",
        "form": "verb",
        "subtext": "catch a bus / catch a cold / catch a ball",
        "definitions": [
            {
                "text": "To take hold of something; to get on a bus or train.",
                "examples": [
                    "I need to catch the bus at eight."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "caught",
        "v3": "caught",
        "group": "irregular",
        "opposite": "throw",
        "transcription": "kæʧ"
    },
    {
        "word": "fix",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "form": "verb",
        "subtext": "fix a problem / fix a computer",
        "synonyms": [
            "repair"
        ],
        "definitions": [
            {
                "text": "To repair something that is broken.",
                "examples": [
                    "Can you fix my phone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fixed",
        "v3": "fixed",
        "group": "regular",
        "opposite": "break",
        "transcription": "fɪks"
    },
    {
        "word": "plan",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "form": "verb",
        "subtext": "plan a trip / plan for the future",
        "synonyms": [
            "decide"
        ],
        "definitions": [
            {
                "text": "To decide what you are going to do.",
                "examples": [
                    "We are planning a trip."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "planned",
        "v3": "planned",
        "group": "regular",
        "opposite": "improvise",
        "transcription": "plæn"
    },
    {
        "word": "borrow",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📥",
        "form": "verb",
        "subtext": "take for a short time / borrow a book / borrow money",
        "definitions": [
            {
                "text": "To take something for a short time and then return it.",
                "examples": [
                    "Can I borrow your pen?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "borrowed",
        "v3": "borrowed",
        "group": "regular",
        "opposite": "lend",
        "transcription": "ˈbɑˌroʊ"
    },
    {
        "word": "smell",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "verb",
        "subtext": "smell good / smell the flowers",
        "synonyms": [
            "scent"
        ],
        "definitions": [
            {
                "text": "To notice or recognize something using your nose.",
                "examples": [
                    "I can smell the coffee."
                ]
            }
        ],
        "classification": "both",
        "aspect": "both",
        "v2": "smelled / smelt",
        "v3": "smelled / smelt",
        "group": "both",
        "opposite": "stink",
        "transcription": "smɛl"
    },
    {
        "word": "taste",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "👅",
        "form": "verb",
        "subtext": "taste good / have a taste",
        "synonyms": [
            "flavor"
        ],
        "definitions": [
            {
                "text": "To sense the flavor of something in your mouth.",
                "examples": [
                    "Taste this soup."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "tasted",
        "v3": "tasted",
        "group": "regular",
        "opposite": "swallow",
        "transcription": "teɪst"
    },
    {
        "word": "lie",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "form": "verb",
        "subtext": "lie down / lie on the bed",
        "synonyms": [
            "recline"
        ],
        "definitions": [
            {
                "text": "To be in a horizontal position on a surface.",
                "examples": [
                    "I like to lie on the beach."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lay",
        "v3": "lain",
        "group": "irregular",
        "opposite": "stand",
        "transcription": "laɪ"
    },
    {
        "word": "laugh",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😂",
        "form": "verb",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "subtext": "laugh at / laugh together",
        "synonyms": [
            "chuckle"
        ],
        "definitions": [
            {
                "text": "To make sounds with your voice because you think something is funny.",
                "examples": [
                    "They were laughing at his joke."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "laughed",
        "v3": "laughed",
        "group": "regular",
        "transcription": "læf"
    },
    {
        "word": "worry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "verb",
        "subtext": "worry about / don't worry",
        "synonyms": [
            "fret"
        ],
        "definitions": [
            {
                "text": "To think about problems or unpleasant things that might happen.",
                "examples": [
                    "Don't worry, everything will be fine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "worried",
        "v3": "worried",
        "group": "regular",
        "opposite": "relax",
        "transcription": "ˈwəri"
    },
    {
        "word": "sound",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👂",
        "form": "verb",
        "subtext": "sound like / sound good",
        "synonyms": [
            "seem"
        ],
        "definitions": [
            {
                "text": "To seem like something from what you have heard or read.",
                "examples": [
                    "That sounds like a good idea."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "sounded",
        "v3": "sounded",
        "group": "regular",
        "opposite": "silence",
        "transcription": "saʊnd"
    },
    {
        "word": "spell",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔤",
        "form": "verb",
        "subtext": "spell your name / spell correctly",
        "synonyms": [
            "lettering"
        ],
        "definitions": [
            {
                "text": "To say or write the letters of a word in the correct order.",
                "examples": [
                    "How do you spell your name?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spelled / spelt",
        "v3": "spelled / spelt",
        "group": "irregular",
        "opposite": "misspell",
        "transcription": "spɛl"
    },
    {
        "word": "point",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "☝️",
        "form": "verb",
        "subtext": "point at / to, point to / point at",
        "synonyms": [
            "indicate"
        ],
        "definitions": [
            {
                "text": "To show something by holding out your finger towards it.",
                "examples": [
                    "Point to the window.",
                    "He pointed at the map."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pointed",
        "v3": "pointed",
        "group": "regular",
        "opposite": "hide",
        "transcription": "pɔɪnt"
    },
    {
        "word": "shout",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📢",
        "form": "verb",
        "subtext": "shout at / don't shout",
        "synonyms": [
            "yell"
        ],
        "definitions": [
            {
                "text": "To say something very loudly.",
                "examples": [
                    "Don't shout in the classroom."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shouted",
        "v3": "shouted",
        "group": "regular",
        "opposite": "whisper",
        "transcription": "ʃaʊt"
    },
    {
        "word": "wave",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "verb",
        "subtext": "wave at, wave goodbye / wave hello",
        "synonyms": [
            "greet"
        ],
        "definitions": [
            {
                "text": "To move your hand from side to side in the air to say hello or goodbye.",
                "examples": [
                    "Wave goodbye to your friend."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waved",
        "v3": "waved",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "weɪv"
    },
    {
        "word": "kick",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🦶",
        "form": "verb",
        "subtext": "kick a ball / kick hard",
        "synonyms": [
            "strike"
        ],
        "definitions": [
            {
                "text": "To hit something with your foot.",
                "examples": [
                    "Kick the ball!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kicked",
        "v3": "kicked",
        "group": "regular",
        "opposite": "catch",
        "transcription": "kɪk"
    },
    {
        "word": "throw",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚾",
        "form": "verb",
        "subtext": "throw a ball / throw away",
        "synonyms": [
            "toss"
        ],
        "definitions": [
            {
                "text": "To make something move through the air by pushing it out of your hand.",
                "examples": [
                    "Can you throw the ball to me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "threw",
        "v3": "thrown",
        "group": "irregular",
        "opposite": "catch",
        "transcription": "θroʊ"
    },
    {
        "word": "bounce",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏀",
        "form": "verb",
        "subtext": "bounce a ball",
        "synonyms": [
            "rebound",
            "bouncing"
        ],
        "definitions": [
            {
                "text": "To move up or away after hitting a surface.",
                "examples": [
                    "The ball is bouncing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bounced",
        "v3": "bounced",
        "group": "regular",
        "opposite": "stop",
        "transcription": "baʊns"
    },
    {
        "word": "paint",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "paint a picture",
        "synonyms": [
            "color",
            "painting"
        ],
        "definitions": [
            {
                "text": "To make a picture using paint.",
                "examples": [
                    "I like to paint flowers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "painted",
        "v3": "painted",
        "group": "regular",
        "opposite": "erase",
        "transcription": "peɪnt"
    },
    {
        "word": "hop",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🐇",
        "form": "verb",
        "subtext": "hop around / hop like a rabbit",
        "synonyms": [
            "jump"
        ],
        "definitions": [
            {
                "text": "To jump on one foot.",
                "examples": [
                    "Can you hop like a rabbit?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hopped",
        "v3": "hopped",
        "group": "regular",
        "opposite": "walk",
        "transcription": "hɑp"
    },
    {
        "word": "skip",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏃",
        "form": "verb",
        "subtext": "skip rope",
        "synonyms": [
            "jump",
            "skipping"
        ],
        "definitions": [
            {
                "text": "To move along by jumping from one foot to the other.",
                "examples": [
                    "The children are skipping in the playground."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "skipped",
        "v3": "skipped",
        "group": "regular",
        "opposite": "walk",
        "transcription": "skɪp"
    },
    {
        "word": "count",
        "level": "starter",
        "theme": "numbers_0_9_A1",
        "emoji": "🔢",
        "form": "verb",
        "subtext": "count to ten / count numbers",
        "synonyms": [
            "calculate"
        ],
        "definitions": [
            {
                "text": "To say numbers in order.",
                "examples": [
                    "Can you count from one to ten?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "counted",
        "v3": "counted",
        "group": "regular",
        "opposite": "estimate",
        "transcription": "kaʊnt"
    },
    {
        "word": "tick",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "✅",
        "form": "verb",
        "subtext": "tick the box / tick correctly",
        "synonyms": [
            "check"
        ],
        "definitions": [
            {
                "text": "To put a mark (✓) next to something to show it is correct.",
                "examples": [
                    "Tick the correct answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ticked",
        "v3": "ticked",
        "group": "regular",
        "opposite": "cross",
        "transcription": "tɪk"
    },
    {
        "word": "cross",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "❌",
        "form": "verb",
        "subtext": "cross out / cross the answer",
        "synonyms": [
            "x-mark"
        ],
        "definitions": [
            {
                "text": "To put a mark (X) next to something to show it is wrong.",
                "examples": [
                    "Cross the wrong answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "crossed",
        "v3": "crossed",
        "group": "regular",
        "opposite": "tick",
        "transcription": "krɔs"
    },
    {
        "word": "colour",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🖍️",
        "form": "verb",
        "subtext": "colour the picture / use colours",
        "synonyms": [
            "color"
        ],
        "definitions": [
            {
                "text": "To use a pen or pencil to put colour on a picture.",
                "examples": [
                    "Colour the picture blue."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coloured",
        "v3": "coloured",
        "group": "regular",
        "opposite": "erase",
        "transcription": "ˈkələr"
    },
    {
        "word": "hold",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "hold my hand / hold on",
        "synonyms": [
            "grip"
        ],
        "definitions": [
            {
                "text": "To have or keep something in your hand or arms.",
                "examples": [
                    "Hold the baby carefully.",
                    "She is holding a book."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "held",
        "v3": "held",
        "group": "irregular",
        "opposite": "drop",
        "transcription": "hoʊld"
    },
    {
        "word": "lead",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "form": "verb",
        "subtext": "lead a team / follow the lead",
        "synonyms": [
            "guide",
            "direct"
        ],
        "definitions": [
            {
                "text": "To control a group of people, a country, or a situation.",
                "examples": [
                    "She leads a small team."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "led",
        "v3": "led",
        "group": "irregular",
        "opposite": "follow",
        "transcription": "lɛd"
    },
    {
        "word": "fight",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "fight for / a big fight",
        "synonyms": [
            "battle"
        ],
        "definitions": [
            {
                "text": "To use physical force to try to hurt someone or win something.",
                "examples": [
                    "The two boys are fighting."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fought",
        "v3": "fought",
        "group": "irregular",
        "opposite": "make peace",
        "transcription": "faɪt"
    },
    {
        "word": "hide",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🙈",
        "subtext": "hide and seek / hide from someone / hide something",
        "opposite": "show",
        "oppositeEmoji": "📽️",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something or someone in a place where they cannot be seen or found.",
                "examples": [
                    "He is hiding behind the door."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hid",
        "v3": "hidden",
        "group": "irregular",
        "transcription": "haɪd"
    },
    {
        "word": "seek",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "hide and seek / seek help",
        "synonyms": [
            "look for"
        ],
        "definitions": [
            {
                "text": "To try to find or get something.",
                "examples": [
                    "They are playing hide and seek."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sought",
        "v3": "sought",
        "group": "irregular",
        "opposite": "hide",
        "transcription": "sik"
    },
    {
        "word": "ring",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🔔",
        "form": "verb",
        "subtext": "ring a bell",
        "synonyms": [
            "chime",
            "phone is ringing"
        ],
        "definitions": [
            {
                "text": "To make a sound like a bell.",
                "examples": [
                    "The phone is ringing."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rang",
        "v3": "rung",
        "group": "irregular",
        "opposite": "be silent",
        "transcription": "rɪŋ"
    },
    {
        "word": "text",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📱",
        "form": "verb",
        "subtext": "text someone / send a text",
        "synonyms": [
            "message"
        ],
        "definitions": [
            {
                "text": "To send a message from a mobile phone.",
                "examples": [
                    "Text me when you arrive."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "texted",
        "v3": "texted",
        "group": "regular",
        "opposite": "call",
        "transcription": "tɛkst"
    },
    {
        "word": "whisper",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🤫",
        "form": "verb",
        "subtext": "whisper a secret",
        "synonyms": [
            "murmur",
            "speak softly"
        ],
        "definitions": [
            {
                "text": "To speak very quietly so that other people cannot hear you.",
                "examples": [
                    "She whispered the answer to me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "whispered",
        "v3": "whispered",
        "group": "regular",
        "opposite": "shout",
        "transcription": "ˈwɪspər"
    },
    {
        "word": "touch",
        "level": "starter",
        "theme": "five_senses_A1",
        "emoji": "🫱",
        "form": "verb",
        "subtext": "don't touch / touch screen",
        "synonyms": [
            "feel"
        ],
        "definitions": [
            {
                "text": "To put your hand or another part of your body on something.",
                "examples": [
                    "Don't touch the wet paint!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "touched",
        "v3": "touched",
        "group": "regular",
        "opposite": null,
        "transcription": "təʧ"
    },
    {
        "word": "let",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🔓",
        "subtext": "let someone go / let it be / let someone know",
        "form": "verb",
        "definitions": [
            {
                "text": "To allow something to happen or someone to do something.",
                "examples": [
                    "Let me help you with those bags.",
                    "She let the dog out into the garden."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "let",
        "v3": "let",
        "group": "irregular",
        "opposite": null,
        "transcription": "lɛt"
    },
    {
        "word": "set",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "subtext": "set an alarm / set the table / set a goal",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something in a particular place or position; to establish.",
                "examples": [
                    "I set my alarm for seven o'clock.",
                    "He set the plates on the table."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set",
        "v3": "set",
        "group": "irregular",
        "opposite": null,
        "transcription": "sɛt"
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📧",
        "subtext": "email someone / send an email / reply by email",
        "form": "verb",
        "definitions": [
            {
                "text": "To send a message using the internet.",
                "examples": [
                    "Email me the details.",
                    "I'll email you tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emailed",
        "v3": "emailed",
        "group": "regular",
        "transcription": "iˈmeɪl"
    },
    {
        "word": "phone",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📞",
        "subtext": "phone someone / phone back / on the phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To call someone using a telephone.",
                "examples": [
                    "I'll phone you later.",
                    "He phoned his mother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "phoned",
        "v3": "phoned",
        "group": "regular",
        "opposite": "text",
        "transcription": "foʊn"
    },
    {
        "word": "climb",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🧗",
        "subtext": "climb a mountain / climb a hill / climb stairs / climb up",
        "form": "verb",
        "definitions": [
            {
                "text": "To go up something using your hands and feet.",
                "examples": [
                    "We climbed the hill to see the view.",
                    "The cat climbed the tree."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "climbed",
        "v3": "climbed",
        "group": "regular",
        "opposite": "descend",
        "transcription": "klaɪm"
    },
    {
        "word": "dress",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👗",
        "subtext": "dress well / dress for work",
        "synonyms": [
            "get dressed"
        ],
        "opposite": "undress",
        "oppositeEmoji": "👕",
        "form": "verb",
        "definitions": [
            {
                "text": "To put clothes on yourself or someone else.",
                "examples": [
                    "I get dressed at seven.",
                    "She was dressed in black."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dressed",
        "v3": "dressed",
        "group": "regular",
        "transcription": "drɛs"
    },
    {
        "word": "undress",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👕",
        "subtext": "undress quickly",
        "synonyms": [
            "get undressed"
        ],
        "opposite": "dress",
        "oppositeEmoji": "👗",
        "form": "verb",
        "definitions": [
            {
                "text": "To take clothes off yourself or someone else.",
                "examples": [
                    "He undressed and went to bed.",
                    "Get undressed and have a bath."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "undressed",
        "v3": "undressed",
        "group": "regular",
        "transcription": "ənˈdrɛs"
    },
    {
        "word": "turn on",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "💡",
        "subtext": "turn on the light / turn on the TV / turn on the radio",
        "opposite": "turn off",
        "oppositeEmoji": "🌑",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device start working.",
                "examples": [
                    "Turn on the light, please.",
                    "He turns on his computer at nine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned on",
        "v3": "turned on",
        "group": "regular",
        "transcription": "tərn ɔn"
    },
    {
        "word": "turn off",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌑",
        "subtext": "turn off the light / turn off the computer / turn off your phone",
        "opposite": "turn on",
        "oppositeEmoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device stop working.",
                "examples": [
                    "Don't forget to turn off the lights.",
                    "She turns off her phone during meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned off",
        "v3": "turned off",
        "group": "regular",
        "transcription": "tərn ɔf"
    },
    {
        "word": "welcome",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "👋",
        "form": "verb",
        "subtext": "welcome someone / welcome home",
        "definitions": [
            {
                "text": "To greet someone who has just arrived at a place.",
                "examples": [
                    "We welcomed the guests at the door."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "welcomed",
        "v3": "welcomed",
        "group": "regular",
        "opposite": "reject",
        "transcription": "ˈwɛlkəm"
    },
    {
        "word": "act",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "act in a play / act quickly",
        "definitions": [
            {
                "text": "To perform in a play or movie.",
                "examples": [
                    "He acts in the school play."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acted",
        "v3": "acted",
        "group": "regular",
        "opposite": "be natural",
        "transcription": "ækt"
    },
    {
        "word": "copy",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📄",
        "form": "verb",
        "subtext": "copy a document / copy files",
        "definitions": [
            {
                "text": "To make something that is exactly like another thing.",
                "examples": [
                    "Can you copy this report for me?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "copied",
        "v3": "copied",
        "group": "regular",
        "opposite": "original",
        "transcription": "ˈkɑpi"
    },
    {
        "word": "fill",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🫗",
        "form": "verb",
        "subtext": "fill a glass / fill in a form",
        "definitions": [
            {
                "text": "To make something full.",
                "examples": [
                    "Please fill the glass with water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "filled",
        "v3": "filled",
        "group": "regular",
        "opposite": "empty",
        "transcription": "fɪl"
    },
    {
        "word": "fit",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "verb",
        "subtext": "fit well / does it fit?",
        "definitions": [
            {
                "text": "To be the right size or shape for someone or something.",
                "examples": [
                    "These shoes don't fit me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "fitted",
        "v3": "fitted",
        "group": "regular",
        "opposite": "unfit",
        "transcription": "fɪt"
    },
    {
        "word": "join",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "join a club / join us",
        "definitions": [
            {
                "text": "To become a member of a group or organization.",
                "examples": [
                    "I want to join the tennis club."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joined",
        "v3": "joined",
        "group": "regular",
        "opposite": "leave",
        "transcription": "ʤɔɪn"
    },
    {
        "word": "note",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📝",
        "form": "verb",
        "subtext": "note down / please note",
        "definitions": [
            {
                "text": "To write something down so that you will remember it.",
                "examples": [
                    "Please note the time of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "noted",
        "v3": "noted",
        "group": "regular",
        "opposite": "forget",
        "transcription": "noʊt"
    },
    {
        "word": "pick",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🧺",
        "form": "verb",
        "subtext": "pick flowers / pick up",
        "definitions": [
            {
                "text": "To take flowers, fruit, etc. from the plant where they are growing.",
                "examples": [
                    "They are picking apples in the garden."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "picked",
        "v3": "picked",
        "group": "regular",
        "opposite": "drop",
        "transcription": "pɪk"
    },
    {
        "word": "wish",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🤞",
        "form": "verb",
        "subtext": "wish for / I wish",
        "definitions": [
            {
                "text": "To want something to happen or to be true even though it is unlikely.",
                "examples": [
                    "I wish it was summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wished",
        "v3": "wished",
        "group": "regular",
        "opposite": "fear",
        "transcription": "wɪʃ"
    },
    {
        "word": "collect",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "📦",
        "form": "verb",
        "subtext": "collect things / collect stamps",
        "definitions": [
            {
                "text": "To bring things together from different places.",
                "examples": [
                    "She collects stamps."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collected",
        "v3": "collected",
        "group": "regular",
        "opposite": "scatter",
        "transcription": "kəˈlɛkt"
    },
    {
        "word": "describe",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💬",
        "form": "verb",
        "subtext": "describe something / describe a person",
        "definitions": [
            {
                "text": "To say or write what someone or something is like.",
                "examples": [
                    "Can you describe your house?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "described",
        "v3": "described",
        "group": "regular",
        "opposite": "summarize",
        "transcription": "dɪˈskraɪb"
    },
    {
        "word": "breathe",
        "level": "starter",
        "theme": "health_body_A1",
        "emoji": "🫁",
        "form": "verb",
        "definitions": [
            {
                "text": "To take air into your lungs and send it out again.",
                "examples": [
                    "Breathe deeply."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "breathed",
        "v3": "breathed",
        "group": "regular",
        "subtext": "breathe",
        "synonyms": [
            "inhale",
            "exhale"
        ],
        "transcription": "brið"
    },
    {
        "word": "cough",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "😷",
        "form": "verb",
        "definitions": [
            {
                "text": "To force air out of your lungs with a sudden loud noise.",
                "examples": [
                    "He is coughing because he is ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coughed",
        "v3": "coughed",
        "group": "regular",
        "subtext": "have a cough",
        "transcription": "kɔf"
    },
    {
        "word": "sneeze",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤧",
        "form": "verb",
        "definitions": [
            {
                "text": "To suddenly force air out through your nose and mouth with a loud noise.",
                "examples": [
                    "Bless you! Did you sneeze?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sneezed",
        "v3": "sneezed",
        "group": "regular",
        "subtext": "sneeze",
        "synonyms": [
            "atchoo!"
        ],
        "transcription": "sniz"
    },
    {
        "word": "yawn",
        "level": "starter",
        "theme": "health_body_A1",
        "emoji": "🥱",
        "form": "verb",
        "definitions": [
            {
                "text": "To open your mouth wide and take a deep breath because you are tired.",
                "examples": [
                    "She yawned during the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "yawned",
        "v3": "yawned",
        "group": "regular",
        "subtext": "yawn",
        "synonyms": [
            "feel sleepy"
        ],
        "transcription": "jɔn"
    },
    {
        "word": "explain",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪkˈspleɪn",
        "definitions": [
            {
                "text": "To make something clear or easy to understand by describing or giving information about it.",
                "examples": [
                    "Can you explain this rule?",
                    "The teacher explained the lesson."
                ]
            }
        ],
        "v2": "explained",
        "v3": "explained",
        "classification": "regular",
        "group": "regular",
        "subtext": "explain something to someone"
    },
    {
        "word": "prepare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📝",
        "form": "verb",
        "transcription": "prɪˈpeə(r)",
        "definitions": [
            {
                "text": "To get someone or something ready for something that will happen in the future.",
                "examples": [
                    "I need to prepare for my exam.",
                    "She is preparing dinner."
                ]
            }
        ],
        "v2": "prepared",
        "v3": "prepared",
        "classification": "regular",
        "group": "regular",
        "subtext": "prepare for something"
    },
    {
        "word": "depend",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "dɪˈpend",
        "definitions": [
            {
                "text": "To be decided by or to change according to something else.",
                "examples": [
                    "It depends on the weather.",
                    "Our plans depend on your answer."
                ]
            }
        ],
        "v2": "depended",
        "v3": "depended",
        "classification": "regular",
        "group": "regular",
        "subtext": "depend ON someone/something"
    },
    {
        "word": "belong",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🏠",
        "form": "verb",
        "transcription": "bɪˈlɒŋ",
        "definitions": [
            {
                "text": "To be the property of someone.",
                "examples": [
                    "This book belongs to me.",
                    "Who does this bag belong to?"
                ]
            }
        ],
        "v2": "belonged",
        "v3": "belonged",
        "classification": "regular",
        "group": "regular",
        "subtext": "belong TO someone/something"
    },
    {
        "word": "be",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "be tired / be happy / be at work / be ready",
        "form": "verb",
        "transcription": "biː",
        "definitions": [
            {
                "text": "To exist; to have a quality or state.",
                "examples": [
                    "I am tired.",
                    "She is a doctor.",
                    "We are late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "was / were",
        "v3": "been",
        "group": "irregular",
        "opposite": "become"
    },
    {
        "word": "have",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "transcription": "hæv",
        "definitions": [
            {
                "text": "To possess something; to experience something.",
                "examples": [
                    "I have a job.",
                    "He has a car.",
                    "She has a headache."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "had",
        "group": "irregular",
        "opposite": "need"
    },
    {
        "word": "feel",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "transcription": "fiːl",
        "definitions": [
            {
                "text": "To experience a physical or emotional state.",
                "examples": [
                    "She feels exhausted after a long week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "felt",
        "group": "irregular",
        "opposite": "act"
    },
    {
        "word": "give",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "transcription": "ɡɪv",
        "definitions": [
            {
                "text": "To hand or transfer something to someone.",
                "examples": [
                    "He gives me a lot of work.",
                    "She gives advice."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "given",
        "group": "irregular"
    },
    {
        "word": "take",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "transcription": "teɪk",
        "definitions": [
            {
                "text": "To hold and move something; to use or consume.",
                "examples": [
                    "I take the bus to work.",
                    "She takes medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken",
        "group": "irregular"
    },
    {
        "word": "get",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive, obtain or become.",
                "examples": [
                    "I get a good salary.",
                    "He gets tired quickly.",
                    "She gets a promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "got / gotten",
        "group": "irregular",
        "transcription": "gɪt"
    },
    {
        "word": "put",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To place something in a position.",
                "examples": [
                    "Put your bag here.",
                    "She puts money in the bank."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put",
        "v3": "put",
        "group": "irregular",
        "transcription": "pʊt"
    },
    {
        "word": "make",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "To create or produce something; to cause something.",
                "examples": [
                    "I make coffee in the morning.",
                    "She makes a decision."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "made",
        "group": "irregular",
        "opposite": "destroy",
        "transcription": "meɪk"
    },
    {
        "word": "do",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform an action or activity.",
                "examples": [
                    "I do my work every day.",
                    "She does the shopping."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "did",
        "v3": "done",
        "group": "irregular",
        "opposite": "undo",
        "transcription": "du"
    },
    {
        "word": "use",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything.",
                    "She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used",
        "group": "regular",
        "opposite": "waste",
        "transcription": "juz"
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "opposite": "closed",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not closed; or to start.",
                "examples": [
                    "He opens the office at eight.",
                    "She opens a bank account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "opened",
        "group": "regular",
        "transcription": "ˈoʊpən"
    },
    {
        "word": "close",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not open; or to finish.",
                "examples": [
                    "The office closes at six.",
                    "She closes her laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "closed",
        "group": "regular",
        "transcription": "kloʊz"
    },
    {
        "word": "start",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "opposite": "stop",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin an activity or period.",
                "examples": [
                    "I start work at eight thirty. She starts a new role next month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "started",
        "group": "regular",
        "transcription": "stɑrt"
    },
    {
        "word": "finish",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "opposite": "end",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "To complete something.",
                "examples": [
                    "He finishes work at five. She finishes the report by noon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "finished",
        "group": "regular",
        "transcription": "ˈfɪnɪʃ"
    },
    {
        "word": "help",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "To make it easier for someone to do something.",
                "examples": [
                    "He helps new colleagues understand the systems."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "helped",
        "group": "regular",
        "opposite": "hinder",
        "transcription": "hɛlp"
    },
    {
        "word": "try",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "To attempt to do something; to test something.",
                "examples": [
                    "I always try to reply to all messages within an hour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "tried",
        "group": "regular",
        "opposite": "give up",
        "transcription": "traɪ"
    },
    {
        "word": "show",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "opposite": "hide",
        "oppositeEmoji": "🙈",
        "form": "verb",
        "definitions": [
            {
                "text": "To let someone see or demonstrate something.",
                "examples": [
                    "Can you show me how the system works?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "shown",
        "group": "irregular",
        "transcription": "ʃoʊ"
    },
    {
        "word": "find",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "To discover or locate something.",
                "examples": [
                    "I find the work interesting.",
                    "She found a new job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "found",
        "group": "irregular",
        "transcription": "faɪnd"
    },
    {
        "word": "keep",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue having or doing something.",
                "examples": [
                    "Keep the receipt.",
                    "She keeps her phone on all day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "kept",
        "v3": "kept",
        "group": "irregular",
        "opposite": "give away",
        "transcription": "kip"
    },
    {
        "word": "lose",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "opposite": "win",
        "oppositeEmoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "To no longer have something.",
                "examples": [
                    "I lost my keys.",
                    "She lost her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "lost",
        "group": "irregular",
        "transcription": "luz"
    },
    {
        "word": "cut",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "To divide with something sharp; to reduce.",
                "examples": [
                    "She cuts her lunch break short.",
                    "It cuts costs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "cut",
        "group": "irregular",
        "opposite": "join",
        "transcription": "kət"
    },
    {
        "word": "turn",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "To move in a direction; to change state.",
                "examples": [
                    "Turn left at the office.",
                    "She turns off the light."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "turned",
        "group": "regular",
        "opposite": "straighten",
        "transcription": "tərn"
    },
    {
        "word": "bring",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "To carry something to a place.",
                "examples": [
                    "Bring your ID to the interview.",
                    "He brings lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "brought",
        "group": "irregular",
        "transcription": "brɪŋ"
    },
    {
        "word": "say",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "To express something in words.",
                "examples": [
                    "She says hello every morning.",
                    "He says it is difficult."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "said",
        "group": "irregular",
        "opposite": "listen",
        "transcription": "seɪ"
    },
    {
        "word": "tell",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "To give information or instructions to someone.",
                "examples": [
                    "She tells the team about changes before they happen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "told",
        "group": "irregular",
        "opposite": "ask",
        "transcription": "tɛl"
    },
    {
        "word": "ask",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "ask for / about, ask a question / ask for help / ask about / ask someone",
        "opposite": "answer",
        "oppositeEmoji": "📞",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question or make a request.",
                "examples": [
                    "She asks for feedback after every presentation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked",
        "group": "regular",
        "transcription": "æsk"
    },
    {
        "word": "speak",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "speak to / with, speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To say words; to communicate verbally.",
                "examples": [
                    "He speaks French.",
                    "She speaks to her manager every day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "spoken",
        "group": "irregular",
        "opposite": "be silent",
        "transcription": "spik"
    },
    {
        "word": "talk",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "talk to / about, talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "To communicate by speaking.",
                "examples": [
                    "He talks to his manager about the problem."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "talked",
        "group": "regular",
        "opposite": "listen",
        "transcription": "tɔk"
    },
    {
        "word": "call",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning before checking emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called",
        "group": "regular",
        "opposite": "hang up",
        "transcription": "kɔl"
    },
    {
        "word": "write",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "write to, write an email / write a report / write a letter / write notes",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To put words on paper or screen.",
                "examples": [
                    "I write emails all day.",
                    "She writes a report every Friday."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "written",
        "group": "irregular",
        "transcription": "raɪt"
    },
    {
        "word": "read",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "To look at and understand written words.",
                "examples": [
                    "She reads the news every morning.",
                    "He reads contracts."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "read",
        "group": "irregular",
        "transcription": "rɛd"
    },
    {
        "word": "listen",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay attention to sounds or speech.",
                "examples": [
                    "I listen to podcasts at work.",
                    "She listens carefully."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "listened",
        "group": "regular",
        "opposite": "say",
        "transcription": "ˈlɪsən"
    },
    {
        "word": "answer",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "opposite": "ask",
        "oppositeEmoji": "❓",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a question or communication.",
                "examples": [
                    "He answers all emails quickly.",
                    "She answered the phone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "answered",
        "group": "regular",
        "transcription": "ˈænsər"
    },
    {
        "word": "repeat",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something again.",
                "examples": [
                    "Please repeat that.",
                    "He repeated the instruction twice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "repeated",
        "group": "regular",
        "opposite": "change",
        "transcription": "rɪˈpit"
    },
    {
        "word": "go",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "opposite": "come",
        "oppositeEmoji": "🏃‍♂️",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by bus.",
                    "She goes to the doctor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone",
        "group": "irregular",
        "transcription": "ɡəʊ"
    },
    {
        "word": "come",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place or person.",
                "examples": [
                    "He comes to the office at nine.",
                    "She comes home late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come",
        "group": "irregular",
        "transcription": "kʌm"
    },
    {
        "word": "walk",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "opposite": "run",
        "oppositeEmoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal pace.",
                "examples": [
                    "He walks to work every day.",
                    "She walks during her lunch break."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked",
        "group": "regular",
        "transcription": "wɔk"
    },
    {
        "word": "drive",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To operate a vehicle.",
                "examples": [
                    "She drives to work.",
                    "He drives a company car."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "driven",
        "group": "irregular",
        "opposite": "walk",
        "transcription": "draɪv"
    },
    {
        "word": "fly",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel by plane.",
                "examples": [
                    "She flies to Paris for meetings.",
                    "He hates flying."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "flown",
        "group": "irregular",
        "opposite": "land",
        "transcription": "flaɪ"
    },
    {
        "word": "arrive",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "arrive at / in, arrive at work / arrive late / arrive on time / arrive home",
        "opposite": "leave",
        "oppositeEmoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "To reach a destination.",
                "examples": [
                    "He arrives at the office at nine. The train arrives on time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "arrived",
        "group": "regular",
        "transcription": "əraɪv"
    },
    {
        "word": "leave",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "opposite": "arrive",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "To go away from a place.",
                "examples": [
                    "I leave the house at eight fifteen. She leaves work at six."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "left",
        "group": "irregular",
        "transcription": "liv"
    },
    {
        "word": "move",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to live or work in a different place.",
                "examples": [
                    "They moved to a larger flat when they had children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved",
        "group": "regular",
        "opposite": "stay",
        "transcription": "muv"
    },
    {
        "word": "return",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "To come or go back to a place.",
                "examples": [
                    "He returns from a trip on Friday.",
                    "She returned the call."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "returned",
        "group": "regular",
        "opposite": "leave",
        "transcription": "rɪˈtərn"
    },
    {
        "word": "travel",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another, especially far.",
                "examples": [
                    "She travels for work three times a month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "traveled",
        "group": "regular",
        "opposite": "stay",
        "transcription": "ˈtrævəl"
    },
    {
        "word": "eat",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in your mouth and swallow it.",
                "examples": [
                    "We eat dinner at seven.",
                    "He eats lunch at his desk."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "eaten",
        "group": "irregular",
        "transcription": "it"
    },
    {
        "word": "drink",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "To take liquid into your mouth and swallow it.",
                "examples": [
                    "She drinks coffee every morning.",
                    "I drink water."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "drunk",
        "group": "irregular",
        "transcription": "drɪŋk"
    },
    {
        "word": "sleep",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed in a natural state of unconsciousness.",
                "examples": [
                    "He sleeps seven hours a night.",
                    "I sleep badly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept",
        "group": "irregular",
        "transcription": "slip"
    },
    {
        "word": "cook",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To prepare food by heating it.",
                "examples": [
                    "She cooks dinner every evening. I do not cook — I order food."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "cooked",
        "group": "regular",
        "opposite": "eat",
        "transcription": "kʊk"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean the flat every Saturday. He cleans his desk every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "cleaned",
        "group": "regular",
        "opposite": "dirty",
        "transcription": "klin"
    },
    {
        "word": "wear",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "To have clothing or accessories on your body.",
                "examples": [
                    "She wears a suit to work.",
                    "He wears glasses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "worn",
        "group": "irregular",
        "opposite": "undress",
        "transcription": "wɛr"
    },
    {
        "word": "wash",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "To clean something with water.",
                "examples": [
                    "He washes his car every Sunday.",
                    "Wash your hands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "washed",
        "v3": "washed",
        "group": "regular",
        "opposite": "dirty",
        "transcription": "wɑʃ"
    },
    {
        "word": "buy",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something in exchange for money.",
                "examples": [
                    "She buys food online.",
                    "He wants to buy a flat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "bought",
        "group": "irregular",
        "transcription": "baɪ"
    },
    {
        "word": "pay",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pay for, pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money in exchange for something.",
                "examples": [
                    "I pay my bills by direct debit."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paid",
        "group": "irregular",
        "opposite": "receive",
        "transcription": "peɪ"
    },
    {
        "word": "spend",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "opposite": "save",
        "oppositeEmoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To use money to pay for things.",
                "examples": [
                    "He spends too much money on takeaway food."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "spent",
        "group": "irregular",
        "transcription": "spɛnd"
    },
    {
        "word": "save",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep money rather than spending it.",
                "examples": [
                    "She saves a hundred euros every month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "saved",
        "group": "regular",
        "transcription": "seɪv"
    },
    {
        "word": "work",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "opposite": "rest",
        "oppositeEmoji": "🛋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do tasks as part of a job.",
                "examples": [
                    "She works from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "worked",
        "group": "regular",
        "transcription": "wərk"
    },
    {
        "word": "live",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre.",
                    "We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived",
        "group": "regular",
        "transcription": "lɪv"
    },
    {
        "word": "think",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "think about / of, think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a belief or opinion; to use the mind.",
                "examples": [
                    "I think it is a good idea.",
                    "She thinks about her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "thought",
        "group": "irregular",
        "opposite": "feel",
        "transcription": "θɪŋk"
    },
    {
        "word": "know",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information or awareness about something.",
                "examples": [
                    "I know his name.",
                    "She knows the answer.",
                    "Do you know him?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "known",
        "group": "irregular",
        "opposite": "wonder",
        "transcription": "noʊ"
    },
    {
        "word": "want",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee.",
                    "She wants a better job.",
                    "He wants to retire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted",
        "group": "regular",
        "opposite": "refuse",
        "transcription": "wɔnt"
    },
    {
        "word": "need",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something; to feel that something is necessary.",
                "examples": [
                    "I need a break.",
                    "She needs help.",
                    "We need more time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "needed",
        "group": "regular",
        "opposite": "have",
        "transcription": "nid"
    },
    {
        "word": "like",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "opposite": null,
        "oppositeEmoji": "👎",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant; to enjoy.",
                "examples": [
                    "I like my job.",
                    "She likes cooking.",
                    "He likes coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked",
        "group": "regular",
        "transcription": "laɪk"
    },
    {
        "word": "dislike",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "👎",
        "subtext": "not like / dislike doing",
        "opposite": "prefer",
        "oppositeEmoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "To not like someone or something.",
                "examples": [
                    "I dislike loud music."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disliked",
        "v3": "disliked",
        "group": "regular",
        "transcription": "dɪsˈlaɪk"
    },
    {
        "word": "love",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "opposite": "hate",
        "oppositeEmoji": "😡",
        "form": "verb",
        "definitions": [
            {
                "text": "To have strong affection for; to enjoy greatly.",
                "examples": [
                    "She loves her job.",
                    "He loves travelling for work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "loved",
        "group": "regular",
        "transcription": "ləv"
    },
    {
        "word": "hate",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "opposite": "love",
        "oppositeEmoji": "❤️",
        "form": "verb",
        "definitions": [
            {
                "text": "To strongly dislike.",
                "examples": [
                    "He hates commuting by bus.",
                    "She hates long meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "hated",
        "group": "regular",
        "transcription": "heɪt"
    },
    {
        "word": "hope",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "To wish for something to happen.",
                "examples": [
                    "I hope to get a promotion this year.",
                    "She hopes for better pay."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped",
        "group": "regular",
        "opposite": "fear",
        "transcription": "hoʊp"
    },
    {
        "word": "remember",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "opposite": "forget",
        "oppositeEmoji": "🤔",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a memory of; to not forget.",
                "examples": [
                    "Please remember the deadline.",
                    "She remembers every client."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "remembered",
        "group": "regular",
        "transcription": "rɪˈmɛmbər"
    },
    {
        "word": "forget",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "opposite": "remember",
        "oppositeEmoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to remember.",
                "examples": [
                    "Don't forget the meeting.",
                    "He always forgets passwords."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "forgotten",
        "group": "irregular",
        "transcription": "fərˈgɛt"
    },
    {
        "word": "understand",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To grasp the meaning of something.",
                "examples": [
                    "I understand the contract.",
                    "She understands French."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "understood",
        "group": "irregular",
        "opposite": "misunderstand",
        "transcription": "ˌəndərˈstænd"
    },
    {
        "word": "decide",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / hard to decide",
        "synonyms": [
            "make a decision"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make a choice.",
                "examples": [
                    "She decided to change careers.",
                    "He decides quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "decided",
        "group": "regular",
        "opposite": "hesitate",
        "transcription": "ˌdɪˈsaɪd"
    },
    {
        "word": "enjoy",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "To take pleasure from something.",
                "examples": [
                    "She really enjoys working from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "enjoyed",
        "group": "regular",
        "opposite": "hate",
        "transcription": "ˌɛnˈʤɔɪ"
    },
    {
        "word": "see",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To notice or perceive with the eyes.",
                "examples": [
                    "I see my doctor tomorrow.",
                    "She sees the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "seen",
        "group": "irregular",
        "opposite": "blind",
        "transcription": "si"
    },
    {
        "word": "hear",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To perceive sound through the ears.",
                "examples": [
                    "I hear the alarm every morning.",
                    "Can you hear me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "heard",
        "group": "irregular",
        "opposite": "ignore",
        "transcription": "hir"
    },
    {
        "word": "wake up",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "To stop sleeping; to become conscious after sleep.",
                "examples": [
                    "I wake up at six thirty every morning."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "woken up",
        "group": "irregular",
        "transcription": "weɪk əp"
    },
    {
        "word": "watch",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "She watches the market news every morning before work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "watched",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "wɔʧ"
    },
    {
        "word": "look",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "look at / for, look at / look for / look like / look happy",
        "form": "verb",
        "definitions": [
            {
                "text": "To direct your eyes toward something.",
                "examples": [
                    "Look at this photo.",
                    "He is looking for his keys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "looked",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "lʊk"
    },
    {
        "word": "play",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in a game or sport; to produce music.",
                "examples": [
                    "He plays football at the weekend to de-stress."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played",
        "group": "regular",
        "opposite": "work",
        "transcription": "pleɪ"
    },
    {
        "word": "run",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
        "opposite": "walk",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To move very fast on your legs.",
                "examples": [
                    "I run in the park.",
                    "He runs to catch the bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "run",
        "group": "irregular",
        "transcription": "rən"
    },
    {
        "word": "sit",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or take a seated position.",
                "examples": [
                    "He sits at his desk for eight hours a day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "sat",
        "group": "irregular",
        "transcription": "sɪt"
    },
    {
        "word": "stand",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or rise to an upright position.",
                "examples": [
                    "She stands when she presents to keep her energy up."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "stood",
        "group": "irregular",
        "transcription": "stænd"
    },
    {
        "word": "meet",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To come together with someone, especially for a planned reason.",
                "examples": [
                    "We meet every Monday to discuss the week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "met",
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "irregular",
        "opposite": null,
        "transcription": "mit"
    },
    {
        "word": "learn",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
        "opposite": "teach",
        "oppositeEmoji": "👨‍🏫",
        "form": "verb",
        "definitions": [
            {
                "text": "To gain knowledge or skill.",
                "examples": [
                    "She is learning Spanish for her new job abroad."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "learned / learnt",
        "group": "both",
        "transcription": "lərn"
    },
    {
        "word": "change",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
        "form": "verb",
        "definitions": [
            {
                "text": "To become different; to make something different.",
                "examples": [
                    "She changed jobs twice in three years. Things change fast."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "changed",
        "group": "regular",
        "opposite": "stay",
        "transcription": "ʧeɪnʤ"
    },
    {
        "word": "stop",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "To end an activity or movement.",
                "examples": [
                    "She stopped taking the bus and cycles to work now."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "stopped",
        "group": "regular",
        "transcription": "stɑp"
    },
    {
        "word": "add",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "add some sugar / add to / add up / add a comment",
        "opposite": "subtract",
        "oppositeEmoji": "➖",
        "form": "verb",
        "definitions": [
            {
                "text": "To put things together to make a larger group.",
                "examples": [
                    "Add some sugar to the tea.",
                    "What is five plus five?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "added",
        "group": "regular",
        "transcription": "æd"
    },
    {
        "word": "subtract",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➖",
        "subtext": "subtract from",
        "synonyms": [
            "minus"
        ],
        "opposite": "add",
        "oppositeEmoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "To take a number or amount away from another number or amount.",
                "examples": [
                    "If you subtract five from ten, you get five."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subtracted",
        "v3": "subtracted",
        "group": "regular",
        "transcription": "səbˈtrækt"
    },
    {
        "word": "win",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the best in a game or competition.",
                "examples": [
                    "We want to win the game."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "won",
        "group": "irregular",
        "transcription": "wɪn"
    },
    {
        "word": "wait",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "To stay in a place until something happens.",
                "examples": [
                    "He waited twenty minutes for the meeting to start."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "waited",
        "group": "regular",
        "opposite": "act",
        "transcription": "weɪt"
    },
    {
        "word": "die",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop living.",
                "examples": [
                    "Plants die without water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "died",
        "group": "regular",
        "transcription": "daɪ"
    },
    {
        "word": "send",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "opposite": "receive",
        "oppositeEmoji": "📩",
        "definitions": [
            {
                "text": "To transmit something to someone, especially electronically.",
                "examples": [
                    "She sends twenty emails before lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "sent",
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "irregular",
        "transcription": "sɛnd"
    },
    {
        "word": "stay",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
        "opposite": "leave",
        "oppositeEmoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue to be in a place.",
                "examples": [
                    "I stay at home on Sundays.",
                    "We are staying in a hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "stayed",
        "group": "regular",
        "transcription": "steɪ"
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
        "opposite": "rise",
        "oppositeEmoji": "🌅",
        "form": "verb",
        "definitions": [
            {
                "text": "To move down toward the ground.",
                "examples": [
                    "Leaves fall in autumn.",
                    "Be careful, don't fall."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "fallen",
        "group": "irregular",
        "transcription": "fɔl"
    },
    {
        "word": "rise",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🌅",
        "subtext": "rise up / sun rise / price rise",
        "opposite": "fall",
        "oppositeEmoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "To move upwards; to increase in amount or level.",
                "examples": [
                    "The sun rises in the east.",
                    "Prices are rising every year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rose",
        "v3": "risen",
        "group": "irregular",
        "transcription": "raɪz"
    },
    {
        "word": "pass",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
        "opposite": "fail",
        "oppositeEmoji": "❌",
        "form": "verb",
        "definitions": [
            {
                "text": "To go past something or to succeed in an exam.",
                "examples": [
                    "I pass the park on my way home.",
                    "I hope I pass the test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "passed",
        "group": "regular",
        "transcription": "pæs"
    },
    {
        "word": "sell",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "sell products / sell online / sell at the market",
        "synonyms": [
            "best seller"
        ],
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To give something to someone for money.",
                "examples": [
                    "They sell fruit at the market."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "sold",
        "group": "irregular",
        "transcription": "sɛl"
    },
    {
        "word": "pull",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something toward you.",
                "examples": [
                    "Pull the door to open it."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "pulled",
        "group": "regular",
        "transcription": "pʊl"
    },
    {
        "word": "push",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something away from you.",
                "examples": [
                    "Push the button.",
                    "I push the shopping cart."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "pushed",
        "group": "regular",
        "transcription": "pʊʃ"
    },
    {
        "word": "carry",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and take something with you.",
                "examples": [
                    "I carry my laptop and notes to every meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "carried",
        "group": "regular",
        "opposite": "drop",
        "transcription": "ˈkɛri"
    },
    {
        "word": "break",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "break the glass / break a law / take a break / break down",
        "form": "verb",
        "definitions": [
            {
                "text": "To separate something into two or more pieces.",
                "examples": [
                    "Don't break the glass.",
                    "He broke his leg."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "broke",
        "v3": "broken",
        "group": "irregular",
        "opposite": "fix",
        "transcription": "breɪk"
    },
    {
        "word": "receive",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
        "opposite": "send",
        "oppositeEmoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something that someone gave or sent to you.",
                "examples": [
                    "I receive a lot of mail.",
                    "She received a gift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "received",
        "group": "regular",
        "transcription": "rɪˈsiv"
    },
    {
        "word": "agree",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
        "opposite": "disagree",
        "oppositeEmoji": "👎",
        "form": "verb",
        "definitions": [
            {
                "text": "To have the same opinion as someone.",
                "examples": [
                    "I agree with you.",
                    "We agree on the plan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "agreed",
        "group": "regular",
        "transcription": "əˈgri"
    },
    {
        "word": "draw",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn",
        "group": "irregular",
        "opposite": null,
        "transcription": "drɔ"
    },
    {
        "word": "share",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a part of something to others.",
                "examples": [
                    "Let's share the pizza.",
                    "I share a room with my brother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared",
        "group": "regular",
        "opposite": "keep",
        "transcription": "ʃɛr"
    },
    {
        "word": "smile",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a happy expression with your mouth.",
                "examples": [
                    "She has a beautiful smile.",
                    "Smile for the camera."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "smiled",
        "group": "regular",
        "transcription": "smaɪl"
    },
    {
        "word": "cry",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "cry for help / cry out / cry about something",
        "synonyms": [
            "start crying"
        ],
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "To produce tears because you are sad or in pain.",
                "examples": [
                    "The baby is crying.",
                    "Don't cry."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "cried",
        "group": "regular",
        "transcription": "kraɪ"
    },
    {
        "word": "dance",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "dance to music / dance together / slow dance",
        "synonyms": [
            "go dancing"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "I love to dance.",
                    "They are dancing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced",
        "group": "regular",
        "opposite": "sit",
        "transcription": "dæns"
    },
    {
        "word": "sing",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well",
        "synonyms": [
            "lead singer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "I like to sing in the shower.",
                    "She sings very well."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung",
        "group": "irregular",
        "opposite": "be quiet",
        "transcription": "sɪŋ"
    },
    {
        "word": "jump",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
        "form": "verb",
        "definitions": [
            {
                "text": "To push yourself off the ground with your legs.",
                "examples": [
                    "Can you jump high?",
                    "The cat jumped onto the table."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "jumped",
        "group": "regular",
        "opposite": "fall",
        "transcription": "ʤəmp"
    },
    {
        "word": "swim",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "swim across / swim laps / swim well",
        "synonyms": [
            "go swimming"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move through water using your arms and legs.",
                "examples": [
                    "I swim every morning.",
                    "Can you swim?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "swum",
        "group": "irregular",
        "opposite": "sink",
        "transcription": "swɪm"
    },
    {
        "word": "study",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "study English / study for an exam / study hard / self-study",
        "form": "verb",
        "definitions": [
            {
                "text": "To read and practise to gain knowledge.",
                "examples": [
                    "He is studying for a professional qualification."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studied",
        "group": "regular",
        "opposite": "play",
        "transcription": "ˈstədi"
    },
    {
        "word": "teach",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
        "form": "verb",
        "definitions": [
            {
                "text": "To give instruction in a subject.",
                "examples": [
                    "She teaches communication skills to senior managers."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "taught",
        "group": "irregular",
        "opposite": "learn",
        "transcription": "tiʧ"
    },
    {
        "word": "rent",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay money to use property belonging to someone else.",
                "examples": [
                    "They rent a two-bedroom flat near the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented",
        "group": "regular",
        "opposite": "own",
        "transcription": "rɛnt"
    },
    {
        "word": "exercise",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity for health and fitness.",
                "examples": [
                    "He exercises four times a week at the gym."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "regular",
        "opposite": "rest",
        "transcription": "ˈɛksərˌsaɪz"
    },
    {
        "word": "cost",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a price of.",
                "examples": [
                    "The flat costs twelve hundred euros a month."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "cost",
        "subtext": "cost a lot / cost money / cost too much / cost less",
        "group": "irregular",
        "transcription": "kɔst"
    },
    {
        "word": "invite",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to an event or place.",
                "examples": [
                    "They invited all their colleagues to the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "regular",
        "opposite": "reject",
        "transcription": "ˌɪnˈvaɪt"
    },
    {
        "word": "get up",
        "definitions": [
            {
                "text": "To rise from bed after waking.",
                "examples": [
                    "He gets up at seven and makes coffee immediately."
                ]
            }
        ],
        "subtext": "get up early / get up late / get up quickly",
        "classification": "irregular",
        "aspect": "action",
        "v2": "got up",
        "v3": "got up",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "gɪt əp"
    },
    {
        "word": "have breakfast",
        "definitions": [
            {
                "text": "To eat the morning meal.",
                "examples": [
                    "She always has breakfast before leaving the house."
                ]
            }
        ],
        "subtext": "have breakfast at home / have a quick breakfast",
        "synonyms": [
            "skip breakfast"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "had breakfast",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "hæv ˈbrɛkfəst"
    },
    {
        "word": "come back",
        "definitions": [
            {
                "text": "To return to a place.",
                "examples": [
                    "She comes back from lunch at two. He comes back home tired."
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "came back",
        "v3": "come back",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "kəm bæk"
    },
    {
        "word": "go to bed",
        "definitions": [
            {
                "text": "To get into bed in order to sleep.",
                "examples": [
                    "They go to bed at eleven every night."
                ]
            }
        ],
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "irregular",
        "aspect": "action",
        "v2": "went to bed",
        "v3": "gone to bed",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": null,
        "transcription": "goʊ tɪ bɛd"
    },
    {
        "word": "check",
        "definitions": [
            {
                "text": "To examine or verify something.",
                "examples": [
                    "I check my emails first thing every morning."
                ]
            }
        ],
        "subtext": "check emails / check messages / check a document / check the time",
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "checked",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "ʧɛk"
    },
    {
        "word": "unpack",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "👜",
        "subtext": "unpack a suitcase",
        "opposite": "pack",
        "oppositeEmoji": "🎒",
        "form": "verb",
        "definitions": [
            {
                "text": "To take things out of a suitcase or bag.",
                "examples": [
                    "I need to unpack my things."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "unpacked",
        "v3": "unpacked",
        "group": "regular",
        "transcription": "ənˈpæk"
    },
    {
        "word": "reply",
        "definitions": [
            {
                "text": "To respond to a message or question.",
                "examples": [
                    "He always replies to emails the same day."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "replied",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "rɪˈplaɪ"
    },
    {
        "word": "present",
        "definitions": [
            {
                "text": "To show or explain something to a group.",
                "examples": [
                    "She presents the results every Friday afternoon."
                ]
            }
        ],
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "presented",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "hide",
        "transcription": "ˈprɛzənt"
    },
    {
        "word": "attend",
        "definitions": [
            {
                "text": "To go to an event or meeting.",
                "examples": [
                    "I attend a management meeting every Monday."
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "attended",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "miss",
        "transcription": "əˈtɛnd"
    },
    {
        "word": "manage",
        "definitions": [
            {
                "text": "To be in charge of people or a situation.",
                "examples": [
                    "She manages a team of eight people."
                ]
            }
        ],
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "managed",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "follow",
        "transcription": "ˈmænɪʤ"
    },
    {
        "word": "earn",
        "definitions": [
            {
                "text": "To receive money for work done.",
                "examples": [
                    "She earns a good salary as a project manager."
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "earned",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "spend",
        "transcription": "ərn"
    },
    {
        "word": "visit",
        "definitions": [
            {
                "text": "To go to see a person or place.",
                "examples": [
                    "She visits her parents every second weekend."
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "visited",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "leave",
        "transcription": "ˈvɪzɪt"
    },
    {
        "word": "celebrate",
        "definitions": [
            {
                "text": "To do something enjoyable for a special occasion.",
                "examples": [
                    "They celebrate every work anniversary together."
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "celebrated",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "mourn",
        "transcription": "ˈsɛləˌbreɪt"
    },
    {
        "word": "hurt",
        "definitions": [
            {
                "text": "To cause pain; or to feel pain.",
                "examples": [
                    "My back hurts after sitting all day."
                ]
            }
        ],
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "hurt",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "opposite": "heal",
        "transcription": "hərt"
    },
    {
        "word": "rest",
        "definitions": [
            {
                "text": "To stop working and relax to recover energy.",
                "examples": [
                    "He rests for an hour after lunch every day."
                ]
            }
        ],
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "rested",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "exercise",
        "transcription": "rɛst"
    },
    {
        "word": "book",
        "definitions": [
            {
                "text": "To reserve a place, ticket or service in advance.",
                "examples": [
                    "I always book hotels online."
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "booked",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "cancel",
        "transcription": "bʊk"
    },
    {
        "word": "pack",
        "definitions": [
            {
                "text": "To put items into a bag or case for a journey.",
                "examples": [
                    "He packs his bag the night before a trip."
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "opposite": "unpack",
        "oppositeEmoji": "👜",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "packed",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "transcription": "pæk"
    },
    {
        "word": "cancel",
        "definitions": [
            {
                "text": "To decide that something planned will not happen.",
                "examples": [
                    "She had to cancel her flight due to illness."
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "cancelled",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "book",
        "transcription": "ˈkænsəl"
    },
    {
        "word": "miss",
        "definitions": [
            {
                "text": "To fail to catch a transport connection; or to feel sad about absence.",
                "examples": [
                    "He missed his train and had to wait an hour."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "missed",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "opposite": "attend",
        "transcription": "mɪs"
    },
    {
        "word": "order",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "To request something formally, especially food or goods.",
                "examples": [
                    "I always order lunch from the same place near the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "ordered",
        "group": "regular",
        "opposite": "deliver",
        "transcription": "ˈɔrdər"
    },
    {
        "word": "thank",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "To express gratitude to someone.",
                "examples": [
                    "He thanked the team for their hard work on the project."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "thanked",
        "group": "regular",
        "opposite": "complain",
        "transcription": "θæŋk"
    },
    {
        "word": "introduce",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "To present someone to another person.",
                "examples": [
                    "She introduced herself at the start of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "introduced",
        "group": "regular",
        "opposite": "hide",
        "transcription": "ˌɪntrəˈdus"
    },
    {
        "word": "relax",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working and rest; to become less tense.",
                "examples": [
                    "I relax at the weekend and never check emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "relaxed",
        "group": "regular",
        "opposite": "work",
        "transcription": "rɪˈlæks"
    },
    {
        "word": "mean",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a particular meaning; to intend.",
                "examples": [
                    "What does this clause in the contract mean?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "meant",
        "group": "irregular",
        "opposite": "nonsense",
        "transcription": "min"
    },
    {
        "word": "follow",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "opposite": "lead",
        "oppositeEmoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "To come after; to obey rules or instructions.",
                "examples": [
                    "Please follow the instructions carefully. He follows the news."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "followed",
        "group": "regular",
        "transcription": "ˈfɑloʊ"
    },
    {
        "word": "grow",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "form": "verb",
        "definitions": [
            {
                "text": "To increase in size or amount; to develop.",
                "examples": [
                    "The company grew by twenty percent last year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "grown",
        "group": "irregular",
        "opposite": "shrink",
        "transcription": "groʊ"
    },
    {
        "word": "become",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
        "form": "verb",
        "definitions": [
            {
                "text": "To start to be something.",
                "examples": [
                    "She became a manager after just two years in the role."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "become",
        "group": "irregular",
        "opposite": "remain",
        "transcription": "bɪˈkəm"
    },
    {
        "word": "choose",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
        "form": "verb",
        "definitions": [
            {
                "text": "To select from options.",
                "examples": [
                    "He chose to work part-time to spend more time with family."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "chose",
        "v3": "chosen",
        "group": "irregular",
        "opposite": "reject",
        "transcription": "ʧuz"
    },
    {
        "word": "begin",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "form": "verb",
        "opposite": "end",
        "oppositeEmoji": "🏁",
        "subtext": "begin a meeting / begin to work",
        "synonyms": [
            "start"
        ],
        "definitions": [
            {
                "text": "To start to do something.",
                "examples": [
                    "We begin the meeting at nine o'clock."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "began",
        "v3": "begun",
        "group": "irregular",
        "transcription": "bɪˈgɪn"
    },
    {
        "word": "end",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "form": "verb",
        "opposite": "begin",
        "oppositeEmoji": "▶️",
        "subtext": "end a class / at the end",
        "synonyms": [
            "finish",
            "stop"
        ],
        "definitions": [
            {
                "text": "To finish; to stop.",
                "examples": [
                    "The class ends at three o'clock."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ended",
        "v3": "ended",
        "group": "regular",
        "transcription": "ɛnd"
    },
    {
        "word": "brush",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪥",
        "form": "verb",
        "subtext": "brush your teeth",
        "synonyms": [
            "hairbrush"
        ],
        "definitions": [
            {
                "text": "To clean something with a brush.",
                "examples": [
                    "I brush my teeth every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "brushed",
        "v3": "brushed",
        "group": "regular",
        "opposite": "mess up",
        "transcription": "brəʃ"
    },
    {
        "word": "ride",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚲",
        "form": "verb",
        "subtext": "ride a bike / ride a horse",
        "definitions": [
            {
                "text": "To travel on a bike or horse.",
                "examples": [
                    "I ride my bike to work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rode",
        "v3": "ridden",
        "group": "irregular",
        "opposite": "walk",
        "transcription": "raɪd"
    },
    {
        "word": "believe",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "believe in / I believe so",
        "synonyms": [
            "think",
            "trust"
        ],
        "definitions": [
            {
                "text": "To think that something is true.",
                "examples": [
                    "I believe you."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "believed",
        "v3": "believed",
        "group": "regular",
        "opposite": "doubt",
        "transcription": "bɪˈliv"
    },
    {
        "word": "prefer",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "form": "verb",
        "subtext": "like better / prefer tea to coffee",
        "definitions": [
            {
                "text": "To like one thing more than another.",
                "examples": [
                    "I prefer tea to coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "preferred",
        "v3": "preferred",
        "group": "regular",
        "opposite": "dislike",
        "transcription": "prɪˈfər"
    },
    {
        "word": "catch",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🧤",
        "form": "verb",
        "subtext": "catch a bus / catch a cold / catch a ball",
        "definitions": [
            {
                "text": "To take hold of something; to get on a bus or train.",
                "examples": [
                    "I need to catch the bus at eight."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "caught",
        "v3": "caught",
        "group": "irregular",
        "opposite": "throw",
        "transcription": "kæʧ"
    },
    {
        "word": "fix",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "form": "verb",
        "subtext": "fix a problem / fix a computer",
        "synonyms": [
            "repair"
        ],
        "definitions": [
            {
                "text": "To repair something that is broken.",
                "examples": [
                    "Can you fix my phone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fixed",
        "v3": "fixed",
        "group": "regular",
        "opposite": "break",
        "transcription": "fɪks"
    },
    {
        "word": "plan",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "form": "verb",
        "subtext": "plan a trip / plan for the future",
        "synonyms": [
            "decide"
        ],
        "definitions": [
            {
                "text": "To decide what you are going to do.",
                "examples": [
                    "We are planning a trip."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "planned",
        "v3": "planned",
        "group": "regular",
        "opposite": "improvise",
        "transcription": "plæn"
    },
    {
        "word": "borrow",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📥",
        "form": "verb",
        "subtext": "take for a short time / borrow a book / borrow money",
        "definitions": [
            {
                "text": "To take something for a short time and then return it.",
                "examples": [
                    "Can I borrow your pen?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "borrowed",
        "v3": "borrowed",
        "group": "regular",
        "opposite": "lend",
        "transcription": "ˈbɑˌroʊ"
    },
    {
        "word": "smell",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "verb",
        "subtext": "smell good / smell the flowers",
        "synonyms": [
            "scent"
        ],
        "definitions": [
            {
                "text": "To notice or recognize something using your nose.",
                "examples": [
                    "I can smell the coffee."
                ]
            }
        ],
        "classification": "both",
        "aspect": "both",
        "v2": "smelled / smelt",
        "v3": "smelled / smelt",
        "group": "both",
        "opposite": "stink",
        "transcription": "smɛl"
    },
    {
        "word": "taste",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "👅",
        "form": "verb",
        "subtext": "taste good / have a taste",
        "synonyms": [
            "flavor"
        ],
        "definitions": [
            {
                "text": "To sense the flavor of something in your mouth.",
                "examples": [
                    "Taste this soup."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "tasted",
        "v3": "tasted",
        "group": "regular",
        "opposite": "swallow",
        "transcription": "teɪst"
    },
    {
        "word": "lie",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "form": "verb",
        "subtext": "lie down / lie on the bed",
        "synonyms": [
            "recline"
        ],
        "definitions": [
            {
                "text": "To be in a horizontal position on a surface.",
                "examples": [
                    "I like to lie on the beach."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lay",
        "v3": "lain",
        "group": "irregular",
        "opposite": "stand",
        "transcription": "laɪ"
    },
    {
        "word": "laugh",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😂",
        "form": "verb",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "subtext": "laugh at / laugh together",
        "synonyms": [
            "chuckle"
        ],
        "definitions": [
            {
                "text": "To make sounds with your voice because you think something is funny.",
                "examples": [
                    "They were laughing at his joke."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "laughed",
        "v3": "laughed",
        "group": "regular",
        "transcription": "læf"
    },
    {
        "word": "worry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "verb",
        "subtext": "worry about / don't worry",
        "synonyms": [
            "fret"
        ],
        "definitions": [
            {
                "text": "To think about problems or unpleasant things that might happen.",
                "examples": [
                    "Don't worry, everything will be fine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "worried",
        "v3": "worried",
        "group": "regular",
        "opposite": "relax",
        "transcription": "ˈwəri"
    },
    {
        "word": "sound",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👂",
        "form": "verb",
        "subtext": "sound like / sound good",
        "synonyms": [
            "seem"
        ],
        "definitions": [
            {
                "text": "To seem like something from what you have heard or read.",
                "examples": [
                    "That sounds like a good idea."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "sounded",
        "v3": "sounded",
        "group": "regular",
        "opposite": "silence",
        "transcription": "saʊnd"
    },
    {
        "word": "spell",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔤",
        "form": "verb",
        "subtext": "spell your name / spell correctly",
        "synonyms": [
            "lettering"
        ],
        "definitions": [
            {
                "text": "To say or write the letters of a word in the correct order.",
                "examples": [
                    "How do you spell your name?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spelled / spelt",
        "v3": "spelled / spelt",
        "group": "irregular",
        "opposite": "misspell",
        "transcription": "spɛl"
    },
    {
        "word": "point",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "☝️",
        "form": "verb",
        "subtext": "point at / to, point to / point at",
        "synonyms": [
            "indicate"
        ],
        "definitions": [
            {
                "text": "To show something by holding out your finger towards it.",
                "examples": [
                    "Point to the window.",
                    "He pointed at the map."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pointed",
        "v3": "pointed",
        "group": "regular",
        "opposite": "hide",
        "transcription": "pɔɪnt"
    },
    {
        "word": "shout",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "📢",
        "form": "verb",
        "subtext": "shout at / don't shout",
        "synonyms": [
            "yell"
        ],
        "definitions": [
            {
                "text": "To say something very loudly.",
                "examples": [
                    "Don't shout in the classroom."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shouted",
        "v3": "shouted",
        "group": "regular",
        "opposite": "whisper",
        "transcription": "ʃaʊt"
    },
    {
        "word": "wave",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "verb",
        "subtext": "wave at, wave goodbye / wave hello",
        "synonyms": [
            "greet"
        ],
        "definitions": [
            {
                "text": "To move your hand from side to side in the air to say hello or goodbye.",
                "examples": [
                    "Wave goodbye to your friend."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waved",
        "v3": "waved",
        "group": "regular",
        "opposite": "ignore",
        "transcription": "weɪv"
    },
    {
        "word": "kick",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🦶",
        "form": "verb",
        "subtext": "kick a ball / kick hard",
        "synonyms": [
            "strike"
        ],
        "definitions": [
            {
                "text": "To hit something with your foot.",
                "examples": [
                    "Kick the ball!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kicked",
        "v3": "kicked",
        "group": "regular",
        "opposite": "catch",
        "transcription": "kɪk"
    },
    {
        "word": "throw",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚾",
        "form": "verb",
        "subtext": "throw a ball / throw away",
        "synonyms": [
            "toss"
        ],
        "definitions": [
            {
                "text": "To make something move through the air by pushing it out of your hand.",
                "examples": [
                    "Can you throw the ball to me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "threw",
        "v3": "thrown",
        "group": "irregular",
        "opposite": "catch",
        "transcription": "θroʊ"
    },
    {
        "word": "bounce",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏀",
        "form": "verb",
        "subtext": "bounce a ball",
        "synonyms": [
            "rebound",
            "bouncing"
        ],
        "definitions": [
            {
                "text": "To move up or away after hitting a surface.",
                "examples": [
                    "The ball is bouncing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bounced",
        "v3": "bounced",
        "group": "regular",
        "opposite": "stop",
        "transcription": "baʊns"
    },
    {
        "word": "paint",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "paint a picture",
        "synonyms": [
            "color",
            "painting"
        ],
        "definitions": [
            {
                "text": "To make a picture using paint.",
                "examples": [
                    "I like to paint flowers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "painted",
        "v3": "painted",
        "group": "regular",
        "opposite": "erase",
        "transcription": "peɪnt"
    },
    {
        "word": "hop",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🐇",
        "form": "verb",
        "subtext": "hop around / hop like a rabbit",
        "synonyms": [
            "jump"
        ],
        "definitions": [
            {
                "text": "To jump on one foot.",
                "examples": [
                    "Can you hop like a rabbit?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hopped",
        "v3": "hopped",
        "group": "regular",
        "opposite": "walk",
        "transcription": "hɑp"
    },
    {
        "word": "skip",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏃",
        "form": "verb",
        "subtext": "skip rope",
        "synonyms": [
            "jump",
            "skipping"
        ],
        "definitions": [
            {
                "text": "To move along by jumping from one foot to the other.",
                "examples": [
                    "The children are skipping in the playground."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "skipped",
        "v3": "skipped",
        "group": "regular",
        "opposite": "walk",
        "transcription": "skɪp"
    },
    {
        "word": "count",
        "level": "starter",
        "theme": "numbers_0_9_A1",
        "emoji": "🔢",
        "form": "verb",
        "subtext": "count to ten / count numbers",
        "synonyms": [
            "calculate"
        ],
        "definitions": [
            {
                "text": "To say numbers in order.",
                "examples": [
                    "Can you count from one to ten?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "counted",
        "v3": "counted",
        "group": "regular",
        "opposite": "estimate",
        "transcription": "kaʊnt"
    },
    {
        "word": "tick",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "✅",
        "form": "verb",
        "subtext": "tick the box / tick correctly",
        "synonyms": [
            "check"
        ],
        "definitions": [
            {
                "text": "To put a mark (✓) next to something to show it is correct.",
                "examples": [
                    "Tick the correct answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ticked",
        "v3": "ticked",
        "group": "regular",
        "opposite": "cross",
        "transcription": "tɪk"
    },
    {
        "word": "cross",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "❌",
        "form": "verb",
        "subtext": "cross out / cross the answer",
        "synonyms": [
            "x-mark"
        ],
        "definitions": [
            {
                "text": "To put a mark (X) next to something to show it is wrong.",
                "examples": [
                    "Cross the wrong answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "crossed",
        "v3": "crossed",
        "group": "regular",
        "opposite": "tick",
        "transcription": "krɔs"
    },
    {
        "word": "colour",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🖍️",
        "form": "verb",
        "subtext": "colour the picture / use colours",
        "synonyms": [
            "color"
        ],
        "definitions": [
            {
                "text": "To use a pen or pencil to put colour on a picture.",
                "examples": [
                    "Colour the picture blue."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coloured",
        "v3": "coloured",
        "group": "regular",
        "opposite": "erase",
        "transcription": "ˈkələr"
    },
    {
        "word": "hold",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "hold my hand / hold on",
        "synonyms": [
            "grip"
        ],
        "definitions": [
            {
                "text": "To have or keep something in your hand or arms.",
                "examples": [
                    "Hold the baby carefully.",
                    "She is holding a book."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "held",
        "v3": "held",
        "group": "irregular",
        "opposite": "drop",
        "transcription": "hoʊld"
    },
    {
        "word": "lead",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "form": "verb",
        "subtext": "lead a team / follow the lead",
        "synonyms": [
            "guide",
            "direct"
        ],
        "definitions": [
            {
                "text": "To control a group of people, a country, or a situation.",
                "examples": [
                    "She leads a small team."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "led",
        "v3": "led",
        "group": "irregular",
        "opposite": "follow",
        "transcription": "lɛd"
    },
    {
        "word": "fight",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "fight for / a big fight",
        "synonyms": [
            "battle"
        ],
        "definitions": [
            {
                "text": "To use physical force to try to hurt someone or win something.",
                "examples": [
                    "The two boys are fighting."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fought",
        "v3": "fought",
        "group": "irregular",
        "opposite": "make peace",
        "transcription": "faɪt"
    },
    {
        "word": "hide",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🙈",
        "subtext": "hide and seek / hide from someone / hide something",
        "opposite": "show",
        "oppositeEmoji": "📽️",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something or someone in a place where they cannot be seen or found.",
                "examples": [
                    "He is hiding behind the door."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hid",
        "v3": "hidden",
        "group": "irregular",
        "transcription": "haɪd"
    },
    {
        "word": "seek",
        "level": "starter",
        "theme": "toys_games_A1",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "hide and seek / seek help",
        "synonyms": [
            "look for"
        ],
        "definitions": [
            {
                "text": "To try to find or get something.",
                "examples": [
                    "They are playing hide and seek."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sought",
        "v3": "sought",
        "group": "irregular",
        "opposite": "hide",
        "transcription": "sik"
    },
    {
        "word": "ring",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🔔",
        "form": "verb",
        "subtext": "ring a bell",
        "synonyms": [
            "chime",
            "phone is ringing"
        ],
        "definitions": [
            {
                "text": "To make a sound like a bell.",
                "examples": [
                    "The phone is ringing."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rang",
        "v3": "rung",
        "group": "irregular",
        "opposite": "be silent",
        "transcription": "rɪŋ"
    },
    {
        "word": "text",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📱",
        "form": "verb",
        "subtext": "text someone / send a text",
        "synonyms": [
            "message"
        ],
        "definitions": [
            {
                "text": "To send a message from a mobile phone.",
                "examples": [
                    "Text me when you arrive."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "texted",
        "v3": "texted",
        "group": "regular",
        "opposite": "call",
        "transcription": "tɛkst"
    },
    {
        "word": "whisper",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🤫",
        "form": "verb",
        "subtext": "whisper a secret",
        "synonyms": [
            "murmur",
            "speak softly"
        ],
        "definitions": [
            {
                "text": "To speak very quietly so that other people cannot hear you.",
                "examples": [
                    "She whispered the answer to me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "whispered",
        "v3": "whispered",
        "group": "regular",
        "opposite": "shout",
        "transcription": "ˈwɪspər"
    },
    {
        "word": "touch",
        "level": "starter",
        "theme": "five_senses_A1",
        "emoji": "🫱",
        "form": "verb",
        "subtext": "don't touch / touch screen",
        "synonyms": [
            "feel"
        ],
        "definitions": [
            {
                "text": "To put your hand or another part of your body on something.",
                "examples": [
                    "Don't touch the wet paint!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "touched",
        "v3": "touched",
        "group": "regular",
        "opposite": null,
        "transcription": "təʧ"
    },
    {
        "word": "let",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🔓",
        "subtext": "let someone go / let it be / let someone know",
        "form": "verb",
        "definitions": [
            {
                "text": "To allow something to happen or someone to do something.",
                "examples": [
                    "Let me help you with those bags.",
                    "She let the dog out into the garden."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "let",
        "v3": "let",
        "group": "irregular",
        "opposite": null,
        "transcription": "lɛt"
    },
    {
        "word": "set",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "subtext": "set an alarm / set the table / set a goal",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something in a particular place or position; to establish.",
                "examples": [
                    "I set my alarm for seven o'clock.",
                    "He set the plates on the table."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set",
        "v3": "set",
        "group": "irregular",
        "opposite": null,
        "transcription": "sɛt"
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📧",
        "subtext": "email someone / send an email / reply by email",
        "form": "verb",
        "definitions": [
            {
                "text": "To send a message using the internet.",
                "examples": [
                    "Email me the details.",
                    "I'll email you tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emailed",
        "v3": "emailed",
        "group": "regular",
        "transcription": "iˈmeɪl"
    },
    {
        "word": "phone",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📞",
        "subtext": "phone someone / phone back / on the phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To call someone using a telephone.",
                "examples": [
                    "I'll phone you later.",
                    "He phoned his mother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "phoned",
        "v3": "phoned",
        "group": "regular",
        "opposite": "text",
        "transcription": "foʊn"
    },
    {
        "word": "climb",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🧗",
        "subtext": "climb a mountain / climb a hill / climb stairs / climb up",
        "form": "verb",
        "definitions": [
            {
                "text": "To go up something using your hands and feet.",
                "examples": [
                    "We climbed the hill to see the view.",
                    "The cat climbed the tree."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "climbed",
        "v3": "climbed",
        "group": "regular",
        "opposite": "descend",
        "transcription": "klaɪm"
    },
    {
        "word": "dress",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👗",
        "subtext": "dress well / dress for work",
        "synonyms": [
            "get dressed"
        ],
        "opposite": "undress",
        "oppositeEmoji": "👕",
        "form": "verb",
        "definitions": [
            {
                "text": "To put clothes on yourself or someone else.",
                "examples": [
                    "I get dressed at seven.",
                    "She was dressed in black."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dressed",
        "v3": "dressed",
        "group": "regular",
        "transcription": "drɛs"
    },
    {
        "word": "undress",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👕",
        "subtext": "undress quickly",
        "synonyms": [
            "get undressed"
        ],
        "opposite": "dress",
        "oppositeEmoji": "👗",
        "form": "verb",
        "definitions": [
            {
                "text": "To take clothes off yourself or someone else.",
                "examples": [
                    "He undressed and went to bed.",
                    "Get undressed and have a bath."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "undressed",
        "v3": "undressed",
        "group": "regular",
        "transcription": "ənˈdrɛs"
    },
    {
        "word": "turn on",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "💡",
        "subtext": "turn on the light / turn on the TV / turn on the radio",
        "opposite": "turn off",
        "oppositeEmoji": "🌑",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device start working.",
                "examples": [
                    "Turn on the light, please.",
                    "He turns on his computer at nine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned on",
        "v3": "turned on",
        "group": "regular",
        "transcription": "tərn ɔn"
    },
    {
        "word": "turn off",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌑",
        "subtext": "turn off the light / turn off the computer / turn off your phone",
        "opposite": "turn on",
        "oppositeEmoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device stop working.",
                "examples": [
                    "Don't forget to turn off the lights.",
                    "She turns off her phone during meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned off",
        "v3": "turned off",
        "group": "regular",
        "transcription": "tərn ɔf"
    },
    {
        "word": "welcome",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "👋",
        "form": "verb",
        "subtext": "welcome someone / welcome home",
        "definitions": [
            {
                "text": "To greet someone who has just arrived at a place.",
                "examples": [
                    "We welcomed the guests at the door."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "welcomed",
        "v3": "welcomed",
        "group": "regular",
        "opposite": "reject",
        "transcription": "ˈwɛlkəm"
    },
    {
        "word": "act",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "act in a play / act quickly",
        "definitions": [
            {
                "text": "To perform in a play or movie.",
                "examples": [
                    "He acts in the school play."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acted",
        "v3": "acted",
        "group": "regular",
        "opposite": "be natural",
        "transcription": "ækt"
    },
    {
        "word": "copy",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📄",
        "form": "verb",
        "subtext": "copy a document / copy files",
        "definitions": [
            {
                "text": "To make something that is exactly like another thing.",
                "examples": [
                    "Can you copy this report for me?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "copied",
        "v3": "copied",
        "group": "regular",
        "opposite": "original",
        "transcription": "ˈkɑpi"
    },
    {
        "word": "fill",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🫗",
        "form": "verb",
        "subtext": "fill a glass / fill in a form",
        "definitions": [
            {
                "text": "To make something full.",
                "examples": [
                    "Please fill the glass with water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "filled",
        "v3": "filled",
        "group": "regular",
        "opposite": "empty",
        "transcription": "fɪl"
    },
    {
        "word": "fit",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "verb",
        "subtext": "fit well / does it fit?",
        "definitions": [
            {
                "text": "To be the right size or shape for someone or something.",
                "examples": [
                    "These shoes don't fit me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "fitted",
        "v3": "fitted",
        "group": "regular",
        "opposite": "unfit",
        "transcription": "fɪt"
    },
    {
        "word": "join",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "join a club / join us",
        "definitions": [
            {
                "text": "To become a member of a group or organization.",
                "examples": [
                    "I want to join the tennis club."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joined",
        "v3": "joined",
        "group": "regular",
        "opposite": "leave",
        "transcription": "ʤɔɪn"
    },
    {
        "word": "note",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📝",
        "form": "verb",
        "subtext": "note down / please note",
        "definitions": [
            {
                "text": "To write something down so that you will remember it.",
                "examples": [
                    "Please note the time of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "noted",
        "v3": "noted",
        "group": "regular",
        "opposite": "forget",
        "transcription": "noʊt"
    },
    {
        "word": "pick",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🧺",
        "form": "verb",
        "subtext": "pick flowers / pick up",
        "definitions": [
            {
                "text": "To take flowers, fruit, etc. from the plant where they are growing.",
                "examples": [
                    "They are picking apples in the garden."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "picked",
        "v3": "picked",
        "group": "regular",
        "opposite": "drop",
        "transcription": "pɪk"
    },
    {
        "word": "wish",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🤞",
        "form": "verb",
        "subtext": "wish for / I wish",
        "definitions": [
            {
                "text": "To want something to happen or to be true even though it is unlikely.",
                "examples": [
                    "I wish it was summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wished",
        "v3": "wished",
        "group": "regular",
        "opposite": "fear",
        "transcription": "wɪʃ"
    },
    {
        "word": "collect",
        "level": "starter",
        "theme": "hobbies_interests_A1",
        "emoji": "📦",
        "form": "verb",
        "subtext": "collect things / collect stamps",
        "definitions": [
            {
                "text": "To bring things together from different places.",
                "examples": [
                    "She collects stamps."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collected",
        "v3": "collected",
        "group": "regular",
        "opposite": "scatter",
        "transcription": "kəˈlɛkt"
    },
    {
        "word": "describe",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💬",
        "form": "verb",
        "subtext": "describe something / describe a person",
        "definitions": [
            {
                "text": "To say or write what someone or something is like.",
                "examples": [
                    "Can you describe your house?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "described",
        "v3": "described",
        "group": "regular",
        "opposite": "summarize",
        "transcription": "dɪˈskraɪb"
    },
    {
        "word": "breathe",
        "level": "starter",
        "theme": "health_body_A1",
        "emoji": "🫁",
        "form": "verb",
        "definitions": [
            {
                "text": "To take air into your lungs and send it out again.",
                "examples": [
                    "Breathe deeply."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "breathed",
        "v3": "breathed",
        "group": "regular",
        "subtext": "breathe",
        "synonyms": [
            "inhale",
            "exhale"
        ],
        "transcription": "brið"
    },
    {
        "word": "cough",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "😷",
        "form": "verb",
        "definitions": [
            {
                "text": "To force air out of your lungs with a sudden loud noise.",
                "examples": [
                    "He is coughing because he is ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coughed",
        "v3": "coughed",
        "group": "regular",
        "subtext": "have a cough",
        "transcription": "kɔf"
    },
    {
        "word": "sneeze",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤧",
        "form": "verb",
        "definitions": [
            {
                "text": "To suddenly force air out through your nose and mouth with a loud noise.",
                "examples": [
                    "Bless you! Did you sneeze?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sneezed",
        "v3": "sneezed",
        "group": "regular",
        "subtext": "sneeze",
        "synonyms": [
            "atchoo!"
        ],
        "transcription": "sniz"
    },
    {
        "word": "yawn",
        "level": "starter",
        "theme": "health_body_A1",
        "emoji": "🥱",
        "form": "verb",
        "definitions": [
            {
                "text": "To open your mouth wide and take a deep breath because you are tired.",
                "examples": [
                    "She yawned during the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "yawned",
        "v3": "yawned",
        "group": "regular",
        "subtext": "yawn",
        "synonyms": [
            "feel sleepy"
        ],
        "transcription": "jɔn"
    },
    {
        "word": "explain",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪkˈspleɪn",
        "definitions": [
            {
                "text": "To make something clear or easy to understand by describing or giving information about it.",
                "examples": [
                    "Can you explain this rule?",
                    "The teacher explained the lesson."
                ]
            }
        ],
        "v2": "explained",
        "v3": "explained",
        "classification": "regular",
        "group": "regular",
        "subtext": "explain something to someone"
    },
    {
        "word": "prepare",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📝",
        "form": "verb",
        "transcription": "prɪˈpeə(r)",
        "definitions": [
            {
                "text": "To get someone or something ready for something that will happen in the future.",
                "examples": [
                    "I need to prepare for my exam.",
                    "She is preparing dinner."
                ]
            }
        ],
        "v2": "prepared",
        "v3": "prepared",
        "classification": "regular",
        "group": "regular",
        "subtext": "prepare for something"
    },
    {
        "word": "depend",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "dɪˈpend",
        "definitions": [
            {
                "text": "To be decided by or to change according to something else.",
                "examples": [
                    "It depends on the weather.",
                    "Our plans depend on your answer."
                ]
            }
        ],
        "v2": "depended",
        "v3": "depended",
        "classification": "regular",
        "group": "regular",
        "subtext": "depend ON someone/something"
    },
    {
        "word": "belong",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🏠",
        "form": "verb",
        "transcription": "bɪˈlɒŋ",
        "definitions": [
            {
                "text": "To be the property of someone.",
                "examples": [
                    "This book belongs to me.",
                    "Who does this bag belong to?"
                ]
            }
        ],
        "v2": "belonged",
        "v3": "belonged",
        "classification": "regular",
        "group": "regular",
        "subtext": "belong TO someone/something"
    },
    {
        "word": "tall",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
        "emoji": "🦒",
        "definitions": [
            {
                "text": "A person or thing that is big from bottom to top.",
                "examples": [
                    "He is very tall.",
                    "That building is tall."
                ]
            },
            {
                "text": "Of greater than average height.",
                "examples": [
                    "She is a tall woman who works as an engineer."
                ]
            }
        ],
        "subtext": "a tall building / a tall person / tall enough",
        "synonyms": [
            "high",
            "lofty"
        ],
        "comparative": "taller",
        "superlative": "the tallest",
        "transcription": "tɔl"
    },
    {
        "word": "short",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "tall",
        "oppositeEmoji": "🗼",
        "emoji": "📏",
        "definitions": [
            {
                "text": "A person or thing that is not tall.",
                "examples": [
                    "She is short.",
                    "The pencil is short."
                ]
            },
            {
                "text": "Of less than average height or length.",
                "examples": [
                    "He has a short commute — ten minutes by bike."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short",
        "synonyms": [
            "small",
            "brief"
        ],
        "comparative": "shorter",
        "superlative": "the shortest",
        "transcription": "ʃɔrt"
    },
    {
        "word": "young",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
        "emoji": "👶",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "synonyms": [
            "youthful"
        ],
        "comparative": "younger",
        "superlative": "the youngest",
        "transcription": "jəŋ"
    },
    {
        "word": "old",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "new",
        "oppositeEmoji": "👶",
        "emoji": "👴",
        "definitions": [
            {
                "text": "Having lived or existed for a long time.",
                "examples": [
                    "This is an old book."
                ]
            },
            {
                "text": "Having existed for a long time.",
                "examples": [
                    "He works with old clients from ten years ago."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "synonyms": [
            "elderly",
            "ancient"
        ],
        "comparative": "older",
        "superlative": "the oldest",
        "transcription": "oʊld"
    },
    {
        "word": "sunny",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "opposite": "rainy",
        "oppositeEmoji": "🌧️",
        "definitions": [
            {
                "text": "Having a lot of light from the sun.",
                "examples": [
                    "It is a sunny day.",
                    "I like sunny weather."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "synonyms": [
            "bright",
            "clear"
        ],
        "comparative": "sunnier",
        "superlative": "the sunniest",
        "transcription": "ˈsəni"
    },
    {
        "word": "rainy",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "opposite": "sunny",
        "oppositeEmoji": "☀️",
        "definitions": [
            {
                "text": "Having a lot of rain.",
                "examples": [
                    "It is a rainy day.",
                    "Wear a coat, it's rainy outside."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "synonyms": [
            "wet",
            "showery"
        ],
        "comparative": "rainier",
        "superlative": "the rainiest",
        "transcription": "ˈreɪni"
    },
    {
        "word": "hot",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "cold",
        "oppositeEmoji": "❄️",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
        "definitions": [
            {
                "text": "Having a high temperature.",
                "examples": [
                    "The coffee is hot.",
                    "It is very hot in summer.",
                    "It is too hot to work comfortably today."
                ]
            }
        ],
        "comparative": "hotter",
        "superlative": "the hottest",
        "transcription": "hɑt"
    },
    {
        "word": "cold",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "hot",
        "oppositeEmoji": "🔥",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "definitions": [
            {
                "text": "Having a low temperature.",
                "examples": [
                    "The water is cold.",
                    "It is cold in winter."
                ]
            },
            {
                "text": "Having a low temperature; not warm.",
                "examples": [
                    "I need a coat — it is very cold outside."
                ]
            }
        ],
        "comparative": "colder",
        "superlative": "the coldest",
        "transcription": "koʊld"
    },
    {
        "word": "cheap",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "expensive",
        "oppositeEmoji": "💎",
        "subtext": "cheap flight / very cheap / cheap and cheerful",
        "synonyms": [
            "low price",
            "inexpensive"
        ],
        "definitions": [
            {
                "text": "Not expensive; low in price.",
                "examples": [
                    "This coffee is cheap."
                ]
            },
            {
                "text": "Low in price.",
                "examples": [
                    "The lunch near the office is very cheap."
                ]
            }
        ],
        "comparative": "cheaper",
        "superlative": "the cheapest",
        "transcription": "ʧip"
    },
    {
        "word": "expensive",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "cheap",
        "oppositeEmoji": "🏷️",
        "subtext": "very expensive / expensive taste / too expensive",
        "synonyms": [
            "costly",
            "high price"
        ],
        "definitions": [
            {
                "text": "Costing a lot of money.",
                "examples": [
                    "That car is expensive."
                ]
            },
            {
                "text": "High in price.",
                "examples": [
                    "The city centre is expensive for rent."
                ]
            }
        ],
        "comparative": "more expensive",
        "superlative": "the most expensive",
        "transcription": "ɪkˈspɛnsɪv"
    },
    {
        "word": "good",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "👎",
        "subtext": "good idea / good luck / good value",
        "synonyms": [
            "great",
            "nice",
            "pleasant"
        ],
        "definitions": [
            {
                "text": "Of high quality or ability; pleasant.",
                "examples": [
                    "This is a good job."
                ]
            },
            {
                "text": "Of high quality or pleasant.",
                "examples": [
                    "She has a good job with flexible hours."
                ]
            }
        ],
        "comparative": "better",
        "superlative": "the best",
        "transcription": "gʊd"
    },
    {
        "word": "bad",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "👍",
        "subtext": "bad news / bad luck / bad decision",
        "synonyms": [
            "terrible",
            "awful",
            "unpleasant"
        ],
        "definitions": [
            {
                "text": "Not good; unpleasant or of poor quality.",
                "examples": [
                    "The weather is bad today."
                ]
            },
            {
                "text": "Of low quality; unpleasant or harmful.",
                "examples": [
                    "He had a bad day at work."
                ]
            }
        ],
        "comparative": "worse",
        "superlative": "the worst",
        "transcription": "bæd"
    },
    {
        "word": "big",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "subtext": "a big house / a big problem / big enough",
        "synonyms": [
            "large",
            "huge"
        ],
        "definitions": [
            {
                "text": "Large in size.",
                "examples": [
                    "It is a big office."
                ]
            },
            {
                "text": "Large in size or amount.",
                "examples": [
                    "They have a big house near the park."
                ]
            }
        ],
        "comparative": "bigger",
        "superlative": "the biggest",
        "transcription": "bɪg"
    },
    {
        "word": "small",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "large",
        "oppositeEmoji": "🐘",
        "subtext": "a small flat / a small salary / too small",
        "synonyms": [
            "little",
            "tiny"
        ],
        "definitions": [
            {
                "text": "Little in size.",
                "examples": [
                    "She has a small flat."
                ]
            },
            {
                "text": "Little in size or amount.",
                "examples": [
                    "She rents a small flat in the city centre."
                ]
            }
        ],
        "comparative": "smaller",
        "superlative": "the smallest",
        "transcription": "smɔl"
    },
    {
        "word": "easy",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficult",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Not difficult.",
                "examples": [
                    "The test is easy.",
                    "The application form is easy to complete."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "easier",
        "superlative": "the easiest",
        "transcription": "ˈizi"
    },
    {
        "word": "difficult",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "easy",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Hard to do or understand.",
                "examples": [
                    "This work is difficult."
                ]
            },
            {
                "text": "Not easy; requiring effort.",
                "examples": [
                    "The negotiation was very difficult."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "more difficult",
        "superlative": "the most difficult",
        "transcription": "ˈdɪfəkəlt"
    },
    {
        "word": "happy",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "sad",
        "oppositeEmoji": "😢",
        "subtext": "feel happy / happy with something / a happy day",
        "synonyms": [
            "glad",
            "joyful",
            "cheerful"
        ],
        "definitions": [
            {
                "text": "Feeling pleasure or joy.",
                "examples": [
                    "I am happy today."
                ]
            },
            {
                "text": "Feeling pleasure or satisfaction.",
                "examples": [
                    "She is happy in her new role."
                ]
            }
        ],
        "comparative": "happier",
        "superlative": "the happiest",
        "transcription": "ˈhæpi"
    },
    {
        "word": "tired",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "energetic",
        "oppositeEmoji": "⚡",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "definitions": [
            {
                "text": "Needing rest or sleep.",
                "examples": [
                    "I am very tired after work.",
                    "I feel tired after a long week."
                ]
            }
        ],
        "comparative": "more tired",
        "superlative": "the most tired",
        "transcription": "taɪərd"
    },
    {
        "word": "full-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "part-time",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈfʊlˌtaɪm"
    },
    {
        "word": "thirsty",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥤",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Needing or wanting to drink.",
                "examples": [
                    "I am thirsty — can I have some water?"
                ]
            }
        ],
        "subtext": "feel thirsty",
        "synonyms": [
            "parched",
            "dehydrated"
        ],
        "comparative": "thirstier",
        "superlative": "the thirstiest",
        "transcription": "ˈθərsti"
    },
    {
        "word": "part-time",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "full-time",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈpɑrtˈtaɪm"
    },
    {
        "word": "clean",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "dirty",
        "oppositeEmoji": "💩",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
        "definitions": [
            {
                "text": "Free from dirt.",
                "examples": [
                    "The flat is clean now.",
                    "Keep the workspace clean and tidy."
                ]
            }
        ],
        "comparative": "cleaner",
        "superlative": "the cleanest",
        "transcription": "klin"
    },
    {
        "word": "healthy",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ],
        "comparative": "healthier",
        "superlative": "the healthiest",
        "transcription": "ˈhɛlθi"
    },
    {
        "word": "unhealthy",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍔",
        "form": "adjective",
        "opposite": "healthy",
        "oppositeEmoji": "🥗",
        "subtext": "unhealthy food / unhealthy lifestyle",
        "synonyms": [
            "ill",
            "unfit"
        ],
        "definitions": [
            {
                "text": "Not good for your body; not healthy.",
                "examples": [
                    "Fast food is often unhealthy."
                ]
            }
        ],
        "comparative": "more unhealthy",
        "superlative": "the most unhealthy",
        "transcription": "ənˈhɛlθi"
    },
    {
        "word": "ill",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "sick, feel ill",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ],
        "comparative": "more ill",
        "superlative": "the most ill",
        "transcription": "ɪl"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "more online",
        "superlative": "the most online",
        "transcription": "ˈɔnˌlaɪn"
    },
    {
        "word": "offline",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📴",
        "form": "adjective",
        "opposite": "online",
        "oppositeEmoji": "🌐",
        "subtext": "work offline / go offline",
        "synonyms": [
            "disconnected"
        ],
        "definitions": [
            {
                "text": "Not using or connected to the internet.",
                "examples": [
                    "You can read this document offline."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈɔˌflaɪn"
    },
    {
        "word": "alone",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "more alone",
        "superlative": "the most alone",
        "transcription": "əˈloʊn"
    },
    {
        "word": "relaxed",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressed",
        "oppositeEmoji": "😫",
        "subtext": "feeling relaxed",
        "synonyms": [
            "calm",
            "peaceful",
            "chilled"
        ],
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "comparative": "more relaxed",
        "superlative": "the most relaxed",
        "transcription": "rɪˈlækst"
    },
    {
        "word": "worried",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "worried about / deeply worried",
        "synonyms": [
            "anxious",
            "nervous",
            "uneasy"
        ],
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "comparative": "more worried",
        "superlative": "the most worried",
        "transcription": "ˈwərid"
    },
    {
        "word": "busy",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "free",
        "oppositeEmoji": "🆓",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "definitions": [
            {
                "text": "Having a lot of things to do.",
                "examples": [
                    "I am very busy this week."
                ]
            },
            {
                "text": "Having much to do; crowded.",
                "examples": [
                    "Monday morning is always very busy."
                ]
            }
        ],
        "comparative": "busier",
        "superlative": "the busiest",
        "transcription": "ˈbɪzi"
    },
    {
        "word": "important",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "opposite": "unimportant",
        "oppositeEmoji": "🍃",
        "subtext": "important meeting / very important / most important",
        "synonyms": [
            "essential"
        ],
        "definitions": [
            {
                "text": "Having great value or effect.",
                "examples": [
                    "Sleep is very important."
                ]
            },
            {
                "text": "Having great value or significance.",
                "examples": [
                    "Sleep is very important for performance."
                ]
            }
        ],
        "comparative": "more important",
        "superlative": "the most important",
        "transcription": "ˌɪmˈpɔrtənt"
    },
    {
        "word": "unimportant",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🍃",
        "form": "adjective",
        "opposite": "important",
        "oppositeEmoji": "❗",
        "subtext": "unimportant detail / feel unimportant",
        "synonyms": [
            "minor",
            "small"
        ],
        "definitions": [
            {
                "text": "Not having great value or effect.",
                "examples": [
                    "It is an unimportant mistake."
                ]
            }
        ],
        "comparative": "more unimportant",
        "superlative": "the most unimportant",
        "transcription": "ənɪmˈpɔrtənt"
    },
    {
        "word": "red",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "opposite": "green",
        "subtext": "dark red, bright red / red wine / red face / red light",
        "definitions": [
            {
                "text": "Having the colour of blood or a ripe tomato.",
                "examples": [
                    "She has a red bag."
                ]
            },
            {
                "text": "Having the colour of blood.",
                "examples": [
                    "She drives a red car."
                ]
            }
        ],
        "comparative": "redder",
        "superlative": "the reddest",
        "transcription": "rɛd"
    },
    {
        "word": "blue",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "opposite": "orange",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
        "definitions": [
            {
                "text": "Having the colour of a clear sky.",
                "examples": [
                    "His car is blue."
                ]
            },
            {
                "text": "Having the colour of the sky.",
                "examples": [
                    "He wears a blue shirt to work."
                ]
            }
        ],
        "comparative": "bluer",
        "superlative": "the bluest",
        "transcription": "blu"
    },
    {
        "word": "green",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "opposite": "pink",
        "subtext": "bright green, dark green / green energy / green space / bright green",
        "definitions": [
            {
                "text": "Having the colour of grass or leaves.",
                "examples": [
                    "She wears a green dress."
                ]
            },
            {
                "text": "Having the colour of grass.",
                "examples": [
                    "The company has green credentials."
                ]
            }
        ],
        "comparative": "greener",
        "superlative": "the greenest",
        "transcription": "grin"
    },
    {
        "word": "white",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "opposite": "black",
        "oppositeEmoji": "⬛",
        "subtext": "pure white, snow white / white wine / off-white / bright white",
        "definitions": [
            {
                "text": "Having the colour of snow or milk.",
                "examples": [
                    "The walls are white."
                ]
            },
            {
                "text": "Having the lightest colour.",
                "examples": [
                    "The office walls are painted white."
                ]
            }
        ],
        "comparative": "whiter",
        "superlative": "the whitest",
        "transcription": "waɪt"
    },
    {
        "word": "black",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": "white",
        "oppositeEmoji": "⬜",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
        "definitions": [
            {
                "text": "Having the darkest colour, like the night sky.",
                "examples": [
                    "He wears a black coat."
                ]
            },
            {
                "text": "Having the darkest colour.",
                "examples": [
                    "He always wears a black suit."
                ]
            }
        ],
        "comparative": "blacker",
        "superlative": "the blackest",
        "transcription": "blæk"
    },
    {
        "word": "yellow",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "opposite": "purple",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
        "definitions": [
            {
                "text": "Having the colour of the sun or a lemon.",
                "examples": [
                    "She has a yellow umbrella."
                ]
            },
            {
                "text": "Having the colour of the sun.",
                "examples": [
                    "She bought a yellow notepad."
                ]
            }
        ],
        "comparative": "yellower",
        "superlative": "the yellowest",
        "transcription": "ˈjɛloʊ"
    },
    {
        "word": "free",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "opposite": "busy",
        "oppositeEmoji": "💎",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
        "definitions": [
            {
                "text": "Costing no money; at no charge.",
                "examples": [
                    "The museum is free on Sundays."
                ]
            },
            {
                "text": "Not costing money; not restricted.",
                "examples": [
                    "The parking here is free."
                ]
            }
        ],
        "comparative": "freer",
        "superlative": "the freest",
        "transcription": "fri"
    },
    {
        "word": "open",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "closed",
        "oppositeEmoji": "🔒",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
        "definitions": [
            {
                "text": "Not closed; allowing entry or access.",
                "examples": [
                    "The shop is open until eight."
                ]
            },
            {
                "text": "Not closed; available to use.",
                "examples": [
                    "The office is open from eight to six."
                ]
            }
        ],
        "comparative": "opener",
        "superlative": "the openest",
        "transcription": "ˈoʊpən"
    },
    {
        "word": "closed",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "open",
        "oppositeEmoji": "📖",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
        "definitions": [
            {
                "text": "Not open; shut.",
                "examples": [
                    "The bank is closed on Sundays.",
                    "The bank is closed on Sunday."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "kloʊzd"
    },
    {
        "word": "large",
        "level": "starter",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐭",
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "larger",
        "superlative": "the largest",
        "emoji": "🐘",
        "transcription": "lɑrʤ"
    },
    {
        "word": "little",
        "level": "starter",
        "form": "adjective",
        "opposite": "small",
        "oppositeEmoji": "🐘",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "smaller",
        "superlative": "the smallest",
        "emoji": "🐭",
        "transcription": "ˈlɪtəl"
    },
    {
        "word": "long",
        "level": "starter",
        "form": "adjective",
        "opposite": "short",
        "oppositeEmoji": "📏",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "longer",
        "superlative": "the longest",
        "emoji": "📏",
        "transcription": "lɔŋ"
    },
    {
        "word": "high",
        "level": "starter",
        "form": "adjective",
        "opposite": "low",
        "oppositeEmoji": "📉",
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "higher",
        "superlative": "the highest",
        "emoji": "🏔️",
        "transcription": "haɪ"
    },
    {
        "word": "low",
        "level": "starter",
        "form": "adjective",
        "opposite": "high",
        "oppositeEmoji": "📈",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "lower",
        "superlative": "the lowest",
        "emoji": "⬇️",
        "transcription": "loʊ"
    },
    {
        "word": "full",
        "level": "starter",
        "form": "adjective",
        "opposite": "empty",
        "oppositeEmoji": "🫙",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "fuller",
        "superlative": "the fullest",
        "emoji": "🥛",
        "transcription": "fʊl"
    },
    {
        "word": "empty",
        "level": "starter",
        "form": "adjective",
        "opposite": "full",
        "oppositeEmoji": "🥛",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "emptier",
        "superlative": "the emptiest",
        "emoji": "🫙",
        "transcription": "ˈɛmti"
    },
    {
        "word": "warm",
        "level": "starter",
        "form": "adjective",
        "opposite": "cool",
        "oppositeEmoji": "🧊",
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "warmer",
        "superlative": "the warmest",
        "emoji": "☀️",
        "transcription": "wɔrm"
    },
    {
        "word": "cool",
        "level": "starter",
        "form": "adjective",
        "opposite": "warm",
        "oppositeEmoji": "☀️",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "cooler",
        "superlative": "the coolest",
        "emoji": "🌬️",
        "transcription": "kul"
    },
    {
        "word": "wet",
        "level": "starter",
        "form": "adjective",
        "opposite": "dry",
        "oppositeEmoji": "🏜️",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "wetter",
        "superlative": "the wettest",
        "emoji": "💦",
        "transcription": "wɛt"
    },
    {
        "word": "dry",
        "level": "starter",
        "form": "adjective",
        "opposite": "wet",
        "oppositeEmoji": "🌧️",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "dryer",
        "superlative": "the dryest",
        "emoji": "🏜️",
        "transcription": "draɪ"
    },
    {
        "word": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
        "form": "adjective",
        "opposite": "clean",
        "oppositeEmoji": "✨",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "comparative": "dirtier",
        "superlative": "the dirtiest",
        "emoji": "💩",
        "transcription": "ˈdərti"
    },
    {
        "word": "hard",
        "level": "starter",
        "form": "adjective",
        "opposite": "soft",
        "oppositeEmoji": "☁️",
        "subtext": "hard work / a hard decision / too hard",
        "synonyms": [
            "firm",
            "solid",
            "difficult"
        ],
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "harder",
        "superlative": "the hardest",
        "emoji": "🧱",
        "transcription": "hɑrd"
    },
    {
        "word": "soft",
        "level": "starter",
        "form": "adjective",
        "opposite": "hard",
        "oppositeEmoji": "🧱",
        "subtext": "soft light / soft music / soft skills",
        "synonyms": [
            "gentle",
            "smooth"
        ],
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "softer",
        "superlative": "the softest",
        "emoji": "☁️",
        "transcription": "sɔft"
    },
    {
        "word": "heavy",
        "level": "starter",
        "form": "adjective",
        "opposite": "light",
        "oppositeEmoji": "🪶",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "synonyms": [
            "weighty"
        ],
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "heavier",
        "superlative": "the heaviest",
        "emoji": "🏋️",
        "transcription": "ˈhɛvi"
    },
    {
        "word": "light",
        "level": "starter",
        "form": "adjective",
        "opposite": "heavy",
        "oppositeEmoji": "🐘",
        "subtext": "light rain / light traffic / a light meal",
        "synonyms": [
            "not heavy",
            "pale"
        ],
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "lighter",
        "superlative": "the lightest",
        "emoji": "🪶",
        "transcription": "laɪt"
    },
    {
        "word": "brown",
        "level": "starter",
        "form": "adjective",
        "opposite": "grey",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "browner",
        "superlative": "the brownest",
        "emoji": "🤎",
        "transcription": "braʊn"
    },
    {
        "word": "grey",
        "level": "starter",
        "form": "adjective",
        "opposite": "brown",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "greyer",
        "superlative": "the greyest",
        "emoji": "🩶",
        "transcription": "greɪ"
    },
    {
        "word": "pink",
        "level": "starter",
        "form": "adjective",
        "opposite": "green",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "pinker",
        "superlative": "the pinkest",
        "emoji": "🩷",
        "transcription": "pɪŋk"
    },
    {
        "word": "orange",
        "level": "starter",
        "form": "adjective",
        "opposite": "blue",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "more orange",
        "superlative": "the most orange",
        "emoji": "🧡",
        "transcription": "ˈɔrɪnʤ"
    },
    {
        "word": "great",
        "level": "starter",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "😫",
        "subtext": "a great idea / a great opportunity / great value",
        "synonyms": [
            "excellent",
            "big"
        ],
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "greater",
        "superlative": "the greatest",
        "emoji": "🌟",
        "transcription": "greɪt"
    },
    {
        "word": "nice",
        "level": "starter",
        "form": "adjective",
        "opposite": "nasty",
        "oppositeEmoji": "😠",
        "subtext": "a nice day / a nice place / a nice person",
        "synonyms": [
            "pleasant",
            "kind"
        ],
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "nicer",
        "superlative": "the nicest",
        "emoji": "😊",
        "transcription": "nis"
    },
    {
        "word": "wonderful",
        "level": "starter",
        "form": "adjective",
        "opposite": "awful",
        "oppositeEmoji": "🤮",
        "subtext": "a wonderful opportunity / a wonderful time",
        "synonyms": [
            "amazing",
            "great"
        ],
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more wonderful",
        "superlative": "the most wonderful",
        "emoji": "🌈",
        "transcription": "ˈwəndərfəl"
    },
    {
        "word": "terrible",
        "level": "starter",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "🌟",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "synonyms": [
            "awful",
            "very bad"
        ],
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more terrible",
        "superlative": "the most terrible",
        "emoji": "🤮",
        "transcription": "ˈtɛrəbəl"
    },
    {
        "word": "awful",
        "level": "starter",
        "form": "adjective",
        "opposite": "wonderful",
        "oppositeEmoji": "🌈",
        "subtext": "awful weather / awful news / simply awful",
        "synonyms": [
            "terrible",
            "very bad"
        ],
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more awful",
        "superlative": "the most awful",
        "emoji": "💩",
        "transcription": "ˈɔfəl"
    },
    {
        "word": "amazing",
        "level": "starter",
        "form": "adjective",
        "opposite": "ordinary",
        "oppositeEmoji": "😐",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "synonyms": [
            "wonderful",
            "fantastic"
        ],
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more amazing",
        "superlative": "the most amazing",
        "emoji": "🤩",
        "transcription": "əˈmeɪzɪŋ"
    },
    {
        "word": "fantastic",
        "level": "starter",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "😫",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "synonyms": [
            "excellent",
            "great"
        ],
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more fantastic",
        "superlative": "the most fantastic",
        "emoji": "🔥",
        "transcription": "fænˈtæstɪk"
    },
    {
        "word": "sad",
        "level": "starter",
        "form": "adjective",
        "opposite": "happy",
        "oppositeEmoji": "😊",
        "subtext": "feel sad / a sad situation / deeply sad",
        "synonyms": [
            "unhappy",
            "miserable",
            "gloomy"
        ],
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "sadder",
        "superlative": "the saddest",
        "emoji": "😢",
        "transcription": "sæd"
    },
    {
        "word": "hungry",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤰",
        "subtext": "feel hungry / very hungry / go hungry",
        "synonyms": [
            "starving",
            "famished"
        ],
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "hungrier",
        "superlative": "the hungriest",
        "emoji": "🍔",
        "transcription": "ˈhəŋgri"
    },
    {
        "word": "angry",
        "level": "starter",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "feel angry / angry with someone / very angry",
        "synonyms": [
            "mad",
            "furious",
            "annoyed"
        ],
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "angrier",
        "superlative": "the angriest",
        "emoji": "😠",
        "transcription": "ˈæŋgri"
    },
    {
        "word": "bored",
        "level": "starter",
        "form": "adjective",
        "opposite": "interesting",
        "oppositeEmoji": "🧐",
        "subtext": "feel bored / bored with / easily bored",
        "synonyms": [
            "uninterested",
            "weary"
        ],
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "more bored",
        "superlative": "the most bored",
        "emoji": "😴",
        "transcription": "bɔrd"
    },
    {
        "word": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "opposite": "bored",
        "oppositeEmoji": "😴",
        "subtext": "feel excited / excited about / very excited",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "comparative": "more excited",
        "superlative": "the most excited",
        "emoji": "🤩",
        "transcription": "ɪkˈsaɪtɪd"
    },
    {
        "word": "afraid",
        "level": "starter",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "synonyms": [
            "scared",
            "frightened",
            "terrified"
        ],
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "more afraid",
        "superlative": "the most afraid",
        "emoji": "😨",
        "transcription": "əˈfreɪd"
    },
    {
        "word": "sorry",
        "level": "starter",
        "form": "adjective",
        "opposite": null,
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "sorrier",
        "superlative": "the sorriest",
        "emoji": "🙏",
        "transcription": "ˈsɑri"
    },
    {
        "word": "right",
        "level": "starter",
        "form": "adjective",
        "subtext": "right hand / right side / absolutely right",
        "opposite": "wrong",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            },
            {
                "text": "On or towards the side of your body that is to the east when you face north.",
                "examples": [
                    "Use your right hand."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more right",
        "superlative": "the most right",
        "emoji": "✅",
        "transcription": "raɪt"
    },
    {
        "word": "left",
        "level": "starter",
        "form": "adjective",
        "subtext": "left hand / left side",
        "opposite": "right",
        "definitions": [
            {
                "text": "On or towards the side of your body that is to the west when you face north.",
                "examples": [
                    "Turn left at the station.",
                    "She writes with her left hand."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "emoji": "⬅️",
        "transcription": "lɛft"
    },
    {
        "word": "wrong",
        "level": "starter",
        "form": "adjective",
        "opposite": "right",
        "oppositeEmoji": "✅",
        "subtext": "wrong answer / go wrong / completely wrong",
        "synonyms": [
            "incorrect"
        ],
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more wrong",
        "superlative": "the most wrong",
        "emoji": "❌",
        "transcription": "rɔŋ"
    },
    {
        "word": "new",
        "level": "starter",
        "form": "adjective",
        "opposite": "old",
        "oppositeEmoji": "👴",
        "subtext": "new job / brand new / completely new",
        "synonyms": [
            "modern",
            "recently made"
        ],
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "newer",
        "superlative": "the newest",
        "emoji": "🆕",
        "transcription": "nu"
    },
    {
        "word": "different",
        "level": "starter",
        "form": "adjective",
        "opposite": "same",
        "oppositeEmoji": "👯",
        "subtext": "completely different / very different / different from",
        "synonyms": [
            "not the same"
        ],
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "more different",
        "superlative": "the most different",
        "emoji": "🌓",
        "transcription": "ˈdɪfərənt"
    },
    {
        "word": "same",
        "level": "starter",
        "form": "adjective",
        "opposite": "other",
        "oppositeEmoji": "🌓",
        "subtext": "the same as / exactly the same / same time",
        "synonyms": [
            "identical"
        ],
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "emoji": "👯",
        "transcription": "seɪm"
    },
    {
        "word": "fast",
        "level": "starter",
        "form": "adjective",
        "opposite": "slow",
        "oppositeEmoji": "🐢",
        "subtext": "fast food / fast train / very fast",
        "synonyms": [
            "quick",
            "rapid"
        ],
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "faster",
        "superlative": "the fastest",
        "emoji": "🏎️",
        "transcription": "fæst"
    },
    {
        "word": "slow",
        "level": "starter",
        "form": "adjective",
        "opposite": "fast",
        "oppositeEmoji": "🏎️",
        "subtext": "slow progress / slow internet / very slow",
        "synonyms": [
            "leisurely"
        ],
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "slower",
        "superlative": "the slowest",
        "emoji": "🐢",
        "transcription": "sloʊ"
    },
    {
        "word": "quiet",
        "level": "starter",
        "form": "adjective",
        "opposite": "loud",
        "oppositeEmoji": "📢",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "synonyms": [
            "silent",
            "peaceful"
        ],
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "quieter",
        "superlative": "the quietest",
        "emoji": "🤫",
        "transcription": "kwaɪət"
    },
    {
        "word": "loud",
        "level": "starter",
        "form": "adjective",
        "opposite": "quiet",
        "oppositeEmoji": "🤫",
        "subtext": "loud noise / too loud / a loud voice",
        "synonyms": [
            "noisy"
        ],
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "louder",
        "superlative": "the loudest",
        "emoji": "📢",
        "transcription": "laʊd"
    },
    {
        "word": "safe",
        "level": "starter",
        "form": "adjective",
        "opposite": "dangerous",
        "oppositeEmoji": "🧨",
        "subtext": "safe area / safe to do / feel safe",
        "synonyms": [
            "secure"
        ],
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "safer",
        "superlative": "the safest",
        "emoji": "🛡️",
        "transcription": "seɪf"
    },
    {
        "word": "dangerous",
        "level": "starter",
        "form": "adjective",
        "opposite": "safe",
        "oppositeEmoji": "🛡️",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "synonyms": [
            "risky"
        ],
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "more dangerous",
        "superlative": "the most dangerous",
        "emoji": "🧨",
        "transcription": "ˈdeɪnʤərəs"
    },
    {
        "word": "unhappy",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": "happy",
        "oppositeEmoji": "😊",
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "synonyms": [
            "sad",
            "miserable"
        ],
        "definitions": [
            {
                "text": "Not feeling pleased; dissatisfied.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "comparative": "unhappier",
        "superlative": "the unhappiest",
        "emoji": "😢",
        "transcription": "ənˈhæpi"
    },
    {
        "word": "nervous",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": "confident",
        "oppositeEmoji": "🦁",
        "subtext": "feel nervous / nervous about / very nervous",
        "synonyms": [
            "anxious",
            "worried"
        ],
        "definitions": [
            {
                "text": "Feeling anxious or uneasy.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "comparative": "more nervous",
        "superlative": "the most nervous",
        "emoji": "😟",
        "transcription": "ˈnərvəs"
    },
    {
        "word": "proud",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤦",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "synonyms": [
            "pleased",
            "satisfied"
        ],
        "comparative": "prouder",
        "superlative": "the proudest",
        "emoji": "🤳",
        "transcription": "praʊd"
    },
    {
        "word": "scared",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "synonyms": [
            "afraid",
            "frightened"
        ],
        "comparative": "more scared",
        "superlative": "the most scared",
        "emoji": "😨",
        "transcription": "skɛrd"
    },
    {
        "word": "surprised",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "synonyms": [
            "amazed",
            "astonished"
        ],
        "comparative": "more surprised",
        "superlative": "the most surprised",
        "emoji": "😲",
        "transcription": "səˈpraɪzd"
    },
    {
        "word": "disappointed",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "opposite": "satisfied",
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "synonyms": [
            "sad",
            "let down"
        ],
        "comparative": "more disappointed",
        "superlative": "the most disappointed",
        "emoji": "😞",
        "transcription": "ˌdɪsəˈpɔɪnɪd"
    },
    {
        "word": "beautiful",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "ugly",
        "oppositeEmoji": "👹",
        "definitions": [
            {
                "text": "Attractive and pleasing to look at.",
                "examples": [
                    "She has a beautiful, bright office with city views."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "more beautiful",
        "superlative": "the most beautiful",
        "emoji": "✨",
        "transcription": "ˈbjutəfəl"
    },
    {
        "word": "pretty",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "ugly",
        "oppositeEmoji": "👹",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "prettier",
        "superlative": "the prettiest",
        "emoji": "🌸",
        "transcription": "ˈprɪti"
    },
    {
        "word": "strong",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "weak",
        "oppositeEmoji": "🍃",
        "definitions": [
            {
                "text": "Having great physical or mental power.",
                "examples": [
                    "She is a strong leader and very respected."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "stronger",
        "superlative": "the strongest",
        "emoji": "🏋️",
        "transcription": "strɔŋ"
    },
    {
        "word": "weak",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "strong",
        "oppositeEmoji": "🏋️",
        "definitions": [
            {
                "text": "Lacking strength or power.",
                "examples": [
                    "The signal is weak on the top floor."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "weaker",
        "superlative": "the weakest",
        "emoji": "🥀",
        "transcription": "wik"
    },
    {
        "word": "fit",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "opposite": "unfit",
        "oppositeEmoji": "🛋️",
        "definitions": [
            {
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "synonyms": [
            "healthy",
            "in shape"
        ],
        "comparative": "fitter",
        "superlative": "the fittest",
        "emoji": "🏋️",
        "transcription": "fɪt"
    },
    {
        "word": "unfit",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "fit",
        "oppositeEmoji": "🏋️",
        "subtext": "unhealthy, out of shape / feel unfit",
        "definitions": [
            {
                "text": "Not in good physical condition.",
                "examples": [
                    "I feel very unfit because I don't exercise."
                ]
            }
        ],
        "comparative": "more unfit",
        "superlative": "the most unfit",
        "transcription": "ənˈfɪt"
    },
    {
        "word": "perfect",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "imperfect",
        "oppositeEmoji": "🩹",
        "definitions": [
            {
                "text": "Without any faults; completely correct.",
                "examples": [
                    "The timing of the launch was perfect."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "more perfect",
        "superlative": "the most perfect",
        "emoji": "💯",
        "transcription": "ˈpərˌfɪkt"
    },
    {
        "word": "correct",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "incorrect",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Please check the figures are correct."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "more correct",
        "superlative": "the most correct",
        "emoji": "✅",
        "transcription": "kərˈɛkt"
    },
    {
        "word": "interesting",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "boring",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The new proposal is very interesting."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "more interesting",
        "superlative": "the most interesting",
        "emoji": "🧐",
        "transcription": "ˈɪntəˌrɛstɪŋ"
    },
    {
        "word": "boring",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "interesting",
        "oppositeEmoji": "🤩",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The training session was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "more boring",
        "superlative": "the most boring",
        "emoji": "😴",
        "transcription": "ˈbɔrɪŋ"
    },
    {
        "word": "special",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "ordinary",
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Different from what is usual; particularly important.",
                "examples": [
                    "She has a special talent for problem-solving."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "more special",
        "superlative": "the most special",
        "emoji": "💎",
        "transcription": "ˈspɛʃəl"
    },
    {
        "word": "friendly",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "unfriendly",
        "oppositeEmoji": "😠",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "synonyms": [
            "kind",
            "pleasant"
        ],
        "comparative": "more friendly",
        "superlative": "the most friendly",
        "emoji": "👋",
        "transcription": "ˈfrɛndli"
    },
    {
        "word": "kind",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "unkind",
        "oppositeEmoji": "🥀",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "synonyms": [
            "caring",
            "generous"
        ],
        "comparative": "kinder",
        "superlative": "the kindest",
        "emoji": "🤝",
        "transcription": "kaɪnd"
    },
    {
        "word": "unkind",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🥀",
        "form": "adjective",
        "opposite": "kind",
        "oppositeEmoji": "🤝",
        "subtext": "unkind words / be unkind",
        "synonyms": [
            "mean",
            "cruel"
        ],
        "definitions": [
            {
                "text": "Not kind; mean.",
                "examples": [
                    "It was unkind to say those things."
                ]
            }
        ],
        "comparative": "more unkind",
        "superlative": "the most unkind",
        "transcription": "ənˈkaɪnd"
    },
    {
        "word": "funny",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "serious",
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "synonyms": [
            "humorous",
            "amusing"
        ],
        "comparative": "funnier",
        "superlative": "the funniest",
        "emoji": "😂",
        "transcription": "ˈfəni"
    },
    {
        "word": "clever",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "stupid",
        "oppositeEmoji": "🤡",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "synonyms": [
            "intelligent",
            "smart"
        ],
        "comparative": "cleverer",
        "superlative": "the cleverest",
        "emoji": "🎓",
        "transcription": "ˈklɛvər"
    },
    {
        "word": "polite",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "rude",
        "oppositeEmoji": "😛",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "synonyms": [
            "respectful"
        ],
        "comparative": "more polite",
        "superlative": "the most polite",
        "emoji": "🙏",
        "transcription": "pəˈlaɪt"
    },
    {
        "word": "rude",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "polite",
        "oppositeEmoji": "🤝",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "synonyms": [
            "impolite",
            "disrespectful"
        ],
        "comparative": "ruder",
        "superlative": "the rudest",
        "emoji": "😛",
        "transcription": "rud"
    },
    {
        "word": "lazy",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "hardworking",
        "oppositeEmoji": "🐝",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "synonyms": [
            "idle"
        ],
        "comparative": "lazier",
        "superlative": "the laziest",
        "emoji": "🛋️",
        "transcription": "ˈleɪzi"
    },
    {
        "word": "honest",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "dishonest",
        "oppositeEmoji": "🤥",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "synonyms": [
            "truthful"
        ],
        "comparative": "more honest",
        "superlative": "the most honest",
        "emoji": "⚖️",
        "transcription": "ˈɑnəst"
    },
    {
        "word": "noisy",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "quiet",
        "oppositeEmoji": "🤫",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "synonyms": [
            "loud"
        ],
        "comparative": "noisier",
        "superlative": "the noisiest",
        "emoji": "📢",
        "transcription": "ˈnɔɪzi"
    },
    {
        "word": "round",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⭕",
        "form": "adjective",
        "opposite": "oval",
        "oppositeEmoji": "⬛",
        "subtext": "a round table / round shape",
        "synonyms": [
            "circular"
        ],
        "definitions": [
            {
                "text": "Shaped like a circle.",
                "examples": [
                    "The table is round."
                ]
            }
        ],
        "comparative": "rounder",
        "superlative": "the roundest",
        "transcription": "raʊnd"
    },
    {
        "word": "square",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": "triangular",
        "oppositeEmoji": "⭕",
        "subtext": "a square box / square shape",
        "synonyms": [
            "four-sided"
        ],
        "definitions": [
            {
                "text": "Having four equal sides and four 90-degree angles.",
                "examples": [
                    "The box is square."
                ]
            }
        ],
        "comparative": "squarer",
        "superlative": "the squarest",
        "transcription": "skwɛr"
    },
    {
        "word": "helpful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unhelpful",
        "oppositeEmoji": "😠",
        "subtext": "very helpful / a helpful person",
        "synonyms": [
            "useful",
            "kind"
        ],
        "definitions": [
            {
                "text": "Willing to help other people.",
                "examples": [
                    "My colleagues are very helpful."
                ]
            }
        ],
        "comparative": "more helpful",
        "superlative": "the most helpful",
        "transcription": "ˈhɛlpfəl"
    },
    {
        "word": "unhelpful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😠",
        "form": "adjective",
        "opposite": "helpful",
        "oppositeEmoji": "🤝",
        "subtext": "unhelpful advice / very unhelpful",
        "synonyms": [
            "useless"
        ],
        "definitions": [
            {
                "text": "Not helping in a situation.",
                "examples": [
                    "The staff were quite unhelpful when I asked for directions."
                ]
            }
        ],
        "comparative": "more unhelpful",
        "superlative": "the most unhelpful",
        "transcription": "ənˈhɛlpfəl"
    },
    {
        "word": "patient",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": "impatient",
        "oppositeEmoji": "⌚",
        "subtext": "be patient / a patient teacher",
        "synonyms": [
            "calm",
            "tolerant"
        ],
        "definitions": [
            {
                "text": "Able to wait for a long time without becoming angry.",
                "examples": [
                    "You need to be patient with new students."
                ]
            }
        ],
        "comparative": "more patient",
        "superlative": "the most patient",
        "transcription": "ˈpeɪʃənt"
    },
    {
        "word": "active",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "lazy",
        "oppositeEmoji": "🛋️",
        "subtext": "an active lifestyle / very active",
        "synonyms": [
            "energetic",
            "busy"
        ],
        "definitions": [
            {
                "text": "Doing a lot of things; busy.",
                "examples": [
                    "He is a very active person."
                ]
            }
        ],
        "comparative": "more active",
        "superlative": "the most active",
        "transcription": "ˈæktɪv"
    },
    {
        "word": "careful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "opposite": "careless",
        "subtext": "be careful / careful planning",
        "synonyms": [
            "cautious"
        ],
        "definitions": [
            {
                "text": "Giving a lot of attention to what you are doing so that you do not have an accident or make a mistake.",
                "examples": [
                    "Be careful when you drive."
                ]
            }
        ],
        "comparative": "more careful",
        "superlative": "the most careful",
        "transcription": "ˈkɛrfəl"
    },
    {
        "word": "creative",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🎨",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "subtext": "very creative / creative ideas",
        "synonyms": [
            "imaginative",
            "artistic"
        ],
        "definitions": [
            {
                "text": "Good at thinking of new ideas or making things.",
                "examples": [
                    "She is a very creative designer."
                ]
            }
        ],
        "comparative": "more creative",
        "superlative": "the most creative",
        "transcription": "kriˈeɪtɪv"
    },
    {
        "word": "cloudy",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☁️",
        "form": "adjective",
        "opposite": "sunny",
        "oppositeEmoji": "☀️",
        "subtext": "a cloudy sky / cloudy weather",
        "synonyms": [
            "overcast"
        ],
        "definitions": [
            {
                "text": "With many clouds in the sky.",
                "examples": [
                    "It is a cloudy day."
                ]
            }
        ],
        "comparative": "cloudier",
        "superlative": "the cloudiest",
        "transcription": "ˈklaʊdi"
    },
    {
        "word": "windy",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "💨",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "a windy day / very windy",
        "synonyms": [
            "breezy"
        ],
        "definitions": [
            {
                "text": "With a lot of wind.",
                "examples": [
                    "It is very windy today."
                ]
            }
        ],
        "comparative": "windier",
        "superlative": "the windiest",
        "transcription": "ˈwɪndi"
    },
    {
        "word": "snowy",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "sunny",
        "oppositeEmoji": "☀️",
        "subtext": "snowy mountains / a snowy winter",
        "synonyms": [
            "covered in snow"
        ],
        "definitions": [
            {
                "text": "With a lot of snow.",
                "examples": [
                    "We have snowy weather in January."
                ]
            }
        ],
        "comparative": "snowier",
        "superlative": "the snowiest",
        "transcription": "snoʊi"
    },
    {
        "word": "foggy",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌫️",
        "form": "adjective",
        "opposite": "clear",
        "oppositeEmoji": "💎",
        "subtext": "foggy morning / very foggy",
        "synonyms": [
            "misty"
        ],
        "definitions": [
            {
                "text": "With a lot of fog; difficult to see.",
                "examples": [
                    "It is foggy this morning."
                ]
            }
        ],
        "comparative": "foggier",
        "superlative": "the foggiest",
        "transcription": "ˈfɑgi"
    },
    {
        "word": "stormy",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "⛈️",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "stormy weather / a stormy night",
        "synonyms": [
            "rough"
        ],
        "definitions": [
            {
                "text": "With a lot of rain and strong winds.",
                "examples": [
                    "It was a stormy night."
                ]
            }
        ],
        "comparative": "stormier",
        "superlative": "the stormiest",
        "transcription": "ˈstɔrmi"
    },
    {
        "word": "blonde",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "opposite": "brunette",
        "oppositeEmoji": "👩🏻",
        "subtext": "blonde hair / a blonde woman",
        "synonyms": [
            "fair-haired"
        ],
        "definitions": [
            {
                "text": "Pale gold in color.",
                "examples": [
                    "She has blonde hair."
                ]
            }
        ],
        "comparative": "blonder",
        "superlative": "the blondest",
        "emoji": "👱‍♀️",
        "transcription": "blɑnd"
    },
    {
        "word": "smart",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "stupid",
        "oppositeEmoji": "🤡",
        "subtext": "a smart student / smart clothes",
        "synonyms": [
            "intelligent",
            "clever"
        ],
        "definitions": [
            {
                "text": "Intelligent; clever.",
                "examples": [
                    "He is a smart student."
                ]
            }
        ],
        "comparative": "smarter",
        "superlative": "the smartest",
        "emoji": "🎓",
        "transcription": "smɑrt"
    },
    {
        "word": "serious",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "opposite": "funny",
        "oppositeEmoji": "😂",
        "subtext": "a serious person / look serious",
        "synonyms": [
            "solemn",
            "sensible"
        ],
        "definitions": [
            {
                "text": "Thinking or acting in a careful and sensible way; not silly.",
                "examples": [
                    "He is a serious person."
                ]
            }
        ],
        "comparative": "more serious",
        "superlative": "the most serious",
        "emoji": "😐",
        "transcription": "ˈsɪriəs"
    },
    {
        "word": "ugly",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "opposite": "beautiful",
        "oppositeEmoji": "✨",
        "subtext": "ugly building / ugly duckling",
        "synonyms": [
            "unattractive"
        ],
        "definitions": [
            {
                "text": "Unpleasant to look at.",
                "examples": [
                    "It was an ugly building."
                ]
            }
        ],
        "comparative": "uglier",
        "superlative": "the ugliest",
        "emoji": "👹",
        "transcription": "ˈəgli"
    },
    {
        "word": "near",
        "level": "starter",
        "theme": "distance_A1",
        "form": "adjective",
        "opposite": "far",
        "oppositeEmoji": "🔭",
        "subtext": "near here / near the station",
        "synonyms": [
            "close"
        ],
        "definitions": [
            {
                "text": "Not far away in distance.",
                "examples": [
                    "The station is near the office."
                ]
            }
        ],
        "comparative": "nearer",
        "superlative": "the nearest",
        "emoji": "📍",
        "transcription": "nɪr"
    },
    {
        "word": "far",
        "level": "starter",
        "theme": "distance_A1",
        "form": "adjective",
        "opposite": "close",
        "oppositeEmoji": "📍",
        "subtext": "far away / far from",
        "synonyms": [
            "distant"
        ],
        "definitions": [
            {
                "text": "A long way away in distance.",
                "examples": [
                    "Is it far from here?"
                ]
            }
        ],
        "comparative": "farther",
        "superlative": "the farthest",
        "emoji": "🔭",
        "transcription": "fɑr"
    },
    {
        "word": "rich",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "adjective",
        "opposite": "poor",
        "oppositeEmoji": "🏚️",
        "subtext": "rich man / rich country / very rich",
        "synonyms": [
            "wealthy"
        ],
        "definitions": [
            {
                "text": "Having a lot of money.",
                "examples": [
                    "He is a very rich man."
                ]
            }
        ],
        "comparative": "richer",
        "superlative": "the richest",
        "transcription": "rɪʧ"
    },
    {
        "word": "poor",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏚️",
        "form": "adjective",
        "opposite": "rich",
        "oppositeEmoji": "💰",
        "subtext": "poor family / feel poor",
        "synonyms": [
            "broke",
            "impoverished"
        ],
        "definitions": [
            {
                "text": "Having very little money.",
                "examples": [
                    "They are poor but happy."
                ]
            }
        ],
        "comparative": "poorer",
        "superlative": "the poorest",
        "transcription": "pur"
    },
    {
        "word": "early",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "adjective",
        "opposite": "late",
        "oppositeEmoji": "🌙",
        "subtext": "early morning / early riser",
        "synonyms": [
            "soon"
        ],
        "definitions": [
            {
                "text": "Happening or arriving before the usual or expected time.",
                "examples": [
                    "I had an early breakfast."
                ]
            }
        ],
        "comparative": "earlier",
        "superlative": "the earliest",
        "transcription": "ˈərli"
    },
    {
        "word": "late",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "adjective",
        "opposite": "early",
        "oppositeEmoji": "🌅",
        "subtext": "late night / too late",
        "synonyms": [
            "tardy"
        ],
        "definitions": [
            {
                "text": "Happening or arriving after the usual or expected time.",
                "examples": [
                    "I had a late dinner."
                ]
            }
        ],
        "comparative": "later",
        "superlative": "the latest",
        "transcription": "leɪt"
    },
    {
        "word": "hardworking",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🐝",
        "form": "adjective",
        "opposite": "lazy",
        "oppositeEmoji": "🛋️",
        "subtext": "a hardworking student / very hardworking",
        "synonyms": [
            "diligent",
            "busy"
        ],
        "definitions": [
            {
                "text": "Putting a lot of effort into work.",
                "examples": [
                    "She is a very hardworking manager."
                ]
            }
        ],
        "comparative": "more hardworking",
        "superlative": "the most hardworking",
        "transcription": "ˈhɑrdˌwərkɪŋ"
    },
    {
        "word": "exciting",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "🤩",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😴",
        "subtext": "an exciting trip / very exciting",
        "synonyms": [
            "thrilling",
            "interesting"
        ],
        "definitions": [
            {
                "text": "Making you feel very happy and enthusiastic.",
                "examples": [
                    "It was an exciting game."
                ]
            }
        ],
        "comparative": "more exciting",
        "superlative": "the most exciting",
        "transcription": "ɪkˈsaɪtɪŋ"
    },
    {
        "word": "delicious",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "😋",
        "form": "adjective",
        "opposite": "disgusting",
        "oppositeEmoji": "🤢",
        "subtext": "delicious meal / smell delicious",
        "synonyms": [
            "tasty",
            "yummy"
        ],
        "definitions": [
            {
                "text": "Having a very pleasant taste or smell.",
                "examples": [
                    "The food is delicious."
                ]
            }
        ],
        "comparative": "more delicious",
        "superlative": "the most delicious",
        "transcription": "dɪˈlɪʃəs"
    },
    {
        "word": "sweet",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍬",
        "form": "adjective",
        "opposite": "bitter",
        "oppositeEmoji": "🍋",
        "subtext": "sweet fruit / sweet tooth / very sweet",
        "synonyms": [
            "sugary"
        ],
        "definitions": [
            {
                "text": "Having a taste like sugar.",
                "examples": [
                    "I like sweet things."
                ]
            }
        ],
        "comparative": "sweeter",
        "superlative": "the sweetest",
        "transcription": "swit"
    },
    {
        "word": "comfortable",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🪑",
        "subtext": "a comfortable chair / feel comfortable",
        "synonyms": [
            "relaxed",
            "cozy"
        ],
        "definitions": [
            {
                "text": "Making you feel physically relaxed, without any pain or without being too hot, cold, etc.",
                "examples": [
                    "This chair is very comfortable."
                ]
            }
        ],
        "comparative": "more comfortable",
        "superlative": "the most comfortable",
        "transcription": "ˈkəmfərtəbəl"
    },
    {
        "word": "uncomfortable",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🛋️",
        "subtext": "feel uncomfortable / uncomfortable chair",
        "synonyms": [
            "awkward",
            "painful"
        ],
        "definitions": [
            {
                "text": "Not comfortable; causing physical pain or feeling awkward.",
                "examples": [
                    "This chair is very uncomfortable."
                ]
            }
        ],
        "comparative": "more uncomfortable",
        "superlative": "the most uncomfortable",
        "transcription": "ənˈkəmfərtəbəl"
    },
    {
        "word": "real",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "fake",
        "oppositeEmoji": "🎭",
        "subtext": "a real person / is it real?",
        "synonyms": [
            "true",
            "authentic"
        ],
        "definitions": [
            {
                "text": "Actually existing or happening; not false.",
                "examples": [
                    "Is this a real diamond?"
                ]
            }
        ],
        "comparative": "more real",
        "superlative": "the most real",
        "transcription": "ril"
    },
    {
        "word": "simple",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "complex",
        "oppositeEmoji": "🧩",
        "subtext": "a simple question / nice and simple",
        "synonyms": [
            "easy",
            "basic"
        ],
        "definitions": [
            {
                "text": "Easy to understand or do; not complex.",
                "examples": [
                    "This is a simple problem."
                ]
            }
        ],
        "comparative": "simpler",
        "superlative": "the simplest",
        "transcription": "ˈsɪmpəl"
    },
    {
        "word": "natural",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "opposite": "artificial",
        "oppositeEmoji": "🤖",
        "subtext": "natural light / natural products",
        "synonyms": [
            "nature-made"
        ],
        "definitions": [
            {
                "text": "Existing in nature; not made or caused by people.",
                "examples": [
                    "I prefer natural products."
                ]
            }
        ],
        "comparative": "more natural",
        "superlative": "the most natural",
        "transcription": "ˈnæʧərəl"
    },
    {
        "word": "clear",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💧",
        "form": "adjective",
        "opposite": "unclear",
        "oppositeEmoji": "🌫️",
        "subtext": "a clear sky",
        "synonyms": [
            "obvious",
            "transparent",
            "speak clearly"
        ],
        "definitions": [
            {
                "text": "Easy to see through; easy to understand.",
                "examples": [
                    "The water is very clear.",
                    "It is a clear day."
                ]
            }
        ],
        "comparative": "clearer",
        "superlative": "the clearest",
        "transcription": "klɪr"
    },
    {
        "word": "common",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔄",
        "form": "adjective",
        "opposite": "rare",
        "oppositeEmoji": "💎",
        "subtext": "a common problem",
        "synonyms": [
            "usual",
            "frequent",
            "shared by all"
        ],
        "definitions": [
            {
                "text": "Happening often; shared by many people.",
                "examples": [
                    "It is a common mistake."
                ]
            }
        ],
        "comparative": "commoner",
        "superlative": "the commonest",
        "transcription": "ˈkɑmən"
    },
    {
        "word": "famous",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "unknown",
        "oppositeEmoji": "👤",
        "subtext": "a famous person / become famous",
        "synonyms": [
            "well-known",
            "popular"
        ],
        "definitions": [
            {
                "text": "Known by many people.",
                "examples": [
                    "He is a famous actor."
                ]
            }
        ],
        "comparative": "more famous",
        "superlative": "the most famous",
        "transcription": "ˈfeɪməs"
    },
    {
        "word": "salty",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧂",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🍬",
        "subtext": "salty snacks / too salty",
        "synonyms": [
            "tasting of salt"
        ],
        "definitions": [
            {
                "text": "Containing or tasting of salt.",
                "examples": [
                    "The popcorn is very salty."
                ]
            }
        ],
        "comparative": "saltier",
        "superlative": "the saltiest",
        "transcription": "ˈsɔlti"
    },
    {
        "word": "sour",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍋",
        "form": "adjective",
        "opposite": "sweet",
        "oppositeEmoji": "🍬",
        "subtext": "a sour taste / sour lemons",
        "synonyms": [
            "sharp-tasting"
        ],
        "definitions": [
            {
                "text": "Having a sharp taste like that of a lemon.",
                "examples": [
                    "Lemons are sour."
                ]
            }
        ],
        "comparative": "sourer",
        "superlative": "the sourest",
        "transcription": "saʊər"
    },
    {
        "word": "bitter",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "☕",
        "form": "adjective",
        "opposite": "sweet",
        "oppositeEmoji": "🍬",
        "subtext": "a bitter taste / bitter coffee",
        "synonyms": [
            "strong",
            "sharp"
        ],
        "definitions": [
            {
                "text": "Having a strong sharp taste that is not sweet.",
                "examples": [
                    "This coffee is very bitter."
                ]
            }
        ],
        "comparative": "bitterer",
        "superlative": "the bitterest",
        "transcription": "ˈbɪtər"
    },
    {
        "word": "fat",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🍔",
        "form": "adjective",
        "opposite": "thin",
        "oppositeEmoji": "🥬",
        "subtext": "a fat cat",
        "synonyms": [
            "overweight",
            "gain weight"
        ],
        "definitions": [
            {
                "text": "Having a lot of extra flesh on your body.",
                "examples": [
                    "The cat is fat because it eats a lot."
                ]
            }
        ],
        "comparative": "fatter",
        "superlative": "the fattest",
        "transcription": "fæt"
    },
    {
        "word": "thin",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🥬",
        "form": "adjective",
        "opposite": "thick",
        "oppositeEmoji": "🍔",
        "subtext": "he is thin / thin legs",
        "synonyms": [
            "slim",
            "skinny"
        ],
        "definitions": [
            {
                "text": "Having very little extra flesh on your body.",
                "examples": [
                    "He is very tall and thin."
                ]
            }
        ],
        "comparative": "thinner",
        "superlative": "the thinnest",
        "transcription": "θɪn"
    },
    {
        "word": "curly",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🌀",
        "form": "adjective",
        "opposite": "straight",
        "oppositeEmoji": "📏",
        "subtext": "curly hair / short curly hair",
        "synonyms": [
            "wavy"
        ],
        "definitions": [
            {
                "text": "Having curls or a curved shape.",
                "examples": [
                    "She has curly brown hair."
                ]
            }
        ],
        "comparative": "curlier",
        "superlative": "the curliest",
        "transcription": "ˈkərli"
    },
    {
        "word": "straight",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "📏",
        "form": "adjective",
        "opposite": "curly",
        "oppositeEmoji": "🌀",
        "subtext": "straight hair / long straight hair",
        "synonyms": [
            "not curly"
        ],
        "definitions": [
            {
                "text": "Not curving or bending.",
                "examples": [
                    "He has straight black hair."
                ]
            }
        ],
        "comparative": "straighter",
        "superlative": "the straightest",
        "transcription": "streɪt"
    },
    {
        "word": "triangular",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "adjective",
        "opposite": "square",
        "subtext": "a triangular shape",
        "synonyms": [
            "three-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a triangle.",
                "examples": [
                    "The sign is triangular."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "traɪˈæŋgjələr"
    },
    {
        "word": "rectangular",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "▭",
        "form": "adjective",
        "opposite": "round",
        "subtext": "a rectangular room",
        "synonyms": [
            "four-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a rectangle.",
                "examples": [
                    "We have a rectangular table in the kitchen."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "rɛkˈtæŋgjələr"
    },
    {
        "word": "oval",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🥚",
        "form": "adjective",
        "opposite": "round",
        "subtext": "an oval mirror",
        "synonyms": [
            "egg-shaped"
        ],
        "definitions": [
            {
                "text": "Shaped like an egg.",
                "examples": [
                    "The mirror is oval."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈoʊvəl"
    },
    {
        "word": "favourite",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⭐",
        "form": "adjective",
        "opposite": "hated",
        "oppositeEmoji": "😡",
        "subtext": "my favourite film / favourite food",
        "synonyms": [
            "preferred"
        ],
        "definitions": [
            {
                "text": "The one that you like the most.",
                "examples": [
                    "What is your favourite colour?",
                    "Pizza is my favourite food."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈfeɪvərɪt"
    },
    {
        "word": "dark",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌑",
        "form": "adjective",
        "opposite": "bright",
        "oppositeEmoji": "💡",
        "subtext": "dark blue / a dark night",
        "synonyms": [
            "not light"
        ],
        "definitions": [
            {
                "text": "With little or no light.",
                "examples": [
                    "It is dark outside.",
                    "He has dark hair."
                ]
            }
        ],
        "comparative": "darker",
        "superlative": "the darkest",
        "transcription": "dɑrk"
    },
    {
        "word": "bright",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💡",
        "form": "adjective",
        "opposite": "dark",
        "oppositeEmoji": "🌑",
        "subtext": "bright colors / a bright day",
        "synonyms": [
            "shining",
            "light"
        ],
        "definitions": [
            {
                "text": "Full of light, or shining with much light.",
                "examples": [
                    "The sun is very bright today.",
                    "She is wearing a bright yellow dress."
                ]
            }
        ],
        "comparative": "brighter",
        "superlative": "the brightest",
        "transcription": "braɪt"
    },
    {
        "word": "gold",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟡",
        "form": "adjective",
        "opposite": "silver",
        "subtext": "a gold ring / gold medal",
        "synonyms": [
            "golden"
        ],
        "definitions": [
            {
                "text": "Having the color of gold.",
                "examples": [
                    "She has a gold watch."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "goʊld"
    },
    {
        "word": "silver",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⚪",
        "form": "adjective",
        "opposite": "gold",
        "subtext": "a silver car / silver jewelry",
        "synonyms": [
            "silvery"
        ],
        "definitions": [
            {
                "text": "Having the color of silver.",
                "examples": [
                    "He has a silver car."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈsɪlvər"
    },
    {
        "word": "deep",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🕳️",
        "form": "adjective",
        "opposite": "shallow",
        "oppositeEmoji": "📏",
        "subtext": "deep water / a deep hole",
        "synonyms": [
            "bottomless"
        ],
        "definitions": [
            {
                "text": "Going a long way from the top or surface to the bottom.",
                "examples": [
                    "The river is very deep here."
                ]
            }
        ],
        "comparative": "deeper",
        "superlative": "the deepest",
        "transcription": "dip"
    },
    {
        "word": "shallow",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "opposite": "deep",
        "oppositeEmoji": "🕳️",
        "subtext": "shallow water / a shallow end",
        "synonyms": [
            "not deep"
        ],
        "definitions": [
            {
                "text": "Having only a short distance from the top to the bottom.",
                "examples": [
                    "The water is shallow, so we can walk across."
                ]
            }
        ],
        "comparative": "shallower",
        "superlative": "the shallowest",
        "transcription": "ˈʃæloʊ"
    },
    {
        "word": "modern",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏙️",
        "form": "adjective",
        "opposite": "ancient",
        "oppositeEmoji": "🏛️",
        "subtext": "a modern building / modern life",
        "synonyms": [
            "contemporary",
            "new"
        ],
        "definitions": [
            {
                "text": "Designed and made using the most recent ideas and methods.",
                "examples": [
                    "They live in a modern house."
                ]
            }
        ],
        "comparative": "more modern",
        "superlative": "the most modern",
        "transcription": "ˈmɑdərn"
    },
    {
        "word": "ancient",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏛️",
        "form": "adjective",
        "opposite": "modern",
        "oppositeEmoji": "🏙️",
        "subtext": "ancient history / an ancient city",
        "synonyms": [
            "very old",
            "antique"
        ],
        "definitions": [
            {
                "text": "From a long time ago; very old.",
                "examples": [
                    "We visited an ancient city in Greece."
                ]
            }
        ],
        "comparative": "more ancient",
        "superlative": "the most ancient",
        "transcription": "ˈeɪnʧənt"
    },
    {
        "word": "brave",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🦁",
        "form": "adjective",
        "opposite": "cowardly",
        "oppositeEmoji": "😨",
        "subtext": "a brave soldier / be brave",
        "synonyms": [
            "courageous"
        ],
        "definitions": [
            {
                "text": "Willing to do things that are dangerous, and does not show fear in difficult situations.",
                "examples": [
                    "The firefighter was very brave."
                ]
            }
        ],
        "comparative": "braver",
        "superlative": "the bravest",
        "transcription": "breɪv"
    },
    {
        "word": "cowardly",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
        "subtext": "a cowardly act / don't be cowardly",
        "synonyms": [
            "fearful"
        ],
        "definitions": [
            {
                "text": "Not brave.",
                "examples": [
                    "He was too cowardly to tell the truth."
                ]
            }
        ],
        "comparative": "more cowardly",
        "superlative": "the most cowardly",
        "transcription": "ˈkaʊərdli"
    },
    {
        "word": "wide",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "↔️",
        "form": "adjective",
        "opposite": "narrow",
        "oppositeEmoji": "⬇️",
        "subtext": "a wide road / wide open",
        "synonyms": [
            "broad"
        ],
        "definitions": [
            {
                "text": "Measuring a long distance from one side to the other.",
                "examples": [
                    "The river is very wide here."
                ]
            }
        ],
        "comparative": "wider",
        "superlative": "the widest",
        "transcription": "waɪd"
    },
    {
        "word": "narrow",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "⬇️",
        "form": "adjective",
        "opposite": "wide",
        "oppositeEmoji": "↔️",
        "subtext": "a narrow street / too narrow",
        "synonyms": [
            "thin"
        ],
        "definitions": [
            {
                "text": "Measuring only a small distance from one side to the other.",
                "examples": [
                    "The path was too narrow for the car."
                ]
            }
        ],
        "comparative": "narrower",
        "superlative": "the narrowest",
        "transcription": "ˈnɛroʊ"
    },
    {
        "word": "lucky",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🍀",
        "form": "adjective",
        "opposite": "unlucky",
        "oppositeEmoji": "😿",
        "subtext": "a lucky person / feel lucky",
        "synonyms": [
            "fortunate"
        ],
        "definitions": [
            {
                "text": "Having good luck.",
                "examples": [
                    "He is very lucky to have such a good job."
                ]
            }
        ],
        "comparative": "luckier",
        "superlative": "the luckiest",
        "transcription": "ˈləki"
    },
    {
        "word": "calm",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stormy",
        "oppositeEmoji": "😟",
        "subtext": "stay calm / a calm sea",
        "synonyms": [
            "peaceful",
            "quiet"
        ],
        "definitions": [
            {
                "text": "Peaceful, quiet, and without worry.",
                "examples": [
                    "The sea is very calm today.",
                    "Please stay calm."
                ]
            }
        ],
        "comparative": "calmer",
        "superlative": "the calmest",
        "transcription": "kɑm"
    },
    {
        "word": "married",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "💍",
        "form": "adjective",
        "opposite": "single",
        "oppositeEmoji": "👤",
        "subtext": "having a husband or wife / a married couple / get married",
        "definitions": [
            {
                "text": "Having a husband or wife.",
                "examples": [
                    "Are you married?"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈmɛrid"
    },
    {
        "word": "single",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "married",
        "oppositeEmoji": "💍",
        "subtext": "a single man",
        "synonyms": [
            "not married"
        ],
        "definitions": [
            {
                "text": "Not married or in a serious relationship.",
                "examples": [
                    "He is single and lives alone."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈsɪŋgəl"
    },
    {
        "word": "well",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "💪",
        "form": "adjective",
        "opposite": "ill",
        "oppositeEmoji": "🤒",
        "subtext": "feel well / get well soon",
        "synonyms": [
            "healthy",
            "fit"
        ],
        "definitions": [
            {
                "text": "Healthy; not ill.",
                "examples": [
                    "I hope you are well.",
                    "She feels well today."
                ]
            }
        ],
        "comparative": "better",
        "superlative": "the best",
        "transcription": "wɛl"
    },
    {
        "word": "purple",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟣",
        "form": "adjective",
        "definitions": [
            {
                "text": "A color between blue and red.",
                "examples": [
                    "I have a purple shirt."
                ]
            }
        ],
        "subtext": "purple flowers / bright purple",
        "synonyms": [
            "violet"
        ],
        "comparative": "more purple",
        "superlative": "the most purple",
        "opposite": "yellow",
        "transcription": "ˈpərpəl"
    },
    {
        "word": "able",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💪",
        "form": "adjective",
        "opposite": "unable",
        "definitions": [
            {
                "text": "Having the power, skill, knowledge, or money to do something.",
                "examples": [
                    "She is able to speak three languages."
                ]
            }
        ],
        "subtext": "be able to / highly able",
        "synonyms": [
            "capable"
        ],
        "comparative": "abler",
        "superlative": "the ablest",
        "transcription": "ˈeɪbəl"
    },
    {
        "word": "close",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "far",
        "definitions": [
            {
                "text": "Near in space or time.",
                "examples": [
                    "The station is close to the hotel."
                ]
            }
        ],
        "subtext": "close to / very close",
        "synonyms": [
            "near"
        ],
        "comparative": "closer",
        "superlative": "the closest",
        "transcription": "kloʊz"
    },
    {
        "word": "dead",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "💀",
        "form": "adjective",
        "opposite": "alive",
        "definitions": [
            {
                "text": "Not living anymore.",
                "examples": [
                    "The flowers are dead."
                ]
            }
        ],
        "subtext": "dead leaves / completely dead",
        "synonyms": [
            "deceased"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "dɛd"
    },
    {
        "word": "fair",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "unfair",
        "definitions": [
            {
                "text": "Treating people equally or in a right way.",
                "examples": [
                    "It is a fair decision."
                ]
            }
        ],
        "subtext": "a fair price / be fair",
        "synonyms": [
            "just"
        ],
        "comparative": "fairer",
        "superlative": "the fairest",
        "transcription": "fɛr"
    },
    {
        "word": "fine",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Good or acceptable; healthy.",
                "examples": [
                    "I am fine, thank you.",
                    "The weather is fine today."
                ]
            }
        ],
        "subtext": "feel fine / a fine day",
        "synonyms": [
            "okay",
            "good"
        ],
        "comparative": "finer",
        "superlative": "the finest",
        "transcription": "faɪn"
    },
    {
        "word": "glad",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "happy",
        "definitions": [
            {
                "text": "Happy and pleased.",
                "examples": [
                    "I am glad to see you."
                ]
            }
        ],
        "subtext": "glad that / so glad",
        "synonyms": [
            "happy",
            "pleased"
        ],
        "comparative": "gladder",
        "superlative": "the gladdest",
        "transcription": "glæd"
    },
    {
        "word": "interested",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "🧐",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Wanting to give your attention to something or learn more about it.",
                "examples": [
                    "I am interested in history."
                ]
            }
        ],
        "subtext": "interested in / very interested",
        "synonyms": [
            "curious"
        ],
        "comparative": "more interested",
        "superlative": "the most interested",
        "transcription": "ˈɪntəˌrɛstɪd"
    },
    {
        "word": "only",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "1️⃣",
        "form": "adjective",
        "opposite": "many",
        "definitions": [
            {
                "text": "Used to show that there is only one or a few of something.",
                "examples": [
                    "She is the only student in the classroom."
                ]
            }
        ],
        "subtext": "the only one / only child",
        "synonyms": [
            "sole"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈoʊnli"
    },
    {
        "word": "other",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "➕",
        "form": "adjective",
        "opposite": "same",
        "definitions": [
            {
                "text": "Used to refer to people or things that are different from the ones already mentioned.",
                "examples": [
                    "Where are the other students?"
                ]
            }
        ],
        "subtext": "the other one / some other",
        "synonyms": [
            "different"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈəðər"
    },
    {
        "word": "own",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "shared",
        "definitions": [
            {
                "text": "Belonging to or done by a particular person.",
                "examples": [
                    "I have my own room."
                ]
            }
        ],
        "subtext": "on my own / my own car",
        "synonyms": [
            "personal"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "oʊn"
    },
    {
        "word": "quick",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "opposite": "slow",
        "definitions": [
            {
                "text": "Happening or done in a short time.",
                "examples": [
                    "She gave a quick answer."
                ]
            }
        ],
        "subtext": "a quick lunch / very quick",
        "synonyms": [
            "fast"
        ],
        "comparative": "quicker",
        "superlative": "the quickest",
        "transcription": "kwɪk"
    },
    {
        "word": "ready",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "unready",
        "definitions": [
            {
                "text": "Prepared for what you are going to do.",
                "examples": [
                    "Are you ready for work?"
                ]
            }
        ],
        "subtext": "get ready / almost ready",
        "synonyms": [
            "prepared"
        ],
        "comparative": "readier",
        "superlative": "the readiest",
        "transcription": "ˈrɛdi"
    },
    {
        "word": "unready",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "ready",
        "oppositeEmoji": "✅",
        "subtext": "unready for the change",
        "synonyms": [
            "not prepared"
        ],
        "definitions": [
            {
                "text": "Not prepared or ready for something.",
                "examples": [
                    "We were unready for such a big project."
                ]
            }
        ],
        "comparative": "more unready",
        "superlative": "the most unready",
        "transcription": "ʌnˈrɛdi"
    },
    {
        "word": "rough",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧱",
        "form": "adjective",
        "opposite": "smooth",
        "definitions": [
            {
                "text": "Not smooth.",
                "examples": [
                    "The dog has rough fur."
                ]
            }
        ],
        "subtext": "rough skin / rough sea",
        "synonyms": [
            "uneven"
        ],
        "comparative": "rougher",
        "superlative": "the roughest",
        "transcription": "rəf"
    },
    {
        "word": "sharp",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🔪",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Having a thin edge that is able to cut things or a fine point which is able to make a hole in things.",
                "examples": [
                    "This knife is very sharp."
                ]
            }
        ],
        "subtext": "a sharp knife / very sharp",
        "synonyms": [
            "pointed"
        ],
        "comparative": "sharper",
        "superlative": "the sharpest",
        "transcription": "ʃɑrp"
    },
    {
        "word": "shy",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😳",
        "form": "adjective",
        "opposite": "confident",
        "definitions": [
            {
                "text": "Nervous and uncomfortable about meeting and talking to other people.",
                "examples": [
                    "He is a shy boy."
                ]
            }
        ],
        "subtext": "feel shy / quite shy",
        "synonyms": [
            "timid"
        ],
        "comparative": "shyer",
        "superlative": "the shyest",
        "transcription": "ʃaɪ"
    },
    {
        "word": "thick",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "thin",
        "definitions": [
            {
                "text": "Having a large distance between two sides.",
                "examples": [
                    "This is a thick book."
                ]
            }
        ],
        "subtext": "thick walls / thick hair",
        "synonyms": [
            "wide"
        ],
        "comparative": "thicker",
        "superlative": "the thickest",
        "transcription": "θɪk"
    },
    {
        "word": "true",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "false",
        "definitions": [
            {
                "text": "Based on facts and not imaginary.",
                "examples": [
                    "Is the story true?"
                ]
            }
        ],
        "subtext": "come true",
        "synonyms": [
            "real",
            "truly"
        ],
        "comparative": "truer",
        "superlative": "the truest",
        "transcription": "tru"
    },
    {
        "word": "false",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "true",
        "oppositeEmoji": "✅",
        "subtext": "true or false / false information",
        "synonyms": [
            "incorrect"
        ],
        "definitions": [
            {
                "text": "Not true; incorrect.",
                "examples": [
                    "The statement is false."
                ]
            }
        ],
        "comparative": "falser",
        "superlative": "the falsest",
        "transcription": "fɔls"
    },
    {
        "word": "stupid",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "🤡",
        "form": "adjective",
        "opposite": "smart",
        "definitions": [
            {
                "text": "Silly or not intelligent.",
                "examples": [
                    "It was a stupid mistake."
                ]
            }
        ],
        "subtext": "don't be stupid / very stupid",
        "synonyms": [
            "silly"
        ],
        "comparative": "stupider",
        "superlative": "the stupidest",
        "transcription": "ˈstupɪd"
    },
    {
        "word": "sure",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "unsure",
        "definitions": [
            {
                "text": "Certain; having no doubt.",
                "examples": [
                    "I am sure about the answer.",
                    "Are you sure?"
                ]
            }
        ],
        "subtext": "make sure / pretty sure",
        "synonyms": [
            "certain"
        ],
        "comparative": "surer",
        "superlative": "the surest",
        "transcription": "ʃʊr"
    },
    {
        "word": "unsure",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❓",
        "form": "adjective",
        "opposite": "sure",
        "oppositeEmoji": "✅",
        "subtext": "feel unsure / unsure about",
        "synonyms": [
            "uncertain"
        ],
        "definitions": [
            {
                "text": "Not certain about something.",
                "examples": [
                    "I am unsure about what to do next."
                ]
            }
        ],
        "comparative": "more unsure",
        "superlative": "the most unsure",
        "transcription": "ənˈʃʊr"
    },
    {
        "word": "nasty",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😠",
        "form": "adjective",
        "opposite": "nice",
        "oppositeEmoji": "😊",
        "subtext": "a nasty person / nasty weather",
        "synonyms": [
            "unpleasant",
            "mean"
        ],
        "definitions": [
            {
                "text": "Very bad or unpleasant; unkind.",
                "examples": [
                    "Don't be nasty to your colleagues."
                ]
            }
        ],
        "comparative": "nastier",
        "superlative": "the nastiest",
        "transcription": "ˈnæsti"
    },
    {
        "word": "incorrect",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "correct",
        "oppositeEmoji": "✅",
        "subtext": "incorrect answer / absolutely incorrect",
        "synonyms": [
            "wrong",
            "false"
        ],
        "definitions": [
            {
                "text": "Not correct; wrong.",
                "examples": [
                    "The information in the report was incorrect."
                ]
            }
        ],
        "comparative": "more incorrect",
        "superlative": "the most incorrect",
        "transcription": "ˌɪnkərˈɛkt"
    },
    {
        "word": "smooth",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧼",
        "form": "adjective",
        "opposite": "rough",
        "oppositeEmoji": "🧱",
        "subtext": "smooth skin / smooth surface",
        "synonyms": [
            "flat",
            "even"
        ],
        "definitions": [
            {
                "text": "Having an even and regular surface or consistency; not rough.",
                "examples": [
                    "The table has a very smooth surface."
                ]
            }
        ],
        "comparative": "smoother",
        "superlative": "the smoothest",
        "transcription": "smuð"
    },
    {
        "word": "normal",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😐",
        "form": "adjective",
        "opposite": "strange",
        "oppositeEmoji": "❓",
        "subtext": "normal day / back to normal",
        "synonyms": [
            "usual",
            "ordinary"
        ],
        "definitions": [
            {
                "text": "Usual, ordinary, or expected.",
                "examples": [
                    "It was a normal working day."
                ]
            }
        ],
        "comparative": "more normal",
        "superlative": "the most normal",
        "transcription": "ˈnɔrməl"
    },
    {
        "word": "alive",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "opposite": "dead",
        "oppositeEmoji": "💀",
        "subtext": "stay alive / still alive",
        "synonyms": [
            "living"
        ],
        "definitions": [
            {
                "text": "Living, not dead.",
                "examples": [
                    "The plant is still alive."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "əˈlaɪv"
    },
    {
        "word": "many",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "🔢",
        "form": "adjective",
        "opposite": "few",
        "oppositeEmoji": "🤏",
        "subtext": "a lot of, numerous / many people / how many?",
        "definitions": [
            {
                "text": "Used for saying that there are a large number of people or things.",
                "examples": [
                    "There are many students in the class."
                ]
            }
        ],
        "comparative": "more",
        "superlative": "the most",
        "transcription": "ˈmɛni"
    },
    {
        "word": "shared",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "👥",
        "form": "adjective",
        "opposite": "own",
        "oppositeEmoji": "👤",
        "subtext": "shared room / shared office",
        "synonyms": [
            "common"
        ],
        "definitions": [
            {
                "text": "Used or owned by more than one person.",
                "examples": [
                    "We work in a shared office."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ʃɛrd"
    },
    {
        "word": "unclear",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌫️",
        "form": "adjective",
        "opposite": "clear",
        "oppositeEmoji": "💧",
        "subtext": "unclear instructions / feel unclear",
        "synonyms": [
            "confusing",
            "vague"
        ],
        "definitions": [
            {
                "text": "Not easy to understand; not clear.",
                "examples": [
                    "The instructions were unclear."
                ]
            }
        ],
        "comparative": "more unclear",
        "superlative": "the most unclear",
        "transcription": "ənˈklɪr"
    },
    {
        "word": "few",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "🤏",
        "form": "adjective",
        "opposite": "many",
        "oppositeEmoji": "🔢",
        "subtext": "a few / very few",
        "synonyms": [
            "not many"
        ],
        "definitions": [
            {
                "text": "Used for saying that there are only a small number of people or things.",
                "examples": [
                    "There are few students here today."
                ]
            }
        ],
        "comparative": "fewer",
        "superlative": "the fewest",
        "transcription": "fju"
    },
    {
        "word": "possible",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "impossible",
        "transcription": "ˈpɒsəbl",
        "definitions": [
            {
                "text": "Able to be done or achieved.",
                "examples": [
                    "Is it possible to come tomorrow?",
                    "Everything is possible if you try."
                ]
            }
        ],
        "comparative": "more possible",
        "superlative": "the most possible",
        "subtext": "as soon as possible, if possible"
    },
    {
        "word": "useful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "useless",
        "transcription": "ˈjuːsfl",
        "definitions": [
            {
                "text": "Helping you to do or achieve something.",
                "examples": [
                    "This is a very useful book.",
                    "The internet is useful for studying."
                ]
            }
        ],
        "comparative": "more useful",
        "superlative": "the most useful",
        "subtext": "very useful, useful information"
    },
    {
        "word": "nationality",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🏳️",
        "form": "noun",
        "plural": "nationalities",
        "transcription": "ˌnæʃəˈnæləti",
        "definitions": [
            {
                "text": "The legal right of belonging to a particular nation.",
                "examples": [
                    "What is your nationality?",
                    "She has dual nationality."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "British nationality, dual nationality"
    },
    {
        "word": "occupation",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "plural": "occupations",
        "transcription": "ˌɒkjuˈpeɪʃn",
        "definitions": [
            {
                "text": "A person's job or profession.",
                "examples": [
                    "Please state your occupation.",
                    "He is a teacher by occupation."
                ]
            }
        ],
        "countability": "countable",
        "subtext": "current occupation, professional occupation"
    },
    {
        "word": "about",
        "level": "starter",
        "theme": "prepositions_time_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "On the subject of; or approximately.",
                "examples": [
                    "A book about animals.",
                    "It is about six o'clock."
                ]
            }
        ],
        "emoji": "📖",
        "transcription": "əˈbaʊt",
        "subtext": "about"
    },
    {
        "word": "around",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "In a circle or in various places.",
                "examples": [
                    "We sat around the table.",
                    "Walk around the city."
                ]
            }
        ],
        "emoji": "⭕",
        "transcription": "əˈraʊnd",
        "subtext": "around"
    },
    {
        "word": "by",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show how someone travels or how something is done.",
                "examples": [
                    "I go to work by bus.",
                    "He is standing by the door."
                ]
            }
        ],
        "emoji": "🚌",
        "transcription": "baɪ",
        "subtext": "by"
    },
    {
        "word": "of",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Belonging to or connected with.",
                "examples": [
                    "The capital of England.",
                    "A cup of tea."
                ]
            }
        ],
        "emoji": "🔗",
        "transcription": "ɒv",
        "subtext": "of"
    },
    {
        "word": "hi",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "noun",
        "definitions": [
            {
                "text": "A friendly greeting.",
                "examples": [
                    "Hi, how are you?"
                ]
            }
        ],
        "subtext": "greeting",
        "countability": "countable",
        "transcription": "haɪ"
    },
    {
        "word": "thanks",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "form": "noun",
        "definitions": [
            {
                "text": "A way of saying thank you.",
                "examples": [
                    "Thanks for your help."
                ]
            }
        ],
        "subtext": "gratitude",
        "countability": "uncountable",
        "transcription": "θæŋks"
    },
    {
        "word": "bye",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "noun",
        "definitions": [
            {
                "text": "A way of saying goodbye.",
                "examples": [
                    "Bye! See you tomorrow."
                ]
            }
        ],
        "subtext": "farewell",
        "countability": "countable",
        "transcription": "baɪ"
    },
    {
        "word": "alphabet",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🔤",
        "form": "noun",
        "definitions": [
            {
                "text": "A set of letters used for writing a language.",
                "examples": [
                    "The English alphabet has 26 letters."
                ]
            }
        ],
        "subtext": "letters",
        "countability": "countable",
        "transcription": "ˈælfəˌbɛt"
    },
    {
        "word": "color",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🎨",
        "form": "noun",
        "definitions": [
            {
                "text": "Red, blue, green, etc. (American spelling)",
                "examples": [
                    "What is your favorite color?"
                ]
            }
        ],
        "subtext": "visual property",
        "countability": "countable",
        "transcription": "ˈkələr"
    },
    {
        "word": "season",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "One of the four periods of the year (spring, summer, autumn, winter).",
                "examples": [
                    "Winter is my favorite season."
                ]
            }
        ],
        "subtext": "time of year",
        "countability": "countable",
        "transcription": "ˈsizən"
    }
    ,
    {
        "word": "a",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "🅰️",
        "form": "determiner",
        "transcription": "ə",
        "definitions": [
            {
                "text": "Used before a noun to refer to one thing or person for the first time.",
                "examples": [
                    "I have a car.",
                    "She is a doctor."
                ]
            }
        ],
        "subtext": "indefinite article",
        "opposite": "the"
    },
    {
        "word": "an",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "🅰️",
        "form": "determiner",
        "transcription": "ən",
        "definitions": [
            {
                "text": "Used before a noun starting with a vowel sound.",
                "examples": [
                    "I have an apple.",
                    "He is an engineer."
                ]
            }
        ],
        "subtext": "indefinite article",
        "opposite": "the"
    },
    {
        "word": "the",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "ðə",
        "definitions": [
            {
                "text": "Used to refer to a specific thing or person.",
                "examples": [
                    "The book is on the table.",
                    "The sun is bright."
                ]
            }
        ],
        "subtext": "definite article",
        "opposite": "a"
    },
    {
        "word": "some",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "➕",
        "form": "determiner",
        "transcription": "səm",
        "definitions": [
            {
                "text": "An amount or number of something that is not exact.",
                "examples": [
                    "I have some bread.",
                    "There are some students in the room."
                ]
            }
        ],
        "subtext": "unspecified quantity",
        "opposite": "any"
    },
    {
        "word": "any",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "❓",
        "form": "determiner",
        "transcription": "ˈɛni",
        "definitions": [
            {
                "text": "Used in questions and negative sentences to refer to one or more of something.",
                "examples": [
                    "Do you have any questions?",
                    "I don't have any money."
                ]
            }
        ],
        "subtext": "used in negatives and questions",
        "opposite": "some"
    },
    {
        "word": "I",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "pronoun",
        "transcription": "aɪ",
        "definitions": [
            {
                "text": "Used by a speaker to refer to himself or herself.",
                "examples": [
                    "I am a student.",
                    "I like coffee."
                ]
            }
        ],
        "subtext": "subject pronoun"
    },
    {
        "word": "you",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🫵",
        "form": "pronoun",
        "transcription": "ju",
        "definitions": [
            {
                "text": "Used to refer to the person or people the speaker is addressing.",
                "examples": [
                    "How are you?",
                    "You are helpful."
                ]
            }
        ],
        "subtext": "subject or object pronoun"
    },
    {
        "word": "he",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨",
        "form": "pronoun",
        "transcription": "hi",
        "definitions": [
            {
                "text": "Used to refer to a male person or animal already mentioned.",
                "examples": [
                    "He is my brother.",
                    "He works in an office."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "she"
    },
    {
        "word": "she",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👩",
        "form": "pronoun",
        "transcription": "ʃi",
        "definitions": [
            {
                "text": "Used to refer to a female person or animal already mentioned.",
                "examples": [
                    "She is my sister.",
                    "She likes to dance."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "he"
    },
    {
        "word": "it",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "pronoun",
        "transcription": "ɪt",
        "definitions": [
            {
                "text": "Used to refer to a thing, animal, or situation already mentioned.",
                "examples": [
                    "It is a big house.",
                    "I like it."
                ]
            }
        ],
        "subtext": "subject or object pronoun"
    },
    {
        "word": "we",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "wi",
        "definitions": [
            {
                "text": "Used to refer to the speaker and one or more other people.",
                "examples": [
                    "We are friends.",
                    "We live in London."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "they"
    },
    {
        "word": "they",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "ðeɪ",
        "definitions": [
            {
                "text": "Used to refer to two or more people or things already mentioned.",
                "examples": [
                    "They are my parents.",
                    "They work together."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "we"
    },
    {
        "word": "me",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "pronoun",
        "transcription": "mi",
        "definitions": [
            {
                "text": "Used by a speaker to refer to himself or herself as the object of a verb or preposition.",
                "examples": [
                    "Help me, please.",
                    "This gift is for me."
                ]
            }
        ],
        "subtext": "object pronoun"
    },
    {
        "word": "him",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨",
        "form": "pronoun",
        "transcription": "hɪm",
        "definitions": [
            {
                "text": "The object form of 'he'.",
                "examples": [
                    "I know him.",
                    "Give it to him."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "her"
    },
    {
        "word": "her",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👩",
        "form": "pronoun",
        "transcription": "hər",
        "definitions": [
            {
                "text": "The object form of 'she'.",
                "examples": [
                    "I see her.",
                    "Talk to her."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "him"
    },
    {
        "word": "us",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "əs",
        "definitions": [
            {
                "text": "The object form of 'we'.",
                "examples": [
                    "Join us.",
                    "He invited us to the party."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "them"
    },
    {
        "word": "them",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "ðɛm",
        "definitions": [
            {
                "text": "The object form of 'they'.",
                "examples": [
                    "I like them.",
                    "Tell them the news."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "us"
    },
    {
        "word": "my",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🙋",
        "form": "determiner",
        "transcription": "maɪ",
        "definitions": [
            {
                "text": "Belonging to me.",
                "examples": [
                    "My name is John.",
                    "Where is my bag?"
                ]
            }
        ],
        "subtext": "possessive determiner"
    },
    {
        "word": "your",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🫵",
        "form": "determiner",
        "transcription": "jɔː(r)",
        "definitions": [
            {
                "text": "Belonging to you.",
                "examples": [
                    "What is your name?",
                    "Is this your phone?"
                ]
            }
        ],
        "subtext": "possessive determiner"
    },
    {
        "word": "his",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👨",
        "form": "determiner",
        "transcription": "hɪz",
        "definitions": [
            {
                "text": "Belonging to him.",
                "examples": [
                    "His car is red.",
                    "That is his office."
                ]
            }
        ],
        "subtext": "possessive determiner",
        "opposite": "her"
    },
    {
        "word": "its",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "📦",
        "form": "determiner",
        "transcription": "ɪts",
        "definitions": [
            {
                "text": "Belonging to it.",
                "examples": [
                    "The cat is eating its food.",
                    "The company changed its name."
                ]
            }
        ],
        "subtext": "possessive determiner"
    },
    {
        "word": "our",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "determiner",
        "transcription": "ˈaʊə(r)",
        "definitions": [
            {
                "text": "Belonging to us.",
                "examples": [
                    "This is our house.",
                    "Our manager is friendly."
                ]
            }
        ],
        "subtext": "possessive determiner",
        "opposite": "their"
    },
    {
        "word": "their",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "👥",
        "form": "determiner",
        "transcription": "ðeə(r)",
        "definitions": [
            {
                "text": "Belonging to them.",
                "examples": [
                    "They love their job.",
                    "Their office is in the city centre."
                ]
            }
        ],
        "subtext": "possessive determiner",
        "opposite": "our"
    },
    {
        "word": "this",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "👇",
        "form": "determiner",
        "transcription": "ðɪs",
        "definitions": [
            {
                "text": "Used to refer to a person, thing, or event that is close to the speaker.",
                "examples": [
                    "This is my friend.",
                    "I like this book."
                ]
            }
        ],
        "subtext": "singular, near",
        "opposite": "that"
    },
    {
        "word": "that",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "ðæt",
        "definitions": [
            {
                "text": "Used to refer to a person, thing, or event that is not close to the speaker.",
                "examples": [
                    "That is a big building.",
                    "Who is that man?"
                ]
            }
        ],
        "subtext": "singular, far",
        "opposite": "this"
    },
    {
        "word": "these",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "👇",
        "form": "determiner",
        "transcription": "ðiːz",
        "definitions": [
            {
                "text": "The plural form of 'this'.",
                "examples": [
                    "These are my keys.",
                    "I need these documents."
                ]
            }
        ],
        "subtext": "plural, near",
        "opposite": "those"
    },
    {
        "word": "those",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "ðəʊz",
        "definitions": [
            {
                "text": "The plural form of 'that'.",
                "examples": [
                    "Those mountains are beautiful.",
                    "Who are those people?"
                ]
            }
        ],
        "subtext": "plural, far",
        "opposite": "these"
    },
    {
        "word": "email address",
        "level": "starter",
        "theme": "contact_details_A1",
        "emoji": "📧",
        "form": "noun",
        "transcription": "ˈiːmeɪl əˈdres",
        "definitions": [
            {
                "text": "The series of letters and symbols used to send and receive emails.",
                "examples": [
                    "What is your email address?"
                ]
            }
        ],
        "subtext": "contact information",
        "countability": "countable"
    },
    {
        "word": "phone number",
        "level": "starter",
        "theme": "contact_details_A1",
        "emoji": "📞",
        "form": "noun",
        "transcription": "fəʊn ˈnʌmbə(r)",
        "definitions": [
            {
                "text": "The set of numbers that you use to call someone on the phone.",
                "examples": [
                    "Can I have your phone number?"
                ]
            }
        ],
        "subtext": "contact information",
        "countability": "countable"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

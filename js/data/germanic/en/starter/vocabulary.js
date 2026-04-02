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
        "countability": "uncountable",
        "opposite": null
    },
    {
        "word": "soda",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥤",
        "form": "noun",
        "plural": "sodas",
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
        "word": "bill",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "word": "receipt",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "word": "cash",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💵",
        "form": "noun",
        "plural": null,
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "next to",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "subtext": "beside",
        "definitions": [
            {
                "text": "Very close to someone or something, with nothing in between.",
                "examples": [
                    "He sat next to me."
                ]
            }
        ],
        "opposite": "far from",
        "emoji": "👫"
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
        "emoji": "🧘"
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
        "emoji": "🫣"
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
        "emoji": "🚶"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "countability": "countable"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "pants",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "plural": "pants",
        "subtext": "trousers",
        "definitions": [
            {
                "text": "An outer garment covering each leg separately from waist to ankle.",
                "examples": [
                    "I need new pants."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "phone",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "plural": "phones",
        "subtext": "telephone",
        "definitions": [
            {
                "text": "A device used to talk to people far away.",
                "examples": [
                    "I am talking on the phone."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "countability": "countable"
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
        "countability": "countable"
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
        "subtext": "related to times day"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "salary",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": "wake up"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "relationship",
        "level": "starter",
        "theme": "family_life_A1",
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
        "subtext": "related to family life"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "nurse",
        "level": "starter",
        "theme": "job_titles_professions_A1",
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
        "opposite": null
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "job_titles_professions_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "countability": "countable"
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
        "countability": "countable"
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
        ]
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
        ]
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
        "subtext": "spouse, partner",
        "definitions": [
            {
                "text": "A married man, in relation to his wife.",
                "examples": [
                    "Her husband is a doctor."
                ]
            }
        ],
        "countability": "countable"
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
        "subtext": "spouse, partner",
        "definitions": [
            {
                "text": "A married woman, in relation to her husband.",
                "examples": [
                    "His wife works in finance."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "child",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👶",
        "form": "noun",
        "plural": "children",
        "subtext": "kid, young person",
        "definitions": [
            {
                "text": "A young person; a son or daughter.",
                "examples": [
                    "They have two children."
                ]
            }
        ],
        "countability": "countable",
        "opposite": "adult"
    },
    {
        "word": "parent",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👪",
        "form": "noun",
        "plural": "parents",
        "subtext": "mother or father",
        "definitions": [
            {
                "text": "A mother or father.",
                "examples": [
                    "My parents live in the north."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "countability": "countable"
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
        "countability": "countable"
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
        "subtext": "related to immediate family"
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
        "subtext": "related to immediate family"
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
        "subtext": "related to extended family"
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
        "subtext": "related to extended family"
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
        "subtext": "related to extended family"
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
        "subtext": "related to extended family"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "pharmacy",
        "level": "starter",
        "theme": "local_places_services_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "in",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Inside a place or container.",
                "examples": [
                    "The keys are in the bag."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "opposite": "out",
        "emoji": "📥"
    },
    {
        "word": "on",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Supported by or touching a surface.",
                "examples": [
                    "The book is on the table."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "opposite": "off",
        "emoji": "🔛"
    },
    {
        "word": "at",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show a place or position.",
                "examples": [
                    "I am at the office."
                ]
            }
        ],
        "subtext": "related to prepositions place",
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
        "emoji": "👇"
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
        "emoji": "➕"
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
        "emoji": "❓"
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
        "emoji": "💡"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "sweater",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧶",
        "form": "noun",
        "plural": "sweaters",
        "subtext": "jumper",
        "definitions": [
            {
                "text": "A warm piece of clothing with long sleeves.",
                "examples": [
                    "It's cold, wear a sweater."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "autumn",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "form": "noun",
        "subtext": "fall",
        "definitions": [
            {
                "text": "The season between summer and winter.",
                "examples": [
                    "Leaves fall in autumn."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": "never"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": "always"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "subtext": "related to name greeting"
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
        "subtext": "related to name greeting"
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
        "opposite": null
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
        "opposite": null
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
        "subtext": "related to asking answering questions"
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
        "subtext": "related to asking answering questions"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "subtext": "related to people"
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
        "subtext": "related to people"
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
        "subtext": "related to marital status"
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
        "subtext": "related to marital status"
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
        "subtext": "related to learning studying"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "gift",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "noun",
        "plural": "gifts",
        "subtext": "present",
        "definitions": [
            {
                "text": "Something that you give to someone, especially on a special occasion.",
                "examples": [
                    "A birthday gift."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "artist",
        "level": "starter",
        "theme": "job_titles_professions_A1",
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
        "subtext": "related to people"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "wallet",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "fridge",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🧊",
        "form": "noun",
        "plural": "fridges",
        "subtext": "refrigerator",
        "definitions": [
            {
                "text": "A large piece of electrical equipment used for keeping food and drink cold.",
                "examples": [
                    "The milk is in the fridge."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "emoji": "➕"
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
        "emoji": "➖"
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
        "emoji": "➡️"
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
        "emoji": "⬅️"
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
        "emoji": "🎁"
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
        "emoji": "❓"
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
        "emoji": "💡"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "football",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "⚽",
        "form": "noun",
        "plural": null,
        "subtext": "soccer",
        "definitions": [
            {
                "text": "A game played by two teams of eleven players who kick a ball.",
                "examples": [
                    "They are playing football in the park."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null
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
        "opposite": null
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
        "subtext": "related to times day"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "sofa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "sofas",
        "subtext": "couch",
        "definitions": [
            {
                "text": "A long soft seat for more than one person.",
                "examples": [
                    "Let's sit on the sofa."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "maths",
        "level": "starter",
        "theme": "school_subjects_A1",
        "emoji": "🔢",
        "form": "noun",
        "plural": null,
        "subtext": "mathematics",
        "definitions": [
            {
                "text": "The study of numbers, shapes, and quantities.",
                "examples": [
                    "Maths is my favorite subject."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "tiger",
        "level": "starter",
        "theme": "animals_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "garage",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "subtext": "related to prepositions movement"
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
        "subtext": "related to prepositions movement"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "theatre",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "emoji": "🎭",
        "form": "noun",
        "plural": "theatres",
        "subtext": "theater",
        "definitions": [
            {
                "text": "A building with a stage where people go to watch plays.",
                "examples": [
                    "We are going to the theatre tonight."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "stadium",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "subtext": "related to directions navigation"
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
        "subtext": "related to directions navigation"
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
        "subtext": "related to directions navigation"
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
        "subtext": "related to directions navigation"
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
        "opposite": null
    },
    {
        "word": "eraser",
        "level": "starter",
        "theme": "school_stationery_A1",
        "emoji": "🧽",
        "form": "noun",
        "plural": "erasers",
        "subtext": "rubber",
        "definitions": [
            {
                "text": "A small piece of rubber or plastic used to remove pencil marks.",
                "examples": [
                    "Can I borrow your eraser?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "ceiling",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": "ask"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "truck",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚚",
        "form": "noun",
        "plural": "trucks",
        "subtext": "lorry",
        "definitions": [
            {
                "text": "A large, heavy vehicle with wheels used for carrying goods.",
                "examples": [
                    "The truck is carrying food to the supermarket."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "mechanic",
        "level": "starter",
        "theme": "job_titles_professions_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "balcony",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "cookie",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍪",
        "form": "noun",
        "plural": "cookies",
        "subtext": "biscuit",
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "I want a chocolate cookie."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "biscuit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍪",
        "form": "noun",
        "plural": "biscuits",
        "subtext": "cookie",
        "definitions": [
            {
                "text": "A small flat sweet cake.",
                "examples": [
                    "Would you like a biscuit with your tea?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "dishwasher",
        "level": "starter",
        "theme": "household_items_A1",
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
        "opposite": null
    },
    {
        "word": "vacuum cleaner",
        "level": "starter",
        "theme": "household_items_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "trainers",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👟",
        "form": "noun",
        "plural": "trainers",
        "subtext": "sneakers",
        "definitions": [
            {
                "text": "Soft shoes that you wear for sport or as casual clothes.",
                "examples": [
                    "I need a new pair of trainers."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "nationality",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "occupation",
        "level": "starter",
        "theme": "job_titles_professions_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "first name",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🆔",
        "form": "noun",
        "plural": "first names",
        "opposite": null,
        "subtext": "given name",
        "definitions": [
            {
                "text": "The name that was given to you when you were born and that comes before your family name.",
                "examples": [
                    "My first name is David.",
                    "Please write your first name here."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "bookshop",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "📚",
        "form": "noun",
        "plural": "bookshops",
        "subtext": "bookstore",
        "definitions": [
            {
                "text": "A shop where you can buy books.",
                "examples": [
                    "I bought a dictionary at the bookshop."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "appointment",
        "level": "starter",
        "theme": "medical_appointments_A1",
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
        "word": "application",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "staff",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👥",
        "form": "noun",
        "plural": null,
        "subtext": "employees, workers",
        "definitions": [
            {
                "text": "The group of people who work for an organization.",
                "examples": [
                    "The hospital staff are very helpful."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "profession",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🎓",
        "form": "noun",
        "plural": "professions",
        "subtext": "job, career",
        "definitions": [
            {
                "text": "A type of job that needs special training or a high level of education.",
                "examples": [
                    "Teaching is a difficult profession."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "wage",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💵",
        "form": "noun",
        "plural": "wages",
        "subtext": "salary, pay",
        "definitions": [
            {
                "text": "The amount of money that is paid to a worker, usually for each hour or week.",
                "examples": [
                    "The minimum wage is increasing."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "curtain",
        "level": "starter",
        "theme": "household_items_A1",
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
        "level": "starter",
        "theme": "household_items_A1",
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
    },
    {
        "word": "dessert",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍰",
        "form": "noun",
        "plural": "desserts",
        "subtext": "sweet dish",
        "definitions": [
            {
                "text": "Sweet food eaten at the end of a meal.",
                "examples": [
                    "What is for dessert?"
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
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
        "opposite": null
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
        "subtext": "related to extended family"
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
        "subtext": "related to extended family"
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
        "opposite": null
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
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "excuse me",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "👋",
        "form": "phrase",
        "subtext": "pardon me",
        "definitions": [
            {
                "text": "A polite way of starting to talk to someone you do not know.",
                "examples": [
                    "Excuse me, is this the way to the station?"
                ]
            }
        ],
        "opposite": null
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
        "emoji": "⬆️"
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
        "emoji": "⬇️"
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
        "emoji": "🏠"
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
        "emoji": "🌳"
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
        "emoji": "⌛"
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
        "emoji": "⏮️"
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
        "emoji": "⏭️"
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
        "subtext": "related to size shape"
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
        "subtext": "related to size shape"
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
        "subtext": "related to sequence order A2"
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
        "subtext": "related to sequence order A2"
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
        "subtext": "related to sequence order A2"
    },
    {
        "word": "animal",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐾",
        "form": "noun",
        "plural": "animals",
        "subtext": "creature / wild animal / pet animal",
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
        "opposite": null
    },
    {
        "word": "chips",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍟",
        "form": "noun",
        "plural": "chips",
        "subtext": "french fries",
        "definitions": [
            {
                "text": "Long thin pieces of potato cooked in oil.",
                "examples": [
                    "I want fish and chips for lunch."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "gym",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "gyms",
        "subtext": "fitness center / go to the gym",
        "definitions": [
            {
                "text": "A room or building with equipment for doing physical exercise.",
                "examples": [
                    "I go to the gym three times a week."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "fire",
        "level": "starter",
        "theme": "nature_landscapes_A1",
        "emoji": "🔥",
        "form": "noun",
        "plural": "fires",
        "subtext": "flames / start a fire",
        "definitions": [
            {
                "text": "Heat and light from something burning.",
                "examples": [
                    "Be careful with the fire."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "group",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👥",
        "form": "noun",
        "plural": "groups",
        "subtext": "set / a small group / group work",
        "definitions": [
            {
                "text": "A number of people or things that are together.",
                "examples": [
                    "We work in a small group."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "ice",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🧊",
        "form": "noun",
        "subtext": "frozen water / ice cube",
        "definitions": [
            {
                "text": "Water that has frozen and become solid.",
                "examples": [
                    "Do you want ice in your drink?"
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null
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
        "opposite": null
    },
    {
        "word": "traffic",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚗",
        "form": "noun",
        "subtext": "cars, vehicles / heavy traffic",
        "definitions": [
            {
                "text": "The cars, trucks, and other vehicles using a road.",
                "examples": [
                    "The traffic is very heavy this morning."
                ]
            }
        ],
        "countability": "uncountable",
        "opposite": null
    },
    {
        "word": "actress",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🎭",
        "form": "noun",
        "plural": "actresses",
        "subtext": "actor / famous actress",
        "definitions": [
            {
                "text": "A woman who performs in a play or movie.",
                "examples": [
                    "She is a famous actress."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
    },
    {
        "word": "farm",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🚜",
        "form": "noun",
        "plural": "farms",
        "subtext": "countryside / work on a farm",
        "definitions": [
            {
                "text": "An area of land used for growing crops and keeping animals.",
                "examples": [
                    "They live on a big farm."
                ]
            }
        ],
        "countability": "countable",
        "opposite": null
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
        "subtext": "bedding / keep warm"
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
        "subtext": "bedding / soft pillow"
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
        "subtext": "gift / birthday present"
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
        "subtext": "floor covering / rug"
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
        "subtext": "power source / charging"
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
        "subtext": "charging cable"
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
        "subtext": "date planner"
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
        "subtext": "sticky tape"
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
        "subtext": "bed sheet / linen"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
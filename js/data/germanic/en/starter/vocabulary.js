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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "jacket",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧥",
        "form": "noun",
        "plural": "jackets",
        "definitions": [
            {
                "text": "A short coat.",
                "examples": [
                    "He is wearing a leather jacket."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👔",
        "form": "noun",
        "plural": "shirts",
        "definitions": [
            {
                "text": "A piece of clothing worn on the upper part of the body.",
                "examples": [
                    "He wears a white shirt to work."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
    },
    {
        "word": "teacher",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "opposite": "student",
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "food",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Things that people eat.",
                "examples": [
                    "The food is good here."
                ]
            }
        ],
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
    },
    {
        "word": "breakfast",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "The first meal of the day.",
                "examples": [
                    "Breakfast is at seven o'clock."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "dinner",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍽️",
        "form": "noun",
        "definitions": [
            {
                "text": "The main meal of the day, usually in the evening.",
                "examples": [
                    "Dinner is at eight o'clock."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "morning",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "noun",
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
        "definitions": [
            {
                "text": "A period of 24 hours.",
                "examples": [
                    "I work five days a week."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        ]
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
        "countability": "countable"
    },
    {
        "word": "boss",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💼",
        "form": "noun",
        "plural": "bosses",
        "definitions": [
            {
                "text": "The person who is in charge at work.",
                "examples": [
                    "My boss is very friendly."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "together",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "alone",
        "oppositeEmoji": "👤",
        "definitions": [
            {
                "text": "With another person or group.",
                "examples": [
                    "We eat dinner together."
                ]
            }
        ]
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
    },
    {
        "word": "afternoon",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "noun",
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
        "opposite": "wife",
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
        "opposite": "husband",
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "sister",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👧",
        "form": "noun",
        "plural": "sisters",
        "opposite": "brother",
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
        "opposite": "sister",
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
        "opposite": "daughter",
        "oppositeEmoji": "👧",
        "definitions": [
            {
                "text": "A person's male child.",
                "examples": [
                    "They have one son and two daughters."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "daughter",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👧",
        "form": "noun",
        "plural": "daughters",
        "opposite": "son",
        "oppositeEmoji": "👦",
        "definitions": [
            {
                "text": "A person's female child.",
                "examples": [
                    "Her daughter is five years old."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "grandfather",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👴",
        "form": "noun",
        "plural": "grandfathers",
        "opposite": "grandmother",
        "oppositeEmoji": "👵",
        "definitions": [
            {
                "text": "The father of your father or mother.",
                "examples": [
                    "My grandfather is eighty years old."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "grandmother",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👵",
        "form": "noun",
        "plural": "grandmothers",
        "opposite": "grandfather",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "The mother of your father or mother.",
                "examples": [
                    "My grandmother lives in a small village."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "uncle",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👨",
        "form": "noun",
        "plural": "uncles",
        "opposite": "aunt",
        "oppositeEmoji": "👩",
        "definitions": [
            {
                "text": "The brother of your mother or father, or the husband of your aunt.",
                "examples": [
                    "My uncle lives in London."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "aunt",
        "level": "starter",
        "theme": "extended_family_A1",
        "emoji": "👩",
        "form": "noun",
        "plural": "aunts",
        "opposite": "uncle",
        "oppositeEmoji": "👨",
        "definitions": [
            {
                "text": "The sister of your mother or father, or the wife of your uncle.",
                "examples": [
                    "My aunt is a teacher."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "soup",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥣",
        "form": "noun",
        "plural": "soups",
        "definitions": [
            {
                "text": "A liquid food made by cooking meat, vegetables, or fish in water.",
                "examples": [
                    "I had tomato soup for lunch."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "hello",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "noun",
        "definitions": [
            {
                "text": "A common greeting used when meeting someone.",
                "examples": [
                    "Hello! How are you?"
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "goodbye",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👋",
        "form": "noun",
        "definitions": [
            {
                "text": "A common greeting used when leaving someone.",
                "examples": [
                    "Goodbye! See you tomorrow."
                ]
            }
        ],
        "countability": "countable"
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
        ]
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
        "countability": "countable"
    },
    {
        "word": "yes",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "✅",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to give a positive answer.",
                "examples": [
                    "Yes, I am a student."
                ]
            }
        ]
    },
    {
        "word": "no",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❌",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to give a negative answer.",
                "examples": [
                    "No, I am not a doctor."
                ]
            }
        ]
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "boy",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "👦",
        "form": "noun",
        "plural": "boys",
        "opposite": "girl",
        "oppositeEmoji": "👧",
        "definitions": [
            {
                "text": "A male child.",
                "examples": [
                    "The boy is playing with a ball."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "girl",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "👧",
        "form": "noun",
        "plural": "girls",
        "opposite": "boy",
        "oppositeEmoji": "👦",
        "definitions": [
            {
                "text": "A female child.",
                "examples": [
                    "She is a clever girl."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "boyfriend",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "boyfriends",
        "opposite": "girlfriend",
        "oppositeEmoji": "🧑‍🤝‍🧑",
        "definitions": [
            {
                "text": "A man with whom someone has a romantic relationship.",
                "examples": [
                    "Her boyfriend lives in London."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "girlfriend",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "plural": "girlfriends",
        "opposite": "boyfriend",
        "oppositeEmoji": "🧑‍🤝‍🧑",
        "definitions": [
            {
                "text": "A woman with whom someone has a romantic relationship.",
                "examples": [
                    "His girlfriend is a doctor."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "student",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "plural": "students",
        "opposite": "teacher",
        "oppositeEmoji": "🧑‍🏫",
        "definitions": [
            {
                "text": "A person who is studying at a school or university.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "with",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "without",
        "definitions": [
            {
                "text": "In the company of or including.",
                "examples": [
                    "I like coffee with milk."
                ]
            }
        ]
    },
    {
        "word": "without",
        "level": "starter",
        "theme": "prepositions_place_A1",
        "form": "preposition",
        "opposite": "with",
        "definitions": [
            {
                "text": "Not having or including something.",
                "examples": [
                    "I prefer tea without sugar."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
    },
    {
        "word": "yesterday",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "definitions": [
            {
                "text": "On the day before today.",
                "examples": [
                    "I was at home yesterday."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        ]
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    },
    {
        "word": "north",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "⬆️",
        "form": "noun",
        "definitions": [
            {
                "text": "The direction that is on your left when you face the sunrise.",
                "examples": [
                    "The city is in the north."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "south",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "⬇️",
        "form": "noun",
        "definitions": [
            {
                "text": "The direction that is on your right when you face the sunrise.",
                "examples": [
                    "We are driving south."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "east",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "➡️",
        "form": "noun",
        "definitions": [
            {
                "text": "The direction where the sun rises.",
                "examples": [
                    "The sun rises in the east."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "west",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "⬅️",
        "form": "noun",
        "definitions": [
            {
                "text": "The direction where the sun sets.",
                "examples": [
                    "The sun sets in the west."
                ]
            }
        ],
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
    },
    {
        "word": "first name",
        "level": "starter",
        "theme": "personal_identity_A1",
        "emoji": "🆔",
        "form": "noun",
        "plural": "first names",
        "opposite": "surname",
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
        "opposite": "first name",
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
        "countability": "uncountable"
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
        "countability": "uncountable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
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
        "countability": "countable"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

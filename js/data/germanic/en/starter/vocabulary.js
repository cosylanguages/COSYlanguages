(function() {
    const data = [
    {
        "word": "doctor",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "numberPlural": "2 doctor",
        "answer": "two doctors",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "doctors",
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
        ]
    },
    {
        "word": "teacher",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "opposite": "student",
        "oppositeEmoji": "🧑‍🎓",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "teachers",
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
        ]
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        ]
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        ]
    },
    {
        "word": "apple",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        ]
    },
    {
        "word": "bread",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍞",
        "form": "noun",
        "plural": "bread",
        "definitions": [
            {
                "text": "A food made from flour and water, then baked.",
                "examples": [
                    "I like fresh bread.",
                    "Can you buy some bread?"
                ]
            }
        ]
    },
    {
        "word": "egg",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥚",
        "form": "noun",
        "plural": "eggs",
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
        ]
    },
    {
        "word": "milk",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥛",
        "form": "noun",
        "plural": "milk",
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
        ]
    },
    {
        "word": "banana",
        "level": "starter",
        "theme": "basic_foods_A0",
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
        ]
    },
    {
        "word": "coffee",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "☕",
        "form": "noun",
        "plural": "coffee",
        "definitions": [
            {
                "text": "A dark drink made from roasted beans.",
                "examples": [
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
        ]
    },
    {
        "word": "tea",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍵",
        "form": "noun",
        "plural": "tea",
        "definitions": [
            {
                "text": "A drink made by pouring hot water over dried leaves.",
                "examples": [
                    "Would you like a cup of tea?",
                    "Green tea is very healthy."
                ]
            },
            {
                "text": "This is a very popular drink in England and Asia.",
                "examples": [
                    "I like tea with lemon."
                ]
            }
        ]
    },
    {
        "word": "juice",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🧃",
        "form": "noun",
        "plural": "juice",
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
        ]
    },
    {
        "word": "water",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🚰",
        "form": "noun",
        "plural": "water",
        "definitions": [
            {
                "text": "A clear liquid that we drink to stay alive.",
                "examples": [
                    "I drink a glass of water.",
                    "The water is cold."
                ]
            }
        ]
    },
    {
        "word": "park",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
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
            },
            {
                "text": "To leave a car or vehicle in a specific place for a time.",
                "examples": [
                    "Where can I park my car?",
                    "Don't park here."
                ]
            }
        ]
    },
    {
        "word": "school",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
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
        ]
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirts"
    },
    {
        "word": "pants",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👖",
        "form": "noun",
        "plural": "pants"
    },
    {
        "word": "shoe",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👟",
        "form": "noun",
        "plural": "shoes"
    },
    {
        "word": "hat",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👒",
        "form": "noun",
        "plural": "hats"
    },
    {
        "word": "chair",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "chairs",
        "definitions": [
            {
                "text": "A piece of furniture for one person to sit on.",
                "examples": [
                    "Please sit on the chair.",
                    "This chair is broken."
                ]
            }
        ]
    },
    {
        "word": "table",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "tables",
        "definitions": [
            {
                "text": "A piece of furniture with four legs used for eating or working.",
                "examples": [
                    "The food is on the table.",
                    "Let's sit at the table."
                ]
            }
        ]
    },
    {
        "word": "bed",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "beds",
        "definitions": [
            {
                "text": "A piece of furniture that you sleep on.",
                "examples": [
                    "My bed is very comfortable.",
                    "It's time to go to bed."
                ]
            }
        ]
    },
    {
        "word": "tall",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "A person or thing that is big from bottom to top.",
                "examples": [
                    "He is very tall.",
                    "That building is tall."
                ]
            }
        ]
    },
    {
        "word": "short",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "definitions": [
            {
                "text": "A person or thing that is not tall.",
                "examples": [
                    "She is short.",
                    "The pencil is short."
                ]
            }
        ]
    },
    {
        "word": "young",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective"
    },
    {
        "word": "old",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective"
    },
    {
        "word": "key",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        ]
    },
    {
        "word": "phone",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📱",
        "form": "noun",
        "plural": "phones"
    },
    {
        "word": "book",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
            },
            {
                "text": "To arrange to have something in the future (like a room or a table).",
                "examples": [
                    "I want to book a hotel room.",
                    "We should book a table for dinner."
                ]
            }
        ]
    },
    {
        "word": "bag",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        ]
    },
    {
        "word": "pen",
        "level": "starter",
        "theme": "furniture_objects_A0",
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
        ]
    },
    {
        "word": "cat",
        "level": "starter",
        "theme": "weather_A0",
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
        ]
    },
    {
        "word": "dog",
        "level": "starter",
        "theme": "weather_A0",
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
        ]
    },
    {
        "word": "bird",
        "level": "starter",
        "theme": "weather_A0",
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
        ]
    },
    {
        "word": "fish",
        "level": "starter",
        "theme": "weather_A0",
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
            },
            {
                "text": "To try to catch fish with a net or a hook.",
                "examples": [
                    "We like to fish in the river.",
                    "He is fishing today."
                ]
            }
        ]
    },
    {
        "word": "sunny",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "☀️",
        "form": "adjective"
    },
    {
        "word": "rainy",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "adjective"
    },
    {
        "word": "hot",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🔥",
        "form": "adjective"
    },
    {
        "word": "cold",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "❄️",
        "form": "adjective"
    },
    {
        "word": "head",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👤",
        "form": "noun",
        "plural": "heads",
        "definitions": [
            {
                "text": "The top part of your body that has your eyes, mouth, and brain.",
                "examples": [
                    "I have a hat on my head.",
                    "He nodded his head."
                ]
            },
            {
                "text": "The leader of a group or organization.",
                "examples": [
                    "She is the head of the department.",
                    "Who is the head of this school?"
                ]
            }
        ]
    },
    {
        "word": "hand",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "✋",
        "form": "noun",
        "plural": "hands",
        "definitions": [
            {
                "text": "The part of your arm that has fingers.",
                "examples": [
                    "Wash your hands before dinner.",
                    "Give me your hand."
                ]
            },
            {
                "text": "Help or assistance.",
                "examples": [
                    "Can you give me a hand?",
                    "I need some help here."
                ]
            }
        ]
    },
    {
        "word": "leg",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "🦵",
        "form": "noun",
        "plural": "legs"
    },
    {
        "word": "eye",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "form": "noun",
        "plural": "eyes",
        "definitions": [
            {
                "text": "The part of your body that you use for seeing.",
                "examples": [
                    "Close your eyes.",
                    "She has blue eyes."
                ]
            }
        ]
    },
    {
        "word": "nose",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👃",
        "form": "noun",
        "plural": "noses"
    },
    {
        "word": "mouth",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👄",
        "form": "noun",
        "plural": "mouths"
    },
    {
        "word": "ear",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "form": "noun",
        "plural": "ears"
    },
    {
        "word": "foot",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "🦶",
        "form": "noun",
        "plural": "feet"
    },
    {
        "word": "ordinary",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective"
    },
    {
        "word": "smartphone",
        "level": "starter",
        "theme": "neighbourhood_local_A2",
        "emoji": "📱",
        "form": "noun",
        "plural": "smartphones"
    },
    {
        "word": "mother",
        "level": "starter",
        "theme": "immediate_family_A0",
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
            },
            {
                "text": "This person is usually the wife of your father (or another parent).",
                "examples": [
                    "Mothers take care of their children."
                ]
            }
        ]
    },
    {
        "word": "father",
        "level": "starter",
        "theme": "immediate_family_A0",
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
        ]
    },
    {
        "word": "man",
        "level": "starter",
        "theme": "size_shape_A0",
        "numberPlural": "2 man",
        "answer": "two men",
        "emoji": "👨",
        "form": "noun",
        "plural": "men",
        "definitions": [
            {
                "text": "An adult male human.",
                "examples": [
                    "That man is my teacher.",
                    "A tall man is standing there."
                ]
            }
        ]
    },
    {
        "word": "woman",
        "level": "starter",
        "theme": "size_shape_A0",
        "numberPlural": "2 woman",
        "answer": "two women",
        "emoji": "👩",
        "form": "noun",
        "plural": "women",
        "definitions": [
            {
                "text": "An adult female human.",
                "examples": [
                    "She is a very strong woman.",
                    "There are three women in the office."
                ]
            }
        ]
    },
    {
        "word": "foot",
        "level": "starter",
        "theme": "body_parts_A0",
        "numberPlural": "2 foot",
        "answer": "two feet",
        "emoji": "🦶",
        "form": "noun",
        "plural": "feet"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

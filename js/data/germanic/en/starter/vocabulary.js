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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "t-shirt",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "plural": "t-shirts",
        "definitions": [
            {
                "text": "A casual shirt with short sleeves and no collar.",
                "examples": [
                    "I am wearing a white t-shirt."
                ]
            }
        ]
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
        ]
    },
    {
        "word": "shoe",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👟",
        "form": "noun",
        "plural": "shoes",
        "definitions": [
            {
                "text": "Something you wear on your feet.",
                "examples": [
                    "Put on your shoes."
                ]
            }
        ]
    },
    {
        "word": "hat",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👒",
        "form": "noun",
        "plural": "hats",
        "definitions": [
            {
                "text": "Something you wear on your head.",
                "examples": [
                    "She is wearing a beautiful hat."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "coat",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "🧥",
        "form": "noun",
        "plural": "coats",
        "definitions": [
            {
                "text": "A piece of clothing that you wear over other clothes to keep warm.",
                "examples": [
                    "Put on your coat — it's cold."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "spring",
        "level": "starter",
        "theme": "seasons_A1",
        "emoji": "🌱",
        "form": "noun",
        "definitions": [
            {
                "text": "The season between winter and summer.",
                "examples": [
                    "Flowers grow in spring."
                ]
            }
        ]
    },
    {
        "word": "summer",
        "level": "starter",
        "theme": "seasons_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "The hottest season of the year.",
                "examples": [
                    "I love swimming in summer."
                ]
            }
        ]
    },
    {
        "word": "autumn",
        "level": "starter",
        "theme": "seasons_A1",
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
        ]
    },
    {
        "word": "winter",
        "level": "starter",
        "theme": "seasons_A1",
        "emoji": "❄️",
        "form": "noun",
        "definitions": [
            {
                "text": "The coldest season of the year.",
                "examples": [
                    "It snows in winter."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "sorry",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙇",
        "form": "adjective",
        "definitions": [
            {
                "text": "Used to apologize.",
                "examples": [
                    "I am sorry I am late."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "student",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "plural": "students",
        "definitions": [
            {
                "text": "A person who is studying at a school or university.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "advice",
        "level": "starter",
        "theme": "language_communication",
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "art",
        "level": "starter",
        "theme": "culture_arts",
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

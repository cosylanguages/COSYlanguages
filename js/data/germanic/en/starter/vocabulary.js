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
        "word": "foot",
        "level": "starter",
        "theme": "body_parts_A0",
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
        "word": "teacher",
        "level": "starter",
        "theme": "job_titles_professions_A0",
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
        "theme": "basic_foods_A0",
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
        "theme": "basic_foods_A0",
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
        "theme": "drinks_A0",
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
        "theme": "drinks_A0",
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
        "theme": "drinks_A0",
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
        "theme": "drinks_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "items_of_clothing_A0",
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
        "theme": "items_of_clothing_A0",
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
        "theme": "items_of_clothing_A0",
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
        "theme": "items_of_clothing_A0",
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
        "theme": "furniture_objects_A0",
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
        "theme": "furniture_objects_A0",
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
        "theme": "furniture_objects_A0",
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
        "theme": "basic_technology_devices_A0",
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
        "theme": "animals_A0",
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
        "theme": "animals_A0",
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
        "theme": "animals_A0",
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
        "theme": "animals_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "basic_technology_devices_A0",
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
        "theme": "job_titles_professions_A0",
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
        "theme": "job_titles_professions_A0",
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
        "theme": "rooms_indoor_spaces_A0",
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
        "theme": "rooms_of_a_home_A0",
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
        "theme": "rooms_of_a_home_A0",
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
        "theme": "rooms_of_a_home_A0",
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
        "theme": "modes_of_transport_A0",
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
        "theme": "modes_of_transport_A0",
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
        "theme": "modes_of_transport_A0",
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
        "theme": "basic_foods_A0",
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
        "theme": "basic_foods_A0",
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
        "theme": "basic_foods_A0",
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
        "theme": "meals_of_the_day_A0",
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
        "theme": "meals_of_the_day_A0",
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
        "theme": "everyday_shopping_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "immediate_family_A0",
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
        "theme": "immediate_family_A0",
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
        "theme": "marital_status_A0",
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
        "theme": "times_day_A0",
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
        "theme": "times_day_A0",
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
        "theme": "times_day_A0",
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
        "theme": "times_day_A0",
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
        "theme": "times_day_A0",
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
        "theme": "meals_of_the_day_A0",
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
        "theme": "basic_negative_emotions_A0",
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
        "theme": "rooms_of_a_home_A0",
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
        "theme": "rooms_of_a_home_A0",
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
        "theme": "times_day_A0",
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
        "theme": "travel_vocabulary_basics_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "body_parts_A0",
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
        "theme": "basic_foods_A0",
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
        "theme": "basic_foods_A0",
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
        "theme": "drinks_A0",
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
        "theme": "drinks_A0",
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
        "theme": "furniture_objects_A0",
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
        "theme": "furniture_objects_A0",
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
        "theme": "job_titles_professions_A0",
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
        "theme": "job_titles_professions_A0",
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
        "theme": "job_titles_professions_A0",
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
        "theme": "job_titles_professions_A0",
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
        "theme": "modes_of_transport_A0",
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
        "theme": "modes_of_transport_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "local_places_services_A0",
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
        "theme": "weather_A0",
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
        "theme": "weather_A0",
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
        "theme": "weather_A0",
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
        "theme": "times_day_A0",
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
        "theme": "times_day_A0",
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
        "theme": "times_day_A0",
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
        "theme": "times_day_A0",
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
        "theme": "immediate_family_A0",
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
        "theme": "immediate_family_A0",
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
        "theme": "immediate_family_A0",
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
        "theme": "immediate_family_A0",
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
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

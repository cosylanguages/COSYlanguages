(function() {
    const data = {
    "en": [
        {
            "word": "doctor",
            "level": "starter",
            "theme": "jobs_A0",
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
            "word": "engineer",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "👷",
            "form": "noun",
            "plural": "engineers",
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
            ]
        },
        {
            "word": "artist",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🎨",
            "form": "noun",
            "plural": "artists",
            "definitions": [
                {
                    "text": "A person who creates paintings or drawings.",
                    "examples": [
                        "The artist is painting a beautiful picture.",
                        "She is a famous artist."
                    ]
                },
                {
                    "text": "This person often works in a studio.",
                    "examples": [
                        "Artists use colors and brushes."
                    ]
                }
            ]
        },
        {
            "word": "pilot",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "🧑‍✈️",
            "form": "noun",
            "plural": "pilots",
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
            ]
        },
        {
            "word": "chef",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👨‍🍳",
            "form": "noun",
            "plural": "chefs",
            "definitions": [
                {
                    "text": "A professional cook who works in a restaurant.",
                    "examples": [
                        "The chef is cooking a delicious meal.",
                        "Our chef is very talented."
                    ]
                },
                {
                    "text": "This person works in a kitchen.",
                    "examples": [
                        "Chefs wear a tall white hat."
                    ]
                }
            ]
        },
        {
            "word": "lawyer",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "⚖️",
            "form": "noun",
            "plural": "lawyers",
            "definitions": [
                {
                    "text": "A person who gives advice about the law and represents people in court.",
                    "examples": [
                        "I need to talk to my lawyer.",
                        "The lawyer is in the courtroom."
                    ]
                },
                {
                    "text": "This person often works in an office or a court.",
                    "examples": [
                        "Lawyers read many documents."
                    ]
                }
            ]
        },
        {
            "word": "teacher",
            "level": "starter",
            "theme": "jobs_A0",
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
            "word": "nurse",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👩‍⚕️",
            "form": "noun",
            "plural": "nurses",
            "definitions": [
                {
                    "text": "A person who cares for sick or injured people.",
                    "examples": [
                        "The nurse is giving medicine to the patient.",
                        "She is a kind nurse."
                    ]
                },
                {
                    "text": "This person usually works in a hospital or a clinic.",
                    "examples": [
                        "Nurses help doctors take care of people."
                    ]
                }
            ]
        },
        {
            "word": "firefighter",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "👨‍🚒",
            "form": "noun",
            "plural": "firefighters",
            "definitions": [
                {
                    "text": "A person whose job is to stop fires from burning.",
                    "examples": [
                        "The firefighter is wearing a helmet.",
                        "Firefighters are very brave."
                    ]
                },
                {
                    "text": "This person works at a fire station.",
                    "examples": [
                        "Firefighters drive a big red truck."
                    ]
                }
            ]
        },
        {
            "word": "police officer",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "👮",
            "form": "noun",
            "plural": "police officers",
            "definitions": [
                {
                    "text": "A person whose job is to keep public order and safety.",
                    "examples": [
                        "The police officer is directing traffic.",
                        "I asked a police officer for help."
                    ]
                },
                {
                    "text": "This person works at a police station.",
                    "examples": [
                        "Police officers wear a uniform and a badge."
                    ]
                }
            ]
        },
        {
            "word": "pizza",
            "level": "starter",
            "theme": "food_drink_A0",
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
            "word": "sushi",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🍣",
            "form": "noun",
            "plural": "sushi",
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
            ]
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
            ]
        },
        {
            "word": "pasta",
            "level": "starter",
            "theme": "food_drink_A0",
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
            ]
        },
        {
            "word": "pancake",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🥞",
            "form": "noun",
            "plural": "pancakes",
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
            ]
        },
        {
            "word": "salad",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🥗",
            "form": "noun",
            "plural": "salads",
            "definitions": [
                {
                    "text": "A mixture of raw vegetables.",
                    "examples": [
                        "I had a fresh salad for lunch.",
                        "The salad has lettuce and cucumber."
                    ]
                },
                {
                    "text": "This is a healthy food usually served cold.",
                    "examples": [
                        "Salads are often served with a dressing."
                    ]
                }
            ]
        },
        {
            "word": "steak",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "🥩",
            "form": "noun",
            "plural": "steaks",
            "definitions": [
                {
                    "text": "A large piece of meat, usually beef.",
                    "examples": [
                        "The steak is perfectly cooked.",
                        "I ordered a medium-rare steak."
                    ]
                },
                {
                    "text": "This is often served in a steakhouse.",
                    "examples": [
                        "Steak is a very filling meal."
                    ]
                }
            ]
        },
        {
            "word": "apple",
            "level": "starter",
            "theme": "food_drink_A0",
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
            "theme": "food_drink_A0",
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
            "word": "cheese",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🧀",
            "form": "noun",
            "plural": "cheese",
            "definitions": [
                {
                    "text": "A solid food made from milk.",
                    "examples": [
                        "I like cheese on my pizza.",
                        "There are many types of cheese."
                    ]
                },
                {
                    "text": "Some cheeses have holes in them.",
                    "examples": [
                        "France is famous for its cheese."
                    ]
                }
            ]
        },
        {
            "word": "egg",
            "level": "starter",
            "theme": "food_drink_A0",
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
            "theme": "food_drink_A0",
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
            "word": "rice",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍚",
            "form": "noun",
            "plural": "rice",
            "definitions": [
                {
                    "text": "Small white or brown grains from a plant.",
                    "examples": [
                        "I eat rice with chicken.",
                        "Do you like fried rice?"
                    ]
                },
                {
                    "text": "This is a staple food in many Asian countries.",
                    "examples": [
                        "Rice grows in water-filled fields."
                    ]
                }
            ]
        },
        {
            "word": "tomato",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍅",
            "form": "noun",
            "plural": "tomatoes",
            "definitions": [
                {
                    "text": "A red fruit often used in salads and sauces.",
                    "examples": [
                        "The tomato is very juicy.",
                        "I need tomatoes for the pasta sauce."
                    ]
                },
                {
                    "text": "Tomatoes are technically fruit but used as vegetables.",
                    "examples": [
                        "Cherry tomatoes are small and sweet."
                    ]
                }
            ]
        },
        {
            "word": "potato",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🥔",
            "form": "noun",
            "plural": "potatoes",
            "definitions": [
                {
                    "text": "A round root vegetable.",
                    "examples": [
                        "I love mashed potatoes.",
                        "Can you peel the potatoes?"
                    ]
                },
                {
                    "text": "We use potatoes to make French fries.",
                    "examples": [
                        "Potatoes grow under the ground."
                    ]
                }
            ]
        },
        {
            "word": "carrot",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🥕",
            "form": "noun",
            "plural": "carrots",
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
            ]
        },
        {
            "word": "banana",
            "level": "starter",
            "theme": "food_drink_A0",
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
            "theme": "food_drink_A0",
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
            "theme": "food_drink_A0",
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
            "word": "wine",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍷",
            "form": "noun",
            "plural": "wine",
            "definitions": [
                {
                    "text": "An alcoholic drink made from grapes.",
                    "examples": [
                        "Red wine goes well with meat.",
                        "They drank a bottle of wine."
                    ]
                },
                {
                    "text": "France and Italy are famous for their wines.",
                    "examples": [
                        "The wine is made in a vineyard."
                    ]
                }
            ]
        },
        {
            "word": "beer",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍺",
            "form": "noun",
            "plural": "beer",
            "definitions": [
                {
                    "text": "An alcoholic drink made from grain.",
                    "examples": [
                        "He is drinking a glass of beer.",
                        "Beer is often served cold."
                    ]
                },
                {
                    "text": "This drink often has foam on top.",
                    "examples": [
                        "Germany is famous for its beer."
                    ]
                }
            ]
        },
        {
            "word": "juice",
            "level": "starter",
            "theme": "food_drink_A0",
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
            "theme": "food_drink_A0",
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
            "word": "milkshake",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🥤",
            "form": "noun",
            "plural": "milkshakes",
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
            ]
        },
        {
            "word": "soda",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🥤",
            "form": "noun",
            "plural": "soda",
            "definitions": [
                {
                    "text": "A sweet carbonated drink.",
                    "examples": [
                        "I don't drink much soda.",
                        "Can I have a soda?"
                    ]
                },
                {
                    "text": "This drink has bubbles.",
                    "examples": [
                        "Soda is also called pop or soft drink."
                    ]
                }
            ]
        },
        {
            "word": "park",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
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
            "theme": "places_buildings_activities_A2",
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
            "word": "hospital",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🏥",
            "form": "noun",
            "plural": "hospitals",
            "definitions": [
                {
                    "text": "A place where sick or injured people are given medical treatment.",
                    "examples": [
                        "The ambulance is going to the hospital.",
                        "She works at the hospital."
                    ]
                },
                {
                    "text": "This is a place where you go to see a doctor or a nurse.",
                    "examples": [
                        "Hospitals are open 24 hours a day."
                    ]
                }
            ]
        },
        {
            "word": "cinema",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🎬",
            "form": "noun",
            "plural": "cinemas",
            "definitions": [
                {
                    "text": "A place where people go to watch films on a big screen.",
                    "examples": [
                        "Let's go to the cinema tonight.",
                        "What's playing at the cinema?"
                    ]
                },
                {
                    "text": "This is a place where you can eat popcorn and watch a movie.",
                    "examples": [
                        "I love going to the cinema with friends."
                    ]
                }
            ]
        },
        {
            "word": "restaurant",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🍴",
            "form": "noun",
            "plural": "restaurants",
            "definitions": [
                {
                    "text": "A place where you can buy and eat a meal.",
                    "examples": [
                        "Let's go to an Italian restaurant.",
                        "The restaurant is open."
                    ]
                },
                {
                    "text": "In this place, a waiter or waitress brings food to your table.",
                    "examples": [
                        "We had dinner at a fancy restaurant."
                    ]
                }
            ]
        },
        {
            "word": "library",
            "level": "intermediate",
            "theme": "places_buildings_activities_A2",
            "emoji": "📚",
            "form": "noun",
            "plural": "libraries"
        },
        {
            "word": "museum",
            "level": "intermediate",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏛️",
            "form": "noun",
            "plural": "museums"
        },
        {
            "word": "supermarket",
            "level": "elementary",
            "theme": "places_shops_A1",
            "emoji": "🛒",
            "form": "noun",
            "plural": "supermarkets"
        },
        {
            "word": "pharmacy",
            "level": "upper-intermediate",
            "theme": "places_shops_A1",
            "emoji": "💊",
            "form": "noun",
            "plural": "pharmacies"
        },
        {
            "word": "airport",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "✈️",
            "form": "noun",
            "plural": "airports",
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
            ]
        },
        {
            "word": "supermarché",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🛒",
            "form": "noun",
            "plural": "supermarchés",
            "definitions": [
                {
                    "text": "Un grand magasin où l'on achète de la nourriture.",
                    "examples": [
                        "Je fais mes courses au supermarché.",
                        "Le supermarché est ouvert jusqu'à 21h."
                    ]
                },
                {
                    "text": "On utilise un chariot pour faire ses achats.",
                    "examples": [
                        "Il y a beaucoup de choix dans ce supermarché."
                    ]
                }
            ]
        },
        {
            "word": "pharmacie",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "💊",
            "form": "noun",
            "plural": "pharmacies",
            "definitions": [
                {
                    "text": "Un magasin où l'on achète des médicaments.",
                    "examples": [
                        "Je dois aller à la pharmacie.",
                        "La pharmacie de garde est ouverte."
                    ]
                },
                {
                    "text": "C'est le lieu où l'on présente une ordonnance médicale.",
                    "examples": [
                        "Le pharmacien donne des conseils."
                    ]
                }
            ]
        },
        {
            "word": "aéroport",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "✈️",
            "form": "noun",
            "plural": "aéroports",
            "definitions": [
                {
                    "text": "Un lieu où les avions atterrissent et décollent.",
                    "examples": [
                        "Je vais à l'aéroport pour mon voyage.",
                        "L'aéroport est très grand."
                    ]
                },
                {
                    "text": "C'est l'endroit où l'on prend l'avion.",
                    "examples": [
                        "On doit enregistrer les bagages à l'aéroport."
                    ]
                }
            ]
        },
        {
            "word": "t-shirt",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👕",
            "form": "noun",
            "plural": "t-shirts"
        },
        {
            "word": "pants",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👖",
            "form": "noun",
            "plural": "pants"
        },
        {
            "word": "dress",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "dresses"
        },
        {
            "word": "shoe",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👟",
            "form": "noun",
            "plural": "shoes"
        },
        {
            "word": "hat",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👒",
            "form": "noun",
            "plural": "hats"
        },
        {
            "word": "jacket",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🧥",
            "form": "noun",
            "plural": "jackets"
        },
        {
            "word": "skirt",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "skirts"
        },
        {
            "word": "sock",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🧦",
            "form": "noun",
            "plural": "socks"
        },
        {
            "word": "sweater",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🧶",
            "form": "noun",
            "plural": "sweaters"
        },
        {
            "word": "scarf",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🧣",
            "form": "noun",
            "plural": "scarfs"
        },
        {
            "word": "chair",
            "level": "starter",
            "theme": "home_A0",
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
            "theme": "home_A0",
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
            "theme": "home_A0",
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
            "word": "sofa",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🛋️",
            "form": "noun",
            "plural": "sofas"
        },
        {
            "word": "lamp",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "💡",
            "form": "noun",
            "plural": "lamps"
        },
        {
            "word": "desk",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "⌨️",
            "form": "noun",
            "plural": "desks"
        },
        {
            "word": "wardrobe",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "👗",
            "form": "noun",
            "plural": "wardrobes"
        },
        {
            "word": "shelf",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "📚",
            "form": "noun",
            "plural": "shelves"
        },
        {
            "word": "mirror",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🪞",
            "form": "noun",
            "plural": "mirrors"
        },
        {
            "word": "armchair",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "🪑",
            "form": "noun",
            "plural": "armchairs"
        },
        {
            "word": "tall",
            "level": "starter",
            "theme": "adjectives_A0",
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
            "theme": "adjectives_A0",
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
            "word": "beautiful",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "adjective"
        },
        {
            "word": "strong",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "adjective"
        },
        {
            "word": "thin",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "adjective"
        },
        {
            "word": "young",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "adjective"
        },
        {
            "word": "old",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "adjective"
        },
        {
            "word": "blonde",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "adjective"
        },
        {
            "word": "key",
            "level": "starter",
            "theme": "home_A0",
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
            "theme": "home_A0",
            "emoji": "📱",
            "form": "noun",
            "plural": "phones"
        },
        {
            "word": "book",
            "level": "starter",
            "theme": "home_A0",
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
            "word": "wallet",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👛",
            "form": "noun",
            "plural": "wallets"
        },
        {
            "word": "glasses",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👓",
            "form": "noun",
            "plural": "glasses",
            "definitions": [
                {
                    "text": "Something you wear on your face to help you see better.",
                    "examples": [
                        "I need new glasses.",
                        "He is wearing black glasses."
                    ]
                },
                {
                    "text": "Containers used for drinking water or juice.",
                    "examples": [
                        "Two glasses of water, please.",
                        "The glasses are in the kitchen."
                    ]
                }
            ]
        },
        {
            "word": "umbrella",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "☂️",
            "form": "noun",
            "plural": "umbrellas"
        },
        {
            "word": "bag",
            "level": "starter",
            "theme": "home_A0",
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
            "word": "laptop",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "laptops"
        },
        {
            "word": "pen",
            "level": "starter",
            "theme": "home_A0",
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
            "word": "lion",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🦁",
            "form": "noun",
            "plural": "lions",
            "definitions": [
                {
                    "text": "A large wild cat that lives in Africa and is called 'the king of the jungle'.",
                    "examples": [
                        "The lion is very strong.",
                        "We saw a lion at the zoo."
                    ]
                }
            ]
        },
        {
            "word": "tiger",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐯",
            "form": "noun",
            "plural": "tigers"
        },
        {
            "word": "elephant",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐘",
            "form": "noun",
            "plural": "elephants"
        },
        {
            "word": "monkey",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐒",
            "form": "noun",
            "plural": "monkeys"
        },
        {
            "word": "horse",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐎",
            "form": "noun",
            "plural": "horses"
        },
        {
            "word": "rabbit",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐇",
            "form": "noun",
            "plural": "rabbits"
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
            "word": "snowy",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "❄️",
            "form": "adjective"
        },
        {
            "word": "windy",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "💨",
            "form": "adjective"
        },
        {
            "word": "cloudy",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "☁️",
            "form": "adjective"
        },
        {
            "word": "stormy",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "⛈️",
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
            "theme": "body_A0",
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
            "theme": "body_A0",
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
            "theme": "body_A0",
            "emoji": "🦵",
            "form": "noun",
            "plural": "legs"
        },
        {
            "word": "eye",
            "level": "starter",
            "theme": "body_A0",
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
            "theme": "body_A0",
            "emoji": "👃",
            "form": "noun",
            "plural": "noses"
        },
        {
            "word": "mouth",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👄",
            "form": "noun",
            "plural": "mouths"
        },
        {
            "word": "ear",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👂",
            "form": "noun",
            "plural": "ears"
        },
        {
            "word": "arm",
            "level": "elementary",
            "theme": "health_body_A2",
            "emoji": "💪",
            "form": "noun",
            "plural": "arms"
        },
        {
            "word": "foot",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🦶",
            "form": "noun",
            "plural": "feet"
        },
        {
            "word": "finger",
            "level": "elementary",
            "theme": "health_body_A2",
            "emoji": "☝️",
            "form": "noun",
            "plural": "fingers"
        },
        {
            "word": "software developer",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "software developers",
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
            ]
        },
        {
            "word": "psychologist",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "🧠",
            "form": "noun",
            "plural": "psychologists",
            "definitions": [
                {
                    "text": "A person who studies how people think and feel.",
                    "examples": [
                        "The psychologist is talking to a patient.",
                        "She is a child psychologist."
                    ]
                },
                {
                    "text": "This person often works in a private office or a hospital.",
                    "examples": [
                        "Psychologists help people with their mental health."
                    ]
                }
            ]
        },
        {
            "word": "data scientist",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📊",
            "form": "noun",
            "plural": "data scientists",
            "definitions": [
                {
                    "text": "A person who analyzes data to find patterns.",
                    "examples": [
                        "The data scientist is using machine learning.",
                        "Data scientists are in high demand."
                    ]
                },
                {
                    "text": "This person works with large amounts of information on a computer.",
                    "examples": [
                        "Data scientists help companies make better decisions."
                    ]
                }
            ]
        },
        {
            "word": "philosopher",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧐",
            "form": "noun",
            "plural": "philosophers",
            "definitions": [
                {
                    "text": "A person who thinks about the meaning of life and truth.",
                    "examples": [
                        "Socrates was a famous philosopher.",
                        "The philosopher wrote many essays."
                    ]
                },
                {
                    "text": "This person reads many books and asks difficult questions.",
                    "examples": [
                        "Philosophers discuss ethics and logic."
                    ]
                }
            ]
        },
        {
            "word": "architect",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "🏗️",
            "form": "noun",
            "plural": "architects",
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
            ]
        },
        {
            "word": "journalist",
            "level": "elementary",
            "theme": "neighbourhood_A2",
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
            ]
        },
        {
            "word": "athletic",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "adjective"
        },
        {
            "word": "sophisticated",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "form": "adjective"
        },
        {
            "word": "charismatic",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "form": "adjective"
        },
        {
            "word": "ordinary",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "adjective"
        },
        {
            "word": "algorithm",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "algorithms"
        },
        {
            "word": "streaming",
            "level": "elementary",
            "theme": "technology_A2",
            "emoji": "📺",
            "form": "noun",
            "plural": "streamings"
        },
        {
            "word": "virtual reality",
            "level": "advanced",
            "theme": "science_tech_society_C1",
            "emoji": "🥽",
            "form": "noun",
            "plural": "virtual realities"
        },
        {
            "word": "blockchain",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⛓️",
            "form": "noun",
            "plural": "blockchains"
        },
        {
            "word": "evolution",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐒",
            "form": "noun",
            "plural": "evolutions"
        },
        {
            "word": "quantum mechanics",
            "level": "advanced",
            "theme": "science_tech_society_C1",
            "emoji": "⚛️",
            "form": "noun",
            "plural": "quantum mechanicses"
        },
        {
            "word": "existentialism",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "👤",
            "form": "noun",
            "plural": "existentialisms"
        },
        {
            "word": "gravity",
            "level": "elementary",
            "theme": "technology_A2",
            "emoji": "🍎",
            "form": "noun",
            "plural": "gravities"
        },
        {
            "word": "democracy",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🗳️",
            "form": "noun",
            "plural": "democracies"
        },
        {
            "word": "globalization",
            "level": "upper-intermediate",
            "theme": "politics_governance_B2",
            "emoji": "🌍",
            "form": "noun",
            "plural": "globalizations"
        },
        {
            "word": "sustainability",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "🌱",
            "form": "noun",
            "plural": "sustainabilities"
        },
        {
            "word": "justice",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "⚖️",
            "form": "noun",
            "plural": "justices"
        },
        {
            "word": "climate change",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "🌡️",
            "form": "noun",
            "plural": "climate changes"
        },
        {
            "word": "biodiversity",
            "level": "upper-intermediate",
            "theme": "environment_policy_B2",
            "form": "noun",
            "plural": "biodiversities"
        },
        {
            "word": "pollution",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "🏭",
            "form": "noun",
            "plural": "pollutions"
        },
        {
            "word": "ecosystem",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "🌲",
            "form": "noun",
            "plural": "ecosystems"
        },
        {
            "word": "university",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "🎓",
            "form": "noun",
            "plural": "universities",
            "definitions": [
                {
                    "text": "A high-level educational institution where students study for degrees.",
                    "examples": [
                        "He is studying at the university.",
                        "The university has a large library."
                    ]
                }
            ]
        },
        {
            "word": "colleague",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "👥",
            "form": "noun",
            "plural": "colleagues"
        },
        {
            "word": "sustainable",
            "level": "upper-intermediate",
            "theme": "environment_policy_B2",
            "emoji": "🌱",
            "form": "adjective"
        },
        {
            "word": "infrastructure",
            "level": "advanced",
            "theme": "science_tech_society_C1",
            "emoji": "🏗️",
            "form": "noun",
            "plural": "infrastructures"
        },
        {
            "word": "paradigm shift",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔄",
            "form": "noun",
            "plural": "paradigm shifts"
        },
        {
            "word": "remote work",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "remote works"
        },
        {
            "word": "global warming",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "🌡️",
            "form": "noun",
            "plural": "global warmings"
        },
        {
            "word": "artificial intelligence",
            "level": "upper-intermediate",
            "theme": "technology_privacy_B2",
            "emoji": "🤖",
            "form": "noun",
            "plural": "artificial intelligences"
        },
        {
            "word": "mental health",
            "level": "intermediate",
            "theme": "mental_health_B1",
            "emoji": "🧠",
            "form": "noun",
            "plural": "mental healths"
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
            ]
        },
        {
            "word": "smartphone",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📱",
            "form": "noun",
            "plural": "smartphones"
        },
        {
            "word": "biodiversity",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🦋",
            "form": "noun",
            "plural": "biodiversities"
        },
        {
            "word": "interdisciplinary",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧪",
            "form": "adjective"
        },
        {
            "word": "commuter",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "🚆",
            "form": "noun",
            "plural": "commuters",
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
            ]
        },
        {
            "word": "souvenir",
            "level": "elementary",
            "theme": "transport_travel_A2",
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
            ]
        },
        {
            "word": "volunteer",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🤝",
            "form": "noun",
            "plural": "volunteers"
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
            "word": "city",
            "theme": "transport_travel_A2",
            "level": "elementary",
            "numberPlural": "3 city",
            "answer": "three cities",
            "emoji": "🏙️",
            "form": "noun",
            "plural": "cities",
            "definitions": [
                {
                    "text": "A large and important town.",
                    "examples": [
                        "New York is a big city.",
                        "I live in a city."
                    ]
                },
                {
                    "text": "This is a place with many buildings, streets, and people.",
                    "examples": [
                        "Cities are often very noisy."
                    ]
                }
            ]
        },
        {
            "word": "child",
            "theme": "society_community_B1",
            "level": "intermediate",
            "numberPlural": "5 child",
            "answer": "five children",
            "emoji": "🧒",
            "form": "noun",
            "plural": "children",
            "definitions": [
                {
                    "text": "A young human who is not yet an adult.",
                    "examples": [
                        "The child is playing with a toy.",
                        "How many children do they have?"
                    ]
                }
            ]
        },
        {
            "word": "leaf",
            "theme": "environment_sustainability_B1",
            "level": "intermediate",
            "numberPlural": "many leaf",
            "answer": "many leaves",
            "emoji": "🍃",
            "form": "noun",
            "plural": "leaves"
        },
        {
            "word": "man",
            "level": "starter",
            "theme": "adjectives_A0",
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
            "theme": "adjectives_A0",
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
            "word": "tooth",
            "level": "intermediate",
            "theme": "mental_health_B1",
            "numberPlural": "32 tooth",
            "answer": "thirty-two teeth",
            "emoji": "🦷",
            "form": "noun",
            "plural": "teeth"
        },
        {
            "word": "foot",
            "level": "starter",
            "theme": "body_A0",
            "numberPlural": "2 foot",
            "answer": "two feet",
            "emoji": "🦶",
            "form": "noun",
            "plural": "feet"
        },
        {
            "word": "mouse",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "numberPlural": "many mouse",
            "answer": "many mice",
            "emoji": "🐭",
            "form": "noun",
            "plural": "mice"
        }
    ]
};
    window.vocabularyData = { ...window.vocabularyData, ...data };
})();

(function() {
    const data = [
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
        "word": "carrot",
        "level": "intermediate",
        "theme": "society_community_B1",
        "explanation": "Carrot is a vegetable, the others are fruits.",
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
        "word": "library",
        "level": "intermediate",
        "theme": "neighbourhood_local_A2",
        "explanation": "A library is a place for books, while the others might be related to food or travel.",
        "emoji": "📚",
        "form": "noun",
        "plural": "libraries"
    },
    {
        "word": "museum",
        "level": "intermediate",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "museums"
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
        "word": "thin",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "adjective"
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
        "word": "laptop",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "laptops"
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
        "word": "stormy",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "⛈️",
        "form": "adjective"
    },
    {
        "word": "software developer",
        "level": "intermediate",
        "theme": "career_development_B1",
        "explanation": "A software developer creates code, while the others are physical structures or objects.",
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
        "word": "algorithm",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "algorithms"
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
        "word": "democracy",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🗳️",
        "form": "noun",
        "plural": "democracies"
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
        "word": "ecosystem",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌲",
        "form": "noun",
        "plural": "ecosystems"
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
        "word": "mental health",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "emoji": "🧠",
        "form": "noun",
        "plural": "mental healths"
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
        "word": "volunteer",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🤝",
        "form": "noun",
        "plural": "volunteers"
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
        "word": "tooth",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "numberPlural": "32 tooth",
        "answer": "thirty-two teeth",
        "emoji": "🦷",
        "form": "noun",
        "plural": "teeth"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_starter_food_drink_001",
        "topic": "Coffee vs tea — which is a better morning drink?",
        "sideA": "Coffee",
        "sideB": "Tea",
        "ideasA": [
            "Energy",
            "Smells great"
        ],
        "ideasB": [
            "Healthy",
            "Relax"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "word": "Coffee vs tea — which is a better morning drink?",
        "form": "other",
        "definitions": [
            {
                "text": "Coffee vs tea — which is a better morning drink?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_002",
        "topic": "Restaurant vs home cooking — which is better?",
        "sideA": "Restaurant",
        "sideB": "Home cooking",
        "ideasA": [
            "No dishes to wash",
            "Professional chefs"
        ],
        "ideasB": [
            "It is cheaper",
            "It is healthier"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "word": "Restaurant vs home cooking — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Restaurant vs home cooking — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_animals_001",
        "topic": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
        "sideA": "Cats",
        "sideB": "Dogs",
        "ideasA": [
            "Broken glass",
            "Mess"
        ],
        "ideasB": [
            "No shoes",
            "Expensive"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "animals",
        "sub_theme": null,
        "word": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
        "form": "other",
        "definitions": [
            {
                "text": "Cats that knock things off tables vs dogs that chew shoes — which pet is more annoying?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_001",
        "topic": "Summer vs winter — which season is better?",
        "sideA": "Summer",
        "sideB": "Winter",
        "ideasA": [
            "Sunny",
            "Beach"
        ],
        "ideasB": [
            "Snow",
            "Skiing"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Summer vs winter — which season is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Summer vs winter — which season is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_001",
        "topic": "Book vs film — which is better?",
        "sideA": "Book",
        "sideB": "Film",
        "ideasA": [
            "Use your imagination",
            "Learn many things"
        ],
        "ideasB": [
            "It is fast",
            "Watch with friends"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Book vs film — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Book vs film — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_001",
        "topic": "Bicycle vs car — which is better for the city?",
        "sideA": "Bicycle",
        "sideB": "Car",
        "ideasA": [
            "Good for your body",
            "It is free"
        ],
        "ideasB": [
            "It is very fast",
            "Warm when it rains"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Bicycle vs car — which is better for the city?",
        "form": "other",
        "definitions": [
            {
                "text": "Bicycle vs car — which is better for the city?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_003",
        "topic": "Pizza vs burger — which is better?",
        "sideA": "Pizza",
        "sideB": "Burger",
        "ideasA": [
            "You can share it",
            "Lots of cheese"
        ],
        "ideasB": [
            "Easy to eat",
            "Good with chips"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Pizza vs burger — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Pizza vs burger — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_001",
        "topic": "City vs countryside — which is a better place to live?",
        "sideA": "City",
        "sideB": "Countryside",
        "ideasA": [
            "Many shops",
            "Go out at night"
        ],
        "ideasB": [
            "It is very quiet",
            "Clean air"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "City vs countryside — which is a better place to live?",
        "form": "other",
        "definitions": [
            {
                "text": "City vs countryside — which is a better place to live?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_002",
        "topic": "Morning vs evening — which part of the day is nicer?",
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Lots of energy",
            "Sun rises"
        ],
        "ideasB": [
            "Can rest",
            "Watch films"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Morning vs evening — which part of the day is nicer?",
        "form": "other",
        "definitions": [
            {
                "text": "Morning vs evening — which part of the day is nicer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_002",
        "topic": "Train vs plane — which is better for travel?",
        "sideA": "Train",
        "sideB": "Plane",
        "ideasA": [
            "See the window view",
            "Better for nature"
        ],
        "ideasB": [
            "It is very fast",
            "Go very far"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Train vs plane — which is better for travel?",
        "form": "other",
        "definitions": [
            {
                "text": "Train vs plane — which is better for travel?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_003",
        "topic": "Sea vs mountains — which is better for a holiday?",
        "sideA": "Sea",
        "sideB": "Mountains",
        "ideasA": [
            "Swim",
            "Sun"
        ],
        "ideasB": [
            "Walk",
            "Beautiful"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Sea vs mountains — which is better for a holiday?",
        "form": "other",
        "definitions": [
            {
                "text": "Sea vs mountains — which is better for a holiday?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_001",
        "topic": "Solo vs partner work — which is better?",
        "sideA": "Solo",
        "sideB": "Partner",
        "ideasA": [
            "Focus better",
            "Go faster"
        ],
        "ideasB": [
            "More ideas",
            "More fun"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Solo vs partner work — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Solo vs partner work — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_001",
        "topic": "Phone call vs text message — which is better?",
        "sideA": "Call",
        "sideB": "Text",
        "ideasA": [
            "More direct",
            "Hear the voice"
        ],
        "ideasB": [
            "It is faster",
            "Answer later"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Phone call vs text message — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Phone call vs text message — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_clothes_001",
        "topic": "Comfortable clothes vs smart clothes — which is better?",
        "sideA": "Comfortable",
        "sideB": "Smart",
        "ideasA": [
            "Feel good",
            "Practical"
        ],
        "ideasB": [
            "Very beautiful",
            "Good for work"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "clothes",
        "sub_theme": null,
        "word": "Comfortable clothes vs smart clothes — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Comfortable clothes vs smart clothes — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_004",
        "topic": "Sugar vs salt — which is more important?",
        "sideA": "Sugar",
        "sideB": "Salt",
        "ideasA": [
            "For desserts",
            "Everyone loves chocolate"
        ],
        "ideasB": [
            "For main meals",
            "Gives flavour"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Sugar vs salt — which is more important?",
        "form": "other",
        "definitions": [
            {
                "text": "Sugar vs salt — which is more important?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_002",
        "topic": "Big parties vs small dinners — which is better?",
        "sideA": "Big parties",
        "sideB": "Small dinners",
        "ideasA": [
            "Meet new people",
            "Music is loud"
        ],
        "ideasB": [
            "Talk quietly",
            "It is relaxing"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Big parties vs small dinners — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Big parties vs small dinners — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_002",
        "topic": "House vs flat — which is better to live in?",
        "sideA": "House",
        "sideB": "Flat",
        "ideasA": [
            "Garden",
            "Space"
        ],
        "ideasB": [
            "Cheap",
            "Easy clean"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "House vs flat — which is better to live in?",
        "form": "other",
        "definitions": [
            {
                "text": "House vs flat — which is better to live in?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_003",
        "topic": "Money vs free time — which is more important?",
        "sideA": "Money",
        "sideB": "Free time",
        "ideasA": [
            "Can buy things",
            "It is security"
        ],
        "ideasB": [
            "Enjoy life",
            "Less stress"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Money vs free time — which is more important?",
        "form": "other",
        "definitions": [
            {
                "text": "Money vs free time — which is more important?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_005",
        "topic": "Dark chocolate vs milk chocolate — which is better?",
        "sideA": "Dark",
        "sideB": "Milk",
        "ideasA": [
            "Good for your heart",
            "Less sugar"
        ],
        "ideasB": [
            "Very sweet",
            "Good with coffee"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Dark chocolate vs milk chocolate — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Dark chocolate vs milk chocolate — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_004",
        "topic": "Cinema vs Netflix at home — which is better?",
        "sideA": "Cinema",
        "sideB": "Netflix",
        "ideasA": [
            "The big screen",
            "The sound is great"
        ],
        "ideasB": [
            "You are comfortable",
            "Can stop the film"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Cinema vs Netflix at home — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Cinema vs Netflix at home — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_004",
        "topic": "Solo travel vs travel with friends — which is better?",
        "sideA": "Solo",
        "sideB": "Friends",
        "ideasA": [
            "You choose everything",
            "Meet more people"
        ],
        "ideasB": [
            "Share memories",
            "It is cheaper"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Solo travel vs travel with friends — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Solo travel vs travel with friends — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_005",
        "topic": "Podcasts vs music — which is better in the car?",
        "sideA": "Podcasts",
        "sideB": "Music",
        "ideasA": [
            "Learn things",
            "Interesting stories"
        ],
        "ideasB": [
            "Can sing",
            "Gives energy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Podcasts vs music — which is better in the car?",
        "form": "other",
        "definitions": [
            {
                "text": "Podcasts vs music — which is better in the car?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_001",
        "topic": "Rain vs wind — which is worse?",
        "sideA": "Rain",
        "sideB": "Wind",
        "ideasA": [
            "Everything is wet",
            "Sad mood"
        ],
        "ideasB": [
            "It is cold",
            "Bad for hair"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "Rain vs wind — which is worse?",
        "form": "other",
        "definitions": [
            {
                "text": "Rain vs wind — which is worse?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_006",
        "topic": "Surprise gift vs choosing your gift — which is better?",
        "sideA": "Surprise",
        "sideB": "Choosing",
        "ideasA": [
            "Strong emotion",
            "It is kind"
        ],
        "ideasB": [
            "Get what you want",
            "No bad surprises"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Surprise gift vs choosing your gift — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Surprise gift vs choosing your gift — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_002",
        "topic": "Writing on paper vs typing on a tablet — which is better?",
        "sideA": "Paper",
        "sideB": "Tablet",
        "ideasA": [
            "No battery",
            "Good feeling"
        ],
        "ideasB": [
            "Fast",
            "Save paper"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Writing on paper vs typing on a tablet — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Writing on paper vs typing on a tablet — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_006",
        "topic": "Sandwich vs salad — which is better for lunch?",
        "sideA": "Sandwich",
        "sideB": "Salad",
        "ideasA": [
            "Easy to take",
            "Full stomach"
        ],
        "ideasB": [
            "Light food",
            "Lots of vitamins"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "word": "Sandwich vs salad — which is better for lunch?",
        "form": "other",
        "definitions": [
            {
                "text": "Sandwich vs salad — which is better for lunch?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_005",
        "topic": "Hotel vs camping — which is better for holiday?",
        "sideA": "Hotel",
        "sideB": "Camping",
        "ideasA": [
            "Comfortable",
            "Has breakfast"
        ],
        "ideasB": [
            "In nature",
            "It is an adventure"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Hotel vs camping — which is better for holiday?",
        "form": "other",
        "definitions": [
            {
                "text": "Hotel vs camping — which is better for holiday?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_002",
        "topic": "Speaking vs listening — which is more important?",
        "sideA": "Speaking",
        "sideB": "Listening",
        "ideasA": [
            "Share your ideas",
            "Important for leader"
        ],
        "ideasB": [
            "Learn from others",
            "It is kind"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Speaking vs listening — which is more important?",
        "form": "other",
        "definitions": [
            {
                "text": "Speaking vs listening — which is more important?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_003",
        "topic": "Spring vs Autumn — which is better?",
        "sideA": "Spring",
        "sideB": "Autumn",
        "ideasA": [
            "Flowers grow",
            "Warmer weather"
        ],
        "ideasB": [
            "Beautiful leaves",
            "Nice for walking"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Spring vs Autumn — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Spring vs Autumn — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_007",
        "topic": "Fruit vs vegetables — which is better?",
        "sideA": "Fruit",
        "sideB": "Vegetables",
        "ideasA": [
            "They are sweet",
            "Great for snacks"
        ],
        "ideasB": [
            "Very healthy",
            "Good for cooking"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Fruit vs vegetables — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Fruit vs vegetables — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_007",
        "topic": "Action movies vs comedies — which is better?",
        "sideA": "Action",
        "sideB": "Comedy",
        "ideasA": [
            "Exciting and fast",
            "Cool effects"
        ],
        "ideasB": [
            "Make you laugh",
            "Good for relaxing"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Action movies vs comedies — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Action movies vs comedies — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_003",
        "topic": "Washing dishes vs vacuuming — which is better?",
        "sideA": "Dishes",
        "sideB": "Vacuuming",
        "ideasA": [
            "Warm water is nice",
            "Quiet job"
        ],
        "ideasB": [
            "It is fast",
            "See immediate result"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Washing dishes vs vacuuming — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Washing dishes vs vacuuming — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_008",
        "topic": "Pop music vs rock music — which is better?",
        "sideA": "Pop",
        "sideB": "Rock",
        "ideasA": [
            "Catchy songs",
            "Good for dancing"
        ],
        "ideasB": [
            "Cool instruments",
            "Strong energy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Pop music vs rock music — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Pop music vs rock music — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_004",
        "topic": "Early bird vs night owl — which is better?",
        "sideA": "Early bird",
        "sideB": "Night owl",
        "ideasA": [
            "Quiet morning",
            "Productive day"
        ],
        "ideasB": [
            "Creative at night",
            "Can sleep late"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Early bird vs night owl — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Early bird vs night owl — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_health_medicine_001",
        "topic": "Walking vs running — which is better?",
        "sideA": "Walking",
        "sideB": "Running",
        "ideasA": [
            "Relaxing",
            "Can see nature"
        ],
        "ideasB": [
            "Good for heart",
            "Very fast"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "word": "Walking vs running — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Walking vs running — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_003",
        "topic": "Laptop vs desktop — which is better?",
        "sideA": "Laptop",
        "sideB": "Desktop",
        "ideasA": [
            "Can move it",
            "Work anywhere"
        ],
        "ideasB": [
            "Bigger screen",
            "More powerful"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Laptop vs desktop — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Laptop vs desktop — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_006",
        "topic": "Public transport vs taxi — which is better?",
        "sideA": "Bus/Train",
        "sideB": "Taxi",
        "ideasA": [
            "Cheaper",
            "Better for nature"
        ],
        "ideasB": [
            "Direct to house",
            "More comfortable"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Public transport vs taxi — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Public transport vs taxi — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_008",
        "topic": "Ice cream vs cake — which is a better dessert?",
        "sideA": "Ice cream",
        "sideB": "Cake",
        "ideasA": [
            "Cold",
            "Fresh"
        ],
        "ideasB": [
            "Warm",
            "Birthday"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Ice cream vs cake — which is a better dessert?",
        "form": "other",
        "definitions": [
            {
                "text": "Ice cream vs cake — which is a better dessert?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_004",
        "topic": "Email vs letter — which is better?",
        "sideA": "Email",
        "sideB": "Letter",
        "ideasA": [
            "Very fast",
            "Free"
        ],
        "ideasB": [
            "More personal",
            "Nice to keep"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Email vs letter — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Email vs letter — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_002",
        "topic": "Beach vs park — which is better?",
        "sideA": "Beach",
        "sideB": "Park",
        "ideasA": [
            "Can swim",
            "Sand is fun"
        ],
        "ideasB": [
            "Trees and shade",
            "Good for picnics"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "Beach vs park — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Beach vs park — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_004",
        "topic": "Cooking vs cleaning — which is better?",
        "sideA": "Cooking",
        "sideB": "Cleaning",
        "ideasA": [
            "Creative",
            "Delicious result"
        ],
        "ideasB": [
            "Organised house",
            "Relaxing task"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Cooking vs cleaning — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Cooking vs cleaning — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_007",
        "topic": "Short holiday vs long holiday — which is better?",
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "Easy planning",
            "Many trips"
        ],
        "ideasB": [
            "Relax more",
            "See more"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Short holiday vs long holiday — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Short holiday vs long holiday — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_009",
        "topic": "Fiction vs non-fiction — which is better?",
        "sideA": "Fiction",
        "sideB": "Non-fiction",
        "ideasA": [
            "Exciting stories",
            "Escapism"
        ],
        "ideasB": [
            "Learn facts",
            "Real world info"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Fiction vs non-fiction — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Fiction vs non-fiction — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_009",
        "topic": "Sweet vs savoury breakfast — which is better?",
        "sideA": "Sweet",
        "sideB": "Savoury",
        "ideasA": [
            "Gives sugar energy",
            "Tastes like treat"
        ],
        "ideasB": [
            "Full for longer",
            "More healthy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "word": "Sweet vs savoury breakfast — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Sweet vs savoury breakfast — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_008",
        "topic": "Mountain cabin vs city hotel — which is better?",
        "sideA": "Cabin",
        "sideB": "Hotel",
        "ideasA": [
            "Quiet nature",
            "Fresh air"
        ],
        "ideasB": [
            "Near shops",
            "Luxury service"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Mountain cabin vs city hotel — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Mountain cabin vs city hotel — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_005",
        "topic": "Group chat vs private message — which is better?",
        "sideA": "Group",
        "sideB": "Private",
        "ideasA": [
            "Talk to everyone",
            "Fun planning"
        ],
        "ideasB": [
            "More personal",
            "No distractions"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Group chat vs private message — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Group chat vs private message — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_003",
        "topic": "Office vs home — which is a better place to work?",
        "sideA": "Office",
        "sideB": "Home",
        "ideasA": [
            "Focus",
            "Colleagues"
        ],
        "ideasB": [
            "No travel",
            "Habits"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Office vs home — which is a better place to work?",
        "form": "other",
        "definitions": [
            {
                "text": "Office vs home — which is a better place to work?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_009",
        "topic": "Physical map vs GPS — which is better?",
        "sideA": "Physical",
        "sideB": "GPS",
        "ideasA": [
            "No battery needed",
            "Better overview"
        ],
        "ideasB": [
            "Live traffic",
            "Easy to follow"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Physical map vs GPS — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Physical map vs GPS — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_010",
        "topic": "Gift card vs actual gift — which is better?",
        "sideA": "Gift card",
        "sideB": "Actual gift",
        "ideasA": [
            "They choose",
            "Always useful"
        ],
        "ideasB": [
            "Personal touch",
            "Shows care"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Gift card vs actual gift — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Gift card vs actual gift — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_health_medicine_002",
        "topic": "Swimming vs cycling — which is better?",
        "sideA": "Swimming",
        "sideB": "Cycling",
        "ideasA": [
            "Cool water",
            "Whole body workout"
        ],
        "ideasB": [
            "See scenery",
            "Good transport"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "word": "Swimming vs cycling — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Swimming vs cycling — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_004",
        "topic": "Eating at desk vs break room — which is better?",
        "sideA": "Desk",
        "sideB": "Break room",
        "ideasA": [
            "Save time",
            "Can watch video"
        ],
        "ideasB": [
            "Socialise",
            "Real break"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Eating at desk vs break room — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Eating at desk vs break room — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_005",
        "topic": "Morning person vs night person — which is better?",
        "sideA": "Morning",
        "sideB": "Night",
        "ideasA": [
            "Sun",
            "Productive"
        ],
        "ideasB": [
            "Creative",
            "No noise"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Morning person vs night person — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Morning person vs night person — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_011",
        "topic": "Paper book vs E-book — which is better?",
        "sideA": "Paper",
        "sideB": "E-book",
        "ideasA": [
            "Smell of paper",
            "No screen"
        ],
        "ideasB": [
            "Light to carry",
            "Thousands of books"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Paper book vs E-book — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Paper book vs E-book — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_clothes_002",
        "topic": "New clothes vs vintage — which is better?",
        "sideA": "New",
        "sideB": "Vintage",
        "ideasA": [
            "Perfect condition",
            "Modern style"
        ],
        "ideasB": [
            "Unique pieces",
            "Eco-friendly"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "clothes",
        "sub_theme": null,
        "word": "New clothes vs vintage — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "New clothes vs vintage — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_010",
        "topic": "Hot food vs cold food — which is better?",
        "sideA": "Hot",
        "sideB": "Cold",
        "ideasA": [
            "Winter",
            "Tasty"
        ],
        "ideasB": [
            "Summer",
            "Salad"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Hot food vs cold food — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Hot food vs cold food — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_011",
        "topic": "Breakfast vs dinner — which meal is more important?",
        "sideA": "Breakfast",
        "sideB": "Dinner",
        "ideasA": [
            "Morning energy",
            "Start day"
        ],
        "ideasB": [
            "Family time",
            "Big meal"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "word": "Breakfast vs dinner — which meal is more important?",
        "form": "other",
        "definitions": [
            {
                "text": "Breakfast vs dinner — which meal is more important?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_003",
        "topic": "City park vs forest — which is better?",
        "sideA": "Park",
        "sideB": "Forest",
        "ideasA": [
            "Near home",
            "Easy paths"
        ],
        "ideasB": [
            "Adventure",
            "Very quiet"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "City park vs forest — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "City park vs forest — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_006",
        "topic": "Texting vs voice notes — which is better?",
        "sideA": "Texting",
        "sideB": "Voice notes",
        "ideasA": [
            "Read anytime",
            "Searchable"
        ],
        "ideasB": [
            "Hear emotion",
            "Faster to send"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Texting vs voice notes — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Texting vs voice notes — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_005",
        "topic": "Living with family vs living alone — which is better?",
        "sideA": "With family",
        "sideB": "Alone",
        "ideasA": [
            "Never alone",
            "Help with food"
        ],
        "ideasB": [
            "Peace",
            "Your own rules"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Living with family vs living alone — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Living with family vs living alone — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_012",
        "topic": "Having a brother vs having a sister — which is better?",
        "sideA": "Brother",
        "sideB": "Sister",
        "ideasA": [
            "Play games",
            "Protection"
        ],
        "ideasB": [
            "Share secrets",
            "Kindness"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Having a brother vs having a sister — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Having a brother vs having a sister — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_013",
        "topic": "Big family vs small family — which is nicer?",
        "sideA": "Big family",
        "sideB": "Small family",
        "ideasA": [
            "Busy house",
            "Many friends"
        ],
        "ideasB": [
            "Quiet",
            "More space"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Big family vs small family — which is nicer?",
        "form": "other",
        "definitions": [
            {
                "text": "Big family vs small family — which is nicer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_014",
        "topic": "Being the oldest child vs being the youngest — which is better?",
        "sideA": "Oldest",
        "sideB": "Youngest",
        "ideasA": [
            "Leader",
            "Responsible"
        ],
        "ideasB": [
            "Get help",
            "Relaxed"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Being the oldest child vs being the youngest — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Being the oldest child vs being the youngest — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_005",
        "topic": "Morning school vs afternoon school — which is better?",
        "sideA": "Morning",
        "sideB": "Afternoon",
        "ideasA": [
            "Free afternoon",
            "Routine"
        ],
        "ideasB": [
            "Sleep late",
            "Quiet morning"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Morning school vs afternoon school — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Morning school vs afternoon school — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_015",
        "topic": "Reading vs maths — which subject is more fun?",
        "sideA": "Reading",
        "sideB": "Maths",
        "ideasA": [
            "Stories",
            "New words"
        ],
        "ideasB": [
            "Logic",
            "Numbers"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Reading vs maths — which subject is more fun?",
        "form": "other",
        "definitions": [
            {
                "text": "Reading vs maths — which subject is more fun?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_006",
        "topic": "Learning at school vs learning at home — which is better?",
        "sideA": "School",
        "sideB": "Home",
        "ideasA": [
            "Friends",
            "Teacher"
        ],
        "ideasB": [
            "Relaxed",
            "No travel"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Learning at school vs learning at home — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Learning at school vs learning at home — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_007",
        "topic": "Homework vs no homework — which helps you more?",
        "sideA": "Homework",
        "sideB": "No homework",
        "ideasA": [
            "Practice",
            "Learn more"
        ],
        "ideasB": [
            "More play",
            "Less stress"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Homework vs no homework — which helps you more?",
        "form": "other",
        "definitions": [
            {
                "text": "Homework vs no homework — which helps you more?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_007",
        "topic": "Writing on paper vs typing on a computer — which is better?",
        "sideA": "Paper",
        "sideB": "Computer",
        "ideasA": [
            "No screen",
            "Easy"
        ],
        "ideasB": [
            "Fast",
            "Checks spelling"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Writing on paper vs typing on a computer — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Writing on paper vs typing on a computer — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_012",
        "topic": "Sweet food vs savoury food — which do you prefer?",
        "sideA": "Sweet",
        "sideB": "Savoury",
        "ideasA": [
            "Delicious",
            "Treat"
        ],
        "ideasB": [
            "Real food",
            "Salt"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Sweet food vs savoury food — which do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Sweet food vs savoury food — which do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_013",
        "topic": "Cooking with a parent vs buying food ready-made — which is nicer?",
        "sideA": "Cooking",
        "sideB": "Ready-made",
        "ideasA": [
            "Learn skills",
            "Fun"
        ],
        "ideasB": [
            "Fast",
            "No mess"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "word": "Cooking with a parent vs buying food ready-made — which is nicer?",
        "form": "other",
        "definitions": [
            {
                "text": "Cooking with a parent vs buying food ready-made — which is nicer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_006",
        "topic": "Waking up early vs waking up late — which is better?",
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "Quiet morning",
            "Productive"
        ],
        "ideasB": [
            "Creative at night",
            "Sleep late"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Waking up early vs waking up late — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Waking up early vs waking up late — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_007",
        "topic": "Weekdays vs weekends — which do you prefer?",
        "sideA": "Weekdays",
        "sideB": "Weekends",
        "ideasA": [
            "Routine",
            "School"
        ],
        "ideasB": [
            "Fun",
            "Hobbies"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Weekdays vs weekends — which do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Weekdays vs weekends — which do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_006",
        "topic": "Bedroom vs living room — which room do you prefer?",
        "sideA": "Bedroom",
        "sideB": "Living room",
        "ideasA": [
            "Privacy",
            "My things"
        ],
        "ideasB": [
            "Big TV",
            "Sofa"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Bedroom vs living room — which room do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Bedroom vs living room — which room do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_016",
        "topic": "Indoor games vs outdoor games — which are more fun?",
        "sideA": "Indoor",
        "sideB": "Outdoor",
        "ideasA": [
            "No rain",
            "Board games"
        ],
        "ideasB": [
            "Sun",
            "Running"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Indoor games vs outdoor games — which are more fun?",
        "form": "other",
        "definitions": [
            {
                "text": "Indoor games vs outdoor games — which are more fun?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_017",
        "topic": "Watching TV vs reading a book — which is better?",
        "sideA": "TV",
        "sideB": "Book",
        "ideasA": [
            "Relax",
            "Visual"
        ],
        "ideasB": [
            "Imagine",
            "Deep"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Watching TV vs reading a book — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Watching TV vs reading a book — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_018",
        "topic": "Playing sport vs playing a video game — which is more fun?",
        "sideA": "Sport",
        "sideB": "Video game",
        "ideasA": [
            "Healthy",
            "Active"
        ],
        "ideasB": [
            "Skills",
            "Story"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Playing sport vs playing a video game — which is more fun?",
        "form": "other",
        "definitions": [
            {
                "text": "Playing sport vs playing a video game — which is more fun?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_019",
        "topic": "Drawing vs singing — which hobby is better?",
        "sideA": "Drawing",
        "sideB": "Singing",
        "ideasA": [
            "Create art",
            "Quiet"
        ],
        "ideasB": [
            "Use voice",
            "Music"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Drawing vs singing — which hobby is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Drawing vs singing — which hobby is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_020",
        "topic": "Playing alone vs playing with friends — which is more fun?",
        "sideA": "Alone",
        "sideB": "Friends",
        "ideasA": [
            "Focus",
            "Creative"
        ],
        "ideasB": [
            "Share",
            "Laugh"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Playing alone vs playing with friends — which is more fun?",
        "form": "other",
        "definitions": [
            {
                "text": "Playing alone vs playing with friends — which is more fun?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_health_medicine_003",
        "topic": "Swimming vs running — which sport do you prefer?",
        "sideA": "Swimming",
        "sideB": "Running",
        "ideasA": [
            "Cool water",
            "Whole body"
        ],
        "ideasB": [
            "Fresh air",
            "Easy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "word": "Swimming vs running — which sport do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Swimming vs running — which sport do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_021",
        "topic": "Music vs sport — which is a better hobby?",
        "sideA": "Music",
        "sideB": "Sport",
        "ideasA": [
            "Listening",
            "Feel good"
        ],
        "ideasB": [
            "Active",
            "Health"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Music vs sport — which is a better hobby?",
        "form": "other",
        "definitions": [
            {
                "text": "Music vs sport — which is a better hobby?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_animals_002",
        "topic": "Farm animals vs wild animals — which are more interesting?",
        "sideA": "Farm",
        "sideB": "Wild",
        "ideasA": [
            "Useful",
            "Food"
        ],
        "ideasB": [
            "Jungle",
            "Exciting"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "animals",
        "sub_theme": null,
        "word": "Farm animals vs wild animals — which are more interesting?",
        "form": "other",
        "definitions": [
            {
                "text": "Farm animals vs wild animals — which are more interesting?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_004",
        "topic": "Rain vs sunshine — which weather do you prefer?",
        "sideA": "Rain",
        "sideB": "Sunshine",
        "ideasA": [
            "Plants",
            "Cozy"
        ],
        "ideasB": [
            "Beach",
            "Energy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "Rain vs sunshine — which weather do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Rain vs sunshine — which weather do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_005",
        "topic": "Flowers vs trees — which are more beautiful?",
        "sideA": "Flowers",
        "sideB": "Trees",
        "ideasA": [
            "Colours",
            "Smells"
        ],
        "ideasB": [
            "Shade",
            "Oxygen"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "Flowers vs trees — which are more beautiful?",
        "form": "other",
        "definitions": [
            {
                "text": "Flowers vs trees — which are more beautiful?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_010",
        "topic": "Car vs bus — which is better to travel in?",
        "sideA": "Car",
        "sideB": "Bus",
        "ideasA": [
            "Private",
            "Fast"
        ],
        "ideasB": [
            "Cheap",
            "Social"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Car vs bus — which is better to travel in?",
        "form": "other",
        "definitions": [
            {
                "text": "Car vs bus — which is better to travel in?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_011",
        "topic": "Walking vs cycling — which is better to get around?",
        "sideA": "Walking",
        "sideB": "Cycling",
        "ideasA": [
            "Free",
            "Simple"
        ],
        "ideasB": [
            "Fast",
            "Fun"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Walking vs cycling — which is better to get around?",
        "form": "other",
        "definitions": [
            {
                "text": "Walking vs cycling — which is better to get around?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_012",
        "topic": "Travelling alone vs travelling with family — which is more fun?",
        "sideA": "Alone",
        "sideB": "Family",
        "ideasA": [
            "Your own way",
            "Quiet"
        ],
        "ideasB": [
            "Shared fun",
            "Safe"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Travelling alone vs travelling with family — which is more fun?",
        "form": "other",
        "definitions": [
            {
                "text": "Travelling alone vs travelling with family — which is more fun?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_022",
        "topic": "Living with grandparents vs not living with them — which is nicer?",
        "sideA": "Grandparents",
        "sideB": "Not with them",
        "ideasA": [
            "Get help",
            "Learn stories"
        ],
        "ideasB": [
            "More space",
            "Quiet house"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Living with grandparents vs not living with them — which is nicer?",
        "form": "other",
        "definitions": [
            {
                "text": "Living with grandparents vs not living with them — which is nicer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_014",
        "topic": "Mum's cooking vs dad's cooking — which is better?",
        "sideA": "Mum's",
        "sideB": "Dad's",
        "ideasA": [
            "Tasty pasta",
            "Lots of love"
        ],
        "ideasB": [
            "Best pizza",
            "New recipes"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "word": "Mum's cooking vs dad's cooking — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Mum's cooking vs dad's cooking — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_023",
        "topic": "Maths vs art — which subject is more fun?",
        "sideA": "Maths",
        "sideB": "Art",
        "ideasA": [
            "Logic",
            "Numbers"
        ],
        "ideasB": [
            "Colours",
            "Painting"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Maths vs art — which subject is more fun?",
        "form": "other",
        "definitions": [
            {
                "text": "Maths vs art — which subject is more fun?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_006",
        "topic": "Day at the park vs day at the beach — which is better?",
        "sideA": "Park",
        "sideB": "Beach",
        "ideasA": [
            "Green grass",
            "Trees"
        ],
        "ideasB": [
            "Sand",
            "Sea"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "Day at the park vs day at the beach — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Day at the park vs day at the beach — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_015",
        "topic": "Eating pizza with a fork vs eating pizza with your hands — which is better?",
        "sideA": "Fork",
        "sideB": "Hands",
        "ideasA": [
            "Clean hands",
            "Elegant"
        ],
        "ideasB": [
            "Fast",
            "Real way"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Eating pizza with a fork vs eating pizza with your hands — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Eating pizza with a fork vs eating pizza with your hands — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_007",
        "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
        "sideA": "Socks on",
        "sideB": "No socks",
        "ideasA": [
            "Warm feet",
            "Cozy"
        ],
        "ideasB": [
            "Fresh",
            "Comfortable"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Sleeping with socks on vs sleeping without socks — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Sleeping with socks on vs sleeping without socks — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_008",
        "topic": "Working full-time vs working part-time — which is better?",
        "sideA": "Full-time",
        "sideB": "Part-time",
        "ideasA": [
            "Money",
            "Projects"
        ],
        "ideasB": [
            "Free time",
            "No stress"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Working full-time vs working part-time — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Working full-time vs working part-time — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_009",
        "topic": "A job you love vs a job that pays well — which is more important?",
        "sideA": "Love",
        "sideB": "Money",
        "ideasA": [
            "Happy",
            "No stress"
        ],
        "ideasB": [
            "House",
            "No problems"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "A job you love vs a job that pays well — which is more important?",
        "form": "other",
        "definitions": [
            {
                "text": "A job you love vs a job that pays well — which is more important?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_008",
        "topic": "Big city vs small town — which is a better place to live as an adult?",
        "sideA": "Big city",
        "sideB": "Small town",
        "ideasA": [
            "Jobs",
            "Culture"
        ],
        "ideasB": [
            "Friendly",
            "Cheap"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Big city vs small town — which is a better place to live as an adult?",
        "form": "other",
        "definitions": [
            {
                "text": "Big city vs small town — which is a better place to live as an adult?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_024",
        "topic": "Having children vs not having children — which life is better?",
        "sideA": "Children",
        "sideB": "No children",
        "ideasA": [
            "Family",
            "Fun"
        ],
        "ideasB": [
            "Free time",
            "Travel"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Having children vs not having children — which life is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Having children vs not having children — which life is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_health_medicine_004",
        "topic": "Exercise every day vs rest — which is better for your health?",
        "sideA": "Exercise",
        "sideB": "Rest",
        "ideasA": [
            "Strong body",
            "Energy"
        ],
        "ideasB": [
            "Recovery",
            "Relax"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "word": "Exercise every day vs rest — which is better for your health?",
        "form": "other",
        "definitions": [
            {
                "text": "Exercise every day vs rest — which is better for your health?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_health_medicine_005",
        "topic": "Going to the doctor vs waiting — which is better when you feel ill?",
        "sideA": "Doctor",
        "sideB": "Waiting",
        "ideasA": [
            "Fast help",
            "Safe"
        ],
        "ideasB": [
            "Save money",
            "Natural"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "word": "Going to the doctor vs waiting — which is better when you feel ill?",
        "form": "other",
        "definitions": [
            {
                "text": "Going to the doctor vs waiting — which is better when you feel ill?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_health_medicine_006",
        "topic": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
        "sideA": "8 hours",
        "sideB": "Less",
        "ideasA": [
            "Healthy",
            "Rested"
        ],
        "ideasB": [
            "More work",
            "Play"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "word": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
        "form": "other",
        "definitions": [
            {
                "text": "Sleeping eight hours vs sleeping less — which is more realistic for adults?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_009",
        "topic": "Online shopping vs shopping in a store — which do you prefer?",
        "sideA": "Online",
        "sideB": "Store",
        "ideasA": [
            "Easy",
            "Fast"
        ],
        "ideasB": [
            "See items",
            "Try"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Online shopping vs shopping in a store — which do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Online shopping vs shopping in a store — which do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_010",
        "topic": "Expensive things vs cheap things — which is better value?",
        "sideA": "Expensive",
        "sideB": "Cheap",
        "ideasA": [
            "Quality",
            "Lasts"
        ],
        "ideasB": [
            "Money",
            "Many things"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Expensive things vs cheap things — which is better value?",
        "form": "other",
        "definitions": [
            {
                "text": "Expensive things vs cheap things — which is better value?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_011",
        "topic": "Buying new vs buying second-hand — which is better?",
        "sideA": "New",
        "sideB": "Second-hand",
        "ideasA": [
            "Clean",
            "Modern"
        ],
        "ideasB": [
            "Cheap",
            "Nature"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Buying new vs buying second-hand — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Buying new vs buying second-hand — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_025",
        "topic": "Watching TV at home vs going out — which is a better evening?",
        "sideA": "TV at home",
        "sideB": "Going out",
        "ideasA": [
            "Comfort",
            "Cheap"
        ],
        "ideasB": [
            "Friends",
            "New places"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Watching TV at home vs going out — which is a better evening?",
        "form": "other",
        "definitions": [
            {
                "text": "Watching TV at home vs going out — which is a better evening?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_013",
        "topic": "Holidays with family vs holidays with friends — which is better?",
        "sideA": "Family",
        "sideB": "Friends",
        "ideasA": [
            "Safe",
            "No cost"
        ],
        "ideasB": [
            "Exciting",
            "Party"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Holidays with family vs holidays with friends — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Holidays with family vs holidays with friends — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_014",
        "topic": "Staying in your country vs travelling abroad — which is a better holiday?",
        "sideA": "My country",
        "sideB": "Abroad",
        "ideasA": [
            "Easy",
            "No plane"
        ],
        "ideasB": [
            "Culture",
            "Adventure"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Staying in your country vs travelling abroad — which is a better holiday?",
        "form": "other",
        "definitions": [
            {
                "text": "Staying in your country vs travelling abroad — which is a better holiday?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_010",
        "topic": "Replying to emails immediately vs leaving them for later — which is more professional?",
        "sideA": "Immediately",
        "sideB": "Later",
        "ideasA": [
            "Fast",
            "Professional"
        ],
        "ideasB": [
            "Think",
            "No rush"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Replying to emails immediately vs leaving them for later — which is more professional?",
        "form": "other",
        "definitions": [
            {
                "text": "Replying to emails immediately vs leaving them for later — which is more professional?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_012",
        "topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
        "sideA": "Immediately",
        "sideB": "Tomorrow",
        "ideasA": [
            "Clean",
            "Morning"
        ],
        "ideasB": [
            "Relax",
            "Later"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_011",
        "topic": "Having a very organised desk vs a messy desk — which person is more productive?",
        "sideA": "Organised",
        "sideB": "Messy",
        "ideasA": [
            "Find",
            "Focus"
        ],
        "ideasB": [
            "Creative",
            "Fast"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Having a very organised desk vs a messy desk — which person is more productive?",
        "form": "other",
        "definitions": [
            {
                "text": "Having a very organised desk vs a messy desk — which person is more productive?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_016",
        "topic": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
        "sideA": "Work talk",
        "sideB": "No work talk",
        "ideasA": [
            "Problems",
            "Share"
        ],
        "ideasB": [
            "Relax",
            "Family time"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "word": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Talking about work at dinner vs no work talk at dinner — which rule is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_013",
        "topic": "Spoon vs fork — which is better?",
        "sideA": "Spoon",
        "sideB": "Fork",
        "ideasA": [
            "For soup",
            "Easy"
        ],
        "ideasB": [
            "For pasta",
            "Meat"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Spoon vs fork — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Spoon vs fork — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_014",
        "topic": "Hat vs shoes — which is more important?",
        "sideA": "Hat",
        "sideB": "Shoes",
        "ideasA": [
            "Cool style",
            "Sun protection"
        ],
        "ideasB": [
            "Protect feet",
            "To walk"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Hat vs shoes — which is more important?",
        "form": "other",
        "definitions": [
            {
                "text": "Hat vs shoes — which is more important?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_015",
        "topic": "Socks vs no socks — which is nicer?",
        "sideA": "Socks",
        "sideB": "No socks",
        "ideasA": [
            "Warm feet",
            "Comfortable"
        ],
        "ideasB": [
            "Fresh feet",
            "Summer"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Socks vs no socks — which is nicer?",
        "form": "other",
        "definitions": [
            {
                "text": "Socks vs no socks — which is nicer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_012",
        "topic": "Working alone vs working with a partner — which do you prefer?",
        "sideA": "Alone",
        "sideB": "Partner",
        "ideasA": [
            "Concentration",
            "Fast"
        ],
        "ideasB": [
            "Shared ideas",
            "Fun"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Working alone vs working with a partner — which do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Working alone vs working with a partner — which do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_017",
        "topic": "Eating at home vs eating at a restaurant — which is better?",
        "sideA": "Home",
        "sideB": "Restaurant",
        "ideasA": [
            "Cheaper",
            "Healthier"
        ],
        "ideasB": [
            "No dishes",
            "Professional chefs"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Eating at home vs eating at a restaurant — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Eating at home vs eating at a restaurant — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_018",
        "topic": "Sweet food vs salty food — which do you prefer?",
        "sideA": "Sweet",
        "sideB": "Salty",
        "ideasA": [
            "Delicious",
            "Treat"
        ],
        "ideasB": [
            "Real food",
            "Salt"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Sweet food vs salty food — which do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Sweet food vs salty food — which do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_019",
        "topic": "Pizza vs pasta — which is nicer?",
        "sideA": "Pizza",
        "sideB": "Pasta",
        "ideasA": [
            "Share it",
            "Cheese"
        ],
        "ideasB": [
            "Many types",
            "Sauce"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "word": "Pizza vs pasta — which is nicer?",
        "form": "other",
        "definitions": [
            {
                "text": "Pizza vs pasta — which is nicer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_007",
        "topic": "Short days vs long days — which is better?",
        "sideA": "Short days",
        "sideB": "Long days",
        "ideasA": [
            "Cozy nights",
            "Sleep more"
        ],
        "ideasB": [
            "More sun",
            "Play outside"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "Short days vs long days — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Short days vs long days — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_015",
        "topic": "Plane vs train — which is more fun?",
        "sideA": "Plane",
        "sideB": "Train",
        "ideasA": [
            "Fast",
            "Clouds"
        ],
        "ideasB": [
            "Nature",
            "Space"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Plane vs train — which is more fun?",
        "form": "other",
        "definitions": [
            {
                "text": "Plane vs train — which is more fun?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_020",
        "topic": "Breakfast vs no breakfast — which is better for you?",
        "sideA": "Breakfast",
        "sideB": "No breakfast",
        "ideasA": [
            "Morning energy",
            "Start well"
        ],
        "ideasB": [
            "Save time",
            "Not hungry"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "word": "Breakfast vs no breakfast — which is better for you?",
        "form": "other",
        "definitions": [
            {
                "text": "Breakfast vs no breakfast — which is better for you?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_021",
        "topic": "Water vs juice — which is healthier?",
        "sideA": "Water",
        "sideB": "Juice",
        "ideasA": [
            "No calories",
            "Natural"
        ],
        "ideasB": [
            "Vitamins",
            "Sweet"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "word": "Water vs juice — which is healthier?",
        "form": "other",
        "definitions": [
            {
                "text": "Water vs juice — which is healthier?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_022",
        "topic": "Meat vs vegetables — which is more important in a meal?",
        "sideA": "Meat",
        "sideB": "Vegetables",
        "ideasA": [
            "Proteins",
            "Tasty"
        ],
        "ideasB": [
            "Vitamins",
            "Healthy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "word": "Meat vs vegetables — which is more important in a meal?",
        "form": "other",
        "definitions": [
            {
                "text": "Meat vs vegetables — which is more important in a meal?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_016",
        "topic": "City vs village — which is a better place to live?",
        "sideA": "City",
        "sideB": "Village",
        "ideasA": [
            "Shops",
            "Cinema"
        ],
        "ideasB": [
            "Quiet",
            "Air"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "City vs village — which is a better place to live?",
        "form": "other",
        "definitions": [
            {
                "text": "City vs village — which is a better place to live?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_013",
        "topic": "Cash vs card — which is better to pay with?",
        "sideA": "Cash",
        "sideB": "Card",
        "ideasA": [
            "See money",
            "No tech"
        ],
        "ideasB": [
            "Fast",
            "Safe"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Cash vs card — which is better to pay with?",
        "form": "other",
        "definitions": [
            {
                "text": "Cash vs card — which is better to pay with?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_014",
        "topic": "Saving money vs spending money — which is better?",
        "sideA": "Saving",
        "sideB": "Spending",
        "ideasA": [
            "Future",
            "Big things"
        ],
        "ideasB": [
            "Fun now",
            "Shops"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Saving money vs spending money — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Saving money vs spending money — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_015",
        "topic": "Renting vs buying — which is better?",
        "sideA": "Renting",
        "sideB": "Buying",
        "ideasA": [
            "Flexible",
            "No repairs"
        ],
        "ideasB": [
            "Investment",
            "Yours"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Renting vs buying — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Renting vs buying — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_016",
        "topic": "Walking vs driving — which is better in the city?",
        "sideA": "Walking",
        "sideB": "Driving",
        "ideasA": [
            "Free",
            "Exercise"
        ],
        "ideasB": [
            "No rain",
            "Comfortable"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Walking vs driving — which is better in the city?",
        "form": "other",
        "definitions": [
            {
                "text": "Walking vs driving — which is better in the city?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_technology_008",
        "topic": "Phone call vs message — which is better?",
        "sideA": "Call",
        "sideB": "Message",
        "ideasA": [
            "Hear voice",
            "Fast"
        ],
        "ideasB": [
            "Think before",
            "Later"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "word": "Phone call vs message — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Phone call vs message — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_008",
        "topic": "Monday vs Friday — which day is better?",
        "sideA": "Monday",
        "sideB": "Friday",
        "ideasA": [
            "Projects",
            "Week"
        ],
        "ideasB": [
            "Weekend",
            "Party"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Monday vs Friday — which day is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Monday vs Friday — which day is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_nature_008",
        "topic": "Too hot vs too cold — which is worse?",
        "sideA": "Too hot",
        "sideB": "Too cold",
        "ideasA": [
            "No sleep",
            "Sun"
        ],
        "ideasB": [
            "Clothes",
            "Freezing"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "word": "Too hot vs too cold — which is worse?",
        "form": "other",
        "definitions": [
            {
                "text": "Too hot vs too cold — which is worse?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_017",
        "topic": "Window seat vs aisle seat — which is better on a plane?",
        "sideA": "Window",
        "sideB": "Aisle",
        "ideasA": [
            "Clouds",
            "Photos"
        ],
        "ideasB": [
            "Walking",
            "Space"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Window seat vs aisle seat — which is better on a plane?",
        "form": "other",
        "definitions": [
            {
                "text": "Window seat vs aisle seat — which is better on a plane?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_016",
        "topic": "Working with other people vs working alone — which is better?",
        "sideA": "People",
        "sideB": "Alone",
        "ideasA": [
            "Ideas",
            "Fun"
        ],
        "ideasB": [
            "Focus",
            "Fast"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Working with other people vs working alone — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Working with other people vs working alone — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_food_drink_023",
        "topic": "Cooking at home vs eating out — which is better for daily life?",
        "sideA": "At home",
        "sideB": "Eating out",
        "ideasA": [
            "Cheaper",
            "Healthier"
        ],
        "ideasB": [
            "Save time",
            "No mess"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "word": "Cooking at home vs eating out — which is better for daily life?",
        "form": "other",
        "definitions": [
            {
                "text": "Cooking at home vs eating out — which is better for daily life?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_017",
        "topic": "Renting a flat vs buying a house — which is better for young adults?",
        "sideA": "Rent flat",
        "sideB": "Buy house",
        "ideasA": [
            "Cheaper",
            "No responsibility"
        ],
        "ideasB": [
            "Investment",
            "Space"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Renting a flat vs buying a house — which is better for young adults?",
        "form": "other",
        "definitions": [
            {
                "text": "Renting a flat vs buying a house — which is better for young adults?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_018",
        "topic": "Walking to work vs taking the car — which is better for your health?",
        "sideA": "Walking",
        "sideB": "Car",
        "ideasA": [
            "Exercise",
            "Fresh air"
        ],
        "ideasB": [
            "Comfortable",
            "Fast"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Walking to work vs taking the car — which is better for your health?",
        "form": "other",
        "definitions": [
            {
                "text": "Walking to work vs taking the car — which is better for your health?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_017",
        "topic": "Saving for the future vs enjoying money now — which is wiser?",
        "sideA": "Saving",
        "sideB": "Enjoying",
        "ideasA": [
            "Security",
            "Peace"
        ],
        "ideasB": [
            "Happy today",
            "Memories"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Saving for the future vs enjoying money now — which is wiser?",
        "form": "other",
        "definitions": [
            {
                "text": "Saving for the future vs enjoying money now — which is wiser?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_026",
        "topic": "Sport vs reading — which is a better hobby for adults?",
        "sideA": "Sport",
        "sideB": "Reading",
        "ideasA": [
            "Healthy",
            "Active"
        ],
        "ideasB": [
            "Relax",
            "Knowledge"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Sport vs reading — which is a better hobby for adults?",
        "form": "other",
        "definitions": [
            {
                "text": "Sport vs reading — which is a better hobby for adults?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_social_027",
        "topic": "Seeing friends often vs having time alone — which is more important?",
        "sideA": "Friends",
        "sideB": "Alone time",
        "ideasA": [
            "Fun",
            "Memories"
        ],
        "ideasB": [
            "Peace",
            "Hobbies"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "word": "Seeing friends often vs having time alone — which is more important?",
        "form": "other",
        "definitions": [
            {
                "text": "Seeing friends often vs having time alone — which is more important?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_009",
        "topic": "Morning shower vs evening shower — which is better?",
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Wake up",
            "Feel fresh"
        ],
        "ideasB": [
            "Relaxing",
            "Clean sheets"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Morning shower vs evening shower — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Morning shower vs evening shower — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_018",
        "topic": "Morning work vs evening work — which is better?",
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Finish early",
            "Evening free"
        ],
        "ideasB": [
            "Sleep late",
            "Quiet"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Morning work vs evening work — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Morning work vs evening work — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_019",
        "topic": "Car vs bus — which is better to go to work?",
        "sideA": "Car",
        "sideB": "Bus",
        "ideasA": [
            "Private",
            "Fast"
        ],
        "ideasB": [
            "Cheap",
            "Nature"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "Car vs bus — which is better to go to work?",
        "form": "other",
        "definitions": [
            {
                "text": "Car vs bus — which is better to go to work?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_time_010",
        "topic": "Morning shower vs evening shower — which is correct?",
        "sideA": "Morning",
        "sideB": "Evening",
        "ideasA": [
            "Wake up",
            "Feel fresh"
        ],
        "ideasB": [
            "Relaxing",
            "Clean sheets"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "word": "Morning shower vs evening shower — which is correct?",
        "form": "other",
        "definitions": [
            {
                "text": "Morning shower vs evening shower — which is correct?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_019",
        "topic": "Working in an office vs working from home — which do you prefer?",
        "sideA": "Office",
        "sideB": "Home",
        "ideasA": [
            "Colleagues",
            "Focus"
        ],
        "ideasB": [
            "Comfort",
            "No commute"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Working in an office vs working from home — which do you prefer?",
        "form": "other",
        "definitions": [
            {
                "text": "Working in an office vs working from home — which do you prefer?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_travel_020",
        "topic": "A short commute vs a long commute — which is more acceptable?",
        "sideA": "Short",
        "sideB": "Long",
        "ideasA": [
            "Free time",
            "No stress"
        ],
        "ideasB": [
            "Music",
            "Reading"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "word": "A short commute vs a long commute — which is more acceptable?",
        "form": "other",
        "definitions": [
            {
                "text": "A short commute vs a long commute — which is more acceptable?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_furniture_018",
        "topic": "Living alone vs living with a partner — which is better?",
        "sideA": "Alone",
        "sideB": "Partner",
        "ideasA": [
            "Peace",
            "Rules"
        ],
        "ideasB": [
            "Share life",
            "Help"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "word": "Living alone vs living with a partner — which is better?",
        "form": "other",
        "definitions": [
            {
                "text": "Living alone vs living with a partner — which is better?",
                "examples": []
            }
        ]
    },
    {
        "id": "en_starter_work_020",
        "topic": "Being always early vs always five minutes late — which is worse at work?",
        "sideA": "Early",
        "sideB": "Late",
        "ideasA": [
            "Wait",
            "Boring"
        ],
        "ideasB": [
            "No polite",
            "Miss start"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "word": "Being always early vs always five minutes late — which is worse at work?",
        "form": "other",
        "definitions": [
            {
                "text": "Being always early vs always five minutes late — which is worse at work?",
                "examples": []
            }
        ]
    }
];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();

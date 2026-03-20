(function() {
    const speakingData = {
    "en": {
        "opinionArena": [
            {
                "text": "Is breakfast the most important meal?",
                "level": "starter",
                "theme": "food_drink_A0"
            },
            {
                "text": "Are dogs better pets than cats?",
                "level": "starter",
                "theme": "leisure_A1"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "Coffee vs tea — which is a better morning drink?",
                "sideA": "Coffee",
                "sideB": "Tea",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Restaurant vs home cooking — which is better?",
                "sideA": "Restaurant",
                "sideB": "Home cooking",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Breakfast vs no breakfast — which is better for you?",
                "sideA": "Breakfast",
                "sideB": "None",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Water vs juice — which is healthier?",
                "sideA": "Water",
                "sideB": "Juice",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Meat vs vegetables — which is more important in a meal?",
                "sideA": "Meat",
                "sideB": "Vegetables",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "House vs flat — which is better to live in?",
                "sideA": "House",
                "sideB": "Flat",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "City vs village — which is a better place to live?",
                "sideA": "City",
                "sideB": "Village",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cash vs card — which is better to pay with?",
                "sideA": "Cash",
                "sideB": "Card",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saving money vs spending money — which is better?",
                "sideA": "Saving",
                "sideB": "Spending",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Renting vs buying — which is better?",
                "sideA": "Renting",
                "sideB": "Buying",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning work vs evening work — which is better?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Car vs bus — which is better to go to work?",
                "sideA": "Car",
                "sideB": "Bus",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Walking vs driving — which is better in the city?",
                "sideA": "Walking",
                "sideB": "Driving",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Office vs home — which is a better place to work?",
                "sideA": "Office",
                "sideB": "Home",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning person vs night person — which is better?",
                "sideA": "Morning",
                "sideB": "Night",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Summer vs winter — which season is better?",
                "sideA": "Summer",
                "sideB": "Winter",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Short holiday vs long holiday — which is better?",
                "sideA": "Short",
                "sideB": "Long",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Phone call vs message — which is better?",
                "sideA": "Call",
                "sideB": "Message",
                "level": "starter",
                "theme": "technology_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Morning shower vs evening shower — which is correct?",
                "sideA": "Morning",
                "sideB": "Evening",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Monday vs Friday — which day is better?",
                "sideA": "Monday",
                "sideB": "Friday",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Too hot vs too cold — which is worse?",
                "sideA": "Too hot",
                "sideB": "Too cold",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Window seat vs aisle seat — which is better on a plane?",
                "sideA": "Window",
                "sideB": "Aisle",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Red vs Blue — which colour is better?",
                "sideA": "Red",
                "sideB": "Blue",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Yellow vs Green — which colour is happier?",
                "sideA": "Yellow",
                "sideB": "Green",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Black vs White — which colour do you prefer?",
                "sideA": "Black",
                "sideB": "White",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pink vs Purple — which colour is nicer?",
                "sideA": "Pink",
                "sideB": "Purple",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Circle vs Square — which shape is more useful?",
                "sideA": "Circle",
                "sideB": "Square",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small numbers — which are more fun?",
                "sideA": "Big",
                "sideB": "Small",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangle vs Rectangle — which shape is better?",
                "sideA": "Triangle",
                "sideB": "Rectangle",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ball vs Doll — which toy is better?",
                "sideA": "Ball",
                "sideB": "Doll",
                "level": "starter",
                "theme": "leisure_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pencil vs Pen — which is better to write with?",
                "sideA": "Pencil",
                "sideB": "Pen",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Book vs Picture — which is better to learn from?",
                "sideA": "Book",
                "sideB": "Picture",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chair vs Floor — which is better to sit on?",
                "sideA": "Chair",
                "sideB": "Floor",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cat vs Dog — which animal is better?",
                "sideA": "Cat",
                "sideB": "Dog",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fish vs Bird — which is a better pet?",
                "sideA": "Fish",
                "sideB": "Bird",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Big vs Small animals — which are nicer?",
                "sideA": "Big",
                "sideB": "Small",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rabbit vs Hamster — which is cuter?",
                "sideA": "Rabbit",
                "sideB": "Hamster",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Water vs Juice — which is better to drink?",
                "sideA": "Water",
                "sideB": "Juice",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apple vs Banana — which fruit is better?",
                "sideA": "Apple",
                "sideB": "Banana",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bread vs Rice — which is better to eat?",
                "sideA": "Bread",
                "sideB": "Rice",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Milk vs Water — which do you prefer?",
                "sideA": "Milk",
                "sideB": "Water",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pink vs orange — which colour is nicer?",
                "sideA": "Pink",
                "sideB": "Orange",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Number 1 vs number 10 — which number is better?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chair vs sofa — which is more comfortable?",
                "sideA": "Chair",
                "sideB": "Sofa",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bag vs box — which is more useful?",
                "sideA": "Bag",
                "sideB": "Box",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lion vs elephant — which animal is better?",
                "sideA": "Lion",
                "sideB": "Elephant",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chocolate vs sweets — which is better?",
                "sideA": "Chocolate",
                "sideB": "Sweets",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Spoon vs fork — which is better?",
                "sideA": "Spoon",
                "sideB": "Fork",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hat vs shoes — which is more important?",
                "sideA": "Hat",
                "sideB": "Shoes",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sun vs moon — which is better?",
                "sideA": "Sun",
                "sideB": "Moon",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Socks vs no socks — which is nicer?",
                "sideA": "Socks",
                "sideB": "No socks",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "My favorite childhood memory",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "My dream job and why",
                "level": "starter",
                "theme": "work_A1"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["en"]) window.speakingData["en"] = {};

    for (const cat in speakingData["en"]) {
        if (!window.speakingData["en"][cat]) window.speakingData["en"][cat] = [];
        window.speakingData["en"][cat].push(...speakingData["en"][cat]);
    }
})();

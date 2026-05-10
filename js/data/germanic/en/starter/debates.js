(function() {
    const data = [
        {
            "topic": "Coffee vs tea — which is better?",
            "sideA": "Coffee",
            "sideB": "Tea",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["It gives you energy", "It smells great"],
            "ideasB": ["It is very healthy", "It helps you relax"]
        },
        {
            "topic": "Restaurant vs home cooking — which is better?",
            "sideA": "Restaurant",
            "sideB": "Home cooking",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["No dishes to wash", "Professional chefs"],
            "ideasB": ["It is cheaper", "It is healthier"]
        },
        {
            "topic": "Breakfast vs no breakfast — which is better?",
            "sideA": "Breakfast",
            "sideB": "No breakfast",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Energy for the morning", "Good start to the day"],
            "ideasB": ["Saves time", "I am not hungry"]
        },
        {
            "topic": "Water vs juice — which is better?",
            "sideA": "Water",
            "sideB": "Juice",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Zero calories", "Very healthy"],
            "ideasB": ["Sweet taste", "Good vitamins"]
        },
        {
            "topic": "Meat vs vegetables — which is more important?",
            "sideA": "Meat",
            "sideB": "Vegetables",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Lots of protein", "Very tasty"],
            "ideasB": ["Lots of vitamins", "Good for health"]
        },
        {
            "topic": "House vs apartment — which is better?",
            "sideA": "House",
            "sideB": "Apartment",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["More space", "A private garden"],
            "ideasB": ["It is safer", "Easy to clean"]
        },
        {
            "topic": "City vs countryside — which is better?",
            "sideA": "City",
            "sideB": "Countryside",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Shops and cinemas", "Many people"],
            "ideasB": ["Quiet place", "Clean air"]
        },
        {
            "topic": "Cash vs card — which is better?",
            "sideA": "Cash",
            "sideB": "Card",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Easy to see the money", "No technology needed"],
            "ideasB": ["Very fast", "Safe to carry"]
        },
        {
            "topic": "Saving vs spending — which is better?",
            "sideA": "Saving",
            "sideB": "Spending",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Good for the future", "Buy big things"],
            "ideasB": ["Fun now", "Helps shops"]
        },
        {
            "topic": "Renting vs buying — which is better?",
            "sideA": "Renting",
            "sideB": "Buying",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["It is flexible", "No repairs"],
            "ideasB": ["It is yours", "Good investment"]
        },
        {
            "topic": "Working in the morning vs working in the evening — which is better?",
            "sideA": "Morning",
            "sideB": "Evening",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Finish early", "Free evening"],
            "ideasB": ["Sleep late", "Quiet time"]
        },
        {
            "topic": "Car vs bus — which is better?",
            "sideA": "Car",
            "sideB": "Bus",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Private and fast", "Go anywhere"],
            "ideasB": ["It is cheap", "Good for nature"]
        },
        {
            "topic": "Walking vs driving — which is better?",
            "sideA": "Walking",
            "sideB": "Driving",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["It is free", "Good exercise"],
            "ideasB": ["No rain", "Very comfortable"]
        },
        {
            "topic": "Office vs home — which is better for working?",
            "sideA": "Office",
            "sideB": "Home",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["See friends", "Better focus"],
            "ideasB": ["No travel", "Comfortable clothes"]
        },
        {
            "topic": "Morning person vs night person — which is better?",
            "sideA": "Morning person",
            "sideB": "Night person",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["See the sun", "Quiet time"],
            "ideasB": ["Creative time", "No noise"]
        },
        {
            "topic": "Summer vs winter — which is better?",
            "sideA": "Summer",
            "sideB": "Winter",
            "level": "starter",
            "theme": "weather_A1",
            "ideasA": ["Beach time", "Sunny weather"],
            "ideasB": ["Snow", "Hot chocolate"]
        },
        {
            "topic": "Short holiday vs long holiday — which is better?",
            "sideA": "Short",
            "sideB": "Long",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Easy to plan", "Many trips"],
            "ideasB": ["Relax more", "See more places"]
        },
        {
            "topic": "Phone call vs message — which is better?",
            "sideA": "Call",
            "sideB": "Message",
            "level": "starter",
            "theme": "basic_technology_devices_A1",
            "ideasA": ["Hear the voice", "It is faster"],
            "ideasB": ["Think before you write", "Read later"]
        },
        {
            "topic": "Morning shower vs evening shower — which is better?",
            "sideA": "Morning",
            "sideB": "Evening",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Wakes you up", "Start fresh"],
            "ideasB": ["Helps you relax", "Clean bed"]
        },
        {
            "topic": "Monday vs Friday — which is better?",
            "sideA": "Monday",
            "sideB": "Friday",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Start projects", "New week"],
            "ideasB": ["Weekend is coming", "Party time"]
        },
        {
            "topic": "Too hot vs too cold — which is worse?",
            "sideA": "Too hot",
            "sideB": "Too cold",
            "level": "starter",
            "theme": "weather_A1",
            "ideasA": ["Cannot sleep", "Too much sun"],
            "ideasB": ["Need many clothes", "Freezing"]
        },
        {
            "topic": "Window seat vs aisle seat — which is better?",
            "sideA": "Window",
            "sideB": "Aisle",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["See the clouds", "Take photos"],
            "ideasB": ["Easy to walk", "More space"]
        },
        {
            "topic": "Red vs Blue — which is better?",
            "sideA": "Red",
            "sideB": "Blue",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Strong colour", "Love"],
            "ideasB": ["Calm colour", "Sea and sky"]
        },
        {
            "topic": "Yellow vs Green — which is happier?",
            "sideA": "Yellow",
            "sideB": "Green",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Like the sun", "Bright"],
            "ideasB": ["Colour of nature", "Like trees"]
        },
        {
            "topic": "Black vs White — which is better?",
            "sideA": "Black",
            "sideB": "White",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Elegant", "Goes with everything"],
            "ideasB": ["Clean", "Bright"]
        },
        {
            "topic": "Pink vs Purple — which is better?",
            "sideA": "Pink",
            "sideB": "Purple",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Cute colour", "Flowers"],
            "ideasB": ["Royal colour", "Nice fruit"]
        },
        {
            "topic": "Pencil vs Pen — which is better?",
            "sideA": "Pencil",
            "sideB": "Pen",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["You can erase", "Good for drawing"],
            "ideasB": ["Permanent", "Clean writing"]
        },
        {
            "topic": "Book vs Picture — which is better?",
            "sideA": "Book",
            "sideB": "Picture",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Read stories", "No battery"],
            "ideasB": ["Fast to see", "Beautiful"]
        },
        {
            "topic": "Chair vs Floor — which is better?",
            "sideA": "Chair",
            "sideB": "Floor",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Good for back", "Work at table"],
            "ideasB": ["Lots of space", "Relax"]
        },
        {
            "topic": "Cat vs Dog — which is better?",
            "sideA": "Cat",
            "sideB": "Dog",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Independent", "Quiet"],
            "ideasB": ["Faithful friend", "Play outside"]
        },
        {
            "topic": "Fish vs Bird — which is better?",
            "sideA": "Fish",
            "sideB": "Bird",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Beautiful colours", "Easy care"],
            "ideasB": ["Can sing", "Happy sounds"]
        },
        {
            "topic": "Big animals vs small animals — which is better?",
            "sideA": "Big",
            "sideB": "Small",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Strong", "Interesting"],
            "ideasB": ["Cute", "Small space"]
        },
        {
            "topic": "Rabbit vs Hamster — which is better?",
            "sideA": "Rabbit",
            "sideB": "Hamster",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Long ears", "Soft"],
            "ideasB": ["Small", "Nice to look at"]
        },
        {
            "topic": "Apple vs Banana — which is better?",
            "sideA": "Apple",
            "sideB": "Banana",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Crunchy", "Sweet"],
            "ideasB": ["Easy to peel", "Soft"]
        },
        {
            "topic": "Bread vs Rice — which is better?",
            "sideA": "Bread",
            "sideB": "Rice",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Many types", "Sandwiches"],
            "ideasB": ["Healthy", "Good with meat"]
        },
        {
            "topic": "Chair vs sofa — which is better?",
            "sideA": "Chair",
            "sideB": "Sofa",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Good for back", "Formal"],
            "ideasB": ["Very soft", "Watch TV"]
        },
        {
            "topic": "Bag vs box — which is better?",
            "sideA": "Bag",
            "sideB": "Box",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Easy to carry", "For school"],
            "ideasB": ["For toys", "Protects things"]
        },
        {
            "topic": "Lion vs elephant — which is better?",
            "sideA": "Lion",
            "sideB": "Elephant",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["King", "Strong"],
            "ideasB": ["Big ears", "Very intelligent"]
        },
        {
            "topic": "Spoon vs fork — which is better?",
            "sideA": "Spoon",
            "sideB": "Fork",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["For soup", "Easy"],
            "ideasB": ["For pasta", "Meat"]
        },
        {
            "topic": "Hat vs shoes — which is better?",
            "sideA": "Hat",
            "sideB": "Shoes",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Cool style", "Sun protection"],
            "ideasB": ["Protect feet", "For walking"]
        },
        {
            "topic": "Sun vs moon — which is better?",
            "sideA": "Sun",
            "sideB": "Moon",
            "level": "starter",
            "theme": "weather_A1",
            "ideasA": ["Warm", "Light"],
            "ideasB": ["Beautiful", "Night light"]
        },
        {
            "topic": "Socks vs no socks — which is better?",
            "sideA": "Socks",
            "sideB": "No socks",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Warm feet", "Comfortable"],
            "ideasB": ["Cool feet", "Summer"]
        },
        {
            "topic": "Living with family vs living alone — which is better?",
            "sideA": "Family",
            "sideB": "Alone",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Never alone", "Help with food"],
            "ideasB": ["Peace", "Your rules"]
        },
        {
            "topic": "Brother vs sister — which is better?",
            "sideA": "Brother",
            "sideB": "Sister",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Play games", "Protection"],
            "ideasB": ["Share secrets", "Kind"]
        },
        {
            "topic": "Big family vs small family — which is better?",
            "sideA": "Big family",
            "sideB": "Small family",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Busy house", "Many friends"],
            "ideasB": ["Quiet", "More space"]
        },
        {
            "topic": "Oldest child vs youngest child — which is better?",
            "sideA": "Oldest",
            "sideB": "Youngest",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Leader", "Responsible"],
            "ideasB": ["Get help", "Relaxed"]
        },
        {
            "topic": "Morning school vs afternoon school — which is better?",
            "sideA": "Morning",
            "sideB": "Afternoon",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Free afternoon", "Routine"],
            "ideasB": ["Sleep late", "Quiet morning"]
        },
        {
            "topic": "Reading vs maths — which is more fun?",
            "sideA": "Reading",
            "sideB": "Maths",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Stories", "New words"],
            "ideasB": ["Logic", "Numbers"]
        },
        {
            "topic": "Learning at school vs learning at home — which is better?",
            "sideA": "School",
            "sideB": "Home",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Friends", "Teacher"],
            "ideasB": ["Relaxed", "No travel"]
        },
        {
            "topic": "Homework vs no homework — which helps more?",
            "sideA": "Homework",
            "sideB": "No homework",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Practice", "Learn more"],
            "ideasB": ["More play", "Less stress"]
        },
        {
            "topic": "Working alone vs working with a partner — which is better?",
            "sideA": "Alone",
            "sideB": "Partner",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Focus", "Fast"],
            "ideasB": ["Shared ideas", "Fun"]
        },
        {
            "topic": "Writing on paper vs writing on a computer — which is better?",
            "sideA": "Paper",
            "sideB": "Computer",
            "level": "starter",
            "theme": "basic_technology_devices_A1",
            "ideasA": ["No screen", "Easy"],
            "ideasB": ["Fast", "Fixes spelling"]
        },
        {
            "topic": "Breakfast vs dinner — which meal is more important?",
            "sideA": "Breakfast",
            "sideB": "Dinner",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Morning energy", "Start the day"],
            "ideasB": ["Family time", "Big meal"]
        },
        {
            "topic": "Hot food vs cold food — which is better?",
            "sideA": "Hot",
            "sideB": "Cold",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Winter", "Tasty"],
            "ideasB": ["Summer", "Salad"]
        },
        {
            "topic": "Sweet food vs savoury food — which is better?",
            "sideA": "Sweet",
            "sideB": "Savoury",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Delicious", "Treat"],
            "ideasB": ["Real food", "Salt"]
        },
        {
            "topic": "Cooking with a parent vs buying ready-to-eat food — which is better?",
            "sideA": "Cooking",
            "sideB": "Ready food",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Learn skills", "Fun"],
            "ideasB": ["Fast", "No mess"]
        },
        {
            "topic": "Waking up early vs waking up late — which is better?",
            "sideA": "Early",
            "sideB": "Late",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["More time", "Productive"],
            "ideasB": ["More sleep", "Relaxed"]
        },
        {
            "topic": "Morning vs evening — which is better?",
            "sideA": "Morning",
            "sideB": "Evening",
            "level": "starter",
            "theme": "weather_A1",
            "ideasA": ["Fresh", "Sun"],
            "ideasB": ["Quiet", "Rest"]
        },
        {
            "topic": "Weekdays vs weekends — which is better?",
            "sideA": "Weekdays",
            "sideB": "Weekends",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Routine", "School"],
            "ideasB": ["Fun", "Hobbies"]
        },
        {
            "topic": "Bedtime: early vs late — which is healthier?",
            "sideA": "Early",
            "sideB": "Late",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Healthy", "Rested"],
            "ideasB": ["Fun", "Movies"]
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();

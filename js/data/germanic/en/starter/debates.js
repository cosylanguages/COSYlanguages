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
            "ideasA": ["No cooking or washing", "Professional chefs"],
            "ideasB": ["It is cheaper", "It is healthier"]
        },
        {
            "topic": "Breakfast vs no breakfast — which is better?",
            "sideA": "Breakfast",
            "sideB": "No breakfast",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Good for energy", "Start the day well"],
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
            "ideasB": ["Many vitamins", "Good for health"]
        },
        {
            "topic": "House vs flat — which is better to live in?",
            "sideA": "House",
            "sideB": "Flat",
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
            "topic": "Cash vs card — which is better to pay with?",
            "sideA": "Cash",
            "sideB": "Card",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Easy to see money", "No technology needed"],
            "ideasB": ["Very fast", "Safe to carry"]
        },
        {
            "topic": "Saving money vs spending money — which is better?",
            "sideA": "Saving",
            "sideB": "Spending",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Good for future", "Buy big things"],
            "ideasB": ["Fun right now", "Help the shops"]
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
            "topic": "Morning work vs evening work — which is better?",
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
            "topic": "Office vs home — which is better to work?",
            "sideA": "Office",
            "sideB": "Home",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["See friends", "Better focus"],
            "ideasB": ["No travel", "Comfortable clothes"]
        },
        {
            "topic": "Morning person vs night person — which is better?",
            "sideA": "Morning",
            "sideB": "Night",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["See the sun", "Quiet time"],
            "ideasB": ["Creative time", "No noise"]
        },
        {
            "topic": "Summer vs winter — which season is better?",
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
            "ideasB": ["Think before typing", "Read later"]
        },
        {
            "topic": "Morning shower vs evening shower — which is better?",
            "sideA": "Morning",
            "sideB": "Evening",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Wake up", "Start fresh"],
            "ideasB": ["Helps relax", "Clean bed"]
        },
        {
            "topic": "Monday vs Friday — which day is better?",
            "sideA": "Monday",
            "sideB": "Friday",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Start projects", "New week"],
            "ideasB": ["Weekend coming", "Party time"]
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
            "topic": "Red vs Blue — which colour is better?",
            "sideA": "Red",
            "sideB": "Blue",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Strong colour", "Love"],
            "ideasB": ["Calm colour", "Sea and sky"]
        },
        {
            "topic": "Yellow vs Green — which colour is happier?",
            "sideA": "Yellow",
            "sideB": "Green",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Like the sun", "Bright"],
            "ideasB": ["Nature colour", "Like trees"]
        },
        {
            "topic": "Black vs White — which is better?",
            "sideA": "Black",
            "sideB": "White",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Elegant", "Matches everything"],
            "ideasB": ["Clean", "Bright"]
        },
        {
            "topic": "Pink vs Purple — which colour is nicer?",
            "sideA": "Pink",
            "sideB": "Purple",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Cute colour", "Flowers"],
            "ideasB": ["Royal colour", "Nice fruit"]
        },
        {
            "topic": "Big vs Small numbers — which are more fun?",
            "sideA": "Big",
            "sideB": "Small",
            "level": "starter",
            "theme": "numbers_0_9_A1",
            "ideasA": ["More money", "Big counts"],
            "ideasB": ["Easy to learn", "Quick"]
        },
        {
            "topic": "Ball vs Doll — which toy is better?",
            "sideA": "Ball",
            "sideB": "Doll",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Play with friends", "Sport"],
            "ideasB": ["Tell stories", "Decoration"]
        },
        {
            "topic": "Pencil vs Pen — which is better to write with?",
            "sideA": "Pencil",
            "sideB": "Pen",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["You can erase", "Good for drawing"],
            "ideasB": ["Permanent", "Clean writing"]
        },
        {
            "topic": "Book vs Picture — which is better to learn from?",
            "sideA": "Book",
            "sideB": "Picture",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Read stories", "No battery"],
            "ideasB": ["Quick to see", "Beautiful"]
        },
        {
            "topic": "Chair vs Floor — which is better to sit on?",
            "sideA": "Chair",
            "sideB": "Floor",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Good for back", "Table work"],
            "ideasB": ["Lots of space", "Relax"]
        },
        {
            "topic": "Cat vs Dog — which animal is better?",
            "sideA": "Cat",
            "sideB": "Dog",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Independent", "Quiet"],
            "ideasB": ["Loyal friend", "Play outside"]
        },
        {
            "topic": "Fish vs Bird — which is a better pet?",
            "sideA": "Fish",
            "sideB": "Bird",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Beautiful colours", "Easy care"],
            "ideasB": ["Can sing", "Happy sounds"]
        },
        {
            "topic": "Big vs Small animals — which are nicer?",
            "sideA": "Big",
            "sideB": "Small",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Strong", "Interesting"],
            "ideasB": ["Cute", "Small space"]
        },
        {
            "topic": "Rabbit vs Hamster — which is cuter?",
            "sideA": "Rabbit",
            "sideB": "Hamster",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Long ears", "Soft"],
            "ideasB": ["Small", "Cute to watch"]
        },
        {
            "topic": "Apple vs Banana — which fruit is better?",
            "sideA": "Apple",
            "sideB": "Banana",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Crunchy", "Sweet"],
            "ideasB": ["Easy to peel", "Soft"]
        },
        {
            "topic": "Bread vs Rice — which is better to eat?",
            "sideA": "Bread",
            "sideB": "Rice",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Many types", "Sandwiches"],
            "ideasB": ["Healthy", "Good with meat"]
        },
        {
            "topic": "Milk vs Water — which is better?",
            "sideA": "Milk",
            "sideB": "Water",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Calcium", "Good for bones"],
            "ideasB": ["Fresh", "Basic"]
        },
        {
            "topic": "Pink vs orange — which colour is nicer?",
            "sideA": "Pink",
            "sideB": "Orange",
            "level": "starter",
            "theme": "colours_patterns_A1",
            "ideasA": ["Cute colour", "Flowers"],
            "ideasB": ["Bright", "Like the fruit"]
        },
        {
            "topic": "Chair vs sofa — which is more comfortable?",
            "sideA": "Chair",
            "sideB": "Sofa",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Good for back", "Formal"],
            "ideasB": ["Very soft", "Watch TV"]
        },
        {
            "topic": "Bag vs box — which is more useful?",
            "sideA": "Bag",
            "sideB": "Box",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Easy to carry", "For school"],
            "ideasB": ["For toys", "Protect things"]
        },
        {
            "topic": "Lion vs elephant — which animal is better?",
            "sideA": "Lion",
            "sideB": "Elephant",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["King", "Strong"],
            "ideasB": ["Big ears", "Very smart"]
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
            "topic": "Hat vs shoes — which is more important?",
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
            "topic": "Socks vs no socks — which is nicer?",
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
            "topic": "Having a brother vs having a sister — which is better?",
            "sideA": "Brother",
            "sideB": "Sister",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Play games", "Protection"],
            "ideasB": ["Share secrets", "Kind"]
        },
        {
            "topic": "Big family vs small family — which is nicer?",
            "sideA": "Big family",
            "sideB": "Small family",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Busy house", "Many friends"],
            "ideasB": ["Quiet", "More space"]
        },
        {
            "topic": "Being the oldest child vs being the youngest — which is better?",
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
            "topic": "Reading vs maths — which subject is more fun?",
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
            "topic": "Doing homework vs not doing homework — which helps you more?",
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
            "topic": "Writing on paper vs typing on a computer — which is better?",
            "sideA": "Paper",
            "sideB": "Computer",
            "level": "starter",
            "theme": "basic_technology_devices_A1",
            "ideasA": ["No screen", "Easy"],
            "ideasB": ["Fast", "Corrects spelling"]
        },
        {
            "topic": "Breakfast vs dinner — which meal is more important?",
            "sideA": "Breakfast",
            "sideB": "Dinner",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Morning energy", "Start day"],
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
            "topic": "Cooking with a parent vs buying food ready-made — which is nicer?",
            "sideA": "Cooking",
            "sideB": "Ready-made",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Learn skill", "Fun"],
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
            "topic": "Morning vs evening — which part of the day is nicer?",
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
            "topic": "Going to bed early vs staying up late — which is healthier?",
            "sideA": "Early",
            "sideB": "Late",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Healthy", "Rested"],
            "ideasB": ["Fun", "Movies"]
        },
        {
            "topic": "Your bedroom vs the living room — which is better?",
            "sideA": "Bedroom",
            "sideB": "Living room",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Privacy", "Your things"],
            "ideasB": ["Big TV", "Sofa"]
        },
        {
            "topic": "Indoor games vs outdoor games — which are more fun?",
            "sideA": "Indoor",
            "sideB": "Outdoor",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["No rain", "Board games"],
            "ideasB": ["Sun", "Run"]
        },
        {
            "topic": "Watching TV vs reading a book — which is better?",
            "sideA": "TV",
            "sideB": "Book",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Relax", "Visual"],
            "ideasB": ["Imagine", "Deep"]
        },
        {
            "topic": "Playing sport vs playing a video game — which is more fun?",
            "sideA": "Sport",
            "sideB": "Video game",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Healthy", "Active"],
            "ideasB": ["Skills", "Story"]
        },
        {
            "topic": "Drawing vs singing — which hobby is better?",
            "sideA": "Drawing",
            "sideB": "Singing",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Create art", "Quiet"],
            "ideasB": ["Use voice", "Music"]
        },
        {
            "topic": "Playing alone vs playing with friends — which is more fun?",
            "sideA": "Alone",
            "sideB": "Friends",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Focus", "Creative"],
            "ideasB": ["Share", "Laugh"]
        },
        {
            "topic": "Swimming vs running — which is better?",
            "sideA": "Swimming",
            "sideB": "Running",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Cool water", "Full body"],
            "ideasB": ["Fresh air", "Easy"]
        },
        {
            "topic": "Music vs sport — which is a better hobby?",
            "sideA": "Music",
            "sideB": "Sport",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Listening", "Feel good"],
            "ideasB": ["Active", "Health"]
        },
        {
            "topic": "Farm animals vs wild animals — which are more interesting?",
            "sideA": "Farm",
            "sideB": "Wild",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Food", "Helpful"],
            "ideasB": ["Jungle", "Exciting"]
        },
        {
            "topic": "Rain vs sunshine — which is better?",
            "sideA": "Rain",
            "sideB": "Sunshine",
            "level": "starter",
            "theme": "weather_A1",
            "ideasA": ["Plants", "Cozy"],
            "ideasB": ["Beach", "Energy"]
        },
        {
            "topic": "The sea vs the mountains — which is better for a holiday?",
            "sideA": "Sea",
            "sideB": "Mountains",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Swimming", "Sand"],
            "ideasB": ["Hiking", "View"]
        },
        {
            "topic": "Flowers vs trees — which are more beautiful?",
            "sideA": "Flowers",
            "sideB": "Trees",
            "level": "starter",
            "theme": "weather_A1",
            "ideasA": ["Smells", "Colours"],
            "ideasB": ["Shade", "Oxygen"]
        },
        {
            "topic": "Walking vs cycling — which is better to get around?",
            "sideA": "Walking",
            "sideB": "Cycling",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Free", "Simple"],
            "ideasB": ["Fast", "Fun"]
        },
        {
            "topic": "Travelling alone vs travelling with family — which is more fun?",
            "sideA": "Alone",
            "sideB": "Family",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Your path", "Quiet"],
            "ideasB": ["Shared fun", "Safe"]
        },
        {
            "topic": "Living with grandparents vs not living with them — which is better?",
            "sideA": "Grandparents",
            "sideB": "No grandparents",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Get help", "Learn stories"],
            "ideasB": ["More space", "Quiet house"]
        },
        {
            "topic": "Mum's cooking vs dad's cooking — which is better?",
            "sideA": "Mum",
            "sideB": "Dad",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Tasty pasta", "Lots of love"],
            "ideasB": ["Best pizza", "New recipes"]
        },
        {
            "topic": "Maths vs art — which is better?",
            "sideA": "Maths",
            "sideB": "Art",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Numbers", "Logic"],
            "ideasB": ["Colors", "Painting"]
        },
        {
            "topic": "Writing on paper vs typing on a tablet — which is better?",
            "sideA": "Paper",
            "sideB": "Tablet",
            "level": "starter",
            "theme": "basic_technology_devices_A1",
            "ideasA": ["No battery", "Good feel"],
            "ideasB": ["Fast", "Save paper"]
        },
        {
            "topic": "Day at the park vs day at the beach — which is better?",
            "sideA": "Park",
            "sideB": "Beach",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Green grass", "Trees"],
            "ideasB": ["Sand", "Blue sea"]
        },
        {
            "topic": "Cats that knock things off tables vs dogs that chew shoes — which is worse?",
            "sideA": "Cats",
            "sideB": "Dogs",
            "level": "starter",
            "theme": "animals_A1",
            "ideasA": ["Broken glass", "Messy"],
            "ideasB": ["No shoes", "Expensive"]
        },
        {
            "topic": "Eating pizza with a fork vs eating pizza with your hands — which is better?",
            "sideA": "Fork",
            "sideB": "Hands",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Clean hands", "Elegant"],
            "ideasB": ["Fast", "Real way"]
        },
        {
            "topic": "Sleeping with socks on vs sleeping without socks — which is better?",
            "sideA": "Socks on",
            "sideB": "Socks off",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Warm feet", "Cozy"],
            "ideasB": ["Fresh", "Comfortable"]
        },
        {
            "topic": "Working full-time vs working part-time — which is better?",
            "sideA": "Full-time",
            "sideB": "Part-time",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["More money", "Big projects"],
            "ideasB": ["More free time", "Less stress"]
        },
        {
            "topic": "A job you love vs a job that pays well — which is more important?",
            "sideA": "Love",
            "sideB": "Money",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Happy every day", "No stress"],
            "ideasB": ["Buy big house", "No money problems"]
        },
        {
            "topic": "Big city vs small town — which is better?",
            "sideA": "Big city",
            "sideB": "Small town",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Shops", "Cinemas"],
            "ideasB": ["Friendly", "Quiet"]
        },
        {
            "topic": "Having children vs not having children — which is better?",
            "sideA": "Children",
            "sideB": "No children",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Future family", "Lots of fun"],
            "ideasB": ["Free time", "Travel easy"]
        },
        {
            "topic": "Exercise every day vs rest — which is better?",
            "sideA": "Exercise",
            "sideB": "Rest",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Strong body", "Energy"],
            "ideasB": ["Recover", "Relax"]
        },
        {
            "topic": "Going to the doctor vs waiting — which is better?",
            "sideA": "Doctor",
            "sideB": "Waiting",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Fast help", "Safe"],
            "ideasB": ["Save money", "Natural"]
        },
        {
            "topic": "Sleeping eight hours vs sleeping less — which is better?",
            "sideA": "8 hours",
            "sideB": "Less",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Rested", "Healthy"],
            "ideasB": ["Finish work", "More fun"]
        },
        {
            "topic": "Online shopping vs shopping in a store — which is better?",
            "sideA": "Online",
            "sideB": "Store",
            "level": "starter",
            "theme": "shopping_basics_A1",
            "ideasA": ["Easy", "Fast"],
            "ideasB": ["See items", "Try clothes"]
        },
        {
            "topic": "Expensive things vs cheap things — which is better value?",
            "sideA": "Expensive",
            "sideB": "Cheap",
            "level": "starter",
            "theme": "shopping_basics_A1",
            "ideasA": ["Good quality", "Last long"],
            "ideasB": ["Save money", "Many things"]
        },
        {
            "topic": "Buying new vs buying second-hand — which is better?",
            "sideA": "New",
            "sideB": "Second-hand",
            "level": "starter",
            "theme": "shopping_basics_A1",
            "ideasA": ["Clean", "No problems"],
            "ideasB": ["Cheap", "Save nature"]
        },
        {
            "topic": "Watching TV at home vs going out — which is better?",
            "sideA": "TV at home",
            "sideB": "Going out",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Comfortable", "Cheap"],
            "ideasB": ["See friends", "New places"]
        },
        {
            "topic": "Holidays with family vs holidays with friends — which is better?",
            "sideA": "Family",
            "sideB": "Friends",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Safe", "No cost"],
            "ideasB": ["Exciting", "Party"]
        },
        {
            "topic": "Staying in your country vs travelling abroad — which is better?",
            "sideA": "My country",
            "sideB": "Abroad",
            "level": "starter",
            "theme": "address_location_A1",
            "ideasA": ["Easy", "No plane"],
            "ideasB": ["New culture", "Adventure"]
        },
        {
            "topic": "Sport vs reading — which is better?",
            "sideA": "Sport",
            "sideB": "Reading",
            "level": "starter",
            "theme": "leisure_activities_A1",
            "ideasA": ["Healthy", "Strong"],
            "ideasB": ["Relaxed", "Learn things"]
        },
        {
            "topic": "Seeing friends often vs having time alone — which is better?",
            "sideA": "Friends",
            "sideB": "Time alone",
            "level": "starter",
            "theme": "immediate_family_A1",
            "ideasA": ["Fun", "Shared stories"],
            "ideasB": ["Peace", "Hobbies"]
        },
        {
            "topic": "Replying to emails immediately vs leaving them for later — which is more professional?",
            "sideA": "Immediately",
            "sideB": "Later",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Professional", "Finish fast"],
            "ideasB": ["Think well", "No rush"]
        },
        {
            "topic": "Doing the dishes immediately vs leaving them until tomorrow — which is better?",
            "sideA": "Immediately",
            "sideB": "Tomorrow",
            "level": "starter",
            "theme": "furniture_objects_A1",
            "ideasA": ["Clean kitchen", "Morning fresh"],
            "ideasB": ["Relax now", "Do all later"]
        },
        {
            "topic": "Being always early vs always five minutes late — which is worse at work?",
            "sideA": "Always early",
            "sideB": "Always late",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Wait long", "Bored"],
            "ideasB": ["Not polite", "Miss start"]
        },
        {
            "topic": "Having a very organised desk vs a messy desk — which is better?",
            "sideA": "Organised",
            "sideB": "Messy",
            "level": "starter",
            "theme": "workplace_basics_A1",
            "ideasA": ["Find things", "Focus"],
            "ideasB": ["Creative", "Fast"]
        },
        {
            "topic": "Talking about work at dinner vs no work talk at dinner — which is better?",
            "sideA": "Work talk",
            "sideB": "No work talk",
            "level": "starter",
            "theme": "basic_foods_A1",
            "ideasA": ["Solve problems", "Share day"],
            "ideasB": ["Relax", "Family time"]
        }
    ];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["en"]) window.speakingData["en"] = {};
    if (!window.speakingData["en"]["debates"]) window.speakingData["en"]["debates"] = [];
    window.speakingData["en"]["debates"].push(...data);
})();

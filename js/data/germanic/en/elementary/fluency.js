(function() {
    const data = [
    {
        "id": "en_elementary_booking_planning_a_trip_001",
        "t": "A holiday you remember",
        "h": [
            "Where did you go?",
            "Who did you go with?",
            "What did you do there?",
            "What was the weather like?",
            "What was the best moment?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "booking_planning_a_trip",
        "sub_theme": null
    },
    {
        "id": "en_elementary_restaurants_ordering_001",
        "t": "Your favourite restaurant or café",
        "h": [
            "Where is it?",
            "What food do they serve?",
            "Why do you like it?",
            "Who do you go with?",
            "When was the last time you went?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "restaurants_ordering",
        "sub_theme": null
    },
    {
        "id": "en_elementary_travel_023",
        "t": "How you get to work or school",
        "h": [
            "How do you travel — bus, car, bike?",
            "How long does it take?",
            "Do you enjoy the journey?",
            "Is it expensive?",
            "What do you do on the way?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null
    },
    {
        "id": "en_elementary_leisure_hobbies_001",
        "t": "What you do to relax",
        "h": [
            "What helps you relax?",
            "Do you prefer to be alone or with people?",
            "How often do you relax properly?",
            "Do you have a favourite place to relax?",
            "Is it easy to relax or do you find it difficult?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "leisure_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_leisure_hobbies_002",
        "t": "A film you watched recently",
        "h": [
            "What was the film called?",
            "What was it about?",
            "Did you enjoy it?",
            "Who was in it?",
            "Would you recommend it?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "leisure_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_leisure_hobbies_003",
        "t": "Your ideal weekend",
        "h": [
            "What would you do on Friday evening?",
            "Would you go out or stay in?",
            "Would you travel somewhere?",
            "Who would you spend time with?",
            "What would you eat?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "leisure_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_020",
        "t": "A person you admire",
        "h": [
            "Who is this person?",
            "What do they do?",
            "Why do you admire them?",
            "Have you met them?",
            "What can you learn from them?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_booking_planning_a_trip_002",
        "t": "Your dream holiday destination",
        "h": [
            "Where would you go?",
            "Why this place?",
            "Who would you go with?",
            "What would you do there?",
            "How long would you stay?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "booking_planning_a_trip",
        "sub_theme": null
    },
    {
        "id": "en_elementary_social_001",
        "t": "Your relationship with your phone",
        "h": [
            "How many hours a day do you use your phone?",
            "What do you use it for the most?",
            "Could you live without it for a week?",
            "Does it help or distract you?",
            "Do you check it first thing in the morning?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_001",
        "t": "Something funny that happened to you",
        "h": [
            "When did this happen?",
            "Where were you?",
            "Who were you with?",
            "What exactly happened?",
            "Do you still laugh about it now?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_interests_hobbies_020",
        "t": "Your hobbies",
        "h": [
            "What do you do in your free time?",
            "When did you start this hobby?",
            "Do you do it alone or with others?",
            "Is it expensive?",
            "What do you love about it?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "interests_hobbies",
        "sub_theme": null
    },
    {
        "id": "en_elementary_weather_climate_001",
        "t": "The weather where you live",
        "h": [
            "What is the weather usually like?",
            "What is your favourite kind of weather?",
            "Does the weather affect your mood?",
            "What is the worst weather you remember?",
            "What do you do on rainy days?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "weather_climate",
        "sub_theme": null
    },
    {
        "id": "en_elementary_customs_traditions_001",
        "t": "A birthday you remember",
        "h": [
            "Whose birthday was it?",
            "Where was the celebration?",
            "What did you do?",
            "Was there a surprise?",
            "What made it special?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "customs_traditions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_023",
        "t": "Things you love about where you live",
        "h": [
            "What is your favourite thing about your town or city?",
            "Is it a good place for families?",
            "What is there to do?",
            "What would you change?",
            "Would you recommend it to a friend?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_work_001",
        "t": "A typical Sunday",
        "h": [
            "What time do you wake up on Sunday?",
            "Do you have a routine?",
            "Do you cook a big meal?",
            "Do you rest or stay busy?",
            "Is Sunday your favourite day?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_elementary_customs_traditions_002",
        "t": "Food from your country",
        "h": [
            "What is a traditional dish?",
            "Do you cook it at home?",
            "When do people eat it?",
            "Is it difficult to make?",
            "Would you recommend it to a foreigner?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "customs_traditions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_shopping_001",
        "t": "Something you bought recently",
        "h": [
            "What did you buy?",
            "Where did you buy it?",
            "Was it expensive?",
            "Did you need it or just want it?",
            "Are you happy with the purchase?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "shopping",
        "sub_theme": null
    },
    {
        "id": "en_elementary_social_002",
        "t": "Your favourite app",
        "h": [
            "What app do you use the most?",
            "What do you use it for?",
            "When did you start using it?",
            "Would you recommend it?",
            "Could you live without it?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_002",
        "t": "A childhood memory",
        "h": [
            "How old were you?",
            "Where were you?",
            "Who were you with?",
            "What happened?",
            "Why do you remember it?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_020",
        "t": "What you ate yesterday",
        "h": [
            "What did you have for breakfast?",
            "What did you eat for lunch?",
            "Did you cook or eat out?",
            "Was it a typical day of eating?",
            "What was the best thing you ate?"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();
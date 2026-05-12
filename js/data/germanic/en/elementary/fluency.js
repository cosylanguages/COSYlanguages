(function() {
    const data = [
        { t: "A holiday you remember", h: ["Where did you go?","Who did you go with?","What did you do there?","What was the weather like?","What was the best moment?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Your favourite restaurant or café", h: ["Where is it?","What food do they serve?","Why do you like it?","Who do you go with?","When was the last time you went?"], level: "elementary", theme: "restaurants_ordering_A2" },
        { t: "How you get to work or school", h: ["How do you travel — bus, car, bike?","How long does it take?","Do you enjoy the journey?","Is it expensive?","What do you do on the way?"], level: "elementary", theme: "transport_travel_A2" },
        { t: "What you do to relax", h: ["What helps you relax?","Do you prefer to be alone or with people?","How often do you relax properly?","Do you have a favourite place to relax?","Is it easy to relax or do you find it difficult?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "A film you watched recently", h: ["What was the film called?","What was it about?","Did you enjoy it?","Who was in it?","Would you recommend it?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Your ideal weekend", h: ["What would you do on Friday evening?","Would you go out or stay in?","Would you travel somewhere?","Who would you spend time with?","What would you eat?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "A person you admire", h: ["Who is this person?","What do they do?","Why do you admire them?","Have you met them?","What can you learn from them?"], level: "elementary", theme: "personality_character_A2" },
        { t: "Your dream holiday destination", h: ["Where would you go?","Why this place?","Who would you go with?","What would you do there?","How long would you stay?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Your relationship with your phone", h: ["How many hours a day do you use your phone?","What do you use it for the most?","Could you live without it for a week?","Does it help or distract you?","Do you check it first thing in the morning?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "Something funny that happened to you", h: ["When did this happen?","Where were you?","Who were you with?","What exactly happened?","Do you still laugh about it now?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "Your hobbies", h: ["What do you do in your free time?","When did you start this hobby?","Do you do it alone or with others?","Is it expensive?","What do you love about it?"], level: "elementary", theme: "interests_hobbies_A2" },
        { t: "The weather where you live", h: ["What is the weather usually like?","What is your favourite kind of weather?","Does the weather affect your mood?","What is the worst weather you remember?","What do you do on rainy days?"], level: "elementary", theme: "weather_climate_A2" },
        { t: "A birthday you remember", h: ["Whose birthday was it?","Where was the celebration?","What did you do?","Was there a surprise?","What made it special?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Things you love about where you live", h: ["What is your favourite thing about your town or city?","Is it a good place for families?","What is there to do?","What would you change?","Would you recommend it to a friend?"], level: "elementary", theme: "neighbourhood_local_A2" },
        { t: "A typical Sunday", h: ["What time do you wake up on Sunday?","Do you have a routine?","Do you cook a big meal?","Do you rest or stay busy?","Is Sunday your favourite day?"], level: "elementary", theme: "daily_work_routines_A2" },
        { t: "Food from your country", h: ["What is a traditional dish?","Do you cook it at home?","When do people eat it?","Is it difficult to make?","Would you recommend it to a foreigner?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Something you bought recently", h: ["What did you buy?","Where did you buy it?","Was it expensive?","Did you need it or just want it?","Are you happy with the purchase?"], level: "elementary", theme: "shopping_consumerism_A2" },
        { t: "Your favourite app", h: ["What app do you use the most?","What do you use it for?","When did you start using it?","Would you recommend it?","Could you live without it?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "A childhood memory", h: ["How old were you?","Where were you?","Who were you with?","What happened?","Why do you remember it?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "What you ate yesterday", h: ["What did you have for breakfast?","What did you eat for lunch?","Did you cook or eat out?","Was it a typical day of eating?","What was the best thing you ate?"], level: "elementary", theme: "diet_nutrition_A2" }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();
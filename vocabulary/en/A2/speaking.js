(function() {
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    const keys = ["talkThatTalk", "debates", "opinions", "quotes", "fluency"];
    keys.forEach(k => {
        if (!window.speakingData[lang][k]) window.speakingData[lang][k] = [];
    });

    const newSpeakingTopics = [
        {
            topic: "What is your morning routine before work or school?",
            level: "elementary",
            theme: "daily_life",
            language: "en"
        },
        {
            topic: "Where did you go on your last vacation, and what did you enjoy most?",
            level: "elementary",
            theme: "travel",
            language: "en"
        },
        {
            topic: "What is your favorite meal to cook at home, and why?",
            level: "elementary",
            theme: "food_and_drink",
            language: "en"
        },
        {
            topic: "How do you prefer to spend your weekend with friends?",
            level: "elementary",
            theme: "social_life",
            language: "en"
        },
        {
            topic: "What kind of clothing do you like to wear in different seasons?",
            level: "elementary",
            theme: "lifestyle",
            language: "en"
        },
        {
            topic: "Which apps on your phone do you use most every day?",
            level: "elementary",
            theme: "technology",
            language: "en"
        },
        {
            topic: "What sports or outdoor exercises do you like to do in good weather?",
            level: "elementary",
            theme: "health_and_sports",
            language: "en"
        },
        {
            topic: "What was your favorite subject when you were in school?",
            level: "elementary",
            theme: "education",
            language: "en"
        },
        {
            topic: "What is your favorite holiday tradition in your family?",
            level: "elementary",
            theme: "culture",
            language: "en"
        },
        {
            topic: "What is one new skill or hobby you would like to start learning soon?",
            level: "elementary",
            theme: "personal_growth",
            language: "en"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

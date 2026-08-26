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
            topic: "What is your favorite way to relax after a busy day?",
            level: "starter",
            theme: "daily_life",
            language: "en"
        },
        {
            topic: "How do you use technology to learn new skills or languages?",
            level: "starter",
            theme: "technology",
            language: "en"
        },
        {
            topic: "What is your favorite breakfast food to eat in the morning?",
            level: "starter",
            theme: "food",
            language: "en"
        },
        {
            topic: "Do you prefer listening to music or watching movies in your free time?",
            level: "starter",
            theme: "entertainment",
            language: "en"
        },
        {
            topic: "What is a city or place you would like to visit in the future?",
            level: "starter",
            theme: "travel",
            language: "en"
        },
        {
            topic: "Who is a person in your life that you enjoy talking to every day?",
            level: "starter",
            theme: "relationships",
            language: "en"
        },
        {
            topic: "What weather do you like best for walking outdoors?",
            level: "starter",
            theme: "nature",
            language: "en"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

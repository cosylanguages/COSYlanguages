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
            topic: "How has the way you communicate with friends changed over the past five years?",
            level: "intermediate",
            theme: "technology",
            language: "en"
        },
        {
            topic: "What factors do you consider most important when choosing a career path?",
            level: "intermediate",
            theme: "career",
            language: "en"
        },
        {
            topic: "In what ways can living in a large city benefit or hinder your wellbeing?",
            level: "intermediate",
            theme: "society",
            language: "en"
        },
        {
            topic: "How do cultural differences influence how people solve personal disputes?",
            level: "intermediate",
            theme: "culture",
            language: "en"
        },
        {
            topic: "What role should environmental sustainability play in individual daily choices?",
            level: "intermediate",
            theme: "environment",
            language: "en"
        },
        {
            topic: "How can hobbies contribute to maintaining a healthy work-life balance?",
            level: "intermediate",
            theme: "lifestyle",
            language: "en"
        },
        {
            topic: "What are the advantages and drawbacks of working remotely from home?",
            level: "intermediate",
            theme: "work",
            language: "en"
        },
        {
            topic: "How does travelling to unfamiliar destinations shape a person's worldview?",
            level: "intermediate",
            theme: "travel",
            language: "en"
        },
        {
            topic: "Should practical life skills be given equal priority to academic subjects in school?",
            level: "intermediate",
            theme: "education",
            language: "en"
        },
        {
            topic: "How does advertising influence our purchasing habits, consciously or unconsciously?",
            level: "intermediate",
            theme: "consumerism",
            language: "en"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

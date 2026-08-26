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
            topic: "How do subtle cognitive biases compromise objective decision-making in corporate leadership?",
            level: "advanced",
            theme: "psychology",
            language: "en"
        },
        {
            topic: "To what extent is intellectual property law struggling to adapt to generative artificial intelligence creative outputs?",
            level: "advanced",
            theme: "technology",
            language: "en"
        },
        {
            topic: "Does architectural urban planning hold the power to dismantle entrenched social segregation?",
            level: "advanced",
            theme: "society",
            language: "en"
        },
        {
            topic: "How does linguistic relativity shape conceptual frameworks across different cultural paradigms?",
            level: "advanced",
            theme: "linguistics",
            language: "en"
        },
        {
            topic: "Can corporate ESG metrics truly compel ethical accountability, or do they merely incentivize sophisticated greenwashing?",
            level: "advanced",
            theme: "ethics",
            language: "en"
        },
        {
            topic: "How are shifting demographic structures challenging established social security and pension models globally?",
            level: "advanced",
            theme: "economics",
            language: "en"
        },
        {
            topic: "To what degree should public funding prioritize exploratory space research over immediate terrestrial crises?",
            level: "advanced",
            theme: "science",
            language: "en"
        },
        {
            topic: "How does pervasive digital surveillance alter citizens' psychological relationship with government authority?",
            level: "advanced",
            theme: "politics",
            language: "en"
        },
        {
            topic: "Can human historical memory maintain authenticity in an era dominated by synthetic media and deepfakes?",
            level: "advanced",
            theme: "media",
            language: "en"
        },
        {
            topic: "Should bioethical frameworks permit human germline gene editing for non-pathological enhancement?",
            level: "advanced",
            theme: "bioethics",
            language: "en"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

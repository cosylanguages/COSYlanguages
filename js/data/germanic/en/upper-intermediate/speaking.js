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
            topic: "To what extent does social media algorithmic curation isolate individuals into echo chambers?",
            level: "upper_intermediate",
            theme: "technology",
            language: "en"
        },
        {
            topic: "Should governments implement strict regulations on artificial intelligence development to protect employment?",
            level: "upper_intermediate",
            theme: "ethics",
            language: "en"
        },
        {
            topic: "How significantly does socioeconomic background influence long-term educational achievement?",
            level: "upper_intermediate",
            theme: "society",
            language: "en"
        },
        {
            topic: "Is globalization diminishing authentic regional cultural identities, or enriching them?",
            level: "upper_intermediate",
            theme: "culture",
            language: "en"
        },
        {
            topic: "How effectively can corporate eco-commitments address global climate change versus systemic policy reform?",
            level: "upper_intermediate",
            theme: "environment",
            language: "en"
        },
        {
            topic: "Does public recognition or intrinsic personal passion serve as a more sustainable driver of career success?",
            level: "upper_intermediate",
            theme: "psychology",
            language: "en"
        },
        {
            topic: "How has the proliferation of gig economy platforms transformed traditional worker protections and stability?",
            level: "upper_intermediate",
            theme: "economy",
            language: "en"
        },
        {
            topic: "To what degree should public healthcare systems prioritize preventative wellness over reactive medical treatment?",
            level: "upper_intermediate",
            theme: "health",
            language: "en"
        },
        {
            topic: "Can modern art truly challenge societal norms if it is heavily commercialized by elite art markets?",
            level: "upper_intermediate",
            theme: "art",
            language: "en"
        },
        {
            topic: "Should higher education institutions abandon standardized testing entirely during student admissions?",
            level: "upper_intermediate",
            theme: "education",
            language: "en"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

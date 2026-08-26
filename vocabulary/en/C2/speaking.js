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
            topic: "Is the philosophical paradigm of technological determinism an inevitable reality or an abdication of human agency?",
            level: "proficiency",
            theme: "philosophy",
            language: "en"
        },
        {
            topic: "To what degree does commodified cultural nostalgia impede genuine artistic innovation in contemporary society?",
            level: "proficiency",
            theme: "culture",
            language: "en"
        },
        {
            topic: "How do sovereign monetary policies grapple with the systemic destabilization posed by decentralized cryptocurrencies?",
            level: "proficiency",
            theme: "economics",
            language: "en"
        },
        {
            topic: "Can epistemic justice be achieved within academic research frameworks traditionally rooted in Eurocentric hegemony?",
            level: "proficiency",
            theme: "epistemology",
            language: "en"
        },
        {
            topic: "In what ways does the erosion of third places exacerbate existential loneliness in hyper-connected metropolises?",
            level: "proficiency",
            theme: "sociology",
            language: "en"
        },
        {
            topic: "Does the anthropocentric paradigm of international climate treaties fundamentally misapprehend ecological interconnectedness?",
            level: "proficiency",
            theme: "ecology",
            language: "en"
        },
        {
            topic: "How do algorithmic recommendation systems subtly reconfigure human autonomy and existential self-determination?",
            level: "proficiency",
            theme: "technology",
            language: "en"
        },
        {
            topic: "To what extent can transhumanist technologies challenge standard biological definitions of personhood and moral status?",
            level: "proficiency",
            theme: "transhumanism",
            language: "en"
        },
        {
            topic: "Does meritocracy function as a legitimizing myth for structural inequality rather than an instrument of social mobility?",
            level: "proficiency",
            theme: "politics",
            language: "en"
        },
        {
            topic: "How do post-truth political discourses subvert traditional democratic deliberation and institutional trust?",
            level: "proficiency",
            theme: "governance",
            language: "en"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

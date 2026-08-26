(function() {
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    const keys = ["talkThatTalk", "debates", "opinions", "quotes", "fluency"];
    keys.forEach(k => {
        if (!window.speakingData[lang][k]) window.speakingData[lang][k] = [];
    });

    const newSpeakingTopics = [
        {
            topic: "Fino a che punto gli algoritmi dei social media isolano le persone in bolle ideologiche?",
            level: "upper_intermediate",
            theme: "technology",
            language: "it"
        },
        {
            topic: "I governi dovrebbero regolamentare lo sviluppo dell'intelligenza artificiale per proteggere l'occupazione?",
            level: "upper_intermediate",
            theme: "ethics",
            language: "it"
        },
        {
            topic: "Quanto incide il contesto socioeconomico sul successo scolastico a lungo termine?",
            level: "upper_intermediate",
            theme: "society",
            language: "it"
        },
        {
            topic: "La globalizzazione sta minacciando le identità culturali regionali o le sta arricchendo?",
            level: "upper_intermediate",
            theme: "culture",
            language: "it"
        },
        {
            topic: "Gli impegni ecologici aziendali sono sufficienti contro il cambiamento climatico senza riforme statali?",
            level: "upper_intermediate",
            theme: "environment",
            language: "it"
        },
        {
            topic: "Il riconoscimento pubblico o la passione personale è un motore di carriera più sostenibile?",
            level: "upper_intermediate",
            theme: "psychology",
            language: "it"
        },
        {
            topic: "Come ha trasformato la gig economy le tutele tradizionali dei lavoratori?",
            level: "upper_intermediate",
            theme: "economy",
            language: "it"
        },
        {
            topic: "Il sistema sanitario pubblico dovrebbe dare priorità alla prevenzione anziché alle cure reattive?",
            level: "upper_intermediate",
            theme: "health",
            language: "it"
        },
        {
            topic: "L'arte contemporanea può mantenere una portata critica se è commercializzata dai mercati d'élite?",
            level: "upper_intermediate",
            theme: "art",
            language: "it"
        },
        {
            topic: "Le università dovrebbero abolire i test standardizzati durante i processi di ammissione?",
            level: "upper_intermediate",
            theme: "education",
            language: "it"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

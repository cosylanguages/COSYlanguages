(function() {
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    const keys = ["talkThatTalk", "debates", "opinions", "quotes", "fluency"];
    keys.forEach(k => {
        if (!window.speakingData[lang][k]) window.speakingData[lang][k] = [];
    });

    const newSpeakingTopics = [
        {
            topic: "Comment les réseaux sociaux influencent-ils vos relations personnelles au quotidien ?",
            level: "intermediate",
            theme: "technology",
            language: "fr"
        },
        {
            topic: "Quels critères privilégiez-vous lors de la recherche d'un emploi équilibré ?",
            level: "intermediate",
            theme: "career",
            language: "fr"
        },
        {
            topic: "De quelle manière la vie en grande ville impacte-t-elle la santé mentale ?",
            level: "intermediate",
            theme: "society",
            language: "fr"
        },
        {
            topic: "Comment les traditions familiales évoluent-elles entre différentes générations ?",
            level: "intermediate",
            theme: "culture",
            language: "fr"
        },
        {
            topic: "Quel rôle les habitudes écologiques personnelles jouent-elles dans la protection de l'environnement ?",
            level: "intermediate",
            theme: "environment",
            language: "fr"
        },
        {
            topic: "Comment organiser son temps libre pour réduire efficacement le stress du travail ?",
            level: "intermediate",
            theme: "lifestyle",
            language: "fr"
        },
        {
            topic: "Quels sont les principaux avantages et inconvénients du télétravail régulier ?",
            level: "intermediate",
            theme: "work",
            language: "fr"
        },
        {
            topic: "En quoi voyager dans un pays étranger change-t-il la perception du monde ?",
            level: "intermediate",
            theme: "travel",
            language: "fr"
        },
        {
            topic: "Faut-il accorder autant d'importance aux compétences pratiques qu'aux matières académiques à l'école ?",
            level: "intermediate",
            theme: "education",
            language: "fr"
        },
        {
            topic: "Comment la publicité influence-t-elle nos décisions d'achat inconscientes ?",
            level: "intermediate",
            theme: "consumerism",
            language: "fr"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

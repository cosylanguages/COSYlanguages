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
            topic: "Quel est votre moyen de transport préféré pour aller au travail ?",
            level: "starter",
            theme: "daily_life",
            language: "fr"
        },
        {
            topic: "Quelles activités aimez-vous faire pendant le week-end ?",
            level: "starter",
            theme: "hobbies",
            language: "fr"
        },
        {
            topic: "Quel est votre plat préféré et pourquoi l'aimez-vous ?",
            level: "starter",
            theme: "food",
            language: "fr"
        },
        {
            topic: "Comment préférez-vous passer vos vacances d'été ?",
            level: "starter",
            theme: "travel",
            language: "fr"
        },
        {
            topic: "Quelle est votre saison préférée de l'année et pourquoi ?",
            level: "starter",
            theme: "nature",
            language: "fr"
        },
        {
            topic: "Combien de langues parlez-vous ou souhaitez-vous apprendre ?",
            level: "starter",
            theme: "education",
            language: "fr"
        },
        {
            topic: "Quel genre de musique aimez-vous écouter le soir ?",
            level: "starter",
            theme: "music",
            language: "fr"
        },
        {
            topic: "Préférez-vous vivre dans une grande ville ou à la campagne ?",
            level: "starter",
            theme: "lifestyle",
            language: "fr"
        },
        {
            topic: "Quel est votre livre ou film préféré cette année ?",
            level: "starter",
            theme: "media",
            language: "fr"
        },
        {
            topic: "Comment utilisez-vous Internet pour apprendre de nouvelles choses ?",
            level: "starter",
            theme: "technology",
            language: "fr"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

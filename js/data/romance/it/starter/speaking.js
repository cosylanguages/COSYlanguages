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
            topic: "Qual è il tuo mezzo di trasporto preferito per andare al lavoro?",
            level: "starter",
            theme: "daily_life",
            language: "it"
        },
        {
            topic: "Quali attività ti piace fare durante il fine settimana?",
            level: "starter",
            theme: "hobbies",
            language: "it"
        },
        {
            topic: "Qual è il tuo piatto preferito e perché ti piace?",
            level: "starter",
            theme: "food",
            language: "it"
        },
        {
            topic: "Come preferisci trascorrere le tue vacanze estive?",
            level: "starter",
            theme: "travel",
            language: "it"
        },
        {
            topic: "Qual è la tua stagione preferita dell'anno e perché?",
            level: "starter",
            theme: "nature",
            language: "it"
        },
        {
            topic: "Quante lingue parli o vorresti imparare in futuro?",
            level: "starter",
            theme: "education",
            language: "it"
        },
        {
            topic: "Che genere di musica ti piace ascoltare la sera?",
            level: "starter",
            theme: "music",
            language: "it"
        },
        {
            topic: "Preferisci vivere in una grande città o in campagna?",
            level: "starter",
            theme: "lifestyle",
            language: "it"
        },
        {
            topic: "Qual è il tuo libro o film preferito di quest'anno?",
            level: "starter",
            theme: "media",
            language: "it"
        },
        {
            topic: "Come usi Internet per imparare cose nuove ogni giorno?",
            level: "starter",
            theme: "technology",
            language: "it"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

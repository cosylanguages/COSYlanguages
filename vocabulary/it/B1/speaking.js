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
            topic: "In che modo i social media hanno cambiato il modo di comunicare con gli amici?",
            level: "intermediate",
            theme: "technology",
            language: "it"
        },
        {
            topic: "Quali fattori consideri più importanti quando scegli una carriera lavorativa?",
            level: "intermediate",
            theme: "career",
            language: "it"
        },
        {
            topic: "In che modo vivere in una grande città influenza il benessere quotidiano?",
            level: "intermediate",
            theme: "society",
            language: "it"
        },
        {
            topic: "Come cambiano le tradizioni familiari tra le diverse generazioni?",
            level: "intermediate",
            theme: "culture",
            language: "it"
        },
        {
            topic: "Quale ruolo dovrebbero avere le scelte ecologiche individuali per l'ambiente?",
            level: "intermediate",
            theme: "environment",
            language: "it"
        },
        {
            topic: "In che modo gli hobby aiutano a mantenere un buon equilibrio tra lavoro e vita privata?",
            level: "intermediate",
            theme: "lifestyle",
            language: "it"
        },
        {
            topic: "Quali sono i principali vantaggi e svantaggi del lavoro da casa?",
            level: "intermediate",
            theme: "work",
            language: "it"
        },
        {
            topic: "Come influisce il viaggio in luoghi sconosciuti sulla visione del mondo di una persona?",
            level: "intermediate",
            theme: "travel",
            language: "it"
        },
        {
            topic: "Le competenze pratiche dovrebbero avere la stessa importanza delle materie scolastiche?",
            level: "intermediate",
            theme: "education",
            language: "it"
        },
        {
            topic: "In che modo la pubblicità influenza le nostre decisioni d'acquisto quotidiane?",
            level: "intermediate",
            theme: "consumerism",
            language: "it"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

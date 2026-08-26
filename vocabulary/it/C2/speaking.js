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
            topic: "Il paradigma filosofico del determinismo tecnologico costituisce una realtà ineluttabile o un'abdicazione dell'autonomia umana?",
            level: "proficiency",
            theme: "philosophy",
            language: "it"
        },
        {
            topic: "In che misura la nostalgia culturale commercializzata ostacola la vera innovazione artistica nella società contemporanea?",
            level: "proficiency",
            theme: "culture",
            language: "it"
        },
        {
            topic: "In che modo le politiche monetarie sovrane affrontano la destabilizzazione sistemica posta dalle criptovalute decentralizzate?",
            level: "proficiency",
            theme: "economics",
            language: "it"
        },
        {
            topic: "La giustizia epistemica può essere raggiunta all'interno di contesti di ricerca accademica storicamente radicati nell'egemonia eurocentrica?",
            level: "proficiency",
            theme: "epistemology",
            language: "it"
        },
        {
            topic: "In che modo l'erosione dei terzi luoghi esacerba la solitudine esistenziale nelle metropoli iperconnesse?",
            level: "proficiency",
            theme: "sociology",
            language: "it"
        },
        {
            topic: "Il paradigma antropocentrico dei trattati climatici internazionali fraintende fondamentalmente l'interconnessione ecologica?",
            level: "proficiency",
            theme: "ecology",
            language: "it"
        },
        {
            topic: "In che modo i sistemi di raccomandazione algoritmica riconfigurano sottilmente l'autonomia e l'autodeterminazione umana?",
            level: "proficiency",
            theme: "technology",
            language: "it"
        },
        {
            topic: "Fino a che punto le tecnologie transumaniste possono sfidare le definizioni biologiche standard di persona e stato morale?",
            level: "proficiency",
            theme: "transhumanism",
            language: "it"
        },
        {
            topic: "La meritocrazia funziona come un mito legittimante per la disuguaglianza strutturale piuttosto che come uno strumento di mobilità sociale?",
            level: "proficiency",
            theme: "politics",
            language: "it"
        },
        {
            topic: "In che modo i discorsi politici della post-verità sovvertono la deliberazione democratica e la fiducia istituzionale?",
            level: "proficiency",
            theme: "governance",
            language: "it"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

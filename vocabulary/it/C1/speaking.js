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
            topic: "In che modo i sottili pregiudizi cognitivi compromettono il processo decisionale obiettivo nella leadership aziendale?",
            level: "advanced",
            theme: "psychology",
            language: "it"
        },
        {
            topic: "Fino a che punto il diritto della proprietà intellettuale fatica ad adattarsi alle creazioni dell'intelligenza artificiale generativa?",
            level: "advanced",
            theme: "technology",
            language: "it"
        },
        {
            topic: "La pianificazione urbanistica architettonica ha il potere di smantellare la segregazione sociale radicata?",
            level: "advanced",
            theme: "society",
            language: "it"
        },
        {
            topic: "In che modo il relativismo linguistico modella i quadri concettuali attraverso diversi paradigmi culturali?",
            level: "advanced",
            theme: "linguistics",
            language: "it"
        },
        {
            topic: "I criteri ESG aziendali possono davvero imporre una responsabilità etica o incentivano soltanto il greenwashing?",
            level: "advanced",
            theme: "ethics",
            language: "it"
        },
        {
            topic: "In che modo i mutamenti demografici stanno mettendo a dura prova i modelli di previdenza sociale a livello globale?",
            level: "advanced",
            theme: "economics",
            language: "it"
        },
        {
            topic: "Fino a che punto i fondi pubblici dovrebbero dare priorità alla ricerca spaziale rispetto alle crisi terrestri immediate?",
            level: "advanced",
            theme: "science",
            language: "it"
        },
        {
            topic: "Come altera la sorveglianza digitale pervasiva la relazione psicologica dei cittadini con l'autorità statale?",
            level: "advanced",
            theme: "politics",
            language: "it"
        },
        {
            topic: "La memoria storica umana può mantenere la propria autenticità in un'epoca dominata da media sintetici e deepfake?",
            level: "advanced",
            theme: "media",
            language: "it"
        },
        {
            topic: "I quadri bioetici dovrebbero consentire la modifica genetica germinale per fini di potenziamento non terapeutico?",
            level: "advanced",
            theme: "bioethics",
            language: "it"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

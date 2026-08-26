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
            topic: "Comment les biais cognitifs subtils compromettent-ils la prise de décision objective dans le leadership d'entreprise ?",
            level: "advanced",
            theme: "psychology",
            language: "fr"
        },
        {
            topic: "Dans quelle mesure le droit de la propriété intellectuelle peine-t-il à s'adapter aux créations de l'intelligence artificielle générative ?",
            level: "advanced",
            theme: "technology",
            language: "fr"
        },
        {
            topic: "L'aménagement urbain architectural a-t-il le pouvoir de démanteler la ségrégation sociale ancrée ?",
            level: "advanced",
            theme: "society",
            language: "fr"
        },
        {
            topic: "Comment le relativisme linguistique façonne-t-il les cadres conceptuels à travers différents paradigmes culturels ?",
            level: "advanced",
            theme: "linguistics",
            language: "fr"
        },
        {
            topic: "Les critères ESG des entreprises peuvent-ils réellement imposer une responsabilité éthique ou encouragent-ils le greenwashing ?",
            level: "advanced",
            theme: "ethics",
            language: "fr"
        },
        {
            topic: "Comment les mutations démographiques remettent-elles en question les modèles de sécurité sociale et de retraite à l'échelle mondiale ?",
            level: "advanced",
            theme: "economics",
            language: "fr"
        },
        {
            topic: "Dans quelle mesure les fonds publics devraient-ils prioriser la recherche spatiale au détriment des crises terrestres immédiates ?",
            level: "advanced",
            theme: "science",
            language: "fr"
        },
        {
            topic: "Comment la surveillance numérique généralisée altère-t-elle la relation psychologique des citoyens avec l'autorité publique ?",
            level: "advanced",
            theme: "politics",
            language: "fr"
        },
        {
            topic: "La mémoire historique humaine peut-elle préserver son authenticité à l'ère des médias synthétiques et des deepfakes ?",
            level: "advanced",
            theme: "media",
            language: "fr"
        },
        {
            topic: "Les cadres bioéthiques devraient-ils autoriser la modification génétique germinale à des fins d'amélioration non thérapeutique ?",
            level: "advanced",
            theme: "bioethics",
            language: "fr"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

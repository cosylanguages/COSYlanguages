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
            topic: "Le paradigme philosophique du déterminisme technologique constitue-t-il une réalité inéluctable ou une abdication de l'autonomie humaine ?",
            level: "proficiency",
            theme: "philosophy",
            language: "fr"
        },
        {
            topic: "Dans quelle mesure la nostalgie culturelle marchandisée entrave-t-elle la véritable innovation artistique dans la société contemporaine ?",
            level: "proficiency",
            theme: "culture",
            language: "fr"
        },
        {
            topic: "Comment les politiques monétaires souveraines font-elles face à la déstabilisation systémique posée par les cryptomonnaies décentralisées ?",
            level: "proficiency",
            theme: "economics",
            language: "fr"
        },
        {
            topic: "La justice épistémique peut-elle être atteinte au sein de cadres de recherche académiques historiquement ancrés dans l'hégémonie eurocentrique ?",
            level: "proficiency",
            theme: "epistemology",
            language: "fr"
        },
        {
            topic: "De quelles manières l'érosion des tiers-lieux exacerbe-t-elle la solitude existentielle dans les métropoles hyperconnectées ?",
            level: "proficiency",
            theme: "sociology",
            language: "fr"
        },
        {
            topic: "Le paradigme anthropocentrique des traités climatiques internationaux méconnaît-il fondamentalement l'interconnexion écologique ?",
            level: "proficiency",
            theme: "ecology",
            language: "fr"
        },
        {
            topic: "Comment les systèmes de recommandation algorithmiques reconfigurent-ils subtilement l'autonomie et l'autodétermination humaine ?",
            level: "proficiency",
            theme: "technology",
            language: "fr"
        },
        {
            topic: "Dans quelle mesure les technologies transhumanistes remettent-elles en question les définitions biologiques établies de la personne humaine ?",
            level: "proficiency",
            theme: "transhumanism",
            language: "fr"
        },
        {
            topic: "La méritocratie fonctionne-t-elle comme un mythe légitimant les inégalités structurelles plutôt que comme un instrument de mobilité sociale ?",
            level: "proficiency",
            theme: "politics",
            language: "fr"
        },
        {
            topic: "Comment les discours politiques de l'ère de la post-vérité subvertissent-ils la délibération démocratique et la confiance institutionnelle ?",
            level: "proficiency",
            theme: "governance",
            language: "fr"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

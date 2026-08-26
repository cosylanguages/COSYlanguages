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
            topic: "Dans quelle mesure les algorithmes des réseaux sociaux créent-ils des bulles de filtres idéologiques ?",
            level: "upper_intermediate",
            theme: "technology",
            language: "fr"
        },
        {
            topic: "Faut-il encadrer le développement de l'intelligence artificielle pour préserver l'emploi qualifié ?",
            level: "upper_intermediate",
            theme: "ethics",
            language: "fr"
        },
        {
            topic: "Dans quelle mesure le milieu socio-économique détermine-t-il la réussite éducative à long terme ?",
            level: "upper_intermediate",
            theme: "society",
            language: "fr"
        },
        {
            topic: "La mondialisation menace-t-elle l'authenticité des cultures régionales ou les enrichit-elle ?",
            level: "upper_intermediate",
            theme: "culture",
            language: "fr"
        },
        {
            topic: "Les engagements écologiques des entreprises suffisent-ils face au changement climatique sans réformes étatiques ?",
            level: "upper_intermediate",
            theme: "environment",
            language: "fr"
        },
        {
            topic: "La reconnaissance publique est-elle un moteur de carrière plus durable que la passion personnelle ?",
            level: "upper_intermediate",
            theme: "psychology",
            language: "fr"
        },
        {
            topic: "Comment l'économie des petits boulots a-t-elle transformé le droit du travail traditionnel ?",
            level: "upper_intermediate",
            theme: "economy",
            language: "fr"
        },
        {
            topic: "Le système de santé publique devrait-il investir davantage dans la prévention que dans les soins ?",
            level: "upper_intermediate",
            theme: "health",
            language: "fr"
        },
        {
            topic: "L'art contemporain peut-il conserver sa portée critique s'il est marchandisé par des élites ?",
            level: "upper_intermediate",
            theme: "art",
            language: "fr"
        },
        {
            topic: "Les universités devraient-elles abolir les examens standardisés lors des sélections d'admission ?",
            level: "upper_intermediate",
            theme: "education",
            language: "fr"
        }
    ];

    window.speakingData[lang].fluency.push(...newSpeakingTopics);
})();

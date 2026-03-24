(function() {
    const data = [
    {
        "word": "interdisciplinary",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧪",
        "form": "adjective"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

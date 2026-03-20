(function() {
    const data = [
    {
        "word": "filosofo",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧐",
        "form": "noun",
        "plural": "filosofi"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

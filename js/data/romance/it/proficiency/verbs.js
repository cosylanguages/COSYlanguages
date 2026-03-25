(function() {
    const data = [
    {
        "word": "cambio di paradigma",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🔄",
        "form": "verb",
        "group": "locuzione",
        "classification": "irregular",
        "aspect": "action",
        "v3": "cambiato paradigma"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

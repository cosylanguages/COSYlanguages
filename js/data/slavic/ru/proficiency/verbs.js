(function() {
    const data = [
    {
        "word": "смена парадигмы",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🔄",
        "form": "verb"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

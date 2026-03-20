(function() {
    const data = [
    {
        "word": "φιλόσοφος",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧐",
        "form": "noun",
        "plural": "φιλόσοφοι"
    },
    {
        "word": "αλλαγή παραδείγματος",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🔄",
        "form": "noun",
        "plural": "αλλαγή παραδείγματοι"
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

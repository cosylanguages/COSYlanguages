(function() {
    const data = [
    {
        "word": "борщ",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "form": "noun",
        "plural": "борщи",
        "definitions": [
            {
                "text": "Традиционный русский суп со свеклой."
            }
        ],
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "салат оливье",
        "level": "starter",
        "theme": "basic_foods_A1",
        "gender": "он",
        "form": "noun",
        "plural": "салаты оливье",
        "transcription": "/saˈlat aliˈvje/",
        "definitions": [
            {
                "text": "Традиционный русский салат из вареных овощей, мяса и майонеза.",
                "examples": []
            }
        ],
        "countability": "countable",
        "subtext": ""
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
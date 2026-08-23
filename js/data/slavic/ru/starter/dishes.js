// TODO: verify level classification
(function() {
    const lang = "ru";
    const data = [
    {
        "id": "ru_starter_food_drink_029",
        "word": "борщ",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Традиционный русский суп со свеклой."
            }
        ],
        "gender": "он",
        "plural": "борщи",
        "countability": "countable",
        "subtext": "",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "id": "ru_starter_food_drink_030",
        "word": "салат оливье",
        "lang": "ru",
        "level": "starter",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Традиционный русский салат из вареных овощей, мяса и майонеза.",
                "examples": []
            }
        ],
        "gender": "он",
        "plural": "салаты оливье",
        "transcription": "/saˈlat aliˈvje/",
        "countability": "countable",
        "subtext": "",
        "emoji": "✨"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

(function() {
    const data = [
    {
        "word": "χορός",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "τραγούδι",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "χιονισμένος",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "❄️",
        "form": "verb"
    },
    {
        "word": "ανεμώδης",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "💨",
        "form": "verb"
    },
    {
        "word": "συννεφιασμένος",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "☁️",
        "form": "verb"
    },
    {
        "word": "περιμένω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "υπηρετώ",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "χτίζω",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🏗️",
        "form": "verb"
    },
    {
        "word": "φτάνω",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb"
    },
    {
        "word": "σκοτώνω",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "παραμένω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "προτείνω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "σηκώνω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "απαιτώ",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "αναφέρω",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "αποφασίζω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "εξηγώ",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "αναπτύσσω",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "υποστηρίζω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "χτυπώ",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "παράγω",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "αντιμετωπίζω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "καλύπτω",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "περιγράφω",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "πιάζω",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "🎣",
        "form": "verb"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

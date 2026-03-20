(function() {
    const data = [
    {
        "word": "danzare",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "considerare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "apparire",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👻",
        "form": "verb"
    },
    {
        "word": "servire",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "aspettarsi",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "costruire",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🏗️",
        "form": "verb"
    },
    {
        "word": "raggiungere",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb"
    },
    {
        "word": "uccidere",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "rimanere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "suggerire",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "alzare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "richiedere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "riferire",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "decidere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "spiegare",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "sviluppare",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "sostenere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "colpire",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "produrre",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "affrontare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "coprire",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "descrivere",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "catturare",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "🎣",
        "form": "verb"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

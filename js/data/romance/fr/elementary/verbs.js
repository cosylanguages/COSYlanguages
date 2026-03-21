(function() {
    const data = [
    {
        "word": "nuageux",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "☁️",
        "form": "verb"
    },
    {
        "word": "considérer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "apparaître",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👻",
        "form": "verb"
    },
    {
        "word": "attendre",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "servir",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "construire",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏗️",
        "form": "verb"
    },
    {
        "word": "rester",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "atteindre",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb"
    },
    {
        "word": "tuer",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "suggérer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "lever",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "exiger",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "rapporter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "décider",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "expliquer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "développer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "soutenir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "frapper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "produire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "faire face",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "couvrir",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "décrire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "attraper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

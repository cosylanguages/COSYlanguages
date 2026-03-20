(function() {
    const data = [
    {
        "word": "лошадь",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🐎",
        "form": "verb"
    },
    {
        "word": "рисование",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "готовка",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "танцы",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "пение",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "ветрено",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "💨",
        "form": "verb"
    },
    {
        "word": "предлагать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "рассматривать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "появляться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👻",
        "form": "verb"
    },
    {
        "word": "служить",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🍽️",
        "form": "verb"
    },
    {
        "word": "ожидать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "строить",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🏗️",
        "form": "verb"
    },
    {
        "word": "оставаться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⏳",
        "form": "verb"
    },
    {
        "word": "достигать",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb"
    },
    {
        "word": "убивать",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "⚔️",
        "form": "verb"
    },
    {
        "word": "поднимать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙋",
        "form": "verb"
    },
    {
        "word": "требовать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "📜",
        "form": "verb"
    },
    {
        "word": "сообщать",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "📋",
        "form": "verb"
    },
    {
        "word": "решать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚖️",
        "form": "verb"
    },
    {
        "word": "объяснять",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "развивать",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "поддерживать",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "ударять",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "🥊",
        "form": "verb"
    },
    {
        "word": "производить",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "🏭",
        "form": "verb"
    },
    {
        "word": "сталкиваться",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "покрывать",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🧥",
        "form": "verb"
    },
    {
        "word": "описывать",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "📝",
        "form": "verb"
    },
    {
        "word": "ловить",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "🎣",
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

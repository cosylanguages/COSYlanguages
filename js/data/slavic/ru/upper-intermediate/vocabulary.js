(function() {
    const data = [
    {
        "word": "юрист",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "юристы",
        "definitions": [
            {
                "text": "Человек, который дает юридические советы и представляет людей в суде.",
                "examples": [
                    "Мне нужно поговорить с моим юристом.",
                    "Юрист находится в суде."
                ]
            },
            {
                "text": "Этот человек часто работает в офисе или в суде.",
                "examples": [
                    "Юристы читают много документов."
                ]
            }
        ]
    },
    {
        "word": "аптека",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "💊",
        "form": "noun",
        "plural": "аптеки",
        "definitions": [
            {
                "text": "Магазин, в котором продаются лекарства.",
                "examples": [
                    "Мне нужно купить аспирин в аптеке.",
                    "Где здесь ближайшая аптека?"
                ]
            },
            {
                "text": "В аптеке можно получить лекарства по рецепту.",
                "examples": [
                    "Фармацевт работает в аптеке."
                ]
            }
        ]
    },
    {
        "word": "психолог",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "🧠",
        "form": "noun",
        "plural": "психологи"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

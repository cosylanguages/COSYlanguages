(function() {
    const data = [
    {
        "word": "Marie Curie",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous scientist from Poland and France who studied radiation and won two Nobel Prizes.",
                "examples": [
                    "Marie Curie is a very famous individual."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🧪"
    },
    {
        "word": "Barack Obama",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American politician who served as the 44th president of the United States.",
                "examples": [
                    "Barack Obama is a very famous individual."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🇺🇸"
    },
    {
        "word": "Steve Jobs",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American businessman and inventor who co-founded Apple Inc.",
                "examples": [
                    "Steve Jobs is a very famous individual."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🍎"
    },
    {
        "word": "Abraham Lincoln",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American leader who was the 16th president of the USA during the Civil War.",
                "examples": [
                    "Abraham Lincoln is a very famous individual."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🎩"
    },
    {
        "word": "Mahatma Gandhi",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Indian leader who used peaceful ways to help India become independent.",
                "examples": [
                    "Mahatma Gandhi is a very famous individual."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🇮🇳"
    },
    {
        "word": "Frida Kahlo",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Mexican artist known for her many self-portraits and works inspired by nature.",
                "examples": [
                    "Frida Kahlo is a very famous individual."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🎨"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
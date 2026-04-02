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
    },
    {
        "word": "Nelson Mandela",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous South African leader who fought against apartheid and became the first black president of South Africa.",
                "examples": [
                    "Nelson Mandela is a symbol of peace."
                ]
            }
        ],
        "subtext": "famous leader",
        "emoji": "🇿🇦"
    },
    {
        "word": "Malala Yousafzai",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A young Pakistani activist for female education and the youngest Nobel Prize laureate.",
                "examples": [
                    "Malala Yousafzai is an inspiration for girls' education."
                ]
            }
        ],
        "subtext": "famous activist",
        "emoji": "🇵🇰"
    },
    {
        "word": "William Shakespeare",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous English writer and poet, known for plays like 'Romeo and Juliet'.",
                "examples": [
                    "Shakespeare is the most famous writer in English history."
                ]
            }
        ],
        "subtext": "famous writer",
        "emoji": "✍️"
    },
    {
        "word": "Leonardo da Vinci",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "An Italian genius who was an artist, scientist, and inventor during the Renaissance.",
                "examples": [
                    "Leonardo da Vinci painted the Mona Lisa."
                ]
            }
        ],
        "subtext": "famous artist",
        "emoji": "🎨"
    },
    {
        "word": "Albert Einstein",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A world-famous physicist from Germany who developed the theory of relativity.",
                "examples": [
                    "Einstein was a genius in science."
                ]
            }
        ],
        "subtext": "famous scientist",
        "emoji": "👨‍🔬"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Portuguese professional football player.",
                "examples": [
                    "Ronaldo has many fans around the world."
                ]
            }
        ],
        "subtext": "famous athlete",
        "emoji": "⚽"
    },
    {
        "word": "Lionel Messi",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Argentinian professional football player.",
                "examples": [
                    "Messi is considered one of the best players ever."
                ]
            }
        ],
        "subtext": "famous athlete",
        "emoji": "⚽"
    },
    {
        "word": "Taylor Swift",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A highly successful American singer and songwriter.",
                "examples": [
                    "Taylor Swift has many hit albums."
                ]
            }
        ],
        "subtext": "famous singer",
        "emoji": "🎤"
    },
    {
        "word": "Beyoncé",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American singer, songwriter, and dancer.",
                "examples": [
                    "Beyoncé is a global icon."
                ]
            }
        ],
        "subtext": "famous singer",
        "emoji": "🎤"
    },
    {
        "word": "Elon Musk",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A billionaire businessman and inventor, known for companies like Tesla and SpaceX.",
                "examples": [
                    "Elon Musk is interested in space exploration."
                ]
            }
        ],
        "subtext": "famous businessman",
        "emoji": "🚀"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
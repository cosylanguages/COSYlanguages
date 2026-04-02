(function() {
    const data = [
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Albert Einstein is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Taylor Swift is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Cristiano Ronaldo",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Cristiano Ronaldo is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Lionel Messi",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Lionel Messi is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Beyoncé",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Beyoncé is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Elon Musk",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Elon Musk is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Queen Elizabeth II",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Queen Elizabeth II is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Marie Curie",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Marie Curie is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Leonardo da Vinci is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "Nelson Mandela",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "Nelson Mandela is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    },
    {
        "word": "William Shakespeare",
        "level": "starter",
        "theme": "places_culture_leisure_A1",
        "definitions": [
            {
                "text": "A famous person.",
                "examples": [
                    "William Shakespeare is well-known around the world."
                ]
            }
        ],
        "subtext": "famous person"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

(function() {
    const data = [
    {
        "id": "en_starter_greetings_001",
        "word": "hello",
        "translation": "hello",
        "level": "starter",
        "theme": "greetings",
        "language": "en",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Used as a greeting when you meet someone.",
                "examples": [
                    "Hello, how are you?"
                ]
            }
        ],
        "transcription": "həˈloʊ",
        "lang": "en"
    },
    {
        "id": "en_starter_greetings_002",
        "word": "goodbye",
        "translation": "goodbye",
        "level": "starter",
        "theme": "greetings",
        "language": "en",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Used when you are leaving someone.",
                "examples": [
                    "Goodbye! See you tomorrow."
                ]
            }
        ],
        "transcription": "ɡʊdˈbaɪ",
        "lang": "en"
    },
    {
        "id": "en_starter_greetings_003",
        "word": "please",
        "translation": "please",
        "level": "starter",
        "theme": "greetings",
        "language": "en",
        "emoji": "🙏",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to be polite when asking for something.",
                "examples": [
                    "Can I have some water, please?"
                ]
            }
        ],
        "transcription": "pliz",
        "lang": "en"
    },
    {
        "id": "en_starter_greetings_004",
        "word": "thank you",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
        "language": "en",
        "emoji": "😊",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to show that you are grateful for something.",
                "examples": [
                    "Thank you for your help."
                ]
            }
        ],
        "transcription": "θæŋk ju",
        "lang": "en"
    },
    {
        "id": "en_starter_greetings_005",
        "word": "sorry",
        "translation": "sorry",
        "level": "starter",
        "theme": "greetings",
        "language": "en",
        "emoji": "🙇",
        "form": "adjective",
        "definitions": [
            {
                "text": "Used to apologize for something.",
                "examples": [
                    "I am sorry I am late."
                ]
            }
        ],
        "transcription": "ˈsɑri",
        "lang": "en"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

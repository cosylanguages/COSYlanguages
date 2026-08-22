(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_starter_greetings_001",
        "word": "hello",
        "translation": "hello",
        "level": "starter",
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
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
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
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
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
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
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
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
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
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
    },
    {
        "id": "en_starter_greetings_006",
        "word": "good morning",
        "translation": "good morning",
        "level": "starter",
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
        "language": "en",
        "emoji": "🌅",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to greet someone in the morning.",
                "examples": [
                    "Good morning, class!"
                ]
            }
        ],
        "transcription": "ɡʊd ˈmɔːrnɪŋ",
        "lang": "en"
    },
    {
        "id": "en_starter_greetings_007",
        "word": "good afternoon",
        "translation": "good afternoon",
        "level": "starter",
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
        "language": "en",
        "emoji": "☀️",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to greet someone in the afternoon.",
                "examples": [
                    "Good afternoon, Mr. Smith."
                ]
            }
        ],
        "transcription": "ɡʊd ˌæftərˈnuːn",
        "lang": "en"
    },
    {
        "id": "en_starter_greetings_008",
        "word": "good evening",
        "translation": "good evening",
        "level": "starter",
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
        "language": "en",
        "emoji": "🌆",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to greet someone in the evening.",
                "examples": [
                    "Good evening! Welcome to our restaurant."
                ]
            }
        ],
        "transcription": "ɡʊd ˈiːvnɪŋ",
        "lang": "en"
    },
    {
        "id": "en_starter_greetings_009",
        "word": "nice to meet you",
        "translation": "nice to meet you",
        "level": "starter",
        "theme": "about_me",
        "sub_theme": "personal_info_first_contact",
        "language": "en",
        "emoji": "🤝",
        "form": "phrase",
        "definitions": [
            {
                "text": "Polite formula used when meeting someone for the first time.",
                "examples": [
                    "Hello David, nice to meet you."
                ]
            }
        ],
        "transcription": "naɪs tə miːt juː",
        "lang": "en"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Computer",
        "level": "starter",
        "theme": "technology",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Elektronisches Gerät zum Arbeiten.",
                "examples": [
                    "Ich arbeite jeden Tag am Computer."
                ]
            }
        ],
        "lang": "de",
        "transcription": "kɔmˈpjuːtɐ",
        "id": "de_starter_technology_001"
    },
    {
        "word": "Telefon",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Gerät zum Anrufen.",
                "examples": [
                    "Das Telefon klingelt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "teleˈfoːn",
        "id": "de_starter_technology_002"
    },
    {
        "word": "Handy",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mobiles Telefon.",
                "examples": [
                    "Mein Handy ist neu."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈhɛndi",
        "id": "de_starter_technology_003"
    },
    {
        "word": "Internet",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Weltweites Computernetzwerk.",
                "examples": [
                    "Ich suche Informationen im Internet."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɪntɐnɛt",
        "id": "de_starter_technology_004"
    },
    {
        "word": "E-Mail",
        "level": "starter",
        "theme": "technology",
        "emoji": "📧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Elektronische Nachricht.",
                "examples": [
                    "Ich schreibe eine E-Mail an meine Mutter."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈiːmɛɪ̯l",
        "id": "de_starter_technology_005"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

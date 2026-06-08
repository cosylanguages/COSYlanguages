(function() {
    const data = [
    {
        "word": "κόκκινο",
        "translation": "red",
        "level": "starter",
        "theme": "colours",
        "language": "el",
        "emoji": "🔴",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του αίματος.",
                "examples": [
                    "Ένα κόκκινο μήλο."
                ]
            }
        ],
        "transcription": "/ˈko.ci.no/"
    },
    {
        "word": "μπλε",
        "translation": "blue",
        "level": "starter",
        "theme": "colours",
        "language": "el",
        "emoji": "🔵",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του ουρανού.",
                "examples": [
                    "Η θάλασσα είναι μπλε."
                ]
            }
        ],
        "transcription": "/ble/"
    },
    {
        "word": "πράσινο",
        "translation": "green",
        "level": "starter",
        "theme": "colours",
        "language": "el",
        "emoji": "🟢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του γρασιδιού.",
                "examples": [
                    "Ένα πράσινο φύλλο."
                ]
            }
        ],
        "transcription": "/ˈpra.si.no/"
    },
    {
        "word": "κίτρινο",
        "translation": "yellow",
        "level": "starter",
        "theme": "colours",
        "language": "el",
        "emoji": "🟡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του ήλιου.",
                "examples": [
                    "Ένα κίτρινο λουλούδι."
                ]
            }
        ],
        "transcription": "/ˈci.tri.no/"
    },
    {
        "word": "λευκό",
        "translation": "white",
        "level": "starter",
        "theme": "colours",
        "language": "el",
        "emoji": "⚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του χιονιού.",
                "examples": [
                    "Ένα λευκό σύννεφο."
                ]
            }
        ],
        "transcription": "/lefˈko/"
    }
    ];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

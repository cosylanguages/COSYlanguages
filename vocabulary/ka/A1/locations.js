// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "საფრანგეთი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_001",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'საფრანგეთი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "იტალია",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_002",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'იტალია' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "რუსეთი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_003",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'რუსეთი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "საბერძნეთი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_004",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'საბერძნეთი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "ინგლისი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_005",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'ინგლისი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "ესპანეთი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_006",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'ესპანეთი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "აშშ",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_007",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'აშშ' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "პარიზი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_008",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'პარიზი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "ლონდონი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_009",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'ლონდონი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "რომი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_010",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'რომი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "მოსკოვი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_011",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'მოსკოვი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "ათენი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_012",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'ათენი' in ka.",
                "examples": []
            }
        ]
    },
    {
        "word": "ნიუ-იორკი",
        "level": "starter",
        "theme": "places",
        "id": "ka_starter_locations_013",
        "lang": "ka",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'ნიუ-იორკი' in ka.",
                "examples": []
            }
        ]
    }
]
    const lang = "ka";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

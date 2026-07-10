// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Ֆրանսիա",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_001",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ֆրանսիա' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Իտալիա",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_002",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Իտալիա' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Ռուսաստան",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_003",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ռուսաստան' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Հունաստան",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_004",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Հունաստան' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Անգլիա",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_005",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Անգլիա' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Իսպանիա",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_006",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Իսպանիա' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "ԱՄՆ",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_007",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'ԱՄՆ' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Փարիզ",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_008",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Փարիզ' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Լոնդոն",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_009",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Լոնդոն' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Հռոմ",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_010",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Հռոմ' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Մոսկվա",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_011",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Մոսկվա' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Աթենք",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_012",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Աթենք' in hy.",
                "examples": []
            }
        ]
    },
    {
        "word": "Նյու Յորք",
        "level": "starter",
        "theme": "places",
        "id": "hy_starter_locations_013",
        "lang": "hy",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Նյու Յորք' in hy.",
                "examples": []
            }
        ]
    }
]
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

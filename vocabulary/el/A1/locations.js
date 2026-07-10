// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Γαλλία",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_001",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Γαλλία' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Ιταλία",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_002",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ιταλία' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Ρωσία",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_003",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ρωσία' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Ελλάδα",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_004",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ελλάδα' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Αγγλία",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_005",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Αγγλία' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Ισπανία",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_006",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ισπανία' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "ΗΠΑ",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_007",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'ΗΠΑ' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Παρίσι",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_008",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Παρίσι' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Λονδίνο",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_009",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Λονδίνο' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Ρώμη",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_010",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Ρώμη' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Μόσχα",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_011",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Μόσχα' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Αθήνα",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_012",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Αθήνα' in el.",
                "examples": []
            }
        ]
    },
    {
        "word": "Νέα Υόρκη",
        "level": "starter",
        "theme": "places",
        "id": "el_starter_locations_013",
        "lang": "el",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Νέα Υόρκη' in el.",
                "examples": []
            }
        ]
    }
]
    const lang = "el";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

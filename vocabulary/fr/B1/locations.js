// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "fr_intermediate_places_001",
        "word": "Bretagne",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_002",
        "word": "Australie",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_003",
        "word": "Japon",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_004",
        "word": "Chine",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_005",
        "word": "Brésil",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_006",
        "word": "Inde",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_007",
        "word": "Tokyo",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_008",
        "word": "Sydney",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_009",
        "word": "Pékin",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_010",
        "word": "Rio de Janeiro",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_011",
        "word": "Le Caire",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "fr_intermediate_places_012",
        "word": "Delhi",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

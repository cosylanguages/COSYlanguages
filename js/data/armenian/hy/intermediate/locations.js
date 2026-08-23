// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "hy_intermediate_places_001",
        "word": "Ավստրալիա",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_002",
        "word": "Ճապոնիա",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_003",
        "word": "Չինաստան",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_004",
        "word": "Բրազիլիա",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_005",
        "word": "Հնդկաստան",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_006",
        "word": "Տոկիո",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_007",
        "word": "Սիդնեյ",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_008",
        "word": "Պեկին",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_009",
        "word": "Ռիո դե Ժանեյրո",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_010",
        "word": "Կահիրե",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "hy_intermediate_places_011",
        "word": "Դելի",
        "lang": "hy",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

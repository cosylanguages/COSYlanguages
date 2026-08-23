// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "el_intermediate_places_006",
        "word": "Πελοπόννησος",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_007",
        "word": "Αυστραλία",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_008",
        "word": "Ιαπωνία",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_009",
        "word": "Κίνα",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_010",
        "word": "Βραζιλία",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_011",
        "word": "Ινδία",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_012",
        "word": "Τόκιο",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_013",
        "word": "Σίδνεϊ",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_014",
        "word": "Πεκίνο",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_015",
        "word": "Ρίο ντε Τζανέιρο",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_016",
        "word": "Κάιρο",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_places_017",
        "word": "Δελχί",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "el";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

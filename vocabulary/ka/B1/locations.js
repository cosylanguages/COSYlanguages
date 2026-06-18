// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ka_intermediate_places_001",
        "word": "ავსტრალია",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_002",
        "word": "იაპონია",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_003",
        "word": "ჩინეთი",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_004",
        "word": "ბრაზილია",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_005",
        "word": "ინდოეთი",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_006",
        "word": "ტოკიო",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_007",
        "word": "სიდნეი",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_008",
        "word": "პეკინი",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_009",
        "word": "რიო-დე-ჟანეირო",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_010",
        "word": "კაირო",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ka_intermediate_places_011",
        "word": "დელი",
        "lang": "ka",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "ka";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

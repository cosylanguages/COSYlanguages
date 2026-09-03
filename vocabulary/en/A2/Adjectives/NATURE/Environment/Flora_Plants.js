(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-NAT-014",
            "word": "agricultural",
            "emoji": "🌾",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Relating to agriculture or farming.",
                            "examples": [
                                    "The valley is a rich agricultural region.",
                                    "Agricultural production increased this harvest."
                            ]
                    }
            ],
            "subtext": "farming, rural",
            "synonyms": [
                    "farming",
                    "rural"
            ],
            "transcription": "ˌæɡrɪˈkʌltʃərəl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "nature",
            "domain": "NATURE",
            "subcategory": "Environment",
            "pos_section": "Adjectives",
            "sub_subcategory": "Flora_Plants"
    }
    ];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();

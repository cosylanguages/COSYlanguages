// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "el_intermediate_social_070",
        "word": "κάνω κηπουρική",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Εργάζομαι σε έναν κήπο για την καλλιέργεια φυτών.",
                "examples": [
                    "Του αρέσει να κάνει κηπουρική τα σαββατοκύριακα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍🌾",
        "_legacy": {
            "group": "1st_conj",
            "classification": "regular",
            "aspect": "action",
            "v3": "έκανα κηπουρική",
            "auxiliary": "έχω"
        }
    },
    {
        "id": "el_intermediate_social_071",
        "word": "κάνω εθελοντισμό",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Προσφέρομαι να κάνω κάτι χωρίς να πληρωθώ.",
                "examples": [
                    "Κάνει εθελοντισμό στην τοπική τράπεζα τροφίμων."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "group": "1st_conj",
            "classification": "regular",
            "aspect": "action",
            "v3": "έκανα εθελοντισμό",
            "auxiliary": "έχω"
        }
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();
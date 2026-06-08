// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "κάνω κηπουρική",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "group": "1st_conj",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Εργάζομαι σε έναν κήπο για την καλλιέργεια φυτών.",
                "examples": [
                    "Του αρέσει να κάνει κηπουρική τα σαββατοκύριακα."
                ]
            }
        ],
        "v3": "έκανα κηπουρική",
        "auxiliary": "έχω"
    },
    {
        "word": "κάνω εθελοντισμό",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "group": "1st_conj",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Προσφέρομαι να κάνω κάτι χωρίς να πληρωθώ.",
                "examples": [
                    "Κάνει εθελοντισμό στην τοπική τράπεζα τροφίμων."
                ]
            }
        ],
        "v3": "έκανα εθελοντισμό",
        "auxiliary": "έχω"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();
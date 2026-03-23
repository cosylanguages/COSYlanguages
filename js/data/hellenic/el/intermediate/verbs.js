(function() {
    const data = [
    {
        "word": "κάνω κηπουρική",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "definitions": [
            {
                "text": "Εργάζομαι σε έναν κήπο για την καλλιέργεια φυτών.",
                "examples": [
                    "Του αρέσει να κάνει κηπουρική τα σαββατοκύριακα."
                ]
            }
        ]
    },
    {
        "word": "κάνω εθελοντισμό",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "definitions": [
            {
                "text": "Προσφέρομαι να κάνω κάτι χωρίς να πληρωθώ.",
                "examples": [
                    "Κάνει εθελοντισμό στην τοπική τράπεζα τροφίμων."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

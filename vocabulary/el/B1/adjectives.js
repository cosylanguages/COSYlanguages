// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "el_intermediate_work_001",
        "word": "αυτοαπασχολούμενος",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το να εργάζεσαι για τον εαυτό σου παρά για μια εταιρεία.",
                "examples": [
                    "Είναι αυτοαπασχολούμενη ως γραφίστρια."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👨‍💻",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_environment_001",
        "word": "βιώσιμος",
        "lang": "el",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Η χρήση των πόρων με τρόπο που δεν βλάπτει το περιβάλλον για το μέλλον.",
                "examples": [
                    "Χρειαζόμαστε πιο βιώσιμους τρόπους διαβίωσης."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "♻️",
        "_legacy": {
            "subtext": ""
        }
    }
];
    const lang = "el";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

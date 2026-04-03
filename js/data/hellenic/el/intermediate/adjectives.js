(function() {
    const data = [
    {
        "word": "αυτοαπασχολούμενος",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👨‍💻",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["ελεύθερος επαγγελματίας"],
        "definitions": [
            {
                "text": "Το να εργάζεσαι για τον εαυτό σου παρά για μια εταιρεία.",
                "examples": [
                    "Είναι αυτοαπασχολούμενη ως γραφίστρια."
                ]
            }
        ]
    },
    {
        "word": "βιώσιμος",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "♻️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["αειφόρος"],
        "definitions": [
            {
                "text": "Η χρήση των πόρων με τρόπο που δεν βλάπτει το περιβάλλον για το μέλλον.",
                "examples": [
                    "Χρειαζόμαστε πιο βιώσιμους τρόπους διαβίωσης."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

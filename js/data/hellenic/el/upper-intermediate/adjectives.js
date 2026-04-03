(function() {
    const data = [
    {
        "word": "βιώσιμος",
        "level": "upper-intermediate",
        "theme": "environment_policy_B2",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Αυτός που μπορεί να διατηρηθεί χωρίς να βλάπτει το περιβάλλον.",
                "examples": [
                    "Χρειαζόμαστε βιώσιμη ανάπτυξη."
                ]
            }
        ]
    },
    {
        "word": "πολιτικός",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🏛️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["δημόσιος", "κοινωνικός"],
        "definitions": [
            {
                "text": "Που σχετίζεται με την πόλη, την κοινωνία ή τους πολίτες.",
                "examples": [
                    "Η ψηφοφορία είναι πολιτικό καθήκον."
                ]
            }
        ]
    },
    {
        "word": "χρόνιος",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "χρόνιος πόνος",
        "opposite": "οξύς",
        "definitions": [
            {
                "text": "Που διαρκεί πολύ χρόνο. Για μια κατάσταση υγείας που είναι επίμονη.",
                "examples": [
                    "Υποφέρει από χρόνιο πόνο στην πλάτη."
                ]
            }
        ]
    },
    {
        "word": "προληπτικός",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "🛡️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["προληπτική ιατρική"],
        "definitions": [
            {
                "text": "Σχεδιασμένος για να σταματήσει κάτι κακό να συμβεί.",
                "examples": [
                    "Η προληπτική ιατρική μειώνει το μακροπρόθεσμο κόστος."
                ]
            }
        ]
    },
    {
        "word": "ηθικός",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που σχετίζεται με τις αρχές του σωστού και του λάθους.",
                "examples": [
                    "Πήρε μια ηθική απόφαση να αρνηθεί τα χρήματα."
                ]
            }
        ]
    },
    {
        "word": "δεοντολογικός",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "🤔⚖️",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["ηθικός"],
        "definitions": [
            {
                "text": "Που σχετίζεται με την ηθική. Ακολουθώντας αποδεκτούς κανόνες ορθής διαγωγής.",
                "examples": [
                    "Οι εταιρείες πρέπει να λειτουργούν με ηθικό τρόπο."
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

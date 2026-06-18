(function() {
    const data = [
    {
        "id": "el_upper_intermediate_environment_policy_001",
        "lang": "el",
        "word": "βιώσιμος",
        "level": "upper_intermediate",
        "theme": "environment_policy",
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
        "id": "el_upper_intermediate_politics_governance_001",
        "lang": "el",
        "word": "πολιτικός",
        "level": "upper_intermediate",
        "theme": "politics_governance",
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
        "id": "el_upper_intermediate_serious_illness_treatment_001",
        "lang": "el",
        "word": "χρόνιος",
        "level": "upper_intermediate",
        "theme": "serious_illness_treatment",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "χρόνιος πόνος",
        "antonyms": ["οξύς"],
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
        "id": "el_upper_intermediate_serious_illness_treatment_002",
        "lang": "el",
        "word": "προληπτικός",
        "level": "upper_intermediate",
        "theme": "serious_illness_treatment",
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
        "id": "el_upper_intermediate_ethical_dilemmas_001",
        "lang": "el",
        "word": "ηθικός",
        "level": "upper_intermediate",
        "theme": "ethical_dilemmas",
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
        "id": "el_upper_intermediate_ethical_dilemmas_002",
        "lang": "el",
        "word": "δεοντολογικός",
        "level": "upper_intermediate",
        "theme": "ethical_dilemmas",
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

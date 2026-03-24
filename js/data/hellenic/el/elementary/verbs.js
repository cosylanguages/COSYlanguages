(function() {
    const data = [
    {
        "word": "χορός",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "τραγούδι",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "form": "verb"
    },
    {
        "word": "περιμένω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "υπηρετώ",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "Group B2",
        "classification": "regular"
    },
    {
        "word": "χτίζω",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "φτάνω",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "σκοτώνω",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "παραμένω",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "προτείνω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "σηκώνω",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "απαιτώ",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "Group B2",
        "classification": "regular"
    },
    {
        "word": "αναφέρω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "αποφασίζω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "εξηγώ",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "Group B2",
        "classification": "regular"
    },
    {
        "word": "αναπτύσσω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "υποστηρίζω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Βοηθώ ή ενθαρρύνω κάποιον.",
                "examples": [
                    "Η οικογένειά μου υποστηρίζει τις αποφάσεις μου."
                ]
            }
        ],
        "tenses": {
            "present_simple": {
                "positive": [
                    "υποστηρίζω",
                    "υποστηρίζεις",
                    "υποστηρίζει",
                    "υποστηρίζει",
                    "υποστηρίζει",
                    "υποστηρίζουμε",
                    "υποστηρίζετε",
                    "υποστηρίζουν"
                ],
                "negative": [
                    "δεν υποστηρίζω",
                    "δεν υποστηρίζεις",
                    "δεν υποστηρίζει",
                    "δεν υποστηρίζει",
                    "δεν υποστηρίζει",
                    "δεν υποστηρίζουμε",
                    "δεν υποστηρίζετε",
                    "δεν υποστηρίζουν"
                ]
            }
        }
    },
    {
        "word": "χτυπώ",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "group": "Group B1",
        "classification": "regular"
    },
    {
        "word": "παράγω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "group": "Group A (irregular)",
        "classification": "irregular"
    },
    {
        "word": "αντιμετωπίζω",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "καλύπτω",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "περιγράφω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "πιάζω",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "Group A",
        "classification": "regular"
    },
    {
        "word": "κάνω αίτηση",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω ένα επίσημο αίτημα για μια θέση εργασίας.",
                "examples": [
                    "Έκανε αίτηση για τη θέση του διευθυντή."
                ]
            }
        ]
    },
    {
        "word": "προσλαμβάνω",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω σε κάποιον μια δουλειά.",
                "examples": [
                    "Η εταιρεία προσέλαβε δύο νέα άτομα."
                ]
            }
        ]
    },
    {
        "word": "βγαίνω στη σύνταξη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "definitions": [
            {
                "text": "Σταματώ να εργάζομαι επειδή έφτασα σε μια ορισμένη ηλικία.",
                "examples": [
                    "Ο πατέρας μου θα βγει στη σύνταξη του χρόνου."
                ]
            }
        ]
    },
    {
        "word": "έχω την οικονομική δυνατότητα",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω αρκετά χρήματα για να πληρώσω κάτι.",
                "examples": [
                    "Δεν έχουμε την οικονομική δυνατότητα για ένα μεγαλύτερο διαμέρισμα."
                ]
            }
        ]
    },
    {
        "word": "μαλώνω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Διαφωνώ με κάποιον με θυμωμένο τρόπο.",
                "examples": [
                    "Μερικές φορές μαλώνουν για τα χρήματα."
                ]
            }
        ]
    },
    {
        "word": "εμπιστεύομαι",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Πιστεύω ότι κάποιος είναι ειλικρινής και αξιόπιστος.",
                "examples": [
                    "Πρέπει να εμπιστεύεσαι τον σύντροφό σου."
                ]
            }
        ]
    },
    {
        "word": "συμφωνώ",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω την ίδια γνώμη με κάποιον άλλον.",
                "examples": [
                    "Δεν συμφωνούμε πάντα."
                ]
            }
        ]
    },
    {
        "word": "συμβιβάζομαι",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Δέχομαι λιγότερα από όσα θέλω ώστε και οι δύο πλευρές να είναι ικανοποιημένες.",
                "examples": [
                    "Οι καλές σχέσεις χρειάζονται συμβιβασμό."
                ]
            }
        ]
    },
    {
        "word": "ανακυκλώνω",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "definitions": [
            {
                "text": "Επεξεργάζομαι χρησιμοποιημένα υλικά ώστε να μπορούν να χρησιμοποιηθούν ξανά.",
                "examples": [
                    "Ανακυκλώνουμε χαρτί και γυαλί."
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

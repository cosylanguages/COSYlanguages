(function() {
    const data = [
    {
        "word": "περιμένω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "περιμένω το λεωφορείο / περιμένω κάποιον",
        "definitions": [
            {
                "text": "Μένω κάπου μέχρι να έρθει κάποιος.",
                "examples": [
                    "Περιμένω το τρένο δέκα λεπτά."
                ]
            }
        ],
        "v3": "περίμενα"
    },
    {
        "word": "υπηρετώ",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "Group B2",
        "classification": "regular",
        "aspect": "action",
        "subtext": "υπηρετώ στο στρατό",
        "definitions": [
            {
                "text": "Εκτελώ μια υπηρεσία.",
                "examples": [
                    "Υπηρετεί στην εταιρεία χρόνια."
                ]
            }
        ],
        "v3": "υπηρέτησα"
    },
    {
        "word": "χτίζω",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "χτίζω σπίτι / χτίζω καριέρα",
        "definitions": [
            {
                "text": "Κατασκευάζω ένα κτίριο.",
                "examples": [
                    "Χτίζουν ένα νέο ξενοδοχείο."
                ]
            }
        ],
        "v3": "έχτισα"
    },
    {
        "word": "φτάνω",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "φτάνω στο σπίτι / φτάνω στο τέλος",
        "definitions": [
            {
                "text": "Έρχομαι σε ένα μέρος.",
                "examples": [
                    "Φτάσαμε αργά το βράδυ."
                ]
            }
        ],
        "v3": "έφτασα"
    },
    {
        "word": "σκοτώνω",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "σκοτώνω την ώρα μου",
        "definitions": [
            {
                "text": "Προκαλώ θάνατο.",
                "examples": [
                    "Το κρύο σκότωσε τα φυτά."
                ]
            }
        ],
        "v3": "σκότωσα"
    },
    {
        "word": "παραμένω",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "παραμένω ήρεμος / παραμένω στο σπίτι",
        "definitions": [
            {
                "text": "Μένω στην ίδια κατάσταση.",
                "examples": [
                    "Παραμένω στη διάθεσή σας."
                ]
            }
        ],
        "v3": "παρέμεινα"
    },
    {
        "word": "προτείνω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "προτείνω μια ιδέα / προτείνω λύση",
        "definitions": [
            {
                "text": "Λέω μια ιδέα για εξέταση.",
                "examples": [
                    "Προτείνω να φύγουμε τώρα."
                ]
            }
        ],
        "v3": "πρότεινα"
    },
    {
        "word": "σηκώνω",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "σηκώνω το χέρι / σηκώνω βάρη",
        "definitions": [
            {
                "text": "Μετακινώ κάτι προς τα πάνω.",
                "examples": [
                    "Σήκωσε το χέρι σου αν ξέρεις."
                ]
            }
        ],
        "v3": "σήκωσα"
    },
    {
        "word": "απαιτώ",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "Group B2",
        "classification": "regular",
        "aspect": "action",
        "subtext": "απαιτώ σεβασμό / απαιτώ απάντηση",
        "definitions": [
            {
                "text": "Ζητώ κάτι επιτακτικά.",
                "examples": [
                    "Η δουλειά απαιτεί υπομονή."
                ]
            }
        ],
        "v3": "απαίτησα"
    },
    {
        "word": "αναφέρω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "αναφέρω ένα πρόβλημα",
        "definitions": [
            {
                "text": "Λέω κάτι επίσημα.",
                "examples": [
                    "Πρέπει να αναφέρω τι είδα."
                ]
            }
        ],
        "v3": "ανέφερα"
    },
    {
        "word": "αποφασίζω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "αποφασίζω να φύγω",
        "definitions": [
            {
                "text": "Παίρνω μια απόφαση.",
                "examples": [
                    "Αποφάσισα να αλλάξω δουλειά."
                ]
            }
        ],
        "v3": "αποφάσισα"
    },
    {
        "word": "εξηγώ",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "Group B2",
        "classification": "regular",
        "aspect": "action",
        "subtext": "εξηγώ τον κανόνα / εξηγώ γιατί",
        "definitions": [
            {
                "text": "Κάνω κάτι κατανοητό.",
                "examples": [
                    "Ο δάσκαλος εξηγεί το μάθημα."
                ]
            }
        ],
        "v3": "εξήγησα"
    },
    {
        "word": "αναπτύσσω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "αναπτύσσω μια δεξιότητα",
        "definitions": [
            {
                "text": "Κάνω κάτι να μεγαλώσει.",
                "examples": [
                    "Αναπτύσσει ένα νέο λογισμικό."
                ]
            }
        ],
        "v3": "ανέπτυξα"
    },
    {
        "word": "υποστηρίζω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "υποστηρίζω έναν φίλο / υποστηρίζω μια ομάδα",
        "definitions": [
            {
                "text": "Βοηθώ ή ενθαρρύνω κάποιον.",
                "examples": [
                    "Η οικογένειά μου υποστηρίζει τις αποφάσεις μου."
                ]
            }
        ],
        "v3": "υποστήριξα",
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
        "classification": "regular",
        "aspect": "action",
        "subtext": "χτυπώ την πόρτα / χτυπώ την μπάλα",
        "definitions": [
            {
                "text": "Δίνω χτύπημα.",
                "examples": [
                    "Χτύπησε την μπάλα δυνατά."
                ]
            }
        ],
        "v3": "χτύπησα"
    },
    {
        "word": "παράγω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "group": "Group A (irregular)",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "παράγω ενέργεια",
        "definitions": [
            {
                "text": "Φτιάχνω ή δημιουργώ κάτι.",
                "examples": [
                    "Το εργοστάσιο παράγει αυτοκίνητα."
                ]
            }
        ],
        "v3": "παρήγαγα"
    },
    {
        "word": "αντιμετωπίζω",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "αντιμετωπίζω ένα πρόβλημα",
        "definitions": [
            {
                "text": "Διαχειρίζομαι μια κατάσταση.",
                "examples": [
                    "Πρέπει να αντιμετωπίσουμε τους φόβους μας."
                ]
            }
        ],
        "v3": "αντιμετώπισα"
    },
    {
        "word": "καλύπτω",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "καλύπτω με κουβέρτα / καλύπτω τα έξοδα",
        "definitions": [
            {
                "text": "Βάζω κάτι πάνω από κάτι άλλο.",
                "examples": [
                    "Κάλυψε το τραπέζι με ένα πανί."
                ]
            }
        ],
        "v3": "κάλυψα"
    },
    {
        "word": "περιγράφω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "περιγράφω κάποιον / περιγράφω μια εικόνα",
        "definitions": [
            {
                "text": "Λέω πώς είναι κάποιος ή κάτι.",
                "examples": [
                    "Μπορείς να περιγράψεις τι έγινε;"
                ]
            }
        ],
        "v3": "περιέγραψα"
    },
    {
        "word": "πιάζω",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "subtext": "πιάζω ψάρια / πιάζω την μπάλα",
        "definitions": [
            {
                "text": "Κρατώ κάτι που κινείται.",
                "examples": [
                    "Προσπάθησε να πιάσεις την μπάλα!"
                ]
            }
        ],
        "v3": "έπιασα"
    },
    {
        "word": "κάνω αίτηση",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Κάνω ένα επίσημο αίτημα για μια θέση εργασίας.",
                "examples": [
                    "Έκανε αίτηση για τη θέση του διευθυντή."
                ]
            }
        ],
        "v3": "έκανα αίτηση"
    },
    {
        "word": "προσλαμβάνω",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Δίνω σε κάποιον μια δουλειά.",
                "examples": [
                    "Η εταιρεία προσέλαβε δύο νέα άτομα."
                ]
            }
        ],
        "v3": "προσέλαβα"
    },
    {
        "word": "βγαίνω στη σύνταξη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Σταματώ να εργάζομαι επειδή έφτασα σε μια ορισμένη ηλικία.",
                "examples": [
                    "Ο πατέρας μου θα βγει στη σύνταξη του χρόνου."
                ]
            }
        ],
        "v3": "βγήκα στη σύνταξη"
    },
    {
        "word": "έχω την οικονομική δυνατότητα",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Έχω αρκετά χρήματα για να πληρώσω κάτι.",
                "examples": [
                    "Δεν έχουμε την οικονομική δυνατότητα για ένα μεγαλύτερο διαμέρισμα."
                ]
            }
        ],
        "v3": "είχα τη δυνατότητα"
    },
    {
        "word": "μαλώνω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Διαφωνώ με κάποιον με θυμωμένο τρόπο.",
                "examples": [
                    "Μερικές φορές μαλώνουν για τα χρήματα."
                ]
            }
        ],
        "v3": "μάλωσα"
    },
    {
        "word": "εμπιστεύομαι",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "Group A (passive)",
        "classification": "regular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Πιστεύω ότι κάποιος είναι ειλικρινής και αξιόπιστος.",
                "examples": [
                    "Πρέπει να εμπιστεύεσαι τον σύντροφό σου."
                ]
            }
        ],
        "v3": "εμπιστεύτηκα"
    },
    {
        "word": "συμφωνώ",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "group": "Group B1",
        "classification": "regular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Έχω την ίδια γνώμη με κάποιον άλλον.",
                "examples": [
                    "Δεν συμφωνούμε πάντα."
                ]
            }
        ],
        "v3": "συμφώνησα"
    },
    {
        "word": "συμβιβάζομαι",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "Group A (passive)",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Δέχομαι λιγότερα από όσα θέλω ώστε και οι δύο πλευρές να είναι ικανοποιημένες.",
                "examples": [
                    "Οι καλές σχέσεις χρειάζονται συμβιβασμό."
                ]
            }
        ],
        "v3": "συμβιβάστηκα"
    },
    {
        "word": "ανακυκλώνω",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "group": "Group A",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Επεξεργάζομαι χρησιμοποιημένα υλικά ώστε να μπορούν να χρησιμοποιηθούν ξανά.",
                "examples": [
                    "Ανακυκλώνουμε χαρτί και γυαλί."
                ]
            }
        ],
        "v3": "ανακύκλωσα"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

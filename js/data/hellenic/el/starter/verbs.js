(function() {
    const data = [
    {
        "word": "ξυπνάω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "ξυπνάω νωρίς, ξυπνάω στις 7 π.μ.",
        "opposite": "κοιμάμαι",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Σταματάω να κοιμάμαι και ανοίγω τα μάτια μου.",
                "examples": [
                    "Ξυπνάω στις επτά.",
                    "Τι ώρα ξυπνάς;"
                ]
            }
        ]
    },
    {
        "word": "δουλεύω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "δουλεύω σε γραφείο, δουλεύω σκληρά",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω μια εργασία για να κερδίσω χρήματα.",
                "examples": [
                    "Δουλεύω πέντε μέρες την εβδομάδα.",
                    "Δουλεύει σε τράπεζα."
                ]
            }
        ]
    },
    {
        "word": "κοιμάμαι",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "κοιμάμαι 8 ώρες, πάω για ύπνο",
        "opposite": "ξυπνάω",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Ξεκουράζομαι με τα μάτια κλειστά.",
                "examples": [
                    "Πρέπει να κοιμηθώ.",
                    "Το μωρό κοιμάται."
                ]
            }
        ]
    },
    {
        "word": "διαβάζω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "διαβάζω ένα βιβλίο, διαβάζω εφημερίδα",
        "opposite": "γράφω",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Κοιτάζω και καταλαβαίνω γραμμένες λέξεις.",
                "examples": [
                    "Διαβάζω ένα βιβλίο κάθε βράδυ.",
                    "Μπορεί να διαβάσει ελληνικά."
                ]
            }
        ]
    },
    {
        "word": "είμαι",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "Υπάρχω ή βρίσκομαι κάπου.",
                "examples": [
                    "Είμαι μαθητής.",
                    "Είναι χαρούμενη."
                ]
            }
        ]
    },
    {
        "word": "έχω",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Κατέχω κάτι.",
                "examples": [
                    "Έχω ένα κόκκινο αυτοκίνητο.",
                    "Έχουμε δύο γάτες."
                ]
            }
        ]
    },
    {
        "word": "πηγαίνω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι από το ένα μέρος στο άλλο.",
                "examples": [
                    "Πηγαίνω στο σχολείο με το λεωφορείο.",
                    "Ας πάμε σπίτι."
                ]
            }
        ]
    },
    {
        "word": "τρώω",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "τρώω ένα μήλο, τρώω βραδινό",
        "opposite": "πίνω",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω τροφή στο στόμα μου και την καταπίνω.",
                "examples": [
                    "Τρώω ένα μήλο κάθε μέρα.",
                    "Τι θέλεις να φας;"
                ]
            }
        ]
    },
    {
        "word": "πίνω",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "πίνω νερό, πίνω καφέ",
        "opposite": "τρώω",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Παίρνω υγρό στο στόμα μου και το καταπίνω.",
                "examples": [
                    "Πίνω πολύ νερό.",
                    "Θέλεις να πιεις κάτι;"
                ]
            }
        ]
    },
    {
        "word": "κάνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκτελώ μια ενέργεια ή δραστηριότητα.",
                "examples": [
                    "Κάνω τα μαθήματά μου το απόγευμα.",
                    "Τι κάνεις;"
                ]
            }
        ]
    },
    {
        "word": "μιλάω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ τη φωνή μου για να πω λέξεις.",
                "examples": [
                    "Μιλάω ελληνικά και αγγλικά.",
                    "Μιλάτε αργά, παρακαλώ."
                ]
            }
        ]
    },
    {
        "word": "ξέρω",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω πληροφορίες στο μυαλό μου.",
                "examples": [
                    "Ξέρω την απάντηση.",
                    "Ξέρεις πού είναι αυτός;"
                ]
            }
        ]
    },
    {
        "word": "σκέφτομαι",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ το μυαλό μου για να έχω ιδέες ή γνώμες.",
                "examples": [
                    "Σκέφτομαι ότι είναι καλή ιδέα.",
                    "Τι σκέφτεσαι;"
                ]
            }
        ]
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "βλέπω τηλεόραση, βλέπω μια ταινία",
        "definitions": [
            {
                "text": "Κοιτάζω κάτι για κάποιο χρονικό διάστημα.",
                "examples": [
                    "Βλέπω τηλεόραση το βράδυ.",
                    "Βλέπουν τα πουλιά."
                ]
            }
        ]
    },
    {
        "word": "θέλω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιθυμώ να έχω ή να κάνω κάτι.",
                "examples": [
                    "Θέλω ένα ποτήρι νερό.",
                    "Θέλω να πάω σπίτι."
                ]
            }
        ]
    },
    {
        "word": "αγαπάω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb",
        "definitions": [
            {
                "text": "Νιώθω μεγάλη στοργή για κάποιον ή κάτι.",
                "examples": [
                    "Αγαπάω την οικογένειά μου.",
                    "Αγαπάω τα ταξίδια."
                ]
            }
        ]
    },
    {
        "word": "γράφω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Σχηματίζω γράμματα σε χαρτί ή σε οθόνη.",
                "examples": [
                    "Γράφω στο ημερολόγιό μου κάθε μέρα.",
                    "Γράφει βιβλία για παιδιά."
                ]
            }
        ]
    },
    {
        "word": "έρχομαι",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι προς το μέρος που βρίσκεται ο ομιλητής.",
                "examples": [
                    "Έλα εδώ, παρακαλώ.",
                    "Έρχεται στο πάρτι."
                ]
            }
        ]
    },
    {
        "word": "δίνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Παραδίδω κάτι σε κάποιον.",
                "examples": [
                    "Μπορείς να μου δώσεις αυτό το βιβλίο;",
                    "Δίνω δώρα στην οικογένειά μου."
                ]
            }
        ]
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb",
        "subtext": "παίρνω το λεωφορείο, παίρνω μια φωτογραφία",
        "definitions": [
            {
                "text": "Πιάνω ή αποκτώ κάτι.",
                "examples": [
                    "Παίρνω το λεωφορείο για τη δουλειά.",
                    "Βγάζει (παίρνει) όμορφες φωτογραφίες."
                ]
            }
        ]
    },
    {
        "word": "βρίσκω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "Ανακαλύπτω κάτι μετά από αναζήτηση.",
                "examples": [
                    "Δεν μπορώ να βρω τα κλειδιά μου.",
                    "Βρήκες τον δρόμο σου;"
                ]
            }
        ]
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκφράζω κάτι με λόγια.",
                "examples": [
                    "Πες μου μια ιστορία.",
                    "Της είπε την αλήθεια."
                ]
            }
        ]
    },
    {
        "word": "ρωτάω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb",
        "definitions": [
            {
                "text": "Απευθύνω μια ερώτηση σε κάποιον.",
                "examples": [
                    "Πρέπει να κάνω μια ερώτηση.",
                    "Με ρώτησε για βοήθεια."
                ]
            }
        ]
    },
    {
        "word": "νιώθω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb",
        "definitions": [
            {
                "text": "Αισθάνομαι ένα συναίσθημα ή μια σωματική αίσθηση.",
                "examples": [
                    "Νιώθω χαρούμενος σήμερα.",
                    "Κρυώνεις;"
                ]
            }
        ]
    },
    {
        "word": "προσπαθώ",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιχειρώ να κάνω κάτι.",
                "examples": [
                    "Προσπαθώ να ασκούμαι κάθε μέρα.",
                    "Δοκίμασε (προσπάθησε) ένα από αυτά τα κουλουράκια."
                ]
            }
        ]
    },
    {
        "word": "φεύγω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "Απομακρύνομαι από ένα μέρος.",
                "examples": [
                    "Φεύγω για τη δουλειά στις 8 π.μ.",
                    "Μην αφήνεις (φεύγεις) την τσάντα σου εδώ."
                ]
            }
        ]
    },
    {
        "word": "τηλεφωνώ",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb",
        "definitions": [
            {
                "text": "Καλώ κάποιον στο τηλέφωνο ή φωνάζω το όνομά του.",
                "examples": [
                    "Τηλεφώνησέ μου αργότερα.",
                    "Φώναξε το όνομά μου."
                ]
            }
        ]
    },
    {
        "word": "χρησιμοποιώ",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ ένα αντικείμενο για να ολοκληρώσω μια εργασία.",
                "examples": [
                    "Χρησιμοποιώ υπολογιστή για τη δουλειά.",
                    "Μπορώ να χρησιμοποιήσω το στυλό σου;"
                ]
            }
        ]
    },
    {
        "word": "ξεκινάω",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Αρχίζω να κάνω κάτι.",
                "examples": [
                    "Η ταινία ξεκινάει στις 7 μ.μ.",
                    "Ας ξεκινήσουμε τη συνάντηση."
                ]
            }
        ]
    },
    {
        "word": "βοηθάω",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι για κάποιον για να διευκολύνω μια εργασία.",
                "examples": [
                    "Μπορείς να με βοηθήσεις;",
                    "Βοηθάω τη μητέρα μου με τα ψώνια."
                ]
            }
        ]
    },
    {
        "word": "παίζω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι για διασκέδαση ή σε ένα παιχνίδι.",
                "examples": [
                    "Παίζω ποδόσφαιρο με τους φίλους μου.",
                    "Της αρέσει να παίζει βιντεοπαιχνίδια."
                ]
            }
        ]
    },
    {
        "word": "τρέχω",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι πολύ γρήγορα με τα πόδια μου.",
                "examples": [
                    "Τρέχω στο πάρκο.",
                    "Τρέχει για να προλάβει το λεωφορείο."
                ]
            }
        ]
    },
    {
        "word": "ζω",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω την κατοικία μου σε ένα συγκεκριμένο μέρος.",
                "examples": [
                    "Ζω στο Λονδίνο.",
                    "Ζει με την οικογένειά της."
                ]
            }
        ]
    },
    {
        "word": "φέρνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Μεταφέρω κάποιον ή κάτι μαζί μου σε ένα μέρος.",
                "examples": [
                    "Σε παρακαλώ, φέρε μου ένα ποτήρι νερό.",
                    "Φέρνει το μεσημεριανό του στη δουλειά."
                ]
            }
        ]
    },
    {
        "word": "κάθομαι",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Ξεκουράζω το βάρος μου στα οπίσθια αντί για τα πόδια μου.",
                "examples": [
                    "Σε παρακαλώ, κάθισε κάτω.",
                    "Κάθομαι σε μια καρέκλα."
                ]
            }
        ]
    },
    {
        "word": "στέκομαι",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι στα πόδια μου σε όρθια θέση.",
                "examples": [
                    "Σε παρακαλώ, στάσου όρθιος.",
                    "Στέκεται κοντά στην πόρτα."
                ]
            }
        ]
    },
    {
        "word": "χάνω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποτυγχάνω να νικήσω ή δεν μπορώ να βρω κάτι.",
                "examples": [
                    "Δεν θέλω να χάσω το παιχνίδι.",
                    "Συχνά χάνω τα κλειδιά μου."
                ]
            }
        ]
    },
    {
        "word": "πληρώνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω χρήματα για κάτι.",
                "examples": [
                    "Πληρώνω για τον καφέ μου.",
                    "Πώς θέλετε να πληρώσετε;"
                ]
            }
        ]
    },
    {
        "word": "συναντώ",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Βλέπω και μιλάω με κάποιον για πρώτη φορά.",
                "examples": [
                    "Χαίρομαι που σε γνωρίζω (συναντώ).",
                    "Συναντιόμαστε κάθε Παρασκευή."
                ]
            }
        ]
    },
    {
        "word": "μαθαίνω",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκτώ γνώσεις ή μια δεξιότητα.",
                "examples": [
                    "Θέλω να μάθω ελληνικά.",
                    "Τα παιδιά μαθαίνουν γρήγορα."
                ]
            }
        ]
    },
    {
        "word": "αλλάζω",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι διαφορετικό.",
                "examples": [
                    "Θέλω να αλλάξω τα ρούχα μου.",
                    "Ο καιρός αλλάζει γρήγορα."
                ]
            }
        ]
    },
    {
        "word": "καταλαβαίνω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "Γνωρίζω τη σημασία κάποιου πράγματος.",
                "examples": [
                    "Δεν καταλαβαίνω αυτή τη λέξη.",
                    "Καταλαβαίνεις ελληνικά;"
                ]
            }
        ]
    },
    {
        "word": "σταματάω",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb",
        "definitions": [
            {
                "text": "Τελειώνω αυτό που κάνω ή σταματάω να κινούμαι.",
                "examples": [
                    "Σταμάτα το αυτοκίνητο.",
                    "Σε παρακαλώ, σταμάτα να μιλάς."
                ]
            }
        ]
    },
    {
        "word": "προσθέτω",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω πράγματα μαζί για να φτιάξω μια μεγαλύτερη ομάδα.",
                "examples": [
                    "Πρόσθεσε λίγη ζάχαρη στο τσάι.",
                    "Πόσο κάνει πέντε συν πέντε;"
                ]
            }
        ]
    },
    {
        "word": "ξοδεύω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ χρήματα για να πληρώσω για πράγματα.",
                "examples": [
                    "Ξοδεύω πολλά χρήματα για φαγητό."
                ]
            }
        ]
    },
    {
        "word": "ανοίγω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινώ κάτι έτσι ώστε ένα άνοιγμα να μην καλύπτεται.",
                "examples": [
                    "Άνοιξε την πόρτα.",
                    "Μπορείς να ανοίξεις το παράθυρο;"
                ]
            }
        ]
    },
    {
        "word": "νικάω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι ο καλύτερος σε ένα παιχνίδι ή διαγωνισμό.",
                "examples": [
                    "Θέλουμε να νικήσουμε τον αγώνα."
                ]
            }
        ]
    },
    {
        "word": "περπατάω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι με τα πόδια μου σε κανονική ταχύτητα.",
                "examples": [
                    "Περπατάω στο σχολείο.",
                    "Ας κάνουμε μια βόλτα (περπατήσουμε) στο πάρκο."
                ]
            }
        ]
    },
    {
        "word": "θυμάμαι",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατάω πληροφορίες στο μυαλό μου.",
                "examples": [
                    "Θυμάμαι το όνομά σου.",
                    "Με θυμάσαι;"
                ]
            }
        ]
    },
    {
        "word": "αγοράζω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκτώ κάτι πληρώνοντας χρήματα γι' αυτό.",
                "examples": [
                    "Θέλω να αγοράσω ένα νέο τηλέφωνο.",
                    "Πού μπορώ να αγοράσω γάλα;"
                ]
            }
        ]
    },
    {
        "word": "πεθαίνω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Σταματάω να ζω.",
                "examples": [
                    "Τα φυτά πεθαίνουν χωρίς νερό."
                ]
            }
        ]
    },
    {
        "word": "στέλνω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι να πάει σε ένα μέρος.",
                "examples": [
                    "Στέλνω ένα email κάθε πρωί.",
                    "Μπορείς να μου στείλεις μια φωτογραφία;"
                ]
            }
        ]
    },
    {
        "word": "πέφτω",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινούμαι προς τα κάτω προς το έδαφος.",
                "examples": [
                    "Τα φύλλα πέφτουν το φθινόπωρο.",
                    "Πρόσεχε, μην πέσεις."
                ]
            }
        ]
    },
    {
        "word": "κόβω",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ μαχαίρι ή ψαλίδι για να χωρίσω κάτι.",
                "examples": [
                    "Κόβω το ψωμί.",
                    "Μπορείς να κόψεις το χαρτί;"
                ]
            }
        ]
    },
    {
        "word": "περνάω",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Προσπερνάω κάτι ή πετυχαίνω σε μια εξέταση.",
                "examples": [
                    "Περνάω από το πάρκο στο δρόμο για το σπίτι.",
                    "Ελπίζω να περάσω το τεστ."
                ]
            }
        ]
    },
    {
        "word": "πουλάω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω κάτι σε κάποιον για χρήματα.",
                "examples": [
                    "Πουλάνε φρούτα στην αγορά."
                ]
            }
        ]
    },
    {
        "word": "τραβάω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινώ κάτι προς το μέρος μου.",
                "examples": [
                    "Τράβα την πόρτα για να την ανοίξεις."
                ]
            }
        ]
    },
    {
        "word": "σπρώχνω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινώ κάτι μακριά από μένα.",
                "examples": [
                    "Σπρώξε το κουμπί.",
                    "Σπρώχνω το καρότσι των ψωνίων."
                ]
            }
        ]
    },
    {
        "word": "ελπίζω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb",
        "definitions": [
            {
                "text": "Θέλω να συμβεί κάτι.",
                "examples": [
                    "Ελπίζω να νιώσεις καλύτερα.",
                    "Ελπίζουμε να σας δούμε σύντομα."
                ]
            }
        ]
    },
    {
        "word": "μαγειρεύω",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb",
        "definitions": [
            {
                "text": "Προετοιμάζω το φαγητό ζεσταίνοντάς το.",
                "examples": [
                    "Μαγειρεύω βραδινό για την οικογένειά μου.",
                    "Της αρέσει να μαγειρεύει."
                ]
            }
        ]
    },
    {
        "word": "κλείνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινώ κάτι έτσι ώστε ένα άνοιγμα να καλύπτεται.",
                "examples": [
                    "Κλείσε την πόρτα.",
                    "Μην ξεχάσεις να κλείσεις το παράθυρο."
                ]
            }
        ]
    },
    {
        "word": "τελειώνω",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Ολοκληρώνω μια ενέργεια.",
                "examples": [
                    "Τελειώνω τη δουλειά μου στις 5 μ.μ.",
                    "Τελείωσες το βιβλίο σου;"
                ]
            }
        ]
    },
    {
        "word": "νοικιάζω",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Πληρώνω χρήματα για να χρησιμοποιήσω ένα σπίτι ή διαμέρισμα που ανήκει σε κάποιον άλλο.",
                "examples": [
                    "Νοικιάζουμε ένα διαμέρισμα στην πόλη."
                ]
            }
        ]
    },
    {
        "word": "αποταμιεύω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατάω χρήματα αντί να τα ξοδεύω.",
                "examples": [
                    "Αποταμιεύει χρήματα κάθε μήνα."
                ]
            }
        ]
    },
    {
        "word": "κοστίζω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια ορισμένη τιμή.",
                "examples": [
                    "Το διαμέρισμα κοστίζει πολύ."
                ]
            }
        ]
    },
    {
        "word": "προσκαλώ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ζητάω από κάποιον να έρθει σε ένα μέρος ή σε μια εκδήλωση.",
                "examples": [
                    "Προσκαλώ φίλους για δείπνο."
                ]
            }
        ]
    },
    {
        "word": "ταξιδεύω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηγαίνω σε διαφορετικά μέρη.",
                "examples": [
                    "Μου αρέσει να ταξιδεύω.",
                    "Ταξιδεύουμε με τρένο."
                ]
            }
        ]
    },
    {
        "word": "καθαρίζω",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧹",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι καθαρό.",
                "examples": [
                    "Καθαρίζω το δωμάτιό μου κάθε εβδομάδα."
                ]
            }
        ]
    },
    {
        "word": "ασκούμαι",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω σωματική δραστηριότητα για την υγεία.",
                "examples": [
                    "Ασκούμαι κάθε πρωί."
                ]
            }
        ]
    },
    {
        "word": "πηγαινοέρχομαι",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "form": "verb",
        "subtext": "διαδρομή",
        "definitions": [
            {
                "text": "Κάνω τη διαδρομή μεταξύ σπιτιού και δουλειάς.",
                "examples": [
                    "Πηγαινοέρχομαι στη δουλειά με το τρένο."
                ]
            }
        ]
    },
    {
        "word": "πλένω",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧼",
        "form": "verb",
        "definitions": [
            {
                "text": "Καθαρίζω με νερό και σαπούνι.",
                "examples": [
                    "Πλένω τα χέρια μου.",
                    "Μπορείς να πλύνεις το αυτοκίνητο;"
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

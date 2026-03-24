(function() {
    const data = [
    {
        "word": "είμαι",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "subtext": "είμαι κουρασμένος / είμαι χαρούμενος / είμαι στη δουλειά / είμαι έτοιμος",
        "form": "verb",
        "definitions": [
            {
                "text": "Υπάρχω, βρίσκομαι σε μια κατάσταση.",
                "examples": [
                    "Είμαι κουρασμένος. Είναι γιατρός. Είμαστε αργοπορημένοι."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "auxiliary",
        "v3": "ήμουν"
    },
    {
        "word": "έχω",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "subtext": "έχω δουλειά / έχω πρόβλημα / έχω χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Κατέχω κάτι, αισθάνομαι κάτι.",
                "examples": [
                    "Έχω δουλειά. Έχει αυτοκίνητο. Έχει πονοκέφαλο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "είχα"
    },
    {
        "word": "κάνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "κάνω τη δουλειά / κάνω τα ψώνια / κάνω γυμναστική / δεν κάνω τίποτα",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκτελώ μια ενέργεια ή δραστηριότητα.",
                "examples": [
                    "Κάνω τη δουλειά μου κάθε μέρα. Κάνει τα ψώνια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έκανα"
    },
    {
        "word": "πηγαίνω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "πηγαίνω στη δουλειά / πηγαίνω σπίτι / βγαίνω έξω / πηγαίνω για ψώνια",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι από ένα μέρος σε άλλο.",
                "examples": [
                    "Πηγαίνω στη δουλειά με το λεωφορείο. Πηγαίνει στον γιατρό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πήγα"
    },
    {
        "word": "έρχομαι",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "subtext": "έρχομαι σπίτι / έρχομαι στη δουλειά / επιστρέφω / έλα εδώ",
        "opposite": "πηγαίνω",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Φτάνω ή κινούμαι προς το μέρος του ομιλητή.",
                "examples": [
                    "Έρχεται στο γραφείο στις εννιά. Έρχεται σπίτι αργά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "ήρθα"
    },
    {
        "word": "τρώω",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "τρώω πρωινό / τρώω μεσημεριανό / τρώω βραδινό / τρώω έξω",
        "opposite": "πίνω",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Καταναλώνω τροφή.",
                "examples": [
                    "Τρώμε βραδινό στις επτά. Τρώει μεσημεριανό στο γραφείο του."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "irregular",
        "v3": "έφαγα"
    },
    {
        "word": "πίνω",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "πίνω καφέ / πίνω τσάι / πίνω νερό / πίνω μπίρα",
        "opposite": "τρώω",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Καταναλώνω υγρό.",
                "examples": [
                    "Πίνει καφέ κάθε πρωί. Πίνω νερό."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "ήπια"
    },
    {
        "word": "κοιμάμαι",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "κοιμάμαι καλά / κοιμάμαι άσχημα / κοιμάμαι οκτώ ώρες / κοιμάμαι αργά",
        "opposite": "ξυπνάω",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Αναπαύομαι με κλειστά μάτια.",
                "examples": [
                    "Κοιμάται επτά ώρες τη νύχτα. Κοιμάμαι άσχημα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "κοιμήθηκα"
    },
    {
        "word": "δουλεύω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "δουλεύω από το σπίτι / δουλεύω πλήρες ωράριο / δουλεύω σκληρά / δουλεύω μέχρι αργά",
        "form": "verb",
        "definitions": [
            {
                "text": "Εργάζομαι για να κερδίσω χρήματα.",
                "examples": [
                    "Δουλεύει σε νοσοκομείο. Δουλεύω από το σπίτι."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "δούλεψα"
    },
    {
        "word": "ζω",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "subtext": "ζω σε διαμέρισμα / ζω μόνος / ζω με κάποιον / ζω στο εξωτερικό",
        "opposite": "πεθαίνω",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι ζωντανός, κατοικώ κάπου.",
                "examples": [
                    "Ζει σε ένα διαμέρισμα κοντά στο κέντρο. Ζούμε μαζί."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v3": "έζησα"
    },
    {
        "word": "μου αρέσει",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "👍",
        "subtext": "μου αρέσει η δουλειά / μου αρέσουν τα ταξίδια / μου αρέσει η ιδέα",
        "form": "verb",
        "definitions": [
            {
                "text": "Βρίσκω κάτι ευχάριστο.",
                "examples": [
                    "Μου αρέσει η δουλειά μου. Της αρέσει να μαγειρεύει. Του αρέσει ο καφές."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "impersonal",
        "v3": "μου άρεσε"
    },
    {
        "word": "θέλω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "subtext": "θέλω δουλειά / θέλω να φύγω / θέλω περισσότερα χρήματα / θέλω βοήθεια",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιθυμώ κάτι.",
                "examples": [
                    "Θέλω έναν καφέ. Θέλει μια καλύτερη δουλειά. Θέλει να βγει στη σύνταξη."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "ήθελα"
    },
    {
        "word": "χρειάζομαι",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🆘",
        "subtext": "χρειάζομαι βοήθεια / χρειάζομαι χρόνο / χρειάζομαι χρήματα / χρειάζεται να ξεκουραστώ",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω ανάγκη από κάτι.",
                "examples": [
                    "Χρειάζομαι ένα διάλειμμα. Χρειάζεται βοήθεια. Χρειαζόμαστε περισσότερο χρόνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "a_passive",
        "v3": "χρειάστηκα"
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "subtext": "βλέπω γιατρό / βλέπω φίλους / βλέπω το πρόβλημα / βλέπω καθαρά",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιλαμβάνομαι με την όραση.",
                "examples": [
                    "Βλέπω τον γιατρό μου αύριο. Βλέπει το πρόβλημα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "είδα"
    },
    {
        "word": "ακούω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👂",
        "subtext": "ακούω νέα / ακούω κάποιον / ακούω έναν ήχο / ακούω καθαρά",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιλαμβάνομαι με την ακοή.",
                "examples": [
                    "Ακούω το ξυπνητήρι κάθε πρωί. Με ακούτε;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "άκουσα"
    },
    {
        "word": "νιώθω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "subtext": "νιώθω κουρασμένος / νιώθω καλύτερα / νιώθω καλά / νιώθω στρες",
        "form": "verb",
        "definitions": [
            {
                "text": "Αισθάνομαι κάτι σωματικά ή ψυχικά.",
                "examples": [
                    "Νιώθω κουρασμένος. Νιώθει στρες. Νιώθει καλύτερα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "ένιωσα"
    },
    {
        "word": "ξέρω",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "ξέρω κάποιον / ξέρω την απάντηση / ξέρω ένα μέρος / ξέρω πώς να κάνω",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω γνώση ή πληροφορία για κάτι.",
                "examples": [
                    "Ξέρω το όνομά του. Ξέρει την απάντηση. Τον ξέρετε;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "ήξερα"
    },
    {
        "word": "νομίζω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "subtext": "σκέφτομαι / πιστεύω ότι / νομίζω ότι / σκέφτομαι προσεκτικά",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια γνώμη ή πεποίθηση.",
                "examples": [
                    "Νομίζω ότι είναι καλή ιδέα. Σκέφτεται τη δουλειά της."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "νόμισα"
    },
    {
        "word": "μιλάω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "μιλάω με κάποιον / μιλάω ελληνικά / μιλάω καθαρά / μιλάω σε μια συνάντηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Λέω λέξεις, επικοινωνώ προφορικά.",
                "examples": [
                    "Μιλάει γαλλικά. Μιλάει με τον διευθυντή της κάθε μέρα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "μίλησα"
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗨️",
        "subtext": "λέω γεια / λέω ναι / λέω όχι / λέω κάτι",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκφράζω κάτι με λόγια.",
                "examples": [
                    "Λέει γεια κάθε πρωί. Λέει ότι είναι δύσκολο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "είπα"
    },
    {
        "word": "ρωτάω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "subtext": "κάνω μια ερώτηση / ζητάω βοήθεια / ρωτάω κάποιον / ζητάω για",
        "form": "verb",
        "definitions": [
            {
                "text": "Θέτω ένα ερώτημα ή ζητώ κάτι.",
                "examples": [
                    "Κάνει πολλές ερωτήσεις. Ζητάω συμβουλή από το αφεντικό μου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "ρώτησα"
    },
    {
        "word": "δίνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "δίνω συμβουλές / δίνω χρήματα / δίνω ένα δώρο / δίνω πληροφορίες",
        "opposite": "παίρνω",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Παραδίδω κάτι σε κάποιον.",
                "examples": [
                    "Μου δίνει πολλή δουλειά. Δίνει συμβουλές."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έδωσα"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "παίρνω το λεωφορείο / παίρνω φάρμακο / κάνω διάλειμμα / παίρνω χρόνο",
        "opposite": "δίνω",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατώ και μετακινώ κάτι, χρησιμοποιώ.",
                "examples": [
                    "Παίρνω το λεωφορείο για τη δουλειά. Παίρνει το φάρμακό της."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πήρα"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "βρίσκω δουλειά / κουράζομαι / γίνομαι καλύτερος / πάω σπίτι",
        "form": "verb",
        "definitions": [
            {
                "text": "Λαμβάνω, αποκτώ ή γίνομαι.",
                "examples": [
                    "Παίρνω καλό μισθό. Κουράζεται γρήγορα. Παίρνει προαγωγή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πήρα"
    },
    {
        "word": "πληρώνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "subtext": "πληρώνω το ενοίκιο / πληρώνω με κάρτα / πληρώνω με μετρητά / πληρώνω λογαριασμό",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω χρήματα για κάτι.",
                "examples": [
                    "Πληρώνω το ενοίκιο κάθε μήνα. Πληρώνει με κάρτα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πλήρωσα"
    },
    {
        "word": "αγοράζω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "αγοράζω φαγητό / αγοράζω εισιτήριο / αγοράζω online / αγοράζω σπίτι",
        "opposite": "πουλάω",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκτώ κάτι με χρήματα.",
                "examples": [
                    "Αγοράζει φαγητό online. Θέλει να αγοράσει ένα διαμέρισμα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "αγόρασα"
    },
    {
        "word": "ανοίγω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "ανοίγω μια πόρτα / ανοίγω λογαριασμό / ανοίγω μαγαζί / ανοίγω στις εννιά",
        "opposite": "κλείνω",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι να μην είναι κλειστό, ή ξεκινώ.",
                "examples": [
                    "Ανοίγει το γραφείο στις οκτώ. Ανοίγει τραπεζικό λογαριασμό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "άνοιξα"
    },
    {
        "word": "κλείνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "κλείνω μια πόρτα / κλείνω στις έξι / κλείνω λογαριασμό / κλείνω τη συνάντηση",
        "opposite": "ανοίγω",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι να μην είναι ανοιχτό, ή τελειώνω.",
                "examples": [
                    "Το γραφείο κλείνει στις έξι. Κλείνει το λάπτοπ της."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έκλεισα"
    },
    {
        "word": "ξεκινάω",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "subtext": "ξεκινάω δουλειά / ξεκινάω μια συνάντηση / ξεκινάω μια νέα δουλειά / ξεκινάω νωρίς",
        "opposite": "τελειώνω",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Αρχίζω να κάνω κάτι.",
                "examples": [
                    "Ξεκινάω δουλειά στις οκτώ και μισή. Ξεκινάει μια νέα δουλειά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "ξεκίνησα"
    },
    {
        "word": "τελειώνω",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "subtext": "τελειώνω τη δουλειά / τελειώνω ένα έργο / τελειώνω νωρίς / τελειώνω αργά",
        "opposite": "ξεκινάω",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ολοκληρώνω κάτι, φτάνω στο τέλος.",
                "examples": [
                    "Τελειώνει τη δουλειά στις πέντε. Τελειώνει την αναφορά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "τελείωσα"
    },
    {
        "word": "χρησιμοποιώ",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "subtext": "χρησιμοποιώ τηλέφωνο / χρησιμοποιώ τη συγκοινωνία / χρησιμοποιώ υπολογιστή / χρησιμοποιώ τον χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Θέτω κάτι σε λειτουργία για έναν σκοπό.",
                "examples": [
                    "Χρησιμοποιώ το τηλέφωνό μου για τα πάντα. Χρησιμοποιεί τη συγκοινωνία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "χρησιμοποίησα"
    },
    {
        "word": "περπατάω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "περπατάω προς τη δουλειά / περπατάω προς το σπίτι / περπατάω αργά / περπατάω κάθε μέρα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινούμαι με τα πόδια.",
                "examples": [
                    "Περπατάει προς τη δουλειά κάθε μέρα. Περπατάει στο διάλειμμα για φαγητό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "περπάτησα"
    },
    {
        "word": "οδηγώ",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "οδηγώ προς τη δουλειά / οδηγώ το αυτοκίνητο / οδηγώ προς το σπίτι / οδηγώ προσεκτικά",
        "form": "verb",
        "definitions": [
            {
                "text": "Χειρίζομαι ένα όχημα.",
                "examples": [
                    "Οδηγεί προς τη δουλειά. Οδηγεί ένα εταιρικό αυτοκίνητο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "οδήγησα"
    },
    {
        "word": "καλώ",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "subtext": "παίρνω τηλέφωνο / καλώ σε συνάντηση / παίρνω πίσω / δηλώνω ασθένεια",
        "form": "verb",
        "definitions": [
            {
                "text": "Τηλεφωνώ σε κάποιον.",
                "examples": [
                    "Καλώ το αφεντικό μου κάθε πρωί. Καλεί σε συνάντηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "κάλεσα"
    },
    {
        "word": "ξυπνάω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "ξυπνάω νωρίς, ξυπνάω στις 7",
        "opposite": "κοιμάμαι",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Σταματώ να κοιμάμαι.",
                "examples": [
                    "Ξυπνάω στις επτά.",
                    "Τι ώρα ξυπνάς;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "ξύπνησα"
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "βλέπω τηλεόραση, βλέπω ταινία",
        "definitions": [
            {
                "text": "Κοιτάζω κάτι.",
                "examples": [
                    "Βλέπω τηλεόραση το βράδυ.",
                    "Βλέπουν τα πουλιά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "είδα"
    },
    {
        "word": "διαβάζω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "διαβάζω βιβλίο, διαβάζω εφημερίδα",
        "opposite": "γράφω",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Κοιτάζω και καταλαβαίνω γραπτές λέξεις.",
                "examples": [
                    "Διαβάζω ένα βιβλίο κάθε βράδυ.",
                    "Ξέρει να διαβάζει ελληνικά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "διάβασα"
    },
    {
        "word": "γράφω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Σχηματίζω γράμματα σε χαρτί ή οθόνη.",
                "examples": [
                    "Γράφω στο ημερολόγιό μου κάθε μέρα.",
                    "Γράφει βιβλία για παιδιά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έγραψα"
    },
    {
        "word": "προσκαλώ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ζητώ από κάποιον να έρθει κάπου.",
                "examples": [
                    "Προσκαλώ φίλους για δείπνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "προσκάλεσα"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

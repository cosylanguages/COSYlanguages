(function() {
    const data = [
    {
        "word": "είμαι",
        "level": "baby",
        "theme": "name_greeting_A0",
        "emoji": "👤",
        "subtext": "είμαι κουρασμένος / είμαι χαρούμενος / είμαι στη δουλειά",
        "form": "verb",
        "definitions": [
            {
                "text": "Υπάρχω, βρίσκομαι σε μια κατάσταση.",
                "examples": [
                    "Είμαι κουρασμένος.",
                    "Είναι γιατρός.",
                    "Είμαστε αργοπορημένοι."
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
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "έχω δουλειά / έχω πρόβλημα / έχω χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Κατέχω κάτι, αισθάνομαι κάτι.",
                "examples": [
                    "Έχω δουλειά.",
                    "Έχει αυτοκίνητο.",
                    "Έχει πονοκέφαλο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "είχα"
    },
    {
        "word": "νιώθω",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🌡️",
        "subtext": "νιώθω κουρασμένος / νιώθω καλύτερα / νιώθω καλά",
        "form": "verb",
        "definitions": [
            {
                "text": "Αισθάνομαι κάτι σωματικά ή ψυχικά.",
                "examples": [
                    "Νιώθω κουρασμένος.",
                    "Νιώθει στρες."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "ένιωσα"
    },
    {
        "word": "δίνω",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "δίνω συμβουλές / δίνω χρήματα / δίνω ένα δώρο",
        "form": "verb",
        "definitions": [
            {
                "text": "Παραδίδω κάτι σε κάποιον.",
                "examples": [
                    "Μου δίνει πολλή δουλειά.",
                    "Δίνει συμβουλές."
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
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "παίρνω το λεωφορείο / παίρνω φάρμακο / κάνω διάλειμμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατώ και μετακινώ κάτι, χρησιμοποιώ.",
                "examples": [
                    "Παίρνω το λεωφορείο για τη δουλειά.",
                    "Παίρνει το φάρμακό της."
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
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "βρίσκω δουλειά / κουράζομαι / γίνομαι καλύτερος",
        "form": "verb",
        "definitions": [
            {
                "text": "Λαμβάνω, αποκτώ ή γίνομαι.",
                "examples": [
                    "Παίρνω καλό μισθό.",
                    "Κουράζεται γρήγορα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πήρα"
    },
    {
        "word": "βάζω",
        "level": "baby",
        "theme": "furniture_objects_A0",
        "emoji": "📥",
        "subtext": "βάζω / βάζω κάτω / βάζω το τηλέφωνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Τοποθετώ κάτι κάπου.",
                "examples": [
                    "Βάλε την τσάντα σου εδώ.",
                    "Βάζει χρήματα στην τράπεζα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έβαλα"
    },
    {
        "word": "φτιάχνω",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "φτιάχνω καφέ / παίρνω απόφαση / κάνω λάθος",
        "form": "verb",
        "definitions": [
            {
                "text": "Δημιουργώ ή παράγω κάτι.",
                "examples": [
                    "Φτιάχνω καφέ το πρωί.",
                    "Παίρνει μια απόφαση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έφτιαξα"
    },
    {
        "word": "κάνω",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "κάνω τη δουλειά / κάνω τα ψώνια / κάνω γυμναστική",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκτελώ μια ενέργεια ή δραστηριότητα.",
                "examples": [
                    "Κάνω τη δουλειά μου κάθε μέρα.",
                    "Κάνει τα ψώνια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έκανα"
    },
    {
        "word": "χρησιμοποιώ",
        "level": "baby",
        "theme": "basic_technology_devices_A0",
        "emoji": "🛠️",
        "subtext": "χρησιμοποιώ τηλέφωνο / χρησιμοποιώ τη συγκοινωνία",
        "form": "verb",
        "definitions": [
            {
                "text": "Θέτω κάτι σε λειτουργία για έναν σκοπό.",
                "examples": [
                    "Χρησιμοποιώ το τηλέφωνό μου για τα πάντα.",
                    "Χρησιμοποιεί τη συγκοινωνία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "χρησιμοποίησα"
    },
    {
        "word": "ανοίγω",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "ανοίγω μια πόρτα / ανοίγω λογαριασμό",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι να μην είναι κλειστό, ή ξεκινώ.",
                "examples": [
                    "Ανοίγει το γραφείο στις οκτώ.",
                    "Ανοίγει τραπεζικό λογαριασμό."
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
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "κλείνω μια πόρτα / κλείνω στις έξι / κλείνω λογαριασμό",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι να μην είναι ανοιχτό, ή τελειώνω.",
                "examples": [
                    "Το γραφείο κλείνει στις έξι.",
                    "Κλείνει το λάπτοπ της."
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
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "ξεκινάω δουλειά / ξεκινάω μια συνάντηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Αρχίζω να κάνω κάτι.",
                "examples": [
                    "Ξεκινάω δουλειά στις οκτώ και μισή.",
                    "Ξεκινάει μια νέα δουλειά."
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
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "τελειώνω τη δουλειά / τελειώνω ένα έργο",
        "form": "verb",
        "definitions": [
            {
                "text": "Ολοκληρώνω κάτι, φτάνω στο τέλος.",
                "examples": [
                    "Τελειώνει τη δουλειά στις πέντε.",
                    "Τελειώνει την αναφορά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "τελείωσα"
    },
    {
        "word": "βοηθάω",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "🤝",
        "subtext": "βοηθάω κάποιον / βοηθάω με / ζητάω βοήθεια",
        "form": "verb",
        "definitions": [
            {
                "text": "Προσφέρω βοήθεια σε κάποιον.",
                "examples": [
                    "Βοηθάει τους συναδέλφους του.",
                    "Μπορείτε να με βοηθήσετε;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "βοήθησα"
    },
    {
        "word": "προσπαθώ",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "προσπαθώ να κάνω / δοκιμάζω / δοκιμάζω κάτι νέο",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω μια προσπάθεια να κάνω κάτι.",
                "examples": [
                    "Προσπαθώ πάντα να κάνω το καλύτερο στη δουλειά.",
                    "Δοκιμάστε τον καφέ εδώ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "προσπάθησα"
    },
    {
        "word": "δείχνω",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📽️",
        "subtext": "δείχνω σε κάποιον / δείχνω πώς / δείχνω έγγραφο",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιτρέπω σε κάποιον να δει κάτι.",
                "examples": [
                    "Μου δείχνει τον χάρτη.",
                    "Δείχνει τη δουλειά του."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έδειξα"
    },
    {
        "word": "βρίσκω",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "subtext": "βρίσκω δουλειά / ανακαλύπτω / βρίσκω χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Ανακαλύπτω κάτι κρυμμένο ή χαμένο.",
                "examples": [
                    "Βρίσκω τη δουλειά ενδιαφέρουσα.",
                    "Βρήκε μια νέα δουλειά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "βρήκα"
    },
    {
        "word": "κρατάω",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "συνεχίζω / μένω σιωπηλός / κρατάω επαφή",
        "form": "verb",
        "definitions": [
            {
                "text": "Διατηρώ κάτι στην κατοχή μου.",
                "examples": [
                    "Κρατήστε την απόδειξη.",
                    "Κρατάει το τηλέφωνό της ανοιχτό όλη μέρα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "κράτησα"
    },
    {
        "word": "χάνω",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📉",
        "subtext": "χάνω τη δουλειά / χάνω χρήματα / χάνω βάρος",
        "form": "verb",
        "definitions": [
            {
                "text": "Δεν έχω πια κάτι.",
                "examples": [
                    "Έχασα τα κλειδιά μου.",
                    "Έχασε τη δουλειά της."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έχασα"
    },
    {
        "word": "κόβω",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "κόβω έξοδα / κόβω στη μέση / κόβω χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Χωρίζω κάτι με ένα αιχμηρό εργαλείο.",
                "examples": [
                    "Κόβει το διάλειμμα για μεσημεριανό.",
                    "Αυτό κόβει τα έξοδα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έκοψα"
    },
    {
        "word": "στρίβω",
        "level": "baby",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "ανάβω / σβήνω / στρίβω αριστερά / δεξιά",
        "form": "verb",
        "definitions": [
            {
                "text": "Αλλάζω κατεύθυνση.",
                "examples": [
                    "Στρίψτε αριστερά στο γραφείο.",
                    "Σβήνει το φως."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έστριψα"
    },
    {
        "word": "φέρνω",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🎁",
        "subtext": "φέρνω κάποιον / φέρνω φαγητό / φέρνω έγγραφο",
        "form": "verb",
        "definitions": [
            {
                "text": "Μεταφέρω κάτι μαζί μου.",
                "examples": [
                    "Φέρτε την ταυτότητά σας στη συνέντευξη.",
                    "Φέρνει μεσημεριανό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έφερα"
    },
    {
        "word": "λέω",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗨️",
        "subtext": "λέω γεια / λέω ναι / λέω όχι",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκφράζω κάτι με λόγια.",
                "examples": [
                    "Λέει γεια κάθε πρωί.",
                    "Λέει ότι είναι δύσκολο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "είπα"
    },
    {
        "word": "λέω",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "🗣️",
        "subtext": "λέω την αλήθεια / λέω μια ιστορία / λέω σε κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω πληροφορίες σε κάποιον.",
                "examples": [
                    "Λέει την αλήθεια.",
                    "Μου λέει για τη μέρα της."
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
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "❓",
        "subtext": "κάνω μια ερώτηση / ζητάω βοήθεια / ρωτάω κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Θέτω ένα ερώτημα ή ζητώ κάτι.",
                "examples": [
                    "Κάνει πολλές ερωτήσεις.",
                    "Ζητάω συμβουλή από το αφεντικό μου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "ρώτησα"
    },
    {
        "word": "μιλάω",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗣️",
        "subtext": "μιλάω με κάποιον / μιλάω ελληνικά / μιλάω καθαρά",
        "form": "verb",
        "definitions": [
            {
                "text": "Λέω λέξεις, επικοινωνώ προφορικά.",
                "examples": [
                    "Μιλάει γαλλικά.",
                    "Μιλάει με τον διευθυντή της κάθε μέρα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "μίλησα"
    },
    {
        "word": "μιλάω",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "💬",
        "subtext": "μιλάω με κάποιον / μιλάω για / μιλάω ανοιχτά",
        "form": "verb",
        "definitions": [
            {
                "text": "Συνομιλώ με κάποιον.",
                "examples": [
                    "Μιλάμε για τη δουλειά κάθε Δευτέρα.",
                    "Μιλάει πολύ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "μίλησα"
    },
    {
        "word": "καλώ",
        "level": "baby",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "παίρνω τηλέφωνο / καλώ σε συνάντηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Τηλεφωνώ σε κάποιον.",
                "examples": [
                    "Καλώ το αφεντικό μου κάθε πρωί.",
                    "Καλεί σε συνάντηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "κάλεσα"
    },
    {
        "word": "γράφω",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "γράφω γράμμα / γράφω αναφορά / γράφω σημειώσεις",
        "form": "verb",
        "definitions": [
            {
                "text": "Σχηματίζω γράμματα σε χαρτί ή οθόνη.",
                "examples": [
                    "Γράφω email όλη μέρα.",
                    "Γράφει μια αναφορά κάθε Παρασκευή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έγραψα"
    },
    {
        "word": "διαβάζω",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "διαβάζω βιβλίο / διαβάζω ειδήσεις / διαβάζω προσεκτικά",
        "form": "verb",
        "definitions": [
            {
                "text": "Κοιτάζω και καταλαβαίνω γραπτές λέξεις.",
                "examples": [
                    "Διαβάζει τις ειδήσεις κάθε πρωί.",
                    "Διαβάζει συμβόλαια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "διάβασα"
    },
    {
        "word": "ακούω",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "ακούω μουσική / ακούω προσεκτικά / ακούω podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Προσέχω έναν ήχο.",
                "examples": [
                    "Ακούω podcast στη δουλειά.",
                    "Ακούει προσεκτικά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "άκουσα"
    },
    {
        "word": "απαντάω",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📞",
        "subtext": "απαντάω σε ερώτηση / απαντάω στο τηλέφωνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Λέω κάτι ως αντίδραση σε ερώτηση.",
                "examples": [
                    "Απαντάει γρήγορα σε όλα τα email.",
                    "Απάντησε στο τηλέφωνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "απάντησα"
    },
    {
        "word": "επαναλαμβάνω",
        "level": "baby",
        "theme": "classroom_language_A0",
        "emoji": "🔁",
        "subtext": "επαναλαμβάνω αυτό / επαναλαμβάνομαι",
        "form": "verb",
        "definitions": [
            {
                "text": "Λέω ή κάνω κάτι ξανά.",
                "examples": [
                    "Παρακαλώ επαναλάβετε.",
                    "Επανέλαβε τις οδηγίες δύο φορές."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "επανέλαβα"
    },
    {
        "word": "πηγαίνω",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚶",
        "subtext": "πηγαίνω στη δουλειά / πηγαίνω σπίτι / βγαίνω έξω",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι από ένα μέρος σε άλλο.",
                "examples": [
                    "Πηγαίνω στη δουλειά με το λεωφορείο.",
                    "Πηγαίνει στον γιατρό."
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
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏃‍♂️",
        "subtext": "έρχομαι σπίτι / έρχομαι στη δουλειά / επιστρέφω",
        "form": "verb",
        "definitions": [
            {
                "text": "Φτάνω ή κινούμαι προς το μέρος του ομιλητή.",
                "examples": [
                    "Έρχεται στο γραφείο στις εννιά.",
                    "Έρχεται σπίτι αργά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "ήρθα"
    },
    {
        "word": "περπατάω",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "περπατάω προς τη δουλειά / περπατάω αργά",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινούμαι με τα πόδια.",
                "examples": [
                    "Περπατάει προς τη δουλειά κάθε μέρα.",
                    "Περπατάει στο διάλειμμα."
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
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "οδηγώ προς τη δουλειά / οδηγώ το αυτοκίνητο",
        "form": "verb",
        "definitions": [
            {
                "text": "Χειρίζομαι ένα όχημα.",
                "examples": [
                    "Οδηγεί προς τη δουλειά.",
                    "Οδηγεί ένα εταιρικό αυτοκίνητο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "οδήγησα"
    },
    {
        "word": "πετάω",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "subtext": "πετάω για μια πόλη / πετάω business class",
        "form": "verb",
        "definitions": [
            {
                "text": "Ταξιδεύω με αεροπλάνο.",
                "examples": [
                    "Πετάει στο Παρίσι για συναντήσεις.",
                    "Μισεί να πετάει."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "πέταξα"
    },
    {
        "word": "φτάνω",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏁",
        "subtext": "φτάνω στη δουλειά / φτάνω αργά / στην ώρα μου",
        "form": "verb",
        "definitions": [
            {
                "text": "Φτάνω σε ένα μέρος.",
                "examples": [
                    "Φτάνει στο γραφείο στις εννιά.",
                    "Το τρένο φτάνει αργά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έφτασα"
    },
    {
        "word": "φεύγω",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚪",
        "subtext": "φεύγω από το σπίτι / από τη δουλειά / φεύγω νωρίς",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηγαίνω μακριά από ένα μέρος.",
                "examples": [
                    "Φεύγω από το σπίτι στις οκτώ.",
                    "Έφυγε από την εταιρεία πέρυσι."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έφυγα"
    },
    {
        "word": "κουνάω",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "μετακομίζω / μετακομίζω στην πόλη / προχωράω",
        "form": "verb",
        "definitions": [
            {
                "text": "Αλλάζω θέση ή σπίτι.",
                "examples": [
                    "Μετακόμισαν σε νέο διαμέρισμα.",
                    "Μετακινείται σε άλλη ομάδα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "κούνησα"
    },
    {
        "word": "επιστρέφω",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🔙",
        "subtext": "επιστρέφω σπίτι / στη δουλειά / επιστρέφω κλήση",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηγαίνω πίσω σε ένα μέρος.",
                "examples": [
                    "Επιστρέφει από το ταξίδι την Παρασκευή.",
                    "Επέστρεψε την κλήση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "επέστρεψα"
    },
    {
        "word": "ταξιδεύω",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "✈️",
        "subtext": "ταξιδεύω για δουλειά / στο εξωτερικό / με τρένο",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηγαίνω από ένα μέρος σε άλλο.",
                "examples": [
                    "Ταξιδεύει για δουλειά μία φορά το μήνα.",
                    "Του αρέσει να ταξιδεύει."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "ταξίδεψα"
    },
    {
        "word": "τρώω",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍎",
        "subtext": "τρώω πρωινό / τρώω μεσημεριανό / τρώω βραδινό",
        "form": "verb",
        "definitions": [
            {
                "text": "Καταναλώνω τροφή.",
                "examples": [
                    "Τρώμε βραδινό στις επτά.",
                    "Τρώει μεσημεριανό στο γραφείο του."
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
        "level": "baby",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "πίνω καφέ / πίνω τσάι / πίνω νερό",
        "form": "verb",
        "definitions": [
            {
                "text": "Καταναλώνω υγρό.",
                "examples": [
                    "Πίνει καφέ κάθε πρωί.",
                    "Πίνω νερό."
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
        "level": "baby",
        "theme": "times_day_A0",
        "emoji": "😴",
        "subtext": "κοιμάμαι καλά / κοιμάμαι άσχημα / κοιμάμαι οκτώ ώρες",
        "form": "verb",
        "definitions": [
            {
                "text": "Αναπαύομαι με κλειστά μάτια.",
                "examples": [
                    "Κοιμάται επτά ώρες τη νύχτα.",
                    "Κοιμάμαι άσχημα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "κοιμήθηκα"
    },
    {
        "word": "μαγειρεύω",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "μαγειρεύω δείπνο / μαγειρεύω φαγητό",
        "form": "verb",
        "definitions": [
            {
                "text": "Προετοιμάζω φαγητό.",
                "examples": [
                    "Μαγειρεύει δείπνο κάθε βράδυ.",
                    "Μαγειρεύει για την ομάδα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "μαγείρεψα"
    },
    {
        "word": "καθαρίζω",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "καθαρίζω το σπίτι / καθαρίζω την κουζίνα",
        "form": "verb",
        "definitions": [
            {
                "text": "Βγάζω τη βρωμιά.",
                "examples": [
                    "Καθαρίζω το διαμέρισμα τα Σάββατα.",
                    "Καθαρίζει το γραφείο του κάθε μέρα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "καθάρισα"
    },
    {
        "word": "φοράω",
        "level": "baby",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "subtext": "φοράω κοστούμι / φοράω γυαλιά",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω ρούχα πάνω μου.",
                "examples": [
                    "Φοράει κοστούμι στη δουλειά.",
                    "Φοράει γυαλιά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "φόρεσα"
    },
    {
        "word": "πλένω",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "πλένω τα πιάτα / πλένω τα χέρια",
        "form": "verb",
        "definitions": [
            {
                "text": "Καθαρίζω με νερό.",
                "examples": [
                    "Πλένει το αυτοκίνητο κάθε Κυριακή.",
                    "Πλύνε τα χέρια σου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έπλυνα"
    },
    {
        "word": "αγοράζω",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "αγοράζω φαγητό / αγοράζω εισιτήριο / αγοράζω online",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκτώ κάτι με χρήματα.",
                "examples": [
                    "Αγοράζει φαγητό online.",
                    "Θέλει να αγοράσει ένα διαμέρισμα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "αγόρασα"
    },
    {
        "word": "πληρώνω",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "πληρώνω το ενοίκιο / πληρώνω με κάρτα",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω χρήματα για κάτι.",
                "examples": [
                    "Πληρώνω το ενοίκιο κάθε μήνα.",
                    "Πληρώνει με κάρτα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πλήρωσα"
    },
    {
        "word": "ξοδεύω",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "ξοδεύω χρήματα / περνάω χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ χρήματα ή χρόνο.",
                "examples": [
                    "Ξοδεύει πολλά σε φαγητό.",
                    "Περνάει χρόνο στην κίνηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "ξόδεψα"
    },
    {
        "word": "αποταμιεύω",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "αποταμιεύω χρήματα / αποθηκεύω αρχείο",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατάω χρήματα.",
                "examples": [
                    "Αποταμιεύει εκατό ευρώ το μήνα.",
                    "Αποθηκεύστε τη δουλειά σας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "αποταμίευσα"
    },
    {
        "word": "δουλεύω",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "δουλεύω από το σπίτι / δουλεύω πλήρες ωράριο",
        "form": "verb",
        "definitions": [
            {
                "text": "Εργάζομαι για να κερδίσω χρήματα.",
                "examples": [
                    "Δουλεύει σε νοσοκομείο.",
                    "Δουλεύω από το σπίτι."
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
        "level": "baby",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "ζω σε διαμέρισμα / ζω μόνος / ζω με κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι ζωντανός, κατοικώ κάπου.",
                "examples": [
                    "Ζει σε ένα διαμέρισμα κοντά στο κέντρο.",
                    "Ζούμε μαζί."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v3": "έζησα"
    },
    {
        "word": "σκέφτομαι",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "σκέφτομαι για / σκέφτομαι προσεκτικά",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ το μυαλό μου.",
                "examples": [
                    "Σκέφτομαι ότι είναι καλή ιδέα.",
                    "Σκέφτεται να φύγει από τη δουλειά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "a_passive",
        "v3": "σκέφτηκα"
    },
    {
        "word": "ξέρω",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "ξέρω κάποιον / ξέρω την απάντηση / ξέρω ένα μέρος",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω γνώση ή πληροφορία για κάτι.",
                "examples": [
                    "Ξέρω το όνομά του.",
                    "Ξέρει την απάντηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "ήξερα"
    },
    {
        "word": "θέλω",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🙏",
        "subtext": "θέλω δουλειά / θέλω να φύγω / θέλω περισσότερα χρήματα",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιθυμώ κάτι.",
                "examples": [
                    "Θέλω έναν καφέ.",
                    "Θέλει μια καλύτερη δουλειά."
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
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🆘",
        "subtext": "χρειάζομαι βοήθεια / χρειάζομαι χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω ανάγκη από κάτι.",
                "examples": [
                    "Χρειάζομαι ένα διάλειμμα.",
                    "Χρειάζεται βοήθεια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "a_passive",
        "v3": "χρειάστηκα"
    },
    {
        "word": "μου αρέσει",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "👍",
        "subtext": "μου αρέσει η δουλειά / μου αρέσουν τα ταξίδια",
        "form": "verb",
        "definitions": [
            {
                "text": "Βρίσκω κάτι ευχάριστο.",
                "examples": [
                    "Μου αρέσει η δουλειά μου.",
                    "Της αρέσει να μαγειρεύει."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "impersonal",
        "v3": "μου άρεσε"
    },
    {
        "word": "αγαπάω",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "❤️",
        "subtext": "αγαπάω κάποιον / αγαπάω να κάνω",
        "form": "verb",
        "definitions": [
            {
                "text": "Αισθάνομαι πολλή αγάπη.",
                "examples": [
                    "Αγαπάει τη δουλειά της.",
                    "Του αρέσει πολύ να ταξιδεύει."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v3": "αγάπησα"
    },
    {
        "word": "μισώ",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😡",
        "subtext": "μισώ να κάνω / μισώ κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιπαθώ πάρα πολύ.",
                "examples": [
                    "Μισεί να παίρνει το λεωφορείο.",
                    "Μισεί τις μεγάλες συναντήσεις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v3": "μίσησα"
    },
    {
        "word": "ελπίζω",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🤞",
        "subtext": "ελπίζω για / ελπίζω να κάνω",
        "form": "verb",
        "definitions": [
            {
                "text": "Θέλω να συμβεί κάτι.",
                "examples": [
                    "Ελπίζω να πάρω προαγωγή φέτος.",
                    "Ελπίζει σε καλύτερο μισθό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "έλπισα"
    },
    {
        "word": "θυμάμαι",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "θυμάμαι να κάνω / θυμάμαι το όνομα",
        "form": "verb",
        "definitions": [
            {
                "text": "Δεν ξεχνάω.",
                "examples": [
                    "Παρακαλώ θυμηθείτε την προθεσμία.",
                    "Θυμάται κάθε πελάτη."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "a_passive",
        "v3": "θυμήθηκα"
    },
    {
        "word": "ξεχνάω",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "ξεχνάω το όνομα / ξεχνάω να κάνω",
        "form": "verb",
        "definitions": [
            {
                "text": "Δεν θυμάμαι.",
                "examples": [
                    "Μην ξεχάσετε τη συνάντηση.",
                    "Ξεχνάει πάντα τους κωδικούς."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v3": "ξέχασα"
    },
    {
        "word": "καταλαβαίνω",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "💡",
        "subtext": "καταλαβαίνω το πρόβλημα / καταλαβαίνω κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Ξέρω τι σημαίνει κάτι.",
                "examples": [
                    "Καταλαβαίνω το συμβόλαιο.",
                    "Καταλαβαίνει γαλλικά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "κατάλαβα"
    },
    {
        "word": "αποφασίζω",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "αποφασίζω να κάνω / αποφασίζω για",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω μια επιλογή.",
                "examples": [
                    "Αποφάσισε να αλλάξει καριέρα.",
                    "Αποφασίζει γρήγορα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "αποφάσισα"
    },
    {
        "word": "απολαμβάνω",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "subtext": "απολαμβάνω να κάνω / απολαμβάνω το φαγητό",
        "form": "verb",
        "definitions": [
            {
                "text": "Νιώθω χαρά με κάτι.",
                "examples": [
                    "Του αρέσει να δουλεύει από το σπίτι.",
                    "Απολαμβάνει τον νέο της ρόλο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "απόλαυσα"
    },
    {
        "word": "βλέπω",
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "subtext": "βλέπω γιατρό / βλέπω φίλους / βλέπω το πρόβλημα",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιλαμβάνομαι με την όραση.",
                "examples": [
                    "Βλέπω τον γιατρό μου αύριο.",
                    "Βλέπει το πρόβλημα."
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
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "subtext": "ακούω νέα / ακούω κάποιον / ακούω έναν ήχο",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιλαμβάνομαι με την ακοή.",
                "examples": [
                    "Ακούω το ξυπνητήρι κάθε πρωί.",
                    "Με ακούτε;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "άκουσα"
    },
    {
        "word": "ξυπνάω",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "subtext": "ξυπνάω νωρίς / ξυπνάω στις 7",
        "form": "verb",
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
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "subtext": "βλέπω τηλεόραση / βλέπω ταινία",
        "form": "verb",
        "definitions": [
            {
                "text": "Κοιτάζω κάτι για ένα χρονικό διάστημα.",
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
        "word": "κοιτάζω",
        "level": "baby",
        "theme": "health_body",
        "emoji": "👀",
        "subtext": "κοιτάζω / ψάχνω για / φαίνομαι",
        "form": "verb",
        "definitions": [
            {
                "text": "Κατευθύνω τα μάτια προς κάτι.",
                "examples": [
                    "Κοίτα αυτή τη φωτογραφία.",
                    "Ψάχνει τα κλειδιά του."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1st_conj",
        "v3": "κοίταξα"
    },
    {
        "word": "παίζω",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "παίζω ποδόσφαιρο / παίζω μουσική",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι για ευχαρίστηση.",
                "examples": [
                    "Παίζω ποδόσφαιρο με φίλους.",
                    "Της αρέσει να παίζει βιντεοπαιχνίδια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έπαιξα"
    },
    {
        "word": "τρέχω",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "subtext": "τρέχω στο πάρκο / διευθύνω μια επιχείρηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινούμαι πολύ γρήγορα.",
                "examples": [
                    "Τρέχω στο πάρκο.",
                    "Τρέχει για να προλάβει το λεωφορείο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έτρεξα"
    },
    {
        "word": "κάθομαι",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🪑",
        "subtext": "κάθομαι / κάθομαι κάτω",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι σε καθιστή θέση.",
                "examples": [
                    "Παρακαλώ καθίστε.",
                    "Κάθομαι στην καρέκλα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "κάθισα"
    },
    {
        "word": "στέκομαι",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🧍",
        "subtext": "στέκομαι όρθιος / αντέχω",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι σε όρθια θέση.",
                "examples": [
                    "Παρακαλώ σταθείτε όρθιοι.",
                    "Στέκεται δίπλα στην πόρτα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "στάθηκα"
    },
    {
        "word": "συναντάω",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🤝",
        "subtext": "συναντάω κάποιον / γνωρίζω κόσμο",
        "form": "verb",
        "definitions": [
            {
                "text": "Βλέπω και μιλάω με κάποιον.",
                "examples": [
                    "Χάρηκα για τη γνωριμία.",
                    "Συναντιόμαστε κάθε Παρασκευή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "συνάντησα"
    },
    {
        "word": "μαθαίνω",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📚",
        "subtext": "μαθαίνω αγγλικά / μαθαίνω πώς",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκτώ γνώσεις ή δεξιότητες.",
                "examples": [
                    "Θέλω να μάθω αγγλικά.",
                    "Τα παιδιά μαθαίνουν γρήγορα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έμαθα"
    },
    {
        "word": "αλλάζω",
        "level": "baby",
        "theme": "time",
        "emoji": "🔄",
        "subtext": "αλλάζω ρούχα / αλλάζω γνώμη / αλλάζω δουλειά",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι διαφορετικό.",
                "examples": [
                    "Θέλω να αλλάξω ρούχα.",
                    "Ο καιρός αλλάζει γρήγορα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "άλλαξα"
    },
    {
        "word": "σταματάω",
        "level": "baby",
        "theme": "time",
        "emoji": "🛑",
        "subtext": "σταματάω να κάνω / σταματάω το αυτοκίνητο",
        "form": "verb",
        "definitions": [
            {
                "text": "Σταματώ να κάνω κάτι.",
                "examples": [
                    "Σταματήστε το αυτοκίνητο.",
                    "Παρακαλώ σταματήστε να μιλάτε."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "σταμάτησα"
    },
    {
        "word": "προσθέτω",
        "level": "baby",
        "theme": "numbers_math",
        "emoji": "➕",
        "subtext": "προσθέτω / προσθέτω πληροφορίες",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω κάτι μαζί με κάτι άλλο.",
                "examples": [
                    "Προσθέστε λίγη ζάχαρη στο τσάι.",
                    "Πόσο κάνει πέντε συν πέντε;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πρόσθεσα"
    },
    {
        "word": "νικάω",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "νικάω το παιχνίδι / κερδίζω χρήματα",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι ο καλύτερος σε ένα παιχνίδι.",
                "examples": [
                    "Θέλουμε να νικήσουμε στο παιχνίδι."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "νίκησα"
    },
    {
        "word": "περιμένω",
        "level": "baby",
        "theme": "time",
        "emoji": "⏳",
        "subtext": "περιμένω το λεωφορείο / περιμένω για",
        "form": "verb",
        "definitions": [
            {
                "text": "Μένω σε ένα μέρος μέχρι να συμβεί κάτι.",
                "examples": [
                    "Περιμένετε το λεωφορείο εδώ.",
                    "Περιμένω τον φίλο μου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "περίμενα"
    },
    {
        "word": "πεθαίνω",
        "level": "baby",
        "theme": "health_body",
        "emoji": "⚰️",
        "subtext": "πεθαίνω",
        "form": "verb",
        "definitions": [
            {
                "text": "Σταματώ να ζω.",
                "examples": [
                    "Τα φυτά πεθαίνουν χωρίς νερό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πέθανα"
    },
    {
        "word": "στέλνω",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "✉️",
        "subtext": "στέλνω email / στέλνω μήνυμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι να πάει σε ένα μέρος.",
                "examples": [
                    "Στέλνω ένα email κάθε πρωί.",
                    "Μπορείτε να μου στείλετε μια φωτογραφία;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έστειλα"
    },
    {
        "word": "μένω",
        "level": "baby",
        "theme": "places_geography",
        "emoji": "🏨",
        "subtext": "μένω στο σπίτι / μένω σε ξενοδοχείο",
        "form": "verb",
        "definitions": [
            {
                "text": "Συνεχίζω να είμαι σε ένα μέρος.",
                "examples": [
                    "Μένω στο σπίτι τις Κυριακές.",
                    "Μείναμε σε ξενοδοχείο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έμεινα"
    },
    {
        "word": "πέφτω",
        "level": "baby",
        "theme": "environment_nature",
        "emoji": "🍂",
        "subtext": "πέφτω κάτω / πέφτω από",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινούμαι προς τα κάτω.",
                "examples": [
                    "Τα φύλλα πέφτουν το φθινόπωρο.",
                    "Πρόσεχε μη πέσεις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έπεσα"
    },
    {
        "word": "περνάω",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "🏔️",
        "subtext": "περνάω το τεστ / περνάω τον χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηγαίνω δίπλα από κάτι ή πετυχαίνω σε εξετάσεις.",
                "examples": [
                    "Περνάω από το πάρκο στο δρόμο για το σπίτι.",
                    "Ελπίζω να περάσω το τεστ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "πέρασα"
    },
    {
        "word": "πουλάω",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "subtext": "πουλάω το αυτοκίνητο / πουλάω online",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω κάτι για χρήματα.",
                "examples": [
                    "Πουλάνε φρούτα στην αγορά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "πούλησα"
    },
    {
        "word": "τραβάω",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🚜",
        "subtext": "τραβάω / τραβάω τη φωτογραφία",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινώ κάτι προς το μέρος μου.",
                "examples": [
                    "Τραβήξτε την πόρτα για να ανοίξει."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "τράβηξα"
    },
    {
        "word": "σπρώχνω",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🛒",
        "subtext": "σπρώχνω / πιέζω το κουμπί",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινώ κάτι μακριά μου.",
                "examples": [
                    "Πιέστε το κουμπί.",
                    "Σπρώχνω το καρότσι στο κατάστημα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έσπρωξα"
    },
    {
        "word": "κουβαλάω",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🎒",
        "subtext": "κουβαλάω τσάντα / κουβαλάω το κουτί",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατάω και μεταφέρω κάτι.",
                "examples": [
                    "Κουβαλάω μια τσάντα στο σχολείο.",
                    "Μπορείτε να με βοηθήσετε να κουβαλήσω αυτό το κουτί;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "κουβάλησα"
    },
    {
        "word": "σπάω",
        "level": "baby",
        "theme": "describing_things",
        "emoji": "💔",
        "subtext": "σπάω το γυαλί / σπάω το πόδι / κάνω διάλειμμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Χωρίζω κάτι σε κομμάτια.",
                "examples": [
                    "Μη σπάσεις το γυαλί.",
                    "Έσπασε το πόδι του."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έσπασα"
    },
    {
        "word": "λαμβάνω",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "📩",
        "subtext": "λαμβάνω email / λαμβάνω δώρο",
        "form": "verb",
        "definitions": [
            {
                "text": "Παίρνω κάτι που μου έδωσαν.",
                "examples": [
                    "Λαμβάνω πολλά γράμματα.",
                    "Έλαβε ένα δώρο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έλαβα"
    },
    {
        "word": "συμφωνώ",
        "level": "baby",
        "theme": "opinion_debate",
        "emoji": "👍",
        "subtext": "συμφωνώ με κάποιον / συμφωνώ να κάνω",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω την ίδια γνώμη.",
                "examples": [
                    "Συμφωνώ μαζί σας.",
                    "Συμφωνούμε με το σχέδιο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "2nd_conj",
        "v3": "συμφώνησα"
    },
    {
        "word": "ζωγραφίζω",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎨",
        "subtext": "ζωγραφίζω εικόνα / σχεδιάζω χάρτη",
        "form": "verb",
        "definitions": [
            {
                "text": "Φτιάχνω μια εικόνα.",
                "examples": [
                    "Μου αρέσει να ζωγραφίζω πουλιά.",
                    "Μπορείτε να σχεδιάσετε έναν χάρτη;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "ζωγράφισα"
    },
    {
        "word": "μοιράζομαι",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🍕",
        "subtext": "μοιράζομαι μια πίτσα / μοιράζομαι πληροφορίες",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω μέρος από κάτι σε άλλους.",
                "examples": [
                    "Ας μοιραστούμε μια πίτσα.",
                    "Μοιράζομαι ένα δωμάτιο με τον αδερφό μου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "μοιράστηκα"
    },
    {
        "word": "χαμογελάω",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "subtext": "χαμογελάω σε κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω μια χαρούμενη έκφραση.",
                "examples": [
                    "Έχει ένα όμορφο χαμόγελο.",
                    "Χαμογελάστε στην κάμερα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "χαμογέλασα"
    },
    {
        "word": "κλαίω",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "subtext": "κλαίω",
        "form": "verb",
        "definitions": [
            {
                "text": "Βγάζω δάκρυα.",
                "examples": [
                    "Το μωρό κλαίει.",
                    "Μην κλαις."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "έκλαψα"
    },
    {
        "word": "χορεύω",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "💃",
        "subtext": "χορεύω στη μουσική",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινώ το σώμα στη μουσική.",
                "examples": [
                    "Μου αρέσει να χορεύω.",
                    "Χορεύουν."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "χόρεψα"
    },
    {
        "word": "τραγουδάω",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎤",
        "subtext": "τραγουδάω ένα τραγούδι",
        "form": "verb",
        "definitions": [
            {
                "text": "Βγάζω μουσικούς ήχους με τη φωνή.",
                "examples": [
                    "Μου αρέσει να τραγουδάω στο μπάνιο.",
                    "Τραγουδάει πολύ καλά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "τραγούδησα"
    },
    {
        "word": "πηδάω",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🦘",
        "subtext": "πηδάω ψηλά",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηδάω ψηλά.",
                "examples": [
                    "Μπορείς να πηδήξεις ψηλά;",
                    "Η γάτα πήδηξε πάνω στο τραπέζι."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "πήδηξα"
    },
    {
        "word": "κολυμπάω",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "subtext": "κολυμπάω στη θάλασσα / στην πισίνα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινούμαι στο νερό.",
                "examples": [
                    "Κολυμπάω κάθε πρωί.",
                    "Ξέρεις να κολυμπάς;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "κολύμπησα"
    },
    {
        "word": "μελετάω",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📖",
        "subtext": "μελετάω για το τεστ / διαβάζω βιβλίο",
        "form": "verb",
        "definitions": [
            {
                "text": "Μαθαίνω ένα θέμα.",
                "examples": [
                    "Μελετάω αγγλικά στο σχολείο.",
                    "Διαβάζει για τις εξετάσεις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2nd_conj",
        "v3": "μελέτησα"
    },
    {
        "word": "διδάσκω",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "subtext": "διδάσκω αγγλικά / διδάσκω κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω γνώσεις σε άλλους.",
                "examples": [
                    "Διδάσκω αγγλικά.",
                    "Διδάσκει στο πανεπιστήμιο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "δίδαξα"
    },
    {
        "word": "μετακινούμαι",
        "level": "baby",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "μετακινούμαι στη δουλειά",
        "form": "verb",
        "definitions": [
            {
                "text": "Ταξιδεύω τακτικά από και προς τη δουλειά.",
                "examples": [
                    "Μετακινούμαι στην πόλη με τρένο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "μετακινήθηκα"
    },
    {
        "word": "νοικιάζω",
        "level": "baby",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "νοικιάζω διαμέρισμα / νοικιάζω αυτοκίνητο",
        "form": "verb",
        "definitions": [
            {
                "text": "Πληρώνω για να χρησιμοποιώ ένα σπίτι.",
                "examples": [
                    "Νοικιάζουμε ένα διαμέρισμα στην πόλη."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1st_conj",
        "v3": "νοίκιασα"
    },
    {
        "word": "γυμνάζομαι",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "subtext": "γυμνάζομαι στο γυμναστήριο",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω σωματική δραστηριότητα.",
                "examples": [
                    "Γυμνάζομαι κάθε πρωί."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "a_passive",
        "v3": "γυμνάστηκα"
    },
    {
        "word": "κοστίζω",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "κοστίζει πολύ / πόσο κοστίζει",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια τιμή.",
                "examples": [
                    "Το διαμέρισμα κοστίζει πολύ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1st_conj",
        "v3": "κόστισε"
    },
    {
        "word": "προσκαλώ",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "subtext": "προσκαλώ σε πάρτι / σε δείπνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Ζητώ από κάποιον να έρθει.",
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
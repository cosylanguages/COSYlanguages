(function() {
    const data = [
    {
        "word": "είμαι",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "είμαι έτοιμος / είμαι κουρασμένος / είμαι στο σπίτι",
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
        "v3": "υπάρξει",
        "group": "irregular"
    },
    {
        "word": "έχω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "έχω δουλειά / τρώω μεσημεριανό / έχω πρόβλημα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κατέχω κάτι, βιώνω κάτι.",
                "examples": [
                    "Έχω μια δουλειά.",
                    "Έχει ένα αυτοκίνητο.",
                    "Έχει πονοκέφαλο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "έχει",
        "group": "group_a"
    },
    {
        "word": "νιώθω",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "νιώθω κουρασμένος / νιώθω καλύτερα / νιώθω καλά",
        "form": "verb",
        "definitions": [
            {
                "text": "Βιώνω μια σωματική ή συναισθηματική κατάσταση.",
                "examples": [
                    "Νιώθω κουρασμένος.",
                    "Νιώθει αγχωμένη.",
                    "Νιώθει καλύτερα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "νιώσει",
        "group": "group_a"
    },
    {
        "word": "δίνω",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "δίνω συμβουλές / δίνω χρήματα / δίνω δώρο",
        "opposite": "take",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Παραδίδω ή μεταφέρω κάτι σε κάποιον.",
                "examples": [
                    "Μου δίνει πολλή δουλειά.",
                    "Δίνει συμβουλές."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "δώσει",
        "group": "group_a"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "παίρνω το λεωφορείο / παίρνω φάρμακο / κάνω διάλειμμα",
        "opposite": "give",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατώ και μετακινώ κάτι, χρησιμοποιώ ή καταναλώνω.",
                "examples": [
                    "Παίρνω το λεωφορείο για τη δουλειά.",
                    "Παίρνει φάρμακα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πάρει",
        "group": "group_a"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "βρίσκω δουλειά / κουράζομαι / βελτιώνομαι",
        "form": "verb",
        "definitions": [
            {
                "text": "Λαμβάνω, αποκτώ ή γίνομαι.",
                "examples": [
                    "Παίρνω καλό μισθό.",
                    "Κουράζεται γρήγορα.",
                    "Παίρνει προαγωγή."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πάρει",
        "group": "group_a"
    },
    {
        "word": "βάζω",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "βάζω / τακτοποιώ / αφήνω κάτω το τηλέφωνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Τοποθετώ κάτι σε μια θέση.",
                "examples": [
                    "Βάλε την τσάντα σου εδώ.",
                    "Βάζει χρήματα στην τράπεζα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "βάλει",
        "group": "group_a"
    },
    {
        "word": "φτιάχνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "φτιάχνω καφέ / παίρνω απόφαση / κάνω λάθος",
        "form": "verb",
        "definitions": [
            {
                "text": "Δημιουργώ ή παράγω κάτι, προκαλώ κάτι.",
                "examples": [
                    "Φτιάχνω καφέ το πρωί.",
                    "Παίρνει αποφάσεις γρήγορα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "φτιάξει",
        "group": "group_a"
    },
    {
        "word": "κάνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "κάνω δουλειά / κάνω τα ψώνια / κάνω γυμναστική",
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
        "classification": "irregular",
        "aspect": "action",
        "v3": "κάνει",
        "group": "group_a"
    },
    {
        "word": "χρησιμοποιώ",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "χρησιμοποιώ τηλέφωνο / χρησιμοποιώ μέσα μεταφοράς",
        "form": "verb",
        "definitions": [
            {
                "text": "Απασχολώ κάτι για έναν σκοπό.",
                "examples": [
                    "Χρησιμοποιώ το τηλέφωνό μου για τα πάντα.",
                    "Χρησιμοποιεί τα μέσα μαζικής μεταφοράς."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "χρησιμοποιήσει",
        "group": "group_b"
    },
    {
        "word": "ανοίγω",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "ανοίγω πόρτα / ανοίγω λογαριασμό / ανοίγω μαγαζί",
        "opposite": "close",
        "oppositeEmoji": "🔒",
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
        "v3": "ανοίξει",
        "group": "group_a"
    },
    {
        "word": "κλείνω",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "κλείνω πόρτα / κλείνω στις έξι / κλείνω λογαριασμό",
        "opposite": "open",
        "oppositeEmoji": "📖",
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
        "v3": "κλείσει",
        "group": "group_a"
    },
    {
        "word": "ξεκινώ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "ξεκινώ δουλειά / ξεκινώ συνάντηση / ξεκινώ νέα δουλειά",
        "opposite": "finish",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Αρχίζω μια δραστηριότητα ή περίοδο.",
                "examples": [
                    "Ξεκινώ δουλειά στις οκτώ και μισή.",
                    "Ξεκινά μια νέα θέση εργασίας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ξεκινήσει",
        "group": "group_a"
    },
    {
        "word": "τελειώνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "τελειώνω δουλειά / τελειώνω έργο / τελειώνω νωρίς",
        "opposite": "start",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ολοκληρώνω κάτι.",
                "examples": [
                    "Τελειώνει τη δουλειά στις πέντε.",
                    "Τελειώνει την αναφορά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "τελειώσει",
        "group": "group_a"
    },
    {
        "word": "βοηθώ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "βοηθώ κάποιον / βοηθώ με μια εργασία / ζητώ βοήθεια",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι πιο εύκολο για κάποιον.",
                "examples": [
                    "Βοηθά τους συναδέλφους του.",
                    "Μπορείς να με βοηθήσεις;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "βοηθήσει",
        "group": "group_b"
    },
    {
        "word": "προσπαθώ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "προσπαθώ να κάνω / προσπαθώ σκληρά / δοκιμάζω κάτι νέο",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω μια προσπάθεια, δοκιμάζω κάτι.",
                "examples": [
                    "Προσπαθώ πάντα να κάνω το καλύτερο στη δουλειά.",
                    "Δοκίμασε τον καφέ εδώ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προσπαθήσει",
        "group": "group_b"
    },
    {
        "word": "δείχνω",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "δείχνω σε κάποιον / δείχνω πώς / δείχνω έγγραφο",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιτρέπω σε κάποιον να δει κάτι, επεξηγώ.",
                "examples": [
                    "Μου δείχνει τον χάρτη.",
                    "Δείχνει τη δουλειά του."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "δείξει",
        "group": "group_a"
    },
    {
        "word": "βρίσκω",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "βρίσκω δουλειά / ανακαλύπτω / βρίσκω χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Ανακαλύπτω ή εντοπίζω κάτι.",
                "examples": [
                    "Βρίσκω τη δουλειά ενδιαφέρουσα.",
                    "Βρήκε μια νέα δουλειά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "βρει",
        "group": "group_a"
    },
    {
        "word": "κρατώ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "συνεχίζω / μένω σιωπηλός / κρατώ αρχείο",
        "form": "verb",
        "definitions": [
            {
                "text": "Συνεχίζω να έχω ή να κάνω κάτι.",
                "examples": [
                    "Κράτα την απόδειξη.",
                    "Κρατά το τηλέφωνό της ανοιχτό όλη μέρα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "κρατήσει",
        "group": "group_b"
    },
    {
        "word": "χάνω",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "χάνω δουλειά / χάνω χρήματα / χάνω βάρος",
        "opposite": "win",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Δεν έχω πια κάτι, αποτυγχάνω να κερδίσω.",
                "examples": [
                    "Έχασα τα κλειδιά μου.",
                    "Έχασε τη δουλειά της.",
                    "Δεν χάνει ποτέ."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "χάσει",
        "group": "group_a"
    },
    {
        "word": "κόβω",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "κόβω κόστη / μειώνω δαπάνες / κόβω στη μέση",
        "form": "verb",
        "definitions": [
            {
                "text": "Χωρίζω με κάτι κοφτερό, μειώνω.",
                "examples": [
                    "Μειώνει το μεσημεριανό της διάλειμμα.",
                    "Κόβει τα κόστη."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κόψει",
        "group": "group_a"
    },
    {
        "word": "στρίβω",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "ανάβω / σβήνω / στρίβω αριστερά / στρίβω δεξιά",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινούμαι προς μια κατεύθυνση, αλλάζω κατάσταση.",
                "examples": [
                    "Στρίψτε αριστερά στο γραφείο.",
                    "Σβήνει το φως."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "στρίψει",
        "group": "group_a"
    },
    {
        "word": "φέρνω",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "φέρνω κάποιον / φέρνω φαγητό / φέρνω έγγραφο",
        "form": "verb",
        "definitions": [
            {
                "text": "Μεταφέρω κάτι σε ένα μέρος.",
                "examples": [
                    "Φέρε την ταυτότητά σου στη συνέντευξη.",
                    "Φέρνει μεσημεριανό."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "φέρει",
        "group": "group_a"
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "λέω γεια / λέω ναι / λέω όχι / λέω κάτι",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκφράζω κάτι με λέξεις.",
                "examples": [
                    "Λέει καλημέρα κάθε πρωί.",
                    "Λέει ότι είναι δύσκολο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πει",
        "group": "irregular"
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "λέω την αλήθεια / λέω σε κάποιον / λέω μια ιστορία",
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
        "v3": "πει",
        "group": "irregular"
    },
    {
        "word": "ρωτώ",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "κάνω ερώτηση / ζητώ βοήθεια / ρωτώ για",
        "form": "verb",
        "definitions": [
            {
                "text": "Θέτω μια ερώτηση ή κάνω ένα αίτημα.",
                "examples": [
                    "Κάνει καλές ερωτήσεις.",
                    "Ζητώ βοήθεια από το αφεντικό μου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ρωτήσει",
        "group": "group_b"
    },
    {
        "word": "μιλώ",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "μιλώ σε κάποιον / μιλώ μια γλώσσα / μιλώ καθαρά",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκφράζω λέξεις, επικοινωνώ προφορικά.",
                "examples": [
                    "Μιλά τρεις γλώσσες.",
                    "Μιλά στον διευθυντή της."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "μιλήσει",
        "group": "group_b"
    },
    {
        "word": "μιλάω",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "μιλώ σε κάποιον / μιλώ για / μιλώ ανοιχτά",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια συνομιλία.",
                "examples": [
                    "Μιλάμε για τη δουλειά κάθε Δευτέρα.",
                    "Μιλάει πολύ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μιλήσει",
        "group": "group_b"
    },
    {
        "word": "καλώ",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "καλώ κάποιον / καλώ πίσω / συγκαλώ συνάντηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Τηλεφωνώ σε κάποιον.",
                "examples": [
                    "Καλώ τους πελάτες μου κάθε πρωί.",
                    "Καλεί σε συνάντηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "καλέσει",
        "group": "group_b"
    },
    {
        "word": "γράφω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "γράφω email / γράφω αναφορά / γράφω γράμμα",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω λέξεις στο χαρτί ή στην οθόνη.",
                "examples": [
                    "Γράφω email όλη μέρα.",
                    "Γράφει μια αναφορά κάθε Παρασκευή."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "γράψει",
        "group": "group_a"
    },
    {
        "word": "διαβάζω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "διαβάζω βιβλίο / διαβάζω ειδήσεις / διαβάζω συμβόλαιο",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Κοιτάζω και κατανοώ γραπτές λέξεις.",
                "examples": [
                    "Διαβάζει τις ειδήσεις κάθε πρωί.",
                    "Διαβάζει συμβόλαια."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "διαβάσει",
        "group": "group_a"
    },
    {
        "word": "ακούω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "ακούω μουσική / ακούω προσεκτικά / ακούω podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω προσοχή σε ήχους ή ομιλία.",
                "examples": [
                    "Ακούω podcast στη δουλειά.",
                    "Ακούει προσεκτικά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ακούσει",
        "group": "group_a"
    },
    {
        "word": "απαντώ",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "απαντώ σε ερώτηση / απαντώ στο τηλέφωνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκρίνομαι σε μια ερώτηση ή επικοινωνία.",
                "examples": [
                    "Απαντά σε όλα τα email γρήγορα.",
                    "Απάντησε στο τηλέφωνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "απαντήσει",
        "group": "group_b"
    },
    {
        "word": "επαναλαμβάνω",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "επαναλαμβάνω αυτό / επαναλαμβάνομαι",
        "form": "verb",
        "definitions": [
            {
                "text": "Λέω ή κάνω κάτι ξανά.",
                "examples": [
                    "Παρακαλώ επαναλάβετε αυτό.",
                    "Επανέλαβε την οδηγία δύο φορές."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επαναλάβει",
        "group": "group_a"
    },
    {
        "word": "πηγαίνω",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "πηγαίνω δουλειά / πηγαίνω σπίτι / βγαίνω έξω",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι από ένα μέρος σε ένα άλλο.",
                "examples": [
                    "Πηγαίνω στη δουλειά με το τρένο.",
                    "Πηγαίνει στο εξωτερικό κάθε χρόνο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πάει",
        "group": "group_a"
    },
    {
        "word": "έρχομαι",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "έρχομαι σπίτι / επιστρέφω / έρχομαι στη δουλειά",
        "opposite": "go",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι προς ένα μέρος ή πρόσωπο.",
                "examples": [
                    "Έρχεται στο γραφείο στις εννέα.",
                    "Έρχεται σπίτι αργά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "έρθει",
        "group": "irregular"
    },
    {
        "word": "περπατώ",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "περπατώ στη δουλειά / περπατώ σπίτι / περπατώ αργά",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι με τα πόδια με κανονικό ρυθμό.",
                "examples": [
                    "Περπατά μέχρι τη δουλειά κάθε μέρα.",
                    "Περπατά κατά τη διάρκεια του διαλείμματος."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "περπατήσει",
        "group": "group_b"
    },
    {
        "word": "οδηγώ",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "οδηγώ στη δουλειά / οδηγώ αυτοκίνητο / οδηγώ σπίτι",
        "form": "verb",
        "definitions": [
            {
                "text": "Χειρίζομαι ένα όχημα.",
                "examples": [
                    "Οδηγεί στη δουλειά.",
                    "Οδηγεί εταιρικό αυτοκίνητο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "οδηγήσει",
        "group": "group_b"
    },
    {
        "word": "πετώ",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "πετώ σε μια πόλη / πετώ business class",
        "form": "verb",
        "definitions": [
            {
                "text": "Ταξιδεύω με αεροπλάνο.",
                "examples": [
                    "Πετάει στο Παρίσι για συναντήσεις.",
                    "Μισεί το πέταγμα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πετάξει",
        "group": "group_b"
    },
    {
        "word": "φτάνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "φτάνω στη δουλειά / φτάνω αργά / φτάνω στην ώρα μου",
        "form": "verb",
        "definitions": [
            {
                "text": "Φτάνω σε έναν προορισμό.",
                "examples": [
                    "Φτάνει στο γραφείο στις εννέα.",
                    "Το τρένο φτάνει αργοπορημένο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "φτάσει",
        "group": "group_a"
    },
    {
        "word": "φεύγω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "φεύγω από το σπίτι / φεύγω από τη δουλειά",
        "form": "verb",
        "definitions": [
            {
                "text": "Απομακρύνομαι από ένα μέρος.",
                "examples": [
                    "Φεύγω από το σπίτι στις οκτώ.",
                    "Έφυγε από την εταιρεία πέρυσι."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "φύγει",
        "group": "group_a"
    },
    {
        "word": "μετακινούμαι",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "μετακομίζω / μετακομίζω σε πόλη / προχωρώ",
        "form": "verb",
        "definitions": [
            {
                "text": "Αλλάζω θέση ή τόπο διαμονής.",
                "examples": [
                    "Μετακόμισαν σε ένα νέο διαμέρισμα.",
                    "Μετακινείται σε μια άλλη ομάδα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μετακινηθεί",
        "group": "group_b"
    },
    {
        "word": "επιστρέφω",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "επιστρέφω σπίτι / επιστρέφω στη δουλειά",
        "form": "verb",
        "definitions": [
            {
                "text": "Έρχομαι ή πηγαίνω πίσω σε ένα μέρος.",
                "examples": [
                    "Επιστρέφει από ένα ταξίδι την Παρασκευή.",
                    "Επέστρεψε την κλήση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επιστρέψει",
        "group": "group_a"
    },
    {
        "word": "ταξιδεύω",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "ταξιδεύω για δουλειά / ταξιδεύω στο εξωτερικό",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηγαίνω από το ένα μέρος στο άλλο, συχνά μακριά.",
                "examples": [
                    "Ταξιδεύει για δουλειά μία φορά το μήνα.",
                    "Του αρέσει να ταξιδεύει."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ταξιδέψει",
        "group": "group_a"
    },
    {
        "word": "τρώω",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "τρώω πρωινό / μεσημεριανό / βραδινό",
        "opposite": "drink",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω τροφή στο στόμα και την καταναλώνω.",
                "examples": [
                    "Τρώμε μεσημεριανό στη μία.",
                    "Τρώει στο γραφείο της."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "φάει",
        "group": "irregular"
    },
    {
        "word": "πίνω",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "πίνω καφέ / πίνω τσάι / πίνω νερό",
        "opposite": "eat",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Καταπίνω υγρό.",
                "examples": [
                    "Πίνει καφέ κάθε πρωί.",
                    "Πίνω νερό στη δουλειά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πιει",
        "group": "group_a"
    },
    {
        "word": "κοιμάμαι",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "κοιμάμαι καλά / κοιμάμαι άσχημα / κοιμάμαι οκτώ ώρες",
        "opposite": "wake up",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Ξεκουράζομαι σε κατάσταση αναισθησίας.",
                "examples": [
                    "Κοιμάται επτά ώρες τη νύχτα.",
                    "Κοιμάται άσχημα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κοιμηθεί",
        "group": "group_b"
    },
    {
        "word": "μαγειρεύω",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "μαγειρεύω βραδινό / μαγειρεύω ένα γεύμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Προετοιμάζω φαγητό χρησιμοποιώντας θερμότητα.",
                "examples": [
                    "Μαγειρεύει βραδινό κάθε βράδυ.",
                    "Μαγειρεύει για την ομάδα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μαγειρέψει",
        "group": "group_a"
    },
    {
        "word": "καθαρίζω",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "καθαρίζω το σπίτι / καθαρίζω / καθαρίζω την κουζίνα",
        "form": "verb",
        "definitions": [
            {
                "text": "Αφαιρώ τη βρωμιά από κάτι.",
                "examples": [
                    "Καθαρίζω το διαμέρισμα τα Σάββατα.",
                    "Καθαρίζει το γραφείο του κάθε μέρα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "καθαρίσει",
        "group": "group_a"
    },
    {
        "word": "φοράω",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "φοράω κοστούμι / φοράω γυαλιά",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω ρούχα ή αξεσουάρ στο σώμα μου.",
                "examples": [
                    "Φοράει κοστούμι στη δουλειά.",
                    "Φοράει γυαλιά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "φορέσει",
        "group": "group_b"
    },
    {
        "word": "πλένω",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "πλένω πιάτα / πλένω ρούχα / πλένω τα χέρια",
        "form": "verb",
        "definitions": [
            {
                "text": "Καθαρίζω κάτι με νερό.",
                "examples": [
                    "Πλένει το αυτοκίνητό του κάθε Κυριακή.",
                    "Πλύνε τα χέρια σου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "πλύνει",
        "group": "group_a"
    },
    {
        "word": "αγοράζω",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "αγοράζω φαγητό / αγοράζω εισιτήριο",
        "opposite": "sell",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκτώ κάτι πληρώνοντας χρήματα.",
                "examples": [
                    "Αγοράζει τρόφιμα online.",
                    "Θέλει να αγοράσει ένα διαμέρισμα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "αγοράσει",
        "group": "group_a"
    },
    {
        "word": "πληρώνω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "πληρώνω λογαριασμό / πληρώνω ενοίκιο / με κάρτα",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω χρήματα σε αντάλλαγμα για κάτι.",
                "examples": [
                    "Πληρώνω το ενοίκιο μηνιαίως.",
                    "Πληρώνει με κάρτα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πληρώσει",
        "group": "group_a"
    },
    {
        "word": "ξοδεύω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "ξοδεύω χρήματα / ξοδεύω χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ χρήματα ή χρόνο.",
                "examples": [
                    "Ξοδεύει πολλά σε έτοιμο φαγητό.",
                    "Ξοδεύει χρόνο στη μετακίνηση."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "ξοδέψει",
        "group": "group_a"
    },
    {
        "word": "αποταμιεύω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "αποταμιεύω χρήματα / αποταμιεύω για σπίτι",
        "opposite": "spend",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατώ χρήματα αντί να τα ξοδεύω.",
                "examples": [
                    "Αποταμιεύει εκατό ευρώ το μήνα.",
                    "Αποθηκεύστε τη δουλειά σας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αποταμιεύσει",
        "group": "group_a"
    },
    {
        "word": "δουλεύω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "δουλεύω από το σπίτι / δουλεύω πλήρες ωράριο",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκτελώ εργασίες για να κερδίσω χρήματα.",
                "examples": [
                    "Δουλεύει από το σπίτι τρεις μέρες την εβδομάδα.",
                    "Δουλεύει σκληρά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "δουλέψει",
        "group": "group_a"
    },
    {
        "word": "ζω",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "ζω σε διαμέρισμα / ζω μόνος / ζω με κάποιον",
        "opposite": "die",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω το σπίτι μου σε ένα μέρος, είμαι ζωντανός.",
                "examples": [
                    "Ζει σε ένα διαμέρισμα κοντά στο κέντρο.",
                    "Ζούμε μαζί."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "ζήσει",
        "group": "group_b"
    },
    {
        "word": "σκέφτομαι",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "σκέφτομαι / νομίζω / σκέφτομαι προσεκτικά",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ το μυαλό, έχω μια γνώμη.",
                "examples": [
                    "Νομίζω ότι είναι καλή ιδέα.",
                    "Σκέφτεται να παραιτηθεί."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "σκεφτεί",
        "group": "group_b"
    },
    {
        "word": "ξέρω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "γνωρίζω κάποιον / ξέρω την απάντηση / ξέρω πώς",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω πληροφορίες ή είμαι εξοικειωμένος με.",
                "examples": [
                    "Ξέρω το όνομά του.",
                    "Ξέρει πώς να διαπραγματεύεται."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "ξέρει",
        "group": "group_a"
    },
    {
        "word": "θέλω",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "θέλω δουλειά / θέλω να κάνω / θέλω περισσότερα",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια επιθυμία ή ευχή για κάτι.",
                "examples": [
                    "Θέλω έναν καφέ.",
                    "Θέλει μια προαγωγή.",
                    "Θέλει να συνταξιοδοτηθεί."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "θέλει",
        "group": "group_a"
    },
    {
        "word": "χρειάζομαι",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "χρειάζομαι βοήθεια / χρειάζομαι χρόνο / χρήματα",
        "form": "verb",
        "definitions": [
            {
                "text": "Απαιτώ κάτι.",
                "examples": [
                    "Χρειάζομαι ένα διάλειμμα.",
                    "Χρειάζεται περισσότερο χρόνο.",
                    "Χρειάζεται βοήθεια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "χρειαστεί",
        "group": "group_b"
    },
    {
        "word": "μου αρέσει",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "μου αρέσει η δουλειά / μου αρέσει το ταξίδι",
        "form": "verb",
        "definitions": [
            {
                "text": "Βρίσκω κάτι ευχάριστο.",
                "examples": [
                    "Μου αρέσει η δουλειά μου.",
                    "Της αρέσει να μαγειρεύει στο σπίτι.",
                    "Του αρέσει ο καφές."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "αρέσει",
        "group": "locution"
    },
    {
        "word": "αγαπώ",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "αγαπώ κάποιον / αγαπώ να κάνω / αγαπώ ένα μέρος",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω ισχυρή στοργή για, απολαμβάνω πολύ.",
                "examples": [
                    "Αγαπά τη δουλειά της.",
                    "Αγαπά να ταξιδεύει για δουλειά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "αγαπήσει",
        "group": "group_b"
    },
    {
        "word": "μισώ",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "μισώ να κάνω / μισώ κάποιον / μισώ τις συναντήσεις",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιπαθώ έντονα.",
                "examples": [
                    "Μισεί να μετακινείται με το λεωφορείο.",
                    "Μισεί τις μακρές συναντήσεις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "μισήσει",
        "group": "group_b"
    },
    {
        "word": "ελπίζω",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "ελπίζω / ελπίζω να κάνω / ελπίζω πως ναι",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιθυμώ να συμβεί κάτι.",
                "examples": [
                    "Ελπίζω να πάρω προαγωγή φέτος.",
                    "Ελπίζει σε καλύτερες αποδοχές."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "ελπίσει",
        "group": "group_a"
    },
    {
        "word": "θυμάμαι",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "θυμάμαι να κάνω / θυμάμαι ένα όνομα",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια ανάμνηση, δεν ξεχνώ.",
                "examples": [
                    "Παρακαλώ θυμηθείτε την προθεσμία.",
                    "Θυμάται κάθε πελάτη."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "θυμηθεί",
        "group": "group_b"
    },
    {
        "word": "ξεχνώ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "ξεχνώ ένα όνομα / ξεχνώ να κάνω / ξεχνώ τελείως",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποτυγχάνω να θυμηθώ.",
                "examples": [
                    "Μην ξεχάσεις τη συνάντηση.",
                    "Ξεχνά πάντα τους κωδικούς."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "ξεχάσει",
        "group": "group_a"
    },
    {
        "word": "καταλαβαίνω",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "καταλαβαίνω ένα πρόβλημα / καταλαβαίνω κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιλαμβάνομαι το νόημα κάποιου πράγματος.",
                "examples": [
                    "Καταλαβαίνω το συμβόλαιο.",
                    "Καταλαβαίνει γαλλικά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "καταλάβει",
        "group": "group_a"
    },
    {
        "word": "αποφασίζω",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "αποφασίζω να κάνω / αποφασίζω για / παίρνω απόφαση",
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
        "v3": "αποφασίσει",
        "group": "group_a"
    },
    {
        "word": "απολαμβάνω",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "απολαμβάνω να κάνω / απολαμβάνω ένα γεύμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντλώ ευχαρίστηση από κάτι.",
                "examples": [
                    "Του αρέσει να δουλεύει από το σπίτι.",
                    "Απολαμβάνει τον νέο της ρόλο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "απολαύσει",
        "group": "group_a"
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "βλέπω γιατρό / βλέπω φίλους / βλέπω το πρόβλημα",
        "form": "verb",
        "definitions": [
            {
                "text": "Παρατηρώ ή αντιλαμβάνομαι με τα μάτια.",
                "examples": [
                    "Θα δω τον γιατρό μου αύριο.",
                    "Βλέπει το πρόβλημα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "δει",
        "group": "group_a"
    },
    {
        "word": "ακούω",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "ακούω ειδήσεις / ακούω κάποιον / ακούω έναν ήχο",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιλαμβάνομαι ήχο μέσω των αυτιών.",
                "examples": [
                    "Ακούω το ξυπνητήρι κάθε πρωί.",
                    "Μπορείτε να με ακούσετε;"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "ακούσει",
        "group": "group_a"
    },
    {
        "word": "ξυπνάω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "ξυπνάω νωρίς / ξυπνάω στις 7 / ξυπνάω κουρασμένος",
        "opposite": "sleep",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Σταματώ να κοιμάμαι και ανοίγω τα μάτια.",
                "examples": [
                    "Ξυπνάω στις επτά.",
                    "Τι ώρα ξυπνάς;"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "ξυπνήσει",
        "group": "group_a"
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "βλέπω τηλεόραση / βλέπω ταινία / βλέπω ειδήσεις",
        "definitions": [
            {
                "text": "Κοιτάζω κάτι για ένα χρονικό διάστημα.",
                "examples": [
                    "Βλέπω τηλεόραση το βράδυ.",
                    "Βλέπουν τα πουλιά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "δει",
        "group": "group_a"
    },
    {
        "word": "κοιτάζω",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "κοιτάζω / ψάχνω / μοιάζω με",
        "form": "verb",
        "definitions": [
            {
                "text": "Κατευθύνω τα μάτια μου προς κάτι.",
                "examples": [
                    "Κοίτα αυτή τη φωτογραφία.",
                    "Ψάχνει τα κλειδιά του."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v3": "κοιτάξει",
        "group": "group_a"
    },
    {
        "word": "παίζω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "παίζω άθλημα / παίζω παιχνίδι / παίζω ρόλο",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι για διασκέδαση ή σε ένα παιχνίδι.",
                "examples": [
                    "Παίζω ποδόσφαιρο με φίλους.",
                    "Της αρέσει να παίζει βιντεοπαιχνίδια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παίξει",
        "group": "group_a"
    },
    {
        "word": "τρέχω",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "τρέχω / τρέχω σε αγώνα / διευθύνω επιχείρηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι πολύ γρήγορα στα πόδια.",
                "examples": [
                    "Τρέχω στο πάρκο.",
                    "Τρέχει για να προλάβει το λεωφορείο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "τρέξει",
        "group": "group_a"
    },
    {
        "word": "κάθομαι",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "κάθομαι / κάθομαι στο γραφείο / κάθομαι σε συνάντηση",
        "opposite": "stand",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Βρίσκομαι σε θέση όπου το βάρος στηρίζεται στους γλουτούς.",
                "examples": [
                    "Παρακαλώ καθίστε.",
                    "Κάθομαι σε μια καρέκλα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "καθίσει",
        "group": "group_b"
    },
    {
        "word": "στέκομαι",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "στέκομαι / σηκώνομαι / στέκομαι στην ουρά",
        "opposite": "sit",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Βρίσκομαι στα πόδια σε όρθια θέση.",
                "examples": [
                    "Παρακαλώ σηκωθείτε.",
                    "Στέκεται δίπλα στην πόρτα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "σταθεί",
        "group": "group_b"
    },
    {
        "word": "συναντώ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Βλέπω και μιλώ με κάποιον για πρώτη φορά.",
                "examples": [
                    "Χάρηκα για τη γνωριμία.",
                    "Συναντιόμαστε κάθε Παρασκευή."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "συναντήσει",
        "subtext": "συναντώ κάποιον / συναντιόμαστε για μεσημεριανό",
        "group": "group_a"
    },
    {
        "word": "μαθαίνω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "μαθαίνω / μαθαίνω γλώσσα / μαθαίνω γρήγορα",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποκτώ γνώσεις ή μια δεξιότητα.",
                "examples": [
                    "Θέλω να μάθω αγγλικά.",
                    "Τα παιδιά μαθαίνουν γρήγορα."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v3": "μάθει",
        "group": "group_a"
    },
    {
        "word": "αλλάζω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "αλλάζω / αλλάζω γνώμη / αλλάζω σχέδιο",
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
        "v3": "αλλάξει",
        "group": "group_a"
    },
    {
        "word": "σταματώ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "σταματώ / σταματώ να κάνω / σταματώ κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Τελειώνω κάτι που κάνω ή παύω να κινούμαι.",
                "examples": [
                    "Σταμάτα το αυτοκίνητο.",
                    "Παρακαλώ σταματήστε να μιλάτε."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "σταματήσει",
        "group": "group_a"
    },
    {
        "word": "προσθέτω",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "προσθέτω / προσθέτω σχόλιο / προσθέτω ζάχαρη",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω πράγματα μαζί για να φτιάξω μια μεγαλύτερη ομάδα.",
                "examples": [
                    "Προσθέστε λίγη ζάχαρη στο τσάι.",
                    "Πόσο κάνει πέντε συν πέντε;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προσθέσει",
        "group": "group_a"
    },
    {
        "word": "κερδίζω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "κερδίζω / κερδίζω βραβείο / κερδίζω συμβόλαιο",
        "opposite": "lose",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι ο καλύτερος σε ένα παιχνίδι ή διαγωνισμό.",
                "examples": [
                    "Θέλουμε να κερδίσουμε το παιχνίδι."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κερδίσει",
        "group": "group_a"
    },
    {
        "word": "περιμένω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "περιμένω / περιμένω κάποιον / περιμένω ένα λεπτό",
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
        "v3": "περιμένει",
        "group": "group_a"
    },
    {
        "word": "πεθαίνω",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "πεθαίνω / πεθαίνω από / εξαφανίζομαι",
        "opposite": "live",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Παύω να ζω.",
                "examples": [
                    "Τα φυτά πεθαίνουν χωρίς νερό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "πεθάνει",
        "group": "group_a"
    },
    {
        "word": "στέλνω",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Προκαλώ κάτι να μετακινηθεί σε κάποιο μέρος.",
                "examples": [
                    "Στέλνω ένα email κάθε πρωί.",
                    "Μπορείτε να μου στείλετε μια φωτογραφία;"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "στείλει",
        "subtext": "στέλνω / στέλνω email / στέλνω μήνυμα",
        "group": "group_a"
    },
    {
        "word": "μένω",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "μένω / μένω στο σπίτι / μένω σε ξενοδοχείο",
        "form": "verb",
        "definitions": [
            {
                "text": "Συνεχίζω να βρίσκομαι σε ένα μέρος.",
                "examples": [
                    "Μένω στο σπίτι τις Κυριακές.",
                    "Μένουμε σε ένα ξενοδοχείο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μείνει",
        "group": "group_a"
    },
    {
        "word": "πέφτω",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "πέφτω / ερωτεύομαι / με παίρνει ο ύπνος",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι προς τα κάτω στο έδαφος.",
                "examples": [
                    "Τα φύλλα πέφτουν το φθινόπωρο.",
                    "Πρόσεχε, μην πέσεις."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πέσει",
        "group": "group_a"
    },
    {
        "word": "περνώ",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "περνώ / περνώ εξετάσεις / περνώ χρόνο",
        "form": "verb",
        "definitions": [
            {
                "text": "Περνώ δίπλα από κάτι ή πετυχαίνω σε μια εξέταση.",
                "examples": [
                    "Περνώ από το πάρκο πηγαίνοντας σπίτι.",
                    "Ελπίζω να περάσω το τεστ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "περάσει",
        "group": "group_a"
    },
    {
        "word": "πουλώ",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "πουλώ / πουλώ online / πουλώ στην αγορά",
        "opposite": "buy",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω κάτι σε κάποιον έναντι χρημάτων.",
                "examples": [
                    "Πουλάνε φρούτα στην αγορά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πουλήσει",
        "group": "group_b"
    },
    {
        "word": "τραβώ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "τραβώ / τραβώ την πόρτα / απομακρύνομαι",
        "opposite": "push",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινώ κάτι προς το μέρος μου.",
                "examples": [
                    "Τραβήξτε την πόρτα για να την ανοίξετε."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "τραβήξει",
        "group": "group_b"
    },
    {
        "word": "σπρώχνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "σπρώχνω / πατώ κουμπί / σπρώχνω καρότσι",
        "opposite": "pull",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινώ κάτι μακριά από μένα.",
                "examples": [
                    "Πατήστε το κουμπί.",
                    "Σπρώχνω το καρότσι στο σούπερ μάρκετ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "σπρώξει",
        "group": "group_a"
    },
    {
        "word": "κουβαλώ",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "κουβαλώ / κουβαλώ τσάντα / κουβαλώ σημειώσεις",
        "form": "verb",
        "definitions": [
            {
                "text": "Κρατώ κάτι και το μετακινώ από το ένα μέρος στο άλλο.",
                "examples": [
                    "Κουβαλώ την τσάντα μου στο σχολείο.",
                    "Μπορείς να με βοηθήσεις να κουβαλήσω αυτό το κουτί;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "κουβαλήσει",
        "group": "group_b"
    },
    {
        "word": "σπάω",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "σπάω / σπάω το γυαλί / κάνω διάλειμμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Χωρίζω κάτι σε δύο ή περισσότερα κομμάτια.",
                "examples": [
                    "Μην σπάσεις το γυαλί.",
                    "Έσπασε το πόδι του."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "σπάσει",
        "group": "group_a"
    },
    {
        "word": "λαμβάνω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "λαμβάνω / λαμβάνω email / λαμβάνω πληρωμή",
        "form": "verb",
        "definitions": [
            {
                "text": "Παίρνω αυτό που κάποιος μου έδωσε ή έστειλε.",
                "examples": [
                    "Λαμβάνω πολλή αλληλογραφία.",
                    "Έλαβε ένα δώρο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "λάβει",
        "group": "group_a"
    },
    {
        "word": "συμφωνώ",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "συμφωνώ / συμφωνώ με κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω την ίδια γνώμη με κάποιον άλλο.",
                "examples": [
                    "Συμφωνώ μαζί σου.",
                    "Συμφωνούμε στο σχέδιο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "συμφωνήσει",
        "group": "group_b"
    },
    {
        "word": "σχεδιάζω",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "σχεδιάζω / σχεδιάζω εικόνα / σχεδιάζω γραμμή",
        "form": "verb",
        "definitions": [
            {
                "text": "Δημιουργώ μια εικόνα με στυλό ή μολύβι.",
                "examples": [
                    "Μου αρέσει να σχεδιάζω πουλιά.",
                    "Μπορείς να σχεδιάσεις έναν χάρτη;"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "σχεδιάσει",
        "group": "group_a"
    },
    {
        "word": "μοιράζομαι",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "μοιράζομαι / μοιράζομαι δωμάτιο / μοιράζομαι ιδέα",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω ένα μέρος από κάτι σε άλλους.",
                "examples": [
                    "Ας μοιραστούμε την πίτσα.",
                    "Μοιράζομαι το δωμάτιο με τον αδερφό μου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μοιραστεί",
        "group": "group_b"
    },
    {
        "word": "χαμογελώ",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "χαμογελώ / χαμογελώ σε κάποιον / πλατιά",
        "opposite": "cry",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω μια χαρούμενη έκφραση με το στόμα.",
                "examples": [
                    "Έχει ένα όμορφο χαμόγελο.",
                    "Χαμογέλα στην κάμερα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "χαμογελάσει",
        "group": "group_b"
    },
    {
        "word": "κλαίω",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "κλαίω / κλαίω για βοήθεια / κλαίω για κάτι",
        "opposite": "smile",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Βγάζω δάκρυα λόγω λύπης ή πόνου.",
                "examples": [
                    "Το μωρό κλαίει.",
                    "Μην κλαις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "κλάψει",
        "group": "group_a"
    },
    {
        "word": "χορεύω",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "χορεύω / χορεύω με μουσική / πηγαίνω για χορό",
        "form": "verb",
        "definitions": [
            {
                "text": "Κινώ το σώμα μου στον ρυθμό της μουσικής.",
                "examples": [
                    "Μου αρέσει να χορεύω.",
                    "Χορεύουν."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "χορέψει",
        "group": "group_a"
    },
    {
        "word": "τραγουδώ",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "τραγουδώ / τραγουδώ ένα τραγούδι / σιγοτραγουδώ",
        "form": "verb",
        "definitions": [
            {
                "text": "Παράγω μουσικούς ήχους με τη φωνή.",
                "examples": [
                    "Μου αρέσει να τραγουδάω στο ντους.",
                    "Τραγουδάει πολύ καλά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "τραγουδήσει",
        "group": "group_b"
    },
    {
        "word": "πηδώ",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "πηδώ / πηδώ ψηλά / πηδώ πάνω από",
        "form": "verb",
        "definitions": [
            {
                "text": "Σπρώχνομαι από το έδαφος με τα πόδια.",
                "examples": [
                    "Μπορείς να πηδήξεις ψηλά;",
                    "Η γάτα πήδηξε στο τραπέζι."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "πηδήξει",
        "group": "group_b"
    },
    {
        "word": "κολυμπώ",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "κολυμπώ / πάω για κολύμπι / κολυμπώ γύρους",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι στο νερό χρησιμοποιώντας χέρια και πόδια.",
                "examples": [
                    "Κολυμπώ κάθε πρωί.",
                    "Ξέρεις να κολυμπάς;"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κολυμπήσει",
        "group": "group_b"
    },
    {
        "word": "σπουδάζω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "σπουδάζω / μαθαίνω αγγλικά / προετοιμάζομαι",
        "form": "verb",
        "definitions": [
            {
                "text": "Αφιερώνω χρόνο στη μάθηση ενός αντικειμένου.",
                "examples": [
                    "Σπουδάζω αγγλικά στο σχολείο.",
                    "Προετοιμάζεται για τις εξετάσεις του."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "σπουδάσει",
        "group": "group_a"
    },
    {
        "word": "διδάσκω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "διδάσκω / μαθαίνω σε κάποιον / διδάσκω μάθημα",
        "form": "verb",
        "definitions": [
            {
                "text": "Μεταδίδω γνώσεις σε άλλους.",
                "examples": [
                    "Διδάσκω αγγλικά.",
                    "Διδάσκει σε ένα πανεπιστήμιο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "διδάξει",
        "group": "group_a"
    },
    {
        "word": "μετακινούμαι",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "μετακινούμαι / καθημερινή μετακίνηση / μακρινή",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι τακτικά από και προς τη δουλειά.",
                "examples": [
                    "Μετακινούμαι στην πόλη με το τρένο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μετακινηθεί",
        "group": "group_b"
    },
    {
        "word": "νοικιάζω",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "νοικιάζω / νοικιάζω διαμέρισμα / νοικιάζω δωμάτιο",
        "form": "verb",
        "definitions": [
            {
                "text": "Πληρώνω χρήματα για τη χρήση σπιτιού που ανήκει σε άλλον.",
                "examples": [
                    "Νοικιάζουμε ένα διαμέρισμα στην πόλη."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "νοικιάσει",
        "group": "group_a"
    },
    {
        "word": "γυμνάζομαι",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω σωματική δραστηριότητα για να παραμείνω υγιής.",
                "examples": [
                    "Γυμνάζομαι κάθε πρωί."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "γυμναστεί",
        "subtext": "γυμνάζομαι / γυμνάζομαι τακτικά / στο γυμναστήριο",
        "group": "group_b"
    },
    {
        "word": "κοστίζω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια συγκεκριμένη τιμή.",
                "examples": [
                    "Το διαμέρισμα κοστίζει ακριβά."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "κοστίσει",
        "subtext": "κοστίζω / κοστίζει ακριβά / κοστίζει χρήματα",
        "group": "group_a"
    },
    {
        "word": "προσκαλώ",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ζητώ από κάποιον να έρθει σε ένα μέρος.",
                "examples": [
                    "Προσκαλώ φίλους για δείπνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προσκαλέσει",
        "subtext": "προσκαλώ / καλώ κάποιον / προσκαλώ σε δείπνο",
        "group": "group_b"
    },
    {
        "word": "σηκώνομαι",
        "definitions": [
            {
                "text": "Σηκώνομαι από το κρεβάτι αφού ξυπνήσω.",
                "examples": [
                    "Σηκώνεται στις επτά και φτιάχνει αμέσως καφέ."
                ]
            }
        ],
        "subtext": "σηκώνομαι νωρίς / σηκώνομαι αργά / σηκώνομαι γρήγορα",
        "classification": "irregular",
        "aspect": "action",
        "v3": "σηκωθεί",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "τρώω πρωινό",
        "definitions": [
            {
                "text": "Παίρνω το πρωινό γεύμα.",
                "examples": [
                    "Τρώει πάντα πρωινό πριν φύγει από το σπίτι."
                ]
            }
        ],
        "subtext": "τρώω πρωινό στο σπίτι / γρήγορο πρωινό / παραλείπω",
        "classification": "irregular",
        "aspect": "action",
        "v3": "φάει πρωινό",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "locution"
    },
    {
        "word": "επιστρέφω",
        "definitions": [
            {
                "text": "Γυρίζω σε ένα μέρος.",
                "examples": [
                    "Επιστρέφει από το μεσημεριανό στις δύο."
                ]
            }
        ],
        "subtext": "επιστρέφω σπίτι / επιστρέφω αργά / από ταξίδι",
        "classification": "irregular",
        "aspect": "action",
        "v3": "επιστρέψει",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "πέφτω για ύπνο",
        "definitions": [
            {
                "text": "Μπαίνω στο κρεβάτι για να κοιμηθώ.",
                "examples": [
                    "Πέφτουν για ύπνο στις έντεκα κάθε βράδυ."
                ]
            }
        ],
        "subtext": "πέφτω για ύπνο νωρίς / πέφτω αργά / κουρασμένος",
        "classification": "irregular",
        "aspect": "action",
        "v3": "πέσει για ύπνο",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "locution"
    },
    {
        "word": "ελέγχω",
        "definitions": [
            {
                "text": "Εξετάζω ή επαληθεύω κάτι.",
                "examples": [
                    "Ελέγχω τα email μου πρώτα απ όλα κάθε πρωί."
                ]
            }
        ],
        "subtext": "ελέγχω email / ελέγχω μηνύματα / ελέγχω έγγραφο",
        "classification": "regular",
        "aspect": "action",
        "v3": "ελέγξει",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "απαντώ",
        "definitions": [
            {
                "text": "Αποκρίνομαι σε ένα μήνυμα ή ερώτηση.",
                "examples": [
                    "Απαντά πάντα στα email την ίδια μέρα."
                ]
            }
        ],
        "subtext": "απαντώ σε email / απαντώ γρήγορα / σε μήνυμα",
        "classification": "regular",
        "aspect": "action",
        "v3": "απαντήσει",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "παρουσιάζω",
        "definitions": [
            {
                "text": "Δείχνω ή εξηγώ κάτι σε μια ομάδα.",
                "examples": [
                    "Παρουσιάζει τα αποτελέσματα κάθε Παρασκευή απόγευμα."
                ]
            }
        ],
        "subtext": "παρουσιάζω αναφορά / παρουσιάζω ιδέες / σε πελάτη",
        "classification": "regular",
        "aspect": "action",
        "v3": "παρουσιάσει",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "παρευρίσκομαι",
        "definitions": [
            {
                "text": "Πηγαίνω σε μια εκδήλωση ή συνάντηση.",
                "examples": [
                    "Παρευρίσκομαι σε μια συνάντηση διοίκησης κάθε Δευτέρα."
                ]
            }
        ],
        "subtext": "παρευρίσκομαι σε συνάντηση / παρακολουθώ μάθημα",
        "classification": "regular",
        "aspect": "action",
        "v3": "παρευρεθεί",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "διαχειρίζομαι",
        "definitions": [
            {
                "text": "Είμαι υπεύθυνος για ανθρώπους ή μια κατάσταση.",
                "examples": [
                    "Διαχειρίζεται μια ομάδα οκτώ ατόμων."
                ]
            }
        ],
        "subtext": "διαχειρίζομαι ομάδα / διαχειρίζομαι έργο / χρόνο",
        "classification": "regular",
        "aspect": "action",
        "v3": "διαχειριστεί",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "χρεώνω",
        "definitions": [
            {
                "text": "Ζητώ ένα ποσό χρημάτων για μια υπηρεσία.",
                "examples": [
                    "Ο μηχανικός χρέωσε τριακόσια ευρώ."
                ]
            }
        ],
        "subtext": "χρεώνω αμοιβή / χρεώνω υπηρεσία / χρεώνω έξτρα",
        "classification": "regular",
        "aspect": "action",
        "v3": "χρεώσει",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "έχω την οικονομική δυνατότητα",
        "definitions": [
            {
                "text": "Έχω αρκετά χρήματα για κάτι.",
                "examples": [
                    "Δεν έχουν την οικονομική δυνατότητα να αγοράσουν διαμέρισμα στο κέντρο."
                ]
            }
        ],
        "subtext": "έχω τη δυνατότητα για σπίτι / για ταξίδι",
        "classification": "irregular",
        "aspect": "stative",
        "v3": "έχει τη δυνατότητα",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "locution"
    },
    {
        "word": "χρωστώ",
        "definitions": [
            {
                "text": "Είμαι υποχρεωμένος να πληρώσω χρήματα σε κάποιον.",
                "examples": [
                    "Χρωστάει στην τράπεζα πενήντα χιλιάδες ευρώ."
                ]
            }
        ],
        "subtext": "χρωστώ χρήματα / χρωστώ σε κάποιον / χρωστώ πολλά",
        "classification": "regular",
        "aspect": "stative",
        "v3": "χρωστάσει",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "κερδίζω",
        "definitions": [
            {
                "text": "Λαμβάνω χρήματα για εργασία που έγινε.",
                "examples": [
                    "Κερδίζει έναν καλό μισθό ως διαχειρίστρια έργου."
                ]
            }
        ],
        "subtext": "κερδίζω μισθό / κερδίζω χρήματα / κερδίζω αρκετά",
        "classification": "regular",
        "aspect": "action",
        "v3": "κερδίσει",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "επισκέπτομαι",
        "definitions": [
            {
                "text": "Πηγαίνω να δω ένα πρόσωπο ή μέρος.",
                "examples": [
                    "Επισκέπτεται τους γονείς της κάθε δεύτερο Σαββατοκύριακο."
                ]
            }
        ],
        "subtext": "επισκέπτομαι οικογένεια / φίλο / πόλη",
        "classification": "regular",
        "aspect": "action",
        "v3": "επισκεφθεί",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "γιορτάζω",
        "definitions": [
            {
                "text": "Κάνω κάτι ευχάριστο για μια ειδική περίσταση.",
                "examples": [
                    "Γιορτάζουν κάθε επέτειο εργασίας μαζί."
                ]
            }
        ],
        "subtext": "γιορτάζω γενέθλια / γιορτάζω επιτυχία / μαζί",
        "classification": "regular",
        "aspect": "action",
        "v3": "γιορτάσει",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "συνιστώ",
        "definitions": [
            {
                "text": "Προτείνω κάτι ως καλό ή κατάλληλο.",
                "examples": [
                    "Μπορείτε να συστήσετε ένα καλό εστιατόριο κοντά στο γραφείο;"
                ]
            }
        ],
        "subtext": "συστήνω μέρος / συστήνω κάποιον / συστήνω ταινία",
        "classification": "regular",
        "aspect": "action",
        "v3": "συστήσει",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "πονώ",
        "definitions": [
            {
                "text": "Προκαλώ πόνο, ή νιώθω πόνο.",
                "examples": [
                    "Η πλάτη μου πονάει αφού κάθομαι όλη μέρα."
                ]
            }
        ],
        "subtext": "πονάει η πλάτη / πονώ κάποιον / με πονάει",
        "classification": "irregular",
        "aspect": "both",
        "v3": "πονέσει",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "ξεκουράζομαι",
        "definitions": [
            {
                "text": "Σταματώ να δουλεύω και χαλαρώνω για να ανακτήσω ενέργεια.",
                "examples": [
                    "Ξεκουράζεται για μία ώρα μετά το μεσημεριανό κάθε μέρα."
                ]
            }
        ],
        "subtext": "ξεκουράζομαι στο σπίτι / μετά τη δουλειά / χρειάζομαι",
        "classification": "regular",
        "aspect": "action",
        "v3": "ξεκουραστεί",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "group_b"
    },
    {
        "word": "αναρρώνω",
        "definitions": [
            {
                "text": "Επιστρέφω σε καλή υγεία μετά από ασθένεια ή τραυματισμό.",
                "examples": [
                    "Αναρρώνει από έναν τραυματισμό στην πλάτη."
                ]
            }
        ],
        "subtext": "αναρρώνω από ασθένεια / γρήγορα / πλήρως",
        "classification": "regular",
        "aspect": "action",
        "v3": "αναρρώσει",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "κάνω κράτηση",
        "definitions": [
            {
                "text": "Κρατώ μια θέση, εισιτήριο ή υπηρεσία εκ των προτέρων.",
                "examples": [
                    "Κάνω πάντα κράτηση ξενοδοχείων online."
                ]
            }
        ],
        "subtext": "κάνω κράτηση ξενοδοχείου / πτήσης / τραπεζιού",
        "classification": "irregular",
        "aspect": "action",
        "v3": "κάνει κράτηση",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "locution"
    },
    {
        "word": "φτιάχνω βαλίτσα",
        "definitions": [
            {
                "text": "Βάζω αντικείμενα σε μια τσάντα ή βαλίτσα για ταξίδι.",
                "examples": [
                    "Φτιάχνει τη βαλίτσα του το βράδυ πριν από ένα ταξίδι."
                ]
            }
        ],
        "subtext": "φτιάχνω τσάντα / φτιάχνω βαλίτσα / παίρνω λίγα",
        "classification": "irregular",
        "aspect": "action",
        "v3": "φτιάξει βαλίτσα",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "locution"
    },
    {
        "word": "ακυρώνω",
        "definitions": [
            {
                "text": "Αποφασίζω ότι κάτι προγραμματισμένο δεν θα συμβεί.",
                "examples": [
                    "Έπρεπε να ακυρώσει την πτήση της λόγω ασθένειας."
                ]
            }
        ],
        "subtext": "ακυρώνω πτήση / ακυρώνω κράτηση / ακυρώνω συνάντηση",
        "classification": "regular",
        "aspect": "action",
        "v3": "ακυρώσει",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "χάνω",
        "definitions": [
            {
                "text": "Αποτυγχάνω να προλάβω ένα μεταφορικό μέσο, ή νιώθω λύπη για απουσία.",
                "examples": [
                    "Έχασε το τρένο του και έπρεπε να περιμένει μία ώρα."
                ]
            }
        ],
        "subtext": "χάνω τρένο / χάνω πτήση / μου λείπει κάποιος",
        "classification": "regular",
        "aspect": "both",
        "v3": "χάσει",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "group_a"
    },
    {
        "word": "παραγγέλνω",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "παραγγέλνω φαγητό / παραγγέλνω ποτό / online",
        "form": "verb",
        "definitions": [
            {
                "text": "Ζητώ κάτι επίσημα, ειδικά φαγητό ή αγαθά.",
                "examples": [
                    "Παραγγέλνω πάντα μεσημεριανό από το ίδιο μέρος κοντά στο γραφείο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παραγγείλει",
        "group": "group_a"
    },
    {
        "word": "εξηγώ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "εξηγώ διαδικασία / εξηγώ καθαρά / εξηγώ σε κάποιον",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι σαφές δίνοντας λεπτομέρειες.",
                "examples": [
                    "Εξηγεί πάντα τη διαδικασία στα νέα μέλη της ομάδας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "εξηγήσει",
        "group": "group_b"
    },
    {
        "word": "ευχαριστώ",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "ευχαριστώ κάποιον / ευχαριστώ για / πολλές ευχαριστίες",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκφράζω ευγνωμοσύνη σε κάποιον.",
                "examples": [
                    "Ευχαρίστησε την ομάδα για τη σκληρή δουλειά της στο έργο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ευχαριστήσει",
        "group": "group_b"
    },
    {
        "word": "συστήνω",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "συστήνομαι / συστήνω κάποιον / παρουσιάζω θέμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Παρουσιάζω κάποιον σε ένα άλλο πρόσωπο.",
                "examples": [
                    "Συστήθηκε στην αρχή της συνάντησης."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συστήσει",
        "group": "group_a"
    },
    {
        "word": "χαλαρώνω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "χαλαρώνω στο σπίτι / μετά τη δουλειά / στις διακοπές",
        "form": "verb",
        "definitions": [
            {
                "text": "Σταματώ να δουλεύω και ξεκουράζομαι, γίνομαι λιγότερο τεταμένος.",
                "examples": [
                    "Χαλαρώνω το Σαββατοκύριακο και δεν ελέγχω ποτέ τα email."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "χαλαρώσει",
        "group": "group_a"
    },
    {
        "word": "επισκευάζω",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "επισκευάζω κάτι / κάνω επισκευή / κόστος επισκευής",
        "form": "verb",
        "definitions": [
            {
                "text": "Διορθώνω κάτι που είναι σπασμένο.",
                "examples": [
                    "Ο ιδιοκτήτης αργεί να επισκευάσει πράγματα στο διαμέρισμα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επισκευάσει",
        "group": "group_a"
    },
    {
        "word": "συμβαίνει",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "τι συνέβη / συμβαίνει σε κάποιον / συμβαίνει",
        "form": "verb",
        "definitions": [
            {
                "text": "Λαμβάνει χώρα, προκύπτει.",
                "examples": [
                    "Τι συνέβη στη συνάντηση; Κάτι πήγε στραβά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συμβεί",
        "group": "group_a"
    },
    {
        "word": "φαίνομαι",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "φαίνεται καλό / φαίνεται ανήσυχος / φαίνεται χαρούμενος",
        "form": "verb",
        "definitions": [
            {
                "text": "Εμφανίζομαι ως κάτι, δίνω μια εντύπωση.",
                "examples": [
                    "Φαίνεται πολύ σίγουρη στις συναντήσεις με πελάτες."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "φανεί",
        "group": "group_b"
    },
    {
        "word": "σημαίνω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "σημαίνω κάτι / τι σημαίνει / εννοώ",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια συγκεκριμένη σημασία, σκοπεύω.",
                "examples": [
                    "Τι σημαίνει αυτή η ρήτρα στο συμβόλαιο;"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "σημάνει",
        "group": "group_a"
    },
    {
        "word": "ακολουθώ",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "ακολουθώ οδηγίες / ακολουθώ κάποιον / τις ειδήσεις",
        "form": "verb",
        "definitions": [
            {
                "text": "Έρχομαι μετά, υπακούω σε κανόνες ή οδηγίες.",
                "examples": [
                    "Παρακαλώ ακολουθήστε τις οδηγίες προσεκτικά. Ακολουθεί τις ειδήσεις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ακολουθήσει",
        "group": "group_b"
    },
    {
        "word": "συνεχίζω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "συνεχίζω να δουλεύω / συνεχίζω να κάνω / μια εργασία",
        "form": "verb",
        "definitions": [
            {
                "text": "Συνεχίζω να κάνω κάτι χωρίς σταματημό.",
                "examples": [
                    "Συνέχισε να δουλεύει μετά τις έξι παρόλο που ένιωθε άρρωστος."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συνεχίσει",
        "group": "group_a"
    },
    {
        "word": "μεγαλώνω",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "αναπτύσσω επιχείρηση / μεγαλώνω γρήγορα / εξελίσσομαι σε",
        "form": "verb",
        "definitions": [
            {
                "text": "Αυξάνομαι σε μέγεθος ή ποσότητα, αναπτύσσομαι.",
                "examples": [
                    "Η εταιρεία μεγάλωσε κατά είκοσι τοις εκατό πέρυσι."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "μεγαλώσει",
        "group": "group_a"
    },
    {
        "word": "περιλαμβάνω",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "περιλαμβάνω κάτι / περιλαμβάνεται σε / δεν περιλαμβάνεται",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι μέρος ενός συνόλου.",
                "examples": [
                    "Η τιμή περιλαμβάνει πρωινό και βραδινό γεύμα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "περιλάβει",
        "group": "group_a"
    },
    {
        "word": "γίνομαι",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "γίνομαι διευθυντής / γίνομαι δημοφιλής / γίνομαι σαφές",
        "form": "verb",
        "definitions": [
            {
                "text": "Αρχίζω να είμαι κάτι.",
                "examples": [
                    "Έγινε διευθύντρια μετά από μόλις δύο χρόνια στον ρόλο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "γίνει",
        "group": "irregular"
    },
    {
        "word": "ανήκω",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "ανήκω σε κάποιον / ανήκω σε / νιώθω ότι ανήκω",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι ιδιοκτησία κάποιου, είμαι μέλος.",
                "examples": [
                    "Αυτός ο λογαριασμός ανήκει στο οικονομικό τμήμα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "ανήκει",
        "group": "group_a"
    },
    {
        "word": "επιλέγω",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "επιλέγω ανάμεσα / επιλέγω να κάνω / επιλέγω προσεκτικά",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιλέγω ανάμεσα σε επιλογές.",
                "examples": [
                    "Επέλεξε να δουλεύει μερική απασχόληση για να περνά χρόνο με την οικογένεια."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "επιλέξει",
        "group": "group_a"
    },
    {
        "word": "χτίζω",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "χτίζω καριέρα / χτίζω ομάδα / χτίζω εμπιστοσύνη",
        "form": "verb",
        "definitions": [
            {
                "text": "Κατασκευάζω κάτι, αναπτύσσω κάτι με τον καιρό.",
                "examples": [
                    "Έχτισε μια ισχυρή φήμη σε δέκα χρόνια."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "χτίσει",
        "group": "group_a"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
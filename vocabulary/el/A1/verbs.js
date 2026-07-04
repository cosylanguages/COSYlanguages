// TODO: verify level classification
(function() {
const data = [
    {
        "word": "είμαι",
        "level": "starter",
        "theme": "name_greeting",
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
        "group": "1st_conj",
        "transcription": "/ˈime/",
        "auxiliary": "έχω",
        "tenses": {
            "present_simple": {
                "positive": ["είμαι", "είσαι", "είναι", "είμαστε", "είστε", "είναι"]
            }
        }
    },
    {
        "word": "έχω",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "έχω δουλειά / έχω πρόβλημα",
        "synonyms": [
            "τρώω μεσημεριανό"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈexo/",
        "auxiliary": "έχω",
        "tenses": {
            "present_simple": {
                "positive": ["έχω", "έχεις", "έχει", "έχουμε", "έχετε", "έχουν"]
            }
        }
    },
    {
        "word": "νιώθω",
        "level": "starter",
        "theme": "health_medicine",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "δίνω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "δίνω συμβουλές / δίνω χρήματα / δίνω δώρο",
        "opposite": "παίρνω",
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
        "group": "1st_conj",
        "transcription": "/ˈðino/",
        "auxiliary": "έχω"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "παίρνω το λεωφορείο / παίρνω φάρμακο",
        "synonyms": [
            "κάνω διάλειμμα"
        ],
        "opposite": "δίνω",
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
        "group": "1st_conj",
        "transcription": "/ˈperno/",
        "auxiliary": "έχω"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "βρίσκω δουλειά",
            "κουράζομαι",
            "βελτιώνομαι"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈperno/",
        "auxiliary": "έχω"
    },
    {
        "word": "βάζω",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "📥",
        "subtext": "βάζω / αφήνω κάτω το τηλέφωνο",
        "synonyms": [
            "τακτοποιώ"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈvazo/",
        "auxiliary": "έχω"
    },
    {
        "word": "φτιάχνω",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "φτιάχνω καφέ",
        "synonyms": [
            "παίρνω απόφαση",
            "κάνω λάθος"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "κάνω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ˈkano/",
        "auxiliary": "έχω"
    },
    {
        "word": "χρησιμοποιώ",
        "level": "starter",
        "theme": "technology",
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
        "group": "1st_conj",
        "transcription": "/xrisimopiˈo/",
        "auxiliary": "έχω"
    },
    {
        "word": "ανοίγω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "ανοίγω πόρτα / ανοίγω λογαριασμό / ανοίγω μαγαζί",
        "opposite": "κλείνω",
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
        "group": "1st_conj",
        "transcription": "/aˈniɣo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "κλείνω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "κλείνω πόρτα / κλείνω στις έξι / κλείνω λογαριασμό",
        "opposite": "ανοίγω",
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
        "group": "1st_conj",
        "transcription": "/ˈklino/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "ξεκινώ",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "ξεκινώ δουλειά / ξεκινώ συνάντηση / ξεκινώ νέα δουλειά",
        "opposite": "τελειώνω",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "τελειώνω",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "τελειώνω δουλειά / τελειώνω έργο / τελειώνω νωρίς",
        "opposite": "ξεκινώ",
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
        "group": "1st_conj",
        "transcription": "/teliˈono/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "βοηθώ",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "βοηθώ κάποιον / βοηθώ με μια εργασία",
        "synonyms": [
            "ζητώ βοήθεια"
        ],
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
        "group": "1st_conj",
        "transcription": "/voiˈθo/",
        "auxiliary": "έχω"
    },
    {
        "word": "προσπαθώ",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "προσπαθώ να κάνω / προσπαθώ σκληρά",
        "synonyms": [
            "δοκιμάζω κάτι νέο"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "δείχνω",
        "level": "starter",
        "theme": "language",
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
        "group": "1st_conj",
        "transcription": "/ˈðixno/",
        "auxiliary": "έχω"
    },
    {
        "word": "βρίσκω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "βρίσκω δουλειά / βρίσκω χρόνο",
        "synonyms": [
            "ανακαλύπτω"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈvrisko/",
        "auxiliary": "έχω"
    },
    {
        "word": "κρατώ",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "κρατώ αρχείο",
        "synonyms": [
            "συνεχίζω",
            "μένω σιωπηλός"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "χάνω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "χάνω δουλειά / χάνω χρήματα / χάνω βάρος",
        "opposite": "κερδίζω",
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
        "group": "1st_conj",
        "transcription": "/ˈxano/",
        "auxiliary": "έχω"
    },
    {
        "word": "κόβω",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "✂️",
        "subtext": "κόβω κόστη / κόβω στη μέση",
        "synonyms": [
            "μειώνω δαπάνες"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈkovo/",
        "auxiliary": "έχω"
    },
    {
        "word": "στρίβω",
        "level": "starter",
        "theme": "directions_navigation",
        "emoji": "🔄",
        "subtext": "στρίβω αριστερά / στρίβω δεξιά",
        "synonyms": [
            "ανάβω",
            "σβήνω"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈstrivo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "φέρνω",
        "level": "starter",
        "theme": "food_drink",
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
        "group": "1st_conj",
        "transcription": "/ˈferno/",
        "auxiliary": "έχω"
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "group": "1st_conj",
        "transcription": "/ˈleo/",
        "auxiliary": "έχω"
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "language",
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
        "group": "1st_conj",
        "transcription": "/ˈleo/",
        "auxiliary": "έχω"
    },
    {
        "word": "ρωτώ",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "ρωτώ για",
        "synonyms": [
            "κάνω ερώτηση",
            "ζητώ βοήθεια"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "μιλώ",
        "level": "starter",
        "theme": "greetings_social_phrases",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "μιλάω",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "",
        "synonyms": [
            "μιλώ σε κάποιον",
            "μιλώ για",
            "μιλώ ανοιχτά"
        ],
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
        "group": "1st_conj",
        "transcription": "/miˈlao/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "καλώ",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "καλώ κάποιον / καλώ πίσω",
        "synonyms": [
            "συγκαλώ συνάντηση"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "γράφω",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "γράφω email / γράφω αναφορά / γράφω γράμμα",
        "opposite": "διαβάζω",
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
        "group": "1st_conj",
        "transcription": "/ˈɣrafo/",
        "auxiliary": "έχω"
    },
    {
        "word": "διαβάζω",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "διαβάζω βιβλίο / διαβάζω ειδήσεις / διαβάζω συμβόλαιο",
        "opposite": "γράφω",
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
        "group": "1st_conj",
        "transcription": "/ðiaˈvazo/",
        "auxiliary": "έχω"
    },
    {
        "word": "ακούω",
        "level": "starter",
        "theme": "school",
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
        "group": "1st_conj",
        "transcription": "/aˈkuo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "απαντώ",
        "level": "starter",
        "theme": "language",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "επαναλαμβάνω",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🔁",
        "subtext": "επαναλαμβάνω αυτό",
        "synonyms": [
            "επαναλαμβάνομαι"
        ],
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
        "group": "1st_conj",
        "transcription": "/epanalavˈvano/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "πηγαίνω",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "πηγαίνω δουλειά / πηγαίνω σπίτι",
        "synonyms": [
            "βγαίνω έξω"
        ],
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
        "group": "1st_conj",
        "transcription": "/piˈʝeno/",
        "auxiliary": "έχω"
    },
    {
        "word": "έρχομαι",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "έρχομαι σπίτι / έρχομαι στη δουλειά",
        "synonyms": [
            "επιστρέφω"
        ],
        "opposite": "πηγαίνω",
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
        "group": "1st_conj",
        "transcription": "/ˈerxome/",
        "auxiliary": "έχω"
    },
    {
        "word": "περπατώ",
        "level": "starter",
        "theme": "travel",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "οδηγώ",
        "level": "starter",
        "theme": "travel",
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
        "group": "1st_conj",
        "transcription": "/oðiˈɣo/",
        "auxiliary": "έχω"
    },
    {
        "word": "πετώ",
        "level": "starter",
        "theme": "travel",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "φτάνω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ˈftano/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "φεύγω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ˈfefɣo/",
        "auxiliary": "έχω"
    },
    {
        "word": "μετακινούμαι",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "μετακομίζω",
            "μετακομίζω σε πόλη",
            "προχωρώ"
        ],
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
        "group": "1st_conj",
        "transcription": "/metaciˈnume/",
        "auxiliary": "έχω"
    },
    {
        "word": "επιστρέφω",
        "level": "starter",
        "theme": "travel",
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
        "group": "1st_conj",
        "transcription": "/epiˈstrefo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "ταξιδεύω",
        "level": "starter",
        "theme": "public_transport",
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
        "group": "1st_conj",
        "transcription": "/taksiˈðevo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "τρώω",
        "image": "images/vocabulary/actions/to eat.png",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "τρώω πρωινό",
        "synonyms": [
            "μεσημεριανό",
            "βραδινό"
        ],
        "opposite": "πίνω",
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
        "group": "1st_conj",
        "transcription": "/ˈtroo/",
        "auxiliary": "έχω"
    },
    {
        "word": "πίνω",
        "image": "images/vocabulary/actions/to drink.png",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "πίνω καφέ / πίνω τσάι / πίνω νερό",
        "opposite": "τρώω",
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
        "group": "1st_conj",
        "transcription": "/ˈpino/",
        "auxiliary": "έχω"
    },
    {
        "word": "κοιμάμαι",
        "image": "images/vocabulary/actions/to fall asleep. to sleep.png",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "κοιμάμαι καλά / κοιμάμαι άσχημα / κοιμάμαι οκτώ ώρες",
        "opposite": "ξυπνάω",
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
        "group": "1st_conj",
        "transcription": "/ciˈmame/",
        "auxiliary": "έχω"
    },
    {
        "word": "μαγειρεύω",
        "image": "images/vocabulary/actions/to cook.png",
        "level": "starter",
        "theme": "cooking_methods",
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
        "group": "1st_conj",
        "transcription": "/maʝiˈrevo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "καθαρίζω",
        "image": "images/vocabulary/actions/to clean. to sweep.png",
        "level": "starter",
        "theme": "furniture",
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
        "group": "1st_conj",
        "transcription": "/kaθaˈrizo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "φοράω",
        "level": "starter",
        "theme": "clothes",
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
        "group": "1st_conj",
        "transcription": "/foˈrao/",
        "auxiliary": "έχω"
    },
    {
        "word": "πλένω",
        "image": "images/vocabulary/actions/to do the dishes. to wash the dishes.png",
        "level": "starter",
        "theme": "furniture",
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
        "group": "1st_conj",
        "transcription": "/ˈpleno/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "αγοράζω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "αγοράζω φαγητό / αγοράζω εισιτήριο",
        "opposite": "πουλώ",
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
        "group": "1st_conj",
        "transcription": "/aˈɣorazo/",
        "auxiliary": "έχω"
    },
    {
        "word": "πληρώνω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "πληρώνω λογαριασμό / πληρώνω ενοίκιο",
        "synonyms": [
            "με κάρτα"
        ],
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
        "group": "1st_conj",
        "transcription": "/pliˈrono/",
        "auxiliary": "έχω"
    },
    {
        "word": "ξοδεύω",
        "level": "starter",
        "theme": "shopping",
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
        "group": "1st_conj",
        "transcription": "/ksoˈðevo/",
        "auxiliary": "έχω"
    },
    {
        "word": "αποταμιεύω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "αποταμιεύω χρήματα / αποταμιεύω για σπίτι",
        "opposite": "ξοδεύω",
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
        "group": "1st_conj",
        "transcription": "/apotamiˈevo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "δουλεύω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ðuˈlevo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "ζω",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "subtext": "ζω σε διαμέρισμα / ζω μόνος / ζω με κάποιον",
        "opposite": "πεθαίνω",
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
        "group": "1st_conj",
        "transcription": "/zo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "σκέφτομαι",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "σκέφτομαι / σκέφτομαι προσεκτικά",
        "synonyms": [
            "νομίζω"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "ξέρω",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "ξέρω την απάντηση / ξέρω πώς",
        "synonyms": [
            "γνωρίζω κάποιον"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈksero/",
        "auxiliary": "έχω"
    },
    {
        "word": "θέλω",
        "level": "starter",
        "theme": "emotions",
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
        "group": "1st_conj",
        "transcription": "/ˈθelo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "χρειάζομαι",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "χρειάζομαι βοήθεια / χρειάζομαι χρόνο",
        "synonyms": [
            "χρήματα"
        ],
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
        "group": "1st_conj",
        "transcription": "/xriˈazome/",
        "auxiliary": "έχω"
    },
    {
        "word": "μου αρέσει",
        "image": "images/vocabulary/actions/to agree. to like.png",
        "level": "starter",
        "theme": "emotions",
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
        "group": "1st_conj",
        "transcription": "/mu aˈresi/",
        "auxiliary": "έχω"
    },
    {
        "word": "αγαπώ",
        "level": "starter",
        "theme": "emotions",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "μισώ",
        "level": "starter",
        "theme": "emotions",
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
        "group": "1st_conj",
        "transcription": "/miˈso/",
        "auxiliary": "έχω"
    },
    {
        "word": "ελπίζω",
        "level": "starter",
        "theme": "emotions",
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
        "group": "1st_conj",
        "transcription": "/elˈpizo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "θυμάμαι",
        "level": "starter",
        "theme": "school",
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
        "group": "1st_conj",
        "transcription": "/θiˈmame/",
        "auxiliary": "έχω"
    },
    {
        "word": "ξεχνώ",
        "level": "starter",
        "theme": "school",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "καταλαβαίνω",
        "level": "starter",
        "theme": "language",
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
        "group": "1st_conj",
        "transcription": "/katalaveno/",
        "auxiliary": "έχω"
    },
    {
        "word": "αποφασίζω",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "αποφασίζω να κάνω / αποφασίζω για",
        "synonyms": [
            "παίρνω απόφαση"
        ],
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
        "group": "1st_conj",
        "transcription": "/apofaˈsizo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "απολαμβάνω",
        "level": "starter",
        "theme": "emotions",
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
        "group": "1st_conj",
        "transcription": "/apolamˈvano/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "body",
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
        "group": "1st_conj",
        "transcription": "/ˈvlepo/",
        "auxiliary": "έχω"
    },
    {
        "word": "ακούω",
        "level": "starter",
        "theme": "body",
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
        "group": "1st_conj",
        "transcription": "/aˈkuo/",
        "auxiliary": "έχω"
    },
    {
        "word": "ξυπνάω",
        "image": "images/vocabulary/actions/to wake up.png",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "ξυπνάω νωρίς / ξυπνάω στις 7 / ξυπνάω κουρασμένος",
        "opposite": "κοιμάμαι",
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
        "group": "1st_conj",
        "transcription": "/ksiˈpnao/",
        "auxiliary": "έχω"
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/ˈvlepo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "κοιτάζω",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "κοιτάζω",
        "synonyms": [
            "ψάχνω",
            "μοιάζω με"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "παίζω",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/ˈpezo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "τρέχω",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "τρέχω / τρέχω σε αγώνα",
        "synonyms": [
            "διευθύνω επιχείρηση"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈtrexo/",
        "auxiliary": "έχω"
    },
    {
        "word": "κάθομαι",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "κάθομαι / κάθομαι στο γραφείο / κάθομαι σε συνάντηση",
        "opposite": "στέκομαι",
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
        "group": "1st_conj",
        "transcription": "/ˈkaθome/",
        "auxiliary": "έχω"
    },
    {
        "word": "στέκομαι",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "στέκομαι / στέκομαι στην ουρά",
        "synonyms": [
            "σηκώνομαι"
        ],
        "opposite": "κάθομαι",
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
        "group": "1st_conj",
        "transcription": "/ˈstecome/",
        "auxiliary": "έχω"
    },
    {
        "word": "συναντώ",
        "level": "starter",
        "theme": "work",
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
        "subtext": "συναντώ κάποιον",
        "synonyms": [
            "συναντιόμαστε για μεσημεριανό"
        ],
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "μαθαίνω",
        "level": "starter",
        "theme": "school",
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
        "group": "1st_conj",
        "transcription": "/maˈθeno/",
        "auxiliary": "έχω"
    },
    {
        "word": "αλλάζω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/aˈlazo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "σταματώ",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "προσθέτω",
        "level": "starter",
        "theme": "numbers",
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
        "group": "1st_conj",
        "transcription": "/prosˈθeto/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "κερδίζω",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "κερδίζω / κερδίζω βραβείο / κερδίζω συμβόλαιο",
        "opposite": "χάνω",
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
        "group": "1st_conj",
        "transcription": "/cerˈðizo/",
        "auxiliary": "έχω"
    },
    {
        "word": "περιμένω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/periˈmeno/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "πεθαίνω",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "πεθαίνω / πεθαίνω από",
        "synonyms": [
            "εξαφανίζομαι"
        ],
        "opposite": "ζω",
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
        "group": "1st_conj",
        "transcription": "/peˈθeno/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "στέλνω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ˈstelno/",
        "auxiliary": "έχω"
    },
    {
        "word": "μένω",
        "level": "starter",
        "theme": "travel",
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
        "group": "1st_conj",
        "transcription": "/ˈmeno/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "πέφτω",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "πέφτω / με παίρνει ο ύπνος",
        "synonyms": [
            "ερωτεύομαι"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈpefto/",
        "auxiliary": "έχω"
    },
    {
        "word": "περνώ",
        "level": "starter",
        "theme": "school",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "πουλώ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "πουλώ / πουλώ online / πουλώ στην αγορά",
        "opposite": "αγοράζω",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "τραβώ",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "τραβώ / τραβώ την πόρτα",
        "synonyms": [
            "απομακρύνομαι"
        ],
        "opposite": "σπρώχνω",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "σπρώχνω",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "σπρώχνω / σπρώχνω καρότσι",
        "synonyms": [
            "πατώ κουμπί"
        ],
        "opposite": "τραβώ",
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
        "group": "1st_conj",
        "transcription": "/ˈsproxno/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "κουβαλώ",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "σπάω",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "σπάω / σπάω το γυαλί",
        "synonyms": [
            "κάνω διάλειμμα"
        ],
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
        "group": "1st_conj",
        "transcription": "/ˈspao/",
        "auxiliary": "έχω"
    },
    {
        "word": "λαμβάνω",
        "level": "starter",
        "theme": "shopping",
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
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "συμφωνώ",
        "image": "images/vocabulary/actions/to agree. to like.png",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/simfoˈno/",
        "auxiliary": "έχω"
    },
    {
        "word": "σχεδιάζω",
        "image": "images/vocabulary/actions/to draw. to sketch.png",
        "level": "starter",
        "theme": "cinema_film",
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
        "group": "1st_conj",
        "transcription": "/sçeˈðiazo/",
        "auxiliary": "έχω"
    },
    {
        "word": "μοιράζομαι",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/miˈrazome/",
        "auxiliary": "έχω"
    },
    {
        "word": "χαμογελώ",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "χαμογελώ / χαμογελώ σε κάποιον",
        "synonyms": [
            "πλατιά"
        ],
        "opposite": "κλαίω",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "κλαίω",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "κλαίω / κλαίω για βοήθεια / κλαίω για κάτι",
        "opposite": "χαμογελώ",
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
        "group": "1st_conj",
        "transcription": "/ˈkleo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "χορεύω",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "χορεύω / χορεύω με μουσική",
        "synonyms": [
            "πηγαίνω για χορό"
        ],
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
        "group": "1st_conj",
        "transcription": "/xoˈrevo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "τραγουδώ",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "τραγουδώ / τραγουδώ ένα τραγούδι",
        "synonyms": [
            "σιγοτραγουδώ"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "πηδώ",
        "level": "starter",
        "theme": "sports",
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "κολυμπώ",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏊",
        "subtext": "κολυμπώ / κολυμπώ γύρους",
        "synonyms": [
            "πάω για κολύμπι"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "σπουδάζω",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "σπουδάζω",
        "synonyms": [
            "μαθαίνω αγγλικά",
            "προετοιμάζομαι"
        ],
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
        "group": "1st_conj",
        "transcription": "/spuˈðazo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "διδάσκω",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "διδάσκω / διδάσκω μάθημα",
        "synonyms": [
            "μαθαίνω σε κάποιον"
        ],
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
        "group": "1st_conj",
        "transcription": "/ðiˈðasko/",
        "auxiliary": "έχω"
    },
    {
        "word": "μετακινούμαι",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "🚆",
        "subtext": "μετακινούμαι",
        "synonyms": [
            "καθημερινή μετακίνηση",
            "μακρινή"
        ],
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
        "group": "1st_conj",
        "transcription": "/metaciˈnume/",
        "auxiliary": "έχω"
    },
    {
        "word": "νοικιάζω",
        "level": "starter",
        "theme": "travel",
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
        "group": "1st_conj",
        "transcription": "/niˈciazo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "γυμνάζομαι",
        "level": "starter",
        "theme": "social",
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
        "subtext": "γυμνάζομαι / γυμνάζομαι τακτικά",
        "synonyms": [
            "στο γυμναστήριο"
        ],
        "group": "1st_conj",
        "transcription": "/ʝiˈmnazome/",
        "auxiliary": "έχω"
    },
    {
        "word": "κοστίζω",
        "level": "starter",
        "theme": "shopping",
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
        "subtext": "κοστίζω",
        "synonyms": [
            "κοστίζει ακριβά",
            "κοστίζει χρήματα"
        ],
        "group": "1st_conj",
        "transcription": "/koˈstizo/",
        "auxiliary": "έχω"
    },
    {
        "word": "προσκαλώ",
        "level": "starter",
        "theme": "social",
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
        "subtext": "προσκαλώ / προσκαλώ σε δείπνο",
        "synonyms": [
            "καλώ κάποιον"
        ],
        "group": "1st_conj",
        "transcription": "/proskaˈlo/",
        "auxiliary": "έχω"
    },
    {
        "word": "σηκώνομαι",
        "image": "images/vocabulary/actions/to get up.png",
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
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/siˈconome/",
        "auxiliary": "έχω"
    },
    {
        "word": "τρώω πρωινό",
        "image": "images/vocabulary/actions/to have breakfast.png",
        "definitions": [
            {
                "text": "Παίρνω το πρωινό γεύμα.",
                "examples": [
                    "Τρώει πάντα πρωινό πριν φύγει από το σπίτι."
                ]
            }
        ],
        "subtext": "τρώω πρωινό στο σπίτι",
        "synonyms": [
            "γρήγορο πρωινό",
            "παραλείπω"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "φάει πρωινό",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ˈtroo proiˈno/",
        "auxiliary": "έχω"
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
        "subtext": "επιστρέφω σπίτι / επιστρέφω αργά",
        "synonyms": [
            "από ταξίδι"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "επιστρέψει",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/epiˈstrefo/",
        "auxiliary": "έχω"
    },
    {
        "word": "πέφτω για ύπνο",
        "image": "images/vocabulary/actions/to go to bed.png",
        "definitions": [
            {
                "text": "Μπαίνω στο κρεβάτι για να κοιμηθώ.",
                "examples": [
                    "Πέφτουν για ύπνο στις έντεκα κάθε βράδυ."
                ]
            }
        ],
        "subtext": "πέφτω για ύπνο νωρίς",
        "synonyms": [
            "πέφτω αργά",
            "κουρασμένος"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πέσει για ύπνο",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "theme": "work",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/eˈleŋxo/",
        "auxiliary": "έχω",
        "v2": ""
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
        "subtext": "απαντώ σε email / απαντώ γρήγορα",
        "synonyms": [
            "σε μήνυμα"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "απαντήσει",
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "subtext": "παρουσιάζω αναφορά / παρουσιάζω ιδέες",
        "synonyms": [
            "σε πελάτη"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παρουσιάσει",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/parusiˈazo/",
        "auxiliary": "έχω",
        "v2": ""
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
        "subtext": "παρευρίσκομαι σε συνάντηση",
        "synonyms": [
            "παρακολουθώ μάθημα"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παρευρεθεί",
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "subtext": "διαχειρίζομαι ομάδα / διαχειρίζομαι έργο",
        "synonyms": [
            "χρόνο"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "διαχειριστεί",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ðiaçiriˈzome/",
        "auxiliary": "έχω"
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
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/çreˈono/",
        "auxiliary": "έχω",
        "v2": ""
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
        "subtext": "έχω τη δυνατότητα για σπίτι",
        "synonyms": [
            "για ταξίδι"
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "έχει τη δυνατότητα",
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/cerˈðizo/",
        "auxiliary": "έχω",
        "v2": ""
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
        "subtext": "επισκέπτομαι οικογένεια",
        "synonyms": [
            "φίλο",
            "πόλη"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επισκεφθεί",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/epiˈsceptome/",
        "auxiliary": "έχω"
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
        "subtext": "γιορτάζω γενέθλια / γιορτάζω επιτυχία",
        "synonyms": [
            "μαζί"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "γιορτάσει",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ʝiorˈtazo/",
        "auxiliary": "έχω",
        "v2": ""
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
        "subtext": "",
        "synonyms": [
            "συστήνω μέρος",
            "συστήνω κάποιον",
            "συστήνω ταινία"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συστήσει",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "subtext": "πονώ κάποιον",
        "synonyms": [
            "πονάει η πλάτη",
            "με πονάει"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "πονέσει",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "subtext": "ξεκουράζομαι στο σπίτι",
        "synonyms": [
            "μετά τη δουλειά",
            "χρειάζομαι"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ξεκουραστεί",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ksecuˈrazome/",
        "auxiliary": "έχω"
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
        "subtext": "αναρρώνω από ασθένεια",
        "synonyms": [
            "γρήγορα",
            "πλήρως"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αναρρώσει",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": ""
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
        "subtext": "κάνω κράτηση ξενοδοχείου",
        "synonyms": [
            "πτήσης",
            "τραπεζιού"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κάνει κράτηση",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ˈkano ˈkratisi/",
        "auxiliary": "έχω"
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
        "subtext": "φτιάχνω βαλίτσα",
        "synonyms": [
            "φτιάχνω τσάντα",
            "παίρνω λίγα"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "φτιάξει βαλίτσα",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "auxiliary": "έχω"
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
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/aciˈrono/",
        "auxiliary": "έχω",
        "v2": ""
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
        "subtext": "χάνω τρένο / χάνω πτήση",
        "synonyms": [
            "μου λείπει κάποιος"
        ],
        "classification": "regular",
        "aspect": "both",
        "v3": "χάσει",
        "theme": "public_transport",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "1st_conj",
        "transcription": "/ˈxano/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "παραγγέλνω",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "παραγγέλνω φαγητό / παραγγέλνω ποτό",
        "synonyms": [
            "online"
        ],
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
        "group": "1st_conj",
        "transcription": "/paraˈŋɡelno/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "εξηγώ",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/eksiˈɣo/",
        "auxiliary": "έχω"
    },
    {
        "word": "ευχαριστώ",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🙏",
        "subtext": "ευχαριστώ κάποιον / ευχαριστώ για",
        "synonyms": [
            "πολλές ευχαριστίες"
        ],
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
        "group": "1st_conj",
        "transcription": "/efxariˈsto/",
        "auxiliary": "έχω"
    },
    {
        "word": "συστήνω",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "🤝",
        "subtext": "συστήνω κάποιον",
        "synonyms": [
            "συστήνομαι",
            "παρουσιάζω θέμα"
        ],
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
        "group": "1st_conj",
        "transcription": "/siˈstino/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "χαλαρώνω",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "χαλαρώνω στο σπίτι",
        "synonyms": [
            "μετά τη δουλειά",
            "στις διακοπές"
        ],
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
        "group": "1st_conj",
        "transcription": "/xalaˈrono/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "επισκευάζω",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "επισκευάζω κάτι",
        "synonyms": [
            "κάνω επισκευή",
            "κόστος επισκευής"
        ],
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
        "group": "1st_conj",
        "transcription": "/episcevˈazo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "συμβαίνει",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "συμβαίνει σε κάποιον / συμβαίνει",
        "synonyms": [
            "τι συνέβη"
        ],
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
        "group": "1st_conj",
        "transcription": "/simˈveni/",
        "auxiliary": "έχω"
    },
    {
        "word": "φαίνομαι",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "",
        "synonyms": [
            "φαίνεται καλό",
            "φαίνεται ανήσυχος",
            "φαίνεται χαρούμενος"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "σημαίνω",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "σημαίνω κάτι",
        "synonyms": [
            "τι σημαίνει",
            "εννοώ"
        ],
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
        "group": "1st_conj",
        "auxiliary": "έχω"
    },
    {
        "word": "ακολουθώ",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "ακολουθώ οδηγίες / ακολουθώ κάποιον",
        "synonyms": [
            "τις ειδήσεις"
        ],
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
        "group": "1st_conj",
        "transcription": "/akoluˈθo/",
        "auxiliary": "έχω"
    },
    {
        "word": "συνεχίζω",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "συνεχίζω να δουλεύω / συνεχίζω να κάνω",
        "synonyms": [
            "μια εργασία"
        ],
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
        "group": "1st_conj",
        "transcription": "/sineˈçizo/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "μεγαλώνω",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "μεγαλώνω γρήγορα",
        "synonyms": [
            "αναπτύσσω επιχείρηση",
            "εξελίσσομαι σε"
        ],
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
        "group": "1st_conj",
        "transcription": "/meɣaˈlono/",
        "auxiliary": "έχω"
    },
    {
        "word": "περιλαμβάνω",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "περιλαμβάνω κάτι",
        "synonyms": [
            "περιλαμβάνεται σε",
            "δεν περιλαμβάνεται"
        ],
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
        "group": "1st_conj",
        "transcription": "/perilamˈvano/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "γίνομαι",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ˈʝinome/",
        "auxiliary": "έχω"
    },
    {
        "word": "ανήκω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/aˈnico/",
        "auxiliary": "έχω",
        "v2": ""
    },
    {
        "word": "επιλέγω",
        "level": "starter",
        "theme": "social",
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
        "group": "1st_conj",
        "transcription": "/epiˈleɣo/",
        "auxiliary": "έχω"
    },
    {
        "word": "χτίζω",
        "level": "starter",
        "theme": "work",
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
        "group": "1st_conj",
        "transcription": "/ˈxtizo/",
        "auxiliary": "έχω"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();
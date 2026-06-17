// TODO: verify level classification
(function() {
const data = [
    {
        "word": "βουρτσίζω τα δόντια",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🪥",
        "form": "verb",
        "subtext": "βουρτσίζω τα δόντια μου δύο φορές την ημέρα",
        "definitions": [
            {
                "text": "Καθαρίζω τα δόντια χρησιμοποιώντας οδοντόβουρτσα.",
                "examples": [
                    "Βουρτσίζω τα δόντια μου κάθε πρωί και βράδυ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "βουρτσισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_furniture_007"
    },
    {
        "word": "κάνω ντους",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🚿",
        "form": "verb",
        "subtext": "κάνω ένα γρήγορο ντους",
        "definitions": [
            {
                "text": "Πλένω το σώμα μου κάτω από το ντους.",
                "examples": [
                    "Συνήθως κάνω ντους το πρωί."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κάνει ντους",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_furniture_008"
    },
    {
        "word": "φαίνομαι",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "φαίνομαι χαρούμενος",
        "synonyms": [
            "φαίνεται καλή ιδέα"
        ],
        "definitions": [
            {
                "text": "Δίνω την εντύπωση ότι είμαι κάτι.",
                "examples": [
                    "Φαίνεσαι κουρασμένος σήμερα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "φανεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_044"
    },
    {
        "word": "γίνομαι",
        "level": "elementary",
        "theme": "people",
        "emoji": "🦋",
        "form": "verb",
        "subtext": "γίνομαι γιατρός / γίνομαι διάσημος",
        "definitions": [
            {
                "text": "Αρχίζω να είμαι κάτι.",
                "examples": [
                    "Θέλει να γίνει πιλότος."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "γίνει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_045"
    },
    {
        "word": "πιστεύω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "πιστεύω σε κάτι / πιστεύω κάποιον",
        "definitions": [
            {
                "text": "Θεωρώ ότι κάτι είναι αλήθεια.",
                "examples": [
                    "Σε πιστεύω."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "πιστέψει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_060"
    },
    {
        "word": "συμβαίνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚡",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "συμβαίνει ξαφνικά",
            "τι συνέβη;"
        ],
        "definitions": [
            {
                "text": "Λαμβάνω χώρα.",
                "examples": [
                    "Το ατύχημα συνέβη χθες."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "συμβεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_061"
    },
    {
        "word": "περιλαμβάνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➕",
        "form": "verb",
        "subtext": "η τιμή περιλαμβάνει φόρο",
        "synonyms": [
            "περιλαμβάνει τα πάντα"
        ],
        "definitions": [
            {
                "text": "Περιέχω κάτι ως μέρος ενός συνόλου.",
                "examples": [
                    "Το πρωινό περιλαμβάνεται στην τιμή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "περιλάβει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_062"
    },
    {
        "word": "συνεχίζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➡️",
        "form": "verb",
        "subtext": "συνεχίζω να δουλεύω / συνεχίζω κάτι",
        "definitions": [
            {
                "text": "Εξακολουθώ να κάνω κάτι χωρίς να σταματήσω.",
                "examples": [
                    "Παρακαλώ συνεχίστε την ανάγνωση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συνεχίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_063"
    },
    {
        "word": "ρυθμίζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚙️",
        "form": "verb",
        "subtext": "ρυθμίζω το τραπέζι",
        "synonyms": [
            "βάζω ξυπνητήρι"
        ],
        "definitions": [
            {
                "text": "Βάζω κάτι σε μια συγκεκριμένη θέση ή κατάσταση.",
                "examples": [
                    "Βάζω το ξυπνητήρι μου για τις 7 π.μ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ρυθμίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_064"
    },
    {
        "word": "οδηγώ",
        "level": "elementary",
        "theme": "people",
        "emoji": "👑",
        "form": "verb",
        "subtext": "οδηγώ μια ομάδα",
        "synonyms": [
            "δείχνω τον δρόμο"
        ],
        "definitions": [
            {
                "text": "Δείχνω τον δρόμο ή είμαι επικεφαλής μιας ομάδας.",
                "examples": [
                    "Οδηγεί μια μεγάλη ομάδα ερευνητών."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "οδηγήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_046"
    },
    {
        "word": "ακολουθώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👣",
        "form": "verb",
        "subtext": "ακολουθώ τους κανόνες / ακολουθώ κάποιον",
        "definitions": [
            {
                "text": "Πηγαίνω πίσω από κάποιον ή υπακούω σε κάτι.",
                "examples": [
                    "Παρακαλώ ακολουθήστε με στην αίθουσα συνεδριάσεων."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ακολουθήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_065"
    },
    {
        "word": "δημιουργώ",
        "level": "elementary",
        "theme": "social",
        "emoji": "✨",
        "form": "verb",
        "subtext": "δημιουργώ μια ιστοσελίδα / δημιουργώ ανακατωσούρα",
        "definitions": [
            {
                "text": "Φτιάχνω κάτι καινούριο.",
                "examples": [
                    "Δημιούργησε ένα πανέμορφο έργο τέχνης."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "δημιουργήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_social_024"
    },
    {
        "word": "επιτρέπω",
        "level": "elementary",
        "theme": "people",
        "emoji": "✅",
        "form": "verb",
        "subtext": "επιτρέπω σε κάποιον να κάνει",
        "synonyms": [
            "δεν επιτρέπεται"
        ],
        "definitions": [
            {
                "text": "Αφήνω κάποιον να κάνει κάτι.",
                "examples": [
                    "Το κάπνισμα δεν επιτρέπεται εδώ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επιτρέψει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_047"
    },
    {
        "word": "μεγαλώνω",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌱",
        "form": "verb",
        "subtext": "μεγαλώνω φυτά / μεγαλώνω γρήγορα",
        "definitions": [
            {
                "text": "Αυξάνομαι σε μέγεθος ή αναπτύσσομαι.",
                "examples": [
                    "Τα παιδιά μεγαλώνουν πολύ γρήγορα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μεγαλώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_environment_008"
    },
    {
        "word": "προσφέρω",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "προσφέρω μια δουλειά / προσφέρω βοήθεια",
        "definitions": [
            {
                "text": "Ρωτάω κάποιον αν θα ήθελε κάτι.",
                "examples": [
                    "Μου πρόσφερε έναν καφέ."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "προσφέρει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_048"
    },
    {
        "word": "εξετάζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "εξετάζω μια επιλογή / εξετάζω κάποιον για δουλειά",
        "definitions": [
            {
                "text": "Σκέφτομαι κάτι προσεκτικά.",
                "examples": [
                    "Παρακαλώ εξετάστε την αίτησή μου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v3": "εξετάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_066"
    },
    {
        "word": "εμφανίζομαι",
        "level": "elementary",
        "theme": "people",
        "emoji": "👻",
        "form": "verb",
        "subtext": "εμφανίζομαι στην τηλεόραση / εμφανίζομαι ξαφνικά",
        "definitions": [
            {
                "text": "Γίνομαι ορατός ή φαίνομαι να είμαι.",
                "examples": [
                    "Εμφανίστηκε να είναι πολύ χαρούμενος."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "εμφανιστεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_049"
    },
    {
        "word": "σερβίρω",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍽️",
        "form": "verb",
        "subtext": "σερβίρω φαγητό",
        "synonyms": [
            "εξυπηρετώ έναν σκοπό"
        ],
        "definitions": [
            {
                "text": "Παρέχω φαγητό ή μια υπηρεσία.",
                "examples": [
                    "Σερβίρουν πρωινό μέχρι τις 11 π.μ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "σερβίρει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_040"
    },
    {
        "word": "περιμένω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💭",
        "form": "verb",
        "subtext": "περιμένω μωρό / περιμένω κάποιον να φτάσει",
        "definitions": [
            {
                "text": "Νομίζω ότι κάτι θα συμβεί.",
                "examples": [
                    "Περιμένω να φτάσουν σύντομα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "περιμένει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_067"
    },
    {
        "word": "χτίζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "χτίζω ένα σπίτι / χτίζω μια σχέση",
        "definitions": [
            {
                "text": "Φτιάχνω κάτι ενώνοντας μέρη.",
                "examples": [
                    "Χτίζουν ένα νέο συγκρότημα γραφείων."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "χτίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_068"
    },
    {
        "word": "φτάνω",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🏁",
        "form": "verb",
        "subtext": "φτάνω στην κορυφή / φτάνω σε συμφωνία",
        "definitions": [
            {
                "text": "Φτάνω σε ένα μέρος ή ένα επίπεδο.",
                "examples": [
                    "Φτάσαμε στο ξενοδοχείο αργά το βράδυ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "φτάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_travel_031"
    },
    {
        "word": "σκοτώνω",
        "level": "elementary",
        "theme": "psychology",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "σκοτώνω την ώρα μου / σκοτώνω ένα έντομο",
        "definitions": [
            {
                "text": "Προκαλώ τον θάνατο κάποιου ή κάποιου πράγματος.",
                "examples": [
                    "Ο κρύος καιρός σκότωσε τα φυτά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "σκοτώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_psychology_001"
    },
    {
        "word": "παραμένω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "παραμένω ήρεμος / παραμένω στο σπίτι",
        "definitions": [
            {
                "text": "Μένω στο ίδιο μέρος ή στην ίδια κατάσταση.",
                "examples": [
                    "Παρακαλώ παραμείνετε καθιστοί μέχρι να σταματήσει το αεροπλάνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "παραμείνει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_069"
    },
    {
        "word": "προτείνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "verb",
        "subtext": "προτείνω ένα σχέδιο / προτείνω να κάνουμε κάτι",
        "definitions": [
            {
                "text": "Αναφέρω μια ιδέα ή ένα σχέδιο.",
                "examples": [
                    "Προτείνω να πάμε για έναν περίπατο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προτείνει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_070"
    },
    {
        "word": "σηκώνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "σηκώνω το χέρι",
        "synonyms": [
            "μεγαλώνω ένα παιδί"
        ],
        "definitions": [
            {
                "text": "Σηκώνω κάτι ψηλά ή φροντίζω ένα παιδί.",
                "examples": [
                    "Σήκωσε το χέρι της για να κάνει μια ερώτηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "σηκώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_071"
    },
    {
        "word": "απαιτώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📜",
        "form": "verb",
        "subtext": "απαιτώ βοήθεια",
        "synonyms": [
            "απαιτείται διαβατήριο"
        ],
        "definitions": [
            {
                "text": "Χρειάζομαι κάτι.",
                "examples": [
                    "Αυτή η δουλειά απαιτεί πολλά ταξίδια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "απαιτήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_072"
    },
    {
        "word": "αναφέρω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📋",
        "form": "verb",
        "subtext": "αναφέρω ένα έγκλημα / αναφέρω ένα πρόβλημα",
        "definitions": [
            {
                "text": "Δίνω πληροφορίες για κάτι.",
                "examples": [
                    "Ανέφερε την κλεμμένη μηχανή στην αστυνομία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αναφέρει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_059"
    },
    {
        "word": "εξηγώ",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👨‍🏫",
        "form": "verb",
        "subtext": "εξηγώ τους κανόνες / εξηγώ το γιατί",
        "definitions": [
            {
                "text": "Κάνω κάτι σαφές δίνοντας λεπτομέρειες.",
                "examples": [
                    "Μπορείς να μου εξηγήσεις αυτή τη λέξη;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "εξηγήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_060"
    },
    {
        "word": "αναπτύσσω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "💻",
        "form": "verb",
        "subtext": "αναπτύσσω μια δεξιότητα / αναπτύσσω ένα προϊόν",
        "definitions": [
            {
                "text": "Αυξάνω ή αλλάζω κάτι σε κάτι πιο προηγμένο.",
                "examples": [
                    "Η εταιρεία αναπτύσσει μια νέα εφαρμογή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αναπτύξει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_061"
    },
    {
        "word": "συνταξιοδοτούμαι",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👴",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "βγαίνω στη σύνταξη",
            "πρόωρη συνταξιοδότηση"
        ],
        "definitions": [
            {
                "text": "Σταματάω να δουλεύω επειδή έχω φτάσει σε μια ορισμένη ηλικία.",
                "examples": [
                    "Ο πατέρας μου θα συνταξιοδοτηθεί του χρόνου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συνταξιοδοτηθεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_062"
    },
    {
        "word": "έχω την οικονομική δυνατότητα",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💰",
        "form": "verb",
        "subtext": "δεν έχω την οικονομική δυνατότητα",
        "synonyms": [
            "αγοράζω σπίτι"
        ],
        "definitions": [
            {
                "text": "Έχω αρκετά χρήματα για να πληρώσω για κάτι.",
                "examples": [
                    "Δεν έχουμε την οικονομική δυνατότητα για ένα μεγαλύτερο διαμέρισμα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "έχει την οικονομική δυνατότητα",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_015"
    },
    {
        "word": "ανακυκλώνω",
        "level": "elementary",
        "theme": "nature",
        "emoji": "♻️",
        "form": "verb",
        "subtext": "ανακυκλώνω χαρτί",
        "synonyms": [
            "κάδοι ανακύκλωσης"
        ],
        "definitions": [
            {
                "text": "Επεξεργάζομαι χρησιμοποιημένα υλικά ώστε να μπορούν να χρησιμοποιηθούν ξανά.",
                "examples": [
                    "Ανακυκλώνουμε χαρτί και γυαλί."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ανακυκλώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_environment_009"
    },
    {
        "word": "χτυπώ",
        "level": "elementary",
        "theme": "social",
        "emoji": "🥊",
        "form": "verb",
        "subtext": "χτυπώ την μπάλα / χτυπώ έναν στόχο",
        "definitions": [
            {
                "text": "Αγγίζω κάτι με ξαφνική δύναμη.",
                "examples": [
                    "Χτύπησε την μπάλα με το ρόπαλο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "χτυπήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_social_025"
    },
    {
        "word": "παράγω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "παράγω ενέργεια / παράγω μια ταινία",
        "definitions": [
            {
                "text": "Φτιάχνω ή δημιουργώ κάτι.",
                "examples": [
                    "Το εργοστάσιο παράγει αυτοκίνητα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "παραγάγει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_063"
    },
    {
        "word": "αντιμετωπίζω",
        "level": "elementary",
        "theme": "people",
        "emoji": "👤",
        "form": "verb",
        "subtext": "αντιμετωπίζω ένα πρόβλημα / αντιμετωπίζω την πραγματικότητα",
        "definitions": [
            {
                "text": "Ασχολούμαι με μια δύσκολη κατάσταση.",
                "examples": [
                    "Πρέπει να αντιμετωπίσουμε τους φόβους μας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αντιμετωπίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_050"
    },
    {
        "word": "καλύπτω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🧥",
        "form": "verb",
        "subtext": "καλύπτω με μια κουβέρτα / καλύπτω μια ιστορία",
        "definitions": [
            {
                "text": "Βάζω κάτι πάνω από κάτι άλλο.",
                "examples": [
                    "Κάλυψε το τραπέζι με ένα τραπεζομάντιλο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "καλύψει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_073"
    },
    {
        "word": "περιγράφω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📝",
        "form": "verb",
        "subtext": "περιγράφω κάποιον / περιγράφω μια κατάσταση",
        "definitions": [
            {
                "text": "Λέω πώς είναι κάποιος ή κάτι.",
                "examples": [
                    "Μπορείς να περιγράψεις τον άνδρα που είδες;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "περιγράψει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_064"
    },
    {
        "word": "πιάνω",
        "level": "elementary",
        "theme": "social",
        "emoji": "🎣",
        "form": "verb",
        "subtext": "πιάνω μια μπάλα",
        "synonyms": [
            "κρυολογώ",
            "παίρνω το λεωφορείο"
        ],
        "definitions": [
            {
                "text": "Κρατάω κάτι που κινείται.",
                "examples": [
                    "Προσπάθησε να πιάσεις την μπάλα!"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "πιάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_social_026"
    },
    {
        "word": "κάνω αίτηση για",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📝",
        "form": "verb",
        "subtext": "κάνω αίτηση για δουλειά",
        "synonyms": [
            "κάνω αίτηση ηλεκτρονικά"
        ],
        "definitions": [
            {
                "text": "Υποβάλλω ένα επίσημο γραπτό αίτημα για μια δουλειά ή θέση.",
                "examples": [
                    "Έκανε αίτηση για τρεις διαφορετικές διευθυντικές θέσεις."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κάνει αίτηση για",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_065"
    },
    {
        "word": "προσλαμβάνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "προσλαμβάνω κάποιον / προσλαμβάνω μια ομάδα",
        "definitions": [
            {
                "text": "Παίρνω επίσημα κάποιον ως υπάλληλο.",
                "examples": [
                    "Η εταιρεία προσέλαβε δεκαπέντε νέα άτομα το περασμένο τρίμηνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προσλάβει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_066"
    },
    {
        "word": "προάγω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📈",
        "form": "verb",
        "subtext": "προάγω κάποιον",
        "synonyms": [
            "παίρνω προαγωγή"
        ],
        "definitions": [
            {
                "text": "Μετακινώ έναν υπάλληλο σε υψηλότερη θέση.",
                "examples": [
                    "Προήχθη σε ανώτερο διευθυντή μετά από δύο χρόνια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προαγάγει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_067"
    },
    {
        "word": "παραιτούμαι",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "παραιτούμαι από μια δουλειά",
        "synonyms": [
            "υποβάλλω παραίτηση"
        ],
        "definitions": [
            {
                "text": "Φεύγω επίσημα από μια δουλειά από επιλογή.",
                "examples": [
                    "Παραιτήθηκε αφού διαφώνησε με τη νέα στρατηγική."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παραιτηθεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_068"
    },
    {
        "word": "απολύω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "❌",
        "form": "verb",
        "subtext": "απολύω έναν υπάλληλο",
        "synonyms": [
            "απολύομαι"
        ],
        "definitions": [
            {
                "text": "Απομακρύνω επίσημα κάποιον από τη δουλειά του.",
                "examples": [
                    "Απολύθηκε λόγω επανειλημμένων απουσιών χωρίς εξήγηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "απολύσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_069"
    },
    {
        "word": "αναθέτω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📋",
        "form": "verb",
        "subtext": "αναθέτω μια εργασία / αναθέτω ευθύνες",
        "definitions": [
            {
                "text": "Δίνω μια εργασία ή ευθύνη σε κάποιον άλλο.",
                "examples": [
                    "Ένας καλός διευθυντής ξέρει πώς να αναθέτει αποτελεσματικά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αναθέσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_070"
    },
    {
        "word": "διαπραγματεύομαι",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "διαπραγματεύομαι μισθό / διαπραγματεύομαι όρους",
        "definitions": [
            {
                "text": "Συζητάω κάτι για να φτάσω σε μια συμφωνία.",
                "examples": [
                    "Διαπραγματεύτηκε έναν υψηλότερο μισθό πριν υπογράψει το συμβόλαιο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "διαπραγματευτεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_071"
    },
    {
        "word": "αξιολογώ",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📊",
        "form": "verb",
        "subtext": "αξιολογώ την απόδοση / αξιολογώ τα αποτελέσματα",
        "definitions": [
            {
                "text": "Κρίνω την ποιότητα ή την αξία κάποιου πράγματος.",
                "examples": [
                    "Ο διευθυντής αξιολογεί την απόδοση κάθε μέλους της ομάδας ετησίως."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αξιολογήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_072"
    },
    {
        "word": "συνεργάζομαι",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👥",
        "form": "verb",
        "subtext": "συνεργάζομαι με / συνεργάζομαι σε ένα έργο",
        "definitions": [
            {
                "text": "Δουλεύω από κοινού με άλλους σε ένα κοινό έργο.",
                "examples": [
                    "Συνεργάστηκαν με μια ομάδα στο Βερολίνο για την καμπάνια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συνεργαστεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_073"
    },
    {
        "word": "προγραμματίζω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📅",
        "form": "verb",
        "subtext": "προγραμματίζω μια συνάντηση / προγραμματίζω χρόνο",
        "definitions": [
            {
                "text": "Κανονίζω μια ώρα για να συμβεί κάτι.",
                "examples": [
                    "Μπορούμε να προγραμματίσουμε μια συνάντηση για το απόγευμα της Πέμπτης;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προγραμματίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_074"
    },
    {
        "word": "επενδύω",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📈",
        "form": "verb",
        "subtext": "επενδύω χρήματα / επενδύω σε ακίνητα",
        "definitions": [
            {
                "text": "Βάζω χρήματα σε κάτι περιμένοντας μελλοντική απόδοση.",
                "examples": [
                    "Επενδύει μέρος του μισθού του σε ένα αμοιβαίο κεφάλαιο κάθε μήνα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επενδύσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_016"
    },
    {
        "word": "δανείζομαι",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💸",
        "form": "verb",
        "subtext": "δανείζομαι χρήματα / δανείζομαι από τράπεζα",
        "definitions": [
            {
                "text": "Παίρνω κάτι με την πρόθεση να το επιστρέψω.",
                "examples": [
                    "Δανείστηκε χρήματα από τους γονείς της για την προκαταβολή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "δανειστεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_017"
    },
    {
        "word": "δανείζω",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "δανείζω χρήματα / δανείζω ένα χέρι βοηθείας",
        "definitions": [
            {
                "text": "Δίνω κάτι σε κάποιον προσωρινά.",
                "examples": [
                    "Η τράπεζα αρνήθηκε να του δανείσει περισσότερα χρήματα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "δανείσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_018"
    },
    {
        "word": "προϋπολογίζω",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📊",
        "form": "verb",
        "subtext": "προϋπολογίζω προσεκτικά",
        "synonyms": [
            "μηνιαίος προϋπολογισμός"
        ],
        "definitions": [
            {
                "text": "Σχεδιάζω πώς θα ξοδευτούν τα χρήματα.",
                "examples": [
                    "Προϋπολογίζουν προσεκτικά για να αποταμιεύσουν για ένα σπίτι."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προϋπολογίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_019"
    },
    {
        "word": "κάνω ανάληψη",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏧",
        "form": "verb",
        "subtext": "κάνω ανάληψη μετρητών / κάνω ανάληψη από λογαριασμό",
        "definitions": [
            {
                "text": "Παίρνω χρήματα από έναν τραπεζικό λογαριασμό.",
                "examples": [
                    "Κάνω ανάληψη μετρητών κάθε Δευτέρα για την εβδομάδα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "κάνει ανάληψη",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_020"
    },
    {
        "word": "μεταφέρω",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📲",
        "form": "verb",
        "subtext": "μεταφέρω χρήματα",
        "synonyms": [
            "τραπεζική μεταφορά"
        ],
        "definitions": [
            {
                "text": "Μετακινώ χρήματα από έναν λογαριασμό σε άλλον.",
                "examples": [
                    "Μετέφερε το ενοίκιο στον λογαριασμό του ιδιοκτήτη."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "μεταφέρει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_021"
    },
    {
        "word": "χρεώνω",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💳",
        "form": "verb",
        "subtext": "χρεώνω μια αμοιβή / χρεώνω επιπλέον",
        "definitions": [
            {
                "text": "Ζητάω ένα ποσό χρημάτων για μια υπηρεσία.",
                "examples": [
                    "Ο μηχανικός χρέωσε περισσότερα από την εκτίμηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "χρεώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_022"
    },
    {
        "word": "διεκδικώ",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📜",
        "form": "verb",
        "subtext": "διεκδικώ ασφάλεια / διεκδικώ αποζημίωση",
        "definitions": [
            {
                "text": "Ζητάω επίσημα χρήματα που μου οφείλονται, ειδικά ασφάλεια.",
                "examples": [
                    "Διεκδίκησε την ασφάλειά του μετά το ατύχημα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "διεκδικήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_023"
    },
    {
        "word": "μαλώνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "μαλώνω για / μαλώνω με κάποιον",
        "definitions": [
            {
                "text": "Διαφωνώ με κάποιον με θυμωμένο ή έντονο τρόπο.",
                "examples": [
                    "Συχνά μαλώνουν για τα χρήματα και τα ωράρια εργασίας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μαλώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_074"
    },
    {
        "word": "εμπιστεύομαι",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "εμπιστεύομαι κάποιον / εμπιστεύομαι το ένστικτό μου",
        "definitions": [
            {
                "text": "Έχω εμπιστοσύνη στην ειλικρίνεια και την αξιοπιστία κάποιου.",
                "examples": [
                    "Εμπιστεύεται απόλυτα τον επιχειρηματικό της συνεργάτη."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "εμπιστευτεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_075"
    },
    {
        "word": "υποστηρίζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "υποστηρίζω κάποιον / υποστηρίζω μια απόφαση",
        "definitions": [
            {
                "text": "Βοηθάω και ενθαρρύνω κάποιον μέσα από δυσκολίες.",
                "examples": [
                    "Υποστηρίζει τη σύντροφό του κατά τη διάρκεια μιας δύσκολης περιόδου στη δουλειά."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "υποστηρίξει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_076"
    },
    {
        "word": "διαφωνώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👎",
        "form": "verb",
        "subtext": "διαφωνώ με κάποιον / διαφωνώ σε κάτι",
        "definitions": [
            {
                "text": "Έχω διαφορετική γνώμη από κάποιον.",
                "examples": [
                    "Διαφώνησε με σεβασμό με την απόφαση του διευθυντή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "διαφωνήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_077"
    },
    {
        "word": "ζητώ συγγνώμη",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "ζητώ συγγνώμη για / ζητώ συγγνώμη από κάποιον",
        "definitions": [
            {
                "text": "Εκφράζω μεταμέλεια για κάτι που έκανα λάθος.",
                "examples": [
                    "Ζήτησε συγγνώμη που έχασε τη συνάντηση."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "ζητήσει συγγνώμη",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_078"
    },
    {
        "word": "συγχωρώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "συγχωρώ κάποιον / συγχωρώ ένα λάθος",
        "definitions": [
            {
                "text": "Σταματάω να νιώθω θυμό με κάποιον για κάτι που έκανε.",
                "examples": [
                    "Τελικά τον συγχώρεσε για το λάθος."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συγχωρέσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_079"
    },
    {
        "word": "συμβιβάζομαι",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "είμαι πρόθυμος να συμβιβαστώ",
        "synonyms": [
            "κάνω συμβιβασμό"
        ],
        "definitions": [
            {
                "text": "Αποδέχομαι κάτι λιγότερο από το ιδανικό για να καταλήξω σε συμφωνία.",
                "examples": [
                    "Συμβιβάστηκαν στην τιμή και υπέγραψαν το συμβόλαιο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συμβιβαστεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_080"
    },
    {
        "word": "διαγιγνώσκω",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🩺",
        "form": "verb",
        "subtext": "διαγιγνώσκω μια ασθένεια / διαγιγνώσκω έγκαιρα",
        "definitions": [
            {
                "text": "Προσδιορίζω μια ασθένεια ή ένα πρόβλημα μετά από εξέταση.",
                "examples": [
                    "Ο γιατρός τη διέγνωσε με υψηλή αρτηριακή πίεση."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "διαγνώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_041"
    },
    {
        "word": "θεραπεύω",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🩹",
        "form": "verb",
        "subtext": "θεραπεύω έναν ασθενή / θεραπεύω μια ασθένεια",
        "definitions": [
            {
                "text": "Παρέχω ιατρική φροντίδα σε κάποιον που είναι άρρωστος ή τραυματισμένος.",
                "examples": [
                    "Ο ειδικός θεράπευσε τον τραυματισμό στο γόνατό του με φυσικοθεραπεία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "θεραπεύσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_042"
    },
    {
        "word": "προλαμβάνω",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "προλαμβάνω την ασθένεια",
        "synonyms": [
            "λαμβάνω μέτρα πρόληψης"
        ],
        "definitions": [
            {
                "text": "Σταματάω κάτι κακό από το να συμβεί.",
                "examples": [
                    "Η άσκηση και η διατροφή μπορούν να προλάβουν πολλές κοινές ασθένειες."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "προλάβει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_043"
    },
    {
        "word": "υποφέρω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤕",
        "form": "verb",
        "subtext": "υποφέρω από / υποφέρω από πόνο",
        "definitions": [
            {
                "text": "Βιώνω πόνο ή δυσφορία.",
                "examples": [
                    "Υποφέρει από χρόνιο πόνο στην πλάτη λόγω της εργασίας στο γραφείο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "υποφέρει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_081"
    },
    {
        "word": "συνιστώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "verb",
        "subtext": "συνιστώ θεραπεία / συνιστώ ξεκούραση",
        "definitions": [
            {
                "text": "Προτείνω μια πορεία δράσης ως καλή ή κατάλληλη.",
                "examples": [
                    "Ο γιατρός συνέστησε περισσότερο ύπνο και λιγότερη καφεΐνη."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "συστήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_082"
    },
    {
        "word": "βελτιώνω",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "📈",
        "form": "verb",
        "subtext": "βελτιώνω την υγεία / βελτιώνω τη φυσική κατάσταση",
        "definitions": [
            {
                "text": "Κάνω κάτι καλύτερο ή γίνομαι καλύτερος.",
                "examples": [
                    "Η υγεία του βελτιώθηκε μετά την αλλαγή της διατροφής και της ρουτίνας του."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "βελτιώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_044"
    },
    {
        "word": "νοικιάζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏠",
        "form": "verb",
        "subtext": "νοικιάζω ένα διαμέρισμα / νοικιάζω ένα δωμάτιο",
        "definitions": [
            {
                "text": "Πληρώνω τακτικά για να χρησιμοποιήσω περιουσία που ανήκει σε κάποιον άλλο.",
                "examples": [
                    "Νοικιάζουν ένα διαμέρισμα δύο υπνοδωματίων κοντά στο κέντρο της πόλης."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "νοικιάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_083"
    },
    {
        "word": "κατέχω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏡",
        "form": "verb",
        "subtext": "κατέχω μια ιδιοκτησία / κατέχω ένα αυτοκίνητο",
        "definitions": [
            {
                "text": "Έχω νόμιμα κάτι στην κατοχή μου.",
                "examples": [
                    "Κατέχει ένα μικρό διαμέρισμα στα προάστια."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "κατέχει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_084"
    },
    {
        "word": "επισκευάζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "επισκευάζω κάτι",
        "synonyms": [
            "κάνω επισκευές"
        ],
        "definitions": [
            {
                "text": "Φτιάχνω κάτι που είναι χαλασμένο ή δεν λειτουργεί.",
                "examples": [
                    "Ο ιδιοκτήτης αργεί να επισκευάσει πράγματα στο διαμέρισμα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επισκευάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_085"
    },
    {
        "word": "μετακομίζω",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "📦",
        "form": "verb",
        "subtext": "μετακομίζω σε νέο μέρος / μετακομίζω σπίτι",
        "definitions": [
            {
                "text": "Πηγαίνω να ζήσω ή να δουλέψω σε διαφορετικό μέρος.",
                "examples": [
                    "Μετακόμισαν σε ένα μεγαλύτερο διαμέρισμα όταν γεννήθηκε η κόρη τους."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μετακομίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_furniture_009"
    },
    {
        "word": "διακοσμώ",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "διακοσμώ ένα δωμάτιο",
        "synonyms": [
            "εσωτερική διακόσμηση"
        ],
        "definitions": [
            {
                "text": "Κάνω έναν χώρο πιο ελκυστικό, ειδικά με βάψιμο.",
                "examples": [
                    "Διακόσμησαν το διαμέρισμα πριν μετακομίσουν."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "διακοσμήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_furniture_010"
    },
    {
        "word": "ιδρύω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "ιδρύω μια επιχείρηση / ιδρύω μια εταιρεία",
        "definitions": [
            {
                "text": "Ξεκινάω ή δημιουργώ κάτι.",
                "examples": [
                    "Ίδρυσε τη δική του συμβουλευτική επιχείρηση σε ηλικία τριάντα ετών."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ιδρύσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_075"
    },
    {
        "word": "ανακαλύπτω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔎",
        "form": "verb",
        "subtext": "ανακαλύπτω την αλήθεια / ανακαλύπτω αργότερα",
        "definitions": [
            {
                "text": "Βρίσκω ή μαθαίνω πληροφορίες.",
                "examples": [
                    "Ανακάλυψε ότι το ενοίκιο επρόκειτο να αυξηθεί."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ανακαλύψει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_086"
    },
    {
        "word": "συνεχίζω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⏩",
        "form": "verb",
        "subtext": "συνεχίζω να δουλεύω / συνεχίζω παρ' όλα αυτά",
        "definitions": [
            {
                "text": "Συνεχίζω να κάνω κάτι.",
                "examples": [
                    "Συνέχισε να δουλεύει παρόλο που ένιωθε άρρωστος."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συνεχίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_076"
    },
    {
        "word": "παρατάω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏳️",
        "form": "verb",
        "subtext": "παρατάω μια δουλειά",
        "synonyms": [
            "κόβω το κάπνισμα"
        ],
        "definitions": [
            {
                "text": "Σταματάω να προσπαθώ να κάνω κάτι· εγκαταλείπω.",
                "examples": [
                    "Παράτησε τη δουλειά της για να ξεκινήσει τη δική της εταιρεία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παρατήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_077"
    },
    {
        "word": "διευθετώ",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "διευθετώ ένα πρόβλημα",
        "synonyms": [
            "τακτοποιώ μια κατάσταση"
        ],
        "definitions": [
            {
                "text": "Επιλύω ένα πρόβλημα ή ασχολούμαι με κάτι.",
                "examples": [
                    "Μπορείτε να διευθετήσετε το πρόβλημα με το συμβόλαιο;"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "διευθετήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_078"
    },
    {
        "word": "φροντίζω",
        "level": "elementary",
        "theme": "people",
        "emoji": "👶",
        "form": "verb",
        "subtext": "φροντίζω κάποιον / φροντίζω τον εαυτό μου",
        "definitions": [
            {
                "text": "Προσέχω κάποιον ή κάτι.",
                "examples": [
                    "Φροντίζει την ηλικιωμένη μητέρα του τα Σαββατοκύριακα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "φροντίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_051"
    },
    {
        "word": "περιορίζω",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "📉",
        "form": "verb",
        "subtext": "περιορίζω τα έξοδα / περιορίζω τη ζάχαρη",
        "definitions": [
            {
                "text": "Μειώνω την ποσότητα από κάτι που κάνετε ή καταναλώνετε.",
                "examples": [
                    "Περιόρισε την καφεΐνη για να βελτιώσει τον ύπνο της."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "περιορίσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_045"
    },
    {
        "word": "αναλαμβάνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "💪",
        "form": "verb",
        "subtext": "αναλαμβάνω ευθύνη / αναλαμβάνω επιπλέον δουλειά",
        "definitions": [
            {
                "text": "Αποδέχομαι μια ευθύνη ή μια εργασία.",
                "examples": [
                    "Ανέλαβε μια δεύτερη δουλειά για να ξεπληρώσει το δάνειο γρηγορότερα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "αναλάβει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_079"
    },
    {
        "word": "απορρίπτω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👎",
        "form": "verb",
        "subtext": "απορρίπτω μια προσφορά / απορρίπτω ένα αίτημα",
        "definitions": [
            {
                "text": "Αρνούμαι μια προσφορά ή ένα αίτημα.",
                "examples": [
                    "Απέρριψε τη δουλειά επειδή ο μισθός ήταν πολύ χαμηλός."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "απορρίψει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_080"
    },
    {
        "word": "αναβάλλω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "αναβάλλω μια συνάντηση / αναβάλλω μια απόφαση",
        "definitions": [
            {
                "text": "Μεταθέτω κάτι για αργότερα.",
                "examples": [
                    "Συνεχίζει να αναβάλλει τη συζήτηση για τον μισθό του."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "αναβάλει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_081"
    },
    {
        "word": "χρωστάω",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💸",
        "form": "verb",
        "subtext": "χρωστάω χρήματα / χρωστάω σε κάποιον",
        "definitions": [
            {
                "text": "Είμαι υποχρεωμένος να πληρώσω χρήματα σε κάποιον.",
                "examples": [
                    "Χρωστάει στην τράπεζα πενήντα χιλιάδες ευρώ για το στεγαστικό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "χρωστάει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_024"
    },
    {
        "word": "προσκαλώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📩",
        "form": "verb",
        "subtext": "προσκαλώ σε δείπνο / προσκαλώ σε πάρτι",
        "definitions": [
            {
                "text": "Ζητάω από κάποιον να έρθει σε μια εκδήλωση.",
                "examples": [
                    "Προσκάλεσε όλη την ομάδα για δείπνο μετά το τέλος του έργου."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προσκαλέσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_087"
    },
    {
        "word": "επιβεβαιώνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "✅",
        "form": "verb",
        "subtext": "επιβεβαιώνω μια κράτηση / επιβεβαιώνω γραπτώς",
        "definitions": [
            {
                "text": "Λέω οριστικά ότι κάτι είναι αλήθεια ή θα συμβεί.",
                "examples": [
                    "Παρακαλώ επιβεβαιώστε την παρουσία σας πριν από το πρωί της Παρασκευής."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επιβεβαιώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_088"
    },
    {
        "word": "επικοινωνώ",
        "level": "elementary",
        "theme": "technology",
        "emoji": "📞",
        "form": "verb",
        "subtext": "επικοινωνώ μέσω email",
        "synonyms": [
            "επικοινωνήστε μαζί μας"
        ],
        "definitions": [
            {
                "text": "Έρχομαι σε επαφή με κάποιον.",
                "examples": [
                    "Θα επικοινωνήσω μαζί σας μέχρι το τέλος της εβδομάδας με μια απάντηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "επικοινωνήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_technology_010"
    },
    {
        "word": "παραπονιέμαι",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😠",
        "form": "verb",
        "subtext": "παραπονιέμαι για",
        "synonyms": [
            "κάνω παράπονα"
        ],
        "definitions": [
            {
                "text": "Εκφράζω δυσαρέσκεια για κάτι.",
                "examples": [
                    "Παραπονέθηκε για τον θόρυβο από το πάνω διαμέρισμα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παραπονεθεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_089"
    },
    {
        "word": "συζητώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "συζητώ ένα θέμα / συζητώ λεπτομερώς",
        "definitions": [
            {
                "text": "Μιλάω για κάτι λεπτομερώς.",
                "examples": [
                    "Συζητήσαμε τους νέους όρους του συμβολαίου για δύο ώρες."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συζητήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_090"
    },
    {
        "word": "παρουσιάζω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📊",
        "form": "verb",
        "subtext": "παρουσιάζω δεδομένα / παρουσιάζω σε πελάτη",
        "definitions": [
            {
                "text": "Δείχνω ή εξηγώ κάτι σε μια ομάδα.",
                "examples": [
                    "Παρουσιάζει τα αποτελέσματα των πωλήσεων στο διοικητικό συμβούλιο κάθε τρίμηνο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "παρουσιάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_082"
    },
    {
        "word": "αποδέχομαι",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "✅",
        "form": "verb",
        "subtext": "αποδέχομαι μια προσφορά / αποδέχομαι μια πρόκληση",
        "definitions": [
            {
                "text": "Συμφωνώ να πάρω ή να λάβω κάτι.",
                "examples": [
                    "Αποδέχτηκε την προσφορά εργασίας μετά τη διαπραγμάτευση του μισθού."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αποδεχτεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_083"
    },
    {
        "word": "αρνούμαι",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "❌",
        "form": "verb",
        "subtext": "αρνούμαι μια προσφορά / αρνούμαι την άδεια",
        "definitions": [
            {
                "text": "Λέω όχι σε κάτι· απορρίπτω.",
                "examples": [
                    "Αρνήθηκε να υπογράψει το συμβόλαιο χωρίς νομική συμβουλή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αρνηθεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_084"
    },
    {
        "word": "χάνω βάρος",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "προσπαθώ να χάσω βάρος",
        "synonyms": [
            "χάνω μερικά κιλά"
        ],
        "definitions": [
            {
                "text": "Γίνομαι ελαφρύτερος· μειώνω το σωματικό βάρος.",
                "examples": [
                    "Έχασε δέκα κιλά μετά την αλλαγή της διατροφής και του τρόπου ζωής του."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "χάσει βάρος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_046"
    },
    {
        "word": "αυξάνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📈",
        "form": "verb",
        "subtext": "αυξάνω κατά",
        "synonyms": [
            "αυξάνεται ραγδαία"
        ],
        "definitions": [
            {
                "text": "Κάνω κάτι μεγαλύτερο ή γίνομαι μεγαλύτερο.",
                "examples": [
                    "Η εταιρεία αύξησε τους μισθούς κατά τρία τοις εκατό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αυξήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_085"
    },
    {
        "word": "μειώνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📉",
        "form": "verb",
        "subtext": "μειώνω το κόστος / μειώνω το άγχος",
        "definitions": [
            {
                "text": "Κάνω κάτι μικρότερο σε μέγεθος ή ποσότητα.",
                "examples": [
                    "Μείωσαν την ομάδα από δώδεκα σε οκτώ μέλη."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μειώσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_086"
    },
    {
        "word": "βελτιώνω τις δεξιότητες",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📈",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "βελτιώνω την απόδοση",
            "βελτιώνομαι"
        ],
        "definitions": [
            {
                "text": "Κάνω κάτι καλύτερο ή γίνομαι καλύτερος.",
                "examples": [
                    "Βελτίωσε σημαντικά τις δεξιότητές της στη δημόσια ομιλία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "βελτιώσει τις δεξιότητες",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_087"
    },
    {
        "word": "παρέχω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "παρέχω υποστήριξη / παρέχω μια υπηρεσία",
        "definitions": [
            {
                "text": "Δίνω ή προμηθεύω κάτι σε κάποιον.",
                "examples": [
                    "Η εταιρεία παρέχει σε όλους τους υπαλλήλους έναν φορητό υπολογιστή."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "παράσχει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_088"
    },
    {
        "word": "λύνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🧩",
        "form": "verb",
        "subtext": "λύνω ένα μυστήριο",
        "synonyms": [
            "βρίσκω μια λύση"
        ],
        "definitions": [
            {
                "text": "Βρίσκω την απάντηση σε ένα πρόβλημα.",
                "examples": [
                    "Λύνει προβλήματα γρήγορα υπό πίεση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "λύσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_089"
    },
    {
        "word": "μοιράζομαι",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "μοιράζομαι πληροφορίες / μοιράζομαι ένα γεύμα / μοιράζομαι ιδέες",
        "definitions": [
            {
                "text": "Χωρίζω κάτι μεταξύ ανθρώπων· λέω σε άλλους.",
                "examples": [
                    "Μοιράστηκε την έκθεση με όλη την ομάδα τη Δευτέρα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "μοιραστεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_090"
    },
    {
        "word": "συμμετέχω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "➕",
        "form": "verb",
        "subtext": "μπαίνω σε μια εταιρεία / γίνομαι μέλος μιας ομάδας",
        "definitions": [
            {
                "text": "Γίνομαι μέλος μιας ομάδας ή οργανισμού.",
                "examples": [
                    "Μπήκε στην εταιρεία ως εκπαιδευόμενος πριν από επτά χρόνια."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "συμμετάσχει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_091"
    },
    {
        "word": "λαμβάνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📩",
        "form": "verb",
        "subtext": "λαμβάνω ένα γράμμα / λαμβάνω πληρωμή / λαμβάνω σχόλια",
        "definitions": [
            {
                "text": "Μου δίνεται ή μου παρουσιάζεται κάτι.",
                "examples": [
                    "Έλαβε την προσφορά εργασίας μέσω email ένα απόγευμα Παρασκευής."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "λάβει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_092"
    },
    {
        "word": "περιέχω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📦",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "περιέχει πληροφορίες",
            "περιέχει συστατικά"
        ],
        "definitions": [
            {
                "text": "Έχω κάτι μέσα· περιλαμβάνω.",
                "examples": [
                    "Η έκθεση περιέχει λεπτομερείς οικονομικές προβλέψεις."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "περιέχει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_093"
    },
    {
        "word": "σχεδιάζω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📅",
        "form": "verb",
        "subtext": "σχεδιάζω ένα ταξίδι / σχεδιάζω μια συνάντηση",
        "definitions": [
            {
                "text": "Σκέφτομαι και οργανώνω μελλοντικές ενέργειες.",
                "examples": [
                    "Σχεδιάζει ολόκληρη την εβδομάδα της κάθε Κυριακή βράδυ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "σχεδιάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_094"
    },
    {
        "word": "προετοιμάζω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📝",
        "form": "verb",
        "subtext": "προετοιμάζομαι για μια συνάντηση",
        "synonyms": [
            "ετοιμάζω μια αναφορά"
        ],
        "definitions": [
            {
                "text": "Κάνω κάτι έτοιμο· ετοιμάζω τον εαυτό μου.",
                "examples": [
                    "Προετοιμάζει μια λεπτομερή ημερήσια διάταξη πριν από κάθε συνάντηση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "προετοιμάσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_095"
    },
    {
        "word": "αποτυγχάνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "❌",
        "form": "verb",
        "subtext": "αποτυγχάνω σε μια εξέταση / αποτυγχάνω να κάνω",
        "definitions": [
            {
                "text": "Δεν πετυχαίνω· δεν κάνω κάτι που απαιτείται.",
                "examples": [
                    "Απέτυχε στην πρώτη εξέταση αλλά πέρασε τη δεύτερη προσπάθεια."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "αποτύχει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_096"
    },
    {
        "word": "πετυχαίνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏆",
        "form": "verb",
        "subtext": "πετυχαίνω να κάνω / πετυχαίνω σε κάτι",
        "definitions": [
            {
                "text": "Κατορθώνω αυτό που έβαλα στόχο.",
                "examples": [
                    "Πέτυχε να κλείσει τη συμφωνία μετά από τρεις μήνες."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "πετύχει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_097"
    },
    {
        "word": "συμφωνώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "συμφωνώ με κάποιον / συμφωνώ σε κάτι",
        "definitions": [
            {
                "text": "Έχω την ίδια γνώμη· λέω ναι σε κάτι.",
                "examples": [
                    "Συμφώνησαν να συναντηθούν ξανά την επόμενη Τρίτη."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "συμφωνήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_describing_091"
    },
    {
        "word": "αντικαθιστώ",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🔄",
        "form": "verb",
        "subtext": "αντικαθιστώ κάτι",
        "synonyms": [
            "αντικαθίσταται από"
        ],
        "definitions": [
            {
                "text": "Παίρνω τη θέση κάποιου ή κάποιου πράγματος.",
                "examples": [
                    "Το νέο λογισμικό θα αντικαταστήσει το παλιό σύστημα του χρόνου."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "αντικαταστήσει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_098"
    },
    {
        "word": "ψάχνω",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "ψάχνω για δουλειά / ψάχνω για μια λύση",
        "definitions": [
            {
                "text": "Προσπαθώ να βρω κάτι.",
                "examples": [
                    "Ψάχνει για μια νέα δουλειά με καλύτερη ισορροπία μεταξύ επαγγελματικής και προσωπικής ζωής."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ψάξει",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "v2": "",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_099"
    },
    {
        "word": "αποσυνδέομαι",
        "level": "elementary",
        "theme": "technology",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "",
        "synonyms": [
            "κάνω αποσύνδεση"
        ],
        "definitions": [
            {
                "text": "Αποσυνδέομαι από ένα υπολογιστικό σύστημα.",
                "examples": [
                    "Παρακαλώ αποσυνδεθείτε από το σύστημα όταν φεύγετε από το γραφείο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "αποσυνδεθεί",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_technology_011"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();
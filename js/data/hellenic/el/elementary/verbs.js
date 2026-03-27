(function() {
    const data = [
    {
        "word": "βουρτσίζω τα δόντια",
        "level": "elementary",
        "theme": "household_tasks_A1",
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
        "v3": "βουρτσισμένος"
    },
    {
        "word": "κάνω ντους",
        "level": "elementary",
        "theme": "household_tasks_A1",
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
        "v3": "κάνει ντους"
    },
    {
        "word": "φαίνομαι",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb",
        "subtext": "φαίνομαι χαρούμενος / φαίνεται καλή ιδέα",
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
        "v3": "φανεί"
    },
    {
        "word": "γίνομαι",
        "level": "elementary",
        "theme": "relationships_dating_A2",
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
        "v3": "γίνει"
    },
    {
        "word": "πιστεύω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
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
        "v3": "πιστέψει"
    },
    {
        "word": "συμβαίνω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "subtext": "συμβαίνει ξαφνικά / τι συνέβη;",
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
        "v3": "συμβεί"
    },
    {
        "word": "περιλαμβάνω",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb",
        "subtext": "περιλαμβάνει τα πάντα / η τιμή περιλαμβάνει φόρο",
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
        "v3": "περιλάβει"
    },
    {
        "word": "συνεχίζω",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
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
        "v3": "συνεχίσει"
    },
    {
        "word": "ρυθμίζω",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb",
        "subtext": "ρυθμίζω το τραπέζι / βάζω ξυπνητήρι",
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
        "v3": "ρυθμίσει"
    },
    {
        "word": "οδηγώ",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "verb",
        "subtext": "οδηγώ μια ομάδα / δείχνω τον δρόμο",
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
        "v3": "οδηγήσει"
    },
    {
        "word": "ακολουθώ",
        "level": "elementary",
        "theme": "directions_navigation_A1",
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
        "v3": "ακολουθήσει"
    },
    {
        "word": "δημιουργώ",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
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
        "v3": "δημιουργήσει"
    },
    {
        "word": "επιτρέπω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "verb",
        "subtext": "επιτρέπω σε κάποιον να κάνει / δεν επιτρέπεται",
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
        "v3": "επιτρέψει"
    },
    {
        "word": "μεγαλώνω",
        "level": "elementary",
        "theme": "environmental_protection_A2",
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
        "v3": "μεγαλώσει"
    },
    {
        "word": "προσφέρω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
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
        "v3": "προσφέρει"
    },
    {
        "word": "εξετάζω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
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
        "v3": "εξετάσει"
    },
    {
        "word": "εμφανίζομαι",
        "level": "elementary",
        "theme": "personal_qualities_A2",
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
        "v3": "εμφανιστεί"
    },
    {
        "word": "σερβίρω",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "subtext": "σερβίρω φαγητό / εξυπηρετώ έναν σκοπό",
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
        "v3": "σερβίρει"
    },
    {
        "word": "περιμένω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
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
        "v3": "περιμένει"
    },
    {
        "word": "χτίζω",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
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
        "v3": "χτίσει"
    },
    {
        "word": "φτάνω",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
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
        "v3": "φτάσει"
    },
    {
        "word": "σκοτώνω",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
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
        "v3": "σκοτώσει"
    },
    {
        "word": "παραμένω",
        "level": "elementary",
        "theme": "condition_state_A2",
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
        "v3": "παραμείνει"
    },
    {
        "word": "προτείνω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
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
        "v3": "προτείνει"
    },
    {
        "word": "σηκώνω",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "σηκώνω το χέρι / μεγαλώνω ένα παιδί",
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
        "v3": "σηκώσει"
    },
    {
        "word": "απαιτώ",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "subtext": "απαιτώ βοήθεια / απαιτείται διαβατήριο",
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
        "v3": "απαιτήσει"
    },
    {
        "word": "αναφέρω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αναφέρει"
    },
    {
        "word": "εξηγώ",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "εξηγήσει"
    },
    {
        "word": "αναπτύσσω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αναπτύξει"
    },
    {
        "word": "συνταξιοδοτούμαι",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "subtext": "βγαίνω στη σύνταξη / πρόωρη συνταξιοδότηση",
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
        "v3": "συνταξιοδοτηθεί"
    },
    {
        "word": "έχω την οικονομική δυνατότητα",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "subtext": "δεν έχω την οικονομική δυνατότητα / αγοράζω σπίτι",
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
        "v3": "έχει την οικονομική δυνατότητα"
    },
    {
        "word": "ανακυκλώνω",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "subtext": "ανακυκλώνω χαρτί / κάδοι ανακύκλωσης",
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
        "v3": "ανακυκλώσει"
    },
    {
        "word": "χτυπώ",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
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
        "v3": "χτυπήσει"
    },
    {
        "word": "παράγω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "παραγάγει"
    },
    {
        "word": "αντιμετωπίζω",
        "level": "elementary",
        "theme": "personal_qualities_A2",
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
        "v3": "αντιμετωπίσει"
    },
    {
        "word": "καλύπτω",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
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
        "v3": "καλύψει"
    },
    {
        "word": "περιγράφω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "περιγράψει"
    },
    {
        "word": "πιάνω",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "subtext": "πιάνω μια μπάλα / κρυολογώ / παίρνω το λεωφορείο",
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
        "v3": "πιάσει"
    },
    {
        "word": "κάνω αίτηση για",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "κάνω αίτηση για δουλειά / κάνω αίτηση ηλεκτρονικά",
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
        "v3": "κάνει αίτηση για"
    },
    {
        "word": "προσλαμβάνω",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
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
        "v3": "προσλάβει"
    },
    {
        "word": "προάγω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "παίρνω προαγωγή / προάγω κάποιον",
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
        "v3": "προαγάγει"
    },
    {
        "word": "παραιτούμαι",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "παραιτούμαι από μια δουλειά / υποβάλλω παραίτηση",
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
        "v3": "παραιτηθεί"
    },
    {
        "word": "απολύω",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "❌",
        "form": "verb",
        "subtext": "απολύω έναν υπάλληλο / απολύομαι",
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
        "v3": "απολύσει"
    },
    {
        "word": "αναθέτω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αναθέσει"
    },
    {
        "word": "διαπραγματεύομαι",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "διαπραγματευτεί"
    },
    {
        "word": "αξιολογώ",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αξιολογήσει"
    },
    {
        "word": "συνεργάζομαι",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "συνεργαστεί"
    },
    {
        "word": "προγραμματίζω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "προγραμματίσει"
    },
    {
        "word": "επενδύω",
        "level": "elementary",
        "theme": "finances_A2",
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
        "v3": "επενδύσει"
    },
    {
        "word": "δανείζομαι",
        "level": "elementary",
        "theme": "finances_A2",
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
        "v3": "δανειστεί"
    },
    {
        "word": "δανείζω",
        "level": "elementary",
        "theme": "finances_A2",
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
        "v3": "δανείσει"
    },
    {
        "word": "προϋπολογίζω",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "verb",
        "subtext": "προϋπολογίζω προσεκτικά / μηνιαίος προϋπολογισμός",
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
        "v3": "προϋπολογίσει"
    },
    {
        "word": "κάνω ανάληψη",
        "level": "elementary",
        "theme": "banking_A2",
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
        "v3": "κάνει ανάληψη"
    },
    {
        "word": "μεταφέρω",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📲",
        "form": "verb",
        "subtext": "μεταφέρω χρήματα / τραπεζική μεταφορά",
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
        "v3": "μεταφέρει"
    },
    {
        "word": "χρεώνω",
        "level": "elementary",
        "theme": "finances_A2",
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
        "v3": "χρεώσει"
    },
    {
        "word": "διεκδικώ",
        "level": "elementary",
        "theme": "finances_A2",
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
        "v3": "διεκδικήσει"
    },
    {
        "word": "μαλώνω",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
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
        "v3": "μαλώσει"
    },
    {
        "word": "εμπιστεύομαι",
        "level": "elementary",
        "theme": "social_emotions_A2",
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
        "v3": "εμπιστευτεί"
    },
    {
        "word": "υποστηρίζω",
        "level": "elementary",
        "theme": "social_emotions_A2",
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
        "v3": "υποστηρίξει"
    },
    {
        "word": "διαφωνώ",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
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
        "v3": "διαφωνήσει"
    },
    {
        "word": "ζητώ συγγνώμη",
        "level": "elementary",
        "theme": "social_emotions_A2",
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
        "v3": "ζητήσει συγγνώμη"
    },
    {
        "word": "συγχωρώ",
        "level": "elementary",
        "theme": "social_emotions_A2",
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
        "v3": "συγχωρέσει"
    },
    {
        "word": "συμβιβάζομαι",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "κάνω συμβιβασμό / είμαι πρόθυμος να συμβιβαστώ",
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
        "v3": "συμβιβαστεί"
    },
    {
        "word": "διαγιγνώσκω",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
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
        "v3": "διαγνώσει"
    },
    {
        "word": "θεραπεύω",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
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
        "v3": "θεραπεύσει"
    },
    {
        "word": "προλαμβάνω",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🛡️",
        "form": "verb",
        "subtext": "προλαμβάνω την ασθένεια / λαμβάνω μέτρα πρόληψης",
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
        "v3": "προλάβει"
    },
    {
        "word": "υποφέρω",
        "level": "elementary",
        "theme": "human_body_A2",
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
        "v3": "υποφέρει"
    },
    {
        "word": "συνιστώ",
        "level": "elementary",
        "theme": "giving_reasons_A2",
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
        "v3": "συστήσει"
    },
    {
        "word": "βελτιώνω",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
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
        "v3": "βελτιώσει"
    },
    {
        "word": "νοικιάζω",
        "level": "elementary",
        "theme": "renting_landlords_A2",
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
        "v3": "νοικιάσει"
    },
    {
        "word": "κατέχω",
        "level": "elementary",
        "theme": "renting_landlords_A2",
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
        "v3": "κατέχει"
    },
    {
        "word": "επισκευάζω",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "επισκευάζω κάτι / κάνω επισκευές",
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
        "v3": "επισκευάσει"
    },
    {
        "word": "μετακομίζω",
        "level": "elementary",
        "theme": "moving_home_A2",
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
        "v3": "μετακομίσει"
    },
    {
        "word": "διακοσμώ",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "διακοσμώ ένα δωμάτιο / εσωτερική διακόσμηση",
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
        "v3": "διακοσμήσει"
    },
    {
        "word": "ιδρύω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "ιδρύσει"
    },
    {
        "word": "ανακαλύπτω",
        "level": "elementary",
        "theme": "news_media_A2",
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
        "v3": "ανακαλύψει"
    },
    {
        "word": "συνεχίζω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "συνεχίσει"
    },
    {
        "word": "παρατάω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏳️",
        "form": "verb",
        "subtext": "παρατάω μια δουλειά / κόβω το κάπνισμα",
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
        "v3": "παρατήσει"
    },
    {
        "word": "διευθετώ",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "διευθετώ ένα πρόβλημα / τακτοποιώ μια κατάσταση",
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
        "v3": "διευθετήσει"
    },
    {
        "word": "φροντίζω",
        "level": "elementary",
        "theme": "relationships_family_A2",
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
        "v3": "φροντίσει"
    },
    {
        "word": "περιορίζω",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
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
        "v3": "περιορίσει"
    },
    {
        "word": "αναλαμβάνω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αναλάβει"
    },
    {
        "word": "απορρίπτω",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
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
        "v3": "απορρίψει"
    },
    {
        "word": "αναβάλλω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αναβάλει"
    },
    {
        "word": "χρωστάω",
        "level": "elementary",
        "theme": "finances_A2",
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
        "v3": "χρωστάει"
    },
    {
        "word": "προσκαλώ",
        "level": "elementary",
        "theme": "social_emotions_A2",
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
        "v3": "προσκαλέσει"
    },
    {
        "word": "επιβεβαιώνω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
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
        "v3": "επιβεβαιώσει"
    },
    {
        "word": "επικοινωνώ",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📞",
        "form": "verb",
        "subtext": "επικοινωνώ μέσω email / επικοινωνήστε μαζί μας",
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
        "v3": "επικοινωνήσει"
    },
    {
        "word": "παραπονιέμαι",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "😠",
        "form": "verb",
        "subtext": "παραπονιέμαι για / κάνω παράπονα",
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
        "v3": "παραπονεθεί"
    },
    {
        "word": "συζητώ",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
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
        "v3": "συζητήσει"
    },
    {
        "word": "παρουσιάζω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "παρουσιάσει"
    },
    {
        "word": "αποδέχομαι",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αποδεχτεί"
    },
    {
        "word": "αρνούμαι",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αρνηθεί"
    },
    {
        "word": "χάνω βάρος",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "verb",
        "subtext": "χάνω μερικά κιλά / προσπαθώ να χάσω βάρος",
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
        "v3": "χάσει βάρος"
    },
    {
        "word": "αυξάνω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "αυξάνω κατά / αυξάνεται ραγδαία",
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
        "v3": "αυξήσει"
    },
    {
        "word": "μειώνω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "μειώσει"
    },
    {
        "word": "βελτιώνω τις δεξιότητες",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "subtext": "βελτιώνω την απόδοση / βελτιώνομαι",
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
        "v3": "βελτιώσει τις δεξιότητες"
    },
    {
        "word": "παρέχω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "παράσχει"
    },
    {
        "word": "λύνω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧩",
        "form": "verb",
        "subtext": "λύνω ένα μυστήριο / βρίσκω μια λύση",
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
        "v3": "λύσει"
    },
    {
        "word": "μοιράζομαι",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "μοιραστεί"
    },
    {
        "word": "συμμετέχω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "συμμετάσχει"
    },
    {
        "word": "λαμβάνω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "λάβει"
    },
    {
        "word": "περιέχω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📦",
        "form": "verb",
        "subtext": "περιέχει πληροφορίες / περιέχει συστατικά",
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
        "v3": "περιέχει"
    },
    {
        "word": "σχεδιάζω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "σχεδιάσει"
    },
    {
        "word": "προετοιμάζω",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "subtext": "προετοιμάζομαι για μια συνάντηση / ετοιμάζω μια αναφορά",
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
        "v3": "προετοιμάσει"
    },
    {
        "word": "αποτυγχάνω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "αποτύχει"
    },
    {
        "word": "πετυχαίνω",
        "level": "elementary",
        "theme": "career_development_A2",
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
        "v3": "πετύχει"
    },
    {
        "word": "συμφωνώ",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
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
        "v3": "συμφωνήσει"
    },
    {
        "word": "αντικαθιστώ",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔄",
        "form": "verb",
        "subtext": "αντικαθιστώ κάτι / αντικαθίσταται από",
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
        "v3": "αντικαταστήσει"
    },
    {
        "word": "ψάχνω",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
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
        "v3": "ψάξει"
    },
    {
        "word": "αποσυνδέομαι",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "κάνω αποσύνδεση",
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
        "v3": "αποσυνδεθεί"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

// TODO: verify level classification
(function() {
    const lang = "el";
    const data = [
    {
        "word": "διεπιστημονικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που αφορά ή συνδυάζει δύο ή περισσότερους ακαδημαϊκούς κλάδους.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_001"
    },
    {
        "word": "ερμηνευτικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που σχετίζεται με την ερμηνεία κειμένων ή νοήματος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_002"
    },
    {
        "word": "ταυτολογικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που επαναλαμβάνει το ίδιο πράγμα με διαφορετικά λόγια· κυκλικός στη συλλογιστική.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_003"
    },
    {
        "word": "πολύσημος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που έχει πολλαπλές σημασίες.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_004"
    },
    {
        "word": "ευρετικός",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Μια προσέγγιση επίλυσης προβλημάτων βασισμένη στην εμπειρία παρά στην εγγυημένη απόδειξη.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_001"
    },
    {
        "word": "μετα-αποικιακός",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που σχετίζεται με την περίοδο μετά την αποικιοκρατία ή την κριτική των αποικιακών καταλοίπων.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_001"
    },
    {
        "word": "πολυπολικός",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που περιγράφει μια παγκόσμια τάξη με αρκετά κέντρα ισχύος αντί για ένα ή δύο.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_002"
    },
    {
        "word": "κοσμοπολίτικος",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Εξοικειωμένος με πολλές διαφορετικές χώρες και πολιτισμούς.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_003"
    },
    {
        "word": "ναρκισσιστικός",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που έχει υπερβολικό ενδιαφέρον για τον εαυτό του και την εμφάνισή του.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_002"
    },
    {
        "word": "ετερόδοξος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
            {
                "text": "Αντίθετος προς τις καθιερωμένες ή αποδεκτές πεποιθήσεις ή δόγματα.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_005"
    },
    {
        "word": "εγγενής",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που υπάρχει ή λειτουργεί μέσα σε κάτι· όχι υπερβατικός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_006"
    },
    {
        "word": "απότομος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ξαφνικός και απροσδόκητος· τραχύς στους τρόπους.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_007"
    },
    {
        "word": "δυσνόητος",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Δύσκολος στην κατανόηση· ασαφής.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_003"
    },
    {
        "word": "αναχρονιστικός",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ξεπερασμένος· που ανήκει σε προγενέστερη περίοδο.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_time_001"
    },
    {
        "word": "αντιθετικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Άμεσα αντίθετος ή αντίξοος προς κάτι.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_008"
    },
    {
        "word": "απόκρυφος",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "Γνωστός μόνο σε λίγους· μυστηριώδης και μυστικός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_004"
    },
    {
        "word": "άτυπος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🦄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Μη τυπικός· όχι κανονικός ή συνηθισμένος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_009"
    },
    {
        "word": "δυαδικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που αποτελείται από δύο πράγματα· βασισμένος σε δίλημμα.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_010"
    },
    {
        "word": "κατηγορηματικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Απόλυτος· εκφρασμένος χωρίς εξαιρέσεις ή όρους.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_011"
    },
    {
        "word": "περίσκεπτος",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Προσεκτικός ώστε να εξετάζει όλες τις περιστάσεις· επιφυλακτικός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_004"
    },
    {
        "word": "κρυφός",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Κρυμμένος· μυστικός· όχι φανερά αναγνωρισμένος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_005"
    },
    {
        "word": "διαλεκτικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Σχετικός με τη λογική συζήτηση ιδεών μέσω αντιθέτων.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_012"
    },
    {
        "word": "διάχυτος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Εξαπλωμένος σε μεγάλη περιοχή· που στερείται σαφήνειας.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_013"
    },
    {
        "word": "ασύλληπτος",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Δύσκολος να βρεθεί, να πιαστεί ή να επιτευχθεί.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_005"
    },
    {
        "word": "εσωτερικός",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗝️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που γίνεται κατανοητός ή προορίζεται μόνο για μια μικρή ομάδα.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_006"
    },
    {
        "word": "εσφαλμένος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Βασισμένος σε λανθασμένη συλλογιστική· παραπλανητικός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_014"
    },
    {
        "word": "αμετάβλητος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δεν μπορεί να αλλάξει· σταθερός και μόνιμος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_015"
    },
    {
        "word": "αμερόληπτος",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δεν ευνοεί τη μία πλευρά έναντι της άλλης· δίκαιος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_006"
    },
    {
        "word": "συμπτωματικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που συμβαίνει ως δευτερεύον μέρος κάτι άλλου.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_016"
    },
    {
        "word": "εμφυτος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που υπάρχει σε κάτι ως φυσική και μόνιμη ιδιότητα.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_017"
    },
    {
        "word": "απαράμιλλος",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Τόσο καλός ή ασυνήθιστος που είναι αδύνατο να αντιγραφεί.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_art_culture_001"
    },
    {
        "word": "ύπουλος",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🐍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που εξελίσσεται σταδιακά με επιβλαβή τρόπο.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_007"
    },
    {
        "word": "ασυμβίβαστος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δεν μπορεί να συμφιλιωθεί ή να γίνει συμβατός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_018"
    },
    {
        "word": "μεταιχμιακός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που σχετίζεται με μια μεταβατική ή ενδιάμεση κατάσταση.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_019"
    },
    {
        "word": "πολλαπλός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Πολλοί και διαφόρων ειδών.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_020"
    },
    {
        "word": "νεφελώδης",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Όχι σαφής· αόριστος και κακώς καθορισμένος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_007"
    },
    {
        "word": "κανονιστικός",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "form": "adjective",
        "definitions": [
            {
                "text": "Σχετικός με ένα πρότυπο· που ορίζει τι πρέπει να είναι.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_008"
    },
    {
        "word": "λεπτομερής",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δείχνει λεπτές διακρίσεις· όχι απλός ή ακραίος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_021"
    },
    {
        "word": "πλάγιος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Όχι ευθύς· έμμεσος· όχι άμεσος ή ανοιχτός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_022"
    },
    {
        "word": "αδιαφανής",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "Όχι διαφανής· δύσκολος στην κατανόηση.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_023"
    },
    {
        "word": "φαινομενικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που φαίνεται να είναι κάτι· που δηλώνεται ως πραγματικός ή αληθινός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_024"
    },
    {
        "word": "παραδοξικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που αντιφάσκει με τον εαυτό του ενώ περιέχει αλήθεια.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_025"
    },
    {
        "word": "διάχυτος",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που υπάρχει παντού· που εξαπλώνεται ευρέως.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_time_002"
    },
    {
        "word": "πολωτικός",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που αναγκάζει τους ανθρώπους να πάρουν αντίθετες θέσεις.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_009"
    },
    {
        "word": "επισφαλής",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Όχι ασφαλής ή βέβαιος· που εξαρτάται από την τύχη.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_026"
    },
    {
        "word": "προδιαγραφικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που υπαγορεύει τι πρέπει να γίνει· που θεσπίζει κανόνες.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_027"
    },
    {
        "word": "παρατεταμένος",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που διαρκεί περισσότερο από το αναμενόμενο· παρατεταμένος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_time_003"
    },
    {
        "word": "αναγωγικός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📉",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που απλουστεύει υπερβολικά κάτι περίπλοκο.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_028"
    },
    {
        "word": "καθοριστικός",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Πολύ σημαντικός και επιδραστικός· πρωτότυπος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_time_004"
    },
    {
        "word": "ευειδής",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που φαίνεται σωστός αλλά στην πραγματικότητα είναι λάθος· παραπλανητικός.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_029"
    },
    {
        "word": "νόθος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Όχι γνήσιος· βασισμένος σε ψευδή συλλογιστική.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_030"
    },
    {
        "word": "ανατρεπτικός",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που σκοπεύει να υπονομεύσει ένα καθιερωμένο σύστημα.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_010"
    },
    {
        "word": "σιωπηρός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που γίνεται κατανοητός ή συμφωνείται χωρίς να αναφέρεται.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_031"
    },
    {
        "word": "ισχνός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Πολύ αδύναμος ή ελαφρύς· όχι σταθερά εδραιωμένος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_032"
    },
    {
        "word": "παροδικός",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Όχι μόνιμος· που περνάει γρήγορα.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_time_005"
    },
    {
        "word": "πανταχού παρών",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που εμφανίζεται παντού· πολύ συνηθισμένος.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_time_006"
    },
    {
        "word": "μονοσήμαντος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δεν αφήνει περιθώρια αμφιβολίας· εντελώς σαφής.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_033"
    },
    {
        "word": "άνευ προηγουμένου",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δεν έχει ξανασυμβεί ποτέ πριν.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_time_007"
    },
    {
        "word": "ανυπόστατος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δεν μπορεί να διατηρηθεί ή να υποστηριχθεί.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_034"
    },
    {
        "word": "δυσκίνητος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Δύσκολος στον χειρισμό ή τη διαχείριση λόγω μεγέθους.",
                "examples": []
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_035"
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

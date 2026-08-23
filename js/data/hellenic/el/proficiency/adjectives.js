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
        "id": "el_proficiency_language_001",
        "transcription": ""
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
        "id": "el_proficiency_language_002",
        "transcription": ""
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
        "id": "el_proficiency_language_003",
        "transcription": ""
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
        "id": "el_proficiency_language_004",
        "transcription": ""
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
        "id": "el_proficiency_psychology_001",
        "transcription": ""
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
        "id": "el_proficiency_social_001",
        "transcription": ""
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
        "id": "el_proficiency_social_002",
        "transcription": ""
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
        "id": "el_proficiency_social_003",
        "transcription": ""
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
        "id": "el_proficiency_psychology_002",
        "transcription": ""
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
        "id": "el_proficiency_language_005",
        "transcription": ""
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
        "id": "el_proficiency_language_006",
        "transcription": ""
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
        "id": "el_proficiency_language_007",
        "transcription": ""
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
        "id": "el_proficiency_psychology_003",
        "transcription": ""
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
        "id": "el_proficiency_time_001",
        "transcription": ""
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
        "id": "el_proficiency_language_008",
        "transcription": ""
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
        "id": "el_proficiency_psychology_004",
        "transcription": ""
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
        "id": "el_proficiency_language_009",
        "transcription": ""
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
        "id": "el_proficiency_language_010",
        "transcription": ""
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
        "id": "el_proficiency_language_011",
        "transcription": ""
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
        "id": "el_proficiency_social_004",
        "transcription": ""
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
        "id": "el_proficiency_social_005",
        "transcription": ""
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
        "id": "el_proficiency_language_012",
        "transcription": ""
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
        "id": "el_proficiency_language_013",
        "transcription": ""
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
        "id": "el_proficiency_psychology_005",
        "transcription": ""
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
        "id": "el_proficiency_psychology_006",
        "transcription": ""
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
        "id": "el_proficiency_language_014",
        "transcription": ""
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
        "id": "el_proficiency_language_015",
        "transcription": ""
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
        "id": "el_proficiency_social_006",
        "transcription": ""
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
        "id": "el_proficiency_language_016",
        "transcription": ""
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
        "id": "el_proficiency_language_017",
        "transcription": ""
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
        "id": "el_proficiency_art_culture_001",
        "transcription": ""
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
        "id": "el_proficiency_social_007",
        "transcription": ""
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
        "id": "el_proficiency_language_018",
        "transcription": ""
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
        "id": "el_proficiency_language_019",
        "transcription": ""
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
        "id": "el_proficiency_language_020",
        "transcription": ""
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
        "id": "el_proficiency_psychology_007",
        "transcription": ""
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
        "id": "el_proficiency_social_008",
        "transcription": ""
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
        "id": "el_proficiency_language_021",
        "transcription": ""
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
        "id": "el_proficiency_language_022",
        "transcription": ""
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
        "id": "el_proficiency_language_023",
        "transcription": ""
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
        "id": "el_proficiency_language_024",
        "transcription": ""
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
        "id": "el_proficiency_language_025",
        "transcription": ""
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
        "id": "el_proficiency_time_002",
        "transcription": ""
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
        "id": "el_proficiency_social_009",
        "transcription": ""
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
        "id": "el_proficiency_language_026",
        "transcription": ""
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
        "id": "el_proficiency_language_027",
        "transcription": ""
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
        "id": "el_proficiency_time_003",
        "transcription": ""
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
        "id": "el_proficiency_language_028",
        "transcription": ""
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
        "id": "el_proficiency_time_004",
        "transcription": ""
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
        "id": "el_proficiency_language_029",
        "transcription": ""
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
        "id": "el_proficiency_language_030",
        "transcription": ""
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
        "id": "el_proficiency_social_010",
        "transcription": ""
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
        "id": "el_proficiency_language_031",
        "transcription": ""
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
        "id": "el_proficiency_language_032",
        "transcription": ""
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
        "id": "el_proficiency_time_005",
        "transcription": ""
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
        "id": "el_proficiency_time_006",
        "transcription": ""
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
        "id": "el_proficiency_language_033",
        "transcription": ""
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
        "id": "el_proficiency_time_007",
        "transcription": ""
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
        "id": "el_proficiency_language_034",
        "transcription": ""
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
        "id": "el_proficiency_language_035",
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

// TODO: verify level classification
(function() {
    const lang = "el";
    const data = [
        {
            "word": "διεπιστημονικός",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧪",
            "form": "adjective",
            "definitions": [{ "text": "Που αφορά ή συνδυάζει δύο ή περισσότερους ακαδημαϊκούς κλάδους." }]
        },
        {
            "word": "ερμηνευτικός",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Που σχετίζεται με την ερμηνεία κειμένων ή νοήματος." }]
        },
        {
            "word": "ταυτολογικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Που επαναλαμβάνει το ίδιο πράγμα με διαφορετικά λόγια· κυκλικός στη συλλογιστική." }]
        },
        {
            "word": "πολύσημος",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "🔠",
            "form": "adjective",
            "definitions": [{ "text": "Που έχει πολλαπλές σημασίες." }]
        },
        {
            "word": "ευρετικός",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "💡",
            "form": "adjective",
            "definitions": [{ "text": "Μια προσέγγιση επίλυσης προβλημάτων βασισμένη στην εμπειρία παρά στην εγγυημένη απόδειξη." }]
        },
        {
            "word": "μετα-αποικιακός",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Που σχετίζεται με την περίοδο μετά την αποικιοκρατία ή την κριτική των αποικιακών καταλοίπων." }]
        },
        {
            "word": "πολυπολικός",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🌐",
            "form": "adjective",
            "definitions": [{ "text": "Που περιγράφει μια παγκόσμια τάξη με αρκετά κέντρα ισχύος αντί για ένα ή δύο." }]
        },
        {
            "word": "κοσμοπολίτικος",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🏙️",
            "form": "adjective",
            "definitions": [{ "text": "Εξοικειωμένος με πολλές διαφορετικές χώρες και πολιτισμούς." }]
        },
        {
            "word": "ναρκισσιστικός",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "emoji": "🪞",
            "form": "adjective",
            "definitions": [{ "text": "Που έχει υπερβολικό ενδιαφέρον για τον εαυτό του και την εμφάνισή του." }]
        },
        {
            "word": "ετερόδοξος",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚩",
            "form": "adjective",
            "definitions": [{ "text": "Αντίθετος προς τις καθιερωμένες ή αποδεκτές πεποιθήσεις ή δόγματα." }]
        },
        {
            "word": "εγγενής",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Που υπάρχει ή λειτουργεί μέσα σε κάτι· όχι υπερβατικός." }]
        },
        {
            "word": "απότομος",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⏱️",
            "form": "adjective",
            "definitions": [{ "text": "Ξαφνικός και απροσδόκητος· τραχύς στους τρόπους." }]
        },
        {
            "word": "δυσνόητος",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🧐",
            "form": "adjective",
            "definitions": [{ "text": "Δύσκολος στην κατανόηση· ασαφής." }]
        },
        {
            "word": "αναχρονιστικός",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Ξεπερασμένος· που ανήκει σε προγενέστερη περίοδο." }]
        },
        {
            "word": "αντιθετικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Άμεσα αντίθετος ή αντίξοος προς κάτι." }]
        },
        {
            "word": "απόκρυφος",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🔮",
            "form": "adjective",
            "definitions": [{ "text": "Γνωστός μόνο σε λίγους· μυστηριώδης και μυστικός." }]
        },
        {
            "word": "άτυπος",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🦄",
            "form": "adjective",
            "definitions": [{ "text": "Μη τυπικός· όχι κανονικός ή συνηθισμένος." }]
        },
        {
            "word": "δυαδικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Που αποτελείται από δύο πράγματα· βασισμένος σε δίλημμα." }]
        },
        {
            "word": "κατηγορηματικός",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "❗",
            "form": "adjective",
            "definitions": [{ "text": "Απόλυτος· εκφρασμένος χωρίς εξαιρέσεις ή όρους." }]
        },
        {
            "word": "περίσκεπτος",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🛡️",
            "form": "adjective",
            "definitions": [{ "text": "Προσεκτικός ώστε να εξετάζει όλες τις περιστάσεις· επιφυλακτικός." }]
        },
        {
            "word": "κρυφός",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🕵️",
            "form": "adjective",
            "definitions": [{ "text": "Κρυμμένος· μυστικός· όχι φανερά αναγνωρισμένος." }]
        },
        {
            "word": "διαλεκτικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Σχετικός με τη λογική συζήτηση ιδεών μέσω αντιθέτων." }]
        },
        {
            "word": "διάχυτος",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌫️",
            "form": "adjective",
            "definitions": [{ "text": "Εξαπλωμένος σε μεγάλη περιοχή· που στερείται σαφήνειας." }]
        },
        {
            "word": "ασύλληπτος",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🌬️",
            "form": "adjective",
            "definitions": [{ "text": "Δύσκολος να βρεθεί, να πιαστεί ή να επιτευχθεί." }]
        },
        {
            "word": "εσωτερικός",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "🗝️",
            "form": "adjective",
            "definitions": [{ "text": "Που γίνεται κατανοητός ή προορίζεται μόνο για μια μικρή ομάδα." }]
        },
        {
            "word": "εσφαλμένος",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "❌",
            "form": "adjective",
            "definitions": [{ "text": "Βασισμένος σε λανθασμένη συλλογιστική· παραπλανητικός." }]
        },
        {
            "word": "αμετάβλητος",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧱",
            "form": "adjective",
            "definitions": [{ "text": "Που δεν μπορεί να αλλάξει· σταθερός και μόνιμος." }]
        },
        {
            "word": "αμερόληπτος",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "⚖️",
            "form": "adjective",
            "definitions": [{ "text": "Που δεν ευνοεί τη μία πλευρά έναντι της άλλης· δίκαιος." }]
        },
        {
            "word": "συμπτωματικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🍃",
            "form": "adjective",
            "definitions": [{ "text": "Που συμβαίνει ως δευτερεύον μέρος κάτι άλλου." }]
        },
        {
            "word": "εμφυτος",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "⚛️",
            "form": "adjective",
            "definitions": [{ "text": "Που υπάρχει σε κάτι ως φυσική και μόνιμη ιδιότητα." }]
        },
        {
            "word": "απαράμιλλος",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "emoji": "🌟",
            "form": "adjective",
            "definitions": [{ "text": "Τόσο καλός ή ασυνήθιστος που είναι αδύνατο να αντιγραφεί." }]
        },
        {
            "word": "ύπουλος",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "🐍",
            "form": "adjective",
            "definitions": [{ "text": "Που εξελίσσεται σταδιακά με επιβλαβή τρόπο." }]
        },
        {
            "word": "ασυμβίβαστος",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🚫",
            "form": "adjective",
            "definitions": [{ "text": "Που δεν μπορεί να συμφιλιωθεί ή να γίνει συμβατός." }]
        },
        {
            "word": "μεταιχμιακός",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🚪",
            "form": "adjective",
            "definitions": [{ "text": "Που σχετίζεται με μια μεταβατική ή ενδιάμεση κατάσταση." }]
        },
        {
            "word": "πολλαπλός",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔢",
            "form": "adjective",
            "definitions": [{ "text": "Πολλοί και διαφόρων ειδών." }]
        },
        {
            "word": "νεφελώδης",
            "level": "proficiency",
            "theme": "epistemology_knowledge_C2",
            "emoji": "☁️",
            "form": "adjective",
            "definitions": [{ "text": "Όχι σαφής· αόριστος και κακώς καθορισμένος." }]
        },
        {
            "word": "κανονιστικός",
            "level": "proficiency",
            "theme": "ethics_advanced_C2",
            "emoji": "📏",
            "form": "adjective",
            "definitions": [{ "text": "Σχετικός με ένα πρότυπο· που ορίζει τι πρέπει να είναι." }]
        },
        {
            "word": "λεπτομερής",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌗",
            "form": "adjective",
            "definitions": [{ "text": "Που δείχνει λεπτές διακρίσεις· όχι απλός ή ακραίος." }]
        },
        {
            "word": "πλάγιος",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "↗️",
            "form": "adjective",
            "definitions": [{ "text": "Όχι ευθύς· έμμεσος· όχι άμεσος ή ανοιχτός." }]
        },
        {
            "word": "αδιαφανής",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🌑",
            "form": "adjective",
            "definitions": [{ "text": "Όχι διαφανής· δύσκολος στην κατανόηση." }]
        },
        {
            "word": "φαινομενικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🎭",
            "form": "adjective",
            "definitions": [{ "text": "Που φαίνεται να είναι κάτι· που δηλώνεται ως πραγματικός ή αληθινός." }]
        },
        {
            "word": "παραδοξικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [{ "text": "Που αντιφάσκει με τον εαυτό του ενώ περιέχει αλήθεια." }]
        },
        {
            "word": "διάχυτος",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌊",
            "form": "adjective",
            "definitions": [{ "text": "Που υπάρχει παντού· που εξαπλώνεται ευρέως." }]
        },
        {
            "word": "πολωτικός",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "🧲",
            "form": "adjective",
            "definitions": [{ "text": "Που αναγκάζει τους ανθρώπους να πάρουν αντίθετες θέσεις." }]
        },
        {
            "word": "επισφαλής",
            "level": "proficiency",
            "theme": "ontology_existence_C2",
            "emoji": "🧗",
            "form": "adjective",
            "definitions": [{ "text": "Όχι ασφαλής ή βέβαιος· που εξαρτάται από την τύχη." }]
        },
        {
            "word": "προδιαγραφικός",
            "level": "proficiency",
            "theme": "linguistics_theory_C2",
            "emoji": "📜",
            "form": "adjective",
            "definitions": [{ "text": "Που υπαγορεύει τι πρέπει να γίνει· που θεσπίζει κανόνες." }]
        },
        {
            "word": "παρατεταμένος",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "⌛",
            "form": "adjective",
            "definitions": [{ "text": "Που διαρκεί περισσότερο από το αναμενόμενο· παρατεταμένος." }]
        },
        {
            "word": "αναγωγικός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📉",
            "form": "adjective",
            "definitions": [{ "text": "Που απλουστεύει υπερβολικά κάτι περίπλοκο." }]
        },
        {
            "word": "καθοριστικός",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌱",
            "form": "adjective",
            "definitions": [{ "text": "Πολύ σημαντικός και επιδραστικός· πρωτότυπος." }]
        },
        {
            "word": "ευειδής",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "🤥",
            "form": "adjective",
            "definitions": [{ "text": "Που φαίνεται σωστός αλλά στην πραγματικότητα είναι λάθος· παραπλανητικός." }]
        },
        {
            "word": "νόθος",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🤡",
            "form": "adjective",
            "definitions": [{ "text": "Όχι γνήσιος· βασισμένος σε ψευδή συλλογιστική." }]
        },
        {
            "word": "ανατρεπτικός",
            "level": "proficiency",
            "theme": "political_theory_C2",
            "emoji": "💣",
            "form": "adjective",
            "definitions": [{ "text": "Που σκοπεύει να υπονομεύσει ένα καθιερωμένο σύστημα." }]
        },
        {
            "word": "σιωπηρός",
            "level": "proficiency",
            "theme": "philosophy_language_C2",
            "emoji": "🤫",
            "form": "adjective",
            "definitions": [{ "text": "Που γίνεται κατανοητός ή συμφωνείται χωρίς να αναφέρεται." }]
        },
        {
            "word": "ισχνός",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🕸️",
            "form": "adjective",
            "definitions": [{ "text": "Πολύ αδύναμος ή ελαφρύς· όχι σταθερά εδραιωμένος." }]
        },
        {
            "word": "παροδικός",
            "level": "proficiency",
            "theme": "mortality_time_C2",
            "emoji": "🌅",
            "form": "adjective",
            "definitions": [{ "text": "Όχι μόνιμος· που περνάει γρήγορα." }]
        },
        {
            "word": "πανταχού παρών",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🌍",
            "form": "adjective",
            "definitions": [{ "text": "Που εμφανίζεται παντού· πολύ συνηθισμένος." }]
        },
        {
            "word": "μονοσήμαντος",
            "level": "proficiency",
            "theme": "rhetoric_persuasion_C2",
            "emoji": "📢",
            "form": "adjective",
            "definitions": [{ "text": "Που δεν αφήνει περιθώρια αμφιβολίας· εντελώς σαφής." }]
        },
        {
            "word": "άνευ προηγουμένου",
            "level": "proficiency",
            "theme": "civilisation_history_C2",
            "emoji": "🚀",
            "form": "adjective",
            "definitions": [{ "text": "Που δεν έχει ξανασυμβεί ποτέ πριν." }]
        },
        {
            "word": "ανυπόστατος",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "🏗️",
            "form": "adjective",
            "definitions": [{ "text": "Που δεν μπορεί να διατηρηθεί ή να υποστηριχθεί." }]
        },
        {
            "word": "δυσκίνητος",
            "level": "proficiency",
            "theme": "meta_argument_deconstruction_C2",
            "emoji": "📦",
            "form": "adjective",
            "definitions": [{ "text": "Δύσκολος στον χειρισμό ή τη διαχείριση λόγω μεγέθους." }]
        }
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

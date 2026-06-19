// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "πραγμοποιώ",
        "level": "proficiency",
        "theme": "philosophy_logic",
        "emoji": "🗿",
        "subtext": "πραγμοποιώ μια έννοια / πραγμοποιώ την αγορά / πραγμοποίηση της εργασίας",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιμετωπίζω μια αφηρημένη ιδέα σαν να ήταν υλικό ή συγκεκριμένο πράγμα.",
                "examples": [
                    "Τα οικονομικά μοντέλα πραγμοποιούν τις δυνάμεις της αγοράς, κάνοντάς τις να φαίνονται φυσικές."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "πραγμοποιημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_philosophy_logic_001"
    },
    {
        "word": "εξιδανικεύω",
        "level": "proficiency",
        "theme": "psychology_academic",
        "emoji": "🎭",
        "subtext": "εξιδανικεύω την επιθυμία / εξιδανίκευση της ενόρμησης / ανακατεύθυνση σε",
        "form": "verb",
        "definitions": [
            {
                "text": "Διοχετεύω ενορμήσεις ή συναισθήματα σε κοινωνικά αποδεκτές ή δημιουργικές δραστηριότητες (sublimate).",
                "examples": [
                    "Εξιδανίκευσε την πολιτική του απογοήτευση στη συγγραφή ακαδημαϊκών κειμένων."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "εξιδανικευμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_psychology_academic_001"
    },
    {
        "word": "κατηγορώ",
        "level": "proficiency",
        "theme": "logic_linguistics",
        "emoji": "🗣️",
        "subtext": "κατηγορώ για / βασίζω έναν ισχυρισμό / βασίζεται στην υπόθεση",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποδίδω μια ιδιότητα σε ένα υποκείμενο (predicate).",
                "examples": [
                    "Το επιχείρημά της προϋποθέτει (predicates) ένα επίπεδο εμπιστοσύνης που δεν υπάρχει πλέον."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "κατηγορημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_logic_linguistics_001"
    },
    {
        "word": "ενσαρκώνω",
        "level": "proficiency",
        "theme": "logic_computing",
        "emoji": "📋",
        "subtext": "ενσαρκώνω μια έννοια / συγκεκριμενοποιώ στην πράξη",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιπροσωπεύω ή απεικονίζω κάτι αφηρημένο μέσω ενός συγκεκριμένου παραδείγματος (instantiate).",
                "examples": [
                    "Η μελέτη περίπτωσης ενσαρκώνει τη θεωρία της σύλληψης του ρυθμιστή."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "ενσαρκωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_logic_computing_001"
    },
    {
        "word": "αναιρώ",
        "level": "proficiency",
        "theme": "logic_debate",
        "emoji": "❌",
        "subtext": "αναιρώ ένα επιχείρημα / ακυρώνω ένα δικαίωμα / διαλεκτική αναίρεση",
        "form": "verb",
        "definitions": [
            {
                "text": "Ακυρώνω ή καθιστώ κάτι ανίσχυρο.",
                "examples": [
                    "Η νέα ρήτρα αναιρεί ουσιαστικά το δικαίωμα που φαίνεται να παραχωρεί."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "αναιρεμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_logic_debate_001"
    },
    {
        "word": "υπερβαίνω",
        "level": "proficiency",
        "theme": "philosophy_general",
        "emoji": "🌌",
        "subtext": "υπερβαίνω τα όρια / υπερβαίνω τις κατηγορίες / υπερβαίνω το προσωπικό",
        "form": "verb",
        "definitions": [
            {
                "text": "Πηγαίνω πέρα από τα όρια κάποιου πράγματος.",
                "examples": [
                    "Η μεγάλη τέχνη υπερβαίνει την ιστορική στιγμή της δημιουργίας της."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "υπερέβην",
        "v3": "υπερβεβλημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_philosophy_general_001"
    },
    {
        "word": "διαμεσολαβώ",
        "level": "proficiency",
        "theme": "sociology_conflict",
        "emoji": "⚖️",
        "subtext": "διαμεσολαβώ μεταξύ / διαμεσολαβώ σε μια σύγκρουση / κοινωνικά διαμεσολαβημένος",
        "form": "verb",
        "definitions": [
            {
                "text": "Παρεμβαίνω για να συμφιλιώσω ή να συνδέσω δύο μέρη.",
                "examples": [
                    "Η γλώσσα διαμεσολαβεί τη σχέση μας με τον εξωτερικό κόσμο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "διαμεσολαβημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_sociology_conflict_001"
    },
    {
        "word": "απαλείφω",
        "level": "proficiency",
        "theme": "linguistics_debate",
        "emoji": "✂️",
        "subtext": "απαλείφω μια διάκριση / απαλείφω τη διαφορά / απαλείφω σκόπιμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Παραλείπω ή αγνοώ κάτι σκόπιμα (elide).",
                "examples": [
                    "Η έκθεση απαλείφει τη διαφορά μεταξύ φτώχειας και στέρησης."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "απαλειμμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_linguistics_debate_001"
    },
    {
        "word": "συσκοτίζω",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🌫️",
        "subtext": "συσκοτίζω την αλήθεια / σκόπιμη συσκότιση / συσκότιση με ορολογία",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι ασαφές ή δύσκολο στην κατανόηση, συχνά σκόπιμα.",
                "examples": [
                    "Η τεχνική γλώσσα φαινόταν σχεδιασμένη να συσκοτίζει, όχι να διευκρινίζει."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "συσκοτισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_communication_001"
    },
    {
        "word": "συγχέω",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🌀",
        "subtext": "συγχέω ζητήματα / συγχέω με / επικίνδυνη σύγχυση",
        "form": "verb",
        "definitions": [
            {
                "text": "Συνδυάζω δύο ή περισσότερες ιδέες σε μία, συχνά εσφαλμένα.",
                "examples": [
                    "Η συζήτηση συγχέει την άτακτη μετανάστευση με την παράνομη μετανάστευση."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "συγκεχυμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_academic_001"
    },
    {
        "word": "επικαλούμαι",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "📜",
        "subtext": "επικαλούμαι ένα δικαίωμα / επικαλούμαι προηγούμενο / επικαλούμαι ένα επιχείρημα",
        "form": "verb",
        "definitions": [
            {
                "text": "Αναφέρω ή επικαλούμαι κάτι ως αυθεντία για μια πράξη.",
                "examples": [
                    "Επικαλέστηκε το δικαίωμα στην ελευθερία του λόγου στην υπεράσπισή της."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "επικλημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_debate_001"
    },
    {
        "word": "προβάλλω",
        "level": "proficiency",
        "theme": "art_media",
        "emoji": "🔦",
        "subtext": "προβάλλω ένα ζήτημα / προβάλλω μια προοπτική / προβάλλω σκόπιμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι το επίκεντρο της προσοχής (foreground).",
                "examples": [
                    "Η ταινία προβάλλει σκόπιμα τη φυλή ως το κεντρικό της πρίσμα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "προβεβλημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_art_media_001"
    },
    {
        "word": "ανακτώ",
        "level": "proficiency",
        "theme": "sociology_culture",
        "emoji": "♻️",
        "subtext": "ανακτώ ένα κίνημα / ανακτάται από / πολιτισμική ανάκτηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Ενσωματώνω κάτι (όπως μια επαναστατική αισθητική) στην κυρίαρχη κουλτούρα (recuperate).",
                "examples": [
                    "Η βιομηχανία της μόδας ανέκτησε την επαναστατική αισθητική του πανκ."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "ανακτημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_sociology_culture_001"
    },
    {
        "word": "αποσταθεροποιώ",
        "level": "proficiency",
        "theme": "politics_academic",
        "emoji": "⚖️",
        "subtext": "αποσταθεροποιώ ένα καθεστώς / αποσταθεροποιώ παραδοχές / αποσταθεροποιώ σκόπιμα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι ασταθές ή διαταράσσω την ισορροπία του.",
                "examples": [
                    "Τα στοιχεία αποσταθεροποιούν την κεντρική παραδοχή της έκθεσης."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αποσταθεροποιημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_politics_academic_001"
    },
    {
        "word": "εμπορευματοποιώ",
        "level": "proficiency",
        "theme": "economics_sociology",
        "emoji": "💰",
        "subtext": "εμπορευματοποιώ την εργασία / εμπορευματοποιώ τη φροντίδα / εμπορευματοποίηση της προσοχής",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιμετωπίζω κάτι ως εμπορικό προϊόν που μπορεί να αγοραστεί και να πωληθεί.",
                "examples": [
                    "Η βιομηχανία ευεξίας εμπορευματοποιεί την ψυχική υγεία και την αυτοφροντίδα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "εμπορευματοποιημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_economics_sociology_001"
    },
    {
        "word": "εργαλειοποιώ",
        "level": "proficiency",
        "theme": "politics_philosophy",
        "emoji": "🛠️",
        "subtext": "εργαλειοποιώ ανθρώπους / εργαλειοποιώ μια ιδέα",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ κάτι ή κάποιον απλώς ως μέσο για την επίτευξη ενός σκοπού.",
                "examples": [
                    "Οι επικριτές υποστήριξαν ότι η πολιτική εργαλειοποίησε την ευημερία των εργαζομένων."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "εργαλειοποιημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_politics_philosophy_001"
    },
    {
        "word": "αξιοποιώ",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "💎",
        "subtext": "αξιοποιώ την εργασία / αξιοποιώ μια έννοια / αξιοποιείται από την κουλτούρα",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποδίδω μεγάλη αξία ή σημασία σε κάτι (valorise).",
                "examples": [
                    "Ο σύγχρονος πολιτισμός αξιοποιεί την παραγωγικότητα πάνω από την ανάπαυση και την ηρεμία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αξιοποιημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_sociology_academic_001"
    },
    {
        "word": "φετιχοποιώ",
        "level": "proficiency",
        "theme": "sociology_academic",
        "emoji": "🧿",
        "subtext": "φετιχοποιώ μια ιδέα / φετιχισμός του εμπορεύματος / φετιχοποιώ την ανάπτυξη",
        "form": "verb",
        "definitions": [
            {
                "text": "Έχω μια υπερβολική και παράλογη προσκόλληση ή ενδιαφέρον για κάτι.",
                "examples": [
                    "Η κουλτούρα των startup φετιχοποιεί την ανατροπή ως αυτοσκοπό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "φετιχοποιημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_sociology_academic_002"
    },
    {
        "word": "αλλοτριώνω",
        "level": "proficiency",
        "theme": "sociology_psychology",
        "emoji": "👽",
        "subtext": "αλλοτριώνω κάποιον / αισθάνομαι αλλοτριωμένος / αλλοτρίωση από την εργασία",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάποιον να αισθάνεται απομονωμένος ή αποξενωμένος από το περιβάλλον του ή τον εαυτό του.",
                "examples": [
                    "Οι βιομηχανικές συνθήκες αλλοτριώνουν τους εργάτες από κάθε αίσθηση δεξιοτεχνίας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αλλοτριωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_sociology_psychology_001"
    },
    {
        "word": "οριοθετώ",
        "level": "proficiency",
        "theme": "law_philosophy",
        "emoji": "🚧",
        "subtext": "οριοθετώ ένα σύνορο / οριοθετώ με σαφήνεια / γραμμή οριοθέτησης",
        "form": "verb",
        "definitions": [
            {
                "text": "Καθορίζω τα όρια κάποιου πράγματος (demarcate).",
                "examples": [
                    "Ο νόμος επιχειρεί να οριοθετήσει τη γραμμή μεταξύ ρύθμισης και λογοκρισίας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "οριοθετημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_philosophy_001"
    },
    {
        "word": "ορίζω",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📏",
        "subtext": "ορίζω το εύρος / ορίζω μια έννοια / προσεκτικά ορισμένο",
        "form": "verb",
        "definitions": [
            {
                "text": "Καθορίζω ή προσδιορίζω με ακρίβεια τα όρια κάποιου πράγματος (delimit).",
                "examples": [
                    "Η μελέτη οριοθετεί σκόπιμα το πεδίο εφαρμογής της για να αποφύγει την υπεργενίκευση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "ορισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_academic_research_001"
    },
    {
        "word": "αντιστρατεύομαι",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🛡️",
        "subtext": "αντιστρατεύεται σε / αντιστρατεύεται σθεναρά / τάσσεται υπέρ",
        "form": "verb",
        "definitions": [
            {
                "text": "(Για γεγονός ή κατάσταση) λειτουργεί εναντίον κάποιου πράγματος (militate).",
                "examples": [
                    "Η πολυπλοκότητα του συστήματος αντιστρατεύεται την αποτελεσματική μεταρρύθμιση."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "",
        "v3": "αντιστρατευμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_academic_002"
    },
    {
        "word": "ακυρώνω",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "☣️",
        "subtext": "ακυρώνω έναν ισχυρισμό / ακυρώνω ένα επιχείρημα / νομικά ακυρωμένο",
        "form": "verb",
        "definitions": [
            {
                "text": "Καθιστώ κάτι ανίσχυρο ή ακυρώνω την αποτελεσματικότητά του (vitiate).",
                "examples": [
                    "Το μεθοδολογικό ελάττωμα ακυρώνει τα κεντρικά συμπεράσματα της μελέτης."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "ακυρωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_academic_001"
    },
    {
        "word": "αμφισβητώ",
        "level": "proficiency",
        "theme": "debate_logic",
        "emoji": "🗣️",
        "subtext": "δύσκολο να αμφισβητηθεί / κανείς δεν μπορεί να αρνηθεί / αμφισβητώ έναν ισχυρισμό",
        "form": "verb",
        "definitions": [
            {
                "text": "Αρνούμαι ή αντιλέγω σε κάτι (gainsay).",
                "examples": [
                    "Είναι δύσκολο να αμφισβητηθούν τα στοιχεία που παρουσιάστηκαν από την έρευνα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αμφισβητημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_logic_001"
    },
    {
        "word": "καταργώ",
        "level": "proficiency",
        "theme": "law_politics",
        "emoji": "📜",
        "subtext": "καταργώ μια συμφωνία / καταργώ μια συνθήκη / μονομερής κατάργηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Καταργώ ή ακυρώνω έναν νόμο ή μια επίσημη συμφωνία (abrogate).",
                "examples": [
                    "Η κυβέρνηση προσπάθησε να καταργήσει τη συνθήκη μονομερώς."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "καταργημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_politics_001"
    },
    {
        "word": "παραβαίνω",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚫",
        "subtext": "παραβαίνω έναν νόμο / παραβαίνω κανονισμούς / παραβαίνω μια συμφωνία",
        "form": "verb",
        "definitions": [
            {
                "text": "Ενεργώ αντίθετα με όσα ορίζει ένας νόμος ή κανόνας (contravene).",
                "examples": [
                    "Η απόφαση κρίθηκε ότι παραβαίνει το δίκαιο ανταγωνισμού της ΕΕ."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "παρέβην",
        "v3": "παραβεβημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_debate_002"
    },
    {
        "word": "υπάγω",
        "level": "proficiency",
        "theme": "logic_philosophy",
        "emoji": "📂",
        "subtext": "υπάγω υπό / υπάγεται σε / υπάγω σε μια κατηγορία",
        "form": "verb",
        "definitions": [
            {
                "text": "Περιλαμβάνω κάτι ως μέρος μιας ευρύτερης ομάδας ή κατηγορίας (subsume).",
                "examples": [
                    "Η θεωρία του υπάγει όλες τις προηγούμενες περιγραφές σε ένα ενιαίο πλαίσιο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "υπαγμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_logic_philosophy_001"
    },
    {
        "word": "αποδομώ",
        "level": "proficiency",
        "theme": "philosophy_literature",
        "emoji": "🧩",
        "subtext": "αποδομώ ένα επιχείρημα / αποδομώ ένα κείμενο / ντεριντιανή αποδόμηση",
        "form": "verb",
        "definitions": [
            {
                "text": "Αναλύω ένα κείμενο ή επιχείρημα για να εκθέσω τις εσωτερικές του αντιφάσεις και παραδοχές.",
                "examples": [
                    "Αποδόμησε την πολιτική για να αποκαλύψει την ιδεολογική της μεροληψία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αποδομημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_philosophy_literature_001"
    },
    {
        "word": "αποκλείω",
        "level": "proficiency",
        "theme": "law_debate",
        "emoji": "🚪",
        "subtext": "αποκλείω μια επιλογή / αποκλείω τη συζήτηση / αποκλείω την πιθανότητα",
        "form": "verb",
        "definitions": [
            {
                "text": "Εμποδίζω ή αποκλείω κάτι εκ των προτέρων (foreclose).",
                "examples": [
                    "Η διατύπωση της ερώτησης αποκλείει τις πιο ενδιαφέρουσες απαντήσεις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αποκλεισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_debate_003"
    },
    {
        "word": "διαλεκτικοποιώ",
        "level": "proficiency",
        "theme": "philosophy_academic",
        "emoji": "☯️",
        "subtext": "διαλεκτικοποιώ ένα δίπολο / διαλεκτική μέθοδος / θέση και αντίθεση",
        "form": "verb",
        "definitions": [
            {
                "text": "Αντιμετωπίζω κάτι διαλεκτικά, εξετάζοντας την αλληλεπίδραση αντίρροπων δυνάμεων.",
                "examples": [
                    "Διαλεκτικοποιεί την αντίθεση μεταξύ ελευθερίας και ασφάλειας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "διαλεκτικοποιημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_philosophy_academic_001"
    },
    {
        "word": "ηγεμονεύω",
        "level": "proficiency",
        "theme": "politics_sociology",
        "emoji": "👑",
        "subtext": "ηγεμονεύω στον λόγο / αντίσταση στην ηγεμονία",
        "form": "verb",
        "definitions": [
            {
                "text": "Ασκώ κυρίαρχη επιρροή σε ένα πεδίο ή λόγο (discourse).",
                "examples": [
                    "Ένα θεωρητικό πλαίσιο έχει καταλήξει να ηγεμονεύει σε ολόκληρο το πεδίο."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "ηγεμονευμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_politics_sociology_001"
    },
    {
        "word": "τονίζω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔊",
        "subtext": "τονίζω μια διαφορά / τονίζω το θετικό / τονίζεται από",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι πιο αισθητό ή προεξέχον.",
                "examples": [
                    "Η κρίση τόνισε τις υπάρχουσες ανισότητες σε όλο το εργατικό δυναμικό."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "τονισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_001"
    },
    {
        "word": "αποδέχομαι",
        "level": "proficiency",
        "theme": "debate_communication",
        "emoji": "🤝",
        "subtext": "αποδέχομαι σε / συγκατατίθεμαι σε / διστακτική συγκατάθεση",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποδέχομαι ή συμφωνώ με κάτι, συχνά σιωπηλά ή παθητικά (acquiesce).",
                "examples": [
                    "Αποδέχτηκε την απόφαση του διοικητικού συμβουλίου παρά τις έντονες επιφυλάξεις του."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "αποδεκτός",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_communication_002"
    },
    {
        "word": "ανακουφίζω",
        "level": "proficiency",
        "theme": "policy_general",
        "emoji": "🩹",
        "subtext": "ανακουφίζω τον πόνο / ανακουφίζω τη φτώχεια / ανακουφίζω την πίεση",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω ένα πρόβλημα ή σύμπτωμα λιγότερο σοβαρό.",
                "examples": [
                    "Η νέα πολιτική έκανε λίγα για να ανακουφίσει τη στεγαστική κρίση."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "ανακουφισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_policy_general_001"
    },
    {
        "word": "παρακάμπτω",
        "level": "proficiency",
        "theme": "debate_general",
        "emoji": "🏃",
        "subtext": "παρακάμπτω τους κανόνες / παρακάμπτω ένα πρόβλημα / παρακάμπτω ελέγχους",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποφεύγω επιδέξια μια δυσκολία ή ένα εμπόδιο.",
                "examples": [
                    "Βρήκε έναν νόμιμο τρόπο να παρακάμψει το γραφειοκρατικό εμπόδιο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "παρακαμφθείς",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_general_001"
    },
    {
        "word": "επιβεβαιώνω",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "✅",
        "subtext": "επιβεβαιώνω έναν ισχυρισμό / επιβεβαιώνω στοιχεία / επιβεβαιώνεται από",
        "form": "verb",
        "definitions": [
            {
                "text": "Επιβεβαιώνω ή υποστηρίζω μια θεωρία ή δήλωση με πρόσθετα στοιχεία (corroborate).",
                "examples": [
                    "Η μαρτυρία του μάρτυρα επιβεβαίωσε πλήρως τα έγγραφα στοιχεία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "επιβεβαιωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_academic_research_002"
    },
    {
        "word": "διαδίδω",
        "level": "proficiency",
        "theme": "academic_research",
        "emoji": "📢",
        "subtext": "διαδίδω πληροφορίες / διαδίδω ευρήματα / ευρέως διαδεδομένο",
        "form": "verb",
        "definitions": [
            {
                "text": "Διασκορπίζω πληροφορίες ή γνώσεις ευρέως.",
                "examples": [
                    "Τα ευρήματα διαδόθηκαν σε διεθνή ερευνητικά δίκτυα."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "διαδεδομένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_academic_research_003"
    },
    {
        "word": "συμπυκνώνω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💊",
        "subtext": "συμπυκνώνω μια ιδέα / συμπυκνώνω το πρόβλημα / συμπυκνώνει τέλεια",
        "form": "verb",
        "definitions": [
            {
                "text": "Εκφράζω τα ουσιώδη χαρακτηριστικά κάποιου πράγματος συνοπτικά (encapsulate).",
                "examples": [
                    "Η φράση συμπυκνώνει τέλεια το παράδοξο της σύγχρονης εργασίας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "συμπυκνωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_002"
    },
    {
        "word": "γεννώ",
        "level": "proficiency",
        "theme": "sociology_general",
        "emoji": "🌱",
        "subtext": "γεννώ εμπιστοσύνη / προκαλώ σύγκρουση / γεννώ δυσαρέσκεια",
        "form": "verb",
        "definitions": [
            {
                "text": "Προκαλώ ή δίνω γένεση σε ένα συναίσθημα, κατάσταση ή συνθήκη (engender).",
                "examples": [
                    "Η νέα πολιτική γέννησε σημαντική δυσαρέσκεια στο προσωπικό."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "γεννημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_sociology_general_001"
    },
    {
        "word": "επιδεινώνω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🔥",
        "subtext": "επιδεινώνω ένα πρόβλημα / επιδεινώνω τις εντάσεις / επιδεινώνω την ανισότητα",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω ένα πρόβλημα ή μια αρνητική κατάσταση ακόμα χειρότερη.",
                "examples": [
                    "Η οικονομική ύφεση επιδείνωσε τις υπάρχουσες κοινωνικές ανισότητες."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "επιδεινωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_003"
    },
    {
        "word": "εικονογραφώ",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "📖",
        "subtext": "εικονογραφεί κάτι / αποτελεί παράδειγμα του προβλήματος / εικονογραφεί σαφώς",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποτελώ τυπικό παράδειγμα κάποιου πράγματος (exemplify).",
                "examples": [
                    "Η καριέρα της εικονογραφεί τις προκλήσεις που αντιμετωπίζουν οι γυναίκες σε ανώτερους ρόλους."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "εικονογραφημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_004"
    },
    {
        "word": "παρεμποδίζω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚧",
        "subtext": "παρεμποδίζω την πρόοδο / παρεμποδίζω την ανάπτυξη / εμποδίζω κάποιον από το να",
        "form": "verb",
        "definitions": [
            {
                "text": "Δυσκολεύω ή καθυστερώ την πρόοδο κάποιου πράγματος (impede).",
                "examples": [
                    "Η υπερβολική ρύθμιση μπορεί να παρεμποδίσει την καινοτομία σε νέους κλάδους."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "παρεμποδισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_005"
    },
    {
        "word": "μετριάζω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🛡️",
        "subtext": "μετριάζω τον κίνδυνο / μετριάζω τον αντίκτυπο / μετριάζω εναντίον",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω κάτι λιγότερο σοβαρό, σφοδρό ή επώδυνο (mitigate).",
                "examples": [
                    "Η καλή επικοινωνία μπορεί να βοηθήσει στον μετριασμό του αντικτύπου της αλλαγής."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "μετριασμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_006"
    },
    {
        "word": "υποχρεώνω",
        "level": "proficiency",
        "theme": "law_general",
        "emoji": "⚖️",
        "subtext": "είμαι υποχρεωμένος να / υποχρεώνω κάποιον να / αισθάνομαι υποχρεωμένος",
        "form": "verb",
        "definitions": [
            {
                "text": "Αναγκάζω κάποιον να κάνει κάτι, νομικά ή ηθικά.",
                "examples": [
                    "Ο νόμος υποχρεώνει όλους τους εργοδότες να παρέχουν ένα ασφαλές εργασιακό περιβάλλον."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "υποχρεωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_general_001"
    },
    {
        "word": "διαπερνώ",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "💧",
        "subtext": "διαπερνά τον οργανισμό / διαποτίζεται από / διάχυτος",
        "form": "verb",
        "definitions": [
            {
                "text": "Είμαι παρών σε όλα τα μέρη κάποιου πράγματος (pervade).",
                "examples": [
                    "Μια κουλτούρα υπερεργασίας διαπερνά τον τομέα των χρηματοοικονομικών υπηρεσιών."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "",
        "v3": "διαπερασμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_007"
    },
    {
        "word": "αποκλείω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🚫",
        "subtext": "αποκλείω κάποιον από / αποκλείω την πιθανότητα / δεν αποκλείω",
        "form": "verb",
        "definitions": [
            {
                "text": "Εμποδίζω κάτι από το να συμβεί ή κάποιον από το να συμμετάσχει (preclude).",
                "examples": [
                    "Η έλλειψη σχετικής εμπειρίας τον απέκλεισε από τη λίστα των υποψηφίων."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αποκλεισμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_008"
    },
    {
        "word": "συμβιβάζω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤝",
        "subtext": "συμβιβάζω ιδέες / δύσκολο να συμβιβαστούν / συμβιβάζω διαφορές",
        "form": "verb",
        "definitions": [
            {
                "text": "Βρίσκω έναν τρόπο ώστε δύο αντίθετες ιδέες ή καταστάσεις να συνυπάρχουν (reconcile).",
                "examples": [
                    "Βρήκε αδύνατο να συμβιβάσει τις αξίες της με την κουλτούρα της εταιρείας."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "συμβιβασμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_009"
    },
    {
        "word": "αντικαθιστώ",
        "level": "proficiency",
        "theme": "law_academic",
        "emoji": "🔄",
        "subtext": "αντικαθιστώ έναν νόμο / αντικαθιστώ προηγούμενες οδηγίες / αντικαθίσταται από",
        "form": "verb",
        "definitions": [
            {
                "text": "Παίρνω τη θέση κάποιου που χρησιμοποιούνταν προηγουμένως (supersede).",
                "examples": [
                    "Οι νέες οδηγίες θα αντικαταστήσουν όλες τις προηγούμενες εκδόσεις."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "αντικαταστημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_law_academic_002"
    },
    {
        "word": "θεμελιώνω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⚓",
        "subtext": "θεμελιώνω ένα επιχείρημα / θεμελιώνω την επιτυχία / θεμελιώνεται από",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμεύω ως βάση ή υποστήριξη για κάτι (underpin).",
                "examples": [
                    "Η ισχυρή εμπιστοσύνη θεμελιώνει κάθε επιτυχημένη μακροχρόνια συνεργασία."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "",
        "v3": "θεμελιωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_010"
    },
    {
        "word": "δικαιώνω",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🏆",
        "subtext": "δικαιώνω κάποιον / δικαιώνω μια απόφαση / αισθάνομαι δικαιωμένος",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποδεικνύω ότι κάποιος ή κάτι είναι σωστό ή δικαιολογημένο (vindicate).",
                "examples": [
                    "Τα αποτελέσματα δικαίωσαν την αμφιλεγόμενη απόφασή της δύο χρόνια αργότερα."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "δικαιωμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_011"
    },
    {
        "word": "εξαρτώμαι από",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "⛓️",
        "subtext": "εξαρτάται από μια απόφαση / εξαρτάται από έναν μόνο παράγοντα / όλα εξαρτώνται από",
        "form": "verb",
        "definitions": [
            {
                "text": "Καθορίζομαι ή εξαρτώμαι από κάτι (hinge on).",
                "examples": [
                    "Όλη η επιτυχία του έργου εξαρτάται από την έγκριση του πελάτη."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "εξαρτήθηκα από",
        "v3": "εξαρτημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_012"
    },
    {
        "word": "παλεύω με",
        "level": "proficiency",
        "theme": "general_academic",
        "emoji": "🤼",
        "subtext": "παλεύω με ένα πρόβλημα / παλεύω με τις επιπτώσεις / παλεύω με την πολυπλοκότητα",
        "form": "verb",
        "definitions": [
            {
                "text": "Προσπαθώ σκληρά να αντιμετωπίσω ή να κατανοήσω ένα δύσκολο πρόβλημα (grapple with).",
                "examples": [
                    "Οι υπεύθυνοι χάραξης πολιτικής παλεύουν ακόμα με τις επιπτώσεις της Τεχνητής Νοημοσύνης."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "πάλεψα με",
        "v3": "παλεμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_general_academic_013"
    },
    {
        "word": "αποσιωπώ",
        "level": "proficiency",
        "theme": "debate_academic",
        "emoji": "🙈",
        "subtext": "αποσιωπώ ένα πρόβλημα / αποσιωπώ τις λεπτομέρειες / δεν αποσιωπώ",
        "form": "verb",
        "definitions": [
            {
                "text": "Αποφεύγω να αναφέρω ή εξηγώ κάτι δυσάρεστο (gloss over).",
                "examples": [
                    "Η έκθεση αποσιωπά τις πιο αμφιλεγόμενες οικονομικές λεπτομέρειες."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "αποσιωπημένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_academic_003"
    },
    {
        "word": "συγκαλύπτω",
        "level": "proficiency",
        "theme": "debate_politics",
        "emoji": "🩹",
        "subtext": "συγκαλύπτω ένα πρόβλημα / συγκαλύπτω ρωγμές / συγκαλύπτω διαφορές",
        "form": "verb",
        "definitions": [
            {
                "text": "Προσπαθώ να κρύψω ή να αγνοήσω μια δύσκολη κατάσταση ώστε να φαίνεται καλύτερη (paper over).",
                "examples": [
                    "Η συμφωνία απλώς συγκάλυψε τις βαθιές δομικές διαιρέσεις."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "",
        "v3": "συγκαλυμμένος",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_debate_politics_001"
    },
    {
        "word": "αλλαγή παραδείγματος",
        "level": "proficiency",
        "theme": "academic_general",
        "emoji": "🔄",
        "subtext": "μια θεμελιώδης αλλαγή στην προσέγγιση",
        "form": "verb",
        "definitions": [
            {
                "text": "Μια θεμελιώδης αλλαγή στην προσέγγιση ή στις υποκείμενες παραδοχές.",
                "examples": [
                    "Η υιοθέτηση αυτής της νέας τεχνολογίας αντιπροσωπεύει μια αλλαγή παραδείγματος στον κλάδο."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "",
        "v3": "αλλαγμένος παράδειγμα",
        "group": "1st_conj",
        "auxiliary": "έχω",
        "lang": "el",
        "id": "el_proficiency_academic_general_001"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();
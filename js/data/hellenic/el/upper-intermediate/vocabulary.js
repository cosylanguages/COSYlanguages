(function() {
    const data = [
    {
        "word": "δικηγόρος",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "ο",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "δικηγόροι",
        "definitions": [
            {
                "text": "Ένα άτομο που δίνει συμβουλές για το νόμο και εκπροσωπεί ανθρώπους στο δικαστήριο.",
                "examples": [
                    "Πρέπει να μιλήσω με τον δικηγόρο μου."
                ]
            }
        ]
    },
    {
        "word": "φαρμακείο",
        "level": "upper-intermediate",
        "theme": "places_shops_A1",
        "article": "το",
        "emoji": "💊",
        "form": "noun",
        "plural": "φαρμακεία",
        "definitions": [
            {
                "text": "Ένα κατάστημα όπου μπορείτε να αγοράσετε φάρμακα.",
                "examples": [
                    "Πρέπει να πάω στο φαρμακείο."
                ]
            }
        ]
    },
    {
        "word": "ψυχολόγος",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "article": "ο",
        "emoji": "🧠",
        "form": "noun",
        "plural": "ψυχολόγοι",
        "definitions": [
            {
                "text": "Ειδικός που μελετά τη συμπεριφορά και την ψυχική κατάσταση.",
                "examples": [
                    "Ο ψυχολόγος βοηθά τους ασθενείς του."
                ]
            }
        ]
    },
    {
        "word": "λογοδοσία",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "η",
        "emoji": "📑",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["ευθύνη"],
        "definitions": [
            {
                "text": "Η υποχρέωση κάποιου να εξηγεί τις πράξεις του και να αναλαμβάνει την ευθύνη.",
                "examples": [
                    "Υπάρχει λίγη λογοδοσία σε αυτόν τον οργανισμό."
                ]
            }
        ]
    },
    {
        "word": "κίνητρο",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "το",
        "emoji": "🥕",
        "form": "noun",
        "plural": "κίνητρα",
        "subtext": "οικονομικό κίνητρο",
        "definitions": [
            {
                "text": "Κάτι που παρακινεί ένα άτομο να κάνει μια συγκεκριμένη ενέργεια.",
                "examples": [
                    "Τα οικονομικά κίνητρα μπορούν να βελτιώσουν την παραγωγικότητα."
                ]
            }
        ]
    },
    {
        "word": "αυτονομία",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "article": "η",
        "emoji": "🔓",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["ανεξαρτησία"],
        "opposite": "εξάρτηση",
        "definitions": [
            {
                "text": "Το δικαίωμα ή η ικανότητα να ενεργεί κανείς ανεξάρτητα.",
                "examples": [
                    "Οι εργαζόμενοι αποδίδουν καλύτερα όταν έχουν αυτονομία."
                ]
            }
        ]
    },
    {
        "word": "επισφάλεια",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "η",
        "emoji": "🧗",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["αβεβαιότητα στην εργασία"],
        "opposite": "σταθερότητα",
        "definitions": [
            {
                "text": "Μια ανασφαλής και αβέβαιη κατάσταση απασχόλησης ή συνθηκών διαβίωσης.",
                "examples": [
                    "Η οικονομία της πλατφόρμας αύξησε την εργασιακή επισφάλεια."
                ]
            }
        ]
    },
    {
        "word": "μισθολογικό χάσμα",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "article": "το",
        "emoji": "⚖️📉",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["διαφορά αμοιβών"],
        "definitions": [
            {
                "text": "Μια διαφορά στις μέσες αποδοχές μεταξύ ομάδων, ειδικά μεταξύ ανδρών και γυναικών.",
                "examples": [
                    "Το μισθολογικό χάσμα μεταξύ των φύλων παραμένει σημαντικό."
                ]
            }
        ]
    },
    {
        "word": "πακέτο απόλυσης",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "article": "το",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "πακέτα απόλυσης",
        "subtext": "",
        "synonyms": ["αποζημίωση απόλυσης"],
        "definitions": [
            {
                "text": "Τα χρήματα και τα οφέλη που δίνονται όταν κάποιος χάνει τη δουλειά του.",
                "examples": [
                    "Έλαβε ένα γενναιόδωρο πακέτο απόλυσης."
                ]
            }
        ]
    },
    {
        "word": "επιχειρηματικότητα",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "η",
        "emoji": "💡",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Η δραστηριότητα της δημιουργίας και λειτουργίας μιας επιχείρησης.",
                "examples": [
                    "Η επιχειρηματικότητα απαιτεί ανάληψη κινδύνου και δημιουργικότητα."
                ]
            }
        ]
    },
    {
        "word": "παραγωγικότητα",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "η",
        "emoji": "⚡",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["αποδοτικότητα"],
        "definitions": [
            {
                "text": "Ο ρυθμός με τον οποίο παράγονται αγαθά ή ολοκληρώνεται η εργασία.",
                "examples": [
                    "Η τηλεργασία μπορεί να αυξήσει την παραγωγικότητα για κάποιους."
                ]
            }
        ]
    },
    {
        "word": "εξωτερική ανάθεση",
        "level": "upper-intermediate",
        "theme": "globalisation_trade_B2",
        "article": "η",
        "emoji": "🌐",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["outsourcing"],
        "definitions": [
            {
                "text": "Η πρόσληψη μιας εξωτερικής εταιρείας για εργασίες που γίνονταν εσωτερικά.",
                "examples": [
                    "Κάνουν εξωτερική ανάθεση της εξυπηρέτησης πελατών για μείωση κόστους."
                ]
            }
        ]
    },
    {
        "word": "αυτοματοποίηση",
        "level": "upper-intermediate",
        "theme": "applied_sciences_engineering_B2",
        "article": "η",
        "emoji": "🤖",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Η χρήση μηχανών ή υπολογιστών για εργασίες που γίνονταν από ανθρώπους.",
                "examples": [
                    "Η αυτοματοποίηση αλλάζει σημαντικά την αγορά εργασίας."
                ]
            }
        ]
    },
    {
        "word": "εξευγενισμός",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "article": "ο",
        "emoji": "🏘️📈",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["gentrification"],
        "definitions": [
            {
                "text": "Η διαδικασία αναβάθμισης μιας περιοχής που οδηγεί στον εκτοπισμό φτωχότερων κατοίκων.",
                "examples": [
                    "Ο εξευγενισμός άλλαξε τον χαρακτήρα της γειτονιάς."
                ]
            }
        ]
    },
    {
        "word": "προσιτή στέγαση",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "article": "η",
        "emoji": "🏠💰",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["κοινωνική κατοικία"],
        "definitions": [
            {
                "text": "Στέγαση που είναι αρκετά φθηνή για άτομα με χαμηλά εισοδήματα.",
                "examples": [
                    "Η πόλη χρειάζεται περισσότερη προσιτή στέγαση."
                ]
            }
        ]
    },
    {
        "word": "αστική εξάπλωση",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "article": "η",
        "emoji": "🏙️↔️",
        "form": "noun phrase",
        "plural": null,
        "definitions": [
            {
                "text": "Η ανεξέλεγκτη εξάπλωση των πόλεων στις γύρω περιοχές.",
                "examples": [
                    "Η αστική εξάπλωση αυξάνει την εξάρτηση από το αυτοκίνητο."
                ]
            }
        ]
    },
    {
        "word": "υποδομή",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "η",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "υποδομές",
        "definitions": [
            {
                "text": "Τα βασικά φυσικά συστήματα μιας χώρας, όπως δρόμοι και δίκτυα.",
                "examples": [
                    "Η υποδομή της πόλης χρειάζεται επενδύσεις."
                ]
            }
        ]
    },
    {
        "word": "κράτος πρόνοιας",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "το",
        "emoji": "🛡️🏛️",
        "form": "noun phrase",
        "plural": null,
        "definitions": [
            {
                "text": "Ένα σύστημα στο οποίο η κυβέρνηση παρέχει κοινωνική προστασία στους πολίτες.",
                "examples": [
                    "Το κράτος πρόνοιας παρέχει υγειονομική περίθαλψη και συντάξεις."
                ]
            }
        ]
    },
    {
        "word": "πόλωση",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "η",
        "emoji": "↔️❌",
        "form": "noun",
        "plural": null,
        "subtext": "πολιτική πόλωση",
        "definitions": [
            {
                "text": "Ο διαχωρισμός των ανθρώπων σε αντίπαλες ομάδες με πολύ διαφορετικές απόψεις.",
                "examples": [
                    "Τα μέσα κοινωνικής δικτύωσης αύξησαν την πολιτική πόλωση."
                ]
            }
        ]
    },
    {
        "word": "λόγος",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "article": "ο",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "λόγοι",
        "subtext": "",
        "synonyms": ["διάλογος", "ομιλία"],
        "definitions": [
            {
                "text": "Γραπτή ή προφορική επικοινωνία για ένα συγκεκριμένο θέμα.",
                "examples": [
                    "Ο δημόσιος λόγος γύρω από τη μετανάστευση είναι έντονος."
                ]
            }
        ]
    },
    {
        "word": "έλεγχος",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "ο",
        "emoji": "🔍",
        "form": "noun",
        "plural": "έλεγχοι",
        "subtext": "εξονυχιστικός έλεγχος",
        "definitions": [
            {
                "text": "Στενή και προσεκτική εξέταση κάποιου ή κάποιου πράγματος.",
                "examples": [
                    "Η απόφαση της κυβέρνησης βρίσκεται υπό έλεγχο."
                ]
            }
        ]
    },
    {
        "word": "συναίνεση",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "article": "η",
        "emoji": "🤝",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["γενική συμφωνία"],
        "definitions": [
            {
                "text": "Γενική συμφωνία μεταξύ μιας ομάδας ανθρώπων.",
                "examples": [
                    "Υπάρχει μια αυξανόμενη συναίνεση για τη δράση για το κλίμα."
                ]
            }
        ]
    },
    {
        "word": "νομοθεσία",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "η",
        "emoji": "📜",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Νόμοι που θεσπίζονται από μια κυβέρνηση.",
                "examples": [
                    "Νέα νομοθεσία για το απόρρητο των δεδομένων τέθηκε σε ισχύ."
                ]
            }
        ]
    },
    {
        "word": "προκατάληψη",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "article": "η",
        "emoji": "⚖️❌",
        "form": "noun",
        "plural": "προκαταλήψεις",
        "subtext": "",
        "synonyms": ["μεροληψία"],
        "opposite": "αμεροληψία",
        "definitions": [
            {
                "text": "Μια άδικη τάση να ευνοεί ή να αντιτίθεται κανείς σε κάποιον ή κάτι.",
                "examples": [
                    "Η ασυνείδητη προκατάληψη μπορεί να επηρεάσει τις αποφάσεις πρόσληψης."
                ]
            }
        ]
    },
    {
        "word": "παχυσαρκία",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "article": "η",
        "emoji": "⚖️⬆️",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Η κατάσταση του να είναι κανείς υπερβολικά υπέρβαρος σε βαθμό που βλάπτει την υγεία.",
                "examples": [
                    "Τα ποσοστά παχυσαρκίας έχουν αυξηθεί απότομα τις τελευταίες δεκαετίες."
                ]
            }
        ]
    },
    {
        "word": "προσδόκιμο ζωής",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "article": "το",
        "emoji": "⏳👴",
        "form": "noun phrase",
        "plural": null,
        "definitions": [
            {
                "text": "Ο μέσος αριθμός ετών που αναμένεται να ζήσει ένα άτομο.",
                "examples": [
                    "Το προσδόκιμο ζωής έχει αυξηθεί στις περισσότερες χώρες."
                ]
            }
        ]
    },
    {
        "word": "δικαιοσύνη",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "η",
        "emoji": "⚖️",
        "form": "noun",
        "plural": null,
        "subtext": "κοινωνική δικαιοσύνη",
        "opposite": "αδικία",
        "definitions": [
            {
                "text": "Δίκαιη μεταχείριση και η ιδιότητα του να είσαι δίκαιος.",
                "examples": [
                    "Το σύστημα δικαιοσύνης πρέπει να προστατεύει όλους τους πολίτες."
                ]
            }
        ]
    },
    {
        "word": "επανένταξη",
        "level": "upper-intermediate",
        "theme": "crime_punishment_B2",
        "article": "η",
        "emoji": "🔄🏢",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["αποκατάσταση"],
        "definitions": [
            {
                "text": "Η διαδικασία παροχής βοήθειας σε κάποιον να επιστρέψει σε μια κανονική ζωή μετά από ένα έγκλημα ή ασθένεια.",
                "examples": [
                    "Η φυλακή πρέπει να επικεντρώνεται στην επανένταξη."
                ]
            }
        ]
    },
    {
        "word": "διαφάνεια",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "η",
        "emoji": "🪟",
        "form": "noun",
        "plural": null,
        "opposite": "αδιαφάνεια",
        "definitions": [
            {
                "text": "Το να είναι κανείς ανοιχτός και ειλικρινής σχετικά με τις ενέργειες και τις αποφάσεις.",
                "examples": [
                    "Το κοινό απαιτεί μεγαλύτερη διαφάνεια από τους πολιτικούς."
                ]
            }
        ]
    },
    {
        "word": "αλγόριθμος",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "ο",
        "emoji": "💻",
        "form": "noun",
        "plural": "αλγόριθμοι",
        "definitions": [
            {
                "text": "Ένα σύνολο κανόνων που ακολουθεί ένας υπολογιστής για να λύσει ένα πρόβλημα.",
                "examples": [
                    "Οι αλγόριθμοι των μέσων κοινωνικής δικτύωσης καθορίζουν τι βλέπετε."
                ]
            }
        ]
    },
    {
        "word": "απόρρητο δεδομένων",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "το",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["προστασία δεδομένων"],
        "definitions": [
            {
                "text": "Το δικαίωμα ελέγχου του τρόπου συλλογής και χρήσης των προσωπικών πληροφοριών.",
                "examples": [
                    "Οι νόμοι για το απόρρητο των δεδομένων γίνονται αυστηρότεροι."
                ]
            }
        ]
    },
    {
        "word": "παραπληροφόρηση",
        "level": "upper-intermediate",
        "theme": "media_misinformation_B2",
        "article": "η",
        "emoji": "🤥",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["ψευδείς ειδήσεις"],
        "definitions": [
            {
                "text": "Ψευδείς ή ανακριβείς πληροφορίες που διαδίδονται ευρέως.",
                "examples": [
                    "Τα μέσα κοινωνικής δικτύωσης μπορούν να διαδώσουν γρήγορα την παραπληροφόρηση."
                ]
            }
        ]
    },
    {
        "word": "επιτήρηση",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "η",
        "emoji": "📹",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["παρακολούθηση"],
        "definitions": [
            {
                "text": "Στενή παρακολούθηση ενός ατόμου ή μιας ομάδας από τις αρχές.",
                "examples": [
                    "Το CCTV είναι μια μορφή αστικής επιτήρησης."
                ]
            }
        ]
    },
    {
        "word": "ενώ",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "⚖️",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Σε αντίθεση με το γεγονός ότι. Αντιθέτως.",
                "examples": [
                    "Οι πόλεις είναι ακριβές, ενώ οι μικρές πόλεις είναι προσιτές."
                ]
            }
        ]
    },
    {
        "word": "παρόλα αυτά",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🏃‍♂️",
        "form": "adverb",
        "subtext": "εντούτοις, παρόλα αυτά",
        "definitions": [
            {
                "text": "Παρά το γεγονός αυτό. Μολαταύτα.",
                "examples": [
                    "Είναι ένα δύσκολο έργο. Παρόλα αυτά, πρέπει να προσπαθήσουμε."
                ]
            }
        ]
    },
    {
        "word": "σε ποιο βαθμό",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Χρησιμοποιείται για να ρωτήσει ή να συζητήσει πόσο ή μέχρι πού ισχύει κάτι.",
                "examples": [
                    "Σε ποιο βαθμό η εκπαίδευση καθορίζει την επιτυχία;"
                ]
            }
        ]
    },
    {
        "word": "αντίθετα",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🌓",
        "form": "phrase",
        "definitions": [
            {
                "text": "Χρησιμοποιείται για να δείξει μια διαφορά μεταξύ δύο πραγμάτων.",
                "examples": [
                    "Η Σουηδία έχει μεγάλη άδεια πατρότητας. Αντίθετα, οι ΗΠΑ έχουν πολύ λίγη."
                ]
            }
        ]
    },
    {
        "word": "τεχνητή νοημοσύνη",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "η",
        "emoji": "🤖",
        "form": "noun phrase",
        "plural": null,
        "definitions": [
            {
                "text": "Η ικανότητα μιας μηχανής να αναπαράγει τις γνωστικές λειτουργίες ενός ανθρώπου.",
                "examples": [
                    "Η τεχνητή νοημοσύνη αλλάζει τον κόσμο."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

// TODO: verify level classification
(function() {
    const lang = "el";
    const data = [
    {
        "word": "απορία",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤔",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Μια κατάσταση αμηχανίας ή δυσκολίας που προκύπτει από αντιφάσεις σε ένα επιχείρημα.",
                "examples": [
                    "Ο διάλογος καταλήγει σε απορία, χωρίς να επιτευχθεί ικανοποιητική απάντηση."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_001",
        "transcription": ""
    },
    {
        "word": "τελεολογία",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎯",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Η φιλοσοφική μελέτη του σκοπού ή της στοχοθεσίας στη φύση ή την ιστορία.",
                "examples": [
                    "Το επιχείρημά του στηρίζεται σε μια τελεολογική άποψη της ανθρώπινης προόδου."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_002",
        "transcription": ""
    },
    {
        "word": "οντολογία",
        "level": "proficiency",
        "theme": "language",
        "emoji": "👻",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ο κλάδος της φιλοσοφίας που ασχολείται με τη φύση του είναι ή της ύπαρξης.",
                "examples": [
                    "Οι οντολογικές του δεσμεύσεις διαμορφώνουν ολόκληρο το επιχείρημά του."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_003",
        "transcription": ""
    },
    {
        "word": "πραγμοποίηση",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Η διαδικασία της αντιμετώπισης κάτι αφηρημένου σαν να ήταν ένα συγκεκριμένο, πραγματικό πράγμα.",
                "examples": [
                    "Η πραγμοποίηση των δυνάμεων της αγοράς καλύπτει τις ανθρώπινες αποφάσεις πίσω από αυτές."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_004",
        "transcription": ""
    },
    {
        "word": "διαλεκτική",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Μια μέθοδος επιχειρηματολογίας που περιλαμβάνει αντίφαση και επίλυση.",
                "examples": [
                    "Η διαλεκτική μεταξύ ελευθερίας και ασφάλειας ορίζει τη φιλελεύθερη σκέψη."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_005",
        "transcription": ""
    },
    {
        "word": "ευρετική",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Μια προσέγγιση επίλυσης προβλημάτων που βασίζεται στην εμπειρία και όχι σε εγγυημένη απόδειξη.",
                "examples": [
                    "Το 'ακολούθησε το χρήμα' είναι μια χρήσιμη ευρετική στην ερευνητική δημοσιογραφία."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_001",
        "transcription": ""
    },
    {
        "word": "αποφαινία",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🕸️",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Η τάση να αντιλαμβανόμαστε σημαντικές συνδέσεις μεταξύ άσχετων πραγμάτων.",
                "examples": [
                    "Η συνωμοσιολογική σκέψη τροφοδοτείται από την αποφαινία."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_002",
        "transcription": ""
    },
    {
        "word": "κινούμενη νόηση",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧠",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Η επίδραση των επιθυμιών και των συναισθημάτων στον συλλογισμό και στον σχηματισμό πεποιθήσεων.",
                "examples": [
                    "Η κινούμενη νόηση εξηγεί γιατί οι άνθρωποι αντιστέκονται σε ανεπιθύμητα στοιχεία."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_003",
        "transcription": ""
    },
    {
        "word": "προδραστική αρχή",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🚀",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Η άποψη ότι οι κίνδυνοι της αδράνειας πρέπει να σταθμίζονται έναντι των κινδύνων της δράσης.",
                "examples": [
                    "Οι τρανσουμανιστές επικαλούνται συχνά την προδραστική αρχή."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_001",
        "transcription": ""
    },
    {
        "word": "αρχή της προφύλαξης",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Η άποψη ότι ενέργειες με άγνωστες αλλά δυνητικά επιβλαβείς συνέπειες θα πρέπει να αποφεύγονται.",
                "examples": [
                    "Το περιβαλλοντικό δίκαιο εφαρμόζει συχνά την αρχή της προφύλαξης."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_002",
        "transcription": ""
    },
    {
        "word": "φιλελεύθερη ουδετερότητα",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Η φιλελεύθερη αρχή ότι το κράτος δεν πρέπει να ευνοεί κανένα συγκεκριμένο όραμα της καλής ζωής.",
                "examples": [
                    "Οι κριτικοί υποστηρίζουν ότι η φιλελεύθερη ουδετερότητα είναι η ίδια μια ουσιαστική ηθική θέση."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_003",
        "transcription": ""
    },
    {
        "word": "προγεννητισμός",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Μια πολιτική ή ιδεολογία που ενθαρρύνει τους ανθρώπους να κάνουν περισσότερα παιδιά.",
                "examples": [
                    "Επέκρινε τις προγεννητικές παραδοχές που ενσωματώνονται στην οικογενειακή φορολογική πολιτική."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_social_004",
        "transcription": ""
    },
    {
        "word": "μετάθεση",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Η ανακατεύθυνση μιας πρωτόγονης ενόρμησης σε μια κοινωνικά αποδεκτή δραστηριότητα.",
                "examples": [
                    "Η τέχνη θεωρείται εδώ και καιρό ως μια μορφή μετάθεσης."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_004",
        "transcription": ""
    },
    {
        "word": "απόλαυση",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔥",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Στην ψυχαναλυτική θεωρία, μια υπερβολική ή παραβατική μορφή απόλαυσης.",
                "examples": [
                    "Ο Ζίζεκ χρησιμοποιεί την έννοια της απόλαυσης (jouissance) για να εξηγήσει την ιδεολογική προσκόλληση."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_005",
        "transcription": ""
    },
    {
        "word": "θάνατος",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "💀",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Στη φροϋδική θεωρία, η ενόρμηση του θανάτου.",
                "examples": [
                    "Το μυθιστόρημα εξερευνά την ένταση μεταξύ έρωτα και θανάτου."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_psychology_006",
        "transcription": ""
    },
    {
        "word": "βάθος",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "📉",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Μια απότομη, απογοητευτική μετάβαση από το υψηλό στο τετριμμένο.",
                "examples": [
                    "Η ομιλία κατέληξε σε βάθος (bathos) την κρίσιμη στιγμή."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_art_culture_001",
        "transcription": ""
    },
    {
        "word": "απόφαση",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ένα ρητορικό σχήμα για την προσέλκυση της προσοχής σε κάτι με τον ισχυρισμό ότι δεν θα αναφερθεί.",
                "examples": [
                    "'Δεν θα αναφέρω το ποινικό του μητρώο' είναι μια κλασική απόφαση (apophasis)."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "παράλειψη",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙊",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ένας άλλος όρος για την απόφαση.",
                "examples": [
                    "Η πολιτική ρητορική βασίζεται συχνά στην παράλειψη (paralepsis)."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_007",
        "transcription": ""
    },
    {
        "word": "οριακός χώρος",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Μια μεταβατική φάση ή στιγμή κατωφλίου μεταξύ δύο καταστάσεων ύπαρξης.",
                "examples": [
                    "Η μέση ηλικία μπορεί να γίνει κατανοητή ως ένας οριακός χώρος."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_008",
        "transcription": ""
    },
    {
        "word": "χιασμός",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ένα ρητορικό σχήμα στο οποίο το δεύτερο μέρος είναι μια αναστροφή του πρώτου.",
                "examples": [
                    "Το 'Μην ρωτάτε τι μπορεί να κάνει η χώρα σας για εσάς' χρησιμοποιεί χιασμό."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_009",
        "transcription": ""
    },
    {
        "word": "σιμπολέθ",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ένα έθιμο, φράση ή πεποίθηση που χρησιμοποιείται για την αναγνώριση μελών μιας συγκεκριμένης ομάδας.",
                "examples": [
                    "Το 'εργαζόμενες οικογένειες' έχει γίνει ένα πολιτικό σιμπολέθ."
                ]
            }
        ],
        "lang": "el",
        "id": "el_proficiency_language_010",
        "transcription": ""
    }
];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
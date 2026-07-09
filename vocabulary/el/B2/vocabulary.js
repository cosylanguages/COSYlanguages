(function() {
    const data = [
    {
        "id": "el_upper_intermediate_places_shops_001",
        "lang": "el",
        "word": "φαρμακείο",
        "level": "upper_intermediate",
        "theme": "places_shops",
        "article": "το",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "plural": "φαρμακεία",
        "definitions": [
            {
                "text": "Ένα κατάστημα όπου μπορείτε να αγοράσετε φάρμακα.",
                "examples": [
                    "Πρέπει να πάω στο φαρμακείο."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_health_society_001",
        "lang": "el",
        "word": "ψυχολόγος",
        "level": "upper_intermediate",
        "theme": "health_society",
        "article": "ο",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "plural": "ψυχολόγοι",
        "definitions": [
            {
                "text": "Ειδικός που μελετά τη συμπεριφορά και την ψυχική κατάσταση.",
                "examples": [
                    "Ο ψυχολόγος βοηθά τους ασθενείς του."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_029",
        "lang": "el",
        "word": "λογοδοσία",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "η",
        "emoji": "📑",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "ευθύνη"
        ],
        "definitions": [
            {
                "text": "Η υποχρέωση κάποιου να εξηγεί τις πράξεις του και να αναλαμβάνει την ευθύνη.",
                "examples": [
                    "Υπάρχει λίγη λογοδοσία σε αυτόν τον οργανισμό."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_economy_labour_market_005",
        "lang": "el",
        "word": "κίνητρο",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "το",
        "emoji": "🥕",
        "form": "noun",
        "classification": "regular",
        "plural": "κίνητρα",
        "subtext": "οικονομικό κίνητρο",
        "definitions": [
            {
                "text": "Κάτι που παρακινεί ένα άτομο να κάνει μια συγκεκριμένη ενέργεια.",
                "examples": [
                    "Τα οικονομικά κίνητρα μπορούν να βελτιώσουν την παραγωγικότητα."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_employment_law_rights_001",
        "lang": "el",
        "word": "αυτονομία",
        "level": "upper_intermediate",
        "theme": "employment_law_rights",
        "article": "η",
        "emoji": "🔓",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "ανεξαρτησία"
        ],
        "antonyms": [
            "εξάρτηση"
        ],
        "definitions": [
            {
                "text": "Το δικαίωμα ή η ικανότητα να ενεργεί κανείς ανεξάρτητα.",
                "examples": [
                    "Οι εργαζόμενοι αποδίδουν καλύτερα όταν έχουν αυτονομία."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_economy_labour_market_006",
        "lang": "el",
        "word": "επισφάλεια",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "η",
        "emoji": "🧗",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "αβεβαιότητα στην εργασία"
        ],
        "antonyms": [
            "σταθερότητα"
        ],
        "definitions": [
            {
                "text": "Μια ανασφαλής και αβέβαιη κατάσταση απασχόλησης ή συνθηκών διαβίωσης.",
                "examples": [
                    "Η οικονομία της πλατφόρμας αύξησε την εργασιακή επισφάλεια."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_gender_equality_001",
        "lang": "el",
        "word": "μισθολογικό χάσμα",
        "level": "upper_intermediate",
        "theme": "gender_equality",
        "article": "το",
        "emoji": "⚖️📉",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "διαφορά αμοιβών"
        ],
        "definitions": [
            {
                "text": "Μια διαφορά στις μέσες αποδοχές μεταξύ ομάδων, ειδικά μεταξύ ανδρών και γυναικών.",
                "examples": [
                    "Το μισθολογικό χάσμα μεταξύ των φύλων παραμένει σημαντικό."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_employment_law_rights_002",
        "lang": "el",
        "word": "πακέτο απόλυσης",
        "level": "upper_intermediate",
        "theme": "employment_law_rights",
        "article": "το",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "πακέτα απόλυσης",
        "subtext": "",
        "synonyms": [
            "αποζημίωση απόλυσης"
        ],
        "definitions": [
            {
                "text": "Τα χρήματα και τα οφέλη που δίνονται όταν κάποιος χάνει τη δουλειά του.",
                "examples": [
                    "Έλαβε ένα γενναιόδωρο πακέτο απόλυσης."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_economy_labour_market_007",
        "lang": "el",
        "word": "επιχειρηματικότητα",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "η",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "definitions": [
            {
                "text": "Η δραστηριότητα της δημιουργίας και λειτουργίας μιας επιχείρησης.",
                "examples": [
                    "Η επιχειρηματικότητα απαιτεί ανάληψη κινδύνου και δημιουργικότητα."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_economy_labour_market_008",
        "lang": "el",
        "word": "παραγωγικότητα",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "η",
        "emoji": "⚡",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "αποδοτικότητα"
        ],
        "definitions": [
            {
                "text": "Ο ρυθμός με τον οποίο παράγονται αγαθά ή ολοκληρώνεται η εργασία.",
                "examples": [
                    "Η τηλεργασία μπορεί να αυξήσει την παραγωγικότητα για κάποιους."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_globalisation_trade_003",
        "lang": "el",
        "word": "εξωτερική ανάθεση",
        "level": "upper_intermediate",
        "theme": "globalisation_trade",
        "article": "η",
        "emoji": "🌐",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "outsourcing"
        ],
        "definitions": [
            {
                "text": "Η πρόσληψη μιας εξωτερικής εταιρείας για εργασίες που γίνονταν εσωτερικά.",
                "examples": [
                    "Κάνουν εξωτερική ανάθεση της εξυπηρέτησης πελατών για μείωση κόστους."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_applied_sciences_engineering_001",
        "lang": "el",
        "word": "αυτοματοποίηση",
        "level": "upper_intermediate",
        "theme": "applied_sciences_engineering",
        "article": "η",
        "emoji": "🤖",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "definitions": [
            {
                "text": "Η χρήση μηχανών ή υπολογιστών για εργασίες που γίνονταν από ανθρώπους.",
                "examples": [
                    "Η αυτοματοποίηση αλλάζει σημαντικά την αγορά εργασίας."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_housing_society_001",
        "lang": "el",
        "word": "εξευγενισμός",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "article": "ο",
        "emoji": "🏘️📈",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "gentrification"
        ],
        "definitions": [
            {
                "text": "Η διαδικασία αναβάθμισης μιας περιοχής που οδηγεί στον εκτοπισμό φτωχότερων κατοίκων.",
                "examples": [
                    "Ο εξευγενισμός άλλαξε τον χαρακτήρα της γειτονιάς."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_housing_society_002",
        "lang": "el",
        "word": "προσιτή στέγαση",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "article": "η",
        "emoji": "🏠💰",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "κοινωνική κατοικία"
        ],
        "definitions": [
            {
                "text": "Στέγαση που είναι αρκετά φθηνή για άτομα με χαμηλά εισοδήματα.",
                "examples": [
                    "Η πόλη χρειάζεται περισσότερη προσιτή στέγαση."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_housing_society_003",
        "lang": "el",
        "word": "αστική εξάπλωση",
        "level": "upper_intermediate",
        "theme": "housing_society",
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
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_030",
        "lang": "el",
        "word": "υποδομή",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "η",
        "emoji": "🏗️",
        "form": "noun",
        "classification": "regular",
        "plural": "υποδομές",
        "definitions": [
            {
                "text": "Τα βασικά φυσικά συστήματα μιας χώρας, όπως δρόμοι και δίκτυα.",
                "examples": [
                    "Η υποδομή της πόλης χρειάζεται επενδύσεις."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_031",
        "lang": "el",
        "word": "κράτος πρόνοιας",
        "level": "upper_intermediate",
        "theme": "politics_governance",
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
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_032",
        "lang": "el",
        "word": "πόλωση",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "η",
        "emoji": "↔️❌",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "πολιτική πόλωση",
        "definitions": [
            {
                "text": "Ο διαχωρισμός των ανθρώπων σε αντίπαλες ομάδες με πολύ διαφορετικές απόψεις.",
                "examples": [
                    "Τα μέσα κοινωνικής δικτύωσης αύξησαν την πολιτική πόλωση."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_formal_debate_vocab_002",
        "lang": "el",
        "word": "λόγος",
        "level": "upper_intermediate",
        "theme": "language",
        "article": "ο",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "plural": "λόγοι",
        "subtext": "",
        "synonyms": [
            "διάλογος",
            "ομιλία"
        ],
        "definitions": [
            {
                "text": "Γραπτή ή προφορική επικοινωνία για ένα συγκεκριμένο θέμα.",
                "examples": [
                    "Ο δημόσιος λόγος γύρω από τη μετανάστευση είναι έντονος."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_033",
        "lang": "el",
        "word": "έλεγχος",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "ο",
        "emoji": "🔍",
        "form": "noun",
        "classification": "regular",
        "plural": "έλεγχοι",
        "subtext": "εξονυχιστικός έλεγχος",
        "definitions": [
            {
                "text": "Στενή και προσεκτική εξέταση κάποιου ή κάποιου πράγματος.",
                "examples": [
                    "Η απόφαση της κυβέρνησης βρίσκεται υπό έλεγχο."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_formal_debate_vocab_003",
        "lang": "el",
        "word": "συναίνεση",
        "level": "upper_intermediate",
        "theme": "language",
        "article": "η",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "γενική συμφωνία"
        ],
        "definitions": [
            {
                "text": "Γενική συμφωνία μεταξύ μιας ομάδας ανθρώπων.",
                "examples": [
                    "Υπάρχει μια αυξανόμενη συναίνεση για τη δράση για το κλίμα."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_034",
        "lang": "el",
        "word": "νομοθεσία",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "η",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "definitions": [
            {
                "text": "Νόμοι που θεσπίζονται από μια κυβέρνηση.",
                "examples": [
                    "Νέα νομοθεσία για το απόρρητο των δεδομένων τέθηκε σε ισχύ."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_formal_debate_vocab_004",
        "lang": "el",
        "word": "προκατάληψη",
        "level": "upper_intermediate",
        "theme": "language",
        "article": "η",
        "emoji": "⚖️❌",
        "form": "noun",
        "classification": "regular",
        "plural": "προκαταλήψεις",
        "subtext": "",
        "synonyms": [
            "μεροληψία"
        ],
        "antonyms": [
            "αμεροληψία"
        ],
        "definitions": [
            {
                "text": "Μια άδικη τάση να ευνοεί ή να αντιτίθεται κανείς σε κάποιον ή κάτι.",
                "examples": [
                    "Η ασυνείδητη προκατάληψη μπορεί να επηρεάσει τις αποφάσεις πρόσληψης."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_health_society_002",
        "lang": "el",
        "word": "παχυσαρκία",
        "level": "upper_intermediate",
        "theme": "health_society",
        "article": "η",
        "emoji": "⚖️⬆️",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "definitions": [
            {
                "text": "Η κατάσταση του να είναι κανείς υπερβολικά υπέρβαρος σε βαθμό που βλάπτει την υγεία.",
                "examples": [
                    "Τα ποσοστά παχυσαρκίας έχουν αυξηθεί απότομα τις τελευταίες δεκαετίες."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_health_society_003",
        "lang": "el",
        "word": "προσδόκιμο ζωής",
        "level": "upper_intermediate",
        "theme": "health_society",
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
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_035",
        "lang": "el",
        "word": "δικαιοσύνη",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "η",
        "emoji": "⚖️",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "κοινωνική δικαιοσύνη",
        "antonyms": [
            "αδικία"
        ],
        "definitions": [
            {
                "text": "Δίκαιη μεταχείριση και η ιδιότητα του να είσαι δίκαιος.",
                "examples": [
                    "Το σύστημα δικαιοσύνης πρέπει να προστατεύει όλους τους πολίτες."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_crime_punishment_001",
        "lang": "el",
        "word": "επανένταξη",
        "level": "upper_intermediate",
        "theme": "crime_punishment",
        "article": "η",
        "emoji": "🔄🏢",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "αποκατάσταση"
        ],
        "definitions": [
            {
                "text": "Η διαδικασία παροχής βοήθειας σε κάποιον να επιστρέψει σε μια κανονική ζωή μετά από ένα έγκλημα ή ασθένεια.",
                "examples": [
                    "Η φυλακή πρέπει να επικεντρώνεται στην επανένταξη."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_politics_governance_036",
        "lang": "el",
        "word": "διαφάνεια",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "η",
        "emoji": "🪟",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "antonyms": [
            "αδιαφάνεια"
        ],
        "definitions": [
            {
                "text": "Το να είναι κανείς ανοιχτός και ειλικρινής σχετικά με τις ενέργειες και τις αποφάσεις.",
                "examples": [
                    "Το κοινό απαιτεί μεγαλύτερη διαφάνεια από τους πολιτικούς."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_technology_privacy_011",
        "lang": "el",
        "word": "αλγόριθμος",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "article": "ο",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "plural": "αλγόριθμοι",
        "definitions": [
            {
                "text": "Ένα σύνολο κανόνων που ακολουθεί ένας υπολογιστής για να λύσει ένα πρόβλημα.",
                "examples": [
                    "Οι αλγόριθμοι των μέσων κοινωνικής δικτύωσης καθορίζουν τι βλέπετε."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_technology_privacy_012",
        "lang": "el",
        "word": "απόρρητο δεδομένων",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "article": "το",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "προστασία δεδομένων"
        ],
        "definitions": [
            {
                "text": "Το δικαίωμα ελέγχου του τρόπου συλλογής και χρήσης των προσωπικών πληροφοριών.",
                "examples": [
                    "Οι νόμοι για το απόρρητο των δεδομένων γίνονται αυστηρότεροι."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_media_misinformation_001",
        "lang": "el",
        "word": "παραπληροφόρηση",
        "level": "upper_intermediate",
        "theme": "media_misinformation",
        "article": "η",
        "emoji": "🤥",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "ψευδείς ειδήσεις"
        ],
        "definitions": [
            {
                "text": "Ψευδείς ή ανακριβείς πληροφορίες που διαδίδονται ευρέως.",
                "examples": [
                    "Τα μέσα κοινωνικής δικτύωσης μπορούν να διαδώσουν γρήγορα την παραπληροφόρηση."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_technology_privacy_013",
        "lang": "el",
        "word": "επιτήρηση",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "article": "η",
        "emoji": "📹",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "παρακολούθηση"
        ],
        "definitions": [
            {
                "text": "Στενή παρακολούθηση ενός ατόμου ή μιας ομάδας από τις αρχές.",
                "examples": [
                    "Το CCTV είναι μια μορφή αστικής επιτήρησης."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_formal_debate_vocab_005",
        "lang": "el",
        "word": "ενώ",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "⚖️",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Σε αντίθεση με το γεγονός ότι. Αντιθέτως.",
                "examples": [
                    "Οι πόλεις είναι ακριβές, ενώ οι μικρές πόλεις είναι προσιτές."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_formal_debate_vocab_006",
        "lang": "el",
        "word": "παρόλα αυτά",
        "level": "upper_intermediate",
        "theme": "language",
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
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_formal_debate_vocab_007",
        "lang": "el",
        "word": "σε ποιο βαθμό",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "📏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Χρησιμοποιείται για να ρωτήσει ή να συζητήσει πόσο ή μέχρι πού ισχύει κάτι.",
                "examples": [
                    "Σε ποιο βαθμό η εκπαίδευση καθορίζει την επιτυχία;"
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_formal_debate_vocab_008",
        "lang": "el",
        "word": "αντίθετα",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "🌓",
        "form": "phrase",
        "definitions": [
            {
                "text": "Χρησιμοποιείται για να δείξει μια διαφορά μεταξύ δύο πραγμάτων.",
                "examples": [
                    "Η Σουηδία έχει μεγάλη άδεια πατρότητας. Αντίθετα, οι ΗΠΑ έχουν πολύ λίγη."
                ]
            }
        ],
        "transcription": ""
    },
    {
        "id": "el_upper_intermediate_technology_privacy_014",
        "lang": "el",
        "word": "τεχνητή νοημοσύνη",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
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
        ],
        "transcription": ""
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

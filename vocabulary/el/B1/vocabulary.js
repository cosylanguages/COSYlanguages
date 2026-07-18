// TODO: verify level classification
(function() {
    const lang = "el";
    const data = [
    {
        "id": "el_intermediate_places_018",
        "word": "κήπος",
        "lang": "el",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένας δημόσιος κήπος ή πάρκο.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "🌳",
        "_legacy": {
            "image": "images/vocabulary/places/garden.png",
            "classification": "regular",
            "countability": "countable"
        }
    },
    {
        "id": "el_intermediate_work_026",
        "word": "μηχανικός",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα άτομο που σχεδιάζει ή κατασκευάζει μηχανές, κινητήρες ή δομές.",
                "examples": [
                    "Ο μηχανικός εργάζεται σε μια νέα γέφυρα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👷",
        "_legacy": {
            "article": "ο",
            "classification": "regular",
            "plural": "μηχανικοί"
        }
    },
    {
        "id": "el_intermediate_work_027",
        "word": "πιλότος",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα άτομο που πετάει αεροπλάνο ή ελικόπτερο.",
                "examples": [
                    "Ο πιλότος είναι στο πιλοτήριο."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍✈️",
        "_legacy": {
            "article": "ο",
            "classification": "regular",
            "plural": "πιλότοι"
        }
    },
    {
        "id": "el_intermediate_work_028",
        "word": "προγραμματιστής",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα άτομο που γράφει προγράμματα υπολογιστών.",
                "examples": [
                    "Ο προγραμματιστής δημιουργεί μια νέα εφαρμογή."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💻",
        "_legacy": {
            "article": "ο",
            "classification": "regular",
            "plural": "προγραμματιστές"
        }
    },
    {
        "id": "el_intermediate_work_029",
        "word": "καριέρα",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Η σειρά των θέσεων εργασίας που έχει κάποιος κατά τη διάρκεια της εργασιακής του ζωής.",
                "examples": [
                    "Είχε μια επιτυχημένη καριέρα στα χρηματοοικονομικά."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📈",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "καριέρες"
        }
    },
    {
        "id": "el_intermediate_work_030",
        "word": "απόλυση",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Η απόλυση από τη δουλειά σου επειδή ο εργοδότης δεν χρειάζεται πλέον τη θέση.",
                "examples": [
                    "Έλαβε αποζημίωση απόλυσης πέρυσι."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📉",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "απολύσεις"
        }
    },
    {
        "id": "el_intermediate_work_031",
        "word": "ευέλικτο ωράριο",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια ρύθμιση που επιτρέπει στους εργαζόμενους να μεταβάλλουν τις ώρες ή την τοποθεσία τους.",
                "examples": [
                    "Η εταιρεία προσφέρει ευέλικτο ωράριο από το σπίτι."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏠",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "ευέλικτα ωράρια"
        }
    },
    {
        "id": "el_intermediate_work_032",
        "word": "δικτύωση",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Η οικοδόμηση επαγγελματικών σχέσεων για να βοηθήσετε την καριέρα σας.",
                "examples": [
                    "Η δικτύωση είναι απαραίτητη σε αυτόν τον κλάδο."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "δικτυώσεις",
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_work_033",
        "word": "φόρτος εργασίας",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Η ποσότητα εργασίας που πρέπει να κάνει ένα άτομο.",
                "examples": [
                    "Ο φόρτος εργασίας της αυξήθηκε πολύ αυτόν τον μήνα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "article": "ο",
            "classification": "regular",
            "plural": "φόρτοι εργασίας"
        }
    },
    {
        "id": "el_intermediate_work_034",
        "word": "ομαδική εργασία",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Η αποτελεσματική συνεργασία με άλλους ανθρώπους.",
                "examples": [
                    "Η καλή ομαδική εργασία έκανε το έργο επιτυχημένο."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "ομαδικές εργασίες"
        }
    },
    {
        "id": "el_intermediate_work_035",
        "word": "φιλοδοξία",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια έντονη επιθυμία να πετύχεις κάτι.",
                "examples": [
                    "Η φιλοδοξία του είναι να γίνει διευθυντής."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚀",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "φιλοδοξίες"
        }
    },
    {
        "id": "el_intermediate_work_036",
        "word": "δεξιότητα",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Η ικανότητα να κάνεις κάτι καλά, που συνήθως αποκτάται μέσω πρακτικής.",
                "examples": [
                    "Οι επικοινωνιακές δεξιότητες είναι πολύ σημαντικές στη δουλειά."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛠️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "δεξιότητες",
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_work_037",
        "word": "άδεια μητρότητας",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Πληρωμένος χρόνος εκτός εργασίας που δίνεται σε μια μητέρα μετά την απόκτηση μωρού.",
                "examples": [
                    "Πήρε έξι μήνες άδεια μητρότητας."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👶",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "άδειες μητρότητας"
        }
    },
    {
        "id": "el_intermediate_work_038",
        "word": "σύνταξη",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Χρήματα που καταβάλλονται τακτικά σε κάποιον αφού συνταξιοδοτηθεί.",
                "examples": [
                    "Συνεισφέρει στη σύνταξή του κάθε μήνα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👴",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "συντάξεις"
        }
    },
    {
        "id": "el_intermediate_work_039",
        "word": "επένδυση",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Χρήματα που τοποθετούνται σε κάτι προκειμένου να υπάρξει κέρδος στο μέλλον.",
                "examples": [
                    "Τα ακίνητα είναι μια δημοφιλής επένδυση."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💰",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "επενδύσεις"
        }
    },
    {
        "id": "el_intermediate_work_040",
        "word": "επιτόκιο",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Το ποσοστό που χρεώνεται για τον δανεισμό χρημάτων ή κερδίζεται από τις αποταμιεύσεις.",
                "examples": [
                    "Το επιτόκιο του στεγαστικού δανείου είναι τρία τοις εκατό."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📊",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "επιτόκια"
        }
    },
    {
        "id": "el_intermediate_work_041",
        "word": "εισόδημα",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Χρήματα που λαμβάνονται από την εργασία ή άλλες πηγές.",
                "examples": [
                    "Το οικογενειακό τους εισόδημα είναι ικανοποιητικό."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💸",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "εισοδήματα"
        }
    },
    {
        "id": "el_intermediate_work_042",
        "word": "ασφάλεια",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια συμφωνία όπου πληρώνετε τακτικά για να προστατεύεστε από απώλεια ή ζημιά.",
                "examples": [
                    "Η ασφάλεια υγείας είναι ακριβή σε ορισμένες χώρες."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "ασφάλειες"
        }
    },
    {
        "id": "el_intermediate_work_043",
        "word": "φόρος",
        "lang": "el",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Χρήματα που καταβάλλονται στην κυβέρνηση με βάση το εισόδημα ή τις αγορές.",
                "examples": [
                    "Πληρώνει πολύ φόρο εισοδήματος."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏦",
        "_legacy": {
            "article": "ο",
            "classification": "regular",
            "plural": "φόροι"
        }
    },
    {
        "id": "el_intermediate_health_medicine_012",
        "word": "ευεξία",
        "lang": "el",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα γενικό αίσθημα άνεσης, υγείας και ευτυχίας.",
                "examples": [
                    "Η άσκηση είναι σημαντική για την ψυχική ευεξία."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧘",
        "_legacy": {
            "article": "η",
            "classification": "regular"
        }
    },
    {
        "id": "el_intermediate_health_medicine_013",
        "word": "ψυχική υγεία",
        "lang": "el",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Η ψυχολογική και συναισθηματική κατάσταση ενός ατόμου.",
                "examples": [
                    "Οι εταιρείες παίρνουν την ψυχική υγεία πιο σοβαρά."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧠",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "el_intermediate_health_medicine_014",
        "word": "εξουθένωση",
        "lang": "el",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια κατάσταση εξάντλησης που προκαλείται από υπερβολικό άγχος για μεγάλο χρονικό διάστημα.",
                "examples": [
                    "Έπαθε εξουθένωση αφού εργαζόταν χωρίς διάλειμμα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔥",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": null,
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_health_medicine_015",
        "word": "πρόληψη",
        "lang": "el",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Δράση που λαμβάνεται για να σταματήσει κάτι κακό να συμβεί.",
                "examples": [
                    "Η πρόληψη είναι καλύτερη από τη θεραπεία."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "προλήψεις"
        }
    },
    {
        "id": "el_intermediate_health_medicine_016",
        "word": "σύμπτωμα",
        "lang": "el",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Σημάδια που υποδηλώνουν ότι ένα άτομο έχει μια συγκεκριμένη ασθένεια.",
                "examples": [
                    "Τα συμπτώματα ξεκίνησαν την περασμένη εβδομάδα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤒",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "συμπτώματα"
        }
    },
    {
        "id": "el_intermediate_health_medicine_017",
        "word": "θεραπεία",
        "lang": "el",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Αντιμετώπιση ψυχικών ή σωματικών προβλημάτων, συχνά μέσω συζήτησης.",
                "examples": [
                    "Πηγαίνει για θεραπεία μία φορά την εβδομάδα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛋️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "θεραπείες"
        }
    },
    {
        "id": "el_intermediate_people_001",
        "word": "εμπιστοσύνη",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια ακλόνητη πίστη στην ειλικρίνεια και την αξιοπιστία κάποιου.",
                "examples": [
                    "Η εμπιστοσύνη είναι το θεμέλιο μιας καλής σχέσης."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "article": "η",
            "classification": "regular"
        }
    },
    {
        "id": "el_intermediate_people_002",
        "word": "σύγκρουση",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια σοβαρή διαφωνία ή καβγάς.",
                "examples": [
                    "Είχαν μια σύγκρουση για τα χρήματα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚔️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "συγκρούσεις"
        }
    },
    {
        "id": "el_intermediate_people_003",
        "word": "ευθύνη",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα καθήκον να φροντίζεις κάποιον ή κάτι.",
                "examples": [
                    "Οι γονείς έχουν ευθύνη για τα παιδιά τους."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "ευθύνες",
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_people_004",
        "word": "προσδοκία",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια πεποίθηση για το τι θα συμβεί ή τι πρέπει να συμβεί.",
                "examples": [
                    "Έχει υψηλές προσδοκίες από τον σύντροφό της."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⏳",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "προσδοκίες"
        }
    },
    {
        "id": "el_intermediate_people_005",
        "word": "όριο",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένας περιορισμός σε αυτά που είστε διατεθειμένοι να αποδεχτείτε σε μια σχέση.",
                "examples": [
                    "Είναι υγιές να θέτεις σαφή όρια."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚧",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "όρια"
        }
    },
    {
        "id": "el_intermediate_people_006",
        "word": "διαζύγιο",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Ο νομικός τερματισμός ενός γάμου.",
                "examples": [
                    "Το ποσοστό των διαζυγίων έχει αυξηθεί τις τελευταίες δεκαετίες."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💔",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "διαζύγια"
        }
    },
    {
        "id": "el_intermediate_social_072",
        "word": "ισότητα",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Η κατάσταση του να είσαι ίσος σε δικαιώματα και ευκαιρίες.",
                "examples": [
                    "Αγωνίζονται για την ισότητα των φύλων στην εργασία."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "opposite": "ανισότητα"
        }
    },
    {
        "id": "el_intermediate_social_073",
        "word": "ελευθερία",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Το δικαίωμα να ενεργείς και να σκέφτεσαι χωρίς περιορισμούς.",
                "examples": [
                    "Η ελευθερία του λόγου είναι πολύ σημαντική."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗽",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "ελευθερίες"
        }
    },
    {
        "id": "el_intermediate_social_074",
        "word": "ανισότητα",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια άδικη κατάσταση στην οποία ορισμένοι άνθρωποι έχουν περισσότερα από άλλους.",
                "examples": [
                    "Η εισοδηματική ανισότητα αυξάνεται σε πολλές χώρες."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "ανισότητες",
            "opposite": "ισότητα"
        }
    },
    {
        "id": "el_intermediate_social_075",
        "word": "εθελοντής",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα άτομο που προσφέρεται να κάνει κάτι χωρίς να πληρωθεί.",
                "examples": [
                    "Είναι εθελοντής στην τοπική τράπεζα τροφίμων."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "article": "ο",
            "classification": "regular",
            "plural": "εθελοντές"
        }
    },
    {
        "id": "el_intermediate_social_076",
        "word": "κοινότητα",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Μια ομάδα ανθρώπων που μοιράζονται μια κοινή τοποθεσία, ταυτότητα ή ενδιαφέρον.",
                "examples": [
                    "Είναι πολύ δραστήριος στην τοπική του κοινότητα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏘️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "κοινότητες"
        }
    },
    {
        "id": "el_intermediate_social_077",
        "word": "γενιά",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Όλοι οι άνθρωποι παρόμοιας ηλικίας σε μια κοινωνία.",
                "examples": [
                    "Κάθε γενιά αντιμετωπίζει διαφορετικές προκλήσεις."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "γενιές"
        }
    },
    {
        "id": "el_intermediate_environment_008",
        "word": "κλιματική αλλαγή",
        "lang": "el",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Μακροπρόθεσμες αλλαγές στις παγκόσμιες θερμοκρασίες και τα καιρικά πρότυπα.",
                "examples": [
                    "Η κλιματική αλλαγή είναι η μεγαλύτερη πρόκληση της εποχής μας."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🌍",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "el_intermediate_environment_009",
        "word": "ανανεώσιμη ενέργεια",
        "lang": "el",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Ενέργεια από φυσικές πηγές που δεν εξαντλούνται, όπως ο άνεμος ή ο ήλιος.",
                "examples": [
                    "Η εταιρεία στράφηκε στην ανανεώσιμη ενέργεια."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "☀️",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "el_intermediate_environment_010",
        "word": "ανθρακικό αποτύπωμα",
        "lang": "el",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Η συνολική ποσότητα αερίων του θερμοκηπίου που παράγονται από τις δραστηριότητες ενός ατόμου.",
                "examples": [
                    "Οι πτήσεις αυξάνουν το ανθρακικό σας αποτύπωμα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👣",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "ανθρακικά αποτυπώματα"
        }
    },
    {
        "id": "el_intermediate_environment_011",
        "word": "απόβλητα",
        "lang": "el",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Υλικό που δεν χρειάζεται πλέον και πετιέται.",
                "examples": [
                    "Πρέπει να μειώσουμε τα απόβλητα τροφίμων."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗑️",
        "_legacy": {
            "article": "τα",
            "classification": "regular",
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_language_001",
        "word": "ωστόσο",
        "lang": "el",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Χρησιμοποιείται για να εισάγει μια αντίθεση ή μια αντίθετη ιδέα.",
                "examples": [
                    "Μου αρέσει η πόλη. Ωστόσο, είναι πολύ ακριβή."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔄",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_language_002",
        "word": "αν και",
        "lang": "el",
        "level": "intermediate",
        "theme": "language",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Παρά το γεγονός ότι. Μολονότι.",
                "examples": [
                    "Αν και είναι κουρασμένη, πάει στο γυμναστήριο."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔗",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_language_003",
        "word": "από την άλλη πλευρά",
        "lang": "el",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Χρησιμοποιείται για την εισαγωγή ενός αντίθετου σημείου.",
                "examples": [
                    "Η ζωή στην πόλη είναι συναρπαστική. Από την άλλη πλευρά, είναι αγχωτική."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️"
    },
    {
        "id": "el_intermediate_social_078",
        "word": "κατά τη γνώμη μου",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "adverb",
        "definitions": [
            {
                "text": "Χρησιμοποιείται για να παρουσιάσετε την προσωπική σας άποψη.",
                "examples": [
                    "Κατά τη γνώμη μου, η τηλεργασία είναι πιο παραγωγική."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗣️"
    },
    {
        "id": "el_intermediate_language_004",
        "word": "ως αποτέλεσμα",
        "lang": "el",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Εξαιτίας αυτού. Συνεπώς.",
                "examples": [
                    "Δούλεψε σκληρά. Ως αποτέλεσμα, πήρε προαγωγή."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "➡️",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "el_intermediate_food_drink_001",
        "word": "σουβλάκι",
        "lang": "el",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Κομμάτια κρέατος ψημένα σε μικρή σούβλα.",
                "examples": [
                    "Θέλω ένα σουβλάκι."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🍢",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "σουβλάκια"
        }
    },
    {
        "id": "el_intermediate_food_drink_002",
        "word": "ούζο",
        "lang": "el",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα παραδοσιακό ελληνικό αλκοολούχο ποτό με γεύση γλυκάνισου.",
                "examples": [
                    "Πίνουμε ούζο με μεζέδες."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🍸",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "ούζα"
        }
    },
    {
        "id": "el_intermediate_travel_004",
        "word": "βιβλιοθήκη",
        "lang": "el",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα μέρος με πολλά βιβλία που μπορείτε να διαβάσετε ή να δανειστείτε.",
                "examples": [
                    "Πηγαίνω στη βιβλιοθήκη."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "βιβλιοθήκες"
        }
    },
    {
        "id": "el_intermediate_travel_005",
        "word": "μουσείο",
        "lang": "el",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα κτίριο όπου εκτίθενται αντικείμενα τέχνης ή ιστορίας.",
                "examples": [
                    "Επισκεφθήκαμε το Μουσείο της Ακρόπολης."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏛️",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "μουσεία"
        }
    },
    {
        "id": "el_intermediate_travel_006",
        "word": "αεροδρόμιο",
        "lang": "el",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα μέρος όπου τα αεροπλάνα προσγειώνονται και απογειώνονται.",
                "examples": [
                    "Είμαστε στο αεροδρόμιο."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "✈️",
        "_legacy": {
            "article": "το",
            "classification": "regular",
            "plural": "αεροδρόμια"
        }
    },
    {
        "id": "el_intermediate_home_living_001",
        "word": "ντουλάπα",
        "lang": "el",
        "level": "intermediate",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα έπιπλο για την αποθήκευση ρούχων.",
                "examples": [
                    "Τα ρούχα μου είναι στη ντουλάπα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👗",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "ντουλάπες"
        }
    },
    {
        "id": "el_intermediate_environment_nature_001",
        "word": "ελέφαντας",
        "lang": "el",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα πολύ μεγάλο γκρίζο ζώο με προβοσκίδα.",
                "examples": [
                    "Ο ελέφαντας ζει στην Αφρική."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐘",
        "_legacy": {
            "article": "ο",
            "classification": "regular",
            "plural": "ελέφαντες"
        }
    },
    {
        "id": "el_intermediate_environment_nature_002",
        "word": "μαϊμού",
        "lang": "el",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Ένα ζώο που σκαρφαλώνει στα δέντρα και μοιάζει με τον άνθρωπο.",
                "examples": [
                    "Η μαϊμού τρώει μια μπανάνα."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐒",
        "_legacy": {
            "article": "η",
            "classification": "regular",
            "plural": "μαϊμούδες"
        }
    },
    {
        "id": "el_intermediate_social_079",
        "lang": "el",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
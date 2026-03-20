(function() {
    const data = {
    "el": [
        {
            "word": "γιατρός",
            "level": "starter",
            "theme": "jobs_A0",
            "numberPlural": "2 γιατρός",
            "answer": "δύο γιατροί",
            "emoji": "🧑‍⚕️",
            "form": "noun",
            "plural": "γιατροί",
            "definitions": [
                {
                    "text": "Ένας άνθρωπος που βοηθά τους αρρώστους.",
                    "examples": [
                        "Ο γιατρός είναι στο νοσοκομείο.",
                        "Θέλω να δω έναν γιατρό."
                    ]
                },
                {
                    "text": "Αυτό το άτομο εργάζεται συνήθως σε νοσοκομείο ή κλινική.",
                    "examples": [
                        "Οι γιατροί φορούν λευκές ποδιές."
                    ]
                }
            ]
        },
        {
            "word": "μηχανικός",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "👷",
            "form": "noun",
            "plural": "μηχανικός",
            "definitions": [
                {
                    "text": "Ένα άτομο που σχεδιάζει ή κατασκευάζει μηχανές, κινητήρες ή δομές.",
                    "examples": [
                        "Ο μηχανικός εργάζεται σε μια νέα γέφυρα.",
                        "Θέλει να γίνει πολιτικός μηχανικός."
                    ]
                },
                {
                    "text": "Αυτό το άτομο εργάζεται συχνά σε γραφείο ή σε εργοτάξιο.",
                    "examples": [
                        "Οι μηχανικοί χρησιμοποιούν υπολογιστές για το σχεδιασμό."
                    ]
                }
            ]
        },
        {
            "word": "καλλιτέχνης",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🎨",
            "form": "noun",
            "plural": "καλλιτέχνης",
            "definitions": [
                {
                    "text": "Ένα άτομο που δημιουργεί πίνακες ή σχέδια.",
                    "examples": [
                        "Ο καλλιτέχνης ζωγραφίζει μια όμορφη εικόνα.",
                        "Είναι μια διάσημη καλλιτέχνιδα."
                    ]
                },
                {
                    "text": "Αυτό το άτομο εργάζεται συχνά σε ένα ατελιέ.",
                    "examples": [
                        "Οι καλλιτέχνες χρησιμοποιούν χρώματα και πινέλα."
                    ]
                }
            ]
        },
        {
            "word": "πιλότος",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "🧑‍✈️",
            "form": "noun",
            "plural": "πιλότοι",
            "definitions": [
                {
                    "text": "Ένα άτομο που πετάει αεροπλάνο ή ελικόπτερο.",
                    "examples": [
                        "Ο πιλότος είναι στο πιλοτήριο.",
                        "Θέλει να γίνει πιλότος."
                    ]
                },
                {
                    "text": "Αυτό το άτομο εργάζεται στον ουρανό και στο αεροδρόμιο.",
                    "examples": [
                        "Οι πιλότοι φορούν στολή."
                    ]
                }
            ]
        },
        {
            "word": "σεφ",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👨‍🍳",
            "form": "noun",
            "plural": "σεφ",
            "definitions": [
                {
                    "text": "Ένας επαγγελματίας μάγειρας που εργάζεται σε εστιατόριο.",
                    "examples": [
                        "Ο σεφ μαγειρεύει ένα νόστιμο γεύμα.",
                        "Ο σεφ μας είναι πολύ ταλαντούχος."
                    ]
                },
                {
                    "text": "Αυτό το άτομο εργάζεται σε μια κουζίνα.",
                    "examples": [
                        "Οι σεφ φορούν ψηλό λευκό καπέλο."
                    ]
                }
            ]
        },
        {
            "word": "δικηγόρος",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "⚖️",
            "form": "noun",
            "plural": "δικηγόροι",
            "definitions": [
                {
                    "text": "Ένα άτομο που δίνει συμβουλές για το νόμο και εκπροσωπεί ανθρώπους στο δικαστήριο.",
                    "examples": [
                        "Πρέπει να μιλήσω με τον δικηγόρο μου.",
                        "Ο δικηγόρος είναι στην αίθουσα του δικαστηρίου."
                    ]
                },
                {
                    "text": "Αυτό το άτομο εργάζεται συχνά σε γραφείο ή δικαστήριο.",
                    "examples": [
                        "Οι δικηγόροι διαβάζουν πολλά έγγραφα."
                    ]
                }
            ]
        },
        {
            "word": "δάσκαλος",
            "level": "starter",
            "theme": "jobs_A0",
            "emoji": "🧑‍🏫",
            "form": "noun",
            "plural": "δάσκαλοι",
            "definitions": [
                {
                    "text": "Ένας άνθρωπος που σε βοηθά να μάθεις.",
                    "examples": [
                        "Ο δάσκαλος είναι στην τάξη.",
                        "Ο δάσκαλός μου είναι καλός."
                    ]
                },
                {
                    "text": "Αυτό το άτομο εργάζεται συνήθως σε σχολείο ή πανεπιστήμιο.",
                    "examples": [
                        "Οι δάσκαλοι εξηγούν νέα θέματα."
                    ]
                }
            ]
        },
        {
            "word": "μουσακάς",
            "level": "starter",
            "theme": "food_drink_A0",
            "form": "noun",
            "plural": "μουσακάς",
            "definitions": [
                {
                    "text": "Ένα παραδοσιακό ελληνικό πιάτο με μελιτζάνες και κιμά.",
                    "examples": [
                        "Ο μουσακάς της γιαγιάς είναι ο καλύτερος.",
                        "Θέλω μια μερίδα μουσακά."
                    ]
                },
                {
                    "text": "Αυτό το φαγητό είναι πολύ δημοφιλές στην Ελλάδα.",
                    "examples": [
                        "Ο μουσακάς έχει μπεσαμέλ από πάνω."
                    ]
                }
            ]
        },
        {
            "word": "σουβλάκι",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "σουβλάκια",
            "definitions": [
                {
                    "text": "Κομμάτια κρέατος ψημένα σε μικρή σούβλα.",
                    "examples": [
                        "Παρήγγειλα δύο σουβλάκια με πίτα.",
                        "Το σουβλάκι είναι το αγαπημένο μου γρήγορο φαγητό."
                    ]
                },
                {
                    "text": "Αυτό το φαγητό είναι το πιο διάσημο ελληνικό 'street food'.",
                    "examples": [
                        "Τρώμε σουβλάκι με τζατζίκι."
                    ]
                }
            ]
        },
        {
            "word": "χωριάτικη σαλάτα",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "form": "noun",
            "plural": "χωριάτικη σαλάτες",
            "definitions": [
                {
                    "text": "Σαλάτα με ντομάτα, αγγούρι, κρεμμύδι και φέτα.",
                    "examples": [
                        "Η χωριάτικη σαλάτα είναι πολύ δροσερή το καλοκαίρι.",
                        "Βάλε ελιές στη χωριάτικη."
                    ]
                },
                {
                    "text": "Αυτό το πιάτο συνοδεύει σχεδόν κάθε ελληνικό γεύμα.",
                    "examples": [
                        "Η χωριάτικη σαλάτα έχει πολύ ελαιόλαδο."
                    ]
                }
            ]
        },
        {
            "word": "παστίτσιο",
            "level": "starter",
            "theme": "food_drink_A0",
            "form": "noun",
            "plural": "παστίτσια",
            "definitions": [
                {
                    "text": "Ελληνικό πιάτο με μακαρόνια, κιμά και μπεσαμέλ.",
                    "examples": [
                        "Το παστίτσιο είναι στο φούρνο.",
                        "Μου αρέσει η γωνία από το παστίτσιο."
                    ]
                },
                {
                    "text": "Αυτό το φαγητό μοιάζει λίγο με τα λαζάνια.",
                    "examples": [
                        "Το παστίτσιο είναι το αγαπημένο φαγητό των παιδιών."
                    ]
                }
            ]
        },
        {
            "word": "γεμιστά",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "form": "noun",
            "plural": "γεμιστά",
            "definitions": [
                {
                    "text": "Ντομάτες ή πιπεριές γεμισμένες με ρύζι.",
                    "examples": [
                        "Τα γεμιστά είναι έτοιμα.",
                        "Προτιμώ τα γεμιστά με ορφανά (χωρίς κιμά)."
                    ]
                },
                {
                    "text": "Αυτό το φαγητό τρώγεται συνήθως με τυρί φέτα.",
                    "examples": [
                        "Τα γεμιστά μυρίζουν υπέροχα."
                    ]
                }
            ]
        },
        {
            "word": "μήλο",
            "level": "starter",
            "theme": "food_drink_A0",
            "numberPlural": "4 μήλο",
            "answer": "τέσσερα μήλα",
            "emoji": "🍎",
            "form": "noun",
            "plural": "μήλα",
            "definitions": [
                {
                    "text": "Ένα στρογγυλό φρούτο, κόκκινο ή πράσινο.",
                    "examples": [
                        "Τρώω ένα μήλο.",
                        "Το μήλο είναι γλυκό."
                    ]
                }
            ]
        },
        {
            "word": "ψωμί",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🍞",
            "form": "noun",
            "plural": "ψωμί",
            "definitions": [
                {
                    "text": "Μια τροφή φτιαγμένη από αλεύρι και νερό, ψημένη στον φούρνο.",
                    "examples": [
                        "Μου αρέσει το φρέσκο ψωμί.",
                        "Μπορείς να αγοράσεις ψωμί;"
                    ]
                }
            ]
        },
        {
            "word": "τυρί",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🧀",
            "form": "noun",
            "plural": "τυρί",
            "definitions": [
                {
                    "text": "Μια στερεά τροφή που φτιάχνεται από γάλα.",
                    "examples": [
                        "Μου αρέσει το τυρί στην πίτσα.",
                        "Υπάρχουν πολλά είδη τυριών."
                    ]
                },
                {
                    "text": "Η Ελλάδα είναι διάσημη για τη φέτα της.",
                    "examples": [
                        "Το τυρί είναι πλούσιο σε ασβέστιο."
                    ]
                }
            ]
        },
        {
            "word": "αυγό",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥚",
            "form": "noun",
            "plural": "αυγό",
            "definitions": [
                {
                    "text": "Ένα οβάλ αντικείμενο που κάνει η κότα.",
                    "examples": [
                        "Έφαγα ένα βραστό αυγό για πρωινό.",
                        "Χρειαζόμαστε αυγά για το κέικ."
                    ]
                },
                {
                    "text": "Πολλοί άνθρωποι τρώνε αυγά το πρωί.",
                    "examples": [
                        "Τα αυγά είναι καλή πηγή πρωτεΐνης."
                    ]
                }
            ]
        },
        {
            "word": "γάλα",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🥛",
            "form": "noun",
            "plural": "γάλα",
            "definitions": [
                {
                    "text": "Ένα λευκό υγρό που παράγουν οι αγελάδες.",
                    "examples": [
                        "Θέλεις γάλα στον καφέ σου;",
                        "Τα παιδιά πρέπει να πίνουν γάλα."
                    ]
                },
                {
                    "text": "Χρησιμοποιούμε το γάλα για να φτιάξουμε τυρί και γιαούρτι.",
                    "examples": [
                        "Το γάλα πρέπει να διατηρείται στο ψυγείο."
                    ]
                }
            ]
        },
        {
            "word": "ρύζι",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍚",
            "form": "noun",
            "plural": "ρύζι",
            "definitions": [
                {
                    "text": "Μικροί λευκοί ή καφέ κόκκοι από ένα φυτό.",
                    "examples": [
                        "Τρώω ρύζι με κοτόπουλο.",
                        "Σου αρέσει το τηγανητό ρύζι;"
                    ]
                },
                {
                    "text": "Αυτή είναι μια βασική τροφή σε πολλές χώρες.",
                    "examples": [
                        "Το ρύζι μεγαλώνει σε χωράφια με νερό."
                    ]
                }
            ]
        },
        {
            "word": "ντομάτα",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍅",
            "form": "noun",
            "plural": "ντομάτες",
            "definitions": [
                {
                    "text": "Ένα κόκκινο φρούτο που χρησιμοποιείται συχνά σε σαλάτες.",
                    "examples": [
                        "Η ντομάτα είναι πολύ ζουμερή.",
                        "Χρειάζομαι ντομάτες για τη σάλτσα."
                    ]
                },
                {
                    "text": "Οι ντομάτες είναι απαραίτητες για τη χωριάτικη σαλάτα.",
                    "examples": [
                        "Οι ντομάτες cherry είναι μικρές και γλυκές."
                    ]
                }
            ]
        },
        {
            "word": "πατάτα",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🥔",
            "form": "noun",
            "plural": "πατάτες",
            "definitions": [
                {
                    "text": "Ένα στρογγυλό λαχανικό που μεγαλώνει κάτω από το έδαφος.",
                    "examples": [
                        "Μου αρέσουν οι τηγανητές πατάτες.",
                        "Μπορείς να καθαρίσεις τις πατάτες;"
                    ]
                },
                {
                    "text": "Χρησιμοποιούμε τις πατάτες για να φτιάξουμε πουρέ.",
                    "examples": [
                        "Οι πατάτες είναι πολύ χορταστικές."
                    ]
                }
            ]
        },
        {
            "word": "πίτσα",
            "level": "starter",
            "theme": "food_drink_A0",
            "emoji": "🍕",
            "form": "noun",
            "plural": "πίτσες",
            "definitions": [
                {
                    "text": "Ένα πλατύ ψωμί με τυρί και ντομάτα.",
                    "examples": [
                        "Μου αρέσει η πίτσα με τυρί.",
                        "Ας παραγγείλουμε μια πίτσα."
                    ]
                }
            ]
        },
        {
            "word": "καφές",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "ο",
            "baseWord": "καφές",
            "emoji": "☕",
            "form": "noun",
            "plural": "καφές",
            "definitions": [
                {
                    "text": "Ένα σκούρο ρόφημα που φτιάχνεται από καβουρδισμένους κόκκους.",
                    "examples": [
                        "Πίνω καφέ κάθε πρωί.",
                        "Θέλεις ζάχαρη στον καφέ σου;"
                    ]
                },
                {
                    "text": "Πολλοί άνθρωποι πίνουν καφέ για να ξυπνήσουν.",
                    "examples": [
                        "Ο καφές είναι πολύ ζεστός."
                    ]
                }
            ]
        },
        {
            "word": "τσάι",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "το",
            "baseWord": "τσάι",
            "emoji": "🍵",
            "form": "noun",
            "plural": "τσάι",
            "definitions": [
                {
                    "text": "Ένα ρόφημα που φτιάχνεται ρίχνοντας ζεστό νερό σε αποξηραμένα φύλλα.",
                    "examples": [
                        "Θα θέλατε ένα φλιτζάνι τσάι;",
                        "Το πράσινο τσάι είναι πολύ υγιεινό."
                    ]
                },
                {
                    "text": "Αυτό είναι ένα πολύ δημοφιλές ρόφημα σε όλο τον κόσμο.",
                    "examples": [
                        "Μου αρέσει το τσάι με λεμόνι."
                    ]
                }
            ]
        },
        {
            "word": "κρασί",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "article": "το",
            "baseWord": "κρασί",
            "emoji": "🍷",
            "form": "noun",
            "plural": "κρασί",
            "definitions": [
                {
                    "text": "Ένα αλκοολούχο ποτό που φτιάχνεται από σταφύλια.",
                    "examples": [
                        "Το κόκκινο κρασί ταιριάζει με το κρέας.",
                        "Ήπιαν ένα μπουκάλι κρασί."
                    ]
                },
                {
                    "text": "Η Ελλάδα έχει μεγάλη παράδοση στην παραγωγή κρασιού.",
                    "examples": [
                        "Το κρασί φυλάσσεται σε κελάρι."
                    ]
                }
            ]
        },
        {
            "word": "μπίρα",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "article": "η",
            "baseWord": "μπίρα",
            "emoji": "🍺",
            "form": "noun",
            "plural": "μπίρα",
            "definitions": [
                {
                    "text": "Ένα αλκοολούχο ποτό που φτιάχνεται από δημητριακά.",
                    "examples": [
                        "Πίνει ένα ποτήρι μπίρα.",
                        "Η μπίρα σερβίρεται συνήθως κρύα."
                    ]
                },
                {
                    "text": "Αυτό το ποτό έχει συχνά αφρό από πάνω.",
                    "examples": [
                        "Η μπίρα είναι δημοφιλής το καλοκαίρι."
                    ]
                }
            ]
        },
        {
            "word": "χυμός",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "ο",
            "baseWord": "χυμός",
            "emoji": "🧃",
            "form": "noun",
            "plural": "χυμός",
            "definitions": [
                {
                    "text": "Ένα υγρό που προέρχεται από φρούτα ή λαχανικά.",
                    "examples": [
                        "Θέλω ένα ποτήρι χυμό πορτοκάλι.",
                        "Ο χυμός μήλου είναι γλυκός."
                    ]
                },
                {
                    "text": "Ο χυμός πορτοκάλι είναι κοινός για πρωινό.",
                    "examples": [
                        "Ο φρεσκοστυμμένος χυμός είναι ο καλύτερος."
                    ]
                }
            ]
        },
        {
            "word": "νερό",
            "level": "starter",
            "theme": "food_drink_A0",
            "article": "το",
            "baseWord": "νερό",
            "emoji": "🚰",
            "form": "noun",
            "plural": "νερό",
            "definitions": [
                {
                    "text": "Ένα διαφανές υγρό που πίνουμε για να ζήσουμε.",
                    "examples": [
                        "Πίνω ένα ποτήρι νερό.",
                        "Το νερό είναι κρύο."
                    ]
                }
            ]
        },
        {
            "word": "ούζο",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "ούζα",
            "definitions": [
                {
                    "text": "Ένα παραδοσιακό ελληνικό αλκοολούχο ποτό με γεύση γλυκάνισου.",
                    "examples": [
                        "Πίνουμε ούζο με μεζέδες.",
                        "Το ούζο γίνεται άσπρο με το νερό."
                    ]
                },
                {
                    "text": "Είναι το πιο χαρακτηριστικό ποτό της Ελλάδας.",
                    "examples": [
                        "Το ούζο πίνεται συνήθως δίπλα στη θάλασσα."
                    ]
                }
            ]
        },
        {
            "word": "πάρκο",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🌳",
            "form": "noun",
            "plural": "πάρκα",
            "definitions": [
                {
                    "text": "Ένας μεγάλος δημόσιος χώρος με δέντρα για αναψυχή.",
                    "examples": [
                        "Πηγαίνω στο πάρκο με τα παιδιά.",
                        "Το πάρκο είναι πολύ όμορφο."
                    ]
                }
            ]
        },
        {
            "word": "σχολείο",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏫",
            "form": "noun",
            "plural": "σχολεία",
            "definitions": [
                {
                    "text": "Ένα μέρος όπου τα παιδιά πηγαίνουν για να μάθουν.",
                    "examples": [
                        "Πηγαίνω στο σχολείο με το λεωφορείο.",
                        "Το σχολείο μου είναι κοντά στο σπίτι μου."
                    ]
                }
            ]
        },
        {
            "word": "νοσοκομείο",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🏥",
            "form": "noun",
            "plural": "νοσοκομεία",
            "definitions": [
                {
                    "text": "Ένα μέρος όπου οι άρρωστοι ή οι τραυματισμένοι δέχονται ιατρική βοήθεια.",
                    "examples": [
                        "Το ασθενοφόρο πηγαίνει στο νοσοκομείο.",
                        "Δουλεύει στο νοσοκομείο."
                    ]
                },
                {
                    "text": "Αυτό είναι ένα μέρος όπου πηγαίνετε για να δείτε έναν γιατρό ή μια νοσοκόμα.",
                    "examples": [
                        "Τα νοσοκομεία είναι ανοιχτά όλο το εικοσιτετράωρο."
                    ]
                }
            ]
        },
        {
            "word": "κινηματογράφος",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🎬",
            "form": "noun",
            "plural": "κινηματογράφοι",
            "definitions": [
                {
                    "text": "Ένα μέρος όπου ο κόσμος πάει να δει ταινίες σε μεγάλη οθόνη.",
                    "examples": [
                        "Πάμε σινεμά απόψε;",
                        "Τι παίζει στον κινηματογράφο;"
                    ]
                },
                {
                    "text": "Αυτό είναι ένα μέρος όπου μπορείτε να φάτε ποπ κορν και να δείτε μια ταινία.",
                    "examples": [
                        "Μου αρέσει να πηγαίνω στον κινηματογράφο με φίλους."
                    ]
                }
            ]
        },
        {
            "word": "εστιατόριο",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🍴",
            "form": "noun",
            "plural": "εστιατόρια",
            "definitions": [
                {
                    "text": "Ένα μέρος όπου μπορείτε να αγοράσετε και να φάτε ένα γεύμα.",
                    "examples": [
                        "Πάμε σε ένα ιταλικό εστιατόριο.",
                        "Το εστιατόριο είναι ανοιχτό."
                    ]
                },
                {
                    "text": "Σε αυτό το μέρος, ένας σερβιτόρος σας φέρνει το φαγητό στο τραπέζι.",
                    "examples": [
                        "Κλείσαμε τραπέζι στο εστιατόριο."
                    ]
                }
            ]
        },
        {
            "word": "βιβλιοθήκη",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "📚",
            "form": "noun",
            "plural": "βιβλιοθήκες",
            "definitions": [
                {
                    "text": "Ένα μέρος με πολλά βιβλία που μπορείτε να διαβάσετε ή να δανειστείτε.",
                    "examples": [
                        "Διαβάζω στη βιβλιοθήκη του πανεπιστημίου.",
                        "Η δημοτική βιβλιοθήκη είναι μεγάλη."
                    ]
                },
                {
                    "text": "Αυτό είναι ένα ήσυχο μέρος για μελέτη.",
                    "examples": [
                        "Πρέπει να κάνουμε ησυχία στη βιβλιοθήκη."
                    ]
                }
            ]
        },
        {
            "word": "σούπερ μάρκετ",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🛒",
            "form": "noun",
            "plural": "σούπερ μάρκετ",
            "definitions": [
                {
                    "text": "Ένα μεγάλο κατάστημα όπου αγοράζετε τρόφιμα και είδη σπιτιού.",
                    "examples": [
                        "Πηγαίνω στο σούπερ μάρκετ για ψώνια.",
                        "Το σούπερ μάρκετ είναι πολύ γεμάτο."
                    ]
                },
                {
                    "text": "Σε αυτό το μέρος χρησιμοποιείτε καρότσι ή καλάθι.",
                    "examples": [
                        "Τα σούπερ μάρκετ έχουν πολλές προσφορές."
                    ]
                }
            ]
        },
        {
            "word": "φαρμακείο",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "💊",
            "form": "noun",
            "plural": "φαρμακεία",
            "definitions": [
                {
                    "text": "Ένα κατάστημα όπου μπορείτε να αγοράσετε φάρμακα.",
                    "examples": [
                        "Πρέπει να πάρω μια ασπιρίνη από το φαρμακείο.",
                        "Υπάρχει φαρμακείο εδώ κοντά;"
                    ]
                },
                {
                    "text": "Είναι το μέρος όπου ο φαρμακοποιός εκτελεί τις συνταγές.",
                    "examples": [
                        "Μπορείτε να βρείτε βιταμίνες στο φαρμακείο."
                    ]
                }
            ]
        },
        {
            "word": "αεροδρόμιο",
            "level": "intermediate",
            "theme": "travel_cultural_B1",
            "emoji": "✈️",
            "form": "noun",
            "plural": "αεροδρόμια",
            "definitions": [
                {
                    "text": "Ένα μέρος όπου τα αεροπλάνα προσγειώνονται και απογειώνονται.",
                    "examples": [
                        "Πηγαίνω στο αεροδρόμιο για το ταξίδι μου.",
                        "Το αεροδρόμιο είναι πολύ μεγάλο."
                    ]
                },
                {
                    "text": "Είναι το μέρος από όπου παίρνετε το αεροπλάνο.",
                    "examples": [
                        "Πρέπει να είμαστε στο αεροδρόμιο δύο ώρες νωρίτερα."
                    ]
                }
            ]
        },
        {
            "word": "μπλουζάκι",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👕",
            "form": "noun",
            "plural": "μπλουζάκια"
        },
        {
            "word": "παντελόνι",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👖",
            "form": "noun",
            "plural": "παντελόνια"
        },
        {
            "word": "φόρεμα",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "φόρεμες"
        },
        {
            "word": "παπούτσια",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👟",
            "form": "noun",
            "plural": "παπούτσιες"
        },
        {
            "word": "καπέλο",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👒",
            "form": "noun",
            "plural": "καπέλα"
        },
        {
            "word": "σακάκι",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🧥",
            "form": "noun",
            "plural": "σακάκια"
        },
        {
            "word": "φούστα",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👗",
            "form": "noun",
            "plural": "φούστες"
        },
        {
            "word": "καρέκλα",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "καρέκλες"
        },
        {
            "word": "τραπέζι",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "form": "noun",
            "plural": "τραπέζια"
        },
        {
            "word": "κρεβάτι",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛏️",
            "form": "noun",
            "plural": "κρεβάτια"
        },
        {
            "word": "καναπές",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🛋️",
            "form": "noun",
            "plural": "καναπές"
        },
        {
            "word": "λάμπα",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "💡",
            "form": "noun",
            "plural": "λάμπες"
        },
        {
            "word": "γραφείο",
            "level": "elementary",
            "theme": "places_buildings_activities_A2",
            "emoji": "⌨️",
            "form": "noun",
            "plural": "γραφεία"
        },
        {
            "word": "ντουλάπα",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "👗",
            "form": "noun",
            "plural": "ντουλάπες"
        },
        {
            "word": "ψηλός",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "ψηλός",
            "definitions": [
                {
                    "text": "Ένας άνθρωπος ή ένα πράγμα που είναι μεγάλο από κάτω προς τα πάνω.",
                    "examples": [
                        "Είναι πολύ ψηλός.",
                        "Αυτό το κτίριο είναι ψηλό."
                    ]
                }
            ]
        },
        {
            "word": "κοντός",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "κοντός",
            "definitions": [
                {
                    "text": "Ένας άνθρωπος ή ένα πράγμα που δεν είναι ψηλό.",
                    "examples": [
                        "Είναι κοντή.",
                        "Το μολύβι είναι κοντό."
                    ]
                }
            ]
        },
        {
            "word": "όμορφος",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "noun",
            "plural": "όμορφοι"
        },
        {
            "word": "δυνατός",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "form": "noun",
            "plural": "δυνατός"
        },
        {
            "word": "αδύνατος",
            "level": "intermediate",
            "theme": "society_community_B1",
            "form": "noun",
            "plural": "αδύνατοι"
        },
        {
            "word": "νέος",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "νέοι"
        },
        {
            "word": "γέρος",
            "level": "starter",
            "theme": "adjectives_A0",
            "form": "noun",
            "plural": "γέροι"
        },
        {
            "word": "ξυπνάω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "⏰",
            "form": "noun",
            "plural": "ξυπνάω"
        },
        {
            "word": "πλένω τα δόντια",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🪥",
            "form": "noun",
            "plural": "πλένω τα δόντιες"
        },
        {
            "word": "κάνω ντους",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🚿",
            "form": "noun",
            "plural": "κάνω ντους"
        },
        {
            "word": "κοιμάμαι",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "😴",
            "subtext": "κοιμάμαι 8 ώρες, πάω για ύπνο",
            "form": "noun",
            "plural": "κοιμάμαια"
        },
        {
            "word": "κλειδί",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔑",
            "form": "noun",
            "plural": "κλειδιά",
            "definitions": [
                {
                    "text": "Ένα μεταλλικό αντικείμενο για να ανοίγουμε μια πόρτα ή να ξεκινάμε το αυτοκίνητο.",
                    "examples": [
                        "Δεν βρίσκω τα κλειδιά μου.",
                        "Ορίστε το κλειδί για το δωμάτιό σας."
                    ]
                },
                {
                    "text": "Κάτι πολύ σημαντικό (όπως το κλειδί της επιτυχίας).",
                    "examples": [
                        "Η εξάσκηση είναι το κλειδί για τη μάθηση.",
                        "Ποιο είναι το σημείο κλειδί;"
                    ]
                }
            ]
        },
        {
            "word": "τηλέφωνο",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📱",
            "form": "noun",
            "plural": "τηλέφωνα"
        },
        {
            "word": "βιβλίο",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "form": "noun",
            "plural": "βιβλία",
            "definitions": [
                {
                    "text": "Ένα αντικείμενο με πολλές σελίδες που το διαβάζουμε.",
                    "examples": [
                        "Διαβάζω ένα βιβλίο.",
                        "Το βιβλίο είναι στη βιβλιοθήκη."
                    ]
                }
            ]
        },
        {
            "word": "ρολόι",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "form": "noun",
            "plural": "ρολόια"
        },
        {
            "word": "πορτοφόλι",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👛",
            "form": "noun",
            "plural": "πορτοφόλια",
            "definitions": [
                {
                    "text": "Μια μικρή θήκη για να φυλάμε χρήματα και κάρτες.",
                    "examples": [
                        "Έχασα το πορτοφόλι μου.",
                        "Βάλε τα χρήματα στο πορτοφόλι."
                    ]
                }
            ]
        },
        {
            "word": "γυαλιά",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "👓",
            "form": "noun",
            "plural": "γυαλιά",
            "definitions": [
                {
                    "text": "Κάτι που φοράμε στο πρόσωπο για να βλέπουμε καλύτερα.",
                    "examples": [
                        "Χρειάζομαι καινούρια γυαλιά.",
                        "Φοράει μαύρα γυαλιά."
                    ]
                },
                {
                    "text": "Δοχεία που χρησιμοποιούμε για να πίνουμε νερό ή χυμό.",
                    "examples": [
                        "Δύο ποτήρια νερό, παρακαλώ.",
                        "Τα ποτήρια είναι στην κουζίνα."
                    ]
                }
            ]
        },
        {
            "word": "γάτα",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "🐈",
            "form": "noun",
            "plural": "γάτες",
            "definitions": [
                {
                    "text": "Ένα μικρό τριχωτό ζώο που πολλοί άνθρωποι έχουν στο σπίτι.",
                    "examples": [
                        "Η γάτα μου κοιμάται.",
                        "Αγαπώ τις γάτες."
                    ]
                }
            ]
        },
        {
            "word": "σκύλος",
            "level": "starter",
            "theme": "weather_A0",
            "article": "ο",
            "baseWord": "σκύλος",
            "emoji": "🐕",
            "numberPlural": "5 σκύλος",
            "answer": "πέντε σκύλοι",
            "form": "noun",
            "plural": "σκύλοι",
            "definitions": [
                {
                    "text": "Ένα ζώο που συχνά αποκαλείται 'ο καλύτερος φίλος του ανθρώπου'.",
                    "examples": [
                        "Πηγαίνω βόλτα τον σκύλο μου στο πάρκο.",
                        "Ο σκύλος γαβγίζει."
                    ]
                }
            ]
        },
        {
            "word": "πουλί",
            "level": "starter",
            "theme": "weather_A0",
            "emoji": "🐦",
            "form": "noun",
            "plural": "πουλιά",
            "definitions": [
                {
                    "text": "Ένα ζώο με πούπουλα και φτερά που συνήθως μπορεί να πετάξει.",
                    "examples": [
                        "Ένα πουλί τραγουδάει.",
                        "Κοίτα αυτό το όμορφο πουλί!"
                    ]
                }
            ]
        },
        {
            "word": "λιοντάρι",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🦁",
            "form": "noun",
            "plural": "λιοντάρια",
            "definitions": [
                {
                    "text": "Ένα μεγάλο άγριο αιλουροειδές που ζει στην Αφρική και αποκαλείται 'ο βασιλιάς της ζούγκλας'.",
                    "examples": [
                        "Το λιοντάρι είναι πολύ δυνατό.",
                        "Είδαμε ένα λιοντάρι στο ζωολογικό κήπο."
                    ]
                }
            ]
        },
        {
            "word": "τίγρης",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🐯",
            "form": "noun",
            "plural": "τίγρεις"
        },
        {
            "word": "ελέφαντας",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐘",
            "form": "noun",
            "plural": "ελέφαντες"
        },
        {
            "word": "μαϊμού",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🐒",
            "form": "noun",
            "plural": "μαϊμούδες"
        },
        {
            "word": "ζωγραφική",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "form": "noun",
            "plural": "ζωγραφικές"
        },
        {
            "word": "μαγειρική",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "form": "noun",
            "plural": "μαγειρικές"
        },
        {
            "word": "διάβασμα",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "form": "noun",
            "plural": "διαβάσματα"
        },
        {
            "word": "ζεστός",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "🔥",
            "form": "noun",
            "plural": "ζεστός"
        },
        {
            "word": "κεφάλι",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👤",
            "form": "noun",
            "plural": "κεφάλια",
            "definitions": [
                {
                    "text": "Το πάνω μέρος του σώματος που περιέχει τον εγκέφαλο και το πρόσωπο.",
                    "examples": [
                        "Φοράω καπέλο στο κεφάλι.",
                        "Έγνεψε με το κεφάλι του."
                    ]
                },
                {
                    "text": "Ο αρχηγός μιας ομάδας ή οργάνωσης.",
                    "examples": [
                        "Είναι η κεφαλή της οικογένειας.",
                        "Ποιος είναι ο προϊστάμενος;"
                    ]
                }
            ]
        },
        {
            "word": "χέρι",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "✋",
            "form": "noun",
            "plural": "χέρια",
            "definitions": [
                {
                    "text": "Το μέρος του σώματος στην άκρη του μπράτσου με τα δάχτυλα.",
                    "examples": [
                        "Πλύνε τα χέρια σου.",
                        "Δώσε μου το χέρι σου."
                    ]
                },
                {
                    "text": "Βοήθεια.",
                    "examples": [
                        "Μπορείς να μου δώσεις ένα χεράκι;",
                        "Χρειάζομαι βοήθεια εδώ."
                    ]
                }
            ]
        },
        {
            "word": "μάτι",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👁️",
            "form": "noun",
            "plural": "μάτια",
            "definitions": [
                {
                    "text": "Το όργανο της όρασης.",
                    "examples": [
                        "Κλείσε τα μάτια σου.",
                        "Έχει μπλε μάτια."
                    ]
                }
            ]
        },
        {
            "word": "μύτη",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👃",
            "form": "noun",
            "plural": "μύτες"
        },
        {
            "word": "στόμα",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👄",
            "form": "noun",
            "plural": "στόμες"
        },
        {
            "word": "αυτί",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "👂",
            "form": "noun",
            "plural": "αυτί"
        },
        {
            "word": "ώμος",
            "level": "elementary",
            "theme": "health_body_A2",
            "form": "noun",
            "plural": "ώμοι"
        },
        {
            "word": "προγραμματιστής",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "προγραμματιστής"
        },
        {
            "word": "ψυχολόγος",
            "level": "upper-intermediate",
            "theme": "academic_vocabulary_B2",
            "emoji": "🧠",
            "form": "noun",
            "plural": "ψυχολόγοι"
        },
        {
            "word": "φιλόσοφος",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🧐",
            "form": "noun",
            "plural": "φιλόσοφοι"
        },
        {
            "word": "πανεπιστήμιο",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "🎓",
            "form": "noun",
            "plural": "πανεπιστήμια",
            "definitions": [
                {
                    "text": "Ένα ανώτατο εκπαιδευτικό ίδρυμα.",
                    "examples": [
                        "Σπουδάζει στο πανεπιστήμιο.",
                        "Το πανεπιστήμιο έχει μια μεγάλη βιβλιοθήκη."
                    ]
                }
            ]
        },
        {
            "word": "συνάδελφος",
            "level": "intermediate",
            "theme": "career_development_B1",
            "emoji": "👥",
            "form": "noun",
            "plural": "συνάδελφοι"
        },
        {
            "word": "βιώσιμος",
            "level": "upper-intermediate",
            "theme": "environment_policy_B2",
            "emoji": "🌱",
            "form": "noun",
            "plural": "βιώσιμοι"
        },
        {
            "word": "υποδομή",
            "level": "advanced",
            "theme": "science_tech_society_C1",
            "emoji": "🏗️",
            "form": "noun",
            "plural": "υποδομή"
        },
        {
            "word": "αλλαγή παραδείγματος",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "emoji": "🔄",
            "form": "noun",
            "plural": "αλλαγή παραδείγματοι"
        },
        {
            "word": "τηλεργασία",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "💻",
            "form": "noun",
            "plural": "τηλεργασίες"
        },
        {
            "word": "παγκόσμια θέρμανση",
            "level": "intermediate",
            "theme": "environment_sustainability_B1",
            "emoji": "🌡️",
            "form": "noun",
            "plural": "παγκόσμια θέρμανσες"
        },
        {
            "word": "τεχνητή νοημοσύνη",
            "level": "upper-intermediate",
            "theme": "technology_privacy_B2",
            "emoji": "🤖",
            "form": "noun",
            "plural": "τεχνητή νοημοσύνες"
        },
        {
            "word": "ψυχική υγεία",
            "level": "intermediate",
            "theme": "mental_health_B1",
            "emoji": "🧠",
            "form": "noun",
            "definitions": [
                {
                    "text": "Η κατάσταση της συναισθηματικής και ψυχολογικής ευεξίας.",
                    "examples": [
                        "Η ψυχική υγεία είναι εξίσου σημαντική με τη σωματική.",
                        "Πρέπει να φροντίζουμε την ψυχική μας υγεία."
                    ]
                }
            ]
        },
        {
            "word": "τοπική κουζίνα",
            "level": "elementary",
            "theme": "diet_nutrition_A2",
            "emoji": "🍜",
            "form": "noun",
            "definitions": [
                {
                    "text": "Παραδοσιακό φαγητό από μια συγκεκριμένη περιοχή.",
                    "examples": [
                        "Μου αρέσει να δοκιμάζω την τοπική κουζίνα.",
                        "Η τοπική κουζίνα εδώ είναι πολύ πικάντικη."
                    ]
                },
                {
                    "text": "Η δοκιμή της τοπικής κουζίνας είναι ένα υπέροχο μέρος του ταξιδιού.",
                    "examples": [
                        "Η τοπική κουζίνα χρησιμοποιεί φρέσκα υλικά από την περιοχή."
                    ]
                }
            ]
        },
        {
            "word": "μητέρα",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👩",
            "form": "noun",
            "definitions": [
                {
                    "text": "Η γυναίκα που είναι γονέας σου.",
                    "examples": [
                        "Η μητέρα μου είναι καλή.",
                        "Αγαπώ τη μητέρα μου."
                    ]
                },
                {
                    "text": "Αυτό το άτομο είναι συνήθως η σύζυγος του πατέρα σου (ή άλλου γονέα).",
                    "examples": [
                        "Οι μητέρες φροντίζουν τα παιδιά τους."
                    ]
                }
            ]
        },
        {
            "word": "πατέρας",
            "level": "starter",
            "theme": "immediate_family_A0",
            "emoji": "👨",
            "form": "noun",
            "definitions": [
                {
                    "text": "Ο άνδρας που είναι γονέας σου.",
                    "examples": [
                        "Ο πατέρας μου εργάζεται.",
                        "Ο πατέρας του είναι ψηλός."
                    ]
                },
                {
                    "text": "Αυτό το άτομο είναι συνήθως ο σύζυγος της μητέρας σου (ή άλλου γονέα).",
                    "examples": [
                        "Ο πατέρας μου δουλεύει πολύ."
                    ]
                }
            ]
        },
        {
            "word": "σπίτι",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "article": "το",
            "baseWord": "σπίτι",
            "numberPlural": "πολλά σπίτι",
            "answer": "πολλά σπίτια",
            "emoji": "🏠",
            "form": "adjective",
            "plural": "σπίτια"
        },
        {
            "word": "γυναίκα",
            "level": "starter",
            "theme": "adjectives_A0",
            "article": "η",
            "baseWord": "γυναίκα",
            "numberPlural": "3 γυναίκα",
            "answer": "τρεις γυναίκες",
            "emoji": "👩",
            "form": "noun",
            "plural": "τρεις γυναίκες",
            "definitions": [
                {
                    "text": "Ένας ενήλικος θηλυκός άνθρωπος.",
                    "examples": [
                        "Είναι μια πολύ δυνατή γυναίκα.",
                        "Υπάρχουν τρεις γυναίκες στο γραφείο."
                    ]
                }
            ]
        },
        {
            "word": "άνδρας",
            "level": "starter",
            "theme": "adjectives_A0",
            "article": "ο",
            "baseWord": "άνδρας",
            "numberPlural": "2 άνδρας",
            "answer": "δύο άνδρες",
            "emoji": "👨",
            "form": "noun",
            "plural": "άνδρες",
            "definitions": [
                {
                    "text": "Ένας ενήλικος αρσενικός άνθρωπος.",
                    "examples": [
                        "Αυτός ο άνδρας είναι ο δάσκαλός μου.",
                        "Ένας ψηλός άνδρας στέκεται εκεί."
                    ]
                }
            ]
        },
        {
            "word": "παιδί",
            "level": "starter",
            "theme": "adjectives_A0",
            "article": "το",
            "baseWord": "παιδί",
            "numberPlural": "πολλά παιδί",
            "answer": "πολλά παιδιά",
            "emoji": "🧒",
            "form": "noun",
            "plural": "παιδιά",
            "definitions": [
                {
                    "text": "Ένας νεαρός άνθρωπος που δεν είναι ακόμη ενήλικας.",
                    "examples": [
                        "Το παιδί παίζει με ένα παιχνίδι.",
                        "Πόσα παιδιά έχουν;"
                    ]
                }
            ]
        },
        {
            "word": "κάνω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "subtext": "κάνω μαθήματα, κάνω σπορ",
            "form": "noun",
            "plural": "κάνω"
        },
        {
            "word": "δουλεύω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💼",
            "subtext": "δουλεύω σε γραφείο, δουλεύω σκληρά",
            "form": "noun",
            "plural": "δουλεύω"
        },
        {
            "word": "μιλάω",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💬",
            "subtext": "μιλάω αγγλικά, μιλάω αργά",
            "form": "noun",
            "plural": "μιλάω"
        },
        {
            "word": "ξέρω",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🧠",
            "subtext": "ξέρω την απάντηση, ξέρω ένα άτομο",
            "form": "noun",
            "plural": "ξέρω"
        },
        {
            "word": "σκέφτομαι",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💭",
            "subtext": "σκέφτομαι για, σκέφτομαι ότι",
            "form": "noun",
            "plural": "σκέφτομαια"
        },
        {
            "word": "θέλω",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🙏",
            "subtext": "θέλω νερό, θέλω να πάω",
            "form": "noun",
            "plural": "θέλω"
        },
        {
            "word": "μου αρέσει",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "👍",
            "subtext": "μου αρέσει η σοκολάτα, μου αρέσει να χορεύω",
            "form": "noun",
            "plural": "μου αρέσεια"
        },
        {
            "word": "αγαπώ",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❤️",
            "subtext": "αγαπώ την οικογένειά μου, αγαπώ τα ταξίδια",
            "form": "noun",
            "plural": "αγαπώ"
        },
        {
            "word": "διαβάζω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "subtext": "διαβάζω ένα βιβλίο, διαβάζω τις ειδήσεις",
            "opposite": "γράφω",
            "oppositeEmoji": "✍️",
            "form": "noun",
            "plural": "διαβάζω"
        },
        {
            "word": "γράφω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "✍️",
            "subtext": "γράφω ένα γράμμα, γράφω ένα μήνυμα",
            "opposite": "διαβάζω",
            "oppositeEmoji": "📖",
            "form": "noun",
            "plural": "γράφω"
        },
        {
            "word": "έρχομαι",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏃‍♂️",
            "subtext": "έλα εδώ, έλα σπίτι",
            "opposite": "πηγαίνω",
            "oppositeEmoji": "🚶",
            "form": "noun",
            "plural": "έρχομαια"
        },
        {
            "word": "δίνω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎁",
            "subtext": "δίνω ένα δώρο, δίνω βοήθεια",
            "opposite": "παίρνω",
            "oppositeEmoji": "👜",
            "form": "noun",
            "plural": "δίνω"
        },
        {
            "word": "παίρνω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📥",
            "subtext": "παίρνω λεωφορείο, βγάζω φωτογραφία",
            "opposite": "δίνω",
            "oppositeEmoji": "🎁",
            "form": "noun",
            "plural": "παίρνω"
        },
        {
            "word": "βρίσκω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔍",
            "form": "noun",
            "plural": "βρίσκω"
        },
        {
            "word": "λέω",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🗣️",
            "form": "adjective"
        },
        {
            "word": "ρωτάω",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "❓",
            "form": "adjective"
        },
        {
            "word": "φαίνομαι",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🤔",
            "form": "adjective"
        },
        {
            "word": "νιώθω",
            "level": "starter",
            "theme": "body_A0",
            "emoji": "🌡️",
            "form": "adjective"
        },
        {
            "word": "προσπαθώ",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎯",
            "form": "noun",
            "plural": "προσπαθώ"
        },
        {
            "word": "φεύγω",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🚪",
            "form": "noun",
            "plural": "φεύγω"
        },
        {
            "word": "καλώ",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📞",
            "form": "noun",
            "plural": "καλώ"
        },
        {
            "word": "κοιτάζω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "👀",
            "form": "noun",
            "plural": "κοιτάζω"
        },
        {
            "word": "χρησιμοποιώ",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🛠️",
            "form": "noun",
            "plural": "χρησιμοποιώ"
        },
        {
            "word": "γίνομαι",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🦋",
            "form": "noun",
            "plural": "γίνομαια"
        },
        {
            "word": "αρχίζω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "▶️",
            "opposite": "τελειώνω",
            "oppositeEmoji": "🏁",
            "form": "noun",
            "plural": "αρχίζω"
        },
        {
            "word": "παίζω",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🎮",
            "form": "noun",
            "plural": "παίζω"
        },
        {
            "word": "τρέχω",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏃",
            "form": "noun",
            "plural": "τρέχω"
        },
        {
            "word": "κουνώ",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "📦",
            "form": "noun",
            "plural": "κουνώ"
        },
        {
            "word": "ζω",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🏠",
            "opposite": "πεθαίνω",
            "oppositeEmoji": "⚰️",
            "form": "noun",
            "plural": "ζω"
        },
        {
            "word": "πιστεύω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🙏",
            "form": "noun",
            "plural": "πιστεύω"
        },
        {
            "word": "φέρνω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🎁",
            "form": "noun",
            "plural": "φέρνω"
        },
        {
            "word": "συμβαίνω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "⚡",
            "form": "noun",
            "plural": "συμβαίνω"
        },
        {
            "word": "κάθομαι",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🪑",
            "opposite": "στέκομαι",
            "oppositeEmoji": "🧍",
            "form": "noun",
            "plural": "κάθομαια"
        },
        {
            "word": "στέκομαι",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🧍",
            "opposite": "κάθομαι",
            "oppositeEmoji": "🪑",
            "form": "noun",
            "plural": "στέκομαια"
        },
        {
            "word": "χάνω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📉",
            "opposite": "νικάω",
            "oppositeEmoji": "🏆",
            "form": "noun",
            "plural": "χάνω"
        },
        {
            "word": "πληρώνω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💰",
            "form": "adjective"
        },
        {
            "word": "συναντώ",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🤝",
            "form": "noun",
            "plural": "συναντώ"
        },
        {
            "word": "περιλαμβάνω",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "➕",
            "form": "noun",
            "plural": "περιλαμβάνω"
        },
        {
            "word": "συνεχίζω",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "➡️",
            "form": "noun",
            "plural": "συνεχίζω"
        },
        {
            "word": "θέτω",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "⚙️",
            "form": "noun",
            "plural": "θέτω"
        },
        {
            "word": "μαθαίνω",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📚",
            "form": "noun",
            "plural": "μαθαίνω"
        },
        {
            "word": "αλλάζω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "🔄",
            "form": "noun",
            "plural": "αλλάζω"
        },
        {
            "word": "οδηγώ",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "👑",
            "form": "noun",
            "plural": "οδηγώ"
        },
        {
            "word": "καταλαβαίνω",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "💡",
            "form": "noun",
            "plural": "καταλαβαίνω"
        },
        {
            "word": "παρακολουθώ",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "📺",
            "form": "noun",
            "plural": "παρακολουθώ",
            "definitions": [
                {
                    "text": "Η πράξη του να κοιτάζεις κάτι για ένα χρονικό διάστημα.",
                    "examples": [
                        "Η παρακολούθηση τηλεόρασης είναι χαλαρωτική.",
                        "Χρειάζεται προσεκτική παρακολούθηση."
                    ]
                }
            ]
        },
        {
            "word": "ακολουθώ",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "👣",
            "form": "adjective"
        },
        {
            "word": "σταματάω",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🛑",
            "form": "noun",
            "plural": "σταματάω"
        },
        {
            "word": "δημιουργώ",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "emoji": "✨",
            "form": "noun",
            "plural": "δημιουργώ"
        },
        {
            "word": "επιτρέπω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "✅",
            "form": "noun",
            "plural": "επιτρέπω"
        },
        {
            "word": "προσθέτω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "➕",
            "form": "noun",
            "plural": "προσθέτω"
        },
        {
            "word": "ξοδεύω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "💸",
            "form": "noun",
            "plural": "ξοδεύω"
        },
        {
            "word": "μεγαλώνω",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "🌱",
            "form": "noun",
            "plural": "μεγαλώνω"
        },
        {
            "word": "ανοίγω",
            "level": "starter",
            "theme": "home_A0",
            "emoji": "📖",
            "opposite": "κλείνω",
            "oppositeEmoji": "🔒",
            "form": "noun",
            "plural": "ανοίγω"
        },
        {
            "word": "νικάω",
            "level": "starter",
            "theme": "places_buildings_activities_A2",
            "emoji": "🏆",
            "opposite": "χάνω",
            "oppositeEmoji": "📉",
            "form": "noun",
            "plural": "νικάω"
        },
        {
            "word": "προσφέρω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🤲",
            "form": "noun",
            "plural": "προσφέρω"
        },
        {
            "word": "θυμάμαι",
            "level": "starter",
            "theme": "adjectives_A0",
            "emoji": "🧠",
            "form": "noun",
            "plural": "θυμάμαια"
        },
        {
            "word": "θεωρώ",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🤔",
            "form": "noun",
            "plural": "θεωρώ"
        },
        {
            "word": "εμφανίζομαι",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "👻",
            "form": "noun",
            "plural": "εμφανίζομαια"
        }
    ]
};
    window.vocabularyData = { ...window.vocabularyData, ...data };
})();

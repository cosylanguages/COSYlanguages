// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "κήπος",
        "image": "images/vocabulary/places/garden.png",
        "level": "elementary",
        "theme": "local_places_services_A1",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "definitions": [
            {
                "text": "Ένας δημόσιος κήπος ή πάρκο.",
                "examples": []
            }
        ],
        "countability": "countable",
        "translation": "garden",
        "language": "el"
    },
    {
        "word": "καλλιτέχνης",
        "level": "elementary",
        "theme": "art_design_A2",
        "article": "ο",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "plural": "καλλιτέχνες",
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
        ],
        "translation": "artist",
        "language": "el"
    },
    {
        "word": "σεφ",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "article": "ο",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "chef",
        "language": "el"
    },
    {
        "word": "χωριάτικη σαλάτα",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "η",
        "form": "noun",
        "classification": "regular",
        "plural": "χωριάτικες σαλάτες",
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
        ],
        "translation": "Greek salad",
        "language": "el"
    },
    {
        "word": "γεμιστά",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "τα",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "stuffed vegetables",
        "language": "el"
    },
    {
        "word": "τυρί",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "το",
        "emoji": "🧀",
        "form": "noun",
        "classification": "regular",
        "plural": "τυριά",
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
        ],
        "translation": "cheese",
        "language": "el"
    },
    {
        "word": "ρύζι",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "το",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "rice",
        "language": "el"
    },
    {
        "word": "ντομάτα",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "η",
        "emoji": "🍅",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "tomato",
        "language": "el"
    },
    {
        "word": "πατάτα",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "η",
        "emoji": "🥔",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "potato",
        "language": "el"
    },
    {
        "word": "κρασί",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "το",
        "baseWord": "κρασί",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "wine",
        "language": "el"
    },
    {
        "word": "μπίρα",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "η",
        "baseWord": "μπίρα",
        "emoji": "🍺",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "beer",
        "language": "el"
    },
    {
        "word": "νοσοκομείο",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "article": "το",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "hospital",
        "language": "el"
    },
    {
        "word": "κινηματογράφος",
        "level": "elementary",
        "theme": "theatre_performance_A2",
        "article": "ο",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "cinema",
        "language": "el"
    },
    {
        "word": "εστιατόριο",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "article": "το",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "restaurant",
        "language": "el"
    },
    {
        "word": "σούπερ μάρκετ",
        "level": "elementary",
        "theme": "shopping_for_food_A2",
        "article": "το",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "supermarket",
        "language": "el"
    },
    {
        "word": "φόρεμα",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "article": "το",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "φορέματα",
        "translation": "dress",
        "language": "el"
    },
    {
        "word": "σακάκι",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "article": "το",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "plural": "σακάκια",
        "translation": "jacket",
        "language": "el"
    },
    {
        "word": "φούστα",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "article": "η",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "φούστες",
        "translation": "skirt",
        "language": "el"
    },
    {
        "word": "καναπές",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "ο",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "plural": "καναπέδες",
        "translation": "sofa",
        "language": "el"
    },
    {
        "word": "λάμπα",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "η",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": "λάμπες",
        "translation": "lamp",
        "language": "el"
    },
    {
        "word": "γραφείο",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "το",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "plural": "γραφεία",
        "translation": "desk",
        "language": "el"
    },
    {
        "word": "πλένω τα δόντια",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "noun",
        "classification": "regular",
        "translation": "brush teeth",
        "language": "el"
    },
    {
        "word": "κάνω ντους",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "noun",
        "classification": "regular",
        "translation": "take a shower",
        "language": "el"
    },
    {
        "word": "ρολόι",
        "level": "elementary",
        "theme": "accessories_A1",
        "article": "το",
        "form": "noun",
        "classification": "regular",
        "plural": "ρολόγια",
        "translation": "watch",
        "language": "el"
    },
    {
        "word": "πορτοφόλι",
        "level": "elementary",
        "theme": "accessories_A1",
        "article": "το",
        "emoji": "👛",
        "form": "noun",
        "classification": "regular",
        "plural": "πορτοφόλια",
        "definitions": [
            {
                "text": "Μια μικρή θήκη για να φυλάμε χρήματα και κάρτες.",
                "examples": [
                    "Έχασα το πορτοφόλι μου.",
                    "Βάλε τα χρήματα στο πορτοφόλι."
                ]
            }
        ],
        "translation": "wallet",
        "language": "el"
    },
    {
        "word": "γυαλιά",
        "level": "elementary",
        "theme": "accessories_A1",
        "article": "τα",
        "emoji": "👓",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "glasses",
        "language": "el"
    },
    {
        "word": "λιοντάρι",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "article": "το",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "plural": "λιοντάρια",
        "definitions": [
            {
                "text": "Ένα μεγάλο άγριο αιλουροειδές που ζει στην Αφρική και αποκαλείται 'ο βασιλιάς της ζούγκλας'.",
                "examples": [
                    "Το λιοντάρι είναι πολύ δυνατό.",
                    "Είδαμε ένα λιοντάρι στο ζωολογικό κήπο."
                ]
            }
        ],
        "translation": "lion",
        "language": "el"
    },
    {
        "word": "τίγρης",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "article": "ο",
        "emoji": "🐯",
        "form": "noun",
        "classification": "regular",
        "plural": "τίγρεις",
        "translation": "tiger",
        "language": "el"
    },
    {
        "word": "ζωγραφική",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "article": "η",
        "form": "noun",
        "classification": "regular",
        "plural": "ζωγραφικές",
        "translation": "painting",
        "language": "el"
    },
    {
        "word": "μαγειρική",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "article": "η",
        "form": "noun",
        "classification": "regular",
        "plural": "μαγειρικές",
        "translation": "cooking",
        "language": "el"
    },
    {
        "word": "ώμος",
        "level": "elementary",
        "theme": "body_parts_A1",
        "article": "ο",
        "form": "noun",
        "classification": "regular",
        "plural": "ώμοι",
        "translation": "shoulder",
        "language": "el"
    },
    {
        "word": "πανεπιστήμιο",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "plural": "πανεπιστήμια",
        "definitions": [
            {
                "text": "Ένα ανώτατο εκπαιδευτικό ίδρυμα.",
                "examples": [
                    "Σπουδάζει στο πανεπιστήμιο.",
                    "Το πανεπιστήμιο έχει μια μεγάλη βιβλιοθήκη."
                ]
            }
        ],
        "translation": "university",
        "language": "el"
    },
    {
        "word": "τοπική κουζίνα",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "η",
        "emoji": "🍜",
        "form": "noun",
        "classification": "regular",
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
        ],
        "translation": "local cuisine",
        "language": "el"
    },
    {
        "word": "φαίνομαι",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤔",
        "form": "verb",
        "translation": "seem",
        "language": "el"
    },
    {
        "word": "γίνομαι",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦋",
        "form": "verb",
        "translation": "become",
        "language": "el"
    },
    {
        "word": "κουνώ",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb",
        "translation": "move",
        "language": "el"
    },
    {
        "word": "πιστεύω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb",
        "translation": "believe",
        "language": "el"
    },
    {
        "word": "συμβαίνω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "translation": "συμβαίνω",
        "language": "el"
    },
    {
        "word": "περιλαμβάνω",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb",
        "translation": "include",
        "language": "el"
    },
    {
        "word": "συνεχίζω",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb",
        "translation": "continue",
        "language": "el"
    },
    {
        "word": "θέτω",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb",
        "translation": "set",
        "language": "el"
    },
    {
        "word": "οδηγώ",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👑",
        "form": "verb",
        "translation": "lead",
        "language": "el"
    },
    {
        "word": "ακολουθώ",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb",
        "translation": "follow",
        "language": "el"
    },
    {
        "word": "δημιουργώ",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb",
        "translation": "create",
        "language": "el"
    },
    {
        "word": "επιτρέπω",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb",
        "translation": "allow",
        "language": "el"
    },
    {
        "word": "μεγαλώνω",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb",
        "translation": "grow",
        "language": "el"
    },
    {
        "word": "προσφέρω",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb",
        "translation": "offer",
        "language": "el"
    },
    {
        "word": "θεωρώ",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤔",
        "form": "verb",
        "translation": "consider",
        "language": "el"
    },
    {
        "word": "εμφανίζομαι",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "translation": "appear",
        "language": "el"
    },
    {
        "word": "υπερωρίες",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏰",
        "form": "noun",
        "classification": "regular",
        "article": "οι",
        "plural": "υπερωρίες",
        "definitions": [
            {
                "text": "Επιπλέον ώρες εργασίας πέρα από το κανονικό ωράριο.",
                "examples": [
                    "Δουλεύει υπερωρίες για να τελειώσει το έργο."
                ]
            }
        ],
        "translation": "overtime",
        "language": "el"
    },
    {
        "word": "προαγωγή",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "προαγωγές",
        "definitions": [
            {
                "text": "Η μετακίνηση σε μια ανώτερη και καλύτερα αμειβόμενη θέση εργασίας στην ίδια εταιρεία.",
                "examples": [
                    "Πήρε προαγωγή τον περασμένο μήνα."
                ]
            }
        ],
        "translation": "promotion",
        "language": "el"
    },
    {
        "word": "συνέντευξη",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "συνεντεύξεις",
        "definitions": [
            {
                "text": "Μια επίσημη συνάντηση όπου κάποιος δέχεται ερωτήσεις για μια θέση εργασίας.",
                "examples": [
                    "Έχω μια συνέντευξη για δουλειά τη Δευτέρα."
                ]
            }
        ],
        "translation": "interview",
        "language": "el"
    },
    {
        "word": "συμβόλαιο",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📄",
        "form": "noun",
        "classification": "regular",
        "article": "το",
        "plural": "συμβόλαια",
        "definitions": [
            {
                "text": "Μια γραπτή συμφωνία μεταξύ εργοδότη και εργαζομένου.",
                "examples": [
                    "Υπέγραψε ένα διετές συμβόλαιο."
                ]
            }
        ],
        "translation": "contract",
        "language": "el"
    },
    {
        "word": "προθεσμία",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "προθεσμίες",
        "definitions": [
            {
                "text": "Ο τελευταίος χρόνος μέχρι τον οποίο πρέπει να έχει τελειώσει μια εργασία.",
                "examples": [
                    "Η προθεσμία είναι την Παρασκευή."
                ]
            }
        ],
        "translation": "deadline",
        "language": "el"
    },
    {
        "word": "εμπειρία",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "εμπειρίες",
        "definitions": [
            {
                "text": "Γνώση ή δεξιότητα που αποκτάται από την εξάσκηση μιας δραστηριότητας.",
                "examples": [
                    "Έχει πέντε χρόνια εμπειρίας."
                ]
            }
        ],
        "translation": "experience",
        "language": "el"
    },
    {
        "word": "στεγαστικό δάνειο",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "article": "το",
        "plural": "στεγαστικά δάνεια",
        "definitions": [
            {
                "text": "Δάνειο από τράπεζα για την αγορά σπιτιού ή διαμερίσματος.",
                "examples": [
                    "Έχουν ένα μεγάλο στεγαστικό δάνειο."
                ]
            }
        ],
        "translation": "mortgage",
        "language": "el"
    },
    {
        "word": "δάνειο",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "article": "το",
        "plural": "δάνεια",
        "definitions": [
            {
                "text": "Χρήματα που δανείζεσαι από μια τράπεζα και πρέπει να επιστραφούν.",
                "examples": [
                    "Πήρε δάνειο για να αγοράσει αυτοκίνητο."
                ]
            }
        ],
        "translation": "loan",
        "language": "el"
    },
    {
        "word": "λογαριασμός",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🧾",
        "form": "noun",
        "classification": "regular",
        "article": "ο",
        "plural": "λογαριασμοί",
        "definitions": [
            {
                "text": "Ένα έγγραφο που δείχνει πόσα χρήματα πρέπει να πληρώσεις.",
                "examples": [
                    "Πληρώνω τον λογαριασμό του ρεύματος κάθε μήνα."
                ]
            }
        ],
        "translation": "bill",
        "language": "el"
    },
    {
        "word": "χρέος",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "noun",
        "classification": "regular",
        "article": "το",
        "plural": "χρέη",
        "definitions": [
            {
                "text": "Χρήματα που χρωστάς σε άλλο άτομο ή τράπεζα.",
                "examples": [
                    "Έχει πολλά χρέη."
                ]
            }
        ],
        "translation": "debt",
        "language": "el"
    },
    {
        "word": "τραπεζικός λογαριασμός",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "article": "ο",
        "plural": "τραπεζικοί λογαριασμοί",
        "definitions": [
            {
                "text": "Μια συμφωνία με μια τράπεζα για τη φύλαξη των χρημάτων σου.",
                "examples": [
                    "Έχω έναν αποταμιευτικό λογαριασμό."
                ]
            }
        ],
        "translation": "bank account",
        "language": "el"
    },
    {
        "word": "προϋπολογισμός",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "noun",
        "classification": "regular",
        "article": "ο",
        "plural": "προϋπολογισμοί",
        "definitions": [
            {
                "text": "Ένα σχέδιο για το πώς θα ξοδευτούν τα χρήματα.",
                "examples": [
                    "Χρειαζόμαστε έναν μηνιαίο προϋπολογισμό."
                ]
            }
        ],
        "translation": "budget",
        "language": "el"
    },
    {
        "word": "διατροφή",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥗",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "διατροφές",
        "definitions": [
            {
                "text": "Το φαγητό που τρώει συνήθως ένα άτομο ή ένα ειδικό πρόγραμμα διατροφής.",
                "examples": [
                    "Κάνει μια υγιεινή διατροφή."
                ]
            }
        ],
        "translation": "diet",
        "language": "el"
    },
    {
        "word": "ραντεβού",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "article": "το",
        "plural": "ραντεβού",
        "definitions": [
            {
                "text": "Μια ώρα που κανονίζεις να συναντήσεις κάποιον, για παράδειγμα έναν γιατρό.",
                "examples": [
                    "Έχω ραντεβού με τον γιατρό την Τρίτη."
                ]
            }
        ],
        "translation": "appointment",
        "language": "el"
    },
    {
        "word": "βιταμίνη",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "βιταμίνες",
        "definitions": [
            {
                "text": "Μια φυσική ουσία στα τρόφιμα που χρειάζεται το σώμα σου για να παραμείνει υγιές.",
                "examples": [
                    "Τα πορτοκάλια περιέχουν βιταμίνη C."
                ]
            }
        ],
        "translation": "vitamin",
        "language": "el"
    },
    {
        "word": "πόνος",
        "level": "elementary",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "form": "noun",
        "classification": "regular",
        "article": "ο",
        "plural": "πόνοι",
        "definitions": [
            {
                "text": "Ένα δυσάρεστο συναίσθημα στο σώμα σου όταν κάτι δεν πάει καλά.",
                "examples": [
                    "Έχει πόνο στην πλάτη."
                ]
            }
        ],
        "translation": "pain",
        "language": "el"
    },
    {
        "word": "υποστήριξη",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "definitions": [
            {
                "text": "Βοήθεια ή ενθάρρυνση που δίνεται σε κάποιον.",
                "examples": [
                    "Χρειάζομαι την υποστήριξή σου."
                ]
            }
        ],
        "translation": "support",
        "language": "el"
    },
    {
        "word": "εμπιστοσύνη",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "definitions": [
            {
                "text": "Η πεποίθηση ότι κάποιος είναι ειλικρινής και αξιόπιστος.",
                "examples": [
                    "Η εμπιστοσύνη είναι σημαντική σε μια σχέση."
                ]
            }
        ],
        "translation": "trust",
        "language": "el"
    },
    {
        "word": "συμβιβασμός",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "article": "ο",
        "plural": "συμβιβασμοί",
        "definitions": [
            {
                "text": "Μια συμφωνία όπου και οι δύο πλευρές δέχονται λιγότερα από όσα ήθελαν.",
                "examples": [
                    "Οι καλές σχέσεις χρειάζονται συμβιβασμό."
                ]
            }
        ],
        "translation": "compromise",
        "language": "el"
    },
    {
        "word": "ταξίδι",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "article": "το",
        "plural": "ταξίδια",
        "definitions": [
            {
                "text": "Μετάβαση από ένα μέρος σε άλλο.",
                "examples": [
                    "Το ταξίδι για τη δουλειά διαρκεί 40 λεπτά."
                ]
            }
        ],
        "translation": "journey",
        "language": "el"
    },
    {
        "word": "στο εξωτερικό",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Σε ή προς μια άλλη χώρα.",
                "examples": [
                    "Πηγαίνουν στο εξωτερικό κάθε καλοκαίρι."
                ]
            }
        ],
        "translation": "abroad",
        "language": "el"
    },
    {
        "word": "προορισμός",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "article": "ο",
        "plural": "προορισμοί",
        "definitions": [
            {
                "text": "Το μέρος στο οποίο ταξιδεύετε.",
                "examples": [
                    "Το Παρίσι είναι δημοφιλής προορισμός."
                ]
            }
        ],
        "translation": "destination",
        "language": "el"
    },
    {
        "word": "πτήση",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "πτήσεις",
        "definitions": [
            {
                "text": "Ένα ταξίδι που γίνεται με αεροπλάνο.",
                "examples": [
                    "Η πτήση για το Λονδίνο διαρκεί δύο ώρες."
                ]
            }
        ],
        "translation": "flight",
        "language": "el"
    },
    {
        "word": "αποσκευές",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "article": "οι",
        "plural": "αποσκευές",
        "definitions": [
            {
                "text": "Τσάντες και βαλίτσες που παίρνετε μαζί σας όταν ταξιδεύετε.",
                "examples": [
                    "Έχει πολλές αποσκευές."
                ]
            }
        ],
        "translation": "luggage",
        "language": "el"
    },
    {
        "word": "γειτονιά",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "γειτονιές",
        "definitions": [
            {
                "text": "Η περιοχή γύρω από το σπίτι σου.",
                "examples": [
                    "Μένουμε σε μια ασφαλή γειτονιά."
                ]
            }
        ],
        "translation": "neighbourhood",
        "language": "el"
    },
    {
        "word": "κοινότητα",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "👥",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "plural": "κοινότητες",
        "definitions": [
            {
                "text": "Μια ομάδα ανθρώπων που ζουν στην ίδια περιοχή ή μοιράζονται ενδιαφέροντα.",
                "examples": [
                    "Είναι δραστήρια στην τοπική της κοινότητα."
                ]
            }
        ],
        "translation": "community",
        "language": "el"
    },
    {
        "word": "ρύπανση",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🏭",
        "form": "noun",
        "classification": "regular",
        "article": "η",
        "definitions": [
            {
                "text": "Ζημιά στο περιβάλλον που προκαλείται από επιβλαβείς ουσίες.",
                "examples": [
                    "Η ατμοσφαιρική ρύπανση είναι μεγάλο πρόβλημα εδώ."
                ]
            }
        ],
        "translation": "pollution",
        "language": "el"
    }
];
})();

// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "κήπος",
        "level": "elementary",
        "theme": "furniture",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_places_023"
    },
    {
        "word": "καλλιτέχνης",
        "level": "elementary",
        "theme": "art_culture",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_art_culture_001"
    },
    {
        "word": "σεφ",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_020"
    },
    {
        "word": "χωριάτικη σαλάτα",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "emoji": "❓",
        "id": "el_elementary_food_drink_021"
    },
    {
        "word": "γεμιστά",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "emoji": "❓",
        "id": "el_elementary_food_drink_022"
    },
    {
        "word": "τυρί",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_023"
    },
    {
        "word": "ρύζι",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_024"
    },
    {
        "word": "ντομάτα",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_025"
    },
    {
        "word": "πατάτα",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_026"
    },
    {
        "word": "κρασί",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_027"
    },
    {
        "word": "μπίρα",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_028"
    },
    {
        "word": "νοσοκομείο",
        "level": "elementary",
        "theme": "health_medicine",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_health_medicine_012"
    },
    {
        "word": "κινηματογράφος",
        "level": "elementary",
        "theme": "art_culture",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_art_culture_002"
    },
    {
        "word": "εστιατόριο",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_029"
    },
    {
        "word": "σούπερ μάρκετ",
        "level": "elementary",
        "theme": "shopping",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_shopping_001"
    },
    {
        "word": "φόρεμα",
        "level": "elementary",
        "theme": "shopping",
        "article": "το",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "φορέματα",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "φόρεμα",
                "examples": []
            }
        ],
        "id": "el_elementary_shopping_002"
    },
    {
        "word": "σακάκι",
        "level": "elementary",
        "theme": "shopping",
        "article": "το",
        "emoji": "🧥",
        "form": "noun",
        "classification": "regular",
        "plural": "σακάκια",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "σακάκι",
                "examples": []
            }
        ],
        "id": "el_elementary_shopping_003"
    },
    {
        "word": "φούστα",
        "level": "elementary",
        "theme": "shopping",
        "article": "η",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "plural": "φούστες",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "φούστα",
                "examples": []
            }
        ],
        "id": "el_elementary_shopping_004"
    },
    {
        "word": "καναπές",
        "level": "elementary",
        "theme": "furniture",
        "article": "ο",
        "emoji": "🛋️",
        "form": "noun",
        "classification": "regular",
        "plural": "καναπέδες",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "καναπές",
                "examples": []
            }
        ],
        "id": "el_elementary_furniture_001"
    },
    {
        "word": "λάμπα",
        "level": "elementary",
        "theme": "furniture",
        "article": "η",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "plural": "λάμπες",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "λάμπα",
                "examples": []
            }
        ],
        "id": "el_elementary_furniture_002"
    },
    {
        "word": "γραφείο",
        "level": "elementary",
        "theme": "furniture",
        "article": "το",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "plural": "γραφεία",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "γραφείο",
                "examples": []
            }
        ],
        "id": "el_elementary_furniture_003"
    },
    {
        "word": "πλένω τα δόντια",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🪥",
        "form": "noun",
        "classification": "regular",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "πλένω τα δόντια",
                "examples": []
            }
        ],
        "id": "el_elementary_furniture_004"
    },
    {
        "word": "κάνω ντους",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🚿",
        "form": "noun",
        "classification": "regular",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "κάνω ντους",
                "examples": []
            }
        ],
        "id": "el_elementary_furniture_005"
    },
    {
        "word": "ρολόι",
        "level": "elementary",
        "theme": "clothes",
        "article": "το",
        "form": "noun",
        "classification": "regular",
        "plural": "ρολόγια",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ρολόι",
                "examples": []
            }
        ],
        "id": "el_elementary_clothes_001"
    },
    {
        "word": "πορτοφόλι",
        "level": "elementary",
        "theme": "clothes",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_clothes_002"
    },
    {
        "word": "γυαλιά",
        "level": "elementary",
        "theme": "clothes",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_clothes_003"
    },
    {
        "word": "λιοντάρι",
        "level": "elementary",
        "theme": "animals",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_animals_004"
    },
    {
        "word": "τίγρης",
        "level": "elementary",
        "theme": "animals",
        "article": "ο",
        "emoji": "🐯",
        "form": "noun",
        "classification": "regular",
        "plural": "τίγρεις",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "τίγρης",
                "examples": []
            }
        ],
        "id": "el_elementary_animals_005"
    },
    {
        "word": "ζωγραφική",
        "level": "elementary",
        "theme": "social",
        "article": "η",
        "form": "noun",
        "classification": "regular",
        "plural": "ζωγραφικές",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ζωγραφική",
                "examples": []
            }
        ],
        "id": "el_elementary_social_020"
    },
    {
        "word": "μαγειρική",
        "level": "elementary",
        "theme": "social",
        "article": "η",
        "form": "noun",
        "classification": "regular",
        "plural": "μαγειρικές",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "μαγειρική",
                "examples": []
            }
        ],
        "id": "el_elementary_social_021"
    },
    {
        "word": "ώμος",
        "level": "elementary",
        "theme": "health_medicine",
        "article": "ο",
        "form": "noun",
        "classification": "regular",
        "plural": "ώμοι",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "emoji": "❓",
        "definitions": [
            {
                "text": "ώμος",
                "examples": []
            }
        ],
        "id": "el_elementary_body_001"
    },
    {
        "word": "πανεπιστήμιο",
        "level": "elementary",
        "theme": "jobs",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_040"
    },
    {
        "word": "τοπική κουζίνα",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_030"
    },
    {
        "word": "φαίνομαι",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤔",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "φαίνομαι",
                "examples": []
            }
        ],
        "id": "el_elementary_people_020"
    },
    {
        "word": "γίνομαι",
        "level": "elementary",
        "theme": "people",
        "emoji": "🦋",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "γίνομαι",
                "examples": []
            }
        ],
        "id": "el_elementary_people_021"
    },
    {
        "word": "κουνώ",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "📦",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "κουνώ",
                "examples": []
            }
        ],
        "id": "el_elementary_furniture_006"
    },
    {
        "word": "πιστεύω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙏",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "πιστεύω",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_001"
    },
    {
        "word": "συμβαίνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚡",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "συμβαίνω",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_002"
    },
    {
        "word": "περιλαμβάνω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➕",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "περιλαμβάνω",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_003"
    },
    {
        "word": "συνεχίζω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➡️",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "συνεχίζω",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_004"
    },
    {
        "word": "θέτω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚙️",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "θέτω",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_005"
    },
    {
        "word": "οδηγώ",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👑",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "οδηγώ",
                "examples": []
            }
        ],
        "id": "el_elementary_work_041"
    },
    {
        "word": "ακολουθώ",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👣",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ακολουθώ",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_006"
    },
    {
        "word": "δημιουργώ",
        "level": "elementary",
        "theme": "social",
        "emoji": "✨",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "δημιουργώ",
                "examples": []
            }
        ],
        "id": "el_elementary_social_022"
    },
    {
        "word": "επιτρέπω",
        "level": "elementary",
        "theme": "describing",
        "emoji": "✅",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "επιτρέπω",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_007"
    },
    {
        "word": "μεγαλώνω",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌱",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "μεγαλώνω",
                "examples": []
            }
        ],
        "id": "el_elementary_environment_006"
    },
    {
        "word": "προσφέρω",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤲",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "προσφέρω",
                "examples": []
            }
        ],
        "id": "el_elementary_people_022"
    },
    {
        "word": "θεωρώ",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤔",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "θεωρώ",
                "examples": []
            }
        ],
        "id": "el_elementary_people_023"
    },
    {
        "word": "εμφανίζομαι",
        "level": "elementary",
        "theme": "people",
        "emoji": "👻",
        "form": "verb",
        "language": "el",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "εμφανίζομαι",
                "examples": []
            }
        ],
        "id": "el_elementary_people_024"
    },
    {
        "word": "υπερωρίες",
        "level": "elementary",
        "theme": "jobs",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_042"
    },
    {
        "word": "προαγωγή",
        "level": "elementary",
        "theme": "jobs",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_043"
    },
    {
        "word": "συνέντευξη",
        "level": "elementary",
        "theme": "jobs",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_044"
    },
    {
        "word": "συμβόλαιο",
        "level": "elementary",
        "theme": "jobs",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_045"
    },
    {
        "word": "προθεσμία",
        "level": "elementary",
        "theme": "jobs",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_046"
    },
    {
        "word": "εμπειρία",
        "level": "elementary",
        "theme": "jobs",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_work_047"
    },
    {
        "word": "στεγαστικό δάνειο",
        "level": "elementary",
        "theme": "numbers",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_001"
    },
    {
        "word": "δάνειο",
        "level": "elementary",
        "theme": "numbers",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_002"
    },
    {
        "word": "λογαριασμός",
        "level": "elementary",
        "theme": "numbers",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_003"
    },
    {
        "word": "χρέος",
        "level": "elementary",
        "theme": "numbers",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_004"
    },
    {
        "word": "τραπεζικός λογαριασμός",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏦",
        "form": "phrase",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_005"
    },
    {
        "word": "προϋπολογισμός",
        "level": "elementary",
        "theme": "numbers",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_numbers_006"
    },
    {
        "word": "διατροφή",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_031"
    },
    {
        "word": "ραντεβού",
        "level": "elementary",
        "theme": "health_medicine",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_health_medicine_013"
    },
    {
        "word": "βιταμίνη",
        "level": "elementary",
        "theme": "food_drink",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_food_drink_032"
    },
    {
        "word": "πόνος",
        "level": "elementary",
        "theme": "health_medicine",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_health_medicine_014"
    },
    {
        "word": "υποστήριξη",
        "level": "elementary",
        "theme": "people",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_025"
    },
    {
        "word": "εμπιστοσύνη",
        "level": "elementary",
        "theme": "people",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_026"
    },
    {
        "word": "συμβιβασμός",
        "level": "elementary",
        "theme": "people",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_people_027"
    },
    {
        "word": "ταξίδι",
        "level": "elementary",
        "theme": "travel",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_travel_023"
    },
    {
        "word": "στο εξωτερικό",
        "level": "elementary",
        "theme": "travel",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_travel_024"
    },
    {
        "word": "προορισμός",
        "level": "elementary",
        "theme": "travel",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_travel_025"
    },
    {
        "word": "πτήση",
        "level": "elementary",
        "theme": "travel",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_travel_026"
    },
    {
        "word": "αποσκευές",
        "level": "elementary",
        "theme": "travel",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_travel_027"
    },
    {
        "word": "γειτονιά",
        "level": "elementary",
        "theme": "furniture",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_places_024"
    },
    {
        "word": "κοινότητα",
        "level": "elementary",
        "theme": "furniture",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_places_025"
    },
    {
        "word": "ρύπανση",
        "level": "elementary",
        "theme": "nature",
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
        "language": "el",
        "lang": "el",
        "transcription": "",
        "id": "el_elementary_environment_007"
    }
];
})();

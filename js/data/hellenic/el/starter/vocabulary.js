(function() {
    const data = [
    {
        "word": "γιατρός",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "ο",
        "gender": "masculine",
        "numberPlural": "2 γιατρός",
        "answer": "δύο γιατροί",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "γιατροί",
        "subtext": "",
        "synonyms": [
            "βλέπω γιατρό",
            "παθολόγος"
        ],
        "definitions": [
            {
                "text": "Ένα άτομο που βοηθά τους άρρωστους ανθρώπους.",
                "examples": [
                    "Ο γιατρός είναι στο νοσοκομείο.",
                    "Πρέπει να δω έναν γιατρό."
                ]
            }
        ],
        "transcription": "/ʝaˈtros/",
        "countability": "countable"
    },
    {
        "word": "μπράτσο",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "💪",
        "form": "noun",
        "plural": "μπράτσα",
        "subtext": "σπασμένο μπράτσο, αριστερό μπράτσο",
        "definitions": [
            {
                "text": "Το μέρος του σώματος από τον ώμο μέχρι το χέρι.",
                "examples": [
                    "Έσπασε το μπράτσο της."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "πόδι",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "numberPlural": "2 πόδι",
        "answer": "δύο πόδια",
        "emoji": "🦶",
        "form": "noun",
        "plural": "πόδια",
        "definitions": [
            {
                "text": "Το κάτω μέρος του ποδιού ή ολόκληρο το άκρο.",
                "examples": [
                    "Έχω δύο πόδια.",
                    "Πονάει το πόδι μου."
                ]
            }
        ],
        "transcription": "/ˈpoði/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "δάσκαλος",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "δάσκαλοι",
        "subtext": "δάσκαλος αγγλικών, σχολείο",
        "definitions": [
            {
                "text": "Ένα άτομο που σε βοηθά να μάθεις νέα πράγματα.",
                "examples": [
                    "Ο δάσκαλος είναι στην τάξη.",
                    "Ο δάσκαλος μου είναι πολύ καλός."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "μήλο",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍎",
        "numberPlural": "4 μήλο",
        "answer": "τέσσερα μήλα",
        "form": "noun",
        "plural": "μήλα",
        "definitions": [
            {
                "text": "Ένα στρογγυλό φρούτο, κόκκινο ή πράσινο.",
                "examples": [
                    "Τρώω ένα μήλο κάθε μέρα."
                ]
            }
        ],
        "transcription": "/ˈmilo/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "ψωμί",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍞",
        "form": "noun",
        "plural": null,
        "subtext": "φρέσκο ψωμί, φραντζόλα",
        "definitions": [
            {
                "text": "Ένα βασικό τρόφιμο φτιαγμένο από αλεύρι και νερό.",
                "examples": [
                    "Θέλω λίγο ψωμί.",
                    "Αγοράζω ψωμί από τον φούρνο."
                ]
            }
        ],
        "countability": "uncountable"
    },
    {
        "word": "αυγό",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥚",
        "form": "noun",
        "plural": "αυγά",
        "subtext": "βραστό αυγό, ομελέτα",
        "definitions": [
            {
                "text": "Ένα ωοειδές αντικείμενο που γεννά η κότα.",
                "examples": [
                    "Τρώω ένα αυγό για πρωινό."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "γάλα",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥛",
        "form": "noun",
        "plural": null,
        "subtext": "ένα ποτήρι γάλα, φρέσκο γάλα",
        "definitions": [
            {
                "text": "Ένα λευκό υγρό που παράγουν οι αγελάδες.",
                "examples": [
                    "Πίνω γάλα το πρωί."
                ]
            }
        ],
        "countability": "uncountable"
    },
    {
        "word": "ρύζι",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍚",
        "form": "noun",
        "plural": null,
        "subtext": "άσπρο ρύζι, πιλάφι",
        "definitions": [
            {
                "text": "Μικροί λευκοί σπόροι που μαγειρεύονται και τρώγονται.",
                "examples": [
                    "Τρώμε ρύζι με το φαγητό."
                ]
            }
        ],
        "transcription": "/ˈrizi/",
        "countability": "uncountable"
    },
    {
        "word": "κρέας",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "subtext": "φρέσκο κρέας, μοσχάρι, κοτόπουλο",
        "definitions": [
            {
                "text": "Τροφή που προέρχεται από ζώα.",
                "examples": [
                    "Δεν τρώω κρέας."
                ]
            }
        ],
        "transcription": "/ˈkreas/",
        "countability": "uncountable"
    },
    {
        "word": "φαγητό",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍲",
        "form": "noun",
        "plural": "φαγητά",
        "definitions": [
            {
                "text": "Κάτι που τρώμε.",
                "examples": [
                    "Το φαγητό είναι έτοιμο."
                ]
            }
        ],
        "countability": "uncountable",
        "subtext": ""
    },
    {
        "word": "καφές",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "plural": null,
        "subtext": "μαύρος καφές, ένα φλιτζάνι καφέ",
        "definitions": [
            {
                "text": "Ένα ζεστό σκούρο ρόφημα από καβουρδισμένους κόκκους.",
                "examples": [
                    "Πίνω καφέ κάθε πρωί."
                ]
            }
        ],
        "countability": "uncountable"
    },
    {
        "word": "τσάι",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍵",
        "form": "noun",
        "plural": null,
        "subtext": "πράσινο τσάι, ένα φλιτζάνι τσάι",
        "definitions": [
            {
                "text": "Ένα ζεστό ρόφημα από φύλλα τσαγιού και νερό.",
                "examples": [
                    "Πίνω τσάι το βράδυ."
                ]
            }
        ],
        "countability": "uncountable"
    },
    {
        "word": "νερό",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "subtext": "κρύο νερό, ένα ποτήρι νερό",
        "definitions": [
            {
                "text": "Ένα διαυγές υγρό που χρειαζόμαστε για να ζήσουμε.",
                "examples": [
                    "Πίνω πολύ νερό."
                ]
            }
        ],
        "countability": "uncountable"
    },
    {
        "word": "καρέκλα",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "plural": "καρέκλες",
        "subtext": "ξύλινη καρέκλα, κάθομαι σε καρέκλα",
        "definitions": [
            {
                "text": "Ένα έπιπλο για να κάθεται ένα άτομο.",
                "examples": [
                    "Παρακαλώ καθίστε στην καρέκλα."
                ]
            }
        ],
        "transcription": "/kaˈreka/",
        "countability": "countable"
    },
    {
        "word": "τραπέζι",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🪑",
        "form": "noun",
        "plural": "τραπέζια",
        "subtext": "τραπέζι κουζίνας, πάνω στο τραπέζι",
        "definitions": [
            {
                "text": "Ένα έπιπλο με επιφάνεια και πόδια για φαγητό ή εργασία.",
                "examples": [
                    "Το φαγητό είναι στο τραπέζι."
                ]
            }
        ],
        "transcription": "/traˈpezi/",
        "countability": "countable"
    },
    {
        "word": "κρεβάτι",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "κρεβάτια",
        "subtext": "άνετο κρεβάτι, πάω για ύπνο",
        "definitions": [
            {
                "text": "Ένα έπιπλο για ύπνο.",
                "examples": [
                    "Το κρεβάτι μου είναι άνετο."
                ]
            }
        ],
        "transcription": "/kreˈvati/",
        "countability": "countable"
    },
    {
        "word": "μαγαζί",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🛒",
        "form": "noun",
        "plural": "μαγαζιά",
        "subtext": "",
        "synonyms": [
            "κατάστημα",
            "ψωνίζω"
        ],
        "definitions": [
            {
                "text": "Ένα μέρος όπου αγοράζεις πράγματα.",
                "examples": [
                    "Το μαγαζί είναι ανοιχτό."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "κεφάλι",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👤",
        "form": "noun",
        "plural": "κεφάλια",
        "subtext": "το κεφάλι μου πονάει, κουνάω το κεφάλι",
        "definitions": [
            {
                "text": "Το πάνω μέρος του σώματος όπου είναι ο εγκέφαλος.",
                "examples": [
                    "Φοράω καπέλο στο κεφάλι."
                ]
            }
        ],
        "transcription": "/ceˈfali/",
        "countability": "countable"
    },
    {
        "word": "χέρι",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "✋",
        "form": "noun",
        "plural": "χέρια",
        "subtext": "κρατάω το χέρι, δεξί χέρι, πλένω τα χέρια",
        "definitions": [
            {
                "text": "Το μέρος του σώματος από τον ώμο μέχρι τα δάχτυλα.",
                "examples": [
                    "Δώσε μου το χέρι σου."
                ]
            }
        ],
        "transcription": "/ˈçeri/",
        "countability": "countable"
    },
    {
        "word": "μάτι",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👁️",
        "form": "noun",
        "plural": "μάτια",
        "subtext": "μπλε μάτια, ανοίγω τα μάτια",
        "definitions": [
            {
                "text": "Το μέρος του σώματος με το οποίο βλέπουμε.",
                "examples": [
                    "Έχει γαλανά μάτια."
                ]
            }
        ],
        "transcription": "/ˈmati/",
        "countability": "countable"
    },
    {
        "word": "στόμα",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👄",
        "form": "noun",
        "plural": "στόματα",
        "subtext": "ανοίγω το στόμα",
        "definitions": [
            {
                "text": "Το μέρος του προσώπου για φαγητό και ομιλία.",
                "examples": [
                    "Άνοιξε το στόμα σου."
                ]
            }
        ],
        "transcription": "/ˈstoma/",
        "countability": "countable"
    },
    {
        "word": "αυτί",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👂",
        "form": "noun",
        "plural": "αυτιά",
        "subtext": "το αυτί μου πονάει",
        "definitions": [
            {
                "text": "Το μέρος του σώματος με το οποίο ακούμε.",
                "examples": [
                    "Έχω δύο αυτιά."
                ]
            }
        ],
        "transcription": "/afˈti/",
        "countability": "countable"
    },
    {
        "word": "πλάτη",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🚶",
        "form": "noun",
        "plural": "πλάτες",
        "subtext": "πόνος στην πλάτη, ξαπλώνω ανάσκελα",
        "definitions": [
            {
                "text": "Το πίσω μέρος του σώματος.",
                "examples": [
                    "Έχω πόνο στην πλάτη."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "σπίτι",
        "image": "images/vocabulary/go home.png",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏡",
        "form": "noun",
        "plural": "σπίτια",
        "subtext": "στο σπίτι, πάω σπίτι",
        "definitions": [
            {
                "text": "Το κτίριο όπου μένει μια οικογένεια.",
                "examples": [
                    "Μένω σε ένα μεγάλο σπίτι."
                ]
            }
        ],
        "transcription": "/ˈspiti/",
        "countability": "countable"
    },
    {
        "word": "διαμέρισμα",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏢",
        "form": "noun",
        "plural": "διαμερίσματα",
        "subtext": "φλατ, μένω σε διαμέρισμα",
        "definitions": [
            {
                "text": "Ένα σύνολο δωματίων σε έναν όροφο κτιρίου.",
                "examples": [
                    "Το διαμέρισμα είναι μικρό."
                ]
            }
        ],
        "transcription": "/ðiaˈmerizma/",
        "countability": "countable"
    },
    {
        "word": "γραφείο",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏢",
        "form": "noun",
        "plural": "γραφεία",
        "subtext": "δουλεύω σε γραφείο",
        "definitions": [
            {
                "text": "Ένας χώρος εργασίας.",
                "examples": [
                    "Το γραφείο μου είναι στο κέντρο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "αυτοκίνητο",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚗",
        "form": "noun",
        "plural": "αυτοκίνητα",
        "subtext": "αμάξι, οδηγώ αυτοκίνητο",
        "definitions": [
            {
                "text": "Ένα όχημα με τέσσερις τροχούς.",
                "examples": [
                    "Έχω ένα κόκκινο αυτοκίνητο."
                ]
            }
        ],
        "transcription": "/aftoˈcinito/",
        "countability": "countable"
    },
    {
        "word": "λεωφορείο",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚌",
        "form": "noun",
        "plural": "λεωφορεία",
        "subtext": "παίρνω το λεωφορείο, στάση λεωφορείου",
        "definitions": [
            {
                "text": "Ένα μεγάλο όχημα για πολλούς επιβάτες.",
                "examples": [
                    "Πηγαίνω στη δουλειά με το λεωφορείο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "τρένο",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚆",
        "form": "noun",
        "plural": "τρένα",
        "subtext": "ταξιδεύω με τρένο, σταθμός",
        "definitions": [
            {
                "text": "Ένα όχημα που κινείται πάνω σε ράγες.",
                "examples": [
                    "Το τρένο είναι γρήγορο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "λεφτά",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "τα",
        "gender": "neuter",
        "emoji": "💰",
        "form": "noun",
        "plural": null,
        "subtext": "χρήματα, ξοδεύω λεφτά",
        "definitions": [
            {
                "text": "Νομίσματα και χαρτονομίσματα.",
                "examples": [
                    "Δεν έχω λεφτά σήμερα."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "πρωί",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌅",
        "form": "noun",
        "plural": "πρωινά",
        "subtext": "νωρίς το πρωί, καλημέρα",
        "definitions": [
            {
                "text": "Το πρώτο μέρος της ημέρας.",
                "examples": [
                    "Δουλεύω το πρωί."
                ]
            }
        ],
        "transcription": "/proˈi/",
        "countability": "countable"
    },
    {
        "word": "απόγευμα",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌆",
        "form": "noun",
        "plural": "απογεύματα",
        "subtext": "",
        "synonyms": [
            "καλησπέρα"
        ],
        "definitions": [
            {
                "text": "Το μέρος της ημέρας μετά το μεσημέρι.",
                "examples": [
                    "Θα σε δω το απόγευμα."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "βδομάδα",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "plural": "βδομάδες",
        "subtext": "",
        "synonyms": [
            "εβδομάδα"
        ],
        "definitions": [
            {
                "text": "Μια περίοδος επτά ημερών.",
                "examples": [
                    "Δουλεύω πέντε μέρες τη βδομάδα."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "δωμάτιο",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚪",
        "form": "noun",
        "plural": "δωμάτια",
        "definitions": [
            {
                "text": "Ένας ξεχωριστός χώρος σε ένα κτίριο.",
                "examples": [
                    "Το διαμέρισμα έχει τρία δωμάτια."
                ]
            }
        ],
        "transcription": "/ðoˈmatio/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "κουζίνα",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "plural": "κουζίνες",
        "definitions": [
            {
                "text": "Ο χώρος του σπιτιού όπου μαγειρεύουμε.",
                "examples": [
                    "Μαγειρεύω στην κουζίνα."
                ]
            }
        ],
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "τιμή",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "τιμές",
        "subtext": "",
        "synonyms": [
            "κόστος"
        ],
        "definitions": [
            {
                "text": "Το ποσό των χρημάτων που πληρώνεις για κάτι.",
                "examples": [
                    "Η τιμή είναι υψηλή."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "πόρτα",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "plural": "πόρτες",
        "subtext": "ανοίγω την πόρτα",
        "definitions": [
            {
                "text": "Κάτι που ανοίγει και κλείνει για να μπούμε σε ένα χώρο.",
                "examples": [
                    "Παρακαλώ κλείστε την πόρτα."
                ]
            }
        ],
        "transcription": "/ˈporda/",
        "countability": "countable"
    },
    {
        "word": "παράθυρο",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🪟",
        "form": "noun",
        "plural": "παράθυρα",
        "subtext": "ανοίγω το παράθυρο",
        "definitions": [
            {
                "text": "Ένα άνοιγμα στον τοίχο με τζάμι.",
                "examples": [
                    "Άνοιξε το παράθυρο, κάνει ζέστη."
                ]
            }
        ],
        "transcription": "/paˈraθiro/",
        "countability": "countable"
    },
    {
        "word": "νοσοκομείο",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏥",
        "form": "noun",
        "plural": "νοσοκομεία",
        "definitions": [
            {
                "text": "Μέρος όπου περιθάλπονται οι ασθενείς.",
                "examples": [
                    "Πήγε στο νοσοκομείο."
                ]
            }
        ],
        "transcription": "/nosocoˈmio/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "εστιατόριο",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍴",
        "form": "noun",
        "plural": "εστιατόρια",
        "definitions": [
            {
                "text": "Μέρος όπου τρως πληρώνοντας.",
                "examples": [
                    "Πάμε σε ένα εστιατόριο."
                ]
            }
        ],
        "transcription": "/estiaˈtorio/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "τράπεζα",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "plural": "τράπεζες",
        "definitions": [
            {
                "text": "Μέρος όπου φυλάσσονται χρήματα.",
                "examples": [
                    "Η τράπεζα είναι κοντά."
                ]
            }
        ],
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "σταθμός",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🚉",
        "form": "noun",
        "plural": "σταθμοί",
        "subtext": "σταθμός τρένων",
        "definitions": [
            {
                "text": "Κτίριο όπου σταματούν τρένα ή λεωφορεία.",
                "examples": [
                    "Ο σταθμός είναι δέκα λεπτά από εδώ."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "σούπερ μάρκετ",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🛒",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Ένα μεγάλο κατάστημα τροφίμων.",
                "examples": [
                    "Πάω στο σούπερ μάρκετ τα Σάββατα."
                ]
            }
        ],
        "transcription": "/ˈsuper ˈmarcet/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "ήλιος",
        "level": "starter",
        "theme": "weather_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "ήλιοι",
        "definitions": [
            {
                "text": "Το αστέρι που δίνει φως και ζέστη την ημέρα.",
                "examples": [
                    "Ο ήλιος είναι πολύ δυνατός σήμερα."
                ]
            }
        ],
        "transcription": "/ˈilios/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "βροχή",
        "level": "starter",
        "theme": "weather_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "plural": "βροχές",
        "definitions": [
            {
                "text": "Το νερό που πέφτει από τα σύννεφα.",
                "examples": [
                    "Έχει πολλή βροχή το φθινόπωρο."
                ]
            }
        ],
        "transcription": "/vroˈçi/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "αέρας",
        "level": "starter",
        "theme": "weather_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "plural": "αέρηδες",
        "subtext": "",
        "synonyms": [
            "άνεμος"
        ],
        "definitions": [
            {
                "text": "Ο αέρας που κινείται, ο άνεμος.",
                "examples": [
                    "Φυσάει δυνατός αέρας."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "βράδυ",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌃",
        "form": "noun",
        "plural": "βράδια",
        "subtext": "",
        "synonyms": [
            "εσπέρα",
            "καλησπέρα"
        ],
        "definitions": [
            {
                "text": "Το τελευταίο μέρος της ημέρας.",
                "examples": [
                    "Τρώμε βραδινό το βράδυ."
                ]
            }
        ],
        "transcription": "/ˈvraði/",
        "countability": "countable"
    },
    {
        "word": "νύχτα",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "plural": "νύχτες",
        "subtext": "",
        "synonyms": [
            "καληνύχτα"
        ],
        "definitions": [
            {
                "text": "Η περίοδος του σκότους μεταξύ απογεύματος και πρωινού.",
                "examples": [
                    "Κοιμάμαι οκτώ ώρες κάθε νύχτα."
                ]
            }
        ],
        "transcription": "/ˈnixta/",
        "countability": "countable"
    },
    {
        "word": "φρούτο",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍎",
        "form": "noun",
        "plural": "φρούτα",
        "subtext": "φρέσκο φρούτο, χυμός φρούτων",
        "definitions": [
            {
                "text": "Το γλυκό μέρος ενός φυτού που περιέχει σπόρους.",
                "examples": [
                    "Τα φρούτα είναι υγιεινά."
                ]
            }
        ],
        "transcription": "/ˈfruto/",
        "countability": "countable"
    },
    {
        "word": "λαχανικό",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥦",
        "form": "noun",
        "plural": "λαχανικά",
        "subtext": "φρέσκα λαχανικά, πράσινα λαχανικά",
        "definitions": [
            {
                "text": "Φυτό που τρώγεται ως τροφή, όπως το καρότο.",
                "examples": [
                    "Τρώει λαχανικά κάθε μέρα."
                ]
            }
        ],
        "transcription": "/laxaniˈko/",
        "countability": "countable"
    },
    {
        "word": "μπύρα",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "plural": "μπύρες",
        "subtext": "κρύα μπύρα",
        "definitions": [
            {
                "text": "Ένα δημοφιλές αλκοολούχο ποτό.",
                "examples": [
                    "Πίνει μια μπύρα το Σαββατοκύριακο."
                ]
            }
        ],
        "transcription": "/ˈbira/",
        "countability": "uncountable"
    },
    {
        "word": "κρασί",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍷",
        "form": "noun",
        "plural": "κρασιά",
        "subtext": "κόκκινο κρασί, λευκό κρασί",
        "definitions": [
            {
                "text": "Ένα αλκοολούχο ποτό από σταφύλια.",
                "examples": [
                    "Πίνει ένα ποτήρι κρασί το βράδυ."
                ]
            }
        ],
        "transcription": "/kraˈsi/",
        "countability": "uncountable"
    },
    {
        "word": "νοσοκόμα",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "νοσοκόμες",
        "definitions": [
            {
                "text": "Άτομο εκπαιδευμένο να φροντίζει αρρώστους.",
                "examples": [
                    "Η νοσοκόμα ελέγχει την πίεση."
                ]
            }
        ],
        "transcription": "/nosoˈkoma/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "οδηγός",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "plural": "οδηγοί",
        "subtext": "οδηγός λεωφορείου, ταξί",
        "definitions": [
            {
                "text": "Άτομο που οδηγεί ένα όχημα ως επάγγελμα.",
                "examples": [
                    "Ο οδηγός του λεωφορείου ήταν ευγενικός."
                ]
            }
        ],
        "transcription": "/oðiˈɣos/",
        "countability": "countable"
    },
    {
        "word": "μάγειρας",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "μάγειρες",
        "subtext": "",
        "synonyms": [
            "σεφ"
        ],
        "definitions": [
            {
                "text": "Επαγγελματίας που μαγειρεύει φαγητά.",
                "examples": [
                    "Ο μάγειρας φτιάχνει εξαιρετικό φαγητό."
                ]
            }
        ],
        "transcription": "/ˈmaʝiras/",
        "countability": "countable"
    },
    {
        "word": "διευθυντής",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "διευθυντές",
        "subtext": "",
        "synonyms": [
            "μάνατζερ"
        ],
        "definitions": [
            {
                "text": "Άτομο που είναι υπεύθυνο για μια ομάδα ή επιχείρηση.",
                "examples": [
                    "Ο διευθυντής μου δουλεύει πολλές ώρες."
                ]
            }
        ],
        "transcription": "/ðiefθinˈdis/",
        "countability": "countable"
    },
    {
        "word": "αεροπλάνο",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "✈️",
        "form": "noun",
        "plural": "αεροπλάνα",
        "definitions": [
            {
                "text": "Ένα όχημα με φτερά που πετάει.",
                "examples": [
                    "Το αεροπλάνο προσγειώνεται στις εννέα."
                ]
            }
        ],
        "transcription": "/aeroplano/",
        "countability": "countable",
        "subtext": ""
    },
    {
        "word": "ποδήλατο",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚲",
        "form": "noun",
        "plural": "ποδήλατα",
        "subtext": "κάνω ποδήλατο",
        "definitions": [
            {
                "text": "Όχημα με δύο τροχούς που κινείται με πεντάλ.",
                "examples": [
                    "Πηγαίνει στη δουλειά με το ποδήλατο."
                ]
            }
        ],
        "transcription": "/poˈðilato/",
        "countability": "countable"
    },
    {
        "word": "σύντροφος",
        "level": "starter",
        "theme": "marital_status_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "💑",
        "form": "noun",
        "plural": "σύντροφοι",
        "subtext": "",
        "synonyms": [
            "παρτενέρ",
            "σύζυγος"
        ],
        "definitions": [
            {
                "text": "Το άτομο με το οποίο ζεις ή έχεις σχέση.",
                "examples": [
                    "Ο σύντροφός μου δουλεύει εδώ."
                ]
            }
        ],
        "transcription": "/ˈsindrofos/",
        "countability": "countable"
    },
    {
        "word": "άντρας",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "άντρες",
        "subtext": "",
        "synonyms": [
            "σύζυγος"
        ],
        "definitions": [
            {
                "text": "Ένας ενήλικος άνδρας ή ο σύζυγος.",
                "examples": [
                    "Ο άντρας της είναι γιατρός."
                ]
            }
        ],
        "transcription": "/ˈandras/",
        "countability": "countable"
    },
    {
        "word": "γυναίκα",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "γυναίκες",
        "subtext": "",
        "synonyms": [
            "σύζυγος"
        ],
        "definitions": [
            {
                "text": "Μια ενήλικη γυναίκα ή η σύζυγος.",
                "examples": [
                    "Η γυναίκα του είναι δασκάλα."
                ]
            }
        ],
        "transcription": "/ʝiˈneka/",
        "countability": "countable"
    },
    {
        "word": "παιδί",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👶",
        "form": "noun",
        "plural": "παιδιά",
        "subtext": "",
        "synonyms": [
            "γιος ή κόρη"
        ],
        "definitions": [
            {
                "text": "Ένας νέος άνθρωπος, γιος ή κόρη.",
                "examples": [
                    "Έχουν δύο παιδιά."
                ]
            }
        ],
        "transcription": "/peˈði/",
        "countability": "countable"
    },
    {
        "word": "γονέας",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "plural": "γονείς",
        "subtext": "",
        "synonyms": [
            "μητέρα ή πατέρας"
        ],
        "definitions": [
            {
                "text": "Η μητέρα ή ο πατέρας.",
                "examples": [
                    "Οι γονείς μου μένουν στην Αθήνα."
                ]
            }
        ],
        "transcription": "/ɣoˈneas/",
        "countability": "countable"
    },
    {
        "word": "πίτσα",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍕",
        "form": "noun",
        "plural": "πίτσες",
        "subtext": "παραγγέλνω πίτσα",
        "definitions": [
            {
                "text": "Ένα δημοφιλές ιταλικό φαγητό.",
                "examples": [
                    "Θέλεις πίτσα;"
                ]
            }
        ],
        "transcription": "/ˈpitsa/",
        "countability": "countable"
    },
    {
        "word": "ζυμαρικά",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "τα",
        "gender": "neuter",
        "emoji": "🍝",
        "form": "noun",
        "plural": "ζυμαρικά",
        "subtext": "",
        "synonyms": [
            "μακαρόνια και πέννες"
        ],
        "definitions": [
            {
                "text": "Ιταλικό φαγητό από αλεύρι.",
                "examples": [
                    "Μου αρέσουν τα ζυμαρικά."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "μπανάνα",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍌",
        "form": "noun",
        "plural": "μπανάνες",
        "subtext": "",
        "synonyms": [
            "κίτρινο φρούτο"
        ],
        "definitions": [
            {
                "text": "Ένα μακρόστενο κίτρινο φρούτο.",
                "examples": [
                    "Τρώω μια μπανάνα."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "χυμός",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "plural": "χυμοί",
        "subtext": "χυμός πορτοκάλι",
        "definitions": [
            {
                "text": "Υγρό από φρούτα.",
                "examples": [
                    "Θέλεις χυμό;"
                ]
            }
        ],
        "countability": "uncountable"
    },
    {
        "word": "πάρκο",
        "level": "starter",
        "theme": "local_places_services_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏞️",
        "form": "noun",
        "plural": "πάρκα",
        "subtext": "πηγαίνω στο πάρκο",
        "definitions": [
            {
                "text": "Ένας χώρος με πράσινο στην πόλη.",
                "examples": [
                    "Περπατάω στο πάρκο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "σχολείο",
        "image": "images/vocabulary/go to school.png",
        "level": "starter",
        "theme": "school_subjects_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏫",
        "form": "noun",
        "plural": "σχολεία",
        "subtext": "πηγαίνω σχολείο",
        "definitions": [
            {
                "text": "Τόπος μάθησης.",
                "examples": [
                    "Το σχολείο είναι κλειστό."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "μπλουζάκι",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👕",
        "form": "noun",
        "plural": "μπλουζάκια",
        "subtext": "βαμβακερό μπλουζάκι",
        "definitions": [
            {
                "text": "Ένα ελαφρύ ρούχο.",
                "examples": [
                    "Φοράω ένα μπλε μπλουζάκι."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "παντελόνι",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👖",
        "form": "noun",
        "plural": "παντελόνια",
        "subtext": "μακρύ παντελόνι",
        "definitions": [
            {
                "text": "Ρούχο για τα πόδια.",
                "examples": [
                    "Το παντελόνι είναι νέο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "παπούτσι",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👞",
        "form": "noun",
        "plural": "παπούτσια",
        "subtext": "",
        "synonyms": [
            "ζευγάρι παπούτσια"
        ],
        "definitions": [
            {
                "text": "Κάλυμμα για το πόδι.",
                "examples": [
                    "Χρειάζομαι νέα παπούτσια."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "καπέλο",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👒",
        "form": "noun",
        "plural": "καπέλα",
        "subtext": "φοράω καπέλο",
        "definitions": [
            {
                "text": "Κάλυμμα κεφαλής.",
                "examples": [
                    "Πού είναι το καπέλο μου;"
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "κλειδί",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🔑",
        "form": "noun",
        "plural": "κλειδιά",
        "subtext": "το κλειδί του σπιτιού",
        "definitions": [
            {
                "text": "Αντικείμενο για το άνοιγμα πόρτας.",
                "examples": [
                    "Έχασα τα κλειδιά μου."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "τηλέφωνο",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "☎️",
        "form": "noun",
        "plural": "τηλέφωνα",
        "subtext": "σταθερό τηλέφωνο",
        "definitions": [
            {
                "text": "Συσκευή επικοινωνίας.",
                "examples": [
                    "Πάρε με τηλέφωνο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "βιβλίο",
        "level": "starter",
        "theme": "books_reading_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "📖",
        "form": "noun",
        "plural": "βιβλία",
        "subtext": "διαβάζω ένα βιβλίο",
        "definitions": [
            {
                "text": "Σύνολο τυπωμένων σελίδων.",
                "examples": [
                    "Αυτό το βιβλίο είναι καλό."
                ]
            }
        ],
        "transcription": "/viˈvlio/",
        "countability": "countable"
    },
    {
        "word": "τσάντα",
        "level": "starter",
        "theme": "accessories_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "👜",
        "form": "noun",
        "plural": "τσάντες",
        "subtext": "δερμάτινη τσάντα",
        "definitions": [
            {
                "text": "Αντικείμενο για τη μεταφορά πραγμάτων.",
                "examples": [
                    "Η τσάντα είναι βαριά."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "στυλό",
        "level": "starter",
        "theme": "classroom_language_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "στυλό",
        "subtext": "μπλε στυλό",
        "definitions": [
            {
                "text": "Εργαλείο γραφής.",
                "examples": [
                    "Έχεις ένα στυλό;"
                ]
            }
        ],
        "transcription": "/stiˈlo/",
        "countability": "countable"
    },
    {
        "word": "γάτα",
        "level": "starter",
        "theme": "animals_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🐱",
        "form": "noun",
        "plural": "γάτες",
        "subtext": "",
        "synonyms": [
            "κατοικίδιο ζώο"
        ],
        "definitions": [
            {
                "text": "Ένα μικρό ζώο.",
                "examples": [
                    "Η γάτα κοιμάται."
                ]
            }
        ],
        "transcription": "/ˈɣata/",
        "countability": "countable"
    },
    {
        "word": "σκύλος",
        "level": "starter",
        "theme": "animals_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🐶",
        "form": "noun",
        "plural": "σκύλοι",
        "subtext": "ο καλύτερος φίλος του ανθρώπου",
        "definitions": [
            {
                "text": "Ένα πιστό ζώο.",
                "examples": [
                    "Ο σκύλος παίζει."
                ]
            }
        ],
        "transcription": "/ˈscilos/",
        "countability": "countable"
    },
    {
        "word": "πουλί",
        "level": "starter",
        "theme": "animals_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🐦",
        "form": "noun",
        "plural": "πουλιά",
        "subtext": "το πουλί πετάει",
        "definitions": [
            {
                "text": "Ζώο με φτερά.",
                "examples": [
                    "Ακούω το πουλί."
                ]
            }
        ],
        "transcription": "/puˈli/",
        "countability": "countable"
    },
    {
        "word": "ψάρι",
        "level": "starter",
        "theme": "animals_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🐟",
        "form": "noun",
        "plural": "ψάρια",
        "subtext": "ψάρι στη θάλασσα",
        "definitions": [
            {
                "text": "Ζώο που ζει στο νερό.",
                "examples": [
                    "Τρώω ψάρι."
                ]
            }
        ],
        "transcription": "/ˈpsari/",
        "countability": "countable"
    },
    {
        "word": "πόδι",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🦵",
        "form": "noun",
        "plural": "πόδια",
        "subtext": "πονάει το πόδι μου",
        "definitions": [
            {
                "text": "Μέρος του σώματος για περπάτημα.",
                "examples": [
                    "Έχω δύο πόδια."
                ]
            }
        ],
        "transcription": "/ˈpoði/",
        "countability": "countable"
    },
    {
        "word": "μύτη",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "👃",
        "form": "noun",
        "plural": "μύτες",
        "subtext": "η μύτη μου είναι κόκκινη",
        "definitions": [
            {
                "text": "Μέρος του προσώπου για την αναπνοή.",
                "examples": [
                    "Έχω μικρή μύτη."
                ]
            }
        ],
        "transcription": "/ˈmiti/",
        "countability": "countable"
    },
    {
        "word": "έξυπνο τηλέφωνο",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "📱",
        "form": "noun",
        "plural": "έξυπνα τηλέφωνα",
        "subtext": "χρησιμοποιώ το κινητό μου",
        "definitions": [
            {
                "text": "Ένα σύγχρονο κινητό τηλέφωνο.",
                "examples": [
                    "Το κινητό μου είναι νέο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "μητέρα",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "plural": "μητέρες",
        "subtext": "",
        "synonyms": [
            "η μαμά μου"
        ],
        "definitions": [
            {
                "text": "Γυναίκα γονέας.",
                "examples": [
                    "Η μητέρα μου είναι δασκάλα."
                ]
            }
        ],
        "transcription": "/miˈtera/",
        "countability": "countable"
    },
    {
        "word": "πατέρας",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "plural": "πατέρες",
        "subtext": "",
        "synonyms": [
            "ο μπαμπάς μου"
        ],
        "definitions": [
            {
                "text": "Άνδρας γονέας.",
                "examples": [
                    "Ο πατέρας μου δουλεύει."
                ]
            }
        ],
        "transcription": "/paˈteras/",
        "countability": "countable"
    },
    {
        "word": "δουλειά",
        "image": "images/vocabulary/go to work.png",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "💼",
        "form": "noun",
        "plural": "δουλειές",
        "subtext": "πάω στη δουλειά",
        "definitions": [
            {
                "text": "Επαγγελματική δραστηριότητα.",
                "examples": [
                    "Έχω πολλή δουλειά."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "εργασία",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "plural": "εργασίες",
        "subtext": "",
        "synonyms": [
            "εύρεση εργασίας"
        ],
        "definitions": [
            {
                "text": "Το επάγγελμα κάποιου.",
                "examples": [
                    "Η εργασία μου είναι ενδιαφέρουσα."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "σπίτι",
        "image": "images/vocabulary/go home.png",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏠",
        "form": "noun",
        "plural": "σπίτια",
        "subtext": "μένω στο σπίτι",
        "definitions": [
            {
                "text": "Ο τόπος που ζει κάποιος.",
                "examples": [
                    "Το σπίτι μου είναι μικρό."
                ]
            }
        ],
        "transcription": "/ˈspiti/",
        "countability": "countable"
    },
    {
        "word": "πρωινό",
        "image": "images/vocabulary/have breakfast.png",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍳",
        "form": "noun",
        "plural": "πρωινά",
        "subtext": "τρώω πρωινό",
        "definitions": [
            {
                "text": "Το πρώτο γεύμα της ημέρας.",
                "examples": [
                    "Το πρωινό είναι έτοιμο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "βραδινό",
        "image": "images/vocabulary/have dinner.png",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "βραδινά",
        "subtext": "ένα καλό βραδινό",
        "definitions": [
            {
                "text": "Το τελευταίο γεύμα της ημέρας.",
                "examples": [
                    "Τι θα φάμε για βραδινό;"
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "φίλος",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👬",
        "form": "noun",
        "plural": "φίλοι",
        "subtext": "καλός φίλος",
        "definitions": [
            {
                "text": "Ένα αγαπημένο πρόσωπο.",
                "examples": [
                    "Ο φίλος μου είναι εδώ."
                ]
            }
        ],
        "transcription": "/ˈfilos/",
        "countability": "countable"
    },
    {
        "word": "ημέρα",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "☀️",
        "form": "noun",
        "plural": "ημέρες",
        "subtext": "καλή ημέρα",
        "definitions": [
            {
                "text": "Χρονικό διάστημα 24 ωρών.",
                "examples": [
                    "Η ημέρα είναι μεγάλη."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "μεσημεριανό",
        "image": "images/vocabulary/have lunch.png",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥪",
        "form": "noun",
        "plural": "μεσημεριανά",
        "subtext": "ώρα για μεσημεριανό",
        "definitions": [
            {
                "text": "Το γεύμα το μεσημέρι.",
                "examples": [
                    "Τρώμε μεσημεριανό στις δύο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "αφεντικό",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "👤",
        "form": "noun",
        "plural": "αφεντικά",
        "subtext": "το νέο αφεντικό",
        "definitions": [
            {
                "text": "Ο εργοδότης.",
                "examples": [
                    "Το αφεντικό μου είναι καλό."
                ]
            }
        ],
        "transcription": "/afenˈdiko/",
        "countability": "countable"
    },
    {
        "word": "συνάδελφος",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "plural": "συνάδελφοι",
        "subtext": "",
        "synonyms": [
            "συνεργάζομαι με συναδέλφους"
        ],
        "definitions": [
            {
                "text": "Άτομο που εργάζεται μαζί μας.",
                "examples": [
                    "Ο συνάδελφός μου βοηθάει."
                ]
            }
        ],
        "transcription": "/siˈnaðelfos/",
        "countability": "countable"
    },
    {
        "word": "μισθός",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "plural": "μισθοί",
        "subtext": "καλός μισθός",
        "definitions": [
            {
                "text": "Η πληρωμή για εργασία.",
                "examples": [
                    "Ο μισθός μου είναι ικανοποιητικός."
                ]
            }
        ],
        "transcription": "/misˈθos/",
        "countability": "countable"
    },
    {
        "word": "συνάντηση",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "plural": "συναντήσεις",
        "subtext": "έχω μια συνάντηση",
        "definitions": [
            {
                "text": "Συγκέντρωση ατόμων.",
                "examples": [
                    "Η συνάντηση ξεκινά τώρα."
                ]
            }
        ],
        "transcription": "/siˈnandisi/",
        "countability": "countable"
    },
    {
        "word": "μετακίνηση",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🚆",
        "form": "noun",
        "plural": "μετακινήσεις",
        "subtext": "καθημερινή μετακίνηση",
        "definitions": [
            {
                "text": "Το ταξίδι προς τη δουλειά.",
                "examples": [
                    "Η μετακίνηση διαρκεί μια ώρα."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "άγχος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "😫",
        "form": "noun",
        "subtext": "έχω πολύ άγχος",
        "definitions": [
            {
                "text": "Πίεση και ανησυχία.",
                "examples": [
                    "Το άγχος δεν είναι καλό."
                ]
            }
        ],
        "transcription": "/ˈanxos/",
        "countability": "countable"
    },
    {
        "word": "ενοίκιο",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏠",
        "form": "noun",
        "plural": "ενοίκια",
        "subtext": "πληρώνω ενοίκιο",
        "definitions": [
            {
                "text": "Χρήματα για τη χρήση σπιτιού.",
                "examples": [
                    "Το ενοίκιο είναι ακριβό."
                ]
            }
        ],
        "transcription": "/eˈnicio/",
        "countability": "countable"
    },
    {
        "word": "γείτονας",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "γείτονες",
        "subtext": "καλός γείτονας",
        "definitions": [
            {
                "text": "Άτομο που μένει δίπλα.",
                "examples": [
                    "Ο γείτονας είναι φιλικός."
                ]
            }
        ],
        "transcription": "/ˈʝitonas/",
        "countability": "countable"
    },
    {
        "word": "ύπνος",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "😴",
        "form": "noun",
        "subtext": "",
        "synonyms": [
            "χρειάζομαι ύπνο"
        ],
        "definitions": [
            {
                "text": "Η ξεκούραση τη νύχτα.",
                "examples": [
                    "Ο ύπνος είναι σημαντικός."
                ]
            }
        ],
        "transcription": "/ˈipnos/",
        "countability": "countable"
    },
    {
        "word": "άσκηση",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "ασκήσεις",
        "subtext": "κάνω άσκηση",
        "definitions": [
            {
                "text": "Σωματική δραστηριότητα.",
                "examples": [
                    "Η άσκηση κάνει καλό."
                ]
            }
        ],
        "transcription": "/ˈascisi/",
        "countability": "countable"
    },
    {
        "word": "τιμή",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "τιμές",
        "subtext": "η τιμή είναι χαμηλή",
        "definitions": [
            {
                "text": "Το κόστος ενός πράγματος.",
                "examples": [
                    "Ποια είναι η τιμή;"
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "κόστος",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "💸",
        "form": "noun",
        "subtext": "υψηλό κόστος",
        "definitions": [
            {
                "text": "Η αξία σε χρήμα.",
                "examples": [
                    "Το κόστος είναι μεγάλο."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "σχέση",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "η",
        "gender": "feminine",
        "emoji": "❤️",
        "form": "noun",
        "plural": "σχέσεις",
        "subtext": "καλή σχέση",
        "definitions": [
            {
                "text": "Δεσμός μεταξύ ανθρώπων.",
                "examples": [
                    "Η σχέση μας είναι καλή."
                ]
            }
        ],
        "transcription": "/ˈsçesi/",
        "countability": "countable"
    },
    {
        "word": "μαζί",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "noun",
        "subtext": "δουλεύουμε μαζί",
        "definitions": [
            {
                "text": "Σε συνδυασμό με άλλους.",
                "examples": [
                    "Είμαστε μαζί."
                ]
            }
        ],
        "transcription": "/maˈzi/",
        "countability": "countable"
    },
    {
        "word": "διακοπές",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "article": "οι",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "διακοπές",
        "subtext": "πάω διακοπές",
        "definitions": [
            {
                "text": "Χρόνος ξεκούρασης.",
                "examples": [
                    "Καλές διακοπές!"
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "ξενοδοχείο",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏨",
        "form": "noun",
        "plural": "ξενοδοχεία",
        "subtext": "μένω σε ξενοδοχείο",
        "definitions": [
            {
                "text": "Τόπος διαμονής για ταξιδιώτες.",
                "examples": [
                    "Το ξενοδοχείο είναι καθαρό."
                ]
            }
        ],
        "transcription": "/ksenoðoˈçio/",
        "countability": "countable"
    },
    {
        "word": "ελεύθερος χρόνος",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧘",
        "form": "noun",
        "subtext": "τι κάνεις στον ελεύθερο χρόνο σου;",
        "definitions": [
            {
                "text": "Ο χρόνος εκτός δουλειάς.",
                "examples": [
                    "Δεν έχω ελεύθερο χρόνο."
                ]
            }
        ],
        "transcription": "/eˈlefθeros ˈxronos/",
        "countability": "countable"
    },
    {
        "word": "ταξίδι",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "✈️",
        "form": "noun",
        "plural": "ταξίδια",
        "subtext": "κάνω ένα ταξίδι",
        "definitions": [
            {
                "text": "Μετακίνηση σε άλλον τόπο.",
                "examples": [
                    "Το ταξίδι ήταν ωραίο."
                ]
            }
        ],
        "transcription": "/taˈksiði/",
        "countability": "countable"
    },
    {
        "word": "απόγευμα",
        "level": "starter",
        "theme": "times_day_A1",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌆",
        "form": "noun",
        "plural": "απογεύματα",
        "subtext": "το απόγευμα δουλεύω",
        "definitions": [
            {
                "text": "Ο χρόνος μετά το μεσημέρι.",
                "examples": [
                    "Θα σε δω το απόγευμα."
                ]
            }
        ],
        "countability": "countable"
    },
    {
        "word": "σύζυγος",
        "level": "starter",
        "theme": "immediate_family_A1",
        "article": "ο/η",
        "gender": "both",
        "emoji": "💍",
        "form": "noun",
        "plural": "σύζυγοι",
        "subtext": "",
        "synonyms": [
            "ο σύζυγός μου",
            "η σύζυγός μου"
        ],
        "definitions": [
            {
                "text": "Άντρας ή γυναίκα σε γάμο.",
                "examples": [
                    "Η σύζυγός μου είναι εδώ."
                ]
            }
        ],
        "transcription": "/ˈsizigos/",
        "countability": "countable"
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
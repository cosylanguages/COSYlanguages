(function() {
    const data = [
    {
        "word": "κήπος",
        "level": "starter",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ένας δημόσιος κήπος ή πάρκο.",
                "examples": []
            }
        ],
        "lang": "el",
        "transcription": "",
        "id": "el_starter_places_001"
    },
    {
        "word": "γιατρός",
        "level": "starter",
        "theme": "jobs",
        "article": "ο",
        "gender": "masculine",
        "numberPlural": "2 γιατρός",
        "answer": "δύο γιατροί",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_jobs_001"
    },
    {
        "word": "μπράτσο",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "emoji": "💪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_body_001"
    },
    {
        "word": "πόδι",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "numberPlural": "2 πόδι",
        "answer": "δύο πόδια",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_body_002"
    },
    {
        "word": "δάσκαλος",
        "level": "starter",
        "theme": "jobs",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_jobs_002"
    },
    {
        "word": "μήλο",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍎",
        "numberPlural": "4 μήλο",
        "answer": "τέσσερα μήλα",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "μήλα",
        "definitions": [
            {
                "text": "Ένα στρογγυλό φρούτο, κόκκινο ή πράσινο.",
                "examples": [
                    "Τρώω ένα μήλο κάθε μέρα."
                ]
            },
            {
                "word": "ψάρι",
                "image": "images/vocabulary/actions/to fish.png",
                "level": "starter",
                "theme": "food_drink",
                "article": "το",
                "gender": "neuter",
                "emoji": "🐟",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Η σάρκα του ψαριού που τρώγεται ως τροφή.",
                        "examples": [
                            "Μου αρέσει το ψητό ψάρι για δείπνο."
                        ]
                    }
                ],
                "transcription": "/ˈpsa.ri/"
            }
        ],
        "transcription": "/ˈmilo/",
        "subtext": "",
        "lang": "el",
        "id": "el_starter_food_drink_001"
    },
    {
        "word": "ψωμί",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_002"
    },
    {
        "word": "αυγό",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_003"
    },
    {
        "word": "γάλα",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_004"
    },
    {
        "word": "ρύζι",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_food_drink_005"
    },
    {
        "word": "κρέας",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_food_drink_006"
    },
    {
        "word": "φαγητό",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "φαγητά",
        "definitions": [
            {
                "text": "Κάτι που τρώμε.",
                "examples": [
                    "Το φαγητό είναι έτοιμο."
                ]
            }
        ],
        "subtext": "",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_007"
    },
    {
        "word": "καφές",
        "level": "starter",
        "theme": "food_drink",
        "article": "ο",
        "gender": "masculine",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_008"
    },
    {
        "word": "τσάι",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_009"
    },
    {
        "word": "νερό",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_010"
    },
    {
        "word": "καρέκλα",
        "level": "starter",
        "theme": "furniture",
        "article": "η",
        "gender": "feminine",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_furniture_001"
    },
    {
        "word": "τραπέζι",
        "level": "starter",
        "theme": "furniture",
        "article": "το",
        "gender": "neuter",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_furniture_002"
    },
    {
        "word": "κρεβάτι",
        "level": "starter",
        "theme": "furniture",
        "article": "το",
        "gender": "neuter",
        "emoji": "🛏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_furniture_003"
    },
    {
        "word": "μαγαζί",
        "level": "starter",
        "theme": "places",
        "article": "το",
        "gender": "neuter",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_places_002"
    },
    {
        "word": "κεφάλι",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_body_003"
    },
    {
        "word": "χέρι",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_body_004"
    },
    {
        "word": "μάτι",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_body_005"
    },
    {
        "word": "στόμα",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_body_006"
    },
    {
        "word": "αυτί",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_body_007"
    },
    {
        "word": "πλάτη",
        "level": "starter",
        "theme": "body",
        "article": "η",
        "gender": "feminine",
        "emoji": "🚶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_body_008"
    },
    {
        "word": "σπίτι",
        "level": "starter",
        "theme": "furniture",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_furniture_004"
    },
    {
        "word": "διαμέρισμα",
        "level": "starter",
        "theme": "furniture",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_furniture_005"
    },
    {
        "word": "γραφείο",
        "level": "starter",
        "theme": "rooms_indoor_spaces",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_rooms_indoor_spaces_001"
    },
    {
        "word": "αυτοκίνητο",
        "level": "starter",
        "theme": "travel",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_travel_001"
    },
    {
        "word": "λεωφορείο",
        "level": "starter",
        "theme": "travel",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_travel_002"
    },
    {
        "word": "τρένο",
        "level": "starter",
        "theme": "travel",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_travel_003"
    },
    {
        "word": "λεφτά",
        "level": "starter",
        "theme": "shopping",
        "article": "τα",
        "gender": "neuter",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_shopping_001"
    },
    {
        "word": "πρωί",
        "level": "starter",
        "theme": "time",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_time_001"
    },
    {
        "word": "απόγευμα",
        "level": "starter",
        "theme": "time",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_time_002"
    },
    {
        "word": "βδομάδα",
        "level": "starter",
        "theme": "time",
        "article": "η",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_time_003"
    },
    {
        "word": "δωμάτιο",
        "level": "starter",
        "theme": "furniture",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_furniture_006"
    },
    {
        "word": "κουζίνα",
        "level": "starter",
        "theme": "furniture",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "κουζίνες",
        "definitions": [
            {
                "text": "Ο χώρος του σπιτιού όπου μαγειρεύουμε.",
                "examples": [
                    "Μαγειρεύω στην κουζίνα."
                ]
            }
        ],
        "subtext": "",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_furniture_007"
    },
    {
        "word": "τιμή",
        "level": "starter",
        "theme": "shopping",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_shopping_002"
    },
    {
        "word": "πόρτα",
        "level": "starter",
        "theme": "furniture",
        "article": "η",
        "gender": "feminine",
        "emoji": "🚪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_furniture_008"
    },
    {
        "word": "παράθυρο",
        "level": "starter",
        "theme": "furniture",
        "article": "το",
        "gender": "neuter",
        "emoji": "🪟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_furniture_009"
    },
    {
        "word": "νοσοκομείο",
        "level": "starter",
        "theme": "places",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_places_003"
    },
    {
        "word": "εστιατόριο",
        "level": "starter",
        "theme": "places",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_places_004"
    },
    {
        "word": "τράπεζα",
        "level": "starter",
        "theme": "places",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "τράπεζες",
        "definitions": [
            {
                "text": "Μέρος όπου φυλάσσονται χρήματα.",
                "examples": [
                    "Η τράπεζα είναι κοντά."
                ]
            }
        ],
        "subtext": "",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_places_005"
    },
    {
        "word": "σταθμός",
        "level": "starter",
        "theme": "places",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🚉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_places_006"
    },
    {
        "word": "σούπερ μάρκετ",
        "level": "starter",
        "theme": "places",
        "article": "το",
        "gender": "neuter",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_places_007"
    },
    {
        "word": "ήλιος",
        "level": "starter",
        "theme": "nature",
        "article": "ο",
        "gender": "masculine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_nature_001"
    },
    {
        "word": "βροχή",
        "level": "starter",
        "theme": "nature",
        "article": "η",
        "gender": "feminine",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_nature_002"
    },
    {
        "word": "αέρας",
        "level": "starter",
        "theme": "nature",
        "article": "ο",
        "gender": "masculine",
        "emoji": "💨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_nature_003"
    },
    {
        "word": "βράδυ",
        "level": "starter",
        "theme": "time",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_time_004"
    },
    {
        "word": "νύχτα",
        "level": "starter",
        "theme": "time",
        "article": "η",
        "gender": "feminine",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_time_005"
    },
    {
        "word": "φρούτο",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_food_drink_011"
    },
    {
        "word": "λαχανικό",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_food_drink_012"
    },
    {
        "word": "μπύρα",
        "level": "starter",
        "theme": "food_drink",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_food_drink_013"
    },
    {
        "word": "κρασί",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_food_drink_014"
    },
    {
        "word": "νοσοκόμα",
        "level": "starter",
        "theme": "jobs",
        "article": "η",
        "gender": "feminine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_jobs_003"
    },
    {
        "word": "οδηγός",
        "level": "starter",
        "theme": "jobs",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_jobs_004"
    },
    {
        "word": "μάγειρας",
        "level": "starter",
        "theme": "jobs",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_jobs_005"
    },
    {
        "word": "διευθυντής",
        "level": "starter",
        "theme": "jobs",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_jobs_006"
    },
    {
        "word": "αεροπλάνο",
        "level": "starter",
        "theme": "travel",
        "article": "το",
        "gender": "neuter",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "subtext": "",
        "lang": "el",
        "id": "el_starter_travel_004"
    },
    {
        "word": "ποδήλατο",
        "level": "starter",
        "theme": "travel",
        "article": "το",
        "gender": "neuter",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_travel_005"
    },
    {
        "word": "σύντροφος",
        "level": "starter",
        "theme": "people",
        "article": "ο",
        "gender": "masculine",
        "emoji": "💑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_people_001"
    },
    {
        "word": "άντρας",
        "level": "starter",
        "theme": "people",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_people_002"
    },
    {
        "word": "γυναίκα",
        "level": "starter",
        "theme": "people",
        "article": "η",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
            },
            {
                "word": "γένια",
                "image": "images/vocabulary/appearance/stubble.bristle.png",
                "level": "starter",
                "theme": "people",
                "emoji": "🧔",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Κοντές σκληρές τρίχες που μεγαλώνουν στο πρόσωπο ενός άνδρα όταν δεν έχει ξυριστεί για μερικές ημέρες.",
                        "examples": [
                            "Έχει λίγα γένια."
                        ]
                    }
                ],
                "transcription": "/ˈʝe.ɲa/"
            }
        ],
        "transcription": "/ʝiˈneka/",
        "lang": "el",
        "id": "el_starter_people_003"
    },
    {
        "word": "παιδί",
        "level": "starter",
        "theme": "people",
        "article": "το",
        "gender": "neuter",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_people_004"
    },
    {
        "word": "γονέας",
        "level": "starter",
        "theme": "people",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_people_005"
    },
    {
        "word": "πίτσα",
        "level": "starter",
        "theme": "food_drink",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_food_drink_015"
    },
    {
        "word": "ζυμαρικά",
        "level": "starter",
        "theme": "food_drink",
        "article": "τα",
        "gender": "neuter",
        "emoji": "🍝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_016"
    },
    {
        "word": "μπανάνα",
        "level": "starter",
        "theme": "food_drink",
        "article": "η",
        "gender": "feminine",
        "emoji": "🍌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
            },
            {
                "word": "σνακ",
                "image": "images/vocabulary/actions/to have a snack.png",
                "level": "starter",
                "theme": "food_drink",
                "emoji": "🥨",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Μια μικρή ποσότητα φαγητού που τρώγεται ανάμεσα στα γεύματα.",
                        "examples": [
                            "Μου αρέσουν τα υγιεινά σνακ όπως τα φρούτα."
                        ]
                    }
                ],
                "transcription": "/snak/"
            }
        ],
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_017"
    },
    {
        "word": "χυμός",
        "level": "starter",
        "theme": "food_drink",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_018"
    },
    {
        "word": "πάρκο",
        "level": "starter",
        "theme": "places",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_places_008"
    },
    {
        "word": "σχολείο",
        "level": "starter",
        "theme": "school",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_school_001"
    },
    {
        "word": "μπλουζάκι",
        "level": "starter",
        "theme": "clothes",
        "article": "το",
        "gender": "neuter",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_clothes_001"
    },
    {
        "word": "παντελόνι",
        "level": "starter",
        "theme": "clothes",
        "article": "το",
        "gender": "neuter",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_clothes_002"
    },
    {
        "word": "παπούτσι",
        "level": "starter",
        "theme": "clothes",
        "article": "το",
        "gender": "neuter",
        "emoji": "👞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_clothes_003"
    },
    {
        "word": "καπέλο",
        "level": "starter",
        "theme": "clothes",
        "article": "το",
        "gender": "neuter",
        "emoji": "👒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_clothes_004"
    },
    {
        "word": "κλειδί",
        "level": "starter",
        "theme": "furniture",
        "article": "το",
        "gender": "neuter",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "κλειδιά",
        "subtext": "το κλειδί του σπιτιού",
        "definitions": [
            {
                "text": "Αντικείμενο για το άνοιγμα πόρτας.",
                "examples": [
                    "Έχασα τα κλειδιά μου."
                ]
            },
            {
                "word": "χαρτοφύλακας",
                "image": "images/vocabulary/actions/to go to work.png",
                "level": "starter",
                "theme": "furniture_objects",
                "emoji": "💼",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Μια επίπεδη θήκη που χρησιμοποιείται για τη μεταφορά εγγράφων.",
                        "examples": [
                            "Μεταφέρει τα έγγραφά του σε έναν χαρτοφύλακα."
                        ]
                    }
                ],
                "transcription": "/xaɾ.to.ˈfi.la.kas/"
            }
        ],
        "lang": "el",
        "transcription": "",
        "id": "el_starter_furniture_010"
    },
    {
        "word": "τηλέφωνο",
        "level": "starter",
        "theme": "technology",
        "article": "το",
        "gender": "neuter",
        "emoji": "☎️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_technology_001"
    },
    {
        "word": "βιβλίο",
        "level": "starter",
        "theme": "books_reading",
        "article": "το",
        "gender": "neuter",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_books_reading_001"
    },
    {
        "word": "τσάντα",
        "level": "starter",
        "theme": "accessories",
        "article": "η",
        "gender": "feminine",
        "emoji": "👜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_accessories_001"
    },
    {
        "word": "στυλό",
        "level": "starter",
        "theme": "school",
        "article": "το",
        "gender": "neuter",
        "emoji": "🖊️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_school_002"
    },
    {
        "word": "γάτα",
        "level": "starter",
        "theme": "animals",
        "article": "η",
        "gender": "feminine",
        "emoji": "🐱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_animals_001"
    },
    {
        "word": "σκύλος",
        "level": "starter",
        "theme": "animals",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🐶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_animals_002"
    },
    {
        "word": "πουλί",
        "level": "starter",
        "theme": "animals",
        "article": "το",
        "gender": "neuter",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_animals_003"
    },
    {
        "word": "ψάρι",
        "level": "starter",
        "theme": "animals",
        "article": "το",
        "gender": "neuter",
        "emoji": "🐟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_animals_004"
    },
    {
        "word": "πόδι",
        "level": "starter",
        "theme": "body",
        "article": "το",
        "gender": "neuter",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_body_009"
    },
    {
        "word": "μύτη",
        "level": "starter",
        "theme": "body",
        "article": "η",
        "gender": "feminine",
        "emoji": "👃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_body_010"
    },
    {
        "word": "έξυπνο τηλέφωνο",
        "level": "starter",
        "theme": "technology",
        "article": "το",
        "gender": "neuter",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_technology_002"
    },
    {
        "word": "μητέρα",
        "level": "starter",
        "theme": "people",
        "article": "η",
        "gender": "feminine",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_people_006"
    },
    {
        "word": "πατέρας",
        "level": "starter",
        "theme": "people",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_people_007"
    },
    {
        "word": "δουλειά",
        "level": "starter",
        "theme": "work",
        "article": "η",
        "gender": "feminine",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_work_001"
    },
    {
        "word": "εργασία",
        "level": "starter",
        "theme": "jobs",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_jobs_007"
    },
    {
        "word": "σπίτι",
        "level": "starter",
        "theme": "places",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_places_009"
    },
    {
        "word": "πρωινό",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_019"
    },
    {
        "word": "βραδινό",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_020"
    },
    {
        "word": "φίλος",
        "level": "starter",
        "theme": "social",
        "article": "ο",
        "gender": "masculine",
        "emoji": "👬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_social_001"
    },
    {
        "word": "ημέρα",
        "level": "starter",
        "theme": "time",
        "article": "η",
        "gender": "feminine",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_time_006"
    },
    {
        "word": "μεσημεριανό",
        "level": "starter",
        "theme": "food_drink",
        "article": "το",
        "gender": "neuter",
        "emoji": "🥪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_food_drink_021"
    },
    {
        "word": "αφεντικό",
        "level": "starter",
        "theme": "work",
        "article": "το",
        "gender": "neuter",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_work_002"
    },
    {
        "word": "συνάδελφος",
        "level": "starter",
        "theme": "work",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_work_003"
    },
    {
        "word": "μισθός",
        "level": "starter",
        "theme": "shopping",
        "article": "ο",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_shopping_003"
    },
    {
        "word": "συνάντηση",
        "level": "starter",
        "theme": "work",
        "article": "η",
        "gender": "feminine",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_work_004"
    },
    {
        "word": "μετακίνηση",
        "level": "starter",
        "theme": "travel",
        "article": "η",
        "gender": "feminine",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_travel_006"
    },
    {
        "word": "άγχος",
        "level": "starter",
        "theme": "emotions",
        "article": "το",
        "gender": "neuter",
        "emoji": "😫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_emotions_001"
    },
    {
        "word": "ενοίκιο",
        "level": "starter",
        "theme": "shopping",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_shopping_004"
    },
    {
        "word": "γείτονας",
        "level": "starter",
        "theme": "places",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_places_010"
    },
    {
        "word": "ύπνος",
        "level": "starter",
        "theme": "time",
        "article": "ο",
        "gender": "masculine",
        "emoji": "😴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_time_007"
    },
    {
        "word": "άσκηση",
        "level": "starter",
        "theme": "social",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_social_002"
    },
    {
        "word": "τιμή",
        "level": "starter",
        "theme": "shopping",
        "article": "η",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_shopping_005"
    },
    {
        "word": "κόστος",
        "level": "starter",
        "theme": "shopping",
        "article": "το",
        "gender": "neuter",
        "emoji": "💸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "υψηλό κόστος",
        "definitions": [
            {
                "text": "Η αξία σε χρήμα.",
                "examples": [
                    "Το κόστος είναι μεγάλο."
                ]
            }
        ],
        "lang": "el",
        "transcription": "",
        "id": "el_starter_shopping_006"
    },
    {
        "word": "σχέση",
        "level": "starter",
        "theme": "social",
        "article": "η",
        "gender": "feminine",
        "emoji": "❤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_social_003"
    },
    {
        "word": "μαζί",
        "level": "starter",
        "theme": "social",
        "emoji": "👫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_social_004"
    },
    {
        "word": "διακοπές",
        "level": "starter",
        "theme": "travel",
        "article": "οι",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_travel_007"
    },
    {
        "word": "ξενοδοχείο",
        "level": "starter",
        "theme": "travel",
        "article": "το",
        "gender": "neuter",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_travel_008"
    },
    {
        "word": "ελεύθερος χρόνος",
        "level": "starter",
        "theme": "social",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🧘",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_social_005"
    },
    {
        "word": "ταξίδι",
        "level": "starter",
        "theme": "travel",
        "article": "το",
        "gender": "neuter",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_travel_009"
    },
    {
        "word": "απόγευμα",
        "level": "starter",
        "theme": "time",
        "article": "το",
        "gender": "neuter",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "transcription": "",
        "id": "el_starter_time_008"
    },
    {
        "word": "σύζυγος",
        "level": "starter",
        "theme": "people",
        "article": "ο/η",
        "gender": "both",
        "emoji": "💍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
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
        "lang": "el",
        "id": "el_starter_people_008"
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
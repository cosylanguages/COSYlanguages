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
        "subtext": "βλέπω γιατρό, παθολόγος",
        "definitions": [
            {
                "text": "Ένα άτομο που βοηθά τους άρρωστους ανθρώπους.",
                "examples": [
                    "Ο γιατρός είναι στο νοσοκομείο.",
                    "Πρέπει να δω έναν γιατρό."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "μουσακάς",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "ο",
        "gender": "masculine",
        "emoji": "🥘",
        "form": "noun",
        "definitions": [
            {
                "text": "Παραδοσιακό ελληνικό φαγητό με μελιτζάνες και κιμά.",
                "examples": [
                    "Μου αρέσει ο μουσακάς."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "subtext": "κατάστημα, ψωνίζω",
        "definitions": [
            {
                "text": "Ένα μέρος όπου αγοράζεις πράγματα.",
                "examples": [
                    "Το μαγαζί είναι ανοιχτό."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "word": "σπίτι",
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "subtext": "καλησπέρα",
        "definitions": [
            {
                "text": "Το μέρος της ημέρας μετά το μεσημέρι.",
                "examples": [
                    "Θα σε δω το απόγευμα."
                ]
            }
        ]
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
        "subtext": "εβδομάδα",
        "definitions": [
            {
                "text": "Μια περίοδος επτά ημερών.",
                "examples": [
                    "Δουλεύω πέντε μέρες τη βδομάδα."
                ]
            }
        ]
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
        ]
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
        ]
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
        "subtext": "κόστος",
        "definitions": [
            {
                "text": "Το ποσό των χρημάτων που πληρώνεις για κάτι.",
                "examples": [
                    "Η τιμή είναι υψηλή."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "subtext": "άνεμος",
        "definitions": [
            {
                "text": "Ο αέρας που κινείται, ο άνεμος.",
                "examples": [
                    "Φυσάει δυνατός αέρας."
                ]
            }
        ]
    },
    {
        "word": "σήμερα",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "subtext": "αυτή τη μέρα",
        "definitions": [
            {
                "text": "Την τρέχουσα ημέρα.",
                "examples": [
                    "Έχω ραντεβού σήμερα."
                ]
            }
        ]
    },
    {
        "word": "αύριο",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🔜",
        "form": "adverb",
        "subtext": "την επόμενη μέρα",
        "definitions": [
            {
                "text": "Την ημέρα μετά τη σημερινή.",
                "examples": [
                    "Θα πάω στον γιατρό αύριο."
                ]
            }
        ]
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
        "subtext": "εσπέρα, καλησπέρα",
        "definitions": [
            {
                "text": "Το τελευταίο μέρος της ημέρας.",
                "examples": [
                    "Τρώμε βραδινό το βράδυ."
                ]
            }
        ]
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
        "subtext": "καληνύχτα",
        "definitions": [
            {
                "text": "Η περίοδος του σκότους μεταξύ απογεύματος και πρωινού.",
                "examples": [
                    "Κοιμάμαι οκτώ ώρες κάθε νύχτα."
                ]
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        "subtext": "σεφ",
        "definitions": [
            {
                "text": "Επαγγελματίας που μαγειρεύει φαγητά.",
                "examples": [
                    "Ο μάγειρας φτιάχνει εξαιρετικό φαγητό."
                ]
            }
        ]
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
        "subtext": "μάνατζερ",
        "definitions": [
            {
                "text": "Άτομο που είναι υπεύθυνο για μια ομάδα ή επιχείρηση.",
                "examples": [
                    "Ο διευθυντής μου δουλεύει πολλές ώρες."
                ]
            }
        ]
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
        ]
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
        ]
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
        "subtext": "παρτενέρ, σύζυγος",
        "definitions": [
            {
                "text": "Το άτομο με το οποίο ζεις ή έχεις σχέση.",
                "examples": [
                    "Ο σύντροφός μου δουλεύει εδώ."
                ]
            }
        ]
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
        "subtext": "σύζυγος",
        "definitions": [
            {
                "text": "Ένας ενήλικος άνδρας ή ο σύζυγος.",
                "examples": [
                    "Ο άντρας της είναι γιατρός."
                ]
            }
        ]
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
        "subtext": "σύζυγος",
        "definitions": [
            {
                "text": "Μια ενήλικη γυναίκα ή η σύζυγος.",
                "examples": [
                    "Η γυναίκα του είναι δασκάλα."
                ]
            }
        ]
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
        "subtext": "γιος ή κόρη",
        "definitions": [
            {
                "text": "Ένας νέος άνθρωπος, γιος ή κόρη.",
                "examples": [
                    "Έχουν δύο παιδιά."
                ]
            }
        ]
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
        "subtext": "μητέρα ή πατέρας",
        "definitions": [
            {
                "text": "Η μητέρα ή ο πατέρας.",
                "examples": [
                    "Οι γονείς μου μένουν στην Αθήνα."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

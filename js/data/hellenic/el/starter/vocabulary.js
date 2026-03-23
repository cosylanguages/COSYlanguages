(function() {
    const data = [
    {
        "word": "γιατρός",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "article": "ο",
        "numberPlural": "2 γιατρός",
        "answer": "δύο γιατροί",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "γιατροί",
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
        "word": "πόδι",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "το",
        "numberPlural": "2 πόδι",
        "answer": "δύο πόδια",
        "emoji": "🦶",
        "form": "noun",
        "plural": "πόδια",
        "definitions": [
            {
                "text": "Το μέρος του σώματος που χρησιμοποιούμε για να περπατάμε.",
                "examples": [
                    "Έχω δύο πόδια."
                ]
            }
        ]
    },
    {
        "word": "δάσκαλος",
        "level": "starter",
        "theme": "job_titles_professions_A0",
        "article": "ο",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "δάσκαλοι",
        "definitions": [
            {
                "text": "Ένα άτομο που σε βοηθά να μάθεις νέα πράγματα.",
                "examples": [
                    "Ο δάσκαλος είναι στην τάξη."
                ]
            }
        ]
    },
    {
        "word": "μουσακάς",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "ο",
        "form": "noun",
        "definitions": [
            {
                "text": "Παραδοσιακό ελληνικό φαγητό με μελιτζάνες και κιμά."
            }
        ]
    },
    {
        "word": "παστίτσιο",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "το",
        "form": "noun",
        "definitions": [
            {
                "text": "Παραδοσιακό ελληνικό φαγητό με μακαρόνια και κιμά."
            }
        ]
    },
    {
        "word": "μήλο",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "το",
        "emoji": "🍎",
        "numberPlural": "4 μήλο",
        "answer": "τέσσερα μήλα",
        "form": "noun",
        "plural": "μήλα",
        "definitions": [
            {
                "text": "Ένα στρογγυλό φρούτο, κόκκινο ή πράσινο.",
                "examples": [
                    "Τρώω ένα μήλο."
                ]
            }
        ]
    },
    {
        "word": "ψωμί",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "το",
        "emoji": "🍞",
        "form": "noun",
        "plural": "ψωμιά",
        "definitions": [
            {
                "text": "Ένα βασικό τρόφιμο φτιαγμένο από αλεύρι και νερό.",
                "examples": [
                    "Θέλω λίγο ψωμί."
                ]
            }
        ]
    },
    {
        "word": "αυγό",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "το",
        "emoji": "🥚",
        "form": "noun",
        "plural": "αυγά",
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
        "theme": "basic_foods_A0",
        "article": "το",
        "emoji": "🥛",
        "form": "noun",
        "plural": "γάλατα"
    },
    {
        "word": "πίτσα",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "η",
        "emoji": "🍕",
        "form": "noun",
        "plural": "πίτσες"
    },
    {
        "word": "ρύζι",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "το",
        "emoji": "🍚",
        "form": "noun",
        "plural": "ρύζια"
    },
    {
        "word": "κρέας",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "το",
        "emoji": "🥩",
        "form": "noun",
        "plural": "κρέατα"
    },
    {
        "word": "φαγητό",
        "level": "starter",
        "theme": "basic_foods_A0",
        "article": "το",
        "emoji": "🍲",
        "form": "noun",
        "plural": "φαγητά"
    },
    {
        "word": "καφές",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "ο",
        "emoji": "☕",
        "form": "noun",
        "plural": "καφέδες"
    },
    {
        "word": "τσάι",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "το",
        "emoji": "🍵",
        "form": "noun",
        "plural": "τσάγια"
    },
    {
        "word": "χυμός",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "ο",
        "emoji": "🧃",
        "form": "noun",
        "plural": "χυμοί"
    },
    {
        "word": "νερό",
        "level": "starter",
        "theme": "drinks_A0",
        "article": "το",
        "emoji": "🚰",
        "form": "noun",
        "plural": "νερά"
    },
    {
        "word": "πρωινό",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "το",
        "emoji": "🍳",
        "form": "noun",
        "plural": "πρωινά"
    },
    {
        "word": "βραδινό",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "το",
        "emoji": "🍽️",
        "form": "noun",
        "plural": "βραδινά"
    },
    {
        "word": "μεσημεριανό",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "article": "το",
        "emoji": "🍱",
        "form": "noun",
        "plural": "μεσημεριανά"
    },
    {
        "word": "πάρκο",
        "level": "starter",
        "theme": "local_places_services_A0",
        "article": "το",
        "emoji": "🌳",
        "form": "noun",
        "plural": "πάρκα"
    },
    {
        "word": "σχολείο",
        "level": "starter",
        "theme": "local_places_services_A0",
        "article": "το",
        "emoji": "🏫",
        "form": "noun",
        "plural": "σχολεία"
    },
    {
        "word": "μαγαζί",
        "level": "starter",
        "theme": "local_places_services_A0",
        "article": "το",
        "emoji": "🛒",
        "form": "noun",
        "plural": "μαγαζιά"
    },
    {
        "word": "μπλουζάκι",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "το",
        "emoji": "👕",
        "form": "noun",
        "plural": "μπλουζάκια"
    },
    {
        "word": "παντελόνι",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "το",
        "emoji": "👖",
        "form": "noun",
        "plural": "παντελόνια"
    },
    {
        "word": "παπούτσια",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "τα",
        "emoji": "👟",
        "form": "noun",
        "plural": "παπούτσια"
    },
    {
        "word": "καπέλο",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "article": "το",
        "emoji": "👒",
        "form": "noun",
        "plural": "καπέλα"
    },
    {
        "word": "καρέκλα",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "η",
        "emoji": "🪑",
        "form": "noun",
        "plural": "καρέκλες"
    },
    {
        "word": "τραπέζι",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "το",
        "emoji": "🪑",
        "form": "noun",
        "plural": "τραπέζια"
    },
    {
        "word": "κρεβάτι",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "το",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "κρεβάτια"
    },
    {
        "word": "κλειδί",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "το",
        "emoji": "🔑",
        "form": "noun",
        "plural": "κλειδιά"
    },
    {
        "word": "τηλέφωνο",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "article": "το",
        "emoji": "📱",
        "form": "noun",
        "plural": "τηλέφωνα"
    },
    {
        "word": "βιβλίο",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "το",
        "emoji": "📖",
        "form": "noun",
        "plural": "βιβλία"
    },
    {
        "word": "τσάντα",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "η",
        "emoji": "👜",
        "form": "noun",
        "plural": "τσάντες"
    },
    {
        "word": "στυλό",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "article": "το",
        "emoji": "🖊️",
        "form": "noun",
        "plural": "στυλό"
    },
    {
        "word": "ψηλός",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "κοντός",
        "oppositeEmoji": "📏"
    },
    {
        "word": "κοντός",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "ψηλός",
        "oppositeEmoji": "🗼"
    },
    {
        "word": "νέος",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "γέρος",
        "oppositeEmoji": "👴"
    },
    {
        "word": "γέρος",
        "level": "starter",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "νέος",
        "oppositeEmoji": "👶"
    },
    {
        "word": "καλός",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "κακός",
        "oppositeEmoji": "👎"
    },
    {
        "word": "κακός",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "καλός",
        "oppositeEmoji": "👍"
    },
    {
        "word": "εύκολος",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "δύσκολος",
        "oppositeEmoji": "❌"
    },
    {
        "word": "δύσκολος",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "εύκολος",
        "oppositeEmoji": "✅"
    },
    {
        "word": "μεγάλος",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "μικρός",
        "oppositeEmoji": "🐭"
    },
    {
        "word": "μικρός",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "μεγάλος",
        "oppositeEmoji": "🐘"
    },
    {
        "word": "χαρούμενος",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "λυπημένος"
    },
    {
        "word": "κουρασμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "ξεκούραστος"
    },
    {
        "word": "γάτα",
        "level": "starter",
        "theme": "animals_A0",
        "article": "η",
        "emoji": "🐈",
        "numberPlural": "2 γάτα",
        "answer": "δύο γάτες",
        "form": "noun",
        "plural": "γάτες"
    },
    {
        "word": "σκύλος",
        "level": "starter",
        "theme": "animals_A0",
        "article": "ο",
        "emoji": "🐕",
        "numberPlural": "5 σκύλος",
        "answer": "πέντε σκύλοι",
        "form": "noun",
        "plural": "σκύλοι"
    },
    {
        "word": "πουλί",
        "level": "starter",
        "theme": "animals_A0",
        "article": "το",
        "emoji": "🐦",
        "form": "noun",
        "plural": "πουλιά"
    },
    {
        "word": "ψάρι",
        "level": "starter",
        "theme": "animals_A0",
        "article": "το",
        "emoji": "🐟",
        "form": "noun",
        "plural": "ψάρια"
    },
    {
        "word": "κεφάλι",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "το",
        "emoji": "👤",
        "form": "noun",
        "plural": "κεφάλια"
    },
    {
        "word": "χέρι",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "το",
        "emoji": "✋",
        "form": "noun",
        "plural": "χέρια"
    },
    {
        "word": "μάτι",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "το",
        "emoji": "👁️",
        "form": "noun",
        "plural": "μάτια"
    },
    {
        "word": "μύτη",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "η",
        "emoji": "👃",
        "form": "noun",
        "plural": "μύτες"
    },
    {
        "word": "στόμα",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "το",
        "emoji": "👄",
        "form": "noun",
        "plural": "στόματα"
    },
    {
        "word": "αυτί",
        "level": "starter",
        "theme": "body_parts_A0",
        "article": "το",
        "emoji": "👂",
        "form": "noun",
        "plural": "αυτιά"
    },
    {
        "word": "μητέρα",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "η",
        "emoji": "👩",
        "form": "noun",
        "plural": "μητέρες"
    },
    {
        "word": "πατέρας",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "ο",
        "emoji": "👨",
        "form": "noun",
        "plural": "πατέρες"
    },
    {
        "word": "οικογένεια",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "η",
        "emoji": "👪",
        "form": "noun",
        "plural": "οικογένειες"
    },
    {
        "word": "φίλος",
        "level": "starter",
        "theme": "immediate_family_A0",
        "article": "ο",
        "emoji": "👫",
        "form": "noun",
        "plural": "φίλοι"
    },
    {
        "word": "σύντροφος",
        "level": "starter",
        "theme": "marital_status_A0",
        "article": "ο",
        "emoji": "💑",
        "form": "noun",
        "plural": "σύντροφοι"
    },
    {
        "word": "άντρας",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "ο",
        "numberPlural": "2 άντρας",
        "answer": "δύο άντρες",
        "emoji": "👨",
        "form": "noun",
        "plural": "άντρες"
    },
    {
        "word": "γυναίκα",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "article": "η",
        "numberPlural": "2 γυναίκα",
        "answer": "δύο γυναίκες",
        "emoji": "👩",
        "form": "noun",
        "plural": "γυναίκες"
    },
    {
        "word": "σπίτι",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "article": "το",
        "emoji": "🏡",
        "form": "noun",
        "plural": "σπίτια",
        "subtext": "στο σπίτι, πάω σπίτι"
    },
    {
        "word": "διαμέρισμα",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "article": "το",
        "emoji": "🏢",
        "form": "noun",
        "plural": "διαμερίσματα"
    },
    {
        "word": "γραφείο",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A0",
        "article": "το",
        "emoji": "🏢",
        "form": "noun",
        "plural": "γραφεία"
    },
    {
        "word": "αυτοκίνητο",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "article": "το",
        "emoji": "🚗",
        "form": "noun",
        "plural": "αυτοκίνητα"
    },
    {
        "word": "λεωφορείο",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "article": "το",
        "emoji": "🚌",
        "form": "noun",
        "plural": "λεωφορεία"
    },
    {
        "word": "τρένο",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "article": "το",
        "emoji": "🚆",
        "form": "noun",
        "plural": "τρένα"
    },
    {
        "word": "λεφτά",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "article": "τα",
        "emoji": "💰",
        "form": "noun"
    },
    {
        "word": "ακριβός",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "φτηνός",
        "oppositeEmoji": "🏷️"
    },
    {
        "word": "φτηνός",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "ακριβός",
        "oppositeEmoji": "💎"
    },
    {
        "word": "πρωί",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "το",
        "emoji": "🌅",
        "form": "noun",
        "plural": "πρωινά"
    },
    {
        "word": "απόγευμα",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "το",
        "emoji": "🌆",
        "form": "noun",
        "plural": "απογεύματα"
    },
    {
        "word": "μέρα",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "η",
        "emoji": "☀️",
        "form": "noun",
        "plural": "μέρες"
    },
    {
        "word": "βδομάδα",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "η",
        "emoji": "📅",
        "form": "noun",
        "plural": "βδομάδες"
    },
    {
        "word": "κάθε μέρα",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Κάθε μέρα χωρίς εξαίρεση.",
                "examples": [
                    "Πίνω καφέ κάθε μέρα."
                ]
            }
        ]
    },
    {
        "word": "πλήρους απασχόλησης",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "opposite": "μερικής απασχόλησης",
        "definitions": [
            {
                "text": "Εργασία για το πλήρες ωράριο μιας εργάσιμης εβδομάδας.",
                "examples": [
                    "Έχει μια δουλειά πλήρους απασχόλησης σε τράπεζα."
                ]
            }
        ]
    },
    {
        "word": "μερικής απασχόλησης",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "form": "adjective",
        "opposite": "πλήρους απασχόλησης",
        "definitions": [
            {
                "text": "Εργασία για λιγότερες ώρες από μια τυπική εργάσιμη εβδομάδα.",
                "examples": [
                    "Δουλεύει μερικής απασχόλησης τα Σάββατα."
                ]
            }
        ]
    },
    {
        "word": "αφεντικό",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "το",
        "emoji": "👨‍💼",
        "form": "noun",
        "plural": "αφεντικά",
        "definitions": [
            {
                "text": "Το άτομο που είναι υπεύθυνο στη δουλειά.",
                "examples": [
                    "Το αφεντικό μου είναι πολύ φιλικό."
                ]
            }
        ]
    },
    {
        "word": "συνάδελφος",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "ο",
        "emoji": "🧑‍💼",
        "form": "noun",
        "plural": "συνάδελφοι",
        "definitions": [
            {
                "text": "Ένα άτομο με το οποίο συνεργάζεσαι.",
                "examples": [
                    "Οι συνάδελφοί μου είναι εξυπηρετικοί."
                ]
            }
        ]
    },
    {
        "word": "μισθός",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "ο",
        "emoji": "💰",
        "form": "noun",
        "plural": "μισθοί",
        "definitions": [
            {
                "text": "Τα χρήματα που κερδίζει ένα άτομο από τη δουλειά του κάθε μήνα.",
                "examples": [
                    "Ο μισθός της είναι καλός."
                ]
            }
        ]
    },
    {
        "word": "συνάντηση",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "η",
        "emoji": "🤝",
        "form": "noun",
        "plural": "συναντήσεις",
        "subtext": "σύσκεψη, ραντεβού",
        "definitions": [
            {
                "text": "Μια στιγμή που οι άνθρωποι συγκεντρώνονται για να μιλήσουν για κάτι.",
                "examples": [
                    "Έχουμε μια συνάντηση κάθε Δευτέρα."
                ]
            }
        ]
    },
    {
        "word": "διαδρομή",
        "level": "starter",
        "theme": "public_transport_A1",
        "article": "η",
        "emoji": "🚆",
        "form": "noun",
        "plural": "διαδρομές",
        "definitions": [
            {
                "text": "Το ταξίδι προς και από τη δουλειά κάθε μέρα.",
                "examples": [
                    "Η διαδρομή μου διαρκεί μία ώρα."
                ]
            }
        ]
    },
    {
        "word": "άγχος",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "article": "το",
        "emoji": "😫",
        "form": "noun",
        "subtext": "στρες",
        "definitions": [
            {
                "text": "Ένα συναίσθημα ανησυχίας που προκαλείται από μια δύσκολη κατάσταση.",
                "examples": [
                    "Έχω πολύ άγχος στη δουλειά."
                ]
            }
        ]
    },
    {
        "word": "ενοίκιο",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "το",
        "emoji": "🏠",
        "form": "noun",
        "plural": "ενοίκια",
        "definitions": [
            {
                "text": "Τα χρήματα που καταβάλλονται για τη χρήση ενός σπιτιού ή διαμερίσματος που ανήκει σε κάποιον άλλο.",
                "examples": [
                    "Το ενοίκιο είναι ακριβό στην πόλη."
                ]
            }
        ]
    },
    {
        "word": "γείτονας",
        "level": "starter",
        "theme": "address_location_A1",
        "article": "ο",
        "emoji": "🏠",
        "form": "noun",
        "plural": "γείτονες",
        "definitions": [
            {
                "text": "Ένα άτομο που ζει δίπλα σου ή κοντά σου.",
                "examples": [
                    "Οι γείτονές μου είναι πολύ καλοί."
                ]
            }
        ]
    },
    {
        "word": "δωμάτιο",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "article": "το",
        "emoji": "🚪",
        "form": "noun",
        "plural": "δωμάτια",
        "definitions": [
            {
                "text": "Ένα ξεχωριστό τμήμα ενός κτιρίου με τοίχους και μια πόρτα.",
                "examples": [
                    "Το διαμέρισμα έχει τρία δωμάτια."
                ]
            }
        ]
    },
    {
        "word": "κουζίνα",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "article": "η",
        "emoji": "🍳",
        "form": "noun",
        "plural": "κουζίνες",
        "definitions": [
            {
                "text": "Το δωμάτιο σε ένα σπίτι όπου προετοιμάζεται το φαγητό.",
                "examples": [
                    "Μαγειρεύω στην κουζίνα."
                ]
            }
        ]
    },
    {
        "word": "καθαρός",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "βρώμικος",
        "oppositeEmoji": "💩",
        "subtext": "τακτοποιημένος",
        "definitions": [
            {
                "text": "Χωρίς βρωμιά.",
                "examples": [
                    "Το δωμάτιό μου είναι καθαρό."
                ]
            }
        ]
    },
    {
        "word": "υγιεινός",
        "level": "starter",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "ανθυγιεινός",
        "definitions": [
            {
                "text": "Καλό για το σώμα σου. Όχι άρρωστο.",
                "examples": [
                    "Τα λαχανικά είναι υγιεινή τροφή."
                ]
            }
        ]
    },
    {
        "word": "άρρωστος",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "υγιής",
        "definitions": [
            {
                "text": "Όχι καλά. Πάσχει από μια ασθένεια.",
                "examples": [
                    "Νιώθω άρρωστος σήμερα."
                ]
            }
        ]
    },
    {
        "word": "ύπνος",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "article": "ο",
        "emoji": "😴",
        "form": "noun",
        "definitions": [
            {
                "text": "Η φυσική ανάπαυση που χρειάζεται το σώμα σου κάθε βράδυ.",
                "examples": [
                    "Χρειάζομαι οκτώ ώρες ύπνο."
                ]
            }
        ]
    },
    {
        "word": "άσκηση",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "η",
        "emoji": "🏋️",
        "form": "noun",
        "plural": "ασκήσεις",
        "definitions": [
            {
                "text": "Φυσική δραστηριότητα που σε κρατά σε φόρμα και υγιή.",
                "examples": [
                    "Κάνω άσκηση τρεις φορές την εβδομάδα."
                ]
            }
        ]
    },
    {
        "word": "τιμή",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "η",
        "emoji": "🏷️",
        "form": "noun",
        "plural": "τιμές",
        "definitions": [
            {
                "text": "Το χρηματικό ποσό που πληρώνεις για κάτι.",
                "examples": [
                    "Η τιμή του φαγητού είναι υψηλή."
                ]
            }
        ]
    },
    {
        "word": "κόστος",
        "level": "starter",
        "theme": "money_payment_A1",
        "article": "το",
        "emoji": "💰",
        "form": "noun",
        "plural": "κόστη",
        "definitions": [
            {
                "text": "Το χρηματικό ποσό που χρειάζεται για να αγοράσεις κάτι.",
                "examples": [
                    "Το κόστος του διαμερίσματος είναι μεγάλο."
                ]
            }
        ]
    },
    {
        "word": "διαδικτυακός",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Χρησιμοποιώντας το διαδίκτυο.",
                "examples": [
                    "Αγοράζω φαγητό διαδικτυακά μερικές φορές."
                ]
            }
        ]
    },
    {
        "word": "σχέση",
        "level": "starter",
        "theme": "family_life_A1",
        "article": "η",
        "emoji": "❤️",
        "form": "noun",
        "plural": "σχέσεις",
        "definitions": [
            {
                "text": "Μια σύνδεση μεταξύ δύο ανθρώπων.",
                "examples": [
                    "Έχουν μια καλή σχέση."
                ]
            }
        ]
    },
    {
        "word": "μόνος",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🧍",
        "form": "adjective",
        "opposite": "μαζί",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Χωρίς άλλους ανθρώπους. Από μόνος σου.",
                "examples": [
                    "Ζει μόνη της."
                ]
            }
        ]
    },
    {
        "word": "μαζί",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "μόνος",
        "oppositeEmoji": "🧍",
        "definitions": [
            {
                "text": "Με άλλο άτομο ή ομάδα.",
                "examples": [
                    "Τρώμε βραδινό μαζί."
                ]
            }
        ]
    },
    {
        "word": "διακοπές",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "article": "οι",
        "emoji": "🏖️",
        "form": "noun",
        "plural": "διακοπές",
        "definitions": [
            {
                "text": "Μια περίοδος χρόνου μακριά από τη δουλειά όταν ταξιδεύεις ή χαλαρώνεις.",
                "examples": [
                    "Έχουμε διακοπές τον Ιούλιο."
                ]
            }
        ]
    },
    {
        "word": "ταξίδι",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A0",
        "article": "το",
        "emoji": "✈️",
        "form": "noun",
        "plural": "ταξίδια",
        "definitions": [
            {
                "text": "Η πράξη της μετάβασης από ένα μέρος σε άλλο.",
                "examples": [
                    "Λατρεύω τα ταξίδια."
                ]
            }
        ]
    },
    {
        "word": "ξενοδοχείο",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "article": "το",
        "emoji": "🏨",
        "form": "noun",
        "plural": "ξενοδοχεία",
        "definitions": [
            {
                "text": "Ένα κτίριο όπου οι άνθρωποι πληρώνουν για να μείνουν κατά τη διάρκεια της νύχτας.",
                "examples": [
                    "Το ξενοδοχείο είναι κοντά στο σταθμό."
                ]
            }
        ]
    },
    {
        "word": "σαββατοκύριακο",
        "level": "starter",
        "theme": "times_day_A0",
        "article": "το",
        "emoji": "🗓️",
        "form": "noun",
        "plural": "σαββατοκύριακα",
        "definitions": [
            {
                "text": "Σάββατο και Κυριακή.",
                "examples": [
                    "Χαλαρώνω το σαββατοκύριακο."
                ]
            }
        ]
    },
    {
        "word": "ελεύθερος χρόνος",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "article": "ο",
        "emoji": "🎮",
        "form": "noun",
        "definitions": [
            {
                "text": "Ο χρόνος που δεν εργάζεσαι και μπορείς να κάνεις ό,τι θέλεις.",
                "examples": [
                    "Διαβάζω βιβλία στον ελεύθερο χρόνο μου."
                ]
            }
        ]
    },
    {
        "word": "χαλαρός",
        "level": "starter",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "αγχωμένος",
        "oppositeEmoji": "😫",
        "subtext": "ήρεμος",
        "definitions": [
            {
                "text": "Ήρεμος. Όχι ανήσυχος ή αγχωμένος.",
                "examples": [
                    "Νιώθω χαλαρός το σαββατοκύριακο."
                ]
            }
        ]
    },
    {
        "word": "ανήσυχος",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "ήρεμος",
        "oppositeEmoji": "😌",
        "subtext": "αγχωμένος",
        "definitions": [
            {
                "text": "Το να νιώθεις άγχος για κάτι που μπορεί να συμβεί.",
                "examples": [
                    "Είναι ανήσυχη για τη δουλειά της."
                ]
            }
        ]
    },
    {
        "word": "απασχολημένος",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "ελεύθερος",
        "definitions": [
            {
                "text": "Το να έχεις πολλά πράγματα να κάνεις.",
                "examples": [
                    "Είμαι πολύ απασχολημένος αυτή την εβδομάδα."
                ]
            }
        ]
    },
    {
        "word": "χρήσιμος",
        "level": "starter",
        "theme": "size_shape_A0",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "άχρηστος",
        "definitions": [
            {
                "text": "Εξυπηρετικός. Έχοντας πρακτικό σκοπό.",
                "examples": [
                    "Ένα αυτοκίνητο είναι πολύ χρήσιμο στην επαρχία."
                ]
            }
        ]
    },
    {
        "word": "σημαντικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "ουσιώδης",
        "definitions": [
            {
                "text": "Έχοντας μεγάλη αξία ή αποτέλεσμα.",
                "examples": [
                    "Ο ύπνος είναι πολύ σημαντικός."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

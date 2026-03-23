(function() {
    const data = [
    {
        "word": "γιατρός",
        "level": "starter",
        "theme": "job_titles_professions_A0",
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
        "numberPlural": "2 πόδι",
        "answer": "δύο πόδια",
        "emoji": "🦶",
        "form": "noun",
        "plural": "πόδια"
    },
    {
        "word": "δάσκαλος",
        "level": "starter",
        "theme": "job_titles_professions_A0",
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
        "form": "noun"
    },
    {
        "word": "μήλο",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "numberPlural": "4 μήλο",
        "answer": "τέσσερα μήλα",
        "form": "noun",
        "plural": "μήλα"
    },
    {
        "word": "ψωμί",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍞",
        "form": "noun",
        "plural": "ψωμιά"
    },
    {
        "word": "αυγό",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥚",
        "form": "noun",
        "plural": "αυγά"
    },
    {
        "word": "γάλα",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥛",
        "form": "noun"
    },
    {
        "word": "πίτσα",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍕",
        "form": "noun"
    },
    {
        "word": "ρύζι",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍚",
        "form": "noun"
    },
    {
        "word": "κρέας",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🥩",
        "form": "noun"
    },
    {
        "word": "φαγητό",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍲",
        "form": "noun"
    },
    {
        "word": "καφές",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "☕",
        "form": "noun",
        "plural": "καφέδες"
    },
    {
        "word": "τσάι",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🍵",
        "form": "noun"
    },
    {
        "word": "χυμός",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🧃",
        "form": "noun",
        "plural": "χυμοί"
    },
    {
        "word": "νερό",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🚰",
        "form": "noun"
    },
    {
        "word": "πρωινό",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍳",
        "form": "noun"
    },
    {
        "word": "βραδινό",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍽️",
        "form": "noun"
    },
    {
        "word": "μεσημεριανό",
        "level": "starter",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍱",
        "form": "noun"
    },
    {
        "word": "πάρκο",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🌳",
        "form": "noun",
        "plural": "πάρκα"
    },
    {
        "word": "σχολείο",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🏫",
        "form": "noun",
        "plural": "σχολεία"
    },
    {
        "word": "μαγαζί",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🛒",
        "form": "noun",
        "plural": "μαγαζιά"
    },
    {
        "word": "μπλουζάκι",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "form": "noun",
        "plural": "μπλουζάκια"
    },
    {
        "word": "παντελόνι",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👖",
        "form": "noun",
        "plural": "παντελόνια"
    },
    {
        "word": "παπούτσια",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👟",
        "form": "noun"
    },
    {
        "word": "καπέλο",
        "level": "starter",
        "theme": "items_of_clothing_A0",
        "emoji": "👒",
        "form": "noun",
        "plural": "καπέλα"
    },
    {
        "word": "καρέκλα",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "καρέκλες"
    },
    {
        "word": "τραπέζι",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "τραπέζια"
    },
    {
        "word": "κρεβάτι",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "κρεβάτια"
    },
    {
        "word": "κλειδί",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🔑",
        "form": "noun",
        "plural": "κλειδιά"
    },
    {
        "word": "τηλέφωνο",
        "level": "starter",
        "theme": "basic_technology_devices_A0",
        "emoji": "📱",
        "form": "noun",
        "plural": "τηλέφωνα"
    },
    {
        "word": "βιβλίο",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "📖",
        "form": "noun",
        "plural": "βιβλία"
    },
    {
        "word": "τσάντα",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "👜",
        "form": "noun",
        "plural": "τσάντες"
    },
    {
        "word": "στυλό",
        "level": "starter",
        "theme": "furniture_objects_A0",
        "emoji": "🖊️",
        "form": "noun"
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
        "form": "adjective"
    },
    {
        "word": "κουρασμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective"
    },
    {
        "word": "γάτα",
        "level": "starter",
        "theme": "animals_A0",
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
        "emoji": "🐦",
        "form": "noun",
        "plural": "πουλιά"
    },
    {
        "word": "ψάρι",
        "level": "starter",
        "theme": "animals_A0",
        "emoji": "🐟",
        "form": "noun",
        "plural": "ψάρια"
    },
    {
        "word": "κεφάλι",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👤",
        "form": "noun",
        "plural": "κεφάλια"
    },
    {
        "word": "χέρι",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "✋",
        "form": "noun",
        "plural": "χέρια"
    },
    {
        "word": "μάτι",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "form": "noun",
        "plural": "μάτια"
    },
    {
        "word": "μύτη",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👃",
        "form": "noun",
        "plural": "μύτες"
    },
    {
        "word": "στόμα",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👄",
        "form": "noun",
        "plural": "στόματα"
    },
    {
        "word": "αυτί",
        "level": "starter",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "form": "noun",
        "plural": "αυτιά"
    },
    {
        "word": "μητέρα",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👩",
        "form": "noun",
        "plural": "μητέρες"
    },
    {
        "word": "πατέρας",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👨",
        "form": "noun",
        "plural": "πατέρες"
    },
    {
        "word": "οικογένεια",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👪",
        "form": "noun",
        "plural": "οικογένειες"
    },
    {
        "word": "φίλος",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👫",
        "form": "noun",
        "plural": "φίλοι"
    },
    {
        "word": "σύντροφος",
        "level": "starter",
        "theme": "marital_status_A0",
        "emoji": "💑",
        "form": "noun",
        "plural": "σύντροφοι"
    },
    {
        "word": "άντρας",
        "level": "starter",
        "theme": "physical_appearance_A1",
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
        "emoji": "🏡",
        "form": "noun",
        "plural": "σπίτια",
        "subtext": "στο σπίτι, πάω σπίτι"
    },
    {
        "word": "διαμέρισμα",
        "level": "starter",
        "theme": "rooms_of_a_home_A0",
        "emoji": "🏢",
        "form": "noun",
        "plural": "διαμερίσματα"
    },
    {
        "word": "γραφείο",
        "level": "starter",
        "theme": "rooms_indoor_spaces_A0",
        "emoji": "🏢",
        "form": "noun",
        "plural": "γραφεία"
    },
    {
        "word": "αυτοκίνητο",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "form": "noun",
        "plural": "αυτοκίνητα"
    },
    {
        "word": "λεωφορείο",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚌",
        "form": "noun",
        "plural": "λεωφορεία"
    },
    {
        "word": "τρένο",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚆",
        "form": "noun",
        "plural": "τρένα"
    },
    {
        "word": "λεφτά",
        "level": "starter",
        "theme": "everyday_shopping_A0",
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
        "emoji": "🌅",
        "form": "noun",
        "plural": "πρωινά"
    },
    {
        "word": "απόγευμα",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "🌆",
        "form": "noun",
        "plural": "απογεύματα"
    },
    {
        "word": "μέρα",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "☀️",
        "form": "noun",
        "plural": "μέρες"
    },
    {
        "word": "βδομάδα",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "📅",
        "form": "noun",
        "plural": "βδομάδες"
    },
    {
        "word": "κάθε μέρα",
        "level": "starter",
        "theme": "times_day_A0",
        "emoji": "🔁",
        "form": "adverb"
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

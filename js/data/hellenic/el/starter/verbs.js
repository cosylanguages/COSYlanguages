(function() {
    const data = [
    {
        "word": "ξυπνάω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "ξυπνάω νωρίς, ξυπνάω στις 7 π.μ.",
        "opposite": "κοιμάμαι",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Σταματάω να κοιμάμαι και ανοίγω τα μάτια μου.",
                "examples": [
                    "Ξυπνάω στις επτά.",
                    "Τι ώρα ξυπνάς;"
                ]
            }
        ]
    },
    {
        "word": "δουλεύω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "δουλεύω σε γραφείο, δουλεύω σκληρά",
        "form": "verb",
        "definitions": [
            {
                "text": "Κάνω μια εργασία για να κερδίσω χρήματα.",
                "examples": [
                    "Δουλεύω πέντε μέρες την εβδομάδα.",
                    "Δουλεύει σε τράπεζα."
                ]
            }
        ]
    },
    {
        "word": "κοιμάμαι",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "κοιμάμαι 8 ώρες, πάω για ύπνο",
        "opposite": "ξυπνάω",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Ξεκουράζομαι με τα μάτια κλειστά.",
                "examples": [
                    "Πρέπει να κοιμηθώ.",
                    "Το μωρό κοιμάται."
                ]
            }
        ]
    },
    {
        "word": "διαβάζω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "διαβάζω ένα βιβλίο, διαβάζω εφημερίδα",
        "opposite": "γράφω",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Κοιτάζω και καταλαβαίνω γραμμένες λέξεις.",
                "examples": [
                    "Διαβάζω ένα βιβλίο κάθε βράδυ.",
                    "Μπορεί να διαβάσει ελληνικά."
                ]
            }
        ]
    },
    {
        "word": "είμαι",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb"
    },
    {
        "word": "έχω",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb"
    },
    {
        "word": "πηγαίνω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "τρώω",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "τρώω ένα μήλο, τρώω βραδινό",
        "opposite": "πίνω",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω τροφή στο στόμα μου και την καταπίνω.",
                "examples": [
                    "Τρώω ένα μήλο κάθε μέρα.",
                    "Τι θέλεις να φας;"
                ]
            }
        ]
    },
    {
        "word": "πίνω",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "πίνω νερό, πίνω καφέ",
        "opposite": "τρώω",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Παίρνω υγρό στο στόμα μου και το καταπίνω.",
                "examples": [
                    "Πίνω πολύ νερό.",
                    "Θέλεις να πιεις κάτι;"
                ]
            }
        ]
    },
    {
        "word": "κάνω",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "μιλάω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "ξέρω",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "σκέφτομαι",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb"
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "βλέπω τηλεόραση, βλέπω μια ταινία",
        "definitions": [
            {
                "text": "Κοιτάζω κάτι για κάποιο χρονικό διάστημα.",
                "examples": [
                    "Βλέπω τηλεόραση το βράδυ.",
                    "Βλέπουν τα πουλιά."
                ]
            }
        ]
    },
    {
        "word": "θέλω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "αγαπάω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb"
    },
    {
        "word": "γράφω",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb"
    },
    {
        "word": "έρχομαι",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb"
    },
    {
        "word": "δίνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb",
        "subtext": "παίρνω το λεωφορείο, παίρνω μια φωτογραφία"
    },
    {
        "word": "βρίσκω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb"
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb"
    },
    {
        "word": "ρωτάω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb"
    },
    {
        "word": "νιώθω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb"
    },
    {
        "word": "προσπαθώ",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb"
    },
    {
        "word": "φεύγω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb"
    },
    {
        "word": "τηλεφωνώ",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb"
    },
    {
        "word": "χρησιμοποιώ",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb"
    },
    {
        "word": "ξεκινάω",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb"
    },
    {
        "word": "βοηθάω",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "παίζω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb"
    },
    {
        "word": "τρέχω",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb"
    },
    {
        "word": "ζω",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb"
    },
    {
        "word": "φέρνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb"
    },
    {
        "word": "κάθομαι",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb"
    },
    {
        "word": "στέκομαι",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb"
    },
    {
        "word": "χάνω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb"
    },
    {
        "word": "πληρώνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb"
    },
    {
        "word": "συναντώ",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb"
    },
    {
        "word": "μαθαίνω",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb"
    },
    {
        "word": "αλλάζω",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb"
    },
    {
        "word": "καταλαβαίνω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb"
    },
    {
        "word": "σταματάω",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb"
    },
    {
        "word": "προσθέτω",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "ξοδεύω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb"
    },
    {
        "word": "ανοίγω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "νικάω",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb"
    },
    {
        "word": "περπατάω",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb"
    },
    {
        "word": "θυμάμαι",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb"
    },
    {
        "word": "αγοράζω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "πεθαίνω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb"
    },
    {
        "word": "στέλνω",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "πέφτω",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "κόβω",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "περνάω",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "πουλάω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "τραβάω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb"
    },
    {
        "word": "σπρώχνω",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb"
    },
    {
        "word": "ελπίζω",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "μαγειρεύω",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "κλείνω",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb"
    },
    {
        "word": "τελειώνω",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "form": "verb"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();

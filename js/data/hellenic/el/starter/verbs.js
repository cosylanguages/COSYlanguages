(function() {
    const data = [
    {
        "word": "ηλιόλουστος",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "☀️",
        "form": "verb"
    },
    {
        "word": "βροχερός",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "verb"
    },
    {
        "word": "πόδι",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "🦶",
        "form": "verb"
    },
    {
        "word": "καφές",
        "theme": "food_drink_A0",
        "level": "starter",
        "article": "ο",
        "baseWord": "καφές",
        "emoji": "☕",
        "form": "verb",
        "plural": "καφές"
    },
    {
        "word": "μπίρα",
        "theme": "food_drink_A0",
        "level": "starter",
        "article": "η",
        "baseWord": "μπίρα",
        "emoji": "🍺",
        "form": "verb",
        "plural": "μπίρα"
    },
    {
        "word": "νερό",
        "theme": "food_drink_A0",
        "level": "starter",
        "article": "το",
        "baseWord": "νερό",
        "emoji": "🚰",
        "form": "verb",
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
        "word": "βιβλίο",
        "theme": "home_A0",
        "level": "starter",
        "article": "το",
        "baseWord": "βιβλίο",
        "numberPlural": "2 βιβλίο",
        "answer": "δύο βιβλία",
        "emoji": "📖",
        "form": "verb",
        "plural": "βιβλία",
        "definitions": [
            {
                "text": "Πολλές σελίδες με λέξεις και εικόνες που διαβάζετε.",
                "examples": [
                    "Διαβάζω ένα βιβλίο κάθε βράδυ.",
                    "Αυτό το βιβλίο είναι ενδιαφέρον."
                ]
            }
        ]
    },
    {
        "word": "είμαι",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👤",
        "subtext": "κρυώνω, είμαι 20 χρονών",
        "form": "verb"
    },
    {
        "word": "έχω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👜",
        "subtext": "τρώω πρωινό, έχω ένα αυτοκίνητο",
        "form": "verb"
    },
    {
        "word": "πηγαίνω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🚶",
        "subtext": "πηγαίνω στο σχολείο, πηγαίνω σπίτι",
        "form": "verb"
    },
    {
        "word": "τρώω",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍎",
        "subtext": "τρώω ένα μήλο, τρώω βραδινό",
        "opposite": "πίνω",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω τροφή στο στόμα και την καταπίνω.",
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
        "theme": "food_drink_A0",
        "emoji": "🥛",
        "subtext": "πίνω νερό, πίνω καφέ",
        "form": "verb",
        "definitions": [
            {
                "text": "Βάζω υγρό στο στόμα και το καταπίνω.",
                "examples": [
                    "Πίνω πολύ νερό.",
                    "Θέλεις κάτι να πιεις;"
                ]
            }
        ]
    },
    {
        "word": "βλέπω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👁️",
        "subtext": "βλέπω μια ταινία, βλέπω ένα φίλο",
        "form": "verb",
        "definitions": [
            {
                "text": "Χρησιμοποιώ τα μάτια μου για να κοιτάξω κάτι.",
                "examples": [
                    "Βλέπω ένα πουλί.",
                    "Είδες αυτή την ταινία;"
                ]
            }
        ]
    },
    {
        "word": "βοηθάω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Δίνω βοήθεια σε κάποιον που τη χρειάζεται.",
                "examples": [
                    "Μπορώ να σε βοηθήσω;",
                    "Βοηθάει τη μητέρα του στο σπίτι."
                ]
            }
        ]
    },
    {
        "word": "περπατάω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Μετακινούμαι με τα πόδια.",
                "examples": [
                    "Περπατάω για να πάω στο σχολείο.",
                    "Ας περπατήσουμε στο πάρκο."
                ]
            }
        ]
    },
    {
        "word": "αγοράζω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "πουλάω",
        "oppositeEmoji": "🏷️",
        "form": "verb"
    },
    {
        "word": "πεθαίνω",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "⚰️",
        "opposite": "ζω",
        "oppositeEmoji": "🏠",
        "form": "verb"
    },
    {
        "word": "στέλνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✉️",
        "form": "verb"
    },
    {
        "word": "μένω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏨",
        "form": "verb"
    },
    {
        "word": "πέφτω",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🍂",
        "form": "verb"
    },
    {
        "word": "κόβω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✂️",
        "form": "verb"
    },
    {
        "word": "περνώ",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏔️",
        "form": "verb"
    },
    {
        "word": "πουλάω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏷️",
        "opposite": "αγοράζω",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "τραβάω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🚜",
        "opposite": "σπρώχνω",
        "oppositeEmoji": "🛒",
        "form": "verb"
    },
    {
        "word": "σπρώχνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛒",
        "opposite": "τραβάω",
        "oppositeEmoji": "🚜",
        "form": "verb"
    },
    {
        "word": "ελπίζω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤞",
        "form": "verb"
    },
    {
        "word": "κουβαλώ",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎒",
        "form": "verb"
    },
    {
        "word": "σπάω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💔",
        "form": "verb"
    },
    {
        "word": "λαμβάνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📩",
        "form": "verb"
    },
    {
        "word": "συμφωνώ",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "form": "verb"
    },
    {
        "word": "σχεδιάζω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Αναπαριστώ κάτι με γραμμές και χρώματα στο χαρτί.",
                "examples": [
                    "Μου αρέσει να σχεδιάζω τοπία.",
                    "Σχεδίασε έναν κύκλο."
                ]
            }
        ]
    },
    {
        "word": "μοιράζομαι",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🍕",
        "form": "verb"
    },
    {
        "word": "χαμογελώ",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😊",
        "opposite": "κλαίω",
        "oppositeEmoji": "😢",
        "form": "verb"
    },
    {
        "word": "κλαίω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "😢",
        "opposite": "χαμογελώ",
        "oppositeEmoji": "😊",
        "form": "verb"
    },
    {
        "word": "χορεύω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "💃",
        "form": "verb"
    },
    {
        "word": "τραγουδάω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎤",
        "form": "verb"
    },
    {
        "word": "πηδάω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🦘",
        "form": "verb"
    },
    {
        "word": "πετάω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "κολυμπάω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏊",
        "form": "verb"
    },
    {
        "word": "πλένω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧼",
        "form": "verb"
    },
    {
        "word": "καθαρίζω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧹",
        "form": "verb"
    },
    {
        "word": "μαγειρεύω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🍳",
        "form": "verb"
    },
    {
        "word": "ταξιδεύω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "✈️",
        "form": "verb"
    },
    {
        "word": "σπουδάζω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "📖",
        "form": "verb"
    },
    {
        "word": "διδάσκω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "👨‍🏫",
        "form": "verb"
    },
    {
        "word": "ακούω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎧",
        "form": "verb"
    },
    {
        "word": "κλείνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔒",
        "opposite": "ανοίγω",
        "oppositeEmoji": "📖",
        "form": "verb"
    },
    {
        "word": "τελειώνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🏁",
        "opposite": "αρχίζω",
        "oppositeEmoji": "▶️",
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

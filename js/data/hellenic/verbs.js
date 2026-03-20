(function() {
    const data = {
    "el": [
        {
            "word": "χορός",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "form": "verb"
        },
        {
            "word": "τραγούδι",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "form": "verb"
        },
        {
            "word": "κηπουρική",
            "level": "intermediate",
            "theme": "society_community_B1",
            "emoji": "🪴",
            "form": "verb"
        },
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
            "word": "χιονισμένος",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "❄️",
            "form": "verb"
        },
        {
            "word": "ανεμώδης",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "💨",
            "form": "verb"
        },
        {
            "word": "συννεφιασμένος",
            "level": "elementary",
            "theme": "environment_A2",
            "emoji": "☁️",
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
            "word": "περιμένω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "💭",
            "form": "verb"
        },
        {
            "word": "υπηρετώ",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🍽️",
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
            "word": "χτίζω",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🏗️",
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
            "word": "φτάνω",
            "level": "elementary",
            "theme": "transport_travel_A2",
            "emoji": "🏁",
            "form": "verb"
        },
        {
            "word": "σκοτώνω",
            "level": "elementary",
            "theme": "health_body_A2",
            "emoji": "⚔️",
            "form": "verb"
        },
        {
            "word": "παραμένω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "⏳",
            "form": "verb"
        },
        {
            "word": "προτείνω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "💡",
            "form": "verb"
        },
        {
            "word": "σηκώνω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🙋",
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
            "word": "απαιτώ",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "📜",
            "form": "verb"
        },
        {
            "word": "αναφέρω",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "📋",
            "form": "verb"
        },
        {
            "word": "αποφασίζω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "⚖️",
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
            "word": "εξηγώ",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "👨‍🏫",
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
            "word": "αναπτύσσω",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "💻",
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
            "word": "υποστηρίζω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "🤝",
            "form": "verb"
        },
        {
            "word": "χτυπώ",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "emoji": "🥊",
            "form": "verb"
        },
        {
            "word": "παράγω",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "🏭",
            "form": "verb"
        },
        {
            "word": "αντιμετωπίζω",
            "level": "elementary",
            "theme": "relationships_dating_A2",
            "emoji": "👤",
            "form": "verb"
        },
        {
            "word": "καλύπτω",
            "level": "elementary",
            "theme": "neighbourhood_A2",
            "emoji": "🧥",
            "form": "verb"
        },
        {
            "word": "περιγράφω",
            "level": "elementary",
            "theme": "career_A2",
            "emoji": "📝",
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
            "word": "πιάζω",
            "level": "elementary",
            "theme": "leisure_hobbies_A2",
            "emoji": "🎣",
            "form": "verb"
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
    ]
};
    if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang]];
            } else {
                window.vocabularyData[lang] = data[lang];
            }
        }
    }
    window.verbsData = { ...window.verbsData, ...data };
})();

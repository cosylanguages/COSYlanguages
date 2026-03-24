(function() {
    const data = [
    {
        "word": "χιονισμένος",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective"
    },
    {
        "word": "ανεμώδης",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective"
    },
    {
        "word": "συννεφιασμένος",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective"
    },
    {
        "word": "όμορφος",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "opposite": "άσχημος"
    },
    {
        "word": "δυνατός",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "form": "adjective",
        "opposite": "αδύναμος"
    },
    {
        "word": "σε φόρμα",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Σε καλή φυσική κατάσταση λόγω τακτικής άσκησης.",
                "examples": [
                    "Τρέχει για να παραμείνει σε φόρμα."
                ]
            }
        ]
    },
    {
        "word": "υπέρβαρος",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "λιποβαρής",
        "definitions": [
            {
                "text": "Πιο βαρύς από όσο θεωρείται υγιές.",
                "examples": [
                    "Ο γιατρός είπε ότι είναι ελαφρώς υπέρβαρος."
                ]
            }
        ]
    },
    {
        "word": "βολικός",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "άβολος",
        "definitions": [
            {
                "text": "Εύκολος στη χρήση ή κατάλληλος για αυτό που χρειάζεστε.",
                "examples": [
                    "Οι ηλεκτρονικές αγορές είναι πολύ βολικές."
                ]
            }
        ]
    },
    {
        "word": "αγχωτικός",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "χαλαρωτικός",
        "definitions": [
            {
                "text": "Που προκαλεί ανησυχία ή άγχος.",
                "examples": [
                    "Η δουλειά της είναι πολύ αγχωτική."
                ]
            }
        ]
    },
    {
        "word": "άνετος",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "opposite": "άβολος",
        "definitions": [
            {
                "text": "Φυσικά χαλαρωτικός· που δεν προκαλεί πόνο ή δυσκολία.",
                "examples": [
                    "Η καρέκλα του γραφείου είναι άνετη."
                ]
            }
        ]
    },
    {
        "word": "πρακτικός",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "μη πρακτικός",
        "definitions": [
            {
                "text": "Χρήσιμος και λογικός σε πραγματικές καταστάσεις.",
                "examples": [
                    "Ένα αυτοκίνητο είναι πρακτικό στην ύπαιθρο."
                ]
            }
        ]
    },
    {
        "word": "δημοφιλής",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "μη δημοφιλής",
        "definitions": [
            {
                "text": "Που αρέσει ή τον απολαμβάνουν πολλοί άνθρωποι.",
                "examples": [
                    "Αυτό το εστιατόριο είναι πολύ δημοφιλές."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

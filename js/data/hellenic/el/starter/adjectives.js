(function() {
    const data = [
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
        "word": "κόκκινο",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🔴",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχοντας το χρώμα του αίματος ή μιας ώριμης ντομάτας.",
                "examples": [
                    "Έχει μια κόκκινη τσάντα."
                ]
            }
        ]
    },
    {
        "word": "μπλε",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🔵",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχοντας το χρώμα του καθαρού ουρανού.",
                "examples": [
                    "Το αυτοκίνητό του είναι μπλε."
                ]
            }
        ]
    },
    {
        "word": "πράσινο",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🟢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχοντας το χρώμα του γρασιδιού ή των φύλλων.",
                "examples": [
                    "Φοράει ένα πράσινο φόρεμα."
                ]
            }
        ]
    },
    {
        "word": "λευκό",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "⚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχοντας το χρώμα του χιονιού ή του γάλακτος.",
                "examples": [
                    "Οι τοίχοι είναι λευκοί."
                ]
            }
        ]
    },
    {
        "word": "μαύρο",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "⚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχοντας το πιο σκούρο χρώμα, όπως ο νυχτερινός ουρανός.",
                "examples": [
                    "Φοράει ένα μαύρο παλτό."
                ]
            }
        ]
    },
    {
        "word": "κίτρινο",
        "level": "starter",
        "theme": "colours_patterns_A0",
        "emoji": "🟡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχοντας το χρώμα του ήλιου ή ενός λεμονιού.",
                "examples": [
                    "Έχει μια κίτρινη ομπρέλα."
                ]
            }
        ]
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
        "word": "ανοιχτό",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🔓",
        "form": "adjective",
        "opposite": "κλειστό",
        "oppositeEmoji": "🔒",
        "definitions": [
            {
                "text": "Όχι κλειστό. που επιτρέπει την είσοδο.",
                "examples": [
                    "Το μαγαζί είναι ανοιχτό μέχρι τις οκτώ."
                ]
            }
        ]
    },
    {
        "word": "κλειστό",
        "level": "starter",
        "theme": "local_places_services_A0",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "ανοιχτό",
        "oppositeEmoji": "🔓",
        "definitions": [
            {
                "text": "Όχι ανοιχτό.",
                "examples": [
                    "Η τράπεζα είναι κλειστή τις Κυριακές."
                ]
            }
        ]
    },
    {
        "word": "δωρεάν",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που δεν κοστίζει χρήματα.",
                "examples": [
                    "Το μουσείο είναι δωρεάν τις Κυριακές."
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
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

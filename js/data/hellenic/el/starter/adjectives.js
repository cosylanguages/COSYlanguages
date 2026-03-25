(function() {
    const data = [
    {
        "word": "ψηλός",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "κοντός",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Άνθρωπος ή πράγμα με μεγάλο ύψος.",
                "examples": [
                    "Είναι πολύ ψηλός."
                ]
            }
        ]
    },
    {
        "word": "κοντός",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "ψηλός",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Άνθρωπος ή πράγμα με μικρό ύψος.",
                "examples": [
                    "Είναι κοντός."
                ]
            }
        ]
    },
    {
        "word": "νέος",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "γέρος",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Κάποιος που έχει μικρή ηλικία.",
                "examples": [
                    "Είναι ένας νέος άντρας."
                ]
            }
        ]
    },
    {
        "word": "γέρος",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "νέος",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Κάποιος που έχει μεγάλη ηλικία.",
                "examples": [
                    "Είναι ένας γέρος άνθρωπος."
                ]
            }
        ]
    },
    {
        "word": "καλός",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "κακός",
        "oppositeEmoji": "👎",
        "definitions": [
            {
                "text": "Κάτι που έχει καλή ποιότητα.",
                "examples": [
                    "Είναι ένας καλός δάσκαλος."
                ]
            }
        ]
    },
    {
        "word": "κακός",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "καλός",
        "oppositeEmoji": "👍",
        "definitions": [
            {
                "text": "Κάτι που δεν είναι καλό.",
                "examples": [
                    "Ο καιρός είναι κακός σήμερα."
                ]
            }
        ]
    },
    {
        "word": "εύκολος",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "δύσκολος",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Κάτι που δεν είναι δύσκολο.",
                "examples": [
                    "Το τεστ είναι εύκολο."
                ]
            }
        ]
    },
    {
        "word": "δύσκολος",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "εύκολος",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Κάτι που απαιτεί προσπάθεια.",
                "examples": [
                    "Αυτή η δουλειά είναι δύσκολη."
                ]
            }
        ]
    },
    {
        "word": "μεγάλος",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "μικρός",
        "oppositeEmoji": "🐭",
        "definitions": [
            {
                "text": "Κάτι με μεγάλες διαστάσεις.",
                "examples": [
                    "Είναι ένα μεγάλο σπίτι."
                ]
            }
        ]
    },
    {
        "word": "μικρός",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "μεγάλος",
        "oppositeEmoji": "🐘",
        "definitions": [
            {
                "text": "Κάτι με μικρές διαστάσεις.",
                "examples": [
                    "Έχει ένα μικρό αυτοκίνητο."
                ]
            }
        ]
    },
    {
        "word": "χαρούμενος",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "λυπημένος",
        "definitions": [
            {
                "text": "Κάποιος που νιώθει χαρά.",
                "examples": [
                    "Είμαι χαρούμενος σήμερα."
                ]
            }
        ]
    },
    {
        "word": "κουρασμένος",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "ξεκούραστος",
        "definitions": [
            {
                "text": "Κάποιος που χρειάζεται ξεκούραση.",
                "examples": [
                    "Είμαι πολύ κουρασμένος μετά τη δουλειά."
                ]
            }
        ]
    },
    {
        "word": "ακριβός",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "φτηνός",
        "oppositeEmoji": "🏷️",
        "definitions": [
            {
                "text": "Κάτι που κοστίζει πολλά λεφτά.",
                "examples": [
                    "Αυτό το ξενοδοχείο είναι πολύ ακριβό."
                ]
            }
        ]
    },
    {
        "word": "φτηνός",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "ακριβός",
        "oppositeEmoji": "💎",
        "definitions": [
            {
                "text": "Κάτι που κοστίζει λίγα λεφτά.",
                "examples": [
                    "Αυτό το μαγαζί είναι φτηνό."
                ]
            }
        ]
    },
    {
        "word": "πλήρους απασχόλησης",
        "level": "baby",
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
        "level": "baby",
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
        "level": "baby",
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
        "level": "baby",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "ανθυγιεινός",
        "definitions": [
            {
                "text": "Καλό για το σώμα σου.",
                "examples": [
                    "Τα λαχανικά είναι υγιεινή τροφή."
                ]
            }
        ]
    },
    {
        "word": "άρρωστος",
        "level": "baby",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "υγιής",
        "definitions": [
            {
                "text": "Κάποιος που δεν είναι καλά στην υγεία του.",
                "examples": [
                    "Νιώθω άρρωστος σήμερα."
                ]
            }
        ]
    },
    {
        "word": "διαδικτυακός",
        "level": "baby",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Αυτό που γίνεται μέσω του διαδικτύου.",
                "examples": [
                    "Αγοράζω φαγητό διαδικτυακά."
                ]
            }
        ]
    },
    {
        "word": "μόνος",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🧍",
        "form": "adjective",
        "opposite": "μαζί",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Χωρίς άλλους ανθρώπους.",
                "examples": [
                    "Ζει μόνη της."
                ]
            }
        ]
    },
    {
        "word": "χαλαρός",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "αγχωμένος",
        "oppositeEmoji": "😫",
        "subtext": "ήρεμος",
        "definitions": [
            {
                "text": "Ήρεμος, χωρίς άγχος.",
                "examples": [
                    "Νιώθω χαλαρός το σαββατοκύριακο."
                ]
            }
        ]
    },
    {
        "word": "ανήσυχος",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "ήρεμος",
        "oppositeEmoji": "😌",
        "subtext": "αγχωμένος",
        "definitions": [
            {
                "text": "Κάποιος που νιώθει άγχος για κάτι.",
                "examples": [
                    "Είναι ανήσυχη για τη δουλειά της."
                ]
            }
        ]
    },
    {
        "word": "απασχολημένος",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "ελεύθερος",
        "definitions": [
            {
                "text": "Κάποιος που έχει πολλά πράγματα να κάνει.",
                "examples": [
                    "Είμαι πολύ απασχολημένος αυτή την εβδομάδα."
                ]
            }
        ]
    },
    {
        "word": "χρήσιμος",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "άχρηστος",
        "definitions": [
            {
                "text": "Κάτι που εξυπηρετεί έναν σκοπό.",
                "examples": [
                    "Ένα αυτοκίνητο είναι πολύ χρήσιμο."
                ]
            }
        ]
    },
    {
        "word": "σημαντικός",
        "level": "baby",
        "theme": "describing_things_A1",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "ουσιώδης",
        "definitions": [
            {
                "text": "Κάτι που έχει μεγάλη αξία.",
                "examples": [
                    "Ο ύπνος είναι πολύ σημαντικός."
                ]
            }
        ]
    },
    {
        "word": "κόκκινος",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🔴",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του αίματος.",
                "examples": [
                    "Έχει μια κόκκινη τσάντα."
                ]
            }
        ]
    },
    {
        "word": "μπλε",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🔵",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του ουρανού.",
                "examples": [
                    "Το αυτοκίνητό του είναι μπλε."
                ]
            }
        ]
    },
    {
        "word": "πράσινος",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🟢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του γρασιδιού.",
                "examples": [
                    "Φοράει ένα πράσινο φόρεμα."
                ]
            }
        ]
    },
    {
        "word": "άσπρος",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "⚪",
        "form": "adjective",
        "opposite": "μαύρος",
        "subtext": "λευκός",
        "definitions": [
            {
                "text": "Το χρώμα του χιονιού.",
                "examples": [
                    "Οι τοίχοι είναι άσπροι."
                ]
            }
        ]
    },
    {
        "word": "μαύρος",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "⚫",
        "form": "adjective",
        "opposite": "άσπρος",
        "definitions": [
            {
                "text": "Το πιο σκούρο χρώμα.",
                "examples": [
                    "Φοράει ένα μαύρο παλτό."
                ]
            }
        ]
    },
    {
        "word": "κίτρινος",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🟡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του ήλιου.",
                "examples": [
                    "Έχει μια κίτρινη ομπρέλα."
                ]
            }
        ]
    },
    {
        "word": "δωρεάν",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "χωρίς χρήματα",
        "definitions": [
            {
                "text": "Κάτι που δεν κοστίζει λεφτά.",
                "examples": [
                    "Το μουσείο είναι δωρεάν τις Κυριακές."
                ]
            }
        ]
    },
    {
        "word": "κρύος",
        "level": "baby",
        "theme": "weather_A0",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "ζεστός",
        "oppositeEmoji": "🔥",
        "definitions": [
            {
                "text": "Κάτι με χαμηλή θερμοκρασία.",
                "examples": [
                    "Κάνει πολύ κρύο σήμερα."
                ]
            }
        ]
    },
    {
        "word": "ζεστός",
        "level": "baby",
        "theme": "weather_A0",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "κρύος",
        "oppositeEmoji": "❄️",
        "subtext": "καυτός",
        "definitions": [
            {
                "text": "Κάτι με υψηλή θερμοκρασία.",
                "examples": [
                    "Κάνει πολλή ζέστη έξω."
                ]
            }
        ]
    },
    {
        "word": "ανοιχτός",
        "level": "baby",
        "theme": "local_places_services_A0",
        "emoji": "🔓",
        "form": "adjective",
        "opposite": "κλειστός",
        "oppositeEmoji": "🔒",
        "definitions": [
            {
                "text": "Κάτι που δεν είναι κλειστό.",
                "examples": [
                    "Το μαγαζί είναι ανοιχτό."
                ]
            }
        ]
    },
    {
        "word": "κλειστός",
        "level": "baby",
        "theme": "local_places_services_A0",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "ανοιχτός",
        "oppositeEmoji": "🔓",
        "definitions": [
            {
                "text": "Κάτι που δεν είναι ανοιχτό.",
                "examples": [
                    "Η τράπεζα είναι κλειστή τις Κυριακές."
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

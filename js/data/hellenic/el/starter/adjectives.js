(function() {
    const data = [
    {
        "word": "ψηλός",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "ψηλή",
        "translation": "tall",
        "emoji": "🦒",
        "neuter": "ψηλό",
        "plural": "ψηλοί"
    },
    {
        "word": "κοντός",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "κοντή",
        "translation": "short",
        "emoji": "📏",
        "neuter": "κοντό",
        "plural": "κοντοί"
    },
    {
        "word": "νέος",
        "level": "starter",
        "theme": "size_shape_A1",
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
        "level": "starter",
        "theme": "size_shape_A1",
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
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "καλή",
        "translation": "good",
        "neuter": "καλό",
        "plural": "καλοί"
    },
    {
        "word": "κακός",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "κακή",
        "translation": "bad",
        "neuter": "κακό",
        "plural": "κακοί"
    },
    {
        "word": "εύκολος",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "εύκολη",
        "translation": "easy",
        "neuter": "εύκολο",
        "plural": "εύκολοι"
    },
    {
        "word": "δύσκολος",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "δύσκολη",
        "translation": "difficult",
        "neuter": "δύσκολο",
        "plural": "δύσκολοι"
    },
    {
        "word": "μεγάλος",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "μεγάλη",
        "translation": "big",
        "neuter": "μεγάλο",
        "plural": "μεγάλοι"
    },
    {
        "word": "μικρός",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "μικρή",
        "translation": "small",
        "neuter": "μικρό",
        "plural": "μικροί"
    },
    {
        "word": "χαρούμενος",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        ],
        "feminine": "χαρούμενη",
        "translation": "happy",
        "neuter": "χαρούμενο",
        "plural": "χαρούμενοι"
    },
    {
        "word": "κουρασμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        ],
        "feminine": "κουρασμένη",
        "translation": "tired",
        "neuter": "κουρασμένο",
        "plural": "κουρασμένοι"
    },
    {
        "word": "ακριβός",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "ακριβή",
        "translation": "expensive",
        "neuter": "ακριβό",
        "plural": "ακριβοί"
    },
    {
        "word": "φτηνός",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "φτηνή",
        "translation": "cheap",
        "neuter": "φτηνό",
        "plural": "φτηνοί"
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
        ],
        "feminine": "καθαρή",
        "translation": "clean",
        "neuter": "καθαρό",
        "plural": "καθαροί"
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
                "text": "Καλό για το σώμα σου.",
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
                "text": "Κάποιος που δεν είναι καλά στην υγεία του.",
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
                "text": "Αυτό που γίνεται μέσω του διαδικτύου.",
                "examples": [
                    "Αγοράζω φαγητό διαδικτυακά."
                ]
            }
        ]
    },
    {
        "word": "μόνος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "level": "starter",
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
        ],
        "feminine": "απασχολημένη",
        "translation": "busy",
        "neuter": "απασχολημένο",
        "plural": "απασχολημένοι"
    },
    {
        "word": "χρήσιμος",
        "level": "starter",
        "theme": "size_shape_A1",
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
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "ουσιώδης",
        "definitions": [
            {
                "text": "Κάτι που έχει μεγάλη αξία.",
                "examples": [
                    "Ο ύπνος είναι πολύ σημαντικός."
                ]
            }
        ],
        "feminine": "σημαντική",
        "translation": "important",
        "neuter": "σημαντικό",
        "plural": "σημαντικοί"
    },
    {
        "word": "κόκκινος",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του αίματος.",
                "examples": [
                    "Έχει μια κόκκινη τσάντα."
                ]
            }
        ],
        "feminine": "κόκκινη",
        "translation": "red",
        "neuter": "κόκκινο",
        "plural": "κόκκινοι"
    },
    {
        "word": "μπλε",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του ουρανού.",
                "examples": [
                    "Το αυτοκίνητό του είναι μπλε."
                ]
            }
        ],
        "feminine": "μπλε",
        "translation": "blue",
        "neuter": "μπλε",
        "plural": "μπλε"
    },
    {
        "word": "πράσινος",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του γρασιδιού.",
                "examples": [
                    "Φοράει ένα πράσινο φόρεμα."
                ]
            }
        ],
        "feminine": "πράσινη",
        "translation": "green",
        "neuter": "πράσινο",
        "plural": "πράσινοι"
    },
    {
        "word": "άσπρος",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
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
        ],
        "feminine": "άσπρη",
        "translation": "white",
        "neuter": "άσπρο",
        "plural": "άσπροι"
    },
    {
        "word": "μαύρος",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "opposite": "άσπρος",
        "definitions": [
            {
                "text": "Το πιο σκούρο χρώμα.",
                "examples": [
                    "Φοράει ένα μαύρο παλτό."
                ]
            }
        ],
        "feminine": "μαύρη",
        "translation": "black",
        "neuter": "μαύρο",
        "plural": "μαύροι"
    },
    {
        "word": "κίτρινος",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το χρώμα του ήλιου.",
                "examples": [
                    "Έχει μια κίτρινη ομπρέλα."
                ]
            }
        ],
        "feminine": "κίτρινη",
        "translation": "yellow",
        "neuter": "κίτρινο",
        "plural": "κίτρινοι"
    },
    {
        "word": "δωρεάν",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "level": "starter",
        "theme": "weather_A1",
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
        ],
        "feminine": "κρύα",
        "translation": "cold",
        "neuter": "κρύο",
        "plural": "κρύοι"
    },
    {
        "word": "ζεστός",
        "level": "starter",
        "theme": "weather_A1",
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
        ],
        "feminine": "ζεστή",
        "translation": "hot",
        "neuter": "ζεστό",
        "plural": "ζεστοί"
    },
    {
        "word": "ανοιχτός",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
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
        ],
        "feminine": "ανοιχτή",
        "translation": "open",
        "neuter": "ανοιχτό",
        "plural": "ανοιχτοί"
    },
    {
        "word": "κλειστός",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "κλειστή",
        "translation": "closed",
        "neuter": "κλειστό",
        "plural": "κλειστοί"
    },
    {
        "word": "μεγάλος",
        "feminine": "μεγάλη",
        "translation": "large",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "μεγάλο",
        "plural": "μεγάλοι"
    },
    {
        "word": "μικρός",
        "feminine": "μικρή",
        "translation": "little",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "μικρό",
        "plural": "μικροί"
    },
    {
        "word": "μακρύς",
        "feminine": "μακριά",
        "translation": "long",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "μακρύ",
        "plural": "μακριοί"
    },
    {
        "word": "υψηλός",
        "feminine": "υψηλή",
        "translation": "high",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📈",
        "form": "adjective",
        "neuter": "υψηλό",
        "plural": "υψηλοί"
    },
    {
        "word": "χαμηλός",
        "feminine": "χαμηλή",
        "translation": "low",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📉",
        "form": "adjective",
        "neuter": "χαμηλό",
        "plural": "χαμηλοί"
    },
    {
        "word": "γεμάτος",
        "feminine": "γεμάτη",
        "translation": "full",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "neuter": "γεμάτο",
        "plural": "γεμάτοι"
    },
    {
        "word": "άδειος",
        "feminine": "άδεια",
        "translation": "empty",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🫙",
        "form": "adjective",
        "neuter": "άδειο",
        "plural": "άδειοι"
    },
    {
        "word": "ζεστός",
        "feminine": "ζεστή",
        "translation": "warm",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "neuter": "ζεστό",
        "plural": "ζεστοί"
    },
    {
        "word": "δροσερός",
        "feminine": "δροσερή",
        "translation": "cool",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌬️",
        "form": "adjective",
        "neuter": "δροσερό",
        "plural": "δροσεροί"
    },
    {
        "word": "βρεγμένος",
        "feminine": "βρεγμένη",
        "translation": "wet",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🚿",
        "form": "adjective",
        "neuter": "βρεγμένο",
        "plural": "βρεγμένοι"
    },
    {
        "word": "στεγνός",
        "feminine": "στεγνή",
        "translation": "dry",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🏜️",
        "form": "adjective",
        "neuter": "στεγνό",
        "plural": "στεγνοί"
    },
    {
        "word": "βρώμικος",
        "feminine": "βρώμικη",
        "translation": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "💩",
        "form": "adjective",
        "neuter": "βρώμικο",
        "plural": "βρώμικοι"
    },
    {
        "word": "σκληρός",
        "feminine": "σκληρή",
        "translation": "hard",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🧱",
        "form": "adjective",
        "neuter": "σκληρό",
        "plural": "σκληροί"
    },
    {
        "word": "μαλακός",
        "feminine": "μαλακή",
        "translation": "soft",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "☁️",
        "form": "adjective",
        "neuter": "μαλακό",
        "plural": "μαλακοί"
    },
    {
        "word": "βαρύς",
        "feminine": "βαριά",
        "translation": "heavy",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🏋️",
        "form": "adjective",
        "neuter": "βαρύ",
        "plural": "βαριοί"
    },
    {
        "word": "ελαφρύς",
        "feminine": "ελαφριά",
        "translation": "light",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "neuter": "ελαφρύ",
        "plural": "ελαφριοί"
    },
    {
        "word": "καφέ",
        "feminine": "καφέ",
        "translation": "brown",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟫",
        "form": "adjective",
        "neuter": "καφέ",
        "plural": "καφέ"
    },
    {
        "word": "γκρι",
        "feminine": "γκρι",
        "translation": "grey",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩶",
        "form": "adjective",
        "neuter": "γκρι",
        "plural": "γκρι"
    },
    {
        "word": "ροζ",
        "feminine": "ροζ",
        "translation": "pink",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩷",
        "form": "adjective",
        "neuter": "ροζ",
        "plural": "ροζ"
    },
    {
        "word": "πορτοκαλί",
        "feminine": "πορτοκαλί",
        "translation": "orange",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟧",
        "form": "adjective",
        "neuter": "πορτοκαλί",
        "plural": "πορτοκαλί"
    },
    {
        "word": "υπέροχος",
        "feminine": "υπέροχη",
        "translation": "great",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🌟",
        "form": "adjective",
        "neuter": "υπέροχο",
        "plural": "υπέροχοι"
    },
    {
        "word": "ωραίος",
        "feminine": "ωραία",
        "translation": "nice",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😊",
        "form": "adjective",
        "neuter": "ωραίο",
        "plural": "ωραίοι"
    },
    {
        "word": "θαυμάσιος",
        "feminine": "θαυμάσια",
        "translation": "wonderful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✨",
        "form": "adjective",
        "neuter": "θαυμάσιο",
        "plural": "θαυμάσιοι"
    },
    {
        "word": "τρομερός",
        "feminine": "τρομερή",
        "translation": "terrible",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😫",
        "form": "adjective",
        "neuter": "τρομερό",
        "plural": "τρομεροί"
    },
    {
        "word": "απαίσιος",
        "feminine": "απαίσια",
        "translation": "awful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤮",
        "form": "adjective",
        "neuter": "απαίσιο",
        "plural": "απαίσιοι"
    },
    {
        "word": "καταπληκτικός",
        "feminine": "καταπληκτική",
        "translation": "amazing",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😲",
        "form": "adjective",
        "neuter": "καταπληκτικό",
        "plural": "καταπληκτικοί"
    },
    {
        "word": "φανταστικός",
        "feminine": "φανταστική",
        "translation": "fantastic",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "φανταστικό",
        "plural": "φανταστικοί"
    },
    {
        "word": "λυπημένος",
        "feminine": "λυπημένη",
        "translation": "sad",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😢",
        "form": "adjective",
        "neuter": "λυπημένο",
        "plural": "λυπημένοι"
    },
    {
        "word": "πεινασμένος",
        "feminine": "πεινασμένη",
        "translation": "hungry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🤤",
        "form": "adjective",
        "neuter": "πεινασμένο",
        "plural": "πεινασμένοι"
    },
    {
        "word": "θυμωμένος",
        "feminine": "θυμωμένη",
        "translation": "angry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😠",
        "form": "adjective",
        "neuter": "θυμωμένο",
        "plural": "θυμωμένοι"
    },
    {
        "word": "βαριεστημένος",
        "feminine": "βαριεστημένη",
        "translation": "bored",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😐",
        "form": "adjective",
        "neuter": "βαριεστημένο",
        "plural": "βαριεστημένοι"
    },
    {
        "word": "ενθουσιασμένος",
        "feminine": "ενθουσιασμένη",
        "translation": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "ενθουσιασμένο",
        "plural": "ενθουσιασμένοι"
    },
    {
        "word": "φοβισμένος",
        "feminine": "φοβισμένη",
        "translation": "afraid",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😨",
        "form": "adjective",
        "neuter": "φοβισμένο",
        "plural": "φοβισμένοι"
    },
    {
        "word": "μετανιωμένος",
        "feminine": "μετανιωμένη",
        "translation": "sorry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥺",
        "form": "adjective",
        "neuter": "μετανιωμένο",
        "plural": "μετανιωμένοι"
    },
    {
        "word": "ελεύθερος",
        "feminine": "ελεύθερη",
        "translation": "free",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "neuter": "ελεύθερο",
        "plural": "ελεύθεροι"
    },
    {
        "word": "σωστός",
        "feminine": "σωστή",
        "translation": "right",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "neuter": "σωστό",
        "plural": "σωστοί"
    },
    {
        "word": "λανθασμένος",
        "feminine": "λανθασμένη",
        "translation": "wrong",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "neuter": "λανθασμένο",
        "plural": "λανθασμένοι"
    },
    {
        "word": "καινούριος",
        "feminine": "καινούρια",
        "translation": "new",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🆕",
        "form": "adjective",
        "neuter": "καινούριο",
        "plural": "καινούριοι"
    },
    {
        "word": "παλιός",
        "feminine": "παλιά",
        "translation": "old",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👴",
        "form": "adjective",
        "neuter": "παλιό",
        "plural": "παλιοί"
    },
    {
        "word": "διαφορετικός",
        "feminine": "διαφορετική",
        "translation": "different",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "↔️",
        "form": "adjective",
        "neuter": "διαφορετικό",
        "plural": "διαφορετικοί"
    },
    {
        "word": "ίδιος",
        "feminine": "ίδια",
        "translation": "same",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "identical",
        "form": "adjective",
        "neuter": "ίδιο",
        "plural": "ίδιοι"
    },
    {
        "word": "γρήγορος",
        "feminine": "γρήγορη",
        "translation": "fast",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "neuter": "γρήγορο",
        "plural": "γρήγοροι"
    },
    {
        "word": "αργός",
        "feminine": "αργή",
        "translation": "slow",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐢",
        "form": "adjective",
        "neuter": "αργό",
        "plural": "αργοί"
    },
    {
        "word": "ήσυχος",
        "feminine": "ήσυχη",
        "translation": "quiet",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤫",
        "form": "adjective",
        "neuter": "ήσυχο",
        "plural": "ήσυχοι"
    },
    {
        "word": "δυνατός",
        "feminine": "δυνατή",
        "translation": "loud",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔊",
        "form": "adjective",
        "neuter": "δυνατό",
        "plural": "δυνατοί"
    },
    {
        "word": "ασφαλής",
        "feminine": "ασφαλής",
        "translation": "safe",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛡️",
        "form": "adjective",
        "neuter": "ασφαλές",
        "plural": "ασφαλείς"
    },
    {
        "word": "επικίνδυνος",
        "feminine": "επικίνδυνη",
        "translation": "dangerous",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "neuter": "επικίνδυνο",
        "plural": "επικίνδυνοι"
    },
    {
        "word": "δυστυχισμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "unhappy",
        "feminine": "δυστυχισμένη",
        "neuter": "δυστυχισμένο",
        "plural": "δυστυχισμένοι"
    },
    {
        "word": "νευρικός",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "nervous",
        "feminine": "νευρική",
        "neuter": "νευρικό",
        "plural": "νευρικοί"
    },
    {
        "word": "αγχωμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "stressed",
        "feminine": "αγχωμένη",
        "neuter": "αγχωμένο",
        "plural": "αγχωμένοι"
    },
    {
        "word": "σίγουρος",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "confident",
        "feminine": "σίγουρη",
        "neuter": "σίγουρο",
        "plural": "σίγουροι"
    },
    {
        "word": "περήφανος",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "proud",
        "feminine": "περήφανη",
        "neuter": "περήφανο",
        "plural": "περήφανοι"
    },
    {
        "word": "φοβισμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "scared",
        "feminine": "φοβισμένη",
        "neuter": "φοβισμένο",
        "plural": "φοβισμένοι"
    },
    {
        "word": "έκπληκτος",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "surprised",
        "feminine": "έκπληκτη",
        "neuter": "έκπληκτο",
        "plural": "έκπληκτοι"
    },
    {
        "word": "απογοητευμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "disappointed",
        "feminine": "απογοητευμένη",
        "neuter": "απογοητευμένο",
        "plural": "απογοητευμένοι"
    },
    {
        "word": "όμορφος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "beautiful",
        "feminine": "όμορφη",
        "neuter": "όμορφο",
        "plural": "όμορφοι"
    },
    {
        "word": "ωραίος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "pretty",
        "feminine": "ωραία",
        "neuter": "ωραίο",
        "plural": "ωραίοι"
    },
    {
        "word": "δυνατός",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "strong",
        "feminine": "δυνατή",
        "neuter": "δυνατό",
        "plural": "δυνατοί"
    },
    {
        "word": "αδύναμος",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "weak",
        "feminine": "αδύναμη",
        "neuter": "αδύναμο",
        "plural": "αδύναμοι"
    },
    {
        "word": "γυμνασμένος",
        "level": "starter",
        "theme": "health_A1",
        "form": "adjective",
        "translation": "fit",
        "feminine": "γυμνασμένη",
        "neuter": "γυμνασμένο",
        "plural": "γυμνασμένοι"
    },
    {
        "word": "εξαιρετικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "excellent",
        "feminine": "εξαιρετική",
        "neuter": "εξαιρετικό",
        "plural": "εξαιρετικοί"
    },
    {
        "word": "τέλειος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "perfect",
        "feminine": "τέλεια",
        "neuter": "τέλειο",
        "plural": "τέλειοι"
    },
    {
        "word": "άχρηστος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useless",
        "feminine": "άχρηστη",
        "neuter": "άχρηστο",
        "plural": "άχρηστοι"
    },
    {
        "word": "σωστός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "correct",
        "feminine": "σωστή",
        "neuter": "σωστό",
        "plural": "σωστοί"
    },
    {
        "word": "ενδιαφέρων",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "interesting",
        "feminine": "ενδιαφέρουσα",
        "neuter": "ενδιαφέρον",
        "plural": "ενδιαφέροντες"
    },
    {
        "word": "βαρετός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "boring",
        "feminine": "βαρετή",
        "neuter": "βαρετό",
        "plural": "βαρετοί"
    },
    {
        "word": "απαραίτητος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "necessary",
        "feminine": "απαραίτητη",
        "neuter": "απαραίτητο",
        "plural": "απαραίτητοι"
    },
    {
        "word": "πιθανός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "possible",
        "feminine": "πιθανή",
        "neuter": "πιθανό",
        "plural": "πιθανοί"
    },
    {
        "word": "αδύνατος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "impossible",
        "feminine": "αδύνατη",
        "neuter": "αδύνατο",
        "plural": "αδύνατοι"
    },
    {
        "word": "ειδικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "special",
        "feminine": "ειδική",
        "neuter": "ειδικό",
        "plural": "ειδικοί"
    },
    {
        "word": "δημοφιλής",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "popular",
        "feminine": "δημοφιλής",
        "neuter": "δημοφιλές",
        "plural": "δημοφιλείς"
    },
    {
        "word": "παρόμοιος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "similar",
        "feminine": "παρόμοια",
        "neuter": "παρόμοιο",
        "plural": "παρόμοιοι"
    },
    {
        "word": "φιλικός",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "friendly",
        "feminine": "φιλική",
        "neuter": "φιλικό",
        "plural": "φιλικοί"
    },
    {
        "word": "ευγενικός",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "kind",
        "feminine": "ευγενική",
        "neuter": "ευγενικό",
        "plural": "ευγενικοί"
    },
    {
        "word": "αστείος",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "funny",
        "feminine": "αστεία",
        "neuter": "αστείο",
        "plural": "αστείοι"
    },
    {
        "word": "έξυπνος",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "clever",
        "feminine": "έξυπνη",
        "neuter": "έξυπνο",
        "plural": "έξυπνοι"
    },
    {
        "word": "ευγενής",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "polite",
        "feminine": "ευγενής",
        "neuter": "ευγενές",
        "plural": "ευγενείς"
    },
    {
        "word": "αγενής",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "rude",
        "feminine": "αγενής",
        "neuter": "αγενές",
        "plural": "αγενείς"
    },
    {
        "word": "τεμπέλης",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "lazy",
        "feminine": "τεμπέλα",
        "neuter": "τεμπέλικο",
        "plural": "τεμπέληδες"
    },
    {
        "word": "ειλικρινής",
        "level": "starter",
        "theme": "personality_A1",
        "form": "adjective",
        "translation": "honest",
        "feminine": "ειλικρινής",
        "neuter": "ειλικρινές",
        "plural": "ειλικρινείς"
    },
    {
        "word": "θορυβώδης",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "noisy",
        "feminine": "θορυβώδης",
        "neuter": "θορυβώδες",
        "plural": "θορυβώδεις"
    },
    {
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "young",
        "feminine": "νέα",
        "neuter": "νέο",
        "plural": "νέοι"
    },
    {
        "word": "υγιής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "healthy",
        "feminine": "υγιής",
        "neuter": "υγιές",
        "plural": "υγιείς"
    },
    {
        "word": "άρρωστος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "ill",
        "feminine": "άρρωστη",
        "neuter": "άρρωστο",
        "plural": "άρρωστοι"
    },
    {
        "word": "χρήσιμος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useful",
        "feminine": "χρήσιμη",
        "neuter": "χρήσιμο",
        "plural": "χρήσιμοι"
    },
    {
        "word": "χαλαρός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "relaxed",
        "feminine": "χαλαρή",
        "neuter": "χαλαρό",
        "plural": "χαλαροί"
    },
    {
        "word": "ανήσυχος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "worried",
        "feminine": "ανήσυχη",
        "neuter": "ανήσυχο",
        "plural": "ανήσυχοι"
    }
];
    const lang = "el";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
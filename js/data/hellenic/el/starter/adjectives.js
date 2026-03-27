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
        "plural": "ψηλοί",
        "subtext": "a tall building / a tall person / tall enough"
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
        "plural": "κοντοί",
        "subtext": "a short journey / short hair / too short"
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
        ],
        "subtext": "νέο πρότζεκτ / κάτι νέο / ολοκαίνουριο"
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
        ],
        "subtext": "γέρος άνθρωπος / πολύ γέρος / γέρος και σοφός"
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
        "plural": "καλοί",
        "subtext": "great, nice, pleasant / good idea / good luck / good value"
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
        "plural": "κακοί",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision"
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
        "plural": "εύκολοι",
        "subtext": "easy to do / nice and easy / not easy"
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
        "plural": "δύσκολοι",
        "subtext": "difficult to do / very difficult / find it difficult"
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
        "plural": "μεγάλοι",
        "subtext": "large, huge / a big house / a big problem / big enough"
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
        "plural": "μικροί",
        "subtext": "little, tiny / a small flat / a small salary / too small"
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
        "plural": "χαρούμενοι",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day"
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
        "plural": "κουρασμένοι",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired"
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
        "plural": "ακριβοί",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive"
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
        "plural": "φτηνοί",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful"
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
        ],
        "subtext": "πλήρους απασχόλησης δουλειά"
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
        ],
        "subtext": "μερικής απασχόλησης εργασία"
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
        "theme": "basic_foods_A1",
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
        ],
        "subtext": "υγιεινή διατροφή / υγιεινός τρόπος ζωής"
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
        ],
        "subtext": "νιώθω άρρωστος / πολύ άρρωστος"
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
        ],
        "subtext": "διαδικτυακά μαθήματα / αγορές διαδικτυακά"
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
        ],
        "subtext": "μένω μόνος / ταξιδεύω μόνος"
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
        "plural": "απασχολημένοι",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy"
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
        ],
        "subtext": "πολύ χρήσιμο / χρήσιμες πληροφορίες"
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
        "plural": "κόκκινοι",
        "subtext": "dark red, bright red / red wine / red face / red light"
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
        "plural": "μπλε",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky"
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
        "plural": "πράσινοι",
        "subtext": "bright green, dark green / green energy / green space / bright green"
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
        "plural": "μαύροι",
        "subtext": "jet black, dark as night / black coffee / black market / jet black"
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
        "plural": "κίτρινοι",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow"
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
        "plural": "κρύοι",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold"
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
        "plural": "ανοιχτοί",
        "subtext": "now open, open for business / open door / open to ideas / wide open"
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
        "plural": "κλειστοί",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door"
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
        "plural": "μεγάλοι",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "subtext": "a large city / a large company / a large amount"
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
        "plural": "μικροί",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "subtext": "a little bit / a little money / too little"
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
        "plural": "μακριοί",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "subtext": "a long journey / a long day / a long time"
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
        "plural": "υψηλοί",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "subtext": "high price / high rent / high quality"
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
        "plural": "χαμηλοί",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "subtext": "low price / low salary / low quality"
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
        "plural": "γεμάτοι",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "subtext": "full time / a full day / full of people"
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
        "plural": "άδειοι",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "subtext": "an empty flat / an empty room / nearly empty"
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
        "plural": "ζεστοί",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "subtext": "warm weather / a warm welcome / keep warm"
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
        "plural": "δροσεροί",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "subtext": "cool weather / a cool drink / stay cool"
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
        "plural": "βρεγμένοι",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "subtext": "wet weather / wet clothes / get wet"
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
        "plural": "στεγνοί",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "subtext": "dry weather / dry skin / keep dry"
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
        "plural": "βρώμικοι",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "subtext": "dirty hands / dirty clothes / get dirty"
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
        "plural": "σκληροί",
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "subtext": "hard work / a hard decision / too hard"
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
        "plural": "μαλακοί",
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "subtext": "soft light / soft music / soft skills"
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
        "plural": "βαριοί",
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "subtext": "heavy traffic / heavy rain / too heavy"
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
        "plural": "ελαφριοί",
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "subtext": "light rain / light traffic / a light meal"
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
        "plural": "καφέ",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "subtext": "dark brown / light brown / brown bread"
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
        "plural": "γκρι",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "subtext": "grey area / grey sky / pale grey"
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
        "plural": "ροζ",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "subtext": "light pink / bright pink / hot pink"
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
        "plural": "πορτοκαλί",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "subtext": "bright orange / dark orange / orange light"
    },
    {
        "word": "υπέροχος",
        "feminine": "υπέροχη",
        "translation": "great",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌟",
        "form": "adjective",
        "neuter": "υπέροχο",
        "plural": "υπέροχοι",
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "subtext": "a great idea / a great opportunity / great value"
    },
    {
        "word": "ωραίος",
        "feminine": "ωραία",
        "translation": "nice",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "neuter": "ωραίο",
        "plural": "ωραίοι",
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "subtext": "a nice day / a nice place / a nice person"
    },
    {
        "word": "θαυμάσιος",
        "feminine": "θαυμάσια",
        "translation": "wonderful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✨",
        "form": "adjective",
        "neuter": "θαυμάσιο",
        "plural": "θαυμάσιοι",
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "subtext": "a wonderful opportunity / a wonderful time"
    },
    {
        "word": "τρομερός",
        "feminine": "τρομερή",
        "translation": "terrible",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😫",
        "form": "adjective",
        "neuter": "τρομερό",
        "plural": "τρομεροί",
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "subtext": "terrible weather / a terrible mistake / terrible news"
    },
    {
        "word": "απαίσιος",
        "feminine": "απαίσια",
        "translation": "awful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤮",
        "form": "adjective",
        "neuter": "απαίσιο",
        "plural": "απαίσιοι",
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "subtext": "awful weather / awful news / simply awful"
    },
    {
        "word": "καταπληκτικός",
        "feminine": "καταπληκτική",
        "translation": "amazing",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😲",
        "form": "adjective",
        "neuter": "καταπληκτικό",
        "plural": "καταπληκτικοί",
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "subtext": "an amazing result / an amazing offer / truly amazing"
    },
    {
        "word": "φανταστικός",
        "feminine": "φανταστική",
        "translation": "fantastic",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "φανταστικό",
        "plural": "φανταστικοί",
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic"
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
        "plural": "λυπημένοι",
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "subtext": "feel sad / a sad situation / deeply sad"
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
        "plural": "πεινασμένοι",
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "subtext": "feel hungry / very hungry / go hungry"
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
        "plural": "θυμωμένοι",
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "subtext": "feel angry / angry with someone / very angry"
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
        "plural": "βαριεστημένοι",
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "subtext": "feel bored / bored with / easily bored"
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
        "plural": "ενθουσιασμένοι",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "subtext": "feel excited / excited about / very excited"
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
        "plural": "φοβισμένοι",
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "subtext": "afraid of / feel afraid / deeply afraid"
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
        "plural": "μετανιωμένοι",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "subtext": "feel sorry / sorry for / sorry about"
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
        "plural": "ελεύθεροι",
        "definitions": [
            {
                "text": "Costing no money; at no charge.",
                "examples": [
                    "The museum is free on Sundays."
                ]
            },
            {
                "text": "Not costing money; not restricted.",
                "examples": [
                    "The parking here is free."
                ]
            }
        ],
        "subtext": "free of charge, free gift / free time / free of charge / free to do"
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
        "plural": "σωστοί",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            }
        ],
        "subtext": "right answer / right time / absolutely right"
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
        "plural": "λανθασμένοι",
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "subtext": "wrong answer / go wrong / completely wrong"
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
        "plural": "καινούριοι",
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "subtext": "new job / brand new / completely new"
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
        "plural": "παλιοί",
        "definitions": [
            {
                "text": "Having lived or existed for a long time.",
                "examples": [
                    "This is an old book."
                ]
            },
            {
                "text": "Having existed for a long time.",
                "examples": [
                    "He works with old clients from ten years ago."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old"
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
        "plural": "διαφορετικοί",
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "subtext": "completely different / very different / different from"
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
        "plural": "ίδιοι",
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "subtext": "the same as / exactly the same / same time"
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
        "plural": "γρήγοροι",
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "subtext": "fast food / fast train / very fast"
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
        "plural": "αργοί",
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "subtext": "slow progress / slow internet / very slow"
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
        "plural": "ήσυχοι",
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "subtext": "quiet area / keep quiet / nice and quiet"
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
        "plural": "δυνατοί",
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "subtext": "loud noise / too loud / a loud voice"
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
        "plural": "ασφαλείς",
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "subtext": "safe area / safe to do / feel safe"
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
        "plural": "επικίνδυνοι",
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "subtext": "dangerous situation / very dangerous / potentially dangerous"
    },
    {
        "word": "δυστυχισμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "unhappy",
        "feminine": "δυστυχισμένη",
        "neuter": "δυστυχισμένο",
        "plural": "δυστυχισμένοι",
        "definitions": [
            {
                "text": "Το να μην νιώθει κάποιος ικανοποιημένος ή χαρούμενος.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "subtext": "δυστυχισμένος για κάτι / βαθιά δυστυχισμένος"
    },
    {
        "word": "νευρικός",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "nervous",
        "feminine": "νευρική",
        "neuter": "νευρικό",
        "plural": "νευρικοί",
        "definitions": [
            {
                "text": "Το να νιώθει κάποιος άγχος ή ανησυχία.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "subtext": "νευρικός πριν από μια συνέντευξη / πολύ νευρικός"
    },
    {
        "word": "αγχωμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "stressed",
        "feminine": "αγχωμένη",
        "neuter": "αγχωμένο",
        "plural": "αγχωμένοι",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out"
    },
    {
        "word": "σίγουρος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "confident",
        "feminine": "σίγουρη",
        "neuter": "σίγουρο",
        "plural": "σίγουροι",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident"
    },
    {
        "word": "περήφανος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "proud",
        "feminine": "περήφανη",
        "neuter": "περήφανο",
        "plural": "περήφανοι",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of"
    },
    {
        "word": "φοβισμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "scared",
        "feminine": "φοβισμένη",
        "neuter": "φοβισμένο",
        "plural": "φοβισμένοι",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared"
    },
    {
        "word": "έκπληκτος",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "surprised",
        "feminine": "έκπληκτη",
        "neuter": "έκπληκτο",
        "plural": "έκπληκτοι",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised"
    },
    {
        "word": "απογοητευμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "disappointed",
        "feminine": "απογοητευμένη",
        "neuter": "απογοητευμένο",
        "plural": "απογοητευμένοι",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with"
    },
    {
        "word": "όμορφος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "beautiful",
        "feminine": "όμορφη",
        "neuter": "όμορφο",
        "plural": "όμορφοι",
        "definitions": [
            {
                "text": "Attractive and pleasing to look at.",
                "examples": [
                    "She has a beautiful, bright office with city views."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful"
    },
    {
        "word": "ωραίος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "pretty",
        "feminine": "ωραία",
        "neuter": "ωραίο",
        "plural": "ωραίοι",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty"
    },
    {
        "word": "δυνατός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "strong",
        "feminine": "δυνατή",
        "neuter": "δυνατό",
        "plural": "δυνατοί",
        "definitions": [
            {
                "text": "Having great physical or mental power.",
                "examples": [
                    "She is a strong leader and very respected."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong"
    },
    {
        "word": "αδύναμος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "weak",
        "feminine": "αδύναμη",
        "neuter": "αδύναμο",
        "plural": "αδύναμοι",
        "definitions": [
            {
                "text": "Lacking strength or power.",
                "examples": [
                    "The signal is weak on the top floor."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak"
    },
    {
        "word": "γυμνασμένος",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "fit",
        "feminine": "γυμνασμένη",
        "neuter": "γυμνασμένο",
        "plural": "γυμνασμένοι",
        "definitions": [
            {
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit"
    },
    {
        "word": "εξαιρετικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "excellent",
        "feminine": "εξαιρετική",
        "neuter": "εξαιρετικό",
        "plural": "εξαιρετικοί",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent"
    },
    {
        "word": "τέλειος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "perfect",
        "feminine": "τέλεια",
        "neuter": "τέλειο",
        "plural": "τέλειοι",
        "definitions": [
            {
                "text": "Without any faults; completely correct.",
                "examples": [
                    "The timing of the launch was perfect."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect"
    },
    {
        "word": "άχρηστος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useless",
        "feminine": "άχρηστη",
        "neuter": "άχρηστο",
        "plural": "άχρηστοι",
        "definitions": [
            {
                "text": "Without any useful value; not helpful.",
                "examples": [
                    "This software is useless for our needs."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea"
    },
    {
        "word": "σωστός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "correct",
        "feminine": "σωστή",
        "neuter": "σωστό",
        "plural": "σωστοί",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Please check the figures are correct."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct"
    },
    {
        "word": "ενδιαφέρων",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "interesting",
        "feminine": "ενδιαφέρουσα",
        "neuter": "ενδιαφέρον",
        "plural": "ενδιαφέροντες",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The new proposal is very interesting."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea"
    },
    {
        "word": "βαρετός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "boring",
        "feminine": "βαρετή",
        "neuter": "βαρετό",
        "plural": "βαρετοί",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The training session was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring"
    },
    {
        "word": "απαραίτητος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "necessary",
        "feminine": "απαραίτητη",
        "neuter": "απαραίτητο",
        "plural": "απαραίτητοι",
        "definitions": [
            {
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do"
    },
    {
        "word": "πιθανός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "possible",
        "feminine": "πιθανή",
        "neuter": "πιθανό",
        "plural": "πιθανοί",
        "definitions": [
            {
                "text": "Able to happen or be achieved.",
                "examples": [
                    "Is it possible to finish by Friday?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible"
    },
    {
        "word": "αδύνατος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "impossible",
        "feminine": "αδύνατη",
        "neuter": "αδύνατο",
        "plural": "αδύνατοι",
        "definitions": [
            {
                "text": "Not able to happen or be done.",
                "examples": [
                    "It is impossible to finish in one day."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible"
    },
    {
        "word": "ειδικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "special",
        "feminine": "ειδική",
        "neuter": "ειδικό",
        "plural": "ειδικοί",
        "definitions": [
            {
                "text": "Different from what is usual; particularly important.",
                "examples": [
                    "She has a special talent for problem-solving."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special"
    },
    {
        "word": "δημοφιλής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "popular",
        "feminine": "δημοφιλής",
        "neuter": "δημοφιλές",
        "plural": "δημοφιλείς",
        "definitions": [
            {
                "text": "Liked by many people.",
                "examples": [
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular"
    },
    {
        "word": "παρόμοιος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "similar",
        "feminine": "παρόμοια",
        "neuter": "παρόμοιο",
        "plural": "παρόμοιοι",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results"
    },
    {
        "word": "φιλικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "friendly",
        "feminine": "φιλική",
        "neuter": "φιλικό",
        "plural": "φιλικοί",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere"
    },
    {
        "word": "ευγενικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "kind",
        "feminine": "ευγενική",
        "neuter": "ευγενικό",
        "plural": "ευγενικοί",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person"
    },
    {
        "word": "αστείος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "funny",
        "feminine": "αστεία",
        "neuter": "αστείο",
        "plural": "αστείοι",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny"
    },
    {
        "word": "έξυπνος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "clever",
        "feminine": "έξυπνη",
        "neuter": "έξυπνο",
        "plural": "έξυπνοι",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough"
    },
    {
        "word": "ευγενής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "polite",
        "feminine": "ευγενής",
        "neuter": "ευγενές",
        "plural": "ευγενείς",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough"
    },
    {
        "word": "αγενής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "rude",
        "feminine": "αγενής",
        "neuter": "αγενές",
        "plural": "αγενείς",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude"
    },
    {
        "word": "τεμπέλης",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "lazy",
        "feminine": "τεμπέλα",
        "neuter": "τεμπέλικο",
        "plural": "τεμπέληδες",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy"
    },
    {
        "word": "ειλικρινής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "honest",
        "feminine": "ειλικρινής",
        "neuter": "ειλικρινές",
        "plural": "ειλικρινείς",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest"
    },
    {
        "word": "θορυβώδης",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "noisy",
        "feminine": "θορυβώδης",
        "neuter": "θορυβώδες",
        "plural": "θορυβώδεις",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "translation": "young",
        "feminine": "νέα",
        "neuter": "νέο",
        "plural": "νέοι",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ]
    },
    {
        "word": "υγιής",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "translation": "healthy",
        "feminine": "υγιής",
        "neuter": "υγιές",
        "plural": "υγιείς",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ],
        "subtext": "well, fit, healthy diet"
    },
    {
        "word": "άρρωστος",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "ill",
        "feminine": "άρρωστη",
        "neuter": "άρρωστο",
        "plural": "άρρωστοι",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ],
        "subtext": "sick, feel ill"
    },
    {
        "word": "χρήσιμος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useful",
        "feminine": "χρήσιμη",
        "neuter": "χρήσιμο",
        "plural": "χρήσιμοι",
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ],
        "subtext": "helpful, practical"
    },
    {
        "word": "χαλαρός",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "relaxed",
        "feminine": "χαλαρή",
        "neuter": "χαλαρό",
        "plural": "χαλαροί",
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "subtext": "calm, feeling relaxed"
    },
    {
        "word": "ανήσυχος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "worried",
        "feminine": "ανήσυχη",
        "neuter": "ανήσυχο",
        "plural": "ανήσυχοι",
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "subtext": "anxious"
    }
];
    const lang = "el";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
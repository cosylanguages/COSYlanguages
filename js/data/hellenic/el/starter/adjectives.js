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
        "emoji": "🦒",
        "neuter": "ψηλό",
        "plural": "ψηλοί",
        "subtext": "ένα ψηλό κτίριο / ένας ψηλός άνθρωπος / αρκετά ψηλός",
        "comparative": "πιο ψηλός",
        "superlative": "ο πιο ψηλός"
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
        "emoji": "📏",
        "neuter": "κοντό",
        "plural": "κοντοί",
        "subtext": "a short journey / short hair / too short",
        "comparative": "πιο κοντός",
        "superlative": "ο πιο κοντός"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
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
        ],
        "comparative": "πιο νέος",
        "superlative": "ο πιο νέος",
        "opposite": "παλιός",
        "oppositeEmoji": "👴",
        "subtext": "young person / young professional / young at heart",
        "word": "νέος"
    },
    {
        "word": "παλιός",
        "feminine": "παλιά",
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
        "subtext": "old friend / old habits / very old",
        "comparative": "πιο παλιός",
        "superlative": "ο πιο παλιός",
        "opposite": "νέος",
        "oppositeEmoji": "👶"
    },
    {
        "word": "ηλιόλουστος",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of light from the sun.",
                "examples": [
                    "It is a sunny day.",
                    "I like sunny weather."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": "πιο ηλιόλουστος",
        "superlative": "ο πιο ηλιόλουστος",
        "feminine": "ηλιόλουστη",
        "neuter": "ηλιόλουστο",
        "plural": "ηλιόλουστοι"
    },
    {
        "word": "βροχερός",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of rain.",
                "examples": [
                    "It is a rainy day.",
                    "Wear a coat, it's rainy outside."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": "πιο βροχερός",
        "superlative": "ο πιο βροχερός",
        "feminine": "βροχερή",
        "neuter": "βροχερό",
        "plural": "βροχεροί"
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
        "neuter": "ζεστό",
        "plural": "ζεστοί",
        "comparative": "πιο ζεστός",
        "superlative": "ο πιο ζεστός"
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
        "neuter": "κρύο",
        "plural": "κρύοι",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "comparative": "κρύτερος",
        "superlative": "ο πιο κρύος"
    },
    {
        "word": "συνηθισμένος",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "ειδικός",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal or usual; not special.",
                "examples": [
                    "It was an ordinary day."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "πιο συνηθισμένος",
        "superlative": "ο πιο συνηθισμένος",
        "feminine": "συνηθισμένη",
        "neuter": "συνηθισμένο",
        "plural": "συνηθισμένοι"
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
        "neuter": "φτηνό",
        "plural": "φτηνοί",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
        "comparative": "πιο φτηνός",
        "superlative": "ο πιο φτηνός"
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
        "neuter": "ακριβό",
        "plural": "ακριβοί",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
        "comparative": "πιο ακριβός",
        "superlative": "ο πιο ακριβός"
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
        "neuter": "καλό",
        "plural": "καλοί",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
        "comparative": "καλύτερος",
        "superlative": "ο καλύτερος"
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
        "neuter": "κακό",
        "plural": "κακοί",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
        "comparative": "χειρότερος",
        "superlative": "ο χειρότερος"
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
        "neuter": "μεγάλο",
        "plural": "μεγάλοι",
        "subtext": "large, huge / a big house / a big problem / big enough",
        "comparative": "μεγάλτερος",
        "superlative": "ο πιο μεγάλος"
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
        "neuter": "μικρό",
        "plural": "μικροί",
        "subtext": "little, tiny / a small flat / a small salary / too small",
        "comparative": "πιο μικρός",
        "superlative": "ο πιο μικρός"
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
        "neuter": "εύκολο",
        "plural": "εύκολοι",
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "εύκολτερος",
        "superlative": "ο πιο εύκολος"
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
        "neuter": "δύσκολο",
        "plural": "δύσκολοι",
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "δύσκολτερος",
        "superlative": "ο πιο δύσκολος"
    },
    {
        "word": "χαρούμενος",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Κάποιος που νιώθει χαρά.",
                "examples": [
                    "Είμαι χαρούμενος σήμερα."
                ]
            }
        ],
        "feminine": "χαρούμενη",
        "neuter": "χαρούμενο",
        "plural": "χαρούμενοι",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
        "comparative": "χαρούμεντερος",
        "superlative": "ο πιο χαρούμενος"
    },
    {
        "word": "κουρασμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Κάποιος που χρειάζεται ξεκούραση.",
                "examples": [
                    "Είμαι πολύ κουρασμένος μετά τη δουλειά."
                ]
            }
        ],
        "feminine": "κουρασμένη",
        "neuter": "κουρασμένο",
        "plural": "κουρασμένοι",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "comparative": "κουρασμέντερος",
        "superlative": "ο πιο κουρασμένος"
    },
    {
        "word": "πλήρους απασχόλησης",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "μερικής απασχόλησης",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": "πιο πλήρους απασχόλησης",
        "superlative": "ο πιο πλήρους απασχόλησης",
        "feminine": "πλήρους απασχόλησης",
        "neuter": "πλήρους απασχόλησης",
        "plural": "πλήρους απασχόλησης"
    },
    {
        "word": "μερικής απασχόλησης",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "πλήρους απασχόλησης",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": "πιο μερικής απασχόλησης",
        "superlative": "ο πιο μερικής απασχόλησης",
        "feminine": "μερικής απασχόλησης",
        "neuter": "μερικής απασχόλησης",
        "plural": "μερικής απασχόλησης"
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
        "neuter": "καθαρό",
        "plural": "καθαροί",
        "comparative": "πιο καθαρός",
        "superlative": "ο πιο καθαρός"
    },
    {
        "word": "υγιής",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
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
        "subtext": "well, fit, healthy diet",
        "comparative": "πιο υγιής",
        "superlative": "ο πιο υγιής",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔"
    },
    {
        "word": "άρρωστος",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
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
        "subtext": "sick, feel ill",
        "comparative": "άρρωσττερος",
        "superlative": "ο πιο άρρωστος",
        "opposite": "well",
        "oppositeEmoji": "💪"
    },
    {
        "word": "διαδικτυακός",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "πιο διαδικτυακός",
        "superlative": "ο πιο διαδικτυακός",
        "feminine": "διαδικτυακή",
        "neuter": "διαδικτυακό",
        "plural": "διαδικτυακοί"
    },
    {
        "word": "μόνος",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "πιο μόνος",
        "superlative": "ο πιο μόνος",
        "feminine": "μόνη",
        "neuter": "μόνο",
        "plural": "μόνοι"
    },
    {
        "word": "χαλαρός",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
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
        "subtext": "calm, feeling relaxed",
        "comparative": "πιο χαλαρός",
        "superlative": "ο πιο χαλαρός",
        "opposite": "αγχωμένος",
        "oppositeEmoji": "😫"
    },
    {
        "word": "ανήσυχος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "anxious",
        "comparative": "ανήσυχτερος",
        "superlative": "ο πιο ανήσυχος",
        "opposite": "calm",
        "oppositeEmoji": "😌"
    },
    {
        "word": "απασχολημένος",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Κάποιος που έχει πολλά πράγματα να κάνει.",
                "examples": [
                    "Είμαι πολύ απασχολημένος αυτή την εβδομάδα."
                ]
            }
        ],
        "feminine": "απασχολημένη",
        "neuter": "απασχολημένο",
        "plural": "απασχολημένοι",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "comparative": "απασχολημέντερος",
        "superlative": "ο πιο απασχολημένος"
    },
    {
        "word": "χρήσιμος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "helpful, practical",
        "comparative": "χρήσιμτερος",
        "superlative": "ο πιο χρήσιμος",
        "opposite": "άχρηστος",
        "oppositeEmoji": "🗑️"
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
        "neuter": "σημαντικό",
        "plural": "σημαντικοί",
        "comparative": "πιο σημαντικός",
        "superlative": "ο πιο σημαντικός"
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
        "neuter": "κόκκινο",
        "plural": "κόκκινοι",
        "subtext": "dark red, bright red / red wine / red face / red light",
        "comparative": "κόκκιντερος",
        "superlative": "ο πιο κόκκινος"
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
        "neuter": "μπλε",
        "plural": "μπλε",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
        "comparative": "πιο μπλε",
        "superlative": "ο πιο μπλε"
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
        "neuter": "πράσινο",
        "plural": "πράσινοι",
        "subtext": "bright green, dark green / green energy / green space / bright green",
        "comparative": "πράσιντερος",
        "superlative": "ο πιο πράσινος"
    },
    {
        "word": "άσπρος",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
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
        "neuter": "άσπρο",
        "plural": "άσπροι",
        "comparative": "άσπρτερος",
        "superlative": "ο πιο άσπρος"
    },
    {
        "word": "μαύρος",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Το πιο σκούρο χρώμα.",
                "examples": [
                    "Φοράει ένα μαύρο παλτό."
                ]
            }
        ],
        "feminine": "μαύρη",
        "neuter": "μαύρο",
        "plural": "μαύροι",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
        "comparative": "μαύρτερος",
        "superlative": "ο πιο μαύρος"
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
        "neuter": "κίτρινο",
        "plural": "κίτρινοι",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
        "comparative": "κίτριντερος",
        "superlative": "ο πιο κίτρινος"
    },
    {
        "word": "ελεύθερος",
        "feminine": "ελεύθερη",
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
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
        "comparative": "ελεύθερτερος",
        "superlative": "ο πιο ελεύθερος"
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
        "neuter": "ανοιχτό",
        "plural": "ανοιχτοί",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
        "comparative": "πιο ανοιχτός",
        "superlative": "ο πιο ανοιχτός"
    },
    {
        "word": "κλειστός",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "ανοιχτός",
        "oppositeEmoji": "📖",
        "definitions": [
            {
                "text": "Κάτι που δεν είναι ανοιχτό.",
                "examples": [
                    "Η τράπεζα είναι κλειστή τις Κυριακές."
                ]
            }
        ],
        "feminine": "κλειστή",
        "neuter": "κλειστό",
        "plural": "κλειστοί",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
        "comparative": "πιο κλειστός",
        "superlative": "ο πιο κλειστός"
    },
    {
        "word": "μεγάλος",
        "feminine": "μεγάλη",
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
        "subtext": "a large city / a large company / a large amount",
        "comparative": "μεγάλτερος",
        "superlative": "ο πιο μεγάλος"
    },
    {
        "word": "μικρός",
        "feminine": "μικρή",
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
        "subtext": "a little bit / a little money / too little",
        "comparative": "πιο μικρός",
        "superlative": "ο πιο μικρός"
    },
    {
        "word": "μακρύς",
        "feminine": "μακριά",
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
        "subtext": "a long journey / a long day / a long time",
        "comparative": "πιο μακρύς",
        "superlative": "ο πιο μακρύς"
    },
    {
        "word": "υψηλός",
        "feminine": "υψηλή",
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
        "subtext": "high price / high rent / high quality",
        "comparative": "πιο υψηλός",
        "superlative": "ο πιο υψηλός"
    },
    {
        "word": "χαμηλός",
        "feminine": "χαμηλή",
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
        "subtext": "low price / low salary / low quality",
        "comparative": "πιο χαμηλός",
        "superlative": "ο πιο χαμηλός"
    },
    {
        "word": "γεμάτος",
        "feminine": "γεμάτη",
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
        "subtext": "full time / a full day / full of people",
        "comparative": "γεμάττερος",
        "superlative": "ο πιο γεμάτος"
    },
    {
        "word": "άδειος",
        "feminine": "άδεια",
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
        "subtext": "an empty flat / an empty room / nearly empty",
        "comparative": "άδειτερος",
        "superlative": "ο πιο άδειος"
    },
    {
        "word": "ζεστός",
        "feminine": "ζεστή",
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
        "subtext": "warm weather / a warm welcome / keep warm",
        "comparative": "πιο ζεστός",
        "superlative": "ο πιο ζεστός"
    },
    {
        "word": "δροσερός",
        "feminine": "δροσερή",
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
        "subtext": "cool weather / a cool drink / stay cool",
        "comparative": "πιο δροσερός",
        "superlative": "ο πιο δροσερός"
    },
    {
        "word": "βρεγμένος",
        "feminine": "βρεγμένη",
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
        "subtext": "wet weather / wet clothes / get wet",
        "comparative": "βρεγμέντερος",
        "superlative": "ο πιο βρεγμένος"
    },
    {
        "word": "στεγνός",
        "feminine": "στεγνή",
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
        "subtext": "dry weather / dry skin / keep dry",
        "comparative": "πιο στεγνός",
        "superlative": "ο πιο στεγνός"
    },
    {
        "word": "βρώμικος",
        "feminine": "βρώμικη",
        "level": "starter",
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
        "subtext": "dirty hands / dirty clothes / get dirty",
        "comparative": "βρώμικτερος",
        "superlative": "ο πιο βρώμικος"
    },
    {
        "word": "σκληρός",
        "feminine": "σκληρή",
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
        "subtext": "hard work / a hard decision / too hard",
        "comparative": "πιο σκληρός",
        "superlative": "ο πιο σκληρός"
    },
    {
        "word": "μαλακός",
        "feminine": "μαλακή",
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
        "subtext": "soft light / soft music / soft skills",
        "comparative": "πιο μαλακός",
        "superlative": "ο πιο μαλακός"
    },
    {
        "word": "βαρύς",
        "feminine": "βαριά",
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
        "subtext": "heavy traffic / heavy rain / too heavy",
        "comparative": "πιο βαρύς",
        "superlative": "ο πιο βαρύς"
    },
    {
        "word": "ελαφρύς",
        "feminine": "ελαφριά",
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
        "subtext": "light rain / light traffic / a light meal",
        "comparative": "πιο ελαφρύς",
        "superlative": "ο πιο ελαφρύς"
    },
    {
        "word": "καφέ",
        "feminine": "καφέ",
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
        "subtext": "dark brown / light brown / brown bread",
        "comparative": "πιο καφέ",
        "superlative": "ο πιο καφέ"
    },
    {
        "word": "γκρι",
        "feminine": "γκρι",
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
        "subtext": "grey area / grey sky / pale grey",
        "comparative": "πιο γκρι",
        "superlative": "ο πιο γκρι"
    },
    {
        "word": "ροζ",
        "feminine": "ροζ",
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
        "subtext": "light pink / bright pink / hot pink",
        "comparative": "πιο ροζ",
        "superlative": "ο πιο ροζ"
    },
    {
        "word": "πορτοκαλί",
        "feminine": "πορτοκαλί",
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
        "subtext": "bright orange / dark orange / orange light",
        "comparative": "πιο πορτοκαλί",
        "superlative": "ο πιο πορτοκαλί"
    },
    {
        "word": "υπέροχος",
        "feminine": "υπέροχη",
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
        "subtext": "a great idea / a great opportunity / great value",
        "comparative": "υπέροχτερος",
        "superlative": "ο πιο υπέροχος"
    },
    {
        "word": "ωραίος",
        "feminine": "ωραία",
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
        "subtext": "a nice day / a nice place / a nice person",
        "comparative": "ωραίτερος",
        "superlative": "ο πιο ωραίος"
    },
    {
        "word": "θαυμάσιος",
        "feminine": "θαυμάσια",
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
        "subtext": "a wonderful opportunity / a wonderful time",
        "comparative": "θαυμάσιτερος",
        "superlative": "ο πιο θαυμάσιος"
    },
    {
        "word": "τρομερός",
        "feminine": "τρομερή",
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
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "comparative": "πιο τρομερός",
        "superlative": "ο πιο τρομερός"
    },
    {
        "word": "απαίσιος",
        "feminine": "απαίσια",
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
        "subtext": "awful weather / awful news / simply awful",
        "comparative": "απαίσιτερος",
        "superlative": "ο πιο απαίσιος"
    },
    {
        "word": "καταπληκτικός",
        "feminine": "καταπληκτική",
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
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "comparative": "πιο καταπληκτικός",
        "superlative": "ο πιο καταπληκτικός"
    },
    {
        "word": "φανταστικός",
        "feminine": "φανταστική",
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
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "comparative": "πιο φανταστικός",
        "superlative": "ο πιο φανταστικός"
    },
    {
        "word": "λυπημένος",
        "feminine": "λυπημένη",
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
        "subtext": "feel sad / a sad situation / deeply sad",
        "comparative": "λυπημέντερος",
        "superlative": "ο πιο λυπημένος"
    },
    {
        "word": "πεινασμένος",
        "feminine": "πεινασμένη",
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
        "subtext": "feel hungry / very hungry / go hungry",
        "comparative": "πεινασμέντερος",
        "superlative": "ο πιο πεινασμένος"
    },
    {
        "word": "θυμωμένος",
        "feminine": "θυμωμένη",
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
        "subtext": "feel angry / angry with someone / very angry",
        "comparative": "θυμωμέντερος",
        "superlative": "ο πιο θυμωμένος"
    },
    {
        "word": "βαριεστημένος",
        "feminine": "βαριεστημένη",
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
        "subtext": "feel bored / bored with / easily bored",
        "comparative": "βαριεστημέντερος",
        "superlative": "ο πιο βαριεστημένος"
    },
    {
        "word": "ενθουσιασμένος",
        "feminine": "ενθουσιασμένη",
        "level": "starter",
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
        "subtext": "feel excited / excited about / very excited",
        "comparative": "ενθουσιασμέντερος",
        "superlative": "ο πιο ενθουσιασμένος"
    },
    {
        "word": "φοβισμένος",
        "feminine": "φοβισμένη",
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
        "subtext": "afraid of / feel afraid / deeply afraid",
        "comparative": "φοβισμέντερος",
        "superlative": "ο πιο φοβισμένος"
    },
    {
        "word": "μετανιωμένος",
        "feminine": "μετανιωμένη",
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
        "subtext": "feel sorry / sorry for / sorry about",
        "comparative": "μετανιωμέντερος",
        "superlative": "ο πιο μετανιωμένος"
    },
    {
        "word": "σωστός",
        "feminine": "σωστή",
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
        "subtext": "right answer / right time / absolutely right",
        "comparative": "πιο σωστός",
        "superlative": "ο πιο σωστός"
    },
    {
        "word": "λανθασμένος",
        "feminine": "λανθασμένη",
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
        "subtext": "wrong answer / go wrong / completely wrong",
        "comparative": "λανθασμέντερος",
        "superlative": "ο πιο λανθασμένος"
    },
    {
        "word": "καινούριος",
        "feminine": "καινούρια",
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
        "subtext": "new job / brand new / completely new",
        "comparative": "καινούριτερος",
        "superlative": "ο πιο καινούριος"
    },
    {
        "word": "διαφορετικός",
        "feminine": "διαφορετική",
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
        "subtext": "completely different / very different / different from",
        "comparative": "πιο διαφορετικός",
        "superlative": "ο πιο διαφορετικός"
    },
    {
        "word": "ίδιος",
        "feminine": "ίδια",
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
        "subtext": "the same as / exactly the same / same time",
        "comparative": "ίδιτερος",
        "superlative": "ο πιο ίδιος"
    },
    {
        "word": "γρήγορος",
        "feminine": "γρήγορη",
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
        "subtext": "fast food / fast train / very fast",
        "comparative": "γρήγορτερος",
        "superlative": "ο πιο γρήγορος"
    },
    {
        "word": "αργός",
        "feminine": "αργή",
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
        "subtext": "slow progress / slow internet / very slow",
        "comparative": "πιο αργός",
        "superlative": "ο πιο αργός"
    },
    {
        "word": "ήσυχος",
        "feminine": "ήσυχη",
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
        "subtext": "quiet area / keep quiet / nice and quiet",
        "comparative": "ήσυχτερος",
        "superlative": "ο πιο ήσυχος"
    },
    {
        "word": "δυνατός",
        "feminine": "δυνατή",
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
        "subtext": "loud noise / too loud / a loud voice",
        "comparative": "πιο δυνατός",
        "superlative": "ο πιο δυνατός"
    },
    {
        "word": "ασφαλής",
        "feminine": "ασφαλής",
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
        "subtext": "safe area / safe to do / feel safe",
        "comparative": "πιο ασφαλής",
        "superlative": "ο πιο ασφαλής"
    },
    {
        "word": "επικίνδυνος",
        "feminine": "επικίνδυνη",
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
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "comparative": "επικίνδυντερος",
        "superlative": "ο πιο επικίνδυνος"
    },
    {
        "word": "δυστυχισμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "δυστυχισμένος για κάτι / βαθιά δυστυχισμένος",
        "comparative": "δυστυχισμέντερος",
        "superlative": "ο πιο δυστυχισμένος"
    },
    {
        "word": "νευρικός",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "νευρικός πριν από μια συνέντευξη / πολύ νευρικός",
        "comparative": "πιο νευρικός",
        "superlative": "ο πιο νευρικός"
    },
    {
        "word": "αγχωμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "αγχωμέντερος",
        "superlative": "ο πιο αγχωμένος"
    },
    {
        "word": "σίγουρος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "σίγουρτερος",
        "superlative": "ο πιο σίγουρος"
    },
    {
        "word": "περήφανος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "feel proud / very proud / proud of",
        "comparative": "περήφαντερος",
        "superlative": "ο πιο περήφανος"
    },
    {
        "word": "φοβισμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel scared / scared of / very scared",
        "comparative": "φοβισμέντερος",
        "superlative": "ο πιο φοβισμένος"
    },
    {
        "word": "έκπληκτος",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": "έκπληκττερος",
        "superlative": "ο πιο έκπληκτος"
    },
    {
        "word": "απογοητευμένος",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": "απογοητευμέντερος",
        "superlative": "ο πιο απογοητευμένος"
    },
    {
        "word": "όμορφος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "όμορφτερος",
        "superlative": "ο πιο όμορφος"
    },
    {
        "word": "ωραίος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "ωραίτερος",
        "superlative": "ο πιο ωραίος"
    },
    {
        "word": "δυνατός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "πιο δυνατός",
        "superlative": "ο πιο δυνατός"
    },
    {
        "word": "αδύναμος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "αδύναμτερος",
        "superlative": "ο πιο αδύναμος"
    },
    {
        "word": "γυμνασμένος",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
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
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": "γυμνασμέντερος",
        "superlative": "ο πιο γυμνασμένος"
    },
    {
        "word": "εξαιρετικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "πιο εξαιρετικός",
        "superlative": "ο πιο εξαιρετικός"
    },
    {
        "word": "τέλειος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "τέλειτερος",
        "superlative": "ο πιο τέλειος"
    },
    {
        "word": "άχρηστος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "άχρησττερος",
        "superlative": "ο πιο άχρηστος"
    },
    {
        "word": "σωστός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "πιο σωστός",
        "superlative": "ο πιο σωστός"
    },
    {
        "word": "ενδιαφέρων",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "πιο ενδιαφέρων",
        "superlative": "ο πιο ενδιαφέρων"
    },
    {
        "word": "βαρετός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "πιο βαρετός",
        "superlative": "ο πιο βαρετός"
    },
    {
        "word": "απαραίτητος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "απαραίτηττερος",
        "superlative": "ο πιο απαραίτητος"
    },
    {
        "word": "πιθανός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "πιο πιθανός",
        "superlative": "ο πιο πιθανός"
    },
    {
        "word": "αδύνατος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "αδύναττερος",
        "superlative": "ο πιο αδύνατος"
    },
    {
        "word": "ειδικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "a special offer / special occasion / very special",
        "comparative": "πιο ειδικός",
        "superlative": "ο πιο ειδικός"
    },
    {
        "word": "δημοφιλής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very popular / popular choice / most popular",
        "comparative": "πιο δημοφιλής",
        "superlative": "ο πιο δημοφιλής"
    },
    {
        "word": "παρόμοιος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very similar / similar to / similar results",
        "comparative": "παρόμοιτερος",
        "superlative": "ο πιο παρόμοιος"
    },
    {
        "word": "φιλικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": "πιο φιλικός",
        "superlative": "ο πιο φιλικός"
    },
    {
        "word": "ευγενικός",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "πιο ευγενικός",
        "superlative": "ο πιο ευγενικός"
    },
    {
        "word": "αστείος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very funny / funny story / find funny",
        "comparative": "αστείτερος",
        "superlative": "ο πιο αστείος"
    },
    {
        "word": "έξυπνος",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "έξυπντερος",
        "superlative": "ο πιο έξυπνος"
    },
    {
        "word": "ευγενής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very polite / polite request / polite enough",
        "comparative": "πιο ευγενής",
        "superlative": "ο πιο ευγενής"
    },
    {
        "word": "αγενής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "πιο αγενής",
        "superlative": "ο πιο αγενής"
    },
    {
        "word": "τεμπέλης",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "πιο τεμπέλης",
        "superlative": "ο πιο τεμπέλης"
    },
    {
        "word": "ειλικρινής",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": "πιο ειλικρινής",
        "superlative": "ο πιο ειλικρινής"
    },
    {
        "word": "θορυβώδης",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "πιο θορυβώδης",
        "superlative": "ο πιο θορυβώδης"
    }
];
    const lang = "el";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
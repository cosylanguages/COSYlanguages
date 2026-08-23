// TODO: verify level classification
(function() {
    const lang = "el";
    const data = [
    {
        "word": "ψηλός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "subtext": "ένας ψηλός άνθρωπος / αρκετά ψηλός",
        "synonyms": [
            "ένα ψηλό κτίριο"
        ],
        "comparative": "πιο ψηλός",
        "superlative": "ο πιο ψηλός",
        "transcription": "/psiˈlos/",
        "lang": "el",
        "antonyms": [
            "κοντός"
        ],
        "id": "el_starter_describing_001"
    },
    {
        "word": "κοντός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "μια σύντομη διαδρομή",
            "κοντά μαλλιά",
            "πολύ κοντό"
        ],
        "comparative": "πιο κοντός",
        "superlative": "ο πιο κοντός",
        "transcription": "/konˈdos/",
        "lang": "el",
        "antonyms": [
            "ψηλός"
        ],
        "id": "el_starter_describing_002"
    },
    {
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "νέα",
        "neuter": "νέο",
        "plural": "νέοι",
        "definitions": [
            {
                "text": "Κάτι που υπάρχει για μικρό χρονικό διάστημα.",
                "examples": [
                    "Είναι ένας νέος άνδρας."
                ]
            }
        ],
        "comparative": "πιο νέος",
        "superlative": "ο πιο νέος",
        "subtext": "",
        "synonyms": [
            "νέα δουλειά",
            "ολοκαίνουργιο"
        ],
        "word": "νέος",
        "transcription": "/ˈneos/",
        "lang": "el",
        "antonyms": [
            "παλιός"
        ],
        "emoji": "✨",
        "id": "el_starter_describing_003"
    },
    {
        "word": "παλιός",
        "feminine": "παλιά",
        "level": "starter",
        "theme": "describing",
        "emoji": "👴",
        "form": "adjective",
        "neuter": "παλιό",
        "plural": "παλιοί",
        "definitions": [
            {
                "text": "Κάτι που υπάρχει για μεγάλο χρονικό διάστημα.",
                "examples": [
                    "Αυτό είναι ένα παλιό βιβλίο."
                ]
            }
        ],
        "subtext": "παλιός φίλος",
        "synonyms": [
            "παλιές συνήθειες",
            "πολύ παλιό"
        ],
        "comparative": "πιο παλιός",
        "superlative": "ο πιο παλιός",
        "transcription": "/paˈljos/",
        "lang": "el",
        "antonyms": [
            "νέος"
        ],
        "id": "el_starter_describing_004"
    },
    {
        "word": "ηλιόλουστος",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχει πολύ φως από τον ήλιο.",
                "examples": [
                    "Είναι μια ηλιόλουστη μέρα.",
                    "Μου αρέσει ο ηλιόλουστος καιρός."
                ]
            }
        ],
        "subtext": "ηλιόλουστος καιρός",
        "synonyms": [
            "ηλιόλουστη μέρα",
            "ηλιοφάνεια"
        ],
        "comparative": "πιο ηλιόλουστος",
        "superlative": "ο πιο ηλιόλουστος",
        "feminine": "ηλιόλουστη",
        "neuter": "ηλιόλουστο",
        "plural": "ηλιόλουστοι",
        "transcription": "/iˈliolustos/",
        "lang": "el",
        "id": "el_starter_nature_001"
    },
    {
        "word": "βροχερός",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Έχει πολλή βροχή.",
                "examples": [
                    "Είναι μια βροχερή μέρα.",
                    "Φόρεσε παλτό, έξω έχει βροχή."
                ]
            }
        ],
        "subtext": "βροχερός καιρός",
        "synonyms": [
            "βροχερή μέρα",
            "εποχή των βροχών"
        ],
        "comparative": "πιο βροχερός",
        "superlative": "ο πιο βροχερός",
        "feminine": "βροχερή",
        "neuter": "βροχερό",
        "plural": "βροχεροί",
        "transcription": "/vroçeˈros/",
        "lang": "el",
        "id": "el_starter_nature_002"
    },
    {
        "word": "ζεστός",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
        "subtext": "ζεστός καιρός",
        "synonyms": [
            "πολύ ζεστό",
            "ένα ζεστό ρόφημα",
            "πολύ ζεστό"
        ],
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
        "superlative": "ο πιο ζεστός",
        "transcription": "/zesˈtos/",
        "lang": "el",
        "antonyms": [
            "κρύος"
        ],
        "id": "el_starter_nature_003"
    },
    {
        "word": "κρύος",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
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
        "subtext": "κρύος καιρός",
        "synonyms": [
            "πολύ κρύο",
            "κρύο πρωινό",
            "ένα κρύο ρόφημα"
        ],
        "comparative": "κρύτερος",
        "superlative": "ο πιο κρύος",
        "transcription": "/ˈkrios/",
        "lang": "el",
        "antonyms": [
            "ζεστός"
        ],
        "id": "el_starter_nature_004"
    },
    {
        "word": "συνηθισμένος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Κάτι που είναι φυσιολογικό ή συνηθισμένο, όχι κάτι το ιδιαίτερο.",
                "examples": [
                    "Ήταν μια συνηθισμένη μέρα."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "συνηθισμένη μέρα",
            "συνηθισμένη ζωή",
            "τίποτα το συνηθισμένο"
        ],
        "comparative": "πιο συνηθισμένος",
        "superlative": "ο πιο συνηθισμένος",
        "feminine": "συνηθισμένη",
        "neuter": "συνηθισμένο",
        "plural": "συνηθισμένοι",
        "transcription": "/siniθizˈmenos/",
        "lang": "el",
        "antonyms": [
            "ειδικός"
        ],
        "emoji": "✨",
        "id": "el_starter_describing_005"
    },
    {
        "word": "φτηνός",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "χαμηλή τιμή",
            "φτηνή πτήση",
            "πολύ φτηνό",
            "φτηνό και καλό"
        ],
        "comparative": "πιο φτηνός",
        "superlative": "ο πιο φτηνός",
        "transcription": "/ftiˈnos/",
        "lang": "el",
        "antonyms": [
            "ακριβός"
        ],
        "id": "el_starter_shopping_001"
    },
    {
        "word": "ακριβός",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "ακριβό αυτοκίνητο",
            "πολύ ακριβό",
            "ακριβό γούστο",
            "πολύ ακριβό"
        ],
        "comparative": "πιο ακριβός",
        "superlative": "ο πιο ακριβός",
        "transcription": "/akriˈvos/",
        "lang": "el",
        "antonyms": [
            "φτηνός"
        ],
        "id": "el_starter_shopping_002"
    },
    {
        "word": "καλός",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "καλή ιδέα",
            "καλή τύχη",
            "καλή αξία"
        ],
        "comparative": "καλύτερος",
        "superlative": "ο καλύτερος",
        "transcription": "/kaˈlos/",
        "lang": "el",
        "antonyms": [
            "κακός"
        ],
        "id": "el_starter_describing_006"
    },
    {
        "word": "κακός",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "κακά νέα",
            "κακή τύχη",
            "κακή απόφαση"
        ],
        "comparative": "χειρότερος",
        "superlative": "ο χειρότερος",
        "transcription": "/kaˈkos/",
        "lang": "el",
        "antonyms": [
            "καλός"
        ],
        "id": "el_starter_describing_007"
    },
    {
        "word": "μεγάλος",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐘",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "μεγάλο σπίτι",
            "μεγάλο πρόβλημα",
            "αρκετά μεγάλο"
        ],
        "comparative": "μεγάλτερος",
        "superlative": "ο πιο μεγάλος",
        "transcription": "/meˈɣalos/",
        "lang": "el",
        "antonyms": [
            "μικρός"
        ],
        "id": "el_starter_describing_008"
    },
    {
        "word": "μικρός",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
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
        "subtext": "μικρός μισθός",
        "synonyms": [
            "μικρό διαμέρισμα",
            "πολύ μικρό"
        ],
        "comparative": "πιο μικρός",
        "superlative": "ο πιο μικρός",
        "transcription": "/miˈkros/",
        "lang": "el",
        "antonyms": [
            "μεγάλος"
        ],
        "id": "el_starter_describing_009"
    },
    {
        "word": "εύκολος",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "εύκολο να γίνει",
            "ωραίο και εύκολο",
            "όχι εύκολο"
        ],
        "comparative": "εύκολτερος",
        "superlative": "ο πιο εύκολος",
        "transcription": "/ˈefcolos/",
        "lang": "el",
        "antonyms": [
            "δύσκολος"
        ],
        "id": "el_starter_describing_010"
    },
    {
        "word": "δύσκολος",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "δύσκολο να γίνει",
            "πολύ δύσκολο",
            "το βρίσκω δύσκολο"
        ],
        "comparative": "δύσκολτερος",
        "superlative": "ο πιο δύσκολος",
        "transcription": "/ˈðiscolos/",
        "lang": "el",
        "antonyms": [
            "εύκολος"
        ],
        "id": "el_starter_describing_011"
    },
    {
        "word": "χαρούμενος",
        "level": "starter",
        "theme": "emotions",
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
        "subtext": "νιώθω χαρούμενος / χαρούμενος με κάτι",
        "synonyms": [
            "μια χαρούμενη μέρα"
        ],
        "comparative": "χαρούμεντερος",
        "superlative": "ο πιο χαρούμενος",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_emotions_001"
    },
    {
        "word": "κουρασμένος",
        "level": "starter",
        "theme": "emotions",
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
        "subtext": "νιώθω κουρασμένος / κουρασμένος από κάτι / πολύ κουρασμένος",
        "comparative": "κουρασμέντερος",
        "superlative": "ο πιο κουρασμένος",
        "transcription": "/kurazˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_002"
    },
    {
        "word": "πλήρους απασχόλησης",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Εργασία για όλες τις ώρες της εβδομάδας.",
                "examples": [
                    "Έχει μια δουλειά πλήρους απασχόλησης σε μια τράπεζα."
                ]
            }
        ],
        "subtext": "εργασία πλήρους απασχόλησης / υπάλληλος πλήρους απασχόλησης",
        "comparative": "πιο πλήρους απασχόλησης",
        "superlative": "ο πιο πλήρους απασχόλησης",
        "feminine": "πλήρους απασχόλησης",
        "neuter": "πλήρους απασχόλησης",
        "plural": "πλήρους απασχόλησης",
        "transcription": "/ˈplirus apasˈçolisis/",
        "lang": "el",
        "antonyms": [
            "μερικής απασχόλησης"
        ],
        "id": "el_starter_work_001"
    },
    {
        "word": "μερικής απασχόλησης",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Εργασία για λιγότερες ώρες από την κανονική εβδομάδα εργασίας.",
                "examples": [
                    "Δουλεύει με μερική απασχόληση τα Σάββατα."
                ]
            }
        ],
        "subtext": "εργασία μερικής απασχόλησης / φοιτητής μερικής απασχόλησης",
        "comparative": "πιο μερικής απασχόλησης",
        "superlative": "ο πιο μερικής απασχόλησης",
        "feminine": "μερικής απασχόλησης",
        "neuter": "μερικής απασχόλησης",
        "plural": "μερικής απασχόλησης",
        "transcription": "/meriˈcis apasˈçolisis/",
        "lang": "el",
        "antonyms": [
            "πλήρους απασχόλησης"
        ],
        "id": "el_starter_work_002"
    },
    {
        "word": "καθαρός",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "καθαρά ρούχα",
            "ένα καθαρό δωμάτιο",
            "διατηρώ καθαρό"
        ],
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
        "superlative": "ο πιο καθαρός",
        "transcription": "/kaθaˈros/",
        "lang": "el",
        "antonyms": [
            "βρώμικος"
        ],
        "id": "el_starter_furniture_001"
    },
    {
        "word": "υγιής",
        "level": "starter",
        "theme": "food_drink",
        "form": "adjective",
        "feminine": "υγιής",
        "neuter": "υγιές",
        "plural": "υγιείς",
        "definitions": [
            {
                "text": "Κάτι καλό για το σώμα, όχι άρρωστο.",
                "examples": [
                    "Τα λαχανικά είναι υγιεινή τροφή."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "καλή φυσική κατάσταση",
            "υγιεινή διατροφή"
        ],
        "comparative": "πιο υγιής",
        "superlative": "ο πιο υγιής",
        "transcription": "/iʝiˈis/",
        "lang": "el",
        "antonyms": [
            "ανθυγιεινός"
        ],
        "emoji": "✨",
        "id": "el_starter_food_drink_001"
    },
    {
        "word": "άρρωστος",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "feminine": "άρρωστη",
        "neuter": "άρρωστο",
        "plural": "άρρωστοι",
        "definitions": [
            {
                "text": "Όχι καλά, ασθενής.",
                "examples": [
                    "Νιώθω άρρωστος σήμερα."
                ]
            }
        ],
        "subtext": "νιώθω άρρωστος",
        "comparative": "πιο άρρωστος",
        "superlative": "ο πιο άρρωστος",
        "transcription": "/ˈarostos/",
        "lang": "el",
        "antonyms": [
            "καλά"
        ],
        "emoji": "✨",
        "id": "el_starter_health_medicine_001"
    },
    {
        "word": "διαδικτυακός",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Που χρησιμοποιεί το διαδίκτυο.",
                "examples": [
                    "Αγοράζω φαγητό μέσω διαδικτύου μερικές φορές."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "διαδικτυακές αγορές",
            "διαδικτυακό μάθημα",
            "μένω συνδεδεμένος"
        ],
        "comparative": "πιο διαδικτυακός",
        "superlative": "ο πιο διαδικτυακός",
        "feminine": "διαδικτυακή",
        "neuter": "διαδικτυακό",
        "plural": "διαδικτυακοί",
        "lang": "el",
        "antonyms": [
            "offline"
        ],
        "transcription": "",
        "id": "el_starter_technology_001"
    },
    {
        "word": "μόνος",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Χωρίς άλλους ανθρώπους, μόνος σου.",
                "examples": [
                    "Ζει μόνη της."
                ]
            }
        ],
        "subtext": "μένω μόνος / ταξιδεύω μόνος / νιώθω μόνος",
        "comparative": "πιο μόνος",
        "superlative": "ο πιο μόνος",
        "feminine": "μόνη",
        "neuter": "μόνο",
        "plural": "μόνοι",
        "transcription": "/ˈmonos/",
        "lang": "el",
        "antonyms": [
            "μαζί"
        ],
        "id": "el_starter_social_001"
    },
    {
        "word": "χαλαρός",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "χαλαρή",
        "neuter": "χαλαρό",
        "plural": "χαλαροί",
        "definitions": [
            {
                "text": "Ήρεμος, χωρίς ανησυχία ή άγχος.",
                "examples": [
                    "Νιώθω χαλαρός το Σαββατοκύριακο."
                ]
            }
        ],
        "subtext": "νιώθω χαλαρός",
        "synonyms": [
            "ήρεμος"
        ],
        "comparative": "πιο χαλαρός",
        "superlative": "ο πιο χαλαρός",
        "transcription": "/xalaˈros/",
        "lang": "el",
        "antonyms": [
            "αγχωμένος"
        ],
        "emoji": "✨",
        "id": "el_starter_emotions_003"
    },
    {
        "word": "ανήσυχος",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "ανήσυχη",
        "neuter": "ανήσυχο",
        "plural": "ανήσυχοι",
        "definitions": [
            {
                "text": "Που νιώθει άγχος για κάτι που μπορεί να συμβεί.",
                "examples": [
                    "Ανησυχεί για τη δουλειά της."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "αγχωμένος"
        ],
        "comparative": "πιο ανήσυχος",
        "superlative": "ο πιο ανήσυχος",
        "transcription": "/aˈnisixos/",
        "lang": "el",
        "antonyms": [
            "ήρεμος"
        ],
        "emoji": "✨",
        "id": "el_starter_emotions_004"
    },
    {
        "word": "απασχολημένος",
        "level": "starter",
        "theme": "work",
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
        "subtext": "πολύ απασχολημένος",
        "synonyms": [
            "πολυάσχολη μέρα",
            "γεμάτο πρόγραμμα"
        ],
        "comparative": "απασχολημέντερος",
        "superlative": "ο πιο απασχολημένος",
        "transcription": "/apasxoliˈmenos/",
        "lang": "el",
        "id": "el_starter_work_003"
    },
    {
        "word": "χρήσιμος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "χρήσιμη",
        "neuter": "χρήσιμο",
        "plural": "χρήσιμοι",
        "definitions": [
            {
                "text": "Βοηθητικός, που έχει πρακτικό σκοπό.",
                "examples": [
                    "Ένα αυτοκίνητο είναι πολύ χρήσιμο στην επαρχία."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "βοηθητικός",
            "πρακτικός"
        ],
        "comparative": "πιο χρήσιμος",
        "superlative": "ο πιο χρήσιμος",
        "transcription": "/ˈçrisimos/",
        "lang": "el",
        "antonyms": [
            "άχρηστος"
        ],
        "emoji": "✨",
        "id": "el_starter_describing_012"
    },
    {
        "word": "σημαντικός",
        "level": "starter",
        "theme": "describing",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "πολύ σημαντικός",
        "synonyms": [
            "απαραίτητος",
            "σημαντική συνάντηση"
        ],
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
        "superlative": "ο πιο σημαντικός",
        "transcription": "/simandiˈkos/",
        "lang": "el",
        "id": "el_starter_describing_013"
    },
    {
        "word": "κόκκινος",
        "level": "starter",
        "theme": "colours",
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
        "subtext": "",
        "synonyms": [
            "κόκκινο κρασί",
            "κόκκινο πρόσωπο",
            "κόκκινο φως"
        ],
        "comparative": "κόκκιντερος",
        "superlative": "ο πιο κόκκινος",
        "transcription": "/ˈkocinos/",
        "lang": "el",
        "id": "el_starter_colours_001"
    },
    {
        "word": "μπλε",
        "level": "starter",
        "theme": "colours",
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
        "subtext": "σκούρο μπλε / μπλε ουρανός",
        "synonyms": [
            "γαλάζιο"
        ],
        "comparative": "πιο μπλε",
        "superlative": "ο πιο μπλε",
        "transcription": "/ble/",
        "lang": "el",
        "id": "el_starter_colours_002"
    },
    {
        "word": "πράσινος",
        "level": "starter",
        "theme": "colours",
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
        "subtext": "",
        "synonyms": [
            "πράσινη ενέργεια",
            "χώρος πρασίνου",
            "έντονο πράσινο"
        ],
        "comparative": "πράσιντερος",
        "superlative": "ο πιο πράσινος",
        "transcription": "/ˈprazinos/",
        "lang": "el",
        "id": "el_starter_colours_003"
    },
    {
        "word": "άσπρος",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "λευκό κρασί",
            "υπόλευκο",
            "καθαρό λευκό"
        ],
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
        "superlative": "ο πιο άσπρος",
        "transcription": "/ˈaspros/",
        "lang": "el",
        "id": "el_starter_colours_004"
    },
    {
        "word": "μαύρος",
        "level": "starter",
        "theme": "colours",
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
        "subtext": "μαύρος καφές",
        "synonyms": [
            "μαύρη αγορά",
            "κατάμαυρος"
        ],
        "comparative": "μαύρτερος",
        "superlative": "ο πιο μαύρος",
        "transcription": "/ˈmavros/",
        "lang": "el",
        "id": "el_starter_colours_005"
    },
    {
        "word": "κίτρινος",
        "level": "starter",
        "theme": "colours",
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
        "subtext": "",
        "synonyms": [
            "κίτρινο φως",
            "απαλό κίτρινο",
            "έντονο κίτρινο"
        ],
        "comparative": "κίτριντερος",
        "superlative": "ο πιο κίτρινος",
        "transcription": "/ˈcitrinos/",
        "lang": "el",
        "id": "el_starter_colours_006"
    },
    {
        "word": "ελεύθερος",
        "feminine": "ελεύθερη",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "form": "adjective",
        "neuter": "ελεύθερο",
        "plural": "ελεύθεροι",
        "definitions": [
            {
                "text": "Δεν κοστίζει χρήματα, χωρίς χρέωση.",
                "examples": [
                    "Το μουσείο είναι δωρεάν τις Κυριακές."
                ]
            }
        ],
        "subtext": "ελεύθερος χρόνος",
        "synonyms": [
            "χωρίς χρέωση",
            "δωρεάν δώρο",
            "δωρεάν"
        ],
        "comparative": "πιο ελεύθερος",
        "superlative": "ο πιο ελεύθερος",
        "transcription": "/eˈlefθeros/",
        "lang": "el",
        "id": "el_starter_shopping_003"
    },
    {
        "word": "ανοιχτός",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
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
        "subtext": "ανοιχτός σε ιδέες",
        "synonyms": [
            "ανοιχτή πόρτα",
            "ορθάνοιχτος"
        ],
        "comparative": "πιο ανοιχτός",
        "superlative": "ο πιο ανοιχτός",
        "transcription": "/aniˈxtos/",
        "lang": "el",
        "antonyms": [
            "κλειστός"
        ],
        "id": "el_starter_shopping_004"
    },
    {
        "word": "κλειστός",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
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
        "subtext": "",
        "synonyms": [
            "κλειστό για μεσημεριανό",
            "κλειστό μυαλό",
            "κλειστή πόρτα"
        ],
        "comparative": "πιο κλειστός",
        "superlative": "ο πιο κλειστός",
        "transcription": "/cliˈstos/",
        "lang": "el",
        "antonyms": [
            "ανοιχτός"
        ],
        "id": "el_starter_shopping_005"
    },
    {
        "word": "μεγάλος",
        "feminine": "μεγάλη",
        "level": "starter",
        "theme": "describing",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "μεγάλο",
        "plural": "μεγάλοι",
        "definitions": [
            {
                "text": "Κάτι με μέγεθος ή ποσότητα πάνω από τον μέσο όρο.",
                "examples": [
                    "Το Παρίσι είναι μια πολύ μεγάλη πόλη."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "μεγάλο σπίτι",
            "μεγάλο πρόβλημα",
            "αρκετά μεγάλο"
        ],
        "comparative": "μεγαλύτερος",
        "superlative": "ο πιο μεγάλος",
        "transcription": "/meˈɣalos/",
        "lang": "el",
        "id": "el_starter_describing_014"
    },
    {
        "word": "μικρός",
        "feminine": "μικρή",
        "level": "starter",
        "theme": "describing",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "μικρό",
        "plural": "μικροί",
        "definitions": [
            {
                "text": "Κάτι με μικρό μέγεθος ή ποσότητα.",
                "examples": [
                    "Οδηγεί ένα μικρό αυτοκίνητο."
                ]
            }
        ],
        "subtext": "μικρός μισθός",
        "synonyms": [
            "μικρό διαμέρισμα",
            "πολύ μικρό"
        ],
        "comparative": "πιο μικρός",
        "superlative": "ο πιο μικρός",
        "transcription": "/miˈkros/",
        "lang": "el",
        "id": "el_starter_describing_015"
    },
    {
        "word": "μακρύς",
        "feminine": "μακριά",
        "level": "starter",
        "theme": "describing",
        "emoji": "📏",
        "form": "adjective",
        "neuter": "μακρύ",
        "plural": "μακριοί",
        "definitions": [
            {
                "text": "Κάτι με μεγάλο μήκος ή που κρατάει πολύ καιρό.",
                "examples": [
                    "Έχει μια μακρινή διαδρομή για τη δουλειά κάθε μέρα."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "μεγάλο ταξίδι",
            "μεγάλη μέρα",
            "πολύς καιρός"
        ],
        "comparative": "πιο μακρύς",
        "superlative": "ο πιο μακρύς",
        "transcription": "/maˈcris/",
        "lang": "el",
        "id": "el_starter_describing_016"
    },
    {
        "word": "υψηλός",
        "feminine": "υψηλή",
        "level": "starter",
        "theme": "describing",
        "emoji": "📈",
        "form": "adjective",
        "neuter": "υψηλό",
        "plural": "υψηλοί",
        "definitions": [
            {
                "text": "Κάτι με ύψος ή επίπεδο πάνω από τον μέσο όρο.",
                "examples": [
                    "Το ενοίκιο σε αυτή την περιοχή είναι πολύ υψηλό."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "υψηλή τιμή",
            "υψηλό ενοίκιο",
            "υψηλή ποιότητα"
        ],
        "comparative": "πιο υψηλός",
        "superlative": "ο πιο υψηλός",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_describing_017"
    },
    {
        "word": "χαμηλός",
        "feminine": "χαμηλή",
        "level": "starter",
        "theme": "describing",
        "emoji": "📉",
        "form": "adjective",
        "neuter": "χαμηλό",
        "plural": "χαμηλοί",
        "definitions": [
            {
                "text": "Κάτι με ύψος ή επίπεδο κάτω από τον μέσο όρο.",
                "examples": [
                    "Ο μισθός είναι πολύ χαμηλός για τις ώρες εργασίας."
                ]
            }
        ],
        "subtext": "χαμηλός μισθός",
        "synonyms": [
            "χαμηλή τιμή",
            "χαμηλή ποιότητα"
        ],
        "comparative": "πιο χαμηλός",
        "superlative": "ο πιο χαμηλός",
        "transcription": "/xamiˈlos/",
        "lang": "el",
        "id": "el_starter_describing_018"
    },
    {
        "word": "γεμάτος",
        "feminine": "γεμάτη",
        "level": "starter",
        "theme": "describing",
        "emoji": "🥛",
        "form": "adjective",
        "neuter": "γεμάτο",
        "plural": "γεμάτοι",
        "definitions": [
            {
                "text": "Κάτι που περιέχει όσο το δυνατόν περισσότερα, πλήρες.",
                "examples": [
                    "Νιώθω γεμάτος μετά από αυτό το μεσημεριανό."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "πλήρες ωράριο",
            "μια γεμάτη μέρα",
            "γεμάτο κόσμο"
        ],
        "comparative": "πιο γεμάτος",
        "superlative": "ο πιο γεμάτος",
        "transcription": "/ʝeˈmatos/",
        "lang": "el",
        "id": "el_starter_describing_019"
    },
    {
        "word": "άδειος",
        "feminine": "άδεια",
        "level": "starter",
        "theme": "describing",
        "emoji": "🫙",
        "form": "adjective",
        "neuter": "άδειο",
        "plural": "άδειοι",
        "definitions": [
            {
                "text": "Δεν περιέχει τίποτα, χωρίς ανθρώπους.",
                "examples": [
                    "Το γραφείο είναι άδειο τα Σαββατοκύριακα."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "άδειο διαμέρισμα",
            "άδειο δωμάτιο",
            "σχεδόν άδειο"
        ],
        "comparative": "πιο άδειος",
        "superlative": "ο πιο άδειος",
        "transcription": "/ˈaðios/",
        "lang": "el",
        "id": "el_starter_describing_020"
    },
    {
        "word": "ζεστός",
        "feminine": "ζεστή",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "adjective",
        "neuter": "ζεστό",
        "plural": "ζεστοί",
        "definitions": [
            {
                "text": "Ελαφρώς καυτός, ευχάριστα θερμασμένος.",
                "examples": [
                    "Το γραφείο είναι ζεστό και άνετο."
                ]
            }
        ],
        "subtext": "ζεστός καιρός",
        "synonyms": [
            "πολύ ζεστό",
            "ένα ζεστό ρόφημα",
            "πολύ ζεστό"
        ],
        "comparative": "πιο ζεστός",
        "superlative": "ο πιο ζεστός",
        "transcription": "/zesˈtos/",
        "lang": "el",
        "id": "el_starter_nature_005"
    },
    {
        "word": "δροσερός",
        "feminine": "δροσερή",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌬️",
        "form": "adjective",
        "neuter": "δροσερό",
        "plural": "δροσεροί",
        "definitions": [
            {
                "text": "Ελαφρώς κρύος, με ευχάριστα χαμηλή θερμοκρασία.",
                "examples": [
                    "Προτιμά τον δροσερό καιρό για να δουλεύει."
                ]
            }
        ],
        "subtext": "δροσερός καιρός / μένω δροσερός",
        "synonyms": [
            "ένα δροσερό ποτό"
        ],
        "comparative": "πιο δροσερός",
        "superlative": "ο πιο δροσερός",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_nature_006"
    },
    {
        "word": "βρεγμένος",
        "feminine": "βρεγμένη",
        "level": "starter",
        "theme": "nature",
        "emoji": "🚿",
        "form": "adjective",
        "neuter": "βρεγμένο",
        "plural": "βρεγμένοι",
        "definitions": [
            {
                "text": "Καλυμμένος με νερό ή υγρό.",
                "examples": [
                    "Το σακάκι του είναι βρεγμένο από τη βροχή."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "βροχερός καιρός",
            "βρεγμένα ρούχα",
            "βρέχομαι"
        ],
        "comparative": "πιο βρεγμένος",
        "superlative": "ο πιο βρεγμένος",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_nature_007"
    },
    {
        "word": "στεγνός",
        "feminine": "στεγνή",
        "level": "starter",
        "theme": "nature",
        "emoji": "🏜️",
        "form": "adjective",
        "neuter": "στεγνό",
        "plural": "στεγνοί",
        "definitions": [
            {
                "text": "Χωρίς νερό ή υγρό, όχι βρεγμένος.",
                "examples": [
                    "Η αποθήκη πρέπει να παραμείνει στεγνή."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ξηρός καιρός",
            "ξηρό δέρμα",
            "διατηρώ στεγνό"
        ],
        "comparative": "πιο στεγνός",
        "superlative": "ο πιο στεγνός",
        "transcription": "/steˈɣnos/",
        "lang": "el",
        "id": "el_starter_nature_008"
    },
    {
        "word": "βρώμικος",
        "feminine": "βρώμικη",
        "level": "starter",
        "theme": "furniture",
        "emoji": "💩",
        "form": "adjective",
        "neuter": "βρώμικο",
        "plural": "βρώμικοι",
        "definitions": [
            {
                "text": "Καλυμμένος με βρωμιά ή ακαθαρσίες.",
                "examples": [
                    "Τα χέρια του είναι βρώμικα μετά την επισκευή του αυτοκινήτου."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "βρώμικα χέρια",
            "βρώμικα ρούχα",
            "λερώνω"
        ],
        "comparative": "πιο βρώμικος",
        "superlative": "ο πιο βρώμικος",
        "transcription": "/ˈvromicos/",
        "lang": "el",
        "id": "el_starter_furniture_002"
    },
    {
        "word": "σκληρός",
        "feminine": "σκληρή",
        "level": "starter",
        "theme": "describing",
        "emoji": "🧱",
        "form": "adjective",
        "neuter": "σκληρό",
        "plural": "σκληροί",
        "definitions": [
            {
                "text": "Σταθερός και συμπαγής, δύσκολος.",
                "examples": [
                    "Η καρέκλα είναι πολύ σκληρή και άβολη."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "σκληρή δουλειά",
            "μια δύσκολη απόφαση",
            "πολύ σκληρό"
        ],
        "comparative": "πιο σκληρός",
        "superlative": "ο πιο σκληρός",
        "transcription": "/skliˈros/",
        "lang": "el",
        "id": "el_starter_describing_021"
    },
    {
        "word": "μαλακός",
        "feminine": "μαλακή",
        "level": "starter",
        "theme": "describing",
        "emoji": "☁️",
        "form": "adjective",
        "neuter": "μαλακό",
        "plural": "μαλακοί",
        "definitions": [
            {
                "text": "Όχι σκληρός, απαλός στην αφή.",
                "examples": [
                    "Ο καναπές είναι πολύ μαλακός και άνετος."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "απαλό φως",
            "απαλή μουσική",
            "ήπιες δεξιότητες"
        ],
        "comparative": "πιο μαλακός",
        "superlative": "ο πιο μαλακός",
        "transcription": "/malaˈkos/",
        "lang": "el",
        "id": "el_starter_describing_022"
    },
    {
        "word": "βαρύς",
        "feminine": "βαριά",
        "level": "starter",
        "theme": "describing",
        "emoji": "🏋️",
        "form": "adjective",
        "neuter": "βαρύ",
        "plural": "βαριοί",
        "definitions": [
            {
                "text": "Με μεγάλο βάρος, δύσκολο στη μεταφορά.",
                "examples": [
                    "Η τσάντα είναι πολύ βαριά με όλα αυτά τα αρχεία."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "έντονη κίνηση",
            "δυνατή βροχή",
            "πολύ βαρύ"
        ],
        "comparative": "πιο βαρύς",
        "superlative": "ο πιο βαρύς",
        "transcription": "/vaˈris/",
        "lang": "el",
        "id": "el_starter_describing_023"
    },
    {
        "word": "ελαφρύς",
        "feminine": "ελαφριά",
        "level": "starter",
        "theme": "describing",
        "emoji": "🪶",
        "form": "adjective",
        "neuter": "ελαφρύ",
        "plural": "ελαφριοί",
        "definitions": [
            {
                "text": "Όχι βαρύς, με ανοιχτό χρώμα.",
                "examples": [
                    "Κουβαλάει μια ελαφριά τσάντα στη δουλειά κάθε μέρα."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ψιλή βροχή",
            "λίγη κίνηση",
            "ένα ελαφρύ γεύμα"
        ],
        "comparative": "πιο ελαφρύς",
        "superlative": "ο πιο ελαφρύς",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_describing_024"
    },
    {
        "word": "καφέ",
        "feminine": "καφέ",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟫",
        "form": "adjective",
        "neuter": "καφέ",
        "plural": "καφέ",
        "definitions": [
            {
                "text": "Έχει το χρώμα του ξύλου ή του χώματος.",
                "examples": [
                    "Έχει καφέ μάτια και σκούρα μαλλιά."
                ]
            }
        ],
        "subtext": "σκούρο καφέ / ανοιχτό καφέ",
        "synonyms": [
            "μαύρο ψωμί"
        ],
        "comparative": "πιο καφέ",
        "superlative": "ο πιο καφέ",
        "transcription": "/kaˈfe/",
        "lang": "el",
        "id": "el_starter_colours_007"
    },
    {
        "word": "γκρι",
        "feminine": "γκρι",
        "level": "starter",
        "theme": "colours",
        "emoji": "🩶",
        "form": "adjective",
        "neuter": "γκρι",
        "plural": "γκρι",
        "definitions": [
            {
                "text": "Έχει ένα χρώμα ανάμεσα στο μαύρο και το λευκό.",
                "examples": [
                    "Έχει γκρίζα μαλλιά και ένα ευγενικό πρόσωπο."
                ]
            }
        ],
        "subtext": "ανοιχτό γκρι",
        "synonyms": [
            "γκρίζα ζώνη",
            "γκρίζος ουρανός"
        ],
        "comparative": "πιο γκρι",
        "superlative": "ο πιο γκρι",
        "transcription": "/ɡri/",
        "lang": "el",
        "id": "el_starter_colours_008"
    },
    {
        "word": "ροζ",
        "feminine": "ροζ",
        "level": "starter",
        "theme": "colours",
        "emoji": "🩷",
        "form": "adjective",
        "neuter": "ροζ",
        "plural": "ροζ",
        "definitions": [
            {
                "text": "Έχει ένα ανοιχτό κόκκινο χρώμα.",
                "examples": [
                    "Προτιμάει το ροζ από το κόκκινο."
                ]
            }
        ],
        "subtext": "ανοιχτό ροζ / έντονο ροζ",
        "synonyms": [
            "φούξια"
        ],
        "comparative": "πιο ροζ",
        "superlative": "ο πιο ροζ",
        "transcription": "/roz/",
        "lang": "el",
        "id": "el_starter_colours_009"
    },
    {
        "word": "πορτοκαλί",
        "feminine": "πορτοκαλί",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟧",
        "form": "adjective",
        "neuter": "πορτοκαλί",
        "plural": "πορτοκαλί",
        "definitions": [
            {
                "text": "Έχει το χρώμα του φρούτου πορτοκάλι.",
                "examples": [
                    "Αγόρασε ένα πορτοκαλί μπουφάν."
                ]
            }
        ],
        "subtext": "έντονο πορτοκαλί / σκούρο πορτοκαλί / πορτοκαλί φως",
        "comparative": "πιο πορτοκαλί",
        "superlative": "ο πιο πορτοκαλί",
        "transcription": "/portokaˈli/",
        "lang": "el",
        "id": "el_starter_colours_010"
    },
    {
        "word": "υπέροχος",
        "feminine": "υπέροχη",
        "level": "starter",
        "theme": "describing",
        "emoji": "🌟",
        "form": "adjective",
        "neuter": "υπέροχο",
        "plural": "υπέροχοι",
        "definitions": [
            {
                "text": "Εξαιρετικά καλό, μεγάλο σε ποσότητα.",
                "examples": [
                    "Είναι μια υπέροχη διευθύντρια."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "μια υπέροχη ευκαιρία",
            "μια υπέροχη στιγμή"
        ],
        "comparative": "πιο υπέροχος",
        "superlative": "ο πιο υπέροχος",
        "transcription": "/iˈperoxos/",
        "lang": "el",
        "id": "el_starter_describing_025"
    },
    {
        "word": "ωραίος",
        "feminine": "ωραία",
        "level": "starter",
        "theme": "describing",
        "emoji": "😊",
        "form": "adjective",
        "neuter": "ωραίο",
        "plural": "ωραίοι",
        "definitions": [
            {
                "text": "Ευχάριστος ή ευγενικός.",
                "examples": [
                    "Το νέο γραφείο είναι πολύ ωραίο."
                ]
            }
        ],
        "subtext": "ένας ωραίος άνθρωπος",
        "synonyms": [
            "μια ωραία μέρα",
            "ένα ωραίο μέρος"
        ],
        "comparative": "πιο ωραίος",
        "superlative": "ο πιο ωραίος",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_describing_026"
    },
    {
        "word": "θαυμάσιος",
        "feminine": "θαυμάσια",
        "level": "starter",
        "theme": "describing",
        "emoji": "✨",
        "form": "adjective",
        "neuter": "θαυμάσιο",
        "plural": "θαυμάσιοι",
        "definitions": [
            {
                "text": "Εξαιρετικά καλό, που προκαλεί ευχαρίστηση.",
                "examples": [
                    "Είχαν μια θαυμάσια ομάδα."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "μια θαυμάσια ευκαιρία",
            "μια θαυμάσια στιγμή"
        ],
        "comparative": "πιο θαυμάσιος",
        "superlative": "ο πιο θαυμάσιος",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_describing_027"
    },
    {
        "word": "τρομερός",
        "feminine": "τρομερή",
        "level": "starter",
        "theme": "describing",
        "emoji": "😫",
        "form": "adjective",
        "neuter": "τρομερό",
        "plural": "τρομεροί",
        "definitions": [
            {
                "text": "Εξαιρετικά κακό.",
                "examples": [
                    "Η κίνηση σήμερα το πρωί ήταν τρομερή."
                ]
            }
        ],
        "subtext": "τρομερός καιρός",
        "synonyms": [
            "ένα τρομερό λάθος",
            "τρομερά νέα"
        ],
        "comparative": "πιο τρομερός",
        "superlative": "ο πιο τρομερός",
        "transcription": "/tromeˈros/",
        "lang": "el",
        "id": "el_starter_describing_028"
    },
    {
        "word": "απαίσιος",
        "feminine": "απαίσια",
        "level": "starter",
        "theme": "describing",
        "emoji": "🤮",
        "form": "adjective",
        "neuter": "απαίσιο",
        "plural": "απαίσιοι",
        "definitions": [
            {
                "text": "Πολύ κακό ή δυσάρεστο.",
                "examples": [
                    "Ο θόρυβος στο γραφείο είναι απαίσιος."
                ]
            }
        ],
        "subtext": "απαίσιος καιρός",
        "synonyms": [
            "απαίσια νέα",
            "απλώς απαίσιο"
        ],
        "comparative": "πιο απαίσιος",
        "superlative": "ο πιο απαίσιος",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_describing_029"
    },
    {
        "word": "καταπληκτικός",
        "feminine": "καταπληκτική",
        "level": "starter",
        "theme": "describing",
        "emoji": "😲",
        "form": "adjective",
        "neuter": "καταπληκτικό",
        "plural": "καταπληκτικοί",
        "definitions": [
            {
                "text": "Που προκαλεί μεγάλη έκπληξη ή θαυμασμό.",
                "examples": [
                    "Έκανε μια καταπληκτική παρουσίαση."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ένα καταπληκτικό αποτέλεσμα",
            "μια καταπληκτική προσφορά",
            "πραγματικά καταπληκτικό"
        ],
        "comparative": "πιο καταπληκτικός",
        "superlative": "ο πιο καταπληκτικός",
        "transcription": "/cataplictiˈkos/",
        "lang": "el",
        "id": "el_starter_describing_030"
    },
    {
        "word": "φανταστικός",
        "feminine": "φανταστική",
        "level": "starter",
        "theme": "describing",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "φανταστικό",
        "plural": "φανταστικοί",
        "definitions": [
            {
                "text": "Εξαιρετικά καλό.",
                "examples": [
                    "Το νέο σύστημα λειτουργεί με φανταστικό τρόπο."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "φανταστικά νέα",
            "μια φανταστική ευκαιρία"
        ],
        "comparative": "πιο φανταστικός",
        "superlative": "ο πιο φανταστικός",
        "transcription": "/fandastiˈkos/",
        "lang": "el",
        "id": "el_starter_describing_031"
    },
    {
        "word": "λυπημένος",
        "feminine": "λυπημένη",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "form": "adjective",
        "neuter": "λυπημένο",
        "plural": "λυπημένοι",
        "definitions": [
            {
                "text": "Που νιώθει δυστυχία ή θλίψη.",
                "examples": [
                    "Ήταν λυπημένος που έφευγε από την εταιρεία."
                ]
            }
        ],
        "subtext": "νιώθω λυπημένος",
        "synonyms": [
            "μια λυπηρή κατάσταση"
        ],
        "comparative": "πιο λυπημένος",
        "superlative": "ο πιο λυπημένος",
        "transcription": "/lipiˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_005"
    },
    {
        "word": "πεινασμένος",
        "feminine": "πεινασμένη",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤤",
        "form": "adjective",
        "neuter": "πεινασμένο",
        "plural": "πεινασμένοι",
        "definitions": [
            {
                "text": "Που χρειάζεται τροφή.",
                "examples": [
                    "Πεινάω — είναι ήδη δύο η ώρα."
                ]
            }
        ],
        "subtext": "νιώθω πεινασμένος / πολύ πεινασμένος",
        "comparative": "πιο πεινασμένος",
        "superlative": "ο πιο πεινασμένος",
        "transcription": "/pinazˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_006"
    },
    {
        "word": "θυμωμένος",
        "feminine": "θυμωμένη",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😠",
        "form": "adjective",
        "neuter": "θυμωμένο",
        "plural": "θυμωμένοι",
        "definitions": [
            {
                "text": "Που νιώθει έντονη δυσαρέσκεια.",
                "examples": [
                    "Ήταν θυμωμένη για την απόφαση."
                ]
            }
        ],
        "subtext": "νιώθω θυμωμένος / θυμωμένος με κάποιον",
        "comparative": "πιο θυμωμένος",
        "superlative": "ο πιο θυμωμένος",
        "transcription": "/θimoˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_007"
    },
    {
        "word": "βαριεστημένος",
        "feminine": "βαριεστημένη",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😐",
        "form": "adjective",
        "neuter": "βαριεστημένο",
        "plural": "βαριεστημένοι",
        "definitions": [
            {
                "text": "Που νιώθει έλλειψη ενδιαφέροντος ή ανησυχία.",
                "examples": [
                    "Βαριέται στις μακρές συναντήσεις."
                ]
            }
        ],
        "subtext": "νιώθω βαριεστημένος",
        "synonyms": [
            "βαριέμαι εύκολα"
        ],
        "comparative": "πιο βαριεστημένος",
        "superlative": "ο πιο βαριεστημένος",
        "transcription": "/variestiˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_008"
    },
    {
        "word": "ενθουσιασμένος",
        "feminine": "ενθουσιασμένη",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤩",
        "form": "adjective",
        "neuter": "ενθουσιασμένο",
        "plural": "ενθουσιασμένοι",
        "definitions": [
            {
                "text": "Που νιώθει ενθουσιασμό και προθυμία.",
                "examples": [
                    "Είναι ενθουσιασμένη για τη νέα της δουλειά."
                ]
            }
        ],
        "subtext": "νιώθω ενθουσιασμένος / πολύ ενθουσιασμένος",
        "comparative": "πιο ενθουσιασμένος",
        "superlative": "ο πιο ενθουσιασμένος",
        "transcription": "/enθusiazˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_009"
    },
    {
        "word": "φοβισμένος",
        "feminine": "φοβισμένη",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😨",
        "form": "adjective",
        "neuter": "φοβισμένο",
        "plural": "φοβισμένοι",
        "definitions": [
            {
                "text": "Που νιώθει φόβο.",
                "examples": [
                    "Φοβάται να κάνει λάθη."
                ]
            }
        ],
        "subtext": "νιώθω φοβισμένος",
        "synonyms": [
            "φοβάμαι κάτι"
        ],
        "comparative": "πιο φοβισμένος",
        "superlative": "ο πιο φοβισμένος",
        "transcription": "/fovizˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_010"
    },
    {
        "word": "μετανιωμένος",
        "feminine": "μετανιωμένη",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🥺",
        "form": "adjective",
        "neuter": "μετανιωμένο",
        "plural": "μετανιωμένοι",
        "definitions": [
            {
                "text": "Νιώθω μετανιωμένος ή λυπημένος.",
                "examples": [
                    "Λυπάται για την καθυστέρηση."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "λυπάμαι",
            "λυπάμαι για κάποιον",
            "μετανιώνω"
        ],
        "comparative": "πιο μετανιωμένος",
        "superlative": "ο πιο μετανιωμένος",
        "transcription": "/metanjoˈmenos/",
        "lang": "el",
        "id": "el_starter_emotions_011"
    },
    {
        "word": "σωστός",
        "feminine": "σωστή",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "neuter": "σωστό",
        "plural": "σωστοί",
        "definitions": [
            {
                "text": "Σωστός, κατάλληλος.",
                "examples": [
                    "Είναι αυτό το σωστό γραφείο;"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "σωστή απάντηση",
            "σωστή ώρα",
            "απόλυτα σωστό"
        ],
        "comparative": "πιο σωστός",
        "superlative": "ο πιο σωστός",
        "transcription": "/sosˈtos/",
        "lang": "el",
        "id": "el_starter_describing_032"
    },
    {
        "word": "λανθασμένος",
        "feminine": "λανθασμένη",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
        "neuter": "λανθασμένο",
        "plural": "λανθασμένοι",
        "definitions": [
            {
                "text": "Όχι σωστό, όχι κατάλληλο.",
                "examples": [
                    "Αυτή ήταν η λάθος απόφαση."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "λανθασμένη απάντηση",
            "πάει λάθος",
            "εντελώς λάθος"
        ],
        "comparative": "πιο λανθασμένος",
        "superlative": "ο πιο λανθασμένος",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_describing_033"
    },
    {
        "word": "καινούριος",
        "feminine": "καινούρια",
        "level": "starter",
        "theme": "describing",
        "emoji": "🆕",
        "form": "adjective",
        "neuter": "καινούριο",
        "plural": "καινούριοι",
        "definitions": [
            {
                "text": "Που δεν υπήρχε πριν, που κατασκευάστηκε πρόσφατα.",
                "examples": [
                    "Έχει μια καινούρια δουλειά που ξεκινάει τον Μάρτιο."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "νέα δουλειά",
            "ολοκαίνουργιο",
            "εντελώς καινούριο"
        ],
        "comparative": "πιο καινούριος",
        "superlative": "ο πιο καινούριος",
        "lang": "el",
        "transcription": "",
        "id": "el_starter_describing_034"
    },
    {
        "word": "διαφορετικός",
        "feminine": "διαφορετική",
        "level": "starter",
        "theme": "describing",
        "emoji": "↔️",
        "form": "adjective",
        "neuter": "διαφορετικό",
        "plural": "διαφορετικοί",
        "definitions": [
            {
                "text": "Όχι το ίδιο με κάποιο άλλο.",
                "examples": [
                    "Αυτή η δουλειά είναι πολύ διαφορετική από την προηγούμενη μου."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "εντελώς διαφορετικό",
            "πολύ διαφορετικό"
        ],
        "comparative": "πιο διαφορετικός",
        "superlative": "ο πιο διαφορετικός",
        "transcription": "/ðiaforetiˈkos/",
        "lang": "el",
        "id": "el_starter_describing_035"
    },
    {
        "word": "ίδιος",
        "feminine": "ίδια",
        "level": "starter",
        "theme": "describing",
        "emoji": "👯",
        "form": "adjective",
        "neuter": "ίδιο",
        "plural": "ίδιοι",
        "definitions": [
            {
                "text": "Όχι διαφορετικός, πανομοιότυπος.",
                "examples": [
                    "Κερδίζουν τον ίδιο μισθό."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "το ίδιο με",
            "ακριβώς το ίδιο",
            "την ίδια στιγμή"
        ],
        "comparative": "πιο ίδιος",
        "superlative": "ο πιο ίδιος",
        "transcription": "/ˈiðios/",
        "lang": "el",
        "id": "el_starter_describing_036"
    },
    {
        "word": "γρήγορος",
        "feminine": "γρήγορη",
        "level": "starter",
        "theme": "describing",
        "emoji": "⚡",
        "form": "adjective",
        "neuter": "γρήγορο",
        "plural": "γρήγοροι",
        "definitions": [
            {
                "text": "Που κινείται ή συμβαίνει γρήγορα.",
                "examples": [
                    "Το τρένο για τη δουλειά είναι γρήγορο και αξιόπιστο."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "γρήγορο φαγητό",
            "γρήγορο τρένο",
            "πολύ γρήγορο"
        ],
        "comparative": "πιο γρήγορος",
        "superlative": "ο πιο γρήγορος",
        "transcription": "/ˈɣriɣoros/",
        "lang": "el",
        "id": "el_starter_describing_037"
    },
    {
        "word": "αργός",
        "feminine": "αργή",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐢",
        "form": "adjective",
        "neuter": "αργό",
        "plural": "αργοί",
        "definitions": [
            {
                "text": "Όχι γρήγορος, που παίρνει πολύ χρόνο.",
                "examples": [
                    "Το νέο σύστημα είναι πολύ αργό."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "αργή πρόοδος",
            "αργό ίντερνετ",
            "πολύ αργό"
        ],
        "comparative": "πιο αργός",
        "superlative": "ο πιο αργός",
        "transcription": "/arˈɣos/",
        "lang": "el",
        "id": "el_starter_describing_038"
    },
    {
        "word": "ήσυχος",
        "feminine": "ήσυχη",
        "level": "starter",
        "theme": "describing",
        "emoji": "🤫",
        "form": "adjective",
        "neuter": "ήσυχο",
        "plural": "ήσυχοι",
        "definitions": [
            {
                "text": "Που κάνει λίγο ή καθόλου θόρυβο, ειρηνικός.",
                "examples": [
                    "Το γραφείο είναι ήσυχο την ώρα του μεσημεριανού."
                ]
            }
        ],
        "subtext": "μένω ήσυχος",
        "synonyms": [
            "ήσυχη περιοχή",
            "ωραία και ήσυχα"
        ],
        "comparative": "πιο ήσυχος",
        "superlative": "ο πιο ήσυχος",
        "transcription": "/ˈisixos/",
        "lang": "el",
        "id": "el_starter_describing_039"
    },
    {
        "word": "δυνατός",
        "feminine": "δυνατή",
        "level": "starter",
        "theme": "describing",
        "emoji": "🔊",
        "form": "adjective",
        "neuter": "δυνατό",
        "plural": "δυνατοί",
        "definitions": [
            {
                "text": "Που κάνει πολύ θόρυβο.",
                "examples": [
                    "Το ανοιχτό γραφείο είναι πολύ θορυβώδες."
                ]
            }
        ],
        "subtext": "δυνατός θόρυβος",
        "synonyms": [
            "πολύ δυνατά",
            "μια δυνατή φωνή"
        ],
        "comparative": "πιο δυνατός",
        "superlative": "ο πιο δυνατός",
        "transcription": "/ðinaˈtos/",
        "lang": "el",
        "id": "el_starter_describing_040"
    },
    {
        "word": "ασφαλής",
        "feminine": "ασφαλής",
        "level": "starter",
        "theme": "places",
        "emoji": "🛡️",
        "form": "adjective",
        "neuter": "ασφαλές",
        "plural": "ασφαλείς",
        "definitions": [
            {
                "text": "Όχι επικίνδυνος, προστατευμένος από βλάβη.",
                "examples": [
                    "Αυτή η γειτονιά είναι πολύ ασφαλής."
                ]
            }
        ],
        "subtext": "ασφαλής περιοχή / νιώθω ασφαλής",
        "synonyms": [
            "ασφαλές να γίνει"
        ],
        "comparative": "πιο ασφαλής",
        "superlative": "ο πιο ασφαλής",
        "transcription": "/asfaliˈis/",
        "lang": "el",
        "id": "el_starter_places_001"
    },
    {
        "word": "επικίνδυνος",
        "feminine": "επικίνδυνη",
        "level": "starter",
        "theme": "places",
        "emoji": "⚠️",
        "form": "adjective",
        "neuter": "επικίνδυνο",
        "plural": "επικίνδυνοι",
        "definitions": [
            {
                "text": "Που είναι πιθανό να προκαλέσει βλάβη.",
                "examples": [
                    "Η διαδρομή σε αυτόν τον δρόμο είναι επικίνδυνη."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "επικίνδυνη κατάσταση",
            "πολύ επικίνδυνο"
        ],
        "comparative": "πιο επικίνδυνος",
        "superlative": "ο πιο επικίνδυνος",
        "transcription": "/epiˈcinðinos/",
        "lang": "el",
        "id": "el_starter_places_002"
    },
    {
        "word": "δυστυχισμένος",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "δυστυχισμένη",
        "neuter": "δυστυχισμένο",
        "plural": "δυστυχισμένοι",
        "definitions": [
            {
                "text": "Το να μην νιώθει κάποιος ικανοποιημένος ή χαρούμενος.",
                "examples": [
                    "Είναι δυσαρεστημένος με τον τρέχοντα μισθό του."
                ]
            }
        ],
        "subtext": "νιώθω δυστυχισμένος",
        "synonyms": [
            "δυσαρεστημένος με"
        ],
        "comparative": "δυστυχισμέντερος",
        "superlative": "ο πιο δυστυχισμένος",
        "transcription": "/ðistiçizˈmenos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_emotions_012"
    },
    {
        "word": "νευρικός",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "νευρική",
        "neuter": "νευρικό",
        "plural": "νευρικοί",
        "definitions": [
            {
                "text": "Το να νιώθει κάποιος άγχος ή ανησυχία.",
                "examples": [
                    "Ήταν νευρικός πριν από τη συνέντευξη για δουλειά."
                ]
            }
        ],
        "subtext": "νευρικός για / πολύ νευρικός",
        "synonyms": [
            "νιώθω νευρικότητα"
        ],
        "comparative": "πιο νευρικός",
        "superlative": "ο πιο νευρικός",
        "transcription": "/nevriˈkos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_emotions_013"
    },
    {
        "word": "αγχωμένος",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "αγχωμένη",
        "neuter": "αγχωμένο",
        "plural": "αγχωμένοι",
        "definitions": [
            {
                "text": "Που νιώθει ανησυχία και ένταση λόγω πίεσης.",
                "examples": [
                    "Νιώθει αγχωμένη πριν από κάθε προθεσμία."
                ]
            }
        ],
        "subtext": "πολύ αγχωμένος",
        "synonyms": [
            "νιώθω άγχος",
            "εξουθενωμένος"
        ],
        "comparative": "πιο αγχωμένος",
        "superlative": "ο πιο αγχωμένος",
        "transcription": "/anxoˈmenos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_emotions_014"
    },
    {
        "word": "σίγουρος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "σίγουρη",
        "neuter": "σίγουρο",
        "plural": "σίγουροι",
        "definitions": [
            {
                "text": "Που νιώθει βεβαιότητα για τις ικανότητές του.",
                "examples": [
                    "Είναι πολύ σίγουρη στις παρουσιάσεις προς τους πελάτες."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "νιώθω σιγουριά",
            "με αυτοπεποίθηση"
        ],
        "comparative": "πιο σίγουρος",
        "superlative": "ο πιο σίγουρος",
        "transcription": "/ˈsiɣuros/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_041"
    },
    {
        "word": "περήφανος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "περήφανη",
        "neuter": "περήφανο",
        "plural": "περήφανοι",
        "definitions": [
            {
                "text": "Που νιώθει ικανοποίηση για ένα επίτευγμα.",
                "examples": [
                    "Ήταν περήφανος που πήρε την πρώτη του προαγωγή."
                ]
            }
        ],
        "subtext": "νιώθω περήφανος / πολύ περήφανος / περήφανος για",
        "comparative": "πιο περήφανος",
        "superlative": "ο πιο περήφανος",
        "transcription": "/peˈrifanos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_042"
    },
    {
        "word": "φοβισμένος",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "φοβισμένη",
        "neuter": "φοβισμένο",
        "plural": "φοβισμένοι",
        "definitions": [
            {
                "text": "Που νιώθει φόβο για κάτι.",
                "examples": [
                    "Φοβόταν να κάνει την παρουσίαση."
                ]
            }
        ],
        "subtext": "νιώθω φοβισμένος",
        "synonyms": [
            "φοβάμαι κάτι"
        ],
        "comparative": "πιο φοβισμένος",
        "superlative": "ο πιο φοβισμένος",
        "transcription": "/fovizˈmenos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_emotions_015"
    },
    {
        "word": "έκπληκτος",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "έκπληκτη",
        "neuter": "έκπληκτο",
        "plural": "έκπληκτοι",
        "definitions": [
            {
                "text": "Που νιώθει σοκ από κάτι απροσδόκητο.",
                "examples": [
                    "Ήταν έκπληκτος που πήρε αύξηση."
                ]
            }
        ],
        "subtext": "πολύ έκπληκτος / ευχάριστα έκπληκτος",
        "comparative": "πιο έκπληκτος",
        "superlative": "ο πιο έκπληκτος",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_emotions_016"
    },
    {
        "word": "απογοητευμένος",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "feminine": "απογοητευμένη",
        "neuter": "απογοητευμένο",
        "plural": "απογοητευμένοι",
        "definitions": [
            {
                "text": "Που νιώθει λύπη επειδή κάτι δεν ήταν τόσο καλό όσο αναμενόταν.",
                "examples": [
                    "Απογοητεύτηκε που δεν πήρε τη δουλειά."
                ]
            }
        ],
        "subtext": "βαθιά απογοητευμένος / απογοητευμένος με",
        "comparative": "πιο απογοητευμένος",
        "superlative": "ο πιο απογοητευμένος",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_emotions_017"
    },
    {
        "word": "όμορφος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "όμορφη",
        "neuter": "όμορφο",
        "plural": "όμορφοι",
        "definitions": [
            {
                "text": "Ελκυστικός και ευχάριστος στην όψη.",
                "examples": [
                    "Έχει ένα όμορφο, φωτεινό γραφείο με θέα στην πόλη."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "όμορφη θέα",
            "όμορφη πόλη",
            "απόλυτα όμορφο"
        ],
        "comparative": "πιο όμορφος",
        "superlative": "ο πιο όμορφος",
        "transcription": "/ˈomorfos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_043"
    },
    {
        "word": "ωραίος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "ωραία",
        "neuter": "ωραίο",
        "plural": "ωραίοι",
        "definitions": [
            {
                "text": "Ευχάριστο στην όψη, αρκετά ελκυστικό.",
                "examples": [
                    "Η νέα αίθουσα συνεδριάσεων είναι πολύ ωραία."
                ]
            }
        ],
        "subtext": "ένας ωραίος άνθρωπος",
        "synonyms": [
            "μια ωραία μέρα",
            "ένα ωραίο μέρος"
        ],
        "comparative": "ωραίτερος",
        "superlative": "ο πιο ωραίος",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_describing_044"
    },
    {
        "word": "δυνατός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "δυνατή",
        "neuter": "δυνατό",
        "plural": "δυνατοί",
        "definitions": [
            {
                "text": "Έχει μεγάλη σωματική ή πνευματική δύναμη.",
                "examples": [
                    "Είναι μια δυνατή ηγέτιδα και πολύ σεβαστή."
                ]
            }
        ],
        "subtext": "δυνατός θόρυβος",
        "synonyms": [
            "πολύ δυνατά",
            "μια δυνατή φωνή"
        ],
        "comparative": "πιο δυνατός",
        "superlative": "ο πιο δυνατός",
        "transcription": "/ðinaˈtos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_045"
    },
    {
        "word": "αδύναμος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "αδύναμη",
        "neuter": "αδύναμο",
        "plural": "αδύναμοι",
        "definitions": [
            {
                "text": "Του λείπει η δύναμη ή η ισχύς.",
                "examples": [
                    "Το σήμα είναι αδύναμο στον τελευταίο όροφο."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "αδύναμη σύνδεση",
            "ένα αδύναμο επιχείρημα"
        ],
        "comparative": "πιο αδύναμος",
        "superlative": "ο πιο αδύναμος",
        "transcription": "/aðinamos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_046"
    },
    {
        "word": "γυμνασμένος",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "feminine": "γυμνασμένη",
        "neuter": "γυμνασμένο",
        "plural": "γυμνασμένοι",
        "definitions": [
            {
                "text": "Σε καλή φυσική κατάσταση μέσω άσκησης.",
                "examples": [
                    "Παραμένει γυμνασμένη πηγαίνοντας στη δουλειά με ποδήλατο κάθε μέρα."
                ]
            }
        ],
        "subtext": "σε καλή φυσική κατάσταση",
        "synonyms": [
            "παραμένω σε φόρμα"
        ],
        "comparative": "πιο γυμνασμένος",
        "superlative": "ο πιο γυμνασμένος",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_health_medicine_002"
    },
    {
        "word": "εξαιρετικός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "εξαιρετική",
        "neuter": "εξαιρετικό",
        "plural": "εξαιρετικοί",
        "definitions": [
            {
                "text": "Εξαιρετικά καλό, πολύ υψηλού επιπέδου.",
                "examples": [
                    "Έλαβε μια εξαιρετική κριτική."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "εξαιρετική δουλειά",
            "εξαιρετικά αποτελέσματα"
        ],
        "comparative": "πιο εξαιρετικός",
        "superlative": "ο πιο εξαιρετικός",
        "transcription": "/ekseretiˈkos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_047"
    },
    {
        "word": "τέλειος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "τέλεια",
        "neuter": "τέλειο",
        "plural": "τέλειοι",
        "definitions": [
            {
                "text": "Χωρίς ελαττώματα, εντελώς σωστό.",
                "examples": [
                    "Ο χρόνος της έναρξης ήταν τέλειος."
                ]
            }
        ],
        "subtext": "τέλειος χρόνος",
        "synonyms": [
            "μια τέλεια ευκαιρία"
        ],
        "comparative": "πιο τέλειος",
        "superlative": "ο πιο τέλειος",
        "transcription": "/ˈtelios/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_048"
    },
    {
        "word": "άχρηστος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "άχρηστη",
        "neuter": "άχρηστο",
        "plural": "άχρηστοι",
        "definitions": [
            {
                "text": "Χωρίς καμία χρήσιμη αξία, καθόλου βοηθητικό.",
                "examples": [
                    "Αυτό το λογισμικό είναι άχρηστο για τις ανάγκες μας."
                ]
            }
        ],
        "subtext": "εντελώς άχρηστος / αποδεικνύεται άχρηστος",
        "comparative": "πιο άχρηστος",
        "superlative": "ο πιο άχρηστος",
        "transcription": "/ˈaxristos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_049"
    },
    {
        "word": "σωστός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "σωστή",
        "neuter": "σωστό",
        "plural": "σωστοί",
        "definitions": [
            {
                "text": "Αληθές ή σωστό, χωρίς λάθη.",
                "examples": [
                    "Παρακαλώ ελέγξτε αν τα νούμερα είναι σωστά."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "σωστή απάντηση",
            "σωστή ώρα",
            "απόλυτα σωστό"
        ],
        "comparative": "πιο σωστός",
        "superlative": "ο πιο σωστός",
        "transcription": "/sosˈtos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_050"
    },
    {
        "word": "ενδιαφέρων",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "ενδιαφέρουσα",
        "neuter": "ενδιαφέρον",
        "plural": "ενδιαφέροντες",
        "definitions": [
            {
                "text": "Που τραβάει την προσοχή, που αξίζει να το ξέρεις.",
                "examples": [
                    "Η νέα πρόταση είναι πολύ ενδιαφέρουσα."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "βρίσκω ενδιαφέρον",
            "πολύ ενδιαφέρον"
        ],
        "comparative": "πιο ενδιαφέρων",
        "superlative": "ο πιο ενδιαφέρων",
        "transcription": "/enðiaˈferon/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_051"
    },
    {
        "word": "βαρετός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "βαρετή",
        "neuter": "βαρετό",
        "plural": "βαρετοί",
        "definitions": [
            {
                "text": "Όχι ενδιαφέρων, ανιαρός.",
                "examples": [
                    "Η εκπαιδευτική συνεδρία ήταν πολύ βαρετή."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "πολύ βαρετό",
            "μια βαρετή συνάντηση"
        ],
        "comparative": "πιο βαρετός",
        "superlative": "ο πιο βαρετός",
        "transcription": "/vareˈtos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_052"
    },
    {
        "word": "απαραίτητος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "απαραίτητη",
        "neuter": "απαραίτητο",
        "plural": "απαραίτητοι",
        "definitions": [
            {
                "text": "Που χρειάζεται ή απαιτείται για να γίνει κάτι.",
                "examples": [
                    "Μια καλή σύνδεση στο διαδίκτυο είναι απαραίτητη για την απομακρυσμένη εργασία."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "απολύτως απαραίτητο",
            "εάν χρειαστεί"
        ],
        "comparative": "πιο απαραίτητος",
        "superlative": "ο πιο απαραίτητος",
        "transcription": "/apaˈretitos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_053"
    },
    {
        "word": "πιθανός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "πιθανή",
        "neuter": "πιθανό",
        "plural": "πιθανοί",
        "definitions": [
            {
                "text": "Ικανό να συμβεί ή να επιτευχθεί.",
                "examples": [
                    "Είναι δυνατόν να τελειώσουμε μέχρι την Παρασκευή;"
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "το συντομότερο δυνατό",
            "είναι δυνατόν"
        ],
        "comparative": "πιο πιθανός",
        "superlative": "ο πιο πιθανός",
        "transcription": "/piθaˈnos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_054"
    },
    {
        "word": "αδύνατος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "αδύνατη",
        "neuter": "αδύνατο",
        "plural": "αδύνατοι",
        "definitions": [
            {
                "text": "Δεν είναι δυνατόν να συμβεί ή να γίνει.",
                "examples": [
                    "Είναι αδύνατον να τελειώσουμε σε μία μέρα."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "σχεδόν αδύνατο",
            "καθιστώ αδύνατο"
        ],
        "comparative": "πιο αδύνατος",
        "superlative": "ο πιο αδύνατος",
        "transcription": "/aˈðinatos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_055"
    },
    {
        "word": "ειδικός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "ειδική",
        "neuter": "ειδικό",
        "plural": "ειδικοί",
        "definitions": [
            {
                "text": "Διαφορετικό από το συνηθισμένο, ιδιαίτερα σημαντικό.",
                "examples": [
                    "Έχει ένα ειδικό ταλέντο στην επίλυση προβλημάτων."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "μια ειδική προσφορά",
            "ειδική περίσταση",
            "πολύ ειδικό"
        ],
        "comparative": "πιο ειδικός",
        "superlative": "ο πιο ειδικός",
        "transcription": "/eiˈðicos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_056"
    },
    {
        "word": "δημοφιλής",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "δημοφιλής",
        "neuter": "δημοφιλές",
        "plural": "δημοφιλείς",
        "definitions": [
            {
                "text": "Που αρέσει σε πολλούς ανθρώπους.",
                "examples": [
                    "Το νέο καφέ κοντά στο γραφείο είναι πολύ δημοφιλές."
                ]
            }
        ],
        "subtext": "πολύ δημοφιλής / δημοφιλής επιλογή",
        "comparative": "πιο δημοφιλής",
        "superlative": "ο πιο δημοφιλής",
        "transcription": "/ðimofiˈlis/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_057"
    },
    {
        "word": "παρόμοιος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "παρόμοια",
        "neuter": "παρόμοιο",
        "plural": "παρόμοιοι",
        "definitions": [
            {
                "text": "Σχεδόν το ίδιο, που έχει πολλά κοινά χαρακτηριστικά.",
                "examples": [
                    "Οι προσεγγίσεις μας είναι πολύ παρόμοιες."
                ]
            }
        ],
        "subtext": "πολύ παρόμοιος / παρόμοιος με",
        "comparative": "πιο παρόμοιος",
        "superlative": "ο πιο παρόμοιος",
        "transcription": "/paˈromios/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_058"
    },
    {
        "word": "φιλικός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "φιλική",
        "neuter": "φιλικό",
        "plural": "φιλικοί",
        "definitions": [
            {
                "text": "Ευγενικός και ευχάριστος, που μπορείς να του μιλήσεις εύκολα.",
                "examples": [
                    "Ο νέος διευθυντής είναι πολύ φιλικός και προσιτός."
                ]
            }
        ],
        "subtext": "πολύ φιλικός",
        "synonyms": [
            "ένα φιλικό πρόσωπο"
        ],
        "comparative": "πιο φιλικός",
        "superlative": "ο πιο φιλικός",
        "transcription": "/filiˈkos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_059"
    },
    {
        "word": "ευγενικός",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "ευγενική",
        "neuter": "ευγενικό",
        "plural": "ευγενικοί",
        "definitions": [
            {
                "text": "Που νοιάζεται και είναι γενναιόδωρος με τους άλλους.",
                "examples": [
                    "Είναι ευγενική με όλους στο γραφείο."
                ]
            }
        ],
        "subtext": "πολύ ευγενικός / ευγενικό εκ μέρους σας",
        "comparative": "πιο ευγενικός",
        "superlative": "ο πιο ευγενικός",
        "transcription": "/evʝeniˈkos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_060"
    },
    {
        "word": "αστείος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "αστεία",
        "neuter": "αστείο",
        "plural": "αστείοι",
        "definitions": [
            {
                "text": "Που κάνει τους ανθρώπους να γελούν, χιουμοριστικός.",
                "examples": [
                    "Έχει έναν αστείο τρόπο να εξηγεί πολύπλοκες ιδέες."
                ]
            }
        ],
        "subtext": "πολύ αστείος",
        "synonyms": [
            "αστεία ιστορία"
        ],
        "comparative": "πιο αστείος",
        "superlative": "ο πιο αστείος",
        "transcription": "/asˈtios/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_061"
    },
    {
        "word": "έξυπνος",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "έξυπνη",
        "neuter": "έξυπνο",
        "plural": "έξυπνοι",
        "definitions": [
            {
                "text": "Νοήμων, που καταλαβαίνει γρήγορα.",
                "examples": [
                    "Είναι μια έξυπνη διαπραγματεύτρια."
                ]
            }
        ],
        "subtext": "πολύ έξυπνος",
        "synonyms": [
            "μια έξυπνη ιδέα"
        ],
        "comparative": "πιο έξυπνος",
        "superlative": "ο πιο έξυπνος",
        "transcription": "/ˈeksipnos/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_062"
    },
    {
        "word": "ευγενής",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "ευγενής",
        "neuter": "ευγενές",
        "plural": "ευγενείς",
        "definitions": [
            {
                "text": "Που συμπεριφέρεται με σεβασμό και ευγένεια.",
                "examples": [
                    "Είναι πάντα ευγενής με τους πελάτες."
                ]
            }
        ],
        "subtext": "αρκετά ευγενής",
        "synonyms": [
            "πολύ ευγενικός",
            "ευγενικό αίτημα"
        ],
        "comparative": "πιο ευγενής",
        "superlative": "ο πιο ευγενής",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_describing_063"
    },
    {
        "word": "αγενής",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "αγενής",
        "neuter": "αγενές",
        "plural": "αγενείς",
        "definitions": [
            {
                "text": "Όχι ευγενικός, που δείχνει έλλειψη σεβασμού.",
                "examples": [
                    "Εκείνο το email ήταν αρκετά αγενές και αντιεπαγγελματικό."
                ]
            }
        ],
        "subtext": "πολύ αγενής / απίστευτα αγενής / εσκεμμένα αγενής",
        "comparative": "πιο αγενής",
        "superlative": "ο πιο αγενής",
        "transcription": "/aʝeˈnis/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_064"
    },
    {
        "word": "τεμπέλης",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "τεμπέλα",
        "neuter": "τεμπέλικο",
        "plural": "τεμπέληδες",
        "definitions": [
            {
                "text": "Που δεν θέλει να δουλέψει ή να καταβάλει προσπάθεια.",
                "examples": [
                    "Έχει τη φήμη ότι είναι τεμπέλης με τις εκκρεμότητες."
                ]
            }
        ],
        "subtext": "πολύ τεμπέλης / πολύ τεμπέλης",
        "synonyms": [
            "μια τεμπέλικη προσέγγιση"
        ],
        "comparative": "πιο τεμπέλης",
        "superlative": "ο πιο τεμπέλης",
        "transcription": "/teˈmbelis/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_065"
    },
    {
        "word": "ειλικρινής",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "ειλικρινής",
        "neuter": "ειλικρινές",
        "plural": "ειλικρινείς",
        "definitions": [
            {
                "text": "Που λέει την αλήθεια, που δεν εξαπατά.",
                "examples": [
                    "Είναι γνωστή για το ότι είναι απόλυτα ειλικρινής με τους πελάτες."
                ]
            }
        ],
        "subtext": "πολύ ειλικρινής / βάναυσα ειλικρινής / εντελώς ειλικρινής",
        "comparative": "πιο ειλικρινής",
        "superlative": "ο πιο ειλικρινής",
        "transcription": "/ilicriˈnis/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_066"
    },
    {
        "word": "θορυβώδης",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "θορυβώδης",
        "neuter": "θορυβώδες",
        "plural": "θορυβώδεις",
        "definitions": [
            {
                "text": "Που κάνει πολύ θόρυβο.",
                "examples": [
                    "Το γραφείο ανοιχτού τύπου είναι πολύ θορυβώδες."
                ]
            }
        ],
        "subtext": "πολύ θορυβώδης",
        "synonyms": [
            "θορυβώδες περιβάλλον",
            "πολύς θόρυβος"
        ],
        "comparative": "πιο θορυβώδης",
        "superlative": "ο πιο θορυβώδης",
        "transcription": "/θoriˈvoðis/",
        "lang": "el",
        "emoji": "✨",
        "id": "el_starter_describing_067"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

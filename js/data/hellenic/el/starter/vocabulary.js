(function() {
    const data = [
    {
        "word": "γιατρός",
        "level": "starter",
        "theme": "jobs_A0",
        "numberPlural": "2 γιατρός",
        "answer": "δύο γιατροί",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "plural": "γιατροί",
        "definitions": [
            {
                "text": "Ένας άνθρωπος που βοηθά τους αρρώστους.",
                "examples": [
                    "Ο γιατρός είναι στο νοσοκομείο.",
                    "Θέλω να δω έναν γιατρό."
                ]
            },
            {
                "text": "Αυτό το άτομο εργάζεται συνήθως σε νοσοκομείο ή κλινική.",
                "examples": [
                    "Οι γιατροί φορούν λευκές ποδιές."
                ]
            }
        ]
    },
    {
        "word": "δάσκαλος",
        "level": "starter",
        "theme": "jobs_A0",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "plural": "δάσκαλοι",
        "definitions": [
            {
                "text": "Ένας άνθρωπος που σε βοηθά να μάθεις.",
                "examples": [
                    "Ο δάσκαλος είναι στην τάξη.",
                    "Ο δάσκαλός μου είναι καλός."
                ]
            },
            {
                "text": "Αυτό το άτομο εργάζεται συνήθως σε σχολείο ή πανεπιστήμιο.",
                "examples": [
                    "Οι δάσκαλοι εξηγούν νέα θέματα."
                ]
            }
        ]
    },
    {
        "word": "μουσακάς",
        "level": "starter",
        "theme": "food_drink_A0",
        "form": "noun",
        "plural": "μουσακάς",
        "definitions": [
            {
                "text": "Ένα παραδοσιακό ελληνικό πιάτο με μελιτζάνες και κιμά.",
                "examples": [
                    "Ο μουσακάς της γιαγιάς είναι ο καλύτερος.",
                    "Θέλω μια μερίδα μουσακά."
                ]
            },
            {
                "text": "Αυτό το φαγητό είναι πολύ δημοφιλές στην Ελλάδα.",
                "examples": [
                    "Ο μουσακάς έχει μπεσαμέλ από πάνω."
                ]
            }
        ]
    },
    {
        "word": "παστίτσιο",
        "level": "starter",
        "theme": "food_drink_A0",
        "form": "noun",
        "plural": "παστίτσια",
        "definitions": [
            {
                "text": "Ελληνικό πιάτο με μακαρόνια, κιμά και μπεσαμέλ.",
                "examples": [
                    "Το παστίτσιο είναι στο φούρνο.",
                    "Μου αρέσει η γωνία από το παστίτσιο."
                ]
            },
            {
                "text": "Αυτό το φαγητό μοιάζει λίγο με τα λαζάνια.",
                "examples": [
                    "Το παστίτσιο είναι το αγαπημένο φαγητό των παιδιών."
                ]
            }
        ]
    },
    {
        "word": "μήλο",
        "level": "starter",
        "theme": "food_drink_A0",
        "numberPlural": "4 μήλο",
        "answer": "τέσσερα μήλα",
        "emoji": "🍎",
        "form": "noun",
        "plural": "μήλα",
        "definitions": [
            {
                "text": "Ένα στρογγυλό φρούτο, κόκκινο ή πράσινο.",
                "examples": [
                    "Τρώω ένα μήλο.",
                    "Το μήλο είναι γλυκό."
                ]
            }
        ]
    },
    {
        "word": "ψωμί",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍞",
        "form": "noun",
        "plural": "ψωμί",
        "definitions": [
            {
                "text": "Μια τροφή φτιαγμένη από αλεύρι και νερό, ψημένη στον φούρνο.",
                "examples": [
                    "Μου αρέσει το φρέσκο ψωμί.",
                    "Μπορείς να αγοράσεις ψωμί;"
                ]
            }
        ]
    },
    {
        "word": "αυγό",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🥚",
        "form": "noun",
        "plural": "αυγό",
        "definitions": [
            {
                "text": "Ένα οβάλ αντικείμενο που κάνει η κότα.",
                "examples": [
                    "Έφαγα ένα βραστό αυγό για πρωινό.",
                    "Χρειαζόμαστε αυγά για το κέικ."
                ]
            },
            {
                "text": "Πολλοί άνθρωποι τρώνε αυγά το πρωί.",
                "examples": [
                    "Τα αυγά είναι καλή πηγή πρωτεΐνης."
                ]
            }
        ]
    },
    {
        "word": "γάλα",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🥛",
        "form": "noun",
        "plural": "γάλα",
        "definitions": [
            {
                "text": "Ένα λευκό υγρό που παράγουν οι αγελάδες.",
                "examples": [
                    "Θέλεις γάλα στον καφέ σου;",
                    "Τα παιδιά πρέπει να πίνουν γάλα."
                ]
            },
            {
                "text": "Χρησιμοποιούμε το γάλα για να φτιάξουμε τυρί και γιαούρτι.",
                "examples": [
                    "Το γάλα πρέπει να διατηρείται στο ψυγείο."
                ]
            }
        ]
    },
    {
        "word": "πίτσα",
        "level": "starter",
        "theme": "food_drink_A0",
        "emoji": "🍕",
        "form": "noun",
        "plural": "πίτσες",
        "definitions": [
            {
                "text": "Ένα πλατύ ψωμί με τυρί και ντομάτα.",
                "examples": [
                    "Μου αρέσει η πίτσα με τυρί.",
                    "Ας παραγγείλουμε μια πίτσα."
                ]
            }
        ]
    },
    {
        "word": "καφές",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "ο",
        "baseWord": "καφές",
        "emoji": "☕",
        "form": "noun",
        "plural": "καφές",
        "definitions": [
            {
                "text": "Ένα σκούρο ρόφημα που φτιάχνεται από καβουρδισμένους κόκκους.",
                "examples": [
                    "Πίνω καφέ κάθε πρωί.",
                    "Θέλεις ζάχαρη στον καφέ σου;"
                ]
            },
            {
                "text": "Πολλοί άνθρωποι πίνουν καφέ για να ξυπνήσουν.",
                "examples": [
                    "Ο καφές είναι πολύ ζεστός."
                ]
            }
        ]
    },
    {
        "word": "τσάι",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "το",
        "baseWord": "τσάι",
        "emoji": "🍵",
        "form": "noun",
        "plural": "τσάι",
        "definitions": [
            {
                "text": "Ένα ρόφημα που φτιάχνεται ρίχνοντας ζεστό νερό σε αποξηραμένα φύλλα.",
                "examples": [
                    "Θα θέλατε ένα φλιτζάνι τσάι;",
                    "Το πράσινο τσάι είναι πολύ υγιεινό."
                ]
            },
            {
                "text": "Αυτό είναι ένα πολύ δημοφιλές ρόφημα σε όλο τον κόσμο.",
                "examples": [
                    "Μου αρέσει το τσάι με λεμόνι."
                ]
            }
        ]
    },
    {
        "word": "χυμός",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "ο",
        "baseWord": "χυμός",
        "emoji": "🧃",
        "form": "noun",
        "plural": "χυμός",
        "definitions": [
            {
                "text": "Ένα υγρό που προέρχεται από φρούτα ή λαχανικά.",
                "examples": [
                    "Θέλω ένα ποτήρι χυμό πορτοκάλι.",
                    "Ο χυμός μήλου είναι γλυκός."
                ]
            },
            {
                "text": "Ο χυμός πορτοκάλι είναι κοινός για πρωινό.",
                "examples": [
                    "Ο φρεσκοστυμμένος χυμός είναι ο καλύτερος."
                ]
            }
        ]
    },
    {
        "word": "νερό",
        "level": "starter",
        "theme": "food_drink_A0",
        "article": "το",
        "baseWord": "νερό",
        "emoji": "🚰",
        "form": "noun",
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
        "word": "πάρκο",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🌳",
        "form": "noun",
        "plural": "πάρκα",
        "definitions": [
            {
                "text": "Ένας μεγάλος δημόσιος χώρος με δέντρα για αναψυχή.",
                "examples": [
                    "Πηγαίνω στο πάρκο με τα παιδιά.",
                    "Το πάρκο είναι πολύ όμορφο."
                ]
            }
        ]
    },
    {
        "word": "σχολείο",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏫",
        "form": "noun",
        "plural": "σχολεία",
        "definitions": [
            {
                "text": "Ένα μέρος όπου τα παιδιά πηγαίνουν για να μάθουν.",
                "examples": [
                    "Πηγαίνω στο σχολείο με το λεωφορείο.",
                    "Το σχολείο μου είναι κοντά στο σπίτι μου."
                ]
            }
        ]
    },
    {
        "word": "μπλουζάκι",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👕",
        "form": "noun",
        "plural": "μπλουζάκια"
    },
    {
        "word": "παντελόνι",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👖",
        "form": "noun",
        "plural": "παντελόνια"
    },
    {
        "word": "παπούτσια",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👟",
        "form": "noun",
        "plural": "παπούτσιες"
    },
    {
        "word": "καπέλο",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👒",
        "form": "noun",
        "plural": "καπέλα"
    },
    {
        "word": "καρέκλα",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "καρέκλες"
    },
    {
        "word": "τραπέζι",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🪑",
        "form": "noun",
        "plural": "τραπέζια"
    },
    {
        "word": "κρεβάτι",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛏️",
        "form": "noun",
        "plural": "κρεβάτια"
    },
    {
        "word": "ψηλός",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "ψηλός",
        "definitions": [
            {
                "text": "Ένας άνθρωπος ή ένα πράγμα που είναι μεγάλο από κάτω προς τα πάνω.",
                "examples": [
                    "Είναι πολύ ψηλός.",
                    "Αυτό το κτίριο είναι ψηλό."
                ]
            }
        ]
    },
    {
        "word": "κοντός",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "κοντός",
        "definitions": [
            {
                "text": "Ένας άνθρωπος ή ένα πράγμα που δεν είναι ψηλό.",
                "examples": [
                    "Είναι κοντή.",
                    "Το μολύβι είναι κοντό."
                ]
            }
        ]
    },
    {
        "word": "νέος",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "νέοι"
    },
    {
        "word": "γέρος",
        "level": "starter",
        "theme": "adjectives_A0",
        "form": "noun",
        "plural": "γέροι"
    },
    {
        "word": "ξυπνάω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "⏰",
        "form": "noun",
        "plural": "ξυπνάω"
    },
    {
        "word": "κοιμάμαι",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "😴",
        "subtext": "κοιμάμαι 8 ώρες, πάω για ύπνο",
        "form": "noun",
        "plural": "κοιμάμαια"
    },
    {
        "word": "κλειδί",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔑",
        "form": "noun",
        "plural": "κλειδιά",
        "definitions": [
            {
                "text": "Ένα μεταλλικό αντικείμενο για να ανοίγουμε μια πόρτα ή να ξεκινάμε το αυτοκίνητο.",
                "examples": [
                    "Δεν βρίσκω τα κλειδιά μου.",
                    "Ορίστε το κλειδί για το δωμάτιό σας."
                ]
            },
            {
                "text": "Κάτι πολύ σημαντικό (όπως το κλειδί της επιτυχίας).",
                "examples": [
                    "Η εξάσκηση είναι το κλειδί για τη μάθηση.",
                    "Ποιο είναι το σημείο κλειδί;"
                ]
            }
        ]
    },
    {
        "word": "τηλέφωνο",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📱",
        "form": "noun",
        "plural": "τηλέφωνα"
    },
    {
        "word": "βιβλίο",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "form": "noun",
        "plural": "βιβλία",
        "definitions": [
            {
                "text": "Ένα αντικείμενο με πολλές σελίδες που το διαβάζουμε.",
                "examples": [
                    "Διαβάζω ένα βιβλίο.",
                    "Το βιβλίο είναι στη βιβλιοθήκη."
                ]
            }
        ]
    },
    {
        "word": "γάτα",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🐈",
        "form": "noun",
        "plural": "γάτες",
        "definitions": [
            {
                "text": "Ένα μικρό τριχωτό ζώο που πολλοί άνθρωποι έχουν στο σπίτι.",
                "examples": [
                    "Η γάτα μου κοιμάται.",
                    "Αγαπώ τις γάτες."
                ]
            }
        ]
    },
    {
        "word": "σκύλος",
        "level": "starter",
        "theme": "weather_A0",
        "article": "ο",
        "baseWord": "σκύλος",
        "emoji": "🐕",
        "numberPlural": "5 σκύλος",
        "answer": "πέντε σκύλοι",
        "form": "noun",
        "plural": "σκύλοι",
        "definitions": [
            {
                "text": "Ένα ζώο που συχνά αποκαλείται 'ο καλύτερος φίλος του ανθρώπου'.",
                "examples": [
                    "Πηγαίνω βόλτα τον σκύλο μου στο πάρκο.",
                    "Ο σκύλος γαβγίζει."
                ]
            }
        ]
    },
    {
        "word": "πουλί",
        "level": "starter",
        "theme": "weather_A0",
        "emoji": "🐦",
        "form": "noun",
        "plural": "πουλιά",
        "definitions": [
            {
                "text": "Ένα ζώο με πούπουλα και φτερά που συνήθως μπορεί να πετάξει.",
                "examples": [
                    "Ένα πουλί τραγουδάει.",
                    "Κοίτα αυτό το όμορφο πουλί!"
                ]
            }
        ]
    },
    {
        "word": "διάβασμα",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "form": "noun",
        "plural": "διαβάσματα"
    },
    {
        "word": "κεφάλι",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👤",
        "form": "noun",
        "plural": "κεφάλια",
        "definitions": [
            {
                "text": "Το πάνω μέρος του σώματος που περιέχει τον εγκέφαλο και το πρόσωπο.",
                "examples": [
                    "Φοράω καπέλο στο κεφάλι.",
                    "Έγνεψε με το κεφάλι του."
                ]
            },
            {
                "text": "Ο αρχηγός μιας ομάδας ή οργάνωσης.",
                "examples": [
                    "Είναι η κεφαλή της οικογένειας.",
                    "Ποιος είναι ο προϊστάμενος;"
                ]
            }
        ]
    },
    {
        "word": "χέρι",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "✋",
        "form": "noun",
        "plural": "χέρια",
        "definitions": [
            {
                "text": "Το μέρος του σώματος στην άκρη του μπράτσου με τα δάχτυλα.",
                "examples": [
                    "Πλύνε τα χέρια σου.",
                    "Δώσε μου το χέρι σου."
                ]
            },
            {
                "text": "Βοήθεια.",
                "examples": [
                    "Μπορείς να μου δώσεις ένα χεράκι;",
                    "Χρειάζομαι βοήθεια εδώ."
                ]
            }
        ]
    },
    {
        "word": "μάτι",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👁️",
        "form": "noun",
        "plural": "μάτια",
        "definitions": [
            {
                "text": "Το όργανο της όρασης.",
                "examples": [
                    "Κλείσε τα μάτια σου.",
                    "Έχει μπλε μάτια."
                ]
            }
        ]
    },
    {
        "word": "μύτη",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👃",
        "form": "noun",
        "plural": "μύτες"
    },
    {
        "word": "στόμα",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👄",
        "form": "noun",
        "plural": "στόμες"
    },
    {
        "word": "αυτί",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "👂",
        "form": "noun",
        "plural": "αυτί"
    },
    {
        "word": "μητέρα",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Η γυναίκα που είναι γονέας σου.",
                "examples": [
                    "Η μητέρα μου είναι καλή.",
                    "Αγαπώ τη μητέρα μου."
                ]
            },
            {
                "text": "Αυτό το άτομο είναι συνήθως η σύζυγος του πατέρα σου (ή άλλου γονέα).",
                "examples": [
                    "Οι μητέρες φροντίζουν τα παιδιά τους."
                ]
            }
        ]
    },
    {
        "word": "πατέρας",
        "level": "starter",
        "theme": "immediate_family_A0",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Ο άνδρας που είναι γονέας σου.",
                "examples": [
                    "Ο πατέρας μου εργάζεται.",
                    "Ο πατέρας του είναι ψηλός."
                ]
            },
            {
                "text": "Αυτό το άτομο είναι συνήθως ο σύζυγος της μητέρας σου (ή άλλου γονέα).",
                "examples": [
                    "Ο πατέρας μου δουλεύει πολύ."
                ]
            }
        ]
    },
    {
        "word": "σπίτι",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "article": "το",
        "baseWord": "σπίτι",
        "numberPlural": "πολλά σπίτι",
        "answer": "πολλά σπίτια",
        "emoji": "🏠",
        "form": "adjective",
        "plural": "σπίτια"
    },
    {
        "word": "γυναίκα",
        "level": "starter",
        "theme": "adjectives_A0",
        "article": "η",
        "baseWord": "γυναίκα",
        "numberPlural": "3 γυναίκα",
        "answer": "τρεις γυναίκες",
        "emoji": "👩",
        "form": "noun",
        "plural": "τρεις γυναίκες",
        "definitions": [
            {
                "text": "Ένας ενήλικος θηλυκός άνθρωπος.",
                "examples": [
                    "Είναι μια πολύ δυνατή γυναίκα.",
                    "Υπάρχουν τρεις γυναίκες στο γραφείο."
                ]
            }
        ]
    },
    {
        "word": "άνδρας",
        "level": "starter",
        "theme": "adjectives_A0",
        "article": "ο",
        "baseWord": "άνδρας",
        "numberPlural": "2 άνδρας",
        "answer": "δύο άνδρες",
        "emoji": "👨",
        "form": "noun",
        "plural": "άνδρες",
        "definitions": [
            {
                "text": "Ένας ενήλικος αρσενικός άνθρωπος.",
                "examples": [
                    "Αυτός ο άνδρας είναι ο δάσκαλός μου.",
                    "Ένας ψηλός άνδρας στέκεται εκεί."
                ]
            }
        ]
    },
    {
        "word": "παιδί",
        "level": "starter",
        "theme": "adjectives_A0",
        "article": "το",
        "baseWord": "παιδί",
        "numberPlural": "πολλά παιδί",
        "answer": "πολλά παιδιά",
        "emoji": "🧒",
        "form": "noun",
        "plural": "παιδιά",
        "definitions": [
            {
                "text": "Ένας νεαρός άνθρωπος που δεν είναι ακόμη ενήλικας.",
                "examples": [
                    "Το παιδί παίζει με ένα παιχνίδι.",
                    "Πόσα παιδιά έχουν;"
                ]
            }
        ]
    },
    {
        "word": "κάνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛠️",
        "subtext": "κάνω μαθήματα, κάνω σπορ",
        "form": "noun",
        "plural": "κάνω"
    },
    {
        "word": "δουλεύω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💼",
        "subtext": "δουλεύω σε γραφείο, δουλεύω σκληρά",
        "form": "noun",
        "plural": "δουλεύω"
    },
    {
        "word": "μιλάω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💬",
        "subtext": "μιλάω αγγλικά, μιλάω αργά",
        "form": "noun",
        "plural": "μιλάω"
    },
    {
        "word": "ξέρω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "subtext": "ξέρω την απάντηση, ξέρω ένα άτομο",
        "form": "noun",
        "plural": "ξέρω"
    },
    {
        "word": "σκέφτομαι",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💭",
        "subtext": "σκέφτομαι για, σκέφτομαι ότι",
        "form": "noun",
        "plural": "σκέφτομαια"
    },
    {
        "word": "θέλω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🙏",
        "subtext": "θέλω νερό, θέλω να πάω",
        "form": "noun",
        "plural": "θέλω"
    },
    {
        "word": "μου αρέσει",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "👍",
        "subtext": "μου αρέσει η σοκολάτα, μου αρέσει να χορεύω",
        "form": "noun",
        "plural": "μου αρέσεια"
    },
    {
        "word": "αγαπώ",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "❤️",
        "subtext": "αγαπώ την οικογένειά μου, αγαπώ τα ταξίδια",
        "form": "noun",
        "plural": "αγαπώ"
    },
    {
        "word": "διαβάζω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "subtext": "διαβάζω ένα βιβλίο, διαβάζω τις ειδήσεις",
        "opposite": "γράφω",
        "oppositeEmoji": "✍️",
        "form": "noun",
        "plural": "διαβάζω"
    },
    {
        "word": "γράφω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "✍️",
        "subtext": "γράφω ένα γράμμα, γράφω ένα μήνυμα",
        "opposite": "διαβάζω",
        "oppositeEmoji": "📖",
        "form": "noun",
        "plural": "γράφω"
    },
    {
        "word": "έρχομαι",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏃‍♂️",
        "subtext": "έλα εδώ, έλα σπίτι",
        "opposite": "πηγαίνω",
        "oppositeEmoji": "🚶",
        "form": "noun",
        "plural": "έρχομαια"
    },
    {
        "word": "δίνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎁",
        "subtext": "δίνω ένα δώρο, δίνω βοήθεια",
        "opposite": "παίρνω",
        "oppositeEmoji": "👜",
        "form": "noun",
        "plural": "δίνω"
    },
    {
        "word": "παίρνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📥",
        "subtext": "παίρνω λεωφορείο, βγάζω φωτογραφία",
        "opposite": "δίνω",
        "oppositeEmoji": "🎁",
        "form": "noun",
        "plural": "παίρνω"
    },
    {
        "word": "βρίσκω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔍",
        "form": "noun",
        "plural": "βρίσκω"
    },
    {
        "word": "λέω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🗣️",
        "form": "adjective"
    },
    {
        "word": "ρωτάω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "❓",
        "form": "adjective"
    },
    {
        "word": "νιώθω",
        "level": "starter",
        "theme": "body_A0",
        "emoji": "🌡️",
        "form": "adjective"
    },
    {
        "word": "προσπαθώ",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎯",
        "form": "noun",
        "plural": "προσπαθώ"
    },
    {
        "word": "φεύγω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🚪",
        "form": "noun",
        "plural": "φεύγω"
    },
    {
        "word": "καλώ",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📞",
        "form": "noun",
        "plural": "καλώ"
    },
    {
        "word": "κοιτάζω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "👀",
        "form": "noun",
        "plural": "κοιτάζω"
    },
    {
        "word": "χρησιμοποιώ",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "χρησιμοποιώ"
    },
    {
        "word": "αρχίζω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "▶️",
        "opposite": "τελειώνω",
        "oppositeEmoji": "🏁",
        "form": "noun",
        "plural": "αρχίζω"
    },
    {
        "word": "παίζω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🎮",
        "form": "noun",
        "plural": "παίζω"
    },
    {
        "word": "τρέχω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏃",
        "form": "noun",
        "plural": "τρέχω"
    },
    {
        "word": "ζω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🏠",
        "opposite": "πεθαίνω",
        "oppositeEmoji": "⚰️",
        "form": "noun",
        "plural": "ζω"
    },
    {
        "word": "φέρνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🎁",
        "form": "noun",
        "plural": "φέρνω"
    },
    {
        "word": "κάθομαι",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🪑",
        "opposite": "στέκομαι",
        "oppositeEmoji": "🧍",
        "form": "noun",
        "plural": "κάθομαια"
    },
    {
        "word": "στέκομαι",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🧍",
        "opposite": "κάθομαι",
        "oppositeEmoji": "🪑",
        "form": "noun",
        "plural": "στέκομαια"
    },
    {
        "word": "χάνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📉",
        "opposite": "νικάω",
        "oppositeEmoji": "🏆",
        "form": "noun",
        "plural": "χάνω"
    },
    {
        "word": "πληρώνω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💰",
        "form": "adjective"
    },
    {
        "word": "συναντώ",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🤝",
        "form": "noun",
        "plural": "συναντώ"
    },
    {
        "word": "μαθαίνω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "📚",
        "form": "noun",
        "plural": "μαθαίνω"
    },
    {
        "word": "αλλάζω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "🔄",
        "form": "noun",
        "plural": "αλλάζω"
    },
    {
        "word": "καταλαβαίνω",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "💡",
        "form": "noun",
        "plural": "καταλαβαίνω"
    },
    {
        "word": "παρακολουθώ",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "📺",
        "form": "noun",
        "plural": "παρακολουθώ",
        "definitions": [
            {
                "text": "Η πράξη του να κοιτάζεις κάτι για ένα χρονικό διάστημα.",
                "examples": [
                    "Η παρακολούθηση τηλεόρασης είναι χαλαρωτική.",
                    "Χρειάζεται προσεκτική παρακολούθηση."
                ]
            }
        ]
    },
    {
        "word": "σταματάω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🛑",
        "form": "noun",
        "plural": "σταματάω"
    },
    {
        "word": "προσθέτω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "➕",
        "form": "noun",
        "plural": "προσθέτω"
    },
    {
        "word": "ξοδεύω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "💸",
        "form": "noun",
        "plural": "ξοδεύω"
    },
    {
        "word": "ανοίγω",
        "level": "starter",
        "theme": "home_A0",
        "emoji": "📖",
        "opposite": "κλείνω",
        "oppositeEmoji": "🔒",
        "form": "noun",
        "plural": "ανοίγω"
    },
    {
        "word": "νικάω",
        "level": "starter",
        "theme": "places_buildings_activities_A2",
        "emoji": "🏆",
        "opposite": "χάνω",
        "oppositeEmoji": "📉",
        "form": "noun",
        "plural": "νικάω"
    },
    {
        "word": "θυμάμαι",
        "level": "starter",
        "theme": "adjectives_A0",
        "emoji": "🧠",
        "form": "noun",
        "plural": "θυμάμαια"
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

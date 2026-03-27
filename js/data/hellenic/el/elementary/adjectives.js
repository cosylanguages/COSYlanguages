(function() {
    const data = [
    {
        "word": "όμορφος",
        "feminine": "όμορφη",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "όμορφοι",
        "femininePlural": "όμορφες",
        "definitions": [
            {
                "text": "Που ευχαριστεί τις αισθήσεις ή το μυαλό αισθητικά.",
                "examples": [
                    "Η θέα από την κορυφή του βουνού ήταν απολύτως όμορφη."
                ]
            }
        ],
        "subtext": "απολύτως όμορφος / μια όμορφη μέρα / όμορφη θέα",
        "comparative": "ομορφότερος",
        "superlative": "ο ομορφότερος",
        "opposite": "άσχημος"
    },
    {
        "word": "δυνατός",
        "feminine": "δυνατή",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "💪",
        "form": "adjective",
        "plural": "δυνατοί",
        "femininePlural": "δυνατές",
        "definitions": [
            {
                "text": "Που έχει τη δύναμη να μετακινεί βαριά βάρη ή να εκτελεί άλλες σωματικά απαιτητικές εργασίες.",
                "examples": [
                    "Είναι δυνατός κολυμβητής και μπορεί να διασχίσει τη λίμνη εύκολα."
                ]
            }
        ],
        "subtext": "δυνατοί μύες / πολύ δυνατός / αρκετά δυνατός",
        "comparative": "δυνατότερος",
        "superlative": "ο δυνατότερος",
        "opposite": "αδύναμος"
    },
    {
        "word": "ξανθός",
        "feminine": "ξανθιά",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "👱",
        "form": "adjective",
        "plural": "ξανθοί",
        "femininePlural": "ξανθιές",
        "definitions": [
            {
                "text": "Που έχει ανοιχτά ή ανοιχτόκίτρινα μαλλιά.",
                "examples": [
                    "Έχει μακριά ξανθά μαλλιά και μπλε μάτια."
                ]
            }
        ],
        "subtext": "φυσικός ξανθός / ξανθά μαλλιά / ανοιχτό ξανθό",
        "comparative": "ξανθότερος",
        "superlative": "ο ξανθότερος",
        "opposite": "μελαχρινός"
    },
    {
        "word": "χιονισμένος",
        "feminine": "χιονισμένη",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "χιονισμένοι",
        "femininePlural": "χιονισμένες",
        "definitions": [
            {
                "text": "Καλυμμένος με χιόνι ή χαρακτηριζόμενος από χιόνι.",
                "examples": [
                    "Ήταν ένα χιονισμένο πρωινό, οπότε τα παιδιά βγήκαν έξω να παίξουν."
                ]
            }
        ],
        "subtext": "χιονισμένος καιρός / χιονισμένη μέρα / κρύο και χιόνι",
        "comparative": "πιο χιονισμένος",
        "superlative": "ο πιο χιονισμένος",
        "opposite": "καθαρός"
    },
    {
        "word": "ανεμώδης",
        "feminine": "ανεμώδης",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective",
        "plural": "ανεμώδεις",
        "femininePlural": "ανεμώδεις",
        "definitions": [
            {
                "text": "Χαρακτηριζόμενος από ή εκτεθειμένος σε ισχυρούς ανέμους.",
                "examples": [
                    "Έχει πολύ αέρα σήμερα, οπότε προσέχετε με την ομπρέλα σας."
                ]
            }
        ],
        "subtext": "πολύ ανεμώδης / μέρα με αέρα / κρύο και αέρας",
        "comparative": "πιο ανεμώδης",
        "superlative": "ο πιο ανεμώδης",
        "opposite": "νηνεμία"
    },
    {
        "word": "συννεφιασμένος",
        "feminine": "συννεφιασμένη",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "συννεφιασμένοι",
        "femininePlural": "συννεφιασμένες",
        "definitions": [
            {
                "text": "Καλυμμένος με ή χαρακτηριζόμενος από σύννεφα.",
                "examples": [
                    "Είναι ένα συννεφιασμένο απόγευμα, αλλά μπορεί να μην βρέξει."
                ]
            }
        ],
        "subtext": "συννεφιασμένος ουρανός / πολύ συννεφιά / μερική συννεφιά",
        "comparative": "πιο συννεφιασμένος",
        "superlative": "ο πιο συννεφιασμένος",
        "opposite": "αίθριος"
    },
    {
        "word": "αθλητικός",
        "feminine": "αθλητική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "αθλητικοί",
        "femininePlural": "αθλητικές",
        "definitions": [
            {
                "text": "Που έχει τη διάπλαση αθλητή· ρωμαλέος.",
                "examples": [
                    "Έχει αθλητική διάπλαση γιατί παίζει ποδόσφαιρο κάθε μέρα."
                ]
            }
        ],
        "subtext": "αθλητική διάπλαση / πολύ αθλητικός / αθλητική απόδοση",
        "comparative": "αθλητικότερος",
        "superlative": "ο αθλητικότερος",
        "opposite": "τεμπέλης"
    },
    {
        "word": "σε φόρμα",
        "feminine": "σε φόρμα",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "plural": "σε φόρμα",
        "femininePlural": "σε φόρμα",
        "definitions": [
            {
                "text": "Σε καλή φυσική κατάσταση.",
                "examples": [
                    "Παραμένει σε φόρμα πηγαίνοντας στο γυμναστήριο τρεις φορές την εβδομάδα."
                ]
            }
        ],
        "subtext": "σωματικά σε φόρμα / σε πολύ καλή φόρμα / παραμένω σε φόρμα",
        "comparative": "σε καλύτερη φόρμα",
        "superlative": "στην καλύτερη φόρμα",
        "opposite": "εκτός φόρμας"
    },
    {
        "word": "υπέρβαρος",
        "feminine": "υπέρβαρη",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "υπέρβαροι",
        "femininePlural": "υπέρβαρες",
        "definitions": [
            {
                "text": "Που ζυγίζει περισσότερο από ό,τι θεωρείται υγιές.",
                "examples": [
                    "Ο γιατρός του είπε ότι ήταν ελαφρώς υπέρβαρος."
                ]
            }
        ],
        "subtext": "ελαφρώς υπέρβαρος / γίνομαι υπέρβαρος / κλινικά υπέρβαρος",
        "comparative": "πιο υπέρβαρος",
        "superlative": "ο πιο υπέρβαρος",
        "opposite": "λιποβαρής"
    },
    {
        "word": "βολικός",
        "feminine": "βολική",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "plural": "βολικοί",
        "femininePlural": "βολικές",
        "definitions": [
            {
                "text": "Εύκολος στη χρήση ή σε καλή θέση.",
                "examples": [
                    "Το γραφείο βρίσκεται σε μια βολική τοποθεσία κοντά στον σταθμό."
                ]
            }
        ],
        "subtext": "πολύ βολικό / σε βολική τοποθεσία / μια βολική ώρα",
        "comparative": "βολικότερος",
        "superlative": "ο βολικότερος",
        "opposite": "άβολος"
    },
    {
        "word": "αγχωτικός",
        "feminine": "αγχωτική",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "αγχωτικοί",
        "femininePlural": "αγχωτικές",
        "definitions": [
            {
                "text": "Που προκαλεί ανησυχία ή άγχος.",
                "examples": [
                    "Η δουλειά του είναι πολύ αγχωτική."
                ]
            }
        ],
        "subtext": "μια αγχωτική δουλειά / πολύ αγχωτικός / αγχωτική κατάσταση",
        "comparative": "αγχωτικότερος",
        "superlative": "ο αγχωτικότερος",
        "opposite": "χαλαρωτικός"
    },
    {
        "word": "άνετος",
        "feminine": "άνετη",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "άνετοι",
        "femininePlural": "άνετες",
        "definitions": [
            {
                "text": "Που παρέχει σωματική άνεση.",
                "examples": [
                    "Οι νέες καρέκλες είναι πολύ πιο άνετες."
                ]
            }
        ],
        "subtext": "πολύ άνετα / άνετος με / νιώθω άνετα",
        "comparative": "ανετότερος",
        "superlative": "ο ανετότερος",
        "opposite": "άβολος"
    },
    {
        "word": "πρακτικός",
        "feminine": "πρακτική",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "plural": "πρακτικοί",
        "femininePlural": "πρακτικές",
        "definitions": [
            {
                "text": "Χρήσιμος σε πραγματικές καταστάσεις· λογικός.",
                "examples": [
                    "Έδωσε πολύ πρακτικές συμβουλές."
                ]
            }
        ],
        "subtext": "πολύ πρακτικό / ιδιαίτερα πρακτικό / μια πρακτική λύση",
        "comparative": "πρακτικότερος",
        "superlative": "ο πρακτικότερος",
        "opposite": "μη πρακτικός"
    },
    {
        "word": "δημοφιλής",
        "feminine": "δημοφιλής",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "δημοφιλείς",
        "femininePlural": "δημοφιλείς",
        "definitions": [
            {
                "text": "Που αρέσει ή εκτιμάται από πολλούς ανθρώπους.",
                "examples": [
                    "Αυτό το εστιατόριο είναι πολύ δημοφιλές."
                ]
            }
        ],
        "subtext": "πολύ δημοφιλής / δημοφιλής επιλογή / ένα δημοφιλές άτομο",
        "comparative": "δημοφιλέστερος",
        "superlative": "ο δημοφιλέστερος",
        "opposite": "αντιδημοφιλής"
    },
    {
        "word": "πολυάσχολος",
        "feminine": "πολυάσχολη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "πολυάσχολοι",
        "femininePlural": "πολυάσχολες",
        "definitions": [
            {
                "text": "Που έχει πολλή δουλειά ή δραστηριότητα.",
                "examples": [
                    "Έχει ένα πολυάσχολο πρόγραμμα αυτή την εβδομάδα με τρεις επισκέψεις πελατών."
                ]
            }
        ],
        "subtext": "πολύ απασχολημένος / μια γεμάτη μέρα / πολύ απασχολημένος για να μιλήσει",
        "comparative": "πιο πολυάσχολος",
        "superlative": "ο πιο πολυάσχολος",
        "opposite": "ελεύθερος"
    },
    {
        "word": "ευέλικτος",
        "feminine": "ευέλικτη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "ευέλικτοι",
        "femininePlural": "ευέλικτες",
        "definitions": [
            {
                "text": "Ικανός να αλλάζει και να προσαρμόζεται εύκολα σε διαφορετικές καταστάσεις.",
                "examples": [
                    "Η εταιρεία προσφέρει ευέλικτο ωράριο εργασίας."
                ]
            }
        ],
        "subtext": "ευέλικτο ωράριο / ευέλικτη προσέγγιση / πολύ ευέλικτος",
        "comparative": "ευελικτότερος",
        "superlative": "ο ευελικτότερος",
        "opposite": "άκαμπτος"
    },
    {
        "word": "οργανωμένος",
        "feminine": "οργανωμένη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📁",
        "form": "adjective",
        "plural": "οργανωμένοι",
        "femininePlural": "οργανωμένες",
        "definitions": [
            {
                "text": "Ικανός να σχεδιάζει και να διαχειρίζεται τα πράγματα με εύτακτο τρόπο.",
                "examples": [
                    "Πρέπει να είσαι πολύ οργανωμένος για να τηρείς κάθε προθεσμία."
                ]
            }
        ],
        "subtext": "καλά οργανωμένος / ιδιαίτερα οργανωμένος / παραμένω οργανωμένος",
        "comparative": "πιο οργανωμένος",
        "superlative": "ο πιο οργανωμένος",
        "opposite": "ανοργάνωτος"
    },
    {
        "word": "επαγγελματικός",
        "feminine": "επαγγελματική",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "επαγγελματικοί",
        "femininePlural": "επαγγελματικές",
        "definitions": [
            {
                "text": "Που συμπεριφέρεται με ειδικευμένο και κατάλληλο τρόπο για μια δουλειά.",
                "examples": [
                    "Φαίνεται πάντα πολύ επαγγελματίας στις συναντήσεις."
                ]
            }
        ],
        "subtext": "επαγγελματική συμβουλή / πολύ επαγγελματικός / άκρως επαγγελματικός",
        "comparative": "επαγγελματικότερος",
        "superlative": "ο επαγγελματικότερος",
        "opposite": "ερασιτεχνικός"
    },
    {
        "word": "υπεύθυνος",
        "feminine": "υπεύθυνη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "υπεύθυνοι",
        "femininePlural": "υπεύθυνες",
        "definitions": [
            {
                "text": "Που έχει το καθήκον να ασχοληθεί με κάτι· αξιόπιστος.",
                "examples": [
                    "Είναι υπεύθυνος για ολόκληρο τον προϋπολογισμό μάρκετινγκ."
                ]
            }
        ],
        "subtext": "υπεύθυνος για / πολύ υπεύθυνος / άκρως υπεύθυνος",
        "comparative": "υπευθυνότερος",
        "superlative": "ο υπευθυνότερος",
        "opposite": "ανεύθυνος"
    },
    {
        "word": "έμπειρος",
        "feminine": "έμπειρη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "adjective",
        "plural": "έμπειροι",
        "femininePlural": "έμπειρες",
        "definitions": [
            {
                "text": "Που έχει γνώσεις και δεξιότητες από την πρακτική εξάσκηση.",
                "examples": [
                    "Η εταιρεία χρειάζεται έναν έμπειρο διαχειριστή έργου."
                ]
            }
        ],
        "subtext": "πολύ έμπειρος / έμπειρος σε / αρκετά έμπειρος",
        "comparative": "εμπειρότερος",
        "superlative": "ο εμπειρότερος",
        "opposite": "άπειρος"
    },
    {
        "word": "ειδικευμένος",
        "feminine": "ειδικευμένη",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "ειδικευμένοι",
        "femininePlural": "ειδικευμένες",
        "definitions": [
            {
                "text": "Που έχει τις απαραίτητες δεξιότητες ή εκπαίδευση.",
                "examples": [
                    "Είναι πλήρως ειδικευμένη για να ηγηθεί της ομάδας."
                ]
            }
        ],
        "subtext": "πλήρως ειδικευμένος / καλά καταρτισμένος / άκρως ειδικευμένος",
        "comparative": "πιο ειδικευμένος",
        "superlative": "ο πιο ειδικευμένος",
        "opposite": "ανειδίκευτος"
    },
    {
        "word": "διαθέσιμος",
        "feminine": "διαθέσιμη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🙋",
        "form": "adjective",
        "plural": "διαθέσιμοι",
        "femininePlural": "διαθέσιμες",
        "definitions": [
            {
                "text": "Ελεύθερος· που μπορεί να χρησιμοποιηθεί ή να βρεθεί.",
                "examples": [
                    "Είναι ο διευθυντής διαθέσιμος για μια συνάντηση στις τρεις;"
                ]
            }
        ],
        "subtext": "ευρέως διαθέσιμος / ελεύθερα διαθέσιμος / διαθέσιμος για",
        "comparative": "πιο διαθέσιμος",
        "superlative": "ο πιο διαθέσιμος",
        "opposite": "μη διαθέσιμος"
    },
    {
        "word": "επιτυχημένος",
        "feminine": "επιτυχημένη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "adjective",
        "plural": "επιτυχημένοι",
        "femininePlural": "επιτυχημένες",
        "definitions": [
            {
                "text": "Που έχει επιτύχει κάτι επιθυμητό.",
                "examples": [
                    "Είχε μια πολύ επιτυχημένη πρώτη χρονιά στον ρόλο."
                ]
            }
        ],
        "subtext": "πολύ επιτυχημένος / μια επιτυχημένη καριέρα / άκρως επιτυχημένος",
        "comparative": "πιο επιτυχημένος",
        "superlative": "ο πιο επιτυχημένος",
        "opposite": "αποτυχημένος"
    },
    {
        "word": "φιλόδοξος",
        "feminine": "φιλόδοξη",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚀",
        "form": "adjective",
        "plural": "φιλόδοξοι",
        "femininePlural": "φιλόδοξες",
        "definitions": [
            {
                "text": "Που έχει έντονη επιθυμία να πετύχει.",
                "examples": [
                    "Είναι πολύ φιλόδοξος και θέλει να γίνει διευθυντής μέχρι τα σαράντα."
                ]
            }
        ],
        "subtext": "πολύ φιλόδοξος / εξαιρετικά φιλόδοξος / ένα φιλόδοξο σχέδιο",
        "comparative": "φιλοδοξότερος",
        "superlative": "ο φιλοδοξότερος",
        "opposite": "χωρίς φιλοδοξίες"
    },
    {
        "word": "δημιουργικός",
        "feminine": "δημιουργική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "δημιουργικοί",
        "femininePlural": "δημιουργικές",
        "definitions": [
            {
                "text": "Ικανός να παράγει νέες και πρωτότυπες ιδέες.",
                "examples": [
                    "Η δημιουργική ομάδα είναι πολύ δημιουργική και εργατική."
                ]
            }
        ],
        "subtext": "πολύ δημιουργικός / δημιουργική σκέψη / δημιουργική λύση",
        "comparative": "δημιουργικότερος",
        "superlative": "ο δημιουργικότερος",
        "opposite": "μη δημιουργικός"
    },
    {
        "word": "παραγωγικός",
        "feminine": "παραγωγική",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⚙️",
        "form": "adjective",
        "plural": "παραγωγικοί",
        "femininePlural": "παραγωγικές",
        "definitions": [
            {
                "text": "Που κάνει ή παράγει πολλή χρήσιμη δουλειά.",
                "examples": [
                    "Είναι πιο παραγωγική τις πρώτες πρωινές ώρες."
                ]
            }
        ],
        "subtext": "πολύ παραγωγικός / ιδιαίτερα παραγωγικός / μια παραγωγική συνάντηση",
        "comparative": "παραγωγικότερος",
        "superlative": "ο παραγωγικότερος",
        "opposite": "μη παραγωγικός"
    },
    {
        "word": "αξιόπιστος",
        "feminine": "αξιόπιστη",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "αξιόπιστοι",
        "femininePlural": "αξιόπιστες",
        "definitions": [
            {
                "text": "Σταθερά καλός· που μπορείς να τον εμπιστευτείς.",
                "examples": [
                    "Είναι το πιο αξιόπιστο άτομο στην ομάδα."
                ]
            }
        ],
        "subtext": "πολύ αξιόπιστος / ιδιαίτερα αξιόπιστος / μια αξιόπιστη πηγή",
        "comparative": "αξιόπιστότερος",
        "superlative": "ο αξιόπιστότερος",
        "opposite": "αναξιόπιστος"
    },
    {
        "word": "ανεξάρτητος",
        "feminine": "ανεξάρτητη",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦅",
        "form": "adjective",
        "plural": "ανεξάρτητοι",
        "femininePlural": "ανεξάρτητες",
        "definitions": [
            {
                "text": "Που δεν χρειάζεται βοήθεια ή υποστήριξη από άλλους.",
                "examples": [
                    "Είναι πολύ ανεξάρτητη και διαχειρίζεται το δικό της φόρτο εργασίας."
                ]
            }
        ],
        "subtext": "οικονομικά ανεξάρτητος / πολύ ανεξάρτητος / μια ανεξάρτητη έκθεση",
        "comparative": "ανεξαρτητότερος",
        "superlative": "ο ανεξαρτητότερος",
        "opposite": "εξαρτημένος"
    },
    {
        "word": "φτηνός",
        "feminine": "φτηνή",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏷️",
        "form": "adjective",
        "plural": "φτηνοί",
        "femininePlural": "φτηνές",
        "definitions": [
            {
                "text": "Χαμηλός σε τιμή· όχι ακριβός.",
                "examples": [
                    "Αυτή η λύση είναι πολύ φτηνότερη από την πρόσληψη επιπλέον προσωπικού."
                ]
            }
        ],
        "subtext": "πολύ φτηνά / φτηνή επιλογή / φτηνό και εύκολο",
        "comparative": "φτηνότερος",
        "superlative": "ο φτηνότερος",
        "opposite": "ακριβός"
    },
    {
        "word": "ακριβός",
        "feminine": "ακριβή",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "ακριβοί",
        "femininePlural": "ακριβές",
        "definitions": [
            {
                "text": "Υψηλός σε τιμή· που κοστίζει πολύ.",
                "examples": [
                    "Ο χώρος του γραφείου στο κέντρο είναι εξαιρετικά ακριβός."
                ]
            }
        ],
        "subtext": "πολύ ακριβό / ακριβά γούστα / πολύ ακριβό",
        "comparative": "ακριβότερος",
        "superlative": "ο ακριβότερος",
        "opposite": "φτηνός"
    },
    {
        "word": "προσιτός",
        "feminine": "προσιτή",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💵",
        "form": "adjective",
        "plural": "προσιτοί",
        "femininePlural": "προσιτές",
        "definitions": [
            {
                "text": "Εντός της οικονομικής δυνατότητας των περισσότερων ανθρώπων.",
                "examples": [
                    "Αναζητούν προσιτούς χώρους γραφείων."
                ]
            }
        ],
        "subtext": "προσιτή τιμή / πιο προσιτό / προσιτή επιλογή",
        "comparative": "πιο προσιτός",
        "superlative": "ο πιο προσιτός",
        "opposite": "απρόσιτος"
    },
    {
        "word": "αξίζει τον κόπο",
        "feminine": "αξίζει τον κόπο",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "adjective",
        "plural": "αξίζει τον κόπο",
        "femininePlural": "αξίζει τον κόπο",
        "definitions": [
            {
                "text": "Που έχει αξία ίση με ή που αξίζει.",
                "examples": [
                    "Η επένδυση αξίζει κάθε δεκάρα."
                ]
            }
        ],
        "subtext": "αξίζει τα λεφτά / αξίζει να γίνει / αξίζει να το εξετάσουμε",
        "comparative": null,
        "superlative": null,
        "opposite": "άχρηστος"
    },
    {
        "word": "δωρεάν",
        "feminine": "δωρεάν",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🎁",
        "form": "adjective",
        "plural": "δωρεάν",
        "femininePlural": "δωρεάν",
        "definitions": [
            {
                "text": "Που δεν κοστίζει χρήματα.",
                "examples": [
                    "Η στάθμευση είναι δωρεάν για όλους τους υπαλλήλους."
                ]
            }
        ],
        "subtext": "δωρεάν / εντελώς δωρεάν / δωρεάν δοκιμή",
        "comparative": null,
        "superlative": null,
        "opposite": "επί πληρωμή"
    },
    {
        "word": "άφραγκος",
        "feminine": "άφραγκη",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📉",
        "form": "adjective",
        "plural": "άφραγκοι",
        "femininePlural": "άφραγκες",
        "definitions": [
            {
                "text": "Που δεν έχει καθόλου χρήματα· ανεπίσημο.",
                "examples": [
                    "Ξόδεψε πάρα πολλά και είναι εντελώς άφραγκος."
                ]
            }
        ],
        "subtext": "εντελώς άφραγκος / μένω άφραγκος / χρεοκοπώ",
        "comparative": "πιο άφραγκος",
        "superlative": "ο πιο άφραγκος",
        "opposite": "πλούσιος"
    },
    {
        "word": "πλούσιος",
        "feminine": "πλούσια",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏦",
        "form": "adjective",
        "plural": "πλούσιοι",
        "femininePlural": "πλούσιες",
        "definitions": [
            {
                "text": "Που έχει πολλά χρήματα.",
                "examples": [
                    "Έγινε πολύ πλούσια μετά την πώληση της εταιρείας της."
                ]
            }
        ],
        "subtext": "πολύ πλούσιος / αρκετά πλούσιος / μυθικά πλούσιος",
        "comparative": "πλουσιότερος",
        "superlative": "ο πλουσιότερος",
        "opposite": "φτωχός"
    },
    {
        "word": "φτωχός",
        "feminine": "φτωχή",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "φτωχοί",
        "femininePlural": "φτωχές",
        "definitions": [
            {
                "text": "Που έχει πολύ λίγα χρήματα.",
                "examples": [
                    "Η εταιρεία ξεκίνησε πολύ φτωχή και αναπτύχθηκε μόνη της."
                ]
            }
        ],
        "subtext": "πολύ φτωχός / κακής ποιότητας / πάμφτωχος",
        "comparative": "φτωχότερος",
        "superlative": "ο φτωχότερος",
        "opposite": "πλούσιος"
    },
    {
        "word": "υγιής",
        "feminine": "υγιής",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "plural": "υγιείς",
        "femininePlural": "υγιείς",
        "definitions": [
            {
                "text": "Σε καλή υγεία· καλό για εσάς.",
                "examples": [
                    "Ακολουθεί έναν υγιεινό τρόπο ζωής εκτός εργασίας."
                ]
            }
        ],
        "subtext": "υγιεινή διατροφή / πολύ υγιής / παραμένω υγιής",
        "comparative": "πιο υγιής",
        "superlative": "ο πιο υγιής",
        "opposite": "ανθυγιεινός"
    },
    {
        "word": "ανθυγιεινός",
        "feminine": "ανθυγιεινή",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍔",
        "form": "adjective",
        "plural": "ανθυγιεινοί",
        "femininePlural": "ανθυγιεινές",
        "definitions": [
            {
                "text": "Όχι καλό για την υγεία σας.",
                "examples": [
                    "Το να κάθεσαι σε ένα γραφείο όλη μέρα είναι ανθυγιεινό."
                ]
            }
        ],
        "subtext": "πολύ ανθυγιεινό / ανθυγιεινές συνήθειες / βαθιά ανθυγιεινό",
        "comparative": "ανθυγιεινότερος",
        "superlative": "ο ανθυγιεινότερος",
        "opposite": "υγιής"
    },
    {
        "word": "άρρωστος",
        "feminine": "άρρωστη",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤒",
        "form": "adjective",
        "plural": "άρρωστοι",
        "femininePlural": "άρρωστες",
        "definitions": [
            {
                "text": "Όχι καλά· που υποφέρει από ασθένεια.",
                "examples": [
                    "Είναι άρρωστη και εργάζεται από το σπίτι αυτή την εβδομάδα."
                ]
            }
        ],
        "subtext": "σοβαρά άρρωστος / αρρωσταίνω / νιώθω άρρωστος",
        "comparative": "πιο άρρωστος",
        "superlative": "ο πιο άρρωστος",
        "opposite": "υγιής"
    },
    {
        "word": "άρρωστος",
        "feminine": "άρρωστη",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤢",
        "form": "adjective",
        "plural": "άρρωστοι",
        "femininePlural": "άρρωστες",
        "definitions": [
            {
                "text": "Που νιώθει σωματικά αδιαθεσία· που έχει ναυτία.",
                "examples": [
                    "Δήλωσε άρρωστος τη Δευτέρα το πρωί."
                ]
            }
        ],
        "subtext": "νιώθω αδιαθεσία / δηλώνω άρρωστος / πολύ άρρωσος",
        "comparative": "πιο άρρωστος",
        "superlative": "ο πιο άρρωστος",
        "opposite": "υγιής"
    },
    {
        "word": "κουρασμένος",
        "feminine": "κουρασμένη",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😴",
        "form": "adjective",
        "plural": "κουρασμένοι",
        "femininePlural": "κουρασμένες",
        "definitions": [
            {
                "text": "Που νιώθει την ανάγκη να ξεκουραστεί.",
                "examples": [
                    "Νιώθω πολύ κουρασμένος μετά το μακρύ επαγγελματικό ταξίδι."
                ]
            }
        ],
        "subtext": "νιώθω κουρασμένος / εξαντλημένος και κουρασμένος / πολύ κουρασμένος",
        "comparative": "πιο κουρασμένος",
        "superlative": "ο πιο κουρασμένος",
        "opposite": "ξεκούραστος"
    },
    {
        "word": "αγχωμένος",
        "feminine": "αγχωμένη",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "αγχωμένοι",
        "femininePlural": "αγχωμένες",
        "definitions": [
            {
                "text": "Που νιώθει ανησυχία και ένταση.",
                "examples": [
                    "Νιώθει αγχωμένη για την επερχόμενη παρουσίαση."
                ]
            }
        ],
        "subtext": "νιώθω άγχος / πολύ αγχωμένος / εντελώς αγχωμένος",
        "comparative": "πιο αγχωμένος",
        "superlative": "ο πιο αγχωμένος",
        "opposite": "χαλαρός"
    },
    {
        "word": "φιλικός",
        "feminine": "φιλική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👋",
        "form": "adjective",
        "plural": "φιλικοί",
        "femininePlural": "φιλικές",
        "definitions": [
            {
                "text": "Ευγενικός, ευχάριστος και εύκολος στην επικοινωνία.",
                "examples": [
                    "Όλο το προσωπικό σε αυτό το γραφείο είναι πολύ φιλικό."
                ]
            }
        ],
        "subtext": "πολύ φιλικός / μια φιλική ατμόσφαιρα / αρκετά φιλικός",
        "comparative": "φιλικότερος",
        "superlative": "ο φιλικότερος",
        "opposite": "εχθρικός"
    },
    {
        "word": "ευγενικός",
        "feminine": "ευγενική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "❤️",
        "form": "adjective",
        "plural": "ευγενικοί",
        "femininePlural": "ευγενικές",
        "definitions": [
            {
                "text": "Γενναιόδωρος και περιποιητικός προς τους άλλους.",
                "examples": [
                    "Είναι ευγενική με όλους, ακόμη και υπό πίεση."
                ]
            }
        ],
        "subtext": "πολύ ευγενικός / ευγενικό εκ μέρους σου / μια ευγενική κίνηση",
        "comparative": "ευγενικότερος",
        "superlative": "ο ευγενικότερος",
        "opposite": "κακός"
    },
    {
        "word": "ειλικρινής",
        "feminine": "ειλικρινής",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "ειλικρινείς",
        "femininePlural": "ειλικρινείς",
        "definitions": [
            {
                "text": "Που λέει την αλήθεια· που δεν εξαπατά τους ανθρώπους.",
                "examples": [
                    "Είναι απόλυτα ειλικρινής με τους πελάτες και τους συναδέλφους."
                ]
            }
        ],
        "subtext": "βάναυσα ειλικρινής / πολύ ειλικρινής / απόλυτα ειλικρινής",
        "comparative": "ειλικρινέστερος",
        "superlative": "ο ειλικρινέστερος",
        "opposite": "ανειλικρινής"
    },
    {
        "word": "υπομονετικός",
        "feminine": "υπομονετική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⏳",
        "form": "adjective",
        "plural": "υπομονετικοί",
        "femininePlural": "υπομονετικές",
        "definitions": [
            {
                "text": "Ικανός να περιμένει χωρίς να παραπονιέται.",
                "examples": [
                    "Ένας καλός εκπαιδευτής πρέπει να είναι εξαιρετικά υπομονετικός."
                ]
            }
        ],
        "subtext": "πολύ υπομονετικός / υπομονετικός με / απίστευτα υπομονετικός",
        "comparative": "υπομονετικότερος",
        "superlative": "ο υπομονετικότερος",
        "opposite": "ανυπόμονος"
    },
    {
        "word": "ευγενικός",
        "feminine": "ευγενική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🙇",
        "form": "adjective",
        "plural": "ευγενικοί",
        "femininePlural": "ευγενικές",
        "definitions": [
            {
                "text": "Που συμπεριφέρεται με αβρότητα και σεβασμό.",
                "examples": [
                    "Είναι πάντα ευγενική, ακόμη και σε δύσκολες συζητήσεις."
                ]
            }
        ],
        "subtext": "πολύ ευγενικός / αρνούμαι ευγενικά / είμαι ευγενικός",
        "comparative": "ευγενικότερος",
        "superlative": "ο ευγενικότερος",
        "opposite": "αγενής"
    },
    {
        "word": "υποστηρικτικός",
        "feminine": "υποστηρικτική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "υποστηρικτικοί",
        "femininePlural": "υποστηρικτικές",
        "definitions": [
            {
                "text": "Που παρέχει βοήθεια και ενθάρρυνση.",
                "examples": [
                    "Ο διευθυντής της είναι πολύ υποστηρικτικός κατά τη διάρκεια περιόδων με πολλή δουλειά."
                ]
            }
        ],
        "subtext": "πολύ υποστηρικτικός / υποστηρικτική ομάδα / είμαι υποστηρικτικός",
        "comparative": "πιο υποστηρικτικός",
        "superlative": "ο πιο υποστηρικτικός",
        "opposite": "μη υποστηρικτικός"
    },
    {
        "word": "σίγουρος",
        "feminine": "σίγουρη",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "✨",
        "form": "adjective",
        "plural": "σίγουροι",
        "femininePlural": "σίγουρες",
        "definitions": [
            {
                "text": "Σίγουρος για τις ικανότητές του.",
                "examples": [
                    "Παρουσιάζει με αυτοπεποίθηση και είναι πολύ σίγουρος για τον εαυτό του."
                ]
            }
        ],
        "subtext": "σίγουρος για τον εαυτό του / πολύ σίγουρος / νιώθω σίγουρος",
        "comparative": "πιο σίγουρος",
        "superlative": "ο πιο σίγουρος",
        "opposite": "ανασφαλής"
    },
    {
        "word": "κοινωνικός",
        "feminine": "κοινωνική",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🗣️",
        "form": "adjective",
        "plural": "κοινωνικοί",
        "femininePlural": "κοινωνικές",
        "definitions": [
            {
                "text": "Που του αρέσει να περνά χρόνο με άλλους ανθρώπους.",
                "examples": [
                    "Είναι πολύ κοινωνική και τους ξέρει όλους."
                ]
            }
        ],
        "subtext": "πολύ κοινωνικός / φυσικά κοινωνικός / κοινωνικό άτομο",
        "comparative": "κοινωνικότερος",
        "superlative": "ο κοινωνικότερος",
        "opposite": "αντικοινωνικός"
    },
    {
        "word": "μοντέρνος",
        "feminine": "μοντέρνα",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "μοντέρνοι",
        "femininePlural": "μοντέρνες",
        "definitions": [
            {
                "text": "Σχεδιασμένος για την παρούσα εποχή· ενημερωμένος.",
                "examples": [
                    "Η εταιρεία μετακόμισε σε ένα μοντέρνο γραφείο ανοιχτής διάταξης."
                ]
            }
        ],
        "subtext": "πολύ μοντέρνο / μοντέρνος σχεδιασμός / υπερσύγχρονο",
        "comparative": "μοντερνότερος",
        "superlative": "ο μοντερνότερος",
        "opposite": "παλιός"
    },
    {
        "word": "παραδοσιακός",
        "feminine": "παραδοσιακή",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "παραδοσιακοί",
        "femininePlural": "παραδοσιακές",
        "definitions": [
            {
                "text": "Που ακολουθεί καθιερωμένα έθιμα ή τρόπους.",
                "examples": [
                    "Η εταιρεία έχει μια παραδοσιακή δομή διαχείρισης."
                ]
            }
        ],
        "subtext": "πολύ παραδοσιακό / παραδοσιακή προσέγγιση / βαθιά παραδοσιακό",
        "comparative": "παραδοσιακότερος",
        "superlative": "ο παραδοσιακότερος",
        "opposite": "μοντέρνος"
    },
    {
        "word": "τοπικός",
        "feminine": "τοπική",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "τοπικοί",
        "femininePlural": "τοπικές",
        "definitions": [
            {
                "text": "Που σχετίζεται με τη γύρω περιοχή.",
                "examples": [
                    "Προτιμά να χρησιμοποιεί τοπικούς προμηθευτές."
                ]
            }
        ],
        "subtext": "τοπική περιοχή / τοπική επιχείρηση / ένα τοπικό πρόβλημα",
        "comparative": "πιο τοπικός",
        "superlative": "ο πιο τοπικός",
        "opposite": "διεθνής"
    },
    {
        "word": "διεθνής",
        "feminine": "διεθνής",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🌎",
        "form": "adjective",
        "plural": "διεθνείς",
        "femininePlural": "διεθνείς",
        "definitions": [
            {
                "text": "Που περιλαμβάνει περισσότερες από μία χώρες.",
                "examples": [
                    "Η εταιρεία συνεργάζεται με διεθνείς πελάτες."
                ]
            }
        ],
        "subtext": "διεθνείς επιχειρήσεις / πλήρως διεθνής / διεθνής ομάδα",
        "comparative": null,
        "superlative": null,
        "opposite": "τοπικός"
    },
    {
        "word": "ενδιαφέρων",
        "feminine": "ενδιαφέρουσα",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "ενδιαφέροντες",
        "femininePlural": "ενδιαφέρουσες",
        "definitions": [
            {
                "text": "Που τραβάει την προσοχή· που αξίζει να το γνωρίζεις.",
                "examples": [
                    "Η συνεδρία του συνεδρίου για την ΤΝ ήταν πολύ ενδιαφέρουσα."
                ]
            }
        ],
        "subtext": "πολύ ενδιαφέρον / βρίσκω ενδιαφέρον / ένα ενδιαφέρον σημείο",
        "comparative": "πιο ενδιαφέρων",
        "superlative": "ο πιο ενδιαφέρων",
        "opposite": "βαρετός"
    },
    {
        "word": "βαρετός",
        "feminine": "βαρετή",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💤",
        "form": "adjective",
        "plural": "βαρετοί",
        "femininePlural": "βαρετές",
        "definitions": [
            {
                "text": "Όχι ενδιαφέρον· ανιαρός.",
                "examples": [
                    "Η εκπαίδευση συμμόρφωσης ήταν πολύ βαρετή."
                ]
            }
        ],
        "subtext": "πολύ βαρετό / μια βαρετή συνάντηση / βρίσκω βαρετό",
        "comparative": "βαρετότερος",
        "superlative": "ο βαρετότερος",
        "opposite": "ενδιαφέρων"
    },
    {
        "word": "παράξενος",
        "feminine": "παράξενη",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "❓",
        "form": "adjective",
        "plural": "παράξενοι",
        "femininePlural": "παράξενες",
        "definitions": [
            {
                "text": "Ασυνήθιστος ή απροσδόκητος με τρόπο που είναι δύσκολο να κατανοηθεί.",
                "examples": [
                    "Το email από τον πελάτη ακούστηκε πολύ παράξενο."
                ]
            }
        ],
        "subtext": "πολύ παράξενο / ένα παράξενο συναίσθημα / βρίσκω παράξενο",
        "comparative": "παραξενότερος",
        "superlative": "ο παραξενότερος",
        "opposite": "φυσιολογικός"
    },
    {
        "word": "φυσιολογικός",
        "feminine": "φυσιολογική",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "φυσιολογικοί",
        "femininePlural": "φυσιολογικές",
        "definitions": [
            {
                "text": "Τυπικός ή συνηθισμένος· αυτό που θα περίμενε κανείς.",
                "examples": [
                    "Είναι φυσιολογικό να νιώθεις νευρικότητα πριν από μια μεγάλη παρουσίαση."
                ]
            }
        ],
        "subtext": "εντελώς φυσιολογικό / απόλυτα φυσιολογικό / νιώθω φυσιολογικά",
        "comparative": "φυσιολογικότερος",
        "superlative": "ο φυσιολογικότερος",
        "opposite": "παράξενος"
    },
    {
        "word": "τυπικός",
        "feminine": "τυπική",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔄",
        "form": "adjective",
        "plural": "τυπικοί",
        "femininePlural": "τυπικές",
        "definitions": [
            {
                "text": "Που έχει τις συνηθισμένες ιδιότητες ενός τύπου ατόμου ή πράγματος.",
                "examples": [
                    "Αυτό είναι ένα τυπικό πρόβλημα σε μεγάλους οργανισμούς."
                ]
            }
        ],
        "subtext": "πολύ τυπικό / μια τυπική μέρα / τυπικό για",
        "comparative": "τυπικότερος",
        "superlative": "ο τυπικότερος",
        "opposite": "άτυπος"
    },
    {
        "word": "κοινός",
        "feminine": "κοινή",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "κοινοί",
        "femininePlural": "κοινές",
        "definitions": [
            {
                "text": "Που συμβαίνει συχνά· που βρίσκεται σε πολλά μέρη.",
                "examples": [
                    "Η επαγγελματική εξουθένωση είναι ένα κοινό πρόβλημα σε αυτόν τον κλάδο."
                ]
            }
        ],
        "subtext": "πολύ συνηθισμένο / κοινό πρόβλημα / κοινή λογική",
        "comparative": "πιο κοινός",
        "superlative": "ο πιο κοινός",
        "opposite": "σπάνιος"
    },
    {
        "word": "σπάνιος",
        "feminine": "σπάνια",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "σπάνιοι",
        "femininePlural": "σπάνιες",
        "definitions": [
            {
                "text": "Που δεν συμβαίνει συχνά· που δεν βρίσκεται σε πολλά μέρη.",
                "examples": [
                    "Ένας πραγματικά υποστηρικτικός διευθυντής είναι σπάνιος."
                ]
            }
        ],
        "subtext": "πολύ σπάνιο / σπάνια ευκαιρία / ένα σπάνιο γεγονός",
        "comparative": "σπανιότερος",
        "superlative": "ο σπανιότερος",
        "opposite": "κοινός"
    },
    {
        "word": "σίγουρος",
        "feminine": "σίγουρη",
        "level": "elementary",
        "theme": "comparison_A2",
        "emoji": "🎯",
        "form": "adjective",
        "plural": "σίγουροι",
        "femininePlural": "σίγουρες",
        "definitions": [
            {
                "text": "Καθορισμένος· χωρίς καμία αμφιβολία.",
                "examples": [
                    "Είναι σίγουρη ότι έκανε τη σωστή επιλογή."
                ]
            }
        ],
        "subtext": "απολύτως σίγουρος / είμαι σίγουρος / νιώθω σίγουρος",
        "comparative": "πιο σίγουρος",
        "superlative": "ο πιο σίγουρος",
        "opposite": "αβέβαιος"
    },
    {
        "word": "ξεκάθαρος",
        "feminine": "ξεκάθαρη",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔍",
        "form": "adjective",
        "plural": "ξεκάθαροι",
        "femininePlural": "ξεκάθαρες",
        "definitions": [
            {
                "text": "Εύκολος στην κατανόηση· χωρίς σύγχυση.",
                "examples": [
                    "Οι οδηγίες είναι πολύ ξεκάθαρες."
                ]
            }
        ],
        "subtext": "κρυστάλλινα ξεκάθαρο / πολύ ξεκάθαρο / το κάνω ξεκάθαρο",
        "comparative": "ξεκαθαρότερος",
        "superlative": "ο ξεκαθαρότερος",
        "opposite": "ασαφής"
    },
    {
        "word": "δύσκολος",
        "feminine": "δύσκολη",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧩",
        "form": "adjective",
        "plural": "δύσκολοι",
        "femininePlural": "δύσκολες",
        "definitions": [
            {
                "text": "Όχι εύκολος· που απαιτεί προσπάθεια ή δεξιότητα.",
                "examples": [
                    "Η διαπραγμάτευση ήταν πολύ δύσκολη."
                ]
            }
        ],
        "subtext": "πολύ δύσκολο / βρίσκω δύσκολο / δύσκολο να κατανοηθεί",
        "comparative": "δυσκολότερος",
        "superlative": "ο δυσκολότερος",
        "opposite": "εύκολος"
    },
    {
        "word": "απλός",
        "feminine": "απλή",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "απλοί",
        "femininePlural": "απλές",
        "definitions": [
            {
                "text": "Εύκολος στην κατανόηση ή την εκτέλεση· όχι περίπλοκος.",
                "examples": [
                    "Η λύση είναι στην πραγματικότητα πολύ απλή."
                ]
            }
        ],
        "subtext": "πολύ απλό / αρκετά απλό / το κρατώ απλό",
        "comparative": "απλούστερος",
        "superlative": "ο απλούστερος",
        "opposite": "περίπλοκος"
    },
    {
        "word": "περίπλοκος",
        "feminine": "περίπλοκη",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🕸️",
        "form": "adjective",
        "plural": "περίπλοκοι",
        "femininePlural": "περίπλοκες",
        "definitions": [
            {
                "text": "Που περιλαμβάνει πολλά μέρη· όχι εύκολος στην κατανόηση.",
                "examples": [
                    "Το συμβόλαιο είναι πολύ περίπλοκο."
                ]
            }
        ],
        "subtext": "πολύ περίπλοκο / γίνεται περίπλοκο / υπερβολικά περίπλοκο",
        "comparative": "περιπλοκότερος",
        "superlative": "ο περιπλοκότερος",
        "opposite": "απλός"
    },
    {
        "word": "σοβαρός",
        "feminine": "σοβαρή",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "σοβαροί",
        "femininePlural": "σοβαρές",
        "definitions": [
            {
                "text": "Σημαντικός· που απαιτεί προσεκτική σκέψη.",
                "examples": [
                    "Αυτό είναι ένα σοβαρό πρόβλημα που χρειάζεται προσοχή."
                ]
            }
        ],
        "subtext": "πολύ σοβαρά / θανάσιμα σοβαρός / ένα σοβαρό ζήτημα",
        "comparative": "σοβαρότερος",
        "superlative": "ο σοβαρότερος",
        "opposite": "αστείος"
    },
    {
        "word": "αστείος",
        "feminine": "αστεία",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "😂",
        "form": "adjective",
        "plural": "αστείοι",
        "femininePlural": "αστείες",
        "definitions": [
            {
                "text": "Που σε κάνει να γελάς· χιουμοριστικός.",
                "examples": [
                    "Ο πελάτης μοιράστηκε μια αστεία ιστορία για να σπάσει τον πάγο."
                ]
            }
        ],
        "subtext": "πολύ αστείο / μια αστεία κατάσταση / βρίσκω αστείο",
        "comparative": "αστειότερος",
        "superlative": "ο αστειότερος",
        "opposite": "σοβαρός"
    },
    {
        "word": "άμεσος",
        "feminine": "άμεση",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "➡️",
        "form": "adjective",
        "plural": "άμεσοι",
        "femininePlural": "άμεσες",
        "definitions": [
            {
                "text": "Που πηγαίνει κατευθείαν στο θέμα· όχι έμμεσος.",
                "examples": [
                    "Είναι πολύ άμεσος και λέει ακριβώς τι σκέφτεται."
                ]
            }
        ],
        "subtext": "πολύ άμεσο / άμεση προσέγγιση / μια άμεση ερώτηση",
        "comparative": "αμεσότερος",
        "superlative": "ο αμεσότερος",
        "opposite": "έμμεσος"
    },
    {
        "word": "καθημερινός",
        "feminine": "καθημερινή",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "📅",
        "form": "adjective",
        "plural": "καθημερινοί",
        "femininePlural": "καθημερινές",
        "definitions": [
            {
                "text": "Που συμβαίνει κάθε μέρα.",
                "examples": [
                    "Έχει μια καθημερινή διαδρομή σαράντα πέντε λεπτών."
                ]
            }
        ],
        "subtext": "καθημερινή ρουτίνα / σε καθημερινή βάση / καθημερινή αναφορά",
        "comparative": null,
        "superlative": null,
        "opposite": "μηνιαίος"
    },
    {
        "word": "τακτικός",
        "feminine": "τακτική",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔁",
        "form": "adjective",
        "plural": "τακτικοί",
        "femininePlural": "τακτικές",
        "definitions": [
            {
                "text": "Που συμβαίνει σε καθορισμένους χρόνους ή διαστήματα.",
                "examples": [
                    "Έχουν τακτικές συναντήσεις ομάδας τις Δευτέρες."
                ]
            }
        ],
        "subtext": "πολύ τακτικά / σε τακτική βάση / τακτικός πελάτης",
        "comparative": "τακτικότερος",
        "superlative": "ο τακτικότερος",
        "opposite": "άτακτος"
    },
    {
        "word": "πρόσφατος",
        "feminine": "πρόσφατη",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🕒",
        "form": "adjective",
        "plural": "πρόσφατοι",
        "femininePlural": "πρόσφατες",
        "definitions": [
            {
                "text": "Που συνέβη πριν από όχι πολύ καιρό.",
                "examples": [
                    "Έχετε δει τις πρόσφατες αλλαγές στην πολιτική;"
                ]
            }
        ],
        "subtext": "ο πιο πρόσφατος / πολύ πρόσφατο / πρόσφατα νέα",
        "comparative": "πιο πρόσφατος",
        "superlative": "ο πιο πρόσφατος",
        "opposite": "παλιός"
    },
    {
        "word": "τρέχων",
        "feminine": "τρέχουσα",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "τρέχοντες",
        "femininePlural": "τρέχουσες",
        "definitions": [
            {
                "text": "Που συμβαίνει ή υπάρχει τώρα.",
                "examples": [
                    "Ποιος είναι ο τρέχων μισθός σας;"
                ]
            }
        ],
        "subtext": "τρέχουσα κατάσταση / τρέχων εργοδότης / επί του παρόντος",
        "comparative": null,
        "superlative": null,
        "opposite": "προηγούμενος"
    },
    {
        "word": "μελλοντικός",
        "feminine": "μελλοντική",
        "level": "elementary",
        "theme": "future_time_A2",
        "emoji": "🔮",
        "form": "adjective",
        "plural": "μελλοντικοί",
        "femininePlural": "μελλοντικές",
        "definitions": [
            {
                "text": "Που δεν έχει συμβεί ακόμα· που σχετίζεται με μεταγενέστερο χρόνο.",
                "examples": [
                    "Ποια είναι τα μελλοντικά σας σχέδια για την καριέρα σας;"
                ]
            }
        ],
        "subtext": "μελλοντικά σχέδια / στο μέλλον / μελλοντικός εργοδότης",
        "comparative": null,
        "superlative": null,
        "opposite": "παρελθοντικός"
    },
    {
        "word": "προηγούμενος",
        "feminine": "προηγούμενη",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "⬅️",
        "form": "adjective",
        "plural": "προηγούμενοι",
        "femininePlural": "προηγούμενες",
        "definitions": [
            {
                "text": "Που συνέβη ή υπήρχε πριν από το παρόν.",
                "examples": [
                    "Ανέφερε τον προηγούμενο εργοδότη της στη συνέντευξη."
                ]
            }
        ],
        "subtext": "προηγούμενη δουλειά / προηγούμενος εργοδότης / προηγούμενη εμπειρία",
        "comparative": null,
        "superlative": null,
        "opposite": "επόμενος"
    }
];
    const lang = "el";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "όμορφος",
        "level": "elementary",
        "theme": "describing",
        "form": "adjective",
        "emoji": "✨",
        "feminine": "όμορφη",
        "neuter": "όμορφο",
        "plural": "όμορφοι",
        "femininePlural": "όμορφες",
        "neuterPlural": "όμορφα",
        "comparative": "πιο όμορφος",
        "superlative": "ο πιο όμορφος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "όμορφος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_033"
    },
    {
        "word": "δυνατός",
        "level": "elementary",
        "theme": "describing",
        "form": "adjective",
        "emoji": "💪",
        "feminine": "δυνατή",
        "neuter": "δυνατό",
        "plural": "δυνατοί",
        "femininePlural": "δυνατές",
        "neuterPlural": "δυνατά",
        "comparative": "πιο δυνατός",
        "superlative": "ο πιο δυνατός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "δυνατός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_034"
    },
    {
        "word": "ξανθός",
        "level": "elementary",
        "theme": "describing",
        "form": "adjective",
        "emoji": "👱",
        "feminine": "ξανθιά",
        "neuter": "ξανθό",
        "plural": "ξανθοί",
        "femininePlural": "ξανθές",
        "neuterPlural": "ξανθά",
        "comparative": "πιο ξανθός",
        "superlative": "ο πιο ξανθός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ξανθός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_035"
    },
    {
        "word": "χιονισμένος",
        "level": "elementary",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "feminine": "χιονισμένη",
        "neuter": "χιονισμένο",
        "plural": "χιονισμένοι",
        "femininePlural": "χιονισμένες",
        "neuterPlural": "χιονισμένα",
        "comparative": "πιο χιονισμένος",
        "superlative": "ο πιο χιονισμένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "χιονισμένος",
                "examples": []
            }
        ],
        "id": "el_elementary_nature_002"
    },
    {
        "word": "ανεμώδης",
        "level": "elementary",
        "theme": "nature",
        "emoji": "💨",
        "form": "adjective",
        "feminine": "ανεμώδης",
        "neuter": "ανεμώδες",
        "plural": "ανεμώδεις",
        "femininePlural": "ανεμώδεις",
        "neuterPlural": "ανεμώδη",
        "comparative": "πιο ανεμώδης",
        "superlative": "ο πιο ανεμώδης",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ανεμώδης",
                "examples": []
            }
        ],
        "id": "el_elementary_nature_003"
    },
    {
        "word": "συννεφιασμένος",
        "level": "elementary",
        "theme": "nature",
        "emoji": "☁️",
        "form": "adjective",
        "feminine": "συννεφιασμένη",
        "neuter": "συννεφιασμένο",
        "plural": "συννεφιασμένοι",
        "femininePlural": "συννεφιασμένες",
        "neuterPlural": "συννεφιασμένα",
        "comparative": "πιο συννεφιασμένος",
        "superlative": "ο πιο συννεφιασμένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "συννεφιασμένος",
                "examples": []
            }
        ],
        "id": "el_elementary_nature_004"
    },
    {
        "word": "αθλητικός",
        "level": "elementary",
        "theme": "people",
        "form": "adjective",
        "emoji": "🏃",
        "feminine": "αθλητική",
        "neuter": "αθλητικό",
        "plural": "αθλητικοί",
        "femininePlural": "αθλητικές",
        "neuterPlural": "αθλητικά",
        "comparative": "πιο αθλητικός",
        "superlative": "ο πιο αθλητικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "αθλητικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_029"
    },
    {
        "word": "σε φόρμα",
        "level": "elementary",
        "theme": "sports",
        "emoji": "💪",
        "form": "adjective",
        "feminine": "σε φόρμα",
        "neuter": "σε φόρμα",
        "plural": "σε φόρμα",
        "comparative": "πιο σε φόρμα",
        "superlative": "ο πιο σε φόρμα",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "σε φόρμα",
                "examples": []
            }
        ],
        "id": "el_elementary_sports_001"
    },
    {
        "word": "υπέρβαρος",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "⚖️",
        "form": "adjective",
        "feminine": "υπέρβαρη",
        "neuter": "υπέρβαρο",
        "plural": "υπέρβαροι",
        "femininePlural": "υπέρβαρες",
        "neuterPlural": "υπέρβαρα",
        "comparative": "πιο υπέρβαρος",
        "superlative": "ο πιο υπέρβαρος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "υπέρβαρος",
                "examples": []
            }
        ],
        "id": "el_elementary_food_drink_035"
    },
    {
        "word": "βολικός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👌",
        "form": "adjective",
        "feminine": "βολική",
        "neuter": "βολικό",
        "plural": "βολικοί",
        "femininePlural": "βολικές",
        "neuterPlural": "βολικά",
        "comparative": "πιο βολικός",
        "superlative": "ο πιο βολικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "βολικός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_036"
    },
    {
        "word": "αγχωτικός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😫",
        "form": "adjective",
        "feminine": "αγχωτική",
        "neuter": "αγχωτικό",
        "plural": "αγχωτικοί",
        "femininePlural": "αγχωτικές",
        "neuterPlural": "αγχωτικά",
        "comparative": "πιο αγχωτικός",
        "superlative": "ο πιο αγχωτικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "αγχωτικός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_037"
    },
    {
        "word": "άνετος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🛋️",
        "form": "adjective",
        "feminine": "άνετη",
        "neuter": "άνετο",
        "plural": "άνετοι",
        "femininePlural": "άνετες",
        "neuterPlural": "άνετα",
        "comparative": "πιο άνετος",
        "superlative": "ο πιο άνετος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "άνετος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_038"
    },
    {
        "word": "πρακτικός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "feminine": "πρακτική",
        "neuter": "πρακτικό",
        "plural": "πρακτικοί",
        "femininePlural": "πρακτικές",
        "neuterPlural": "πρακτικά",
        "comparative": "πιο πρακτικός",
        "superlative": "ο πιο πρακτικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "πρακτικός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_039"
    },
    {
        "word": "δημοφιλής",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🌟",
        "form": "adjective",
        "feminine": "δημοφιλής",
        "neuter": "δημοφιλές",
        "plural": "δημοφιλείς",
        "femininePlural": "δημοφιλείς",
        "neuterPlural": "δημοφιλή",
        "comparative": "πιο δημοφιλής",
        "superlative": "ο πιο δημοφιλής",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "δημοφιλής",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_040"
    },
    {
        "word": "απασχολημένος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏃",
        "form": "adjective",
        "feminine": "απασχολημένη",
        "neuter": "απασχολημένο",
        "plural": "απασχολημένοι",
        "femininePlural": "απασχολημένες",
        "neuterPlural": "απασχολημένα",
        "comparative": "πιο απασχολημένος",
        "superlative": "ο πιο απασχολημένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "απασχολημένος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_048"
    },
    {
        "word": "ευέλικτος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🧘",
        "form": "adjective",
        "feminine": "ευέλικτη",
        "neuter": "ευέλικτο",
        "plural": "ευέλικτοι",
        "femininePlural": "ευέλικτες",
        "neuterPlural": "ευέλικτα",
        "comparative": "πιο ευέλικτος",
        "superlative": "ο πιο ευέλικτος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ευέλικτος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_049"
    },
    {
        "word": "οργανωμένος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📁",
        "form": "adjective",
        "feminine": "οργανωμένη",
        "neuter": "οργανωμένο",
        "plural": "οργανωμένοι",
        "femininePlural": "οργανωμένες",
        "neuterPlural": "οργανωμένα",
        "comparative": "πιο οργανωμένος",
        "superlative": "ο πιο οργανωμένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "οργανωμένος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_050"
    },
    {
        "word": "επαγγελματικός",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👔",
        "form": "adjective",
        "feminine": "επαγγελματική",
        "neuter": "επαγγελματικό",
        "plural": "επαγγελματικοί",
        "femininePlural": "επαγγελματικές",
        "neuterPlural": "επαγγελματικά",
        "comparative": "πιο επαγγελματικός",
        "superlative": "ο πιο επαγγελματικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "επαγγελματικός",
                "examples": []
            }
        ],
        "id": "el_elementary_work_051"
    },
    {
        "word": "υπεύθυνος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🛡️",
        "form": "adjective",
        "feminine": "υπεύθυνη",
        "neuter": "υπεύθυνο",
        "plural": "υπεύθυνοι",
        "femininePlural": "υπεύθυνες",
        "neuterPlural": "υπεύθυνα",
        "comparative": "πιο υπεύθυνος",
        "superlative": "ο πιο υπεύθυνος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "υπεύθυνος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_052"
    },
    {
        "word": "έμπειρος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🎓",
        "form": "adjective",
        "feminine": "έμπειρη",
        "neuter": "έμπειρο",
        "plural": "έμπειροι",
        "femininePlural": "έμπειρες",
        "neuterPlural": "έμπειρα",
        "comparative": "πιο έμπειρος",
        "superlative": "ο πιο έμπειρος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "έμπειρος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_053"
    },
    {
        "word": "ειδικευμένος",
        "level": "elementary",
        "theme": "school",
        "emoji": "✅",
        "form": "adjective",
        "feminine": "ειδικευμένη",
        "neuter": "ειδικευμένο",
        "plural": "ειδικευμένοι",
        "femininePlural": "ειδικευμένες",
        "neuterPlural": "ειδικευμένα",
        "comparative": "πιο ειδικευμένος",
        "superlative": "ο πιο ειδικευμένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ειδικευμένος",
                "examples": []
            }
        ],
        "id": "el_elementary_school_001"
    },
    {
        "word": "διαθέσιμος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🙋",
        "form": "adjective",
        "feminine": "διαθέσιμη",
        "neuter": "διαθέσιμο",
        "plural": "διαθέσιμοι",
        "femininePlural": "διαθέσιμες",
        "neuterPlural": "διαθέσιμα",
        "comparative": "πιο διαθέσιμος",
        "superlative": "ο πιο διαθέσιμος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "διαθέσιμος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_054"
    },
    {
        "word": "επιτυχημένος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏆",
        "form": "adjective",
        "feminine": "επιτυχημένη",
        "neuter": "επιτυχημένο",
        "plural": "επιτυχημένοι",
        "femininePlural": "επιτυχημένες",
        "neuterPlural": "επιτυχημένα",
        "comparative": "πιο επιτυχημένος",
        "superlative": "ο πιο επιτυχημένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "επιτυχημένος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_055"
    },
    {
        "word": "φιλόδοξος",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🚀",
        "form": "adjective",
        "feminine": "φιλόδοξη",
        "neuter": "φιλόδοξο",
        "plural": "φιλόδοξοι",
        "femininePlural": "φιλόδοξες",
        "neuterPlural": "φιλόδοξα",
        "comparative": "πιο φιλόδοξος",
        "superlative": "ο πιο φιλόδοξος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "φιλόδοξος",
                "examples": []
            }
        ],
        "id": "el_elementary_work_056"
    },
    {
        "word": "δημιουργικός",
        "level": "elementary",
        "theme": "people",
        "emoji": "🎨",
        "form": "adjective",
        "feminine": "δημιουργική",
        "neuter": "δημιουργικό",
        "plural": "δημιουργικοί",
        "femininePlural": "δημιουργικές",
        "neuterPlural": "δημιουργικά",
        "comparative": "πιο δημιουργικός",
        "superlative": "ο πιο δημιουργικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "δημιουργικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_030"
    },
    {
        "word": "παραγωγικός",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⚙️",
        "form": "adjective",
        "feminine": "παραγωγική",
        "neuter": "παραγωγικό",
        "plural": "παραγωγικοί",
        "femininePlural": "παραγωγικές",
        "neuterPlural": "παραγωγικά",
        "comparative": "πιο παραγωγικός",
        "superlative": "ο πιο παραγωγικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "παραγωγικός",
                "examples": []
            }
        ],
        "id": "el_elementary_work_057"
    },
    {
        "word": "αξιόπιστος",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "adjective",
        "feminine": "αξιόπιστη",
        "neuter": "αξιόπιστο",
        "plural": "αξιόπιστοι",
        "femininePlural": "αξιόπιστες",
        "neuterPlural": "αξιόπιστα",
        "comparative": "πιο αξιόπιστος",
        "superlative": "ο πιο αξιόπιστος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "αξιόπιστος",
                "examples": []
            }
        ],
        "id": "el_elementary_people_031"
    },
    {
        "word": "ανεξάρτητος",
        "level": "elementary",
        "theme": "people",
        "emoji": "🦅",
        "form": "adjective",
        "feminine": "ανεξάρτητη",
        "neuter": "ανεξάρτητο",
        "plural": "ανεξάρτητοι",
        "femininePlural": "ανεξάρτητες",
        "neuterPlural": "ανεξάρτητα",
        "comparative": "πιο ανεξάρτητος",
        "superlative": "ο πιο ανεξάρτητος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ανεξάρτητος",
                "examples": []
            }
        ],
        "id": "el_elementary_people_032"
    },
    {
        "word": "φθηνός",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏷️",
        "form": "adjective",
        "feminine": "φθηνή",
        "neuter": "φθηνό",
        "plural": "φθηνοί",
        "femininePlural": "φθηνές",
        "neuterPlural": "φθηνά",
        "comparative": "πιο φθηνός",
        "superlative": "ο πιο φθηνός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "φθηνός",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_007"
    },
    {
        "word": "ακριβός",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💎",
        "form": "adjective",
        "feminine": "ακριβή",
        "neuter": "ακριβό",
        "plural": "ακριβοί",
        "femininePlural": "ακριβές",
        "neuterPlural": "ακριβά",
        "comparative": "πιο ακριβός",
        "superlative": "ο πιο ακριβός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ακριβός",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_008"
    },
    {
        "word": "προσιτός",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💵",
        "form": "adjective",
        "feminine": "προσιτή",
        "neuter": "προσιτό",
        "plural": "προσιτοί",
        "femininePlural": "προσιτές",
        "neuterPlural": "προσιτά",
        "comparative": "πιο προσιτός",
        "superlative": "ο πιο προσιτός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "προσιτός",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_009"
    },
    {
        "word": "αξίζει",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💰",
        "form": "adjective",
        "feminine": "αξίζει",
        "neuter": "αξίζει",
        "plural": "αξίζουν",
        "comparative": "πιο αξίζει",
        "superlative": "ο πιο αξίζει",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "αξίζει",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_010"
    },
    {
        "word": "δωρεάν",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🎁",
        "form": "adjective",
        "feminine": "δωρεάν",
        "neuter": "δωρεάν",
        "plural": "δωρεάν",
        "comparative": "πιο δωρεάν",
        "superlative": "ο πιο δωρεάν",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "δωρεάν",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_011"
    },
    {
        "word": "αδέκαρος",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📉",
        "form": "adjective",
        "feminine": "αδέκαρη",
        "neuter": "αδέκαρο",
        "plural": "αδέκαροι",
        "femininePlural": "αδέκαρες",
        "neuterPlural": "αδέκαρα",
        "comparative": "πιο αδέκαρος",
        "superlative": "ο πιο αδέκαρος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "αδέκαρος",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_012"
    },
    {
        "word": "πλούσιος",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏦",
        "form": "adjective",
        "feminine": "πλούσιη",
        "neuter": "πλούσιο",
        "plural": "πλούσιοι",
        "femininePlural": "πλούσιες",
        "neuterPlural": "πλούσια",
        "comparative": "πιο πλούσιος",
        "superlative": "ο πιο πλούσιος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "πλούσιος",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_013"
    },
    {
        "word": "φτωχός",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏚️",
        "form": "adjective",
        "feminine": "φτωχή",
        "neuter": "φτωχό",
        "plural": "φτωχοί",
        "femininePlural": "φτωχές",
        "neuterPlural": "φτωχά",
        "comparative": "πιο φτωχός",
        "superlative": "ο πιο φτωχός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "φτωχός",
                "examples": []
            }
        ],
        "id": "el_elementary_numbers_014"
    },
    {
        "word": "υγιής",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "adjective",
        "feminine": "υγιής",
        "neuter": "υγιές",
        "plural": "υγιείς",
        "femininePlural": "υγιείς",
        "neuterPlural": "υγιή",
        "comparative": "πιο υγιής",
        "superlative": "ο πιο υγιής",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "υγιής",
                "examples": []
            }
        ],
        "id": "el_elementary_food_drink_036"
    },
    {
        "word": "ανθυγιεινός",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍔",
        "form": "adjective",
        "feminine": "ανθυγιεινή",
        "neuter": "ανθυγιεινό",
        "plural": "ανθυγιεινοί",
        "femininePlural": "ανθυγιεινές",
        "neuterPlural": "ανθυγιεινά",
        "comparative": "πιο ανθυγιεινός",
        "superlative": "ο πιο ανθυγιεινός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ανθυγιεινός",
                "examples": []
            }
        ],
        "id": "el_elementary_food_drink_037"
    },
    {
        "word": "άρρωστος",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🤒",
        "form": "adjective",
        "feminine": "άρρωστη",
        "neuter": "άρρωστο",
        "plural": "άρρωστοι",
        "femininePlural": "άρρωστες",
        "neuterPlural": "άρρωστα",
        "comparative": "πιο άρρωστος",
        "superlative": "ο πιο άρρωστος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "άρρωστος",
                "examples": []
            }
        ],
        "id": "el_elementary_food_drink_038"
    },
    {
        "word": "άρρωστος",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🤢",
        "form": "adjective",
        "feminine": "άρρωστη",
        "neuter": "άρρωστο",
        "plural": "άρρωστοι",
        "femininePlural": "άρρωστες",
        "neuterPlural": "άρρωστα",
        "comparative": "πιο άρρωστος",
        "superlative": "ο πιο άρρωστος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "άρρωστος",
                "examples": []
            }
        ],
        "id": "el_elementary_food_drink_039"
    },
    {
        "word": "κουρασμένος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😴",
        "form": "adjective",
        "feminine": "κουρασμένη",
        "neuter": "κουρασμένο",
        "plural": "κουρασμένοι",
        "femininePlural": "κουρασμένες",
        "neuterPlural": "κουρασμένα",
        "comparative": "πιο κουρασμένος",
        "superlative": "ο πιο κουρασμένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "κουρασμένος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_041"
    },
    {
        "word": "αγχωμένος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😫",
        "form": "adjective",
        "feminine": "αγχωμένη",
        "neuter": "αγχωμένο",
        "plural": "αγχωμένοι",
        "femininePlural": "αγχωμένες",
        "neuterPlural": "αγχωμένα",
        "comparative": "πιο αγχωμένος",
        "superlative": "ο πιο αγχωμένος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "αγχωμένος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_042"
    },
    {
        "word": "φιλικός",
        "level": "elementary",
        "theme": "people",
        "emoji": "👋",
        "form": "adjective",
        "feminine": "φιλική",
        "neuter": "φιλικό",
        "plural": "φιλικοί",
        "femininePlural": "φιλικές",
        "neuterPlural": "φιλικά",
        "comparative": "πιο φιλικός",
        "superlative": "ο πιο φιλικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "φιλικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_033"
    },
    {
        "word": "ευγενικός",
        "level": "elementary",
        "theme": "people",
        "emoji": "❤️",
        "form": "adjective",
        "feminine": "ευγενική",
        "neuter": "ευγενικό",
        "plural": "ευγενικοί",
        "femininePlural": "ευγενικές",
        "neuterPlural": "ευγενικά",
        "comparative": "πιο ευγενικός",
        "superlative": "ο πιο ευγενικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ευγενικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_034"
    },
    {
        "word": "ειλικρινής",
        "level": "elementary",
        "theme": "people",
        "emoji": "⚖️",
        "form": "adjective",
        "feminine": "ειλικρινής",
        "neuter": "ειλικρινές",
        "plural": "ειλικρινείς",
        "femininePlural": "ειλικρινείς",
        "neuterPlural": "ειλικρινή",
        "comparative": "πιο ειλικρινής",
        "superlative": "ο πιο ειλικρινής",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ειλικρινής",
                "examples": []
            }
        ],
        "id": "el_elementary_people_035"
    },
    {
        "word": "υπομονετικός",
        "level": "elementary",
        "theme": "people",
        "emoji": "⏳",
        "form": "adjective",
        "feminine": "υπομονετική",
        "neuter": "υπομονετικό",
        "plural": "υπομονετικοί",
        "femininePlural": "υπομονετικές",
        "neuterPlural": "υπομονετικά",
        "comparative": "πιο υπομονετικός",
        "superlative": "ο πιο υπομονετικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "υπομονετικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_036"
    },
    {
        "word": "ευγενικός",
        "level": "elementary",
        "theme": "people",
        "emoji": "🙇",
        "form": "adjective",
        "feminine": "ευγενική",
        "neuter": "ευγενικό",
        "plural": "ευγενικοί",
        "femininePlural": "ευγενικές",
        "neuterPlural": "ευγενικά",
        "comparative": "πιο ευγενικός",
        "superlative": "ο πιο ευγενικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ευγενικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_037"
    },
    {
        "word": "υποστηρικτικός",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤝",
        "form": "adjective",
        "feminine": "υποστηρικτική",
        "neuter": "υποστηρικτικό",
        "plural": "υποστηρικτικοί",
        "femininePlural": "υποστηρικτικές",
        "neuterPlural": "υποστηρικτικά",
        "comparative": "πιο υποστηρικτικός",
        "superlative": "ο πιο υποστηρικτικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "υποστηρικτικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_038"
    },
    {
        "word": "σίγουρος",
        "level": "elementary",
        "theme": "people",
        "emoji": "✨",
        "form": "adjective",
        "feminine": "σίγουρη",
        "neuter": "σίγουρο",
        "plural": "σίγουροι",
        "femininePlural": "σίγουρες",
        "neuterPlural": "σίγουρα",
        "comparative": "πιο σίγουρος",
        "superlative": "ο πιο σίγουρος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "σίγουρος",
                "examples": []
            }
        ],
        "id": "el_elementary_people_039"
    },
    {
        "word": "κοινωνικός",
        "level": "elementary",
        "theme": "people",
        "emoji": "🗣️",
        "form": "adjective",
        "feminine": "κοινωνική",
        "neuter": "κοινωνικό",
        "plural": "κοινωνικοί",
        "femininePlural": "κοινωνικές",
        "neuterPlural": "κοινωνικά",
        "comparative": "πιο κοινωνικός",
        "superlative": "ο πιο κοινωνικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "κοινωνικός",
                "examples": []
            }
        ],
        "id": "el_elementary_people_040"
    },
    {
        "word": "μοντέρνος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏙️",
        "form": "adjective",
        "feminine": "μοντέρνη",
        "neuter": "μοντέρνο",
        "plural": "μοντέρνοι",
        "femininePlural": "μοντέρνες",
        "neuterPlural": "μοντέρνα",
        "comparative": "πιο μοντέρνος",
        "superlative": "ο πιο μοντέρνος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "μοντέρνος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_043"
    },
    {
        "word": "παραδοσιακός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏛️",
        "form": "adjective",
        "feminine": "παραδοσιακή",
        "neuter": "παραδοσιακό",
        "plural": "παραδοσιακοί",
        "femininePlural": "παραδοσιακές",
        "neuterPlural": "παραδοσιακά",
        "comparative": "πιο παραδοσιακός",
        "superlative": "ο πιο παραδοσιακός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "παραδοσιακός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_044"
    },
    {
        "word": "τοπικός",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "📍",
        "form": "adjective",
        "feminine": "τοπική",
        "neuter": "τοπικό",
        "plural": "τοπικοί",
        "femininePlural": "τοπικές",
        "neuterPlural": "τοπικά",
        "comparative": "πιο τοπικός",
        "superlative": "ο πιο τοπικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "τοπικός",
                "examples": []
            }
        ],
        "id": "el_elementary_places_027"
    },
    {
        "word": "διεθνής",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🌎",
        "form": "adjective",
        "feminine": "διεθνής",
        "neuter": "διεθνές",
        "plural": "διεθνείς",
        "femininePlural": "διεθνείς",
        "neuterPlural": "διεθνή",
        "comparative": "πιο διεθνής",
        "superlative": "ο πιο διεθνής",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "διεθνής",
                "examples": []
            }
        ],
        "id": "el_elementary_work_058"
    },
    {
        "word": "ενδιαφέρων",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "adjective",
        "feminine": "ενδιαφέρουσα",
        "neuter": "ενδιαφέρον",
        "plural": "ενδιαφέροντες",
        "femininePlural": "ενδιαφέρουσες",
        "neuterPlural": "ενδιαφέροντα",
        "comparative": "πιο ενδιαφέρων",
        "superlative": "ο πιο ενδιαφέρων",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "ενδιαφέρων",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_045"
    },
    {
        "word": "βαρετός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💤",
        "form": "adjective",
        "feminine": "βαρετή",
        "neuter": "βαρετό",
        "plural": "βαρετοί",
        "femininePlural": "βαρετές",
        "neuterPlural": "βαρετά",
        "comparative": "πιο βαρετός",
        "superlative": "ο πιο βαρετός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "βαρετός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_046"
    },
    {
        "word": "παράξενος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "❓",
        "form": "adjective",
        "feminine": "παράξενη",
        "neuter": "παράξενο",
        "plural": "παράξενοι",
        "femininePlural": "παράξενες",
        "neuterPlural": "παράξενα",
        "comparative": "πιο παράξενος",
        "superlative": "ο πιο παράξενος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "παράξενος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_047"
    },
    {
        "word": "κανονικός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "feminine": "κανονική",
        "neuter": "κανονικό",
        "plural": "κανονικοί",
        "femininePlural": "κανονικές",
        "neuterPlural": "κανονικά",
        "comparative": "πιο κανονικός",
        "superlative": "ο πιο κανονικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "κανονικός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_048"
    },
    {
        "word": "τυπικός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔄",
        "form": "adjective",
        "feminine": "τυπική",
        "neuter": "τυπικό",
        "plural": "τυπικοί",
        "femininePlural": "τυπικές",
        "neuterPlural": "τυπικά",
        "comparative": "πιο τυπικός",
        "superlative": "ο πιο τυπικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "τυπικός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_049"
    },
    {
        "word": "κοινός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📍",
        "form": "adjective",
        "feminine": "κοινή",
        "neuter": "κοινό",
        "plural": "κοινοί",
        "femininePlural": "κοινές",
        "neuterPlural": "κοινά",
        "comparative": "πιο κοινός",
        "superlative": "ο πιο κοινός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "κοινός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_050"
    },
    {
        "word": "σπάνιος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💎",
        "form": "adjective",
        "feminine": "σπάνιη",
        "neuter": "σπάνιο",
        "plural": "σπάνιοι",
        "femininePlural": "σπάνιες",
        "neuterPlural": "σπάνια",
        "comparative": "πιο σπάνιος",
        "superlative": "ο πιο σπάνιος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "σπάνιος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_051"
    },
    {
        "word": "σίγουρος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🎯",
        "form": "adjective",
        "feminine": "σίγουρη",
        "neuter": "σίγουρο",
        "plural": "σίγουροι",
        "femininePlural": "σίγουρες",
        "neuterPlural": "σίγουρα",
        "comparative": "πιο σίγουρος",
        "superlative": "ο πιο σίγουρος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "σίγουρος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_052"
    },
    {
        "word": "καθαρός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔍",
        "form": "adjective",
        "feminine": "καθαρή",
        "neuter": "καθαρό",
        "plural": "καθαροί",
        "femininePlural": "καθαρές",
        "neuterPlural": "καθαρά",
        "comparative": "πιο καθαρός",
        "superlative": "ο πιο καθαρός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "καθαρός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_053"
    },
    {
        "word": "δύσκολος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🧩",
        "form": "adjective",
        "feminine": "δύσκολη",
        "neuter": "δύσκολο",
        "plural": "δύσκολοι",
        "femininePlural": "δύσκολες",
        "neuterPlural": "δύσκολα",
        "comparative": "πιο δύσκολος",
        "superlative": "ο πιο δύσκολος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "δύσκολος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_054"
    },
    {
        "word": "απλός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "adjective",
        "feminine": "απλή",
        "neuter": "απλό",
        "plural": "απλοί",
        "femininePlural": "απλές",
        "neuterPlural": "απλά",
        "comparative": "πιο απλός",
        "superlative": "ο πιο απλός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "απλός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_055"
    },
    {
        "word": "περίπλοκος",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🕸️",
        "form": "adjective",
        "feminine": "περίπλοκη",
        "neuter": "περίπλοκο",
        "plural": "περίπλοκοι",
        "femininePlural": "περίπλοκες",
        "neuterPlural": "περίπλοκα",
        "comparative": "πιο περίπλοκος",
        "superlative": "ο πιο περίπλοκος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "περίπλοκος",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_056"
    },
    {
        "word": "σοβαρός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👔",
        "form": "adjective",
        "feminine": "σοβαρή",
        "neuter": "σοβαρό",
        "plural": "σοβαροί",
        "femininePlural": "σοβαρές",
        "neuterPlural": "σοβαρά",
        "comparative": "πιο σοβαρός",
        "superlative": "ο πιο σοβαρός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "σοβαρός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_057"
    },
    {
        "word": "αστείος",
        "level": "elementary",
        "theme": "people",
        "emoji": "😂",
        "form": "adjective",
        "feminine": "αστείη",
        "neuter": "αστείο",
        "plural": "αστείοι",
        "femininePlural": "αστείες",
        "neuterPlural": "αστεία",
        "comparative": "πιο αστείος",
        "superlative": "ο πιο αστείος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "αστείος",
                "examples": []
            }
        ],
        "id": "el_elementary_people_041"
    },
    {
        "word": "άμεσος",
        "level": "elementary",
        "theme": "people",
        "emoji": "➡️",
        "form": "adjective",
        "feminine": "άμεση",
        "neuter": "άμεσο",
        "plural": "άμεσοι",
        "femininePlural": "άμεσες",
        "neuterPlural": "άμεσα",
        "comparative": "πιο άμεσος",
        "superlative": "ο πιο άμεσος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "άμεσος",
                "examples": []
            }
        ],
        "id": "el_elementary_people_042"
    },
    {
        "word": "καθημερινός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📅",
        "form": "adjective",
        "feminine": "καθημερινή",
        "neuter": "καθημερινό",
        "plural": "καθημερινοί",
        "femininePlural": "καθημερινές",
        "neuterPlural": "καθημερινά",
        "comparative": "πιο καθημερινός",
        "superlative": "ο πιο καθημερινός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "καθημερινός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_058"
    },
    {
        "word": "τακτικός",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔁",
        "form": "adjective",
        "feminine": "τακτική",
        "neuter": "τακτικό",
        "plural": "τακτικοί",
        "femininePlural": "τακτικές",
        "neuterPlural": "τακτικά",
        "comparative": "πιο τακτικός",
        "superlative": "ο πιο τακτικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "τακτικός",
                "examples": []
            }
        ],
        "id": "el_elementary_describing_059"
    },
    {
        "word": "πρόσφατος",
        "level": "elementary",
        "theme": "time",
        "emoji": "🕒",
        "form": "adjective",
        "feminine": "πρόσφατη",
        "neuter": "πρόσφατο",
        "plural": "πρόσφατοι",
        "femininePlural": "πρόσφατες",
        "neuterPlural": "πρόσφατα",
        "comparative": "πιο πρόσφατος",
        "superlative": "ο πιο πρόσφατος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "πρόσφατος",
                "examples": []
            }
        ],
        "id": "el_elementary_time_001"
    },
    {
        "word": "τρέχων",
        "level": "elementary",
        "theme": "time",
        "emoji": "📍",
        "form": "adjective",
        "feminine": "τρέχουσα",
        "neuter": "τρέχον",
        "plural": "τρέχοντες",
        "femininePlural": "τρέχουσες",
        "neuterPlural": "τρέχοντα",
        "comparative": "πιο τρέχων",
        "superlative": "ο πιο τρέχων",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "τρέχων",
                "examples": []
            }
        ],
        "id": "el_elementary_time_002"
    },
    {
        "word": "μελλοντικός",
        "level": "elementary",
        "theme": "time",
        "emoji": "🔮",
        "form": "adjective",
        "feminine": "μελλοντική",
        "neuter": "μελλοντικό",
        "plural": "μελλοντικοί",
        "femininePlural": "μελλοντικές",
        "neuterPlural": "μελλοντικά",
        "comparative": "πιο μελλοντικός",
        "superlative": "ο πιο μελλοντικός",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "μελλοντικός",
                "examples": []
            }
        ],
        "id": "el_elementary_time_003"
    },
    {
        "word": "προηγούμενος",
        "level": "elementary",
        "theme": "time",
        "emoji": "⬅️",
        "form": "adjective",
        "feminine": "προηγούμενη",
        "neuter": "προηγούμενο",
        "plural": "προηγούμενοι",
        "femininePlural": "προηγούμενες",
        "neuterPlural": "προηγούμενα",
        "comparative": "πιο προηγούμενος",
        "superlative": "ο πιο προηγούμενος",
        "lang": "el",
        "transcription": "",
        "definitions": [
            {
                "text": "προηγούμενος",
                "examples": []
            }
        ],
        "id": "el_elementary_time_004"
    }
];
})();
(function() {
    const data = [
    {
        "word": "μηχανικός",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👷",
        "form": "noun",
        "plural": "μηχανικός",
        "definitions": [
            {
                "text": "Ένα άτομο που σχεδιάζει ή κατασκευάζει μηχανές, κινητήρες ή δομές.",
                "examples": [
                    "Ο μηχανικός εργάζεται σε μια νέα γέφυρα.",
                    "Θέλει να γίνει πολιτικός μηχανικός."
                ]
            },
            {
                "text": "Αυτό το άτομο εργάζεται συχνά σε γραφείο ή σε εργοτάξιο.",
                "examples": [
                    "Οι μηχανικοί χρησιμοποιούν υπολογιστές για το σχεδιασμό."
                ]
            }
        ]
    },
    {
        "word": "πιλότος",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "πιλότοι",
        "definitions": [
            {
                "text": "Ένα άτομο που πετάει αεροπλάνο ή ελικόπτερο.",
                "examples": [
                    "Ο πιλότος είναι στο πιλοτήριο.",
                    "Θέλει να γίνει πιλότος."
                ]
            },
            {
                "text": "Αυτό το άτομο εργάζεται στον ουρανό και στο αεροδρόμιο.",
                "examples": [
                    "Οι πιλότοι φορούν στολή."
                ]
            }
        ]
    },
    {
        "word": "σουβλάκι",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "σουβλάκια",
        "definitions": [
            {
                "text": "Κομμάτια κρέατος ψημένα σε μικρή σούβλα.",
                "examples": [
                    "Παρήγγειλα δύο σουβλάκια με πίτα.",
                    "Το σουβλάκι είναι το αγαπημένο μου γρήγορο φαγητό."
                ]
            },
            {
                "text": "Αυτό το φαγητό είναι το πιο διάσημο ελληνικό 'street food'.",
                "examples": [
                    "Τρώμε σουβλάκι με τζατζίκι."
                ]
            }
        ]
    },
    {
        "word": "ούζο",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "ούζα",
        "definitions": [
            {
                "text": "Ένα παραδοσιακό ελληνικό αλκοολούχο ποτό με γεύση γλυκάνισου.",
                "examples": [
                    "Πίνουμε ούζο με μεζέδες.",
                    "Το ούζο γίνεται άσπρο με το νερό."
                ]
            },
            {
                "text": "Είναι το πιο χαρακτηριστικό ποτό της Ελλάδας.",
                "examples": [
                    "Το ούζο πίνεται συνήθως δίπλα στη θάλασσα."
                ]
            }
        ]
    },
    {
        "word": "βιβλιοθήκη",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "📚",
        "form": "noun",
        "plural": "βιβλιοθήκες",
        "definitions": [
            {
                "text": "Ένα μέρος με πολλά βιβλία που μπορείτε να διαβάσετε ή να δανειστείτε.",
                "examples": [
                    "Διαβάζω στη βιβλιοθήκη του πανεπιστημίου.",
                    "Η δημοτική βιβλιοθήκη είναι μεγάλη."
                ]
            },
            {
                "text": "Αυτό είναι ένα ήσυχο μέρος για μελέτη.",
                "examples": [
                    "Πρέπει να κάνουμε ησυχία στη βιβλιοθήκη."
                ]
            }
        ]
    },
    {
        "word": "αεροδρόμιο",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "emoji": "✈️",
        "form": "noun",
        "plural": "αεροδρόμια",
        "definitions": [
            {
                "text": "Ένα μέρος όπου τα αεροπλάνα προσγειώνονται και απογειώνονται.",
                "examples": [
                    "Πηγαίνω στο αεροδρόμιο για το ταξίδι μου.",
                    "Το αεροδρόμιο είναι πολύ μεγάλο."
                ]
            },
            {
                "text": "Είναι το μέρος από όπου παίρνετε το αεροπλάνο.",
                "examples": [
                    "Πρέπει να είμαστε στο αεροδρόμιο δύο ώρες νωρίτερα."
                ]
            }
        ]
    },
    {
        "word": "ντουλάπα",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "👗",
        "form": "noun",
        "plural": "ντουλάπες"
    },
    {
        "word": "αδύνατος",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "noun",
        "plural": "αδύνατοι"
    },
    {
        "word": "ελέφαντας",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐘",
        "form": "noun",
        "plural": "ελέφαντες"
    },
    {
        "word": "μαϊμού",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🐒",
        "form": "noun",
        "plural": "μαϊμούδες"
    },
    {
        "word": "ζεστός",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🔥",
        "form": "noun",
        "plural": "ζεστός"
    },
    {
        "word": "προγραμματιστής",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "προγραμματιστής"
    },
    {
        "word": "συνάδελφος",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👥",
        "form": "noun",
        "plural": "συνάδελφοι"
    },
    {
        "word": "τηλεργασία",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "noun",
        "plural": "τηλεργασίες"
    },
    {
        "word": "παγκόσμια θέρμανση",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌡️",
        "form": "noun",
        "plural": "παγκόσμια θέρμανσες"
    },
    {
        "word": "ψυχική υγεία",
        "level": "intermediate",
        "theme": "mental_health_B1",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "Η κατάσταση της συναισθηματικής και ψυχολογικής ευεξίας.",
                "examples": [
                    "Η ψυχική υγεία είναι εξίσου σημαντική με τη σωματική.",
                    "Πρέπει να φροντίζουμε την ψυχική μας υγεία."
                ]
            }
        ]
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

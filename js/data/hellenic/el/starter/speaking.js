(function() {
    const speakingData = {
    "el": {
        "opinionArena": [
            {
                "text": "Είναι το πρωινό το πιο σημαντικό γεύμα;",
                "level": "baby",
                "theme": "basic_foods_A0"
            },
            {
                "text": "Είναι οι σκύλοι καλύτερα κατοικίδια από τις γάτες;",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "Καφές εναντίον τσαγιού — ποιο είναι το καλύτερο πρωινό ρόφημα;",
                "sideA": "Καφές",
                "sideB": "Τσάι",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εστιατόριο εναντίον σπιτικού φαγητού — τι είναι καλύτερο;",
                "sideA": "Εστιατόριο",
                "sideB": "Σπιτικό φαγητό",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον καθόλου πρωινού — τι είναι καλύτερο για εσάς;",
                "sideA": "Πρωινό",
                "sideB": "Καθόλου",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Νερό εναντίον χυμού — τι είναι πιο υγιεινό;",
                "sideA": "Νερό",
                "sideB": "Χυμός",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κρέας εναντίον λαχανικών — τι είναι πιο σημαντικό σε ένα γεύμα;",
                "sideA": "Κρέας",
                "sideB": "Λαχανικά",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπίτι εναντίον διαμερίσματος — πού είναι καλύτερα να ζεις;",
                "sideA": "Σπίτι",
                "sideB": "Διαμέρισμα",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πόλη εναντίον χωριού — ποιο είναι το καλύτερο μέρος για να ζεις;",
                "sideA": "Πόλη",
                "sideB": "Χωριό",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μετρητά εναντίον κάρτας — με τι είναι καλύτερο να πληρώνεις;",
                "sideA": "Μετρητά",
                "sideB": "Κάρτα",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποταμίευση χρημάτων εναντίον ξοδέματος χρημάτων — τι είναι καλύτερο;",
                "sideA": "Αποταμίευση",
                "sideB": "Ξόδεμα",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ενοικίαση εναντίον αγοράς — τι είναι καλύτερο;",
                "sideA": "Ενοικίαση",
                "sideB": "Αγορά",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινή εργασία εναντίον βραδινής εργασίας — τι είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυτοκίνητο εναντίον λεωφορείου — τι είναι καλύτερο για να πας στη δουλειά;",
                "sideA": "Αυτοκίνητο",
                "sideB": "Λεωφορείο",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περπάτημα εναντίον οδήγησης — τι είναι καλύτερο στην πόλη;",
                "sideA": "Περπάτημα",
                "sideB": "Οδήγηση",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γραφείο εναντίον σπιτιού — ποιο είναι το καλύτερο μέρος για εργασία;",
                "sideA": "Γραφείο",
                "sideB": "Σπίτι",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινός τύπος εναντίον βραδινού τύπου — τι είναι καλύτερο;",
                "sideA": "Πρωινός",
                "sideB": "Βραδινός",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καλοκαίρι εναντίον χειμώνα — ποια εποχή είναι καλύτερη;",
                "sideA": "Καλοκαίρι",
                "sideB": "Χειμώνας",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομες διακοπές εναντίον μεγάλων διακοπών — τι είναι καλύτερο;",
                "sideA": "Σύντομες",
                "sideB": "Μεγάλες",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τηλεφώνημα εναντίον μηνύματος — τι είναι καλύτερο;",
                "sideA": "Τηλεφώνημα",
                "sideB": "Μήνυμα",
                "level": "starter",
                "theme": "basic_technology_devices_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ντους το πρωί εναντίον ντους το βράδυ — ποιο είναι το σωστό;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δευτέρα εναντίον Παρασκευής — ποια μέρα είναι καλύτερη;",
                "sideA": "Δευτέρα",
                "sideB": "Παρασκευή",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πολύ ζέστη εναντίον πολύ κρύου — τι είναι χειρότερο;",
                "sideA": "Ζέστη",
                "sideB": "Κρύο",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Θέση στο παράθυρο εναντίον θέση στο διάδρομο — τι είναι καλύτερο στο αεροπλάνο;",
                "sideA": "Παράθυρο",
                "sideB": "Διάδρομος",
                "level": "starter",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κόκκινο εναντίον Μπλε — ποιο χρώμα είναι καλύτερο;",
                "sideA": "Κόκκινο",
                "sideB": "Μπλε",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κίτρινο εναντίον Πράσινου — ποιο χρώμα είναι πιο χαρούμενο;",
                "sideA": "Κίτρινο",
                "sideB": "Πράσινο",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαύρο εναντίον Λευκού — ποιο χρώμα προτιμάτε;",
                "sideA": "Μαύρο",
                "sideB": "Λευκό",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ροζ εναντίον Μοβ — ποιο χρώμα είναι πιο ωραίο;",
                "sideA": "Ροζ",
                "sideB": "Μοβ",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κύκλος εναντίον Τετραγώνου — ποιο σχήμα είναι πιο χρήσιμο;",
                "sideA": "Κύκλος",
                "sideB": "Τετράγωνο",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλοι εναντίον Μικρών αριθμών — ποιοι είναι πιο διασκεδαστικοί;",
                "sideA": "Μεγάλοι",
                "sideB": "Μικροί",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρίγωνο εναντίον Ορθογωνίου — ποιο σχήμα είναι καλύτερο;",
                "sideA": "Τρίγωνο",
                "sideB": "Ορθογώνιο",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μπάλα εναντίον Κούκλας — ποιο παιχνίδι είναι καλύτερο;",
                "sideA": "Μπάλα",
                "sideB": "Κούκλα",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μολύβι εναντίον Στυλό — με ποιο είναι καλύτερο να γράφεις;",
                "sideA": "Μολύβι",
                "sideB": "Στυλό",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βιβλίο εναντίον Εικόνας — από ποιο είναι καλύτερο να μαθαίνεις;",
                "sideA": "Βιβλίο",
                "sideB": "Εικόνα",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καρέκλα εναντίον Πατώματος — πού είναι καλύτερα να κάθεσαι;",
                "sideA": "Καρέκλα",
                "sideB": "Πάτωμα",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτα εναντίον Σκύλου — ποιο ζώο είναι καλύτερο;",
                "sideA": "Γάτα",
                "sideB": "Σκύλος",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψάρι εναντίον Πουλιού — ποιο είναι καλύτερο κατοικίδιο;",
                "sideA": "Ψάρι",
                "sideB": "Πουλί",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλα εναντίον Μικρών ζώων — ποια είναι πιο συμπαθητικά;",
                "sideA": "Μεγάλα",
                "sideB": "Μικρά",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κουνέλι εναντίον Χάμστερ — ποιο είναι πιο χαριτωμένο;",
                "sideA": "Κουνέλι",
                "sideB": "Χάμστερ",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Νερό εναντίον Χυμού — ποιο είναι καλύτερο να πίνεις;",
                "sideA": "Νερό",
                "sideB": "Χυμός",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μήλο εναντίον Μπανάνας — ποιο φρούτο είναι καλύτερο;",
                "sideA": "Μήλο",
                "sideB": "Μπανάνα",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψωμί εναντίον Ρυζιού — ποιο είναι καλύτερο να τρως;",
                "sideA": "Ψωμί",
                "sideB": "Ρύζι",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάλα εναντίον Νερού — ποιο προτιμάτε;",
                "sideA": "Γάλα",
                "sideB": "Νερό",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ροζ εναντίον Πορτοκαλί — ποιο χρώμα είναι πιο ωραίο;",
                "sideA": "Ροζ",
                "sideB": "Πορτοκαλί",
                "level": "starter",
                "theme": "colours_patterns_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ο αριθμός 1 εναντίον του αριθμού 10 — ποιος αριθμός είναι καλύτερος;",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_0_9_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καρέκλα εναντίον καναπέ — ποιο είναι πιο άνετο;",
                "sideA": "Καρέκλα",
                "sideB": "Καναπές",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τσάντα εναντίον κουτιού — ποιο είναι πιο χρήσιμο;",
                "sideA": "Τσάντα",
                "sideB": "Κουτί",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Λιοντάρι εναντίον ελέφαντα — ποιο ζώο είναι καλύτερο;",
                "sideA": "Λιοντάρι",
                "sideB": "Ελέφαντας",
                "level": "starter",
                "theme": "animals_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σοκολάτα εναντίον γλυκών — ποιο είναι καλύτερο;",
                "sideA": "Σοκολάτα",
                "sideB": "Γλυκά",
                "level": "starter",
                "theme": "basic_foods_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κουτάλι εναντίον πιρουνιού — ποιο είναι καλύτερο;",
                "sideA": "Κουτάλι",
                "sideB": "Πιρούνι",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καπέλο εναντίον παπουτσιών — ποιο είναι πιο σημαντικό;",
                "sideA": "Καπέλο",
                "sideB": "Παπούτσια",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ήλιος εναντίον φεγγαριού — ποιο είναι καλύτερο;",
                "sideA": "Ήλιος",
                "sideB": "Φεγγάρι",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κάλτσες εναντίον χωρίς κάλτσες — ποιο είναι πιο ωραίο;",
                "sideA": "Κάλτσες",
                "sideB": "Χωρίς κάλτσες",
                "level": "starter",
                "theme": "furniture_objects_A0",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Η αγαπημένη μου ανάμνηση από την παιδική ηλικία",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "Η δουλειά των ονείρων μου και γιατί",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["el"]) window.speakingData["el"] = {};

    for (const cat in speakingData["el"]) {
        if (!window.speakingData["el"][cat]) window.speakingData["el"][cat] = [];
        window.speakingData["el"][cat].push(...speakingData["el"][cat]);
    }
})();

(function() {
    const speakingData = {
    "el": {
        "opinionArena": [
            {
                "text": "Καταστρέφουν τα κοινωνικά δίκτυα τις κοινωνικές μας δεξιότητες;",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Πρέπει οι δημόσιες συγκοινωνίες να είναι δωρεάν;",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Η μόνη σταθερά είναι η αλλαγή.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [
            {
                "topic": "Η τετραήμερη εβδομάδα εργασίας εναντίον της πενταήμερης — ποιο μοντέλο ωφελεί περισσότερο εργαζόμενους και εργοδότες;",
                "sideA": "4 ημέρες",
                "sideB": "5 ημέρες",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καθολικό βασικό εισόδημα εναντίον στοχευμένης πρόνοιας — ποιο είναι το πιο αποτελεσματικό δίχτυ ασφαλείας για τους εργαζόμενους ενήλικες;",
                "sideA": "Καθολικό εισόδημα",
                "sideB": "Στοχευμένη πρόνοια",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Η οικονομία της πλατφόρμας (gig economy) εναντίον της μόνιμης απασχόλησης — ποιο μοντέλο εξυπηρετεί καλύτερα τους εργαζόμενους μακροπρόθεσμα;",
                "sideA": "Gig economy",
                "sideB": "Μόνιμη απασχόληση",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αξιοκρατία εναντίον δομικού πλεονεκτήματος — τι εξηγεί με μεγαλύτερη ακρίβεια την επαγγελματική επιτυχία;",
                "sideA": "Αξιοκρατία",
                "sideB": "Δομικό πλεονέκτημα",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαφάνεια στους μισθούς εναντίον απορρήτου — τι δημιουργεί έναν δικαιότερο χώρο εργασίας;",
                "sideA": "Διαφάνεια",
                "sideB": "Απόρρητο",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυτοματοποίηση εναντίον ανθρώπινης εργασίας — ποια είναι η μεγαλύτερη μακροπρόθεσμη απειλή για την απασχόληση των ενηλίκων;",
                "sideA": "Αυτοματοποίηση",
                "sideB": "Ανθρώπινη εργασία",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εξ αποστάσεως εργασία εναντίον παρουσίας στο γραφείο — τι είναι καλύτερο για την εξέλιξη της καριέρας και την κουλτούρα της ομάδας;",
                "sideA": "Εξ αποστάσεως",
                "sideB": "Γραφείο",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ίση γονική άδεια για άνδρες και γυναίκες εναντίον μεγαλύτερης άδειας μητρότητας — ποια πολιτική είναι δικαιότερη;",
                "sideA": "Ίση άδεια",
                "sideB": "Μεγαλύτερη μητρότητας",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Η επιλογή να μην έχει κανείς παιδιά εναντίον της κοινωνικής πίεσης για οικογένεια — τι αξίζει περισσότερο σεβασμό;",
                "sideA": "Χωρίς παιδιά",
                "sideB": "Κοινωνική πίεση",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ο γάμος ως θεσμός εναντίον της συμβίωσης χωρίς γάμο — τι είναι πιο σχετικό σήμερα;",
                "sideA": "Γάμος",
                "sideB": "Συμβίωση",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Νοικοκυριά με δύο εισοδήματα εναντίον ενός συντρόφου που μένει στο σπίτι — ποιο μοντέλο είναι καλύτερο για παιδιά και ενήλικες;",
                "sideA": "Δύο εισοδήματα",
                "sideB": "Ένας στο σπίτι",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το μισθολογικό χάσμα μεταξύ των φύλων ως δομικό πρόβλημα εναντίον ζητήματος ατομικών επιλογών — ποια εξήγηση έχει μεγαλύτερη βαρύτητα;",
                "sideA": "Δομικό πρόβλημα",
                "sideB": "Ατομικές επιλογές",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Η ιδιοκτησία σπιτιού ως στόχος εναντίον μιας επαγγελματικής αγοράς ενοικίασης — ποιο μοντέλο στέγασης ταιριάζει καλύτερα στους σύγχρονους ενήλικες;",
                "sideA": "Ιδιοκτησία",
                "sideB": "Αγορά ενοικίασης",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ο εξευγενισμός (gentrification) ως βελτίωση εναντίον του εξευγενισμού ως εκτοπισμός — ποια προσέγγιση είναι πιο ειλικρινής;",
                "sideA": "Βελτίωση",
                "sideB": "Εκτοπισμός",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αστική πυκνότητα εναντίον προαστιακής εξάπλωσης — ποιο είναι το καλύτερο μοντέλο για βιώσιμες πόλεις;",
                "sideA": "Αστική πυκνότητα",
                "sideB": "Προαστιακή εξάπλωση",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή κοντά στην οικογένεια εναντίον μετακόμισης για ευκαιρίες — ποια επιλογή παράγει καλύτερη μακροπρόθεσμη ευημερία;",
                "sideA": "Κοντά στην οικογένεια",
                "sideB": "Μετακόμιση",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ένας γηράσκων πληθυσμός ως κρίση εναντίον ως πόρος — ποιο πλαίσιο είναι πιο παραγωγικό;",
                "sideA": "Κρίση",
                "sideB": "Πόρος",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Προσωπική ευθύνη για την υγεία εναντίον συστημικών παραγόντων — τι έχει μεγαλύτερη βαρύτητα στην εξήγηση των αποτελεσμάτων υγείας;",
                "sideA": "Προσωπική ευθύνη",
                "sideB": "Συστημικοί παράγοντες",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ημέρες ψυχικής υγείας ως νόμιμο δικαίωμα στον χώρο εργασίας εναντίον πηγής κατάχρησης — πού πρέπει οι εργοδότες να θέσουν το όριο;",
                "sideA": "Νόμιμο δικαίωμα",
                "sideB": "Πηγή κατάχρησης",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Προληπτική ιατρική εναντίον θεραπευτικής ιατρικής — ποια πρέπει να λαμβάνει περισσότερη δημόσια χρηματοδότηση;",
                "sideA": "Προληπτική",
                "sideB": "Θεραπευτική",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αντιγηραντική ιατρική εναντίον αξιοπρεπούς γήρανσης — ποια στάση είναι πιο συνεκτική;",
                "sideA": "Αντιγήρανση",
                "sideB": "Αξιοπρεπής γήρανση",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τεχνολογία επιτήρησης για τη δημόσια ασφάλεια εναντίον του δικαιώματος στην ιδιωτικότητα — πού πρέπει να βρίσκεται η ισορροπία;",
                "sideA": "Δημόσια ασφάλεια",
                "sideB": "Ιδιωτικότητα",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τα μέσα κοινωνικής δικτύωσης ως εργαλείο πολιτικής συμμετοχής εναντίον ως οδηγός πόλωσης — ποια επίδραση κυριαρχεί;",
                "sideA": "Πολιτική συμμετοχή",
                "sideB": "Πόλωση",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Η ΤΝ στην πρόσληψη εναντίον της ανθρώπινης κρίσης — τι παράγει δικαιότερες αποφάσεις πρόσληψης;",
                "sideA": "ΤΝ",
                "sideB": "Ανθρώπινη κρίση",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το δικαίωμα στη λήθη στο διαδίκτυο εναντίον του δικαιώματος του κοινού στην πληροφόρηση — τι πρέπει να έχει προτεραιότητα;",
                "sideA": "Δικαίωμα στη λήθη",
                "sideB": "Δικαίωμα πληροφόρησης",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υποχρεωτική ψηφοφορία εναντίον εθελοντικής ψηφοφορίας — τι παράγει υγιέστερες δημοκρατίες;",
                "sideA": "Υποχρεωτική",
                "sideB": "Εθελοντική",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πολιτική δέσμευση μέσω διαμαρτυρίας εναντίον μέσω θεσμικών καναλιών — τι είναι πιο αποτελεσματικό για τους ενήλικες σήμερα;",
                "sideA": "Διαμαρτυρία",
                "sideB": "Θεσμικά κανάλια",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εθνική ταυτότητα εναντίον ευρωπαϊκής ή παγκόσμιας ταυτότητας — τι είναι πιο σημαντικό για τους ενήλικες το 2026;",
                "sideA": "Εθνική ταυτότητα",
                "sideB": "Παγκόσμια ταυτότητα",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυξήσεις φόρων για τη χρηματοδότηση δημόσιων υπηρεσιών εναντίον περικοπών δαπανών — ποια είναι η πιο υπερασπίσιμη πολιτική επιλογή;",
                "sideA": "Αυξήσεις φόρων",
                "sideB": "Περικοπές δαπανών",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να παραδέχεστε ότι δεν έχετε ιδέα πώς λειτουργεί η σύνταξή σας εναντίον του να προσποιείστε με αυτοπεποίθηση ότι ξέρετε — ποια είναι η πιο καθολική εμπειρία ενήλικα;",
                "sideA": "Παραδοχή άγνοιας",
                "sideB": "Προσποίηση",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να είστε το άτομο που σχεδιάζει πάντα τις κοινωνικές εκδηλώσεις εναντίον του να είστε πάντα το άτομο που απλώς εμφανίζεται — ποιος ρόλος είναι πιο εξαντλητικός;",
                "sideA": "Ο διοργανωτής",
                "sideB": "Ο καλεσμένος",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να έχετε ισχυρή άποψη για τις συνήθειες της κουζίνας των συναδέλφων σας εναντίον του να μην σας νοιάζει καθόλου — ποιο άτομο είναι πιο υποφερτό;",
                "sideA": "Ισχυρή άποψη",
                "sideB": "Αδιαφορία",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Συμμετοχή σε κάθε προαιρετική κοινωνική εκδήλωση εργασίας εναντίον μη συμμετοχής σε καμία — ποια στρατηγική είναι καλύτερη για την καριέρα και την ψυχική σας υγεία;",
                "sideA": "Συμμετοχή σε όλες",
                "sideB": "Σε καμία",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ενήλικες που εξακολουθούν να μπερδεύονται με τη φορολογική τους δήλωση εναντίον ενηλίκων που απολαμβάνουν να την κάνουν — ποια ομάδα είναι πιο αξιόπιστη;",
                "sideA": "Μπερδεμένοι",
                "sideB": "Απολαμβάνουν",
                "level": "upper-intermediate",
                "theme": "economy_labour_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παράπονα για το κόστος ζωής σε φίλους εναντίον προσποίησης ότι όλα είναι καλά — ποια είναι η πιο ειλικρινής απάντηση ενήλικα;",
                "sideA": "Παράπονα",
                "sideB": "Προσποίηση",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κοινωνικά δίκτυα εναντίον δια ζώσης επικοινωνίας — τι είναι καλύτερο για τη δημιουργία σχέσεων;",
                "sideA": "Social media",
                "sideB": "Από κοντά",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αστική ζωή εναντίον αγροτικής ζωής — ποια προσφέρει καλύτερη ποιότητα ζωής;",
                "sideA": "Αστική",
                "sideB": "Αγροτική",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαδικτυακή μάθηση εναντίον παραδοσιακής τάξης — ποιο είναι το μέλλον της εκπαίδευσης;",
                "sideA": "Online",
                "sideB": "Τάξη",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανανεώσιμες πηγές ενέργειας εναντίον πυρηνικής ενέργειας — ποια είναι η καλύτερη λύση για το κλίμα;",
                "sideA": "Ανανεώσιμες",
                "sideB": "Πυρηνική",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γρήγορη μόδα εναντίον βιώσιμης ένδυσης — μπορούμε να αντέξουμε οικονομικά να είμαστε ηθικοί;",
                "sideA": "Fast fashion",
                "sideB": "Βιώσιμη",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Το μέλλον του κόσμου σε 50 χρόνια",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Ο αντίκτυπος της κλιματικής αλλαγής στις τοπικές κοινότητες",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
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

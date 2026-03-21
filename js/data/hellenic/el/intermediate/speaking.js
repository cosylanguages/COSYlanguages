(function() {
    const speakingData = {
    "el": {
        "opinionArena": [
            {
                "text": "Μπορούμε να ζήσουμε χωρίς ίντερνετ για μια εβδομάδα;",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Πρέπει όλοι να μαθαίνουν μια δεύτερη γλώσσα;",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "criticsCorner": [
            {
                "text": "Σκέφτομαι, άρα υπάρχω.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "debates": [
            {
                "topic": "Εξ αποστάσεως εργασία εναντίον εργασίας στο γραφείο — τι είναι καλύτερο για την παραγωγικότητα και την ευημερία;",
                "sideA": "Εξ αποστάσεως",
                "sideB": "Γραφείο",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασιακή ασφάλεια εναντίον επαγγελματικής ανέλιξης — σε τι πρέπει να δίνουν προτεραιότητα οι ενήλικες;",
                "sideA": "Ασφάλεια",
                "sideB": "Ανέλιξη",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έναρξη δικής σας επιχείρησης εναντίον εργασίας για έναν εργοδότη — ποια είναι η καλύτερη επιλογή στα 30;",
                "sideA": "Δική μου επιχείρηση",
                "sideB": "Εργοδότης",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φιλοδοξία εναντίον ισορροπίας μεταξύ επαγγελματικής και προσωπικής ζωής — μπορείτε πραγματικά να έχετε και τα δύο;",
                "sideA": "Φιλοδοξία",
                "sideB": "Ισορροπία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δικτύωση εναντίον οικοδόμησης δεξιοτήτων — τι προωθεί περισσότερο την καριέρα σας;",
                "sideA": "Δικτύωση",
                "sideB": "Δεξιότητες",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ειλικρινής ανατροφοδότηση από έναν διευθυντή εναντίον της ανεξάρτητης εργασίας — τι παρακινεί περισσότερο τους ενήλικες;",
                "sideA": "Ανατροφοδότηση",
                "sideB": "Ανεξαρτησία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αλλαγή καριέρας στα 40 εναντίον παραμονής στον τομέα σας — ποια είναι η πιο συνετή απόφαση;",
                "sideA": "Αλλαγή καριέρας",
                "sideB": "Παραμονή",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρόωρη εξόφληση στεγαστικού δανείου εναντίον επένδυσης αυτών των χρημάτων — τι είναι πιο έξυπνο;",
                "sideA": "Εξόφληση",
                "sideB": "Επένδυση",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ιδιοκτησία σπιτιού εναντίον μόνιμης ενοικίασης — τι ταιριάζει καλύτερα στη σύγχρονη ενήλικη ζωή;",
                "sideA": "Ιδιοκτησία",
                "sideB": "Ενοικίαση",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποταμίευση για συνταξιοδότηση νωρίς εναντίον απόλαυσης χρημάτων στα τριάντα σας — τι είναι πιο συνετό;",
                "sideA": "Αποταμίευση νωρίς",
                "sideB": "Απόλαυση τώρα",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή κάτω από τις δυνατότητές σας εναντίον δαπανών για να απολαύσετε τη ζωή τώρα — ποια προσέγγιση είναι πιο υγιής;",
                "sideA": "Κάτω από δυνατότητες",
                "sideB": "Απόλαυση τώρα",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δύο εισοδήματα σε ένα νοικοκυριό εναντίον ενός συντρόφου που μένει στο σπίτι — τι λειτουργεί καλύτερα για τις οικογένειες;",
                "sideA": "Δύο εισοδήματα",
                "sideB": "Ένας στο σπίτι",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Απόκτηση παιδιών εναντίον επιλογής να μην αποκτήσετε — ποια είναι μια πιο γεμάτη ενήλικη ζωή;",
                "sideA": "Απόκτηση παιδιών",
                "sideB": "Χωρίς παιδιά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυστηρή ανατροφή εναντίον ανεκτικής ανατροφής — τι παράγει πιο ευτυχισμένους ενήλικες;",
                "sideA": "Αυστηρή",
                "sideB": "Ανεκτική",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μακροχρόνια σχέση εναντίον παραμονής ελεύθερου — τι είναι καλύτερο για την προσωπική ανάπτυξη;",
                "sideA": "Σχέση",
                "sideB": "Ελεύθερος",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διατήρηση της επαγγελματικής και της προσωπικής ζωής χωριστά εναντίον ενσωμάτωσής τους — τι είναι πιο υγιές;",
                "sideA": "Χωριστά",
                "sideB": "Ενσωμάτωση",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μετακόμιση στο εξωτερικό ως ζευγάρι εναντίον παραμονής κοντά στην οικογένεια — ποια είναι η σωστή απόφαση;",
                "sideA": "Εξωτερικό",
                "sideB": "Κοντά στην οικογένεια",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Προτεραιότητα στη σωματική υγεία εναντίον της ψυχικής υγείας — σε τι πρέπει να εστιάσουν πρώτα οι ενήλικες;",
                "sideA": "Σωματική",
                "sideB": "Ψυχική",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ιδιωτική υγειονομική περίθαλψη εναντίον εξάρτησης από το δημόσιο σύστημα — ποια είναι η καλύτερη στρατηγική για έναν ενήλικα;",
                "sideA": "Ιδιωτική",
                "sideB": "Δημόσια",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τακτικοί ιατρικοί έλεγχοι εναντίον επίσκεψης μόνο όταν είστε άρρωστοι — ποια είναι η πιο έξυπνη προσέγγιση;",
                "sideA": "Τακτικοί έλεγχοι",
                "sideB": "Μόνο αν άρρωστος",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μείωση του αλκοόλ εναντίον μείωσης του στρες — τι έχει μεγαλύτερο αντίκτυπο στην υγεία των ενηλίκων;",
                "sideA": "Μείωση αλκοόλ",
                "sideB": "Μείωση στρες",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ατομική ελευθερία εναντίον κοινοτικής ευθύνης — τι πρέπει να καθοδηγεί τις αποφάσεις των ενηλίκων;",
                "sideA": "Ελευθερία",
                "sideB": "Ευθύνη",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αισιοδοξία για το μέλλον εναντίον ρεαλισμού — ποια είναι η πιο χρήσιμη στάση για τους ενήλικες;",
                "sideA": "Αισιοδοξία",
                "sideB": "Ρεαλισμός",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αλλαγή του κόσμου εναντίον οικοδόμησης μιας σταθερής προσωπικής ζωής — ποια είναι η πιο ειλικρινής φιλοδοξία;",
                "sideA": "Αλλαγή κόσμου",
                "sideB": "Σταθερή ζωή",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Προσφορά του χρόνου σας για εθελοντισμό εναντίον δωρεάς χρημάτων — τι κάνει περισσότερο καλό;",
                "sideA": "Εθελοντισμός",
                "sideB": "Δωρεά χρημάτων",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακολουθώντας τις αξίες της γενιάς σας εναντίον της αμφισβήτησής τους — τι είναι πιο αξιοθαύμαστο;",
                "sideA": "Ακολούθηση",
                "sideB": "Αμφισβήτηση",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να γνωρίζετε πόσα κερδίζουν οι συνάδελφοί σας εναντίον του να μην γνωρίζετε — τι είναι καλύτερο για την αρμονία στο γραφείο;",
                "sideA": "Να γνωρίζω",
                "sideB": "Να μην γνωρίζω",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Απάντηση στα μηνύματα αμέσως εναντίον του να παίρνετε το χρόνο σας — τι είναι πιο σεβαστό στην ενήλικη ζωή;",
                "sideA": "Αμέσως",
                "sideB": "Με το πάσο μου",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να παραδέχεστε ότι δεν έχετε ιδέα τι είναι ένα συνταξιοδοτικό ταμείο εναντίον του να προσποιείστε ότι ξέρετε — ποια είναι η πιο οικεία εμπειρία ενήλικα;",
                "sideA": "Παραδοχή",
                "sideB": "Προσποίηση",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακύρωση σχεδίων την τελευταία στιγμή εναντίον του να βγαίνετε έξω όταν δεν το θέλετε — ποια είναι η χειρότερη συνήθεια ενήλικα;",
                "sideA": "Ακύρωση",
                "sideB": "Έξοδος",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να μιλάτε ανοιχτά για χρήματα με φίλους εναντίον του να τα κρατάτε ιδιωτικά — ποια είναι η πιο ώριμη προσέγγιση;",
                "sideA": "Ανοιχτά",
                "sideB": "Ιδιωτικά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τηλεργασία vs Εργασία στο γραφείο",
                "sideA": "Σπίτι",
                "sideB": "Γραφείο",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Όχι μετακινήσεις",
                    "Ευελιξία"
                ],
                "ideasB": [
                    "Κοινωνικοποίηση",
                    "Καλύτερη εστίαση"
                ]
            },
            {
                "topic": "Ηλεκτρικά αυτοκίνητα vs Αυτοκίνητα βενζίνης",
                "sideA": "Ηλεκτρικά",
                "sideB": "Βενζίνη",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Περιβάλλον",
                    "Ησυχία"
                ],
                "ideasB": [
                    "Αυτονομία",
                    "Ταχύτητα φόρτισης"
                ]
            },
            {
                "topic": "Διαδικτυακή μάθηση ή μάθηση στην τάξη — τι είναι πιο αποτελεσματικό;",
                "sideA": "Online",
                "sideB": "Τάξη",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποστήθιση γεγονότων ή μάθηση πώς να βρίσκεις πληροφορίες — ποια δεξιότητα είναι πιο σημαντική;",
                "sideA": "Γεγονότα",
                "sideB": "Εύρεση info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πανεπιστημιακή εκπαίδευση ή επαγγελματική κατάρτιση — ποιος είναι ο καλύτερος δρόμος;",
                "sideA": "Πανεπιστήμιο",
                "sideB": "Επαγγελματική",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εξετάσεις ή συνεχής αξιολόγηση — ποιος είναι ο πιο δίκαιος τρόπος αξιολόγησης των μαθητών;",
                "sideA": "Εξετάσεις",
                "sideB": "Συνεχής",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εκμάθηση μιας ξένης γλώσσας στο σχολείο ή διαμονή στο εξωτερικό — τι είναι πιο αποτελεσματικό;",
                "sideA": "Σχολείο",
                "sideB": "Εξωτερικό",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολεία αρρένων ή θηλέων εναντίον μικτών σχολείων — ποια είναι καλύτερα για τους μαθητές;",
                "sideA": "Αρρένων/Θηλέων",
                "sideB": "Μικτά",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μέσα κοινωνικής δικτύωσης ή επικοινωνία πρόσωπο με πρόσωπο — τι είναι καλύτερο για τη διατήρηση της επαφής;",
                "sideA": "Social media",
                "sideB": "Από κοντά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υπηρεσίες streaming ή παραδοσιακή τηλεόραση — τι είναι καλύτερο;",
                "sideA": "Streaming",
                "sideB": "Παραδοσιακή TV",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία από το σπίτι ή εργασία σε γραφείο — τι είναι πιο παραγωγικό;",
                "sideA": "Σπίτι",
                "sideB": "Γραφείο",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανάγνωση ειδήσεων στο διαδίκτυο ή ανάγνωση εφημερίδας — τι είναι πιο αξιόπιστο;",
                "sideA": "Online ειδήσεις",
                "sideB": "Εφημερίδα",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περνώντας χρόνο στα μέσα κοινωνικής δικτύωσης ή περνώντας χρόνο στη φύση — τι είναι καλύτερο για την ψυχική σας υγεία;",
                "sideA": "Social media",
                "sideB": "Φύση",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χρήση δημόσιων συγκοινωνιών ή οδήγηση αυτοκινήτου — τι είναι καλύτερο για την κοινωνία;",
                "sideA": "Δημόσιες συγκοινωνίες",
                "sideB": "Αυτοκίνητο",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αγορά μεταχειρισμένων ρούχων ή αγορά καινούργιων ρούχων — ποια είναι η καλύτερη συνήθεια;",
                "sideA": "Μεταχειρισμένα",
                "sideB": "Καινούργια",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή στην πόλη ή ζωή στην εξοχή — τι ταιριάζει καλύτερα στους νέους;",
                "sideA": "Πόλη",
                "sideB": "Εξοχή",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χορτοφαγία ή κατανάλωση κρέατος — τι είναι καλύτερο για τον πλανήτη;",
                "sideA": "Χορτοφαγία",
                "sideB": "Κρέας",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ατομικές αλλαγές στον τρόπο ζωής ή κυβερνητική δράση — τι προσφέρει περισσότερο στο περιβάλλον;",
                "sideA": "Ατομικά",
                "sideB": "Κυβέρνηση",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μια σταθερή δουλειά ή μια δημιουργική καριέρα — ποια είναι η καλύτερη επιλογή ζωής;",
                "sideA": "Σταθερή δουλειά",
                "sideB": "Δημιουργική",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ξεκινώντας τη δική σου επιχείρηση ή δουλεύοντας για μια εταιρεία — τι είναι καλύτερο;",
                "sideA": "Δική σου επιχείρηση",
                "sideB": "Εταιρεία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υψηλός μισθός ή ικανοποίηση από την εργασία — τι έχει μεγαλύτερη σημασία στη δουλειά;",
                "sideA": "Μισθός",
                "sideB": "Ικανοποίηση",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δουλεύοντας πολλές ώρες ή έχοντας ισορροπία επαγγελματικής και προσωπικής ζωής — τι οδηγεί σε μεγαλύτερη επιτυχία;",
                "sideA": "Πολλές ώρες",
                "sideB": "Ισορροπία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επιλογή καριέρας με βάση το πάθος ή με βάση τις προοπτικές απασχόλησης — τι είναι πιο συνετό;",
                "sideA": "Πάθος",
                "sideB": "Προοπτικές",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώντας ως άτομο ή δίνοντας προτεραιότητα στην κοινότητα — τι είναι πιο σημαντικό;",
                "sideA": "Άτομο",
                "sideB": "Κοινότητα",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παραδοσιακές αξίες ή σύγχρονες αξίες — ποιες είναι πιο σημαντικό να διατηρηθούν;",
                "sideA": "Παραδοσιακές",
                "sideB": "Σύγχρονες",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εθελοντισμός ή δωρεά χρημάτων σε φιλανθρωπίες — τι βοηθάει περισσότερο;",
                "sideA": "Εθελοντισμός",
                "sideB": "Δωρεά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φήμη ή κάνοντας τη διαφορά αθόρυβα — ποιος είναι ο καλύτερος στόχος στη ζωή;",
                "sideA": "Φήμη",
                "sideB": "Αθόρυβη διαφορά",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακολουθώντας τους κανόνες ή σκεπτόμενος για τον εαυτό σου — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Κανόνες",
                "sideB": "Δική σου σκέψη",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σωματική υγεία ή ψυχική υγεία — ποια πρέπει να είναι η προτεραιότητα;",
                "sideA": "Σωματική",
                "sideB": "Ψυχική",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρόληψη ή θεραπεία — ποια είναι η καλύτερη προσέγγιση στην υγειονομική περίθαλψη;",
                "sideA": "Πρόληψη",
                "sideB": "Θεραπεία",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανταγωνιστικός αθλητισμός ή άσκηση για διασκέδαση — τι είναι καλύτερο για σένα;",
                "sideA": "Ανταγωνιστικός",
                "sideB": "Διασκέδαση",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ιδιωτική υγειονομική περίθαλψη ή δημόσια υγειονομική περίθαλψη — ποιο σύστημα είναι πιο δίκαιο;",
                "sideA": "Ιδιωτική",
                "sideB": "Δημόσια",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινηματογράφος ή λογοτεχνία — ποια είναι η πιο ισχυρή μορφή τέχνης;",
                "sideA": "Σινεμά",
                "sideB": "Λογοτεχνία",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μοντέρνα τέχνη ή κλασική τέχνη — τι είναι πιο πολύτιμο;",
                "sideA": "Μοντέρνα",
                "sideB": "Κλασική",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διατήρηση παλαιών κτιρίων ή ανέγερση νέων — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Διατήρηση παλαιών",
                "sideB": "Ανέγερση νέων",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τοπική κουλτούρα ή παγκοσμιοποίηση — τι εμπλουτίζει περισσότερο τις κοινότητες;",
                "sideA": "Τοπική",
                "sideB": "Παγκοσμιοποίηση",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μάθηση από τα λάθη εναντίον μάθησης από την επιτυχία — ποιο διδάσκει περισσότερα;",
                "sideA": "Λάθη",
                "sideB": "Επιτυχία",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τάμπλετ στην τάξη εναντίον παραδοσιακών τετραδίων — ποιο βοηθάει περισσότερο τους μαθητές;",
                "sideA": "Τάμπλετ",
                "sideB": "Τετράδια",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να είσαι πάντα διαθέσιμος εναντίον του να έχεις ψηφιακό ελεύθερο χρόνο — ποιο είναι καλύτερο;",
                "sideA": "Πάντα διαθέσιμος",
                "sideB": "Ελεύθερος χρόνος",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επαναχρησιμοποίηση πραγμάτων εναντίον ανακύκλωσης — ποιο είναι πιο αποτελεσματικό;",
                "sideA": "Επαναχρησιμοποίηση",
                "sideB": "Ανακύκλωση",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μία καριέρα για όλη τη ζωή εναντίον συχνής αλλαγής καριέρας — ποιο είναι καλύτερο;",
                "sideA": "Μία καριέρα",
                "sideB": "Συχνή αλλαγή",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος εναντίον γυμναστικής — ποιο έχει μεγαλύτερο αντίκτυπο στην υγεία σου;",
                "sideA": "Ύπνος",
                "sideB": "Γυμναστική",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ποπ μουσική εναντίον κλασικής μουσικής — ποια έχει μεγαλύτερο πολιτιστικό αντίκτυπο;",
                "sideA": "Ποπ",
                "sideB": "Κλασική",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να ξέρεις το τέλος εναντίον της έκπληξης — ποιο είναι καλύτερο;",
                "sideA": "Να ξέρεις",
                "sideB": "Έκπληξη",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Άμεση απάντηση στα μηνύματα εναντίον του να παίρνεις το χρόνο σου — ποιο είναι πιο σεβαστό;",
                "sideA": "Άμεσα",
                "sideB": "Με το πάσο σου",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching μιας σειράς εναντίον ενός επεισοδίου την εβδομάδα — ποιος είναι ο σωστός τρόπος;",
                "sideA": "Binge-watching",
                "sideB": "Εβδομαδιαία",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Θέση στο παράθυρο εναντίον θέση στο διάδρομο — ποιο είναι αντικειμενικά καλύτερο;",
                "sideA": "Παράθυρο",
                "sideB": "Διάδρομος",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να χάσεις το γυμναστήριο μία φορά εναντίον του να πας και να μην κάνεις καλή προπόνηση — ποιο είναι χειρότερο;",
                "sideA": "Να το χάσεις",
                "sideB": "Κακή προπόνηση",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να μιλάς στον εαυτό σου εναντίον του να μιλάς στο κατοικίδιό σου — ποιο είναι πιο λογικό;",
                "sideA": "Στον εαυτό σου",
                "sideB": "Στο κατοικίδιο",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Ένα άτομο που με ενέπνευσε",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "Η σημασία της ευαισθητοποίησης για την ψυχική υγεία",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
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

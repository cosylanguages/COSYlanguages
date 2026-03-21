(function() {
    const speakingData = {
    "el": {
        "opinionArena": [
            {
                "text": "Πρέπει τα παιδιά να έχουν κινητά τηλέφωνα;",
                "level": "elementary",
                "theme": "technology_A2"
            },
            {
                "text": "Είναι καλύτερα να ζεις σε σπίτι ή σε διαμέρισμα;",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }
        ],
        "criticsCorner": [
            {
                "text": "Ζωή είναι αυτό που σου συμβαίνει ενώ είσαι απασχολημένος κάνοντας άλλα σχέδια.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }
        ],
        "debates": [
            {
                "topic": "Υψηλός μισθός εναντίον σύντομης διαδρομής — τι έχει μεγαλύτερη σημασία σε μια δουλειά;",
                "sideA": "Υψηλός μισθός",
                "sideB": "Σύντομη διαδρομή",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Συχνή αλλαγή εργασίας εναντίον παραμονής στην ίδια εταιρεία — τι είναι καλύτερο για την καριέρα σας;",
                "sideA": "Αλλαγή εργασίας",
                "sideB": "Παραμονή",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία υπερωριών εναντίον αποχώρησης στην ώρα σας κάθε μέρα — ποια είναι η καλύτερη συνήθεια;",
                "sideA": "Υπερωρίες",
                "sideB": "Στην ώρα μου",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ένα αφεντικό που είναι αυστηρό εναντίον ενός αφεντικού που είναι χαλαρό — για ποιον είναι καλύτερο να εργάζεστε;",
                "sideA": "Αυστηρό αφεντικό",
                "sideB": "Χαλαρό αφεντικό",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία σε μια μεγάλη εταιρεία εναντίον μιας μικρής εταιρείας — τι είναι καλύτερο;",
                "sideA": "Μεγάλη εταιρεία",
                "sideB": "Μικρή εταιρεία",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Απόκτηση προαγωγής εναντίον απόκτησης περισσότερου ελεύθερου χρόνου — τι θα επιλέγατε;",
                "sideA": "Προαγωγή",
                "sideB": "Ελεύθερος χρόνος",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αγορά σπιτιού εναντίον ενοικίασης για μια ζωή — ποια είναι η πιο έξυπνη οικονομική απόφαση;",
                "sideA": "Αγορά",
                "sideB": "Ενοικίαση",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή στο κέντρο της πόλης εναντίον ζωής στα προάστια — τι είναι καλύτερο;",
                "sideA": "Κέντρο πόλης",
                "sideB": "Προάστια",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δαπάνη χρημάτων σε εμπειρίες εναντίον σε πράγματα — τι σας κάνει πιο ευτυχισμένους;",
                "sideA": "Εμπειρίες",
                "sideB": "Πράγματα",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική κάθε μέρα εναντίον προετοιμασίας γευμάτων μία φορά την εβδομάδα — τι είναι πιο πρακτικό;",
                "sideA": "Καθημερινή μαγειρική",
                "sideB": "Meal prepping",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπαρξη καθαριστή εναντίον προσωπικής ενασχόλησης με τις δουλειές του σπιτιού — ποια είναι η καλύτερη επιλογή;",
                "sideA": "Καθαριστής",
                "sideB": "Προσωπικά",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή με σύντροφο εναντίον ζωής μόνος — τι είναι καλύτερο για τους ενήλικες;",
                "sideA": "Με σύντροφο",
                "sideB": "Μόνος",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Απόκτηση παιδιών νωρίς εναντίον απόκτησης παιδιών αργότερα στη ζωή — τι είναι καλύτερο;",
                "sideA": "Νωρίς",
                "sideB": "Αργότερα",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Στενές οικογενειακές σχέσεις εναντίον ανεξαρτησίας από την οικογένεια — τι είναι πιο σημαντικό ως ενήλικας;",
                "sideA": "Στενές σχέσεις",
                "sideB": "Ανεξαρτησία",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γνωριμία με νέους ανθρώπους εναντίον διατήρησης παλιών φιλιών — τι είναι πιο πολύτιμο;",
                "sideA": "Νέοι άνθρωποι",
                "sideB": "Παλιοί φίλοι",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κοινωνικοποίηση μετά τη δουλειά εναντίον επιστροφής κατευθείαν στο σπίτι — τι είναι καλύτερο για τις εργασιακές σχέσεις;",
                "sideA": "Κοινωνικοποίηση",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πηγαίνοντας στο γυμναστήριο εναντίον άσκησης σε εξωτερικούς χώρους — τι είναι καλύτερο για τους ενήλικες;",
                "sideA": "Γυμναστήριο",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυστηρή δίαιτα εναντίον κατανάλωσης των πάντων με μέτρο — τι είναι πιο υγιεινό;",
                "sideA": "Αυστηρή δίαιτα",
                "sideB": "Μέτρο",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επίσκεψη σε γιατρό νωρίς εναντίον αναμονής για να δείτε αν θα γίνετε καλύτερα — τι είναι πιο συνετό;",
                "sideA": "Νωρίς",
                "sideB": "Αναμονή",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος οκτώ ωρών εναντίον ύπνου έξι ωρών αλλά με άσκηση — τι είναι καλύτερο για ενέργεια;",
                "sideA": "8 ώρες",
                "sideB": "6 ώρες + άσκηση",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μείωση του στρες μέσω του αθλητισμού εναντίον μέσω της χαλάρωσης — τι λειτουργεί καλύτερα;",
                "sideA": "Αθλητισμός",
                "sideB": "Χαλάρωση",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smartphones εναντίον συνομιλίας πρόσωπο με πρόσωπο — τι χρησιμοποιούμε περισσότερο και είναι αυτό πρόβλημα;",
                "sideA": "Smartphones",
                "sideB": "Πρόσωπο με πρόσωπο",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online banking εναντίον επίσκεψης στην τράπεζα — τι είναι καλύτερο;",
                "sideA": "Online",
                "sideB": "Στην τράπεζα",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία με χαρτί εναντίον ψηφιακής εργασίας — τι είναι πιο αποτελεσματικό;",
                "sideA": "Χαρτί",
                "sideB": "Ψηφιακά",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media για δικτύωση εναντίον συνάντησης ανθρώπων από κοντά — τι είναι πιο χρήσιμο επαγγελματικά;",
                "sideA": "Social media",
                "sideB": "Από κοντά",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Οργανωμένες διακοπές εναντίον ανεξάρτητου ταξιδιού — τι είναι καλύτερο για τους ενήλικες;",
                "sideA": "Οργανωμένες",
                "sideB": "Ανεξάρτητα",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομη απόδραση στην πόλη εναντίον διακοπών στην παραλία — ποιος είναι ο καλύτερος τρόπος για να χαλαρώσετε;",
                "sideA": "Στην πόλη",
                "sideB": "Στην παραλία",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μία μεγάλη διακοπή το χρόνο εναντίον αρκετών μικρών αποδράσεων — τι είναι καλύτερο;",
                "sideA": "Μία μεγάλη",
                "sideB": "Πολλές μικρές",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξιδεύοντας ως ζευγάρι εναντίον ταξιδεύοντας μόνος — τι είναι πιο απολαυστικό;",
                "sideA": "Ως ζευγάρι",
                "sideB": "Μόνος",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να λέτε στον σύντροφό σας για κάθε μικρό πρόβλημα εναντίον του να κρατάτε τα πράγματα για τον εαυτό σας — τι είναι πιο υγιές;",
                "sideA": "Να τα λέτε όλα",
                "sideB": "Να τα κρατάτε",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έλεγχος του τηλεφώνου σας αμέσως το πρωί εναντίον αναμονής μέχρι μετά το πρωινό — ποια είναι η καλύτερη συνήθεια;",
                "sideA": "Αμέσως",
                "sideB": "Μετά το πρωινό",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να γνωρίζετε τα ονόματα των γειτόνων σας εναντίον του να μην τους γνωρίζετε — ποια είναι η πιο φυσιολογική εμπειρία ενήλικα σήμερα;",
                "sideA": "Να γνωρίζετε",
                "sideB": "Να μην γνωρίζετε",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ψώνια στο σούπερ μάρκετ με λίστα εναντίον χωρίς λίστα — ποιος τύπος ανθρώπου έχει καλύτερη ζωή;",
                "sideA": "Με λίστα",
                "sideB": "Χωρίς λίστα",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το να λέτε στο αφεντικό σας ότι είστε άρρωστοι εναντίον του να πηγαίνετε στη δουλειά άρρωστοι — ποια είναι η πιο γενναία επιλογή;",
                "sideA": "Να το λέτε",
                "sideB": "Να πηγαίνετε",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πλήρης απασχόληση εναντίον μερικής απασχόλησης — τι είναι καλύτερο;",
                "sideA": "Πλήρης",
                "sideB": "Μερική",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία σε γραφείο εναντίον εργασίας από το σπίτι — τι προτιμάτε;",
                "sideA": "Γραφείο",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μια δουλειά που αγαπάτε εναντίον μιας δουλειάς που πληρώνει καλά — τι είναι πιο σημαντικό;",
                "sideA": "Δουλειά που αγαπάτε",
                "sideB": "Καλή αμοιβή",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία με άλλους ανθρώπους εναντίον εργασίας μόνος — τι είναι καλύτερο;",
                "sideA": "Με άλλους",
                "sideB": "Μόνος",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μια σύντομη διαδρομή εναντίον μιας μεγάλης διαδρομής για τη δουλειά — τι είναι πιο αποδεκτό;",
                "sideA": "Σύντομη",
                "sideB": "Μεγάλη",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή μόνος εναντίον ζωής με σύντροφο — τι είναι καλύτερο;",
                "sideA": "Μόνος",
                "sideB": "Σύντροφος",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλη πόλη εναντίον μικρής πόλης — ποιο είναι το καλύτερο μέρος για να ζεις ως ενήλικας;",
                "sideA": "Μεγάλη πόλη",
                "sideB": "Μικρή πόλη",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική στο σπίτι εναντίον φαγητού έξω — τι είναι καλύτερο για την καθημερινή ζωή;",
                "sideA": "Σπίτι",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έχοντας παιδιά εναντίον μη έχοντας παιδιά — ποια ζωή είναι καλύτερη;",
                "sideA": "Παιδιά",
                "sideB": "Χωρίς παιδιά",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ενοικίαση διαμερίσματος εναντίον αγοράς σπιτιού — τι είναι καλύτερο για τους νέους ενήλικες;",
                "sideA": "Ενοικίαση",
                "sideB": "Αγορά",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Άσκηση κάθε μέρα εναντίον ξεκούρασης — τι είναι καλύτερο για την υγεία σας;",
                "sideA": "Άσκηση",
                "sideB": "Ξεκούραση",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πηγαίνοντας στον γιατρό εναντίον αναμονής — τι είναι καλύτερο όταν νιώθετε άρρωστοι;",
                "sideA": "Γιατρός",
                "sideB": "Αναμονή",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος οκτώ ώρες εναντίον λιγότερου ύπνου — τι είναι πιο ρεαλιστικό για τους ενήλικες;",
                "sideA": "8 ώρες",
                "sideB": "Λιγότερο",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περπάτημα προς τη δουλειά εναντίον χρήσης αυτοκινήτου — τι είναι καλύτερο για την υγεία σας;",
                "sideA": "Περπάτημα",
                "sideB": "Αυτοκίνητο",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online αγορές εναντίον αγορών σε κατάστημα — τι προτιμάτε;",
                "sideA": "Online",
                "sideB": "Κατάστημα",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποταμίευση για το μέλλον εναντίον απόλαυσης χρημάτων τώρα — τι είναι πιο συνετό;",
                "sideA": "Αποταμίευση",
                "sideB": "Απόλαυση τώρα",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακριβά πράγματα εναντίον φθηνών πραγμάτων — τι έχει την καλύτερη αξία;",
                "sideA": "Ακριβά",
                "sideB": "Φθηνά",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αγορά καινούργιων εναντίον αγοράς μεταχειρισμένων — τι είναι καλύτερο;",
                "sideA": "Καινούργια",
                "sideB": "Μεταχειρισμένα",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παρακολούθηση τηλεόρασης στο σπίτι εναντίον εξόδου — ποιο είναι το καλύτερο βράδυ;",
                "sideA": "Τηλεόραση",
                "sideB": "Έξοδος",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διακοπές με την οικογένεια εναντίον διακοπών με φίλους — τι είναι καλύτερο;",
                "sideA": "Οικογένεια",
                "sideB": "Φίλοι",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παραμονή στη χώρα σας εναντίον ταξιδιού στο εξωτερικό — ποιες είναι οι καλύτερες διακοπές;",
                "sideA": "Στη χώρα σας",
                "sideB": "Εξωτερικό",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αθλητισμός εναντίον ανάγνωσης — ποιο είναι το καλύτερο χόμπι για ενήλικες;",
                "sideA": "Αθλητισμός",
                "sideB": "Ανάγνωση",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βλέποντας συχνά φίλους εναντίον χρόνου μόνος — τι είναι πιο σημαντικό;",
                "sideA": "Φίλοι",
                "sideB": "Χρόνος μόνος",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Απάντηση στα μηνύματα αμέσως εναντίον του να τα αφήνετε για αργότερα — τι είναι πιο επαγγελματικό;",
                "sideA": "Αμέσως",
                "sideB": "Αργότερα",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πλύσιμο πιάτων αμέσως εναντίον του να τα αφήνετε μέχρι αύριο — τι είναι καλύτερο;",
                "sideA": "Αμέσως",
                "sideB": "Αύριο",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να είστε πάντα νωρίς εναντίον πάντα πέντε λεπτά αργά — τι είναι χειρότερο στη δουλειά;",
                "sideA": "Νωρίς",
                "sideB": "Αργά",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έχοντας ένα πολύ οργανωμένο γραφείο εναντίον ενός ακατάστατου γραφείου — ποιο άτομο είναι πιο παραγωγικό;",
                "sideA": "Οργανωμένο",
                "sideB": "Ακατάστατο",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Συζήτηση για τη δουλειά στο δείπνο εναντίον καθόλου συζήτησης για τη δουλειά στο δείπνο — ποιος κανόνας είναι καλύτερος;",
                "sideA": "Συζήτηση δουλειάς",
                "sideB": "Καμία συζήτηση",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή με την οικογένεια εναντίον Μόνος — ποιο είναι καλύτερο;",
                "sideA": "Με οικογένεια",
                "sideB": "Μόνος",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αδελφός εναντίον Αδελφής — ποιο είναι καλύτερο;",
                "sideA": "Αδελφός",
                "sideB": "Αδελφή",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγάλη εναντίον Μικρής οικογένειας — ποια είναι πιο ωραία;",
                "sideA": "Μεγάλη",
                "sideB": "Μικρή",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μεγαλύτερο εναντίον Μικρότερου παιδιού — ποιο είναι καλύτερο;",
                "sideA": "Μεγαλύτερο",
                "sideB": "Μικρότερο",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Απογευματινού σχολείου — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Απόγευμα",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανάγνωση εναντίον Μαθηματικών — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Ανάγνωση",
                "sideB": "Μαθηματικά",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολείο εναντίον Σπιτιού — ποιο είναι καλύτερο;",
                "sideA": "Σχολείο",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασίες εναντίον Καθόλου εργασιών — ποιο βοηθάει περισσότερο;",
                "sideA": "Εργασίες",
                "sideB": "Καμία",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μόνος εναντίον Με συνεργάτη — ποιο προτιμάτε;",
                "sideA": "Μόνος",
                "sideB": "Συνεργάτης",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χαρτί εναντίον Υπολογιστή — ποιο είναι καλύτερο;",
                "sideA": "Χαρτί",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Δείπνου — ποιο γεύμα είναι πιο σημαντικό;",
                "sideA": "Πρωινό",
                "sideB": "Δείπνο",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζεστό εναντίον Κρύου φαγητού — ποιο είναι καλύτερο;",
                "sideA": "Ζεστό",
                "sideB": "Κρύο",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπίτι εναντίον Εστιατορίου — ποιο είναι καλύτερο;",
                "sideA": "Σπίτι",
                "sideB": "Εστιατόριο",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γλυκό εναντίον Αλμυρού — ποιο προτιμάτε;",
                "sideA": "Γλυκό",
                "sideB": "Αλμυρό",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική εναντίον Έτοιμου φαγητού — ποιο είναι πιο ωραίο;",
                "sideA": "Μαγειρική",
                "sideB": "Έτοιμο",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωινό εναντίον Αργοπορημένου ξυπνήματος — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Αργά",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πρωί εναντίον Βράδυ — ποιο μέρος της ημέρας είναι πιο ωραίο;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καθημερινές εναντίον Σαββατοκύριακου — ποιο προτιμάτε;",
                "sideA": "Καθημερινές",
                "sideB": "Σαββατοκύριακο",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Καλοκαίρι εναντίον Χειμώνα — ποια εποχή είναι καλύτερη;",
                "sideA": "Καλοκαίρι",
                "sideB": "Χειμώνας",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος νωρίς εναντίον Ύπνου αργά — ποιο είναι πιο υγιεινό;",
                "sideA": "Νωρίς",
                "sideB": "Αργά",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπίτι εναντίον Διαμερίσματος — ποιο είναι καλύτερο;",
                "sideA": "Σπίτι",
                "sideB": "Διαμέρισμα",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πόλη εναντίον Εξοχής — ποιο είναι καλύτερο μέρος για να ζεις;",
                "sideA": "Πόλη",
                "sideB": "Εξοχή",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Υπνοδωμάτιο εναντίον Καθιστικού — ποιο δωμάτιο προτιμάτε;",
                "sideA": "Υπνοδωμάτιο",
                "sideB": "Καθιστικό",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επιτραπέζια εναντίον Παιχνιδιών έξω — ποια είναι πιο διασκεδαστικά;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τηλεόραση εναντίον Βιβλίου — ποιο είναι καλύτερο;",
                "sideA": "Τηλεόραση",
                "sideB": "Βιβλίο",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αθλητισμός εναντίον Βιντεοπαιχνιδιών — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Αθλητισμός",
                "sideB": "Βιντεοπαιχνίδια",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωγραφική εναντίον Τραγουδιού — ποιο χόμπι είναι καλύτερο;",
                "sideA": "Ζωγραφική",
                "sideB": "Τραγούδι",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παιχνίδι μόνος εναντίον Με φίλους — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Μόνος",
                "sideB": "Φίλοι",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κολύμβηση εναντίον Τρεξίματος — ποιο σπορ προτιμάτε;",
                "sideA": "Κολύμβηση",
                "sideB": "Τρέξιμο",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μουσική εναντίον Αθλητισμού — ποιο είναι καλύτερο χόμπι;",
                "sideA": "Μουσική",
                "sideB": "Αθλητισμός",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώα φάρμας εναντίον Άγριων ζώων — ποια είναι πιο ενδιαφέροντα;",
                "sideA": "Φάρμα",
                "sideB": "Άγρια",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βροχή εναντίον Λιακάδας — ποιο καιρό προτιμάτε;",
                "sideA": "Βροχή",
                "sideB": "Λιακάδα",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Θάλασσα εναντίον Βουνού — ποιο είναι καλύτερο για διακοπές;",
                "sideA": "Θάλασσα",
                "sideB": "Βουνό",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Λουλούδια εναντίον Δέντρων — ποια είναι πιο όμορφα;",
                "sideA": "Λουλούδια",
                "sideB": "Δέντρα",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυτοκίνητο εναντίον Λεωφορείου — ποιο είναι καλύτερο;",
                "sideA": "Αυτοκίνητο",
                "sideB": "Λεωφορείο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περπάτημα εναντίον Ποδηλάτου — ποιο είναι καλύτερο για μετακίνηση;",
                "sideA": "Περπάτημα",
                "sideB": "Ποδήλατο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομες εναντίον Μεγάλων διακοπών — ποιο είναι καλύτερο;",
                "sideA": "Σύντομες",
                "sideB": "Μεγάλες",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξίδι μόνος εναντίον Με οικογένεια — ποιο είναι πιο διασκεδαστικό;",
                "sideA": "Μόνος",
                "sideB": "Οικογένεια",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Online αγορές vs Αγορές με φυσική παρουσία",
                "sideA": "Online",
                "sideB": "Φυσική παρουσία",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [
                    "Ευκολία",
                    "Καλύτερες τιμές"
                ],
                "ideasB": [
                    "Δοκιμή ειδών",
                    "Άμεση ικανοποίηση"
                ]
            },
            {
                "topic": "Χάρτινα βιβλία vs E-books",
                "sideA": "Χαρτί",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [
                    "Μυρωδιά/Αίσθηση",
                    "Συλλεκτικό"
                ],
                "ideasB": [
                    "Φορητότητα",
                    "Εξοικονόμηση χώρου"
                ]
            },
            {
                "topic": "Μελέτη το πρωί ή μελέτη το βράδυ — πότε είναι καλύτερα;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αυστηροί δάσκαλοι ή φιλικοί δάσκαλοι — ποιοι βοηθούν περισσότερο τους μαθητές;",
                "sideA": "Αυστηροί",
                "sideB": "Φιλικοί",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μάθηση με σχολικό βιβλίο ή μάθηση με βίντεο — τι είναι πιο αποτελεσματικό;",
                "sideA": "Βιβλίο",
                "sideB": "Βίντεο",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σύντομα μαθήματα ή μεγάλα μαθήματα — ποια σε βοηθούν να μαθαίνεις καλύτερα;",
                "sideA": "Σύντομα",
                "sideB": "Μεγάλα",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ομαδικές εργασίες ή ατομικές εργασίες — τι προτιμάτε;",
                "sideA": "Ομαδικές",
                "sideB": "Ατομικές",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σχολική στολή ή καθημερινά ρούχα στο σχολείο — τι είναι καλύτερο;",
                "sideA": "Στολή",
                "sideB": "Καθημερινά",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Σπιτικό φαγητό ή φαστ φουντ — τι είναι καλύτερο;",
                "sideA": "Σπιτικό",
                "sideB": "Φαστ φουντ",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρία μεγάλα γεύματα ή πολλά μικρά σνακ — τι είναι πιο υγιεινό;",
                "sideA": "Μεγάλα γεύματα",
                "sideB": "Σνακ",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Χορτοφαγικό φαγητό ή κρέας — ποια διατροφή είναι καλύτερη;",
                "sideA": "Χορτοφαγία",
                "sideB": "Κρέας",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίνοντας τσάι ή πίνοντας καφέ — τι είναι καλύτερο;",
                "sideA": "Τσάι",
                "sideB": "Καφές",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Τρώγοντας μόνος ή τρώγοντας με άλλους — τι προτιμάτε;",
                "sideA": "Μόνος",
                "sideB": "Με άλλους",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παίζοντας ένα ομαδικό άθλημα ή ένα ατομικό άθλημα — τι είναι καλύτερο;",
                "sideA": "Ομαδικό",
                "sideB": "Ατομικό",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Περνώντας τον ελεύθερο χρόνο μέσα ή έξω — τι είναι καλύτερο;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινηματογράφος ή θέατρο — ποια είναι η καλύτερη βραδινή έξοδος;",
                "sideA": "Σινεμά",
                "sideB": "Θέατρο",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ακούγοντας μουσική ή παίζοντας ένα όργανο — τι είναι πιο απολαυστικό;",
                "sideA": "Ακρόαση",
                "sideB": "Εκτέλεση",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βιντεοπαιχνίδια ή επιτραπέζια παιχνίδια — ποια έχουν περισσότερη πλάκα;",
                "sideA": "Βιντεοπαιχνίδια",
                "sideB": "Επιτραπέζια",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πηγαίνοντας για ψώνια ή μένοντας στο σπίτι — ποιος είναι ο καλύτερος τρόπος για να περάσετε το Σαββατοκύριακο;",
                "sideA": "Ψώνια",
                "sideB": "Σπίτι",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κινητό τηλέφωνο ή υπολογιστής — τι είναι πιο χρήσιμο στην καθημερινή ζωή;",
                "sideA": "Κινητό",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Στέλνοντας ένα μήνυμα ή κάνοντας ένα τηλεφώνημα — τι είναι καλύτερο;",
                "sideA": "Μήνυμα",
                "sideB": "Κλήση",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ηλεκτρονικό βιβλίο ή χάρτινο βιβλίο — τι προτιμάτε να διαβάζετε;",
                "sideA": "E-book",
                "sideB": "Χάρτινο βιβλίο",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Βγάζοντας φωτογραφίες με το κινητό σου ή με μια κάμερα — τι δίνει καλύτερα αποτελέσματα;",
                "sideA": "Κινητό",
                "sideB": "Κάμερα",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διακοπές στην παραλία ή διακοπές στο βουνό — τι είναι καλύτερο;",
                "sideA": "Παραλία",
                "sideB": "Βουνό",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξιδεύοντας με τρένο ή ταξιδεύοντας με αεροπλάνο — τι είναι καλύτερο;",
                "sideA": "Τρένο",
                "sideB": "Αεροπλάνο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Επίσκεψη σε μια διάσημη πόλη ή επίσκεψη σε ένα μικρό χωριό — τι είναι πιο ενδιαφέρον;",
                "sideA": "Πόλη",
                "sideB": "Χωριό",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Διαμονή σε ξενοδοχείο ή διαμονή σε μια τοπική οικογένεια — τι προτιμάτε;",
                "sideA": "Ξενοδοχείο",
                "sideB": "Τοπική οικογένεια",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ταξιδεύοντας στο εξωτερικό ή εξερευνώντας τη δική σου χώρα — τι αξίζει περισσότερο;",
                "sideA": "Εξωτερικό",
                "sideB": "Δική σου χώρα",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έχοντας πολλούς φίλους ή έχοντας λίγους στενούς φίλους — τι είναι καλύτερο;",
                "sideA": "Πολλοί",
                "sideB": "Στενοί φίλοι",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Συνάντηση με φίλους από κοντά ή συνομιλία στο διαδίκτυο — τι είναι πιο ικανοποιητικό;",
                "sideA": "Από κοντά",
                "sideB": "Online",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζώντας με τους γονείς ή ζώντας σε ένα φοιτητικό διαμέρισμα — τι είναι καλύτερο για τους νέους;",
                "sideA": "Γονείς",
                "sideB": "Φοιτητικό σπίτι",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γιορτάζοντας τα γενέθλια στο σπίτι ή βγαίνοντας έξω — τι είναι πιο ωραίο;",
                "sideA": "Σπίτι",
                "sideB": "Έξοδος",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αποταμίευση χρημάτων ή δαπάνη χρημάτων — τι είναι πιο συνετό;",
                "sideA": "Αποταμίευση",
                "sideB": "Ξόδεμα",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία με μερική απασχόληση κατά τη διάρκεια των σπουδών ή εστίαση μόνο στο σχολείο — τι είναι καλύτερο;",
                "sideA": "Μερική απασχόληση",
                "sideB": "Μόνο σχολείο",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κερδίζοντας πολλά χρήματα ή έχοντας ελεύθερο χρόνο — τι έχει μεγαλύτερη σημασία;",
                "sideA": "Χρήματα",
                "sideB": "Ελεύθερος χρόνος",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζωή με τους παππούδες εναντίον χωρίς αυτούς — ποιο είναι πιο ωραίο;",
                "sideA": "Με παππούδες",
                "sideB": "Χωρίς αυτούς",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Το φαγητό της μαμάς εναντίον του μπαμπά — ποιο είναι καλύτερο;",
                "sideA": "Μαμάς",
                "sideB": "Μπαμπά",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαθηματικά εναντίον καλλιτεχνικών — ποιο μάθημα έχει πιο πολλή πλάκα;",
                "sideA": "Μαθηματικά",
                "sideB": "Καλλιτεχνικά",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γράψιμο στο χαρτί εναντίον πληκτρολόγησης σε τάμπλετ — ποιο είναι καλύτερο;",
                "sideA": "Χαρτί",
                "sideB": "Τάμπλετ",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίτσα εναντίον μακαρονάδας — ποιο είναι πιο νόστιμο;",
                "sideA": "Πίτσα",
                "sideB": "Μακαρονάδα",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Παγωτό εναντίον κέικ — ποιο είναι καλύτερο επιδόρπιο;",
                "sideA": "Παγωτό",
                "sideB": "Κέικ",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μικρές μέρες εναντίον μεγάλες μέρες — ποιο είναι καλύτερο;",
                "sideA": "Μικρές μέρες",
                "sideB": "Μεγάλες μέρες",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μέρα στο πάρκο εναντίον μέρα στην παραλία — ποιο είναι καλύτερο;",
                "sideA": "Πάρκο",
                "sideB": "Παραλία",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Αεροπλάνο εναντίον τρένου — ποιο έχει πιο πολλή πλάκα;",
                "sideA": "Αεροπλάνο",
                "sideB": "Τρένο",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ντους το πρωί εναντίον ντους το βράδυ — ποιο είναι καλύτερο;",
                "sideA": "Πρωί",
                "sideB": "Βράδυ",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτες που ρίχνουν πράγματα από τα τραπέζια εναντίον σκύλων που μασάνε παπούτσια — ποιο είναι πιο ενοχλητικό;",
                "sideA": "Γάτες",
                "sideB": "Σκύλοι",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πίτσα με πιρούνι εναντίον πίτσα με τα χέρια — ποιο είναι το σωστό;",
                "sideA": "Πιρούνι",
                "sideB": "Χέρια",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ύπνος με κάλτσες εναντίον ύπνος χωρίς κάλτσες — ποιο είναι καλύτερο;",
                "sideA": "Με κάλτσες",
                "sideB": "Χωρίς",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Κάστρο στην άμμο εναντίον χιονάνθρωπου — ποιο έχει πιο πολλή πλάκα να χτίζεις;",
                "sideA": "Κάστρο",
                "sideB": "Χιονάνθρωπος",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Πολλές εξετάσεις εναντίον πολύ λίγων — ποιο είναι πιο δίκαιο;",
                "sideA": "Πολλές εξετάσεις",
                "sideB": "Πολύ λίγες",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Έναρξη σχολείου στα 7 εναντίον στα 5 — ποιο είναι καλύτερο για τα παιδιά;",
                "sideA": "Στα 7",
                "sideB": "Στα 5",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φαγητό αργά εναντίον φαγητό γρήγορα — ποιο είναι καλύτερο για σένα;",
                "sideA": "Αργά",
                "sideB": "Γρήγορα",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική στο σπίτι εναντίον παραγγελίας online — ποιο είναι καλύτερο;",
                "sideA": "Μαγειρική",
                "sideB": "Παραγγελία",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Μαγειρική εναντίον ζαχαροπλαστικής — ποιο είναι πιο διασκεδαστικό ως χόμπι;",
                "sideA": "Μαγειρική",
                "sideB": "Ζαχαροπλαστική",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γυμναστήριο εναντίον γυμναστικής έξω — ποιο είναι καλύτερο;",
                "sideA": "Γυμναστήριο",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Φωτογραφίες στο κινητό εναντίον εκτυπωμένων — ποιο είναι καλύτερο;",
                "sideA": "Στο κινητό",
                "sideB": "Εκτυπωμένες",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV εναντίον οθόνης υπολογιστή — ποιο είναι καλύτερο για ταινίες;",
                "sideA": "Smart TV",
                "sideB": "Υπολογιστής",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ζεστή χώρα εναντίον κρύας χώρας — ποιος είναι καλύτερος προορισμός διακοπών;",
                "sideA": "Ζεστή",
                "sideB": "Κρύα",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Να δίνεις δώρα εναντίον να παίρνεις δώρα — ποιο προτιμάς;",
                "sideA": "Να δίνεις",
                "sideB": "Να παίρνεις",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Εργασία μέσα εναντίον εργασίας έξω — ποιο είναι καλύτερο;",
                "sideA": "Μέσα",
                "sideB": "Έξω",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ανανάς στην πίτσα εναντίον χωρίς ανανά — ποιο είναι το σωστό;",
                "sideA": "Ανανάς",
                "sideB": "Χωρίς ανανά",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάλα πρώτα εναντίον τσάι πρώτα — ποιο είναι καλύτερο;",
                "sideA": "Γάλα πρώτα",
                "sideB": "Τσάι πρώτα",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Δευτέρα εναντίον Παρασκευής — ποια μέρα είναι στην πραγματικότητα χειρότερη;",
                "sideA": "Δευτέρα",
                "sideB": "Παρασκευή",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ξύπνημα πέντε λεπτά πριν το ξυπνητήρι εναντίον ύπνου μέχρι το ξυπνητήρι — ποιο είναι πιο ενοχλητικό;",
                "sideA": "Πριν το ξυπνητήρι",
                "sideB": "Μέχρι το ξυπνητήρι",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Γάτες εναντίον σκύλων — ποιο ζώο είναι κρυφά το αφεντικό του σπιτιού;",
                "sideA": "Γάτες",
                "sideB": "Σκύλοι",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Όταν ζεσταίνεσαι πολύ εναντίον όταν κρυώνεις πολύ — ποιο είναι χειρότερο;",
                "sideA": "Πολύ ζέστη",
                "sideB": "Πολύ κρύο",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Οι τελευταίες διακοπές που έκανα",
                "level": "elementary",
                "theme": "transport_travel_A2"
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

import os
import re
from bs4 import BeautifulSoup

def get_mple_data():
    s1_vocab_html = """<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η αφοσίωση</div>
<div class="vocab-def">Η πλήρης παράδοση και αφοσίωση της ψυχής σε ένα συναίσθημα ή πρόσωπο.</div>
<div class="vocab-example">Η αφοσίωσή της στη μουσική την έκανε να ξεπεράσει κάθε εμπόδιο.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η αποστασιοποίηση</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η αφοσίωση', definition:'Η πλήρης παράδοση και αφοσίωση της ψυχής σε ένα συναίσθημα ή πρόσωπο.', example:'Η αφοσίωσή της στη μουσική την έκανε να ξεπεράσει κάθε εμπόδιο.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Ο έρωτας</div>
<div class="vocab-def">Το έντονο και παράφορο συναίσθημα έλξης για κάποιο πρόσωπο.</div>
<div class="vocab-example">Ο έρωτας μπορεί να μεταμορφώσει την καθημερινότητά μας σε ποίηση.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η αδιαφορία</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Ο έρωτας', definition:'Το έντονο και παράφορο συναίσθημα έλξης για κάποιο πρόσωπο.', example:'Ο έρωτας μπορεί να μεταμορφώσει την καθημερινότητά μας σε ποίηση.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η εμμονή</div>
<div class="vocab-def">Η επίμονη και καθηλωτική προσκόλληση σε μια ιδέα ή ένα πρόσωπο.</div>
<div class="vocab-example">Όταν η αγάπη γίνεται εμμονή, τα όρια της λογικής χάνονται.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η λογική</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η εμμονή', definition:'Η επίμονη και καθηλωτική προσκόλληση σε μια ιδέα ή ένα πρόσωπο.', example:'Όταν η αγάπη γίνεται εμμονή, τα όρια της λογικής χάνονται.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η λατρεία</div>
<div class="vocab-def">Η βαθιά, σχεδόν θρησκευτική αγάπη και ο σεβασμός.</div>
<div class="vocab-example">Η λατρεία του για την τέχνη φαίνεται σε κάθε του δημιουργία.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η περιφρόνηση</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η λατρεία', definition:'Η βαθιά, σχεδόν θρησκευτική αγάπη και ο σεβασμός.', example:'Η λατρεία του για την τέχνη φαίνεται σε κάθε του δημιουργία.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η θυσία</div>
<div class="vocab-def">Η οικειοθελής παραίτηση από κάτι πολύτιμο χάριν ενός ανώτερου σκοπού.</div>
<div class="vocab-example">Κάθε αληθινή σχέση απαιτεί αμοιβαίες υποχωρήσεις και θυσίες.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Ο εγωισμός</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η θυσία', definition:'Η οικειοθελής παραίτηση από κάτι πολύτιμο χάριν ενός ανώτερου σκοπού.', example:'Κάθε αληθινή σχέση απαιτεί αμοιβαίες υποχωρήσεις και θυσίες.'}, this)">+ Dictionary</button>
</div>
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Ζωή, Δράσεις &amp; Σύνδεση</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η κόλαση</div>
<div class="vocab-def">Μεταφορικά, η κατάσταση έντονου ψυχικού πόνου ή επικίνδυνου πάθους.</div>
<div class="vocab-example">Προτίμησε μια ταραγμένη ζωή γεμάτη πάθος παρά μια βαρετή ηρεμία.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Ο παράδεισος</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η κόλαση', definition:'Μεταφορικά, η κατάσταση έντονου ψυχικού πόνου ή επικίνδυνου πάθους.', example:'Προτίμησε μια ταραγμένη ζωή γεμάτη πάθος παρά μια βαρετή ηρεμία.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η ομορφιά</div>
<div class="vocab-def">Η ποιότητα που προκαλεί αισθητική και συναισθηματική συγκίνηση.</div>
<div class="vocab-example">Η εσωτερική ομορφιά αντανακλάται στον τρόπο που συμπεριφερόμαστε.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η ασχήμια</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η ομορφιά', definition:'Η ποιότητα που προκαλεί αισθητική και συναισθηματική συγκίνηση.', example:'Η εσωτερική ομορφιά αντανακλάται στον τρόπο που συμπεριφερόμαστε.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η αγκαλιά</div>
<div class="vocab-def">Το άνοιγμα των χεριών ως σύμβολο προστασίας, ζεστασιάς και αγάπης.</div>
<div class="vocab-example">Στην αγκαλιά των αγαπημένων μας προσώπων βρίσκουμε καταφύγιο.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η απομόνωση</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η αγκαλιά', definition:'Το άνοιγμα των χεριών ως σύμβολο προστασίας, ζεστασιάς και αγάπης.', example:'Στην αγκαλιά των αγαπημένων μας προσώπων βρίσκουμε καταφύγιο.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η αμφιβολία</div>
<div class="vocab-def">Η έλλειψη βεβαιότητας για κάποιο συναίσθημα ή γεγονός.</div>
<div class="vocab-example">Οι αμφιβολίες διαλύθηκαν μόλις κοιτάχτηκαν στα μάτια.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η βεβαιότητα</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η αμφιβολία', definition:'Η έλλειψη βεβαιότητας για κάποιο συναίσθημα ή γεγονός.', example:'Οι αμφιβολίες διαλύθηκαν μόλις κοιτάχτηκαν στα μάτια.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Το πάθος</div>
<div class="vocab-def">Η δυνατή συναισθηματική ορμή που καθοδηγεί τις πράξεις μας.</div>
<div class="vocab-example">Το πάθος για τη ζωή δίνει νόημα σε κάθε μικρή στιγμή.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η ψυχρότητα</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Το πάθος', definition:'Η δυνατή συναισθηματική ορμή που καθοδηγεί τις πράξεις μας.', example:'Το πάθος για τη ζωή δίνει νόημα σε κάθε μικρή στιγμή.'}, this)">+ Dictionary</button>
</div>"""

    s1_theme_box_html = """<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Θέμα: Όταν η αγάπη γίνεται εμμονή</h3>
<p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Θα συζητήσουμε:</p>
<ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
<li>Η αφοσίωση</li>
<li>Ο έρωτας</li>
<li>Η εμμονή</li>
<li>Personal reflection</li>
</ul>
</div>"""

    s1_r1_html = """<div class="round-item"><div class="round-item-main">Στο 'Τον ίδιο το Θεό', η τραγουδίστρια δηλώνει ότι προτιμά την κόλαση με τον αγαπημένο της παρά τον παράδεισο, δείχνοντας απόλυτη <strong>αφοσίωση</strong>. Είναι αυτή η στάση απόδειξη αληθινής αγάπης ή επικίνδυνος αυτοκαταστροφικός συμβιβασμός;</div>
<div class="round-item-personal">★ Πότε ήταν η τελευταία φορά που δείξατε απόλυτη <strong>αφοσίωση</strong> σε έναν σκοπό ή ένα πρόσωπο;</div>
</div>
<div class="round-item"><div class="round-item-main">Η φράση «του έρωτα φεγγάρια μαύρα το φωτίζουν» παρουσιάζει τον <strong>έρωτα</strong> ως μια σκοτεινή αλλά μαγνητική δύναμη. Πώς επηρεάζει το ανεξέλεγκτο πάθος τις ορθολογικές μας αποφάσεις;</div>
<div class="round-item-personal">★ Πιστεύετε ότι ο <strong>έρωτας</strong> πρέπει να καθοδηγείται από τη λογική ή από το ένστικτο;</div>
</div>
<div class="round-item"><div class="round-item-main">Ο στίχος «τίποτα άλλο που να με σκοτώνει γλυκά» αποτυπώνει το λεπτό όριο όπου η αγάπη μετατρέπεται σε <strong>εμμονή</strong>. Πότε μια σχέση παύει να είναι υγιής;</div>
<div class="round-item-personal">★ Πώς προστατεύετε την προσωπική σας ανεξαρτησία όταν νιώθετε ότι αναπτύσσεται μια <strong>εμμονή</strong>;</div>
</div>
<div class="round-item"><div class="round-item-main">Η τραγουδίστρια εκφράζει μια σχεδόν θρησκευτική <strong>λατρεία</strong>, βάζοντας τον σύντροφό της ακόμα και πάνω από το θείο («Τον ίδιο το Θεό να είχα απέναντί μου...»). Γιατί οι άνθρωποι εξιδανικεύουν τους συντρόφους τους;</div>
<div class="round-item-personal">★ Έχετε νιώσει ποτέ βαθιά <strong>λατρεία</strong> για κάποιον καλλιτέχνη, μέντορα ή αγαπημένο πρόσωπο;</div>
</div>
<div class="round-item"><div class="round-item-main">Η επιλογή να «πάει στην κόλαση μαζί του» αποτελεί την έσχατη <strong>θυσία</strong> της ψυχικής της γαλήνης. Είναι η αυτοθυσία απαραίτητο στοιχείο των μεγάλων ερωτικών ιστοριών;</div>
<div class="round-item-personal">★ Ποια είναι η μεγαλύτερη <strong>θυσία</strong> που θεωρείτε λογικό να κάνει κανείς για μια σχέση;</div>
</div>
<div class="round-item"><div class="round-item-main">Η μεταφορά της <strong>κόλασης</strong> στο τραγούδι δεν αντιπροσωπεύει την τιμωρία, αλλά το τίμημα ενός έντονου, απαγορευμένου πάθους. Πώς η τέχνη μετατρέπει τον πόνο σε ομορφιά;</div>
<div class="round-item-personal">★ Προτιμάτε μια ήρεμη και προβλέψιμη ζωή ή μια περιπέτεια που μπορεί να κρύβει συναισθηματική <strong>κόλαση</strong>;</div>
</div>
<div class="round-item"><div class="round-item-main">Η ερώτηση «τόση ομορφιά από πού» υπογραμμίζει πώς η ερωτική <strong>ομορφιά</strong> αφοπλίζει τον παρατηρητή. Πώς ορίζετε την αυθεντική ομορφιά στις ανθρώπινες επαφές;</div>
<div class="round-item-personal">★ Ποιο στοιχείο χαρακτήρα θεωρείτε ότι προσδίδει τη μεγαλύτερη <strong>ομορφιά</strong> σε έναν άνθρωπο;</div>
</div>
<div class="round-item"><div class="round-item-main">Η εξομολόγηση «πόσο ανάγκη έχω από την αγκαλιά σου» αποκαλύπτει ότι η ζεστή <strong>αγκαλιά</strong> είναι η μόνη προστασία απέναντι στον έξω κόσμο. Γιατί η σωματική και συναισθηματική εγγύτητα είναι τόσο ζωτική;</div>
<div class="round-item-personal">★ Πόσο σημαντική είναι για εσάς η συναισθηματική <strong>αγκαλιά</strong> και η επιβεβαίωση στις δύσκολες στιγμές;</div>
</div>
<div class="round-item"><div class="round-item-main">Παρά την ένταση του τραγουδιού, η σιωπηλή <strong>αμφιβολία</strong> («μη με φοβάσαι») υποβόσκει στην αρχή. Πώς η ευαλωτότητα βοηθά στο να ξεπεραστούν οι φοβίες;</div>
<div class="round-item-personal">★ Πώς διαχειρίζεστε τις στιγμές που η <strong>αμφιβολία</strong> εισβάλλει στις προσωπικές σας επιλογές;</div>
</div>
<div class="round-item"><div class="round-item-main">Το εκρηκτικό ροκ ξέσπασμα του συγκροτήματος Μπλε εκφράζει το ωμό <strong>πάθος</strong> της ελληνικής ποπ-ροκ σκηνής των 90s. Τι κάνει αυτό το τραγούδι να παραμένει διαχρονικός ύμνος;</div>
<div class="round-item-personal">★ Ποια δραστηριότητα ή τέχνη πυροδοτεί το δικό σας δημιουργικό <strong>πάθος</strong>;</div>
</div>"""

    s1_r2_html = """<div class="round-item"><div class="round-item-main">Η απόλυτη <strong>αφοσίωση</strong> σε έναν έρωτα, ακόμα κι αν οδηγεί σε συναισθηματική <strong>κόλαση</strong>, προσφέρει πληρέστερη εμπειρία ζωής από μια ασφαλή αλλά συμβατική σχέση. Ας συζητήσουμε.</div>
</div>
<div class="round-item"><div class="round-item-main">Η εξιδανίκευση και η <strong>λατρεία</strong> του συντρόφου στη σύγχρονη κουλτούρα αποτελούν συχνά μορφή προβολής των δικών μας ελλείψεων παρά αναγνώριση της πραγματικής <strong>ομορφιάς</strong> του άλλου. Ποια είναι η γνώμη σας;</div>
</div>
<div class="round-item"><div class="round-item-main">Όταν το <strong>πάθος</strong> υπερισχύει της λογικής, η <strong>θυσία</strong> των προσωπικών ορίων γίνεται αναπόφευκτη. Υπερασπιστείτε ή αντιταχθείτε.</div>
</div>"""

    s1_lf_html = """<div style="background: var(--cream); border-left: 4px solid var(--indigo); padding: 1.5rem; border-radius: 0 16px 16px 0; margin-bottom: 1.5rem;">
<h3 style="margin-top: 0; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--indigo);">Γλωσσική εστίαση: Η Υποτακτική με το 'να' σε υποθετικές και εναντιωματικές εκφράσεις</h3>
<p style="font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1rem;">Στο τραγούδι 'Τον ίδιο το Θεό', η υποτακτική με το μόριο 'να' χρησιμοποιείται με υποθετική/εναντιωματική σημασία (<em>"Τον ίδιο το Θεό να είχα απέναντί μου..."</em>), εκφράζοντας την απόλυτη αποφασιστικότητα και το πάθος.</p>
<strong style="font-size: 0.85rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Ας κάνουμε εξάσκηση — Τρία Παραδείγματα:</strong>
<ul style="margin: 0; padding-left: 1.2rem; color: var(--indigo);">
<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">Ακόμα κι αν είχα όλο τον κόσμο στα χέρια μου, να ξέρεις πως πάλι εσένα θα διάλεγα.</li>
<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">Να μου ζητούσε να τα παρατήσω όλα, θα το έκανα χωρίς δεύτερη σκέψη.</li>
<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">Όση κούραση κι αν έχω, να με φωνάξει, θα τρέξω αμέσως κοντά του.</li>
</ul>
</div>"""

    s1_fc_html = """<div style="background: var(--cream); border: 2px dashed var(--indigo); padding: 1.5rem; border-radius: 16px; display: flex; align-items: flex-start; gap: 1rem;">
<span style="font-size: 2rem;">🎭</span>
<div>
<p style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500;">«Δίλημμα αφοσίωσης»: Δύο φίλοι συζητούν για μια σχέση που έχει γίνει υπερβολικά απορροφητική και εμμονική. Ο ένας υποστηρίζει ότι το απόλυτο πάθος αξίζει κάθε ρίσκο, ενώ ο άλλος τονίζει την ανάγκη για προσωπική αυτονομία και λογική.</p>
</div>
</div>"""

    s1_mistakes_html = """<div class="mistake-item">
<span class="mistake-wrong">Προτιμώ να πάω στην κόλαση <span class="mistake-highlight">από</span> τον παράδεισο</span>
<span class="mistake-arrow">→</span>
<span class="mistake-right">Προτιμώ να πάω στην κόλαση παρά στον παράδεισο</span>
<span class="mistake-note-text">(Με το ρήμα 'προτιμώ' χρησιμοποιούμε 'παρά' για τη σύγκριση, όχι 'από'.)</span>
</div>
<div class="mistake-item">
<span class="mistake-wrong">Έχω ανάγκη <span class="mistake-highlight">για</span> την αγκαλιά σου</span>
<span class="mistake-arrow">→</span>
<span class="mistake-right">Έχω ανάγκη από την αγκαλιά σου</span>
<span class="mistake-note-text">(Η έκφραση 'έχω ανάγκη' συντάσσεται με την πρόθεση 'από' + αιτιατική.)</span>
</div>
<div class="mistake-item">
<span class="mistake-wrong">Αυτό το τραγούδι μιλάει για την εμμονή <span class="mistake-highlight">σε</span> ένα πρόσωπο</span>
<span class="mistake-arrow">→</span>
<span class="mistake-right">Αυτό το τραγούδι μιλάει για την εμμονή με ένα πρόσωπο</span>
<span class="mistake-note-text">(Με τη λέξη 'εμμονή' χρησιμοποιούμε την πρόθεση 'με'.)</span>
</div>"""

    # Song 2 Data
    s2_vocab_html = """<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Ο φόβος</div>
<div class="vocab-def">Το συναίσθημα της ανησυχίας μπροστά στον κίνδυνο ή την απώλεια.</div>
<div class="vocab-example">Ο φόβος της απόρριψης συχνά μας εμποδίζει να εκφράσουμε τα συναισθήματά μας.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Το θάρρος</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Ο φόβος', definition:'Το συναίσθημα της ανησυχίας μπροστά στον κίνδυνο ή την απώλεια.', example:'Ο φόβος της απόρριψης συχνά μας εμποδίζει να εκφράσουμε τα συναισθήματά μας.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η ευαλωτότητα</div>
<div class="vocab-def">Η κατάσταση κατά την οποία εκθέτουμε τα συναισθήματά μας με ρίσκο να πληγωθούμε.</div>
<div class="vocab-example">Η αληθινή οικειότητα απαιτεί να αποδεχτούμε την ευαλωτότητά μας.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η οχύρωση</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η ευαλωτότητα', definition:'Η κατάσταση κατά την οποία εκθέτουμε τα συναισθήματά μας με ρίσκο να πληγωθούμε.', example:'Η αληθινή οικειότητα απαιτεί να αποδεχτούμε την ευαλωτότητά μας.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η απόσταση</div>
<div class="vocab-def">Το συναισθηματικό ή φυσικό κενό ανάμεσα σε δύο ανθρώπους.</div>
<div class="vocab-example">Η συναισθηματική απόσταση μπορεί να υφίσταται ακόμα κι όταν βρισκόμαστε στον ίδιο χώρο.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η εγγύτητα</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η απόσταση', definition:'Το συναισθηματικό ή φυσικό κενό ανάμεσα σε δύο ανθρώπους.', example:'Η συναισθηματική απόσταση μπορεί να υφίσταται ακόμα κι όταν βρισκόμαστε στον ίδιο χώρο.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Το παράδοξο</div>
<div class="vocab-def">Μια κατάσταση ή πρόταση που εμπεριέχει αντιφατικά στοιχεία.</div>
<div class="vocab-example">Το να νιώθεις κάποιον «πολύ κοντά αλλά και πολύ μακριά» είναι το παράδοξο της αγάπης.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η συνέπεια</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Το παράδοξο', definition:'Μια κατάσταση ή πρόταση που εμπεριέχει αντιφατικά στοιχεία.', example:'Το να νιώθεις κάποιον «πολύ κοντά αλλά και πολύ μακριά» είναι το παράδοξο της αγάπης.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Το πάθος</div>
<div class="vocab-def">Η έντονη και ανεξέλεγκτη συναισθηματική ορμή.</div>
<div class="vocab-example">Το πάθος μπορεί να φέρει τους ανθρώπους κοντά αλλά και να τους αναστατώσει.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η απάθεια</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Το πάθος', definition:'Η έντονη και ανεξέλεγκτη συναισθηματική ορμή.', example:'Το πάθος μπορεί να φέρει τους ανθρώπους κοντά αλλά και να τους αναστατώσει.'}, this)">+ Dictionary</button>
</div>
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Ζωή, Δράσεις &amp; Σύνδεση</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η λήθη</div>
<div class="vocab-def">Η κατάσταση της λήθης, η προσπάθεια να διαγράψει κανείς τις αναμνήσεις.</div>
<div class="vocab-example">Αναζητούσε τη λήθη σβήνοντας τα παλιά γράμματα και τις φωτογραφίες.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η μνήμη</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η λήθη', definition:'Η κατάσταση της λήθης, η προσπάθεια να διαγράψει κανείς τις αναμνήσεις.', example:'Αναζητούσε τη λήθη σβήνοντας τα παλιά γράμματα και τις φωτογραφίες.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η αλλαγή</div>
<div class="vocab-def">Η διαδικασία κατά την οποία ένα πρόσωπο ή μια κατάσταση γίνεται διαφορετική.</div>
<div class="vocab-example">Η εμπειρία ενός μεγάλου έρωτα φέρνει βαθιά εσωτερική αλλαγή.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η στασιμότητα</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η αλλαγή', definition:'Η διαδικασία κατά την οποία ένα πρόσωπο ή μια κατάσταση γίνεται διαφορετική.', example:'Η εμπειρία ενός μεγάλου έρωτα φέρνει βαθιά εσωτερική αλλαγή.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η εξομολόγηση</div>
<div class="vocab-def">Η ειλικρινής φανέρωση κρυφών σκέψεων ή συναισθημάτων.</div>
<div class="vocab-example">Η εξομολόγηση των φόβων μας ελαφραίνει το βάρος της ψυχής.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η απόκρυψη</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η εξομολόγηση', definition:'Η ειλικρινής φανέρωση κρυφών σκέψεων ή συναισθημάτων.', example:'Η εξομολόγηση των φόβων μας ελαφραίνει το βάρος της ψυχής.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η φυγή</div>
<div class="vocab-def">Η πράξη της απομάκρυνσης από μια δύσκολη ή συναισθηματικά φορτισμένη κατάσταση.</div>
<div class="vocab-example">Το «σ' αγαπώ και φεύγω» εκφράζει την επιθυμία για φυγή μπροστά στην ένταση.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η παραμονή</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η φυγή', definition:'Η πράξη της απομάκρυνσης από μια δύσκολη ή συναισθηματικά φορτισμένη κατάσταση.', example:'Το «σ\\' αγαπώ και φεύγω» εκφράζει την επιθυμία για φυγή μπροστά στην ένταση.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Η οικειότητα</div>
<div class="vocab-def">Η βαθιά συναισθηματική σύνδεση και αμοιβαία εμπιστοσύνη.</div>
<div class="vocab-example">Η αληθινή οικειότητα χτίζεται με τον χρόνο και την αμοιβαία κατανόηση.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Αντίθετο:</strong> <span class="vocab-opp-word" style="font-weight: 600;">Η ξενικότητα</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'Η οικειότητα', definition:'Η βαθιά συναισθηματική σύνδεση και αμοιβαία εμπιστοσύνη.', example:'Η αληθινή οικειότητα χτίζεται με τον χρόνο και την αμοιβαία κατανόηση.'}, this)">+ Dictionary</button>
</div>"""

    s2_listening_html = """<p style="white-space: pre-wrap; font-style: italic; margin-bottom: 0;">Μέσα στα <input type="text" class="lyrics-gap-input" data-answer="μαλλιά" placeholder="..." oninput="COSY.checkGap(this)" style="border: none; border-bottom: 2px dashed var(--border); background: transparent; width: 66px; text-align: center; font-weight: bold; color: var(--indigo); outline: none; padding: 0 4px; font-family: inherit; font-size: inherit; transition: all 0.2s ease;"> σου πετάω<br>Τις στιγμές μου μεθάω<br>Σ' αγαπώ και φεύγω<br><br>Πάνω στα δυο χέρια σου λιώνω<br>Ένα <input type="text" class="lyrics-gap-input" data-answer="στίχο" placeholder="..." oninput="COSY.checkGap(this)" style="border: none; border-bottom: 2px dashed var(--border); background: transparent; width: 60px; text-align: center; font-weight: bold; color: var(--indigo); outline: none; padding: 0 4px; font-family: inherit; font-size: inherit; transition: all 0.2s ease;"> σκοτώνω<br>Πάρε με μαζί σου<br><br>Είσαι πολύ <input type="text" class="lyrics-gap-input" data-answer="κοντά" placeholder="..." oninput="COSY.checkGap(this)" style="border: none; border-bottom: 2px dashed var(--border); background: transparent; width: 60px; text-align: center; font-weight: bold; color: var(--indigo); outline: none; padding: 0 4px; font-family: inherit; font-size: inherit; transition: all 0.2s ease;">,<br>Είσαι πολύ <input type="text" class="lyrics-gap-input" data-answer="μακριά" placeholder="..." oninput="COSY.checkGap(this)" style="border: none; border-bottom: 2px dashed var(--border); background: transparent; width: 66px; text-align: center; font-weight: bold; color: var(--indigo); outline: none; padding: 0 4px; font-family: inherit; font-size: inherit; transition: all 0.2s ease;"><br><br>Φοβάμαι, φοβάμαι<br>Φοβάμαι, μην ακούς τι λέω<br><br>Σβήνω τ' όνομα σου και σβήνω<br>Τη <input type="text" class="lyrics-gap-input" data-answer="ψυχή" placeholder="..." oninput="COSY.checkGap(this)" style="border: none; border-bottom: 2px dashed var(--border); background: transparent; width: 60px; text-align: center; font-weight: bold; color: var(--indigo); outline: none; padding: 0 4px; font-family: inherit; font-size: inherit; transition: all 0.2s ease;"> μου αφήνω<br>Σε φιλιά που καίνε<br>Κοίτα πόσο έχω αλλάξει<br>Σα Θεός έχω στάξει<br>Κυριακή ο χρόνος<br><span class="lyrics-disclaimer" style="display: block; margin-top: 1.5rem; font-size: 0.8rem; color: var(--muted); border-top: 1px solid var(--border); padding-top: 0.75rem; font-family: 'Nunito', sans-serif; font-style: normal;">Lyrics extracted from <strong>Genius platform</strong> and used only for educational purposes.</span></p>"""

    s2_r1_html = """<div class="round-item"><div class="round-item-main">Στο 'Φοβάμαι', η επανάληψη της λέξης αποκαλύπτει τον βαθύ <strong>φόβο</strong> απέναντι στα ίδια τα συναισθήματα («φοβάμαι, μην ακούς τι λέω»). Γιατί ο φόβος της συναισθηματικής έκθεσης μας κάνει να οπισθοχωρούμε;</div>
<div class="round-item-personal">★ Πότε ήταν η τελευταία φορά που νιώσατε <strong>φόβο</strong> μπροστά σε μια σημαντική εξομολόγηση;</div>
</div>
<div class="round-item"><div class="round-item-main">Η κραυγή «μην ακούς τι λέω» δείχνει μια απόγνωση και μια τρωτή <strong>ευαλωτότητα</strong>. Πώς μπορούμε να προστατεύσουμε τον εαυτό μας χωρίς να κλειστούμε στον εαυτό μας;</div>
<div class="round-item-personal">★ Θεωρείτε την συναισθηματική <strong>ευαλωτότητα</strong> αδυναμία ή ένδειξη εσωτερικού θάρρους;</div>
</div>
<div class="round-item"><div class="round-item-main">Ο εμβληματικός στίχος «είσαι πολύ κοντά, είσαι πολύ μακριά» αποτυπώνει την ψυχική <strong>απόσταση</strong> ανάμεσα σε δύο ανθρώπους. Πώς εξηγείται να νιώθεις απομονωμένος δίπλα στον άνθρωπο που αγαπάς;</div>
<div class="round-item-personal">★ Έχετε βιώσει ποτέ συναισθηματική <strong>απόσταση</strong> σε μια σχέση ενώ βρίσκεστε στον ίδιο χώρο;</div>
</div>
<div class="round-item"><div class="round-item-main">Αυτή η ταυτόχρονη παρουσία και απουσία δημιουργεί ένα συναισθηματικό <strong>παράδοξο</strong>. Πώς διαχειρίζεστε τις αντιφάσεις στις προσωπικές σας σχέσεις;</div>
<div class="round-item-personal">★ Ποιο είναι το μεγαλύτερο <strong>παράδοξο</strong> που έχετε παρατηρήσει στις ανθρώπινες συμπεριφορές;</div>
</div>
<div class="round-item"><div class="round-item-main">Η φράση «τη ψυχή μου αφήνω σε φιλιά που καίνε» περιγράφει ένα ανεξέλεγκτο <strong>πάθος</strong>. Μπορεί ένα τέτοιο πάθος να διατηρηθεί στον χρόνο χωρίς να κάψει τους πρωταγωνιστές;</div>
<div class="round-item-personal">★ Πώς ισορροπείτε ανάμεσα στο αυθόρμητο <strong>πάθος</strong> και τη μακροπρόθεσμη σταθερότητα;</div>
</div>
<div class="round-item"><div class="round-item-main">Η ενέργεια «σβήνω τ' όνομά σου» δείχνει την προσπάθεια για αναζήτηση <strong>λήθης</strong>. Είναι εφικτό να διαγράψουμε αναμνήσεις που σημάδεψαν την ψυχή μας;</div>
<div class="round-item-personal">★ Ποια μέθοδο χρησιμοποιείτε όταν θέλετε να προχωρήσετε μπροστά και να βρείτε <strong>λήθη</strong> από μια απογοήτευση;</div>
</div>
<div class="round-item"><div class="round-item-main">Η διαπίστωση «κοίτα πόσο έχω αλλάξει» φανερώνει τη βαθιά εσωτερική <strong>αλλαγή</strong> που προκαλεί ένας έντονος δεσμός. Με ποιους τρόπους μάς μεταμορφώνουν οι σημαντικές σχέσεις στη ζωή μας;</div>
<div class="round-item-personal">★ Ποια είναι η πιο θετική <strong>αλλαγή</strong> που έχετε δει στον χαρακτήρα σας τα τελευταία χρόνια;</div>
</div>
<div class="round-item"><div class="round-item-main">Ο στίχος «σ' αγαπώ και φεύγω» αποτελεί μια παράδοξη <strong>εξομολόγηση</strong> αγάπης και φόβου μαζί. Γιατί η ειλικρίνεια απαιτεί τόση γενναιότητα;</div>
<div class="round-item-personal">★ Πόσο εύκολο είναι για εσάς να κάνετε μια ειλικρινή <strong>εξομολόγηση</strong> συναισθημάτων όταν διακυβεύονται πολλά;</div>
</div>
<div class="round-item"><div class="round-item-main">Η παρόρμηση για <strong>φυγή</strong> («σ' αγαπώ και φεύγω») εκδηλώνεται όταν η συναισθηματική πίεση γίνεται αβάσταχτη. Είναι η φυγή πάντα αυτοπροστασία ή μερικές φορές είναι δειλία;</div>
<div class="round-item-personal">★ Έχετε νιώσει ποτέ την ανάγκη για άμεση <strong>φυγή</strong> από μια κατάσταση που σας πιέζει;</div>
</div>
<div class="round-item"><div class="round-item-main">Παρά την αμφιθυμία, η επιθυμία «πάρε με μαζί σου» δείχνει την αναζήτηση για αυθεντική <strong>οικειότητα</strong>. Τι συνιστά τη βάση μιας βαθιάς και αληθινής οικειότητας;</div>
<div class="round-item-personal">★ Ποιες συνήθειες βοηθούν στη διατήρηση της συναισθηματικής <strong>οικειότητας</strong> σε μια μακροχρόνια σχέση;</div>
</div>"""

    s2_r2_html = """<div class="round-item"><div class="round-item-main">Η συναισθηματική <strong>απόσταση</strong> («είσαι πολύ κοντά, είσαι πολύ μακριά») είναι πιο καταστροφική για μια σχέση από τη φυσική χιλιομετρική απόσταση. Ας συζητήσουμε.</div>
</div>
<div class="round-item"><div class="round-item-main">Ο <strong>φόβος</strong> της ευαλωτότητας στη σύγχρονη εποχή οδηγεί συχνά στη <strong>φυγή</strong> πριν προλάβει να αναπτυχθεί η αυθεντική οικειότητα. Ποια είναι η γνώμη σας;</div>
</div>
<div class="round-item"><div class="round-item-main">Η προσπάθεια για <strong>λήθη</strong> μέσω της διαγραφής των αναμνήσεων («σβήνω τ' όνομά σου») είναι μια ψευδαίσθηση, καθώς οι εμπειρίες μας διαμορφώνουν ανεξίτηλα. Υπερασπιστείτε ή αντιταχθείτε.</div>
</div>"""

    s2_lf_html = """<div style="background: var(--cream); border-left: 4px solid var(--indigo); padding: 1.5rem; border-radius: 0 16px 16px 0; margin-bottom: 1.5rem;">
<h3 style="margin-top: 0; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--indigo);">Γλωσσική εστίαση: Η χρήση της Υποτακτικής με το 'μην' μετά από ρήματα φόβου</h3>
<p style="font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1rem;">Στο τραγούδι 'Φοβάμαι', το ρήμα 'φοβάμαι' συνδέεται με την υποτακτική και το αρνητικό μόριο 'μην' (<em>"Φοβάμαι, μην ακούς τι λέω..."</em>) για να δηλώσει την ανησυχία ή την επιθυμία να αποτραπεί κάτι.</p>
<strong style="font-size: 0.85rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Ας κάνουμε εξάσκηση — Τρία Παραδείγματα:</strong>
<ul style="margin: 0; padding-left: 1.2rem; color: var(--indigo);">
<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">Φοβάμαι μην παρεξηγήσεις τα λόγια μου, γι' αυτό προτιμώ να σιωπήσω.</li>
<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">Αγωνιώ μην τυχόν χάσουμε αυτή τη σπουδαία ευκαιρία.</li>
<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">Φοβάται μην πληγωθεί ξανά και γι' αυτό κρατάει αποστάσεις.</li>
</ul>
</div>"""

    s2_fc_html = """<div style="background: var(--cream); border: 2px dashed var(--indigo); padding: 1.5rem; border-radius: 16px; display: flex; align-items: flex-start; gap: 1rem;">
<span style="font-size: 2rem;">🎭</span>
<div>
<p style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500;">«Το παράδοξο της απόστασης»: Δύο φίλοι συζητούν για το τι σημαίνει να νιώθεις «πολύ κοντά αλλά και πολύ μακριά» από έναν άνθρωπο. Παίξτε έναν διάλογο όπου ο ένας προσπαθεί να εξηγήσει τους φόβους του και ο άλλος τον ενθαρρύνει να ανοιχτεί.</p>
</div>
</div>"""

    s2_theme_box_html = """<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Θέμα: Φόβος, Πάθος &amp; Συναισθηματικές Αποστάσεις</h3>
<p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Θα συζητήσουμε:</p>
<ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
<li>Ο φόβος</li>
<li>Η ευαλωτότητα</li>
<li>Η απόσταση</li>
<li>Personal reflection</li>
</ul>
</div>"""

    s2_mistakes_html = """<div class="mistake-item">
<span class="mistake-wrong">Φοβάμαι <span class="mistake-highlight">για</span> το σκοτάδι</span>
<span class="mistake-arrow">→</span>
<span class="mistake-right">Φοβάμαι το σκοτάδι</span>
<span class="mistake-note-text">(Το ρήμα 'φοβάμαι' συντάσσεται άμεσα με αιτιατική χωρίς την πρόθεση 'για'.)</span>
</div>
<div class="mistake-item">
<span class="mistake-wrong">Είμαι πολύ κοντά <span class="mistake-highlight">από</span> μένα</span>
<span class="mistake-arrow">→</span>
<span class="mistake-right">Είμαι πολύ κοντά σε μένα</span>
<span class="mistake-note-text">(Με το επίρρημα 'κοντά' χρησιμοποιούμε την πρόθεση 'σε'.)</span>
</div>
<div class="mistake-item">
<span class="mistake-wrong">Φοβάμαι <span class="mistake-highlight">να μην</span> χάσω την ελπίδα</span>
<span class="mistake-arrow">→</span>
<span class="mistake-right">Φοβάμαι μήπως χάσω την ελπίδα</span>
<span class="mistake-note-text">(Μετά από ρήματα φόβου, η σύνδεση γίνεται πιο φυσικά με το 'μήπως' ή 'μην'.)</span>
</div>"""

    return {
        "s1": {
            "theme_box": s1_theme_box_html,
            "vocab": s1_vocab_html,
            "r1": s1_r1_html,
            "r2": s1_r2_html,
            "lf": s1_lf_html,
            "fc": s1_fc_html,
            "mistakes": s1_mistakes_html
        },
        "s2": {
            "theme_box": s2_theme_box_html,
            "vocab": s2_vocab_html,
            "listening": s2_listening_html,
            "r1": s2_r1_html,
            "r2": s2_r2_html,
            "lf": s2_lf_html,
            "fc": s2_fc_html,
            "mistakes": s2_mistakes_html
        }
    }

def remediate_mple():
    dir_path = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/el/mple-challenge"
    index_path = os.path.join(dir_path, "index.html")
    s1_path = os.path.join(dir_path, "to-idio-to-theo.html")
    s2_path = os.path.join(dir_path, "fovamai.html")

    data = get_mple_data()

    # 1. Remediate index.html
    with open(index_path, "r", encoding="utf-8") as f:
        index_soup = BeautifulSoup(f.read(), "html.parser")

    options = index_soup.find_all("vim-choice-option")
    if len(options) >= 2:
        # Option 0 (Ton Idio To Theo)
        opt0 = options[0]
        opt0_theme = opt0.find("div", class_="theme-box")
        if opt0_theme:
            opt0_theme.replace_with(BeautifulSoup(data["s1"]["theme_box"], "html.parser"))
        v_grid = opt0.find("div", class_="vocab-grid-10")
        if v_grid:
            v_grid.replace_with(BeautifulSoup(f'<div class="vocab-grid-10">\n{data["s1"]["vocab"]}\n</div>', "html.parser"))
        r1_div = opt0.find("div", class_="round-1")
        if r1_div:
            r1_div.replace_with(BeautifulSoup(f'<div class="round-1" style="margin-bottom: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>\n{data["s1"]["r1"]}\n</div>', "html.parser"))
        r2_div = opt0.find("div", class_="round-2")
        if r2_div:
            r2_div.replace_with(BeautifulSoup(f'<div class="round-2" style="margin-top: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>\n{data["s1"]["r2"]}\n</div>', "html.parser"))
        lf_block = opt0.find("div", id=lambda x: x and "lang-focus" in x)
        if lf_block:
            body = lf_block.find("div", class_="round-body")
            if body:
                body.string = ""
                body.append(BeautifulSoup(data["s1"]["lf"], "html.parser"))
        fc_block = opt0.find("div", id=lambda x: x and "final-challenge" in x)
        if fc_block:
            body = fc_block.find("div", class_="round-body")
            if body:
                body.string = ""
                body.append(BeautifulSoup(data["s1"]["fc"], "html.parser"))
        m_block = opt0.find("div", class_="mistake-block")
        if m_block:
            m_body = m_block.find("div", class_="mistake-body")
            if m_body:
                m_body.string = ""
                m_body.append(BeautifulSoup(data["s1"]["mistakes"], "html.parser"))

        # Option 1 (Fovamai)
        opt1 = options[1]
        opt1_theme = opt1.find("div", class_="theme-box")
        if opt1_theme:
            opt1_theme.replace_with(BeautifulSoup(data["s2"]["theme_box"], "html.parser"))
        v_grid1 = opt1.find("div", class_="vocab-grid-10")
        if v_grid1:
            v_grid1.replace_with(BeautifulSoup(f'<div class="vocab-grid-10">\n{data["s2"]["vocab"]}\n</div>', "html.parser"))
        lyrics_p = opt1.find("div", class_="lyrics-container").find("p")
        if lyrics_p:
            lyrics_p.replace_with(BeautifulSoup(data["s2"]["listening"], "html.parser"))
        r1_div1 = opt1.find("div", class_="round-1")
        if r1_div1:
            r1_div1.replace_with(BeautifulSoup(f'<div class="round-1" style="margin-bottom: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>\n{data["s2"]["r1"]}\n</div>', "html.parser"))
        r2_div1 = opt1.find("div", class_="round-2")
        if r2_div1:
            r2_div1.replace_with(BeautifulSoup(f'<div class="round-2" style="margin-top: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>\n{data["s2"]["r2"]}\n</div>', "html.parser"))
        lf_block1 = opt1.find("div", id=lambda x: x and "lang-focus" in x)
        if lf_block1:
            body = lf_block1.find("div", class_="round-body")
            if body:
                body.string = ""
                body.append(BeautifulSoup(data["s2"]["lf"], "html.parser"))
        fc_block1 = opt1.find("div", id=lambda x: x and "final-challenge" in x)
        if fc_block1:
            body = fc_block1.find("div", class_="round-body")
            if body:
                body.string = ""
                body.append(BeautifulSoup(data["s2"]["fc"], "html.parser"))
        m_block1 = opt1.find("div", class_="mistake-block")
        if m_block1:
            m_body = m_block1.find("div", class_="mistake-body")
            if m_body:
                m_body.string = ""
                m_body.append(BeautifulSoup(data["s2"]["mistakes"], "html.parser"))

        with open(index_path, "w", encoding="utf-8") as f:
            f.write(str(index_soup))
        print(f"Updated {index_path}")

    # 2. Remediate to-idio-to-theo.html (Standalone Song 1)
    with open(s1_path, "r", encoding="utf-8") as f:
        s1_soup = BeautifulSoup(f.read(), "html.parser")

    s1_theme = s1_soup.find("div", class_="theme-box")
    if s1_theme:
        s1_theme.replace_with(BeautifulSoup(data["s1"]["theme_box"], "html.parser"))
    v_grid_s1 = s1_soup.find("div", class_="vocab-grid-10")
    if v_grid_s1:
        v_grid_s1.replace_with(BeautifulSoup(f'<div class="vocab-grid-10">\n{data["s1"]["vocab"]}\n</div>', "html.parser"))
    r1_s1 = s1_soup.find("div", class_="round-1")
    if r1_s1:
        r1_s1.replace_with(BeautifulSoup(f'<div class="round-1" style="margin-bottom: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>\n{data["s1"]["r1"]}\n</div>', "html.parser"))
    r2_s1 = s1_soup.find("div", class_="round-2")
    if r2_s1:
        r2_s1.replace_with(BeautifulSoup(f'<div class="round-2" style="margin-top: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>\n{data["s1"]["r2"]}\n</div>', "html.parser"))
    lf_s1 = s1_soup.find("div", id="lang-focus")
    if lf_s1:
        body = lf_s1.find("div", class_="round-body")
        if body:
            body.string = ""
            body.append(BeautifulSoup(data["s1"]["lf"], "html.parser"))
    fc_s1 = s1_soup.find("div", id="final-challenge")
    if fc_s1:
        body = fc_s1.find("div", class_="round-body")
        if body:
            body.string = ""
            body.append(BeautifulSoup(data["s1"]["fc"], "html.parser"))
    m_s1 = s1_soup.find("div", class_="mistake-block")
    if m_s1:
        m_body = m_s1.find("div", class_="mistake-body")
        if m_body:
            m_body.string = ""
            m_body.append(BeautifulSoup(data["s1"]["mistakes"], "html.parser"))

    with open(s1_path, "w", encoding="utf-8") as f:
        f.write(str(s1_soup))
    print(f"Updated {s1_path}")

    # 3. Remediate fovamai.html (Standalone Song 2)
    with open(s2_path, "r", encoding="utf-8") as f:
        s2_soup = BeautifulSoup(f.read(), "html.parser")

    s2_theme = s2_soup.find("div", class_="theme-box")
    if s2_theme:
        s2_theme.replace_with(BeautifulSoup(data["s2"]["theme_box"], "html.parser"))
    v_grid_s2 = s2_soup.find("div", class_="vocab-grid-10")
    if v_grid_s2:
        v_grid_s2.replace_with(BeautifulSoup(f'<div class="vocab-grid-10">\n{data["s2"]["vocab"]}\n</div>', "html.parser"))
    lyrics_p_s2 = s2_soup.find("div", class_="lyrics-container").find("p")
    if lyrics_p_s2:
        lyrics_p_s2.replace_with(BeautifulSoup(data["s2"]["listening"], "html.parser"))
    r1_s2 = s2_soup.find("div", class_="round-1")
    if r1_s2:
        r1_s2.replace_with(BeautifulSoup(f'<div class="round-1" style="margin-bottom: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>\n{data["s2"]["r1"]}\n</div>', "html.parser"))
    r2_s2 = s2_soup.find("div", class_="round-2")
    if r2_s2:
        r2_s2.replace_with(BeautifulSoup(f'<div class="round-2" style="margin-top: 2rem;">\n<h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>\n{data["s2"]["r2"]}\n</div>', "html.parser"))
    lf_s2 = s2_soup.find("div", id="lang-focus")
    if lf_s2:
        body = lf_s2.find("div", class_="round-body")
        if body:
            body.string = ""
            body.append(BeautifulSoup(data["s2"]["lf"], "html.parser"))
    fc_s2 = s2_soup.find("div", id="final-challenge")
    if fc_s2:
        body = fc_s2.find("div", class_="round-body")
        if body:
            body.string = ""
            body.append(BeautifulSoup(data["s2"]["fc"], "html.parser"))
    m_s2 = s2_soup.find("div", class_="mistake-block")
    if m_s2:
        m_body = m_s2.find("div", class_="mistake-body")
        if m_body:
            m_body.string = ""
            m_body.append(BeautifulSoup(data["s2"]["mistakes"], "html.parser"))

    with open(s2_path, "w", encoding="utf-8") as f:
        f.write(str(s2_soup))
    print(f"Updated {s2_path}")

if __name__ == "__main__":
    remediate_mple()

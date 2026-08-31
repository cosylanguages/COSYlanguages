#!/usr/bin/env python3
"""
Generator script for COSYlanguages Greek Grammar Manual (Level B1) Interactive Web Edition.
Generates manuals/el/grammar/b1/index.html, part-N.html chapter hubs, assets, and topic HTML pages in manuals/el/grammar/b1/topics/.
100% Monolingual Greek.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/el/grammar/b1"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Γραμματική Ελληνικής Γλώσσας Επίπεδο B1 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --blue-900: #0f2c59;
  --blue-800: #183d7a;
  --blue-700: #225299;
  --blue-600: #2d68c4;
  --blue-100: #e8f0fe;
  --blue-050: #f4f7fd;

  --ink: #131c2b;
  --ink-soft: #3c4c5e;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e3e7f0;

  --grammar-subject: #2563eb;
  --grammar-verb: #16a34a;
  --grammar-object: #d97706;

  --why-bg: #fef3c7;
  --why-ink: #78350f;

  --native-bg: #f3e8ff;
  --native-ink: #581c87;

  --mistake-bg: #fef2f2;
  --mistake-ink: #991b1b;

  --mint-bg: #dcfce7;
  --mint-ink: #14532d;

  --radius-s: 8px;
  --radius-m: 14px;
  --radius-l: 20px;
  --shadow-card: 0 2px 8px rgba(15,44,89,.06);
  --shadow-hover: 0 8px 24px rgba(15,44,89,.12);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
}
a { color: var(--blue-700); text-decoration: none; transition: color .15s ease; }
a:hover { color: var(--blue-900); }

.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

/* Topbar */
.topbar {
  position: sticky; top: 0; z-index: 50; background: var(--blue-900);
  color: #fff; border-bottom: 1px solid rgba(255,255,255,.1);
}
.topbar-inner {
  max-width: 1100px; margin: 0 auto; padding: 12px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-weight: 800; font-family: var(--font-display); }
.brand-mark { background: #fff; color: var(--blue-900); width: 30px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #d0e1fd; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.18); color: #fff; }

/* Page Head */
.page-head { padding: 32px 0 16px; }
.eyebrow {
  display: inline-block; font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--blue-700); background: var(--blue-100);
  padding: 4px 12px; border-radius: 99px; margin-bottom: 12px;
}
.page-head h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

.outcome-banner { background: var(--mint-bg); border-left: 4px solid #22c55e; padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--mint-ink); font-weight: 500; }
.box { border-radius: var(--radius-m); padding: 20px; margin: 20px 0; border: 1px solid transparent; }
.box h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 16.5px; font-weight: 800; }
.box.why { background: var(--why-bg); border-color: #fcd34d; color: var(--why-ink); }
.box.native { background: var(--native-bg); border-color: #d8b4fe; color: var(--native-ink); }
.box.rule-box { background: var(--blue-050); border: 1px solid var(--blue-100); border-left: 4px solid var(--blue-600); }

.table-wrap { overflow-x: auto; margin: 20px 0; border-radius: var(--radius-m); border: 1px solid var(--line); box-shadow: var(--shadow-card); }
table { width: 100%; border-collapse: collapse; background: var(--panel); font-size: 15px; }
thead th { background: var(--blue-900); color: #fff; text-align: left; padding: 12px 16px; font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; }
tbody td { padding: 12px 16px; border-bottom: 1px solid var(--line); }

.mistakes { margin: 24px 0; }
.mistakes .m-title { font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--mistake-ink); margin-bottom: 12px; }
.mflip { background: var(--mistake-bg); border: 1px solid #fca5a5; border-radius: var(--radius-s); padding: 14px 18px; margin-bottom: 10px; cursor: pointer; }
.mflip .wrong-line { display: flex; gap: 8px; color: var(--mistake-ink); font-size: 15.5px; }
.mflip .wrong-text { text-decoration: line-through; }
.mflip .right-line { display: none; gap: 8px; color: var(--mint-ink); font-weight: 700; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #fca5a5; }
.mflip.flipped .right-line { display: flex; }
.mflip .hint { font-family: var(--font-mono); font-size: 11px; color: #b91c1c; margin-top: 4px; display: block; }
.mflip.flipped .hint { display: none; }

.checklist { background: var(--mint-bg); border: 1px solid #86efac; border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--mint-ink); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; cursor: pointer; }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--blue-100); color: var(--blue-800); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--blue-050); border-left: 3px solid var(--blue-600); padding: 10px 14px; }
.qexplain.show { display: block; }

.parts-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.part-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.part-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--blue-600); }
.part-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--blue-900); color: #d0e1fd; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages B1 Γραμματική Ελληνικής Γλώσσας · Διαδραστικότητα
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-el-b1-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     items.forEach(function(item, i){
       var input = item.querySelector('input');
       if(stored[i]){ item.classList.add('done'); input.checked = true; }
       item.addEventListener('click', function(e){
         if(e.target !== input){ input.checked = !input.checked; }
         item.classList.toggle('done', input.checked);
         stored[i] = input.checked;
         localStorage.setItem(key, JSON.stringify(stored));
       });
     });
   });
 }
 function initMistakeFlip(){
   document.querySelectorAll('.mflip').forEach(function(card){
     card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
   });
 }
 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Σκορ: ' + score + ' / ' + data.length; }
     panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
       var opts = qEl.querySelectorAll('.qopt');
       var explain = qEl.querySelector('.qexplain');
       var qLocked = false;
       opts.forEach(function(optEl, oi){
         optEl.addEventListener('click', function(){
           if(qLocked) return;
           qLocked = true;
           var correctIdx = data[qi].correct;
           opts.forEach(function(o, idx){
             o.disabled = true;
             if(idx === correctIdx) o.classList.add('correct');
             else if(idx === oi) o.classList.add('incorrect');
           });
           if(oi === correctIdx) score++;
           refreshScore();
           if(explain) explain.classList.add('show');
         });
       });
     });
     refreshScore();
   });
 }
 document.addEventListener('DOMContentLoaded', function(){
   initChecklists();
   initMistakeFlip();
   initQuizzes();
 });
})();
"""

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

PARTS = [
    {
        "id": "part-1",
        "file": "part-1.html",
        "title": "Μέρος 1 · Υποτακτική Έγκλιση & Έκφραση Γνώμης",
        "short_title": "Μέρος 1",
        "subtitle": "Έκφραση επιθυμίας, ανάγκης, γνώμης και αμφιβολίας με υποτακτική.",
        "stripe": "#2563eb",
        "topics": ["ipotaktiki-egklisi-dilosi-gnomis", "ekfrasi-epithimias-kai-anagkis-ypotaktiki"]
    },
    {
        "id": "part-2",
        "file": "part-2.html",
        "title": "Μέρος 2 · Αιτιολογία & Επιχειρηματολογία",
        "short_title": "Μέρος 2",
        "subtitle": "Αιτιολογικοί και αποτελεσματικοί σύνδεσμοι, οργάνωση διαλόγου.",
        "stripe": "#16a34a",
        "topics": ["aitia-kai-apotelesma-syndesmoi", "sindesmoi-epixeirimatologias-kai-syzitisis"]
    }
]

TOPICS = {
    "ipotaktiki-egklisi-dilosi-gnomis": {
        "title": "Η Υποτακτική Έγκλιση — Έκφραση Γνώμης και Αμφιβολίας",
        "subtitle": "Πιστεύω ότι... / Δεν νομίζω να... / Είναι πιθανό να...",
        "part_title": "Μέρος 1 · Υποτακτική Έγκλιση & Έκφραση Γνώμης",
        "part_file": "part-1.html",
        "cando": "Μπορεί να εκφράσει προσωπική άποψη και επιφυλάξεις με υποτακτική έγκλιση.",
        "one_liner": "Η υποτακτική εισάγεται κυρίως με το μόριο 'να' μετά από ρήματα γνώμης στην άρνηση ή εκφράσεις αμφιβολίας.",
        "why_matters": "Είναι το βασικό εργαλείο του επιπέδου B1 στα ελληνικά για ευγενική διατύπωση απόψεων και διαφωνίας.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Έκφραση</th><th>Έγκλιση / Σύνταξη</th><th>Παράδειγμα</th></tr></thead>
<tbody>
<tr><td><b>Πιστεύω ότι / Νομίζω ότι (Κατάφαση)</b></td><td>Οριστική (ότι / πως)</td><td>Πιστεύω ότι <b>έχει</b> δίκιο.</td></tr>
<tr><td><b>Δεν νομίζω να / Δεν πιστεύω να (Άρνηση)</b></td><td>Υποτακτική (να)</td><td>Δεν νομίζω να <b>έχει</b> δίκιο.</td></tr>
<tr><td><b>Είναι πιθανό να</b></td><td>Υποτακτική (να)</td><td>Είναι πιθανό να <b>έρθουν</b> αύριο.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Δεν πιστεύω να <span style='color:var(--grammar-verb);'>είναι</span> δύσκολη η εξέταση.",
        "notice": "👀 Προσέξτε: Μετά από 'νομίζω ότι' χρησιμοποιούμε οριστική, ενώ μετά από 'δεν νομίζω να' χρησιμοποιούμε υποτακτική.",
        "think_native": "🧠 Σκεφτείτε ελληνικά: Το 'ότι' δηλώνει βεβαιότητα, ενώ το 'να' ανοίγει το ενδεχόμενο.",
        "signature_box": "🧩 Χρυσός κανόνας: Κατάφαση = ότι + οριστική. Άρνηση γνώμης / Αμφιβολία = να + υποτακτική.",
        "mistakes": [
            {"wrong": "Δεν πιστεύω ότι θα έρθει. (λιγότερο φυσικό)", "right": "Δεν πιστεύω να έρθει."},
            {"wrong": "Πιστεύω να είναι αλήθεια (σε βεβαιότητα).", "right": "Πιστεύω ότι είναι αλήθεια."}
        ],
        "mnemonic": "💡 Μνημονικός κανόνας: Βεβαιότητα = Ότι, Αμφιβολία = Να !",
        "connects": ["ekfrasi-epithimias-kai-anagkis-ypotaktiki", "aitia-kai-apotelesma-syndesmoi"],
        "checklist": ["Χρήση υποτακτικής με 'να' στην άρνηση γνώμης", "Διάκριση μεταξύ 'ότι' και 'να'"],
        "quiz": [
            {"q": "Ποια πρόταση είναι σωστή για έκφραση αμφιβολίας ;", "opts": ["Δεν νομίζω να έρθει.", "Δεν νομίζω ότι έρθει.", "Δεν νομίζω θα έρθει."], "correct": 0, "explain": "Η έκφραση αμφιβολίας 'δεν νομίζω να' συντάσσεται με υποτακτική."}
        ]
    },
    "ekfrasi-epithimias-kai-anagkis-ypotaktiki": {
        "title": "Έκφραση Επιθυμίας και Ανάγκης με Υποτακτική",
        "subtitle": "Πρέπει να... / Θέλω να... / Ελπίζω να...",
        "part_title": "Μέρος 1 · Υποτακτική Έγκλιση & Έκφραση Γνώμης",
        "part_file": "part-1.html",
        "cando": "Μπορεί να εκφράζει επιθυμίες, ευχές και υποχρεώσεις για τον εαυτό του και τους άλλους.",
        "one_liner": "Τα απρόσωπα ρήματα (πρέπει, μπορεί) και τα ρήματα επιθυμίας (θέλω, ελπίζω) συντάσσονται πάντα με υποτακτική (να).",
        "why_matters": "Απαραίτητο για καθημερινές ευχές, οδηγίες και διατύπωση προσδοκιών στο επίπεδο B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Ρήμα / Έκφραση</th><th>Σύνταξη</th><th>Παράδειγμα</th></tr></thead>
<tbody>
<tr><td><b>Πρέπει να</b></td><td>+ Υποτακτική</td><td>Πρέπει να <b>μελετήσουμε</b> μαζί.</td></tr>
<tr><td><b>Θέλω να</b></td><td>+ Υποτακτική</td><td>Θέλω να <b>μάθεις</b> την αλήθεια.</td></tr>
<tr><td><b>Ελπίζω να</b></td><td>+ Υποτακτική</td><td>Ελπίζω να <b>περάσετε</b> καλά.</td></tr>
</tbody>
</table></div>""",
        "example_code": "Ελπίζω να <span style='color:var(--grammar-subject);'>όλα</span> να <span style='color:var(--grammar-verb);'>πάνε</span> καλά.",
        "notice": "👀 Προσέξτε: Η εξαρτημένη υποτακτική στα ελληνικά αντικαθιστά το απαρέμφατο που λείπει από τη γλώσσα.",
        "think_native": "🧠 Σκεφτείτε ελληνικά: Η υποτακτική είναι η καρδιά της ελληνικής σύνταξης για κάθε σκοπό και επιθυμία.",
        "signature_box": "🧩 Χρυσός κανόνας: Πρέπει / Θέλω / Ελπίζω ➔ Πάντα με ΝΑ !",
        "mistakes": [
            {"wrong": "Πρέπει ότι θα φύγουμε.", "right": "Πρέπει να φύγουμε."},
            {"wrong": "Ελπίζω ότι να έρθεις.", "right": "Ελπίζω να έρθεις."}
        ],
        "mnemonic": "💡 Μνημονικός κανόνας: Επιθυμία και Ανάγκη ➔ Μόριο ΝΑ !",
        "connects": ["ipotaktiki-egklisi-dilosi-gnomis", "sindesmoi-epixeirimatologias-kai-syzitisis"],
        "checklist": ["Σύνταξη του 'πρέπει' με 'να'", "Εκφορά ευχών με 'ελπίζω να'"],
        "quiz": [
            {"q": "Συμπληρώστε: 'Πρέπει να ____ (φεύγω - αόριστος υποτακτικής) νωρίς.'", "opts": ["φύγουμε", "φεύγουμε", "φύγαμε"], "correct": 0, "explain": "Μετά το 'πρέπει να' για συνοπτική ενέργεια χρησιμοποιούμε στιγμιαία υποτακτική: 'φύγουμε'."}
        ]
    },
    "aitia-kai-apotelesma-syndesmoi": {
        "title": "Αιτιολογία και Αποτέλεσμα: Σύνδεσμοι και Δομή",
        "subtitle": "Επειδή / Αφού / Καθώς vs Επομένως / Γι' αυτό / Ως αποτέλεσμα",
        "part_title": "Μέρος 2 · Αιτιολογία & Επιχειρηματολογία",
        "part_file": "part-2.html",
        "cando": "Μπορεί να αιτιολογεί αποφάσεις και να συνδέει γεγονότα με τα αποτελέσματά τους.",
        "one_liner": "Οι αιτιολογικοί σύνδεσμοι (επειδή, αφού, καθώς) δηλώνουν την αιτία, ενώ οι αποτελεσματικοί (επομένως, γι' αυτό) το αποτέλεσμα.",
        "why_matters": "Επιτρέπει τη δόμηση λογικών επιχειρημάτων σε συζητήσεις και γραπτά κείμενα B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Σχέση</th><th>Σύνδεσμος</th><th>Θέση</th><th>Παράδειγμα</th></tr></thead>
<tbody>
<tr><td><b>Αιτία στην αρχή</b></td><td>Επειδή / Αφού / Καθώς</td><td>Αρχή πρότασης</td><td><b>Επειδή</b> έβρεχε, μείναμε μέσα.</td></tr>
<tr><td><b>Αιτία στη μέση</b></td><td>γιατί / επειδή</td><td>Μέση πρότασης</td><td>Μείναμε μέσα <b>γιατί</b> έβρεχε.</td></tr>
<tr><td><b>Αποτέλεσμα</b></td><td>Γι' αυτό / Επομένως</td><td>Λογική συνέχεια</td><td>Έβρεχε, <b>γι' αυτό</b> μείναμε μέσα.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Επειδή</span> διαβάσαμε πολύ, <span style='color:var(--grammar-verb);'>επομένως</span> πετύχαμε.",
        "notice": "👀 Προσέξτε: Το 'επειδή' απαντά στο 'γιατί ;', ενώ το 'γι' αυτό' εισάγει τη συνέπεια.",
        "think_native": "🧠 Σκεφτείτε ελληνικά: Το 'αφού' χρησιμοποιείται όταν η αιτία είναι ήδη γνωστή και στους δύο συνομιλητές.",
        "signature_box": "🧩 Χρυσός κανόνας: Επειδή = Αιτία. Γι' αυτό / Επομένως = Αποτέλεσμα.",
        "mistakes": [
            {"wrong": "Γιατί έβρεχε, δεν βγήκαμε. (στην αρχή πρότασης)", "right": "Επειδή έβρεχε, δεν βγήκαμε."},
            {"wrong": "Επειδή διάβασα γι' αυτό πέτυχα. (διπλή σύνδεση)", "right": "Επειδή διάβασα, πέτυχα."}
        ],
        "mnemonic": "💡 Μνημονικός κανόνας: Επειδή στην αρχή, Γιατί στη μέση !",
        "connects": ["sindesmoi-epixeirimatologias-kai-syzitisis"],
        "checklist": ["Χρήση του 'επειδή' στην αρχή της πρότασης", "Έκφραση αποτελέσματος με 'γι' αυτό'"],
        "quiz": [
            {"q": "Ποιος σύνδεσμος είναι κατάλληλος στην αρχή της πρότασης ;", "opts": ["Επειδή", "Γιατί", "Γι' αυτό"], "correct": 0, "explain": "Στην αρχή της πρότασης για αιτιολογία χρησιμοποιείται το 'Επειδή' หรือ 'Αφού'."}
        ]
    },
    "sindesmoi-epixeirimatologias-kai-syzitisis": {
        "title": "Σύνδεσμοι Επιχειρηματολογίας και Διαλόγου",
        "subtitle": "Πρώτον / Επιπλέον / Ωστόσο / Από τη μια... από την άλλη",
        "part_title": "Μέρος 2 · Αιτιολογία & Επιχειρηματολογία",
        "part_file": "part-2.html",
        "cando": "Μπορεί να οργανώνει προφορική ή γραπτή παρέμβαση παρουσιάζοντας επιχειρήματα.",
        "one_liner": "Οι διαρθρωτικοί σύνδεσμοι οργανώνουν τις ιδέες κατά σειρά (πρώτον), προσθέτουν στοιχεία (επιπλέον) ή εκφράζουν αντίθεση (ωστόσο).",
        "why_matters": "Είναι το κλειδί για συμμετοχή σε διαλόγους, ντιμπέιτ και παρουσιάσεις επιπέδου B1.",
        "visual_diagram": """<div class="table-wrap"><table>
<thead><tr><th>Λειτουργία</th><th>Σύνδεσμοι</th><th>Παράδειγμα</th></tr></thead>
<tbody>
<tr><td><b>Οργάνωση</b></td><td>Πρώτον, δεύτερον, τέλος</td><td><b>Πρώτον</b>, πρέπει να δούμε το κόστος...</td></tr>
<tr><td><b>Προσθήκη</b></td><td>Επιπλέον, επίσης, παράλληλα</td><td>Είναι χρηστικό. <b>Επιπλέον</b>, είναι οικονομικό.</td></tr>
<tr><td><b>Αντίθεση</b></td><td>Ωστόσο, όμως, εντούτοις</td><td>Είναι δύσκολο, <b>ωστόσο</b> είναι εφικτό.</td></tr>
</tbody>
</table></div>""",
        "example_code": "<span style='color:var(--grammar-verb);'>Από τη μια</span> είναι χρήσιμο, <span style='color:var(--grammar-verb);'>από την άλλη</span> είναι ακριβό.",
        "notice": "👀 Προσέξτε: Το 'ωστόσο' και το 'εντούτοις' προσδίδουν επίσημο και προσεγμένο ύφος στο λόγο.",
        "think_native": "🧠 Σκεφτείτε ελληνικά: Οι σύνδεσμοι είναι οι πινακίδες που οδηγούν τον ακροατή στη σκέψη σας.",
        "signature_box": "🧩 Χρυσός κανόνας: Οργάνωσε (Πρώτον) ➔ Πρόσθεσε (Επιπλέον) ➔ Αντίθεσε (Ωστόσο) ➔ Συμπέρανε (Συμπερασματικά).",
        "mistakes": [
            {"wrong": "Επιπλέον ότι είναι φθηνό... (λανθασμένη σύνταξη)", "right": "Επιπλέον, είναι φθηνό..."},
            {"wrong": "Ωστόσο όμως είναι καλό. (ταυτολογία)", "right": "Ωστόσο, είναι καλό."}
        ],
        "mnemonic": "💡 Μνημονικός κανόνας: Πρώτον ➔ Επιπλέον ➔ Ωστόσο ➔ Συμπερασματικά !",
        "connects": ["aitia-kai-apotelesma-syndesmoi", "ipotaktiki-egklisi-dilosi-gnomis"],
        "checklist": ["Οργάνωση επιχειρηματολογίας σε τρία βήματα", "Χρήση του 'ωστόσο' για ευγενική αντίθεση"],
        "quiz": [
            {"q": "Ποια λέξη χρησιμοποιείται για προσθήκη νέου επιχειρήματος ;", "opts": ["Επιπλέον", "Ωστόσο", "Επομένως"], "correct": 0, "explain": "Το 'Επιπλέον' χρησιμοποιείται για την προσθήκη νέας ιδέας."}
        ]
    }
}

def render_topbar(active_part_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    hub_link = "../../../../ellinika-b1.html" if is_topic else "../../../ellinika-b1.html"
    nav_links = [f'<a href="{hub_link}">← Hub Ελληνικά B1</a>']
    for p in PARTS:
        act = 'class="active"' if active_part_id == p["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{p["file"]}">{p["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Γραμματική B1</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Εγχειρίδιο Γραμματικής Ελληνικής Γλώσσας (B1) · Διαδικτυακή Έκδοση</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Επιστροφή στην αρχική COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Greek B1 Grammar Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        m_items = []
        for m in top["mistakes"]:
            m_items.append(f'''<div class="mflip"><div class="wrong-line">❌ <span class="wrong-text">{m["wrong"]}</span></div><span class="hint">κάντε κλικ για αποκάλυψη της σωστής μορφής</span><div class="right-line">✅ <span>{m["right"]}</span></div></div>''')
        mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Συχνά λάθη</div>{"".join(m_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Μπορείτε ήδη να το χρησιμοποιήσετε ;</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Διάγνωση & Κουίζ</h2><span class="quiz-score">Σκορ: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        connects_lis = "".join([f'<li><a href="{c}.html">{TOPICS[c]["title"]}</a></li>' for c in top["connects"] if c in TOPICS])
        connects_html = f'<div class="box rule-box"><h3>🔗 Σε σύνδεση με...</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Γραμματική Ελληνικής B1</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["part_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="outcome-banner">🎯 <strong>Στόχος επικοινωνίας :</strong> {top["cando"]}</div>
  <p><strong>Συνοπτικά :</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Γιατί είναι σημαντικό ;</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box rule-box"><h3>Παράδειγμα με χρώματα</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>{top["think_native"]}</h3></div>
  <div class="box rule-box"><h3>{top["signature_box"]}</h3></div>
  {mistakes_html}
  <div class="box why"><h3>{top["mnemonic"]}</h3></div>
  {connects_html}
  {check_html}
  <div class="outcome-banner">🎉 <strong>Συγχαρητήρια !</strong> Κατέχετε τώρα αυτή τη βασική δομή του επιπέδου B1.</div>
  {quiz_html}
  {pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(page_html)

    for p in PARTS:
        cards = []
        for slug in p["topics"]:
            top = TOPICS[slug]
            cards.append(f'''<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>''')

        part_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} · COSYlanguages B1</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_part_id=p["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Μέρος</span>
    <h1>{p["title"]}</h1>
    <p class="subtitle">{p["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="topic-grid">{"".join(cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

        with open(os.path.join(BASE_DIR, p["file"]), "w", encoding="utf-8") as f:
            f.write(part_html)

    index_cards = []
    for p in PARTS:
        index_cards.append(f'''<a class="part-card" href="{p["file"]}"><div style="height:4px;background:{p["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{p["title"]}</h2><p>{p["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--blue-700);">{len(p["topics"])} κεφάλαια →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="el">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Γραμματική Ελληνικής Γλώσσας Επίπεδο B1 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Επίπεδο B1</span>
    <h1>Γραμματική Ελληνικής Γλώσσας (B1)</h1>
    <p class="subtitle">Διαδραστικό μονογλωσσικό εγχειρίδιο ελληνικής γραμματικής επιπέδου B1.</p>
    <hr class="rule">
  </div>
  <div class="parts-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Greek B1 Grammar Manual generated successfully!")

if __name__ == "__main__":
    build_all()

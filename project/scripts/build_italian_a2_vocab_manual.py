#!/usr/bin/env python3
"""
Generator script for COSYlanguages Italian Vocabulary Manual (Level A2) Interactive Web Edition.
Generates manuals/it/vocabulary/a2/index.html, module-N.html chapter hubs, assets, and topic HTML pages in manuals/it/vocabulary/a2/topics/.
100% Monolingual Italian.
"""

import os
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "manuals/it/vocabulary/a2"))
TOPICS_DIR = os.path.join(BASE_DIR, "topics")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

os.makedirs(TOPICS_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

STYLE_CSS = """/* COSYlanguages · Manuale di Lessico Italiano Livello A2 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root {
  --teal-900: #0f382c;
  --teal-800: #17523d;
  --teal-700: #1f6d50;
  --teal-600: #288865;
  --teal-100: #e3f5ef;
  --teal-050: #f2faf5;

  --ink: #13231e;
  --ink-soft: #3c544c;
  --paper: #fcfbf7;
  --panel: #ffffff;
  --line: #e3e0d5;

  --radius-s: 8px;
  --radius-m: 14px;
  --radius-l: 20px;
  --shadow-card: 0 2px 8px rgba(15,56,44,.06);
  --shadow-hover: 0 8px 24px rgba(15,56,44,.12);

  --font-display: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font-family: var(--font-body); line-height: 1.65; font-size: 16px;
}
a { color: var(--teal-700); text-decoration: none; transition: color .15s ease; }
a:hover { color: var(--teal-900); }

.container { max-width: 920px; margin: 0 auto; padding: 0 20px; }

.topbar {
  position: sticky; top: 0; z-index: 50; background: var(--teal-900);
  color: #fff; border-bottom: 1px solid rgba(255,255,255,.1);
}
.topbar-inner {
  max-width: 1100px; margin: 0 auto; padding: 12px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}
.brand { display: flex; align-items: center; gap: 10px; color: #fff; font-weight: 800; font-family: var(--font-display); }
.brand-mark { background: #fff; color: var(--teal-900); width: 30px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-style: italic; }
.topbar-nav { display: flex; gap: 8px; }
.topbar-nav a { color: #e3f5ef; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 99px; }
.topbar-nav a:hover, .topbar-nav a.active { background: rgba(255,255,255,.18); color: #fff; }

.page-head { padding: 32px 0 16px; }
.eyebrow {
  display: inline-block; font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  text-transform: uppercase; color: var(--teal-700); background: var(--teal-100);
  padding: 4px 12px; border-radius: 99px; margin-bottom: 12px;
}
.page-head h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(28px, 4vw, 40px); margin: 0 0 6px; }
.subtitle { color: var(--ink-soft); font-size: 18px; margin: 0; font-style: italic; }
.rule { border: none; border-top: 2px solid var(--ink); margin: 16px 0 24px; opacity: .8; }

.outcome-banner { background: var(--teal-100); border-left: 4px solid var(--teal-600); padding: 14px 18px; border-radius: var(--radius-s); margin-bottom: 24px; color: var(--teal-900); font-weight: 500; }

.vocab-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.flashcard { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; box-shadow: var(--shadow-card); position: relative; }
.flashcard .term { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--teal-900); margin-bottom: 4px; }
.flashcard .tag { display: inline-block; font-family: var(--font-mono); font-size: 11px; background: var(--teal-050); color: var(--teal-700); padding: 2px 8px; border-radius: 4px; margin-bottom: 12px; }
.flashcard .def { font-size: 15px; color: var(--ink); margin-bottom: 10px; font-weight: 500; }
.flashcard .ex { font-size: 14px; color: var(--ink-soft); font-style: italic; border-left: 2px solid var(--teal-600); padding-left: 10px; }

.checklist { background: var(--teal-050); border: 1px solid var(--teal-100); border-radius: var(--radius-m); padding: 20px; margin: 24px 0; }
.checklist h3 { margin: 0 0 12px; font-family: var(--font-display); color: var(--teal-900); font-size: 16px; }
.check-item { display: flex; align-items: center; gap: 10px; padding: 8px 0; cursor: pointer; }
.check-item input { width: 18px; height: 18px; accent-color: var(--teal-700); }

.quiz-panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l); padding: 24px; margin: 32px 0; box-shadow: var(--shadow-card); }
.quiz-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.quiz-head h2 { font-family: var(--font-display); font-size: 20px; margin: 0; }
.quiz-score { font-family: var(--font-mono); font-size: 13px; background: var(--teal-100); color: var(--teal-900); padding: 4px 12px; border-radius: 99px; font-weight: 700; }
.qitem { border-top: 1px solid var(--line); padding: 16px 0; }
.qitem .qtext { font-family: var(--font-display); font-weight: 800; margin-bottom: 12px; }
.qopts { display: flex; flex-direction: column; gap: 8px; }
.qopt { text-align: left; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius-s); padding: 10px 14px; font-size: 15px; cursor: pointer; }
.qopt.correct { border-color: #16a34a; background: #dcfce7; font-weight: 700; }
.qopt.incorrect { border-color: #ef4444; background: #fef2f2; }
.qexplain { display: none; margin-top: 10px; font-size: 14px; background: var(--teal-050); border-left: 3px solid var(--teal-600); padding: 10px 14px; }
.qexplain.show { display: block; }

.module-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.module-card, .topic-card { display: block; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-m); padding: 20px; color: var(--ink); box-shadow: var(--shadow-card); transition: transform .15s, box-shadow .15s; }
.module-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--teal-600); }
.module-card h2, .topic-card .ttl { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin: 6px 0; }

.pager { display: flex; justify-content: space-between; gap: 16px; margin: 40px 0; }
.pager a { flex: 1; border: 1px solid var(--line); border-radius: var(--radius-m); padding: 14px 18px; background: var(--panel); box-shadow: var(--shadow-card); }
footer.site { background: var(--teal-900); color: #e3f5ef; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 14px; }
footer.site a { color: #fff; }
"""

with open(os.path.join(ASSETS_DIR, "style.css"), "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

APP_JS = """// COSYlanguages A2 Lessico Italiano · Motore d'Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-it-vocab-a2-' + box.getAttribute('data-key');
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
 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;
     function refreshScore(){ if(scoreEl) scoreEl.textContent = 'Punteggio: ' + score + ' / ' + data.length; }
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
   initQuizzes();
 });
})();
"""

with open(os.path.join(ASSETS_DIR, "app.js"), "w", encoding="utf-8") as f:
    f.write(APP_JS)

MODULES = [
    {
        "id": "module-1",
        "file": "module-1.html",
        "title": "Modulo 1 · Vita Quotidiana & Ricordi",
        "short_title": "Modulo 1",
        "subtitle": "La routine di tutti i giorni, la famiglia e le vacanze al mare o in montagna.",
        "stripe": "#1f6d50",
        "topics": ["la-routine-e-i-ricordi", "i-viaggi-e-i-trasporti"]
    },
    {
        "id": "module-2",
        "file": "module-2.html",
        "title": "Modulo 2 · Lavoro & Progetti Futuri",
        "short_title": "Modulo 2",
        "subtitle": "Le professioni, i servizi in città, la salute ed il benessere.",
        "stripe": "#288865",
        "topics": ["il-lavoro-e-le-professioni", "la-salute-e-gli-acquisti"]
    }
]

TOPICS = {
    "la-routine-e-i-ricordi": {
        "title": "La Routine e i Ricordi di Famiglia",
        "subtitle": "Vocabolario essenziale per descrivere abitudini passate e momenti in famiglia",
        "module_title": "Modulo 1 · Vita Quotidiana & Ricordi",
        "module_file": "module-1.html",
        "cando": "Sa descrivere le proprie abitudini d'infanzia ed eventi familiari del passato.",
        "cards": [
            {"term": "l'abitudine (f.)", "tag": "Sostantivo", "def": "Azione ripetuta regolarmente nel tempo.", "ex": "Da piccolo avevo l'abitudine di fare colazione alle sette."},
            {"term": "il ricordo (m.)", "tag": "Sostantivo", "def": "Memoria di un evento o di una persona passata.", "ex": "Ho un bel ricordo delle mie estati in campagna con i nonni."},
            {"term": "svegliarsi (v. rifl.)", "tag": "Verbo", "def": "Interrompere il sonno al mattino.", "ex": "Ogni mattina mi svegliavo presto per andare a scuola."},
            {"term": "infanzia (f.)", "tag": "Sostantivo", "def": "Il periodo della vita da bambini.", "ex": "Durante l'infanzia giocavamo sempre all'aperto."}
        ],
        "checklist": ["Usare i sostantivi legati ai ricordi e alle abitudini", "Descrivere le azioni quotidiane con i verbi riflessivi"],
        "quiz": [
            {"q": "Quale parola indica la memoria di un evento passato?", "opts": ["Il ricordo", "L'abitudine", "Il viaggio"], "correct": 0, "explain": "'Il ricordo' significa memoria di un fatto del passato."}
        ]
    },
    "i-viaggi-e-i-trasporti": {
        "title": "I Viaggi e i Trasporti",
        "subtitle": "Parole e frasi utili per prenotare vacanze, biglietti e spostamenti",
        "module_title": "Modulo 1 · Vita Quotidiana & Ricordi",
        "module_file": "module-1.html",
        "cando": "Sa prenotare un soggiorno, comprare biglietti e muoversi in città.",
        "cards": [
            {"term": "la prenotazione (f.)", "tag": "Sostantivo", "def": "L'atto di riservare un posto o una camera.", "ex": "Ho confermato la prenotazione dell'albergo per tre notti."},
            {"term": "il biglietto di corsa semplice (m.)", "tag": "Sostantivo", "def": "Titolo di viaggio valido per un solo tragitto.", "ex": "Un biglietto di corsa semplice per il treno regionale, per favore."},
            {"term": "la coincidenza (f.)", "tag": "Sostantivo", "def": "Cambio tra due mezzi di trasporto.", "ex": "Dobbiamo prendere la coincidenza a Bologna Centrale."},
            {"term": "il bagaglio a mano (m.)", "tag": "Sostantivo", "def": "Valigia da portare in cabina o in treno.", "ex": "In aereo posso portare solo un bagaglio a mano."}
        ],
        "checklist": ["Prenotare un albergo o un titolo di viaggio", "Chiedere informazioni sugli orari e sulle coincidenze"],
        "quiz": [
            {"q": "Cosa significa 'coincidenza' in stazione?", "opts": ["Il cambio di treno", "Il ritardo del treno", "Il biglietto"], "correct": 0, "explain": "'Coincidenza' indica la connessione o il cambio tra due treni."}
        ]
    },
    "il-lavoro-e-le-professioni": {
        "title": "Il Lavoro e le Professioni",
        "subtitle": "Termini utili per parlare del proprio mestiere, dell'ufficio e di colloqui",
        "module_title": "Modulo 2 · Lavoro & Progetti Futuri",
        "module_file": "module-2.html",
        "cando": "Sa presentare il proprio lavoro e descrivere compiti professionali.",
        "cards": [
            {"term": "il colloquio di lavoro (m.)", "tag": "Sostantivo", "def": "Incontro conoscitivo per un posto di lavoro.", "ex": "Domani mattina ho un colloquio di lavoro molto importante."},
            {"term": "il curriculum vitae (m.)", "tag": "Sostantivo", "def": "Documento con il percorso di studi ed esperienze.", "ex": "Ho aggiornato il mio curriculum vitae prima di inviarlo."},
            {"term": "lo stipendio (m.)", "tag": "Sostantivo", "def": "Compenso economico mensile del lavoratore.", "ex": "Riceve lo stipendio alla fine di ogni mese."},
            {"term": "la riunione (f.)", "tag": "Sostantivo", "def": "Incontro tra colleghi per discutere progetti.", "ex": "La riunione di equipe comincia alle ore dieci."}
        ],
        "checklist": ["Descrivere le proprie mansioni lavorative", "Presentare il proprio percorso professionale"],
        "quiz": [
            {"q": "Quale documento raccoglie le esperienze lavorative?", "opts": ["Il curriculum vitae", "La prenotazione", "La coincidenza"], "correct": 0, "explain": "Il curriculum vitae riassume studi e lavoro."}
        ]
    },
    "la-salute-e-gli-acquisti": {
        "title": "La Salute e i Servizi",
        "subtitle": "Vocabolario per spiegare sintomi al medico e fare acquisti in farmacia",
        "module_title": "Modulo 2 · Lavoro & Progetti Futuri",
        "module_file": "module-2.html",
        "cando": "Sa spiegare un problema di salute semplice al medico o al farmacista.",
        "cards": [
            {"term": "il mal di testa (m.)", "tag": "Sostantivo", "def": "Dolore localizzato alla testa.", "ex": "Oggi ho un forte mal di testa e devo riposare."},
            {"term": "la ricetta medica (f.)", "tag": "Sostantivo", "def": "Documento del medico per ritirare farmaci.", "ex": "Per comprare questo antibiotico serve la ricetta medica."},
            {"term": "il farmaco (m.) / la medicina (f.)", "tag": "Sostantivo", "def": "Sostanza usata per curare una malattia.", "ex": "Prendo questa medicina due volte al giorno dopo i pasti."},
            {"term": "la visita medica (f.)", "tag": "Sostantivo", "def": "Controllo dello stato di salute presso il dottore.", "ex": "Ho prenotato una visita medica per martedì prossimo."}
        ],
        "checklist": ["Spiegare sintomi semplici al medico", "Chiedere un farmaco in farmacia"],
        "quiz": [
            {"q": "Cosa serve per comprare certi farmaci in farmacia?", "opts": ["La ricetta medica", "La coincidenza", "Il curriculum"], "correct": 0, "explain": "La ricetta medica rilasciata dal dottore è necessaria."}
        ]
    }
}

def render_topbar(active_mod_id=None, is_topic=False):
    hub_link = "../../../../italiano-a2.html" if is_topic else "../../../italiano-a2.html"
    rel_prefix = "../" if is_topic else ""
    nav_links = [f'<a href="{hub_link}">← Hub Italiano A2</a>']
    for m in MODULES:
        act = 'class="active"' if active_mod_id == m["id"] else ''
        nav_links.append(f'<a {act} href="{rel_prefix}{m["file"]}">{m["short_title"]}</a>')
    return f'''<header class="topbar"><div class="topbar-inner"><a class="brand" href="{rel_prefix}index.html"><span class="brand-mark">cl</span><span>COSYlanguages · Lessico A2</span></a><nav class="topbar-nav">{"".join(nav_links)}</nav></div></header>'''

def render_footer():
    return '''<footer class="site"><div class="container"><div>COSYlanguages · Manuale di Lessico Italiano (A2) · Edizione Web</div><div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">← Torna alla home COSYlanguages</a></div></div></footer>'''

def build_all():
    print("Building Italian A2 Vocabulary Manual...")
    topic_slugs = list(TOPICS.keys())

    for idx, (slug, top) in enumerate(TOPICS.items()):
        prev_slug = topic_slugs[idx - 1] if idx > 0 else None
        next_slug = topic_slugs[idx + 1] if idx < len(topic_slugs) - 1 else None

        prev_link = f'<a class="prev" href="{prev_slug}.html">← {TOPICS[prev_slug]["title"]}</a>' if prev_slug else '<span></span>'
        next_link = f'<a class="next" href="{next_slug}.html">{TOPICS[next_slug]["title"]} →</a>' if next_slug else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        card_items = []
        for c in top["cards"]:
            card_items.append(f'''<div class="flashcard"><div class="term">{c["term"]}</div><span class="tag">{c["tag"]}</span><div class="def">{c["def"]}</div><div class="ex">"{c["ex"]}"</div></div>''')
        cards_html = f'<div class="vocab-grid">{"".join(card_items)}</div>'

        c_items = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["checklist"]])
        check_html = f'<div class="checklist" data-key="{slug}"><h3>🎯 Conosci già queste parole?</h3>{c_items}</div>'

        q_items = []
        q_data = []
        for q in top["quiz"]:
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')
        quiz_json = json.dumps(q_data)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Verifica Lessicale</h2><span class="quiz-score">Punteggio: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>'

        page_html = f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · Lessico Italiano A2</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["module_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="outcome-banner">🎯 <strong>Obiettivo di vocabolario:</strong> {top["cando"]}</div>
  {cards_html}
  {check_html}
  {quiz_html}
  {pager_html}
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(TOPICS_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
            f.write(page_html)

    for m in MODULES:
        cards = []
        for slug in m["topics"]:
            top = TOPICS[slug]
            cards.append(f'''<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>''')

        mod_html = f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} · COSYlanguages A2</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(active_mod_id=m["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Modulo</span>
    <h1>{m["title"]}</h1>
    <p class="subtitle">{m["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="topic-grid">{"".join(cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

        with open(os.path.join(BASE_DIR, m["file"]), "w", encoding="utf-8") as f:
            f.write(mod_html)

    index_cards = []
    for m in MODULES:
        index_cards.append(f'''<a class="module-card" href="{m["file"]}"><div style="height:4px;background:{m["stripe"]};border-radius:2px;margin-bottom:12px;"></div><h2>{m["title"]}</h2><p>{m["subtitle"]}</p><span style="font-size:12px;font-weight:700;color:var(--teal-700);">{len(m["topics"])} argomenti →</span></a>''')

    index_html = f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lessico Italiano Livello A2 · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Livello A2</span>
    <h1>Lessico Italiano (A2)</h1>
    <p class="subtitle">Manuale interattivo monolingua di lessico italiano livello elementare (A2).</p>
    <hr class="rule">
  </div>
  <div class="module-grid">{"".join(index_cards)}</div>
</main>
{render_footer()}
</body>
</html>'''

    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print("Italian A2 Vocabulary Manual generated successfully!")

if __name__ == "__main__":
    build_all()

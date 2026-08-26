#!/usr/bin/env python3
"""
Generator script for COSYlanguages Monolingual A0-A1 Interactive Web Edition Grammar Manuals.
Pure Grammar Focus: Structural grammar rules, cases, declensions, verb tenses, and paradigms.
"""

import os
import json

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

SHARED_CSS = """/* COSYlanguages Monolingual Grammar Manual CSS */
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-mono: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --bg: #faf9f6;
  --card-bg: #ffffff;
  --text: #1c1c1e;
  --subtext: #636366;
  --border: #e5e5ea;
  --role-subject: #3562e0;
  --role-verb: #1c8f56;
  --role-object: #c9740a;
  --role-ending: #7c4fd6;
  --role-adjective: #d99b00;
  --role-error: #a3195b;
}
body { margin: 0; padding: 0; font-family: var(--font-sans); background: var(--bg); color: var(--text); line-height: 1.5; }
.topbar { background: var(--card-bg); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; }
.topbar-inner { max-width: 1000px; margin: 0 auto; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; }
.brand { text-decoration: none; color: var(--text); font-weight: 700; display: flex; align-items: center; gap: 8px; }
.brand-mark { background: var(--role-subject); color: white; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
.topbar-nav { display: flex; gap: 12px; }
.topbar-nav a { text-decoration: none; color: var(--subtext); font-size: 14px; padding: 4px 8px; border-radius: 4px; }
.topbar-nav a.active, .topbar-nav a:hover { background: rgba(0,0,0,0.05); color: var(--text); }
.hero { background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%); padding: 48px 20px 32px; border-bottom: 1px solid var(--border); text-align: center; }
.hero-kicker { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--role-subject); }
.hero h1 { font-size: 36px; margin: 12px 0; }
.lead { font-size: 18px; color: var(--subtext); max-width: 700px; margin: 0 auto 32px; }
.container { max-width: 900px; margin: 0 auto; padding: 24px 20px; }
.page-head { margin-bottom: 32px; }
.eyebrow { font-size: 13px; text-transform: uppercase; color: var(--subtext); letter-spacing: 0.05em; }
.subtitle { color: var(--subtext); font-size: 16px; margin-top: 4px; }
.rule { border: 0; border-top: 1px solid var(--border); margin: 24px 0; }
.parts-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.part-card, .topic-card { display: block; background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--text); transition: transform 0.15s, box-shadow 0.15s; }
.part-card:hover, .topic-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
.stripe { height: 4px; border-radius: 2px; margin-bottom: 12px; }
.part-card h2, .topic-card .ttl { margin: 4px 0 8px; font-size: 18px; }
.part-card p, .topic-card .sub { font-size: 14px; color: var(--subtext); margin: 0; }
.tnum { font-size: 12px; color: var(--subtext); font-weight: 600; text-transform: uppercase; }
.box { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 20px; margin: 20px 0; }
.box h3 { margin-top: 0; font-size: 16px; }
.box.mint { border-left: 4px solid var(--role-verb); }
.box.native { border-left: 4px solid var(--role-ending); }
.table-wrap { overflow-x: auto; margin: 20px 0; }
table { width: 100%; border-collapse: collapse; background: var(--card-bg); border-radius: 8px; overflow: hidden; border: 1px solid var(--border); }
th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--border); font-size: 14px; }
th { background: rgba(0,0,0,0.02); font-weight: 600; }
.mflip { background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px; margin: 8px 0; cursor: pointer; }
.wrong-line { color: var(--role-error); font-weight: 600; }
.right-line { display: none; color: var(--role-verb); font-weight: 600; margin-top: 6px; }
.mflip.revealed .right-line { display: block; }
.hint { font-size: 12px; color: var(--subtext); display: block; margin-top: 4px; }
.mflip.revealed .hint { display: none; }
.checklist { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 20px; margin: 24px 0; }
.check-item { display: flex; align-items: center; gap: 10px; margin: 10px 0; cursor: pointer; }
.quiz-panel { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 20px; margin: 24px 0; }
.qitem { margin: 16px 0; }
.qopts { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.qopt { background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 8px 14px; cursor: pointer; font-size: 14px; }
.qopt.correct { background: #e6f4ea; border-color: var(--role-verb); color: var(--role-verb); font-weight: 600; }
.qopt.wrong { background: #fce8e6; border-color: var(--role-error); color: var(--role-error); }
.qexplain { display: none; margin-top: 6px; font-size: 13px; color: var(--subtext); }
.pager { display: flex; justify-content: space-between; margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--border); }
.pager a { text-decoration: none; color: var(--role-subject); font-weight: 600; }
footer.site { border-top: 1px solid var(--border); background: var(--card-bg); padding: 32px 20px; text-align: center; color: var(--subtext); font-size: 14px; margin-top: 48px; }
footer.site a { color: var(--role-subject); text-decoration: none; }
"""

SHARED_JS = """// COSYlanguages Monolingual Grammar Manual Interactivity Engine
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('revealed'));
  });

  document.querySelectorAll('.quiz-panel').forEach(panel => {
    const quizData = JSON.parse(panel.dataset.quiz || '[]');

    panel.querySelectorAll('.qitem').forEach((qitem, qidx) => {
      const opts = qitem.querySelectorAll('.qopt');
      const explain = qitem.querySelector('.qexplain');
      opts.forEach((opt, oidx) => {
        opt.addEventListener('click', () => {
          opts.forEach(o => o.classList.remove('correct', 'wrong'));
          if (oidx === quizData[qidx].correct) {
            opt.classList.add('correct');
          } else {
            opt.classList.add('wrong');
            opts[quizData[qidx].correct].classList.add('correct');
          }
          if (explain) explain.style.display = 'block';
        });
      });
    });

    const resetBtn = panel.querySelector('.quiz-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        panel.querySelectorAll('.qopt').forEach(o => o.classList.remove('correct', 'wrong'));
        panel.querySelectorAll('.qexplain').forEach(e => e.style.display = 'none');
      });
    }
  });
});
"""

UI_STRINGS = {
    "it": {
        "notice_title": "👀 Attenzione",
        "memory_title": "💡 Trucco mnemonico",
        "mistake_title": "⚠️ Errori comuni",
        "mistake_hint": "clicca per rivelare la forma corretta",
        "check_title": "🎯 Autovalutazione",
        "quiz_title": "Quiz",
        "reset": "Ripristina"
    },
    "es": {
        "notice_title": "👀 Atención",
        "memory_title": "💡 Regla mnemotécnica",
        "mistake_title": "⚠️ Errores frecuentes",
        "mistake_hint": "haz clic para revelar la forma correcta",
        "check_title": "🎯 Autoevaluación",
        "quiz_title": "Cuestionario",
        "reset": "Reiniciar"
    },
    "de": {
        "notice_title": "👀 Hinweis",
        "memory_title": "💡 Eselsbrücke",
        "mistake_title": "⚠️ Häufige Fehler",
        "mistake_hint": "Klicken, um die richtige Form anzuzeigen",
        "check_title": "🎯 Selbsttest",
        "quiz_title": "Quiz",
        "reset": "Zurücksetzen"
    },
    "pt": {
        "notice_title": "👀 Atenção",
        "memory_title": "💡 Dica mnemônica",
        "mistake_title": "⚠️ Erros comuns",
        "mistake_hint": "clique para revelar a forma correta",
        "check_title": "🎯 Autoavaliação",
        "quiz_title": "Questionário",
        "reset": "Reiniciar"
    },
    "tt": {
        "notice_title": "👀 Игътибар",
        "memory_title": "💡 Истә калдыру ысулы",
        "mistake_title": "⚠️ Еш җибәрелә торган хаталар",
        "mistake_hint": "дөрес формасын күрү өчен басыгыз",
        "check_title": "🎯 Үз-үзеңне тикшерү",
        "quiz_title": "Сораулар",
        "reset": "Яңадан башлау"
    },
    "ba": {
        "notice_title": "👀 Иғтибар",
        "memory_title": "💡 Хәтерҙә ҡалдырыу ысулы",
        "mistake_title": "⚠️ Йыш ебәрелгән хаталар",
        "mistake_hint": "дөрөҫ форманы күреү өсөн баҫығыҙ",
        "check_title": "🎯 Үҙ-үҙеңде тикшереү",
        "quiz_title": "Һорауҙар",
        "reset": "Яңынан башлау"
    },
    "cv": {
        "notice_title": "👀 Асăрхаттăр",
        "memory_title": "💡 Аста хурас мешĕ",
        "mistake_title": "⚠️ Еш пулакан йăнăшсем",
        "mistake_hint": "тĕрĕс калăпăша курма пусăр",
        "check_title": "🎯 Хăвăра тĕрĕслени",
        "quiz_title": "Ыйтусем",
        "reset": "Татах каялла"
    },
    "hy": {
        "notice_title": "👀 Ուշադրություն",
        "memory_title": "💡 Հիշելու եղանակ",
        "mistake_title": "⚠️ Հաճախ հանդիպող սխալներ",
        "mistake_hint": "սեղմեք՝ ճիշտ ձևը տեսնելու համար",
        "check_title": "🎯 Ինքնաստուգում",
        "quiz_title": "Հարցաշար",
        "reset": "Վերասկսել"
    },
    "ka": {
        "notice_title": "👀 ყურადღება",
        "memory_title": "💡 დამახსოვრების წესი",
        "mistake_title": "⚠️ ხშირი შეცდომები",
        "mistake_hint": "დააჭირეთ სწორი ფორმის სანახავად",
        "check_title": "🎯 თვითშემოწმება",
        "quiz_title": "ქვიზი",
        "reset": "გადატვირთვა"
    }
}

MANUALS = [
    {
        "dir": "grammatica-italiana",
        "title": "Grammatica italiana (A0–A1)",
        "nav_title": "Grammatica italiana",
        "lang": "it",
        "lead": "Il manuale interattivo di grammatica italiana COSYlanguages: capitoli, sistemi grammaticali, tabelle, auto-valutazione ed esercizi.",
        "back_link": "Torna al sito COSYlanguages",
        "sections": [
            {
                "id": "capitolo-1", "file": "capitolo-1.html", "title": "Capitolo 1 · Nomi, articoli e genere", "subtitle": "Genere maschile e femminile, articoli determinativi e indeterminati", "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "genere-nomi", "title": "Genere dei nomi", "subtitle": "Maschile e femminile in italiano", "page_num": 1,
                        "table_head": ["Genere", "Finale singolare", "Esempio singolare", "Finale plurale", "Esempio plurale"],
                        "table_rows": [
                            ["Maschile", "-o", "il ragazzo", "-i", "i ragazzi"],
                            ["Femminile", "-a", "la ragazza", "-e", "le ragazze"],
                            ["Maschile/Femminile", "-e", "lo studente / la chiave", "-i", "gli studenti / le chiavi"]
                        ],
                        "attention": "In italiano tutti i nomi hanno un genere: maschile o femminile. La desinenza aiuta a riconoscerlo.",
                        "mnemonic": "Regola generale: -o diventa -i al plurale, -a diventa -e, -e diventa -i.",
                        "mistakes": [{"wrong": "la ragazzo", "right": "il ragazzo"}, {"wrong": "le ragazza", "right": "le ragazze"}],
                        "check_items": ["Riconoscere il genere di un nome dalla desinenza", "Formare correttamente il plurale dei nomi in -o, -a, -e"],
                        "quiz": [{"q": "Qual è il plurale corretto di «la ragazza»?", "opts": ["le ragazzi", "le ragazze", "i ragazze"], "correct": 1, "explain": "I nomi femminili in -a formano il plurale in -e con l'articolo «le»."}]
                    },
                    {
                        "slug": "articoli-determinativi", "title": "Articoli determinativi", "subtitle": "Il, lo, la, l', i, gli, le", "page_num": 2,
                        "table_head": ["Genere e Numero", "Inizio parola", "Articolo", "Esempio"],
                        "table_rows": [
                            ["Maschile singolare", "Consonante generale", "il", "il libro"],
                            ["Maschile singolare", "s+consonante, z, gn, ps", "lo", "lo studente"],
                            ["Maschile singolare", "Vocale", "l'", "l'amico"],
                            ["Femminile singolare", "Consonante", "la", "la casa"],
                            ["Femminile singolare", "Vocale", "l'", "l'amica"]
                        ],
                        "attention": "Scegli «lo» e «gli» per le parole maschili che iniziano con s+consonante, z, gn, ps.",
                        "mnemonic": "Pensa a «lo studente» e «gli studenti» come coppia speciale.",
                        "mistakes": [{"wrong": "il studente", "right": "lo studente"}, {"wrong": "i amici", "right": "gli amici"}],
                        "check_items": ["Usare correttamente il/lo/la/l'", "Usare i/gli/le al plurale"],
                        "quiz": [{"q": "Quale articolo si usa prima di «zaino»?", "opts": ["il zaino", "lo zaino", "un zaino"], "correct": 1, "explain": "Davanti alle parole che iniziano con Z si usa l'articolo «lo»."}]
                    },
                    {
                        "slug": "articoli-indeterminativi", "title": "Articoli indeterminativi", "subtitle": "Un, uno, una, un'", "page_num": 3,
                        "table_head": ["Genere", "Inizio parola", "Articolo", "Esempio"],
                        "table_rows": [
                            ["Maschile", "Consonante / Vocale", "un", "un libro / un amico"],
                            ["Maschile", "s+consonante, z, gn", "uno", "uno studente / uno zaino"],
                            ["Femminile", "Consonante", "una", "una casa"],
                            ["Femminile", "Vocale", "un'", "un'amica"]
                        ],
                        "attention": "L'apostrofo si usa solo con l'articolo indeterminativo femminile «un'» davanti a vocale.",
                        "mnemonic": "Maschile «un amico» (senza apostrofo), femminile «un'amica» (con apostrofo).",
                        "mistakes": [{"wrong": "un' amico", "right": "un amico"}, {"wrong": "una amica", "right": "un'amica"}],
                        "check_items": ["Distinguere l'uso dell'apostrofo tra maschile e femminile", "Usare uno davanti a s+consonante e z"],
                        "quiz": [{"q": "Qual è la forma corretta per un sostantivo femminile che inizia per vocale?", "opts": ["un amica", "uno amica", "un'amica"], "correct": 2, "explain": "L'articolo femminile davanti a vocale elide in un' con apostrofo."}]
                    },
                    {
                        "slug": "singolare-plurale", "title": "Singolare e plurale", "subtitle": "Trasformazione delle desinenze", "page_num": 4,
                        "table_head": ["Singolare", "Plurale", "Esempio singolare", "Esempio plurale"],
                        "table_rows": [
                            ["-o", "-i", "il gelato", "i gelati"],
                            ["-a", "-e", "la pizza", "le pizze"],
                            ["-e", "-i", "il caffè / la notte", "i caffè / le notti"]
                        ],
                        "attention": "I nomi accentati sull'ultima sillaba (es. il caffè) non cambiano al plurale.",
                        "mnemonic": "Cambiano solo le vocali finali: O/A/E diventano I/E/I.",
                        "mistakes": [{"wrong": "i gelate", "right": "i gelati"}],
                        "check_items": ["Convertire sostantivi dal singolare al plurale", "Identificare i sostantivi invariabili"],
                        "quiz": [{"q": "Come diventa «la pizza» al plurale?", "opts": ["i pizze", "le pizze", "le dizzi"], "correct": 1, "explain": "La forma plurale di «la pizza» è «le pizze»."}]
                    }
                ]
            },
            {
                "id": "capitolo-2", "file": "capitolo-2.html", "title": "Capitolo 2 · Verbi essenziali e presente", "subtitle": "Essere, avere, verbi in -are, -ere, -ire", "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "essere-avere", "title": "Verbi essere e avere", "subtitle": "I due ausiliari fondamentali", "page_num": 5,
                        "table_head": ["Pronome", "Essere", "Avere"],
                        "table_rows": [
                            ["io", "sono", "ho"],
                            ["tu", "sei", "hai"],
                            ["lui / lei", "è", "ha"],
                            ["noi", "siamo", "abbiamo"],
                            ["voi", "siete", "avete"],
                            ["loro", "sono", "hanno"]
                        ],
                        "attention": "Il verbo essere si usa per identità e origine; avere si usa per possesso ed età.",
                        "mnemonic": "Ricorda: «Io ho 20 anni» (non *io sono 20 anni!).",
                        "mistakes": [{"wrong": "Io sono 25 anni", "right": "Io ho 25 anni"}],
                        "check_items": ["Coniugare essere e avere al presente", "Esprimere l'età con avere"],
                        "quiz": [{"q": "Come si dice «Lei ha un libro»?", "opts": ["Lei è un libro", "Lei ha un libro", "Lei ho un libro"], "correct": 1, "explain": "Per esprimere il possesso con lei si usa «ha»."}]
                    },
                    {
                        "slug": "presente-regolare", "title": "Presente indicativo regolare", "subtitle": "Coniugazione delle tre coniugazioni -are, -ere, -ire", "page_num": 6,
                        "table_head": ["Pronome", "-ARE (parlare)", "-ERE (prendere)", "-IRE (dormire)"],
                        "table_rows": [
                            ["io", "parlo", "prendo", "dormo"],
                            ["tu", "parli", "prendi", "dormi"],
                            ["lui / lei", "parla", "prende", "dorme"],
                            ["noi", "parliamo", "prendiamo", "dormiamo"],
                            ["voi", "parlate", "prendete", "dormite"],
                            ["loro", "parlano", "prendono", "dormono"]
                        ],
                        "attention": "La desinenza della prima persona singolare «io» termina sempre in -o in tutte le coniugazioni.",
                        "mnemonic": "Io -o, Tu -i, Noi -iamo valgono per tutti i verbi regolari.",
                        "mistakes": [{"wrong": "Io parla italiano", "right": "Io parlo italiano"}],
                        "check_items": ["Coniugare verbi regolari delle tre coniugazioni", "Riconoscere il soggetto dalle desinenze"],
                        "quiz": [{"q": "Qual è la forma corretta per «noi» con il verbo «prendere»?", "opts": ["prendiamo", "prendete", "prendono"], "correct": 0, "explain": "Per la prima persona plurale «noi» la desinenza è «-iamo»: prendiamo."}]
                    },
                    {
                        "slug": "verbi-modali", "title": "Verbi modali (dovere, potere, volere)", "subtitle": "Esprimere necessità, possibilità e volontà", "page_num": 7,
                        "table_head": ["Pronome", "Dovere", "Potere", "Volere"],
                        "table_rows": [
                            ["io", "devo", "posso", "voglio"],
                            ["tu", "devi", "puoi", "vuoi"],
                            ["lui / lei", "deve", "può", "vuole"],
                            ["noi", "dobbiamo", "possiamo", "vogliamo"],
                            ["voi", "dovete", "potete", "volete"],
                            ["loro", "devono", "possono", "vogliono"]
                        ],
                        "attention": "I verbi modali sono seguiti direttamente dall'infinito senza preposizione.",
                        "mnemonic": "Voglio studiare, Posso andare, Devo lavorare.",
                        "mistakes": [{"wrong": "Voglio di mangiare", "right": "Voglio mangiare"}],
                        "check_items": ["Usare i verbi modali seguiti dall'infinito", "Coniugare dovere, potere e volere"],
                        "quiz": [{"q": "Come si dice «I want to learn»?", "opts": ["Voglio imparare", "Devo imparare", "Posso imparare"], "correct": 0, "explain": "Il verbo volere esprime desiderio: «Voglio imparare»."}]
                    },
                    {
                        "slug": "passato-prossimo", "title": "Passato prossimo", "subtitle": "Ausiliare essere o avere + participio passato", "page_num": 8,
                        "table_head": ["Coniugazione", "Infinito", "Participio passato", "Esempio"],
                        "table_rows": [
                            ["-are", "parlare", "parlato", "Ho parlato"],
                            ["-ere", "vendere", "venduto", "Ho venduto"],
                            ["-ire", "capire", "capito", "Ho capito"],
                            ["Movimento", "andare", "andato/a", "Sono andato/a"]
                        ],
                        "attention": "Con l'ausiliare «essere», il participio passato concorda in genere e numero col soggetto.",
                        "mnemonic": "Avere = participio fisso (-o). Essere = participio variabile (-o/-a/-i/-e).",
                        "mistakes": [{"wrong": "Maria è andato a casa", "right": "Maria è andata a casa"}],
                        "check_items": ["Formare i participi passati regolari", "Concordare il participio quando si usa l'ausiliare essere"],
                        "quiz": [{"q": "Qual è la forma corretta per «Anna (andare) al cinema»?", "opts": ["Anna ha andato", "Anna è andata", "Anna è andato"], "correct": 1, "explain": "Andare richiede essere e accordo femminile: «Anna è andata»."}]
                    }
                ]
            },
            {
                "id": "capitolo-3", "file": "capitolo-3.html", "title": "Capitolo 3 · Aggettivi, pronomi e preposizioni", "subtitle": "Qualità, possesso e preposizioni articolate", "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "aggettivi-qualificativi", "title": "Aggettivi qualificativi", "subtitle": "Accordo in genere e numero", "page_num": 9,
                        "table_head": ["Classe", "Maschile Singolare", "Femminile Singolare", "Plurale"],
                        "table_rows": [
                            ["4 uscite", "rosso", "rossa", "rossi / rosse"],
                            ["2 uscite", "grande", "grande", "grandi"]
                        ],
                        "attention": "L'aggettivo concorda sempre in genere e numero con il sostantivo a cui si riferisce.",
                        "mnemonic": "Caffè caldo / Casa grande (gli aggettivi in -e hanno una sola forma al singolare).",
                        "mistakes": [{"wrong": "una macchina rosso", "right": "una macchina rossa"}],
                        "check_items": ["Concordare gli aggettivi a 4 uscite", "Concordare gli aggettivi a 2 uscite"],
                        "quiz": [{"q": "Come si dice «a red car» in italiano?", "opts": ["una macchina rosso", "una macchina rossa", "un macchina rossa"], "correct": 1, "explain": "«Macchina» è femminile, quindi l'aggettivo deve concordare: «rossa»."}]
                    },
                    {
                        "slug": "pronomi-possessivi", "title": "Possessivi e dimostrativi", "subtitle": "Il mio, il tuo, questo, quello", "page_num": 10,
                        "table_head": ["Possessore", "Maschile Singolare", "Femminile Singolare", "Plurale"],
                        "table_rows": [
                            ["io", "il mio", "la mia", "i miei / le mie"],
                            ["tu", "il tuo", "la tua", "i tuoi / le tue"],
                            ["lui / lei", "il suo", "la sua", "i suoi / le sue"]
                        ],
                        "attention": "In italiano il possessivo richiede quasi sempre l'articolo determinativo (il mio libro).",
                        "mnemonic": "Articolo + Possessivo + Nome = La mia casa.",
                        "mistakes": [{"wrong": "mio libro", "right": "il mio libro"}],
                        "check_items": ["Mettere l'articolo prima del possessivo", "Scegliere la forma corretta di questo/quello"],
                        "quiz": [{"q": "Qual è la forma corretta per «my house»?", "opts": ["mia casa", "la mia casa", "una mia casa"], "correct": 1, "explain": "In italiano si usa l'articolo determinativo prima del possessivo: «la mia casa»."}]
                    },
                    {
                        "slug": "preposizioni-semplici", "title": "Preposizioni semplici e articolate", "subtitle": "Di, a, da, in, con, su, per, tra, fra", "page_num": 11,
                        "table_head": ["Preposizione", "+ il", "+ lo", "+ la", "+ i", "+ le"],
                        "table_rows": [
                            ["a", "al", "allo", "alla", "ai", "alle"],
                            ["di", "del", "dello", "della", "dei", "delle"],
                            ["da", "dal", "dallo", "dalla", "dai", "dalle"],
                            ["in", "nel", "nello", "nella", "nei", "nelle"]
                        ],
                        "attention": "Si usa «in» per le nazioni (in Italia) e «a» per le città (a Roma).",
                        "mnemonic": "In Italia, a Roma, nel centro.",
                        "mistakes": [{"wrong": "vado a Italia", "right": "vado in Italia"}],
                        "check_items": ["Distinguere l'uso di «in» ed «a» con i nomi geografici", "Formare le preposizioni articolate"],
                        "quiz": [{"q": "Come si dice «I go to Rome»?", "opts": ["Vado in Roma", "Vado a Roma", "Vado da Roma"], "correct": 1, "explain": "Con i nomi di città si usa la preposizione «a»."}]
                    },
                    {
                        "slug": "interrogativi", "title": "Pronomi e avverbi interrogativi", "subtitle": "Chi, che cosa, dove, quando, perché", "page_num": 12,
                        "table_head": ["Parola interrogativa", "Significato", "Esempio"],
                        "table_rows": [
                            ["Chi", "Persona", "Chi è lui?"],
                            ["Che cosa / Cosa", "Oggetto / Concetto", "Che cosa fai?"],
                            ["Dove", "Luogo", "Dove abiti?"],
                            ["Quando", "Tempo", "Quando parti?"],
                            ["Perché", "Causa", "Perché studi l'italiano?"]
                        ],
                        "attention": "«Perché» si usa sia nelle domande (why) sia nelle risposte (because).",
                        "mnemonic": "Chi? Dove? Quando? Perché?",
                        "mistakes": [{"wrong": "Dove fai?", "right": "Che cosa fai?"}],
                        "check_items": ["Formulare domande con gli interrogativi principali", "Rispondere correttamente alle domande"],
                        "quiz": [{"q": "Quale parola si usa per chiedere il luogo?", "opts": ["Chi", "Dove", "Quando"], "correct": 1, "explain": "Per chiedere informazioni su un luogo si usa «Dove»."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "gramatica-espanola",
        "title": "Gramática española (A0–A1)",
        "nav_title": "Gramática española",
        "lang": "es",
        "lead": "El manual interactivo de gramática española COSYlanguages: capítulos, sistemas gramaticales, auto-evaluación y ejercicios.",
        "back_link": "Volver a COSYlanguages",
        "sections": [
            {
                "id": "capitulo-1", "file": "capitulo-1.html", "title": "Capítulo 1 · Sustantivos y artículos", "subtitle": "Género gramatical, artículos determinados e indeterminados", "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "genero-sustantivos", "title": "El género de los sustantivos", "subtitle": "Masculino y femenino en español", "page_num": 1,
                        "table_head": ["Género", "Terminación", "Ejemplo singular", "Ejemplo plural"],
                        "table_rows": [
                            ["Masculino", "-o", "el libro", "los libros"],
                            ["Femenino", "-a", "la casa", "las casas"],
                            ["Variable", "-ista / -ante", "el/la estudiante", "los/las estudiantes"]
                        ],
                        "attention": "Los sustantivos terminados en -o suelen ser masculinos; los terminados en -a son femeninos.",
                        "mnemonic": "Recuerda la regla básica: el chico / la chica.",
                        "mistakes": [{"wrong": "la libro", "right": "el libro"}],
                        "check_items": ["Identificar el género por la terminación del sustantivo", "Usar el artículo correspondiente"],
                        "quiz": [{"q": "¿Cuál es el plural correcto de «la casa»?", "opts": ["las casa", "las casas", "los casas"], "correct": 1, "explain": "El plural femenino de «la casa» es «las casas»."}]
                    },
                    {
                        "slug": "articulos-definidos", "title": "Artículos determinados e indeterminados", "subtitle": "El, la, los, las / un, una, unos, unas", "page_num": 2,
                        "table_head": ["Tipo", "Masculino Singular", "Femenino Singular", "Masculino Plural", "Femenino Plural"],
                        "table_rows": [
                            ["Determinado", "el libro", "la mesa", "los libros", "las mesas"],
                            ["Indeterminado", "un libro", "una mesa", "unos libros", "unas mesas"]
                        ],
                        "attention": "Usa artículos determinados para cosas específicas e indeterminados para no específicas.",
                        "mnemonic": "El / La = conocido. Un / Una = uno cualquiera.",
                        "mistakes": [{"wrong": "un mesa", "right": "una mesa"}],
                        "check_items": ["Diferenciar entre artículos determinados e indeterminados", "Concordar el artículo en género y número"],
                        "quiz": [{"q": "¿Qué artículo indeterminado corresponde a «mesa»?", "opts": ["un mesa", "una mesa", "unos mesa"], "correct": 1, "explain": "«Mesa» es femenino, por lo que requiere «una»."}]
                    },
                    {
                        "slug": "plural-sustantivos", "title": "Formación del plural", "subtitle": "Reglas para vocales y consonantes", "page_num": 3,
                        "table_head": ["Terminación singular", "Regla de plural", "Ejemplo singular", "Ejemplo plural"],
                        "table_rows": [
                            ["Vocal no acentuada", "Añadir -s", "la manzana", "las manzanas"],
                            ["Consonante", "Añadir -es", "el hotel", "los hoteles"],
                            ["Terminado en -z", "Cambiar -z por -ces", "el lápiz", "los lápices"]
                        ],
                        "attention": "Los sustantivos que terminan en -z cambian la -z por -ces en plural.",
                        "mnemonic": "Vocal + S (casas); Consonante + ES (hoteles).",
                        "mistakes": [{"wrong": "los hotel", "right": "los hoteles"}],
                        "check_items": ["Añadir -s a palabras terminadas en vocal", "Añadir -es a palabras terminadas en consonante"],
                        "quiz": [{"q": "¿Cómo se forma el plural de «el hotel»?", "opts": ["los hotels", "los hoteles", "las hoteles"], "correct": 1, "explain": "Las palabras terminadas en consonante añaden «-es»: los hoteles."}]
                    }
                ]
            },
            {
                "id": "capitulo-2", "file": "capitulo-2.html", "title": "Capítulo 2 · Verbos fundamentales", "subtitle": "Ser vs Estar y presente regular", "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "ser-vs-estar", "title": "Ser vs Estar", "subtitle": "Diferencias clave entre los dos verbos", "page_num": 4,
                        "table_head": ["Verbo", "Uso principal", "Ejemplo"],
                        "table_rows": [
                            ["Ser", "Identidad, origen, profesión, características permanentes", "Yo soy profesor / Ella es de España"],
                            ["Estar", "Ubicación, estados temporales, emociones", "El libro está en la mesa / Estoy cansado"]
                        ],
                        "attention": "Usa «ser» para definir lo que algo es; usa «estar» para indicar cómo o dónde está.",
                        "mnemonic": "Regla rápida: D.O.C.T.O.R (Ser) vs P.L.A.C.E (Estar).",
                        "mistakes": [{"wrong": "Yo soy cansado", "right": "Estoy cansado"}],
                        "check_items": ["Diferenciar entre ser y estar", "Usar estar para ubicaciones"],
                        "quiz": [{"q": "¿Cómo se dice «Where are you?»?", "opts": ["¿Dónde eres?", "¿Dónde estás?", "¿Dónde tienes?"], "correct": 1, "explain": "Para preguntar la ubicación se usa el verbo «estar»."}]
                    },
                    {
                        "slug": "presente-indicativo", "title": "Presente de indicativo", "subtitle": "Verbos regulares -ar, -er, -ir", "page_num": 5,
                        "table_head": ["Pronombre", "-AR (hablar)", "-ER (comer)", "-IR (vivir)"],
                        "table_rows": [
                            ["yo", "hablo", "como", "vivo"],
                            ["tú", "hablas", "comes", "vives"],
                            ["él / ella / Ud.", "habla", "come", "vive"],
                            ["nosotros/as", "hablamos", "comemos", "vivimos"],
                            ["vosotros/as", "habláis", "coméis", "vivís"],
                            ["ellos/as / Uds.", "hablan", "comen", "viven"]
                        ],
                        "attention": "La primera persona singular (yo) siempre termina en -o en las tres conjugaciones.",
                        "mnemonic": "Yo hablo, tú hablas, él habla.",
                        "mistakes": [{"wrong": "Yo hablas español", "right": "Yo hablo español"}],
                        "check_items": ["Conjugar verbos regulares en presente", "Reconocer las terminaciones -ar, -er, -ir"],
                        "quiz": [{"q": "¿Cuál es la forma correcta para «nosotros» con el verbo «comer»?", "opts": ["comemos", "comen", "coméis"], "correct": 0, "explain": "La terminación para nosotros en verbos -er es «-emos»: comemos."}]
                    },
                    {
                        "slug": "hay-vs-esta", "title": "Hay vs Está/Están", "subtitle": "Existencia vs ubicación", "page_num": 6,
                        "table_head": ["Forma", "Función", "Ejemplo"],
                        "table_rows": [
                            ["Hay", "Existencia de algo indeterminado", "Hay un parque cerca / Hay muchos coches"],
                            ["Está / Están", "Ubicación de algo determinado", "El parque está cerca / Los coches están allí"]
                        ],
                        "attention": "«Hay» no cambia nunca en plural (no existe *hayan para existencia).",
                        "mnemonic": "Hay + un/una/número; Está + el/la/mi/tu.",
                        "mistakes": [{"wrong": "El banco hay en la esquina", "right": "El banco está en la esquina"}],
                        "check_items": ["Usar «hay» con artículos indeterminados", "Usar «está» con artículos determinados"],
                        "quiz": [{"q": "¿Cómo se dice «There is a hotel near here»?", "opts": ["Está un hotel cerca de aquí", "Hay un hotel cerca de aquí", "Es un hotel cerca de aquí"], "correct": 1, "explain": "Para expresar la existencia de algo indeterminado se usa «Hay»."}]
                    },
                    {
                        "slug": "pretérito-perfecto", "title": "Pretérito perfecto compuesto", "subtitle": "Verbo haber + participio", "page_num": 7,
                        "table_head": ["Pronombre", "Haber", "Participio (-ar -> -ado / -er,-ir -> -ido)"],
                        "table_rows": [
                            ["yo", "he", "hablado / comido"],
                            ["tú", "has", "hablado / comido"],
                            ["él / ella", "ha", "hablado / comido"],
                            ["nosotros/as", "hemos", "hablado / comido"],
                            ["ellos/as", "han", "hablado / comido"]
                        ],
                        "attention": "El participio compuesto con «haber» no cambia de género ni de número.",
                        "mnemonic": "He, has, ha, hemos, han + participio en -ado/-ido.",
                        "mistakes": [{"wrong": "Ellos han hablados", "right": "Ellos han hablado"}],
                        "check_items": ["Conjugar el verbo auxiliar haber", "Formar participios regulares en -ado e -ido"],
                        "quiz": [{"q": "¿Cuál es la forma correcta para «we have eaten»?", "opts": ["hemos comido", "han comido", "he comido"], "correct": 0, "explain": "La primera persona plural de haber es «hemos»: hemos comido."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "deutsche-grammatik",
        "title": "Deutsche Grammatik (A0–A1)",
        "nav_title": "Deutsche Grammatik",
        "lang": "de",
        "lead": "Das interaktive Handbuch der deutschen Grammatik COSYlanguages: Kapitel, Grammatikstrukturen, Selbstchecks und Übungen.",
        "back_link": "Zurück zu COSYlanguages",
        "sections": [
            {
                "id": "kapitel-1", "file": "kapitel-1.html", "title": "Kapitel 1 · Nomen und Artikel", "subtitle": "Der, die, das, Plural und Nominativ/Akkusativ", "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "artikel-und-genus", "title": "Artikel und Genus", "subtitle": "Maskulin, Feminin und Neutral im Deutschen", "page_num": 1,
                        "table_head": ["Genus", "Bestimmter Artikel", "Unbestimmter Artikel", "Plural"],
                        "table_rows": [
                            ["Maskulin", "der Mann", "ein Mann", "die Männer"],
                            ["Feminin", "die Frau", "eine Frau", "die Frauen"],
                            ["Neutral", "das Kind", "ein Kind", "die Kinder"]
                        ],
                        "attention": "Im Deutschen gibt es drei grammatische Geschlechter: der (m), die (f), das (n).",
                        "mnemonic": "Lerne jedes Nomen immer zusammen mit seinem bestimmten Artikel!",
                        "mistakes": [{"wrong": "das Mann", "right": "der Mann"}],
                        "check_items": ["Die drei bestimmten Artikel nennen", "Nomen immer mit Artikel lernen"],
                        "quiz": [{"q": "Welcher Artikel passt zu «Frau»?", "opts": ["der", "die", "das"], "correct": 1, "explain": "«Frau» ist feminin: die Frau."}]
                    },
                    {
                        "slug": "nominativ-und-akkusativ", "title": "Nominativ und Akkusativ", "subtitle": "Subjekt und direktes Objekt", "page_num": 2,
                        "table_head": ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
                        "table_rows": [
                            ["Nominativ (Subjekt)", "der / ein", "die / eine", "das / ein", "die"],
                            ["Akkusativ (Objekt)", "den / einen", "die / eine", "das / ein", "die"]
                        ],
                        "attention": "Nur der maskuline Artikel ändert sich im Akkusativ: der -> den / ein -> einen.",
                        "mnemonic": "Akkusativ verändert nur MÄNNLICHE Wörter (der -> den).",
                        "mistakes": [{"wrong": "Ich habe ein Hund", "right": "Ich habe einen Hund"}],
                        "check_items": ["Den Akkusativ bei maskulinen Nomen bilden", "Erkennen, wann ein Objekt im Akkusativ steht"],
                        "quiz": [{"q": "Wie heißt der Akkusativ von «der Apfel» in «Ich kaufe ...»?", "opts": ["der Apfel", "den Apfel", "dem Apfel"], "correct": 1, "explain": "«Apfel» ist maskulin und Akkusativobjekt: den Apfel."}]
                    },
                    {
                        "slug": "personalpronomen", "title": "Personalpronomen und Possessivartikel", "subtitle": "Ich, du, er, sie, es, mein, dein", "page_num": 3,
                        "table_head": ["Personalpronomen", "Possessivartikel (Maskulin/Neutral)", "Possessivartikel (Feminin/Plural)"],
                        "table_rows": [
                            ["ich", "mein Vater", "meine Mutter"],
                            ["du", "dein Vater", "deine Mutter"],
                            ["er / es", "sein Vater", "seine Mutter"],
                            ["sie", "ihr Vater", "ihre Mutter"],
                            ["wir", "unser Vater", "unsere Mutter"]
                        ],
                        "attention": "Possessivartikel bekommen ein -e am Ende, wenn das Nomen feminin ist oder im Plural steht.",
                        "mnemonic": "Mein Vater (m/n) - Meine Mutter (f/pl).",
                        "mistakes": [{"wrong": "mein Mutter", "right": "meine Mutter"}],
                        "check_items": ["Personalpronomen korrekt zuordnen", "Possessivartikel an das Genus anpassen"],
                        "quiz": [{"q": "Wie heißt das Possessivpronomen für «ich» bei «Mutter» (f)?", "opts": ["mein Mutter", "meine Mutter", "meines Mutter"], "correct": 1, "explain": "Vor femininen Nomen heißt es «meine»."}]
                    }
                ]
            },
            {
                "id": "kapitel-2", "file": "kapitel-2.html", "title": "Kapitel 2 · Verben und Satzbau", "subtitle": "Präsens, Modalverben und V2-Wortstellung", "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "praesens-regelmaessig", "title": "Präsens regelmäßiger Verben", "subtitle": "Endungen im Präsens (-e, -st, -t, -en)", "page_num": 4,
                        "table_head": ["Pronomen", "Endung", "Beispiel (lernen)", "Beispiel (machen)"],
                        "table_rows": [
                            ["ich", "-e", "lerne", "mache"],
                            ["du", "-st", "lernst", "machst"],
                            ["er / sie / es", "-t", "lernt", "macht"],
                            ["wir", "-en", "lernen", "machen"],
                            ["ihr", "-t", "lernt", "macht"],
                            ["sie / Sie", "-en", "lernen", "machen"]
                        ],
                        "attention": "Entferne die Endung -en vom Infinitiv und hänge die passende Personalendung an.",
                        "mnemonic": "Endungen: e – st – t – en – t – en.",
                        "mistakes": [{"wrong": "Du lerne Deutsch", "right": "Du lernst Deutsch"}],
                        "check_items": ["Regelmäßige Verben im Präsens konjugieren", "Personalendungen auswendig können"],
                        "quiz": [{"q": "Welche Endung gehört zu «du»?", "opts": ["-e", "-st", "-t"], "correct": 1, "explain": "Die Endung für die zweite Person Singular «du» ist «-st»."}]
                    },
                    {
                        "slug": "sein-und-haben", "title": "Verben sein und haben", "subtitle": "Die zwei wichtigsten Hilfsverben", "page_num": 5,
                        "table_head": ["Personalpronomen", "sein", "haben"],
                        "table_rows": [
                            ["ich", "bin", "habe"],
                            ["du", "bist", "hast"],
                            ["er / sie / es", "ist", "hat"],
                            ["wir", "sind", "haben"],
                            ["ihr", "seid", "habt"],
                            ["sie / Sie", "sind", "haben"]
                        ],
                        "attention": "Das Verb steht im normalen deutschen Aussagesatz immer an Position 2.",
                        "mnemonic": "V2-Regel: Subjekt – Verb (Pos. 2) – Rest.",
                        "mistakes": [{"wrong": "Ich haben einen Hund", "right": "Ich habe einen Hund"}],
                        "check_items": ["Sein und haben im Präsens konjugieren", "Die V2-Regel im Aussagesatz anwenden"],
                        "quiz": [{"q": "Wie heißt die richtige Form für «du» bei «sein»?", "opts": ["du bin", "du bist", "du ist"], "correct": 1, "explain": "Die Form für du lautet «bist»."}]
                    },
                    {
                        "slug": "modalverben", "title": "Modalverben (können, müssen, wollen)", "subtitle": "Bedeutung und Satzstellung", "page_num": 6,
                        "table_head": ["Pronomen", "können", "müssen", "wollen"],
                        "table_rows": [
                            ["ich", "kann", "muss", "will"],
                            ["du", "kannst", "musst", "willst"],
                            ["er / sie / es", "kann", "muss", "will"],
                            ["wir", "können", "müssen", "wollen"]
                        ],
                        "attention": "Das Modalverb steht an Position 2, der Vollverb-Infinitiv steht ganz am Ende des Satzes.",
                        "mnemonic": "Modalverb auf Pos. 2 – Infinitiv am Satzende!",
                        "mistakes": [{"wrong": "Ich kann sprechen Deutsch gut", "right": "Ich kann gut Deutsch sprechen"}],
                        "check_items": ["Modalverben im Singular konjugieren", "Den Infinitiv ans Satzende stellen"],
                        "quiz": [{"q": "Wo steht der Infinitiv bei einem Satz mit Modalverb?", "opts": ["An Position 1", "An Position 2", "Ganz am Ende"], "correct": 2, "explain": "Der Infinitiv steht im Hauptsatz mit Modalverb ganz am Satzende."}]
                    },
                    {
                        "slug": "perfekt", "title": "Perfekt mit haben und sein", "subtitle": "Vergangenheit im Alltag", "page_num": 7,
                        "table_head": ["Hilfsverb", "Verwendung", "Partizip II Form", "Beispiel"],
                        "table_rows": [
                            ["haben", "Meiste Verben / Transitiv", "ge- + Stamm + -t", "Ich habe gelernt"],
                            ["sein", "Bewegung von A nach B / Ortswechsel", "ge- + Stamm + -en/-t", "Ich bin gefahren"]
                        ],
                        "attention": "Das Hilfsverb steht an Position 2, das Partizip II am Ende des Satzes.",
                        "mnemonic": "Bewegung = sein (ich bin gegangen); Sonst = haben (ich habe gemacht).",
                        "mistakes": [{"wrong": "Ich habe nach Berlin gefahren", "right": "Ich bin nach Berlin gefahren"}],
                        "check_items": ["Das passende Hilfsverb (haben oder sein) wählen", "Partizip II bilden und ans Ende stellen"],
                        "quiz": [{"q": "Welches Hilfsverb nutzt man bei «gehen» im Perfekt?", "opts": ["haben", "sein", "werden"], "correct": 1, "explain": "Gehen drückt eine Ortsveränderung aus und bildet das Perfekt mit «sein»."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "gramatica-portuguesa",
        "title": "Gramática portuguesa (A0–A1)",
        "nav_title": "Gramática portuguesa",
        "lang": "pt",
        "lead": "O manual interativo de gramática portuguesa COSYlanguages: capítulos, tabelas, autoavaliação e exercícios.",
        "back_link": "Voltar para COSYlanguages",
        "sections": [
            {
                "id": "capitulo-1", "file": "capitulo-1.html", "title": "Capítulo 1 · Substantivos e artigos", "subtitle": "Gênero gramatical, artigos definidos e indefinidos", "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "genero-dos-substantivos", "title": "Gênero dos substantivos", "subtitle": "Masculino e feminino em português", "page_num": 1,
                        "table_head": ["Gênero", "Terminação", "Exemplo singular", "Exemplo plural"],
                        "table_rows": [
                            ["Masculino", "-o", "o livro", "os livros"],
                            ["Feminino", "-a", "a casa", "as casas"]
                        ],
                        "attention": "Substantivos terminados em -o são geralmente masculinos; em -a são femininos.",
                        "mnemonic": "Associe sempre o artigo ao substantivo: o amigo / a amiga.",
                        "mistakes": [{"wrong": "a livro", "right": "o livro"}],
                        "check_items": ["Identificar o gênero dos substantivos", "Usar os artigos definidos o/a/os/as"],
                        "quiz": [{"q": "Qual é o plural correto de «a casa»?", "opts": ["as casa", "as casas", "os casas"], "correct": 1, "explain": "O plural feminino de «a casa» é «as casas»."}]
                    },
                    {
                        "slug": "artigos-definidos", "title": "Artigos definidos e indefinidos", "subtitle": "O, a, os, as / um, uma, uns, umas", "page_num": 2,
                        "table_head": ["Tipo", "Masculino Singular", "Feminino Singular", "Masculino Plural", "Feminino Plural"],
                        "table_rows": [
                            ["Definido", "o carro", "a mesa", "os carros", "as mesas"],
                            ["Indefinido", "um carro", "uma mesa", "uns carros", "umas mesas"]
                        ],
                        "attention": "Usam-se artigos definidos antes de nomes próprios e possessivos em português europeu.",
                        "mnemonic": "O / A para coisas específicas; Um / Uma para genéricas.",
                        "mistakes": [{"wrong": "um mesa", "right": "uma mesa"}],
                        "check_items": ["Empregar artigos definidos e indefinidos", "Concordar artigos em gênero e número"],
                        "quiz": [{"q": "Qual é o artigo indefinido feminino singular?", "opts": ["um", "uma", "uns"], "correct": 1, "explain": "O artigo indefinido feminino singular é «uma»."}]
                    },
                    {
                        "slug": "plural-dos-substantivos", "title": "Formação do plural", "subtitle": "Regras gerais para vogais e consoantes", "page_num": 3,
                        "table_head": ["Terminação", "Regra de Plural", "Exemplo singular", "Exemplo plural"],
                        "table_rows": [
                            ["Vogal", "Adicionar -s", "o livro", "os livros"],
                            ["-r, -s, -z", "Adicionar -es", "o mar", "os mares"],
                            ["-ão", "-ões / -ães / -ãos", "o pão", "os pães"]
                        ],
                        "attention": "Palavras terminadas em -ão têm plurais irregulares (-ões, -ães, -ãos).",
                        "mnemonic": "Vogal + S; Consoante R/S/Z + ES.",
                        "mistakes": [{"wrong": "os mar", "right": "os mares"}],
                        "check_items": ["Formar o plural de palavras terminadas em vogal e consoante", "Reconhecer plurais em -ão"],
                        "quiz": [{"q": "Como se forma o plural de «o mar»?", "opts": ["os mars", "os mares", "as mares"], "correct": 1, "explain": "Palavras terminadas em -r acrescentam «-es»: os mares."}]
                    }
                ]
            },
            {
                "id": "capitulo-2", "file": "capitulo-2.html", "title": "Capítulo 2 · Verbos fundamentais", "subtitle": "Ser vs Estar e presente do indicativo", "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "ser-vs-estar", "title": "Ser vs Estar", "subtitle": "Diferenças essenciais entre os dois verbos", "page_num": 4,
                        "table_head": ["Verbo", "Uso principal", "Exemplo"],
                        "table_rows": [
                            ["Ser", "Identidade permanente, nacionalidade, profissão", "Eu sou professor / Ela é do Brasil"],
                            ["Estar", "Estado temporário, localização, sentimentos", "O livro está na mesa / Estou cansado"]
                        ],
                        "attention": "Use «ser» para características permanentes e «estar» para estados temporários e localização.",
                        "mnemonic": "Ser = essência; Estar = estado ou lugar.",
                        "mistakes": [{"wrong": "Eu sou cansado", "right": "Eu estou cansado"}],
                        "check_items": ["Distinguir entre ser e estar", "Empregar estar para indicar localização"],
                        "quiz": [{"q": "Como se diz «She is tired»?", "opts": ["Ela é cansada", "Ela está cansada", "Ela tem cansada"], "correct": 1, "explain": "Para estados temporários como cansaço, usa-se o verbo «estar»."}]
                    },
                    {
                        "slug": "presente-do-indicativo", "title": "Presente do indicativo", "subtitle": "Conjugação dos verbos regulares em -ar, -er, -ir", "page_num": 5,
                        "table_head": ["Pronombre", "-AR (falar)", "-ER (comer)", "-IR (abrir)"],
                        "table_rows": [
                            ["eu", "falo", "como", "abro"],
                            ["tu", "falas", "comes", "abres"],
                            ["ele / ela / você", "fala", "come", "abre"],
                            ["nós", "falamos", "comemos", "abrimos"],
                            ["eles / elas / vocês", "falam", "comem", "abrem"]
                        ],
                        "attention": "A primeira pessoa do singular (eu) termina sempre em -o nas três conjugações.",
                        "mnemonic": "Eu falo, tu falas, ele fala.",
                        "mistakes": [{"wrong": "Eu fala português", "right": "Eu falo português"}],
                        "check_items": ["Conjugar verbos regulares no presente", "Reconhecer as terminações -ar, -er, -ir"],
                        "quiz": [{"q": "Qual é a forma correta para «nós» no verbo «comer»?", "opts": ["comemos", "comem", "comes"], "correct": 0, "explain": "A terminação de primeira pessoa do plural para verbos em -er é «-emos»: comemos."}]
                    },
                    {
                        "slug": "preterito-perfeito", "title": "Pretérito perfeito simples", "subtitle": "Ações concluídas no passado", "page_num": 6,
                        "table_head": ["Pronombre", "-AR (falar)", "-ER (comer)", "-IR (abrir)"],
                        "table_rows": [
                            ["eu", "falei", "comi", "abri"],
                            ["tu", "falaste", "comeste", "abriste"],
                            ["ele / ela", "falou", "comeu", "abriu"],
                            ["nós", "falamos", "comemos", "abrimos"],
                            ["eles / elas", "falaram", "comeram", "abriram"]
                        ],
                        "attention": "O pretérito perfeito indica uma ação pontual completamente terminada no passado.",
                        "mnemonic": "Ontem eu falei, comi e abri a porta.",
                        "mistakes": [{"wrong": "Ontem eu falo com ele", "right": "Ontem eu falei com ele"}],
                        "check_items": ["Conjugar verbos regulares no pretérito perfeito", "Expressar ações concluídas no passado"],
                        "quiz": [{"q": "Qual é a forma de «eu» no passado para o verbo «falar»?", "opts": ["falo", "falei", "falou"], "correct": 1, "explain": "A primeira pessoa do singular no pretérito perfeito dos verbos em -ar é «-ei»: falei."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "tatar-teli-grammatikasy",
        "title": "Татар теле грамматикасы (A0–A1)",
        "nav_title": "Татар теле грамматикасы",
        "lang": "tt",
        "lead": "Татар теле грамматикасы буенча интерактив белешмәлек: бүлекләр, гармония кагыйдәләре, кушымчалар һәм күнегүләр.",
        "back_link": "COSYlanguages төп сайтына кайту",
        "sections": [
            {
                "id": "bulek-1", "file": "bulek-1.html", "title": "1 нче бүлек · Сингармонизм һәм килешләр", "subtitle": "Сузыклар гармониясе һәм татар теленең 6 килеше", "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "singarmonizm", "title": "Сузыклар сингарнизмы", "subtitle": "Калын һәм нечкә сузыклар кагыйдәсе", "page_num": 1,
                        "table_head": ["Төр", "Сузыклар", "Мисал", "Кушымча мисалы"],
                        "table_rows": [
                            ["Калын сузыклар", "а, о, у, ы", "кала (шәһәр)", "кала-да"],
                            ["Нечкә сузыклар", "ә, ө, ү, и, е", "өй (йорт)", "өй-дә"]
                        ],
                        "attention": "Сүздәге соңгы сузык калын булса, кушымча да калын була; нечкә булса — нечкә була.",
                        "mnemonic": "Калын сүзгә — калын кушымча, нечкә сүзгә — нечкә кушымча!",
                        "mistakes": [{"wrong": "өйдә (калын)", "right": "өйдә (нечкә)"}],
                        "check_items": ["Калын һәм нечкә сузыкларны аера белү", "Сингармонизмга карап кушымча ялгау"],
                        "quiz": [{"q": "«Өй» сүзенә кайсы урын-вакыт кушымчасы ялгана?", "opts": ["-да", "-дә", "-та"], "correct": 1, "explain": "«Өй» — нечкә сузыклы сүз, шуңа күрә «-дә» кушымчасы ялгана."}]
                    },
                    {
                        "slug": "kileshlar", "title": "Татар теленең 6 килеше", "subtitle": "Баш, иялек, юнәлеш, төшем, чыгыш, урын-вакыт", "page_num": 2,
                        "table_head": ["Килеш", "Сораулар", "Калын кушымча", "Мисал (мәктәп)"],
                        "table_rows": [
                            ["Баш килеш", "Кем? Нәрсә?", "—", "мәктәп"],
                            ["Иялек килеш", "Кемнең? Нәрстәнең?", "-ның / -нең", "мәктәпнең"],
                            ["Юнәлеш килеш", "Кемгә? Нәрсәгә?", "-га / -гә / -ка / -кә", "мәктәпкә"],
                            ["Төшем килеш", "Кемне? Нәрстәне?", "-ны / -не", "мәктәпне"],
                            ["Урын-вакыт", "Кемдә? Нәрсәдә?", "-да / -дә / -та / -тә", "мәктәптә"],
                            ["Чыгыш килеш", "Кемдән? Нәрсәдән?", "-дан / -дән / -тан / -тән", "мәктәптән"]
                        ],
                        "attention": "Татар телендә 6 килеш бар. Кушымчалар сингармонизмга бойсына.",
                        "mnemonic": "Баш, Иялек, Юнәлеш, Төшем, Урын-вакыт, Чыгыш.",
                        "mistakes": [{"wrong": "мәктәпга", "right": "мәктәпкә (глухой тартыштан соң -кә)"}],
                        "check_items": ["6 килешнең сорауларын белү", "Килеш кушымчаларын дөрес ялгау"],
                        "quiz": [{"q": "«Кала» сүзенә чыгыш килеш кушымчасы кайсы?", "opts": ["-дан", "-дән", "-тан"], "correct": 0, "explain": "«Кала» — калын сузыклы һәм сузыкка тәмамлана, шуңа күрә «-дан»."}]
                    },
                    {
                        "slug": "iyalek-kushymchalary", "title": "Иялек кушымчалары", "subtitle": "Минем, синең, аның кушымчалары", "page_num": 3,
                        "table_head": ["Зат", "Алышма", "Кушымча (сузыкка)", "Мисал (китап)"],
                        "table_rows": [
                            ["1 нче зат", "минем", "-м / -ым / -ем", "китабым"],
                            ["2 нче зат", "синең", "-ң / -ың / -ең", "китабың"],
                            ["3 нче зат", "аның", "-сы / -се / -ы / -е", "китабы"],
                            ["1 нче зат күплек", "безнең", "-быз / -без", "китабыбыз"]
                        ],
                        "attention": "Иялек кушымчалары калынлык-нечкәлеккә карап үзгәрә.",
                        "mnemonic": "Минем китабым, синең китабың, аның китабы.",
                        "mistakes": [{"wrong": "минем китапсы", "right": "минем китабым"}],
                        "check_items": ["Иялек кушымчаларын ялгау", "Затлар буенча дөрес куллану"],
                        "quiz": [{"q": "«Минем» сүзе белән кайсы форма дөрес?", "opts": ["китабым", "китабың", "китабы"], "correct": 0, "explain": "Минем (моя/мой) өчен -м/-ым/-ем кушымчасы: китабым."}]
                    }
                ]
            },
            {
                "id": "bulek-2", "file": "bulek-2.html", "title": "2 нче бүлек · Фигыльләр һәм заманнар", "subtitle": "Хәзерге, үткән һәм киләчәк заман фигыльләре", "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "hazierge-zaman", "title": "Хәзерге заман фигыльләр", "subtitle": "Фигыльнең хәзерге заман кушымчалары", "page_num": 4,
                        "table_head": ["Зат", "Алышма", "Фигыль мисалы (уку)"],
                        "table_rows": [
                            ["1 нче зат (берлек)", "мин", "укыйм"],
                            ["2 нче зат (берлек)", "син", "укыйсың"],
                            ["3 нче зат (берлек)", "ул", "укый"],
                            ["1 нче зат (күплек)", "без", "укыйбыз"],
                            ["2 нче зат (күплек)", "сез", "укыйсыз"],
                            ["3 нче зат (күплек)", "алар", "укыйлар"]
                        ],
                        "attention": "Хәзерге заманда фигыль тамырына -ый/-ий яки -а/-ә кушымчасы ялгана.",
                        "mnemonic": "Мин укыйм, син укыйсың, ул укый.",
                        "mistakes": [{"wrong": "Мин укыйсың", "right": "Мин укыйм"}],
                        "check_items": ["Хәзерге заман фигыльләрен затлар буенча төрләндерү", "Зат-лек кушымчаларын дөрес куллану"],
                        "quiz": [{"q": "«Без» (күплек) заты өчен кайсы форма дөрес?", "opts": ["укыйм", "укыйбыз", "укыйлар"], "correct": 1, "explain": "«Без» заты өчен -быз/-без кушымчасы ялгана: укыйбыз."}]
                    },
                    {
                        "slug": "utkan-zaman", "title": "Үткән заман фигыльләр", "subtitle": "Билгеле үткән заман (-ды/-де/-ты/-те)", "page_num": 5,
                        "table_head": ["Зат", "Алышма", "Мисал (язу)"],
                        "table_rows": [
                            ["1 нче зат", "мин", "яздым"],
                            ["2 нче зат", "син", "яздың"],
                            ["3 нче зат", "ул", "язды"],
                            ["1 нче зат күплек", "без", "яздык"]
                        ],
                        "attention": "Билгеле үткән заман кушымчасы -ды/-де (җанлы тартыштан соң -ты/-те).",
                        "mnemonic": "Мин яздым, син яздың, ул язды.",
                        "mistakes": [{"wrong": "Мин язды", "right": "Мин яздым"}],
                        "check_items": ["Үткән заман кушымчаларын ялгау", "Зат кушымчаларын куллану"],
                        "quiz": [{"q": "«Мин» заты өчен үткән заман кушымчасы кайсы?", "opts": ["-дым", "-дың", "-ды"], "correct": 0, "explain": "Мин яздым (-дым)."}]
                    },
                    {
                        "slug": "kilechak-zaman", "title": "Киләчәк заман фигыльләр", "subtitle": "Билгеле киләчәк заман (-ачак/-әчәк)", "page_num": 6,
                        "table_head": ["Зат", "Алышма", "Мисал (бару)"],
                        "table_rows": [
                            ["1 нче зат", "мин", "барачакмын"],
                            ["2 нче зат", "син", "барачаксың"],
                            ["3 нче зат", "ул", "барачак"]
                        ],
                        "attention": "Билгеле киләчәк заман кушымчасы -ачак/-әчәк яки -ячак/-ячәк.",
                        "mnemonic": "Мин барачакмын (I will go).",
                        "mistakes": [{"wrong": "Мин барачак", "right": "Мин барачакмын"}],
                        "check_items": ["Киләчәк заман формаларын ясау", "Зат кушымчаларын дөрес ялгау"],
                        "quiz": [{"q": "«Мин» затында киләчәк заман формасы кайсы?", "opts": ["барачакмын", "барачаксың", "барачак"], "correct": 0, "explain": "Мин барачакмын."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "bashqort-tele-grammatikahy",
        "title": "Башҡорт теле грамматикаһы (A0–A1)",
        "nav_title": "Башҡорт теле грамматикаһы",
        "lang": "ba",
        "lead": "Башҡорт теле грамматикаһы буйынса интерактив белешмәлек: бүлектәр, аффикстар, үҙ-үҙеңде тикшереү һәм күнегеүҙәр.",
        "back_link": "COSYlanguages төп сайтына ҡайтыу",
        "sections": [
            {
                "id": "bulek-1", "file": "bulek-1.html", "title": "1-се бүлек · Өндәр һәм килештәр", "subtitle": "Сингармонизм кағиҙәләре һәм башҡорт теленең килештәре", "stripe": "#1c9483",
                "topics": [
                    {
                        "slug": "haudhaktar-hahem-affikstar", "title": "Һуҙынҡылар һәм аффикстар", "subtitle": "Башҡорт телендә сингармонизм кағиҙәһе", "page_num": 1,
                        "table_head": ["Төр", "Һуҙынҡылар", "Мисал", "Аффикс мисалы"],
                        "table_rows": [
                            ["Ҡалындар", "а, о, у, ы", "ҡала (город)", "ҡала-ҙа"],
                            ["Нескә һуҙынҡылар", "ә, ө, ү, и, е", "өй (дом)", "өй-ҙә"]
                        ],
                        "attention": "Һүҙҙең һуңғы һуҙынҡыһы аффикстың төрөн билдәләй.",
                        "mnemonic": "Ҡалын өнгә — ҡалын аффикс!",
                        "mistakes": [{"wrong": "ҡалаҙа (нескә)", "right": "ҡалала / ҡалаҙа"}],
                        "check_items": ["Һуҙынҡыларҙың бәйләнешен аңлау", "Сингармонизм буйынса аффикс ҡушыу"],
                        "quiz": [{"q": "«Өй» һүҙенә ниндәй урын-ваҡыт аффиксы ҡушыла?", "opts": ["-ҙа", "-ҙә", "-та"], "correct": 1, "explain": "«Өй» — нескә һүҙ, шуға күрә «-ҙә» аффиксы ҡушыла."}]
                    },
                    {
                        "slug": "kileshtar", "title": "Башҡорт теленең килештәре", "subtitle": "Төп, эйәлек, төбәү, түшәм, урын-ваҡыт, сығыш", "page_num": 2,
                        "table_head": ["Килеш", "Һорауҙар", "Аффикс", "Мисал (мәктәп)"],
                        "table_rows": [
                            ["Төп килеш", "Кем? Нәмә?", "—", "мәктәп"],
                            ["Эйәлек килеш", "Кемдең? Нәмәнең?", "-тың / -нең", "мәктәптең"],
                            ["Төбәү килеш", "Кемгә? Нәмәгә?", "-ға / -гә / -ҡа / -кә", "мәктәпкә"],
                            ["Түшәм килеш", "Кемде? Нәмәне?", "-ны / -не", "мәктәпне"],
                            ["Урын-ваҡыт", "Кемдә? Нәмәдә?", "-ла / -лә / -та / -тә", "мәктәптә"],
                            ["Сығыш килеш", "Кемдән? Нәмәнән?", "-дан / -дән / -тан / -тән", "мәктәптән"]
                        ],
                        "attention": "Башҡорт телендә 6 төп килеш бар. Аффикстар сингармонизмға буйһона.",
                        "mnemonic": "Төп, Эйәлек, Төбәү, Түшәм, Урын-ваҡыт, Сығыш.",
                        "mistakes": [{"wrong": "мәктәпға", "right": "мәктәпкә"}],
                        "check_items": ["6 килештең һорауҙарын белеү", "Килеш аффикстарын дөрөҫ ҡушыу"],
                        "quiz": [{"q": "«Ҡала» һүҙенә сығыш килеш аффиксы ҡайһы?", "opts": ["-дан", "-дән", "-тан"], "correct": 0, "explain": "Ҡала — ҡалын һүҙ, шуға күрә «-дан»."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "chavash-grammatika",
        "title": "Чăваш грамматики (A0–A1)",
        "nav_title": "Чăваш грамматики",
        "lang": "cv",
        "lead": "Чăваш грамматикин интерактивлă справочникĕ: пайсем, сасăсем, падежсем тата хăвăра тĕрĕслемелли хăнăхтарусем.",
        "back_link": "COSYlanguages тĕп сайта таврăнмалли",
        "sections": [
            {
                "id": "pay-1", "file": "pay-1.html", "title": "1-мĕш пай · Сасăсем тата падежсем", "subtitle": "Чăваш чĕлхин сингармонизмĕ тата падежсем", "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "sasamssam-tata-singarmonizm", "title": "Сасăсем тата сингармонизм", "subtitle": "Хытă тата çемçе сасăсен калăпăшĕ", "page_num": 1,
                        "table_head": ["Тĕсĕ", "Уçă сасăсем", "Тĕслĕх", "Аффикс тĕслĕхĕ"],
                        "table_rows": [
                            ["Хытă сасăсем", "а, о, у, ы", "яла (деревня)", "ял-та"],
                            ["Çемçе сасăсем", "ĕ, ĕ, ӳ, и", "çĕр (земля)", "çĕр-те"]
                        ],
                        "attention": "Сăмахри юлашки уçă сасă аффикс тĕсне кăтартать.",
                        "mnemonic": "Хытă сасма хытă аффикс хушăнать.",
                        "mistakes": [{"wrong": "ялта (çемçе)", "right": "ялта (хытă)"}],
                        "check_items": ["Уçă сасăсен уйрăмлăхĕсене пĕлни", "Аффиксене тĕрĕс хушас пĕлни"],
                        "quiz": [{"q": "«Ял» сăмахне мĕнле аффикс хушăнать?", "opts": ["-та", "-те", "-ти"], "correct": 0, "explain": "«Ял» — хытă сасăллă сăмах, шунпа «-та» аффикс хушăнать."}]
                    },
                    {
                        "slug": "padezhsem", "title": "Чăваш чĕлхин 8 падежĕ", "subtitle": "Ят, илек, пĕрлештерӳ тата ытти падежсем", "page_num": 2,
                        "table_head": ["Падеж", "Ыйтусем", "Аффикс", "Тĕслĕх (кил)"],
                        "table_rows": [
                            ["Ят падежĕ", "Кам? Мĕн?", "—", "кил"],
                            ["Илек падежĕ", "Камăн? Мĕнĕн?", "-ăн / -ĕн", "килĕн"],
                            ["Пĕрлештерӳ падежĕ", "Кампа? Мĕнпе?", "-па / -пе", "килпе"]
                        ],
                        "attention": "Чăваш чĕлхинче 8 падеж бар.",
                        "mnemonic": "Ят, Илек, Пĕрлештерӳ тата ыттисем.",
                        "mistakes": [{"wrong": "килпа", "right": "килпе"}],
                        "check_items": ["Падеж ыйтăвĕсене пĕлни", "Падеж аффиксĕсене тĕрĕс хушни"],
                        "quiz": [{"q": "«Кил» (çемçе) сăмахне мĕнле пĕрлештерӳ аффиксĕ хушăнать?", "opts": ["-па", "-пе", "-та"], "correct": 1, "explain": "Килпе (-пе)."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "hayots-lezvi-kerakanutyun",
        "title": "Հայոց լեզվի քերականություն (A0–A1)",
        "nav_title": "Հայոց լեզվի քերականություն",
        "lang": "hy",
        "lead": "Հայոց լեզվի քերականության ինտերակտիվ ուղեցույց. մասեր, հոլովներ, ինքնաստուգում և վարժություններ:",
        "back_link": "Վերադառնալ COSYlanguages գլխավոր էջ",
        "sections": [
            {
                "id": "mas-1", "file": "mas-1.html", "title": "Մաս 1 · Գոյական և հոլովներ", "subtitle": "Հայերենի որոշյալ հոդերը և հոլովման համակարգը", "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "goyakan-yev-hoder", "title": "Գոյական անուն և որոշյալ հոդեր", "subtitle": "Որոշյալ -ը / -ն հոդերի կիրառությունը", "page_num": 1,
                        "table_head": ["Տեսակ", "Վերջավորություն", "Օրինակ", "Որոշյալ ձև"],
                        "table_rows": [
                            ["Անորոշ", "առանց հոդի", "տուն", "տունը (-ը բաղաձայնից հետո)"],
                            ["Որոշյալ (ձայնավորից հետո)", "-ն", "կատու", "կատուն (-ն ձայնավորից հետո)"]
                        ],
                        "attention": "Բաղաձայնով ավարտվող բառերին ավելանում է -ը, ձայնավորով ավարտվողներին՝ -ն։",
                        "mnemonic": "Հիշեք՝ տունը (բաղաձայն), կատուն (ձայնավոր)։",
                        "mistakes": [{"wrong": "տունն (բաղաձայնից հետո)", "right": "տունը"}],
                        "check_items": ["Որոշյալ -ը և -ն հոդերը ճիշտ կիրառել", "Բաղաձայնով և ձայնավորով ավարտվող բառերը տարբերակել"],
                        "quiz": [{"q": "Ո՞ր հոդն է ավելանում «կատու» բառին։", "opts": ["-ը", "-ն", "-ա"], "correct": 1, "explain": "Ձայնավորով ավարտվող բառերն ստանում են -ն հոդը։"}]
                    },
                    {
                        "slug": "holovner", "title": "Հայերենի 7 հոլովները", "subtitle": "Ուղղական, սեռական, տրական, հայցական, բացառական, գործիական, ներգոյական", "page_num": 2,
                        "table_head": ["Հոլով", "Հարցեր", "Վերջավորություն", "Օրինակ (տուն)"],
                        "table_rows": [
                            ["Ուղղական", "Ո՞վ, Ի՞նչ", "—", "տուն"],
                            ["Սեռական", "Ո՞ւմ, Ինչի՞", "-ան / -ի", "տան"],
                            ["Տրական", "Ո՞ւմ, Ինչի՞ն", "-ան / -ի + -ն/-ը", "տանը"],
                            ["Բացառական", "Ումի՞ց, Ինչի՞ց", "-ից", "տնից"],
                            ["Գործիական", "Ումո՞վ, Ինչո՞վ", "-ով", "տնով"],
                            ["Ներգոյական", "Ուրտե՞ղ, Ինչո՞ւմ", "-ում", "տանը / տնում"]
                        ],
                        "attention": "Ժամանակակից հայերենն ունի 7 հոլով։",
                        "mnemonic": "Ուղղական, Սեռական, Տրական, Հայցական, Բացառական, Գործիական, Ներգոյական։",
                        "mistakes": [{"wrong": "տնիցում", "right": "տնից"}],
                        "check_items": ["Ճանաչել 7 հոլովների վերջավորությունները", "Ճիշտ կազմել բացառական և գործիական հոլովները"],
                        "quiz": [{"q": "Ո՞ր վերջավորությունն է բացառական հոլովինը։", "opts": ["-ից", "-ով", "-ում"], "correct": 0, "explain": "Բացառական հոլովի վերջավորությունն է «-ից» (օրինակ՝ տնից)։"}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "qartuli-gramatika",
        "title": "ქართული ენა · გრამატიკა (A0–A1)",
        "nav_title": "ქართული გრამატიკა",
        "lang": "ka",
        "lead": "ქართული ენის გრამატიკის ინტერაქტიული სახელმძღვანელო: ნაწილები, ბრუნვები, თვითშემოწმება და სავარჯიშოები.",
        "back_link": "COSYlanguages-ის მთავარ გვერდზე დაბრუნება",
        "sections": [
            {
                "id": "nacili-1", "file": "nacili-1.html", "title": "ნაწილი 1 · არსებითი სახელი და ბრუნვები", "subtitle": "ქართული ენის 7 ბრუნვა და სახელის ფუძე", "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "brunvebi", "title": "არსებითი სახელის ბრუნვები", "subtitle": "სახელობითი, მოთხრობითი და მიცემითი ბრუნვები", "page_num": 1,
                        "table_head": ["ბრუნვა", "ბრუნვის ნიშანი", "მაგალითი", "წინადადება"],
                        "table_rows": [
                            ["სახელობითი", "-ი", "კაცი", "კაცი წერს"],
                            ["მოთხრობითი", "-მ / -მა", "კაცმა", "კაცმა დაწერა"],
                            ["მიცემითი", "-ს", "კაცს", "კაცს აქვს წიგნი"]
                        ],
                        "attention": "ქართულ ენაში არსებით სახელს 7 ბრუნვა აქვს. მოთხრობითი ბრუნვა გამოიყენება გარდამავალი ზმნის სუბიექტთან წარსულში.",
                        "mnemonic": "დაიხსომეთ: კაცი (სახ.), კაცმა (მოთხ.), კაცს (მიც.).",
                        "mistakes": [{"wrong": "კაცი წერს (წარსულში)", "right": "კაცმა დაწერა"}],
                        "check_items": ["ბრუნვის ნიშნების ცნობა არსებით სახელებში", "მოთხრობითი ბრუნვის სწორად გამოყენება"],
                        "quiz": [{"q": "რა არის მოთხრობითი ბრუნვის ნიშანი?", "opts": ["-ი", "-მ / -მა", "-ს"], "correct": 1, "explain": "მოთხრობითი ბრუნვის ნიშანია -მ ან -მა."}]
                    },
                    {
                        "slug": "zmna-da-droebrivi-fortmebi", "title": "ზმნა და დროები", "subtitle": "აწმყო, წარსული და მომავალი დრო", "page_num": 2,
                        "table_head": ["დრო", "მაგალითი (წერა)", "მნიშვნელობა"],
                        "table_rows": [
                            ["აწმყო", "წერს", "ახლა წერს"],
                            ["წარსული (წყვედილი)", "დაწერა", "უკვე დაწერა"],
                            ["მომავალი", "დაწერს", "მომავალში დაწერს"]
                        ],
                        "attention": "ზმნისწინი (მაგ. და-) ხშირად ცვლის აწმყოს მომავალ დროდ (წერს -> დაწერს).",
                        "mnemonic": "აწმყო: წერს | მომავალი: დაწერს.",
                        "mistakes": [{"wrong": "ის დაწერს ახლა", "right": "ის წერს ახლა"}],
                        "check_items": ["აწმყო და მომავალი დროის გარჩევა", "ზმნისწინების გამოყენება მომავალ დროში"],
                        "quiz": [{"q": "რომელია მომავალი დრო ზმნისა «წერს»?", "opts": ["წერს", "დაწერა", "დაწერს"], "correct": 2, "explain": "ზმნისწინების «და-» დამატებით აწმყოს ფორმა «წერს» ხდება მომავალი დრო: «დაწერს»."}]
                    }
                ]
            }
        ]
    }
]

def render_topbar(m, active_sec_id=None, is_topic=False):
    rel_prefix = "../" if is_topic else ""
    nav_links = []
    for s in m["sections"]:
        act = 'class="active"' if active_sec_id == s["id"] else ''
        short_title = s["title"].split("·")[0].strip()
        nav_links.append(f'<a {act} href="{rel_prefix}{s["file"]}">{short_title}</a>')
    nav_html = "".join(nav_links)

    return f'''<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="{rel_prefix}index.html">
      <span class="brand-mark">cl</span>
      <span class="brand-name">COSY<em>languages</em> &middot; {m["nav_title"]}</span>
    </a>
    <nav class="topbar-nav">
      {nav_html}
    </nav>
  </div>
</header>'''

def render_footer(m, is_topic=False):
    return f'''<footer class="site">
  <div class="container">
    <div>COSYlanguages &middot; {m["title"]} &middot; interactive web edition</div>
    <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; {m["back_link"]}</a></div>
  </div>
</footer>'''

def generate_manual(m):
    manual_dir = os.path.join(ROOT_DIR, m["dir"])
    topics_dir = os.path.join(manual_dir, "topics")
    assets_dir = os.path.join(manual_dir, "assets")

    os.makedirs(topics_dir, exist_ok=True)
    os.makedirs(assets_dir, exist_ok=True)

    with open(os.path.join(assets_dir, "style.css"), "w", encoding="utf-8") as f:
        f.write(SHARED_CSS)
    with open(os.path.join(assets_dir, "app.js"), "w", encoding="utf-8") as f:
        f.write(SHARED_JS)

    all_topics = []
    for sec in m["sections"]:
        for top in sec["topics"]:
            all_topics.append((sec, top))

    ui = UI_STRINGS[m["lang"]]

    for idx, (sec, top) in enumerate(all_topics):
        prev_top = all_topics[idx - 1][1] if idx > 0 else None
        next_top = all_topics[idx + 1][1] if idx < len(all_topics) - 1 else None

        table_html = ""
        if "table_head" in top and "table_rows" in top:
            th_str = "".join([f'<th>{h}</th>' for h in top["table_head"]])
            tr_strs = []
            for row in top["table_rows"]:
                tds = "".join([f'<td>{cell}</td>' for cell in row])
                tr_strs.append(f'<tr>{tds}</tr>')
            table_html = f'<div class="table-wrap"><table><thead><tr>{th_str}</tr></thead><tbody>{"".join(tr_strs)}</tbody></table></div>'

        attn_html = f'<div class="box mint"><h3>{ui["notice_title"]}</h3><p>{top["attention"]}</p></div>' if top.get("attention") else ''
        mnem_html = f'<div class="box native"><h3>{ui["memory_title"]}</h3><p>{top["mnemonic"]}</p></div>' if top.get("mnemonic") else ''

        mistakes_html = ""
        if top.get("mistakes"):
            m_items = []
            for item in top["mistakes"]:
                m_items.append(f'''<div class="mflip">
  <div class="wrong-line"><span class="x">❌</span> <span class="wrong-text">{item["wrong"]}</span></div>
  <span class="hint">{ui["mistake_hint"]}</span>
  <div class="right-line"><span class="c">✅</span> <span>{item["right"]}</span></div>
</div>''')
            mistakes_html = f'<div class="mistakes"><div class="m-title">{ui["mistake_title"]}</div>{"".join(m_items)}</div>'

        check_html = ""
        if top.get("check_items"):
            c_lis = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["check_items"]])
            check_html = f'<div class="checklist" data-key="{top["slug"]}"><h3>{ui["check_title"]}</h3>{c_lis}</div>'

        quiz_html = ""
        if top.get("quiz"):
            quiz_data = []
            q_items = []
            for q_data in top["quiz"]:
                quiz_data.append({"correct": q_data["correct"]})
                opts_html = "".join([f'<button class="qopt">{o}</button>' for o in q_data["opts"]])
                q_items.append(f'<div class="qitem"><div class="qtext">{q_data["q"]}</div><div class="qopts">{opts_html}</div><div class="qexplain">{q_data["explain"]}</div></div>')
            quiz_json = json.dumps(quiz_data)
            quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>{ui["quiz_title"]}</h2></div>{"".join(q_items)}<button class="quiz-reset" style="margin-top:12px;padding:6px 12px;cursor:pointer;">{ui["reset"]}</button></div>'

        prev_link = f'<a class="prev" href="{prev_top["slug"]}.html">&larr; {prev_top["title"]}</a>' if prev_top else '<span></span>'
        next_link = f'<a class="next" href="{next_top["slug"]}.html">{next_top["title"]} &rarr;</a>' if next_top else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        topic_html = f'''<!doctype html>
<html lang="{m["lang"]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} &middot; COSYlanguages</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar(m, sec["id"], is_topic=True)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{sec["title"]} &middot; Page {top["page_num"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
    <hr class="rule">
  </div>
  {table_html}
  {attn_html}
  {mnem_html}
  {mistakes_html}
  {check_html}
  {quiz_html}
  {pager_html}
</main>
{render_footer(m, is_topic=True)}
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(topics_dir, f'{top["slug"]}.html'), "w", encoding="utf-8") as f:
            f.write(topic_html)

    for sec in m["sections"]:
        topic_cards = []
        for top in sec["topics"]:
            topic_cards.append(f'''<a class="topic-card" href="topics/{top["slug"]}.html">
  <div class="tnum">Page {top["page_num"]}</div>
  <div class="ttl">{top["title"]}</div>
  <div class="sub">{top["subtitle"]}</div>
</a>''')

        sec_html = f'''<!doctype html>
<html lang="{m["lang"]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{sec["title"]} &middot; COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(m, sec["id"], is_topic=False)}
<main class="container">
  <div class="page-head">
    <span class="eyebrow">Section</span>
    <h1>{sec["title"]}</h1>
    <p class="subtitle">{sec["subtitle"]}</p>
    <hr class="rule">
  </div>
  <div class="topic-grid">
    {"".join(topic_cards)}
  </div>
</main>
{render_footer(m, is_topic=False)}
<script src="assets/app.js"></script>
</body>
</html>'''

        with open(os.path.join(manual_dir, sec["file"]), "w", encoding="utf-8") as f:
            f.write(sec_html)

    part_cards = []
    for sec in m["sections"]:
        part_cards.append(f'''<a class="part-card" href="{sec["file"]}">
  <div class="stripe" style="background:{sec["stripe"]};"></div>
  <span class="pnum">{sec["id"]}</span>
  <h2>{sec["title"]}</h2>
  <p>{sec["subtitle"]}</p>
  <span class="tnum" style="display:block;margin-top:12px;">{len(sec["topics"])} topics</span>
</a>''')

    index_html = f'''<!doctype html>
<html lang="{m["lang"]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{m["title"]} &middot; COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
{render_topbar(m, active_sec_id=None, is_topic=False)}
<section class="hero">
  <div class="container">
    <span class="hero-kicker">COSYlanguages &middot; A0&ndash;A1</span>
    <h1>{m["title"]}</h1>
    <p class="lead">{m["lead"]}</p>
  </div>
</section>
<main class="container">
  <div class="page-head" style="padding-top:24px;">
    <span class="eyebrow">Contents</span>
    <h1 style="font-size:24px;">Sections</h1>
  </div>
  <div class="parts-grid">
    {"".join(part_cards)}
  </div>
</main>
{render_footer(m, is_topic=False)}
<script src="assets/app.js"></script>
</body>
</html>'''

    with open(os.path.join(manual_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)

    print(f"Generated manual: {m['dir']}")

def main():
    for m in MANUALS:
        generate_manual(m)
    print("All 9 monolingual grammar manuals compiled successfully.")

if __name__ == "__main__":
    main()

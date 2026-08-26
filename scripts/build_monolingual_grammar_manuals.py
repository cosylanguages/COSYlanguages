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
                                "id": "capitolo-1",
                                "file": "capitolo-1.html",
                                "title": "Capitolo 1 · Nomi, articoli e genere",
                                "subtitle": "Genere maschile e femminile, articoli determinativi e indeterminati",
                                "stripe": "#3562e0",
                                "topics": [
                                                {
                                                                "slug": "genere-nomi",
                                                                "title": "Genere dei nomi",
                                                                "subtitle": "Maschile e femminile in italiano",
                                                                "page_num": 1,
                                                                "table_head": [
                                                                                "Genere",
                                                                                "Finale singolare",
                                                                                "Esempio singolare",
                                                                                "Finale plurale",
                                                                                "Esempio plurale"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Maschile",
                                                                                                "-o",
                                                                                                "il ragazzo",
                                                                                                "-i",
                                                                                                "i ragazzi"
                                                                                ],
                                                                                [
                                                                                                "Femminile",
                                                                                                "-a",
                                                                                                "la ragazza",
                                                                                                "-e",
                                                                                                "le ragazze"
                                                                                ],
                                                                                [
                                                                                                "Maschile/Femminile",
                                                                                                "-e",
                                                                                                "lo studente / la chiave",
                                                                                                "-i",
                                                                                                "gli studenti / le chiavi"
                                                                                ]
                                                                ],
                                                                "attention": "In italiano tutti i nomi hanno un genere: maschile o femminile. La desinenza aiuta a riconoscerlo.",
                                                                "mnemonic": "Regola generale: -o diventa -i al plurale, -a diventa -e, -e diventa -i.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "la ragazzo",
                                                                                                "right": "il ragazzo"
                                                                                },
                                                                                {
                                                                                                "wrong": "le ragazza",
                                                                                                "right": "le ragazze"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Riconoscere il genere di un nome dalla desinenza",
                                                                                "Formare correttamente il plurale dei nomi in -o, -a, -e"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è il plurale corretto di «la ragazza»?",
                                                                                                "opts": [
                                                                                                                "le ragazzi",
                                                                                                                "le ragazze",
                                                                                                                "i ragazze"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "I nomi femminili in -a formano il plurale in -e con l'articolo «le»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "articoli-determinativi",
                                                                "title": "Articoli determinativi",
                                                                "subtitle": "Il, lo, la, l', i, gli, le",
                                                                "page_num": 2,
                                                                "table_head": [
                                                                                "Genere e Numero",
                                                                                "Inizio parola",
                                                                                "Articolo",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Maschile singolare",
                                                                                                "Consonante generale",
                                                                                                "il",
                                                                                                "il libro"
                                                                                ],
                                                                                [
                                                                                                "Maschile singolare",
                                                                                                "s+consonante, z, gn, ps",
                                                                                                "lo",
                                                                                                "lo studente"
                                                                                ],
                                                                                [
                                                                                                "Maschile singolare",
                                                                                                "Vocale",
                                                                                                "l'",
                                                                                                "l'amico"
                                                                                ],
                                                                                [
                                                                                                "Femminile singolare",
                                                                                                "Consonante",
                                                                                                "la",
                                                                                                "la casa"
                                                                                ],
                                                                                [
                                                                                                "Femminile singolare",
                                                                                                "Vocale",
                                                                                                "l'",
                                                                                                "l'amica"
                                                                                ]
                                                                ],
                                                                "attention": "Scegli «lo» e «gli» per le parole maschili che iniziano con s+consonante, z, gn, ps.",
                                                                "mnemonic": "Il -> I (plurale semplice). Lo / L' -> Gli (plurale speciale). La / L' -> Le (femminile).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "il studente",
                                                                                                "right": "lo studente"
                                                                                },
                                                                                {
                                                                                                "wrong": "i studenti",
                                                                                                "right": "gli studenti"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Scegliere l'articolo singolare maschile in base all'inizio della parola",
                                                                                "Usare correttamente «gli» al plurale"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Quale articolo si usa con «studente»?",
                                                                                                "opts": [
                                                                                                                "il",
                                                                                                                "lo",
                                                                                                                "la"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Davanti a «s + consonante» si usa l'articolo maschile «lo»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "articoli-indeterminativi",
                                                                "title": "Articoli indeterminativi",
                                                                "subtitle": "Un, uno, una, un'",
                                                                "page_num": 3,
                                                                "table_head": [
                                                                                "Genere",
                                                                                "Inizio parola",
                                                                                "Articolo",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Maschile",
                                                                                                "Consonante / Vocale",
                                                                                                "un",
                                                                                                "un libro / un amico"
                                                                                ],
                                                                                [
                                                                                                "Maschile",
                                                                                                "s+consonante, z, gn",
                                                                                                "uno",
                                                                                                "uno studente / uno zaino"
                                                                                ],
                                                                                [
                                                                                                "Femminile",
                                                                                                "Consonante",
                                                                                                "una",
                                                                                                "una casa"
                                                                                ],
                                                                                [
                                                                                                "Femminile",
                                                                                                "Vocale",
                                                                                                "un'",
                                                                                                "un'amica"
                                                                                ]
                                                                ],
                                                                "attention": "L'apostrofo si usa SOLO con l'articolo femminile «un'» davanti a vocale. L'articolo maschile «un» non prende MAI l'apostrofo.",
                                                                "mnemonic": "Un amico (senza apostrofo) vs Un'amica (con apostrofo).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "un'amico",
                                                                                                "right": "un amico"
                                                                                },
                                                                                {
                                                                                                "wrong": "un casa",
                                                                                                "right": "una casa"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usare l'apostrofo solo con il femminile un'",
                                                                                "Riconoscere quando usare uno per i nomi maschili"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta per «an Italian female friend»?",
                                                                                                "opts": [
                                                                                                                "un amica italiana",
                                                                                                                "un'amica italiana",
                                                                                                                "uno amica italiana"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Davanti a nome femminile che inizia per vocale si usa «un'» con l'apostrofo."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "singolare-plurale",
                                                                "title": "Singolare e plurale",
                                                                "subtitle": "Regole di trasformazione dei sostantivi",
                                                                "page_num": 4,
                                                                "table_head": [
                                                                                "Singolare",
                                                                                "Plurale",
                                                                                "Esempio singolare",
                                                                                "Esempio plurale"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "-o",
                                                                                                "-i",
                                                                                                "il libro",
                                                                                                "i libri"
                                                                                ],
                                                                                [
                                                                                                "-a",
                                                                                                "-e",
                                                                                                "la penna",
                                                                                                "le penne"
                                                                                ],
                                                                                [
                                                                                                "-e",
                                                                                                "-i",
                                                                                                "la chiave / il padre",
                                                                                                "le chiavi / i padri"
                                                                                ],
                                                                                [
                                                                                                "-ca / -ga",
                                                                                                "-che / -ghe",
                                                                                                "l'amica / la collega",
                                                                                                "le amiche / le colleghe"
                                                                                ]
                                                                ],
                                                                "attention": "I nomi accentati e i nomi di origine straniera restano invariati al plurale (la città -> le città, il bar -> i bar).",
                                                                "mnemonic": "Parole in -ca/-ga aggiungono la H al plurale per mantenere il suono duro.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "le amice",
                                                                                                "right": "le amiche"
                                                                                },
                                                                                {
                                                                                                "wrong": "i bares",
                                                                                                "right": "i bar"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formare il plurale delle parole in -ca e -ga",
                                                                                "Mantenere invariati i nomi accentati al plurale"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è il plurale di «l'amica»?",
                                                                                                "opts": [
                                                                                                                "le amice",
                                                                                                                "le amiche",
                                                                                                                "gli amiche"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "I nomi in -ca e -ga mantengono il suono duro con la «h»: «le amiche»."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitolo-2",
                                "file": "capitolo-2.html",
                                "title": "Capitolo 2 · Verbi essenziali, tempi e imperativo",
                                "subtitle": "Essere, avere, presente, riflessivi, imperativo e passato",
                                "stripe": "#1c8f56",
                                "topics": [
                                                {
                                                                "slug": "essere-avere",
                                                                "title": "Verbi essere e avere",
                                                                "subtitle": "I due verbi ausiliari fondamentali",
                                                                "page_num": 5,
                                                                "table_head": [
                                                                                "Pronome",
                                                                                "Essere",
                                                                                "Avere"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "io",
                                                                                                "sono",
                                                                                                "ho"
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "sei",
                                                                                                "hai"
                                                                                ],
                                                                                [
                                                                                                "lui / lei",
                                                                                                "è",
                                                                                                "ha"
                                                                                ],
                                                                                [
                                                                                                "noi",
                                                                                                "siamo",
                                                                                                "abbiamo"
                                                                                ],
                                                                                [
                                                                                                "voi",
                                                                                                "siete",
                                                                                                "avete"
                                                                                ],
                                                                                [
                                                                                                "loro",
                                                                                                "sono",
                                                                                                "hanno"
                                                                                ]
                                                                ],
                                                                "attention": "Il verbo «avere» ha la H muta nelle prime tre persone singolari e nella terza plurale.",
                                                                "mnemonic": "Essere esprime stato/identità. Avere esprime possesso o età (ho 20 anni).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Io ho 20 anni (senza H -> io o 20 anni)",
                                                                                                "right": "Io ho 20 anni"
                                                                                },
                                                                                {
                                                                                                "wrong": "Lui e studente",
                                                                                                "right": "Lui è studente"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Coniugare correttamente essere e avere al presente",
                                                                                "Usare la H per il verbo avere e l'accento per è"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta per «Lei (possedere) un libro»?",
                                                                                                "opts": [
                                                                                                                "Lei è un libro",
                                                                                                                "Lei ha un libro",
                                                                                                                "Lei ho un libro"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Per esprimere il possesso con lei si usa «ha»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "presente-regolare",
                                                                "title": "Presente indicativo regolare",
                                                                "subtitle": "Coniugazione delle tre coniugazioni -are, -ere, -ire",
                                                                "page_num": 6,
                                                                "table_head": [
                                                                                "Pronome",
                                                                                "-ARE (parlare)",
                                                                                "-ERE (prendere)",
                                                                                "-IRE (dormire)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "io",
                                                                                                "parlo",
                                                                                                "prendo",
                                                                                                "dormo"
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "parli",
                                                                                                "prendi",
                                                                                                "dormi"
                                                                                ],
                                                                                [
                                                                                                "lui / lei",
                                                                                                "parla",
                                                                                                "prende",
                                                                                                "dorme"
                                                                                ],
                                                                                [
                                                                                                "noi",
                                                                                                "parliamo",
                                                                                                "prendiamo",
                                                                                                "dormiamo"
                                                                                ],
                                                                                [
                                                                                                "voi",
                                                                                                "parlate",
                                                                                                "prendete",
                                                                                                "dormite"
                                                                                ],
                                                                                [
                                                                                                "loro",
                                                                                                "parlano",
                                                                                                "prendono",
                                                                                                "dormono"
                                                                                ]
                                                                ],
                                                                "attention": "La desinenza della prima persona singolare «io» termina sempre in -o in tutte le coniugazioni.",
                                                                "mnemonic": "Io -o, Tu -i, Noi -iamo valgono per tutti i verbi regolari.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Io parla italiano",
                                                                                                "right": "Io parlo italiano"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Coniugare verbi regolari delle tre coniugazioni",
                                                                                "Riconoscere il soggetto dalle desinenze"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta per «noi» con il verbo «prendere»?",
                                                                                                "opts": [
                                                                                                                "prendiamo",
                                                                                                                "prendete",
                                                                                                                "prendono"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "Per la prima persona plurale «noi» la desinenza è «-iamo»: prendiamo."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "verbi-modali",
                                                                "title": "Verbi modali (dovere, potere, volere)",
                                                                "subtitle": "Esprimere necessità, possibilità e volontà",
                                                                "page_num": 7,
                                                                "table_head": [
                                                                                "Pronome",
                                                                                "Dovere",
                                                                                "Potere",
                                                                                "Volere"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "io",
                                                                                                "devo",
                                                                                                "posso",
                                                                                                "voglio"
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "devi",
                                                                                                "puoi",
                                                                                                "vuoi"
                                                                                ],
                                                                                [
                                                                                                "lui / lei",
                                                                                                "deve",
                                                                                                "può",
                                                                                                "vuole"
                                                                                ],
                                                                                [
                                                                                                "noi",
                                                                                                "dobbiamo",
                                                                                                "possiamo",
                                                                                                "vogliamo"
                                                                                ],
                                                                                [
                                                                                                "voi",
                                                                                                "dovete",
                                                                                                "potete",
                                                                                                "volete"
                                                                                ],
                                                                                [
                                                                                                "loro",
                                                                                                "devono",
                                                                                                "possono",
                                                                                                "vogliono"
                                                                                ]
                                                                ],
                                                                "attention": "I verbi modali sono seguiti direttamente dall'infinito senza preposizione.",
                                                                "mnemonic": "Voglio studiare, Posso andare, Devo lavorare.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Voglio di mangiare",
                                                                                                "right": "Voglio mangiare"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usare i verbi modali seguiti dall'infinito",
                                                                                "Coniugare dovere, potere e volere"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice «I want to learn»?",
                                                                                                "opts": [
                                                                                                                "Voglio imparare",
                                                                                                                "Devo imparare",
                                                                                                                "Posso imparare"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "Il verbo volere esprime desiderio: «Voglio imparare»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "verbi-riflessivi",
                                                                "title": "Verbi riflessivi",
                                                                "subtitle": "Lavarsi, chiamarsi e l'uso dei pronomi riflessivi",
                                                                "page_num": 8,
                                                                "table_head": [
                                                                                "Pronome",
                                                                                "Pronome riflessivo",
                                                                                "Verbo (lavarsi)",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "io",
                                                                                                "mi",
                                                                                                "lavo",
                                                                                                "Io mi lavo ogni mattina."
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "ti",
                                                                                                "lavi",
                                                                                                "Tu ti lavi le mani."
                                                                                ],
                                                                                [
                                                                                                "lui / lei",
                                                                                                "si",
                                                                                                "lava",
                                                                                                "Marco si lava i denti."
                                                                                ],
                                                                                [
                                                                                                "noi",
                                                                                                "ci",
                                                                                                "laviamo",
                                                                                                "Noi ci laviamo prima di uscire."
                                                                                ],
                                                                                [
                                                                                                "voi",
                                                                                                "vi",
                                                                                                "lavate",
                                                                                                "Voi vi lavate con cura."
                                                                                ],
                                                                                [
                                                                                                "loro",
                                                                                                "si",
                                                                                                "lavano",
                                                                                                "Loro si lavano presto."
                                                                                ]
                                                                ],
                                                                "attention": "Nei tempi composti (come il passato prossimo), i verbi riflessivi si coniugano sempre con l'ausiliare «essere» e il participio concorda.",
                                                                "mnemonic": "Mi, ti, si, ci, vi, si + verbo!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Io lavo mi le mani",
                                                                                                "right": "Io mi lavo le mani"
                                                                                },
                                                                                {
                                                                                                "wrong": "Lui ha lavato si",
                                                                                                "right": "Lui si è lavato"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Riconoscere i pronomi riflessivi mi, ti, si, ci, vi, si",
                                                                                "Usare l'ausiliare essere nei tempi composti per i verbi riflessivi"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta per «noi» con il verbo «chiamarsi»?",
                                                                                                "opts": [
                                                                                                                "noi ci chiamiamo",
                                                                                                                "noi si chiamiamo",
                                                                                                                "noi vi chiamiamo"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "Per «noi» il pronome riflessivo è «ci»: «ci chiamiamo»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "imperativo",
                                                                "title": "Imperativo diretto",
                                                                "subtitle": "Dare ordini, consigli ed istruzioni (tu, noi, voi)",
                                                                "page_num": 9,
                                                                "table_head": [
                                                                                "Coniugazione",
                                                                                "Tu (Affermativo)",
                                                                                "Tu (Negativo)",
                                                                                "Noi",
                                                                                "Voi"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "-ARE (parlare)",
                                                                                                "parla!",
                                                                                                "non parlare!",
                                                                                                "parliamo!",
                                                                                                "parlate!"
                                                                                ],
                                                                                [
                                                                                                "-ERE (prendere)",
                                                                                                "prendi!",
                                                                                                "non prendere!",
                                                                                                "prendiamo!",
                                                                                                "prendete!"
                                                                                ],
                                                                                [
                                                                                                "-IRE (aprire)",
                                                                                                "apri!",
                                                                                                "non aprire!",
                                                                                                "apriamo!",
                                                                                                "aprite!"
                                                                                ]
                                                                ],
                                                                "attention": "Per la seconda persona singolare «tu» al negativo si usa «non» + infinito del verbo.",
                                                                "mnemonic": "Per i verbi in -are: Tu parla! Ma al negativo: Non parlare!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Non parla ora!",
                                                                                                "right": "Non parlare ora!"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formare l'imperativo affermativo informale",
                                                                                "Usare non + infinito per l'imperativo negativo di tu"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice l'imperativo negativo di «tu» per il verbo «ascoltare»?",
                                                                                                "opts": [
                                                                                                                "Non ascolta!",
                                                                                                                "Non ascolti!",
                                                                                                                "Non ascoltare!"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "Al negativo per «tu» si usa «non» seguito dall'infinito: «Non ascoltare!»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "passato-prossimo",
                                                                "title": "Passato prossimo",
                                                                "subtitle": "Ausiliare essere o avere + participio passato",
                                                                "page_num": 10,
                                                                "table_head": [
                                                                                "Coniugazione",
                                                                                "Infinito",
                                                                                "Participio passato",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "-are",
                                                                                                "parlare",
                                                                                                "parlato",
                                                                                                "Ho parlato"
                                                                                ],
                                                                                [
                                                                                                "-ere",
                                                                                                "vendere",
                                                                                                "venduto",
                                                                                                "Ho venduto"
                                                                                ],
                                                                                [
                                                                                                "-ire",
                                                                                                "capire",
                                                                                                "capito",
                                                                                                "Ho capito"
                                                                                ],
                                                                                [
                                                                                                "Movimento",
                                                                                                "andare",
                                                                                                "andato/a",
                                                                                                "Sono andato/a"
                                                                                ]
                                                                ],
                                                                "attention": "Con l'ausiliare «essere», il participio passato concorda in genere e numero col soggetto.",
                                                                "mnemonic": "Avere = participio fisso (-o). Essere = participio variabile (-o/-a/-i/-e).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Maria è andato a casa",
                                                                                                "right": "Maria è andata a casa"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formare i participi passati regolari",
                                                                                "Concordare il participio quando si usa l'ausiliare essere"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta per «Anna (andare) al cinema»?",
                                                                                                "opts": [
                                                                                                                "Anna ha andato",
                                                                                                                "Anna è andata",
                                                                                                                "Anna è andato"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Andare richiede essere e accordo femminile: «Anna è andata»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "passato-prossimo-vs-imperfetto",
                                                                "title": "Passato prossimo vs Imperfetto",
                                                                "subtitle": "Azioni concluse e puntuali vs descrizioni e abitudini nel passato",
                                                                "page_num": 11,
                                                                "table_head": [
                                                                                "Tempo",
                                                                                "Uso principale",
                                                                                "Parole spia",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Passato prossimo",
                                                                                                "Azione conclusa e definita",
                                                                                                "ieri, la settimana scorsa, improvvisamente",
                                                                                                "Ieri ho comprato un libro."
                                                                                ],
                                                                                [
                                                                                                "Imperfetto",
                                                                                                "Azione in corso, descrizione, abitudine",
                                                                                                "sempre, di solito, mentre, da bambino",
                                                                                                "Da bambino leggevo molto."
                                                                                ]
                                                                ],
                                                                "attention": "Quando due azioni nel passato sono contemporanee e una interrompe l'altra: Imperfetto (mentre...) + Passato prossimo (all'improvviso...).",
                                                                "mnemonic": "Passato prossimo = un punto nel tempo. Imperfetto = una linea continua.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ieri leggevo un libro intero in 5 minuti",
                                                                                                "right": "Ieri ho letto un libro intero in 5 minuti"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Distinguere tra un'azione conclusa e un'abitudine passata",
                                                                                "Combinare imperfetto e passato prossimo in una frase"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Quale tempo si usa per esprimere un'abitudine nel passato («Ogni estate...»)?",
                                                                                                "opts": [
                                                                                                                "Passato prossimo",
                                                                                                                "Imperfetto",
                                                                                                                "Presente"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "L'imperfetto esprime azioni abituali o ripetute nel passato."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitolo-3",
                                "file": "capitolo-3.html",
                                "title": "Capitolo 3 · Pronomi, possesso e dimostrativi",
                                "subtitle": "Pronomi personali, possessivi e dimostrativi",
                                "stripe": "#c9740a",
                                "topics": [
                                                {
                                                                "slug": "pronomi-personali",
                                                                "title": "Pronomi personali",
                                                                "subtitle": "Pronomi soggetto e pronomi complemento diretto/indiretto (clitici)",
                                                                "page_num": 12,
                                                                "table_head": [
                                                                                "Persona",
                                                                                "Soggetto",
                                                                                "Complemento diretto (Chi? Che cosa?)",
                                                                                "Complemento indiretto (A chi?)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "1a sing.",
                                                                                                "io",
                                                                                                "mi",
                                                                                                "mi"
                                                                                ],
                                                                                [
                                                                                                "2a sing.",
                                                                                                "tu",
                                                                                                "ti",
                                                                                                "ti"
                                                                                ],
                                                                                [
                                                                                                "3a sing. m.",
                                                                                                "lui",
                                                                                                "lo",
                                                                                                "gli"
                                                                                ],
                                                                                [
                                                                                                "3a sing. f.",
                                                                                                "lei",
                                                                                                "la",
                                                                                                "le"
                                                                                ],
                                                                                [
                                                                                                "1a plur.",
                                                                                                "noi",
                                                                                                "ci",
                                                                                                "ci"
                                                                                ],
                                                                                [
                                                                                                "2a plur.",
                                                                                                "voi",
                                                                                                "vi",
                                                                                                "vi"
                                                                                ],
                                                                                [
                                                                                                "3a plur.",
                                                                                                "loro",
                                                                                                "li / le",
                                                                                                "loro / gli"
                                                                                ]
                                                                ],
                                                                "attention": "I pronomi clitici (mi, ti, lo, la, ci, vi, li, le) si mettono prima del verbo coniugato.",
                                                                "mnemonic": "Lo vedo (vedo lui), La vedo (vedo lei), Gli parlo (parlo a lui), Le parlo (parlo a lei).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Vedo lo ogni giorno",
                                                                                                "right": "Lo vedo ogni giorno"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Distinguere i pronomi soggetto dai pronomi complemento",
                                                                                "Collocare i pronomi clitici prima del verbo"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice «I see him» in italiano?",
                                                                                                "opts": [
                                                                                                                "Vedo lui lo",
                                                                                                                "Lo vedo",
                                                                                                                "Gli vedo"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Il pronome diretto maschile singolare è «lo» e va prima del verbo: «Lo vedo»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "pronomi-possessivi",
                                                                "title": "Aggettivi e pronomi possessivi",
                                                                "subtitle": "Il mio, il tuo, il suo, il nostro, il vostro, il loro",
                                                                "page_num": 13,
                                                                "table_head": [
                                                                                "Possessore",
                                                                                "Maschile Singolare",
                                                                                "Femminile Singolare",
                                                                                "Plurale"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "io",
                                                                                                "il mio",
                                                                                                "la mia",
                                                                                                "i miei / le mie"
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "il tuo",
                                                                                                "la tua",
                                                                                                "i tuoi / le tue"
                                                                                ],
                                                                                [
                                                                                                "lui / lei",
                                                                                                "il suo",
                                                                                                "la sua",
                                                                                                "i suoi / le sue"
                                                                                ],
                                                                                [
                                                                                                "noi",
                                                                                                "il nostro",
                                                                                                "la nostra",
                                                                                                "i nostri / le nostre"
                                                                                ],
                                                                                [
                                                                                                "voi",
                                                                                                "il vostro",
                                                                                                "la vostra",
                                                                                                "i vostri / le vostre"
                                                                                ],
                                                                                [
                                                                                                "loro",
                                                                                                "il loro",
                                                                                                "la loro",
                                                                                                "i loro / le loro"
                                                                                ]
                                                                ],
                                                                "attention": "In italiano il possessivo richiede quasi sempre l'articolo determinativo (il mio libro). Con i nomi di parentela al singolare l'articolo si omette (mia madre, mio padre).",
                                                                "mnemonic": "Articolo + Possessivo + Nome = La mia casa.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "mio libro",
                                                                                                "right": "il mio libro"
                                                                                },
                                                                                {
                                                                                                "wrong": "la mia madre",
                                                                                                "right": "mia madre"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Mettere l'articolo prima del possessivo con i nomi comuni",
                                                                                "Omettere l'articolo con i nomi di parentela al singolare"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta per «my house»?",
                                                                                                "opts": [
                                                                                                                "mia casa",
                                                                                                                "la mia casa",
                                                                                                                "una mia casa"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "In italiano si usa l'articolo determinativo prima del possessivo: «la mia casa»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "dimostrativi",
                                                                "title": "Aggettivi e pronomi dimostrativi",
                                                                "subtitle": "Questo (vicino) e quello (lontano)",
                                                                "page_num": 14,
                                                                "table_head": [
                                                                                "Genere / Numero",
                                                                                "Questo (vicino)",
                                                                                "Quello (lontano - aggettivo)",
                                                                                "Quello (lontano - pronome)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Maschile singolare",
                                                                                                "questo libro",
                                                                                                "quel libro / quello studente",
                                                                                                "quello"
                                                                                ],
                                                                                [
                                                                                                "Femminile singolare",
                                                                                                "questa casa",
                                                                                                "quella casa",
                                                                                                "quella"
                                                                                ],
                                                                                [
                                                                                                "Maschile plurale",
                                                                                                "questi libri",
                                                                                                "quei libri / quegli studenti",
                                                                                                "quelli"
                                                                                ],
                                                                                [
                                                                                                "Femminile plurale",
                                                                                                "queste case",
                                                                                                "quelle case",
                                                                                                "quelle"
                                                                                ]
                                                                ],
                                                                "attention": "L'aggettivo «quello» cambia forma davanti ai nomi maschili seguendo le regole dell'articolo determinativo (quel, quello, quell', quei, quegli).",
                                                                "mnemonic": "Questo = qui (vicino me). Quello = là (lontano).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "quello libro",
                                                                                                "right": "quel libro"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usare questo/questa per oggetti vicini",
                                                                                "Usare le forme corrette di quello in base al nome"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta dell'aggettivo per «that book»?",
                                                                                                "opts": [
                                                                                                                "quello libro",
                                                                                                                "quel libro",
                                                                                                                "quelli libro"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Davanti a una consonante semplice maschile singolare «quello» diventa «quel» (come «il»)."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitolo-4",
                                "file": "capitolo-4.html",
                                "title": "Capitolo 4 · Sintassi, domande e negazione",
                                "subtitle": "Esistenza, negazione, domande e congiunzioni",
                                "stripe": "#7c4fd6",
                                "topics": [
                                                {
                                                                "slug": "c-e-ci-sono",
                                                                "title": "C'è e ci sono",
                                                                "subtitle": "Esprimere l'esistenza di cose o persone",
                                                                "page_num": 15,
                                                                "table_head": [
                                                                                "Numero",
                                                                                "Forma",
                                                                                "Esempio affermativo",
                                                                                "Esempio negativo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Singolare",
                                                                                                "C'è",
                                                                                                "C'è un libro sul tavolo.",
                                                                                                "Non c'è pane."
                                                                                ],
                                                                                [
                                                                                                "Plurale",
                                                                                                "Ci sono",
                                                                                                "Ci sono molti studenti in aula.",
                                                                                                "Non ci sono sedie."
                                                                                ]
                                                                ],
                                                                "attention": "Si usa «c'è» con un nome singolare e «ci sono» con un nome plurale.",
                                                                "mnemonic": "C'è uno. Ci sono due o più.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "C'è due libri sul tavolo",
                                                                                                "right": "Ci sono due libri sul tavolo"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usare C'è per sostantivi singolari",
                                                                                "Usare Ci sono per sostantivi plurali"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Quale forma si usa nella frase: «_____ tre mele nella borsa»?",
                                                                                                "opts": [
                                                                                                                "C'è",
                                                                                                                "Ci sono",
                                                                                                                "È"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Tre mele» è plurale, quindi si usa «Ci sono»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "negazione",
                                                                "title": "La negazione",
                                                                "subtitle": "Non, niente, nessuno, mai",
                                                                "page_num": 16,
                                                                "table_head": [
                                                                                "Elemento negativo",
                                                                                "Uso",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "non",
                                                                                                "Negazione semplice prima del verbo",
                                                                                                "Non parlo inglese."
                                                                                ],
                                                                                [
                                                                                                "non... mai",
                                                                                                "Negazione temporale (mai)",
                                                                                                "Non mangio mai carne."
                                                                                ],
                                                                                [
                                                                                                "non... niente / nulla",
                                                                                                "Negazione di cose",
                                                                                                "Non capisco niente."
                                                                                ],
                                                                                [
                                                                                                "non... nessuno",
                                                                                                "Negazione di persone",
                                                                                                "Non vedo nessuno."
                                                                                ]
                                                                ],
                                                                "attention": "In italiano la doppia negazione è obbligatoria con parole come niente, nessuno, mai (non + verbo + parola negativa).",
                                                                "mnemonic": "Non + Verbo + Niente / Nessuno / Mai.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Vedo nessuno",
                                                                                                "right": "Non vedo nessuno"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Costruire la negazione semplice con non + verbo",
                                                                                "Usare correttamente la doppia negazione con mai, niente, nessuno"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice «I understand nothing» in italiano?",
                                                                                                "opts": [
                                                                                                                "Non capisco niente",
                                                                                                                "Capisco niente",
                                                                                                                "Non capisco mai"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "Si usa la struttura «non + verbo + niente»: «Non capisco niente»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "interrogativi",
                                                                "title": "Pronomi e avverbi interrogativi",
                                                                "subtitle": "Chi, che cosa, dove, quando, perché",
                                                                "page_num": 17,
                                                                "table_head": [
                                                                                "Parola interrogativa",
                                                                                "Significato",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Chi",
                                                                                                "Persona",
                                                                                                "Chi è lui?"
                                                                                ],
                                                                                [
                                                                                                "Che cosa / Cosa",
                                                                                                "Oggetto / Concetto",
                                                                                                "Che cosa fai?"
                                                                                ],
                                                                                [
                                                                                                "Dove",
                                                                                                "Luogo",
                                                                                                "Dove abiti?"
                                                                                ],
                                                                                [
                                                                                                "Quando",
                                                                                                "Tempo",
                                                                                                "Quando parti?"
                                                                                ],
                                                                                [
                                                                                                "Perché",
                                                                                                "Causa",
                                                                                                "Perché studi l'italiano?"
                                                                                ]
                                                                ],
                                                                "attention": "«Perché» si usa sia nelle domande (why) sia nelle risposte (because). Le domande sì/no non cambiano l'ordine delle parole, ma usano l'intonazione ascendente.",
                                                                "mnemonic": "Chi? Dove? Quando? Perché?",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Dove fai?",
                                                                                                "right": "Che cosa fai?"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formulare domande con gli interrogativi principali",
                                                                                "Rispondere correttamente alle domande"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Quale parola si usa per chiedere il luogo?",
                                                                                                "opts": [
                                                                                                                "Chi",
                                                                                                                "Dove",
                                                                                                                "Quando"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Per chiedere informazioni su un luogo si usa «Dove»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "congiunzioni-fondamentali",
                                                                "title": "Congiunzioni fondamentali",
                                                                "subtitle": "E, ma, o, perché (collegare frasi ed idee)",
                                                                "page_num": 18,
                                                                "table_head": [
                                                                                "Congiunzione",
                                                                                "Funzione",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "e (ed)",
                                                                                                "Unione / Aggiunta",
                                                                                                "Studio italiano e lavoro a Milano."
                                                                                ],
                                                                                [
                                                                                                "ma",
                                                                                                "Contrasto / Opposizione",
                                                                                                "Vorrei uscire, ma piove."
                                                                                ],
                                                                                [
                                                                                                "o (oppure)",
                                                                                                "Alternativa / Scelta",
                                                                                                "Preferisci il tè o il caffè?"
                                                                                ],
                                                                                [
                                                                                                "perché",
                                                                                                "Causa / Spiegazione",
                                                                                                "Imparo l'italiano perché amo l'Italia."
                                                                                ]
                                                                ],
                                                                "attention": "«E» può diventare «ed» davanti a parole che iniziano per la stessa vocale «e» (es. ed ecco).",
                                                                "mnemonic": "E unisce, Ma contrasta, O sceglie, Perché spiega.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Studio ma lavoro",
                                                                                                "right": "Studio e lavoro"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usare e / ma / o per collegare parole e frasi",
                                                                                "Usare perché per spiegare la causa"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Quale congiunzione si usa per indicare una causa o ragione?",
                                                                                                "opts": [
                                                                                                                "ma",
                                                                                                                "o",
                                                                                                                "perché"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "«Perché» introduce la causa o la motivazione di un'azione."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitolo-5",
                                "file": "capitolo-5.html",
                                "title": "Capitolo 5 · Preposizioni, numeri, avverbi e comparativi",
                                "subtitle": "Preposizioni, espressioni di tempo, numeri, avverbi e gradi dell'aggettivo",
                                "stripe": "#d99b00",
                                "topics": [
                                                {
                                                                "slug": "preposizioni-semplici",
                                                                "title": "Preposizioni semplici e articolate",
                                                                "subtitle": "Di, a, da, in, con, su, per, tra, fra",
                                                                "page_num": 19,
                                                                "table_head": [
                                                                                "Preposizione",
                                                                                "+ il",
                                                                                "+ lo",
                                                                                "+ la",
                                                                                "+ i",
                                                                                "+ le"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "a",
                                                                                                "al",
                                                                                                "allo",
                                                                                                "alla",
                                                                                                "ai",
                                                                                                "alle"
                                                                                ],
                                                                                [
                                                                                                "di",
                                                                                                "del",
                                                                                                "dello",
                                                                                                "della",
                                                                                                "dei",
                                                                                                "delle"
                                                                                ],
                                                                                [
                                                                                                "da",
                                                                                                "dal",
                                                                                                "dallo",
                                                                                                "dalla",
                                                                                                "dai",
                                                                                                "dalle"
                                                                                ],
                                                                                [
                                                                                                "in",
                                                                                                "nel",
                                                                                                "nello",
                                                                                                "nella",
                                                                                                "nei",
                                                                                                "nelle"
                                                                                ]
                                                                ],
                                                                "attention": "Le preposizioni si fondono con gli articoli determinativi per formare le preposizioni articolate.",
                                                                "mnemonic": "In + il = nel. A + il = al. Di + il = del.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "in il libro",
                                                                                                "right": "nel libro"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formare le preposizioni articolate correttamente",
                                                                                "Riconoscere quando usare le preposizioni semplici"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice «in the book»?",
                                                                                                "opts": [
                                                                                                                "in il libro",
                                                                                                                "nel libro",
                                                                                                                "del libro"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "La preposizione «in» con l'articolo «il» forma «nel»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "preposizioni-luogo",
                                                                "title": "Preposizioni di luogo",
                                                                "subtitle": "A, in, da, su, sotto, sopra, tra/fra",
                                                                "page_num": 20,
                                                                "table_head": [
                                                                                "Preposizione",
                                                                                "Uso spaziale",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "a",
                                                                                                "Città, luoghi definiti",
                                                                                                "Abito a Milano / vado a scuola."
                                                                                ],
                                                                                [
                                                                                                "in",
                                                                                                "Nazioni, regioni, stanze, mezzi",
                                                                                                "Vado in Italia / in cucina."
                                                                                ],
                                                                                [
                                                                                                "da",
                                                                                                "Provenienza o andare da una persona",
                                                                                                "Vengo da Roma / vado dal medico."
                                                                                ],
                                                                                [
                                                                                                "sopra / sotto",
                                                                                                "Posizione verticale",
                                                                                                "Il gatto è sotto il tavolo."
                                                                                ],
                                                                                [
                                                                                                "tra / fra",
                                                                                                "In mezzo a due o più elementi",
                                                                                                "Il negozio è tra la banca e il bar."
                                                                                ]
                                                                ],
                                                                "attention": "Si usa «in» per le nazioni (in Italia) e «a» per le città (a Roma).",
                                                                "mnemonic": "In Nazione, A Città, Da persona.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Vado da Italia",
                                                                                                "right": "Vado in Italia"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Distinguere l'uso di a/in/da per indicare lo stato o il moto a luogo",
                                                                                "Usare correttamente sopra, sotto, tra, fra"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Quale preposizione si usa per dire «I am going to the doctor»?",
                                                                                                "opts": [
                                                                                                                "Vado a medico",
                                                                                                                "Vado in medico",
                                                                                                                "Vado dal medico"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "Per indicare il moto a luogo verso una persona o professionista si usa «da» (articolato: «dal medico»)."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "preposizioni-tempo",
                                                                "title": "Preposizioni di tempo",
                                                                "subtitle": "A, in, da, per, fra/tra per indicare il tempo",
                                                                "page_num": 21,
                                                                "table_head": [
                                                                                "Preposizione",
                                                                                "Uso temporale",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "a",
                                                                                                "Mesi, ore, festività",
                                                                                                "La lezione comincia alle 9 / a Natale."
                                                                                ],
                                                                                [
                                                                                                "in",
                                                                                                "Stagioni, anni, mesi specifici",
                                                                                                "In estate fa caldo / nel 2026."
                                                                                ],
                                                                                [
                                                                                                "da",
                                                                                                "Azione iniziata nel passato che continua",
                                                                                                "Abito a Roma da tre anni."
                                                                                ],
                                                                                [
                                                                                                "per",
                                                                                                "Durata conclusa o prevista",
                                                                                                "Ho studiato per due ore."
                                                                                ],
                                                                                [
                                                                                                "fra / tra",
                                                                                                "Tempo futuro / momento imminente",
                                                                                                "Arrivo tra dieci minuti."
                                                                                ]
                                                                ],
                                                                "attention": "«Da» indica un'azione continua ancora in corso (presente), mentre «per» si riferisce alla durata complessiva.",
                                                                "mnemonic": "Da = dal passato fino ad ora (ancora in corso). Fra/Tra = nel futuro.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Abito qui per tre anni (se abito ancora qui)",
                                                                                                "right": "Abito qui da tre anni"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usare «da» per azioni che continuano nel presente",
                                                                                "Usare «fra/tra» per indicare il futuro temporale"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice «I have lived in Rome for two years (and still live there)»?",
                                                                                                "opts": [
                                                                                                                "Abito a Roma da due anni",
                                                                                                                "Abito a Roma per due anni",
                                                                                                                "Abito a Roma tra due anni"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "Per un'azione iniziata nel passato che continua nel presente si usa «da»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "numeri-ora-tempo",
                                                                "title": "Numeri, l'ora, giorni e mesi",
                                                                "subtitle": "Contare, dire l'ora e indicare le date",
                                                                "page_num": 22,
                                                                "table_head": [
                                                                                "Categoria",
                                                                                "Forma / Espressione",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Numeri cardinali",
                                                                                                "uno, due, tre, dieci, venti, cento",
                                                                                                "Ho tre libri."
                                                                                ],
                                                                                [
                                                                                                "Numeri ordinali",
                                                                                                "primo, secondo, terzo, quarto",
                                                                                                "Il primo piano."
                                                                                ],
                                                                                [
                                                                                                "L'ora",
                                                                                                "Che ora è? / Che ore sono?",
                                                                                                "È l'una. / Sono le tre e mezza."
                                                                                ],
                                                                                [
                                                                                                "Giorni della settimana",
                                                                                                "lunedì, martedì, mercoledì...",
                                                                                                "Lunedì ho un esame."
                                                                                ],
                                                                                [
                                                                                                "Mesi dell'anno",
                                                                                                "gennaio, febbraio, marzo...",
                                                                                                "Il mio compleanno è a maggio."
                                                                                ]
                                                                ],
                                                                "attention": "Per l'ora si usa «È l'una» (singolare) ma «Sono le due / le tre...» (plurale).",
                                                                "mnemonic": "È l'una (1:00). Sono le... (2:00, 3:00, 4:00...).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "È le tre",
                                                                                                "right": "Sono le tre"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Dire l'ora correttamente al singolare e plurale",
                                                                                "Formare le date con numeri e mesi"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice «It is 4 o'clock» in italiano?",
                                                                                                "opts": [
                                                                                                                "È quattro ore",
                                                                                                                "È l'quattro",
                                                                                                                "Sono le quattro"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "Dalle due in poi si usa la forma plurale «Sono le + numero»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "avverbi-frequenza-modo",
                                                                "title": "Avverbi di frequenza e di modo",
                                                                "subtitle": "Sempre, spesso, mai, bene, male, velocemente",
                                                                "page_num": 23,
                                                                "table_head": [
                                                                                "Tipo di avverbo",
                                                                                "Esempi",
                                                                                "Posizione nella frase",
                                                                                "Esempio completo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Frequenza",
                                                                                                "sempre, spesso, di solito, a volte, mai",
                                                                                                "Di norma dopo il verbo o a inizio frase",
                                                                                                "Vado spesso al cinema."
                                                                                ],
                                                                                [
                                                                                                "Modo (-mente)",
                                                                                                "velocemente, lentamente, chiaramente",
                                                                                                "Dopo il verbo principale",
                                                                                                "Parla velocemente."
                                                                                ],
                                                                                [
                                                                                                "Modo (irregolari)",
                                                                                                "bene, male",
                                                                                                "Dopo il verbo principale",
                                                                                                "Cucina molto bene."
                                                                                ]
                                                                ],
                                                                "attention": "Gli avverbi in «-mente» si formano a partire dalla forma femminile dell'aggettivo: veloce -> velocemente, felice -> felice -> felicemente.",
                                                                "mnemonic": "Aggettivo femminile + -mente = Avverbo di modo.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Lui parla buono",
                                                                                                "right": "Lui parla bene"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Posizionare gli avverbi di frequenza nella frase",
                                                                                "Formare avverbi di modo in -mente dall'aggettivo"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è l'avverbo di modo corretto per il verbo «parlare»?",
                                                                                                "opts": [
                                                                                                                "parlare buono",
                                                                                                                "parlare bene",
                                                                                                                "parlare bello"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Con i verbi si usa l'avverbo «bene» (non l'aggettivo «buono»)."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "comparativo-superlativo",
                                                                "title": "Comparativo e superlativo",
                                                                "subtitle": "Più... di, meno... di, come... e il superlativo assoluto (-issimo)",
                                                                "page_num": 24,
                                                                "table_head": [
                                                                                "Grado",
                                                                                "Struttura",
                                                                                "Esempio"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Maggioranza",
                                                                                                "più + aggettivo + di / che",
                                                                                                "Marco è più alto di Luca."
                                                                                ],
                                                                                [
                                                                                                "Minoranza",
                                                                                                "meno + aggettivo + di / che",
                                                                                                "Il libro è meno caro del film."
                                                                                ],
                                                                                [
                                                                                                "Uguaglianza",
                                                                                                "(così) + aggettivo + come / quanto",
                                                                                                "Anna è alta come Maria."
                                                                                ],
                                                                                [
                                                                                                "Superlativo relativo",
                                                                                                "il più / la più + aggettivo + di",
                                                                                                "È il libro più bello del corso."
                                                                                ],
                                                                                [
                                                                                                "Superlativo assoluto",
                                                                                                "radice aggettivo + -issimo/a/i/e",
                                                                                                "Questo caffè è buonissimo!"
                                                                                ]
                                                                ],
                                                                "attention": "Si usa «di» per confrontare due sostantivi o pronomi (più alto di Marco); si usa «che» tra due aggettivi o verbi (più alto che largo).",
                                                                "mnemonic": "Più... di = confronto tra due persone/cose. -issimo = massimo grado!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Marco è più alto che Luca",
                                                                                                "right": "Marco è più alto di Luca"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formare il comparativo di maggioranza e minoranza con di",
                                                                                "Formare il superlativo assoluto in -issimo"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual è la forma corretta per dire «Marco is taller than Paul»?",
                                                                                                "opts": [
                                                                                                                "Marco è più alto di Paolo",
                                                                                                                "Marco è più alto che Paolo",
                                                                                                                "Marco è molto alto di Paolo"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "Il confronto tra due persone richiede la preposizione «di»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "aggettivi-qualificativi",
                                                                "title": "Aggettivi qualificativi",
                                                                "subtitle": "Accordo in genere e numero",
                                                                "page_num": 25,
                                                                "table_head": [
                                                                                "Classe",
                                                                                "Maschile Singolare",
                                                                                "Femminile Singolare",
                                                                                "Plurale"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "4 uscite",
                                                                                                "rosso",
                                                                                                "rossa",
                                                                                                "rossi / rosse"
                                                                                ],
                                                                                [
                                                                                                "2 uscite",
                                                                                                "grande",
                                                                                                "grande",
                                                                                                "grandi"
                                                                                ]
                                                                ],
                                                                "attention": "L'aggettivo concorda sempre in genere e numero con il sostantivo a cui si riferisce.",
                                                                "mnemonic": "Caffè caldo / Casa grande (gli aggettivi in -e hanno una sola forma al singolare).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "una macchina rosso",
                                                                                                "right": "una macchina rossa"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Concordare gli aggettivi a 4 uscite",
                                                                                "Concordare gli aggettivi a 2 uscite"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Come si dice «a red car» in italiano?",
                                                                                                "opts": [
                                                                                                                "una macchina rosso",
                                                                                                                "una macchina rossa",
                                                                                                                "un macchina rossa"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Macchina» è femminile, quindi l'aggettivo deve concordare: «rossa»."
                                                                                }
                                                                ]
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
                                "id": "capitulo-1",
                                "file": "capitulo-1.html",
                                "title": "Capítulo 1 · Sustantivos, artículos y determinantes",
                                "subtitle": "Género, plural, artículos, posesivos y demostrativos",
                                "stripe": "#c9740a",
                                "topics": [
                                                {
                                                                "slug": "genero-sustantivos",
                                                                "title": "El género de los sustantivos",
                                                                "subtitle": "Sustantivos masculinos y femeninos en español",
                                                                "page_num": 1,
                                                                "table_head": [
                                                                                "Género",
                                                                                "Terminación habitual",
                                                                                "Ejemplo singular",
                                                                                "Terminación plural",
                                                                                "Ejemplo plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Masculino",
                                                                                                "-o",
                                                                                                "el chico",
                                                                                                "-os",
                                                                                                "los chicos"
                                                                                ],
                                                                                [
                                                                                                "Femenino",
                                                                                                "-a",
                                                                                                "la chica",
                                                                                                "-as",
                                                                                                "las chicas"
                                                                                ],
                                                                                [
                                                                                                "Masculino / Femenino",
                                                                                                "-e / consonante",
                                                                                                "el estudiante / la ciudad",
                                                                                                "-es",
                                                                                                "los estudiantes / las ciudades"
                                                                                ]
                                                                ],
                                                                "attention": "Excepciones comunes: el día (masculino), la mano (femenino), el problema (masculino).",
                                                                "mnemonic": "Palabras en -o suelen ser masculinas; palabras en -a suelen ser femeninas.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "la chico",
                                                                                                "right": "el chico"
                                                                                },
                                                                                {
                                                                                                "wrong": "el mapa es femenina",
                                                                                                "right": "el mapa es masculino"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Identificar el género del sustantivo por su terminación",
                                                                                "Reconocer excepciones principales como el día o el mapa"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es el género de la palabra «problema»?",
                                                                                                "opts": [
                                                                                                                "Femenino (la problema)",
                                                                                                                "Masculino (el problema)",
                                                                                                                "Neutro"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Las palabras de origen griego terminadas en -ma son masculinas: «el problema»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "articulos-definidos",
                                                                "title": "Artículos determinados e indeterminados",
                                                                "subtitle": "El, la, los, las / un, una, unos, unas",
                                                                "page_num": 2,
                                                                "table_head": [
                                                                                "Tipo",
                                                                                "Masculino Sing.",
                                                                                "Femenino Sing.",
                                                                                "Masculino Plur.",
                                                                                "Femenino Plur."
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Determinado",
                                                                                                "el",
                                                                                                "la",
                                                                                                "los",
                                                                                                "las"
                                                                                ],
                                                                                [
                                                                                                "Indeterminado",
                                                                                                "un",
                                                                                                "una",
                                                                                                "unos",
                                                                                                "unas"
                                                                                ]
                                                                ],
                                                                "attention": "Ante sustantivos femeninos que empiezan por «a-» o «ha-» tónica, se usa «el» o «un» en singular por eufonía (el agua, un hacha).",
                                                                "mnemonic": "El / La para cosas conocidas. Un / Una para cosas no especificadas.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "la agua",
                                                                                                "right": "el agua"
                                                                                },
                                                                                {
                                                                                                "wrong": "un chica",
                                                                                                "right": "una chica"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Elegir el artículo determinado correcto según género y número",
                                                                                "Aplicar la regla de eufonía con palabras como el agua"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Qué artículo determinado se usa con la palabra «agua» en singular?",
                                                                                                "opts": [
                                                                                                                "la agua",
                                                                                                                "el agua",
                                                                                                                "las agua"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Por eufonía, ante a- tónica se usa «el»: «el agua»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "plural-sustantivos",
                                                                "title": "Formación del plural",
                                                                "subtitle": "Reglas de adición de -s y -es",
                                                                "page_num": 3,
                                                                "table_head": [
                                                                                "Terminación singular",
                                                                                "Regla de plural",
                                                                                "Ejemplo singular",
                                                                                "Ejemplo plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Vocal no acentuada (-o, -a, -e)",
                                                                                                "añadir -s",
                                                                                                "el libro / la casa",
                                                                                                "los libros / las casas"
                                                                                ],
                                                                                [
                                                                                                "Consonante",
                                                                                                "añadir -es",
                                                                                                "el hotel / la ciudad",
                                                                                                "los hoteles / las ciudades"
                                                                                ],
                                                                                [
                                                                                                "Terminación -z",
                                                                                                "cambiar z por c + -es",
                                                                                                "el lápiz / la luz",
                                                                                                "los lápices / las luces"
                                                                                ]
                                                                ],
                                                                "attention": "La Z cambia a C antes de la E en el plural (el lápiz -> los lápices).",
                                                                "mnemonic": "Vocal + S, Consonante + ES, Z -> CES.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "los lápizes",
                                                                                                "right": "los lápices"
                                                                                },
                                                                                {
                                                                                                "wrong": "los ciudad",
                                                                                                "right": "las ciudades"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar el plural añadiendo -s a vocales",
                                                                                "Cambiar la -z por -ces en el plural"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es el plural correcto de «el lápiz»?",
                                                                                                "opts": [
                                                                                                                "los lápizs",
                                                                                                                "los lápizes",
                                                                                                                "los lápices"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "La «z» final cambia a «c» y se añade «-es»: «los lápices»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "posesivos",
                                                                "title": "Adjetivos y pronombres posesivos",
                                                                "subtitle": "Mi, tu, su, nuestro, vuestro y sus formas tónicas",
                                                                "page_num": 4,
                                                                "table_head": [
                                                                                "Poseedor",
                                                                                "Átono Sing. (m./f.)",
                                                                                "Átono Plural",
                                                                                "Tónico Sing. (m. / f.)",
                                                                                "Tónico Plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "yo",
                                                                                                "mi",
                                                                                                "mis",
                                                                                                "mío / mía",
                                                                                                "míos / mías"
                                                                                ],
                                                                                [
                                                                                                "tú",
                                                                                                "tu",
                                                                                                "tus",
                                                                                                "tuyo / tuya",
                                                                                                "tuyos / tuyas"
                                                                                ],
                                                                                [
                                                                                                "él / ella / ud.",
                                                                                                "su",
                                                                                                "sus",
                                                                                                "suyo / suya",
                                                                                                "suyos / suyas"
                                                                                ],
                                                                                [
                                                                                                "nosotros/as",
                                                                                                "nuestro / nuestra",
                                                                                                "nuestros / nuestras",
                                                                                                "nuestro / nuestra",
                                                                                                "nuestros / nuestras"
                                                                                ],
                                                                                [
                                                                                                "vosotros/as",
                                                                                                "vuestro / vuestra",
                                                                                                "vuestros / vuestras",
                                                                                                "vuestro / vuestra",
                                                                                                "vuestros / vuestras"
                                                                                ],
                                                                                [
                                                                                                "ellos / ellas / uds.",
                                                                                                "su",
                                                                                                "sus",
                                                                                                "suyo / suya",
                                                                                                "suyos / suyas"
                                                                                ]
                                                                ],
                                                                "attention": "Los adjetivos posesivos átonos se colocan antes del sustantivo y concuerdan en número (y género en nuestro/vuestro).",
                                                                "mnemonic": "Mi libro (antes del sustantivo) vs El libro mío (después del sustantivo).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "mi libro grande y su libro de tú",
                                                                                                "right": "mi libro grande y tu libro"
                                                                                },
                                                                                {
                                                                                                "wrong": "nuestro casa",
                                                                                                "right": "nuestra casa"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar adjetivos posesivos átonos antes del sustantivo",
                                                                                "Concordar nuestro y vuestro en género y número"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la forma correcta para «our house»?",
                                                                                                "opts": [
                                                                                                                "nuestro casa",
                                                                                                                "nuestra casa",
                                                                                                                "nuestros casa"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Casa» es femenino singular, por lo que se usa «nuestra»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "demostrativos",
                                                                "title": "Demostrativos",
                                                                "subtitle": "Este, ese, aquel (cercanía, distancia media y lejanía)",
                                                                "page_num": 5,
                                                                "table_head": [
                                                                                "Distancia",
                                                                                "Masculino Sing.",
                                                                                "Femenino Sing.",
                                                                                "Masculino Plur.",
                                                                                "Femenino Plur."
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Cerca (aquí / acá)",
                                                                                                "este",
                                                                                                "esta",
                                                                                                "estos",
                                                                                                "estas"
                                                                                ],
                                                                                [
                                                                                                "Distancia media (ahí)",
                                                                                                "ese",
                                                                                                "esa",
                                                                                                "esos",
                                                                                                "esas"
                                                                                ],
                                                                                [
                                                                                                "Lejos (allí / allá)",
                                                                                                "aquel",
                                                                                                "aquella",
                                                                                                "aquellos",
                                                                                                "aquellas"
                                                                                ]
                                                                ],
                                                                "attention": "Atención al plural masculino: este -> estos, ese -> esos, aquel -> aquellos (¡no se dice *estos* con e!).",
                                                                "mnemonic": "Este (aquí), Ese (ahí), Aquel (allí).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "este libro y estes cuadernos",
                                                                                                "right": "este libro y estos cuadernos"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar este/esta/estos/estas para objetos cercanos",
                                                                                "Diferenciar entre ese (ahí) y aquel (allí)"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es el plural masculino de «este»?",
                                                                                                "opts": [
                                                                                                                "estes",
                                                                                                                "estos",
                                                                                                                "estos/estes"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "El plural masculino de «este» es «estos»."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-2",
                                "file": "capitulo-2.html",
                                "title": "Capítulo 2 · Verbos y tiempos verbales",
                                "subtitle": "Ser, estar, presente, reflexivos, imperativo, hay y pasados",
                                "stripe": "#1c8f56",
                                "topics": [
                                                {
                                                                "slug": "ser-vs-estar",
                                                                "title": "Ser vs Estar",
                                                                "subtitle": "Usos de ser y estar en español",
                                                                "page_num": 6,
                                                                "table_head": [
                                                                                "Verbo",
                                                                                "Usos principales",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Ser",
                                                                                                "Identidad, origen, profesión, características permanentes",
                                                                                                "Soy profesor / Soy de España / La mesa es de madera."
                                                                                ],
                                                                                [
                                                                                                "Estar",
                                                                                                "Ubicación espacial, estados temporales, emociones",
                                                                                                "Estoy en casa / Estoy cansado / El café está frío."
                                                                                ]
                                                                ],
                                                                "attention": "Para la ubicación de personas u objetos se usa SIEMPRE «estar» (¿Dónde estás?).",
                                                                "mnemonic": "Ser = lo que es (esencia). Estar = cómo o dónde está (estado/lugar).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Soy en Madrid",
                                                                                                "right": "Estoy en Madrid"
                                                                                },
                                                                                {
                                                                                                "wrong": "Estoy profesor",
                                                                                                "right": "Soy profesor"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar ser para profesión, origen e identidad",
                                                                                "Usar estar para ubicación y estados temporales"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Qué verbo se usa para decir la ubicación actual («I am at home»)?",
                                                                                                "opts": [
                                                                                                                "Soy en casa",
                                                                                                                "Estoy en casa",
                                                                                                                "Tengo en casa"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "La ubicación física exige el verbo estar: «Estoy en casa»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "presente-indicativo",
                                                                "title": "Presente de indicativo",
                                                                "subtitle": "Conjugación regular de verbos en -ar, -er, -ir",
                                                                "page_num": 7,
                                                                "table_head": [
                                                                                "Persona",
                                                                                "-AR (hablar)",
                                                                                "-ER (comer)",
                                                                                "-IR (vivir)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "yo",
                                                                                                "hablo",
                                                                                                "como",
                                                                                                "vivo"
                                                                                ],
                                                                                [
                                                                                                "tú",
                                                                                                "hablas",
                                                                                                "comes",
                                                                                                "vives"
                                                                                ],
                                                                                [
                                                                                                "él / ella / ud.",
                                                                                                "habla",
                                                                                                "come",
                                                                                                "vive"
                                                                                ],
                                                                                [
                                                                                                "nosotros/as",
                                                                                                "hablamos",
                                                                                                "comemos",
                                                                                                "vivimos"
                                                                                ],
                                                                                [
                                                                                                "vosotros/as",
                                                                                                "habláis",
                                                                                                "coméis",
                                                                                                "vivís"
                                                                                ],
                                                                                [
                                                                                                "ellos / ellas / uds.",
                                                                                                "hablan",
                                                                                                "comen",
                                                                                                "viven"
                                                                                ]
                                                                ],
                                                                "attention": "La primera persona singular (yo) termina siempre en -o en las tres conjugaciones.",
                                                                "mnemonic": "Yo -o; Tú -as/-es; Él -a/-e; Nosotros -amos/-emos/-imos.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Yo hablas español",
                                                                                                "right": "Yo hablo español"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Conjugar verbos regulares en -ar, -er, -ir en presente",
                                                                                "Reconocer las desinenzas de cada persona"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la forma correcta de la primera persona singular (yo) para «vivir»?",
                                                                                                "opts": [
                                                                                                                "vivo",
                                                                                                                "vives",
                                                                                                                "vive"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "La desinencia de «yo» en presente es «-o»: «vivo»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "verbos-reflexivos",
                                                                "title": "Verbos reflexivos",
                                                                "subtitle": "Llamarse, lavarse, levantarse y los pronombres reflexivos",
                                                                "page_num": 8,
                                                                "table_head": [
                                                                                "Sujeto",
                                                                                "Pronombre reflexivo",
                                                                                "Verbo (llamarse)",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "yo",
                                                                                                "me",
                                                                                                "llamo",
                                                                                                "Yo me llamo Carlos."
                                                                                ],
                                                                                [
                                                                                                "tú",
                                                                                                "te",
                                                                                                "llamas",
                                                                                                "¿Cómo te llamas?"
                                                                                ],
                                                                                [
                                                                                                "él / ella / ud.",
                                                                                                "se",
                                                                                                "llama",
                                                                                                "Ella se llama Ana."
                                                                                ],
                                                                                [
                                                                                                "nosotros/as",
                                                                                                "nos",
                                                                                                "llamamos",
                                                                                                "Nosotros nos llamamos López."
                                                                                ],
                                                                                [
                                                                                                "vosotros/as",
                                                                                                "os",
                                                                                                "llamáis",
                                                                                                "¿Cómo os llamáis?"
                                                                                ],
                                                                                [
                                                                                                "ellos / ellas / uds.",
                                                                                                "se",
                                                                                                "llaman",
                                                                                                "Ellos se llaman Juan y Pedro."
                                                                                ]
                                                                ],
                                                                "attention": "El pronombre reflexivo se coloca delante del verbo conjugado (me lavo).",
                                                                "mnemonic": "Me, te, se, nos, os, se + verbo conjugado.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Yo lavo me las manos",
                                                                                                "right": "Yo me lavo las manos"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Colocar los pronombres reflexivos antes del verbo conjugado",
                                                                                "Conjugar verbos reflexivos en presente"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es el pronombre reflexivo para «nosotros»?",
                                                                                                "opts": [
                                                                                                                "se",
                                                                                                                "nos",
                                                                                                                "os"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "El pronombre reflexivo para la primera persona del plural es «nos»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "imperativo",
                                                                "title": "Imperativo afirmativo básico",
                                                                "subtitle": "Dar instrucciones, mandatos y consejos (tú, usted, vosotros)",
                                                                "page_num": 9,
                                                                "table_head": [
                                                                                "Verbo",
                                                                                "Tú",
                                                                                "Usted",
                                                                                "Vosotros/as",
                                                                                "Ustedes"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "hablar (-AR)",
                                                                                                "¡habla!",
                                                                                                "¡hable!",
                                                                                                "¡hablad!",
                                                                                                "¡hablen!"
                                                                                ],
                                                                                [
                                                                                                "comer (-ER)",
                                                                                                "¡come!",
                                                                                                "¡coma!",
                                                                                                "¡comed!",
                                                                                                "¡coman!"
                                                                                ],
                                                                                [
                                                                                                "vivir (-IR)",
                                                                                                "¡vive!",
                                                                                                "¡viva!",
                                                                                                "¡vivid!",
                                                                                                "¡vivan!"
                                                                                ]
                                                                ],
                                                                "attention": "Para la forma «tú», el imperativo afirmativo coincide con la 3ª persona singular del presente (él habla -> ¡habla tú!).",
                                                                "mnemonic": "¡Tú habla! ¡Usted hable! ¡Vosotros hablad!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "¡Hablar tú más alto!",
                                                                                                "right": "¡Habla tú más alto!"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar el imperativo afirmativo para tú",
                                                                                "Reconocer las formas de respeto (usted/ustedes)"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la forma de imperativo afirmativo de «tú» para el verbo «comer»?",
                                                                                                "opts": [
                                                                                                                "¡coma!",
                                                                                                                "¡come!",
                                                                                                                "¡comed!"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "La forma afirmativa para «tú» es «¡come!»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "hay-vs-esta",
                                                                "title": "Hay vs Está/Están",
                                                                "subtitle": "Existencia indeterminada vs ubicación de algo indeterminado o determinado",
                                                                "page_num": 10,
                                                                "table_head": [
                                                                                "Estructura",
                                                                                "Uso gramatical",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Hay + un/una/unos/unas/número/sustantivo",
                                                                                                "Existencia de elementos indeterminados",
                                                                                                "Hay un libro en la mesa / Hay tres coches."
                                                                                ],
                                                                                [
                                                                                                "Está / Están + el/la/los/las/nombre propio",
                                                                                                "Ubicación de elementos determinados",
                                                                                                "El libro está en la mesa / Ana está aquí."
                                                                                ]
                                                                ],
                                                                "attention": "NUNCA se usa *hay el* o *hay la*. Con el artículo determinado se usa siempre *está* o *están*.",
                                                                "mnemonic": "Hay un... (indefinido). El... está (definido).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Hay el perro en el jardín",
                                                                                                "right": "El perro está en el jardín"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar hay con artículos indeterminados o sin artículo",
                                                                                "Usar está/están con artículos determinados"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Qué forma es correcta para decir «There is a book on the table»?",
                                                                                                "opts": [
                                                                                                                "Está un libro en la mesa",
                                                                                                                "Hay un libro en la mesa",
                                                                                                                "Es un libro en la mesa"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Para existencia indeterminada (un libro) se usa la forma impersonal «Hay»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "pretérito-perfecto",
                                                                "title": "Pretérito perfecto compuesto",
                                                                "subtitle": "Haber en presente + participio pasado",
                                                                "page_num": 11,
                                                                "table_head": [
                                                                                "Persona",
                                                                                "Haber",
                                                                                "Participio -AR (hablar)",
                                                                                "Participio -ER/-IR (comer/vivir)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "yo",
                                                                                                "he",
                                                                                                "hablado",
                                                                                                "comido / vivido"
                                                                                ],
                                                                                [
                                                                                                "tú",
                                                                                                "has",
                                                                                                "hablado",
                                                                                                "comido / vivido"
                                                                                ],
                                                                                [
                                                                                                "él / ella / ud.",
                                                                                                "ha",
                                                                                                "hablado",
                                                                                                "comido / vivido"
                                                                                ],
                                                                                [
                                                                                                "nosotros/as",
                                                                                                "hemos",
                                                                                                "hablado",
                                                                                                "comido / vivido"
                                                                                ],
                                                                                [
                                                                                                "vosotros/as",
                                                                                                "habéis",
                                                                                                "hablado",
                                                                                                "comido / vivido"
                                                                                ],
                                                                                [
                                                                                                "ellos / ellas / uds.",
                                                                                                "han",
                                                                                                "hablado",
                                                                                                "comido / vivido"
                                                                                ]
                                                                ],
                                                                "attention": "En español el participio pasado con haber es INVARIABLE (no cambia nunca de género ni de número).",
                                                                "mnemonic": "He, has, ha, hemos, habéis, han + participio en -ado / -ido.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ellas han comidas",
                                                                                                "right": "Ellas han comido"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar el pretérito perfecto con el verbo haber",
                                                                                "Mantener el participio invariable en -ado/-ido"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la forma correcta para «nosotros (comer)» en pretérito perfecto?",
                                                                                                "opts": [
                                                                                                                "hemos comido",
                                                                                                                "habéis comido",
                                                                                                                "han comido"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "Para nosotros la forma auxiliar es «hemos»: «hemos comido»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "preterito-indefinido-vs-perfecto",
                                                                "title": "Pretérito indefinido vs Pretérito perfecto",
                                                                "subtitle": "Acciones pasadas terminadas en un tiempo cerrado vs tiempo abierto",
                                                                "page_num": 12,
                                                                "table_head": [
                                                                                "Tiempo",
                                                                                "Marcadores temporales",
                                                                                "Significado",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Pretérito perfecto",
                                                                                                "hoy, esta semana, este mes, ya, nunca",
                                                                                                "Tiempo presente no terminado",
                                                                                                "Hoy he comido paella."
                                                                                ],
                                                                                [
                                                                                                "Pretérito indefinido",
                                                                                                "ayer, la semana pasada, en 2020",
                                                                                                "Tiempo pasado completamente cerrado",
                                                                                                "Ayer comí paella."
                                                                                ]
                                                                ],
                                                                "attention": "En España se usa el pretérito perfecto con marcadores como «hoy» o «esta semana». En América Latina se prefiere el indefinido.",
                                                                "mnemonic": "Este/Esta/Hoy = Perfecto (he comido). Ayer/El año pasado = Indefinido (comí).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ayer he ido al cine",
                                                                                                "right": "Ayer fui al cine"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar marcadores temporales para elegir el tiempo verbal correcto",
                                                                                "Diferenciar entre pretérito perfecto e indefinido"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Qué marcador temporal exige habitualmente el pretérito indefinido?",
                                                                                                "opts": [
                                                                                                                "esta mañana",
                                                                                                                "ayer",
                                                                                                                "hoy"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Ayer» marca una unidad de tiempo pasada y cerrada, por lo que exige el indefinido («ayer fui»)."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-3",
                                "file": "capitulo-3.html",
                                "title": "Capítulo 3 · Pronombres y estructura de la oración",
                                "subtitle": "Pronombres personales, negación, preguntas y conjunciones",
                                "stripe": "#3562e0",
                                "topics": [
                                                {
                                                                "slug": "pronombres-personales",
                                                                "title": "Pronombres personales",
                                                                "subtitle": "Pronombres de sujeto y pronombres de objeto directo e indirecto",
                                                                "page_num": 13,
                                                                "table_head": [
                                                                                "Persona",
                                                                                "Sujeto",
                                                                                "Objeto Directo (Lo/La)",
                                                                                "Objeto Indirecto (Le)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "1ª sing.",
                                                                                                "yo",
                                                                                                "me",
                                                                                                "me"
                                                                                ],
                                                                                [
                                                                                                "2ª sing.",
                                                                                                "tú",
                                                                                                "te",
                                                                                                "te"
                                                                                ],
                                                                                [
                                                                                                "3ª sing. m.",
                                                                                                "él",
                                                                                                "lo",
                                                                                                "le (se)"
                                                                                ],
                                                                                [
                                                                                                "3ª sing. f.",
                                                                                                "ella",
                                                                                                "la",
                                                                                                "le (se)"
                                                                                ],
                                                                                [
                                                                                                "1ª plur.",
                                                                                                "nosotros/as",
                                                                                                "nos",
                                                                                                "nos"
                                                                                ],
                                                                                [
                                                                                                "2ª plur.",
                                                                                                "vosotros/as",
                                                                                                "os",
                                                                                                "os"
                                                                                ],
                                                                                [
                                                                                                "3ª plur.",
                                                                                                "ellos/as",
                                                                                                "los / las",
                                                                                                "les (se)"
                                                                                ]
                                                                ],
                                                                "attention": "El objeto indirecto va antes del objeto directo (OD). Si coinciden le/les + lo/la, «le» cambia a «se» (se lo doy).",
                                                                "mnemonic": "Sujeto: Yo habla. Objeto: Me ve (a mí), Lo compra (el libro).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Yo le veo a él (OD)",
                                                                                                "right": "Yo lo veo (a él)"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Diferenciar pronombres de sujeto y de objeto",
                                                                                "Colocar los pronombres de objeto antes del verbo conjugado"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cómo se dice «I see him» (referido a Juan)?",
                                                                                                "opts": [
                                                                                                                "Yo le veo",
                                                                                                                "Yo lo veo",
                                                                                                                "Yo él veo"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "El objeto directo masculino singular para personas/cosas es «lo»: «Yo lo veo»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "negacion",
                                                                "title": "La negación",
                                                                "subtitle": "No, nada, nadie, nunca, tampoco",
                                                                "page_num": 14,
                                                                "table_head": [
                                                                                "Elemento",
                                                                                "Estructura",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "no",
                                                                                                "no + verbo",
                                                                                                "No hablo alemán."
                                                                                ],
                                                                                [
                                                                                                "nunca / jamás",
                                                                                                "nunca + verbo / no + verbo + nunca",
                                                                                                "Nunca como carne. / No como carne nunca."
                                                                                ],
                                                                                [
                                                                                                "nada",
                                                                                                "no + verbo + nada",
                                                                                                "No entiendo nada."
                                                                                ],
                                                                                [
                                                                                                "nadie",
                                                                                                "no + verbo + nadie",
                                                                                                "No hay nadie aquí."
                                                                                ],
                                                                                [
                                                                                                "tampoco",
                                                                                                "no + verbo + tampoco",
                                                                                                "Yo tampoco quiero ir."
                                                                                ]
                                                                ],
                                                                "attention": "Si la palabra negativa (nada, nadie, nunca) va después del verbo, es OBLIGATORIO poner «no» antes del verbo.",
                                                                "mnemonic": "No + Verbo + Nada/Nadie/Nunca (o Nada/Nadie/Nunca + Verbo).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Entiendo nada",
                                                                                                "right": "No entiendo nada"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar la negación simple con no + verbo",
                                                                                "Usar la doble negación cuando el elemento negativo va tras el verbo"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la frase correcta en español?",
                                                                                                "opts": [
                                                                                                                "Veo nadie",
                                                                                                                "No veo nadie",
                                                                                                                "No veo a nadie"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "Se exige «no + verbo + a nadie» cuando el objeto persona va tras el verbo."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "interrogativos",
                                                                "title": "Pronombres y palabras interrogativas",
                                                                "subtitle": "Qué, quién, cuál, dónde, cuándo, cuánto, por qué",
                                                                "page_num": 15,
                                                                "table_head": [
                                                                                "Interrogativo",
                                                                                "Significado / Función",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "¿Qué?",
                                                                                                "Identificación de cosas o acciones",
                                                                                                "¿Qué haces?"
                                                                                ],
                                                                                [
                                                                                                "¿Quién / quiénes?",
                                                                                                "Identificación de personas",
                                                                                                "¿Quién es él?"
                                                                                ],
                                                                                [
                                                                                                "¿Dónde?",
                                                                                                "Lugar",
                                                                                                "¿Dónde vives?"
                                                                                ],
                                                                                [
                                                                                                "¿Cuándo?",
                                                                                                "Tiempo",
                                                                                                "¿Cuándo es la fiesta?"
                                                                                ],
                                                                                [
                                                                                                "¿Por qué?",
                                                                                                "Causa o razón",
                                                                                                "¿Por qué estudias español?"
                                                                                ],
                                                                                [
                                                                                                "¿Cuánto/a/os/as?",
                                                                                                "Cantidad",
                                                                                                "¿Cuántos años tienes?"
                                                                                ]
                                                                ],
                                                                "attention": "Todas las palabras interrogativas llevan tilde (acento gráfico) obligatoria en preguntas directas e indirectas.",
                                                                "mnemonic": "En español se abre siempre con signos ¿ y se cierra con ?",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Donde vives?",
                                                                                                "right": "¿Dónde vives?"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Poner tilde en todas las palabras interrogativas",
                                                                                "Usar los signos de apertura ¿ y cierre ?"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la palabra interrogativa para preguntar la razón o motivo?",
                                                                                                "opts": [
                                                                                                                "¿Cuándo?",
                                                                                                                "¿Por qué?",
                                                                                                                "¿Dónde?"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«¿Por qué?» se usa para preguntar la causa o razón."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "conjunciones-basicas",
                                                                "title": "Conjunciones básicas",
                                                                "subtitle": "Y/e, pero, o/u, porque (conectar oraciones e ideas)",
                                                                "page_num": 16,
                                                                "table_head": [
                                                                                "Conjunción",
                                                                                "Regla especial",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "y (e)",
                                                                                                "Cambia a «e» ante sonido /i/ (i-, hi-)",
                                                                                                "España e Italia / carne y pescado"
                                                                                ],
                                                                                [
                                                                                                "pero",
                                                                                                "Contrasto u oposición",
                                                                                                "Estudio mucho, pero es difícil."
                                                                                ],
                                                                                [
                                                                                                "o (u)",
                                                                                                "Cambia a «u» ante sonido /o/ (o-, ho-)",
                                                                                                "Siete u ocho / café o té"
                                                                                ],
                                                                                [
                                                                                                "porque",
                                                                                                "Respuesta / causa (sin tilde)",
                                                                                                "Estudio porque me gusta."
                                                                                ]
                                                                ],
                                                                "attention": "«Y» cambia a «e» delante de palabras que empiezan por i- o hi- (ej. geografía e historia). «O» cambia a «u» ante o- u ho-.",
                                                                "mnemonic": "Y -> E ante I. O -> U ante O.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Francia y Italia",
                                                                                                "right": "Francia e Italia"
                                                                                },
                                                                                {
                                                                                                "wrong": "siete o ocho",
                                                                                                "right": "siete u ocho"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Aplicar los cambios de y -> e y o -> u",
                                                                                "Diferenciar por qué (pregunta) de porque (respuesta)"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la forma correcta para «Spain and Italy»?",
                                                                                                "opts": [
                                                                                                                "España y Italia",
                                                                                                                "España e Italia",
                                                                                                                "España u Italia"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Ante la palabra «Italia» que empieza por sonido /i/, la conjunción «y» cambia a «e»."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-4",
                                "file": "capitulo-4.html",
                                "title": "Capítulo 4 · Preposiciones, números y tiempo",
                                "subtitle": "Preposiciones de lugar, tiempo, números, hora y fechas",
                                "stripe": "#7c4fd6",
                                "topics": [
                                                {
                                                                "slug": "preposiciones-lugar",
                                                                "title": "Preposiciones de lugar",
                                                                "subtitle": "En, a, de, sobre, debajo de, entre",
                                                                "page_num": 17,
                                                                "table_head": [
                                                                                "Preposición / Locución",
                                                                                "Uso espacial",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "en",
                                                                                                "Ubicación en un espacio cerrado o ciudad/país",
                                                                                                "Vivo en Madrid."
                                                                                ],
                                                                                [
                                                                                                "a",
                                                                                                "Dirección / movimiento hacia un lugar",
                                                                                                "Voy a la escuela."
                                                                                ],
                                                                                [
                                                                                                "de",
                                                                                                "Origen o procedencia",
                                                                                                "Soy de Colombia."
                                                                                ],
                                                                                [
                                                                                                "sobre / encima de",
                                                                                                "Superficie o posición superior",
                                                                                                "El libro está sobre la mesa."
                                                                                ],
                                                                                [
                                                                                                "debajo de",
                                                                                                "Posición inferior",
                                                                                                "El perro está debajo de la mesa."
                                                                                ],
                                                                                [
                                                                                                "entre",
                                                                                                "Espacio intermedio entre dos puntos",
                                                                                                "El banco está entre el cine y el bar."
                                                                                ]
                                                                ],
                                                                "attention": "En español se dice «estar en casa / en la oficina» para ubicación y «ir a casa / a la oficina» para movimiento.",
                                                                "mnemonic": "Estar EN (ubicación). Ir A (movimiento).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Estoy a Madrid",
                                                                                                "right": "Estoy en Madrid"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Diferenciar en (ubicación) de a (movimiento)",
                                                                                "Usar locuciones prepositivas como debajo de / encima de"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Qué preposición se usa para indicar destino o movimiento hacia un lugar?",
                                                                                                "opts": [
                                                                                                                "en",
                                                                                                                "a",
                                                                                                                "de"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "La preposición «a» indica dirección o destino («voy a Madrid»)."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "preposiciones-tiempo",
                                                                "title": "Preposiciones de tiempo",
                                                                "subtitle": "En, a, de, desde, hasta, por, para",
                                                                "page_num": 18,
                                                                "table_head": [
                                                                                "Preposición",
                                                                                "Uso temporal",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "a",
                                                                                                "Horas y momentos precisos",
                                                                                                "La clase es a las 9:00."
                                                                                ],
                                                                                [
                                                                                                "en",
                                                                                                "Meses, años, estaciones del año",
                                                                                                "En verano hace calor / en 2026."
                                                                                ],
                                                                                [
                                                                                                "desde / hasta",
                                                                                                "Inicio y fin de un período",
                                                                                                "Trabajo desde las 8 hasta las 15."
                                                                                ],
                                                                                [
                                                                                                "por",
                                                                                                "Partes del día (mañana, tarde, noche)",
                                                                                                "Estudio por la mañana."
                                                                                ],
                                                                                [
                                                                                                "para",
                                                                                                "Fecha límite o plazo futuro",
                                                                                                "La tarea es para el lunes."
                                                                                ]
                                                                ],
                                                                "attention": "Se dice «por la mañana / por la tarde / por la noche» para partes del día generales.",
                                                                "mnemonic": "A las (horas), EN (meses/años), POR (partes del día).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "En la mañana",
                                                                                                "right": "Por la mañana"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar «a» con las horas del día",
                                                                                "Usar «por» con las partes del día en español peninsular"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Qué preposición se usa para indicar la hora («at 3 o'clock»)?",
                                                                                                "opts": [
                                                                                                                "en",
                                                                                                                "a",
                                                                                                                "por"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Para la hora se usa la preposición «a»: «a las tres»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "numeros-fecha-hora",
                                                                "title": "Números, la hora, días y meses",
                                                                "subtitle": "Números cardinales y ordinales, decir la hora y fechas",
                                                                "page_num": 19,
                                                                "table_head": [
                                                                                "Categoría",
                                                                                "Expresión / Formato",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Cardinales (1-30)",
                                                                                                "uno, dos, tres... veintiuno, treinta",
                                                                                                "Tengo treinta euros."
                                                                                ],
                                                                                [
                                                                                                "Ordinales (1º-5º)",
                                                                                                "primero, segundo, tercero, cuarto...",
                                                                                                "El primer piso."
                                                                                ],
                                                                                [
                                                                                                "Decir la hora",
                                                                                                "¿Qué hora es? -> Es la una / Son las dos",
                                                                                                "Son las tres y media."
                                                                                ],
                                                                                [
                                                                                                "Días de la semana",
                                                                                                "lunes, martes, miércoles, jueves...",
                                                                                                "El lunes tengo examen."
                                                                                ],
                                                                                [
                                                                                                "Meses del año",
                                                                                                "enero, febrero, marzo, abril...",
                                                                                                "Mi cumpleaños es en mayo."
                                                                                ]
                                                                ],
                                                                "attention": "«Primero» y «tercero» pierden la -o final ante sustantivos masculinos singulares (el primer día, el tercer piso).",
                                                                "mnemonic": "Es la una (1:00). Son las... (2:00 en adelante).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Es las dos",
                                                                                                "right": "Son las dos"
                                                                                },
                                                                                {
                                                                                                "wrong": "el primero piso",
                                                                                                "right": "el primer piso"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Decir la hora en singular (la una) y plural (las dos)",
                                                                                "Apocopar primero -> primer y tercero -> tercer"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cómo se dice «It is 2 o'clock» en español?",
                                                                                                "opts": [
                                                                                                                "Es las dos",
                                                                                                                "Son las dos",
                                                                                                                "Es dos horas"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A partir de las dos se usa el plural «Son las + número»."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-5",
                                "file": "capitulo-5.html",
                                "title": "Capítulo 5 · Adverbios y comparación",
                                "subtitle": "Adverbios de frecuencia, modo, comparativos y superlativos",
                                "stripe": "#d99b00",
                                "topics": [
                                                {
                                                                "slug": "adverbios-frecuencia-modo",
                                                                "title": "Adverbios de frecuencia y de modo",
                                                                "subtitle": "Siempre, a menudo, nunca, rápidamente, bien, mal",
                                                                "page_num": 20,
                                                                "table_head": [
                                                                                "Tipo",
                                                                                "Ejemplos",
                                                                                "Posición habitual",
                                                                                "Ejemplo completo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Frecuencia",
                                                                                                "siempre, a menudo, a veces, casi nunca, nunca",
                                                                                                "Antes del verbo o al inicio",
                                                                                                "Siempre estudio por la tarde."
                                                                                ],
                                                                                [
                                                                                                "Modo en -mente",
                                                                                                "rápidamente, lentamente, fácilmente",
                                                                                                "Tras el verbo principal",
                                                                                                "Escribe rápidamente."
                                                                                ],
                                                                                [
                                                                                                "Modo irregulares",
                                                                                                "bien, mal, despacio, de prisa",
                                                                                                "Tras el verbo principal",
                                                                                                "Habla español muy bien."
                                                                                ]
                                                                ],
                                                                "attention": "Los adverbios terminados en «-mente» se forman agregando la terminación al femenino del adjetivo (rápida -> rápidamente).",
                                                                "mnemonic": "Adjetivo femenino + -mente = Adverbio de modo.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Él habla bueno",
                                                                                                "right": "Él habla bien"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Colocar los adverbios de frecuencia en la oración",
                                                                                "Formar adverbios en -mente a partir del adjetivo femenino"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es el adverbio de modo correspondiente al verbo «hablar»?",
                                                                                                "opts": [
                                                                                                                "bueno",
                                                                                                                "bien",
                                                                                                                "bonito"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Con verbos se utiliza el adverbio «bien» (no el adjetivo «buono»)."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "comparativo-superlativo",
                                                                "title": "Comparativo y superlativo",
                                                                "subtitle": "Más... que, menos... que, tan... como y el superlativo (-ísimo)",
                                                                "page_num": 21,
                                                                "table_head": [
                                                                                "Grado",
                                                                                "Estructura",
                                                                                "Ejemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Superioridad",
                                                                                                "más + adj. + que",
                                                                                                "Juan es más alto que Pedro."
                                                                                ],
                                                                                [
                                                                                                "Inferioridad",
                                                                                                "menos + adj. + que",
                                                                                                "El libro es menos caro que la película."
                                                                                ],
                                                                                [
                                                                                                "Igualdad",
                                                                                                "tan + adj. + como",
                                                                                                "Ana es tan alta como María."
                                                                                ],
                                                                                [
                                                                                                "Superlativo relativo",
                                                                                                "el / la más + adj. + de",
                                                                                                "Es el chico más alto de la clase."
                                                                                ],
                                                                                [
                                                                                                "Superlativo absoluto",
                                                                                                "adjetivo + -ísimo/a/os/as",
                                                                                                "Este café está buenísimo."
                                                                                ]
                                                                ],
                                                                "attention": "Cuidado con los comparativos irregulares: bueno -> mejor (¡no *más bueno*!), malo -> peor (¡no *más malo*!).",
                                                                "mnemonic": "Más... que. Tan... como. Bueno -> Mejor.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Juan es más bueno que Pedro",
                                                                                                "right": "Juan es mejor que Pedro"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar comparativos de superioridad, inferioridad e igualdad",
                                                                                "Usar comparativos irregulares como mejor y peor"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "¿Cuál es la forma comparativa correcta para «bueno»?",
                                                                                                "opts": [
                                                                                                                "más bueno",
                                                                                                                "mejor",
                                                                                                                "buenísimo"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "El comparativo irregular de «bueno» es «mejor»."
                                                                                }
                                                                ]
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
                                "id": "kapitel-1",
                                "file": "kapitel-1.html",
                                "title": "Kapitel 1 · Nomen, Artikel und Kasus",
                                "subtitle": "Artikel, Genus, Nominativ, Akkusativ, Dativ und Pronomen",
                                "stripe": "#1c8f56",
                                "topics": [
                                                {
                                                                "slug": "artikel-und-genus",
                                                                "title": "Artikel und Genus",
                                                                "subtitle": "Der, die, das und die Pluralform",
                                                                "page_num": 1,
                                                                "table_head": [
                                                                                "Genus",
                                                                                "Bestimmter Artikel",
                                                                                "Unbestimmter Artikel",
                                                                                "Negativartikel",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Maskulin",
                                                                                                "der",
                                                                                                "ein",
                                                                                                "kein",
                                                                                                "der Mann / ein Mann"
                                                                                ],
                                                                                [
                                                                                                "Feminin",
                                                                                                "die",
                                                                                                "eine",
                                                                                                "keine",
                                                                                                "die Frau / eine Frau"
                                                                                ],
                                                                                [
                                                                                                "Neutral",
                                                                                                "das",
                                                                                                "ein",
                                                                                                "kein",
                                                                                                "das Kind / ein Kind"
                                                                                ],
                                                                                [
                                                                                                "Plural",
                                                                                                "die",
                                                                                                "-",
                                                                                                "keine",
                                                                                                "die Kinder / keine Kinder"
                                                                                ]
                                                                ],
                                                                "attention": "Im Deutschen gibt es drei grammatische Geschlechter (maskulin, feminin, neutral). Das Genus muss mit dem Nomen gelernt werden.",
                                                                "mnemonic": "Der Mann (m), Die Frau (f), Das Kind (n).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "das Mann",
                                                                                                "right": "der Mann"
                                                                                },
                                                                                {
                                                                                                "wrong": "ein Frau",
                                                                                                "right": "eine Frau"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Den richtigen bestimmten Artikel zuordnen",
                                                                                "Unbestimmte Artikel ein/eine unterscheiden"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welcher bestimmte Artikel gehört zum Nomen «Frau»?",
                                                                                                "opts": [
                                                                                                                "der",
                                                                                                                "die",
                                                                                                                "das"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Frau» ist feminin, der bestimmte Artikel heißt «die»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "nominativ-und-akkusativ",
                                                                "title": "Nominativ und Akkusativ",
                                                                "subtitle": "Subjekt und direktes Objekt",
                                                                "page_num": 2,
                                                                "table_head": [
                                                                                "Kasus",
                                                                                "Maskulin",
                                                                                "Feminin",
                                                                                "Neutral",
                                                                                "Plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Nominativ (Subjekt)",
                                                                                                "der / ein Mann",
                                                                                                "die / eine Frau",
                                                                                                "das / ein Kind",
                                                                                                "die Kinder"
                                                                                ],
                                                                                [
                                                                                                "Akkusativ (Objekt)",
                                                                                                "den / einen Mann",
                                                                                                "die / eine Frau",
                                                                                                "das / ein Kind",
                                                                                                "die Kinder"
                                                                                ]
                                                                ],
                                                                "attention": "Nur der maskuline Artikel ändert sich im Akkusativ von «der/ein» zu «den/einen». Feminin, Neutral und Plural bleiben unverändert.",
                                                                "mnemonic": "Akkusativ Maskulin: Der wird zu DEN, Ein wird zu EINEN.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich sehe der Mann",
                                                                                                "right": "Ich sehe den Mann"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Den Akkusativ Maskulin mit den/einen bilden",
                                                                                "Erkennen, dass Feminin und Neutral unverändert bleiben"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wie heißt der unbestimmte Artikel im Akkusativ Maskulin («I have a dog»)?",
                                                                                                "opts": [
                                                                                                                "ein Hund",
                                                                                                                "einen Hund",
                                                                                                                "einem Hund"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Im Akkusativ Maskulin wechselt «ein» zu «einen»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "dativ-kasus",
                                                                "title": "Der Dativ",
                                                                "subtitle": "Dativartikel (dem, der, dem, den + -n) und Dativobjekt",
                                                                "page_num": 3,
                                                                "table_head": [
                                                                                "Kasus / Genus",
                                                                                "Bestimmter Artikel",
                                                                                "Unbestimmter Artikel",
                                                                                "Personalpronomen Dativ"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Maskulin",
                                                                                                "dem Mann",
                                                                                                "einem Mann",
                                                                                                "ihm"
                                                                                ],
                                                                                [
                                                                                                "Feminin",
                                                                                                "der Frau",
                                                                                                "einer Frau",
                                                                                                "ihr"
                                                                                ],
                                                                                [
                                                                                                "Neutral",
                                                                                                "dem Kind",
                                                                                                "einem Kind",
                                                                                                "ihm"
                                                                                ],
                                                                                [
                                                                                                "Plural",
                                                                                                "den Kindern (+n)",
                                                                                                "keinen Kindern (+n)",
                                                                                                "ihnen"
                                                                                ]
                                                                ],
                                                                "attention": "Im Dativ Plural bekommen Nomen fast immer ein zusätzliches «-n» am Ende (den Kindern, den Büchern).",
                                                                "mnemonic": "Aus, bei, mit, nach, seit, von, zu verlangen IMMER den Dativ!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich helfe der Mann",
                                                                                                "right": "Ich helfe dem Mann"
                                                                                },
                                                                                {
                                                                                                "wrong": "mit den Kinder",
                                                                                                "right": "mit den Kindern"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Dem (maskulin/neutral), der (feminin), den + -n (plural) bilden",
                                                                                "Dativ bei Verben wie helfen, danken, gehören verwenden"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welcher Artikel steht im Dativ für ein femininem Nomen («die Frau»)?",
                                                                                                "opts": [
                                                                                                                "dem",
                                                                                                                "der",
                                                                                                                "den"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Im Dativ wird aus «die» (feminin) der Artikel «der»: «Ich helfe der Frau»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "personalpronomen",
                                                                "title": "Personalpronomen",
                                                                "subtitle": "Personalpronomen im Nominativ, Akkusativ und Dativ",
                                                                "page_num": 4,
                                                                "table_head": [
                                                                                "Person",
                                                                                "Nominativ (Wer?)",
                                                                                "Akkusativ (Wen?)",
                                                                                "Dativ (Wem?)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "1. Sing. (ich)",
                                                                                                "ich",
                                                                                                "mich",
                                                                                                "mir"
                                                                                ],
                                                                                [
                                                                                                "2. Sing. (du)",
                                                                                                "du",
                                                                                                "dich",
                                                                                                "dir"
                                                                                ],
                                                                                [
                                                                                                "3. Sing. m. (er)",
                                                                                                "er",
                                                                                                "ihn",
                                                                                                "ihm"
                                                                                ],
                                                                                [
                                                                                                "3. Sing. f. (sie)",
                                                                                                "sie",
                                                                                                "sie",
                                                                                                "ihr"
                                                                                ],
                                                                                [
                                                                                                "3. Sing. n. (es)",
                                                                                                "es",
                                                                                                "es",
                                                                                                "ihm"
                                                                                ],
                                                                                [
                                                                                                "1. Plur. (wir)",
                                                                                                "wir",
                                                                                                "uns",
                                                                                                "uns"
                                                                                ],
                                                                                [
                                                                                                "2. Plur. (ihr)",
                                                                                                "ihr",
                                                                                                "euch",
                                                                                                "euch"
                                                                                ],
                                                                                [
                                                                                                "3. Plur. / Formell",
                                                                                                "sie / Sie",
                                                                                                "sie / Sie",
                                                                                                "ihnen / Ihnen"
                                                                                ]
                                                                ],
                                                                "attention": "Unterscheide Akkusativ (mich/dich/ihn) für direkte Objekte und Dativ (mir/dir/ihm) für indirekte Objekte.",
                                                                "mnemonic": "Er sieht mich (Akk.). Er hilft mir (Dat.).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Er hilft mich",
                                                                                                "right": "Er hilft mir"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Personalpronomen im Nominativ, Akkusativ und Dativ zuordnen",
                                                                                "Den richtigen Kasus nach Verben wie helfen wählen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welches Pronomen steht im Dativ für «ich» bei «help me»?",
                                                                                                "opts": [
                                                                                                                "mich",
                                                                                                                "mir",
                                                                                                                "ich"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Das Verb «helfen» verlangt den Dativ: «Hilf mir!»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "possessivartikel",
                                                                "title": "Possessivartikel",
                                                                "subtitle": "Mein, dein, sein, ihr, unser, euer im Nominativ, Akkusativ und Dativ",
                                                                "page_num": 5,
                                                                "table_head": [
                                                                                "Person",
                                                                                "Nominativ Maskulin",
                                                                                "Nominativ Feminin",
                                                                                "Akkusativ Maskulin",
                                                                                "Dativ Maskulin"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "ich",
                                                                                                "mein",
                                                                                                "meine",
                                                                                                "meinen",
                                                                                                "meinem"
                                                                                ],
                                                                                [
                                                                                                "du",
                                                                                                "dein",
                                                                                                "deine",
                                                                                                "deinen",
                                                                                                "deinem"
                                                                                ],
                                                                                [
                                                                                                "er / es",
                                                                                                "sein",
                                                                                                "seine",
                                                                                                "seinen",
                                                                                                "seinem"
                                                                                ],
                                                                                [
                                                                                                "sie",
                                                                                                "ihr",
                                                                                                "ihre",
                                                                                                "ihren",
                                                                                                "ihrer"
                                                                                ],
                                                                                [
                                                                                                "wir",
                                                                                                "unser",
                                                                                                "unsere",
                                                                                                "unseren",
                                                                                                "unserem"
                                                                                ],
                                                                                [
                                                                                                "ihr",
                                                                                                "euer",
                                                                                                "eure",
                                                                                                "euren",
                                                                                                "eurem"
                                                                                ],
                                                                                [
                                                                                                "sie / Sie",
                                                                                                "ihr / Ihr",
                                                                                                "ihre / Ihre",
                                                                                                "ihren / Ihren",
                                                                                                "ihrem / Ihrem"
                                                                                ]
                                                                ],
                                                                "attention": "Die Endungen der Possessivartikel entsprechen genau den Endungen des unbestimmten Artikels (ein/eine/einen/einem).",
                                                                "mnemonic": "Mein Hund (Nom.), meinen Hund (Akk.), meinem Hund (Dat.).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich sehe mein Hund (maskulin Akk.)",
                                                                                                "right": "Ich sehe meinen Hund"
                                                                                },
                                                                                {
                                                                                                "wrong": "unsere Buch",
                                                                                                "right": "unser Buch"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Possessivartikel an Genus und Kasus anpassen",
                                                                                "Die Form «eure» (ohne e vor r) im Femininum/Plural beachten"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welche Form ist richtig für Akkusativ Maskulin («my dog»)?",
                                                                                                "opts": [
                                                                                                                "mein Hund",
                                                                                                                "meinen Hund",
                                                                                                                "meinem Hund"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Im Akkusativ Maskulin erhält der Possessivartikel die Endung «-en»: «meinen Hund»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "demonstrativpronomen",
                                                                "title": "Demonstrativpronomen",
                                                                "subtitle": "Dieser, diese, dieses (Hinweis auf etwas Bestimmtes)",
                                                                "page_num": 6,
                                                                "table_head": [
                                                                                "Kasus",
                                                                                "Maskulin",
                                                                                "Feminin",
                                                                                "Neutral",
                                                                                "Plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Nominativ",
                                                                                                "dieser Mann",
                                                                                                "diese Frau",
                                                                                                "dieses Buch",
                                                                                                "diese Kinder"
                                                                                ],
                                                                                [
                                                                                                "Akkusativ",
                                                                                                "diesen Mann",
                                                                                                "diese Frau",
                                                                                                "dieses Buch",
                                                                                                "diese Kinder"
                                                                                ],
                                                                                [
                                                                                                "Dativ",
                                                                                                "diesem Mann",
                                                                                                "dieser Frau",
                                                                                                "diesem Buch",
                                                                                                "diesen Kindern"
                                                                                ]
                                                                ],
                                                                "attention": "Die Endungen von dieser/diese/dieses folgen exakt den Endungen des bestimmten Artikels (der -> dieser, die -> diese, das -> dieses).",
                                                                "mnemonic": "Der = dieser, Die = diese, Das = dieses, Den = diesen.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich kaufe diese Buch (neutral Akk.)",
                                                                                                "right": "Ich kaufe dieses Buch"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Demonstrativpronomen im Nominativ, Akkusativ und Dativ deklinieren",
                                                                                "Endungen mit dem bestimmten Artikel vergleichen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welche Form ist richtig im Nominativ Maskulin («this Mann»)?",
                                                                                                "opts": [
                                                                                                                "diese Mann",
                                                                                                                "dieser Mann",
                                                                                                                "dieses Mann"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Für maskuline Nomen im Nominativ gilt die Endung «-er»: «dieser Mann»."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "kapitel-2",
                                "file": "kapitel-2.html",
                                "title": "Kapitel 2 · Verben, Imperativ und Zeiten",
                                "subtitle": "Präsens, sein/haben, Modalverben, Imperativ und Perfekt",
                                "stripe": "#3562e0",
                                "topics": [
                                                {
                                                                "slug": "praesens-regelmaessig",
                                                                "title": "Präsens regelmäßiger Verben",
                                                                "subtitle": "Konjugation im Präsens (kommen, lernen, machen)",
                                                                "page_num": 7,
                                                                "table_head": [
                                                                                "Person",
                                                                                "Endung",
                                                                                "Beispiel lernen",
                                                                                "Beispiel kommen"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "ich",
                                                                                                "-e",
                                                                                                "lerne",
                                                                                                "komme"
                                                                                ],
                                                                                [
                                                                                                "du",
                                                                                                "-st",
                                                                                                "lernst",
                                                                                                "kommst"
                                                                                ],
                                                                                [
                                                                                                "er / sie / es",
                                                                                                "-t",
                                                                                                "lernt",
                                                                                                "kommt"
                                                                                ],
                                                                                [
                                                                                                "wir",
                                                                                                "-en",
                                                                                                "lernen",
                                                                                                "kommen"
                                                                                ],
                                                                                [
                                                                                                "ihr",
                                                                                                "-t",
                                                                                                "lernt",
                                                                                                "kommt"
                                                                                ],
                                                                                [
                                                                                                "sie / Sie",
                                                                                                "-en",
                                                                                                "lernen",
                                                                                                "kommen"
                                                                                ]
                                                                ],
                                                                "attention": "Verbamm = Infinitiv ohne «-en» (lernen -> lern-). An den Stamm werden die Personalendungen angehängt.",
                                                                "mnemonic": "Endungen: -e, -st, -t, -en, -t, -en.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "du lerne",
                                                                                                "right": "du lernst"
                                                                                },
                                                                                {
                                                                                                "wrong": "wir lernt",
                                                                                                "right": "wir lernen"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Den Verbstamm vom Infinitiv trennen",
                                                                                "Die korrekten Personalendungen im Präsens anhängen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wie lautet die Form für «du» beim Verb «kommen»?",
                                                                                                "opts": [
                                                                                                                "komme",
                                                                                                                "kommst",
                                                                                                                "kommt"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Die Endung für «du» im Präsens lautet «-st»: «du kommst»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "sein-und-haben",
                                                                "title": "Verben sein und haben",
                                                                "subtitle": "Unregelmäßige Hilfsverben im Präsens",
                                                                "page_num": 8,
                                                                "table_head": [
                                                                                "Person",
                                                                                "sein",
                                                                                "haben"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "ich",
                                                                                                "bin",
                                                                                                "habe"
                                                                                ],
                                                                                [
                                                                                                "du",
                                                                                                "bist",
                                                                                                "hast"
                                                                                ],
                                                                                [
                                                                                                "er / sie / es",
                                                                                                "ist",
                                                                                                "hat"
                                                                                ],
                                                                                [
                                                                                                "wir",
                                                                                                "sind",
                                                                                                "haben"
                                                                                ],
                                                                                [
                                                                                                "ihr",
                                                                                                "seid",
                                                                                                "habt"
                                                                                ],
                                                                                [
                                                                                                "sie / Sie",
                                                                                                "sind",
                                                                                                "haben"
                                                                                ]
                                                                ],
                                                                "attention": "Bei «haben» fällt in der 2. und 3. Person Singular das «b» weg (du hast, er hat).",
                                                                "mnemonic": "Sein: bin, bist, ist, sind, seid, sind.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "du habst",
                                                                                                "right": "du hast"
                                                                                },
                                                                                {
                                                                                                "wrong": "ihr sind",
                                                                                                "right": "ihr seid"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Sein und haben auswendig konjugieren",
                                                                                "Bist / hat / seid in Sätzen korrekt einsetzen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welche Form von «sein» gehört zu «ihr»?",
                                                                                                "opts": [
                                                                                                                "sind",
                                                                                                                "seid",
                                                                                                                "bist"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Für «ihr» heißt die Form von sein «seid»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "modalverben",
                                                                "title": "Modalverben (können, müssen, wollen)",
                                                                "subtitle": "Objektive Notwendigkeit, Fähigkeit und Wunsch",
                                                                "page_num": 9,
                                                                "table_head": [
                                                                                "Person",
                                                                                "können",
                                                                                "müssen",
                                                                                "wollen"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "ich",
                                                                                                "kann",
                                                                                                "muss",
                                                                                                "will"
                                                                                ],
                                                                                [
                                                                                                "du",
                                                                                                "kannst",
                                                                                                "musst",
                                                                                                "willst"
                                                                                ],
                                                                                [
                                                                                                "er / sie / es",
                                                                                                "kann",
                                                                                                "muss",
                                                                                                "will"
                                                                                ],
                                                                                [
                                                                                                "wir",
                                                                                                "können",
                                                                                                "müssen",
                                                                                                "wollen"
                                                                                ],
                                                                                [
                                                                                                "ihr",
                                                                                                "könnt",
                                                                                                "müsst",
                                                                                                "wollt"
                                                                                ],
                                                                                [
                                                                                                "sie / Sie",
                                                                                                "können",
                                                                                                "müssen",
                                                                                                "wollen"
                                                                                ]
                                                                ],
                                                                "attention": "Im Singular haben Modalverben Vokalwechsel und keine Endung in der 1. und 3. Person (ich kann, er kann). Das Vollverb steht im Infinitiv am Satzende.",
                                                                "mnemonic": "Ich kann... deutsch sprechen (Infinitiv am Satzende!).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich kann sprechen Deutsch",
                                                                                                "right": "Ich kann Deutsch sprechen"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Die Identität von 1. und 3. Person Singular nutzen",
                                                                                "Das Hauptverb im Infinitiv an das Satzende stellen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wo steht das Vollverb in einem Satz mit einem Modalverb?",
                                                                                                "opts": [
                                                                                                                "Direkt nach dem Modalverb",
                                                                                                                "Ganz am Ende des Satzes",
                                                                                                                "An erster Stelle"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Das Vollverb steht im Infinitiv am Ende des Satzes: «Ich muss morgen arbeiten»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "imperativ",
                                                                "title": "Der Imperativ",
                                                                "subtitle": "Aufforderungen und Befehle für du, ihr und Sie",
                                                                "page_num": 10,
                                                                "table_head": [
                                                                                "Form",
                                                                                "Verb (machen)",
                                                                                "Verb (kommen)",
                                                                                "Besonderheit"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "du (informell)",
                                                                                                "mach!",
                                                                                                "komm!",
                                                                                                "Kein Pronomen «du», Endung -st fällt weg."
                                                                                ],
                                                                                [
                                                                                                "ihr (Gruppe)",
                                                                                                "macht!",
                                                                                                "kommt!",
                                                                                                "Kein Pronomen «ihr», normale 2. Plural-Form."
                                                                                ],
                                                                                [
                                                                                                "Sie (formell)",
                                                                                                "machen Sie!",
                                                                                                "kommen Sie!",
                                                                                                "Inversion: Verb + Pronomen «Sie»."
                                                                                ]
                                                                ],
                                                                "attention": "Bei der du-Form fällt das Personalpronomen «du» und die Endung «-st» weg (du kommst -> Komm!).",
                                                                "mnemonic": "Du-Form: Stamm! Ihr-Form: Stamm + t! Sie-Form: Verb + Sie!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Kommst hier!",
                                                                                                "right": "Komm hier!"
                                                                                },
                                                                                {
                                                                                                "wrong": "Machen die Aufgabe!",
                                                                                                "right": "Machen Sie die Aufgabe!"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Imperativ für du ohne Pronomen bilden",
                                                                                "Sie-Form mit nachgestelltem Sie verwenden"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wie lautet der Imperativ für «du» beim Verb «gehen»?",
                                                                                                "opts": [
                                                                                                                "Gehst!",
                                                                                                                "Geh!",
                                                                                                                "Gehen Sie!"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Für «du» verwendet man den Verbamm ohne «-st» und ohne Pronomen: «Geh!»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "perfekt",
                                                                "title": "Perfekt mit haben und sein",
                                                                "subtitle": "Vergangenheit im gesprochenen Deutsch",
                                                                "page_num": 11,
                                                                "table_head": [
                                                                                "Hilfsverb",
                                                                                "Verwendung",
                                                                                "Partizip II Form",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "haben",
                                                                                                "Transitiver Verbgebrauch & meiste Verben",
                                                                                                "ge- + Stamm + -t",
                                                                                                "Ich habe gemacht."
                                                                                ],
                                                                                [
                                                                                                "sein",
                                                                                                "Bewegung von A nach B oder Zustandswechsel",
                                                                                                "ge- + Stamm + -en / -t",
                                                                                                "Ich bin gegangen / aufgewacht."
                                                                                ]
                                                                ],
                                                                "attention": "Das Hilfsverb (haben/sein) steht an Position 2, das Partizip II steht am SATZENDE.",
                                                                "mnemonic": "Bewegung (gehen, kommen, fahren) -> sein! Alle anderen -> haben!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich habe nach Hause gegangen",
                                                                                                "right": "Ich bin nach Hause gegangen"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Hilfsverb haben oder sein korrekt wählen",
                                                                                "Das Partizip II ganz am Ende des Satzes platzieren"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welches Hilfsverb verlangt das Verb «gehen» im Perfekt?",
                                                                                                "opts": [
                                                                                                                "haben",
                                                                                                                "sein",
                                                                                                                "werden"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Fortbewegung von A nach B verlangt das Hilfsverb «sein»: «Ich bin gegangen»."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "kapitel-3",
                                "file": "kapitel-3.html",
                                "title": "Kapitel 3 · Satzbau, Fragen und Verneinung",
                                "subtitle": "Wortstellung, Fragen, nicht vs. kein, es gibt und Konjunktionen",
                                "stripe": "#c9740a",
                                "topics": [
                                                {
                                                                "slug": "wortstellung-v2",
                                                                "title": "Wortstellung im Hauptsatz (V2-Regel)",
                                                                "subtitle": "Das konjugierte Verb steht immer an Position 2",
                                                                "page_num": 12,
                                                                "table_head": [
                                                                                "Position 1 (Subjekt oder Adverb)",
                                                                                "Position 2 (Konjugiertes Verb)",
                                                                                "Mittelfeld",
                                                                                "Satzende (Infinitiv / Partizip)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Ich",
                                                                                                "kaufe",
                                                                                                "heute im Supermarkt ein.",
                                                                                                "-"
                                                                                ],
                                                                                [
                                                                                                "Heute",
                                                                                                "kaufe",
                                                                                                "ich im Supermarkt ein.",
                                                                                                "-"
                                                                                ],
                                                                                [
                                                                                                "Morgen",
                                                                                                "will",
                                                                                                "ich nach Berlin",
                                                                                                "fahren."
                                                                                ]
                                                                ],
                                                                "attention": "Steht eine Zeitangabe oder ein Adverb an Position 1, kommt das Subjekt direkt NACH dem Verb (Inversion).",
                                                                "mnemonic": "Verb IMMER an Position 2 im deutschen Hauptsatz!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Heute ich fahre nach Berlin",
                                                                                                "right": "Heute fahre ich nach Berlin"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Das konjugierte Verb an Position 2 platzieren",
                                                                                "Inversion anwenden, wenn Position 1 nicht das Subjekt ist"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welcher Satz hat die richtige Wortstellung im Deutschen?",
                                                                                                "opts": [
                                                                                                                "Morgen ich gehe ins Kino",
                                                                                                                "Morgen gehe ich ins Kino",
                                                                                                                "Morgen ins Kino gehe ich"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Nach dem Adverb an Position 1 folgt das Verb an Position 2: «Morgen gehe ich...»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "w-fragen-und-ja-nein-fragen",
                                                                "title": "Fragesätze: W-Fragen und Ja/Nein-Fragen",
                                                                "subtitle": "Wer, was, wo, wann, warum, wie und Entscheidungsfragen",
                                                                "page_num": 13,
                                                                "table_head": [
                                                                                "Fragetyp",
                                                                                "Position 1",
                                                                                "Position 2",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "W-Frage",
                                                                                                "Fragewort (Wer, Was, Wo...)",
                                                                                                "Konjugiertes Verb",
                                                                                                "Wo wohnst du?"
                                                                                ],
                                                                                [
                                                                                                "Ja/Nein-Frage",
                                                                                                "Konjugiertes Verb",
                                                                                                "Subjekt",
                                                                                                "Wohnst du in Berlin?"
                                                                                ]
                                                                ],
                                                                "attention": "Bei Ja/Nein-Fragen rückt das konjugierte Verb an die allererste Stelle (Position 1).",
                                                                "mnemonic": "W-Frage: W-Wort + Verb. Ja/Nein-Frage: Verb zuerst!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Du wohnst in Berlin?",
                                                                                                "right": "Wohnst du in Berlin?"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "W-Fragen mit Fragewort an Position 1 bilden",
                                                                                "Ja/Nein-Fragen mit Verb an Position 1 beginnen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wie bildet man eine Ja/Nein-Frage im Deutschen?",
                                                                                                "opts": [
                                                                                                                "Fragewort an Position 1",
                                                                                                                "Verb an Position 1",
                                                                                                                "Subjekt an Position 1"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Bei Ja/Nein-Fragen steht das Verb ganz vorne an Position 1."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "negation-nicht-kein",
                                                                "title": "Verneinung: nicht vs. kein",
                                                                "subtitle": "Wann benutzt man «kein» und wann «nicht»?",
                                                                "page_num": 14,
                                                                "table_head": [
                                                                                "Verneinungswort",
                                                                                "Verwendung",
                                                                                "Beispiel Affirmativ",
                                                                                "Beispiel Negativ"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "kein / keine / keinen",
                                                                                                "Nomen mit unbestimmtem Artikel oder ohne Artikel",
                                                                                                "Das ist ein Buch. / Ich habe Geld.",
                                                                                                "Das ist kein Buch. / Ich habe kein Geld."
                                                                                ],
                                                                                [
                                                                                                "nicht",
                                                                                                "Verben, Adjektive, Eigennamen, bestimmte Artikel",
                                                                                                "Ich schlafe. / Das Buch ist alt.",
                                                                                                "Ich schlafe nicht. / Das Buch ist nicht alt."
                                                                                ]
                                                                ],
                                                                "attention": "«Kein» wird wie der unbestimmte Artikel «ein» dekliniert (kein, keine, keinen, keinem).",
                                                                "mnemonic": "Kein für Nomen mit ein/ohne Artikel. Nicht für alles andere!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich habe nicht Geld",
                                                                                                "right": "Ich habe kein Geld"
                                                                                },
                                                                                {
                                                                                                "wrong": "Das ist kein alt",
                                                                                                "right": "Das ist nicht alt"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Kein für unbestimmte Nomen verwenden",
                                                                                "Nicht für Verben, Adjektive und bestimmte Nomen nutzen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wie verneint man den Satz: «Ich habe ein Auto»?",
                                                                                                "opts": [
                                                                                                                "Ich habe nicht Auto",
                                                                                                                "Ich habe kein Auto",
                                                                                                                "Ich habe nie Auto"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Nomen mit dem unbestimmten Artikel «ein» werden mit «kein» verneint."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "es-gibt",
                                                                "title": "Die Konstruktion «Es gibt»",
                                                                "subtitle": "Existenz von Dingen und Personen mit Akkusativ",
                                                                "page_num": 15,
                                                                "table_head": [
                                                                                "Konstruktion",
                                                                                "Kasus",
                                                                                "Beispiel Singular",
                                                                                "Beispiel Plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Es gibt + Nomen",
                                                                                                "Akkusativ",
                                                                                                "Es gibt einen Supermarkt in der Nähe.",
                                                                                                "Es gibt viele Bücher hier."
                                                                                ]
                                                                ],
                                                                "attention": "Das Nomen nach «es gibt» steht IMMER im Akkusativ (es gibt einen Mann, es gibt ein Buch, es gibt keine Fragen).",
                                                                "mnemonic": "Es gibt + AKKUSATIV (einen / eine / ein).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Es gibt ein Mann (maskulin Nom.)",
                                                                                                "right": "Es gibt einen Mann"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Die Wendung es gibt unverändert nutzen",
                                                                                "Den Akkusativ nach es gibt anwenden"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welche Form ist richtig für «There is a park nearby»?",
                                                                                                "opts": [
                                                                                                                "Es gibt ein Park",
                                                                                                                "Es gibt einen Park",
                                                                                                                "Es gibt einem Park"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Park» ist maskulin, nach «es gibt» steht der Akkusativ: «einen Park»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "konjunktionen-grundlegend",
                                                                "title": "Grundlegende Konjunktionen",
                                                                "subtitle": "Und, aber, oder, denn (Position 0) und weil (Nebensatz-Verb am Ende)",
                                                                "page_num": 16,
                                                                "table_head": [
                                                                                "Konjunktion",
                                                                                "Wortstellung im Folgesatz",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "und / aber / oder / denn",
                                                                                                "Position 0 (Hauptsatz-Wortstellung bleibt)",
                                                                                                "Ich lerne Deutsch, aber es ist schwer."
                                                                                ],
                                                                                [
                                                                                                "weil",
                                                                                                "Nebensatz (konjugiertes Verb steht am ENDE)",
                                                                                                "Ich lerne Deutsch, weil ich in Berlin wohne."
                                                                                ]
                                                                ],
                                                                "attention": "Bei «weil» wandert das konjugierte Verb ganz ans Ende des Satzes.",
                                                                "mnemonic": "Und, aber, oder, denn = Position 0. Weil = Verb am Ende!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich bleibe zu Hause, weil ich bin krank",
                                                                                                "right": "Ich bleibe zu Hause, weil ich krank bin"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Und/aber/oder/denn auf Position 0 setzen",
                                                                                "Das Verb bei weil ans Satzende stellen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wo steht das Verb im Nebensatz mit «weil»?",
                                                                                                "opts": [
                                                                                                                "An Position 2",
                                                                                                                "An Position 1",
                                                                                                                "Ganz am Ende des Satzes"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "Die Subjunktion «weil» schickt das konjugierte Verb an das Satzende."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "kapitel-4",
                                "file": "kapitel-4.html",
                                "title": "Kapitel 4 · Präpositionen, Zahlen und Zeit",
                                "subtitle": "Lokale/temporale Präpositionen, Zahlen, Uhrzeit und Datum",
                                "stripe": "#7c4fd6",
                                "topics": [
                                                {
                                                                "slug": "praepositionen-ort",
                                                                "title": "Lokale Präpositionen",
                                                                "subtitle": "In, an, auf, aus, nach, zu (Ort und Richtung)",
                                                                "page_num": 17,
                                                                "table_head": [
                                                                                "Präposition",
                                                                                "Bedeutung / Verwendung",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "in (+ Dativ/Akk.)",
                                                                                                "In einem Raum / Land mit Artikel",
                                                                                                "Ich bin im (in dem) Kino / Ich gehe ins Kino."
                                                                                ],
                                                                                [
                                                                                                "an (+ Dativ/Akk.)",
                                                                                                "An Wasser, Wänden, Tischen",
                                                                                                "Ich sitze am Tisch / am Meer."
                                                                                ],
                                                                                [
                                                                                                "auf (+ Dativ/Akk.)",
                                                                                                "Auf einer Oberfläche / Plätzen",
                                                                                                "Das Buch liegt auf dem Tisch."
                                                                                ],
                                                                                [
                                                                                                "aus (+ Dativ)",
                                                                                                "Herkunft aus Gebäuden/Ländern",
                                                                                                "Ich komme aus Deutschland."
                                                                                ],
                                                                                [
                                                                                                "nach (+ Dativ)",
                                                                                                "Richtung zu Städten/Ländern ohne Artikel",
                                                                                                "Ich fliege nach Berlin / nach Spanien."
                                                                                ],
                                                                                [
                                                                                                "zu (+ Dativ)",
                                                                                                "Richtung zu Personen/Geschäften",
                                                                                                "Ich gehe zum Arzt / zu Maria."
                                                                                ]
                                                                ],
                                                                "attention": "Merke den Unterschied: nach Berlin (Stadt/Land), aber zum Arzt (Person).",
                                                                "mnemonic": "Aus/Nach/Zu verlangen immer Dativ!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ich fliege zu Berlin",
                                                                                                "right": "Ich fliege nach Berlin"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Nach für Länder und Städte ohne Artikel verwenden",
                                                                                "Zu für Personen und gezielte Orte nutzen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welche Präposition nutzt man für Richtungen zu Städten («to Berlin»)?",
                                                                                                "opts": [
                                                                                                                "zu",
                                                                                                                "nach",
                                                                                                                "in"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Für Städte und Länder ohne Artikel verwendet man «nach»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "praepositionen-zeit",
                                                                "title": "Temporale Präpositionen",
                                                                "subtitle": "Um, am, im, von... bis, seit (Zeitpunkte und Zeitspannen)",
                                                                "page_num": 18,
                                                                "table_head": [
                                                                                "Präposition",
                                                                                "Verwendung",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "um (+ Akkusativ)",
                                                                                                "Uhrzeiten",
                                                                                                "Der Kurs beginnt um 9 Uhr."
                                                                                ],
                                                                                [
                                                                                                "am (+ Dativ)",
                                                                                                "Wochentage, Tageszeiten, Datum",
                                                                                                "Am Montag / am Morgen / am 5. Mai."
                                                                                ],
                                                                                [
                                                                                                "im (+ Dativ)",
                                                                                                "Monate, Jahreszeiten, Jahre (im Jahr)",
                                                                                                "Im Sommer / im Juli / im Jahr 2026."
                                                                                ],
                                                                                [
                                                                                                "von... bis (+ Dat.)",
                                                                                                "Start und Ende einer Zeitspanne",
                                                                                                "Von 8 bis 17 Uhr."
                                                                                ],
                                                                                [
                                                                                                "seit (+ Dativ)",
                                                                                                "Gegenwärtiges Geschehen seit Vergangenheit",
                                                                                                "Ich wohne seit zwei Jahren in Berlin."
                                                                                ]
                                                                ],
                                                                "attention": "«Seit» verlangt IMMER den Dativ und drückt aus, dass die Handlung JETZT noch andauert.",
                                                                "mnemonic": "UM 9 Uhr. AM Montag. IM Sommer.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "In Montag habe ich frei",
                                                                                                "right": "Am Montag habe ich frei"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Um für Uhrzeiten und am für Tage nutzen",
                                                                                "Seit für Handlungen verwenden, die noch andauern"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welche Präposition gehört zu Wochentagen («on Monday»)?",
                                                                                                "opts": [
                                                                                                                "um",
                                                                                                                "im",
                                                                                                                "am"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "Für Wochentage benutzt man «am» (an dem): «am Montag»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "zahlen-uhrzeit-datum",
                                                                "title": "Zahlen, Uhrzeit und Datum",
                                                                "subtitle": "Kardinal- und Ordinalzahlen, Uhrzeit sagen und Datum angeben",
                                                                "page_num": 19,
                                                                "table_head": [
                                                                                "Kategorie",
                                                                                "Format / Muster",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Kardinalzahlen (1-100)",
                                                                                                "eins, zwei... einundzwanzig, dreißig",
                                                                                                "Ich habe zwei Brüder."
                                                                                ],
                                                                                [
                                                                                                "Ordinalzahlen (1.-19.)",
                                                                                                "Stamm + -te (am ersten, am zweiten...)",
                                                                                                "Heute ist der erste Mai."
                                                                                ],
                                                                                [
                                                                                                "Uhrzeit (offiziell)",
                                                                                                "Stunde + Uhr + Minute",
                                                                                                "Es ist 14 Uhr 30."
                                                                                ],
                                                                                [
                                                                                                "Uhrzeit (informell)",
                                                                                                "halb, viertel vor / nach",
                                                                                                "Es ist halb drei (2:30)."
                                                                                ],
                                                                                [
                                                                                                "Datum",
                                                                                                "am + Ordinalzahl + Monat",
                                                                                                "Ich habe am 15. August Geburtstag."
                                                                                ]
                                                                ],
                                                                "attention": "Informell bedeutet «halb drei» = 2:30 Uhr (die Hälfte der dritten Stunde ist vorbei).",
                                                                "mnemonic": "Halb drei = 2:30. Halb vier = 3:30.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Halb drei ist 3:30 Uhr",
                                                                                                "right": "Halb drei ist 2:30 Uhr"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formel für Uhrzeiten verstehen (offiziell vs. informell)",
                                                                                "Ordinalzahlen für Daten verwenden"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wie viel Uhr ist es bei der Aussage «Es ist halb vier»?",
                                                                                                "opts": [
                                                                                                                "4:30 Uhr",
                                                                                                                "3:30 Uhr",
                                                                                                                "3:15 Uhr"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Halb vier» bezeichnet 3:30 Uhr."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "kapitel-5",
                                "file": "kapitel-5.html",
                                "title": "Kapitel 5 · Adverbien und Vergleiche",
                                "subtitle": "Adverbien der Häufigkeit, Art und Weise, Komparativ und Superlativ",
                                "stripe": "#d99b00",
                                "topics": [
                                                {
                                                                "slug": "adverbien-frequenz-art",
                                                                "title": "Adverbien der Häufigkeit und Art und Weise",
                                                                "subtitle": "Immer, oft, manchmal, selten, nie, gut, schnell",
                                                                "page_num": 20,
                                                                "table_head": [
                                                                                "Kategorie",
                                                                                "Beispiele",
                                                                                "Verwendung",
                                                                                "Beispiel Satz"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Häufigkeit",
                                                                                                "immer, meistens, oft, manchmal, selten, nie",
                                                                                                "Position meist nach dem Verb",
                                                                                                "Er kommt oft zu spät."
                                                                                ],
                                                                                [
                                                                                                "Art und Weise",
                                                                                                "schnell, langsam, gut, schlecht, gerne",
                                                                                                "Beschreibt die Ausführung des Verbs",
                                                                                                "Sie spricht gut Deutsch."
                                                                                ]
                                                                ],
                                                                "attention": "Im Deutschen haben Adverbien der Art und Weise dieselbe Form wie das undeklinierte Adjektiv (gut, schnell, schön).",
                                                                "mnemonic": "Immer -> Oft -> Manchmal -> Selten -> Nie.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Er spricht gutem Deutsch",
                                                                                                "right": "Er spricht gut Deutsch"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Häufigkeitsadverbien logisch einordnen",
                                                                                "Adverbien ohne Deklinationsendung nach dem Verb einsetzen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Welches Adverb drückt eine Häufigkeit von 0% aus?",
                                                                                                "opts": [
                                                                                                                "selten",
                                                                                                                "manchmal",
                                                                                                                "nie"
                                                                                                ],
                                                                                                "correct": 2,
                                                                                                "explain": "«Nie» bedeutet niemals (0% Häufigkeit)."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "komparativ-und-superlativ",
                                                                "title": "Komparativ und Superlativ",
                                                                "subtitle": "Vergleich mit -er als und am -sten (schneller als / am schnellsten)",
                                                                "page_num": 21,
                                                                "table_head": [
                                                                                "Stufe",
                                                                                "Bildung",
                                                                                "Beispiel"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Positiv",
                                                                                                "Grundform",
                                                                                                "schnell / alt"
                                                                                ],
                                                                                [
                                                                                                "Komparativ",
                                                                                                "Adjektiv + -er + als",
                                                                                                "schneller als / älter als"
                                                                                ],
                                                                                [
                                                                                                "Superlativ",
                                                                                                "am + Adjektiv + -sten",
                                                                                                "am schnellsten / am ältesten"
                                                                                ]
                                                                ],
                                                                "attention": "Einsilbige Adjektive bekommen im Komparativ und Superlativ oft einen Umlaut (alt -> älter -> am ältesten; groß -> größer -> am größten).",
                                                                "mnemonic": "Komparativ: -er als. Superlativ: am ...-sten.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Er ist mehr schnell als ich",
                                                                                                "right": "Er ist schneller als ich"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Komparativ mit -er als bilden",
                                                                                "Superlativ mit am ...-sten formen"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Wie lautet der Komparativ von «groß»?",
                                                                                                "opts": [
                                                                                                                "großer als",
                                                                                                                "größer als",
                                                                                                                "am größten"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Groß» bildet den Komparativ mit Umlaut: «größer als»."
                                                                                }
                                                                ]
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
                                "id": "capitulo-1",
                                "file": "capitulo-1.html",
                                "title": "Capítulo 1 · Substantivos, artigos e determinantes",
                                "subtitle": "Gênero, plural, artigos, possessivos e demonstrativos",
                                "stripe": "#7c4fd6",
                                "topics": [
                                                {
                                                                "slug": "genero-dos-substantivos",
                                                                "title": "Gênero dos substantivos",
                                                                "subtitle": "Substantivos masculinos e femininos em português",
                                                                "page_num": 1,
                                                                "table_head": [
                                                                                "Gênero",
                                                                                "Terminação habitual",
                                                                                "Exemplo singular",
                                                                                "Terminação plural",
                                                                                "Exemplo plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Masculino",
                                                                                                "-o",
                                                                                                "o rapaz",
                                                                                                "-os",
                                                                                                "os rapazes"
                                                                                ],
                                                                                [
                                                                                                "Feminino",
                                                                                                "-a",
                                                                                                "a rapariga / a menina",
                                                                                                "-as",
                                                                                                "as raparigas / as meninas"
                                                                                ],
                                                                                [
                                                                                                "Masculino / Feminino",
                                                                                                "-e / consoante",
                                                                                                "o estudante / a cidade",
                                                                                                "-es",
                                                                                                "os estudantes / as cidades"
                                                                                ]
                                                                ],
                                                                "attention": "Em português todos os substantivos têm um gênero. Nomes terminados em -agem são femininos (a viagem), em -ção são femininos (a ação).",
                                                                "mnemonic": "Palavras em -o são masculinas; palavras em -a, -agem e -ção são femininas.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "o viagem",
                                                                                                "right": "a viagem"
                                                                                },
                                                                                {
                                                                                                "wrong": "a problema",
                                                                                                "right": "o problema"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Reconhecer o gênero dos substantivos pelas terminções",
                                                                                "Identificar palavras em -agem e -ção como femininas"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é o gênero da palavra «viagem»?",
                                                                                                "opts": [
                                                                                                                "Masculino (o viagem)",
                                                                                                                "Feminino (a viagem)",
                                                                                                                "Neutro"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Substantivos terminados em -agem são femininos: «a viagem»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "artigos-definidos",
                                                                "title": "Artigos definidos e indefinidos",
                                                                "subtitle": "O, a, os, as / um, uma, uns, umas",
                                                                "page_num": 2,
                                                                "table_head": [
                                                                                "Tipo",
                                                                                "Masc. Singular",
                                                                                "Fem. Singular",
                                                                                "Masc. Plural",
                                                                                "Fem. Plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Definido",
                                                                                                "o",
                                                                                                "a",
                                                                                                "os",
                                                                                                "as"
                                                                                ],
                                                                                [
                                                                                                "Indefinido",
                                                                                                "um",
                                                                                                "uma",
                                                                                                "uns",
                                                                                                "umas"
                                                                                ]
                                                                ],
                                                                "attention": "Os artigos definidos combinam-se obrigatoriamente com preposições como em (em+o=no), de (de+o=do) e a (a+o=ao).",
                                                                "mnemonic": "O / A para elementos específicos. Um / Uma para elementos não especificados.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "em o livro",
                                                                                                "right": "no livro"
                                                                                },
                                                                                {
                                                                                                "wrong": "de a casa",
                                                                                                "right": "da casa"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Escolher o artigo definido adequado ao gênero e número",
                                                                                "Reconhecer a necessidade de contração com preposições"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é a combinação da preposição «de» com o artigo «o»?",
                                                                                                "opts": [
                                                                                                                "de o",
                                                                                                                "do",
                                                                                                                "no"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A preposição «de» une-se ao artigo «o» formando «do»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "plural-dos-substantivos",
                                                                "title": "Formação do plural",
                                                                "subtitle": "Regras de adição de -s, -es e plural dos nomes em -ão",
                                                                "page_num": 3,
                                                                "table_head": [
                                                                                "Terminação singular",
                                                                                "Regra de plural",
                                                                                "Exemplo singular",
                                                                                "Exemplo plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Vocal (-o, -a, -e)",
                                                                                                "adicionar -s",
                                                                                                "o livro / a casa",
                                                                                                "os livros / as casas"
                                                                                ],
                                                                                [
                                                                                                "Consoante (-r, -z)",
                                                                                                "adicionar -es",
                                                                                                "o mar / a luz",
                                                                                                "os mares / as luzes"
                                                                                ],
                                                                                [
                                                                                                "Terminação -m",
                                                                                                "mudar m para ns",
                                                                                                "o homem / o som",
                                                                                                "os homens / os sons"
                                                                                ],
                                                                                [
                                                                                                "Terminação -ão",
                                                                                                "-ões / -ães / -ãos",
                                                                                                "o pão / a canção",
                                                                                                "os pães / as canções"
                                                                                ]
                                                                ],
                                                                "attention": "A terminação -m muda para -ns no plural (um homem -> dois homens).",
                                                                "mnemonic": "Vogal + S, -M -> -NS, Consoante + ES.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "os homemes",
                                                                                                "right": "os homens"
                                                                                },
                                                                                {
                                                                                                "wrong": "as luzs",
                                                                                                "right": "as luzes"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar o plural de palavras terminadas em vogal e consoante",
                                                                                "Mudar -m final para -ns no plural"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é o plural correto de «o homem»?",
                                                                                                "opts": [
                                                                                                                "os homemes",
                                                                                                                "os homens",
                                                                                                                "os homems"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Os substantivos terminados em -m formam o plural em -ns: «os homens»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "possessivos",
                                                                "title": "Determinantes e pronomes possessivos",
                                                                "subtitle": "Meu, teu, seu, nosso, vosso e concordância",
                                                                "page_num": 4,
                                                                "table_head": [
                                                                                "Possuidor",
                                                                                "Masc. Singular",
                                                                                "Fem. Singular",
                                                                                "Masc. Plural",
                                                                                "Fem. Plural"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "eu",
                                                                                                "o meu",
                                                                                                "a minha",
                                                                                                "os meus",
                                                                                                "as minhas"
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "o teu",
                                                                                                "a tua",
                                                                                                "os teus",
                                                                                                "as tuas"
                                                                                ],
                                                                                [
                                                                                                "ele / ela / você",
                                                                                                "o seu",
                                                                                                "a sua",
                                                                                                "os seus",
                                                                                                "as suas"
                                                                                ],
                                                                                [
                                                                                                "nós",
                                                                                                "o nosso",
                                                                                                "a nossa",
                                                                                                "os nossos",
                                                                                                "as nossas"
                                                                                ],
                                                                                [
                                                                                                "vós",
                                                                                                "o vosso",
                                                                                                "a vossa",
                                                                                                "os vossos",
                                                                                                "as vossas"
                                                                                ],
                                                                                [
                                                                                                "eles / elas / vocês",
                                                                                                "o seu / deles",
                                                                                                "a sua / delas",
                                                                                                "os seus / deles",
                                                                                                "as suas / delas"
                                                                                ]
                                                                ],
                                                                "attention": "Em português europeu usa-se habitualmente o artigo definido antes do possessivo (o meu livro). Em português do Brasil o artigo é opcional.",
                                                                "mnemonic": "Artigo + Possessivo + Nome: o meu livro, a minha casa.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "meu livro é novo (em PT-PT)",
                                                                                                "right": "o meu livro é novo"
                                                                                },
                                                                                {
                                                                                                "wrong": "o nosso casa",
                                                                                                "right": "a nossa casa"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Concordar o possessivo com o objeto possuído em gênero e número",
                                                                                "Usar o artigo definido antes do possessivo"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é a forma correta para «our house» em português?",
                                                                                                "opts": [
                                                                                                                "o nosso casa",
                                                                                                                "a nossa casa",
                                                                                                                "as nossas casa"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "«Casa» é um nome feminino singular, por isso usa-se «a nossa casa»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "demonstrativos",
                                                                "title": "Demonstrativos",
                                                                "subtitle": "Este, esse, aquele (proximidade e distância)",
                                                                "page_num": 5,
                                                                "table_head": [
                                                                                "Distância",
                                                                                "Masculino Sing.",
                                                                                "Feminino Sing.",
                                                                                "Masculino Plur.",
                                                                                "Femenino Plur.",
                                                                                "Invariável"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Perto de quem fala (aqui)",
                                                                                                "este",
                                                                                                "esta",
                                                                                                "estes",
                                                                                                "estas",
                                                                                                "isto"
                                                                                ],
                                                                                [
                                                                                                "Perto de quem ouve (aí)",
                                                                                                "esse",
                                                                                                "essa",
                                                                                                "esses",
                                                                                                "essas",
                                                                                                "isso"
                                                                                ],
                                                                                [
                                                                                                "Longe de ambos (ali/lá)",
                                                                                                "aquele",
                                                                                                "aquela",
                                                                                                "aqueles",
                                                                                                "aquelas",
                                                                                                "aquilo"
                                                                                ]
                                                                ],
                                                                "attention": "Os demonstrativos invariáveis (isto, isso, aquilo) usam-se para coisas não identificadas ou conceitos abstratos e nunca acompanham nomes.",
                                                                "mnemonic": "Este (aqui), Esse (aí), Aquele (ali/lá).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "este livro aqui e estes livros aí",
                                                                                                "right": "este livro aqui e esses livros aí"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar este para perto do falante e esse para perto do ouvinte",
                                                                                "Usar os invariáveis isto/isso/aquilo sem nome"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual demonstrativo se usa para um objeto que está perto de quem fala?",
                                                                                                "opts": [
                                                                                                                "este",
                                                                                                                "esse",
                                                                                                                "aquele"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "«Este» indica proximidade em relação ao falante (aqui)."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-2",
                                "file": "capitulo-2.html",
                                "title": "Capítulo 2 · Verbos e tempos verbales",
                                "subtitle": "Ser, estar, presente, reflexivos, imperativo e pretérito",
                                "stripe": "#1c8f56",
                                "topics": [
                                                {
                                                                "slug": "ser-vs-estar",
                                                                "title": "Ser vs Estar",
                                                                "subtitle": "Diferença entre características permanentes e estados temporários",
                                                                "page_num": 6,
                                                                "table_head": [
                                                                                "Verbo",
                                                                                "Usos principais",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Ser",
                                                                                                "Identidade, nacionalidade, profissão, características permanentes",
                                                                                                "Sou professor / Sou de Portugal / O livro é interessante."
                                                                                ],
                                                                                [
                                                                                                "Estar",
                                                                                                "Localização espacial, estados temporários, sentimentos",
                                                                                                "Estou em casa / Estou cansado / O café está quente."
                                                                                ]
                                                                ],
                                                                "attention": "Para a localização de pessoas ou coisas usa-se sempre o verbo «estar» (Onde estás?).",
                                                                "mnemonic": "Ser = essência constante. Estar = estado ou lugar temporário.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Sou em Lisboa",
                                                                                                "right": "Estou em Lisboa"
                                                                                },
                                                                                {
                                                                                                "wrong": "Estou médico",
                                                                                                "right": "Sou médico"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar ser para nacionalidade e profissão",
                                                                                "Usar estar para localização e estados temporários"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual verbo se usa para a localização atual («I am at home»)?",
                                                                                                "opts": [
                                                                                                                "Sou em casa",
                                                                                                                "Estou em casa",
                                                                                                                "Fico em casa"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A localização exige o verbo estar: «Estou em casa»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "presente-do-indicativo",
                                                                "title": "Presente do indicativo",
                                                                "subtitle": "Conjugação regular dos verbos em -ar, -er, -ir",
                                                                "page_num": 7,
                                                                "table_head": [
                                                                                "Pessoa",
                                                                                "-AR (falar)",
                                                                                "-ER (comer)",
                                                                                "-IR (abrir)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "eu",
                                                                                                "falo",
                                                                                                "como",
                                                                                                "abro"
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "falas",
                                                                                                "comes",
                                                                                                "abres"
                                                                                ],
                                                                                [
                                                                                                "ele / ela / você",
                                                                                                "fala",
                                                                                                "come",
                                                                                                "abre"
                                                                                ],
                                                                                [
                                                                                                "nós",
                                                                                                "falamos",
                                                                                                "comemos",
                                                                                                "abrimos"
                                                                                ],
                                                                                [
                                                                                                "vocês / eles / elas",
                                                                                                "falam",
                                                                                                "comem",
                                                                                                "abrem"
                                                                                ]
                                                                ],
                                                                "attention": "A 1ª pessoa do singular (eu) termina sempre em -o nas três conjugações regulares.",
                                                                "mnemonic": "Eu -o; Tu -as/-es; Ele -a/-e; Nós -amos/-emos/-imos.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Eu falas português",
                                                                                                "right": "Eu falo português"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Conjugar verbos regulares no presente do indicativo",
                                                                                "Reconhecer as terminações da 1ª e 3ª pessoas"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é a forma correta da 1ª pessoa do singular (eu) para o verbo «abrir»?",
                                                                                                "opts": [
                                                                                                                "abro",
                                                                                                                "abres",
                                                                                                                "abre"
                                                                                                ],
                                                                                                "correct": 0,
                                                                                                "explain": "A terminação de «eu» no presente é «-o»: «abro»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "verbos-reflexivos",
                                                                "title": "Verbos reflexivos",
                                                                "subtitle": "Chamar-se, lavar-se, deitar-se e pronomes reflexivos",
                                                                "page_num": 8,
                                                                "table_head": [
                                                                                "Sujeito",
                                                                                "Pronome reflexivo",
                                                                                "Verbo (chamar-se)",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "eu",
                                                                                                "me",
                                                                                                "chamo",
                                                                                                "Eu chamo-me Pedro."
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "te",
                                                                                                "chamas",
                                                                                                "Como te chamas?"
                                                                                ],
                                                                                [
                                                                                                "ele / ela / você",
                                                                                                "se",
                                                                                                "chama",
                                                                                                "Ela chama-se Maria."
                                                                                ],
                                                                                [
                                                                                                "nós",
                                                                                                "nos",
                                                                                                "chamamos",
                                                                                                "Nós chamamo-nos Silva."
                                                                                ],
                                                                                [
                                                                                                "vocês / eles",
                                                                                                "se",
                                                                                                "chamam",
                                                                                                "Eles chamam-se Carlos e Ana."
                                                                                ]
                                                                ],
                                                                "attention": "Em português europeu o pronome hifeniza-se após o verbo (chamo-me), exceto após palavras atratoras como «não» ou «que» (não me chamo).",
                                                                "mnemonic": "Me, te, se, nos, se.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Eu me chamo Pedro (em PT-PT padrão)",
                                                                                                "right": "Eu chamo-me Pedro"
                                                                                },
                                                                                {
                                                                                                "wrong": "Não chamo-me",
                                                                                                "right": "Não me chamo"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar a ênclise (verbo-pronome) em frases afirmativas simples em PT-PT",
                                                                                "Atrair o pronome para antes do verbo em frases negativas"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Como se escreve a frase negativa correta para «I don't call myself» em PT-PT?",
                                                                                                "opts": [
                                                                                                                "Não chamo-me",
                                                                                                                "Não me chamo",
                                                                                                                "Não se chamo"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A palavra negativa «não» atrai o pronome para antes do verbo: «Não me chamo»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "imperativo",
                                                                "title": "Imperativo afirmativo básico",
                                                                "subtitle": "Dar ordens, conselhos e instruções (tu, você, vocês)",
                                                                "page_num": 9,
                                                                "table_head": [
                                                                                "Verbo",
                                                                                "Tu (informal)",
                                                                                "Você (formal)",
                                                                                "Nós",
                                                                                "Vocês"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "falar (-AR)",
                                                                                                "fala!",
                                                                                                "fale!",
                                                                                                "falemos!",
                                                                                                "falem!"
                                                                                ],
                                                                                [
                                                                                                "comer (-ER)",
                                                                                                "come!",
                                                                                                "coma!",
                                                                                                "comamos!",
                                                                                                "comam!"
                                                                                ],
                                                                                [
                                                                                                "abrir (-IR)",
                                                                                                "abre!",
                                                                                                "abra!",
                                                                                                "abramos!",
                                                                                                "abram!"
                                                                                ]
                                                                ],
                                                                "attention": "A forma de «tu» no imperativo afirmativo deriva do presente do indicativo sem a letra «-s» final (tu falas -> fala!).",
                                                                "mnemonic": "Tu: fala! Você: fale! Vocês: falem!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Falas mais alto!",
                                                                                                "right": "Fala mais alto!"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar o imperativo para tu retirando o -s final do presente",
                                                                                "Usar fale/coma/abra para a forma formal você"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é o imperativo afirmativo de «tu» para o verbo «falar»?",
                                                                                                "opts": [
                                                                                                                "falas!",
                                                                                                                "fala!",
                                                                                                                "fale!"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Para «tu» retira-se o «-s» da 2ª pessoa do presente: «fala!»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "preterito-perfeito",
                                                                "title": "Pretérito perfeito simples",
                                                                "subtitle": "Ações completamente concluídas no passado",
                                                                "page_num": 10,
                                                                "table_head": [
                                                                                "Pessoa",
                                                                                "-AR (falar)",
                                                                                "-ER (comer)",
                                                                                "-IR (abrir)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "eu",
                                                                                                "falei",
                                                                                                "comi",
                                                                                                "abri"
                                                                                ],
                                                                                [
                                                                                                "tu",
                                                                                                "falaste",
                                                                                                "comeste",
                                                                                                "abriste"
                                                                                ],
                                                                                [
                                                                                                "ele / ela / você",
                                                                                                "falou",
                                                                                                "comeu",
                                                                                                "abriu"
                                                                                ],
                                                                                [
                                                                                                "nós",
                                                                                                "falamos",
                                                                                                "comemos",
                                                                                                "abrimos"
                                                                                ],
                                                                                [
                                                                                                "vocês / eles / elas",
                                                                                                "falaram",
                                                                                                "comeram",
                                                                                                "abriram"
                                                                                ]
                                                                ],
                                                                "attention": "A 3ª pessoa do plural termina em «-ram» no passado (falaram), diferente do futuro «-rão».",
                                                                "mnemonic": "Eu falei, tu falaste, ele falou. Passado totalmente concluído!",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ontem eu falo com ele",
                                                                                                "right": "Ontem eu falei com ele"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Conjugar verbos regulares no pretérito perfeito simples",
                                                                                "Distinguir a terminação de 3ª pessoa do plural (-ram)"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é a forma de 1ª pessoa do singular (eu) no passado para «falar»?",
                                                                                                "opts": [
                                                                                                                "falo",
                                                                                                                "falei",
                                                                                                                "falou"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A terminação de 1ª pessoa do passado para verbos em -ar é «-ei»: «falei»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "preterito-perfeito-vs-imperfeito",
                                                                "title": "Pretérito perfeito vs Pretérito imperfeito",
                                                                "subtitle": "Ações concluídas no passado vs hábitos e descrições",
                                                                "page_num": 11,
                                                                "table_head": [
                                                                                "Tempo",
                                                                                "Uso principal",
                                                                                "Marcadores habituais",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Pretérito perfeito simples",
                                                                                                "Ação pontual e concluída",
                                                                                                "ontem, na semana passada, em 2020",
                                                                                                "Ontem comprei um livro."
                                                                                ],
                                                                                [
                                                                                                "Pretérito imperfeito",
                                                                                                "Ação habitual, contínua ou descrição",
                                                                                                "antigamente, todos os dias, enquanto",
                                                                                                "Antigamente eu lia muito."
                                                                                ]
                                                                ],
                                                                "attention": "Quando duas ações ocorrem no passado e uma interrompe a outra: Imperfeito (enquanto eu lia...) + Perfeito simples (o telefone tocou).",
                                                                "mnemonic": "Perfeito = ponto concluído. Imperfeito = hábito ou cenário.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ontem eu lia um livro inteiro em 5 minutos",
                                                                                                "right": "Ontem li um livro inteiro em 5 minutos"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar o perfeito simples para fatos concluídos no passado",
                                                                                "Usar o imperfeito para estados, descrições e hábitos passados"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Que tempo verbal se usa para expressar um hábito no passado («Todos os dias...»)?",
                                                                                                "opts": [
                                                                                                                "Pretérito perfeito",
                                                                                                                "Pretérito imperfeito",
                                                                                                                "Presente"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Hábitos ou rotinas no passado expressam-se no pretérito imperfeito («eu jogava»)."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-3",
                                "file": "capitulo-3.html",
                                "title": "Capítulo 3 · Pronomes e estrutura da frase",
                                "subtitle": "Pronomes pessoais, haver vs ter, negação, perguntas e conjunções",
                                "stripe": "#3562e0",
                                "topics": [
                                                {
                                                                "slug": "pronomes-pessoais",
                                                                "title": "Pronomes pessoais",
                                                                "subtitle": "Pronomes de sujeito e pronomes oblíquos átonos (objeto direto e indireto)",
                                                                "page_num": 12,
                                                                "table_head": [
                                                                                "Pessoa",
                                                                                "Sujeito",
                                                                                "Objeto Direto (o/a/os/as)",
                                                                                "Objeto Indireto (lhe/lhes)"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "1ª sing.",
                                                                                                "eu",
                                                                                                "me",
                                                                                                "me"
                                                                                ],
                                                                                [
                                                                                                "2ª sing.",
                                                                                                "tu",
                                                                                                "te",
                                                                                                "te"
                                                                                ],
                                                                                [
                                                                                                "3ª sing. m.",
                                                                                                "ele",
                                                                                                "o",
                                                                                                "lhe"
                                                                                ],
                                                                                [
                                                                                                "3ª sing. f.",
                                                                                                "ela",
                                                                                                "a",
                                                                                                "lhe"
                                                                                ],
                                                                                [
                                                                                                "1ª plur.",
                                                                                                "nós",
                                                                                                "nos",
                                                                                                "nos"
                                                                                ],
                                                                                [
                                                                                                "3ª plur. m.",
                                                                                                "eles",
                                                                                                "os",
                                                                                                "lhes"
                                                                                ],
                                                                                [
                                                                                                "3ª plur. f.",
                                                                                                "elas",
                                                                                                "as",
                                                                                                "lhes"
                                                                                ]
                                                                ],
                                                                "attention": "Os pronomes diretos «o, a, os, as» mudam para «lo, la, los, las» após formas verbais terminadas em -s, -z ou -r (encontrar + o -> encontrá-lo).",
                                                                "mnemonic": "Verbo em -r/-s/-z + o/a -> lo/la. Verbo em som nasal (-m, -ão) + o/a -> no/na.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Eu vi ele ontem",
                                                                                                "right": "Eu vi-o ontem"
                                                                                },
                                                                                {
                                                                                                "wrong": "Vou fazer o trabalho -> vou fazer-o",
                                                                                                "right": "Vou fazê-lo"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Diferenciar pronomes de sujeito e de objeto",
                                                                                "Aplicar as variantes lo/la/los/las após consoantes verbais"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Como fica a combinação do verbo «fazer» com o pronome «o» (fazer + o)?",
                                                                                                "opts": [
                                                                                                                "fazer-o",
                                                                                                                "fazê-lo",
                                                                                                                "fazê-no"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Após verbos terminados em -r, cai o -r e o pronome passa a «lo»: «fazê-lo»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "ha-vs-tem",
                                                                "title": "Haver vs Ter",
                                                                "subtitle": "Existência de coisas e pessoas (Há / Tem)",
                                                                "page_num": 13,
                                                                "table_head": [
                                                                                "Verbo",
                                                                                "Uso em português europeu (PT-PT)",
                                                                                "Uso em português do Brasil (PT-BR)",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Haver (Há)",
                                                                                                "Norma culta e padrão para existência",
                                                                                                "Usado na linguagem formal",
                                                                                                "Há muitos alunos na sala."
                                                                                ],
                                                                                [
                                                                                                "Ter (Tem)",
                                                                                                "Usado exclusivamente para posse",
                                                                                                "Usado informalmente para existência",
                                                                                                "PT-PT: Ele tem um carro. / PT-BR: Tem muita gente aqui."
                                                                                ]
                                                                ],
                                                                "attention": "Na norma padrão (e em PT-PT), usa-se o verbo «haver» na 3ª pessoa do singular (há) para indicar existência.",
                                                                "mnemonic": "Há = existe (impessoal singular). Ter = possuir.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Têm muitos livros na mesa (em norma padrão PT-PT)",
                                                                                                "right": "Há muitos livros na mesa"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar Há para indicar existência na norma culta",
                                                                                "Reservar Ter para a posse de algo"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é a forma padrão para expressar «There are many students here»?",
                                                                                                "opts": [
                                                                                                                "Tem muitos estudantes aqui",
                                                                                                                "Há muitos estudantes aqui",
                                                                                                                "Estão muitos estudantes aqui"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Na norma culta usa-se o verbo «haver» no singular: «Há muitos estudantes aqui»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "negacao",
                                                                "title": "A negação",
                                                                "subtitle": "Não, nada, ninguém, nunca, nem",
                                                                "page_num": 14,
                                                                "table_head": [
                                                                                "Elemento",
                                                                                "Estrutura",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "não",
                                                                                                "não + verbo",
                                                                                                "Eu não falo alemão."
                                                                                ],
                                                                                [
                                                                                                "nunca / jamais",
                                                                                                "nunca + verbo / não + verbo + nunca",
                                                                                                "Nunca como carne. / Não como carne nunca."
                                                                                ],
                                                                                [
                                                                                                "nada",
                                                                                                "não + verbo + nada",
                                                                                                "Não entendo nada."
                                                                                ],
                                                                                [
                                                                                                "ninguém",
                                                                                                "não + verbo + ninguém",
                                                                                                "Não está ninguém em casa."
                                                                                ],
                                                                                [
                                                                                                "nem... nem",
                                                                                                "nem + elemento + nem + elemento",
                                                                                                "Não quero nem chá nem café."
                                                                                ]
                                                                ],
                                                                "attention": "A dupla negação é gramaticalmente correta e comum em português quando a palavra negativa fica depois do verbo (não vi ninguém).",
                                                                "mnemonic": "Não + Verbo + Nada / Ninguém / Nunca.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Vi ninguém",
                                                                                                "right": "Não vi ninguém"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Construir a negação simples com não + verbo",
                                                                                "Aplicar a negação dupla com palavras como nada, ninguém, nunca"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Como se diz «I understand nothing» em português?",
                                                                                                "opts": [
                                                                                                                "Entendo nada",
                                                                                                                "Não entendo nada",
                                                                                                                "Nunca entendo nada"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Em português exige-se a estrutura «não + verbo + nada»: «Não entendo nada»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "interrogativos",
                                                                "title": "Perguntas e pronomes interrogativos",
                                                                "subtitle": "Que, quem, qual, onde, quando, quanto, porquê",
                                                                "page_num": 15,
                                                                "table_head": [
                                                                                "Interrogativo",
                                                                                "Função",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "O que / Que",
                                                                                                "Identificação de coisas",
                                                                                                "O que fazes?"
                                                                                ],
                                                                                [
                                                                                                "Quem",
                                                                                                "Identificação de pessoas",
                                                                                                "Quem é aquele homem?"
                                                                                ],
                                                                                [
                                                                                                "Onde",
                                                                                                "Lugar",
                                                                                                "Onde moras?"
                                                                                ],
                                                                                [
                                                                                                "Quando",
                                                                                                "Tempo",
                                                                                                "Quando é a aula?"
                                                                                ],
                                                                                [
                                                                                                "Porquê / Por que",
                                                                                                "Causa ou razão",
                                                                                                "Porquê estudas português?"
                                                                                ],
                                                                                [
                                                                                                "Quanto/a/os/as",
                                                                                                "Quantidade",
                                                                                                "Quantos anos tens?"
                                                                                ]
                                                                ],
                                                                "attention": "Em português usa-se frequentemente a partícula «é que» para reforçar as perguntas (Onde é que moras? / O que é que fazes?).",
                                                                "mnemonic": "Onde? Quando? Quem? O que é que...?",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Onde fazes?",
                                                                                                "right": "O que fazes?"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formular perguntas diretas com pronomes interrogativos",
                                                                                "Utilizar a expressão «é que» nas perguntas"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual interrogativo se usa para perguntar a localização de algo?",
                                                                                                "opts": [
                                                                                                                "Quem",
                                                                                                                "Onde",
                                                                                                                "Quando"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Para perguntar o lugar ou localização usa-se «Onde»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "conjuncoes-basicas",
                                                                "title": "Conjunções básicas",
                                                                "subtitle": "E, mas, ou, porque (ligar frases e ideias)",
                                                                "page_num": 16,
                                                                "table_head": [
                                                                                "Conjunção",
                                                                                "Função gramatical",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "e",
                                                                                                "Adição / União",
                                                                                                "Eu estudo português e trabalho no Porto."
                                                                                ],
                                                                                [
                                                                                                "mas",
                                                                                                "Oposição / Contraste",
                                                                                                "Quero sair, mas está a chover."
                                                                                ],
                                                                                [
                                                                                                "ou",
                                                                                                "Alternativa / Escolha",
                                                                                                "Preferes café ou chá?"
                                                                                ],
                                                                                [
                                                                                                "porque",
                                                                                                "Causa / Explicação",
                                                                                                "Estudo português porque vivo em Portugal."
                                                                                ]
                                                                ],
                                                                "attention": "Cuidado para não confundir a conjunção de contraste «mas» com o advérbio de quantidade «mais».",
                                                                "mnemonic": "E une, Mas contrasta, Ou escolhe, Porque explica.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Eu quero ir, mais não posso",
                                                                                                "right": "Eu quero ir, mas não posso"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar e / mas / ou para conectar frases",
                                                                                "Diferenciar mas (contraste) de mais (quantidade)"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual conjunção indica contraste entre duas ideias?",
                                                                                                "opts": [
                                                                                                                "e",
                                                                                                                "mas",
                                                                                                                "porque"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A conjunção «mas» exprime oposição ou contraste."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-4",
                                "file": "capitulo-4.html",
                                "title": "Capítulo 4 · Preposições, números e tempo",
                                "subtitle": "Preposições de lugar, tempo, números, horas e datas",
                                "stripe": "#c9740a",
                                "topics": [
                                                {
                                                                "slug": "preposicoes-lugar",
                                                                "title": "Preposições de lugar",
                                                                "subtitle": "Em, a, de, para, sobre, debaixo de",
                                                                "page_num": 17,
                                                                "table_head": [
                                                                                "Preposição / Locução",
                                                                                "Uso espacial",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "em (+ artigo: no, na, nos, nas)",
                                                                                                "Ubicativo / Espaço fechado ou país",
                                                                                                "Moro no Porto / em Portugal."
                                                                                ],
                                                                                [
                                                                                                "a (+ artigo: ao, à, aos, às)",
                                                                                                "Movimento de curta duração",
                                                                                                "Vou ao supermercado."
                                                                                ],
                                                                                [
                                                                                                "para (+ artigo: para o, para a)",
                                                                                                "Movimento definitivo / longa duração",
                                                                                                "Vou para Portugal."
                                                                                ],
                                                                                [
                                                                                                "de (+ artigo: do, da, dos, das)",
                                                                                                "Origem ou ponto de partida",
                                                                                                "Venho de Lisboa."
                                                                                ],
                                                                                [
                                                                                                "sobre / em cima de",
                                                                                                "Posição superior numa superfície",
                                                                                                "O livro está em cima da mesa."
                                                                                ],
                                                                                [
                                                                                                "debaixo de / sob",
                                                                                                "Posição inferior",
                                                                                                "O gato está debaixo da cadeira."
                                                                                ]
                                                                ],
                                                                "attention": "As preposições contraem-se obrigatoriamente com os artigos definidos (em + o = no, a + a = à, de + o = do).",
                                                                "mnemonic": "Em + o = no. De + o = do. A + o = ao. A + a = à.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Moro em o Porto",
                                                                                                "right": "Moro no Porto"
                                                                                },
                                                                                {
                                                                                                "wrong": "Vou a a praia",
                                                                                                "right": "Vou à praia"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Fazer as contrações obrigatórias das preposições com artigos",
                                                                                "Diferenciar ir a (temporário) de ir para (permanente)"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é a contração da preposição «em» com o artigo «o»?",
                                                                                                "opts": [
                                                                                                                "do",
                                                                                                                "no",
                                                                                                                "ao"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A preposição «em» junta-se ao artigo «o» forming «no»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "preposicoes-tempo",
                                                                "title": "Preposições de tempo",
                                                                "subtitle": "Em, a, de, desde, até, por, durante",
                                                                "page_num": 18,
                                                                "table_head": [
                                                                                "Preposição",
                                                                                "Uso temporal",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "a (às)",
                                                                                                "Horas exatas",
                                                                                                "A aula começa às 9 horas."
                                                                                ],
                                                                                [
                                                                                                "em (no/na)",
                                                                                                "Meses, anos, estações",
                                                                                                "No verão faz calor / em 2026."
                                                                                ],
                                                                                [
                                                                                                "desde... até",
                                                                                                "Início e fim de uma duração",
                                                                                                "Trabalho desde as 9 até às 18."
                                                                                ],
                                                                                [
                                                                                                "há",
                                                                                                "Tempo decorrido no passado",
                                                                                                "Moro aqui há dois anos."
                                                                                ],
                                                                                [
                                                                                                "por",
                                                                                                "Duração aproximada ou parte do dia",
                                                                                                "Estudo pela manhã (por + a)."
                                                                                ]
                                                                ],
                                                                "attention": "Para tempo decorrido no passado usa-se a forma verbal «há» (moro aqui há três anos).",
                                                                "mnemonic": "Às (horas), No/Na (meses/anos), Há (passado decorrido).",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Em as 9 horas",
                                                                                                "right": "Às 9 horas"
                                                                                },
                                                                                {
                                                                                                "wrong": "Moro aqui desde dois anos (para tempo decorrido)",
                                                                                                "right": "Moro aqui há dois anos"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Usar «às» para horas do dia",
                                                                                "Usar «há» para indicar tempo decorrido no passado"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Como se indica a hora da aula («at 9 o'clock»)?",
                                                                                                "opts": [
                                                                                                                "nas 9 horas",
                                                                                                                "às 9 horas",
                                                                                                                "por 9 horas"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Para marcar horas usa-se a preposição «a» contraída com «as»: «às 9 horas»."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "numeros-horas-datas",
                                                                "title": "Números, horas e datas",
                                                                "subtitle": "Números cardinais e ordinais, dizer as horas e datas",
                                                                "page_num": 19,
                                                                "table_head": [
                                                                                "Categoria",
                                                                                "Formato / Exemplo",
                                                                                "Exemplo de frase"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Cardinais (1-30)",
                                                                                                "um/uma, dois/duas, três... vinte, trinta",
                                                                                                "Tenho dois livros e duas canetas."
                                                                                ],
                                                                                [
                                                                                                "Ordinais (1º-5º)",
                                                                                                "primeiro, segundo, terceiro, quarto, quinto",
                                                                                                "O primeiro andar."
                                                                                ],
                                                                                [
                                                                                                "Dizer as horas",
                                                                                                "Que horas são? -> É a uma / São duas horas",
                                                                                                "São três e meia."
                                                                                ],
                                                                                [
                                                                                                "Dias da semana",
                                                                                                "segunda-feira, terça-feira, quarta-feira...",
                                                                                                "Na segunda-feira tenho aula."
                                                                                ],
                                                                                [
                                                                                                "Meses do ano",
                                                                                                "janeiro, fevereiro, março, abril...",
                                                                                                "O meu aniversário é em maio."
                                                                                ]
                                                                ],
                                                                "attention": "Os números 1 e 2 variam em gênero (um/uma, dois/duas). As horas usam o plural a partir das 2:00 (São duas horas).",
                                                                "mnemonic": "Um/uma, dois/duas. É uma hora. São duas horas.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Tenho dois maçãs",
                                                                                                "right": "Tenho duas maçãs"
                                                                                },
                                                                                {
                                                                                                "wrong": "É duas horas",
                                                                                                "right": "São duas horas"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Concordar os números um/dois em gênero",
                                                                                "Dizer as horas no plural a partir das duas"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Como se diz «It is 2 o'clock» em português?",
                                                                                                "opts": [
                                                                                                                "É duas horas",
                                                                                                                "São duas horas",
                                                                                                                "São dois horas"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "A partir das duas usa-se o verbo e o determinante no plural feminino: «São duas horas»."
                                                                                }
                                                                ]
                                                }
                                ]
                },
                {
                                "id": "capitulo-5",
                                "file": "capitulo-5.html",
                                "title": "Capítulo 5 · Advérbios e comparação",
                                "subtitle": "Advérbios de frequência, modo, comparativos e superlativos",
                                "stripe": "#d99b00",
                                "topics": [
                                                {
                                                                "slug": "adverbios-frequencia-modo",
                                                                "title": "Advérbios de frequência e de modo",
                                                                "subtitle": "Sempre, às vezes, nunca, rapidamente, bem, mal",
                                                                "page_num": 20,
                                                                "table_head": [
                                                                                "Tipo",
                                                                                "Exemplos",
                                                                                "Posição na frase",
                                                                                "Exemplo completo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Frequência",
                                                                                                "sempre, frequentemente, às vezes, raramente, nunca",
                                                                                                "Normalmente antes do verbo ou no fim",
                                                                                                "Eu estudo sempre à tarde."
                                                                                ],
                                                                                [
                                                                                                "Modo em -mente",
                                                                                                "rapidamente, lentamente, facilmente",
                                                                                                "Após o verbo principal",
                                                                                                "Ele fala rapidamente."
                                                                                ],
                                                                                [
                                                                                                "Modo irregulares",
                                                                                                "bem, mal, depressa, devagar",
                                                                                                "Após o verbo principal",
                                                                                                "Ela fala português muito bem."
                                                                                ]
                                                                ],
                                                                "attention": "Os advérbios em «-mente» formam-se adicionando o sufixo à forma feminina do adjetivo (rápida -> rapidamente).",
                                                                "mnemonic": "Adjetivo feminino + -mente = Advérbio de modo.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "Ele fala bom",
                                                                                                "right": "Ele fala bem"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Posicionar os advérbios de frequência na frase",
                                                                                "Formar advérbios em -mente a partir da forma feminina do adjetivo"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual advérbio corresponde ao verbo «falar» para dizer «speak well»?",
                                                                                                "opts": [
                                                                                                                "bom",
                                                                                                                "bem",
                                                                                                                "bonito"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "Com verbos usa-se o advérbio «bem» (não o adjetivo «bom»)."
                                                                                }
                                                                ]
                                                },
                                                {
                                                                "slug": "comparativo-superlativo",
                                                                "title": "Comparativo e superlativo",
                                                                "subtitle": "Mais... do que, menos... do que, tão... como e o superlativo (-íssimo)",
                                                                "page_num": 21,
                                                                "table_head": [
                                                                                "Grau",
                                                                                "Estrutura",
                                                                                "Exemplo"
                                                                ],
                                                                "table_rows": [
                                                                                [
                                                                                                "Superioridade",
                                                                                                "mais + adj. + (do) que",
                                                                                                "O Pedro é mais alto do que o Paulo."
                                                                                ],
                                                                                [
                                                                                                "Inferioridade",
                                                                                                "menos + adj. + (do) que",
                                                                                                "O livro é menos caro do que o filme."
                                                                                ],
                                                                                [
                                                                                                "Igualdade",
                                                                                                "tão + adj. + como / quanto",
                                                                                                "A Ana é tão alta como a Maria."
                                                                                ],
                                                                                [
                                                                                                "Superlativo relativo",
                                                                                                "o / a mais + adj. + de",
                                                                                                "É o aluno mais inteligente da turma."
                                                                                ],
                                                                                [
                                                                                                "Superlativo absoluto",
                                                                                                "adjetivo + -íssimo/a/os/as",
                                                                                                "Este café é altíssimo / ótimo."
                                                                                ]
                                                                ],
                                                                "attention": "Cuidado com os comparativos irregulares: bom -> melhor (não *mais bom*), mau -> pior (não *mais mau*), grande -> maior, pequeno -> menor.",
                                                                "mnemonic": "Mais... do que. Tão... como. Bom -> Melhor. Mau -> Pior.",
                                                                "mistakes": [
                                                                                {
                                                                                                "wrong": "O Pedro é mais bom do que o Paulo",
                                                                                                "right": "O Pedro é melhor do que o Paulo"
                                                                                }
                                                                ],
                                                                "check_items": [
                                                                                "Formar comparativos de superioridade e igualdade",
                                                                                "Usar os comparativos irregulares melhor, pior, maior, menor"
                                                                ],
                                                                "quiz": [
                                                                                {
                                                                                                "q": "Qual é a forma comparativa correta para «bom»?",
                                                                                                "opts": [
                                                                                                                "mais bom",
                                                                                                                "melhor",
                                                                                                                "boníssimo"
                                                                                                ],
                                                                                                "correct": 1,
                                                                                                "explain": "O comparativo irregular do adjetivo «bom» é «melhor»."
                                                                                }
                                                                ]
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

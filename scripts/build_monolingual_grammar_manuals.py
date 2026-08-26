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
                        "mnemonic": "Pensa a «lo studente» e «gli studenti» come coppia speciale.",
                        "mistakes": [
                            {
                                "wrong": "il studente",
                                "right": "lo studente"
                            },
                            {
                                "wrong": "i amici",
                                "right": "gli amici"
                            }
                        ],
                        "check_items": [
                            "Usare correttamente il/lo/la/l'",
                            "Usare i/gli/le al plurale"
                        ],
                        "quiz": [
                            {
                                "q": "Quale articolo si usa prima di «zaino»?",
                                "opts": [
                                    "il zaino",
                                    "lo zaino",
                                    "un zaino"
                                ],
                                "correct": 1,
                                "explain": "Davanti alle parole che iniziano con Z si usa l'articolo «lo»."
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
                        "attention": "L'apostrofo si usa solo con l'articolo indeterminativo femminile «un'» davanti a vocale.",
                        "mnemonic": "Maschile «un amico» (senza apostrofo), femminile «un'amica» (con apostrofo).",
                        "mistakes": [
                            {
                                "wrong": "un' amico",
                                "right": "un amico"
                            },
                            {
                                "wrong": "una amica",
                                "right": "un'amica"
                            }
                        ],
                        "check_items": [
                            "Distinguere l'uso dell'apostrofo tra maschile e femminile",
                            "Usare uno davanti a s+consonante e z"
                        ],
                        "quiz": [
                            {
                                "q": "Qual è la forma corretta per un sostantivo femminile che inizia per vocale?",
                                "opts": [
                                    "un amica",
                                    "uno amica",
                                    "un'amica"
                                ],
                                "correct": 2,
                                "explain": "L'articolo femminile davanti a vocale elide in un' con apostrofo."
                            }
                        ]
                    },
                    {
                        "slug": "singolare-plurale",
                        "title": "Singolare e plurale",
                        "subtitle": "Trasformazione delle desinenze",
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
                                "il gelato",
                                "i gelati"
                            ],
                            [
                                "-a",
                                "-e",
                                "la pizza",
                                "le pizze"
                            ],
                            [
                                "-e",
                                "-i",
                                "il caffè / la notte",
                                "i caffè / le notti"
                            ]
                        ],
                        "attention": "I nomi accentati sull'ultima sillaba (es. il caffè) non cambiano al plurale.",
                        "mnemonic": "Cambiano solo le vocali finali: O/A/E diventano I/E/I.",
                        "mistakes": [
                            {
                                "wrong": "i gelate",
                                "right": "i gelati"
                            }
                        ],
                        "check_items": [
                            "Convertire sostantivi dal singolare al plurale",
                            "Identificare i sostantivi invariabili"
                        ],
                        "quiz": [
                            {
                                "q": "Come diventa «la pizza» al plurale?",
                                "opts": [
                                    "i pizze",
                                    "le pizze",
                                    "le dizzi"
                                ],
                                "correct": 1,
                                "explain": "La forma plurale di «la pizza» è «le pizze»."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "capitolo-2",
                "file": "capitolo-2.html",
                "title": "Capitolo 2 · Verbi essenziali e presente",
                "subtitle": "Essere, avere, verbi in -are, -ere, -ire",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "essere-avere",
                        "title": "Verbi essere e avere",
                        "subtitle": "I due ausiliari fondamentali",
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
                        "attention": "Il verbo essere si usa per identità e origine; avere si usa per possesso ed età.",
                        "mnemonic": "Ricorda: «Io ho 20 anni» (non *io sono 20 anni!).",
                        "mistakes": [
                            {
                                "wrong": "Io sono 25 anni",
                                "right": "Io ho 25 anni"
                            }
                        ],
                        "check_items": [
                            "Coniugare essere e avere al presente",
                            "Esprimere l'età con avere"
                        ],
                        "quiz": [
                            {
                                "q": "Come si dice «Lei ha un libro»?",
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
                        "slug": "passato-prossimo",
                        "title": "Passato prossimo",
                        "subtitle": "Ausiliare essere o avere + participio passato",
                        "page_num": 8,
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
                    }
                ]
            },
            {
                "id": "capitolo-3",
                "file": "capitolo-3.html",
                "title": "Capitolo 3 · Aggettivi, pronomi e preposizioni",
                "subtitle": "Qualità, possesso e preposizioni articolate",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "aggettivi-qualificativi",
                        "title": "Aggettivi qualificativi",
                        "subtitle": "Accordo in genere e numero",
                        "page_num": 9,
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
                    },
                    {
                        "slug": "pronomi-possessivi",
                        "title": "Possessivi e dimostrativi",
                        "subtitle": "Il mio, il tuo, questo, quello",
                        "page_num": 10,
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
                            ]
                        ],
                        "attention": "In italiano il possessivo richiede quasi sempre l'articolo determinativo (il mio libro).",
                        "mnemonic": "Articolo + Possessivo + Nome = La mia casa.",
                        "mistakes": [
                            {
                                "wrong": "mio libro",
                                "right": "il mio libro"
                            }
                        ],
                        "check_items": [
                            "Mettere l'articolo prima del possessivo",
                            "Scegliere la forma corretta di questo/quello"
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
                        "slug": "preposizioni-semplici",
                        "title": "Preposizioni semplici e articolate",
                        "subtitle": "Di, a, da, in, con, su, per, tra, fra",
                        "page_num": 11,
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
                        "attention": "Si usa «in» per le nazioni (in Italia) e «a» per le città (a Roma).",
                        "mnemonic": "In Italia, a Roma, nel centro.",
                        "mistakes": [
                            {
                                "wrong": "vado a Italia",
                                "right": "vado in Italia"
                            }
                        ],
                        "check_items": [
                            "Distinguere l'uso di «in» ed «a» con i nomi geografici",
                            "Formare le preposizioni articolate"
                        ],
                        "quiz": [
                            {
                                "q": "Come si dice «I go to Rome»?",
                                "opts": [
                                    "Vado in Roma",
                                    "Vado a Roma",
                                    "Vado da Roma"
                                ],
                                "correct": 1,
                                "explain": "Con i nomi di città si usa la preposizione «a»."
                            }
                        ]
                    },
                    {
                        "slug": "interrogativi",
                        "title": "Pronomi e avverbi interrogativi",
                        "subtitle": "Chi, che cosa, dove, quando, perché",
                        "page_num": 12,
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
                        "attention": "«Perché» si usa sia nelle domande (why) sia nelle risposte (because).",
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
                "title": "Capítulo 1 · Sustantivos y artículos",
                "subtitle": "Género gramatical, artículos determinados e indeterminados",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "genero-sustantivos",
                        "title": "El género de los sustantivos",
                        "subtitle": "Masculino y femenino en español",
                        "page_num": 1,
                        "table_head": [
                            "Género",
                            "Terminación",
                            "Ejemplo singular",
                            "Ejemplo plural"
                        ],
                        "table_rows": [
                            [
                                "Masculino",
                                "-o",
                                "el libro",
                                "los libros"
                            ],
                            [
                                "Femenino",
                                "-a",
                                "la casa",
                                "las casas"
                            ],
                            [
                                "Variable",
                                "-ista / -ante",
                                "el/la estudiante",
                                "los/las estudiantes"
                            ]
                        ],
                        "attention": "Los sustantivos terminados en -o suelen ser masculinos; los terminados en -a son femeninos.",
                        "mnemonic": "Recuerda la regla básica: el chico / la chica.",
                        "mistakes": [
                            {
                                "wrong": "la libro",
                                "right": "el libro"
                            }
                        ],
                        "check_items": [
                            "Identificar el género por la terminación del sustantivo",
                            "Usar el artículo correspondiente"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cuál es el plural correcto de «la casa»?",
                                "opts": [
                                    "las casa",
                                    "las casas",
                                    "los casas"
                                ],
                                "correct": 1,
                                "explain": "El plural femenino de «la casa» es «las casas»."
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
                            "Masculino Singular",
                            "Femenino Singular",
                            "Masculino Plural",
                            "Femenino Plural"
                        ],
                        "table_rows": [
                            [
                                "Determinado",
                                "el libro",
                                "la mesa",
                                "los libros",
                                "las mesas"
                            ],
                            [
                                "Indeterminado",
                                "un libro",
                                "una mesa",
                                "unos libros",
                                "unas mesas"
                            ]
                        ],
                        "attention": "Usa artículos determinados para cosas específicas e indeterminados para no específicas.",
                        "mnemonic": "El / La = conocido. Un / Una = uno cualquiera.",
                        "mistakes": [
                            {
                                "wrong": "un mesa",
                                "right": "una mesa"
                            }
                        ],
                        "check_items": [
                            "Diferenciar entre artículos determinados e indeterminados",
                            "Concordar el artículo en género y número"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué artículo indeterminado corresponde a «mesa»?",
                                "opts": [
                                    "un mesa",
                                    "una mesa",
                                    "unos mesa"
                                ],
                                "correct": 1,
                                "explain": "«Mesa» es femenino, por lo que requiere «una»."
                            }
                        ]
                    },
                    {
                        "slug": "plural-sustantivos",
                        "title": "Formación del plural",
                        "subtitle": "Reglas para vocales y consonantes",
                        "page_num": 3,
                        "table_head": [
                            "Terminación singular",
                            "Regla de plural",
                            "Ejemplo singular",
                            "Ejemplo plural"
                        ],
                        "table_rows": [
                            [
                                "Vocal no acentuada",
                                "Añadir -s",
                                "la manzana",
                                "las manzanas"
                            ],
                            [
                                "Consonante",
                                "Añadir -es",
                                "el hotel",
                                "los hoteles"
                            ],
                            [
                                "Terminado en -z",
                                "Cambiar -z por -ces",
                                "el lápiz",
                                "los lápices"
                            ]
                        ],
                        "attention": "Los sustantivos que terminan en -z cambian la -z por -ces en plural.",
                        "mnemonic": "Vocal + S (casas); Consonante + ES (hoteles).",
                        "mistakes": [
                            {
                                "wrong": "los hotel",
                                "right": "los hoteles"
                            }
                        ],
                        "check_items": [
                            "Añadir -s a palabras terminadas en vocal",
                            "Añadir -es a palabras terminadas en consonante"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cómo se forma el plural de «el hotel»?",
                                "opts": [
                                    "los hotels",
                                    "los hoteles",
                                    "las hoteles"
                                ],
                                "correct": 1,
                                "explain": "Las palabras terminadas en consonante añaden «-es»: los hoteles."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "capitulo-2",
                "file": "capitulo-2.html",
                "title": "Capítulo 2 · Verbos fundamentales",
                "subtitle": "Ser vs Estar y presente regular",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "ser-vs-estar",
                        "title": "Ser vs Estar",
                        "subtitle": "Diferencias clave entre los dos verbos",
                        "page_num": 4,
                        "table_head": [
                            "Verbo",
                            "Uso principal",
                            "Ejemplo"
                        ],
                        "table_rows": [
                            [
                                "Ser",
                                "Identidad, origen, profesión, características permanentes",
                                "Yo soy profesor / Ella es de España"
                            ],
                            [
                                "Estar",
                                "Ubicación, estados temporales, emociones",
                                "El libro está en la mesa / Estoy cansado"
                            ]
                        ],
                        "attention": "Usa «ser» para definir lo que algo es; usa «estar» para indicar cómo o dónde está.",
                        "mnemonic": "Regla rápida: D.O.C.T.O.R (Ser) vs P.L.A.C.E (Estar).",
                        "mistakes": [
                            {
                                "wrong": "Yo soy cansado",
                                "right": "Estoy cansado"
                            }
                        ],
                        "check_items": [
                            "Diferenciar entre ser y estar",
                            "Usar estar para ubicaciones"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cómo se dice «Where are you?»?",
                                "opts": [
                                    "¿Dónde eres?",
                                    "¿Dónde estás?",
                                    "¿Dónde tienes?"
                                ],
                                "correct": 1,
                                "explain": "Para preguntar la ubicación se usa el verbo «estar»."
                            }
                        ]
                    },
                    {
                        "slug": "presente-indicativo",
                        "title": "Presente de indicativo",
                        "subtitle": "Verbos regulares -ar, -er, -ir",
                        "page_num": 5,
                        "table_head": [
                            "Pronombre",
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
                                "él / ella / Ud.",
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
                                "ellos/as / Uds.",
                                "hablan",
                                "comen",
                                "viven"
                            ]
                        ],
                        "attention": "La primera persona singular (yo) siempre termina en -o en las tres conjugaciones.",
                        "mnemonic": "Yo hablo, tú hablas, él habla.",
                        "mistakes": [
                            {
                                "wrong": "Yo hablas español",
                                "right": "Yo hablo español"
                            }
                        ],
                        "check_items": [
                            "Conjugar verbos regulares en presente",
                            "Reconocer las terminaciones -ar, -er, -ir"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cuál es la forma correcta para «nosotros» con el verbo «comer»?",
                                "opts": [
                                    "comemos",
                                    "comen",
                                    "coméis"
                                ],
                                "correct": 0,
                                "explain": "La terminación para nosotros en verbos -er es «-emos»: comemos."
                            }
                        ]
                    },
                    {
                        "slug": "hay-vs-esta",
                        "title": "Hay vs Está/Están",
                        "subtitle": "Existencia vs ubicación",
                        "page_num": 6,
                        "table_head": [
                            "Forma",
                            "Función",
                            "Ejemplo"
                        ],
                        "table_rows": [
                            [
                                "Hay",
                                "Existencia de algo indeterminado",
                                "Hay un parque cerca / Hay muchos coches"
                            ],
                            [
                                "Está / Están",
                                "Ubicación de algo determinado",
                                "El parque está cerca / Los coches están allí"
                            ]
                        ],
                        "attention": "«Hay» no cambia nunca en plural (no existe *hayan para existencia).",
                        "mnemonic": "Hay + un/una/número; Está + el/la/mi/tu.",
                        "mistakes": [
                            {
                                "wrong": "El banco hay en la esquina",
                                "right": "El banco está en la esquina"
                            }
                        ],
                        "check_items": [
                            "Usar «hay» con artículos indeterminados",
                            "Usar «está» con artículos determinados"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cómo se dice «There is a hotel near here»?",
                                "opts": [
                                    "Está un hotel cerca de aquí",
                                    "Hay un hotel cerca de aquí",
                                    "Es un hotel cerca de aquí"
                                ],
                                "correct": 1,
                                "explain": "Para expresar la existencia de algo indeterminado se usa «Hay»."
                            }
                        ]
                    },
                    {
                        "slug": "pretérito-perfecto",
                        "title": "Pretérito perfecto compuesto",
                        "subtitle": "Verbo haber + participio",
                        "page_num": 7,
                        "table_head": [
                            "Pronombre",
                            "Haber",
                            "Participio (-ar -> -ado / -er,-ir -> -ido)"
                        ],
                        "table_rows": [
                            [
                                "yo",
                                "he",
                                "hablado / comido"
                            ],
                            [
                                "tú",
                                "has",
                                "hablado / comido"
                            ],
                            [
                                "él / ella",
                                "ha",
                                "hablado / comido"
                            ],
                            [
                                "nosotros/as",
                                "hemos",
                                "hablado / comido"
                            ],
                            [
                                "ellos/as",
                                "han",
                                "hablado / comido"
                            ]
                        ],
                        "attention": "El participio compuesto con «haber» no cambia de género ni de número.",
                        "mnemonic": "He, has, ha, hemos, han + participio en -ado/-ido.",
                        "mistakes": [
                            {
                                "wrong": "Ellos han hablados",
                                "right": "Ellos han hablado"
                            }
                        ],
                        "check_items": [
                            "Conjugar el verbo auxiliar haber",
                            "Formar participios regulares en -ado e -ido"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cuál es la forma correcta para «we have eaten»?",
                                "opts": [
                                    "hemos comido",
                                    "han comido",
                                    "he comido"
                                ],
                                "correct": 0,
                                "explain": "La primera persona plural de haber es «hemos»: hemos comido."
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
                "title": "Kapitel 1 · Nomen und Artikel",
                "subtitle": "Der, die, das, Plural und Nominativ/Akkusativ",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "artikel-und-genus",
                        "title": "Artikel und Genus",
                        "subtitle": "Maskulin, Feminin und Neutral im Deutschen",
                        "page_num": 1,
                        "table_head": [
                            "Genus",
                            "Bestimmter Artikel",
                            "Unbestimmter Artikel",
                            "Plural"
                        ],
                        "table_rows": [
                            [
                                "Maskulin",
                                "der Mann",
                                "ein Mann",
                                "die Männer"
                            ],
                            [
                                "Feminin",
                                "die Frau",
                                "eine Frau",
                                "die Frauen"
                            ],
                            [
                                "Neutral",
                                "das Kind",
                                "ein Kind",
                                "die Kinder"
                            ]
                        ],
                        "attention": "Im Deutschen gibt es drei grammatische Geschlechter: der (m), die (f), das (n).",
                        "mnemonic": "Lerne jedes Nomen immer zusammen mit seinem bestimmten Artikel!",
                        "mistakes": [
                            {
                                "wrong": "das Mann",
                                "right": "der Mann"
                            }
                        ],
                        "check_items": [
                            "Die drei bestimmten Artikel nennen",
                            "Nomen immer mit Artikel lernen"
                        ],
                        "quiz": [
                            {
                                "q": "Welcher Artikel passt zu «Frau»?",
                                "opts": [
                                    "der",
                                    "die",
                                    "das"
                                ],
                                "correct": 1,
                                "explain": "«Frau» ist feminin: die Frau."
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
                                "der / ein",
                                "die / eine",
                                "das / ein",
                                "die"
                            ],
                            [
                                "Akkusativ (Objekt)",
                                "den / einen",
                                "die / eine",
                                "das / ein",
                                "die"
                            ]
                        ],
                        "attention": "Nur der maskuline Artikel ändert sich im Akkusativ: der -> den / ein -> einen.",
                        "mnemonic": "Akkusativ verändert nur MÄNNLICHE Wörter (der -> den).",
                        "mistakes": [
                            {
                                "wrong": "Ich habe ein Hund",
                                "right": "Ich habe einen Hund"
                            }
                        ],
                        "check_items": [
                            "Den Akkusativ bei maskulinen Nomen bilden",
                            "Erkennen, wann ein Objekt im Akkusativ steht"
                        ],
                        "quiz": [
                            {
                                "q": "Wie heißt der Akkusativ von «der Apfel» in «Ich kaufe ...»?",
                                "opts": [
                                    "der Apfel",
                                    "den Apfel",
                                    "dem Apfel"
                                ],
                                "correct": 1,
                                "explain": "«Apfel» ist maskulin und Akkusativobjekt: den Apfel."
                            }
                        ]
                    },
                    {
                        "slug": "personalpronomen",
                        "title": "Personalpronomen und Possessivartikel",
                        "subtitle": "Ich, du, er, sie, es, mein, dein",
                        "page_num": 3,
                        "table_head": [
                            "Personalpronomen",
                            "Possessivartikel (Maskulin/Neutral)",
                            "Possessivartikel (Feminin/Plural)"
                        ],
                        "table_rows": [
                            [
                                "ich",
                                "mein Vater",
                                "meine Mutter"
                            ],
                            [
                                "du",
                                "dein Vater",
                                "deine Mutter"
                            ],
                            [
                                "er / es",
                                "sein Vater",
                                "seine Mutter"
                            ],
                            [
                                "sie",
                                "ihr Vater",
                                "ihre Mutter"
                            ],
                            [
                                "wir",
                                "unser Vater",
                                "unsere Mutter"
                            ]
                        ],
                        "attention": "Possessivartikel bekommen ein -e am Ende, wenn das Nomen feminin ist oder im Plural steht.",
                        "mnemonic": "Mein Vater (m/n) - Meine Mutter (f/pl).",
                        "mistakes": [
                            {
                                "wrong": "mein Mutter",
                                "right": "meine Mutter"
                            }
                        ],
                        "check_items": [
                            "Personalpronomen korrekt zuordnen",
                            "Possessivartikel an das Genus anpassen"
                        ],
                        "quiz": [
                            {
                                "q": "Wie heißt das Possessivpronomen für «ich» bei «Mutter» (f)?",
                                "opts": [
                                    "mein Mutter",
                                    "meine Mutter",
                                    "meines Mutter"
                                ],
                                "correct": 1,
                                "explain": "Vor femininen Nomen heißt es «meine»."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "kapitel-2",
                "file": "kapitel-2.html",
                "title": "Kapitel 2 · Verben und Satzbau",
                "subtitle": "Präsens, Modalverben und V2-Wortstellung",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "praesens-regelmaessig",
                        "title": "Präsens regelmäßiger Verben",
                        "subtitle": "Endungen im Präsens (-e, -st, -t, -en)",
                        "page_num": 4,
                        "table_head": [
                            "Pronomen",
                            "Endung",
                            "Beispiel (lernen)",
                            "Beispiel (machen)"
                        ],
                        "table_rows": [
                            [
                                "ich",
                                "-e",
                                "lerne",
                                "mache"
                            ],
                            [
                                "du",
                                "-st",
                                "lernst",
                                "machst"
                            ],
                            [
                                "er / sie / es",
                                "-t",
                                "lernt",
                                "macht"
                            ],
                            [
                                "wir",
                                "-en",
                                "lernen",
                                "machen"
                            ],
                            [
                                "ihr",
                                "-t",
                                "lernt",
                                "macht"
                            ],
                            [
                                "sie / Sie",
                                "-en",
                                "lernen",
                                "machen"
                            ]
                        ],
                        "attention": "Entferne die Endung -en vom Infinitiv und hänge die passende Personalendung an.",
                        "mnemonic": "Endungen: e – st – t – en – t – en.",
                        "mistakes": [
                            {
                                "wrong": "Du lerne Deutsch",
                                "right": "Du lernst Deutsch"
                            }
                        ],
                        "check_items": [
                            "Regelmäßige Verben im Präsens konjugieren",
                            "Personalendungen auswendig können"
                        ],
                        "quiz": [
                            {
                                "q": "Welche Endung gehört zu «du»?",
                                "opts": [
                                    "-e",
                                    "-st",
                                    "-t"
                                ],
                                "correct": 1,
                                "explain": "Die Endung für die zweite Person Singular «du» ist «-st»."
                            }
                        ]
                    },
                    {
                        "slug": "sein-und-haben",
                        "title": "Verben sein und haben",
                        "subtitle": "Die zwei wichtigsten Hilfsverben",
                        "page_num": 5,
                        "table_head": [
                            "Personalpronomen",
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
                        "attention": "Das Verb steht im normalen deutschen Aussagesatz immer an Position 2.",
                        "mnemonic": "V2-Regel: Subjekt – Verb (Pos. 2) – Rest.",
                        "mistakes": [
                            {
                                "wrong": "Ich haben einen Hund",
                                "right": "Ich habe einen Hund"
                            }
                        ],
                        "check_items": [
                            "Sein und haben im Präsens konjugieren",
                            "Die V2-Regel im Aussagesatz anwenden"
                        ],
                        "quiz": [
                            {
                                "q": "Wie heißt die richtige Form für «du» bei «sein»?",
                                "opts": [
                                    "du bin",
                                    "du bist",
                                    "du ist"
                                ],
                                "correct": 1,
                                "explain": "Die Form für du lautet «bist»."
                            }
                        ]
                    },
                    {
                        "slug": "modalverben",
                        "title": "Modalverben (können, müssen, wollen)",
                        "subtitle": "Bedeutung und Satzstellung",
                        "page_num": 6,
                        "table_head": [
                            "Pronomen",
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
                            ]
                        ],
                        "attention": "Das Modalverb steht an Position 2, der Vollverb-Infinitiv steht ganz am Ende des Satzes.",
                        "mnemonic": "Modalverb auf Pos. 2 – Infinitiv am Satzende!",
                        "mistakes": [
                            {
                                "wrong": "Ich kann sprechen Deutsch gut",
                                "right": "Ich kann gut Deutsch sprechen"
                            }
                        ],
                        "check_items": [
                            "Modalverben im Singular konjugieren",
                            "Den Infinitiv ans Satzende stellen"
                        ],
                        "quiz": [
                            {
                                "q": "Wo steht der Infinitiv bei einem Satz mit Modalverb?",
                                "opts": [
                                    "An Position 1",
                                    "An Position 2",
                                    "Ganz am Ende"
                                ],
                                "correct": 2,
                                "explain": "Der Infinitiv steht im Hauptsatz mit Modalverb ganz am Satzende."
                            }
                        ]
                    },
                    {
                        "slug": "perfekt",
                        "title": "Perfekt mit haben und sein",
                        "subtitle": "Vergangenheit im Alltag",
                        "page_num": 7,
                        "table_head": [
                            "Hilfsverb",
                            "Verwendung",
                            "Partizip II Form",
                            "Beispiel"
                        ],
                        "table_rows": [
                            [
                                "haben",
                                "Meiste Verben / Transitiv",
                                "ge- + Stamm + -t",
                                "Ich habe gelernt"
                            ],
                            [
                                "sein",
                                "Bewegung von A nach B / Ortswechsel",
                                "ge- + Stamm + -en/-t",
                                "Ich bin gefahren"
                            ]
                        ],
                        "attention": "Das Hilfsverb steht an Position 2, das Partizip II am Ende des Satzes.",
                        "mnemonic": "Bewegung = sein (ich bin gegangen); Sonst = haben (ich habe gemacht).",
                        "mistakes": [
                            {
                                "wrong": "Ich habe nach Berlin gefahren",
                                "right": "Ich bin nach Berlin gefahren"
                            }
                        ],
                        "check_items": [
                            "Das passende Hilfsverb (haben oder sein) wählen",
                            "Partizip II bilden und ans Ende stellen"
                        ],
                        "quiz": [
                            {
                                "q": "Welches Hilfsverb nutzt man bei «gehen» im Perfekt?",
                                "opts": [
                                    "haben",
                                    "sein",
                                    "werden"
                                ],
                                "correct": 1,
                                "explain": "Gehen drückt eine Ortsveränderung aus und bildet das Perfekt mit «sein»."
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
                "title": "Capítulo 1 · Substantivos e artigos",
                "subtitle": "Gênero gramatical, artigos definidos e indefinidos",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "genero-dos-substantivos",
                        "title": "Gênero dos substantivos",
                        "subtitle": "Masculino e feminino em português",
                        "page_num": 1,
                        "table_head": [
                            "Gênero",
                            "Terminação",
                            "Exemplo singular",
                            "Exemplo plural"
                        ],
                        "table_rows": [
                            [
                                "Masculino",
                                "-o",
                                "o livro",
                                "os livros"
                            ],
                            [
                                "Feminino",
                                "-a",
                                "a casa",
                                "as casas"
                            ]
                        ],
                        "attention": "Substantivos terminados em -o são geralmente masculinos; em -a são femininos.",
                        "mnemonic": "Associe sempre o artigo ao substantivo: o amigo / a amiga.",
                        "mistakes": [
                            {
                                "wrong": "a livro",
                                "right": "o livro"
                            }
                        ],
                        "check_items": [
                            "Identificar o gênero dos substantivos",
                            "Usar os artigos definidos o/a/os/as"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é o plural correto de «a casa»?",
                                "opts": [
                                    "as casa",
                                    "as casas",
                                    "os casas"
                                ],
                                "correct": 1,
                                "explain": "O plural feminino de «a casa» é «as casas»."
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
                            "Masculino Singular",
                            "Feminino Singular",
                            "Masculino Plural",
                            "Feminino Plural"
                        ],
                        "table_rows": [
                            [
                                "Definido",
                                "o carro",
                                "a mesa",
                                "os carros",
                                "as mesas"
                            ],
                            [
                                "Indefinido",
                                "um carro",
                                "uma mesa",
                                "uns carros",
                                "umas mesas"
                            ]
                        ],
                        "attention": "Usam-se artigos definidos antes de nomes próprios e possessivos em português europeu.",
                        "mnemonic": "O / A para coisas específicas; Um / Uma para genéricas.",
                        "mistakes": [
                            {
                                "wrong": "um mesa",
                                "right": "uma mesa"
                            }
                        ],
                        "check_items": [
                            "Empregar artigos definidos e indefinidos",
                            "Concordar artigos em gênero e número"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é o artigo indefinido feminino singular?",
                                "opts": [
                                    "um",
                                    "uma",
                                    "uns"
                                ],
                                "correct": 1,
                                "explain": "O artigo indefinido feminino singular é «uma»."
                            }
                        ]
                    },
                    {
                        "slug": "plural-dos-substantivos",
                        "title": "Formação do plural",
                        "subtitle": "Regras gerais para vogais e consoantes",
                        "page_num": 3,
                        "table_head": [
                            "Terminação",
                            "Regra de Plural",
                            "Exemplo singular",
                            "Exemplo plural"
                        ],
                        "table_rows": [
                            [
                                "Vogal",
                                "Adicionar -s",
                                "o livro",
                                "os livros"
                            ],
                            [
                                "-r, -s, -z",
                                "Adicionar -es",
                                "o mar",
                                "os mares"
                            ],
                            [
                                "-ão",
                                "-ões / -ães / -ãos",
                                "o pão",
                                "os pães"
                            ]
                        ],
                        "attention": "Palavras terminadas em -ão têm plurais irregulares (-ões, -ães, -ãos).",
                        "mnemonic": "Vogal + S; Consoante R/S/Z + ES.",
                        "mistakes": [
                            {
                                "wrong": "os mar",
                                "right": "os mares"
                            }
                        ],
                        "check_items": [
                            "Formar o plural de palavras terminadas em vogal e consoante",
                            "Reconhecer plurais em -ão"
                        ],
                        "quiz": [
                            {
                                "q": "Como se forma o plural de «o mar»?",
                                "opts": [
                                    "os mars",
                                    "os mares",
                                    "as mares"
                                ],
                                "correct": 1,
                                "explain": "Palavras terminadas em -r acrescentam «-es»: os mares."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "capitulo-2",
                "file": "capitulo-2.html",
                "title": "Capítulo 2 · Verbos fundamentais",
                "subtitle": "Ser vs Estar e presente do indicativo",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "ser-vs-estar",
                        "title": "Ser vs Estar",
                        "subtitle": "Diferenças essenciais entre os dois verbos",
                        "page_num": 4,
                        "table_head": [
                            "Verbo",
                            "Uso principal",
                            "Exemplo"
                        ],
                        "table_rows": [
                            [
                                "Ser",
                                "Identidade permanente, nacionalidade, profissão",
                                "Eu sou professor / Ela é do Brasil"
                            ],
                            [
                                "Estar",
                                "Estado temporário, localização, sentimentos",
                                "O livro está na mesa / Estou cansado"
                            ]
                        ],
                        "attention": "Use «ser» para características permanentes e «estar» para estados temporários e localização.",
                        "mnemonic": "Ser = essência; Estar = estado ou lugar.",
                        "mistakes": [
                            {
                                "wrong": "Eu sou cansado",
                                "right": "Eu estou cansado"
                            }
                        ],
                        "check_items": [
                            "Distinguir entre ser e estar",
                            "Empregar estar para indicar localização"
                        ],
                        "quiz": [
                            {
                                "q": "Como se diz «She is tired»?",
                                "opts": [
                                    "Ela é cansada",
                                    "Ela está cansada",
                                    "Ela tem cansada"
                                ],
                                "correct": 1,
                                "explain": "Para estados temporários como cansaço, usa-se o verbo «estar»."
                            }
                        ]
                    },
                    {
                        "slug": "presente-do-indicativo",
                        "title": "Presente do indicativo",
                        "subtitle": "Conjugação dos verbos regulares em -ar, -er, -ir",
                        "page_num": 5,
                        "table_head": [
                            "Pronombre",
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
                                "eles / elas / vocês",
                                "falam",
                                "comem",
                                "abrem"
                            ]
                        ],
                        "attention": "A primeira pessoa do singular (eu) termina sempre em -o nas três conjugações.",
                        "mnemonic": "Eu falo, tu falas, ele fala.",
                        "mistakes": [
                            {
                                "wrong": "Eu fala português",
                                "right": "Eu falo português"
                            }
                        ],
                        "check_items": [
                            "Conjugar verbos regulares no presente",
                            "Reconhecer as terminações -ar, -er, -ir"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a forma correta para «nós» no verbo «comer»?",
                                "opts": [
                                    "comemos",
                                    "comem",
                                    "comes"
                                ],
                                "correct": 0,
                                "explain": "A terminação de primeira pessoa do plural para verbos em -er é «-emos»: comemos."
                            }
                        ]
                    },
                    {
                        "slug": "preterito-perfeito",
                        "title": "Pretérito perfeito simples",
                        "subtitle": "Ações concluídas no passado",
                        "page_num": 6,
                        "table_head": [
                            "Pronombre",
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
                                "ele / ela",
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
                                "eles / elas",
                                "falaram",
                                "comeram",
                                "abriram"
                            ]
                        ],
                        "attention": "O pretérito perfeito indica uma ação pontual completamente terminada no passado.",
                        "mnemonic": "Ontem eu falei, comi e abri a porta.",
                        "mistakes": [
                            {
                                "wrong": "Ontem eu falo com ele",
                                "right": "Ontem eu falei com ele"
                            }
                        ],
                        "check_items": [
                            "Conjugar verbos regulares no pretérito perfeito",
                            "Expressar ações concluídas no passado"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a forma de «eu» no passado para o verbo «falar»?",
                                "opts": [
                                    "falo",
                                    "falei",
                                    "falou"
                                ],
                                "correct": 1,
                                "explain": "A primeira pessoa do singular no pretérito perfeito dos verbos em -ar é «-ei»: falei."
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
                "id": "bulek-1",
                "file": "bulek-1.html",
                "title": "1 нче бүлек · Исем һәм килешләр",
                "subtitle": "Сингармонизм, 6 килеш һәм иялек кушымчалары",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "singarmonizm",
                        "title": "Сузыклар сингарнизмы",
                        "subtitle": "Калын һәм нечкә сузыклар кагыйдәсе",
                        "page_num": 1,
                        "table_head": [
                            "Төр",
                            "Сузыклар",
                            "Мисал",
                            "Кушымча мисалы"
                        ],
                        "table_rows": [
                            [
                                "Калын сузыклар",
                                "а, о, у, ы",
                                "кала (шәһәр)",
                                "кала-да"
                            ],
                            [
                                "Нечкә сузыклар",
                                "ә, ө, ү, и, е",
                                "өй (йорт)",
                                "өй-дә"
                            ]
                        ],
                        "attention": "Сүздәге соңгы сузык калын булса, кушымча да калын була; нечкә булса — нечкә була.",
                        "mnemonic": "Калын сүзгә — калын кушымча, нечкә сүзгә — нечкә кушымча!",
                        "mistakes": [
                            {
                                "wrong": "өйда",
                                "right": "өйдә"
                            }
                        ],
                        "check_items": [
                            "Калын һәм нечкә сузыкларны аера белү",
                            "Сингармонизмга карап кушымча ялгау"
                        ],
                        "quiz": [
                            {
                                "q": "«Өй» сүзенә кайсы урын-вакыт кушымчасы ялгана?",
                                "opts": [
                                    "-да",
                                    "-дә",
                                    "-та"
                                ],
                                "correct": 1,
                                "explain": "«Өй» — нечкә сузыклы сүз, шуңа күрә «-дә» кушымчасы ялгана."
                            }
                        ]
                    },
                    {
                        "slug": "kileshlar",
                        "title": "Татар теленең 6 килеше",
                        "subtitle": "Баш, иялек, юнәлеш, төшем, урын-вакыт, чыгыш",
                        "page_num": 2,
                        "table_head": [
                            "Килеш",
                            "Сораулар",
                            "Калын кушымча",
                            "Мисал (мәктәп)"
                        ],
                        "table_rows": [
                            [
                                "Баш килеш",
                                "Кем? Нәрсә?",
                                "—",
                                "мәктәп"
                            ],
                            [
                                "Иялек килеш",
                                "Кемнең? Нәрстәнең?",
                                "-ның / -нең",
                                "мәктәпнең"
                            ],
                            [
                                "Юнәлеш килеш",
                                "Кемгә? Нәрсәгә?",
                                "-га / -гә / -ка / -кә",
                                "мәктәпкә"
                            ],
                            [
                                "Төшем килеш",
                                "Кемне? Нәрстәне?",
                                "-ны / -не",
                                "мәктәпне"
                            ],
                            [
                                "Урын-вакыт",
                                "Кемдә? Нәрсәдә?",
                                "-да / -дә / -та / -тә",
                                "мәктәптә"
                            ],
                            [
                                "Чыгыш килеш",
                                "Кемдән? Нәрсәдән?",
                                "-дан / -дән / -тан / -тән",
                                "мәктәптән"
                            ]
                        ],
                        "attention": "Татар телендә 6 килеш бар. Кушымчалар сингармонизмга бойсына.",
                        "mnemonic": "Баш, Иялек, Юнәлеш, Төшем, Урын-вакыт, Чыгыш.",
                        "mistakes": [
                            {
                                "wrong": "мәктәпга",
                                "right": "мәктәпкә"
                            }
                        ],
                        "check_items": [
                            "6 килешнең сорауларын белү",
                            "Килеш кушымчаларын дөрес ялгау"
                        ],
                        "quiz": [
                            {
                                "q": "«Кала» сүзенә чыгыш килеш кушымчасы кайсы?",
                                "opts": [
                                    "-дан",
                                    "-дән",
                                    "-тан"
                                ],
                                "correct": 0,
                                "explain": "«Кала» — калын сузыклы һәм сузыкка тәмамлана, шуңа күрә «-дан»."
                            }
                        ]
                    },
                    {
                        "slug": "iyalek-kushymchalary",
                        "title": "Иялек кушымчалары",
                        "subtitle": "Минем, синең, аның кушымчалары",
                        "page_num": 3,
                        "table_head": [
                            "Зат",
                            "Алышма",
                            "Кушымча (сузыкка)",
                            "Мисал (китап)"
                        ],
                        "table_rows": [
                            [
                                "1 нче зат",
                                "минем",
                                "-м / -ым / -ем",
                                "китабым"
                            ],
                            [
                                "2 нче зат",
                                "синең",
                                "-ң / -ың / -ең",
                                "китабың"
                            ],
                            [
                                "3 нче зат",
                                "аның",
                                "-сы / -се / -ы / -е",
                                "китабы"
                            ],
                            [
                                "1 нче зат күплек",
                                "безнең",
                                "-быз / -без",
                                "китабыбыз"
                            ],
                            [
                                "2 нче зат күплек",
                                "сезнең",
                                "-гыз / -гез",
                                "китабыгыз"
                            ],
                            [
                                "3 нче зат күплек",
                                "аларның",
                                "-лары / -ләре",
                                "китаплары"
                            ]
                        ],
                        "attention": "Иялек кушымчалары аерылгысыз калынлык-нечкәлек кагыйдәсенә буйсына.",
                        "mnemonic": "Минем китабым, синең китабың, аның китабы.",
                        "mistakes": [
                            {
                                "wrong": "минем китапсы",
                                "right": "минем китабым"
                            }
                        ],
                        "check_items": [
                            "Иялек кушымчаларын ялгау",
                            "Затлар буенча дөрес куллану"
                        ],
                        "quiz": [
                            {
                                "q": "«Минем» сүзе белән кайсы форма дөрес?",
                                "opts": [
                                    "китабым",
                                    "китабың",
                                    "китабы"
                                ],
                                "correct": 0,
                                "explain": "Минем өчен -м/-ым/-ем кушымчасы: китабым."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-2",
                "file": "bulek-2.html",
                "title": "2 нче бүлек · Зат алмашлары һәм фигыльләр",
                "subtitle": "Зат алмашлары, хәзерге, үткән, киләчәк заман һәм инкяр формасы",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "zat-alyshmalary",
                        "title": "Зат алмашлары",
                        "subtitle": "Мин, син, ул, без, сез, алар",
                        "page_num": 4,
                        "table_head": [
                            "Зат",
                            "Берлек",
                            "Күплек",
                            "Төшем килеш (Берлек)"
                        ],
                        "table_rows": [
                            [
                                "1 нче зат",
                                "мин (я)",
                                "без (мы)",
                                "мине"
                            ],
                            [
                                "2 нче зат",
                                "син (ты)",
                                "сез (вы)",
                                "сине"
                            ],
                            [
                                "3 нче зат",
                                "ул (он/она)",
                                "алар (они)",
                                "аны"
                            ]
                        ],
                        "attention": "Зат алмашлары килешләр буенча үзгәргәндә тамырда үзгәрешләр булырга мөмкин (мин -> мине, ул -> аны).",
                        "mnemonic": "Мин, син, ул — без, сез, алар.",
                        "mistakes": [
                            {
                                "wrong": "улны",
                                "right": "аны"
                            }
                        ],
                        "check_items": [
                            "Зат алмашларын тану",
                            "Алмашларның төшем килеш формаларын куллану"
                        ],
                        "quiz": [
                            {
                                "q": "«Ул» алмашының төшем килеше кайсы?",
                                "opts": [
                                    "улны",
                                    "аны",
                                    "аның"
                                ],
                                "correct": 1,
                                "explain": "«Ул» алмашы төшем килештә «аны» формасын ала."
                            }
                        ]
                    },
                    {
                        "slug": "hazierge-zaman",
                        "title": "Хәзерге заман фигыльләр",
                        "subtitle": "Фигыльнең хәзерге заман кушымчалары",
                        "page_num": 5,
                        "table_head": [
                            "Зат",
                            "Алышма",
                            "Фигыль мисалы (уку)",
                            "Фигыль мисалы (язу)"
                        ],
                        "table_rows": [
                            [
                                "1 нче зат (берлек)",
                                "мин",
                                "укыйм",
                                "язам"
                            ],
                            [
                                "2 нче зат (берлек)",
                                "син",
                                "укыйсың",
                                "язасың"
                            ],
                            [
                                "3 нче зат (берлек)",
                                "ул",
                                "укый",
                                "яза"
                            ],
                            [
                                "1 нче зат (күплек)",
                                "без",
                                "укыйбыз",
                                "язабыз"
                            ],
                            [
                                "2 нче зат (күплек)",
                                "сез",
                                "укыйсыз",
                                "язасыз"
                            ],
                            [
                                "3 нче зат (күплек)",
                                "алар",
                                "укыйлар",
                                "язалар"
                            ]
                        ],
                        "attention": "Хәзерге заманда фигыль тамырына -ый/-ий яки -а/-ә кушымчасы ялгана.",
                        "mnemonic": "Мин укыйм, син укыйсың, ул укый.",
                        "mistakes": [
                            {
                                "wrong": "Мин укыйсың",
                                "right": "Мин укыйм"
                            }
                        ],
                        "check_items": [
                            "Хәзерге заман фигыльләрен затлар буенча төрләндерү",
                            "Зат-лек кушымчаларын дөрес куллану"
                        ],
                        "quiz": [
                            {
                                "q": "«Без» (күплек) заты өчен кайсы форма дөрес?",
                                "opts": [
                                    "укыйм",
                                    "укыйбыз",
                                    "укыйлар"
                                ],
                                "correct": 1,
                                "explain": "«Без» заты өчен -быз/-без кушымчасы ялгана: укыйбыз."
                            }
                        ]
                    },
                    {
                        "slug": "utkan-zaman",
                        "title": "Үткән заман фигыльләр",
                        "subtitle": "Билгеле үткән заман (-ды/-де/-ты/-те)",
                        "page_num": 6,
                        "table_head": [
                            "Зат",
                            "Алышма",
                            "Мисал (язу)",
                            "Мисал (килү)"
                        ],
                        "table_rows": [
                            [
                                "1 нче зат",
                                "мин",
                                "яздым",
                                "килдем"
                            ],
                            [
                                "2 нче зат",
                                "син",
                                "яздың",
                                "килдең"
                            ],
                            [
                                "3 нче зат",
                                "ул",
                                "язды",
                                "килде"
                            ],
                            [
                                "1 нче зат күплек",
                                "без",
                                "яздык",
                                "килдек"
                            ]
                        ],
                        "attention": "Билгеле үткән заман кушымчасы -ды/-де (җанлы тартыштан соң -ты/-те).",
                        "mnemonic": "Мин яздым, син яздың, ул язды.",
                        "mistakes": [
                            {
                                "wrong": "Мин язды",
                                "right": "Мин яздым"
                            }
                        ],
                        "check_items": [
                            "Үткән заман кушымчаларын ялгау",
                            "Зат кушымчаларын куллану"
                        ],
                        "quiz": [
                            {
                                "q": "«Мин» заты өчен үткән заман кушымчасы кайсы?",
                                "opts": [
                                    "-дым",
                                    "-дың",
                                    "-ды"
                                ],
                                "correct": 0,
                                "explain": "Мин яздым (-дым)."
                            }
                        ]
                    },
                    {
                        "slug": "kilechak-zaman",
                        "title": "Киләчәк заман фигыльләр",
                        "subtitle": "Билгеле киләчәк заман (-ачак/-әчәк)",
                        "page_num": 7,
                        "table_head": [
                            "Зат",
                            "Алышма",
                            "Мисал (бару)",
                            "Мисал (эшләү)"
                        ],
                        "table_rows": [
                            [
                                "1 нче зат",
                                "мин",
                                "барачакмын",
                                "эшләячәкмен"
                            ],
                            [
                                "2 нче зат",
                                "син",
                                "барачаксың",
                                "эшләячәксең"
                            ],
                            [
                                "3 нче зат",
                                "ул",
                                "барачак",
                                "эшләячәк"
                            ]
                        ],
                        "attention": "Билгеле киләчәк заман кушымчасы -ачак/-әчәк яки -ячак/-ячәк.",
                        "mnemonic": "Мин барачакмын.",
                        "mistakes": [
                            {
                                "wrong": "Мин барачак",
                                "right": "Мин барачакмын"
                            }
                        ],
                        "check_items": [
                            "Киләчәк заман формаларын ясау",
                            "Зат кушымчаларын дөрес ялгау"
                        ],
                        "quiz": [
                            {
                                "q": "«Мин» затында киләчәк заман формасы кайсы?",
                                "opts": [
                                    "барачакмын",
                                    "барачаксың",
                                    "барачак"
                                ],
                                "correct": 0,
                                "explain": "Мин барачакмын."
                            }
                        ]
                    },
                    {
                        "slug": "inkyar-formasy",
                        "title": "Фигыльнең инкяр формасы",
                        "subtitle": "-мый / -ми кушымчасы белән инкяр ясау",
                        "page_num": 8,
                        "table_head": [
                            "Зат",
                            "Раслау формасы",
                            "Инкяр кушымчасы",
                            "Инкяр формасы"
                        ],
                        "table_rows": [
                            [
                                "мин",
                                "укыйм",
                                "-мый/-ми",
                                "укымыйм"
                            ],
                            [
                                "син",
                                "язасың",
                                "-мый/-ми",
                                "язмыйсың"
                            ],
                            [
                                "ул",
                                "бара",
                                "-мый/-ми",
                                "бармый"
                            ],
                            [
                                "без",
                                "эшлибез",
                                "-мый/-ми",
                                "эшләмибез"
                            ]
                        ],
                        "attention": "Хәзерге заманда инкяр формасы фигыль тамырына -мый/-ми кушымчасы өстәп ясала.",
                        "mnemonic": "Язам -> Язмыйм; Эшлим -> Эшләмим.",
                        "mistakes": [
                            {
                                "wrong": "Мин язам түгел",
                                "right": "Мин язмыйм"
                            }
                        ],
                        "check_items": [
                            "Фигыльнең инкяр формасын ясый белү",
                            "-мый/-ми кушымчаларын сингармонизм буенча куллану"
                        ],
                        "quiz": [
                            {
                                "q": "«Ул (бару)» фигыленең инкяр формасы кайсы?",
                                "opts": [
                                    "бармый",
                                    "бара түгел",
                                    "бармыйм"
                                ],
                                "correct": 0,
                                "explain": "3 нче затта инкяр формасы «бармый» була."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-3",
                "file": "bulek-3.html",
                "title": "3 нче бүлек · Сораулар, саннар һәм бар/юк",
                "subtitle": "Сорау кушымчалары, саннар, вакыт һәм бар/юк конструкцияләре",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "sorau-formasy-ham-sorau-sozlar",
                        "title": "Сорау ясалышы һәм сорау сүзләре",
                        "subtitle": "-мы/-ме кушымчасы һәм Кем? Нәрсә? Кайда?",
                        "page_num": 9,
                        "table_head": [
                            "Төр",
                            "Сорау элементы",
                            "Мисал сорау",
                            "Җавап мисалы"
                        ],
                        "table_rows": [
                            [
                                "Сорау кушымчасы",
                                "-мы / -ме",
                                "Син аңлыйсыңмы?",
                                "Әйе, аңлыйм."
                            ],
                            [
                                "Зат соравы",
                                "Кем?",
                                "Бу кем?",
                                "Бу укытучы."
                            ],
                            [
                                "Нәрсә соравы",
                                "Нәрсә?",
                                "Бу нәрсә?",
                                "Бу китап."
                            ],
                            [
                                "Урын соравы",
                                "Кайда?",
                                "Син кайда?",
                                "Мин өйдә."
                            ]
                        ],
                        "attention": "Сорау сүзе булган җөмләдә -мы/-ме кушымчасы куелмый.",
                        "mnemonic": "Син бараммы? vs Син кайда барасың?",
                        "mistakes": [
                            {
                                "wrong": "Кайда син барасыңмы?",
                                "right": "Кайда син барасың?"
                            }
                        ],
                        "check_items": [
                            "-мы/-ме сорау кушымчасын дөрес куллану",
                            "Төп сорау сүзләрен кулланып сорау бирү"
                        ],
                        "quiz": [
                            {
                                "q": "«Син аңлыйсың...» җөмләсенә кайсы сорау кушымчасы тиеш?",
                                "opts": [
                                    "-мы",
                                    "-ме",
                                    "-мысың"
                                ],
                                "correct": 0,
                                "explain": "«Аңлыйсың» калын сузыкка тәмамлана: аңлыйсыңмы."
                            }
                        ]
                    },
                    {
                        "slug": "sannar-ham-vakyt",
                        "title": "Саннар, вакыт һәм атна көннәре",
                        "subtitle": "Микдар саннары, сәгать һәм атна көннәре",
                        "page_num": 10,
                        "table_head": [
                            "Саннар",
                            "Атна көннәре",
                            "Вакыт сораулары",
                            "Мисал җавап"
                        ],
                        "table_rows": [
                            [
                                "1 - бер, 2 - ике, 3 - өч",
                                "Дүшәмбе",
                                "Сәгать күпме?",
                                "Сәгать өч."
                            ],
                            [
                                "4 - дүрт, 5 - биш",
                                "Шишәмбе",
                                "Кайчан?",
                                "Дүшәмбе көнне."
                            ],
                            [
                                "6 - алты, 7 - җиде",
                                "Чәршәмбе",
                                "Кайсы айда?",
                                "Май айында."
                            ]
                        ],
                        "attention": "Татар телендә саннардан соң исемнәр берлектә кала (биш китап, ике укучы).",
                        "mnemonic": "Биш китап (not *биш китаплар!).",
                        "mistakes": [
                            {
                                "wrong": "биш китаплар",
                                "right": "биш китап"
                            }
                        ],
                        "check_items": [
                            "1дән 10га кадәр саннарны белү",
                            "Саннан соң исемнең берлектә куелуын истә тоту"
                        ],
                        "quiz": [
                            {
                                "q": "«5 books» татарча ничек була?",
                                "opts": [
                                    "биш китаплар",
                                    "биш китап",
                                    "биш китапның"
                                ],
                                "correct": 1,
                                "explain": "Татар телендә саннан соң исем берлек формада кулланыла: биш китап."
                            }
                        ]
                    },
                    {
                        "slug": "bar-ham-yuk",
                        "title": "Бар һәм Юк конструкциясе",
                        "subtitle": "Барлык һәм юклыкны белдерү",
                        "page_num": 11,
                        "table_head": [
                            "Конструкция",
                            "Мәгънәсе",
                            "Мисал җөмлә",
                            "Иялек белән"
                        ],
                        "table_rows": [
                            [
                                "Бар",
                                "Есть / Существует",
                                "Өйдә китап бар.",
                                "Минем китабым бар."
                            ],
                            [
                                "Юк",
                                "Нет / Отсутствует",
                                "Өйдә китап юк.",
                                "Минем китабым юк."
                            ]
                        ],
                        "attention": "Барлыкны белдерү өчен «бар», юклык өчен «юк» сүзе җөмлә ахырына куела.",
                        "mnemonic": "Китап бар (Есть книга) / Китап юк (Нет книги).",
                        "mistakes": [
                            {
                                "wrong": "Минем китап бар түгел",
                                "right": "Минем китабым юк"
                            }
                        ],
                        "check_items": [
                            "«Бар» һәм «юк» сүзләрен куллану",
                            "Иялек кушымчалары белән бар/юк конструкциясен төзү"
                        ],
                        "quiz": [
                            {
                                "q": "«I have a book» татарча ничек була?",
                                "opts": [
                                    "Минем китап бар",
                                    "Минем китабым бар",
                                    "Мин китап бар"
                                ],
                                "correct": 1,
                                "explain": "Иялек алмашы «минем» белән «китабым бар» әйтелә."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-4",
                "file": "bulek-4.html",
                "title": "4 нче бүлек · Сыйфатлар, бәйлекләр һәм җөмлә тәртибе",
                "subtitle": "Сыйфатлар, бәйлекләр (бәйлек сүзләр) һәм SOV җөмлә төзелеше",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "syfatlar",
                        "title": "Сыйфатлар һәм сыйфатлану",
                        "subtitle": "Сыйфатларның исем белән ярашуы",
                        "page_num": 12,
                        "table_head": [
                            "Сыйфат",
                            "Исем белән",
                            "Мәгънәсе",
                            "Үзгәрешлелек"
                        ],
                        "table_rows": [
                            [
                                "олы",
                                "олы йорт",
                                "большой дом",
                                "Үзгәрми"
                            ],
                            [
                                "яңа",
                                "яңа китап",
                                "новая книга",
                                "Үзгәрми"
                            ],
                            [
                                "кызыл",
                                "кызыл алмалар",
                                "красные яблоки",
                                "Үзгәрми"
                            ]
                        ],
                        "attention": "Татар телендә сыйфатлар исем алдында килә һәм сан яки килеш буенча үзгәрми.",
                        "mnemonic": "Яңа китап -> яңа китаплар (сыйфат үзгәрми!).",
                        "mistakes": [
                            {
                                "wrong": "яңалар китаплар",
                                "right": "яңа китаплар"
                            }
                        ],
                        "check_items": [
                            "Сыйфатның исем алдында куелуын аңлау",
                            "Сыйфатның сан буенча үзгәрмәвен истә тоту"
                        ],
                        "quiz": [
                            {
                                "q": "«Red apples» татарча ничек була?",
                                "opts": [
                                    "кызыллар алмалар",
                                    "кызыл алмалар",
                                    "кызыл алма"
                                ],
                                "correct": 1,
                                "explain": "Сыйфат күплек кушымчасын алмый: кызыл алмалар."
                            }
                        ]
                    },
                    {
                        "slug": "baileklar-ham-soz-tartiby",
                        "title": "Бәйлекләр һәм җөмләдә сүзләр тәртибе",
                        "subtitle": "Бәйлекләр (соң, өчен, белән) һәм SOV (Ия-Тәмамлаучы-Хәбәр) тәртибе",
                        "page_num": 13,
                        "table_head": [
                            "Бәйлек / Тәртип",
                            "Мисал",
                            "Җөмлә тәртибе (SOV)",
                            "Мәгънәсе"
                        ],
                        "table_rows": [
                            [
                                "белән (с)",
                                "дос белән",
                                "Мин дус белән сөйләшәм.",
                                "Я говорю с другом."
                            ],
                            [
                                "өчен (для)",
                                "син өчен",
                                "Мин син өчен язам.",
                                "Я пишу для тебя."
                            ],
                            [
                                "соң (после)",
                                "дәрестән соң",
                                "Дәрестән соң барабыз.",
                                "Идем после урока."
                            ]
                        ],
                        "attention": "Татар телендә предлоглар юк, бәйлекләр исемнән СОҢ килә. Фигыль (хәбәр) һәрвакыт җөмлә АХЫРЫНДА куела.",
                        "mnemonic": "SOV: Ия (Subject) + Тәмамлаучы (Object) + Фигыль (Verb).",
                        "mistakes": [
                            {
                                "wrong": "Мин укыйм китап",
                                "right": "Мин китап укыйм"
                            }
                        ],
                        "check_items": [
                            "Бәйлекләрнең исемнән соң куелуын аңлау",
                            "Фигыльне җөмлә ахырына куеп SOV җөмлә төзү"
                        ],
                        "quiz": [
                            {
                                "q": "Татар телендә фигыль җөмләнең кайда куела?",
                                "opts": [
                                    "Башында",
                                    "Уртасында",
                                    "Ахырында"
                                ],
                                "correct": 2,
                                "explain": "Татар телендә фигыль (хәбәр) традицион рәвештә җөмлә ахырында куела (SOV)."
                            }
                        ]
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
                "id": "bulek-1",
                "file": "bulek-1.html",
                "title": "1-се бүлек · Исем һәм килештәр",
                "subtitle": "Сингармонизм кағиҙәләре, 6 килеш һәм эйәлек аффикстары",
                "stripe": "#1c9483",
                "topics": [
                    {
                        "slug": "haudhaktar-hahem-affikstar",
                        "title": "Һуҙынҡылар һәм аффикстар",
                        "subtitle": "Башҡорт телендә сингармонизм кағиҙәһе",
                        "page_num": 1,
                        "table_head": [
                            "Төр",
                            "Һуҙынҡылар",
                            "Мисал",
                            "Аффикс мисалы"
                        ],
                        "table_rows": [
                            [
                                "Ҡалындар",
                                "а, о, у, ы",
                                "ҡала (город)",
                                "ҡала-ҙа"
                            ],
                            [
                                "Нескә һуҙынҡылар",
                                "ә, ө, ү, и, е",
                                "өй (дом)",
                                "өй-ҙә"
                            ]
                        ],
                        "attention": "Һүҙҙең һуңғы һуҙынҡыһы аффикстың төрөн билдәләй.",
                        "mnemonic": "Ҡалын өнгә — ҡалын аффикс!",
                        "mistakes": [
                            {
                                "wrong": "өйҙа",
                                "right": "өйҙә"
                            }
                        ],
                        "check_items": [
                            "Һуҙынҡыларҙың бәйләнешен аңлау",
                            "Сингармонизм буйынса аффикс ҡушыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Өй» һүҙенә ниндәй урын-ваҡыт аффиксы ҡушыла?",
                                "opts": [
                                    "-ҙа",
                                    "-ҙә",
                                    "-та"
                                ],
                                "correct": 1,
                                "explain": "«Өй» — нескә һүҙ, шуға күрә «-ҙә» аффиксы ҡушыла."
                            }
                        ]
                    },
                    {
                        "slug": "kileshtar",
                        "title": "Башҡорт теленең килештәре",
                        "subtitle": "Төп, эйәлек, төбәү, түшәм, урын-ваҡыт, сығыш",
                        "page_num": 2,
                        "table_head": [
                            "Килеш",
                            "Һорауҙар",
                            "Аффикс",
                            "Мисал (мәктәп)"
                        ],
                        "table_rows": [
                            [
                                "Төп килеш",
                                "Кем? Нәмә?",
                                "—",
                                "мәктәп"
                            ],
                            [
                                "Эйәлек килеш",
                                "Кемдең? Нәмәнең?",
                                "-тың / -нең",
                                "мәктәптең"
                            ],
                            [
                                "Төбәү килеш",
                                "Кемгә? Нәмәгә?",
                                "-ға / -гә / -ҡа / -кә",
                                "мәктәпкә"
                            ],
                            [
                                "Түшәм килеш",
                                "Кемде? Нәмәне?",
                                "-ны / -не",
                                "мәктәпне"
                            ],
                            [
                                "Урын-ваҡыт",
                                "Кемдә? Нәмәдә?",
                                "-ла / -лә / -та / -тә",
                                "мәктәптә"
                            ],
                            [
                                "Сығыш килеш",
                                "Кемдән? Нәмәнән?",
                                "-дан / -дән / -тан / -тән",
                                "мәктәптән"
                            ]
                        ],
                        "attention": "Башҡорт телендә 6 төп килеш бар. Аффикстар сингармонизмға буйһона.",
                        "mnemonic": "Төп, Эйәлек, Төбәү, Түшәм, Урын-ваҡыт, Сығыш.",
                        "mistakes": [
                            {
                                "wrong": "мәктәпға",
                                "right": "мәктәпкә"
                            }
                        ],
                        "check_items": [
                            "6 килештең һорауҙарын белеү",
                            "Килеш аффикстарын дөрөҫ ҡушыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Ҡала» һүҙенә сығыш килеш аффиксы ҡайһы?",
                                "opts": [
                                    "-дан",
                                    "-дән",
                                    "-тан"
                                ],
                                "correct": 0,
                                "explain": "Ҡала — ҡалын һүҙ, шуға күрә «-дан»."
                            }
                        ]
                    },
                    {
                        "slug": "eyalek-affikstary",
                        "title": "Эйәлек аффикстары",
                        "subtitle": "Минең, һинең, анык/айырым эйәлек формалары",
                        "page_num": 3,
                        "table_head": [
                            "Зат",
                            "Алмаш",
                            "Аффикс",
                            "Мисал (китап)"
                        ],
                        "table_rows": [
                            [
                                "1-се зат",
                                "минең",
                                "-м / -ым / -ем",
                                "китабым"
                            ],
                            [
                                "2-се зат",
                                "һинең",
                                "-ң / -ың / -ең",
                                "китабың"
                            ],
                            [
                                "3-се зат",
                                "анының",
                                "-һы / -һе / -ы / -е",
                                "китабы"
                            ],
                            [
                                "1-се зат күплек",
                                "беҙҙең",
                                "-быҙ / -беҙ",
                                "китабыбыҙ"
                            ],
                            [
                                "2-се зат күплек",
                                "һеҙҙең",
                                "-ғыҙ / -геҙ",
                                "китабығыҙ"
                            ],
                            [
                                "3-се зат күплек",
                                "оларҙың",
                                "-лары / -ләре",
                                "китаптары"
                            ]
                        ],
                        "attention": "Башҡорт телендә эйәлек аффикстары һүҙҙең һуңғы өнөнә ярашлы үҙгәрә.",
                        "mnemonic": "Минең китабым, һинең китабың, анының китабы.",
                        "mistakes": [
                            {
                                "wrong": "минең китапсы",
                                "right": "минең китабым"
                            }
                        ],
                        "check_items": [
                            "Эйәлек аффикстарын дөрөҫ ҡушыу",
                            "Заттар буйынса эйәлекте ҡулланыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Минең» алмашы менән ҡайһы форма дөрөҫ?",
                                "opts": [
                                    "китабым",
                                    "китабың",
                                    "китабы"
                                ],
                                "correct": 0,
                                "explain": "Минең өсөн -м/-ым аффиксы ҡушыла: китабым."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-2",
                "file": "bulek-2.html",
                "title": "2-се бүлек · Зат алмаштары һәм ҡылымдар",
                "subtitle": "Зат алмаштары, хәҙерге, үткән, киләсәк заман һәм инҡар формаһы",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "zat-almashthary",
                        "title": "Зат алмаштары",
                        "subtitle": "Мин, һин, ол/ул, беҙ, һеҙ, олар",
                        "page_num": 4,
                        "table_head": [
                            "Зат",
                            "Берлек",
                            "Күплек",
                            "Түшәм килеш"
                        ],
                        "table_rows": [
                            [
                                "1-се зат",
                                "мин (я)",
                                "беҙ (мы)",
                                "мине"
                            ],
                            [
                                "2-се зат",
                                "һин (ты)",
                                "һеҙ (вы)",
                                "һине"
                            ],
                            [
                                "3-се зат",
                                "ул (он/она)",
                                "олар (они)",
                                "аны"
                            ]
                        ],
                        "attention": "Зат алмаштары килеш менән үҙгәргәндә нигеҙҙә үҙгәреш булыуы мөмкин (мин -> мине, ул -> аны).",
                        "mnemonic": "Мин, һин, ул — беҙ, һеҙ, олар.",
                        "mistakes": [
                            {
                                "wrong": "улны",
                                "right": "аны"
                            }
                        ],
                        "check_items": [
                            "Зат алмаштарын таныу",
                            "Алмаштарҙың килеш формаларын ҡулланыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Ул» алмашының түшәм килеше ҡайһы?",
                                "opts": [
                                    "улны",
                                    "аны",
                                    "анының"
                                ],
                                "correct": 1,
                                "explain": "«Ул» алмашы түшәм килештә «аны» формаһын ала."
                            }
                        ]
                    },
                    {
                        "slug": "hadherge-zaman",
                        "title": "Хәҙерге заман ҡылымдар",
                        "subtitle": "Ҡылымдың хәҙерге заман аффикстары",
                        "page_num": 5,
                        "table_head": [
                            "Зат",
                            "Алмаш",
                            "Мисал (уҡыу)",
                            "Мисал (яҙыу)"
                        ],
                        "table_rows": [
                            [
                                "1-се зат",
                                "мин",
                                "уҡыйым",
                                "яҙам"
                            ],
                            [
                                "2-се зат",
                                "һин",
                                "уҡыйһың",
                                "яҙаһың"
                            ],
                            [
                                "3-се зат",
                                "ул",
                                "уҡый",
                                "яҙа"
                            ],
                            [
                                "1-се зат күплек",
                                "беҙ",
                                "уҡыйбыҙ",
                                "яҙабыҙ"
                            ],
                            [
                                "2-се зат күплек",
                                "һеҙ",
                                "уҡыйһығыҙ",
                                "яҙаһығыҙ"
                            ],
                            [
                                "3-се зат күплек",
                                "олар",
                                "уҡыйҙар",
                                "яҙалар"
                            ]
                        ],
                        "attention": "Хәҙерге заманда ҡылым тамырына -а/-ә яки -ый/-ей аффиксы ҡушыла.",
                        "mnemonic": "Мин уҡыйым, һин уҡыйһың, ул уҡый.",
                        "mistakes": [
                            {
                                "wrong": "Мин уҡыйһың",
                                "right": "Мин уҡыйым"
                            }
                        ],
                        "check_items": [
                            "Хәҙерге заман ҡылымдарын заттар буйынса үҙгәртеү",
                            "Зат аффикстарын дөрөҫ ҡушыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Беҙ» (күплек) өсөн ҡайһы форма дөрөҫ?",
                                "opts": [
                                    "уҡыйым",
                                    "уҡыйбыҙ",
                                    "уҡыйҙар"
                                ],
                                "correct": 1,
                                "explain": "«Беҙ» заты өсөн -быҙ/-беҙ аффиксы ҡушыла: уҡыйбыҙ."
                            }
                        ]
                    },
                    {
                        "slug": "utkan-zaman",
                        "title": "Үткән заман ҡылымдар",
                        "subtitle": "Билдәле үткән заман (-ны/-не/-ды/-де/-ты/-те)",
                        "page_num": 6,
                        "table_head": [
                            "Зат",
                            "Алмаш",
                            "Мисал (яҙыу)",
                            "Мисал (килеү)"
                        ],
                        "table_rows": [
                            [
                                "1-се зат",
                                "мин",
                                "яҙҙым",
                                "килдем"
                            ],
                            [
                                "2-се зат",
                                "һин",
                                "яҙҙың",
                                "килдең"
                            ],
                            [
                                "3-се зат",
                                "ул",
                                "яҙҙы",
                                "килде"
                            ],
                            [
                                "1-се зат күплек",
                                "беҙ",
                                "яҙҙыҡ",
                                "килдек"
                            ]
                        ],
                        "attention": "Билдәле үткән заман аффикстары -ҙы/-ҙе / -ды/-де / -ты/-те төрҙәрендә була.",
                        "mnemonic": "Мин яҙҙым, һин яҙҙың, ул яҙҙы.",
                        "mistakes": [
                            {
                                "wrong": "Мин яҙҙы",
                                "right": "Мин яҙҙым"
                            }
                        ],
                        "check_items": [
                            "Үткән заман аффикстарын дөрөҫ ҡушыу",
                            "Зат аффикстарын ҡулланыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Мин» өсөн үткән заман аффиксы ҡайһы?",
                                "opts": [
                                    "-ҙым",
                                    "-ҙың",
                                    "-ҙы"
                                ],
                                "correct": 0,
                                "explain": "Мин яҙҙым (-ҙым)."
                            }
                        ]
                    },
                    {
                        "slug": "kilesak-zaman",
                        "title": "Киләсәк заман ҡылымдар",
                        "subtitle": "Билдәле киләсәк заман (-асаҡ/-әсәк)",
                        "page_num": 7,
                        "table_head": [
                            "Зат",
                            "Алмаш",
                            "Мисал (барыу)",
                            "Мисал (эшләү)"
                        ],
                        "table_rows": [
                            [
                                "1-се зат",
                                "мин",
                                "барасаҡмын",
                                "эшләйәсәкмен"
                            ],
                            [
                                "2-се зат",
                                "һин",
                                "барасаҡһың",
                                "эшләйәсәкһең"
                            ],
                            [
                                "3-се зат",
                                "ул",
                                "барасаҡ",
                                "эшләйәсәк"
                            ]
                        ],
                        "attention": "Билдәле киләсәк заман аффиксы -асаҡ/-әсәк яки -ясаҡ/-йәсәк.",
                        "mnemonic": "Мин барасаҡмын (Я пойду).",
                        "mistakes": [
                            {
                                "wrong": "Мин барасаҡ",
                                "right": "Мин барасаҡмын"
                            }
                        ],
                        "check_items": [
                            "Киләсәк заман формаларын яһау",
                            "Зат аффикстарын дөрөҫ ҡушыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Мин» затында киләсәк заман формаһы ҡайһы?",
                                "opts": [
                                    "барасаҡмын",
                                    "барасаҡһың",
                                    "барасаҡ"
                                ],
                                "correct": 0,
                                "explain": "Мин барасаҡмын."
                            }
                        ]
                    },
                    {
                        "slug": "inqar-formahy",
                        "title": "Ҡылымдың инҡар формаһы",
                        "subtitle": "-май / -мәй аффиксы менән инҡар яһау",
                        "page_num": 8,
                        "table_head": [
                            "Зат",
                            "Раҫлау формаһы",
                            "Инҡар аффиксы",
                            "Инҡар формаһы"
                        ],
                        "table_rows": [
                            [
                                "мин",
                                "уҡыйым",
                                "-май/-мәй",
                                "уҡымайым"
                            ],
                            [
                                "һин",
                                "яҙаһың",
                                "-май/-мәй",
                                "яҙмайһың"
                            ],
                            [
                                "ул",
                                "бара",
                                "-май/-мәй",
                                "бармай"
                            ],
                            [
                                "беҙ",
                                "эшләйбеҙ",
                                "-май/-мәй",
                                "эшләмәйбеҙ"
                            ]
                        ],
                        "attention": "Башҡорт телендә ҡылымдың инҡар формаһы -май/-мәй аффиксы ҡушып яһала.",
                        "mnemonic": "Яҙам -> Яҙмайым; Ишләйем -> Эшләмәйем.",
                        "mistakes": [
                            {
                                "wrong": "Мин яҙам түгел",
                                "right": "Мин яҙмайым"
                            }
                        ],
                        "check_items": [
                            "Инҡар формаһын яһай белеү",
                            "-май/-мәй аффикстарын сингармонизм буйынса ҡулланыу"
                        ],
                        "quiz": [
                            {
                                "q": "«Ул (барыу)» ҡылымының инҡар формаһы ҡайһы?",
                                "opts": [
                                    "бармай",
                                    "бара түгел",
                                    "бармайым"
                                ],
                                "correct": 0,
                                "explain": "3-се затта инҡар формаһы «бармай» була."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-3",
                "file": "bulek-3.html",
                "title": "3-сө бүлек · Һорауҙар, һандар һәм бар/юҡ",
                "subtitle": "Һорау аффикстары, һандар, ваҡыт һәм бар/юҡ конструкциялары",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "horau-formahy-hahem-horau-huthare",
                        "title": "Һорау яһалышы һәм һорау һүҙҙәре",
                        "subtitle": "-мы/-ме аффиксы һәм Кем? Нәмә? Ҡайҙа?",
                        "page_num": 9,
                        "table_head": [
                            "Төр",
                            "Һорау элементы",
                            "Мисал һорау",
                            "Яуап мисалы"
                        ],
                        "table_rows": [
                            [
                                "Һорау аффиксы",
                                "-мы / -ме / -мыһың",
                                "Һин аңлайһыңмы?",
                                "Әйе, аңлайым."
                            ],
                            [
                                "Зат һорауы",
                                "Кем?",
                                "Был кем?",
                                "Был уҡытыусы."
                            ],
                            [
                                "Нәмә һорауы",
                                "Нәмә?",
                                "Был нәмә?",
                                "Был китап."
                            ],
                            [
                                "Урын һорауы",
                                "Ҡайҙа?",
                                "Һин ҡайҙа?",
                                "Мин өйҙә."
                            ]
                        ],
                        "attention": "Һорау һүҙе булған һөйләмдә -мы/-ме аффиксы ҡуйылмай.",
                        "mnemonic": "Һин бараһыңмы? vs Һин ҡайҙа бараһың?",
                        "mistakes": [
                            {
                                "wrong": "Ҡайҙа һин бараһыңмы?",
                                "right": "Ҡайҙа һин бараһың?"
                            }
                        ],
                        "check_items": [
                            "-мы/-ме һорау аффиксын дөрөҫ ҡулланыу",
                            "Төп һорау һүҙҙәрен ҡулланып һорау биреү"
                        ],
                        "quiz": [
                            {
                                "q": "«Һин аңлайһың...» һөйләменә ҡайһы һорау аффиксы тейеш?",
                                "opts": [
                                    "-мы",
                                    "-ме",
                                    "-мыһың"
                                ],
                                "correct": 0,
                                "explain": "«Аңлайһың» ҡалын һүҙ: аңлайһыңмы."
                            }
                        ]
                    },
                    {
                        "slug": "handar-hahem-vaqyt",
                        "title": "Һандар, ваҡыт һәм аҙна көндәре",
                        "subtitle": "Миҡдар һандары, сәғәт һәм аҙна көндәре",
                        "page_num": 10,
                        "table_head": [
                            "Һандар",
                            "Аҙна көндәре",
                            "Ваҡыт һорауҙары",
                            "Мисал яуап"
                        ],
                        "table_rows": [
                            [
                                "1 - бер, 2 - ике, 3 - өс",
                                "Дүшәмбе",
                                "Сәғәт нисә?",
                                "Сәғәт өс."
                            ],
                            [
                                "4 - дүрт, 5 - биш",
                                "Шишәмбе",
                                "Ҡасан?",
                                "Дүшәмбе көнө."
                            ],
                            [
                                "6 - алты, 7 - ете",
                                "Шаршамбы",
                                "Ҡайһы айҙа?",
                                "Май айында."
                            ]
                        ],
                        "attention": "Башҡорт телендә һандарҙан һуң исемдәр берлектә ҡала (биш китап).",
                        "mnemonic": "Биш китап (not *биш китаптар!).",
                        "mistakes": [
                            {
                                "wrong": "биш китаптар",
                                "right": "биш китап"
                            }
                        ],
                        "check_items": [
                            "1-ҙән 10-ға тиклем һандарҙы белеү",
                            "Һандан һуң исемдең берлектә ҡалыуын иҫтә тотоу"
                        ],
                        "quiz": [
                            {
                                "q": "«5 books» башҡортса нәмә була?",
                                "opts": [
                                    "биш китаптар",
                                    "биш китап",
                                    "биш китаптың"
                                ],
                                "correct": 1,
                                "explain": "Башҡорт телендә һандан һуң исем берлек формала ҡулланыла: биш китап."
                            }
                        ]
                    },
                    {
                        "slug": "bar-hahem-yuq",
                        "title": "Бар һәм Юҡ конструкцияһы",
                        "subtitle": "Барлыҡты һәм юҡлыҡты белдереү",
                        "page_num": 11,
                        "table_head": [
                            "Конструкция",
                            "Мәғәнәһе",
                            "Мисал һөйләм",
                            "Эйәлек менән"
                        ],
                        "table_rows": [
                            [
                                "Бар",
                                "Есть / Существует",
                                "Өйҙә китап бар.",
                                "Минең китабым бар."
                            ],
                            [
                                "Юҡ",
                                "Нет / Отсутствует",
                                "Өйҙә китап юҡ.",
                                "Минең китабым юҡ."
                            ]
                        ],
                        "attention": "Барлыҡты белдереү өсөн «бар», юҡлыҡ өсөн «юҡ» һүҙе һөйләм аҙағына ҡуйыла.",
                        "mnemonic": "Китап бар / Китап юҡ.",
                        "mistakes": [
                            {
                                "wrong": "Минең китап бар түгел",
                                "right": "Минең китабым юҡ"
                            }
                        ],
                        "check_items": [
                            "«Бар» һәм «юҡ» һүҙҙәрен ҡулланыу",
                            "Эйәлек аффикстары менән бар/юҡ конструкцияһын төҙөү"
                        ],
                        "quiz": [
                            {
                                "q": "«I have a book» башҡортса нисек була?",
                                "opts": [
                                    "Минең китап бар",
                                    "Минең китабым бар",
                                    "Мин китап бар"
                                ],
                                "correct": 1,
                                "explain": "Эйәлек алмашы «минең» менән «китабым бар» әйтелә."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-4",
                "file": "bulek-4.html",
                "title": "4-се бүлек · Сыйфаттар, бәйләүестәр һәм һөйләм тәртибе",
                "subtitle": "Сыйфаттар, бәйләүестәр һәм SOV һөйләм төҙөлөшө",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "syfatthar",
                        "title": "Сыйфаттар һәм ярашыу",
                        "subtitle": "Сыйфаттың исем менән бәйләнеше",
                        "page_num": 12,
                        "table_head": [
                            "Сыйфат",
                            "Исем менән",
                            "Мәғәнәһе",
                            "Үҙгәрешһеҙлек"
                        ],
                        "table_rows": [
                            [
                                "ыласын",
                                "ҙур өй",
                                "большой дом",
                                "Үҙгәрмәй"
                            ],
                            [
                                "яңы",
                                "яңы китап",
                                "новая книга",
                                "Үҙгәрмәй"
                            ],
                            [
                                "ҡыҙыл",
                                "ҡыҙыл алмалар",
                                "красные яблоки",
                                "Үҙгәрмәй"
                            ]
                        ],
                        "attention": "Башҡорт телендә сыйфаттар исем алдында килә һәм һан яки килеш буйынса үҙгәрмәй.",
                        "mnemonic": "Яңы китап -> яңы китаптар.",
                        "mistakes": [
                            {
                                "wrong": "яңылар китаптар",
                                "right": "яңы китаптар"
                            }
                        ],
                        "check_items": [
                            "Сыйфаттың исем алдында ҡуйылыуын аңлау",
                            "Сыйфаттың үҙгәрмәүен иҫтә тотоу"
                        ],
                        "quiz": [
                            {
                                "q": "«Red apples» башҡортса нисек була?",
                                "opts": [
                                    "ҡыҙылдар алмалар",
                                    "ҡыҙыл алмалар",
                                    "ҡыҙыл алма"
                                ],
                                "correct": 1,
                                "explain": "Сыйфат күплек аффиксын алмай: ҡыҙыл алмалар."
                            }
                        ]
                    },
                    {
                        "slug": "bailauestar-hahem-hulam-tartibe",
                        "title": "Бәйләүестәр һәм һөйләмдә һүҙҙәр тәртибе",
                        "subtitle": "Бәйләүестәр (һуң, өсөн, менән) һәм SOV (Ийә-Тәмәмлаусы-Хәбәр) төҙөлөшө",
                        "page_num": 13,
                        "table_head": [
                            "Бәйләүес / Тәртип",
                            "Мисал",
                            "Һөйләм тәртибе (SOV)",
                            "Мәғәнәһе"
                        ],
                        "table_rows": [
                            [
                                "менән (с)",
                                "доҫ менән",
                                "Мин доҫ менән һөйләшәм.",
                                "Я говорю с другом."
                            ],
                            [
                                "өсөн (для)",
                                "һин өсөн",
                                "Мин һин өсөн яҙам.",
                                "Я пишу для тебя."
                            ],
                            [
                                "һуң (после)",
                                "дәрестән һуң",
                                "Дәрестән һуң барабыҙ.",
                                "Идем после урока."
                            ]
                        ],
                        "attention": "Башҡорт телендә предлогтар юҡ, бәйләүестәр исемдән ҺУҢ килә. Ҡылым һәр ваҡыт һөйләм АҘАҒЫНДА ҡуйыла.",
                        "mnemonic": "SOV: Ийә (Subject) + Тәмәмлаусы (Object) + Ҡылым (Verb).",
                        "mistakes": [
                            {
                                "wrong": "Мин уҡыйым китап",
                                "right": "Мин китап уҡыйым"
                            }
                        ],
                        "check_items": [
                            "Бәйләүестәрҙең исемдән һуң килеүен аңлау",
                            "Ҡылымды һөйләм аҙағына ҡуйып SOV һөйләм төҙөү"
                        ],
                        "quiz": [
                            {
                                "q": "Башҡорт телендә ҡылым һөйләмдең ҡайҙа ҡуйыла?",
                                "opts": [
                                    "Башында",
                                    "Уртаһында",
                                    "Аҙағында"
                                ],
                                "correct": 2,
                                "explain": "Башҡорт телендә ҡылым традицион рәүештә һөйләм аҙағында ҡуйыলা (SOV)."
                            }
                        ]
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
                "id": "pay-1",
                "file": "pay-1.html",
                "title": "1-мĕш пай · Сăмах тытăмĕ тата падежсем",
                "subtitle": "Чăваш чĕлхин сингармонизмĕ, 8 падежĕ тата хуçаланакан аффикссем",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "sasamssam-tata-singarmonizm",
                        "title": "Сасăсем тата сингармонизм",
                        "subtitle": "Хытă тата çемçе сасăсен калăпăшĕ",
                        "page_num": 1,
                        "table_head": [
                            "Тĕсĕ",
                            "Уçă сасăсем",
                            "Тĕслĕх",
                            "Аффикс тĕслĕхĕ"
                        ],
                        "table_rows": [
                            [
                                "Хытă сасăсем",
                                "а, о, у, ы",
                                "яла (деревня)",
                                "ял-та"
                            ],
                            [
                                "Çемçе сасăсем",
                                "ĕ, ĕ, ӳ, и",
                                "çĕр (земля)",
                                "çĕр-те"
                            ]
                        ],
                        "attention": "Сăмахри юлашки уçă сасă аффикс тĕсне кăтартать.",
                        "mnemonic": "Хытă сасма хытă аффикс хушăнать.",
                        "mistakes": [
                            {
                                "wrong": "ялта (çемçе)",
                                "right": "ялта (хытă)"
                            }
                        ],
                        "check_items": [
                            "Уçă сасăсен уйрăмлăхĕсене пĕлни",
                            "Аффиксене тĕрĕс хушас пĕлни"
                        ],
                        "quiz": [
                            {
                                "q": "«Ял» сăмахне мĕнле аффикс хушăнать?",
                                "opts": [
                                    "-та",
                                    "-те",
                                    "-ти"
                                ],
                                "correct": 0,
                                "explain": "«Ял» — хытă сасăллă сăмах, шунпа «-та» аффикс хушăнать."
                            }
                        ]
                    },
                    {
                        "slug": "padezhsem",
                        "title": "Чăваш чĕлхин 8 падежĕ",
                        "subtitle": "Ят, илек, вырăн, туху, пĕрлештерӳ тата ытти падежсем",
                        "page_num": 2,
                        "table_head": [
                            "Падеж",
                            "Ыйтусем",
                            "Аффикс",
                            "Тĕслĕх (кил)"
                        ],
                        "table_rows": [
                            [
                                "Ят падежĕ",
                                "Кам? Мĕн?",
                                "—",
                                "кил"
                            ],
                            [
                                "Илек падежĕ",
                                "Камăн? Мĕнĕн?",
                                "-ăн / -ĕн",
                                "килĕн"
                            ],
                            [
                                "Вырăн падежĕ",
                                "Камра? Мĕнре?",
                                "-ра / -ре / -та / -те",
                                "килте"
                            ],
                            [
                                "Туху падежĕ",
                                "Камран? Мĕнрен?",
                                "-ран / -рен / -тан / -тен",
                                "килтрен"
                            ],
                            [
                                "Пĕрлештерӳ падежĕ",
                                "Кампа? Мĕнпе?",
                                "-па / -пе",
                                "килпе"
                            ],
                            [
                                "Причино-вырăн",
                                "Камшăн? Мĕншĕн?",
                                "-шăн / -шĕн",
                                "килшĕн"
                            ]
                        ],
                        "attention": "Чăваш чĕлхинче 8 падеж бар. Аффикссем сингарнонизма пăхăнаççĕ.",
                        "mnemonic": "Ят, Илек, Вырăн, Туху, Пĕрлештерӳ...",
                        "mistakes": [
                            {
                                "wrong": "килпа",
                                "right": "килпе"
                            }
                        ],
                        "check_items": [
                            "Падеж ыйтăվĕсене пĕлни",
                            "Падеж аффиксĕсене тĕрĕс хушни"
                        ],
                        "quiz": [
                            {
                                "q": "«Кил» (çемçе) сăмахне мĕнле пĕрлештерӳ аффиксĕ хушăнать?",
                                "opts": [
                                    "-па",
                                    "-пе",
                                    "-та"
                                ],
                                "correct": 1,
                                "explain": "Килпе (-пе)."
                            }
                        ]
                    },
                    {
                        "slug": "hutsalanakan-affikssem",
                        "title": "Хуçаланакан аффикссем (Possessive)",
                        "subtitle": "Манăн, санăн, унăн суффиксĕсем",
                        "page_num": 3,
                        "table_head": [
                            "Сăпат",
                            "Местоимени",
                            "Аффикс",
                            "Тĕслĕх (кĕнеке)"
                        ],
                        "table_rows": [
                            [
                                "1-мĕш сăпат",
                                "манăн",
                                "-м / -ăм / -ĕм",
                                "кĕнекем"
                            ],
                            [
                                "2-мĕш сăпат",
                                "санăн",
                                "-у / -ӳ / -у яки -а",
                                "кĕнекӳ"
                            ],
                            [
                                "3-мĕш сăпат",
                                "унăн",
                                "-ĕ / -ă / -е",
                                "кĕнеки"
                            ],
                            [
                                "1-мĕш сăпат нумай",
                                "пирĕн",
                                "-мăр / -мĕр",
                                "кĕнекемĕр"
                            ]
                        ],
                        "attention": "Чăваш чĕлхинче хуçаланакан аффикс сăмах хыçне хушăнать.",
                        "mnemonic": "Манăн кĕнекем, санăн кĕнекӳ, унăн кĕнеки.",
                        "mistakes": [
                            {
                                "wrong": "манăн кĕнеки",
                                "right": "манăн кĕнекем"
                            }
                        ],
                        "check_items": [
                            "Хуçаланакан аффиксене уçăмлă хушни",
                            "Сăпатсене тĕрĕс уйăрни"
                        ],
                        "quiz": [
                            {
                                "q": "«Манăн» сăмахпа кайси тĕрĕс?",
                                "opts": [
                                    "кĕнекем",
                                    "кĕнекӳ",
                                    "кĕнеки"
                                ],
                                "correct": 0,
                                "explain": "Манăн (моя) кĕнекем (-м/ăм/ĕм)."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "pay-2",
                "file": "pay-2.html",
                "title": "2-мĕш пай · Сăпат местоименисем тата глаголсем",
                "subtitle": "Сăпат местоименисем, хальхи, иртнĕ, пулаяс вăхăт тата отрицани",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "sapat-mestoimenisem",
                        "title": "Сăпат местоименисем",
                        "subtitle": "Эпĕ, эсĕ, вăл, эпир, эсир, вĕсем",
                        "page_num": 4,
                        "table_head": [
                            "Сăпат",
                            "Пĕррелекен",
                            "Нумайлакан",
                            "Илек падежĕ"
                        ],
                        "table_rows": [
                            [
                                "1-мĕш сăпат",
                                "эпĕ (я)",
                                "эпир (мы)",
                                "манăн"
                            ],
                            [
                                "2-мĕш сăпат",
                                "эсĕ (ты)",
                                "эсир (вы)",
                                "санăн"
                            ],
                            [
                                "3-мĕш сăпат",
                                "вăл (он/она)",
                                "вĕсем (они)",
                                "унăн"
                            ]
                        ],
                        "attention": "Местоименисем падежсемпе улшăннă чухне тытăмĕ улшăнать (эпĕ -> манăн, вăл -> унăн).",
                        "mnemonic": "Эпĕ, эсĕ, вăл — эпир, эсир, вĕсем.",
                        "mistakes": [
                            {
                                "wrong": "вăлăн",
                                "right": "унăн"
                            }
                        ],
                        "check_items": [
                            "Сăпат местоименисене пĕлни",
                            "Падеж калăпăшĕсене тĕрĕс уçни"
                        ],
                        "quiz": [
                            {
                                "q": "«Вăл» местоименин илек падежĕ хăшĕ?",
                                "opts": [
                                    "вăлăн",
                                    "унăн",
                                    "вĕсен"
                                ],
                                "correct": 1,
                                "explain": "«Вăл» местоимени илек падежĕнче «унăн» пулать."
                            }
                        ]
                    },
                    {
                        "slug": "halhi-vahtat",
                        "title": "Глаголсен хальхи вăхăчĕ",
                        "subtitle": "Хальхи вăхăт сăпат аффиксĕсем",
                        "page_num": 5,
                        "table_head": [
                            "Сăпат",
                            "Местоимени",
                            "Тĕслĕх (вулайма - читать)",
                            "Тĕслĕх (çыр - писать)"
                        ],
                        "table_rows": [
                            [
                                "1-мĕш сăпат",
                                "эпĕ",
                                "вулатăп",
                                "çыратăп"
                            ],
                            [
                                "2-мĕш сăпат",
                                "эсĕ",
                                "вулатăн",
                                "çыратăн"
                            ],
                            [
                                "3-мĕш сăпат",
                                "вăл",
                                "вулать",
                                "çырать"
                            ],
                            [
                                "1-мĕш нумай",
                                "эпир",
                                "вулатпăр",
                                "çыратпăр"
                            ],
                            [
                                "2-мĕш нумай",
                                "эсир",
                                "вулатăр",
                                "çыратăр"
                            ],
                            [
                                "3-мĕш нумай",
                                "вĕсем",
                                "вулаççĕ",
                                "çыраççĕ"
                            ]
                        ],
                        "attention": "Хальхи вăхăтра глагол тытăмне -ат/-ет тата сăпат аффиксĕсем хушăнаççĕ.",
                        "mnemonic": "Эпĕ вулатăп, эсĕ вулатăн, вăл вулать.",
                        "mistakes": [
                            {
                                "wrong": "Эпĕ вулатăн",
                                "right": "Эпĕ вулатăп"
                            }
                        ],
                        "check_items": [
                            "Хальхи вăхăт аффиксĕсене сăпатсемпе сăпăрлав",
                            "Глаголсемпе тĕрĕс усă курни"
                        ],
                        "quiz": [
                            {
                                "q": "«Эпир» (мы) сăпатшăн хăш калăпăш тĕрĕс?",
                                "opts": [
                                    "вулатăп",
                                    "вулатпăр",
                                    "вулаççĕ"
                                ],
                                "correct": 1,
                                "explain": "Эпир вулатпăр (-тпăр/-тпĕр)."
                            }
                        ]
                    },
                    {
                        "slug": "irtne-vahtat",
                        "title": "Глаголсен иртнĕ вăхăчĕ",
                        "subtitle": "Билделе иртнĕ вăхăт (-рĕ/-рă)",
                        "page_num": 6,
                        "table_head": [
                            "Сăпат",
                            "Местоимени",
                            "Тĕслĕх (çырни)",
                            "Тĕслĕх (килни)"
                        ],
                        "table_rows": [
                            [
                                "1-мĕш сăпат",
                                "эпĕ",
                                "çыртăм",
                                "килтĕм"
                            ],
                            [
                                "2-мĕш сăпат",
                                "эсĕ",
                                "çыртăн",
                                "килтĕн"
                            ],
                            [
                                "3-мĕш сăпат",
                                "вăл",
                                "çыррĕ / çыртĕ",
                                "килчĕ"
                            ],
                            [
                                "1-мĕш нумай",
                                "эпир",
                                "çыртăмăр",
                                "килтĕмĕр"
                            ]
                        ],
                        "attention": "Иртнĕ вăхăт глагол тытăмĕнче аффикссем аста кура улшăнаççĕ.",
                        "mnemonic": "Эпĕ çыртăм, эсĕ çыртăн, вăл çыррĕ.",
                        "mistakes": [
                            {
                                "wrong": "Эпĕ çыррĕ",
                                "right": "Эпĕ çыртăм"
                            }
                        ],
                        "check_items": [
                            "Иртнĕ вăхăт калăпăшĕсене тĕрĕс калав",
                            "Сăпат аффиксĕсене пĕлни"
                        ],
                        "quiz": [
                            {
                                "q": "«Эпĕ» сăпатшăн иртнĕ вăхăт аффиксĕ хăшĕ?",
                                "opts": [
                                    "-тăм/-тĕм",
                                    "-тăн",
                                    "-чĕ"
                                ],
                                "correct": 0,
                                "explain": "Эпĕ çыртăм (-тăм)."
                            }
                        ]
                    },
                    {
                        "slug": "pulayas-vahtat",
                        "title": "Глаголсен пулаяс вăхăчĕ",
                        "subtitle": "Пулаяс вăхăт калăпăшĕсем (-ĕ / -а)",
                        "page_num": 7,
                        "table_head": [
                            "Сăпат",
                            "Местоимени",
                            "Тĕслĕх (кайни - идти)",
                            "Тĕслĕх (ĕçлени - работать)"
                        ],
                        "table_rows": [
                            [
                                "1-мĕш сăпат",
                                "эпĕ",
                                "кайăп",
                                "ĕçлĕп"
                            ],
                            [
                                "2-мĕш сăпат",
                                "эсĕ",
                                "кайăн",
                                "ĕçлең"
                            ],
                            [
                                "3-мĕш сăпат",
                                "вăл",
                                "кайĕ",
                                "ĕçлĕ"
                            ]
                        ],
                        "attention": "Пулаяс вăхăт ĕç пуласса кăтартать.",
                        "mnemonic": "Эпĕ кайăп (Я пойду).",
                        "mistakes": [
                            {
                                "wrong": "Эпĕ кайĕ",
                                "right": "Эпĕ кайăп"
                            }
                        ],
                        "check_items": [
                            "Пулаяс вăхăт калăпăшĕсене яни",
                            "Сăпат аффиксĕсене пĕлни"
                        ],
                        "quiz": [
                            {
                                "q": "«Эпĕ» сăпатăн пулаяс вăхăт калăпăшĕ хăшĕ?",
                                "opts": [
                                    "кайăп",
                                    "кайăн",
                                    "кайĕ"
                                ],
                                "correct": 0,
                                "explain": "Эпĕ кайăп."
                            }
                        ]
                    },
                    {
                        "slug": "otricani-formasy",
                        "title": "Глаголсен отрицани калăпăшĕ",
                        "subtitle": "-маст/-мест аффиксĕ тата мар сăмахĕ",
                        "page_num": 8,
                        "table_head": [
                            "Тĕсĕ",
                            "Положительнăй",
                            "Отрицательнăй",
                            "Тĕслĕх"
                        ],
                        "table_rows": [
                            [
                                "Глагол (хальхи)",
                                "вулать",
                                "-маст/-мест / мар",
                                "вуламаст (не читает)"
                            ],
                            [
                                "Существительное",
                                "студент",
                                "мар",
                                "студент мар (не студент)"
                            ]
                        ],
                        "attention": "Глагол отрицанийĕнче -маст/-мест аффикс хушăнать; существительнăйсемпе «мар» сăмах куçарать.",
                        "mnemonic": "Вулать -> Вуламаст; Эпĕ студент мар.",
                        "mistakes": [
                            {
                                "wrong": "Эпĕ мар студент",
                                "right": "Эпĕ студент мар"
                            }
                        ],
                        "check_items": [
                            "Глагол отрицанийĕпе сăмах отрицанийĕн уйрăмлăхне пĕлни",
                            "«Мар» сăмахне сăмах хыçне хушни"
                        ],
                        "quiz": [
                            {
                                "q": "«He does not read» чăвашла мĕнле пулать?",
                                "opts": [
                                    "вăл вуламаст",
                                    "вăл мар вулать",
                                    "вăл вулать мар"
                                ],
                                "correct": 0,
                                "explain": "Глагол отрицанийĕ: вăл вуламаст."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "pay-3",
                "file": "pay-3.html",
                "title": "3-мĕш пай · Ыйтусем, хисепсем тата пур/çук",
                "subtitle": "Ыйту аффиксĕ -и, хисеп ячĕсем, вăхăт тата пур/çук калăпăшĕ",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "ytu-formasy-tata-ytu-samahsem",
                        "title": "Ыйту калăпăшĕ тата ыйту сăмахĕсем",
                        "subtitle": "-и ыйту частици тата Кам? Мĕн? Ăçта?",
                        "page_num": 9,
                        "table_head": [
                            "Тĕсĕ",
                            "Ыйту элементы",
                            "Тĕслĕх ыйту",
                            "Васлав тĕслĕхĕ"
                        ],
                        "table_rows": [
                            [
                                "Ыйту частици",
                                "-и",
                                "Эсĕ ăнланатăн-и?",
                                "Паллах, ăнланатăп."
                            ],
                            [
                                "Кам ыйтăվĕ",
                                "Кам?",
                                "Ку кам?",
                                "Ку учитель."
                            ],
                            [
                                "Мĕн ыйтăվĕ",
                                "Мĕն?",
                                "Ку мĕн?",
                                "Ку кĕнеке."
                            ],
                            [
                                "Вырăн ыйтăվĕ",
                                "Ăçта?",
                                "Эсĕ ăçта?",
                                "Эпĕ килте."
                            ]
                        ],
                        "attention": "Ыйту сăмахĕ пулсан -и частица хушăнмасть.",
                        "mnemonic": "Эсĕ пĕлетĕн-и? vs Эсĕ ăçта кайăтăн?",
                        "mistakes": [
                            {
                                "wrong": "Ăçта эсĕ кайăтăн-и?",
                                "right": "Ăçта эсĕ кайăтăн?"
                            }
                        ],
                        "check_items": [
                            "-и ыйту частицине тĕрĕс хушни",
                            "Тĕп ыйту сăмахĕсене пĕлни"
                        ],
                        "quiz": [
                            {
                                "q": "«Эсĕ пĕлетĕн...» фразăна мĕнле ыйту частици кирлĕ?",
                                "opts": [
                                    "-и",
                                    "-мы",
                                    "-ар"
                                ],
                                "correct": 0,
                                "explain": "Чăваш чĕлхинчи ыйту частици: -и."
                            }
                        ]
                    },
                    {
                        "slug": "hisepsem-tata-vahtat",
                        "title": "Хисеп ячĕсем, вăхăт тата эрне кунĕсем",
                        "subtitle": "1-тен 10-а чакли хисепсем, сехет тата эрне кунĕсем",
                        "page_num": 10,
                        "table_head": [
                            "Хисепсем",
                            "Эрне кунĕсем",
                            "Вăхăт ыйтăвĕ",
                            "Тĕслĕх васлав"
                        ],
                        "table_rows": [
                            [
                                "1 - пĕрре, 2 - иккĕ, 3 - виçĕ",
                                "Туннтикун",
                                "Миçе сехет?",
                                "Виçĕ сехет."
                            ],
                            [
                                "4 - тăватă, 5 - пиллĕк",
                                "Ытларикун",
                                "Хăçан?",
                                "Туннтикун."
                            ],
                            [
                                "6 - улттă, 7 - Ҫиччӗ",
                                "Юнкун",
                                "Мĕнле уйăхра?",
                                "Май уйăхĕнче."
                            ]
                        ],
                        "attention": "Чăваш чĕлхинче хисеп хыçĕнчи существительнăйсем пĕррелекен калăпăшра юлаççĕ.",
                        "mnemonic": "Пиллĕк кĕнеке (not *пиллĕк кĕнекесем!).",
                        "mistakes": [
                            {
                                "wrong": "пиллĕк кĕнекесем",
                                "right": "пиллĕк кĕнеке"
                            }
                        ],
                        "check_items": [
                            "1-тен 10-а тикел хисепсене пĕлни",
                            "Хисеп хыçĕнче пĕррелекен калăпăша хушни"
                        ],
                        "quiz": [
                            {
                                "q": "«5 books» чăвашла мĕнле пулать?",
                                "opts": [
                                    "пиллĕк кĕнекесем",
                                    "пиллĕк кĕнеке",
                                    "пиллĕк кĕнекен"
                                ],
                                "correct": 1,
                                "explain": "Хисеп хыçĕнче существительнăй пĕррелекен калăпăшра пулать: пиллĕк кĕнеке."
                            }
                        ]
                    },
                    {
                        "slug": "pur-tata-suk",
                        "title": "Пур тата Çук калăпăшĕ",
                        "subtitle": "Пурлăха тата çуклăха кăтартни",
                        "page_num": 11,
                        "table_head": [
                            "Калăпăш",
                            "Мĕнле куçարăнать",
                            "Тĕслĕх предложени",
                            "Хуçаланакан аффикспа"
                        ],
                        "table_rows": [
                            [
                                "Пур",
                                "Есть / Имеются",
                                "Килте кĕнеке пур.",
                                "Манăн кĕнекем пур."
                            ],
                            [
                                "Çук",
                                "Нет / Отсутствуют",
                                "Килте кĕнеке çук.",
                                "Манăн кĕнекем çук."
                            ]
                        ],
                        "attention": "Пурлăха кăтартма «пур», çуклăха кăтартма «çук» сăмах предложени уçинче тăрать.",
                        "mnemonic": "Кĕнеке пур / Кĕнеке çук.",
                        "mistakes": [
                            {
                                "wrong": "Манăн кĕнекем мар",
                                "right": "Манăн кĕнекем çук"
                            }
                        ],
                        "check_items": [
                            "«Пур» тата «çук» сăмахсемпе тĕрĕс усă курни",
                            "Хуçаланакан аффикссемпе предложени йĕркелени"
                        ],
                        "quiz": [
                            {
                                "q": "«I have a book» чăвашла мĕнле пулать?",
                                "opts": [
                                    "Манăн кĕнеке пур",
                                    "Манăн кĕнекем пур",
                                    "Эпĕ кĕнеке пур"
                                ],
                                "correct": 1,
                                "explain": "Хуçаланакан местоименипе аффикс хушăнать: манăн кĕнекем пур."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "pay-4",
                "file": "pay-4.html",
                "title": "4-мĕш пай · Прилагательнăйсем тата предложени йĕрки",
                "subtitle": "Прилагательнăйсем, хыçсăмахсем тата SOV предложени йĕрки",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "prilagatelnyssem-tata-sov",
                        "title": "Прилагательнăйсем тата SOV предложени йĕрки",
                        "subtitle": "Прилагательнăй калăпăшĕ тата Подлежащее + Дополнение + Глагол",
                        "page_num": 12,
                        "table_head": [
                            "Прилагательнăй",
                            "Существительное",
                            "Предложени (SOV)",
                            "Куçару"
                        ],
                        "table_rows": [
                            [
                                "пысăк",
                                "çурт",
                                "Эпĕ пысăк çурт куратăп.",
                                "Я вижу большой дом."
                            ],
                            [
                                "çĕнĕ",
                                "кĕнеке",
                                "Эсĕ çĕнĕ кĕнеке вулатăн.",
                                "Ты читаешь новую книгу."
                            ],
                            [
                                "хĕрлĕ",
                                "пачăр",
                                "Вăл хĕрлĕ пачăр çиет.",
                                "Он ест красное яблоко."
                            ]
                        ],
                        "attention": "Прилагательнăй существительнăй умĕнче тăрать тата улшăнмасть. Глагол предложени уçинче (SOV) куçарать.",
                        "mnemonic": "SOV: Эпĕ (Subject) + кĕнеке (Object) + вулатăп (Verb).",
                        "mistakes": [
                            {
                                "wrong": "Эпĕ вулатăп кĕнеке",
                                "right": "Эпĕ кĕнеке вулатăп"
                            }
                        ],
                        "check_items": [
                            "Прилагательнăйсен улшăнманлăхне аста тытни",
                            "Глагола предложени уçне хушса SOV предложени йĕркелени"
                        ],
                        "quiz": [
                            {
                                "q": "Чăваш чĕлхинчи тĕп предложени йĕрки хăшĕ?",
                                "opts": [
                                    "SVO (Подлежащее-Глагол-Дополнение)",
                                    "SOV (Подлежащее-Дополнение-Глагол)",
                                    "VSO"
                                ],
                                "correct": 1,
                                "explain": "Чăваш чĕлхинчи тĕп предложени йĕрки SOV пулать (глагол предложени кĕпĕнче)."
                            }
                        ]
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
        "lead": "Հայոց լեզվի քերականության ինտերակտիվ ուղեցույց. մասեր, հոլովներ, բայեր, ինքնաստուգում և վարժություններ:",
        "back_link": "Վերադառնալ COSYlanguages գլխավոր էջ",
        "sections": [
            {
                "id": "mas-1",
                "file": "mas-1.html",
                "title": "Մաս 1 · Գոյական, հոդեր և հոլովներ",
                "subtitle": "Որոշյալ հոդեր, հոգնակի թվի կազմություն և 7 հոլովները",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "goyakan-yev-hoder",
                        "title": "Գոյական անուն և որոշյալ հոդեր",
                        "subtitle": "Որոշյալ -ը / -ն հոդերի կիրառությունը",
                        "page_num": 1,
                        "table_head": [
                            "Տեսակ",
                            "Վերջավորություն",
                            "Օրինակ",
                            "Որոշյալ ձև"
                        ],
                        "table_rows": [
                            [
                                "Անորոշ",
                                "առանց հոդի",
                                "տուն",
                                "տունը (-ը բաղաձայնից հետո)"
                            ],
                            [
                                "Որոշյալ (ձայնավորից հետո)",
                                "-ն",
                                "կատու",
                                "կատուն (-ն ձայնավորից հետո)"
                            ]
                        ],
                        "attention": "Բաղաձայնով ավարտվող բառերին ավելանում է -ը, ձայնավորով ավարտվողներին՝ -ն։",
                        "mnemonic": "Հիշեք՝ տունը (բաղաձայն), կատուն (ձայնավոր)։",
                        "mistakes": [
                            {
                                "wrong": "տունն",
                                "right": "տունը"
                            }
                        ],
                        "check_items": [
                            "Որոշյալ -ը և -ն հոդերը ճիշտ կիրառել",
                            "Բաղաձայնով և ձայնավորով ավարտվող բառերը տարբերակել"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞ր հոդն է ավելանում «կատու» բառին։",
                                "opts": [
                                    "-ը",
                                    "-ն",
                                    "-ա"
                                ],
                                "correct": 1,
                                "explain": "Ձայնավորով ավարտվող բառերն ստանում են -ն հոդը։"
                            }
                        ]
                    },
                    {
                        "slug": "hognaki-tiv",
                        "title": "Գոյականի հոգնակի թիվը",
                        "subtitle": "-եր և -ներ վերջավորությունները",
                        "page_num": 2,
                        "table_head": [
                            "Վանկերի քանակ",
                            "Վերջավորություն",
                            "Միավանկ օրինակ",
                            "Բազմավանկ օրինակ"
                        ],
                        "table_rows": [
                            [
                                "Միավանկ բառեր",
                                "-եր",
                                "տուն -> տներ",
                                "գիրք -> գրքեր"
                            ],
                            [
                                "Բազմավանկ բառեր",
                                "-ներ",
                                "սեղան -> սեղաններ",
                                "ուսանող -> ուսանողներ"
                            ]
                        ],
                        "attention": "Միավանկ բառերը հոգնակիում ստանում են -եր, բազմավանկ բառերը՝ -ներ:",
                        "mnemonic": "Մեկ վանկ = -եր | Շատ վանկ = -ներ:",
                        "mistakes": [
                            {
                                "wrong": "գրքներ",
                                "right": "գրքեր"
                            }
                        ],
                        "check_items": [
                            "Միավանկ և բազմավանկ բառերի հոգնակին կազմել",
                            "Հնչյունափոխությունը նկատել (տուն -> տներ)"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞րն է «գիրք» բառի հոգնակի ձևը։",
                                "opts": [
                                    "գրքեր",
                                    "գիրքներ",
                                    "գրքներ"
                                ],
                                "correct": 0,
                                "explain": "«Գիրք» միավանկ բառ է, ուստի հոգնակին կազմվում է -եր վերջավորությամբ՝ գրքեր։"
                            }
                        ]
                    },
                    {
                        "slug": "holovner",
                        "title": "Հայերենի 7 հոլովները",
                        "subtitle": "Ուղղական, սեռական, տրական, հայցական, բացառական, գործիական, ներգոյական",
                        "page_num": 3,
                        "table_head": [
                            "Հոլով",
                            "Հարցեր",
                            "Վերջավորություն",
                            "Օրինակ (քաղաք)"
                        ],
                        "table_rows": [
                            [
                                "Ուղղական",
                                "Ո՞վ, Ի՞նչ",
                                "—",
                                "քաղաք"
                            ],
                            [
                                "Սեռական",
                                "Ո՞ւմ, Ինչի՞",
                                "-ի / -ան",
                                "քաղաքի"
                            ],
                            [
                                "Տրական",
                                "Ո՞ւմ, Ինչի՞ն",
                                "-ի + -ն/-ը",
                                "քաղաքին"
                            ],
                            [
                                "Բացառական",
                                "Ումի՞ց, Ինչի՞ց",
                                "-ից",
                                "քաղաքից"
                            ],
                            [
                                "Գործիական",
                                "Ումո՞վ, Ինչո՞վ",
                                "-ով",
                                "քաղաքով"
                            ],
                            [
                                "Ներգոյական",
                                "Ուրտե՞ղ, Ինչո՞ւմ",
                                "-ում",
                                "քաղաքում"
                            ]
                        ],
                        "attention": "Ժամանակակից արևելահայերենն ունի 7 հոլով։",
                        "mnemonic": "Ուղղական, Սեռական, Տրական, Հայցական, Բացառական, Գործիական, Ներգոյական։",
                        "mistakes": [
                            {
                                "wrong": "քաղաքիցում",
                                "right": "քաղաքից"
                            }
                        ],
                        "check_items": [
                            "Ճանաչել 7 հոլովների վերջավորությունները",
                            "Ճիշտ կազմել բացառական, գործիական և ներգոյական հոլովները"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞ր վերջավորությունն է բացառական հոլովինը։",
                                "opts": [
                                    "-ից",
                                    "-ով",
                                    "-ում"
                                ],
                                "correct": 0,
                                "explain": "Բացառական հոլովի վերջավորությունն է «-ից» (օրինակ՝ քաղաքից)։"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mas-2",
                "file": "mas-2.html",
                "title": "Մաս 2 · Դերանուններ, բայեր և ժամանակաձևեր",
                "subtitle": "Անձնական դերանուններ, ներկա, անցյալ, ապառնի և ժխտական ձևեր",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "andznakan-deranunner",
                        "title": "Անձնական դերանուններ",
                        "subtitle": "Ես, դու, նա, մենք, դուք, նրանք",
                        "page_num": 4,
                        "table_head": [
                            "Դեմք",
                            "Եզակի թիվ",
                            "Հոգնակի թիվ",
                            "Սեռական (Սեփականություն)"
                        ],
                        "table_rows": [
                            [
                                "1-ին դեմք",
                                "ես (я)",
                                "մենք (мы)",
                                "իմ (իմ տունը)"
                            ],
                            [
                                "2-րդ դեմք",
                                "դու (ты)",
                                "դուք (вы)",
                                "քո (քո տունը)"
                            ],
                            [
                                "3-րդ դեմք",
                                "նա (он/она)",
                                "նրանք (они)",
                                "նրա (նրա տունը)"
                            ]
                        ],
                        "attention": "Սեփականատիրական դերանունները (իմ, քո, նրա) դրվում են գոյականից առաջ, իսկ գոյականը ստանում է որոշյալ հոդ:",
                        "mnemonic": "Իմ տունը, քո գիրքը, նրա ընկերը:",
                        "mistakes": [
                            {
                                "wrong": "իմ տուն",
                                "right": "իմ տունը"
                            }
                        ],
                        "check_items": [
                            "Անձնական դերանունները ճանաչել",
                            "Ստացական ձևերի հետ որոշյալ հոդ կիրառել"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞ր ձևն է ճիշտ «my book» իմաստով։",
                                "opts": [
                                    "իմ գիրք",
                                    "իմ գիրքը",
                                    "ես գիրքը"
                                ],
                                "correct": 1,
                                "explain": "Հայերենում ստացական դերանունից հետո գոյականն ստանում է որոշյալ հոդ՝ «իմ գիրքը»։"
                            }
                        ]
                    },
                    {
                        "slug": "nerka-zhamanak",
                        "title": "Ներկա ժամանակ (Սահմանական ներկա)",
                        "subtitle": "Անկատար դերբայ + օժանդակ բայ (եմ, ես, է...)",
                        "page_num": 5,
                        "table_head": [
                            "Դեմք",
                            "Դերանուն",
                            "-ում դերբայ (գրել)",
                            "Օժանդակ բայ"
                        ],
                        "table_rows": [
                            [
                                "1-ին եզակի",
                                "ես",
                                "գրում",
                                "եմ"
                            ],
                            [
                                "2-րդ եզակի",
                                "դու",
                                "գրում",
                                "ես"
                            ],
                            [
                                "3-րդ եզակի",
                                "նա",
                                "գրում",
                                "է"
                            ],
                            [
                                "1-ին հոգնակի",
                                "մենք",
                                "գրում",
                                "ենք"
                            ],
                            [
                                "2-րդ հոգնակի",
                                "դուք",
                                "գրում",
                                "եք"
                            ],
                            [
                                "3-րդ հոգնակի",
                                "նրանք",
                                "գրում",
                                "են"
                            ]
                        ],
                        "attention": "Ներկա ժամանակը կազմվում է -ում վերջավորությամբ անկատար դերբայով և «լինել» բայի ներկայի ձևերով:",
                        "mnemonic": "Ես գրում եմ, դու գրում ես, նա գրում է։",
                        "mistakes": [
                            {
                                "wrong": "Ես գրում է",
                                "right": "Ես գրում եմ"
                            }
                        ],
                        "check_items": [
                            "Կազմել ներկա ժամանակը -ում դերբայով",
                            "Օժանդակ բայը ճիշտ համաձայնեցնել դեմքի հետ"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞րն է ճիշտ ձևը «We are writing» նախադասության համար։",
                                "opts": [
                                    "Մենք գրում եմ",
                                    "Մենք գրում ենք",
                                    "Մենք գրում է"
                                ],
                                "correct": 1,
                                "explain": "Մենք դերանվան հետ օգտագործվում է «ենք» օժանդակ բայը՝ Մենք գրում ենք։"
                            }
                        ]
                    },
                    {
                        "slug": "ancyal-zhamanak",
                        "title": "Անցյալ կատարյալ ժամանակ",
                        "subtitle": "Բուն անցյալի դիմային վերջավորություններ",
                        "page_num": 6,
                        "table_head": [
                            "Դեմք",
                            "Դերանուն",
                            "-եցի վերջավորություն (գրել)",
                            "-ացի վերջավորություն (կարդալ)"
                        ],
                        "table_rows": [
                            [
                                "1-ին եզակի",
                                "ես",
                                "գրեցի",
                                "կարդացի"
                            ],
                            [
                                "2-րդ եզակի",
                                "դու",
                                "գրեցիր",
                                "կարդացիր"
                            ],
                            [
                                "3-րդ եզակի",
                                "նա",
                                "գրեց",
                                "կարդաց"
                            ],
                            [
                                "1-ին հոգնակի",
                                "մենք",
                                "գրեցինք",
                                "կարդացինք"
                            ]
                        ],
                        "attention": "Անցյալ կատարյալը ցույց է տալիս ավարտված գործողություն:",
                        "mnemonic": "Ես գրեցի, դու գրեցիր, նա գրեց։",
                        "mistakes": [
                            {
                                "wrong": "Ես գրեց",
                                "right": "Ես գրեցի"
                            }
                        ],
                        "check_items": [
                            "Անցյալ կատարյալի վերջավորությունները խոնարհել",
                            "Ավարտված գործողություն արտահայտել"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞րն է «ես» դեմքի անցյալ կատարյալ ձևը «գրել» բայի համար։",
                                "opts": [
                                    "գրեցի",
                                    "գրեցիր",
                                    "գրեց"
                                ],
                                "correct": 0,
                                "explain": "Ես գրեցի (-եցի)։"
                            }
                        ]
                    },
                    {
                        "slug": "aparni-zhamanak",
                        "title": "Ապառնի ժամանակ",
                        "subtitle": "-լու դերբայ + օժանդակ բայ",
                        "page_num": 7,
                        "table_head": [
                            "Դեմք",
                            "Դերանուն",
                            "Ապառնի դերբայ (-լու)",
                            "Օժանդակ բայ"
                        ],
                        "table_rows": [
                            [
                                "1-ին եզակի",
                                "ես",
                                "գրելու",
                                "եմ"
                            ],
                            [
                                "2-րդ եզակի",
                                "դու",
                                "գրելու",
                                "ես"
                            ],
                            [
                                "3-րդ եզակի",
                                "նա",
                                "գրելու",
                                "է"
                            ]
                        ],
                        "attention": "Ապառնի ժամանակը կազմվում է -լու վերջավորությամբ ապառնի դերբայով և ներկա օժանդակ բայով:",
                        "mnemonic": "Ես գրելու եմ (I will write)։",
                        "mistakes": [
                            {
                                "wrong": "Ես գրել եմ (որպես ապառնի)",
                                "right": "Ես գրելու եմ"
                            }
                        ],
                        "check_items": [
                            "-լու դերբայով ապառնին կազմել",
                            "Ապառնին վաղակատարից տարբերակել"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞րն է ապառնի ժամանակի ճիշտ ձևը։",
                                "opts": [
                                    "ես գրում եմ",
                                    "ես գրելու եմ",
                                    "ես գրեցի"
                                ],
                                "correct": 1,
                                "explain": "Ապառնի ժամանակը կազմվում է -լու դերբայով՝ ես գրելու եմ։"
                            }
                        ]
                    },
                    {
                        "slug": "zhtakan-formaner",
                        "title": "Բայերի ժխտական ձևերը",
                        "subtitle": "Չ- նախածանցը և ժխտական օժանդակ բայերը (չեմ, չես, չի...)",
                        "page_num": 8,
                        "table_head": [
                            "Դեմք",
                            "Հաստատական",
                            "Ժխտական օժանդակ բայ",
                            "Ժխտական ձև"
                        ],
                        "table_rows": [
                            [
                                "1-ին եզակի",
                                "գրում եմ",
                                "չեմ",
                                "չեմ գրում"
                            ],
                            [
                                "2-րդ եզակի",
                                "գրում ես",
                                "չես",
                                "չես գրում"
                            ],
                            [
                                "3-րդ եզակի",
                                "գրում է",
                                "չի",
                                "չի գրում"
                            ],
                            [
                                "1-ին հոգնակի",
                                "գրում ենք",
                                "չենք",
                                "չենք գրում"
                            ]
                        ],
                        "attention": "Ներկա ժամանակի ժխտական ձևում ժխտական օժանդակ բայը (չեմ, չես, չի...) դրվում է դերբայից առաջ:",
                        "mnemonic": "Ես գրում եմ -> Ես չեմ գրում (չ- + եմ)։",
                        "mistakes": [
                            {
                                "wrong": "Ես գրում չեմ",
                                "right": "Ես չեմ գրում"
                            }
                        ],
                        "check_items": [
                            "Ժխտական օժանդակ բայի դիրքը դերբայից առաջ դնել",
                            "3-րդ դեմքի «չի» ձևը ճիշտ կիրառել"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞րն է «He does not write» նախադասության ճիշտ թարգմանությունը։",
                                "opts": [
                                    "Նա գրում չի",
                                    "Նա չի գրում",
                                    "Նա չեմ գրում"
                                ],
                                "correct": 1,
                                "explain": "Ժխտական օժանդակ բայը դրվում է դերբայից առաջ՝ «Նա չի գրում»։"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mas-3",
                "file": "mas-3.html",
                "title": "Մաս 3 · Հարցեր, թվականներ և Կա/Չկա",
                "subtitle": "Հարցական բառեր, թվականներ, օրեր, ամիսներ և կա/չկա կառույցը",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "hartsakan-barer",
                        "title": "Հարցական բառեր և հարցում",
                        "subtitle": "Ով, ինչ, որտեղ, երբ, ինչու և հարցական նշանի (՞) դիրքը",
                        "page_num": 9,
                        "table_head": [
                            "Հարցական բառ",
                            "Իմաստ",
                            "Օրինակ հարց",
                            "Պատասխան"
                        ],
                        "table_rows": [
                            [
                                "Ո՞վ",
                                "Кто",
                                "Ո՞վ է նա:",
                                "Նա ուսուցիչ է։"
                            ],
                            [
                                "Ի՞նչ",
                                "Что",
                                "Ի՞նչ է սա:",
                                "Սա գիրք է։"
                            ],
                            [
                                "Որտե՞ղ",
                                "Где",
                                "Որտե՞ղ ես ապրում:",
                                "Ապրում եմ Երևանում։"
                            ],
                            [
                                "Ե՞րբ",
                                "Когда",
                                "Ե՞րբ ես գալու:",
                                "Գալու եմ վաղը։"
                            ]
                        ],
                        "attention": "Հայերենում հարցական նշանը (՞) դրվում է հարցնող բառի շեշտված ձայնավորի վրա, այլ ոչ թե նախադասության վերջում:",
                        "mnemonic": "Ո՞վ, Ի՞նչ, Որտե՞ղ — ոլորակը բառի վրա է:",
                        "mistakes": [
                            {
                                "wrong": "Ով է նա?",
                                "right": "Ո՞վ է նա:"
                            }
                        ],
                        "check_items": [
                            "Հարցական նշանը ճիշտ բառի ձայնավորի վրա դնել",
                            "Հիմնական հարցական բառերը կիրառել"
                        ],
                        "quiz": [
                            {
                                "q": "Որտե՞ղ է դրվում հարցական նշանը հայերենում։",
                                "opts": [
                                    "Նախադասության վերջում",
                                    "Հարցական բառի ձայնավորի վրա",
                                    "Բայի վերջում"
                                ],
                                "correct": 1,
                                "explain": "Հայերենում հարցական նշանը դրվում է հարցնող բառի շեշտված ձայնավորի վրա։"
                            }
                        ]
                    },
                    {
                        "slug": "thvakanner-yev-zhamanak",
                        "title": "Թվականներ, օրեր և ամիսներ",
                        "subtitle": "Քանակական թվականներ, ժամեր և շաբաթվա օրեր",
                        "page_num": 10,
                        "table_head": [
                            "Թվականներ",
                            "Շաբաթվա օրեր",
                            "Ժամի հարցում",
                            "Պատասխան"
                        ],
                        "table_rows": [
                            [
                                "1 - մեկ, 2 - երկու, 3 - երեք",
                                "Երկուշաբթի",
                                "Ժամը քանի՞սն է:",
                                "Ժամը երեքն է։"
                            ],
                            [
                                "4 - չորս, 5 - հինգ",
                                "Երեքշաբթի",
                                "Ե՞րբ:",
                                "Երկուշաբթի օրը։"
                            ],
                            [
                                "6 - վեց, 7 - յոթ",
                                "Չորեքշաբթի",
                                "Ո՞ր ամսին:",
                                "Մայիս ամսին։"
                            ]
                        ],
                        "attention": "Թվականից հետո գոյականը սովորաբար դրվում է եզակի թվով (հինգ գիրք):",
                        "mnemonic": "Հինգ գիրք (not *հինգ գրքեր!):",
                        "mistakes": [
                            {
                                "wrong": "հինգ գրքեր",
                                "right": "հինգ գիրք"
                            }
                        ],
                        "check_items": [
                            "1-ից 10 թվականները ճանաչել",
                            "Թվականից հետո գոյականը եզակի թվով դնել"
                        ],
                        "quiz": [
                            {
                                "q": "«5 books» հայերեն ինչպե՞ս կլինի։",
                                "opts": [
                                    "հինգ գրքեր",
                                    "հինգ գիրք",
                                    "հինգ գրքի"
                                ],
                                "correct": 1,
                                "explain": "Թվականից հետո գոյականը դրվում է եզակի թվով՝ հինգ գիրք։"
                            }
                        ]
                    },
                    {
                        "slug": "ka-yev-chka",
                        "title": "Կա և Չկա կառույցները",
                        "subtitle": "Գոյություն և բացակայություն արտահայտող կառույցներ",
                        "page_num": 11,
                        "table_head": [
                            "Կառույց",
                            "Իմաստ",
                            "Օրինակ նախադասություն",
                            "Հոգնակի ձև"
                        ],
                        "table_rows": [
                            [
                                "Կա",
                                "Есть / Имеются",
                                "Սեղանին գիրք կա։",
                                "Սեղանին գրքեր կան։"
                            ],
                            [
                                "Չկա",
                                "Нет / Отсутствуют",
                                "Սեղանին գիրք չկա։",
                                "Սեղանին գրքեր չկան։"
                            ]
                        ],
                        "attention": "Եզակի գոյականի հետ օգտագործվում է կա/չկա, հոգնակիի հետ՝ կան/չկան:",
                        "mnemonic": "Գիրք կա (եզակի) | Գրքեր կան (հոգնակի)։",
                        "mistakes": [
                            {
                                "wrong": "Սեղանին գրքեր կա",
                                "right": "Սեղանին գրքեր կան"
                            }
                        ],
                        "check_items": [
                            "Կա/չկա ձևերը եզակիի հետ կիրառել",
                            "Կան/չկան ձևերը հոգնակիի հետ կիրառել"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞րն է ճիշտ ձևը «There are books on the table» նախադասության համար։",
                                "opts": [
                                    "Սեղանին գրքեր կա",
                                    "Սեղանին գրքեր կան",
                                    "Սեղանին գիրք կան"
                                ],
                                "correct": 1,
                                "explain": "Հոգնակի գոյականի հետ օգտագործվում է «կան» ձևը՝ Սեղանին գրքեր կան։"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mas-4",
                "file": "mas-4.html",
                "title": "Մաս 4 · Ածականներ, կապեր և նախադասության կառուցվածք",
                "subtitle": "Ածականների անփոփոխությունը, կապեր (հետ, համար, առաջ) և SOV/SVO շարադասությունը",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "atsakanner",
                        "title": "Ածական անուն",
                        "subtitle": "Ածականների անփոփոխությունն ու համադրումը",
                        "page_num": 12,
                        "table_head": [
                            "Ածական",
                            "Գոյական",
                            "Միասին",
                            "Հոգնակիի հետ"
                        ],
                        "table_rows": [
                            [
                                "մեծ",
                                "տուն",
                                "մեծ տուն",
                                "մեծ տներ (ածականը չի փոխվում)"
                            ],
                            [
                                "կարմիր",
                                "գիրք",
                                "կարմիր գիրք",
                                "կարմիր գրքեր"
                            ],
                            [
                                "նոր",
                                "ուսանող",
                                "նոր ուսանող",
                                "նոր ուսանողներ"
                            ]
                        ],
                        "attention": "Հայերենում ածականները չեն փոխվում ըստ թվի կամ հոլովի գոյականի հետ համադրվելիս:",
                        "mnemonic": "Մեծ տուն -> մեծ տներ (մեծ-ը չի փոխվում)։",
                        "mistakes": [
                            {
                                "wrong": "մեծեր տներ",
                                "right": "մեծ տներ"
                            }
                        ],
                        "check_items": [
                            "Ածականը գոյականից առաջ դնել",
                            "Ածականի անփոփոխությունը պահպանել"
                        ],
                        "quiz": [
                            {
                                "q": "«Red books» հայերեն ինչպե՞ս կլինի։",
                                "opts": [
                                    "կարմիրներ գրքեր",
                                    "կարմիր գրքեր",
                                    "կարմիր գիրք"
                                ],
                                "correct": 1,
                                "explain": "Ածականը հոգնակի վերջավորություն չի ստանում՝ կարմիր գրքեր։"
                            }
                        ]
                    },
                    {
                        "slug": "kaper-yev-sharadasutyun",
                        "title": "Կապեր (հետ, համար) և նախադասության կարգ",
                        "subtitle": "Ետադրություններ, նախադրություններ և SVO/SOV բառակարգը",
                        "page_num": 13,
                        "table_head": [
                            "Կապի տեսակ",
                            "Կապ",
                            "Օրինակ",
                            "Նախադասություն (SVO/SOV)"
                        ],
                        "table_rows": [
                            [
                                "Ետադրություն (հետ)",
                                "հետ (с)",
                                "ընկերոջ հետ",
                                "Ես խոսում եմ ընկերոջս հետ։"
                            ],
                            [
                                "Ետադրություն (համար)",
                                "համար (для)",
                                "քեզ համար",
                                "Սա քեզ համար է։"
                            ],
                            [
                                "Ետադրություն (առաջ)",
                                "առաջ (до/перед)",
                                "դասից առաջ",
                                "Դասից առաջ կարդում եմ։"
                            ]
                        ],
                        "attention": "Հայերենում կապերի մեծ մասը ետադրություններ են, այսինքն դրվում են գոյականից ՀԵՏՈ:",
                        "mnemonic": "Ընկերոջ հետ (с другом), քեզ համար (для тебя)։",
                        "mistakes": [
                            {
                                "wrong": "հետ ընկերոջ",
                                "right": "ընկերոջ հետ"
                            }
                        ],
                        "check_items": [
                            "Ետադրությունները գոյականից հետո դնել",
                            "SVO և SOV նախադասությունների ճկունությունը հասկանալ"
                        ],
                        "quiz": [
                            {
                                "q": "Ո՞րն է «with a friend» ճիշտ թարգմանությունը։",
                                "opts": [
                                    "հետ ընկերոջ",
                                    "ընկերոջ հետ",
                                    "ընկերոջ համար"
                                ],
                                "correct": 1,
                                "explain": "Հայերենում «հետ» կապը դրվում է գոյականից հետո՝ ընկերոջ հետ։"
                            }
                        ]
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
        "lead": "ქართული ენის გრამატიკის ინტერაქტიული სახელმძღვანელო: ნაწილები, ბრუნვები, ზმნები, თვითშემოწმება და სავარჯიშოები.",
        "back_link": "COSYlanguages-ის მთავარ გვერდზე დაბრუნება",
        "sections": [
            {
                "id": "nacili-1",
                "file": "nacili-1.html",
                "title": "ნაწილი 1 · არსებითი სახელი, მრავლობითი და ბრუნვები",
                "subtitle": "სახელის ფუძე, მრავლობითი რიცხვი (-ებ) და 7 ბრუნვა",
                "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "brunvebi",
                        "title": "არსებითი სახელის ბრუნვები",
                        "subtitle": "სახელობითი, მოთხრობითი, მიცემითი და სხვა ბრუნვები",
                        "page_num": 1,
                        "table_head": [
                            "ბრუნვა",
                            "ბრუნვის ნიშანი",
                            "მაგალითი",
                            "წინადადება"
                        ],
                        "table_rows": [
                            [
                                "სახელობითი",
                                "-ი",
                                "კაცი",
                                "კაცი წერს"
                            ],
                            [
                                "მოთხრობითი",
                                "-მ / -მა",
                                "კაცმა",
                                "კაცმა დაწერა"
                            ],
                            [
                                "მიცემითი",
                                "-ს",
                                "კაცს",
                                "კაცს აქვს წიგნი"
                            ],
                            [
                                "ნათესაობითი",
                                "-ის",
                                "კაცის",
                                "კაცის სახლი"
                            ],
                            [
                                "მოქმედებითი",
                                "-ით",
                                "კაცით",
                                "ტრანსპორტით"
                            ],
                            [
                                "ვითარებითი",
                                "-ად / -დ",
                                "კაცად",
                                "ექიმად მუშაობს"
                            ],
                            [
                                "წოდებითი",
                                "-ო",
                                "კაცო",
                                "მეგობარო!"
                            ]
                        ],
                        "attention": "ქართულ ენაში არსებით სახელებს 7 ბრუნვა აქვთ. მოთხრობითი ბრუნვა გამოიყენება გარდამავალი ზმნის სუბიექტთან წყვეტილში (წარსულში).",
                        "mnemonic": "დაიხსომეთ: კაცი (სახ.), კაცმა (მოთხ.), კაცს (მიც.).",
                        "mistakes": [
                            {
                                "wrong": "კაცი წერს (წარსულში)",
                                "right": "კაცმა დაწერა"
                            }
                        ],
                        "check_items": [
                            "ბრუნვის ნიშნების ცნობა არსებით სახელებში",
                            "მოთხრობითი ბრუნვის სწორად გამოყენება"
                        ],
                        "quiz": [
                            {
                                "q": "რა არის მოთხრობითი ბრუნვის ნიშანი?",
                                "opts": [
                                    "-ი",
                                    "-მ / -მა",
                                    "-ს"
                                ],
                                "correct": 1,
                                "explain": "მოთხრობითი ბრუნვის ნიშანია -მ ან -მა."
                            }
                        ]
                    },
                    {
                        "slug": "mravlobiti-ricxvi",
                        "title": "მრავლობითი რიცხვი (-ებ)",
                        "subtitle": "არსებითი სახელის მრავლობითი ფორმები",
                        "page_num": 2,
                        "table_head": [
                            "მხოლობითი",
                            "ფუძის ცვლილება",
                            "მრავლობითი",
                            "მაგალითი"
                        ],
                        "table_rows": [
                            [
                                "წიგნი",
                                "-ი ჩამოცილება",
                                "წიგნები",
                                "საინტერესო წიგნები"
                            ],
                            [
                                "სახლი",
                                "-ი ჩამოცილება",
                                "სახლები",
                                "დიდი სახლები"
                            ],
                            [
                                "ქალაქი",
                                "-ი ჩამოცილება",
                                "ქალაქები",
                                "ლამაზი ქალაქები"
                            ]
                        ],
                        "attention": "მრავლობითი რიცხვი იწარმოება -ებ სუფიქსით. ხმოვანზე დაბოლოებული სახელები ჩამოიშორებენ ბოლო ხმოვანს ან იკვეცებიან.",
                        "mnemonic": "წიგნი -> წიგნები (-ი ვარდება, ემატება -ები).",
                        "mistakes": [
                            {
                                "wrong": "წიგნიები",
                                "right": "წიგნები"
                            }
                        ],
                        "check_items": [
                            "მრავლობითი -ებ სუფიქსის დამატება",
                            "სახელის ბოლო ხმოვნის ჩამოცილება"
                        ],
                        "quiz": [
                            {
                                "q": "როგორ იქნება «სახლი» მრავლობით რიცხვში?",
                                "opts": [
                                    "სახლიები",
                                    "სახლები",
                                    "სახლნი"
                                ],
                                "correct": 1,
                                "explain": "ბოლო -ი ჩამოცილდება და ემატება -ები: სახლები."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "nacili-2",
                "file": "nacili-2.html",
                "title": "ნაწილი 2 · ნაცვალსახელები, ზმნა, ზმნისწინები და უარყოფა",
                "subtitle": "პირის, კუთვნილებითი და ჩვენებითი ნაცვალსახელები, აწმყო/მომავალი, ზმნისწინები და უარყოფა",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "piris-nacvalsaxelebi",
                        "title": "პირის და კუთვნილებითი ნაცვალსახელები",
                        "subtitle": "მე, შენ, ის, ჩემი, შენი, მისი",
                        "page_num": 3,
                        "table_head": [
                            "პირი",
                            "მხოლობითი",
                            "მრავლობითი",
                            "კუთვნილებითი"
                        ],
                        "table_rows": [
                            [
                                "1-ლი პირი",
                                "მე (я)",
                                "ჩვენ (мы)",
                                "ჩემი (ჩემი წიგნი)"
                            ],
                            [
                                "2-რე პირი",
                                "შენ (ты)",
                                "თქვენ (вы)",
                                "შენი (შენი სახლი)"
                            ],
                            [
                                "3-მე პირი",
                                "ის / მან (он/она)",
                                "ისინი / მათ (они)",
                                "მისი (მისი მეგობარი)"
                            ]
                        ],
                        "attention": "კუთვნილებითი ნაცვალსახელები (ჩემი, შენი, მისი) დგანან არსებითი სახელის წინ.",
                        "mnemonic": "ჩემი სახლი, შენი წიგნი, მისი მეგობარი.",
                        "mistakes": [
                            {
                                "wrong": "მე სახლი",
                                "right": "ჩემი სახლი"
                            }
                        ],
                        "check_items": [
                            "პირის ნაცვალსახელების ცნობა",
                            "კუთვნილებითი ნაცვალსახელების სწორად გამოყენება"
                        ],
                        "quiz": [
                            {
                                "q": "რომელია კუთვნილებითი ნაცვალსახელი 1-ლი პირისთვის («my»)?",
                                "opts": [
                                    "მე",
                                    "ჩემი",
                                    "ჩვენი"
                                ],
                                "correct": 1,
                                "explain": "1-ლი პირის კუთვნილებითი ფორმაა «ჩემი»."
                            }
                        ]
                    },
                    {
                        "slug": "chvenebiti-nacvalsaxelebi",
                        "title": "ჩვენებითი ნაცვალსახელები",
                        "subtitle": "ეს, ეგ, ის (ახლოს, შენთან, შორს)",
                        "page_num": 4,
                        "table_head": [
                            "ნაცვალსახელი",
                            "მნიშვნელობა",
                            "მანძილი",
                            "მაგალითი"
                        ],
                        "table_rows": [
                            [
                                "ეს",
                                "этот / эта / это",
                                "ჩემთან (ახლოს)",
                                "ეს წიგნი (ეს წიგნი ჩემთანაა)"
                            ],
                            [
                                "ეგ",
                                "этот / тот",
                                "შენთან (შუაშისტური)",
                                "ეგ კალამი (ეგ კალამი შენთანაა)"
                            ],
                            [
                                "ის",
                                "тот / та / то",
                                "შორს (იქ)",
                                "ის სახლი (ის სახლი შორს არის)"
                            ]
                        ],
                        "attention": "ქართულში ჩვენებითი ნაცვალსახელების სამწევრიანი სისტემაა: ეს (ჩემთან), ეგ (შენთან), ის (შორს).",
                        "mnemonic": "ეს (1-ლი პირი) | ეგ (მე-2 პირი) | ის (მე-3 პირი).",
                        "mistakes": [
                            {
                                "wrong": "ეს სახლი (შორს)",
                                "right": "ის სახლი"
                            }
                        ],
                        "check_items": [
                            "სამი ჩვენებითი ნაცვალსახელის გარჩევა",
                            "მანძილის მიხედვით სწორად გამოყენება"
                        ],
                        "quiz": [
                            {
                                "q": "რომელი ჩვენებითი ნაცვალსახელი გამოიყენება მსმენელთან (შენთან) ახლოს მყოფ საგანზე?",
                                "opts": [
                                    "ეს",
                                    "ეგ",
                                    "ის"
                                ],
                                "correct": 1,
                                "explain": "მსმენელთან (მე-2 პირთან) ახლოს მყოფ საგანზე გამოიყენება «ეგ»."
                            }
                        ]
                    },
                    {
                        "slug": "zmna-da-droebrivi-fortmebi",
                        "title": "ზმნა და დროები",
                        "subtitle": "აწმყო, წარსული (წყვეტილი) და მომავალი დრო",
                        "page_num": 5,
                        "table_head": [
                            "დრო",
                            "მაგალითი (წერა)",
                            "მნიშვნელობა",
                            "ზმნისწინი"
                        ],
                        "table_rows": [
                            [
                                "აწმყო",
                                "წერს",
                                "ახლა წერს",
                                "—"
                            ],
                            [
                                "წარსული (წყვეტილი)",
                                "დაწერა",
                                "უკვე დაწერა",
                                "და-"
                            ],
                            [
                                "მომავალი",
                                "დაწერს",
                                "მომავალში დაწერს",
                                "და-"
                            ]
                        ],
                        "attention": "ზმნისწინი (მაგ. და-) ხშირად ცვლის აწმყოს მომავალ დროდ (წერს -> დაწერს).",
                        "mnemonic": "აწმყო: წერს | მომავალი: დაწერს | წყვეტილი: დაწერა.",
                        "mistakes": [
                            {
                                "wrong": "ის დაწერს ახლა",
                                "right": "ის წერს ახლა"
                            }
                        ],
                        "check_items": [
                            "აწმყო და მომავალი დროის გარჩევა",
                            "ზმნისწინების გამოყენება მომავალ დროში"
                        ],
                        "quiz": [
                            {
                                "q": "რომელია მომავალი დრო ზმნისა «წერს»?",
                                "opts": [
                                    "წერს",
                                    "დაწერა",
                                    "დაწერს"
                                ],
                                "correct": 2,
                                "explain": "ზმნისწინების «და-» დამატებით აწმყოს ფორმა «წერს» ხდება მომავალი დრო: «დაწერს»."
                            }
                        ]
                    },
                    {
                        "slug": "zmneshtsinebi",
                        "title": "ზმნისწინები (მი-, მო-, ა-, ჩა-, და-)",
                        "subtitle": "მიმართულება და ასპექტი ქართულ ზმნაში",
                        "page_num": 6,
                        "table_head": [
                            "ზმნისწინი",
                            "მიმართულება",
                            "მაგალითი",
                            "მნიშვნელობა"
                        ],
                        "table_rows": [
                            [
                                "მი-",
                                "მოშორებით (იქით)",
                                "მიდის",
                                "მიდის (уходит)"
                            ],
                            [
                                "მო-",
                                "მოახლოებით (აქეთ)",
                                "მოდის",
                                "მოდის (приходит)"
                            ],
                            [
                                "ა-",
                                "ზევით",
                                "ადიან",
                                "ადიან (поднимаются)"
                            ],
                            [
                                "ჩა-",
                                "ქვევით / შიგნით",
                                "ჩადის",
                                "ჩადის (спускается)"
                            ]
                        ],
                        "attention": "ზმნისწინი «მი-» აღნიშნავს მოძრაობას მოლაპარაკისგან იქით, ხოლო «მო-» აღნიშნავს მოძრაობას მოლაპარაკისკენ აქეთ.",
                        "mnemonic": "მიდის (туда) | მოდის (сюда).",
                        "mistakes": [
                            {
                                "wrong": "ის მიდის აქეთ",
                                "right": "ის მოდის აქეთ"
                            }
                        ],
                        "check_items": [
                            "მი- და მო- ზმნისწინების გარჩევა",
                            "მიმართულების სწორად გამოხატვა ზმნაში"
                        ],
                        "quiz": [
                            {
                                "q": "რომელი ზმნისწინი გამოიყენება მოლაპარაკისკენ (აქეთ) მოძრაობისას?",
                                "opts": [
                                    "მი-",
                                    "მო-",
                                    "ჩა-"
                                ],
                                "correct": 1,
                                "explain": "მოლაპარაკისკენ (აქეთ) მოძრაობისას გამოიყენება «მო-» ზმნისწინი: მოდის."
                            }
                        ]
                    },
                    {
                        "slug": "uayofiti-nacilakebi",
                        "title": "უარყოფითი ნაწილაკები (არ, ვერ, ნუ)",
                        "subtitle": "ფაქტის უარყოფა (არ), შესაძლებლობის (ვერ) და აკრძალვის (ნუ)",
                        "page_num": 7,
                        "table_head": [
                            "ნაწილაკი",
                            "მნიშვნელობა",
                            "მაგალითი",
                            "წინადადება"
                        ],
                        "table_rows": [
                            [
                                "არ",
                                "არ (ფაქტი)",
                                "არ ვწერ",
                                "მე არ ვწერ წერილს."
                            ],
                            [
                                "ვერ",
                                "не могу (შესაძლებლობა)",
                                "ვერ ვწერ",
                                "მე ვერ ვწერ (ხელი მტკივა)."
                            ],
                            [
                                "ნუ",
                                "не (ბრძანება/აკრძალვა)",
                                "ნუ წერ!",
                                "ნუ წერ აქ!"
                            ]
                        ],
                        "attention": "ქართულში სამი უარყოფითი ნაწილაკია: «არ» (ფაქტი), «ვერ» (შესაძლებლობის არქონა), «ნუ» (აკრძალვა).",
                        "mnemonic": "არ ვწერ (не пишу) | ვერ ვწერ (не могу писать) | ნუ წერ (не пиши!).",
                        "mistakes": [
                            {
                                "wrong": "არ შემიძლია (ნაცვლად ვერ ვწერ)",
                                "right": "ვერ ვწერ"
                            }
                        ],
                        "check_items": [
                            "სამი უარყოფითი ნაწილაკის განსხვავება",
                            "«ნუ» ნაწილაკის გამოყენება ბრძანებითში"
                        ],
                        "quiz": [
                            {
                                "q": "რომელი უარყოფითი ნაწილაკი გამოიყენება აკრძალვისას?",
                                "opts": [
                                    "არ",
                                    "ვერ",
                                    "ნუ"
                                ],
                                "correct": 2,
                                "explain": "აკრძალვისას და თხოვნისას გამოიყენება ნაწილაკი «ნუ»."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "nacili-3",
                "file": "nacili-3.html",
                "title": "ნაწილი 3 · კითხვები, რიცხვები, დრო და არის/არ არის",
                "subtitle": "კითხვითი სიტყვები, რიცხვები, კვირის დღეები/თვეები და არის/არ არის / აქვს/არ აქვს",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "kitxbiti-sitkvebi",
                        "title": "კითხვითი სიტყვები და კითხვა",
                        "subtitle": "ვინ, რა, სად, როდის, რატომ",
                        "page_num": 8,
                        "table_head": [
                            "კითხვითი სიტყვა",
                            "მნიშვნელობა",
                            "მაგალითი კითხვა",
                            "პასუხი"
                        ],
                        "table_rows": [
                            [
                                "ვინ?",
                                "Кто?",
                                "ვინ არის ის?",
                                "ის მასწავლებელია."
                            ],
                            [
                                "რა?",
                                "Что?",
                                "რა არის ეს?",
                                "ეს წიგნია."
                            ],
                            [
                                "სად?",
                                "Где?",
                                "სად ცხოვრობ?",
                                "თბილისში ვცხოვრობ."
                            ],
                            [
                                "როდის?",
                                "Когда?",
                                "როდის მოხვალ?",
                                "ხვალ მოვალ."
                            ]
                        ],
                        "attention": "კითხვითი წინადადების ბოლოს ზმნას ხშირად დაერთვის კითხვითი აფიქსი ან კითხვითი სიტყვა დგება ზმნის წინ.",
                        "mnemonic": "ვინ? რა? სად? როდის?",
                        "mistakes": [
                            {
                                "wrong": "სად ის არის?",
                                "right": "სად არის ის?"
                            }
                        ],
                        "check_items": [
                            "ძირითადი კითხვითი სიტყვების ცნობა",
                            "კითხვითი წინადადების აგება"
                        ],
                        "quiz": [
                            {
                                "q": "რომელი სიტყვა გამოიყენება ადგილის საკითხავად?",
                                "opts": [
                                    "ვინ",
                                    "რა",
                                    "სად"
                                ],
                                "correct": 2,
                                "explain": "ადგილის საკითხავად გამოიყენება სიტყვა «სად»."
                            }
                        ]
                    },
                    {
                        "slug": "ricxvebi-da-dro",
                        "title": "რიცხვები და თვლა",
                        "subtitle": "რაოდენობითი რიცხვითი სახელები 1-დან 10-მდე",
                        "page_num": 9,
                        "table_head": [
                            "რიცხვები",
                            "სახელი",
                            "არსებითთან ერთად",
                            "წესი"
                        ],
                        "table_rows": [
                            [
                                "1 - 3",
                                "ერთი, ორი, სამი",
                                "სამი წიგნი",
                                "არსებითი მხოლობითშია!"
                            ],
                            [
                                "4 - 7",
                                "ოთხი, ხუთი, ექვსი, შვიდი",
                                "ხუთი სახლი",
                                "არსებითი მხოლობითშია!"
                            ],
                            [
                                "8 - 10",
                                "რვა, ცხრა, ათი",
                                "ათი სტუდენტი",
                                "არსებითი მხოლობითშია!"
                            ]
                        ],
                        "attention": "რიცხვითი სახელის შემდეგ არსებითი სახელი ყოველთვის დგება მხოლობით რიცხვში (ხუთი წიგნი).",
                        "mnemonic": "ხუთი წიგნი (not *ხუთი წიგნები!).",
                        "mistakes": [
                            {
                                "wrong": "ხუთი წიგნები",
                                "right": "ხუთი წიგნი"
                            }
                        ],
                        "check_items": [
                            "1-დან 10-მდე რიცხვების ცნობა",
                            "რიცხვითის შემდეგ მხოლობითი რიცხვის გამოყენება"
                        ],
                        "quiz": [
                            {
                                "q": "როგორ იქნება «5 books» ქართულად?",
                                "opts": [
                                    "ხუთი წიგნები",
                                    "ხუთი წიგნი",
                                    "ხუთი წიგნს"
                                ],
                                "correct": 1,
                                "explain": "რიცხვითი სახელის შემდეგ არსებითი სახელი დგება მხოლობით რიცხვში: ხუთი წიგნი."
                            }
                        ]
                    },
                    {
                        "slug": "dro-da-dgeebi",
                        "title": "საათი, კვირის დღეები და თვეები",
                        "subtitle": "დროის გამოხატვა, კვირის დღეები და წელიწადის დროები",
                        "page_num": 10,
                        "table_head": [
                            "კვირის დღეები",
                            "თვეები",
                            "საათის კითხვა",
                            "პასუხი"
                        ],
                        "table_rows": [
                            [
                                "ორშაბათი",
                                "იანვარი, თებერვალი",
                                "რომელი საათია?",
                                "ორი საათია."
                            ],
                            [
                                "სამშაბათი",
                                "მარტი, აპრილი, მაისი",
                                "როდის?",
                                "ორშაბათს."
                            ],
                            [
                                "ოთხშაბათი",
                                "ივნისი, ივლისი",
                                "რომელ საათზე?",
                                "სამ საათზე."
                            ]
                        ],
                        "attention": "დროის აღსანიშნავად გამოიყენება მიცემითი ბრუნვის ნიშანი -ს (ორშაბათს) ან თანდებული -ზე (სამ საათზე).",
                        "mnemonic": "ორშაბათს (в понедельник) | სამ საათზე (в 3 часа).",
                        "mistakes": [
                            {
                                "wrong": "ორშაბათი (в 의미)",
                                "right": "ორშაბათს"
                            }
                        ],
                        "check_items": [
                            "კვირის დღეების ცნობა",
                            "დროის გამოხატვა მიცემითი ბრუნვით (-ს / -ზე)"
                        ],
                        "quiz": [
                            {
                                "q": "როგორ იტყვით «в понедельник» ქართულად?",
                                "opts": [
                                    "ორშაბათი",
                                    "ორშაბათს",
                                    "ორშაბათზე"
                                ],
                                "correct": 1,
                                "explain": "დღის აღსანიშნავად გამოიყენება მიცემითი ბრუნვის ნიშანი -ს: ორშაბათს."
                            }
                        ]
                    },
                    {
                        "slug": "aris-da-ar-aris",
                        "title": "არის / არ არის და აქვს / არ აქვს",
                        "subtitle": "არსებობა, მდგომარეობა და ქონება",
                        "page_num": 11,
                        "table_head": [
                            "ფორმულირება",
                            "მნიშვნელობა",
                            "მაგალითი",
                            "უარყოფითი"
                        ],
                        "table_rows": [
                            [
                                "არის (Short: -ა)",
                                "Есть / Является",
                                "წიგნი მაგიდაზეა.",
                                "წიგნი არ არის მაგიდაზე."
                            ],
                            [
                                "მაქვს / აქვს",
                                "Имеется (У меня/მას)",
                                "წიგნი მაქვს / მას აქვს წიგნი",
                                "წიგნი არ მაქვს / არ აქვს"
                            ]
                        ],
                        "attention": "ყოფნა ზმნის ფორმა «არის» ხშირად სუფიქსის «-ა» სახით ერწყმის არსებით სახელებს (მაგიდაზეა). ქონებისათვის უსულო საგნებზე გამოიყენება «მაქვს / აქვს».",
                        "mnemonic": "სახლშია (= სახლში არის) | წიგნი მაქვს (у меня есть книга).",
                        "mistakes": [
                            {
                                "wrong": "ის არ არის სახლშია",
                                "right": "ის არ არის სახლში"
                            }
                        ],
                        "check_items": [
                            "«არის» და «არ არის» ფორმების გამოყენება",
                            "ქონების «მაქვს / აქვს» ზმნების ცნობა"
                        ],
                        "quiz": [
                            {
                                "q": "როგორ იქნება «He is not at home»?",
                                "opts": [
                                    "ის არ არის სახლში",
                                    "ის არის არ სახლში",
                                    "ის არ სახლშია"
                                ],
                                "correct": 0,
                                "explain": "სწორი უარყოფითი ფორმაა «ის არ არის სახლში»."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "nacili-4",
                "file": "nacili-4.html",
                "title": "ნაწილი 4 · ზედსართავი სახელი, თანდებულები და სიტყვათა რიგი",
                "subtitle": "ზედსართავის ბრუნება, თანდებულები (-ში, -ზე, -თან) და SOV რიგი",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "zedsartavi-saxeli",
                        "title": "ზედსართავი სახელი და შეთანხმება",
                        "subtitle": "ზედსართავი სახელის ბრუნება არსებითთან",
                        "page_num": 12,
                        "table_head": [
                            "ზედსართავი",
                            "არსებითი",
                            "სახელობითი",
                            "მიცემითი (შეთანხმება)"
                        ],
                        "table_rows": [
                            [
                                "დიდი",
                                "სახლი",
                                "დიდი სახლი",
                                "დიდ სახლს (-ი ვარდება!)"
                            ],
                            [
                                "ახალი",
                                "წიგნი",
                                "ახალი წიგნი",
                                "ახალ წიგნს"
                            ],
                            [
                                "წითელი",
                                "ვაშლი",
                                "წითელი ვაშლი",
                                "წითელ ვაშლს"
                            ]
                        ],
                        "attention": "თანხმოვანფუძიანი ზედსართავი სახელი ბრუნვებში (მიცემითი, ნათესაობითი და ა.შ.) ჩამოიშორებს ბოლო -ი ხმოვანს (დიდი -> დიდ სახლს).",
                        "mnemonic": "დიდი სახლი -> დიდ სახლს (ხმოვანი -ი ვარდება!).",
                        "mistakes": [
                            {
                                "wrong": "დიდი სახლს",
                                "right": "დიდ სახლს"
                            }
                        ],
                        "check_items": [
                            "ზედსართავის ფუძის კვეცა ბრუნებისას",
                            "ზედსართავის არსებითის წინ დაყენება"
                        ],
                        "quiz": [
                            {
                                "q": "როგორ იქნება «in a big house» (მიცემითი)?",
                                "opts": [
                                    "დიდი სახლში",
                                    "დიდ სახლში",
                                    "დიდმა სახლში"
                                ],
                                "correct": 1,
                                "explain": "ზედსართავი ჩამოიშორებს -ი ხმოვანს: დიდ სახლში."
                            }
                        ]
                    },
                    {
                        "slug": "tandebulebi-da-sitkvata-rigi",
                        "title": "თანდებულები (-ში, -ზე, -თან) და SOV რიგი",
                        "subtitle": "ნათესაობითის, მიცემითის თანდებულები და SOV სიტყვათა რიგი",
                        "page_num": 13,
                        "table_head": [
                            "თანდებული",
                            "ბრუნვა",
                            "მაგალითი",
                            "წინადადება (SOV)"
                        ],
                        "table_rows": [
                            [
                                "-ში (в)",
                                "მიცემითი",
                                "სახლში",
                                "მე სახლში ვარ."
                            ],
                            [
                                "-ზე (на)",
                                "მიცემითი",
                                "მაგიდაზე",
                                "წიგნი მაგიდაზე დევს."
                            ],
                            [
                                "-თან (у/к)",
                                "მიცემითი",
                                "მეგობართან",
                                "მე მეგობართან მივდივარ."
                            ]
                        ],
                        "attention": "ქართულში წინდებულები არ არის, თანდებულები დაერთვის არსებით სახელებს ბოლოს. ქართული ენის ძირითადი სიტყვათა რიგია SOV (სუბიექტი-ობიექტი-ზმნა).",
                        "mnemonic": "SOV: მე (S) + წიგნს (O) + ვწერ (V).",
                        "mistakes": [
                            {
                                "wrong": "მე ვწერ წიგნს (ჩვეულებრივ რიგში)",
                                "right": "მე წიგნს ვწერ"
                            }
                        ],
                        "check_items": [
                            "თანდებულების -ში, -ზე, -თან სწორად დაერთვა",
                            "SOV (სუბიექტი-ობიექტი-ზმნა) რიგის დაცვა"
                        ],
                        "quiz": [
                            {
                                "q": "რომელია ქართული ენის ძირითადი სიტყვათა რიგი?",
                                "opts": [
                                    "SVO (სუბიექტი-ზმნა-ობიექტი)",
                                    "SOV (სუბიექტი-ობიექტი-ზმნა)",
                                    "VSO"
                                ],
                                "correct": 1,
                                "explain": "ქართული ენის ნეიტრალური სიტყვათა რიგია SOV (სუბიექტი-ობიექტი-ზმნა)."
                            }
                        ]
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
